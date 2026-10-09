import test from 'node:test';
import assert from 'node:assert/strict';
import { DoubleSide, Scene, Vector3 } from 'three';
import { HOUSE } from '../src/house.js';
import { GARDEN_WARNING_DISTANCE, getGardenBoundaryFaces, getBoundaryWarningStrength, createGardenBoundaryWarning } from '../src/garden-boundary-warning.js';

const faces = getGardenBoundaryFaces(HOUSE.bounds);
const face = id => faces.find(item => item.id === id);
const close = (actual, expected, epsilon = 1e-8) => assert(Math.abs(actual - expected) < epsilon, `${actual} != ${expected}`);
const settle = (warning, position, camera = position) => { for (let i = 0; i < 120; i++) warning.update(position, camera, 1 / 60); };
const visibleNames = warning => warning.group.children.filter(mesh => mesh.visible).map(mesh => mesh.name);

test('warning sheets match the four real house limits and upper limit without adding a floor', () => {
  assert.deepEqual(faces.map(item => item.id), ['minX', 'maxX', 'minZ', 'maxZ', 'maxY']);
  assert.deepEqual(faces.map(item => item.coordinate), [-5, 19, -7, 18, 14]);
  assert.deepEqual(face('maxY').size, [24, 25]);
  assert.deepEqual(face('minX').size, [25, 17.15]);
  assert.deepEqual(getGardenBoundaryFaces(undefined), []);
  assert.deepEqual(getGardenBoundaryFaces({ ...HOUSE.bounds, maxX: Infinity }), []);
  assert.deepEqual(getGardenBoundaryFaces({ ...HOUSE.bounds, maxY: HOUSE.bounds.minY }), []);
});

test('proximity is continuous, invisible at 2.5 m and strong before contact', () => {
  const west = face('minX'), at = distance => ({ x: HOUSE.bounds.minX + distance, y: 3, z: 5 });
  assert.equal(getBoundaryWarningStrength(west, at(GARDEN_WARNING_DISTANCE)), 0);
  assert.equal(getBoundaryWarningStrength(west, at(5)), 0);
  assert.equal(getBoundaryWarningStrength(west, at(.45)), 1);
  assert.equal(getBoundaryWarningStrength(west, at(0)), 1);
  const strengths = [2.49, 2, 1.5, 1, .5].map(distance => getBoundaryWarningStrength(west, at(distance)));
  assert(strengths.every((value, index) => value > 0 && (!index || value > strengths[index - 1])));
  assert(getBoundaryWarningStrength(west, at(2.499)) < .00001, 'no step at the threshold');
  assert.equal(getBoundaryWarningStrength(west, { x: -5, y: 40, z: 5 }), 0, 'finite rectangle, not an infinite plane');
  assert.equal(getBoundaryWarningStrength(west, { x: NaN, y: 3, z: 5 }), 0);
});

test('all sides and top respond independently, including three-face corners', () => {
  for (const boundary of faces) {
    const point = Object.fromEntries(['x', 'y', 'z'].map((axis, i) => [axis, boundary.position[i]]));
    assert.equal(getBoundaryWarningStrength(boundary, point), 1, boundary.id);
  }
  const corner = { x: -4.8, y: 13.8, z: -6.8 };
  assert.deepEqual(faces.filter(item => getBoundaryWarningStrength(item, corner) > .99).map(item => item.id), ['minX', 'minZ', 'maxY']);
  for (const star of HOUSE.collectibles.filter(star => star.roomId !== 'garden')) {
    assert(faces.every(item => getBoundaryWarningStrength(item, star) === 0), `${star.id}: indoor warning`);
  }
});

test('the camera alone cannot activate a warning and distant sheets fade away smoothly', () => {
  const scene = new Scene(), warning = createGardenBoundaryWarning(scene, HOUSE);
  const near = { x: -4.7, y: 4, z: 5 }, far = { x: 7, y: 4, z: 5 };
  settle(warning, far, near);
  assert(!warning.group.visible);
  warning.update(near, far, 1 / 60);
  assert.deepEqual(visibleNames(warning), ['garden-boundary-minX']);
  const mesh = warning.group.children[0], first = mesh.material.uniforms.uOpacity.value;
  assert(first > 0 && first < .62, 'appearance is eased');
  settle(warning, near, far);
  close(mesh.material.uniforms.uOpacity.value, .62);
  assert.deepEqual(mesh.material.uniforms.uCameraPosition.value.toArray(), [7, 4, 5]);
  const opacity = mesh.material.uniforms.uOpacity.value;
  warning.update(near, { x: -3, y: 4.5, z: 5 }, 0);
  assert.equal(mesh.material.uniforms.uOpacity.value, opacity, 'render camera refresh must not advance fading twice');
  assert.deepEqual(mesh.material.uniforms.uCameraPosition.value.toArray(), [-3, 4.5, 5]);
  warning.update(far, near, 1 / 60);
  assert(mesh.material.uniforms.uOpacity.value > 0 && mesh.material.uniforms.uOpacity.value < .62, 'departure is eased');
  settle(warning, far, near);
  assert(!warning.group.visible);
  assert.equal(mesh.material.uniforms.uOpacity.value, 0);
  warning.dispose();
});

test('frame-rate-independent fade and corner rendering remain transparent and aligned', () => {
  const a = createGardenBoundaryWarning(new Scene(), HOUSE), b = createGardenBoundaryWarning(new Scene(), HOUSE);
  const position = { x: -4.8, y: 13.8, z: -6.8 };
  for (let i = 0; i < 60; i++) a.update(position, position, 1 / 60);
  for (let i = 0; i < 30; i++) b.update(position, position, 1 / 30);
  assert.deepEqual(visibleNames(a), ['garden-boundary-minX', 'garden-boundary-minZ', 'garden-boundary-maxY']);
  a.group.updateMatrixWorld(true);
  for (let i = 0; i < a.group.children.length; i++) {
    const mesh = a.group.children[i], boundary = faces[i], material = mesh.material;
    close(material.uniforms.uOpacity.value, b.group.children[i].material.uniforms.uOpacity.value);
    assert(material.transparent && material.depthTest && !material.depthWrite);
    assert.equal(material.side, DoubleSide);
    assert(material.forceSinglePass && !material.toneMapped);
    assert(!mesh.castShadow && !mesh.receiveShadow);
    assert.deepEqual(mesh.position.toArray(), boundary.position);
    const normal = new Vector3(0, 0, 1).applyEuler(mesh.rotation);
    assert(normal.dot(new Vector3(7, 5, 5).sub(mesh.position)) > 0, `${boundary.id}: faces inward`);
    assert(material.uniforms.uOpacity.value <= .62, 'cannot become an opaque wall');
  }
  a.dispose(); b.dispose();
});

test('no source mutations, invalid poses hide warnings, and disposal releases shared resources once', () => {
  const house = structuredClone(HOUSE), before = JSON.stringify(house), scene = new Scene();
  const warning = createGardenBoundaryWarning(scene, house), meshes = [...warning.group.children];
  let geometriesDisposed = 0, materialsDisposed = 0;
  meshes[0].geometry.addEventListener('dispose', () => geometriesDisposed++);
  for (const mesh of meshes) mesh.material.addEventListener('dispose', () => materialsDisposed++);
  settle(warning, { x: 18.8, y: 4, z: 5 });
  assert(warning.group.visible);
  warning.update(null, null);
  assert(!warning.group.visible);
  warning.dispose(); warning.dispose();
  assert.equal(geometriesDisposed, 1);
  assert.equal(materialsDisposed, 5);
  assert.equal(scene.children.length, 0);
  assert.equal(warning.group.children.length, 0);
  assert.equal(JSON.stringify(house), before);
  warning.update({ x: 18.8, y: 4, z: 5 });
  assert.equal(scene.children.length, 0);
});
