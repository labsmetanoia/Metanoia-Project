/**
 * BUILD STATUS COMPONENT
 * ----------------------
 * One component for "What's live today, and what isn't" — the same list on
 * /pricing and /pages/about, fed by data/build-status.js. Include both files
 * and mark a container:  <div data-build-status></div>
 * Markup and class names match the pricing page's .built-grid so its styles
 * apply there; the component injects a minimal stylesheet for pages that do
 * not carry those rules.
 */
(function () {
  'use strict';
  var D = window.MT_BUILD_STATUS;
  if (!D) return;
  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function bi(en, id) { return '<span data-en="' + esc(en) + '" data-id="' + esc(id) + '">' + esc(lang() === 'id' ? id : en) + '</span>'; }
  var TICK = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 12.5l5 5L20 6"/></svg>';
  var CLOCK = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 8v4.5l3 2"/></svg>';
  function col(cls, chip, label, items, icon) {
    return '<div class="built-col ' + cls + '"><h3><span class="chip ' + chip + '"><i></i>' + bi(label[0], label[1]) + '</span></h3><ul>' +
      items.map(function (it) { return '<li>' + icon + bi(it.en, it.id) + '</li>'; }).join('') + '</ul></div>';
  }
  var CSS = '.bs .built-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.bs .built-col{border:1px solid rgba(201,168,76,.18);border-radius:14px;padding:20px 22px;background:rgba(255,255,255,.02)}' +
    '.bs .built-col h3{margin:0 0 12px;font-size:14px}.bs .chip{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:5px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.14)}' +
    '.bs .chip i{width:7px;height:7px;border-radius:50%;background:currentColor;display:inline-block}.bs .chip--success{color:#5FB884;border-color:rgba(95,184,132,.4)}.bs .chip--neutral{color:rgba(255,255,255,.6)}' +
    '.bs ul{list-style:none;margin:0;padding:0}.bs li{display:flex;gap:10px;align-items:flex-start;font-size:14px;line-height:1.5;padding:6px 0;color:rgba(255,255,255,.82)}.bs li svg{flex:none;margin-top:4px;color:#C9A84C}' +
    '.bs .built-col.live li svg{color:#5FB884}.bs .bs-updated{font-size:12px;color:rgba(255,255,255,.45);margin-top:10px}@media(max-width:700px){.bs .built-grid{grid-template-columns:1fr}}';
  function render() {
    var hosts = document.querySelectorAll('[data-build-status]');
    if (!hosts.length) return;
    var html = col('live', 'chip--success', ['Live today', 'Tersedia hari ini'], D.live, TICK) +
               col('coming', 'chip--neutral', ['In development', 'Sedang dikembangkan'], D.coming, CLOCK);
    for (var i = 0; i < hosts.length; i++) {
      var h = hosts[i];
      var own = h.getAttribute('data-build-status') === 'styled';
      if (own && !document.getElementById('bsCss')) { var st = document.createElement('style'); st.id = 'bsCss'; st.textContent = CSS; document.head.appendChild(st); }
      if (own) h.classList.add('bs');
      h.innerHTML = (own ? '<div class="built-grid">' + html + '</div>' : html) +
        (own ? '<p class="bs-updated">' + bi('Updated ' + D.updated, 'Diperbarui ' + D.updated) + '</p>' : '');
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render); else render();
})();
