/* Crawl every public page on desktop and phone: console errors, page errors, failed requests, broken images,
   horizontal overflow, empty title. PAGES env overrides the list; LANG env (en|id). */
const { chromium } = require('playwright-core');
const B = 'http://localhost:8940';
const PAGES = (process.env.PAGES ? process.env.PAGES.split(',') : [
  '/', '/landing', '/pricing', '/help', '/career-map-assessment', '/login', '/register', '/portal', '/purchases', '/settings', '/demo',
  '/legal/privacy', '/legal/terms', '/legal/data-dignity', '/mentors/apply', '/admin/',
  '/pages/about', '/pages/student', '/pages/fresh-graduate', '/pages/early-professional', '/pages/mature-professional', '/pages/enterprise', '/pages/mentors', '/pages/mind-palace',
  '/pages/products/high-impact', '/pages/products/professional-world', '/pages/products/project-aladin', '/pages/products/project-horizon', '/pages/products/project-maverick', '/pages/products/project-nexus', '/pages/products/scholarship-prep', '/pages/products/the-compass',
  '/products/the-map/', '/products/the-pack/', '/products/the-rope/', '/products/the-route/', '/products/the-compass/', '/products/the-lookout/', '/products/the-range/',
  '/products/the-map/range/', '/products/the-map/range/industry/property-construction/', '/products/the-map/range/indonesia/', '/products/the-map/range/accenture/', '/products/the-map/range/international/function/data/page/8/',
  '/mind-palace/', '/mind-palace/get-hired/', '/mind-palace/ats-myths-decoded/', '/mind-palace/case-interview-anatomy/',
  '/nope-404'
]);
const LANG = process.env.LANG_ || 'en';
(async () => {
  const br = await chromium.launch({ executablePath: process.env.CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const out = [];
  for (const vp of [{ w: 1366, h: 860, tag: 'desk' }, { w: 390, h: 844, tag: 'phone' }]) {
    const ctx = await br.newContext({ viewport: { width: vp.w, height: vp.h }, isMobile: vp.tag === 'phone', hasTouch: vp.tag === 'phone', deviceScaleFactor: 1 });
    await ctx.addInitScript((a) => { localStorage.setItem('mtLang', a.L); localStorage.setItem('mt-lang', a.L); localStorage.setItem('mt-theme', a.T); if (a.G) { sessionStorage.setItem('metanoia_auth', 'true'); sessionStorage.setItem('metanoia_guest', 'true'); } }, { L: LANG, G: !!process.env.GUEST, T: process.env.THEME || 'dark' });
    for (const u of PAGES) {
      const p = await ctx.newPage(); const errs = [], cons = [], fails = [];
      p.on('pageerror', e => errs.push(String(e.message).slice(0, 160)));
      p.on('console', m => { if (m.type() === 'error') cons.push(m.text().slice(0, 160)); });
      p.on('response', r => { const s = r.status(); if (s >= 400 && !/fonts|googleapis|gstatic/.test(r.url())) fails.push(s + ' ' + r.url().replace(B, '')); });
      p.on('requestfailed', r => { if (!/fonts|googleapis|gstatic|analytics|api\//.test(r.url())) fails.push('FAIL ' + r.url().replace(B, '') + ' ' + (r.failure() || {}).errorText); });
      let status = 0;
      try { const r = await p.goto(B + u, { waitUntil: 'load', timeout: 30000 }); status = r ? r.status() : 0; await p.waitForTimeout(900); } catch (e) { errs.push('NAV ' + e.message.slice(0, 80)); }
      const m = await p.evaluate(() => {
        const imgs = [...document.images].filter(i => i.complete && i.naturalWidth === 0 && i.getAttribute('src') && !i.loading).map(i => i.getAttribute('src')).slice(0, 5);
        const docW = document.documentElement.scrollWidth, vw = window.innerWidth;
        let wide = [];
        if (docW > vw + 1) { document.querySelectorAll('body *').forEach(e => { const r = e.getBoundingClientRect(); if (r.right > vw + 2 && r.width > 40 && getComputedStyle(e).position !== 'fixed' && wide.length < 4) wide.push(e.tagName.toLowerCase() + (e.className && typeof e.className === 'string' ? '.' + e.className.split(' ').slice(0, 2).join('.') : '') + ' ' + Math.round(r.right - vw)); }); }
        return { title: document.title, h1: document.querySelector('h1') ? document.querySelector('h1').textContent.trim().slice(0, 50) : '', imgs, docW, vw, wide, lang: document.documentElement.lang };
      }).catch(e => ({ title: '', h1: '', imgs: [], docW: 0, vw: 0, wide: [], evalErr: e.message.slice(0, 80) }));
      const row = { u, vp: vp.tag, status, errs, cons: cons.filter(c => !/favicon|404 \(Not Found\)|net::ERR|api\//.test(c)).slice(0, 4), fails: [...new Set(fails)].slice(0, 6), broken: m.imgs, over: m.docW > m.vw + 1 ? m.wide : null, title: m.title, h1: m.h1 };
      const flag = row.errs.length || row.cons.length || row.fails.length || row.broken.length || row.over || (status !== 200 && u !== '/nope-404') || !row.title;
      if (flag) console.log(JSON.stringify(row));
      out.push(row);
      await p.close();
    }
    await ctx.close();
  }
  await br.close();
  console.log('pages', out.length, 'flagged', out.filter(r => r.errs.length || r.cons.length || r.fails.length || r.broken.length || r.over).length);
})().catch(e => { console.error(e); process.exit(1); });
