import test from 'node:test';
import assert from 'node:assert/strict';
import { aircraftPartColor, COSMETIC_EFFECTS, normalizeAircraftColor, normalizeEffect } from '../src/cosmetics.js';

test('appearance normalization accepts only null or exact RGB hex and the four supported effects', () => {
  assert.equal(normalizeAircraftColor(null), null); assert.equal(normalizeAircraftColor('#ABCdef'), '#abcdef');
  for (const value of [undefined, '', 'red', '#fff', '#12345678', ' #123456', '#123456 ', '#gg0000', 1, {}, false]) assert.throws(() => normalizeAircraftColor(value));
  for (const effect of COSMETIC_EFFECTS) assert.equal(normalizeEffect(effect), effect);
  for (const effect of ['unknown', 'MINT', null, undefined, 123]) assert.throws(() => normalizeEffect(effect));
});

test('preview and model colors preserve original paper or apply bounded fold shading to custom RGB', () => {
  assert.equal(aircraftPartColor({ id: 'fuselage', color: 0xffdf94 }), '#ffdf94');
  assert.equal(aircraftPartColor({ id: 'left-wing', color: 0 }, '#808080'), '#808080');
  assert.equal(aircraftPartColor({ id: 'right-wing', color: 0 }, '#808080'), '#737373');
  assert.equal(aircraftPartColor({ id: 'fuselage', color: 0 }, '#808080'), '#5c5c5c');
  assert.equal(aircraftPartColor({ id: 'tail', color: 0 }, '#ffffff'), '#ffffff');
  assert.equal(aircraftPartColor({ id: 'tail', color: 0 }, '#000000'), '#000000');
});
