// Cloudflare Pages Function: /api/submit-score
// Handles POST: Submit arcade challenge high scores to the global leaderboard

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }
  });
}

function parseJsonField(val, fallback) {
  if (!val) return fallback;
  if (typeof val === 'object') return val;
  try {
    return JSON.parse(val);
  } catch (e) {
    return fallback;
  }
}

const ALLOWED_GAMES = new Set(['hotPotato', 'buildDish', 'trivia', 'pronunciation', 'scienceSpins']);

export async function onRequestPost(context) {
  const { request, env } = context;
  const db = env?.DB;

  if (!db) {
    return jsonResponse({ success: false, error: 'Database binding (DB) not configured' }, 503);
  }

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return jsonResponse({ success: false, error: 'Invalid JSON request body' }, 400);
  }

  const userId = (body.userId || body.id || '').toString().trim();
  const userName = (body.userName || body.name || '').toString().trim();
  const gameType = (body.gameType || '').toString().trim();
  const avatar = (body.avatar || '🎒').toString().trim();
  const role = body.role === 'parent' ? 'parent' : 'student';
  const country = (body.country || 'Global').toString().trim();
  const score = parseInt(body.score, 10);
  const xpGained = Math.max(0, parseInt(body.xpGained, 10) || 0);

  if (!userId || !userName) {
    return jsonResponse({ success: false, error: 'Fields "userId" and "userName" are required' }, 400);
  }

  if (!ALLOWED_GAMES.has(gameType)) {
    return jsonResponse({
      success: false,
      error: `Invalid gameType "${gameType}". Allowed games: ${Array.from(ALLOWED_GAMES).join(', ')}`
    }, 400);
  }

  if (isNaN(score) || score < 0) {
    return jsonResponse({ success: false, error: 'Field "score" must be a non-negative integer' }, 400);
  }

  try {
    // 1. Fetch current profile to sync XP & bests
    const profile = await db.prepare(
      'SELECT id, name, role, avatar, COALESCE(level, 1) as level, xp, streak, bests_json, badges_json, country FROM profiles WHERE id = ?'
    ).bind(userId).first();

    const currentProfileXP = profile ? (Number(profile.xp) || 0) : 0;
    const currentStreak = profile ? (Number(profile.streak) || 0) : 0;
    const currentLevel = profile ? (Number(profile.level) || 1) : 1;
    const newXP = currentProfileXP + xpGained;
    const userLevel = Math.max(1, parseInt(body.level, 10) || currentLevel);

    // 2. Check existing leaderboard entry for this game_type
    const existingEntry = await db.prepare(
      'SELECT id, score, xp FROM leaderboard WHERE user_id = ? AND game_type = ?'
    ).bind(userId, gameType).first();

    let isNewHighScore = false;
    let finalScore = score;

    if (existingEntry) {
      const prevScore = Number(existingEntry.score) || 0;
      if (score > prevScore) {
        isNewHighScore = true;
        finalScore = score;
        await db.prepare(`
          UPDATE leaderboard
          SET user_name = ?, avatar = ?, role = ?, level = ?, score = ?, xp = ?, country = ?, updated_at = datetime('now')
          WHERE user_id = ? AND game_type = ?
        `).bind(userName, avatar, role, userLevel, score, newXP, country, userId, gameType).run();
      } else {
        isNewHighScore = false;
        finalScore = prevScore;
        // Still update XP and level if gained
        if (xpGained > 0) {
          await db.prepare(`
            UPDATE leaderboard
            SET user_name = ?, avatar = ?, role = ?, level = ?, xp = ?, country = ?, updated_at = datetime('now')
            WHERE user_id = ? AND game_type = ?
          `).bind(userName, avatar, role, userLevel, newXP, country, userId, gameType).run();
        }
      }
    } else {
      isNewHighScore = true;
      finalScore = score;
      await db.prepare(`
        INSERT INTO leaderboard (user_id, user_name, avatar, role, level, game_type, score, xp, streak, country, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
      `).bind(userId, userName, avatar, role, userLevel, gameType, score, newXP, currentStreak, country).run();
    }

    // 3. Update profile table with new XP, level, and updated bests
    if (profile) {
      const bests = parseJsonField(profile.bests_json, {});
      bests[gameType] = Math.max(parseInt(bests[gameType], 10) || 0, finalScore);

      await db.prepare(`
        UPDATE profiles
        SET xp = ?, level = ?, bests_json = ?, updated_at = datetime('now')
        WHERE id = ?
      `).bind(newXP, userLevel, JSON.stringify(bests), userId).run();

      // Also ensure overall leaderboard is updated with level
      await db.prepare(`
        INSERT INTO leaderboard (user_id, user_name, avatar, role, level, game_type, score, xp, streak, country, updated_at)
        VALUES (?, ?, ?, ?, ?, 'overall', ?, ?, ?, ?, datetime('now'))
        ON CONFLICT(user_id, game_type) DO UPDATE SET
          user_name = excluded.user_name,
          avatar = excluded.avatar,
          role = excluded.role,
          level = excluded.level,
          score = excluded.score,
          xp = excluded.xp,
          streak = excluded.streak,
          country = excluded.country,
          updated_at = datetime('now')
      `).bind(userId, userName, avatar, role, userLevel, newXP, newXP, currentStreak, country).run();
    }

    // 4. Calculate dynamic rank for this game
    const rankResult = await db.prepare(
      'SELECT COUNT(*) + 1 as rank FROM leaderboard WHERE game_type = ? AND score > ?'
    ).bind(gameType, finalScore).first();

    const rank = rankResult ? (Number(rankResult.rank) || 1) : 1;

    return jsonResponse({
      success: true,
      message: isNewHighScore ? 'New personal best recorded!' : 'Score recorded',
      isNewHighScore,
      gameType,
      score: finalScore,
      submittedScore: score,
      rank,
      xpGained,
      totalXP: newXP
    }, 200);
  } catch (err) {
    return jsonResponse({ success: false, error: err.message || 'Score submission failed' }, 500);
  }
}
