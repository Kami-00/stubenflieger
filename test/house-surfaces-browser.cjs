// Actual scene, fixed camera positions, isolated local renderer; never calls a game API.
// SURFACE_QA_TAG=before|after preserves comparable captures and the exact bundled source.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const esbuild = require('esbuild');
const { chromium } = require('playwright');
const origin = (process.env.SURFACE_QA_ORIGIN || 'http://127.0.0.1:8796').replace(/\/$/, '');
const tag = process.env.SURFACE_QA_TAG || 'current';
const baseline = process.env.SURFACE_QA_BASELINE === '1';
assert(['127.0.0.1', 'localhost'].includes(new URL(origin).hostname));
assert(/^[a-z0-9-]+$/i.test(tag));
const output = path.resolve(process.env.SURFACE_QA_OUTPUT || 'D:/test/tmp/stubenflieger-house-surfaces', tag);
function assertOpaqueStructure(structures) {
  for (const structure of structures) for (const material of structure.materials) {
    assert.equal(material.opacity, 1, `${structure.name}: walls, floors and roofs must stay fully opaque.`);
    assert.equal(material.transparent, false, `${structure.name}: structure must use the opaque pass.`);
    assert.equal(material.depthWrite, true, `${structure.name}: structure must occlude everything behind it.`);
  }
}
const cases = [
  { id: 'cellar-floor-wall', camera: [4.9, -2.78, 4.55], look: [5.46, -3.15, 2.7], plane: [4.7, -2.2, 4.4] },
  { id: 'cellar-eg-wall-joint', camera: [7.1, -.3, 2.2], look: [5.5, 0, 1.5], plane: [7, -.25, 2.2] },
  { id: 'ground-floor-wall', camera: [9.15, .4, 6.6], look: [8.56, .02, 5], plane: [9.3, 1.1, 6.2] },
  { id: 'dining-floor-over-cellar-wall', camera: [2.8, .7, 6.25], look: [3, .02, 4.5], plane: [2.8, 1.1, 6.1] },
  { id: 'living-floor-over-cellar-wall', camera: [9.3, .55, 6.55], look: [10.7, .01, 4.25], plane: [9.3, 1.1, 6.2] },
  { id: 'upper-hall-over-ground-wall-west', camera: [4.1, 3.65, 6.5], look: [6.2, 3.155, 5.6], plane: [4.1, 4.2, 6.4] },
  { id: 'upper-hall-over-ground-wall-east', camera: [9.9, 3.6, 6.8], look: [7.5, 3.155, 5.65], plane: [9.9, 4.2, 6.4] },
  { id: 'ground-upper-wall-joint', camera: [7.1, 2.87, 2.2], look: [5.5, 3.15, 1.5], plane: [7, 3, 2.2] },
  { id: 'upper-floor-stair-edge', camera: [7.15, 3.48, 2.2], look: [5.5, 3.15, 3.4], plane: [7, 3.7, 2.2] },
  { id: 'upper-stairwell-down', camera: [7, 4.8, 4.5], look: [7, 1.4, 2.2], plane: [7, 4.2, 3.5] },
  { id: 'attic-floor-stair-edge', camera: [7.15, 6.63, 2.2], look: [5.5, 6.3, 3.4], plane: [7, 6.7, 2.2] },
  { id: 'attic-room-floor', camera: [5.05, 6.65, 6.1], look: [5.5, 6.3, 4.8], plane: [4.9, 7.1, 6.4] },
  { id: 'attic-roof-window', camera: [3.5, 7.3, 8.5], look: [1.175, 8.35, 8.2], plane: [3.3, 7.3, 8.4] },
  { id: 'attic-gable-roof-join', camera: [4.5, 8, 2.8], look: [2.8, 8.85, 0], plane: [4.5, 8, 2.8] },
  // A formerly faded near-wall view must now remain completely opaque.
  { id: 'ground-diagonal-cutaway', camera: [5.24, 1.35, 3.85], look: [6.5, .65, 2.1], plane: [6.8, 1.05, 2.1] },
  { id: 'fpv-near-ground-ceiling', plane: [2.8, 2.98, 3], fpv: [0, Math.PI / 2, 0] },
  // Keep the x=7 centreline while avoiding a lookAt target parallel to camera.up.
  { id: 'attic-ridge-up', camera: [7, 7.05, 2.2], look: [7, 10, 2.7], plane: [7, 7.05, 2.2] },
];
const harness = `
import {createScene} from './src/scene.js';
import {HOUSE} from './src/house.js';
import {createPhysics} from './src/physics.js';
import {createFlightCamera} from './src/camera.js';
import {Vector3, Quaternion, Euler} from 'three';
const physics={house:HOUSE,plane:{position:new Vector3()},blocks:[],getCeilingAt:()=>Infinity};
const view=createScene(document.querySelector('canvas'),physics,()=>({width:960,height:720}));
const collisionPhysics=createPhysics(HOUSE);
const flightCamera=createFlightCamera(view.camera,{mode:'fpv',traceCamera:(from,to,radius)=>collisionPhysics.traceCamera(from,to,radius)});
const planeLength=view.setAircraft('classic',1,'none').length;
const structuralIds=new Set(HOUSE.obstacles.filter(part=>['wall','floor','roof'].includes(part.kind)).map(part=>part.id));
const structural=[];
view.scene.traverse(object=>{if(object.isMesh&&structuralIds.has(object.name))structural.push(object);});
const stars=HOUSE.collectibles.map(star=>view.scene.getObjectByName(star.id));
function hideExtras(showPlane=false){view.plane.visible=showPlane;view.sling.visible=false;for(const star of stars)if(star)star.visible=false;view.effects?.clear();}
function materials(mesh){return Array.isArray(mesh.material)?mesh.material:[mesh.material];}
function materialState(){return structural.map(mesh=>({name:mesh.name,visible:mesh.visible&&mesh.parent.visible,materials:materials(mesh).map(mat=>({opacity:mat.opacity,transparent:mat.transparent,depthWrite:mat.depthWrite}))}));}
function pixels(){view.render();const gl=view.renderer.getContext(),data=new Uint8Array(gl.drawingBufferWidth*gl.drawingBufferHeight*4);gl.readPixels(0,0,gl.drawingBufferWidth,gl.drawingBufferHeight,gl.RGBA,gl.UNSIGNED_BYTE,data);return data;}
function diff(a,b){let changed=0,total=0,minX=960,minY=720,maxX=-1,maxY=-1;for(let i=0;i<a.length;i+=4){const amount=Math.abs(a[i]-b[i])+Math.abs(a[i+1]-b[i+1])+Math.abs(a[i+2]-b[i+2]);if(amount>24){changed++;const x=(i/4)%960,y=719-Math.floor(i/4/960);minX=Math.min(minX,x);minY=Math.min(minY,y);maxX=Math.max(maxX,x);maxY=Math.max(maxY,y);}total+=amount;}return {changed,total,bounds:changed?{minX,minY,maxX,maxY}:null};}
let savedMode=[];
window.surfaceQA={
 show(config,mode='natural'){
   for(const record of savedMode){record.mat.transparent=record.transparent;record.mat.opacity=record.opacity;record.mat.depthWrite=record.depthWrite;record.mat.needsUpdate=true;}savedMode=[];
   physics.plane.position.set(...config.plane);
   if(config.fpv){
     const quaternion=new Quaternion().setFromEuler(new Euler(...config.fpv,'YXZ'));
     flightCamera.reset();flightCamera.update({position:physics.plane.position,quaternion,length:planeLength},{immediate:true});
     view.plane.position.copy(physics.plane.position);view.plane.quaternion.copy(quaternion);
   }else{view.camera.near=.035;view.camera.updateProjectionMatrix();view.camera.position.set(...config.camera);view.camera.lookAt(...config.look);}
   for(let i=0;i<40;i++)view.update(1/30,4);
   hideExtras(Boolean(config.fpv));
   const natural=materialState();
   if(mode!=='natural')for(const mesh of structural)for(const mat of materials(mesh)){
     savedMode.push({mat,transparent:mat.transparent,opacity:mat.opacity,depthWrite:mat.depthWrite});
     mat.opacity=1;mat.depthWrite=true;if(mode==='opaque')mat.transparent=false;mat.needsUpdate=true;
   }
   view.render();return {natural,camera:view.camera.position.toArray(),quaternion:view.camera.quaternion.toArray(),faded:natural.filter(item=>item.visible&&item.materials.some(mat=>mat.opacity<.99)).map(item=>item.name),
     transparentAtFullOpacity:natural.filter(item=>item.visible&&item.materials.some(mat=>mat.opacity>.999&&mat.transparent)).length};
 },
 jitter(){const original=view.camera.position.clone(),baseline=pixels();view.camera.position.x+=.00001;if(window.surfaceCase.look)view.camera.lookAt(...window.surfaceCase.look);const perturbed=pixels();view.camera.position.copy(original);if(window.surfaceCase.look)view.camera.lookAt(...window.surfaceCase.look);view.render();return diff(baseline,perturbed);},
 transition(config){
   this.show(config,'natural');
   const before=materialState();
   view.camera.position.set(7,1.3,3);view.camera.lookAt(...config.plane);
   view.update(1/60,4);
   const partial=materialState();
   for(let i=0;i<80;i++)view.update(1/60,4);
   const returned=materialState();
   return {before,partial,returned};
 },
 stats(){
   view.scene.updateMatrixWorld(true);const triangles=new Map(),duplicates=[];
   for(const mesh of structural){const attribute=mesh.geometry.attributes.position,index=mesh.geometry.index;const count=index?index.count:attribute.count;
     for(let i=0;i<count;i+=3){const key=[0,1,2].map(offset=>{const v=new Vector3().fromBufferAttribute(attribute,index?index.getX(i+offset):i+offset).applyMatrix4(mesh.matrixWorld);return v.toArray().map(n=>Math.round(n*100000)).join(',');}).sort().join('|');
       if(triangles.has(key))duplicates.push([triangles.get(key),mesh.name]);else triangles.set(key,mesh.name);
     }
   }
   return {structureMeshes:structural.length,wallCount:HOUSE.obstacles.filter(p=>p.kind==='wall').length,floorCount:HOUSE.obstacles.filter(p=>p.kind==='floor').length,duplicateTriangles:duplicates};
 }
};
`;

(async () => {
  await fs.mkdir(output, { recursive: true });
  const root = path.resolve(__dirname, '..');
  const plugins = baseline ? [{ name: 'committed-scene-baseline', setup(build) {
    build.onLoad({ filter: /[\\/]scene\.js$/ }, args => {
      if (path.resolve(args.path) !== path.join(root, 'src', 'scene.js')) return;
      return { contents: execFileSync('git', ['show', 'HEAD:src/scene.js'], { cwd: root, encoding: 'utf8' }), loader: 'js', resolveDir: path.dirname(args.path) };
    });
  } }] : [];
  const bundle = await esbuild.build({ stdin: { contents: harness, resolveDir: root, sourcefile: 'house-surfaces-qa.js' }, bundle: true, write: false, format: 'esm', plugins });
  const bytes = bundle.outputFiles[0].contents;
  await fs.writeFile(path.join(output, 'house-surfaces-qa.js'), bytes);
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--enable-unsafe-swiftshader'] });
  const errors = [], requests = [], report = { tag, baseline, bundleHash: crypto.createHash('sha256').update(bytes).digest('hex'), cases: [] };
  let page;
  try {
    const context = await browser.newContext({ viewport: { width: 960, height: 720 }, deviceScaleFactor: 1, serviceWorkers: 'block' });
    await context.route('**/*', route => {
      const url = new URL(route.request().url());
      if (url.origin !== origin || url.pathname.startsWith('/api/')) { requests.push(url.href); return route.abort(); }
      if (url.pathname === '/__house-surfaces') return route.fulfill({ contentType: 'text/html', body: '<!doctype html><html><head><style>html,body{margin:0;overflow:hidden}canvas{width:960px;height:720px;display:block}</style></head><body><canvas></canvas><script type="module" src="/__house-surfaces.js"></script></body></html>' });
      if (url.pathname === '/__house-surfaces.js') return route.fulfill({ contentType: 'text/javascript', body: Buffer.from(bytes) });
      return route.abort();
    });
    page = await context.newPage(); page.on('pageerror', error => errors.push(error.message));
    await page.goto(origin + '/__house-surfaces'); await page.waitForFunction(() => window.surfaceQA);
    report.stats = await page.evaluate(() => window.surfaceQA.stats());
    assert(report.stats.structureMeshes > 0, 'The harness must identify the actual structural meshes.');
    for (const config of cases) {
      const result = { id: config.id, camera: config.camera, look: config.look, plane: config.plane, fpv: config.fpv, modes: {} };
      for (const mode of ['natural', 'opaque']) {
        const state = await page.evaluate(({ config, mode }) => { window.surfaceCase = config; return window.surfaceQA.show(config, mode); }, { config, mode });
        if (!baseline && mode === 'natural') assertOpaqueStructure(state.natural);
        if (config.fpv) {
          const expected = [2.78773, 2.99431, 3];
          state.camera.forEach((coordinate, index) => assert(Math.abs(coordinate - expected[index]) < .00002, 'FPV must use the real collision-traced camera pose.'));
        }
        const file = path.join(output, `${config.id}-${mode}.png`);
        await page.screenshot({ path: file });
        const jitter = await page.evaluate(() => window.surfaceQA.jitter());
        result.modes[mode] = { screenshot: file, camera: state.camera, quaternion: state.quaternion, faded: state.faded, transparentAtFullOpacity: state.transparentAtFullOpacity, jitter };
      }
      report.cases.push(result);
    }
    report.nearWallTransition=await page.evaluate(config=>window.surfaceQA.transition(config),cases.find(item=>item.id==='ground-diagonal-cutaway'));
    if(!baseline){
      for (const state of Object.values(report.nearWallTransition)) assertOpaqueStructure(state);
      assert.equal(report.stats.duplicateTriangles.length,0,'Structural mesh surfaces must not contain duplicate world-space triangles.');
    }
    assert.deepEqual(errors, []); assert.deepEqual(requests, []);
    report.browserHealthy = true; report.errors = errors; report.externalOrApiRequests = requests;
    await fs.writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify({ tag, output, browserHealthy: true, stats: report.stats, cases: report.cases.map(item=>({id:item.id,faded:item.modes.natural.faded.length,jitter:item.modes.natural.jitter.changed,opaqueJitter:item.modes.opaque.jitter.changed})) }, null, 2));
  } catch (error) {
    if(page)await page.screenshot({path:path.join(output,'failure.png')}).catch(()=>{});
    await fs.writeFile(path.join(output,'failure.json'),JSON.stringify({...report,error:error.message,errors,requests},null,2));
    throw error;
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
