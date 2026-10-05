import {
  WebGLRenderer, Scene, Color, Fog, PerspectiveCamera, HemisphereLight,
  DirectionalLight, MeshStandardMaterial, Mesh, BoxGeometry, CylinderGeometry,
  Vector3, MeshBasicMaterial, TorusGeometry, IcosahedronGeometry, RingGeometry,
  Group, ConeGeometry, Shape, ExtrudeGeometry, PointLight, BufferGeometry,
  Float32BufferAttribute, Line, LineBasicMaterial, PCFShadowMap, SRGBColorSpace,
  ACESFilmicToneMapping, DoubleSide,
} from './vendor.js';
import { ROOM_WIDTH, ROOM_DEPTH, CEILING_HEIGHT, DOOR_WIDTH, DOOR_HEIGHT, getWalls } from './levels.js';

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const COLORS = {
  living: ['#b98d60', '#759a91', '#d7d6bd', '#bf744e'],
  kitchen: ['#cbb898', '#97b8ad', '#f1dfbc', '#76a19a'],
  office: ['#a87d52', '#7594a2', '#d9d9c7', '#6b8493'],
  bedroom: ['#b29479', '#b7a8b8', '#e2d2ca', '#b88583'],
  library: ['#b48b5f', '#6f8a78', '#d8ceb7', '#8c5a44'],
  workshop: ['#b09271', '#a2a09a', '#d9d3c2', '#bd824e'],
  studio: ['#c4a588', '#b09da3', '#e5dfcf', '#b67666'],
  greenhouse: ['#b3b390', '#89b69c', '#d8e4c7', '#86a36c'],
};

export function createScene(canvas, physics, getViewport) {
  const level = physics.level;
  const renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(globalThis.devicePixelRatio || 1, 1.6));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFShadowMap;
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.16;
  const scene = new Scene();
  scene.background = new Color('#b1c6c1');
  scene.fog = new Fog('#c3d0c2', 64, 160);
  const camera = new PerspectiveCamera(57, 1, 0.08, 230);
  camera.position.set(0, 6, 19);
  camera.lookAt(0, 2.7, 8);
  scene.add(new HemisphereLight(0xfff4dc, 0x677758, 2.35));
  const sun = new DirectionalLight(0xffe5bb, 3.2);
  sun.position.set(-8, 18, 8);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = -22;
  sun.shadow.camera.right = 22;
  sun.shadow.camera.top = 24;
  sun.shadow.camera.bottom = -24;
  sun.shadow.camera.near = 0.5;
  sun.shadow.camera.far = 55;
  sun.shadow.normalBias = 0.04;
  sun.shadow.bias = -0.0002;
  scene.add(sun, sun.target);

  const materials = new Map();
  const geometries = new Map();
  const wallMeshes = [];
  const ceilingPanels = [];
  const windMeshes = [];
  const collectibleMeshes = [];
  const boxGeometry = new BoxGeometry(1, 1, 1);
  geometries.set('box', boxGeometry);
  function material(color) {
    if (!materials.has(color)) materials.set(color, new MeshStandardMaterial({ color, roughness: 0.86, flatShading: true }));
    return materials.get(color);
  }
  function geometry(key, factory) {
    if (!geometries.has(key)) geometries.set(key, factory());
    return geometries.get(key);
  }
  function box(w, h, d, x, y, z, color, parent = scene) {
    const mesh = new Mesh(boxGeometry, material(color));
    mesh.scale.set(w, h, d);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }
  function cylinder(top, bottom, height, x, y, z, color, sides = 10, parent = scene) {
    const mesh = new Mesh(geometry(`c:${top}:${bottom}:${height}:${sides}`, () => new CylinderGeometry(top, bottom, height, sides)), material(color));
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }
  function rod(from, to, radius, color, parent = scene) {
    const start = new Vector3(...from);
    const end = new Vector3(...to);
    const direction = end.clone().sub(start);
    const mesh = cylinder(radius, radius, 1, 0, 0, 0, color, 6, parent);
    mesh.scale.y = direction.length();
    mesh.position.copy(start.add(end).multiplyScalar(0.5));
    mesh.quaternion.setFromUnitVectors(new Vector3(0, 1, 0), direction.normalize());
    return mesh;
  }
  function collider(room, size, position) {
    physics.solid(size, [room.x + position[0], position[1], room.z + position[2]]);
  }
  function plant(parent, x, z, height = 3, potColor = '#bd925e') {
    cylinder(0.65, 0.5, 0.95, x, 0.5, z, potColor, 8, parent);
    for (let i = 0; i < 5; i++) {
      const angle = i * 2.4;
      const tip = [x + Math.sin(angle) * 0.7, height - (i % 2) * 0.55, z + Math.cos(angle) * 0.65];
      rod([x, 0.7, z], tip, 0.035, '#496f4a', parent);
      const leaf = new Mesh(geometry('leaf', () => new IcosahedronGeometry(0.7, 0)), material(i % 2 ? '#72975d' : '#4b795a'));
      leaf.position.set(...tip);
      leaf.scale.set(0.65, 1.15, 0.45);
      leaf.rotation.z = Math.sin(angle) * 0.8;
      parent.add(leaf);
    }
  }
  function shelf(room, parent, x, z, height = 5.5, width = 5.3) {
    box(width, height, 0.25, x, height / 2, z - 0.5, '#765237', parent);
    for (const side of [-1, 1]) box(0.18, height, 1.25, x + side * width / 2, height / 2, z, '#986e47', parent);
    const bookColors = ['#6c9690', '#d39c4e', '#bd7156', '#ddcc9d', '#426c6a'];
    for (let row = 0; row < 3; row++) {
      const y = 0.3 + row * 1.65;
      box(width + 0.2, 0.15, 1.35, x, y, z, '#aa7f52', parent);
      for (let book = 0; book < 8; book++) {
        const h = 0.65 + ((book * 7 + row * 3) % 5) * 0.15;
        box(0.36, h, 0.9, x - width / 2 + 0.45 + book * 0.6, y + 0.1 + h / 2, z + 0.03, bookColors[(book + row) % 5], parent);
      }
    }
    collider(room, [width + 0.35, height, 1.45], [x, height / 2, z]);
  }
  function table(room, parent, x, z, width = 4, depth = 3, height = 2.7) {
    box(width, 0.25, depth, x, height, z, '#b68b5b', parent);
    for (const dx of [-1, 1]) for (const dz of [-1, 1]) box(0.22, height, 0.22, x + dx * (width / 2 - 0.25), height / 2, z + dz * (depth / 2 - 0.25), '#735840', parent);
    collider(room, [width, height + 0.2, depth], [x, (height + 0.2) / 2, z]);
  }
  function sofa(room, parent) {
    box(4.2, 0.7, 8.3, -10.1, 0.8, -1.8, '#345e58', parent);
    box(0.75, 2.5, 8.3, -11.75, 1.7, -1.8, '#47726a', parent);
    for (const z of [-4.6, -1.8, 1]) {
      box(3.4, 0.6, 2.6, -9.85, 1.4, z, '#719078', parent);
      box(0.6, 1.45, 2.55, -11.1, 2.1, z, '#668872', parent);
    }
    for (const z of [-5.75, 2.15]) box(4.2, 1.5, 0.6, -10.1, 1.7, z, '#4d7467', parent);
    const pillow = box(0.6, 1.2, 1.4, -10.3, 2.1, -4.2, '#e2b665', parent);
    pillow.rotation.z = -0.18;
    collider(room, [4.3, 2.65, 8.4], [-10.2, 1.325, -1.8]);
  }
  function chair(room, parent, x, z, color = '#d39a4e') {
    box(3.2, 0.6, 3.2, x, 1.3, z, color, parent);
    box(3.2, 2.4, 0.65, x, 2, z - 1.35, color, parent);
    for (const dx of [-1.35, 1.35]) box(0.45, 1.2, 3.1, x + dx, 1.6, z, color, parent);
    for (const dx of [-1.2, 1.2]) for (const dz of [-1.2, 1.2]) cylinder(0.12, 0.1, 0.7, x + dx, 0.35, z + dz, '#604c37', 6, parent);
    collider(room, [3.4, 3.2, 3.4], [x, 1.6, z]);
  }
  function windowDecoration(parent, x, z, width = 5.8) {
    box(width + 0.5, 4.65, 0.09, x, 6.15, z, '#eee7cb', parent);
    const glass = box(width, 4.2, 0.1, x, 6.15, z + 0.06, '#bde0dc', parent);
    glass.material = material('#bde0dc');
    box(0.12, 4.2, 0.13, x, 6.15, z + 0.14, '#fff4d3', parent);
    box(width, 0.12, 0.13, x, 6.15, z + 0.14, '#fff4d3', parent);
    box(width + 0.75, 0.15, 0.55, x, 3.95, z + 0.23, '#e1d3b4', parent);
  }
  function roomFurniture(room, parent) {
    const type = room.type || 'living';
    if (type === 'living') {
      sofa(room, parent);
      chair(room, parent, 9.6, -3.5);
      shelf(room, parent, 8, -15.8);
      plant(parent, -10, -12.8, 3.2);
      collider(room, [2, 3.8, 2], [-10, 1.9, -12.8]);
      cylinder(1.6, 1.6, 0.2, -9.6, 1.65, 7, '#89613e', 12, parent);
      for (let i = 0; i < 3; i++) {
        const a = i * Math.PI * 2 / 3;
        rod([-9.6, 1.5, 7], [-9.6 + Math.sin(a) * 1.3, 0.1, 7 + Math.cos(a) * 1.3], 0.1, '#594833', parent);
      }
      collider(room, [3.2, 1.8, 3.2], [-9.6, 0.9, 7]);
      box(1.1, 0.18, 0.85, -9.9, 1.87, 7, '#d49e51', parent);
      cylinder(0.28, 0.24, 0.45, -8.8, 2.02, 6.7, '#efe1c3', 10, parent);
      cylinder(0.7, 0.75, 0.15, 10, 0.08, 7.5, '#455a4b', 10, parent);
      rod([10, 0.1, 7.5], [10, 5.4, 7.5], 0.07, '#455a4b', parent);
      cylinder(0.55, 1.05, 1.25, 10, 5.6, 7.5, '#ecdab2', 8, parent);
      collider(room, [1.1, 5.5, 1.1], [10, 2.75, 7.5]);
      const lamp = new PointLight(0xffc894, 6, 7, 2);
      lamp.position.set(10, 5.1, 7.5);
      parent.add(lamp);
    } else if (type === 'kitchen') {
      for (const x of [-9.5, 9.5]) {
        box(4.9, 2.65, 4, x, 1.33, -13.7, '#91aa94', parent);
        box(5.15, 0.22, 4.2, x, 2.78, -13.7, '#f1e5c7', parent);
        for (const dx of [-1.15, 1.15]) {
          box(2.2, 2.3, 0.09, x + dx, 1.35, -11.64, '#b8c6a8', parent);
          box(0.5, 0.08, 0.12, x + dx, 2.15, -11.55, '#7a805c', parent);
        }
        collider(room, [5.2, 2.9, 4.3], [x, 1.45, -13.7]);
      }
      box(2, 0.11, 1.5, -9.5, 2.94, -13.7, '#728580', parent);
      rod([-9.5, 2.95, -14.1], [-9.5, 3.8, -14.1], 0.08, '#b7c9c2', parent);
      cylinder(0.8, 0.65, 0.8, 9.5, 3.26, -13.7, '#aa7e4a', 10, parent);
      plant(parent, -10.4, 9, 3);
      chair(room, parent, 10, 4, '#d7b671');
    } else if (type === 'office') {
      table(room, parent, -9.5, -12, 5.4, 3.5);
      box(2.1, 1.45, 0.18, -9.5, 3.6, -13, '#405b60', parent);
      box(1.9, 1.2, 0.09, -9.5, 3.6, -12.85, '#91c3bf', parent);
      box(1.8, 0.1, 0.7, -9.5, 2.9, -11.5, '#eee5cd', parent);
      chair(room, parent, -10, -7, '#709592');
      shelf(room, parent, 8.8, -15.8, 5.4, 4.2);
      plant(parent, 10.2, 8.8, 3.6);
    } else if (type === 'bedroom') {
      box(4.6, 0.8, 9.2, -9.9, 0.65, -2, '#96745a', parent);
      box(4.45, 0.7, 9, -9.9, 1.25, -2, '#f1d9bc', parent);
      box(4.45, 0.22, 6.6, -9.9, 1.72, -0.8, '#bb8790', parent);
      box(4.6, 2.8, 0.45, -9.9, 1.7, -6.5, '#876655', parent);
      for (const x of [-11, -8.8]) box(1.75, 0.3, 1.4, x, 1.8, -5.1, '#e9dac8', parent);
      collider(room, [4.7, 3.1, 9.5], [-9.9, 1.55, -2]);
      box(4.2, 2.65, 2.5, 9.6, 1.33, -13.7, '#d4b28f', parent);
      for (let i = 0; i < 3; i++) {
        box(3.8, 0.72, 0.06, 9.6, 0.52 + i * 0.8, -12.4, '#e1bfa0', parent);
        box(0.55, 0.1, 0.1, 9.6, 0.52 + i * 0.8, -12.32, '#8c7359', parent);
      }
      collider(room, [4.3, 2.9, 2.6], [9.6, 1.45, -13.7]);
      plant(parent, 10, 9, 2.8);
    } else if (type === 'library') {
      shelf(room, parent, -8.5, -15.8, 6.3, 5.7);
      shelf(room, parent, 8.5, -15.8, 6.3, 5.7);
      chair(room, parent, -10, -2, '#87718c');
      chair(room, parent, 10, 4, '#688674');
      plant(parent, -10, 10, 3.3);
    } else if (type === 'workshop') {
      table(room, parent, -9.5, -12.7, 5.6, 4, 2.8);
      box(5.5, 3, 0.15, -9.5, 5.3, -16.6, '#ae8c5f', parent);
      for (let i = 0; i < 5; i++) {
        box(0.15, 1.3, 0.15, -11.4 + i * 0.95, 5.4, -16.4, '#5f706b', parent);
        box(0.62, 0.2, 0.23, -11.4 + i * 0.95, 6, -16.35, '#90a299', parent);
      }
      for (const z of [-13.4, -10.4]) {
        box(3.8, 2, 2.6, 10, 1, z, '#bd874c', parent);
        box(3.5, 0.08, 0.15, 10, 1.7, z + 1.32, '#e4bb78', parent);
        collider(room, [3.9, 2.1, 2.7], [10, 1.05, z]);
      }
    } else if (type === 'studio') {
      table(room, parent, 9.5, -13, 5.2, 3.6);
      box(2.8, 3.3, 0.18, -10, 3.8, -12.5, '#f0e5cf', parent);
      rod([-11.3, 0, -12.5], [-10, 6, -12.5], 0.13, '#9b784d', parent);
      rod([-8.7, 0, -12.5], [-10, 6, -12.5], 0.13, '#9b784d', parent);
      box(1.2, 1.1, 0.06, -10.2, 4.1, -12.36, '#c98165', parent);
      box(1.7, 0.55, 0.06, -9.9, 3.1, -12.35, '#779d8b', parent);
      collider(room, [3.2, 6, 1.2], [-10, 3, -12.5]);
      sofa(room, parent);
    } else {
      for (const x of [-10, 10]) for (const z of [-12.5, -5, 4.5, 12]) {
        plant(parent, x, z, 3 + ((z + 20) % 3) * 0.6, '#bd8c5d');
        collider(room, [2.2, 3.8, 2.2], [x, 1.9, z]);
      }
      table(room, parent, 9.5, -15, 4.5, 2.4, 2.7);
    }
  }

  for (const room of level.rooms) {
    const palette = COLORS[room.type] || COLORS.living;
    const group = new Group();
    group.position.set(room.x, 0, room.z);
    scene.add(group);
    box(ROOM_WIDTH, 0.26, ROOM_DEPTH, 0, -0.15, 0, palette[0], group);
    if (room.type === 'kitchen') {
      for (let i = 0; i < 6; i++) for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) box(4.3, 0.014, 4.2, -10.8 + i * 4.32, 0, -14.7 + j * 4.2, '#dfd0ad', group).castShadow = false;
      }
    } else {
      for (let z = -15; z <= 15; z += 2) box(ROOM_WIDTH - 0.2, 0.01, 0.035, 0, 0, z, '#947452', group).castShadow = false;
      for (let x = -9; x <= 9; x += 6) box(0.025, 0.01, ROOM_DEPTH, x, 0, 0, '#ab835a', group).castShadow = false;
    }
    box(11, 0.028, 17, 0.1, 0.03, 0, palette[3], group).castShadow = false;
    box(10.45, 0.015, 16.45, 0.1, 0.055, 0, room.type === 'living' ? '#bc8758' : palette[0], group).castShadow = false;
    // Rear-wall ornaments stay clear of the generous central doorway.
    const hasRearNeighbour = level.rooms.some(other => other.x === room.x && other.z === room.z - ROOM_DEPTH);
    if (!hasRearNeighbour) windowDecoration(group, -7.9, -ROOM_DEPTH / 2 + 0.23, 6);
    roomFurniture(room, group);
  }

  for (const wall of getWalls(level)) {
    const [w, h, d] = wall.size;
    const [x, y, z] = wall.position;
    const wallColor = wall.interior ? '#d3d1b9' : (w > d ? '#7fa198' : '#d6d7bf');
    const mesh = box(w, h, d, x, y, z, wallColor);
    mesh.material = new MeshStandardMaterial({ color: wallColor, roughness: 0.9, transparent: true, opacity: 1 });
    wallMeshes.push({ mesh, size: wall.size, center: wall.position });
    // Each low wall segment gets its own skirting; it never bridges a door.
    if (y - h / 2 < 0.1) box(w + (w < d ? 0.03 : 0), 0.24, d + (d < w ? 0.03 : 0), x, 0.12, z, '#ece5cb').castShadow = false;
  }
  const doorEdges = new Set();
  for (const room of level.rooms) for (const other of level.rooms) {
    const east = other.x === room.x + ROOM_WIDTH && other.z === room.z;
    const north = other.x === room.x && other.z === room.z - ROOM_DEPTH;
    if (!east && !north) continue;
    const key = `${room.x},${room.z},${east ? 'e' : 'n'}`;
    if (doorEdges.has(key)) continue;
    doorEdges.add(key);
    if (east) {
      const x = room.x + ROOM_WIDTH / 2;
      for (const side of [-1, 1]) box(0.47, DOOR_HEIGHT, 0.18, x, DOOR_HEIGHT / 2, room.z + side * (DOOR_WIDTH / 2 + 0.11), '#efe2c0');
      box(0.47, 0.2, DOOR_WIDTH + 0.42, x, DOOR_HEIGHT + 0.11, room.z, '#efe2c0');
    } else {
      const z = room.z - ROOM_DEPTH / 2;
      for (const side of [-1, 1]) box(0.18, DOOR_HEIGHT, 0.47, room.x + side * (DOOR_WIDTH / 2 + 0.11), DOOR_HEIGHT / 2, z, '#efe2c0');
      box(DOOR_WIDTH + 0.42, 0.2, 0.47, room.x, DOOR_HEIGHT + 0.11, z, '#efe2c0');
    }
  }

  // Clip diagonal stripe quads to the ceiling footprint. A single mesh per room
  // avoids a texture download and keeps the warning light on mobile hardware.
  function stripeGeometry(width, depth) {
    const vertices = [];
    const x0 = -width / 2;
    const x1 = width / 2;
    const z0 = -depth / 2;
    const z1 = depth / 2;
    function clip(poly, inside, intersect) {
      const result = [];
      for (let i = 0; i < poly.length; i++) {
        const a = poly[i];
        const b = poly[(i + 1) % poly.length];
        const aInside = inside(a);
        const bInside = inside(b);
        if (aInside) result.push(a);
        if (aInside !== bInside) result.push(intersect(a, b));
      }
      return result;
    }
    for (let offset = z0 - x1 - 2; offset < z1 - x0 + 2; offset += 2.45) {
      let polygon = [[x0, x0 + offset], [x1, x1 + offset], [x1, x1 + offset + 0.7], [x0, x0 + offset + 0.7]];
      polygon = clip(polygon, p => p[1] >= z0, (a, b) => {
        const t = (z0 - a[1]) / (b[1] - a[1]);
        return [a[0] + t * (b[0] - a[0]), z0];
      });
      if (polygon.length < 3) continue;
      polygon = clip(polygon, p => p[1] <= z1, (a, b) => {
        const t = (z1 - a[1]) / (b[1] - a[1]);
        return [a[0] + t * (b[0] - a[0]), z1];
      });
      for (let i = 1; i < polygon.length - 1; i++) for (const p of [polygon[0], polygon[i], polygon[i + 1]]) vertices.push(p[0], 0, p[1]);
    }
    const result = new BufferGeometry();
    result.setAttribute('position', new Float32BufferAttribute(new Float32Array(vertices), 3));
    result.computeVertexNormals();
    return result;
  }
  const stripeGeom = geometry('ceiling-stripes', () => stripeGeometry(ROOM_WIDTH, ROOM_DEPTH));
  for (const room of level.rooms) {
    const backgroundMaterial = new MeshBasicMaterial({ color: '#ffe5d3', transparent: true, opacity: 0, depthWrite: false, side: DoubleSide });
    const stripesMaterial = new MeshBasicMaterial({ color: '#ef3538', transparent: true, opacity: 0, depthWrite: false, side: DoubleSide });
    const background = new Mesh(boxGeometry, backgroundMaterial);
    background.scale.set(ROOM_WIDTH - 0.15, 0.012, ROOM_DEPTH - 0.15);
    background.position.set(room.x, CEILING_HEIGHT - 0.05, room.z);
    const stripes = new Mesh(stripeGeom, stripesMaterial);
    stripes.position.set(room.x, CEILING_HEIGHT - 0.08, room.z);
    background.renderOrder = 20;
    stripes.renderOrder = 21;
    background.visible = false;
    stripes.visible = false;
    scene.add(background, stripes);
    ceilingPanels.push({ room, background, stripes, backgroundMaterial, stripesMaterial });
  }

  const blocks = physics.blocks.map((block, index) => {
    const home = block.home.toArray ? block.home.toArray() : [block.home.x, block.home.y, block.home.z];
    return box(...block.size, ...home, ['#edbd76', '#dca15e', '#efc88b', '#c88b47'][index % 4]);
  });
  for (const tower of level.towers || []) {
    const target = new Mesh(geometry('tower-target', () => new RingGeometry(1.72, 1.8, 32)), new MeshBasicMaterial({ color: '#eabe72', transparent: true, opacity: 0.5, side: DoubleSide }));
    target.rotation.x = -Math.PI / 2;
    target.position.set(tower.x, 0.1, tower.z);
    scene.add(target);
  }

  for (const thermal of level.thermals || []) {
    const group = new Group();
    group.position.set(thermal.x, 0, thermal.z);
    scene.add(group);
    const column = new Mesh(geometry(`thermal-column:${thermal.r}`, () => new CylinderGeometry(thermal.r * 0.8, thermal.r, 8.2, 16, 1, true)), new MeshBasicMaterial({ color: '#8be6c4', transparent: true, opacity: 0.025, side: DoubleSide, depthWrite: false }));
    column.position.y = 4.3;
    group.add(column);
    const rim = new Mesh(geometry(`thermal-rim:${thermal.r}`, () => new RingGeometry(thermal.r - 0.065, thermal.r, 32)), new MeshBasicMaterial({ color: '#9feac9', transparent: true, opacity: 0.6, side: DoubleSide, depthWrite: false }));
    rim.rotation.x = -Math.PI / 2;
    rim.position.y = 0.13;
    group.add(rim);
    for (let i = 0; i < 4; i++) {
      const ring = new Mesh(geometry(`thermal-ring:${thermal.r}`, () => new TorusGeometry(thermal.r * 0.72, 0.02, 4, 24, Math.PI * 1.5)), new MeshBasicMaterial({ color: '#b5efcf', transparent: true, opacity: 0.4, depthWrite: false }));
      ring.rotation.x = Math.PI / 2;
      group.add(ring);
      windMeshes.push({ mesh: ring, phase: i / 4 });
    }
  }

  const plane = new Group();
  plane.scale.setScalar(0.48);
  scene.add(plane);
  box(0.19, 0.17, 1.65, 0, 0, 0, '#d79c56', plane);
  const nose = new Mesh(geometry('plane-nose', () => new ConeGeometry(0.13, 0.48, 6)), material('#e77b45'));
  nose.rotation.x = -Math.PI / 2;
  nose.position.z = -1;
  nose.castShadow = true;
  plane.add(nose);
  function wing(points, color) {
    const shape = new Shape();
    points.forEach(([x, z], index) => index ? shape.lineTo(x, z) : shape.moveTo(x, z));
    shape.closePath();
    const geom = new ExtrudeGeometry(shape, { depth: 0.045, bevelEnabled: false });
    geom.rotateX(Math.PI / 2);
    geometries.set(`wing:${color}`, geom);
    const mesh = new Mesh(geom, material(color));
    mesh.position.y = 0.09;
    mesh.castShadow = true;
    plane.add(mesh);
  }
  wing([[-1.5, 0.1], [-1.5, -0.2], [0, -0.55], [1.5, -0.2], [1.5, 0.1], [0.15, 0.35], [-0.15, 0.35]], '#f3d79c');
  wing([[-0.65, 0.72], [-0.65, 0.48], [0, 0.35], [0.65, 0.48], [0.65, 0.72]], '#efbe6e');
  for (const x of [-1.28, 1.28]) box(0.2, 0.025, 0.42, x, 0.105, -0.02, '#d16d43', plane);
  box(0.04, 0.43, 0.5, 0, 0.23, 0.57, '#e68e4c', plane).rotation.x = -0.2;

  const sling = new Group();
  const start = level.start || { x: 0, y: 2.7, z: 11 };
  sling.position.set(start.x, 0, start.z);
  scene.add(sling);
  box(1.35, 0.12, 1.1, 0, 0.06, 0, '#86613d', sling);
  rod([0, 0.1, 0], [0, 1.5, 0], 0.11, '#b17d46', sling);
  rod([0, 1.5, 0], [-0.66, 2.82, 0], 0.1, '#c49354', sling);
  rod([0, 1.5, 0], [0.66, 2.82, 0], 0.1, '#c49354', sling);
  const slingBands = [-0.66, 0.66].map(x => ({ x, mesh: cylinder(0.028, 0.028, 1, 0, 0, 0, '#d75e49', 6, sling) }));
  function updateSling(power = 0) {
    for (const band of slingBands) {
      const from = new Vector3(band.x, 2.82, 0);
      const to = new Vector3(0, start.y, power * 1.8);
      const direction = to.clone().sub(from);
      band.mesh.position.copy(from.add(to).multiplyScalar(0.5));
      band.mesh.scale.y = direction.length();
      band.mesh.quaternion.setFromUnitVectors(new Vector3(0, 1, 0), direction.normalize());
    }
  }
  updateSling();

  const trailVertices = new Float32Array(180);
  const trailGeometry = new BufferGeometry();
  trailGeometry.setAttribute('position', new Float32BufferAttribute(trailVertices, 3));
  geometries.set('trail', trailGeometry);
  const trail = new Line(trailGeometry, new LineBasicMaterial({ color: '#ffdeaf', transparent: true, opacity: 0.32, depthWrite: false }));
  trail.frustumCulled = false;
  scene.add(trail);
  function resetTrail(position) {
    for (let i = 0; i < 60; i++) {
      trailVertices[i * 3] = position.x;
      trailVertices[i * 3 + 1] = position.y;
      trailVertices[i * 3 + 2] = position.z;
    }
    trailGeometry.attributes.position.needsUpdate = true;
  }
  function updateTrail(position) {
    trailVertices.copyWithin(3, 0, 177);
    trailVertices[0] = position.x;
    trailVertices[1] = position.y;
    trailVertices[2] = position.z;
    trailGeometry.attributes.position.needsUpdate = true;
  }
  resetTrail(start);

  const starShape = new Shape();
  for (let i = 0; i < 10; i++) {
    const angle = i * Math.PI / 5 + Math.PI / 2;
    const radius = i % 2 ? 0.25 : 0.55;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    i ? starShape.lineTo(x, y) : starShape.moveTo(x, y);
  }
  starShape.closePath();
  const starGeometry = geometry('star', () => new ExtrudeGeometry(starShape, { depth: 0.13, bevelEnabled: false }));
  const starMaterial = new MeshStandardMaterial({ color: '#ffcc58', emissive: '#8c5309', emissiveIntensity: 0.42, roughness: 0.4, flatShading: true });
  const haloGeometry = geometry('star-halo', () => new TorusGeometry(0.72, 0.025, 4, 20));
  const haloMaterial = new MeshBasicMaterial({ color: '#ffe294', transparent: true, opacity: 0.75, depthWrite: false });
  for (const collectible of level.collectibles || level.stars || []) {
    const group = new Group();
    group.position.set(collectible.x, collectible.y, collectible.z);
    const star = new Mesh(starGeometry, starMaterial);
    star.position.z = -0.065;
    group.add(star, new Mesh(haloGeometry, haloMaterial));
    scene.add(group);
    collectibleMeshes.push({ mesh: group, position: collectible, collected: false });
  }
  let collected = 0;
  function collect(position) {
    let count = 0;
    for (const item of collectibleMeshes) {
      if (item.collected) continue;
      const dx = item.position.x - position.x;
      const dy = item.position.y - position.y;
      const dz = item.position.z - position.z;
      if (dx * dx + dy * dy + dz * dz <= 0.85 * 0.85) {
        item.collected = true;
        item.mesh.visible = false;
        count++;
      }
    }
    collected += count;
    return count;
  }
  function resetCollectibles() {
    collected = 0;
    for (const item of collectibleMeshes) {
      item.collected = false;
      item.mesh.visible = true;
    }
  }

  const warnings = { ceiling: false, distance: CEILING_HEIGHT - start.y, intensity: 0 };
  function updateCeiling(position) {
    const distance = Math.max(0, CEILING_HEIGHT - position.y);
    const strength = clamp((2.2 - distance) / 1.75, 0, 1);
    warnings.ceiling = distance < 2.2;
    warnings.distance = distance;
    warnings.intensity = strength;
    for (const panel of ceilingPanels) {
      const dx = Math.max(0, Math.abs(position.x - panel.room.x) - ROOM_WIDTH / 2);
      const dz = Math.max(0, Math.abs(position.z - panel.room.z) - ROOM_DEPTH / 2);
      const roomFade = clamp(1 - Math.hypot(dx, dz) / 9, 0, 1);
      const opacity = strength * roomFade;
      panel.background.visible = panel.stripes.visible = opacity > 0.002;
      panel.backgroundMaterial.opacity = opacity * 0.13;
      panel.stripesMaterial.opacity = opacity * 0.68;
    }
    return warnings.ceiling;
  }
  function cameraCrossesWall(wall, target) {
    let near = 0;
    let far = 1;
    const c = [camera.position.x, camera.position.y, camera.position.z];
    const end = [target.x, target.y, target.z];
    for (let axis = 0; axis < 3; axis++) {
      const delta = end[axis] - c[axis];
      const lo = wall.center[axis] - wall.size[axis] / 2 - 0.08;
      const hi = wall.center[axis] + wall.size[axis] / 2 + 0.08;
      if (Math.abs(delta) < 0.0001) {
        if (c[axis] < lo || c[axis] > hi) return false;
      } else {
        const t0 = (lo - c[axis]) / delta;
        const t1 = (hi - c[axis]) / delta;
        near = Math.max(near, Math.min(t0, t1));
        far = Math.min(far, Math.max(t0, t1));
        if (far < near) return false;
      }
    }
    return far > 0 && near < 0.96;
  }
  function sync() {
    physics.blocks.forEach((block, index) => {
      blocks[index].position.copy(block.body.position);
      blocks[index].quaternion.copy(block.body.quaternion);
    });
    for (const wall of wallMeshes) {
      const fade = cameraCrossesWall(wall, physics.plane.position);
      wall.mesh.material.opacity = fade ? 0.1 : 1;
      wall.mesh.material.depthWrite = !fade;
      wall.mesh.castShadow = !fade;
    }
    // Keep the sunlight shadow map focused on the room currently being flown.
    sun.target.position.set(physics.plane.position.x, 0, physics.plane.position.z);
    sun.position.set(physics.plane.position.x - 8, 18, physics.plane.position.z + 8);
    sun.target.updateMatrixWorld();
  }
  function wind(time) {
    for (const item of windMeshes) {
      const phase = (time * 0.22 + item.phase) % 1;
      item.mesh.position.y = 0.2 + phase * 8.2;
      item.mesh.rotation.z = time * 0.6 + item.phase * 6;
      item.mesh.material.opacity = Math.sin(phase * Math.PI) * 0.42;
    }
    for (let i = 0; i < collectibleMeshes.length; i++) {
      const item = collectibleMeshes[i];
      if (!item.collected) {
        item.mesh.rotation.y = time * 0.95 + i * 0.45;
        item.mesh.position.y = item.position.y + Math.sin(time * 1.8 + i * 1.7) * 0.09;
      }
    }
  }
  function resize() {
    const viewport = getViewport();
    const width = Math.max(1, viewport.width);
    const height = Math.max(1, viewport.height);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('gameviewportchange', resize);
  function dispose() {
    window.removeEventListener('gameviewportchange', resize);
    const allMaterials = new Set(materials.values());
    const allGeometries = new Set(geometries.values());
    scene.traverse(object => {
      if (object.geometry) allGeometries.add(object.geometry);
      if (object.material) for (const mat of Array.isArray(object.material) ? object.material : [object.material]) allMaterials.add(mat);
      if (object.shadow?.map) object.shadow.map.dispose();
    });
    for (const geom of allGeometries) geom.dispose();
    for (const mat of allMaterials) {
      for (const value of Object.values(mat)) if (value?.isTexture) value.dispose();
      mat.dispose();
    }
    scene.clear();
    renderer.dispose();
  }
  return {
    renderer, scene, camera, plane, sling, thermals: level.thermals || [],
    sync, wind, updateSling, resetTrail, updateTrail, updateCeiling, warnings,
    collect, get collected() { return collected; }, totalCollectibles: collectibleMeshes.length,
    resetCollectibles, dispose,
  };
}
