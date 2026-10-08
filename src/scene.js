import {
  WebGLRenderer, Scene, Color, Fog, PerspectiveCamera, HemisphereLight,
  DirectionalLight, PointLight, MeshStandardMaterial, MeshBasicMaterial,
  Mesh, InstancedMesh, BoxGeometry, Vector3, Euler, Quaternion, Matrix4,
  Group, Shape, ExtrudeGeometry, TorusGeometry, BufferGeometry,
  Float32BufferAttribute, CanvasTexture,
  RepeatWrapping, PCFShadowMap, SRGBColorSpace,
  ACESFilmicToneMapping, DoubleSide,
} from 'three';
import { HOUSE, FLOORS, getRoomAt, getDoorPose } from './house.js';
import { getAircraftDefinition } from './aircraft.js';
import { getStarReward } from './star-rewards.js';
import { normalizeAircraftColor } from './cosmetics.js';
import { applyAircraftColor } from './aircraft-appearance.js';
import { createAircraftEffects } from './aircraft-effects.js';
import { buildHouseSurfaceGeometries } from './house-surface-geometry.js';

const clamp = (value, lo, hi) => Math.max(lo, Math.min(hi, value));
const STRUCTURE = new Set(['wall', 'floor', 'roof']);

export function createScene(canvas, physics, getViewport = () => ({ width: canvas.clientWidth, height: canvas.clientHeight })) {
  const house = physics.house || physics.level || HOUSE;
  const renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(globalThis.devicePixelRatio || 1, 1.6));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = PCFShadowMap;
  renderer.outputColorSpace = SRGBColorSpace; renderer.toneMapping = ACESFilmicToneMapping; renderer.toneMappingExposure = 1.18;
  const scene = new Scene(); scene.background = new Color('#c9ddd5'); scene.fog = new Fog('#c9ddd5', 30, 90);
  const camera = new PerspectiveCamera(64, 1, .035, 120);
  camera.position.set(house.start.x, house.start.y + 1.3, house.start.z + 2.2); camera.lookAt(house.start.x, house.start.y, house.start.z - .5);
  scene.add(new HemisphereLight('#fff3d9', '#718169', 2.7));
  const sun = new DirectionalLight('#ffefce', 2.7); sun.position.set(-9, 24, -12); sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024); Object.assign(sun.shadow.camera, { left: -19, right: 19, top: 19, bottom: -19, near: .5, far: 65 });
  sun.shadow.normalBias = .025; sun.shadow.bias = -.00015; scene.add(sun, sun.target);
  const softLight = new PointLight('#fff1d0', 4, 11, 2); scene.add(softLight);
  const materials = new Map(), geometries = new Set(), textures = new Set();
  const boxGeometry = new BoxGeometry(1, 1, 1); geometries.add(boxGeometry);
  const floorGroups = new Map();
  for (const floor of ['ug', 'eg', 'og', 'dg', 'garden']) { const group = new Group(); group.name = `Etage ${floor}`; floorGroups.set(floor, group); scene.add(group); }
  const doorMeshes = new Map(), starMeshes = [], winds = [];
  function material(color, options = {}) {
    const key = `${color}:${JSON.stringify(options)}`;
    if (!materials.has(key)) materials.set(key, new MeshStandardMaterial({ color, roughness: .86, flatShading: true, ...options }));
    return materials.get(key);
  }
  function floorTexture(outdoor = false) {
    const paint = document.createElement('canvas'); paint.width = paint.height = 256; const ctx = paint.getContext('2d');
    ctx.fillStyle = outdoor ? '#edf4d8' : '#fff1dc'; ctx.fillRect(0, 0, 256, 256);
    if (outdoor) for (let i = 0; i < 1200; i++) { ctx.fillStyle = i % 2 ? '#d5e0bd' : '#eef3d9'; ctx.fillRect((i * 67) % 256, (i * 113) % 256, 1, 3); }
    else {
      ctx.strokeStyle = '#c9b594'; ctx.lineWidth = 1;
      for (let y = 0; y <= 256; y += 32) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(256, y); ctx.stroke(); for (let x = (y / 32 % 2) * 96; x < 256; x += 128) { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 32); ctx.stroke(); } }
      for (let i = 0; i < 90; i++) { ctx.fillStyle = i % 2 ? '#dfd0b8' : '#e8dbc4'; ctx.fillRect((i * 73) % 256, (i * 19) % 256, 12 + i % 21, 1); }
    }
    const texture = new CanvasTexture(paint); texture.colorSpace = SRGBColorSpace; texture.wrapS = texture.wrapT = RepeatWrapping; texture.repeat.set(3, 3); textures.add(texture); return texture;
  }
  const wood = floorTexture(), grass = floorTexture(true);
  const matrix = new Matrix4(), quaternion = new Quaternion(), euler = new Euler();
  const transform = part => matrix.compose(new Vector3(...part.position), quaternion.setFromEuler(euler.set(...(part.rotation || [0, 0, 0]))), new Vector3(...part.size));
  const surfaceGeometries = buildHouseSurfaceGeometries(house.obstacles);
  for (const geometry of surfaceGeometries.values()) geometries.add(geometry);
  const batches = new Map();
  for (const part of house.obstacles) {
    const group = floorGroups.get(part.floor) || floorGroups.get('garden');
    if (STRUCTURE.has(part.kind)) {
      const mat = material(part.color).clone();
      if (part.kind === 'floor') mat.map = part.floor === 'garden' ? grass : wood;
      // Shared boundary vertices use world coordinates so neighbouring rotated
      // parts cannot reopen a tiny seam through independent Float32 transforms.
      const mesh = new Mesh(surfaceGeometries.get(part.id), mat); mesh.name = part.id;
      mesh.castShadow = part.kind !== 'floor'; mesh.receiveShadow = true; group.add(mesh);
    } else {
      const key = `${part.floor}|${part.color}|${part.kind === 'glass' ? 'glass' : 'opaque'}`;
      if (!batches.has(key)) batches.set(key, { group, color: part.color, glass: part.kind === 'glass', parts: [] }); batches.get(key).parts.push(part);
    }
  }
  for (const { group, color, glass: isGlass, parts } of batches.values()) {
    const mesh = new InstancedMesh(boxGeometry, material(color, isGlass ? { transparent: true, opacity: .36, roughness: .12, depthWrite: false } : {}), parts.length);
    parts.forEach((part, index) => mesh.setMatrixAt(index, transform(part))); mesh.instanceMatrix.needsUpdate = true; mesh.castShadow = !isGlass; mesh.receiveShadow = true; mesh.frustumCulled = false; group.add(mesh);
  }
  const signGeometry = new BoxGeometry(.54, .23, .012); geometries.add(signGeometry);
  function doorSigns(door) {
    const paint = document.createElement('canvas'); paint.width = 256; paint.height = 112; const ctx = paint.getContext('2d');
    ctx.fillStyle = '#f5e5bc'; ctx.fillRect(0, 0, 256, 112);
    ctx.strokeStyle = '#ad8b58'; ctx.lineWidth = 4; ctx.strokeRect(4, 4, 248, 104);
    ctx.fillStyle = '#463e30'; ctx.font = 'bold 44px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(door.signText ?? `${door.threshold} ★`, 128, 58);
    for (const x of [15, 241]) { ctx.beginPath(); ctx.arc(x, 56, 3, 0, Math.PI * 2); ctx.fill(); }
    const texture = new CanvasTexture(paint); texture.colorSpace = SRGBColorSpace; textures.add(texture);
    const edge = material('#ad8b58', { roughness: .7 });
    const face = new MeshStandardMaterial({ map: texture, roughness: .85 });
    // Local +Z is the printed face. Each side faces away from the door leaf.
    return [-1, 1].map(side => {
      const sign = new Mesh(signGeometry, [edge, edge, edge, edge, face, edge]);
      sign.name = `${door.id}-sign-${side < 0 ? 'back' : 'front'}`;
      sign.position.set(0, .37, side * (door.size[2] / 2 + .0065));
      sign.rotation.y = side < 0 ? Math.PI : 0;
      sign.castShadow = sign.receiveShadow = true;
      return sign;
    });
  }
  for (const door of house.doors) {
    const mesh = new Group(); mesh.name = door.id;
    const leaf = new Mesh(boxGeometry, material(door.color || '#b99469')); leaf.name = `${door.id}-leaf`; leaf.castShadow = leaf.receiveShadow = true;
    const pose = getDoorPose(door, false); mesh.position.set(...pose.position); mesh.rotation.set(...pose.rotation); leaf.scale.set(...pose.size);
    mesh.add(leaf, ...doorSigns(door)); scene.add(mesh);
    doorMeshes.set(door.id, { door, mesh, leaf, opened: false });
  }
  function setDoorOpen(id, open = true) {
    const entry = doorMeshes.get(id); if (!entry) return; entry.opened = Boolean(open);
    const pose = getDoorPose(entry.door, entry.opened); entry.mesh.position.set(...pose.position); entry.mesh.rotation.set(...pose.rotation); entry.leaf.scale.set(...pose.size);
  }
  const plane = new Group(); plane.name = 'Papierflieger'; scene.add(plane);
  const aircraftMaterials = new Set(), aircraftGeometries = new Set();
  let aircraftForm = 'classic', aircraftSize = 1, aircraftColor = null;
  const effects = createAircraftEffects(scene);
  function setAircraft(form = 'classic', size = 1, nextEffect = 'none', color = null) {
    const definition = getAircraftDefinition(form, size); aircraftForm = definition.form; aircraftSize = definition.size; aircraftColor = normalizeAircraftColor(color);
    for (const geometry of aircraftGeometries) geometry.dispose(); aircraftGeometries.clear(); for (const mat of aircraftMaterials) mat.dispose(); aircraftMaterials.clear(); plane.clear();
    for (const part of definition.parts) {
      const vertices = [];
      for (const face of part.faces) for (let i = 1; i + 1 < face.length; i++) for (const index of [face[0], face[i], face[i + 1]]) vertices.push(...part.vertices[index]);
      const geometry = new BufferGeometry(); geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3)); geometry.computeVertexNormals();
      const mat = new MeshStandardMaterial({ color: part.color, roughness: .77, side: DoubleSide, flatShading: true }); const mesh = new Mesh(geometry, mat); mesh.name = part.id; mesh.userData.paperColor = part.color; mesh.castShadow = mesh.receiveShadow = true; plane.add(mesh); aircraftGeometries.add(geometry); aircraftMaterials.add(mat);
    }
    applyAircraftColor(plane, aircraftColor); effects.setEffect(nextEffect); effects.clear(); return definition;
  }
  function resetTrail(position = house.start) { effects.reset(position); }
  function updateTrail(position) { effects.push(position); }
  setAircraft(); resetTrail(); plane.position.set(house.start.x, house.start.y, house.start.z);
  const sling = new Group(); sling.position.set(house.start.x, 0, house.start.z); scene.add(sling);
  const launchRingGeometry = new TorusGeometry(.23, .014, 5, 28); geometries.add(launchRingGeometry);
  const launchRing = new Mesh(launchRingGeometry, new MeshBasicMaterial({ color: '#e5b45f', transparent: true, opacity: .75 })); launchRing.rotation.x = Math.PI / 2; launchRing.position.y = .045; sling.add(launchRing);
  function updateSling(power = 0) { launchRing.scale.setScalar(1 + Math.max(0, power) * .3); launchRing.material.opacity = .5 + Math.min(1, power) * .45; }
  const starShape = new Shape();
  for (let i = 0; i < 10; i++) { const angle = i * Math.PI / 5 + Math.PI / 2, radius = i % 2 ? .052 : .115; const x = Math.cos(angle) * radius, y = Math.sin(angle) * radius; i ? starShape.lineTo(x, y) : starShape.moveTo(x, y); }
  starShape.closePath(); const starGeometry = new ExtrudeGeometry(starShape, { depth: .025, bevelEnabled: false }); geometries.add(starGeometry);
  const haloGeometry = new TorusGeometry(.165, .007, 4, 22); geometries.add(haloGeometry);
  const starMaterials = [
    new MeshStandardMaterial({ color: '#ffd46c', emissive: '#b26e13', emissiveIntensity: .8, roughness: .42 }),
    new MeshStandardMaterial({ color: '#bed9f3', emissive: '#477294', emissiveIntensity: .22, roughness: .42 }),
  ];
  const haloMaterials = [
    new MeshBasicMaterial({ color: '#ffdf8a', transparent: true, opacity: .8, depthWrite: false }),
    new MeshBasicMaterial({ color: '#b7d6ed', transparent: true, opacity: .45, depthWrite: false }),
  ];
  const sparkleMaterial = new MeshBasicMaterial({ color: '#fff1b7', toneMapped: false });
  for (const mat of [...starMaterials, ...haloMaterials, sparkleMaterial]) materials.set(`star-${mat.id}`, mat);
  for (const data of house.collectibles) {
    const reward = getStarReward(data), mesh = new Group(), star = new Mesh(starGeometry, starMaterials[0]), rings = [], sparkles = new Group();
    mesh.name = data.id; mesh.position.set(data.x, data.y, data.z); mesh.add(star, sparkles);
    for (let i = 0; i < Number(reward.under) + Number(reward.zone); i++) {
      const ring = new Mesh(haloGeometry, haloMaterials[0]); ring.scale.setScalar(1 + i * .28); rings.push(ring); mesh.add(ring);
    }
    for (let i = 0; i < 3; i++) {
      const glint = new Mesh(starGeometry, sparkleMaterial), angle = i * Math.PI * 2 / 3;
      glint.position.set(Math.cos(angle) * .17, Math.sin(angle) * .17, .02); glint.scale.setScalar(.16); sparkles.add(glint);
    }
    if (data.under) mesh.scale.setScalar(.72);
    scene.add(mesh); starMeshes.push({ data, mesh, star, rings, sparkles, discovered: false, collected: false });
  }
  function collectStars(predicate) { const ids = []; for (const item of starMeshes) if (!item.collected && predicate(item.data)) { item.collected = true; item.mesh.visible = false; ids.push(item.data.id); } return ids; }
  function resetCollectibles(discoveredStarIds = []) {
    const discovered = new Set(discoveredStarIds);
    for (const item of starMeshes) {
      item.collected = false; item.mesh.visible = true; item.discovered = discovered.has(item.data.id);
      item.star.material = starMaterials[Number(item.discovered)];
      for (const ring of item.rings) ring.material = haloMaterials[Number(item.discovered)];
      item.sparkles.visible = !item.discovered;
    }
  }
  for (const thermal of house.thermals) {
    const ring = new TorusGeometry(thermal.r * .75, .009, 4, 26); geometries.add(ring);
    for (let i = 0; i < 7; i++) { const mesh = new Mesh(ring, new MeshBasicMaterial({ color: '#75d4c6', transparent: true, opacity: .26, depthWrite: false })); mesh.rotation.x = Math.PI / 2; scene.add(mesh); winds.push({ mesh, thermal, phase: i / 7 }); }
  }
  const blockMeshes = [];
  for (const block of physics.blocks || []) { const mesh = new Mesh(boxGeometry, material('#dab87f')); mesh.scale.set(...block.size); mesh.castShadow = true; scene.add(mesh); blockMeshes.push(mesh); }
  const warnings = { ceiling: false, distance: Infinity, intensity: 0 };
  function updateCeiling(position) {
    const ceiling = typeof physics.getCeilingAt === 'function' ? physics.getCeilingAt(position) : Infinity;
    warnings.distance = ceiling - position.y; warnings.ceiling = warnings.distance < .45; warnings.intensity = clamp((.55 - warnings.distance) / .5, 0, 1); return warnings.ceiling;
  }
  function update(dt = 1 / 60, elapsed = 0) {
    const position = physics.plane?.position || plane.position, room = getRoomAt(position), indoor = room && room.floor !== 'garden';
    const visibleFloor = floor => !indoor || floor === 'garden' || (FLOORS[floor] ?? -9) <= (FLOORS[room.floor] ?? 0) + 3.15;
    for (const [floor, group] of floorGroups) group.visible = visibleFloor(floor);
    // Both camera modes already trace against solid geometry. Keep the joined
    // house shell opaque: proximity fading exposed its hidden contact faces
    // and made intact floors disappear when flying close to a ceiling.
    for (const entry of doorMeshes.values()) entry.mesh.visible = visibleFloor(entry.door.floor);
    for (let i = 0; i < starMeshes.length; i++) {
      const item = starMeshes[i]; if (item.collected) continue; const starRoom = house.rooms.find(r => r.id === item.data.roomId);
      item.mesh.visible = !indoor || starRoom?.floor === room.floor || starRoom?.floor === 'garden'; item.mesh.rotation.y = elapsed * (item.discovered ? .5 : .85) + i * .61; item.mesh.position.y = item.data.y + Math.sin(elapsed * 1.7 + i) * (item.data.under ? .009 : .026);
      for (let j = 0; j < item.sparkles.children.length; j++) item.sparkles.children[j].scale.setScalar(.09 + .12 * Math.sin(elapsed * 3 + i + j * 2) ** 2);
    }
    for (const item of winds) { const phase = (elapsed * .18 + item.phase) % 1; item.mesh.position.set(item.thermal.x, item.thermal.y + phase * item.thermal.height, item.thermal.z); item.mesh.material.opacity = Math.sin(phase * Math.PI) * .28; item.mesh.visible = Math.abs(item.mesh.position.y - position.y) < 4; }
    for (let i = 0; i < blockMeshes.length; i++) { blockMeshes[i].position.copy(physics.blocks[i].body.position); blockMeshes[i].quaternion.copy(physics.blocks[i].body.quaternion); }
    softLight.position.set(position.x, position.y + .6, position.z); softLight.intensity = room?.floor === 'ug' ? 7 : 3;
    sun.target.position.set(position.x, 1, position.z); sun.target.updateMatrixWorld(); sun.position.set(position.x - 12, 24, position.z - 14);
    effects.update(dt, elapsed);
    updateCeiling(position);
  }
  function resize() { const viewport = getViewport() || {}; const width = Math.max(1, viewport.width || canvas.clientWidth || 1), height = Math.max(1, viewport.height || canvas.clientHeight || 1); renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix(); }
  function render() { renderer.render(scene, camera); }
  resize(); window.addEventListener('gameviewportchange', resize);
  function dispose() {
    effects.dispose();
    window.removeEventListener('gameviewportchange', resize); const allMaterials = new Set([...materials.values(), ...aircraftMaterials]), allGeometries = new Set([...geometries, ...aircraftGeometries]);
    scene.traverse(object => { if (object.geometry) allGeometries.add(object.geometry); if (object.material) for (const mat of Array.isArray(object.material) ? object.material : [object.material]) allMaterials.add(mat); if (object.shadow?.map) object.shadow.map.dispose(); });
    for (const geometry of allGeometries) geometry.dispose(); for (const mat of allMaterials) mat.dispose(); for (const texture of textures) texture.dispose(); scene.clear(); renderer.dispose();
  }
  return {
    renderer, scene, camera, plane, sling, effects, thermals: house.thermals, update, setAircraft, setDoorOpen, collectStars, resetCollectibles, resetTrail, updateTrail, updateSling, updateCeiling, warnings, render, resize, dispose,
    totalCollectibles: starMeshes.length, get collected() { return starMeshes.filter(item => item.collected).length; }, get aircraft() { return { form: aircraftForm, size: aircraftSize, effect: effects.effect, color: aircraftColor }; },
    sync: () => update(1 / 60, 0), wind: elapsed => update(1 / 60, elapsed), collect: position => collectStars(item => Math.hypot(item.x - position.x, item.y - position.y, item.z - position.z) <= item.radius).length,
  };
}
