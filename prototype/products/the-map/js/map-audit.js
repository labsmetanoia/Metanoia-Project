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
 */
(function () {
  'use strict';
  var LS = 'mt_map_audit';

  function lang() {
    try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; }
  }
  function T(en, id) { return lang() === 'id' ? id : en; }
  function store() { try { return JSON.parse(localStorage.getItem(LS) || '{}'); } catch (e) { return {}; } }
  function save(s) { try { s.updatedAt = Date.now(); localStorage.setItem(LS, JSON.stringify(s)); } catch (e) {} }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  /* ─── content ─── */
  var VALUES = [
    ['growth', 'Growth & learning', 'Pertumbuhan & belajar'],
    ['security', 'Stability & security', 'Stabilitas & keamanan'],
    ['autonomy', 'Autonomy', 'Otonomi'],
    ['impact', 'Impact on others', 'Dampak bagi orang lain'],
    ['craft', 'Mastery of a craft', 'Penguasaan keahlian'],
    ['recognition', 'Recognition', 'Pengakuan'],
    ['balance', 'Work–life balance', 'Keseimbangan hidup'],
    ['income', 'Earning power', 'Daya penghasilan'],
    ['belonging', 'Team & belonging', 'Tim & rasa memiliki'],
    ['variety', 'Variety & novelty', 'Variasi & kebaruan'],
    ['leading', 'Leading people', 'Memimpin orang'],
    ['creating', 'Creating new things', 'Menciptakan hal baru'],
    ['service', 'Service & care', 'Pelayanan & kepedulian'],
    ['challenge', 'Hard problems', 'Masalah sulit'],
    ['integrity', 'Integrity & fairness', 'Integritas & keadilan'],
    ['adventure', 'Adventure & risk', 'Petualangan & risiko']
  ];
  var ACTIVITIES = [
    ['analyse', 'Analysing data or documents', 'Menganalisis data atau dokumen'],
    ['present', 'Presenting to a group', 'Presentasi ke sekelompok orang'],
    ['write', 'Writing — reports, essays, posts', 'Menulis — laporan, esai, unggahan'],
    ['organise', 'Organising events or projects', 'Mengorganisasi acara atau proyek'],
    ['sell', 'Persuading or selling', 'Meyakinkan atau menjual'],
    ['build', 'Building things — code, models, designs', 'Membangun — kode, model, desain'],
    ['teach', 'Teaching or mentoring someone', 'Mengajar atau membimbing seseorang'],
    ['negotiate', 'Negotiating or debating', 'Bernegosiasi atau berdebat'],
    ['research', 'Deep research on one topic', 'Riset mendalam satu topik'],
    ['network', 'Meeting new people', 'Bertemu orang baru'],
    ['detail', 'Careful detail work', 'Kerja detail yang teliti'],
    ['improvise', 'Improvising under pressure', 'Berimprovisasi di bawah tekanan']
  ];
  var HABITS = [
    ['recovery', 'After a setback I run a deliberate recovery routine instead of avoiding or spiralling.',
      'Setelah kemunduran aku menjalankan rutinitas pemulihan yang disengaja, bukan menghindar atau terpuruk.', '1.1'],
    ['proactive', 'I respond to problems with "what can I do?" rather than "who is to blame?".',
      'Aku merespons masalah dengan "apa yang bisa kulakukan?" bukan "siapa yang salah?".', '2.2'],
    ['mission', 'I have a written direction — mission and 3-year outcome — that guides my choices.',
      'Aku punya arah tertulis — misi dan hasil 3 tahun — yang memandu pilihanku.', '2.3'],
    ['priority', 'I schedule important-but-not-urgent work before my week fills up.',
      'Aku menjadwalkan kerja penting-tapi-tak-mendesak sebelum mingguku penuh.', '2.4'],
    ['capture', 'Every task and promise I make lands in one trusted system, not my memory.',
      'Setiap tugas dan janji masuk ke satu sistem tepercaya, bukan ingatanku.', '5.3'],
    ['energy', 'I defend a sleep window and move most days, even in busy weeks.',
      'Aku menjaga jendela tidur dan bergerak hampir tiap hari, bahkan di minggu sibuk.', '5.1']
  ];
  var MODULE_RECO = {
    recovery: ['1', 'Self-Awareness and Personal Audit', 'Kesadaran Diri dan Audit Pribadi'],
    proactive: ['2', 'The Habits of Effective People', 'Kebiasaan Orang yang Efektif'],
    mission: ['2', 'The Habits of Effective People', 'Kebiasaan Orang yang Efektif'],
    priority: ['2', 'The Habits of Effective People', 'Kebiasaan Orang yang Efektif'],
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

  /* ─── styles ─── */
  var css = '' +
  '#mapAudit{position:fixed;inset:0;z-index:1250;display:none;background:var(--bg-base,#050A12);overflow:hidden}' +
  '#mapAudit.open{display:flex;flex-direction:column}' +
  '#mapAudit .ma-bg{position:absolute;inset:0;z-index:0;pointer-events:none;background:url("../../assets/bg/aladdin-hero.jpg") 70% 28%/cover no-repeat;opacity:.18}' +
  '#mapAudit .ma-veil{position:absolute;inset:0;z-index:0;pointer-events:none;background:linear-gradient(180deg,rgba(5,10,18,.6),rgba(5,10,18,.9) 45%,rgba(5,10,18,.96))}' +
  ':root[data-theme="light"] #mapAudit .ma-bg{opacity:.1}' +
  ':root[data-theme="light"] #mapAudit .ma-veil{background:linear-gradient(180deg,rgba(238,241,246,.85),rgba(238,241,246,.96) 45%)}' +
  '#mapAudit .ma-top{position:relative;z-index:1;display:flex;align-items:center;gap:12px;padding:11px 22px;flex-wrap:wrap;border-bottom:1px solid var(--gold-border);background:var(--glass-bg);backdrop-filter:var(--glass-blur)}' +
  '#mapAudit .ma-top b{font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold)}' +
  '#mapAudit .ma-steps{display:flex;gap:3px;align-items:center;flex-wrap:wrap}' +
  '#mapAudit .ma-step{display:inline-flex;align-items:center;gap:6px;border-radius:999px;padding:5px 11px;font-size:10.5px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:var(--text-faint);border:1px solid transparent;background:none;cursor:pointer;font-family:inherit}' +
  '#mapAudit .ma-step i{font-style:normal;width:15px;height:15px;border-radius:50%;border:1.5px solid currentColor;display:inline-flex;align-items:center;justify-content:center;font-size:8.5px}' +
  '#mapAudit .ma-step.done{color:var(--text-muted)}' +
  '#mapAudit .ma-step.done i{background:rgba(74,222,128,.15);border-color:rgba(74,222,128,.6);color:#4ADE80}' +
  '#mapAudit .ma-step.now{color:var(--gold-bright);border-color:var(--gold-border-hover);background:rgba(201,168,76,.1)}' +
  '#mapAudit .ma-close{margin-left:auto;width:36px;height:36px;border-radius:999px;border:1px solid var(--gold-border);background:none;color:var(--text);cursor:pointer;font-size:15px;flex:none}' +
  '#mapAudit .ma-close:hover{border-color:var(--gold)}' +
  '#mapAudit .ma-body{position:relative;z-index:1;flex:1;overflow-y:auto;padding:26px 22px 70px}' +
  '#mapAudit .ma-in{max-width:820px;margin:0 auto;animation:maEnter .4s cubic-bezier(.22,1,.36,1)}' +
  '@keyframes maEnter{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}' +
  '@media(prefers-reduced-motion:reduce){#mapAudit .ma-in{animation:none}}' +
  '#mapAudit .ma-card{border:1px solid var(--gold-border);border-radius:16px;background:var(--glass-bg);backdrop-filter:var(--glass-blur);padding:22px 24px;margin-bottom:14px}' +
  '#mapAudit .ma-kick{font-size:11px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:6px}' +
  '#mapAudit h2{font-size:1.35rem;margin:0 0 8px;color:var(--text)}' +
  '#mapAudit .ma-sub{font-size:13.5px;color:var(--text-sub);line-height:1.7;margin:0 0 14px}' +
  '#mapAudit .ma-note{font-size:12px;color:var(--text-faint);line-height:1.55;margin-top:10px}' +
  '#mapAudit .ma-chips{display:flex;gap:8px;flex-wrap:wrap}' +
  '#mapAudit .ma-chip{border:1px solid var(--gold-border);border-radius:999px;padding:8px 15px;font-size:13px;color:var(--text-sub);background:none;cursor:pointer;font-family:inherit;transition:border-color .2s,color .2s}' +
  '#mapAudit .ma-chip:hover{border-color:var(--gold-border-hover)}' +
  '#mapAudit .ma-chip.on{color:#10131B;background:linear-gradient(135deg,#8B6914,#C9A84C,#F0D878);border-color:transparent;font-weight:700}' +
  '#mapAudit .ma-chip.on .ord{opacity:.75;font-weight:800;margin-right:5px}' +
  '#mapAudit .ma-act{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:9px 12px;align-items:center;padding:9px 0;border-bottom:1px solid rgba(201,168,76,.12)}' +
  '#mapAudit .ma-act:last-child{border-bottom:none}' +
  '#mapAudit .ma-act span{font-size:13.5px;color:var(--text-sub)}' +
  '#mapAudit .ma-tri{display:flex;gap:4px}' +
  '#mapAudit .ma-tri button{border:1px solid var(--gold-border);background:none;color:var(--text-muted);border-radius:999px;padding:5px 11px;font-size:11.5px;font-weight:700;cursor:pointer;font-family:inherit}' +
  '#mapAudit .ma-tri button.on-drain{background:rgba(239,111,94,.16);border-color:rgba(239,111,94,.55);color:#EF6F5E}' +
  '#mapAudit .ma-tri button.on-mid{background:rgba(201,168,76,.14);border-color:var(--gold-border-hover);color:var(--gold-bright)}' +
  '#mapAudit .ma-tri button.on-gain{background:rgba(74,222,128,.14);border-color:rgba(74,222,128,.55);color:#4ADE80}' +
  '#mapAudit .ma-field{margin-bottom:14px}' +
  '#mapAudit .ma-field label{display:block;font-size:12px;font-weight:700;letter-spacing:.04em;color:var(--text-muted);margin-bottom:6px}' +
  '#mapAudit .ma-field input[type=text],#mapAudit .ma-field textarea{width:100%;box-sizing:border-box;background:var(--bg-mid);border:1px solid var(--gold-border);border-radius:10px;color:var(--text);font-family:inherit;font-size:13.5px;line-height:1.6;padding:11px 13px}' +
  '#mapAudit .ma-field textarea{min-height:74px;resize:vertical}' +
  '#mapAudit .ma-field input:focus,#mapAudit .ma-field textarea:focus{outline:none;border-color:var(--gold)}' +
  '#mapAudit .ma-scale{display:flex;gap:5px}' +
  '#mapAudit .ma-scale button{width:34px;height:34px;border-radius:9px;border:1px solid var(--gold-border);background:none;color:var(--text-muted);font-weight:800;font-size:13px;cursor:pointer;font-family:inherit}' +
  '#mapAudit .ma-scale button.on{background:linear-gradient(135deg,#8B6914,#C9A84C,#F0D878);color:#10131B;border-color:transparent}' +
  '#mapAudit .ma-hab{padding:13px 0;border-bottom:1px solid rgba(201,168,76,.12)}' +
  '#mapAudit .ma-hab:last-child{border-bottom:none}' +
  '#mapAudit .ma-hab p{font-size:13.5px;color:var(--text-sub);margin:0 0 9px;line-height:1.6}' +
  '#mapAudit .ma-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px;align-items:center}' +
  '#mapAudit .ma-btn{display:inline-flex;align-items:center;gap:9px;padding:12px 22px;border-radius:999px;border:0;cursor:pointer;font-family:inherit;font-weight:800;font-size:13.5px;background:linear-gradient(135deg,#8B6914,#C9A84C,#F0D878);color:#10131B}' +
  '#mapAudit .ma-btn.ghost{background:none;border:1px solid var(--gold-border);color:var(--gold)}' +
  '#mapAudit .ma-btn:disabled{opacity:.45;cursor:not-allowed}' +
  '#mapAudit .ma-bar{height:8px;border-radius:999px;background:rgba(201,168,76,.14);overflow:hidden;margin-top:6px}' +
  '#mapAudit .ma-bar i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#8B6914,#C9A84C,#F0D878)}' +
  '#mapAudit .ma-rep-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px}' +
  '#mapAudit .ma-two{display:grid;grid-template-columns:1fr 1fr;gap:14px}' +
  '@media(max-width:640px){#mapAudit .ma-two{grid-template-columns:1fr}}' +
  '#mapAudit .ma-li{font-size:13px;color:var(--text-sub);padding:5px 0;line-height:1.55}' +
  '#mapAudit .ma-li b{color:var(--text)}' +
  '#mapAudit .ma-tag{display:inline-block;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;border:1px solid var(--gold-border);border-radius:999px;padding:3px 10px;color:var(--gold);margin:2px 4px 2px 0}';

  var root = null, body = null, stepsEl = null, stepIdx = 0;

  function build() {
    if (root) return;
    var st = document.createElement('style');
    st.id = 'mapAuditCss'; st.textContent = css;
    document.head.appendChild(st);
    root = el('div'); root.id = 'mapAudit';
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-label', 'Personal Audit');
    root.appendChild(el('div', 'ma-bg'));
    root.appendChild(el('div', 'ma-veil'));
    var top = el('div', 'ma-top');
    top.appendChild(el('b', null, T('The Map · Personal Audit', 'The Map · Audit Pribadi')));
    stepsEl = el('div', 'ma-steps');
    top.appendChild(stepsEl);
    var x = el('button', 'ma-close', '✕');
    x.setAttribute('aria-label', 'Close');
    x.addEventListener('click', close);
    top.appendChild(x);
    body = el('div', 'ma-body');
    root.appendChild(top); root.appendChild(body);
    document.body.appendChild(root);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('open')) close();
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

  function renderSteps() {
    stepsEl.innerHTML = '';
    var s = store();
    STEPS.forEach(function (sp, i) {
      var cls = i === stepIdx ? ' now' : stepDone(sp[0], s) ? ' done' : '';
      var b = el('button', 'ma-step' + cls);
      b.appendChild(el('i', null, stepDone(sp[0], s) && i !== stepIdx ? '✓' : String(i + 1)));
      b.appendChild(el('span', null, T(sp[1], sp[2])));
      b.addEventListener('click', function () { stepIdx = i; render(); });
      stepsEl.appendChild(b);
    });
  }

  function nav(w, backOk, nextLabel) {
    var row = el('div', 'ma-row');
    if (backOk) {
      var back = el('button', 'ma-btn ghost', '← ' + T('Back', 'Kembali'));
      back.addEventListener('click', function () { stepIdx--; render(); });
      row.appendChild(back);
    }
    var next = el('button', 'ma-btn', (nextLabel || T('Continue', 'Lanjut')) + ' →');
    next.addEventListener('click', function () { stepIdx++; render(); });
    row.appendChild(next);
    w.appendChild(row);
  }

  function card(w, kick, title, sub) {
    var c = el('div', 'ma-card');
    if (kick) c.appendChild(el('div', 'ma-kick', kick));
    if (title) c.appendChild(el('h2', null, title));
    if (sub) c.appendChild(el('p', 'ma-sub', sub));
    w.appendChild(c);
    return c;
  }

  /* ─── step renderers ─── */
  function rValues(w) {
    var s = store();
    s.values = s.values || [];
    var c = card(w, T('Step 1 · Values', 'Langkah 1 · Nilai'),
      T('What do you refuse to trade away?', 'Apa yang tak mau kamu tukar?'),
      T('Pick the 3–5 values that must be present in your working life for it to feel right. Your picks are ordered — first is strongest.',
        'Pilih 3–5 nilai yang harus hadir dalam kehidupan kerjamu agar terasa benar. Pilihanmu berurutan — pertama paling kuat.'));
    var chips = el('div', 'ma-chips');
    VALUES.forEach(function (v) {
      var idx = s.values.indexOf(v[0]);
      var b = el('button', 'ma-chip' + (idx > -1 ? ' on' : ''),
        (idx > -1 ? '<span class="ord">' + (idx + 1) + '</span>' : '') + T(v[1], v[2]));
      b.addEventListener('click', function () {
        var s2 = store(); s2.values = s2.values || [];
        var i = s2.values.indexOf(v[0]);
        if (i > -1) s2.values.splice(i, 1);
        else if (s2.values.length < 5) s2.values.push(v[0]);
        save(s2); render();
      });
      chips.appendChild(b);
    });
    c.appendChild(chips);
    c.appendChild(el('p', 'ma-note', T('Tip from Lesson 2.3: values are tested by trade-offs, not by liking the words. For each pick, recall one real decision where you paid a price for it.',
      'Tips dari Pelajaran 2.3: nilai diuji oleh pertukaran, bukan oleh menyukai katanya. Untuk tiap pilihan, ingat satu keputusan nyata saat kamu membayar harga untuknya.')));
    nav(w, false);
  }

  function rEnergy(w) {
    var s = store();
    s.energy = s.energy || {};
    var c = card(w, T('Step 2 · Energy', 'Langkah 2 · Energi'),
      T('What fills you, what empties you?', 'Apa yang mengisimu, apa yang mengurasmu?'),
      T('For each activity, mark whether it usually energises you, drains you, or neither. Answer from remembered experience, not from what sounds impressive.',
        'Untuk tiap aktivitas, tandai apakah biasanya memberimu energi, mengurasmu, atau netral. Jawab dari pengalaman yang diingat, bukan dari yang terdengar keren.'));
    ACTIVITIES.forEach(function (a) {
      var row = el('div', 'ma-act');
      row.appendChild(el('span', null, T(a[1], a[2])));
      var tri = el('div', 'ma-tri');
      [['drain', T('Drains', 'Menguras'), 'on-drain'], ['mid', T('Neutral', 'Netral'), 'on-mid'], ['gain', T('Energises', 'Memberi energi'), 'on-gain']].forEach(function (o) {
        var b = el('button', s.energy[a[0]] === o[0] ? o[2] : '', o[1]);
        b.addEventListener('click', function () {
          var s2 = store(); s2.energy = s2.energy || {};
          s2.energy[a[0]] = o[0];
          save(s2); render();
        });
        tri.appendChild(b);
      });
      row.appendChild(tri);
      c.appendChild(row);
    });
    nav(w, true);
  }

  function rStrengths(w) {
    var s = store();
    s.strengths = s.strengths || [{}, {}, {}];
    var c = card(w, T('Step 3 · Strengths', 'Langkah 3 · Kekuatan'),
      T('Claims need evidence', 'Klaim butuh bukti'),
      T('Name up to three strengths — and for each, the concrete evidence a stranger could verify (a result, an artefact, something someone said). Lesson 1.3’s rule: no evidence, lower rating.',
        'Sebutkan hingga tiga kekuatan — dan untuk masing-masing, bukti konkret yang bisa diverifikasi orang asing (hasil, artefak, ucapan seseorang). Aturan Pelajaran 1.3: tanpa bukti, nilai lebih rendah.'));
    s.strengths.forEach(function (stg, i) {
      var f1 = el('div', 'ma-field');
      f1.appendChild(el('label', null, T('Strength ', 'Kekuatan ') + (i + 1)));
      var inp = document.createElement('input'); inp.type = 'text';
      inp.value = stg.name || '';
      inp.placeholder = T('e.g. Structuring messy problems', 'mis. Menstrukturkan masalah kusut');
      f1.appendChild(inp);
      var f2 = el('div', 'ma-field');
      f2.appendChild(el('label', null, T('Evidence', 'Bukti')));
      var ta = document.createElement('textarea');
      ta.value = stg.evidence || '';
      ta.placeholder = T('e.g. Rebuilt the org’s event budget model; treasurer adopted it for two later events', 'mis. Membangun ulang model anggaran acara organisasi; bendahara memakainya untuk dua acara berikutnya');
      f2.appendChild(ta);
      function persist() {
        var s2 = store(); s2.strengths = s2.strengths || [{}, {}, {}];
        s2.strengths[i] = { name: inp.value.trim(), evidence: ta.value.trim(), conf: (s2.strengths[i] || {}).conf };
        save(s2); renderSteps();
      }
      inp.addEventListener('change', persist);
      ta.addEventListener('change', persist);
      var f3 = el('div', 'ma-field');
      f3.appendChild(el('label', null, T('How strong is the evidence? 1 = a feeling · 5 = verified results', 'Seberapa kuat buktinya? 1 = perasaan · 5 = hasil terverifikasi')));
      var sc = el('div', 'ma-scale');
      for (var k = 1; k <= 5; k++) (function (k) {
        var b = el('button', stg.conf === k ? 'on' : '', String(k));
        b.addEventListener('click', function () {
          persist();
          var s2 = store(); s2.strengths[i].conf = k; save(s2); render();
        });
        sc.appendChild(b);
      })(k);
      f3.appendChild(sc);
      c.appendChild(f1); c.appendChild(f2); c.appendChild(f3);
    });
    nav(w, true);
  }

  function rHabits(w) {
    var s = store();
    s.habits = s.habits || {};
    var c = card(w, T('Step 4 · Habit baseline', 'Langkah 4 · Garis dasar kebiasaan'),
      T('The systems behind the person', 'Sistem di balik orangnya'),
      T('Rate how true each statement is for the last month — 1 = rarely, 5 = consistently. This is your baseline, not your verdict; each habit maps to the module that trains it.',
        'Nilai seberapa benar tiap pernyataan selama sebulan terakhir — 1 = jarang, 5 = konsisten. Ini garis dasarmu, bukan vonismu; tiap kebiasaan terpeta ke modul yang melatihnya.'));
    HABITS.forEach(function (h) {
      var box = el('div', 'ma-hab');
      box.appendChild(el('p', null, T(h[1], h[2])));
      var sc = el('div', 'ma-scale');
      for (var k = 1; k <= 5; k++) (function (k) {
        var b = el('button', s.habits[h[0]] === k ? 'on' : '', String(k));
        b.addEventListener('click', function () {
          var s2 = store(); s2.habits = s2.habits || {};
          s2.habits[h[0]] = k; save(s2); render();
        });
        sc.appendChild(b);
      })(k);
      box.appendChild(sc);
      c.appendChild(box);
    });
    nav(w, true);
  }

  function rMission(w) {
    var s = store();
    s.mission = s.mission || {};
    var c = card(w, T('Step 5 · Mission', 'Langkah 5 · Misi'),
      T('The first creation', 'Penciptaan pertama'),
      T('From Lessons 1.2 and 2.3: one learning intention, one mission sentence, one 3-year outcome. Pencil, not stone — you will revise these.',
        'Dari Pelajaran 1.2 dan 2.3: satu niat belajar, satu kalimat misi, satu hasil 3 tahun. Pensil, bukan batu — kamu akan merevisinya.'));
    [['text', T('Mission sentence — the contribution you want to be trusted with', 'Kalimat misi — kontribusi yang ingin dipercayakan padamu'),
      T('e.g. Help organisations make honest decisions with data', 'mis. Membantu organisasi mengambil keputusan jujur dengan data')],
     ['outcome', T('3-year outcome — domain, level, evidence, protected constraint', 'Hasil 3 tahun — ranah, level, bukti, batas yang dijaga'),
      T('e.g. Own end-to-end analyses in a fintech team, portfolio of 5 shipped projects, health intact', 'mis. Memiliki analisis ujung-ke-ujung di tim fintech, portofolio 5 proyek rilis, kesehatan terjaga')],
     ['intention', T('Learning intention — behaviour, frequency, deadline, weekly signal', 'Niat belajar — perilaku, frekuensi, tenggat, sinyal mingguan'),
      T('e.g. One Map module + one audit update weekly until 1 June, checked every Sunday', 'mis. Satu modul Map + satu pembaruan audit tiap minggu sampai 1 Juni, dicek tiap Minggu')]
    ].forEach(function (f) {
      var fd = el('div', 'ma-field');
      fd.appendChild(el('label', null, f[1]));
      var ta = document.createElement('textarea');
      ta.value = s.mission[f[0]] || '';
      ta.placeholder = f[2];
      ta.addEventListener('change', function () {
        var s2 = store(); s2.mission = s2.mission || {};
        s2.mission[f[0]] = ta.value.trim(); save(s2); renderSteps();
      });
      fd.appendChild(ta);
      c.appendChild(fd);
    });
    nav(w, true, T('Build my report', 'Susun laporanku'));
  }

  function rReport(w) {
    var s = store();
    var c0 = card(w, T('Your Personal Audit', 'Audit Pribadimu'),
      T('A working map, in your own words', 'Peta kerja, dengan kata-katamu sendiri'),
      T('Everything below mirrors your own answers back — computed on this device, stored only in this browser. It is a map to act on and revise, not a psychometric verdict.',
        'Semua di bawah memantulkan jawabanmu sendiri — dihitung di perangkat ini, tersimpan hanya di peramban ini. Ini peta untuk ditindaklanjuti dan direvisi, bukan vonis psikometrik.'));

    /* values */
    var vals = (s.values || []).map(function (k) {
      var v = VALUES.filter(function (x) { return x[0] === k; })[0];
      return v ? T(v[1], v[2]) : k;
    });
    var cv = el('div', 'ma-card');
    cv.appendChild(el('div', 'ma-kick', T('Values — in your order', 'Nilai — sesuai urutanmu')));
    if (vals.length) vals.forEach(function (v, i) { cv.appendChild(el('span', 'ma-tag', (i + 1) + ' · ' + esc(v))); });
    else cv.appendChild(el('p', 'ma-note', T('No values picked yet — step 1 is waiting.', 'Belum ada nilai terpilih — langkah 1 menunggu.')));
    w.appendChild(cv);

    /* energy */
    var gains = [], drains = [];
    ACTIVITIES.forEach(function (a) {
      var v = (s.energy || {})[a[0]];
      if (v === 'gain') gains.push(T(a[1], a[2]));
      if (v === 'drain') drains.push(T(a[1], a[2]));
    });
    var ce = el('div', 'ma-card');
    ce.appendChild(el('div', 'ma-kick', T('Energy map', 'Peta energi')));
    var two = el('div', 'ma-two');
    var g = el('div'); g.appendChild(el('div', 'ma-li', '<b>' + T('Energises you', 'Memberimu energi') + '</b>'));
    (gains.length ? gains : [T('— nothing marked yet', '— belum ada yang ditandai')]).forEach(function (x) { g.appendChild(el('div', 'ma-li', '▲ ' + esc(x))); });
    var d = el('div'); d.appendChild(el('div', 'ma-li', '<b>' + T('Drains you', 'Mengurasmu') + '</b>'));
    (drains.length ? drains : [T('— nothing marked yet', '— belum ada yang ditandai')]).forEach(function (x) { d.appendChild(el('div', 'ma-li', '▽ ' + esc(x))); });
    two.appendChild(g); two.appendChild(d);
    ce.appendChild(two);
    ce.appendChild(el('p', 'ma-note', T('Direction rule from Module 6: prefer paths where the daily work sits in your left column. Test this against the industry simulations.',
      'Aturan arah dari Modul 6: utamakan jalur yang kerja hariannya ada di kolom kirimu. Uji terhadap simulasi industri.')));
    w.appendChild(ce);

    /* strengths */
    var cs = el('div', 'ma-card');
    cs.appendChild(el('div', 'ma-kick', T('Strengths and their evidence', 'Kekuatan dan buktinya')));
    var any = false;
    (s.strengths || []).forEach(function (x) {
      if (!x.name) return;
      any = true;
      cs.appendChild(el('div', 'ma-li', '<b>' + esc(x.name) + '</b>' + (x.conf ? ' · ' + T('evidence strength', 'kekuatan bukti') + ' ' + x.conf + '/5' : '') +
        (x.evidence ? '<br>' + esc(x.evidence) : '<br><i>' + T('No evidence yet — that is your next artefact to build.', 'Belum ada bukti — itulah artefak berikutmu untuk dibangun.') + '</i>')));
    });
    if (!any) cs.appendChild(el('p', 'ma-note', T('No strengths recorded yet.', 'Belum ada kekuatan tercatat.')));
    w.appendChild(cs);

    /* habits */
    var ch = el('div', 'ma-card');
    ch.appendChild(el('div', 'ma-kick', T('Habit baseline', 'Garis dasar kebiasaan')));
    var weakest = null;
    HABITS.forEach(function (h) {
      var v = (s.habits || {})[h[0]];
      var li = el('div', 'ma-li');
      li.appendChild(el('div', null, esc(T(h[1], h[2])) + (v ? ' — <b>' + v + '/5</b>' : ' — <i>' + T('unrated', 'belum dinilai') + '</i>')));
      var bar = el('div', 'ma-bar');
      bar.appendChild(el('i', null, '')).style.width = ((v || 0) / 5 * 100) + '%';
      li.appendChild(bar);
      ch.appendChild(li);
      if (v && (!weakest || v < weakest.v)) weakest = { v: v, h: h };
    });
    if (weakest) {
      var reco = MODULE_RECO[weakest.h[0]];
      ch.appendChild(el('p', 'ma-note', '→ ' + T('Weakest habit maps to Module ' + reco[0] + ' — ' + reco[1] + ', and Lesson ' + weakest.h[3] + ' trains it directly.',
        'Kebiasaan terlemah terpeta ke Modul ' + reco[0] + ' — ' + reco[2] + ', dan Pelajaran ' + weakest.h[3] + ' melatihnya langsung.')));
    }
    w.appendChild(ch);

    /* mission */
    var cm = el('div', 'ma-card');
    cm.appendChild(el('div', 'ma-kick', T('Direction', 'Arah')));
    var m = s.mission || {};
    [['text', T('Mission', 'Misi')], ['outcome', T('3-year outcome', 'Hasil 3 tahun')], ['intention', T('Learning intention', 'Niat belajar')]].forEach(function (f) {
      cm.appendChild(el('div', 'ma-li', '<b>' + f[1] + ':</b> ' + (m[f[0]] ? esc(m[f[0]]) : '<i>' + T('not written yet', 'belum ditulis') + '</i>')));
    });
    w.appendChild(cm);

    /* next moves */
    var cn = el('div', 'ma-card');
    cn.appendChild(el('div', 'ma-kick', T('Next moves', 'Langkah berikutnya')));
    cn.appendChild(el('div', 'ma-li', '1 · ' + T('Test your energy map against reality: run two industry tracks in Module 6.',
      'Uji peta energimu terhadap kenyataan: jalankan dua jalur industri di Modul 6.')));
    cn.appendChild(el('div', 'ma-li', '2 · ' + T('Cross-check direction with data: open The Range (Explore) and run the questionnaire or CV analysis.',
      'Silangkan arah dengan data: buka The Range (Explore) dan jalankan kuesioner atau analisis CV.')));
    cn.appendChild(el('div', 'ma-li', '3 · ' + T('Revisit this audit after finishing the module — the delta is your progress.',
      'Kunjungi lagi audit ini setelah modul selesai — selisihnya adalah kemajuanmu.')));
    var row = el('div', 'ma-row');
    var toRange = el('button', 'ma-btn', T('Open The Range →', 'Buka The Range →'));
    toRange.addEventListener('click', function () {
      close();
      var tab = document.querySelector('.nav-item[data-tab="range"]');
      if (tab) tab.click();
    });
    var again = el('button', 'ma-btn ghost', T('Revise answers', 'Revisi jawaban'));
    again.addEventListener('click', function () { stepIdx = 0; render(); });
    row.appendChild(toRange); row.appendChild(again);
    cn.appendChild(row);
    w.appendChild(cn);
  }

  function render() {
    renderSteps();
    body.innerHTML = '';
    body.scrollTop = 0;
    var w = el('div', 'ma-in');
    body.appendChild(w);
    var key = STEPS[stepIdx][0];
    if (key === 'values') rValues(w);
    else if (key === 'energy') rEnergy(w);
    else if (key === 'strengths') rStrengths(w);
    else if (key === 'habits') rHabits(w);
    else if (key === 'mission') rMission(w);
    else rReport(w);
  }

  function open(mode) {
    build();
    var s = store();
    /* returning users with a complete audit land on the report */
    stepIdx = (mode === 'report' || (stepDone('habits', s) && stepDone('values', s))) ? 5 : 0;
    root.classList.add('open');
    document.body.classList.add('lms-lock');
    render();
  }
  function close() {
    if (root) root.classList.remove('open');
    document.body.classList.remove('lms-lock');
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
  document.addEventListener('mt:launch-tool', function (e) {
    if (e.detail && e.detail.tool === 'audit') {
      var p = document.querySelector('.lmsp.open .lmsp-back');
      if (p) p.click();
      open(e.detail.mode);
    }
  });
  document.querySelectorAll('.ctl button, button[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      setTimeout(function () {
        syncPromo();
        if (root && root.classList.contains('open')) render();
      }, 60);
    });
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', syncPromo);
  else syncPromo();

  window.MT_MAP_AUDIT = { open: open, sync: syncPromo };
})();
