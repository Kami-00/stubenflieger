// Render the real scene in an isolated local harness, without game debug hooks.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const esbuild = require('esbuild');
const { chromium } = require('playwright');
const origin = process.env.SCENE_QA_ORIGIN || 'http://127.0.0.1:8796';
const output = 'D:/test/tmp/stubenflieger-scene';
assert(['127.0.0.1', 'localhost'].includes(new URL(origin).hostname));

const harness = `
import {createScene} from './src/scene.js';
import {HOUSE} from './src/house.js';
import {Vector3, Matrix4, Mesh, BoxGeometry, MeshBasicMaterial} from 'three';
const physics={house:HOUSE,plane:{position:new Vector3(14,1.2,14)},blocks:[],getCeilingAt:()=>Infinity};
const view=createScene(document.querySelector('canvas'),physics,()=>({width:960,height:720}));
const trail=view.scene.children.find(object=>object.isLine);
const particles=view.scene.children.find(object=>object.isInstancedMesh&&object.count===28);
const stars=HOUSE.collectibles.map(data=>view.scene.getObjectByName(data.id));
const sun=view.scene.children.find(object=>object.isDirectionalLight);
const camera=new Vector3(17,5.5,17), centre=new Vector3(12.9,1.2,13.7);
const wall=new Mesh(new BoxGeometry(7,5,.12),new MeshBasicMaterial({color:'#6b737d'}));
wall.name='Opaque QA occluder';wall.position.copy(centre).addScaledVector(camera.clone().sub(centre).normalize(),1.5);wall.lookAt(camera);wall.visible=false;view.scene.add(wall);
function hideExtras(){view.plane.visible=false;view.sling.visible=false;for(const star of stars)star.visible=false;}
function configure(effect){
  physics.plane.position.set(14,1.2,14);view.camera.position.copy(camera);view.camera.lookAt(centre);
  view.setAircraft('classic',1,effect);view.resetTrail({x:11.7,y:1.2,z:13.3});
  for(let i=0;i<54;i++){const t=i/53;view.updateTrail({x:11.7+2.3*t,y:1.2,z:13.3+.7*t});}
  for(let i=0;i<12;i++)view.update(1/30,4);
  hideExtras();view.render();
}
function pixels(){view.render();const gl=view.renderer.getContext(),width=gl.drawingBufferWidth,height=gl.drawingBufferHeight;const data=new Uint8Array(width*height*4);gl.readPixels(0,0,width,height,gl.RGBA,gl.UNSIGNED_BYTE,data);return {data,width,height};}
function difference(a,b){let changed=0,total=0;for(let i=0;i<a.data.length;i+=4){const amount=Math.abs(a.data[i]-b.data[i])+Math.abs(a.data[i+1]-b.data[i+1])+Math.abs(a.data[i+2]-b.data[i+2]);if(amount>24)changed++;total+=amount;}return {changed,total};}
function sample(image,point){const projected=point.clone().project(view.camera);const x=Math.round((projected.x*.5+.5)*image.width),y=Math.round((projected.y*.5+.5)*image.height);let sum=0,count=0;for(let dx=-2;dx<=2;dx++)for(let dy=-2;dy<=2;dy++){const index=((y+dy)*image.width+x+dx)*4;if(index>=0&&index+2<image.data.length){sum+=(image.data[index]+image.data[index+1]+image.data[index+2])/3;count++;}}return sum/count;}
function coverage(){const positions=trail.geometry.attributes.position,points=[];if(trail.visible)for(let i=0;i<positions.count;i++)points.push(new Vector3().fromBufferAttribute(positions,i));const matrix=new Matrix4();if(particles.visible)for(let i=0;i<particles.count;i++){particles.getMatrixAt(i,matrix);for(const x of [-.5,.5])for(const y of [-.5,.5])for(const z of [-.5,.5])points.push(new Vector3(x,y,z).applyMatrix4(matrix));}const local=points.map(point=>wall.worldToLocal(point));return {points:local.length,maxZ:Math.max(...local.map(point=>point.z)),maxX:Math.max(...local.map(point=>Math.abs(point.x))),maxY:Math.max(...local.map(point=>Math.abs(point.y)))};}
window.sceneQA={
  compare(effect,occluded=false){wall.visible=occluded;configure('none');const background=pixels();configure(effect);const foreground=pixels();return {...difference(background,foreground),depthTest:trail.material.depthTest&&particles.material.depthTest,depthWrite:trail.material.depthWrite||particles.material.depthWrite,trailOrder:trail.renderOrder,particleOrder:particles.renderOrder,...(occluded?{coverage:coverage()}: {})};},
  shade(){wall.visible=false;configure('none');sun.castShadow=true;const dark=pixels();sun.castShadow=false;const lit=pixels();sun.castShadow=true;sun.shadow.needsUpdate=true;const points=[new Vector3(12,0,13.8),new Vector3(13,0,14),new Vector3(14,0,14.2)];return points.map(point=>({point:point.toArray(),shadow:sample(dark,point),unshadowed:sample(lit,point)}));},
  garden(effect){wall.visible=false;configure(effect);},
  rings(){return ['living-star-1','living-star-5','workshop-star-1'].map(id=>({id,count:view.scene.getObjectByName(id).children.filter(child=>child.isMesh&&child.geometry.type==='TorusGeometry').length}));},
  stairwell(){wall.visible=false;view.setAircraft('classic',1,'none');physics.plane.position.set(7,3.05,2.2);view.camera.position.set(7,2.75,2.2);view.camera.lookAt(5.5,3.25,2.2);for(let i=0;i<12;i++)view.update(1/30,4);hideExtras();view.render();},
  star(discovered){wall.visible=false;view.setAircraft('classic',1,'none');const data=HOUSE.collectibles.find(star=>star.id==='living-star-1');physics.plane.position.set(data.x,data.y,data.z);view.camera.position.set(data.x,data.y+.1,data.z+.95);view.camera.lookAt(data.x,data.y,data.z);view.resetCollectibles(discovered?[data.id]:[]);for(let i=0;i<12;i++)view.update(1/30,0);hideExtras();const object=view.scene.getObjectByName(data.id);object.visible=true;object.rotation.y=0;view.render();const current=pixels();const result={color:object.children.find(child=>child.isMesh).material.color.getHexString(),glints:object.children.find(child=>child.isGroup).visible};if(discovered&&this.firstStar)result.difference=difference(this.firstStar,current);else this.firstStar=current;return result;},
};
window.sceneQA.garden('mint');
`;

(async () => {
  await fs.mkdir(output, { recursive: true });
  const bundle = await esbuild.build({ stdin: { contents: harness, resolveDir: path.resolve(__dirname, '..'), sourcefile: 'scene-qa.js' }, bundle: true, write: false, format: 'esm' });
  await fs.writeFile(`${output}/scene-qa.js`, bundle.outputFiles[0].contents);
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--enable-unsafe-swiftshader'] });
  const errors = [], report = { effects: {}, occlusion: {}, screenshots: [] };
  let page;
  try {
    const context = await browser.newContext({ viewport: { width: 960, height: 720 }, deviceScaleFactor: 1, serviceWorkers: 'block' });
    await context.route('**/*', route => {
      const url = new URL(route.request().url());
      if (url.origin !== origin || url.pathname.startsWith('/api/')) return route.abort();
      if (url.pathname === '/__scene-qa') return route.fulfill({ contentType: 'text/html', body: '<!doctype html><html><head><style>html,body{margin:0;width:100%;height:100%;overflow:hidden}canvas{display:block;width:100%;height:100%}</style></head><body><canvas></canvas><script type="module" src="/__scene-qa.js"></script></body></html>' });
      if (url.pathname === '/__scene-qa.js') return route.fulfill({ contentType: 'text/javascript', body: Buffer.from(bundle.outputFiles[0].contents) });
      return route.abort();
    });
    page = await context.newPage(); page.on('pageerror', error => errors.push(error.message));
    await page.goto(`${origin}/__scene-qa`, { waitUntil: 'domcontentloaded' }); await page.waitForFunction(() => window.sceneQA);
    async function screenshot(name) { const file = `${output}/${name}.png`; await page.screenshot({ path: file }); report.screenshots.push(file); }
    report.shade = await page.evaluate(() => window.sceneQA.shade());
    assert(report.shade.some(sample => sample.unshadowed - sample.shadow > 8), 'The comparison lawn must really be in a cast shadow.');
    for (const effect of ['mint', 'spark', 'confetti']) {
      report.effects[effect] = await page.evaluate(value => window.sceneQA.compare(value), effect);
      assert(report.effects[effect].changed > 20, `${effect} must visibly change pixels over shaded grass`);
      assert.equal(report.effects[effect].depthTest, true); assert.equal(report.effects[effect].depthWrite, false);
      await screenshot(`shaded-grass-${effect}`);
      report.occlusion[effect] = await page.evaluate(value => window.sceneQA.compare(value, true), effect);
      const coverage = report.occlusion[effect].coverage;
      assert(coverage.maxZ < -.06 && coverage.maxX < 3.5 && coverage.maxY < 2.5, 'Every trail point and particle corner must lie fully behind the occluder face.');
      // A few changing shadow-edge pixels outside the occluder can vary between
      // software-rendered frames; a visible effect changes hundreds of pixels.
      assert(report.occlusion[effect].changed <= 8, `${effect} must disappear behind an opaque wall`);
    }
    await page.evaluate(() => window.sceneQA.stairwell()); await screenshot('continuous-stairwell-wall');
    report.firstStar = await page.evaluate(() => window.sceneQA.star(false)); await screenshot('star-first-discovery');
    report.repeatStar = await page.evaluate(() => window.sceneQA.star(true)); await screenshot('star-repeat-discovery');
    assert.notEqual(report.firstStar.color, report.repeatStar.color);
    assert.equal(report.firstStar.glints, true); assert.equal(report.repeatStar.glints, false);
    assert(report.repeatStar.difference.changed > 100, 'First and repeat discovery must be visibly distinct.');
    report.rings = await page.evaluate(() => window.sceneQA.rings());
    assert.deepEqual(report.rings.map(star => star.count), [0, 1, 2], 'Regular, low and low-cellar stars have zero, one and two reward rings.');
    assert.deepEqual(errors, []); report.passed = true; report.errors = errors;
    await fs.writeFile(`${output}/scene-browser.json`, JSON.stringify(report, null, 2)); console.log(JSON.stringify(report, null, 2));
  } catch (error) {
    if (page) await page.screenshot({ path: `${output}/failure.png` }).catch(() => {});
    await fs.writeFile(`${output}/failure.json`, JSON.stringify({ ...report, error: error.message, errors }, null, 2)); throw error;
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
