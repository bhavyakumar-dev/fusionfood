// Cloudflare Pages Function: /api/profile
// Handles GET (retrieve user profile) and POST (create/update user profile)

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }
  });
}

function parseProfileRow(row) {
  if (!row) return null;
  let bests = {};
  let unlockedBadges = [];
  try {
    bests = typeof row.bests_json === 'string' ? JSON.parse(row.bests_json) : (row.bests_json || {});
  } catch (e) {
    bests = {};
  }
  try {
    unlockedBadges = typeof row.badges_json === 'string' ? JSON.parse(row.badges_json) : (row.badges_json || []);
  } catch (e) {
    unlockedBadges = [];
  }

  return {
    id: row.id,
    name: row.name,
    role: row.role || 'student',
    avatar: row.avatar || '🎒',
    level: Number(row.level) || 1,
    xp: Number(row.xp) || 0,
    streak: Number(row.streak) || 0,
    bests,
    unlockedBadges,
    country: row.country || 'Global',
    created_at: row.created_at,
    updated_at: row.updated_at
  };
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const db = env?.DB;

  if (!db) {
    return jsonResponse({ success: false, error: 'Database binding (DB) not configured' }, 503);
  }

  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (!id) {
    return jsonResponse({ success: false, error: 'Missing required query parameter: id' }, 400);
  }

  try {
    const row = await db.prepare(
      'SELECT id, name, role, avatar, COALESCE(level, 1) as level, xp, streak, bests_json, badges_json, country, created_at, updated_at FROM profiles WHERE id = ?'
    ).bind(id).first();

    if (!row) {
      return jsonResponse({ success: false, error: `Profile not found for id: ${id}` }, 404);
    }

    return jsonResponse({
      success: true,
      profile: parseProfileRow(row)
    });
  } catch (err) {
    return jsonResponse({ success: false, error: err.message || 'Database query failed' }, 500);
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
  const name = (body.name || '').toString().trim();
  const role = body.role === 'parent' ? 'parent' : 'student';
  const avatar = (body.avatar || '🎒').toString();
  const xp = Math.max(0, parseInt(body.xp, 10) || 0);
  const computedLevel = role === 'parent'
    ? (xp >= 1201 ? 3 : xp >= 451 ? 2 : 1)
    : (xp >= 801 ? 3 : xp >= 301 ? 2 : 1);
  const level = Math.max(1, parseInt(body.level, 10) || computedLevel);
  const streak = Math.max(0, parseInt(body.streak, 10) || 0);
  const country = (body.country || 'Global').toString().trim();

  if (!id || !name) {
    return jsonResponse({ success: false, error: 'Fields "id" and "name" are required and cannot be empty' }, 400);
  }

  const bestsJson = JSON.stringify(body.bests || {});
  const badgesJson = JSON.stringify(Array.isArray(body.unlockedBadges) ? body.unlockedBadges : []);

  try {
    // Upsert into profiles
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
    `).bind(id, name, role, avatar, level, xp, streak, bestsJson, badgesJson, country).run();

    // Mirror overall standing into leaderboard
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
    `).bind(id, name, avatar, role, level, xp, xp, streak, country).run();

    const updatedRow = await db.prepare(
      'SELECT id, name, role, avatar, COALESCE(level, 1) as level, xp, streak, bests_json, badges_json, country, created_at, updated_at FROM profiles WHERE id = ?'
    ).bind(id).first();

    return jsonResponse({
      success: true,
      message: 'Profile saved successfully',
      profile: parseProfileRow(updatedRow)
    }, 200);
  } catch (err) {
    return jsonResponse({ success: false, error: err.message || 'Failed to save profile' }, 500);
  }
}
