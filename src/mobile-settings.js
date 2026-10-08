// Fullscreen needs transient user activation; visualViewport distinguishes the
// visible area (including the keyboard) from the layout viewport and pinch zoom.
// https://fullscreen.spec.whatwg.org/
// https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport
// https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios
export const MOBILE_SETTINGS_KEY = 'stubenflieger.mobile.v1';
const defaults = () => ({ joystickSide: 'left', autoFullscreen: true });
const positive = (value, fallback = 1) => Number.isFinite(value) && value > 0 ? value : fallback;
const offset = value => Number.isFinite(value) ? Math.round(Math.max(0, value)) : 0;

export function normalizeMobileSettings(value) {
  return { joystickSide: value?.joystickSide === 'right' ? 'right' : 'left', autoFullscreen: typeof value?.autoFullscreen === 'boolean' ? value.autoFullscreen : true };
}

/** Width/height follow game rotation; centres/offsets remain screen coordinates. */
export function readMobileViewport(rotation = 0, win = globalThis.window) {
  const visual = win?.visualViewport, atNormalScale = visual && Math.abs((visual.scale ?? 1) - 1) < .01;
  const physicalWidth = Math.max(1, Math.round(atNormalScale ? positive(visual.width, positive(win?.innerWidth)) : positive(win?.innerWidth)));
  const physicalHeight = Math.max(1, Math.round(atNormalScale ? positive(visual.height, positive(win?.innerHeight)) : positive(win?.innerHeight)));
  const left = atNormalScale ? offset(visual.offsetLeft) : 0, top = atNormalScale ? offset(visual.offsetTop) : 0;
  const turned = Number.isFinite(rotation) && Math.abs(Math.round(rotation / 90)) % 2 === 1;
  return { width: turned ? physicalHeight : physicalWidth, height: turned ? physicalWidth : physicalHeight,
    left, top, centerX: left + physicalWidth / 2, centerY: top + physicalHeight / 2, physicalWidth, physicalHeight };
}

/** Shared by solo and multiplayer. Preferences never touch the game profile. */
export function createMobileSettings({
  root, sideSelect, autoFullscreenInput, fullscreenButton, statusNode,
  onSideChange = () => {}, onViewportChange = () => {}, getRotation = () => 0,
  window: win = globalThis.window, document: doc = win?.document ?? globalThis.document,
  storage,
} = {}) {
  root ??= doc?.documentElement;
  if (storage === undefined) { try { storage = win?.localStorage; } catch { storage = null; } }
  let settings = defaults();
  try { settings = normalizeMobileSettings(JSON.parse(storage?.getItem(MOBILE_SETTINGS_KEY) || 'null')); } catch {}
  const listeners = [], standaloneQuery = win?.matchMedia?.('(display-mode: standalone)');
  const coarseQuery = win?.matchMedia?.('(pointer: coarse)');
  const fullscreenTarget = doc?.documentElement;
  let viewport = readMobileViewport(getRotation(), win), queued = null, disposed = false;
  let autoSuppressed = false, errorMessage = '', storageFailed = false, pending = null;
  const fullscreen = () => Boolean(doc?.fullscreenElement || doc?.webkitFullscreenElement);
  const standalone = () => Boolean(standaloneQuery?.matches || win?.navigator?.standalone === true);
  const requestMethod = () => fullscreenTarget?.requestFullscreen || fullscreenTarget?.webkitRequestFullscreen;
  const exitMethod = () => doc?.exitFullscreen || doc?.webkitExitFullscreen;
  const supported = () => typeof requestMethod() === 'function' && doc?.fullscreenEnabled !== false && doc?.webkitFullscreenEnabled !== false;
  const touchDevice = () => Boolean(coarseQuery?.matches || win?.navigator?.maxTouchPoints > 0);
  let wasFullscreen = fullscreen();

  function listen(target, type, listener) {
    if (!target?.addEventListener) return;
    target.addEventListener(type, listener); listeners.push(() => target.removeEventListener(type, listener));
  }
  function displayStatus() {
    if (disposed) return;
    const active = fullscreen(), installed = standalone(), available = supported();
    if (fullscreenButton) {
      fullscreenButton.disabled = installed || (!active && !available);
      fullscreenButton.textContent = active ? 'Vollbild beenden' : installed ? 'Als App geöffnet' : 'Vollbild';
      fullscreenButton.setAttribute('aria-pressed', String(active || installed));
    }
    let message;
    if (installed) message = 'Als App geöffnet – ohne Browser-Adressleiste.';
    else if (active) message = 'Vollbild aktiv. Mit der Systemgeste oder Esc beenden.';
    else if (!available) message = 'Dieser Browser bietet kein Spiel-Vollbild. Ohne Adressleiste: Zum Home-Bildschirm hinzufügen; auf dem iPhone „Als Web-App öffnen“ wählen.';
    else if (errorMessage) message = errorMessage;
    else if (autoSuppressed) message = 'Vollbild beendet. Mit „Vollbild“ kannst du es wieder einschalten.';
    else if (settings.autoFullscreen && touchDevice()) message = 'Im Querformat startet Vollbild bei der nächsten Berührung, wenn der Browser es erlaubt.';
    else message = 'Vollbild lässt sich über die Schaltfläche einschalten.';
    if (storageFailed) message += ' Diese Einstellung konnte auf diesem Gerät nicht gespeichert werden.';
    if (statusNode) statusNode.textContent = message;
  }
  function persist() {
    try { if (!storage?.setItem) throw new Error('Storage unavailable'); storage.setItem(MOBILE_SETTINGS_KEY, JSON.stringify(settings)); storageFailed = false; }
    catch { storageFailed = true; }
  }
  function applySettings(notifySide = false) {
    if (root?.dataset) root.dataset.joystickSide = settings.joystickSide;
    if (sideSelect) sideSelect.value = settings.joystickSide;
    if (autoFullscreenInput) autoFullscreenInput.checked = settings.autoFullscreen;
    if (notifySide) onSideChange(settings.joystickSide);
    displayStatus();
  }
  function setJoystickSide(side) {
    const next = side === 'right' ? 'right' : 'left', changed = settings.joystickSide !== next;
    settings = { ...settings, joystickSide: next }; persist(); applySettings(changed);
  }
  function setAutoFullscreen(enabled) {
    settings = { ...settings, autoFullscreen: enabled === true };
    if (enabled === true) { autoSuppressed = false; errorMessage = ''; }
    persist(); applySettings();
  }
  function getViewport() {
    const scale = win?.visualViewport?.scale ?? 1;
    return Math.abs(scale - 1) < .01 ? readMobileViewport(getRotation(), win) : { ...viewport };
  }
  function refreshViewport() {
    if (disposed) return { ...viewport };
    const next = getViewport();
    if (Object.keys(next).some(key => next[key] !== viewport[key])) { viewport = next; onViewportChange({ ...viewport }); }
    displayStatus(); return { ...viewport };
  }
  function queueViewport() {
    if (disposed || queued !== null) return;
    const schedule = win?.requestAnimationFrame?.bind(win) || (callback => setTimeout(callback, 0));
    queued = schedule(() => { queued = null; refreshViewport(); });
  }
  function fullscreenChanged() {
    const active = fullscreen();
    if (wasFullscreen && !active) autoSuppressed = true;
    wasFullscreen = active;
    if (active) errorMessage = '';
    displayStatus(); queueViewport();
  }
  function fullscreenFailed() {
    autoSuppressed = true;
    errorMessage = 'Vollbild ist gerade nicht möglich. Versuche die Vollbild-Schaltfläche oder starte über den Home-Bildschirm.';
    displayStatus();
  }
  function requestFullscreen() {
    if (disposed) return Promise.resolve(false);
    if (fullscreen() || standalone()) { displayStatus(); return Promise.resolve(true); }
    if (pending) return pending;
    if (!supported()) { displayStatus(); return Promise.resolve(false); }
    autoSuppressed = false; errorMessage = '';
    // Invoke before awaiting anything so the current trusted gesture is retained.
    let request;
    try { request = requestMethod().call(fullscreenTarget, { navigationUI: 'hide' }); }
    catch (error) { request = Promise.reject(error); }
    pending = Promise.resolve(request).then(() => { fullscreenChanged(); return fullscreen() || standalone(); }, () => { fullscreenFailed(); return false; }).finally(() => { pending = null; });
    return pending;
  }
  function hasActivation(event) { return event?.isTrusted === true || win?.navigator?.userActivation?.isActive === true; }
  function tryAutoFullscreen(event) {
    const size = getViewport();
    if (disposed || !settings.autoFullscreen || autoSuppressed || fullscreen() || standalone() || !supported() || !touchDevice()
      || size.width <= size.height || !hasActivation(event) || doc?.hidden) return Promise.resolve(false);
    return requestFullscreen();
  }
  function userAction(event) {
    if (event.type === 'keydown' && (event.code === 'Escape' || event.code === 'F11')) {
      if (fullscreen()) autoSuppressed = true;
      return;
    }
    if (event.repeat || event.ctrlKey || event.altKey || event.metaKey) return;
    if (fullscreenButton && (event.target === fullscreenButton || fullscreenButton.contains?.(event.target))) return;
    if (event.target?.closest?.('input,select,textarea,[contenteditable="true"],a[href]')) return;
    void tryAutoFullscreen(event);
  }
  function buttonAction() {
    if (!fullscreen()) { void requestFullscreen(); return; }
    autoSuppressed = true;
    let request;
    try { request = exitMethod()?.call(doc); }
    catch (error) { request = Promise.reject(error); }
    void Promise.resolve(request).then(fullscreenChanged, () => { errorMessage = 'Vollbild bitte mit der Systemgeste oder Esc beenden.'; displayStatus(); });
  }
  function storageChanged(event) {
    if (event.storageArea && event.storageArea !== storage) return;
    if (event.key !== MOBILE_SETTINGS_KEY && event.key !== null) return;
    let next = defaults(); try { next = normalizeMobileSettings(JSON.parse(event.newValue || 'null')); } catch {}
    const changed = next.joystickSide !== settings.joystickSide; settings = next; applySettings(changed);
  }
  listen(sideSelect, 'change', () => setJoystickSide(sideSelect.value));
  listen(autoFullscreenInput, 'change', event => { setAutoFullscreen(autoFullscreenInput.checked); if (settings.autoFullscreen) void tryAutoFullscreen(event); });
  listen(fullscreenButton, 'click', buttonAction);
  listen(doc, 'pointerup', userAction); listen(doc, 'keydown', userAction);
  listen(doc, 'fullscreenchange', fullscreenChanged); listen(doc, 'webkitfullscreenchange', fullscreenChanged);
  listen(doc, 'fullscreenerror', fullscreenFailed); listen(doc, 'webkitfullscreenerror', fullscreenFailed);
  listen(win, 'resize', queueViewport); listen(win, 'orientationchange', queueViewport);
  listen(win?.visualViewport, 'resize', queueViewport); listen(win?.visualViewport, 'scroll', queueViewport);
  listen(standaloneQuery, 'change', () => { displayStatus(); queueViewport(); });
  listen(coarseQuery, 'change', displayStatus); listen(win, 'storage', storageChanged);
  applySettings(true);
  function dispose() {
    if (disposed) return; disposed = true; listeners.forEach(remove => remove());
    if (queued !== null) { if (win?.cancelAnimationFrame) win.cancelAnimationFrame(queued); else clearTimeout(queued); queued = null; }
  }
  return { get settings() { return { ...settings }; }, getViewport, refreshViewport, requestFullscreen, tryAutoFullscreen,
    setJoystickSide, setAutoFullscreen, dispose };
}
