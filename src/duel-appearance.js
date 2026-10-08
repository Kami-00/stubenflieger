import { CATALOG, PROFILE_KEY, createProgression } from './progression.js';
import { normalizeAircraftColor, normalizeEffect } from './cosmetics.js';

const KEY = 'stubenflieger.duel-appearance.v1';
const same = (a, b) => a?.color === b?.color && a?.effect === b?.effect;

export function createDuelAppearancePicker(onApply) {
  const $ = id => document.getElementById(id), progression = createProgression();
  const panel = $('duel-appearance');
  let profile = progression.getProfile(), draft, saved, dirty = false, pending = false, signature = '';
  const canColor = () => profile.owned.includes('upgrade:color');
  function allowed(value) {
    let color = null, effect = 'none';
    try { color = normalizeAircraftColor(value?.color ?? null); effect = normalizeEffect(value?.effect ?? 'none'); } catch {}
    return { color: canColor() ? color : null, effect: profile.owned.includes(`effect:${effect}`) ? effect : 'none' };
  }
  try { saved = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch {}
  draft = allowed(saved || profile.equipped); saved = { ...draft };
  function fields() {
    $('duel-custom-color').checked = Boolean(draft.color);
    $('duel-color').value = draft.color || '#fff1cc';
    $('duel-color-value').textContent = draft.color || 'Teamfarbe';
    $('duel-effect').value = draft.effect;
    $('duel-color-preview').style.backgroundColor = draft.color || '#fff1cc';
  }
  function refresh() {
    try { profile = progression.refresh(); } catch {}
    const nextSignature = profile.owned.join('|');
    if (signature !== nextSignature) {
      signature = nextSignature;
      $('duel-effect').replaceChildren();
      for (const item of CATALOG.filter(item => item.category === 'effects' && profile.owned.includes(item.id))) {
        const option = document.createElement('option'); option.value = item.id.split(':')[1]; option.textContent = item.name;
        $('duel-effect').append(option);
      }
      draft = allowed(draft); fields();
    }
  }
  function select() {
    draft = allowed({ color: $('duel-custom-color').checked ? $('duel-color').value : null, effect: $('duel-effect').value });
    dirty = !same(draft, saved); fields(); render();
  }
  let phase = 'entry', connected = false, busy = false;
  function render(nextPhase = phase, isConnected = connected, isBusy = busy) {
    phase = nextPhase; connected = isConnected; busy = isBusy;
    const target = $(phase === 'lobby' ? 'lobby-appearance' : 'entry-appearance');
    if (panel.parentElement !== target) target.append(panel);
    const disabled = busy || pending || !['entry', 'lobby'].includes(phase) || (phase === 'lobby' && !connected);
    $('duel-custom-color').disabled = disabled || !canColor();
    $('duel-color').disabled = disabled || !canColor() || !$('duel-custom-color').checked;
    $('duel-effect').disabled = disabled;
    $('apply-appearance').hidden = phase !== 'lobby';
    $('apply-appearance').disabled = disabled || !dirty;
    $('appearance-status').textContent = pending ? 'Aussehen wird übernommen …' : !canColor()
      ? 'Eigene Farben: Farbwähler für 2.000 Punkte im Soloshop freischalten. Gekaufte Effekte sind hier auswählbar.'
      : dirty && phase === 'lobby' ? 'Übernimm deine Auswahl, damit alle sie sehen.' : 'Deine Farbe und dein Effekt sind für alle Mitspieler sichtbar.';
  }
  function confirm(value) {
    draft = allowed(value); saved = { ...draft }; dirty = pending = false;
    try { localStorage.setItem(KEY, JSON.stringify(draft)); } catch {}
    fields(); render();
  }
  $('duel-custom-color').addEventListener('change', select);
  $('duel-color').addEventListener('input', select);
  $('duel-effect').addEventListener('change', select);
  $('apply-appearance').onclick = () => {
    if (phase !== 'lobby' || !connected || pending) return;
    refresh(); const next = allowed(draft);
    if (onApply(next)) { pending = true; render(); }
  };
  refresh(); fields(); render();
  window.addEventListener('storage', event => { if (event.key === PROFILE_KEY || event.key === null) { refresh(); render(); } });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) { refresh(); render(); } });
  return {
    render, refresh, confirm,
    current() { refresh(); return allowed(draft); },
    matches: value => same(allowed(value), draft),
    reject() { pending = false; render(); },
  };
}
