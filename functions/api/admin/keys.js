// Cloudflare Pages Function: /api/admin/keys
// Handles GET (List API keys), POST (Generate API key), and DELETE (Revoke API key)

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }
  });
}

function generateRandomHex(length = 32) {
  const chars = '0123456789abcdef';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

async function ensureKeysTable(db) {
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS api_keys (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key_id TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      key_prefix TEXT NOT NULL,
      key_token TEXT NOT NULL,
      scope TEXT NOT NULL DEFAULT 'read',
      status TEXT NOT NULL DEFAULT 'active',
      expires_at DATETIME DEFAULT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `).run();
}

// --------------------------------------------------------------------
// 1. GET /api/admin/keys (List API Keys)
// --------------------------------------------------------------------
export async function onRequestGet(context) {
  const { env } = context;
  const db = env?.DB;

  if (!db) {
    return jsonResponse({ success: false, error: 'Database binding (DB) not configured' }, 503);
  }

  try {
    await ensureKeysTable(db);
    const res = await db.prepare(`
      SELECT id, key_id, name, key_prefix, scope, status, expires_at, created_at
      FROM api_keys
      ORDER BY created_at DESC
      LIMIT 100
    `).all();

    const keys = (res.results || []).map(r => ({
      id: r.id,
      keyId: r.key_id,
      name: r.name,
      prefix: r.key_prefix,
      scope: r.scope,
      status: r.status,
      expiresAt: r.expires_at,
      createdAt: r.created_at
    }));

    return jsonResponse({
      success: true,
      count: keys.length,
      keys
    }, 200);
  } catch (err) {
    return jsonResponse({ success: false, error: err.message || 'Failed to list API keys' }, 500);
  }
}

// --------------------------------------------------------------------
// 2. POST /api/admin/keys (Generate New API Key)
// --------------------------------------------------------------------
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

  const name = (body.name || body.label || 'API Client').toString().trim();
  const scope = (body.scope || 'read_write').toString().trim();
  const expiryDays = parseInt(body.expiryDays, 10);

  let expiresAt = null;
  if (!isNaN(expiryDays) && expiryDays > 0) {
    const expDate = new Date();
    expDate.setDate(expDate.getDate() + expiryDays);
    expiresAt = expDate.toISOString();
  }

  // Generate secure token: ff_live_<32 hex chars>
  const hex = generateRandomHex(32);
  const token = `ff_live_${hex}`;
  const keyId = `key_${generateRandomHex(8)}`;
  const keyPrefix = `${token.slice(0, 12)}...${token.slice(-4)}`;

  try {
    await ensureKeysTable(db);

    await db.prepare(`
      INSERT INTO api_keys (key_id, name, key_prefix, key_token, scope, status, expires_at)
      VALUES (?, ?, ?, ?, ?, 'active', ?)
    `).bind(keyId, name, keyPrefix, token, scope, expiresAt).run();

    return jsonResponse({
      success: true,
      action: 'created',
      key: {
        keyId,
        name,
        prefix: keyPrefix,
        token, // Returned once upon creation for admin to copy
        scope,
        status: 'active',
        expiresAt,
        createdAt: new Date().toISOString()
      }
    }, 201);
  } catch (err) {
    return jsonResponse({ success: false, error: err.message || 'Failed to generate API key' }, 500);
  }
}

// --------------------------------------------------------------------
// 3. DELETE /api/admin/keys (Revoke API Key)
// --------------------------------------------------------------------
export async function onRequestDelete(context) {
  const { request, env } = context;
  const db = env?.DB;

  if (!db) {
    return jsonResponse({ success: false, error: 'Database binding (DB) not configured' }, 503);
  }

  const url = new URL(request.url);
  const keyId = url.searchParams.get('keyId');

  if (!keyId) {
    return jsonResponse({ success: false, error: 'Query parameter "keyId" is required' }, 400);
  }

  try {
    await ensureKeysTable(db);

    await db.prepare(`
      UPDATE api_keys
      SET status = 'revoked'
      WHERE key_id = ?
    `).bind(keyId).run();

    return jsonResponse({
      success: true,
      action: 'revoked',
      keyId
    }, 200);
  } catch (err) {
    return jsonResponse({ success: false, error: err.message || 'Failed to revoke API key' }, 500);
  }
}
