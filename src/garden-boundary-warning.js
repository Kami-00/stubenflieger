import { Color, DoubleSide, Group, Mesh, PlaneGeometry, ShaderMaterial, Vector2, Vector3 } from 'three';

export const GARDEN_WARNING_DISTANCE = 2.5;
export const GARDEN_WARNING_FULL_DISTANCE = .45;
const AXES = ['x', 'y', 'z'];
const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
const validPosition = position => position && AXES.every(axis => Number.isFinite(position[axis]));

/** The invisible limits are the house bounds, not the visible 1.5 m hedges. */
export function getGardenBoundaryFaces(bounds) {
  if (!bounds || AXES.some(axis => {
    const key = axis.toUpperCase();
    return !Number.isFinite(bounds[`min${key}`]) || !Number.isFinite(bounds[`max${key}`]) || bounds[`min${key}`] >= bounds[`max${key}`];
  })) return [];
  const { minX, maxX, minY, maxY, minZ, maxZ } = bounds;
  const x = (minX + maxX) / 2, y = (minY + maxY) / 2, z = (minZ + maxZ) / 2;
  const width = maxX - minX, height = maxY - minY, depth = maxZ - minZ;
  const face = (id, axis, coordinate, position, size, rotation) => ({ id, axis, coordinate, position, size, rotation,
    min: { x: minX, y: minY, z: minZ }, max: { x: maxX, y: maxY, z: maxZ } });
  // There is no lower warning sheet: the existing visible floors explain that
  // collision. Keeping the whole real height also avoids a gap above a hedge.
  return [
    face('minX', 'x', minX, [minX, y, z], [depth, height], [0, Math.PI / 2, 0]),
    face('maxX', 'x', maxX, [maxX, y, z], [depth, height], [0, -Math.PI / 2, 0]),
    face('minZ', 'z', minZ, [x, y, minZ], [width, height], [0, 0, 0]),
    face('maxZ', 'z', maxZ, [x, y, maxZ], [width, height], [0, Math.PI, 0]),
    face('maxY', 'y', maxY, [x, maxY, z], [width, depth], [Math.PI / 2, 0, 0]),
  ];
}

/** Distance to the finite sheet, so each side of a corner can warn separately. */
export function getBoundaryWarningStrength(face, position) {
  if (!validPosition(position)) return 0;
  let squaredDistance = 0;
  for (const axis of AXES) {
    const nearest = axis === face.axis ? face.coordinate : clamp(position[axis], face.min[axis], face.max[axis]);
    squaredDistance += (position[axis] - nearest) ** 2;
  }
  const proximity = clamp((GARDEN_WARNING_DISTANCE - Math.sqrt(squaredDistance)) / (GARDEN_WARNING_DISTANCE - GARDEN_WARNING_FULL_DISTANCE), 0, 1);
  return proximity * proximity * (3 - 2 * proximity);
}

const vertexShader = `
  uniform vec2 uDimensions;
  varying vec2 vPattern;
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vPattern = position.xy * uDimensions;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;
const fragmentShader = `
  uniform vec3 uColor;
  uniform vec3 uPlanePosition;
  uniform vec3 uCameraPosition;
  uniform float uOpacity;
  varying vec2 vPattern;
  varying vec3 vWorld;
  void main() {
    // Fixed world-sized diagonals, with derivative antialiasing. No moving
    // texture or pulse: approaching the wall is the only source of animation.
    float phase = (vPattern.x + vPattern.y) / .8;
    float edge = max(fwidth(phase), .001);
    float stripe = 1.0 - smoothstep(.2 - edge, .2 + edge, abs(fract(phase) - .5));
    float radius = min(distance(vWorld, uPlanePosition), distance(vWorld, uCameraPosition));
    float proximityPatch = 1.0 - smoothstep(3.0, 5.5, radius);
    float alpha = stripe * proximityPatch * uOpacity;
    if (alpha < .001) discard;
    gl_FragColor = vec4(uColor, alpha);
    #include <colorspace_fragment>
  }
`;

/**
 * Call after the camera pose is updated. Only the aircraft activates a warning;
 * the camera extends the local patch so chase and first-person views agree.
 * This owns only rendering resources and never touches collision geometry.
 */
export function createGardenBoundaryWarning(scene, house) {
  const group = new Group(); group.name = 'Gartengrenzen'; group.visible = false;
  scene.add(group);
  const geometry = new PlaneGeometry(1, 1);
  const entries = getGardenBoundaryFaces(house?.bounds).map(face => {
    const material = new ShaderMaterial({
      uniforms: {
        uColor: { value: new Color('#e13b36') },
        uPlanePosition: { value: new Vector3() }, uCameraPosition: { value: new Vector3() },
        uDimensions: { value: new Vector2(...face.size) }, uOpacity: { value: 0 },
      },
      vertexShader, fragmentShader, transparent: true, depthWrite: false, depthTest: true,
      side: DoubleSide, forceSinglePass: true, toneMapped: false,
    });
    const mesh = new Mesh(geometry, material); mesh.name = `garden-boundary-${face.id}`;
    mesh.position.set(...face.position); mesh.rotation.set(...face.rotation); mesh.scale.set(...face.size, 1);
    mesh.visible = false; mesh.renderOrder = 2; group.add(mesh);
    return { face, mesh, material, strength: 0 };
  });
  let disposed = false;
  function update(position, cameraPosition, dt = 1 / 60) {
    if (disposed) return;
    const valid = validPosition(position), camera = validPosition(cameraPosition) ? cameraPosition : position;
    const blend = 1 - Math.exp(-12 * (Number.isFinite(dt) ? clamp(dt, 0, .25) : 0));
    let visible = false;
    for (const entry of entries) {
      const target = getBoundaryWarningStrength(entry.face, position);
      entry.strength = valid ? entry.strength + (target - entry.strength) * blend : 0;
      if (target === 0 && entry.strength < .001) entry.strength = 0;
      entry.mesh.visible = entry.strength > .001;
      entry.material.uniforms.uOpacity.value = entry.strength * .62;
      if (valid) {
        entry.material.uniforms.uPlanePosition.value.copy(position);
        entry.material.uniforms.uCameraPosition.value.copy(camera);
      }
      visible ||= entry.mesh.visible;
    }
    group.visible = visible;
  }
  function dispose() {
    if (disposed) return;
    disposed = true; group.removeFromParent(); group.clear();
    geometry.dispose();
    for (const entry of entries) entry.material.dispose();
  }
  return { group, update, dispose };
}
