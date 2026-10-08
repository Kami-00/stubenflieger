export const VIEW_MODE_KEY = 'stubenflieger.camera.v1';

export function readViewMode() {
  try { return localStorage.getItem(VIEW_MODE_KEY) === 'fpv' ? 'fpv' : 'chase'; }
  catch { return 'chase'; }
}

export function saveViewMode(mode) {
  try { localStorage.setItem(VIEW_MODE_KEY, mode === 'fpv' ? 'fpv' : 'chase'); } catch {}
}

export function updateViewButton(button, mode) {
  button.textContent = mode === 'fpv' ? 'FPV' : 'Außen';
  button.setAttribute('aria-pressed', String(mode === 'fpv'));
  button.setAttribute('aria-label', mode === 'fpv' ? 'Zur Außenansicht wechseln (V)' : 'Zur FPV-Ansicht wechseln (V)');
  button.title = mode === 'fpv' ? 'FPV aktiv · V: Außenansicht' : 'Außenansicht aktiv · V: FPV';
}
