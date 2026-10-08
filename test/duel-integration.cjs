// Real local Workers runtime with five sockets. Never writes to a public server.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const { chromium } = require('playwright');
const origin = process.env.DUEL_QA_ORIGIN || 'http://127.0.0.1:8796';
assert(['localhost', '127.0.0.1'].includes(new URL(origin).hostname));
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const checks = [];
  try {
    const page = await browser.newPage(); await page.goto(origin + '/api/house-leaderboard');
    assert.equal((await page.request.post(origin + '/api/duels', { headers: { Origin: 'https://example.invalid' }, data: { name: 'Test' } })).status(), 403);
    assert.equal((await page.request.post(origin + '/api/duels', { headers: { Origin: origin }, data: { name: 'Test', appearance: { color: 'red', effect: 'mint' } } })).status(), 400);
    await page.evaluate(async () => {
      const post = async (path, data) => {
        const response = await fetch(path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        return { status: response.status, data: await response.json() };
      };
      const appearances = {
        p1: { color: '#AABBCC', effect: 'mint' }, p2: { color: '#E26434', effect: 'spark' },
        p3: { color: '#1188DD', effect: 'confetti' }, p4: { color: null, effect: 'none' }, p5: { color: '#55AA77', effect: 'mint' },
      };
      const created = await post('/api/duels', { name: 'Pilot Eins', appearance: appearances.p1 });
      if (created.status !== 201) throw new Error(JSON.stringify(created));
      const credentials = { p1: created.data };
      for (let i = 2; i <= 5; i++) {
        const joined = await post(`/api/duels/${created.data.room}/join`, { name: `Pilot ${i}`, appearance: appearances[`p${i}`] });
        if (joined.status !== 200 || joined.data.slot !== `p${i}`) throw new Error(JSON.stringify(joined));
        credentials[joined.data.slot] = joined.data;
      }
      const expected = Object.fromEntries(Object.entries(appearances).map(([id, a]) => [id, { ...a, color: a.color?.toLowerCase() ?? null }]));
      const h = window.duelHarness = { credentials, expected, states: {}, sequences: {}, sockets: {}, errors: [], post };
      h.connect = async function (slot) {
        const c = h.credentials[slot], ws = new WebSocket(`${location.origin.replace(/^http/, 'ws')}/api/duels/${c.room}/socket?token=${c.token}`);
        h.sockets[slot] = ws; h.sequences[slot] = 0;
        ws.addEventListener('message', event => { const data = JSON.parse(event.data); if (data.type === 'state') h.states[slot] = data; if (data.type === 'error') h.errors.push(data.message); });
        await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = () => reject(new Error('WebSocket failed')); });
      };
      await Promise.all(Object.keys(credentials).map(slot => h.connect(slot)));
      h.interval = setInterval(() => {
        for (const [slot, ws] of Object.entries(h.sockets)) if (ws.readyState === 1 && h.states[slot]?.phase === 'playing') ws.send(JSON.stringify({ type: 'input', seq: ++h.sequences[slot], steer: 0, pitch: .11875, fire: true }));
      }, 60);
      h.ping = setInterval(() => { for (const ws of Object.values(h.sockets)) if (ws.readyState === 1) ws.send(JSON.stringify({ type: 'ping', sentAt: Date.now() })); }, 2000);
    });
    await page.waitForFunction(() => Object.keys(window.duelHarness.credentials).every(id => window.duelHarness.states[id]?.players.filter(p => p.connected).length === 5));
    assert.equal(await page.evaluate(() => {
      const h = window.duelHarness; return Object.values(h.states).every(s => s.players.every(p => JSON.stringify(p.appearance) === JSON.stringify(h.expected[p.id])));
    }), true);
    await page.evaluate(() => {
      const h = window.duelHarness; h.expected.p2 = { color: '#abc123', effect: 'confetti' };
      h.sockets.p2.send(JSON.stringify({ type: 'appearance', appearance: { color: '#ABC123', effect: 'confetti' } }));
    });
    await page.waitForFunction(() => Object.values(window.duelHarness.states).every(s => s.players.find(p => p.id === 'p2')?.appearance?.color === '#abc123'));
    checks.push('Five clients share normalized colors/effects; authenticated lobby appearance updates reach every client');
    const seats = await page.evaluate(async () => {
      const h = window.duelHarness, room = h.credentials.p1.room;
      const sixth = await h.post(`/api/duels/${room}/join`, { name: 'Sechster' });
      const invalid = await h.post(`/api/duels/${room}/join`, { name: 'Falsch', token: 'A'.repeat(43) });
      const resume = await h.post(`/api/duels/${room}/join`, { name: 'Pilot 5', token: h.credentials.p5.token });
      const publicState = JSON.stringify(h.states);
      return { sixth: sixth.status, invalid: invalid.status, resume: resume.status, slot: resume.data.slot,
        leaked: Object.values(h.credentials).some(c => publicState.includes(c.token)) || publicState.includes('tokenHash'), cleanInvite: !h.credentials.p1.inviteUrl.includes(h.credentials.p1.token) };
    });
    assert.deepEqual(seats, { sixth: 409, invalid: 403, resume: 200, slot: 'p5', leaked: false, cleanInvite: true });
    checks.push('Five seats, sixth rejected, authenticated p5 resume, origin and token protection');
    await page.evaluate(() => { for (const ws of Object.values(window.duelHarness.sockets)) ws.send(JSON.stringify({ type: 'ready', ready: true })); });
    await page.waitForFunction(() => window.duelHarness.states.p1?.players.every(p => p.ready));
    assert.equal(await page.evaluate(() => window.duelHarness.states.p1.phase), 'lobby');
    await page.evaluate(() => window.duelHarness.sockets.p5.send(JSON.stringify({ type: 'start' })));
    await page.waitForFunction(() => window.duelHarness.errors.length > 0);
    assert.equal(await page.evaluate(() => window.duelHarness.states.p1.phase), 'lobby');
    await page.evaluate(() => window.duelHarness.sockets.p1.send(JSON.stringify({ type: 'start' })));
    await page.waitForFunction(() => Object.keys(window.duelHarness.credentials).every(id => window.duelHarness.states[id]?.phase === 'countdown'));
    assert.equal(await page.evaluate(() => {
      const h = window.duelHarness; return Object.values(h.states).every(s => s.snapshot.players.every(p => JSON.stringify(p.appearance) === JSON.stringify(h.expected[p.id])));
    }), true);
    const distance = await page.evaluate(() => {
      const p = window.duelHarness.states.p1.snapshot.players; let min = Infinity;
      for (let i = 0; i < p.length; i++) for (let j = i + 1; j < p.length; j++) min = Math.min(min, Math.hypot(p[i].position.x - p[j].position.x, p[i].position.z - p[j].position.z));
      return min;
    });
    assert(distance >= 14, `Spawns separated by only ${distance} m`);
    await page.waitForFunction(() => Object.keys(window.duelHarness.credentials).every(id => window.duelHarness.states[id]?.phase === 'playing'), null, { timeout: 15000 });
    await page.waitForFunction(() => Object.values(window.duelHarness.states).every(s => s.snapshot?.projectiles.some(p => p.owner === 'p5')));
    await page.evaluate(() => {
      const h = window.duelHarness; h.errors.length = 0;
      h.sockets.p3.send(JSON.stringify({ type: 'appearance', appearance: { color: '#000000', effect: 'none' } }));
    });
    await page.waitForFunction(() => window.duelHarness.errors.some(error => error.includes('Lobby')));
    assert.equal(await page.evaluate(() => window.duelHarness.states.p1.snapshot.players.find(p => p.id === 'p3').appearance.color), '#1188dd');
    checks.push('Only the host starts after all ready; five distant spawns and shots reach all players');
    await page.evaluate(() => window.duelHarness.sockets.p3.close());
    await page.waitForFunction(() => window.duelHarness.states.p1?.phase === 'reconnecting');
    const pausedTick = await page.evaluate(() => window.duelHarness.states.p1.snapshot.tick);
    await page.waitForTimeout(300); assert.equal(await page.evaluate(() => window.duelHarness.states.p1.snapshot.tick), pausedTick);
    const resumedAppearance = await page.evaluate(async () => {
      const h = window.duelHarness, c = h.credentials.p3;
      const resumed = await h.post(`/api/duels/${c.room}/join`, { name: 'Pilot 3', token: c.token, appearance: { color: '#000000', effect: 'none' } });
      await h.connect('p3'); return resumed.data.appearance;
    });
    assert.deepEqual(resumedAppearance, { color: '#1188dd', effect: 'confetti' });
    await page.waitForFunction(() => Object.keys(window.duelHarness.credentials).every(id => window.duelHarness.states[id]?.phase === 'playing'));
    checks.push('Disconnect pauses five-player flight; authenticated p3 return resumes it');
    assert.equal(await page.evaluate(() => {
      const h = window.duelHarness; return Object.values(h.states).every(s => s.snapshot.players.every(p => JSON.stringify(p.appearance) === JSON.stringify(h.expected[p.id])));
    }), true);
    checks.push('Active appearance changes are locked; reconnect retains the original round color and effect');
    for (const slot of ['p2', 'p3', 'p4']) {
      await page.evaluate(id => window.duelHarness.sockets[id].send(JSON.stringify({ type: 'leave' })), slot);
      await page.waitForFunction(id => window.duelHarness.states.p1?.snapshot?.players.find(p => p.id === id)?.hp === 0, slot);
      assert.equal(await page.evaluate(() => window.duelHarness.states.p1.phase), 'playing');
    }
    await page.evaluate(() => window.duelHarness.sockets.p1.send(JSON.stringify({ type: 'leave' })));
    await page.waitForFunction(() => window.duelHarness.states.p5?.phase === 'finished' && window.duelHarness.states.p5.winner === 'p5');
    checks.push('Departures eliminate only their planes; the last remaining player p5 wins');
    const outcome = await page.evaluate(() => ({ winner: window.duelHarness.states.p5.winner, hp: window.duelHarness.states.p5.snapshot.players.map(p => ({ id: p.id, hp: p.hp })) }));
    await page.evaluate(() => { clearInterval(window.duelHarness.interval); clearInterval(window.duelHarness.ping); for (const ws of Object.values(window.duelHarness.sockets)) { if (ws.readyState === 1) ws.send(JSON.stringify({ type: 'leave' })); ws.close(); } });
    const report = { passed: true, checks, minimumSpawnDistance: distance, outcome };
    await fs.mkdir('D:/test/tmp/stubenflieger-five', { recursive: true }); await fs.writeFile('D:/test/tmp/stubenflieger-five/integration.json', JSON.stringify(report, null, 2)); console.log(JSON.stringify(report, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
