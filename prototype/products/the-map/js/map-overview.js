/**
 * THE MAP — PRODUCT OVERVIEW DOCUMENT
 * -----------------------------------
 * Serves the product overview exactly as supplied: the original PDF,
 * unchanged, in the visitor's language. The "Product overview" button
 * in the hero opens it in an on-page viewer (the browser's own PDF
 * rendering inside a frame), with a plain link to open or save the file
 * where inline rendering is unavailable (some mobile browsers).
 *
 * Language: the English or Bahasa Indonesia file is chosen from the
 * site's language setting (localStorage mtLang) and swapped live when
 * the visitor changes language while the viewer is open.
 *
 * Nothing here alters, re-lays-out or adds to the document.
 */
(function () {
  'use strict';

  var DOCS = {
    en: '../../assets/docs/the-map-overview-en.pdf',
    id: '../../assets/docs/the-map-overview-id.pdf'
  };
  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function T(en, id) { return lang() === 'id' ? id : en; }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  var css = '' +
  '#mapOverview{position:fixed;inset:0;z-index:1250;display:none;background:#050A12;color:#F0EDE8}' +
  '#mapOverview.open{display:flex;flex-direction:column}' +
  '#mapOverview .mo-top{display:flex;align-items:center;gap:12px;padding:10px 18px;flex-wrap:wrap;' +
    'border-bottom:1px solid rgba(201,168,76,.22);background:rgba(5,10,18,.92)}' +
  '#mapOverview .mo-kick{font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#C9A84C}' +
  '#mapOverview .mo-open{margin-left:auto;display:inline-flex;align-items:center;gap:7px;min-height:38px;padding:8px 14px;' +
    'border:1px solid rgba(201,168,76,.45);border-radius:999px;color:#F0EDE8;text-decoration:none;font-size:12.5px;font-weight:700}' +
  '#mapOverview .mo-open:hover,#mapOverview .mo-open:focus-visible{border-color:#C9A84C;outline:none}' +
  '#mapOverview .mo-x{width:38px;height:38px;flex:none;border-radius:999px;border:1px solid rgba(201,168,76,.35);background:none;color:#F0EDE8;font-size:15px;cursor:pointer}' +
  '#mapOverview .mo-x:hover,#mapOverview .mo-x:focus-visible{border-color:#C9A84C;outline:none}' +
  '#mapOverview .mo-doc{flex:1;min-height:0;position:relative;background:#1a1d24}' +
  '#mapOverview .mo-doc iframe{position:absolute;inset:0;width:100%;height:100%;border:0;background:#1a1d24}' +
  '#mapOverview .mo-fallback{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:24px;text-align:center;' +
    'font-size:14px;line-height:1.6;color:rgba(240,237,232,.8);background:#050A12}' +
  '#mapOverview .mo-fallback a{display:inline-flex;align-items:center;min-height:44px;padding:11px 20px;border-radius:999px;font-weight:800;text-decoration:none;' +
    'background:linear-gradient(135deg,#8B6914,#C9A84C,#F0D878);color:#10131B}' +
  '#mapOverview .mo-fallback[hidden]{display:none}';

  var root = null, frame = null, openLink = null, fallback = null, opener = null;

  function build() {
    if (root) return;
    var st = document.createElement('style');
    st.id = 'mapOverviewCss'; st.textContent = css;
    document.head.appendChild(st);

    root = el('div'); root.id = 'mapOverview';
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true');
    root.setAttribute('aria-label', 'The Map product overview');

    var top = el('div', 'mo-top');
    var kick = el('span', 'mo-kick');
    kick.setAttribute('data-en', 'The Map · Product overview');
    kick.setAttribute('data-id', 'The Map · Ringkasan produk');
    kick.textContent = T('The Map · Product overview', 'The Map · Ringkasan produk');
    top.appendChild(kick);
    openLink = el('a', 'mo-open');
    openLink.target = '_blank'; openLink.rel = 'noopener';
    var ol = el('span');
    ol.setAttribute('data-en', 'Open in new tab'); ol.setAttribute('data-id', 'Buka di tab baru');
    ol.textContent = T('Open in new tab', 'Buka di tab baru');
    openLink.appendChild(ol);
    openLink.insertAdjacentHTML('beforeend', ' <span aria-hidden="true">↗</span>');
    top.appendChild(openLink);
    var x = el('button', 'mo-x', '✕');
    x.setAttribute('aria-label', 'Close');
    x.addEventListener('click', close);
    top.appendChild(x);

    var doc = el('div', 'mo-doc');
    frame = document.createElement('iframe');
    frame.title = 'The Map product overview';
    doc.appendChild(frame);
    /* shown only where the browser cannot render PDFs inline */
    fallback = el('div', 'mo-fallback');
    fallback.hidden = true;
    var fp = el('p');
    fp.setAttribute('data-en', 'This browser cannot display the document inline.');
    fp.setAttribute('data-id', 'Peramban ini tidak dapat menampilkan dokumen secara langsung.');
    fp.textContent = T('This browser cannot display the document inline.', 'Peramban ini tidak dapat menampilkan dokumen secara langsung.');
    var fa = el('a');
    fa.target = '_blank'; fa.rel = 'noopener';
    fa.setAttribute('data-en', 'Open the document'); fa.setAttribute('data-id', 'Buka dokumen');
    fa.textContent = T('Open the document', 'Buka dokumen');
    fallback.appendChild(fp); fallback.appendChild(fa);
    doc.appendChild(fallback);

    root.appendChild(top); root.appendChild(doc);
    document.body.appendChild(root);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('open')) close();
    });
    /* follow the site language toggle while open */
    document.querySelectorAll('.ctl button, button[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () { setTimeout(function () { if (root.classList.contains('open')) load(); }, 60); });
    });
  }

  function canInlinePdf() {
    try {
      if (navigator.pdfViewerEnabled != null) return navigator.pdfViewerEnabled;
      var mt = navigator.mimeTypes && navigator.mimeTypes['application/pdf'];
      return !!mt;
    } catch (e) { return true; }
  }

  function load() {
    var src = DOCS[lang()];
    openLink.href = src;
    fallback.querySelector('a').href = src;
    if (canInlinePdf()) {
      fallback.hidden = true;
      if (frame.getAttribute('src') !== src) frame.setAttribute('src', src);
    } else {
      frame.removeAttribute('src');
      fallback.hidden = false;
    }
  }

  function open(fromEl) {
    build();
    opener = fromEl || document.activeElement;
    root.classList.add('open');
    document.body.classList.add('lms-lock');
    load();
    root.querySelector('.mo-x').focus();
  }
  function close() {
    if (!root) return;
    root.classList.remove('open');
    document.body.classList.remove('lms-lock');
    if (opener && opener.focus) { try { opener.focus(); } catch (e) {} }
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-map-overview]');
    if (!b) return;
    e.preventDefault();
    open(b);
  });

  window.MT_MAP_OVERVIEW = { open: open, close: close, docs: DOCS };
})();
