// Real local Workers runtime + WebSockets. Never writes to a public server.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const { chromium } = require('playwright');
const origin = process.env.DUEL_QA_ORIGIN || 'http://127.0.0.1:8796';
assert(['localhost', '127.0.0.1'].includes(new URL(origin).hostname));
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const checks = [];
  try {
    const page = await browser.newPage();
    await page.goto(origin + '/api/house-leaderboard');
    const wrongOrigin = await page.request.post(origin + '/api/duels', { headers: { Origin: 'https://example.invalid' }, data: { name: 'Test' } });
    assert.equal(wrongOrigin.status(), 403);
    await page.evaluate(async () => {
      const post = async (path, data) => {
        const response = await fetch(path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        return { status: response.status, data: await response.json() };
      };
      const created = await post('/api/duels', { name: 'Alpha' });
      if (created.status !== 201) throw new Error(JSON.stringify(created));
      const joined = await post(`/api/duels/${created.data.room}/join`, { name: 'Bravo' });
      if (joined.status !== 200) throw new Error(JSON.stringify(joined));
      window.duelHarness = { created: created.data, joined: joined.data, states: {}, sequences: {}, sockets: {}, history: [], post, fire: true };
      window.duelHarness.connect = async function (slot) {
        const h = window.duelHarness, credentials = slot === 'p1' ? h.created : h.joined;
        const ws = new WebSocket(`${location.origin.replace(/^http/, 'ws')}/api/duels/${credentials.room}/socket?token=${credentials.token}`);
        h.sockets[slot] = ws; h.sequences[slot] = 0;
        ws.addEventListener('message', event => {
          const data = JSON.parse(event.data);
          if (data.type === 'state') { h.states[slot] = data; h.history.push({ slot, phase: data.phase, tick: data.snapshot?.tick, hp: data.snapshot?.players.map(p => p.hp) }); }
        });
        await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = () => reject(new Error('WebSocket failed')); });
      };
      await Promise.all(['p1', 'p2'].map(slot => window.duelHarness.connect(slot)));
      window.duelHarness.interval = setInterval(() => {
        const h = window.duelHarness;
        for (const slot of ['p1', 'p2']) if (h.sockets[slot]?.readyState === WebSocket.OPEN && h.states[slot]?.phase === 'playing') {
          h.sockets[slot].send(JSON.stringify({ type: 'input', seq: ++h.sequences[slot], steer: 0, pitch: .11875, fire: h.fire }));
        }
      }, 55);
      window.duelHarness.ping = setInterval(() => {
        for (const ws of Object.values(window.duelHarness.sockets)) if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify({ type: 'ping', sentAt: Date.now() }));
      }, 2000);
    });
    await page.waitForFunction(() => ['p1', 'p2'].every(id => window.duelHarness.states[id]?.players.filter(p => p.connected).length === 2));
    const seats = await page.evaluate(async () => {
      const h = window.duelHarness;
      const third = await h.post(`/api/duels/${h.created.room}/join`, { name: 'Dritter' });
      const invalid = await h.post(`/api/duels/${h.created.room}/join`, { name: 'Falsch', token: 'A'.repeat(43) });
      const resume = await h.post(`/api/duels/${h.created.room}/join`, { name: 'Alpha', token: h.created.token });
      const publicState = JSON.stringify(h.states);
      return { third: third.status, invalid: invalid.status, resume: resume.status, slot: resume.data.slot,
        leaked: publicState.includes(h.created.token) || publicState.includes(h.joined.token) || publicState.includes('tokenHash'),
        cleanInvite: !h.created.inviteUrl.includes(h.created.token), players: h.states.p1.players.length };
    });
    assert.deepEqual(seats, { third: 409, invalid: 403, resume: 200, slot: 'p1', leaked: false, cleanInvite: true, players: 2 });
    checks.push('Private invitation, two reserved seats, authenticated resume, origin and token protection');
    await page.evaluate(() => { for (const ws of Object.values(window.duelHarness.sockets)) ws.send(JSON.stringify({ type: 'ready', ready: true })); });
    await page.waitForFunction(() => Object.values(window.duelHarness.states).every(s => s.phase === 'countdown'));
    await page.waitForFunction(() => ['p1', 'p2'].every(id => window.duelHarness.states[id]?.phase === 'finished'), { timeout: 20000 });
    const outcome = await page.evaluate(() => {
      const h = window.duelHarness;
      return { winners: ['p1', 'p2'].map(id => h.states[id].winner), hp: ['p1', 'p2'].map(id => h.states[id].snapshot.players.map(p => p.hp)),
        damageSeen: h.history.some(s => s.hp?.some(hp => hp > 0 && hp < 100)), ticks: ['p1', 'p2'].map(id => h.states[id].snapshot.tick) };
    });
    assert.deepEqual(outcome.winners, ['draw', 'draw']); assert.deepEqual(outcome.hp, [[0, 0], [0, 0]]);
    assert(outcome.damageSeen); assert.equal(outcome.ticks[0], outcome.ticks[1]);
    checks.push('Real authoritative 30 Hz flight, visible damage, simultaneous knockout and identical result on both sockets');
    await page.evaluate(() => { window.duelHarness.fire = false; for (const ws of Object.values(window.duelHarness.sockets)) ws.send(JSON.stringify({ type: 'rematch' })); });
    await page.waitForFunction(() => ['p1', 'p2'].every(id => window.duelHarness.states[id]?.phase === 'playing' && window.duelHarness.states[id].snapshot.players.every(p => p.hp === 100)), { timeout: 12000 });
    await page.evaluate(() => window.duelHarness.sockets.p2.close());
    await page.waitForFunction(() => window.duelHarness.states.p1?.phase === 'reconnecting');
    const pausedTick = await page.evaluate(() => window.duelHarness.states.p1.snapshot.tick);
    await page.waitForTimeout(300);
    assert.equal(await page.evaluate(() => window.duelHarness.states.p1.snapshot.tick), pausedTick);
    await page.evaluate(() => window.duelHarness.connect('p2'));
    await page.waitForFunction(() => ['p1', 'p2'].every(id => window.duelHarness.states[id]?.phase === 'playing'));
    checks.push('Both consent to rematch; disconnect pauses simulation and the authenticated guest reconnects to the same seat');
    await page.evaluate(() => window.duelHarness.sockets.p2.send(JSON.stringify({ type: 'leave' })));
    await page.waitForFunction(() => window.duelHarness.states.p1?.phase === 'finished' && window.duelHarness.states.p1.winner === 'p1');
    checks.push('Leaving an active duel awards the remaining player the round');
    await page.evaluate(() => { clearInterval(window.duelHarness.interval); clearInterval(window.duelHarness.ping); for (const ws of Object.values(window.duelHarness.sockets)) ws.close(); });
    const report = { passed: true, checks, outcome };
    await fs.mkdir('D:/test/tmp/stubenflieger-duel', { recursive: true });
    await fs.writeFile('D:/test/tmp/stubenflieger-duel/integration.json', JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
