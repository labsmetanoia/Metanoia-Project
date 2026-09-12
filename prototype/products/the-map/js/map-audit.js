/**
 * THE MAP — PERSONAL AUDIT (on-device diagnostic)
 * -----------------------------------------------
 * Module 1's application layer: a guided self-audit across values,
 * energy, strengths-with-evidence, habit baseline and mission — producing
 * a development report with module recommendations and a bridge into
 * The Range's questionnaire and CV analysis.
 *
 * Honesty contract: everything here is self-reported and computed
 * on-device. No psychometric claims are made — the report mirrors the
 * user's own answers back as a working map, and says so.
 * Storage: localStorage 'mt_map_audit'.
 * Skin: js/tool-shell.js + css/tool-shell.css (shared with the other instruments).
 */
(function () {
  'use strict';
  var LS = 'mt_map_audit';
  var SH = window.MT_SHELL;
  if (!SH) return;

  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function T(en, id) { return lang() === 'id' ? id : en; }
  function store() { try { return JSON.parse(localStorage.getItem(LS) || '{}'); } catch (e) { return {}; } }
  function save(s) { try { s.updatedAt = Date.now(); localStorage.setItem(LS, JSON.stringify(s)); } catch (e) {} }
  var el = SH.el, esc = SH.esc;

  /* ─── content ─── */
  var VALUES = [
    ['growth', 'Growth & learning', 'Pertumbuhan & belajar', 'seed', 'Keep evolving', 'Terus berkembang'],
    ['security', 'Stability & security', 'Stabilitas & keamanan', 'shield', 'Build a solid foundation', 'Bangun fondasi yang kokoh'],
    ['autonomy', 'Autonomy', 'Otonomi', 'mountain', 'Freedom to decide', 'Bebas memutuskan'],
    ['impact', 'Impact on others', 'Dampak bagi orang lain', 'heart', 'Create positive change', 'Ciptakan perubahan positif'],
    ['craft', 'Mastery of a craft', 'Penguasaan keahlian', 'diamond', 'Be truly excellent', 'Menjadi sungguh unggul'],
    ['recognition', 'Recognition', 'Pengakuan', 'star', 'Be valued for meaningful work', 'Dihargai atas kerja bermakna'],
    ['balance', 'Work–life balance', 'Keseimbangan hidup', 'balance', 'Live a fulfilling life', 'Hidup yang utuh'],
    ['earning', 'Earning power', 'Daya penghasilan', 'coins', 'Create financial freedom', 'Ciptakan kebebasan finansial'],
    ['team', 'Team & belonging', 'Tim & rasa memiliki', 'users', 'Be part of something bigger', 'Menjadi bagian dari yang lebih besar'],
    ['variety', 'Variety & novelty', 'Variasi & kebaruan', 'sparkles', 'Keep it interesting', 'Tetap menarik'],
    ['leading', 'Leading people', 'Memimpin orang', 'people', 'Empower and develop', 'Memberdayakan dan mengembangkan'],
    ['adventure', 'Adventure & risk', 'Petualangan & risiko', 'compass', 'Embrace the unknown', 'Rangkul yang tak pasti'],
    ['creating', 'Creating new things', 'Menciptakan hal baru', 'bulb', 'Turn ideas into reality', 'Wujudkan gagasan'],
    ['service', 'Service & care', 'Pelayanan & kepedulian', 'handshake', 'Make life better for others', 'Buat hidup orang lain lebih baik'],
    ['problems', 'Hard problems', 'Masalah sulit', 'puzzle', 'Tackle complex challenges', 'Taklukkan tantangan rumit'],
    ['integrity', 'Integrity & fairness', 'Integritas & keadilan', 'shieldTick', 'Do what is right', 'Lakukan yang benar']
  ];
  var ACTIVITIES = [
    ['present', 'Presenting to a group', 'Presentasi di depan kelompok', 'mic'],
    ['analyse', 'Analysing data or numbers', 'Menganalisis data atau angka', 'chart'],
    ['write', 'Writing long-form documents', 'Menulis dokumen panjang', 'pen'],
    ['organise', 'Organising people and schedules', 'Mengatur orang dan jadwal', 'calendar'],
    ['build', 'Building something with my hands or code', 'Membangun sesuatu dengan tangan atau kode', 'cog'],
    ['sell', 'Persuading or selling', 'Membujuk atau menjual', 'handshake'],
    ['teach', 'Teaching or explaining', 'Mengajar atau menjelaskan', 'graduate'],
    ['research', 'Deep research on one topic', 'Riset mendalam satu topik', 'search'],
    ['network', 'Meeting new people', 'Bertemu orang baru', 'users'],
    ['detail', 'Careful detail work', 'Kerja detail yang teliti', 'eye'],
    ['improvise', 'Improvising under pressure', 'Berimprovisasi di bawah tekanan', 'zap']
  ];
  var HABITS = [
    ['recovery', 'After a setback I run a deliberate recovery routine instead of avoiding or spiralling.',
      'Setelah kemunduran aku menjalankan rutinitas pemulihan yang disengaja, bukan menghindar atau terpuruk.', '1.1', 'refresh'],
    ['proactive', 'I respond to problems with "what can I do?" rather than "who is to blame?".',
      'Aku merespons masalah dengan "apa yang bisa kulakukan?" bukan "siapa yang salah?".', '2.2', 'zap'],
    ['mission', 'I have a written direction — mission and 3-year outcome — that guides my choices.',
      'Aku punya arah tertulis — misi dan hasil 3 tahun — yang memandu pilihanku.', '2.3', 'compass'],
    ['priority', 'I schedule important-but-not-urgent work before my week fills up.',
      'Aku menjadwalkan kerja penting-tapi-tak-mendesak sebelum mingguku penuh.', '2.4', 'calendar'],
    ['capture', 'Every task and promise I make lands in one trusted system, not my memory.',
      'Setiap tugas dan janji masuk ke satu sistem tepercaya, bukan ingatanku.', '5.3', 'list'],
    ['energy', 'I defend a sleep window and move most days, even in busy weeks.',
      'Aku menjaga jendela tidur dan bergerak hampir tiap hari, bahkan di minggu sibuk.', '5.1', 'battery']
  ];
  var MODULE_RECO = {
    recovery: ['1', 'Self-Awareness and Personal Audit', 'Kesadaran Diri dan Audit Pribadi'],
    proactive: ['2', 'Self-Leadership Foundations', 'Fondasi Kepemimpinan Diri'],
    mission: ['2', 'Self-Leadership Foundations', 'Fondasi Kepemimpinan Diri'],
    priority: ['2', 'Self-Leadership Foundations', 'Fondasi Kepemimpinan Diri'],
    capture: ['5', 'Relationships, Well-Being, and Digital Capability', 'Hubungan, Kesejahteraan, dan Kemampuan Digital'],
    energy: ['5', 'Relationships, Well-Being, and Digital Capability', 'Hubungan, Kesejahteraan, dan Kemampuan Digital']
  };
  var STEPS = [
    ['values', 'Values', 'Nilai'],
    ['energy', 'Energy', 'Energi'],
    ['strengths', 'Strengths', 'Kekuatan'],
    ['habits', 'Habits', 'Kebiasaan'],
    ['mission', 'Mission', 'Misi'],
    ['report', 'Report', 'Laporan']
  ];
  var SIGN = [{ en: 'A clearer you', id: 'Dirimu yang lebih jernih' }, { en: 'A brighter tomorrow', id: 'Esok yang lebih cerah' }];

  var shell = null, stepIdx = 0;

  function build() {
    if (shell) return;
    shell = SH.mount({
      id: 'mapAudit', product: 'The Map', tool: { en: 'Personal Audit', id: 'Audit Pribadi' },
      scene: '../../assets/bg/portal.jpg', scenePos: '60% 35%',
      onClose: close
    });
  }

  function stepDone(key, s) {
    if (key === 'values') return (s.values || []).length >= 3;
    if (key === 'energy') return Object.keys(s.energy || {}).length >= 6;
    if (key === 'strengths') return (s.strengths || []).some(function (x) { return x.name; });
    if (key === 'habits') return Object.keys(s.habits || {}).length === HABITS.length;
    if (key === 'mission') return !!(s.mission && s.mission.text);
    return false;
  }
  function paintTabs() {
    var s = store();
    shell.setTabs(STEPS.map(function (sp, i) {
      return { key: i, num: i + 1, label: { en: sp[1], id: sp[2] }, on: i === stepIdx, done: stepDone(sp[0], s) };
    }), function (k) { stepIdx = k; render(); });
  }

  /* bottom hand-off strip: back + continue, with a sense of where you are */
  function navStrip(main, opts) {
    opts = opts || {};
    var acts = [];
    if (stepIdx > 0) acts.push(SH.btn({ en: 'Back', id: 'Kembali' }, { ghost: true, iconL: 'arrowL', onClick: function () { stepIdx--; render(); } }));
    acts.push(SH.btn(opts.next || { en: 'Continue', id: 'Lanjut' }, { icon: 'arrow', onClick: function () { stepIdx++; render(); } }));
    var nextStep = STEPS[stepIdx + 1];
    main.appendChild(SH.cta({
      icon: opts.icon || 'sparkles',
      title: opts.title || T('Step ' + (stepIdx + 1) + ' of 5', 'Langkah ' + (stepIdx + 1) + ' dari 5'),
      text: opts.text || (nextStep ? T('Next: ' + nextStep[1] + '. Your answers are saved on this device as you go.', 'Berikutnya: ' + nextStep[2] + '. Jawabanmu tersimpan di perangkat ini seiring kamu mengisi.') : ''),
      actions: acts
    }));
  }

  /* ─── step renderers ─── */
  function rValues() {
    var s = store();
    s.values = s.values || [];
    var hero = SH.hero({
      kicker: { en: 'Step 1 · Values', id: 'Langkah 1 · Nilai' },
      title: { en: ['What do you refuse', 'to trade away?'], id: ['Apa yang tak mau', 'kamu tukar?'] },
      sub: { en: 'Pick the 3–5 values that must be present in your working life for it to feel right. Your picks are ordered — first is strongest.', id: 'Pilih 3–5 nilai yang harus hadir dalam kehidupan kerjamu agar terasa benar. Pilihanmu berurutan — pertama paling kuat.' },
      chip: { en: 'Tip from Lesson 2.3: values are tested by trade-offs, not by liking the words. For each pick, recall one real decision where you paid a price for it.', id: 'Tips dari Pelajaran 2.3: nilai diuji oleh pertukaran, bukan oleh menyukai katanya. Untuk tiap pilihan, ingat satu keputusan nyata saat kamu membayar harga untuknya.' },
      chipIcon: 'bulb',
      tagline: [{ en: 'Your values', id: 'Nilai-nilaimu' }, { en: 'shape your journey.', id: 'membentuk perjalananmu.' }],
      quote: { en: 'Know what matters most, so you can build a life that matters.', id: 'Ketahui apa yang paling penting, agar kamu bisa membangun hidup yang berarti.' },
      sign: SIGN
    });
    var main = el('div', 'ts-main');
    main.appendChild(SH.hd({ en: 'Sixteen values', id: 'Enam belas nilai' }, { en: 'Tap to pick, tap again to release', id: 'Ketuk untuk memilih, ketuk lagi untuk melepas' }, s.values.length + ' / 5 ' + T('picked', 'terpilih')));
    var grid = el('div', 'ts-tiles');
    VALUES.forEach(function (v) {
      var idx = s.values.indexOf(v[0]);
      grid.appendChild(SH.tile({ icon: v[3], title: T(v[1], v[2]), hint: T(v[4], v[5]), on: idx > -1, ord: idx > -1 ? idx + 1 : null,
        disabled: idx === -1 && s.values.length >= 5,
        onPick: function () {
          var s2 = store(); s2.values = s2.values || [];
          var i = s2.values.indexOf(v[0]);
          if (i > -1) s2.values.splice(i, 1);
          else if (s2.values.length < 5) s2.values.push(v[0]);
          save(s2); render();
        } }));
    });
    main.appendChild(grid);
    navStrip(main, { icon: 'heart', title: s.values.length < 3 ? T('Pick at least three to continue', 'Pilih setidaknya tiga untuk lanjut') : T(s.values.length + ' values, in your order', s.values.length + ' nilai, sesuai urutanmu') });
    return SH.stage(hero, main);
  }

  function rEnergy() {
    var s = store();
    s.energy = s.energy || {};
    var done = Object.keys(s.energy).length;
    var hero = SH.hero({
      kicker: { en: 'Step 2 · Energy', id: 'Langkah 2 · Energi' },
      title: { en: ['What fills you,', 'what empties you?'], id: ['Apa yang mengisimu,', 'apa yang mengurasmu?'] },
      sub: { en: 'For each activity, mark whether it usually energises you, drains you, or neither. Answer from remembered experience, not from what sounds impressive.', id: 'Untuk tiap aktivitas, tandai apakah biasanya memberimu energi, mengurasmu, atau netral. Jawab dari pengalaman yang diingat, bukan dari yang terdengar keren.' },
      chip: { en: 'Direction rule from Module 6: prefer paths where the daily work sits in your “energises” column.', id: 'Aturan arah dari Modul 6: utamakan jalur yang kerja hariannya ada di kolom “memberi energi”.' },
      chipIcon: 'battery',
      tagline: [{ en: 'Energy is the honest', id: 'Energi adalah pembaca' }, { en: 'reader of fit.', id: 'kecocokan yang jujur.' }],
      quote: { en: 'The work that fills you is the work you can sustain.', id: 'Kerja yang mengisimu adalah kerja yang bisa kamu jaga.' },
      sign: SIGN
    });
    var main = el('div', 'ts-main');
    main.appendChild(SH.hd({ en: 'Eleven activities', id: 'Sebelas aktivitas' }, { en: 'Mark each one from memory', id: 'Tandai masing-masing dari ingatan' }, done + ' / ' + ACTIVITIES.length + ' ' + T('marked', 'ditandai')));
    ACTIVITIES.forEach(function (a, i) {
      var ctl = SH.tri({ value: s.energy[a[0]], options: [
        ['drain', { en: 'Drains', id: 'Menguras' }, 'on-drain', 'battery'],
        ['mid', { en: 'Neutral', id: 'Netral' }, 'on-mid', 'balance'],
        ['gain', { en: 'Energises', id: 'Memberi energi' }, 'on-gain', 'zap']],
        onPick: function (k) { var s2 = store(); s2.energy = s2.energy || {}; s2.energy[a[0]] = k; save(s2); render(); } });
      main.appendChild(SH.item({ num: i + 1, icon: a[3], title: T(a[1], a[2]), on: !!s.energy[a[0]], ctl: ctl }));
    });
    navStrip(main, { icon: 'battery', title: done < 6 ? T('Mark at least six to continue', 'Tandai setidaknya enam untuk lanjut') : T('Energy map in progress', 'Peta energi sedang dibangun') });
    return SH.stage(hero, main);
  }

  function rStrengths() {
    var s = store();
    s.strengths = s.strengths || [{}, {}, {}];
    var hero = SH.hero({
      kicker: { en: 'Step 3 · Strengths', id: 'Langkah 3 · Kekuatan' },
      title: { en: ['Claims need', 'evidence'], id: ['Klaim butuh', 'bukti'] },
      sub: { en: 'Name up to three strengths — and for each, the concrete evidence a stranger could verify: a result, an artefact, something someone said.', id: 'Sebutkan hingga tiga kekuatan — dan untuk masing-masing, bukti konkret yang bisa diverifikasi orang asing: hasil, artefak, ucapan seseorang.' },
      chip: { en: 'Lesson 1.3’s rule: no evidence, lower rating.', id: 'Aturan Pelajaran 1.3: tanpa bukti, nilai lebih rendah.' },
      chipIcon: 'shieldTick',
      tagline: [{ en: 'A strength is a claim', id: 'Kekuatan adalah klaim' }, { en: 'with a witness.', id: 'yang punya saksi.' }],
      quote: { en: 'What you can prove, you can build on.', id: 'Yang bisa kamu buktikan, bisa kamu bangun.' },
      sign: SIGN
    });
    var main = el('div', 'ts-main');
    var ICONS = ['trophy', 'star', 'diamond'];
    s.strengths.forEach(function (stg, i) {
      var body = el('div'); body.style.cssText = 'display:flex;flex-direction:column;gap:12px;width:100%';
      var inp = SH.input('text', { value: stg.name || '', placeholder: { en: 'e.g. Structuring messy problems', id: 'mis. Menstrukturkan masalah kusut' } });
      var ta = SH.input('textarea', { value: stg.evidence || '', placeholder: { en: 'e.g. Rebuilt the org’s event budget model; treasurer adopted it for two later events', id: 'mis. Membangun ulang model anggaran acara organisasi; bendahara memakainya untuk dua acara berikutnya' } });
      ta.style.minHeight = '84px';
      function persist() {
        var s2 = store(); s2.strengths = s2.strengths || [{}, {}, {}];
        s2.strengths[i] = { name: inp.value.trim(), evidence: ta.value.trim(), conf: (s2.strengths[i] || {}).conf };
        save(s2); paintTabs();
      }
      inp.addEventListener('change', persist); ta.addEventListener('change', persist);
      body.appendChild(SH.field({ label: T('Strength ', 'Kekuatan ') + (i + 1), input: inp, icon: ICONS[i] }));
      body.appendChild(SH.field({ label: { en: 'Evidence', id: 'Bukti' }, input: ta }));
      var sc = el('div'); sc.style.cssText = 'display:flex;flex-wrap:wrap;gap:10px 20px;align-items:center;justify-content:space-between';
      sc.appendChild(el('span', 'ts-lbl', esc(T('How strong is the evidence?', 'Seberapa kuat buktinya?'))));
      sc.appendChild(SH.scale({ value: stg.conf, lo: { en: 'A feeling', id: 'Perasaan' }, hi: { en: 'Verified results', id: 'Hasil terverifikasi' },
        onPick: function (k) { persist(); var s2 = store(); s2.strengths[i].conf = k; save(s2); render(); } }));
      body.appendChild(sc);
      main.appendChild(SH.item({ num: i + 1, icon: ICONS[i], title: stg.name ? stg.name : T('Strength ' + (i + 1), 'Kekuatan ' + (i + 1)), on: !!stg.name, stack: true, ctl: body,
        text: stg.conf ? '<span class="ts-pill">' + esc(T('evidence strength', 'kekuatan bukti')) + ' ' + stg.conf + '/5</span>' : '' }));
    });
    navStrip(main, { icon: 'trophy' });
    return SH.stage(hero, main);
  }

  function rHabits() {
    var s = store();
    s.habits = s.habits || {};
    var done = Object.keys(s.habits).length;
    var hero = SH.hero({
      kicker: { en: 'Step 4 · Habit baseline', id: 'Langkah 4 · Garis dasar kebiasaan' },
      title: { en: ['The systems behind', 'the person'], id: ['Sistem di balik', 'orangnya'] },
      sub: { en: 'Rate how true each statement is for the last month — 1 = rarely, 5 = consistently.', id: 'Nilai seberapa benar tiap pernyataan selama sebulan terakhir — 1 = jarang, 5 = konsisten.' },
      chip: { en: 'This is your baseline, not your verdict; each habit maps to the module that trains it.', id: 'Ini garis dasarmu, bukan vonismu; tiap kebiasaan terpeta ke modul yang melatihnya.' },
      chipIcon: 'refresh',
      tagline: [{ en: 'Habits are the', id: 'Kebiasaan adalah' }, { en: 'architecture of a day.', id: 'arsitektur sebuah hari.' }],
      quote: { en: 'You do not rise to your goals; you fall to your systems.', id: 'Kamu tidak naik ke tujuanmu; kamu jatuh ke sistemmu.' },
      sign: SIGN
    });
    var main = el('div', 'ts-main');
    main.appendChild(SH.hd({ en: 'Six habits', id: 'Enam kebiasaan' }, { en: 'Rate the last month', id: 'Nilai sebulan terakhir' }, done + ' / ' + HABITS.length + ' ' + T('rated', 'ternilai')));
    HABITS.forEach(function (h, i) {
      main.appendChild(SH.item({ num: i + 1, icon: h[4], title: T('Lesson ' + h[3], 'Pelajaran ' + h[3]), text: esc(T(h[1], h[2])), on: !!s.habits[h[0]],
        ctl: SH.scale({ value: s.habits[h[0]], lo: { en: 'Rarely', id: 'Jarang' }, hi: { en: 'Consistently', id: 'Konsisten' },
          onPick: function (k) { var s2 = store(); s2.habits = s2.habits || {}; s2.habits[h[0]] = k; save(s2); render(); } }) }));
    });
    navStrip(main, { icon: 'refresh', title: done < HABITS.length ? T('Rate all six to continue', 'Nilai keenamnya untuk lanjut') : T('Baseline set', 'Garis dasar terisi') });
    return SH.stage(hero, main);
  }

  function rMission() {
    var s = store();
    s.mission = s.mission || {};
    var hero = SH.hero({
      kicker: { en: 'Step 5 · Mission', id: 'Langkah 5 · Misi' },
      title: { en: ['The first', 'creation'], id: ['Penciptaan', 'pertama'] },
      sub: { en: 'From Lessons 1.2 and 2.3: one learning intention, one mission sentence, one 3-year outcome.', id: 'Dari Pelajaran 1.2 dan 2.3: satu niat belajar, satu kalimat misi, satu hasil 3 tahun.' },
      chip: { en: 'Pencil, not stone — you will revise these.', id: 'Pensil, bukan batu — kamu akan merevisinya.' },
      chipIcon: 'pen',
      tagline: [{ en: 'Direction first,', id: 'Arah dulu,' }, { en: 'then the steps.', id: 'baru langkahnya.' }],
      quote: { en: 'Begin with the end in mind, then write it down.', id: 'Mulailah dengan tujuan akhir di benak, lalu tuliskan.' },
      sign: SIGN
    });
    var main = el('div', 'ts-main');
    [['text', 'compass', { en: 'Mission sentence', id: 'Kalimat misi' }, { en: 'The contribution you want to be trusted with', id: 'Kontribusi yang ingin dipercayakan padamu' },
      { en: 'e.g. Help organisations make honest decisions with data', id: 'mis. Membantu organisasi mengambil keputusan jujur dengan data' }],
     ['outcome', 'flag', { en: '3-year outcome', id: 'Hasil 3 tahun' }, { en: 'Domain, level, evidence, protected constraint', id: 'Ranah, level, bukti, batas yang dijaga' },
      { en: 'e.g. Own end-to-end analyses in a fintech team, portfolio of 5 shipped projects, health intact', id: 'mis. Memiliki analisis ujung-ke-ujung di tim fintech, portofolio 5 proyek rilis, kesehatan terjaga' }],
     ['intention', 'calendar', { en: 'Learning intention', id: 'Niat belajar' }, { en: 'Behaviour, frequency, deadline, weekly signal', id: 'Perilaku, frekuensi, tenggat, sinyal mingguan' },
      { en: 'e.g. One Map module + one audit update weekly until 1 June, checked every Sunday', id: 'mis. Satu modul Map + satu pembaruan audit tiap minggu sampai 1 Juni, dicek tiap Minggu' }]
    ].forEach(function (f, i) {
      var ta = SH.input('textarea', { value: s.mission[f[0]] || '', placeholder: f[4] });
      ta.style.minHeight = '90px';
      ta.addEventListener('change', function () { var s2 = store(); s2.mission = s2.mission || {}; s2.mission[f[0]] = ta.value.trim(); save(s2); paintTabs(); });
      main.appendChild(SH.item({ num: i + 1, icon: f[1], title: f[2], text: esc(SH.txt(f[3])), on: !!s.mission[f[0]], stack: true, ctl: ta }));
    });
    navStrip(main, { icon: 'doc', next: { en: 'Build my report', id: 'Susun laporanku' }, title: { en: 'Ready for your report', id: 'Siap untuk laporanmu' },
      text: { en: 'The report mirrors your own answers back as a working map — computed on this device, stored only in this browser.', id: 'Laporan memantulkan jawabanmu sendiri sebagai peta kerja — dihitung di perangkat ini, tersimpan hanya di peramban ini.' } });
    return SH.stage(hero, main);
  }

  function rReport() {
    var s = store();
    var hero = SH.hero({
      kicker: { en: 'Your Personal Audit', id: 'Audit Pribadimu' },
      title: { en: ['A working map,', 'in your own words'], id: ['Peta kerja,', 'dengan kata-katamu sendiri'] },
      sub: { en: 'Everything below mirrors your own answers back. It is a map to act on and revise, not a psychometric verdict.', id: 'Semua di bawah memantulkan jawabanmu sendiri. Ini peta untuk ditindaklanjuti dan direvisi, bukan vonis psikometrik.' },
      chip: { en: 'Computed on this device, stored only in this browser.', id: 'Dihitung di perangkat ini, tersimpan hanya di peramban ini.' },
      chipIcon: 'lock',
      tagline: [{ en: 'Read it, act on it,', id: 'Baca, tindak lanjuti,' }, { en: 'revise it.', id: 'revisi.' }],
      art: { img: '../../assets/bg/map.jpg', pos: '50% 40%', nodes: [
        { x: 20, y: 78, big: true, label: { en: 'Audit today', id: 'Audit hari ini' } },
        { x: 52, y: 54, label: { en: 'Module 1–2', id: 'Modul 1–2' } },
        { x: 76, y: 26, flag: true, caps: true, label: { en: 'Re-audit', id: 'Audit ulang' } }] },
      quote: { en: 'The delta between two audits is your progress.', id: 'Selisih antara dua audit adalah kemajuanmu.' },
      sign: SIGN
    });
    var main = el('div', 'ts-main');

    /* values */
    var vals = (s.values || []).map(function (k) { var v = VALUES.filter(function (x) { return x[0] === k; })[0]; return v ? T(v[1], v[2]) : k; });
    var cv = SH.card({ kick: { en: 'Values — in your order', id: 'Nilai — sesuai urutanmu' }, title: { en: 'What you refuse to trade away', id: 'Yang tak mau kamu tukar' } });
    if (vals.length) { var tags = el('div', 'ts-tags'); vals.forEach(function (v, i) { tags.appendChild(el('span', 'ts-tagc', '<i>' + (i + 1) + '</i>' + esc(v))); }); cv.appendChild(tags); }
    else cv.appendChild(SH.note(esc(T('No values picked yet — step 1 is waiting.', 'Belum ada nilai terpilih — langkah 1 menunggu.'))));
    main.appendChild(cv);

    /* energy */
    var gains = [], drains = [];
    ACTIVITIES.forEach(function (a) { var v = (s.energy || {})[a[0]]; if (v === 'gain') gains.push(T(a[1], a[2])); if (v === 'drain') drains.push(T(a[1], a[2])); });
    var ce = SH.card({ kick: { en: 'Energy map', id: 'Peta energi' }, title: { en: 'What fills you, what empties you', id: 'Yang mengisimu, yang mengurasmu' } });
    var two = el('div', 'ts-two');
    var g = el('div'); g.appendChild(el('div', 'ts-kick', esc(T('Energises you', 'Memberimu energi'))));
    (gains.length ? gains : [T('— nothing marked yet', '— belum ada yang ditandai')]).forEach(function (x) { var li = el('div', 'ts-li gain'); li.appendChild(SH.svg('zap')); li.appendChild(el('span', null, esc(x))); g.appendChild(li); });
    var d = el('div'); d.appendChild(el('div', 'ts-kick', esc(T('Drains you', 'Mengurasmu'))));
    (drains.length ? drains : [T('— nothing marked yet', '— belum ada yang ditandai')]).forEach(function (x) { var li = el('div', 'ts-li drain'); li.appendChild(SH.svg('battery')); li.appendChild(el('span', null, esc(x))); d.appendChild(li); });
    two.appendChild(g); two.appendChild(d); ce.appendChild(two);
    ce.appendChild(SH.note(esc(T('Direction rule from Module 6: prefer paths where the daily work sits in your left column. Test this against the industry simulations.', 'Aturan arah dari Modul 6: utamakan jalur yang kerja hariannya ada di kolom kirimu. Uji terhadap simulasi industri.')), 'compass'));
    main.appendChild(ce);

    /* strengths */
    var cs = SH.card({ kick: { en: 'Strengths and their evidence', id: 'Kekuatan dan buktinya' }, title: { en: 'Claims with witnesses', id: 'Klaim dengan saksi' } });
    var any = false;
    (s.strengths || []).forEach(function (x, i) {
      if (!x.name) return; any = true;
      var li = el('div', 'ts-li'); li.appendChild(el('span', 'ts-num', String(i + 1)));
      li.appendChild(el('div', null, '<b>' + esc(x.name) + '</b>' + (x.conf ? ' <span class="ts-pill">' + esc(T('evidence', 'bukti')) + ' ' + x.conf + '/5</span>' : '') +
        '<br>' + (x.evidence ? esc(x.evidence) : '<i>' + esc(T('No evidence yet — that is your next artefact to build.', 'Belum ada bukti — itulah artefak berikutmu untuk dibangun.')) + '</i>')));
      cs.appendChild(li);
    });
    if (!any) cs.appendChild(SH.note(esc(T('No strengths recorded yet.', 'Belum ada kekuatan tercatat.'))));
    main.appendChild(cs);

    /* habits */
    var ch = SH.card({ kick: { en: 'Habit baseline', id: 'Garis dasar kebiasaan' }, title: { en: 'The systems, measured', id: 'Sistemnya, terukur' } });
    var weakest = null;
    HABITS.forEach(function (h) {
      var v = (s.habits || {})[h[0]];
      ch.appendChild(SH.dim(T('Lesson ' + h[3], 'Pelajaran ' + h[3]) + ' · ' + T(h[1], h[2]).split(/[—.]/)[0].slice(0, 60) + (T(h[1], h[2]).length > 60 ? '…' : ''), v ? v + ' / 5' : T('unrated', 'belum'), 5));
      if (v && (!weakest || v < weakest.v)) weakest = { v: v, h: h };
    });
    if (weakest) {
      var reco = MODULE_RECO[weakest.h[0]];
      ch.appendChild(SH.note('<b>' + esc(T('Weakest habit', 'Kebiasaan terlemah')) + '</b> — ' + esc(T('maps to Module ' + reco[0] + ' — ' + reco[1] + ', and Lesson ' + weakest.h[3] + ' trains it directly.', 'terpeta ke Modul ' + reco[0] + ' — ' + reco[2] + ', dan Pelajaran ' + weakest.h[3] + ' melatihnya langsung.')), 'target'));
    }
    main.appendChild(ch);

    /* mission */
    var cm = SH.card({ kick: { en: 'Direction', id: 'Arah' }, title: { en: 'Mission, outcome, intention', id: 'Misi, hasil, niat' } });
    var m = s.mission || {};
    [['text', 'compass', T('Mission', 'Misi')], ['outcome', 'flag', T('3-year outcome', 'Hasil 3 tahun')], ['intention', 'calendar', T('Learning intention', 'Niat belajar')]].forEach(function (f) {
      var li = el('div', 'ts-li'); li.appendChild(SH.svg(f[1]));
      li.appendChild(el('div', null, '<b>' + esc(f[2]) + ':</b> ' + (m[f[0]] ? esc(m[f[0]]) : '<i>' + esc(T('not written yet', 'belum ditulis')) + '</i>')));
      cm.appendChild(li);
    });
    main.appendChild(cm);

    /* next moves */
    var cn = SH.card({ kick: { en: 'Next moves', id: 'Langkah berikutnya' }, title: { en: 'Three things to do with this map', id: 'Tiga hal untuk dilakukan dengan peta ini' }, cls: 'gold' });
    [[T('Test your energy map against reality: run two industry tracks in Module 6.', 'Uji peta energimu terhadap kenyataan: jalankan dua jalur industri di Modul 6.')],
     [T('Turn your direction into a learning intention: Lesson 1.2 shows you how to write one you will actually keep.', 'Ubah arahmu menjadi niat belajar: Pelajaran 1.2 menunjukkan cara menulis niat yang benar-benar kamu jalani.')],
     [T('Revisit this audit after finishing the module — the delta is your progress.', 'Kunjungi lagi audit ini setelah modul selesai — selisihnya adalah kemajuanmu.')]
    ].forEach(function (x, i) { var li = el('div', 'ts-li'); li.appendChild(el('span', 'ts-num gold', String(i + 1))); li.appendChild(el('span', null, esc(x[0]))); cn.appendChild(li); });
    main.appendChild(cn);

    main.appendChild(SH.cta({ icon: 'map',
      title: { en: 'Back to the module', id: 'Kembali ke modul' },
      text: { en: 'The audit stays inside Module 1. Return to the lesson you came from, or revise any step — your answers stay saved.', id: 'Audit ini tetap di dalam Modul 1. Kembali ke pelajaran asalmu, atau revisi langkah mana pun — jawabanmu tetap tersimpan.' },
      actions: [
        SH.btn({ en: 'Revise answers', id: 'Revisi jawaban' }, { ghost: true, iconL: 'edit', onClick: function () { stepIdx = 0; render(); } }),
        SH.btn({ en: 'Back to Module', id: 'Kembali ke Modul' }, { iconL: 'arrowL', onClick: function () {
          close();
          if (launchedFrom && window.MT_LMS_PLAYER) { window.MT_LMS_PLAYER.open(launchedFrom); return; }
          var tab = document.querySelector('.nav-item[data-tab="modules"]');
          if (tab) tab.click();
          var mod = document.querySelector('.module-accordion[data-module="1"]');
          if (mod) {
            if (mod.getAttribute('aria-expanded') !== 'true') { var h = mod.querySelector('.module-header'); if (h) h.click(); }
            setTimeout(function () { mod.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 80);
          }
        } })] }));
    return SH.stage(hero, main);
  }

  function render() {
    paintTabs();
    shell.clear();
    var key = STEPS[stepIdx][0];
    shell.body.appendChild(key === 'values' ? rValues() : key === 'energy' ? rEnergy() : key === 'strengths' ? rStrengths() : key === 'habits' ? rHabits() : key === 'mission' ? rMission() : rReport());
  }

  function open(mode) {
    build();
    var s = store();
    /* returning users with a complete audit land on the report */
    stepIdx = (mode === 'report' || (stepDone('habits', s) && stepDone('values', s))) ? 5 : 0;
    shell.open();
    render();
  }
  function close() {
    if (shell) shell.close();
    syncPromo();
  }

  /* home-card status line */
  function syncPromo() {
    var s = store();
    var n = document.querySelector('[data-audit-status]');
    if (!n) return;
    var parts = [];
    if ((s.values || []).length) parts.push(T((s.values.length) + ' values', s.values.length + ' nilai'));
    if (Object.keys(s.habits || {}).length) parts.push(T('habit baseline set', 'garis dasar kebiasaan terisi'));
    if (s.mission && s.mission.text) parts.push(T('mission written', 'misi tertulis'));
    n.textContent = parts.length
      ? T('Your audit so far: ', 'Auditmu sejauh ini: ') + parts.join(' · ')
      : T('No audit yet — first reading takes about 15 minutes.', 'Belum ada audit — pembacaan pertama sekitar 15 menit.');
  }

  /* launchers */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-map-audit]');
    if (!b) return;
    e.preventDefault();
    open(b.getAttribute('data-map-audit'));
  });
  var launchedFrom = null;   /* lesson number the audit was opened from, if any */
  document.addEventListener('mt:launch-tool', function (e) {
    if (e.detail && e.detail.tool === 'audit') {
      launchedFrom = e.detail.lesson || null;
      var p = document.querySelector('.lmsp.open .lmsp-back');
      if (p) p.click();
      open(e.detail.mode);
    }
  });
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-map-audit]')) launchedFrom = null;   /* opened from the home card */
  }, true);
  document.querySelectorAll('.ctl button, button[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      setTimeout(function () {
        syncPromo();
        if (shell && shell.isOpen()) render();
      }, 60);
    });
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', syncPromo);
  else syncPromo();

  window.MT_MAP_AUDIT = { open: open, sync: syncPromo };
})();
