// Actual game/progression/physics/scene bundled in memory. All HTTP is fulfilled
// locally; no debug hooks or generated QA bundles are written into production.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const esbuild = require('esbuild');
const { chromium } = require('playwright');

(async () => {
  const root = path.resolve(__dirname, '..'), origin = 'http://127.0.0.1:8796';
  const output = path.resolve(process.env.PRACTICE_QA_OUTPUT || 'D:/test/tmp/stubenflieger-practice-browser');
  const { HOUSE, getDoorPose } = await import('../src/house.js');
  const { PROFILE_KEY, calculateRunScore } = await import('../src/progression.js');
  const pendingKey = 'stubenflieger.pending-run.v1';
  const initial = { version: 2, points: 1234, highscore: 777,
    owned: ['plane:classic', 'effect:none', 'upgrade:size'],
    equipped: { form: 'classic', size: .55, effect: 'none', color: null, boosts: [] },
    useDoorUnlocks: true, creditedRuns: [], discoveredStarIds: ['living-star-6'] };
  const inspector = `
const qaCalls={creditStar:0,creditRun:0,beginRun:0,setResult:0,contacts:[]};
for(const [owner,names] of [[progression,['creditStar','creditRun']],[leaderboard,['beginRun','setResult']]])
 for(const name of names){const original=owner[name];owner[name]=(...args)=>{qaCalls[name]++;return original(...args);};}
const qaAdvance=physics.advance;
physics.advance=(...args)=>{const result=qaAdvance(...args);if(result.collided)qaCalls.contacts.push(result.body?.kind);return result;};
window.practiceQA={
 read(){return {state,paused,launched,settled,flightTime,speed,heading,runId:run.id,summary:run.summary(flightTime),opened:[...run.opened],
  position:{x:physics.plane.position.x,y:physics.plane.position.y,z:physics.plane.position.z},calls:structuredClone(qaCalls)};},
 doors(){return HOUSE.doors.map(door=>{const entry=physics.doorBodies.get(door.id),mesh=view.scene.getObjectByName(door.id);return {
  id:door.id,open:entry.open,physical:entry.obstacle.body.position.toArray(),physicalQuaternion:entry.obstacle.body.quaternion.toArray(),
  visual:mesh.position.toArray(),visualQuaternion:mesh.quaternion.toArray()};});},
 place(point,angle=0){physics.plane.position.set(point.x,point.y,point.z);physics.plane.previousPosition.copy(physics.plane.position);
  physics.plane.interpolatedPosition.copy(physics.plane.position);heading=angle;speed=tuning.speed;verticalSpeed=0;recoveryUntil=0;
  physics.plane.quaternion.setFromEuler(0,-angle,0,'YXZ');practiceRebound?.reset();view.plane.position.copy(physics.plane.position);view.plane.quaternion.copy(physics.plane.quaternion);},
 clearContacts(){qaCalls.contacts.length=0;}
};`;
  const built = await esbuild.build({ absWorkingDir: root, entryPoints: ['src/game.js'], bundle: true, write: false, format: 'esm',
    plugins: [{ name: 'practice-integration-inspection', setup(build) {
      build.onLoad({ filter: /[\\/]game\.js$/ }, async args => {
        if (path.resolve(args.path) !== path.join(root, 'src/game.js')) return;
        return { contents: await fs.readFile(args.path, 'utf8') + '\n' + inspector, loader: 'js', resolveDir: path.dirname(args.path) };
      });
    } }] });
  const checks = [], errors = [], requests = [];
  let holdNextTicket = false, releaseTicket;
  await fs.mkdir(output, { recursive: true });
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--enable-unsafe-swiftshader'] });
  let page;
  try {
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce', serviceWorkers: 'block' });
    await context.route('**/*', async route => {
      const request = route.request(), url = new URL(request.url());
      assert.equal(url.origin, origin, 'No external QA traffic');
      if (url.pathname.startsWith('/api/')) {
        requests.push({ path: url.pathname, method: request.method(), body: request.postDataJSON() });
        let data = { entries: [] };
        if (url.pathname === '/api/house-runs') {
          if (holdNextTicket) { holdNextTicket = false; await new Promise(resolve => { releaseTicket = resolve; }); }
          data = { run: 'local-practice-qa-ticket' };
        }
        if (url.pathname === '/api/house-leaderboard' && request.method() === 'POST') data = { points: 123 };
        return route.fulfill({ contentType: 'application/json', body: JSON.stringify(data) });
      }
      if (url.pathname === '/game.js') return route.fulfill({ contentType: 'text/javascript', body: built.outputFiles[0].text });
      const file = url.pathname === '/' ? 'index.html' : url.pathname.slice(1);
      if (!/^[a-z0-9_.-]+$/i.test(file)) return route.fulfill({ status: 404, body: '' });
      try {
        return route.fulfill({ body: await fs.readFile(path.join(root, 'dist', file)), contentType: file.endsWith('.css') ? 'text/css' : file.endsWith('.html') ? 'text/html' : 'application/octet-stream' });
      } catch { return route.fulfill({ status: 404, body: '' }); }
    });
    await context.addInitScript(({ key, profile }) => {
      if (!sessionStorage.getItem('practice-qa-seeded')) {
        localStorage.setItem(key, JSON.stringify(profile)); sessionStorage.setItem('practice-qa-seeded', 'yes');
      }
    }, { key: PROFILE_KEY, profile: initial });
    page = await context.newPage(); page.on('pageerror', error => errors.push(error.message));
    page.setDefaultTimeout(15000);
    const time = new Date('2026-10-08T12:00:00Z');
    await page.clock.install({ time }); await page.clock.pauseAt(new Date(time.getTime() + 1000));
    const read = () => page.evaluate(() => window.practiceQA.read());
    const profile = () => page.evaluate(key => JSON.parse(localStorage.getItem(key)), PROFILE_KEY);
    const pending = () => page.evaluate(key => JSON.parse(sessionStorage.getItem(key) || 'null'), pendingKey);
    const postCount = path => requests.filter(r => r.method === 'POST' && r.path === path).length;
    async function ready() {
      await page.locator('#loading').waitFor({ state: 'hidden' });
      assert.equal(await page.locator('#error').isVisible(), false);
      await page.locator('#launch-panel').waitFor({ state: 'visible' }); await page.clock.runFor(16);
      assert.equal((await read()).state, 'ready');
    }
    async function launch() { await page.locator('#launch').focus(); await page.keyboard.press('Enter'); assert.equal((await read()).state, 'flying'); }
    async function openMenu() {
      if (!await page.locator('#menu').isVisible()) {
        if (await page.locator('#paused').isVisible()) await page.locator('#pause-menu').click();
        else if (await page.locator('#result').isVisible()) await page.locator('#result-menu').click();
        else await page.locator('#menu-button').click();
      }
    }
    async function mode(value) { await openMenu(); await page.locator('#play-mode').selectOption(value); }
    async function resume() {
      if (await page.locator('#menu').isVisible()) await page.locator('#close-menu').click();
      if (await page.locator('#paused').isVisible()) await page.locator('#resume').click();
      if (await page.locator('#menu').isVisible()) await page.locator('#close-menu').click();
    }
    async function place(point, angle = 0) { await page.evaluate(({ point, angle }) => window.practiceQA.place(point, angle), { point, angle }); }
    async function pickup(star) { await place(star); await page.clock.runFor(32); }
    async function assertDoors(open) {
      const actual = await page.evaluate(() => window.practiceQA.doors()); assert.equal(actual.length, 22);
      for (const data of actual) {
        const expected = getDoorPose(HOUSE.doors.find(d => d.id === data.id), open);
        assert.equal(data.open, open, `${data.id}: physical door flag`);
        for (const coordinate of ['physical', 'visual']) data[coordinate].forEach((value, i) => assert(Math.abs(value - expected.position[i]) < 1e-8, `${data.id}: ${coordinate}`));
        data.physicalQuaternion.forEach((value, i) => assert(Math.abs(value - data.visualQuaternion[i]) < 1e-8, `${data.id}: visual/physical rotation disagree`));
      }
    }
    async function unchanged(expected = initial) {
      assert.deepEqual(await profile(), expected); assert.equal(await pending(), null);
    }
    async function assertPracticeNoRewards(expected = initial) {
      await unchanged(expected);
      const state = await read();
      assert.equal(state.calls.creditStar, 0); assert.equal(state.calls.creditRun, 0);
      assert.equal(state.calls.beginRun, 0); assert.equal(state.calls.setResult, 0);
      assert.equal(postCount('/api/house-runs'), 0); assert.equal(postCount('/api/house-leaderboard'), 0);
    }
    async function finishViaUI() {
      await page.keyboard.press('p'); await page.locator('#pause-finish').click();
      await page.clock.runFor(2500); await page.locator('#result').waitFor({ state: 'visible' });
    }
    async function forceScoreSubmit() { await page.locator('#score-form').evaluate(node => node.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))); }

    await page.goto(origin); await ready(); await assertDoors(false);
    await page.locator('#practice-toggle').click(); await ready(); await assertDoors(true);
    assert.equal((await read()).summary.practice, true);
    assert.equal(await page.locator('#practice-speed').inputValue(), '50');
    assert.equal(await page.locator('#practice-speed').getAttribute('min'), '25');
    assert.equal(await page.locator('#practice-speed').getAttribute('max'), '100');
    await resume();
    await launch(); assert(await page.locator('#practice-badge').isVisible());
    for (const star of HOUSE.collectibles) await pickup(star);
    let state = await read();
    assert.equal(state.state, 'flying', 'Collecting all practice stars must not end free flight');
    assert.equal(state.summary.stars, 96, 'All authored stars were physically collected');
    assert.equal(await page.locator('#run-points').innerText(), '0');
    await page.evaluate(() => { dispatchEvent(new Event('pagehide')); document.dispatchEvent(new Event('visibilitychange')); });
    await assertPracticeNoRewards();
    checks.push('Practice defaults to 50%; all 22 door poses open visually/physically; collecting all 96 stars and pagehide writes no reward/progression/pending/API data.');

    // Put the actual body ahead of obstacles, then let real simulation generate contacts.
    await page.evaluate(() => window.practiceQA.clearContacts());
    await place({ x: 13.6, y: 2.6, z: 5.6 }, Math.PI / 2); await page.clock.runFor(1000);
    assert.equal((await read()).state, 'flying');
    assert((await read()).calls.contacts.includes('wall'), 'Real wall collision must occur');
    await place({ x: 17, y: .08, z: 14 }); await page.keyboard.down('s'); await page.clock.runFor(1000); await page.keyboard.up('s');
    assert.equal((await read()).state, 'flying');
    assert((await read()).calls.contacts.includes('floor'), 'Real floor collision must occur');
    await assertPracticeNoRewards();
    checks.push('Real wall and floor collisions leave the practice flight alive without awarding or persisting anything.');

    const distances = {};
    for (const percent of [25, 100, 50]) {
      const runId = (await read()).runId;
      await openMenu();
      await page.locator('#practice-speed').evaluate((node, value) => { node.value = String(value); node.dispatchEvent(new Event('input', { bubbles: true })); node.dispatchEvent(new Event('change', { bubbles: true })); }, percent);
      assert.match(await page.locator('#practice-speed-value').innerText(), new RegExp(String(percent)));
      await resume(); assert.equal((await read()).runId, runId, 'Speed changes must preserve active practice flight');
      await place({ x: 17, y: 3, z: 6 }); const before = (await read()).position;
      await page.clock.runFor(512); const after = (await read()).position;
      distances[percent] = Math.hypot(after.x - before.x, after.z - before.z);
    }
    assert(Math.abs(distances[25] / distances[100] - .25) < .06, JSON.stringify(distances));
    assert(Math.abs(distances[50] / distances[100] - .5) < .06, JSON.stringify(distances));
    await openMenu();
    for (const [width, height] of [[320, 568], [390, 844]]) {
      await page.setViewportSize({ width, height }); await page.evaluate(() => dispatchEvent(new Event('resize'))); await page.clock.runFor(16);
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
      await page.locator('#practice-settings').scrollIntoViewIfNeeded();
      const rect = await page.locator('#practice-speed').boundingBox(); assert(rect && rect.x >= 0 && rect.x + rect.width <= width + 1);
      await page.screenshot({ path: path.join(output, `practice-menu-${width}.png`) });
    }
    await page.setViewportSize({ width: 1280, height: 900 }); await page.evaluate(() => dispatchEvent(new Event('resize')));
    await resume(); await finishViaUI(); await forceScoreSubmit(); await assertPracticeNoRewards();
    await page.locator('#again').click(); await ready(); await assertDoors(true); assert.equal((await read()).summary.stars, 0);
    await page.reload(); await ready(); await assertDoors(true); await assertPracticeNoRewards();
    checks.push('25/50/100% change actual travel speed during paused-menu editing; mobile settings fit; finish/reset/reload retain practice without rewards or score submission.');

    await mode('normal'); await resume(); await ready(); await assertDoors(false); await launch();
    await pickup(HOUSE.collectibles.find(s => s.id === 'living-star-1'));
    const activeNormal = await read(), firstPending = await pending(), firstSaved = await profile();
    assert(firstPending && firstPending.id === activeNormal.runId); assert.equal(activeNormal.summary.stars, 1);
    assert(firstSaved.points > initial.points); assert(firstSaved.discoveredStarIds.includes('living-star-1'));
    await mode('practice'); await resume(); await ready(); await assertDoors(true);
    const paid = await profile();
    assert.equal(paid.points, firstSaved.points + calculateRunScore(activeNormal.summary));
    assert(paid.creditedRuns.includes(activeNormal.runId)); await unchanged(paid);
    await launch(); await pickup(HOUSE.collectibles.find(s => s.id === 'workshop-star-1')); await unchanged(paid);
    checks.push('Switching a live normal run to practice first settles the exact normal score once; later practice stars do not alter discoveries, wallet or highscore.');

    holdNextTicket = true;
    await mode('normal'); await resume(); await ready(); await launch(); await pickup(HOUSE.collectibles.find(s => s.id === 'living-star-1'));
    await page.clock.runFor(600); await finishViaUI();
    const beforePractice = await profile(), begun = postCount('/api/house-runs');
    assert.equal(begun, 2); assert.equal(postCount('/api/house-leaderboard'), 0);
    await page.locator('#pilot-name').fill('Prüfpilot'); await forceScoreSubmit();
    assert.equal(typeof releaseTicket, 'function', 'Submission is waiting for a delayed real API response');
    await mode('practice'); await resume(); await ready();
    const ticketResponse = page.waitForResponse(response => new URL(response.url()).pathname === '/api/house-runs');
    releaseTicket(); await (await ticketResponse).finished(); await page.clock.runFor(32);
    await forceScoreSubmit(); await launch(); await page.clock.runFor(300); await forceScoreSubmit();
    assert.equal(postCount('/api/house-runs'), begun); assert.equal(postCount('/api/house-leaderboard'), 0);
    await unchanged(beforePractice);
    checks.push('Switching away from a normal result invalidates its old form and an in-flight delayed ticket submission; practice cannot begin or submit an online score.');

    const recoverySummary = { stars: 1, starIds: ['living-star-1'], roomIds: [], seconds: 1, blocks: 0, complete: false };
    const normalPending = { id: 'practice-qa-normal-recovery', summary: recoverySummary };
    await page.evaluate(({ key, value }) => sessionStorage.setItem(key, JSON.stringify(value)), { key: pendingKey, value: normalPending });
    await page.reload(); await ready(); assert.equal((await read()).summary.practice, true);
    const recovered = await profile(); assert.equal(recovered.points, beforePractice.points + calculateRunScore(recoverySummary)); assert.equal(await pending(), null);
    await page.evaluate(({ key, value }) => sessionStorage.setItem(key, JSON.stringify(value)), { key: pendingKey, value: { id: 'practice-qa-ignored-recovery', summary: { ...recoverySummary, practice: true } } });
    await page.reload(); await ready(); await unchanged(recovered);
    checks.push('Reload in practice settles a legitimate previous normal pending run; an explicit practice pending record is discarded without credit.');

    await mode('normal'); await resume(); await ready(); await launch(); await page.clock.runFor(200); await openMenu();
    const blockedRun = await read(), beforeFailure = await profile();
    await page.evaluate(key => {
      const original = Storage.prototype.setItem;
      window.restorePracticeQAStorage = () => { Storage.prototype.setItem = original; };
      Storage.prototype.setItem = function (name, value) { if (name === key) throw new DOMException('Local quota test', 'QuotaExceededError'); return original.call(this, name, value); };
    }, PROFILE_KEY);
    await page.locator('#play-mode').selectOption('practice');
    assert.notEqual((await read()).summary.practice, true); assert.equal((await read()).runId, blockedRun.runId);
    assert.equal(await page.locator('#play-mode').inputValue(), 'normal'); assert.deepEqual(await profile(), beforeFailure);
    await page.evaluate(() => window.restorePracticeQAStorage());
    await mode('practice'); await resume(); await ready();
    assert.equal((await profile()).points, beforeFailure.points + calculateRunScore(blockedRun.summary)); assert.equal(await pending(), null);
    checks.push('A failed normal-run settlement blocks switching modes and preserves the flight; retry after storage recovery settles it once.');

    assert.deepEqual(errors, []);
    const report = { passed: true, checks, distances, apiRequests: requests.map(({ path, method }) => ({ path, method })), errors };
    await fs.writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2)); console.log(JSON.stringify(report, null, 2));
  } catch (error) {
    if (page && !page.isClosed()) await page.screenshot({ path: path.join(output, 'failure.png'), fullPage: true }).catch(() => {});
    const state = page && !page.isClosed() ? await page.evaluate(() => window.practiceQA?.read()).catch(() => null) : null;
    await fs.writeFile(path.join(output, 'report.json'), JSON.stringify({ passed: false, checks, errors, state, failure: error.message }, null, 2));
    throw error;
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
