// One mesh description drives the paper model, collision hulls and collection.
// Coordinates are metres: the nose points along -Z, wings along X, up is +Y.
export const AIRCRAFT_FORMS = ['classic', 'glider', 'dart', 'stunt'];
export const AIRCRAFT_SIZE_MIN = 0.55;
export const AIRCRAFT_SIZE_MAX = 1.5;
// Shop percentages use a compact indoor paper model as their reference.
export const AIRCRAFT_BASE_SCALE = 0.78;

const DESIGNS = {
  classic: { span: 0.55, length: 0.42, tail: 0.15, speed: 1, turn: 1, sink: 1, color: 0xfff1cc },
  glider: { span: 0.65, length: 0.41, tail: 0.19, speed: 0.88, turn: 0.82, sink: 0.76, color: 0xffe6ae },
  dart: { span: 0.43, length: 0.49, tail: 0.14, speed: 1.2, turn: 0.8, sink: 1.18, color: 0xe0edff },
  stunt: { span: 0.49, length: 0.35, tail: 0.17, speed: 0.95, turn: 1.24, sink: 1.12, color: 0xffd4ca },
};

function outwardFaces(vertices, faces) {
  const centre = [0, 1, 2].map(axis => vertices.reduce((sum, p) => sum + p[axis], 0) / vertices.length);
  return faces.map(face => {
    const [a, b, c] = face.map(i => vertices[i]);
    const u = b.map((v, i) => v - a[i]), v = c.map((n, i) => n - a[i]);
    const normal = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
    const sign = normal.reduce((sum, n, axis) => sum + n * (a[axis] - centre[axis]), 0);
    return sign < 0 ? [...face].reverse() : face;
  });
}

function prism(id, polygon, thickness, colour, size, rise = 0, offsetY = 0) {
  const n = polygon.length;
  const vertices = [-1, 1].flatMap(side => polygon.map(([x, z]) =>
    [x * size, (offsetY + Math.abs(x) * rise + side * thickness / 2) * size, z * size]));
  const faces = [Array.from({ length: n }, (_, i) => i), Array.from({ length: n }, (_, i) => i + n)];
  for (let i = 0; i < n; i++) faces.push([i, (i + 1) % n, (i + 1) % n + n, i + n]);
  return { id, kind: 'convex', vertices, faces: outwardFaces(vertices, faces), color: colour };
}

function ellipse(width, depth, centreZ, segments = 20) {
  return Array.from({ length: segments }, (_, i) => {
    const angle = i * Math.PI * 2 / segments;
    return [width / 2 * Math.cos(angle), centreZ + depth / 2 * Math.sin(angle)];
  });
}

function planform(form, d) {
  const nose = -d.length / 2, rear = d.length / 2, halfSpan = d.span / 2;
  const pointedBody = [[0, nose], [0.024, rear - 0.008], [-0.024, rear - 0.008]];
  const pointedTail = [[0, rear - 0.078], [d.tail / 2, rear], [-d.tail / 2, rear]];
  if (form === 'dart') return {
    wing: [[0, nose + 0.015], [halfSpan, rear - 0.025], [0, rear - 0.025]],
    fuselage: pointedBody,
    tail: pointedTail,
  };
  if (form === 'glider') return {
    // Two convex half-ellipses meet at the centreline. Their gently curved
    // outlines are the visible outlines and the actual collision outlines.
    wing: Array.from({ length: 17 }, (_, i) => {
      const angle = -Math.PI / 2 + i * Math.PI / 16;
      return [i === 0 || i === 16 ? 0 : halfSpan * Math.cos(angle), -0.015 + 0.105 * Math.sin(angle)];
    }),
    fuselage: ellipse(0.056, d.length, 0),
    tail: ellipse(d.tail, 0.08, rear - 0.04),
  };
  if (form === 'stunt') return {
    wing: [[0, -0.065], [halfSpan, -0.065], [halfSpan, 0.045], [0, 0.045]],
    fuselage: [[0, nose], [0.028, nose + 0.04], [0.028, rear - 0.008], [-0.028, rear - 0.008], [-0.028, nose + 0.04]],
    tail: [[-d.tail / 2, rear - 0.064], [d.tail / 2, rear - 0.064], [d.tail / 2, rear], [-d.tail / 2, rear]],
  };
  return {
    // A clipped delta: the outside of each wing is a straight fore/aft edge,
    // visibly different from the single sharp wing corner of the dart.
    wing: [[0, nose + 0.025], [halfSpan, 0.035], [halfSpan, 0.145], [0, rear - 0.035]],
    fuselage: pointedBody,
    tail: [[-d.tail / 2, rear - 0.05], [d.tail / 2, rear - 0.05], [d.tail * 0.38, rear], [-d.tail * 0.38, rear]],
  };
}

export function getAircraftDefinition(form = 'classic', size = 1) {
  form = AIRCRAFT_FORMS.includes(form) ? form : 'classic';
  size = Number.isFinite(Number(size)) ? Math.max(AIRCRAFT_SIZE_MIN, Math.min(AIRCRAFT_SIZE_MAX, Number(size))) : 1;
  const d = DESIGNS[form], outline = planform(form, d);
  const modelScale = size * AIRCRAFT_BASE_SCALE;
  const parts = [
    prism('left-wing', outline.wing.map(([x, z]) => [-x, z]), 0.008, d.color, modelScale, 0.045),
    prism('right-wing', outline.wing, 0.008, d.color, modelScale, 0.045),
    prism('fuselage', outline.fuselage, 0.044, 0xffdf94, modelScale, 0, -0.014),
    prism('tail', outline.tail, 0.008, d.color, modelScale, 0, 0.011),
  ];
  return {
    form, size, span: d.span * modelScale, length: d.length * modelScale, parts,
    boundingRadius: Math.max(...parts.flatMap(part => part.vertices.map(p => Math.hypot(...p)))),
  };
}

// Larger wings trade agility and gap clearance for reduced energy/height loss.
// All forms remain usable with their standard size; no purchased form is required.
export function flightTuning(form = 'classic', size = 1) {
  const definition = getAircraftDefinition(form, size), d = DESIGNS[definition.form], scale = definition.size;
  return {
    speed: 1.65 * d.speed * (0.94 + 0.06 * scale),
    turnRate: 1.8 * d.turn / Math.pow(scale, 0.65),
    pitchRate: 0.8 / Math.pow(scale, 0.35),
    sinkRate: 0.095 * d.sink / Math.pow(scale, 0.6),
    energyLoss: 0.035 * d.sink / Math.pow(scale, 0.55),
    glideRatio: (1.65 / 0.095) * d.speed * (0.94 + 0.06 * scale) / d.sink * Math.pow(scale, 0.6),
  };
}
