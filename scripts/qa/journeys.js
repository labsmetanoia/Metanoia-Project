/* User-journey audit: navigation, search, theme/lang persistence, auth honest states, forms, directory filters,
   Mind Palace, assessment, help, portal/settings, every LMS lesson in every product, Compass. Reports PASS/FAIL/INFO. */
const { chromium } = require('playwright-core');
const http = require('http');
const B = 'http://localhost:8940';
let pass = 0, fail = 0; const check = (ok, msg) => { console.log((ok ? 'PASS ' : 'FAIL ') + msg); ok ? pass++ : fail++; };
const info = (m) => console.log('INFO ' + m);
const head = (u) => new Promise(r => { http.get(B + u, res => { r(res.statusCode); res.resume(); }).on('error', () => r(0)); });
(async () => {
  const br = await chromium.launch({ executablePath: process.env.CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const mk = async (opts) => { const ctx = await br.newContext(Object.assign({ viewport: { width: 1366, height: 860 } }, opts || {})); await ctx.addInitScript(() => { if (!localStorage.getItem('mtLang')) { localStorage.setItem('mtLang', 'en'); localStorage.setItem('mt-lang', 'en'); } if (!localStorage.getItem('mt-theme')) localStorage.setItem('mt-theme', 'dark'); }); const p = await ctx.newPage(); p.errs = []; p.on('pageerror', e => p.errs.push(e.message.slice(0, 120))); return p; };
  const ONLY = process.env.ONLY || '';
  if (!ONLY || ONLY === 'A') {
    /* ── A. link targets reachable from every public page (DOM links incl. JS-injected header/footer) ── */
    const p = await mk();
    const pages = ['/', '/pricing', '/help', '/pages/about', '/pages/student', '/pages/fresh-graduate', '/pages/early-professional', '/pages/mature-professional', '/pages/enterprise', '/pages/mentors', '/pages/mind-palace', '/login', '/register', '/legal/privacy', '/mentors/apply', '/products/the-range/', '/mind-palace/', '/mind-palace/get-hired/', '/products/the-map/range/accenture/', '/career-map-assessment'];
    const seen = new Map(); const badLinks = [];
    for (const u of pages) {
      await p.goto(B + u, { waitUntil: 'load' }); await p.waitForTimeout(600);
      const hrefs = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')).filter(h => h && !/^(#|mailto:|tel:|javascript:|https?:|\/\/)/.test(h)));
      for (const h of hrefs) {
        const abs = new URL(h, B + u).pathname;
        if (!seen.has(abs)) seen.set(abs, await head(abs));
        if (seen.get(abs) !== 200) badLinks.push(u + ' → ' + h + ' (' + seen.get(abs) + ')');
      }
    }
    check(badLinks.length === 0, 'every internal link on ' + pages.length + ' public pages resolves (' + seen.size + ' distinct targets)' + (badLinks.length ? ': ' + [...new Set(badLinks)].slice(0, 8).join(' | ') : ''));
    /* ── nav, theme, language, search on the home page ── */
    await p.goto(B + '/', { waitUntil: 'load' }); await p.waitForTimeout(800);
    let a = await p.evaluate(() => ({ nav: document.querySelectorAll('nav a, header a').length, theme: document.documentElement.getAttribute('data-theme') || document.body.getAttribute('data-theme') || localStorage.getItem('mt-theme') }));
    check(a.nav > 5, 'home header renders navigation links (' + a.nav + ')');
    await p.click('#themeBtn'); await p.waitForTimeout(300);
    let t1 = await p.evaluate(() => localStorage.getItem('mt-theme'));
    await p.reload({ waitUntil: 'load' }); await p.waitForTimeout(500);
    let t2 = await p.evaluate(() => localStorage.getItem('mt-theme') + '|' + (document.documentElement.getAttribute('data-theme') || ''));
    check(t1 === 'light' && t2.startsWith('light'), 'theme toggle switches to light and persists across reload (' + t1 + ' → ' + t2 + ')');
    await p.click('#themeBtn'); await p.waitForTimeout(200);
    await p.evaluate(() => { const b = document.getElementById('lddBtn'); if (b && b.offsetParent !== null) { b.click(); const o = document.querySelector('#lddMenu [data-l="id"]'); if (o) o.click(); } else document.getElementById('langId').click(); }); await p.waitForTimeout(500);
    let l1 = await p.evaluate(() => ({ l: localStorage.getItem('mtLang'), h1: document.querySelector('h1').textContent.trim().slice(0, 40), html: document.documentElement.lang }));
    await p.goto(B + '/pricing', { waitUntil: 'load' }); await p.waitForTimeout(1300);
    let l2 = await p.evaluate(() => ({ l: localStorage.getItem('mtLang'), h1: document.querySelector('h1').textContent.trim().slice(0, 40), html: document.documentElement.lang }));
    check(l1.l === 'id' && l2.l === 'id' && !/Everything essential/.test(l2.h1), 'language switch to Bahasa persists to the next page (' + l1.h1 + ' / ' + l2.h1 + ')');
    await p.evaluate(() => { localStorage.setItem('mtLang', 'en'); localStorage.setItem('mt-lang', 'en'); });
    await p.goto(B + '/', { waitUntil: 'load' }); await p.waitForTimeout(600);
    await p.keyboard.press('Control+k'); await p.waitForTimeout(600);
    let s = await p.evaluate(() => !!document.querySelector('.mts-veil.on'));
    if (!s) { await p.click('[data-site-search]'); await p.waitForTimeout(600); s = await p.evaluate(() => !!document.querySelector('.mts-veil.on')); }
    await p.keyboard.type('interview'); await p.waitForTimeout(1200);
    a = await p.evaluate(() => { const items = [...document.querySelectorAll('.mts-list a, .mts-list [role=option]')]; return { n: items.length, first: items[0] ? (items[0].getAttribute('href') || items[0].textContent.trim().slice(0, 60)) : '', empty: (document.querySelector('.mts-empty') || {}).textContent || '' }; });
    check(s && a.n >= 3, 'site search opens and returns results for "interview" (' + a.n + ', first: ' + a.first + ') ' + a.empty);
    if (a.n) { await p.keyboard.press('Enter'); await p.waitForTimeout(800); check(await p.evaluate(() => location.pathname !== '/'), 'Enter on a search result navigates (' + p.url().replace(B, '') + ')'); }
    /* phone burger */
    const ph = await mk({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    await ph.goto(B + '/', { waitUntil: 'load' }); await ph.waitForTimeout(700);
    await ph.tap('#burger'); await ph.waitForTimeout(400);
    a = await ph.evaluate(() => { const sh = document.getElementById('sheet'); return { open: sh && sh.classList.contains('open'), links: sh ? sh.querySelectorAll('a').length : 0, visible: sh ? getComputedStyle(sh).visibility !== 'hidden' && sh.getBoundingClientRect().width > 0 : false }; });
    check(a.open && a.links > 4 && a.visible, 'phone menu opens from the burger with navigation links (' + a.links + ')');
    for (const u of ['/pages/student', '/pricing', '/pages/mind-palace', '/pages/about']) { await ph.goto(B + u, { waitUntil: 'load' }); await ph.waitForTimeout(500); const r = await ph.evaluate(() => { const b = document.getElementById('burger'); if (!b) return { nob: true }; b.click(); const sh = document.getElementById('sheet'); return { open: !!(sh && sh.classList.contains('open')), links: sh ? sh.querySelectorAll('a').length : 0 }; }); check(r.open && r.links > 3, 'phone menu on ' + u + ' (' + JSON.stringify(r) + ')'); }
    await ph.close();
    /* ── auth honest states ── */
    await p.goto(B + '/login', { waitUntil: 'load' }); await p.waitForTimeout(1200);
    a = await p.evaluate(() => ({ note: (document.getElementById('apiNote') || {}).textContent || '', noteShown: !!document.getElementById('apiNote') && getComputedStyle(document.getElementById('apiNote')).display !== 'none', guest: !!document.getElementById('guestBtn'), submitDisabled: !!(document.querySelector('#loginForm button[type=submit]') || {}).disabled }));
    check(a.noteShown && /not|belum|yet/i.test(a.note) && a.guest, 'login page states that accounts are not open on this host and offers guest preview (' + a.note.slice(0, 80) + ')');
    await p.fill('#email', 'qa@example.com'); await p.fill('#password', 'passw0rd!'); await p.click('#loginForm button[type=submit]'); await p.waitForTimeout(1200);
    a = await p.evaluate(() => ({ err: (document.getElementById('formErr') || {}).textContent || '', path: location.pathname, veil: !!document.querySelector('#successVeil.show, #successVeil.on') }));
    check(a.path === '/login' && !a.veil, 'submitting credentials without the API never fabricates a session (' + a.err.slice(0, 70) + ')');
    await p.click('#guestBtn'); await p.waitForTimeout(1500);
    a = await p.evaluate(() => ({ path: location.pathname, guest: sessionStorage.getItem('metanoia_guest'), h1: (document.querySelector('h1') || {}).textContent || '' }));
    check(/portal/.test(a.path) && a.guest === 'true', 'guest preview lands in the portal (' + a.path + ')');
    a = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(x => x.getAttribute('href')).filter(h => /products|compass|assessment|settings/.test(h)));
    check(a.length >= 4, 'portal links to products, Compass, assessment and settings (' + a.length + ')');
    const portalTargets = [...new Set(a.map(h => new URL(h, B + '/portal').pathname))]; let pbad = [];
    for (const t of portalTargets) { const c = await head(t); if (c !== 200) pbad.push(t + ' ' + c); }
    check(pbad.length === 0, 'every portal link resolves ' + pbad.join(' | '));
    await p.goto(B + '/register', { waitUntil: 'load' }); await p.waitForTimeout(1000);
    a = await p.evaluate(() => ({ note: (document.getElementById('apiNote') || {}).textContent || '', guest: !!document.getElementById('guestBtn') }));
    check(/not|belum|yet/i.test(a.note) && a.guest, 'register page states the honest account status (' + a.note.slice(0, 70) + ')');
    await p.goto(B + '/settings', { waitUntil: 'load' }); await p.waitForTimeout(800);
    a = await p.evaluate(() => ({ tabs: document.querySelectorAll('#subnav a, #subnav button').length, panel: (document.getElementById('panel') || {}).textContent.length }));
    check(a.tabs >= 2 && a.panel > 50, 'settings page renders its sections (' + a.tabs + ' tabs)');
    a = await p.evaluate(() => { const b = [...document.querySelectorAll('#subnav a, #subnav button')]; const t = b[1]; if (!t) return null; const before = document.getElementById('panel').textContent.slice(0, 40); t.click(); return { before, after: document.getElementById('panel').textContent.slice(0, 40) }; });
    check(a && a.before !== a.after, 'settings sub-navigation switches panels');
    /* ── forms ── */
    await p.goto(B + '/pages/enterprise', { waitUntil: 'load' }); await p.waitForTimeout(1200);
    await p.evaluate(() => { const f = document.getElementById('cform'); f.scrollIntoView(); f.querySelectorAll('input[required], textarea[required], select[required]').forEach(i => { if (i.tagName === 'SELECT') i.selectedIndex = 1; else if (i.type === 'email') i.value = 'qa@example.com'; else if (i.type === 'checkbox') i.checked = true; else i.value = 'QA Corp'; }); });
    await p.click('#cform button[type=submit], #cform .csubmit'); await p.waitForTimeout(1500);
    a = await p.evaluate(() => { const f = document.getElementById('cform'); const fail = f.querySelector('.cform-fail'), done = f.querySelector('.cform-done'); const m = document.getElementById('cf-mailto'); return { fail: fail && fail.offsetParent !== null ? fail.textContent.replace(/\s+/g, ' ').trim().slice(0, 90) : '', done: !!(done && done.offsetParent !== null), mail: !!(m && /^mailto:/.test(m.getAttribute('href') || '')) }; });
    check(a.fail && !a.done && a.mail, 'enterprise form without delivery says so and offers the e-mail fallback instead of a fake confirmation (' + a.fail + ')');
    await p.goto(B + '/mentors/apply', { waitUntil: 'load' }); await p.waitForTimeout(1200);
    await p.evaluate(() => { document.getElementById('applyForm').scrollIntoView(); });
    a = await p.evaluate(() => ({ note: (document.getElementById('apiNote') || {}).textContent || '', req: document.querySelectorAll('#applyForm [required]').length }));
    check(/not|belum|yet|e-mail|email/i.test(a.note) && a.req >= 4, 'mentor application states the honest delivery status (' + a.note.slice(0, 70) + ')');
    await p.fill('#name', 'QA Tester'); await p.fill('#email', 'qa@example.com'); await p.fill('#linkedin', 'https://www.linkedin.com/in/qa'); await p.fill('#expertise', 'Operations');
    await p.evaluate(() => { const y = document.getElementById('years'); if (y.tagName === 'SELECT') y.selectedIndex = 1; else y.value = '8'; const l = document.getElementById('languages'); if (l) { if (l.tagName === 'SELECT') l.selectedIndex = 1; else l.value = 'English, Bahasa'; } const av = document.getElementById('availability'); if (av && av.tagName === 'SELECT') av.selectedIndex = 1; const m = document.getElementById('motivation'); if (m) m.value = 'Because it matters, and I have time to give back every month.'; const t = document.getElementById('terms'); if (t) t.checked = true; const r = document.getElementById('role'); if (r && r.tagName === 'SELECT') r.selectedIndex = 1; else if (r) r.value = 'Head of Operations'; });
    await p.click('#applyForm button[type=submit]'); await p.waitForTimeout(1800);
    a = await p.evaluate(() => ({ ok: !!document.querySelector('#successVeil.show, #successVeil.on, .cform-done'), fallback: !!document.getElementById('mailFallback') && getComputedStyle(document.getElementById('mailFallback')).display !== 'none', err: (document.getElementById('formErr') || {}).textContent || '', fbText: (document.getElementById('mailFallback') || {}).textContent || '' }));
    check(!a.ok && (a.fallback || /e-mail|email|hello@/i.test(a.err + a.fbText)), 'mentor application without the API shows failure with an e-mail fallback, never a fake confirmation (' + (a.err || a.fbText).slice(0, 80) + ')');
    await p.goto(B + '/pricing', { waitUntil: 'load' }); await p.waitForTimeout(800);
    a = await p.evaluate(() => { const f = document.querySelector('form.sf-form'); return { has: !!f, on: f ? (f.getAttribute('onsubmit') || '') : '', wired: f ? !!f.__mtWired : false }; });
    check(a.has && /mailto:/.test(a.on) && !a.wired, 'newsletter form keeps its mailto fallback on a host without the API');
    /* ── help FAQ, Mind Palace, Range directory ── */
    await p.goto(B + '/help', { waitUntil: 'load' }); await p.waitForTimeout(500);
    a = await p.evaluate(() => { const q = document.querySelector('.faq-q'); q.click(); return q.parentElement.classList.contains('open'); });
    check(a, 'help FAQ accordion opens');
    await p.goto(B + '/pages/mind-palace', { waitUntil: 'load' }); await p.waitForTimeout(1200);
    a = await p.evaluate(() => ({ cards: document.querySelectorAll('a[href*="mind-palace/"]').length, input: !!document.getElementById('sInput') }));
    await p.click('#srchBtn'); await p.waitForTimeout(400); await p.fill('#sInput', 'salary'); await p.waitForTimeout(700);
    let s2 = await p.evaluate(() => ({ res: (document.getElementById('sRes') || {}).textContent || '', n: document.getElementById('sRes').children.length }));
    check(a.cards >= 10 && a.input && s2.n >= 1 && /salary/i.test(s2.res), 'Mind Palace library lists articles and its search finds "salary" (' + a.cards + ' cards, ' + s2.n + ' results)');
    await p.goto(B + '/mind-palace/get-hired/', { waitUntil: 'load' }); await p.waitForTimeout(500);
    a = await p.evaluate(() => [...document.querySelectorAll('a[href^="/mind-palace/"]')].map(x => x.getAttribute('href')));
    let mbad = []; for (const t of [...new Set(a)].slice(0, 60)) { if (await head(t) !== 200) mbad.push(t); }
    check(a.length >= 5 && mbad.length === 0, 'Mind Palace category page links to articles that all exist (' + a.length + ')' + mbad.join(' '));
    await p.goto(B + '/products/the-map/range/', { waitUntil: 'load' }); await p.waitForTimeout(1200);
    a = await p.evaluate(() => ({ cards: document.querySelectorAll('.card, .co-card, article').length }));
    await p.fill('#fQ', 'bank'); await p.waitForTimeout(900);
    let r2 = await p.evaluate(() => ({ cards: [...document.querySelectorAll('.card, .co-card, article')].filter(c => c.offsetParent !== null).length, names: [...document.querySelectorAll('.card, .co-card, article')].filter(c => c.offsetParent !== null).slice(0, 3).map(c => c.textContent.trim().slice(0, 25)) }));
    check(a.cards >= 10 && r2.cards > 0 && r2.cards < a.cards && r2.names.every(n => /bank|bca|bni|bri|mandiri|cimb|ocbc|hsbc|dbs|uob|maybank|panin|permata|danamon|btn|bsi|jago|neo|allo|seabank|blu|krom|superbank|jenius|citi|standard|jpmorgan|goldman|morgan|barclays|deutsche|ubs|nomura|anz|mufg|smbc|mizuho/i.test(n)), 'Range directory name filter narrows "bank" (' + a.cards + ' → ' + r2.cards + ': ' + r2.names.join(', ') + ')');
    await p.selectOption('#fInd', { index: 2 }); await p.waitForTimeout(900);
    a = await p.evaluate(() => ({ path: location.pathname, ind: document.getElementById('fInd').value, cards: [...document.querySelectorAll('.card, .co-card, article')].filter(c => c.offsetParent !== null).length }));
    check(a.cards > 0, 'Range directory industry filter applies (' + a.ind + ' → ' + a.cards + ' cards, ' + a.path + ')');
    await p.goto(B + '/products/the-map/range/accenture/', { waitUntil: 'load' }); await p.waitForTimeout(600);
    a = await p.evaluate(() => ({ h1: document.querySelector('h1').textContent, sections: document.querySelectorAll('h2').length, links: [...document.querySelectorAll('a[href^="/products/the-map/range/"]')].length, logo: (() => { const i = document.querySelector('img[alt*="Accenture"], .logo img, img'); return i ? (i.complete && i.naturalWidth > 0) : null; })() }));
    check(/Accenture/.test(a.h1) && a.sections >= 3 && a.links >= 3, 'company page renders sections and directory links (' + a.sections + ' h2, ' + a.links + ' links, logo loaded: ' + a.logo + ')');
    /* ── career map assessment full run ── */
    await p.goto(B + '/career-map-assessment', { waitUntil: 'load' }); await p.waitForTimeout(1200);
    await p.evaluate(() => document.getElementById('beginBtn').click()); await p.waitForTimeout(2500);
    let steps = 0, stuck = '';
    for (let i = 0; i < 80; i++) {
      const st = await p.evaluate(() => { const done = !!(document.getElementById('s-report') && document.getElementById('s-report').offsetParent !== null && document.getElementById('capform') && document.getElementById('capform').offsetParent !== null); const mid = document.getElementById('midBtn') && document.getElementById('midBtn').offsetParent !== null; const inter = document.getElementById('interTap') && document.getElementById('interTap').offsetParent !== null; const gate = document.getElementById('gateBtn') && document.getElementById('gateBtn').offsetParent !== null; const name = document.getElementById('nameinput') && document.getElementById('nameinput').offsetParent !== null; const opts = [...document.querySelectorAll('#opts button, #opts label, #opts .opt, #opts [role=option], #opts input')].filter(o => o.offsetParent !== null); const nx = document.getElementById('nextBtn'); const q = (document.getElementById('qtext') || {}).textContent || ''; return { done, mid, inter, gate, name, opts: opts.length, next: !!nx && nx.offsetParent !== null && !nx.disabled, q: q.slice(0, 50), cnt: (document.getElementById('qcount') || {}).textContent || '' }; });
      if (st.done) break;
      if (st.name) { await p.fill('#nameinput', 'QA'); }
      if (st.gate) { await p.evaluate(() => document.getElementById('gateBtn').click()); await p.waitForTimeout(1200); continue; }
      if (st.mid) { await p.evaluate(() => document.getElementById('midBtn').click()); await p.waitForTimeout(1200); continue; }
      if (st.inter) { await p.evaluate(() => document.getElementById('interTap').click()); await p.waitForTimeout(1200); continue; }
      if (st.opts) { await p.evaluate(() => { const o = [...document.querySelectorAll('#opts button, #opts label, #opts .opt, #opts [role=option], #opts input')].filter(o => o.offsetParent !== null); o[Math.min(1, o.length - 1)].click(); }); await p.waitForTimeout(250); steps++; }
      const nx = await p.evaluate(() => { const n = document.getElementById('nextBtn'); if (n && n.offsetParent !== null && !n.disabled) { n.click(); return true; } return false; });
      if (!nx && !st.opts) { const loading = await p.evaluate(() => /Analyzing your climb|Menganalisis/i.test(document.body.innerText) || (document.getElementById('loadpct') && document.getElementById('loadpct').offsetParent !== null)); if (loading) { await p.waitForTimeout(3000); continue; } stuck = JSON.stringify(st); break; }
      await p.waitForTimeout(700);
    }
    a = await p.evaluate(() => { const rep = document.getElementById('s-report'); const rc = document.getElementById('report-content'); return { done: !!(rep && rep.offsetParent !== null && rc && rc.textContent.length > 300), len: rc ? rc.textContent.length : 0, capture: !!(document.getElementById('capform') && document.getElementById('capform').offsetParent !== null), share: !!(document.getElementById('shareBtn') && document.getElementById('shareBtn').offsetParent !== null) }; });
    check(a.done && steps >= 8 && a.capture, 'career map assessment runs end to end: 25 questions, analysis, a report with a capture form and share control (' + steps + ' answered; report ' + a.len + ' chars) ' + stuck);
    check(p.errs.length === 0, 'no page errors in the public journeys ' + JSON.stringify(p.errs).slice(0, 200));
    await p.close();
  }
  if (!ONLY || ONLY === 'B') {
    /* ── B. every LMS lesson opens (guest), knowledge check answers, completion advances, progress persists ── */
    for (const prod of ['the-map', 'the-pack', 'the-rope', 'the-route']) {
      const p = await mk(); await p.context().addInitScript(() => { sessionStorage.setItem('metanoia_auth', 'true'); sessionStorage.setItem('metanoia_guest', 'true'); });
      await p.goto(B + '/products/' + prod + '/?demo=true', { waitUntil: 'load' }); await p.waitForTimeout(1500);
      const ns = await p.evaluate(() => { const C = window.MT_LMS[Object.keys(window.MT_LMS).find(k => /the-/.test(k))]; return [].concat(...C.modules.map(m => m.lessons.map(l => l.n))); });
      const badL = []; let opened = 0, checks = 0, completes = 0;
      for (const n of ns) {
        const r = await p.evaluate(async (n) => {
          const e0 = window.__qaErr = window.__qaErr || [];
          try { window.MT_LMS_PLAYER.open(n); } catch (e) { return { ok: false, why: 'open threw ' + e.message.slice(0, 80) }; }
          await new Promise(r => setTimeout(r, 450));
          const root = document.querySelector('.lmsp');
          const isOpen = !!(root && root.classList.contains('open'));
          const crumb = root ? (root.querySelector('.lc-les') || {}).textContent || '' : '';
          const host = root ? root.querySelector('.lmsp-body, .lmsp-main, .lmsp') : null;
          const txt = (isOpen && host) ? host.textContent.length : 0;
          const title = crumb;
          if (!isOpen || !new RegExp('^' + n.replace('.', '\\.') + '\\b').test(crumb.trim())) return { ok: false, why: 'not opened (open=' + isOpen + ', crumb=' + crumb.trim().slice(0, 20) + ')' };
          const check = document.querySelector('.lms-check .lms-opt');
          let kc = null;
          if (check) { check.click(); await new Promise(r => setTimeout(r, 300)); const fb = document.querySelector('.lms-check .lms-fb, .lms-check .lms-feedback, .lms-check [class*=fb], .lms-check .on, .lms-check .right, .lms-check .wrong, .lms-opt.sel, .lms-opt.correct, .lms-opt.wrong, .lms-opt.is-right, .lms-opt.is-wrong'); kc = !!fb; }
          const comp = document.querySelector('button.lms-complete');
          const compText = comp ? comp.textContent.trim().slice(0, 30) : '';
          return { ok: txt > 200, why: txt <= 200 ? 'thin body (' + txt + ')' : '', title: title.slice(0, 40), kc, comp: !!comp, compText, txt };
        }, n);
        if (!r.ok) badL.push(n + ': ' + r.why); else opened++;
        if (r.kc === true) checks++; if (r.comp) completes++;
      }
      check(badL.length === 0, prod + ': all ' + ns.length + ' lessons open with substantive content (' + opened + ')' + (badL.length ? ' ' + badL.slice(0, 5).join(' | ') : ''));
      info(prod + ': knowledge checks answered with feedback on ' + checks + ' lessons; completion control on ' + completes);
      /* completion + progress persistence on lesson 1.1 */
      const r = await p.evaluate(async () => {
        window.MT_LMS_PLAYER.open('1.1'); await new Promise(r => setTimeout(r, 400));
        document.querySelectorAll('.lms-check').forEach(c => { const o = c.querySelector('.lms-opt'); if (o) o.click(); });
        await new Promise(r => setTimeout(r, 300));
        const b = document.querySelector('button.lms-complete'); if (!b) return { nob: true };
        const dis = b.disabled; b.click(); await new Promise(r => setTimeout(r, 900));
        const keys = Object.keys(localStorage).filter(k => /progress|lms|complete|done/i.test(k));
        return { dis, keys: keys.slice(0, 4), path: location.hash, h: (document.querySelector('.lms-lesson-title, h2') || {}).textContent || '' };
      });
      await p.reload({ waitUntil: 'load' }); await p.waitForTimeout(1500);
      const r2 = await p.evaluate(() => { const done = document.querySelectorAll('.is-done, .done, .lms-done, [data-done="1"], .complete, .completed, .lms-li.done, .lms-lesson.done').length; const prog = [...document.querySelectorAll('[class*=prog], [class*=progress]')].map(e => e.textContent.trim()).filter(t => /\d/.test(t)).slice(0, 3); return { done, prog }; });
      check(!r.nob && !r.dis && (r.keys.length > 0), prod + ': lesson 1.1 can be completed and progress is written (' + JSON.stringify(r.keys) + ')');
      info(prod + ': after reload, done markers ' + r2.done + ', progress text ' + JSON.stringify(r2.prog));
      check(p.errs.length === 0, prod + ': no page errors across all lessons ' + JSON.stringify(p.errs).slice(0, 200));
      await p.close();
    }
    /* ── Compass ── */
    const p = await mk(); await p.context().addInitScript(() => { sessionStorage.setItem('metanoia_auth', 'true'); sessionStorage.setItem('metanoia_guest', 'true'); });
    await p.goto(B + '/products/the-compass/', { waitUntil: 'load' }); await p.waitForTimeout(1500);
    const tabs = await p.evaluate(() => [...document.querySelectorAll('[data-tab]')].map(t => t.getAttribute('data-tab')).filter((v, i, a) => a.indexOf(v) === i));
    let tbad = [];
    for (const t of tabs) { const r = await p.evaluate(async (t) => { const b = [...document.querySelectorAll('[data-tab="' + t + '"]')].find(x => x.offsetParent !== null) || document.querySelector('[data-tab="' + t + '"]'); b.click(); await new Promise(r => setTimeout(r, 350)); const panes = [...document.querySelectorAll('section, .tab-pane, .view, [data-pane]')].filter(e => e.offsetParent !== null && e.getBoundingClientRect().height > 80); return { visible: panes.length, text: document.body.innerText.length }; }, t); if (!r.visible) tbad.push(t); }
    check(tabs.length >= 8 && tbad.length === 0, 'Compass: all ' + tabs.length + ' tabs open a visible pane ' + tbad.join(','));
    const r = await p.evaluate(async () => { const f = document.getElementById('fabAdd') || document.getElementById('addAppBtn'); if (!f) return { nof: true }; f.click(); await new Promise(r => setTimeout(r, 400)); const m = document.getElementById('appModal'); const open = m && (m.classList.contains('open') || m.classList.contains('show') || getComputedStyle(m).display !== 'none'); if (!open) return { open: false }; document.getElementById('fCompany').value = 'QA Corp'; document.getElementById('fRole').value = 'Analyst'; const st = document.getElementById('fStage'); if (st && st.tagName === 'SELECT') st.selectedIndex = 0; const form = document.getElementById('appForm'); form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })); await new Promise(r => setTimeout(r, 600)); const keys = Object.keys(localStorage).filter(k => /compass|app/i.test(k)); const found = keys.some(k => /QA Corp/.test(localStorage.getItem(k) || '')); return { open: true, keys: keys.slice(0, 4), found, rows: document.body.innerText.includes('QA Corp') }; });
    check(!r.nof && r.open && (r.found || r.rows), 'Compass: a new application can be added and is stored (' + JSON.stringify(r).slice(0, 120) + ')');
    check(p.errs.length === 0, 'Compass: no page errors ' + JSON.stringify(p.errs).slice(0, 200));
    await p.close();
  }
  await br.close();
  console.log('RESULT ' + (fail ? 'some failed' : 'all passed') + ' (' + pass + ' pass, ' + fail + ' fail)');
})().catch(e => { console.error(e); process.exit(1); });
