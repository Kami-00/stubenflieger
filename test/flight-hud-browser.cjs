// Actual game/client modules and local assets; HTTP/socket replies are isolated.
// Optional HUD_BASELINE_REF compares overlay area with an earlier Git revision.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const esbuild = require('esbuild');
const { chromium } = require('playwright');

(async () => {
  const root = path.resolve(__dirname, '..'), origin = 'http://127.0.0.1:8796';
  const output = process.env.HUD_QA_OUTPUT || 'D:/test/tmp/stubenflieger-flight-hud';
  const baseline = process.env.HUD_BASELINE_REF;
  if (baseline) assert(/^[0-9a-f]{7,40}$/i.test(baseline), 'Baseline must be a Git commit hash');
  const bundles = {}, cache = new Map(), errors = [], measurements = [], checks = [];
  for (const [name, entry] of [['game', 'game'], ['duel', 'duel-client']]) {
    const result = await esbuild.build({ absWorkingDir: root, entryPoints: [`src/${entry}.js`], bundle: true, write: false, format: 'esm' });
    bundles[`/${name}.js`] = result.outputFiles[0].text;
  }
  const { createDuelSimulation } = await import('../src/duel-simulation.js');
  const ids = ['p1', 'p2', 'p3', 'p4', 'p5'], snapshot = createDuelSimulation({ playerIds: ids }).snapshot();
  const packet = { type: 'state', phase: 'lobby', hostId: 'p1', remaining: 180, countdown: 3, snapshot: null,
    players: ids.map((id, i) => ({ id, name: `Papierflugpilot ${i + 1}`, connected: true, ready: true, appearance: { color: null, effect: 'none' } })) };
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--enable-unsafe-swiftshader'] });
  const contexts = []; let current;
  await fs.mkdir(output, { recursive: true });
  async function asset(file, ref) {
    if (!ref) return fs.readFile(path.join(root, 'dist', file));
    const key = `${ref}:${file}`;
    if (!cache.has(key)) cache.set(key, execFileSync('git', ['show', `${ref}:dist/${file}`], { cwd: root, maxBuffer: 12 * 1024 * 1024 }));
    return cache.get(key);
  }
  async function make(app, width, height, ref) {
    const context = await browser.newContext({ viewport: { width, height }, hasTouch: true, isMobile: true, deviceScaleFactor: 1, reducedMotion: 'reduce', serviceWorkers: 'block' });
    contexts.push(context);
    await context.route('**/*', async route => {
      const request = route.request(), url = new URL(request.url());
      assert.equal(url.origin, origin, 'No external traffic');
      if (!ref && bundles[url.pathname]) return route.fulfill({ contentType: 'text/javascript', body: bundles[url.pathname] });
      if (url.pathname.startsWith('/api/')) {
        let data = { entries: [] };
        if (url.pathname === '/api/house-runs') data = { run: 'isolated-hud-test-ticket' };
        else if (url.pathname === '/api/duels') data = { room: '00000000-0000-4000-8000-000000000001', token: 'isolated-hud-token', slot: 'p1' };
        else assert.equal(request.method(), 'GET', 'Unexpected write request');
        return route.fulfill({ contentType: 'application/json', body: JSON.stringify(data) });
      }
      const file = url.pathname === '/' ? 'index.html' : url.pathname === '/duel' ? 'duel.html' : url.pathname.slice(1);
      assert(!file.includes('..'));
      const types = { '.js': 'text/javascript', '.html': 'text/html', '.css': 'text/css', '.png': 'image/png', '.webmanifest': 'application/manifest+json' };
      return route.fulfill({ contentType: types[path.extname(file)] || 'application/octet-stream', body: await asset(file, ref) });
    });
    await context.addInitScript(({ app, packet, snapshot }) => {
      localStorage.setItem('stubenflieger.practice.v1', JSON.stringify({ mode: app === 'practice' ? 'practice' : 'normal', speed: .5 }));
      localStorage.setItem('stubenflieger.mobile.v1', JSON.stringify({ joystickSide: 'left', autoFullscreen: false }));
      const qa = window.hudQA = { sockets: [], sends: [], packet: structuredClone(packet) };
      class Socket extends EventTarget {
        static CONNECTING = 0; static OPEN = 1; static CLOSING = 2; static CLOSED = 3;
        constructor(url) { super(); this.url = String(url); this.readyState = 0; qa.sockets.push(this);
          queueMicrotask(() => { this.readyState = 1; this.emit('open', new Event('open')); this.deliver({ type: 'welcome', slot: 'p1' }); this.deliver(qa.packet); }); }
        emit(type, event) { this.dispatchEvent(event); this[`on${type}`]?.call(this, event); }
        deliver(value) { this.emit('message', new MessageEvent('message', { data: JSON.stringify(value) })); }
        send(raw) { const value = JSON.parse(raw); qa.sends.push(value); if (value.type === 'ping') queueMicrotask(() => this.deliver({ type: 'pong', sentAt: value.sentAt })); }
        close(code = 1000, reason = '') { this.readyState = 3; this.emit('close', new CloseEvent('close', { code, reason, wasClean: true })); }
      }
      window.WebSocket = Socket;
      qa.play = () => { qa.packet = { ...packet, phase: 'playing', snapshot }; qa.sockets.at(-1).deliver(qa.packet); };
      setInterval(() => { const socket = qa.sockets.at(-1); if (socket?.readyState === 1) socket.deliver(qa.packet); }, 100);
    }, { app, packet, snapshot });
    const page = await context.newPage(); current = page; page.setDefaultTimeout(10000);
    page.on('pageerror', error => errors.push(error.message)); page.on('websocket', () => errors.push('Unexpected real WebSocket'));
    const now = new Date('2026-10-08T13:00:00Z'); await page.clock.install({ time: now }); await page.clock.pauseAt(new Date(+now + 1000));
    await page.goto(origin + (app === 'duel' ? '/duel' : '/'));
    if (app === 'duel') {
      await page.locator('#duel-name').fill('Papierflugpilot 1'); await page.locator('#create-duel').click();
      await page.waitForFunction(() => window.hudQA.sockets.at(-1)?.readyState === 1); await page.evaluate(() => window.hudQA.play());
    } else {
      await page.locator('#loading').waitFor({ state: 'hidden' }); await page.locator('#launch').focus(); await page.keyboard.press('Enter');
    }
    await page.clock.runFor(16);
    return { page, context, cdp: await context.newCDPSession(page) };
  }
  async function measure(page) {
    return page.evaluate(() => {
      const visible = node => node && node.checkVisibility() && node.getBoundingClientRect().width > 0;
      // Union avoids counting nested HUD panels or overlapping header children twice.
      const selectors = ['header .brand', 'header button', 'header .connection', '#stats', '#door-progress', '#duel-hud'];
      const rectangles = [...new Set(selectors.flatMap(selector => [...document.querySelectorAll(selector)]))].filter(visible)
        .map(node => ({ id: node.id || node.className, ...node.getBoundingClientRect().toJSON() }));
      const xs = [...new Set(rectangles.flatMap(r => [r.left, r.right]))].sort((a, b) => a - b);
      let area = 0;
      for (let i = 1; i < xs.length; i++) {
        const bands = rectangles.filter(r => r.left < xs[i] && r.right > xs[i - 1]).map(r => [r.top, r.bottom]).sort((a, b) => a[0] - b[0]);
        let y = -Infinity, covered = 0;
        for (const [top, bottom] of bands) { covered += Math.max(0, bottom - Math.max(y, top)); y = Math.max(y, bottom); }
        area += (xs[i] - xs[i - 1]) * covered;
      }
      return { area: Math.round(area), bottom: Math.max(...rectangles.map(r => r.bottom)), rectangles,
        viewportScale: visualViewport.scale, innerWidth, scrollWidth: document.documentElement.scrollWidth };
    });
  }
  async function reachable(page, selector, width, height) {
    const node = page.locator(selector), rect = await node.boundingBox();
    assert(await node.isVisible(), `${selector} must be visible`);
    assert(rect && rect.width >= 43.9 && rect.height >= 43.9, `${selector} needs a 44px target: ${JSON.stringify(rect)}`);
    assert(rect.x >= -.5 && rect.y >= -.5 && rect.x + rect.width <= width + .5 && rect.y + rect.height <= height + .5, `${selector} clipped: ${JSON.stringify(rect)}`);
    assert(await node.evaluate(node => { const r = node.getBoundingClientRect(), hit = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2); return node === hit || node.contains(hit); }), `${selector} center blocked`);
  }
  async function openMenu(page, duel) { await page.locator(duel ? '#duel-settings-button' : '#menu-button').click(); }
  async function scrollMenuTo(page, selector) {
    // Center targets so a sticky modal heading does not cover a merely
    // partially visible item after scrolling up from the display controls.
    await page.locator(selector).evaluate(node => node.scrollIntoView({ block: 'center' }));
  }
  async function closeMenu(page, duel) {
    await page.locator(duel ? '#duel-close-settings' : '#close-menu').click();
    if (!duel && await page.locator('#paused').isVisible()) await page.locator('#resume').click();
  }
  try {
    for (const app of ['normal', 'practice', 'duel']) for (const [width, height] of [[320, 568], [390, 844], [844, 390], [932, 430]]) {
      let previous;
      if (baseline) { const old = await make(app, width, height, baseline); previous = await measure(old.page); await old.context.close(); }
      const fixture = await make(app, width, height), { page, cdp } = fixture, duel = app === 'duel';
      assert.equal(await page.locator('header .brand').isVisible(), false, `${app}: brand must leave flight`);
      for (const selector of duel ? ['#opponents', '#connection-status', '#leave-duel', '#duel-help'] : ['#time', '#height', '#rooms', '#flight-level', '#pause', '#sound', '#reset', '#stats [data-discoveries]']) {
        assert.equal(await page.locator(selector).isVisible(), false, `${app}: ${selector} must not cover flight`);
      }
      for (const selector of duel ? ['#own-hp', '#duel-time', '#remaining-pilots'] : app === 'practice' ? ['#practice-badge'] : ['#stars', '#run-points']) assert(await page.locator(selector).isVisible(), selector);
      assert.equal(await page.locator('header button:visible').count(), 2, `${app}: only camera/menu in flight header`);
      if (!duel) assert.equal(await page.locator('#practice-badge').isVisible(), app === 'practice');
      if (app === 'practice') assert.equal(await page.locator('#door-progress').isVisible(), false);
      const metrics = await measure(page);
      assert(Math.abs(metrics.viewportScale - 1) < .01 && Math.abs(metrics.innerWidth - width) <= 1 && metrics.scrollWidth <= width + 1, `${app}: no mobile autoscaling or overflow`);
      assert(metrics.bottom <= 96, `${app}: persistent flight HUD extends too far down: ${metrics.bottom}`);
      if (previous) assert(metrics.area < previous.area * .75, `${app}: expected at least 25% less top overlay: ${metrics.area}/${previous.area}`);
      measurements.push({ app, width, height, area: metrics.area, bottom: metrics.bottom,
        previousArea: previous?.area, reductionPercent: previous ? Math.round((1 - metrics.area / previous.area) * 100) : undefined });
      for (const side of ['left', 'right']) {
        await openMenu(page, duel); await page.locator(duel ? '#duel-joystick-side' : '#joystick-side').selectOption(side); await closeMenu(page, duel);
        for (const selector of duel ? ['#duel-camera-mode', '#duel-settings-button', '#duel-stick', '#fire-button'] : ['#camera-mode', '#menu-button', '#joystick']) await reachable(page, selector, width, height);
        const stick = await page.locator(duel ? '#duel-stick' : '#joystick').boundingBox();
        assert.equal(stick.x + stick.width / 2 < width / 2, side === 'left');
        const point = { id: 1, x: stick.x + stick.width / 2, y: stick.y + stick.height / 2, radiusX: 6, radiusY: 6, force: 1 };
        await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [point] });
        await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ ...point, x: point.x + 20, y: point.y - 16 }] }); await page.clock.runFor(64);
        if (duel) assert((await page.evaluate(() => window.hudQA.sends.filter(v => v.type === 'input').at(-1))).steer > .2);
        else assert.match(await page.locator('#stick').evaluate(node => node.style.transform), /20px/);
        await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
        await page.screenshot({ path: path.join(output, `${app}-${width}-${side}.png`) });
      }
      await openMenu(page, duel);
      if (duel) {
        assert.equal(await page.locator('#opponents .opponent-card:visible').count(), 4);
        assert(await page.locator('#connection-status').isVisible());
        await scrollMenuTo(page, '#leave-duel'); await reachable(page, '#leave-duel', width, height);
      } else {
        for (const name of ['time', 'height', 'rooms', 'stars', 'points', 'room', 'discoveries']) {
          const detail = page.locator(`#menu-flight-${name}`); assert(await detail.isVisible(), name); assert((await detail.textContent()).trim(), name);
        }
        assert(await page.locator('#menu-door-progress').isVisible());
        await scrollMenuTo(page, '#menu-sound'); await reachable(page, '#menu-sound', width, height);
        const before = await page.locator('#menu-sound').getAttribute('aria-pressed'); await page.locator('#menu-sound').click();
        assert.notEqual(await page.locator('#menu-sound').getAttribute('aria-pressed'), before, 'Sound action remains wired');
        await scrollMenuTo(page, '#menu-restart'); await reachable(page, '#menu-restart', width, height);
        await scrollMenuTo(page, '#menu-finish'); await reachable(page, '#menu-finish', width, height);
      }
      await page.screenshot({ path: path.join(output, `${app}-${width}-menu.png`) });
      if (duel) {
        await page.locator('#leave-duel').click(); assert(await page.locator('#duel-entry').isVisible());
        assert.equal(await page.locator('#duel-settings').evaluate(node => node.open), false, 'Leaving closes modal');
        assert(await page.evaluate(() => window.hudQA.sends.some(v => v.type === 'leave')));
      } else {
        await page.locator('#menu-finish').click(); await page.clock.runFor(app === 'practice' ? 1300 : 650);
        assert(await page.locator('#result').isVisible());
        await page.locator('#again').click(); assert(await page.locator('#launch').isVisible());
      }
      await fixture.context.close();
    }
    checks.push('Normal/practice/5-player duel at 320/390/844/932: compact HUD, no brand, only camera/menu header buttons, 44px unobscured controls.');
    checks.push('Left/right touch steering; hidden flight details remain readable in menus; solo sound/restart and MP leave work.');
    if (baseline) checks.push('Measured top overlay union is at least 25% smaller than the referenced previous version in every case.');
    assert.deepEqual(errors, []);
    const report = { passed: true, baseline, checks, measurements, errors };
    await fs.writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2)); console.log(JSON.stringify(report, null, 2));
  } catch (error) {
    if (current && !current.isClosed()) await current.screenshot({ path: path.join(output, 'failure.png') }).catch(() => {});
    await fs.writeFile(path.join(output, 'report.json'), JSON.stringify({ passed: false, checks, measurements, errors, failure: error.message }, null, 2)); throw error;
  } finally { for (const context of contexts) await context.close().catch(() => {}); await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
