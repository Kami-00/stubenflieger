import { BufferGeometry, Color, Float32BufferAttribute } from 'three';
import { buildBoxSurfaceGeometries } from './house-surface-geometry.js';

// Upholstery and fittings own coincident outside faces of their support. The
// shared clipper removes only covered faces; shelves and chair legs stay open.
const priority = part => ({ detail: 3, books: 2, sofa: 2, bed: 2, sanitary: 2 }[part.kind] ?? 0);

export function buildFurnitureSurfaceGeometries(parts) {
  const objects = new Map(), result = new Map();
  for (const part of parts) {
    if (!part.furnitureId) continue;
    if (!objects.has(part.furnitureId)) objects.set(part.furnitureId, []);
    objects.get(part.furnitureId).push(part);
  }
  for (const object of objects.values()) {
    for (const [id, geometry] of buildBoxSurfaceGeometries(object, priority)) result.set(id, geometry);
  }
  return result;
}

// The clipped meshes cannot be instanced, but can still share one draw call per
// floor, preserving the original colours as linear vertex colours. Retain
// vertex ranges so a ray hit can identify its source.
export function buildFurnitureSurfaceBatches(parts) {
  const surfaces = buildFurnitureSurfaceGeometries(parts), batches = new Map();
  for (const part of parts) {
    const surface = surfaces.get(part.id);
    if (!surface) continue;
    const count = surface.attributes.position.count;
    if (count) {
      const key = part.floor;
      if (!batches.has(key)) batches.set(key, { floor: part.floor, parts: [], position: [], normal: [], uv: [], color: [] });
      const batch = batches.get(key), start = batch.position.length / 3;
      batch.parts.push({ id: part.id, furnitureId: part.furnitureId, start, count });
      for (const name of ['position', 'normal', 'uv']) {
        for (const value of surface.attributes[name].array) batch[name].push(value);
      }
      const color = new Color(part.color);
      for (let i = 0; i < count; i++) batch.color.push(color.r, color.g, color.b);
    }
    surface.dispose();
  }
  return [...batches.values()].map(({ floor, parts: sources, ...attributes }) => {
    const geometry = new BufferGeometry();
    for (const name of ['position', 'normal', 'uv', 'color']) geometry.setAttribute(name, new Float32BufferAttribute(attributes[name], name === 'uv' ? 2 : 3));
    geometry.computeBoundingBox(); geometry.computeBoundingSphere();
    return { floor, parts: sources, geometry };
  });
}
