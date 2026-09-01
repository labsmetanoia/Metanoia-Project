/**
 * METANOIA LABS — SHARED MOBILE FOOTER
 * ------------------------------------
 * One script, two jobs, both mobile-only (≤820px; desktop keeps its
 * existing layouts untouched):
 *
 *  1. Pages that already carry the global .site-footer get a grouped,
 *     collapsible treatment retrofitted onto its columns — each column
 *     header becomes an accordion toggle with a chevron, the first
 *     group open by default, so the long link list reads as a tidy
 *     set of sections instead of one tall column.
 *  2. Pages with no footer at all get a compact injected footer built
 *     the same way: brand, collapsible link groups, a legal row and
 *     the copyright line.
 *
 * Links resolve against the site root derived from this script's own
 * src, so the same file works from any directory depth. On pages with
 * a fixed bottom tab bar the footer adds clearance so nothing hides
 * behind it. Labels are bilingual via the site's data-en/data-id sweep.
 */
(function () {
  'use strict';

  var src = (document.currentScript && document.currentScript.src) || '';
  var base = src.replace(/js\/mob-footer\.js.*$/, '');
  if (!base) base = './';

  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function T(en, id) { return lang() === 'id' ? id : en; }

  /* ── mode 1: retrofit the global site-footer into mobile accordions ── */
  function retrofit(sf) {
    if (document.getElementById('sfMobCss')) return;
    var st = document.createElement('style');
    st.id = 'sfMobCss';
    st.textContent =
      '@media(max-width:820px){' +
        '.site-footer .sf-grid{display:block}' +
        '.site-footer .sf-brand{margin-bottom:10px}' +
        '.site-footer .sf-col{border-bottom:1px solid rgba(245,239,230,.12)}' +
        '.site-footer .sf-col .sf-h{display:flex;align-items:center;justify-content:space-between;gap:12px;' +
          'margin:0;padding:16px 0;min-height:48px;cursor:pointer;font-size:12px;-webkit-tap-highlight-color:transparent}' +
        '.site-footer .sf-col .sf-h::after{content:"";width:8px;height:8px;flex:none;' +
          'border-right:2px solid #E8C766;border-bottom:2px solid #E8C766;' +
          'transform:rotate(45deg);transition:transform .25s ease;margin-top:-4px}' +
        '.site-footer .sf-col.open .sf-h::after{transform:rotate(225deg);margin-top:4px}' +
        '.site-footer .sf-col a{display:none}' +
        '.site-footer .sf-col.open a{display:block;padding:11px 0;font-size:14px}' +
        '.site-footer .sf-col.open{padding-bottom:8px}' +
      '}';
    document.head.appendChild(st);
    var cols = sf.querySelectorAll('.sf-col');
    cols.forEach(function (col, i) {
      if (i === 0) col.classList.add('open');
      var h = col.querySelector('.sf-h');
      if (!h) return;
      h.setAttribute('role', 'button');
      h.setAttribute('tabindex', '0');
      h.setAttribute('aria-expanded', col.classList.contains('open') ? 'true' : 'false');
      function toggle() {
        col.classList.toggle('open');
        h.setAttribute('aria-expanded', col.classList.contains('open') ? 'true' : 'false');
      }
      h.addEventListener('click', toggle);
      h.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      });
    });
  }

  /* ── mode 2: inject a grouped footer where none exists ── */
  var GROUPS = [
    { h: ['Explore', 'Jelajah'], open: true, links: [
      ['index.html', 'Home', 'Beranda'],
      ['portal.html', 'Portal', 'Portal'],
      ['pages/mind-palace.html', 'Mind Palace', 'Mind Palace'],
      ['pricing.html', 'Pricing', 'Harga']
    ] },
    { h: ['Products', 'Produk'], links: [
      ['products/the-map/', 'The Map · Direction', 'The Map · Arah'],
      ['products/the-pack/', 'The Pack · Application', 'The Pack · Lamaran'],
      ['products/the-rope/', 'The Rope · Interview', 'The Rope · Wawancara'],
      ['products/the-route/', 'The Route · What’s next', 'The Route · Langkah berikut'],
      ['products/the-compass/', 'The Compass · Navigation', 'The Compass · Navigasi']
    ] },
    { h: ['Support', 'Dukungan'], links: [
      ['help.html', 'Help Centre', 'Pusat Bantuan'],
      ['pages/about.html', 'About Us', 'Tentang Kami'],
      ['pages/mentors.html', 'For Mentors', 'Untuk Mentor'],
      ['pages/enterprise.html', 'For Enterprise', 'Untuk Perusahaan']
    ] }
  ];

  var css = '' +
  '#mobFooter{display:none}' +
  '@media(max-width:820px){' +
    '#mobFooter{display:block;margin-top:48px;border-top:1px solid var(--gold-border,rgba(201,168,76,.22));' +
      'background:var(--glass-bg,rgba(10,16,28,.6));backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);' +
      'padding:28px 22px calc(24px + env(safe-area-inset-bottom,0px));position:relative;z-index:5}' +
    'body.has-bottom-bar #mobFooter{padding-bottom:calc(96px + env(safe-area-inset-bottom,0px))}' +
    '#mobFooter .mf-brand{display:flex;align-items:center;gap:10px;margin-bottom:8px}' +
    '#mobFooter .mf-brand svg{flex:none}' +
    '#mobFooter .mf-brand b{font-size:13px;letter-spacing:.18em;color:var(--text,#F0EDE8);font-weight:800}' +
    '#mobFooter .mf-brand b i{font-style:normal;color:#C9A84C;letter-spacing:.22em;font-size:10.5px;display:block;margin-top:1px}' +
    '#mobFooter .mf-tag{font-size:12.5px;line-height:1.65;color:var(--text-muted,#8B94A7);margin:0 0 14px;max-width:340px}' +
    '#mobFooter .mf-g{border-bottom:1px solid var(--gold-border,rgba(201,168,76,.16))}' +
    '#mobFooter .mf-gh{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;' +
      'background:none;border:0;padding:15px 0;min-height:48px;cursor:pointer;font-family:inherit;text-align:left;' +
      'font-size:12px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--gold,#C9A84C);' +
      '-webkit-tap-highlight-color:transparent}' +
    '#mobFooter .mf-gh::after{content:"";width:8px;height:8px;flex:none;' +
      'border-right:2px solid var(--gold,#C9A84C);border-bottom:2px solid var(--gold,#C9A84C);' +
      'transform:rotate(45deg);transition:transform .25s ease;margin-top:-4px}' +
    '#mobFooter .mf-g.open .mf-gh::after{transform:rotate(225deg);margin-top:4px}' +
    '#mobFooter .mf-gl{display:none;padding-bottom:10px}' +
    '#mobFooter .mf-g.open .mf-gl{display:block}' +
    '#mobFooter .mf-gl a{display:flex;align-items:center;min-height:42px;font-size:14px;font-weight:600;' +
      'color:var(--text-sub,#B8BFCE);text-decoration:none}' +
    '#mobFooter .mf-gl a:active{color:#C9A84C}' +
    '#mobFooter .mf-legal{display:flex;flex-wrap:wrap;gap:2px 20px;margin:18px 0 14px}' +
    '#mobFooter .mf-legal a{font-size:12.5px;color:var(--text-sub,#B8BFCE);text-decoration:underline;' +
      'text-underline-offset:3px;min-height:38px;display:inline-flex;align-items:center}' +
    '#mobFooter .mf-legal a:active{color:#C9A84C}' +
    '#mobFooter .mf-c{font-size:11.5px;color:var(--text-faint,#6B7385);letter-spacing:.03em}' +
  '}' +
  ':root[data-theme="light"] #mobFooter{background:rgba(244,246,250,.82)}';

  var mark =
    '<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">' +
    '<circle cx="15" cy="15" r="13.6" fill="none" stroke="#C9A84C" stroke-width="1.6"/>' +
    '<path d="M9 20 L13 10.5 L15 15 L17 10.5 L21 20" fill="none" stroke="#C9A84C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function A(href, en, id) {
    return '<a href="' + base + href + '"><span data-en="' + en + '" data-id="' + id + '">' + T(en, id) + '</span></a>';
  }

  function inject() {
    if (document.getElementById('mobFooter')) return;
    var st = document.createElement('style');
    st.id = 'mobFooterCss';
    st.textContent = css;
    document.head.appendChild(st);

    var el = document.createElement('footer');
    el.id = 'mobFooter';
    el.setAttribute('role', 'contentinfo');
    var html =
      '<div class="mf-brand">' + mark + '<b>METANOIA<i>LABS</i></b></div>' +
      '<p class="mf-tag"><span data-en="The map, the gear, the rope team — a career navigation system built for the climb." data-id="Peta, perlengkapan, tim tali — sistem navigasi karier yang dibangun untuk pendakian.">' +
        T('The map, the gear, the rope team — a career navigation system built for the climb.',
          'Peta, perlengkapan, tim tali — sistem navigasi karier yang dibangun untuk pendakian.') + '</span></p>';
    GROUPS.forEach(function (g, gi) {
      html +=
        '<div class="mf-g' + (g.open ? ' open' : '') + '">' +
        '<button class="mf-gh" type="button" aria-expanded="' + (g.open ? 'true' : 'false') + '" aria-controls="mfGl' + gi + '">' +
          '<span data-en="' + g.h[0] + '" data-id="' + g.h[1] + '">' + T(g.h[0], g.h[1]) + '</span></button>' +
        '<nav class="mf-gl" id="mfGl' + gi + '" aria-label="' + g.h[0] + '">' +
          g.links.map(function (l) { return A(l[0], l[1], l[2]); }).join('') +
        '</nav></div>';
    });
    html +=
      '<div class="mf-legal">' +
        A('legal/terms.html', 'Terms & Conditions', 'Syarat & Ketentuan') +
        A('legal/privacy.html', 'Privacy Notice', 'Kebijakan Privasi') +
        A('legal/data-dignity.html', 'Data Dignity', 'Martabat Data') +
      '</div>' +
      '<div class="mf-c">© 2026 Metanoia Labs · <span data-en="In beta" data-id="Versi beta">' + T('In beta', 'Versi beta') + '</span></div>';
    el.innerHTML = html;

    el.addEventListener('click', function (e) {
      var h = e.target.closest('.mf-gh');
      if (!h) return;
      var g = h.parentElement;
      g.classList.toggle('open');
      h.setAttribute('aria-expanded', g.classList.contains('open') ? 'true' : 'false');
    });

    if (document.querySelector('.bottom-bar, .mobile-tab-bar, .bottom-tab-bar')) document.body.classList.add('has-bottom-bar');
    document.body.appendChild(el);
  }

  function mount() {
    var sf = document.querySelector('.site-footer');
    if (sf) retrofit(sf);
    else inject();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
