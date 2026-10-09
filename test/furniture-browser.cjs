// Real room/fixture rendering, isolated browser with no network or game API.
// FURNITURE_QA_BASELINE_REF preserves the old source; FURNITURE_QA_COMPARE reads its report.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const esbuild = require('esbuild');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..'), origin = 'http://127.0.0.1:8796';
const baseline = process.env.FURNITURE_QA_BASELINE_REF, tag = process.env.FURNITURE_QA_TAG || (baseline ? 'before' : 'after');
if (baseline) assert(/^[0-9a-f]{7,40}$/i.test(baseline)); assert(/^[a-z0-9-]+$/i.test(tag));
const output = path.join(process.env.FURNITURE_QA_OUTPUT || 'D:/test/tmp/stubenflieger-furniture', tag);
const viewFilter = process.env.FURNITURE_QA_VIEW_FILTER?.split(',');
const functionalPairs = [
  ['kitchen-Kuechenhocker','kitchen-Kuecheninsel'],['workshop-Hocker','workshop-Werkbank'],['office-Schreibtischstuhl','office-Schreibtisch'],
  ['nursery-Kinderstuhl','nursery-Kinderschreibtisch'],['attic-east-Bastelstuhl','attic-east-Basteltisch'],
];
const closeups = [
  { id: 'functional-hall-open-door', room: 'hall', camera: [6.25,2.45,9.05],look:[8,.55,10.45],openDoors:['front-door'] },
  { id: 'functional-kitchen-seat', room: 'kitchen', camera: [4.65,1.6,11.25],look:[2.55,.45,9.95] },
  { id: 'functional-workshop-seat', room: 'workshop', camera: [4.15,-1.65,3.15],look:[2.2,-2.65,1.05] },
  { id: 'functional-office-seat', room: 'office', camera: [12.2,4.8,3.1],look:[10.35,3.7,1.0] },
  { id: 'functional-nursery-seat', room: 'nursery', camera: [2.7,4.9,9.4],look:[4.1,3.65,10.95] },
  { id: 'functional-attic-seat', room: 'attic-east', camera: [12.0,7.85,3.25],look:[10.3,6.8,1.2] },
  { id: 'functional-living-tv', room: 'living', camera: [12.3,1.6,.75],look:[9.95,.55,3.05] },
  { id: 'functional-bathroom-access', room: 'bathroom', camera: [11.1,4.75,9.8],look:[13.05,3.65,11.5] },
  { id: 'functional-bathroom-overhead', room: 'bathroom', camera: [13.6,5.85,9.8],look:[12.5,3.55,11.45] },
  { id: 'functional-guest-wc-access', room: 'guest-wc', camera: [11.35,1.55,9.45],look:[13,.5,8.2] },
  { id: 'functional-dining-seats', room: 'dining', camera: [.7,2.65,6.2],look:[2.7,.45,3.5] },
  { id: 'functional-garden-seats', room: 'garden', camera: [9.4,3,-4.7],look:[6.2,.5,-1.9] },
  { id: 'functional-laundry-access', room: 'laundry', camera: [12.7,-1.45,3.6],look:[10,-2.5,1.25] },
  { id: 'functional-laundry-rack', room: 'laundry', camera: [11.8,-1.55,3.8],look:[9.9,-2.45,2.35] },
  { id: 'functional-storage-access', room: 'storage', camera: [11.65,1.65,11.6],look:[13.2,.85,10.6] },
  { id: 'functional-sideboard-access', room: 'dining', camera: [2.5,1.6,5.05],look:[.9,.45,6.05] },
  { id: 'functional-raised-bed', room: 'garden', camera: [14.3,1.65,9.7],look:[16.6,.85,7] },
  { id: 'functional-reading-seat', room: 'upper-hall-south', camera: [6.0,5.45,7.5],look:[6.9,3.8,10.6] },
  { id: 'sofa-front', room: 'living', camera: [11.35, 1.1, 2.5], look: [13.45, .48, 4.3] },
  { id: 'sofa-end', room: 'living', camera: [11.75, .75, 6.4], look: [13.35, .4, 4.65] },
  { id: 'living-shelf', room: 'living', camera: [10.8, 1.35, 2.05], look: [10, .95, .3] },
  { id: 'living-armchair', room: 'living', camera: [9.1, .75, 2.6], look: [10.52, .45, 1.68] },
  { id: 'dining-chair', room: 'dining', camera: [1.7, .8, 1.85], look: [1.18, .5, 2.8] },
  { id: 'dining-under-table', room: 'dining', camera: [2.7, .25, 4.95], look: [2.7, .33, 3.55] },
  { id: 'kitchen-units', room: 'kitchen', camera: [2.5, 1.5, 8.8], look: [.7, .7, 7.7] },
  { id: 'storage-shelves', room: 'storage', camera: [12.4, 1.3, 11.15], look: [13.2, 1, 10.35] },
  { id: 'storage-cabinet', room: 'storage', camera: [12.4, 1.25, 10.65], look: [13.7, 1, 11.3] },
  { id: 'guest-toilet', room: 'guest-wc', camera: [12.1, 1.05, 8.95], look: [13.53, .45, 8.4] },
  { id: 'bedroom-bed', room: 'bedroom', camera: [4.6, 4.6, 3.3], look: [2.6, 3.65, .85] },
  { id: 'bedroom-headboard', room: 'bedroom', camera: [.85, 4.25, 1.45], look: [2.5, 3.65, .25] },
  { id: 'nursery-bed', room: 'nursery', camera: [3.4, 4.55, 8.85], look: [1.25, 3.7, 7.6] },
  { id: 'nursery-toy-shelf', room: 'nursery', camera: [3.7, 4.25, 10.1], look: [5.14, 3.8, 9.2] },
  { id: 'office-shelf', room: 'office', camera: [12, 4.5, 2.5], look: [13.65, 4.05, .65] },
  { id: 'bath-rim', room: 'bathroom', camera: [10.8, 4.65, 8.8], look: [12.8, 3.5, 7.65] },
  { id: 'bath-basin', room: 'bathroom', camera: [10.5, 4.35, 10], look: [8.8, 3.92, 9.5] },
  { id: 'workshop-table', room: 'workshop', camera: [2.7, -1.6, 2.4], look: [2.3, -2.5, .5] },
  { id: 'laundry-machines', room: 'laundry', camera: [10.2, -1.8, 2.5], look: [9.6, -2.65, .7] },
  { id: 'pantry-west-shelf', room: 'pantry', camera: [2.4, -1.7, 9.4], look: [.4, -2.2, 9.5] },
  { id: 'pantry-east-shelf', room: 'pantry', camera: [3.5, -1.7, 10.8], look: [5.12, -2.15, 10.1] },
  { id: 'upper-reading-shelf', room: 'upper-hall-south', camera: [6.1, 4.7, 9], look: [8.1, 4, 10] },
  { id: 'attic-low-shelf', room: 'attic-east', camera: [10.7, 7.5, 2.5], look: [12.4, 6.9, 1.5] },
  { id: 'garden-table-chairs', room: 'garden', camera: [8.8, 1.3, -3.7], look: [6.2, .45, -1.85] },
  { id: 'garden-raised-bed', room: 'garden', camera: [14.8, 1.65, 9.6], look: [16.6, .7, 7] },
  { id: 'garden-tree', room: 'garden', camera: [17.8, 4.5, -.7], look: [15.5, 3.7, -3.2] },
];
const harness = `
import {createScene} from './src/scene.js';
import {createPhysics} from './src/physics.js';
import {createFlightCamera} from './src/camera.js';
import {HOUSE,FLOORS} from './src/house.js';
import {Vector3,Quaternion,Euler,Matrix4,Raycaster,MeshNormalMaterial,MeshDepthMaterial,RGBADepthPacking,Color} from 'three';
const setupStart=performance.now();
const physics=createPhysics(HOUSE),view=createScene(document.querySelector('canvas'),physics,()=>({width:960,height:720}));
const setupMs=performance.now()-setupStart;
const flightCamera=createFlightCamera(view.camera,{mode:'fpv',traceCamera:(from,to,r)=>physics.traceCamera(from,to,r)});
const normals=new MeshNormalMaterial(),depth=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),raycaster=new Raycaster();
const meshes=[];view.scene.traverse(o=>{if(o.isMesh)meshes.push(o);});
const source=new Map(HOUSE.obstacles.map(p=>[p.id,p])),matrices=new Map(),matrix=new Matrix4();
const key=m=>m.elements.map(n=>Math.round(n*10000)).join(',');
for(const part of HOUSE.obstacles){matrix.compose(new Vector3(...part.position),new Quaternion().setFromEuler(new Euler(...part.rotation)),new Vector3(...part.size));matrices.set(key(matrix),part.id);}
function sourceId(hit){const ranges=hit.object.userData.surfaceParts;if(ranges){const at=hit.faceIndex*3;return ranges.find(p=>at>=p.start&&at<p.start+p.count)?.id;}
 if(source.has(hit.object.name))return hit.object.name;if(hit.instanceId!==undefined){hit.object.getMatrixAt(hit.instanceId,matrix);matrix.premultiply(hit.object.matrixWorld);return matrices.get(key(matrix));}}
const solids=HOUSE.obstacles.map(p=>({...p,inverse:new Quaternion().setFromEuler(new Euler(...p.rotation)).invert()}));
function inside(point,part){const p=point.clone().sub(new Vector3(...part.position)).applyQuaternion(part.inverse);return ['x','y','z'].every((axis,i)=>Math.abs(p[axis])<part.size[i]/2-1e-6);}
function hideExtras(){view.plane.visible=false;view.sling.visible=false;view.effects.clear();for(const star of HOUSE.collectibles)view.scene.getObjectByName(star.id).visible=false;
 view.scene.traverse(o=>{if(o.isMesh&&o.geometry?.type==='TorusGeometry')o.visible=false;});}
function show(config,pass='natural'){
 for(const door of HOUSE.doors)view.setDoorOpen(door.id,config.openDoors?config.openDoors.includes(door.id):!config.id?.startsWith('room-')&&!config.id?.startsWith('functional-'));
 physics.plane.position.set(...(config.plane||config.camera));view.camera.position.set(...config.camera);view.camera.lookAt(...config.look);view.camera.updateMatrixWorld(true);
 view.update(1/60,4);hideExtras();view.scene.overrideMaterial=pass==='normal'?normals:pass==='depth'?depth:null;view.scene.updateMatrixWorld(true);view.render();
 return {camera:view.camera.position.toArray(),look:config.look};}
function pixels(){view.render();const gl=view.renderer.getContext(),data=new Uint8Array(960*720*4);gl.readPixels(0,0,960,720,gl.RGBA,gl.UNSIGNED_BYTE,data);return data;}
function interior(a,b){const output=new Uint8Array(960*720);for(let y=1;y<719;y++)for(let x=1;x<959;x++){const i=(y*960+x)*4;let same=true;
 for(let c=0;c<3;c++)if(Math.abs(a[i+c]-b[i+c])>1)same=false;
 for(let dy=-1;dy<=1&&same;dy++)for(let dx=-1;dx<=1&&same;dx++)for(let c=0;c<3;c++)if(Math.abs(a[i+c]-a[i+(dy*960+dx)*4+c])>1){same=false;break;}
 if(same)output[y*960+x]=1;}return output;}
function difference(a,b,pass,mask){let changed=0,total=0,maximum=0;const points=[];
 for(let i=0;i<a.length;i+=4){if(mask&&!mask[i/4])continue;const unpack=data=>data[i]/256+data[i+1]/65536+data[i+2]/16777216+data[i+3]/(255*16777216);
 const delta=pass==='depth'?Math.abs(unpack(a)-unpack(b)):Math.abs(a[i]-b[i])+Math.abs(a[i+1]-b[i+1])+Math.abs(a[i+2]-b[i+2]);total+=delta;maximum=Math.max(maximum,delta);
 if(delta>(pass==='depth'?1e-6:3)){changed++;if(points.length<8)points.push({x:i/4%960,y:719-Math.floor(i/4/960),delta});}}
 return {changed,total,maximum,points};}
function auditCoplanar(){
 const groups=new Map();for(const part of HOUSE.obstacles.filter(p=>p.roomId&&p.rotation.every(v=>Math.abs(v)<1e-9)))for(let axis=0;axis<3;axis++)for(const sign of [-1,1]){
   const value=part.position[axis]+sign*part.size[axis]/2,id=axis+':'+sign+':'+Math.round(value*1e6);if(!groups.has(id))groups.set(id,[]);groups.get(id).push({part,axis,sign,value});}
 const records=[];let blocked=0;
 for(const faces of groups.values())for(let i=0;i<faces.length;i++)for(const b of faces.slice(i+1)){
   const a=faces[i];if(a.part.roomId!==b.part.roomId)continue;const axes=[0,1,2].filter(v=>v!==a.axis);
   const spans=axes.map(axis=>[Math.max(a.part.position[axis]-a.part.size[axis]/2,b.part.position[axis]-b.part.size[axis]/2),Math.min(a.part.position[axis]+a.part.size[axis]/2,b.part.position[axis]+b.part.size[axis]/2)]);
   if(spans.some(([lo,hi])=>hi-lo<.0001))continue;
   for(const u of [.23,.5,.77])for(const v of [.23,.5,.77]){
     const p=new Vector3();p.setComponent(a.axis,a.value);p.setComponent(axes[0],spans[0][0]+u*(spans[0][1]-spans[0][0]));p.setComponent(axes[1],spans[1][0]+v*(spans[1][1]-spans[1][0]));
     const direction=new Vector3().setComponent(a.axis,-a.sign),start=p.clone().addScaledVector(direction,-.02);
     if(solids.some(part=>inside(start,part))){blocked++;continue;}
     raycaster.set(start,direction);raycaster.near=0;raycaster.far=.021;
     const hits=raycaster.intersectObjects(meshes,false).map(hit=>({...hit,id:sourceId(hit)})).filter(hit=>hit.id);
     const nearest=hits[0]?.distance,owners=[...new Set(hits.filter(hit=>Math.abs(hit.distance-nearest)<1e-5).map(hit=>hit.id))];
     records.push({room:a.part.roomId,parts:[a.part.id,b.part.id],axis:a.axis,sign:a.sign,position:p.toArray(),owners});
   }
 }return {tested:records.length,blocked,duplicates:records.filter(r=>r.owners.length>1),missing:records.filter(r=>!r.owners.length),records};
}
window.furnitureQA={
 show,
 functional(pairs){const chairs=HOUSE.furniture.filter(f=>f.kind==='chair').map(chair=>{const parts=HOUSE.obstacles.filter(p=>p.furnitureId===chair.id),seat=parts.find(p=>p.kind==='chair-seat'),back=parts.find(p=>p.kind==='chair-back');
   const direction=new Vector3(seat.position[0]-back.position[0],0,seat.position[2]-back.position[2]).normalize();
   const targetId=pairs.find(p=>p[0]===chair.id)?.[1]||(chair.roomId==='dining'?'dining-Esstisch':chair.roomId==='garden'?'garden-Terrassentisch':null);
   const target=HOUSE.obstacles.find(p=>p.furnitureId===targetId&&p.kind==='tabletop');
   const targetDirection=target?new Vector3(target.position[0]-seat.position[0],0,target.position[2]-seat.position[2]).normalize():null;
   return {id:chair.id,room:chair.roomId,seat:seat.position,back:back.position,direction:direction.toArray(),target:targetId,dot:targetDirection?direction.dot(targetDirection):null};});return {chairs};},
 colors(){const records=[];for(const mesh of meshes.filter(m=>m.userData.surfaceParts))for(const part of mesh.userData.surfaceParts){const expected=new Color(source.get(part.id).color),color=mesh.geometry.attributes.color;let maximum=0;
   for(let i=part.start;i<part.start+part.count;i++)maximum=Math.max(maximum,Math.abs(color.getX(i)-expected.r),Math.abs(color.getY(i)-expected.g),Math.abs(color.getZ(i)-expected.b));records.push({id:part.id,count:part.count,maximum});}return records;},
 metadata(){return {setupMs,furnitureBatches:meshes.filter(m=>m.userData.surfaceParts).map(m=>({name:m.name,parts:m.userData.surfaceParts.length,triangles:m.geometry.attributes.position.count/3,vertexColors:m.material.vertexColors})),rooms:HOUSE.rooms.map(r=>({id:r.id,name:r.name,floor:r.floor,bounds:r.bounds,furniture:HOUSE.furniture.filter(f=>f.roomId===r.id).length})),stars:HOUSE.collectibles.map(s=>s.id),doors:HOUSE.doors.map(d=>d.id)};},
 rooms(){return HOUSE.rooms.flatMap(room=>{const b=room.bounds,base=FLOORS[room.floor]||0;
   if(room.floor==='garden')return[{id:'room-garden-north',room:room.id,camera:[-3,7,-5.5],look:[7,1,4]},{id:'room-garden-south',room:room.id,camera:[17,8,16],look:[7,2,5]}];
   return [1,-1].map((side,i)=>{const y=base+(room.floor==='dg'?1.25:2.35),candidate=new Vector3(side>0?b.maxX-.45:b.minX+.45,y,side>0?b.maxZ-.45:b.minZ+.45);
     if(solids.some(p=>inside(candidate,p)))candidate.set((b.minX+b.maxX)/2,base+1.35,(b.minZ+b.maxZ)/2);
     return {id:'room-'+room.id+'-'+i,room:room.id,camera:candidate.toArray(),look:[(b.minX+b.maxX)/2,base+.7,(b.minZ+b.maxZ)/2]};});});},
 audit(){for(const door of HOUSE.doors)view.setDoorOpen(door.id,true);view.scene.updateMatrixWorld(true);return auditCoplanar();},
 stability(config,pass='natural'){
   show(config,pass);const original=pixels(),orders=meshes.map(m=>m.renderOrder),position=view.camera.position.clone();
   meshes.forEach((m,i)=>m.renderOrder=meshes.length-i);const reversed=pixels();meshes.forEach((m,i)=>m.renderOrder=orders[i]);
   view.camera.position.x+=.00001;view.camera.updateMatrixWorld(true);const shifted=pixels();view.camera.position.copy(position);view.camera.updateMatrixWorld(true);
   const result={order:difference(original,reversed,pass),microCamera:difference(original,shifted,pass)};
   if(pass==='natural'){view.scene.overrideMaterial=normals;const normalA=pixels();meshes.forEach((m,i)=>m.renderOrder=meshes.length-i);const normalB=pixels();meshes.forEach((m,i)=>m.renderOrder=orders[i]);
     const mask=interior(normalA,normalB);result.faceInteriorOrder=difference(original,reversed,pass,mask);result.faceInteriorMicroCamera=difference(original,shifted,pass,mask);
     result.facePointSources=[];const furnitureMask=new Uint8Array(mask.length);
     for(let at=0;at<mask.length;at++){const i=at*4;if(!mask[at]||Math.abs(original[i]-reversed[i])+Math.abs(original[i+1]-reversed[i+1])+Math.abs(original[i+2]-reversed[i+2])<=3)continue;
       const x=at%960,y=719-Math.floor(at/960);raycaster.near=0;raycaster.far=120;raycaster.setFromCamera({x:(x+.5)/480-1,y:1-(y+.5)/360},view.camera);
       const hits=raycaster.intersectObjects(meshes,false).slice(0,4).map(hit=>({id:sourceId(hit),name:hit.object.name,distance:hit.distance,point:hit.point.toArray()}));
       if(source.get(hits[0]?.id)?.roomId)furnitureMask[at]=1;
       if(result.facePointSources.length<8)result.facePointSources.push({x,y,hits});
     }
     result.furnitureFaceOrder=difference(original,reversed,pass,furnitureMask);}
   view.scene.overrideMaterial=pass==='normal'?normals:pass==='depth'?depth:null;view.render();return result;
 },
 boundary(config){
   view.scene.overrideMaterial=null;physics.plane.position.set(...config.plane);view.camera.position.set(...config.camera);view.camera.lookAt(...config.look);
   if(config.fpv){const quaternion=view.camera.quaternion.clone();flightCamera.reset();flightCamera.update({position:physics.plane.position,quaternion,length:.5},{immediate:true});}
   for(let i=0;i<90;i++)view.update(1/60,4);hideExtras();view.render();const group=view.scene.getObjectByName('Gartengrenzen');
   const original=pixels(),visible=Boolean(group?.visible);if(group)group.visible=false;
   view.renderer.render(view.scene,view.camera);const gl=view.renderer.getContext(),without=new Uint8Array(original.length);gl.readPixels(0,0,960,720,gl.RGBA,gl.UNSIGNED_BYTE,without);
   if(group)group.visible=visible;
   const pixelProof={changed:difference(original,without,'natural').changed,red:0,gapSamples:0,stripeSamples:0,occludedSamples:0};
   const deltaAt=i=>Math.abs(original[i]-without[i])+Math.abs(original[i+1]-without[i+1])+Math.abs(original[i+2]-without[i+2]);
   const redAt=i=>(original[i]-original[i+1])-(without[i]-without[i+1])>8&&(original[i]-original[i+2])-(without[i]-without[i+2])>8;
   for(let i=0;i<original.length;i+=4)if(redAt(i))pixelProof.red++;
   function visibleMesh(mesh){for(let o=mesh;o;o=o.parent)if(!o.visible)return false;return true;}
   const blockers=meshes.filter(m=>!m.name.startsWith('garden-boundary-')&&visibleMesh(m));
   for(const mesh of group?.children.filter(m=>m.visible)||[]){
     const planeAxis=mesh.name.endsWith('Y')?1:mesh.name.endsWith('X')?0:2,axes=[0,1,2].filter(a=>a!==planeAxis);
     for(let u=-.9;u<=.901;u+=.06)for(let v=-.9;v<=.901;v+=.06){
       const p=new Vector3(...config.plane);p.setComponent(planeAxis,mesh.position.getComponent(planeAxis));p.setComponent(axes[0],p.getComponent(axes[0])+u);p.setComponent(axes[1],p.getComponent(axes[1])+v);
       const screen=p.clone().project(view.camera),x=Math.floor((screen.x+1)*480),y=Math.floor((screen.y+1)*360);
       if(x<0||x>=960||y<0||y>=720||screen.z>1||screen.z< -1)continue;
       const offset=p.clone().sub(view.camera.position);raycaster.set(view.camera.position,offset.clone().normalize());raycaster.near=0;raycaster.far=offset.length()-.005;
       if(raycaster.intersectObjects(blockers,false).length){pixelProof.occludedSamples++;continue;}
       const i=(y*960+x)*4;if(deltaAt(i)<=3)pixelProof.gapSamples++;if(redAt(i))pixelProof.stripeSamples++;
     }
   }
   view.render();
   return {exists:Boolean(group),visible,camera:view.camera.position.toArray(),pixelProof,drawCalls:view.renderer.info.render.calls,triangles:view.renderer.info.render.triangles,meshes:group?.children.map(m=>({name:m.name,visible:m.visible,opacity:m.material.uniforms?.uOpacity?.value,depthTest:m.material.depthTest,depthWrite:m.material.depthWrite}))||[]};
 }
};
`;

(async()=>{
  await fs.mkdir(output,{recursive:true});
  const plugins=baseline?[{name:'furniture-baseline',setup(build){build.onLoad({filter:/[\\/]src[\\/].*\.js$/},args=>{
    const relative=path.relative(root,args.path).replaceAll('\\','/');if(!relative.startsWith('src/'))return;
    return {contents:execFileSync('git',['show',baseline+':'+relative],{cwd:root,encoding:'utf8'}),loader:'js',resolveDir:path.dirname(args.path)};
  });}}]:[];
  const bundle=await esbuild.build({stdin:{contents:harness,resolveDir:root,sourcefile:'furniture-qa.js'},bundle:true,write:false,format:'esm',plugins});
  await fs.writeFile(path.join(output,'furniture-qa.js'),bundle.outputFiles[0].contents);
  const browser=await chromium.launch({channel:'msedge',headless:true,args:['--enable-unsafe-swiftshader']}),errors=[],requests=[],report={baseline:baseline||null,tag,views:[],garden:[]};let page;
  try{
    const context=await browser.newContext({viewport:{width:960,height:720},deviceScaleFactor:1,serviceWorkers:'block'});
    await context.route('**/*',route=>{const url=new URL(route.request().url());if(url.origin!==origin||url.pathname.startsWith('/api/')){requests.push(url.href);return route.abort();}
      if(url.pathname==='/__furniture')return route.fulfill({contentType:'text/html',body:'<!doctype html><style>body{margin:0}canvas{display:block}</style><canvas></canvas><script type="module" src="/__furniture.js"></script>'});
      if(url.pathname==='/__furniture.js')return route.fulfill({contentType:'text/javascript',body:Buffer.from(bundle.outputFiles[0].contents)});return route.abort();});
    page=await context.newPage();page.on('pageerror',error=>errors.push(error.message));page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});await page.goto(origin+'/__furniture');await page.waitForFunction(()=>window.furnitureQA);
    report.metadata=await page.evaluate(()=>window.furnitureQA.metadata());report.functional=await page.evaluate(pairs=>window.furnitureQA.functional(pairs),functionalPairs);report.colors=await page.evaluate(()=>window.furnitureQA.colors());report.coplanar=await page.evaluate(()=>window.furnitureQA.audit());
    const rooms=await page.evaluate(()=>window.furnitureQA.rooms());assert.equal(new Set(rooms.map(r=>r.room)).size,report.metadata.rooms.length);
    for(const config of [...rooms,...closeups].filter(config=>!viewFilter||viewFilter.includes(config.id))){
      await page.evaluate(config=>window.furnitureQA.show(config),config);await page.screenshot({path:path.join(output,config.id+'.png')});
      const result={...config,passes:{}};
      if(!config.id.startsWith('room-'))for(const pass of ['natural','normal','depth']){
        result.passes[pass]=await page.evaluate(({config,pass})=>window.furnitureQA.stability(config,pass),{config,pass});
        if(['sofa-front','bedroom-bed','bath-rim','storage-shelves'].includes(config.id))await page.screenshot({path:path.join(output,config.id+'-'+pass+'.png')});
      }
      report.views.push(result);
    }
    if(!baseline&&!process.env.FURNITURE_QA_SKIP_GARDEN){
      const cases=[
        {id:'far',plane:[16,4,12],camera:[18.95,4.2,12],look:[19,4,12],active:[]},
        {id:'near-east',plane:[18.6,2,5],camera:[16.8,2.6,7.5],look:[19,2,5],active:['maxX']},
        {id:'near-west',plane:[-4.6,3,5],camera:[-2.8,3.5,7],look:[-5,3,5],active:['minX']},
        {id:'near-north',plane:[7,3,-6.6],camera:[9,3.5,-4.7],look:[7,3,-7],active:['minZ']},
        {id:'near-south',plane:[7,3,17.6],camera:[9,3.5,15.7],look:[7,3,18],active:['maxZ']},
        {id:'near-ceiling',plane:[16,13.7,5],camera:[16,12.5,6.5],look:[16,14,5],active:['maxY']},
        {id:'near-corner',plane:[-4.7,3,-6.7],camera:[-2.8,3.6,-4.8],look:[-5,3,-7],active:['minX','minZ']},
        {id:'inside-house',plane:[11,1.2,4],camera:[10,1.5,5],look:[12,1,4],active:[]},
      ];
      for(const config of cases.filter(c=>c.active.length===1)){
        cases.push({...config,id:config.id+'-fpv',camera:[...config.plane],fpv:true});
        const plane=[...config.plane],axis=config.active[0].endsWith('X')?0:config.active[0].endsWith('Y')?1:2;
        plane[axis]+=config.active[0].startsWith('min')?3:-3;
        cases.push({...config,id:config.id.replace('near-','far-'),plane,active:[]});
      }
      for(const config of cases){const state=await page.evaluate(config=>window.furnitureQA.boundary(config),config);report.garden.push({...config,...state});await page.screenshot({path:path.join(output,'garden-warning-'+config.id+'.png')});assert(state.exists,'Boundary warning must exist in actual scene');
        const active=state.meshes.filter(m=>m.visible&&m.opacity>.001).map(m=>m.name.replace('garden-boundary-','')).sort();assert.deepEqual(active,[...config.active].sort(),config.id);
        for(const mesh of state.meshes){assert.equal(mesh.depthTest,true);assert.equal(mesh.depthWrite,false);}
        if(config.active.length){assert(state.pixelProof.red>100,config.id+': red stripes must reach real pixels');assert(state.pixelProof.stripeSamples>5,config.id+': stripe samples');assert(state.pixelProof.gapSamples>5,config.id+': transparent gaps between stripes');}
        else assert.equal(state.pixelProof.changed,0,config.id+': no distant warning pixels');
        }
    }
    if(!baseline){assert.equal(report.coplanar.duplicates.length,0,'Exposed furniture surfaces must have one rendered owner');assert.equal(report.coplanar.missing.length,0,'Exposed furniture surfaces remain closed');
      assert.equal(report.metadata.furnitureBatches.length,5);assert(report.metadata.furnitureBatches.every(b=>b.vertexColors));assert(report.colors.length>450);assert(report.colors.every(p=>p.maximum<1e-6),'Original linear-space vertex colors preserved');
      for(const chair of report.functional.chairs.filter(c=>c.target))assert(chair.dot>.7,chair.id+': seat must face its table, backrest away from work surface');
      if(process.env.FURNITURE_QA_COMPARE){const previous=JSON.parse(await fs.readFile(process.env.FURNITURE_QA_COMPARE,'utf8'));assert.deepEqual(report.metadata.stars,previous.metadata.stars);assert.deepEqual(report.metadata.doors,previous.metadata.doors);}
      for(const view of report.views.filter(v=>v.passes.natural))assert.equal(view.passes.natural.furnitureFaceOrder.changed,0,view.id+': draw-order dependent furniture face pixels');}
    assert.deepEqual(errors,[]);assert.deepEqual(requests,[]);report.passed=true;await fs.writeFile(path.join(output,'report.json'),JSON.stringify(report,null,2));
    console.log(JSON.stringify({passed:true,tag,output,rooms:report.metadata.rooms.length,views:report.views.length,coplanarRays:report.coplanar.tested,duplicateRays:report.coplanar.duplicates.length,garden:report.garden.length,
      closeups:report.views.filter(v=>v.passes.natural).map(v=>({id:v.id,order:v.passes.natural.order.changed,faceOrder:v.passes.natural.faceInteriorOrder.changed,jitter:v.passes.natural.microCamera.changed}))},null,2));
  }catch(error){if(page)await page.screenshot({path:path.join(output,'failure.png')}).catch(()=>{});await fs.writeFile(path.join(output,'report.json'),JSON.stringify({...report,passed:false,error:error.message,errors,requests},null,2));throw error;}
  finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
