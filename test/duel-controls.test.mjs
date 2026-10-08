import test from 'node:test';
import assert from 'node:assert/strict';
import { canHostStart, duelInput, duelResultTitle, inviteAddress, inviteRoom, isPilotOut, pilotName, remainingTime } from '../src/duel-controls.js';

const room = '12345678-1234-4123-8123-123456789abc';

test('invitation accepts only a room UUID in the fragment and sharing never carries credentials', () => {
  assert.equal(inviteRoom(`#room=${room}`), room);
  assert.equal(inviteRoom(`#room=${room.toUpperCase()}`), room);
  assert.equal(inviteRoom(`#room=${room}&token=private`), room);
  assert.equal(inviteAddress('https://stubenflieger.example/duel?token=private#other', room), `https://stubenflieger.example/duel#room=${room}`);
  for (const invalid of ['', '#room=other', `?room=${room}`, '#token=private', '#room=../../elsewhere']) assert.equal(inviteRoom(invalid), null);
  assert.throws(() => inviteAddress('https://stubenflieger.example', 'bad'));
});

test('pilot names normalize spaces, retain German names and reject markup or excessive length', () => {
  assert.equal(pilotName("  Käpt'n  "), "Käpt'n");
  assert.equal(pilotName('  Papier   Pilot '), 'Papier Pilot');
  for (const invalid of ['', 'A', 'a'.repeat(19), '<script>', 'Pilot\n<script>']) assert.throws(() => pilotName(invalid));
  assert.equal(pilotName('a'.repeat(18)).length, 18);
});

test('controls combine keyboard and touch within bounds and opposing keys cancel', () => {
  assert.deepEqual(duelInput(new Set()), { steer: 0, pitch: 0, fire: false });
  assert.deepEqual(duelInput(new Set(['KeyD', 'ArrowUp', 'Space'])), { steer: 1, pitch: 1, fire: true });
  assert.deepEqual(duelInput(new Set(['KeyA', 'KeyD', 'KeyS', 'KeyW'])), { steer: 0, pitch: 0, fire: false });
  assert.deepEqual(duelInput(new Set(['KeyD']), { steer: .8, pitch: -.5, fire: true }), { steer: 1, pitch: -.5, fire: true });
  assert.deepEqual(duelInput(new Set(), { steer: NaN, pitch: Infinity }), { steer: 0, pitch: 0, fire: false });
});

test('remaining time stays readable at round start, final seconds and invalid values', () => {
  assert.equal(remainingTime(180), '3:00');
  assert.equal(remainingTime(61.1), '1:02');
  assert.equal(remainingTime(.1), '0:01');
  assert.equal(remainingTime(-5), '0:00');
  assert.equal(remainingTime(Infinity), '0:00');
});

test('only the current host starts two to five connected ready pilots, including sparse seats', () => {
  const players = ['p2', 'p4', 'p5'].map(id => ({ id, name: id, connected: true, ready: true }));
  assert.equal(canHostStart(players, 'p4', 'p4'), true);
  assert.equal(canHostStart(players, 'p4', 'p2'), false);
  assert.equal(canHostStart(players, 'p1', 'p1'), false);
  assert.equal(canHostStart(players.slice(0, 1), 'p2', 'p2'), false);
  assert.equal(canHostStart(players.map(player => ({ ...player, ready: player.id !== 'p5' })), 'p4', 'p4'), false);
  assert.equal(canHostStart(players.map(player => ({ ...player, connected: player.id !== 'p5' })), 'p4', 'p4'), false);
  assert.equal(canHostStart([...players, { id: 'p1', left: true, ready: false, connected: false }], 'p4', 'p4'), true);
  const five = ['p1', 'p2', 'p3', 'p4', 'p5'].map(id => ({ id, ready: true, connected: true }));
  assert.equal(canHostStart(five, 'p5', 'p5'), true);
  assert.equal(canHostStart([...five, { id: 'p6', ready: true, connected: true }], 'p5', 'p5'), false);
});

test('zero health and server elimination enter spectator mode, a temporary disconnect does not', () => {
  assert.equal(isPilotOut({ hp: 0 }, { connected: true }), true);
  assert.equal(isPilotOut({ hp: 40, eliminated: true }, {}), true);
  assert.equal(isPilotOut(null, { eliminated: true }), true);
  assert.equal(isPilotOut({ hp: 80 }, { left: true }), true);
  assert.equal(isPilotOut({ hp: 1 }, { connected: false }), false);
  assert.equal(isPilotOut(null, null), false);
});

test('result titles name any winning slot rather than selecting the first opponent', () => {
  const players = [{ id: 'p1', name: 'Erster' }, { id: 'p3', name: 'Dritter' }, { id: 'p5', name: 'Fünfter' }];
  assert.equal(duelResultTitle('p5', players, 'p1'), 'Fünfter gewinnt.');
  assert.equal(duelResultTitle('p3', players, 'p3'), 'Du hast gewonnen!');
  assert.equal(duelResultTitle('draw', players, 'p1'), 'Unentschieden.');
  assert.equal(duelResultTitle('missing', players, 'p1'), 'Die Runde ist beendet.');
});
