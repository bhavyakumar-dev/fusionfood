// Cloudflare Pages Function: /api/leaderboard
// Handles GET: Retrieve global leaderboard rankings filtered by challenge or overall XP

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }
  });
}

const VALID_FILTERS = new Set(['all', 'overall', 'hotPotato', 'buildDish', 'trivia', 'pronunciation', 'scienceSpins']);

export async function onRequestGet(context) {
  const { request, env } = context;
  const db = env?.DB;

  if (!db) {
    return jsonResponse({ success: false, error: 'Database binding (DB) not configured' }, 503);
  }

  const url = new URL(request.url);
  const rawFilter = (url.searchParams.get('filter') || 'all').toString().trim();
  const filter = VALID_FILTERS.has(rawFilter) ? rawFilter : 'all';

  let limit = parseInt(url.searchParams.get('limit'), 10);
  if (isNaN(limit) || limit <= 0) {
    limit = 25;
  }
  limit = Math.min(limit, 100);

  try {
    let rows;
    if (filter === 'all' || filter === 'overall') {
      const query = `
        SELECT user_id, user_name, avatar, role, COALESCE(level, 1) AS level, game_type, score, xp, streak, country, updated_at
        FROM leaderboard
        WHERE game_type = 'overall'
        ORDER BY level DESC, xp DESC
        LIMIT ?
      `;
      const res = await db.prepare(query).bind(limit).all();
      rows = res.results || [];
    } else {
      const query = `
        SELECT user_id, user_name, avatar, role, COALESCE(level, 1) AS level, game_type, score, xp, streak, country, updated_at
        FROM leaderboard
        WHERE game_type = ?
        ORDER BY score DESC, level DESC, xp DESC
        LIMIT ?
      `;
      const res = await db.prepare(query).bind(filter, limit).all();
      rows = res.results || [];
    }

    const leaderboard = rows.map((row, index) => ({
      rank: index + 1,
      userId: row.user_id,
      userName: row.user_name,
      avatar: row.avatar || '🎒',
      role: row.role || 'student',
      level: Number(row.level) || 1,
      gameType: row.game_type,
      score: Number(row.score) || 0,
      xp: Number(row.xp) || 0,
      streak: Number(row.streak) || 0,
      country: row.country || 'Global',
      updatedAt: row.updated_at
    }));

    return jsonResponse({
      success: true,
      filter,
      count: leaderboard.length,
      leaderboard
    }, 200);
  } catch (err) {
    return jsonResponse({ success: false, error: err.message || 'Leaderboard query failed' }, 500);
  }
}
