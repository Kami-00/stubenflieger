// Local-only visual regression. Inspector exports exist only in this temporary
// esbuild bundle; production sources and APIs gain no debug hooks or writes.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const esbuild = require('esbuild');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..'), origin = 'http://127.0.0.1:8796';
const output = 'D:/test/tmp/stubenflieger-camera';
const harness = `
import {createDuelView} from './src/duel-view.js';
import {Quaternion,Euler} from 'three';
let simulatedTime=performance.now();performance.now=()=>simulatedTime;
const view=createDuelView(document.querySelector('canvas'));
const ids=['p1','p2','p3','p4','p5'],colors=['#ef346a','#1876ab','#18de37','#9f2beb','#000000'],effects=['mint','spark','confetti','none','spark'];
const quaternion=new Quaternion().setFromEuler(new Euler(.19,-.28,-.34,'YXZ'));
const snapshot=(tick=1,active=ids)=>({tick,time:tick/30,winner:null,reason:'',projectiles:[],players:active.map(id=>{const i=ids.indexOf(id);return {id,hp:100,position:{x:11+i*.64,y:1.3,z:14-tick*.025},quaternion:{x:quaternion.x,y:quaternion.y,z:quaternion.z,w:quaternion.w},heading:.28,appearance:{color:colors[i],effect:effects[i]}};})});
let current=snapshot();
function inspect(){const state=view.__inspect();return {following:state.followingId,camera:state.view.camera.quaternion.toArray(),near:state.view.camera.near,models:Object.fromEntries(ids.map(id=>[id,{visible:state.aircraft[id].visible,position:state.aircraft[id].position.toArray(),quaternion:state.aircraft[id].quaternion.toArray(),colors:state.aircraft[id].children.map(mesh=>mesh.material.color.getHexString()),trail:state.effects[id].trail.visible,particles:state.effects[id].particles.visible,head:Array.from(state.effects[id].trail.geometry.attributes.position.array.slice(0,3))}]))};}
window.renderQA={
  step(tick){current=snapshot(tick);view.update(current,'p1',1/30,{active:false});simulatedTime+=100;view.update(current,'p1',1/30,{active:false});return inspect();},
  fpv(){view.setCameraMode('fpv');view.update(current,'p1',1/60);return inspect();},
  ko(){current={...current,tick:current.tick+1,players:current.players.map(player=>({...player,hp:player.id==='p1'?0:100}))};view.update(current,'p1',1/60);return inspect();},
  chase(){view.setCameraMode('chase');view.update(current,'p1',1/60);return inspect();},
  lobby(){view.update(null,'p1',1/60);return inspect();},
  rematch(){current=snapshot(1,['p1','p3','p5']);view.update(current,'p1',1/60);return inspect();},
  gallery(){const s=view.__inspect();s.view.camera.position.set(12.3,3.4,15);s.view.camera.lookAt(12.3,1.3,12.8);s.view.render();},
  dispose(){view.dispose();return view.__inspect().view.scene.children.length;},
};
window.renderQA.step(1);
`;

(async () => {
  await fs.mkdir(output, { recursive: true });
  const duel = await esbuild.build({ stdin: { contents: harness, resolveDir: root }, bundle: true, write: false, format: 'esm', plugins: [{ name: 'read-only-test-inspector', setup(build) {
    build.onLoad({ filter: /duel-view\.js$/ }, async args => {
      const text = await fs.readFile(args.path, 'utf8'), needle = 'return { update, resize: view.resize,';
      assert(text.includes(needle));
      return { contents: text.replace(needle, 'return { __inspect: () => ({view,aircraft,effects,followingId}), update, resize: view.resize,'), loader: 'js' };
    });
  } }] });
  const solo = await esbuild.build({ entryPoints: [path.join(root, 'src/game.js')], bundle: true, write: false, format: 'esm', plugins: [{ name: 'read-only-solo-inspector', setup(build) {
    build.onLoad({ filter: /[\\/]src[\\/]game\.js$/ }, async args => ({ loader: 'js', contents: await fs.readFile(args.path, 'utf8') + `\nwindow.soloRender=()=>view.render();window.soloQA=()=>({state,mode:flightCamera.mode,position:physics.plane.position.toArray(),rotation:[physics.plane.quaternion.x,physics.plane.quaternion.y,physics.plane.quaternion.z,physics.plane.quaternion.w],camera:view.camera.quaternion.toArray(),visible:view.plane.visible,near:view.camera.near,shapes:physics.plane.shapes.map(shape=>shape.vertices.map(v=>v.toArray()))});` }));
  } }] });
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--enable-unsafe-swiftshader'] });
  const report = { screenshots: [] }, errors = [];
  let page;
  try {
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1, serviceWorkers: 'block' });
    await context.route('**/*', route => {
      const url = new URL(route.request().url());
      if (url.origin !== origin) return route.abort();
      if (url.pathname.startsWith('/api/')) return route.fulfill({ contentType: 'application/json', body: JSON.stringify({ run: 'isolated-local-test', entries: [] }) });
      if (url.pathname === '/__camera-render') return route.fulfill({ contentType: 'text/html', body: '<html><style>html,body,canvas{margin:0;width:100%;height:100%;overflow:hidden}</style><canvas></canvas><div id="duel-reticle"></div><script type="module" src="/__camera-render.js"></script></html>' });
      if (url.pathname === '/__camera-render.js') return route.fulfill({ contentType: 'text/javascript', body: Buffer.from(duel.outputFiles[0].contents) });
      return route.continue();
    });
    await context.addInitScript(() => {
      // Run real game frames only when requested: a toggle can then be compared
      // with precisely the same physical pose rather than two different times.
      const queue = [], qa = window.frameQA = { time: performance.now() };
      window.requestAnimationFrame = callback => { queue.push(callback); return queue.length; };
      qa.frames = count => { for (let i = 0; i < count; i++) { qa.time += 1000 / 60; const pending = queue.splice(0); pending.forEach(callback => callback(qa.time)); } };
    });
    page = await context.newPage(); page.on('pageerror', error => errors.push(error.message));
    async function screenshot(name) { const file = `${output}/${name}.png`; await page.screenshot({ path: file }); report.screenshots.push(file); }

    // First use the real built game, unchanged.
    await page.goto(origin, { waitUntil: 'domcontentloaded' }); await page.locator('#loading').waitFor({ state: 'hidden' });
    assert.equal(await page.locator('#camera-mode').getAttribute('aria-pressed'), 'false');
    await page.locator('#camera-mode').click();
    assert.equal(await page.locator('#camera-mode').getAttribute('aria-pressed'), 'true');
    assert.equal(await page.evaluate(() => localStorage.getItem('stubenflieger.camera.v1')), 'fpv');
    await page.reload({ waitUntil: 'domcontentloaded' }); await page.locator('#loading').waitFor({ state: 'hidden' });
    assert.equal(await page.locator('#camera-mode').getAttribute('aria-pressed'), 'true');
    await page.keyboard.press('v'); assert.equal(await page.locator('#camera-mode').getAttribute('aria-pressed'), 'false');
    report.builtSolo = { button: true, keyboard: true, persistedReload: true };

    // The exact same source with an extra read-only getter proves invariants.
    await page.route(/\/game\.js(?:\?|$)/, route => route.fulfill({ contentType: 'text/javascript', body: Buffer.from(solo.outputFiles[0].contents) }));
    await page.reload({ waitUntil: 'domcontentloaded' }); await page.waitForFunction(() => window.soloQA, null, { polling: 100 });
    await page.keyboard.press('Enter'); await page.keyboard.down('d'); await page.keyboard.down('w');
    await page.evaluate(() => window.frameQA.frames(12)); await page.keyboard.up('d'); await page.keyboard.up('w');
    const before = await page.evaluate(() => window.soloQA()); assert.equal(before.state, 'flying');
    await page.keyboard.press('v'); await page.evaluate(() => window.frameQA.frames(0));
    const fpv = await page.evaluate(() => window.soloQA());
    assert.equal(fpv.mode, 'fpv'); assert.equal(fpv.visible, false); assert.equal(fpv.near, .012);
    assert.deepEqual(fpv.position, before.position); assert.deepEqual(fpv.rotation, before.rotation); assert.deepEqual(fpv.shapes, before.shapes);
    assert(Math.abs(fpv.camera.reduce((sum, value, i) => sum + value * fpv.rotation[i], 0)) > .9999999);
    await page.evaluate(() => window.soloRender()); await screenshot('solo-fpv-banked');
    await page.locator('#camera-mode').click();
    const chase = await page.evaluate(() => window.soloQA());
    assert.equal(chase.mode, 'chase'); assert.equal(chase.visible, true); assert.equal(chase.near, .035);
    assert.deepEqual(chase.position, fpv.position); assert.deepEqual(chase.shapes, fpv.shapes);
    await page.evaluate(() => window.soloRender()); await screenshot('solo-chase-same-pose'); report.solo = { position: fpv.position, camera: fpv.camera, rotation: fpv.rotation, unchangedHitboxes: true };

    await page.goto(`${origin}/__camera-render`, { waitUntil: 'domcontentloaded' }); await page.waitForFunction(() => window.renderQA, null, { polling: 100 });
    const five = await page.evaluate(async () => { for (let tick = 1; tick < 55; tick++) { window.renderQA.step(tick); await new Promise(resolve => setTimeout(resolve, 5)); } return window.renderQA.step(55); });
    assert.deepEqual(Object.values(five.models).map(model => model.visible), [true, true, true, true, true]);
    assert.deepEqual(Object.values(five.models).map(model => model.colors[0]), ['ef346a', '1876ab', '18de37', '9f2beb', '000000']);
    assert.deepEqual(Object.values(five.models).map(model => model.trail), [true, true, false, false, true]);
    assert.deepEqual(Object.values(five.models).map(model => model.particles), [false, true, true, false, true]);
    await page.evaluate(() => window.renderQA.gallery()); await screenshot('five-independent-aircraft-effects'); report.five = five;
    const multiFpv = await page.evaluate(() => window.renderQA.fpv());
    assert.deepEqual(Object.values(multiFpv.models).map(model => model.visible), [false, true, true, true, true]);
    assert(Math.abs(multiFpv.camera.reduce((sum, value, i) => sum + value * multiFpv.models.p1.quaternion[i], 0)) > .9999999);
    const ko = await page.evaluate(() => window.renderQA.ko());
    assert.equal(ko.following, 'p2'); assert.deepEqual(Object.values(ko.models).map(model => model.visible), [false, false, true, true, true]);
    assert.equal(ko.models.p1.trail, false); assert.equal(ko.models.p1.particles, false);
    await screenshot('spectator-fpv-follows-survivor');
    const multiChase = await page.evaluate(() => window.renderQA.chase());
    assert.deepEqual(Object.values(multiChase.models).map(model => model.visible), [false, true, true, true, true]);
    const lobby = await page.evaluate(() => window.renderQA.lobby());
    assert(Object.values(lobby.models).every(model => !model.visible && !model.trail && !model.particles));
    const rematch = await page.evaluate(() => window.renderQA.rematch());
    assert.deepEqual(Object.values(rematch.models).map(model => model.visible), [true, false, true, false, true]);
    assert(Object.values(rematch.models).every(model => !model.trail && !model.particles));
    assert.equal(await page.evaluate(() => window.renderQA.dispose()), 0);
    report.multiplayer = { fpv: true, spectator: true, eliminatedHidden: true, sparseRematch: true, trailsCleared: true, disposed: true };
    assert.deepEqual(errors, []); report.errors = errors; report.passed = true;
    await fs.writeFile(`${output}/camera-effects-browser.json`, JSON.stringify(report, null, 2)); console.log(JSON.stringify(report, null, 2));
  } catch (error) {
    if (page) await page.screenshot({ path: `${output}/failure.png` }).catch(() => {});
    await fs.writeFile(`${output}/failure.json`, JSON.stringify({ ...report, error: error.message, errors }, null, 2)); throw error;
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
