import { createDuelSimulation, DUEL_RULES } from '../src/duel-simulation.js';
import { duelJson, duelName, readDuelJson, hashSecret, constantEqual, TOKEN_PATTERN, ROOM_PATTERN } from './duel-api.mjs';

export const DUEL_TIMING = Object.freeze({ tickMs: 1000 / 30, snapshotMs: 100, countdownMs: 3000, reconnectMs: 20_000, staleInputMs: 500, ghostMs: 15_000, idleMs: 600_000, absoluteMs: 7_200_000, maxCatchup: 5 });
const ACTIVE = new Set(['countdown', 'playing', 'reconnecting']);
const neutral = () => ({ steer: 0, pitch: 0, fire: false, lastAt: 0 });
const copy = value => structuredClone(value);
const token = () => btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const close = (ws, code = 1000, reason = '') => { try { ws.close(code, reason); } catch {} };

// Plain exported Durable Object classes keep the existing node:test Worker
// suite importable. The runtime passes the same DurableObjectState interface.
export class DuelRoom {
  constructor(ctx, env) {
    this.ctx = ctx; this.env = env; this.record = null; this.sockets = new Map(); this.inputs = { p1: neutral(), p2: neutral() };
    this.sim = null; this.timer = null; this.pulsing = false; this.schemaReady = false; this.lastTick = 0; this.accumulator = 0; this.playedMs = 0; this.lastSnapshot = 0; this.nextAlarmAt = 0;
    this.ready = ctx.blockConcurrencyWhile(async () => {
      this.ensureSchema();
      const row = ctx.storage.sql.exec('SELECT value FROM duel_state WHERE key = ?', 'room').toArray()[0];
      if (row) this.record = JSON.parse(row.value);
      // Probing an unknown UUID must not leave an empty SQLite database behind.
      // A real create recreates the table synchronously in commit().
      if (!this.record) { await ctx.storage.deleteAll(); this.schemaReady = false; return; }
      this.playedMs = this.record.playedMs || 0;
      const recovered = copy(this.record); for (const player of recovered.players) player.connected = false;
      for (const ws of ctx.getWebSockets()) {
        const attachment = ws.deserializeAttachment();
        const player = recovered.players.find(p => p.id === attachment?.slot && p.connectionId === attachment?.connectionId);
        if (!player || this.sockets.has(player.id) || ws.readyState > 1) { close(ws, 4009, 'Verbindung ersetzt.'); continue; }
        player.connected = true;
        this.sockets.set(player.id, { ws, lastSeen: attachment.lastSeen || Date.now(), seq: -1, accepted: [], messages: [], connectionId: attachment.connectionId });
      }
      if (ACTIVE.has(recovered.phase)) {
        recovered.phase = 'finished'; recovered.winner = 'draw'; recovered.reason = 'server_restart'; recovered.snapshot = null;
        recovered.players.forEach(p => { p.ready = false; p.rematch = false; });
      }
      this.commit(recovered); this.broadcast(); await this.scheduleAlarm();
    });
  }
  ensureSchema() { if (!this.schemaReady) { this.ctx.storage.sql.exec('CREATE TABLE IF NOT EXISTS duel_state (key TEXT PRIMARY KEY, value TEXT NOT NULL)'); this.schemaReady = true; } }
  commit(record) { this.ensureSchema(); this.ctx.storage.sql.exec('INSERT OR REPLACE INTO duel_state (key, value) VALUES (?, ?)', 'room', JSON.stringify(record)); this.record = record; }
  state(now = Date.now()) {
    const r = this.record;
    if (!r) return { type: 'state', phase: 'expired', players: [], countdown: 0, remaining: 0, snapshot: null, expiresAt: now };
    return {
      type: 'state', phase: r.phase,
      players: r.players.map(({ id, name, connected, ready }) => ({ id, name, connected, ready })),
      countdown: r.phase === 'countdown' ? Math.max(0, (r.countdownUntil - now) / 1000) : 0,
      remaining: Math.max(0, (DUEL_RULES.roundSeconds || 180) - this.playedMs / 1000),
      snapshot: this.sim?.snapshot() || r.snapshot || null,
      winner: r.winner || null, reason: r.reason || null,
      expiresAt: Math.min(r.createdAt + DUEL_TIMING.absoluteMs, r.lastActivity + DUEL_TIMING.idleMs),
    };
  }
  send(ws, data) { try { ws.send(JSON.stringify(data)); return true; } catch { return false; } }
  broadcast() { const state = this.state(); for (const { ws } of this.sockets.values()) this.send(ws, state); }
  expired(now = Date.now()) { const r = this.record; return !r || now >= r.createdAt + DUEL_TIMING.absoluteMs || now >= r.lastActivity + DUEL_TIMING.idleMs; }
  clearInputs() { this.inputs.p1 = neutral(); this.inputs.p2 = neutral(); }
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
      const player = this.record.players.find(p => constantEqual(p.tokenHash, digest));
      if (!player) return duelJson({ error: 'Ungültiger Zugang.' }, 403);
      const pair = new WebSocketPair(); const [client, server] = Object.values(pair);
      this.attach(server, player.id); await this.scheduleAlarm();
      return new Response(null, { status: 101, webSocket: client });
    }
    if (request.method !== 'POST') return duelJson({ error: 'Methode nicht erlaubt.' }, 405);
    let input, name;
    try { input = await readDuelJson(request); name = duelName(input.name); if (!ROOM_PATTERN.test(input.room || '')) throw new Error('Ungültiger Raum.'); if (input.token !== undefined && !TOKEN_PATTERN.test(input.token)) throw new Error('Ungültiger Zugang.'); }
    catch (error) { return duelJson({ error: error.message }, 400); }
    // Finish asynchronous crypto before reading/reserving a seat, so two joins
    // cannot both observe a free p2 across an await boundary.
    const credential = action === 'join' && input.token ? input.token : token(), digest = await hashSecret(credential), now = Date.now();
    if (action === 'create') {
      if (this.record) return duelJson({ error: 'Dieser Raum existiert bereits.' }, 409);
      const r = { room: input.room, origin: url.origin, createdAt: now, lastActivity: now, phase: 'lobby', winner: null, reason: null, snapshot: null, players: [{ id: 'p1', name, tokenHash: digest, connected: false, ready: false, rematch: false, connectionId: null }] };
      this.commit(r); await this.scheduleAlarm();
      return duelJson({ room: r.room, token: credential, slot: 'p1', inviteUrl: `/duel#room=${r.room}`, expiresAt: this.state(now).expiresAt }, 201);
    }
    if (this.expired(now)) { if (this.record) await this.expire(); return duelJson({ error: 'Dieser Raum ist abgelaufen.' }, 410); }
    if (this.record.origin !== url.origin || this.record.room !== input.room) return duelJson({ error: 'Ungültiger Raum.' }, 403);
    let seat;
    if (input.token) {
      seat = this.record.players.find(p => constantEqual(p.tokenHash, digest));
      if (!seat) return duelJson({ error: 'Dieser Zugang gehört nicht zum Raum.' }, 403);
    } else {
      if (this.record.phase !== 'lobby' || this.record.players.some(p => p.id === 'p2')) return duelJson({ error: 'Der Raum ist bereits belegt.' }, 409);
      seat = { id: 'p2', name, tokenHash: digest, connected: false, ready: false, rematch: false, connectionId: null };
      const r = copy(this.record); r.players.push(seat); r.lastActivity = now; this.commit(r); this.broadcast();
    }
    await this.scheduleAlarm();
    return duelJson({ room: this.record.room, token: credential, slot: seat.id, expiresAt: this.state(now).expiresAt });
  }
  attach(ws, slot) {
    const now = Date.now(), old = this.sockets.get(slot), connectionId = crypto.randomUUID();
    if (this.record.phase === 'reconnecting' && now >= this.record.reconnectUntil) {
      const remaining = this.record.players.filter(p => p.connected);
      this.finish(remaining.length === 1 ? remaining[0].id : 'draw', 'disconnect');
    }
    const r = copy(this.record), player = r.players.find(p => p.id === slot); player.connected = true; player.connectionId = connectionId;
    r.lastActivity = now; this.commit(r);
    this.ctx.acceptWebSocket(ws, [slot]); ws.serializeAttachment({ slot, connectionId, lastSeen: now });
    this.sockets.set(slot, { ws, connectionId, lastSeen: now, seq: -1, accepted: [], messages: [] }); this.inputs[slot] = neutral();
    if (old) close(old.ws, 4009, 'In einem anderen Fenster verbunden.');
    this.send(ws, { type: 'welcome', slot });
    if (this.record.phase === 'reconnecting' && this.record.players.length === 2 && this.record.players.every(p => p.connected)) {
      const next = copy(this.record); next.phase = next.resumePhase || 'playing';
      if (next.phase === 'countdown') next.countdownUntil = now + (next.countdownRemaining || DUEL_TIMING.countdownMs);
      next.reconnectUntil = null; this.commit(next); this.lastTick = now; this.accumulator = 0; this.startLoop();
    }
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
      if (this.record.phase === 'playing') this.inputs[slot] = { steer: data.steer, pitch: data.pitch, fire: data.fire, lastAt: now };
      return;
    }
    if (data.type === 'leave') { await this.leave(ws); return; }
    if (data.type === 'ready' && typeof data.ready === 'boolean' && ['lobby', 'countdown'].includes(this.record.phase)) {
      const r = copy(this.record); r.players.find(p => p.id === slot).ready = data.ready; r.lastActivity = now;
      if (!data.ready && r.phase === 'countdown') { r.phase = 'lobby'; this.stopLoop(); }
      this.commit(r);
      if (r.phase === 'lobby' && r.players.length === 2 && r.players.every(p => p.ready && p.connected)) this.beginCountdown(now);
      this.broadcast(); await this.scheduleAlarm(); return;
    }
    if (data.type === 'rematch' && this.record.phase === 'finished') {
      const r = copy(this.record); r.players.find(p => p.id === slot).rematch = true; r.lastActivity = now; this.commit(r);
      if (r.players.length === 2 && r.players.every(p => p.rematch && p.connected)) this.beginCountdown(now);
      this.broadcast(); await this.scheduleAlarm(); return;
    }
    this.send(ws, { type: 'error', message: 'Diese Aktion ist gerade nicht möglich.' });
  }
  beginCountdown(now = Date.now()) {
    this.sim = createDuelSimulation(); this.playedMs = 0; this.accumulator = 0; this.clearInputs();
    const r = copy(this.record); r.phase = 'countdown'; r.countdownUntil = now + DUEL_TIMING.countdownMs; r.lastActivity = now; r.winner = null; r.reason = null; r.snapshot = null; r.playedMs = 0;
    r.players.forEach(p => { p.ready = true; p.rematch = false; }); this.commit(r); this.lastTick = now; this.lastSnapshot = 0; this.startLoop();
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
      if (now >= this.record.reconnectUntil) { const connected = this.record.players.filter(p => p.connected); this.finish(connected.length === 1 ? connected[0].id : 'draw', 'disconnect'); }
    } else if (this.record.phase === 'countdown') {
      if (now >= this.record.countdownUntil) { const r = copy(this.record); r.phase = 'playing'; r.lastActivity = now; this.commit(r); this.lastTick = now; }
    } else if (this.record.phase === 'playing') {
      const elapsed = Math.max(0, now - this.lastTick); this.lastTick = now; this.playedMs += elapsed;
      this.accumulator = Math.min(this.accumulator + elapsed, DUEL_TIMING.tickMs * DUEL_TIMING.maxCatchup);
      let steps = 0;
      const input = Object.fromEntries(['p1', 'p2'].map(id => [id, now - this.inputs[id].lastAt <= DUEL_TIMING.staleInputMs ? this.inputs[id] : neutral()]));
      while (this.accumulator >= DUEL_TIMING.tickMs - .00001 && steps < DUEL_TIMING.maxCatchup) {
        this.sim.step(input, 1 / 30); this.accumulator -= DUEL_TIMING.tickMs; steps++;
        const snapshot = this.sim.snapshot(); if (snapshot.winner) { this.finish(snapshot.winner, snapshot.reason || 'damage'); break; }
      }
      if (this.record.phase === 'playing' && this.playedMs >= (DUEL_RULES.roundSeconds || 180) * 1000) {
        const [a, b] = this.sim.snapshot().players; this.finish(a.hp === b.hp ? 'draw' : a.hp > b.hp ? a.id : b.id, 'time');
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
    if (r.phase === 'lobby') player.ready = false;
    if (r.phase === 'playing' || r.phase === 'countdown') { r.resumePhase = r.phase; r.countdownRemaining = Math.max(0, (r.countdownUntil || now) - now); r.phase = 'reconnecting'; r.reconnectUntil = now + DUEL_TIMING.reconnectMs; this.clearInputs(); }
    this.commit(r); this.broadcast(); this.startLoop(); await this.scheduleAlarm();
  }
  async leave(ws) {
    const who = this.identity(ws); if (!who || !this.record) return;
    if (ACTIVE.has(this.record.phase)) this.finish(who.slot === 'p1' ? 'p2' : 'p1', 'left');
    await this.removeSocket(ws, 1000, 'Raum verlassen.');
    if (who.slot === 'p2' && this.record && !ACTIVE.has(this.record.phase)) {
      const r = copy(this.record); r.players = r.players.filter(p => p.id !== 'p2'); r.players.forEach(p => { p.ready = false; p.rematch = false; });
      // Keep a finished round visible. A reserved host may start a fresh lobby
      // only by creating another invitation; a leaving guest never inherits p1.
      this.commit(r); this.broadcast();
    }
  }
  async webSocketClose(ws) { await this.ready; await this.removeSocket(ws); }
  async webSocketError(ws) { await this.ready; await this.removeSocket(ws, 1011, 'Verbindung unterbrochen.'); }
  async scheduleAlarm() {
    if (!this.record) return;
    const r = this.record, now = Date.now();
    const times = [r.createdAt + DUEL_TIMING.absoluteMs, r.lastActivity + DUEL_TIMING.idleMs];
    for (const socket of this.sockets.values()) times.push(socket.lastSeen + DUEL_TIMING.ghostMs + 1);
    if (r.phase === 'reconnecting') times.push(r.reconnectUntil);
    const next = Math.max(now + 1, Math.min(...times));
    if (!this.nextAlarmAt || next < this.nextAlarmAt || this.nextAlarmAt <= now) { await this.ctx.storage.setAlarm(next); this.nextAlarmAt = next; }
  }
  async alarm() {
    await this.ready; this.nextAlarmAt = 0; const now = Date.now();
    if (this.expired(now)) { await this.expire(); return; }
    for (const { ws, lastSeen } of [...this.sockets.values()]) if (now - lastSeen > DUEL_TIMING.ghostMs) await this.removeSocket(ws, 1001, 'Verbindung unterbrochen.');
    if (this.record?.phase === 'reconnecting' && now >= this.record.reconnectUntil) { const connected = this.record.players.filter(p => p.connected); this.finish(connected.length === 1 ? connected[0].id : 'draw', 'disconnect'); }
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
