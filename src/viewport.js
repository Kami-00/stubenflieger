export function unrotateDelta(x,y,angle){const a=angle*Math.PI/180;return {x:x*Math.cos(a)+y*Math.sin(a),y:-x*Math.sin(a)+y*Math.cos(a)};}
let rotation=0;
try{const saved=Number(localStorage.getItem('stubenflieger.rotation'));if([0,90,180,270].includes(saved))rotation=saved;}catch{}
export const gameRotation=()=>rotation;
export const gameSize=()=>rotation%180?{width:innerHeight,height:innerWidth}:{width:innerWidth,height:innerHeight};
export function initViewport(){
 const app=document.getElementById('app');
 function update(){const {width,height}=gameSize();app.style.width=width+'px';app.style.height=height+'px';app.style.transform=`translate(-50%, -50%) rotate(${rotation}deg)`;document.getElementById('rotation-value').textContent=rotation+'°';window.dispatchEvent(new Event('gameviewportchange'));}
 document.getElementById('rotate-view').addEventListener('click',()=>{rotation=(rotation+90)%360;try{localStorage.setItem('stubenflieger.rotation',String(rotation));}catch{}update();});
 window.addEventListener('resize',update);update();
}
