/**
 * THE PACK — APPLICATION STUDIO
 * -----------------------------
 * Four builders in one workspace, covering the documents and live
 * exercises the course trains:
 *   linkedin — profile audit: rule-based checks on headline, about and
 *              experience bullets against a target role, with rewrite
 *              scaffolds built from the user's own words.
 *   cv       — guided CV composer with live lint (action verbs,
 *              quantification, length) and an ATS-clean text preview.
 *   letter   — cover-letter developer: four-paragraph assembly from the
 *              user's inputs, mirrored against a pasted job description.
 *   fgd      — a scripted FGD/LGD practice round: authored personas,
 *              one discussion move chosen per round, feedback against
 *              the assessor functions taught in Module 4.
 *
 * Honesty contract: every check is a transparent rule computed on this
 * device; nothing is uploaded, no AI service is called, and the FGD
 * round is labelled as scripted practice of discussion moves — not a
 * prediction of live performance. Drafts stay in this browser
 * (localStorage 'mt_pack_studio').
 */
(function () {
  'use strict';
  var LS = 'mt_pack_studio';
  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function T(en, id) { return lang() === 'id' ? id : en; }
  function B(p) { return p ? (p[lang()] || p.en) : ''; }
  function load() { try { return JSON.parse(localStorage.getItem(LS) || '{}'); } catch (e) { return {}; } }
  function save(s) { try { localStorage.setItem(LS, JSON.stringify(s)); } catch (e) {} }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function words(s) { return String(s || '').trim().split(/\s+/).filter(Boolean).length; }

  /* ─── shared lint helpers (transparent rules, both languages) ─── */
  var VERBS = ('led built launched designed grew reduced increased delivered analysed analyzed created managed ' +
    'organised organized negotiated wrote presented shipped improved automated researched coordinated founded ' +
    'memimpin membangun meluncurkan merancang menumbuhkan mengurangi meningkatkan menganalisis membuat mengelola ' +
    'menyusun menegosiasikan menulis mempresentasikan memperbaiki mengotomatiskan meneliti mengoordinasikan mendirikan').split(/\s+/);
  var CLICHES = ('hardworking hard-working passionate team player teamplayer motivated dynamic synergy go-getter ' +
    'results-driven detail-oriented thinker outside the box pekerja keras bersemangat berdedikasi ulet').split(/\s+/);
  function startsWithVerb(line) {
    var w = line.trim().toLowerCase().split(/\s+/)[0] || '';
    return VERBS.indexOf(w.replace(/[^a-z-]/g, '')) > -1;
  }
  function hasNumber(s) { return /\d/.test(s); }
  function clicheHits(s) {
    var low = ' ' + String(s).toLowerCase() + ' ';
    return CLICHES.filter(function (c) { return low.indexOf(' ' + c + ' ') > -1; });
  }
  var STOP = {};
  ('the a an and or of to in for with on at by from as is are was be this that it its your our their you we they ' +
   'not no will can may all any each other more most such than then so if but do does did have has had who which ' +
   'what when where how into over under about after before between years year experience skills strong required ' +
   'dan atau yang di ke dari untuk dengan pada oleh adalah akan bisa dapat tidak ini itu kami kita mereka anda saya ' +
   'juga serta agar dalam sebagai telah sudah harus lebih paling tahun pengalaman').split(/\s+/).forEach(function (s) { STOP[s] = 1; });
  function keyTerms(text, cap) {
    var toks = String(text).toLowerCase().replace(/[^a-z0-9+#./\s-]/g, ' ').split(/\s+/)
      .filter(function (t) { return t.length > 2 && !STOP[t] && !/^\d+$/.test(t); });
    var freq = {};
    toks.forEach(function (t) { freq[t] = (freq[t] || 0) + 1; });
    for (var i = 0; i < toks.length - 1; i++) {
      var bg = toks[i] + ' ' + toks[i + 1];
      freq[bg] = (freq[bg] || 0) + 1.2;
    }
    return Object.keys(freq)
      .filter(function (t) { return freq[t] >= (t.indexOf(' ') > -1 ? 2.4 : 2); })
      .sort(function (a, b) { return freq[b] - freq[a]; })
      .slice(0, cap || 12);
  }

  /* ─── styles ─── */
  var css = '' +
  '#packStudio{position:fixed;inset:0;z-index:1250;display:none;background:var(--bg-base,#050A12);overflow:hidden}' +
  '#packStudio.open{display:flex;flex-direction:column}' +
  '#packStudio .ps-bg{position:absolute;inset:0;z-index:0;pointer-events:none;background:url("../../assets/bg/gate-01.jpg") center 30%/cover no-repeat;opacity:.14}' +
  '#packStudio .ps-veil{position:absolute;inset:0;z-index:0;pointer-events:none;background:linear-gradient(180deg,rgba(5,10,18,.66),rgba(5,10,18,.92) 45%,rgba(5,10,18,.97))}' +
  ':root[data-theme="light"] #packStudio .ps-bg{opacity:.08}' +
  ':root[data-theme="light"] #packStudio .ps-veil{background:linear-gradient(180deg,rgba(238,241,246,.86),rgba(238,241,246,.97) 45%)}' +
  '#packStudio .ps-top{position:relative;z-index:1;display:flex;align-items:center;gap:12px;padding:11px 22px;flex-wrap:wrap;border-bottom:1px solid var(--gold-border);background:var(--glass-bg);backdrop-filter:var(--glass-blur)}' +
  '#packStudio .ps-top b{font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold)}' +
  '#packStudio .ps-tabs{display:flex;gap:4px;flex-wrap:wrap}' +
  '#packStudio .ps-tab{border:1px solid transparent;background:none;color:var(--text-muted);border-radius:999px;padding:7px 14px;font-size:12px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;cursor:pointer;font-family:inherit}' +
  '#packStudio .ps-tab.on{color:var(--gold-bright);border-color:var(--gold-border-hover);background:rgba(201,168,76,.1)}' +
  '#packStudio .ps-close{margin-left:auto;width:36px;height:36px;border-radius:999px;border:1px solid var(--gold-border);background:none;color:var(--text);cursor:pointer;font-size:15px;flex:none}' +
  '#packStudio .ps-close:hover{border-color:var(--gold)}' +
  '#packStudio .ps-body{position:relative;z-index:1;flex:1;overflow-y:auto;padding:26px 22px 70px}' +
  '#packStudio .ps-in{max-width:920px;margin:0 auto;animation:psEnter .4s cubic-bezier(.22,1,.36,1)}' +
  '@keyframes psEnter{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}' +
  '@media(prefers-reduced-motion:reduce){#packStudio .ps-in{animation:none}}' +
  '#packStudio .ps-card{border:1px solid var(--gold-border);border-radius:16px;background:var(--glass-bg);backdrop-filter:var(--glass-blur);padding:22px 24px;margin-bottom:14px}' +
  '#packStudio .ps-kick{font-size:11px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:6px}' +
  '#packStudio h2{font-size:1.35rem;margin:0 0 8px;color:var(--text)}' +
  '#packStudio .ps-sub{font-size:13.5px;color:var(--text-sub);line-height:1.7;margin:0 0 12px}' +
  '#packStudio .ps-note{font-size:12px;color:var(--text-faint);line-height:1.55;margin-top:10px}' +
  '#packStudio .ps-field{margin-bottom:12px}' +
  '#packStudio .ps-field label{display:block;font-size:12px;font-weight:700;color:var(--text-muted);margin-bottom:6px}' +
  '#packStudio textarea,#packStudio input[type=text]{width:100%;box-sizing:border-box;background:var(--bg-mid);border:1px solid var(--gold-border);border-radius:10px;color:var(--text);font-family:inherit;font-size:13px;line-height:1.6;padding:10px 12px}' +
  '#packStudio textarea{min-height:110px;resize:vertical}' +
  '#packStudio textarea:focus,#packStudio input:focus{outline:none;border-color:var(--gold)}' +
  '#packStudio .ps-two{display:grid;grid-template-columns:1fr 1fr;gap:14px}' +
  '@media(max-width:700px){#packStudio .ps-two{grid-template-columns:1fr}}' +
  '#packStudio .ps-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px;align-items:center}' +
  '#packStudio .ps-btn{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;border-radius:999px;border:0;cursor:pointer;font-family:inherit;font-weight:800;font-size:13px;background:linear-gradient(135deg,#8B6914,#C9A84C,#F0D878);color:#10131B}' +
  '#packStudio .ps-btn.ghost{background:none;border:1px solid var(--gold-border);color:var(--gold)}' +
  '#packStudio .ps-check{font-size:13px;color:var(--text-sub);line-height:1.65;margin:6px 0;padding-left:2px}' +
  '#packStudio .ps-check .ok{color:#4ADE80;font-weight:700}' +
  '#packStudio .ps-check .bad{color:#EF6F5E;font-weight:700}' +
  '#packStudio .ps-chip{display:inline-block;font-size:12px;border:1px solid var(--gold-border);border-radius:999px;padding:4px 11px;margin:3px 4px 3px 0;color:var(--text-sub)}' +
  '#packStudio .ps-chip.hit{border-color:rgba(74,222,128,.5);color:#4ADE80}' +
  '#packStudio .ps-chip.miss{border-color:rgba(239,111,94,.5);color:#EF6F5E}' +
  '#packStudio .ps-score{display:flex;gap:24px;flex-wrap:wrap;margin:6px 0 10px}' +
  '#packStudio .ps-score b{display:block;font-size:1.5rem;color:var(--gold-bright)}' +
  '#packStudio .ps-score span{font-size:12px;color:var(--text-muted)}' +
  '#packStudio .ps-prev{border:1px solid var(--gold-border);border-radius:12px;background:var(--bg-mid);padding:18px 20px;font-size:13px;line-height:1.7;color:var(--text-sub);white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}' +
  '#packStudio .ps-scaf{border-left:3px solid var(--gold-border);background:var(--bg-mid);border-radius:0 10px 10px 0;padding:12px 15px;font-size:13px;color:var(--text-sub);line-height:1.7;margin:10px 0}' +
  '#packStudio .ps-say{border:1px solid var(--gold-border);border-radius:12px;background:var(--bg-mid);padding:14px 16px;margin:10px 0;font-size:13.5px;color:var(--text);line-height:1.65}' +
  '#packStudio .ps-say b{color:var(--gold-bright);display:block;font-size:12px;letter-spacing:.08em;text-transform:uppercase;margin-bottom:4px}' +
  '#packStudio .ps-move{display:block;width:100%;text-align:left;box-sizing:border-box;margin:8px 0;padding:12px 15px;border-radius:11px;border:1px solid var(--gold-border);background:var(--bg-mid);color:var(--text-sub);font-family:inherit;font-size:13.5px;line-height:1.55;cursor:pointer}' +
  '#packStudio .ps-move:hover{border-color:var(--gold-border-hover)}' +
  '#packStudio .ps-move:disabled{cursor:default;opacity:.85}' +
  '#packStudio .ps-move.pick{border-color:var(--gold);background:rgba(201,168,76,.1);color:var(--text)}' +
  '#packStudio .ps-fb{font-size:13px;color:var(--text-sub);line-height:1.7;border:1px solid rgba(201,168,76,.4);border-radius:11px;padding:12px 15px;margin-top:10px;background:rgba(201,168,76,.06)}' +
  '#packStudio .ps-bar{height:7px;border-radius:999px;background:rgba(201,168,76,.14);overflow:hidden;margin:4px 0 14px}' +
  '#packStudio .ps-bar i{display:block;height:100%;background:linear-gradient(90deg,#8B6914,#C9A84C,#F0D878)}';

  var root = null, body = null, tabsEl = null, tab = 'linkedin';
  var fgdRun = null;

  function build() {
    if (root) return;
    var st = document.createElement('style');
    st.id = 'packStudioCss'; st.textContent = css;
    document.head.appendChild(st);
    root = el('div'); root.id = 'packStudio';
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-label', 'Application Studio');
    root.appendChild(el('div', 'ps-bg'));
    root.appendChild(el('div', 'ps-veil'));
    var top = el('div', 'ps-top');
    top.appendChild(el('b', null, T('The Pack · Application Studio', 'The Pack · Studio Lamaran')));
    tabsEl = el('div', 'ps-tabs');
    [['linkedin', 'LinkedIn', 'LinkedIn'], ['cv', 'CV Studio', 'Studio CV'], ['letter', 'Cover Letter', 'Surat Lamaran'], ['fgd', 'FGD / LGD', 'FGD / LGD']].forEach(function (t) {
      var b = el('button', 'ps-tab', T(t[1], t[2]));
      b.dataset.tab = t[0];
      b.addEventListener('click', function () { tab = t[0]; fgdRun = null; render(); });
      tabsEl.appendChild(b);
    });
    top.appendChild(tabsEl);
    var x = el('button', 'ps-close', '✕');
    x.setAttribute('aria-label', 'Close');
    x.addEventListener('click', close);
    top.appendChild(x);
    body = el('div', 'ps-body');
    root.appendChild(top); root.appendChild(body);
    document.body.appendChild(root);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('open')) close();
    });
  }

  function card(w, kick, title, sub) {
    var c = el('div', 'ps-card');
    if (kick) c.appendChild(el('div', 'ps-kick', kick));
    if (title) c.appendChild(el('h2', null, title));
    if (sub) c.appendChild(el('p', 'ps-sub', sub));
    w.appendChild(c);
    return c;
  }
  function field(host, labelTxt, kind, val, ph) {
    var f = el('div', 'ps-field');
    f.appendChild(el('label', null, labelTxt));
    var inp = document.createElement(kind === 'input' ? 'input' : 'textarea');
    if (kind === 'input') inp.type = 'text';
    inp.value = val || '';
    if (ph) inp.placeholder = ph;
    f.appendChild(inp);
    host.appendChild(f);
    return inp;
  }
  function check(host, ok, txt) {
    host.appendChild(el('p', 'ps-check', (ok ? '<span class="ok">✓</span> ' : '<span class="bad">✗</span> ') + txt));
    return ok ? 1 : 0;
  }

  /* ─── STATION: LINKEDIN ─── */
  function linkedinView(w) {
    var s = load(); s.linkedin = s.linkedin || {};
    var L = s.linkedin;
    var c = card(w, T('Station 1 · LinkedIn profile optimiser', 'Stasiun 1 · Pengoptimal profil LinkedIn'),
      T('Your profile, audited against the recruiter’s search', 'Profilmu, diaudit terhadap pencarian perekrut'),
      T('Paste the three fields recruiters actually read. The audit applies the rules from Lesson 2.2 — transparent checks, computed on this device — and hands back rewrite scaffolds built from your own words.',
        'Tempel tiga bidang yang benar-benar dibaca perekrut. Audit menerapkan aturan Pelajaran 2.2 — pemeriksaan transparan, dihitung di perangkat ini — dan mengembalikan kerangka tulis-ulang dari kata-katamu sendiri.'));
    var role = field(c, T('Target role + 3–5 keywords recruiters would search', 'Peran target + 3–5 kata kunci yang dicari perekrut'), 'input', L.role,
      T('e.g. Data Analyst — SQL, Tableau, A/B testing', 'mis. Data Analyst — SQL, Tableau, A/B testing'));
    var head = field(c, T('Your headline', 'Headline-mu'), 'input', L.head,
      T('the line under your name', 'baris di bawah namamu'));
    var about = field(c, T('Your About section', 'Bagian About-mu'), 'textarea', L.about, '');
    var bullets = field(c, T('Experience bullets (one per line, from your most relevant role)', 'Butir pengalaman (satu per baris, dari peran paling relevan)'), 'textarea', L.bullets, '');
    var row = el('div', 'ps-row');
    var go = el('button', 'ps-btn', T('Audit the profile →', 'Audit profilnya →'));
    go.addEventListener('click', function () {
      L.role = role.value; L.head = head.value; L.about = about.value; L.bullets = bullets.value; L.done = true;
      save(s); render();
    });
    row.appendChild(go);
    c.appendChild(row);

    if (!L.done || !(L.head || L.about || L.bullets)) return;
    var kws = String(L.role || '').toLowerCase().split(/[,—–\-\/]+/).map(function (x) { return x.trim(); }).filter(function (x) { return x.length > 2; });
    var all = (L.head + ' ' + L.about + ' ' + L.bullets).toLowerCase();
    var hits = kws.filter(function (k) { return all.indexOf(k) > -1; });
    var lines = String(L.bullets || '').split('\n').map(function (x) { return x.trim(); }).filter(Boolean);
    var verbLines = lines.filter(startsWithVerb).length;
    var numLines = lines.filter(hasNumber).length;
    var cliches = clicheHits(L.head + ' ' + L.about);
    var got = 0, total = 0;
    var r = card(w, T('Audit — every rule shown', 'Audit — semua aturan ditampilkan'), null, null);
    total++; got += check(r, L.head.length > 0 && L.head.length <= 220,
      T('Headline within LinkedIn’s length and not empty', 'Headline dalam batas panjang LinkedIn dan tidak kosong'));
    total++; got += check(r, kws.length > 0 && kws.some(function (k) { return L.head.toLowerCase().indexOf(k) > -1; }),
      T('Headline carries at least one searched keyword — recruiters filter on this field', 'Headline memuat minimal satu kata kunci pencarian — perekrut memfilter bidang ini'));
    total++; got += check(r, /\d/.test(L.head) || /[|·—]/.test(L.head),
      T('Headline goes beyond a bare job title (proof point or value marker present)', 'Headline melampaui sekadar jabatan (ada bukti atau penanda nilai)'));
    total++; got += check(r, words(L.about) >= 40,
      T('About long enough to say something (40+ words)', 'About cukup panjang untuk berkata sesuatu (40+ kata)'));
    total++; got += check(r, hasNumber(L.about),
      T('About carries at least one number — evidence, not adjectives', 'About memuat minimal satu angka — bukti, bukan kata sifat'));
    total++; got += check(r, cliches.length === 0,
      T('No filler clichés', 'Tanpa klise pengisi') + (cliches.length ? ' — ' + esc(cliches.join(', ')) : ''));
    total++; got += check(r, lines.length >= 3,
      T('At least three experience bullets pasted', 'Minimal tiga butir pengalaman ditempel'));
    total++; got += check(r, lines.length > 0 && verbLines / Math.max(lines.length, 1) >= 0.6,
      T('Most bullets open with an action verb', 'Sebagian besar butir dibuka kata kerja aksi') + ' (' + verbLines + '/' + lines.length + ')');
    total++; got += check(r, lines.length > 0 && numLines / Math.max(lines.length, 1) >= 0.5,
      T('At least half the bullets are quantified', 'Minimal separuh butir terkuantifikasi') + ' (' + numLines + '/' + lines.length + ')');
    total++; got += check(r, hits.length >= Math.min(2, kws.length || 2),
      T('Target keywords appear across the profile', 'Kata kunci target muncul di profil') + (kws.length ? ' (' + hits.length + '/' + kws.length + ')' : ''));
    r.insertBefore(el('h2', null, got + ' / ' + total + ' ' + T('rules passed', 'aturan lolos')), r.firstChild.nextSibling);

    var sc = card(w, T('Rewrite scaffolds — fill with your own facts', 'Kerangka tulis ulang — isi dengan faktamu sendiri'), null, null);
    var kw1 = kws[0] || T('[target role]', '[peran target]');
    sc.appendChild(el('div', 'ps-scaf', '<b>' + T('Headline formula:', 'Rumus headline:') + '</b> ' + esc(kw1) + ' | ' +
      T('[what you build or solve] | [one number that proves it]', '[apa yang kamu bangun atau pecahkan] | [satu angka yang membuktikannya]')));
    sc.appendChild(el('div', 'ps-scaf', '<b>' + T('About opening (first 260 characters show before “see more”):', 'Pembuka About (260 karakter pertama tampil sebelum “see more”):') + '</b> ' +
      T('One sentence naming the problem you love solving → one sentence of proof with a number → one sentence on what you are looking for.',
        'Satu kalimat menamai masalah yang kamu suka pecahkan → satu kalimat bukti dengan angka → satu kalimat tentang yang kamu cari.')));
    sc.appendChild(el('div', 'ps-scaf', '<b>' + T('Bullet formula:', 'Rumus butir:') + '</b> ' +
      T('Action verb + what + method + measured result. Weakest bullet to fix first: ',
        'Kata kerja aksi + apa + cara + hasil terukur. Butir terlemah untuk diperbaiki dulu: ') +
      esc((lines.filter(function (l) { return !startsWithVerb(l) || !hasNumber(l); })[0] || lines[0] || '—').slice(0, 140))));
    sc.appendChild(el('p', 'ps-note', T('Rule-based audit computed on this device against the checklist from Lesson 2.2 — not a prediction of recruiter behaviour. Claim only what your real history supports.',
      'Audit berbasis aturan yang dihitung di perangkat ini terhadap daftar Pelajaran 2.2 — bukan prediksi perilaku perekrut. Klaim hanya yang didukung riwayat aslimu.')));
  }

  /* ─── STATION: CV ─── */
  function cvView(w) {
    var s = load(); s.cv = s.cv || {};
    var C = s.cv;
    var c = card(w, T('Station 2 · CV studio', 'Stasiun 2 · Studio CV'),
      T('Compose, lint, export', 'Susun, periksa, ekspor'),
      T('Build each section in the boxes; the preview assembles an ATS-clean single-column text CV as you go, and the lint applies Lesson 2.3’s rules. Copy the result into any template — the words are the product.',
        'Bangun tiap bagian di kotaknya; pratinjau merakit CV teks satu kolom yang ramah ATS, dan lint menerapkan aturan Pelajaran 2.3. Salin hasilnya ke templat mana pun — kata-katanya lah produknya.'));
    var two = el('div', 'ps-two');
    var left = el('div'), right = el('div');
    var name = field(left, T('Name + contact line', 'Nama + baris kontak'), 'input', C.name,
      T('Name · city · email · phone · linkedin', 'Nama · kota · email · telepon · linkedin'));
    var summ = field(left, T('Summary (2–3 lines)', 'Ringkasan (2–3 baris)'), 'textarea', C.summ, '');
    var exp = field(left, T('Experience — “Role — Organisation — Dates” then bullet lines, blank line between roles', 'Pengalaman — “Peran — Organisasi — Tanggal” lalu baris butir, baris kosong antar peran'), 'textarea', C.exp, '');
    var edu = field(right, T('Education', 'Pendidikan'), 'textarea', C.edu, '');
    var skills = field(right, T('Skills (comma-separated, hard skills first)', 'Keahlian (dipisah koma, hard skill dulu)'), 'textarea', C.skills, '');
    two.appendChild(left); two.appendChild(right);
    c.appendChild(two);
    var row = el('div', 'ps-row');
    var go = el('button', 'ps-btn', T('Assemble + lint →', 'Rakit + periksa →'));
    go.addEventListener('click', function () {
      C.name = name.value; C.summ = summ.value; C.exp = exp.value; C.edu = edu.value; C.skills = skills.value; C.done = true;
      save(s); render();
    });
    row.appendChild(go);
    c.appendChild(row);

    if (!C.done || !(C.exp || C.summ)) return;
    var text = [C.name, '', C.summ, '', T('EXPERIENCE', 'PENGALAMAN'), C.exp, '', T('EDUCATION', 'PENDIDIKAN'), C.edu, '', T('SKILLS', 'KEAHLIAN'), C.skills]
      .join('\n').replace(/\n{3,}/g, '\n\n').trim();
    /* bullet lines = everything that is not a "Role — Organisation — Dates" header */
    var bl = String(C.exp || '').split('\n').map(function (x) { return x.trim().replace(/^[-•*]\s*/, ''); })
      .filter(function (x) { return x && !(x.split(/ — | – /).length >= 3 && x.length < 110); });
    var verbLines = bl.filter(startsWithVerb).length;
    var numLines = bl.filter(hasNumber).length;
    var cliches = clicheHits(C.summ + ' ' + C.exp);
    var lint = card(w, T('Lint — the rules, applied', 'Lint — aturannya, diterapkan'), null, null);
    check(lint, /[\w.+-]+@[\w-]+\.[a-z]{2,}/i.test(C.name), T('Contact line carries an email', 'Baris kontak memuat email'));
    check(lint, words(C.summ) >= 15 && words(C.summ) <= 60, T('Summary is 15–60 words — a positioning line, not a biography', 'Ringkasan 15–60 kata — kalimat posisi, bukan biografi'));
    check(lint, bl.length >= 3, T('At least three experience bullets', 'Minimal tiga butir pengalaman'));
    check(lint, bl.length > 0 && verbLines / Math.max(bl.length, 1) >= 0.6, T('Most bullets open with an action verb', 'Sebagian besar butir dibuka kata kerja aksi') + ' (' + verbLines + '/' + bl.length + ')');
    check(lint, bl.length > 0 && numLines / Math.max(bl.length, 1) >= 0.5, T('At least half the bullets carry a number', 'Minimal separuh butir memuat angka') + ' (' + numLines + '/' + bl.length + ')');
    check(lint, cliches.length === 0, T('No filler clichés', 'Tanpa klise pengisi') + (cliches.length ? ' — ' + esc(cliches.join(', ')) : ''));
    check(lint, text.length > 600 && text.length < 6500, T('Total length in the one-page text range', 'Panjang total dalam rentang teks satu halaman'));
    check(lint, (C.skills || '').split(',').filter(function (x) { return x.trim(); }).length >= 5, T('Five or more concrete skills listed', 'Lima keahlian konkret atau lebih terdaftar'));

    var pv = card(w, T('ATS-clean preview', 'Pratinjau ramah ATS'), null, null);
    pv.appendChild(el('div', 'ps-prev', esc(text)));
    var row2 = el('div', 'ps-row');
    var cp = el('button', 'ps-btn ghost', T('Copy as plain text', 'Salin sebagai teks polos'));
    cp.addEventListener('click', function () {
      try { navigator.clipboard.writeText(text); cp.textContent = '✓ ' + T('Copied', 'Tersalin'); } catch (e) {}
      setTimeout(function () { cp.textContent = T('Copy as plain text', 'Salin sebagai teks polos'); }, 1600);
    });
    row2.appendChild(cp);
    pv.appendChild(row2);
    pv.appendChild(el('p', 'ps-note', T('Single column, standard headings, no tables or graphics — the shape every parser reads cleanly. Test it against a real JD in the Screening Gym’s ATS check.',
      'Satu kolom, judul standar, tanpa tabel atau grafis — bentuk yang dibaca bersih semua parser. Uji terhadap JD nyata di cek ATS Gym Penyaringan.')));
  }

  /* ─── STATION: LETTER ─── */
  function letterView(w) {
    var s = load(); s.letter = s.letter || {};
    var L = s.letter;
    var c = card(w, T('Station 3 · Cover letter developer', 'Stasiun 3 · Pengembang surat lamaran'),
      T('Four paragraphs, none of them generic', 'Empat paragraf, tak satu pun generik'),
      T('Answer five questions in your own words; the developer assembles them into the four-paragraph structure from Lesson 2.4 and checks the draft against the pasted JD. It arranges your words — it does not invent any.',
        'Jawab lima pertanyaan dengan kata-katamu; pengembang merakitnya ke struktur empat paragraf Pelajaran 2.4 dan memeriksa draf terhadap JD yang ditempel. Ia menata kata-katamu — tidak mengarang apa pun.'));
    var comp = field(c, T('Company + role', 'Perusahaan + peran'), 'input', L.comp, T('e.g. PT Aruna — Data Analyst', 'mis. PT Aruna — Data Analyst'));
    var hook = field(c, T('Why this company — one researched, specific reason', 'Mengapa perusahaan ini — satu alasan spesifik hasil riset'), 'textarea', L.hook, '');
    var ev1 = field(c, T('Evidence 1 — a result you achieved that this role needs (with a number)', 'Bukti 1 — hasil yang kamu capai yang dibutuhkan peran ini (dengan angka)'), 'textarea', L.ev1, '');
    var ev2 = field(c, T('Evidence 2 — a second, different proof', 'Bukti 2 — bukti kedua yang berbeda'), 'textarea', L.ev2, '');
    var closeTxt = field(c, T('Your close — what you want to happen next, said plainly', 'Penutupmu — apa yang kamu ingin terjadi berikutnya, dikatakan lugas'), 'textarea', L.close, '');
    var jd = field(c, T('Paste the JD (for the mirror check)', 'Tempel JD (untuk cek pencerminan)'), 'textarea', L.jd, '');
    var row = el('div', 'ps-row');
    var go = el('button', 'ps-btn', T('Assemble the draft →', 'Rakit drafnya →'));
    go.addEventListener('click', function () {
      L.comp = comp.value; L.hook = hook.value; L.ev1 = ev1.value; L.ev2 = ev2.value; L.close = closeTxt.value; L.jd = jd.value; L.done = true;
      save(s); render();
    });
    row.appendChild(go);
    c.appendChild(row);

    if (!L.done || !(L.hook || L.ev1)) return;
    var para1 = T('Dear Hiring Team at ', 'Kepada Tim Rekrutmen ') + (L.comp.split('—')[0] || '').trim() + ',\n\n' + (L.hook || '').trim();
    var para2 = (L.ev1 || '').trim();
    var para3 = (L.ev2 || '').trim();
    var para4 = (L.close || '').trim();
    var draft = [para1, para2, para3, para4].filter(Boolean).join('\n\n');
    var dv = card(w, T('Assembled draft', 'Draf rakitan'), null, null);
    dv.appendChild(el('div', 'ps-prev', esc(draft)));
    var row2 = el('div', 'ps-row');
    var cp = el('button', 'ps-btn ghost', T('Copy draft', 'Salin draf'));
    cp.addEventListener('click', function () {
      try { navigator.clipboard.writeText(draft); cp.textContent = '✓ ' + T('Copied', 'Tersalin'); } catch (e) {}
      setTimeout(function () { cp.textContent = T('Copy draft', 'Salin draf'); }, 1600);
    });
    row2.appendChild(cp);
    dv.appendChild(row2);

    var lint = card(w, T('Draft check', 'Pemeriksaan draf'), null, null);
    var wc = words(draft);
    check(lint, wc >= 120 && wc <= 350, T('Length 120–350 words — one screen, no scrolling', 'Panjang 120–350 kata — satu layar, tanpa gulir') + ' (' + wc + ')');
    check(lint, hasNumber(L.ev1) || hasNumber(L.ev2), T('At least one evidence paragraph carries a number', 'Minimal satu paragraf bukti memuat angka'));
    var cliches = clicheHits(draft);
    check(lint, cliches.length === 0, T('No filler clichés', 'Tanpa klise pengisi') + (cliches.length ? ' — ' + esc(cliches.join(', ')) : ''));
    check(lint, (L.hook || '').length > 40, T('The “why them” is specific enough to be non-transferable to another company', '“Mengapa mereka” cukup spesifik hingga tak bisa dipindah ke perusahaan lain'));
    if ((L.jd || '').trim()) {
      var terms = keyTerms(L.jd, 12);
      var low = draft.toLowerCase();
      var hit = terms.filter(function (t) { return low.indexOf(t) > -1; });
      check(lint, hit.length >= 3, T('Draft mirrors the JD’s load-bearing terms', 'Draf mencerminkan istilah penopang JD') + ' (' + hit.length + '/' + terms.length + ')');
      var chips = el('div');
      terms.forEach(function (t) { chips.appendChild(el('span', 'ps-chip ' + (hit.indexOf(t) > -1 ? 'hit' : 'miss'), esc(t))); });
      lint.appendChild(chips);
    }
    lint.appendChild(el('p', 'ps-note', T('The developer arranges your sentences into the taught structure and lints them — it does not write for you, because interviews probe every line you sign.',
      'Pengembang menata kalimatmu ke struktur yang diajarkan dan memeriksanya — ia tidak menulis untukmu, karena wawancara menggali tiap baris yang kamu tanda tangani.')));
  }

  /* ─── STATION: FGD / LGD ─── */
  var FGD = {
    brief: {
      en: 'Leaderless group discussion, five seats, assessors watching. Your group has 20 minutes to agree how to allocate a Rp 100m budget across three proposals: a campus job fair (asking Rp 60m), an alumni mentoring platform (Rp 50m), and a skills bootcamp (Rp 40m). The asks exceed the budget. Assessors grade the process — structure, evidence, inclusion, closure — not which option wins.',
      id: 'Diskusi kelompok tanpa pemimpin, lima kursi, asesor mengamati. Kelompokmu punya 20 menit untuk menyepakati alokasi anggaran Rp 100 jt ke tiga proposal: job fair kampus (minta Rp 60 jt), platform mentoring alumni (Rp 50 jt), dan bootcamp keterampilan (Rp 40 jt). Permintaan melebihi anggaran. Asesor menilai prosesnya — struktur, bukti, inklusi, penutupan — bukan opsi mana yang menang.'
    },
    rounds: [
      { who: { en: 'Raka (dominant)', id: 'Raka (dominan)' },
        say: { en: '“Easy. Job fair takes 60, bootcamp takes 40, done. Mentoring can wait a year. Next topic?”', id: '“Gampang. Job fair ambil 60, bootcamp 40, beres. Mentoring bisa tunggu setahun. Topik berikutnya?”' },
        moves: [
          { tag: 'structure', t: { en: 'Propose two minutes to agree decision criteria before comparing options.', id: 'Usulkan dua menit menyepakati kriteria keputusan sebelum membandingkan opsi.' },
            fb: { en: 'The strongest first move in any LGD: you gave the group a process. Assessors log this as initiation and structuring — and it protects every later argument from becoming a shouting match.', id: 'Langkah pembuka terkuat di LGD mana pun: kamu memberi kelompok sebuah proses. Asesor mencatatnya sebagai inisiasi dan penstrukturan — dan ia melindungi semua argumen berikutnya dari adu suara.' } },
          { tag: 'assert', t: { en: 'Counter immediately with your own allocation.', id: 'Balas langsung dengan alokasimu sendiri.' },
            fb: { en: 'Position against position, zero criteria — the discussion becomes a tug-of-war. Assessors see two dominators, not one leader.', id: 'Posisi lawan posisi, nol kriteria — diskusi jadi tarik tambang. Asesor melihat dua dominator, bukan satu pemimpin.' } },
          { tag: 'passive', t: { en: 'Say nothing yet; see where the group goes.', id: 'Belum bicara; lihat arah kelompok.' },
            fb: { en: 'Two silent rounds at the start and assessors have nothing to score you on. Early process moves are the cheapest airtime you will ever buy.', id: 'Dua ronde diam di awal dan asesor tak punya apa pun untuk menilaimu. Langkah proses awal adalah airtime termurah yang bisa kamu beli.' } },
          { tag: 'agree', t: { en: 'Agree with Raka to keep things moving.', id: 'Setujui Raka agar cepat.' },
            fb: { en: 'Speed without criteria is not progress. Agreeing to an unexamined split reads as compliance, not judgment.', id: 'Cepat tanpa kriteria bukan kemajuan. Menyetujui pembagian tanpa uji terbaca sebagai kepatuhan, bukan penilaian.' } }
        ] },
      { who: { en: 'Nia (quiet, has data)', id: 'Nia (pendiam, punya data)' },
        say: { en: 'Nia starts, “Actually, last year’s fair attendance—” and is talked over by Raka before she finishes.', id: 'Nia mulai, “Sebenarnya, kehadiran job fair tahun lalu—” dan disela Raka sebelum selesai.' },
        moves: [
          { tag: 'gatekeep', t: { en: '“Hold on — Nia, you had attendance numbers. What were they?”', id: '“Sebentar — Nia, kamu punya angka kehadiran. Berapa?”' },
            fb: { en: 'Gatekeeping: pulling a silenced voice back in. Assessors rate this among the highest-value moves — it surfaces the group’s only hard data and shows leadership without volume.', id: 'Gatekeeping: menarik kembali suara yang tenggelam. Asesor menilai ini di antara langkah bernilai tertinggi — memunculkan satu-satunya data keras kelompok dan menunjukkan kepemimpinan tanpa volume.' } },
          { tag: 'assert', t: { en: 'Use the gap to advance your own proposal.', id: 'Pakai celah itu untuk memajukan proposalmu.' },
            fb: { en: 'You just did to Nia what Raka did. The group loses its only dataset, and assessors saw who buried it.', id: 'Kamu baru saja melakukan ke Nia apa yang Raka lakukan. Kelompok kehilangan satu-satunya dataset, dan asesor melihat siapa menguburnya.' } },
          { tag: 'build', t: { en: 'Ask Raka to explain his 60/40 reasoning.', id: 'Minta Raka menjelaskan alasan 60/40-nya.' },
            fb: { en: 'A reasonable probe aimed at the wrong person — it hands the loudest voice more airtime while the data stays buried.', id: 'Gali yang wajar tapi ke orang yang salah — memberi suara terkeras lebih banyak airtime sementara datanya tetap terkubur.' } },
          { tag: 'summary', t: { en: 'Summarise the two positions so far.', id: 'Rangkum dua posisi sejauh ini.' },
            fb: { en: 'Premature — there is nothing decision-shaped to summarise yet, and the summary talks over Nia a second time.', id: 'Terlalu dini — belum ada yang berbentuk keputusan untuk dirangkum, dan rangkuman itu menimpa Nia untuk kedua kalinya.' } }
        ] },
      { who: { en: 'Dimas (tangent-prone)', id: 'Dimas (suka melantur)' },
        say: { en: '“About the fair — last year’s catering was a disaster. I know a vendor. Should we discuss food options?”', id: '“Soal job fair — katering tahun lalu kacau. Aku kenal vendor. Kita bahas opsi makanan?”' },
        moves: [
          { tag: 'redirect', t: { en: '“Good operational note — let’s park it. We still owe ourselves the allocation criteria.”', id: '“Catatan operasional bagus — kita parkir dulu. Kita masih berutang kriteria alokasi.”' },
            fb: { en: 'A respectful redirect: the tangent is acknowledged, parked, and the group returns to the task. Assessors log task focus — rudeness would have cost you the same points the tangent would.', id: 'Pengalihan yang hormat: lanturan diakui, diparkir, dan kelompok kembali ke tugas. Asesor mencatat fokus tugas — kekasaran akan menghanguskan poin yang sama seperti lanturannya.' } },
          { tag: 'tangent', t: { en: 'Share your own catering story.', id: 'Bagikan cerita kateringmu sendiri.' },
            fb: { en: 'Two people are now discussing food in a budget-allocation exercise. Minutes are the scarcest resource in an LGD.', id: 'Dua orang kini membahas makanan dalam latihan alokasi anggaran. Menit adalah sumber daya paling langka di LGD.' } },
          { tag: 'harsh', t: { en: '“That’s irrelevant, Dimas.”', id: '“Itu tidak relevan, Dimas.”' },
            fb: { en: 'Correct direction, corrosive delivery. Assessors score collaboration too — you can lose on tone what you win on focus.', id: 'Arah benar, penyampaian korosif. Asesor juga menilai kolaborasi — kamu bisa kalah di nada apa yang menang di fokus.' } },
          { tag: 'passive', t: { en: 'Let it play out.', id: 'Biarkan berjalan.' },
            fb: { en: 'The tangent eats three minutes. Groups rarely self-correct — someone has to hold the thread, and it may as well be you.', id: 'Lanturan memakan tiga menit. Kelompok jarang mengoreksi diri — seseorang harus memegang benangnya, dan sebaiknya kamu.' } }
        ] },
      { who: { en: 'Raka vs Nia', id: 'Raka vs Nia' },
        say: { en: 'Nia finally shares: 1,800 students attended the fair; 60 reported offers. Raka waves it off — “last year doesn’t matter.”', id: 'Nia akhirnya berbagi: 1.800 mahasiswa hadir di job fair; 60 melaporkan tawaran. Raka mengibaskannya — “tahun lalu tidak relevan.”' },
        moves: [
          { tag: 'evidence', t: { en: '“It’s the only real number we have — Rp 60m for ~60 offers is Rp 1m per offer. Let’s cost the other two the same way.”', id: '“Ini satu-satunya angka nyata kita — Rp 60 jt untuk ~60 tawaran berarti Rp 1 jt per tawaran. Mari hitung dua lainnya dengan cara sama.”' },
            fb: { en: 'You converted a dismissed datapoint into a comparable metric — cost per outcome — and gave the group a ruler. This is the analytical move assessors quote in debriefs.', id: 'Kamu mengubah data yang diabaikan menjadi metrik sebanding — biaya per hasil — dan memberi kelompok sebuah penggaris. Ini langkah analitis yang dikutip asesor saat debrief.' } },
          { tag: 'side', t: { en: 'Back Raka — fresh year, fresh assumptions.', id: 'Dukung Raka — tahun baru, asumsi baru.' },
            fb: { en: 'Discarding the only evidence in the room without offering better is anti-analysis, and the quiet members note who gets backed.', id: 'Membuang satu-satunya bukti di ruangan tanpa menawarkan yang lebih baik adalah anti-analisis, dan anggota pendiam mencatat siapa yang didukung.' } },
          { tag: 'defend', t: { en: '“Let Nia speak — that was rude.”', id: '“Biarkan Nia bicara — itu kasar.”' },
            fb: { en: 'Defending the person but not the data escalates the interpersonal thread; the number still dies. Bridge to the evidence instead — it protects Nia and the decision.', id: 'Membela orang tapi bukan datanya mengeskalasi benang interpersonal; angkanya tetap mati. Jembatani ke bukti — itu melindungi Nia sekaligus keputusannya.' } },
          { tag: 'passive', t: { en: 'Stay out of the crossfire.', id: 'Menghindar dari baku tembak.' },
            fb: { en: 'Conflict rounds are where assessors learn the most about you. Absence is also an answer.', id: 'Ronde konflik adalah tempat asesor paling banyak belajar tentangmu. Absen juga sebuah jawaban.' } }
        ] },
      { who: { en: 'Time check', id: 'Cek waktu' },
        say: { en: 'Eight minutes left. Three positions on the table, no agreed rule for choosing between them.', id: 'Delapan menit tersisa. Tiga posisi di atas meja, belum ada aturan yang disepakati untuk memilih.' },
        moves: [
          { tag: 'decide', t: { en: 'Propose an explicit rule: rank by expected offers per rupiah, fund in order until the budget runs out.', id: 'Usulkan aturan eksplisit: peringkatkan berdasar perkiraan tawaran per rupiah, danai berurutan sampai anggaran habis.' },
            fb: { en: 'A decision rule converts three opinions into one computation. Groups with an agreed rule close; groups without one run out the clock — assessors watch for exactly this.', id: 'Aturan keputusan mengubah tiga opini menjadi satu perhitungan. Kelompok dengan aturan menutup; tanpa itu kehabisan waktu — asesor mengamati persis hal ini.' } },
          { tag: 'vote', t: { en: 'Call a quick vote right now.', id: 'Minta voting cepat sekarang.' },
            fb: { en: 'A vote without shared criteria just counts pre-existing biases. It closes fast — and shallow, which assessors read as process failure.', id: 'Voting tanpa kriteria bersama hanya menghitung bias yang sudah ada. Cepat menutup — tapi dangkal, yang dibaca asesor sebagai kegagalan proses.' } },
          { tag: 'discuss', t: { en: 'Keep exploring each option’s merits.', id: 'Terus jelajahi kelebihan tiap opsi.' },
            fb: { en: 'Exploration past the decision point is procrastination in a suit. Eight minutes is closing time.', id: 'Eksplorasi melewati titik keputusan adalah penundaan berjas. Delapan menit adalah waktu menutup.' } },
          { tag: 'defer', t: { en: 'Ask Raka to decide — he has the strongest views.', id: 'Minta Raka memutuskan — pandangannya paling kuat.' },
            fb: { en: 'Volume is not a mandate. Delegating the close to the dominator erases the group’s work — and your own.', id: 'Volume bukan mandat. Menyerahkan penutupan ke dominator menghapus kerja kelompok — dan kerjamu.' } }
        ] },
      { who: { en: 'Two minutes left', id: 'Dua menit tersisa' },
        say: { en: 'The group leans towards fair + bootcamp using the agreed rule. Nobody has stated the conclusion aloud.', id: 'Kelompok condong ke job fair + bootcamp memakai aturan yang disepakati. Belum ada yang menyatakan simpulannya.' },
        moves: [
          { tag: 'close', t: { en: 'Summarise: the rule, the resulting allocation, one risk logged, and ask “can everyone live with this?”', id: 'Rangkum: aturannya, alokasi hasilnya, satu risiko dicatat, dan tanya “semua bisa menerima ini?”' },
            fb: { en: 'The complete close: decision restated, dissent checked, risk on record. Assessors write down the name of whoever does this — the discussion now has an owner.', id: 'Penutupan lengkap: keputusan diulang, keberatan dicek, risiko tercatat. Asesor menulis nama siapa pun yang melakukannya — diskusi kini punya pemilik.' } },
          { tag: 'fizzle', t: { en: 'Time is basically up — let it end.', id: 'Waktu hampir habis — biarkan berakhir.' },
            fb: { en: 'An unstated conclusion is not a conclusion. The group did the work and forfeited the credit in the last ninety seconds.', id: 'Simpulan tak terucap bukanlah simpulan. Kelompok sudah bekerja dan melepas kreditnya di sembilan puluh detik terakhir.' } },
          { tag: 'restate', t: { en: 'Restate your own favourite option once more.', id: 'Ulangi sekali lagi opsi favoritmu.' },
            fb: { en: 'The window for advocacy closed at the decision rule. Reopening it now reads as not listening.', id: 'Jendela advokasi tertutup saat aturan keputusan disepakati. Membukanya lagi terbaca sebagai tidak mendengarkan.' } },
          { tag: 'extend', t: { en: 'Ask the assessors for five more minutes.', id: 'Minta lima menit tambahan ke asesor.' },
            fb: { en: 'The time limit is part of the exercise. Asking to move it tells assessors the group — and you — cannot land inside constraints.', id: 'Batas waktu adalah bagian latihan. Meminta memindahkannya memberi tahu asesor kelompok — dan kamu — tak bisa mendarat dalam batasan.' } }
        ] }
    ],
    best: ['structure', 'gatekeep', 'redirect', 'evidence', 'decide', 'close'],
    functions: [
      ['structure', { en: 'Initiating & structuring', id: 'Inisiasi & penstrukturan' }],
      ['gatekeep', { en: 'Gatekeeping — bringing quiet voices in', id: 'Gatekeeping — mengajak suara pendiam' }],
      ['redirect', { en: 'Task focus — parking tangents', id: 'Fokus tugas — memarkir lanturan' }],
      ['evidence', { en: 'Building on evidence', id: 'Membangun di atas bukti' }],
      ['decide', { en: 'Proposing a decision rule', id: 'Mengusulkan aturan keputusan' }],
      ['close', { en: 'Summarising & closing', id: 'Merangkum & menutup' }]
    ]
  };

  function fgdView(w) {
    var s = load(); s.fgd = s.fgd || { attempts: [] };
    if (!fgdRun) {
      var c = card(w, T('Station 4 · FGD / LGD practice round', 'Stasiun 4 · Ronde latihan FGD / LGD'),
        T('Six rounds, one seat, assessors watching', 'Enam ronde, satu kursi, asesor mengamati'),
        B(FGD.brief));
      c.appendChild(el('p', 'ps-note', T('Scripted simulation: the personas follow an authored scenario and your six choices are scored against the assessor functions taught in Lessons 4.1–4.2. It trains move selection — a live group with real people (Lesson 4.3) is the graduation exercise.',
        'Simulasi terskrip: para persona mengikuti skenario yang ditulis dan enam pilihanmu dinilai terhadap fungsi asesor dari Pelajaran 4.1–4.2. Ia melatih pemilihan langkah — kelompok langsung dengan orang nyata (Pelajaran 4.3) adalah latihan kelulusannya.')));
      var row = el('div', 'ps-row');
      var go = el('button', 'ps-btn', T('Take your seat →', 'Ambil kursimu →'));
      go.addEventListener('click', function () {
        fgdRun = { i: 0, picks: [], shown: false };
        render();
      });
      row.appendChild(go);
      c.appendChild(row);
      var at = (s.fgd.attempts || []).slice(-4).reverse();
      if (at.length) {
        var c2 = card(w, T('Previous rounds', 'Ronde sebelumnya'), null, null);
        at.forEach(function (a) {
          c2.appendChild(el('p', 'ps-sub', new Date(a.date).toLocaleDateString() + ' — ' + a.hit + '/' + FGD.best.length + ' ' + T('assessor functions demonstrated', 'fungsi asesor ditunjukkan')));
        });
      }
      return;
    }
    var R = FGD.rounds[fgdRun.i];
    var c = el('div', 'ps-card');
    c.appendChild(el('div', 'ps-kick', T('Round', 'Ronde') + ' ' + (fgdRun.i + 1) + ' / ' + FGD.rounds.length));
    var bar = el('div', 'ps-bar');
    bar.appendChild(el('i')).style.width = (fgdRun.i / FGD.rounds.length * 100) + '%';
    c.appendChild(bar);
    var say = el('div', 'ps-say');
    say.appendChild(el('b', null, esc(B(R.who))));
    say.appendChild(el('span', null, esc(B(R.say))));
    c.appendChild(say);
    var picked = fgdRun.picks[fgdRun.i];
    R.moves.forEach(function (mv, k) {
      var b = el('button', 'ps-move', esc(B(mv.t)));
      if (picked !== undefined) {
        b.disabled = true;
        if (k === picked) b.classList.add('pick');
      }
      b.addEventListener('click', function () {
        if (fgdRun.picks[fgdRun.i] !== undefined) return;
        fgdRun.picks[fgdRun.i] = k;
        render();
      });
      c.appendChild(b);
    });
    if (picked !== undefined) {
      c.appendChild(el('div', 'ps-fb', esc(B(R.moves[picked].fb))));
      var row = el('div', 'ps-row');
      var nx = el('button', 'ps-btn', fgdRun.i < FGD.rounds.length - 1 ? T('Next round →', 'Ronde berikutnya →') : T('Hear the debrief →', 'Dengar debrief →'));
      nx.addEventListener('click', function () {
        if (fgdRun.i < FGD.rounds.length - 1) { fgdRun.i++; render(); }
        else fgdDebrief(s);
      });
      row.appendChild(nx);
      c.appendChild(row);
    }
    body.querySelector('.ps-in').appendChild(c);
  }

  function fgdDebrief(s) {
    var tags = fgdRun.picks.map(function (k, i) { return FGD.rounds[i].moves[k].tag; });
    var hit = FGD.best.filter(function (t) { return tags.indexOf(t) > -1; });
    s.fgd.attempts.push({ date: Date.now(), hit: hit.length, tags: tags });
    save(s);
    body.innerHTML = '';
    body.scrollTop = 0;
    var w = el('div', 'ps-in');
    body.appendChild(w);
    var c = card(w, T('Assessor debrief', 'Debrief asesor'),
      hit.length + ' / ' + FGD.best.length + ' ' + T('assessor functions demonstrated', 'fungsi asesor ditunjukkan'), null);
    var bar = el('div', 'ps-bar');
    bar.appendChild(el('i')).style.width = (hit.length / FGD.best.length * 100) + '%';
    c.appendChild(bar);
    FGD.functions.forEach(function (f) {
      check(c, hit.indexOf(f[0]) > -1, esc(B(f[1])));
    });
    c.appendChild(el('p', 'ps-sub', hit.length >= 5
      ? T('You held the thread: structure early, evidence in the middle, an owned close. Next: run a live mock with friends (Lesson 4.3) and record it — real groups improvise off-script.', 'Kamu memegang benangnya: struktur di awal, bukti di tengah, penutupan yang dimiliki. Berikutnya: jalankan simulasi langsung dengan teman (Pelajaran 4.3) dan rekam — kelompok nyata berimprovisasi di luar skrip.')
      : hit.length >= 3
      ? T('A solid seat with gaps — reread the functions you missed above; each maps to a framework in Lesson 4.2, then retake with different choices.', 'Kursi yang solid dengan celah — baca ulang fungsi yang terlewat di atas; masing-masing terpetakan ke kerangka Pelajaran 4.2, lalu ulangi dengan pilihan berbeda.')
      : T('Most rounds went to advocacy or silence. The counterintuitive rule of every LGD: process moves outscore opinion moves. Revisit Lesson 4.1 on what assessors actually grade.', 'Sebagian besar ronde jatuh ke advokasi atau diam. Aturan berlawanan-intuisi tiap LGD: langkah proses mengungguli langkah opini. Kunjungi lagi Pelajaran 4.1 tentang yang benar-benar dinilai asesor.')));
    var row = el('div', 'ps-row');
    var again = el('button', 'ps-btn', T('Retake the round →', 'Ulangi rondenya →'));
    again.addEventListener('click', function () { fgdRun = { i: 0, picks: [] }; render(); });
    var back = el('button', 'ps-btn ghost', T('Back to the studio', 'Kembali ke studio'));
    back.addEventListener('click', function () { fgdRun = null; render(); });
    row.appendChild(again); row.appendChild(back);
    c.appendChild(row);
    c.appendChild(el('p', 'ps-note', T('Choices and results stay in this browser. The scenario is authored; its feedback teaches the moves, not a verdict on you.',
      'Pilihan dan hasil tinggal di peramban ini. Skenarionya ditulis; umpan baliknya mengajarkan langkah, bukan vonis atasmu.')));
  }

  /* ─── render / open / close ─── */
  function render() {
    tabsEl.querySelectorAll('.ps-tab').forEach(function (b) {
      b.classList.toggle('on', b.dataset.tab === tab);
    });
    body.innerHTML = '';
    body.scrollTop = 0;
    var w = el('div', 'ps-in');
    body.appendChild(w);
    if (tab === 'linkedin') linkedinView(w);
    else if (tab === 'cv') cvView(w);
    else if (tab === 'letter') letterView(w);
    else fgdView(w);
  }

  function open(mode) {
    build();
    if (mode === 'linkedin' || mode === 'cv' || mode === 'letter' || mode === 'fgd') { tab = mode; fgdRun = null; }
    root.classList.add('open');
    document.body.classList.add('lms-lock');
    render();
  }
  function close() {
    fgdRun = null;
    if (root) root.classList.remove('open');
    document.body.classList.remove('lms-lock');
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-pack-studio]');
    if (!b) return;
    e.preventDefault();
    open(b.getAttribute('data-pack-studio'));
  });
  document.addEventListener('mt:launch-tool', function (e) {
    if (e.detail && e.detail.tool === 'studio') {
      var p = document.querySelector('.lmsp.open .lmsp-back');
      if (p) p.click();
      open(e.detail.mode);
    }
  });
  document.querySelectorAll('.ctl button, button[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      setTimeout(function () {
        if (root && root.classList.contains('open') && !fgdRun) render();
      }, 60);
    });
  });

  window.MT_PACK_STUDIO = { open: open };
})();
