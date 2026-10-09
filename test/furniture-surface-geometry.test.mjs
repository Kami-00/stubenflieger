import test from 'node:test';
import assert from 'node:assert/strict';
import { Color, Euler, Quaternion, Ray, Vector3 } from 'three';
import { HOUSE } from '../src/house.js';
import { buildFurnitureSurfaceGeometries, buildFurnitureSurfaceBatches } from '../src/furniture-surface-geometry.js';

const part = (id, kind, size, position, furnitureId = 'sofa') => ({ id, kind, size, position, furnitureId, floor: 'eg', color: '#668e7d', rotation: [0, 0, 0] });
function triangles(geometries) {
  return [...geometries].flatMap(([id, geometry]) => {
    const result = [], positions = geometry.attributes.position;
    for (let i = 0; i < positions.count; i += 3) {
      const vertices = [0, 1, 2].map(j => new Vector3().fromBufferAttribute(positions, i + j));
      const normal = vertices[1].clone().sub(vertices[0]).cross(vertices[2].clone().sub(vertices[0])).normalize();
      result.push({ id, vertices, normal, centre: vertices.reduce((sum, vertex) => sum.add(vertex), new Vector3()).multiplyScalar(1 / 3) });
    }
    return result;
  });
}
function hits(origin, direction, faces) {
  const ray = new Ray(new Vector3(...origin), new Vector3(...direction)), intersection = new Vector3();
  return faces.flatMap(face => ray.intersectTriangle(...face.vertices, false, intersection) ? [{ id: face.id, distance: ray.origin.distanceTo(intersection) }] : []).sort((a, b) => a.distance - b.distance);
}
const close = (a, b, message) => assert(Math.abs(a - b) < 2e-5, `${message}: ${a} != ${b}`);

test('joined sofa has its exact union volume and one coloured owner for each outside face', () => {
  const parts = [part('base', 'furniture', [2, .4, 1], [0, .2, .5]), part('back', 'sofa', [2, 1, .2], [0, .5, .9])];
  const before = structuredClone(parts), geometry = buildFurnitureSurfaceGeometries(parts), faces = triangles(geometry);
  assert.deepEqual(parts, before, 'render repair must not change collision data');
  close(faces.reduce((sum, { vertices: [a, b, c] }) => sum + a.dot(b.clone().cross(c)) / 6, 0), 1.04, 'analytic union volume');
  const rear = hits([.137, .213, 2], [0, 0, -1], faces).filter(hit => Math.abs(hit.distance - 1) < 1e-5);
  assert.deepEqual(rear.map(hit => hit.id), ['back'], 'one upholstery face, no fighting with the base');
  const reversed = buildFurnitureSurfaceGeometries([...parts].reverse());
  for (const [id, surface] of geometry) assert.deepEqual(surface.attributes.position.array, reversed.get(id).attributes.position.array);
});

test('table legs and open shelves retain flyable empty space instead of receiving a solid envelope', () => {
  const parts = [part('top', 'tabletop', [2, .1, 1.2], [0, .75, 0], 'table')];
  for (const x of [-.85, .85]) for (const z of [-.45, .45]) parts.push(part(`leg-${x}-${z}`, 'table-leg', [.06, .7, .06], [x, .35, z], 'table'));
  const faces = triangles(buildFurnitureSurfaceGeometries(parts));
  assert.equal(hits([.1, .35, -2], [0, 0, 1], faces).length, 0, 'under-table flight route stays empty');
  close(hits([.1, 1, .13], [0, -1, 0], faces)[0].distance, .2, 'table surface remains at the collision height');
  const shelf = [part('left', 'shelf-side', [.05, 1.5, .5], [-.5, .75, 0], 'shelf'), part('right', 'shelf-side', [.05, 1.5, .5], [.5, .75, 0], 'shelf')];
  for (const y of [.1, .6, 1.1]) shelf.push(part(`board-${y}`, 'shelf-board', [1.05, .04, .5], [0, y, 0], 'shelf'));
  assert.equal(hits([.1, .35, -1], [0, 0, 1], triangles(buildFurnitureSurfaceGeometries(shelf))).length, 0);
});

test('all actual furniture has only its union exterior and unchanged shared collision parts', () => {
  const parts = HOUSE.obstacles.filter(p => p.furnitureId), before = JSON.stringify(HOUSE), surfaces = buildFurnitureSurfaceGeometries(parts);
  assert(parts.length > 450, 'audit must cover all room furniture, not just the sofa');
  const groups = new Map();
  for (const source of parts) {
    if (!groups.has(source.furnitureId)) groups.set(source.furnitureId, []);
    groups.get(source.furnitureId).push({ source, centre: new Vector3(...source.position), inverse: new Quaternion().setFromEuler(new Euler(...source.rotation)).invert() });
  }
  const sourceById = new Map(parts.map(p => [p.id, p]));
  for (const face of triangles(surfaces)) {
    const boxes = groups.get(sourceById.get(face.id).furnitureId);
    const inside = point => boxes.some(({ source, centre, inverse }) => {
      const local = point.clone().sub(centre).applyQuaternion(inverse);
      return [local.x, local.y, local.z].every((value, i) => Math.abs(value) < source.size[i] / 2 - 1e-8);
    });
    assert(!inside(face.centre.clone().addScaledVector(face.normal, 2e-6)), `${face.id}: still draws a covered surface`);
    assert(inside(face.centre.clone().addScaledVector(face.normal, -2e-6)), `${face.id}: added a surface outside the collider`);
  }
  assert.equal(JSON.stringify(HOUSE), before);
});

test('mobile batching preserves every visible vertex and its furniture owner without a draw call per component', () => {
  const source = HOUSE.obstacles, geometries = buildFurnitureSurfaceGeometries(source), batches = buildFurnitureSurfaceBatches(source);
  const visible = [...geometries.values()].reduce((sum, geometry) => sum + geometry.attributes.position.count, 0);
  assert(batches.length <= 5, 'at most one furniture draw call per floor, including garden');
  assert.equal(batches.reduce((sum, batch) => sum + batch.geometry.attributes.position.count, 0), visible);
  const seen = new Set();
  for (const batch of batches) {
    let end = 0;
    for (const owner of batch.parts) {
      assert.equal(owner.start, end); end += owner.count;
      assert(!seen.has(owner.id)); seen.add(owner.id);
      const expected = geometries.get(owner.id);
      const tint = new Color(source.find(part => part.id === owner.id).color);
      for (const channel of ['r', 'g', 'b'].entries()) close(batch.geometry.attributes.color.array[owner.start * 3 + channel[0]], tint[channel[1]], 'original colour remains linear');
      for (const attribute of ['position', 'normal', 'uv']) {
        const size = expected.attributes[attribute].itemSize;
        assert.deepEqual(batch.geometry.attributes[attribute].array.slice(owner.start * size, end * size), expected.attributes[attribute].array);
      }
    }
    assert.equal(end, batch.geometry.attributes.position.count);
  }
});
