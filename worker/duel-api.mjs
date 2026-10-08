export const ROOM_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
export const TOKEN_PATTERN = /^[A-Za-z0-9_-]{43}$/;
export const duelJson = (data, status = 200, extra = {}) => Response.json(data, { status, headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'no-referrer', ...extra } });

export function duelName(value) {
  const name = typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : '';
  if (name.length < 2 || name.length > 18 || !/^[\p{L}\p{N} _.'-]+$/u.test(name)) throw new Error('Nutze 2–18 Buchstaben oder Zahlen für deinen Namen.');
  return name;
}
export async function readDuelJson(request) {
  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) throw new Error('JSON erwartet.');
  if (Number(request.headers.get('content-length')) > 1024) throw new Error('Anfrage zu groß.');
  const reader = request.body?.getReader(); if (!reader) throw new Error('Anfrage fehlt.');
  const chunks = []; let size = 0;
  while (true) { const { done, value } = await reader.read(); if (done) break; size += value.byteLength; if (size > 1024) { await reader.cancel(); throw new Error('Anfrage zu groß.'); } chunks.push(value); }
  const bytes = new Uint8Array(size); let offset = 0; for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  let data; try { data = JSON.parse(new TextDecoder().decode(bytes)); } catch { throw new Error('Ungültiges JSON.'); }
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('Ungültige Anfrage.');
  return data;
}
export async function hashSecret(value) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return [...new Uint8Array(digest)].map(n => n.toString(16).padStart(2, '0')).join('');
}
export function constantEqual(a, b) {
  // Both operands are fixed-length SHA-256 hex digests. Cloudflare supplies a
  // native timing-safe comparison; the fixed-work fallback keeps Node tests portable.
  const aa = new TextEncoder().encode(a || ''.padEnd(64, '0')), bb = new TextEncoder().encode(b || ''.padEnd(64, '0'));
  if (aa.length !== 64 || bb.length !== 64) return false;
  if (typeof crypto.subtle.timingSafeEqual === 'function') return crypto.subtle.timingSafeEqual(aa, bb);
  let difference = 0; for (let i = 0; i < 64; i++) difference |= aa[i] ^ bb[i]; return difference === 0;
}
function stub(namespace, name) { return namespace.getByName ? namespace.getByName(name) : namespace.get(namespace.idFromName(name)); }
async function rateLimit(request, env, action) {
  // Only the platform-injected address is used. Never trust client forwarding
  // headers, persist raw IPs, or create a globally contended rate-limit object.
  const day = Math.floor(Date.now() / 86_400_000);
  const key = await hashSecret(`${day}|${request.headers.get('cf-connecting-ip') || 'local-or-unknown'}`);
  return stub(env.DUEL_LIMITS, key).fetch(new Request('https://duel-limiter.internal/' + action, { method: 'POST' }));
}
export async function handleDuelRequest(request, env) {
  const url = new URL(request.url);
  if (url.pathname !== '/api/duels' && !url.pathname.startsWith('/api/duels/')) return null;
  const match = url.pathname.match(/^\/api\/duels\/([^/]+)\/(join|socket)$/);
  const create = url.pathname === '/api/duels';
  if (!create && (!match || !ROOM_PATTERN.test(match[1]))) return duelJson({ error: 'Dieser Duellraum ist ungültig.' }, 404);
  const action = create ? 'create' : match[2];
  if (request.method !== (action === 'socket' ? 'GET' : 'POST')) return duelJson({ error: 'Methode nicht erlaubt.' }, 405);
  if (request.headers.get('origin') !== url.origin) return duelJson({ error: 'Bitte direkt im Spiel verbinden.' }, 403);
  if (!env.DUEL_ROOMS || !env.DUEL_LIMITS) return duelJson({ error: 'Duelle sind gerade nicht verfügbar.' }, 503);
  if (action === 'socket' && request.headers.get('upgrade')?.toLowerCase() !== 'websocket') return duelJson({ error: 'WebSocket-Verbindung erwartet.' }, 426);
  let input;
  try {
    if (action !== 'socket') {
      input = await readDuelJson(request); input = { name: duelName(input.name), ...(create || input.token === undefined ? {} : { token: input.token }) };
      if (input.token !== undefined && !TOKEN_PATTERN.test(input.token)) throw new Error('Ungültiger Zugang.');
    } else if (!TOKEN_PATTERN.test(url.searchParams.get('token') || '')) throw new Error('Ungültiger Zugang.');
  } catch (error) { return duelJson({ error: error.message }, 400); }
  const limited = await rateLimit(request, env, action === 'create' ? 'create' : 'join');
  if (!limited.ok) return duelJson({ error: 'Zu viele Anfragen. Bitte warte kurz.' }, 429, { 'Retry-After': '60' });
  const room = create ? crypto.randomUUID() : match[1];
  const target = stub(env.DUEL_ROOMS, room);
  const internal = new URL(request.url); internal.pathname = '/internal/duel/' + action;
  if (action === 'socket') return target.fetch(new Request(internal, request));
  internal.search = '';
  return target.fetch(new Request(internal, { method: 'POST', headers: { 'content-type': 'application/json', origin: url.origin }, body: JSON.stringify({ ...input, room }) }));
}
