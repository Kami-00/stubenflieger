const $=id=>document.getElementById(id);
async function api(path,options={}){
 const response=await fetch(path,{...options,signal:AbortSignal.timeout(10000)});
 const data=await response.json();if(!response.ok)throw new Error(data.error||'Die Bestenliste ist gerade nicht erreichbar.');return data;
}
export function initLeaderboard(){
 let runTicket=null,result=null,loadSequence=0;
 try{$('pilot-name').value=localStorage.getItem('stubenflieger.pilot')||'';}catch{}
 function beginRun(){
  runTicket=api('/api/runs',{method:'POST'}).then(data=>data.run).catch(()=>null);
  result=null;
 }
 function setResult(blocks,flightTime){
  result={blocks,flightMs:Math.round(flightTime*1000),ticket:runTicket,saved:false};
  $('save-score').disabled=flightTime<.5;$('save-score').textContent='Eintragen';$('pilot-name').disabled=false;
  $('score-status').textContent=flightTime<.5?'Dieser Flug war zu kurz für die Bestenliste.':'Trage deinen Flug mit einem frei gewählten Pilotnamen ein.';
 }
 async function refresh(){
  const sequence=++loadSequence;
  $('leaderboard-status').textContent='Bestenliste wird geladen …';$('ranking-table').hidden=true;$('refresh-leaderboard').disabled=true;
  try{
   const {entries}=await api('/api/leaderboard');if(sequence!==loadSequence)return;
   $('ranking-body').replaceChildren();
   entries.forEach((entry,index)=>{const row=document.createElement('tr');const cells=[String(index+1),entry.name,`${entry.blocks} / ${(entry.flightMs/1000).toFixed(1)} s`,entry.points.toLocaleString('de-DE')];for(const text of cells){const cell=document.createElement('td');cell.textContent=text;row.append(cell);}$('ranking-body').append(row);});
   $('ranking-table').hidden=entries.length===0;$('leaderboard-status').textContent=entries.length?'Die 20 besten Flüge · gemeinsame Bestenliste':'Noch keine Einträge. Fliege die erste Bestmarke!';
  }catch{$('leaderboard-status').textContent='Die Bestenliste konnte nicht geladen werden. Versuche es gleich noch einmal.';}
  finally{if(sequence===loadSequence)$('refresh-leaderboard').disabled=false;}
 }
 $('refresh-leaderboard').onclick=()=>void refresh();
 $('score-form').addEventListener('submit',async event=>{
  event.preventDefault();if(!result||result.saved)return;
  const current=result,name=$('pilot-name').value.trim();$('save-score').disabled=true;$('score-status').textContent='Dein Flug wird eingetragen …';
  try{
   const run=await current.ticket;if(!run)throw new Error('Dieser Flug konnte nicht online gestartet werden. Bitte prüfe deine Verbindung und fliege noch eine Runde.');
   const saved=await api('/api/leaderboard',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({run,name,blocks:current.blocks,flightMs:current.flightMs})});
   if(current!==result)return;current.saved=true;$('save-score').textContent='✓ Gespeichert';$('pilot-name').disabled=true;$('score-status').textContent=`${saved.points.toLocaleString('de-DE')} Punkte gespeichert. Dein Flug steht jetzt in der gemeinsamen Bestenliste.`;
   try{localStorage.setItem('stubenflieger.pilot',name);}catch{}
  }catch(error){if(current===result){$('score-status').textContent=error.message;$('save-score').disabled=false;}}
 });
 return {beginRun,setResult,refresh};
}
