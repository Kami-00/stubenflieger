import test from 'node:test';
import assert from 'node:assert/strict';
import { createMobileSettings, readMobileViewport, normalizeMobileSettings, MOBILE_SETTINGS_KEY } from '../src/mobile-settings.js';

function node(tag = 'div') {
  return Object.assign(new EventTarget(), { tagName: tag.toUpperCase(), dataset: {}, attributes: {}, value: '', checked: false, disabled: false, textContent: '',
    setAttribute(name, value) { this.attributes[name] = value; },
    contains(target) { return target === this; },
    closest() { return ['input', 'select', 'textarea', 'a'].includes(tag) ? this : null; } });
}
const emit = (target, type, properties = {}) => {
  const event = new Event(type, { cancelable: true });
  Object.defineProperties(event, Object.fromEntries(Object.entries(properties).map(([key, value]) => [key, { value, configurable: true }])));
  target.dispatchEvent(event); return event;
};
const memory = () => {
  const entries = new Map(); return { entries, getItem: key => entries.get(key) ?? null, setItem: (key, value) => entries.set(key, value) };
};
function setup(t, { store = memory(), touch = true, supported = true, standalone = false, legacyStandalone = false, initial = null, fail = null, rotation = 0 } = {}) {
  if (initial !== null) store.setItem(MOBILE_SETTINGS_KEY, typeof initial === 'string' ? initial : JSON.stringify(initial));
  const document = new EventTarget(), window = new EventTarget(), root = node(), sideSelect = node('select'), autoFullscreenInput = node('input'), fullscreenButton = node('button'), statusNode = node();
  const queries = new Map(), frames = new Map(), requests = [], sides = [], viewports = [];
  let frameSerial = 0, failures = fail, exits = 0;
  Object.assign(document, { documentElement: root, fullscreenElement: null, fullscreenEnabled: supported, hidden: false });
  Object.assign(window, { document, innerWidth: 844, innerHeight: 390, localStorage: store,
    navigator: { maxTouchPoints: touch ? 5 : 0, standalone: legacyStandalone, userActivation: { isActive: true } },
    visualViewport: Object.assign(new EventTarget(), { width: 844, height: 390, scale: 1, offsetLeft: 0, offsetTop: 0 }),
    matchMedia(query) { if (!queries.has(query)) queries.set(query, Object.assign(new EventTarget(), { matches: query.includes('standalone') ? standalone : query.includes('coarse') ? touch : false })); return queries.get(query); },
    requestAnimationFrame(callback) { frames.set(++frameSerial, callback); return frameSerial; }, cancelAnimationFrame(id) { frames.delete(id); } });
  if (supported) root.requestFullscreen = function (options) {
    requests.push({ target: this, options });
    if (failures === 'throw') throw new Error('NotAllowedError');
    if (failures === 'reject') return Promise.reject(new Error('NotAllowedError'));
    document.fullscreenElement = root; emit(document, 'fullscreenchange'); return Promise.resolve();
  };
  document.exitFullscreen = () => { exits++; document.fullscreenElement = null; emit(document, 'fullscreenchange'); return Promise.resolve(); };
  const controller = createMobileSettings({ window, document, root, storage: store, sideSelect, autoFullscreenInput, fullscreenButton, statusNode,
    onSideChange: side => sides.push(side), onViewportChange: viewport => viewports.push(viewport), getRotation: () => rotation });
  t.after(() => controller.dispose());
  return { window, document, root, sideSelect, autoFullscreenInput, fullscreenButton, statusNode, store, controller, requests, sides, viewports, queries,
    flush() { const pending = [...frames.values()]; frames.clear(); pending.forEach(callback => callback()); },
    get queued() { return frames.size; }, get exits() { return exits; },
    failure(value) { failures = value; }, rotate(value) { rotation = value; },
    action(target = root, type = 'pointerup', extra = {}) { return emit(document, type, { target, ...extra }); },
    exit() { document.fullscreenElement = null; emit(document, 'fullscreenchange'); } };
}
const settled = async () => { await Promise.resolve(); await Promise.resolve(); await Promise.resolve(); };

test('mobile preferences share a dedicated key, migrate safely and never alter the profile', t => {
  assert.deepEqual(normalizeMobileSettings({ joystickSide: 'bad', autoFullscreen: 'false' }), { joystickSide: 'left', autoFullscreen: true });
  const store = memory(); store.setItem('stubenflieger.profile.v1', 'profile-unchanged');
  const first = setup(t, { store, initial: '{broken' });
  assert.deepEqual(first.controller.settings, { joystickSide: 'left', autoFullscreen: true });
  assert.deepEqual(first.sides, ['left']);
  first.sideSelect.value = 'right'; emit(first.sideSelect, 'change');
  first.autoFullscreenInput.checked = false; emit(first.autoFullscreenInput, 'change');
  const second = setup(t, { store });
  assert.deepEqual(second.controller.settings, { joystickSide: 'right', autoFullscreen: false });
  assert.equal(second.root.dataset.joystickSide, 'right'); assert.equal(second.sideSelect.value, 'right'); assert.equal(second.autoFullscreenInput.checked, false);
  assert.equal(store.getItem('stubenflieger.profile.v1'), 'profile-unchanged');
  second.controller.settings.joystickSide = 'left'; assert.equal(second.controller.settings.joystickSide, 'right');
});

test('blocked storage keeps controls usable and reports the persistence limitation', t => {
  const store = { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); } }, h = setup(t, { store });
  h.controller.setJoystickSide('right'); h.controller.setAutoFullscreen(false);
  assert.equal(h.root.dataset.joystickSide, 'right'); assert.equal(h.controller.settings.autoFullscreen, false);
  assert.match(h.statusNode.textContent, /nicht gespeichert/);
});

test('other tabs update side/preferences but unrelated storage events are ignored', t => {
  const h = setup(t);
  emit(h.window, 'storage', { key: MOBILE_SETTINGS_KEY, newValue: JSON.stringify({ joystickSide: 'right', autoFullscreen: false }), storageArea: h.store });
  assert.deepEqual(h.sides, ['left', 'right']); assert.equal(h.autoFullscreenInput.checked, false);
  emit(h.window, 'storage', { key: 'profile', newValue: '{}' });
  emit(h.window, 'storage', { key: MOBILE_SETTINGS_KEY, newValue: '{}', storageArea: memory() });
  assert.equal(h.controller.settings.joystickSide, 'right');
});

test('auto fullscreen waits for a landscape touch gesture; desktop and editing are unaffected', async t => {
  const h = setup(t); h.window.navigator.userActivation.isActive = false;
  h.action(); assert.equal(h.requests.length, 0, 'synthetic event without activation');
  h.window.navigator.userActivation.isActive = true;
  h.window.visualViewport.width = 390; h.window.visualViewport.height = 700;
  h.action(); assert.equal(h.requests.length, 0, 'portrait');
  h.window.visualViewport.width = 844; h.window.visualViewport.height = 390;
  emit(h.window.visualViewport, 'resize'); h.flush(); assert.equal(h.requests.length, 0, 'resize is not a gesture');
  h.action(node('input')); h.action(h.sideSelect); h.action(h.fullscreenButton); assert.equal(h.requests.length, 0);
  const action = h.action(); await settled(); assert.equal(action.defaultPrevented, false);
  assert.equal(h.requests.length, 1); assert.equal(h.requests[0].target, h.document.documentElement); assert.deepEqual(h.requests[0].options, { navigationUI: 'hide' });
  assert.equal(h.fullscreenButton.attributes['aria-pressed'], 'true'); assert.match(h.statusNode.textContent, /Vollbild aktiv/);
  const desktop = setup(t, { touch: false }); desktop.action(); await settled(); assert.equal(desktop.requests.length, 0);
  emit(desktop.fullscreenButton, 'click'); await settled(); assert.equal(desktop.requests.length, 1, 'explicit fullscreen remains available on desktop');
});

test('Escape/system exit suppresses reentry until explicit fullscreen or opt-in', async t => {
  const h = setup(t); h.action(); await settled();
  h.action(h.root, 'keydown', { code: 'Escape' }); h.exit();
  for (let i = 0; i < 3; i++) { h.action(); emit(h.window, 'resize'); h.flush(); }
  await settled(); assert.equal(h.requests.length, 1); assert.match(h.statusNode.textContent, /Vollbild beendet/);
  emit(h.fullscreenButton, 'click'); await settled(); assert.equal(h.requests.length, 2);
  emit(h.fullscreenButton, 'click'); await settled(); assert.equal(h.exits, 1); h.action(); await settled(); assert.equal(h.requests.length, 2);
  h.controller.setAutoFullscreen(true); h.action(); await settled(); assert.equal(h.requests.length, 3);
});

test('request rejection and synchronous errors are contained without automatic retry storms', async t => {
  for (const fail of ['throw', 'reject']) {
    const h = setup(t, { fail });
    assert.equal(await h.controller.tryAutoFullscreen(), false);
    assert.match(h.statusNode.textContent, /gerade nicht möglich/);
    h.action(); h.action(); await settled(); assert.equal(h.requests.length, 1);
    h.failure(null); assert.equal(await h.controller.requestFullscreen(), true); assert.equal(h.requests.length, 2);
  }
});

test('unavailable fullscreen and Home-Screen modes give honest status without requests', async t => {
  const missing = setup(t, { supported: false }); missing.action(); assert.equal(await missing.controller.requestFullscreen(), false);
  assert.equal(missing.requests.length, 0); assert.equal(missing.fullscreenButton.disabled, true); assert.match(missing.statusNode.textContent, /Home-Bildschirm/); assert.match(missing.statusNode.textContent, /iPhone/);
  for (const config of [{ standalone: true }, { legacyStandalone: true }]) {
    const h = setup(t, config); h.action(); assert.equal(await h.controller.requestFullscreen(), true);
    assert.equal(h.requests.length, 0); assert.equal(h.fullscreenButton.disabled, true); assert.match(h.statusNode.textContent, /Als App geöffnet/);
  }
});

test('visual viewport follows browser chrome and keyboard while all rotations retain screen centre', t => {
  const h = setup(t); Object.assign(h.window.visualViewport, { width: 800, height: 230, offsetLeft: 7, offsetTop: 29 });
  for (const rotation of [0, 90, 180, 270]) {
    const viewport = readMobileViewport(rotation, h.window);
    assert.deepEqual([viewport.width, viewport.height], rotation % 180 ? [230, 800] : [800, 230]);
    assert.deepEqual([viewport.centerX, viewport.centerY], [407, 144]);
  }
  emit(h.window, 'resize'); emit(h.window.visualViewport, 'resize'); emit(h.window.visualViewport, 'scroll');
  assert.equal(h.queued, 1); h.flush(); assert.equal(h.viewports.length, 1);
  emit(h.window.visualViewport, 'resize'); h.flush(); assert.equal(h.viewports.length, 1, 'unchanged event must not resize/recreate a renderer');
  h.rotate(90); h.controller.refreshViewport(); assert.equal(h.viewports.length, 2); assert.equal(h.controller.getViewport().width, 230);
});

test('pinch zoom neither shrinks/recentres the game nor starts a continuous resize loop', t => {
  const h = setup(t), before = h.controller.getViewport();
  Object.assign(h.window.visualViewport, { scale: 2, width: 422, height: 195, offsetLeft: 70, offsetTop: 20 });
  for (let i = 0; i < 3; i++) { emit(h.window.visualViewport, 'resize'); emit(h.window.visualViewport, 'scroll'); h.flush(); }
  assert.deepEqual(h.controller.getViewport(), before); assert.equal(h.viewports.length, 0); assert.equal(h.queued, 0);
  assert.deepEqual([readMobileViewport(0, h.window).width, readMobileViewport(0, h.window).height], [844, 390]);
  Object.assign(h.window.visualViewport, { scale: 1, width: 844, height: 300, offsetLeft: 0, offsetTop: 0 });
  emit(h.window.visualViewport, 'resize'); h.flush(); assert.equal(h.viewports.length, 1); assert.equal(h.controller.getViewport().height, 300);
});

test('disposing removes listeners and cancels a pending viewport update', async t => {
  const h = setup(t); h.window.visualViewport.height = 200; emit(h.window, 'resize'); assert.equal(h.queued, 1);
  h.controller.dispose(); h.controller.dispose(); assert.equal(h.queued, 0);
  h.sideSelect.value = 'right'; emit(h.sideSelect, 'change'); h.action(); emit(h.fullscreenButton, 'click'); emit(h.window, 'resize'); h.flush(); await settled();
  assert.equal(h.controller.settings.joystickSide, 'left'); assert.equal(h.requests.length, 0); assert.equal(h.viewports.length, 0);
});
