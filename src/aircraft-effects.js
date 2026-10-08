import {
  BufferGeometry, BufferAttribute, Line, LineBasicMaterial, InstancedMesh,
  BoxGeometry, MeshBasicMaterial, Color, Vector3, Quaternion, Euler, Matrix4,
} from 'three';
import { COSMETIC_EFFECTS } from './cosmetics.js';

const TRAIL_COUNT = 54, PARTICLE_COUNT = 28;
const CONFETTI = ['#d58c7e', '#79c6b2', '#e9c774', '#a7a0d6'];

/** Each aircraft owns its small, fixed-size effect buffer and GPU resources. */
export function createAircraftEffects(scene, { name = 'Flugspur', effect = 'none' } = {}) {
  const points = new Float32Array(TRAIL_COUNT * 3), geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(points, 3));
  const trail = new Line(geometry, new LineBasicMaterial({ color: '#80d6ba', transparent: true, opacity: .75, depthTest: true, depthWrite: false, toneMapped: false }));
  const particles = new InstancedMesh(new BoxGeometry(1, 1, 1), new MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: .9, depthTest: true, depthWrite: false, toneMapped: false }), PARTICLE_COUNT);
  trail.name = `${name} Linie`; particles.name = `${name} Partikel`;
  // The transparent ground renders first; walls/floors still occlude normally.
  for (const object of [trail, particles]) { object.frustumCulled = false; object.renderOrder = 20; object.visible = false; scene.add(object); }
  const matrix = new Matrix4(), quaternion = new Quaternion(), euler = new Euler();
  const position = new Vector3(), scale = new Vector3(), color = new Color();
  let currentEffect = 'none', initialized = false, disposed = false;

  function clear() { initialized = false; trail.visible = particles.visible = false; }
  function reset(point) {
    clear();
    if (!point) return;
    for (let i = 0; i < TRAIL_COUNT; i++) { points[i * 3] = point.x; points[i * 3 + 1] = point.y; points[i * 3 + 2] = point.z; }
    initialized = true; geometry.attributes.position.needsUpdate = true;
  }
  function setEffect(next = 'none') {
    next = COSMETIC_EFFECTS.includes(next) ? next : 'none';
    if (next === currentEffect) return;
    currentEffect = next; clear();
    trail.material.color.set(next === 'spark' ? '#e9bd5e' : '#80d6ba');
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.setColorAt(i, color.set(next === 'confetti' ? CONFETTI[i % 4] : '#f7d581'));
    particles.instanceColor.needsUpdate = true;
  }
  function push(point) {
    if (disposed) return;
    if (!initialized || Math.hypot(point.x - points[0], point.y - points[1], point.z - points[2]) > 1.5) { reset(point); return; }
    points.copyWithin(3, 0, points.length - 3); points[0] = point.x; points[1] = point.y; points[2] = point.z;
    geometry.attributes.position.needsUpdate = true;
  }
  function update(_dt = 1 / 60, elapsed = 0) {
    const moving = initialized && Math.hypot(points[0] - points[18], points[1] - points[19], points[2] - points[20]) > .035;
    trail.visible = moving && (currentEffect === 'mint' || currentEffect === 'spark');
    particles.visible = moving && (currentEffect === 'spark' || currentEffect === 'confetti');
    if (!particles.visible) return;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const index = Math.min(TRAIL_COUNT - 1, 2 + i) * 3, fade = 1 - i / 32;
      const size = (currentEffect === 'confetti' ? .037 : .022) * fade * (currentEffect === 'spark' ? .6 + .4 * Math.sin(elapsed * 8 + i) ** 2 : 1);
      position.set(points[index] + Math.sin(i * 2.4) * .045, points[index + 1] + Math.cos(i * 1.7) * .035 - i * .001, points[index + 2]);
      quaternion.setFromEuler(euler.set(elapsed * 2 + i, i * .7, elapsed * 1.4 + i));
      scale.set(size, currentEffect === 'confetti' ? size * .22 : size, size);
      particles.setMatrixAt(i, matrix.compose(position, quaternion, scale));
    }
    particles.instanceMatrix.needsUpdate = true;
  }
  function dispose() {
    if (disposed) return;
    clear(); disposed = true; scene.remove(trail, particles);
    geometry.dispose(); trail.material.dispose(); particles.geometry.dispose(); particles.material.dispose(); particles.dispose();
  }
  setEffect(effect);
  return { trail, particles, setEffect, reset, push, update, clear, dispose, get effect() { return currentEffect; } };
}
