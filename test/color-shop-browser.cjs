// Local-only UI QA for the permanent color upgrade. Provide Playwright through NODE_PATH if needed.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const { chromium } = require('playwright');

(async () => {
  const { PROFILE_KEY } = await import('../src/progression.js');
  const { getAircraftDefinition } = await import('../src/aircraft.js');
  const { aircraftPartColor } = await import('../src/cosmetics.js');
  const origin = (process.env.COLOR_QA_ORIGIN || 'http://127.0.0.1:8796').replace(/\/$/, '');
  assert(['127.0.0.1', 'localhost'].includes(new URL(origin).hostname), 'QA must stay on a local server.');
  const output = path.resolve(process.env.COLOR_QA_OUTPUT || 'D:/test/tmp/stubenflieger-color-shop-browser');
  await fs.mkdir(output, { recursive: true });
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--enable-unsafe-swiftshader'] });
  let page;
  const errors = [], external = [], checks = [];
  try {
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, serviceWorkers: 'block' });
    await context.route('**/*', route => {
      const url = new URL(route.request().url());
      if (url.origin === origin || ['data:', 'blob:'].includes(url.protocol)) return route.continue();
      external.push(url.href); return route.abort();
    });
    // This is a v2 profile from before the color field existed.
    const initial = { version: 2, points: 6200, highscore: 4321,
      owned: ['plane:classic', 'plane:glider', 'effect:none', 'effect:mint'],
      equipped: { form: 'glider', size: 1, boosts: [], effect: 'mint' },
      useDoorUnlocks: true, creditedRuns: ['previous-credited-flight'], discoveredStarIds: ['living-star-1'] };
    await context.addInitScript(({ key, profile }) => {
      if (sessionStorage.getItem('color-qa-seeded')) return;
      localStorage.setItem(key, JSON.stringify(profile)); sessionStorage.setItem('color-qa-seeded', 'yes');
    }, { key: PROFILE_KEY, profile: initial });
    page = await context.newPage(); page.on('pageerror', error => errors.push(error.message));
    const profile = () => page.evaluate(key => JSON.parse(localStorage.getItem(key)), PROFILE_KEY);
    const ready = async () => {
      await page.locator('#loading').waitFor({ state: 'hidden', timeout: 60000 });
      assert.equal(await page.locator('#error').isVisible(), false);
      await page.locator('#launch-panel').waitFor({ state: 'visible' });
    };
    const openColors = async () => {
      await page.locator('#start-shop').click();
      await page.locator('[data-shop-focus="category:colors"]').click();
    };
    const choose = async color => {
      // Native color dialogs are OS-owned; deliver the same input event they emit.
      await page.locator('#plane-color').evaluate((node, value) => {
        node.value = value; node.dispatchEvent(new Event('input', { bubbles: true }));
      }, color);
      assert.equal(await page.locator('#plane-color-hex').innerText(), color);
    };
    const previewFills = async () => [...new Set(await page.locator('#color-preview polygon').evaluateAll(nodes => nodes.map(node => node.getAttribute('fill'))))].sort();
    const expectedFills = color => [...new Set(getAircraftDefinition('glider').parts.map(part => aircraftPartColor(part, color)))].sort();
    const assertUnchangedHistory = async () => {
      const saved = await profile();
      assert.equal(saved.highscore, initial.highscore); assert.deepEqual(saved.discoveredStarIds, initial.discoveredStarIds);
      assert.deepEqual(saved.creditedRuns, initial.creditedRuns);
      assert.equal(saved.equipped.form, 'glider'); assert.equal(saved.equipped.effect, 'mint');
      assert(initial.owned.every(id => saved.owned.includes(id)));
    };
    await page.goto(origin); await ready(); await openColors();
    assert.equal(await page.locator('#plane-color').count(), 0, 'Locked upgrade must not expose custom editing.');
    assert.match(await page.locator('.color-grid .shop-price').innerText(), /2\.000 Punkte/);
    assert.deepEqual(await previewFills(), expectedFills(null));
    await page.locator('[data-shop-focus="upgrade:color"]').click();
    let saved = await profile();
    assert.equal(saved.points, 4200); assert(saved.owned.includes('upgrade:color')); assert.equal(saved.equipped.color, null);
    await assertUnchangedHistory();
    checks.push('Old v2 profile opens safely; only the 2000-point permanent upgrade unlocks the picker and preserves history.');

    const custom = '#4c80d1';
    await choose(custom);
    assert.deepEqual(await previewFills(), expectedFills(custom), 'Live preview uses the actual glider geometry and shared material colors.');
    assert.equal((await profile()).equipped.color, null, 'Preview alone does not save or charge.');
    await page.locator('#color-apply').click();
    saved = await profile(); assert.equal(saved.equipped.color, custom); assert.equal(saved.points, 4200);
    assert.match(await page.locator('.shop-color-current').innerText(), /#4c80d1/);
    assert.equal(await page.locator('#color-apply').isDisabled(), true);
    await page.locator('#close-shop').click(); await page.reload(); await ready(); await openColors();
    assert.equal(await page.locator('#plane-color').inputValue(), custom);
    assert.deepEqual(await previewFills(), expectedFills(custom));
    await assertUnchangedHistory();
    checks.push('Native-picker input updates the real silhouette before saving; Apply persists the selected color across reload.');

    for (const color of ['#e0693e', '#000000', '#ffffff']) {
      await choose(color); await page.locator('#color-apply').click();
      assert.equal((await profile()).points, 4200); assert.equal((await profile()).equipped.color, color);
    }
    await page.locator('#color-reset').click();
    assert.equal((await profile()).equipped.color, null); assert.equal((await profile()).points, 4200);
    assert.deepEqual(await previewFills(), expectedFills(null)); assert.equal(await page.locator('#color-reset').isDisabled(), true);
    await choose(custom); await page.locator('#color-apply').click();
    checks.push('Repeated selections, black, white and restoring original paper never deduct more money or change other gear.');

    const beforeFailure = await profile();
    await page.evaluate(key => {
      window.__colorOriginalSetItem = Storage.prototype.setItem;
      Storage.prototype.setItem = function (name, value) {
        if (name === key) throw new DOMException('Local color QA quota failure', 'QuotaExceededError');
        return window.__colorOriginalSetItem.call(this, name, value);
      };
    }, PROFILE_KEY);
    await choose('#b04299'); await page.locator('#color-apply').click();
    assert.match(await page.locator('.shop-status').innerText(), /Speichern.*nicht möglich/);
    assert.deepEqual(await profile(), beforeFailure);
    assert.deepEqual(await previewFills(), expectedFills(custom));
    await page.evaluate(() => { Storage.prototype.setItem = window.__colorOriginalSetItem; delete window.__colorOriginalSetItem; });
    await choose('#b04299'); await page.locator('#color-apply').click();
    assert.equal((await profile()).equipped.color, '#b04299'); assert.equal((await profile()).points, 4200);
    checks.push('Storage failure reports an error and retains the old color and wallet; retry succeeds without charging.');

    for (const [width, height, label] of [[1280, 900, 'desktop'], [390, 844, 'mobile-390'], [320, 568, 'mobile-320'], [844, 390, 'landscape']]) {
      await page.setViewportSize({ width, height });
      await page.evaluate(() => window.dispatchEvent(new Event('resize')));
      await page.locator('#plane-color').scrollIntoViewIfNeeded();
      const dimensions = await page.evaluate(() => {
        const panel = document.querySelector('#shop .shop-panel'), picker = document.getElementById('plane-color');
        const bounds = picker.getBoundingClientRect();
        return { width: innerWidth, pageWidth: document.documentElement.scrollWidth, panelWidth: panel.clientWidth, panelScroll: panel.scrollWidth,
          picker: { width: bounds.width, height: bounds.height, left: bounds.left, right: bounds.right } };
      });
      assert(dimensions.pageWidth <= width + 1 && dimensions.panelScroll <= dimensions.panelWidth + 1, JSON.stringify(dimensions));
      assert(dimensions.picker.width >= 44 && dimensions.picker.height >= 44, 'Color picker is a touch target.');
      assert(dimensions.picker.left >= 0 && dimensions.picker.right <= width, JSON.stringify(dimensions));
      await page.screenshot({ path: path.join(output, `${label}-color-shop.png`) });
      await page.locator('#color-apply').scrollIntoViewIfNeeded();
      const buttonBounds = await page.locator('#color-apply').boundingBox();
      assert(buttonBounds.y >= 0 && buttonBounds.y + buttonBounds.height <= height, `${label}: Apply remains reachable by scrolling.`);
    }
    checks.push('Color controls fit desktop, 390px, 320px and landscape; picker remains a usable touch target and actions remain reachable.');
    assert.deepEqual(errors, []); assert.deepEqual(external, []);
    const report = { passed: true, checks, errors, external, output };
    await fs.writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  } catch (error) {
    if (page) await page.screenshot({ path: path.join(output, 'failure.png'), fullPage: true }).catch(() => {});
    console.error(error.stack); console.error(JSON.stringify({ errors, external })); process.exitCode = 1;
  } finally { await browser.close(); }
})();
