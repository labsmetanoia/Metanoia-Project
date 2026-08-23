/**
 * MIND PALACE — application
 * -------------------------
 * Renders everything from the content registry (data/mindpalace.js) plus
 * live numbers computed from Metanoia's own opportunity database
 * (data/range/companies-db.js + data/range/graph.js). No content lives in
 * this file; editorial rules live in docs/mind-palace/STRATEGY.md.
 *
 * Routes (hash): #/  ·  #/topic/<id>  ·  #/read/<slug>  ·  #/saved
 * Device state:  mp-stage (reader stage) · mp-saved · mp-recent
 * Shared state:  mt-theme · mtLang/mt-lang · mt-range-identity (read-only)
 */
(function () {
  'use strict';
  var MP = window.MT_MP;
  if (!MP) return;

  /* ── i18n ── */
  var lang = 'en';
  try { lang = (localStorage.getItem('mtLang') || localStorage.getItem('mt-lang')) === 'id' ? 'id' : 'en'; } catch (e) {}
  function T(pair) { return pair ? (pair[lang] || pair.en || '') : ''; }
  function t(en, id) { return lang === 'id' ? id : en; }
  var L = function (en, id) { return { en: en, id: id }; };

  var MONTHS = {
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    id: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
  };
  function fdate(iso) {
    var p = (iso || '').split('-');
    if (p.length !== 3) return iso || '';
    var m = MONTHS[lang][(+p[1]) - 1] || '';
    return lang === 'id' ? (+p[2]) + ' ' + m + ' ' + p[0] : m + ' ' + (+p[2]) + ', ' + p[0];
  }

  /* ── device state ── */
  function readJSON(k, fb) { try { return JSON.parse(localStorage.getItem(k)) || fb; } catch (e) { return fb; } }
  function writeJSON(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var saved = readJSON('mp-saved', []);
  var recent = readJSON('mp-recent', []);
  var stage = '';
  try {
    stage = localStorage.getItem('mp-stage') || '';
    if (stage && !MP.STAGES[stage]) stage = '';
  } catch (e) {}

  function setStage(s) {
    stage = s;
    try { localStorage.setItem('mp-stage', s); } catch (e) {}
    render();
  }
  function isSaved(slug) { return saved.indexOf(slug) !== -1; }
  function toggleSave(slug) {
    var i = saved.indexOf(slug);
    if (i === -1) saved.unshift(slug); else saved.splice(i, 1);
    writeJSON('mp-saved', saved); savedBadge();
  }
  function noteRecent(slug) {
    var i = recent.indexOf(slug);
    if (i !== -1) recent.splice(i, 1);
    recent.unshift(slug);
    if (recent.length > 8) recent.length = 8;
    writeJSON('mp-recent', recent);
  }
  function savedBadge() {
    var el = document.getElementById('savedCnt');
    if (el) el.textContent = saved.length ? ' ' + saved.length : '';
  }

  /* Career Identity (read-only): only used to order the stage rail, and we say so. */
  var identity = readJSON('mt-range-identity', null);
  var hasIdentity = !!(identity && ((identity.prefIndustries || []).length || (identity.cv && identity.cv.name)));

  /* ── registry lookups ── */
  var A = MP.ARTICLES.slice();
  var topicOf = {}; MP.TOPICS.forEach(function (tp) { topicOf[tp.id] = tp; });
  var bySlug = {}; A.forEach(function (a) { bySlug[a.slug] = a; });
  function inTopic(id) { return A.filter(function (a) { return a.topic === id; }); }
  function newest(list) {
    return list.slice().sort(function (x, y) { return x.date < y.date ? 1 : -1; });
  }

  /* ── shared fragments ── */
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function kicker(a) {
    var tp = topicOf[a.topic];
    return '<div class="kick" style="color:' + tp.accent + '">' +
      (a.trending ? '<span class="trend-dot"></span>' : '') + esc(T(tp.name)) +
      ' <span class="fmt">· ' + esc(T(MP.FORMATS[a.format])) + '</span></div>';
  }
  function meta(a) {
    return '<div class="meta">' + fdate(a.date) + ' · ' + a.minutes + ' ' + t('min read', 'menit baca') + '</div>';
  }
  function openBtn(a, inner, cls, di) {
    return '<button class="card-a ' + (cls || '') + '"' +
      (di ? ' style="transition-delay:' + (di * 70) + 'ms"' : '') +
      ' data-read="' + a.slug + '">' + inner + '</button>';
  }
  /* Topic-mapped photography from the platform's curated inventory. */
  function cardImg(a) {
    if (!a.img) return '';
    return '<div class="card-img"><img src="' + a.img + '" alt="' + esc(T(a.title)) + '" loading="lazy" decoding="async"></div>';
  }
  /* Lead artwork: the piece's photograph; generated geometry only as fallback. */
  function artwork(a) {
    if (a.img) {
      return '<div class="artwork photo" aria-hidden="true"><img src="' + a.img + '" alt="" decoding="async"></div>';
    }
    return artworkSvg(a);
  }
  function artworkSvg(a) {
    var tp = topicOf[a.topic], c = tp.accent, seed = a.slug.length;
    var lines = '';
    for (var i = 0; i < 7; i++) {
      var y = 12 + i * 11 + ((seed * (i + 3)) % 7);
      lines += '<path d="M-4 ' + y + ' C 30 ' + (y - ((seed + i) % 18)) + ', 70 ' + (y + ((seed * i) % 14)) + ', 104 ' + (y - 6) + '" stroke="' + c + '" stroke-opacity="' + (0.14 + i * 0.05) + '" stroke-width="1.1" fill="none"/>';
    }
    return '<div class="artwork" aria-hidden="true"><svg viewBox="0 0 100 62" preserveAspectRatio="none">' +
      '<rect width="100" height="62" fill="' + c + '" opacity="0.05"/>' + lines +
      '<circle cx="' + (18 + seed % 60) + '" cy="' + (14 + (seed * 3) % 30) + '" r="3.2" fill="' + c + '"/>' +
      '</svg></div>';
  }

  /* ── live numbers from our own database ── */
  var FN_NAMES = {
    engineering: { en: 'Engineering', id: 'Rekayasa' }, data: { en: 'Data & Analytics', id: 'Data & Analitik' },
    product: { en: 'Product', id: 'Produk' }, design: { en: 'Design', id: 'Desain' },
    marketing: { en: 'Marketing', id: 'Pemasaran' }, finance: { en: 'Finance', id: 'Keuangan' },
    operations: { en: 'Operations', id: 'Operasional' }, commercial: { en: 'Commercial & Sales', id: 'Komersial & Penjualan' },
    people: { en: 'People & HR', id: 'SDM' }, risk: { en: 'Risk & Compliance', id: 'Risiko & Kepatuhan' },
    strategy: { en: 'Strategy', id: 'Strategi' }, trainee: { en: 'Trainee track', id: 'Jalur trainee' }
  };
  var DB = null;
  function dbStats() {
    if (DB) return DB;
    /* Same merge the product itself uses (curated graph + directory DB),
       so the numbers here equal the numbers inside The Range (Explore). */
    var rows = window.MT_RANGE_OPPS ? window.MT_RANGE_OPPS.companies()
      : (window.MT_RANGE_DB ? window.MT_RANGE_DB.expand() : null);
    if (!rows) return null;
    var fnCompanies = {}, fnIndustries = {}, industries = {}, idn = 0, roles = 0;
    rows.forEach(function (r) {
      if (r.geo === 'id' || r.country === 'id') idn++;
      industries[r.industry_id] = 1;
      roles += (r.fns || []).length;
      (r.fns || []).forEach(function (f) {
        fnCompanies[f] = (fnCompanies[f] || 0) + 1;
        (fnIndustries[f] = fnIndustries[f] || {})[r.industry_id] = 1;
      });
    });
    var bars = Object.keys(fnCompanies).map(function (f) {
      return { fn: f, companies: fnCompanies[f], industries: Object.keys(fnIndustries[f]).length };
    }).sort(function (x, y) { return y.companies - x.companies; });
    DB = { total: rows.length, idn: idn, intl: rows.length - idn, roles: roles,
      industries: Object.keys(industries).length, bars: bars };
    return DB;
  }
  function chartHTML() {
    var d = dbStats();
    if (!d) return '';
    var max = d.bars[0] ? d.bars[0].companies : 1;
    return '<div class="chart"><h3>' +
      t('Companies with a documented door, per function', 'Perusahaan dengan pintu masuk terdata, per fungsi') + '</h3>' +
      '<div class="src">' + t('Computed at page load from Metanoia’s opportunity database — ' + d.total + ' companies, ' + d.roles + ' role entries. A map of our database, not a census of the market.',
        'Dihitung saat halaman dimuat dari basis data peluang Metanoia — ' + d.total + ' perusahaan, ' + d.roles + ' entri peran. Peta basis data kami, bukan sensus pasar.') + '</div>' +
      d.bars.map(function (b) {
        var nm = FN_NAMES[b.fn] || { en: b.fn, id: b.fn };
        return '<div class="bar-row"><span class="n">' + esc(T(nm)) + '</span>' +
          '<span class="t"><i style="width:' + Math.round(b.companies / max * 100) + '%"></i></span>' +
          '<span class="v">' + b.companies + '</span></div>';
      }).join('') + '</div>';
  }

  /* ── professional signals: short data tiles, every figure computed live ── */
  function signalsHTML() {
    var d = dbStats();
    if (!d) return '';
    var top = d.bars[0];
    var breadth = d.bars.slice().sort(function (x, y) { return y.industries - x.industries; })[0];
    var trainee = d.bars.filter(function (b) { return b.fn === 'trainee'; })[0];
    var whence = '<div class="whence">' + t('Metanoia opportunity database', 'Basis data peluang Metanoia') + '</div>';
    function nm(b) { return T(FN_NAMES[b.fn] || { en: b.fn, id: b.fn }); }
    var ICONS = {
      building: '<rect x="4" y="3.5" width="10" height="17" rx="1"/><path d="M14 9h6v11.5"/><path d="M7 7.5h1M10.5 7.5h1M7 11h1M10.5 11h1M7 14.5h1M10.5 14.5h1M3 20.5h18"/>',
      door: '<path d="M5 20.5V5a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 19 5v15.5"/><path d="M9 20.5V8h6v12.5"/><circle cx="13.2" cy="14.5" r=".9"/><path d="M3 20.5h18"/>',
      globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.3 3.9 5.1 3.9 8.5s-1.3 6.2-3.9 8.5c-2.6-2.3-3.9-5.1-3.9-8.5S9.4 5.8 12 3.5Z"/>',
      cap: '<path d="m3 9 9-4 9 4-9 4-9-4Z"/><path d="M7 11.2v3.6c0 1.6 10 1.6 10 0v-3.6"/><path d="M21 9v5"/>'
    };
    function tile(icon, big, desc) {
      return '<div class="sig"><div class="sg-row"><span class="sg-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + ICONS[icon] + '</svg></span><b>' + big + '</b></div>' +
        '<span>' + desc + '</span>' + whence + '</div>';
    }
    return '<div class="signals">' +
      tile('building', d.total, t('companies mapped — ' + d.idn + ' Indonesian, ' + d.intl + ' international', 'perusahaan terpetakan — ' + d.idn + ' Indonesia, ' + d.intl + ' internasional')) +
      tile('door', top.companies, t('companies open a ' + nm(top) + ' door — the widest entry function we track', 'perusahaan membuka pintu ' + nm(top) + ' — fungsi masuk terluas yang kami petakan')) +
      tile('globe', breadth.industries + '/' + d.industries, t('industries where ' + nm(breadth) + ' roles appear — breadth is pivot insurance', 'industri tempat peran ' + nm(breadth) + ' muncul — keluasan adalah asuransi pivot')) +
      tile('cap', (trainee ? trainee.companies : 0), t('companies run a structured trainee track', 'perusahaan menjalankan jalur trainee terstruktur')) +
      '</div>';
  }
  /* Lead feature helpers: gold-italic phrase + the "inside this playbook" plan card. */
  function emTitle(s) {
    var w = esc(s).split(' ');
    if (w.length < 5) return w.join(' ');
    var head = w.slice(0, w.length - 3).join(' ');
    return head + ' <em>' + w.slice(w.length - 3).join(' ') + '</em>';
  }
  function planCard(a) {
    if (!a.act || !a.act.length) return '';
    var steps = a.act.slice(0, 5).map(function (p, i) {
      var label = T(p).split('.')[0];
      if (label.length > 54) label = label.slice(0, 52) + '…';
      return '<li><i>' + (i + 1) + '</i><span>' + esc(label) + '</span></li>';
    }).join('');
    return '<div class="lead-plan" aria-hidden="true"><b>' + t('Inside this playbook', 'Di dalam playbook ini') + '</b><ol>' + steps + '</ol></div>';
  }

  /* ── opportunities module (tabbed radar) ── */
  var oppTab = '';
  function oppMatches(r, tab) {
    if (!tab) return true;
    return (r.type.en || '').toLowerCase().indexOf(tab) !== -1;
  }
  function oppTabsHTML() {
    var tabs = [
      ['', t('All', 'Semua')],
      ['graduate programme', t('Graduate programmes', 'Program graduate')],
      ['internship', t('Internships', 'Magang')],
      ['scholarship', t('Scholarships', 'Beasiswa')],
      ['joint recruitment', t('Joint recruitment', 'Rekrutmen bersama')]
    ];
    return '<div class="otabs">' + tabs.map(function (x) {
      var n = MP.RADAR.filter(function (r) { return oppMatches(r, x[0]); }).length;
      return '<button class="chip' + (oppTab === x[0] ? ' on' : '') + '" data-otab="' + x[0] + '">' + x[1] + ' (' + n + ')</button>';
    }).join('') + '</div>';
  }
  function renderOpps() {
    var host = document.getElementById('oppHost');
    if (!host) return;
    var rows = MP.RADAR.filter(function (r) { return oppMatches(r, oppTab); });
    host.innerHTML = oppTabsHTML() +
      '<div class="radar">' + rows.map(radarCard).join('') +
      '<a class="rcard" href="../products/the-map/#/explore" style="text-decoration:none;justify-content:center">' +
      '<div class="org">The Range (Explore)</div><h3>' + t('675 companies, 25 directions — the doors behind these programmes', '675 perusahaan, 25 arah — pintu-pintu di balik program ini') + '</h3>' +
      '<div class="win">' + t('Investigate employers, functions and hiring stages before you commit weeks to one application.', 'Selidiki pemberi kerja, fungsi, dan tahapan rekrutmen sebelum menghabiskan berminggu-minggu untuk satu lamaran.') + '</div>' +
      '<div class="foot"><span class="pill verify">' + t('Part of The Map', 'Bagian dari The Map') + '</span></div></a></div>' +
      '<p class="persnote">' + t('Real recurring programmes only, each with the date we last checked and the official link. Deadlines and eligibility live on the official pages, never here.',
        'Hanya program nyata yang berulang, masing-masing dengan tanggal pengecekan terakhir dan tautan resmi. Tenggat dan syarat ada di laman resmi, tidak pernah di sini.') + '</p>';
    host.querySelectorAll('[data-otab]').forEach(function (b) {
      b.addEventListener('click', function () { oppTab = b.dataset.otab; renderOpps(); });
    });
  }

  /* ── products, searchable alongside content ── */
  var PRODUCTS = [
    { name: 'The Map · The Range (Explore)', href: '../products/the-map/',
      kw: 'map range explore companies industries directions career identity cv fit hiring process',
      why: L('Investigate 675 companies, 25 directions and documented hiring processes.', 'Selidiki 675 perusahaan, 25 arah, dan proses rekrutmen terdokumentasi.') },
    { name: 'The Pack', href: '../products/the-pack/',
      kw: 'pack cv resume ats application assessment materials portfolio',
      why: L('Build the materials: CV, ATS checks, assessments.', 'Bangun materinya: CV, uji ATS, asesmen.') },
    { name: 'The Rope', href: '../products/the-rope/',
      kw: 'rope interview practice case communication behavioural panel',
      why: L('Practise the live stages: interviews, cases, communication.', 'Latih tahap langsungnya: wawancara, kasus, komunikasi.') }
  ];

  /* ── your next move: deterministic, explained, on-device only ── */
  function nextMoveHTML() {
    var pri = hasIdentity
      ? { href: '../products/the-map/#/directions',
          h: t('See what fits your Career Identity', 'Lihat yang cocok dengan Identitas Kariermu'),
          p: t('A Career Identity already exists on this device — The Range (Explore) can argue with your assumptions using evidence.', 'Identitas Karier sudah ada di perangkat ini — The Range (Explore) bisa berdebat dengan asumsimu memakai bukti.') }
      : { href: '../products/the-map/#/identity',
          h: t('Build your Career Identity', 'Bangun Identitas Kariermu'),
          p: t('Ten minutes in The Map — or one CV upload — turns this reading into directions you can investigate.', 'Sepuluh menit di The Map — atau satu unggahan CV — mengubah bacaan ini menjadi arah yang bisa kamu selidiki.') };
    var sec = (stage === 'early-professional' || stage === 'mature-professional')
      ? { href: '../products/the-rope/', h: 'The Rope', p: t('Rehearse the live rounds your next move will demand.', 'Latih ronde langsung yang akan dituntut langkah berikutnya.') }
      : { href: '../products/the-pack/', h: 'The Pack', p: t('Get the materials ready before you spend your best targets.', 'Siapkan materi sebelum menghabiskan target terbaikmu.') };
    return '<section class="nextmove reveal" id="nextmove"><h2>' + t('Your next move', 'Langkah berikutnya') + '</h2>' +
      '<p>' + t('Reading is step one. The doing lives in the Metanoia pillars.', 'Membaca adalah langkah pertama. Pengerjaannya ada di pilar-pilar Metanoia.') + '</p>' +
      '<div class="eco-grid">' +
      '<a class="eco-card" href="' + pri.href + '"><b>' + pri.h + '</b><span>' + pri.p + '</span></a>' +
      '<a class="eco-card" href="' + sec.href + '"><b>' + sec.h + '</b><span>' + sec.p + '</span></a>' +
      '</div>' +
      '<div class="why">' + t('Chosen from your stage choice above and whether a Career Identity exists on this device — nothing is tracked, nothing leaves the browser.',
        'Dipilih dari tahap yang kamu pilih di atas dan ada-tidaknya Identitas Karier di perangkat ini — tidak ada pelacakan, tidak ada yang meninggalkan peramban.') + '</div></section>';
  }

  /* ── radar ── */
  function radarCard(r) {
    var pill = r.status === 'closed'
      ? '<span class="pill closed">' + t('Window closed', 'Jendela tutup') + '</span>'
      : '<span class="pill verify">' + t('Verify on official page', 'Cek laman resmi') + '</span>';
    return '<article class="rcard"><div class="org">' + esc(r.org) + '</div>' +
      '<h3>' + esc(T(r.title)) + '</h3>' +
      '<div class="win">' + esc(T(r.type)) + ' — ' + esc(T(r.window)) + '</div>' +
      '<div class="foot">' + pill +
      '<span class="chk">' + t('Checked ', 'Dicek ') + fdate(r.checked) + '</span>' +
      '<a href="' + r.url + '" target="_blank" rel="noopener">' + t('Official page ↗', 'Laman resmi ↗') + '</a></div></article>';
  }
  function radarGrid() { return '<div class="radar">' + MP.RADAR.map(radarCard).join('') + '</div>'; }

  /* ── HOME ── */
  function secH(title, moreHash, moreLabel) {
    return '<div class="sec-h"><h2>' + title + '</h2><div class="rule"></div>' +
      (moreHash ? '<a class="more" href="' + moreHash + '">' + moreLabel + ' →</a>' : '') + '</div>';
  }
  function renderHome() {
    /* Tier 1: the featured insight. Tier 2: three featured reads. Tier 3: dense latest list. */
    var lead = A.filter(function (a) { return a.featured === true; })[0] || newest(A)[0];
    var tier2 = A.filter(function (a) { return a.featured === 'secondary' && a.slug !== lead.slug; });
    newest(A).forEach(function (a) {
      if (tier2.length < 3 && a.slug !== lead.slug && tier2.indexOf(a) === -1 && a.trending) tier2.push(a);
    });
    tier2 = tier2.slice(0, 3);
    var playbooks = newest(A.filter(function (a) { return a.format === 'guide'; }));
    var perspectives = newest(A.filter(function (a) { return a.format === 'perspective'; }));

    var stageChips = '<div class="stagebox"><span class="lbl">' + t('Reading as', 'Membaca sebagai') + '</span>' +
      '<button class="chip' + (stage === '' ? ' on' : '') + '" data-stage="">' + t('Everyone', 'Semua') + '</button>' +
      Object.keys(MP.STAGES).map(function (s) {
        return '<button class="chip' + (stage === s ? ' on' : '') + '" data-stage="' + s + '">' + esc(T(MP.STAGES[s])) + '</button>';
      }).join('') + '</div>';

    var topicTabs = '<nav class="topicbar" aria-label="Topics"><div class="in">' +
      '<a class="tp on" href="#/">' + t('Front page', 'Halaman depan') + '</a>' +
      MP.TOPICS.map(function (tp) {
        return '<a class="tp" href="#/topic/' + tp.id + '">' + esc(T(tp.name)) + '</a>';
      }).join('') + '</div></nav>';

    var exq = [
      [t('How do I prepare for a consulting interview?', 'Bagaimana bersiap untuk wawancara konsultan?'), 'interview'],
      [t('What does an ATS actually do with my CV?', 'Apa yang sebenarnya dilakukan ATS pada CV-ku?'), 'ATS'],
      [t('Which function opens the most doors?', 'Fungsi mana yang membuka pintu terbanyak?'), 'companies'],
      [t('Find scholarships and graduate programmes', 'Cari beasiswa dan program graduate'), 'scholarship']
    ];

    /* Six editorial doors under the hero — one per topic, photo-led, real routes. */
    var railDoors = [
      { id: 'career', img: '../assets/m/03-climb.jpg',
        h: L('Navigate your next move', 'Arahkan langkah berikutnya') },
      { id: 'skills', img: '../assets/bg/fg-stage-ascent.jpg',
        h: L('What to learn — and how to prove it', 'Apa yang dipelajari — dan cara membuktikannya') },
      { id: 'recruitment', img: '../assets/bg/gauntlet/gate-06-final-interview.jpg',
        h: L('How the hiring gate really works', 'Cara gerbang rekrutmen benar-benar bekerja') },
      { id: 'market', img: '../assets/bg/map.jpg',
        h: L('Read the market honestly', 'Baca pasar dengan jujur') },
      { id: 'worklife', img: '../assets/mentoring-session.jpg',
        h: L('Thrive inside the work', 'Bertumbuh di dalam pekerjaan') },
      { id: 'opportunities', img: '../assets/m/05-summit.jpg',
        h: L('Opportunities worth pursuing', 'Peluang yang layak dikejar') }
    ];
    var trail =
      '<svg class="trail" width="360" height="560" viewBox="0 0 360 560" fill="none" aria-hidden="true">' +
      '<path class="tp-dash" d="M30 560 C 150 470, 90 380, 200 300 C 300 228, 250 160, 330 60" stroke="rgba(255,255,255,.75)" stroke-width="2.4" stroke-dasharray="2 12" stroke-linecap="round"/>' +
      '<g><circle cx="200" cy="300" r="17" fill="rgba(8,14,26,.6)" stroke="rgba(240,216,120,.8)" stroke-width="1.4"/>' +
      '<circle cx="194" cy="300" r="3.4" stroke="rgba(240,216,120,.9)" stroke-width="1.6"/><circle cx="206" cy="300" r="3.4" stroke="rgba(240,216,120,.9)" stroke-width="1.6"/></g>' +
      '<g><circle cx="330" cy="60" r="17" fill="rgba(8,14,26,.6)" stroke="rgba(240,216,120,.8)" stroke-width="1.4"/>' +
      '<path d="M326 68v-15l9 4-9 4" stroke="rgba(240,216,120,.9)" stroke-width="1.6" stroke-linejoin="round"/></g>' +
      '</svg>';

    document.getElementById('v-home').innerHTML =
      '<header class="mp-hero">' +
      '<div class="mp-hero-bg"><img src="../assets/bg/journey-start.jpg" alt="" decoding="async"></div>' +
      '<div class="mp-hero-veil"></div>' + trail +
      '<div class="wrap mp-hero-in">' +
      '<div class="mast-kicker">Mind Palace</div>' +
      '<h1 class="mast-title">' + t('Your guide to the <em>professional world.</em>', 'Pemandumu di <em>dunia profesional.</em>') + '</h1>' +
      '<p class="mast-sub">' + t('Insights, opportunities and practical knowledge to help you navigate your career — from your first opportunity to your next move.',
        'Wawasan, peluang, dan pengetahuan praktis untuk membantumu menavigasi karier — dari kesempatan pertama sampai langkah berikutnya.') + '</p>' +
      '<button class="hsearch" id="heroSearch"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7.5"/><path d="m16.8 16.8 4 4"/></svg>' +
      t('What are you trying to figure out?', 'Apa yang sedang ingin kamu pahami?') + '<kbd>/</kbd>' +
      '<span class="hs-go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15M13 6l6 6-6 6"/></svg></span></button>' +
      '<div class="exq-label">' + t('Popular questions', 'Pertanyaan populer') + '</div>' +
      '<div class="exq">' + exq.map(function (x) {
        return '<button data-exq="' + x[1] + '">' + esc(x[0]) + '</button>';
      }).join('') + '</div>' +
      '<div class="cta-row">' +
      '<button class="btn pri" data-jump="worth"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 6.5C10.4 5 8.2 4.5 5 4.5v14c3.2 0 5.4.5 7 2 1.6-1.5 3.8-2 7-2v-14c-3.2 0-5.4.5-7 2Z"/><path d="M12 6.5v14"/></svg></span>' + t('Explore insights', 'Jelajahi wawasan') + '</button>' +
      '<button class="btn" data-jump="opps"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="m15.5 8.5-2 5-5 2 2-5Z"/></svg></span>' + t('Explore opportunities', 'Jelajahi peluang') + '</button>' +
      '<div class="cta-stage"><span class="lbl">' + t('I’m reading as', 'Aku membaca sebagai') + '</span>' +
      '<button class="chip' + (stage === '' ? ' on' : '') + '" data-stage="">' + t('Everyone', 'Semua') + '</button>' +
      Object.keys(MP.STAGES).map(function (s) {
        return '<button class="chip' + (stage === s ? ' on' : '') + '" data-stage="' + s + '">' + esc(T(MP.STAGES[s])) + '</button>';
      }).join('') + '</div></div>' +
      '</div></header>' +

      '<section class="hero-rail wrap" id="heroRail"><div class="hr-track">' + railDoors.map(function (d) {
        var tp = topicOf[d.id];
        return '<a class="hrcard" href="#/topic/' + d.id + '">' +
          '<div class="hr-img"><img src="' + d.img + '" alt="" loading="lazy" decoding="async"></div>' +
          '<div class="hr-body"><span class="hr-kick" style="color:' + tp.accent + '">' + esc(T(tp.name)) + '</span>' +
          '<h3>' + esc(T(d.h)) + '</h3><p>' + esc(T(tp.desc)) + '</p>' +
          '<span class="hr-go">' + t('Explore →', 'Jelajahi →') + '</span></div></a>';
      }).join('') + '</div></section>' +

      '<section class="wrap"><div class="valstrip">' + [
        ['<path d="M12 19.5 5 21l1.5-7L17 3.5a2.1 2.1 0 0 1 3 0l.5.5a2.1 2.1 0 0 1 0 3Z"/><path d="m14.5 6 3.5 3.5"/>',
          t('Written as judgement', 'Ditulis sebagai pertimbangan'), t('Sources named; judgement labelled as judgement.', 'Sumber disebutkan; pertimbangan diberi label pertimbangan.')],
        ['<path d="M13 2.5 4.5 13.5H11l-1 8L18.5 10H12Z"/>',
          t('Actionable by design', 'Dirancang untuk ditindaklanjuti'), t('Every piece ends in what to do next.', 'Setiap artikel berakhir pada apa yang harus dilakukan.')],
        ['<rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M8 2.8v4M16 2.8v4M3.5 10.5h17M8.7 15.4l2.2 2.2 4.2-4.2"/>',
          t('Dated & reviewed', 'Bertanggal & ditinjau'), t('Publish and review dates visible on every piece.', 'Tanggal terbit dan tinjauan terlihat di setiap artikel.')],
        ['<circle cx="12" cy="7" r="3.4"/><path d="M5.5 20.5a6.5 6.5 0 0 1 13 0"/>',
          t('Built for your stage', 'Dibuat untuk tahapmu'), t('Student through experienced professional.', 'Dari mahasiswa sampai profesional berpengalaman.')]
      ].map(function (v) {
        return '<div class="vitem"><span class="vico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + v[0] + '</svg></span>' +
          '<span><b>' + v[1] + '</b><span>' + v[2] + '</span></span></div>';
      }).join('') + '</div></section>' +

      topicTabs +
      '<div class="wrap">' +

      /* 2 — what's worth knowing now */
      '<section class="sec reveal" id="worth">' +
      '<div class="sec-h"><h2><span class="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z"/><path d="M19 15l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9Z"/></svg></span>' +
      t('What’s worth knowing now', 'Yang layak diketahui sekarang') + '</h2><div class="rule"></div></div>' +
      '<div class="lead2"><div>' + kicker(lead) +
      '<h3>' + emTitle(T(lead.title)) + '</h3>' +
      '<p class="dek">' + esc(T(lead.dek)) + '</p>' + meta(lead) +
      '<div class="lead-cta">' +
      '<button class="btn pri" data-read="' + lead.slug + '">' +
      (lead.format === 'guide' ? t('Read the playbook', 'Baca playbook-nya') : t('Read the piece', 'Baca artikelnya')) + ' →</button>' +
      '<button class="lead-save' + (isSaved(lead.slug) ? ' on' : '') + '" id="leadSave">' +
      '<span class="ring"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 3h12v18l-6-4.5L6 21z"/></svg></span>' +
      '<span id="leadSaveTx">' + (isSaved(lead.slug) ? t('Saved ✓', 'Tersimpan ✓') : t('Save for later', 'Simpan untuk nanti')) + '</span></button>' +
      '</div></div>' +
      '<div class="lead-media">' +
      '<button class="card-a lm-img" data-read="' + lead.slug + '" aria-label="' + esc(T(lead.title)) + '">' +
      '<img src="' + lead.img + '" alt="" decoding="async"></button>' +
      planCard(lead) + '</div></div>' +
      '<div class="grid3" style="border:none">' + tier2.map(function (a, i) {
        var tp = topicOf[a.topic];
        return openBtn(a, '<div class="c3 t2">' +
          '<div class="card-img"><img src="' + a.img + '" alt="' + esc(T(a.title)) + '" loading="lazy" decoding="async">' +
          '<span class="img-badge">' + (a.trending ? '<span class="trend-dot"></span>' : '') +
          '<span style="color:' + tp.accent + '">' + esc(T(tp.name)) + '</span> <span class="fmt">· ' + esc(T(MP.FORMATS[a.format])) + '</span></span></div>' +
          '<div class="t2-body"><h3>' + esc(T(a.title)) + '</h3>' +
          '<p class="dek">' + esc(T(a.dek)) + '</p>' + meta(a) + '</div></div>', 'reveal', i);
      }).join('') + '</div></section>' +

      /* 3 — the professional signals */
      '<section class="sec reveal" id="signals"><div class="sigwrap">' +
      '<div class="sw-head"><span class="sec-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 20V10M10 20V4M16 20v-8M21 20H3"/></svg></span>' +
      '<h2>' + t('The professional signals', 'Sinyal profesional') + '</h2>' +
      '<a class="more" href="../products/the-map/#/explore">' + t('See full database →', 'Lihat basis data lengkap →') + '</a></div>' +
      signalsHTML() +
      '<div class="sw-foot"><span>' + t('Every figure is computed at page load from Metanoia’s own database — a curated map, not a market census.',
        'Setiap angka dihitung saat halaman dimuat dari basis data Metanoia sendiri — peta kurasi, bukan sensus pasar.') + '</span>' +
      '<button class="card-a" data-read="what-675-companies-tell-us">' + t('What 675 companies tell us →', 'Yang diceritakan 675 perusahaan →') + '</button></div>' +
      '</div></section>' +

      /* 4 — explore by what you need */
      '<section class="sec reveal">' + secH(t('Explore by what you need', 'Jelajahi sesuai kebutuhanmu')) +
      '<div class="needs">' + MP.NEEDS.map(function (n, i) {
        var cnt = A.filter(function (a) { return n.topics.indexOf(a.topic) !== -1; }).length;
        return '<button class="needcard reveal" style="transition-delay:' + (i * 70) + 'ms" data-need="' + n.id + '">' +
          (n.img ? '<div class="card-img"><img src="' + n.img + '" alt="" loading="lazy" decoding="async"></div>' : '') +
          '<div class="nc-in"><h3>' + esc(T(n.q)) + '</h3>' +
          '<p>' + esc(T(n.sub)) + '</p><span class="cnt">' + cnt + ' ' + t('pieces →', 'artikel →') + '</span></div></button>';
      }).join('') + '</div></section>' +

      /* 5 — opportunities worth exploring */
      '<section class="sec reveal" id="opps">' + secH(t('Opportunities worth exploring', 'Peluang yang layak dijelajahi'), '#/topic/opportunities', t('All', 'Semua')) +
      '<div id="oppHost"></div></section>' +

      /* 6 — practical playbooks */
      '<section class="sec reveal">' + secH(t('Practical playbooks', 'Playbook praktis')) +
      '<div class="rail">' + playbooks.map(function (a, i) {
        return openBtn(a, '<div class="railcard">' + cardImg(a) + '<div class="rc-in">' + kicker(a) +
          '<h3>' + esc(T(a.title)) + '</h3>' + meta(a) + '</div></div>', 'reveal', i);
      }).join('') + '</div></section>' +

      /* 7 — perspectives */
      '<section class="sec reveal">' + secH(t('Perspectives', 'Perspektif')) +
      '<div class="grid3" style="border:none;padding-top:0">' + perspectives.map(function (a, i) {
        return openBtn(a, '<div class="c3">' + cardImg(a) + kicker(a) + '<h3>' + esc(T(a.title)) + '</h3>' +
          '<p class="dek">' + esc(T(a.dek)) + '</p>' + meta(a) + '</div>', 'reveal', i);
      }).join('') + '</div>' +
      '<p class="persnote">' + t('Practitioner and community perspectives are on the roadmap; until real contributors write here, this shelf stays small rather than staged.',
        'Perspektif praktisi dan komunitas ada di peta jalan; sampai kontributor nyata menulis di sini, rak ini dibiarkan kecil alih-alih dipentaskan.') + '</p></section>' +

      /* 8 — latest, dense editorial list */
      '<section class="sec reveal">' + secH(t('Latest from Mind Palace', 'Terbaru dari Mind Palace')) +
      '<div class="list">' + newest(A).map(function (a) {
        return '<button class="lrow card-a" data-read="' + a.slug + '">' +
          '<span class="thumb"><img src="' + a.img + '" alt="" loading="lazy" decoding="async"></span>' +
          '<span>' + kicker(a) + '<h3>' + esc(T(a.title)) + '</h3></span>' + meta(a) + '</button>';
      }).join('') + '</div></section>' +

      /* 9 — your next move */
      nextMoveHTML() +

      '<aside class="standard reveal"><h2>' + t('Our editorial standard', 'Standar editorial kami') + '</h2>' +
      '<p>' + t('Numbers carry a named source or come from Metanoia’s own database. Judgement is written as judgement. Dates are visible, radar entries expire, and “trending” is an editorial choice — never a fake metric. When we don’t know, the page says so.',
        'Angka membawa sumber bernama atau berasal dari basis data Metanoia sendiri. Pertimbangan ditulis sebagai pertimbangan. Tanggal terlihat, entri radar kedaluwarsa, dan “trending” adalah pilihan editorial — bukan metrik palsu. Saat kami tidak tahu, halaman ini mengatakannya.') + '</p></aside>' +
      '</div>';

    var home = document.getElementById('v-home');
    renderOpps();
    wireStageChips(home);
    wireReads(home);
    var ls = home.querySelector('#leadSave');
    if (ls) ls.addEventListener('click', function () {
      toggleSave(lead.slug);
      ls.classList.toggle('on', isSaved(lead.slug));
      ls.querySelector('#leadSaveTx').textContent = isSaved(lead.slug) ? t('Saved ✓', 'Tersimpan ✓') : t('Save for later', 'Simpan untuk nanti');
    });
    home.querySelectorAll('[data-jump]').forEach(function (b) {
      b.addEventListener('click', function () {
        var el = document.getElementById(b.dataset.jump);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    home.querySelectorAll('[data-need]').forEach(function (b) {
      b.addEventListener('click', function () { location.hash = '#/need/' + b.dataset.need; });
    });
    var hs = home.querySelector('#heroSearch');
    if (hs) hs.addEventListener('click', openSearch);
    home.querySelectorAll('[data-exq]').forEach(function (b) {
      b.addEventListener('click', function () {
        openSearch(); sInput.value = b.dataset.exq; runSearch(b.dataset.exq);
      });
    });
    reveal();
  }

  /* ── NEED view: articles from the topics a need maps onto ── */
  function renderNeed(id) {
    var need = MP.NEEDS.filter(function (n) { return n.id === id; })[0];
    if (!need) { location.hash = '#/'; return; }
    var host = document.getElementById('topicHost');
    var list = newest(A.filter(function (a) { return need.topics.indexOf(a.topic) !== -1; }));
    host.innerHTML =
      '<button class="backbar" data-back><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M15 5l-7 7 7 7"/></svg>' + t('Front page', 'Halaman depan') + '</button>' +
      '<header class="masthead"><div class="mast-kicker">' + t('Your question', 'Pertanyaanmu') + '</div>' +
      '<h1 class="mast-title" style="font-size:clamp(28px,4vw,44px)">' + esc(T(need.q)) + '</h1>' +
      '<p class="mast-sub">' + esc(T(need.sub)) + '</p></header>' +
      '<div class="filters">' + need.topics.map(function (tid) {
        return '<a class="chip" style="text-decoration:none" href="#/topic/' + tid + '">' + esc(T(topicOf[tid].name)) + ' →</a>';
      }).join('') + '</div>' +
      '<div class="grid3" style="border:none">' + list.map(function (a, i) {
        return openBtn(a, '<div class="c3">' + cardImg(a) + kicker(a) + '<h3>' + esc(T(a.title)) + '</h3>' +
          '<p class="dek">' + esc(T(a.dek)) + '</p>' + meta(a) + '</div>', 'reveal in', i);
      }).join('') + '</div>';
    wireReads(host); wireBack(host);
  }

  /* ── TOPIC ── */
  var topicFilters = { format: '', stage: '' };
  function renderTopic(id) {
    var tp = topicOf[id];
    var host = document.getElementById('topicHost');
    if (!tp) { location.hash = '#/'; return; }
    var back = '<button class="backbar" data-back><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M15 5l-7 7 7 7"/></svg>' + t('Front page', 'Halaman depan') + '</button>';

    if (id === 'opportunities') {
      host.innerHTML = back +
        '<header class="masthead"><div class="mast-kicker" style="color:' + tp.accent + '">' + esc(T(tp.name)) + '</div>' +
        '<h1 class="mast-title" style="font-size:clamp(28px,4vw,44px)">' + esc(T(tp.desc)) + '</h1></header>' +
        radarGrid() +
        '<p class="persnote" style="margin-top:14px">' + t('Radar rules: real recurring programmes only, checked dates shown, official links always. Anything time-sensitive must be verified on the official page.',
          'Aturan radar: hanya program nyata yang berulang, tanggal pengecekan ditampilkan, tautan resmi selalu ada. Hal yang sensitif waktu wajib dicek di laman resmi.') + '</p>';
      wireBack(host); return;
    }

    var list = inTopic(id);
    var f = topicFilters;
    var formatsHere = {}; list.forEach(function (a) { formatsHere[a.format] = (formatsHere[a.format] || 0) + 1; });
    var stagesHere = {}; list.forEach(function (a) { a.stages.forEach(function (s) { stagesHere[s] = (stagesHere[s] || 0) + 1; }); });
    var shown = list.filter(function (a) {
      return (!f.format || a.format === f.format) && (!f.stage || a.stages.indexOf(f.stage) !== -1);
    });

    host.innerHTML = back +
      '<header class="masthead"><div class="mast-kicker" style="color:' + tp.accent + '">' + t('Topic', 'Topik') + '</div>' +
      '<h1 class="mast-title" style="font-size:clamp(28px,4vw,44px)">' + esc(T(tp.name)) + '</h1>' +
      '<p class="mast-sub">' + esc(T(tp.desc)) + '</p></header>' +
      '<div class="filters" id="fFmt"><span class="lbl meta">' + t('Format', 'Format') + '</span>' +
      '<button class="chip' + (f.format === '' ? ' on' : '') + '" data-fmt="">' + t('All', 'Semua') + ' (' + list.length + ')</button>' +
      Object.keys(formatsHere).map(function (k) {
        return '<button class="chip' + (f.format === k ? ' on' : '') + '" data-fmt="' + k + '">' + esc(T(MP.FORMATS[k])) + ' (' + formatsHere[k] + ')</button>';
      }).join('') + '</div>' +
      '<div class="filters" id="fStg"><span class="lbl meta">' + t('Stage', 'Tahap') + '</span>' +
      '<button class="chip' + (f.stage === '' ? ' on' : '') + '" data-stg="">' + t('All', 'Semua') + '</button>' +
      Object.keys(stagesHere).map(function (k) {
        return '<button class="chip' + (f.stage === k ? ' on' : '') + '" data-stg="' + k + '">' + esc(T(MP.STAGES[k])) + ' (' + stagesHere[k] + ')</button>';
      }).join('') + '</div>' +
      (shown.length
        ? '<div class="grid3" style="border:none">' + newest(shown).map(function (a, i) {
            return openBtn(a, '<div class="c3">' + cardImg(a) + kicker(a) + '<h3>' + esc(T(a.title)) + '</h3>' +
              '<p class="dek">' + esc(T(a.dek)) + '</p>' + meta(a) + '</div>', 'reveal in', i);
          }).join('') + '</div>'
        : '<div class="empty" style="margin-top:22px">' + t('Nothing matches this combination yet. The registry grows piece by piece — clear a filter, or browse the front page.',
            'Belum ada yang cocok dengan kombinasi ini. Registri tumbuh sedikit demi sedikit — hapus satu filter, atau jelajahi halaman depan.') + '</div>');

    host.querySelectorAll('[data-fmt]').forEach(function (b) {
      b.addEventListener('click', function () { topicFilters.format = b.dataset.fmt; renderTopic(id); });
    });
    host.querySelectorAll('[data-stg]').forEach(function (b) {
      b.addEventListener('click', function () { topicFilters.stage = b.dataset.stg; renderTopic(id); });
    });
    wireReads(host); wireBack(host);
  }

  /* ── READ ── */
  function renderRead(slug) {
    var a = bySlug[slug];
    var host = document.getElementById('readHost');
    if (!a) { location.hash = '#/'; return; }
    noteRecent(slug);
    var tp = topicOf[a.topic];

    var stagePills = a.stages.map(function (s) {
      return '<span class="pill' + (stage === s ? ' fit' : '') + '">' + esc(T(MP.STAGES[s])) + '</span>';
    }).join('');

    var related = newest(inTopic(a.topic).filter(function (x) { return x.slug !== slug; })).slice(0, 3);

    host.innerHTML =
      '<button class="backbar" data-back><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M15 5l-7 7 7 7"/></svg>' + esc(T(tp.name)) + '</button>' +
      '<article class="art">' +
      kicker(a) +
      '<h1>' + esc(T(a.title)) + '</h1>' +
      '<p class="dek">' + esc(T(a.dek)) + '</p>' +
      '<div class="byline"><span class="a">' + esc(T(a.author)) + '</span>' +
      '<span>' + fdate(a.date) + '</span><span>' + a.minutes + ' ' + t('min', 'mnt') + '</span>' +
      (a.reviewed && a.reviewed !== a.date ? '<span>' + t('Reviewed ', 'Ditinjau ') + fdate(a.reviewed) + '</span>' : '') +
      '<span class="acts"><button class="savebtn' + (isSaved(slug) ? ' on' : '') + '" id="artSave">' +
      (isSaved(slug) ? t('Saved ✓', 'Tersimpan ✓') : t('Save', 'Simpan')) + '</button>' +
      '<button class="savebtn" id="artShare">' + t('Copy link', 'Salin tautan') + '</button></span></div>' +
      (a.img ? '<div class="art-img"><img src="' + a.img + '" alt="' + esc(T(a.title)) + '" decoding="async"></div>' : '') +
      '<div class="body">' +
      '<div class="blockh">' + t('What is happening', 'Apa yang terjadi') + '</div>' +
      a.what.map(function (p) { return '<p>' + esc(T(p)) + '</p>'; }).join('') +
      '<div class="blockh">' + t('Why it matters', 'Mengapa penting') + '</div>' +
      '<div class="callout">' + esc(T(a.why)) + '</div>' +
      (a.chart === 'db-live'
        ? '<div class="blockh">' + t('What the data says', 'Apa kata data') + '</div>' + chartHTML()
        : '') +
      (a.means
        ? '<div class="blockh">' + t('What this means for you', 'Apa artinya bagimu') + '</div>' +
          '<div class="means">' + Object.keys(MP.STAGES).filter(function (s) { return a.means[s]; }).map(function (s) {
            return '<div class="mrow' + (stage === s ? ' me' : '') + '"><span class="mstage">' + esc(T(MP.STAGES[s])) +
              (stage === s ? ' · ' + t('you', 'kamu') : '') + '</span><span class="mtx">' + esc(T(a.means[s])) + '</span></div>';
          }).join('') + '</div>'
        : '') +
      '<div class="blockh">' + t('What to do', 'Apa yang harus dilakukan') + '</div>' +
      '<ol class="acts-list">' + a.act.map(function (p) { return '<li>' + esc(T(p)) + '</li>'; }).join('') + '</ol>' +
      ((a.tools || []).length
        ? '<div class="blockh">' + t('Do it with the pillars', 'Kerjakan bersama pilar') + '</div>' +
          a.tools.map(function (x) {
            var names = { 'the-map': 'The Map · The Range (Explore)', 'the-pack': 'The Pack', 'the-rope': 'The Rope' };
            return '<a class="toolrow" href="../products/' + x.pillar + '/"><b>' + names[x.pillar] + '</b><span>' + esc(T(x.why)) + '</span></a>';
          }).join('')
        : '') +
      '<div class="srcblock"><b>' + t('Sources & provenance', 'Sumber & asal data') + '</b>' +
      (a.sources || []).map(function (s) {
        return s.url
          ? '<div><a href="' + s.url + '" target="_blank" rel="noopener">' + esc(s.label) + '</a></div>'
          : '<div>' + esc(T(s.note)) + '</div>';
      }).join('') + '</div>' +
      '<div class="srcblock" style="border-style:solid;margin-top:12px"><b>' + t('Written for', 'Ditulis untuk') + '</b>' +
      '<div class="stagechips">' + stagePills + '</div></div>' +
      '</div>' +
      (related.length
        ? '<div class="related">' + secH(t('More in ', 'Lainnya di ') + esc(T(tp.name)), '#/topic/' + tp.id, t('All', 'Semua')) +
          '<div class="grid3" style="border:none;padding-top:6px">' + related.map(function (r) {
            return openBtn(r, '<div class="c3">' + cardImg(r) + kicker(r) + '<h3>' + esc(T(r.title)) + '</h3>' + meta(r) + '</div>');
          }).join('') + '</div></div>'
        : '') +
      '</article>';

    var sv = host.querySelector('#artSave');
    sv.addEventListener('click', function () {
      toggleSave(slug);
      sv.classList.toggle('on', isSaved(slug));
      sv.textContent = isSaved(slug) ? t('Saved ✓', 'Tersimpan ✓') : t('Save', 'Simpan');
    });
    var sh = host.querySelector('#artShare');
    sh.addEventListener('click', function () {
      var url = location.href;
      var done = function () { sh.textContent = t('Copied ✓', 'Tersalin ✓'); setTimeout(function () { sh.textContent = t('Copy link', 'Salin tautan'); }, 1600); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, done); else done();
    });
    wireReads(host); wireBack(host);
    window.scrollTo(0, 0);
  }

  /* ── SAVED ── */
  function shelf(title, slugs, emptyMsg) {
    var items = slugs.map(function (s) { return bySlug[s]; }).filter(Boolean);
    return '<section class="sec">' + secH(title) +
      (items.length
        ? '<div class="grid3" style="border:none;padding-top:0">' + items.map(function (a) {
            return openBtn(a, '<div class="c3">' + cardImg(a) + kicker(a) + '<h3>' + esc(T(a.title)) + '</h3>' + meta(a) + '</div>');
          }).join('') + '</div>'
        : '<div class="empty">' + emptyMsg + '</div>') + '</section>';
  }
  function renderSaved() {
    var host = document.getElementById('savedHost');
    host.innerHTML =
      '<button class="backbar" data-back><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M15 5l-7 7 7 7"/></svg>' + t('Front page', 'Halaman depan') + '</button>' +
      '<header class="masthead"><div class="mast-kicker">' + t('Your shelf', 'Rakmu') + '</div>' +
      '<h1 class="mast-title" style="font-size:clamp(28px,4vw,44px)">' + t('Saved & recent', 'Tersimpan & terbaru') + '</h1>' +
      '<p class="mast-sub">' + t('Stored only in this browser — nothing leaves the device.', 'Disimpan hanya di peramban ini — tidak ada yang meninggalkan perangkat.') + '</p></header>' +
      shelf(t('Saved', 'Tersimpan'), saved, t('Nothing saved yet. The Save button lives on every piece.', 'Belum ada yang disimpan. Tombol Simpan ada di setiap artikel.')) +
      shelf(t('Recently read', 'Baru dibaca'), recent, t('Pieces you open will appear here.', 'Artikel yang kamu buka akan muncul di sini.'));
    wireReads(host); wireBack(host);
  }

  /* ── SEARCH ── */
  var srch = document.getElementById('srch'), sInput = document.getElementById('sInput'), sRes = document.getElementById('sRes');
  function openSearch() { srch.classList.add('open'); sInput.value = ''; runSearch(''); sInput.focus(); }
  function closeSearch() { srch.classList.remove('open'); }
  function runSearch(q) {
    q = q.trim().toLowerCase();
    var hits = !q ? [] : A.filter(function (a) {
      var hay = (T(a.title) + ' ' + T(a.dek) + ' ' + T(topicOf[a.topic].name)).toLowerCase();
      return hay.indexOf(q) !== -1;
    });
    var rhits = !q ? [] : MP.RADAR.filter(function (r) {
      return (r.org + ' ' + T(r.title) + ' ' + T(r.type)).toLowerCase().indexOf(q) !== -1;
    });
    var phits = !q ? [] : PRODUCTS.filter(function (pr) {
      return (pr.kw + ' ' + pr.name).toLowerCase().indexOf(q) !== -1;
    });
    if (!q) {
      sRes.innerHTML = '<div class="none">' + t('Ask a question or type a topic — results cover insights, opportunities and Metanoia products.',
        'Ajukan pertanyaan atau ketik topik — hasil mencakup wawasan, peluang, dan produk Metanoia.') + '</div>' +
        '<div class="g">' + t('Try', 'Coba') + '</div>' +
        [['interview', t('Preparing for interviews', 'Bersiap untuk wawancara')],
         ['ATS', t('How screening really works', 'Cara penyaringan sebenarnya bekerja')],
         ['scholarship', t('Scholarships and programmes', 'Beasiswa dan program')],
         ['industry', t('Choosing an industry', 'Memilih industri')]].map(function (x) {
          return '<button data-try="' + x[0] + '">' + x[1] + '</button>';
        }).join('');
      sRes.querySelectorAll('[data-try]').forEach(function (b) {
        b.addEventListener('click', function () { sInput.value = b.dataset.try; runSearch(b.dataset.try); sInput.focus(); });
      });
      return;
    }
    if (!hits.length && !rhits.length && !phits.length) {
      sRes.innerHTML = '<div class="none">' + t('No matches for “' + esc(q) + '”. Try a broader word — or browse by topic.', 'Tidak ada hasil untuk “' + esc(q) + '”. Coba kata yang lebih umum — atau jelajahi per topik.') + '</div>';
      return;
    }
    var groups = {};
    hits.forEach(function (a) { (groups[a.topic] = groups[a.topic] || []).push(a); });
    sRes.innerHTML = Object.keys(groups).map(function (tid) {
      return '<div class="g">' + esc(T(topicOf[tid].name)) + '</div>' + groups[tid].map(function (a) {
        return '<button data-read="' + a.slug + '">' + esc(T(a.title)) + '<span>' + esc(T(MP.FORMATS[a.format])) + ' · ' + a.minutes + ' ' + t('min', 'mnt') + '</span></button>';
      }).join('');
    }).join('') +
    (rhits.length ? '<div class="g">' + t('Opportunities', 'Peluang') + '</div>' + rhits.map(function (r) {
      return '<button data-radar="1">' + esc(r.org) + ' — ' + esc(T(r.title)) + '<span>' + esc(T(r.type)) + '</span></button>';
    }).join('') : '') +
    (phits.length ? '<div class="g">' + t('Do it in Metanoia', 'Kerjakan di Metanoia') + '</div>' + phits.map(function (pr, i) {
      return '<button data-prod="' + i + '">' + esc(pr.name) + '<span>' + esc(T(pr.why)) + '</span></button>';
    }).join('') : '');
    sRes.querySelectorAll('[data-prod]').forEach(function (b) {
      b.addEventListener('click', function () { location.href = phits[+b.dataset.prod].href; });
    });
    sRes.querySelectorAll('[data-read]').forEach(function (b) {
      b.addEventListener('click', function () { closeSearch(); location.hash = '#/read/' + b.dataset.read; });
    });
    sRes.querySelectorAll('[data-radar]').forEach(function (b) {
      b.addEventListener('click', function () { closeSearch(); location.hash = '#/topic/opportunities'; });
    });
  }
  sInput.addEventListener('input', function () { runSearch(sInput.value); });
  srch.addEventListener('click', function (e) { if (e.target === srch) closeSearch(); });
  document.getElementById('srchBtn').addEventListener('click', openSearch);
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && !srch.classList.contains('open') && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
      e.preventDefault(); openSearch();
    }
    if (e.key === 'Escape') closeSearch();
  });

  /* ── wiring helpers ── */
  function wireReads(root) {
    root.querySelectorAll('[data-read]').forEach(function (b) {
      b.addEventListener('click', function () { location.hash = '#/read/' + b.dataset.read; });
    });
  }
  function wireBack(root) {
    root.querySelectorAll('[data-back]').forEach(function (b) {
      b.addEventListener('click', function () { if (history.length > 1) history.back(); else location.hash = '#/'; });
    });
  }
  function wireStageChips(root) {
    root.querySelectorAll('[data-stage]').forEach(function (b) {
      b.addEventListener('click', function () { setStage(b.dataset.stage); });
    });
  }

  /* reveal on scroll */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' }) : null;
  function reveal() {
    document.querySelectorAll('.reveal:not(.in)').forEach(function (el) {
      if (io) io.observe(el); else el.classList.add('in');
    });
  }

  /* reading progress (article view only) */
  var prog = document.getElementById('prog');
  window.addEventListener('scroll', function () {
    if (!document.getElementById('v-read').classList.contains('on')) { prog.style.width = '0'; return; }
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    prog.style.width = (max > 0 ? Math.min(100, h.scrollTop / max * 100) : 0) + '%';
  }, { passive: true });

  /* ── router ── */
  function route() {
    var h = location.hash || '#/';
    var m;
    var show = function (id) {
      ['v-home', 'v-topic', 'v-read', 'v-saved'].forEach(function (v) {
        document.getElementById(v).classList.toggle('on', v === id);
      });
      if (id !== 'v-read') prog.style.width = '0';
    };
    if ((m = h.match(/^#\/read\/([\w-]+)/))) { renderRead(m[1]); show('v-read'); }
    else if ((m = h.match(/^#\/need\/([\w-]+)/))) { renderNeed(m[1]); show('v-topic'); window.scrollTo(0, 0); }
    else if ((m = h.match(/^#\/topic\/([\w-]+)/))) { renderTopic(m[1]); show('v-topic'); window.scrollTo(0, 0); }
    else if (/^#\/saved/.test(h)) { renderSaved(); show('v-saved'); window.scrollTo(0, 0); }
    else { renderHome(); show('v-home'); }
  }
  function render() { route(); }
  window.addEventListener('hashchange', route);

  /* ── chrome: saved, theme, language ── */
  document.getElementById('savedBtn').addEventListener('click', function () { location.hash = '#/saved'; });
  document.getElementById('themeBtn').addEventListener('click', function () {
    var next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('mt-theme', next); } catch (e) {}
  });
  function applyStaticLang() {
    document.querySelectorAll('[data-en]').forEach(function (el) {
      var v = el.dataset[lang];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('.ctl button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
    });
    sInput.placeholder = t('What are you trying to figure out?', 'Apa yang sedang ingin kamu pahami?');
    document.documentElement.lang = lang;
  }
  document.querySelectorAll('.ctl button').forEach(function (b) {
    b.addEventListener('click', function () {
      if (b.dataset.lang === lang) return;
      lang = b.dataset.lang;
      try { localStorage.setItem('mtLang', lang); localStorage.setItem('mt-lang', lang); } catch (e) {}
      applyStaticLang(); render();
    });
  });

  /* ── boot ── */
  applyStaticLang();
  savedBadge();
  route();
})();
