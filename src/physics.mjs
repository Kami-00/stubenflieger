import * as CANNON from 'cannon-es';
export const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
export const launchSpeed=power=>5.5+clamp(power,0,1)*5.5;
export function sensorAxes(beta,gamma,angle){
 const b=beta*Math.PI/180,g=gamma*Math.PI/180,a=angle*Math.PI/180;
 const x=-Math.cos(b)*Math.sin(g),y=Math.sin(b),z=Math.cos(b)*Math.cos(g);
 const sx=x*Math.cos(a)-y*Math.sin(a),sy=x*Math.sin(a)+y*Math.cos(a);
 return {roll:Math.atan2(-sx,Math.hypot(sy,z))*180/Math.PI,pitch:Math.atan2(sy,z)*180/Math.PI};
}
export function sensorControl(sample,neutral){
 const delta=(a,b)=>((a-b+540)%360)-180;
 const deadzone=v=>Math.abs(v)<.06?0:v;
 return {steer:deadzone(clamp(delta(sample.roll,neutral.roll)/28,-1,1)),pitch:deadzone(clamp(delta(sample.pitch,neutral.pitch)/28,-1,1))};
}
export function flightForces(speed,pitch,inWind,dt){
 const nextSpeed=clamp(speed+((inWind?.8:0)-.12-Math.max(0,pitch)*.55+Math.max(0,-pitch)*.6)*dt,3.6,11);
 return {speed:nextSpeed,vertical:-.55+pitch*2.25+(inWind?4.1:0)-(nextSpeed<4.3?.65:0)};
}
export function createPhysics(){
 const world=new CANNON.World({gravity:new CANNON.Vec3(0,-9.82,0),allowSleep:true});
 world.broadphase=new CANNON.SAPBroadphase(world);world.solver.iterations=10;
 world.defaultContactMaterial.friction=.55;world.defaultContactMaterial.restitution=.08;
 const blocks=[];const solids=[];
 function solid(size,pos){const body=new CANNON.Body({mass:0,shape:new CANNON.Box(new CANNON.Vec3(...size.map(n=>n/2))),position:new CANNON.Vec3(...pos)});body.kind='solid';world.addBody(body);solids.push(body);return body;}
 solid([26,.4,34],[0,-.2,0]);solid([.4,10,34],[-13,5,0]);solid([.4,10,34],[13,5,0]);solid([26,10,.4],[0,5,-17]);solid([26,10,.4],[0,5,17]);solid([26,.4,34],[0,10,0]);
 function tower(x,z,levels=7){for(let y=0;y<levels;y++)for(let i=0;i<3;i++){
  const odd=y%2===1,size=odd?[.43,.45,1.5]:[1.5,.45,.43];
  const p=[x+(odd?(i-1)*.47:0),.225+y*.455,z+(odd?0:(i-1)*.47)];
  const body=new CANNON.Body({mass:.24,shape:new CANNON.Box(new CANNON.Vec3(...size.map(n=>n/2))),position:new CANNON.Vec3(...p),linearDamping:.12,angularDamping:.2,sleepSpeedLimit:.12,sleepTimeLimit:1});
  body.kind='block';world.addBody(body);blocks.push({body,size,home:new CANNON.Vec3(...p),scored:false});
 }}
 tower(0,-4,7);tower(-5,-9,8);tower(5,-8,6);
 const plane=new CANNON.Body({mass:1.8,shape:new CANNON.Sphere(.36),position:new CANNON.Vec3(0,2.7,11),linearDamping:0,angularDamping:1,fixedRotation:true,collisionFilterMask:0});
 plane.kind='plane';world.addBody(plane);
 function reset(){for(const block of blocks){block.body.position.copy(block.home);block.body.quaternion.set(0,0,0,1);block.body.velocity.setZero();block.body.angularVelocity.setZero();block.body.force.setZero();block.body.torque.setZero();block.body.wakeUp();block.scored=false;}plane.position.set(0,2.7,11);plane.velocity.setZero();plane.angularVelocity.setZero();plane.collisionFilterMask=0;world.accumulator=0;}
 function countFallen(){let count=0;for(const b of blocks){if(!b.scored&&(b.body.position.distanceTo(b.home)>.55||Math.abs(b.body.quaternion.w)<.92))b.scored=true;if(b.scored)count++;}return count;}
 return {world,plane,blocks,solid,reset,countFallen};
}
