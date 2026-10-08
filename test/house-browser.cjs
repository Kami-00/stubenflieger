// Local-only browser QA. Supply Playwright through NODE_PATH when it is not installed here.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const { chromium } = require('playwright');

(async () => {
  const { CATALOG, PROFILE_KEY } = await import('../src/progression.js');
  const origin = process.env.HOUSE_QA_ORIGIN || 'http://127.0.0.1:8796';
  assert(['127.0.0.1', 'localhost'].includes(new URL(origin).hostname), 'QA must target a local server.');
  const output = path.resolve(process.env.HOUSE_QA_OUTPUT || 'D:/test/tmp/stubenflieger-house-browser');
  await fs.mkdir(output, { recursive: true });
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--enable-unsafe-swiftshader'] });
  const errors = [], external = [], checks = [];
  let page;
  try {
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce', serviceWorkers: 'block' });
    await context.route('**/*', route => {
      const url = new URL(route.request().url());
      if (url.origin === origin || ['data:', 'blob:'].includes(url.protocol)) return route.continue();
      external.push(url.href); return route.abort();
    });
    const initial = { version: 1, points: 60000, highscore: 777,
      owned: ['plane:classic', 'effect:none'], equipped: { form: 'classic', effect: 'none', boosts: [], size: 1 },
      useDoorUnlocks: true, creditedRuns: [] };
    await context.addInitScript(({ key, initial }) => {
      if (!sessionStorage.getItem('house-qa-seeded')) {
        localStorage.setItem(key, JSON.stringify(initial)); sessionStorage.setItem('house-qa-seeded', 'yes');
      }
    }, { key: PROFILE_KEY, initial });
    page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    const profile = () => page.evaluate(key => JSON.parse(localStorage.getItem(key)), PROFILE_KEY);
    const control = key => page.locator(`[data-shop-focus="${key}"]`);
    const category = id => control(`category:${id}`).click();
    const openShop = async () => { await page.locator('#start-shop').click(); await page.locator('#shop').waitFor({ state: 'visible' }); };
    const ready = async () => {
      await page.locator('#loading').waitFor({ state: 'hidden', timeout: 60000 });
      assert.equal(await page.locator('#error').isVisible(), false);
      await page.locator('#launch-panel').waitFor({ state: 'visible' });
    };
    const noOverflow = async label => {
      const dimensions = await page.evaluate(() => {
        const panel = document.querySelector('#shop .shop-panel'), modal = document.querySelector('#shop');
        return { screen: innerWidth, document: document.documentElement.scrollWidth,
          panel: panel.clientWidth, panelScroll: panel.scrollWidth, modal: modal.clientWidth, modalScroll: modal.scrollWidth };
      });
      assert(dimensions.document <= dimensions.screen + 1, `${label}: page overflow ${JSON.stringify(dimensions)}`);
      assert(dimensions.panelScroll <= dimensions.panel + 1, `${label}: shop panel overflow ${JSON.stringify(dimensions)}`);
      assert(dimensions.modalScroll <= dimensions.modal + 1, `${label}: modal overflow ${JSON.stringify(dimensions)}`);
    };
    const buy = async id => { await control(id).click(); assert((await profile()).owned.includes(id), `Purchased ${id}`); };
    await page.goto(origin); await ready(); await openShop();
    assert.equal(await page.locator('#plane-size').count(), 0);
    await buy('upgrade:size');
    const range = page.locator('#plane-size');
    await range.focus(); await range.press('Home');
    assert.equal((await profile()).equipped.size, .55);
    await range.focus(); await range.press('End');
    assert.equal((await profile()).equipped.size, 1.5);
    checks.push('Size upgrade unlocks keyboard-adjustable 55–150% range');
    await category('planes'); await buy('plane:glider'); await control('plane:glider').click();
    await category('effects'); await buy('effect:mint'); await control('effect:mint').click();
    await category('boosts');
    for (const id of ['lift', 'turbo']) { await buy(`boost:${id}`); await control(`boost:${id}`).click(); }
    await buy('boost:magnet');
    assert.equal(await control('boost:magnet').isDisabled(), true);
    await control('boost:lift').click(); await control('boost:magnet').click();
    const door = CATALOG.find(item => item.category === 'doors');
    await category('doors'); await buy(door.id);
    await control('doors-enabled').uncheck();
    const purchased = ['upgrade:size', 'plane:glider', 'effect:mint', 'boost:lift', 'boost:turbo', 'boost:magnet', door.id];
    const expectedPoints = initial.points - CATALOG.filter(item => purchased.includes(item.id)).reduce((sum, item) => sum + item.price, 0);
    let saved = await profile();
    assert.equal(saved.points, expectedPoints); assert.equal(saved.highscore, initial.highscore);
    assert.deepEqual(saved.equipped, { form: 'glider', effect: 'mint', boosts: ['turbo', 'magnet'], size: 1.5, color: null });
    assert.equal(saved.useDoorUnlocks, false);
    checks.push('Permanent purchases, exact wallet deduction, unchanged record, equipment and two boost slots');
    await page.reload(); await ready(); await openShop();
    saved = await profile();
    assert.equal(saved.points, expectedPoints); assert.equal(saved.equipped.size, 1.5);
    assert(purchased.every(id => saved.owned.includes(id)));
    assert.equal(await page.locator('#plane-size').inputValue(), '1.5');
    checks.push('Reload preserves all owned items, equipment, door preference and wallet');
    await page.locator('#close-shop').click();
    const pending = await page.evaluate(() => ({ id: crypto.randomUUID(), savedAt: Date.now(),
      summary: { stars: 2, blocks: 0, seconds: .5, roomIds: ['dining', 'kitchen'], complete: false } }));
    const seedPending = () => page.evaluate(value => sessionStorage.setItem('stubenflieger.pending-run.v1', JSON.stringify(value)), pending);
    await seedPending(); await page.reload(); await ready();
    assert.equal((await profile()).points, expectedPoints + 805);
    assert.equal((await profile()).highscore, 805);
    assert.equal(await page.evaluate(() => sessionStorage.getItem('stubenflieger.pending-run.v1')), null);
    await seedPending(); await page.reload(); await ready();
    assert.equal((await profile()).points, expectedPoints + 805);
    checks.push('Reload recovers star/room bonus and the same pending run never pays twice');
    await openShop();
    await page.locator('#close-shop').focus(); await page.keyboard.press('Shift+Tab');
    assert.equal(await page.evaluate(() => document.activeElement.dataset.shopFocus), 'close');
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'close-shop');
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#shop').isVisible(), false);
    assert.equal(await page.evaluate(() => document.activeElement.id), 'start-shop');
    checks.push('Shop traps keyboard focus, Escape closes and returns focus to its opener');
    await openShop();
    for (const [width, height, label] of [[1280, 900, 'desktop'], [390, 844, 'mobile-390'], [320, 568, 'mobile-320'], [844, 390, 'landscape']]) {
      await page.setViewportSize({ width, height });
      for (const id of ['upgrades', 'doors', 'boosts', 'planes', 'effects']) {
        await category(id); await noOverflow(`${label}/${id}`);
      }
      await category('upgrades');
      await page.screenshot({ path: path.join(output, `${label}-shop.png`), fullPage: true });
      await control('close').scrollIntoViewIfNeeded();
      const closeBounds = await control('close').boundingBox();
      assert(closeBounds.y >= 0 && closeBounds.y + closeBounds.height <= height, `${label}: bottom action remains reachable by scrolling`);
    }
    checks.push('Every shop category fits desktop, 390px, 320px and landscape screens');
    await page.locator('#close-shop').click(); await page.setViewportSize({ width: 1280, height: 900 });
    await page.screenshot({ path: path.join(output, 'desktop-ready.png') });
    await openShop(); await category('doors'); await control('doors-enabled').check();
    await category('upgrades'); await page.locator('#plane-size').focus(); await page.locator('#plane-size').press('Home');
    await category('planes'); await control('plane:classic').click(); await page.locator('#close-shop').click();
    const beforeResets = (await profile()).points;
    for (let count = 0; count < 3; count++) await page.locator('#reset').click();
    assert.equal((await profile()).points, beforeResets);
    checks.push('Permanently opened doors and repeated ready-state resets give no free points');
    await openShop(); await category('planes');
    await page.evaluate(key => {
      window.houseQaOriginalSetItem = Storage.prototype.setItem;
      Storage.prototype.setItem = function (name, value) {
        if (name === key) throw new DOMException('Test storage full', 'QuotaExceededError');
        return window.houseQaOriginalSetItem.call(this, name, value);
      };
    }, PROFILE_KEY);
    await control('plane:dart').click();
    assert.match(await page.locator('.shop-status').innerText(), /Speichern.*nicht möglich/);
    assert.equal((await profile()).points, beforeResets);
    assert.equal((await profile()).owned.includes('plane:dart'), false);
    await page.evaluate(() => { Storage.prototype.setItem = window.houseQaOriginalSetItem; delete window.houseQaOriginalSetItem; });
    await page.locator('#close-shop').click();
    checks.push('Storage failure is visible and neither deducts points nor grants an unsaved purchase');
    await page.locator('#launch').focus(); await page.keyboard.press('Enter');
    // The container only has fixed-position children, so its own bounding box is empty.
    await page.waitForFunction(() => !document.querySelector('#flight-controls').hidden);
    await page.keyboard.press('1'); await page.keyboard.press('2'); await page.keyboard.press('p');
    assert.equal(await page.locator('#boost-controls button').nth(0).isDisabled(), true);
    assert.equal(await page.locator('#boost-controls button').nth(1).isDisabled(), true);
    await page.keyboard.press('r'); await ready();
    assert.equal(await page.locator('#boost-controls button').nth(0).isDisabled(), false);
    assert.equal(await page.locator('#boost-controls button').nth(1).isDisabled(), false);
    const afterFlight = await profile();
    assert(['boost:turbo', 'boost:magnet'].every(id => afterFlight.owned.includes(id)));
    checks.push('Both equipped boosts activate once, stay purchased and refill with the next run');
    assert.deepEqual(errors, [], 'No uncaught browser exceptions');
    assert.deepEqual(external, [], 'No external/production requests');
    const report = { passed: true, checks, screenshots: output, errors, external };
    await fs.writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  } catch (error) {
    if (page) await page.screenshot({ path: path.join(output, 'failure.png'), fullPage: true }).catch(() => {});
    console.error(error.stack);
    console.error(JSON.stringify({ browserErrors: errors, external }));
    process.exitCode = 1;
  } finally { await browser.close(); }
})();
