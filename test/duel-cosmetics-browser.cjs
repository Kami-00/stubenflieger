// Real isolated browsers and real local WebSockets; no game-state injection.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const { chromium } = require('playwright');

const origin = process.env.DUEL_QA_ORIGIN || 'http://127.0.0.1:8796';
assert(['localhost', '127.0.0.1'].includes(new URL(origin).hostname), 'Only run against a local server');
const output = 'D:/test/tmp/stubenflieger-cosmetics/browser';
const profileKey = 'stubenflieger.house-profile.v1';
const appearanceKey = 'stubenflieger.duel-appearance.v1';
const defaultAppearance = { color: null, effect: 'none' };
const initialAppearance = { color: '#1256de', effect: 'mint' };
const selectedAppearance = { color: '#12ab34', effect: 'spark' };
const profile = owned => ({
  version: 2, points: 500, highscore: 1000,
  owned: ['plane:classic', 'effect:none', ...(owned ? ['upgrade:color', 'effect:mint', 'effect:spark'] : [])],
  equipped: { form: 'classic', effect: owned ? 'mint' : 'none', boosts: [], size: 1, color: owned ? initialAppearance.color : null },
  useDoorUnlocks: true, creditedRuns: [], discoveredStarIds: [],
});
const sameAppearance = (actual, expected) => actual?.color === expected.color && actual?.effect === expected.effect;

async function until(predicate, label, timeout = 12000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    if (await predicate()) return;
    await new Promise(resolve => setTimeout(resolve, 75));
  }
  throw new Error(`Timed out: ${label}`);
}

(async () => {
  await fs.mkdir(output, { recursive: true });
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--enable-unsafe-swiftshader'] });
  const errors = [], checks = [], pilots = [];
  try {
    async function player(label, seededProfile) {
      const context = await browser.newContext({ viewport: { width: 1280, height: 800 }, reducedMotion: 'reduce' });
      await context.route('**/*', route => {
        const url = new URL(route.request().url());
        if (url.origin === new URL(origin).origin) return route.continue();
        errors.push(`${label}: unexpected external request to ${url.origin}`);
        return route.abort();
      });
      await context.addInitScript(({ key, seeded }) => {
        if (localStorage.getItem(key) === null) localStorage.setItem(key, JSON.stringify(seeded));
      }, { key: profileKey, seeded: seededProfile });
      const page = await context.newPage();
      page.setDefaultTimeout(12000);
      const pilot = { label, context, page, state: null, states: [], appearanceSends: [], sockets: 0, seededProfile };
      page.on('pageerror', error => errors.push(`${label}: ${error.message}`));
      // Observe frames at the browser transport; leave the production WebSocket untouched.
      page.on('websocket', socket => {
        pilot.sockets++;
        socket.on('framereceived', ({ payload }) => {
          try {
            const data = JSON.parse(String(payload));
            if (data.type === 'state') {
              pilot.state = data; pilot.states.push(data);
              if (pilot.states.length > 150) pilot.states.shift();
            }
          } catch {}
        });
        socket.on('framesent', ({ payload }) => {
          try { const data = JSON.parse(String(payload)); if (data.type === 'appearance') pilot.appearanceSends.push(data); } catch {}
        });
      });
      pilots.push(pilot);
      return pilot;
    }

    async function mobilePanel(pilot, phase) {
      const { page, label } = pilot;
      for (const [width, height] of [[320, 568], [390, 844]]) {
        await page.setViewportSize({ width, height });
        const geometry = await page.locator('#duel-appearance').evaluate(panel => {
          const rect = panel.getBoundingClientRect();
          return { width: innerWidth, scrollWidth: document.documentElement.scrollWidth,
            left: rect.left, right: rect.right,
            controls: [...panel.querySelectorAll('input,select,button:not([hidden])')].map(node => {
              const r = node.getBoundingClientRect(); return { id: node.id, left: r.left, right: r.right, width: r.width, height: r.height };
            }) };
        });
        assert(geometry.scrollWidth <= width + 1, `${label}/${phase}/${width}: horizontal overflow`);
        assert(geometry.left >= 0 && geometry.right <= width + 1, `${label}/${phase}/${width}: panel clipped`);
        for (const control of geometry.controls) {
          assert(control.left >= geometry.left - 1 && control.right <= geometry.right + 1 && control.width > 0 && control.height > 0,
            `${label}/${phase}/${width}: ${control.id} clipped`);
        }
        await page.locator('#duel-appearance').scrollIntoViewIfNeeded();
        await page.screenshot({ path: `${output}/${label}-${phase}-${width}.png`, fullPage: true });
      }
      await page.setViewportSize({ width: 1280, height: 800 });
    }

    async function assertRoster(pilot, expected, expectedText) {
      const { page } = pilot;
      await until(() => sameAppearance(pilot.state?.players.find(p => p.id === 'p1')?.appearance, expected), `${pilot.label} receives host appearance`);
      await until(async () => (await page.locator('#lobby-p1 .pilot-effect').textContent()) === expectedText, `${pilot.label} renders effect`);
      const rgb = expected.color.match(/[0-9a-f]{2}/g).map(v => parseInt(v, 16));
      assert.equal(await page.locator('#lobby-p1 .pilot-swatch').evaluate(node => getComputedStyle(node).backgroundColor), `rgb(${rgb.join(', ')})`);
    }

    const host = await player('host', profile(true)), guest = await player('guest', profile(false));
    await host.page.goto(origin + '/duel');
    await guest.page.goto(origin + '/duel');
    await Promise.all(pilots.map(({ page }) => page.waitForFunction(() => document.querySelector('#duel-effect').options.length > 0)));
    assert.deepEqual(await host.page.locator('#duel-effect option').evaluateAll(nodes => nodes.map(n => n.value)), ['none', 'mint', 'spark']);
    assert.deepEqual(await guest.page.locator('#duel-effect option').evaluateAll(nodes => nodes.map(n => n.value)), ['none']);
    assert(await host.page.locator('#duel-custom-color').isChecked());
    assert(await host.page.locator('#duel-color').isEnabled());
    assert.equal(await host.page.locator('#duel-color').inputValue(), initialAppearance.color);
    assert.equal(await host.page.locator('#duel-effect').inputValue(), initialAppearance.effect);
    assert(await guest.page.locator('#duel-custom-color').isDisabled());
    assert(await guest.page.locator('#duel-color').isDisabled());
    assert.equal(await host.page.locator('#apply-appearance').isVisible(), false);
    const panel = await host.page.locator('#duel-appearance').elementHandle();
    assert.equal(await panel.evaluate(node => node.parentElement.id), 'entry-appearance');
    await mobilePanel(host, 'entry'); await mobilePanel(guest, 'entry');
    checks.push('Owned effects only; unlocked custom color seeded; guest color controls disabled; entry panels fit 320/390 px');

    await host.page.locator('#duel-name').fill('Farbpilot');
    await host.page.locator('#create-duel').click();
    await until(() => host.state?.phase === 'lobby' && host.state.players.some(p => p.id === 'p1' && p.connected), 'host creates lobby');
    const invitation = await host.page.locator('#invite-link').inputValue();
    assert.match(invitation, /\/duel#room=[0-9a-f-]{36}$/);
    assert(!invitation.includes('token'));
    await guest.page.goto(invitation);
    await guest.page.locator('#duel-name').fill('Papiergast'); await guest.page.locator('#join-duel').click();
    await until(() => pilots.every(p => p.state?.players.filter(v => v.connected).length === 2), 'both participants connected');
    assert.equal(await panel.evaluate(node => node === document.querySelector('#duel-appearance') && node.parentElement.id === 'lobby-appearance'), true);
    assert.equal(await host.page.locator('#duel-appearance').count(), 1);
    for (const pilot of pilots) {
      await assertRoster(pilot, initialAppearance, 'Minzspur');
      assert(sameAppearance(pilot.state.players.find(p => p.id === 'p2').appearance, defaultAppearance));
      await mobilePanel(pilot, 'lobby');
    }
    assert(await guest.page.locator('#duel-custom-color').isDisabled());
    assert(await guest.page.locator('#duel-color').isDisabled());
    checks.push('Create/join normalize and synchronize appearance; both rosters show host color/effect; same picker moves to lobby; mobile lobby fits');

    await host.page.locator('#duel-color').fill(selectedAppearance.color);
    await host.page.locator('#duel-effect').selectOption(selectedAppearance.effect);
    assert.equal(host.appearanceSends.length, 0, 'Draft changes must not send before Apply');
    assert(sameAppearance(guest.state.players.find(p => p.id === 'p1').appearance, initialAppearance));
    await host.page.locator('#apply-appearance').click();
    for (const pilot of pilots) await assertRoster(pilot, selectedAppearance, 'Sternenstaub');
    assert.deepEqual(host.appearanceSends, [{ type: 'appearance', appearance: selectedAppearance }]);
    assert.equal(guest.appearanceSends.length, 0);
    await until(() => host.page.locator('#apply-appearance').isDisabled(), 'Apply acknowledges server appearance');
    checks.push('Lobby draft is local until Apply; one authenticated appearance message updates both real peers');

    // Drop exactly one outgoing appearance frame and close the real transport.
    // The subsequent state is supplied by the real server, never by this test.
    const lobbySocketsBefore = host.sockets;
    await host.page.locator('#duel-color').fill('#654321');
    await host.page.locator('#duel-effect').selectOption('mint');
    await host.page.evaluate(() => {
      const originalSend = WebSocket.prototype.send;
      WebSocket.prototype.send = function (data) {
        let message; try { message = JSON.parse(data); } catch {}
        if (message?.type === 'appearance') {
          WebSocket.prototype.send = originalSend;
          this.close(4000, 'local appearance-loss test');
          return;
        }
        return originalSend.call(this, data);
      };
    });
    await host.page.locator('#apply-appearance').click();
    await until(() => host.sockets > lobbySocketsBefore && host.state?.phase === 'lobby' && host.state.players.every(p => p.connected), 'lobby reconnect after lost appearance frame');
    await until(async () => await host.page.locator('#duel-color').isEnabled() && await host.page.locator('#apply-appearance').isDisabled()
      && (await host.page.locator('#duel-color').inputValue()) === selectedAppearance.color, 'authoritative appearance clears pending UI after reconnect');
    assert.equal(await host.page.locator('#duel-effect').inputValue(), selectedAppearance.effect);
    for (const pilot of pilots) await assertRoster(pilot, selectedAppearance, 'Sternenstaub');
    assert.equal(host.appearanceSends.length, 1, 'Dropped update never reached the WebSocket transport');
    checks.push('A lost appearance frame and real disconnect recover the authoritative selection without leaving lobby controls pending');

    await host.page.locator('#ready-button').click(); await guest.page.locator('#ready-button').click();
    await until(() => host.page.locator('#start-duel').isEnabled(), 'all ready');
    await host.page.locator('#start-duel').click();
    await until(() => pilots.every(p => p.state?.phase === 'playing' && p.state.snapshot?.players.length === 2), 'round starts', 18000);
    for (const pilot of pilots) {
      assert(sameAppearance(pilot.state.snapshot.players.find(p => p.id === 'p1').appearance, selectedAppearance));
      assert(sameAppearance(pilot.state.snapshot.players.find(p => p.id === 'p2').appearance, defaultAppearance));
      assert.equal(await pilot.page.locator('#apply-appearance').isVisible(), false);
      assert(await pilot.page.locator('#duel-color').isDisabled());
      assert(await pilot.page.locator('#duel-effect').isDisabled());
    }
    const button = host.page.locator('#duel-camera-mode');
    assert.equal(await button.textContent(), 'Außen'); assert.equal(await button.getAttribute('aria-pressed'), 'false');
    await button.click();
    assert.equal(await button.textContent(), 'FPV'); assert.equal(await button.getAttribute('aria-pressed'), 'true');
    await host.page.locator('#duel-canvas').focus(); await host.page.keyboard.press('v');
    assert.equal(await button.textContent(), 'Außen'); assert.equal(await button.getAttribute('aria-pressed'), 'false');
    await host.page.keyboard.press('v');
    assert.equal(await button.textContent(), 'FPV'); assert.equal(await button.getAttribute('aria-pressed'), 'true');
    // A temporary text field exercises the typing guard during a real playing phase.
    // It does not access application state or replace a production event handler.
    for (const tag of ['input', 'textarea', 'select', 'contenteditable']) {
      await host.page.evaluate(tag => {
        const node = document.createElement(tag === 'contenteditable' ? 'div' : tag);
        node.id = 'qa-typing-target'; node.style.cssText = 'position:fixed;bottom:0;left:0;width:100px;z-index:100';
        if (tag === 'contenteditable') node.contentEditable = 'true';
        if (tag === 'select') node.append(new Option('Test', 'test'));
        document.body.append(node); node.focus();
      }, tag);
      await host.page.keyboard.press('v');
      assert.equal(await button.textContent(), 'FPV', `V must not toggle while typing in ${tag}`);
      await host.page.locator('#qa-typing-target').evaluate(node => node.remove());
    }
    await host.page.locator('#duel-canvas').focus();
    await host.page.screenshot({ path: `${output}/host-fpv.png` });
    checks.push('Real playing snapshots preserve both appearances; cosmetics lock for round; button and V toggle FPV with typing guards');

    // Try a different local preference on reload. The authenticated server must retain the round choice.
    await host.page.evaluate(({ key }) => localStorage.setItem(key, JSON.stringify({ color: '#9955cc', effect: 'mint' })), { key: appearanceKey });
    const socketsBefore = host.sockets, tickBefore = host.state.snapshot.tick;
    await host.page.reload();
    await until(() => host.sockets > socketsBefore && host.state?.phase === 'playing' && host.state.snapshot.tick > tickBefore, 'authenticated reload resumes round');
    for (const pilot of pilots) {
      assert(sameAppearance(pilot.state.players.find(p => p.id === 'p1').appearance, selectedAppearance));
      assert(sameAppearance(pilot.state.snapshot.players.find(p => p.id === 'p1').appearance, selectedAppearance));
    }
    assert.equal(await button.textContent(), 'FPV'); assert.equal(await button.getAttribute('aria-pressed'), 'true');
    assert.deepEqual(await host.page.evaluate(key => JSON.parse(localStorage.getItem(key)), appearanceKey), selectedAppearance);
    assert.equal(host.appearanceSends.length, 1, 'Active reload must not send a lobby appearance update');
    checks.push('Reload opens a new authenticated socket, preserves active-round appearance despite changed local preference, and restores FPV preference');

    for (const [width, height] of [[320, 568], [390, 844]]) {
      await guest.page.setViewportSize({ width, height });
      await guest.page.evaluate(() => scrollTo(0, 0));
      assert(await guest.page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
      const cameraRect = await guest.page.locator('#duel-camera-mode').boundingBox();
      assert(cameraRect && cameraRect.x >= 0 && cameraRect.x + cameraRect.width <= width + 1);
      await guest.page.locator('#duel-camera-mode').click();
      assert.equal(await guest.page.locator('#duel-camera-mode').textContent(), width === 320 ? 'FPV' : 'Außen');
      await guest.page.screenshot({ path: `${output}/guest-flight-${width}.png` });
    }
    for (const pilot of pilots) assert.deepEqual(await pilot.page.evaluate(key => JSON.parse(localStorage.getItem(key)), profileKey), pilot.seededProfile, 'Duels must not mutate solo purchases or wallet');
    checks.push('320/390 px flight camera control remains visible and clickable; solo profiles and wallet stay unchanged');
    await guest.page.locator('#leave-duel').click();
    await until(() => host.state?.phase === 'finished', 'cleanly finish local test room');
    assert.deepEqual(errors, []);
    const report = { passed: true, checks, errors };
    await fs.writeFile(`${output}/browser.json`, JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  } catch (error) {
    for (const pilot of pilots) await pilot.page.screenshot({ path: `${output}/failure-${pilot.label}.png`, fullPage: true }).catch(() => {});
    await fs.writeFile(`${output}/browser.json`, JSON.stringify({ passed: false, checks, errors, failure: error.message }, null, 2));
    throw error;
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
