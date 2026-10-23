/**
 * AUDIENCE LAYER — ONE PILLAR, FOUR CAREER STAGES
 * ------------------------------------------------
 * The same product page reads differently depending on where the member
 * came from. Two jobs, decided by the page it runs on:
 *
 *  1. Audience pages (/pages/student, fresh-graduate, early-professional,
 *     mature-professional): remember the stage (localStorage 'mt-audience',
 *     the key registration already reads) and carry it on every link into a
 *     pillar as ?audience=<stage>, so the context survives the navigation.
 *
 *  2. Pillar pages (/products/the-map, the-pack, the-rope, the-route,
 *     the-compass): resolve the stage (?audience= wins, then the stored one)
 *     and swap only the presentation layer, from data/audience-copy.js:
 *       · the tagline under the title
 *       · the edition line next to the state chip
 *       · the access line (membership named for the stage, and the honest
 *         note that the Student & Fresh Graduate edition is the one open
 *         today on the professional pathways)
 *       · a briefing card at the top of the home tab: positioning, headline,
 *         lead, three benefits, a call to action that drives the page's own
 *         Start button, and a switcher to read the page as another stage
 *     Modules, lessons, tools, tabs and progress are never touched. Links to
 *     the other pillars keep the stage. Everything is bilingual through the
 *     page's own data-en / data-id sweep; a language switch re-renders.
 *
 * With no stage known the page is exactly what it was, plus one quiet row
 * inviting the reader to pick their stage.
 */
(function () {
  'use strict';
  var KEY = 'mt-audience';
  var STAGES = ['student', 'fresh-graduate', 'early-professional', 'mature-professional'];
  var path = location.pathname.replace(/\/index\.html$/, '/');

  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function B(p) { return p ? (lang() === 'id' ? (p.id || p.en) : p.en) : ''; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function stored() { try { var v = localStorage.getItem(KEY); return STAGES.indexOf(v) >= 0 ? v : null; } catch (e) { return null; } }
  function remember(a) { try { if (a) localStorage.setItem(KEY, a); } catch (e) {} }
  function withAudience(href, a) {
    if (!a) return href;
    try {
      var u = new URL(href, location.href);
      if (!/\/products\/the-(map|pack|rope|route|compass)\//.test(u.pathname)) return href;
      u.searchParams.set('audience', a);
      return u.pathname + u.search + u.hash;
    } catch (e) { return href; }
  }
  function isPillar(href) {
    try { return /\/products\/the-(map|pack|rope|route|compass)\//.test(new URL(href, location.href).pathname); } catch (e) { return false; }
  }
  function tagLinks(a) {
    if (!a) return;
    document.querySelectorAll('a[href]').forEach(function (el) {
      var h = el.getAttribute('href'); if (!h || /audience=/.test(h) || /^(#|mailto:|tel:|javascript:)/i.test(h) || !isPillar(h)) return;
      el.setAttribute('href', withAudience(h, a));
    });
  }

  /* links rendered later (folders, digests, the mobile footer) get the stage too */
  function keepTagging(getStage) {
    var run = function () { tagLinks(getStage()); };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
    window.addEventListener('load', run); setTimeout(run, 800); setTimeout(run, 2500);
    document.addEventListener('click', function (e) {
      var st = getStage(); if (!st) return;
      var a = e.target.closest && e.target.closest('a[href]');
      if (a && !/audience=/.test(a.getAttribute('href') || '') && isPillar(a.getAttribute('href'))) a.setAttribute('href', withAudience(a.getAttribute('href'), st));
    }, true);
  }

  /* ── 1 · audience pages ─────────────────────────────────────────── */
  var pm = path.match(/\/pages\/(student|fresh-graduate|early-professional|mature-professional)(?:\.html)?\/?$/);
  if (pm) {
    remember(pm[1]);
    keepTagging(function () { return pm[1]; });
    return;
  }

  /* ── 2 · pillar pages ───────────────────────────────────────────── */
  var prm = path.match(/\/products\/(the-(?:map|pack|rope|route|compass))\//);
  if (!prm) return;
  var PRODUCT = prm[1];
  var q = null;
  try { q = new URLSearchParams(location.search).get('audience'); } catch (e) {}
  if (STAGES.indexOf(q) < 0) q = null;
  var current = q || stored();
  if (q) remember(q);

  function data() { return window.MT_AUDIENCE_COPY || null; }
  function set(el, pair, html) {
    if (!el || !pair) return;
    el.setAttribute('data-en', pair.en); el.setAttribute('data-id', pair.id || pair.en);
    if (html) el.innerHTML = B(pair); else el.textContent = B(pair);
  }
  function fill(tpl, aud) { var D = data(); var A = D.audiences[aud]; return { en: tpl.en.replace('{aud}', A.en), id: tpl.id.replace('{aud}', A.id) }; }

  var css =
    '.aud-card{position:relative;overflow:hidden;padding:26px 28px 24px;margin-bottom:34px;border-color:rgba(201,168,76,.42)}' +
    '.aud-card::before{content:"";position:absolute;inset:0;background:radial-gradient(120% 90% at 100% 0%,rgba(201,168,76,.14),transparent 55%);pointer-events:none}' +
    '.aud-card>*{position:relative}' +
    '.aud-pos{display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin:0 0 10px}' +
    '.aud-pos i{width:6px;height:6px;border-radius:50%;background:var(--gold-bright);box-shadow:0 0 10px rgba(240,216,120,.8)}' +
    '.aud-head{font-family:var(--serif);font-weight:700;font-size:clamp(1.25rem,2.2vw,1.6rem);line-height:1.2;color:var(--text);margin:0 0 10px;letter-spacing:-.01em}' +
    '.aud-lead{font-size:14.5px;line-height:1.7;color:var(--text-sub);margin:0 0 16px;max-width:66ch}' +
    '.aud-b{list-style:none;margin:0 0 18px;padding:0;display:grid;gap:9px}' +
    '.aud-b li{display:flex;gap:10px;align-items:flex-start;font-size:13.5px;line-height:1.55;color:var(--text-sub)}' +
    '.aud-b svg{width:17px;height:17px;flex:none;margin-top:2px;color:var(--gold-bright)}' +
    '.aud-act{display:flex;flex-wrap:wrap;gap:12px 18px;align-items:center}' +
    '.aud-act .btn-gold{font-size:13.5px}' +
    '.aud-sw{display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;font-size:12px;color:var(--text-muted)}' +
    '.aud-sw b{font-weight:600;color:var(--text-muted);margin-right:2px}' +
    '.aud-pill{font:inherit;font-size:11.5px;font-weight:700;letter-spacing:.04em;padding:6px 11px;border-radius:999px;border:1px solid var(--gold-border-hover);background:none;color:var(--text-sub);cursor:pointer;transition:background .2s,color .2s,border-color .2s}' +
    '.aud-pill:hover{color:var(--gold-bright);border-color:var(--gold)}' +
    '.aud-pill.on{background:linear-gradient(135deg,var(--gold-deep),var(--gold),var(--gold-bright));color:#160d03;border-color:transparent;cursor:default}' +
    '.aud-note{font-size:11.5px;color:var(--text-muted);margin:14px 0 0;line-height:1.55}' +
    '.aud-pick{display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;margin:14px 0 0;font-size:12px;color:rgba(240,237,232,.62)}' +
    '.aud-pick .aud-pill{border-color:rgba(255,255,255,.28);color:rgba(240,237,232,.86)}' +
    '.aud-pick .aud-pill:hover{border-color:var(--gold-bright);color:var(--gold-bright)}' +
    ':root[data-theme="light"] .aud-pick{color:rgba(255,255,255,.72)}' +
    '@media(max-width:640px){.aud-card{padding:20px 18px 18px}.aud-act{align-items:flex-start;flex-direction:column}.aud-act .btn-gold{width:100%;justify-content:center}}';

  function ensureCss() { if (document.getElementById('audLayerCss')) return; var st = document.createElement('style'); st.id = 'audLayerCss'; st.textContent = css; document.head.appendChild(st); }

  function tick() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7"/></svg>'; }

  function switcher(aud, cls) {
    var D = data();
    var w = document.createElement('div'); w.className = cls || 'aud-sw';
    var lbl = document.createElement('b'); set(lbl, aud ? D.strings.viewing : D.strings.choose); w.appendChild(lbl);
    STAGES.forEach(function (s) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 'aud-pill' + (s === aud ? ' on' : '');
      set(b, D.audiences[s]); b.setAttribute('aria-pressed', s === aud ? 'true' : 'false');
      b.addEventListener('click', function () { if (s === current) return; current = s; remember(s); try { var u = new URL(location.href); u.searchParams.set('audience', s); history.replaceState(null, '', u.pathname + u.search + u.hash); } catch (e) {} apply(); });
      w.appendChild(b);
    });
    return w;
  }

  function primaryAction() {
    /* the page's own first step: Start Module 1 where the course has one, the Navigator on the Compass */
    var b = document.querySelector('.course-actions [data-goto-module="1"], .home-right [data-goto-module="1"], [data-goto-module="1"]');
    if (b) return function () { b.click(); };
    var nav = document.querySelector('.nav-item[data-tab="navigator"]');
    if (nav) return function () { nav.click(); };
    var ov = document.querySelector('.course-actions .btn-gold');
    return ov ? function () { ov.click(); } : null;
  }

  var slots = { tagline: null, edition: null, access: null, card: null, pick: null };

  function apply() {
    var D = data(); if (!D) return;
    ensureCss();
    var copy = current && D.products[PRODUCT] && D.products[PRODUCT][current];
    document.documentElement.setAttribute('data-audience', current || '');
    tagLinks(current);

    /* remove what a previous render added */
    ['card', 'pick'].forEach(function (k) { if (slots[k] && slots[k].parentNode) slots[k].parentNode.removeChild(slots[k]); slots[k] = null; });

    /* the hero's presentation lines (course pages) */
    var head = document.querySelector('.course-head');
    if (head) {
      var tag = head.querySelector('.tagline');
      if (tag && !tag.hasAttribute('data-aud-en')) { tag.setAttribute('data-aud-en', tag.getAttribute('data-en') || tag.textContent); tag.setAttribute('data-aud-id', tag.getAttribute('data-id') || tag.textContent); }
      var chip = head.querySelector('.state-chip'), ed = null;
      if (chip && chip.parentNode) { var spans = chip.parentNode.querySelectorAll(':scope > span[data-en]'); ed = spans.length ? spans[spans.length - 1] : null; }
      if (ed && !ed.hasAttribute('data-aud-en')) { ed.setAttribute('data-aud-en', ed.getAttribute('data-en')); ed.setAttribute('data-aud-id', ed.getAttribute('data-id') || ed.getAttribute('data-en')); }
      var acc = head.querySelector('.access-line');
      if (acc && !acc.hasAttribute('data-aud-en')) { acc.setAttribute('data-aud-en', acc.getAttribute('data-en') || acc.innerHTML); acc.setAttribute('data-aud-id', acc.getAttribute('data-id') || acc.innerHTML); }
      if (copy) {
        set(tag, copy.tagline);
        if (ed) set(ed, { en: fill(D.strings.pathway, current).en + ' · ' + copy.pos.en, id: fill(D.strings.pathway, current).id + ' · ' + copy.pos.id });
        if (acc) {
          var inc = window.MT_COMMERCIAL ? window.MT_COMMERCIAL.get('included', current) : null;
          var A = D.audiences[current];
          var en = (inc ? inc.en : 'Included in the ' + A.en + ' membership') + ', <a href="/pricing">' + D.strings.pricing.en + '</a>.' + (A.open ? '' : ' ' + fill(D.strings.openToday, current).en);
          var id = (inc ? inc.id : 'Termasuk dalam keanggotaan ' + A.id) + ', <a href="/pricing">' + D.strings.pricing.id + '</a>.' + (A.open ? '' : ' ' + fill(D.strings.openToday, current).id);
          set(acc, { en: en, id: id }, true);
        }
      } else {
        /* restore the page's own lines */
        [tag, ed, acc].forEach(function (el) { if (el && el.hasAttribute('data-aud-en')) set(el, { en: el.getAttribute('data-aud-en'), id: el.getAttribute('data-aud-id') }, true); });
        if (acc) { slots.pick = switcher(null, 'aud-pick'); acc.insertAdjacentElement('afterend', slots.pick); }
      }
    }

    /* the Compass: the Bearing hero's sub-line */
    var bearing = document.querySelector('#tab-bearing .tab-hero .tab-sub');
    if (bearing) {
      if (!bearing.hasAttribute('data-aud-en')) { bearing.setAttribute('data-aud-en', bearing.getAttribute('data-en')); bearing.setAttribute('data-aud-id', bearing.getAttribute('data-id') || bearing.getAttribute('data-en')); }
      if (copy) set(bearing, { en: copy.tagline.en + ' ' + bearing.getAttribute('data-aud-en'), id: copy.tagline.id + ' ' + bearing.getAttribute('data-aud-id') });
      else set(bearing, { en: bearing.getAttribute('data-aud-en'), id: bearing.getAttribute('data-aud-id') });
    }

    /* the briefing card */
    var host = document.querySelector('#tab-home .home-left') || (document.querySelector('#tab-bearing .tab-hero') ? document.querySelector('#tab-bearing') : null);
    if (copy && host) {
      var sec = document.createElement('div'); sec.className = 'home-sec aud-sec';
      var lab = document.createElement('h3'); lab.className = 'sec-label'; set(lab, { en: 'For ' + D.audiences[current].plural.en, id: 'Untuk ' + D.audiences[current].plural.id }); sec.appendChild(lab);
      var card = document.createElement('div'); card.className = 'glass-card aud-card';
      var pos = document.createElement('span'); pos.className = 'aud-pos'; pos.innerHTML = '<i aria-hidden="true"></i><span></span>'; set(pos.lastChild, copy.pos); card.appendChild(pos);
      var h = document.createElement('h4'); h.className = 'aud-head'; set(h, copy.head); card.appendChild(h);
      var p = document.createElement('p'); p.className = 'aud-lead'; set(p, copy.lead); card.appendChild(p);
      var ul = document.createElement('ul'); ul.className = 'aud-b';
      copy.b.forEach(function (b) { var li = document.createElement('li'); li.innerHTML = tick() + '<span></span>'; set(li.lastChild, b); ul.appendChild(li); });
      card.appendChild(ul);
      var act = document.createElement('div'); act.className = 'aud-act';
      var go = primaryAction();
      if (go) { var btn = document.createElement('button'); btn.type = 'button'; btn.className = 'btn-gold'; set(btn, copy.cta); btn.addEventListener('click', go); act.appendChild(btn); }
      act.appendChild(switcher(current, 'aud-sw'));
      card.appendChild(act);
      var note = document.createElement('p'); note.className = 'aud-note';
      set(note, D.audiences[current].open ? D.strings.sameContent : { en: fill(D.strings.openToday, current).en + ' ' + D.strings.sameContent.en, id: fill(D.strings.openToday, current).id + ' ' + D.strings.sameContent.id });
      card.appendChild(note);
      sec.appendChild(card);
      if (host.id === 'tab-bearing') { var hero = host.querySelector('.tab-hero'); hero.insertAdjacentElement('afterend', sec); }
      else host.insertAdjacentElement('afterbegin', sec);
      slots.card = sec;
    }
    document.dispatchEvent(new CustomEvent('mt:audience', { detail: { audience: current, product: PRODUCT } }));
  }

  function boot() { if (!data()) return; apply(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  keepTagging(function () { return current; });

  window.MT_AUDIENCE = { get: function () { return current; }, set: function (a) { if (STAGES.indexOf(a) < 0) return; current = a; remember(a); apply(); }, stages: STAGES.slice() };
})();
