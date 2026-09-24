import {levelAngle, shortestDelta} from './orientation.mjs';
const $ = id => document.getElementById(id);
let active=false, target=0, current=0, lastSample=0, frame=0, previousTime=0, watchdog, first=true;
function fit(){
 const box=$('reading'), text=$('display');
 let size=36; text.style.fontSize=size+'px';
 while(size>16 && (text.scrollHeight > box.clientHeight-36 || text.scrollWidth>box.clientWidth)){size--;text.style.fontSize=size+'px';}
}
function setText(value){$('text').value=value;$('display').textContent=value || 'Dein Text.';fit();}
$('text').addEventListener('input',()=>setText($('text').value));
new ResizeObserver(fit).observe($('reading'));
setText($('text').value);
function status(message){if($('status').textContent!==message)$('status').textContent=message;}
function sample(event){
 if(!active || !Number.isFinite(event.beta) || !Number.isFinite(event.gamma))return;
 lastSample=performance.now();
 const screenAngle=screen.orientation?.angle ?? (typeof window.orientation==='number'?window.orientation:0);
 const next=levelAngle(event.beta,event.gamma,screenAngle);
 $('mode').textContent='Ausrichtung aktiv';$('mode').className='tag active';
 if(next===null){status('Fast flach gehalten: Die letzte Ausrichtung bleibt erhalten. Hebe das iPhone etwas an.');return;}
 target=current+shortestDelta(current,next);
 if(first){current=target;first=false;}
 status('Aktiv. Neige dein iPhone – dein Text bleibt waagerecht.');
}
function animate(time){
 if(!active)return;
 const dt=Math.min(time-previousTime || 16,80);previousTime=time;
 current+=shortestDelta(current,target)*(1-Math.exp(-dt/32));
 if(Math.abs(current)>3600){target-=current;current=0;}
 $('reading').style.transform=`rotate(${current}deg)`;
 $('angle').textContent=`${Math.round(shortestDelta(0,current))}°`;
 frame=requestAnimationFrame(animate);
}
function stop(){active=false;window.removeEventListener('deviceorientation',sample);cancelAnimationFrame(frame);clearInterval(watchdog);$('start').textContent='Ausrichtung starten';$('mode').textContent='Pausiert';$('mode').className='tag';status('Ausrichtung pausiert. Tippe auf Start, um fortzufahren.');}
$('start').addEventListener('click',async()=>{
 if(active){stop();return;}
 if(!window.isSecureContext){status('Bitte öffne die Seite über HTTPS, damit die Sensoren funktionieren.');return;}
 if(!window.DeviceOrientationEvent){status('Hier sind keine Bewegungssensoren verfügbar. Öffne die Seite in Safari auf deinem iPhone.');return;}
 $('start').disabled=true;
 try{
  if(typeof DeviceOrientationEvent.requestPermission==='function'){
   const result=await DeviceOrientationEvent.requestPermission();
   if(result!=='granted'){status('Sensorzugriff wurde abgelehnt. Erlaube Bewegung und Ausrichtung in den Website-Einstellungen und lade die Seite neu.');return;}
  }
  active=true;first=true;lastSample=performance.now();previousTime=0;
  window.addEventListener('deviceorientation',sample);
  $('start').textContent='Ausrichtung pausieren';status('Warte auf Bewegungssensoren …');
  frame=requestAnimationFrame(animate);
  watchdog=setInterval(()=>{if(performance.now()-lastSample>3500){$('mode').textContent='Kein Sensorsignal';$('mode').className='tag';status('Keine Sensordaten. Öffne die Seite direkt in Safari auf dem iPhone und prüfe die Sensorfreigabe.');}},1000);
 }catch{status('Sensorzugriff nicht möglich. Öffne die Seite direkt in Safari und versuche es erneut.');}
 finally{$('start').disabled=false;}
});
if(document.modelContext?.registerTool){
 try{Promise.resolve(document.modelContext.registerTool({name:'set_display_text',description:'Setzt den sichtbaren Text der Horizont-Anzeige.',inputSchema:{type:'object',properties:{text:{type:'string',maxLength:160}},required:['text'],additionalProperties:false},annotations:{readOnlyHint:false},execute(input){if(typeof input?.text!=='string'||input.text.length>160)throw new Error('Text mit maximal 160 Zeichen erforderlich.');setText(input.text);return {text:$('text').value};}})).catch(()=>{});}catch{}
}
