import test from 'node:test';
import assert from 'node:assert/strict';
import { PerspectiveCamera, Scene, Group, Mesh, BoxGeometry, MeshStandardMaterial, Vector3, Quaternion, Euler, Color } from 'three';
import { createFlightCamera } from '../src/camera.js';
import { createAircraftEffects } from '../src/aircraft-effects.js';
import { applyAircraftColor } from '../src/aircraft-appearance.js';
import { aircraftPartColor } from '../src/cosmetics.js';
import { getAircraftDefinition } from '../src/aircraft.js';
import { createPhysics } from '../src/physics.js';

const closeVector = (a, b, epsilon = 1e-10) => assert(a.distanceTo(b) < epsilon, `${a.toArray()} != ${b.toArray()}`);
const pose = (model = new Group()) => ({ position: new Vector3(2, 1.3, -3), quaternion: new Quaternion().setFromEuler(new Euler(.22, -.73, -.51, 'YXZ')), heading: .73, length: .3276, model, id: model });

test('FPV tracks pitch, heading and bank exactly, hides only its own model, and restores chase', () => {
  const camera = new PerspectiveCamera(64, 1, .035, 120), flight = createFlightCamera(camera), plane = pose(), opponent = new Group();
  flight.update(plane, { immediate: true }); const chasePosition = camera.position.clone(), chaseRotation = camera.quaternion.clone();
  for (let i = 0; i < 12; i++) {
    flight.setMode('fpv'); flight.update(plane);
    assert(camera.quaternion.angleTo(plane.quaternion) < 1e-7);
    closeVector(camera.getWorldDirection(new Vector3()), new Vector3(0, 0, -1).applyQuaternion(plane.quaternion));
    closeVector(new Vector3(0, 1, 0).applyQuaternion(camera.quaternion), new Vector3(0, 1, 0).applyQuaternion(plane.quaternion));
    assert.equal(camera.near, .012); assert.equal(plane.model.visible, false); assert.equal(opponent.visible, true);
    flight.setMode('chase'); flight.update(plane);
    closeVector(camera.position, chasePosition); assert(camera.quaternion.angleTo(chaseRotation) < 1e-7);
    assert.equal(camera.near, .035); assert.equal(plane.model.visible, true);
  }
  flight.dispose();
});

test('camera collision tracing stops both modes at opaque geometry, including smooth chase corrections', () => {
  const physics = createPhysics({ obstacles: [{ id: 'wall', kind: 'wall', size: [8, 4, .1], position: [0, 1, .7] }], doors: [], start: [0, 1, 0] });
  const camera = new PerspectiveCamera(), plane = { position: new Vector3(0, 1, 0), quaternion: new Quaternion(), model: new Group() };
  const calls = [];
  const flight = createFlightCamera(camera, { traceCamera(from, to, padding) { calls.push(padding); return physics.traceCamera(from, to, padding); } });
  flight.update(plane); assert(camera.position.z < .55);
  camera.position.z = 10; flight.update(plane, { dt: .016 }); assert(camera.position.z < .56, 'smoothed camera must be retraced');
  flight.setMode('fpv'); flight.update(plane); assert(calls.includes(.015)); assert(camera.position.z < 0);
  flight.dispose();
});

test('FPV spectator changes and reset never restore an eliminated aircraft', () => {
  const camera = new PerspectiveCamera(), flight = createFlightCamera(camera, { mode: 'fpv' }), first = pose(), second = pose();
  first.model.userData.flightCameraVisible = true; second.model.userData.flightCameraVisible = true;
  flight.update(first); assert.equal(first.model.visible, false);
  first.model.userData.flightCameraVisible = false;
  flight.update(second); assert.equal(first.model.visible, false); assert.equal(second.model.visible, false);
  flight.reset(); assert.equal(first.model.visible, false); assert.equal(second.model.visible, true);
  flight.setMode('chase'); assert.equal(camera.near, .1);
});

test('five aircraft colors stay independent and never alter their mesh geometry', () => {
  const definition = getAircraftDefinition(), geometry = new BoxGeometry();
  const models = Array.from({ length: 5 }, () => { const group = new Group(); for (const part of definition.parts) { const mesh = new Mesh(geometry, new MeshStandardMaterial({ color: part.color })); mesh.name = part.id; mesh.userData.paperColor = part.color; group.add(mesh); } return group; });
  const colors = ['#ef346a', '#1876ab', '#18de37', '#9f2beb', '#000000'];
  models.forEach((model, index) => applyAircraftColor(model, colors[index]));
  for (let index = 0; index < 5; index++) for (const [partIndex, mesh] of models[index].children.entries()) {
    assert.equal(`#${mesh.material.color.getHexString()}`, aircraftPartColor(definition.parts[partIndex], colors[index]));
    assert.equal(mesh.geometry, geometry);
  }
  const others = models.slice(1).map(model => model.children.map(mesh => mesh.material.color.getHexString()));
  applyAircraftColor(models[0], null, '#68cdb4');
  assert.deepEqual(models.slice(1).map(model => model.children.map(mesh => mesh.material.color.getHexString())), others);
  const expected = new Color(definition.parts[0].color).lerp(new Color('#68cdb4'), .6);
  assert.equal(models[0].children[0].material.color.getHexString(), expected.getHexString());
  applyAircraftColor(models[0]); assert.equal(models[0].children[0].material.color.getHex(), definition.parts[0].color);
  models.forEach(model => model.children.forEach(mesh => mesh.material.dispose())); geometry.dispose();
});

test('five effects own separate trails, survive shade, retain real depth and reset on teleport', () => {
  const scene = new Scene(), types = ['mint', 'spark', 'confetti', 'none', 'spark'];
  const effects = types.map(effect => createAircraftEffects(scene, { effect }));
  for (let frame = 0; frame < 54; frame++) effects.forEach((effect, player) => { effect.push({ x: player * 4, y: 1, z: frame * .03 }); effect.update(1 / 60, frame / 60); });
  effects.forEach((effect, index) => {
    assert.equal(effect.trail.visible, ['mint', 'spark'].includes(types[index]));
    assert.equal(effect.particles.visible, ['confetti', 'spark'].includes(types[index]));
    for (const mesh of [effect.trail, effect.particles]) {
      assert.equal(mesh.renderOrder, 20); assert.equal(mesh.material.depthTest, true); assert.equal(mesh.material.depthWrite, false); assert.equal(mesh.material.toneMapped, false);
      assert.equal(mesh.castShadow, false); assert.equal(mesh.receiveShadow, false);
    }
    assert.equal(effect.trail.geometry.attributes.position.array[0], index * 4);
  });
  const before = effects[1].trail.geometry.attributes.position.array.slice();
  effects[0].clear(); effects[0].update(); assert.equal(effects[0].trail.visible, false);
  assert.deepEqual(effects[1].trail.geometry.attributes.position.array, before);
  effects[1].push({ x: 40, y: 7, z: -30 }); effects[1].update();
  assert.equal(effects[1].trail.visible, false); assert.equal(effects[1].particles.visible, false);
  const points = effects[1].trail.geometry.attributes.position;
  for (let index = 0; index < points.count; index++) closeVector(new Vector3().fromBufferAttribute(points, index), new Vector3(40, 7, -30));
  effects[2].setEffect('none'); effects[2].update(); assert.equal(effects[2].particles.visible, false);
  for (const effect of effects) { let disposed = 0; effect.trail.geometry.addEventListener('dispose', () => disposed++); effect.dispose(); effect.dispose(); assert.equal(disposed, 1); }
  assert.equal(scene.children.length, 0);
});
