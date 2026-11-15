/* Signed-in member journey against a server that runs the API (see api.js for how to start one).
   Register through the page, land in the portal, open a product and a lesson, see progress reach the
   server and a second device, change settings, sign out, sign back in with the password, follow a
   "next" return path, and check the honest states of the forms. BASE overrides the origin;
   SHOTS=<dir> saves a screenshot per step. Exits non-zero when a check fails. */
const { chromium } = (() => { try { return require('playwright-core'); } catch (e) { return require('playwright'); } })();
const fs = require('fs');
const B = process.env.BASE || 'http://localhost:8788';
const SHOTS = process.env.SHOTS || '';
const stamp = Date.now().toString(36);
const email = `journey+${stamp}@example.test`, pw = 'a long test password';
let pass = 0, failN = 0; const errors = [];
const check = (c, label, detail) => { if (c) { pass++; console.log('PASS', label); } else { failN++; console.log('FAIL', label, detail === undefined ? '' : JSON.stringify(detail).slice(0, 400)); } };
const shot = async (p, n) => { if (SHOTS) await p.screenshot({ path: `${SHOTS}/${n}.png` }).catch(() => {}); };

(async () => {
  const br = await chromium.launch({ executablePath: process.env.CHROME || (fs.existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined) });
  const watch = (p, tag) => {
    p.on('pageerror', e => errors.push(tag + ' pageerror ' + String(e.message).slice(0, 200)));
    p.on('console', m => { if (m.type() === 'error' && !/401|404 \(Not Found\)|net::ERR|favicon/.test(m.text())) errors.push(tag + ' console ' + m.text().slice(0, 200)); });
    p.on('response', r => { if (r.status() >= 500) errors.push(tag + ' ' + r.status() + ' ' + r.url().replace(B, '')); });
  };
  const ctx = await br.newContext({ viewport: { width: 1366, height: 860 } });
  const p = await ctx.newPage(); watch(p, 'desk');

  /* ── a guest is sent to sign in, with the way back remembered ── */
  await p.goto(B + '/products/the-map/', { waitUntil: 'load' }); await p.waitForTimeout(1500);
  let u = new URL(p.url());
  check(/login/.test(u.pathname) && /the-map/.test(decodeURIComponent(u.search)), 'a guest opening a product is sent to sign in with a return path', p.url());

  /* ── register through the page ── */
  await p.goto(B + '/register?redirect=' + encodeURIComponent('/products/the-map/'), { waitUntil: 'load' }); await p.waitForTimeout(1200);
  check(await p.isVisible('#regForm'), 'registration form is visible');
  await p.fill('#firstName', 'Journey Tester'); await p.fill('#email', email); await p.fill('#password', pw);
  if (await p.isVisible('#confirm')) await p.fill('#confirm', pw);
  await p.evaluate(() => { const t = document.getElementById('terms'); if (t && !t.checked) t.click(); });
  await shot(p, '01-register');
  await p.click('#regForm button[type=submit]');
  await p.waitForURL(x => !/register/.test(new URL(x).pathname), { timeout: 15000 }).catch(() => {});
  await p.waitForTimeout(1500);
  u = new URL(p.url());
  check(!/register|login/.test(u.pathname), 'registration signs the member in and leaves the form', p.url());
  check(/the-map/.test(u.pathname), 'registration honours the return path', p.url());
  await shot(p, '02-after-register');

  /* ── the product opens and a lesson can be read ── */
  if (!/the-map/.test(u.pathname)) { await p.goto(B + '/products/the-map/', { waitUntil: 'load' }); await p.waitForTimeout(1500); }
  check(/the-map/.test(new URL(p.url()).pathname), 'a member can open The Map', p.url());
  const lesson = await p.evaluate(() => { const a = document.querySelector('[data-lesson], .lms-lesson, .lesson-link, a[href*="#lesson"], .lms-acc button, .lms-acc'); return a ? (a.className || a.tagName) : null; });
  check(!!lesson, 'The Map shows its lessons', lesson);
  await shot(p, '03-the-map');

  /* ── portal ── */
  await p.goto(B + '/portal', { waitUntil: 'load' }); await p.waitForTimeout(1800);
  let a = await p.evaluate(() => ({ path: location.pathname, name: (document.getElementById('sidebar-name') || {}).textContent || '', welcome: (document.getElementById('welcome-name') || document.getElementById('zero-name') || {}).textContent || '', products: document.querySelectorAll('#products-grid a, #products-grid [data-href], #products-grid .product-card').length }));
  check(a.path === '/portal' && /Journey/.test(a.name + a.welcome), 'the portal greets the member by name', a);
  check(a.products >= 4, 'the portal lists the products', a.products);
  await shot(p, '04-portal');
  const links = await p.evaluate(() => [...new Set([...document.querySelectorAll('a[href]')].map(x => x.getAttribute('href')).filter(h => h && !/^(#|mailto:|https?:|javascript:)/.test(h)).map(h => new URL(h, location.href).pathname))]);
  const bad = [];
  for (const t of links) { const r = await ctx.request.get(B + t, { maxRedirects: 3 }).catch(() => null); if (!r || r.status() >= 400) bad.push(t + ' ' + (r ? r.status() : 'x')); }
  check(bad.length === 0, 'every portal link resolves (' + links.length + ')', bad);

  /* ── every product opens for a member without script errors ── */
  /* The Lookout lives inside The Map and The Range is the company directory under it: both addresses redirect there */
  const LAND = { 'the-lookout': '/products/the-map/', 'the-range': '/products/the-map/range/' };
  for (const prod of ['the-pack', 'the-rope', 'the-route', 'the-compass', 'the-lookout', 'the-range']) {
    const before = errors.length;
    await p.goto(B + '/products/' + prod + '/', { waitUntil: 'load' }); await p.waitForTimeout(1500);
    const st = await p.evaluate(() => ({ path: location.pathname, h1: (document.querySelector('h1') || {}).textContent || '', over: document.documentElement.scrollWidth > window.innerWidth + 1 }));
    check(st.path === (LAND[prod] || '/products/' + prod + '/') && !st.over && errors.length === before, 'member opens ' + prod, { st, errs: errors.slice(before) });
  }

  /* ── progress reaches the server ── */
  await p.goto(B + '/products/the-map/', { waitUntil: 'load' }); await p.waitForTimeout(1500);
  await p.evaluate(() => { localStorage.setItem('mt-lms-qa-marker', 'marker-' + Date.now()); });
  const st1 = await p.evaluate(async () => { if (!window.MT_PROGRESS) return { none: true }; if (MT_PROGRESS.flush) await MT_PROGRESS.flush(); else if (MT_PROGRESS.push) await MT_PROGRESS.push(); await new Promise(r => setTimeout(r, 1500)); return MT_PROGRESS.status ? MT_PROGRESS.status() : {}; });
  await p.waitForTimeout(5500);
  const srv = await p.evaluate(async () => { const r = await fetch('/api/progress', { credentials: 'same-origin' }); return { status: r.status, j: await r.json().catch(() => null) }; });
  const nsNames = srv.j && srv.j.namespaces ? Object.keys(srv.j.namespaces) : [];
  check(srv.status === 200 && nsNames.length >= 1, 'progress is stored on the server', { st1, nsNames });

  /* ── a second device signs in with the password and receives the progress ── */
  const ctx2 = await br.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const q = await ctx2.newPage(); watch(q, 'phone');
  await q.goto(B + '/login', { waitUntil: 'load' }); await q.waitForTimeout(1200);
  if (await q.isVisible('#tabPw')) await q.click('#tabPw');
  await q.waitForTimeout(300);
  check(await q.isVisible('#loginForm #email'), 'password sign-in form is reachable on a phone');
  await q.fill('#loginForm #email', email); await q.fill('#loginForm #password', pw);
  await shot(q, '05-login-phone');
  await q.click('#loginForm button[type=submit]');
  await q.waitForURL(x => !/login/.test(new URL(x).pathname), { timeout: 15000 }).catch(() => {});
  await q.waitForTimeout(2500);
  check(/portal/.test(new URL(q.url()).pathname), 'password sign-in lands in the portal', q.url());
  const over = await q.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  check(!over, 'the portal has no sideways scroll on a phone');
  await shot(q, '06-portal-phone');
  await q.waitForTimeout(3000);
  const got = await q.evaluate(() => localStorage.getItem('mt-lms-qa-marker'));
  check(!!got, 'the second device receives what the first one saved', got);

  /* ── settings ── */
  await p.goto(B + '/settings', { waitUntil: 'load' }); await p.waitForTimeout(1800);
  a = await p.evaluate(() => ({ text: document.body.innerText + ' ' + [...document.querySelectorAll('input')].map(i => i.value).join(' ') }));
  check(a.text.toLowerCase().includes(email), 'settings show the account address', a.text.slice(0, 200));
  await p.click('#subnav button[data-set="privacy"]'); await p.waitForTimeout(600);
  a = await p.evaluate(() => ({ hasExport: !!document.getElementById('export-btn'), hasDelete: !!document.getElementById('delete-btn') }));
  check(a.hasExport && a.hasDelete, 'settings offer export and deletion');
  await shot(p, '07-settings');
  const dl = await Promise.all([p.waitForEvent('download', { timeout: 8000 }).catch(() => null), p.click('#export-btn').catch(() => null)]);
  check(!!dl[0], 'the export button downloads the data');

  /* ── sign out ── */
  await p.goto(B + '/portal', { waitUntil: 'load' }); await p.waitForTimeout(1500);
  await p.evaluate(() => { const b = document.getElementById('sign-out-btn') || document.getElementById('signout-link'); if (b) b.click(); });
  await p.waitForTimeout(2500);
  const me = await p.evaluate(async () => (await fetch('/api/auth/me', { credentials: 'same-origin' })).status === 200 ? (await (await fetch('/api/auth/me')).json()).user : null);
  check(me === null, 'sign-out ends the session', { url: p.url(), me });
  await p.goto(B + '/portal', { waitUntil: 'load' }); await p.waitForTimeout(1500);
  check(/login/.test(new URL(p.url()).pathname), 'the portal is closed after sign-out', p.url());

  /* ── honest states: wrong password, magic link without a mail provider ── */
  await p.goto(B + '/login', { waitUntil: 'load' }); await p.waitForTimeout(1000);
  if (await p.isVisible('#tabPw')) await p.click('#tabPw');
  await p.fill('#loginForm #email', email); await p.fill('#loginForm #password', 'not the password');
  await p.click('#loginForm button[type=submit]'); await p.waitForTimeout(1500);
  a = await p.evaluate(() => ({ err: (document.getElementById('formErr') || {}).textContent || '', path: location.pathname }));
  check(a.path === '/login' && a.err.trim().length > 3, 'a wrong password shows a message and stays on the page', a);
  await shot(p, '08-wrong-password');

  /* ── feedback: a guest on the Help page, with an address to reply to ── */
  await p.goto(B + '/help', { waitUntil: 'load' }); await p.waitForTimeout(1200);
  check(await p.isVisible('.mtfb-launch'), 'the Feedback button is on the Help page');
  await p.click('.mtfb-launch'); await p.waitForTimeout(700);
  a = await p.evaluate(() => ({ open: !!document.querySelector('.mtfb-veil.on [role=dialog]'), contact: !document.querySelector('.mtfb-contact').hidden, focus: document.activeElement && document.activeElement.id }));
  check(a.open && a.contact && a.focus === 'mtfbMsg', 'the dialog opens, focuses the message and offers a guest a reply address', a);
  await p.click('.mtfb-send'); await p.waitForTimeout(300);
  check((await p.textContent('.mtfb-err')).trim().length > 3, 'an empty message is refused in the dialog');
  await p.click('.mtfb-kinds input[value="idea"]', { force: true }); await p.click('[data-star="4"]');
  await p.fill('#mtfbMsg', 'Journey feedback from a guest ' + stamp); await p.fill('#mtfbContact', `fb+${stamp}@example.test`);
  await shot(p, '09-feedback-dialog');
  await p.click('form .mtfb-send'); await p.waitForTimeout(1500);
  check(await p.isVisible('.mtfb-done'), 'the guest sees the thank-you state');
  await p.keyboard.press('Escape'); await p.waitForTimeout(300);
  check(!(await p.isVisible('.mtfb-veil')), 'Escape closes the dialog');

  /* ── feedback from a member on a phone, in Bahasa Indonesia; the launcher clears the bottom tab bar ── */
  await q.evaluate(() => { localStorage.setItem('mt-lang', 'id'); localStorage.setItem('mtLang', 'id'); });
  await q.goto(B + '/products/the-map/', { waitUntil: 'load' }); await q.waitForTimeout(1800);
  a = await q.evaluate(() => { const b = document.querySelector('.mtfb-launch'), t = document.querySelector('.mobile-tab-bar'); if (!b) return null; const r = b.getBoundingClientRect(), tr = t && getComputedStyle(t).display !== 'none' ? t.getBoundingClientRect() : null; return { label: b.textContent.trim(), clear: !tr || r.bottom <= tr.top + 1, inView: r.right <= window.innerWidth && r.bottom <= window.innerHeight, h: r.height }; });
  check(a && a.label === 'Masukan' && a.clear && a.inView && a.h >= 44, 'the launcher is in Bahasa, tappable and clear of the tab bar on a phone', a);
  await q.tap('.mtfb-launch'); await q.waitForTimeout(900);
  a = await q.evaluate(() => ({ title: document.getElementById('mtfbTitle').textContent, contact: !document.querySelector('.mtfb-contact').hidden, fits: document.querySelector('.mtfb').getBoundingClientRect().width <= window.innerWidth }));
  check(/pendapatmu/.test(a.title) && !a.contact && a.fits, 'a member gets the Bahasa dialog without the address field', a);
  await q.fill('#mtfbMsg', 'Masukan anggota dari ponsel ' + stamp);
  await shot(q, '10-feedback-phone');
  await q.tap('form .mtfb-send'); await q.waitForTimeout(1500);
  check(await q.isVisible('.mtfb-done'), 'the member sees the thank-you state');

  /* ── a hostile display name is shown as text, never run ── */
  const ctx3 = await br.newContext({ viewport: { width: 1366, height: 860 } });
  await ctx3.request.post(B + '/api/auth/register', { headers: { origin: B }, data: { name: '"><img src=x onerror="window.__xss=1">', email: `xss+${stamp}@example.test`, password: pw, terms: true } });
  const x = await ctx3.newPage(); watch(x, 'xss');
  for (const u2 of ['/settings', '/portal', '/products/the-compass/']) {
    await x.goto(B + u2, { waitUntil: 'load' }); await x.waitForTimeout(1500);
    const hit = await x.evaluate(() => !!window.__xss || !!document.querySelector('img[src="x"]'));
    check(!hit, 'a display name with markup is inert on ' + u2);
  }

  /* ── admin page: feedback inbox, audit trail ── */
  if (process.env.ADMIN_TOKEN !== '') {
    const ad = await ctx3.newPage(); watch(ad, 'admin');
    await ad.addInitScript(t => { try { sessionStorage.setItem('mt-admin-token', t); } catch (e) {} }, process.env.ADMIN_TOKEN || 'local-admin-token');
    await ad.goto(B + '/admin/', { waitUntil: 'load' }); await ad.waitForTimeout(1800);
    check(await ad.isVisible('#app'), 'the admin page opens with the token');
    await ad.click('#feedback summary'); await ad.waitForTimeout(1200);
    a = await ad.evaluate(s2 => ({ rows: document.querySelectorAll('#fbRows tbody tr').length, guest: document.getElementById('fbRows').innerText.includes('fb+' + s2 + '@example.test'), member: document.getElementById('fbRows').innerText.includes('journey+' + s2 + '@example.test') }), stamp);
    check(a.rows >= 2 && a.guest && a.member, 'the feedback inbox lists the guest and the member message with their senders', a);
    await ad.selectOption('#fbRows select.fbst', 'reviewing'); await ad.waitForTimeout(800);
    await ad.click('#audit summary'); await ad.waitForTimeout(1200);
    a = await ad.evaluate(() => document.getElementById('auRows').innerText);
    check(/feedback\.update/.test(a), 'the triage shows up in the audit trail', a.slice(0, 160));
    await shot(ad, '11-admin');
    const dlc = await Promise.all([ad.waitForEvent('download', { timeout: 8000 }).catch(() => null), ad.click('#leadsCsv')]);
    check(!!dlc[0], 'the lead list downloads as CSV');
  }

  /* ── installable: the manifest and its icons are served ── */
  const mf = await ctx3.request.get(B + '/manifest.webmanifest');
  const mj = mf.ok() ? await mf.json().catch(() => null) : null;
  check(!!mj && mj.start_url && mj.icons.length >= 2, 'the web app manifest is served', mf.status());
  if (mj) { const badIcons = []; for (const ic of mj.icons) { const r = await ctx3.request.get(B + ic.src); if (!r.ok()) badIcons.push(ic.src); } check(badIcons.length === 0, 'every manifest icon resolves', badIcons); }
  a = await x.evaluate(() => !!document.querySelector('link[rel="manifest"]'));
  check(a, 'pages link the manifest');

  await br.close();
  if (errors.length) { console.log('script errors and 5xx responses seen:'); [...new Set(errors)].slice(0, 20).forEach(e => console.log('  ', e)); }
  check(errors.length === 0, 'no script errors or 5xx responses during the journey', errors.length);
  console.log(`member journey: ${pass} passed, ${failN} failed`);
  process.exit(failN ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
