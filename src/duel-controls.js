export const DUEL_SESSION_PREFIX = 'stubenflieger.duel.v1:';
export const clampAxis = value => Math.max(-1, Math.min(1, Number.isFinite(value) ? value : 0));

export function inviteRoom(hash) {
  if (typeof hash !== 'string' || !hash.startsWith('#')) return null;
  const id = new URLSearchParams(hash.slice(1)).get('room');
  return typeof id === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id) ? id.toLowerCase() : null;
}

export function pilotName(value) {
  const name = String(value || '').trim().replace(/\s+/g, ' ');
  if (name.length < 2 || name.length > 18 || !/^[\p{L}\p{N} _.'-]+$/u.test(name)) {
    throw new Error('Wähle einen Namen mit 2–18 Buchstaben, Zahlen, Leerzeichen oder . _ -');
  }
  return name;
}

export function duelInput(keys, touch = {}) {
  const has = (...codes) => codes.some(code => keys.has(code));
  return {
    steer: clampAxis(Number(has('KeyD', 'ArrowRight')) - Number(has('KeyA', 'ArrowLeft')) + (touch.steer || 0)),
    pitch: clampAxis(Number(has('KeyW', 'ArrowUp')) - Number(has('KeyS', 'ArrowDown')) + (touch.pitch || 0)),
    fire: has('Space') || touch.fire === true,
  };
}

export function inviteAddress(origin, room) {
  const id = inviteRoom(`#room=${room}`);
  if (!id) throw new Error('Diese Einladung ist ungültig.');
  return `${new URL(origin).origin}/duel#room=${id}`;
}

export function remainingTime(seconds) {
  const value = Number.isFinite(seconds) ? Math.max(0, Math.ceil(seconds)) : 0;
  return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, '0')}`;
}

export function canHostStart(players, hostId, slot) {
  const participants = players.filter(player => !player.left);
  return Boolean(slot && slot === hostId && participants.length >= 2 && participants.length <= 5
    && participants.some(player => player.id === slot)
    && participants.every(player => player.connected && player.ready));
}

export function isPilotOut(plane, identity) {
  return Boolean(identity?.left || identity?.eliminated || plane?.eliminated || (Number.isFinite(plane?.hp) && plane.hp <= 0));
}

export function duelResultTitle(winner, players, slot) {
  if (winner === 'draw' || !winner) return 'Unentschieden.';
  if (winner === slot) return 'Du hast gewonnen!';
  const player = players.find(player => player.id === winner);
  return player ? `${player.name} gewinnt.` : 'Die Runde ist beendet.';
}
