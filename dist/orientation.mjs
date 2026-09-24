// Earth-up projected into the screen plane, independent of compass heading.
export function levelAngle(beta, gamma, screenAngle = 0) {
  const b = beta * Math.PI / 180, g = gamma * Math.PI / 180;
  const x = -Math.cos(b) * Math.sin(g), y = Math.sin(b);
  if (Math.hypot(x, y) < 0.12) return null;
  return Math.atan2(x, y) * 180 / Math.PI - screenAngle;
}
export function shortestDelta(from, to) { return ((to - from + 540) % 360 + 360) % 360 - 180; }
