// Cloudflare Pages Function: /api/sync
// Handles POST: Atomic synchronization of user XP, streaks, personal bests, and unlocked badges

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

  const id = (body.id || '').toString().trim();
  if (!id) {
    return jsonResponse({ success: false, error: 'Field "id" is required' }, 400);
  }

  try {
    // 1. Fetch current profile state
    const existing = await db.prepare(
      'SELECT id, name, role, avatar, COALESCE(level, 1) as level, xp, streak, bests_json, badges_json, country, created_at, updated_at FROM profiles WHERE id = ?'
    ).bind(id).first();

    let name = (body.name || '').toString().trim();
    let role = body.role === 'parent' ? 'parent' : 'student';
    let avatar = (body.avatar || '').toString().trim();
    let country = (body.country || '').toString().trim();
    let currentXP = 0;
    let currentStreak = 0;
    let mergedBests = {};
    let mergedBadges = new Set();

    if (existing) {
      name = name || existing.name;
      role = body.role ? role : existing.role;
      avatar = avatar || existing.avatar;
      country = country || existing.country;
      currentXP = Number(existing.xp) || 0;
      currentStreak = Number(existing.streak) || 0;

      const existingBests = parseJsonField(existing.bests_json, {});
      mergedBests = { ...existingBests };

      const existingBadges = parseJsonField(existing.badges_json, []);
      if (Array.isArray(existingBadges)) {
        existingBadges.forEach(b => mergedBadges.add(b));
      }
    } else {
      name = name || ('Chef ' + id);
      avatar = avatar || '🎒';
      country = country || 'Global';
    }

    // 2. Compute atomic XP update
    let newXP = currentXP;
    if (body.xpGained !== undefined && body.xpGained !== null) {
      const gained = parseInt(body.xpGained, 10) || 0;
      newXP = Math.max(0, currentXP + gained);
    } else if (body.xp !== undefined && body.xp !== null) {
      const explicitXP = parseInt(body.xp, 10) || 0;
      newXP = Math.max(currentXP, explicitXP);
    }

    // 3. Compute atomic streak update (monotonic increment)
    let newStreak = currentStreak;
    if (body.streak !== undefined && body.streak !== null) {
      const incomingStreak = parseInt(body.streak, 10) || 0;
      newStreak = Math.max(currentStreak, incomingStreak);
    }

    // 4. Merge personal bests (take highest score for each game)
    if (body.bests && typeof body.bests === 'object') {
      for (const [game, score] of Object.entries(body.bests)) {
        const numScore = parseInt(score, 10) || 0;
        const prevScore = parseInt(mergedBests[game], 10) || 0;
        mergedBests[game] = Math.max(prevScore, numScore);
      }
    }

    // 5. Merge unlocked badges (union of unique badges)
    if (Array.isArray(body.unlockedBadges)) {
      body.unlockedBadges.forEach(b => {
        if (typeof b === 'string' && b.trim()) {
          mergedBadges.add(b.trim());
        }
      });
    }

    const bestsJson = JSON.stringify(mergedBests);
    const badgesJson = JSON.stringify(Array.from(mergedBadges));
    const currentLevel = existing ? (Number(existing.level) || 1) : 1;
    const computedLevel = role === 'parent'
      ? (newXP >= 1201 ? 3 : newXP >= 451 ? 2 : 1)
      : (newXP >= 801 ? 3 : newXP >= 301 ? 2 : 1);
    const level = Math.max(1, parseInt(body.level, 10) || currentLevel || computedLevel);

    // 6. Upsert profile
    await db.prepare(`
      INSERT INTO profiles (id, name, role, avatar, level, xp, streak, bests_json, badges_json, country, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
      ON CONFLICT(id) DO UPDATE SET
        name = excluded.name,
        role = excluded.role,
        avatar = excluded.avatar,
        level = excluded.level,
        xp = excluded.xp,
        streak = excluded.streak,
        bests_json = excluded.bests_json,
        badges_json = excluded.badges_json,
        country = excluded.country,
        updated_at = datetime('now')
    `).bind(id, name, role, avatar, level, newXP, newStreak, bestsJson, badgesJson, country).run();

    // 7. Mirror to overall leaderboard
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
    `).bind(id, name, avatar, role, level, newXP, newXP, newStreak, country).run();

    return jsonResponse({
      success: true,
      message: 'Atomic sync completed successfully',
      profile: {
        id,
        name,
        role,
        avatar,
        level,
        xp: newXP,
        streak: newStreak,
        bests: mergedBests,
        unlockedBadges: Array.from(mergedBadges),
        country,
        updated_at: new Date().toISOString()
      }
    }, 200);
  } catch (err) {
    return jsonResponse({ success: false, error: err.message || 'Sync failed' }, 500);
  }
}
