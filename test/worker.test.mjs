import test from 'node:test';
import assert from 'node:assert/strict';
import worker, { validateScore, validateHouseScore } from '../worker/index.mjs';
import { LEVELS } from '../src/levels.js';
import { HOUSE } from '../src/house.js';

const origin = 'https://stubenflieger.8e4.de';
const runId = 'da678781-4d31-4274-a69e-799e01ae86de';
const sample = { run: runId, name: 'Test Pilot', blocks: 3, stars: 2, level: 1, flightMs: 999 };

function memoryDB({ race = false } = {}) {
  const records = new Map();
  const calls = [];
  return {
    records, calls,
    prepare(sql) {
      const statement = {
        values: [],
        bind(...values) { this.values = values; return this; },
        async first() {
          calls.push(sql);
          assert.match(sql, /FROM flights_v2/);
          const record = records.get(this.values[0]);
          return record ? { ...record } : null;
        },
        async all() {
          calls.push(sql);
          assert.match(sql, /UNION ALL/);
          assert.match(sql, /FROM flights WHERE name IS NOT NULL/);
          assert.match(sql, /0 AS stars, 1 AS level/);
          assert.match(sql, /started_at ASC LIMIT 20/);
          return { results: [{ name: 'Alter Pilot', blocks: 63, stars: 0, level: 1, flightMs: 5000, points: 6350 }] };
        },
        async run() {
          calls.push(sql);
          assert.match(sql, /UPDATE flights_v2/);
          const [name, blocks, stars, flightMs, points, submitted_at, id, level] = this.values;
          const record = records.get(id);
          if (!record || record.name !== null || record.level !== level) return { meta: { changes: 0 } };
          Object.assign(record, { name, blocks, stars, flightMs, points, submitted_at });
          return { meta: { changes: race ? 0 : 1 } };
        },
      };
      statement.sql = sql;
      return statement;
    },
    async batch(statements) {
      for (const statement of statements) {
        calls.push(statement.sql);
        assert.match(statement.sql, /(?:DELETE FROM|INSERT INTO) flights_v2/);
        if (statement.sql.startsWith('INSERT')) {
          const [id, started_at, level] = statement.values;
          records.set(id, { started_at, level, name: null, blocks: 0, stars: 0, flightMs: null });
        }
      }
    },
  };
}

function request(path, body, options = {}) {
  return new Request(origin + path, {
    method: options.method || 'POST',
    headers: { origin, ...(body === undefined ? {} : { 'content-type': 'application/json' }), ...options.headers },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  });
}

function pending(db, level = 1, started_at = Date.now() - 5000) {
  db.records.set(runId, { name: null, blocks: 0, stars: 0, level, started_at, flightMs: null });
}

test('each level accepts its exact totals and rejects unattainable scores', () => {
  for (const level of LEVELS) {
    const blocks = level.towers.reduce((sum, tower) => sum + tower.layers * 3, 0);
    const stars = level.collectibles.length;
    const result = validateScore({ ...sample, level: level.id, blocks, stars });
    assert.equal(result.points, blocks * 100 + stars * 150 + 9);
    assert.throws(() => validateScore({ ...sample, level: level.id, blocks: blocks + 1 }));
    assert.throws(() => validateScore({ ...sample, level: level.id, stars: stars + 1 }));
  }
});

test('score defaults preserve the legacy client shape and normalize names', () => {
  const result = validateScore({ run: runId, name: '  Tést   Pilot  ', blocks: 0, flightMs: 500 });
  assert.equal(result.level, 1);
  assert.equal(result.stars, 0);
  assert.equal(result.name, 'Tést Pilot');
  assert.equal(result.points, 5);
});

test('validation rejects malformed levels, counts, duration, names and tickets', () => {
  for (const level of [0, 9, -1, 1.5, '1', null, NaN]) {
    assert.throws(() => validateScore({ ...sample, level }));
  }
  for (const field of ['blocks', 'stars']) {
    for (const value of [-1, 0.5, '1', null, NaN]) assert.throws(() => validateScore({ ...sample, [field]: value }));
  }
  for (const flightMs of [499, 1_800_001, 999.5, '500', NaN]) assert.throws(() => validateScore({ ...sample, flightMs }));
  for (const flightMs of [500, 1_800_000]) assert.equal(validateScore({ ...sample, flightMs }).flightMs, flightMs);
  for (const name of ['', 'A', 'a'.repeat(21), '<script>']) assert.throws(() => validateScore({ ...sample, name }));
  assert.throws(() => validateScore({ ...sample, run: 'invalid' }));
});

test('run tickets retain the chosen level, with level one for no-body legacy starts', async () => {
  const db = memoryDB();
  for (const [body, expected] of [[undefined, 1], [{ level: 8 }, 8]]) {
    const response = await worker.fetch(request('/api/runs', body), { DB: db });
    assert.equal(response.status, 201);
    const { run } = await response.json();
    assert.match(run, /^[0-9a-f-]{36}$/);
    assert.equal(db.records.get(run).level, expected);
  }
  for (const level of [0, 9, 1.5, '2', null]) {
    assert.equal((await worker.fetch(request('/api/runs', { level }), { DB: db })).status, 400);
  }
});

test('save checks the ticket level and elapsed time before updating the new table', async () => {
  const db = memoryDB();
  pending(db, 2);
  assert.equal((await worker.fetch(request('/api/leaderboard', sample), { DB: db })).status, 400);
  pending(db, 1, Date.now());
  assert.equal((await worker.fetch(request('/api/leaderboard', { ...sample, flightMs: 10000 }), { DB: db })).status, 400);
  pending(db);
  const saved = await worker.fetch(request('/api/leaderboard', sample), { DB: db });
  assert.equal(saved.status, 201);
  assert.deepEqual(await saved.json(), { saved: true, points: 609 });
  assert.equal((await worker.fetch(request('/api/leaderboard', sample), { DB: db })).status, 200);
  assert.equal((await worker.fetch(request('/api/leaderboard', { ...sample, stars: 3 }), { DB: db })).status, 409);
});

test('identical competing saves are idempotent when the conditional update loses the race', async () => {
  const db = memoryDB({ race: true });
  pending(db);
  const response = await worker.fetch(request('/api/leaderboard', sample), { DB: db });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { saved: true, points: 609 });
});

test('leaderboard reads the legacy scores together with new level and star fields', async () => {
  const db = memoryDB();
  const response = await worker.fetch(request('/api/leaderboard', undefined, { method: 'GET' }), { DB: db });
  assert.equal(response.status, 200);
  assert.deepEqual((await response.json()).entries[0], { name: 'Alter Pilot', blocks: 63, stars: 0, level: 1, flightMs: 5000, points: 6350 });
});

test('origin, JSON type and the 2 KB body limit remain enforced', async () => {
  const db = memoryDB();
  assert.equal((await worker.fetch(request('/api/runs', { level: 1 }, { headers: { origin: 'https://example.com' } }), { DB: db })).status, 403);
  assert.equal((await worker.fetch(request('/api/runs', { level: 1 }, { headers: { 'content-type': 'text/plain' } }), { DB: db })).status, 400);
  assert.equal((await worker.fetch(request('/api/runs', { level: 1, padding: 'a'.repeat(2048) }), { DB: db })).status, 400);
});

const houseSample = { run: runId, name: 'Haus Pilot', blocks: 0, stars: 2, roomIds: ['dining', 'kitchen'], complete: false, flightMs: 999 };
function houseDB({ race = false } = {}) {
  const records = new Map();
  return {
    records,
    prepare(sql) {
      assert.match(sql, /house_runs/);
      return {
        sql, values: [], bind(...values) { this.values = values; return this; },
        async first() { const row = records.get(this.values[0]); return row ? { ...row } : null; },
        async all() {
          assert.match(sql, /LIMIT 20/); assert.doesNotMatch(sql, /flights_v2|UNION/);
          return { results: [...records.values()].filter(row => row.name !== null).map(({ name, blocks, stars, rooms, complete, flightMs, points }) => ({ name, blocks, stars, rooms, complete, flightMs, points })) };
        },
        async run() {
          const [name, blocks, stars, rooms, roomIds, complete, flightMs, points, submitted_at, id] = this.values;
          const row = records.get(id);
          if (!row || row.name !== null) return { meta: { changes: 0 } };
          assert.match(sql, /WHERE id = \? AND name IS NULL/);
          Object.assign(row, { name, blocks, stars, rooms, roomIds, complete, flightMs, points, submitted_at });
          return { meta: { changes: race ? 0 : 1 } };
        },
      };
    },
    async batch(statements) {
      for (const statement of statements) {
        if (statement.sql.startsWith('INSERT')) {
          const [id, started_at] = statement.values;
          records.set(id, { started_at, name: null, blocks: 0, stars: 0, rooms: 0, roomIds: '[]', complete: 0, flightMs: null });
        }
      }
    },
  };
}

test('house scores use bounded stars, real room IDs, server scoring and capped time', () => {
  assert.equal(validateHouseScore({ ...houseSample, points: 999999 }).points, 809);
  assert.equal(validateHouseScore({ ...houseSample, roomIds: ['living', 'dining'] }).points, 559);
  assert.equal(validateHouseScore({ ...houseSample, flightMs: 1_800_000 }).points, 1400);
  assert.equal(validateHouseScore({ ...houseSample, stars: HOUSE.collectibles.length, complete: true }).complete, true);
  const segment = HOUSE.rooms.find(room => room.bonusId);
  assert.equal(validateHouseScore({ ...houseSample, roomIds: [segment.id, segment.bonusId] }).rooms, 1);
  for (const patch of [
    { stars: HOUSE.collectibles.length + 1 }, { stars: -1 }, { stars: 1.5 }, { blocks: 999999 },
    { roomIds: ['dining', 'dining'] }, { roomIds: ['unknown'] }, { roomIds: 'dining' }, { complete: 'true' },
    { complete: true }, { flightMs: 499 }, { run: '---------------------' }, { name: '<script>' },
  ]) assert.throws(() => validateHouseScore({ ...houseSample, ...patch }));
});

test('house ticket and conditional saves are isolated, retry-safe and reject changed results', async () => {
  const db = houseDB();
  const start = await worker.fetch(request('/api/house-runs', {}), { DB: db });
  assert.equal(start.status, 201);
  const { run } = await start.json();
  const score = { ...houseSample, run };
  const saved = await worker.fetch(request('/api/house-leaderboard', score), { DB: db });
  assert.equal(saved.status, 201);
  assert.deepEqual(await saved.json(), { saved: true, points: 809 });
  assert.equal((await worker.fetch(request('/api/house-leaderboard', { ...score, roomIds: ['kitchen', 'dining'] }), { DB: db })).status, 200);
  assert.equal((await worker.fetch(request('/api/house-leaderboard', { ...score, stars: 3 }), { DB: db })).status, 409);
  const listing = await worker.fetch(request('/api/house-leaderboard', undefined, { method: 'GET' }), { DB: db });
  assert.equal((await listing.json()).entries[0].rooms, 2);
});

test('house results enforce elapsed time, ticket lifetime, origin and concurrent retry', async () => {
  const db = houseDB({ race: true });
  db.records.set(runId, { started_at: Date.now(), name: null });
  assert.equal((await worker.fetch(request('/api/house-leaderboard', { ...houseSample, flightMs: 10000 }), { DB: db })).status, 400);
  assert.equal((await worker.fetch(request('/api/house-leaderboard', houseSample), { DB: db })).status, 200);
  db.records.set(runId, { started_at: Date.now() - 86_401_000, name: null });
  assert.equal((await worker.fetch(request('/api/house-leaderboard', houseSample), { DB: db })).status, 400);
  assert.equal((await worker.fetch(request('/api/house-runs', {}, { headers: { origin: 'https://example.invalid' } }), { DB: db })).status, 403);
  assert.equal((await worker.fetch(request('/api/house-runs', [], {}), { DB: db })).status, 400);
});
