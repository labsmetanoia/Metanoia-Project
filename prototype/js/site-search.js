/**
 * METANOIA LABS — SITE SEARCH (Cmd/Ctrl+K)
 * ----------------------------------------
 * A real search box: a client-side index over pages, products, industries,
 * functions, every company in The Range and every Mind Palace article.
 * The index (data/search-index.json) is generated at build time by
 * scripts/build-site.py and fetched once, the first time the palette opens.
 *
 * Loaded lazily by js/mob-footer.js when the header search control is
 * clicked or Cmd/Ctrl+K is pressed, so pages pay nothing until used.
 */
(function () {
  'use strict';
  if (window.MT_SEARCH) return;

  var base = (function () {
    var s = document.currentScript && document.currentScript.src;
    return s ? s.replace(/js\/site-search\.js.*$/, '') : '/';
  })();
  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function t(en, id) { return lang() === 'id' ? id : en; }
  function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  var TYPES = {
    page: ['Page', 'Halaman'], product: ['Product', 'Produk'], industry: ['Industry', 'Industri'],
    'function': ['Function', 'Fungsi'], company: ['Company', 'Perusahaan'], article: ['Mind Palace', 'Mind Palace']
  };

  var css = '\
.mts-veil{position:fixed;inset:0;z-index:2147483000;background:rgba(3,6,12,.72);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);display:flex;align-items:flex-start;justify-content:center;padding:8vh 16px 16px;opacity:0;transition:opacity .16s}\
.mts-veil.on{opacity:1}\
.mts{width:100%;max-width:640px;background:#0B1424;border:1px solid rgba(201,168,76,.35);border-radius:16px;box-shadow:0 30px 80px rgba(0,0,0,.6);overflow:hidden;font-family:"Roboto Condensed","Inter",system-ui,sans-serif;color:#fff}\
.mts-in{display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid rgba(201,168,76,.18)}\
.mts-in svg{flex:none;color:#C9A84C}\
.mts-in input{flex:1;background:none;border:0;outline:0;color:#fff;font:inherit;font-size:16px;min-height:28px}\
.mts-in kbd{font:inherit;font-size:11px;color:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.18);border-radius:6px;padding:2px 6px}\
.mts-list{max-height:min(56vh,480px);overflow:auto;padding:6px}\
.mts-item{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:10px;text-decoration:none;color:inherit}\
.mts-item.on,.mts-item:hover{background:rgba(201,168,76,.12)}\
.mts-t{flex:none;font-size:10.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#C9A84C;width:84px}\
.mts-n{font-size:14.5px;font-weight:700;line-height:1.3}\
.mts-s{font-size:12.5px;color:rgba(255,255,255,.55);line-height:1.3}\
.mts-empty{padding:22px 16px;color:rgba(255,255,255,.55);font-size:14px}\
.mts-foot{display:flex;gap:14px;padding:8px 16px;border-top:1px solid rgba(201,168,76,.18);font-size:11.5px;color:rgba(255,255,255,.45)}\
@media(max-width:640px){.mts-veil{padding:10px}.mts-t{width:64px}}';

  var veil, input, list, items = null, sel = 0, hits = [], loading = null;

  function ensureIndex() {
    if (items) return Promise.resolve(items);
    if (loading) return loading;
    loading = fetch(base + 'data/search-index.json').then(function (r) { return r.json(); }).then(function (j) { items = j.items || []; return items; })
      .catch(function () { items = []; return items; });
    return loading;
  }

  function score(it, q) {
    var l = lang();
    var name = (l === 'id' ? it.ni : it.n) || it.n;
    var hay = [name, it.n, it.s, it.si, it.k].join(' ').toLowerCase();
    var nm = name.toLowerCase();
    if (nm === q) return 100;
    if (nm.indexOf(q) === 0) return 80;
    if (nm.indexOf(q) !== -1) return 60;
    var words = q.split(/\s+/).filter(Boolean);
    var all = words.every(function (w) { return hay.indexOf(w) !== -1; });
    if (all) return 30;
    return 0;
  }

  function run(q) {
    q = (q || '').trim().toLowerCase();
    var l = lang();
    if (!q) {
      hits = items.filter(function (it) { return it.t === 'page' || it.t === 'product'; }).slice(0, 8);
    } else {
      hits = items.map(function (it) { return [score(it, q), it]; }).filter(function (x) { return x[0] > 0; })
        .sort(function (a, b) { return b[0] - a[0] || (a[1].t === 'company' ? 1 : 0) - (b[1].t === 'company' ? 1 : 0); })
        .slice(0, 12).map(function (x) { return x[1]; });
    }
    sel = 0;
    if (!hits.length) {
      list.innerHTML = '<div class="mts-empty">' + t('Nothing matches yet. Try a company, an industry, a role, or a topic.', 'Belum ada yang cocok. Coba nama perusahaan, industri, peran, atau topik.') + '</div>';
      return;
    }
    list.innerHTML = hits.map(function (it, i) {
      var tp = TYPES[it.t] || [it.t, it.t];
      return '<a class="mts-item' + (i === 0 ? ' on' : '') + '" href="' + esc(it.u) + '" data-i="' + i + '"><span class="mts-t">' + esc(t(tp[0], tp[1])) + '</span>' +
        '<span><span class="mts-n">' + esc(l === 'id' ? (it.ni || it.n) : it.n) + '</span>' +
        (it.s ? '<br><span class="mts-s">' + esc(l === 'id' ? (it.si || it.s) : it.s) + '</span>' : '') + '</span></a>';
    }).join('');
  }

  function move(d) {
    if (!hits.length) return;
    sel = (sel + d + hits.length) % hits.length;
    var els = list.querySelectorAll('.mts-item');
    for (var i = 0; i < els.length; i++) els[i].classList.toggle('on', i === sel);
    if (els[sel]) els[sel].scrollIntoView({ block: 'nearest' });
  }

  function open() {
    if (veil) { veil.classList.add('on'); veil.style.display = ''; input.value = ''; input.focus(); ensureIndex().then(function () { run(input.value); }); return; }
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    veil = document.createElement('div'); veil.className = 'mts-veil'; veil.setAttribute('role', 'dialog'); veil.setAttribute('aria-modal', 'true'); veil.setAttribute('aria-label', 'Search');
    veil.innerHTML = '<div class="mts"><div class="mts-in"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7.2"/><path d="m16.6 16.6 4.2 4.2"/></svg>' +
      '<input type="search" autocomplete="off" spellcheck="false" placeholder="' + esc(t('Search companies, roles, industries, articles, products…', 'Cari perusahaan, peran, industri, artikel, produk…')) + '" aria-label="Search"><kbd>esc</kbd></div>' +
      '<div class="mts-list" role="listbox"><div class="mts-empty">' + t('Loading the index…', 'Memuat indeks…') + '</div></div>' +
      '<div class="mts-foot"><span>↑↓ ' + t('navigate', 'navigasi') + '</span><span>↵ ' + t('open', 'buka') + '</span><span>' + t('Everything runs on your device.', 'Semua berjalan di perangkatmu.') + '</span></div></div>';
    document.body.appendChild(veil);
    input = veil.querySelector('input'); list = veil.querySelector('.mts-list');
    veil.addEventListener('click', function (e) { if (e.target === veil) close(); });
    input.addEventListener('input', function () { if (items) run(input.value); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      else if (e.key === 'Enter') { e.preventDefault(); if (hits[sel]) location.href = hits[sel].u; }
      else if (e.key === 'Escape') { close(); }
    });
    requestAnimationFrame(function () { veil.classList.add('on'); });
    input.focus();
    ensureIndex().then(function () { run(input.value); });
  }
  function close() { if (!veil) return; veil.classList.remove('on'); veil.style.display = 'none'; }
  function toggle() { if (veil && veil.style.display !== 'none') close(); else open(); }

  window.MT_SEARCH = { open: open, close: close, toggle: toggle };
  if (window.__mtSearchOpenOnLoad) { window.__mtSearchOpenOnLoad = false; open(); }
})();
