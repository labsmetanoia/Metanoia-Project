/**
 * THE RANGE — application layer
 * Three modes (Reflect · Explore · Prepare), one persistent object (the
 * Possibility), sideways entry at any point. Matching is deterministic
 * (data/range/fit.js); hiring and eligibility data is retrieval-only
 * (data/range/graph.js + opportunities.js). Identity lives on this device.
 */
(function () {
  'use strict';
  var G = window.MT_RANGE_GRAPH, F = window.MT_RANGE_FIT, O = window.MT_RANGE_OPPS;
  var COS = O.companies();
  var OPPS_ALL = O.opps();
  function CO(id) { return COS.filter(function (c) { return c.id === id; })[0]; }
  function monogram(name) {
    var parts = name.replace(/\(.*\)/g, '').trim().split(/\s+/);
    return (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
  }
  /* Company logo tile — see js/logo.js for the source chain and fallback. */
  function logoTile(c, size) { return window.MT_LOGO.tile(c, size); }
  function countryName(c) {
    if (c.geo === 'id' || c.country === 'id') return 'Indonesia';
    var DB = window.MT_RANGE_DB, n = DB && DB.CC[c.country];
    return n ? (lang() === 'id' ? n.id : n.en.replace(/^the /, '')) : t('International', 'Internasional');
  }
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return (s || '').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };

  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function L(pair) { return pair ? (pair[lang()] || pair.en) : ''; }
  function t(en, idn) { return lang() === 'id' ? idn : en; }

  function applyLang() {
    $$('[data-en]').forEach(function (n) { n.innerHTML = n.getAttribute(lang() === 'id' ? 'data-id' : 'data-en'); });
    $$('.rail .lang button').forEach(function (b) { b.classList.toggle('on', b.dataset.lang === lang()); });
    document.documentElement.lang = lang();
  }
  $('#themeBtn').addEventListener('click', function () {
    var next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('mt-theme', next); } catch (e) {}
  });
  $$('.rail .lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      try { localStorage.setItem('mtLang', b.dataset.lang); } catch (e) {}
      applyLang(); route();
    });
  });

  /* ── state: identity (migrated from The Lookout) + possibilities ── */
  var IKEY = 'mt-range-identity', PKEY = 'mt-range-possibilities';
  function loadId() {
    try {
      var v = JSON.parse(localStorage.getItem(IKEY) || 'null');
      if (!v) { /* one-time migration from the retired product's key */
        v = JSON.parse(localStorage.getItem('mt-lookout-identity') || 'null');
        if (v) localStorage.setItem(IKEY, JSON.stringify(v));
      }
      return v || freshId();
    } catch (e) { return freshId(); }
  }
  function freshId() {
    return { b1: {}, b2: {}, b3: {}, b4: {}, b5: {}, b6: {}, b7: {}, b8: {}, b9: {}, b10: {}, quick: {},
      attributes: {}, attributeSources: {}, skills: [], interests: [],
      prefIndustries: [], prefFunctions: [],
      topValues: [], constraints: [], dismissed: [], statement: null };
  }
  var ID = loadId();
  ['b8', 'b9', 'b10'].forEach(function (k) { if (!ID[k]) ID[k] = {}; });
  if (!ID.prefIndustries) ID.prefIndustries = [];
  if (!ID.prefFunctions) ID.prefFunctions = [];
  function saveId() { try { localStorage.setItem(IKEY, JSON.stringify(ID)); } catch (e) {} }

  function loadPoss() { try { return JSON.parse(localStorage.getItem(PKEY) || '[]'); } catch (e) { return []; } }
  var POSS = loadPoss();
  function savePoss() { try { localStorage.setItem(PKEY, JSON.stringify(POSS)); } catch (e) {} updateNavCnt(); }
  function findPoss(type, ref) { return POSS.filter(function (p) { return p.type === type && p.ref === ref; })[0]; }
  function setPoss(type, ref, status) {
    var p = findPoss(type, ref);
    if (!p) { p = { type: type, ref: ref, status: status, ts: Date.now() }; POSS.push(p); }
    else { p.status = status; p.ts = Date.now(); }
    savePoss(); return p;
  }
  function updateNavCnt() {
    var act = POSS.filter(function (p) { return p.status !== 'ruled_out'; }).length;
    $('#navCnt').textContent = act || '';
    $('#navIdPct').textContent = Math.round(F.completeness(ID) * 100) + '%';
  }

  /* ── router ── */
  var views = ['home', 'quick', 'identity', 'directions', 'ddetail', 'explore', 'company', 'opp', 'range', 'profile', 'compare'];
  function go(v, arg) { location.hash = '#/' + v + (arg ? '/' + arg : ''); }
  function route() {
    var h = (location.hash || '').replace('#/', '').split('/');
    var v = views.indexOf(h[0]) !== -1 ? h[0] : null;
    if (!v) v = POSS.length ? 'range' : 'home';   /* returning users land on Your Range */
    $$('.view').forEach(function (x) { x.classList.remove('on'); });
    $('#v-' + v).classList.add('on');
    $$('[data-nav]').forEach(function (b) {
      b.classList.toggle('on', b.dataset.nav === v ||
        (b.dataset.nav === 'explore' && ['company', 'opp', 'ddetail'].indexOf(v) !== -1));
    });
    var R = { home: renderHome, quick: renderQuick, identity: renderIdentity, directions: renderDirections,
      ddetail: renderDDetail, explore: renderExplore, company: renderCompany, opp: renderOpp,
      range: renderRange, profile: renderProfile, compare: renderCompare };
    R[v](h.slice(1));
    updateNavCnt();
    applyLang();
    window.MT_LOGO.wire($('#v-' + v));
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  $$('[data-nav]').forEach(function (b) { b.addEventListener('click', function () { go(b.dataset.nav); }); });

  /* ═══ S1 · LANDING ═══ */
  function renderHome() {
    var host = $('#v-home');
    var shopee = G.programmes.filter(function (p2) { return p2.id === 'shopee-gdp'; })[0];
    var FLOW = [
      [t('Explore', 'Jelajah'), t('Browse industries, companies and roles — freely, no account.', 'Jelajahi industri, perusahaan, dan peran — bebas, tanpa akun.')],
      [t('Select', 'Pilih'), t('Open an opportunity that catches your eye.', 'Buka peluang yang menarik perhatianmu.')],
      [t('Investigate', 'Selidiki'), t('See how they actually hire, and whether you can apply.', 'Lihat cara mereka merekrut, dan apakah kamu bisa melamar.')],
      [t('Compare', 'Bandingkan'), t('Put possibilities side by side, trade-offs in the open.', 'Sandingkan kemungkinan, kompromi di permukaan.')],
      [t('Understand', 'Pahami'), t('Know your gaps and the honest preparation cost.', 'Ketahui kesenjanganmu dan biaya persiapan yang jujur.')],
      [t('Decide', 'Putuskan'), t('Commit to one — and hand off to the pillars that prepare you.', 'Tetapkan satu — lalu lanjut ke pilar yang menyiapkanmu.')]
    ];
    host.innerHTML =
      '<div style="max-width:680px;padding-top:22px">' +
      '<p class="micro">00 · The Range · Bentang · ' + t('Free to start', 'Gratis untuk memulai') + '</p>' +
      '<h1 class="serif" style="font-size:clamp(30px,5vw,46px);letter-spacing:-.01em;line-height:1.14;margin:14px 0 14px">' +
      t('See what&rsquo;s out there. <em style="color:var(--r-explore)">Then find out what it takes.</em>',
        'Lihat apa yang ada di luar sana. <em style="color:var(--r-explore)">Lalu cari tahu apa yang dibutuhkan.</em>') + '</h1>' +
      '<p style="font-size:16px;color:var(--r-text-2);margin-bottom:24px">' +
      t('You don&rsquo;t need to know what you want yet. Start with three questions.',
        'Kamu belum perlu tahu apa yang kamu mau. Mulailah dengan tiga pertanyaan.') + '</p>' +
      '<div style="display:flex;gap:12px;flex-wrap:wrap">' +
      '<button class="btn-p" id="homeStart">' + t('Start with three questions', 'Mulai dengan tiga pertanyaan') + ' →</button>' +
      '<button class="btn-s" id="homeBrowse">' + t('Or just browse companies', 'Atau jelajahi perusahaan saja') + ' →</button></div>' +
      '<p class="note3" style="margin-top:14px">' + t('Free. No account needed to start. We&rsquo;ll tell you what we don&rsquo;t know.',
        'Gratis. Tanpa akun untuk memulai. Kami akan memberi tahu apa yang tidak kami ketahui.') + '</p></div>' +

      '<div class="sec"><p class="sec-h">' + t('How The Range works', 'Cara kerja The Range') + '</p>' +
      '<div class="flow-strip">' + FLOW.map(function (f2, i) {
        return '<div class="fs-step"><span class="n">' + (i + 1) + '</span><b>' + f2[0] + '</b><span>' + f2[1] + '</span></div>';
      }).join('') + '</div></div>' +

      '<div class="sec"><p class="sec-h">' + t('The product, working — a real documented process', 'Produknya bekerja — proses nyata yang terdokumentasi') + '</p>' +
      '<div class="card" style="max-width:680px">' +
      '<div style="display:flex;gap:14px;align-items:center;margin-bottom:6px">' +
      '<span class="mono">' + monogram('Shopee Indonesia') + '</span>' +
      '<div style="min-width:0"><p class="micro">Shopee (Sea Group) Indonesia</p>' +
      '<h3 class="serif" style="font-size:18px;margin:2px 0 0">' + L(shopee.name) + '</h3></div>' +
      '<span class="prov v" style="margin-left:auto;white-space:nowrap">✓ ' + t('official · verified', 'resmi · diverifikasi') + '</span></div>' +
      '<p class="note3" style="margin:0 0 16px">' + L(shopee.length) + ' · ' + L(shopee.window) + '</p>' +
      shopee.stages.map(function (st2, i) {
        return '<div class="demo-stage' + (i === 0 ? ' open' : '') + '"><button data-demo="' + i + '">' +
          '<span class="sn2">' + st2.seq + '</span><span>' + L(st2.name) + '</span><span class="pm">+</span></button>' +
          '<div class="body">' + (st2.assess ? t('Assesses: ', 'Menilai: ') + L(st2.assess) : '') +
          (st2.failure ? '<br><span style="color:var(--r-against)">' + t('Most common failure: ', 'Kegagalan paling umum: ') + L(st2.failure) + '</span>' : '') +
          '</div></div>';
      }).join('') +
      '<p class="note3" style="margin:10px 0 12px">' + t('Every stage above links to the pillar that prepares you for it — that bridge is the product.',
        'Setiap tahap di atas terhubung ke pilar yang menyiapkanmu — jembatan itulah produknya.') + '</p>' +
      '<button class="btn-s" data-open-opp="shopee-gdp">' + t('Open the full opportunity', 'Buka peluang lengkapnya') + ' →</button>' +
      '</div></div>' + disclaimer();
    $('#homeStart').addEventListener('click', function () { go('quick'); });
    $('#homeBrowse').addEventListener('click', function () { go('explore'); });
    $$('[data-demo]', host).forEach(function (b) {
      b.addEventListener('click', function () { b.parentElement.classList.toggle('open'); });
    });
    wireOppButtons(host);
  }
  function disclaimer() {
    return '<div class="disc">' + t('<b>How to read this.</b> These are directions worth investigating, based on what you told us — not predictions, and not advice. We can only see what you gave us, and career fit depends on things no questionnaire captures. Treat this as a starting point.',
      '<b>Cara membacanya.</b> Ini adalah arah yang layak diselidiki, berdasarkan apa yang kamu ceritakan — bukan prediksi, dan bukan nasihat. Kami hanya bisa melihat apa yang kamu berikan, dan kecocokan karier bergantung pada hal yang tak tertangkap kuesioner mana pun. Perlakukan ini sebagai titik awal.') + '</div>';
  }

  /* ═══ S2a · QUICK SIGNAL — 3 questions, 90 seconds ═══ */
  var ARCH = {
    analyse: { attrs: { analytical: 80, structured: 60, detail_oriented: 65, ambiguity_tolerant: 60 },
      lbl: { en: 'I like taking messy things apart and making them make sense', id: 'Aku suka mengurai hal berantakan sampai masuk akal' } },
    build: { attrs: { creative: 70, technical_depth: 65, autonomous: 65, analytical: 55 },
      lbl: { en: 'I like making things people actually use', id: 'Aku suka membuat hal yang benar-benar dipakai orang' } },
    people: { attrs: { people_facing: 85, commercial: 70, pace_intensity: 65, creative: 50 },
      lbl: { en: 'I like working with people and persuading them', id: 'Aku suka bekerja dengan orang dan meyakinkan mereka' } },
    precision: { attrs: { detail_oriented: 90, structured: 85, analytical: 70, ambiguity_tolerant: 25 },
      lbl: { en: 'I like precision, systems, and getting it exactly right', id: 'Aku suka presisi, sistem, dan ketepatan' } },
    unknown: { attrs: null,
      lbl: { en: 'I genuinely don’t know', id: 'Aku benar-benar tidak tahu' } }
  };
  function renderQuick() {
    var host = $('#v-quick');
    var q = ID.quick || {};
    host.innerHTML =
      '<p class="micro" style="color:var(--r-explore)">' + t('Ninety seconds', 'Sembilan puluh detik') + '</p>' +
      '<h1 class="h-page">' + t('Three questions. Then you see something.', 'Tiga pertanyaan. Lalu kamu melihat hasilnya.') + '</h1>' +
      '<p class="h-sub">' + t('Everything is optional and editable later.', 'Semuanya opsional dan bisa diubah nanti.') + '</p>' +
      '<div class="card" style="max-width:620px">' +
      '<p class="fieldl">1 · ' + t('Where are you right now?', 'Di mana posisimu sekarang?') + '</p>' +
      '<div class="tags" id="qkStatus">' +
      [['student', t('Still studying', 'Masih kuliah')], ['fresh-grad', t('Just graduated', 'Baru lulus')], ['working', t('Working, considering a change', 'Bekerja, mempertimbangkan perubahan')]]
        .map(function (o) { return '<button class="tag' + (q.status === o[0] ? ' on' : '') + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' +
      '<p class="fieldl" style="margin-top:20px">2 · ' + t('What did you study?', 'Apa yang kamu pelajari?') + '</p>' +
      '<input type="text" id="qkField" value="' + esc(q.field || '') + '" placeholder="' + t('e.g. Economics, Informatics, Communication…', 'mis. Ekonomi, Informatika, Komunikasi…') + '">' +
      '<p class="fieldl" style="margin-top:20px">3 · ' + t('Which of these sounds most like you?', 'Mana yang paling terdengar seperti dirimu?') + '</p>' +
      '<div style="display:flex;flex-direction:column;gap:8px" id="qkArch">' +
      Object.keys(ARCH).map(function (k) {
        return '<button class="tag' + (q.arch === k ? ' on' : '') + '" data-v="' + k + '" style="text-align:left">' + L(ARCH[k].lbl) + '</button>';
      }).join('') + '</div>' +
      '<div style="margin-top:22px"><button class="btn-p" id="qkGo" style="background:var(--r-explore)">' + t('See what fits', 'Lihat yang cocok') + ' →</button></div></div>';
    $$('#qkStatus .tag').forEach(function (b) {
      b.addEventListener('click', function () {
        ID.quick.status = b.dataset.v; ID.b1.status = b.dataset.v; ID.b1.done = true; saveId(); renderQuick(); applyLang();
      });
    });
    $$('#qkArch .tag').forEach(function (b) {
      b.addEventListener('click', function () { ID.quick.arch = b.dataset.v; saveId(); renderQuick(); applyLang(); });
    });
    $('#qkGo').addEventListener('click', function () {
      ID.quick.field = $('#qkField').value;
      ID.b1.field = ID.quick.field; if (ID.quick.field) ID.b1.done = true;
      var a = ARCH[ID.quick.arch || 'unknown'];
      if (a && a.attrs) {
        Object.keys(a.attrs).forEach(function (k) {
          ID.attributes[k] = a.attrs[k]; ID.attributeSources[k] = 'block_5';
        });
        ID.quick.wide = false;
      } else { ID.quick.wide = true; }  /* "I genuinely don't know" → wider set, never penalised */
      ID.quick.done = true; saveId();
      go('directions');
    });
  }

  /* ═══ S2b · PROGRESSIVE IDENTITY ═══ */
  var SKILLS = [
    ['programming', { en: 'Programming', id: 'Pemrograman' }], ['sql-excel', { en: 'Excel / SQL', id: 'Excel / SQL' }],
    ['statistics', { en: 'Statistics', id: 'Statistika' }], ['writing', { en: 'Writing', id: 'Menulis' }],
    ['communication', { en: 'Public speaking', id: 'Berbicara di depan umum' }], ['negotiation', { en: 'Negotiation', id: 'Negosiasi' }],
    ['design-tools', { en: 'Design tools', id: 'Perangkat desain' }], ['content-creation', { en: 'Content creation', id: 'Membuat konten' }],
    ['financial-modelling', { en: 'Financial modelling', id: 'Pemodelan keuangan' }], ['accounting', { en: 'Accounting', id: 'Akuntansi' }],
    ['planning', { en: 'Planning & organising', id: 'Perencanaan & pengorganisasian' }], ['coordination', { en: 'Coordinating people', id: 'Mengoordinasikan orang' }],
    ['user-research', { en: 'Interviewing people', id: 'Mewawancarai orang' }], ['problem-solving', { en: 'Problem solving', id: 'Pemecahan masalah' }],
    ['data-storytelling', { en: 'Explaining with data', id: 'Menjelaskan dengan data' }], ['empathy', { en: 'Listening & empathy', id: 'Mendengar & empati' }]
  ];
  var INTERESTS = [
    ['technology', { en: 'Technology', id: 'Teknologi' }], ['data', { en: 'Data', id: 'Data' }],
    ['business', { en: 'Business', id: 'Bisnis' }], ['numbers', { en: 'Numbers & markets', id: 'Angka & pasar' }],
    ['people', { en: 'People', id: 'Orang' }], ['creating', { en: 'Creating things', id: 'Membuat karya' }],
    ['design', { en: 'Design', id: 'Desain' }], ['media', { en: 'Media & content', id: 'Media & konten' }],
    ['research', { en: 'Research', id: 'Riset' }], ['puzzles', { en: 'Puzzles & systems', id: 'Teka-teki & sistem' }],
    ['strategy', { en: 'Strategy', id: 'Strategi' }], ['teaching', { en: 'Teaching', id: 'Mengajar' }],
    ['order', { en: 'Bringing order', id: 'Menciptakan keteraturan' }], ['building', { en: 'Building products', id: 'Membangun produk' }],
    ['protecting', { en: 'Protecting & securing', id: 'Melindungi & mengamankan' }], ['moving', { en: 'Being out and about', id: 'Bergerak di lapangan' }],
    ['markets', { en: 'Financial markets', id: 'Pasar keuangan' }]
  ];
  var VALUES = ['money', 'impact', 'stability', 'learning', 'autonomy', 'recognition',
    'balance', 'prestige', 'purpose', 'security', 'creativity', 'people', 'achievement', 'leadership'];
  var CONSTRAINTS = [
    ['family', { en: 'Family expectations', id: 'Ekspektasi keluarga' }],
    ['financial', { en: 'Financial pressure', id: 'Tekanan finansial' }],
    ['geography', { en: 'Need to stay in my city', id: 'Harus tinggal di kotaku' }],
    ['timeline', { en: 'Timeline pressure', id: 'Tekanan waktu' }],
    ['confidence', { en: 'Confidence', id: 'Kepercayaan diri' }],
    ['lost', { en: "I don't know where to start", id: 'Aku tidak tahu harus mulai dari mana' }]
  ];
  var SLIDERS = [
    ['focus_variety', { en: 'Deep focus', id: 'Fokus mendalam' }, { en: 'Constant variety', id: 'Variasi terus-menerus' }],
    ['structure_ambiguity', { en: 'Clear structure', id: 'Struktur jelas' }, { en: 'Open ambiguity', id: 'Ambiguitas terbuka' }],
    ['independent_collab', { en: 'Independent', id: 'Mandiri' }, { en: 'Highly collaborative', id: 'Sangat kolaboratif' }],
    ['steady_intense', { en: 'Steady pace', id: 'Ritme stabil' }, { en: 'High intensity', id: 'Intensitas tinggi' }],
    ['build_advise', { en: 'Build things', id: 'Membangun sesuatu' }, { en: 'Advise others', id: 'Menasihati orang' }],
    ['customer_internal', { en: 'Customer-facing', id: 'Berhadapan dengan pelanggan' }, { en: 'Internally focused', id: 'Fokus internal' }]
  ];
  var IND_ICONS = { 'tech-ecommerce': '⌘', 'financial-services': '◈', 'fmcg-consumer': '◉',
    'professional-services': '▤', 'energy-industrials': '⚡', 'healthcare-pharma': '✚',
    'telecom': '⌁', 'media-gaming': '▶', 'travel-hospitality': '✈', 'education': '✎' };
  var FN_ICONS = { engineering: '⌘', data: '◫', product: '◧', design: '✎', marketing: '◉',
    finance: '◈', operations: '⚙', commercial: '⇄', people: '☺', risk: '▣' };

  var SECTIONS = [
    { key: 'b1', title: { en: 'Where you are', id: 'Posisimu' },
      payoff: { en: 'makes eligibility checks accurate', id: 'membuat cek kelayakan akurat' },
      render: function (h) {
        var b = ID.b1;
        h.innerHTML = '<div class="grid2">' +
          fSel('i_degree', t('Education level', 'Jenjang'),
            [['s1', t('Bachelor’s degree (S1)', 'Sarjana (S1)')], ['d3_d4', t('Associate / vocational degree (D3–D4)', 'Diploma (D3/D4)')], ['s2', t('Master’s degree (S2)', 'Magister (S2)')]], b.degree) +
          fSel('i_uni', t('Institution type', 'Jenis institusi'),
            [['ptn', t('Public university', 'Universitas negeri (PTN)')], ['pts', t('Private university', 'Universitas swasta (PTS)')], ['abroad', t('Overseas', 'Luar negeri')]], b.uni) +
          fNum('i_gradyear', t('Graduation year', 'Tahun lulus'), b.gradYear) +
          fNum('i_age', t('Age', 'Usia'), b.age) +
          fNum('i_gpa', t('GPA (0–4)', 'IPK (0–4)'), b.gpa, '0.01') +
          fTxt('i_field', t('Field of study', 'Bidang studi'), b.field) + '</div>';
      },
      collect: function () {
        var b = ID.b1;
        b.degree = val('i_degree') || b.degree; b.uni = val('i_uni') || b.uni;
        b.gradYear = numv('i_gradyear', b.gradYear); b.age = numv('i_age', b.age); b.gpa = numv('i_gpa', b.gpa);
        b.field = val('i_field') || b.field;
        b.done = !!(b.degree || b.field || b.age != null);
      } },
    { key: 'b2', title: { en: "What you've done", id: 'Apa yang pernah kamu lakukan' },
      payoff: { en: 'grounds your identity statement in real experience', id: 'melandasi pernyataan identitasmu pada pengalaman nyata' },
      render: function (h) {
        var b = ID.b2;
        h.innerHTML = '<div class="grid2">' +
          fTxt('i_role', t('Current role, if any', 'Peran saat ini, jika ada'), b.role) +
          fTxt('i_prev', t('Previous roles or internships', 'Peran atau magang sebelumnya'), b.prev) +
          fNum('i_years', t('Years of experience', 'Tahun pengalaman'), b.years) +
          fTxt('i_ach', t('One achievement you’re proud of', 'Satu pencapaian yang kamu banggakan'), b.ach) + '</div>' +
          '<label class="fieldl" style="margin-top:14px">' + t('One experience — what did you actually do?', 'Satu pengalaman — apa yang benar-benar kamu kerjakan?') + '</label>' +
          '<textarea id="i_exp1">' + esc(b.exp1 || '') + '</textarea>';
      },
      collect: function () {
        var b = ID.b2;
        b.role = val('i_role') || b.role; b.prev = val('i_prev') || b.prev;
        b.years = numv('i_years', b.years); b.ach = val('i_ach') || b.ach;
        b.exp1 = val('i_exp1') || b.exp1;
        b.done = !!(b.exp1 && b.exp1.length > 10) || !!b.role || !!b.ach || b.years != null;
      } },
    { key: 'b3', title: { en: "What you're good at", id: 'Apa yang kamu kuasai' },
      payoff: { en: 'unlocks skill-based evidence in your results', id: 'membuka bukti berbasis keahlian di hasilmu' },
      render: function (h) {
        h.innerHTML = '<div class="tags" id="i_skills">' + SKILLS.map(function (s) {
          var f = ID.skills.filter(function (p) { return p.id === s[0]; })[0];
          return '<button class="tag' + (f ? ' on' : '') + '" data-id="' + s[0] + '">' + L(s[1]) +
            (f && f.asked ? ' ★' : '') + '</button>';
        }).join('') + '</div><p class="note3" style="margin-top:10px">' +
          t('Tap = you can do it. Tap again = people ask you for help with it (★). That second signal is worth more.',
            'Ketuk = kamu bisa. Ketuk lagi = orang sering minta bantuanmu (★). Sinyal kedua itu lebih berharga.') + '</p>';
        $$('#i_skills .tag').forEach(function (tg) {
          tg.addEventListener('click', function () {
            var id = tg.dataset.id;
            var f = ID.skills.filter(function (p) { return p.id === id; })[0];
            if (!f) ID.skills.push({ id: id, label: L(SKILLS.filter(function (s) { return s[0] === id; })[0][1]), asked: false });
            else if (!f.asked) f.asked = true;
            else ID.skills = ID.skills.filter(function (p) { return p.id !== id; });
            ID.b3.done = ID.skills.length > 0; saveId(); SECTIONS[2].render(h);
          });
        });
      },
      collect: function () { ID.b3.done = ID.skills.length > 0; } },
    { key: 'b4', title: { en: "What you're drawn to", id: 'Apa yang menarikmu' },
      payoff: { en: 'sharpens fit and surfaces adjacencies', id: 'mempertajam kecocokan dan memunculkan arah bersebelahan' },
      render: function (h) {
        h.innerHTML = '<div class="tags" id="i_interests">' + INTERESTS.map(function (s) {
          return '<button class="tag' + ((ID.interests || []).indexOf(s[0]) !== -1 ? ' on' : '') + '" data-id="' + s[0] + '">' + L(s[1]) + '</button>';
        }).join('') + '</div>' +
        '<label class="fieldl" style="margin-top:16px">' + t('Hobbies and things you do outside study or work', 'Hobi dan hal yang kamu lakukan di luar kuliah atau kerja') + '</label>' +
        '<input type="text" id="i_hobby" value="' + esc(ID.b4.hobbies || '') + '" placeholder="' + t('e.g. photography, futsal, chess, baking…', 'mis. fotografi, futsal, catur, membuat kue…') + '">' +
        '<label class="fieldl" style="margin-top:16px">' + t('Describe a time you lost track of hours. What were you doing?', 'Ceritakan saat kamu lupa waktu. Apa yang sedang kamu kerjakan?') + '</label>' +
        '<textarea id="i_flow">' + esc(ID.b4.flow || '') + '</textarea>';
        wireMulti('i_interests', ID.interests, function () { ID.b4.done = ID.interests.length > 0; saveId(); });
      },
      collect: function () {
        ID.b4.flow = val('i_flow') || ID.b4.flow; ID.b4.hobbies = val('i_hobby') || ID.b4.hobbies;
        ID.b4.done = ID.interests.length > 0 || !!(ID.b4.flow && ID.b4.flow.length > 10) || !!ID.b4.hobbies;
      } },
    { key: 'b5', title: { en: 'How you like to work', id: 'Cara kerja favoritmu' },
      payoff: { en: 'surfaces conflicts you can’t see yet', id: 'memunculkan konflik yang belum kamu lihat' },
      render: function (h) {
        h.innerHTML = SLIDERS.map(function (s) {
          var v = (ID.b5[s[0]] != null) ? ID.b5[s[0]] : 50;
          return '<div style="margin-bottom:16px"><div style="display:flex;justify-content:space-between;font-size:12.5px;color:var(--r-text-2);margin-bottom:4px"><b>' + L(s[1]) + '</b><b>' + L(s[2]) + '</b></div>' +
            '<input type="range" min="0" max="100" value="' + v + '" data-key="' + s[0] + '"></div>';
        }).join('');
        $$('input[type=range]', h).forEach(function (r) {
          r.addEventListener('input', function () { ID.b5[r.dataset.key] = +r.value; ID.b5.done = true; saveId(); });
        });
      },
      collect: function () { ID.b5.done = SLIDERS.some(function (s) { return ID.b5[s[0]] != null; }); } },
    { key: 'b6', title: { en: 'What matters to you', id: 'Apa yang penting bagimu' },
      payoff: { en: 'flags directions that clash with your values', id: 'menandai arah yang bertentangan dengan nilaimu' },
      render: function (h) {
        h.innerHTML = '<div class="tags" id="i_values">' + VALUES.map(function (v) {
          return '<button class="tag' + ((ID.topValues || []).indexOf(v) !== -1 ? ' on' : '') + '" data-id="' + v + '">' + F.valueLabel(v, lang()) + '</button>';
        }).join('') + '</div><p class="note3" style="margin-top:8px"><span id="i_vcnt">' + ID.topValues.length + '</span> / 5</p>';
        wireMulti('i_values', ID.topValues, function () {
          if (ID.topValues.length > 5) ID.topValues.length = 5;
          ID.b6.done = ID.topValues.length >= 3; saveId();
          $('#i_vcnt').textContent = ID.topValues.length;
          $$('#i_values .tag').forEach(function (tg) { tg.classList.toggle('on', ID.topValues.indexOf(tg.dataset.id) !== -1); });
        });
      },
      collect: function () { ID.b6.done = ID.topValues.length >= 3; } },
    { key: 'b7', title: { en: "What's in your way", id: 'Apa yang menghalangi' },
      payoff: { en: 'filters out what isn’t realistic right now', id: 'menyaring yang belum realistis saat ini' },
      render: function (h) {
        h.innerHTML = '<div class="tags" id="i_constraints">' + CONSTRAINTS.map(function (c) {
          return '<button class="tag' + ((ID.constraints || []).indexOf(c[0]) !== -1 ? ' on' : '') + '" data-id="' + c[0] + '">' + L(c[1]) + '</button>';
        }).join('') + '</div>';
        wireMulti('i_constraints', ID.constraints, function () { ID.b7.done = true; saveId(); });
      },
      collect: function () { ID.b7.done = ID.b7.done || ID.constraints.length > 0; } },
    { key: 'b8', title: { en: 'Industries that pull you', id: 'Industri yang menarikmu' },
      payoff: { en: 'weights results toward industries you actually want', id: 'memberi bobot pada industri yang benar-benar kamu mau' },
      render: function (h) {
        h.innerHTML = '<div class="pickgrid" id="i_inds">' + G.industries.map(function (ind) {
          return '<button class="pick tag' + ((ID.prefIndustries || []).indexOf(ind.id) !== -1 ? ' on' : '') + '" data-id="' + ind.id + '">' +
            '<span class="ic">' + (IND_ICONS[ind.id] || '◇') + '</span><b>' + L(ind.name) + '</b>' +
            '<span>' + L(ind.desc).split('—')[0].slice(0, 64) + '</span></button>';
        }).join('') + '</div><p class="note3" style="margin-top:10px">' +
        t('Pick any that genuinely interest you — or none.', 'Pilih yang benar-benar menarik bagimu — atau tidak sama sekali.') + '</p>' +
        '<div class="idfb" id="i_indfb"></div>';
        wireMulti('i_inds', ID.prefIndustries, function () {
          ID.b8.done = ID.prefIndustries.length > 0; saveId();
          $('#i_indfb').textContent = ID.prefIndustries.length
            ? t(ID.prefIndustries.length + ' industries will weight your results.', ID.prefIndustries.length + ' industri akan memberi bobot pada hasilmu.')
            : '';
        });
      },
      collect: function () { ID.b8.done = ID.prefIndustries.length > 0; } },
    { key: 'b9', title: { en: 'Functions you gravitate toward', id: 'Fungsi yang kamu condongi' },
      payoff: { en: 'surfaces roles in the functions you name', id: 'memunculkan peran di fungsi yang kamu sebut' },
      render: function (h) {
        h.innerHTML = '<div class="pickgrid" id="i_fns">' + G.functions.map(function (fn) {
          return '<button class="pick tag' + ((ID.prefFunctions || []).indexOf(fn.id) !== -1 ? ' on' : '') + '" data-id="' + fn.id + '">' +
            '<span class="ic">' + (FN_ICONS[fn.id] || '◇') + '</span><b>' + L(fn.name) + '</b></button>';
        }).join('') + '</div>';
        wireMulti('i_fns', ID.prefFunctions, function () { ID.b9.done = ID.prefFunctions.length > 0; saveId(); });
      },
      collect: function () { ID.b9.done = ID.prefFunctions.length > 0; } },
    { key: 'b10', title: { en: 'Where you hope this goes', id: 'Ke mana harapanmu membawa ini' },
      payoff: { en: 'anchors recommendations to your own aspiration', id: 'menautkan rekomendasi pada aspirasimu sendiri' },
      render: function (h) {
        var b = ID.b10;
        h.innerHTML =
          '<label class="fieldl">' + t('In a sentence or two — what do you hope your work life looks like in five years?', 'Dalam satu-dua kalimat — seperti apa harapanmu tentang kehidupan kerjamu lima tahun lagi?') + '</label>' +
          '<textarea id="i_asp">' + esc(b.text || '') + '</textarea>' +
          '<label class="fieldl" style="margin-top:14px">' + t('And in the next 12 months?', 'Dan dalam 12 bulan ke depan?') + '</label>' +
          '<input type="text" id="i_short" value="' + esc(b.shortTerm || '') + '" placeholder="' + t('e.g. land a first analyst role, pass one selection process…', 'mis. dapat peran analis pertama, lolos satu proses seleksi…') + '">' +
          '<label class="fieldl" style="margin-top:14px">' + t('Which sounds closest?', 'Mana yang paling mendekati?') + '</label>' +
          '<div class="tags" id="i_horizon">' +
          [['depth', t('Going deep in one craft', 'Mendalami satu keahlian')],
           ['breadth', t('Leading across many areas', 'Memimpin lintas banyak area')],
           ['build', t('Building something of my own someday', 'Suatu saat membangun milikku sendiri')],
           ['secure', t('A stable, respected profession', 'Profesi yang stabil dan dihormati')]]
            .map(function (o) { return '<button class="tag' + (b.horizon === o[0] ? ' on' : '') + '" data-id="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>';
        $$('#i_horizon .tag').forEach(function (tg) {
          tg.addEventListener('click', function () {
            ID.b10.text = val('i_asp') || ID.b10.text;
            ID.b10.horizon = tg.dataset.id; ID.b10.done = true; saveId();
            $$('#i_horizon .tag').forEach(function (x) { x.classList.toggle('on', x === tg); });
          });
        });
      },
      collect: function () {
        ID.b10.text = val('i_asp') || ID.b10.text;
        ID.b10.shortTerm = val('i_short') || ID.b10.shortTerm;
        ID.b10.done = !!(ID.b10.text && ID.b10.text.length > 5) || !!ID.b10.horizon || !!ID.b10.shortTerm;
      } }
  ];

  function fSel(id, label, opts, cur) {
    return '<div><label class="fieldl">' + label + '</label><select id="' + id + '"><option value=""></option>' +
      opts.map(function (o) { return '<option value="' + o[0] + '"' + (cur === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select></div>';
  }
  function fTxt(id, label, cur) { return '<div><label class="fieldl">' + label + '</label><input type="text" id="' + id + '" value="' + esc(cur || '') + '"></div>'; }
  function fNum(id, label, cur, step) { return '<div><label class="fieldl">' + label + '</label><input type="number" id="' + id + '" value="' + (cur != null ? cur : '') + '"' + (step ? ' step="' + step + '"' : '') + '></div>'; }
  function val(id) { var e = $('#' + id); return e ? e.value : null; }
  function numv(id, fallback) { var v = val(id); return v === '' || v == null ? fallback : +v; }
  function wireMulti(boxId, arr, cb) {
    $$('#' + boxId + ' .tag').forEach(function (tg) {
      tg.addEventListener('click', function () {
        var i = arr.indexOf(tg.dataset.id);
        if (i === -1) arr.push(tg.dataset.id); else arr.splice(i, 1);
        tg.classList.toggle('on', i === -1); cb();
      });
    });
  }
  function deriveAttributes() {
    var a = ID.attributes || {}, s = ID.attributeSources || {};
    var b5 = ID.b5;
    function put(attr, v, src) { a[attr] = Math.max(0, Math.min(100, Math.round(v))); s[attr] = src; }
    if (b5.structure_ambiguity != null) { put('structured', 100 - b5.structure_ambiguity, 'block_5'); put('ambiguity_tolerant', b5.structure_ambiguity, 'block_5'); }
    if (b5.independent_collab != null) { put('autonomous', 100 - b5.independent_collab, 'block_5'); put('people_facing', b5.independent_collab, 'block_5'); }
    if (b5.steady_intense != null) put('pace_intensity', b5.steady_intense, 'block_5');
    if (b5.build_advise != null) put('commercial', b5.build_advise, 'block_5');
    if (b5.focus_variety != null) put('detail_oriented', 100 - b5.focus_variety, 'block_5');
    var hit = function (list) { return ID.skills.filter(function (x) { return list.indexOf(x.id) !== -1; }).length; };
    if (ID.skills.length) {
      put('analytical', 35 + hit(['statistics', 'sql-excel', 'financial-modelling', 'problem-solving', 'accounting', 'programming']) * 14, 'block_3');
      put('creative', 30 + hit(['design-tools', 'content-creation', 'writing']) * 20, 'block_3');
      put('technical_depth', 25 + hit(['programming', 'design-tools']) * 28, 'block_3');
    }
    ID.attributes = a; ID.attributeSources = s;
  }

  /* ── CV / resume / portfolio analysis — deterministic, on this device ──
   * Transparent keyword matching against the same dictionaries the
   * questionnaire uses. No upload, no external service, no black box:
   * every extracted signal shows the exact phrase that produced it, and
   * nothing is saved until the user applies it. */
  var CV_DICT = {
    skills: {
      'programming': ['python', 'java', 'javascript', 'typescript', 'c++', 'golang', 'software develop', 'coding', 'programmer', 'backend', 'frontend', 'full stack', 'fullstack'],
      'sql-excel': ['sql', 'excel', 'spreadsheet', 'google sheets', 'pivot'],
      'statistics': ['statistic', 'regression', 'econometric', 'spss', 'hypothesis test', 'a/b test'],
      'writing': ['writing', 'copywrit', 'journalis', 'article', 'blog', 'menulis'],
      'communication': ['public speaking', 'presentation', 'presenter', 'moderator', 'debate', 'mc '],
      'negotiation': ['negotiat', 'negosiasi'],
      'design-tools': ['figma', 'photoshop', 'illustrator', 'ui design', 'ux design', 'canva', 'after effects'],
      'content-creation': ['content creat', 'tiktok', 'instagram', 'youtube', 'video edit', 'konten'],
      'financial-modelling': ['financial model', 'valuation', 'dcf', 'equity research', 'investment analysis'],
      'accounting': ['accounting', 'akuntansi', 'audit', 'bookkeep', 'tax '],
      'planning': ['project management', 'event organiz', 'perencanaan', 'timeline', 'gantt'],
      'coordination': ['led a team', 'led the team', 'team lead', 'chairman', 'ketua', 'koordinator', 'coordinated', 'head of'],
      'user-research': ['user research', 'user interview', 'survey', 'focus group', 'wawancara pengguna'],
      'problem-solving': ['problem solving', 'case competition', 'business case', 'olympiad', 'olimpiade', 'hackathon'],
      'data-storytelling': ['dashboard', 'tableau', 'power bi', 'looker', 'data visuali'],
      'empathy': ['volunteer', 'mentoring', 'counsel', 'relawan', 'community service', 'teaching']
    },
    inds: {
      'financial-services': ['bank', 'fintech', 'investment', 'insurance', 'asuransi', 'keuangan', 'capital market'],
      'tech-ecommerce': ['software', 'startup', 'e-commerce', 'ecommerce', 'tech company', 'teknologi', 'saas', 'marketplace'],
      'fmcg-consumer': ['fmcg', 'consumer goods', 'brand management', 'retail', 'barang konsumen'],
      'professional-services': ['consulting', 'consultant', 'audit firm', 'advisory', 'konsultan'],
      'energy-industrials': ['energy', 'mining', 'manufactur', 'oil and gas', 'tambang', 'energi', 'pabrik', 'logistics', 'supply chain'],
      'healthcare-pharma': ['health', 'hospital', 'pharma', 'medical', 'kesehatan', 'farmasi', 'rumah sakit'],
      'telecom': ['telecom', 'telekomunikasi', 'telco', 'network operator'],
      'media-gaming': ['media', 'game', 'gaming', 'entertainment', 'agency', 'advertising', 'hiburan'],
      'travel-hospitality': ['travel', 'hotel', 'airline', 'tourism', 'hospitality', 'pariwisata', 'maskapai'],
      'education': ['education', 'edtech', 'school', 'university program', 'pendidikan', 'tutoring', 'bimbel']
    },
    fns: {
      'engineering': ['software engineer', 'developer', 'programmer', 'devops', 'engineer'],
      'data': ['data analyst', 'data scien', 'analytics', 'business intelligence', 'analis data'],
      'product': ['product manager', 'product owner', 'manajer produk'],
      'design': ['designer', 'ui/ux', 'desainer'],
      'marketing': ['marketing', 'growth', 'brand', 'pemasaran', 'social media'],
      'finance': ['finance', 'financial analyst', 'accounting', 'keuangan', 'treasury'],
      'operations': ['operations', 'supply chain', 'logistics', 'operasional', 'warehouse', 'procurement'],
      'commercial': ['sales', 'business development', 'account manager', 'penjualan', 'partnership'],
      'people': ['human resources', 'hr ', 'recruitment', 'talent', 'sdm', 'people operations'],
      'risk': ['risk', 'compliance', 'internal audit', 'risiko', 'kepatuhan']
    }
  };
  function cvAnalyse(text) {
    var low = ' ' + text.toLowerCase() + ' ';
    function scan(dict) {
      var hits = [];
      Object.keys(dict).forEach(function (id) {
        for (var i = 0; i < dict[id].length; i++) {
          if (low.indexOf(dict[id][i]) !== -1) { hits.push({ id: id, term: dict[id][i].trim() }); return; }
        }
      });
      return hits;
    }
    var out = { skills: scan(CV_DICT.skills), inds: scan(CV_DICT.inds), fns: scan(CV_DICT.fns), degree: null, gpa: null };
    if (/master|magister|\bs2\b|mba|msc/i.test(text)) out.degree = 's2';
    else if (/bachelor|sarjana|\bs1\b|undergraduate|b\.sc|b\.a\b/i.test(text)) out.degree = 's1';
    else if (/diploma|\bd3\b|\bd4\b|vocational/i.test(text)) out.degree = 'd3_d4';
    var g = text.match(/(?:gpa|ipk)\s*[:\s]\s*([0-3][.,]\d{1,2}|4[.,]0{1,2})/i) || text.match(/([0-3][.,]\d{1,2}|4[.,]0{1,2})\s*\/\s*4/);
    if (g) out.gpa = parseFloat(g[1].replace(',', '.'));
    return out;
  }
  function cvApply(res) {
    res.skills.forEach(function (s) {
      if (!ID.skills.some(function (x) { return x.id === s.id; })) {
        var def = SKILLS.filter(function (x) { return x[0] === s.id; })[0];
        if (def) ID.skills.push({ id: s.id, label: L(def[1]), asked: false });
      }
    });
    res.inds.forEach(function (s) { if (ID.prefIndustries.indexOf(s.id) === -1) ID.prefIndustries.push(s.id); });
    res.fns.forEach(function (s) { if (ID.prefFunctions.indexOf(s.id) === -1) ID.prefFunctions.push(s.id); });
    if (res.degree && !ID.b1.degree) ID.b1.degree = res.degree;
    if (res.gpa != null && ID.b1.gpa == null) ID.b1.gpa = res.gpa;
    if (ID.skills.length) ID.b3.done = true;
    if (ID.prefIndustries.length) ID.b8.done = true;
    if (ID.prefFunctions.length) ID.b9.done = true;
    if (ID.b1.degree || ID.b1.gpa != null) ID.b1.done = true;
    saveId();
  }
  function cvPanel() {
    return '<details class="card" style="max-width:640px;margin-bottom:18px;padding:0" id="cvBox">' +
      '<summary style="list-style:none;cursor:pointer;padding:16px 18px;display:flex;gap:12px;align-items:center">' +
      '<span class="mono" style="width:38px;height:38px;font-size:15px">↑</span>' +
      '<span style="flex:1"><b style="font-size:14px">' + t('Or start from your CV, resume or portfolio', 'Atau mulai dari CV, resume, atau portofoliomu') + '</b>' +
      '<span class="note3" style="display:block;margin-top:2px">' + t('Analysed on this device with transparent keyword matching — nothing is uploaded anywhere.', 'Dianalisis di perangkat ini dengan pencocokan kata kunci yang transparan — tidak ada yang diunggah ke mana pun.') + '</span></span>' +
      '<span style="color:var(--r-explore);font-weight:800">▾</span></summary>' +
      '<div style="padding:0 18px 18px">' +
      '<div class="cvzone">' +
      '<p class="note3" style="margin-bottom:10px">' + t('Paste the text of your CV or portfolio, or choose a .txt / .md file. PDF? Open it and copy the text in.', 'Tempel teks CV atau portofoliomu, atau pilih berkas .txt / .md. PDF? Buka lalu salin teksnya ke sini.') + '</p>' +
      '<textarea id="cvText" placeholder="' + t('Paste your CV text here…', 'Tempel teks CV-mu di sini…') + '"></textarea>' +
      '<div style="display:flex;gap:10px;justify-content:center;margin-top:12px;flex-wrap:wrap">' +
      '<input type="file" id="cvFile" accept=".txt,.md,.text" style="display:none">' +
      '<button class="btn-s" id="cvPick">' + t('Choose a file', 'Pilih berkas') + '</button>' +
      '<button class="btn-p" id="cvGo" style="background:var(--r-explore)">' + t('Analyse on this device', 'Analisis di perangkat ini') + ' →</button></div></div>' +
      '<div id="cvOut" style="margin-top:14px"></div></div></details>';
  }
  function wireCvPanel(afterApply) {
    if (!$('#cvBox')) return;
    $('#cvPick').addEventListener('click', function () { $('#cvFile').click(); });
    $('#cvFile').addEventListener('change', function () {
      var f = this.files[0]; if (!f) return;
      var rd = new FileReader();
      rd.onload = function () { $('#cvText').value = String(rd.result).slice(0, 60000); };
      rd.readAsText(f);
    });
    $('#cvGo').addEventListener('click', function () {
      var txt = $('#cvText').value || '';
      var out = $('#cvOut');
      if (txt.trim().length < 80) {
        out.innerHTML = '<p class="note3">' + t('That’s too short to read anything meaningful from. Paste the full text.', 'Terlalu pendek untuk dibaca secara berarti. Tempel teks lengkapnya.') + '</p>';
        return;
      }
      var res = cvAnalyse(txt);
      var rows = res.skills.map(function (s) {
        var def = SKILLS.filter(function (x) { return x[0] === s.id; })[0];
        return '<div class="sig-row"><span class="k">' + t('Skill', 'Keahlian') + '</span><span>' + (def ? L(def[1]) : s.id) +
          ' <span class="note3">· ' + t('matched', 'cocok dengan') + ' “' + esc(s.term) + '”</span></span></div>';
      }).concat(res.inds.map(function (s) {
        var ind = G.industries.filter(function (x) { return x.id === s.id; })[0];
        return '<div class="sig-row"><span class="k">' + t('Industry', 'Industri') + '</span><span>' + (ind ? L(ind.name) : s.id) +
          ' <span class="note3">· “' + esc(s.term) + '”</span></span></div>';
      })).concat(res.fns.map(function (s) {
        var fn = G.functions.filter(function (x) { return x.id === s.id; })[0];
        return '<div class="sig-row"><span class="k">' + t('Function', 'Fungsi') + '</span><span>' + (fn ? L(fn.name) : s.id) +
          ' <span class="note3">· “' + esc(s.term) + '”</span></span></div>';
      }));
      if (res.degree) rows.push('<div class="sig-row"><span class="k">' + t('Education', 'Pendidikan') + '</span><span>' +
        ({ s1: t('Bachelor’s degree', 'Sarjana (S1)'), s2: t('Master’s degree', 'Magister (S2)'), d3_d4: t('Associate / vocational degree', 'Diploma (D3/D4)') })[res.degree] + '</span></div>');
      if (res.gpa != null) rows.push('<div class="sig-row"><span class="k">GPA</span><span>' + res.gpa + '</span></div>');
      out.innerHTML = rows.length ?
        '<p class="micro" style="margin-bottom:6px">' + t('What we read — and exactly why', 'Yang kami baca — dan alasan persisnya') + ' · ' + rows.length + '</p>' +
        rows.join('') +
        '<p class="note3" style="margin:10px 0">' + t('Keyword matching misses nuance by design — it’s honest, not clever. Fix anything wrong in the sections below after applying.', 'Pencocokan kata kunci memang melewatkan nuansa — jujur, bukan pintar. Perbaiki yang keliru di bagian bawah setelah diterapkan.') + '</p>' +
        '<button class="btn-p" id="cvApply" style="background:var(--r-explore)">' + t('Apply to my identity', 'Terapkan ke identitasku') + ' →</button>'
        : '<p class="note3">' + t('We couldn’t match anything we recognise. The questionnaire below will work better.', 'Tidak ada yang cocok dengan yang kami kenali. Kuesioner di bawah akan bekerja lebih baik.') + '</p>';
      if ($('#cvApply')) $('#cvApply').addEventListener('click', function () { cvApply(res); afterApply(); });
    });
  }

  var openSection = null;
  function renderIdentity() {
    var host = $('#v-identity');
    var pct = Math.round(F.completeness(ID) * 100);
    host.innerHTML =
      '<img class="vmap peak" src="../../assets/nav-mountain.png" alt="" aria-hidden="true">' +
      '<h1 class="h-page">' + t('Your identity', 'Identitasmu') + '</h1>' +
      '<p class="h-sub">' + t('Nothing is required. Each section states what it buys you. Two ways in: answer questions, or start from your CV.', 'Tidak ada yang wajib. Setiap bagian menyebutkan manfaatnya. Dua jalan masuk: jawab pertanyaan, atau mulai dari CV-mu.') + '</p>' +
      '<div style="display:flex;align-items:center;gap:14px;max-width:640px;margin-bottom:22px">' +
      '<div class="meter" style="flex:1"><i style="width:' + pct + '%"></i></div><span class="micro">' + pct + '%</span></div>' +
      cvPanel() +
      '<div style="max-width:640px" id="idSecs">' +
      SECTIONS.map(function (sec, i) {
        var done = ID[sec.key] && ID[sec.key].done;
        return '<div class="card" style="margin-bottom:10px;padding:0;overflow:hidden">' +
          '<button class="btn-q" data-sec="' + i + '" style="display:flex;width:100%;gap:12px;align-items:center;padding:15px 18px;font-size:14px">' +
          '<span style="color:' + (done ? 'var(--r-for)' : 'var(--r-text-3)') + ';font-weight:700">' + (done ? '✓' : '○') + '</span>' +
          '<span style="font-weight:600;color:var(--r-text)">' + L(sec.title) + '</span>' +
          '<span class="note3" style="margin-left:auto;text-align:right">' + (done ? '' : '→ ' + L(sec.payoff)) + '</span></button>' +
          '<div class="secbody" data-body="' + i + '" style="display:' + (openSection === i ? 'block' : 'none') + ';padding:4px 18px 18px"></div></div>';
      }).join('') + '</div>' +
      '<div style="margin-top:18px;display:flex;gap:12px;flex-wrap:wrap">' +
      '<button class="btn-p" id="idSee" style="background:var(--r-explore)">' + t('See what fits', 'Lihat yang cocok') + ' →</button>' +
      '<button class="btn-s" id="idProf">' + t('My career profile', 'Profil karierku') + ' →</button>' +
      '<button class="btn-q" id="idStmt" style="color:var(--r-explore)">' + t('My identity statement', 'Pernyataan identitasku') + '</button></div>' +
      '<div id="stmtWrap" style="max-width:640px;margin-top:22px"></div>';
    wireCvPanel(function () {
      var wasOpen = $('#cvBox') && $('#cvBox').open;
      renderIdentity(); applyLang();
      if (wasOpen && $('#cvBox')) $('#cvBox').open = false;
      window.scrollTo(0, 0);
    });
    $('#idProf').addEventListener('click', function () {
      if (openSection != null) SECTIONS[openSection].collect();
      deriveAttributes(); saveId(); go('profile');
    });
    $$('#idSecs [data-sec]').forEach(function (b) {
      b.addEventListener('click', function () {
        var i = +b.dataset.sec;
        if (openSection != null) SECTIONS[openSection].collect();
        deriveAttributes(); saveId();
        openSection = openSection === i ? null : i;
        renderIdentity(); applyLang();
        if (openSection != null) SECTIONS[openSection].render($('[data-body="' + openSection + '"]'));
      });
    });
    if (openSection != null) SECTIONS[openSection].render($('[data-body="' + openSection + '"]'));
    $('#idSee').addEventListener('click', function () {
      if (openSection != null) SECTIONS[openSection].collect();
      deriveAttributes(); saveId(); go('directions');
    });
    $('#idStmt').addEventListener('click', function () {
      if (openSection != null) SECTIONS[openSection].collect();
      deriveAttributes(); saveId(); renderStatement($('#stmtWrap'));
    });
  }

  /* ═══ S3 · IDENTITY STATEMENT ═══ */
  function tr(txt, block) {
    return '<span style="border-bottom:1px dashed var(--r-explore)" title="' +
      t('from · ', 'dari · ') + L(F.BLOCK_LABELS[block]) + '">' + txt + '</span>';
  }
  function renderStatement(host) {
    var b1 = ID.b1, en = [], idn = [];
    var stMap = { student: ['a student', 'seorang mahasiswa'], 'fresh-grad': ['a recent graduate', 'lulusan baru'], working: ['a professional considering a change', 'profesional yang mempertimbangkan perubahan'] };
    var st = stMap[b1.status] || ['someone finding a direction', 'seseorang yang mencari arah'];
    en.push("You're " + tr(st[0] + (b1.field ? ' in ' + esc(b1.field) : ''), 'block_1') + '.');
    idn.push('Kamu adalah ' + tr(st[1] + (b1.field ? ' di bidang ' + esc(b1.field) : ''), 'block_1') + '.');
    if (ID.b2.exp1) {
      en.push('In your own words: ' + tr('“' + esc(ID.b2.exp1.slice(0, 150)) + '”', 'block_2'));
      idn.push('Dengan katamu sendiri: ' + tr('“' + esc(ID.b2.exp1.slice(0, 150)) + '”', 'block_2'));
    }
    var asked = ID.skills.filter(function (x) { return x.asked; }).map(function (x) { return x.label; });
    if (asked.length) {
      en.push('People come to you for ' + tr(asked.slice(0, 3).join(', '), 'block_3') + ' — real demand, not just self-belief.');
      idn.push('Orang-orang datang padamu untuk ' + tr(asked.slice(0, 3).join(', '), 'block_3') + ' — permintaan nyata, bukan sekadar keyakinan diri.');
    }
    if (ID.b4.flow) {
      en.push('You lose track of time when ' + tr(esc(ID.b4.flow.slice(0, 110)), 'block_4') + '.');
      idn.push('Kamu lupa waktu saat ' + tr(esc(ID.b4.flow.slice(0, 110)), 'block_4') + '.');
    }
    if (ID.topValues.length) {
      en.push('What you want from work: ' + tr(ID.topValues.slice(0, 3).map(function (v) { return F.valueLabel(v, 'en'); }).join(', '), 'block_6') + '.');
      idn.push('Yang kamu inginkan dari pekerjaan: ' + tr(ID.topValues.slice(0, 3).map(function (v) { return F.valueLabel(v, 'id'); }).join(', '), 'block_6') + '.');
    }
    var html = (lang() === 'id' ? idn : en).join(' ');
    host.innerHTML = '<div class="card serif" style="font-size:16.5px;line-height:1.85">' +
      (html || '<span class="note3">' + t('Answer a section or two first.', 'Isi satu-dua bagian dulu.') + '</span>') + '</div>' +
      '<p class="note3" style="margin-top:8px">' + t('Hover any phrase to see which answer produced it. It’s yours — copy it, edit it, use it.', 'Arahkan kursor ke frasa mana pun untuk melihat jawaban asalnya. Ini milikmu — salin, sunting, gunakan.') + '</p>';
  }

  /* ═══ prep-cost estimate (honest, difficulty-derived) ═══ */
  function prepWeeks(d) {
    return { 'accessible': 8, 'competitive': 12, 'highly-competitive': 16 }[d.entry_difficulty] || 10;
  }

  /* ═══ S3b · CAREER IDENTITY PROFILE — the structured output ═══ */
  function renderProfile() {
    var host = $('#v-profile');
    var pct = Math.round(F.completeness(ID) * 100);
    if (pct === 0 && !(ID.quick && ID.quick.done)) {
      host.innerHTML = '<h1 class="h-page">' + t('Your career identity', 'Identitas kariermu') + '</h1>' +
        '<div class="empty" style="max-width:560px">' +
        t('There’s nothing to build a profile from yet. Answer a few questions or start from your CV.', 'Belum ada bahan untuk membangun profil. Jawab beberapa pertanyaan atau mulai dari CV-mu.') +
        '<br><br><button class="btn-p" style="background:var(--r-explore)" onclick="location.hash=\'#/quick\'">' + t('Three questions', 'Tiga pertanyaan') + ' →</button> ' +
        '<button class="btn-s" onclick="location.hash=\'#/identity\'">' + t('Identity', 'Identitas') + ' →</button></div>';
      return;
    }
    var res = F.analyseAll(ID, G, lang());
    var dirs = res.insufficient ? (ID.quick && ID.quick.done ? quickResults().shown : []) : res.shown;
    var topDirs = dirs.slice(0, 5);
    /* industries worth exploring: stated preferences first, then where the top directions live */
    var indIds = ID.prefIndustries.slice();
    topDirs.forEach(function (r) {
      (r.direction.industry_ids || []).forEach(function (i2) { if (indIds.indexOf(i2) === -1) indIds.push(i2); });
    });
    indIds = indIds.slice(0, 5);
    /* companies worth exploring: curated entries in those industries, then the wider DB */
    var pool = COS.filter(function (c) { return indIds.indexOf(c.industry_id) !== -1; });
    pool.sort(function (a, b) {
      var ca = a.source_type === 'directory' ? 1 : 0, cb = b.source_type === 'directory' ? 1 : 0;
      return ca - cb;
    });
    var cosPick = pool.slice(0, 6);
    /* roles worth exploring: opportunities in the top directions, documented first */
    var dirIds = topDirs.map(function (r) { return r.direction.id; });
    var oppPool = OPPS_ALL.filter(function (o) { return dirIds.indexOf(o.dir) !== -1; })
      .sort(function (a, b) { return (a.proc === 'documented' ? 0 : 1) - (b.proc === 'documented' ? 0 : 1); });
    var oppPick = [], seenDir = {};
    oppPool.forEach(function (o) { if (!seenDir[o.dir] && oppPick.length < 4) { seenDir[o.dir] = 1; oppPick.push(o); } });
    oppPool.forEach(function (o) { if (oppPick.length < 4 && oppPick.indexOf(o) === -1) oppPick.push(o); });
    if (!oppPick.length && ID.prefFunctions.length) {
      /* no computable directions yet — fall back to the functions the user named */
      var pickIds = cosPick.map(function (c) { return c.id; });
      oppPick = OPPS_ALL.filter(function (o) {
        return ID.prefFunctions.indexOf(o.fn) !== -1 && pickIds.indexOf(o.company) !== -1;
      }).slice(0, 4);
    }
    /* gaps: counter-evidence themes across the top directions */
    var gaps = [], seenG = {};
    topDirs.forEach(function (r) {
      r.counterEvidence.forEach(function (e) {
        if (!seenG[e.text]) { seenG[e.text] = 1; gaps.push(e); }
      });
    });
    gaps = gaps.slice(0, 3);
    var sliderRead = SLIDERS.filter(function (s) { return ID.b5[s[0]] != null; }).map(function (s) {
      var v = ID.b5[s[0]];
      var side = v <= 40 ? L(s[1]) : v >= 60 ? L(s[2]) : null;
      return side ? '<span class="chip-min">' + side + '</span>' : '';
    }).join('');
    function chipRow(list) { return '<div style="display:flex;gap:8px;flex-wrap:wrap">' + list.join('') + '</div>'; }
    host.innerHTML =
      '<img class="vmap peak" src="../../assets/nav-mountain.png" alt="" aria-hidden="true">' +
      '<h1 class="h-page">' + t('Your career identity', 'Identitas kariermu') + '</h1>' +
      '<p class="h-sub">' + t('Built only from what you gave us — every line traces back to an answer. It sharpens as you do.', 'Dibangun hanya dari yang kamu berikan — setiap baris merujuk ke sebuah jawaban. Ia menajam seiring dirimu.') + '</p>' +
      '<div style="max-width:680px">' +
      '<div class="prof-sec"><p class="ph">' + t('Who you are', 'Siapa dirimu') + '</p><div id="profStmt"></div></div>' +
      (ID.skills.length ? '<div class="prof-sec card"><p class="ph">' + t('What you’re good at', 'Apa yang kamu kuasai') + '</p>' +
        chipRow(ID.skills.map(function (s) { return '<span class="chip-min' + (s.asked ? ' gold' : '') + '">' + s.label + (s.asked ? ' ★' : '') + '</span>'; })) +
        (ID.skills.some(function (s) { return s.asked; }) ? '<p class="note3" style="margin-top:8px">★ ' + t('people actually ask you for this — stronger evidence than self-rating', 'orang benar-benar memintanya darimu — bukti lebih kuat daripada penilaian diri') + '</p>' : '') + '</div>' : '') +
      ((ID.interests.length || ID.b4.hobbies) ? '<div class="prof-sec card"><p class="ph">' + t('What you may enjoy', 'Apa yang mungkin kamu nikmati') + '</p>' +
        chipRow(ID.interests.map(function (i2) {
          var def = INTERESTS.filter(function (x) { return x[0] === i2; })[0];
          return '<span class="chip-min">' + (def ? L(def[1]) : i2) + '</span>';
        })) +
        (ID.b4.hobbies ? '<p class="note3" style="margin-top:8px">' + t('Outside work: ', 'Di luar kerja: ') + esc(ID.b4.hobbies) + '</p>' : '') + '</div>' : '') +
      (sliderRead ? '<div class="prof-sec card"><p class="ph">' + t('How you like to work', 'Cara kerja yang kamu sukai') + '</p>' + chipRow([sliderRead]) + '</div>' : '') +
      (ID.topValues.length ? '<div class="prof-sec card"><p class="ph">' + t('What motivates you', 'Apa yang memotivasimu') + '</p>' +
        chipRow(ID.topValues.map(function (v) { return '<span class="chip-min gold">' + F.valueLabel(v, lang()) + '</span>'; })) + '</div>' : '') +
      (topDirs.length ? '<div class="prof-sec"><p class="ph">' + t('Where you may fit — directions worth investigating', 'Di mana kamu mungkin cocok — arah yang layak diselidiki') + '</p>' +
        topDirs.map(function (r) {
          var d = r.direction;
          return '<div class="card pcard" style="margin-bottom:8px"><span class="mono">' + monogram(L(d.name)) + '</span>' +
            '<span class="meta"><b>' + L(d.name) + '</b>' +
            (r.evidence.length ? '<span class="sub">' + t('Why it may fit: ', 'Mengapa mungkin cocok: ') + r.evidence.slice(0, 2).map(function (e) { return e.text.replace(/\.$/, '').toLowerCase(); }).join('; ') + '</span>' : '') +
            '</span><span style="display:flex;flex-direction:column;gap:8px;align-items:flex-end">' + bandChip(r) +
            '<button class="btn-q go" data-look="' + d.id + '">' + t('Look', 'Lihat') + ' →</button></span></div>';
        }).join('') + '</div>' : '') +
      (indIds.length ? '<div class="prof-sec card"><p class="ph">' + t('Industries worth exploring', 'Industri yang layak dijelajahi') + '</p>' +
        chipRow(indIds.map(function (i2) {
          var ind = G.industries.filter(function (x) { return x.id === i2; })[0];
          return '<button class="chip-min tag" data-xind="' + i2 + '" style="cursor:pointer">' + (IND_ICONS[i2] || '') + ' ' + (ind ? L(ind.name) : i2) + ' →</button>';
        })) + '</div>' : '') +
      (cosPick.length ? '<div class="prof-sec"><p class="ph">' + t('Companies worth exploring', 'Perusahaan yang layak dijelajahi') + '</p>' +
        '<div class="grid2">' + cosPick.map(function (c) {
          return '<button class="card pcard" data-open-co="' + c.id + '">' + logoTile(c) +
            '<span class="meta"><b>' + c.name + '</b><span class="sub">' + countryName(c) + '</span></span>' +
            '<span class="go">→</span></button>';
        }).join('') + '</div>' +
        '<p class="note3" style="margin-top:8px">' + t('Chosen because they hire in the industries above — a starting set, not a shortlist.', 'Dipilih karena mereka merekrut di industri di atas — titik awal, bukan daftar final.') + '</p></div>' : '') +
      (oppPick.length ? '<div class="prof-sec"><p class="ph">' + t('Roles worth exploring', 'Peran yang layak dijelajahi') + '</p>' +
        '<div class="grid2">' + oppPick.map(function (o) {
          var co = CO(o.company);
          return '<button class="card pcard" data-open-opp="' + o.id + '">' + logoTile(co) +
            '<span class="meta"><b>' + co.name + '</b><span class="sub">' + L(o.role) + '</span></span><span class="go">→</span></button>';
        }).join('') + '</div></div>' : '') +
      (gaps.length ? '<div class="prof-sec card"><p class="ph">' + t('Gaps worth addressing', 'Kesenjangan yang layak digarap') + '</p>' +
        gaps.map(function (e) { return '<div class="ev-row against"><span class="m">⚠</span><span>' + e.text + '<span class="src">' + t('from · ', 'dari · ') + L(F.BLOCK_LABELS[e.src]) + '</span></span></div>'; }).join('') +
        '<p class="note3" style="margin-top:8px">' + t('The Pack and The Rope exist for exactly these.', 'The Pack dan The Rope ada persis untuk hal-hal ini.') + '</p></div>' : '') +
      '<div style="display:flex;gap:12px;margin-top:20px;flex-wrap:wrap">' +
      '<button class="btn-p" style="background:var(--r-explore)" onclick="location.hash=\'#/range\'">' + t('Continue to Your Range', 'Lanjut ke Bentangmu') + ' →</button>' +
      '<button class="btn-s" onclick="location.hash=\'#/identity\'">' + t('Refine my identity', 'Pertajam identitasku') + '</button></div>' +
      '</div>' + disclaimer();
    renderStatement($('#profStmt'));
    $$('[data-look]', host).forEach(function (b) {
      b.addEventListener('click', function () { go('ddetail', b.dataset.look); });
    });
    $$('[data-xind]', host).forEach(function (b) {
      b.addEventListener('click', function () { XF.ind = b.dataset.xind; XF.limit = 24; go('explore'); });
    });
    wireOppButtons(host);
  }

  /* ═══ S4 · DIRECTIONS — compact cards, depth on demand ═══ */
  function renderDirections() {
    var host = $('#v-directions');
    var res = F.analyseAll(ID, G, lang());
    var head = '<h1 class="h-page">' + t('Worth a look', 'Layak dilihat') + '</h1>' +
      '<p class="h-sub">' + t('Based on what you’ve told us. These will sharpen as you tell us more.', 'Berdasarkan apa yang kamu ceritakan. Ini akan semakin tajam saat kamu bercerita lebih banyak.') +
      ' <button class="btn-q" style="color:var(--r-explore);display:inline" onclick="location.hash=\'#/identity\'">' + t('Add detail', 'Tambah detail') + ' →</button></p>';
    if (res.insufficient) {
      /* quick-signal fallback: still show something if the archetype gave attributes */
      if (ID.quick && ID.quick.done) {
        res = quickResults();
      } else {
        host.innerHTML = head + '<div class="empty" style="max-width:560px">' +
          '<b>' + t('We don’t know enough about you yet to say anything useful here.', 'Kami belum cukup mengenalmu untuk mengatakan sesuatu yang berguna di sini.') + '</b><br>' +
          t('Four more minutes would change that — but you can look at what we have anyway.', 'Empat menit lagi akan mengubahnya — tapi kamu tetap bisa melihat yang kami punya.') +
          '<br><br><button class="btn-p" style="background:var(--r-explore)" onclick="location.hash=\'#/quick\'">' + t('Three questions', 'Tiga pertanyaan') + ' →</button> ' +
          '<button class="btn-s" onclick="location.hash=\'#/explore\'">' + t('Browse anyway', 'Jelajahi saja') + '</button></div>';
        return;
      }
    }
    var cards = res.shown.map(function (r) { return dirCard(r, false); });
    if (res.unexpected) cards.push(dirCard(res.unexpected, true));
    host.innerHTML = head + '<div style="max-width:680px">' + cards.join('') + '</div>' + disclaimer();
    wireDirCards(host);
  }
  /* wider, exploratory set for "I genuinely don't know" or thin quick-signal input */
  function quickResults() {
    var wide = ID.quick.wide;
    var list = G.directions.filter(function (d) { return (ID.dismissed || []).indexOf(d.id) === -1; })
      .map(function (d) { return F.analyseDirection(ID, d, lang()); });
    if (!wide) {
      list = list.filter(function (r) { return r.evidence.length >= 1; })
        .sort(function (a, b) { return b.evidence.length - a.evidence.length || b.alignment - a.alignment; });
    } else {
      /* deliberately diverse: one per function family, accessible first */
      var seen = {};
      list = list.filter(function (r) {
        var f = r.direction.function_ids[0];
        if (seen[f]) return false; seen[f] = 1; return true;
      }).sort(function (a, b) {
        var da = a.direction.entry_difficulty === 'accessible' ? 0 : 1;
        var db = b.direction.entry_difficulty === 'accessible' ? 0 : 1;
        return da - db;
      });
    }
    return { shown: list.slice(0, wide ? 6 : 3), unexpected: null, insufficient: false };
  }
  function bandChip(r) {
    if (!r.band) return '<span class="band worth"><span class="dot"></span>' + t('Early signal', 'Sinyal awal') + '</span>';
    var cls = { strong: 'strong', worth: 'worth', stretch: 'stretch' }[r.band.id];
    return '<span class="band ' + cls + '"><span class="dot"></span>' + (lang() === 'id' ? r.band.id_ : r.band.en) + '</span>';
  }
  function dirCard(r, unexpected) {
    var d = r.direction;
    var vconf = r.counterEvidence.filter(function (e) { return e.kind === 'values'; }).length;
    var inR = findPoss('direction', d.id);
    return '<div class="card" style="margin-bottom:12px" id="dc-' + d.id + '">' +
      '<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">' +
      (unexpected ? '<span class="band unex">✦ ' + t('Unexpected', 'Tak terduga') + '</span>' : '') +
      '<h3 style="font-size:16px;flex:1;min-width:160px">' + L(d.name) + '</h3>' + bandChip(r) + '</div>' +
      '<p class="serif" style="font-size:14.5px;color:var(--r-text-2);margin:8px 0 10px">' + L(d.summary) + '</p>' +
      (r.evidence.length ? '<div style="border-left:2px solid var(--r-line2);padding:2px 0 2px 12px;margin:0 0 10px">' +
        '<p style="font-size:12.5px;color:var(--r-text-2);line-height:1.6"><b style="color:var(--r-explore)">' +
        t('Worth a look because', 'Layak dilihat karena') + ':</b> ' +
        r.evidence.slice(0, 2).map(function (e) { return e.text.replace(/\.$/, ''); }).join('; ').toLowerCase().replace(/^./, function (ch) { return ch.toUpperCase(); }) + '.</p></div>' : '') +
      '<p style="font-size:12.5px;color:var(--r-text-2)">' +
      t(r.evidence.length + ' things point here · ' + r.counterEvidence.length + ' point away',
        r.evidence.length + ' hal menunjuk ke sini · ' + r.counterEvidence.length + ' menjauh') +
      (vconf ? ' <span style="color:var(--r-against)">⚠ ' + t('one conflicts with a value you ranked top five', 'satu bertentangan dengan nilai lima teratasmu') + '</span>' : '') + '</p>' +
      '<p class="note3" style="margin-top:4px">~' + prepWeeks(d) + ' ' + t('weeks preparation', 'minggu persiapan') + ' · ' +
      ({ 'accessible': t('Accessible', 'Terbuka'), 'competitive': t('Competitive', 'Kompetitif'), 'highly-competitive': t('Highly competitive', 'Sangat kompetitif') }[d.entry_difficulty]) + '</p>' +
      '<div class="whybox" data-why="' + d.id + '" style="display:none;border-top:1px solid var(--r-line);margin-top:12px;padding-top:6px">' +
      '<p class="micro" style="color:var(--r-for);margin:8px 0 2px">' + t('What points towards this', 'Yang menunjuk ke sini') + '</p>' +
      r.evidence.map(function (e) { return '<div class="ev-row for"><span class="m">✓</span><span>' + e.text + '<span class="src">' + t('from · ', 'dari · ') + L(F.BLOCK_LABELS[e.src]) + '</span></span></div>'; }).join('') +
      '<p class="micro" style="color:var(--r-against);margin:10px 0 2px">' + t('What points away', 'Yang menunjuk menjauh') + '</p>' +
      (r.counterEvidence.length ? r.counterEvidence.map(function (e) { return '<div class="ev-row against"><span class="m">⚠</span><span>' + e.text + '<span class="src">' + t('from · ', 'dari · ') + L(F.BLOCK_LABELS[e.src]) + '</span></span></div>'; }).join('')
        : '<p class="note3">' + t('Nothing yet — tell us more and this will fill in. An empty column here means thin input, not a perfect fit.', 'Belum ada — ceritakan lebih banyak dan kolom ini terisi. Kolom kosong berarti input tipis, bukan kecocokan sempurna.') + '</p>') +
      '</div>' +
      '<div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap">' +
      '<button class="btn-q" data-why-t="' + d.id + '" style="color:var(--r-explore)">' + t('Why this appeared', 'Mengapa ini muncul') + ' ▾</button>' +
      '<button class="btn-s explore" data-addr="' + d.id + '">' + (inR && inR.status !== 'ruled_out' ? '✓ ' + t('In your range', 'Di bentangmu') : t('Add to my range', 'Tambah ke bentangku') + ' +') + '</button>' +
      '<button class="btn-q" data-look="' + d.id + '">' + t('Look closer', 'Lihat lebih dekat') + ' →</button>' +
      '<button class="btn-q" data-no="' + d.id + '">' + t('Not for me', 'Bukan untukku') + '</button></div></div>';
  }
  function wireDirCards(host) {
    $$('[data-why-t]', host).forEach(function (b) {
      b.addEventListener('click', function () {
        var w = $('[data-why="' + b.dataset.whyT + '"]');
        w.style.display = w.style.display === 'none' ? 'block' : 'none';
      });
    });
    $$('[data-addr]', host).forEach(function (b) {
      b.addEventListener('click', function () { setPoss('direction', b.dataset.addr, 'watching'); route(); });
    });
    $$('[data-look]', host).forEach(function (b) {
      b.addEventListener('click', function () { go('ddetail', b.dataset.look); });
    });
    $$('[data-no]', host).forEach(function (b) {
      b.addEventListener('click', function () {
        ID.dismissed.push(b.dataset.no); saveId();
        /* ruled-out stays visible in Your Range — dismissal is data, not deletion */
        setPoss('direction', b.dataset.no, 'ruled_out');
        route();
      });
    });
  }

  /* ═══ S5 · DIRECTION DETAIL ═══ */
  function renderDDetail(args) {
    var d = G.directions.filter(function (x) { return x.id === args[0]; })[0];
    var host = $('#v-ddetail');
    if (!d) { host.innerHTML = ''; return; }
    var r = F.analyseDirection(ID, d, lang());
    var opps = OPPS_ALL.filter(function (o) { return o.dir === d.id; });
    var companies = COS.filter(function (c) { return d.industry_ids.indexOf(c.industry_id) !== -1; });
    host.innerHTML =
      '<button class="btn-q" onclick="history.back()">← ' + t('Back', 'Kembali') + '</button>' +
      '<div style="max-width:680px">' +
      '<h1 class="h-page" style="margin-top:10px">' + L(d.name) + '</h1>' +
      '<p class="serif" style="font-size:16px;color:var(--r-text-2);margin-bottom:20px">' + L(d.summary) + '</p>' +
      '<div class="card" style="margin-bottom:12px"><p class="micro" style="margin-bottom:6px">' + t('A real day', 'Sehari yang nyata') + '</p>' +
      '<p class="serif" style="font-size:14.5px;color:var(--r-text-2)">' + L(d.day_in_life) + '</p></div>' +
      '<div class="card" style="margin-bottom:12px"><p class="micro" style="margin-bottom:6px">' + t('Trade-offs, stated plainly', 'Kompromi, apa adanya') + '</p>' +
      d.tradeoffs.map(function (x) { return '<div class="ev-row against"><span class="m">⚠</span><span>' + L(x) + '</span></div>'; }).join('') +
      '<p class="micro" style="margin:10px 0 4px">' + t('Common myths, corrected', 'Mitos umum, diluruskan') + '</p>' +
      d.common_myths.map(function (x) { return '<div class="ev-row"><span class="m" style="color:var(--r-explore)">✕</span><span>' + L(x) + '</span></div>'; }).join('') + '</div>' +
      '<div class="card" style="margin-bottom:12px"><p class="micro" style="margin-bottom:6px">' + t('Evidence, both ways', 'Bukti, dua arah') + '</p>' +
      r.evidence.map(function (e) { return '<div class="ev-row for"><span class="m">✓</span><span>' + e.text + '<span class="src">' + t('from · ', 'dari · ') + L(F.BLOCK_LABELS[e.src]) + '</span></span></div>'; }).join('') +
      r.counterEvidence.map(function (e) { return '<div class="ev-row against"><span class="m">⚠</span><span>' + e.text + '<span class="src">' + t('from · ', 'dari · ') + L(F.BLOCK_LABELS[e.src]) + '</span></span></div>'; }).join('') + '</div>' +
      '<p class="sec-h" style="margin-top:26px">' + t('Who hires for this', 'Siapa yang merekrut untuk ini') + '</p>' +
      '<div class="grid2">' +
      (opps.length ? opps.map(oppCardSmall).join('') :
        companies.slice(0, 4).map(function (c) {
          return '<button class="card" style="text-align:left" data-open-co="' + c.id + '"><b style="font-size:14px">' + c.name + '</b></button>';
        }).join('')) + '</div>' +
      '<div style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap">' +
      '<button class="btn-s explore" data-addr="' + d.id + '">' + t('Add to my range', 'Tambah ke bentangku') + ' +</button>' +
      '<button class="btn-q" data-no="' + d.id + '">' + t('Not for me', 'Bukan untukku') + '</button></div></div>';
    wireDirCards(host); wireOppButtons(host);
  }

  /* ═══ S6 · EXPLORE — scoped, company-first, ungated, paginated ═══ */
  var XF = { geo: 'id', ind: '', fn: '', q: '', limit: 24 };
  function coRoles(c) {
    return OPPS_ALL.filter(function (o) { return o.company === c.id; });
  }
  function renderExplore() {
    var host = $('#v-explore');
    var hasId = ID.b1 && (ID.b1.age != null || ID.b1.gpa != null);
    var q = (XF.q || '').toLowerCase();
    var cos = COS.filter(function (c) {
      if (XF.geo && c.geo !== XF.geo) return false;
      if (XF.ind && c.industry_id !== XF.ind) return false;
      if (XF.fn && c.fns.indexOf(XF.fn) === -1) return false;
      if (q && c.name.toLowerCase().indexOf(q) === -1) return false;
      return true;
    });
    var totalRoles = cos.reduce(function (a, c) { return a + c.fns.length; }, 0);
    var page = cos.slice(0, XF.limit);
    host.innerHTML =
      '<img class="vmap" src="../../assets/' + (XF.geo === 'intl' ? 'global-map.png' : 'indonesia-map.png') + '" alt="" aria-hidden="true">' +
      '<h1 class="h-page">' + t('Explore', 'Jelajah') + '</h1>' +
      '<p class="h-sub">' + t('Browse freely. No identity or account needed.', 'Jelajahi dengan bebas. Tanpa identitas atau akun.') + '</p>' +
      '<div class="scope" id="xScope" style="margin-bottom:16px">' +
      '<button data-g="id" class="' + (XF.geo === 'id' ? 'on' : '') + '">' + t('Indonesia only', 'Hanya Indonesia') + '</button>' +
      '<button data-g="intl" class="' + (XF.geo === 'intl' ? 'on' : '') + '">' + t('International', 'Internasional') + '</button></div>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px">' +
      '<select id="xInd" style="width:auto"><option value="">' + t('All industries', 'Semua industri') + '</option>' +
      G.industries.map(function (i2) { return '<option value="' + i2.id + '"' + (XF.ind === i2.id ? ' selected' : '') + '>' + L(i2.name) + '</option>'; }).join('') + '</select>' +
      '<select id="xFn" style="width:auto"><option value="">' + t('All functions', 'Semua fungsi') + '</option>' +
      Object.keys(O.FN_ROLES).map(function (fn) { return '<option value="' + fn + '"' + (XF.fn === fn ? ' selected' : '') + '>' + L(O.FN_ROLES[fn].role) + '</option>'; }).join('') + '</select>' +
      '<input type="text" id="xQ" value="' + esc(XF.q) + '" placeholder="' + t('Filter by name…', 'Saring nama…') + '" style="width:180px">' +
      '</div>' +
      '<p class="note3" style="margin-bottom:14px">' + cos.length + ' ' + t('companies', 'perusahaan') + ' · ' +
      totalRoles + ' ' + t('explorable roles', 'peran yang bisa dijelajahi') +
      (hasId ? '' : ' · ' + t('add your identity for eligibility signals', 'tambahkan identitasmu untuk sinyal kelayakan')) + '</p>' +
      '<div class="grid2">' + page.map(coCard).join('') + '</div>' +
      (cos.length > XF.limit ?
        '<div style="text-align:center;margin-top:22px"><button class="btn-s" id="xMore">' +
        t('Show more', 'Tampilkan lebih banyak') + ' · ' + (cos.length - XF.limit) + ' ' + t('remaining', 'tersisa') + '</button></div>' : '');
    $$('#xScope button').forEach(function (b) {
      b.addEventListener('click', function () { XF.geo = b.dataset.g; XF.limit = 24; renderExplore(); applyLang(); });
    });
    $('#xInd').addEventListener('change', function () { XF.ind = this.value; XF.limit = 24; renderExplore(); applyLang(); });
    $('#xFn').addEventListener('change', function () { XF.fn = this.value; XF.limit = 24; renderExplore(); applyLang(); });
    $('#xQ').addEventListener('input', function () {
      XF.q = this.value; XF.limit = 24;
      var keep = this.value;
      renderExplore(); applyLang();
      var el = $('#xQ'); el.focus(); el.setSelectionRange(keep.length, keep.length);
    });
    if ($('#xMore')) $('#xMore').addEventListener('click', function () { XF.limit += 48; renderExplore(); applyLang(); });
    wireOppButtons(host);
    window.MT_LOGO.wire(host);   /* filter/pagination re-renders bypass route() */
  }
  function coCard(c) {
    var documented = c.proc === 'documented' || coRoles(c).some(function (o) { return o.proc === 'documented'; });
    var ind = G.industries.filter(function (i2) { return i2.id === c.industry_id; })[0];
    return '<button class="card co-card" data-open-co="' + c.id + '">' +
      '<div style="display:flex;gap:12px;align-items:center">' +
      logoTile(c) +
      '<span style="min-width:0"><b style="font-size:14.5px;display:block">' + c.name + '</b>' +
      '<span class="note3">' + L(ind.name) + ' · ' + countryName(c) + '</span></span></div>' +
      '<span style="font-size:12.5px;color:var(--r-text-2);line-height:1.55">' + L(c.desc).slice(0, 110) + (L(c.desc).length > 110 ? '…' : '') + '</span>' +
      '<span class="chips">' + c.fns.slice(0, 4).map(function (fn) {
        return '<span class="chip-min">' + L(O.FN_ROLES[fn].role).split(' ')[0].replace(/&.*$/, '') + '</span>';
      }).join('') + (c.fns.length > 4 ? '<span class="chip-min">+' + (c.fns.length - 4) + '</span>' : '') + '</span>' +
      '<span style="display:flex;gap:10px;align-items:center;margin-top:2px">' +
      (documented ? '<span class="prov v">✓ ' + t('documented process', 'proses terdokumentasi') + '</span>'
        : '<span class="prov i">~ ' + t('typical process', 'proses umum') + '</span>') +
      '<span class="note3">' + c.fns.length + ' ' + t('roles', 'peran') + '</span>' +
      '<span style="margin-left:auto;color:var(--r-explore);font-size:12.5px;font-weight:800">' + t('Explore', 'Jelajahi') + ' →</span></span>' +
      '</button>';
  }
  function oppCardSmall(o) {
    var co = CO(o.company);
    var documented = o.proc === 'documented';
    var prog = o.prog ? G.programmes.filter(function (p2) { return p2.id === o.prog; })[0] : null;
    return '<button class="card" style="text-align:left" data-open-opp="' + o.id + '">' +
      '<b style="font-size:14px;display:block">' + co.name + '</b>' +
      '<span style="font-size:12.5px;color:var(--r-text-2)">' + L(o.role) + '</span>' +
      '<span style="display:flex;gap:10px;margin-top:8px;flex-wrap:wrap">' +
      (documented ? '<span class="prov v">✓ ' + t('documented process', 'proses terdokumentasi') + '</span>'
        : '<span class="prov i">~ ' + t('typical process shown', 'proses umum ditampilkan') + '</span>') +
      (prog && prog.window ? '<span class="prov">' + L(prog.window).slice(0, 34) + '</span>' : '') +
      '</span></button>';
  }
  function wireOppButtons(host) {
    $$('[data-open-opp]', host).forEach(function (b) {
      b.addEventListener('click', function () { go('opp', b.dataset.openOpp); });
    });
    $$('[data-open-co]', host).forEach(function (b) {
      b.addEventListener('click', function () { go('company', b.dataset.openCo); });
    });
  }

  /* ═══ S7 · COMPANY — Company → Function → Role ═══ */
  /* Editorial role profiles per function — how this KIND of role typically
   * works at entry level, generally. Explicitly not company-specific. */
  var FN_META = {
    engineering: { resp: [L('Build, test and ship features in a production codebase', 'Membangun, menguji, dan merilis fitur di codebase produksi'), L('Review code and debug issues with the team', 'Meninjau kode dan men-debug masalah bersama tim'), L('Own small services or components end-to-end over time', 'Lama-kelamaan memegang layanan atau komponen kecil ujung-ke-ujung')],
      skills: [L('Programming', 'Pemrograman'), L('Data structures & debugging', 'Struktur data & debugging'), L('Version control & collaboration', 'Version control & kolaborasi'), L('Clear written communication', 'Komunikasi tertulis yang jelas')],
      profile: L('People who like making things work, tolerate being stuck, and enjoy learning tools quickly.', 'Orang yang suka membuat sesuatu berfungsi, tahan saat buntu, dan senang cepat mempelajari alat baru.') },
    data: { resp: [L('Pull, clean and join data to answer business questions', 'Menarik, membersihkan, dan menggabungkan data untuk menjawab pertanyaan bisnis'), L('Build dashboards and recurring reports people rely on', 'Membangun dasbor dan laporan rutin yang diandalkan orang'), L('Present findings so decisions actually change', 'Menyajikan temuan sehingga keputusan benar-benar berubah')],
      skills: [L('SQL & spreadsheets', 'SQL & spreadsheet'), L('Statistics fundamentals', 'Dasar statistika'), L('Data storytelling', 'Bercerita dengan data'), L('Business sense', 'Kepekaan bisnis')],
      profile: L('People who enjoy puzzles with messy inputs and like being the one who actually checked.', 'Orang yang menikmati teka-teki berbahan mentah berantakan dan suka menjadi pihak yang benar-benar memeriksa.') },
    product: { resp: [L('Turn user problems into a prioritised backlog', 'Mengubah masalah pengguna menjadi backlog terprioritas'), L('Coordinate engineering, design and business around one plan', 'Mengoordinasikan engineering, desain, dan bisnis pada satu rencana'), L('Measure what shipped and decide what happens next', 'Mengukur yang sudah rilis dan memutuskan langkah berikutnya')],
      skills: [L('Structured communication', 'Komunikasi terstruktur'), L('Prioritisation under constraint', 'Prioritisasi dalam keterbatasan'), L('Basic analytics', 'Analitik dasar'), L('User empathy', 'Empati pengguna')],
      profile: L('Generalists who like owning outcomes without owning the code, and can hold ambiguity.', 'Generalis yang suka memegang hasil tanpa memegang kode, dan tahan terhadap ambiguitas.') },
    design: { resp: [L('Translate requirements into flows, wireframes and interfaces', 'Menerjemahkan kebutuhan menjadi alur, wireframe, dan antarmuka'), L('Test designs with real users and iterate', 'Menguji desain ke pengguna nyata dan mengulanginya'), L('Maintain consistency through a design system', 'Menjaga konsistensi lewat design system')],
      skills: [L('Design tools', 'Perangkat desain'), L('Interaction & visual craft', 'Keahlian interaksi & visual'), L('User research basics', 'Dasar riset pengguna'), L('Giving and taking critique', 'Memberi dan menerima kritik')],
      profile: L('People who notice what others miss and can defend choices with reasons, not taste alone.', 'Orang yang melihat hal yang terlewat oleh orang lain dan bisa mempertahankan pilihan dengan alasan, bukan selera semata.') },
    marketing: { resp: [L('Plan and run campaigns across channels', 'Merencanakan dan menjalankan kampanye lintas kanal'), L('Analyse performance and reallocate budget to what works', 'Menganalisis performa dan memindahkan anggaran ke yang berhasil'), L('Build messaging that fits the brand and the audience', 'Membangun pesan yang cocok dengan merek dan audiens')],
      skills: [L('Copy & content sense', 'Kepekaan naskah & konten'), L('Channel analytics', 'Analitik kanal'), L('Experimentation habit', 'Kebiasaan bereksperimen'), L('Stakeholder management', 'Manajemen pemangku kepentingan')],
      profile: L('People who like the mix of creative work and numbers, and can live with public results.', 'Orang yang suka campuran kerja kreatif dan angka, serta siap hasilnya terlihat publik.') },
    finance: { resp: [L('Build and maintain budgets, forecasts and models', 'Menyusun dan memelihara anggaran, proyeksi, dan model'), L('Close the books and explain variances', 'Menutup pembukuan dan menjelaskan selisih'), L('Support decisions with numbers leadership can trust', 'Mendukung keputusan dengan angka yang dipercaya pimpinan')],
      skills: [L('Excel / financial modelling', 'Excel / pemodelan keuangan'), L('Accounting fundamentals', 'Dasar akuntansi'), L('Attention to detail', 'Ketelitian'), L('Concise reporting', 'Pelaporan ringkas')],
      profile: L('People who want precision to matter and like being close to how the business actually runs.', 'Orang yang ingin presisi berarti dan suka dekat dengan cara bisnis benar-benar berjalan.') },
    operations: { resp: [L('Keep a process running: plan, monitor, unblock', 'Menjaga proses tetap berjalan: merencanakan, memantau, membuka hambatan'), L('Find and fix the bottleneck of the week', 'Menemukan dan membereskan hambatan minggu ini'), L('Coordinate vendors, warehouses or field teams', 'Mengoordinasikan vendor, gudang, atau tim lapangan')],
      skills: [L('Planning & prioritising', 'Perencanaan & prioritisasi'), L('Spreadsheet fluency', 'Kefasihan spreadsheet'), L('Calm under pressure', 'Tenang di bawah tekanan'), L('Cross-team communication', 'Komunikasi lintas tim')],
      profile: L('People who like visible, physical results and don’t need the spotlight to feel progress.', 'Orang yang suka hasil nyata terlihat dan tidak butuh sorotan untuk merasa maju.') },
    commercial: { resp: [L('Own a portfolio of accounts or a territory', 'Memegang portofolio akun atau satu wilayah'), L('Prospect, pitch, negotiate and close', 'Mencari prospek, presentasi, negosiasi, dan closing'), L('Grow existing relationships quarter over quarter', 'Menumbuhkan relasi yang ada dari kuartal ke kuartal')],
      skills: [L('Listening & persuasion', 'Mendengar & persuasi'), L('Resilience to rejection', 'Tahan terhadap penolakan'), L('Pipeline discipline', 'Disiplin pipeline'), L('Commercial arithmetic', 'Hitung-hitungan komersial')],
      profile: L('People energised by people, comfortable with targets, and honest enough to keep clients.', 'Orang yang berenergi karena orang lain, nyaman dengan target, dan cukup jujur untuk mempertahankan klien.') },
    people: { resp: [L('Run recruiting, onboarding or development programmes', 'Menjalankan program rekrutmen, onboarding, atau pengembangan'), L('Advise managers on people decisions', 'Menasihati manajer dalam keputusan tentang orang'), L('Hold difficult conversations well', 'Menjalani percakapan sulit dengan baik')],
      skills: [L('Judgement about people', 'Penilaian tentang orang'), L('Confidentiality & fairness', 'Kerahasiaan & keadilan'), L('Process design', 'Perancangan proses'), L('Clear communication', 'Komunikasi jelas')],
      profile: L('People who care how organisations treat humans and can be firm as well as warm.', 'Orang yang peduli cara organisasi memperlakukan manusia dan bisa tegas sekaligus hangat.') },
    risk: { resp: [L('Test controls and investigate exceptions', 'Menguji kontrol dan menyelidiki pengecualian'), L('Document findings that stand up to scrutiny', 'Mendokumentasikan temuan yang tahan diuji'), L('Advise the business on what could go wrong', 'Menasihati bisnis tentang apa yang bisa salah')],
      skills: [L('Skepticism with evidence', 'Skeptisisme berbasis bukti'), L('Regulatory literacy', 'Literasi regulasi'), L('Structured writing', 'Penulisan terstruktur'), L('Independence', 'Independensi')],
      profile: L('People who like being right for defensible reasons and can disagree politely with power.', 'Orang yang suka benar dengan alasan yang bisa dipertanggungjawabkan dan berani berbeda pendapat secara santun dengan atasan.') },
    strategy: { resp: [L('Break a vague problem into an answerable structure', 'Memecah masalah kabur menjadi struktur yang bisa dijawab'), L('Build the analysis and pressure-test it', 'Membangun analisis dan mengujinya'), L('Present recommendations to senior audiences', 'Mempresentasikan rekomendasi ke audiens senior')],
      skills: [L('Structured problem solving', 'Pemecahan masalah terstruktur'), L('Slide & narrative craft', 'Keahlian slide & narasi'), L('Speed with numbers', 'Kecepatan dengan angka'), L('Poise under questioning', 'Tenang saat dicecar pertanyaan')],
      profile: L('People who like intensity, feedback, and a steep curve more than they like routine.', 'Orang yang lebih menyukai intensitas, umpan balik, dan kurva belajar terjal daripada rutinitas.') },
    trainee: { resp: [L('Rotate through functions on a structured programme', 'Berotasi antar fungsi dalam program terstruktur'), L('Deliver a project per rotation, presented upward', 'Menyelesaikan proyek per rotasi, dipresentasikan ke atasan'), L('Build a network across the organisation early', 'Membangun jejaring lintas organisasi sejak awal')],
      skills: [L('Learning agility', 'Kelincahan belajar'), L('Adaptability across teams', 'Adaptabilitas lintas tim'), L('Leadership signals', 'Sinyal kepemimpinan'), L('Consistent delivery', 'Penyelesaian yang konsisten')],
      profile: L('Generalists who want breadth before depth and accept placement uncertainty in exchange.', 'Generalis yang ingin keluasan sebelum kedalaman dan menerima ketidakpastian penempatan sebagai gantinya.') }
  };
  function renderCompany(args) {
    var c = CO(args[0]);
    var host = $('#v-company');
    if (!c) { host.innerHTML = ''; return; }
    var roles = coRoles(c);
    var ind = G.industries.filter(function (i2) { return i2.id === c.industry_id; })[0];
    host.innerHTML =
      '<button class="btn-q" onclick="history.back()">← ' + t('Back', 'Kembali') + '</button>' +
      '<div style="max-width:720px">' +
      '<div style="display:flex;gap:16px;align-items:center;margin:14px 0 10px">' +
      logoTile(c, 'lg') +
      '<div><h1 class="h-page" style="margin:0">' + c.name + '</h1>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px">' +
      '<span class="chip-min gold">' + L(ind.name) + '</span>' +
      '<span class="chip-min">' + countryName(c) + '</span>' +
      (c.bumn ? '<span class="chip-min">' + t('State-owned (BUMN)', 'BUMN') + '</span>' : '') + '</div></div></div>' +
      '<p style="font-size:14.5px;color:var(--r-text-2);margin-bottom:6px">' + L(c.desc) + '</p>' +
      '<p class="note3" style="margin-bottom:18px"><a href="' + c.website + '" target="_blank" rel="noopener" style="color:var(--r-explore)">' + c.website.replace('https://', '') + '</a></p>' +
      '<p class="micro" style="margin-bottom:8px">' + t('Business areas you can enter', 'Area bisnis yang bisa kamu masuki') + '</p>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:22px">' +
      c.fns.map(function (fn) { return '<span class="chip-min">' + L(O.FN_ROLES[fn].role).replace(/ roles| track|Peran |Jalur /g, '') + '</span>'; }).join('') + '</div>' +
      '<p class="sec-h">' + t('Roles you can explore here', 'Peran yang bisa kamu jelajahi di sini') + ' · ' + roles.length + '</p>' +
      '<div class="grid2">' + roles.map(function (o) {
        var documented = o.proc === 'documented';
        var meta = FN_META[o.fn];
        return '<button class="card" style="text-align:left" data-open-opp="' + o.id + '">' +
          '<b style="font-size:14px;display:block">' + L(o.role) + '</b>' +
          (meta ? '<span style="font-size:12px;color:var(--r-text-3);display:block;margin-top:4px;line-height:1.5">' + L(meta.profile).slice(0, 80) + '…</span>' : '') +
          '<span style="display:flex;gap:10px;margin-top:8px">' +
          (documented ? '<span class="prov v">✓ ' + t('documented', 'terdokumentasi') + '</span>'
            : '<span class="prov i">~ ' + t('typical', 'umum') + '</span>') +
          '<span style="margin-left:auto;color:var(--r-explore);font-size:12px;font-weight:800">' + t('Open', 'Buka') + ' →</span></span></button>';
      }).join('') + '</div>' +
      provBlock(c, null) + '</div>';
    wireOppButtons(host);
  }
  function provBlock(c, prog) {
    return '<div class="disc" style="margin-top:26px"><b>ℹ ' + t('Where this comes from', 'Dari mana informasi ini') + '</b><br>' +
      t('Company overview · ', 'Profil perusahaan · ') + c.source_type + ' · ' + t('last reviewed ', 'terakhir ditinjau ') + c.last_reviewed +
      (prog ? '<br>' + t('Programme · ', 'Program · ') + '<a href="' + prog.source_url + '" target="_blank" rel="noopener" style="color:var(--r-explore)">' + prog.source_url.replace('https://', '') + '</a> · ' + t('verified ', 'diverifikasi ') + prog.last_verified : '') +
      '<br>' + t('Metanoia is not affiliated with or endorsed by this company. Compiled from public sources.',
        'Metanoia tidak berafiliasi dengan atau didukung oleh perusahaan ini. Dihimpun dari sumber publik.') + '</div>';
  }

  /* ═══ S8 · OPPORTUNITY — the centrepiece ═══ */
  function lmsPct(slug) {
    try {
      var mods = JSON.parse(localStorage.getItem('mt-lms-mods:' + slug) || '{}');
      return Math.round(Object.keys(mods).length / 9 * 100);
    } catch (e) { return 0; }
  }
  function stageReadiness(stype) {
    var m = G.stageTypes[stype];
    if (!m || !m.pillar) return null;
    return { pillar: m.pillar, pct: lmsPct(m.pillar), module: m.module };
  }
  function renderOpp(args) {
    var o = OPPS_ALL.filter(function (x) { return x.id === args[0]; })[0];
    var host = $('#v-opp');
    if (!o) { host.innerHTML = ''; return; }
    var co = CO(o.company);
    var oind = G.industries.filter(function (i2) { return i2.id === co.industry_id; })[0];
    var d = G.directions.filter(function (x) { return x.id === o.dir; })[0];
    var prog = o.prog ? G.programmes.filter(function (p) { return p.id === o.prog; })[0] : null;
    var documented = o.proc === 'documented' && prog && prog.stages;
    var stages = documented ? prog.stages.map(function (s) { return { type: s.type, name: s.name, assess: s.assess, failure: s.failure, prov: 'v' }; })
      : O.TYPICAL[o.proc].stages.map(function (st2) { return { type: st2, name: O.STAGE_NAMES[st2], assess: null, failure: null, prov: 'i' }; });
    var bumn = G.programmes.filter(function (p) { return p.id === 'bumn-rekrutmen-bersama'; })[0];
    var poss = findPoss('opportunity', o.id);
    var weeks = prepWeeks(d);
    var rds = stages.map(function (s) { return { s: s, r: stageReadiness(s.type) }; });
    var weakest = rds.filter(function (x) { return x.r; }).sort(function (a, b) { return a.r.pct - b.r.pct; }).slice(0, 2);

    host.innerHTML =
      '<button class="btn-q" onclick="history.back()">← ' + t('Back', 'Kembali') + '</button>' +
      '<div style="max-width:720px">' +
      '<div style="display:flex;gap:16px;align-items:center;margin:14px 0 8px">' +
      logoTile(co, 'lg') +
      '<div><p class="micro" style="margin:0 0 2px">' + co.name + '</p>' +
      '<h1 class="h-page" style="margin:0">' + L(o.role) + '</h1></div></div>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin:0 0 10px">' +
      (oind ? '<span class="chip-min gold">' + L(oind.name) + '</span>' : '') +
      '<span class="chip-min">' + (co.geo === 'id' ? 'Indonesia' : t('International', 'Internasional')) + '</span>' +
      (co.bumn ? '<span class="chip-min">' + t('State-owned (BUMN)', 'BUMN') + '</span>' : '') + '</div>' +
      '<p class="h-sub">' + L(d.name) + (o.hours ? ' · ' + L(o.hours) : '') + '</p>' +

      /* 1 · WHAT THIS ACTUALLY IS */
      '<p class="sec-h">1 · ' + t('What this actually is', 'Apa ini sebenarnya') + '</p>' +
      '<div class="card">' +
      (prog ? '<p class="serif" style="font-size:15px;color:var(--r-text-2)">' + L(prog.desc) + ' ' + L(prog.length) + '.</p>' : '') +
      '<p class="micro" style="margin:' + (prog ? '14px' : '0') + ' 0 4px">' + t('A day in this kind of work — generally, not this company specifically', 'Sehari dalam pekerjaan seperti ini — secara umum, bukan spesifik perusahaan ini') + '</p>' +
      '<p class="serif" style="font-size:14.5px;color:var(--r-text-2)">' + L(d.day_in_life) + '</p>' +
      (prog && prog.window ? '<p class="note3" style="margin-top:10px">' + L(prog.window) + '</p>' : '') + '</div>' +
      (FN_META[o.fn] ? (function (meta) {
        return '<div class="card" style="margin-top:12px">' +
          '<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:10px">' +
          '<p class="micro" style="margin:0">' + t('About this kind of role', 'Tentang peran seperti ini') + '</p>' +
          '<span class="chip-min">' + t('Entry level / graduate', 'Level awal / fresh graduate') + '</span>' +
          '<span class="prov i" style="margin-left:auto">~ ' + t('function-general, not company-specific', 'umum per fungsi, bukan spesifik perusahaan') + '</span></div>' +
          '<p class="micro" style="margin:0 0 4px;color:var(--r-text-3)">' + t('Typical responsibilities', 'Tanggung jawab umum') + '</p>' +
          meta.resp.map(function (x) { return '<div class="ev-row"><span class="m" style="color:var(--r-explore)">·</span><span>' + L(x) + '</span></div>'; }).join('') +
          '<p class="micro" style="margin:10px 0 6px;color:var(--r-text-3)">' + t('Skills that matter', 'Keahlian yang menentukan') + '</p>' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap">' + meta.skills.map(function (x) { return '<span class="chip-min">' + L(x) + '</span>'; }).join('') + '</div>' +
          '<p class="micro" style="margin:12px 0 4px;color:var(--r-text-3)">' + t('Who tends to thrive', 'Siapa yang biasanya berkembang') + '</p>' +
          '<p style="font-size:13px;color:var(--r-text-2);line-height:1.6">' + L(meta.profile) + '</p></div>';
      })(FN_META[o.fn]) : '') +

      /* 2 · COULD YOU APPLY? */
      '<p class="sec-h" style="margin-top:34px">2 · ' + t('Could you apply?', 'Bisakah kamu melamar?') + '</p>' +
      '<div class="card">' + eligSection(o, prog, bumn) + '</div>' +

      /* 3 · HOW THEY ACTUALLY HIRE */
      '<p class="sec-h" style="margin-top:34px">3 · ' + t('How they actually hire', 'Cara mereka benar-benar merekrut') + '</p>' +
      '<div class="card">' +
      (documented ? '<p class="prov v" style="margin-bottom:12px">✓ ' + t('Official source · verified ', 'Sumber resmi · diverifikasi ') + prog.last_verified + '</p>'
        : '<p class="prov i" style="margin-bottom:4px">~ ' + t('Our reading — typical for this kind of role in Indonesia', 'Pembacaan kami — umum untuk peran seperti ini di Indonesia') + '</p>' +
          '<p class="note3" style="margin-bottom:12px">' + t('We don’t have this company’s own process yet. We only publish processes we can source; this is a guide, not their actual process. Been through it? ', 'Kami belum punya proses milik perusahaan ini. Kami hanya menerbitkan proses yang bersumber; ini panduan, bukan proses mereka sebenarnya. Pernah melewatinya? ') +
          '<a href="../../help.html" style="color:var(--r-explore)">' + t('Tell us what happened', 'Ceritakan pengalamanmu') + ' →</a></p>') +
      stages.map(function (s, i) {
        var m = G.stageTypes[s.type];
        var prep = m && m.pillar ? '<a class="prep" href="../' + m.pillar + '/">' + t('Prepare: ', 'Persiapkan: ') +
          (m.pillar === 'the-pack' ? 'The Pack' : 'The Rope') + ' · ' + L(m.module) + ' →</a>' : '';
        return '<div class="stage"><span class="sn">' + (i + 1) + '</span><div>' +
          '<h4>' + L(s.name) + ' <span class="prov ' + s.prov + '">' + (s.prov === 'v' ? '✓' : '~') + '</span></h4>' +
          (s.assess ? '<p>' + t('Assesses: ', 'Menilai: ') + L(s.assess) + '</p>' : '') +
          (s.failure ? '<p class="fail">' + t('Most common failure: ', 'Kegagalan paling umum: ') + L(s.failure) + '</p>' : '') +
          prep + '</div></div>';
      }).join('') + '</div>' +

      /* 4 · WHERE YOU'D STAND */
      '<p class="sec-h" style="margin-top:34px">4 · ' + t('Where you’d stand', 'Posisimu saat ini') + '</p>' +
      '<div class="card">' +
      rds.map(function (x) {
        var pct = x.r ? x.r.pct : 0;
        var segs = 10, fill = Math.round(pct / 100 * segs);
        var lbl = !x.r ? t('Informational', 'Informasional') : pct >= 70 ? t('Ready', 'Siap') : pct >= 30 ? t('Nearly there', 'Hampir') : t('Not started', 'Belum mulai');
        return '<div class="rd"><div class="l"><span>' + L(x.s.name) + '</span><span>' + lbl + '</span></div>' +
          '<div class="segs">' + Array.apply(null, Array(segs)).map(function (_, i2) { return '<i class="' + (i2 < fill ? 'f' : '') + '"></i>'; }).join('') + '</div>' +
          (x.r ? '<details><summary>' + t('why', 'mengapa') + '</summary><p class="why">' +
            t('Derived from your module progress in ', 'Diturunkan dari kemajuan modulmu di ') + (x.r.pillar === 'the-pack' ? 'The Pack' : 'The Rope') +
            ' (' + x.r.pct + '%) ' + t('on this device.', 'di perangkat ini.') + '</p></details>' : '') + '</div>';
      }).join('') + '</div>' +

      /* 5 · WHAT IT WOULD TAKE */
      '<p class="sec-h" style="margin-top:34px">5 · ' + t('What it would take', 'Apa yang dibutuhkan') + '</p>' +
      '<div class="card"><p style="font-size:14px;color:var(--r-text-2)">' +
      t('About ' + weeks + ' weeks of preparation, at roughly 5 hours a week. This is an honest estimate, not a promise.',
        'Sekitar ' + weeks + ' minggu persiapan, kira-kira 5 jam per minggu. Ini estimasi jujur, bukan janji.') + '</p>' +
      (weakest.length ? '<p class="micro" style="margin:12px 0 4px">' + t('The two things that would move you furthest', 'Dua hal yang paling menggerakkanmu') + '</p>' +
        weakest.map(function (x, i) {
          return '<div class="ev-row"><span class="m" style="color:var(--r-explore)">' + (i + 1) + '</span><span>' + L(x.s.name) +
            ' — <a href="../' + x.r.pillar + '/" style="color:var(--r-explore)">' + (x.r.pillar === 'the-pack' ? 'The Pack' : 'The Rope') + ' · ' + L(x.r.module) + ' →</a></span></div>';
        }).join('') : '') +
      '</div>' +

      /* 6 · LEVELS & COMPENSATION */
      '<p class="sec-h" style="margin-top:34px">6 · ' + t('Levels & compensation', 'Level & kompensasi') + '</p>' +
      '<div class="card">' +
      '<p class="prov i" style="margin-bottom:12px">~ ' + t('Metanoia analysis — how scope typically grows in roles like this. Not this company’s own ladder.', 'Analisis Metanoia — bagaimana cakupan biasanya tumbuh di peran seperti ini. Bukan jenjang milik perusahaan ini.') + '</p>' +
      O.LEVELS.map(function (lv, i) {
        return '<div class="stage"><span class="sn">' + (i + 1) + '</span><div>' +
          '<h4>' + L(lv.name) + '</h4><p>' + L(lv.scope) + '</p></div></div>';
      }).join('') +
      '<p class="note3" style="margin-top:14px">' + t('We don’t publish salary figures for this role. We haven’t found a source we can defend, and we won’t estimate one — an invented number would be worse than none. When we can cite reliable data, it will appear here.',
        'Kami tidak menampilkan angka gaji untuk peran ini. Kami belum menemukan sumber yang bisa dipertanggungjawabkan, dan kami tidak akan mengira-ngira — angka karangan lebih buruk daripada tidak ada. Saat ada data andal yang bisa dikutip, angkanya akan muncul di sini.') + '</p>' +
      '<p class="note3" style="margin-top:8px">' + t('Third-party data (not Metanoia): ', 'Data pihak ketiga (bukan Metanoia): ') +
      '<a href="https://www.glassdoor.com/Search/results.htm?keyword=' + encodeURIComponent(co.name) + '" target="_blank" rel="noopener" style="color:var(--r-explore)">' + t('search this company on Glassdoor', 'cari perusahaan ini di Glassdoor') + ' →</a> · ' +
      t('external site; we can’t verify its figures.', 'situs eksternal; kami tidak bisa memverifikasi angkanya.') + '</p>' +
      '</div>' +

      '<div style="display:flex;gap:12px;margin-top:24px;flex-wrap:wrap" id="oppActs">' +
      '<button class="btn-p" data-commit="' + o.id + '">' + (poss && poss.status === 'committed' ? '✓ ' + t('Committed', 'Berkomitmen') : t('Commit to this', 'Berkomitmen pada ini') + ' →') + '</button>' +
      '<button class="btn-s explore" data-watch="' + o.id + '">' + (poss && poss.status !== 'ruled_out' && poss.status !== 'committed' ? '✓ ' + t('Watching', 'Dipantau') : t('Keep watching', 'Pantau dulu')) + '</button>' +
      '<button class="btn-q" data-ruleout="' + o.id + '">' + t('Not for me', 'Bukan untukku') + '</button></div>' +
      '<p class="note3" style="margin-top:10px">' + t('You can change this later. Most people do, and that’s fine. Preparation only works when it’s aimed at something specific.',
        'Kamu bisa mengubahnya nanti. Kebanyakan orang begitu, dan itu wajar. Persiapan hanya bekerja saat diarahkan pada sesuatu yang spesifik.') + '</p>' +
      provBlock(co, documented ? prog : (prog || null)) + '</div>' +
      '<div class="sticky-act"><button class="btn-p" data-commit="' + o.id + '">' + t('Commit', 'Komit') + '</button>' +
      '<button class="btn-s" data-watch="' + o.id + '">' + t('Watch', 'Pantau') + '</button></div>';
    $$('[data-commit]', host).forEach(function (b) {
      b.addEventListener('click', function () { setPoss('opportunity', o.id, 'committed'); go('range'); });
    });
    $$('[data-watch]', host).forEach(function (b) {
      b.addEventListener('click', function () { setPoss('opportunity', o.id, 'watching'); route(); });
    });
    $$('[data-ruleout]', host).forEach(function (b) {
      b.addEventListener('click', function () { setPoss('opportunity', o.id, 'ruled_out'); go('range'); });
    });
  }
  function eligSection(o, prog, bumn) {
    var rules = (prog && prog.eligibility && prog.eligibility.length) ? prog.eligibility
      : (o.bumn && bumn ? bumn.eligibility : null);
    var viaBumn = !(prog && prog.eligibility && prog.eligibility.length) && o.bumn;
    if (!rules) {
      return '<p class="prov u" style="margin-bottom:6px">' + t('Unknown', 'Belum diketahui') + '</p>' +
        '<p class="note3">' + t('No published criteria we can source for this route. Check the official careers page — and if you know the criteria, tell us.',
          'Belum ada kriteria terpublikasi yang bisa kami sumberkan untuk jalur ini. Cek laman karier resmi — dan jika kamu tahu kriterianya, beri tahu kami.') + '</p>';
    }
    var b1 = ID.b1, rows = '';
    rules.forEach(function (r) {
      var st = 'ok', extra = '';
      if (r.check === 'age_max' && r.value) {
        var cap = b1.degree === 'd3_d4' ? r.value.d3_d4 : r.value.s1;
        if (b1.age == null) { st = 'warn'; extra = t('age not provided — add it in Identity', 'usia belum diisi — tambahkan di Identitas'); }
        else if (b1.age > cap) { st = 'warn'; extra = t('currently outside the stated criteria', 'saat ini di luar kriteria yang tercantum'); }
        else extra = t('you are ', 'usiamu ') + b1.age + t(', within the cap', ', dalam batas');
      } else if (r.check === 'gpa_min' && r.value) {
        var min = b1.uni === 'pts' ? r.value.pts : r.value.ptn;
        if (b1.gpa == null) { st = 'warn'; extra = t('GPA not provided — add it in Identity', 'IPK belum diisi — tambahkan di Identitas'); }
        else if (b1.gpa < min) { st = 'warn'; extra = t('currently below the stated threshold (' + min + ')', 'saat ini di bawah ambang tercantum (' + min + ')'); }
        else extra = 'IPK ' + b1.gpa + ' ≥ ' + min;
      } else { extra = L(r.note || r.label); }
      rows += '<div class="ev-row ' + (st === 'ok' ? 'for' : 'against') + '"><span class="m">' + (st === 'ok' ? '✓' : '⚠') + '</span><span><b>' + L(r.label) + '</b>' + (extra ? ' — ' + extra : '') + '</span></div>';
    });
    return (viaBumn ? '<p class="prov v" style="margin-bottom:8px">✓ ' + t('BUMN joint-recruitment rules (FHCI), sourced', 'Aturan rekrutmen bersama BUMN (FHCI), bersumber') + '</p>' : '') +
      rows +
      '<div style="border-left:2px solid var(--r-commit);padding:8px 0 8px 14px;margin-top:12px;font-size:13px;color:var(--r-text-2)">' +
      t('What would change this: two pieces of demonstrated work outweigh 0.2 of GPA at most companies of this type. ',
        'Yang akan mengubah ini: dua karya nyata lebih berat daripada 0,2 IPK di kebanyakan perusahaan sejenis. ') +
      '<a href="../the-pack/" style="color:var(--r-commit)">' + t('Build the evidence — The Pack', 'Bangun buktinya — The Pack') + ' →</a></div>' +
      (o.bumn && b1.age != null && b1.age <= 27 ?
        '<p class="note3" style="margin-top:10px">⏳ ' + t('A timing note: state-owned (BUMN) programmes cap bachelor’s-degree applicants at 27. That gives you roughly ' + Math.max(1, 27 - b1.age) + ' more cycles. Not to alarm you — it’s why sequence matters more than effort.',
          'Catatan waktu: program BUMN membatasi pelamar S1 di usia 27. Itu memberimu kira-kira ' + Math.max(1, 27 - b1.age) + ' siklus lagi. Bukan untuk mencemaskanmu — itulah mengapa urutan lebih penting daripada usaha.') + '</p>' : '');
  }

  /* ═══ S11 · YOUR RANGE — a personal opportunity landscape ═══ */
  function possView(p) {
    if (p.type === 'direction') {
      var d = G.directions.filter(function (x) { return x.id === p.ref; })[0];
      if (!d) return null;
      var r = F.analyseDirection(ID, d, lang());
      return { name: L(d.name), open: function () { go('ddetail', d.id); },
        sub: L(d.summary).slice(0, 74) + '…',
        logo: '<span class="mono">' + monogram(L(d.name)) + '</span>',
        chips: bandChip(r) };
    }
    var o = OPPS_ALL.filter(function (x) { return x.id === p.ref; })[0];
    if (!o) return null;
    var co = CO(o.company);
    var ind = G.industries.filter(function (i2) { return i2.id === co.industry_id; })[0];
    return { name: co.name, open: function () { go('opp', o.id); },
      sub: L(o.role) + ' · ' + countryName(co),
      logo: logoTile(co),
      chips: '<span class="chip-min gold">' + L(ind.name) + '</span>' };
  }
  function recommendedRows() {
    /* top untracked directions from the same deterministic fit run — each with
       its own traced reason. Empty until there's something to reason from. */
    var res = F.analyseAll(ID, G, lang());
    if (res.insufficient) return [];
    var tracked = {};
    POSS.forEach(function (p) { if (p.type === 'direction') tracked[p.ref] = 1; });
    return res.shown.filter(function (r) {
      return !tracked[r.direction.id] && r.evidence.length && (!r.band || r.band.id !== 'stretch');
    }).slice(0, 3);
  }
  function renderRange() {
    var host = $('#v-range');
    var groups = { committed: [], investigating: [], watching: [], ruled_out: [] };
    POSS.forEach(function (p) { (groups[p.status] || groups.watching).push(p); });
    var pct = Math.round(F.completeness(ID) * 100);
    function cardsFor(list, committed) {
      return list.map(function (p) {
        var v = possView(p); if (!v) return '';
        return '<div class="card pcard' + (committed ? ' card--committed' : '') + '" style="margin-bottom:10px">' +
          v.logo +
          '<span class="meta"><b>' + v.name + '</b><span class="sub">' + v.sub + '</span>' +
          (p.status === 'ruled_out' ? '<span class="note3" style="display:block;margin-top:4px">' + t('Ruled out. Things change — including you.', 'Disingkirkan. Banyak hal berubah — termasuk dirimu.') +
            ' <button class="btn-q" data-rev="' + p.type + ':' + p.ref + '" style="display:inline;color:var(--r-explore)">' + t('Reconsider', 'Pertimbangkan lagi') + '</button></span>' : '') +
          '</span>' +
          '<span style="display:flex;flex-direction:column;gap:8px;align-items:flex-end">' + v.chips +
          '<button class="btn-q go" data-po="' + p.type + ':' + p.ref + '">' + (committed ? t('Continue', 'Lanjutkan') : t('Look', 'Lihat')) + ' →</button></span></div>';
      }).join('');
    }
    var recs = recommendedRows();
    host.innerHTML =
      '<img class="vmap peak" src="../../assets/nav-mountain.png" alt="" aria-hidden="true">' +
      '<h1 class="h-page">' + t('Your Range', 'Bentangmu') + '</h1>' +
      '<p class="h-sub">' + t('The possibilities you’re currently tracking — and why they’re yours.', 'Kemungkinan yang sedang kamu pantau — dan mengapa itu milikmu.') + '</p>' +
      '<div style="max-width:720px">' +
      (POSS.length === 0 ?
        '<div class="empty" style="max-width:560px">' +
        t('Nothing here yet. That’s the normal starting position. Most people begin by browsing a few companies they’ve heard of.',
          'Belum ada apa-apa di sini. Itu posisi awal yang normal. Kebanyakan orang mulai dengan menjelajahi beberapa perusahaan yang pernah mereka dengar.') +
        '<br><br><button class="btn-p" style="background:var(--r-explore)" onclick="location.hash=\'#/explore\'">' + t('Explore', 'Jelajah') + ' →</button> ' +
        '<button class="btn-s" onclick="location.hash=\'#/quick\'">' + t('Three questions', 'Tiga pertanyaan') + ' →</button></div>'
        :
        (groups.committed.length ? '<p class="sec-h">' + t('Committed', 'Berkomitmen') + '</p>' + cardsFor(groups.committed, true) : '') +
        (groups.watching.length || groups.investigating.length ?
          '<p class="sec-h" style="margin-top:26px">' + t('Watching', 'Dipantau') + ' · ' + (groups.watching.length + groups.investigating.length) + '</p>' +
          cardsFor(groups.investigating.concat(groups.watching), false) : '') +
        '<div style="display:flex;gap:10px;margin:16px 0 0;flex-wrap:wrap">' +
        ((groups.watching.length + groups.investigating.length + groups.committed.length) >= 2 ?
          '<button class="btn-s explore" id="cmpGo">' + t('Compare', 'Bandingkan') + ' →</button>' : '') + '</div>' +
        (groups.ruled_out.length ? '<p class="sec-h" style="margin-top:26px">' + t('Ruled out', 'Disingkirkan') + ' · ' + groups.ruled_out.length + '</p>' + cardsFor(groups.ruled_out, false) : '')
      ) +
      (recs.length ?
        '<p class="sec-h" style="margin-top:30px">' + t('Recommended for you', 'Direkomendasikan untukmu') + '</p>' +
        '<p class="note3" style="margin-bottom:10px">' + t('From what you’ve told Metanoia — reasons shown, never scores.', 'Dari apa yang kamu ceritakan pada Metanoia — alasan ditampilkan, bukan skor.') + '</p>' +
        recs.map(function (r) {
          var d = r.direction;
          return '<div class="card pcard" style="margin-bottom:10px">' +
            '<span class="mono">' + monogram(L(d.name)) + '</span>' +
            '<span class="meta"><b>' + L(d.name) + '</b>' +
            '<span class="sub">' + t('Why it may fit: ', 'Mengapa mungkin cocok: ') + r.evidence[0].text.replace(/\.$/, '').toLowerCase() + '</span></span>' +
            '<span style="display:flex;flex-direction:column;gap:8px;align-items:flex-end">' + bandChip(r) +
            '<button class="btn-q go" data-rec="' + d.id + '">' + t('Look', 'Lihat') + ' →</button></span></div>';
        }).join('') : '') +
      '</div>' +
      '<div class="card" style="max-width:560px;margin-top:34px"><div style="display:flex;align-items:center;gap:12px">' +
      '<div style="flex:1"><p style="font-size:13px;color:var(--r-text-2)">' +
      t('Your identity is ' + pct + '% complete.', 'Identitasmu ' + pct + '% lengkap.') + ' ' +
      (pct < 100 ? t('A few more minutes would sharpen everything here.', 'Beberapa menit lagi akan mempertajam semuanya di sini.') : '') + '</p>' +
      '<div class="meter" style="margin-top:8px"><i style="width:' + pct + '%"></i></div></div>' +
      '<span style="display:flex;flex-direction:column;gap:8px">' +
      '<button class="btn-s explore" onclick="location.hash=\'#/identity\'">' + t('Add detail', 'Tambah detail') + ' →</button>' +
      '<button class="btn-q" onclick="location.hash=\'#/profile\'" style="color:var(--r-explore)">' + t('My career profile', 'Profil karierku') + ' →</button></span></div></div>';
    $$('[data-rec]', host).forEach(function (b) {
      b.addEventListener('click', function () { go('ddetail', b.dataset.rec); });
    });
    $$('[data-po]', host).forEach(function (b) {
      b.addEventListener('click', function () {
        var pr = b.dataset.po.split(':');
        var v = possView({ type: pr[0], ref: pr[1] }); if (v) v.open();
      });
    });
    $$('[data-rev]', host).forEach(function (b) {
      b.addEventListener('click', function () {
        var pr = b.dataset.rev.split(':');
        setPoss(pr[0], pr[1], 'watching');
        ID.dismissed = ID.dismissed.filter(function (x) { return x !== pr[1]; }); saveId();
        route();
      });
    });
    if ($('#cmpGo')) $('#cmpGo').addEventListener('click', function () { go('compare'); });
  }

  /* ═══ S12 · COMPARE ═══ */
  function renderCompare() {
    var host = $('#v-compare');
    var items = POSS.filter(function (p) { return p.status !== 'ruled_out'; }).slice(0, 3);
    if (items.length < 2) {
      host.innerHTML = '<h1 class="h-page">' + t('Compare', 'Bandingkan') + '</h1><div class="empty" style="max-width:520px">' +
        t('Track at least two possibilities to compare them.', 'Pantau minimal dua kemungkinan untuk membandingkannya.') +
        '<br><br><button class="btn-s" onclick="location.hash=\'#/range\'">' + t('Your Range', 'Bentangmu') + ' →</button></div>';
      return;
    }
    function dirOf(p) {
      if (p.type === 'direction') return G.directions.filter(function (x) { return x.id === p.ref; })[0];
      var o = OPPS_ALL.filter(function (x) { return x.id === p.ref; })[0];
      return o ? G.directions.filter(function (x) { return x.id === o.dir; })[0] : null;
    }
    function nameOf(p) { var v = possView(p); return v ? v.name : p.ref; }
    var rows = [
      [t('Fit', 'Kecocokan'), function (p) { var d = dirOf(p); if (!d) return '—'; var r = F.analyseDirection(ID, d, lang()); return r.band ? (lang() === 'id' ? r.band.id_ : r.band.en) : t('Early signal', 'Sinyal awal'); }],
      [t('Entry difficulty', 'Kesulitan masuk'), function (p) { var d = dirOf(p); return d ? { 'accessible': t('Accessible', 'Terbuka'), 'competitive': t('Competitive', 'Kompetitif'), 'highly-competitive': t('Highly competitive', 'Sangat kompetitif') }[d.entry_difficulty] : '—'; }],
      [t('Prep cost', 'Biaya persiapan'), function (p) { var d = dirOf(p); return d ? '~' + prepWeeks(d) + ' ' + t('weeks', 'minggu') : '—'; }],
      [t('Clashes with', 'Bertentangan dengan'), function (p) {
        var d = dirOf(p); if (!d) return '—';
        var r = F.analyseDirection(ID, d, lang());
        var v = r.counterEvidence.filter(function (e) { return e.kind === 'values'; });
        return v.length ? '<span class="warn">⚠ ' + t('a top-five value', 'nilai lima teratasmu') + '</span>' : '—';
      }],
      [t('Headline trade-off', 'Kompromi utama'), function (p) { var d = dirOf(p); return d ? L(d.tradeoffs[0]) : '—'; }]
    ];
    host.innerHTML = '<h1 class="h-page">' + t('Compare', 'Bandingkan') + '</h1>' +
      '<p class="h-sub">' + t('Conflicts carry the same weight as positives here. This is not a scoreboard.', 'Konflik berbobot sama dengan hal positif di sini. Ini bukan papan skor.') + '</p>' +
      '<div class="cmp-wrap"><table class="cmp"><tr><th></th>' + items.map(function (p) { return '<th>' + nameOf(p) + '</th>'; }).join('') + '</tr>' +
      rows.map(function (row) { return '<tr><td>' + row[0] + '</td>' + items.map(function (p) { return '<td>' + row[1](p) + '</td>'; }).join('') + '</tr>'; }).join('') +
      '</table></div>';
  }

  /* ═══ ⌘K SEARCH ═══ */
  var kbar = $('#kbar'), kInput = $('#kInput'), kRes = $('#kRes');
  function kOpen() { kbar.classList.add('open'); kInput.value = ''; kSearch(''); kInput.focus(); }
  function kClose() { kbar.classList.remove('open'); }
  function kSearch(q) {
    q = q.toLowerCase();
    var out = [];
    COS.forEach(function (c) {
      if (!q || c.name.toLowerCase().indexOf(q) !== -1) out.push({ n: c.name, tp: t('Company', 'Perusahaan'), go: function () { go('company', c.id); } });
    });
    OPPS_ALL.forEach(function (o) {
      var co = CO(o.company);
      var nm = co.name + ' · ' + L(o.role);
      if (!q || nm.toLowerCase().indexOf(q) !== -1) out.push({ n: nm, tp: t('Opportunity', 'Peluang'), go: function () { go('opp', o.id); } });
    });
    G.directions.forEach(function (d) {
      if (!q || L(d.name).toLowerCase().indexOf(q) !== -1) out.push({ n: L(d.name), tp: t('Direction', 'Arah'), go: function () { go('ddetail', d.id); } });
    });
    kRes.innerHTML = out.slice(0, 12).map(function (x, i) {
      return '<button data-ki="' + i + '">' + x.n + '<span class="kt">' + x.tp + '</span></button>';
    }).join('');
    $$('[data-ki]', kRes).forEach(function (b, i) {
      b.addEventListener('click', function () { kClose(); out[i].go(); });
    });
  }
  kInput.addEventListener('input', function () { kSearch(kInput.value); });
  $('#srchBtn').addEventListener('click', kOpen);
  $('#srchBtnM').addEventListener('click', kOpen);
  kbar.addEventListener('click', function (e) { if (e.target === kbar) kClose(); });
  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); kOpen(); }
    if (e.key === 'Escape') kClose();
  });

  applyLang();
  route();
})();
