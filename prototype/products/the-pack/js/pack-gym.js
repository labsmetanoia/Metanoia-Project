/**
 * THE PACK — THE SCREENING GYM
 * ----------------------------
 * Three stations in one workspace, matching the funnel stages the
 * course trains:
 *   lab     — the Test Lab: an original tiered bank (TPA, BUMN TKD and
 *             AKHLAK, SKD CPNS) with drills, timed sets, section and
 *             full-length practice forms, Kraepelin, AKHLAK mirror and a
 *             study plan. Engine: js/pack-testlab-core.js + js/pack-testlab.js.
 *             Practice items are Metanoia's own; nothing is an official
 *             examination question.
 *   ats     — CV vs job-description readiness check, computed entirely
 *             on-device (rule-based keyword coverage + section signals;
 *             the UI says exactly what it is and is not).
 *   tracker — application pipeline with stage funnel metrics.
 *
 * Honesty contract: no hidden scoring models, no fabricated percentages.
 * Lab scores calibrate against this bank only; the ATS check is a
 * transparent lint, not a prediction of any employer's system.
 * Storage: localStorage 'tl_*' (Lab), 'mt_pack_apps' (tracker).
 * Skin: js/tool-shell.js + css/tool-shell.css (shared with the other instruments).
 */
(function () {
  'use strict';
  var SH = window.MT_SHELL;
  var LAB = window.MT_TESTLAB_UI || null;
  if (!SH) return;

  var LSA = 'mt_pack_gym', LSP = 'mt_pack_apps';
  function lang() { try { return localStorage.getItem('mtLang') === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function T(en, id) { return lang() === 'id' ? id : en; }
  function B(pair) { return pair ? (pair[lang()] || pair.en) : ''; }
  function load(k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var el = SH.el, esc = SH.esc;

  var STAGES = [
    ['applied', { en: 'Applied', id: 'Dilamar' }],
    ['screen', { en: 'Screen passed', id: 'Lolos saringan' }],
    ['test', { en: 'Test passed', id: 'Lolos tes' }],
    ['interview', { en: 'Interviewing', id: 'Tahap wawancara' }],
    ['offer', { en: 'Offer', id: 'Tawaran' }],
    ['rejected', { en: 'Rejected', id: 'Ditolak' }]
  ];
  var TIERS = [
    ['reach', { en: 'Reach', id: 'Jangkauan' }],
    ['match', { en: 'Match', id: 'Sepadan' }],
    ['foundation', { en: 'Foundation', id: 'Fondasi' }]
  ];
  var TABS = [
    ['drill', { en: 'Test Lab', id: 'Test Lab' }],
    ['ats', { en: 'ATS Check', id: 'Cek ATS' }],
    ['tracker', { en: 'Tracker', id: 'Pelacak' }]
  ];
  var SIGN = [{ en: 'Same effort.', id: 'Usaha yang sama.' }, { en: 'A brighter tomorrow.', id: 'Esok yang lebih cerah.' }];

  function bankStats() {
    if (LAB) return LAB.stats();
    var g = load(LSA) || { attempts: [] };
    return { questions: 0, sets: 0, attempts: (g.attempts || []).length };
  }

  var shell = null, tab = 'drill';
  var run = null; /* legacy flag; the Lab owns its own run state */

  function build() {
    if (shell) return;
    shell = SH.mount({
      id: 'packGym', product: 'The Pack', tool: 'Screening Gym',
      scene: '../../assets/bg/pack.jpg', scenePos: 'center 40%',
      onClose: close
    });
  }
  function paintTabs() {
    shell.setTabs(TABS.map(function (t) { return { key: t[0], label: t[1], on: tab === t[0], disabled: !!(labBusy() && tab !== t[0]) }; }),
      function (k) { if (labBusy()) return; tab = k; render(); });
  }

  /* ─── TEST LAB (station 1) ───
     The item bank, modes, timers, reports and trackers live in js/pack-testlab-core.js
     and js/pack-testlab.js; this shell only hosts the view and keeps the tabs locked
     while a timed run is in progress. */
  function labHome() {
    if (!LAB) {
      var c = SH.card({ kick: { en: 'Test Lab', id: 'Test Lab' }, title: { en: 'The Lab is loading', id: 'Lab sedang dimuat' } });
      c.appendChild(SH.note(esc(T('The question bank did not load. Refresh the page to try again.', 'Bank soal belum termuat. Muat ulang halaman untuk mencoba lagi.'))));
      return SH.stage(null, c);
    }
    var v = LAB.view(shell);
    setTimeout(function () { LAB.onOpen(); }, 0);
    return v;
  }
  function labBusy() { return !!(LAB && LAB.busy()); }

  /* ─── ATS CHECK ─── */
  var STOP = {};
  ('the a an and or of to in for with on at by from as is are was be this that it its your our their his her ' +
   'you we they i not no will can may all any each other more most such than then so if but do does did done ' +
   'have has had who whom whose which what when where how into over under out up down about after before between ' +
   'dan atau yang di ke dari untuk dengan pada oleh adalah akan bisa dapat tidak ini itu para kami kita mereka ' +
   'anda saya juga serta agar dalam atas bawah antara sebagai telah sudah belum harus lebih paling sangat ' +
   'ability experience experiences work working strong good excellent skills skill team candidates candidate role ' +
   'job description requirements responsibilities preferred required minimum years year required').split(/\s+/).forEach(function (s) { STOP[s] = 1; });

  function tokens(text) {
    return String(text).toLowerCase().replace(/[^a-z0-9+#./\s-]/g, ' ').split(/\s+/).filter(function (t) { return t.length > 2 && !STOP[t] && !/^\d+$/.test(t); });
  }
  function topTerms(jd) {
    var toks = tokens(jd), freq = {};
    toks.forEach(function (t) { freq[t] = (freq[t] || 0) + 1; });
    for (var i = 0; i < toks.length - 1; i++) { var bg = toks[i] + ' ' + toks[i + 1]; freq[bg] = (freq[bg] || 0) + 1.2; }
    return Object.keys(freq).filter(function (t) { return freq[t] >= (t.indexOf(' ') > -1 ? 2.4 : 2); }).sort(function (a, b) { return freq[b] - freq[a]; }).slice(0, 18);
  }
  var atsState = { cv: '', jd: '', done: false, cvMode: 'paste', jdMode: 'paste', cvFile: '', jdFile: '' };

  function docPanel(num, icon, title, sub, key, ph) {
    var p = SH.panel({ num: num, icon: icon, title: title, sub: sub });
    var ta = SH.input('textarea', { value: atsState[key] || '', placeholder: ph });
    var status = el('p', 'ts-note'); status.hidden = true;
    var modeKey = key + 'Mode';
    var dz = null;
    /* both routes stay available; the chosen one leads the panel */
    function paintMode() {
      if (!dz) return;
      var up = atsState[modeKey] === 'upload';
      if (up) { p.insertBefore(dz, ta); ta.placeholder = SH.txt({ en: 'Extracted text appears here, edit it if the parse missed anything.', id: 'Teks hasil ekstraksi muncul di sini; sunting jika ada yang terlewat.' }); }
      else { p.insertBefore(ta, dz); ta.placeholder = SH.txt(ph); }
    }
    p.appendChild(SH.seg({ value: atsState[modeKey], options: [['paste', { en: 'Paste text', id: 'Tempel teks' }], ['upload', { en: 'Upload file', id: 'Unggah berkas' }]],
      onPick: function (m) { atsState[modeKey] = m; paintMode(); } }));
    ta.addEventListener('input', function () { atsState[key] = ta.value; });
    p.appendChild(ta);
    if (window.MT_RANGE_DOC) {
      dz = SH.drop({ accept: window.MT_RANGE_DOC.ACCEPT, title: { en: 'Drag & drop your file here', id: 'Seret & lepas berkasmu di sini' }, text: { en: 'or click to browse', id: 'atau klik untuk memilih' },
        small: { en: 'PDF, DOCX, ODT, RTF, TXT or MD (max 10 MB)', id: 'PDF, DOCX, ODT, RTF, TXT, atau MD (maks 10 MB)' },
        onFile: function (f) {
          status.hidden = false; status.innerHTML = ''; status.appendChild(SH.svg('hourglass')); status.appendChild(el('span', null, esc(T('Reading on-device…', 'Membaca di perangkat…'))));
          window.MT_RANGE_DOC.extract(f).then(function (doc) {
            ta.value = doc.text; atsState[key] = doc.text; atsState[key + 'File'] = f.name;
            status.innerHTML = ''; status.appendChild(SH.svg('checkCircle')); status.appendChild(el('span', null, '✓ ' + esc(f.name) + ' · ' + doc.text.length + esc(T(' characters extracted', ' karakter terekstrak'))));
          }).catch(function (err) {
            status.innerHTML = ''; status.appendChild(SH.svg('x')); status.appendChild(el('span', null, esc(window.MT_RANGE_DOC.message(err && err.message, lang() === 'id'))));
          });
        } });
      p.appendChild(dz);
    }
    p.appendChild(status);
    paintMode();
    return { el: p, ta: ta };
  }

  function atsView() {
    var hero = SH.hero({
      kicker: { en: 'Station 2 · ATS readiness check', id: 'Pos 2 · Cek kesiapan ATS' },
      title: { en: ['Your CV, read the way', 'a machine reads it'], id: ['CV-mu, dibaca dengan cara', 'mesin membacanya'] },
      sub: { en: 'Paste or upload your CV, paste a real job description, and get a transparent, rule-based read: keyword coverage, section signals, red flags.', id: 'Tempel atau unggah CV-mu, tempel deskripsi lowongan yang sesungguhnya, lalu dapatkan pembacaan transparan berbasis aturan: cakupan kata kunci, sinyal tiap bagian, dan tanda bahaya.' },
      hand: { en: 'Same you.\nHigher chances.', id: 'Dirimu yang sama.\nPeluang lebih tinggi.' },
      side: [
        { icon: 'bulb', title: { en: 'Why this matters', id: 'Mengapa ini penting' }, text: { en: 'Applicant Tracking Systems (ATS) scan for keywords, structure, and relevance, not just design. Optimise for clarity, not creativity.', id: 'Applicant Tracking Systems (ATS) memindai kata kunci, struktur, dan relevansi, bukan sekadar desain. Optimalkan kejelasan, bukan kreativitas.' } },
        { icon: 'target', title: { en: 'Tips for a better check', id: 'Tips untuk pemeriksaan yang lebih baik' }, list: [
          { en: 'Use the exact job description from the company', id: 'Pakai deskripsi lowongan persis dari perusahaannya' },
          { en: 'Include the full CV (all relevant sections)', id: 'Sertakan CV lengkap (semua bagian yang relevan)' },
          { en: 'Keep formatting simple (avoid images/tables)', id: 'Jaga format tetap sederhana (hindari gambar/tabel)' },
          { en: 'Check for specific skills, tools, and industry terms', id: 'Periksa keterampilan, alat, dan istilah industri yang spesifik' }] }],
      tagline: [{ en: 'Prepare smarter.', id: 'Bersiap lebih cerdas.' }, { en: 'Go further.', id: 'Melangkah lebih jauh.' }]
    });
    var main = el('div', 'ts-main');
    var two = el('div', 'ts-two');
    var cvP = docPanel(1, 'doc', { en: 'Your CV', id: 'CV-mu' }, { en: 'Paste your CV text here, or upload a file below.', id: 'Tempel teks CV-mu di sini, atau unggah berkasnya di bawah.' }, 'cv', { en: 'Paste your CV text here…', id: 'Tempel teks CV-mu di sini…' });
    var jdP = docPanel(2, 'briefcase', { en: 'The job description', id: 'Deskripsi lowongannya' }, { en: 'Paste the full JD, including requirements.', id: 'Tempel deskripsi lowongan selengkapnya, termasuk persyaratannya.' }, 'jd', { en: 'Paste the job description here…', id: 'Tempel deskripsi lowongannya di sini…' });
    two.appendChild(cvP.el); two.appendChild(jdP.el);
    main.appendChild(two);
    var row = el('div', 'ts-row'); row.style.cssText = 'gap:22px;margin:4px 0 6px';
    row.appendChild(SH.btn({ en: 'Run the check', id: 'Jalankan pemeriksaan' }, { icon: 'arrow', onClick: function () {
      atsState.cv = cvP.ta.value; atsState.jd = jdP.ta.value;
      atsState.done = !!(cvP.ta.value.trim() && jdP.ta.value.trim());
      render();
      setTimeout(function () { var r = shell.body.querySelector('[data-ats-result]'); if (r) r.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 80);
    } }));
    row.appendChild(SH.priv({ en: '100% private', id: '100% privat' }, { en: 'Everything runs on this device. Nothing is uploaded anywhere.', id: 'Semua berjalan di perangkat ini. Tidak ada yang diunggah ke mana pun.' }));
    main.appendChild(row);

    if (atsState.done) {
      var cv = atsState.cv, jd = atsState.jd;
      var terms = topTerms(jd);
      var cvLow = cv.toLowerCase();
      var hits = [], misses = [];
      terms.forEach(function (t) { (cvLow.indexOf(t) > -1 ? hits : misses).push(t); });
      var cov = terms.length ? Math.round(hits.length / terms.length * 100) : 0;
      var pipeEmail = /[\w.+-]+@[\w-]+\.[a-z]{2,}/i.test(cv);
      var pipeEdu = /education|pendidikan|university|universitas|institut/i.test(cv);
      var pipeExp = /experience|pengalaman|internship|magang|project|proyek/i.test(cv);

      var pl = SH.card({ kick: { en: 'The pipeline', id: 'Alur kerja' }, title: { en: 'What the machine did with your file', id: 'Apa yang dilakukan mesin terhadap berkasmu' },
        text: T('A real ATS runs your application through stages, and each stage can silently drop you. This is the same sequence, run transparently on your text:', 'ATS sungguhan menjalankan lamaranmu lewat tahapan, dan tiap tahap bisa diam-diam menggugurkanmu. Ini urutan yang sama, dijalankan transparan pada teksmu:') });
      pl.setAttribute('data-ats-result', '1');
      [[T('Parse', 'Parse'), 'doc', cv.length + T(' characters of plain text extracted', ' karakter teks polos berhasil diambil'), cv.length > 400],
       [T('Identify', 'Identifikasi'), 'search', pipeEmail ? T('contact details located', 'detail kontak ditemukan') : T('no email found: many systems file this under “incomplete”', 'email tidak ditemukan: banyak sistem mencatat ini sebagai “tidak lengkap”'), pipeEmail],
       [T('Segment', 'Segmentasi'), 'layers', (pipeEdu && pipeExp) ? T('education and experience sections recognised', 'bagian pendidikan dan pengalaman terkenali') : T('standard section headings missing, content risks landing in the wrong field', 'judul bagian standar tidak ada, isinya berisiko masuk ke kolom yang salah'), pipeEdu && pipeExp],
       [T('Match', 'Cocokkan'), 'target', hits.length + '/' + terms.length + T(' load-bearing JD terms found', ' istilah kunci dari deskripsi lowongan ditemukan'), terms.length > 0 && hits.length / Math.max(terms.length, 1) >= 0.5]
      ].forEach(function (st, i) {
        pl.appendChild(SH.item({ num: i + 1, icon: st[1], title: st[0], text: esc(st[2]), on: st[3], ctl: SH.pill(st[3] ? { en: 'Pass', id: 'Lolos' } : { en: 'At risk', id: 'Berisiko' }, st[3] ? 'ok' : 'bad') }));
      });
      pl.appendChild(SH.note(esc(T('Each stage mirrors what commercial parsers document publicly; thresholds and weights vary by employer, which is exactly why this simulator shows its rules instead of guessing theirs.', 'Tiap tahap mencerminkan yang didokumentasikan parser komersial secara publik; ambang dan bobot berbeda per pemberi kerja; itulah mengapa simulator ini menunjukkan aturannya alih-alih menebak milik mereka.'))));
      main.appendChild(pl);

      var r = SH.card({ kick: { en: 'Result: transparent and rule-based', id: 'Hasil: transparan dan berbasis aturan' }, title: cov + '% ' + T('load-bearing term coverage', 'cakupan istilah kunci') });
      r.appendChild(SH.bar(cov, true));
      var hd = el('div'); hd.style.marginTop = '14px';
      hd.appendChild(el('div', 'ts-kick', esc(T('Found in your CV', 'Ditemukan di CV-mu'))));
      var tg1 = el('div', 'ts-tags'); hits.forEach(function (t) { tg1.appendChild(SH.pill('✓ ' + t, 'ok')); }); if (!hits.length) tg1.appendChild(SH.pill({ en: 'none', id: 'tidak ada' }, 'mute')); hd.appendChild(tg1);
      var k2 = el('div', 'ts-kick', esc(T('Missing', 'Hilang'))); k2.style.marginTop = '14px'; hd.appendChild(k2);
      var tg2 = el('div', 'ts-tags'); misses.forEach(function (t) { tg2.appendChild(SH.pill('✗ ' + t, 'bad')); }); if (!misses.length) tg2.appendChild(SH.pill({ en: 'none: strong mirroring', id: 'tidak ada: semuanya sudah tercermin' }, 'ok')); hd.appendChild(tg2);
      r.appendChild(hd);
      main.appendChild(r);

      var hasEmail = pipeEmail;
      var hasPhone = /(\+62|08)\d{7,}/.test(cv.replace(/[\s.-]/g, ''));
      var hasNums = (cv.match(/\d+%|\bRp\s?\d|\d{2,}/g) || []).length >= 5;
      var lenOK = cv.length > 900 && cv.length < 9000;
      var sc = SH.card({ kick: { en: 'Section & hygiene signals', id: 'Sinyal struktur & kerapian' }, title: { en: 'Parse-friendly, or not', id: 'Ramah mesin, atau tidak' } });
      [[hasEmail, T('Contact email present in body text', 'Email kontak ada di badan teks')],
       [hasPhone, T('Phone number detected', 'Nomor telepon terdeteksi')],
       [pipeEdu, T('Education section recognisable', 'Bagian pendidikan terbaca')],
       [pipeExp, T('Experience / projects section recognisable', 'Bagian pengalaman / proyek terbaca')],
       [hasNums, T('Quantified evidence (numbers) present', 'Ada bukti berupa angka')],
       [lenOK, T('Length in the one-page text range', 'Panjangnya dalam rentang satu halaman')]].forEach(function (s) { sc.appendChild(SH.check(s[0], esc(s[1]))); });
      sc.appendChild(SH.note(esc(T('What this check is: a transparent lint of keyword coverage and parse-friendly signals, computed on your device against this JD. What it is not: a prediction of any specific employer’s ATS configuration or cutoff. Add missing terms only where your true experience supports them, interviews probe every keyword you claim.',
        'Apa pemeriksaan ini: pengecekan transparan atas cakupan kata kunci dan sinyal yang mudah dibaca mesin, dihitung di perangkatmu terhadap deskripsi lowongan ini. Apa yang bukan: prediksi konfigurasi atau ambang ATS di perusahaan tertentu. Tambahkan istilah yang hilang hanya jika pengalamanmu benar-benar mendukungnya; di wawancara, setiap kata kunci yang kamu klaim akan digali.')), 'shieldTick'));
      main.appendChild(sc);
      main.appendChild(SH.cta({ icon: 'send', title: { en: 'Ready to apply?', id: 'Siap melamar?' },
        text: { en: 'Log the application in the tracker so the funnel can tell you where to train next.', id: 'Catat lamarannya di pelacak agar corongmu bisa memberi tahu di mana harus berlatih berikutnya.' },
        actions: [SH.btn({ en: 'Open the tracker', id: 'Buka pelacak' }, { icon: 'arrow', onClick: function () { tab = 'tracker'; render(); } })] }));
    }
    return SH.stage(hero, main);
  }

  /* ─── TRACKER ─── */
  function trackerView() {
    var apps = load(LSP) || [];
    var n = apps.length;
    var past = function (stages) { return apps.filter(function (a) { return stages.indexOf(a.stage) > -1; }).length; };
    var screened = past(['screen', 'test', 'interview', 'offer']);
    var tested = past(['test', 'interview', 'offer']);
    var interviewed = past(['interview', 'offer']);
    var offers = past(['offer']);

    var hero = SH.hero({
      kicker: { en: 'Station 3 · Application pipeline', id: 'Pos 3 · Alur lamaran' },
      title: { en: ['Your funnel,', 'measured for what’s next'], id: ['Corongmu,', 'terukur untuk langkah berikutnya'] },
      sub: { en: 'Track every application and its stage. The metrics locate your leaking stage, and therefore your next training priority.', id: 'Lacak tiap lamaran dan tahapnya. Metrik menunjukkan tahap bocormu, dan karenanya prioritas latihan berikutmu.' },
      chip: { en: 'Follow-up rule: once, 7–10 days after silence, politely.', id: 'Aturan tindak lanjut: sekali, 7–10 hari setelah hening, dengan sopan.' },
      chipIcon: 'clock',
      tagline: [{ en: 'Discipline turns', id: 'Disiplin mengubah' }, { en: 'effort into opportunity.', id: 'usaha menjadi peluang.' }],
      art: { img: '../../assets/bg/hero.jpg', pos: '50% 60%', nodes: [
        { x: 14, y: 82, big: true, caps: true, label: { en: 'You are here', id: 'Kamu di sini' } },
        { x: 38, y: 64, caps: true, label: { en: 'Preparation', id: 'Persiapan' } },
        { x: 56, y: 46, caps: true, label: { en: 'Application', id: 'Lamaran' } },
        { x: 70, y: 30, caps: true, label: { en: 'Interview', id: 'Wawancara' } },
        { x: 84, y: 14, caps: true, flag: true, label: { en: 'Dream role', id: 'Peran impian' } }] },
      quote: { en: 'Track today. A stronger you tomorrow.', id: 'Lacak hari ini. Dirimu yang lebih kuat esok.' },
      sign: SIGN
    });

    var main = el('div', 'ts-main');
    var c = SH.card({ kick: { en: 'New application', id: 'Lamaran baru' }, title: { en: 'Add it the day you send it', id: 'Tambahkan di hari kamu mengirimnya' } });
    var inp = SH.input('text', { placeholder: { en: 'e.g. PT Aruna, Data Analyst', id: 'mis. PT Aruna: Data Analyst' } });
    var tier = SH.input('select', { options: TIERS, value: 'match' });
    var two = el('div', 'ts-two wide');
    two.appendChild(SH.field({ label: { en: 'Company · Role', id: 'Perusahaan · Peran' }, input: inp, icon: 'search' }));
    two.appendChild(SH.field({ label: { en: 'Tier', id: 'Tingkat' }, input: tier, icon: 'chart' }));
    c.appendChild(two);
    function add() {
      if (!inp.value.trim()) { inp.focus(); return; }
      apps.push({ id: Date.now(), name: inp.value.trim(), tier: tier.value, stage: 'applied', date: Date.now() });
      save(LSP, apps); render();
    }
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') add(); });
    var row = el('div', 'ts-row'); row.appendChild(SH.btn({ en: 'Add application', id: 'Tambah lamaran' }, { icon: 'arrow', onClick: add })); c.appendChild(row);
    main.appendChild(c);

    /* funnel */
    var fun = el('div', 'ts-funnel');
    var cap = function (k, phrase) { return k === 0 ? { en: 'Nothing yet', id: 'Belum ada' } : phrase; };
    [['send', { en: 'Applied', id: 'Dilamar' }, n, cap(n, { en: 'Keep going', id: 'Terus melangkah' }), 'c1'],
     ['search', { en: 'Screening', id: 'Saringan' }, screened, cap(screened, { en: 'Good momentum', id: 'Momentum bagus' }), 'c2'],
     ['checkSq', { en: 'Test', id: 'Tes' }, tested, cap(tested, { en: 'Technique holds', id: 'Teknik bertahan' }), 'c3'],
     ['interview', { en: 'Interview', id: 'Wawancara' }, interviewed, cap(interviewed, { en: 'You’re in the game', id: 'Kamu sudah di arena' }), 'c4'],
     ['handshake', { en: 'Offer', id: 'Tawaran' }, offers, cap(offers, { en: 'Goal achieved!', id: 'Tujuan tercapai!' }), 'c5']
    ].forEach(function (s) { fun.appendChild(SH.stageCard({ icon: s[0], title: s[1], n: s[2], pct: n ? s[2] / n * 100 : 0, caption: s[3], cls: s[4] })); });
    main.appendChild(fun);

    if (n) {
      var m = SH.card({ kick: { en: 'Funnel metrics', id: 'Metrik corong' }, title: { en: 'Where the pipeline leaks', id: 'Di mana corong bocor' } });
      m.appendChild(SH.stats([[n, { en: 'applications', id: 'lamaran' }], [Math.round(screened / n * 100) + '%', { en: 'screen rate', id: 'lolos saringan' }],
        [screened ? Math.round(tested / screened * 100) + '%' : '', { en: 'screen → test', id: 'saringan → tes' }], [tested ? Math.round(interviewed / tested * 100) + '%' : '', { en: 'test → interview', id: 'tes → wawancara' }], [offers, { en: 'offers', id: 'tawaran' }]]));
      m.appendChild(SH.note(esc(n < 10
        ? T('Small numbers wobble: read trends after ten applications, not after two.', 'Angka yang kecil mudah goyah; baca trennya setelah sepuluh lamaran, bukan setelah dua.')
        : T('Deaths concentrated at one stage locate the leak: screening → Modules 3 & 4; tests → Module 7 drills; interviews → The Rope.', 'Kematian terkonsentrasi di satu tahap menunjukkan kebocoran: saringan → Modul 3 & 4; tes → latihan Modul 7; wawancara → The Rope.')), 'chart'));
      main.appendChild(m);

      var lc = SH.card();
      lc.appendChild(SH.hd({ en: 'Applications', id: 'Lamaran' }, { en: 'Every application and its stage', id: 'Setiap lamaran dan tahapnya' }, n + ' ' + T('open', 'terbuka')));
      var rows = el('div', 'ts-rows');
      apps.slice().reverse().forEach(function (a) {
        var tierL = TIERS.filter(function (t) { return t[0] === a.tier; })[0];
        var sel = SH.input('select', { options: STAGES, value: a.stage });
        sel.addEventListener('change', function () { a.stage = sel.value; save(LSP, apps); render(); });
        rows.appendChild(SH.rowi({ icon: a.stage === 'offer' ? 'handshake' : a.stage === 'rejected' ? 'x' : 'briefcase', title: a.name, sub: (tierL ? B(tierL[1]) : a.tier) + ' · ' + new Date(a.date).toLocaleDateString(),
          actions: [sel, SH.xbtn(function () { save(LSP, apps.filter(function (x) { return x.id !== a.id; })); render(); })] }));
      });
      lc.appendChild(rows);
      lc.appendChild(SH.note(esc(T('Stored only in this browser.', 'Tersimpan hanya di peramban ini.')), 'lock'));
      main.appendChild(lc);
    }
    main.appendChild(SH.cta({ icon: 'chart', title: { en: 'See the bigger picture', id: 'Lihat gambaran besarnya' },
      text: { en: 'Your data reveals patterns. Fix the leaks, focus your training, and move forward faster.', id: 'Datamu mengungkap pola. Tambal kebocorannya, fokuskan latihanmu, dan melaju lebih cepat.' },
      tag: SIGN, actions: [] }));
    return SH.stage(hero, main, { flip: true });
  }

  /* ─── render / open / close ─── */
  function render() {
    paintTabs();
    shell.clear();
    shell.body.appendChild(tab === 'drill' ? labHome() : tab === 'ats' ? atsView() : trackerView());
  }
  function open(mode) {
    build();
    if (mode === 'ats' || mode === 'tracker' || mode === 'drill') tab = mode;
    shell.open();
    render();
  }
  function close() {
    if (LAB) LAB.onClose();
    run = null;
    if (shell) shell.close();
    syncPromo();
  }
  function syncPromo() {
    var s = bankStats();
    document.querySelectorAll('[data-gym-stat]').forEach(function (n) { var k = n.getAttribute('data-gym-stat'); if (s[k] != null) n.textContent = s[k]; });
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-pack-gym]');
    if (!b) return;
    e.preventDefault();
    open(b.getAttribute('data-pack-gym'));
  });
  document.addEventListener('mt:launch-tool', function (e) {
    if (e.detail && e.detail.tool === 'gym') {
      var p = document.querySelector('.lmsp.open .lmsp-back');
      if (p) p.click();
      open(e.detail.mode);
    }
  });
  document.querySelectorAll('.ctl button, button[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      setTimeout(function () { syncPromo(); if (shell && shell.isOpen() && !labBusy()) render(); }, 60);
    });
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', syncPromo);
  else syncPromo();

  window.MT_PACK_GYM = { open: open, stats: bankStats, tabs: function () { if (shell && shell.isOpen()) paintTabs(); } };

  /* deep link from The Compass · Resources: ?tool=gym[&mode=…] opens the instrument on load */
  (function () {
    try {
      var q = new URLSearchParams(location.search);
      if (q.get('tool') !== 'gym') return;
      var go = function () { setTimeout(function () { open(q.get('mode') || undefined); }, 60); };
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
    } catch (e) {}
  })();
})();
