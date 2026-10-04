"""
Shared page shell for build-generated pages (The Range directory, company
pages, Mind Palace articles and categories).

One template, rendered by scripts/build-site.py: the site's dark palette,
topbar with breadcrumb and EN/ID toggle, the global footer, the bilingual
data-en / data-id sweep, and complete metadata (title, description,
canonical, Open Graph, Twitter card, hreflang alternates, JSON-LD).

Generated pages are designed to be light: no render-blocking font request,
no third-party requests, no framework. Web fonts load non-blocking and fall
back to the system stack.
"""
import html
import json

SITE = 'https://metanoialabs.net'

CSS = r"""
:root{--bg:#050A12;--bg2:#080E1A;--panel:#101C2E;--gold:#C9A84C;--gold-b:#F0D878;--gold-d:#8B6914;
--line:rgba(180,140,60,.16);--line-h:rgba(201,168,76,.38);--glass:rgba(8,14,26,.72);
--t:#FFFFFF;--t2:rgba(255,255,255,.82);--t3:rgba(255,255,255,.58);--t4:rgba(255,255,255,.34);
--explore:#7BA5C4;--ok:#5FB884;--font:'Roboto Condensed','Inter',system-ui,-apple-system,'Segoe UI',sans-serif;
--serif:'Playfair Display',Georgia,'Times New Roman',serif;color-scheme:dark}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;-webkit-text-size-adjust:100%}
body{font-family:var(--font);color:var(--t);background:radial-gradient(ellipse 80% 40% at 50% -5%,rgba(201,168,76,.07),transparent 60%),var(--bg);line-height:1.55;min-height:100vh;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}
button{font:inherit;cursor:pointer;color:inherit;background:none;border:0}
.topbar{position:sticky;top:0;z-index:20;display:flex;align-items:center;gap:14px;height:56px;padding:0 20px;background:var(--glass);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-bottom:1px solid var(--line)}
.tb-left{display:flex;align-items:center;gap:12px;min-width:0;flex:1}
.tb-wordmark{display:inline-flex;align-items:center;gap:8px;font-weight:700;letter-spacing:.06em;font-size:14px;white-space:nowrap}
.tb-wordmark svg{color:var(--gold)}
.tb-sep{width:1px;height:20px;background:var(--line-h)}
.crumb{font-size:12.5px;color:var(--t3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
.crumb a:hover{color:var(--gold-b)}
.crumb .cur{color:var(--t2)}
.lang{display:inline-flex;border:1px solid var(--line);border-radius:999px;overflow:hidden;flex:none}
.lang button{padding:6px 11px;font-size:12px;font-weight:700;color:var(--t3)}
.lang button.on{background:rgba(201,168,76,.16);color:var(--gold-b)}
main{max-width:1080px;margin:0 auto;padding:34px 20px 60px}
.kicker{font-size:11px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--gold)}
h1{font-family:var(--serif);font-weight:600;font-size:clamp(28px,4.4vw,42px);line-height:1.12;margin:8px 0 10px;letter-spacing:-.01em}
h2{font-size:clamp(19px,2.4vw,24px);font-weight:700;margin:34px 0 12px;letter-spacing:-.005em}
h3{font-size:16px;font-weight:700;margin:0 0 6px}
.sub{font-size:16px;color:var(--t2);max-width:68ch}
.muted{color:var(--t3);font-size:13px}
.micro{font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--t3);font-weight:700}
.chips{display:flex;flex-wrap:wrap;gap:6px}
.chip{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:700;padding:5px 10px;border-radius:999px;border:1px solid var(--line);color:var(--t2);background:rgba(255,255,255,.03)}
.chip.gold{border-color:var(--line-h);color:var(--gold-b)}
.chip.link:hover{border-color:var(--line-h);color:var(--gold-b)}
.prov{font-size:11.5px;font-weight:800;letter-spacing:.02em}
.prov.v{color:var(--ok)}.prov.i{color:var(--t3)}
.card{display:block;border:1px solid var(--line);border-radius:14px;background:linear-gradient(160deg,rgba(255,255,255,.035),rgba(255,255,255,.012));padding:16px;transition:border-color .2s,transform .2s}
a.card:hover{border-color:var(--line-h);transform:translateY(-1px)}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px}
.tile{width:44px;height:44px;border-radius:11px;display:inline-flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;letter-spacing:.02em;color:#0B0F16;flex:none;background:var(--tile,#C9A84C)}
.tile.lg{width:64px;height:64px;font-size:22px;border-radius:16px}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-weight:700;font-size:14px;padding:11px 20px;border-radius:999px;border:1px solid var(--line-h);color:var(--gold-b);min-height:44px;transition:background .2s,color .2s}
.btn:hover{background:rgba(201,168,76,.12)}
.btn.primary{background:linear-gradient(135deg,var(--gold),var(--gold-d));color:#0B0F16;border-color:transparent}
.btn.primary:hover{background:linear-gradient(135deg,var(--gold-b),var(--gold))}
.btn[disabled]{opacity:.5;cursor:default}
.note{border:1px dashed var(--line-h);border-radius:12px;padding:14px 16px;font-size:13.5px;color:var(--t2);background:rgba(201,168,76,.04)}
.tm{font-size:11.5px;color:var(--t4);line-height:1.5;margin-top:34px;max-width:78ch}
.row{display:flex;gap:12px;align-items:center;flex-wrap:wrap}
.sk{position:relative;overflow:hidden;background:rgba(255,255,255,.05);border-radius:8px}
.sk::after{content:"";position:absolute;inset:0;transform:translateX(-100%);background:linear-gradient(90deg,transparent,rgba(255,255,255,.07),transparent);animation:sk 1.3s infinite}
@keyframes sk{to{transform:translateX(100%)}}
@media (prefers-reduced-motion:reduce){.sk::after{animation:none}}
/* ═══ Global footer — one component across the ecosystem ═══
   The night sky of the footer background carries the content; the painted
   ridge and rider sit beneath the legal row. Night palette in both themes. */
.site-footer{position:relative;z-index:2;isolation:isolate;overflow:hidden;border-top:1px solid rgba(201,168,76,.3);background:#070C15;
  color:#D3DAE3;font-family:'Roboto Condensed','Inter',system-ui,sans-serif;font-size:13.5px;line-height:1.6;
  padding:66px 0 clamp(190px,23vw,320px);text-align:left}
.site-footer::before{content:"";position:absolute;left:0;right:0;bottom:0;height:clamp(320px,56vw,760px);z-index:-1;pointer-events:none;
  background:url('/assets/bg/footer-background.jpg') center bottom/cover no-repeat;
  -webkit-mask-image:linear-gradient(180deg,transparent 0,rgba(0,0,0,.45) 28%,#000 58%);mask-image:linear-gradient(180deg,transparent 0,rgba(0,0,0,.45) 28%,#000 58%)}
.site-footer::after{content:"";position:absolute;left:0;right:0;bottom:0;height:3px;z-index:1;background:linear-gradient(90deg,transparent,rgba(240,216,120,.75),transparent)}
.site-footer .sf-in{position:relative;max-width:1180px;margin:0 auto;padding:0 32px}
.sf-grid{display:grid;grid-template-columns:1.5fr .95fr 1fr .95fr .8fr;gap:40px 28px}
.sf-brand{display:flex;flex-direction:column;align-items:flex-start;gap:14px}
.sf-logo{display:flex;align-items:center;gap:12px;text-decoration:none;color:#F5EFE6}
.sf-logo .sfb{width:1px;height:26px;background:rgba(245,239,230,.35)}
.sf-logo b{display:block;font-size:13.5px;font-weight:700;letter-spacing:.28em;text-transform:uppercase;line-height:1;color:#F5EFE6}
.sf-logo i{display:block;font-style:normal;font-size:8.5px;font-weight:700;letter-spacing:.44em;text-transform:uppercase;color:#E8C766;text-align:right;margin-top:3px}
.sf-tag{margin:2px 0 0;font-family:"Playfair Display",Georgia,serif;font-style:italic;font-size:15.5px;line-height:1.55;color:#C9D1DC;max-width:30ch}
.sf-mail{display:inline-flex;align-items:center;gap:9px;color:#E8C766;text-decoration:none;font-weight:700;font-size:13.5px;letter-spacing:.02em}
.sf-mail:hover{color:#F0D878}
.sf-mail svg{flex:none}
.sf-soc{display:flex;flex-wrap:wrap;align-items:center;gap:8px 10px;font-size:12px;color:#8C96A3;letter-spacing:.04em}
.sf-soc>span:first-child{width:100%;font-size:10.5px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:#8C96A3}
.sf-soc i{font-style:normal;display:inline-flex;align-items:center;min-height:30px;padding:0 12px;border-radius:999px;border:1px solid rgba(245,239,230,.18);color:#D3DAE3;font-size:12px;letter-spacing:.06em}
.sf-col .sf-h{display:block;font-size:11px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:#E8C766;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid rgba(232,199,102,.22)}
.sf-col a{display:block;color:#B9C2CE;text-decoration:none;padding:5px 0;font-size:13.5px;transition:color .2s,transform .2s}
.sf-col a:hover{color:#F0D878;transform:translateX(3px)}
.sf-news{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(280px,.9fr);gap:18px 40px;align-items:center;margin-top:46px;padding:22px 26px;
  border:1px solid rgba(232,199,102,.26);border-radius:18px;background:linear-gradient(135deg,rgba(201,168,76,.12),rgba(5,10,18,.35));backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.sf-news .sf-nk{display:block;font-size:10.5px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:#E8C766;margin-bottom:6px}
.sf-news .sf-nt{display:block;font-family:"Playfair Display",Georgia,serif;font-size:20px;line-height:1.25;color:#F5EFE6;margin-bottom:6px}
.sf-news .sf-np{margin:0;font-size:13px;line-height:1.6;color:#AEB7C4;max-width:48ch}
.sf-form{display:flex;align-items:stretch;border:1px solid rgba(232,199,102,.5);border-radius:999px;overflow:hidden;background:rgba(5,10,18,.6)}
.sf-form input{flex:1;min-width:0;background:none;border:0;outline:0;padding:12px 18px;color:#F5EFE6;font:inherit;font-size:13.5px}
.sf-form input::placeholder{color:#7F8996;font-style:italic;font-family:"Playfair Display",Georgia,serif}
.sf-form button{flex:none;display:inline-flex;align-items:center;gap:8px;padding:0 18px;border:0;cursor:pointer;font:inherit;font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;
  color:#0B1524;background:linear-gradient(135deg,#F0D878,#C9A84C);transition:filter .2s}
.sf-form button:hover{filter:brightness(1.06)}
.sf-form button svg{width:14px;height:14px}
.sf-news .sf-nf{margin:8px 2px 0;font-size:11.5px;color:#7F8996}
.sf-bottom{display:flex;gap:14px 22px;flex-wrap:wrap;align-items:center;margin-top:30px;padding-top:20px;
  border-top:1px solid rgba(245,239,230,.14);color:#AEB7C4;font-size:12.5px}
.sf-bottom .sf-legal{display:flex;gap:4px 20px;flex-wrap:wrap;margin-left:auto}
.sf-bottom a{color:#D3DAE3;text-decoration:none;font-style:italic;font-family:"Playfair Display",Georgia,serif;font-size:13px}
.sf-bottom a:hover{color:#F0D878}
/* the footer keeps its night palette in both themes — a deliberate boundary */
:root[data-theme="light"] .site-footer{background:#0A1222;border-top-color:rgba(139,105,20,.35)}
@media(max-width:1060px){.sf-grid{grid-template-columns:1.4fr 1fr 1fr;gap:34px 26px}}
@media(max-width:960px){.sf-news{grid-template-columns:1fr}}
@media(max-width:720px){.sf-grid{grid-template-columns:1fr 1fr}.site-footer{padding-top:52px}}
@media(max-width:520px){.sf-grid{grid-template-columns:1fr;gap:28px}.sf-news{padding:18px 18px}.sf-form button span{display:none}.sf-form button{padding:0 16px}}
/* mobile keeps the global footer — compact spacing, same night palette, the ridge still visible beneath */
body.m .site-footer{padding:44px 0 clamp(170px,44vw,230px)}
body.m .site-footer .sf-in{padding:0 22px}
body.m .sf-col a{padding:8px 0}
body.m .sf-bottom{margin-top:26px}
/* the fixed journey rail floats at the viewport foot on the flow page */
body.flow .site-footer{padding-bottom:calc(clamp(190px,23vw,320px) + 70px)}
@media(max-width:640px){.topbar{padding:0 12px;gap:8px}main{padding:26px 16px 48px}.grid{grid-template-columns:1fr}}
"""

LANG_BOOT = r"""
(function () {
  var has = null;
  try { has = localStorage.getItem('mtLang') || localStorage.getItem('mt-lang'); } catch (e) { return; }
  if (has) { try { if (!localStorage.getItem('mtLang')) localStorage.setItem('mtLang', has); if (!localStorage.getItem('mt-lang')) localStorage.setItem('mt-lang', has); } catch (e) {} return; }
  var indo = false;
  try { var tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || ''); indo = /^Asia\/(Jakarta|Pontianak|Makassar|Jayapura)$/.test(tz); } catch (e) {}
  if (!indo) { var langs = (navigator.languages || [navigator.language || '']).join(','); indo = /(^|,)\s*id([-_]|,|$)/i.test(langs); }
  var l = indo ? 'id' : 'en';
  try { localStorage.setItem('mtLang', l); localStorage.setItem('mt-lang', l); } catch (e) {}
})();
"""

LANG_SWEEP = r"""
(function () {
  var lang = 'en';
  try { var l = localStorage.getItem('mtLang'); if (l === 'id' || l === 'en') lang = l; } catch (e) {}
  function apply(l) {
    lang = l;
    document.documentElement.lang = l;
    document.querySelectorAll('[data-en]').forEach(function (el) { el.innerHTML = l === 'id' ? (el.getAttribute('data-id') || el.getAttribute('data-en')) : el.getAttribute('data-en'); });
    document.querySelectorAll('.lang button').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-lang') === l); });
    document.querySelectorAll('[data-ph-en]').forEach(function (el) { el.placeholder = l === 'id' ? el.getAttribute('data-ph-id') : el.getAttribute('data-ph-en'); });
    document.dispatchEvent(new CustomEvent('mt:lang', { detail: l }));
  }
  window.setLanguage = function (l) { if (l !== 'en' && l !== 'id') return; try { localStorage.setItem('mtLang', l); localStorage.setItem('mt-lang', l); } catch (e) {} apply(l); };
  window.mtLang = function () { return lang; };
  document.querySelectorAll('.lang button').forEach(function (b) { b.addEventListener('click', function () { window.setLanguage(b.getAttribute('data-lang')); }); });
  apply(lang);
})();
"""

FOOTER = """
<footer class="site-footer" id="siteFooter">
  <div class="sf-in">
    <div class="sf-grid">
      <div class="sf-brand">
        <a class="sf-logo" href="/" aria-label="Metanoia Labs home">
          <svg width="30" height="30" viewBox="0 0 40 40" fill="none" aria-hidden="true"><defs><linearGradient id="lgSF" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stop-color="#C97B1E"/><stop offset="55%" stop-color="#F5A623"/><stop offset="100%" stop-color="#FFD98A"/></linearGradient></defs><circle cx="20" cy="20" r="18.2" stroke="url(#lgSF)" stroke-width="1.6" opacity=".9"/><path d="M9 26.5 L15.5 13 L20 20 L24.5 11 L31 26.5" stroke="url(#lgSF)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24.5" cy="11" r="1.9" fill="#F59E0B"/></svg>
          <span class="sfb" aria-hidden="true"></span>
          <span><b>Metanoia</b><i>Labs</i></span>
        </a>
        <p class="sf-tag" data-en="One platform for the whole climb — from first direction to the summit, and back down as a guide." data-id="Satu platform untuk seluruh pendakian — dari arah pertama hingga puncak, lalu turun kembali sebagai pemandu.">One platform for the whole climb — from first direction to the summit, and back down as a guide.</p>
        <a class="sf-mail" href="mailto:hello@metanoialabs.net"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg>hello@metanoialabs.net</a>
        <span class="sf-soc"><span data-en="Follow the expedition" data-id="Ikuti ekspedisinya">Follow the expedition</span><i>LinkedIn</i><i>Instagram</i><i>TikTok</i></span>
      </div>
      <div class="sf-col">
        <span class="sf-h" data-en="The Journey" data-id="Perjalanan">The Journey</span>
        <a href="/pages/student" data-en="Student" data-id="Mahasiswa">Student</a>
        <a href="/pages/fresh-graduate">Fresh Graduate</a>
        <a href="/pages/early-professional" data-en="Early Professional" data-id="Profesional Muda">Early Professional</a>
        <a href="/pages/mature-professional" data-en="Mature Professional" data-id="Profesional Berpengalaman">Mature Professional</a>
        <a href="/pages/enterprise" data-en="For Enterprise" data-id="Untuk Perusahaan">For Enterprise</a>
        <a href="/pages/mentors" data-en="For Mentors" data-id="Untuk Mentor">For Mentors</a>
      </div>
      <div class="sf-col">
        <span class="sf-h" data-en="Platform" data-id="Platform">Platform</span>
        <a href="/products/the-map/" data-en="The Map · Direction" data-id="The Map · Arah">The Map · Direction</a>
        <a href="/products/the-pack/" data-en="The Pack · Application" data-id="The Pack · Lamaran">The Pack · Application</a>
        <a href="/products/the-rope/" data-en="The Rope · Interview" data-id="The Rope · Wawancara">The Rope · Interview</a>
        <a href="/products/the-route/" data-en="The Route · What's next" data-id="The Route · Selanjutnya">The Route · What's next</a>
        <a href="/products/the-compass/" data-en="The Compass · Navigation" data-id="The Compass · Navigasi">The Compass · Navigation</a>
      </div>
      <div class="sf-col">
        <span class="sf-h" data-en="Resources" data-id="Sumber Daya">Resources</span>
        <a href="/pages/mind-palace">Mind Palace</a>
        <a href="/products/the-map/range/" data-en="The Range · Company directory" data-id="The Range · Direktori perusahaan">The Range · Company directory</a>
        <a href="/career-map-assessment" data-en="Free Career Map" data-id="Career Map Gratis">Free Career Map</a>
        <a href="/pricing" data-en="Pricing" data-id="Harga">Pricing</a>
        <a href="/help" data-en="Help &amp; FAQ" data-id="Bantuan &amp; FAQ">Help &amp; FAQ</a>
      </div>
      <div class="sf-col">
        <span class="sf-h" data-en="Company" data-id="Perusahaan">Company</span>
        <a href="/pages/about" data-en="About Us" data-id="Tentang Kami">About Us</a>
        <a href="/login" data-en="Sign in" data-id="Masuk">Sign in</a>
        <a href="/register" data-en="Create account" data-id="Buat akun">Create account</a>
      </div>
    </div>
    <div class="sf-news">
      <div>
        <span class="sf-nk" data-en="Letters from the expedition" data-id="Surat dari ekspedisi">Letters from the expedition</span>
        <span class="sf-nt" data-en="New lessons, new companies in The Range, and one idea worth your week." data-id="Pelajaran baru, perusahaan baru di The Range, dan satu gagasan yang layak untuk mingumu.">New lessons, new companies in The Range, and one idea worth your week.</span>
        <p class="sf-np" data-en="Occasional, written by hand, never sold on. Unsubscribe with one reply." data-id="Sesekali, ditulis langsung, tidak pernah dijual. Berhenti berlangganan cukup dengan satu balasan.">Occasional, written by hand, never sold on. Unsubscribe with one reply.</p>
      </div>
      <div>
        <form class="sf-form" onsubmit="location.href='mailto:hello@metanoialabs.net?subject='+encodeURIComponent('Letters from the expedition')+'&amp;body='+encodeURIComponent('Please add me: '+this.email.value);return false">
          <input type="email" name="email" required placeholder="Enter your email" data-ph-en="Enter your email" data-ph-id="Masukkan email Anda" aria-label="Email address" autocomplete="email">
          <button type="submit"><span data-en="Subscribe" data-id="Berlangganan">Subscribe</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h15"/><path d="m13 6 6 6-6 6"/></svg></button>
        </form>
        <p class="sf-nf" data-en="Opens a ready-to-send email to hello@metanoialabs.net — we add you by hand." data-id="Membuka email siap kirim ke hello@metanoialabs.net — kami menambahkanmu secara manual.">Opens a ready-to-send email to hello@metanoialabs.net — we add you by hand.</p>
      </div>
    </div>
    <div class="sf-bottom">
      <span data-en="Metanoia · © 2026 · Every summit lights the next." data-id="Metanoia · © 2026 · Setiap puncak menerangi puncak berikutnya.">Metanoia · © 2026 · Every summit lights the next.</span>
      <span class="sf-legal">
        <a href="/legal/privacy" data-en="Privacy" data-id="Privasi">Privacy</a>
        <a href="/legal/terms" data-en="Terms" data-id="Ketentuan">Terms</a>
        <a href="/legal/data-dignity">Data Dignity</a>
      </span>
    </div>
  </div>
</footer>
"""

WORDMARK_SVG = '<svg width="22" height="22" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="18.2" stroke="currentColor" stroke-width="1.6" opacity=".8"/><path d="M9 26.5 L15.5 13 L20 20 L24.5 11 L31 26.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'


def esc(s):
    return html.escape(str(s if s is not None else ''), quote=True)


def bi(en, idn, tag='span', cls='', attrs=''):
    """A bilingual element: English inline, Indonesian in data-id."""
    c = f' class="{cls}"' if cls else ''
    return f'<{tag}{c}{(" " + attrs) if attrs else ""} data-en="{esc(en)}" data-id="{esc(idn)}">{esc(en)}</{tag}>'


def bi_html(en, idn, tag='span', cls='', attrs=''):
    """Bilingual element whose EN/ID values are trusted HTML fragments."""
    c = f' class="{cls}"' if cls else ''
    return f'<{tag}{c}{(" " + attrs) if attrs else ""} data-en="{esc(en)}" data-id="{esc(idn)}">{en}</{tag}>'


def truncate_desc(s, lo=140, hi=155):
    s = ' '.join(str(s).split())
    if len(s) <= hi:
        return s
    cut = s[:hi]
    sp = cut.rfind(' ')
    if sp >= lo - 20:
        cut = cut[:sp]
    return cut.rstrip(' ,;:—-') + '…'


def render(page):
    """page keys: title, desc, path, og_image, body, crumbs [(en, id, href|None)],
    jsonld (list of dicts), extra_head, extra_css, extra_js, feed (bool),
    og_type ('website'|'article'), published, modified."""
    title = page['title']
    desc = truncate_desc(page['desc'])
    url = SITE + page['path']
    og_image = page.get('og_image') or (SITE + '/assets/bg/hero.jpg')
    og_type = page.get('og_type', 'website')
    crumbs = page.get('crumbs') or []
    crumb_html = ''
    for i, (en, idn, href) in enumerate(crumbs):
        sep = ' › ' if i else ''
        if href:
            crumb_html += f'{sep}<a href="{esc(href)}" data-en="{esc(en)}" data-id="{esc(idn)}">{esc(en)}</a>'
        else:
            crumb_html += f'{sep}<span class="cur" data-en="{esc(en)}" data-id="{esc(idn)}">{esc(en)}</span>'
    jsonld = ''.join(f'<script type="application/ld+json">{json.dumps(j, ensure_ascii=False, separators=(",", ":"))}</script>\n' for j in page.get('jsonld') or [])
    feed = '<link rel="alternate" type="application/rss+xml" title="Mind Palace — Metanoia Labs" href="https://metanoialabs.net/mind-palace/feed.xml">\n' if page.get('feed') else ''
    article_meta = ''
    if og_type == 'article':
        if page.get('published'):
            article_meta += f'<meta property="article:published_time" content="{esc(page["published"])}">\n'
        if page.get('modified'):
            article_meta += f'<meta property="article:modified_time" content="{esc(page["modified"])}">\n'
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
<link rel="canonical" href="{esc(url)}">
<link rel="alternate" hreflang="en" href="{esc(url)}">
<link rel="alternate" hreflang="id" href="{esc(url)}">
<link rel="alternate" hreflang="x-default" href="{esc(url)}">
<meta name="color-scheme" content="dark">
<meta name="theme-color" content="#050A12">
<meta property="og:site_name" content="Metanoia Labs">
<meta property="og:type" content="{esc(og_type)}">
<meta property="og:url" content="{esc(url)}">
<meta property="og:title" content="{esc(title)}">
<meta property="og:description" content="{esc(desc)}">
<meta property="og:image" content="{esc(og_image)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_ID">
<meta property="og:locale:alternate" content="id_ID">
{article_meta}<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{esc(title)}">
<meta name="twitter:description" content="{esc(desc)}">
<meta name="twitter:image" content="{esc(og_image)}">
<link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48"><link rel="icon" type="image/svg+xml" href="/assets/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png"><link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon-192.png"><link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
{feed}{jsonld}<script>{LANG_BOOT}</script>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700;800&family=Playfair+Display:wght@600&display=swap" media="print" onload="this.media='all'">
<style>{CSS}{page.get('extra_css', '')}</style>
<link rel="stylesheet" href="/css/site-ui.css">
{page.get('extra_head', '')}</head>
<body>
<header class="topbar" role="banner">
  <div class="tb-left">
    <a href="/" class="tb-wordmark" aria-label="Metanoia Labs home">{WORDMARK_SVG}<span>Metanoia Labs</span></a>
    <span class="tb-sep" aria-hidden="true"></span>
    <nav class="crumb" aria-label="Breadcrumb">{crumb_html}</nav>
  </div>
  <div class="lang" role="group" aria-label="Language / Bahasa"><button type="button" data-lang="en" class="on">EN</button><button type="button" data-lang="id">ID</button></div>
</header>
<main id="main">
{page['body']}
</main>
{FOOTER}
<script>{LANG_SWEEP}</script>
{page.get('extra_js', '')}<script src="/js/mob-footer.js" defer></script>
</body>
</html>
'''
