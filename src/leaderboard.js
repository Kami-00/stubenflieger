const $ = id => document.getElementById(id);
async function api(path, options = {}) {
  const response = await fetch(path, { ...options, signal: AbortSignal.timeout(10000) });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || 'Die Bestenliste ist gerade nicht erreichbar.');
  return result;
}
export function createLeaderboard() {
  let ticket = null, result = null, refreshId = 0;
  try { $('pilot-name').value = localStorage.getItem('stubenflieger.pilot') || ''; } catch {}
  function clearResult() {
    ticket = result = null;
    $('save-score').disabled = true; $('pilot-name').disabled = true;
    $('score-status').textContent = '';
  }
  function beginRun() {
    ticket = api('/api/house-runs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ scoreVersion: 2 }) }).then(data => data.run).catch(() => null);
    result = null;
  }
  function setResult({ blocks, stars, starIds, seconds, roomIds, complete, practice }) {
    if (practice) { clearResult(); return; }
    result = { blocks, stars, starIds: [...starIds], flightMs: Math.floor(seconds * 1000), roomIds: [...roomIds], complete: Boolean(complete), ticket, saved: false };
    $('save-score').disabled = seconds < .5;
    $('save-score').textContent = 'Eintragen'; $('pilot-name').disabled = false;
    $('score-status').textContent = seconds < .5 ? 'Dieser Flug war zu kurz für die Bestenliste.' : 'Trage deinen Flug mit einem frei gewählten Pilotnamen ein.';
  }
  async function refresh() {
    const id = ++refreshId;
    const focus = document.activeElement;
    if (!$('leaderboard').hidden && (focus === $('refresh-leaderboard') || $('ranking-table').contains(focus))) $('close-leaderboard').focus();
    $('leaderboard-status').textContent = 'Bestenliste wird geladen …'; $('ranking-table').hidden = true; $('refresh-leaderboard').disabled = true;
    try {
      const { entries } = await api('/api/house-leaderboard?scoreVersion=2');
      if (id !== refreshId) return;
      $('ranking-body').replaceChildren();
      entries.forEach((entry, index) => {
        const row = document.createElement('tr');
        for (const text of [index + 1, entry.name, `${entry.rooms} Räume · ${entry.stars} ★ · ${(entry.flightMs / 1000).toFixed(1)} s${entry.complete ? ' · Haus geschafft' : ''}`, entry.points.toLocaleString('de-DE')]) {
          const cell = document.createElement('td'); cell.textContent = String(text); row.append(cell);
        }
        $('ranking-body').append(row);
      });
      $('ranking-table').hidden = entries.length === 0;
      $('leaderboard-status').textContent = entries.length ? 'Die 20 besten Hausflüge · gewichtete Sternpunkte · ohne Erstfund-Bonus' : 'Noch keine Hausflüge mit der neuen Sternwertung eingetragen. Fliege die erste Bestmarke!';
    } catch { if (id === refreshId) $('leaderboard-status').textContent = 'Die Bestenliste konnte nicht geladen werden. Versuche es gleich noch einmal.'; }
    finally { if (id === refreshId) $('refresh-leaderboard').disabled = false; }
  }
  $('refresh-leaderboard').onclick = () => void refresh();
  $('score-form').addEventListener('submit', async event => {
    event.preventDefault();
    if (!result || result.saved) return;
    const active = result, name = $('pilot-name').value.trim();
    if (document.activeElement === $('save-score')) $('pilot-name').focus();
    $('save-score').disabled = true; $('score-status').textContent = 'Dein Flug wird eingetragen …';
    try {
      const run = await active.ticket;
      if (active !== result) return;
      if (!run) throw new Error('Dieser Flug konnte nicht online gestartet werden. Prüfe deine Verbindung und fliege noch eine Runde.');
      const data = await api('/api/house-leaderboard', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ run, name, scoreVersion: 2, starIds: active.starIds, blocks: active.blocks, stars: active.stars, flightMs: active.flightMs, roomIds: active.roomIds, complete: active.complete }) });
      if (active !== result) return;
      active.saved = true; $('save-score').textContent = '✓ Gespeichert';
      if (!$('result').hidden && document.activeElement === $('pilot-name')) $('result-leaderboard').focus();
      $('pilot-name').disabled = true;
      $('score-status').textContent = `${data.points.toLocaleString('de-DE')} Punkte gespeichert. Dein Flug steht jetzt in der gemeinsamen Bestenliste.`;
      try { localStorage.setItem('stubenflieger.pilot', name); } catch {}
    } catch (error) { if (active === result) { $('score-status').textContent = error.message; $('save-score').disabled = false; } }
  });
  return { beginRun, setResult, clearResult, refresh };
}
