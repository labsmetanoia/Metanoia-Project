/**
 * THE LOOKOUT — application layer
 * Views over the career graph (data/lookout/graph.js) and the fit model
 * (data/lookout/fit.js). Identity data lives in localStorage on this device;
 * no account is required and nothing is sent anywhere.
 */
(function () {
  'use strict';
  var G = window.MT_LOOKOUT_GRAPH, F = window.MT_LOOKOUT_FIT;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };

  /* ── theme + language (site-standard keys) ── */
  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function L(pair) { return pair ? (pair[lang()] || pair.en) : ''; }
  (function initTheme() {
    try {
      var t = localStorage.getItem('mt-theme');
      document.documentElement.dataset.theme = (t === 'light') ? 'light' : 'dark';
    } catch (e) { document.documentElement.dataset.theme = 'dark'; }
  })();
  $('#themeBtn').addEventListener('click', function () {
    var next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('mt-theme', next); } catch (e) {}
  });
  function applyLang() {
    $$('[data-en]').forEach(function (n) {
      n.innerHTML = n.getAttribute(lang() === 'id' ? 'data-id' : 'data-en');
    });
    $$('.ctl .lb button').forEach(function (b) {
      b.classList.toggle('on', b.dataset.lang === lang());
    });
    document.documentElement.lang = lang();
  }
  $$('.ctl .lb button').forEach(function (b) {
    b.addEventListener('click', function () {
      try { localStorage.setItem('mtLang', b.dataset.lang); } catch (e) {}
      applyLang(); rerender();
    });
  });

  /* ── identity storage ── */
  var IKEY = 'mt-lookout-identity';
  function loadId() {
    try { return JSON.parse(localStorage.getItem(IKEY) || 'null') || freshId(); }
    catch (e) { return freshId(); }
  }
  function freshId() {
    return { b1: {}, b2: {}, b3: {}, b4: {}, b5: {}, b6: {}, b7: {},
      attributes: {}, attributeSources: {}, skills: [], interests: [],
      topValues: [], constraints: [], dismissed: [], shortlist: [], statement: null };
  }
  function saveId() { try { localStorage.setItem(IKEY, JSON.stringify(ID)); } catch (e) {} }
  var ID = loadId();

  /* ── router ── */
  var views = ['home', 'discover', 'identity', 'directions', 'explore', 'shortlist'];
  function go(v, opts) {
    if (views.indexOf(v) === -1) v = 'home';
    location.hash = '#/' + v + (opts ? '/' + opts : '');
  }
  function route() {
    var h = (location.hash || '#/home').replace('#/', '').split('/');
    var v = views.indexOf(h[0]) !== -1 ? h[0] : 'home';
    $$('.view').forEach(function (x) { x.classList.remove('on'); });
    $('#v-' + v).classList.add('on');
    if (v === 'discover') renderBlock();
    if (v === 'identity') renderIdentity();
    if (v === 'directions') renderDirections();
    if (v === 'explore') renderExplore(h.slice(1));
    if (v === 'shortlist') renderShortlist();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  $$('[data-go]').forEach(function (b) {
    b.addEventListener('click', function () { go(b.getAttribute('data-go')); });
  });
  $('#startBtn').addEventListener('click', function () { go('discover'); });
  function rerender() { applyLang(); route(); }

  /* ═══ QUESTIONNAIRE — seven blocks, one per screen ═══ */
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

  var qIndex = 0;
  var BLOCKS = [
    { title: { en: 'Where you are', id: 'Posisimu saat ini' },
      sub: { en: 'The basics — so eligibility checks can be honest later.', id: 'Dasar-dasarnya — agar cek kelayakan nanti bisa jujur.' },
      render: function (host) {
        var b = ID.b1;
        host.innerHTML =
          '<div class="qgrid">' +
          sel('q_status', { en: 'Current status', id: 'Status saat ini' }, [
            ['student', { en: 'Student', id: 'Mahasiswa' }], ['final-year', { en: 'Final-year student', id: 'Mahasiswa tingkat akhir' }],
            ['fresh-grad', { en: 'Graduated in the last 12 months', id: 'Lulus dalam 12 bulan terakhir' }],
            ['searching', { en: 'Graduated over a year ago', id: 'Lulus lebih dari setahun lalu' }],
            ['working', { en: 'Working, considering a change', id: 'Bekerja, mempertimbangkan perubahan' }]], b.status) +
          sel('q_degree', { en: 'Education level', id: 'Jenjang pendidikan' }, [
            ['s1', 'S1'], ['d3_d4', 'D3 / D4'], ['s2', 'S2'], ['other', { en: 'Other', id: 'Lainnya' }]], b.degree) +
          sel('q_uni', { en: 'Institution type', id: 'Jenis institusi' }, [
            ['ptn', 'PTN'], ['pts', 'PTS'], ['abroad', { en: 'Overseas', id: 'Luar negeri' }], ['other', { en: 'Other', id: 'Lainnya' }]], b.uni) +
          num('q_gradyear', { en: 'Graduation year (actual or expected)', id: 'Tahun lulus (aktual atau perkiraan)' }, b.gradYear, 2015, 2032) +
          num('q_age', { en: 'Age', id: 'Usia' }, b.age, 16, 60) +
          num('q_gpa', { en: 'GPA (0–4, optional)', id: 'IPK (0–4, opsional)' }, b.gpa, 0, 4, '0.01') +
          txt('q_field', { en: 'Field of study', id: 'Bidang studi' }, b.field) +
          '</div>' +
          '<div class="field" style="margin-top:16px"><label data-en="Are you looking in your field of study, or open to something else?" data-id="Kamu mencari di bidang studimu, atau terbuka pada hal lain?">Are you looking in your field of study, or open to something else?</label>' +
          '<div class="tags" id="q_align">' +
          tagBtn('in-field', { en: 'In my field', id: 'Di bidangku' }, b.align === 'in-field') +
          tagBtn('open', { en: 'Open to something different', id: 'Terbuka pada hal berbeda' }, b.align === 'open') +
          tagBtn('unsure', { en: "I honestly don't know", id: 'Jujur, aku tidak tahu' }, b.align === 'unsure') +
          '</div></div>' +
          (b.align === 'open' || b.align === 'unsure' ?
            '<div class="bridge" style="margin-top:16px" data-en="<b>About half of Indonesian graduates work outside their field of study.</b> That is the norm here, not a personal failure — and it is not the same as wasting your years. A degree builds a way of thinking that transfers further than the subject does. That is what we&rsquo;re going to find." data-id="<b>Sekitar separuh lulusan Indonesia bekerja di luar bidang studinya.</b> Itu hal lumrah di sini, bukan kegagalan pribadi — dan bukan berarti tahun-tahunmu sia-sia. Gelar membangun cara berpikir yang menjangkau lebih jauh dari mata kuliahnya. Itulah yang akan kita temukan."><b>About half of Indonesian graduates work outside their field of study.</b> That is the norm here, not a personal failure…</div>' : '');
        wireTagsSingle('q_align', function (v) {
          /* preserve typed inputs before this block re-renders */
          BLOCKS[0].collect();
          ID.b1.align = v; ID.b1.done = true; saveId(); renderBlock();
        });
      },
      collect: function () {
        var b = ID.b1;
        b.status = val('q_status'); b.degree = val('q_degree'); b.uni = val('q_uni');
        b.gradYear = num_('q_gradyear'); b.age = num_('q_age'); b.gpa = num_('q_gpa');
        b.field = val('q_field');
        b.done = !!(b.status || b.degree || b.field);
      } },
    { title: { en: "What you've done", id: 'Apa yang pernah kamu lakukan' },
      sub: { en: 'Work, internships, organisations, projects, competitions — academic and organisational experience counts fully.', id: 'Kerja, magang, organisasi, proyek, lomba — pengalaman akademik dan organisasi dihitung penuh.' },
      render: function (host) {
        var b = ID.b2;
        host.innerHTML =
          area('q_exp1', { en: 'Tell us one experience — what did you actually do?', id: 'Ceritakan satu pengalaman — apa yang benar-benar kamu kerjakan?' }, b.exp1,
            { en: 'e.g. Treasurer of the student association: built the budget, chased the money, presented the report nobody else wanted to write.', id: 'mis. Bendahara himpunan: menyusun anggaran, mengejar dana, mempresentasikan laporan yang tak ada yang mau menulisnya.' }) +
          area('q_exp2', { en: 'Another one, if you have it (optional)', id: 'Satu lagi, kalau ada (opsional)' }, b.exp2, null);
      },
      collect: function () {
        ID.b2.exp1 = val('q_exp1'); ID.b2.exp2 = val('q_exp2');
        ID.b2.done = !!(ID.b2.exp1 && ID.b2.exp1.trim().length > 10);
      } },
    { title: { en: "What you're good at", id: 'Apa yang kamu kuasai' },
      sub: { en: 'Tap what you can do. Then — the more important question — double-tap what people actually ask you for help with.', id: 'Ketuk yang kamu bisa. Lalu — pertanyaan yang lebih penting — ketuk dua kali yang benar-benar sering dimintai bantuan.' },
      render: function (host) {
        var picked = ID.skills || [];
        host.innerHTML = '<div class="tags" id="q_skills">' + SKILLS.map(function (s) {
          var f = picked.filter(function (p) { return p.id === s[0]; })[0];
          return '<button type="button" class="tag' + (f ? ' on' : '') + '" data-id="' + s[0] + '">' + L(s[1]) +
            (f && f.asked ? '<span class="ask">★ ' + (lang() === 'id' ? 'diminta' : 'asked') + '</span>' : '') + '</button>';
        }).join('') + '</div>' +
        '<p class="note" style="margin-top:12px" data-en="★ marks the skills people come to you for. Revealed demand is worth more than self-assessment." data-id="★ menandai keahlian yang sering dimintai orang. Permintaan nyata lebih berharga daripada penilaian diri.">★ marks the skills people come to you for.</p>';
        $$('#q_skills .tag').forEach(function (t) {
          t.addEventListener('click', function () {
            var id = t.dataset.id;
            var f = ID.skills.filter(function (p) { return p.id === id; })[0];
            if (!f) ID.skills.push({ id: id, label: L(SKILLS.filter(function (s) { return s[0] === id; })[0][1]), asked: false });
            else if (!f.asked) f.asked = true;
            else ID.skills = ID.skills.filter(function (p) { return p.id !== id; });
            ID.b3.done = ID.skills.length > 0; saveId();
            BLOCKS[2].render(host); applyLang();
          });
        });
      },
      collect: function () { ID.b3.done = ID.skills.length > 0; } },
    { title: { en: "What you're drawn to", id: 'Apa yang menarikmu' },
      sub: { en: 'Interests first, then the question that matters most.', id: 'Minat dulu, lalu pertanyaan yang paling penting.' },
      render: function (host) {
        host.innerHTML = '<div class="tags" id="q_interests">' + INTERESTS.map(function (s) {
          return tagBtn(s[0], s[1], (ID.interests || []).indexOf(s[0]) !== -1);
        }).join('') + '</div>' +
        area('q_flow', { en: 'Describe a time you lost track of hours. What were you doing?', id: 'Ceritakan saat kamu lupa waktu. Apa yang sedang kamu kerjakan?' }, ID.b4.flow,
          { en: 'Flow-state recall beats any interest checklist.', id: 'Ingatan momen flow mengalahkan daftar minat mana pun.' });
        wireTagsMulti('q_interests', ID.interests, function () { ID.b4.done = ID.interests.length > 0; saveId(); });
      },
      collect: function () {
        ID.b4.flow = val('q_flow');
        ID.b4.done = ID.interests.length > 0 || !!(ID.b4.flow && ID.b4.flow.length > 10);
      } },
    { title: { en: 'How you like to work', id: 'Cara kerja favoritmu' },
      sub: { en: 'Each pair forces a trade-off. There are no right answers, only honest ones.', id: 'Setiap pasangan memaksa pilihan. Tak ada jawaban benar, hanya yang jujur.' },
      render: function (host) {
        host.innerHTML = SLIDERS.map(function (s) {
          var v = (ID.b5[s[0]] != null) ? ID.b5[s[0]] : 50;
          return '<div class="slider-row"><div class="slider-lbls"><b>' + L(s[1]) + '</b><b>' + L(s[2]) + '</b></div>' +
            '<input type="range" min="0" max="100" value="' + v + '" data-key="' + s[0] + '"></div>';
        }).join('');
        $$('input[type=range]', host).forEach(function (r) {
          r.addEventListener('input', function () { ID.b5[r.dataset.key] = +r.value; ID.b5.done = true; saveId(); });
        });
      },
      collect: function () { ID.b5.done = SLIDERS.some(function (s) { return ID.b5[s[0]] != null; }); } },
    { title: { en: 'What matters to you', id: 'Apa yang penting bagimu' },
      sub: { en: 'Pick your top five — order doesn&rsquo;t matter, honesty does.', id: 'Pilih lima teratas — urutan tak penting, kejujuran penting.' },
      render: function (host) {
        host.innerHTML = '<div class="ranklist" id="q_values">' + VALUES.map(function (v) {
          return tagBtn(v, { en: F.valueLabel(v, 'en'), id: F.valueLabel(v, 'id') }, (ID.topValues || []).indexOf(v) !== -1);
        }).join('') + '</div><p class="note" style="margin-top:10px"><span id="vCount"></span></p>';
        wireTagsMulti('q_values', ID.topValues, function () {
          if (ID.topValues.length > 5) ID.topValues.length = 5;
          ID.b6.done = ID.topValues.length >= 3; saveId();
          $('#vCount').textContent = ID.topValues.length + ' / 5';
          $$('#q_values .tag').forEach(function (t) {
            t.classList.toggle('on', ID.topValues.indexOf(t.dataset.id) !== -1);
          });
        });
        $('#vCount').textContent = (ID.topValues || []).length + ' / 5';
      },
      collect: function () { ID.b6.done = ID.topValues.length >= 3; } },
    { title: { en: "What's in the way", id: 'Apa yang menghalangi' },
      sub: { en: 'These are real determinants of career choice in Indonesia — and nobody else asks. Optional, always.', id: 'Ini penentu nyata pilihan karier di Indonesia — dan tidak ada yang menanyakannya. Selalu opsional.' },
      render: function (host) {
        host.innerHTML = '<div class="tags" id="q_constraints">' + CONSTRAINTS.map(function (c) {
          return tagBtn(c[0], c[1], (ID.constraints || []).indexOf(c[0]) !== -1);
        }).join('') + '</div>';
        wireTagsMulti('q_constraints', ID.constraints, function () { ID.b7.done = true; saveId(); });
      },
      collect: function () { ID.b7.done = true; } }
  ];

  function sel(id, label, opts, cur) {
    return '<div class="field"><label>' + L(label) + '</label><select id="' + id + '">' +
      '<option value=""></option>' + opts.map(function (o) {
        var v = o[0], txt = typeof o[1] === 'string' ? o[1] : L(o[1]);
        return '<option value="' + v + '"' + (cur === v ? ' selected' : '') + '>' + txt + '</option>';
      }).join('') + '</select></div>';
  }
  function txt(id, label, cur) {
    return '<div class="field"><label>' + L(label) + '</label><input type="text" id="' + id + '" value="' + (cur || '') + '"></div>';
  }
  function num(id, label, cur, min, max, step) {
    return '<div class="field"><label>' + L(label) + '</label><input type="number" id="' + id + '" value="' + (cur != null ? cur : '') + '" min="' + min + '" max="' + max + '"' + (step ? ' step="' + step + '"' : '') + '></div>';
  }
  function area(id, label, cur, ph) {
    return '<div class="field" style="margin-top:14px"><label>' + L(label) + '</label><textarea id="' + id + '"' +
      (ph ? ' placeholder="' + L(ph).replace(/"/g, '&quot;') + '"' : '') + '>' + (cur || '') + '</textarea></div>';
  }
  function tagBtn(id, label, on) {
    return '<button type="button" class="tag' + (on ? ' on' : '') + '" data-id="' + id + '">' + L(label) + '</button>';
  }
  function wireTagsSingle(boxId, cb) {
    $$('#' + boxId + ' .tag').forEach(function (t) {
      t.addEventListener('click', function () {
        $$('#' + boxId + ' .tag').forEach(function (x) { x.classList.remove('on'); });
        t.classList.add('on'); cb(t.dataset.id);
      });
    });
  }
  function wireTagsMulti(boxId, arr, cb) {
    $$('#' + boxId + ' .tag').forEach(function (t) {
      t.addEventListener('click', function () {
        var i = arr.indexOf(t.dataset.id);
        if (i === -1) arr.push(t.dataset.id); else arr.splice(i, 1);
        t.classList.toggle('on', i === -1); cb();
      });
    });
  }
  function val(id) { var e = $('#' + id); return e ? e.value : null; }
  function num_(id) { var v = val(id); return v === '' || v == null ? null : +v; }

  function collectCurrent() { BLOCKS[qIndex].collect(); deriveAttributes(); saveId(); }

  function deriveAttributes() {
    var a = {}, s = {};
    var b5 = ID.b5;
    function put(attr, v, src) { a[attr] = Math.max(0, Math.min(100, Math.round(v))); s[attr] = src; }
    if (b5.structure_ambiguity != null) { put('structured', 100 - b5.structure_ambiguity, 'block_5'); put('ambiguity_tolerant', b5.structure_ambiguity, 'block_5'); }
    if (b5.independent_collab != null) { put('autonomous', 100 - b5.independent_collab, 'block_5'); put('people_facing', b5.independent_collab, 'block_5'); }
    if (b5.steady_intense != null) put('pace_intensity', b5.steady_intense, 'block_5');
    if (b5.build_advise != null) put('commercial', b5.build_advise, 'block_5');
    if (b5.focus_variety != null) put('detail_oriented', 100 - b5.focus_variety, 'block_5');
    var analyticalSkills = ['statistics', 'sql-excel', 'financial-modelling', 'problem-solving', 'accounting', 'programming'];
    var creativeSkills = ['design-tools', 'content-creation', 'writing'];
    var techSkills = ['programming', 'design-tools'];
    var hit = function (list) { return ID.skills.filter(function (x) { return list.indexOf(x.id) !== -1; }).length; };
    if (ID.skills.length) {
      put('analytical', 35 + hit(analyticalSkills) * 14, 'block_3');
      put('creative', 30 + hit(creativeSkills) * 20, 'block_3');
      put('technical_depth', 25 + hit(techSkills) * 28, 'block_3');
    }
    ID.attributes = a; ID.attributeSources = s;
  }

  function renderBlock() {
    var host = $('#qCard'), blk = BLOCKS[qIndex];
    $('#qStep').textContent = (qIndex + 1) + ' / 7';
    $('#qBarFill').style.width = ((qIndex + 1) / 7 * 100) + '%';
    host.innerHTML = '<h2>' + L(blk.title) + '</h2><p class="qsub">' + L(blk.sub) + '</p><div id="qBody"></div>';
    blk.render($('#qBody'));
    applyLang();
    $('#qPrev').style.visibility = qIndex === 0 ? 'hidden' : 'visible';
  }
  $('#qPrev').addEventListener('click', function () { collectCurrent(); if (qIndex > 0) { qIndex--; renderBlock(); } });
  $('#qNext').addEventListener('click', function () {
    collectCurrent();
    if (qIndex < 6) { qIndex++; renderBlock(); }
    else { buildStatement(); go('identity'); }
  });
  $('#qSkip').addEventListener('click', function () {
    if (qIndex < 6) { qIndex++; renderBlock(); } else { buildStatement(); go('identity'); }
  });

  /* ═══ IDENTITY STATEMENT — traceable, editable ═══ */
  function tr(txt, block) {
    var lbl = L(F.BLOCK_LABELS[block]);
    return '<span class="tr" title="' + (lang() === 'id' ? 'dari blok: ' : 'from: ') + lbl + '">' + txt + '</span>';
  }
  function buildStatement() {
    var b1 = ID.b1, en = [], idn = [];
    var statusMap = {
      'student': ['a student', 'seorang mahasiswa'], 'final-year': ['a final-year student', 'mahasiswa tingkat akhir'],
      'fresh-grad': ['a recent graduate', 'lulusan baru'], 'searching': ['a graduate', 'seorang lulusan'],
      'working': ['a professional considering a change', 'profesional yang mempertimbangkan perubahan']
    };
    var st = statusMap[b1.status] || ['someone', 'seseorang'];
    en.push("You're " + tr(st[0] + (b1.field ? ' in ' + b1.field : ''), 'block_1') + '.');
    idn.push('Kamu adalah ' + tr(st[1] + (b1.field ? ' di bidang ' + b1.field : ''), 'block_1') + '.');
    if (ID.b2.exp1) {
      en.push('In your own words: ' + tr('&ldquo;' + esc(ID.b2.exp1.slice(0, 160)) + (ID.b2.exp1.length > 160 ? '…' : '') + '&rdquo;', 'block_2'));
      idn.push('Dengan katamu sendiri: ' + tr('&ldquo;' + esc(ID.b2.exp1.slice(0, 160)) + (ID.b2.exp1.length > 160 ? '…' : '') + '&rdquo;', 'block_2'));
    }
    var asked = ID.skills.filter(function (x) { return x.asked; }).map(function (x) { return x.label; });
    var have = ID.skills.map(function (x) { return x.label; });
    if (asked.length) {
      en.push('People come to you for help with ' + tr(asked.slice(0, 3).join(', '), 'block_3') + ' — revealed demand, not just self-belief.');
      idn.push('Orang-orang datang meminta bantuanmu soal ' + tr(asked.slice(0, 3).join(', '), 'block_3') + ' — permintaan nyata, bukan sekadar keyakinan diri.');
    } else if (have.length) {
      en.push('You rate yourself capable in ' + tr(have.slice(0, 3).join(', '), 'block_3') + '.');
      idn.push('Kamu menilai dirimu mampu dalam ' + tr(have.slice(0, 3).join(', '), 'block_3') + '.');
    }
    if (ID.b4.flow) {
      en.push('You lose track of time when ' + tr(esc(ID.b4.flow.slice(0, 120)), 'block_4') + '.');
      idn.push('Kamu lupa waktu saat ' + tr(esc(ID.b4.flow.slice(0, 120)), 'block_4') + '.');
    }
    if (ID.topValues.length) {
      var vEn = ID.topValues.slice(0, 3).map(function (v) { return F.valueLabel(v, 'en'); }).join(', ');
      var vId = ID.topValues.slice(0, 3).map(function (v) { return F.valueLabel(v, 'id'); }).join(', ');
      en.push('What you want from work, in your own ranking: ' + tr(vEn, 'block_6') + '.');
      idn.push('Yang kamu inginkan dari pekerjaan, menurut peringkatmu sendiri: ' + tr(vId, 'block_6') + '.');
    }
    if (ID.constraints.indexOf('family') !== -1) {
      en.push('And ' + tr('you want to be able to explain to your family what you actually do', 'block_7') + ' — that matters, and it shaped what we show you.');
      idn.push('Dan ' + tr('kamu ingin bisa menjelaskan kepada keluargamu apa pekerjaanmu sebenarnya', 'block_7') + ' — itu penting, dan itu membentuk apa yang kami tampilkan.');
    }
    ID.statementHTML = { en: en.join(' '), id: idn.join(' ') };
    if (!ID.statement) ID.statement = null; /* user-edited plain text overrides */
    saveId();
  }
  function esc(s) { return (s || '').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function renderIdentity() {
    if (!ID.statementHTML) buildStatement();
    var box = $('#stmtBox');
    if (ID.statement) { box.textContent = ID.statement; }
    else box.innerHTML = (ID.statementHTML && ID.statementHTML[lang()]) ||
      '<span class="note" data-en="Answer a few blocks first and your statement appears here." data-id="Jawab beberapa blok dulu, lalu pernyataanmu muncul di sini.">Answer a few blocks first…</span>';
    applyLang();
  }
  $('#stmtEditBtn').addEventListener('click', function () {
    var ta = $('#stmtEdit');
    if (ta.style.display === 'block') {
      ID.statement = ta.value.trim() || null; saveId();
      ta.style.display = 'none'; renderIdentity();
      this.querySelector('[data-en]') && (this.innerHTML = lang() === 'id' ? 'Sunting' : 'Edit');
    } else {
      ta.value = ID.statement || $('#stmtBox').textContent.trim();
      ta.style.display = 'block';
      this.innerHTML = lang() === 'id' ? 'Simpan' : 'Save';
    }
  });
  $('#stmtCopyBtn').addEventListener('click', function () {
    var t = ID.statement || $('#stmtBox').textContent.trim();
    if (navigator.clipboard) navigator.clipboard.writeText(t);
    this.innerHTML = lang() === 'id' ? 'Tersalin ✓' : 'Copied ✓';
    var self = this;
    setTimeout(function () { self.innerHTML = lang() === 'id' ? 'Salin' : 'Copy'; }, 1600);
  });

  /* ═══ DIRECTIONS ═══ */
  function bandChip(band) {
    var cls = { strong: 'chip-strong', worth: 'chip-worth', stretch: 'chip-stretch' }[band.id];
    return '<span class="chip ' + cls + '"><i></i>' + (lang() === 'id' ? band.id_ : band.en) + '</span>';
  }
  function renderDirections() {
    var host = $('#dirList'), hz = $('#horizon');
    var res = F.analyseAll(ID, G, lang());
    $$('.hz-pt', hz).forEach(function (n) { n.remove(); });
    if (res.insufficient) {
      host.innerHTML = '<div class="empty">' +
        '<b data-en="We don&rsquo;t know enough about you yet." data-id="Kami belum cukup mengenalmu.">We don&rsquo;t know enough about you yet.</b><br>' +
        '<span data-en="You&rsquo;ve made a start — but it isn&rsquo;t enough to point you anywhere useful. Four more minutes on what you enjoy and how you like to work will change what we can show you." data-id="Kamu sudah memulai — tetapi belum cukup untuk menunjukkan arah yang berguna. Empat menit lagi tentang apa yang kamu nikmati dan cara kerjamu akan mengubah apa yang bisa kami tampilkan.">You&rsquo;ve made a start…</span><br><br>' +
        '<button class="btn btn-dawn" onclick="location.hash=\'#/discover\'"><span data-en="Continue the questionnaire" data-id="Lanjutkan kuesioner">Continue the questionnaire</span> →</button></div>';
      applyLang(); return;
    }
    var diffY = { 'accessible': 78, 'competitive': 52, 'highly-competitive': 26 };
    var prepX = { 'accessible': 18, 'competitive': 48, 'highly-competitive': 80 };
    res.shown.forEach(function (r, i) {
      var d = r.direction;
      var pt = document.createElement('button');
      pt.className = 'hz-pt';
      pt.style.left = Math.min(88, Math.max(10, prepX[d.entry_difficulty] + (i % 3) * 7)) + '%';
      pt.style.top = diffY[d.entry_difficulty] + '%';
      pt.textContent = L(d.name);
      pt.addEventListener('click', function () {
        var el = document.getElementById('dir-' + d.id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
      hz.appendChild(pt);
    });
    var cards = res.shown.map(function (r, i) { return dirCard(r, i + 1, false); });
    if (res.unexpected) cards.push(dirCard(res.unexpected, null, true));
    host.innerHTML = cards.join('');
    wireDirCards(host);
    applyLang();
  }
  function dirCard(r, n, unexpected) {
    var d = r.direction;
    var based = lang() === 'id'
      ? 'Berdasarkan ' + r.inputCount + ' hal yang kamu ceritakan'
      : 'Based on ' + r.inputCount + ' things you told us';
    var diffLbl = { 'accessible': { en: 'Accessible entry', id: 'Pintu masuk terbuka' }, 'competitive': { en: 'Competitive entry', id: 'Seleksi kompetitif' }, 'highly-competitive': { en: 'Highly competitive entry', id: 'Seleksi sangat kompetitif' } }[d.entry_difficulty];
    var demandLbl = { growing: { en: 'Demand growing', id: 'Permintaan tumbuh' }, stable: { en: 'Demand stable', id: 'Permintaan stabil' }, contracting: { en: 'Demand contracting', id: 'Permintaan menyusut' }, unknown: { en: 'Demand unknown', id: 'Permintaan belum diketahui' } }[d.market_demand];
    var inSl = ID.shortlist.indexOf(d.id) !== -1;
    return '<div class="card dir-card' + (unexpected ? ' unex' : '') + '" id="dir-' + d.id + '">' +
      '<div class="dir-head">' +
      (unexpected
        ? '<span class="star">✦</span><span class="dn">' + (lang() === 'id' ? 'TAK TERDUGA' : 'UNEXPECTED') + '</span>'
        : '<span class="dn">0' + n + '</span>') +
      '<h3>' + L(d.name) + '</h3>' + bandChip(r.band) +
      '<span class="based">' + based + '</span></div>' +
      '<p style="font-size:13px;color:var(--text-sub);margin-top:10px">' + L(d.summary) + '</p>' +
      (unexpected ? '<p class="note" style="margin-top:8px">' + (lang() === 'id'
        ? 'Kebanyakan orang dengan profilmu tidak pernah menjumpai arah ini. Kami menampilkannya karena buktimu bersinggungan dengannya. Bisa jadi keliru — butuh empat menit untuk tahu.'
        : 'Most people with your profile never encounter this. We&rsquo;re showing it because your evidence overlaps with it. It may be wrong. It takes four minutes to find out.') + '</p>' : '') +
      '<div class="ev-sec toward"><h4>' + (lang() === 'id' ? 'Yang menunjuk ke arah ini' : 'What points towards this') + '</h4>' +
      r.evidence.map(function (e) {
        return '<div class="ev"><span class="m">✓</span><span>' + e.text +
          '<span class="src">· ' + (lang() === 'id' ? 'dari ' : 'from ') + '&ldquo;' + L(F.BLOCK_LABELS[e.src]) + '&rdquo;</span></span></div>';
      }).join('') + '</div>' +
      '<div class="ev-sec away"><h4>' + (lang() === 'id' ? 'Yang menunjuk menjauh' : 'What points away') + '</h4>' +
      r.counterEvidence.map(function (e) {
        return '<div class="ev"><span class="m">⚠</span><span>' + e.text +
          '<span class="src">· ' + (lang() === 'id' ? 'dari ' : 'from ') + '&ldquo;' + L(F.BLOCK_LABELS[e.src]) + '&rdquo;</span></span></div>';
      }).join('') + '</div>' +
      '<div class="dir-meta"><span class="chip chip-worth"><i></i>' + L(diffLbl) + '</span>' +
      '<span class="chip chip-worth"><i></i>' + L(demandLbl) + '</span></div>' +
      '<div class="dir-actions">' +
      '<button class="btn btn-dawn mini" data-act="explore" data-dir="' + d.id + '">' + (lang() === 'id' ? 'Jelajahi arah ini →' : 'Explore this direction →') + '</button>' +
      '<button class="btn btn-ghost mini" data-act="short" data-dir="' + d.id + '">' + (inSl ? '✓ ' : '') + (lang() === 'id' ? 'Daftar pendek' : 'Shortlist') + '</button>' +
      '<button class="btn btn-ghost mini" data-act="dismiss" data-dir="' + d.id + '">' + (lang() === 'id' ? 'Bukan untukku' : 'Not for me') + '</button>' +
      '</div></div>';
  }
  function wireDirCards(host) {
    $$('[data-act]', host).forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.dataset.dir, act = b.dataset.act;
        if (act === 'explore') go('explore', 'd/' + id);
        if (act === 'dismiss') { ID.dismissed.push(id); saveId(); renderDirections(); }
        if (act === 'short') {
          var i = ID.shortlist.indexOf(id);
          if (i !== -1) ID.shortlist.splice(i, 1);
          else if (ID.shortlist.length >= 3) { alert(lang() === 'id' ? 'Daftar pendek maksimal tiga — itu disengaja.' : 'The shortlist caps at three — on purpose.'); return; }
          else ID.shortlist.push(id);
          saveId(); go('shortlist');
        }
      });
    });
  }

  /* ═══ EXPLORE ═══ */
  function crumb(items) {
    $('#xCrumbs').innerHTML = items.map(function (it, i) {
      return i === items.length - 1 ? '<span>' + it[0] + '</span>'
        : '<button data-h="' + it[1] + '">' + it[0] + '</button><span>›</span>';
    }).join('');
    $$('#xCrumbs button').forEach(function (b) {
      b.addEventListener('click', function () { location.hash = b.dataset.h; });
    });
  }
  function renderExplore(path) {
    var body = $('#xBody');
    var tEx = lang() === 'id' ? 'Jelajah' : 'Explore';
    if (!path.length || !path[0]) {
      crumb([[tEx, '#/explore']]);
      body.innerHTML = '<p class="kick">' + (lang() === 'id' ? 'Industri → Fungsi → Arah → Perusahaan' : 'Industry → Function → Direction → Company') + '</p>' +
        '<h2 class="h-serif" style="font-size:clamp(1.4rem,3vw,2rem);margin-bottom:16px">' + (lang() === 'id' ? 'Tiga klaster untuk memulai' : 'Three clusters to start with') + '</h2>' +
        '<div class="x-cols">' + G.industries.map(function (ind) {
          var count = G.directions.filter(function (d) { return d.industry_ids.indexOf(ind.id) !== -1; }).length;
          return '<button class="x-item" data-h="#/explore/i/' + ind.id + '"><span class="xi">' + count + '</span><span><b>' + L(ind.name) + '</b><span class="xs">' + L(ind.desc) + '</span></span></button>';
        }).join('') + '</div>' +
        '<h3 style="font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:var(--dawn);margin:30px 0 12px">' + (lang() === 'id' ? 'Atau langsung ke perusahaan' : 'Or go straight to companies') + '</h3>' +
        '<div class="x-cols">' + G.companies.map(function (c) {
          return '<button class="x-item" data-h="#/explore/c/' + c.id + '"><span class="xi">' + c.name.charAt(0) + '</span><span><b>' + c.name + '</b><span class="xs">' + L(G.industries.filter(function (i2) { return i2.id === c.industry_id; })[0].name) + '</span></span></button>';
        }).join('') + '</div>';
    } else if (path[0] === 'i') {
      var ind = G.industries.filter(function (x) { return x.id === path[1]; })[0];
      crumb([[tEx, '#/explore'], [L(ind.name), '']]);
      var dirs = G.directions.filter(function (d) { return d.industry_ids.indexOf(ind.id) !== -1; });
      body.innerHTML = '<h2 class="h-serif" style="font-size:clamp(1.3rem,2.6vw,1.8rem);margin-bottom:14px">' + L(ind.name) + '</h2>' +
        '<div class="x-cols">' + dirs.map(function (d) {
          return '<button class="x-item" data-h="#/explore/d/' + d.id + '"><span class="xi">→</span><span><b>' + L(d.name) + '</b><span class="xs">' + L(d.summary).slice(0, 90) + '…</span></span></button>';
        }).join('') + '</div>';
    } else if (path[0] === 'd') {
      renderDirectionDetail(path[1], body, tEx);
    } else if (path[0] === 'c') {
      renderCompany(path[1], body, tEx);
    }
    applyLang();
    $$('#xBody [data-h]').forEach(function (b) {
      b.addEventListener('click', function () { location.hash = b.dataset.h; });
    });
  }

  function renderDirectionDetail(id, body, tEx) {
    var d = G.directions.filter(function (x) { return x.id === id; })[0];
    if (!d) { body.innerHTML = ''; return; }
    crumb([[tEx, '#/explore'], [L(d.name), '']]);
    var companies = G.companies.filter(function (c) { return d.industry_ids.indexOf(c.industry_id) !== -1; });
    var inSl = ID.shortlist.indexOf(d.id) !== -1;
    body.innerHTML =
      '<h2 class="h-serif" style="font-size:clamp(1.4rem,3vw,2rem)">' + L(d.name) + '</h2>' +
      '<p style="font-size:14px;color:var(--text-sub);margin:8px 0 18px">' + L(d.summary) + '</p>' +
      '<div class="card" style="margin-bottom:14px"><h4 class="kick">' + (lang() === 'id' ? 'Sehari dalam pekerjaan ini' : 'A day in this work') + '</h4>' +
      '<p style="font-size:13.5px;color:var(--text-sub);font-family:var(--serif);font-style:italic">' + L(d.day_in_life) + '</p></div>' +
      '<div class="card" style="margin-bottom:14px"><h4 class="kick">' + (lang() === 'id' ? 'Kompromi yang jujur' : 'The honest trade-offs') + '</h4>' +
      d.tradeoffs.map(function (t) { return '<div class="ev"><span class="m" style="color:var(--amber)">⚠</span><span>' + L(t) + '</span></div>'; }).join('') +
      '<h4 class="kick" style="margin-top:14px">' + (lang() === 'id' ? 'Mitos umum' : 'Common myths') + '</h4>' +
      d.common_myths.map(function (t) { return '<div class="ev"><span class="m" style="color:var(--dawn)">✕</span><span>' + L(t) + '</span></div>'; }).join('') + '</div>' +
      '<h3 style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--dawn);margin:22px 0 10px">' + (lang() === 'id' ? 'Perusahaan di wilayah ini' : 'Companies in this territory') + '</h3>' +
      '<div class="x-cols">' + companies.slice(0, 8).map(function (c) {
        return '<button class="x-item" data-h="#/explore/c/' + c.id + '"><span class="xi">' + c.name.charAt(0) + '</span><span><b>' + c.name + '</b></span></button>';
      }).join('') + '</div>' +
      '<div class="dir-actions" style="margin-top:22px">' +
      '<button class="btn btn-ghost" id="ddShort">' + (inSl ? '✓ ' : '') + (lang() === 'id' ? 'Masukkan daftar pendek' : 'Add to shortlist') + '</button>' +
      '<a class="btn btn-gold" href="../the-map/?from=lookout"><span>' + (lang() === 'id' ? 'Ukur jaraknya — The Map' : 'Measure the gap — The Map') + '</span> →</a></div>';
    $('#ddShort').addEventListener('click', function () {
      var i = ID.shortlist.indexOf(d.id);
      if (i !== -1) ID.shortlist.splice(i, 1);
      else if (ID.shortlist.length >= 3) { alert(lang() === 'id' ? 'Daftar pendek maksimal tiga.' : 'The shortlist caps at three.'); return; }
      else ID.shortlist.push(d.id);
      saveId(); go('shortlist');
    });
  }

  /* ── eligibility against the user's profile ── */
  function eligRows(prog) {
    var rows = [], b1 = ID.b1;
    (prog.eligibility || []).forEach(function (r) {
      var st = 'ok', extra = '';
      if (r.check === 'age_max' && r.value) {
        var cap = b1.degree === 'd3_d4' ? r.value.d3_d4 : r.value.s1;
        if (b1.age == null) { st = 'warn'; extra = lang() === 'id' ? 'usia belum diisi' : 'age not provided'; }
        else if (b1.age > cap) { st = 'warn'; extra = lang() === 'id' ? 'saat ini di luar kriteria yang tercantum' : 'currently outside the stated criteria'; }
        else extra = (lang() === 'id' ? 'usiamu ' : 'you are ') + b1.age + (lang() === 'id' ? ', dalam batas' : ', within the cap');
      }
      if (r.check === 'gpa_min' && r.value) {
        var min = b1.uni === 'pts' ? r.value.pts : r.value.ptn;
        if (b1.gpa == null) { st = 'warn'; extra = lang() === 'id' ? 'IPK belum diisi' : 'GPA not provided'; }
        else if (b1.gpa < min) { st = 'warn'; extra = lang() === 'id' ? 'saat ini di bawah ambang tercantum (' + min + ')' : 'currently below the stated threshold (' + min + ')'; }
        else extra = 'IPK ' + b1.gpa + ' ≥ ' + min;
      }
      if (r.check === 'grad_window') {
        extra = L(r.note);
      }
      if (r.check === 'gpa_note') { extra = L(r.note); }
      rows.push('<div class="elig-row"><span class="st ' + st + '">' + (st === 'ok' ? '✓' : '⚠') + '</span><span><b>' + L(r.label) + '</b>' + (extra ? ' — ' + extra : '') + '</span></div>');
    });
    return rows.join('');
  }

  /* ── readiness via the LMS bridge ── */
  function readiness(prog) {
    if (!prog.stages) return '';
    var packDone = lmsPct('the-pack'), ropeDone = lmsPct('the-rope');
    var rows = prog.stages.map(function (s) {
      var t = G.stageTypes[s.type];
      var pct = t && t.pillar === 'the-pack' ? packDone : t && t.pillar === 'the-rope' ? ropeDone : 0;
      var lbl = pct >= 70 ? (lang() === 'id' ? 'Siap' : 'Ready') : pct >= 30 ? (lang() === 'id' ? 'Hampir' : 'Nearly there') : (lang() === 'id' ? 'Belum mulai' : 'Not started');
      return '<div class="rd-row"><div class="lbl"><span>' + s.seq + ' · ' + L(s.name) + '</span><span>' + lbl + '</span></div>' +
        '<div class="rd-bar"><i style="width:' + Math.max(4, pct) + '%"></i></div></div>';
    }).join('');
    return '<div class="card" style="margin-top:14px"><h4 class="kick">' + (lang() === 'id' ? 'Kesiapanmu terhadap proses ini' : 'Your readiness for this process') + '</h4>' +
      '<p class="note" style="margin-bottom:12px">' + (lang() === 'id' ? 'Dihitung dari kemajuan modulmu di The Pack dan The Rope pada perangkat ini.' : 'Derived from your module progress in The Pack and The Rope on this device.') + '</p>' + rows + '</div>';
  }
  function lmsPct(slug) {
    try {
      var mods = JSON.parse(localStorage.getItem('mt-lms-mods:' + slug) || '{}');
      var totals = { 'the-pack': 9, 'the-rope': 9 };
      return Math.round(Object.keys(mods).length / totals[slug] * 100);
    } catch (e) { return 0; }
  }

  function renderCompany(id, body, tEx) {
    var c = G.companies.filter(function (x) { return x.id === id; })[0];
    if (!c) { body.innerHTML = ''; return; }
    crumb([[tEx, '#/explore'], [c.name, '']]);
    var progs = G.programmes.filter(function (p) { return p.company_id === c.id; });
    var bumn = G.programmes.filter(function (p) { return p.id === 'bumn-rekrutmen-bersama'; })[0];
    var isBumnCo = ['telkom', 'mandiri', 'bri', 'bni'].indexOf(c.id) !== -1;
    var html =
      '<h2 class="h-serif" style="font-size:clamp(1.4rem,3vw,2rem)">' + c.name + '</h2>' +
      '<p style="font-size:14px;color:var(--text-sub);margin:8px 0 4px">' + L(c.description) + '</p>' +
      '<p class="note"><a href="' + c.website + '" target="_blank" rel="noopener">' + c.website.replace('https://', '') + '</a></p>';
    if (progs.length) {
      progs.forEach(function (p) {
        html += '<div class="card" style="margin-top:16px">' +
          '<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center"><h3 style="font-size:16px;flex:1">' + L(p.name) + '</h3>' +
          '<span class="chip chip-free"><i></i>' + p.source_type + ' · ' + p.confidence + '</span></div>' +
          '<p style="font-size:13px;color:var(--text-sub);margin:8px 0 4px">' + L(p.desc) + '</p>' +
          '<p class="note">' + L(p.length) + ' · ' + L(p.window) + '</p>';
        if (p.stages) {
          html += '<h4 class="kick" style="margin-top:16px">' + (lang() === 'id' ? 'Proses rekrutmen' : 'The hiring process') + '</h4><div class="journey">' +
            p.stages.map(function (s) {
              var t = G.stageTypes[s.type];
              var prep = t && t.pillar ? '<a class="prep" href="../' + t.pillar + '/">' + (lang() === 'id' ? 'Persiapkan: ' : 'Prepare: ') +
                (t.pillar === 'the-pack' ? 'The Pack' : 'The Rope') + ' · ' + L(t.module) + ' →</a>' : '';
              return '<div class="jstage"><div class="jnum">' + s.seq + '</div><div class="jbody"><h4>' + L(s.name) + '</h4>' +
                '<p>' + (lang() === 'id' ? 'Menilai: ' : 'Assesses: ') + L(s.assess) + '</p>' +
                (s.failure ? '<p class="fail">' + (lang() === 'id' ? 'Kegagalan paling umum: ' : 'Most common failure: ') + L(s.failure) + '</p>' : '') +
                prep + '</div></div>';
            }).join('') + '</div>';
          if (p.eligibility && p.eligibility.length) {
            html += '<h4 class="kick" style="margin-top:8px">' + (lang() === 'id' ? 'Apakah kamu memenuhi syarat?' : 'Are you eligible?') + '</h4><div class="elig">' + eligRows(p) + '</div>' +
              '<div class="bridge">' + (lang() === 'id'
                ? 'IPK sudah tetap, dan itu bukan keseluruhan gambaran. Yang menggerakkan penilaian di tahap ini adalah kemampuan yang terbukti: proyek portofolio, prestasi lomba kasus, atau magang yang relevan. <a href="../the-pack/" style="color:var(--gold)">Bangun buktinya di The Pack →</a>'
                : 'GPA is fixed now, and it is not the whole picture. What moves the needle at this stage is demonstrated capability: a portfolio project, a case-competition placing, or a relevant internship. <a href="../the-pack/" style="color:var(--gold)">Build the evidence in The Pack →</a>') + '</div>';
          }
          html += readiness(p);
        } else {
          html += '<div class="empty" style="margin-top:14px">' + (lang() === 'id'
            ? '<b>Proses seleksi tahap demi tahap belum terdokumentasi.</b><br>Kami hanya menampilkan proses yang bersumber — tidak pernah mengarang. Jika kamu pernah melewati proses ini, bantu orang berikutnya.'
            : '<b>The stage-by-stage process is not yet documented.</b><br>We only show sourced processes — never invented ones. If you have been through this process, help the next person.') + '</div>';
        }
        if (p.eligibility && p.eligibility.length && !p.stages) {
          html += '<h4 class="kick" style="margin-top:16px">' + (lang() === 'id' ? 'Syarat yang tercantum' : 'Stated criteria') + '</h4><div class="elig">' + eligRows(p) + '</div>';
        }
        html += '</div>';
      });
    } else {
      html += '<div class="empty" style="margin-top:16px">' + (lang() === 'id'
        ? '<b>Belum ada program masuk yang terdokumentasi untuk perusahaan ini.</b><br>Kami hanya mencantumkan program yang bersumber resmi. Periksa laman karier resmi mereka — dan jika kamu tahu prosesnya, bantu orang berikutnya.'
        : '<b>No entry programme documented for this company yet.</b><br>We only list programmes with official sources. Check their official careers page — and if you know the process, help the next person.') + '</div>';
    }
    if (isBumnCo && bumn) {
      html += '<div class="card" style="margin-top:16px"><h3 style="font-size:15px">' + L(bumn.name) + '</h3>' +
        '<p style="font-size:13px;color:var(--text-sub);margin:6px 0 8px">' + L(bumn.desc) + '</p>' +
        '<div class="elig">' + eligRows(bumn) + '</div>';
      if (ID.b1.age != null && ID.b1.age <= 27) {
        html += '<div class="bridge">' + (lang() === 'id'
          ? 'Usiamu ' + ID.b1.age + '. Program BUMN membatasi pelamar S1 di usia 27. Itu bukan untuk mencemaskanmu — itu alasan urutan lebih penting daripada usaha. Menyiapkan dalam urutan yang benar bernilai berbulan-bulan, dan bulan adalah bahan pembentuk jendela ini.'
          : 'You are ' + ID.b1.age + '. BUMN programmes cap S1 applicants at 27. This isn&rsquo;t meant to alarm you — it&rsquo;s why sequence matters more than effort. Preparing in the right order is worth months, and months are the thing this window is made of.') + '</div>';
      }
      html += '</div>';
    }
    html += '<div class="prov"><b>ℹ ' + (lang() === 'id' ? 'Dari mana informasi ini' : 'Where this comes from') + '</b><br>' +
      (lang() === 'id' ? 'Tipe sumber: ' : 'Source type: ') + c.source_type + ' · ' +
      (lang() === 'id' ? 'terakhir ditinjau ' : 'last reviewed ') + c.last_reviewed +
      (progs.length ? '<br>' + (lang() === 'id' ? 'Program: ' : 'Programmes: ') + progs.map(function (p) { return '<a href="' + p.source_url + '" target="_blank" rel="noopener">' + p.source_url.replace('https://', '') + '</a> · ' + (lang() === 'id' ? 'diverifikasi ' : 'verified ') + p.last_verified; }).join(' · ') : '') +
      '<br>' + (lang() === 'id'
        ? 'Metanoia tidak berafiliasi dengan, didukung oleh, atau bermitra dengan perusahaan ini. Informasi dihimpun dari sumber publik.'
        : 'Metanoia is not affiliated with, endorsed by, or partnered with this company. Information is compiled from public sources.') + '</div>';
    body.innerHTML = html;
  }

  /* ═══ SHORTLIST + COMPARE + COMMIT ═══ */
  function renderShortlist() {
    var box = $('#slBox'), cmp = $('#cmpBox'), commit = $('#commitBox');
    var items = ID.shortlist.map(function (id) {
      return G.directions.filter(function (d) { return d.id === id; })[0];
    }).filter(Boolean);
    if (!items.length) {
      box.innerHTML = '<div class="empty">' + (lang() === 'id'
        ? 'Daftar pendekmu kosong. Jelajahi arah kariermu dan tambahkan maksimal tiga.'
        : 'Your shortlist is empty. Explore your directions and add up to three.') +
        '<br><br><button class="btn btn-dawn" onclick="location.hash=\'#/directions\'">' + (lang() === 'id' ? 'Lihat arah →' : 'See directions →') + '</button></div>';
      cmp.innerHTML = ''; commit.innerHTML = ''; applyLang(); return;
    }
    box.innerHTML = items.map(function (d, i) {
      var r = F.analyseDirection(ID, d, lang());
      return '<div class="sl-row"><span class="n">0' + (i + 1) + '</span><b>' + L(d.name) + '</b>' +
        (r.band ? bandChip(r.band) : '') +
        '<button class="rm" data-id="' + d.id + '" aria-label="Remove">✕</button></div>';
    }).join('') + (items.length < 3 ? '<div class="sl-row"><span class="n">—</span><span class="note">' +
      (lang() === 'id' ? 'Tambah arah ketiga dari halaman arah atau jelajah.' : 'Add a third from the directions or explore pages.') + '</span></div>' : '');
    $$('.rm', box).forEach(function (b) {
      b.addEventListener('click', function () {
        ID.shortlist = ID.shortlist.filter(function (x) { return x !== b.dataset.id; });
        saveId(); renderShortlist();
      });
    });
    if (items.length >= 2) {
      var rows = [
        [lang() === 'id' ? 'Pita kecocokan' : 'Fit band', function (d) { var r = F.analyseDirection(ID, d, lang()); return r.band ? (lang() === 'id' ? r.band.id_ : r.band.en) : '—'; }],
        [lang() === 'id' ? 'Kesulitan masuk' : 'Entry difficulty', function (d) { return { 'accessible': lang() === 'id' ? 'Terbuka' : 'Accessible', 'competitive': lang() === 'id' ? 'Kompetitif' : 'Competitive', 'highly-competitive': lang() === 'id' ? 'Sangat kompetitif' : 'Highly competitive' }[d.entry_difficulty]; }],
        [lang() === 'id' ? 'Permintaan pasar' : 'Market demand', function (d) { return d.market_demand; }],
        [lang() === 'id' ? 'Konflik dengan nilaimu' : 'Conflicts with your values', function (d) {
          var r = F.analyseDirection(ID, d, lang());
          var v = r.counterEvidence.filter(function (e) { return e.kind === 'values'; });
          return v.length ? '⚠ ' + (lang() === 'id' ? 'ya — lihat kartu arah' : 'yes — see the direction card') : '—';
        }],
        [lang() === 'id' ? 'Kompromi utama' : 'Headline trade-off', function (d) { return L(d.tradeoffs[0]); }]
      ];
      cmp.innerHTML = '<div class="cmp-scroll"><table class="cmp"><tr><th></th>' +
        items.map(function (d) { return '<th>' + L(d.name) + '</th>'; }).join('') + '</tr>' +
        rows.map(function (row) {
          return '<tr><td>' + row[0] + '</td>' + items.map(function (d) { return '<td>' + row[1](d) + '</td>'; }).join('') + '</tr>';
        }).join('') + '</table></div>';
    } else cmp.innerHTML = '';
    commit.innerHTML = '<h3>' + (lang() === 'id' ? 'Pilih gunungmu' : 'Choose your mountain') + '</h3>' +
      '<p>' + (lang() === 'id'
        ? 'Kamu bisa mengubahnya nanti — kebanyakan orang begitu, dan itu wajar. Tapi persiapan hanya bekerja saat diarahkan pada sesuatu yang spesifik.'
        : 'You can change this later — most people do, and that&rsquo;s fine. But preparation only works when it&rsquo;s aimed at something specific.') + '</p>' +
      items.map(function (d) {
        return '<a class="btn btn-gold" style="margin:4px" href="../the-map/?direction=' + d.id + '">' +
          (lang() === 'id' ? 'Tetapkan ' : 'Set ') + L(d.name) + (lang() === 'id' ? ' sebagai arahku' : ' as my direction') + ' →</a>';
      }).join('') +
      '<p class="note" style="margin-top:14px">' + (lang() === 'id' ? 'Masih menimbang? Terus jelajahi.' : 'Still deciding? Keep exploring.') + '</p>';
    applyLang();
  }

  /* boot */
  applyLang();
  route();
})();
