const movementKeys=new Set(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowLeft','ArrowDown','ArrowRight']);
const editableSelector='input,textarea,select,[contenteditable]:not([contenteditable="false"])';

export function createKeyboardControls({window,document,keys,getState,getDialog,launcher,actions}){
 let keyboardCharge=false;
 function clear(){keys.clear();keyboardCharge=false;actions.cancelCharge();}
 function keydown(event){
  if(event.defaultPrevented||event.isComposing||event.ctrlKey||event.altKey||event.metaKey)return;
  const dialog=getDialog();
  if(event.code==='Tab'){
   clear();
   if(!dialog&&getState()==='flying'){event.preventDefault();actions.pause();}
   return;
  }
  if(event.code==='Escape'){
   event.preventDefault();
   if(event.repeat)return;
   clear();
   if(dialog==='leaderboard')actions.closeBoard();
   else if(dialog==='shop')actions.closeShop?.();
   else if(dialog==='menu')actions.closeMenu();
   else if(dialog==='result')actions.reset();
   else if(dialog!=='error')actions.pause();
   return;
  }
  if(event.target.closest?.(editableSelector)||dialog==='error')return;
  if(event.code==='KeyV'&&!dialog){event.preventDefault();if(!event.repeat)actions.camera?.();return;}
  const shortcuts={KeyR:'reset',KeyM:dialog==='menu'?'closeMenu':dialog==='leaderboard'?'closeBoard':dialog==='shop'?'closeShop':'menu',KeyB:'board',KeyT:'sound',KeyG:dialog==='shop'?'closeShop':'shop'};
  const action=shortcuts[event.code];
  if(action&&actions[action]){event.preventDefault();if(!event.repeat){clear();actions[action]();}return;}
  if(event.code==='KeyP'){
   if(!dialog||dialog==='paused'){event.preventDefault();if(!event.repeat){clear();actions.pause();}}
   return;
  }
  if(dialog)return;
  if((event.code==='Digit1'||event.code==='Digit2')&&getState()==='flying'){
   event.preventDefault();if(!event.repeat)actions.boost?.(event.code==='Digit1'?0:1);return;
  }
  const nativeControl=event.target.closest?.('button,a[href],summary,[role="button"]');
  if(event.code==='Space'){
   if(nativeControl&&nativeControl!==launcher)return;
   event.preventDefault();
   if(!event.repeat&&getState()==='ready')keyboardCharge=actions.beginCharge()===true;
   return;
  }
  if(event.code==='Enter'){
   if(!nativeControl&&getState()==='ready'){event.preventDefault();if(!event.repeat)actions.quickLaunch();}
   return;
  }
  if(movementKeys.has(event.code)&&(getState()==='ready'||getState()==='flying')){
   event.preventDefault();keys.add(event.code);
  }
 }
 function keyup(event){
  keys.delete(event.code);
  if(event.code==='Space'&&keyboardCharge){
   event.preventDefault();keyboardCharge=false;
   if(!getDialog()&&getState()==='ready'&&!event.target.closest?.(editableSelector))actions.release();
   else actions.cancelCharge();
  }
 }
 function suspend(){clear();actions.suspend();}
 function visibility(){if(document.hidden)suspend();}
 document.addEventListener('keydown',keydown);
 document.addEventListener('keyup',keyup);
 window.addEventListener('blur',suspend);
 document.addEventListener('visibilitychange',visibility);
 return {clear,destroy(){clear();document.removeEventListener('keydown',keydown);document.removeEventListener('keyup',keyup);window.removeEventListener('blur',suspend);document.removeEventListener('visibilitychange',visibility);}};
}
