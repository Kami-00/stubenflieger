// Two real, isolated browser players against the local server.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const { chromium } = require('playwright');
const origin = process.env.DUEL_QA_ORIGIN || 'http://127.0.0.1:8796';
assert(['localhost', '127.0.0.1'].includes(new URL(origin).hostname));
const output = 'D:/test/tmp/stubenflieger-duel';
(async () => {
  await fs.mkdir(output, { recursive: true });
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--enable-unsafe-swiftshader'] });
  const errors = [], checks = [];
  let host, guest;
  try {
    async function player() {
      const context = await browser.newContext({ viewport: { width: 1280, height: 800 }, reducedMotion: 'reduce', permissions: ['clipboard-read', 'clipboard-write'] });
      await context.addInitScript(() => {
        const Native = window.WebSocket;
        window.duelQA = { states: [], sends: [], sockets: [] };
        window.WebSocket = class extends Native {
          constructor(...args) {
            super(...args); window.duelQA.sockets.push(this);
            this.addEventListener('message', event => { const data = JSON.parse(event.data); if (data.type === 'state') { window.duelQA.state = data; window.duelQA.states.push(data); } });
          }
          send(data) { window.duelQA.sends.push(JSON.parse(data)); return super.send(data); }
        };
      });
      const page = await context.newPage(); page.on('pageerror', error => errors.push(error.message));
      return page;
    }
    host = await player(); guest = await player();
    await host.goto(origin + '/duel');
    await host.locator('#duel-name').fill('Papierpilot');
    for (const [name, width, height] of [['desktop',1280,800],['mobile-320',320,568],['mobile-390',390,844],['landscape',844,390]]) {
      await host.setViewportSize({ width, height });
      assert(await host.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), name);
      await host.locator('#create-duel').scrollIntoViewIfNeeded();
      assert(await host.locator('#create-duel').isVisible());
      await host.screenshot({ path: `${output}/${name}-entry.png`, fullPage: true });
    }
    await host.setViewportSize({ width: 1280, height: 800 });
    await host.locator('#create-duel').click();
    await host.waitForFunction(() => window.duelQA.state?.players.some(p => p.id === 'p1' && p.connected));
    const invitation = await host.locator('#invite-link').inputValue();
    assert.match(invitation, /\/duel#room=[0-9a-f-]{36}$/);
    assert(!invitation.includes('token'));
    await host.locator('#copy-invite').click();
    await host.waitForFunction(() => /kopiert|markiert/i.test(document.querySelector('#invite-status').textContent));
    assert.match(await host.locator('#invite-status').textContent(), /kopiert|markiert/i);
    await guest.goto(invitation); await guest.locator('#duel-name').fill('Gartenpilot'); await guest.locator('#join-duel').click();
    await Promise.all([host, guest].map(page => page.waitForFunction(() => window.duelQA.state?.players.filter(p => p.connected).length === 2)));
    await host.screenshot({ path: `${output}/desktop-lobby.png` });
    const profileClean = await Promise.all([host, guest].map(page => page.evaluate(() => !Object.keys(localStorage).some(key => key.includes('profile')))));
    assert(profileClean.every(Boolean));
    checks.push('Create, share and join a private duel in separate browsers without changing the solo profile');
    await host.reload();
    await host.waitForFunction(() => window.duelQA.state?.players.filter(p => p.connected).length === 2);
    assert.match(await host.locator('#lobby-p1').textContent(), /Papierpilot.*DU/s);
    checks.push('Reload restores the authenticated host to the same seat');
    await host.locator('#ready-button').click(); await guest.locator('#ready-button').click();
    await Promise.all([host, guest].map(page => page.waitForFunction(() => window.duelQA.state?.phase === 'playing', null, { timeout: 15000 })));
    assert.equal(await host.locator('#own-hp').textContent(), '100');
    assert.equal(await guest.locator('#own-hp').textContent(), '100');
    await host.locator('#duel-canvas').focus(); await host.keyboard.down('d'); await host.keyboard.down('Space');
    await host.waitForFunction(() => window.duelQA.sends.some(d => d.type === 'input' && d.fire && d.steer === 1));
    await host.waitForFunction(() => window.duelQA.state.snapshot.projectiles.some(s => s.owner === 'p1'));
    await host.screenshot({ path: `${output}/desktop-flight.png` });
    await host.keyboard.up('d'); await host.keyboard.up('Space');
    await guest.setViewportSize({ width: 390, height: 844 });
    const fire = await guest.locator('#fire-button').boundingBox();
    await guest.mouse.move(fire.x + fire.width / 2, fire.y + fire.height / 2); await guest.mouse.down();
    await guest.waitForFunction(() => window.duelQA.sends.some(d => d.type === 'input' && d.fire));
    await guest.mouse.up();
    const stick = await guest.locator('#duel-stick').boundingBox();
    await guest.mouse.move(stick.x + stick.width / 2 + 25, stick.y + stick.height / 2 - 15); await guest.mouse.down();
    await guest.waitForFunction(() => window.duelQA.sends.some(d => d.type === 'input' && d.steer > .2 && d.pitch > .1));
    await guest.mouse.up();
    assert(await guest.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    await guest.screenshot({ path: `${output}/mobile-flight.png` });
    checks.push('Ready/countdown, both HP bars, keyboard firing and steering, touch firing and joystick');
    await guest.locator('#leave-duel').click();
    await host.waitForFunction(() => window.duelQA.state?.phase === 'finished' && window.duelQA.state.winner === 'p1');
    assert.match(await host.locator('#duel-result-title').textContent(), /gewonnen/);
    await host.screenshot({ path: `${output}/desktop-result.png` });
    checks.push('Leaving produces a visible, consistent winner result');
    assert.deepEqual(errors, []);
    const report = { passed: true, checks, errors };
    await fs.writeFile(`${output}/browser.json`, JSON.stringify(report, null, 2)); console.log(JSON.stringify(report, null, 2));
  } catch (error) {
    if (host) await host.screenshot({ path: `${output}/failure-host.png` }).catch(() => {});
    if (guest) await guest.screenshot({ path: `${output}/failure-guest.png` }).catch(() => {});
    console.error('Browser errors:', errors); throw error;
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
