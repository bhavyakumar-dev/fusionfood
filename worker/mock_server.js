// ====================================================================
// Fusion Food Family Lab - Local Mock Server & Test Runner
// Zero-external-dependency Node.js server powered by native node:sqlite
// ====================================================================

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';
import workerModule from './index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const SCHEMA_PATH = path.join(PROJECT_ROOT, 'schema.sql');

// --------------------------------------------------------------------
// 1. Cloudflare D1 Database Adapter over node:sqlite DatabaseSync
// --------------------------------------------------------------------
export function createD1MockDatabase(schemaPath = SCHEMA_PATH) {
  const db = new DatabaseSync(':memory:');

  if (fs.existsSync(schemaPath)) {
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    db.exec(schemaSql);
  } else {
    throw new Error(`Schema file not found at: ${schemaPath}`);
  }

  return {
    prepare(sql) {
      let boundParams = [];
      const stmt = db.prepare(sql);

      const queryObj = {
        bind(...params) {
          boundParams = params;
          return queryObj;
        },
        async first(col) {
          const row = stmt.get(...boundParams);
          if (!row) return null;
          if (col && typeof col === 'string') return row[col];
          return row;
        },
        async all() {
          const rows = stmt.all(...boundParams);
          return { results: rows, success: true };
        },
        async run() {
          const info = stmt.run(...boundParams);
          return {
            success: true,
            meta: {
              changes: info.changes,
              last_row_id: Number(info.lastInsertRowid)
            }
          };
        }
      };

      return queryObj;
    },

    async batch(statements) {
      const results = [];
      for (const s of statements) {
        results.push(await s.run());
      }
      return results;
    },

    async exec(sql) {
      db.exec(sql);
    },

    // Raw underlying SQLite instance for direct test inspection
    _rawDb: db
  };
}

// --------------------------------------------------------------------
// 2. In-Memory KV Namespace Fallback Adapter
// --------------------------------------------------------------------
export function createKVMock() {
  const store = new Map();
  return {
    async get(key, type = 'text') {
      const val = store.get(key);
      if (val === undefined) return null;
      if (type === 'json') {
        try { return JSON.parse(val); } catch (e) { return null; }
      }
      return val;
    },
    async put(key, value) {
      store.set(key, typeof value === 'string' ? value : JSON.stringify(value));
    },
    async delete(key) {
      store.delete(key);
    },
    async list() {
      return { keys: Array.from(store.keys()).map(name => ({ name })) };
    }
  };
}

// --------------------------------------------------------------------
// 3. HTTP Server Request Bridge (Node http -> Fetch Request -> Worker)
// --------------------------------------------------------------------
export function createServer(options = {}) {
  const d1 = options.db || createD1MockDatabase();
  const kv = options.kv || createKVMock();

  const env = {
    DB: d1,
    KV: kv,
    ENVIRONMENT: 'development',
    APP_NAME: 'Fusion Food Family Lab Mock Server'
  };

  const server = http.createServer(async (req, res) => {
    try {
      const protocol = 'http';
      const host = req.headers.host || 'localhost:8787';
      const fullUrl = `${protocol}://${host}${req.url}`;

      // Read request body
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      const bodyBuffer = Buffer.concat(chunks);
      const hasBody = req.method !== 'GET' && req.method !== 'HEAD' && bodyBuffer.length > 0;

      // Construct standard WHATWG Request
      const fetchRequest = new Request(fullUrl, {
        method: req.method,
        headers: req.headers,
        body: hasBody ? bodyBuffer : undefined
      });

      // Execute worker fetch handler
      const workerResponse = await workerModule.fetch(fetchRequest, env, {});

      // Send response back to Node http client
      res.statusCode = workerResponse.status;
      res.statusMessage = workerResponse.statusText;

      workerResponse.headers.forEach((val, key) => {
        res.setHeader(key, val);
      });

      const responseBuffer = Buffer.from(await workerResponse.arrayBuffer());
      res.end(responseBuffer);
    } catch (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: false, error: err.message || 'Mock Server Error' }));
    }
  });

  return { server, env, d1 };
}

// --------------------------------------------------------------------
// 4. Automated Verification Test Suite Runner
// --------------------------------------------------------------------
export async function runSelfVerification() {
  console.log('====================================================');
  console.log('  Fusion Food Family Lab - API Verification Suite   ');
  console.log('====================================================\n');

  const { server, d1 } = createServer();
  const port = 8799;

  await new Promise((resolve) => server.listen(port, resolve));
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`[Test Server] Running on ${baseUrl}\n`);

  let passed = 0;
  let failed = 0;

  async function assertTest(name, fn) {
    process.stdout.write(`• ${name.padEnd(52, '.')} `);
    const start = Date.now();
    try {
      await fn();
      const elapsed = Date.now() - start;
      console.log(`\x1b[32mPASS\x1b[0m (${elapsed}ms)`);
      passed++;
    } catch (e) {
      console.log(`\x1b[31mFAIL\x1b[0m: ${e.message}`);
      failed++;
    }
  }

  try {
    // Test 1: Health check
    await assertTest('GET /api/health returns 200 and healthy status', async () => {
      const res = await fetch(`${baseUrl}/api/health`);
      if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
      const data = await res.json();
      if (data.status !== 'ok') throw new Error(`Expected status: ok, got ${data.status}`);
    });

    // Test 2: CORS Preflight
    await assertTest('OPTIONS /api/leaderboard returns 204 with CORS', async () => {
      const res = await fetch(`${baseUrl}/api/leaderboard`, {
        method: 'OPTIONS',
        headers: { 'Origin': 'https://foodfusionweb.pages.dev' }
      });
      if (res.status !== 204) throw new Error(`Expected 204, got ${res.status}`);
      const allowOrigin = res.headers.get('access-control-allow-origin');
      if (!allowOrigin) throw new Error('Missing Access-Control-Allow-Origin header');
    });

    // Test 3: Leaderboard (Overall)
    await assertTest('GET /api/leaderboard?filter=all returns seed rankings', async () => {
      const res = await fetch(`${baseUrl}/api/leaderboard?filter=all&limit=5`);
      if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
      const data = await res.json();
      if (!data.success || !Array.isArray(data.leaderboard)) throw new Error('Invalid leaderboard payload');
      if (data.leaderboard.length !== 5) throw new Error(`Expected 5 items, got ${data.leaderboard.length}`);
      if (data.leaderboard[0].rank !== 1) throw new Error('First item rank is not 1');
      if (data.leaderboard[0].level === undefined) throw new Error('Leaderboard item missing level property');
      if (data.leaderboard[0].level < data.leaderboard[1].level) throw new Error('Items not sorted by level DESC');
      if (data.leaderboard[0].level === data.leaderboard[1].level && data.leaderboard[0].xp < data.leaderboard[1].xp) {
        throw new Error('Items not sorted by level DESC then XP DESC');
      }
    });

    // Test 4: Leaderboard (Challenge Filter: hotPotato)
    await assertTest('GET /api/leaderboard?filter=hotPotato returns arcade ranks', async () => {
      const res = await fetch(`${baseUrl}/api/leaderboard?filter=hotPotato&limit=4`);
      if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
      const data = await res.json();
      if (data.filter !== 'hotPotato') throw new Error(`Expected filter hotPotato, got ${data.filter}`);
      if (data.leaderboard[0].score < data.leaderboard[1].score) throw new Error('Not sorted by score DESC');
    });

    // Test 5: Profile GET
    await assertTest('GET /api/profile?id=chef_priya returns profile data', async () => {
      const res = await fetch(`${baseUrl}/api/profile?id=chef_priya`);
      if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
      const data = await res.json();
      if (!data.success || !data.profile) throw new Error('Missing profile in response');
      if (data.profile.name !== 'Chef Priya') throw new Error(`Expected Chef Priya, got ${data.profile.name}`);
      if (data.profile.xp !== 4500) throw new Error(`Expected 4500 XP, got ${data.profile.xp}`);
      if (typeof data.profile.bests !== 'object') throw new Error('bests is not an object');
      if (!Array.isArray(data.profile.unlockedBadges)) throw new Error('unlockedBadges is not an array');
    });

    // Test 6: Profile GET 404
    await assertTest('GET /api/profile?id=unknown_chef returns 404', async () => {
      const res = await fetch(`${baseUrl}/api/profile?id=unknown_chef`);
      if (res.status !== 404) throw new Error(`Expected 404, got ${res.status}`);
      const data = await res.json();
      if (data.success !== false) throw new Error('Expected success: false');
    });

    // Test 7: Profile GET 400 on missing id
    await assertTest('GET /api/profile returns 400 on missing id', async () => {
      const res = await fetch(`${baseUrl}/api/profile`);
      if (res.status !== 400) throw new Error(`Expected 400, got ${res.status}`);
    });

    // Test 8: Profile POST (Create / Upsert)
    await assertTest('POST /api/profile creates new player profile', async () => {
      const payload = {
        id: 'test_student_1',
        name: 'Aarav Sharma',
        role: 'student',
        avatar: '🌶️',
        xp: 850,
        streak: 4,
        country: 'India',
        bests: { hotPotato: 14, trivia: 7 },
        unlockedBadges: ['🌱 Junior Taster', '🔥 Spice Apprentice']
      };
      const res = await fetch(`${baseUrl}/api/profile`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
      const data = await res.json();
      if (!data.success || data.profile.id !== 'test_student_1') throw new Error('Profile was not created properly');
      if (data.profile.bests.hotPotato !== 14) throw new Error('Bests not saved');
    });

    // Test 9: Profile POST /api/sync (Atomic update)
    await assertTest('POST /api/sync atomically increments XP and merges bests', async () => {
      const syncPayload = {
        id: 'test_student_1',
        xpGained: 200,
        streak: 5,
        bests: { hotPotato: 22, buildDish: 8 },
        unlockedBadges: ['🥘 Dish Master']
      };
      const res = await fetch(`${baseUrl}/api/sync`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(syncPayload)
      });
      if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
      const data = await res.json();
      if (data.profile.xp !== 1050) throw new Error(`Expected 1050 XP (850 + 200), got ${data.profile.xp}`);
      if (data.profile.streak !== 5) throw new Error(`Expected 5 day streak, got ${data.profile.streak}`);
      if (data.profile.bests.hotPotato !== 22) throw new Error(`Expected best hotPotato 22, got ${data.profile.bests.hotPotato}`);
      if (data.profile.bests.trivia !== 7) throw new Error(`Previous best trivia 7 lost, got ${data.profile.bests.trivia}`);
      if (!data.profile.unlockedBadges.includes('🥘 Dish Master') || !data.profile.unlockedBadges.includes('🌱 Junior Taster')) {
        throw new Error('Badges union merge failed');
      }
    });

    // Test 10: Submit Score POST (New High Score)
    await assertTest('POST /api/submit-score records new high score and dynamic rank', async () => {
      const scorePayload = {
        userId: 'test_student_1',
        userName: 'Aarav Sharma',
        avatar: '🌶️',
        role: 'student',
        gameType: 'hotPotato',
        score: 55, // higher than Chef Priya's 42
        xpGained: 100,
        country: 'India'
      };
      const res = await fetch(`${baseUrl}/api/submit-score`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(scorePayload)
      });
      if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
      const data = await res.json();
      if (!data.success) throw new Error('Submission returned success: false');
      if (!data.isNewHighScore) throw new Error('Expected isNewHighScore: true');
      if (data.rank !== 1) throw new Error(`Expected rank 1 with score 55, got rank ${data.rank}`);
      // Mini-game submissions clamp xpGained to 0 (only 'overall' updates XP to prevent duplicate grants)
      if (data.totalXP !== 1050) throw new Error(`Expected totalXP 1050, got ${data.totalXP}`);
    });

    // Test 11: Submit Score POST (Lower score does not overwrite personal best)
    await assertTest('POST /api/submit-score preserves personal best on lower score', async () => {
      const scorePayload = {
        userId: 'test_student_1',
        userName: 'Aarav Sharma',
        gameType: 'hotPotato',
        score: 20 // lower than previous 55
      };
      const res = await fetch(`${baseUrl}/api/submit-score`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(scorePayload)
      });
      if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
      const data = await res.json();
      if (data.isNewHighScore !== false) throw new Error('Expected isNewHighScore: false');
      if (data.score !== 55) throw new Error(`Expected score to remain 55, got ${data.score}`);
    });

    // Test 12: Submit Score POST 400 on invalid gameType
    await assertTest('POST /api/submit-score returns 400 on invalid gameType', async () => {
      const invalidPayload = {
        userId: 'test_student_1',
        userName: 'Aarav',
        gameType: 'nonExistentGame',
        score: 10
      };
      const res = await fetch(`${baseUrl}/api/submit-score`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(invalidPayload)
      });
      if (res.status !== 400) throw new Error(`Expected 400, got ${res.status}`);
    });

    // Test 13: 404 on Unknown API route
    await assertTest('GET /api/nonexistent-route returns 404 JSON', async () => {
      const res = await fetch(`${baseUrl}/api/nonexistent-route`);
      if (res.status !== 404) throw new Error(`Expected 404, got ${res.status}`);
      const data = await res.json();
      if (data.success !== false) throw new Error('Expected success: false');
    });

  } finally {
    server.close();
  }

  console.log('\n----------------------------------------------------');
  console.log(`Results: ${passed} passed, ${failed} failed (${passed + failed} total)`);
  console.log('----------------------------------------------------\n');

  if (failed > 0) {
    process.exit(1);
  } else {
    console.log('\x1b[32m✔ All Cloudflare D1 Backend & API tests passed successfully!\x1b[0m\n');
  }
}

// --------------------------------------------------------------------
// 5. CLI Invocation Handler
// --------------------------------------------------------------------
if (process.argv.includes('--test') || process.argv.includes('-t')) {
  runSelfVerification().catch((err) => {
    console.error('Test run failed with unexpected error:', err);
    process.exit(1);
  });
} else if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  const PORT = parseInt(process.env.PORT, 10) || 8787;
  const { server } = createServer();
  server.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`  Fusion Food Family Lab - Local Mock Server Active   `);
    console.log(`======================================================`);
    console.log(`  • Server URL:    http://localhost:${PORT}/api/health`);
    console.log(`  • Leaderboard:   http://localhost:${PORT}/api/leaderboard?filter=all`);
    console.log(`  • User Profile:  http://localhost:${PORT}/api/profile?id=chef_priya`);
    console.log(`  • CORS Status:   All origins enabled (* and pages.dev)`);
    console.log(`  • Database:      In-Memory SQLite with schema.sql seeds`);
    console.log(`  • Stop:          Press Ctrl+C to terminate\n`);
  });
}
