// Local-only browser QA. Playwright may be supplied through NODE_PATH.
// Reward/persistence checks use the shipped bundle and real keyboard flight.
// A separate in-memory bundle exposes read-only collection/visibility for storage failure.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const { chromium } = require('playwright');
const esbuild = require('esbuild');

(async () => {
  const { HOUSE } = await import('../src/house.js');
  const { PROFILE_KEY, calculateRunScore } = await import('../src/progression.js');
  const origin = (process.env.STAR_QA_ORIGIN || 'http://127.0.0.1:8796').replace(/\/$/, '');
  assert(['localhost', '127.0.0.1'].includes(new URL(origin).hostname), 'Only a local server may be tested.');
  const output = path.resolve(process.env.STAR_QA_OUTPUT || 'D:/test/tmp/stubenflieger-star-browser');
  const pendingKey = 'stubenflieger.pending-run.v1';
  const firstId = 'living-star-1';
  const errors = [], external = [], checks = [];
  await fs.mkdir(output, { recursive: true });
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--enable-unsafe-swiftshader'] });
  let page;
  try {
    async function createPage({ bundle } = {}) {
      const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, serviceWorkers: 'block', reducedMotion: 'reduce' });
      await context.route('**/*', route => {
        const url = new URL(route.request().url());
        if (url.origin !== origin && !['data:', 'blob:'].includes(url.protocol)) { external.push(url.href); return route.abort(); }
        if (bundle && url.origin === origin && url.pathname === '/game.js') return route.fulfill({ contentType: 'text/javascript', body: bundle });
        return route.continue();
      });
      const target = await context.newPage();
      target.on('pageerror', error => errors.push(error.message));
      const date = new Date('2026-10-08T12:00:00Z');
      await target.clock.install({ time: date });
      await target.clock.pauseAt(new Date(date.getTime() + 1000));
      await target.goto(origin);
      await ready(target);
      return target;
    }
    async function ready(target) {
      await target.locator('#loading').waitFor({ state: 'hidden', timeout: 60000 });
      assert.equal(await target.locator('#error').isVisible(), false);
      await target.locator('#launch-panel').waitFor({ state: 'visible' });
      await target.clock.runFor(32);
    }
    const profile = target => target.evaluate(key => JSON.parse(localStorage.getItem(key) || 'null'), PROFILE_KEY);
    const pending = target => target.evaluate(key => JSON.parse(sessionStorage.getItem(key) || 'null'), pendingKey);
    async function firstPickup(target, expectFailure = false) {
      await target.locator('#launch').focus(); await target.keyboard.press('Enter');
      await target.keyboard.down('a'); await target.keyboard.down('w');
      // The first segment of intro-flight.test.mjs: 75% power, left and climb.
      // The normal first star is reached before the steering change at .45 s.
      let found = false;
      for (let elapsed = 0; elapsed < 416; elapsed += 16) {
        await target.clock.runFor(16);
        found = await target.locator('#star-reward').evaluate((node, failed) => !node.hidden && (failed ? node.textContent.includes('noch nicht gespeichert') : node.textContent.includes('Punkte')), expectFailure);
        if (found) break;
      }
      await target.keyboard.up('a'); await target.keyboard.up('w');
      assert(found, expectFailure ? 'Storage failure feedback should appear on physical contact with the first star.' : 'The real keyboard flight should collect the first normal star.');
      return pending(target);
    }
    const assertCounter = async (target, count) => {
      const labels = await target.locator('[data-discoveries]').allTextContents();
      assert(labels.length >= 2);
      assert(labels.every(text => text === `Entdeckt: ${count} / ${HOUSE.collectibles.length} Sterne`), JSON.stringify(labels));
    };
    const assertPickupHUD = async (target, savedRun, first) => {
      assert.equal(await target.locator('#stars').innerText(), '1', 'The star count updates in the pickup frame.');
      assert.equal(await target.locator('#run-points').innerText(),
        (calculateRunScore(savedRun.summary) + (first ? 150 : 0)).toLocaleString('de-DE'),
        'Run points agree with the pickup reward immediately, without waiting for a later HUD tick.');
    };

    page = await createPage();
    await assertCounter(page, 0);
    await page.locator('.launch-details > summary').click();
    assert.match(await page.locator('.star-key').innerText(), /Gold: Erstfund.*Silberblau: schon entdeckt/s);
    await page.locator('.launch-details > summary').click();
    const firstPending = await firstPickup(page);
    assert.deepEqual(firstPending.summary.starIds, [firstId]);
    let saved = await profile(page);
    assert.equal(saved.points, 150, 'Only the 150-point first-discovery bonus is paid immediately.');
    assert.equal(saved.highscore, 0); assert.deepEqual(saved.discoveredStarIds, [firstId]);
    assert.equal(await page.locator('#star-reward').innerText(), 'Erstfund! +300 Punkte');
    assert.equal(await page.locator('#star-reward').getAttribute('data-first'), 'true');
    await assertPickupHUD(page, firstPending, true);
    const firstColor = await page.locator('#star-reward').evaluate(node => getComputedStyle(node).color);
    await assertCounter(page, 1);
    await page.screenshot({ path: path.join(output, 'first-discovery.png') });
    checks.push('Shipped game, real keyboard pickup: first normal star shows 300, saves bonus150 and discovery immediately.');

    const recoveredBase = calculateRunScore(firstPending.summary);
    await page.reload(); await ready(page);
    saved = await profile(page);
    assert.equal(saved.points, 150 + recoveredBase); assert.equal(saved.highscore, recoveredBase);
    assert(saved.creditedRuns.includes(firstPending.id)); assert.equal(await pending(page), null);
    await assertCounter(page, 1);
    await page.evaluate(({ key, value }) => sessionStorage.setItem(key, JSON.stringify(value)), { key: pendingKey, value: firstPending });
    await page.reload(); await ready(page);
    assert.equal((await profile(page)).points, 150 + recoveredBase);
    assert.equal(await pending(page), null);
    checks.push('Reload recovers weighted base once; replaying the same saved pending run cannot credit it again.');

    const beforeRepeat = (await profile(page)).points;
    const repeatedPending = await firstPickup(page);
    assert.deepEqual(repeatedPending.summary.starIds, [firstId]);
    assert.equal((await profile(page)).points, beforeRepeat);
    assert.equal(await page.locator('#star-reward').innerText(), '+150 Punkte');
    assert.equal(await page.locator('#star-reward').getAttribute('data-first'), 'false');
    await assertPickupHUD(page, repeatedPending, false);
    assert.notEqual(await page.locator('#star-reward').evaluate(node => getComputedStyle(node).color), firstColor);
    await assertCounter(page, 1);
    await page.screenshot({ path: path.join(output, 'repeat-discovery.png') });
    await page.keyboard.press('p'); await page.locator('#pause-finish').focus(); await page.keyboard.press('Enter');
    await page.clock.runFor(650);
    await page.locator('#result').waitFor({ state: 'visible' });
    assert.equal((await profile(page)).points, beforeRepeat + calculateRunScore(repeatedPending.summary));
    assert.match(await page.locator('#result-reward').innerText(), /davon 0 Erstfundbonus/);
    checks.push('Following run shows150 with repeat styling and no immediate bonus; finishing pays its base only.');
    await page.context().close();

    const sceneFile = path.resolve(__dirname, '../src/scene.js');
    const built = await esbuild.build({ absWorkingDir: path.resolve(__dirname, '..'), entryPoints: ['src/game.js'], bundle: true, write: false, format: 'esm',
      plugins: [{ name: 'read-only-star-visuals', setup(build) {
        build.onLoad({ filter: /[\\/]scene\.js$/ }, async args => {
          if (path.resolve(args.path) !== sceneFile) return;
          const source = await fs.readFile(args.path, 'utf8');
          const marker = '  function collectStars(predicate)';
          assert(source.includes(marker));
          const inspector = `  Object.defineProperty(window, '__starVisualQA', {value: id => {
            const item = starMeshes.find(candidate => candidate.data.id === id);
            return item ? { visible: item.mesh.visible, collected: item.collected, discovered: item.discovered } : null;
          }});\n`;
          return { contents: source.replace(marker, inspector + marker), loader: 'js', resolveDir: path.dirname(args.path) };
        });
      } }] });
    const bundle = built.outputFiles[0].text;
    page = await createPage({ bundle });
    await page.evaluate(key => {
      window.__restoreStarStorage = Storage.prototype.setItem;
      Storage.prototype.setItem = function (name, value) {
        if (name === key) throw new DOMException('Local test quota failure', 'QuotaExceededError');
        return window.__restoreStarStorage.call(this, name, value);
      };
    }, PROFILE_KEY);
    const failedPending = await firstPickup(page, true);
    assert.deepEqual(failedPending.summary.starIds, []); assert.equal(await profile(page), null);
    const failedVisual = await page.evaluate(id => window.__starVisualQA(id), firstId);
    assert.equal(failedVisual.collected, false); assert.equal(failedVisual.visible, true); assert.equal(failedVisual.discovered, false);
    assert.match(await page.locator('#storage-status').textContent(), /Speichern.*nicht möglich/);
    await assertCounter(page, 0);
    await page.screenshot({ path: path.join(output, 'storage-failure.png') });
    await page.evaluate(() => { Storage.prototype.setItem = window.__restoreStarStorage; delete window.__restoreStarStorage; });
    // Retry with a new real flight; no teleportation or direct reward call.
    await page.keyboard.press('r');
    await ready(page);
    await firstPickup(page);
    assert.deepEqual((await profile(page)).discoveredStarIds, [firstId]);
    assert.equal(await page.locator('#star-reward').innerText(), 'Erstfund! +300 Punkte');
    checks.push('Quota failure keeps the contacted star visible and uncollected; after recovery, a real flight can discover it.');
    await page.context().close();

    page = await createPage();
    const mobilePending = await firstPickup(page);
    await assertPickupHUD(page, mobilePending, true);
    for (const [width, height] of [[390, 844], [320, 568]]) {
      await page.setViewportSize({ width, height });
      // Deliver layout synchronously while the animation clock is deliberately paused.
      await page.evaluate(() => window.dispatchEvent(new Event('resize')));
      await page.clock.runFor(16);
      await assertCounter(page, 1);
      const layout = await page.evaluate(() => {
        const ids = ['#stats', '#star-reward'];
        return { width: innerWidth, overflow: document.documentElement.scrollWidth > innerWidth,
          elements: ids.map(selector => {
            const node = document.querySelector(selector), rect = node.getBoundingClientRect();
            return { selector, left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom,
              fontSize: parseFloat(getComputedStyle(node).fontSize), clipped: node.scrollWidth > node.clientWidth + 1 };
          }) };
      });
      assert.equal(layout.overflow, false, `${width}px horizontal overflow`);
      for (const element of layout.elements) {
        assert(element.left >= 0 && element.right <= width && element.top >= 0 && element.bottom <= height, JSON.stringify(element));
        assert.equal(element.clipped, false, JSON.stringify(element));
        assert(element.fontSize >= 12, JSON.stringify(element));
      }
      await page.screenshot({ path: path.join(output, `mobile-${width}-first-discovery.png`) });
    }
    assert.equal(await page.locator('.discovery-hud').isVisible(), false);
    await page.locator('#menu-button').click();
    assert.equal(await page.locator('#menu-flight-discoveries').textContent(), '1 / 96');
    checks.push('First/repeat pickup updates stars and run points immediately; 390px and 320px compact HUD and popup stay visible without clipping, with discovery totals in the flight menu.');

    assert.deepEqual(errors, []); assert.deepEqual(external, []);
    const report = { passed: true, checks, output, errors, external };
    await fs.writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  } catch (error) {
    if (page && !page.isClosed()) await page.screenshot({ path: path.join(output, 'failure.png'), fullPage: true }).catch(() => {});
    console.error(error.stack); console.error(JSON.stringify({ errors, external })); process.exitCode = 1;
  } finally { await browser.close(); }
})();
