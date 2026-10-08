// Local browser state regression. HTTP room creation and WebSockets are fake;
// the actual bundled client, renderer, keyboard handlers and DOM still run.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const { chromium } = require('playwright');

const origin = process.env.DUEL_QA_ORIGIN || 'http://127.0.0.1:8796';
assert(['127.0.0.1', 'localhost'].includes(new URL(origin).hostname), 'Only a local static site may be tested.');
const output = 'D:/test/tmp/stubenflieger-five/states';

(async () => {
  const { createDuelSimulation, DUEL_PLAYER_IDS } = await import('../src/duel-simulation.js');
  const names = { p1: 'Papierpilot', p2: 'Gartenpilot', p3: 'Wolkenpilot', p4: 'Dachpilot', p5: 'Goldpilot' };
  const identities = (ids = DUEL_PLAYER_IDS, ready = true) => ids.map(id => ({ id, name: names[id], connected: true, ready, left: false, eliminated: false, rematch: false }));
  const initial = createDuelSimulation({ playerIds: DUEL_PLAYER_IDS }).snapshot();
  const changed = (base, tick, hp, winner = null) => ({ ...structuredClone(base), tick, time: tick / 30, winner,
    reason: winner ? 'knockout' : '', players: base.players.map(player => ({ ...structuredClone(player), hp: hp[player.id] ?? player.hp, eliminated: (hp[player.id] ?? player.hp) <= 0 })) });
  const packet = (phase, players, snapshot = null) => ({ type: 'state', phase, players, hostId: 'p1', remaining: 180 - (snapshot?.time || 0),
    winner: snapshot?.winner ?? null, reason: snapshot?.reason || '', ...(snapshot ? { snapshot } : {}) });

  await fs.mkdir(output, { recursive: true });
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--enable-unsafe-swiftshader'] });
  const errors = [], networkEscapes = [], realSockets = [], checks = [], screenshots = [];
  let page;
  try {
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 }, reducedMotion: 'reduce', serviceWorkers: 'block' });
    await context.route('**/*', route => {
      const url = new URL(route.request().url());
      if (url.pathname.startsWith('/api/') || ![origin, 'null'].includes(url.origin)) {
        networkEscapes.push(`${route.request().method()} ${url.pathname}`); return route.abort();
      }
      return route.continue();
    });
    await context.addInitScript(() => {
      const nativeFetch = window.fetch.bind(window), nativeRaf = window.requestAnimationFrame.bind(window);
      const qa = window.stateQA = { sends: [], fetches: [], sockets: [], frames: 0, draws: 0 };
      window.requestAnimationFrame = callback => nativeRaf(time => { qa.frames++; callback(time); });
      for (const Type of [window.WebGLRenderingContext, window.WebGL2RenderingContext]) {
        if (!Type) continue;
        for (const method of ['drawArrays', 'drawElements', 'drawArraysInstanced', 'drawElementsInstanced']) {
          const original = Type.prototype[method];
          if (original) Type.prototype[method] = function (...args) { qa.draws++; return original.apply(this, args); };
        }
      }
      window.fetch = async (resource, init = {}) => {
        const url = new URL(typeof resource === 'string' ? resource : resource.url, location.href);
        if (!url.pathname.startsWith('/api/')) return nativeFetch(resource, init);
        qa.fetches.push({ path: url.pathname, method: init.method, body: JSON.parse(init.body || '{}') });
        if (url.pathname !== '/api/duels' || init.method !== 'POST') throw new Error('Unexpected fake API request');
        return new Response(JSON.stringify({ room: '00000000-0000-4000-8000-000000000005', token: 'isolated-test-seat-only', slot: 'p1' }), { status: 201, headers: { 'Content-Type': 'application/json' } });
      };
      class FakeWebSocket extends EventTarget {
        static CONNECTING = 0; static OPEN = 1; static CLOSING = 2; static CLOSED = 3;
        constructor(url) {
          super(); this.url = String(url); this.readyState = FakeWebSocket.CONNECTING; qa.sockets.push(this);
          queueMicrotask(() => { this.readyState = FakeWebSocket.OPEN; this.emit('open', new Event('open')); this.deliver({ type: 'welcome', slot: 'p1' }); });
        }
        emit(type, event) { this.dispatchEvent(event); this[`on${type}`]?.call(this, event); }
        deliver(data) { this.emit('message', new MessageEvent('message', { data: JSON.stringify(data) })); }
        send(raw) {
          if (this.readyState !== FakeWebSocket.OPEN) throw new Error('Fake socket is closed');
          const data = JSON.parse(raw); qa.sends.push(data);
          if (data.type === 'ping') queueMicrotask(() => this.deliver({ type: 'pong', sentAt: data.sentAt }));
        }
        close(code = 1000, reason = '') { this.readyState = FakeWebSocket.CLOSED; this.emit('close', new CloseEvent('close', { code, reason, wasClean: true })); }
      }
      window.WebSocket = FakeWebSocket;
      qa.deliver = data => { qa.state = data; qa.sockets.at(-1).deliver(data); };
    });
    page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    page.on('websocket', socket => realSockets.push(socket.url()));
    async function deliver(data) { await page.evaluate(value => window.stateQA.deliver(value), data); }
    async function screenshot(name) { const file = `${output}/${name}.png`; await page.screenshot({ path: file, fullPage: true }); screenshots.push(file); }
    await page.goto(`${origin}/duel`);
    await page.locator('#duel-name').fill(names.p1);
    await page.locator('#create-duel').click();
    await page.waitForFunction(() => window.stateQA.sockets[0]?.readyState === WebSocket.OPEN);
    await deliver(packet('lobby', identities(DUEL_PLAYER_IDS, false)));
    assert.equal(await page.locator('#lobby-count').textContent(), '5 / 5 Piloten');

    await deliver(packet('playing', identities(), changed(initial, 30, {})));
    assert.equal(await page.locator('#opponents .health-meter:visible').count(), 0);
    await page.locator('#duel-settings-button').click();
    assert.equal(await page.locator('#opponents .health-meter:visible').count(), 4);
    await page.locator('#duel-close-settings').click();
    assert.equal(await page.locator('#own-hp').textContent(), '100');
    assert(await page.locator('#duel-reticle').isVisible());
    await page.locator('#duel-canvas').focus();
    await page.keyboard.down('d'); await page.keyboard.down('Space');
    await page.waitForFunction(() => window.stateQA.sends.some(message => message.type === 'input' && message.steer === 1 && message.fire));
    checks.push('The real keyboard handlers send controls during a five-player round.');

    await page.locator('#duel-settings-button').click();
    const afterClose = await page.evaluate(() => new Promise(resolve => {
      const dialog = document.getElementById('duel-settings'), canvas = document.getElementById('duel-canvas');
      dialog.addEventListener('close', () => resolve(window.stateQA.sends.length), { once: true });
      // New controls can arrive after close() but before its queued close event.
      document.getElementById('duel-close-settings').click(); canvas.focus();
      for (const code of ['KeyD', 'Space']) canvas.dispatchEvent(new KeyboardEvent('keydown', { code, bubbles: true }));
    }));
    await page.waitForFunction(start => window.stateQA.sends.slice(start).some(message => message.type === 'input' && message.steer === 1 && message.fire), afterClose);
    checks.push('Fresh controls entered before the queued native dialog close event remain active after that event.');

    const eliminated = changed(initial, 60, { p1: 0, p2: 60, p3: 80 });
    const afterKOIdentities = identities().map(player => ({ ...player, eliminated: player.id === 'p1' }));
    await deliver(packet('playing', afterKOIdentities, eliminated));
    assert(await page.locator('#duel-spectator').isVisible());
    assert.equal(await page.locator('#own-hp').textContent(), '0');
    assert.equal(await page.locator('#duel-reticle').isVisible(), false);
    assert.equal(await page.locator('#fire-button').isVisible(), false);
    assert.equal(await page.locator('#duel-help').isVisible(), false);
    assert.equal(await page.locator('#duel-result').isVisible(), false);
    const before = await page.evaluate(() => ({ inputs: window.stateQA.sends.filter(message => message.type === 'input').length, frames: window.stateQA.frames, draws: window.stateQA.draws }));
    await page.keyboard.up('d'); await page.keyboard.up('Space');
    for (const key of ['w', 'a', 's', 'd', 'Space']) await page.keyboard.down(key);
    await page.evaluate(() => document.querySelector('#fire-button').click());
    await page.waitForTimeout(450);
    const after = await page.evaluate(() => ({ inputs: window.stateQA.sends.filter(message => message.type === 'input').length, frames: window.stateQA.frames, draws: window.stateQA.draws }));
    assert.equal(after.inputs, before.inputs, 'Eliminated spectators must send no input frames, including neutral controls.');
    assert.ok(after.frames > before.frames && after.draws > before.draws, 'The scene keeps rendering while spectating.');
    for (const key of ['w', 'a', 's', 'd', 'Space']) await page.keyboard.up(key);
    await screenshot('five-player-spectator');
    checks.push('After p1 is knocked out, the round continues: spectator banner, hidden weapons/reticle, zero input frames despite WASD/Space and continued WebGL rendering.');

    const finished = changed(initial, 90, { p1: 0, p2: 0, p3: 0, p4: 0, p5: 60 }, 'p5');
    await deliver(packet('finished', identities().map(player => ({ ...player, eliminated: player.id !== 'p5' })), finished));
    assert.equal(await page.locator('#duel-result-title').textContent(), 'Goldpilot gewinnt.');
    assert.equal(await page.locator('#result-score .result-pilot').count(), 5);
    for (const id of DUEL_PLAYER_IDS) assert.match(await page.locator(`#result-score [data-player-id="${id}"]`).textContent(), new RegExp(names[id]));
    assert.match(await page.locator('#result-score [data-player-id="p5"]').textContent(), /60.*Gewonnen/s);
    assert.equal(await page.locator('#duel-feedback').isVisible(), false);
    assert.equal(await page.locator('#duel-feedback').textContent(), '');
    assert.equal(await page.locator('#duel-spectator').isVisible(), false);
    await screenshot('five-player-result');
    await page.locator('#rematch-button').click();
    assert(await page.locator('#rematch-button').isDisabled());
    assert(await page.evaluate(() => window.stateQA.sends.some(message => message.type === 'rematch')));
    checks.push('Result names p5 correctly, lists all five pilots and clears/hides combat feedback above the result.');

    const sparse = ['p1', 'p3', 'p5'];
    await deliver(packet('lobby', identities(sparse, false)));
    assert(await page.locator('#duel-lobby').isVisible());
    assert.equal(await page.locator('#lobby-count').textContent(), '3 / 5 Piloten');
    assert.equal(await page.locator('#own-hp').textContent(), '100', 'Old HP0 snapshot must be cleared for rematch lobby.');
    assert.equal(await page.locator('#ready-button').getAttribute('aria-pressed'), 'false');
    assert.match(await page.locator('#ready-button').textContent(), /Ich bin bereit/);
    assert(await page.locator('#start-duel').isVisible()); assert(await page.locator('#start-duel').isDisabled());
    assert.equal(await page.locator('#duel-result').isVisible(), false);
    for (const id of ['p2', 'p4']) { assert.match(await page.locator(`#lobby-${id}`).textContent(), /Freier Platz/); assert.equal(await page.locator(`#health-${id}`).isVisible(), false); }
    for (const id of sparse) assert.match(await page.locator(`#lobby-${id}`).textContent(), new RegExp(names[id]));
    await screenshot('sparse-rematch-lobby');
    await page.locator('#ready-button').click();
    assert(await page.evaluate(() => window.stateQA.sends.some(message => message.type === 'ready' && message.ready === true)));
    await deliver(packet('lobby', identities(sparse, true)));
    assert.equal(await page.locator('#start-duel').isDisabled(), false);
    assert.match(await page.locator('#start-duel').textContent(), /3 Piloten/);
    await page.locator('#start-duel').click();
    assert(await page.evaluate(() => window.stateQA.sends.some(message => message.type === 'start')));
    const fresh = createDuelSimulation({ playerIds: sparse }).snapshot();
    await deliver(packet('playing', identities(sparse), fresh));
    await page.locator('#duel-settings-button').click();
    assert.equal(await page.locator('#opponents .health-meter:visible').count(), 2);
    await page.locator('#duel-close-settings').click();
    assert.equal(await page.locator('#own-hp').textContent(), '100');
    assert.equal(await page.locator('#duel-spectator').isVisible(), false);
    assert(await page.locator('#duel-reticle').isVisible());
    checks.push('Sparse rematch p1/p3/p5 clears the old snapshot, frees p2/p4, resets ready state and enables the host only when all three are ready.');

    assert.deepEqual(errors, []); assert.deepEqual(networkEscapes, []); assert.deepEqual(realSockets, []);
    assert.equal(await page.evaluate(() => window.stateQA.fetches.length), 1);
    assert.equal(await page.locator('#duel-errors').isVisible(), false);
    const report = { passed: true, checks, screenshots, errors, realApiRequests: networkEscapes, realWebSockets: realSockets };
    await fs.writeFile(`${output}/client-states.json`, JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  } catch (error) {
    if (page) await page.screenshot({ path: `${output}/failure.png`, fullPage: true }).catch(() => {});
    await fs.writeFile(`${output}/failure.json`, JSON.stringify({ error: error.message, errors, networkEscapes, realSockets }, null, 2));
    throw error;
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
