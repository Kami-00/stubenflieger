export const COSMETIC_EFFECTS = Object.freeze(['none', 'mint', 'spark', 'confetti']);

/** Null restores the model's original paper; custom colors are six-digit RGB only. */
export function normalizeAircraftColor(value) {
  if (value === null) return null;
  if (typeof value !== 'string' || !/^#[0-9a-f]{6}$/i.test(value)) throw new Error('Bitte wähle eine gültige Farbe im Format #RRGGBB.');
  return value.toLowerCase();
}

export function normalizeEffect(value) {
  if (!COSMETIC_EFFECTS.includes(value)) throw new Error('Dieser Flugeffekt ist nicht verfügbar.');
  return value;
}

/** The SVG preview and 3D model share the same subtle fold contrast. */
export function aircraftPartColor(part, customColor = null) {
  const color = normalizeAircraftColor(customColor);
  if (color === null) return '#' + part.color.toString(16).padStart(6, '0');
  const factor = { 'left-wing': 1, 'right-wing': .9, fuselage: .72, tail: 1.06 }[part.id] ?? 1;
  return '#' + [1, 3, 5].map(offset => Math.min(255, Math.round(parseInt(color.slice(offset, offset + 2), 16) * factor)).toString(16).padStart(2, '0')).join('');
}
