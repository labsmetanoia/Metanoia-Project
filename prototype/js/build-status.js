/**
 * BUILD STATUS COMPONENT
 * ----------------------
 * One component for "What's live today, and what isn't", fed by
 * data/build-status.js. Include both files and mark a container:
 *   <div data-build-status></div>
 * It renders a status board: a header with the counts and the date the list
 * was last updated, then two ledgers side by side — live today, in
 * development — each line a ringed mark and one plain sentence. The pricing
 * page carries the full styles (.built-board …); a page that marks its
 * container data-build-status="styled" gets a minimal stylesheet injected.
 */
(function () {
  'use strict';
  var D = window.MT_BUILD_STATUS;
  if (!D) return;
  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function bi(en, id, tag) { tag = tag || 'span'; return '<' + tag + ' data-en="' + esc(en) + '" data-id="' + esc(id) + '">' + esc(lang() === 'id' ? id : en) + '</' + tag + '>'; }
  var TICK = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6"/></svg>';
  var CLOCK = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 8v4.5l3 2"/></svg>';
  var CAL = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>';
  var FLAG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 21V4"/><path d="M6 5h11l-2.6 3.5L17 12H6"/></svg>';
  function col(cls, chip, label, items, icon) {
    return '<div class="built-col ' + cls + '"><h3><span class="chip ' + chip + '"><i></i>' + bi(label[0], label[1]) + '</span><span class="bc-n">' + items.length + '</span></h3><ul>' +
      items.map(function (it) { return '<li><i class="bc-ic" aria-hidden="true">' + icon + '</i>' + bi(it.en, it.id) + '</li>'; }).join('') + '</ul></div>';
  }
  function head() {
    var n = D.live.length, m = D.coming.length;
    return '<div class="bb-head"><div>' + bi('Build status', 'Status pengembangan', 'span').replace('<span ', '<span class="bb-k" ') +
      '<b data-en="&lt;em&gt;' + n + ' live&lt;/em&gt; today · ' + m + ' in development" data-id="&lt;em&gt;' + n + ' tersedia&lt;/em&gt; hari ini · ' + m + ' sedang dikembangkan">' +
      (lang() === 'id' ? '<em>' + n + ' tersedia</em> hari ini · ' + m + ' sedang dikembangkan' : '<em>' + n + ' live</em> today · ' + m + ' in development') + '</b></div>' +
      '<span class="bb-upd">' + CAL + bi('Updated ' + D.updated, 'Diperbarui ' + D.updated) + '</span></div>';
  }
  function foot() {
    return '<div class="bb-foot">' + FLAG + bi('A short true list rather than a long invented one — this board changes as we ship.',
      'Daftar pendek yang benar, bukan daftar panjang yang dikarang — papan ini berubah saat kami merilis.') + '</div>';
  }
  var CSS = '.bs .built-board{border:1px solid rgba(201,168,76,.22);border-radius:20px;overflow:hidden;background:rgba(255,255,255,.02)}' +
    '.bs .bb-head{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;padding:20px 24px;border-bottom:1px solid rgba(255,255,255,.08)}' +
    '.bs .bb-k{display:block;font-size:11px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:#E8C96A}.bs .bb-head b{display:block;font-size:1.2rem;margin-top:4px}.bs .bb-head b em{font-style:normal;color:#F0D878}' +
    '.bs .bb-upd{display:inline-flex;align-items:center;gap:8px;font-size:12.5px;color:rgba(255,255,255,.6);border:1px solid rgba(255,255,255,.14);border-radius:999px;padding:7px 14px}' +
    '.bs .built-grid{display:grid;grid-template-columns:1fr 1fr}.bs .built-col{padding:20px 24px}.bs .built-col+.built-col{border-left:1px solid rgba(255,255,255,.08)}' +
    '.bs .built-col h3{margin:0 0 10px;font-size:14px;display:flex;justify-content:space-between;align-items:center}.bs .bc-n{font-size:1.3rem;color:rgba(255,255,255,.45)}' +
    '.bs .chip{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:5px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.14)}' +
    '.bs .chip i{width:7px;height:7px;border-radius:50%;background:currentColor;display:inline-block}.bs .chip--success{color:#5FB884;border-color:rgba(95,184,132,.4)}.bs .chip--neutral{color:rgba(255,255,255,.6)}' +
    '.bs ul{list-style:none;margin:0;padding:0}.bs li{display:flex;gap:12px;align-items:flex-start;font-size:14px;line-height:1.5;padding:9px 0;border-top:1px solid rgba(255,255,255,.07);color:rgba(255,255,255,.82)}.bs li:first-child{border-top:0}' +
    '.bs .bc-ic{flex:none;width:24px;height:24px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;border:1px solid rgba(201,168,76,.4);color:#C9A84C}.bs .live .bc-ic{color:#5FB884;border-color:rgba(95,184,132,.4)}' +
    '.bs .bb-foot{display:flex;gap:10px;align-items:center;padding:12px 24px 16px;border-top:1px solid rgba(255,255,255,.08);font-size:12.5px;color:rgba(255,255,255,.5)}.bs .bb-foot svg{color:#C9A84C}' +
    '@media(max-width:700px){.bs .built-grid{grid-template-columns:1fr}.bs .built-col+.built-col{border-left:0;border-top:1px solid rgba(255,255,255,.08)}}';
  function render() {
    var hosts = document.querySelectorAll('[data-build-status]');
    if (!hosts.length) return;
    var html = '<div class="built-board">' + head() + '<div class="built-grid">' +
      col('live', 'chip--success', ['Live today', 'Tersedia hari ini'], D.live, TICK) +
      col('coming', 'chip--neutral', ['In development', 'Sedang dikembangkan'], D.coming, CLOCK) +
      '</div>' + foot() + '</div>';
    for (var i = 0; i < hosts.length; i++) {
      var h = hosts[i];
      var own = h.getAttribute('data-build-status') === 'styled';
      if (own && !document.getElementById('bsCss')) { var st = document.createElement('style'); st.id = 'bsCss'; st.textContent = CSS; document.head.appendChild(st); }
      if (own) h.classList.add('bs');
      h.innerHTML = html;
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render); else render();
})();
