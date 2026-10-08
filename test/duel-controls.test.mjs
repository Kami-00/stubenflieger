import test from 'node:test';
import assert from 'node:assert/strict';
import { duelInput, inviteAddress, inviteRoom, pilotName, remainingTime } from '../src/duel-controls.js';

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
