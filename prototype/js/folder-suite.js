/* ═══ Folder suite — mobile product navigation ═══
   On phones the product carousel becomes a set of folders: a tab row attached
   to a panel, the folder's value proposition, an icon chip for every product,
   and snap-scrolling cards. The cards are built from the page's own product
   markup (the .pcar carousel or the .asc ascent), so copy stays in one place.
   Desktop is untouched: the block only shows at ≤768px (see folder-suite.css). */
(function () {
  'use strict';
  var host = document.querySelector('#prod-carousel, .pcar, #products-grid, .asc');
  if (!host || document.querySelector('.fsu')) return;
  var page = (location.pathname.split('/').pop() || '').replace(/\.html$/, '') || 'student';

  /* ── icons ── */
  var I = {
    compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polygon points="12,6.5 14,12 12,17.5 10,12" fill="currentColor" stroke="none"/></svg>',
    brief: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="3.5" y="7.5" width="17" height="12" rx="2.2"/><path d="M9 7.5V6a3 3 0 0 1 6 0v1.5M3.5 12.5h17"/></svg>',
    trend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17 10 11l4 4 6-7"/><path d="M15 8h5v5"/></svg>',
    cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 4.5 21 9l-9 4.5L3 9z"/><path d="M6.5 11v4.4c0 1.2 2.5 2.6 5.5 2.6s5.5-1.4 5.5-2.6V11"/><path d="M21 9v4.5"/></svg>',
    people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.2c2.7.2 5 2 5 4.8"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.9l-5.3 2.8 1.1-5.9-4.3-4.1 5.9-.8z"/></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M4 20h16M6 20V5h8v15M14 9h4v11"/><path d="M8.5 8h3M8.5 11.5h3M8.5 15h3"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
    chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    chevL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 6-6 6 6 6"/></svg>',
    chevR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s6-5.2 6-10.5a6 6 0 0 0-12 0C6 15.8 12 21 12 21Z"/><circle cx="12" cy="10.5" r="2.2"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg>',
    mark: '<svg viewBox="0 0 14 14" fill="none"><polygon points="7,1 9,5 13,5.5 10,8.5 10.8,13 7,11 3.2,13 4,8.5 1,5.5 5,5" fill="#C9A84C"/></svg>'
  };

  /* ── folders per page (which cards go where, and what the folder promises) ── */
  var PRODUCT_FOLDERS = [
    { id: 'direction', icon: 'compass', items: [0], label: { en: 'Find direction', id: 'Temukan arah' },
      title: { en: 'Start with who you are', id: 'Mulai dari siapa dirimu' },
      points: [{ en: 'Know your strengths, values and direction before you apply', id: 'Kenali kekuatan, nilai, dan arahmu sebelum melamar' },
               { en: 'A structured self-discovery journey, not a quiz', id: 'Perjalanan penemuan diri yang terstruktur, bukan sekadar kuis' },
               { en: 'Sets the target every other product works towards', id: 'Menetapkan target yang dituju semua produk lainnya' }] },
    { id: 'hired', icon: 'brief', items: [1, 2], label: { en: 'Get hired', id: 'Dapatkan pekerjaan' },
      title: { en: 'Everything between you and the offer', id: 'Semua yang ada di antara kamu dan tawaran' },
      points: [{ en: 'Application toolkit: CV, ATS, tests and simulations', id: 'Perangkat lamaran: CV, ATS, tes, dan simulasi' },
               { en: 'Interview mastery from first screen to final round', id: 'Penguasaan wawancara dari seleksi awal hingga babak akhir' },
               { en: 'Practise with feedback before it counts', id: 'Berlatih dengan umpan balik sebelum saatnya tiba' }] },
    { id: 'grow', icon: 'trend', items: [3, 4], label: { en: 'Grow & track', id: 'Bertumbuh & pantau' },
      title: { en: 'Keep climbing after the offer', id: 'Terus mendaki setelah tawaran' },
      points: [{ en: 'Scholarships, programmes and the next step, planned', id: 'Beasiswa, program, dan langkah berikutnya, terencana' },
               { en: 'Habits, reminders and progress in one place', id: 'Kebiasaan, pengingat, dan kemajuan di satu tempat' },
               { en: 'Your whole journey tracked, not just the job hunt', id: 'Seluruh perjalananmu terpantau, bukan hanya pencarian kerja' }] }
  ];
  var CONFIG = {
    student: { folders: PRODUCT_FOLDERS, price: true },
    'fresh-graduate': { folders: PRODUCT_FOLDERS, price: true },
    'early-professional': { folders: PRODUCT_FOLDERS, price: true },
    'mature-professional': { price: true, folders: [
      { id: 'assess', icon: 'compass', items: [0], label: { en: 'Assess', id: 'Asesmen' },
        title: { en: 'Measure your leadership first', id: 'Ukur kepemimpinan Anda lebih dulu' },
        points: [{ en: 'Leadership assessment against your next level', id: 'Asesmen kepemimpinan terhadap level berikutnya' },
                 { en: 'A gap analysis you can act on this quarter', id: 'Analisis kesenjangan yang bisa ditindaklanjuti kuartal ini' },
                 { en: 'The baseline every other program builds on', id: 'Titik awal yang menjadi dasar program lainnya' }] },
      { id: 'advance', icon: 'brief', items: [1, 2], label: { en: 'Advance', id: 'Melaju' },
        title: { en: 'Presence and positioning for the next role', id: 'Kehadiran dan posisi untuk peran berikutnya' },
        points: [{ en: 'Executive presence: the difference between director and VP', id: 'Kehadiran eksekutif: perbedaan antara direktur dan VP' },
                 { en: 'Strategic repositioning that redeploys your platform', id: 'Reposisi strategis yang memanfaatkan platform Anda' },
                 { en: 'Built for senior conversations, not entry-level ones', id: 'Dirancang untuk percakapan senior, bukan level pemula' }] },
      { id: 'plan', icon: 'trend', items: [3, 4], label: { en: 'Plan & track', id: 'Rencana & pantau' },
        title: { en: 'The second chapter, on a five-year arc', id: 'Babak kedua, dalam lengkung lima tahun' },
        points: [{ en: 'Scholarships and executive education, timed right', id: 'Beasiswa dan pendidikan eksekutif pada waktu yang tepat' },
                 { en: 'Every commitment tracked across the years', id: 'Setiap komitmen terpantau dari tahun ke tahun' },
                 { en: 'One place for the whole plan, not scattered notes', id: 'Satu tempat untuk seluruh rencana, bukan catatan tercecer' }] }
    ] },
    enterprise: { price: false, short: [{ en: 'Scholarships', id: 'Beasiswa' }, { en: 'Cohorts', id: 'Kohort' }, { en: 'Academy', id: 'Akademi' }, { en: 'Intelligence', id: 'Inteligensi' }, { en: 'Mentorship', id: 'Mentorship' }], folders: [
      { id: 'campus', icon: 'cap', items: [0, 3], label: { en: 'Campus & talent', id: 'Kampus & talenta' },
        title: { en: 'Reach the talent pool early', id: 'Jangkau kumpulan talenta lebih awal' },
        points: [{ en: 'Sponsor memberships at the universities you recruit from', id: 'Sponsori keanggotaan di universitas tempat Anda merekrut' },
                 { en: 'Aggregate readiness intelligence, never individual profiles', id: 'Inteligensi kesiapan agregat, bukan profil perorangan' },
                 { en: 'Design your campus strategy on evidence', id: 'Rancang strategi kampus Anda berdasarkan bukti' }] },
      { id: 'cohorts', icon: 'building', items: [1, 2], label: { en: 'Cohorts & academy', id: 'Kohort & akademi' },
        title: { en: 'Develop the people you already hired', id: 'Kembangkan orang-orang yang sudah Anda rekrut' },
        points: [{ en: 'Bulk licences for trainee and new-graduate cohorts', id: 'Lisensi massal untuk kohort trainee dan lulusan baru' },
                 { en: 'A company-branded academy on your competency framework', id: 'Akademi berlogo perusahaan di atas kerangka kompetensi Anda' },
                 { en: 'Progress dashboards and readiness reports for HR', id: 'Dasbor kemajuan dan laporan kesiapan untuk HR' }] },
      { id: 'leaders', icon: 'people', items: [4], label: { en: 'Leadership', id: 'Kepemimpinan' },
        title: { en: 'Put your leaders in the room', id: 'Hadirkan pemimpin Anda di ruangan' },
        points: [{ en: 'Senior leaders join as registered mentors', id: 'Pemimpin senior bergabung sebagai mentor terdaftar' },
                 { en: 'Leadership brand and retention equity, together', id: 'Merek kepemimpinan dan ekuitas retensi, sekaligus' },
                 { en: 'A structured program, not ad-hoc coffee chats', id: 'Program terstruktur, bukan obrolan kopi sesekali' }] }
    ] },
    mentors: { price: true, folders: [
      { id: 'start', icon: 'flag', items: [0, 4], label: { en: 'Get started', id: 'Mulai' },
        title: { en: 'Onboard with confidence', id: 'Mulai dengan percaya diri' },
        points: [{ en: 'Certification that sets you up, not guesswork', id: 'Sertifikasi yang menyiapkan Anda, bukan tebak-tebakan' },
                 { en: 'A profile and portfolio that let your contribution speak', id: 'Profil dan portofolio yang membuat kontribusi Anda berbicara' },
                 { en: 'Everything you need before the first session', id: 'Semua yang Anda butuhkan sebelum sesi pertama' }] },
      { id: 'mentor', icon: 'people', items: [1, 2], label: { en: 'Mentor well', id: 'Membimbing' },
        title: { en: 'Know who you meet and what to cover', id: 'Kenali siapa yang Anda temui dan apa yang dibahas' },
        points: [{ en: 'Matching and a dashboard for every mentee', id: 'Pencocokan dan dasbor untuk setiap mentee' },
                 { en: 'Session guides and frameworks that respect your time', id: 'Panduan sesi dan kerangka yang menghargai waktu Anda' },
                 { en: 'Walk in knowing why each session matters', id: 'Masuk dengan tahu mengapa setiap sesi penting' }] },
      { id: 'community', icon: 'star', items: [3], label: { en: 'Community', id: 'Komunitas' },
        title: { en: 'You are not mentoring alone', id: 'Anda tidak membimbing sendirian' },
        points: [{ en: 'A peer network of mentors who share what works', id: 'Jaringan sesama mentor yang berbagi apa yang berhasil' },
                 { en: 'Cohort gatherings and shared practice', id: 'Pertemuan kohort dan praktik bersama' },
                 { en: 'Recognition for the contribution you make', id: 'Pengakuan atas kontribusi yang Anda berikan' }] }
    ] }
  };
  var cfg = CONFIG[page] || CONFIG.student;

  /* ── helpers ── */
  function lang() { var l = document.documentElement.lang; if (l !== 'id') { try { l = localStorage.getItem('mtLang') || 'en'; } catch (e) { l = 'en'; } } return l === 'id' ? 'id' : 'en'; }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function pair(node) { if (!node) return null; var en = node.getAttribute('data-en'), id = node.getAttribute('data-id'); if (en == null) en = node.innerHTML.trim(); if (id == null) id = en; return { en: en, id: id }; }
  function bi(tag, cls, p) { var e = el(tag, cls); if (!p) return e; e.setAttribute('data-en', p.en); e.setAttribute('data-id', p.id); e.innerHTML = lang() === 'id' ? p.id : p.en; return e; }
  function strip(html) { var d = el('div', null, html); return (d.textContent || '').replace(/\s+/g, ' ').trim(); }
  function shorten(p, n) { function s(t) { t = strip(t); return t.length > n ? t.slice(0, n).replace(/\s+\S*$/, '') + '…' : t; } return { en: s(p.en), id: s(p.id) }; }
  var GRAD = { map: 'linear-gradient(140deg,#1D5FAB,#0A1E3A)', pack: 'linear-gradient(140deg,#0D7377,#05292B)', rope: 'linear-gradient(140deg,#B45309,#3A1B04)', route: 'linear-gradient(140deg,#1A5C38,#07200F)', compass: 'linear-gradient(140deg,#8B6914,#241800)' };

  /* ── read the page's cards into one model ── */
  function readCards() {
    var out = [];
    var pcar = host.querySelectorAll('.pcar-track > .prod-card:not([aria-hidden])');
    if (pcar.length) {
      pcar.forEach(function (c, k) {
        var head = c.querySelector('.pc-head'), art = c.querySelector('.pc-art'), svg = head && head.querySelector('svg');
        var tag = c.querySelector('.ptag'), h3 = c.querySelector('h3'), sub = c.querySelector('.prod-sub');
        var descs = Array.prototype.slice.call(c.querySelectorAll('.prod-desc')), lis = Array.prototype.slice.call(c.querySelectorAll('ul > li'));
        var mock = c.querySelector('.pc-mock'), cta = c.querySelector('.prod-cta'), prem = c.querySelector('.prem span');
        var tagT = tag ? strip(tag.innerHTML) : '', parts = tagT.split('·').map(function (s) { return s.trim(); });
        var short = parts.length >= 2 && !/^program$/i.test(parts[1]) ? parts[1] : (h3 ? strip(h3.getAttribute('data-en') || h3.innerHTML).split(/ — | · /)[0] : '');
        out.push({ k: k, grad: head ? head.style.background : '', img: art ? art.getAttribute('src') : '', svg: svg ? svg.outerHTML : '', num: parts[0] || String(k + 1),
          short: { en: short, id: short }, title: pair(h3), sub: pair(sub), descs: descs.map(pair), feats: lis.map(pair),
          mock: mock ? mock.innerHTML : '', mockTitle: mock && mock.querySelector('.mttl') ? mock.querySelector('.mttl').textContent.trim() : '',
          href: cta ? cta.getAttribute('href') : '#', cta: pair(cta), prem: prem });
      });
      return out;
    }
    host.querySelectorAll('.asc-panel').forEach(function (c, k) {
      var img = c.querySelector('.asc-frame img'), emb = c.querySelector('.asc-emblem svg'), ui = c.querySelector('.asc-ui');
      var chip = c.querySelector('.asc-chip'), h3 = c.querySelector('.asc-name'), sub = c.querySelector('.asc-tag'), desc = c.querySelector('.asc-desc');
      var lis = Array.prototype.slice.call(c.querySelectorAll('.asc-feats li')), cta = c.querySelector('.asc-cta'), prem = c.querySelector('.asc-prem span');
      var acc = c.getAttribute('data-accent') || '';
      out.push({ k: k, grad: GRAD[acc] || GRAD.map, img: img ? img.getAttribute('src') : '', svg: emb ? emb.outerHTML : '', num: (k < 9 ? '0' : '') + (k + 1),
        short: pair(chip) || { en: 'Product', id: 'Produk' }, title: pair(h3), sub: pair(sub), descs: desc ? [pair(desc)] : [], feats: lis.map(pair),
        mock: ui ? ui.innerHTML : '', mockTitle: ui && ui.querySelector('.uttl') ? ui.querySelector('.uttl').textContent.trim() : '',
        href: cta ? cta.getAttribute('href') : '#', cta: pair(cta), prem: prem });
    });
    return out;
  }
  var cards = readCards();
  if (cards.length < 2) return;
  cards.forEach(function (c, k) {
    /* chips carry the product name alone: "The Compass", not "05 · All Systems" or "The Map · Direction" */
    if (cfg.short && cfg.short[k]) { c.short = cfg.short[k]; return; }
    var m = c.title && /^(The (?:Map|Pack|Rope|Route|Compass))\b/.exec(strip(c.title.en));
    var s = m ? m[1] : strip(c.short.en).split(' · ')[0];
    if (!/^The (?:Map|Pack|Rope|Route|Compass)$/.test(s) && c.href) { var h = /\/products\/the-(map|pack|rope|route|compass)\//.exec(c.href); if (h) s = 'The ' + h[1].charAt(0).toUpperCase() + h[1].slice(1); }
    c.short = { en: s, id: s };
  });
  var folders = cfg.folders.map(function (f) { return Object.assign({}, f, { items: f.items.filter(function (i) { return i < cards.length; }) }); }).filter(function (f) { return f.items.length; });
  var folderOf = {}; folders.forEach(function (f, fi) { f.items.forEach(function (i) { folderOf[i] = fi; }); });

  /* ── build ── */
  var root = el('section', 'fsu'); root.setAttribute('aria-label', lang() === 'id' ? 'Produk menurut folder' : 'Products by folder');
  root.appendChild(bi('div', 'fsu-label', { en: 'Browse by folder', id: 'Jelajahi menurut folder' }));
  var tabs = el('div', 'fsu-tabs'); tabs.setAttribute('role', 'tablist');
  var panel = el('div', 'fsu-panel'); panel.setAttribute('role', 'tabpanel');
  var vp = el('div', 'fsu-vp'); var vpT = el('b'); var vpL = el('ul'); vp.appendChild(vpT); vp.appendChild(vpL);
  var chips = el('div', 'fsu-chips'); chips.setAttribute('aria-label', lang() === 'id' ? 'Lompat ke produk' : 'Jump to a product');
  var scroll = el('div', 'fsu-scroll'); scroll.setAttribute('aria-label', lang() === 'id' ? 'Kartu produk' : 'Product cards');
  var foot = el('div', 'fsu-foot'); var dots = el('div', 'fsu-dots'); var count = el('span', 'fsu-count'); var nav = el('div', 'fsu-nav');
  var bPrev = el('button', null, I.chevL), bNext = el('button', null, I.chevR); bPrev.type = bNext.type = 'button';
  nav.appendChild(bPrev); nav.appendChild(bNext);
  foot.appendChild(dots); foot.appendChild(count); foot.appendChild(nav);
  panel.appendChild(vp); panel.appendChild(chips); panel.appendChild(scroll); panel.appendChild(foot);
  root.appendChild(tabs); root.appendChild(panel);

  var tabEls = folders.map(function (f, fi) {
    var b = el('button', 'fsu-tab', I[f.icon] || I.star); b.type = 'button'; b.setAttribute('role', 'tab'); b.id = 'fsu-tab-' + fi;
    b.appendChild(bi('span', null, f.label)); b.addEventListener('click', function () { openFolder(fi, 0, true); });
    b.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') { openFolder((fi + 1) % folders.length, 0, true); tabEls[(fi + 1) % folders.length].focus(); } if (e.key === 'ArrowLeft') { openFolder((fi + folders.length - 1) % folders.length, 0, true); tabEls[(fi + folders.length - 1) % folders.length].focus(); } });
    tabs.appendChild(b); return b;
  });
  var chipEls = cards.map(function (c, k) {
    var b = el('button', 'fsu-chip'); b.type = 'button';
    b.appendChild(el('i', null, c.svg || I.star)); b.appendChild(bi('span', null, c.short));
    b.addEventListener('click', function () { var fi = folderOf[k]; openFolder(fi, folders[fi].items.indexOf(k), true); });
    chips.appendChild(b); return b;
  });

  function buildCard(c, fi) {
    var f = folders[fi];
    var a = el('article', 'fsu-card'); a.setAttribute('data-k', String(c.k));
    var art = el('div', 'fsu-art'); if (c.grad) art.style.background = c.grad;
    if (c.img) { var im = document.createElement('img'); im.src = c.img; im.alt = ''; im.loading = 'lazy'; im.decoding = 'async'; art.appendChild(im); }
    else art.appendChild(el('div', 'fsu-ico', c.svg));
    art.appendChild(bi('span', 'fsu-brand', { en: I.mark + c.short.en, id: I.mark + c.short.id }));
    art.appendChild(el('span', 'fsu-num', c.num));
    var pills = el('div', 'fsu-pills');
    if (c.mockTitle) pills.appendChild(el('span', 'fsu-pill', '<i class="dot"></i>' + c.mockTitle));
    if (c.feats.length) pills.appendChild(bi('span', 'fsu-pill', { en: I.list + c.feats.length + ' features', id: I.list + c.feats.length + ' fitur' }));
    art.appendChild(pills);
    a.appendChild(art);
    var body = el('div', 'fsu-body');
    body.appendChild(bi('div', 'fsu-cat', { en: (I[f.icon] || I.star) + f.label.en, id: (I[f.icon] || I.star) + f.label.id }));
    if (c.title) body.appendChild(bi('h3', null, c.title));
    if (c.sub) body.appendChild(bi('p', 'fsu-sub', c.sub));
    var facts = c.feats.length ? c.feats.slice(0, 2) : (c.descs[0] ? [shorten(c.descs[0], 110)] : []);
    facts.forEach(function (p, j) { var ic = c.feats.length ? (j === 0 ? I.pin : I.spark) : I.spark; body.appendChild(bi('div', 'fsu-fact', { en: ic + p.en, id: ic + p.id })); });
    if (cfg.price && c.prem) { var pr = el('div', 'fsu-price', I.mark); var sp = c.prem.cloneNode(true); sp.removeAttribute('id'); var bb = el('b'); bb.appendChild(sp); pr.appendChild(bb); body.appendChild(pr); }
    var row = el('div', 'fsu-row');
    var cta = bi('a', 'fsu-cta', c.cta || { en: 'Explore →', id: 'Jelajahi →' }); cta.href = c.href;
    var more = el('button', 'fsu-more'); more.type = 'button'; more.setAttribute('aria-expanded', 'false');
    more.appendChild(bi('span', null, { en: 'Details', id: 'Detail' })); more.appendChild(el('span', null, I.chev));
    row.appendChild(cta); row.appendChild(more); body.appendChild(row);
    var det = el('div', 'fsu-detail'); det.hidden = true;
    c.descs.forEach(function (p) { det.appendChild(bi('p', null, p)); });
    if (c.feats.length) { det.appendChild(bi('div', 'fsu-k', { en: 'What is inside', id: 'Apa yang ada di dalamnya' })); var ul = el('ul'); c.feats.forEach(function (p) { ul.appendChild(bi('li', null, p)); }); det.appendChild(ul); }
    if (c.mock) { det.appendChild(bi('div', 'fsu-k', { en: 'Snapshot', id: 'Cuplikan' })); det.appendChild(el('div', 'fsu-snap', c.mock)); }
    body.appendChild(det);
    more.addEventListener('click', function () { var on = det.hidden; det.hidden = !on; a.classList.toggle('open', on); more.setAttribute('aria-expanded', on ? 'true' : 'false'); if (on) scroll.scrollTo({ left: a.offsetLeft - 14, behavior: 'smooth' }); });
    a.appendChild(body);
    return a;
  }

  var cur = 0, curCard = 0, cardEls = [];
  function openFolder(fi, ci, smooth) {
    cur = fi; var f = folders[fi];
    tabEls.forEach(function (t, j) { t.setAttribute('aria-selected', j === fi ? 'true' : 'false'); t.tabIndex = j === fi ? 0 : -1; });
    panel.setAttribute('aria-labelledby', 'fsu-tab-' + fi);
    vpT.setAttribute('data-en', f.title.en); vpT.setAttribute('data-id', f.title.id); vpT.innerHTML = lang() === 'id' ? f.title.id : f.title.en;
    vpL.innerHTML = ''; f.points.forEach(function (p) { vpL.appendChild(bi('li', null, { en: I.check + p.en, id: I.check + p.id })); });
    scroll.innerHTML = ''; cardEls = f.items.map(function (k) { var c = buildCard(cards[k], fi); scroll.appendChild(c); return c; });
    scroll.setAttribute('data-n', String(f.items.length));
    dots.innerHTML = ''; f.items.forEach(function () { dots.appendChild(el('i')); });
    scroll.scrollLeft = 0; setCard(ci || 0);
    if (ci) scrollToCard(ci, false);
  }
  function setCard(ci) {
    curCard = Math.max(0, Math.min(cardEls.length - 1, ci)); var f = folders[cur];
    cardEls.forEach(function (c, j) { c.classList.toggle('on', j === curCard); });
    dots.querySelectorAll('i').forEach(function (d, j) { d.classList.toggle('on', j === curCard); });
    count.innerHTML = '<b>' + (curCard + 1) + '</b> / ' + cardEls.length;
    bPrev.disabled = curCard === 0; bNext.disabled = curCard >= cardEls.length - 1;
    chipEls.forEach(function (b, k) { b.setAttribute('aria-pressed', k === f.items[curCard] ? 'true' : 'false'); });
    /* keep the active chip in view by scrolling the chip row only — never the page */
    var chip = chipEls[f.items[curCard]];
    if (chip) { var x = chip.offsetLeft - (chips.clientWidth - chip.offsetWidth) / 2; chips.scrollTo({ left: Math.max(0, x), behavior: 'smooth' }); }
  }
  function scrollToCard(ci, smooth) { var c = cardEls[ci]; if (!c) return; scroll.scrollTo({ left: c.offsetLeft - 14, behavior: smooth === false ? 'auto' : 'smooth' }); setCard(ci); }
  var scT = 0;
  scroll.addEventListener('scroll', function () { clearTimeout(scT); scT = setTimeout(function () { var x = scroll.scrollLeft, best = 0, bd = 1e9; cardEls.forEach(function (c, j) { var d = Math.abs(c.offsetLeft - 14 - x); if (d < bd) { bd = d; best = j; } }); if (best !== curCard) setCard(best); }, 80); }, { passive: true });
  bPrev.addEventListener('click', function () { scrollToCard(curCard - 1); });
  bNext.addEventListener('click', function () { scrollToCard(curCard + 1); });
  bPrev.setAttribute('aria-label', lang() === 'id' ? 'Kartu sebelumnya' : 'Previous card'); bNext.setAttribute('aria-label', lang() === 'id' ? 'Kartu berikutnya' : 'Next card');

  /* ── mount: before the page's own product block, which hides on phones ── */
  host.classList.add('fsu-host');
  host.parentNode.insertBefore(root, host);
  var hint = host.parentNode.querySelector('.pcar-hint'); if (hint) hint.classList.add('fsu-hide');
  openFolder(0, 0, false);
  /* anchors that point at the hidden block land on the folders instead */
  var hid = host.id; if (hid) document.querySelectorAll('a[href="#' + hid + '"]').forEach(function (a) { a.addEventListener('click', function (e) { if (getComputedStyle(root).display !== 'none') { e.preventDefault(); root.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }); });
  /* language: the page swaps every [data-en] node itself; refresh the labels it cannot see */
  document.addEventListener('metanoia:langchange', function () {
    var L = lang() === 'id';
    root.setAttribute('aria-label', L ? 'Produk menurut folder' : 'Products by folder');
    bPrev.setAttribute('aria-label', L ? 'Kartu sebelumnya' : 'Previous card'); bNext.setAttribute('aria-label', L ? 'Kartu berikutnya' : 'Next card');
  });
})();
