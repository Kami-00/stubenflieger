import test from 'node:test';
import assert from 'node:assert/strict';
import {createKeyboardControls} from '../src/keyboard.js';

function element(...selectors){
 const target={closest(selector){return selector.split(',').some(part=>selectors.includes(part.trim()))?target:null;}};
 return target;
}

function setup(t,{state='ready',dialog=null,acceptCharge=true}={}){
 const window=new EventTarget(),document=new EventTarget(),keys=new Set(),calls=[];
 document.hidden=false;
 const launcher=element('button'),body=element();
 const actions=Object.fromEntries(['cancelCharge','release','quickLaunch','pause','reset','menu','closeMenu','board','closeBoard','sound','suspend','shop','closeShop'].map(name=>[name,()=>{calls.push(name);} ]));
 actions.boost=index=>calls.push(`boost:${index}`);
 actions.beginCharge=()=>{calls.push('beginCharge');return acceptCharge;};
 actions.menu=()=>{calls.push('menu');dialog='menu';};
 actions.closeMenu=()=>{calls.push('closeMenu');dialog=null;};
 actions.closeBoard=()=>{calls.push('closeBoard');dialog='menu';};
 const controls=createKeyboardControls({window,document,keys,getState:()=>state,getDialog:()=>dialog,launcher,actions});
 t.after(()=>controls.destroy());
 function key(type,code,{target=body,...properties}={}){
  const event=new Event(type,{cancelable:true});
  Object.defineProperties(event,Object.fromEntries(Object.entries({target,code,repeat:false,isComposing:false,ctrlKey:false,altKey:false,metaKey:false,...properties}).map(([name,value])=>[name,{value}])));
  document.dispatchEvent(event);
  return event;
 }
 return {window,document,keys,calls,launcher,body,controls,key,count:name=>calls.filter(call=>call===name).length,setState:value=>{state=value;},setDialog:value=>{dialog=value;}};
}

test('holding Space on the launcher charges once and releases once',t=>{
 const h=setup(t);
 assert.equal(h.key('keydown','Space',{target:h.launcher}).defaultPrevented,true);
 h.key('keydown','Space',{target:h.launcher,repeat:true});
 h.key('keydown','Space',{target:h.launcher,repeat:true});
 assert.deepEqual(h.calls,['beginCharge']);
 assert.equal(h.key('keyup','Space',{target:h.launcher}).defaultPrevented,true);
 h.key('keyup','Space',{target:h.launcher});
 assert.deepEqual(h.calls,['beginCharge','release']);
});

test('a declined charge does not own the subsequent Space release',t=>{
 const h=setup(t,{acceptCharge:false});
 h.key('keydown','Space',{target:h.launcher});
 h.key('keyup','Space',{target:h.launcher});
 assert.deepEqual(h.calls,['beginCharge']);
});

test('Enter and Space on other buttons and links retain native activation',t=>{
 const h=setup(t);
 for(const target of [element('button'),element('a[href]'),element('[role="button"]')]){
  for(const code of ['Enter','Space']){
   assert.equal(h.key('keydown',code,{target}).defaultPrevented,false);
   assert.equal(h.key('keyup',code,{target}).defaultPrevented,false);
  }
 }
 assert.deepEqual(h.calls,[]);
 assert.equal(h.keys.size,0);
});

test('pilot-name editing leaves letters, spaces, navigation and Enter untouched',t=>{
 const h=setup(t,{state:'result',dialog:'result'}),pilot=element('input');
 pilot.id='pilot-name';
 for(const code of ['KeyR','KeyW','KeyA','KeyS','KeyD','KeyM','KeyB','KeyT','KeyP','Space','ArrowLeft','Enter']){
  assert.equal(h.key('keydown',code,{target:pilot}).defaultPrevented,false,code);
  assert.equal(h.key('keyup',code,{target:pilot}).defaultPrevented,false,code);
 }
 assert.deepEqual(h.calls,[]);
 assert.equal(h.keys.size,0);
});

test('Escape closes the current dialog once without additionally pausing',t=>{
 for(const [dialog,expected] of [['menu','closeMenu'],['leaderboard','closeBoard'],['result','reset'],['paused','pause'],['error',null]]){
  const h=setup(t,{state:'flying',dialog});
  assert.equal(h.key('keydown','Escape').defaultPrevented,true,dialog);
  h.key('keydown','Escape',{repeat:true});
  h.key('keyup','Escape');
  assert.deepEqual(h.calls,expected?['cancelCharge',expected]:['cancelCharge'],dialog);
 }
});

test('opening the menu cancels a held charge and its late keyup cannot launch',t=>{
 const h=setup(t);
 h.key('keydown','Space',{target:h.launcher});
 h.key('keydown','KeyM');
 h.key('keyup','Space',{target:h.launcher});
 assert.deepEqual(h.calls,['beginCharge','cancelCharge','menu']);
 h.key('keydown','Escape');
 h.key('keyup','Space');
 assert.equal(h.count('release'),0);
});

test('M from the leaderboard only closes that dialog, including key repeat',t=>{
 const h=setup(t,{state:'flying',dialog:'leaderboard'});
 assert.equal(h.key('keydown','KeyM').defaultPrevented,true);
 h.key('keydown','KeyM',{repeat:true});
 h.key('keyup','KeyM');
 assert.deepEqual(h.calls,['cancelCharge','closeBoard']);
});

test('window blur and a hidden document cancel charge and movement',t=>{
 for(const cause of ['blur','hidden']){
  const h=setup(t);
  h.key('keydown','Space',{target:h.launcher});
  h.key('keydown','ArrowLeft');
  if(cause==='blur')h.window.dispatchEvent(new Event('blur'));
  else{h.document.hidden=true;h.document.dispatchEvent(new Event('visibilitychange'));}
  assert.equal(h.keys.size,0,cause);
  assert.deepEqual(h.calls,['beginCharge','cancelCharge','suspend'],cause);
  h.document.hidden=false;
  h.document.dispatchEvent(new Event('visibilitychange'));
  h.key('keyup','Space',{target:h.launcher});
  assert.equal(h.count('release'),0,cause);
  assert.equal(h.count('suspend'),1,cause);
 }
});

test('Tab pauses a flight and clears held movement before navigating',t=>{
 const h=setup(t,{state:'flying'});
 h.key('keydown','KeyW');
 assert.equal(h.keys.has('KeyW'),true);
 assert.equal(h.key('keydown','Tab').defaultPrevented,true);
 assert.equal(h.keys.size,0);
 assert.deepEqual(h.calls,['cancelCharge','pause']);
});

test('Tab in a dialog or before launch keeps native navigation and cancels charge',t=>{
 const h=setup(t);
 h.key('keydown','Space',{target:h.launcher});
 assert.equal(h.key('keydown','Tab').defaultPrevented,false);
 h.key('keyup','Space');
 assert.deepEqual(h.calls,['beginCharge','cancelCharge']);
 h.setState('flying');h.setDialog('paused');
 assert.equal(h.key('keydown','Tab',{shiftKey:true}).defaultPrevented,false);
 assert.equal(h.count('pause'),0);
});

test('browser modifier combinations never consume or run game shortcuts',t=>{
 const h=setup(t);
 for(const modifier of ['ctrlKey','altKey','metaKey']){
  for(const code of ['KeyR','KeyW','Space','Enter','Escape','Tab','KeyM','KeyB','KeyT','KeyP']){
   assert.equal(h.key('keydown',code,{[modifier]:true}).defaultPrevented,false,`${modifier} ${code}`);
   h.key('keyup',code,{[modifier]:true});
  }
 }
 assert.deepEqual(h.calls,[]);
 assert.equal(h.keys.size,0);
});

test('movement keys are available for aiming in ready state and release cleanly',t=>{
 const h=setup(t);
 for(const code of ['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowLeft','ArrowDown','ArrowRight']){
  assert.equal(h.key('keydown',code).defaultPrevented,true,code);
  assert.equal(h.keys.has(code),true,code);
  h.key('keydown',code,{repeat:true});
  h.key('keyup',code);
  assert.equal(h.keys.has(code),false,code);
 }
 assert.deepEqual(h.calls,[]);
 h.setDialog('menu');
 assert.equal(h.key('keydown','ArrowLeft').defaultPrevented,false);
 assert.equal(h.keys.size,0);
});

test('Space released after focus moves into the name field cancels instead of launching',t=>{
 const h=setup(t);
 h.key('keydown','Space',{target:h.launcher});
 h.key('keyup','Space',{target:element('input')});
 assert.deepEqual(h.calls,['beginCharge','cancelCharge']);
});

test('IME composition and already handled events do not run game commands',t=>{
 const h=setup(t);
 h.key('keydown','KeyR',{isComposing:true});
 const event=new Event('keydown',{cancelable:true});
 Object.defineProperties(event,{code:{value:'Space'},target:{value:h.launcher}});
 event.preventDefault();
 h.document.dispatchEvent(event);
 assert.deepEqual(h.calls,[]);
});

test('shop Escape closes only the shop and its size input keeps native arrows',t=>{
 const h=setup(t,{dialog:'shop'});
 h.key('keydown','ArrowRight',{target:element('input')});
 h.key('keydown','KeyG',{target:element('input')});
 assert.deepEqual(h.calls,[]);
 h.key('keydown','Escape');
 assert.deepEqual(h.calls,['cancelCharge','closeShop']);
});
test('boost shortcuts fire once only during flight and never from a dialog',t=>{
 const h=setup(t,{state:'flying'});
 h.key('keydown','Digit1');h.key('keydown','Digit1',{repeat:true});h.key('keydown','Digit2');
 assert.deepEqual(h.calls,['boost:0','boost:1']);
 h.setDialog('paused');h.key('keydown','Digit1');
 h.setDialog(null);h.setState('ready');h.key('keydown','Digit1');
 assert.deepEqual(h.calls,['boost:0','boost:1']);
});
