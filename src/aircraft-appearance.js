import { Color } from 'three';
import { aircraftPartColor } from './cosmetics.js';

/** Recolor in place: appearance can never change the shared physical geometry. */
export function applyAircraftColor(model, customColor = null, fallbackTint = null) {
  const tint = fallbackTint ? new Color(fallbackTint) : null;
  model.traverse(mesh => {
    if (!mesh.isMesh || mesh.userData.paperColor === undefined) return;
    mesh.material.color.set(aircraftPartColor({ id: mesh.name, color: mesh.userData.paperColor }, customColor));
    if (customColor === null && tint) mesh.material.color.lerp(tint, .6);
  });
}
