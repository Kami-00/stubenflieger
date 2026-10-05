// One active dialog owns focus; the rest of the game is temporarily inert.
export function createDialogs(document,root){
 const modals=[...root.querySelectorAll('.modal')];
 const selector='button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"])';
 let active=null;
 function items(){return active?[...active.querySelectorAll(selector)].filter(el=>!el.closest('[hidden],[inert]')&&el.getClientRects().length):[];}
 function focus(element){(element||items()[0]||active)?.focus({preventScroll:false});}
 function open(id,initialFocus){
  active=id?document.getElementById(id):null;
  for(const modal of modals){modal.hidden=modal!==active;modal.tabIndex=-1;}
  for(const child of root.children)child.inert=Boolean(active)&&child!==active;
  focus(initialFocus);
 }
 document.addEventListener('keydown',event=>{
  if(!active||event.key!=='Tab')return;
  const controls=items(),first=controls[0],last=controls.at(-1),focused=document.activeElement;
  if(!controls.length){event.preventDefault();focus(active);}
  else if(!controls.includes(focused)){event.preventDefault();focus(event.shiftKey?last:first);}
  else if(event.shiftKey&&focused===first){event.preventDefault();focus(last);}
  else if(!event.shiftKey&&focused===last){event.preventDefault();focus(first);}
 });
 document.addEventListener('focusin',event=>{if(active&&!active.contains(event.target))focus();});
 return {open,close(target){open(null,target);},current(){return active?.id??null;}};
}
