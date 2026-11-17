/* Metanoia Labs: the site-wide notice.
 *
 * One short line the owner switches on in the admin page (Notice bar), with an optional link and a
 * last day. Read from GET /api/notice, kept for ten minutes per tab so a visit costs one request,
 * and drawn as a small card at the bottom of the page. Closing it is remembered for that notice
 * only: new wording shows again. Follows the page language. Does nothing where the API is absent.
 */
(function () {
  'use strict';
  if (window.MT_NOTICE || !window.fetch) return;
  window.MT_NOTICE = 1;
  var CACHE = 'mt-notice', CLOSED = 'mt-notice-closed', TTL = 600000;
  var read = function (store, k) { try { return store.getItem(k); } catch (e) { return null; } };
  var write = function (store, k, v) { try { store.setItem(k, v); } catch (e) {} };
  var isId = function () { return (document.documentElement.lang || 'en').toLowerCase().indexOf('id') === 0; };

  function draw(n) {
    if (!n || !n.key || !n.text || read(localStorage, CLOSED) === n.key || document.getElementById('mtNotice')) return;
    var css = document.createElement('style');
    css.textContent =
      '.mt-notice{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:80;box-sizing:border-box;width:calc(100% - 24px);max-width:600px;display:flex;align-items:center;gap:12px;' +
      'padding:12px 12px 12px 18px;border-radius:14px;border:1px solid rgba(201,168,76,.5);background:rgba(10,16,26,.97);color:#F5EFE6;font:500 14px/1.5 Inter,-apple-system,"Segoe UI",Roboto,sans-serif;' +
      'box-shadow:0 12px 36px rgba(0,0,0,.45)}' +
      '.mt-notice p{margin:0;flex:1;min-width:0}' +
      '.mt-notice a{color:#E9D28A;font-weight:700;text-decoration:underline;text-underline-offset:3px;white-space:nowrap}' +
      '.mt-notice button{flex:none;width:40px;height:40px;border-radius:50%;border:1px solid rgba(245,239,230,.25);background:none;color:#F5EFE6;font:400 20px/1 inherit;cursor:pointer}' +
      '.mt-notice button:hover,.mt-notice button:focus-visible{border-color:#E9D28A;color:#E9D28A}' +
      '@media (max-width:640px){.mt-notice{bottom:12px;font-size:13.5px;padding-left:14px}}' +
      '@media print{.mt-notice{display:none}}';
    document.head.appendChild(css);
    var bar = document.createElement('aside'), p = document.createElement('p'), txt = document.createElement('span'), x = document.createElement('button'), a = null;
    bar.className = 'mt-notice'; bar.id = 'mtNotice'; bar.setAttribute('role', 'status');
    p.appendChild(txt);
    if (n.link && /^(\/(?!\/)|https:\/\/)/.test(n.link.href || '')) {
      a = document.createElement('a'); a.href = n.link.href;
      p.appendChild(document.createTextNode(' ')); p.appendChild(a);
    }
    x.type = 'button'; x.textContent = '×';
    function fill() {
      var id = isId();
      txt.textContent = n.text[id ? 'id' : 'en'] || n.text.en || '';
      if (a) a.textContent = n.link[id ? 'id' : 'en'] || n.link.en || '';
      bar.setAttribute('aria-label', id ? 'Pengumuman' : 'Notice');
      x.setAttribute('aria-label', id ? 'Tutup pengumuman' : 'Close notice');
    }
    fill();
    x.addEventListener('click', function () { write(localStorage, CLOSED, n.key); bar.remove(); });
    bar.appendChild(p); bar.appendChild(x);
    document.body.appendChild(bar);
    if (window.MutationObserver) new MutationObserver(fill).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }

  function start() {
    var c = null;
    try { c = JSON.parse(read(sessionStorage, CACHE) || 'null'); } catch (e) {}
    if (c && Date.now() - c.t < TTL) { draw(c.n); return; }
    fetch('/api/notice', { credentials: 'omit' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (d) {
      if (!d || !d.ok) return;
      write(sessionStorage, CACHE, JSON.stringify({ t: Date.now(), n: d.notice || null }));
      draw(d.notice);
    }).catch(function () {});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
