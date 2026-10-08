import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../worker/index.mjs';
import { DuelRoom, DuelRateLimit, DUEL_TIMING } from '../worker/duel-room.mjs';
import { handleDuelRequest, constantEqual } from '../worker/duel-api.mjs';

const origin = 'https://stubenflieger.8e4.de';
const id = '11edb372-843a-4b54-998d-008adee227ce';
function request(path, data, headers = {}) {
  return new Request(origin + path, { method: 'POST', headers: { origin, 'content-type': 'application/json', ...headers }, body: typeof data === 'string' ? data : JSON.stringify(data) });
}
function context() {
  const rows = new Map(), tables = new Set(), sockets = [], calls = [];
  const ctx = {
    rows, tables, sockets, calls, alarmAt: null, deletions: 0,
    storage: {
      sql: { exec(sql, ...args) {
        calls.push({ sql, args });
        if (sql.startsWith('CREATE TABLE')) { tables.add(sql.match(/EXISTS (\w+)/)[1]); return { toArray: () => [] }; }
        const table = sql.match(/(?:FROM|INTO) (\w+)/)?.[1];
        if (table && !tables.has(table)) throw new Error(`no such table: ${table}`);
        if (sql.startsWith('SELECT value')) return { toArray: () => rows.has(args[0]) ? [{ value: rows.get(args[0]) }] : [] };
        if (sql.startsWith('INSERT OR REPLACE')) { rows.set(args[0], args[1]); return { toArray: () => [] }; }
        throw new Error(`Unexpected SQL: ${sql}`);
      } },
      async setAlarm(at) { ctx.alarmAt = at; }, async deleteAlarm() { ctx.alarmAt = null; }, async deleteAll() { rows.clear(); tables.clear(); ctx.alarmAt = null; ctx.deletions++; },
    },
    blockConcurrencyWhile(callback) { return callback(); },
    getWebSockets() { return sockets.filter(ws => ws.readyState === 1); },
    acceptWebSocket(ws) { sockets.push(ws); },
    waitUntil(promise) { promise.catch(error => { ctx.backgroundError = error; }); },
  };
  return ctx;
}
function socket() {
  return {
    sent: [], readyState: 1, attachment: null,
    send(value) { if (this.readyState !== 1) throw new Error('Closed'); this.sent.push(JSON.parse(value)); },
    serializeAttachment(value) { this.attachment = structuredClone(value); }, deserializeAttachment() { return structuredClone(this.attachment); },
    close(code, reason) { this.readyState = 3; this.closed = { code, reason }; },
  };
}
async function roomFixture() {
  const ctx = context(), room = new DuelRoom(ctx, {}); await room.ready;
  const created = await room.fetch(request('/internal/duel/create', { room: id, name: 'Pilot Eins' }));
  const host = await created.json(); return { room, ctx, host, created };
}
async function groupFixture(count = 2) {
  const fixture = await roomFixture();
  const credentials = { p1: fixture.host }, connections = {};
  for (let i = 2; i <= count; i++) {
    const joined = await fixture.room.fetch(request('/internal/duel/join', { room: id, name: `Pilot ${i}` })); credentials[`p${i}`] = await joined.json();
  }
  for (const slot of Object.keys(credentials)) { connections[slot] = socket(); fixture.room.attach(connections[slot], slot); }
  return { ...fixture, ...connections, connections, credentials, guest: credentials.p2 };
}
const pairFixture = () => groupFixture(2);
const message = (room, ws, data) => room.webSocketMessage(ws, JSON.stringify(data));
async function start(fixture) {
  for (const player of fixture.room.record.players) await message(fixture.room, fixture.room.sockets.get(player.id).ws, { type: 'ready', ready: true });
  await message(fixture.room, fixture.room.sockets.get(fixture.room.record.hostId).ws, { type: 'start' }); fixture.room.stopLoop();
}
function clock(t) {
  const original = Date.now; let now = 1_800_000_000_000; Date.now = () => now;
  t.after(() => { Date.now = original; });
  return { get now() { return now; }, advance(ms) { now += ms; } };
}

test('concurrent guests claim four unique seats, reject a sixth player and never expose credentials', async t => {
  const { room, ctx, host, created } = await roomFixture(); t.after(() => room.stopLoop());
  assert.equal(created.status, 201); assert.equal(host.slot, 'p1'); assert.match(host.token, /^[A-Za-z0-9_-]{43}$/);
  assert.equal(host.inviteUrl, `/duel#room=${id}`); assert.ok(!host.inviteUrl.includes(host.token));
  const attempts = await Promise.all(['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo'].map(name => room.fetch(request('/internal/duel/join', { room: id, name }))));
  assert.deepEqual(attempts.map(r => r.status).sort(), [200, 200, 200, 200, 409]); assert.equal(room.record.players.length, 5);
  assert.deepEqual(new Set(room.record.players.map(p => p.id)), new Set(['p1', 'p2', 'p3', 'p4', 'p5']));
  assert.ok(!JSON.stringify(room.state()).includes('token')); assert.ok(!ctx.rows.get('room').includes(host.token));
  const resume = await room.fetch(request('/internal/duel/join', { room: id, name: 'Pilot Eins', token: host.token }));
  assert.equal((await resume.json()).slot, 'p1');
  const bad = await room.fetch(request('/internal/duel/join', { room: id, name: 'Angreifer', token: 'a'.repeat(43) })); assert.equal(bad.status, 403);
});

test('readiness alone never starts a round; only the ready host can start and unreadiness cancels', async t => {
  const f = await pairFixture(); t.after(() => f.room.stopLoop());
  await message(f.room, f.p1, { type: 'ready', ready: true }); assert.equal(f.room.record.phase, 'lobby'); assert.equal(f.room.timer, null);
  await message(f.room, f.p1, { type: 'start' }); assert.equal(f.room.record.phase, 'lobby');
  await message(f.room, f.p2, { type: 'ready', ready: true }); assert.equal(f.room.record.phase, 'lobby');
  await message(f.room, f.p2, { type: 'start' }); assert.equal(f.room.record.phase, 'lobby');
  await message(f.room, f.p1, { type: 'start' }); assert.equal(f.room.record.phase, 'countdown'); assert.ok(f.room.state().countdown > 2.9);
  await message(f.room, f.p1, { type: 'ready', ready: false }); assert.equal(f.room.record.phase, 'lobby'); assert.equal(f.room.timer, null);
});

test('server steps fixed 30 Hz with bounded catchup, rejects client positions and clears stale controls', async t => {
  const time = clock(t), f = await pairFixture(); t.after(() => f.room.stopLoop()); await start(f);
  time.advance(3001); await f.room.pulse(time.now); f.room.stopLoop(); assert.equal(f.room.record.phase, 'playing');
  const originalStep = f.room.sim.step.bind(f.room.sim), observed = [];
  const writesBeforeInputs = f.ctx.calls.filter(call => call.sql.startsWith('INSERT')).length;
  f.room.sim.step = (input, dt) => { observed.push({ input: structuredClone(input), dt }); originalStep(input, dt); };
  await message(f.room, f.p1, { type: 'input', seq: 1, steer: .6, pitch: .2, fire: true, position: { x: 999, y: 999, z: 999 }, hp: 999 });
  time.advance(34); await f.room.pulse(time.now); f.room.stopLoop(); assert.equal(observed.length, 1); assert.equal(observed[0].dt, 1 / 30); assert.equal(observed[0].input.p1.steer, .6);
  assert.ok(f.room.sim.snapshot().players[0].position.x < 100);
  time.advance(700); await f.room.pulse(time.now); f.room.stopLoop(); assert.equal(observed.length, 1 + DUEL_TIMING.maxCatchup); assert.equal(observed.at(-1).input.p1.fire, false); assert.equal(observed.at(-1).input.p1.steer, 0);
  assert.equal(f.ctx.calls.filter(call => call.sql.startsWith('INSERT')).length, writesBeforeInputs, 'ticks and inputs must not write snapshots to SQL');
});

test('input sequencing, frame bounds and rolling twenty-input limit are enforced', async t => {
  const time = clock(t), f = await pairFixture(); t.after(() => f.room.stopLoop()); await start(f); time.advance(3001); await f.room.pulse(time.now); f.room.stopLoop();
  for (let seq = 0; seq < 25; seq++) await message(f.room, f.p1, { type: 'input', seq, steer: .5, pitch: 0, fire: false });
  assert.equal(f.room.sockets.get('p1').seq, 19);
  await message(f.room, f.p1, { type: 'input', seq: 18, steer: -1, pitch: 0, fire: false }); assert.equal(f.room.inputs.p1.steer, .5);
  await message(f.room, f.p1, { type: 'input', seq: 30, steer: 4, pitch: 0, fire: false }); assert.equal(f.room.inputs.p1.steer, .5);
  await f.room.webSocketMessage(f.p1, 'x'.repeat(1025)); assert.equal(f.p1.closed.code, 1009); assert.equal(f.room.record.phase, 'reconnecting');
  assert.equal(f.room.inputs.p1.fire, false);
});

test('disconnect pauses simulation, token reconnect replaces the old socket, and grace expiry forfeits', async t => {
  const time = clock(t), f = await pairFixture(); t.after(() => f.room.stopLoop()); await start(f); time.advance(3001); await f.room.pulse(time.now); f.room.stopLoop();
  const tick = f.room.sim.snapshot().tick;
  await f.room.webSocketClose(f.p2); f.room.stopLoop(); assert.equal(f.room.record.phase, 'reconnecting');
  time.advance(2000); await f.room.pulse(time.now); f.room.stopLoop(); assert.equal(f.room.sim.snapshot().tick, tick);
  const replacement = socket(); f.room.attach(replacement, 'p2'); f.room.stopLoop(); assert.equal(f.room.record.phase, 'playing');
  await f.room.webSocketClose(f.p2); assert.equal(f.room.record.players.find(p => p.id === 'p2').connected, true, 'late old close must not disconnect replacement');
  await f.room.webSocketClose(replacement); f.room.stopLoop();
  time.advance(20_001); f.room.sockets.get('p1').lastSeen = time.now; await f.room.pulse(time.now); assert.equal(f.room.record.phase, 'finished'); assert.equal(f.room.record.winner, 'p1'); assert.equal(f.room.timer, null);
  await message(f.room, f.p1, { type: 'rematch' }); assert.equal(f.room.record.phase, 'finished');
});

test('rematch requires consent then a fresh ready-and-host-start lobby', async t => {
  const f = await pairFixture(); t.after(() => f.room.stopLoop()); await start(f); f.room.playedMs = 27_000; f.room.finish('p1', 'damage');
  await message(f.room, f.p1, { type: 'rematch' }); assert.equal(f.room.record.phase, 'finished');
  await message(f.room, f.p2, { type: 'rematch' }); assert.equal(f.room.record.phase, 'lobby'); assert.ok(f.room.record.players.every(p => !p.ready)); assert.equal(f.room.record.winner, null);
  assert.equal(f.room.record.playedMs, 0);
  await start(f); assert.equal(f.room.record.phase, 'countdown'); assert.equal(f.room.sim.snapshot().tick, 0);
});

test('a replaced tab receives an unambiguous stop-reconnecting close code', async t => {
  const f = await pairFixture(); t.after(() => f.room.stopLoop()); const replacement = socket();
  f.room.attach(replacement, 'p1'); assert.equal(f.p1.closed.code, 4009);
  await message(f.room, f.p1, { type: 'ping', sentAt: 1 }); assert.equal(f.p1.closed.code, 4009);
  assert.equal(f.room.sockets.get('p1').ws, replacement); assert.equal(f.room.record.players[0].connected, true);
});

test('hibernation preserves lobby seats; active eviction is an explicit draw rather than a reset match', async t => {
  const f = await pairFixture(); t.after(() => f.room.stopLoop());
  const lobby = new DuelRoom(f.ctx, {}); await lobby.ready; t.after(() => lobby.stopLoop());
  assert.equal(lobby.record.phase, 'lobby'); assert.equal(lobby.sockets.size, 2); assert.equal(lobby.record.players[0].tokenHash, f.room.record.players[0].tokenHash);
  const p1 = f.p1, p2 = f.p2; await start({ room: lobby, p1, p2 });
  const recovered = new DuelRoom(f.ctx, {}); await recovered.ready; t.after(() => recovered.stopLoop());
  assert.equal(recovered.record.phase, 'finished'); assert.equal(recovered.record.winner, 'draw'); assert.equal(recovered.record.reason, 'server_restart'); assert.equal(recovered.timer, null);
  assert.ok(!JSON.stringify(recovered.state()).includes('tokenHash'));
});

test('unknown room probes delete empty SQLite storage and a later create still works', async t => {
  const ctx = context(), room = new DuelRoom(ctx, {}); await room.ready; t.after(() => room.stopLoop());
  assert.equal(ctx.deletions, 1); assert.equal(room.schemaReady, false);
  const unknown = await room.fetch(request('/internal/duel/join', { room: id, name: 'Gast' }));
  assert.equal(unknown.status, 410); assert.equal(ctx.rows.size, 0); assert.equal(room.timer, null);
  const created = await room.fetch(request('/internal/duel/create', { room: id, name: 'Pilot', token: 'a'.repeat(43) }));
  assert.equal(created.status, 201); assert.equal(room.schemaReady, true); assert.ok(ctx.rows.has('room'));
  assert.notEqual((await created.json()).token, 'a'.repeat(43), 'creation always generates an unpredictable credential');
});

test('finished rehydration preserves the authoritative remaining round time', async t => {
  const f = await pairFixture(); t.after(() => f.room.stopLoop()); await start(f);
  f.room.playedMs = 48_250; f.room.finish('p2', 'damage');
  const recovered = new DuelRoom(f.ctx, {}); await recovered.ready; t.after(() => recovered.stopLoop());
  assert.equal(recovered.state().remaining, 131.75); assert.equal(recovered.state().winner, 'p2');
  assert.equal(recovered.state().snapshot.winner, 'p2');
});

test('a suspended pulse cannot run twice or queue another loop before it completes', async t => {
  const time = clock(t), f = await pairFixture(); t.after(() => f.room.stopLoop()); await start(f);
  let release, entered = 0; const pending = new Promise(resolve => { release = resolve; });
  f.room.advance = async () => { entered++; f.room.startLoop(); assert.equal(f.room.timer, null); await pending; };
  const running = f.room.pulse(time.now); await f.room.pulse(time.now);
  assert.equal(entered, 1); assert.equal(f.room.timer, null); release(); await running;
  assert.ok(f.room.timer); assert.equal(f.room.pulsing, false);
});

test('idle and absolute expiry remove persisted credentials and all sockets without an idle loop', async t => {
  const time = clock(t), f = await pairFixture(); t.after(() => f.room.stopLoop());
  assert.equal(f.room.timer, null); assert.ok(f.ctx.alarmAt);
  time.advance(DUEL_TIMING.idleMs + 1); await f.room.alarm(); assert.equal(f.ctx.rows.size, 0); assert.equal(f.ctx.alarmAt, null); assert.equal(f.room.sockets.size, 0); assert.equal(f.p1.readyState, 3);
  const second = await roomFixture(); t.after(() => second.room.stopLoop());
  time.advance(DUEL_TIMING.absoluteMs + 1); const r = structuredClone(second.room.record); r.lastActivity = time.now; second.room.commit(r); await second.room.alarm(); assert.equal(second.ctx.rows.size, 0);
});

test('ghost sockets are closed by an alarm while idle; p1 is never reassigned', async t => {
  const time = clock(t), f = await pairFixture(); t.after(() => f.room.stopLoop());
  time.advance(DUEL_TIMING.ghostMs + 1); await f.room.alarm(); assert.equal(f.room.sockets.size, 0); assert.equal(f.room.record.phase, 'lobby'); assert.equal(f.room.record.players.length, 2);
  const outsider = await f.room.fetch(request('/internal/duel/join', { room: id, name: 'Dritter' })); assert.equal((await outsider.json()).slot, 'p3');
  const resume = await f.room.fetch(request('/internal/duel/join', { room: id, name: 'Pilot Eins', token: f.host.token })); assert.equal((await resume.json()).slot, 'p1');
});

test('HTTP input validation, origin enforcement and D1-independent routing reject before touching a room', async () => {
  let touched = 0;
  const env = { DUEL_ROOMS: { getByName() { touched++; throw new Error('Should not route'); } }, DUEL_LIMITS: { getByName() { touched++; throw new Error('Should not limit invalid input'); } } };
  assert.equal((await handleDuelRequest(request('/api/duels', { name: 'Pilot' }, { origin: 'https://evil.test' }), env)).status, 403);
  assert.equal((await handleDuelRequest(request('/api/duels', { name: 'X' }), env)).status, 400);
  assert.equal((await handleDuelRequest(request('/api/duels', 'x'.repeat(1025)), env)).status, 400);
  assert.equal((await handleDuelRequest(request('/api/duels/nope/join', { name: 'Pilot' }), env)).status, 404);
  const ws = new Request(`${origin}/api/duels/${id}/socket?token=${'a'.repeat(43)}`, { headers: { origin } });
  assert.equal((await handleDuelRequest(ws, env)).status, 426); assert.equal(touched, 0);
  const unavailable = await worker.fetch(request('/api/duels', { name: 'Pilot' }), {}); assert.equal(unavailable.status, 503); assert.match((await unavailable.json()).error, /Duelle/);
});

test('persisted rate limits survive object replacement and expire without raw IP data', async t => {
  const time = clock(t), ctx = context(); let limiter = new DuelRateLimit(ctx);
  for (let i = 0; i < 6; i++) assert.equal((await limiter.fetch(new Request('https://limit/create', { method: 'POST' }))).status, 200);
  limiter = new DuelRateLimit(ctx); assert.equal((await limiter.fetch(new Request('https://limit/create', { method: 'POST' }))).status, 429);
  time.advance(60_001); assert.equal((await limiter.fetch(new Request('https://limit/create', { method: 'POST' }))).status, 200);
  assert.ok([...ctx.rows.values()].every(value => !value.includes('ip'))); await limiter.alarm(); assert.equal(ctx.rows.size, 0);
  assert.equal(constantEqual('a'.repeat(64), 'a'.repeat(64)), true); assert.equal(constantEqual('a'.repeat(64), 'b'.repeat(64)), false);
});

test('API creation and token resume use only the selected room and never D1', async t => {
  const contexts = new Map(), instances = new Map();
  const env = { DUEL_LIMITS: { getByName: () => ({ fetch: async () => Response.json({ allowed: true }) }) }, DUEL_ROOMS: { getByName(name) {
    if (!instances.has(name)) { const ctx = context(); contexts.set(name, ctx); instances.set(name, new DuelRoom(ctx, {})); }
    return { fetch: request => instances.get(name).fetch(request) };
  } } };
  t.after(() => { for (const room of instances.values()) room.stopLoop(); });
  const created = await worker.fetch(request('/api/duels', { name: 'Pilot' }), env); assert.equal(created.status, 201); const host = await created.json();
  const resumed = await worker.fetch(request(`/api/duels/${host.room}/join`, { name: 'Pilot', token: host.token }), env); assert.equal(resumed.status, 200); assert.equal((await resumed.json()).slot, 'p1'); assert.equal(instances.size, 1);
});

test('the same limiter instance recreates SQLite schema after its cleanup alarm', async () => {
  const ctx = context(), limiter = new DuelRateLimit(ctx);
  const attempt = () => limiter.fetch(new Request('https://limit/create', { method: 'POST' }));
  assert.equal((await attempt()).status, 200); await limiter.alarm();
  assert.equal(ctx.tables.size, 0); assert.equal(ctx.rows.size, 0); assert.equal(ctx.alarmAt, null);
  for (let i = 0; i < 6; i++) assert.equal((await attempt()).status, 200);
  assert.equal((await attempt()).status, 429); assert.ok(ctx.alarmAt);
});

test('the host starts any agreed roster of two through five, and countdown locks late joining', async t => {
  const solo = await groupFixture(1); t.after(() => solo.room.stopLoop());
  await start(solo); assert.equal(solo.room.record.phase, 'lobby');
  for (let count = 2; count <= 5; count++) {
    const f = await groupFixture(count); t.after(() => f.room.stopLoop()); await start(f);
    assert.equal(f.room.record.phase, 'countdown'); assert.equal(f.room.sim.snapshot().players.length, count);
    const late = await f.room.fetch(request('/internal/duel/join', { room: id, name: 'Zu spät' })); assert.equal(late.status, 409);
  }
});

test('lobby membership resets consent and released sparse slots never transfer old credentials', async t => {
  const f = await groupFixture(5); t.after(() => f.room.stopLoop());
  await message(f.room, f.p1, { type: 'ready', ready: true });
  await message(f.room, f.p2, { type: 'leave' }); await message(f.room, f.p4, { type: 'leave' });
  assert.ok(f.room.record.players.every(p => !p.ready)); assert.deepEqual(f.room.record.players.map(p => p.id), ['p1', 'p3', 'p5']);
  await start(f); assert.deepEqual(f.room.sim.snapshot().players.map(p => p.id), ['p1', 'p3', 'p5']);
  await message(f.room, f.p3, { type: 'ready', ready: false });
  await message(f.room, f.p1, { type: 'ready', ready: true });
  const replacement = await f.room.fetch(request('/internal/duel/join', { room: id, name: 'Neuer Gast' })); assert.equal((await replacement.json()).slot, 'p2');
  assert.ok(f.room.record.players.every(p => !p.ready));
  const old = await f.room.fetch(request('/internal/duel/join', { room: id, name: 'Alter Gast', token: f.credentials.p2.token })); assert.equal(old.status, 403);
});

test('a first knockout leaves the round running and spectators cannot steer or pause it', async t => {
  const time = clock(t), f = await groupFixture(4); t.after(() => f.room.stopLoop()); await start(f);
  time.advance(3001); await f.room.pulse(time.now); f.room.stopLoop();
  f.room.sim.eliminate('p2', 'damage'); time.advance(34); await f.room.pulse(time.now); f.room.stopLoop();
  assert.equal(f.room.record.phase, 'playing'); assert.equal(f.room.state().players.find(p => p.id === 'p2').eliminated, true);
  await message(f.room, f.p2, { type: 'input', seq: 1, steer: 1, pitch: 1, fire: true }); assert.equal(f.room.inputs.p2.fire, false);
  await f.room.webSocketClose(f.p2); f.room.stopLoop(); assert.equal(f.room.record.phase, 'playing');
});

test('multiple missing live pilots forfeit together after grace and remaining players continue', async t => {
  const time = clock(t), f = await groupFixture(5); t.after(() => f.room.stopLoop()); await start(f);
  time.advance(3001); await f.room.pulse(time.now); f.room.stopLoop();
  await f.room.webSocketClose(f.p2); await f.room.webSocketClose(f.p4); f.room.stopLoop(); assert.equal(f.room.record.phase, 'reconnecting');
  const pausedTick = f.room.sim.snapshot().tick; time.advance(1000); await f.room.pulse(time.now); f.room.stopLoop(); assert.equal(f.room.sim.snapshot().tick, pausedTick);
  time.advance(19_001); for (const connection of f.room.sockets.values()) connection.lastSeen = time.now;
  await f.room.pulse(time.now); f.room.stopLoop(); assert.equal(f.room.record.phase, 'playing');
  assert.deepEqual(f.room.living().map(p => p.id), ['p1', 'p3', 'p5']); assert.equal(f.room.sim.snapshot().winner, null);
  const spectator = socket(); f.room.attach(spectator, 'p2'); await f.room.webSocketClose(spectator); f.room.stopLoop(); assert.equal(f.room.record.phase, 'playing');
});

test('simultaneous final disconnects produce a draw without an arbitrary survivor', async t => {
  const time = clock(t), f = await groupFixture(3); t.after(() => f.room.stopLoop()); await start(f);
  time.advance(3001); await f.room.pulse(time.now); f.room.stopLoop();
  for (const ws of Object.values(f.connections)) await f.room.webSocketClose(ws); f.room.stopLoop();
  time.advance(20_001); await f.room.pulse(time.now); assert.equal(f.room.record.phase, 'finished'); assert.equal(f.room.record.winner, 'draw');
});

test('host departure transfers control without swapping seats and preserves the result roster', async t => {
  const time = clock(t), f = await groupFixture(3); t.after(() => f.room.stopLoop()); await start(f);
  time.advance(3001); await f.room.pulse(time.now); f.room.stopLoop();
  const originalGuestToken = f.room.record.players.find(p => p.id === 'p2').tokenHash;
  await message(f.room, f.p1, { type: 'leave' }); f.room.stopLoop(); assert.equal(f.room.record.phase, 'playing'); assert.equal(f.room.state().hostId, 'p2');
  assert.equal(f.room.record.players.find(p => p.id === 'p2').tokenHash, originalGuestToken);
  await message(f.room, f.p2, { type: 'leave' }); assert.equal(f.room.record.phase, 'finished'); assert.equal(f.room.record.winner, 'p3');
  assert.equal(f.room.state().players.length, 3); assert.equal(f.room.state().players.find(p => p.id === 'p1').name, 'Pilot Eins');
  const oldHost = await f.room.fetch(request('/internal/duel/join', { room: id, name: 'Pilot Eins', token: f.host.token })); assert.equal(oldHost.status, 403);
});

test('rematch excludes explicit leavers, keeps sparse IDs and needs fresh host start', async t => {
  const f = await groupFixture(4); t.after(() => f.room.stopLoop()); await start(f);
  await message(f.room, f.p1, { type: 'leave' }); f.room.finish('p2', 'damage');
  for (const id of ['p2', 'p3']) await message(f.room, f[id], { type: 'rematch' }); assert.equal(f.room.record.phase, 'finished');
  await message(f.room, f.p4, { type: 'rematch' }); assert.equal(f.room.record.phase, 'lobby'); assert.equal(f.room.state().hostId, 'p2');
  assert.deepEqual(f.room.record.players.map(p => p.id), ['p2', 'p3', 'p4']); assert.ok(f.room.record.players.every(p => !p.ready && !p.eliminated));
  await start(f); assert.equal(f.room.record.phase, 'countdown'); assert.deepEqual(f.room.sim.snapshot().players.map(p => p.id), ['p2', 'p3', 'p4']);
});

test('an offline lobby host keeps a short resume grace then releases its seat and host role', async t => {
  const time = clock(t), f = await groupFixture(3); t.after(() => f.room.stopLoop());
  await f.room.webSocketClose(f.p1); assert.equal(f.room.state().hostId, 'p1');
  time.advance(19_999); for (const connection of f.room.sockets.values()) connection.lastSeen = time.now;
  await f.room.alarm(); assert.equal(f.room.state().hostId, 'p1');
  const resume = await f.room.fetch(request('/internal/duel/join', { room: id, name: 'Pilot Eins', token: f.host.token })); assert.equal(resume.status, 200);
  await message(f.room, f.p2, { type: 'ready', ready: true });
  time.advance(2); await f.room.alarm(); assert.equal(f.room.state().hostId, 'p2');
  assert.deepEqual(f.room.record.players.map(p => p.id), ['p2', 'p3']); assert.ok(f.room.record.players.every(p => !p.ready));
  const expiredSeat = await f.room.fetch(request('/internal/duel/join', { room: id, name: 'Pilot Eins', token: f.host.token })); assert.equal(expiredSeat.status, 403);
  await start(f); assert.equal(f.room.record.phase, 'countdown'); assert.deepEqual(f.room.sim.snapshot().players.map(p => p.id), ['p2', 'p3']);
});

test('HTTP-reserved lobby seats without a socket expire without blocking the connected roster', async t => {
  const time = clock(t), f = await pairFixture(); t.after(() => f.room.stopLoop());
  const joined = await f.room.fetch(request('/internal/duel/join', { room: id, name: 'Ohne Verbindung' })); const seat = await joined.json(); assert.equal(seat.slot, 'p3');
  time.advance(20_001); for (const connection of f.room.sockets.values()) connection.lastSeen = time.now;
  await f.room.alarm(); assert.deepEqual(f.room.record.players.map(p => p.id), ['p1', 'p2']); assert.equal(f.room.timer, null);
  const replacement = await f.room.fetch(request('/internal/duel/join', { room: id, name: 'Neuer Gast' })); assert.equal((await replacement.json()).slot, 'p3');
  const stale = await f.room.fetch(request('/internal/duel/join', { room: id, name: 'Ohne Verbindung', token: seat.token })); assert.equal(stale.status, 403);
});

test('an emptied lobby elects a new host when two new pilots use the existing invitation', async t => {
  const time = clock(t);
  for (const reason of ['leave', 'expiry']) {
    const f = await pairFixture(); t.after(() => f.room.stopLoop());
    for (const ws of Object.values(f.connections)) {
      if (reason === 'leave') await message(f.room, ws, { type: 'leave' });
      else await f.room.webSocketClose(ws);
    }
    if (reason === 'expiry') { time.advance(20_001); await f.room.alarm(); }
    assert.equal(f.room.record.players.length, 0); assert.equal(f.room.record.hostId, null);
    for (const name of ['Neue Gastgeberin', 'Neuer Gast']) {
      const joined = await f.room.fetch(request('/internal/duel/join', { room: id, name })); assert.equal(joined.status, 200);
      const seat = await joined.json(); f.room.attach(socket(), seat.slot);
    }
    assert.equal(f.room.record.hostId, 'p1'); assert.equal(f.room.state().hostId, 'p1');
    await start(f); assert.equal(f.room.record.phase, 'countdown'); assert.equal(f.room.sim.snapshot().players.length, 2);
  }
});
