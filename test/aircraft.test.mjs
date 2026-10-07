import test from 'node:test';
import assert from 'node:assert/strict';
import { ConvexPolyhedron, Vec3 } from 'cannon-es';
import { AIRCRAFT_FORMS, getAircraftDefinition, flightTuning } from '../src/aircraft.js';
import { createPhysics } from '../src/physics.js';

const outline = (model, id = 'right-wing') => {
  const part = model.parts.find(part => part.id === id);
  return part.vertices.slice(0, part.vertices.length / 2).map(([x, , z]) => [x, z]);
};

function contains(part, point) {
  const p = new Vec3(...point);
  return part.faces.every(face => {
    const [a, b, c] = face.map(index => new Vec3(...part.vertices[index]));
    const normal = b.vsub(a).cross(c.vsub(a));
    normal.normalize();
    return normal.dot(p.vsub(a)) <= 1e-10;
  });
}

test('four paper forms share exact scaled visible/collision vertices', () => {
  const silhouettes = new Set();
  for (const form of AIRCRAFT_FORMS) {
    const model = getAircraftDefinition(form, 1), small = getAircraftDefinition(form, 0.55), large = getAircraftDefinition(form, 1.5);
    assert.equal(model.parts.length, 4);
    silhouettes.add(`${model.span}:${model.length}`);
    for (const [i, part] of model.parts.entries()) {
      const centre = [0, 1, 2].map(axis => part.vertices.reduce((sum, vertex) => sum + vertex[axis], 0) / part.vertices.length);
      const hull = new ConvexPolyhedron({ vertices: part.vertices.map(p => new Vec3(...p.map((v, axis) => v - centre[axis]))), faces: part.faces });
      assert.ok(hull.boundingSphereRadius > 0);
      for (const [j, vertex] of part.vertices.entries()) for (let axis = 0; axis < 3; axis++) {
        assert.ok(Number.isFinite(vertex[axis]));
        assert.ok(Math.abs(small.parts[i].vertices[j][axis] - vertex[axis] * 0.55) < 1e-10);
        assert.ok(Math.abs(large.parts[i].vertices[j][axis] - vertex[axis] * 1.5) < 1e-10);
      }
      if (part.id.includes('wing')) {
        const ys = part.vertices.map(p => p[1]);
        assert.ok(Math.max(...ys) - Math.min(...ys) < 0.025, 'paper wings must stay thin');
      }
    }
  }
  assert.equal(silhouettes.size, 4);
  assert.ok(Math.abs(getAircraftDefinition('classic').span - 0.429) < 1e-12);
  assert.ok(Math.abs(getAircraftDefinition('classic').length - 0.3276) < 1e-12);
});

test('larger planes glide longer while smaller planes turn faster', () => {
  for (const form of AIRCRAFT_FORMS) {
    const small = flightTuning(form, 0.55), normal = flightTuning(form), large = flightTuning(form, 1.5);
    assert.ok(small.sinkRate > normal.sinkRate && normal.sinkRate > large.sinkRate);
    assert.ok(small.energyLoss > normal.energyLoss && normal.energyLoss > large.energyLoss);
    assert.ok(small.turnRate > normal.turnRate && normal.turnRate > large.turnRate);
    assert.ok(small.glideRatio < normal.glideRatio && normal.glideRatio < large.glideRatio);
  }
  assert.ok(flightTuning('glider').sinkRate < flightTuning('classic').sinkRate);
  assert.ok(flightTuning('dart').speed > flightTuning('classic').speed);
  assert.ok(flightTuning('stunt').turnRate > flightTuning('classic').turnRate);
  assert.ok(flightTuning('stunt').sinkRate > flightTuning('classic').sinkRate);
});

test('invalid configurations are normalised to supported paper forms and sizes', () => {
  assert.equal(getAircraftDefinition('missing', NaN).form, 'classic');
  assert.equal(getAircraftDefinition('missing', NaN).size, 1);
  assert.equal(getAircraftDefinition('classic', 0).size, 0.55);
  assert.equal(getAircraftDefinition('classic', 40).size, 1.5);
});

test('free starter is small and slow enough to turn inside the furnished living room', () => {
  const model = getAircraftDefinition(), tuning = flightTuning();
  assert.ok(model.span <= 0.45, 'default wings must leave room between furnishings');
  assert.ok(tuning.speed <= 1.8, 'cruise must allow time to line up with indoor stars');
  assert.ok(tuning.speed / tuning.turnRate < 1, 'default turn radius must stay below one metre');
  assert.ok(1 / tuning.sinkRate > 9, 'slower flight must not lose its starting height before the first turn');
  assert.ok(Math.abs(tuning.glideRatio - tuning.speed / tuning.sinkRate) < 1e-10);
});

test('classic, dart, glider and stunt have recognisably different wing and tail outlines', () => {
  const classic = outline(getAircraftDefinition('classic'));
  const dart = outline(getAircraftDefinition('dart'));
  const glider = outline(getAircraftDefinition('glider'));
  const stunt = outline(getAircraftDefinition('stunt'));
  const tip = points => points.filter(([x]) => Math.abs(x - Math.max(...points.map(p => p[0]))) < 1e-10);
  assert.equal(classic.length, 4);
  assert.equal(tip(classic).length, 2, 'classic outer ends must be straight, not a pointed vertex');
  assert.ok(Math.abs(tip(classic)[1][1] - tip(classic)[0][1]) > .08);
  assert.ok(Math.min(...tip(classic).map(p => p[1])) > Math.min(...classic.map(p => p[1])) + .1, 'classic keeps its swept delta leading edge');
  assert.equal(dart.length, 3);
  assert.equal(tip(dart).length, 1, 'dart keeps a sharp wing corner');
  assert.ok(glider.length >= 13, 'glider wing outline must curve through multiple segments');
  assert.equal(tip(glider).length, 1);
  const gliderTipZ = tip(glider)[0][1];
  assert.ok(gliderTipZ > Math.min(...glider.map(p => p[1])) + .06);
  assert.ok(gliderTipZ < Math.max(...glider.map(p => p[1])) - .06, 'rounded tip lies midway between leading and trailing edges');
  assert.equal(stunt.length, 4);
  assert.equal(new Set(stunt.map(p => p[0])).size, 2);
  assert.equal(new Set(stunt.map(p => p[1])).size, 2, 'stunt wings have rectangular corners');
  const stuntTail = outline(getAircraftDefinition('stunt'), 'tail');
  assert.equal(stuntTail.length, 4);
  assert.equal(new Set(stuntTail.map(p => p[0])).size, 2);
  assert.equal(new Set(stuntTail.map(p => p[1])).size, 2);
  assert.ok(outline(getAircraftDefinition('glider'), 'tail').length >= 16);
});

test('both wings meet without centre gaps and overlap the closed fuselage at every size', () => {
  for (const form of AIRCRAFT_FORMS) for (const size of [.55, 1, 1.5]) {
    const model = getAircraftDefinition(form, size);
    const [left, right, body] = ['left-wing', 'right-wing', 'fuselage'].map(id => model.parts.find(part => part.id === id));
    const leftRoots = left.vertices.filter(p => Math.abs(p[0]) < 1e-12);
    const rightRoots = right.vertices.filter(p => Math.abs(p[0]) < 1e-12);
    assert.ok(leftRoots.length >= 4 && rightRoots.length >= 4, `${form}: both wing roots must reach x=0`);
    const from = Math.min(...rightRoots.map(p => p[2])), to = Math.max(...rightRoots.map(p => p[2]));
    for (let i = 1; i < 20; i++) {
      const point = [0, 0, from + (to - from) * i / 20];
      assert.ok(contains(left, point) && contains(right, point), `${form}: centre seam is closed along the complete wing chord`);
    }
    assert.ok(contains(body, [0, 0, (from + to) / 2]), `${form}: fuselage joins the wings without a vertical gap`);
  }
});

test('all visible paper parts remain closed convex solids with outward faces', () => {
  for (const form of AIRCRAFT_FORMS) for (const part of getAircraftDefinition(form).parts) {
    const edges = new Map();
    for (const face of part.faces) for (let i = 0; i < face.length; i++) {
      const edge = [face[i], face[(i + 1) % face.length]].sort((a, b) => a - b).join(':');
      edges.set(edge, (edges.get(edge) || 0) + 1);
    }
    assert.ok([...edges.values()].every(count => count === 2), `${form}/${part.id}: mesh must be watertight`);
    for (const point of part.vertices) assert.ok(contains(part, point), `${form}/${part.id}: every vertex must lie inside all face planes`);
  }
});

test('real collisions follow rounded glider edges and rectangular stunt corners', () => {
  function touches(form, position) {
    const physics = createPhysics({ start: [0, 1, 0], doors: [], obstacles: [{ id: 'probe', kind: 'wall', size: [.004, .004, .004], position }] }, { form, size: 1 });
    return physics.advance(0, new Vec3()).collided;
  }
  const glider = getAircraftDefinition('glider'), wing = outline(glider);
  const outerX = glider.span / 2, noseZ = Math.min(...wing.map(p => p[1]));
  const midZ = (noseZ + Math.max(...wing.map(p => p[1]))) / 2;
  assert.equal(touches('glider', [outerX * .98, 1 + outerX * .98 * .045, midZ]), true);
  assert.equal(touches('glider', [outerX * .94, 1 + outerX * .94 * .045, noseZ + .006]), false, 'rounded wing must not collide like its enclosing rectangle');
  const stunt = getAircraftDefinition('stunt'), stuntFront = Math.min(...outline(stunt).map(p => p[1]));
  const corner = [stunt.span / 2 - .006, 1 + (stunt.span / 2 - .006) * .045, stuntFront + .006];
  assert.equal(touches('stunt', corner), true);
  assert.equal(touches('classic', corner), false, 'classic swept leading edge differs physically from the rectangular stunt wing');
  assert.equal(touches('dart', corner), false);
});
