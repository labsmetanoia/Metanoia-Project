/**
 * THE COMPASS — COMPANION TOOLS
 * -----------------------------
 * Four tabs and a "Today" panel that turn The Compass from a dashboard
 * into a daily companion:
 *   discovery — self-discovery: the Personal Audit profile mirrored back,
 *               a reflection journal with rotating prompts, and the
 *               instruments that deepen it.
 *   habits    — habit tracker with weekday schedules, streaks, a 7-day
 *               grid, suggested habits, and reminders (in-app nudges plus
 *               browser notifications while The Compass is open).
 *   plan      — the development plan: goals with a why, a deadline, a
 *               linked product and milestone checklists; suggestions
 *               drawn from the Personal Audit, the Route 90-day plan and
 *               the lowest Compass Point.
 *   resources — learning portals with live progress, the tools index
 *               with deep links, the job-search checklist, and exports.
 *   today     — a panel on Bearing that gathers what is due today across
 *               habits, milestones, applications and the journal.
 *
 * Honesty contract: everything is stored in this browser (or in memory
 * in demo mode) through the page's getLS/setLS. Reminders fire only
 * while a Compass tab is open — there is no server and no push.
 * Rendered with js/tool-shell.js primitives (page mode).
 */
(function () {
  'use strict';
  var SH = window.MT_SHELL;
  if (!SH) return;
  var el = SH.el, esc = SH.esc;
  var C = null;   /* host API from the page: { L, lang, getLS, setLS, isDemoMode, getApplications, PRODUCTS, modulesDone, calculateScores, activateTab, fmtD } */
  var DAY = 86400000;
  function lang() { return C.lang(); }
  function T(en, id) { return lang() === 'id' ? id : en; }
  function today() { return new Date().toISOString().slice(0, 10); }
  function iso(ms) { return new Date(ms).toISOString().slice(0, 10); }
  function daysUntil(d) { return Math.ceil((new Date(d + 'T23:59:59').getTime() - Date.now()) / DAY); }
  function load(k, def) { try { var v = C.getLS(k, null); return v == null ? def : JSON.parse(v); } catch (e) { return def; } }
  function save(k, v) { C.setLS(k, JSON.stringify(v)); if (C.onChange) { try { C.onChange(); } catch (e) {} } }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function readLS(k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } }
  function fmt(d) { return d ? new Date(d + (d.length === 10 ? 'T12:00:00' : '')).toLocaleDateString(lang() === 'id' ? 'id-ID' : 'en-GB', { day: 'numeric', month: 'short' }) : '—'; }

  /* ─── stores ─── */
  var K = { journal: 'compass_journal', habits: 'compass_habits', goals: 'compass_goals', check: 'compass_checklist', notify: 'compass_notify', fired: 'compass_reminders_fired' };

  /* ─── content ─── */
  var PROMPTS = [
    { en: 'What did I do this week that I would want a future employer to know about?', id: 'Apa yang kulakukan minggu ini yang ingin kuceritakan pada calon pemberi kerja?' },
    { en: 'Which task drained me most this week — and what does that say about the roles I should avoid?', id: 'Tugas apa yang paling mengurasku minggu ini — dan apa artinya bagi peran yang sebaiknya kuhindari?' },
    { en: 'Where did I show a strength without being asked? Who saw it?', id: 'Di mana aku menunjukkan kekuatan tanpa diminta? Siapa yang melihatnya?' },
    { en: 'What is one belief about my career that I have never tested?', id: 'Apa satu keyakinan tentang karierku yang belum pernah kuuji?' },
    { en: 'If my values were a budget, where did I overspend this week?', id: 'Kalau nilai-nilaiku adalah anggaran, di mana aku boros minggu ini?' },
    { en: 'What feedback did I receive recently — and what did I do with it?', id: 'Umpan balik apa yang baru kuterima — dan apa yang kulakukan dengannya?' },
    { en: 'Which conversation this week moved my career forward, even slightly?', id: 'Percakapan mana minggu ini yang menggerakkan karierku, walau sedikit?' },
    { en: 'What would the 3-year version of me thank me for doing today?', id: 'Apa yang akan disyukuri diriku 3 tahun lagi karena kulakukan hari ini?' },
    { en: 'What am I avoiding, and what is the smallest step that would end the avoidance?', id: 'Apa yang sedang kuhindari, dan apa langkah terkecil yang mengakhiri penghindaran itu?' },
    { en: 'Which skill did I practise deliberately this week? For how long?', id: 'Keterampilan apa yang kulatih dengan sengaja minggu ini? Berapa lama?' },
    { en: 'Who could I help this week with something I already know?', id: 'Siapa yang bisa kubantu minggu ini dengan hal yang sudah kukuasai?' },
    { en: 'What did a rejection or setback teach me that a success could not?', id: 'Apa yang diajarkan penolakan atau kemunduran yang tak bisa diajarkan keberhasilan?' },
    { en: 'What does my ideal working day look like, hour by hour?', id: 'Seperti apa hari kerja idealku, jam demi jam?' },
    { en: 'Which of my current habits would my mentor tell me to drop?', id: 'Kebiasaanku yang mana yang akan disarankan mentorku untuk ditinggalkan?' }
  ];
  var SUGGESTED = [
    { key: 'winlog', icon: 'trophy', name: { en: 'Friday win log', id: 'Catatan kemenangan Jumat' }, days: [5], remind: '16:00', why: { en: 'One entry: what you delivered, its number, who can verify.', id: 'Satu entri: apa yang kamu tunaikan, angkanya, siapa yang bisa memverifikasi.' } },
    { key: 'review', icon: 'refresh', name: { en: 'Sunday weekly review', id: 'Tinjauan mingguan hari Minggu' }, days: [0], remind: '18:00', why: { en: 'Fifteen minutes: plan, routes, habits, next week’s three priorities.', id: 'Lima belas menit: rencana, rute, kebiasaan, tiga prioritas minggu depan.' } },
    { key: 'module', icon: 'book', name: { en: '20-minute module', id: 'Modul 20 menit' }, days: [1, 2, 3, 4, 5], remind: '07:30', why: { en: 'One lesson a weekday keeps the curriculum moving.', id: 'Satu pelajaran tiap hari kerja menjaga kurikulum bergerak.' } },
    { key: 'apply', icon: 'send', name: { en: 'One application a day', id: 'Satu lamaran sehari' }, days: [1, 2, 3, 4, 5], remind: '09:00', why: { en: 'Velocity is the strongest predictor of offers.', id: 'Kecepatan melamar adalah prediktor terkuat datangnya tawaran.' } },
    { key: 'sleep', icon: 'clock', name: { en: 'Protect the sleep window', id: 'Jaga jendela tidur' }, days: [0, 1, 2, 3, 4, 5, 6], remind: '22:00', why: { en: 'Lesson 5.1: energy is the foundation the rest is built on.', id: 'Pelajaran 5.1: energi adalah fondasi tempat yang lain dibangun.' } },
    { key: 'move', icon: 'zap', name: { en: 'Move for 20 minutes', id: 'Bergerak 20 menit' }, days: [0, 1, 2, 3, 4, 5, 6], remind: '17:30', why: { en: 'Most days, even in busy weeks.', id: 'Hampir tiap hari, bahkan di minggu sibuk.' } },
    { key: 'reach', icon: 'users', name: { en: 'Reach out to one person', id: 'Hubungi satu orang' }, days: [2, 4], remind: '12:00', why: { en: 'Network capital grows one message at a time.', id: 'Modal jaringan tumbuh satu pesan demi satu pesan.' } },
    { key: 'journal', icon: 'pen', name: { en: 'Reflection journal', id: 'Jurnal refleksi' }, days: [3], remind: '20:00', why: { en: 'Answer the week’s prompt in Discovery.', id: 'Jawab pertanyaan pekan ini di Penjelajahan.' } }
  ];
  var HABIT_ICONS = ['trophy', 'refresh', 'book', 'send', 'clock', 'zap', 'users', 'pen', 'heart', 'target', 'seed', 'mic'];
  var DOW = { en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], id: ['Mg', 'Sn', 'Sl', 'Rb', 'Km', 'Jm', 'Sb'] };
  var PRODUCT_LINKS = [
    { key: 'aladin', name: 'The Map', num: '01', href: '/products/the-map/', icon: 'map', total: 6, sub: { en: 'Self-awareness, self-leadership, problem solving, communication', id: 'Kesadaran diri, kepemimpinan diri, pemecahan masalah, komunikasi' } },
    { key: 'maverick', name: 'The Pack', num: '02', href: '/products/the-pack/', icon: 'briefcase', total: 9, sub: { en: 'How hiring works, CV and ATS, screening tests, case interviews', id: 'Cara kerja rekrutmen, CV dan ATS, tes seleksi, wawancara kasus' } },
    { key: 'nexus', name: 'The Rope', num: '03', href: '/products/the-rope/', icon: 'interview', total: 9, sub: { en: 'Story library, HR / technical / final interviews, negotiation', id: 'Perpustakaan cerita, wawancara HR / teknis / final, negosiasi' } },
    { key: 'horizon', name: 'The Route', num: '04', href: '/products/the-route/', icon: 'compass', total: 9, sub: { en: 'Career architecture, performance, visibility, promotion, finance', id: 'Arsitektur karier, performa, visibilitas, promosi, finansial' } }
  ];
  var TOOLS = [
    { icon: 'heart', name: { en: 'Personal Audit', id: 'Audit Pribadi' }, prod: 'The Map', href: '/products/the-map/?tool=audit', sub: { en: 'Values, energy, strengths, habits, mission', id: 'Nilai, energi, kekuatan, kebiasaan, misi' } },
    { icon: 'globe', name: { en: 'The Range · company explorer', id: 'The Range · penjelajah perusahaan' }, prod: 'The Map', href: '/products/the-map/#range', sub: { en: 'Companies, roles and fit — career exploration', id: 'Perusahaan, peran, dan kecocokan — eksplorasi karier' } },
    { icon: 'target', name: { en: 'Aptitude drills', id: 'Latihan tes bakat' }, prod: 'The Pack', href: '/products/the-pack/?tool=gym&mode=drill', sub: { en: 'Numerical, verbal, logical — timed or untimed', id: 'Numerik, verbal, logika — berbatas waktu atau tidak' } },
    { icon: 'docSearch', name: { en: 'ATS Check', id: 'Cek ATS' }, prod: 'The Pack', href: '/products/the-pack/?tool=gym&mode=ats', sub: { en: 'Your CV against a real job description', id: 'CV-mu terhadap deskripsi lowongan sungguhan' } },
    { icon: 'send', name: { en: 'Application Tracker', id: 'Pelacak Lamaran' }, prod: 'The Pack', href: '/products/the-pack/?tool=gym&mode=tracker', sub: { en: 'Funnel metrics per stage', id: 'Metrik corong per tahap' } },
    { icon: 'doc', name: { en: 'Application Studio', id: 'Studio Lamaran' }, prod: 'The Pack', href: '/products/the-pack/?tool=studio', sub: { en: 'LinkedIn audit, CV composer, cover letter, FGD practice', id: 'Audit LinkedIn, penyusun CV, surat lamaran, latihan FGD' } },
    { icon: 'chart', name: { en: 'Readiness diagnostic', id: 'Diagnostik kesiapan' }, prod: 'The Route', href: '/products/the-route/?tool=plan&mode=readiness', sub: { en: 'Six dimensions, honestly rated', id: 'Enam dimensi, dinilai jujur' } },
    { icon: 'calendar', name: { en: '90-Day Plan', id: 'Rencana 90 Hari' }, prod: 'The Route', href: '/products/the-route/?tool=plan&mode=plan', sub: { en: 'One goal, three deliberate phases', id: 'Satu tujuan, tiga fase yang disengaja' } },
    { icon: 'trophy', name: { en: 'Win Log', id: 'Catatan Kemenangan' }, prod: 'The Route', href: '/products/the-route/?tool=plan&mode=wins', sub: { en: 'Evidence with numbers and witnesses', id: 'Bukti dengan angka dan saksi' } },
    { icon: 'puzzle', name: { en: 'Fieldwork', id: 'Fieldwork' }, prod: 'The Route', href: '/products/the-route/?tool=field', sub: { en: 'Scenario coach, promotion case builder, money instruments', id: 'Pelatih skenario, penyusun kasus promosi, instrumen keuangan' } },
    { icon: 'book', name: { en: 'Mind Palace', id: 'Mind Palace' }, prod: 'Metanoia', href: '/mind-palace/', sub: { en: 'Articles and reading for the journey', id: 'Artikel dan bacaan untuk perjalanan' } },
    { icon: 'info', name: { en: 'Help centre', id: 'Pusat bantuan' }, prod: 'Metanoia', href: '/help', sub: { en: 'Answers about the platform and membership', id: 'Jawaban tentang platform dan keanggotaan' } }
  ];
  var CHECKLIST = [
    { key: 'ats', text: { en: 'CV run through the ATS Check against a real job description', id: 'CV sudah dicek ATS terhadap deskripsi lowongan sungguhan' }, href: '/products/the-pack/?tool=gym&mode=ats' },
    { key: 'linkedin', text: { en: 'LinkedIn headline and about section audited', id: 'Judul dan bagian tentang di LinkedIn sudah diaudit' }, href: '/products/the-pack/?tool=studio' },
    { key: 'targets', text: { en: 'Three target companies researched in The Range', id: 'Tiga perusahaan target sudah diriset di The Range' }, href: '/products/the-map/#range' },
    { key: 'stories', text: { en: 'Five STAR stories written in the story library', id: 'Lima cerita STAR tertulis di perpustakaan cerita' }, href: '/products/the-rope/' },
    { key: 'mock', text: { en: 'One timed aptitude set and one mock interview completed', id: 'Satu set tes berbatas waktu dan satu simulasi wawancara selesai' }, href: '/products/the-pack/?tool=gym&mode=drill' },
    { key: 'refs', text: { en: 'Two references briefed and ready to be named', id: 'Dua pemberi referensi sudah diberi tahu dan siap disebut' } },
    { key: 'followup', text: { en: 'Follow-up template ready (once, 7–10 days after silence)', id: 'Templat tindak lanjut siap (sekali, 7–10 hari setelah hening)' } },
    { key: 'routes', text: { en: 'Every live application plotted in the Course Plotter', id: 'Setiap lamaran aktif tercatat di Perencana Rute' }, tab: 'course-plotter' }
  ];

  /* ─── hero (page mode) ─── */
  function pageHero(o) {
    var h = el('div', 'tab-hero ts-tabhero');
    h.innerHTML = '<span class="th-img" style="background-image:url(\'' + o.img + '\');background-position:' + (o.pos || 'center') + '" aria-hidden="true"></span><span class="th-veil" aria-hidden="true"></span>';
    var inn = el('div', 'th-in');
    inn.appendChild(el('span', 'th-kick', esc(SH.txt(o.kicker))));
    var t = SH.txt(o.title); var parts = Array.isArray(o.title[lang()] || o.title.en) ? (o.title[lang()] || o.title.en) : [t, ''];
    inn.appendChild(el('h2', null, esc(parts[0]) + (parts[1] ? ' <span class="g">' + esc(parts[1]) + '</span>' : '')));
    inn.appendChild(el('p', 'tab-sub', esc(SH.txt(o.sub))));
    if (o.stats) inn.appendChild(el('p', 'tab-stats', o.stats));
    h.appendChild(inn);
    return h;
  }
  function section(label) { return el('h3', 'sec-label', esc(SH.txt(label))); }

  /* ═══ DISCOVERY ═══ */
  function auditProfile() {
    var a = C.isDemoMode ? null : readLS('mt_map_audit');
    if (!a) return null;
    var VAL = { growth: ['Growth & learning', 'Pertumbuhan & belajar'], security: ['Stability & security', 'Stabilitas & keamanan'], autonomy: ['Autonomy', 'Otonomi'], impact: ['Impact on others', 'Dampak bagi orang lain'], craft: ['Mastery of a craft', 'Penguasaan keahlian'], recognition: ['Recognition', 'Pengakuan'], balance: ['Work–life balance', 'Keseimbangan hidup'], earning: ['Earning power', 'Daya penghasilan'], team: ['Team & belonging', 'Tim & rasa memiliki'], variety: ['Variety & novelty', 'Variasi & kebaruan'], leading: ['Leading people', 'Memimpin orang'], adventure: ['Adventure & risk', 'Petualangan & risiko'], creating: ['Creating new things', 'Menciptakan hal baru'], service: ['Service & care', 'Pelayanan & kepedulian'], problems: ['Hard problems', 'Masalah sulit'], integrity: ['Integrity & fairness', 'Integritas & keadilan'] };
    var ACT = { present: ['Presenting to a group', 'Presentasi di depan kelompok'], analyse: ['Analysing data or numbers', 'Menganalisis data atau angka'], write: ['Writing long-form documents', 'Menulis dokumen panjang'], organise: ['Organising people and schedules', 'Mengatur orang dan jadwal'], build: ['Building something with my hands or code', 'Membangun sesuatu dengan tangan atau kode'], sell: ['Persuading or selling', 'Membujuk atau menjual'], teach: ['Teaching or explaining', 'Mengajar atau menjelaskan'], research: ['Deep research on one topic', 'Riset mendalam satu topik'], network: ['Meeting new people', 'Bertemu orang baru'], detail: ['Careful detail work', 'Kerja detail yang teliti'], improvise: ['Improvising under pressure', 'Berimprovisasi di bawah tekanan'] };
    var p = { values: (a.values || []).map(function (k) { return VAL[k] ? T(VAL[k][0], VAL[k][1]) : k; }), gains: [], drains: [], strengths: (a.strengths || []).filter(function (s) { return s.name; }), mission: (a.mission || {}), habits: a.habits || {} };
    Object.keys(a.energy || {}).forEach(function (k) { var n = ACT[k] ? T(ACT[k][0], ACT[k][1]) : k; if (a.energy[k] === 'gain') p.gains.push(n); if (a.energy[k] === 'drain') p.drains.push(n); });
    p.any = p.values.length || p.gains.length || p.strengths.length || p.mission.text;
    return p.any ? p : null;
  }
  function renderDiscovery(host) {
    host.innerHTML = '';
    var j = load(K.journal, []);
    host.appendChild(pageHero({ img: '../../assets/bg/map.jpg', pos: 'center 40%', kicker: { en: 'Personal exploration · Self-discovery', id: 'Penjelajahan diri · Kenali dirimu' },
      title: { en: ['Know yourself,', 'then choose'], id: ['Kenali dirimu,', 'lalu memilih'] },
      sub: { en: 'Your Personal Audit mirrored back, a weekly reflection prompt, and the instruments that deepen the picture. Everything stays in this browser.', id: 'Audit Pribadimu dipantulkan kembali, satu pertanyaan refleksi mingguan, dan instrumen yang memperdalam gambarannya. Semua tetap di peramban ini.' },
      stats: '<b>' + j.length + '</b> ' + esc(T('journal entries', 'entri jurnal')) }));

    /* profile */
    host.appendChild(section({ en: 'Your profile — from the Personal Audit', id: 'Profilmu — dari Audit Pribadi' }));
    var prof = auditProfile();
    if (prof) {
      var grid = el('div', 'ts-two');
      var cv = SH.card({ kick: { en: 'Values, in your order', id: 'Nilai, sesuai urutanmu' } });
      var tags = el('div', 'ts-tags'); prof.values.forEach(function (v, i) { tags.appendChild(el('span', 'ts-tagc', '<i>' + (i + 1) + '</i>' + esc(v))); }); if (!prof.values.length) tags.appendChild(SH.pill({ en: 'not picked yet', id: 'belum dipilih' }, 'mute')); cv.appendChild(tags);
      var m = prof.mission;
      if (m.text) { var li = el('div', 'ts-li'); li.appendChild(SH.svg('compass')); li.appendChild(el('div', null, '<b>' + esc(T('Mission', 'Misi')) + ':</b> ' + esc(m.text) + (m.outcome ? '<br><b>' + esc(T('3-year outcome', 'Hasil 3 tahun')) + ':</b> ' + esc(m.outcome) : ''))); li.style.marginTop = '12px'; cv.appendChild(li); }
      grid.appendChild(cv);
      var ce = SH.card({ kick: { en: 'Energy & strengths', id: 'Energi & kekuatan' } });
      prof.gains.slice(0, 4).forEach(function (x) { var l = el('div', 'ts-li gain'); l.appendChild(SH.svg('zap')); l.appendChild(el('span', null, esc(x))); ce.appendChild(l); });
      prof.drains.slice(0, 3).forEach(function (x) { var l = el('div', 'ts-li drain'); l.appendChild(SH.svg('battery')); l.appendChild(el('span', null, esc(x))); ce.appendChild(l); });
      prof.strengths.forEach(function (s) { var l = el('div', 'ts-li'); l.appendChild(SH.svg('trophy')); l.appendChild(el('span', null, '<b>' + esc(s.name) + '</b>' + (s.conf ? ' · ' + esc(T('evidence', 'bukti')) + ' ' + s.conf + '/5' : ''))); ce.appendChild(l); });
      if (!prof.gains.length && !prof.strengths.length) ce.appendChild(SH.note(esc(T('Energy and strengths are still blank — steps 2 and 3 of the audit.', 'Energi dan kekuatan masih kosong — langkah 2 dan 3 audit.'))));
      grid.appendChild(ce);
      host.appendChild(grid);
      var r = el('div', 'ts-row'); r.style.margin = '12px 0 0';
      r.appendChild(link({ en: 'Open the audit report', id: 'Buka laporan audit' }, '/products/the-map/?tool=audit&mode=report', { icon: 'arrow' }));
      host.appendChild(r);
    } else {
      host.appendChild(SH.cta({ icon: 'heart', title: { en: 'No Personal Audit yet', id: 'Belum ada Audit Pribadi' },
        text: { en: 'Fifteen minutes in The Map gives you values in order, an energy map, strengths with evidence, a habit baseline and a mission — all of which flow back here.', id: 'Lima belas menit di The Map memberimu nilai yang terurut, peta energi, kekuatan dengan bukti, garis dasar kebiasaan, dan misi — semuanya mengalir kembali ke sini.' },
        actions: [link({ en: 'Start the Personal Audit', id: 'Mulai Audit Pribadi' }, '/products/the-map/?tool=audit', { icon: 'arrow' })] }));
    }

    /* journal */
    host.appendChild(section({ en: 'Reflection journal', id: 'Jurnal refleksi' }));
    var doy = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / DAY);
    var week = Math.floor(doy / 7);
    var prompt = PROMPTS[week % PROMPTS.length];
    var jc = SH.card({ kick: T('This week’s prompt', 'Pertanyaan pekan ini'), title: SH.txt(prompt) });
    var ta = SH.input('textarea', { placeholder: { en: 'Write freely — two honest sentences beat a polished paragraph.', id: 'Tulis bebas — dua kalimat jujur lebih baik daripada satu paragraf rapi.' } });
    ta.style.minHeight = '96px';
    var existing = j.filter(function (e) { return e.date === today(); })[0];
    if (existing) ta.value = existing.text;
    jc.appendChild(SH.field({ input: ta }));
    var row = el('div', 'ts-row');
    row.appendChild(SH.btn(existing ? { en: 'Update entry', id: 'Perbarui entri' } : { en: 'Save entry', id: 'Simpan entri' }, { icon: 'check', onClick: function () {
      if (!ta.value.trim()) { ta.focus(); return; }
      var j2 = load(K.journal, []);
      var ex = j2.filter(function (e) { return e.date === today(); })[0];
      if (ex) ex.text = ta.value.trim(); else j2.push({ id: uid(), date: today(), prompt: prompt, text: ta.value.trim() });
      save(K.journal, j2); renderDiscovery(host);
    } }));
    jc.appendChild(row);
    host.appendChild(jc);
    if (j.length) {
      var lc = SH.card(); lc.appendChild(SH.hd({ en: 'Past entries', id: 'Entri sebelumnya' }, { en: 'Your thinking, dated', id: 'Pemikiranmu, bertanggal' }, j.length + ' ' + T('entries', 'entri')));
      var rows = el('div', 'ts-rows');
      j.slice().reverse().slice(0, 12).forEach(function (e) {
        rows.appendChild(SH.rowi({ icon: 'pen', title: e.text.length > 120 ? e.text.slice(0, 120) + '…' : e.text, sub: fmt(e.date) + ' · ' + SH.txt(e.prompt), actions: [SH.xbtn(function () { save(K.journal, load(K.journal, []).filter(function (x) { return x.id !== e.id; })); renderDiscovery(host); })] }));
      });
      lc.appendChild(rows); host.appendChild(lc);
    }

    /* instruments */
    host.appendChild(section({ en: 'Instruments that deepen the picture', id: 'Instrumen yang memperdalam gambaran' }));
    var tiles = el('div', 'ts-tiles');
    [['heart', { en: 'Personal Audit', id: 'Audit Pribadi' }, { en: 'Values · energy · strengths · mission', id: 'Nilai · energi · kekuatan · misi' }, '/products/the-map/?tool=audit'],
     ['chart', { en: 'Readiness diagnostic', id: 'Diagnostik kesiapan' }, { en: 'Six career dimensions, rated', id: 'Enam dimensi karier, dinilai' }, '/products/the-route/?tool=plan&mode=readiness'],
     ['globe', { en: 'The Range', id: 'The Range' }, { en: 'Explore companies and roles', id: 'Jelajahi perusahaan dan peran' }, '/products/the-map/#range'],
     ['puzzle', { en: 'Scenario coach', id: 'Pelatih skenario' }, { en: 'Workplace judgement drills', id: 'Latihan penilaian di tempat kerja' }, '/products/the-route/?tool=field']
    ].forEach(function (t) { var b = SH.tile({ icon: t[0], title: t[1], hint: t[2], onPick: function () { location.href = t[3]; } }); tiles.appendChild(b); });
    host.appendChild(tiles);
  }

  /* ═══ HABITS ═══ */
  function habitDue(h, dt) { return (h.days || []).indexOf(dt.getDay()) > -1; }
  function habitStats(hs) {
    var streak = 0, best = 0, cur = 0, done30 = 0, due30 = 0;
    for (var i = 0; i < 60; i++) {
      var dt = new Date(Date.now() - i * DAY), d = iso(dt.getTime());
      var due = hs.filter(function (h) { return habitDue(h, dt) && (!h.created || h.created <= d); });
      if (!due.length) { if (i === 0) continue; continue; }
      var all = due.every(function (h) { return h.log && h.log[d]; });
      if (i < 30) { due30 += due.length; done30 += due.filter(function (h) { return h.log && h.log[d]; }).length; }
      if (all) { cur++; if (i === 0 || streak === i - 0 || streak > 0 || i === 1) {} } else { if (i === 0) { /* today not finished yet does not break the streak */ cur = 0; continue; } }
      if (all) { best = Math.max(best, cur); } else { cur = 0; }
    }
    /* current streak: consecutive fully-done due days ending yesterday (or today if complete) */
    var s = 0;
    for (var k = 0; k < 60; k++) {
      var dt2 = new Date(Date.now() - k * DAY), d2 = iso(dt2.getTime());
      var due2 = hs.filter(function (h) { return habitDue(h, dt2) && (!h.created || h.created <= d2); });
      if (!due2.length) continue;
      var all2 = due2.every(function (h) { return h.log && h.log[d2]; });
      if (all2) s++; else if (k === 0) continue; else break;
    }
    return { streak: s, best: Math.max(best, s), pct: due30 ? Math.round(done30 / due30 * 100) : 0 };
  }
  function renderHabits(host) {
    host.innerHTML = '';
    var hs = load(K.habits, []);
    var st = habitStats(hs);
    var now = new Date(), td = today();
    var dueToday = hs.filter(function (h) { return habitDue(h, now); });
    var doneToday = dueToday.filter(function (h) { return h.log && h.log[td]; }).length;
    host.appendChild(pageHero({ img: '../../assets/bg/journey-start.jpg', pos: 'center 45%', kicker: { en: 'Habits & reminders', id: 'Kebiasaan & pengingat' },
      title: { en: ['Small daily moves,', 'compounding'], id: ['Langkah kecil harian,', 'yang berlipat'] },
      sub: { en: 'Schedule the habits the courses teach, tick them off daily, and let The Compass nudge you. Reminders fire while a Compass tab is open — nothing leaves this browser.', id: 'Jadwalkan kebiasaan yang diajarkan kursus, centang setiap hari, dan biarkan The Compass mengingatkanmu. Pengingat berjalan selagi tab Compass terbuka — tidak ada yang keluar dari peramban ini.' },
      stats: '<b>' + doneToday + '/' + dueToday.length + '</b> ' + esc(T('done today', 'selesai hari ini')) + ' · <b>' + st.streak + '</b> ' + esc(T('day streak', 'hari beruntun')) + ' · <b>' + st.pct + '%</b> ' + esc(T('last 30 days', '30 hari terakhir')) }));

    /* today */
    host.appendChild(section({ en: 'Today', id: 'Hari ini' }));
    if (dueToday.length) {
      dueToday.forEach(function (h, i) {
        var done = !!(h.log && h.log[td]);
        var b = SH.btn(done ? { en: 'Done', id: 'Selesai' } : { en: 'Mark done', id: 'Tandai selesai' }, { ghost: !done, sm: true, iconL: 'check', onClick: function () { toggleLog(h.id, td); renderHabits(host); } });
        host.appendChild(SH.item({ num: i + 1, done: done, icon: h.icon, title: SH.txt(h.name), on: done, ctl: b,
          text: (h.remind ? '<span class="ts-pill mute">' + esc(T('reminder', 'pengingat')) + ' ' + esc(h.remind) + '</span> ' : '') + '<span class="ts-pill mute">' + esc(T('streak', 'beruntun')) + ' ' + habitStreak(h) + '</span>' }));
      });
    } else host.appendChild(SH.note(esc(T('Nothing scheduled for today. Add a habit below or pick a suggested one.', 'Tidak ada yang dijadwalkan hari ini. Tambahkan kebiasaan di bawah atau pilih yang disarankan.'))));

    /* week grid */
    if (hs.length) {
      host.appendChild(section({ en: 'The last seven days', id: 'Tujuh hari terakhir' }));
      var gc = SH.card({ cls: 'tight' });
      var tbl = el('div', 'cx-grid');
      var head = el('div', 'cx-row cx-head'); head.appendChild(el('span', null, ''));
      for (var d = 6; d >= 0; d--) { var dt = new Date(Date.now() - d * DAY); head.appendChild(el('span', d === 0 ? 'today' : '', DOW[lang()][dt.getDay()] + '<br><small>' + dt.getDate() + '</small>')); }
      tbl.appendChild(head);
      hs.forEach(function (h) {
        var r = el('div', 'cx-row');
        var nm = el('span', 'cx-name'); nm.appendChild(SH.svg(h.icon)); nm.appendChild(el('b', null, esc(SH.txt(h.name)))); r.appendChild(nm);
        for (var d2 = 6; d2 >= 0; d2--) {
          var dt2 = new Date(Date.now() - d2 * DAY), k = iso(dt2.getTime());
          var due = habitDue(h, dt2) && (!h.created || h.created <= k), done = !!(h.log && h.log[k]);
          var cell = el('button', 'cx-cell' + (done ? ' done' : due ? ' due' : ' off')); cell.type = 'button';
          cell.setAttribute('aria-label', SH.txt(h.name) + ' ' + k); cell.innerHTML = done ? SH.ico('check') : '';
          (function (id, key) { cell.addEventListener('click', function () { toggleLog(id, key); renderHabits(host); }); })(h.id, k);
          r.appendChild(cell);
        }
        var del = SH.xbtn(function () { save(K.habits, load(K.habits, []).filter(function (x) { return x.id !== h.id; })); renderHabits(host); }); r.appendChild(del);
        tbl.appendChild(r);
      });
      gc.appendChild(tbl);
      gc.appendChild(SH.note(esc(T('Tap any cell to fix a missed tick. Streaks count only the days a habit was due.', 'Ketuk sel mana pun untuk memperbaiki centang yang terlewat. Rangkaian hanya menghitung hari saat kebiasaan itu dijadwalkan.'))));
      host.appendChild(gc);
    }

    /* reminders */
    host.appendChild(section({ en: 'Reminders', id: 'Pengingat' }));
    var perm = ('Notification' in window) ? Notification.permission : 'unsupported';
    var on = load(K.notify, 'off') === 'on' && perm === 'granted';
    var rc = SH.cta({ icon: 'bell', title: on ? { en: 'Browser reminders are on', id: 'Pengingat peramban aktif' } : { en: 'Turn on browser reminders', id: 'Aktifkan pengingat peramban' },
      text: perm === 'unsupported' ? { en: 'This browser does not support notifications. In-app nudges still appear on Bearing and here.', id: 'Peramban ini tidak mendukung notifikasi. Dorongan di dalam aplikasi tetap tampil di Bearing dan di sini.' }
        : perm === 'denied' ? { en: 'Notifications are blocked for this site in your browser settings. In-app nudges still appear on Bearing and here.', id: 'Notifikasi diblokir untuk situs ini di pengaturan peramban. Dorongan di dalam aplikasi tetap tampil di Bearing dan di sini.' }
        : { en: 'At each habit’s reminder time, a notification appears — only while The Compass is open in a tab. There is no server and no push; your habits never leave this browser.', id: 'Pada jam pengingat tiap kebiasaan, notifikasi muncul — hanya selagi The Compass terbuka di sebuah tab. Tidak ada server dan tidak ada push; kebiasaanmu tidak pernah keluar dari peramban ini.' },
      actions: perm === 'unsupported' || perm === 'denied' ? [] : [SH.btn(on ? { en: 'Turn off', id: 'Nonaktifkan' } : { en: 'Enable reminders', id: 'Aktifkan pengingat' }, { ghost: on, icon: on ? null : 'bell', onClick: function () {
        if (on) { save(K.notify, 'off'); renderHabits(host); return; }
        Notification.requestPermission().then(function (p) { if (p === 'granted') { save(K.notify, 'on'); scheduleReminders(); } renderHabits(host); });
      } })] });
    host.appendChild(rc);

    /* add + suggestions */
    host.appendChild(section({ en: 'Add a habit', id: 'Tambah kebiasaan' }));
    var ac = SH.card();
    var name = SH.input('text', { placeholder: { en: 'e.g. Read one industry article', id: 'mis. Baca satu artikel industri' } });
    var iconSel = SH.input('select', { options: HABIT_ICONS.map(function (i) { return [i, i]; }), value: 'target' });
    var time = SH.input('text', { placeholder: 'HH:MM' }); time.type = 'time';
    var two = el('div', 'ts-three');
    two.appendChild(SH.field({ label: { en: 'Habit', id: 'Kebiasaan' }, input: name, icon: 'sparkles' }));
    two.appendChild(SH.field({ label: { en: 'Icon', id: 'Ikon' }, input: iconSel }));
    two.appendChild(SH.field({ label: { en: 'Reminder time (optional)', id: 'Jam pengingat (opsional)' }, input: time, icon: 'clock' }));
    ac.appendChild(two);
    var days = [1, 2, 3, 4, 5];
    var dw = el('div', 'cx-days'); var lbl = el('div', 'ts-lbl', esc(T('Days', 'Hari'))); ac.appendChild(lbl);
    for (var i = 0; i < 7; i++) (function (i) { var b = el('button', 'cx-day' + (days.indexOf(i) > -1 ? ' on' : ''), DOW[lang()][i]); b.type = 'button'; b.addEventListener('click', function () { var k = days.indexOf(i); if (k > -1) days.splice(k, 1); else days.push(i); b.classList.toggle('on'); }); dw.appendChild(b); })(i);
    ac.appendChild(dw);
    var ar = el('div', 'ts-row');
    ar.appendChild(SH.btn({ en: 'Add habit', id: 'Tambah kebiasaan' }, { icon: 'plus', onClick: function () {
      if (!name.value.trim()) { name.focus(); return; }
      var h2 = load(K.habits, []); h2.push({ id: uid(), name: name.value.trim(), icon: iconSel.value, days: days.slice().sort(), remind: time.value || '', created: today(), log: {} });
      save(K.habits, h2); renderHabits(host);
    } }));
    ac.appendChild(ar);
    host.appendChild(ac);
    host.appendChild(section({ en: 'Suggested by the courses', id: 'Disarankan oleh kursus' }));
    var tiles = el('div', 'ts-tiles');
    SUGGESTED.forEach(function (s) {
      var have = hs.some(function (h) { return h.key === s.key; });
      tiles.appendChild(SH.tile({ icon: s.icon, title: s.name, hint: s.why, on: have, onPick: function () {
        var h2 = load(K.habits, []);
        if (have) { save(K.habits, h2.filter(function (h) { return h.key !== s.key; })); }
        else h2.push({ id: uid(), key: s.key, name: s.name, icon: s.icon, days: s.days, remind: s.remind, created: today(), log: {} });
        if (!have) save(K.habits, h2);
        renderHabits(host);
      } }));
    });
    host.appendChild(tiles);
  }
  function habitStreak(h) {
    var s = 0;
    for (var k = 0; k < 90; k++) {
      var dt = new Date(Date.now() - k * DAY), d = iso(dt.getTime());
      if (!habitDue(h, dt) || (h.created && h.created > d)) { if (h.created && h.created > d) break; continue; }
      if (h.log && h.log[d]) s++; else if (k === 0) continue; else break;
    }
    return s;
  }
  function toggleLog(id, d) {
    var hs = load(K.habits, []);
    hs.forEach(function (h) { if (h.id === id) { h.log = h.log || {}; if (h.log[d]) delete h.log[d]; else h.log[d] = true; } });
    save(K.habits, hs);
  }
  /* reminders: checked every 30 s while the page is open; fires once per habit per day */
  var remTimer = null;
  function scheduleReminders() {
    if (remTimer) return;
    remTimer = setInterval(checkReminders, 30000);
    checkReminders();
  }
  function checkReminders() {
    if (load(K.notify, 'off') !== 'on' || !('Notification' in window) || Notification.permission !== 'granted') return;
    var hs = load(K.habits, []), now = new Date(), td = today();
    var hhmm = (now.getHours() < 10 ? '0' : '') + now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    var fired = load(K.fired, {});
    hs.forEach(function (h) {
      if (!h.remind || !habitDue(h, now) || (h.log && h.log[td])) return;
      if (h.remind > hhmm) return;
      var key = h.id + ':' + td;
      if (fired[key]) return;
      fired[key] = true;
      try { new Notification(T('The Compass · ', 'The Compass · ') + SH.txt(h.name), { body: T('Due today. Tick it off in Habits when done.', 'Jadwal hari ini. Centang di Kebiasaan setelah selesai.'), icon: '../../assets/favicon-192.png' }); } catch (e) {}
    });
    Object.keys(fired).forEach(function (k) { if (k.slice(-10) < iso(Date.now() - 2 * DAY)) delete fired[k]; });
    save(K.fired, fired);
  }

  /* ═══ DEVELOPMENT PLAN ═══ */
  function goalProgress(g) { var m = g.milestones || []; return m.length ? Math.round(m.filter(function (x) { return x.done; }).length / m.length * 100) : (g.done ? 100 : 0); }
  function renderPlan(host, prefill) {
    host.innerHTML = '';
    var goals = load(K.goals, []);
    var open = goals.filter(function (g) { return !g.done; }), closed = goals.filter(function (g) { return g.done; });
    host.appendChild(pageHero({ img: '../../assets/bg/hero.jpg', pos: 'center 55%', kicker: { en: 'Personal development plan', id: 'Rencana pengembangan diri' },
      title: { en: ['From intention', 'to milestones'], id: ['Dari niat', 'ke tonggak'] },
      sub: { en: 'Each goal carries a why, a deadline, the product that trains it and a checklist of milestones. Review it on Sundays; the Today panel surfaces what is due.', id: 'Setiap tujuan membawa alasan, tenggat, produk yang melatihnya, dan daftar tonggak. Tinjau tiap Minggu; panel Hari Ini menampilkan yang jatuh tempo.' },
      stats: '<b>' + open.length + '</b> ' + esc(T('open goals', 'tujuan terbuka')) + ' · <b>' + closed.length + '</b> ' + esc(T('completed', 'selesai')) }));

    /* suggestions */
    var sug = [];
    var audit = C.isDemoMode ? null : readLS('mt_map_audit');
    if (audit && audit.mission && audit.mission.outcome) sug.push({ icon: 'flag', title: audit.mission.outcome, why: audit.mission.text || '', product: 'aladin', src: { en: 'Your 3-year outcome from the Personal Audit', id: 'Hasil 3 tahunmu dari Audit Pribadi' } });
    var rp = C.isDemoMode ? null : readLS('mt_route_plan');
    if (rp && rp.plan && rp.plan.goal) sug.push({ icon: 'calendar', title: rp.plan.goal, why: '', product: 'horizon', due: rp.plan.started ? iso(rp.plan.started + 90 * DAY) : '', src: { en: 'Your 90-day goal from the Route Planner', id: 'Tujuan 90 harimu dari Route Planner' } });
    var sc = C.calculateScores();
    var dims = [['careerIntelligence', { en: 'Raise Career Intelligence — finish the next Map module', id: 'Naikkan Kecerdasan Karier — selesaikan modul The Map berikutnya' }, 'aladin'], ['profileStrength', { en: 'Raise Profile Strength — finish the next Pack module', id: 'Naikkan Kekuatan Profil — selesaikan modul The Pack berikutnya' }, 'maverick'], ['interviewReadiness', { en: 'Raise Interview Readiness — finish the next Rope module', id: 'Naikkan Kesiapan Wawancara — selesaikan modul The Rope berikutnya' }, 'nexus'], ['networkCapital', { en: 'Grow Network Capital — two conversations a week', id: 'Tumbuhkan Modal Jaringan — dua percakapan seminggu' }, ''], ['careerMindset', { en: 'Strengthen Career Mindset — three routes a week', id: 'Perkuat Pola Pikir Karier — tiga rute seminggu' }, 'horizon']];
    var lowest = dims.slice().sort(function (a, b) { return sc[a[0]] - sc[b[0]]; })[0];
    sug.push({ icon: 'trendUp', title: SH.txt(lowest[1]), why: T('Lowest Compass Point at ' + sc[lowest[0]] + ' / 100', 'Titik Kompas terendah di ' + sc[lowest[0]] + ' / 100'), product: lowest[2], src: { en: 'From your Bearing', id: 'Dari Bearing-mu' } });
    host.appendChild(section({ en: 'Suggested goals', id: 'Tujuan yang disarankan' }));
    var tiles = el('div', 'ts-tiles');
    sug.forEach(function (s) {
      var exists = goals.some(function (g) { return g.title === s.title; });
      tiles.appendChild(SH.tile({ icon: s.icon, title: s.title.length > 70 ? s.title.slice(0, 70) + '…' : s.title, hint: SH.txt(s.src), on: exists, onPick: function () { if (!exists) renderPlan(host, s); } }));
    });
    host.appendChild(tiles);

    /* form */
    host.appendChild(section({ en: prefill ? 'New goal — from a suggestion' : 'New goal', id: prefill ? 'Tujuan baru — dari saran' : 'Tujuan baru' }));
    var fc = SH.card();
    var title = SH.input('text', { value: prefill ? prefill.title : '', placeholder: { en: 'e.g. Land a data analyst internship by June', id: 'mis. Dapatkan magang analis data sebelum Juni' } });
    var why = SH.input('textarea', { value: prefill ? prefill.why : '', placeholder: { en: 'Why it matters — the value it serves, the evidence it will produce', id: 'Mengapa ini penting — nilai yang dilayaninya, bukti yang akan dihasilkannya' } }); why.style.minHeight = '72px';
    var due = SH.input('text', { value: prefill && prefill.due ? prefill.due : '' }); due.type = 'date';
    var prod = SH.input('select', { options: [['', { en: 'No product link', id: 'Tanpa tautan produk' }]].concat(PRODUCT_LINKS.map(function (p) { return [p.key, p.name]; })), value: prefill ? prefill.product || '' : '' });
    var m1 = SH.input('text', { placeholder: { en: 'First milestone (optional)', id: 'Tonggak pertama (opsional)' } });
    fc.appendChild(SH.field({ label: { en: 'Goal', id: 'Tujuan' }, input: title, icon: 'flag' }));
    fc.appendChild(SH.field({ label: { en: 'Why', id: 'Mengapa' }, input: why }));
    var th = el('div', 'ts-three');
    th.appendChild(SH.field({ label: { en: 'Deadline', id: 'Tenggat' }, input: due, icon: 'calendar' }));
    th.appendChild(SH.field({ label: { en: 'Trained by', id: 'Dilatih oleh' }, input: prod }));
    th.appendChild(SH.field({ label: { en: 'Milestone', id: 'Tonggak' }, input: m1, icon: 'checkSq' }));
    fc.appendChild(th);
    var fr = el('div', 'ts-row');
    fr.appendChild(SH.btn({ en: 'Add goal', id: 'Tambah tujuan' }, { icon: 'plus', onClick: function () {
      if (!title.value.trim()) { title.focus(); return; }
      var g2 = load(K.goals, []);
      g2.push({ id: uid(), title: title.value.trim(), why: why.value.trim(), due: due.value || '', product: prod.value, created: today(), done: false, milestones: m1.value.trim() ? [{ id: uid(), text: m1.value.trim(), done: false }] : [] });
      save(K.goals, g2); renderPlan(host);
    } }));
    if (prefill) fr.appendChild(SH.btn({ en: 'Clear', id: 'Kosongkan' }, { quiet: true, onClick: function () { renderPlan(host); } }));
    fc.appendChild(fr);
    host.appendChild(fc);

    /* goals */
    if (open.length) {
      host.appendChild(section({ en: 'Open goals', id: 'Tujuan terbuka' }));
      open.forEach(function (g, i) { host.appendChild(goalCard(g, i, host)); });
    }
    if (closed.length) {
      host.appendChild(section({ en: 'Completed', id: 'Selesai' }));
      var cc = SH.card(); var rows = el('div', 'ts-rows');
      closed.forEach(function (g) { rows.appendChild(SH.rowi({ icon: 'trophy', title: g.title, sub: (g.doneAt ? fmt(g.doneAt) : '') + (g.milestones && g.milestones.length ? ' · ' + g.milestones.length + ' ' + T('milestones', 'tonggak') : ''), actions: [SH.btn({ en: 'Reopen', id: 'Buka lagi' }, { quiet: true, onClick: function () { setGoal(g.id, function (x) { x.done = false; }); renderPlan(host); } }), SH.xbtn(function () { save(K.goals, load(K.goals, []).filter(function (x) { return x.id !== g.id; })); renderPlan(host); })] })); });
      cc.appendChild(rows); host.appendChild(cc);
    }
    host.appendChild(SH.cta({ icon: 'refresh', title: { en: 'Review on Sundays', id: 'Tinjau tiap Minggu' },
      text: { en: 'Fifteen minutes: tick milestones, move deadlines honestly, and write next week’s three priorities in the journal.', id: 'Lima belas menit: centang tonggak, geser tenggat dengan jujur, dan tulis tiga prioritas minggu depan di jurnal.' },
      actions: [SH.btn({ en: 'Add the Sunday review habit', id: 'Tambah kebiasaan tinjauan Minggu' }, { ghost: true, icon: 'arrow', onClick: function () {
        var h2 = load(K.habits, []); var s = SUGGESTED[1];
        if (!h2.some(function (h) { return h.key === s.key; })) { h2.push({ id: uid(), key: s.key, name: s.name, icon: s.icon, days: s.days, remind: s.remind, created: today(), log: {} }); save(K.habits, h2); }
        C.activateTab('habits');
      } })] }));
  }
  function setGoal(id, fn) { var gs = load(K.goals, []); gs.forEach(function (g) { if (g.id === id) fn(g); }); save(K.goals, gs); }
  function goalCard(g, i, host) {
    var pct = goalProgress(g);
    var left = g.due ? daysUntil(g.due) : null;
    var body = el('div'); body.style.cssText = 'display:flex;flex-direction:column;gap:10px;width:100%';
    body.appendChild(SH.bar(pct));
    var ms = el('div', 'ts-rows');
    (g.milestones || []).forEach(function (m) {
      var r = el('div', 'cx-ms' + (m.done ? ' done' : ''));
      var cb = el('button', 'cx-cb', m.done ? SH.ico('check') : ''); cb.type = 'button'; cb.setAttribute('aria-pressed', m.done ? 'true' : 'false');
      cb.addEventListener('click', function () { setGoal(g.id, function (x) { x.milestones.forEach(function (y) { if (y.id === m.id) y.done = !y.done; }); }); renderPlan(host); });
      r.appendChild(cb); r.appendChild(el('span', null, esc(m.text)));
      r.appendChild(SH.xbtn(function () { setGoal(g.id, function (x) { x.milestones = x.milestones.filter(function (y) { return y.id !== m.id; }); }); renderPlan(host); }));
      ms.appendChild(r);
    });
    body.appendChild(ms);
    var add = el('div', 'ts-input'); add.appendChild(SH.svg('plus'));
    var inp = SH.input('text', { placeholder: { en: 'Add a milestone and press Enter', id: 'Tambah tonggak lalu tekan Enter' } }); add.appendChild(inp);
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter' && inp.value.trim()) { setGoal(g.id, function (x) { x.milestones = x.milestones || []; x.milestones.push({ id: uid(), text: inp.value.trim(), done: false }); }); renderPlan(host); } });
    body.appendChild(add);
    var acts = el('div', 'ts-row');
    acts.appendChild(SH.btn({ en: 'Mark complete', id: 'Tandai selesai' }, { sm: true, iconL: 'check', onClick: function () { setGoal(g.id, function (x) { x.done = true; x.doneAt = today(); }); renderPlan(host); } }));
    if (g.product) { var pl = PRODUCT_LINKS.filter(function (p) { return p.key === g.product; })[0]; if (pl) acts.appendChild(link({ en: 'Open ' + pl.name, id: 'Buka ' + pl.name }, pl.href, { ghost: true, sm: true, icon: 'arrow' })); }
    acts.appendChild(SH.xbtn(function () { if (confirm(T('Delete this goal?', 'Hapus tujuan ini?'))) { save(K.goals, load(K.goals, []).filter(function (x) { return x.id !== g.id; })); renderPlan(host); } }, T('Delete goal', 'Hapus tujuan')));
    body.appendChild(acts);
    var pill = g.due ? '<span class="ts-pill' + (left < 0 ? ' bad' : left <= 7 ? '' : ' mute') + '">' + esc(left < 0 ? T(Math.abs(left) + ' days overdue', 'terlambat ' + Math.abs(left) + ' hari') : left === 0 ? T('due today', 'jatuh tempo hari ini') : T(left + ' days left', left + ' hari lagi')) + ' · ' + esc(fmt(g.due)) + '</span>' : '';
    return SH.item({ num: i + 1, icon: g.product ? (PRODUCT_LINKS.filter(function (p) { return p.key === g.product; })[0] || {}).icon || 'flag' : 'flag', title: g.title, text: (g.why ? esc(g.why) + '<br>' : '') + pill + ' <span class="ts-pill mute">' + pct + '%</span>', on: pct > 0, stack: true, ctl: body });
  }

  /* ═══ RESOURCES ═══ */
  function renderResources(host) {
    host.innerHTML = '';
    var ck = load(K.check, {});
    var doneCk = CHECKLIST.filter(function (c) { return ck[c.key]; }).length;
    host.appendChild(pageHero({ img: '../../assets/bg/compass.jpg', pos: 'center 50%', kicker: { en: 'Resources & learning portals', id: 'Sumber daya & portal belajar' },
      title: { en: ['Everything you need,', 'one door'], id: ['Semua yang kamu butuhkan,', 'satu pintu'] },
      sub: { en: 'The four courses with live progress, every instrument one tap away, the job-search checklist, and exports of your own data.', id: 'Empat kursus dengan kemajuan langsung, setiap instrumen sekali ketuk, daftar periksa pencarian kerja, dan ekspor datamu sendiri.' },
      stats: '<b>' + doneCk + '/' + CHECKLIST.length + '</b> ' + esc(T('checklist items done', 'butir daftar periksa selesai')) }));

    host.appendChild(section({ en: 'Learning portals', id: 'Portal belajar' }));
    var pg = el('div', 'ts-two');
    PRODUCT_LINKS.forEach(function (p) {
      var done = C.modulesDone(p.key + '_progress', p.total);
      var c = el('a', 'ts-card cx-portal'); c.href = p.href;
      var ic = el('div', 'ts-ico gold'); ic.innerHTML = SH.ico(p.icon); c.appendChild(ic);
      var tx = el('div');
      tx.appendChild(el('div', 'ts-kick', p.num + ' · ' + p.name));
      tx.appendChild(el('h3', null, esc(SH.txt(p.sub))));
      tx.appendChild(SH.bar(done / p.total * 100));
      tx.appendChild(el('div', 'ts-count', done + ' / ' + p.total + ' ' + esc(T('modules complete', 'modul selesai')) + (done < p.total ? ' · ' + esc(T('continue →', 'lanjutkan →')) : ' · ' + esc(T('complete ✓', 'selesai ✓')))));
      c.appendChild(tx);
      pg.appendChild(c);
    });
    host.appendChild(pg);

    host.appendChild(section({ en: 'Tools index', id: 'Indeks alat' }));
    var tiles = el('div', 'ts-tiles');
    TOOLS.forEach(function (t) { tiles.appendChild(SH.tile({ icon: t.icon, title: t.name, hint: t.prod + ' · ' + SH.txt(t.sub), onPick: function () { location.href = t.href; } })); });
    host.appendChild(tiles);

    host.appendChild(section({ en: 'Job-search checklist', id: 'Daftar periksa pencarian kerja' }));
    var cc = SH.card();
    CHECKLIST.forEach(function (c) {
      var r = el('div', 'cx-ms' + (ck[c.key] ? ' done' : ''));
      var cb = el('button', 'cx-cb', ck[c.key] ? SH.ico('check') : ''); cb.type = 'button'; cb.setAttribute('aria-pressed', ck[c.key] ? 'true' : 'false');
      cb.addEventListener('click', function () { var k2 = load(K.check, {}); if (k2[c.key]) delete k2[c.key]; else k2[c.key] = today(); save(K.check, k2); renderResources(host); });
      r.appendChild(cb); r.appendChild(el('span', null, esc(SH.txt(c.text))));
      if (c.href) r.appendChild(link({ en: 'Open', id: 'Buka' }, c.href, { quiet: true, sm: true, icon: 'arrow' }));
      else if (c.tab) r.appendChild(SH.btn({ en: 'Open', id: 'Buka' }, { quiet: true, sm: true, icon: 'arrow', onClick: function () { C.activateTab(c.tab); } }));
      cc.appendChild(r);
    });
    cc.appendChild(SH.bar(doneCk / CHECKLIST.length * 100));
    host.appendChild(cc);

    host.appendChild(section({ en: 'Your data, exported', id: 'Datamu, diekspor' }));
    var ex = SH.card({ kick: { en: 'Downloads', id: 'Unduhan' }, title: { en: 'Take your own records with you', id: 'Bawa catatanmu sendiri' }, text: T('Plain files generated on this device from what you have logged. Nothing is sent anywhere.', 'Berkas polos yang dibuat di perangkat ini dari apa yang kamu catat. Tidak ada yang dikirim ke mana pun.') });
    var er = el('div', 'ts-row');
    er.appendChild(SH.btn({ en: 'Applications (CSV)', id: 'Lamaran (CSV)' }, { ghost: true, sm: true, iconL: 'doc', onClick: function () {
      var apps = C.getApplications();
      var rows = [['company', 'role', 'stage', 'status', 'applied', 'next_action', 'next_action_due']].concat(apps.map(function (a) { return [a.company, a.role, a.stage, a.status, a.applicationDate, a.nextAction || '', a.nextActionDue || '']; }));
      download('compass-applications.csv', rows.map(function (r) { return r.map(function (v) { return '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"'; }).join(','); }).join('\n'), 'text/csv');
    } }));
    er.appendChild(SH.btn({ en: 'Win log (CSV)', id: 'Catatan kemenangan (CSV)' }, { ghost: true, sm: true, iconL: 'trophy', onClick: function () {
      var rp = readLS('mt_route_plan') || {}; var wins = rp.wins || [];
      var rows = [['date', 'win', 'number_and_witness']].concat(wins.map(function (w) { return [iso(w.date), w.text, w.meta || '']; }));
      download('compass-win-log.csv', rows.map(function (r) { return r.map(function (v) { return '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"'; }).join(','); }).join('\n'), 'text/csv');
    } }));
    er.appendChild(SH.btn({ en: 'Development plan (Markdown)', id: 'Rencana pengembangan (Markdown)' }, { ghost: true, sm: true, iconL: 'flag', onClick: function () {
      var gs = load(K.goals, []), j = load(K.journal, []), hs = load(K.habits, []);
      var md = '# ' + T('My development plan', 'Rencana pengembanganku') + '\n\n' + gs.map(function (g) { return '## ' + g.title + (g.due ? ' — ' + g.due : '') + '\n' + (g.why ? g.why + '\n' : '') + (g.milestones || []).map(function (m) { return '- [' + (m.done ? 'x' : ' ') + '] ' + m.text; }).join('\n') + '\n'; }).join('\n') +
        '\n# ' + T('Habits', 'Kebiasaan') + '\n' + hs.map(function (h) { return '- ' + SH.txt(h.name) + (h.remind ? ' (' + h.remind + ')' : ''); }).join('\n') + '\n\n# ' + T('Journal', 'Jurnal') + '\n' + j.map(function (e) { return '### ' + e.date + ' — ' + SH.txt(e.prompt) + '\n' + e.text + '\n'; }).join('\n');
      download('compass-development-plan.md', md, 'text/markdown');
    } }));
    ex.appendChild(er);
    host.appendChild(ex);
  }
  function download(name, text, type) {
    try {
      var blob = new Blob([text], { type: type + ';charset=utf-8' });
      var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    } catch (e) {}
  }
  function link(label, href, o) {
    o = o || {};
    var a = el('a', 'ts-btn' + (o.ghost ? ' ghost' : '') + (o.quiet ? ' quiet' : '') + (o.sm ? ' sm' : '')); a.href = href;
    if (o.iconL) a.appendChild(SH.svg(o.iconL));
    a.appendChild(el('span', null, esc(SH.txt(label))));
    if (o.icon) a.appendChild(SH.svg(o.icon));
    return a;
  }

  /* ═══ TODAY (Bearing) ═══ */
  function renderToday(slot) {
    if (!slot) return;
    slot.innerHTML = '';
    var td = today(), now = new Date();
    var hs = load(K.habits, []), due = hs.filter(function (h) { return habitDue(h, now); }), done = due.filter(function (h) { return h.log && h.log[td]; });
    var goals = load(K.goals, []).filter(function (g) { return !g.done; });
    var msDue = []; goals.forEach(function (g) { if (g.due && daysUntil(g.due) <= 7) msDue.push(g); });
    var apps = C.getApplications().filter(function (a) { return (a.status === 'active' || a.status === 'offer') && a.nextActionDue && daysUntil(a.nextActionDue) <= 0; });
    var j = load(K.journal, []); var wrote = j.some(function (e) { return e.date === td; });
    var next = hs.filter(function (h) { return h.remind && habitDue(h, now) && !(h.log && h.log[td]); }).map(function (h) { return h.remind; }).sort()[0];
    var card = el('div', 'glass-card cx-today');
    card.appendChild(el('div', 'cx-today-h', '<span class="ts-kick">' + esc(T('Today', 'Hari ini')) + '</span><span class="cx-date">' + esc(now.toLocaleDateString(lang() === 'id' ? 'id-ID' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long' })) + '</span>'));
    var grid = el('div', 'cx-today-grid');
    [['checkSq', T('Habits', 'Kebiasaan'), due.length ? done.length + ' / ' + due.length + ' ' + T('done', 'selesai') : T('none scheduled', 'tidak ada jadwal'), next ? T('next reminder ', 'pengingat berikutnya ') + next : (due.length && done.length === due.length ? T('all done — nice', 'semua selesai — mantap') : T('tap to tick off', 'ketuk untuk mencentang')), 'habits'],
     ['flag', T('Plan', 'Rencana'), msDue.length ? msDue.length + ' ' + T('goal(s) due within 7 days', 'tujuan jatuh tempo ≤ 7 hari') : goals.length + ' ' + T('open goal(s)', 'tujuan terbuka'), msDue.length ? esc(msDue[0].title).slice(0, 48) : T('review on Sunday', 'tinjau hari Minggu'), 'plan'],
     ['send', T('Routes', 'Rute'), apps.length ? apps.length + ' ' + T('next action(s) due', 'tindakan jatuh tempo') : T('no actions due', 'tidak ada tindakan jatuh tempo'), apps.length ? esc(apps[0].company) + ' — ' + esc(apps[0].nextAction || '').slice(0, 40) : T('keep the pipeline moving', 'jaga alur tetap bergerak'), 'course-plotter'],
     ['pen', T('Journal', 'Jurnal'), wrote ? T('written today', 'sudah ditulis hari ini') : T('this week’s prompt is waiting', 'pertanyaan pekan ini menunggu'), esc(SH.txt(PROMPTS[Math.floor(Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / DAY) / 7) % PROMPTS.length])).slice(0, 60) + '…', 'discovery']
    ].forEach(function (x) {
      var b = el('button', 'cx-today-item'); b.type = 'button';
      var ic = el('span', 'ts-ico sm gold'); ic.innerHTML = SH.ico(x[0]); b.appendChild(ic);
      b.appendChild(el('span', 'ti-tx', '<b>' + esc(x[1]) + '</b><span class="ti-v">' + x[2] + '</span><span class="ti-s">' + x[3] + '</span>'));
      b.addEventListener('click', function () { C.activateTab(x[4]); });
      grid.appendChild(b);
    });
    card.appendChild(grid);
    slot.appendChild(card);
  }

  /* ═══ host API ═══ */
  window.MT_COMPASS_TOOLS = {
    init: function (api) { C = api; if (load(K.notify, 'off') === 'on') scheduleReminders(); },
    render: function (tab) {
      if (!C) return;
      if (tab === 'discovery') renderDiscovery(document.getElementById('tab-discovery'));
      else if (tab === 'habits') renderHabits(document.getElementById('tab-habits'));
      else if (tab === 'plan') renderPlan(document.getElementById('tab-plan'));
      else if (tab === 'resources') renderResources(document.getElementById('tab-resources'));
      else if (tab === 'bearing') renderToday(document.getElementById('todaySlot'));
    },
    counts: function () { var hs = load(K.habits, []), now = new Date(), td = today(); var due = hs.filter(function (h) { return habitDue(h, now) && !(h.log && h.log[td]); }); return { habitsDue: due.length, goalsOpen: load(K.goals, []).filter(function (g) { return !g.done; }).length }; }
  };
})();
