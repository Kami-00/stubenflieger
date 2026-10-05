import * as T from 'three';
import {createPhysics,clamp,launchSpeed,sensorAxes,sensorControl,flightForces} from './physics.mjs';
import {buildScene} from './scene.js';
import {gameRotation,gameSize,initViewport,unrotateDelta} from './viewport.js';
import {initLeaderboard} from './leaderboard.js';
import {createKeyboardControls} from './keyboard.js';
import {createDialogs} from './dialogs.js';
const $=id=>document.getElementById(id);
const show=(id,visible)=>{$(id).hidden=!visible;};
const dialogs=createDialogs(document,$('app'));
let keyboard;
$('retry').onclick=()=>location.reload();
initViewport();
const leaderboard=initLeaderboard();
const physics=createPhysics();let view;
try {view=buildScene($('game'),physics);}catch(error){console.error(error);show('loading',false);dialogs.open('error');throw error;}
let state='ready',paused=false,power=0,charging=false,chargeStart=0,dragPower=0,aim=0,heading=0,speed=0,vertical=0,flightTime=0,clock=0,endedAt=0,reason='',won=false,score=0;
let gyroEnabled=false,sensorSample=null,neutral=null,lastSensor=0,gyroMessageTimer=0;
let touch={steer:0,pitch:0},smooth={steer:0,pitch:0},stickPointer=null,launchPointer=null,dragStart={x:0,y:0},lastHit=0;
const keys=new Set(),position=new T.Vector3(),camTarget=new T.Vector3(),lookTarget=new T.Vector3(),look=new T.Vector3(),forward=new T.Vector3();
let soundEnabled=false,audio=null;
function beep(freq,duration=.1,type='sine',volume=.06){if(!soundEnabled)return;try{audio??=new (window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')void audio.resume();const oscillator=audio.createOscillator(),gain=audio.createGain();oscillator.type=type;oscillator.frequency.setValueAtTime(freq,audio.currentTime);oscillator.frequency.exponentialRampToValueAtTime(Math.max(35,freq*.55),audio.currentTime+duration);gain.gain.setValueAtTime(volume,audio.currentTime);gain.gain.exponentialRampToValueAtTime(.001,audio.currentTime+duration);oscillator.connect(gain);gain.connect(audio.destination);oscillator.start();oscillator.stop(audio.currentTime+duration);}catch{}}
$('sound').onclick=()=>{soundEnabled=!soundEnabled;$('sound').textContent=soundEnabled?'♪ AN':'♪ AUS';$('sound').setAttribute('aria-label',soundEnabled?'Ton ausschalten':'Ton einschalten');beep(600);};
function hint(message){$('hint').textContent=message;}
function reset(){
 keyboard?.clear();releaseStick();
 state='ready';paused=false;charging=false;power=0;aim=0;heading=0;score=0;won=false;flightTime=0;endedAt=0;reason='';keys.clear();touch={steer:0,pitch:0};smooth={steer:0,pitch:0};physics.reset();view.plane.rotation.set(0,0,0);view.plane.position.set(0,2.7,11);view.resetTrail(view.plane.position);view.updateSling(0);$('power-fill').style.transform='scaleX(0)';$('launch-label').textContent='Ziehen & loslassen';$('power-label').textContent='GUMMISCHLEUDER ↗';$('stick').style.transform='translate(0,0)';
 for(const id of ['result','paused','stats','flight-controls','pause','wind-toast','menu','leaderboard'])show(id,false);
 for(const id of ['launch-panel','level-label','footer'])show(id,true);
 document.body.classList.remove('flying');hint('Dein Wohnzimmer. Deine Flugbahn.');
 if(gyroEnabled&&sensorSample)neutral={...sensorSample};
 dialogs.close($('launch'));
}
function beginCharge(){if(state!=='ready'||paused||charging||dialogs.current())return false;charging=true;chargeStart=performance.now();dragPower=0;power=.12;beep(160,.07);return true;}
function cancelCharge(){
 if(launchPointer!==null&&launcher.hasPointerCapture(launchPointer))launcher.releasePointerCapture(launchPointer);
 launchPointer=null;charging=false;power=0;dragPower=0;view.updateSling(0);$('power-fill').style.transform='scaleX(0)';$('launch-label').textContent='Ziehen & loslassen';$('power-label').textContent='GUMMISCHLEUDER ↗';
}
function quickLaunch(){if(beginCharge()){power=.75;release();}}
function release(){if(!charging||state!=='ready'||dialogs.current())return;charging=false;state='flying';leaderboard.beginRun();flightTime=0;heading=aim;speed=launchSpeed(power);vertical=.8+power*.7;lastHit=-10;physics.plane.position.set(0,2.7,11+power*1.8);physics.plane.velocity.set(0,0,0);physics.plane.collisionFilterMask=-1;physics.plane.wakeUp();view.resetTrail(new T.Vector3().copy(physics.plane.position));view.updateSling(0);
 if(gyroEnabled&&sensorSample)neutral={...sensorSample};
 for(const id of ['launch-panel','level-label','footer'])show(id,false);
 for(const id of ['stats','flight-controls','pause'])show(id,true);
 document.body.classList.add('flying');hint('Türkis hebt dich an. Holz gibt nach.');beep(480,.4,'triangle',.12);
 $('game').focus({preventScroll:true});
}
const launcher=$('launch');
launcher.addEventListener('pointerdown',e=>{if(launchPointer!==null||!beginCharge())return;e.preventDefault();launchPointer=e.pointerId;dragStart={x:e.clientX,y:e.clientY};launcher.setPointerCapture(e.pointerId);});
launcher.addEventListener('pointermove',e=>{if(e.pointerId!==launchPointer||!charging)return;const delta=unrotateDelta(e.clientX-dragStart.x,e.clientY-dragStart.y,gameRotation());dragPower=clamp(delta.y/130,0,1);aim=clamp(delta.x/250,-.45,.45);});
launcher.addEventListener('pointerup',e=>{if(e.pointerId!==launchPointer)return;launchPointer=null;release();});
launcher.addEventListener('pointercancel',cancelCharge);
launcher.addEventListener('click',e=>{if(e.detail===0)quickLaunch();});
function calibrate(){if(sensorSample){neutral={...sensorSample};hint('Diese Haltung ist jetzt die Mitte.');$('control-note').textContent='Kalibriert. Neige seitlich zum Lenken, vor/zurück für die Höhe.';}}
$('calibrate').onclick=()=>{if(!gyroEnabled){enableGyro();}else calibrate();};
window.addEventListener('deviceorientation',e=>{if(!gyroEnabled||!Number.isFinite(e.beta)||!Number.isFinite(e.gamma))return;sensorSample=sensorAxes(e.beta,e.gamma,(screen.orientation?.angle??window.orientation??0)+gameRotation());lastSensor=performance.now();if(!neutral){neutral={...sensorSample};$('control-note').textContent='Aktiv. Halte dein iPhone bequem – beim Start wird kalibriert.';$('gyro').textContent='✓ Neigung aktiv';clearTimeout(gyroMessageTimer);}});
function orientationChanged(){neutral=null;sensorSample=null;}
window.addEventListener('orientationchange',orientationChanged);screen.orientation?.addEventListener('change',orientationChanged);window.addEventListener('gameviewportchange',orientationChanged);
async function enableGyro(){
 if(!window.DeviceOrientationEvent){$('control-note').textContent='Keine Sensoren verfügbar. Nutze Touch oder WASD / Pfeiltasten.';hint('Keine Sensoren verfügbar. Touch oder WASD funktioniert.');return;}
 try{
  if(typeof DeviceOrientationEvent.requestPermission==='function'){
   const permission=await DeviceOrientationEvent.requestPermission();if(permission!=='granted'){$('control-note').textContent='Sensorzugriff abgelehnt. Du kannst mit dem Touch-Kreis fliegen.';hint('Sensorzugriff abgelehnt. Verwende den Touch-Kreis.');return;}
  }
  gyroEnabled=true;neutral=null;$('gyro').textContent='Warte auf Sensor …';$('control-note').textContent='Halte dein iPhone in deiner normalen Spielhaltung.';
  clearTimeout(gyroMessageTimer);gyroMessageTimer=setTimeout(()=>{if(!sensorSample){$('gyro').textContent='Sensoren erneut versuchen';$('control-note').textContent='Kein Sensorsignal. In Safari öffnen oder Touch-Steuerung nutzen.';}},3000);
 }catch{$('control-note').textContent='Sensoren nicht verfügbar. Die Touch-Steuerung bleibt bereit.';}
}
$('gyro').onclick=()=>{if(gyroEnabled&&sensorSample)calibrate();else void enableGyro();};
const joystick=$('joystick');
function moveStick(e){const r=joystick.getBoundingClientRect(),limit=joystick.clientWidth*.32;const delta=unrotateDelta(e.clientX-r.left-r.width/2,e.clientY-r.top-r.height/2,gameRotation());const dx=delta.x,dy=delta.y;const length=Math.hypot(dx,dy),factor=Math.min(1,limit/(length||1));const x=dx*factor,y=dy*factor;touch.steer=x/limit;touch.pitch=-y/limit;$('stick').style.transform=`translate(${x}px,${y}px)`;}
joystick.addEventListener('pointerdown',e=>{if(stickPointer!==null)return;e.preventDefault();stickPointer=e.pointerId;joystick.setPointerCapture(e.pointerId);moveStick(e);});
joystick.addEventListener('pointermove',e=>{if(e.pointerId===stickPointer)moveStick(e);});
function releaseStick(){if(stickPointer!==null&&joystick.hasPointerCapture(stickPointer))joystick.releasePointerCapture(stickPointer);stickPointer=null;touch={steer:0,pitch:0};$('stick').style.transform='translate(0,0)';}
joystick.addEventListener('pointerup',releaseStick);joystick.addEventListener('pointercancel',releaseStick);
function togglePause(force){if(state!=='flying')return;paused=typeof force==='boolean'?force:!paused;keyboard?.clear();releaseStick();if(paused)dialogs.open('paused',$('resume'));else dialogs.close($('game'));}
$('pause').onclick=()=>togglePause();$('resume').onclick=()=>togglePause(false);$('reset').onclick=reset;$('again').onclick=reset;
function suspend(){releaseStick();if(state==='flying'){paused=true;if(!dialogs.current())dialogs.open('paused',$('resume'));}}
function endFlight(message,victory=false){if(state!=='flying')return;keyboard?.clear();releaseStick();state='ending';reason=message;won=victory;endedAt=clock;show('wind-toast',false);show('flight-controls',false);show('pause',false);$('game').focus({preventScroll:true});beep(victory?740:120,.5,victory?'sine':'triangle',.1);}
physics.plane.addEventListener('collide',event=>{if(state!=='flying')return;
 if(event.body.kind==='solid'){endFlight('Das Wohnzimmer war ein kleines bisschen im Weg.');return;}
 if(event.body.kind==='block'&&clock-lastHit>.08){lastHit=clock;speed=Math.max(3.8,speed*.97);beep(120+Math.random()*100,.09,'triangle',.12);hint('Volltreffer! Die Klötze fallen.');}
});
function showResult(){state='result';score=physics.countFallen();won=won||score>=18;$('result-eyebrow').textContent=won?'MISSION GESCHAFFT':'FLUG BEENDET';$('result-title').textContent=won?'Ordentlich Chaos.':'Noch eine Runde?';$('result-copy').textContent=won?'18 Klötze waren das Ziel. Das Wohnzimmer braucht jetzt einen Aufräumdienst.':reason+' Nutze die Aufwinde und ziele auf die unteren Klötze.';$('result-time').textContent=flightTime.toFixed(1)+' s';$('result-blocks').textContent=score;leaderboard.setResult(score,flightTime);keyboard?.clear();dialogs.open('result',$('again'));}

let boardOrigin='menu',menuOrigin=null;
function openMenu(){menuOrigin=dialogs.current();keyboard?.clear();releaseStick();if(state==='flying')paused=true;dialogs.open('menu',$('close-menu'));}
function closeMenu(){
 if(state==='flying'&&paused)dialogs.open('paused',$('resume'));
 else if(menuOrigin==='result')dialogs.open('result',$('result-menu'));
 else dialogs.close($('menu-button'));
}
function openBoard(origin){boardOrigin=origin;keyboard?.clear();releaseStick();if(state==='flying')paused=true;dialogs.open('leaderboard',$('close-leaderboard'));void leaderboard.refresh();}
function closeBoard(){
 if(boardOrigin==='menu')dialogs.open('menu',$('menu-leaderboard'));
 else if(boardOrigin==='result')dialogs.open('result',$('result-leaderboard'));
 else if(state==='flying'&&paused)dialogs.open('paused',$('resume'));
 else dialogs.close($(state==='ready'?'launch':'game'));
}
$('menu-button').onclick=openMenu;$('close-menu').onclick=closeMenu;
$('menu-leaderboard').onclick=()=>openBoard('menu');$('result-leaderboard').onclick=()=>openBoard('result');
$('close-leaderboard').onclick=closeBoard;
$('menu-restart').onclick=reset;
$('pause-menu').onclick=openMenu;$('result-menu').onclick=openMenu;
keyboard=createKeyboardControls({window,document,keys,getState:()=>state,getDialog:()=>dialogs.current(),launcher,actions:{
 beginCharge,cancelCharge,release,quickLaunch,reset,pause:()=>togglePause(),suspend,menu:openMenu,closeMenu,closeBoard,
 board:()=>{if(dialogs.current()!=='leaderboard')openBoard(dialogs.current());},sound:()=>$('sound').click()
}});
let last=performance.now();let hudTime=0;let wasWind=false;
view.camera.position.set(18,14,23);look.set(-1,1,-3);reset();show('loading',false);
function animate(now){requestAnimationFrame(animate);const dt=Math.min((now-last)/1000,.04);last=now;if(paused||dialogs.current()){view.renderer.render(view.scene,view.camera);return;}clock+=dt;view.wind(clock);
 if(state==='ready'){
  const aimDirection=Number(keys.has('ArrowRight')||keys.has('KeyD'))-Number(keys.has('ArrowLeft')||keys.has('KeyA'));
  aim=clamp(aim+aimDirection*.6*dt,-.45,.45);
  if(charging){power=Math.max(.12,dragPower,clamp((now-chargeStart)/1400,0,1));$('power-fill').style.transform=`scaleX(${power})`;$('launch-label').textContent=Math.round(power*100)+' % gespannt';$('power-label').textContent='LOSLASSEN ↗';view.updateSling(power);}
  physics.plane.position.set(0,2.7,11+power*1.8);physics.plane.velocity.setZero();view.plane.position.copy(physics.plane.position);view.plane.rotation.set(.03,-aim,0);
  const size=gameSize();const portrait=size.height>size.width;
  camTarget.set(portrait?9:10,portrait?16:13,portrait?25:22);lookTarget.set(portrait?0:-1,portrait?1:1.8,portrait?11:-3);
 }
 if(state==='flying'){
  flightTime+=dt;let steer=0,pitch=0;
  if(gyroEnabled&&sensorSample&&neutral&&now-lastSensor<1500){const input=sensorControl(sensorSample,neutral);steer=input.steer;pitch=input.pitch;}
  if(stickPointer!==null){steer=touch.steer;pitch=touch.pitch;}
  if(keys.has('ArrowLeft')||keys.has('KeyA'))steer=-1;if(keys.has('ArrowRight')||keys.has('KeyD'))steer=1;
  if(keys.has('ArrowUp')||keys.has('KeyW'))pitch=1;if(keys.has('ArrowDown')||keys.has('KeyS'))pitch=-1;
  smooth.steer=T.MathUtils.damp(smooth.steer,steer,7,dt);smooth.pitch=T.MathUtils.damp(smooth.pitch,pitch,6,dt);
  heading+=smooth.steer*1.65*dt;
  position.copy(physics.plane.position);
  const inWind=view.thermals.some(z=>Math.hypot(position.x-z.x,position.z-z.z)<z.r&&position.y<8.4);
  show('wind-toast',inWind);if(inWind&&!wasWind)beep(800,.4,'sine',.045);wasWind=inWind;
  const forces=flightForces(speed,smooth.pitch,inWind,dt);speed=forces.speed;
  const targetV=forces.vertical;
  vertical=T.MathUtils.damp(vertical,targetV,2.1,dt);
  physics.plane.velocity.set(Math.sin(heading)*speed,vertical,-Math.cos(heading)*speed);
  physics.plane.force.y=physics.plane.mass*9.82;
  view.plane.rotation.set(Math.atan2(vertical,speed),-heading,-smooth.steer*.6);
 }
 physics.world.step(1/90,dt,4);view.sync();
 if(state!=='ready'){
  view.plane.position.copy(physics.plane.position);position.copy(view.plane.position);forward.set(Math.sin(heading),0,-Math.cos(heading));
  camTarget.copy(position).addScaledVector(forward,-5.4);camTarget.y+=2.55;camTarget.x=clamp(camTarget.x,-12.3,12.3);camTarget.y=clamp(camTarget.y,1.1,9.4);camTarget.z=clamp(camTarget.z,-16.3,16.3);
  lookTarget.copy(position).addScaledVector(forward,2.8);lookTarget.y+=.35;
  if(state==='flying'){view.updateTrail(position);score=physics.countFallen();if(score>=18&&!won){won=true;hint('Mission geschafft! Fliege weiter und hol dir die übrigen Türme.');beep(740,.4);}if(position.y<.32)endFlight('Der Boden kam näher als geplant.');}
  if(state==='ending'){view.plane.rotation.z+=dt*1.2;if(clock-endedAt>1.3)showResult();}
 }
 view.camera.position.lerp(camTarget,1-Math.exp(-dt*(state==='ready'?2:5)));
 look.lerp(lookTarget,1-Math.exp(-dt*6));view.camera.lookAt(look);
 hudTime+=dt;if(hudTime>.1){hudTime=0;$('time').textContent=flightTime.toFixed(1)+' s';$('height').textContent=Math.max(0,view.plane.position.y).toFixed(1)+' m';$('fallen').textContent=score;}
 view.renderer.render(view.scene,view.camera);
}
requestAnimationFrame(animate);
$('game').addEventListener('webglcontextlost',event=>{event.preventDefault();keyboard.clear();releaseStick();paused=true;$('error-copy').textContent='Die 3D-Darstellung wurde unterbrochen. Lade das Spiel neu.';dialogs.open('error');});
