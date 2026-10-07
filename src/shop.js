import { CATALOG, SIZE_RANGE } from './progression.js';
import { getAircraftDefinition } from './aircraft.js';

const categories = [ ['upgrades', 'Größe'], ['doors', 'Türen'], ['boosts', 'Boosts'], ['planes', 'Flugzeuge'], ['effects', 'Effekte'] ];
const format = points => points.toLocaleString('de-DE');
function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}

// Project the actual model's upper faces so the shop shows its real silhouette.
function aircraftPreview(form, label) {
  const namespace = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(namespace, 'svg');
  svg.setAttribute('viewBox', '-0.29 -0.22 0.58 0.44');
  svg.setAttribute('class', 'aircraft-preview'); svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', `${label} – Form von oben`);
  const faces = getAircraftDefinition(form).parts.flatMap(part => part.faces.map(face => {
    const vertices = face.map(index => part.vertices[index]);
    const [a, b, c] = vertices;
    const normalY = (b[2] - a[2]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[2] - a[2]);
    return { vertices, normalY, color: part.color, height: vertices.reduce((sum, v) => sum + v[1], 0) / vertices.length };
  })).filter(face => face.normalY > 1e-9).sort((a, b) => a.height - b.height);
  for (const face of faces) {
    const polygon = document.createElementNS(namespace, 'polygon');
    polygon.setAttribute('points', face.vertices.map(v => `${v[0]},${v[2]}`).join(' '));
    polygon.setAttribute('fill', '#' + face.color.toString(16).padStart(6, '0'));
    polygon.setAttribute('stroke', '#a99771'); polygon.setAttribute('stroke-width', '.0012');
    polygon.setAttribute('stroke-linejoin', 'round'); svg.append(polygon);
  }
  return svg;
}

export function createShop({ container, progression, onChange = () => {}, onClose = () => {} }) {
  let category = 'upgrades', notice = '';
  function mutate(action, message, focusKey) {
    try {
      const profile = action(); notice = message; onChange(profile);
    } catch (error) { notice = error.message; }
    render(focusKey);
  }
  function button(text, action, key) {
    const node = element('button', text, 'shop-action');
    node.type = 'button'; node.dataset.shopFocus = key; node.addEventListener('click', action);
    return node;
  }
  function render(focusKey) {
    let profile = progression.getProfile();
    try { profile = progression.refresh(); } catch (error) { notice = error.message; }
    container.replaceChildren();
    const wallet = element('div', undefined, 'shop-wallet');
    wallet.append(element('strong', `${format(profile.points)} Punkte`), element('span', `Dein Rekord: ${format(profile.highscore)} Punkte`));
    container.append(wallet, element('p', 'Alles bleibt freigeschaltet. Dein Guthaben, deine Käufe und deine Ausrüstung werden nur in diesem Browser gespeichert. Beim Löschen der Website-Daten gehen sie verloren.', 'shop-note'));
    const nav = element('nav', undefined, 'shop-tabs'); nav.setAttribute('aria-label', 'Shop-Bereiche');
    categories.forEach(([id, label]) => {
      const tab = button(label, () => { category = id; notice = ''; render(`category:${id}`); }, `category:${id}`);
      tab.setAttribute('aria-pressed', String(category === id)); nav.append(tab);
    });
    container.append(nav);
    const status = element('p', notice || progression.getStatus().error || 'Einmal kaufen, in jedem Run benutzen.', 'shop-status');
    status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite'); container.append(status);
    if (category === 'doors') {
      const label = element('label', undefined, 'shop-setting');
      const checkbox = document.createElement('input'); checkbox.type = 'checkbox'; checkbox.checked = profile.useDoorUnlocks;
      checkbox.dataset.shopFocus = 'doors-enabled';
      checkbox.addEventListener('change', () => mutate(() => progression.setPermanentDoorsEnabled(checkbox.checked), checkbox.checked ? 'Gekaufte Türen sind ab dem nächsten Run offen.' : 'Der nächste Run startet wieder mit geschlossenen Türen.', 'doors-enabled'));
      label.append(checkbox, document.createTextNode('Gekaufte Türen beim Start öffnen'));
      container.append(label, element('p', 'Sterne öffnen weitere Türen im laufenden Run. Für jeden erstmals besuchten Raum gibt es 250 Punkte. Startzimmer und bereits offene Türen allein geben keinen Bonus.', 'shop-note'));
    }
    if (category === 'boosts') container.append(element('p', `Wähle bis zu zwei Boosts (${profile.equipped.boosts.length}/2). Jeder ausgerüstete Boost ist in jedem Run einmal einsetzbar und wird beim nächsten Start aufgefüllt.`, 'shop-note'));
    if (category === 'upgrades' && profile.owned.includes('upgrade:size')) {
      const label = element('label', undefined, 'shop-size'); label.htmlFor = 'plane-size';
      const output = element('output', `${Math.round(profile.equipped.size * 100)} %`); output.htmlFor = 'plane-size';
      label.append(document.createTextNode('Flugzeuggröße '), output);
      const range = document.createElement('input'); range.id = 'plane-size'; range.type = 'range';
      range.min = SIZE_RANGE.min; range.max = SIZE_RANGE.max; range.step = SIZE_RANGE.step; range.value = profile.equipped.size;
      range.dataset.shopFocus = 'size'; range.setAttribute('aria-valuetext', `${Math.round(profile.equipped.size * 100)} Prozent`);
      range.addEventListener('input', () => { output.textContent = `${Math.round(Number(range.value) * 100)} %`; range.setAttribute('aria-valuetext', `${Math.round(Number(range.value) * 100)} Prozent`); });
      range.addEventListener('change', () => mutate(() => progression.setSize(Number(range.value)), 'Größe gespeichert. Sie gilt ab dem nächsten Run.', 'size'));
      container.append(label, range, element('p', 'Klein: wendiger, schmale Lücken. Groß: längeres Gleiten, mehr Spannweite. Form und Kollisionsfläche ändern sich gemeinsam.', 'shop-note'));
    }
    const grid = element('div', undefined, 'shop-grid');
    if (category === 'planes') grid.classList.add('aircraft-grid');
    CATALOG.filter(item => item.category === category).forEach(item => {
      const card = element('article', undefined, 'shop-card');
      const owned = profile.owned.includes(item.id);
      card.append(element('h3', item.name));
      if (item.category === 'planes') card.append(aircraftPreview(item.id.split(':')[1], item.name));
      card.append(element('p', item.description), element('strong', owned ? 'Dauerhaft freigeschaltet' : `${format(item.price)} Punkte`, 'shop-price'));
      if (!owned) {
        const buy = button('Dauerhaft freischalten', () => mutate(() => progression.purchase(item.id), `${item.name} ist dauerhaft freigeschaltet.`, item.id), item.id);
        buy.disabled = profile.points < item.price || !progression.getStatus().available;
        card.append(buy);
        if (profile.points < item.price) card.append(element('small', `Noch ${format(item.price - profile.points)} Punkte`));
      } else if (item.category === 'planes' || item.category === 'effects') {
        const id = item.id.split(':')[1], plane = item.category === 'planes';
        const equipped = (plane ? profile.equipped.form : profile.equipped.effect) === id;
        const equip = button(equipped ? 'Ausgerüstet' : 'Ausrüsten', () => mutate(() => plane ? progression.equipForm(id) : progression.equipEffect(id), `${item.name} ausgerüstet.`, item.id), item.id);
        equip.disabled = equipped; card.append(equip);
      } else if (item.category === 'boosts') {
        const id = item.id.split(':')[1], equipped = profile.equipped.boosts.includes(id);
        const equip = button(equipped ? 'Ablegen' : 'Ausrüsten', () => {
          const next = equipped ? profile.equipped.boosts.filter(value => value !== id) : [...profile.equipped.boosts, id];
          mutate(() => progression.equipBoosts(next), equipped ? `${item.name} abgelegt.` : `${item.name} ausgerüstet.`, item.id);
        }, item.id);
        equip.disabled = !equipped && profile.equipped.boosts.length >= 2; card.append(equip);
      }
      grid.append(card);
    });
    container.append(grid, button('Zurück zum Start', onClose, 'close'));
    if (focusKey) {
      const focus = [...container.querySelectorAll('[data-shop-focus]')].find(node => node.dataset.shopFocus === focusKey && !node.disabled);
      (focus || nav.querySelector('[aria-pressed="true"]'))?.focus();
    }
  }
  return { render, destroy: () => container.replaceChildren() };
}
