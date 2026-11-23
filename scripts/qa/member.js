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
  /* third-party widgets (Turnstile, Web Analytics) are not under test and behave differently off the production host: keep them out so runs are repeatable */
  { const nc = br.newContext.bind(br); br.newContext = async o => { const c = await nc(o); await c.route(/challenges\.cloudflare\.com|cloudflareinsights\.com/, r => r.abort()); return c; }; }
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

    /* lead pipeline (docs/21 N-11): a lead typed in by the team, a reply template filled from it, a logged contact */
    await ad.click('#pipeline > summary'); await ad.waitForTimeout(1000);
    a = await ad.evaluate(() => ({ stages: document.querySelectorAll('#plStages tbody tr').length, tpl: document.getElementById('tplState').textContent }));
    check(a.stages === 6 && /5 built in/.test(a.tpl), 'the pipeline panel shows six stages and the built-in templates', a);
    await ad.fill('#nlCompany', 'Universitas Uji ' + stamp); await ad.fill('#nlName', 'Budi Santoso'); await ad.fill('#nlValue', '12.500.000'); await ad.fill('#nlOwner', 'Tim QA');
    await ad.click('#nlAdd'); await ad.waitForTimeout(1800);
    const lrow = `tr[data-lead]:has-text("Universitas Uji ${stamp}")`;
    a = await ad.evaluate(n => { const tr = [].find.call(document.querySelectorAll('tr[data-lead]'), x => x.innerText.includes(n)); return tr ? { text: tr.innerText, value: tr.querySelector('.vl').value, stage: tr.querySelector('select.st').value } : null; }, 'Universitas Uji ' + stamp);
    check(a && /added by the team/.test(a.text) && /no e-mail yet/.test(a.text) && a.value === '12.500.000' && a.stage === 'new', 'a lead typed in by the team appears in the list with its value', a);
    await ad.selectOption(lrow + ' select.tp', 'first-reply'); await ad.waitForTimeout(300);
    a = await ad.evaluate(n => { const tr = [].find.call(document.querySelectorAll('tr[data-lead]'), x => x.innerText.includes(n)); return { text: tr.querySelector('.tprev').innerText, href: tr.querySelector('a.tm').getAttribute('href') }; }, 'Universitas Uji ' + stamp);
    check(/Yth\. Bapak\/Ibu Budi Santoso/.test(a.text) && a.text.includes('Universitas Uji ' + stamp) && /Tim QA/.test(a.text) && !/\{(name|company|sender|site)\}/.test(a.text) && /^mailto:\?subject=/.test(a.href), 'a reply template is filled from the lead, in Bahasa Indonesia, as a mail link', a);
    await ad.selectOption(lrow + ' select.tl', 'en'); await ad.waitForTimeout(300);
    a = await ad.evaluate(n => [].find.call(document.querySelectorAll('tr[data-lead]'), x => x.innerText.includes(n)).querySelector('.tprev').innerText, 'Universitas Uji ' + stamp);
    check(/Hello Budi Santoso/.test(a) && /Best regards,\nTim QA/.test(a), 'the same template in English', a.slice(0, 120));
    await ad.click(lrow + ' button.lc'); await ad.waitForTimeout(1500);
    a = await ad.evaluate(n => { const tr = [].find.call(document.querySelectorAll('tr[data-lead]'), x => x.innerText.includes(n)); return { stage: tr.querySelector('select.st').value, fu: tr.querySelector('.fu').value, text: tr.innerText, summary: document.getElementById('plSummary').textContent }; }, 'Universitas Uji ' + stamp);
    check(a.stage === 'contacted' && a.fu === new Date(Date.now() + 7 * 3600 * 1000 + 7 * 86400 * 1000).toISOString().slice(0, 10) && /last contact/.test(a.text) && /open, Rp/.test(a.summary), 'logging a contact moves the lead on and sets the follow-up a week out', a);
    await ad.check('#due'); await ad.waitForTimeout(1200);
    a = await ad.evaluate(n => ({ n: document.querySelectorAll('tr[data-lead]').length, has: document.getElementById('rows').innerText.includes(n) }), 'Universitas Uji ' + stamp);
    check(!a.has, 'the due filter leaves out a lead whose follow-up is a week away', a);
    await ad.uncheck('#due'); await ad.waitForTimeout(1200);
    await shot(ad, '21-admin-pipeline');
  }

  /* ── script errors from a browser reach the admin page (js/mt-errors.js) ── */
  const eb = await ctx3.newPage();
  await eb.goto(B + '/help', { waitUntil: 'load' }); await eb.waitForTimeout(800);
  const evReq = eb.waitForResponse(r => /\/api\/events/.test(r.url()) && r.request().postData().includes('site.script.error'), { timeout: 8000 }).catch(() => null);
  await eb.evaluate(m => { setTimeout(() => { throw new Error(m); }, 0); setTimeout(() => { throw new Error(m); }, 20); }, 'journey boom ' + stamp);
  const evRes = await evReq;
  check(!!evRes && evRes.status() === 202, 'an uncaught error is reported once to /api/events', evRes && evRes.status());
  await eb.evaluate(() => { try { localStorage.setItem('mt-consent-analytics', '0'); } catch (e) {} });
  await eb.reload({ waitUntil: 'load' }); await eb.waitForTimeout(600);
  let declinedSent = false; eb.on('request', r => { if (/\/api\/events/.test(r.url()) && (r.postData() || '').includes('site.script.error')) declinedSent = true; });
  await eb.evaluate(() => { setTimeout(() => { throw new Error('should not be sent'); }, 0); }); await eb.waitForTimeout(1200);
  check(!declinedSent, 'nothing is reported when the visitor declined analytics');
  if (process.env.ADMIN_TOKEN !== '') {
    const ad2 = await ctx3.newPage();
    await ad2.addInitScript(t => { try { sessionStorage.setItem('mt-admin-token', t); } catch (e) {} }, process.env.ADMIN_TOKEN || 'local-admin-token');
    await ad2.goto(B + '/admin/', { waitUntil: 'load' }); await ad2.waitForTimeout(1500);
    await ad2.click('#errors summary'); await ad2.waitForTimeout(1200);
    a = await ad2.evaluate(() => document.getElementById('erRows').innerText);
    check(a.includes('journey boom ' + stamp) && a.includes('/help'), 'the admin page lists the error with its page', a.slice(0, 200));
    await ad2.click('#digest summary'); await ad2.waitForTimeout(1500);
    a = await ad2.evaluate(() => document.getElementById('dgText').textContent);
    check(/PEOPLE/.test(a) && /FEEDBACK/.test(a) && /RELIABILITY/.test(a), 'the admin page previews the weekly summary', a.slice(0, 120));
    await shot(ad2, '13-admin-errors-digest');
    await ad2.close();
  }
  await eb.close();

  /* ── Career Map report: the export libraries come from this site, only when asked for, and a PDF downloads ── */
  const rr = await ctx3.request.post(B + '/api/results', { headers: { origin: B }, data: { email: `pdf+${stamp}@example.test`, name: 'PDF Tester', total: 64, band: 'Mid-Mountain', dims: { ci: 12, ps: 11, ir: 9, nc: 8, cm: 10 }, profile: { stage: 'student' }, answers: { q1: 2 } } });
  const rj = await rr.json().catch(() => null);
  check(rr.status() < 300 && rj && rj.url, 'a Career Map result is stored for the export test', rr.status());
  if (rj && rj.url) {
    const cm = await ctx3.newPage(); watch(cm, 'career-map'); const reqs = [];
    cm.on('request', r => reqs.push(r.url()));
    const ru = new URL(rj.url);
    await cm.goto(B + ru.pathname + ru.search, { waitUntil: 'load' }); await cm.waitForTimeout(2500);
    check(!reqs.some(x => /cdnjs|html2canvas|jspdf/i.test(x)), 'the assessment page loads no export library and no CDN until asked', reqs.filter(x => /cdnjs|html2canvas|jspdf/i.test(x)));
    const hasReport = await cm.evaluate(() => { const el = document.getElementById('report-content'); return !!el && el.innerText.trim().length > 200; });
    check(hasReport, 'the signed link rebuilds the report');
    const dlp = cm.waitForEvent('download', { timeout: 60000 }).catch(() => null);
    await cm.evaluate(() => { window.print = () => { window.__printed = true; }; window.downloadReport(); });
    const dlf = await dlp;
    const libs = reqs.filter(x => /js\/vendor\/(html2canvas|jspdf)/.test(x));
    check(libs.length === 2 && libs.every(x => x.startsWith(B)), 'pressing download fetches both libraries from this site', libs);
    check(!!dlf && /\.pdf$/i.test(dlf.suggestedFilename()) && !(await cm.evaluate(() => window.__printed)), 'the report downloads as a PDF', dlf ? dlf.suggestedFilename() : 'no download');
    await cm.close();
  }

  /* ── sample lesson: a guest is offered it at the sign-in wall, reads the first lesson, and the rest asks for an account ── */
  const gctx = await br.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const g = await gctx.newPage(); watch(g, 'sample');
  await g.goto(B + '/products/the-map/', { waitUntil: 'load' }); await g.waitForTimeout(1500);
  a = await g.evaluate(() => { const b = document.getElementById('sampleCta'); return { path: location.pathname, shown: !!b && !b.hidden, href: b ? b.querySelector('a').getAttribute('href') : '' }; });
  check(/login/.test(a.path) && a.shown && a.href === '/products/the-map/?sample=1', 'the sign-in page offers the sample lesson of the product the guest came for', a);
  await g.click('#sampleCta a'); await g.waitForTimeout(3000);
  a = await g.evaluate(() => { const bar = document.querySelector('.lmx-bar'), pl = document.querySelector('.lmsp'); return { path: location.pathname + location.search, bar: !!bar, barText: bar ? bar.innerText.slice(0, 60) : '', player: !!pl && getComputedStyle(pl).display !== 'none', over: document.documentElement.scrollWidth > window.innerWidth + 1, cta: bar ? bar.querySelector('a').getAttribute('href') : '' }; });
  check(a.path === '/products/the-map/?sample=1' && a.bar && a.player && !a.over, 'a guest stays on the product in sample mode and the first lesson opens', a);
  check(/register\?redirect=%2Fproducts%2Fthe-map%2F/.test(a.cta), 'the sample bar leads to a free account with the way back', a.cta);
  await shot(g, '15-sample-lesson');
  /* the player reports the opened lesson, marked as a sample, and remembers the sample in this browser only */
  const gReq = g.waitForRequest(q => /\/api\/events$/.test(q.url()) && /lms\.lesson\.opened/.test(q.postData() || ''), { timeout: 8000 }).catch(() => null);
  await g.evaluate(() => { if (window.MT && window.MT.flush) window.MT.flush(false); });
  const gEv = await gReq, gBody = gEv ? JSON.parse(gEv.postData()) : { events: [] };
  a = gBody.events.find(e => e.name === 'lms.lesson.opened');
  check(!!a && a.props.pillar === 'the-map' && a.props.sample === 1 && !!a.props.lesson && gBody.events.every(e => !/@/.test(JSON.stringify(e))), 'the player reports a sample lesson opened, without anything personal', gBody.events.map(e => e.name));
  check(await g.evaluate(() => localStorage.getItem('mt-sample-seen')) === 'the-map', 'the sample is remembered in the browser for the return visit');
  a = await g.evaluate(() => { const items = [...document.querySelectorAll('.lr-item')]; const locked = items.filter(x => x.classList.contains('locked')); if (locked[0]) locked[0].click(); return { items: items.length, locked: locked.length, veil: !!document.querySelector('.lmx-veil.on') }; });
  check(a.items > 3 && a.locked === a.items - 1 && a.veil, 'every other lesson is closed and says why when pressed', a);
  await gctx.close();

  /* ── certificate: every core lesson done, the member asks, the public page verifies it ── */
  const cp = await ctx3.newPage(); watch(cp, 'certificate');
  await cp.goto(B + '/products/the-route/', { waitUntil: 'load' }); await cp.waitForTimeout(1200);
  const routeCore = await (await ctx3.request.get(B + '/data/lms/the-route/manifest.json')).json();
  await cp.evaluate(ls => { const d = {}; ls.forEach(n => { d[n] = true; }); localStorage.setItem('mt-lms:the-route', JSON.stringify(d)); }, routeCore.lessons);
  await cp.reload({ waitUntil: 'load' }); await cp.waitForTimeout(2500);
  check(await cp.isVisible('.lmx-cert'), 'a member who finished every core lesson is offered the certificate');
  await shot(cp, '16-certificate-button');
  await cp.click('.lmx-cert');
  await cp.waitForURL(u2 => /\/certificate/.test(new URL(u2).pathname), { timeout: 20000 }).catch(() => {});
  await cp.waitForTimeout(1500);
  a = await cp.evaluate(() => ({ path: location.pathname, status: document.getElementById('status').className, name: (document.getElementById('cName') || {}).textContent, what: (document.getElementById('cWhat') || {}).textContent, sheet: !document.getElementById('sheet').hidden, li: (document.getElementById('liBtn') || {}).href || '' }));
  check(a.path === '/certificate' && /ok/.test(a.status) && a.sheet && a.name.length > 3 && /The Route/.test(a.what) && /linkedin\.com\/profile\/add/.test(a.li), 'the certificate page shows the verified certificate', a);
  await shot(cp, '17-certificate');
  const certUrl = cp.url();
  const pubCtx = await br.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
  const pv = await pubCtx.newPage(); watch(pv, 'verify');
  await pv.goto(certUrl, { waitUntil: 'load' }); await pv.waitForTimeout(1500);
  a = await pv.evaluate(() => ({ ok: /ok/.test(document.getElementById('status').className), body: document.body.innerText, over: document.documentElement.scrollWidth > window.innerWidth + 1 }));
  check(a.ok && !a.over && !/@example\.test/.test(a.body), 'a stranger on a phone can verify it and sees no address', a.body.slice(0, 80));
  await shot(pv, '18-certificate-phone');
  await pv.goto(B + '/certificate?c=AAAAAAAAAAAAAAAA', { waitUntil: 'load' }); await pv.waitForTimeout(1200);
  a = await pv.evaluate(() => ({ bad: /bad/.test(document.getElementById('status').className), empty: !document.getElementById('empty').hidden, sheet: document.getElementById('sheet').hidden }));
  check(a.bad && a.empty && a.sheet, 'an unknown reference is shown as not verified', a);
  await pubCtx.close(); await cp.close();

  /* ── admin trends ── */
  if (process.env.ADMIN_TOKEN !== '') {
    const ad3 = await ctx3.newPage(); watch(ad3, 'admin-trends');
    await ad3.addInitScript(t => { try { sessionStorage.setItem('mt-admin-token', t); } catch (e) {} }, process.env.ADMIN_TOKEN || 'local-admin-token');
    await ad3.goto(B + '/admin/', { waitUntil: 'load' }); await ad3.waitForTimeout(1500);
    await ad3.click('#trends summary'); await ad3.waitForTimeout(1500);
    a = await ad3.evaluate(() => ({ charts: document.querySelectorAll('#trCharts svg').length, bars: document.querySelectorAll('#trCharts svg rect').length, text: document.getElementById('trCharts').innerText.slice(0, 80) }));
    check(a.charts === 8 && a.bars >= 8 * 30, 'the admin page draws the eight trend charts', a);
    await shot(ad3, '19-admin-trends');
    await ad3.close();
  }

  /* ── AI coach: hidden until the owner opens it; then a member reviews a CV bullet and an interview answer ── */
  if (process.env.ADMIN_TOKEN !== '') {
    const adminHdr = { origin: B, authorization: 'Bearer ' + (process.env.ADMIN_TOKEN || 'local-admin-token') };
    await ctx3.request.post(B + '/api/admin/coach/mode', { headers: adminHdr, data: { mode: 'off' } });
    const co = await ctx3.newPage(); watch(co, 'coach');
    await co.addInitScript(() => { try { localStorage.setItem('metanoia_onboarded', 'true'); } catch (e) {} });   /* past the first-visit calibration, which covers the footer */
    await co.goto(B + '/portal', { waitUntil: 'load' }); await co.waitForTimeout(1800);
    check(await co.evaluate(() => { const b = document.querySelector('[data-coach-open]'); return !!b && b.hidden; }), 'the coach control stays hidden while the coach is closed to members');
    await ctx3.request.post(B + '/api/admin/coach/mode', { headers: adminHdr, data: { mode: 'on' } });
    await co.reload({ waitUntil: 'load' }); await co.waitForTimeout(1800);
    check(await co.isVisible('[data-coach-open]'), 'once opened, the portal shows the coach control');
    await co.click('[data-coach-open]'); await co.waitForTimeout(700);
    a = await co.evaluate(() => ({ open: !!document.querySelector('.mtc-veil.on [role=dialog]'), left: document.getElementById('mtcLeft').textContent, fine: document.querySelector('.mtc-fine').textContent }));
    check(a.open && /\d/.test(a.left) && /AI/.test(a.fine), 'the dialog opens with the allowance left and says the text is written by AI', a);
    await co.click('.mtc-go'); await co.waitForTimeout(300);
    check((await co.textContent('.mtc-err')).trim().length > 5, 'an empty answer is refused in the dialog');
    await co.click('[data-kind="cv"]'); await co.fill('#mtcA', 'Responsible for managing social media accounts for the student association');
    await co.click('.mtc-go'); await co.waitForSelector('.mtc-out:not([hidden])', { timeout: 15000 }).catch(() => {});
    a = await co.evaluate(() => { const o = document.querySelector('.mtc-out'); return { shown: !o.hidden, chips: o.querySelectorAll('.mtc-chip').length, rewrite: !!o.querySelector('.mtc-rw'), lists: o.querySelectorAll('li').length, markup: !!o.querySelector('img,script') }; });
    check(a.shown && a.chips === 4 && a.rewrite && a.lists >= 2 && !a.markup, 'a CV bullet review shows its checks, points and a rewrite', a);
    await shot(co, '21-coach-dialog');
    await co.keyboard.press('Escape'); await co.waitForTimeout(200);
    /* The Rope's report rows: the module is fetched from the path rope-sim.js uses, then drawn into a container */
    await co.goto(B + '/products/the-rope/', { waitUntil: 'load' }); await co.waitForTimeout(1500);
    a = await co.evaluate(async () => {
      await new Promise((res, rej) => { const s2 = document.createElement('script'); s2.src = '../../js/mt-coach.js'; s2.onload = res; s2.onerror = rej; document.head.appendChild(s2); });
      const box = document.createElement('div'); box.id = 'qaDebrief'; document.body.appendChild(box);
      window.MT_COACH.attachDebrief(box, [{ q: 'Tell me about a time you worked under pressure.', a: 'In my final year I led a five-person team for a case competition. Two weeks before the deadline our analyst left, so I rebuilt the model myself and we reached the final.' }, { q: 'Too short', a: 'ok' }], 'en');
      await new Promise(r2 => setTimeout(r2, 900));
      return { rows: box.querySelectorAll('.mtc-row').length };
    });
    check(a.rows === 1, 'the report offers a review for each answer long enough to review', a);
    await co.evaluate(() => { document.querySelector('#qaDebrief').scrollIntoView(); document.querySelector('#qaDebrief .mtc-row button').click(); }); await co.waitForTimeout(700);
    a = await co.evaluate(() => ({ q: document.getElementById('mtcQ').value, t: document.getElementById('mtcA').value.length }));
    check(/pressure/.test(a.q) && a.t > 100, 'the dialog opens with the question and the answer filled in', a);
    await co.click('.mtc-go'); await co.waitForSelector('.mtc-out:not([hidden])', { timeout: 15000 }).catch(() => {});
    a = await co.evaluate(() => ({ chips: document.querySelectorAll('.mtc-out .mtc-chip').length, last: document.querySelector('#qaDebrief .mtc-row small').textContent, saved: !!localStorage.getItem('mt_rope_coach') }));
    check(a.chips === 4 && /\d{4}-\d{2}-\d{2}/.test(a.last) && a.saved, 'the interview review shows the four parts, and the last review is remembered', a);
    await ctx3.request.post(B + '/api/admin/coach/mode', { headers: adminHdr, data: { mode: 'off' } });
    const ad4 = await ctx3.newPage(); watch(ad4, 'admin-coach');
    await ad4.addInitScript(t => { try { sessionStorage.setItem('mt-admin-token', t); } catch (e) {} }, process.env.ADMIN_TOKEN || 'local-admin-token');
    await ad4.goto(B + '/admin/', { waitUntil: 'load' }); await ad4.waitForTimeout(1500);
    await ad4.click('#coach summary'); await ad4.waitForTimeout(1200);
    await ad4.selectOption('#coLang', 'id'); await ad4.click('#coSample'); await ad4.click('#coRun'); await ad4.waitForTimeout(2000);
    a = await ad4.evaluate(() => ({ state: document.getElementById('coState').textContent, out: document.getElementById('coOut').textContent, toggle: document.getElementById('coToggle').textContent, rows: document.querySelectorAll('#coUsage tbody tr').length }));
    check(/Neurons/.test(a.state) && /WHAT TO CHANGE/.test(a.out) && /Open the coach/.test(a.toggle) && a.rows >= 1, 'the admin page shows the budget, runs a trial and offers the switch', a);
    await shot(ad4, '22-admin-coach');
    await ad4.close(); await co.close();
  }

  /* ── access code: a sponsor's link, sign-up, the code applied on arrival, and Settings ── */
  if (process.env.ADMIN_TOKEN !== '') {
    const adminHdr2 = { origin: B, authorization: 'Bearer ' + (process.env.ADMIN_TOKEN || 'local-admin-token') };
    const nb = await (await ctx3.request.post(B + '/api/admin/batches', { headers: adminHdr2, data: { label: 'Journey Campus ' + stamp, sponsor: 'Journey Sponsor', seats: 3, access_ends_at: new Date(Date.now() + 60 * 86400000).toISOString() } })).json();
    check(nb.ok && nb.batch && nb.batch.code, 'a batch is created for the journey', nb);
    const sctx = await br.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    await sctx.addInitScript(() => { try { localStorage.setItem('metanoia_onboarded', 'true'); } catch (e) {} });
    const sp = await sctx.newPage(); watch(sp, 'access-code');
    await sp.goto(B + '/register?code=' + nb.batch.code, { waitUntil: 'load' }); await sp.waitForTimeout(1200);
    a = await sp.evaluate(() => (document.getElementById('codeNote') || {}).textContent || '');
    check(a.includes(nb.batch.code), 'the sign-up page says the code will be applied', a);
    await sp.fill('#firstName', 'Sponsored Member'); await sp.fill('#email', `sponsored+${stamp}@example.test`); await sp.fill('#password', pw);
    if (await sp.isVisible('#confirm')) await sp.fill('#confirm', pw);
    await sp.evaluate(() => { const t = document.getElementById('terms'); if (t && !t.checked) t.click(); });
    await shot(sp, '23-register-with-code');
    await sp.click('#regForm button[type=submit]');
    await sp.waitForURL(x => /portal/.test(new URL(x).pathname), { timeout: 15000 }).catch(() => {});
    await sp.waitForTimeout(3000);
    a = await sp.evaluate(() => ({ path: location.pathname, banner: [...document.querySelectorAll('[role=status]')].map(x => x.textContent).join(' | '), pending: localStorage.getItem('mt-pending-code') }));
    check(/portal/.test(a.path) && /Journey Campus/.test(a.banner) && !a.pending, 'after sign-up the code is applied and the member is told', a);
    await shot(sp, '24-code-applied');
    await sp.goto(B + '/settings', { waitUntil: 'load' }); await sp.waitForTimeout(1500);
    await sp.click('#subnav button[data-set="subscription"]'); await sp.waitForTimeout(1500);
    a = await sp.evaluate(() => ({ box: !!document.getElementById('code-in'), list: (document.getElementById('code-list') || {}).textContent || '', over: document.documentElement.scrollWidth > window.innerWidth + 1 }));
    check(a.box && /Journey Campus/.test(a.list) && /Journey Sponsor/.test(a.list) && !a.over, 'Settings shows the code on the account', a);
    await sp.fill('#code-in', 'MTN-AAAA-AAAA'); await sp.click('#code-btn'); await sp.waitForTimeout(1200);
    check(/not valid/.test(await sp.textContent('#code-msg')), 'a wrong code typed in Settings is refused with a reason');
    await shot(sp, '25-settings-code');
    await sctx.close();
    const ad5 = await ctx3.newPage(); watch(ad5, 'admin-batches');
    await ad5.addInitScript(t => { try { sessionStorage.setItem('mt-admin-token', t); } catch (e) {} }, process.env.ADMIN_TOKEN || 'local-admin-token');
    await ad5.goto(B + '/admin/', { waitUntil: 'load' }); await ad5.waitForTimeout(1500);
    await ad5.click('#batches summary'); await ad5.waitForTimeout(1200);
    a = await ad5.evaluate(l => { const tr = [...document.querySelectorAll('#bcRows tbody tr')].find(x => x.textContent.includes(l)); if (!tr) return null; tr.querySelector('[data-report]').click(); return { text: tr.textContent.replace(/\s+/g, ' ') }; }, 'Journey Campus ' + stamp);
    await ad5.waitForTimeout(1200);
    const repText = await ad5.textContent('#bcReport');
    check(a && /1 of 3/.test(a.text) && /Seats used: 1 of 3/.test(repText) && /Withheld|No member is named/.test(repText), 'the admin page lists the batch with seats used and shows its report', { a, repText: repText.slice(0, 120) });
    await shot(ad5, '26-admin-batches');
    await ad5.close();
  }

  /* ── notice bar: the owner's line on public pages and the portal, in both languages, closed for good per wording ── */
  if (process.env.ADMIN_TOKEN !== '') {
    const ah = { origin: B, authorization: 'Bearer ' + (process.env.ADMIN_TOKEN || 'local-admin-token') };
    const nbody = { on: true, en: 'Journey notice ' + stamp, id: 'Pengumuman perjalanan ' + stamp, href: '/pricing', link_en: 'See plans', link_id: 'Lihat paket', until: new Date(Date.now() + 3 * 86400000).toISOString().slice(0, 10) };
    const nr = await (await ctx3.request.post(B + '/api/admin/notice', { headers: ah, data: nbody })).json();
    check(nr.ok && nr.live, 'the owner switches the notice on', nr);
    const nctx = await br.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    const np = await nctx.newPage(); watch(np, 'notice');
    const noticeText = () => np.evaluate(() => { const n = document.getElementById('mtNotice'); return n ? n.textContent : ''; });
    await np.goto(B + '/', { waitUntil: 'load' }); await np.waitForSelector('#mtNotice', { timeout: 8000 }).catch(() => {});
    a = await noticeText();
    check(a.includes('Journey notice ' + stamp) && a.includes('See plans'), 'a visitor sees the notice on the home page', a);
    a = await np.evaluate(() => { const n = document.getElementById('mtNotice'); if (!n) return false; const r = n.getBoundingClientRect(); return r.left >= 0 && r.right <= innerWidth + 1 && r.bottom <= innerHeight + 1 && r.height < 160; });
    check(a, 'the notice fits a phone screen');
    await shot(np, 'notice-home-phone');
    await np.evaluate(() => { document.documentElement.lang = 'id'; }); await np.waitForTimeout(250);
    a = await noticeText();
    check(a.includes('Pengumuman perjalanan ' + stamp) && a.includes('Lihat paket'), 'the notice follows the page language', a);
    await np.click('#mtNotice button');
    await np.goto(B + '/pricing', { waitUntil: 'load' }); await np.waitForTimeout(1200);
    check(!(await np.$('#mtNotice')), 'a closed notice stays closed on the next page');
    await ctx3.request.post(B + '/api/admin/notice', { headers: ah, data: { ...nbody, en: 'Journey notice two ' + stamp } });
    await np.evaluate(() => { try { sessionStorage.removeItem('mt-notice'); } catch (e) {} });   /* a new visit: the ten-minute copy is gone */
    await np.goto(B + '/pricing?fresh=' + stamp, { waitUntil: 'load' }); await np.waitForSelector('#mtNotice', { timeout: 8000 }).catch(() => {});
    a = await noticeText();
    check(a.includes('Journey notice two ' + stamp), 'new wording shows again after a visitor closed the old one', a);
    const pn = await ctx3.newPage(); watch(pn, 'notice-portal');
    await pn.addInitScript(() => { try { localStorage.setItem('metanoia_onboarded', 'true'); } catch (e) {} });
    await pn.goto(B + '/portal', { waitUntil: 'load' }); await pn.waitForSelector('#mtNotice', { timeout: 8000 }).catch(() => {});
    a = await pn.evaluate(() => { const n = document.getElementById('mtNotice'); return n ? n.textContent : ''; });
    check(a.includes('Journey notice two ' + stamp), 'a member sees the notice in the portal', a);
    await shot(pn, 'notice-portal');
    await ctx3.request.post(B + '/api/admin/notice', { headers: ah, data: { ...nbody, on: false } });
    await pn.evaluate(() => { try { sessionStorage.removeItem('mt-notice'); } catch (e) {} });

    /* ── a letter reaches the portal's Updates panel as plain text ── */
    if (process.env.D1_SQLITE) {
      const { execFileSync } = require('child_process');
      const sql = (q, args = []) => execFileSync('python3', ['-c', 'import sqlite3,sys,json\nc=sqlite3.connect(sys.argv[1],timeout=10)\nc.execute(sys.argv[2],json.loads(sys.argv[3]))\nc.commit()', process.env.D1_SQLITE, q, JSON.stringify(args)]);
      sql("UPDATE letters SET status = 'cancelled' WHERE status IN ('queued', 'sending')");
      sql("DELETE FROM mail_log WHERE kind = 'letter'");
      sql("UPDATE users SET marketing_opt_in = 0");
      sql("UPDATE leads SET unsubscribed_at = COALESCE(unsubscribed_at, '2026-01-01T00:00:00Z') WHERE kind = 'newsletter'");
      sql("UPDATE users SET marketing_opt_in = 1, unsubscribed_at = NULL, email_verified_at = COALESCE(email_verified_at, ?) WHERE email = ?", [new Date().toISOString(), `xss+${stamp}@example.test`]);
      const lt = await (await ctx3.request.post(B + '/api/admin/letters', { headers: ah, data: { subject_en: 'Journey letter ' + stamp, subject_id: 'Surat perjalanan ' + stamp, body_en: 'Line one.\n\n<img src=x onerror="window.__ltx=1"> stays text.', body_id: 'Baris satu.\n\nTetap teks.', audience: 'members' } })).json();
      check(lt.ok && lt.letter.status === 'draft', 'the owner drafts a letter', lt);
      const lq = await (await ctx3.request.post(B + '/api/admin/letters/' + lt.letter.id + '/queue', { headers: ah, data: {} })).json();
      const lr = await (await ctx3.request.post(B + '/api/admin/letters/run', { headers: ah, data: {} })).json();
      check(lq.ok && lq.letter.total === 1 && lr.ok && lr.run.sent === 1 && lr.run.finished, 'the letter goes to the one member who opted in', { lq, lr });
      await pn.goto(B + '/portal', { waitUntil: 'load' }); await pn.waitForTimeout(1500);
      check(await pn.evaluate(() => !!document.querySelector('[data-nav-id="updates"] .nav-badge-dot')), 'the portal marks Updates as new');
      await pn.click('[data-nav-id="updates"]'); await pn.waitForTimeout(700);
      a = await pn.evaluate(() => (document.getElementById('updates-list') || {}).textContent || '');
      check(a.includes('Journey letter ' + stamp) && a.includes('stays text') && a.includes('<img src=x'), 'the letter is in the Updates panel', a.slice(0, 300));
      check(await pn.evaluate(() => !window.__ltx && !document.querySelector('#updates-list img')), 'markup in a letter is shown as text, never run');
      await shot(pn, 'portal-updates-letter');
      await pn.evaluate(() => { localStorage.setItem('mtLang', 'id'); localStorage.setItem('mt-lang', 'id'); });
      await pn.goto(B + '/portal', { waitUntil: 'load' }); await pn.waitForTimeout(1500);
      await pn.click('[data-nav-id="updates"]'); await pn.waitForTimeout(700);
      a = await pn.evaluate(() => (document.getElementById('updates-list') || {}).textContent || '');
      check(a.includes('Surat perjalanan ' + stamp) && a.includes('Pelatih AI (beta)'), 'the Updates panel reads in Bahasa Indonesia', a.slice(0, 300));
      await pn.evaluate(() => { localStorage.setItem('mtLang', 'en'); localStorage.setItem('mt-lang', 'en'); });
    }

    /* ── admin page: the Notice bar and Letters panels load ── */
    const ad4 = await ctx3.newPage(); watch(ad4, 'admin-letters');
    await ad4.addInitScript(t => { try { sessionStorage.setItem('mt-admin-token', t); } catch (e) {} }, process.env.ADMIN_TOKEN || 'local-admin-token');
    await ad4.goto(B + '/admin/', { waitUntil: 'load' }); await ad4.waitForTimeout(1500);
    await ad4.evaluate(() => { document.getElementById('notice').open = true; document.getElementById('letters').open = true; });
    await ad4.waitForTimeout(1500);
    a = await ad4.evaluate(() => ({ nt: document.getElementById('ntEn').value, sum: document.getElementById('ltSummary').textContent, rows: document.getElementById('ltRows').textContent }));
    check(a.nt.includes('Journey notice ' + stamp) && /would receive a letter today/.test(a.sum) && /Up to \d+ messages go out a day/.test(a.rows), 'the admin page shows the notice and the letters with today\'s budget', a);
    await ad4.evaluate(() => document.getElementById('letters').scrollIntoView());
    await shot(ad4, 'admin-letters');
    await ad4.close(); await pn.close(); await nctx.close();
  }

  /* ── lesson analytics: a member opens a lesson, answers a quiz question and completes the lesson ── */
  {
    /* this member declined analytics earlier in the journey: opening a lesson then reports nothing */
    const lq = await ctx3.newPage(); watch(lq, 'lesson-events-declined');
    const quiet = [];
    lq.on('request', q => { if (/\/api\/events$/.test(q.url()) && /lms\./.test(q.postData() || '')) quiet.push(1); });
    await lq.goto(B + '/products/the-rope/', { waitUntil: 'load' }); await lq.waitForTimeout(1200);
    const declined = await lq.evaluate(() => localStorage.getItem('mt-consent-analytics') === '0');
    await lq.evaluate(() => window.MT_LMS_PLAYER.open('1.1')); await lq.waitForTimeout(1500);
    await lq.evaluate(() => { if (window.MT && window.MT.flush) window.MT.flush(false); }); await lq.waitForTimeout(1000);
    check(declined && quiet.length === 0, 'a member who declined analytics sends no lesson events', { declined, sent: quiet.length });
    await lq.close();
    const lp = await ctx3.newPage(); watch(lp, 'lesson-events');
    /* analytics allowed again, and as if this browser read a sample before the account */
    await lp.addInitScript(() => { try { localStorage.removeItem('mt-consent-analytics'); localStorage.setItem('mt-sample-seen', 'the-rope'); } catch (e) {} });
    const seen = [];
    lp.on('request', q => { if (/\/api\/events$/.test(q.url())) { try { JSON.parse(q.postData() || '{}').events.forEach(e => seen.push(e)); } catch (e) {} } });
    await lp.goto(B + '/products/the-rope/', { waitUntil: 'load' }); await lp.waitForTimeout(1500);
    await lp.evaluate(() => window.MT_LMS_PLAYER.open('1.1')); await lp.waitForSelector('.lms-check .lms-opt', { timeout: 10000 }).catch(() => {});
    await lp.evaluate(() => { const o = document.querySelector('.lms-check .lms-opt'); if (o) o.click(); });
    await lp.evaluate(() => { const b = document.querySelector('.lmsp-foot .lms-complete'); if (b) b.click(); });
    await lp.waitForTimeout(600);
    await lp.evaluate(() => { if (window.MT && window.MT.flush) window.MT.flush(false); });
    await lp.waitForTimeout(1500);
    const names = seen.map(e => e.name), of = n => seen.find(e => e.name === n);
    check(['lms.lesson.opened', 'lms.check.answered', 'lms.lesson.completed', 'lms.sample.converted'].every(n => names.includes(n)), 'the player reports lesson opened, quiz answered, lesson completed and the return after a sample', names);
    a = of('lms.check.answered');
    check(!!a && a.props.pillar === 'the-rope' && a.props.lesson === '1.1' && a.props.q === 1 && typeof a.props.correct === 'boolean' && !a.props.sample, 'a quiz answer carries the lesson, the question number and whether it was right', a && a.props);
    check(await lp.evaluate(() => localStorage.getItem('mt-sample-seen')) === null, 'the return after a sample is reported once');
    await lp.close();
    if (process.env.ADMIN_TOKEN !== '') {
      const ad5 = await ctx3.newPage(); watch(ad5, 'admin-lessons');
      await ad5.addInitScript(t => { try { sessionStorage.setItem('mt-admin-token', t); } catch (e) {} }, process.env.ADMIN_TOKEN || 'local-admin-token');
      await ad5.goto(B + '/admin/', { waitUntil: 'load' }); await ad5.waitForTimeout(1500);
      await ad5.evaluate(() => { document.getElementById('content').open = true; }); await ad5.waitForTimeout(2500);
      await ad5.selectOption('#ctProduct', 'the-rope'); await ad5.waitForTimeout(300);
      a = await ad5.evaluate(() => ({ rows: document.querySelectorAll('#ctRows tbody tr').length, first: (document.querySelector('#ctRows tbody tr') || {}).innerText || '', stats: document.getElementById('ctStats').innerText, msg: document.getElementById('ctMsg').textContent }));
      check(a.rows === 55 && /^1\.1/.test(a.first) && /STARTED/i.test(a.stats) && /recorded since/.test(a.msg), 'the admin page lists every lesson with completion, opens and quiz results', { rows: a.rows, first: a.first.slice(0, 80), msg: a.msg });
      await ad5.evaluate(() => document.getElementById('content').scrollIntoView());
      await shot(ad5, 'admin-lessons');
      await ad5.close();
    }
  }

  /* ── calendar and reminders: a calendar file from The Compass, the synced address, reminders on this device ── */
  {
    const day = n => { const d = new Date(Date.now() + n * 86400000); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
    const apps = [{ id: 'j1', company: 'Journey Co ' + stamp, role: 'Analyst', status: 'active', stage: 7, applicationDate: day(-5), deadline: day(3), nextAction: 'Prepare five stories', nextActionDue: day(1) }];
    const goals = [{ id: 'jg1', title: 'Finish the CV modules', due: day(14), done: false, milestones: [] }];
    const cp = await ctx3.newPage(); watch(cp, 'reminders');
    await cp.addInitScript(d => { try { localStorage.setItem('compass_applications', JSON.stringify(d.apps)); localStorage.setItem('compass_goals', JSON.stringify(d.goals)); sessionStorage.setItem('compass_active_tab', 'course-plotter'); localStorage.setItem('metanoia_onboarded', 'true'); } catch (e) {} }, { apps, goals });
    await cp.goto(B + '/products/the-compass/', { waitUntil: 'load' }); await cp.waitForTimeout(1800);
    await cp.click('#calBtn'); await cp.waitForSelector('.mtr-veil', { timeout: 8000 }).catch(() => {});
    a = await cp.evaluate(() => { const v = document.querySelector('.mtr-veil'), b = document.getElementById('mtrDl'); return { open: !!v, dl: b ? b.textContent : '', disabled: b ? b.disabled : true, role: v ? v.querySelector('[role="dialog"]').getAttribute('aria-modal') : '' }; });
    check(a.open && /\(3\)/.test(a.dl) && !a.disabled && a.role === 'true', 'The Compass opens the calendar dialog with the three dates it holds', a);
    const dlp = cp.waitForEvent('download', { timeout: 8000 }).catch(() => null);
    await cp.click('#mtrDl');
    const dl = await dlp, file = dl ? fs.readFileSync(await dl.path(), 'utf8') : '';
    const flat = file.replace(/\r\n /g, '');
    check(!!dl && /\.ics$/.test(dl.suggestedFilename()) && flat.startsWith('BEGIN:VCALENDAR') && flat.includes('Journey Co ' + stamp) && flat.includes('Prepare five stories') && flat.includes('Finish the CV modules') && (flat.match(/BEGIN:VEVENT/g) || []).length === 3 && flat.includes('DTSTART;VALUE=DATE:' + day(3).replace(/-/g, '')),
      'the calendar file holds the deadline, the next step and the goal date', flat.slice(0, 200));
    await cp.waitForSelector('[data-feed="on"]', { timeout: 8000 }).catch(() => {});
    await cp.click('[data-feed="on"]').catch(() => {}); await cp.waitForSelector('#mtrUrl', { timeout: 8000 }).catch(() => {});
    a = await cp.evaluate(() => { const u = document.getElementById('mtrUrl'), w = document.querySelector('#mtrFeed a[href^="webcal:"]'); return { url: u ? u.value : '', webcal: !!w, msg: document.getElementById('mtrMsg').textContent }; });
    check(/\/api\/calendar\/feed\.ics\?u=[0-9a-f]{32}&k=[0-9a-f]{40}$/.test(a.url) && a.webcal, 'a member turns on a private calendar address and can open it in a calendar app', a);
    if (a.url) { const fu = new URL(a.url), fr = await ctx3.request.get(B + fu.pathname + fu.search); check(fr.ok() && /BEGIN:VCALENDAR/.test(await fr.text()), 'the address answers with a calendar', fr.status()); }
    /* headless browsers differ: some leave the notification question open, some report it as already blocked.
       Either way the section must explain itself, and nothing may be switched on without permission. */
    await cp.waitForFunction(() => { const b = document.getElementById('mtrPush'); return b && !b.hidden; }, null, { timeout: 8000 }).catch(() => {});
    a = await cp.evaluate(() => { const b = document.querySelector('[data-push="on"]'); return { offered: !!b, perm: Notification.permission, text: (document.getElementById('mtrPush') || {}).innerText || '' }; });
    check(/Reminders on this device/.test(a.text) && (a.offered || (a.perm === 'denied' && /blocked/.test(a.text))), 'reminders on this device are offered, or the dialog says notifications are blocked', { offered: a.offered, perm: a.perm, text: a.text.slice(0, 80) });
    if (a.offered) {
      await cp.click('[data-push="on"]').catch(() => {});
      await cp.waitForFunction(() => /stay off|could not/.test(document.getElementById('mtrMsg').textContent), null, { timeout: 4000 }).catch(() => {});
    }
    a = await cp.evaluate(() => ({ msg: document.getElementById('mtrMsg').textContent, perm: Notification.permission, on: !!document.querySelector('[data-push="off"]') }));
    const pushState = await (await ctx3.request.get(B + '/api/push')).json();
    check(pushState.devices === 0 && a.perm !== 'granted' && !a.on, 'without permission for notifications, reminders stay off', { msg: a.msg, perm: a.perm, devices: pushState.devices });
    await cp.setViewportSize({ width: 390, height: 844 }); await cp.waitForTimeout(300);
    a = await cp.evaluate(() => { const c = document.querySelector('.mtr-card').getBoundingClientRect(); return c.left >= 0 && c.right <= innerWidth + 1 && document.documentElement.scrollWidth <= innerWidth + 1; });
    check(a, 'the dialog fits a phone screen');
    await shot(cp, 'reminders-dialog-phone');
    await cp.keyboard.press('Escape'); await cp.waitForTimeout(200);
    check(!(await cp.$('.mtr-veil')), 'Escape closes the dialog');
    await cp.setViewportSize({ width: 1366, height: 860 });
    /* one application: straight to a file */
    await cp.evaluate(() => { const c = document.querySelector('[data-id="j1"], .app-card, .ac-card, tr[data-id]'); if (c) c.click(); }); await cp.waitForTimeout(600);
    if (await cp.$('#drCal')) {
      const d2p = cp.waitForEvent('download', { timeout: 8000 }).catch(() => null);
      await cp.click('#drCal'); const d2 = await d2p;
      const f2 = d2 ? fs.readFileSync(await d2.path(), 'utf8') : '';
      check(!!d2 && (f2.match(/BEGIN:VEVENT/g) || []).length === 2 && /journey-co/.test(d2.suggestedFilename()), 'one application downloads its own two dates', d2 && d2.suggestedFilename());
    } else check(false, 'the application drawer offers its dates for the calendar');
    await cp.close();
    /* the service worker turns a push message into a notification; a link that leaves the site is replaced */
    {
      const wp = await ctx3.newPage(); watch(wp, 'sw-push');
      await wp.goto(B + '/pricing', { waitUntil: 'load' });
      await wp.evaluate(() => navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(() => navigator.serviceWorker.ready));
      const sw = ctx3.serviceWorkers()[0] || await ctx3.waitForEvent('serviceworker', { timeout: 8000 }).catch(() => null);
      const calls = sw ? await sw.evaluate(async () => {
        const seen = [];
        self.registration.showNotification = (title, o) => { seen.push({ title, body: o.body, tag: o.tag, url: o.data.url }); return Promise.resolve(); };
        self.dispatchEvent(new PushEvent('push', { data: JSON.stringify({ title: 'Today in The Compass', body: 'Tomorrow: deadline QA Co', url: '/products/the-compass/', tag: 'compass-x' }) }));
        self.dispatchEvent(new PushEvent('push', { data: JSON.stringify({ title: 'x', url: '//evil.example/' }) }));
        self.dispatchEvent(new PushEvent('push', { data: 'not json' }));
        await new Promise(r => setTimeout(r, 300));
        return seen;
      }).catch(e => [{ title: String(e) }]) : [];
      check(calls.length === 3 && calls[0].title === 'Today in The Compass' && calls[0].body === 'Tomorrow: deadline QA Co' && calls[0].url === '/products/the-compass/' && calls[1].url === '/portal' && calls[2].title === 'Metanoia Labs',
        'the service worker shows a pushed reminder and never opens an address outside the site', calls);
      await wp.close();
    }
    /* Settings: the same dialog, in Bahasa Indonesia */
    const sp2 = await ctx3.newPage(); watch(sp2, 'reminders-settings');
    await sp2.addInitScript(() => { try { localStorage.setItem('mtLang', 'id'); localStorage.setItem('mt-lang', 'id'); } catch (e) {} });
    await sp2.goto(B + '/settings', { waitUntil: 'load' }); await sp2.waitForTimeout(1500);
    await sp2.click('[data-set="notifications"]'); await sp2.waitForTimeout(400);
    await sp2.click('#nf-remind'); await sp2.waitForSelector('.mtr-veil', { timeout: 8000 }).catch(() => {});
    await sp2.waitForSelector('#mtrUrl', { timeout: 8000 }).catch(() => {});
    a = await sp2.evaluate(() => ({ t: (document.getElementById('mtrT') || {}).textContent || '', url: !!document.getElementById('mtrUrl') }));
    check(a.t === 'Kalender dan pengingat' && a.url, 'Settings opens the same dialog in Bahasa Indonesia with the address still on', a);
    await shot(sp2, 'reminders-settings-id');
    await sp2.evaluate(() => { try { localStorage.setItem('mtLang', 'en'); localStorage.setItem('mt-lang', 'en'); } catch (e) {} });
    await sp2.close();
    if (process.env.ADMIN_TOKEN !== '') {
      const ad6 = await ctx3.newPage(); watch(ad6, 'admin-reminders');
      await ad6.addInitScript(t => { try { sessionStorage.setItem('mt-admin-token', t); } catch (e) {} }, process.env.ADMIN_TOKEN || 'local-admin-token');
      await ad6.goto(B + '/admin/', { waitUntil: 'load' }); await ad6.waitForTimeout(1500);
      await ad6.evaluate(() => { document.getElementById('reminders').open = true; }); await ad6.waitForTimeout(1500);
      await ad6.click('#rmGen'); await ad6.waitForTimeout(800);
      a = await ad6.evaluate(() => ({ sum: document.getElementById('rmSummary').textContent, pub: document.getElementById('rmPub').value, priv: document.getElementById('rmPriv').value, type: document.getElementById('rmPriv').type, stats: document.getElementById('rmStats').innerText }));
      check(/calendar feeds?$/.test(a.sum) && a.pub.length === 87 && a.pub[0] === 'B' && a.priv.length === 43 && a.type === 'password' && /DEVICES/i.test(a.stats), 'the admin page shows reminder numbers and makes a key pair in the browser', { sum: a.sum, pub: a.pub.length, priv: a.priv.length });
      await ad6.evaluate(() => { document.getElementById('rmPriv').value = ''; document.getElementById('reminders').scrollIntoView(); });
      await shot(ad6, 'admin-reminders');
      await ad6.close();
    }
  }

  /* ── shareable readiness profile: switched on in Settings, read by a stranger, switched off again ── */
  {
    /* this member's display name is markup (the hostile-name account above): the public page must show it as text */
    await ctx3.request.post(B + '/api/events', { headers: { origin: B }, data: { events: [{ name: 'assessment.career_map.submitted', props: { scores: { total: 64, band: 'Mid-Mountain', dims: [60, 60, 70, 65, 65] } } }] } });
    const st = await ctx3.newPage(); watch(st, 'profile-settings');
    await st.goto(B + '/settings?tab=public', { waitUntil: 'load' }); await st.waitForSelector('#pp-on', { timeout: 10000 }).catch(() => {});
    a = await st.evaluate(() => ({ tab: (document.querySelector('#subnav button.active') || {}).dataset ? document.querySelector('#subnav button.active').dataset.set : '', on: (document.getElementById('pp-on') || {}).checked, link: !!document.getElementById('pp-url'), text: (document.getElementById('pp-box') || {}).innerText || '' }));
    check(a.tab === 'public' && a.on === false && !a.link && /Mid-Mountain/.test(a.text), 'Settings opens the Public profile tab from a link, off, with the band it could show', { tab: a.tab, on: a.on, text: a.text.slice(0, 120) });
    await st.click('#pp-on'); await st.click('#pp-save'); await st.waitForSelector('#pp-url', { timeout: 8000 }).catch(() => {});
    const purl = await st.evaluate(() => (document.getElementById('pp-url') || {}).value || '');
    check(/\/p\/[A-Za-z0-9_-]{14}$/.test(purl), 'switching it on gives the member a link to copy and share', purl);
    await shot(st, 'profile-settings');
    const ppath = purl ? new URL(purl).pathname : '/p/none';
    const vctx = await br.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    const vp = await vctx.newPage(); watch(vp, 'profile-public');
    await vp.goto(B + ppath, { waitUntil: 'load' }); await vp.waitForTimeout(800);
    a = await vp.evaluate(() => ({ name: (document.getElementById('pName') || {}).textContent || '', band: (document.getElementById('bLabel') || {}).textContent || '', steps: document.querySelectorAll('#bSteps i.on').length, title: document.title, xss: !!window.__xss, img: !!document.querySelector('img[src="x"]'),
      og: (document.querySelector('meta[property="og:title"]') || { content: '' }).content, robots: (document.querySelector('meta[name="robots"]') || { content: '' }).content, over: document.documentElement.scrollWidth > innerWidth + 1, sheet: !document.getElementById('sheet').hidden }));
    check(a.sheet && a.name.includes('<img src=x') && a.band === 'Mid-Mountain' && a.steps === 3 && /noindex/.test(a.robots) && !a.over, 'a stranger on a phone sees the name and the band, and the page is not indexed', { name: a.name, band: a.band, steps: a.steps });
    check(!a.xss && !a.img && a.og.includes('<img src=x') && a.title.includes('Metanoia Labs'), 'a display name with markup is inert in the page, its title and its link preview', { xss: a.xss, img: a.img, og: a.og.slice(0, 60) });
    await vp.click('[data-lang="id"]'); await vp.waitForTimeout(200);
    a = await vp.evaluate(() => ({ lv: (document.getElementById('bLevel') || {}).textContent || '', v: (document.getElementById('pVerified') || {}).textContent || '', wa: (document.getElementById('waBtn') || {}).href || '' }));
    check(/Tingkat 3 dari 5/.test(a.lv) && /Dibaca dari akun/.test(a.v) && /^https:\/\/wa\.me\/\?text=/.test(a.wa) && a.wa.includes(encodeURIComponent(ppath)), 'the profile reads in Bahasa Indonesia and offers WhatsApp with its own link', a);
    await shot(vp, 'profile-public-phone');
    /* the older address form asks the API instead of carrying the data */
    await vp.goto(B + '/profile?p=' + ppath.split('/').pop(), { waitUntil: 'load' }); await vp.waitForFunction(() => !document.getElementById('sheet').hidden, null, { timeout: 8000 }).catch(() => {});
    check(await vp.evaluate(() => !document.getElementById('sheet').hidden && document.getElementById('bLabel').textContent === 'Mid-Mountain'), 'the static address form shows the same profile');
    await st.click('#pp-on'); await st.click('#pp-save'); await st.waitForFunction(() => !document.getElementById('pp-url'), null, { timeout: 8000 }).catch(() => {});
    const gone = await vctx.request.get(B + ppath);
    await vp.goto(B + ppath, { waitUntil: 'load' }); await vp.waitForTimeout(500);
    a = await vp.evaluate(() => ({ empty: !document.getElementById('empty').hidden, sheet: !document.getElementById('sheet').hidden }));
    check(gone.status() === 404 && a.empty && !a.sheet, 'once switched off, the link shows that the profile is not available', { status: gone.status(), ...a });
    await vctx.close(); await st.close();
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
