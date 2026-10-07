import test from 'node:test';
import assert from 'node:assert/strict';
import { simulateFlight } from './manual-route.mjs';

// A reproducible keyboard flight, not a room graph or teleported pickup test:
// 75% launch; left for .45s, right until 3.40s, then release steering.
// Hold climb for the first .75s only. This loops through the furnished living
// room, collects two room stars, opens its door and passes fully into the hall.
const introductoryPilot = ({ seconds }) => ({
  steer: seconds < .45 ? -1 : seconds < 3.4 ? 1 : 0,
  pitch: seconds < .75 ? 1 : 0,
});

for (const fps of [30, 60, 120]) {
  test(`free standard aircraft can collect two stars and fully enter the hall at ${fps}fps`, () => {
    const flight = simulateFlight(introductoryPilot, {
      dt: 1 / fps,
      power: .75,
      maxSeconds: 8,
      stop: ({ position, room }) => position.x < 7.95 && room?.id === 'hall',
    });
    assert.equal(flight.success, true, `flight hit ${flight.collision} at ${flight.position}`);
    assert.ok(flight.stars.includes('living-star-1'));
    assert.ok(flight.stars.includes('living-star-3'));
    assert.ok(flight.opened.includes('living-hall'));
    assert.equal(flight.room, 'hall');
    assert.ok(flight.position[0] < 7.95, 'the complete aircraft must pass the wall at x=8.5');
    assert.ok(flight.seconds < 7);
    const opening = flight.events.find(event => event.doors.includes('living-hall'));
    assert.ok(opening && opening.seconds < flight.seconds);
  });
}
