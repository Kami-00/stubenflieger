import * as T from 'three';
import {gameSize} from './viewport.js';
export function buildScene(canvas,physics){
 const renderer=new T.WebGLRenderer({canvas,antialias:true,powerPreference:'high-performance'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFShadowMap;renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;
 const scene=new T.Scene();scene.background=new T.Color('#acc8c6');scene.fog=new T.Fog('#b4c3b1',48,90);
 const camera=new T.PerspectiveCamera(57,1,.1,100);
 scene.add(new T.HemisphereLight(0xf8f2d5,0x677b71,2.2));
 const sun=new T.DirectionalLight(0xffe3af,4);sun.position.set(-7,16,-5);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-20;sun.shadow.camera.right=20;sun.shadow.camera.top=23;sun.shadow.camera.bottom=-23;sun.shadow.camera.near=.5;sun.shadow.camera.far=50;sun.shadow.normalBias=.035;sun.shadow.bias=-.0002;scene.add(sun);
 const mats=new Map();function mat(color){if(!mats.has(color))mats.set(color,new T.MeshStandardMaterial({color,roughness:.85,flatShading:true}));return mats.get(color);}
 function box(w,h,d,x,y,z,color,parent=scene){const m=new T.Mesh(new T.BoxGeometry(w,h,d),mat(color));m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function cylinder(rt,rb,h,x,y,z,color,segments=10,parent=scene){const m=new T.Mesh(new T.CylinderGeometry(rt,rb,h,segments),mat(color));m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function segment(a,b,r,color,parent=scene){const v1=new T.Vector3(...a),v2=new T.Vector3(...b),dir=v2.clone().sub(v1);const m=cylinder(r,r,dir.length(),0,0,0,color,8,parent);m.position.copy(v1.add(v2).multiplyScalar(.5));m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),dir.normalize());return m;}
 box(26,.3,34,0,-.16,0,'#b68a5c');
 // Staggered oak floorboards.
 const wood=['#bb9365','#c09a6d','#c9a577','#c09a6e'];
 for(let row=0;row<17;row++)for(let col=0;col<7;col++){const x=-12+col*4+(row%2?2:0);if(x<13)box(Math.min(3.97,13-x),.025,1.975,x,0,-16+row*2,wood[(row+col)%4]);}
 box(26,10,.25,0,5,-17,'#739a94');box(.25,10,34,-13,5,0,'#d7d7bf');box(.25,10,34,13,5,0,'#91aca0');
 box(26,.26,.15,0,.14,-16.8,'#ece9d5');box(.15,.26,34,-12.8,.14,0,'#ece9d5');box(.15,.26,34,12.8,.14,0,'#ece9d5');
 box(26,.14,.3,0,8.9,-16.8,'#bdd0bb');
 // Window, broad wooden frame, blue sky and pale curtains.
 box(7.5,5,.16,-5.7,6,-16.8,'#ede9ce');const sky=box(6.95,4.5,.12,-5.7,6,-16.67,'#bde3e1');sky.material=new T.MeshBasicMaterial({color:'#bde3e1'});
 box(.15,4.6,.2,-5.7,6,-16.54,'#fff4d2');box(7,.15,.2,-5.7,6,-16.54,'#fff4d2');box(8,.18,.75,-5.7,3.55,-16.45,'#e8dab9');
 segment([-10,8.7,-16.2],[-1.4,8.7,-16.2],.065,'#685c48');
 for(const side of [-9.7,-1.7])for(let i=0;i<4;i++)cylinder(.18,.25,5.1,side+i*.21,6.1,-16.1,i%2?'#d4c9a8':'#e9ddbb',6);
 // Rug under the flight path.
 box(12,.04,18,.4,.04,-.4,'#a55f43');box(11.5,.015,17.5,.4,.07,-.4,'#c48557');box(10.5,.015,16.5,.4,.08,-.4,'#b7734e');
 for(let i=-5;i<=5;i++){box(.025,.012,16.4,.4+i,.095,-.4,'#cd9565');}
 for(const z of [-9,8.2])for(let x=-5.4;x<6.2;x+=.3)box(.07,.015,.3,x,.05,z,'#d1ab7a');
 // Deep green sofa along the left wall.
 box(4.2,.7,9,-10.1,.8,-2,'#345956');box(1.0,2.4,9,-11.75,1.8,-2,'#436c64');
 for(const z of [-5.2,-2,1.2]){box(3.4,.6,2.8,-9.8,1.4,z,'#658b75');box(.7,1.7,2.7,-11.1,2.15,z,'#5c836f');}
 for(const z of [-6.4,2.4]){box(4.2,1.65,.75,-10,1.7,z,'#426c61');for(const x of [-11.5,-8.6])cylinder(.12,.1,.55,x,.3,z,'#66452e');}
 let pillow=box(.5,1.35,1.5,-10.4,2.2,-4.8,'#e5b567');pillow.rotation.z=-.2;pillow.rotation.x=.15;
 pillow=box(.5,1.3,1.3,-10.4,2.2,.5,'#d77852');pillow.rotation.z=-.3;
 physics.solid([4.3,2.5,9.2],[-10.2,1.25,-2]);
 // Ochre armchair on the right.
 const chair=new T.Group();scene.add(chair);chair.position.set(9.4,0,-3.2);chair.rotation.y=-.25;
 box(3.5,.7,3.8,0,1,0,'#bd803e',chair);box(3.5,2.6,.7,0,2.1,-1.5,'#dca04f',chair);box(2.6,.6,2.8,0,1.6,.1,'#e0ab59',chair);
 for(const x of [-1.5,1.5]){box(.6,1.1,3.5,x,1.8,0,'#cb8f40',chair);for(const z of [-1.3,1.3])cylinder(.13,.1,.6,x,.3,z,'#5b4939',8,chair);}
 physics.solid([4,3,4.2],[9.4,1.5,-3.2]);
 // Low walnut table, books and an unreasonably large mug.
 cylinder(2,2,.24,-6,1.6,5,'#775033',12);for(let i=0;i<3;i++){const a=i*Math.PI*2/3;segment([-6+Math.sin(a)*1.2,1.5,5+Math.cos(a)*1.2],[-6+Math.sin(a)*1.6,0,5+Math.cos(a)*1.6],.11,'#473d31');}
 physics.solid([3.8,1.8,3.8],[-6,.9,5]);
 box(1.35,.17,1,-6.4,1.83,5.3,'#dba353').rotation.y=.2;box(1.2,.15,.9,-6.4,1.98,5.3,'#779d9c').rotation.y=-.12;
 cylinder(.35,.3,.55,-5.5,1.99,4.5,'#ede0c3',12);cylinder(.28,.28,.015,-5.5,2.27,4.5,'#5b3d2c',12);
 const handle=new T.Mesh(new T.TorusGeometry(.23,.055,6,12),mat('#ede0c3'));handle.position.set(-5.12,2.02,4.5);scene.add(handle);
 // Bookcase, each shelf full of colorful oversized books.
 box(5.5,5,.5,7.7,2.6,-16.35,'#745638');
 for(const x of [4.8,10.6])box(.22,5.5,1.5,x,2.8,-15.9,'#8e6640');
 for(let row=0;row<4;row++){const y=.3+row*1.55;box(6,.18,1.7,7.7,y,-15.8,'#a77d50');for(let i=0;i<10;i++){const h=.7+((i*7+row*3)%5)*.14;const book=box(.33,h,.9,5.3+i*.49,y+h/2+.11,-15.8,['#719391','#d59c50','#ca7551','#ddd0a4','#486a67'][i%5]);if(i===8)book.rotation.z=.13;}}
 physics.solid([6,5.7,1.7],[7.7,2.8,-15.8]);
 // Floor lamp and side table.
 cylinder(.7,.85,.16,10,.1,4,'#3d4b43');segment([10,.1,4],[10,5.6,4],.065,'#3d4b43');cylinder(.55,1.15,1.3,10,5.7,4,'#ecdab1',8);physics.solid([1,5.5,1],[10,2.75,4]);
 const lampLight=new T.PointLight(0xffc471,12,8,2);lampLight.position.set(10,5.1,4);scene.add(lampLight);
 // Framed geometric print, woven basket, plant.
 box(3.5,3.8,.2,.7,6.3,-16.75,'#624b36');box(3.15,3.45,.05,.7,6.3,-16.6,'#efe3c4');
 cylinder(.85,.85,.06,.7,6.7,-16.5,'#d7934f',24).rotation.x=Math.PI/2;
 box(2.5,.5,.07,.7,5.6,-16.45,'#628f88');
 cylinder(.8,.65,1.1,-10,.56,-12.5,'#c39960',10);
 for(let i=0;i<7;i++){const a=i*2.4,x=-10+Math.sin(a)*.7,z=-12.5+Math.cos(a)*.6,y=2+(i%3)*.6;segment([-10,1,-12.5],[x,y,z],.025,'#476547');const leaf=new T.Mesh(new T.IcosahedronGeometry(.85,0),mat(i%2?'#64865d':'#426b52'));leaf.position.set(x,y,z);leaf.scale.set(.55,1.2,.45);leaf.rotation.z=Math.sin(a)*.7;scene.add(leaf);}
 cylinder(.9,.8,1.1,10,.6,10,'#ad8151',12);for(let i=0;i<5;i++)cylinder(.92,.92,.04,10,.2+i*.2,10,'#c39c68',12);
 // Toy track and small discarded blocks.
 for(let i=0;i<7;i++){box(.6,.3,.6,6+i*.5,.2,7+Math.sin(i)*.5,['#c4874a','#779c94','#c76d49'][i%3]).rotation.y=i;}
 // Physical Jenga-like wooden towers.
 const blockMeshes=physics.blocks.map((b,i)=>{const mesh=box(...b.size,...b.home.toArray(),['#edbd76','#dca15e','#efc88b','#c88b47'][i%4]);
 const grain=box(b.size[0]*.7,.018,b.size[2]*.65,0,b.size[1]/2+.001,0,i%2?'#dba769':'#ce9b5c',mesh);grain.castShadow=false;
 return mesh;});
 for(const [x,z] of [[0,-4],[-5,-9],[5,-8]]){const ring=new T.Mesh(new T.RingGeometry(1.75,1.79,48),new T.MeshBasicMaterial({color:0xffd583,transparent:true,opacity:.6,side:T.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.set(x,.12,z);scene.add(ring);}
 // Three readable thermals: translucent columns, helix particles and rising rings.
 const thermals=[{x:-4,z:1,r:2.1},{x:4,z:-1,r:2.1},{x:0,z:-11.5,r:2.3}];
 const windMeshes=[];
 for(const zone of thermals){const group=new T.Group();group.position.set(zone.x,0,zone.z);scene.add(group);
 const column=new T.Mesh(new T.CylinderGeometry(zone.r*.8,zone.r,7.8,24,1,true),new T.MeshBasicMaterial({color:0x8aefd6,transparent:true,opacity:.035,side:T.DoubleSide,depthWrite:false}));column.position.y=4;group.add(column);
 const base=new T.Mesh(new T.RingGeometry(zone.r-.06,zone.r,48),new T.MeshBasicMaterial({color:0x9affe2,transparent:true,opacity:.6,side:T.DoubleSide}));base.rotation.x=-Math.PI/2;base.position.y=.15;group.add(base);
 for(let i=0;i<6;i++){const ring=new T.Mesh(new T.TorusGeometry(zone.r*.74,.018,4,32,Math.PI*1.45),new T.MeshBasicMaterial({color:0xb4ffe8,transparent:true,opacity:.45,depthWrite:false}));ring.rotation.x=Math.PI/2;group.add(ring);windMeshes.push({mesh:ring,phase:i/6,ring:true});}
 for(let i=0;i<10;i++){const mote=new T.Mesh(new T.ConeGeometry(.07,.26,4),new T.MeshBasicMaterial({color:0xc6ffeb,transparent:true,opacity:.7}));group.add(mote);windMeshes.push({mesh:mote,phase:i/10,ring:false,radius:zone.r*.7});}}
 // Balsa glider. The local nose points toward -Z.
 const plane=new T.Group();scene.add(plane);
 box(.19,.17,1.65,0,0,0,'#d79c56',plane);const nose=new T.Mesh(new T.ConeGeometry(.13,.48,6),mat('#e77b45'));nose.rotation.x=-Math.PI/2;nose.position.z=-1;plane.add(nose);
 function wing(points,color){const shape=new T.Shape();points.forEach(([x,z],i)=>i?shape.lineTo(x,z):shape.moveTo(x,z));shape.closePath();const geom=new T.ExtrudeGeometry(shape,{depth:.045,bevelEnabled:false});geom.rotateX(Math.PI/2);const m=new T.Mesh(geom,mat(color));m.position.y=.09;m.castShadow=true;plane.add(m);return m;}
 wing([[-1.5,.1],[-1.5,-.2],[0,-.55],[1.5,-.2],[1.5,.1],[.15,.35],[-.15,.35]],'#f3d79c');
 wing([[-.65,.72],[-.65,.48],[0,.35],[.65,.48],[.65,.72]],'#efbe6e');
 box(.2,.025,.42,-1.28,.105,-.02,'#d16d43',plane);box(.2,.025,.42,1.28,.105,-.02,'#d16d43',plane);
 const fin=box(.04,.43,.5,0,.23,.57,'#e68e4c',plane);fin.rotation.x=-.2;
 // Elastic launcher: wooden fork plus stretched bands.
 const sling=new T.Group();scene.add(sling);sling.position.set(0,0,11);
 box(1.8,.15,1.4,0,.09,0,'#86613d',sling);segment([0,.1,0],[0,1.6,0],.14,'#b17d46',sling);segment([0,1.6,0],[-.9,3,0],.13,'#c49354',sling);segment([0,1.6,0],[.9,3,0],.13,'#c49354',sling);
 const bands=[];for(const x of [-.9,.9]){const line=new T.Mesh(new T.CylinderGeometry(.035,.035,1,6),mat('#d75e49'));sling.add(line);bands.push({line,x});}
 function updateSling(pull=0){for(const b of bands){const a=new T.Vector3(b.x,3,0),end=new T.Vector3(0,2.7,pull*1.8),dir=end.clone().sub(a);b.line.position.copy(a.add(end).multiplyScalar(.5));b.line.scale.y=dir.length();b.line.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),dir.normalize());}}
 updateSling();
 // A faint flight trail, reused without allocations.
 const trailPositions=new Float32Array(60*3);const trailGeo=new T.BufferGeometry();trailGeo.setAttribute('position',new T.BufferAttribute(trailPositions,3));const trail=new T.Line(trailGeo,new T.LineBasicMaterial({color:0xffe4ac,transparent:true,opacity:.4}));trail.frustumCulled=false;scene.add(trail);
 function resetTrail(p){for(let i=0;i<60;i++)p.toArray(trailPositions,i*3);trailGeo.attributes.position.needsUpdate=true;}
 function updateTrail(p){trailPositions.copyWithin(3,0,177);p.toArray(trailPositions,0);trailGeo.attributes.position.needsUpdate=true;}
 function sync(){physics.blocks.forEach((b,i)=>{blockMeshes[i].position.copy(b.body.position);blockMeshes[i].quaternion.copy(b.body.quaternion);});}
 function wind(time){windMeshes.forEach(w=>{const phase=(time*.23+w.phase)%1;w.mesh.position.y=.2+phase*7.8;if(w.ring){w.mesh.rotation.z=time*.6+w.phase*6;w.mesh.material.opacity=Math.sin(phase*Math.PI)*.45;}else{w.mesh.position.x=Math.sin(time+w.phase*20)*w.radius;w.mesh.position.z=Math.cos(time+w.phase*20)*w.radius;}});}
 function resize(){const {width,height}=gameSize();renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();}
 resize();window.addEventListener('gameviewportchange',resize);
 return {renderer,scene,camera,plane,sling,thermals,sync,wind,updateSling,resetTrail,updateTrail,box};
}
