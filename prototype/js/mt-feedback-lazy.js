/* Feedback launcher for the heavy product pages: draws the button and loads js/mt-feedback.js (the dialog) on first press. */
(function () {
  if (window.MT_FEEDBACK || document.querySelector('.mtfb-launch')) return;
  var me = document.currentScript, id = (document.documentElement.lang || 'en').indexOf('id') === 0;
  var st = document.createElement('style');
  st.textContent = '.mtfb-launch{position:fixed;right:20px;bottom:20px;z-index:90;display:inline-flex;align-items:center;gap:8px;min-height:40px;padding:0 16px;border-radius:999px;border:1px solid rgba(201,168,76,.45);background:rgba(10,16,26,.92);color:#E9D28A;font:600 13px/1 inherit;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.35)}[data-theme="light"] .mtfb-launch{background:rgba(255,255,255,.96);color:#7A5C12;border-color:rgba(122,92,18,.4)}.mtfb-launch svg{width:16px;height:16px}@media (max-width:768px){.mtfb-launch{right:12px;bottom:76px;min-height:44px}}@media print{.mtfb-launch{display:none}}';
  document.head.appendChild(st);
  var b = document.createElement('button'); b.type = 'button'; b.className = 'mtfb-launch'; b.setAttribute('data-feedback-open', '');
  b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/></svg><span data-en="Feedback" data-id="Masukan">' + (id ? 'Masukan' : 'Feedback') + '</span>';
  b.addEventListener('click', function () {
    if (window.MT_FEEDBACK) return;   /* loaded: its own listener opens the dialog */
    var s = document.createElement('script'); s.src = me.src.replace('mt-feedback-lazy.js', 'mt-feedback.js'); s.setAttribute('data-launcher', 'off');
    s.onload = function () { if (window.MT_FEEDBACK) window.MT_FEEDBACK.open(); };
    document.head.appendChild(s);
  });
  (document.body ? Promise.resolve() : new Promise(function (r) { document.addEventListener('DOMContentLoaded', r); })).then(function () { document.body.appendChild(b); });
})();
