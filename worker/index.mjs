import { LEVELS, getLevel } from '../src/levels.js';

const json = (data, status = 200) => Response.json(data, {
  status,
  headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' },
});

function validLevel(value) {
  return Number.isInteger(value) && value >= 1 && value <= LEVELS.length;
}

export function validateScore(input) {
  if (!input || typeof input !== 'object') throw new Error('Ungültiges Ergebnis.');
  const name = typeof input.name === 'string' ? input.name.trim().replace(/\s+/g, ' ') : '';
  if (name.length < 2 || name.length > 20 || !/^[\p{L}\p{N} _.'-]+$/u.test(name)) {
    throw new Error('Nutze 2–20 Buchstaben, Zahlen, Leerzeichen oder . _ - für deinen Namen.');
  }
  if (typeof input.run !== 'string' || !/^[0-9a-f-]{36}$/.test(input.run)) {
    throw new Error('Bitte starte einen neuen Flug.');
  }
  const level = input.level === undefined ? 1 : input.level;
  const stars = input.stars === undefined ? 0 : input.stars;
  if (!validLevel(level)) throw new Error('Dieses Level ist nicht gültig.');
  const config = getLevel(level - 1);
  const maxBlocks = config.towers.reduce((sum, tower) => sum + tower.layers * 3, 0);
  if (!Number.isInteger(input.blocks) || input.blocks < 0 || input.blocks > maxBlocks
    || !Number.isInteger(stars) || stars < 0 || stars > config.collectibles.length
    || !Number.isInteger(input.flightMs) || input.flightMs < 500 || input.flightMs > 1_800_000) {
    throw new Error('Dieses Flugergebnis ist nicht gültig.');
  }
  return {
    name, run: input.run, blocks: input.blocks, stars, level, flightMs: input.flightMs,
    points: input.blocks * 100 + stars * 150 + Math.floor(input.flightMs / 100),
  };
}

async function readJson(request) {
  if (!request.headers.get('content-type')?.startsWith('application/json')) throw new Error('JSON erwartet.');
  const reader = request.body?.getReader();
  if (!reader) throw new Error('Anfrage fehlt.');
  let size = 0;
  const chunks = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 2048) {
      await reader.cancel();
      throw new Error('Anfrage zu groß.');
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  try {
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    throw new Error('Ungültiges JSON.');
  }
}

function sameResult(run, result) {
  return run.name === result.name && run.blocks === result.blocks && run.stars === result.stars
    && run.level === result.level && run.flightMs === result.flightMs;
}

async function readRun(db, id) {
  return db.prepare(`SELECT started_at, name, blocks, stars, level, flight_ms AS flightMs
    FROM flights_v2 WHERE id = ?`).bind(id).first();
}

async function handle(request, env) {
  const url = new URL(request.url);
  if (!url.pathname.startsWith('/api/')) return env.ASSETS.fetch(request);
  if (request.method === 'GET' && url.pathname === '/api/leaderboard') {
    const { results } = await env.DB.prepare(`
      SELECT name, blocks, stars, level, flightMs, points FROM (
        SELECT name, blocks, 0 AS stars, 1 AS level, flight_ms AS flightMs, points, started_at
        FROM flights WHERE name IS NOT NULL
        UNION ALL
        SELECT name, blocks, stars, level, flight_ms AS flightMs, points, started_at
        FROM flights_v2 WHERE name IS NOT NULL
      ) ORDER BY points DESC, blocks DESC, flightMs DESC, started_at ASC LIMIT 20
    `).all();
    return json({ entries: results });
  }
  if (request.method !== 'POST') return json({ error: 'Nicht gefunden.' }, 404);
  if (request.headers.get('origin') !== url.origin) return json({ error: 'Bitte direkt im Spiel absenden.' }, 403);
  const now = Date.now();
  if (url.pathname === '/api/runs') {
    let level = 1;
    if (request.body) {
      try {
        const input = await readJson(request);
        if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Ungültiger Flugstart.');
        if (input.level !== undefined) level = input.level;
      } catch (error) {
        return json({ error: error.message }, 400);
      }
    }
    if (!validLevel(level)) return json({ error: 'Dieses Level ist nicht gültig.' }, 400);
    const id = crypto.randomUUID();
    await env.DB.batch([
      env.DB.prepare('DELETE FROM flights_v2 WHERE name IS NULL AND started_at < ?').bind(now - 86_400_000),
      env.DB.prepare('INSERT INTO flights_v2 (id, started_at, level) VALUES (?, ?, ?)').bind(id, now, level),
    ]);
    return json({ run: id }, 201);
  }
  if (url.pathname === '/api/leaderboard') {
    let result;
    try {
      result = validateScore(await readJson(request));
    } catch (error) {
      return json({ error: error.message }, 400);
    }
    const run = await readRun(env.DB, result.run);
    if (!run || now - run.started_at > 86_400_000) {
      return json({ error: 'Dieser Flug ist abgelaufen. Bitte fliege noch eine Runde.' }, 400);
    }
    if (run.level !== result.level) return json({ error: 'Das Level passt nicht zu diesem Flug. Starte einen neuen Flug.' }, 400);
    if (run.name !== null) {
      if (sameResult(run, result)) return json({ saved: true, points: result.points });
      return json({ error: 'Dieser Flug wurde bereits eingetragen.' }, 409);
    }
    if (result.flightMs > now - run.started_at + 2000) {
      return json({ error: 'Die Flugzeit passt nicht zu diesem Flug.' }, 400);
    }
    const update = await env.DB.prepare(`
      UPDATE flights_v2 SET name = ?, blocks = ?, stars = ?, flight_ms = ?, points = ?, submitted_at = ?
      WHERE id = ? AND name IS NULL AND level = ?
    `).bind(result.name, result.blocks, result.stars, result.flightMs, result.points, now, result.run, result.level).run();
    if (!update.meta.changes) {
      const saved = await readRun(env.DB, result.run);
      if (saved && sameResult(saved, result)) return json({ saved: true, points: result.points });
      return json({ error: 'Dieser Flug wurde bereits eingetragen.' }, 409);
    }
    return json({ saved: true, points: result.points }, 201);
  }
  return json({ error: 'Nicht gefunden.' }, 404);
}

export default {
  async fetch(request, env) {
    try {
      return await handle(request, env);
    } catch (error) {
      console.error(JSON.stringify({ event: 'api_error', message: error.message }));
      return json({ error: 'Die Bestenliste ist gerade nicht erreichbar. Bitte versuche es gleich noch einmal.' }, 503);
    }
  },
};
