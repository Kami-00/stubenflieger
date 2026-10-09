// Real scene/physics, fixed door views, no production debug hooks or game APIs.
// DOOR_QA_BASELINE_REF=<commit> records previous geometry without fixed assertions.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { createHash } = require('node:crypto');
const esbuild = require('esbuild');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..'), origin = 'http://127.0.0.1:8796';
const baseline = process.env.DOOR_QA_BASELINE_REF, tag = process.env.DOOR_QA_TAG || (baseline ? 'before' : 'after');
assert(/^[a-z0-9-]+$/i.test(tag)); if (baseline) assert(/^[a-f0-9]{7,40}$/i.test(baseline));
const output = path.join(process.env.DOOR_QA_OUTPUT || 'D:/test/tmp/stubenflieger-doors', tag);
const harness = `
import {createScene} from './src/scene.js';
import {createPhysics} from './src/physics.js';
import {HOUSE,getDoorPose} from './src/house.js';
import {Vector3,Quaternion,Euler,Raycaster,MeshNormalMaterial,MeshDepthMaterial,RGBADepthPacking} from 'three';
const physics=createPhysics(HOUSE),view=createScene(document.querySelector('canvas'),physics,()=>({width:960,height:720}));
const normals=new MeshNormalMaterial(),depth=new MeshDepthMaterial({depthPacking:RGBADepthPacking});
const raycaster=new Raycaster(),meshes=[];
view.scene.traverse(object=>{if(object.isMesh)meshes.push(object);});
const stars=HOUSE.collectibles.map(item=>view.scene.getObjectByName(item.id));
const expectedQ=pose=>new Quaternion().setFromEuler(new Euler(...pose.rotation));
const point=array=>new Vector3(...array);
const opening=id=>HOUSE.openings.find(item=>item.id===id);
const portalCentre=hole=>new Vector3(hole.horizontal?(hole.from+hole.to)/2:hole.fixed,(hole.sill+hole.head)/2,hole.horizontal?hole.fixed:(hole.from+hole.to)/2);
const axes=hole=>({tangent:new Vector3(hole.horizontal?1:0,0,hole.horizontal?0:1),normal:new Vector3(hole.horizontal?0:1,0,hole.horizontal?1:0)});
function configure(config){
  const hole=opening(config.id),{tangent,normal}=axes(hole),centre=portalCentre(hole);
  const camera=config.camera?point(config.camera):centre.clone().addScaledVector(normal,config.side*.9).addScaledVector(tangent,(hole.to-hole.from)*.22).add(new Vector3(0,.09,0));
  const look=config.look?point(config.look):centre;
  physics.plane.position.copy(camera);view.camera.position.copy(camera);view.camera.lookAt(look);view.camera.updateMatrixWorld(true);
  view.update(1/60,4);view.plane.visible=false;view.sling.visible=false;view.effects.clear();
  for(const star of stars)if(star)star.visible=false;
  // Thermals are visual effects and can cover a jamb in the stairwell.
  view.scene.traverse(object=>{if(object.isMesh&&object.geometry?.type==='TorusGeometry')object.visible=false;});
  view.scene.updateMatrixWorld(true);view.render();return {camera:camera.toArray(),look:look.toArray()};
}
function pixels(){view.render();const gl=view.renderer.getContext(),data=new Uint8Array(960*720*4);gl.readPixels(0,0,960,720,gl.RGBA,gl.UNSIGNED_BYTE,data);return data;}
function masks(id){
  const hole=opening(id),{tangent,normal}=axes(hole),centre=portalCentre(hole),half=(hole.to-hole.from)/2;
  return [-1,1].map(side=>{
    const vertices=[];
    for(const width of [-.05,.05])for(const y of [-.94,.94])for(const offset of [-.11,.11])
      vertices.push(centre.clone().addScaledVector(tangent,side*half+width).addScaledVector(normal,offset).add(new Vector3(0,y,0)).project(view.camera));
    return {left:Math.max(0,Math.floor(Math.min(...vertices.map(v=>(v.x*.5+.5)*960)))),right:Math.min(959,Math.ceil(Math.max(...vertices.map(v=>(v.x*.5+.5)*960)))),
      top:Math.max(0,Math.floor(Math.min(...vertices.map(v=>(.5-v.y*.5)*720)))),bottom:Math.min(719,Math.ceil(Math.max(...vertices.map(v=>(.5-v.y*.5)*720))))};
  });
}
function difference(a,b,regions,pass,interior){let changed=0,amount=0,pixels=0,maxDelta=0;const points=[];for(let y=0;y<720;y++)for(let x=0;x<960;x++){
  if(!regions.some(r=>x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom))continue;
  if(interior&&!interior[y*960+x])continue;
  pixels++;const i=((719-y)*960+x)*4;
  // Packed depth bytes wrap between channels: compare decoded depth, not RGB.
  // Match this repository's three/src/.../packing.glsl.js UnpackFactors4.
  const unpack=data=>data[i]/256+data[i+1]/65536+data[i+2]/16777216+data[i+3]/(255*16777216);
  const delta=pass==='depth'?Math.abs(unpack(a)-unpack(b)):Math.abs(a[i]-b[i])+Math.abs(a[i+1]-b[i+1])+Math.abs(a[i+2]-b[i+2]);
  amount+=delta;maxDelta=Math.max(maxDelta,delta);if(delta>(pass==='depth'?1e-6:3)){changed++;if(points.length<12)points.push({x,y,delta});}
}return {pixels,changed,amount,maxDelta,points};}
function faceInteriors(a,b,regions){const result=new Uint8Array(960*720);
  // Coplanar fighting changes colour while keeping the face normal. A normal
  // discontinuity is a real edge where MSAA tie ownership can change one pixel.
  for(let y=1;y<719;y++)for(let x=1;x<959;x++){
    if(!regions.some(r=>x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom))continue;
    const i=((719-y)*960+x)*4;let same=true;
    for(let c=0;c<3;c++)if(Math.abs(a[i+c]-b[i+c])>1)same=false;
    for(let dy=-1;dy<=1&&same;dy++)for(let dx=-1;dx<=1&&same;dx++)for(let c=0;c<3;c++)
      if(Math.abs(a[i+c]-a[i+(dy*960+dx)*4+c])>1){same=false;break;}
    if(same)result[y*960+x]=1;
  }return result;
}
function materialState(){const frames=HOUSE.obstacles.filter(part=>part.doorFrame||HOUSE.doors.some(door=>part.id.startsWith(door.id+'-frame-')));
 return frames.map(part=>{const mesh=view.scene.getObjectByName(part.id),mat=mesh?.material;return {id:part.id,individualMesh:Boolean(mesh),opacity:mat?.opacity,transparent:mat?.transparent,depthWrite:mat?.depthWrite};});}
window.doorQA={
 ids:HOUSE.doors.map(door=>door.id),
 poses(){const checks=[];
   for(const door of HOUSE.doors)for(const open of [false,true]){
     view.setDoorOpen(door.id,open);physics.setDoorOpen(door.id,open);view.scene.updateMatrixWorld(true);
     const pose=getDoorPose(door,open),leaf=view.scene.getObjectByName(door.id+'-leaf'),position=new Vector3(),scale=new Vector3(),quaternion=new Quaternion();
     leaf.matrixWorld.decompose(position,quaternion,scale);const body=physics.doorBodies.get(door.id).obstacle.body;
     const error={renderPosition:position.distanceTo(point(pose.position)),renderSize:scale.distanceTo(point(pose.size)),renderAngle:quaternion.angleTo(expectedQ(pose)),
       physicsPosition:point([body.position.x,body.position.y,body.position.z]).distanceTo(point(pose.position)),physicsAngle:new Quaternion(body.quaternion.x,body.quaternion.y,body.quaternion.z,body.quaternion.w).angleTo(expectedQ(pose)),
       physicsSize:point([body.shapes[0].halfExtents.x*2,body.shapes[0].halfExtents.y*2,body.shapes[0].halfExtents.z*2]).distanceTo(point(pose.size))};
     checks.push({id:door.id,open,pose,error});
   }return checks;
 },
 jambs(){const records=[];view.scene.updateMatrixWorld(true);
   // A ray aimed from free portal space at its reveal must meet one exterior
   // owner, not a coplanar wall and trim competing for the same depth pixel.
   for(const door of HOUSE.doors){const hole=opening(door.id),{tangent,normal}=axes(hole),width=hole.to-hole.from;
     for(const side of [-1,1])for(const y of [.37,1.03,1.79])for(const offset of [-.043,.007,.039]){
       const start=portalCentre(hole);start.y=hole.sill+y;start.addScaledVector(normal,offset);
       raycaster.set(start,tangent.clone().multiplyScalar(side));raycaster.near=width/2-.004;raycaster.far=width/2+.004;
       const hits=raycaster.intersectObjects(meshes,false).filter(hit=>hit.object.name!==door.id+'-leaf'&&!hit.object.name.includes('-sign-'));
       const owners=[...new Set(hits.map(hit=>(hit.object.name||hit.object.uuid)+':'+(hit.instanceId??'')))];
       records.push({id:door.id,side,y,offset,owners,distances:hits.map(hit=>hit.distance)});
     }
   }return records;
 },
 show(config,pass='natural'){const pose=configure(config);view.scene.overrideMaterial=pass==='normal'?normals:pass==='depth'?depth:null;view.render();return {...pose,masks:masks(config.id)};},
 stability(config,pass='natural'){
   this.show(config,pass);const regions=masks(config.id),original=pixels(),position=view.camera.position.clone();
   const beforeOrders=meshes.map(mesh=>mesh.renderOrder);
   meshes.forEach((mesh,index)=>mesh.renderOrder=meshes.length-index);const reversed=pixels();meshes.forEach((mesh,index)=>mesh.renderOrder=beforeOrders[index]);
   view.camera.position.x+=.00001;view.camera.updateMatrixWorld(true);const shifted=pixels();view.camera.position.copy(position);view.camera.updateMatrixWorld(true);view.render();
   const result={order:difference(original,reversed,regions,pass),microCamera:difference(original,shifted,regions,pass)};
   if(pass==='natural'){
     view.scene.overrideMaterial=normals;const normalOriginal=pixels();
     meshes.forEach((mesh,index)=>mesh.renderOrder=meshes.length-index);const normalReversed=pixels();
     meshes.forEach((mesh,index)=>mesh.renderOrder=beforeOrders[index]);view.scene.overrideMaterial=null;view.render();
     const interior=faceInteriors(normalOriginal,normalReversed,regions);
     result.faceInteriorOrder=difference(original,reversed,regions,pass,interior);
     result.faceInteriorMicroCamera=difference(original,shifted,regions,pass,interior);
   }return result;
 },
 staticGeometry(){return JSON.stringify(HOUSE.obstacles.map(({id,kind,size,position,rotation})=>({id,kind,size,position,rotation})));},
 metadata(){return {doors:HOUSE.doors,openings:HOUSE.openings,stars:HOUSE.collectibles.map(star=>star.id),frames:materialState()};}
};
`;

(async()=>{
  await fs.mkdir(output,{recursive:true});
  const plugins=baseline?[{name:'committed-baseline',setup(build){build.onLoad({filter:/[\\/]src[\\/].*\.js$/},args=>{
    const relative=path.relative(root,args.path).replaceAll('\\','/');if(!relative.startsWith('src/'))return;
    return {contents:execFileSync('git',['show',baseline+':'+relative],{cwd:root,encoding:'utf8'}),loader:'js',resolveDir:path.dirname(args.path)};
  });}}]:[];
  const bundle=await esbuild.build({stdin:{contents:harness,resolveDir:root,sourcefile:'door-qa.js'},bundle:true,write:false,format:'esm',plugins});
  await fs.writeFile(path.join(output,'door-qa.js'),bundle.outputFiles[0].contents);
  const browser=await chromium.launch({channel:'msedge',headless:true,args:['--enable-unsafe-swiftshader']});
  const errors=[],requests=[],report={tag,baseline:baseline||null,views:[]};let page;
  try{
    const context=await browser.newContext({viewport:{width:960,height:720},deviceScaleFactor:1,serviceWorkers:'block'});
    await context.route('**/*',route=>{
      const url=new URL(route.request().url());
      if(url.origin!==origin||url.pathname.startsWith('/api/')){requests.push(url.href);return route.abort();}
      if(url.pathname==='/__doors')return route.fulfill({contentType:'text/html',body:'<!doctype html><style>body{margin:0}canvas{display:block}</style><canvas></canvas><script type="module" src="/__doors.js"></script>'});
      if(url.pathname==='/__doors.js')return route.fulfill({contentType:'text/javascript',body:Buffer.from(bundle.outputFiles[0].contents)});
      return route.abort();
    });
    page=await context.newPage();page.on('pageerror',error=>errors.push(error.message));
    await page.goto(origin+'/__doors');await page.waitForFunction(()=>window.doorQA);
    report.metadata=await page.evaluate(()=>window.doorQA.metadata());
    report.staticGeometryHash=createHash('sha256').update(await page.evaluate(()=>window.doorQA.staticGeometry())).digest('hex');
    report.poses=await page.evaluate(()=>window.doorQA.poses());
    assert.equal(report.poses.length,44);
    for(const check of report.poses)for(const [kind,error]of Object.entries(check.error))assert(error<1e-6,check.id+' '+kind+': '+error);
    report.jambRays=await page.evaluate(()=>window.doorQA.jambs());
    report.missingJambs=report.jambRays.filter(ray=>!ray.owners.length);
    report.coincidentJambs=report.jambRays.filter(ray=>ray.owners.length>1);
    const ids=await page.evaluate(()=>window.doorQA.ids);
    const views=ids.flatMap(id=>[-1,1].map(side=>({id,side,name:id+(side<0?'-back':'-front')})));
    views.push({id:'hall-stairs',side:1,name:'hall-stairs-wide',camera:[7.75,1.6,6.7],look:[6,1.05,5]},
      {id:'front-door',side:-1,name:'front-door-wide',camera:[7.8,1.6,10.35],look:[6.1,1.05,12]},
      {id:'hall-stairs',side:1,name:'hall-stairs-open-leaf-wide',camera:[6.3,1.6,6.4],look:[7.85,1.2,4.4]},
      {id:'front-door',side:-1,name:'front-door-open-leaf-wide',camera:[6.3,1.6,10],look:[7.7,1.05,11.4]});
    for(const config of views){
      const pose=await page.evaluate(config=>window.doorQA.show(config),config);
      await page.screenshot({path:path.join(output,config.name+'.png')});
      const result={...config,...pose,passes:{}};
      for(const pass of ['natural','normal','depth']){
        result.passes[pass]=await page.evaluate(({config,pass})=>window.doorQA.stability(config,pass),{config,pass});
        if(config.name.endsWith('-wide'))await page.screenshot({path:path.join(output,config.name+'-'+pass+'.png')});
      }
      report.views.push(result);
    }
    if(!baseline){
      if(process.env.DOOR_QA_COMPARE){
        const previous=JSON.parse(await fs.readFile(process.env.DOOR_QA_COMPARE,'utf8'));
        assert.equal(report.staticGeometryHash,previous.staticGeometryHash,'Stationary collision boxes must remain unchanged');
        assert.deepEqual(report.metadata.stars,previous.metadata.stars,'All authored star IDs stay stable');
        const holes=metadata=>metadata.openings.map(({id,floor,type,open,horizontal,fixed,from,to,sill,head})=>({id,floor,type,open,horizontal,fixed,from,to,sill,head}));
        assert.deepEqual(holes(report.metadata),holes(previous.metadata),'Door/window portal contours must stay unchanged');
      }
      assert.equal(report.missingJambs.length,0,'No reveal surface may disappear');
      assert.equal(report.coincidentJambs.length,0,'Wall/trim must not provide competing coplanar reveal surfaces');
      for(const frame of report.metadata.frames){assert(frame.individualMesh,frame.id);assert.equal(frame.opacity,1);assert.equal(frame.transparent,false);assert.equal(frame.depthWrite,true);}
      for(const view of report.views.filter(view=>!view.name.endsWith('-wide')))assert.equal(view.passes.natural.faceInteriorOrder.changed,0,view.name+': draw-order dependent face interior pixels');
    }
    assert.deepEqual(errors,[]);assert.deepEqual(requests,[]);report.passed=true;
    await fs.writeFile(path.join(output,'report.json'),JSON.stringify(report,null,2));
    console.log(JSON.stringify({passed:true,tag,output,doorPoses:report.poses.length,jambRays:report.jambRays.length,missingJambs:report.missingJambs.length,coincidentJambs:report.coincidentJambs.length,
      views:report.views.map(view=>({name:view.name,order:view.passes.natural.order.changed,faceInteriorOrder:view.passes.natural.faceInteriorOrder.changed,jitter:view.passes.natural.microCamera.changed,faceInteriorJitter:view.passes.natural.faceInteriorMicroCamera.changed,normalJitter:view.passes.normal.microCamera.changed,depthJitter:view.passes.depth.microCamera.changed}))},null,2));
  }catch(error){if(page)await page.screenshot({path:path.join(output,'failure.png')}).catch(()=>{});await fs.writeFile(path.join(output,'report.json'),JSON.stringify({...report,passed:false,error:error.message,errors,requests},null,2));throw error;}
  finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
