/**
 * METANOIA LABS — SHARED MOBILE FOOTER
 * ------------------------------------
 * One footer, injected on every page that includes this script, shown
 * only at mobile widths (the desktop layouts keep their own footers).
 * Links resolve against the site root derived from this script's own
 * src, so the same file works from any directory depth. On pages with
 * a fixed bottom tab bar the footer adds clearance so nothing hides
 * behind it. Labels are bilingual via the site's data-en/data-id sweep.
 */
(function () {
  'use strict';
  if (document.getElementById('mobFooter')) return;

  /* site root from this script's src ("js/mob-footer.js" suffix) */
  var src = (document.currentScript && document.currentScript.src) || '';
  var base = src.replace(/js\/mob-footer\.js.*$/, '');
  if (!base) base = './';

  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }

  var css = '' +
  '#mobFooter{display:none}' +
  '@media(max-width:820px){' +
    '#mobFooter{display:block;margin-top:48px;border-top:1px solid var(--gold-border,rgba(201,168,76,.22));' +
      'background:var(--glass-bg,rgba(10,16,28,.6));backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);' +
      'padding:30px 22px calc(26px + env(safe-area-inset-bottom,0px));position:relative;z-index:5}' +
    'body.has-bottom-bar #mobFooter{padding-bottom:calc(96px + env(safe-area-inset-bottom,0px))}' +
    '#mobFooter .mf-brand{display:flex;align-items:center;gap:10px;margin-bottom:8px}' +
    '#mobFooter .mf-brand svg{flex:none}' +
    '#mobFooter .mf-brand b{font-size:13px;letter-spacing:.18em;color:var(--text,#F0EDE8);font-weight:800}' +
    '#mobFooter .mf-brand b i{font-style:normal;color:#C9A84C;letter-spacing:.22em;font-size:10.5px;display:block;margin-top:1px}' +
    '#mobFooter .mf-tag{font-size:12.5px;line-height:1.65;color:var(--text-muted,#8B94A7);margin:0 0 18px;max-width:340px}' +
    '#mobFooter .mf-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px 18px;margin-bottom:20px}' +
    '#mobFooter .mf-grid a{display:flex;align-items:center;min-height:44px;font-size:13.5px;font-weight:600;' +
      'color:var(--text-sub,#B8BFCE);text-decoration:none;border-bottom:1px solid var(--gold-border,rgba(201,168,76,.14))}' +
    '#mobFooter .mf-grid a:active{color:#C9A84C}' +
    '#mobFooter .mf-legal{display:flex;flex-wrap:wrap;gap:2px 18px;margin-bottom:16px}' +
    '#mobFooter .mf-legal a{font-size:12px;color:var(--text-faint,#6B7385);text-decoration:none;min-height:38px;display:inline-flex;align-items:center}' +
    '#mobFooter .mf-legal a:active{color:#C9A84C}' +
    '#mobFooter .mf-c{font-size:11.5px;color:var(--text-faint,#6B7385);letter-spacing:.03em}' +
  '}' +
  ':root[data-theme="light"] #mobFooter{background:rgba(244,246,250,.82)}';

  var mark =
    '<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">' +
    '<circle cx="15" cy="15" r="13.6" fill="none" stroke="#C9A84C" stroke-width="1.6"/>' +
    '<path d="M9 20 L13 10.5 L15 15 L17 10.5 L21 20" fill="none" stroke="#C9A84C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function A(href, en, id) {
    return '<a href="' + base + href + '"><span data-en="' + en + '" data-id="' + id + '">' + (lang() === 'id' ? id : en) + '</span></a>';
  }

  var el = document.createElement('footer');
  el.id = 'mobFooter';
  el.setAttribute('role', 'contentinfo');
  el.innerHTML =
    '<div class="mf-brand">' + mark + '<b>METANOIA<i>LABS</i></b></div>' +
    '<p class="mf-tag"><span data-en="The map, the gear, the rope team — a career navigation system built for the climb." data-id="Peta, perlengkapan, tim tali — sistem navigasi karier yang dibangun untuk pendakian.">' +
      (lang() === 'id' ? 'Peta, perlengkapan, tim tali — sistem navigasi karier yang dibangun untuk pendakian.' : 'The map, the gear, the rope team — a career navigation system built for the climb.') + '</span></p>' +
    '<nav class="mf-grid" aria-label="Footer">' +
      A('index.html', 'Home', 'Beranda') +
      A('portal.html', 'Portal', 'Portal') +
      A('pricing.html', 'Pricing', 'Harga') +
      A('help.html', 'Help Centre', 'Pusat Bantuan') +
      A('pages/mind-palace.html', 'Mind Palace', 'Mind Palace') +
      A('pages/about.html', 'About', 'Tentang') +
    '</nav>' +
    '<div class="mf-legal">' +
      A('legal/privacy.html', 'Privacy', 'Privasi') +
      A('legal/terms.html', 'Terms', 'Ketentuan') +
      A('legal/data-dignity.html', 'Data Dignity', 'Martabat Data') +
    '</div>' +
    '<div class="mf-c">© 2026 Metanoia Labs · <span data-en="In beta" data-id="Versi beta">' + (lang() === 'id' ? 'Versi beta' : 'In beta') + '</span></div>';

  function mount() {
    var st = document.createElement('style');
    st.id = 'mobFooterCss';
    st.textContent = css;
    document.head.appendChild(st);
    if (document.querySelector('.bottom-bar, .mobile-tab-bar, .bottom-tab-bar')) document.body.classList.add('has-bottom-bar');
    document.body.appendChild(el);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
