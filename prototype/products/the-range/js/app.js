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
    return { b1: {}, b2: {}, b3: {}, b4: {}, b5: {}, b6: {}, b7: {}, quick: {},
      attributes: {}, attributeSources: {}, skills: [], interests: [],
      topValues: [], constraints: [], dismissed: [], statement: null };
  }
  var ID = loadId();
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
  var views = ['home', 'quick', 'identity', 'directions', 'ddetail', 'explore', 'company', 'opp', 'range', 'compare'];
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
      range: renderRange, compare: renderCompare };
    R[v](h.slice(1));
    updateNavCnt();
    applyLang();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  $$('[data-nav]').forEach(function (b) { b.addEventListener('click', function () { go(b.dataset.nav); }); });

  /* ═══ S1 · LANDING ═══ */
  function renderHome() {
    var host = $('#v-home');
    var shopee = G.programmes.filter(function (p) { return p.id === 'shopee-gdp'; })[0];
    host.innerHTML =
      '<div style="max-width:640px;padding-top:26px">' +
      '<p class="micro" style="color:var(--r-explore)">The Range · Bentang · ' + t('Free to start', 'Gratis untuk memulai') + '</p>' +
      '<h1 style="font-size:clamp(30px,5vw,44px);letter-spacing:-.02em;line-height:1.12;margin:14px 0 14px">' +
      t('See what&rsquo;s out there. Then find out what it takes.', 'Lihat apa yang ada di luar sana. Lalu cari tahu apa yang dibutuhkan.') + '</h1>' +
      '<p style="font-size:16px;color:var(--r-text-2);margin-bottom:24px">' +
      t('You don&rsquo;t need to know what you want yet. Start with three questions.',
        'Kamu belum perlu tahu apa yang kamu mau. Mulailah dengan tiga pertanyaan.') + '</p>' +
      '<div style="display:flex;gap:12px;flex-wrap:wrap">' +
      '<button class="btn-p" id="homeStart" style="background:var(--r-explore);color:#06090F">' + t('Start with three questions', 'Mulai dengan tiga pertanyaan') + ' →</button>' +
      '<button class="btn-s" id="homeBrowse">' + t('Or just browse companies', 'Atau jelajahi perusahaan saja') + ' →</button></div>' +
      '<p class="note3" style="margin-top:14px">' + t('Free. No account needed to start. We&rsquo;ll tell you what we don&rsquo;t know.',
        'Gratis. Tanpa akun untuk memulai. Kami akan memberi tahu apa yang tidak kami ketahui.') + '</p></div>' +

      '<div class="sec"><p class="sec-h">' + t('The product, working — a real documented process', 'Produknya bekerja — proses nyata yang terdokumentasi') + '</p>' +
      '<div class="card" style="max-width:640px">' +
      '<p class="micro">Shopee (Sea Group) Indonesia</p>' +
      '<h3 style="font-size:16px;margin:4px 0 2px">' + L(shopee.name) + '</h3>' +
      '<p class="note3" style="margin-bottom:14px">' + L(shopee.length) + ' · <span class="prov v">✓ ' + t('official · verified', 'resmi · diverifikasi') + ' ' + shopee.last_verified + '</span></p>' +
      shopee.stages.map(function (s) {
        return '<div class="ev-row"><span class="m" style="color:var(--r-explore)">' + s.seq + '</span><span>' + L(s.name) + '</span></div>';
      }).join('') +
      '<button class="btn-q" data-open-opp="shopee-gdp" style="color:var(--r-explore);margin-top:8px">' + t('See the full opportunity', 'Lihat peluang lengkapnya') + ' →</button>' +
      '</div></div>' +

      '<div class="sec"><p class="sec-h">' + t('How it works', 'Cara kerjanya') + '</p>' +
      '<div class="grid2">' +
      [[t('Tell us a little', 'Ceritakan sedikit'), t('Three questions, ninety seconds. &ldquo;I genuinely don&rsquo;t know&rdquo; is a real answer here.', 'Tiga pertanyaan, sembilan puluh detik. &ldquo;Aku benar-benar tidak tahu&rdquo; adalah jawaban yang sah di sini.')],
       [t('See what fits', 'Lihat yang cocok'), t('Directions with evidence for and against — traced to what you said, never a percentage.', 'Arah dengan bukti mendukung dan menentang — dirunut ke jawabanmu, tanpa persentase.')],
       [t('Find out what it takes', 'Cari tahu apa yang dibutuhkan'), t('Real companies, how they actually hire, whether you can apply, and the honest preparation cost.', 'Perusahaan nyata, cara mereka merekrut, apakah kamu bisa melamar, dan biaya persiapan yang jujur.')]
      ].map(function (x, i) {
        return '<div class="card"><p class="micro" style="color:var(--r-explore)">0' + (i + 1) + '</p><h3 style="font-size:15px;margin:6px 0 5px">' + x[0] + '</h3><p style="font-size:13px;color:var(--r-text-2)">' + x[1] + '</p></div>';
      }).join('') + '</div></div>' + disclaimer();
    $('#homeStart').addEventListener('click', function () { go('quick'); });
    $('#homeBrowse').addEventListener('click', function () { go('explore'); });
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
    'balance', 'prestige', 'purpose', 'security', 'creativity', 'people'];
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
    ['build_advise', { en: 'Build things', id: 'Membangun sesuatu' }, { en: 'Advise others', id: 'Menasihati orang' }]
  ];

  var SECTIONS = [
    { key: 'b1', title: { en: 'Where you are', id: 'Posisimu' },
      payoff: { en: 'makes eligibility checks accurate', id: 'membuat cek kelayakan akurat' },
      render: function (h) {
        var b = ID.b1;
        h.innerHTML = '<div class="grid2">' +
          fSel('i_degree', t('Education level', 'Jenjang'), [['s1', 'S1'], ['d3_d4', 'D3 / D4'], ['s2', 'S2']], b.degree) +
          fSel('i_uni', t('Institution type', 'Jenis institusi'), [['ptn', 'PTN'], ['pts', 'PTS'], ['abroad', t('Overseas', 'Luar negeri')]], b.uni) +
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
        h.innerHTML = '<label class="fieldl">' + t('One experience — what did you actually do?', 'Satu pengalaman — apa yang benar-benar kamu kerjakan?') + '</label>' +
          '<textarea id="i_exp1">' + esc(ID.b2.exp1 || '') + '</textarea>';
      },
      collect: function () { ID.b2.exp1 = val('i_exp1') || ID.b2.exp1; ID.b2.done = !!(ID.b2.exp1 && ID.b2.exp1.length > 10); } },
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
        '<label class="fieldl" style="margin-top:16px">' + t('Describe a time you lost track of hours. What were you doing?', 'Ceritakan saat kamu lupa waktu. Apa yang sedang kamu kerjakan?') + '</label>' +
        '<textarea id="i_flow">' + esc(ID.b4.flow || '') + '</textarea>';
        wireMulti('i_interests', ID.interests, function () { ID.b4.done = ID.interests.length > 0; saveId(); });
      },
      collect: function () { ID.b4.flow = val('i_flow') || ID.b4.flow; ID.b4.done = ID.interests.length > 0 || !!(ID.b4.flow && ID.b4.flow.length > 10); } },
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
      collect: function () { ID.b7.done = ID.b7.done || ID.constraints.length > 0; } }
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

  var openSection = null;
  function renderIdentity() {
    var host = $('#v-identity');
    var pct = Math.round(F.completeness(ID) * 100);
    host.innerHTML =
      '<h1 class="h-page">' + t('Your identity', 'Identitasmu') + '</h1>' +
      '<p class="h-sub">' + t('Nothing is required. Each section states what it buys you.', 'Tidak ada yang wajib. Setiap bagian menyebutkan manfaat spesifiknya.') + '</p>' +
      '<div style="display:flex;align-items:center;gap:14px;max-width:640px;margin-bottom:22px">' +
      '<div class="meter" style="flex:1"><i style="width:' + pct + '%"></i></div><span class="micro">' + pct + '%</span></div>' +
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
      '<button class="btn-s" id="idStmt">' + t('My identity statement', 'Pernyataan identitasku') + '</button></div>' +
      '<div id="stmtWrap" style="max-width:640px;margin-top:22px"></div>';
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
    var opps = O.OPPS.filter(function (o) { return o.dir === d.id; });
    var companies = G.companies.filter(function (c) { return d.industry_ids.indexOf(c.industry_id) !== -1; });
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

  /* ═══ S6 · EXPLORE — faceted, ungated ═══ */
  var XF = { ind: '', fn: '', elig: false };
  function renderExplore() {
    var host = $('#v-explore');
    var hasId = ID.b1 && (ID.b1.age != null || ID.b1.gpa != null);
    var opps = O.OPPS.filter(function (o) {
      var co = G.companies.filter(function (c) { return c.id === o.company; })[0];
      var d = G.directions.filter(function (x) { return x.id === o.dir; })[0];
      if (XF.ind && co.industry_id !== XF.ind) return false;
      if (XF.fn && d.function_ids.indexOf(XF.fn) === -1) return false;
      return true;
    });
    host.innerHTML =
      '<h1 class="h-page">' + t('Explore', 'Jelajah') + '</h1>' +
      '<p class="h-sub">' + t('Browse freely. No identity or account needed.', 'Jelajahi dengan bebas. Tanpa identitas atau akun.') + '</p>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px">' +
      '<select id="xInd" style="width:auto"><option value="">' + t('All industries', 'Semua industri') + '</option>' +
      G.industries.map(function (i) { return '<option value="' + i.id + '"' + (XF.ind === i.id ? ' selected' : '') + '>' + L(i.name) + '</option>'; }).join('') + '</select>' +
      '<select id="xFn" style="width:auto"><option value="">' + t('All functions', 'Semua fungsi') + '</option>' +
      G.functions.map(function (f2) { return '<option value="' + f2.id + '"' + (XF.fn === f2.id ? ' selected' : '') + '>' + L(f2.name) + '</option>'; }).join('') + '</select>' +
      (hasId ? '<button class="btn-s explore" id="xElig">' + (XF.elig ? '✓ ' : '⚡ ') + t('Eligible for me', 'Layak untukku') + '</button>' : '') +
      '</div>' +
      '<p class="note3" style="margin-bottom:12px">' + opps.length + ' ' + t('opportunities', 'peluang') + ' · ' +
      t('30 documented at launch — depth over breadth', '30 terdokumentasi saat rilis — kedalaman di atas keluasan') + '</p>' +
      '<div class="grid2">' + opps.map(oppCardSmall).join('') + '</div>' +
      '<p class="sec-h" style="margin-top:44px">' + t('Or start from a direction', 'Atau mulai dari arah') + '</p>' +
      '<div class="grid2">' + G.directions.slice(0, 6).map(function (d) {
        return '<button class="card" style="text-align:left" data-look="' + d.id + '"><b style="font-size:14px">' + L(d.name) + '</b>' +
          '<span class="note3" style="display:block;margin-top:3px">' + L(d.summary).slice(0, 80) + '…</span></button>';
      }).join('') + '</div>';
    $('#xInd').addEventListener('change', function () { XF.ind = this.value; renderExplore(); applyLang(); });
    $('#xFn').addEventListener('change', function () { XF.fn = this.value; renderExplore(); applyLang(); });
    if ($('#xElig')) $('#xElig').addEventListener('click', function () { XF.elig = !XF.elig; renderExplore(); applyLang(); });
    wireOppButtons(host); wireDirCards(host);
  }
  function oppCardSmall(o) {
    var co = G.companies.filter(function (c) { return c.id === o.company; })[0];
    var documented = o.proc === 'documented';
    var prog = o.prog ? G.programmes.filter(function (p) { return p.id === o.prog; })[0] : null;
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

  /* ═══ S7 · COMPANY ═══ */
  function renderCompany(args) {
    var c = G.companies.filter(function (x) { return x.id === args[0]; })[0];
    var host = $('#v-company');
    if (!c) { host.innerHTML = ''; return; }
    var opps = O.OPPS.filter(function (o) { return o.company === c.id; });
    host.innerHTML =
      '<button class="btn-q" onclick="history.back()">← ' + t('Back', 'Kembali') + '</button>' +
      '<div style="max-width:680px"><h1 class="h-page" style="margin-top:10px">' + c.name + '</h1>' +
      '<p style="font-size:14.5px;color:var(--r-text-2);margin-bottom:6px">' + L(c.description) + '</p>' +
      '<p class="note3" style="margin-bottom:20px"><a href="' + c.website + '" target="_blank" rel="noopener" style="color:var(--r-explore)">' + c.website.replace('https://', '') + '</a></p>' +
      '<p class="sec-h">' + t('Ways in', 'Jalur masuk') + '</p>' +
      '<div class="grid2">' + (opps.length ? opps.map(oppCardSmall).join('') :
        '<div class="empty">' + t('No entry route documented yet. We only list what we can source.', 'Belum ada jalur masuk terdokumentasi. Kami hanya mencantumkan yang bersumber.') + '</div>') + '</div>' +
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
    var o = O.OPPS.filter(function (x) { return x.id === args[0]; })[0];
    var host = $('#v-opp');
    if (!o) { host.innerHTML = ''; return; }
    var co = G.companies.filter(function (c) { return c.id === o.company; })[0];
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
      '<p class="micro" style="margin-top:10px">' + co.name + '</p>' +
      '<h1 class="h-page">' + L(o.role) + '</h1>' +
      '<p class="h-sub">' + L(d.name) + (o.hours ? ' · ' + L(o.hours) : '') + '</p>' +

      /* 1 · WHAT THIS ACTUALLY IS */
      '<p class="sec-h">1 · ' + t('What this actually is', 'Apa ini sebenarnya') + '</p>' +
      '<div class="card">' +
      (prog ? '<p class="serif" style="font-size:15px;color:var(--r-text-2)">' + L(prog.desc) + ' ' + L(prog.length) + '.</p>' : '') +
      '<p class="micro" style="margin:' + (prog ? '14px' : '0') + ' 0 4px">' + t('A day in this kind of work — generally, not this company specifically', 'Sehari dalam pekerjaan seperti ini — secara umum, bukan spesifik perusahaan ini') + '</p>' +
      '<p class="serif" style="font-size:14.5px;color:var(--r-text-2)">' + L(d.day_in_life) + '</p>' +
      (prog && prog.window ? '<p class="note3" style="margin-top:10px">' + L(prog.window) + '</p>' : '') + '</div>' +

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
        '<p class="note3" style="margin-top:10px">⏳ ' + t('A timing note: BUMN programmes cap S1 applicants at 27. That gives you roughly ' + Math.max(1, 27 - b1.age) + ' more cycles. Not to alarm you — it’s why sequence matters more than effort.',
          'Catatan waktu: program BUMN membatasi pelamar S1 di usia 27. Itu memberimu kira-kira ' + Math.max(1, 27 - b1.age) + ' siklus lagi. Bukan untuk mencemaskanmu — itulah mengapa urutan lebih penting daripada usaha.') + '</p>' : '');
  }

  /* ═══ S11 · YOUR RANGE — the home ═══ */
  function possView(p) {
    if (p.type === 'direction') {
      var d = G.directions.filter(function (x) { return x.id === p.ref; })[0];
      return d ? { name: L(d.name), open: function () { go('ddetail', d.id); }, sub: L(d.summary).slice(0, 70) + '…' } : null;
    }
    var o = O.OPPS.filter(function (x) { return x.id === p.ref; })[0];
    if (!o) return null;
    var co = G.companies.filter(function (c) { return c.id === o.company; })[0];
    return { name: co.name + ' · ' + L(o.role), open: function () { go('opp', o.id); }, sub: '' };
  }
  function renderRange() {
    var host = $('#v-range');
    var groups = { committed: [], investigating: [], watching: [], ruled_out: [] };
    POSS.forEach(function (p) { (groups[p.status] || groups.watching).push(p); });
    var pct = Math.round(F.completeness(ID) * 100);
    function cardsFor(list, committed) {
      return list.map(function (p) {
        var v = possView(p); if (!v) return '';
        return '<div class="card' + (committed ? ' card--committed' : '') + '" style="margin-bottom:10px">' +
          '<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><b style="font-size:14px;flex:1">' + v.name + '</b>' +
          '<button class="btn-q" data-po="' + p.type + ':' + p.ref + '" style="color:var(--r-explore)">' + (committed ? t('Continue', 'Lanjutkan') : t('Look', 'Lihat')) + ' →</button></div>' +
          (p.status === 'ruled_out' ? '<p class="note3" style="margin-top:4px">' + t('Ruled out. Things change — including you.', 'Disingkirkan. Banyak hal berubah — termasuk dirimu.') +
            ' <button class="btn-q" data-rev="' + p.type + ':' + p.ref + '" style="display:inline;color:var(--r-explore)">' + t('Reconsider', 'Pertimbangkan lagi') + '</button></p>' : '') + '</div>';
      }).join('');
    }
    host.innerHTML =
      '<h1 class="h-page">' + t('Your Range', 'Bentangmu') + '</h1>' +
      '<p class="h-sub">' + t('The possibilities you’re currently tracking.', 'Kemungkinan-kemungkinan yang sedang kamu pantau.') + '</p>' +
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
      '<div class="card" style="max-width:560px;margin-top:34px"><div style="display:flex;align-items:center;gap:12px">' +
      '<div style="flex:1"><p style="font-size:13px;color:var(--r-text-2)">' +
      t('Your identity is ' + pct + '% complete.', 'Identitasmu ' + pct + '% lengkap.') + ' ' +
      (pct < 100 ? t('A few more minutes would sharpen everything here.', 'Beberapa menit lagi akan mempertajam semuanya di sini.') : '') + '</p>' +
      '<div class="meter" style="margin-top:8px"><i style="width:' + pct + '%"></i></div></div>' +
      '<button class="btn-s explore" onclick="location.hash=\'#/identity\'">' + t('Add detail', 'Tambah detail') + ' →</button></div></div>';
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
      var o = O.OPPS.filter(function (x) { return x.id === p.ref; })[0];
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
    G.companies.forEach(function (c) {
      if (!q || c.name.toLowerCase().indexOf(q) !== -1) out.push({ n: c.name, tp: t('Company', 'Perusahaan'), go: function () { go('company', c.id); } });
    });
    O.OPPS.forEach(function (o) {
      var co = G.companies.filter(function (c) { return c.id === o.company; })[0];
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
