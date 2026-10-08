import { createDuelSimulation, DUEL_RULES } from '../src/duel-simulation.js';
import { duelJson, duelName, duelAppearance, readDuelJson, hashSecret, constantEqual, TOKEN_PATTERN, ROOM_PATTERN } from './duel-api.mjs';

export const DUEL_TIMING = Object.freeze({ tickMs: 1000 / 30, snapshotMs: 100, countdownMs: 3000, reconnectMs: 20_000, staleInputMs: 500, ghostMs: 15_000, idleMs: 600_000, absoluteMs: 7_200_000, maxCatchup: 5 });
const ACTIVE = new Set(['countdown', 'playing', 'reconnecting']);
const PLAYER_IDS = Object.freeze(Array.from({ length: DUEL_RULES.maxPlayers || 5 }, (_, i) => `p${i + 1}`));
const MIN_PLAYERS = DUEL_RULES.minPlayers || 2;
const neutral = () => ({ steer: 0, pitch: 0, fire: false, lastAt: 0 });
const copy = value => structuredClone(value);
const token = () => btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const close = (ws, code = 1000, reason = '') => { try { ws.close(code, reason); } catch {} };

// Plain exported Durable Object classes keep the existing node:test Worker
// suite importable. The runtime passes the same DurableObjectState interface.
export class DuelRoom {
  constructor(ctx, env) {
    this.ctx = ctx; this.env = env; this.record = null; this.sockets = new Map(); this.inputs = {};
    this.sim = null; this.timer = null; this.pulsing = false; this.schemaReady = false; this.lastTick = 0; this.accumulator = 0; this.playedMs = 0; this.lastSnapshot = 0; this.nextAlarmAt = 0;
    this.ready = ctx.blockConcurrencyWhile(async () => {
      this.ensureSchema();
      const row = ctx.storage.sql.exec('SELECT value FROM duel_state WHERE key = ?', 'room').toArray()[0];
      if (row) this.record = JSON.parse(row.value);
      // Probing an unknown UUID must not leave an empty SQLite database behind.
      // A real create recreates the table synchronously in commit().
      if (!this.record) { await ctx.storage.deleteAll(); this.schemaReady = false; return; }
      this.playedMs = this.record.playedMs || 0;
      const recovered = copy(this.record); recovered.hostId ||= recovered.players[0]?.id || PLAYER_IDS[0];
      for (const player of recovered.players) { player.connected = false; player.left ||= false; player.eliminated ||= false; player.appearance = duelAppearance(player.appearance); }
      for (const ws of ctx.getWebSockets()) {
        const attachment = ws.deserializeAttachment();
        const player = recovered.players.find(p => !p.left && p.id === attachment?.slot && p.connectionId === attachment?.connectionId);
        if (!player || this.sockets.has(player.id) || ws.readyState > 1) { close(ws, 4009, 'Verbindung ersetzt.'); continue; }
        player.connected = true; player.lobbyUntil = null;
        this.sockets.set(player.id, { ws, lastSeen: attachment.lastSeen || Date.now(), seq: -1, accepted: [], messages: [], connectionId: attachment.connectionId });
      }
      if (ACTIVE.has(recovered.phase)) {
        recovered.phase = 'finished'; recovered.winner = 'draw'; recovered.reason = 'server_restart'; recovered.snapshot = null;
        recovered.players.forEach(p => { p.ready = false; p.rematch = false; });
      }
      if (recovered.phase === 'lobby') for (const player of recovered.players) if (!player.connected) player.lobbyUntil ||= Date.now() + DUEL_TIMING.reconnectMs;
      this.commit(recovered); this.clearInputs(); this.broadcast(); await this.scheduleAlarm();
    });
  }
  ensureSchema() { if (!this.schemaReady) { this.ctx.storage.sql.exec('CREATE TABLE IF NOT EXISTS duel_state (key TEXT PRIMARY KEY, value TEXT NOT NULL)'); this.schemaReady = true; } }
  commit(record) { this.ensureSchema(); this.ctx.storage.sql.exec('INSERT OR REPLACE INTO duel_state (key, value) VALUES (?, ?)', 'room', JSON.stringify(record)); this.record = record; }
  publicSnapshot(snapshot) {
    if (!snapshot) return null;
    // Appearance is room metadata. Never feed it into authoritative flight,
    // collision, weapon, or health state supplied by the shared simulation.
    const appearances = new Map(this.record.players.map(p => [p.id, p.appearance]));
    return { ...snapshot, players: snapshot.players.map(p => ({ ...p, appearance: duelAppearance(appearances.get(p.id)) })) };
  }
  state(now = Date.now()) {
    const r = this.record;
    if (!r) return { type: 'state', phase: 'expired', players: [], countdown: 0, remaining: 0, snapshot: null, expiresAt: now };
    return {
      type: 'state', phase: r.phase, hostId: r.hostId || PLAYER_IDS[0],
      players: r.players.map(({ id, name, connected, ready, rematch, left, eliminated, appearance }) => ({ id, name, connected, ready, rematch: !!rematch, left: !!left, eliminated: !!eliminated, appearance: duelAppearance(appearance) })),
      countdown: r.phase === 'countdown' ? Math.max(0, (r.countdownUntil - now) / 1000) : 0,
      remaining: Math.max(0, (DUEL_RULES.roundSeconds || 180) - this.playedMs / 1000),
      snapshot: this.publicSnapshot(this.sim?.snapshot() || r.snapshot || null),
      winner: r.winner || null, reason: r.reason || null,
      expiresAt: Math.min(r.createdAt + DUEL_TIMING.absoluteMs, r.lastActivity + DUEL_TIMING.idleMs),
    };
  }
  send(ws, data) { try { ws.send(JSON.stringify(data)); return true; } catch { return false; } }
  broadcast() { const state = this.state(); for (const { ws } of this.sockets.values()) this.send(ws, state); }
  expired(now = Date.now()) { const r = this.record; return !r || now >= r.createdAt + DUEL_TIMING.absoluteMs || now >= r.lastActivity + DUEL_TIMING.idleMs; }
  clearInputs() { this.inputs = Object.fromEntries((this.record?.players || []).map(p => [p.id, neutral()])); }
  updateAppearance(slot, appearance) {
    const player = this.record.players.find(p => p.id === slot);
    if (player.appearance?.color === appearance.color && player.appearance?.effect === appearance.effect) return;
    const r = copy(this.record); r.players.find(p => p.id === slot).appearance = appearance; r.lastActivity = Date.now(); this.commit(r);
  }
  participants() { return this.record.players.filter(p => !p.left); }
  living() {
    const simulated = this.sim?.snapshot().players;
    return this.participants().filter(p => !p.eliminated && (!simulated || simulated.some(s => s.id === p.id && s.hp > 0 && !s.eliminated)));
  }
  selectHost(record) {
    if (!record.players.some(p => p.id === record.hostId && !p.left)) record.hostId = record.players.find(p => !p.left && p.connected)?.id || record.players.find(p => !p.left)?.id || null;
  }
  syncEliminations(snapshot = this.sim?.snapshot()) {
    if (!snapshot || !this.record) return;
    const eliminated = new Set(snapshot.players.filter(p => p.eliminated || p.hp <= 0).map(p => p.id));
    if (!this.record.players.some(p => eliminated.has(p.id) && !p.eliminated)) return;
    const r = copy(this.record); for (const p of r.players) if (eliminated.has(p.id)) { p.eliminated = true; this.inputs[p.id] = neutral(); }
    this.commit(r);
  }
  resumeIfPresent(now = Date.now()) {
    if (this.record?.phase !== 'reconnecting' || !this.living().every(p => p.connected)) return;
    const r = copy(this.record); r.phase = r.resumePhase || 'playing';
    if (r.phase === 'countdown') r.countdownUntil = now + (r.countdownRemaining ?? DUEL_TIMING.countdownMs);
    r.reconnectUntil = null; this.commit(r); this.lastTick = now; this.accumulator = 0; this.startLoop();
  }
  eliminatePlayers(ids, reason) {
    if (!ids.length || !this.sim) return;
    const snapshot = this.sim.eliminateMany(ids, reason); this.syncEliminations(snapshot);
    if (snapshot.winner) this.finish(snapshot.winner, snapshot.reason || reason);
  }
  resolveReconnect(now = Date.now()) {
    if (this.record?.phase !== 'reconnecting' || now < this.record.reconnectUntil) return;
    this.eliminatePlayers(this.living().filter(p => !p.connected).map(p => p.id), 'disconnect'); this.resumeIfPresent(now);
  }
  returnToLobby(players = this.participants()) {
    this.stopLoop(); this.sim = null; this.playedMs = 0; this.accumulator = 0;
    const r = copy(this.record); r.phase = 'lobby'; r.players = copy(players); r.snapshot = null; r.winner = null; r.reason = null; r.playedMs = 0; r.lastActivity = Date.now();
    r.players.forEach(p => { p.ready = false; p.rematch = false; p.eliminated = false; p.left = false; p.lobbyUntil = p.connected ? null : Date.now() + DUEL_TIMING.reconnectMs; });
    if (!r.players.some(p => p.id === r.hostId && p.connected)) r.hostId = null;
    this.selectHost(r); this.commit(r); this.clearInputs();
  }
  tryRematch() {
    if (this.record?.phase !== 'finished') return;
    const candidates = this.participants().filter(p => p.connected);
    if (candidates.length >= MIN_PLAYERS && candidates.every(p => p.rematch)) this.returnToLobby(candidates);
  }
  pruneLobby(now = Date.now()) {
    if (this.record?.phase !== 'lobby') return;
    const players = this.record.players.filter(p => p.connected || !p.lobbyUntil || p.lobbyUntil > now);
    if (players.length === this.record.players.length) return;
    const r = copy(this.record); r.players = copy(players); r.players.forEach(p => { p.ready = false; }); this.selectHost(r);
    this.commit(r); this.clearInputs(); this.broadcast();
  }
  async fetch(request) {
    await this.ready;
    const url = new URL(request.url), action = url.pathname.split('/').pop();
    if (request.headers.get('origin') !== url.origin) return duelJson({ error: 'Ungültiger Ursprung.' }, 403);
    if (!['create', 'join', 'socket'].includes(action)) return duelJson({ error: 'Nicht gefunden.' }, 404);
    if (action === 'socket') {
      if (request.method !== 'GET' || request.headers.get('upgrade')?.toLowerCase() !== 'websocket') return duelJson({ error: 'WebSocket erwartet.' }, 426);
      const provided = url.searchParams.get('token') || '';
      if (!TOKEN_PATTERN.test(provided)) return duelJson({ error: 'Ungültiger Zugang.' }, 403);
      const digest = await hashSecret(provided);
      if (this.expired()) { if (this.record) await this.expire(); return duelJson({ error: 'Dieser Raum ist abgelaufen.' }, 410); }
      if (this.record.origin !== url.origin) return duelJson({ error: 'Ungültiger Ursprung.' }, 403);
      this.pruneLobby();
      const player = this.record.players.find(p => !p.left && constantEqual(p.tokenHash, digest));
      if (!player) return duelJson({ error: 'Ungültiger Zugang.' }, 403);
      const pair = new WebSocketPair(); const [client, server] = Object.values(pair);
      this.attach(server, player.id); await this.scheduleAlarm();
      return new Response(null, { status: 101, webSocket: client });
    }
    if (request.method !== 'POST') return duelJson({ error: 'Methode nicht erlaubt.' }, 405);
    let input, name, appearance;
    try { input = await readDuelJson(request); name = duelName(input.name); appearance = duelAppearance(input.appearance); if (!ROOM_PATTERN.test(input.room || '')) throw new Error('Ungültiger Raum.'); if (input.token !== undefined && !TOKEN_PATTERN.test(input.token)) throw new Error('Ungültiger Zugang.'); }
    catch (error) { return duelJson({ error: error.message }, 400); }
    // Finish asynchronous crypto before reading/reserving a seat, so two joins
    // cannot both observe the same free seat across an await boundary.
    const credential = action === 'join' && input.token ? input.token : token(), digest = await hashSecret(credential), now = Date.now();
    if (action === 'create') {
      if (this.record) return duelJson({ error: 'Dieser Raum existiert bereits.' }, 409);
      const r = { room: input.room, origin: url.origin, hostId: PLAYER_IDS[0], createdAt: now, lastActivity: now, phase: 'lobby', winner: null, reason: null, snapshot: null, players: [{ id: PLAYER_IDS[0], name, appearance, tokenHash: digest, connected: false, ready: false, rematch: false, left: false, eliminated: false, connectionId: null, lobbyUntil: now + DUEL_TIMING.reconnectMs }] };
      this.commit(r); await this.scheduleAlarm();
      return duelJson({ room: r.room, token: credential, slot: PLAYER_IDS[0], appearance, inviteUrl: `/duel#room=${r.room}`, expiresAt: this.state(now).expiresAt }, 201);
    }
    if (this.expired(now)) { if (this.record) await this.expire(); return duelJson({ error: 'Dieser Raum ist abgelaufen.' }, 410); }
    if (this.record.origin !== url.origin || this.record.room !== input.room) return duelJson({ error: 'Ungültiger Raum.' }, 403);
    this.pruneLobby(now);
    let seat;
    if (input.token) {
      seat = this.record.players.find(p => !p.left && constantEqual(p.tokenHash, digest));
      if (!seat) return duelJson({ error: 'Dieser Zugang gehört nicht zum Raum.' }, 403);
      // A resumed active round keeps its original cosmetics even when a newer
      // local profile is sent. Omission also preserves the previous choice.
      if (this.record.phase === 'lobby' && input.appearance !== undefined) { this.updateAppearance(seat.id, appearance); this.broadcast(); }
    } else {
      const available = PLAYER_IDS.find(id => !this.record.players.some(p => p.id === id));
      if (this.record.phase !== 'lobby' || !available) return duelJson({ error: 'Der Raum ist voll oder die Runde hat bereits begonnen.' }, 409);
      seat = { id: available, name, appearance, tokenHash: digest, connected: false, ready: false, rematch: false, left: false, eliminated: false, connectionId: null, lobbyUntil: now + DUEL_TIMING.reconnectMs };
      const r = copy(this.record); r.players.push(seat); r.players.forEach(p => { p.ready = false; }); this.selectHost(r); r.lastActivity = now; this.commit(r); this.inputs[seat.id] = neutral(); this.broadcast();
    }
    await this.scheduleAlarm();
    return duelJson({ room: this.record.room, token: credential, slot: seat.id, appearance: duelAppearance(this.record.players.find(p => p.id === seat.id).appearance), expiresAt: this.state(now).expiresAt });
  }
  attach(ws, slot) {
    const now = Date.now(), old = this.sockets.get(slot), connectionId = crypto.randomUUID();
    this.resolveReconnect(now);
    const r = copy(this.record), player = r.players.find(p => p.id === slot); player.connected = true; player.connectionId = connectionId; player.lobbyUntil = null;
    r.lastActivity = now; this.commit(r);
    this.ctx.acceptWebSocket(ws, [slot]); ws.serializeAttachment({ slot, connectionId, lastSeen: now });
    this.sockets.set(slot, { ws, connectionId, lastSeen: now, seq: -1, accepted: [], messages: [] }); this.inputs[slot] = neutral();
    if (old) close(old.ws, 4009, 'In einem anderen Fenster verbunden.');
    this.send(ws, { type: 'welcome', slot });
    this.resumeIfPresent(now);
    this.broadcast();
  }
  identity(ws) {
    const att = ws.deserializeAttachment(); const connection = this.sockets.get(att?.slot);
    return connection?.ws === ws && connection.connectionId === att?.connectionId ? { slot: att.slot, connection } : null;
  }
  async webSocketMessage(ws, message) {
    await this.ready;
    const who = this.identity(ws); if (!who) { close(ws, 4009, 'Verbindung ersetzt.'); return; }
    if (this.expired()) { await this.expire(); return; }
    if (typeof message !== 'string') { await this.removeSocket(ws, 1003, 'Nur JSON-Nachrichten.'); return; }
    if (message.length > 1024 || new TextEncoder().encode(message).byteLength > 1024) { await this.removeSocket(ws, 1009, 'Nachricht zu groß.'); return; }
    const now = Date.now(), { slot, connection } = who;
    connection.messages = connection.messages.filter(at => now - at < 1000);
    if (connection.messages.length >= 50) { await this.removeSocket(ws, 1008, 'Zu viele Nachrichten.'); return; }
    connection.messages.push(now);
    let data; try { data = JSON.parse(message); if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error(); }
    catch { this.send(ws, { type: 'error', message: 'Ungültige Nachricht.' }); return; }
    connection.lastSeen = now; ws.serializeAttachment({ slot, connectionId: connection.connectionId, lastSeen: now });
    if (data.type === 'ping') { if (typeof data.sentAt === 'number' && Number.isFinite(data.sentAt)) this.send(ws, { type: 'pong', sentAt: data.sentAt }); return; }
    if (data.type === 'input') {
      if (!Number.isSafeInteger(data.seq) || data.seq < 0 || data.seq <= connection.seq || typeof data.steer !== 'number' || !Number.isFinite(data.steer) || Math.abs(data.steer) > 1 || typeof data.pitch !== 'number' || !Number.isFinite(data.pitch) || Math.abs(data.pitch) > 1 || typeof data.fire !== 'boolean') { this.send(ws, { type: 'error', message: 'Ungültige Steuerung.' }); return; }
      connection.accepted = connection.accepted.filter(at => now - at < 1000);
      if (connection.accepted.length >= 20) return;
      connection.accepted.push(now); connection.seq = data.seq;
      if (this.record.phase === 'playing' && this.living().some(p => p.id === slot)) this.inputs[slot] = { steer: data.steer, pitch: data.pitch, fire: data.fire, lastAt: now };
      return;
    }
    if (data.type === 'leave') { await this.leave(ws); return; }
    if (data.type === 'appearance') {
      if (this.record.phase !== 'lobby') { this.send(ws, { type: 'error', message: 'Farbe und Effekt lassen sich nur in der Lobby ändern.' }); return; }
      try {
        if (!Object.hasOwn(data, 'appearance') || Object.keys(data).some(key => key !== 'type' && key !== 'appearance')) throw new Error('Ungültiges Flugzeug-Aussehen.');
        this.updateAppearance(slot, duelAppearance(data.appearance));
      } catch (error) { this.send(ws, { type: 'error', message: error.message }); return; }
      this.broadcast(); await this.scheduleAlarm(); return;
    }
    if (data.type === 'ready' && typeof data.ready === 'boolean' && ['lobby', 'countdown'].includes(this.record.phase)) {
      const r = copy(this.record); r.players.find(p => p.id === slot).ready = data.ready; r.lastActivity = now;
      this.commit(r);
      if (!data.ready && r.phase === 'countdown') this.returnToLobby();
      this.broadcast(); await this.scheduleAlarm(); return;
    }
    if (data.type === 'start' && this.record.phase === 'lobby') {
      if (slot !== this.record.hostId) { this.send(ws, { type: 'error', message: 'Nur der Gastgeber kann starten.' }); return; }
      const participants = this.participants();
      if (participants.length < MIN_PLAYERS || !participants.every(p => p.connected && p.ready)) { this.send(ws, { type: 'error', message: 'Mindestens zwei Spieler müssen verbunden und alle bereit sein.' }); return; }
      this.beginCountdown(now); this.broadcast(); await this.scheduleAlarm(); return;
    }
    if (data.type === 'rematch' && this.record.phase === 'finished') {
      const r = copy(this.record); r.players.find(p => p.id === slot).rematch = true; r.lastActivity = now; this.commit(r);
      this.tryRematch();
      this.broadcast(); await this.scheduleAlarm(); return;
    }
    this.send(ws, { type: 'error', message: 'Diese Aktion ist gerade nicht möglich.' });
  }
  beginCountdown(now = Date.now()) {
    this.sim = createDuelSimulation({ playerIds: this.participants().map(p => p.id) }); this.playedMs = 0; this.accumulator = 0; this.clearInputs();
    const r = copy(this.record); r.phase = 'countdown'; r.countdownUntil = now + DUEL_TIMING.countdownMs; r.lastActivity = now; r.winner = null; r.reason = null; r.snapshot = null; r.playedMs = 0;
    r.players.forEach(p => { p.ready = true; p.rematch = false; p.eliminated = false; }); this.commit(r); this.lastTick = now; this.lastSnapshot = 0; this.startLoop();
  }
  startLoop() {
    if (this.timer !== null || this.pulsing || !ACTIVE.has(this.record?.phase)) return;
    this.timer = setTimeout(() => { this.timer = null; this.ctx.waitUntil(this.pulse().catch(() => this.failRound())); }, DUEL_TIMING.tickMs);
  }
  stopLoop() { if (this.timer !== null) clearTimeout(this.timer); this.timer = null; }
  async pulse(now = Date.now()) {
    if (this.pulsing) return;
    this.pulsing = true;
    try { await this.advance(now); }
    finally { this.pulsing = false; this.startLoop(); }
  }
  async advance(now) {
    if (!this.record || !ACTIVE.has(this.record.phase)) return;
    if (this.expired(now)) { await this.expire(); return; }
    for (const { ws, lastSeen } of [...this.sockets.values()]) if (now - lastSeen > DUEL_TIMING.ghostMs) await this.removeSocket(ws, 1001, 'Verbindung unterbrochen.');
    if (!this.record) return;
    if (this.record.phase === 'reconnecting') {
      this.resolveReconnect(now);
    } else if (this.record.phase === 'countdown') {
      if (now >= this.record.countdownUntil) { const r = copy(this.record); r.phase = 'playing'; r.lastActivity = now; this.commit(r); this.lastTick = now; }
    } else if (this.record.phase === 'playing') {
      const elapsed = Math.max(0, now - this.lastTick); this.lastTick = now; this.playedMs += elapsed;
      this.accumulator = Math.min(this.accumulator + elapsed, DUEL_TIMING.tickMs * DUEL_TIMING.maxCatchup);
      let steps = 0;
      const input = Object.fromEntries(this.living().map(({ id }) => [id, now - (this.inputs[id]?.lastAt || 0) <= DUEL_TIMING.staleInputMs ? this.inputs[id] : neutral()]));
      while (this.accumulator >= DUEL_TIMING.tickMs - .00001 && steps < DUEL_TIMING.maxCatchup) {
        this.sim.step(input, 1 / 30); this.accumulator -= DUEL_TIMING.tickMs; steps++;
        const snapshot = this.sim.snapshot(); this.syncEliminations(snapshot); if (snapshot.winner) { this.finish(snapshot.winner, snapshot.reason || 'damage'); break; }
      }
      if (this.record.phase === 'playing' && this.playedMs >= (DUEL_RULES.roundSeconds || 180) * 1000) {
        const alive = this.sim.snapshot().players.filter(p => p.hp > 0 && !p.eliminated), best = Math.max(0, ...alive.map(p => p.hp));
        const leaders = alive.filter(p => p.hp === best); this.finish(leaders.length === 1 ? leaders[0].id : 'draw', 'time');
      }
    }
    if (now - this.lastSnapshot >= DUEL_TIMING.snapshotMs) { this.lastSnapshot = now; this.broadcast(); }
  }
  finish(winner, reason) {
    this.stopLoop(); this.clearInputs(); const r = copy(this.record);
    r.phase = 'finished'; r.winner = winner; r.reason = reason; r.lastActivity = Date.now(); r.snapshot = this.sim ? { ...this.sim.snapshot(), winner, reason } : null;
    r.playedMs = this.playedMs; r.players.forEach(p => { p.ready = false; p.rematch = false; }); this.commit(r); this.sim = null; this.broadcast();
  }
  async failRound() { if (this.record && ACTIVE.has(this.record.phase)) this.finish('draw', 'server_error'); await this.scheduleAlarm(); }
  async removeSocket(ws, code = 1000, reason = '') {
    const who = this.identity(ws); if (!who) { close(ws, 4009, 'Verbindung ersetzt.'); return; }
    const now = Date.now(), { slot } = who; this.sockets.delete(slot); this.inputs[slot] = neutral(); close(ws, code, reason);
    if (!this.record) return;
    const r = copy(this.record), player = r.players.find(p => p.id === slot); player.connected = false;
    if (r.phase === 'lobby') { player.lobbyUntil = now + DUEL_TIMING.reconnectMs; r.players.forEach(p => { p.ready = false; }); }
    if ((r.phase === 'playing' || r.phase === 'countdown') && this.living().some(p => p.id === slot)) { r.resumePhase = r.phase; r.countdownRemaining = Math.max(0, (r.countdownUntil || now) - now); r.phase = 'reconnecting'; r.reconnectUntil = now + DUEL_TIMING.reconnectMs; this.clearInputs(); }
    this.commit(r); this.tryRematch(); this.broadcast(); this.startLoop(); await this.scheduleAlarm();
  }
  async leave(ws) {
    const who = this.identity(ws); if (!who || !this.record) return;
    const { slot } = who, r = copy(this.record); this.sockets.delete(slot); this.inputs[slot] = neutral(); close(ws, 1000, 'Raum verlassen.');
    const player = r.players.find(p => p.id === slot); player.left = true; player.connected = false; player.ready = false; player.rematch = false;
    if (r.phase === 'lobby') { r.players = r.players.filter(p => p.id !== slot); r.players.forEach(p => { p.ready = false; }); }
    this.selectHost(r); this.commit(r);
    if (ACTIVE.has(r.phase)) { this.eliminatePlayers([slot], 'left'); this.resumeIfPresent(); }
    this.tryRematch(); this.broadcast(); await this.scheduleAlarm();
  }
  async webSocketClose(ws) { await this.ready; await this.removeSocket(ws); }
  async webSocketError(ws) { await this.ready; await this.removeSocket(ws, 1011, 'Verbindung unterbrochen.'); }
  async scheduleAlarm() {
    if (!this.record) return;
    const r = this.record, now = Date.now();
    const times = [r.createdAt + DUEL_TIMING.absoluteMs, r.lastActivity + DUEL_TIMING.idleMs];
    for (const socket of this.sockets.values()) times.push(socket.lastSeen + DUEL_TIMING.ghostMs + 1);
    if (r.phase === 'lobby') for (const player of r.players) if (!player.connected && player.lobbyUntil) times.push(player.lobbyUntil);
    if (r.phase === 'reconnecting') times.push(r.reconnectUntil);
    const next = Math.max(now + 1, Math.min(...times));
    if (!this.nextAlarmAt || next < this.nextAlarmAt || this.nextAlarmAt <= now) { await this.ctx.storage.setAlarm(next); this.nextAlarmAt = next; }
  }
  async alarm() {
    await this.ready; this.nextAlarmAt = 0; const now = Date.now();
    if (this.expired(now)) { await this.expire(); return; }
    for (const { ws, lastSeen } of [...this.sockets.values()]) if (now - lastSeen > DUEL_TIMING.ghostMs) await this.removeSocket(ws, 1001, 'Verbindung unterbrochen.');
    this.pruneLobby(now);
    this.resolveReconnect(now);
    await this.scheduleAlarm();
  }
  async expire() {
    this.stopLoop(); this.clearInputs();
    if (this.record) { this.record = { ...this.record, phase: 'expired' }; this.broadcast(); }
    for (const { ws } of this.sockets.values()) close(ws, 1000, 'Dieser Raum ist abgelaufen.');
    this.sockets.clear(); this.sim = null; this.record = null; this.nextAlarmAt = 0;
    await this.ctx.storage.deleteAlarm(); await this.ctx.storage.deleteAll(); this.schemaReady = false;
  }
}

export class DuelRateLimit {
  constructor(ctx) { this.ctx = ctx; this.schemaReady = false; }
  ensureSchema() { if (!this.schemaReady) { this.ctx.storage.sql.exec('CREATE TABLE IF NOT EXISTS duel_limits (key TEXT PRIMARY KEY, value TEXT NOT NULL)'); this.schemaReady = true; } }
  async fetch(request) {
    const action = new URL(request.url).pathname.slice(1), limit = action === 'create' ? 6 : action === 'join' ? 30 : 0;
    if (request.method !== 'POST' || !limit) return duelJson({ error: 'Ungültig.' }, 400);
    this.ensureSchema();
    const now = Date.now(), row = this.ctx.storage.sql.exec('SELECT value FROM duel_limits WHERE key = ?', action).toArray()[0];
    const history = row ? JSON.parse(row.value).filter(at => now - at < 60_000) : [];
    if (history.length >= limit) return duelJson({ error: 'Zu viele Anfragen.' }, 429);
    history.push(now); this.ctx.storage.sql.exec('INSERT OR REPLACE INTO duel_limits (key, value) VALUES (?, ?)', action, JSON.stringify(history));
    await this.ctx.storage.setAlarm(now + 120_000); return duelJson({ allowed: true });
  }
  async alarm() { await this.ctx.storage.deleteAll(); this.schemaReady = false; }
}
