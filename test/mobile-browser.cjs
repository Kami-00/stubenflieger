// Local browser QA. Actual UI/rendering/input modules, isolated HTTP/socket and
// Fullscreen/visualViewport fixtures. This does not certify real iPhone Safari.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const esbuild = require('esbuild');
const { chromium } = require('playwright');

(async () => {
  const root = path.resolve(__dirname, '..'), origin = 'http://127.0.0.1:8796';
  const output = path.resolve(process.env.MOBILE_QA_OUTPUT || 'D:/test/tmp/stubenflieger-mobile-browser');
  const profileKey = 'stubenflieger.house-profile.v1', mobileKey = 'stubenflieger.mobile.v1';
  const profile = { version: 2, points: 1111, highscore: 333, owned: ['plane:classic', 'effect:none'],
    equipped: { form: 'classic', size: 1, effect: 'none', color: null, boosts: [] }, useDoorUnlocks: true, creditedRuns: [], discoveredStarIds: [] };
  const { createDuelSimulation } = await import('../src/duel-simulation.js');
  const snapshot = createDuelSimulation().snapshot();
  const packet = { type: 'state', phase: 'lobby', hostId: 'p1', countdown: 3, remaining: 180, snapshot: null,
    players: ['p1', 'p2'].map((id, i) => ({ id, name: i ? 'Gartenpilot' : 'Touchpilot', connected: true, ready: true, appearance: { color: null, effect: 'none' } })) };
  const inspectSolo = `
window.mobileQA.game=()=>({state,paused,rotation,touch:{...touch},input:{...input},viewport:viewport(),dialog:dialogs.current()});
window.mobileQA.place=()=>{physics.plane.position.set(17,8,13);physics.plane.previousPosition.copy(physics.plane.position);physics.plane.interpolatedPosition.copy(physics.plane.position);practiceRebound?.reset();view.plane.position.copy(physics.plane.position);};`;
  const bundles = {};
  for (const entry of ['game', 'duel-client']) {
    const built = await esbuild.build({ absWorkingDir: root, entryPoints: [`src/${entry}.js`], bundle: true, write: false, format: 'esm',
      plugins: [{ name: 'mobile-test-inspection', setup(build) {
        build.onLoad({ filter: /[\\/]game\.js$/ }, async args => {
          if (path.resolve(args.path) !== path.join(root, 'src/game.js')) return;
          return { contents: await fs.readFile(args.path, 'utf8') + inspectSolo, loader: 'js', resolveDir: path.dirname(args.path) };
        });
      } }] });
    bundles[entry === 'game' ? '/game.js' : '/duel.js'] = built.outputFiles[0].text;
  }
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--enable-unsafe-swiftshader'] });
  const checks = [], errors = [], contexts = [];
  let current;
  await fs.mkdir(output, { recursive: true });
  try {
    async function make({ mode = 'practice', fullscreen = 'unsupported', width = 390, height = 844 } = {}) {
      const context = await browser.newContext({ viewport: { width, height }, hasTouch: true, isMobile: true, deviceScaleFactor: 1, reducedMotion: 'reduce', serviceWorkers: 'block' });
      contexts.push(context);
      await context.route('**/*', async route => {
        const request = route.request(), url = new URL(request.url());
        assert.equal(url.origin, origin, 'No external HTTP traffic');
        if (bundles[url.pathname]) return route.fulfill({ contentType: 'text/javascript', body: bundles[url.pathname] });
        if (url.pathname.startsWith('/api/')) {
          let data = { entries: [] };
          if (url.pathname === '/api/house-runs') data = { run: 'isolated-mobile-test-ticket' };
          else if (/^\/api\/duels(?:\/[^/]+\/join)?$/.test(url.pathname)) data = { room: '00000000-0000-4000-8000-000000000001', token: 'local-test-only', slot: 'p1', appearance: { color: null, effect: 'none' } };
          else if (request.method() !== 'GET') throw new Error('Unexpected score/write API call');
          return route.fulfill({ contentType: 'application/json', body: JSON.stringify(data) });
        }
        const file = url.pathname === '/' ? 'index.html' : url.pathname === '/duel' ? 'duel.html' : url.pathname.slice(1);
        assert(!file.includes('..'));
        try { return route.fulfill({ body: await fs.readFile(path.join(root, 'dist', file)), contentType: file.endsWith('.css') ? 'text/css' : file.endsWith('.html') ? 'text/html' : file.endsWith('.png') ? 'image/png' : file.endsWith('.webmanifest') ? 'application/manifest+json' : 'application/octet-stream' }); }
        catch { return route.fulfill({ status: 404, body: '' }); }
      });
      await context.addInitScript(({ profileKey, profile, mode, fullscreen, packet, snapshot }) => {
        if (!sessionStorage.getItem('mobile-qa-seeded')) {
          localStorage.setItem(profileKey, JSON.stringify(profile)); localStorage.setItem('stubenflieger.practice.v1', JSON.stringify({ mode, speed: .5 }));
          sessionStorage.setItem('mobile-qa-seeded', 'yes');
        }
        const qa = window.mobileQA = { requests: 0, exits: 0, locks: 0, sends: [], pointers: [], packet: structuredClone(packet), sockets: [], viewportOverride: null };
        document.addEventListener('pointerdown', event => qa.pointers.push({ id: event.pointerId, target: event.target.id, type: event.pointerType }), true);
        const nativeViewport = window.visualViewport, viewport = new EventTarget();
        qa.nativeViewport = () => ({ width: nativeViewport.width, height: nativeViewport.height, scale: nativeViewport.scale, innerWidth, innerHeight });
        for (const key of ['width', 'height', 'offsetTop', 'offsetLeft', 'scale']) Object.defineProperty(viewport, key, { get: () => qa.viewportOverride?.[key] ?? nativeViewport[key] });
        nativeViewport.addEventListener('resize', () => viewport.dispatchEvent(new Event('resize')));
        nativeViewport.addEventListener('scroll', () => viewport.dispatchEvent(new Event('scroll')));
        Object.defineProperty(window, 'visualViewport', { configurable: true, value: viewport });
        qa.resizeViewport = override => { qa.viewportOverride = override; viewport.dispatchEvent(new Event('resize')); viewport.dispatchEvent(new Event('scroll')); };
        if (fullscreen === 'native') {
          localStorage.setItem('stubenflieger.mobile.v1', JSON.stringify({ joystickSide: 'left', autoFullscreen: false }));
          const nativeRequest = Element.prototype.requestFullscreen;
          if (nativeRequest) Element.prototype.requestFullscreen = function (...args) { qa.requests++; return nativeRequest.apply(this, args); };
        } else {
        let fullscreenElement = null;
        Object.defineProperty(document, 'fullscreenElement', { configurable: true, get: () => fullscreenElement });
        Object.defineProperty(document, 'fullscreenEnabled', { configurable: true, get: () => fullscreen !== 'unsupported' });
        Object.defineProperty(navigator, 'standalone', { configurable: true, get: () => fullscreen === 'standalone' });
        const request = async function () {
          qa.requests++;
          if (fullscreen === 'rejected') throw new DOMException('Local simulated denial', 'NotAllowedError');
          fullscreenElement = this; document.dispatchEvent(new Event('fullscreenchange'));
        };
        Object.defineProperty(Element.prototype, 'requestFullscreen', { configurable: true, value: fullscreen === 'unsupported' ? undefined : request });
        Object.defineProperty(Element.prototype, 'webkitRequestFullscreen', { configurable: true, value: undefined });
        document.exitFullscreen = async () => { qa.exits++; fullscreenElement = null; document.dispatchEvent(new Event('fullscreenchange')); };
        Object.defineProperty(screen.orientation, 'lock', { configurable: true, value: async () => { qa.locks++; } });
        }
        class Socket extends EventTarget {
          static CONNECTING = 0; static OPEN = 1; static CLOSING = 2; static CLOSED = 3;
          constructor(url) {
            super(); this.url = String(url); this.readyState = 0; qa.sockets.push(this);
            queueMicrotask(() => { this.readyState = 1; this.emit('open', new Event('open')); this.deliver({ type: 'welcome', slot: 'p1' }); this.deliver(qa.packet); });
          }
          emit(type, event) { this.dispatchEvent(event); this[`on${type}`]?.call(this, event); }
          deliver(data) { this.emit('message', new MessageEvent('message', { data: JSON.stringify(data) })); }
          send(raw) { const data = JSON.parse(raw); qa.sends.push(data); if (data.type === 'ping') queueMicrotask(() => this.deliver({ type: 'pong', sentAt: data.sentAt })); }
          close(code = 1000, reason = '') { this.readyState = 3; this.emit('close', new CloseEvent('close', { code, reason, wasClean: true })); }
        }
        window.WebSocket = Socket;
        qa.play = () => { qa.packet = { ...structuredClone(packet), phase: 'playing', snapshot: structuredClone(snapshot) }; qa.sockets.at(-1).deliver(qa.packet); };
        setInterval(() => { const socket = qa.sockets.at(-1); if (socket?.readyState === 1) socket.deliver(qa.packet); }, 100);
      }, { profileKey, profile, mode, fullscreen, packet, snapshot });
      const page = await context.newPage(); current = page; page.setDefaultTimeout(15000);
      page.on('pageerror', error => errors.push(error.message));
      page.on('websocket', () => errors.push('Unexpected real WebSocket'));
      const time = new Date('2026-10-08T12:00:00Z'); await page.clock.install({ time }); await page.clock.pauseAt(new Date(time.getTime() + 1000));
      return { page, context, cdp: await context.newCDPSession(page) };
    }
    async function soloReady(page) {
      await page.goto(origin); await page.locator('#loading').waitFor({ state: 'hidden' });
      assert.equal(await page.locator('#error').isVisible(), false); await page.clock.runFor(16);
    }
    async function soloFly(page) { await page.locator('#launch').focus(); await page.keyboard.press('Enter'); await page.evaluate(() => window.mobileQA.place()); }
    async function soloMenu(page) {
      if (await page.locator('#menu').isVisible()) return;
      if (await page.locator('#paused').isVisible()) await page.locator('#pause-menu').click();
      else await page.locator('#menu-button').click();
    }
    async function closeSoloMenu(page) {
      await page.locator('#close-menu').click();
      if (await page.locator('#paused').isVisible()) await page.locator('#resume').click();
    }
    async function side(page, app, value) {
      if (app === 'solo') { await soloMenu(page); await page.locator('#joystick-side').selectOption(value); await closeSoloMenu(page); }
      else { await page.locator('#duel-settings-button').click(); await page.locator('#duel-joystick-side').selectOption(value); await page.locator('#duel-close-settings').click(); }
      assert.equal(await page.locator('html').getAttribute('data-joystick-side'), value);
    }
    const touchPoint = (id, x, y) => ({ id, x, y, radiusX: 6, radiusY: 6, force: 1 });
    const sendTouch = (cdp, type, touchPoints = []) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints });
    async function drag(fixture, app, { rotation = 0, fire = false, cancel = false } = {}) {
      const { page, cdp } = fixture, selector = app === 'solo' ? '#joystick' : '#duel-stick';
      const rect = await page.locator(selector).boundingBox(); assert(rect && rect.width >= 60 && rect.height >= 60);
      const x = rect.x + rect.width / 2, y = rect.y + rect.height / 2, angle = rotation * Math.PI / 180;
      const dx = Math.cos(angle) * 24 + Math.sin(angle) * 18, dy = Math.sin(angle) * 24 - Math.cos(angle) * 18;
      await sendTouch(cdp, 'touchStart', [touchPoint(1, x, y)]);
      const moved = touchPoint(1, x + dx, y + dy);
      await sendTouch(cdp, 'touchMove', [moved]);
      if (fire) {
        const f = await page.locator('#fire-button').boundingBox();
        await sendTouch(cdp, 'touchStart', [moved, touchPoint(2, f.x + f.width / 2, f.y + f.height / 2)]);
      }
      await page.clock.runFor(64);
      const value = app === 'solo' ? await page.evaluate(() => window.mobileQA.game().touch)
        : await page.evaluate(() => window.mobileQA.sends.filter(v => v.type === 'input').at(-1));
      assert(value && value.steer > .2 && value.pitch > .2, `${app} ${rotation}° touch direction: ${JSON.stringify(value)}`);
      if (fire) assert.equal(value.fire, true);
      await sendTouch(cdp, cancel ? 'touchCancel' : 'touchEnd'); await page.clock.runFor(160);
      const released = app === 'solo' ? await page.evaluate(() => window.mobileQA.game().touch)
        : await page.evaluate(() => window.mobileQA.sends.filter(v => v.type === 'input').at(-1));
      assert.equal(released.steer, 0); assert.equal(released.pitch, 0); if (app === 'duel') assert.equal(released.fire, false);
    }
    async function layout(page, app, name) {
      const width = page.viewportSize().width, height = page.viewportSize().height;
      const visible = await page.evaluate(() => window.mobileQA.nativeViewport());
      assert(Math.abs(visible.scale - 1) < .01 && Math.abs(visible.innerWidth - width) <= 1, `${name}: mobile autoscale/width mismatch ${JSON.stringify(visible)}`);
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${name}: document overflow`);
      const selectors = app === 'solo' ? ['#joystick', '#menu-button', '#pause', '#camera-mode'] : ['#duel-stick', '#fire-button', '#duel-settings-button', '#duel-camera-mode'];
      for (const selector of selectors) {
        const rect = await page.locator(selector).boundingBox();
        assert(rect && rect.x >= -1 && rect.y >= -1 && rect.x + rect.width <= width + 1 && rect.y + rect.height <= height + 1, `${name}: ${selector} clipped ${JSON.stringify(rect)}`);
      }
      if (app === 'duel') {
        const stick = await page.locator('#duel-stick').boundingBox(), fire = await page.locator('#fire-button').boundingBox();
        assert((stick.x + stick.width / 2 < width / 2) !== (fire.x + fire.width / 2 < width / 2), `${name}: fire must be opposite joystick`);
      }
      await page.screenshot({ path: path.join(output, name + '.png') });
    }
    const matrix = [[320, 568], [390, 844], [844, 390], [932, 430]];
    let practice;
    for (const mode of ['normal', 'practice']) {
      const fixture = await make({ mode }), { page } = fixture; await soloReady(page); await soloFly(page);
      for (const [width, height] of matrix) {
        await page.setViewportSize({ width, height }); await page.evaluate(() => dispatchEvent(new Event('resize'))); await page.clock.runFor(16);
        for (const value of ['left', 'right']) {
          await side(page, 'solo', value); await layout(page, 'solo', `${mode}-${width}-${value}`);
          const rect = await page.locator('#joystick').boundingBox(); assert.equal(rect.x + rect.width / 2 < width / 2, value === 'left');
          await drag(fixture, 'solo', { cancel: value === 'right' });
        }
      }
      await page.setViewportSize({ width: 390, height: 844 }); await page.evaluate(() => dispatchEvent(new Event('resize'))); await page.clock.runFor(32);
      await soloMenu(page); await page.locator('#rotate-view').click(); await closeSoloMenu(page); await page.clock.runFor(16);
      assert.equal(await page.evaluate(() => window.mobileQA.game().rotation), 90);
      await drag(fixture, 'solo', { rotation: 90 }); await layout(page, 'solo', `${mode}-manual-90`);
      const stick = await page.locator('#joystick').boundingBox(), center = { x: stick.x + stick.width / 2, y: stick.y + stick.height / 2 };
      await sendTouch(fixture.cdp, 'touchStart', [touchPoint(1, center.x + 15, center.y + 20)]);
      await sendTouch(fixture.cdp, 'touchStart', [touchPoint(1, center.x + 15, center.y + 20), touchPoint(2, center.x - 12, center.y - 12)]);
      const beforeSecondRelease = await page.evaluate(() => window.mobileQA.game().touch);
      // Deliver the second real finger's cancellation separately while the first
      // retains native capture. CDP touchCancel itself releases every finger.
      await page.evaluate(() => { const id = window.mobileQA.pointers.filter(p => p.type === 'touch').at(-1).id;
        document.querySelector('#joystick').dispatchEvent(new PointerEvent('pointercancel', { pointerId: id, pointerType: 'touch', bubbles: true })); });
      assert.deepEqual(await page.evaluate(() => window.mobileQA.game().touch), beforeSecondRelease, 'Cancelling the second finger must preserve the controlling finger');
      await sendTouch(fixture.cdp, 'touchEnd');
      assert.deepEqual(await page.evaluate(key => JSON.parse(localStorage.getItem(key)), profileKey), profile);
      if (mode === 'practice') practice = fixture; else await fixture.context.close();
    }
    checks.push('Normal and practice: 320/390 portrait, 844/932 landscape, left/right joystick, real touch move/end/cancel, and +90° direction mapping; mobile settings do not change solo profile.');

    const { page, cdp } = practice; current = page;
    await soloMenu(page);
    for (let i = 0; i < 3; i++) await page.locator('#rotate-view').click();
    await page.locator('#joystick-side').selectOption('right'); await page.locator('#auto-fullscreen').uncheck(); await closeSoloMenu(page);
    await page.reload(); await page.locator('#loading').waitFor({ state: 'hidden' }); await page.clock.runFor(16);
    assert.equal(await page.locator('html').getAttribute('data-joystick-side'), 'right');
    assert.equal(await page.locator('#auto-fullscreen').isChecked(), false);
    assert.deepEqual(await page.evaluate(key => JSON.parse(localStorage.getItem(key)), mobileKey), { joystickSide: 'right', autoFullscreen: false });
    await page.goto(origin + '/duel'); await page.locator('#duel-name').fill('Touchpilot'); await page.locator('#create-duel').click();
    await page.waitForFunction(() => window.mobileQA.sockets.length && window.mobileQA.sockets.at(-1).readyState === 1);
    await page.evaluate(() => window.mobileQA.play());
    for (const [width, height] of matrix) {
      await page.setViewportSize({ width, height }); await page.evaluate(() => dispatchEvent(new Event('resize'))); await page.clock.runFor(16);
      for (const value of ['left', 'right']) {
        await side(page, 'duel', value); await layout(page, 'duel', `duel-${width}-${value}`);
        await drag(practice, 'duel', { fire: true, cancel: value === 'right' });
      }
    }
    // Opening settings while a real finger holds fire must immediately neutralize it.
    const fire = await page.locator('#fire-button').boundingBox();
    await sendTouch(cdp, 'touchStart', [touchPoint(1, fire.x + fire.width / 2, fire.y + fire.height / 2)]); await page.clock.runFor(64);
    await page.locator('#duel-settings-button').click(); await page.clock.runFor(64);
    // Native showModal focuses the close button; Space there intentionally
    // activates that button. Focus the dialog to test the gameplay key gate.
    await page.locator('#duel-settings').evaluate(node => node.focus());
    assert.equal(await page.evaluate(() => document.activeElement.id), 'duel-settings');
    await page.keyboard.down('d'); await page.keyboard.down('Space'); await page.clock.runFor(64);
    const blocked = await page.evaluate(() => window.mobileQA.sends.filter(v => v.type === 'input').at(-1));
    assert.equal(blocked.steer, 0); assert.equal(blocked.pitch, 0); assert.equal(blocked.fire, false);
    await page.keyboard.up('d'); await page.keyboard.up('Space'); await sendTouch(cdp, 'touchCancel');
    await page.locator('#duel-joystick-side').selectOption('left'); await page.locator('#duel-close-settings').click(); await page.clock.runFor(160);
    assert.equal(await page.evaluate(() => window.mobileQA.sends.filter(v => v.type === 'input').at(-1).fire), false);
    await page.goto(origin); await page.locator('#loading').waitFor({ state: 'hidden' });
    assert.equal(await page.locator('html').getAttribute('data-joystick-side'), 'left');
    assert.deepEqual(await page.evaluate(key => JSON.parse(localStorage.getItem(key)), profileKey), profile);
    checks.push('Preferences persist through reload and Solo↔MP; two-finger steer/fire works on opposite sides; settings suppress held touch/keyboard and leave no stuck firing.');

    // Resize a visible viewport as if a mobile keyboard covered the lower screen.
    await page.setViewportSize({ width: 390, height: 844 }); await page.evaluate(() => dispatchEvent(new Event('resize'))); await page.clock.runFor(32);
    await soloMenu(page);
    await page.evaluate(() => window.mobileQA.resizeViewport({ width: 390, height: 360, offsetTop: 35, offsetLeft: 0, scale: 1 })); await page.clock.runFor(32);
    const keyboardViewport = await page.evaluate(() => window.mobileQA.game().viewport);
    assert.equal(keyboardViewport.width, 390); assert.equal(keyboardViewport.height, 360);
    await page.locator('#joystick-side').scrollIntoViewIfNeeded();
    const field = await page.locator('#joystick-side').boundingBox(); assert(field && field.y >= 34 && field.y + field.height <= 396, JSON.stringify(field));
    await page.evaluate(() => window.mobileQA.resizeViewport({ width: 195, height: 422, offsetTop: 0, offsetLeft: 0, scale: 2 }));
    const pinchViewport = await page.evaluate(() => window.mobileQA.game().viewport); assert.equal(pinchViewport.width, 390); assert.equal(pinchViewport.height, 844);
    await page.evaluate(() => window.mobileQA.resizeViewport(null));
    checks.push('Simulated keyboard visualViewport updates visible height/offset while settings remain reachable; pinch zoom does not shrink the logical game viewport.');

    for (const mode of ['supported', 'rejected', 'unsupported', 'standalone']) {
      const fixture = await make({ fullscreen: mode, width: 844, height: 390 }), p = fixture.page; current = p;
      await p.goto(origin + '/duel');
      await p.locator('#duel-name').tap(); await p.keyboard.type('Vollbildpilot');
      assert.equal(await p.evaluate(() => window.mobileQA.requests), 0, `${mode}: typing must not auto-request fullscreen`);
      await p.locator('#duel-settings-button').click(); await p.clock.runFor(32);
      if (mode === 'supported') {
        assert.equal(await p.evaluate(() => Boolean(document.fullscreenElement)), true);
        assert.equal(await p.evaluate(() => window.mobileQA.requests), 1);
        await p.evaluate(() => document.exitFullscreen()); await p.locator('#duel-close-settings').click(); await p.locator('#duel-settings-button').click();
        assert.equal(await p.evaluate(() => window.mobileQA.requests), 1, 'User exit must suppress automatic reentry');
        await p.locator('#duel-fullscreen-button').click(); assert.equal(await p.evaluate(() => Boolean(document.fullscreenElement)), true);
        assert.equal(await p.evaluate(() => window.mobileQA.requests), 2);
      } else if (mode === 'rejected') {
        assert.equal(await p.evaluate(() => window.mobileQA.requests), 1);
        await p.locator('#duel-close-settings').click(); await p.locator('#duel-settings-button').click();
        assert.equal(await p.evaluate(() => window.mobileQA.requests), 1, 'Rejected auto request must not loop');
        assert((await p.locator('#duel-fullscreen-status').textContent()).trim());
      } else {
        assert.equal(await p.evaluate(() => window.mobileQA.requests), 0);
        assert((await p.locator('#duel-fullscreen-status').textContent()).trim());
      }
      await p.screenshot({ path: path.join(output, `fullscreen-${mode}.png`) });
      await fixture.context.close();
    }
    checks.push('Simulated Fullscreen API success, denial, unsupported browser and standalone Home Screen; editable fields do not trigger auto fullscreen and rejected/exited requests do not loop.');

    const native = await make({ fullscreen: 'native', width: 844, height: 390 }); current = native.page;
    await native.page.goto(origin + '/duel'); await native.page.locator('#duel-settings-button').click();
    assert.equal(await native.page.locator('#duel-settings').evaluate(node => node.open), true);
    await native.page.locator('#duel-fullscreen-button').click();
    await native.page.waitForFunction(() => Boolean(document.fullscreenElement), null, { timeout: 5000 });
    await native.page.clock.runFor(64);
    assert.equal(await native.page.locator('#duel-settings').evaluate(node => node.open), true);
    await native.page.locator('#duel-joystick-side').selectOption('right');
    await native.page.screenshot({ path: path.join(output, 'native-fullscreen-dialog.png') });
    await native.page.locator('#duel-fullscreen-button').click();
    await native.page.waitForFunction(() => !document.fullscreenElement);
    await native.page.locator('#duel-close-settings').click();
    assert.equal(await native.page.locator('#duel-settings').evaluate(node => node.open), false);
    checks.push('Native Edge Fullscreen API keeps the modal settings dialog visible and operable; controls and fullscreen exit work within its top layer.');
    await native.context.close();

    for (const htmlFile of ['index.html', 'duel.html']) {
      const html = await fs.readFile(path.join(root, 'dist', htmlFile), 'utf8');
      const manifestHref = html.match(/<link\b[^>]*rel=["']manifest["'][^>]*href=["']([^"']+)/i)?.[1];
      const touchIcon = html.match(/<link\b[^>]*rel=["']apple-touch-icon["'][^>]*href=["']([^"']+)/i)?.[1];
      assert(manifestHref && touchIcon, `${htmlFile}: manifest and Apple touch icon required`);
      const manifest = JSON.parse(await fs.readFile(path.join(root, 'dist', manifestHref.split('?')[0].replace(/^\//, '')), 'utf8'));
      assert.equal(manifest.display, 'standalone'); assert(manifest.name && manifest.start_url);
      for (const size of [192, 512]) {
        const icon = manifest.icons.find(icon => icon.sizes === `${size}x${size}`); assert(icon);
        const bytes = await fs.readFile(path.join(root, 'dist', icon.src.replace(/^\//, '')));
        assert.equal(bytes.toString('ascii', 1, 4), 'PNG'); assert.equal(bytes.readUInt32BE(16), size); assert.equal(bytes.readUInt32BE(20), size);
      }
      const apple = await fs.readFile(path.join(root, 'dist', touchIcon.split('?')[0].replace(/^\//, '')));
      assert.equal(apple.readUInt32BE(16), 180); assert.equal(apple.readUInt32BE(20), 180);
    }
    checks.push('Both entry pages link valid standalone manifest and real 192/512 PNG plus 180px Apple Home Screen icon assets.');
    assert.deepEqual(errors, []);
    const report = { passed: true, checks, errors, limitation: 'Chromium touch simulation and mocked Fullscreen/visualViewport; no physical iPhone Safari certification.' };
    await fs.writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2)); console.log(JSON.stringify(report, null, 2));
  } catch (error) {
    if (current && !current.isClosed()) await current.screenshot({ path: path.join(output, 'failure.png'), fullPage: true }).catch(() => {});
    const viewport = current && !current.isClosed() ? await current.evaluate(() => ({ native: window.mobileQA?.nativeViewport(),
      root: (document.querySelector('#duel-app') || document.querySelector('#app'))?.getBoundingClientRect().toJSON() })).catch(() => null) : null;
    await fs.writeFile(path.join(output, 'report.json'), JSON.stringify({ passed: false, checks, errors, viewport, failure: error.message }, null, 2)); throw error;
  } finally { for (const context of contexts) await context.close().catch(() => {}); await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
