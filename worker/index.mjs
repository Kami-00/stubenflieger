const json=(data,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
export function validateScore(input){
 if(!input||typeof input!=='object')throw new Error('Ungültiges Ergebnis.');
 const name=typeof input.name==='string'?input.name.trim().replace(/\s+/g,' '):'';
 if(name.length<2||name.length>20||! /^[\p{L}\p{N} _.'-]+$/u.test(name))throw new Error('Nutze 2–20 Buchstaben, Zahlen, Leerzeichen oder . _ - für deinen Namen.');
 if(typeof input.run!=='string'||! /^[0-9a-f-]{36}$/.test(input.run))throw new Error('Bitte starte einen neuen Flug.');
 if(!Number.isInteger(input.blocks)||input.blocks<0||input.blocks>63||!Number.isInteger(input.flightMs)||input.flightMs<500||input.flightMs>1800000)throw new Error('Dieses Flugergebnis ist nicht gültig.');
 return {name,run:input.run,blocks:input.blocks,flightMs:input.flightMs,points:input.blocks*100+Math.floor(input.flightMs/100)};
}
async function readJson(request){
 if(!request.headers.get('content-type')?.startsWith('application/json'))throw new Error('JSON erwartet.');
 const reader=request.body?.getReader();if(!reader)throw new Error('Anfrage fehlt.');let size=0;const chunks=[];
 while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>2048){await reader.cancel();throw new Error('Anfrage zu groß.');}chunks.push(value);}
 const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.byteLength;}return JSON.parse(new TextDecoder().decode(bytes));
}
/** @param {Request} request @param {Env} env */
async function handle(request,env){
 const url=new URL(request.url);
 if(!url.pathname.startsWith('/api/'))return env.ASSETS.fetch(request);
 if(request.method==='GET'&&url.pathname==='/api/leaderboard'){
  const {results}=await env.DB.prepare('SELECT name, blocks, flight_ms AS flightMs, points FROM flights WHERE name IS NOT NULL ORDER BY points DESC, blocks DESC, flight_ms DESC, submitted_at ASC LIMIT 20').all();
  return json({entries:results});
 }
 if(request.method!=='POST')return json({error:'Nicht gefunden.'},404);
 if(request.headers.get('origin')!==url.origin)return json({error:'Bitte direkt im Spiel absenden.'},403);
 const now=Date.now();
 if(url.pathname==='/api/runs'){
  const id=crypto.randomUUID();
  await env.DB.batch([
   env.DB.prepare('DELETE FROM flights WHERE name IS NULL AND started_at < ?').bind(now-86400000),
   env.DB.prepare('INSERT INTO flights (id, started_at) VALUES (?, ?)').bind(id,now)
  ]);
  return json({run:id},201);
 }
 if(url.pathname==='/api/leaderboard'){
  let result;try{result=validateScore(await readJson(request));}catch(error){return json({error:error.message},400);}
  const run=await env.DB.prepare('SELECT started_at, name, blocks, flight_ms AS flightMs FROM flights WHERE id = ?').bind(result.run).first();
  if(!run||now-run.started_at>86400000)return json({error:'Dieser Flug ist abgelaufen. Bitte fliege noch eine Runde.'},400);
  if(run.name!==null){if(run.name===result.name&&run.blocks===result.blocks&&run.flightMs===result.flightMs)return json({saved:true,points:result.points});return json({error:'Dieser Flug wurde bereits eingetragen.'},409);}
  if(result.flightMs>now-run.started_at+2000)return json({error:'Die Flugzeit passt nicht zu diesem Flug.'},400);
  const update=await env.DB.prepare('UPDATE flights SET name = ?, blocks = ?, flight_ms = ?, points = ?, submitted_at = ? WHERE id = ? AND name IS NULL').bind(result.name,result.blocks,result.flightMs,result.points,now,result.run).run();
  if(!update.meta.changes)return json({error:'Dieser Flug wurde bereits eingetragen.'},409);
  return json({saved:true,points:result.points},201);
 }
 return json({error:'Nicht gefunden.'},404);
}
export default {async fetch(request,env){try{return await handle(request,env);}catch(error){console.error(JSON.stringify({event:'api_error',message:error.message}));return json({error:'Die Bestenliste ist gerade nicht erreichbar. Bitte versuche es gleich noch einmal.'},503);}}};
