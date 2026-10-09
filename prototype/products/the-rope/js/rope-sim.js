/**
 * THE ROPE — AI INTERVIEW SIMULATOR v3 · INTERVIEW SPECIALIST (Module 7 application layer)
 * -----------------------------------------------------------------
 * Prepare → Practice → Review → Improve → Repeat, entirely on-device.
 *
 * v2: the flagship treatment — the Home background system, a stage
 * navigation toolbar, animated interviewer personas with voice, three
 * answer formats (video / audio / text) with real recording controls,
 * an Improve stage that closes the learning loop into the curriculum,
 * and a drill mode lessons launch for single-question practice.
 *
 * v5: the interview room — a video call with phases (greeting → questions →
 * closing), a progress bar across the top, the interviewer on a video tile
 * (js/rope-video.js: live avatar → recorded clips → photo + voice, never a
 * synthetically animated photograph), live captions, replay, a feedback
 * panel after every turn written from the interviewer's seat, and restart.
 *
 * v3: the Interview Specialist — a catalogue of interview paths
 * (data/rope/paths.js), a customise step, CV-aware personalisation, a case
 * engine with exhibits and exact numeric checks, a dimension report with a
 * full transcript, and a progress dashboard.
 *
 * Honesty contract (unchanged and binding):
 *  - Every score is a transparent rule-based reading of the candidate's
 *    own transcript, computed in this browser. Nothing is uploaded.
 *  - Camera and microphone are optional; recordings live only in memory
 *    for the current session and are discarded on close.
 *  - Presence is SELF-scored against the user's own recording — we never
 *    fake body-language analysis from pixels.
 *  - Question counts shown in the UI are computed from the question bank
 *    plus the career graph — never hard-coded claims.
 *  - Live Guidance inside the simulator only; no assistance during real interviews (see Integrity note).
 */
(function () {
  'use strict';
  var B = window.MT_ROPE_QBANK;
  if (!B) return;
  var G = window.MT_RANGE_GRAPH || { directions: [], industries: [] };
  var LS_HIST = 'mt_rope_sim_history';
  var LS_CFG = 'mt_rope_sim_cfg';

  /* ─── i18n ─── */
  function lang() {
    try { return (localStorage.getItem('mtLang') === 'id' || document.documentElement.lang === 'id') ? 'id' : 'en'; } catch (e) { return 'en'; }
  }
  function T(en, id) { return lang() === 'id' ? id : en; }
  function L(pair) { return pair ? (pair[lang()] || pair.en) : ''; }

  /* ─── interviewer personas ─── */
  var PERSONAS = [
    { id: 'hr', name: { en: 'HR Interviewer', id: 'Pewawancara HR' },
      title: { en: 'Screening round · warm but precise', id: 'Babak penyaringan · hangat tapi presisi' },
      hue: '#4EA8DE', rate: 1.0, pitch: 1.05,
      greet: { en: 'Thanks for making the time today. Let’s begin.', id: 'Terima kasih sudah meluangkan waktu. Mari kita mulai.' },
      bye: { en: 'Thank you — that is everything from my side. We will be in touch about next steps.', id: 'Terima kasih — itu saja dari saya. Kami akan menghubungi Anda tentang langkah berikutnya.' } },
    { id: 'manager', name: { en: 'Hiring Manager', id: 'Hiring Manager' },
      title: { en: 'Deep-dive round · direct and detailed', id: 'Babak pendalaman · lugas dan detail' },
      hue: '#C9A84C', rate: 1.02, pitch: 0.95,
      greet: { en: 'I’ve read your CV. I want to hear the details behind it.', id: 'Saya sudah membaca CV Anda. Saya ingin mendengar detail di baliknya.' },
      bye: { en: 'Okay. That gives me what I need for today. Thanks for your time.', id: 'Baik. Itu sudah cukup untuk hari ini. Terima kasih atas waktunya.' } },
    { id: 'exec', name: { en: 'Senior Executive', id: 'Eksekutif Senior' },
      title: { en: 'Final round · skeptical, thinks in years', id: 'Babak final · skeptis, berpikir dalam tahun' },
      hue: '#B08968', rate: 0.96, pitch: 0.85,
      greet: { en: 'You have my attention for thirty minutes. Make them count.', id: 'Anda punya perhatian saya selama tiga puluh menit. Manfaatkan.' },
      bye: { en: 'We are done. You will hear from the team.', id: 'Kita selesai. Tim kami akan menghubungi Anda.' } }
  ];
  function persona() {
    /* a running session (including a lesson drill with its own persona) wins over the saved setting */
    var want = (state.session && state.session.cfg && state.session.cfg.persona) || state.cfg.persona || 'hr';
    return PERSONAS.filter(function (p) { return p.id === want; })[0] || PERSONAS[0];
  }

  /* The interviewer's still portrait — a plain crop of one of the project's
     photographs, shown as a photograph. js/rope-video.js puts a real video
     interviewer on the tile when data/rope/media.js declares one (live avatar
     or recorded clips); otherwise the portrait plus the voice, with captions. */
  var PHOTOS = {
    hr:      { src: '../../assets/rope/interviewers/hr-portrait.jpg',      pos: '50% 38%' },
    manager: { src: '../../assets/rope/interviewers/manager-portrait.jpg', pos: '50% 38%' },
    exec:    { src: '../../assets/rope/interviewers/exec-portrait.jpg',    pos: '50% 38%' }
  };
  function mediaFor(id) { return (window.MT_ROPE_SIM_MEDIA && window.MT_ROPE_SIM_MEDIA.personas && window.MT_ROPE_SIM_MEDIA.personas[id]) || null; }
  /* what the interviewer says between questions — a human bridge that reacts to how the
     last answer landed (strong / thin / neutral), the way a real interviewer's "okay" does */
  var BRIDGES = {
    hr:      { en: { good: ['Thank you, that’s clear.', 'Good — that helps.'], thin: ['Okay. Let’s keep going.', 'Noted — we may come back to that.'], any: ['Thank you.', 'Okay, noted.', 'Thanks for that.'] },
               id: { good: ['Terima kasih, itu jelas.', 'Baik — itu membantu.'], thin: ['Baik. Kita lanjut.', 'Dicatat — mungkin kita kembali ke situ.'], any: ['Terima kasih.', 'Baik, dicatat.', 'Terima kasih atas jawabannya.'] } },
    manager: { en: { good: ['Right, that’s what I was after.', 'Good, clear.'], thin: ['Okay. Moving on.', 'Hm. Let’s keep going.'], any: ['Okay.', 'Understood.', 'Noted.'] },
               id: { good: ['Oke, itu yang saya cari.', 'Baik, jelas.'], thin: ['Baik. Lanjut.', 'Hm. Kita lanjut.'], any: ['Baik.', 'Saya paham.', 'Dicatat.'] } },
    exec:    { en: { good: ['Fine.', 'Good.'], thin: ['Hm.', 'Let’s move on.'], any: ['Okay.', 'Fine.', 'Next.'] },
               id: { good: ['Baik.', 'Bagus.'], thin: ['Hm.', 'Lanjut.'], any: ['Oke.', 'Baik.', 'Berikutnya.'] } }
  };
  function bridgeFor(id, last) {
    var b = (BRIDGES[id] || BRIDGES.hr)[lang()] || BRIDGES.hr.en;
    var k = !last || last.limited ? 'any' : (last.level >= 3 || last.trigger === 'good_depth') ? 'good' : (last.trigger === 'too_short' || last.trigger === 'generic' || last.level <= 1) ? 'thin' : 'any';
    var arr = b[k] || b.any; return arr[Math.floor(Math.random() * arr.length)];
  }

  /* ─── composed question space (graph-driven, counted honestly) ─── */
  function composedQuestions() {
    var out = [];
    (G.directions || []).forEach(function (dir) {
      var skills = (dir.core_skills || []).slice(0, 2);
      B.roleTemplates.forEach(function (t, ti) {
        var skill = skills[ti % Math.max(skills.length, 1)];
        var skillName = skill ? (skill[lang()] || skill.en || String(skill)) : L(dir.name);
        out.push({
          id: 'r_' + dir.id + '_' + t.id, cat: 'role',
          lvl: 'any', stage: 'any', d: t.d, sig: t.sig, dirId: dir.id,
          q: { en: t.q.en.replace('{skill}', skillName).replace('{role}', dir.name.en), id: t.q.id.replace('{skill}', skillName).replace('{role}', dir.name.id) },
          tests: t.tests,
          coach: { en: 'Ground your answer in the real work of ' + dir.name.en + ' — one concrete project, your actions, a measured result.', id: 'Pijakkan jawabanmu pada kerja nyata ' + dir.name.id + ' — satu proyek konkret, tindakanmu, hasil terukur.' }
        });
      });
    });
    (G.industries || []).forEach(function (ind) {
      B.industryTemplates.forEach(function (t) {
        out.push({
          id: 'i_' + ind.id + '_' + t.id, cat: 'industry', lvl: 'any', stage: 'any', d: t.d, sig: t.sig, indId: ind.id,
          q: { en: t.q.en.replace(/\{industry\}/g, ind.name.en), id: t.q.id.replace(/\{industry\}/g, ind.name.id) },
          tests: t.tests,
          coach: { en: 'Show real signal: one concrete change in ' + ind.name.en + ' and what it means for the person hiring you.', id: 'Tunjukkan sinyal nyata: satu perubahan konkret di ' + ind.name.id + ' dan artinya bagi orang yang merekrutmu.' }
        });
      });
    });
    return out;
  }
  function allQuestions() {
    return B.questions.concat(composedQuestions());
  }
  function bankStats() {
    var c = composedQuestions();
    return {
      authored: B.questions.length, composed: c.length,
      total: B.questions.length + c.length,
      roles: (G.directions || []).length,
      industries: (G.industries || []).length,
      cases: B.cases.length
    };
  }

  /* ─── persistent state ─── */
  function history() { try { return JSON.parse(localStorage.getItem(LS_HIST) || '[]'); } catch (e) { return []; } }
  function saveHistory(h) { try { localStorage.setItem(LS_HIST, JSON.stringify(h.slice(-30))); } catch (e) {} }
  function savedCfg() { try { return JSON.parse(localStorage.getItem(LS_CFG) || 'null'); } catch (e) { return null; } }
  function saveCfg(c) { try { localStorage.setItem(LS_CFG, JSON.stringify(c)); } catch (e) {} }

  /* ─── answer analysis (rule-based, on-device) ─── */
  var FILLERS = ['um', 'uh', 'erm', 'like,', 'you know', 'i mean', 'basically', 'actually,', 'sort of', 'kind of', 'eee', 'emm', 'anu', 'apa ya', 'kayak', 'gitu', 'gimana ya'];
  var ACTION_RE = /\b(i|saya|aku)\s+(led|built|created|designed|decided|proposed|negotiated|organised|organized|launched|fixed|analysed|analyzed|wrote|presented|convinced|reduced|increased|delivered|memimpin|membangun|membuat|merancang|memutuskan|mengusulkan|menegosiasikan|meluncurkan|memperbaiki|menganalisis|menulis|meyakinkan|menurunkan|menaikkan|menyelesaikan)\b/i;
  var SITU_RE = /\b(when|while|at the time|last year|in 20\d\d|during|at my|ketika|saat|waktu itu|tahun lalu|pada 20\d\d|selama|di tempat)\b/i;
  var TASK_RE = /\b(goal|responsible|tasked|needed to|had to|target|objective|my (task|job|role|brief) was|task was to|asked to|tujuan|bertanggung jawab|ditugaskan|harus|sasaran|tugas saya|peran saya|diminta untuk)\b/i;
  var RESULT_RE = /\b(result|outcome|increased|decreased|reduced|improved|saved|grew|delivered|achieved|completed|hasil|dampak|meningkat|menurun|berkurang|membaik|menghemat|tumbuh|tercapai|selesai)\b/i;

  function countMatches(text, re) {
    var m = text.match(new RegExp(re.source, 'gi'));
    return m ? m.length : 0;
  }

  /* ─── v3 scoring core (blueprint 16.2; audit findings T-3, T-4) ───
     T-4: a number earns evidence credit only when it measures something — a percentage, an amount,
     a quantity with its unit, or a figure beside a change (“reduced … to 20 minutes”). “One of 3
     people” and a year are not measurements. */
  var UNIT_RE = /^(%|persen|percent|rp\.?|idr|usd|juta|jt|ribu|rb|miliar|m|k|jam|hours?|hrs?|menit|minutes?|mins?|detik|seconds?|secs?|hari|days?|minggu|weeks?|bulan|months?|kali|times|x|transaksi|transactions?|nasabah|customers?|clients?|orders?|pesanan|rekening|accounts?|cabang|branches|sponsors?|peserta|participants?|attendees|followers|pengikut|views|leads|tiket|tickets?|items?|records?|entri|entries|data|laporan|reports?|poin|points|kg|km|halaman|pages|produk|products|units?|pcs|lembar|dokumen|documents|pelamar|applicants|pendaftar|registrations|downloads|users|pengguna|penjualan|sales|omzet|revenue)$/i;
  var CHANGE_RE = /^(increased?|increasing|reduced?|reducing|decreased?|cut|saved?|saving|grew|grown|raised?|doubled|tripled|halved|dropped|improved?|boosted?|menjadi|naik|turun|meningkat|meningkatkan|menurun|menurunkan|berkurang|mengurangi|bertambah|menambah|menghemat|hemat|mempercepat|melipatgandakan)$/i;
  function measuredNumbers(text) {
    var clean = String(text || '').split(/\s+/).filter(Boolean).map(function (w) {
      return w.toLowerCase().replace(/^[("“'‘]+|[)"”'’.,;:!?]+$/g, '');
    });
    var n = 0;
    clean.forEach(function (w, i) {
      if (!/\d/.test(w)) return;
      if (/^(19|20)\d\d$/.test(w)) return;                               /* a year is a date, not a measure */
      if (/%$/.test(w) || /^(rp|\$)/.test(w)) { n++; return; }
      var prev = clean[i - 1] || '', next = clean[i + 1] || '';
      if (/^(rp\.?|idr|usd)$/.test(prev)) { n++; return; }
      var glued = w.replace(/^[\d.,]+/, '');                               /* “3jam”, “20menit”, “5x” */
      if (glued && UNIT_RE.test(glued)) { n++; return; }
      if (UNIT_RE.test(next)) { n++; return; }
      for (var j = Math.max(0, i - 5); j <= Math.min(clean.length - 1, i + 5); j++) {
        if (j !== i && CHANGE_RE.test(clean[j])) { n++; return; }
      }
    });
    return n;
  }

  /* T-3: one scoring model per question type. The profile comes from the question (scoringProfile,
     then type), then the lesson’s drill profile, then the category. Each profile has its own checks
     and maps to the 1–4 behavioural anchors in MT_ROPE_QBANK.anchorSets. */
  var PROFILE_OF_TYPE = { behavioural: 'behavioural', situational: 'situational', motivational: 'motivational', self_assessment: 'self_assessment', technical: 'technical', 'case': 'case', eligibility: 'eligibility', closing: 'closing', stress: 'self_assessment' };
  var PROFILE_OF_CAT = { behavioral: 'behavioural', leadership: 'behavioural', situational: 'situational', technical: 'technical', 'case': 'case', closing: 'closing', difficult: 'self_assessment', hr: 'motivational' };
  var PROFILE_NAME = {
    behavioural: { en: 'Behavioural', id: 'Perilaku' }, situational: { en: 'Situational', id: 'Situasional' },
    motivational: { en: 'Motivational', id: 'Motivasi' }, self_assessment: { en: 'Self-assessment', id: 'Penilaian diri' },
    technical: { en: 'Technical', id: 'Teknis' }, 'case': { en: 'Case', id: 'Kasus' },
    eligibility: { en: 'Eligibility', id: 'Kelayakan' }, closing: { en: 'Closing', id: 'Penutup' }
  };
  function profileFor(q) {
    var A = B.anchorSets || {};
    if (q.phase === 'greet') return 'rapport';
    if (q.scoringProfile && A[q.scoringProfile]) return q.scoringProfile;
    if (q.type && PROFILE_OF_TYPE[q.type]) return PROFILE_OF_TYPE[q.type];
    var sp = state.session && state.session.cfg && state.session.cfg.profile;
    if (sp && A[sp]) return sp;
    if ((q.sig || []).indexOf('star') !== -1) return 'behavioural';
    if (q.cat === 'hr') {
      var qt = String((q.q && q.q.en) || '');
      if (/weakness|strength|improve|mistake/i.test(qt)) return 'self_assessment';
      if (/salary|placement|relocat|start|bond|notice|travel/i.test(qt)) return 'eligibility';
    }
    return PROFILE_OF_CAT[q.cat] || 'behavioural';
  }
  var PX = {
    steps: /\b(first|firstly|then|next|after that|finally|second|third|pertama|kedua|ketiga|lalu|kemudian|setelah itu|terakhir|langkah)\b/gi,
    principle: /\b(because|since|so that|priority|prioriti[sz]e|principle|policy|rule|sop|integrity|safety|karena|sebab|agar|supaya|prioritas|prinsip|kebijakan|aturan|integritas|keselamatan)\b/i,
    stake: /\b(manager|supervisor|boss|customer|client|team|colleague|compliance|hr|senior|atasan|nasabah|pelanggan|klien|tim|rekan|kepatuhan|kepala)\b/i,
    past: /\b(once|last year|in my internship|when i was|at my|i did this|pernah|waktu itu|saat magang|ketika saya|tahun lalu)\b/i,
    research: /\b(your|annual report|report|programme|program|product|branch|customers|mission|values?|strategy|expansion|laporan|produk|cabang|nasabah|misi|visi|nilai|strategi|ekspansi|perusahaan ini|bank ini|anda)\b/i,
    link: /\b(because i|since i|my experience|in my internship|i have|i've|karena saya|pengalaman saya|saat magang|saya pernah|sejak saya)\b/i,
    role: /\b(role|position|job|programme|program|rotation|responsibilit\w*|peran|posisi|pekerjaan|rotasi|tanggung jawab|tugas)\b/i,
    contribute: /\b(contribute|bring|help|build|add|want to|would like to|kontribusi|berkontribusi|membawa|membantu|membangun|ingin)\b/i,
    cliche: /\b(perfectionist|perfeksionis|work too hard|terlalu keras|passionate|dream company|perusahaan impian|big company|perusahaan besar)\b/i,
    example: /\b(for example|for instance|e\.g\.|such as|when i|once|misalnya|contohnya|contoh|seperti|ketika saya|pernah)\b/i,
    system: /\b(now i|these days i|every|each|habit|checklist|routine|i use|i always|sekarang saya|setiap|kebiasaan|daftar periksa|rutin|saya selalu|saya pakai)\b/i,
    progress: /\b(since then|improved|better|fewer|reduced|sejak itu|membaik|lebih baik|berkurang|menurun)\b/i,
    limits: /\b(not sure|i don't know|i do not know|i'd check|i would check|verify|depends on|i haven't|belum|tidak yakin|kurang yakin|akan saya cek|verifikasi|tergantung pada)\b/i,
    clarify: /\b(clarify|to confirm|may i ask|can i check|boleh saya|apakah|saya pastikan)\b|\?/i,
    frame: /\b(two|three|four|first|second|factors?|drivers?|split|framework|pertama|kedua|dua|tiga|faktor|pendorong|kerangka)\b/i,
    recommend: /\b(recommend|suggest|i would|my answer|so the answer|rekomendasi|saran|sarankan|saya akan|jawaban saya)\b/i,
    risk: /\b(risk|next step|caveat|sanity|check|risiko|langkah berikut|catatan|cek ulang)\b/i,
    direct: /\b(yes|ya|bersedia|willing|ready|siap|bisa|can|able|sudah|tidak|no|available|tersedia)\b/i,
    hedge: /\b(tergantung|coba dulu|lihat nanti|maybe|mungkin|not sure yet|belum tahu|kita lihat|depends)\b/i,
    reason: /\b(because|since|discussed|family|karena|sudah dibicarakan|keluarga|sudah saya pertimbangkan)\b/i,
    none: /\b(no questions?|nothing|none|tidak ada|belum ada|cukup|sudah jelas)\b/i,
    close: /\b(thank|next steps?|timeline|terima kasih|langkah berikutnya|kapan)\b/i,
    learn: /\b(learn\w*|next time|now i|lesson|would do differently|belajar|pelajaran|lain kali|sekarang saya|akan saya lakukan berbeda)\b/i,
    why: /\b(because|so that|chose|decided|instead of|karena|agar|memilih|memutuskan|daripada)\b/i
  };
  function ck(ok, good, gap, fix) { return { ok: !!ok, good: good, gap: gap, fix: fix }; }
  function assessProfile(p, t, words, m) {
    var lvl = 2, checks = [];
    var first12 = (t.match(/\S+/g) || []).slice(0, 12).join(' ');
    if (p === 'behavioural') {
      var specific = m.star.s || m.metrics > 0, own = m.star.a && m.iCount >= m.weCount, res = m.star.r, reasoned = PX.why.test(t) || PX.learn.test(t);
      checks = [
        ck(specific, T('A specific example, not a general habit.', 'Contoh spesifik, bukan kebiasaan umum.'), T('No specific example yet — it reads as a habit or a hypothesis.', 'Belum ada contoh spesifik — terbaca sebagai kebiasaan atau hipotesis.'), T('Name one real occasion: where, when, what was at stake.', 'Sebutkan satu kejadian nyata: di mana, kapan, apa taruhannya.')),
        ck(own, T('Your own actions were clear.', 'Tindakanmu sendiri jelas.'), T('Your own actions are unclear inside the team’s.', 'Tindakanmu sendiri tidak jelas di dalam tindakan tim.'), T('Say “I decided…”, “I built…” — what you did, not what the team did.', 'Katakan “Saya memutuskan…”, “Saya membangun…” — yang kamu lakukan, bukan tim.')),
        ck(res, T('The story landed on a result.', 'Kisahnya mendarat pada hasil.'), T('No result — the interviewer is left to guess how it ended.', 'Tanpa hasil — pewawancara dibiarkan menebak akhirnya.'), T('End on the result, with a number that measures it.', 'Akhiri dengan hasil, dengan angka yang mengukurnya.')),
        ck(reasoned && m.metrics > 0, T('Reasoning and a measured result — the level-4 extras.', 'Alasan dan hasil terukur — tambahan level 4.'), T('Missing the why, or a measured result, or a learning.', 'Kurang alasannya, hasil terukur, atau pembelajaran.'), T('Add why you chose the approach and one learning you applied later.', 'Tambahkan mengapa memilih pendekatan itu dan satu pembelajaran yang kamu terapkan kemudian.'))
      ];
      if (!specific && words < 60) lvl = 1; else if (specific && own && res) lvl = (reasoned && m.metrics > 0) ? 4 : 3;
    } else if (p === 'situational') {
      var steps = countMatches(t, PX.steps), pr = PX.principle.test(t), st = PX.stake.test(t), past = PX.past.test(t);
      checks = [
        ck(pr, T('A principle stated.', 'Prinsip dinyatakan.'), T('No principle — the answer does not say what matters most here.', 'Tanpa prinsip — jawaban tidak menyebut apa yang paling penting di sini.'), T('Open with the principle in one sentence: what you would protect, and why.', 'Buka dengan prinsip dalam satu kalimat: apa yang kamu jaga, dan mengapa.')),
        ck(steps >= 2, T('Steps in sequence.', 'Langkah berurutan.'), T('Steps are vague or out of order.', 'Langkahnya samar atau tidak berurutan.'), T('Give two or three steps in order: first…, then…, finally….', 'Beri dua atau tiga langkah berurutan: pertama…, lalu…, terakhir….')),
        ck(st, T('Stakeholders considered.', 'Pemangku kepentingan dipertimbangkan.'), T('Nobody else is in the answer — who needs to know?', 'Tak ada orang lain di jawaban — siapa yang perlu tahu?'), T('Name who you would tell or involve: the supervisor, the customer, compliance.', 'Sebutkan siapa yang kamu beri tahu atau libatkan: supervisor, nasabah, kepatuhan.')),
        ck(past, T('A real example of having done something similar.', 'Contoh nyata pernah melakukan yang serupa.'), T('No real example yet.', 'Belum ada contoh nyata.'), T('Add one line: “Waktu magang, saya pernah…”.', 'Tambahkan satu kalimat: “Waktu magang, saya pernah…”.'))
      ];
      if (!pr && steps < 2) lvl = 1; else if (pr && steps >= 2 && st) lvl = past ? 4 : 3;
    } else if (p === 'motivational') {
      var rs = PX.research.test(t) && words >= 25, ln = PX.link.test(t), rl = PX.role.test(t), ct = PX.contribute.test(t), cl = PX.cliche.test(t);
      checks = [
        ck(rs && !cl, T('Specific to them, not a cliché.', 'Spesifik tentang mereka, bukan klise.'), T('Generic — it could be said to any employer.', 'Generik — bisa diucapkan ke pemberi kerja mana pun.'), T('Name one real fact about them: a product, a programme, a priority.', 'Sebutkan satu fakta nyata tentang mereka: produk, program, prioritas.')),
        ck(ln, T('A personal link to your own experience.', 'Kaitan pribadi dengan pengalamanmu.'), T('No link to you — why you, not anyone?', 'Tanpa kaitan denganmu — mengapa kamu, bukan siapa pun?'), T('Connect it to something you did: “karena saat magang saya…”.', 'Hubungkan dengan sesuatu yang kamu lakukan: “karena saat magang saya…”.')),
        ck(rl, T('You showed you understand the role.', 'Kamu menunjukkan pemahaman peran.'), T('The role itself is missing.', 'Perannya sendiri hilang.'), T('Say what the role involves and which part draws you.', 'Katakan apa isi perannya dan bagian mana yang menarikmu.')),
        ck(ct, T('A contribution you want to make.', 'Kontribusi yang ingin kamu berikan.'), T('No contribution named.', 'Tak ada kontribusi disebut.'), T('End with one thing you want to contribute.', 'Akhiri dengan satu hal yang ingin kamu kontribusikan.'))
      ];
      if (!rs && (cl || words < 25)) lvl = 1; else if (rs && ln && rl) lvl = ct ? 4 : 3;
    } else if (p === 'self_assessment') {
      var cli = PX.cliche.test(t), ev = PX.example.test(t) || m.star.s, sy = PX.system.test(t), pg = m.metrics > 0 || PX.progress.test(t);
      checks = [
        ck(!cli && words >= 20, T('A real claim, not a cliché.', 'Klaim nyata, bukan klise.'), T('A cliché or a strength in disguise.', 'Klise atau kekuatan yang disamarkan.'), T('Name a real, relevant one — something that has cost you.', 'Sebutkan yang nyata dan relevan — sesuatu yang pernah merugikanmu.')),
        ck(ev, T('Evidence — a moment it showed.', 'Bukti — momen ia muncul.'), T('No evidence — a claim without a moment.', 'Tanpa bukti — klaim tanpa momen.'), T('Give the moment it showed, in one or two sentences.', 'Beri momen ia muncul, dalam satu atau dua kalimat.')),
        ck(sy, T('A system you use to manage it.', 'Sistem yang kamu pakai untuk mengelolanya.'), T('No system — what do you do about it now?', 'Tanpa sistem — apa yang kamu lakukan tentangnya sekarang?'), T('Name the habit or check you now use.', 'Sebutkan kebiasaan atau pemeriksaan yang kini kamu pakai.')),
        ck(pg, T('Progress you can show.', 'Kemajuan yang bisa ditunjukkan.'), T('No progress shown since.', 'Belum ada kemajuan yang ditunjukkan sejak itu.'), T('Add what has changed since, with a number if you can.', 'Tambahkan apa yang berubah sejak itu, dengan angka jika bisa.'))
      ];
      if (cli || words < 20) lvl = 1; else if (ev && sy) lvl = pg ? 4 : 3;
    } else if (p === 'technical') {
      var cov = words >= 35, exm = PX.example.test(t), lim = PX.limits.test(t);
      checks = [
        ck(cov, T('The key concepts were covered.', 'Konsep kunci dibahas.'), T('Too brief to cover the concept.', 'Terlalu singkat untuk membahas konsepnya.'), T('Explain it the way you would to a colleague — three or four sentences.', 'Jelaskan seperti ke rekan kerja — tiga atau empat kalimat.')),
        ck(exm, T('An example of use.', 'Contoh penggunaan.'), T('No example of use.', 'Tanpa contoh penggunaan.'), T('Add where you used it: “misalnya, di tugas akhir saya…”.', 'Tambahkan di mana kamu memakainya: “misalnya, di tugas akhir saya…”.')),
        ck(lim, T('Limits and uncertainty handled honestly.', 'Batas dan ketidakpastian ditangani jujur.'), T('No limits stated — say what you would check.', 'Tanpa batas disebut — katakan apa yang akan kamu cek.'), T('Name one limit or what you would verify.', 'Sebutkan satu batas atau apa yang akan kamu verifikasi.'))
      ];
      if (words < 15 || (lim && words < 25)) lvl = 1; else if (cov && exm) lvl = lim ? 4 : 3;
    } else if (p === 'case') {
      var cla = PX.clarify.test(t), fr = PX.frame.test(t), nums = m.rawDigits > 0, rec = PX.recommend.test(t), rk = PX.risk.test(t);
      var recEarly = rec && t.search(PX.recommend) < t.length * 0.4;
      checks = [
        ck(cla, T('You clarified before solving.', 'Kamu mengklarifikasi sebelum menyelesaikan.'), T('No clarifying question.', 'Tanpa pertanyaan klarifikasi.'), T('Ask one clarifying question first.', 'Ajukan satu pertanyaan klarifikasi lebih dulu.')),
        ck(fr, T('A structure the interviewer could follow.', 'Struktur yang bisa diikuti pewawancara.'), T('No structure — numbers before a frame.', 'Tanpa struktur — angka sebelum kerangka.'), T('Split the problem into two or three parts before calculating.', 'Pecah masalahnya menjadi dua atau tiga bagian sebelum menghitung.')),
        ck(nums, T('Analysis with numbers.', 'Analisis dengan angka.'), T('No numbers in the analysis.', 'Tanpa angka dalam analisis.'), T('Put one calculation on the table.', 'Taruh satu perhitungan di meja.')),
        ck(rec && rk, T('A recommendation with risks or next steps.', 'Rekomendasi dengan risiko atau langkah berikutnya.'), T('No clear answer, or no risks and next steps.', 'Tanpa jawaban jelas, atau tanpa risiko dan langkah berikutnya.'), T('Answer first, then one risk and one next step.', 'Jawaban dulu, lalu satu risiko dan satu langkah berikutnya.'))
      ];
      if (!fr && !rec) lvl = 1; else if (fr && rec && (nums || cla)) lvl = (rk && recEarly) ? 4 : 3;
    } else if (p === 'eligibility') {
      var dir = PX.direct.test(first12), hd = PX.hedge.test(t), br = words <= 90, rsn = PX.reason.test(t) || /\?/.test(t);
      checks = [
        ck(dir, T('A direct answer up front.', 'Jawaban langsung di depan.'), T('The answer is buried — say it in the first sentence.', 'Jawabannya terkubur — ucapkan di kalimat pertama.'), T('Start with the answer: “Bersedia.” / “Yes.”', 'Mulai dengan jawabannya: “Bersedia.” / “Ya.”')),
        ck(!hd, T('No hedging.', 'Tanpa berpagar.'), T('Hedged (“tergantung”, “coba dulu”) — HR hears no.', 'Berpagar (“tergantung”, “coba dulu”) — HR mendengar tidak.'), T('Decide at home; say the decision, not the doubt.', 'Putuskan di rumah; ucapkan keputusannya, bukan keraguannya.')),
        ck(br, T('Brief.', 'Singkat.'), T('Too long for an eligibility question.', 'Terlalu panjang untuk pertanyaan kelayakan.'), T('Keep it under thirty seconds.', 'Jaga di bawah tiga puluh detik.')),
        ck(rsn, T('A reason you mean, or one useful question.', 'Alasan yang kamu maksud, atau satu pertanyaan berguna.'), T('No reason or clarifying question.', 'Tanpa alasan atau pertanyaan klarifikasi.'), T('Add one honest reason or one useful question.', 'Tambahkan satu alasan jujur atau satu pertanyaan berguna.'))
      ];
      if (hd || words > 150) lvl = 1; else if (dir && br) lvl = rsn ? 4 : 3;
    } else if (p === 'rapport') {
      /* the greeting: warm, brief, specific, and handed back */
      var wm = /\b(hi|hello|hey|good (morning|afternoon|evening)|thank|thanks|pleasure|nice to|great to|glad|halo|hai|selamat (pagi|siang|sore|malam)|terima kasih|senang)\b/i.test(t);
      var ab = words >= 4 && /\b(i('m| am)|my|today|doing|well|fine|good|great|busy|found|easy|traffic|saya|hari ini|baik|lancar|mudah|macet|kabar)\b/i.test(t);
      var hb = /\?|\b(and you|how about you|yourself|and yours|bagaimana dengan|anda sendiri|kamu sendiri)\b/i.test(t);
      var sh = words <= 60;
      checks = [
        ck(wm, T('A warm opening.', 'Pembuka yang hangat.'), T('No greeting — it opened cold.', 'Tanpa sapaan — dibuka dingin.'), T('Greet back and thank them for the time, in one breath.', 'Balas sapaan dan ucapkan terima kasih atas waktunya, dalam satu tarikan napas.')),
        ck(ab, T('Something real about your day.', 'Sesuatu yang nyata tentang harimu.'), T('Nothing of you in it — a one-word reply.', 'Tak ada dirimu di dalamnya — jawaban satu kata.'), T('One honest line: how you are, or that you found the place easily.', 'Satu kalimat jujur: kabarmu, atau bahwa kamu mudah menemukan tempatnya.')),
        ck(hb, T('You handed it back.', 'Kamu mengembalikannya.'), T('No return — the interviewer carries the small talk alone.', 'Tak dikembalikan — pewawancara memikul basa-basi sendirian.'), T('End with “And you?” — rapport is a two-way line.', 'Akhiri dengan “Bagaimana dengan Anda?” — rapport berjalan dua arah.')),
        ck(sh, T('Brief.', 'Singkat.'), T('Too long for small talk.', 'Terlalu panjang untuk basa-basi.'), T('Two sentences, then stop.', 'Dua kalimat, lalu berhenti.'))
      ];
      if (!wm && !ab) lvl = 1; else if (wm && ab && sh) lvl = hb ? 4 : 3;
    } else if (p === 'closing') {
      var nq = (t.match(/\?/g) || []).length || countMatches(t, /\b(how|what|when|bagaimana|apa|kapan|seperti apa)\b/);
      var nn = PX.none.test(t) && nq === 0, clo = PX.close.test(t);
      checks = [
        ck(nq >= 1 && !nn, T('You asked a question.', 'Kamu mengajukan pertanyaan.'), T('No questions — “tidak ada” is a red flag.', 'Tanpa pertanyaan — “tidak ada” adalah tanda bahaya.'), T('Bring two researched questions this person can answer.', 'Bawa dua pertanyaan hasil riset yang bisa dijawab orang ini.')),
        ck(nq >= 2, T('Two questions — you are deciding too.', 'Dua pertanyaan — kamu juga sedang memutuskan.'), T('Only one question.', 'Hanya satu pertanyaan.'), T('Add a question that helps you decide.', 'Tambahkan pertanyaan yang membantumu memutuskan.')),
        ck(clo, T('A brief close: thanks, interest, next steps.', 'Penutup singkat: terima kasih, minat, langkah berikutnya.'), T('No close.', 'Tanpa penutup.'), T('End with thanks and the next-step question.', 'Akhiri dengan terima kasih dan pertanyaan langkah berikutnya.'))
      ];
      if (nn || nq < 1) lvl = 1; else if (clo) lvl = nq >= 2 ? 4 : 3;
    }
    return { level: lvl, checks: checks };
  }
  function anchorText(p, lvl) {
    var A = (B.anchorSets || {})[p];
    return A && A[lvl] ? L(A[lvl]) : '';
  }
  function analyseAnswer(text, q, secs, pauses) {
    var t = ' ' + String(text || '').trim() + ' ';
    var words = (t.match(/\S+/g) || []).length;
    var profile = profileFor(q);
    if (words < 2) {
      return { limited: true, words: words, secs: secs || 0, wpm: null, fillers: 0, digits: 0, rawDigits: 0,
        iCount: 0, weCount: 0, star: { s: false, t: false, a: false, r: false }, starN: 0,
        leadRatio: 1, uniq: 0, pauses: pauses || 0, content: 0, structure: 0, comm: 0, trigger: null,
        profile: profile, level: 1, checks: [] };
    }
    var lower = t.toLowerCase();
    var fillers = 0;
    FILLERS.forEach(function (f) {
      var i = 0;
      while ((i = lower.indexOf(f, i)) !== -1) { fillers++; i += f.length; }
    });
    var rawDigits = (t.match(/\d+[%\d.,]*/g) || []).length;
    var digits = measuredNumbers(t);
    var iCount = countMatches(t, /\b(i|saya|aku)\b/);
    var weCount = countMatches(t, /\b(we|our|kami|kita)\b/);
    var star = { s: SITU_RE.test(t), t: TASK_RE.test(t), a: ACTION_RE.test(t), r: RESULT_RE.test(t) || digits > 0 };
    var starN = (star.s ? 1 : 0) + (star.t ? 1 : 0) + (star.a ? 1 : 0) + (star.r ? 1 : 0);
    var am = t.match(ACTION_RE);
    var leadRatio = 1;
    if (am) {
      var before = t.slice(0, t.indexOf(am[0]));
      leadRatio = words ? ((before.match(/\S+/g) || []).length / words) : 1;
    }
    var toks = lower.match(/[a-zà-ÿ]{3,}/g) || [];
    var uniq = toks.length ? Math.round([...new Set(toks)].length / toks.length * 100) : 0;
    var wpm = secs > 3 ? Math.round(words / (secs / 60)) : null;
    var wantsStar = (q.sig || []).indexOf('star') !== -1;
    var wantsMetric = (q.sig || []).indexOf('metric') !== -1;

    var assess = assessProfile(profile, t, words, { star: star, metrics: digits, rawDigits: rawDigits, iCount: iCount, weCount: weCount });
    var brief = profile === 'eligibility' || profile === 'closing' || profile === 'rapport';
    var minWords = brief ? (profile === 'rapport' ? 2 : 4) : 25;
    var content, structure;
    if (profile === 'behavioural') {
      content = 50;
      content += Math.min(digits, 3) * 8;
      content += words >= 60 ? 10 : words >= 30 ? 4 : -14;
      if (wantsMetric && !digits) content -= 12;
      structure = 45;
      structure += starN * 9;
      if (wantsStar && starN < 3) structure -= 10;
      if (leadRatio < 0.35) structure += 12; else if (leadRatio > 0.6) structure -= 10;
      if (words > 260) structure -= 12;
    } else {
      /* no STAR arc expected: the profile’s own checks carry the score */
      var passed = assess.checks.filter(function (c) { return c.ok; }).length;
      content = 40 + assess.level * 11 + passed * 3 + Math.min(profile === 'case' ? rawDigits : digits, 2) * 4;
      if (words < minWords) content -= 14;
      structure = 36 + assess.level * 13 + passed * 2;
      if (words > (brief ? 150 : 260)) structure -= 12;
    }
    var comm = 62;
    comm -= Math.min(fillers * 4, 24);
    if (words > 0 && weCount > iCount * 2 && wantsStar) comm -= 6;
    if (wpm !== null) { if (wpm > 185) comm -= 8; else if (wpm < 80 && words > 25) comm -= 4; }
    if (brief ? (words >= 6 && words <= 120) : (words >= 25 && words <= 220)) comm += 8;
    if (uniq >= 60 && words >= 50) comm += 4;
    if (pauses && pauses > 3) comm -= Math.min((pauses - 3) * 2, 8);
    var clamp = function (v) { return Math.max(5, Math.min(98, Math.round(v))); };

    var trigger = null;
    if (words < minWords) trigger = 'too_short';
    else if (profile !== 'behavioural') {
      if (assess.level <= 1) trigger = 'generic';
      else if (words > (brief ? 150 : 300)) trigger = 'rambling';
      else if (assess.level >= 3) trigger = 'good_depth';
    }
    else if (digits === 0 && !SITU_RE.test(t)) trigger = 'generic';
    else if (wantsStar && weCount > iCount && weCount >= 3) trigger = 'we_not_i';
    else if (wantsMetric && digits === 0) trigger = 'no_metric';
    else if (wantsStar && !star.r) trigger = 'no_result';
    else if (words > 300) trigger = 'rambling';
    else if (words >= 60 && starN >= 3) trigger = 'good_depth';

    return {
      limited: false, words: words, secs: secs || 0, wpm: wpm, fillers: fillers, digits: digits, rawDigits: rawDigits,
      iCount: iCount, weCount: weCount, star: star, starN: starN, leadRatio: leadRatio,
      uniq: uniq, pauses: pauses || 0,
      content: clamp(content), structure: clamp(structure), comm: clamp(comm),
      trigger: trigger, profile: profile, level: assess.level, checks: assess.checks
    };
  }

  function feedbackFor(a, q) {
    if (a.limited) {
      return {
        strengths: [T('You completed the rep — showing up to the question is the first unit of practice.', 'Kamu menuntaskan repetisinya — menghadapi pertanyaan adalah satuan latihan pertama.')],
        weaknesses: [T('No transcript reached the analyser, so this feedback is limited to timing. Speak with the microphone on, or type your key points, to unlock the full debrief.', 'Tidak ada transkrip yang mencapai penganalisis, jadi umpan balik ini terbatas pada waktu. Bicaralah dengan mikrofon aktif, atau ketik poin utamamu, untuk membuka debrief penuh.')],
        changes: [T('Replay your recording and self-review: did the answer land on a result inside two minutes?', 'Putar ulang rekamanmu dan tinjau sendiri: apakah jawaban mendarat pada hasil dalam dua menit?')]
      };
    }
    var s = [], w = [], c = [];
    if (a.profile && a.profile !== 'behavioural' && a.checks && a.checks.length) {
      /* profile feedback: what passed, the first gap, and its fix — no STAR advice on a non-story question */
      a.checks.forEach(function (k) { if (k.ok) s.push(k.good); });
      var gaps = a.checks.filter(function (k) { return !k.ok; });
      gaps.forEach(function (k) { w.push(k.gap); c.push(k.fix); });
      if (a.fillers >= 4) { w.push(T(a.fillers + ' filler words made it into the transcript — they read as hesitation.', a.fillers + ' kata pengisi masuk ke transkrip — terbaca sebagai keraguan.')); c.push(T('Replace fillers with silence: a short pause reads as thought, "um" reads as doubt.', 'Ganti kata pengisi dengan hening: jeda singkat terbaca sebagai berpikir, "emm" terbaca sebagai ragu.')); }
      if (!s.length) s.push(T('You engaged the actual question rather than a rehearsed script — keep that instinct.', 'Kamu menjawab pertanyaan yang sebenarnya, bukan naskah hafalan — pertahankan insting itu.'));
      if (!w.length) w.push(T('Main risk now is variance: could you deliver this same answer under pressure? Re-record it once more.', 'Risiko utamamu kini adalah konsistensi: bisakah jawaban yang sama keluar di bawah tekanan? Rekam ulang sekali lagi.'));
      if (!c.length) c.push(T('Keep it this length and say it once more aloud, from memory of the points, not the words.', 'Pertahankan panjang ini dan ucapkan sekali lagi, dari ingatan poinnya, bukan kata-katanya.'));
      return { strengths: s.slice(0, 2), weaknesses: w.slice(0, 2), changes: c.slice(0, 2) };
    }
    if (a.starN >= 3) s.push(T('Your answer carried a real arc — situation, action and outcome were all visible.', 'Jawabanmu punya alur nyata — situasi, tindakan, dan hasil semuanya terlihat.'));
    if (a.digits > 0) s.push(T('You quantified the outcome (' + a.digits + ' number' + (a.digits > 1 ? 's' : '') + ') — that is what interviewers can retell later.', 'Kamu memberi angka pada hasil (' + a.digits + ' angka) — itulah yang bisa diceritakan ulang pewawancara.'));
    if (a.fillers <= 1 && a.words >= 40) s.push(T('Delivery was clean — almost no filler words in the transcript.', 'Penyampaian bersih — nyaris tanpa kata pengisi dalam transkrip.'));
    if (a.uniq >= 65 && a.words >= 60) s.push(T('Vocabulary stayed varied (' + a.uniq + '% unique words) — no crutch phrases carrying the answer.', 'Kosakata tetap beragam (' + a.uniq + '% kata unik) — tak ada frasa tumpuan yang memikul jawaban.'));
    if (a.iCount > a.weCount && (q.sig || []).indexOf('star') !== -1) s.push(T('You owned the story in first person; your specific contribution was clear.', 'Kamu memiliki kisahnya sebagai orang pertama; kontribusi spesifikmu jelas.'));
    if (!s.length) s.push(T('You engaged the actual question rather than a rehearsed script — keep that instinct.', 'Kamu menjawab pertanyaan yang sebenarnya, bukan naskah hafalan — pertahankan insting itu.'));

    if (a.words < 25) w.push(T('At ' + a.words + ' words, the answer ended before it produced evidence.', 'Dengan ' + a.words + ' kata, jawaban selesai sebelum menghadirkan bukti.'));
    if (a.words > 260) w.push(T('At ' + a.words + ' words this ran long — the key point risks being lost.', 'Dengan ' + a.words + ' kata jawaban ini terlalu panjang — poin utamanya berisiko hilang.'));
    if ((q.sig || []).indexOf('star') !== -1 && !a.star.r) w.push(T('The story never landed on a result — the interviewer is left to guess how it ended.', 'Kisahnya tidak pernah mendarat pada hasil — pewawancara dibiarkan menebak akhirnya.'));
    if ((q.sig || []).indexOf('metric') !== -1 && a.digits === 0) w.push(T('No numbers anywhere — impact stated without measurement reads as opinion.', 'Tidak ada angka sama sekali — dampak tanpa ukuran terbaca sebagai opini.'));
    if (a.weCount > a.iCount && a.weCount >= 3) w.push(T('"We" outnumbered "I" — your personal contribution stayed hidden inside the team.', '"Kami" melebihi "saya" — kontribusi pribadimu tersembunyi di dalam tim.'));
    if (a.fillers >= 4) w.push(T(a.fillers + ' filler words made it into the transcript — they read as hesitation.', a.fillers + ' kata pengisi masuk ke transkrip — terbaca sebagai keraguan.'));
    if (a.pauses > 3) w.push(T('About ' + a.pauses + ' long pauses were detected (approximate) — pauses read as thought when placed, and as drift when frequent.', 'Sekitar ' + a.pauses + ' jeda panjang terdeteksi (perkiraan) — jeda terbaca sebagai berpikir bila ditempatkan, dan sebagai kehilangan arah bila terlalu sering.'));
    if (a.leadRatio > 0.6 && a.star.a) w.push(T('Your first action appeared very late — most of the answer was setup.', 'Tindakan pertamamu muncul sangat terlambat — sebagian besar jawaban hanyalah latar.'));
    if (!w.length) w.push(T('Main risk now is variance: could you deliver this same answer under pressure? Re-record it once more.', 'Risiko utamamu kini adalah konsistensi: bisakah jawaban yang sama keluar di bawah tekanan? Rekam ulang sekali lagi.'));

    if (a.words < 25) c.push(T('Aim for 60–150 words: one line of context, three of action, one of result.', 'Targetkan 60–150 kata: satu kalimat konteks, tiga tindakan, satu hasil.'));
    else if (a.leadRatio > 0.5) c.push(T('Lead with the situation in ONE sentence, then spend the answer on what you did.', 'Buka dengan situasi dalam SATU kalimat, lalu habiskan jawaban pada apa yang kamu lakukan.'));
    if ((q.sig || []).indexOf('metric') !== -1 && a.digits === 0) c.push(T('Attach one number to the outcome — a percentage, a timeframe, a count.', 'Sematkan satu angka pada hasil — persentase, rentang waktu, jumlah.'));
    if (a.fillers >= 4) c.push(T('Replace fillers with silence: a short pause reads as thought, "um" reads as doubt.', 'Ganti kata pengisi dengan hening: jeda singkat terbaca sebagai berpikir, "emm" terbaca sebagai ragu.'));
    if (!c.length) c.push(T('Tighten the close: end on the result plus one learning, then stop talking.', 'Pertajam penutup: akhiri dengan hasil plus satu pembelajaran, lalu berhenti bicara.'));
    return { strengths: s.slice(0, 2), weaknesses: w.slice(0, 2), changes: c.slice(0, 2) };
  }

  /* ─── CV + JD intelligence ─── */
  var CLAIM_RE = /\b(led|managed|improved|achieved|expert|increased|reduced|launched|built|delivered|award|memimpin|mengelola|meningkatkan|mencapai|ahli|menurunkan|meluncurkan|membangun|penghargaan)\b/i;
  function mineCv(text) {
    var lines = String(text || '').split(/\n+/).map(function (l) { return l.trim(); }).filter(Boolean);
    var claims = [];
    lines.forEach(function (l) {
      if (l.length > 25 && l.length < 220 && CLAIM_RE.test(l) && claims.length < 6) claims.push(l);
    });
    return { claims: claims, chars: text.length };
  }
  function mineJd(text) {
    var t = String(text || '').toLowerCase();
    var hits = [];
    (G.directions || []).forEach(function (d) {
      (d.core_skills || []).forEach(function (s) {
        var name = (s.en || s[lang()] || String(s)).toLowerCase();
        if (name.length > 3 && t.indexOf(name.split(' ')[0]) !== -1 && hits.indexOf(name) === -1) hits.push(name);
      });
    });
    var reqs = String(text || '').split(/\n+/).filter(function (l) { return /^[\s•*-]*(require|must|minimal|wajib|memiliki|mampu)/i.test(l.trim()) || /\d\+?\s*(years|tahun)/i.test(l); }).slice(0, 6);
    return { skills: hits.slice(0, 8), reqs: reqs };
  }

  /* ─── session assembly ─── */
  function pickQuestions(cfg) {
    var pool = allQuestions();
    var lvl = cfg.level || 'any';
    var picks = [];
    function take(pred, n) {
      var c = pool.filter(function (q) {
        if (picks.indexOf(q) !== -1) return false;
        if (q.lvl !== 'any' && lvl !== 'any' && q.lvl !== lvl) return false;
        if (cfg.difficulty && q.d > cfg.difficulty + 1) return false;
        return pred(q);
      });
      c.sort(function () { return Math.random() - 0.5; });
      picks = picks.concat(c.slice(0, n));
    }
    var n = cfg.count || 6;
    var stage = cfg.stage || 'any';
    take(function (q) { return q.id === 'hr01'; }, 1);
    if (stage !== 'any') take(function (q) { return q.stage === stage; }, 2);
    var focus = cfg.focus || [];
    if (focus.indexOf('structure') !== -1) take(function (q) { return (q.sig || []).indexOf('star') !== -1; }, 2);
    if (focus.indexOf('content') !== -1) take(function (q) { return q.cat === 'role' && (!cfg.roleId || q.dirId === cfg.roleId); }, 2);
    if (focus.indexOf('difficult') !== -1 || cfg.caseIds && cfg.caseIds.length) {
      take(function (q) { return q.cat === 'difficult' && (!cfg.caseIds || !cfg.caseIds.length || cfg.caseIds.indexOf(q.caseId) !== -1); }, 2);
    }
    if (cfg.roleId) take(function (q) { return q.dirId === cfg.roleId; }, 2);
    if (cfg.industryId) take(function (q) { return q.indId === cfg.industryId; }, 1);
    take(function (q) { return q.cat === 'behavioral' || q.cat === 'situational'; }, Math.max(0, n - picks.length - 1));
    take(function (q) { return q.cat === 'closing'; }, 1);
    take(function (q) { return true; }, Math.max(0, n - picks.length));
    return picks.slice(0, n);
  }

  /* ─── speech + avatar animation ─── */
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  function speak(text, done) {
    if (state.vi && state.vi.say) { state.vi.say(text).then(function () { if (done) done(); }); return; }
    var tg = root && (root.querySelector('.rsim-stage') || root.querySelector('.rsim-avatar'));
    if (!state.tts || !window.speechSynthesis) { if (done) done(); return; }
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      var per = persona();
      u.lang = lang() === 'id' ? 'id-ID' : 'en-US';
      u.rate = per.rate; u.pitch = per.pitch;
      state.lastSpoken = text;
      u.onboundary = function () { state.lastBoundary = Date.now(); };
      u.onstart = function () { if (tg) { tg.classList.add('talking'); tg.classList.remove('listening'); } };
      u.onend = u.onerror = function () { if (tg) tg.classList.remove('talking'); if (done) done(); };
      window.speechSynthesis.speak(u);
    } catch (e) { if (done) done(); }
  }

  /* ─── DOM helpers ─── */
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  /* ─── styles ─── */
  var css = '' +
  /* shell + Home background system */
  '#ropeSim{position:fixed;inset:0;z-index:1300;display:none;background:var(--bg-base,#050A12);overflow:hidden}' +
  '#ropeSim.open{display:flex;flex-direction:column}' +
  '#ropeSim .rsim-bg{position:absolute;inset:0;z-index:0;pointer-events:none;' +
    'background:url("../../assets/bg/rope.jpg") center 30%/cover no-repeat;opacity:.2;' +
    'animation:rsimPan 60s ease-in-out infinite alternate}' +
  '@keyframes rsimPan{from{transform:scale(1.06) translateY(-1.2%)}to{transform:scale(1.06) translateY(1.2%)}}' +
  '@media(prefers-reduced-motion:reduce){#ropeSim .rsim-bg{animation:none}}' +
  '#ropeSim .rsim-veil{position:absolute;inset:0;z-index:0;pointer-events:none;background:' +
    'radial-gradient(70% 60% at 50% 0%,rgba(201,168,76,.07),transparent 60%),' +
    'linear-gradient(180deg,rgba(5,10,18,.6) 0%,rgba(5,10,18,.87) 45%,rgba(5,10,18,.95) 100%)}' +
  ':root[data-theme="light"] #ropeSim .rsim-bg{opacity:.12}' +
  ':root[data-theme="light"] #ropeSim .rsim-veil{background:' +
    'radial-gradient(70% 60% at 50% 0%,rgba(139,105,20,.05),transparent 60%),' +
    'linear-gradient(180deg,rgba(238,241,246,.85) 0%,rgba(238,241,246,.94) 45%,rgba(238,241,246,.97) 100%)}' +
  '.rsim-top,.rsim-body{position:relative;z-index:1}' +
  '.rsim-top{display:flex;align-items:center;gap:14px;padding:11px 22px;border-bottom:1px solid var(--gold-border);' +
    'background:var(--glass-bg);backdrop-filter:var(--glass-blur);flex-wrap:wrap}' +
  '.rsim-top b.rsim-brand{font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);white-space:nowrap}' +
  '.rsim-close{margin-left:auto;width:36px;height:36px;border-radius:999px;border:1px solid var(--gold-border);background:none;color:var(--text);cursor:pointer;font-size:15px;flex:none}' +
  '.rsim-close:hover{border-color:var(--gold)}' +
  /* stage stepper */
  '.rsim-steps{display:flex;gap:4px;align-items:center;flex-wrap:wrap}' +
  '.rsim-step{display:inline-flex;align-items:center;gap:7px;border:1px solid transparent;border-radius:999px;' +
    'padding:6px 13px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;' +
    'color:var(--text-faint);background:none;cursor:default;font-family:inherit;transition:color .25s,border-color .25s}' +
  '.rsim-step i{font-style:normal;width:17px;height:17px;border-radius:50%;border:1.5px solid currentColor;' +
    'display:inline-flex;align-items:center;justify-content:center;font-size:9.5px}' +
  '.rsim-step.done{color:var(--text-muted);cursor:pointer}' +
  '.rsim-step.done i{background:rgba(74,222,128,.15);border-color:rgba(74,222,128,.6);color:#4ADE80}' +
  '.rsim-step.done:hover{color:var(--gold)}' +
  '.rsim-step.now{color:var(--gold-bright);border-color:var(--gold-border-hover);background:rgba(201,168,76,.1)}' +
  '.rsim-sep{color:var(--text-faint);font-size:11px}' +
  '.rsim-body{flex:1;overflow-y:auto;padding:26px 22px 60px}' +
  '.rsim-in{max-width:920px;margin:0 auto;animation:rsimEnter .4s cubic-bezier(.22,1,.36,1)}' +
  '@keyframes rsimEnter{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}' +
  '@media(prefers-reduced-motion:reduce){.rsim-in{animation:none}}' +
  '.rsim-card{border:1px solid var(--gold-border);border-radius:16px;background:var(--glass-bg);backdrop-filter:var(--glass-blur);padding:22px 24px;margin-bottom:14px}' +
  '.rsim-kick{font-size:11px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:6px}' +
  '.rsim h2{font-size:1.5rem;margin:0 0 8px;color:var(--text)}' +
  '.rsim-sub{color:var(--text-muted);font-size:14px;max-width:64ch;line-height:1.65}' +
  '.rsim-loop{display:flex;gap:8px;flex-wrap:wrap;margin:16px 0 4px}' +
  '.rsim-loop span{font-size:11.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);border:1px solid var(--gold-border);border-radius:999px;padding:7px 13px}' +
  '.rsim-loop i{color:var(--text-faint);font-style:normal;align-self:center}' +
  '.rsim-stats{display:flex;gap:22px;flex-wrap:wrap;margin-top:14px}' +
  '.rsim-stats b{display:block;font-size:1.35rem;color:var(--gold-bright)}' +
  '.rsim-stats span{font-size:11.5px;color:var(--text-muted);letter-spacing:.06em;text-transform:uppercase}' +
  '.rsim-btn{display:inline-flex;align-items:center;gap:9px;padding:12px 22px;border-radius:999px;border:0;cursor:pointer;' +
    'font-family:inherit;font-weight:800;font-size:13.5px;background:linear-gradient(135deg,#8B6914,#C9A84C,#F0D878);color:#10131B;transition:transform .2s,box-shadow .2s}' +
  '.rsim-btn:hover{transform:translateY(-1px);box-shadow:0 10px 30px rgba(201,168,76,.25)}' +
  '.rsim-btn.ghost{background:none;border:1px solid var(--gold-border);color:var(--gold);box-shadow:none}' +
  '.rsim-btn.ghost:hover{border-color:var(--gold)}' +
  '.rsim-btn.rec{background:none;border:1.5px solid #E5484D;color:#FF8589}' +
  '.rsim-btn.rec.on{background:#E5484D;color:#fff}' +
  '.rsim-btn:disabled{opacity:.45;cursor:not-allowed;transform:none;box-shadow:none}' +
  '.rsim-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px;align-items:center}' +
  '.rsim-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px 18px}' +
  '@media(max-width:680px){.rsim-grid{grid-template-columns:1fr}}' +
  '.rsim-field label{display:block;font-size:11.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin:0 0 6px}' +
  '.rsim-field select,.rsim-field input[type=text],.rsim-field textarea{width:100%;box-sizing:border-box;background:var(--bg-mid);border:1px solid var(--gold-border);' +
    'border-radius:11px;color:var(--text);font-family:inherit;font-size:14px;padding:11px 12px}' +
  '.rsim-field textarea{min-height:96px;resize:vertical}' +
  '.rsim-field select:focus,.rsim-field textarea:focus,.rsim-field input:focus{outline:none;border-color:var(--gold)}' +
  '.rsim-chips{display:flex;gap:8px;flex-wrap:wrap}' +
  '.rsim-chip{border:1px solid var(--gold-border);background:none;color:var(--text-sub);border-radius:999px;padding:8px 14px;font-size:12.5px;font-weight:700;cursor:pointer;font-family:inherit;transition:border-color .2s}' +
  '.rsim-chip.on{background:rgba(201,168,76,.16);border-color:var(--gold);color:var(--gold-bright)}' +
  '.rsim-check{display:flex;gap:10px;align-items:flex-start;font-size:13.5px;color:var(--text-sub);padding:7px 0}' +
  '.rsim-check i{font-style:normal;flex:none;width:20px;height:20px;border-radius:50%;border:1.5px solid var(--gold-border);display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--gold)}' +
  '.rsim-check.done i{background:rgba(74,222,128,.15);border-color:rgba(74,222,128,.6);color:#4ADE80}' +
  /* personas */
  '.rsim-personas{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:10px}' +
  '.rsim-pcard{border:1px solid var(--gold-border);border-radius:14px;padding:14px;background:var(--bg-mid);cursor:pointer;' +
    'display:flex;gap:12px;align-items:center;font-family:inherit;text-align:left;color:var(--text);transition:border-color .2s,transform .2s}' +
  '.rsim-pcard:hover{transform:translateY(-1px)}' +
  '.rsim-pcard.on{border-color:var(--gold);background:rgba(201,168,76,.1)}' +
  '.rsim-pcard b{display:block;font-size:13px}' +
  '.rsim-pcard span{display:block;font-size:11px;color:var(--text-muted);line-height:1.4;margin-top:2px}' +
  /* avatar */
  '.rsim-avatar{flex:none;width:64px;height:64px;border-radius:50%;position:relative;overflow:hidden;border:1.5px solid var(--gold-border)}' +
  /* video-call stage */
  '.rsim-stage{position:relative;border-radius:16px;overflow:hidden;border:1px solid var(--gold-border);' +
    'aspect-ratio:16/9;max-height:min(58vh,560px);width:100%;min-height:190px;background:#0C1626;margin-bottom:14px}' +
  '.rsim-stage .st-join{position:absolute;inset:0;z-index:6;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:rgba(4,8,16,.74);backdrop-filter:blur(10px);color:#F5EFE6;text-align:center;transition:opacity .45s}' +
  '.rsim-stage .st-join.out{opacity:0;pointer-events:none}' +
  '.rsim-stage .st-join b{font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:#F0D878}' +
  '.rsim-stage .st-join>span:last-child{font-size:13px;color:rgba(245,239,230,.75)}' +
  '.rsim-stage .sj-ring{width:54px;height:54px;border-radius:50%;border:2px solid rgba(240,216,120,.35);position:relative;margin-bottom:6px}' +
  '.rsim-stage .sj-ring i{position:absolute;inset:-2px;border-radius:50%;border:2px solid transparent;border-top-color:#F0D878;animation:rsimSpin 1s linear infinite}' +
  '@keyframes rsimSpin{to{transform:rotate(360deg)}}' +
  '.rsim-stage .st-live{position:absolute;right:12px;top:40px;z-index:4;display:inline-flex;align-items:center;gap:7px;font-size:10px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:rgba(245,239,230,.85);background:rgba(5,10,18,.5);backdrop-filter:blur(8px);border:1px solid rgba(245,239,230,.2);border-radius:999px;padding:5px 10px;font-variant-numeric:tabular-nums}' +
  '.rsim-stage .st-live i{width:7px;height:7px;border-radius:50%;background:#E5484D;animation:rsimPulse 1.4s infinite}' +
  '.rsim-stage.joining .st-name,.rsim-stage.joining .st-live{opacity:0}' +
  '.rsim-stage .rsim-avatar{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:0}' +
  '.rsim-stage.listening .st-name .dot{background:#F0D878}' +
  '.rsim-answer{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:14px;align-items:start}' +
  '@media(max-width:860px){.rsim-answer{grid-template-columns:1fr}}' +
  '.rsim-guide{border:1px solid var(--gold-border);border-radius:14px;background:var(--bg-mid);padding:12px 14px;font-size:12px;position:sticky;top:8px}' +
  '.rsim-guide .rg-head{display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:10px}' +
  '.rsim-guide .rg-head b{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--gold)}' +
  '.rsim-guide .rg-ai{display:inline-block;font-size:9px;letter-spacing:.08em;color:var(--text-faint);border:1px solid var(--gold-border);border-radius:999px;padding:2px 7px;margin-left:6px;text-transform:none}' +
  '.rsim-guide .rg-modes{display:inline-flex;border:1px solid var(--gold-border);border-radius:999px;overflow:hidden}' +
  '.rsim-guide .rg-modes button{border:0;background:none;color:var(--text-muted);font:inherit;font-size:10.5px;font-weight:800;padding:5px 10px;cursor:pointer}' +
  '.rsim-guide .rg-modes button.on{background:var(--gold);color:#0B1524}' +
  '.rsim-guide .rg-lights{display:grid;grid-template-columns:repeat(5,1fr);gap:5px;margin-bottom:10px}' +
  '.rsim-guide .rg-l{border:1px solid var(--gold-border);border-radius:9px;padding:6px 4px;text-align:center;color:var(--text-faint);transition:all .25s}' +
  '.rsim-guide .rg-l b{display:block;font-size:14px}.rsim-guide .rg-l span{display:block;font-size:8.5px;letter-spacing:.06em;text-transform:uppercase;margin-top:2px}' +
  '.rsim-guide .rg-l.on{border-color:#4ADE80;color:#4ADE80;background:rgba(74,222,128,.08);box-shadow:0 0 14px rgba(74,222,128,.15)}' +
  '.rsim-guide .rg-kick{font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--text-faint);font-weight:800;margin:0 0 6px}' +
  '.rsim-guide .rg-pt{display:flex;gap:8px;align-items:flex-start;padding:4px 0;color:var(--text-sub);line-height:1.45}' +
  '.rsim-guide .rg-pt i{flex:none;width:14px;height:14px;border-radius:50%;border:1.5px solid var(--gold-border);margin-top:1px;transition:all .25s}' +
  '.rsim-guide .rg-pt.on{color:var(--text)}.rsim-guide .rg-pt.on i{background:#4ADE80;border-color:#4ADE80;box-shadow:0 0 8px rgba(74,222,128,.4)}' +
  '.rsim-guide .rg-meters{margin:10px 0 6px;display:grid;gap:5px}' +
  '.rsim-guide .rg-m{display:grid;grid-template-columns:96px 1fr auto;gap:8px;align-items:center;color:var(--text-muted);font-size:10.5px}' +
  '.rsim-guide .rg-bar{height:5px;border-radius:3px;background:rgba(255,255,255,.08);overflow:hidden}.rsim-guide .rg-bar i{display:block;height:100%;width:0;background:var(--gold);border-radius:3px;transition:width .35s}' +
  '.rsim-guide .rg-m.warn .rg-bar i{background:#FF9A7B}.rsim-guide .rg-m em{font-style:normal;color:var(--text-faint);white-space:nowrap}' +
  '.rsim-guide .rg-nudge{min-height:0;margin-top:8px;padding:0 10px;border-radius:9px;border:1px solid transparent;font-size:12px;line-height:1.45;color:#F0D878;max-height:0;overflow:hidden;transition:all .3s}' +
  '.rsim-guide .rg-nudge.on{padding:8px 10px;max-height:80px;border-color:rgba(240,216,120,.35);background:rgba(240,216,120,.07)}' +
  '.rsim-guide .rg-note{font-size:10.5px;color:var(--text-faint);margin:10px 0 0;line-height:1.45}' +
  '.rsim-guide.mode-light .rg-points,.rsim-guide.mode-light .rg-meters{display:none}' +
  '.rsim-guide.no-star .rg-lights{display:none}.rsim-guide.no-star.mode-light .rg-points{display:block}' +
  '.rsim-guide.mode-off .rg-lights,.rsim-guide.mode-off .rg-points,.rsim-guide.mode-off .rg-meters,.rsim-guide.mode-off .rg-nudge{display:none}' +
  ':root[data-theme="light"] .rsim-guide{background:#FFFFFF}' +
  '.rsim-stage img.stage-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;' +
    'animation:rsimKen 26s ease-in-out infinite alternate}' +
  '@keyframes rsimKen{from{transform:scale(1.02)}to{transform:scale(1.09)}}' +
  '@media(prefers-reduced-motion:reduce){.rsim-stage img.stage-photo{animation:none}}' +
  '.rsim-stage .stage-grade{position:absolute;inset:0;pointer-events:none;background:' +
    'linear-gradient(180deg,rgba(5,10,18,.22),transparent 32%,transparent 62%,rgba(4,8,16,.5)),' +
    'radial-gradient(120% 90% at 50% 108%,rgba(201,168,76,.12),transparent 55%)}' +
  '.rsim-stage .st-eq{display:inline-flex;gap:2.5px;align-items:flex-end;height:11px;margin-left:9px;opacity:0;transition:opacity .25s}' +
  '.rsim-stage.talking .st-eq{opacity:1}' +
  '.rsim-stage .st-eq i{width:2.5px;background:var(--gold-bright,#F0D878);border-radius:2px;animation:rsimEq .5s ease-in-out infinite alternate}' +
  '.rsim-stage .st-eq i:nth-child(1){height:5px}.rsim-stage .st-eq i:nth-child(2){height:11px;animation-delay:.15s}.rsim-stage .st-eq i:nth-child(3){height:7px;animation-delay:.3s}' +
  '.rsim-stage.talking .st-name .dot{animation:rsimPulse 1s infinite}' +
  '.rsim-stage .st-name{position:absolute;left:14px;top:12px;display:flex;gap:10px;align-items:center;z-index:3;' +
    'background:rgba(5,10,18,.62);backdrop-filter:blur(8px);border:1px solid var(--gold-border);border-radius:999px;padding:6px 14px 6px 8px}' +
  '.rsim-stage .st-name .dot{width:8px;height:8px;border-radius:50%;background:#4ADE80;flex:none}' +
  '.rsim-stage .st-name b{font-size:12px;color:#F5EFE6}' +
  '.rsim-stage .st-name span{font-size:10.5px;color:rgba(245,239,230,.6)}' +
  /* persistent disclosure: the interviewer is a simulation (animated portrait, synthetic voice), never a real person */
  '.rsim-stage .st-sim{position:absolute;right:12px;top:12px;z-index:4;font-size:9.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;' +
    'color:rgba(245,239,230,.88);background:rgba(5,10,18,.66);backdrop-filter:blur(8px);border:1px solid rgba(245,239,230,.28);border-radius:999px;padding:5px 10px;pointer-events:none}' +
  '.rsim-stage .st-cap{position:absolute;left:0;right:0;bottom:0;z-index:3;padding:26px 16px 12px;' +
    'background:linear-gradient(180deg,transparent,rgba(4,8,16,.88) 45%);color:#F5EFE6;font-size:14.5px;font-weight:600;line-height:1.5;' +
    'opacity:0;transform:translateY(6px);transition:opacity .4s,transform .4s}' +
  '.rsim-stage .st-cap.on{opacity:1;transform:none}' +
  '.rsim-stage .st-pip{position:absolute;right:12px;bottom:12px;width:150px;aspect-ratio:4/3;z-index:4;border-radius:11px;overflow:hidden;' +
    'border:1.5px solid rgba(245,239,230,.4);background:#060B14;box-shadow:0 10px 30px rgba(0,0,0,.5)}' +
  '.rsim-stage .st-pip video{width:100%;height:100%;object-fit:cover;transform:scaleX(-1);display:block}' +
  '.rsim-stage .st-pip .pip-lbl{position:absolute;left:6px;bottom:5px;font-size:9px;font-weight:800;letter-spacing:.08em;color:rgba(245,239,230,.8);text-transform:uppercase}' +
  '.rsim-stage .st-next{position:absolute;inset:0;z-index:5;display:none;align-items:center;justify-content:center;' +
    'background:rgba(4,8,16,.72);backdrop-filter:blur(4px);color:var(--gold-bright);font-size:13px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}' +
  '.rsim-stage.transitioning .st-next{display:flex;animation:rsimEnter .3s ease}' +
  '.rsim-avatar .av-body{animation:rsimSway 6.5s ease-in-out infinite}' +
  '@keyframes rsimSway{0%,100%{transform:rotate(0deg)}50%{transform:rotate(.8deg)}}' +
  '.rsim-avatar .av-head{animation:rsimNod 9s ease-in-out infinite}' +
  '@keyframes rsimNod{0%,100%{transform:rotate(0deg) translateY(0)}30%{transform:rotate(-1.2deg) translateY(.4px)}70%{transform:rotate(1deg)}}' +
  '@media(prefers-reduced-motion:reduce){.rsim-avatar .av-body,.rsim-avatar .av-head{animation:none}}' +
  '@media(max-width:640px){.rsim-stage .st-live{top:34px;right:8px;padding:4px 8px}.rsim-stage .st-sim{right:8px;top:8px}.rsim-stage .st-pip{width:96px}.rsim-stage .st-cap{font-size:13px;padding:22px 12px 10px}.rsim-stage .st-sim{font-size:8.5px;padding:4px 8px}.rsim-stage .st-name{padding:5px 10px 5px 7px}.rsim-stage .st-name>span>span{display:none}}' +
  /* ─── the interview room (v5): phase bar · interviewer tile with self-view PIP · feedback panel · call tools ─── */
  '.rsim-stage.rsim-room{aspect-ratio:auto;max-height:none;min-height:0;background:transparent;border:0;border-radius:0;overflow:visible}' +
  '.rsim-room .rm-phase{display:flex;gap:6px;margin:0 0 10px}' +
  '.rsim-room .rm-phase .ph{flex:1;display:flex;flex-direction:column;gap:5px;font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
  '.rsim-room .rm-phase .ph.q{flex:2.4}' +
  '.rsim-room .rm-phase .ph i{display:block;height:4px;border-radius:2px;background:rgba(128,128,128,.25)}' +
  '.rsim-room .rm-phase .ph.done{color:var(--text-muted)}.rsim-room .rm-phase .ph.done i{background:var(--gold)}' +
  '.rsim-room .rm-phase .ph.now{color:var(--gold-bright)}.rsim-room .rm-phase .ph.now i{background:linear-gradient(90deg,var(--gold-bright) var(--p,100%),rgba(201,168,76,.22) var(--p,100%));box-shadow:0 0 8px rgba(201,168,76,.35)}' +
  '.rsim-room .rm-grid{display:grid;grid-template-columns:minmax(0,1fr) 272px;gap:12px;align-items:stretch}' +
  '.rsim-room .rm-main{position:relative;border-radius:16px;overflow:hidden;border:1px solid var(--gold-border);background:#0C1626;aspect-ratio:16/9;width:100%;min-height:190px;box-shadow:0 18px 50px rgba(0,0,0,.35)}' +
  '.rsim-room .rm-main .rv-tile{position:absolute;inset:0;aspect-ratio:auto;height:100%;border-radius:0}' +
  '.rsim-room .rm-main img.rv-fallback{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 38%}' +
  '.rsim-room .st-name{z-index:4}.rsim-room .st-live{z-index:4}' +
  '.rsim-room .rm-main .st-pip{display:block}' +
  '.rsim-room .rm-main .rv-cc{padding-right:176px}' +
  '.rsim-room .st-pip:not(.cam) .pip-lbl,.rsim-room .st-pip:not(.cam) .recdot{display:none}' +
  '.rsim-room .st-pip .pip-off{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;color:rgba(245,239,230,.72);font-size:10px;font-weight:700;letter-spacing:.04em;background:#0B1424}' +
  '.rsim-room .st-pip .pip-off b{width:38px;height:38px;border-radius:50%;background:rgba(201,168,76,.16);border:1px solid rgba(201,168,76,.45);display:flex;align-items:center;justify-content:center;color:#F0D878;font-size:12px;margin-bottom:5px}' +
  '.rsim-room .st-pip.cam .pip-off{display:none}.rsim-room .st-pip:not(.cam) video{visibility:hidden}' +
  '.rsim-room .st-pip.mic .pip-off::after{content:"";width:6px;height:6px;border-radius:50%;background:#4ADE80;margin-top:4px;animation:rsimPulse 1.2s infinite}' +
  '.rsim-room .rm-side{display:flex;flex-direction:column;min-width:0}' +
  '.rsim-room .rm-fb{flex:1;border:1px solid var(--gold-border);border-radius:16px;background:var(--bg-mid);padding:14px 16px;font-size:12.5px;line-height:1.5;color:var(--text-sub);display:flex;flex-direction:column;gap:9px;min-height:0;overflow:auto}' +
  '.rsim-room .rm-fb .fb-h b{display:block;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold)}' +
  '.rsim-room .rm-fb .fb-h span{display:block;font-size:11px;color:var(--text-faint);margin-top:2px}' +
  '.rsim-room .rm-fb .fb-empty{margin:0;color:var(--text-muted);font-size:12px}' +
  '.rsim-room .rm-fb .fb-q{margin:0;padding:0 0 0 10px;border-left:2px solid var(--gold);font-family:var(--serif,Georgia,serif);font-style:italic;font-size:13px;color:var(--text)}' +
  '.rsim-room .rm-fb p{margin:0}.rsim-room .rm-fb p span{display:block;font-size:9.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;margin-bottom:2px}' +
  '.rsim-room .rm-fb .fb-s span{color:#4ADE80}.rsim-room .rm-fb .fb-y span{color:var(--gold-bright)}.rsim-room .rm-fb .fb-c span{color:#FF9A7B}' +
  '.rsim-room .rm-fb .fb-n{font-size:11px;color:var(--text-faint);margin-top:auto;padding-top:6px}' +
  '.rsim-room .rm-tools{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;align-items:center}' +
  '.rsim-room .rm-tools button{border:1px solid var(--gold-border);background:var(--bg-mid);color:var(--text-sub);border-radius:999px;padding:7px 12px;font:inherit;font-size:12px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:6px;transition:border-color .2s,color .2s}' +
  '.rsim-room .rm-tools button .rsx-ic{width:14px;height:14px}' +
  '.rsim-room .rm-tools button.on{border-color:var(--gold);color:var(--gold-bright);background:rgba(201,168,76,.12)}' +
  '.rsim-room .rm-tools button.warn{border-color:rgba(255,154,123,.6);color:#FF9A7B}' +
  '.rsim-room .rm-tools .rm-sp{flex:1}' +
  '.rsim-room .rm-tools .rm-note{font-size:11px;color:var(--text-faint)}' +
  '.rsim-card.rsim-ending .rsim-answer,.rsim-card.rsim-ending .rsim-row,.rsim-card.rsim-ending .rsim-fmt,.rsim-card.rsim-ending .rsim-qmeta,.rsim-card.rsim-ending .rsim-followup,.rsim-card.rsim-ending>.rsim-note{display:none}' +
  '.rsim-card.rsim-ending .rsim-q{color:var(--text-muted);font-weight:600;font-size:1rem}' +
  '@media(max-width:900px){.rsim-room .rm-grid{grid-template-columns:1fr}.rsim-room .rm-fb{min-height:0}}' +
  '@media(max-width:640px){.rsim-room .rm-main{aspect-ratio:4/3}.rsim-room .rm-phase .ph{font-size:8.5px;letter-spacing:.06em}.rsim-room .rm-tools button{padding:6px 10px;font-size:11px}' +
    '.rsim-room .rm-main .rv-cc{padding-right:112px;padding-bottom:10px}.rsim-room .rm-main .rv-mode{top:42px;left:8px;right:auto}.rsim-room .st-live{top:8px;right:8px}.rsim-room .st-name{top:8px;left:8px}}' +
  '.rsim-avatar svg{width:100%;height:100%;display:block}' +
  '.rsim-avatar .av-mouth{transform-origin:center;transition:transform .12s}' +
  '.rsim-avatar.talking .av-mouth,.rsim-stage.talking .rsim-avatar .av-mouth{animation:rsimTalk .34s ease-in-out infinite alternate}' +
  '@keyframes rsimTalk{from{transform:scaleY(.35)}to{transform:scaleY(1.25)}}' +
  '.rsim-avatar .av-eyes{animation:rsimBlink 4.6s infinite}' +
  '@keyframes rsimBlink{0%,94%,100%{transform:scaleY(1)}96%,98%{transform:scaleY(.1)}}' +
  '.rsim-avatar.big{width:120px;height:120px}' +
  '.rsim-interviewer{display:flex;gap:16px;align-items:center;padding:16px 18px;border:1px solid var(--gold-border);' +
    'border-radius:15px;background:linear-gradient(150deg,rgba(201,168,76,.07),var(--bg-mid));margin-bottom:14px}' +
  '.rsim-interviewer .ri-info b{display:block;font-size:14px;color:var(--text)}' +
  '.rsim-interviewer .ri-info span{display:block;font-size:11.5px;color:var(--text-muted);margin-top:2px}' +
  '.rsim-speaking{display:inline-flex;gap:3px;align-items:flex-end;height:12px;margin-left:8px;opacity:0;transition:opacity .2s}' +
  '.rsim-avatar.talking~.ri-info .rsim-speaking,.ri-info .rsim-speaking.on{opacity:1}' +
  '.rsim-speaking i{width:3px;background:var(--gold);border-radius:2px;animation:rsimEq .5s ease-in-out infinite alternate}' +
  '.rsim-speaking i:nth-child(1){height:5px}.rsim-speaking i:nth-child(2){height:11px;animation-delay:.15s}.rsim-speaking i:nth-child(3){height:7px;animation-delay:.3s}' +
  '@keyframes rsimEq{from{transform:scaleY(.4)}to{transform:scaleY(1)}}' +
  '.ri-replay{margin-left:auto;flex:none}' +
  /* question + answer surfaces */
  '.rsim-q{font-size:1.28rem;line-height:1.45;color:var(--text);font-weight:700;margin:10px 0 4px}' +
  '.rsim-qmeta{display:flex;gap:10px;flex-wrap:wrap;font-size:11.5px;color:var(--text-muted);letter-spacing:.05em}' +
  '.rsim-qmeta b{color:var(--gold)}' +
  '.rsim-followup{border-left:3px solid var(--gold);padding:10px 14px;margin-top:12px;background:rgba(201,168,76,.07);border-radius:0 10px 10px 0;font-size:14.5px;color:var(--text-sub)}' +
  '.rsim-fmt{display:flex;gap:8px;margin:16px 0 10px}' +
  '.rsim-fmt button{flex:1;border:1px solid var(--gold-border);background:var(--bg-mid);color:var(--text-sub);border-radius:11px;' +
    'padding:10px 8px;font-family:inherit;font-size:12.5px;font-weight:700;cursor:pointer;display:flex;gap:8px;align-items:center;justify-content:center;transition:border-color .2s}' +
  '.rsim-fmt button.on{border-color:var(--gold);background:rgba(201,168,76,.12);color:var(--gold-bright)}' +
  '.rsim-fmt button:disabled{opacity:.4;cursor:not-allowed}' +
  '.rsim-media{display:flex;gap:14px;align-items:flex-start;flex-wrap:wrap;margin:8px 0}' +
  '.rsim-cam{width:250px;max-width:46vw;aspect-ratio:4/3;background:var(--bg-dark);border:1px solid var(--gold-border);border-radius:14px;overflow:hidden;position:relative}' +
  '.rsim-cam video{width:100%;height:100%;object-fit:cover;display:block;transform:scaleX(-1)}' +
  '.rsim-cam .off{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:var(--text-faint);font-size:12px;text-align:center;padding:10px}' +
  '.rsim-cam .recdot,.st-pip .recdot{position:absolute;top:10px;left:10px;display:none;align-items:center;gap:6px;font-size:10.5px;font-weight:800;letter-spacing:.08em;color:#fff;' +
    'background:rgba(229,72,77,.9);border-radius:999px;padding:4px 10px}' +
  '.rsim-cam.rec .recdot,.st-pip.rec .recdot{display:inline-flex}' +
  '.rsim-cam .recdot i{width:7px;height:7px;border-radius:50%;background:#fff;animation:rsimPulse 1s infinite}' +
  '@keyframes rsimPulse{50%{opacity:.3}}' +
  '.rsim-meter{display:flex;gap:3px;align-items:flex-end;height:26px;margin:8px 0}' +
  '.rsim-meter i{width:5px;height:4px;background:var(--gold);border-radius:2px;transition:height .1s}' +
  '.rsim-timer{font-variant-numeric:tabular-nums;font-size:1.15rem;font-weight:800;color:var(--gold-bright)}' +
  '.rsim-live{font-size:12px;color:var(--text-muted);min-height:16px;font-style:italic}' +
  '.rsim-ta{width:100%;box-sizing:border-box;min-height:120px;margin-top:8px;background:var(--bg-mid);border:1px solid var(--gold-border);' +
    'border-radius:11px;color:var(--text);font-family:inherit;font-size:14px;padding:11px 12px;resize:vertical}' +
  '.rsim-playback{margin-top:10px;max-width:420px;width:100%;border-radius:12px;border:1px solid var(--gold-border)}' +
  /* progress dots */
  '.rsim-qdots{display:flex;gap:6px;margin:0 0 12px}' +
  '.rsim-qdots i{flex:1;height:4px;border-radius:2px;background:rgba(128,128,128,.25)}' +
  '.rsim-qdots i.done{background:var(--gold)}' +
  '.rsim-qdots i.now{background:var(--gold-bright);box-shadow:0 0 8px rgba(201,168,76,.5)}' +
  /* debrief */
  '.rsim-bars{display:grid;gap:10px;margin:14px 0}' +
  '.rsim-bar{display:grid;grid-template-columns:170px 1fr 56px;gap:12px;align-items:center;font-size:13px;color:var(--text-sub)}' +
  '@media(max-width:600px){.rsim-bar{grid-template-columns:120px 1fr 50px}}' +
  '.rsim-bar .tr{height:8px;border-radius:99px;background:rgba(128,128,128,.18);overflow:hidden}' +
  '.rsim-bar .tr i{display:block;height:100%;border-radius:99px;background:linear-gradient(90deg,#8B6914,#C9A84C,#F0D878);transition:width .8s cubic-bezier(.22,1,.36,1)}' +
  '.rsim-bar b{text-align:right;color:var(--gold-bright);font-variant-numeric:tabular-nums}' +
  '.rsim-bar .delta{font-size:11px;font-weight:700}' +
  '.rsim-bar .delta.up{color:#4ADE80}.rsim-bar .delta.dn{color:#FF9A7B}' +
  '.rsim-fb{display:grid;gap:8px;margin-top:10px;font-size:13.5px}' +
  '.rsim-fb p{margin:0;padding:9px 12px;border-radius:10px}' +
  '.rsim-fb .s{background:rgba(74,222,128,.08);border:1px solid rgba(74,222,128,.25);color:var(--text-sub)}' +
  '.rsim-fb .w{background:rgba(255,120,90,.07);border:1px solid rgba(255,120,90,.25);color:var(--text-sub)}' +
  '.rsim-fb .c{background:rgba(201,168,76,.08);border:1px solid var(--gold-border);color:var(--text-sub)}' +
  '.rsim-fb .lbl{font-weight:800;letter-spacing:.08em;text-transform:uppercase;font-size:10.5px;display:block;margin-bottom:3px}' +
  '.rsim-fb .s .lbl{color:#4ADE80}.rsim-fb .w .lbl{color:#FF9A7B}.rsim-fb .c .lbl{color:var(--gold)}' +
  '.rsim-att{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}' +
  '.rsim-att span{font-size:12px;border:1px solid var(--gold-border);border-radius:8px;padding:5px 10px;color:var(--text-muted)}' +
  '.rsim-att span b{color:var(--gold-bright)}' +
  '.rsim-note{font-size:12px;color:var(--text-faint);margin-top:10px;line-height:1.55}' +
  '.rsim-integrity{border-left:3px solid var(--gold);padding:12px 16px;background:rgba(201,168,76,.05);border-radius:0 12px 12px 0;font-size:13px;color:var(--text-muted);line-height:1.6}' +
  '.rsim-integrity b{color:var(--gold);display:block;margin-bottom:4px;font-size:12px;letter-spacing:.12em;text-transform:uppercase}' +
  '.rsim-hist{display:grid;gap:10px}' +
  '.rsim-hist .h-row{display:flex;gap:14px;align-items:center;border:1px solid var(--gold-border);border-radius:12px;padding:12px 16px;font-size:13px;color:var(--text-sub);flex-wrap:wrap}' +
  '.rsim-hist .h-row b{color:var(--gold-bright)}' +
  '.rsim-transcript{white-space:pre-wrap;font-size:13px;color:var(--text-muted);background:var(--bg-mid);border-radius:10px;padding:12px;max-height:150px;overflow:auto}' +
  /* presence self-review */
  '.rsim-presence label{display:flex;gap:10px;align-items:center;font-size:13px;color:var(--text-sub);padding:6px 0;cursor:pointer}' +
  '.rsim-presence input{accent-color:#C9A84C;width:16px;height:16px}' +
  /* improve */
  '.rsim-reco{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px;margin-top:12px}' +
  '.rsim-reco .rc{border:1px solid var(--gold-border);border-radius:13px;padding:15px 16px;background:var(--bg-mid)}' +
  '.rsim-reco .rc .k{font-size:10.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);display:block;margin-bottom:6px}' +
  '.rsim-reco .rc b{display:block;font-size:13.5px;color:var(--text);margin-bottom:4px}' +
  '.rsim-reco .rc span{display:block;font-size:12px;color:var(--text-muted);line-height:1.5;margin-bottom:10px}';

  /* ─── app state ─── */
  var state = {
    screen: 'home', cfg: savedCfg() || {}, session: null, tts: true,
    fmt: 'text', stream: null, recorder: null, chunks: [], recordings: {}, playUrl: null,
    recog: null, timerId: null, t0: 0, recOn: false, meterId: null, audioCtx: null,
    sttGaps: 0, lastSttAt: 0, cvMined: null, drill: false, restart: null,
    cc: (function () { try { return localStorage.getItem('mt-rope-cc') !== '0'; } catch (e) { return true; } })()
  };

  var root = null, body = null, stepsEl = null;
  var STAGES = [
    ['find', { en: 'Find', id: 'Cari' }],
    ['customise', { en: 'Customise', id: 'Sesuaikan' }],
    ['practice', { en: 'Practise', id: 'Latihan' }],
    ['review', { en: 'Report', id: 'Laporan' }],
    ['improve', { en: 'Improve', id: 'Perbaiki' }]
  ];

  function build() {
    if (root) return;
    var st = document.createElement('style');
    st.id = 'ropeSimCss'; st.textContent = css + cssX;
    document.head.appendChild(st);
    root = el('div', 'rsim'); root.id = 'ropeSim';
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-label', 'AI Interview Specialist');
    root.appendChild(el('div', 'rsim-bg'));
    root.appendChild(el('div', 'rsim-veil'));
    var top = el('div', 'rsim-top');
    top.appendChild(el('b', 'rsim-brand', T('The Rope · Interview Specialist', 'The Rope · Spesialis Wawancara')));
    stepsEl = el('div', 'rsim-steps');
    top.appendChild(stepsEl);
    var x = el('button', 'rsim-close', '✕');
    x.setAttribute('aria-label', 'Close simulator');
    x.addEventListener('click', close);
    top.appendChild(x);
    body = el('div', 'rsim-body');
    root.appendChild(top); root.appendChild(body);
    document.body.appendChild(root);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('open') && state.screen !== 'interview') close();
    });
  }

  function renderSteps(active) {
    stepsEl.innerHTML = '';
    if (!active) return;
    var reached = { find: true, customise: true, practice: !!state.session, review: !!(state.session && state.session.done), improve: !!(state.session && state.session.done) };
    STAGES.forEach(function (s, i) {
      if (i > 0) stepsEl.appendChild(el('span', 'rsim-sep', '→'));
      var idx = STAGES.map(function (x) { return x[0]; }).indexOf(active);
      var cls = s[0] === active ? ' now' : (reached[s[0]] && i < idx ? ' done' : '');
      var b = el('button', 'rsim-step' + cls);
      b.appendChild(el('i', null, cls.indexOf('done') !== -1 ? '✓' : String(i + 1)));
      b.appendChild(el('span', null, L(s[1])));
      if (cls.indexOf('done') !== -1) {
        b.addEventListener('click', function () {
          if (s[0] === 'find') renderHome();
          if (s[0] === 'customise') { if (state.session && state.session.cfg && state.session.cfg.pathId) renderPath(state.session.cfg.pathId); else renderSetup(); }
          if (s[0] === 'practice' && state.session && !state.session.done) renderQuestion();
          if (s[0] === 'review' && state.session && state.session.done) renderDebrief(true);
        });
      }
      stepsEl.appendChild(b);
    });
  }

  function open(mode, qid, opts) {
    build();
    root.classList.add('open');
    document.body.classList.add('lms-lock');
    if (mode === 'fasttrack') renderFastTrack();
    else if (mode === 'setup') renderSetup();
    else if (mode === 'history') renderHistory();
    else if (mode === 'drill' && qid) startDrill(qid, opts || null);
    else if (mode && mode.indexOf('path:') === 0) renderPath(mode.slice(5));
    else renderHome();
  }
  function close() {
    stopMedia();
    if (root) root.classList.remove('open');
    document.body.classList.remove('lms-lock');
    Object.keys(state.recordings).forEach(function (k) {
      try { URL.revokeObjectURL(state.recordings[k].url); } catch (e) {}
    });
    state.recordings = {};
    state.session = null;
    state.drill = false;
  }
  function setScreen(name, stage) {
    state.screen = name;
    renderSteps(stage || null);
    body.innerHTML = '';
    body.scrollTop = 0;
    var wrap = el('div', 'rsim-in');
    body.appendChild(wrap);
    return wrap;
  }

  /* ─── avatar SVG — animated interviewer bust with office backdrop ───
     Honesty note: this is deliberately an ANIMATED interviewer, not
     synthetic human footage. When real recorded interviewer clips exist,
     declare them via window.MT_ROPE_SIM_MEDIA = { personas: { hr: {
     idle: 'url-to-looping-clip.mp4' } } } and the stage plays the video
     instead of the avatar — the plumbing below already supports it. */
  function avatarSvg(per) {
    var hue = per.hue;
    return '<svg viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
      /* office backdrop */
      '<rect width="160" height="90" fill="#0C1626"/>' +
      '<rect x="0" y="0" width="160" height="90" fill="url(#rsimOff' + per.id + ')"/>' +
      '<defs><linearGradient id="rsimOff' + per.id + '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="#16233A"/><stop offset="1" stop-color="#0A1220"/></linearGradient></defs>' +
      '<rect x="12" y="12" width="34" height="46" rx="2" fill="#111D31"/>' +
      '<rect x="118" y="10" width="30" height="52" rx="2" fill="#101B2E"/>' +
      '<rect x="120" y="14" width="26" height="3" rx="1.5" fill="' + hue + '" opacity=".25"/>' +
      '<rect x="120" y="20" width="20" height="3" rx="1.5" fill="' + hue + '" opacity=".18"/>' +
      '<circle cx="29" cy="30" r="8" fill="' + hue + '" opacity=".14"/>' +
      /* body sway group */
      '<g class="av-body" style="transform-origin:80px 90px">' +
      '<path d="M46 90c4-22 16-33 34-33s30 11 34 33" fill="' + hue + '"/>' +
      '<path d="M46 90c4-22 16-33 34-33 3.5 0 6.8.4 9.8 1.2L80 78 70.2 58.2c-14 2.6-21.7 13-24.2 31.8Z" fill="#0E1830" opacity=".35"/>' +
      '<rect x="74" y="48" width="12" height="12" fill="#E8C9A0"/>' +
      /* head */
      '<g class="av-head" style="transform-origin:80px 34px">' +
      '<circle cx="80" cy="32" r="17" fill="#E8C9A0"/>' +
      '<path d="M63 32a17 17 0 0 1 34 0c0-12-6.5-20-17-20s-17 8-17 20Z" fill="' + hue + '"/>' +
      '<g class="av-brows"><rect x="70" y="26.5" width="7" height="1.6" rx="0.8" fill="#6B4A36"/>' +
      '<rect x="83" y="26.5" width="7" height="1.6" rx="0.8" fill="#6B4A36"/></g>' +
      '<g class="av-eyes" style="transform-origin:80px 32px">' +
      '<circle cx="73.5" cy="32" r="1.9" fill="#1A2333"/><circle cx="86.5" cy="32" r="1.9" fill="#1A2333"/></g>' +
      '<path d="M78.5 35.5q1.5 1.4 3 0" stroke="#D3A886" stroke-width="1" fill="none" stroke-linecap="round"/>' +
      '<g class="av-mouthset" style="transform-origin:80px 42px">' +
      '<rect class="av-mouth" x="75" y="40.5" width="10" height="2.6" rx="1.3" fill="#8A5A44"/>' +
      '</g></g></g>' +
      '</svg>';
  }

  var LEARN_RE = /\b(learn(ed|t)?|lesson|next time|since then|now i|i now|realised|realized|would do differently|belajar|pelajaran|lain kali|sejak itu|sekarang saya|menyadari)\b/i;
  /* ─── LIVE GUIDANCE — real-time coaching beside the answer, on your device ───
     Reads the typed or transcribed answer as it grows and shows: the STAR-L
     structure lights, the key points this question is testing (from the
     question's own signals and the job description), live quality meters, and
     one throttled nudge at a time. Modes: full (practice default), light
     (live-mode default: structure lights and time nudges only), off. It is a
     rehearsal aid inside the simulator; Metanoia offers no assistance during
     real interviews. */
  var GUIDE_KEY = 'mt-rope-guide';
  function guideMode() { try { return localStorage.getItem(GUIDE_KEY) || ''; } catch (e) { return ''; } }
  function setGuideMode(m) { try { localStorage.setItem(GUIDE_KEY, m); } catch (e) {} }
  function keyPointsFor(q, s) {
    var pts = [];
    if (q.look && q.look.length) {
      q.look.forEach(function (k, i) { pts.push({ id: 'lk' + i, label: L(k.n), test: function (t) { try { return new RegExp(k.re, 'i').test(t); } catch (e) { return false; } } }); });
      return pts.slice(0, 6);
    }
    if (q.num) {
      pts.push({ id: 'nf', label: T('Say the formula before the number', 'Sebut rumusnya sebelum angkanya'), test: function (t) { return /(÷|\/|divid|dibagi|times|×|multipl|dikali|minus|dikurangi|plus|ditambah|over|per )/i.test(t); } });
      pts.push({ id: 'nu', label: T('Say the units at every step', 'Sebut satuannya di setiap langkah'), test: function (t) { return /(%|rp|billion|miliar|juta|million|gb|bytes?|years?|tahun|stations?|stasiun|minutes?|menit|per hour|per jam)/i.test(t); } });
      pts.push({ id: 'ns', label: T('Sanity-check the result', 'Cek kewajaran hasilnya'), test: function (t) { return /(sanity|check|makes sense|roughly|about|cek|masuk akal|kira-kira|sekitar|dibanding|compared)/i.test(t); } });
      pts.push({ id: 'nw', label: T('Say what the number means', 'Katakan arti angkanya'), test: function (t) { return /(means|so the|which is|half|double|higher|lower|artinya|jadi|berarti|separuh|lebih tinggi|lebih rendah)/i.test(t); } });
      return pts;
    }
    if (q.step === 'clarify' && q.caseId && SP && SP.cases[q.caseId]) {
      SP.cases[q.caseId].facts.forEach(function (f, i) { pts.push({ id: 'cf' + i, label: T('Ask about: ', 'Tanyakan: ') + L(f.n), test: function (t) { try { return new RegExp(f.re, 'i').test(t); } catch (e) { return false; } } }); });
      return pts.slice(0, 6);
    }
    var sig = q.sig || [];
    if (sig.indexOf('star') !== -1) pts.push({ id: 'situ', label: T('One specific situation, named in a sentence', 'Satu situasi spesifik, disebut dalam satu kalimat'), test: function (t) { return SITU_RE.test(t); } });
    if (sig.indexOf('star') !== -1) pts.push({ id: 'action', label: T('What YOU did — actions in the first person', 'Apa yang KAMU lakukan — tindakan dalam sudut pandang pertama'), test: function (t) { return ACTION_RE.test(t); } });
    if (sig.indexOf('metric') !== -1 || sig.indexOf('star') !== -1) pts.push({ id: 'num', label: T('A number that shows the result', 'Angka yang menunjukkan hasilnya'), test: function (t) { return /\d/.test(t); } });
    if (sig.indexOf('structure') !== -1) pts.push({ id: 'struct', label: T('Signpost the structure: first, second, finally', 'Tandai strukturnya: pertama, kedua, terakhir'), test: function (t) { return /\b(first|second|third|finally|lastly|pertama|kedua|ketiga|terakhir)\b/i.test(t); } });
    if (sig.indexOf('research') !== -1) pts.push({ id: 'research', label: T('Something specific about this company or role', 'Sesuatu yang spesifik tentang perusahaan atau peran ini'), test: function (t) { var co = (s.cfg.company || '').toLowerCase(); return (co && t.toLowerCase().indexOf(co) !== -1) || /\b(your (product|team|market|strategy|customers)|produk|tim|pasar|strategi) (anda|kalian)?\b/i.test(t); } });
    if (sig.indexOf('honesty') !== -1) pts.push({ id: 'honest', label: T('Own the weakness or mistake plainly, then the fix', 'Akui kelemahan atau kesalahannya dengan jujur, lalu perbaikannya'), test: function (t) { return /\b(mistake|wrong|failed|weakness|should have|kesalahan|salah|gagal|kelemahan|seharusnya)\b/i.test(t) && LEARN_RE.test(t); } });
    pts.push({ id: 'learn', label: T('Land it: the result and what you learned', 'Daratkan: hasil dan apa yang kamu pelajari'), test: function (t) { return RESULT_RE.test(t) && LEARN_RE.test(t); } });
    /* job-description requirement keywords, when a JD was pasted */
    if (s.cfg.jd) {
      var m = mineJd(s.cfg.jd);
      (m && m.reqs ? m.reqs.slice(0, 2) : []).forEach(function (r, i) {
        var kw = (r.toLowerCase().match(/[a-zà-ÿ]{5,}/g) || []).filter(function (w) { return ['experience', 'strong', 'ability', 'skills', 'pengalaman', 'kemampuan', 'memiliki', 'minimal'].indexOf(w) === -1; }).slice(0, 3);
        if (kw.length) pts.push({ id: 'jd' + i, label: T('Touch the JD requirement: ', 'Sentuh persyaratan JD: ') + kw.join(' · '), test: function (t) { var l = t.toLowerCase(); return kw.some(function (w) { return l.indexOf(w) !== -1; }); } });
      });
    }
    return pts.slice(0, 6);
  }
  function buildGuide(q, s, opts) {
    var mode = guideMode() || (s.mode === 'live' ? 'light' : 'full');
    var box = el('aside', 'rsim-guide mode-' + mode);
    var storyQ = profileFor(q) === 'behavioural' && !q.step;
    if (!storyQ) box.classList.add('no-star');
    box.setAttribute('aria-label', 'Live guidance');
    var head = el('div', 'rg-head');
    head.appendChild(el('b', null, '◉ ' + T('Live Guidance', 'Panduan Langsung') + ' <span class="rg-ai">' + T('AI-assisted · on your device', 'Berbantuan AI · di perangkatmu') + '</span>'));
    var modes = el('div', 'rg-modes');
    [['full', T('Full', 'Penuh')], ['light', T('Light', 'Ringan')], ['off', T('Off', 'Mati')]].forEach(function (m) {
      var b = el('button', m[0] === mode ? 'on' : '', m[1]); b.type = 'button'; b.dataset.m = m[0];
      b.addEventListener('click', function () { mode = m[0]; setGuideMode(mode); box.className = 'rsim-guide mode-' + mode; modes.querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x.dataset.m === mode); }); update(lastText, lastSecs, true); });
      modes.appendChild(b);
    });
    head.appendChild(modes);
    box.appendChild(head);
    /* structure lights */
    var lights = el('div', 'rg-lights');
    var LT = [['S', T('Situation', 'Situasi'), SITU_RE], ['T', T('Task', 'Tugas'), TASK_RE], ['A', T('Action', 'Tindakan'), ACTION_RE], ['R', T('Result', 'Hasil'), RESULT_RE], ['L', T('Learning', 'Pembelajaran'), LEARN_RE]];
    var lightEls = LT.map(function (x) { var d = el('div', 'rg-l'); d.appendChild(el('b', null, x[0])); d.appendChild(el('span', null, x[1])); d.title = x[1]; lights.appendChild(d); return d; });
    box.appendChild(lights);
    /* key points */
    var pts = keyPointsFor(q, s);
    var kp = el('div', 'rg-points');
    kp.appendChild(el('div', 'rg-kick', T('Key points this question is testing', 'Poin kunci yang diuji pertanyaan ini')));
    var ptEls = pts.map(function (p) { var d = el('div', 'rg-pt'); d.appendChild(el('i', null, '')); d.appendChild(el('span', null, p.label)); kp.appendChild(d); return d; });
    box.appendChild(kp);
    /* meters */
    var meters = el('div', 'rg-meters');
    var MT = [['len', T('Length', 'Panjang')], ['spec', T('Specificity', 'Kekhususan')], ['own', T('Ownership (I vs we)', 'Kepemilikan (saya vs kami)')], ['clean', T('Clean delivery', 'Penyampaian bersih')]];
    var meterEls = {};
    MT.forEach(function (m) { var r = el('div', 'rg-m'); r.appendChild(el('span', null, m[1])); var bar = el('div', 'rg-bar'); var f = el('i'); bar.appendChild(f); r.appendChild(bar); var v = el('em', null, ''); r.appendChild(v); meters.appendChild(r); meterEls[m[0]] = { f: f, v: v, r: r }; });
    box.appendChild(meters);
    var nudge = el('div', 'rg-nudge'); box.appendChild(nudge);
    box.appendChild(el('p', 'rg-note', T('Guidance runs on your device from the same transparent rubric as the debrief. Rehearsal aid only — switch it off to simulate the real room.', 'Panduan berjalan di perangkatmu dari rubrik transparan yang sama dengan tinjauan. Alat latihan saja — matikan untuk mensimulasikan ruangan sesungguhnya.')));
    var lastText = '', lastSecs = 0, lastNudgeAt = 0, lastNudgeKey = '', shown = {};
    function setNudge(key, txt, force) {
      var now = Date.now();
      if (!txt) { if (now - lastNudgeAt > 6000) { nudge.textContent = ''; nudge.classList.remove('on'); } return; }
      if (key === lastNudgeKey && !force) return;
      if (now - lastNudgeAt < 7000 && !force) return;
      nudge.textContent = txt; nudge.classList.add('on'); lastNudgeAt = now; lastNudgeKey = key; shown[key] = 1;
    }
    function update(text, secs, force) {
      lastText = text || ''; lastSecs = secs || 0;
      if (mode === 'off') return;
      var t = ' ' + lastText + ' ';
      var words = (t.match(/\S+/g) || []).length;
      var lit = [SITU_RE.test(t), TASK_RE.test(t), ACTION_RE.test(t), RESULT_RE.test(t) || /\d/.test(t) && RESULT_RE.test(t), LEARN_RE.test(t)];
      lightEls.forEach(function (d, i) { d.classList.toggle('on', !!lit[i]); });
      if (mode === 'full') {
        ptEls.forEach(function (d, i) { d.classList.toggle('on', pts[i].test(t)); });
        var digits = measuredNumbers(t);
        var iC = countMatches(t, /\b(i|saya|aku)\b/), weC = countMatches(t, /\b(we|our|kami|kita)\b/);
        var fill = 0; FILLERS.forEach(function (f) { var i = 0; var low = t.toLowerCase(); while ((i = low.indexOf(f, i)) !== -1) { fill++; i += f.length; } });
        var len = Math.min(100, Math.round(words / 140 * 100));
        var spec = Math.min(100, digits * 30 + (SITU_RE.test(t) ? 25 : 0) + (ACTION_RE.test(t) ? 15 : 0));
        var own = words < 8 ? 0 : Math.round(100 * (iC + 0.5) / (iC + weC + 1));
        var clean = Math.max(0, 100 - fill * 15);
        var put = function (k, v, label, warn) { meterEls[k].f.style.width = v + '%'; meterEls[k].v.textContent = label; meterEls[k].r.classList.toggle('warn', !!warn); };
        put('len', len, words + ' ' + T('words', 'kata'), words > 260);
        put('spec', spec, digits ? digits + ' ' + T('numbers', 'angka') : T('no numbers yet', 'belum ada angka'), words > 40 && !digits);
        put('own', own, iC + ' ' + T('I', 'saya') + ' · ' + weC + ' ' + T('we', 'kami'), words > 30 && weC > iC * 2);
        put('clean', clean, fill ? fill + ' ' + T('fillers', 'kata isian') : T('no fillers', 'tanpa kata isian'), fill >= 3);
      }
      /* one nudge at a time, throttled — timing nudges in light mode, content nudges in full mode */
      var n = null;
      if (secs >= 120 && !shown.t120) n = ['t120', T('Two minutes — land the result and stop.', 'Dua menit — daratkan hasilnya dan berhenti.')];
      else if (secs >= 75 && !lit[3] && !shown.t75) n = ['t75', T('75 seconds in — head for the result.', '75 detik — menuju ke hasilnya.')];
      else if (mode === 'full') {
        if (!storyQ) { if (words > 240) n = ['long', T('You are past 240 words — one more sentence, then stop.', 'Sudah lewat 240 kata — satu kalimat lagi, lalu berhenti.')]; else if (fill >= 3) n = ['fill', T('Fillers creeping in — pause instead of “um”.', 'Kata isian mulai muncul — jeda saja, jangan “emm”.')]; }
        else if (words >= 40 && !lit[0]) n = ['situ', T('Name the situation in one sentence — where, when, what was at stake.', 'Sebutkan situasinya dalam satu kalimat — di mana, kapan, apa yang dipertaruhkan.')];
        else if (words >= 70 && !lit[2]) n = ['act', T('Get to what you did: “I decided…”, “I built…”.', 'Masuk ke apa yang kamu lakukan: “Saya memutuskan…”, “Saya membangun…”.')];
        else if (words >= 30 && weC > iC * 2 && weC >= 3) n = ['we', T('Lots of “we” — what did you personally do?', 'Banyak “kami” — apa yang kamu lakukan secara pribadi?')];
        else if (words >= 90 && !measuredNumbers(t)) n = ['num', T('Add a number: a percentage, a count, a deadline.', 'Tambahkan angka: persentase, jumlah, tenggat.')];
        else if (words >= 110 && lit[3] && !lit[4]) n = ['learn', T('Close with what you learned or would do differently.', 'Tutup dengan apa yang kamu pelajari atau akan lakukan berbeda.')];
        else if (words > 240) n = ['long', T('You are past 240 words — one more sentence, then stop.', 'Sudah lewat 240 kata — satu kalimat lagi, lalu berhenti.')];
        else if (fill >= 3) n = ['fill', T('Fillers creeping in — pause instead of “um”.', 'Kata isian mulai muncul — jeda saja, jangan “emm”.')];
      }
      setNudge(n ? n[0] : null, n ? n[1] : null, force);
    }
    var tickId = setInterval(function () { if (!document.body.contains(box)) { clearInterval(tickId); return; } if (state.t0) update(lastText, Math.round((Date.now() - state.t0) / 1000)); }, 2000);
    return { el: box, update: function (text) { update(text, state.t0 ? Math.round((Date.now() - state.t0) / 1000) : 0); }, mode: function () { return mode; } };
  }

  /* ═══════════════════ INTERVIEW SPECIALIST ═══════════════════
     The product layer over the simulator: a catalogue of interview paths
     (data/rope/paths.js), a customise step, CV-aware personalisation, a case
     engine with exhibits and exact numeric checks, a dimension report with a
     full transcript, and a progress dashboard. Everything is computed in this
     browser; transcripts are kept in this browser only and can be deleted. */
  var SP = window.MT_ROPE_PATHS || null;
  var LS_TX = 'mt_rope_sim_transcripts';
  var LS_SPEC = 'mt_rope_spec_cfg';
  var DUR_IDX = { quick: 0, standard: 1, full: 2 };
  function specPaths() { return SP ? SP.paths : []; }
  function pathById(id) { return specPaths().filter(function (p) { return p.id === id; })[0] || null; }
  function styleById(id) { var a = SP ? SP.styles : []; return a.filter(function (x) { return x.id === id; })[0] || a[1] || { id: 'neutral', probes: 2, mode: 'live' }; }
  function durById(id) { var a = SP ? SP.durations : []; return a.filter(function (x) { return x.id === id; })[0] || { id: 'standard', mins: 20 }; }
  function bankQ(id) { return B.questions.filter(function (q) { return q.id === id; })[0] || null; }
  function specCfgs() { try { return JSON.parse(localStorage.getItem(LS_SPEC) || '{}') || {}; } catch (e) { return {}; } }
  function saveSpecCfg(c) { try { var all = specCfgs(); all[c.pathId] = c; all._last = c.pathId; localStorage.setItem(LS_SPEC, JSON.stringify(all)); } catch (e) {} }
  function transcripts() { try { return JSON.parse(localStorage.getItem(LS_TX) || '{}') || {}; } catch (e) { return {}; } }
  function saveTranscript(at, turns) {
    try {
      var all = transcripts(); all[at] = turns;
      var keys = Object.keys(all).sort(); while (keys.length > 12) { delete all[keys.shift()]; }
      localStorage.setItem(LS_TX, JSON.stringify(all));
    } catch (e) {}
  }
  function nf(v, max) { try { return Number(v).toLocaleString(lang() === 'id' ? 'id-ID' : 'en-US', { maximumFractionDigits: max == null ? 2 : max }); } catch (e) { return String(v); } }
  var UNIT_ID = { 'Rp bn': 'miliar', 'e-motorbikes': 'motor listrik', stations: 'stasiun', years: 'tahun', pharmacists: 'apoteker', GB: 'GB' };
  function fmtUnit(v, u) {
    if (v == null || !isFinite(v)) return '—';
    if (u === 'Rp') return 'Rp ' + nf(v);
    if (u === 'Rp bn') return 'Rp ' + nf(v) + (lang() === 'id' ? ' miliar' : ' bn');
    if (u === '%') return nf(v) + '%';
    return nf(v) + (u ? ' ' + (lang() === 'id' && UNIT_ID[u] ? UNIT_ID[u] : u) : '');
  }
  function cellTxt(c) {
    if (c && typeof c === 'object') return L(c);
    var s = String(c == null ? '' : c);
    if (lang() === 'id' && /^[Rp\s\d.,x%—+\-]*$/.test(s)) s = s.replace(/,/g, '§').replace(/\./g, ',').replace(/§/g, '.');
    return s;
  }
  function fillTokens(str, cfg) {
    return String(str || '').replace(/\{company\|([^}]*)\}/g, function (m, d) { return (cfg && cfg.company) || d; })
      .replace(/\{role\|([^}]*)\}/g, function (m, d) { return (cfg && cfg.roleText) || d; });
  }

  /* ── numbers: parse what the candidate typed, tolerant of 1.400 / 1,400 / 7,5 / 50 ribu ── */
  function normNum(raw) {
    raw = String(raw).replace(/[.,]$/, '');
    var hasC = raw.indexOf(',') !== -1, hasD = raw.indexOf('.') !== -1;
    if (hasC && hasD) {
      if (raw.lastIndexOf(',') > raw.lastIndexOf('.')) raw = raw.replace(/\./g, '').replace(',', '.'); else raw = raw.replace(/,/g, '');
    } else if (hasC || hasD) {
      var sep = hasC ? ',' : '.';
      if (new RegExp('^-?\\d{1,3}(\\' + sep + '\\d{3})+$').test(raw)) raw = raw.split(sep).join(''); else raw = raw.replace(',', '.');
    }
    var v = parseFloat(raw);
    return isFinite(v) ? v : null;
  }
  var MULT = { k: 1e3, rb: 1e3, ribu: 1e3, thousand: 1e3, jt: 1e6, juta: 1e6, million: 1e6, mn: 1e6, bn: 1e9, miliar: 1e9, billion: 1e9 };
  function bestNum(str, expected) {
    var re = /(-?\d[\d.,]*)\s*(k|rb|ribu|thousand|jt|juta|million|mn|bn|miliar|billion)?/gi, m, best = null, bestErr = Infinity;
    var s = String(str || '');
    while ((m = re.exec(s))) {
      var v = normNum(m[1]); if (v == null) continue;
      var cands = [v]; var mul = MULT[(m[2] || '').toLowerCase()]; if (mul) cands.push(v * mul);
      cands.forEach(function (c) {
        var err = expected ? Math.abs(c - expected) / Math.max(Math.abs(expected), 1e-9) : 0;
        if (err < bestErr) { bestErr = err; best = c; }
      });
    }
    return best;
  }

  /* ── CV intelligence, deeper: roles, education, skills (still on-device) ── */
  function cvClean(l) { return String(l).replace(/^[\s•*·\-–—>]+/, '').replace(/\s+/g, ' ').trim().slice(0, 90); }
  function mineCvDeep(text) {
    var base = mineCv(text);
    var lines = String(text || '').split(/\n+/).map(function (l) { return l.trim(); }).filter(Boolean);
    var roles = [], edu = [], skills = [];
    lines.forEach(function (l) {
      var sm = l.match(/^(skills?|keahlian|keterampilan|tools?|technical skills?|kemampuan)\s*[:\-–]\s*(.+)$/i);
      if (sm) { sm[2].split(/[,;|•·]/).forEach(function (x) { x = x.trim(); if (x.length > 1 && x.length < 32 && skills.length < 6) skills.push(x); }); return; }
      if (edu.length < 2 && l.length < 140 && /(universit|institut|politeknik|sekolah tinggi|college|school of|bachelor|master|sarjana|\bs1\b|\bs2\b|b\.?sc|m\.?sc|\bmba\b|diploma)/i.test(l)) { edu.push(cvClean(l)); return; }
      if (roles.length < 3 && l.length < 110 && !/\.$/.test(l) && /(intern|analyst|associate|engineer|developer|manager|officer|consultant|specialist|coordinator|assistant|staff|lead|head of|president|chair|founder|magang|staf|asisten|koordinator|ketua|kepala|pendiri|analis|konsultan)/i.test(l)) roles.push(cvClean(l));
    });
    base.roles = roles; base.edu = edu; base.skills = skills;
    return base;
  }
  function cvSummary(m) {
    if (!m) return '';
    var bits = [];
    if (m.roles && m.roles.length) bits.push(m.roles.length + ' ' + T('roles', 'peran'));
    if (m.claims && m.claims.length) bits.push(m.claims.length + ' ' + T('achievement claims', 'klaim pencapaian'));
    if (m.edu && m.edu.length) bits.push(m.edu.length + ' ' + T('education lines', 'baris pendidikan'));
    if (m.skills && m.skills.length) bits.push(m.skills.length + ' ' + T('skills', 'keterampilan'));
    return bits.join(' · ');
  }

  /* ── personalised questions: CV, job description, target role ── */
  var PERS_DIMS = ['impact', 'ownership', 'leadership', 'drive', 'results', 'rigour', 'sense', 'technical', 'values', 'insight', 'clarity'];
  var EDU_DIMS = ['plan', 'goals', 'motivation', 'fit'];
  function pickDim(p, prefs) {
    var ids = p.dims.map(function (d) { return d.id; });
    for (var i = 0; i < prefs.length; i++) if (ids.indexOf(prefs[i]) !== -1) return prefs[i];
    return ids[0];
  }
  var SEC_PERS = { en: 'From your CV', id: 'Dari CV-mu' };
  function personalQs(p, cfg) {
    var out = [], cv = state.cvMined, max = [1, 2, 3][DUR_IDX[cfg.dur] != null ? DUR_IDX[cfg.dur] : 1];
    function add(o) { if (out.length < max) { o.sec = 'pers'; o.secName = SEC_PERS; o.personal = true; out.push(o); } }
    var eduFirst = p.cat === 'public' || p.id === 'mba-admissions';
    var cands = [];
    if (cv) {
      if (cv.edu && cv.edu[0]) cands.push({ k: 'edu', o: { id: 'cv_edu', cat: 'hr', type: 'motivational', sig: ['structure'], d: 2, dim: pickDim(p, EDU_DIMS.concat(PERS_DIMS)),
        q: { en: 'Your CV lists “' + cv.edu[0] + '”. Which part of that study do you actually use, and how does it connect to this interview?', id: 'CV-mu mencantumkan “' + cv.edu[0] + '”. Bagian mana dari studi itu yang benar-benar kamu pakai, dan apa kaitannya dengan wawancara ini?' },
        tests: { en: 'Linking your education to this role with evidence.', id: 'Mengaitkan pendidikanmu dengan peran ini disertai bukti.' },
        coach: { en: 'One course or project, what you did in it, and where you have applied it since.', id: 'Satu mata kuliah atau proyek, apa yang kamu kerjakan di sana, dan di mana kamu sudah menerapkannya.' } } });
      if (cv.roles && cv.roles[0]) cands.push({ k: 'role', o: { id: 'cv_role', cat: 'behavioral', type: 'behavioural', sig: ['star', 'metric'], d: 2, dim: pickDim(p, PERS_DIMS),
        q: { en: 'Your CV says “' + cv.roles[0] + '”. What would your manager there say you did better than anyone else — and what is the evidence?', id: 'CV-mu menyebut “' + cv.roles[0] + '”. Menurut atasanmu di sana, apa yang kamu kerjakan lebih baik dari siapa pun — dan apa buktinya?' },
        tests: { en: 'Evidence behind your own experience, not a job description.', id: 'Bukti di balik pengalamanmu sendiri, bukan uraian tugas.' },
        coach: { en: 'One moment, your action, a number. Skip the duties list.', id: 'Satu momen, tindakanmu, satu angka. Lewati daftar tugas.' } } });
      if (cv.claims && cv.claims[0]) {
        var cl = cv.claims[0].length > 110 ? cv.claims[0].slice(0, 110) + '…' : cv.claims[0];
        cands.push({ k: 'claim', o: { id: 'cv_claim', cat: 'behavioral', type: 'behavioural', sig: ['star', 'metric'], d: 2, dim: pickDim(p, PERS_DIMS), probes: ['own_actions', 'result_measure', 'why_choice'],
          q: { en: 'Your CV says: “' + cl + '”. Tell me about the moment that claim was most tested.', id: 'CV-mu menyebut: “' + cl + '”. Ceritakan momen ketika klaim itu paling diuji.' },
          tests: { en: 'Evidence behind your own CV claims.', id: 'Bukti di balik klaim CV-mu sendiri.' },
          coach: { en: 'Defend it with the hardest real example you have, not the smoothest.', id: 'Pertahankan dengan contoh nyata tersulit yang kamu punya, bukan yang termulus.' } } });
      }
      if (cv.skills && cv.skills[0]) cands.push({ k: 'skill', o: { id: 'cv_skill', cat: 'technical', type: 'technical', sig: ['structure'], d: 2, dim: pickDim(p, ['technical', 'rigour', 'ownership', 'problem'].concat(PERS_DIMS)),
        q: { en: 'Your CV lists ' + cv.skills[0] + '. Tell me about the last time you used it on something that mattered.', id: 'CV-mu mencantumkan ' + cv.skills[0] + '. Ceritakan terakhir kali kamu memakainya untuk sesuatu yang penting.' },
        tests: { en: 'Whether a listed skill is real and recent.', id: 'Apakah keterampilan yang dicantumkan nyata dan terkini.' },
        coach: { en: 'What you built or analysed with it, one limit you hit, and the result.', id: 'Apa yang kamu bangun atau analisis dengannya, satu batas yang kamu temui, dan hasilnya.' } } });
    }
    var order = eduFirst ? ['edu', 'claim', 'role', 'skill'] : ['role', 'claim', 'skill', 'edu'];
    order.forEach(function (k) { cands.forEach(function (c) { if (c.k === k) add(c.o); }); });
    if (cfg.jd) {
      var jm = mineJd(cfg.jd);
      if (jm && jm.reqs && jm.reqs[0]) add({ id: 'jd_req', cat: 'behavioral', type: 'behavioural', sig: ['star'], d: 2, dim: pickDim(p, PERS_DIMS),
        q: { en: 'The job description asks for: “' + jm.reqs[0].trim().slice(0, 140) + '”. Where have you shown exactly that?', id: 'Deskripsi pekerjaan meminta: “' + jm.reqs[0].trim().slice(0, 140) + '”. Di mana kamu pernah menunjukkan persis itu?' },
        tests: { en: 'Requirement-to-evidence mapping from the actual JD.', id: 'Pemetaan persyaratan-ke-bukti dari JD sebenarnya.' },
        coach: { en: 'Quote one project that matches the requirement, your actions in it, and a measured outcome.', id: 'Sebut satu proyek yang cocok dengan persyaratan itu, tindakanmu di dalamnya, dan hasil terukurnya.' } });
    }
    if (cfg.roleId) {
      var rq = composedQuestions().filter(function (q) { return q.dirId === cfg.roleId; })[0];
      if (rq) add(Object.assign({}, rq, { dim: pickDim(p, ['technical', 'rigour', 'sense'].concat(PERS_DIMS)) }));
    }
    return out;
  }

  /* ── session assembly for a path ── */
  var SHUFFLE_SECS = ['stories', 'eng', 'comp', 'values', 'people', 'integrity', 'lead', 'self', 'customer'];
  var CASE_SEC = {
    clarify: { en: 'Clarify', id: 'Klarifikasi' }, structure: { en: 'Structure', id: 'Struktur' },
    quant: { en: 'Analysis', id: 'Analisis' }, insight: { en: 'Analysis', id: 'Analisis' },
    brainstorm: { en: 'Ideas', id: 'Ide' }, synthesis: { en: 'Recommendation', id: 'Rekomendasi' }
  };
  function resolveQ(item, cfg, sec) {
    var base = item.ref ? bankQ(item.ref) : item;
    if (!base) return null;
    var q = Object.assign({}, base);
    q.dim = item.dim; q.sec = sec.id; q.secName = sec.name;
    q.q = { en: fillTokens(base.q.en, cfg), id: fillTokens(base.q.id, cfg) };
    if (!q.cat) q.cat = item.type === 'case' ? 'case' : item.type === 'technical' ? 'technical' : item.type === 'situational' ? 'situational' : item.type === 'behavioural' ? 'behavioral' : 'hr';
    return q;
  }
  function buildPathQuestions(p, cfg) {
    var di = DUR_IDX[cfg.dur] != null ? DUR_IDX[cfg.dur] : 1;
    if (p.kind === 'case') return buildCaseQuestions(p, cfg, di);
    var out = [], diff = cfg.difficulty || 2;
    (p.sections || []).forEach(function (sec) {
      var n = sec.take[di]; if (!n) return;
      var pool = sec.qs.map(function (it) { return resolveQ(it, cfg, sec); }).filter(Boolean);
      if (SHUFFLE_SECS.indexOf(sec.id) !== -1) {
        pool.forEach(function (q) { q._r = Math.abs((q.d || 2) - diff) + Math.random() * 0.9; });
        pool.sort(function (a, b) { return a._r - b._r; });
      }
      out = out.concat(pool.slice(0, n));
    });
    return out;
  }
  function buildCaseQuestions(p, cfg, di) {
    var C = SP.cases, ids = (p.cases || []).filter(function (id) { return C[id]; });
    var cid = cfg.caseId && C[cfg.caseId] ? cfg.caseId : ids[Math.floor(Math.random() * ids.length)];
    cfg._case = cid;
    var c = C[cid], plan = c.plan[['quick', 'standard', 'full'][di]];
    return plan.map(function (i) {
      var st = c.steps[i];
      return Object.assign({}, st, { id: 'case_' + cid + '_' + i, cat: 'case', type: 'case', caseId: cid, stepIdx: i, d: 2, sig: ['structure'],
        sec: st.step === 'insight' ? 'quant' : st.step, secName: CASE_SEC[st.step] });
    });
  }
  function startPathSession(cfg) {
    var p = pathById(cfg.pathId);
    if (!p) { renderHome(); return; }
    var st = styleById(cfg.style);
    cfg.mode = st.mode; cfg.probes = st.probes; cfg.pushback = !!st.pushback; cfg.format = p.format || null;
    var qs = buildPathQuestions(p, cfg);
    if (p.kind !== 'case') {
      var extra = personalQs(p, cfg);
      if (extra.length) {
        var firstSec = (p.sections[0] || {}).id, at = 0;
        qs.forEach(function (q, i) { if (q.sec === firstSec) at = i + 1; });
        Array.prototype.splice.apply(qs, [at, 0].concat(extra));
      }
    }
    qs = framePhases(qs, cfg);
    cfg.count = qs.length;
    var cfg0 = JSON.parse(JSON.stringify(cfg)); state.restart = function () { startPathSession(cfg0); };
    saveSpecCfg({ pathId: cfg.pathId, dur: cfg.dur, difficulty: cfg.difficulty, style: cfg.style, persona: cfg.persona, caseId: cfg.caseId || '', company: cfg.company || '', roleText: cfg.roleText || '', jd: cfg.jd || '', roleId: cfg.roleId || '' });
    state.drill = false;
    state.session = { cfg: cfg, qs: qs, idx: 0, answers: [], startedAt: Date.now(), mode: cfg.mode, done: false, greeted: false, path: p.id, caseId: cfg._case || null, facts: null };
    renderQuestion();
  }

  /* ── scoring extensions: look-for coverage, numeric checks, case steps ── */
  var TARGET = { rapport: 30, eligibility: 45, closing: 60, motivational: 105, self_assessment: 100, situational: 110, technical: 140, behavioural: 120, 'case': 120,
    clarify: 60, structure: 120, quant: 120, insight: 100, brainstorm: 120, synthesis: 75 };
  function targetSecs(q, s) {
    var t = TARGET[q.step] || TARGET[profileFor(q)] || 120;
    if (s && s.cfg && s.cfg.difficulty === 3) t = Math.round(t * 0.8);
    return t;
  }
  function clampS(v) { return Math.max(0, Math.min(98, Math.round(v))); }
  function specialise(a, q, text, numRaw) {
    var t = String(text || '');
    if (q.look && q.look.length && !a.limited) {
      var hit = [], miss = [];
      q.look.forEach(function (k) { var ok = false; try { ok = new RegExp(k.re, 'i').test(t); } catch (e) {} (ok ? hit : miss).push(k); });
      if (q.step === 'synthesis' && hit.length && q.look[0] && hit.indexOf(q.look[0]) !== -1) {
        var m0 = t.search(new RegExp(q.look[0].re, 'i'));
        if (m0 > t.length * 0.4) { hit.splice(hit.indexOf(q.look[0]), 1); miss.unshift({ n: { en: 'Answer first (yours came late)', id: 'Jawaban di awal (jawabanmu datang terlambat)' } }); }
      }
      a.look = { hit: hit.map(function (k) { return L(k.n); }), miss: miss.map(function (k) { return L(k.n); }), ratio: hit.length / q.look.length };
    }
    if (q.num) {
      var val = (numRaw && String(numRaw).trim()) ? bestNum(numRaw, q.num.v) : null;
      if (val == null) val = bestNum(t, q.num.v);
      var tol = q.num.tol != null ? q.num.tol : Math.abs(q.num.v) * 0.01;
      var diff = val == null ? null : Math.abs(val - q.num.v);
      var verdict = val == null ? 'none' : diff <= tol + 1e-9 ? 'ok' : diff <= Math.max(tol * 3, Math.abs(q.num.v) * 0.05) ? 'close' : 'off';
      a.num = { given: val, expected: q.num.v, unit: q.num.unit, verdict: verdict };
      if (a.limited && val != null) { a.limited = false; a.words = a.words || 0; }
    }
    if (q.step === 'clarify' && SP && q.caseId) {
      var c = SP.cases[q.caseId], asked = [], vol = [];
      (c.facts || []).forEach(function (f) { var ok = false; try { ok = new RegExp(f.re, 'i').test(t); } catch (e) {} if (ok) asked.push(f); else if (f.key) vol.push(f); });
      var nq = (t.match(/\?/g) || []).length;
      a.reveal = { asked: asked.map(function (f) { return L(f.n); }), volunteered: vol.map(function (f) { return L(f.n); }), questions: nq };
      a.caseFacts = asked.map(function (f) { return { n: f.n, fact: f.fact, asked: true }; }).concat(vol.map(function (f) { return { n: f.n, fact: f.fact, asked: false }; }));
    }
    if (q.step === 'brainstorm' && !a.limited) {
      var segs = t.split(/\n+|;|•|·|\s[-–]\s|\b\d+[.)]\s|(?:\.\s+)/).filter(function (x) { return (x.match(/\S+/g) || []).length >= 2; });
      a.ideas = Math.min(12, segs.length);
    }
    a.dimScore = dimScoreFor(a, q);
    if (a.look) a.content = clampS(a.content * 0.5 + (25 + a.look.ratio * 75) * 0.5);
    if (a.num) a.content = clampS(numScore(a) * 0.8 + (a.content || 0) * 0.2);
    return a;
  }
  function numScore(a) { var v = a.num && a.num.verdict; return v === 'ok' ? 96 : v === 'close' ? 62 : v === 'off' ? 24 : 8; }
  function dimScoreFor(a, q) {
    if (a.limited) return 0;
    var base = Math.round((a.content || 0) * 0.45 + (a.structure || 0) * 0.35 + (a.comm || 0) * 0.2);
    var lookS = a.look ? 25 + a.look.ratio * 75 : null;
    if (q.step === 'clarify') return clampS(28 + Math.min(a.reveal ? a.reveal.asked.length : 0, 3) * 20 + ((a.reveal && a.reveal.questions) ? 8 : 0));
    if (q.num) return clampS(lookS != null ? numScore(a) * 0.75 + lookS * 0.25 : numScore(a) * 0.85 + base * 0.15);
    if (q.step === 'brainstorm') return clampS(18 + Math.min(a.ideas || 0, 8) * 6 + (a.look ? a.look.ratio * 34 : 0));
    if (lookS != null) return clampS(lookS * 0.6 + base * 0.4);
    return clampS(base);
  }
  function feedbackAll(a, q) {
    var base = feedbackFor(a, q);
    if (!(a.look || a.num || q.step)) return base;
    var s = [], w = [], c = [];
    if (a.num) {
      var want = fmtUnit(a.num.expected, a.num.unit), got = fmtUnit(a.num.given, a.num.unit);
      if (a.num.verdict === 'ok') s.push(T('Correct — ' + want + '.', 'Benar — ' + want + '.'));
      else if (a.num.verdict === 'close') { w.push(T('Close, not exact: you gave ' + got + '; the answer is ' + want + '.', 'Dekat, belum tepat: kamu menjawab ' + got + '; jawabannya ' + want + '.')); c.push(T('Redo the arithmetic step by step and say the units aloud.', 'Ulangi hitungannya langkah demi langkah dan ucapkan satuannya.')); }
      else if (a.num.verdict === 'off') { w.push(T('Your number (' + got + ') does not match the answer (' + want + ').', 'Angkamu (' + got + ') tidak cocok dengan jawabannya (' + want + ').')); c.push(T('Read the worked solution, then redo it without looking.', 'Baca penyelesaiannya, lalu kerjakan ulang tanpa melihat.')); }
      else { w.push(T('No number was given.', 'Tidak ada angka yang diberikan.')); c.push(T('Commit to a number, even a rough one — the attempt is what gets marked.', 'Berani menyebut angka, meski kasar — upaya itulah yang dinilai.')); }
    }
    if (a.reveal) {
      if (a.reveal.asked.length) s.push(T('You clarified: ', 'Kamu mengklarifikasi: ') + a.reveal.asked.join(' · '));
      else w.push(T('No clarifying question reached the essentials — you started solving blind.', 'Tak ada pertanyaan klarifikasi yang menyentuh hal pokok — kamu mulai menyelesaikan tanpa arah.'));
      if (a.reveal.volunteered.length) c.push(T('Ask about ' + a.reveal.volunteered.join(' and ') + ' before structuring; the interviewer had to volunteer it.', 'Tanyakan ' + a.reveal.volunteered.join(' dan ') + ' sebelum menyusun struktur; pewawancara terpaksa memberitahukannya.'));
    }
    if (q.step === 'brainstorm') {
      if ((a.ideas || 0) >= 6) s.push(T((a.ideas) + ' distinct ideas — good breadth.', (a.ideas) + ' ide berbeda — keluasan yang baik.'));
      else { w.push(T('Only ' + (a.ideas || 0) + ' distinct ideas.', 'Hanya ' + (a.ideas || 0) + ' ide berbeda.')); c.push(T('Aim for six or more, grouped into two or three buckets you name first.', 'Targetkan enam ide atau lebih, dikelompokkan ke dua atau tiga keranjang yang kamu sebut lebih dulu.')); }
    }
    if (a.look) {
      if (a.look.hit.length) s.push(T('Covered: ', 'Tercakup: ') + a.look.hit.join(' · '));
      if (a.look.miss.length) { w.push(T('Not yet covered: ', 'Belum tercakup: ') + a.look.miss.join(' · ')); c.push(T('Add next time: ', 'Tambahkan lain kali: ') + a.look.miss.slice(0, 2).join(T(' and ', ' dan '))); }
    }
    if (a.num && (a.words || 0) < 8) { w.push(T('No working shown — interviewers mark the method as well as the number.', 'Tanpa cara hitung — pewawancara menilai caranya, bukan hanya angkanya.')); c.push(T('Say the chain out loud in one or two sentences: what you multiplied or divided, and why.', 'Ucapkan rantai hitungnya dalam satu atau dua kalimat: apa yang kamu kalikan atau bagi, dan mengapa.')); }
    if (a.fillers >= 4) w.push(T(a.fillers + ' filler words in the transcript.', a.fillers + ' kata pengisi di transkrip.'));
    if (!q.step && !q.num) { s = s.concat(base.strengths); w = w.concat(base.weaknesses); c = c.concat(base.changes); }
    if (!s.length) s = base.strengths.slice(0, 1);
    var special = !!(q.step || q.num);
    if (!w.length && !special) w = base.weaknesses.slice(0, 1);
    if (!c.length) c = special ? [T('Keep this step as it is and rehearse it once more against the clock.', 'Pertahankan tahap ini dan latih sekali lagi dengan batas waktu.')] : base.changes.slice(0, 1);
    return { strengths: s.slice(0, 3), weaknesses: w.slice(0, 3), changes: c.slice(0, 3) };
  }

  /* ── report data ── */
  function pathDims(s) {
    var p = s && s.cfg && pathById(s.cfg.pathId);
    if (!p) return null;
    var main = s.answers.filter(function (a) { return !a.followup; });
    var comms = main.filter(function (a) { return !a.skipped && a.text && a.analysis && !a.analysis.limited && !a.warm; }).map(function (a) { return a.analysis.comm; });
    var probeAns = s.answers.filter(function (a) { return a.followup && !a.skipped && a.analysis && !a.analysis.limited; });
    return p.dims.map(function (d) {
      var mine = main.filter(function (a) { return a.dim === d.id; });
      var scored = mine.filter(function (a) { return !a.skipped; }).map(function (a) { return a.analysis && a.analysis.dimScore != null ? a.analysis.dimScore : 0; });
      var skipped = mine.filter(function (a) { return a.skipped; }).length;
      var v = null;
      if (d.id === 'presence') {
        var pool = scored.concat(comms);
        if (probeAns.length) pool.push(Math.round(probeAns.filter(function (a) { return a.probe && a.probe.held; }).length / probeAns.length * 100));
        v = pool.length ? Math.round(pool.reduce(function (t, x) { return t + x; }, 0) / pool.length) : null;
      } else if (scored.length || skipped) {
        v = Math.round(scored.concat(new Array(skipped).fill(0)).reduce(function (t, x) { return t + x; }, 0) / (scored.length + skipped));
      }
      return { id: d.id, name: d.name, desc: d.desc, v: v, n: mine.length };
    });
  }
  function overallOf(dims, sc) {
    if (dims) { var got = dims.filter(function (d) { return d.v != null; }); return got.length ? Math.round(got.reduce(function (t, d) { return t + d.v; }, 0) / got.length) : 0; }
    return Math.round((sc.content + sc.structure + sc.comm) / 3);
  }
  function band(v) {
    if (v >= 80) return { k: 'strong', t: T('Strong — ready for this format', 'Kuat — siap untuk format ini') };
    if (v >= 65) return { k: 'good', t: T('Competitive — polish two areas', 'Kompetitif — poles dua area') };
    if (v >= 50) return { k: 'mid', t: T('Developing — practise the gaps', 'Berkembang — latih celahnya') };
    return { k: 'low', t: T('Early — rebuild the foundations', 'Awal — bangun ulang fondasinya') };
  }
  function ring(v, size) {
    size = size || 132; var r = size / 2 - 9, c = 2 * Math.PI * r, off = c * (1 - Math.max(0, Math.min(100, v)) / 100);
    return '<svg class="rsx-ring" width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" role="img" aria-label="' + v + ' / 100">' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" class="rg-bg"/>' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" class="rg-fg" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '" transform="rotate(-90 ' + size / 2 + ' ' + size / 2 + ')"/>' +
      '<text x="50%" y="50%" class="rg-v" dominant-baseline="central" text-anchor="middle">' + v + '</text></svg>';
  }
  function mmss(sec) { sec = Math.max(0, Math.round(sec || 0)); return Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0'); }
  function transcriptTurns(s) {
    var per = persona(), p = s.cfg && pathById(s.cfg.pathId), turns = [];
    var lastSec = null;
    s.answers.forEach(function (a) {
      var secN = a.secName ? L(a.secName) : '';
      if (secN && secN !== lastSec) { turns.push({ w: 's', t: secN }); lastSec = secN; }
      turns.push({ w: 'i', t: a.followup || a.q, at: a.askedAt || 0, f: a.followup ? 1 : 0 });
      var body = a.skipped ? T('[skipped]', '[dilewati]') : (a.text || (a.fmt !== 'text' ? T('[recording only — no transcript]', '[hanya rekaman — tanpa transkrip]') : ''));
      if (a.numRaw) body = (body ? body + '\n' : '') + T('Numeric answer: ', 'Jawaban angka: ') + a.numRaw;
      turns.push({ w: 'c', t: body, at: a.answeredAt || 0 });
    });
    return { who: L(per.name), title: p ? L(p.title) : T('Custom session', 'Sesi kustom'), turns: turns };
  }
  function transcriptText(tx, at) {
    var lines = [tx.title + ' — ' + new Date(at || Date.now()).toLocaleString(lang() === 'id' ? 'id-ID' : 'en-GB'), ''];
    tx.turns.forEach(function (t) {
      if (t.w === 's') { lines.push('', '— ' + t.t + ' —'); return; }
      lines.push('[' + mmss(t.at) + '] ' + (t.w === 'i' ? tx.who : T('You', 'Kamu')) + ': ' + t.t);
    });
    lines.push('', T('Simulated interviewer, transcript produced on your device by Metanoia Labs · The Rope.', 'Pewawancara simulasi, transkrip dibuat di perangkatmu oleh Metanoia Labs · The Rope.'));
    return lines.join('\n');
  }
  function transcriptEl(tx, at) {
    var box = el('div', 'rsx-tx');
    tx.turns.forEach(function (t) {
      if (t.w === 's') { box.appendChild(el('div', 'tx-sec', esc(t.t))); return; }
      var row = el('div', 'tx-row ' + (t.w === 'i' ? 'tx-i' : 'tx-c'));
      row.appendChild(el('div', 'tx-who', (t.w === 'i' ? esc(tx.who) : T('You', 'Kamu')) + ' <span>' + mmss(t.at) + '</span>'));
      row.appendChild(el('div', 'tx-b', esc(t.t).replace(/\n/g, '<br>')));
      box.appendChild(row);
    });
    var tools = el('div', 'rsim-row');
    var cp = el('button', 'rsim-btn ghost', T('Copy transcript', 'Salin transkrip'));
    cp.addEventListener('click', function () { var txt = transcriptText(tx, at); try { navigator.clipboard.writeText(txt).then(function () { cp.textContent = T('Copied ✓', 'Tersalin ✓'); }); } catch (e) {} });
    var dl = el('button', 'rsim-btn ghost', T('Download .txt', 'Unduh .txt'));
    dl.addEventListener('click', function () {
      var blob = new Blob([transcriptText(tx, at)], { type: 'text/plain;charset=utf-8' });
      var a = document.createElement('a'); a.href = URL.createObjectURL(blob);
      a.download = 'metanoia-interview-' + new Date(at || Date.now()).toISOString().slice(0, 10) + '.txt';
      document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 400);
    });
    tools.appendChild(cp); tools.appendChild(dl);
    var wrap = el('div'); wrap.appendChild(box); wrap.appendChild(tools);
    return wrap;
  }

  /* ── exhibits ── */
  function exhibitEl(ex, label) {
    var fig = el('figure', 'rsx-ex');
    fig.appendChild(el('figcaption', null, '<span class="rsx-ex-k">' + esc(label || T('Exhibit', 'Eksibit')) + '</span><b>' + esc(L(ex.title)) + '</b>'));
    if (ex.kind === 'table') {
      var h = '<div class="rsx-tw"><table><thead><tr>' + ex.head.map(function (c) { return '<th>' + esc(cellTxt(c)) + '</th>'; }).join('') + '</tr></thead><tbody>';
      ex.rows.forEach(function (r, ri) {
        var first = cellTxt(r[0]), sub = /^·/.test(first), tot = ri === ex.rows.length - 1 && /profit|laba|total/i.test(first);
        h += '<tr class="' + (sub ? 'sub' : '') + (tot ? ' tot' : '') + '">' + r.map(function (c, ci) { return '<td' + (ci ? ' class="n"' : '') + '>' + esc(ci ? cellTxt(c) : first.replace(/^·\s*/, '')) + '</td>'; }).join('') + '</tr>';
      });
      h += '</tbody></table></div>';
      fig.appendChild(el('div', null, h));
    } else if (ex.kind === 'bars') {
      var vals = ex.series[0].values, mx = Math.max.apply(null, vals) || 1;
      var bars = el('div', 'rsx-bars');
      ex.cats.forEach(function (c, i) {
        var r = el('div', 'rb');
        r.appendChild(el('span', 'rb-l', esc(L(c))));
        var tr = el('div', 'rb-t'); var f = el('i'); f.style.width = Math.max(3, vals[i] / mx * 100) + '%'; tr.appendChild(f); r.appendChild(tr);
        r.appendChild(el('b', null, esc(ex.unit === 'Rp' ? 'Rp ' + nf(vals[i]) : ex.unit === '%' ? nf(vals[i]) + '%' : nf(vals[i]))));
        bars.appendChild(r);
      });
      fig.appendChild(bars);
    }
    if (ex.note) fig.appendChild(el('p', 'rsx-ex-note', esc(L(ex.note))));
    return fig;
  }

  /* ── icons ── */
  var SVGI = {
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
    code: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/>',
    cube: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>',
    bank: '<path d="M3 10 12 4l9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    cap: '<path d="m2 9 10-5 10 5-10 5Z"/><path d="M6 11v5c3 2 9 2 12 0v-5M22 9v6"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    crown: '<path d="m3 8 4.5 4L12 5l4.5 7L21 8l-2 11H5Z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    sliders: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    report: '<path d="M5 3h10l4 4v14H5Z"/><path d="M9 13v4M12 10v7M15 14v3"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    doc: '<path d="M6 3h9l3 3v15H6Z"/><path d="M9 9h6M9 13h6M9 17h4"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7Z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5M4 16v4h16v-4"/>',
    check: '<path d="m5 12 5 5 9-10"/>'
  };
  SVGI.cc = '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 10.5a2 2 0 1 0 0 3M16 10.5a2 2 0 1 0 0 3"/>';
  SVGI.replay = '<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>';
  SVGI.sound = '<path d="M4 10v4h4l5 4V6L8 10H4Z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/>';
  SVGI.camera = '<rect x="3" y="7" width="13" height="10" rx="2"/><path d="m16 11 5-3v8l-5-3"/>';
  SVGI.restart = '<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/>';
  function ic(name, cls) { return '<svg class="' + (cls || 'rsx-ic') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (SVGI[name] || '') + '</svg>'; }
  var KIND = {
    fit: { en: 'Fit', id: 'Fit' }, 'case': { en: 'Case', id: 'Kasus' }, technical: { en: 'Technical', id: 'Teknis' },
    behavioural: { en: 'Behavioural', id: 'Perilaku' }, panel: { en: 'Panel', id: 'Panel' }, screen: { en: 'Screen', id: 'Seleksi' }
  };
  function pathMinutes(p) { return (SP ? SP.durations : []).map(function (d) { return d.mins; }); }
  function pathHist(id) { return history().filter(function (h) { return h.pathId === id; }); }
  function imgSrc(p) { return '../../' + p.img; }

  /* ═══ HOME — the Interview Specialist ═══ */
  function renderHome() {
    var w = setScreen('home', 'find');
    w.classList.add('rsx-wide');
    var h = history();
    var hero = el('section', 'rsx-hero');
    hero.innerHTML = '<div class="rsx-hero-bg" aria-hidden="true"></div>' +
      '<div class="rsx-hero-in">' +
      '<div class="rsx-kick">' + T('The Rope · AI Interview Specialist', 'The Rope · Spesialis Wawancara AI') + '</div>' +
      '<h2>' + T('Practise the interview you are actually facing — any time, as often as you need.', 'Latih wawancara yang benar-benar akan kamu hadapi — kapan saja, sesering yang kamu butuhkan.') + '</h2>' +
      '<p>' + T('Pick a path, tune the session to your CV and target role, answer an AI interviewer that listens and follows up, then get a scored report with a full transcript and a plan for the next round.', 'Pilih jalur, sesuaikan sesi dengan CV dan peran tujuanmu, jawab pewawancara AI yang mendengar dan mengejar, lalu dapatkan laporan bernilai lengkap dengan transkrip dan rencana untuk putaran berikutnya.') + '</p>' +
      '<div class="rsx-badges"><span>' + ic('clock') + T('On demand, 24/7', 'Kapan saja, 24/7') + '</span><span>' + ic('user') + T('Personalised to your CV', 'Dipersonalisasi dari CV-mu') + '</span><span>' + ic('report') + T('Report & full transcript', 'Laporan & transkrip lengkap') + '</span><span>' + ic('lock') + T('Runs on your device', 'Berjalan di perangkatmu') + '</span></div>' +
      '</div>';
    var cta = el('div', 'rsx-hero-cta');
    var go = el('button', 'rsim-btn', T('Find your interview ↓', 'Cari wawancaramu ↓'));
    go.addEventListener('click', function () { var t = w.querySelector('#rsxCat'); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    cta.appendChild(go);
    var last = specCfgs()._last && pathById(specCfgs()._last);
    if (last) {
      var rs = el('button', 'rsim-btn ghost', T('Resume: ', 'Lanjutkan: ') + esc(L(last.title)));
      rs.addEventListener('click', function () { renderPath(last.id); });
      cta.appendChild(rs);
    }
    if (h.length) {
      var pr = el('button', 'rsim-btn ghost', ic('chart') + T('Your progress', 'Perkembanganmu'));
      pr.addEventListener('click', renderHistory);
      cta.appendChild(pr);
    }
    hero.querySelector('.rsx-hero-in').appendChild(cta);
    w.appendChild(hero);

    /* how it works */
    var how = el('section', 'rsx-how');
    how.appendChild(el('div', 'rsx-sec-k', T('How it works', 'Cara kerjanya')));
    var steps = el('ol', 'rsx-steps');
    [['search', T('Find an interview that fits', 'Temukan wawancara yang cocok'), T('Choose by industry, role and format — consulting, tech, finance, scholarships and more.', 'Pilih berdasarkan industri, peran, dan format — konsultan, teknologi, keuangan, beasiswa, dan lainnya.')],
     ['sliders', T('Customise your session', 'Sesuaikan sesimu'), T('Add your CV, set duration, difficulty and the interviewer’s style.', 'Tambahkan CV, atur durasi, tingkat kesulitan, dan gaya pewawancara.')],
     ['mic', T('Practise with the AI interviewer', 'Berlatih dengan pewawancara AI'), T('Answer by voice, video or text. It listens, follows up and pushes back.', 'Jawab lewat suara, video, atau teks. Ia mendengar, mengejar, dan menyanggah.')],
     ['report', T('Review your report', 'Tinjau laporanmu'), T('Scores by dimension, strengths, priorities, a full transcript and your next round.', 'Skor per dimensi, kekuatan, prioritas, transkrip lengkap, dan putaran berikutnya.')]].forEach(function (s2, i) {
      var li = el('li');
      li.innerHTML = '<span class="st-n">' + (i + 1) + '</span>' + ic(s2[0], 'st-ic') + '<b>' + s2[1] + '</b><span>' + s2[2] + '</span>';
      steps.appendChild(li);
    });
    how.appendChild(steps);
    w.appendChild(how);

    /* progress snapshot */
    if (h.length) {
      var lastS = h[h.length - 1], ov = lastS.overall != null ? lastS.overall : Math.round((lastS.content + lastS.structure + lastS.comm) / 3);
      var lp = lastS.pathId && pathById(lastS.pathId);
      var snap = el('section', 'rsx-snap');
      snap.innerHTML = '<div class="sn-l">' + ring(ov, 74) + '<div><span class="rsx-sec-k">' + T('Last session', 'Sesi terakhir') + '</span><b>' + esc(lp ? L(lp.title) : T('Custom session', 'Sesi kustom')) + '</b><span>' +
        new Date(lastS.at).toLocaleDateString(lang() === 'id' ? 'id-ID' : 'en-GB') + ' · ' + h.length + ' ' + T('sessions in total', 'sesi secara keseluruhan') + '</span></div></div>';
      snap.appendChild(sparkEl(h.slice(-12).map(function (x) { return x.overall != null ? x.overall : Math.round((x.content + x.structure + x.comm) / 3); })));
      var ob = el('button', 'rsim-btn ghost', T('Open dashboard →', 'Buka dasbor →'));
      ob.addEventListener('click', renderHistory);
      snap.appendChild(ob);
      w.appendChild(snap);
    }

    /* catalogue */
    var cat = el('section', 'rsx-cat'); cat.id = 'rsxCat';
    var head = el('div', 'rsx-cat-h');
    head.appendChild(el('div', null, '<div class="rsx-sec-k">' + T('Interview paths', 'Jalur wawancara') + '</div><h3>' + T('Choose the interview you want to practise', 'Pilih wawancara yang ingin kamu latih') + '</h3>'));
    var sbox = el('label', 'rsx-search'); sbox.innerHTML = ic('search');
    var sIn = document.createElement('input'); sIn.type = 'search'; sIn.placeholder = T('Search interviews, roles, industries…', 'Cari wawancara, peran, industri…'); sIn.setAttribute('aria-label', T('Search interviews', 'Cari wawancara'));
    sbox.appendChild(sIn); head.appendChild(sbox);
    cat.appendChild(head);
    var chips = el('div', 'rsx-chips'); chips.setAttribute('role', 'tablist');
    var cur = 'all';
    (SP ? SP.cats : []).forEach(function (c) {
      var n = c.id === 'all' ? specPaths().length : specPaths().filter(function (p) { return p.cat === c.id; }).length;
      var b = el('button', 'rsx-chip' + (c.id === cur ? ' on' : ''), ic(c.icon) + '<span>' + esc(L(c.name)) + '</span><em>' + n + '</em>');
      b.type = 'button'; b.dataset.c = c.id; b.setAttribute('role', 'tab');
      b.addEventListener('click', function () { cur = c.id; chips.querySelectorAll('.rsx-chip').forEach(function (x) { x.classList.toggle('on', x.dataset.c === cur); }); draw(); });
      chips.appendChild(b);
    });
    cat.appendChild(chips);
    var grid = el('div', 'rsx-grid');
    cat.appendChild(grid);
    var empty = el('p', 'rsx-empty', T('No path matches that search yet. Try a broader word, or build your own session below.', 'Belum ada jalur yang cocok. Coba kata yang lebih umum, atau buat sesimu sendiri di bawah.'));
    cat.appendChild(empty);
    function draw() {
      grid.innerHTML = '';
      var q = sIn.value.trim().toLowerCase();
      var list = specPaths().filter(function (p) {
        if (cur !== 'all' && p.cat !== cur) return false;
        if (!q) return true;
        return (L(p.title) + ' ' + L(p.short) + ' ' + p.title.en + ' ' + p.short.en + ' ' + p.cat + ' ' + L(KIND[p.kind] || {})).toLowerCase().indexOf(q) !== -1;
      });
      list.forEach(function (p) { grid.appendChild(pathCard(p)); });
      empty.style.display = list.length ? 'none' : '';
      if (cur === 'all' && !q) {
        grid.appendChild(toolCard('plus', T('Build your own session', 'Buat sesimu sendiri'), T('Any role from the career graph, any stage, your own question mix and difficult situations.', 'Peran apa pun dari peta karier, tahap apa pun, campuran pertanyaan dan situasi sulitmu sendiri.'), function () { renderSetup(); }));
        grid.appendChild(toolCard('bolt', T('Interview tomorrow? Fast-Track', 'Wawancara besok? Jalur Cepat'), T('Six priorities for tonight and a four-question sprint against your job description.', 'Enam prioritas untuk malam ini dan sprint empat pertanyaan dari deskripsi pekerjaanmu.'), renderFastTrack));
      }
    }
    sIn.addEventListener('input', draw);
    draw();
    w.appendChild(cat);

    /* what every session includes */
    var feat = el('section', 'rsx-feat');
    feat.appendChild(el('div', 'rsx-sec-k', T('Built into every session', 'Ada di setiap sesi')));
    var fg = el('div', 'rsx-feat-g');
    [['clock', T('On-demand mock interviews', 'Simulasi wawancara kapan saja'), T('No scheduling. Start, pause and repeat at your own pace.', 'Tanpa jadwal. Mulai, jeda, dan ulangi sesuai ritmemu.')],
     ['target', T('Personalised, quantified feedback', 'Umpan balik personal & terukur'), T('Scores for each dimension of the format, from a rubric you can read.', 'Skor tiap dimensi format, dari rubrik yang bisa kamu baca.')],
     ['chart', T('Progress analysis', 'Analisis perkembangan'), T('Every session is tracked so you can see each dimension move.', 'Setiap sesi tercatat sehingga kamu melihat tiap dimensi bergerak.')],
     ['briefcase', T('Real-world scenarios', 'Skenario dunia nyata'), T('Industry- and role-specific questions, cases and exhibits.', 'Pertanyaan, kasus, dan eksibit khusus industri dan peran.')],
     ['sliders', T('Interview customisation', 'Kustomisasi wawancara'), T('Duration, difficulty, interviewer style, format and your CV.', 'Durasi, tingkat kesulitan, gaya pewawancara, format, dan CV-mu.')],
     ['doc', T('Full transcripts', 'Transkrip lengkap'), T('Every question, follow-up and answer — to review, copy or download.', 'Setiap pertanyaan, pertanyaan lanjutan, dan jawaban — untuk ditinjau, disalin, atau diunduh.')]].forEach(function (f) {
      var d = el('div', 'fe'); d.innerHTML = ic(f[0]) + '<b>' + f[1] + '</b><span>' + f[2] + '</span>'; fg.appendChild(d);
    });
    feat.appendChild(fg);
    w.appendChild(feat);

    var integ = document.createElement('details'); integ.className = 'rsim-card rsx-integ';
    integ.innerHTML = '<summary>' + T('How scoring works, and interview integrity', 'Cara penilaian bekerja, dan integritas wawancara') + '</summary><div class="rsim-integrity" style="margin-top:12px">' +
      T('The interviewer is a simulation — an animated portrait with a synthetic voice, labelled on screen — that asks, listens and follows up based on what you actually said. Scores come from a transparent rubric computed in this browser: structure, evidence, the elements each question looks for, exact checks on numeric answers, and delivery. They are a practice readout, not a prediction of any hiring decision. Paths simulate common interview formats and are not affiliated with any employer, firm or scholarship body; case clients and exhibits are fictional. Your voice, video and CV never leave this browser; text transcripts of your last twelve sessions are kept here so you can review them, and you can delete them on the progress page. Metanoia deliberately offers no assistance during real interviews.',
        'Pewawancara adalah simulasi — potret beranimasi dengan suara sintetis, diberi label di layar — yang bertanya, mendengar, dan mengejar berdasarkan jawabanmu yang sebenarnya. Skor berasal dari rubrik transparan yang dihitung di peramban ini: struktur, bukti, elemen yang dicari tiap pertanyaan, pemeriksaan tepat atas jawaban angka, dan penyampaian. Skor adalah hasil latihan, bukan prediksi keputusan rekrutmen mana pun. Jalur menyimulasikan format wawancara umum dan tidak berafiliasi dengan pemberi kerja, firma, atau lembaga beasiswa mana pun; klien dan eksibit kasus bersifat fiktif. Suara, video, dan CV-mu tidak pernah meninggalkan peramban ini; transkrip teks dari dua belas sesi terakhirmu disimpan di sini agar bisa kamu tinjau, dan bisa kamu hapus di halaman perkembangan. Metanoia sengaja tidak menyediakan bantuan apa pun selama wawancara sungguhan.') + '</div>';
    w.appendChild(integ);
  }
  function sparkEl(vals) {
    var wv = 160, hv = 44, d = el('div', 'rsx-spark');
    if (vals.length < 2) { d.innerHTML = '<span class="rsim-note" style="margin:0">' + T('Your trend appears after two sessions.', 'Trenmu muncul setelah dua sesi.') + '</span>'; return d; }
    var pts = vals.map(function (v, i) { return [(i / (vals.length - 1)) * (wv - 8) + 4, hv - 4 - (v / 100) * (hv - 8)]; });
    d.innerHTML = '<svg width="' + wv + '" height="' + hv + '" viewBox="0 0 ' + wv + ' ' + hv + '" aria-hidden="true"><polyline points="' + pts.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ') + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>' +
      '<circle cx="' + pts[pts.length - 1][0].toFixed(1) + '" cy="' + pts[pts.length - 1][1].toFixed(1) + '" r="3.5" fill="currentColor"/></svg>';
    return d;
  }
  function pathCard(p) {
    var b = el('button', 'rsx-card'); b.type = 'button';
    var ph = pathHist(p.id), best = ph.length ? Math.max.apply(null, ph.map(function (x) { return x.overall || 0; })) : null;
    var mins = pathMinutes(p);
    b.innerHTML = '<span class="cd-img"><img src="' + imgSrc(p) + '" alt="" loading="lazy" decoding="async" style="object-position:' + (p.pos || '50% 50%') + '"><span class="cd-kind">' + esc(L(KIND[p.kind] || {})) + '</span>' +
      (ph.length ? '<span class="cd-done">' + ic('check') + T('Practised ', 'Dilatih ') + ph.length + '× · ' + T('best ', 'terbaik ') + best + '</span>' : '') + '</span>' +
      '<span class="cd-body"><b>' + esc(L(p.title)) + '</b><span class="cd-desc">' + esc(L(p.short)) + '</span>' +
      '<span class="cd-meta"><span>' + ic('clock') + mins[0] + '–' + mins[mins.length - 1] + ' ' + T('min', 'mnt') + '</span><span>' + ic('user') + esc(L(p.personaTitle || {}).split(' · ')[0]) + '</span></span></span>';
    b.addEventListener('click', function () { renderPath(p.id); });
    return b;
  }
  function toolCard(icon, title, desc, fn) {
    var b = el('button', 'rsx-card rsx-tool'); b.type = 'button';
    b.innerHTML = '<span class="tl-ic">' + ic(icon) + '</span><span class="cd-body"><b>' + title + '</b><span class="cd-desc">' + desc + '</span></span>';
    b.addEventListener('click', fn);
    return b;
  }

  /* ═══ PATH — overview + customise ═══ */
  function renderPath(id) {
    var p = pathById(id);
    if (!p) { renderHome(); return; }
    var w = setScreen('path', 'customise');
    w.classList.add('rsx-wide');
    var saved = specCfgs()[p.id] || {};
    var cfg = { pathId: p.id, dur: saved.dur || 'standard', difficulty: saved.difficulty || 2, style: saved.style || 'neutral', persona: saved.persona || p.persona || 'hr',
      caseId: saved.caseId || '', company: saved.company || '', roleText: saved.roleText || '', jd: saved.jd || '', roleId: saved.roleId || '' };
    var back = el('button', 'rsx-back', '← ' + T('All interviews', 'Semua wawancara'));
    back.addEventListener('click', renderHome);
    w.appendChild(back);
    var lay = el('div', 'rsx-path');
    var left = el('div', 'rsx-pl'), right = el('aside', 'rsx-pr');
    lay.appendChild(left); lay.appendChild(right);
    w.appendChild(lay);

    /* left: overview */
    var hd = el('div', 'rsx-ph');
    hd.innerHTML = '<img src="' + imgSrc(p) + '" alt="" style="object-position:' + (p.pos || '50% 50%') + '"><div class="ph-veil"></div><div class="ph-in"><span class="rsx-kick">' + esc(L(KIND[p.kind] || {})) + ' · ' + esc(L(((SP.cats.filter(function (c) { return c.id === p.cat; })[0]) || {}).name || {})) + '</span><h2>' + esc(L(p.title)) + '</h2></div>';
    left.appendChild(hd);
    left.appendChild(el('p', 'rsx-about', esc(L(p.about))));
    var dimsC = el('div', 'rsim-card');
    dimsC.appendChild(el('div', 'rsim-kick', T('What you are assessed on', 'Yang dinilai darimu')));
    var dl = el('div', 'rsx-dimlist');
    p.dims.forEach(function (d) { dl.appendChild(el('div', 'dl', '<b>' + esc(L(d.name)) + '</b><span>' + esc(L(d.desc)) + '</span>')); });
    dimsC.appendChild(dl);
    left.appendChild(dimsC);
    var flowC = el('div', 'rsim-card');
    flowC.appendChild(el('div', 'rsim-kick', T('How this session runs', 'Alur sesi ini')));
    var flowL = el('ol', 'rsx-flow'); flowC.appendChild(flowL);
    var persBox = el('div', 'rsx-persprev'); flowC.appendChild(persBox);
    left.appendChild(flowC);
    if (p.tips && p.tips.length) {
      var tipC = el('div', 'rsim-card');
      tipC.appendChild(el('div', 'rsim-kick', T('Prepare before you start', 'Persiapkan sebelum mulai')));
      p.tips.forEach(function (t) { var r = el('div', 'rsim-check'); r.appendChild(el('i', null, '→')); r.appendChild(el('span', null, esc(L(t)))); tipC.appendChild(r); });
      left.appendChild(tipC);
    }

    /* right: customise */
    var cz = el('div', 'rsim-card rsx-cz');
    cz.appendChild(el('div', 'rsim-kick', T('Customise your session', 'Sesuaikan sesimu')));
    function seg(label, opts, val, on) {
      var f = el('div', 'rsx-f'); f.appendChild(el('label', null, label));
      var g = el('div', 'rsx-seg'); g.setAttribute('role', 'radiogroup');
      opts.forEach(function (o) {
        var b = el('button', String(o.v) === String(val) ? 'on' : '', '<b>' + o.t + '</b>' + (o.s ? '<span>' + o.s + '</span>' : ''));
        b.type = 'button'; b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', String(o.v) === String(val) ? 'true' : 'false');
        b.addEventListener('click', function () { g.querySelectorAll('button').forEach(function (x) { x.classList.remove('on'); x.setAttribute('aria-checked', 'false'); }); b.classList.add('on'); b.setAttribute('aria-checked', 'true'); on(o.v); });
        g.appendChild(b);
      });
      f.appendChild(g); cz.appendChild(f); return g;
    }
    function countFor(dur) {
      if (p.kind === 'case') { var c0 = SP.cases[p.cases[0]]; return c0.plan[dur].length; }
      var di = DUR_IDX[dur]; return p.sections.reduce(function (t, s) { return t + Math.min(s.take[di], s.qs.length); }, 0);
    }
    seg(T('Duration', 'Durasi'), SP.durations.map(function (d) { return { v: d.id, t: L(d.name), s: '~' + d.mins + ' ' + T('min', 'mnt') + ' · ' + countFor(d.id) + ' ' + (p.kind === 'case' ? T('steps', 'tahap') : T('questions', 'pertanyaan')) }; }), cfg.dur, function (v) { cfg.dur = v; drawFlow(); });
    seg(T('Difficulty', 'Tingkat kesulitan'), SP.levels.map(function (d) { return { v: d.id, t: L(d.name) }; }), cfg.difficulty, function (v) { cfg.difficulty = +v; });
    var stF = el('div', 'rsx-f'); stF.appendChild(el('label', null, T('Interviewer style', 'Gaya pewawancara')));
    var stG = el('div', 'rsx-styles');
    SP.styles.forEach(function (st) {
      var b = el('button', 'rsx-style' + (st.id === cfg.style ? ' on' : ''), '<b>' + esc(L(st.name)) + '</b><span>' + esc(L(st.desc)) + '</span>');
      b.type = 'button';
      b.addEventListener('click', function () { cfg.style = st.id; stG.querySelectorAll('.rsx-style').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); });
      stG.appendChild(b);
    });
    stF.appendChild(stG); cz.appendChild(stF);
    var pF = el('div', 'rsx-f'); pF.appendChild(el('label', null, T('Your interviewer', 'Pewawancaramu')));
    var pG = el('div', 'rsx-pers');
    PERSONAS.forEach(function (pe) {
      var b = el('button', 'rsx-pe' + (pe.id === cfg.persona ? ' on' : ''));
      b.type = 'button'; b.title = L(pe.title);
      var ph = PHOTOS[pe.id];
      b.innerHTML = '<span class="pe-av">' + (ph ? '<img src="' + ph.src + '" alt="" style="object-position:' + ph.pos + '">' : avatarSvg(pe)) + '</span><span>' + esc(L(pe.name)) + '</span>';
      b.addEventListener('click', function () { cfg.persona = pe.id; pG.querySelectorAll('.rsx-pe').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); drawStudio(); });
      pG.appendChild(b);
    });
    pF.appendChild(pG);
    var studio = el('div', 'rsx-studio');
    function drawStudio() {
      var pe = PERSONAS.filter(function (x) { return x.id === cfg.persona; })[0] || PERSONAS[0];
      studio.innerHTML = '';
      var fr = el('div', 'st-frame');
      var im = el('img', 'st-vid'); im.src = (PHOTOS[pe.id] || PHOTOS.hr).src; im.alt = ''; fr.appendChild(im);
      fr.appendChild(el('span', 'st-tag', window.MT_ROPE_VIDEO ? MT_ROPE_VIDEO.describe(window.MT_ROPE_SIM_MEDIA, pe.id, lang()) : T('AI interviewer', 'Pewawancara AI')));
      fr.appendChild(el('span', 'st-nm', '<b>' + esc(L(pe.name)) + '</b>' + esc(L((p.personaTitle) || pe.title))));
      fr.appendChild(el('span', 'st-cc', esc(L(pe.greet))));
      studio.appendChild(fr);
      studio.appendChild(el('p', 'st-q', T('Greets you, asks every question aloud with live captions, listens while you answer, follows up where the story has gaps, and closes the call.', 'Menyapamu, membacakan tiap pertanyaan dengan teks langsung, mendengarkan saat kamu menjawab, mengejar bagian cerita yang berlubang, dan menutup panggilan.')));
    }
    drawStudio();
    pF.appendChild(studio); cz.appendChild(pF);
    if (p.kind === 'case') {
      var cF = el('div', 'rsx-f'); cF.appendChild(el('label', null, T('Case', 'Kasus')));
      var cG = el('div', 'rsx-styles');
      [{ v: '', t: T('Surprise me', 'Acak'), s: T('A different case each run — closest to the real thing.', 'Kasus berbeda setiap sesi — paling mendekati aslinya.') }].concat(p.cases.map(function (cid) { return { v: cid, t: L(SP.cases[cid].name), s: L(SP.cases[cid].client) }; })).forEach(function (o) {
        var b = el('button', 'rsx-style' + (o.v === (cfg.caseId || '') ? ' on' : ''), '<b>' + esc(o.t) + '</b><span>' + esc(o.s) + '</span>');
        b.type = 'button';
        b.addEventListener('click', function () { cfg.caseId = o.v; cG.querySelectorAll('.rsx-style').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); drawFlow(); });
        cG.appendChild(b);
      });
      cF.appendChild(cG); cz.appendChild(cF);
    }
    var fmtF = el('div', 'rsx-f'); fmtF.appendChild(el('label', null, T('Answer format', 'Format jawaban')));
    var mediaOk = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    var fmtG = el('div', 'rsx-seg');
    var fmtDefault = p.format === 'phone' && mediaOk ? 'audio' : state.fmt || 'text';
    [['text', T('Text', 'Teks')], ['audio', T('Voice', 'Suara')], ['video', T('Video', 'Video')]].forEach(function (o) {
      var b = el('button', o[0] === fmtDefault ? 'on' : '', '<b>' + o[1] + '</b>'); b.type = 'button';
      if (o[0] !== 'text' && !mediaOk) { b.disabled = true; b.title = T('Not available in this browser', 'Tidak tersedia di peramban ini'); }
      b.addEventListener('click', function () { fmtDefault = o[0]; fmtG.querySelectorAll('button').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); });
      fmtG.appendChild(b);
    });
    fmtF.appendChild(fmtG); cz.appendChild(fmtF);

    /* personalise */
    var pz = el('div', 'rsx-f rsx-pz');
    pz.appendChild(el('label', null, T('Personalise with your CV', 'Personalisasi dengan CV-mu')));
    var up = el('div', 'rsx-up');
    var fileIn = document.createElement('input'); fileIn.type = 'file'; fileIn.accept = '.pdf,.docx,.txt,.rtf,.odt,.md'; fileIn.style.display = 'none';
    var upB = el('button', 'rsim-btn ghost', ic('upload') + T('Upload CV', 'Unggah CV')); upB.type = 'button';
    var pasteB = el('button', 'rsx-link', T('or paste the text', 'atau tempel teksnya')); pasteB.type = 'button';
    var cvStat = el('span', 'rsx-cvstat');
    up.appendChild(upB); up.appendChild(pasteB); up.appendChild(fileIn);
    pz.appendChild(up); pz.appendChild(cvStat);
    var pasteTa = document.createElement('textarea'); pasteTa.className = 'rsx-ta'; pasteTa.style.display = 'none';
    pasteTa.placeholder = T('Paste your CV text here. It is read in this browser and never uploaded.', 'Tempel teks CV-mu di sini. Dibaca di peramban ini dan tidak pernah diunggah.');
    pz.appendChild(pasteTa);
    function cvStatus() {
      cvStat.innerHTML = state.cvMined ? '<span class="ok">' + ic('check') + T('CV read on this device', 'CV terbaca di perangkat ini') + '</span> ' + esc(cvSummary(state.cvMined)) : T('Optional. The interviewer turns your roles, claims and education into questions.', 'Opsional. Pewawancara mengubah peran, klaim, dan pendidikanmu menjadi pertanyaan.');
    }
    cvStatus();
    upB.addEventListener('click', function () { fileIn.click(); });
    pasteB.addEventListener('click', function () { pasteTa.style.display = pasteTa.style.display === 'none' ? '' : 'none'; if (pasteTa.style.display === '') pasteTa.focus(); });
    pasteTa.addEventListener('input', function () { if (pasteTa.value.trim().length > 40) { state.cvMined = mineCvDeep(pasteTa.value); } else if (!pasteTa.value.trim()) { state.cvMined = null; } cvStatus(); drawFlow(); });
    fileIn.addEventListener('change', function () {
      var f = fileIn.files && fileIn.files[0]; if (!f) return;
      if (!window.MT_RANGE_DOC) { cvStat.textContent = T('This page cannot read files — paste the text instead.', 'Halaman ini tidak bisa membaca file — tempel teksnya saja.'); pasteTa.style.display = ''; return; }
      cvStat.textContent = T('Reading…', 'Membaca…');
      window.MT_RANGE_DOC.extract(f).then(function (doc) { state.cvMined = mineCvDeep(doc.text); cvStatus(); drawFlow(); })
        .catch(function (err) { cvStat.textContent = window.MT_RANGE_DOC.message ? window.MT_RANGE_DOC.message(err && err.message, lang()) : T('Could not read that file.', 'File tidak terbaca.'); });
    });
    cz.appendChild(pz);
    var more = document.createElement('details'); more.className = 'rsx-more';
    more.innerHTML = '<summary>' + T('Target company, role and job description (optional)', 'Perusahaan, peran, dan deskripsi pekerjaan tujuan (opsional)') + '</summary>';
    var mg = el('div', 'rsx-mg');
    function inp(label, val, ph, on, ta) {
      var f = el('div', 'rsim-field'); f.appendChild(el('label', null, label));
      var n = document.createElement(ta ? 'textarea' : 'input'); if (!ta) n.type = 'text'; n.value = val || ''; n.placeholder = ph;
      n.addEventListener('input', function () { on(n.value.trim()); drawFlow(); });
      f.appendChild(n); mg.appendChild(f); return n;
    }
    inp(T('Company or school', 'Perusahaan atau sekolah'), cfg.company, T('e.g. the firm you applied to', 'mis. firma yang kamu lamar'), function (v) { cfg.company = v; });
    inp(T('Role title', 'Nama peran'), cfg.roleText, T('e.g. Business Analyst', 'mis. Business Analyst'), function (v) { cfg.roleText = v; });
    var rf = el('div', 'rsim-field'); rf.appendChild(el('label', null, T('Career direction (adds a role-specific question)', 'Arah karier (menambah pertanyaan khusus peran)')));
    var rs = document.createElement('select');
    rs.innerHTML = '<option value="">' + T('None', 'Tidak ada') + '</option>' + (G.directions || []).map(function (d) { return '<option value="' + d.id + '"' + (cfg.roleId === d.id ? ' selected' : '') + '>' + esc(L(d.name)) + '</option>'; }).join('');
    rs.addEventListener('change', function () { cfg.roleId = rs.value; drawFlow(); });
    rf.appendChild(rs); mg.appendChild(rf);
    inp(T('Job description', 'Deskripsi pekerjaan'), cfg.jd, T('Paste it — the interviewer will probe its requirements.', 'Tempelkan — pewawancara akan menguji persyaratannya.'), function (v) { cfg.jd = v; }, true);
    more.appendChild(mg);
    if (p.kind !== 'case') cz.appendChild(more);
    var vt = el('label', 'rsx-tg'); var vtc = document.createElement('input'); vtc.type = 'checkbox'; vtc.checked = state.tts !== false;
    vt.appendChild(vtc); vt.appendChild(el('span', null, T('Interviewer speaks the questions aloud', 'Pewawancara membacakan pertanyaan')));
    cz.appendChild(vt);
    var start = el('button', 'rsim-btn rsx-start', T('Start interview →', 'Mulai wawancara →'));
    start.addEventListener('click', function () {
      state.tts = vtc.checked; state.fmt = fmtDefault;
      var c2 = JSON.parse(JSON.stringify(cfg));
      startPathSession(c2);
    });
    cz.appendChild(start);
    cz.appendChild(el('p', 'rsim-note', T('Everything runs in this browser. Recordings are discarded when you close; text transcripts stay on this device.', 'Semua berjalan di peramban ini. Rekaman dibuang saat ditutup; transkrip teks tetap di perangkat ini.')));
    right.appendChild(cz);

    function drawFlow() {
      flowL.innerHTML = '';
      var di = DUR_IDX[cfg.dur];
      if (p.kind === 'case') {
        var c0 = SP.cases[cfg.caseId || p.cases[0]], plan = c0.plan[cfg.dur];
        var names = {};
        plan.forEach(function (i) { var k = L(CASE_SEC[c0.steps[i].step]); names[k] = (names[k] || 0) + 1; });
        Object.keys(names).forEach(function (k) { flowL.appendChild(el('li', null, '<b>' + esc(k) + '</b><span>' + names[k] + ' ' + T(names[k] > 1 ? 'steps' : 'step', 'tahap') + '</span>')); });
        persBox.innerHTML = '<p class="rsim-note">' + T('Case clients and exhibits are fictional. ', 'Klien dan eksibit kasus bersifat fiktif. ') + T('Each run draws one case: ', 'Setiap sesi mengambil satu kasus: ') + p.cases.map(function (cid) { return esc(L(SP.cases[cid].name)); }).join(' · ') + '.</p>';
        return;
      }
      var pq = personalQs(p, cfg);
      p.sections.forEach(function (s2, i) {
        var n = Math.min(s2.take[di], s2.qs.length); if (!n) return;
        flowL.appendChild(el('li', null, '<b>' + esc(L(s2.name)) + '</b><span>' + n + ' ' + T(n > 1 ? 'questions' : 'question', 'pertanyaan') + '</span>'));
        if (i === 0 && pq.length) flowL.appendChild(el('li', 'pers', '<b>' + esc(L(SEC_PERS)) + '</b><span>' + pq.length + ' ' + T(pq.length > 1 ? 'questions' : 'question', 'pertanyaan') + '</span>'));
      });
      persBox.innerHTML = '';
      if (pq.length) {
        persBox.appendChild(el('div', 'rg-kick', T('Personalised for you — the interviewer will also ask:', 'Dipersonalisasi untukmu — pewawancara juga akan bertanya:')));
        pq.forEach(function (q) { persBox.appendChild(el('p', 'pp', '“' + esc(L(q.q)) + '”')); });
      } else {
        persBox.appendChild(el('p', 'rsim-note', T('Add your CV, a job description or a career direction to get questions written from your own experience.', 'Tambahkan CV, deskripsi pekerjaan, atau arah karier untuk mendapatkan pertanyaan dari pengalamanmu sendiri.')));
      }
    }
    drawFlow();
  }

  /* ── session header: section rail + time ── */
  function sessionHeader(s) {
    var p = s.cfg && pathById(s.cfg.pathId);
    var hd = el('div', 'rsx-sh');
    var q = s.qs[s.idx];
    var groups = [];
    s.qs.forEach(function (x, i) { var k = x.secName ? L(x.secName) : ''; if (!groups.length || groups[groups.length - 1].k !== k) groups.push({ k: k, items: [] }); groups[groups.length - 1].items.push(i); });
    var top = el('div', 'sh-top');
    top.appendChild(el('b', null, esc(p ? L(p.title) : T('Interview session', 'Sesi wawancara'))));
    var planned = p ? durById(s.cfg.dur).mins * 60 : 0;
    var left = el('span', 'sh-left');
    function tick() {
      if (!planned) return;
      var el2 = Math.round((Date.now() - s.startedAt) / 1000), rem = planned - el2;
      left.innerHTML = ic('clock') + (rem >= 0 ? T('~' + Math.ceil(rem / 60) + ' min left', '~' + Math.ceil(rem / 60) + ' mnt lagi') : T(Math.ceil(-rem / 60) + ' min over plan', 'lewat ' + Math.ceil(-rem / 60) + ' mnt'));
      left.classList.toggle('over', rem < 0);
    }
    tick();
    var tid = setInterval(function () { if (!document.body.contains(left)) { clearInterval(tid); return; } tick(); }, 15000);
    top.appendChild(el('span', 'sh-pos', (function () { var pq = qPosition(s); return pq.phase === 'q' ? T('Question ', 'Pertanyaan ') + pq.k + T(' of ', ' dari ') + pq.n : qLabel(s); })()));
    if (planned) top.appendChild(left);
    hd.appendChild(top);
    var rail = el('div', 'sh-rail');
    groups.forEach(function (g) {
      var gd = el('div', 'sh-g' + (g.items.indexOf(s.idx) !== -1 ? ' now' : g.items[g.items.length - 1] < s.idx ? ' done' : ''));
      gd.style.flexGrow = g.items.length;
      gd.appendChild(el('span', 'sh-gl', esc(g.k)));
      var bars = el('div', 'sh-bars');
      g.items.forEach(function (i) { bars.appendChild(el('i', i < s.idx ? 'done' : i === s.idx ? 'now' : '')); });
      gd.appendChild(bars);
      rail.appendChild(gd);
    });
    hd.appendChild(rail);
    return hd;
  }

  /* ── case panel inside the question ── */
  function casePanel(s, q) {
    var wrap = el('div', 'rsx-case');
    if (q.caseId && SP && SP.cases[q.caseId]) {
      var c = SP.cases[q.caseId];
      var br = document.createElement('details'); br.className = 'rsx-brief'; if (q.step === 'clarify' || q.step === 'structure') br.open = true;
      br.innerHTML = '<summary><span class="rsx-ex-k">' + T('Case brief', 'Ringkasan kasus') + '</span> ' + esc(L(c.name)) + '</summary><p class="cb-client">' + esc(L(c.client)) + '</p><p>' + esc(L(c.brief)) + '</p>';
      if (s.facts && s.facts.length) {
        var fl = el('div', 'rsx-facts');
        fl.appendChild(el('div', 'rg-kick', s.factsFresh ? T('The interviewer answers your questions', 'Pewawancara menjawab pertanyaanmu') : T('Case facts so far', 'Fakta kasus sejauh ini')));
        s.facts.forEach(function (f) { fl.appendChild(el('div', 'cf' + (f.asked ? ' asked' : ''), '<b>' + esc(L(f.n)) + '</b> ' + esc(L(f.fact)) + '<em>' + (f.asked ? T('you asked', 'kamu tanyakan') : T('volunteered', 'diberitahukan')) + '</em>')); });
        br.appendChild(fl);
        if (s.factsFresh) br.open = true;
      }
      wrap.appendChild(br);
    }
    if (q.exhibit && SP && SP.exhibits[q.exhibit]) {
      var exIds = []; s.qs.forEach(function (x) { if (x.exhibit && exIds.indexOf(x.exhibit) === -1) exIds.push(x.exhibit); });
      wrap.appendChild(exhibitEl(SP.exhibits[q.exhibit], T('Exhibit ', 'Eksibit ') + (exIds.indexOf(q.exhibit) + 1)));
    }
    return wrap;
  }

  /* ═══ PROGRESS — dashboard ═══ */
  function renderHistory() {
    var w = setScreen('history', null);
    w.classList.add('rsx-wide');
    var h = history().map(function (x) { var o = Object.assign({}, x); if (o.overall == null) o.overall = Math.round((o.content + o.structure + o.comm) / 3); return o; });
    var back = el('button', 'rsx-back', '← ' + T('All interviews', 'Semua wawancara'));
    back.addEventListener('click', renderHome);
    w.appendChild(back);
    var head = el('div', 'rsx-dash-h');
    head.appendChild(el('div', null, '<div class="rsx-sec-k">' + T('Practice progress', 'Perkembangan latihan') + '</div><h2>' + T('Your interview progress', 'Perkembangan wawancaramu') + '</h2>'));
    w.appendChild(head);
    if (!h.length) {
      var e = el('div', 'rsim-card');
      e.appendChild(el('p', 'rsim-sub', T('No sessions yet. Your first report becomes your baseline — everything after that is measurable progress.', 'Belum ada sesi. Laporan pertamamu menjadi garis dasar — setelah itu semuanya adalah kemajuan yang terukur.')));
      var g0 = el('button', 'rsim-btn', T('Choose an interview →', 'Pilih wawancara →')); g0.addEventListener('click', renderHome);
      var r0 = el('div', 'rsim-row'); r0.appendChild(g0); e.appendChild(r0);
      w.appendChild(e); return;
    }
    var mins = h.reduce(function (t, x) { return t + (x.mins || 0); }, 0);
    var last5 = h.slice(-5), avg5 = Math.round(last5.reduce(function (t, x) { return t + x.overall; }, 0) / last5.length);
    var best = Math.max.apply(null, h.map(function (x) { return x.overall; }));
    var pathsDone = {}; h.forEach(function (x) { pathsDone[x.pathId || 'custom'] = 1; });
    var first3 = h.slice(0, Math.min(3, h.length)), fAvg = Math.round(first3.reduce(function (t, x) { return t + x.overall; }, 0) / first3.length);
    var kp = el('div', 'rsx-kpis');
    [[h.length, T('sessions', 'sesi')], [mins ? Math.round(mins) + ' ' + T('min', 'mnt') : '—', T('practice time', 'waktu latihan')], [avg5, T('average, last 5', 'rata-rata, 5 terakhir')],
     [best, T('best score', 'skor terbaik')], [Object.keys(pathsDone).length, T('paths practised', 'jalur dilatih')], [(avg5 - fAvg >= 0 ? '+' : '') + (avg5 - fAvg), T('vs your first sessions', 'dibanding sesi awalmu')]].forEach(function (k) {
      kp.appendChild(el('div', 'kpi', '<b>' + k[0] + '</b><span>' + k[1] + '</span>'));
    });
    w.appendChild(kp);

    /* trend chart */
    var tc = el('div', 'rsim-card');
    tc.appendChild(el('div', 'rsim-kick', T('Score trend', 'Tren skor')));
    var tg = el('div', 'rsx-seg rsx-seg-sm');
    var series = [['overall', T('Overall', 'Keseluruhan')], ['content', T('Content', 'Isi')], ['structure', T('Structure', 'Struktur')], ['comm', T('Communication', 'Komunikasi')]];
    var curS = 'overall';
    var chart = el('div', 'rsx-chart');
    series.forEach(function (sr) {
      var b = el('button', sr[0] === curS ? 'on' : '', '<b>' + sr[1] + '</b>'); b.type = 'button';
      b.addEventListener('click', function () { curS = sr[0]; tg.querySelectorAll('button').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); drawChart(); });
      tg.appendChild(b);
    });
    tc.appendChild(tg); tc.appendChild(chart);
    function drawChart() {
      var data = h.slice(-20), W = 640, H = 200, pl = 34, pr = 12, pt = 12, pb = 26;
      var xs = function (i) { return pl + (data.length > 1 ? i / (data.length - 1) : 0.5) * (W - pl - pr); };
      var ys = function (v) { return pt + (1 - v / 100) * (H - pt - pb); };
      var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" role="img" aria-label="' + T('Score trend', 'Tren skor') + '">';
      [0, 25, 50, 75, 100].forEach(function (g) { svg += '<line x1="' + pl + '" x2="' + (W - pr) + '" y1="' + ys(g) + '" y2="' + ys(g) + '" class="gl"/><text x="' + (pl - 8) + '" y="' + (ys(g) + 4) + '" text-anchor="end" class="gt">' + g + '</text>'; });
      var pts = data.map(function (x, i) { return [xs(i), ys(x[curS] || 0), x]; });
      if (pts.length > 1) svg += '<polyline class="ln" points="' + pts.map(function (p2) { return p2[0].toFixed(1) + ',' + p2[1].toFixed(1); }).join(' ') + '"/>';
      pts.forEach(function (p2, i) {
        var pp = p2[2].pathId && pathById(p2[2].pathId);
        svg += '<circle class="pt" cx="' + p2[0].toFixed(1) + '" cy="' + p2[1].toFixed(1) + '" r="4.5"><title>' + esc(new Date(p2[2].at).toLocaleDateString(lang() === 'id' ? 'id-ID' : 'en-GB') + ' · ' + (pp ? L(pp.title) : T('Custom session', 'Sesi kustom')) + ' · ' + (p2[2][curS] || 0)) + '</title></circle>';
        if (data.length <= 12 || i % 2 === 0) svg += '<text x="' + p2[0].toFixed(1) + '" y="' + (H - 8) + '" text-anchor="middle" class="gt">' + (h.length - data.length + i + 1) + '</text>';
      });
      svg += '</svg>';
      chart.innerHTML = svg;
    }
    drawChart();
    tc.appendChild(el('p', 'rsim-note', T('Each point is one session (numbered in order). Scores are a practice readout from a transparent rubric, not a hiring prediction.', 'Setiap titik adalah satu sesi (bernomor berurutan). Skor adalah hasil latihan dari rubrik transparan, bukan prediksi rekrutmen.')));
    w.appendChild(tc);

    /* by path */
    var bp = el('div', 'rsim-card');
    bp.appendChild(el('div', 'rsim-kick', T('By interview path', 'Per jalur wawancara')));
    var tbl = el('div', 'rsx-bypath');
    Object.keys(pathsDone).forEach(function (pid) {
      var rows = h.filter(function (x) { return (x.pathId || 'custom') === pid; });
      var pp = pathById(pid), lastV = rows[rows.length - 1].overall, prevV = rows.length > 1 ? rows[rows.length - 2].overall : null;
      var bestV = Math.max.apply(null, rows.map(function (x) { return x.overall; }));
      var r = el('div', 'bp');
      r.appendChild(el('div', 'bp-n', '<b>' + esc(pp ? L(pp.title) : T('Custom sessions', 'Sesi kustom')) + '</b><span>' + rows.length + ' ' + T(rows.length > 1 ? 'sessions' : 'session', 'sesi') + '</span>'));
      r.appendChild(el('div', 'bp-v', '<span>' + T('Last', 'Terakhir') + ' <b>' + lastV + '</b>' + (prevV != null ? ' <em class="' + (lastV >= prevV ? 'up' : 'dn') + '">' + (lastV >= prevV ? '▲' : '▼') + Math.abs(lastV - prevV) + '</em>' : '') + '</span><span>' + T('Best', 'Terbaik') + ' <b>' + bestV + '</b></span>'));
      if (pp) {
        var pb2 = el('button', 'rsim-btn ghost', T('Practise again', 'Latih lagi'));
        pb2.addEventListener('click', function () { renderPath(pp.id); });
        r.appendChild(pb2);
      }
      tbl.appendChild(r);
    });
    bp.appendChild(tbl);
    w.appendChild(bp);

    /* dimension view for the most practised path */
    var counts = {}; h.forEach(function (x) { if (x.pathId && x.dims) counts[x.pathId] = (counts[x.pathId] || 0) + 1; });
    var topP = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; })[0];
    if (topP) {
      var tp = pathById(topP), runs = h.filter(function (x) { return x.pathId === topP && x.dims; });
      var dc = el('div', 'rsim-card');
      dc.appendChild(el('div', 'rsim-kick', T('Dimensions · ', 'Dimensi · ') + esc(L(tp.title))));
      var bars = el('div', 'rsim-bars');
      tp.dims.forEach(function (d) {
        var lastD = runs[runs.length - 1].dims[d.id], firstD = runs[0].dims[d.id];
        var b = el('div', 'rsim-bar');
        b.appendChild(el('span', null, esc(L(d.name))));
        var tr = el('div', 'tr'); tr.appendChild(el('i')); tr.firstChild.style.width = (lastD || 0) + '%'; b.appendChild(tr);
        var val = el('b', null, lastD == null ? '—' : String(lastD));
        if (runs.length > 1 && lastD != null && firstD != null && lastD !== firstD) val.innerHTML += ' <span class="delta ' + (lastD > firstD ? 'up' : 'dn') + '">' + (lastD > firstD ? '+' : '') + (lastD - firstD) + '</span>';
        b.appendChild(val); bars.appendChild(b);
      });
      dc.appendChild(bars);
      dc.appendChild(el('p', 'rsim-note', T('Latest session, with the change since your first run of this path.', 'Sesi terbaru, dengan perubahan sejak percobaan pertamamu di jalur ini.')));
      w.appendChild(dc);
    }

    /* recent sessions + transcripts */
    var rc = el('div', 'rsim-card');
    rc.appendChild(el('div', 'rsim-kick', T('Recent sessions', 'Sesi terbaru')));
    var txs = transcripts();
    var list = el('div', 'rsim-hist');
    h.slice().reverse().slice(0, 12).forEach(function (sess) {
      var pp = sess.pathId && pathById(sess.pathId);
      var r = el('div', 'h-row');
      r.appendChild(el('span', null, new Date(sess.at).toLocaleDateString(lang() === 'id' ? 'id-ID' : 'en-GB') + ' · <b>' + esc(pp ? L(pp.title) : T('Custom session', 'Sesi kustom')) + '</b>' + (sess.mins ? ' · ' + Math.round(sess.mins) + ' ' + T('min', 'mnt') : '')));
      r.appendChild(el('span', null, T('Score', 'Skor') + ' <b>' + sess.overall + '</b>' + (sess.presence != null ? ' · ' + T('Presence*', 'Kehadiran*') + ' <b>' + sess.presence + '</b>' : '')));
      if (txs[sess.at]) {
        var tb = el('button', 'rsx-link', T('Transcript', 'Transkrip')); tb.type = 'button';
        var slot = el('div', 'h-tx'); slot.style.display = 'none';
        tb.addEventListener('click', function () {
          if (!slot.childNodes.length) slot.appendChild(transcriptEl(txs[sess.at], sess.at));
          slot.style.display = slot.style.display === 'none' ? '' : 'none';
        });
        r.appendChild(tb);
        list.appendChild(r); list.appendChild(slot);
      } else list.appendChild(r);
    });
    rc.appendChild(list);
    if (h.some(function (x) { return x.presence != null; })) rc.appendChild(el('p', 'rsim-note', '*' + T('Presence is self-reviewed against your own recordings.', 'Kehadiran ditinjau sendiri dari rekamanmu.')));
    var del = el('button', 'rsx-link rsx-del', T('Delete my practice history and transcripts from this device', 'Hapus riwayat latihan dan transkripku dari perangkat ini'));
    del.type = 'button';
    del.addEventListener('click', function () {
      if (!window.confirm(T('Delete all practice history and transcripts stored in this browser? This cannot be undone.', 'Hapus semua riwayat latihan dan transkrip yang tersimpan di peramban ini? Tindakan ini tidak bisa dibatalkan.'))) return;
      try { localStorage.removeItem(LS_HIST); localStorage.removeItem(LS_TX); } catch (e) {}
      renderHistory();
    });
    rc.appendChild(del);
    w.appendChild(rc);
  }

  /* ── report header: score, dimensions, strengths, priorities, plan ── */
  var GENERIC_OF = { presence: 'communication', clarity: 'communication', framing: 'structure', synthesis: 'structure', requirements: 'structure', architecture: 'structure', tradeoffs: 'structure', priorit: 'structure', strategy: 'structure', plan: 'structure', goals: 'structure' };
  function topCounted(list, n) {
    var c = {}, order = [];
    list.forEach(function (t) { if (!t) return; if (!c[t]) { c[t] = 0; order.push(t); } c[t]++; });
    return order.sort(function (a, b) { return c[b] - c[a]; }).slice(0, n).map(function (t) { return { t: t, n: c[t] }; });
  }
  function reportHeader(s, p, dims, overall, sc, prevSame) {
    var card = el('section', 'rsx-rep');
    var main = s.answers.filter(function (a) { return !a.followup; });
    var answered = main.filter(function (a) { return !a.skipped; }).length;
    var secs = Math.round((Date.now() - s.startedAt) / 1000);
    var st = s.cfg && s.cfg.style ? styleById(s.cfg.style) : null;
    var lv = SP && s.cfg && s.cfg.difficulty ? SP.levels.filter(function (x) { return x.id === s.cfg.difficulty; })[0] : null;
    var bd = band(overall);
    var top = el('div', 'rp-top');
    var sc1 = el('div', 'rp-score'); sc1.innerHTML = ring(overall, 132) + '<span class="rp-band b-' + bd.k + '">' + bd.t + '</span>';
    if (prevSame && prevSame.overall != null) { var dd = overall - prevSame.overall; sc1.innerHTML += '<span class="rp-delta ' + (dd >= 0 ? 'up' : 'dn') + '">' + (dd >= 0 ? '▲ +' : '▼ ') + dd + ' ' + T('since your last run', 'sejak percobaan terakhir') + '</span>'; }
    top.appendChild(sc1);
    var meta = el('div', 'rp-meta');
    meta.appendChild(el('div', 'rsx-kick', T('Interview report', 'Laporan wawancara')));
    meta.appendChild(el('h2', null, esc(p ? L(p.title) : state.drill ? T('Lesson drill', 'Latihan pelajaran') : T('Custom interview session', 'Sesi wawancara kustom'))));
    var chips = [new Date().toLocaleDateString(lang() === 'id' ? 'id-ID' : 'en-GB'), T('Duration ', 'Durasi ') + mmss(secs), answered + '/' + main.length + ' ' + T('answered', 'dijawab')];
    if (st && st.name) chips.push(L(st.name)); if (lv) chips.push(L(lv.name));
    if (s.caseId && SP && SP.cases[s.caseId]) chips.push(L(SP.cases[s.caseId].name));
    meta.appendChild(el('div', 'rp-chips', chips.map(function (c) { return '<span>' + esc(c) + '</span>'; }).join('')));
    meta.appendChild(el('p', 'rsim-note', T('A practice readout from a transparent rubric computed on your device — not a prediction of any hiring decision.', 'Hasil latihan dari rubrik transparan yang dihitung di perangkatmu — bukan prediksi keputusan rekrutmen mana pun.')));
    top.appendChild(meta);
    card.appendChild(top);

    var grid = el('div', 'rp-grid');
    var dc = el('div', 'rp-dims');
    dc.appendChild(el('div', 'rg-kick', p ? T('Score by dimension', 'Skor per dimensi') : T('Score by area', 'Skor per area')));
    var rows = dims || [{ id: 'content', name: { en: 'Content — evidence & relevance', id: 'Isi — bukti & relevansi' }, v: sc.content }, { id: 'structure', name: { en: 'Structure — arc & landing', id: 'Struktur — alur & pendaratan' }, v: sc.structure }, { id: 'comm', name: { en: 'Communication — clarity & pace', id: 'Komunikasi — kejernihan & tempo' }, v: sc.comm }];
    rows.forEach(function (d) {
      var r = el('div', 'rp-d' + (d.v == null ? ' na' : ''));
      var pv = prevSame && prevSame.dims ? prevSame.dims[d.id] : null;
      r.innerHTML = '<div class="rd-h"><b>' + esc(L(d.name)) + '</b><span>' + (d.v == null ? T('not assessed this session', 'tidak dinilai di sesi ini') : d.v + (pv != null && pv !== d.v ? ' <em class="' + (d.v > pv ? 'up' : 'dn') + '">' + (d.v > pv ? '+' : '') + (d.v - pv) + '</em>' : '')) + '</span></div>' +
        '<div class="rd-t"><i style="width:' + (d.v || 0) + '%"></i></div>' + (d.desc ? '<p>' + esc(L(d.desc)) + '</p>' : '');
      dc.appendChild(r);
    });
    grid.appendChild(dc);

    var sw = el('div', 'rp-sw');
    var got = rows.filter(function (d) { return d.v != null; }).slice().sort(function (a, b) { return b.v - a.v; });
    var strengths = [], prios = [];
    if (got.length) strengths.push({ t: T('Strongest: ', 'Terkuat: ') + L(got[0].name) + ' (' + got[0].v + ')' });
    if (got.length > 1) prios.push({ t: T('Weakest: ', 'Terlemah: ') + L(got[got.length - 1].name) + ' (' + got[got.length - 1].v + ')' });
    var live = s.answers.filter(function (a) { return !a.skipped && a.fb; });
    strengths = strengths.concat(topCounted([].concat.apply([], live.map(function (a) { return a.fb.strengths.slice(0, 1); })), 2));
    prios = prios.concat(topCounted([].concat.apply([], live.map(function (a) { return a.fb.weaknesses.slice(0, 1); })), 2));
    var sb = el('div', 'rp-list good'); sb.appendChild(el('div', 'rg-kick', T('What is working', 'Yang sudah berjalan')));
    strengths.forEach(function (x) { sb.appendChild(el('p', null, esc(x.t) + (x.n > 1 ? ' <em>×' + x.n + '</em>' : ''))); });
    var pb = el('div', 'rp-list fix'); pb.appendChild(el('div', 'rg-kick', T('Priority improvements', 'Prioritas perbaikan')));
    prios.forEach(function (x) { pb.appendChild(el('p', null, esc(x.t) + (x.n > 1 ? ' <em>×' + x.n + '</em>' : ''))); });
    if (!prios.length) pb.appendChild(el('p', null, T('Answer more questions to unlock specific priorities.', 'Jawab lebih banyak pertanyaan untuk membuka prioritas spesifik.')));
    sw.appendChild(sb); sw.appendChild(pb);
    grid.appendChild(sw);
    card.appendChild(grid);

    /* action plan */
    var plan = el('div', 'rp-plan');
    plan.appendChild(el('div', 'rg-kick', T('Your plan for the next round', 'Rencanamu untuk putaran berikutnya')));
    var pg = el('div', 'rsim-reco');
    var weakest = got.length ? got[got.length - 1] : null;
    var gen = weakest ? (GENERIC_OF[weakest.id] || (weakest.id === 'structure' ? 'structure' : weakest.id === 'comm' ? 'communication' : 'content')) : 'structure';
    var lr = (LESSON_RECO[gen] || LESSON_RECO.structure)[0];
    var r1 = el('div', 'rc');
    r1.innerHTML = '<span class="k">' + T('1 · Study', '1 · Pelajari') + '</span><b>' + esc(lr[0] + ' · ' + L(lr[1])) + '</b><span>' + T('The lesson behind your weakest dimension — ten focused minutes.', 'Pelajaran di balik dimensi terlemahmu — sepuluh menit fokus.') + '</span>';
    var lb = el('button', 'rsim-btn ghost', T('Open lesson →', 'Buka pelajaran →'));
    lb.addEventListener('click', function () { close(); if (window.MT_LMS_PLAYER) window.MT_LMS_PLAYER.open(lr[0]); });
    r1.appendChild(lb); pg.appendChild(r1);
    if (p && p.tips && p.tips.length) {
      var r2 = el('div', 'rc');
      r2.innerHTML = '<span class="k">' + T('2 · Prepare', '2 · Persiapkan') + '</span><b>' + T('Path tip', 'Tips jalur') + '</b><span>' + esc(L(p.tips[(s.answers.length) % p.tips.length])) + '</span>';
      pg.appendChild(r2);
    }
    var r3 = el('div', 'rc');
    var nextDiff = overall >= 78 ? Math.min((s.cfg.difficulty || 2) + 1, 3) : (s.cfg.difficulty || 2);
    r3.innerHTML = '<span class="k">' + T('3 · Repeat', '3 · Ulangi') + '</span><b>' + (p ? T('Run this path again', 'Jalankan jalur ini lagi') : T('Run the next round', 'Jalankan putaran berikutnya')) + '</b><span>' +
      (nextDiff > (s.cfg.difficulty || 2) ? T('You scored ' + overall + ' — the next run steps up a difficulty level.', 'Skormu ' + overall + ' — percobaan berikutnya naik satu tingkat kesulitan.') : T('Same format, fresh questions where the path has them. Watch the weakest dimension move.', 'Format sama, pertanyaan baru bila jalur memilikinya. Perhatikan dimensi terlemahmu bergerak.')) + '</span>';
    var rb = el('button', 'rsim-btn', T('Practise again →', 'Latih lagi →'));
    rb.addEventListener('click', function () {
      if (p) { var c3 = JSON.parse(JSON.stringify(s.cfg)); c3.difficulty = nextDiff; if (!specCfgs()[p.id] || !specCfgs()[p.id].caseId) c3.caseId = ''; startPathSession(c3); }
      else renderImprove(sc);
    });
    r3.appendChild(rb); pg.appendChild(r3);
    plan.appendChild(pg);
    card.appendChild(plan);
    return card;
  }

  var cssX = '' +
  '.rsim-in.rsx-wide{max-width:1180px}' +
  '.rsx-kick,.rsx-sec-k{font-size:11px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--gold)}' +
  '.rsx-ic{width:16px;height:16px;flex:none}' +
  /* hero */
  '.rsx-hero{position:relative;border-radius:22px;overflow:hidden;border:1px solid var(--gold-border);min-height:300px;display:flex;align-items:flex-end;margin-bottom:22px;isolation:isolate}' +
  '.rsx-hero-bg{position:absolute;inset:0;z-index:-2;background:url("../../assets/pe/pf-range.jpg") center 40%/cover no-repeat;transform:scale(1.04);animation:rsimKen 30s ease-in-out infinite alternate}' +
  '.rsx-hero::after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(5,10,18,.94) 0%,rgba(5,10,18,.78) 46%,rgba(5,10,18,.25) 100%),linear-gradient(0deg,rgba(5,10,18,.6),transparent 60%)}' +
  '.rsx-hero-in{padding:34px 36px 30px;max-width:720px;color:#F5EFE6}' +
  '.rsx-hero h2{font-family:var(--serif,Georgia,serif);font-size:clamp(1.6rem,3vw,2.35rem);line-height:1.15;margin:10px 0 12px;color:#F5EFE6;font-weight:600;letter-spacing:-.01em}' +
  '.rsx-hero p{color:rgba(245,239,230,.82);font-size:15px;line-height:1.65;margin:0 0 16px;max-width:60ch}' +
  '.rsx-hero .rsx-kick{color:#F0D878}' +
  '.rsx-badges{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px}' +
  '.rsx-badges span{display:inline-flex;align-items:center;gap:7px;font-size:12px;font-weight:700;color:#F5EFE6;background:rgba(5,10,18,.55);border:1px solid rgba(240,216,120,.3);border-radius:999px;padding:6px 12px;backdrop-filter:blur(6px)}' +
  '.rsx-badges .rsx-ic{width:14px;height:14px;color:#F0D878}' +
  '.rsx-hero-cta{display:flex;flex-wrap:wrap;gap:10px}' +
  '.rsx-hero .rsim-btn.ghost{color:#F0D878;border-color:rgba(240,216,120,.45);background:rgba(5,10,18,.4)}' +
  '.rsim-btn .rsx-ic{width:15px;height:15px}' +
  /* how it works */
  '.rsx-how{margin:0 0 22px}' +
  '.rsx-steps{list-style:none;margin:12px 0 0;padding:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;counter-reset:none}' +
  '.rsx-steps li{position:relative;border:1px solid var(--gold-border);border-radius:16px;padding:18px 18px 16px;background:var(--glass-bg);display:flex;flex-direction:column;gap:6px}' +
  '.rsx-steps .st-n{position:absolute;top:14px;right:16px;font-family:var(--serif,Georgia,serif);font-size:1.6rem;color:rgba(201,168,76,.28);font-weight:600}' +
  '.rsx-steps .st-ic{width:34px;height:34px;padding:8px;border-radius:10px;border:1px solid var(--gold-border-hover);color:var(--gold-bright);background:rgba(201,168,76,.08);box-sizing:border-box}' +
  '.rsx-steps b{font-size:14.5px;color:var(--text);margin-top:4px}' +
  '.rsx-steps span{font-size:12.5px;color:var(--text-muted);line-height:1.5}' +
  /* snapshot */
  '.rsx-snap{display:flex;align-items:center;gap:18px;flex-wrap:wrap;border:1px solid var(--gold-border);border-radius:16px;padding:14px 18px;background:var(--glass-bg);margin-bottom:22px}' +
  '.rsx-snap .sn-l{display:flex;align-items:center;gap:14px;flex:1;min-width:240px}' +
  '.rsx-snap .sn-l b{display:block;font-size:14.5px;color:var(--text);margin:3px 0}' +
  '.rsx-snap .sn-l span:last-child{font-size:12px;color:var(--text-muted)}' +
  '.rsx-spark{color:var(--gold-bright)}' +
  /* ring */
  '.rsx-ring .rg-bg{fill:none;stroke:rgba(128,128,128,.2);stroke-width:8}' +
  '.rsx-ring .rg-fg{fill:none;stroke:url(#rsxGold);stroke:var(--gold-bright);stroke-width:8;stroke-linecap:round;transition:stroke-dashoffset 1s cubic-bezier(.22,1,.36,1)}' +
  '.rsx-ring .rg-v{fill:var(--text);font-size:30px;font-weight:800;font-family:inherit}' +
  '.rsx-snap .rsx-ring .rg-v{font-size:20px}' +
  /* catalogue */
  '.rsx-cat{margin-bottom:24px;scroll-margin-top:12px}' +
  '.rsx-cat-h{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:12px}' +
  '.rsx-cat-h h3{margin:6px 0 0;font-size:1.3rem;color:var(--text)}' +
  '.rsx-search{display:flex;align-items:center;gap:9px;border:1px solid var(--gold-border);border-radius:999px;padding:0 14px;background:var(--bg-mid);min-width:min(340px,100%);color:var(--text-muted)}' +
  '.rsx-search:focus-within{border-color:var(--gold)}' +
  '.rsx-search input{flex:1;border:0;background:none;color:var(--text);font:inherit;font-size:14px;padding:11px 0;outline:none;min-width:0}' +
  '.rsx-chips{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:2px 0 12px;margin-bottom:6px}' +
  '.rsx-chips::-webkit-scrollbar{display:none}' +
  '.rsx-chip{flex:none;display:inline-flex;align-items:center;gap:7px;border:1px solid var(--gold-border);background:var(--glass-bg);color:var(--text-sub);border-radius:999px;padding:8px 14px;font:inherit;font-size:12.5px;font-weight:700;cursor:pointer;transition:border-color .2s,background .2s}' +
  '.rsx-chip em{font-style:normal;font-size:10.5px;color:var(--text-faint);font-weight:800}' +
  '.rsx-chip:hover{border-color:var(--gold-border-hover)}' +
  '.rsx-chip.on{background:linear-gradient(135deg,#8B6914,#C9A84C,#F0D878);color:#10131B;border-color:transparent}' +
  '.rsx-chip.on em{color:rgba(16,19,27,.65)}' +
  '.rsx-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px}' +
  '.rsx-card{display:flex;flex-direction:column;text-align:left;border:1px solid var(--gold-border);border-radius:16px;overflow:hidden;background:var(--glass-bg);cursor:pointer;padding:0;font:inherit;color:var(--text);transition:transform .25s cubic-bezier(.22,1,.36,1),border-color .25s,box-shadow .25s}' +
  '.rsx-card:hover{transform:translateY(-3px);border-color:var(--gold-border-hover);box-shadow:0 18px 40px rgba(0,0,0,.28)}' +
  '.rsx-card:focus-visible{outline:2px solid var(--gold);outline-offset:2px}' +
  '.rsx-card .cd-img{position:relative;display:block;aspect-ratio:16/9;overflow:hidden;background:#0C1626}' +
  '.rsx-card .cd-img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .8s cubic-bezier(.22,1,.36,1)}' +
  '.rsx-card:hover .cd-img img{transform:scale(1.05)}' +
  '.rsx-card .cd-kind{position:absolute;left:10px;top:10px;font-size:10px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#F5EFE6;background:rgba(5,10,18,.7);border:1px solid rgba(240,216,120,.35);border-radius:999px;padding:4px 10px;backdrop-filter:blur(6px)}' +
  '.rsx-card .cd-done{position:absolute;right:10px;bottom:10px;display:inline-flex;align-items:center;gap:5px;font-size:10.5px;font-weight:800;color:#0B1A10;background:#7FCF9B;border-radius:999px;padding:4px 9px}' +
  '.rsx-card .cd-done .rsx-ic{width:12px;height:12px}' +
  '.rsx-card .cd-body{display:flex;flex-direction:column;gap:7px;padding:15px 16px 16px;flex:1}' +
  '.rsx-card .cd-body b{font-size:14.5px;line-height:1.35;color:var(--text)}' +
  '.rsx-card .cd-desc{font-size:12.5px;line-height:1.55;color:var(--text-muted);flex:1}' +
  '.rsx-card .cd-meta{display:flex;flex-wrap:wrap;gap:6px 12px;font-size:11.5px;color:var(--text-muted);margin-top:4px}' +
  '.rsx-card .cd-meta span{display:inline-flex;align-items:center;gap:5px}' +
  '.rsx-card .cd-meta .rsx-ic{width:13px;height:13px;color:var(--gold)}' +
  '.rsx-tool{border-style:dashed;background:rgba(201,168,76,.04)}' +
  '.rsx-tool .tl-ic{display:flex;align-items:center;justify-content:center;aspect-ratio:16/9;color:var(--gold-bright);background:radial-gradient(circle at 50% 45%,rgba(201,168,76,.14),transparent 65%)}' +
  '.rsx-tool .tl-ic .rsx-ic{width:38px;height:38px}' +
  '.rsx-empty{color:var(--text-muted);font-size:13.5px;padding:18px 4px}' +
  /* features */
  '.rsx-feat{margin-bottom:18px}' +
  '.rsx-feat-g{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:12px}' +
  '.rsx-feat .fe{border:1px solid var(--gold-border);border-radius:14px;padding:15px 16px;background:var(--glass-bg);display:flex;flex-direction:column;gap:5px}' +
  '.rsx-feat .fe .rsx-ic{width:20px;height:20px;color:var(--gold-bright);margin-bottom:4px}' +
  '.rsx-feat .fe b{font-size:13.5px;color:var(--text)}.rsx-feat .fe span{font-size:12.5px;color:var(--text-muted);line-height:1.5}' +
  '.rsx-integ summary{cursor:pointer;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--gold)}' +
  /* path page */
  '.rsx-back{background:none;border:0;color:var(--gold);font:inherit;font-size:13px;font-weight:800;cursor:pointer;padding:4px 0;margin-bottom:12px}' +
  '.rsx-path{display:grid;grid-template-columns:minmax(0,1fr) 400px;gap:20px;align-items:start}' +
  '.rsx-ph{position:relative;border-radius:18px;overflow:hidden;aspect-ratio:21/8;border:1px solid var(--gold-border);margin-bottom:14px}' +
  '.rsx-ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}' +
  '.rsx-ph .ph-veil{position:absolute;inset:0;background:linear-gradient(0deg,rgba(5,10,18,.92),rgba(5,10,18,.35) 55%,rgba(5,10,18,.15))}' +
  '.rsx-ph .ph-in{position:absolute;left:22px;right:22px;bottom:18px}' +
  '.rsx-ph .rsx-kick{color:#F0D878}' +
  '.rsx-ph h2{margin:6px 0 0;color:#F5EFE6;font-family:var(--serif,Georgia,serif);font-size:clamp(1.35rem,2.6vw,1.9rem);font-weight:600;line-height:1.2}' +
  '.rsx-about{font-size:15px;line-height:1.7;color:var(--text-sub);margin:0 0 14px}' +
  '.rsx-dimlist{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:6px}' +
  '.rsx-dimlist .dl{border-left:2px solid var(--gold-border-hover);padding:2px 0 2px 12px}' +
  '.rsx-dimlist .dl b{display:block;font-size:13.5px;color:var(--text)}.rsx-dimlist .dl span{font-size:12.5px;color:var(--text-muted);line-height:1.5}' +
  '.rsx-flow{list-style:none;margin:8px 0 0;padding:0;counter-reset:fl}' +
  '.rsx-flow li{counter-increment:fl;display:flex;align-items:center;gap:12px;padding:9px 0;border-bottom:1px dashed var(--gold-border);font-size:13.5px}' +
  '.rsx-flow li::before{content:counter(fl);width:24px;height:24px;flex:none;border-radius:50%;display:grid;place-items:center;font-size:11px;font-weight:800;color:var(--gold-bright);border:1.5px solid var(--gold-border-hover)}' +
  '.rsx-flow li b{color:var(--text);flex:1}.rsx-flow li span{color:var(--text-muted);font-size:12.5px}' +
  '.rsx-flow li.pers::before{content:"★";background:rgba(201,168,76,.15)}' +
  '.rsx-persprev{margin-top:12px}' +
  '.rsx-persprev .pp{margin:6px 0;padding:9px 12px;border-radius:10px;background:rgba(201,168,76,.07);border:1px solid var(--gold-border);font-size:13px;color:var(--text-sub);line-height:1.5}' +
  '.rg-kick{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--text-faint);font-weight:800;margin:0 0 8px}' +
  '.rsx-pr{position:sticky;top:6px}' +
  '.rsx-cz{padding:20px}' +
  '.rsx-f{margin-top:14px}' +
  '.rsx-f>label{display:block;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin:0 0 7px}' +
  '.rsx-seg{display:flex;gap:6px;flex-wrap:wrap}' +
  '.rsx-seg button{flex:1 1 0;min-width:84px;border:1px solid var(--gold-border);background:var(--bg-mid);color:var(--text-sub);border-radius:11px;padding:9px 8px;font:inherit;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;transition:border-color .2s,background .2s}' +
  '.rsx-seg button b{font-size:12.5px}.rsx-seg button span{font-size:10.5px;color:var(--text-muted);text-align:center}' +
  '.rsx-seg button.on{border-color:var(--gold);background:rgba(201,168,76,.13);color:var(--gold-bright)}' +
  '.rsx-seg button:disabled{opacity:.4;cursor:not-allowed}' +
  '.rsx-seg-sm{margin:4px 0 10px}.rsx-seg-sm button{flex:0 1 auto;padding:7px 12px}' +
  '.rsx-styles{display:grid;gap:6px}' +
  '.rsx-style{text-align:left;border:1px solid var(--gold-border);background:var(--bg-mid);border-radius:12px;padding:10px 12px;font:inherit;color:var(--text-sub);cursor:pointer;display:flex;flex-direction:column;gap:2px;transition:border-color .2s,background .2s}' +
  '.rsx-style b{font-size:13px;color:var(--text)}.rsx-style span{font-size:11.5px;color:var(--text-muted);line-height:1.45}' +
  '.rsx-style.on{border-color:var(--gold);background:rgba(201,168,76,.1)}.rsx-style.on b{color:var(--gold-bright)}' +
  '.rsx-pers{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}' +
  '.rsx-pe{border:1px solid var(--gold-border);background:var(--bg-mid);border-radius:12px;padding:8px 6px;font:inherit;font-size:11px;font-weight:700;color:var(--text-sub);cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center;line-height:1.25}' +
  '.rsx-pe .pe-av{width:46px;height:46px;border-radius:50%;overflow:hidden;border:1.5px solid var(--gold-border)}' +
  '.rsx-pe .pe-av img,.rsx-pe .pe-av svg{width:100%;height:100%;object-fit:cover;display:block}' +
  '.rsx-pe.on{border-color:var(--gold);background:rgba(201,168,76,.1);color:var(--gold-bright)}.rsx-pe.on .pe-av{border-color:var(--gold)}' +
  '.rsx-studio{margin-top:10px}' +
  '.rsx-studio .st-frame{position:relative;aspect-ratio:16/9;border-radius:12px;overflow:hidden;border:1px solid var(--gold-border-hover);background:#0C1626}' +
  '.rsx-studio .st-vid{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 38%;display:block}' +
  '.rsx-studio .st-tag{position:absolute;right:8px;top:8px;font-size:8.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:rgba(245,239,230,.85);background:rgba(5,10,18,.6);border:1px solid rgba(245,239,230,.25);border-radius:999px;padding:3px 8px}' +
  '.rsx-studio .st-nm{position:absolute;left:10px;bottom:8px;font-size:10.5px;color:rgba(245,239,230,.78);text-shadow:0 1px 6px rgba(0,0,0,.6)}' +
  '.rsx-studio .st-nm b{display:block;font-size:12.5px;color:#F5EFE6}' +
  '.rsx-studio .st-q{margin:8px 0 0;font-size:12px;line-height:1.5;color:var(--text-muted)}' +
  '.rsx-studio .st-cc{position:absolute;left:0;right:0;bottom:0;padding:26px 12px 30px;font-size:12px;font-weight:600;line-height:1.4;color:#F5EFE6;text-shadow:0 1px 6px rgba(0,0,0,.8);background:linear-gradient(180deg,transparent,rgba(4,8,16,.82) 60%)}' +
  '.rsx-studio .st-nm{z-index:2}' +
  '.rsx-up{display:flex;align-items:center;gap:12px;flex-wrap:wrap}' +
  '.rsx-up .rsim-btn{padding:9px 16px;font-size:12.5px}' +
  '.rsx-link{background:none;border:0;color:var(--gold);font:inherit;font-size:12.5px;font-weight:700;cursor:pointer;padding:4px 0;text-decoration:underline;text-underline-offset:3px}' +
  '.rsx-cvstat{display:block;font-size:12px;color:var(--text-muted);margin-top:8px;line-height:1.5}' +
  '.rsx-cvstat .ok{display:inline-flex;align-items:center;gap:5px;color:#7FCF9B;font-weight:700}.rsx-cvstat .ok .rsx-ic{width:13px;height:13px}' +
  '.rsx-ta{width:100%;box-sizing:border-box;min-height:110px;margin-top:8px;background:var(--bg-mid);border:1px solid var(--gold-border);border-radius:11px;color:var(--text);font:inherit;font-size:13px;padding:10px 12px;resize:vertical}' +
  '.rsx-more{margin-top:14px;border-top:1px dashed var(--gold-border);padding-top:12px}' +
  '.rsx-more summary{cursor:pointer;font-size:12.5px;font-weight:700;color:var(--gold)}' +
  '.rsx-mg{display:grid;gap:10px;margin-top:10px}' +
  '.rsx-mg .rsim-field label{font-size:10.5px}' +
  '.rsx-mg textarea{min-height:80px}' +
  '.rsx-tg{display:flex;align-items:center;gap:9px;font-size:13px;color:var(--text-sub);margin-top:14px;cursor:pointer}' +
  '.rsx-tg input{accent-color:#C9A84C;width:16px;height:16px}' +
  '.rsx-start{width:100%;justify-content:center;margin-top:16px;padding:14px 22px;font-size:14.5px}' +
  /* session header */
  '.rsx-sh{margin:0 0 14px}' +
  '.rsx-sh .sh-top{display:flex;align-items:center;gap:10px 16px;flex-wrap:wrap;margin-bottom:9px;font-size:12.5px;color:var(--text-muted)}' +
  '.rsx-sh .sh-top b{color:var(--text);font-size:13.5px;flex:1;min-width:200px}' +
  '.rsx-sh .sh-left{display:inline-flex;align-items:center;gap:5px;color:var(--gold-bright);font-weight:700}' +
  '.rsx-sh .sh-left.over{color:#FF9A7B}.rsx-sh .sh-left .rsx-ic{width:14px;height:14px}' +
  '.rsx-sh .sh-rail{display:flex;gap:8px}' +
  '.rsx-sh .sh-g{flex-basis:0;min-width:0;display:flex;flex-direction:column;gap:5px}' +
  '.rsx-sh .sh-gl{font-size:9.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
  '.rsx-sh .sh-g.now .sh-gl{color:var(--gold-bright)}.rsx-sh .sh-g.done .sh-gl{color:var(--text-muted)}' +
  '.rsx-sh .sh-bars{display:flex;gap:3px}' +
  '.rsx-sh .sh-bars i{flex:1;height:4px;border-radius:2px;background:rgba(128,128,128,.25)}' +
  '.rsx-sh .sh-bars i.done{background:var(--gold)}.rsx-sh .sh-bars i.now{background:var(--gold-bright);box-shadow:0 0 8px rgba(201,168,76,.5)}' +
  /* case + exhibits */
  '.rsx-case{display:grid;grid-template-columns:minmax(0,1fr);gap:12px;margin:14px 0 4px}.rsx-case>*{min-width:0}' +
  '.rsx-brief{border:1px solid var(--gold-border);border-radius:14px;background:var(--bg-mid);padding:12px 16px}' +
  '.rsx-brief summary{cursor:pointer;font-size:13.5px;font-weight:700;color:var(--text)}' +
  '.rsx-brief p{font-size:13.5px;line-height:1.65;color:var(--text-sub);margin:8px 0 0}' +
  '.rsx-brief .cb-client{font-size:12px;color:var(--text-muted)}' +
  '.rsx-ex-k{font-size:10px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);margin-right:8px}' +
  '.rsx-facts{margin-top:12px;display:grid;gap:6px}' +
  '.rsx-facts .cf{font-size:13px;line-height:1.55;color:var(--text-sub);padding:8px 12px;border-radius:10px;border:1px solid var(--gold-border);background:var(--glass-bg)}' +
  '.rsx-facts .cf b{color:var(--text)}.rsx-facts .cf em{font-style:normal;font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;margin-left:8px;color:var(--text-faint)}' +
  '.rsx-facts .cf.asked{border-color:rgba(127,207,155,.45)}.rsx-facts .cf.asked em{color:#7FCF9B}' +
  '.rsx-ex{margin:0;border:1px solid var(--gold-border-hover);border-radius:14px;background:var(--bg-mid);padding:14px 16px}' +
  '.rsx-ex figcaption{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px;margin-bottom:10px}' +
  '.rsx-ex figcaption b{font-size:14px;color:var(--text)}' +
  '.rsx-tw{overflow-x:auto}' +
  '.rsx-ex table{width:100%;border-collapse:collapse;font-size:13px;font-variant-numeric:tabular-nums}' +
  '.rsx-ex th{text-align:left;font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--text-muted);font-weight:800;padding:7px 10px;border-bottom:1px solid var(--gold-border-hover);white-space:nowrap}' +
  '.rsx-ex td{padding:7px 10px;border-bottom:1px solid var(--gold-border);color:var(--text-sub)}' +
  '.rsx-ex td.n,.rsx-ex th:not(:first-child){text-align:right}' +
  '.rsx-ex tr.sub td:first-child{padding-left:24px;color:var(--text-muted)}' +
  '.rsx-ex tr.tot td{font-weight:800;color:var(--text);border-top:1.5px solid var(--gold-border-hover)}' +
  '.rsx-ex-note{font-size:11.5px;color:var(--text-faint);margin:10px 0 0}' +
  '.rsx-bars{display:grid;gap:10px}' +
  '.rsx-bars .rb{display:grid;grid-template-columns:150px 1fr 90px;gap:10px;align-items:center;font-size:13px;color:var(--text-sub)}' +
  '.rsx-bars .rb-t{height:14px;border-radius:4px;background:rgba(128,128,128,.15);overflow:hidden}' +
  '.rsx-bars .rb-t i{display:block;height:100%;background:linear-gradient(90deg,#8B6914,#C9A84C,#F0D878);border-radius:4px}' +
  '.rsx-bars .rb b{text-align:right;color:var(--text);font-variant-numeric:tabular-nums}' +
  '.rsx-num{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:12px 0 2px;padding:12px 14px;border:1px solid var(--gold-border-hover);border-radius:12px;background:rgba(201,168,76,.06)}' +
  '.rsx-num label{font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--gold)}' +
  '.rsx-num input{width:160px;background:var(--bg-mid);border:1px solid var(--gold-border);border-radius:10px;color:var(--text);font:inherit;font-size:16px;font-weight:700;padding:9px 12px;font-variant-numeric:tabular-nums}' +
  '.rsx-num input:focus{outline:none;border-color:var(--gold)}' +
  '.rsx-num .u{font-size:13px;font-weight:700;color:var(--text-sub)}.rsx-num .h{flex-basis:100%;font-size:11.5px;color:var(--text-faint)}' +
  '.rsx-tgt{font-size:11.5px;color:var(--text-muted);margin-left:10px;font-weight:600}' +
  '.rsx-res{margin:10px 0 0;padding:10px 12px;border-radius:10px;font-size:13.5px;border:1px solid var(--gold-border)}' +
  '.rsx-res.ok{border-color:rgba(127,207,155,.5);background:rgba(127,207,155,.08)}.rsx-res.close{border-color:rgba(240,216,120,.5);background:rgba(240,216,120,.07)}.rsx-res.off,.rsx-res.none{border-color:rgba(255,154,123,.45);background:rgba(255,120,90,.06)}' +
  '.rsx-sol{margin-top:10px}.rsx-sol summary{cursor:pointer;color:var(--gold);font-size:12.5px;font-weight:700}.rsx-sol p{font-size:13.5px;line-height:1.6;color:var(--text-sub);margin:8px 0 0}' +
  /* report */
  '.rsx-rep{border:1px solid var(--gold-border-hover);border-radius:20px;background:var(--glass-bg);padding:24px 26px;margin-bottom:16px}' +
  '.rp-top{display:flex;gap:26px;align-items:center;flex-wrap:wrap;padding-bottom:18px;border-bottom:1px solid var(--gold-border)}' +
  '.rp-score{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:160px}' +
  '.rp-band{font-size:12px;font-weight:800;letter-spacing:.04em;text-align:center;border-radius:999px;padding:5px 12px;border:1px solid}' +
  '.rp-band.b-strong{color:#7FCF9B;border-color:rgba(127,207,155,.5)}.rp-band.b-good{color:var(--gold-bright);border-color:var(--gold-border-hover)}.rp-band.b-mid{color:#F0B878;border-color:rgba(240,184,120,.5)}.rp-band.b-low{color:#FF9A7B;border-color:rgba(255,154,123,.5)}' +
  '.rp-delta{font-size:12px;font-weight:700}.rp-delta.up{color:#7FCF9B}.rp-delta.dn{color:#FF9A7B}' +
  '.rp-meta{flex:1;min-width:260px}.rp-meta h2{margin:6px 0 10px;font-size:1.45rem;color:var(--text)}' +
  '.rp-chips{display:flex;flex-wrap:wrap;gap:6px}.rp-chips span{font-size:11.5px;font-weight:700;color:var(--text-sub);border:1px solid var(--gold-border);border-radius:999px;padding:4px 10px}' +
  '.rp-grid{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:22px;padding:18px 0;border-bottom:1px solid var(--gold-border)}' +
  '.rp-d{margin-bottom:12px}.rp-d .rd-h{display:flex;justify-content:space-between;gap:10px;font-size:13.5px}' +
  '.rp-d .rd-h b{color:var(--text)}.rp-d .rd-h span{color:var(--gold-bright);font-weight:800;font-variant-numeric:tabular-nums;white-space:nowrap}' +
  '.rp-d .rd-h em{font-style:normal;font-size:11px;margin-left:4px}.rp-d .rd-h em.up{color:#7FCF9B}.rp-d .rd-h em.dn{color:#FF9A7B}' +
  '.rp-d .rd-t{height:8px;border-radius:99px;background:rgba(128,128,128,.18);overflow:hidden;margin:6px 0 4px}' +
  '.rp-d .rd-t i{display:block;height:100%;border-radius:99px;background:linear-gradient(90deg,#8B6914,#C9A84C,#F0D878)}' +
  '.rp-d p{font-size:11.5px;color:var(--text-faint);margin:0;line-height:1.45}' +
  '.rp-d.na .rd-h span{color:var(--text-faint);font-weight:600;font-size:12px}' +
  '.rp-sw{display:grid;gap:12px;align-content:start}' +
  '.rp-list{border-radius:14px;padding:12px 14px;border:1px solid}' +
  '.rp-list.good{border-color:rgba(127,207,155,.35);background:rgba(127,207,155,.05)}.rp-list.fix{border-color:rgba(255,154,123,.35);background:rgba(255,120,90,.05)}' +
  '.rp-list p{font-size:13px;line-height:1.55;color:var(--text-sub);margin:6px 0 0}.rp-list em{font-style:normal;font-size:11px;color:var(--text-faint)}' +
  '.rp-plan{padding-top:18px}' +
  '.rsx-tabs{display:flex;gap:6px;border-bottom:1px solid var(--gold-border);margin:0 0 14px;overflow-x:auto;scrollbar-width:none}' +
  '.rsx-tabs button{flex:none;background:none;border:0;border-bottom:2px solid transparent;color:var(--text-muted);font:inherit;font-size:13.5px;font-weight:800;padding:10px 14px;cursor:pointer;margin-bottom:-1px}' +
  '.rsx-tabs button.on{color:var(--gold-bright);border-bottom-color:var(--gold)}' +
  '.rsx-pane{display:none}.rsx-pane.on{display:block;animation:rsimEnter .3s ease}' +
  '.rsx-dimchip{display:inline-block;font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--gold-bright);border:1px solid var(--gold-border-hover);border-radius:999px;padding:2px 8px;margin-left:6px;vertical-align:1px}' +
  /* transcript */
  '.rsx-tx{display:grid;gap:10px;max-height:none}' +
  '.rsx-tx .tx-sec{font-size:10.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);text-align:center;margin:8px 0 2px;display:flex;align-items:center;gap:10px}' +
  '.rsx-tx .tx-sec::before,.rsx-tx .tx-sec::after{content:"";flex:1;height:1px;background:var(--gold-border)}' +
  '.rsx-tx .tx-row{max-width:82%;border-radius:14px;padding:10px 14px}' +
  '.rsx-tx .tx-i{background:var(--bg-mid);border:1px solid var(--gold-border);justify-self:start;border-top-left-radius:4px}' +
  '.rsx-tx .tx-c{background:rgba(201,168,76,.1);border:1px solid var(--gold-border-hover);justify-self:end;border-top-right-radius:4px}' +
  '.rsx-tx .tx-who{font-size:10.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--gold);margin-bottom:4px}' +
  '.rsx-tx .tx-who span{color:var(--text-faint);font-weight:700;margin-left:6px;letter-spacing:0}' +
  '.rsx-tx .tx-b{font-size:13.5px;line-height:1.6;color:var(--text-sub);white-space:normal;word-wrap:break-word}' +
  /* dashboard */
  '.rsx-dash-h h2{margin:6px 0 16px;font-size:1.5rem;color:var(--text)}' +
  '.rsx-kpis{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:10px;margin-bottom:14px}' +
  '.rsx-kpis .kpi{border:1px solid var(--gold-border);border-radius:14px;background:var(--glass-bg);padding:14px 14px 12px}' +
  '.rsx-kpis .kpi b{display:block;font-size:1.45rem;color:var(--gold-bright);font-variant-numeric:tabular-nums}' +
  '.rsx-kpis .kpi span{font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--text-muted)}' +
  '.rsx-chart svg{width:100%;height:200px;display:block}' +
  '.rsx-chart .gl{stroke:rgba(128,128,128,.18);stroke-width:1}.rsx-chart .gt{fill:var(--text-faint);font-size:11px}' +
  '.rsx-chart .ln{fill:none;stroke:var(--gold-bright);stroke-width:2.5;stroke-linejoin:round;stroke-linecap:round;vector-effect:non-scaling-stroke}' +
  '.rsx-chart .pt{fill:var(--bg-base,#050A12);stroke:var(--gold-bright);stroke-width:2.5;vector-effect:non-scaling-stroke}' +
  '.rsx-bypath{display:grid;gap:8px}' +
  '.rsx-bypath .bp{display:flex;align-items:center;gap:14px;flex-wrap:wrap;border:1px solid var(--gold-border);border-radius:12px;padding:12px 16px}' +
  '.rsx-bypath .bp-n{flex:1;min-width:220px}.rsx-bypath .bp-n b{display:block;font-size:13.5px;color:var(--text)}.rsx-bypath .bp-n span{font-size:12px;color:var(--text-muted)}' +
  '.rsx-bypath .bp-v{display:flex;gap:14px;font-size:12.5px;color:var(--text-muted)}.rsx-bypath .bp-v b{color:var(--gold-bright)}' +
  '.rsx-bypath em{font-style:normal;font-size:11px;font-weight:700}.rsx-bypath em.up{color:#7FCF9B}.rsx-bypath em.dn{color:#FF9A7B}' +
  '.rsx-bypath .rsim-btn{padding:8px 14px;font-size:12px}' +
  '.rsim-hist .h-tx{border:1px solid var(--gold-border);border-radius:12px;padding:12px;margin-top:-4px}' +
  '.rsx-del{margin-top:14px;color:var(--text-muted)}' +
  /* light theme */
  ':root[data-theme="light"] .rsx-card,:root[data-theme="light"] .rsx-steps li,:root[data-theme="light"] .rsx-feat .fe,:root[data-theme="light"] .rsx-snap,:root[data-theme="light"] .rsx-kpis .kpi,:root[data-theme="light"] .rsx-rep{background:#FFFFFF;border-color:rgba(139,105,20,.22)}' +
  ':root[data-theme="light"] .rsx-chip{background:#FFFFFF;border-color:rgba(139,105,20,.25);color:rgba(26,31,40,.78)}' +
  ':root[data-theme="light"] .rsx-chip.on{color:#10131B}' +
  ':root[data-theme="light"] .rsx-search,:root[data-theme="light"] .rsx-seg button,:root[data-theme="light"] .rsx-style,:root[data-theme="light"] .rsx-pe,:root[data-theme="light"] .rsx-ex,:root[data-theme="light"] .rsx-brief,:root[data-theme="light"] .rsx-num input,:root[data-theme="light"] .rsx-ta,:root[data-theme="light"] .rsx-tx .tx-i{background:#FFFFFF}' +
  ':root[data-theme="light"] .rsx-seg button.on,:root[data-theme="light"] .rsx-style.on,:root[data-theme="light"] .rsx-pe.on{background:#FBF6E9;color:#8B6914}' +
  ':root[data-theme="light"] .rsx-style.on b,:root[data-theme="light"] .rsx-tabs button.on,:root[data-theme="light"] .rp-d .rd-h span,:root[data-theme="light"] .rsx-kpis .kpi b,:root[data-theme="light"] .rsx-bypath .bp-v b,:root[data-theme="light"] .rsx-sh .sh-left,:root[data-theme="light"] .rsx-sh .sh-g.now .sh-gl,:root[data-theme="light"] .rsx-steps .st-ic,:root[data-theme="light"] .rsx-feat .fe .rsx-ic,:root[data-theme="light"] .rsx-spark,:root[data-theme="light"] .rsx-tool .tl-ic{color:#8B6914}' +
  ':root[data-theme="light"] .rsx-kick,:root[data-theme="light"] .rsx-sec-k,:root[data-theme="light"] .rsx-f>label,:root[data-theme="light"] .rsx-ex-k,:root[data-theme="light"] .rsx-back,:root[data-theme="light"] .rsx-link,:root[data-theme="light"] .rsx-tx .tx-who,:root[data-theme="light"] .rsx-num label{color:#8B6914}' +
  ':root[data-theme="light"] .rsx-hero .rsx-kick,:root[data-theme="light"] .rsx-ph .rsx-kick{color:#F0D878}' +
  ':root[data-theme="light"] .rsx-ring .rg-fg,:root[data-theme="light"] .rsx-chart .ln,:root[data-theme="light"] .rsx-chart .pt{stroke:#B8902C}' +
  ':root[data-theme="light"] .rsx-chart .pt{fill:#fff}' +
  ':root[data-theme="light"] .rsx-card .cd-done{background:#2E8B57;color:#fff}' +
  ':root[data-theme="light"] .rp-band.b-strong,:root[data-theme="light"] .rp-delta.up,:root[data-theme="light"] .rp-d .rd-h em.up,:root[data-theme="light"] .rsx-cvstat .ok,:root[data-theme="light"] .rsx-facts .cf.asked em,:root[data-theme="light"] .rsx-bypath em.up{color:#1F7A47}' +
  ':root[data-theme="light"] .rp-band.b-good{color:#8B6914}:root[data-theme="light"] .rp-band.b-mid{color:#A35E12}:root[data-theme="light"] .rp-band.b-low,:root[data-theme="light"] .rp-delta.dn,:root[data-theme="light"] .rp-d .rd-h em.dn,:root[data-theme="light"] .rsx-bypath em.dn,:root[data-theme="light"] .rsx-sh .sh-left.over{color:#B4452B}' +
  /* responsive */
  '@media(max-width:1000px){.rsx-path{grid-template-columns:1fr}.rsx-pr{position:static}.rsx-kpis{grid-template-columns:repeat(3,minmax(0,1fr))}}' +
  '@media(max-width:860px){.rsx-steps{grid-template-columns:repeat(2,minmax(0,1fr))}.rsx-feat-g{grid-template-columns:repeat(2,minmax(0,1fr))}.rp-grid{grid-template-columns:1fr}}' +
  '@media(max-width:640px){' +
    '.rsim-body{padding:18px 14px 60px}' +
    '.rsx-hero{min-height:0;border-radius:18px}.rsx-hero-in{padding:26px 20px 22px}.rsx-hero::after{background:linear-gradient(0deg,rgba(5,10,18,.95) 20%,rgba(5,10,18,.62))}' +
    '.rsx-hero p{font-size:14px}.rsx-hero-cta .rsim-btn{flex:1 1 100%;justify-content:center}' +
    '.rsx-steps{grid-template-columns:1fr;gap:8px}.rsx-steps li{flex-direction:row;flex-wrap:wrap;align-items:center;padding:12px 14px;gap:4px 12px}.rsx-steps li span:last-child{flex-basis:100%}.rsx-steps .st-n{top:10px}' +
    '.rsx-grid{grid-template-columns:1fr;gap:12px}' +
    '.rsx-card{flex-direction:row}.rsx-card .cd-img{width:38%;aspect-ratio:auto;min-height:132px;flex:none}.rsx-card .cd-body{padding:12px 13px}.rsx-card .cd-desc{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}' +
    '.rsx-card .cd-kind{left:6px;top:6px;font-size:9px;padding:3px 7px}.rsx-card .cd-done{left:6px;right:6px;bottom:6px;justify-content:center;font-size:9.5px}' +
    '.rsx-tool .tl-ic{width:38%;aspect-ratio:auto;flex:none}' +
    '.rsx-feat-g{grid-template-columns:1fr}.rsx-search{min-width:100%}' +
    '.rsx-ph{aspect-ratio:16/9}.rsx-dimlist{grid-template-columns:1fr}' +
    '.rsx-cz{padding:16px}.rsx-pers{grid-template-columns:repeat(3,minmax(0,1fr))}' +
    '.rsx-rep{padding:18px 16px}.rp-top{gap:14px}.rp-score{width:100%}' +
    '.rsx-kpis{grid-template-columns:repeat(2,minmax(0,1fr))}' +
    '.rsx-tx .tx-row{max-width:94%}' +
    '.rsx-bars .rb{grid-template-columns:96px 1fr 70px;font-size:12px}' +
    '.rsx-ex td:first-child{white-space:nowrap}.rsx-ex{padding:12px}.rsx-ex table{font-size:12.5px}.rsx-ex th{font-size:9.5px;padding:6px 8px}.rsx-ex td{padding:7px 8px}.rsx-tw{margin:0 -4px;padding-bottom:4px}' +
    '.rsim-sep{display:none}.rsim-steps{gap:2px}' +
    '.rsx-sh .sh-gl{font-size:8.5px;letter-spacing:.06em}' +
    '.rsim-step:not(.now) span{display:none}.rsim-step{padding:6px 8px}.rsim-top{padding:9px 14px;gap:8px}.rsim-top b.rsim-brand{font-size:10.5px;letter-spacing:.1em}' +
  '}' +
  '@media(prefers-reduced-motion:reduce){.rsx-hero-bg{animation:none}.rsx-card,.rsx-card .cd-img img{transition:none}}';


  function weakestDim(sess) {
    var d = { structure: sess.structure, content: sess.content, communication: sess.comm };
    return Object.keys(d).sort(function (a, b) { return d[a] - d[b]; })[0];
  }
  function nextFocusText(sess) {
    var dim = weakestDim(sess);
    var map = {
      structure: T('Last session: strong content, weaker structure. Your next session raises the weight of structured behavioral questions — lead with one sentence of context, then actions.', 'Sesi lalu: isi kuat, struktur lebih lemah. Sesi berikutnya menambah bobot pertanyaan perilaku terstruktur — buka dengan satu kalimat konteks, lalu tindakan.'),
      content: T('Last session: clean delivery, thin evidence. Your next session emphasises role-specific questions — bring numbers and named projects.', 'Sesi lalu: penyampaian bersih, bukti tipis. Sesi berikutnya menekankan pertanyaan spesifik peran — bawa angka dan proyek bernama.'),
      communication: T('Last session: good substance, noisy delivery. Your next session uses shorter timed answers — fewer fillers, earlier landings.', 'Sesi lalu: substansi baik, penyampaian berisik. Sesi berikutnya memakai jawaban singkat berwaktu — lebih sedikit pengisi, mendarat lebih cepat.')
    };
    return map[dim];
  }

  /* ─── PREPARE ─── */
  function renderSetup(presetFocus) {
    var w = setScreen('setup', 'customise');
    var cfg = state.cfg || {};
    var card = el('div', 'rsim-card');
    var bk = el('button', 'rsx-back', '← ' + T('All interviews', 'Semua wawancara')); bk.addEventListener('click', renderHome); w.appendChild(bk);
    card.appendChild(el('div', 'rsim-kick', T('Build your own session — one job, one goal', 'Buat sesimu sendiri — satu pekerjaan, satu tujuan')));
    card.appendChild(el('h2', null, T('Define the interview you are training for', 'Tentukan wawancara yang sedang kamu latih')));

    var grid = el('div', 'rsim-grid');
    function field(labelTxt, node) {
      var f = el('div', 'rsim-field');
      f.appendChild(el('label', null, labelTxt));
      f.appendChild(node);
      grid.appendChild(f);
      return node;
    }
    var selRole = document.createElement('select');
    selRole.innerHTML = '<option value="">' + T('Any role', 'Peran apa pun') + '</option>' +
      (G.directions || []).map(function (d) { return '<option value="' + d.id + '"' + (cfg.roleId === d.id ? ' selected' : '') + '>' + esc(L(d.name)) + '</option>'; }).join('');
    field(T('Target role', 'Peran tujuan'), selRole);
    var selInd = document.createElement('select');
    selInd.innerHTML = '<option value="">' + T('Any industry', 'Industri apa pun') + '</option>' +
      (G.industries || []).map(function (d) { return '<option value="' + d.id + '"' + (cfg.industryId === d.id ? ' selected' : '') + '>' + esc(L(d.name)) + '</option>'; }).join('');
    field(T('Industry', 'Industri'), selInd);
    var selLvl = document.createElement('select');
    [['any', T('Any seniority', 'Semua senioritas')], ['entry', T('Entry / fresh graduate', 'Pemula / fresh graduate')], ['mid', T('Mid-level', 'Menengah')], ['senior', T('Senior / lead', 'Senior / pemimpin')]].forEach(function (o) {
      selLvl.innerHTML += '<option value="' + o[0] + '"' + (cfg.level === o[0] ? ' selected' : '') + '>' + o[1] + '</option>';
    });
    field(T('Seniority', 'Senioritas'), selLvl);
    var selStage = document.createElement('select');
    [['any', T('Any stage', 'Tahap apa pun')], ['hr', T('HR / screening', 'HR / penyaringan')], ['tech', T('Technical round', 'Babak teknis')], ['user', T('User / peer round', 'Babak user / rekan')], ['final', T('Final / leadership', 'Final / kepemimpinan')]].forEach(function (o) {
      selStage.innerHTML += '<option value="' + o[0] + '"' + (cfg.stage === o[0] ? ' selected' : '') + '>' + o[1] + '</option>';
    });
    field(T('Interview stage', 'Tahap wawancara'), selStage);
    var selDiff = document.createElement('select');
    [[1, T('Warm-up', 'Pemanasan')], [2, T('Standard', 'Standar')], [3, T('Demanding', 'Menuntut')]].forEach(function (o) {
      selDiff.innerHTML += '<option value="' + o[0] + '"' + ((cfg.difficulty || 2) === o[0] ? ' selected' : '') + '>' + o[1] + '</option>';
    });
    field(T('Difficulty', 'Tingkat kesulitan'), selDiff);
    var selCount = document.createElement('select');
    [[4, T('Short · 4 questions', 'Singkat · 4 pertanyaan')], [6, T('Standard · 6 questions', 'Standar · 6 pertanyaan')], [8, T('Full · 8 questions', 'Penuh · 8 pertanyaan')]].forEach(function (o) {
      selCount.innerHTML += '<option value="' + o[0] + '"' + ((cfg.count || 6) === o[0] ? ' selected' : '') + '>' + o[1] + '</option>';
    });
    field(T('Session length', 'Durasi sesi'), selCount);
    var company = document.createElement('input'); company.type = 'text';
    company.placeholder = T('e.g. the company you applied to (optional)', 'mis. perusahaan yang kamu lamar (opsional)');
    company.value = cfg.company || '';
    field(T('Target company', 'Perusahaan tujuan'), company);
    card.appendChild(grid);

    /* interviewer persona */
    var perF = el('div', 'rsim-field'); perF.style.marginTop = '16px';
    perF.appendChild(el('label', null, T('Your interviewer', 'Pewawancaramu')));
    var pGrid = el('div', 'rsim-personas');
    PERSONAS.forEach(function (p) {
      var b = el('button', 'rsim-pcard' + ((cfg.persona || 'hr') === p.id ? ' on' : ''));
      b.type = 'button'; b.dataset.v = p.id;
      var av = el('span', 'rsim-avatar');
      var pph = PHOTOS[p.id];
      if (pph) {
        av.innerHTML = '<img src="' + pph.src + '" alt="" loading="lazy" decoding="async" ' +
          'style="width:100%;height:100%;object-fit:cover;object-position:' + pph.pos + '">';
      } else {
        av.innerHTML = avatarSvg(p);
      }
      var info = el('span');
      info.appendChild(el('b', null, esc(L(p.name))));
      info.appendChild(el('span', null, esc(L(p.title))));
      b.appendChild(av); b.appendChild(info);
      b.addEventListener('click', function () {
        pGrid.querySelectorAll('.rsim-pcard').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
      });
      pGrid.appendChild(b);
    });
    perF.appendChild(pGrid);
    card.appendChild(perF);

    /* focus chips */
    var focusWrap = el('div', 'rsim-field'); focusWrap.style.marginTop = '16px';
    focusWrap.appendChild(el('label', null, T('What do you want to improve?', 'Apa yang ingin kamu perbaiki?')));
    var chips = el('div', 'rsim-chips');
    var focusOpts = [
      ['structure', T('Structured answers', 'Jawaban terstruktur')],
      ['content', T('Evidence & relevance', 'Bukti & relevansi')],
      ['communication', T('Delivery & fillers', 'Penyampaian & kata pengisi')],
      ['difficult', T('My difficult case', 'Kasus sulitku')]
    ];
    var focusSel = (presetFocus ? [presetFocus] : (cfg.focus || []));
    focusOpts.forEach(function (o) {
      var c = el('button', 'rsim-chip' + (focusSel.indexOf(o[0]) !== -1 ? ' on' : ''), o[1]);
      c.type = 'button'; c.dataset.v = o[0];
      c.addEventListener('click', function () { c.classList.toggle('on'); });
      chips.appendChild(c);
    });
    focusWrap.appendChild(chips);
    card.appendChild(focusWrap);

    /* difficult case picker */
    var caseWrap = el('div', 'rsim-field'); caseWrap.style.marginTop = '14px';
    caseWrap.appendChild(el('label', null, T('Difficult situations that apply to you (optional)', 'Situasi sulit yang relevan denganmu (opsional)')));
    var cChips = el('div', 'rsim-chips');
    B.cases.forEach(function (c) {
      var b2 = el('button', 'rsim-chip' + ((cfg.caseIds || []).indexOf(c.id) !== -1 ? ' on' : ''), esc(L(c.name)));
      b2.type = 'button'; b2.dataset.v = c.id;
      b2.addEventListener('click', function () { b2.classList.toggle('on'); });
      cChips.appendChild(b2);
    });
    caseWrap.appendChild(cChips);
    card.appendChild(caseWrap);

    /* JD + CV */
    var jd = document.createElement('textarea');
    jd.placeholder = T('Paste the job description here — questions and the prep checklist will use it. (optional)', 'Tempel deskripsi pekerjaan di sini — pertanyaan dan daftar persiapan akan memakainya. (opsional)');
    jd.value = cfg.jd || '';
    var jdF = el('div', 'rsim-field'); jdF.style.marginTop = '14px';
    jdF.appendChild(el('label', null, T('Job description', 'Deskripsi pekerjaan')));
    jdF.appendChild(jd);
    card.appendChild(jdF);

    var cvF = el('div', 'rsim-field'); cvF.style.marginTop = '14px';
    cvF.appendChild(el('label', null, T('Your CV / resume (read on-device, never uploaded)', 'CV / resume-mu (dibaca di perangkat, tidak pernah diunggah)')));
    var cvRow = el('div', 'rsim-row'); cvRow.style.marginTop = '0';
    var cvInput = document.createElement('input');
    cvInput.type = 'file'; cvInput.accept = '.pdf,.docx,.txt,.rtf,.odt,.md'; cvInput.style.display = 'none';
    var cvBtn = el('button', 'rsim-btn ghost', T('Choose file…', 'Pilih file…')); cvBtn.type = 'button';
    var cvStatus = el('span', 'rsim-note', state.cvMined ? T('CV loaded — ' + state.cvMined.claims.length + ' claims found to probe.', 'CV termuat — ' + state.cvMined.claims.length + ' klaim ditemukan untuk diuji.') : T('No CV loaded yet.', 'Belum ada CV termuat.'));
    cvBtn.addEventListener('click', function () { cvInput.click(); });
    cvInput.addEventListener('change', function () {
      var f = cvInput.files && cvInput.files[0];
      if (!f) return;
      if (!window.MT_RANGE_DOC) { cvStatus.textContent = T('Document reader not available on this page.', 'Pembaca dokumen tidak tersedia di halaman ini.'); return; }
      cvStatus.textContent = T('Reading…', 'Membaca…');
      window.MT_RANGE_DOC.extract(f).then(function (doc) {
        state.cvMined = mineCvDeep(doc.text);
        cvStatus.textContent = T('✓ Read ' + f.name + ' — ' + state.cvMined.claims.length + ' claims found to probe in your interview.', '✓ Terbaca ' + f.name + ' — ' + state.cvMined.claims.length + ' klaim ditemukan untuk diuji dalam wawancaramu.');
      }).catch(function (err) {
        cvStatus.textContent = window.MT_RANGE_DOC.message ? window.MT_RANGE_DOC.message(err && err.message, lang()) : T('Could not read that file.', 'File tidak terbaca.');
      });
    });
    cvRow.appendChild(cvBtn); cvRow.appendChild(cvInput); cvRow.appendChild(cvStatus);
    cvF.appendChild(cvRow);
    card.appendChild(cvF);
    w.appendChild(card);

    /* prep checklist */
    var check = el('div', 'rsim-card');
    check.appendChild(el('div', 'rsim-kick', T('Preparation checklist', 'Daftar persiapan')));
    var list = el('div');
    check.appendChild(list);
    function renderChecklist() {
      list.innerHTML = '';
      var items = [
        [!!selRole.value, T('Target role chosen — questions will match its core skills', 'Peran tujuan dipilih — pertanyaan akan mengikuti keterampilan intinya')],
        [!!jd.value.trim(), T('Job description pasted — the interviewer will probe its requirements', 'Deskripsi pekerjaan ditempel — pewawancara akan menguji persyaratannya')],
        [!!state.cvMined, T('CV loaded — your own claims become follow-up questions', 'CV termuat — klaimmu sendiri menjadi pertanyaan lanjutan')],
        [!!company.value.trim(), T('Company named — prepare your "why this company" answer', 'Perusahaan disebut — siapkan jawaban "mengapa perusahaan ini"')],
        [history().length > 0, T('At least one practice session completed', 'Minimal satu sesi latihan selesai')]
      ];
      items.forEach(function (it) {
        var r = el('div', 'rsim-check' + (it[0] ? ' done' : ''));
        r.appendChild(el('i', null, it[0] ? '✓' : '·'));
        r.appendChild(el('span', null, it[1]));
        list.appendChild(r);
      });
    }
    renderChecklist();
    [selRole, jd, company].forEach(function (n) { n.addEventListener('change', renderChecklist); n.addEventListener('input', renderChecklist); });
    w.appendChild(check);

    /* mode */
    var modeCard = el('div', 'rsim-card');
    modeCard.appendChild(el('div', 'rsim-kick', T('02 · Practice', '02 · Latihan')));
    modeCard.appendChild(el('p', 'rsim-sub', T('Practice Mode shows coaching before each answer. Live Simulation withholds coaching until the debrief — closest to the real room. You choose video, voice or text per question once inside.', 'Mode Latihan menampilkan arahan sebelum tiap jawaban. Simulasi Langsung menahan arahan sampai debrief — paling mendekati ruangan sungguhan. Format video, suara, atau teks kamu pilih per pertanyaan di dalam.')));
    var toggles = el('div', 'rsim-chips'); toggles.style.margin = '12px 0';
    var vt = el('button', 'rsim-chip' + (state.tts ? ' on' : ''), T('🔊 Interviewer voice', '🔊 Suara pewawancara'));
    vt.type = 'button'; vt.dataset.v = 'tts';
    vt.addEventListener('click', function () { vt.classList.toggle('on'); });
    toggles.appendChild(vt);
    modeCard.appendChild(toggles);
    modeCard.appendChild(el('p', 'rsim-note', T('Voice, camera and every recording stay in this browser session and are discarded when you close the simulator.', 'Suara, kamera, dan semua rekaman tetap di sesi peramban ini dan dibuang saat simulator ditutup.')));
    var mrow = el('div', 'rsim-row');
    var bp = el('button', 'rsim-btn ghost', T('Start Practice Mode →', 'Mulai Mode Latihan →'));
    var bl = el('button', 'rsim-btn', T('Start Live Simulation →', 'Mulai Simulasi Langsung →'));
    function collect(mode) {
      var focus = [].slice.call(chips.querySelectorAll('.on')).map(function (n) { return n.dataset.v; });
      var caseIds = [].slice.call(cChips.querySelectorAll('.on')).map(function (n) { return n.dataset.v; });
      state.tts = vt.classList.contains('on');
      var pSel = pGrid.querySelector('.rsim-pcard.on');
      var cfg2 = {
        roleId: selRole.value || null, industryId: selInd.value || null,
        level: selLvl.value, stage: selStage.value === 'any' ? null : selStage.value,
        difficulty: +selDiff.value, count: +selCount.value,
        company: company.value.trim(), jd: jd.value.trim(),
        focus: focus, caseIds: caseIds, mode: mode,
        persona: pSel ? pSel.dataset.v : 'hr'
      };
      state.cfg = cfg2; saveCfg(cfg2);
      startSession(cfg2);
    }
    bp.addEventListener('click', function () { collect('practice'); });
    bl.addEventListener('click', function () { collect('live'); });
    mrow.appendChild(bp); mrow.appendChild(bl);
    modeCard.appendChild(mrow);
    w.appendChild(modeCard);
  }

  /* ─── PRACTICE ─── */
  function startSession(cfg) {
    var qs = pickQuestions(cfg);
    var jdM = cfg.jd ? mineJd(cfg.jd) : null;
    if (jdM && jdM.reqs.length) {
      qs.splice(Math.min(2, qs.length), 0, {
        id: 'jd_req', cat: 'role', d: 2, sig: ['star'],
        q: { en: 'The job description asks for: “' + jdM.reqs[0].trim().slice(0, 140) + '”. Where have you shown exactly that?', id: 'Deskripsi pekerjaan meminta: “' + jdM.reqs[0].trim().slice(0, 140) + '”. Di mana kamu pernah menunjukkan persis itu?' },
        tests: { en: 'Requirement-to-evidence mapping from the actual JD.', id: 'Pemetaan persyaratan-ke-bukti dari JD sebenarnya.' },
        coach: { en: 'Quote one project that matches the requirement, your actions in it, and a measured outcome.', id: 'Sebut satu proyek yang cocok dengan persyaratan itu, tindakanmu di dalamnya, dan hasil terukurnya.' }
      });
    }
    if (state.cvMined && state.cvMined.claims.length) {
      var claim = state.cvMined.claims[Math.floor(Math.random() * state.cvMined.claims.length)];
      var short = claim.length > 110 ? claim.slice(0, 110) + '…' : claim;
      qs.splice(Math.min(3, qs.length), 0, {
        id: 'cv_claim', cat: 'behavioral', d: 2, sig: ['star', 'metric'],
        q: { en: 'Your CV says: “' + short + '”. Tell me about the moment that claim was most tested.', id: 'CV-mu menyebut: “' + short + '”. Ceritakan momen ketika klaim itu paling diuji.' },
        tests: { en: 'Evidence behind your own CV claims.', id: 'Bukti di balik klaim CV-mu sendiri.' },
        coach: { en: 'This is your claim — defend it with the hardest real example you have, not the smoothest.', id: 'Ini klaimmu — pertahankan dengan contoh nyata tersulit yang kamu punya, bukan yang termulus.' }
      });
    }
    qs = framePhases(qs.slice(0, (cfg.count || 6) + 2), cfg);
    var cfg0 = JSON.parse(JSON.stringify(cfg)); state.restart = function () { startSession(cfg0); };
    state.session = {
      cfg: cfg, qs: qs, idx: 0, answers: [], startedAt: Date.now(), mode: cfg.mode, done: false, greeted: false
    };
    renderQuestion();
  }

  /* T-5: the probe ladder. Real interviewers climb — example → your action → why → result → what
     you would change — and stories that survive one probe often collapse on the third. Each rung is
     drawn from the question’s own probe families (MT_ROPE_QBANK.probeLibrary), with the family that
     matches the answer’s gap moved to the front. Depth: the lesson’s tryit `probes`, else 2 in live
     sessions and 1 in practice; a one-way recorded format has no follow-ups. */
  var TRIGGER_FAMILY = { too_short: 'detail', generic: 'real_example', we_not_i: 'own_actions', no_metric: 'result_measure', no_result: 'result_measure' };
  function probeDepth(s, q) {
    var c = s.cfg || {};
    if (q && (q.step || q.num || q.phase === 'greet' || q.phase === 'close')) return 0;   /* no probes on the greeting or on the candidate's own questions */
    if (c.format === 'one_way') return 0;
    if (typeof c.probes === 'number') return Math.max(0, Math.min(3, c.probes));
    if (state.drill) return 0;
    return s.mode === 'live' ? 2 : 1;
  }
  function nextProbe(q, a, used) {
    var lib = B.probeLibrary || {};
    var order = (q.probes && q.probes.length) ? q.probes.slice() :
      (a.profile === 'behavioural' ? ['own_actions', 'why_choice', 'result_measure', 'change'] : ['detail', 'challenge']);
    var pref = a.trigger && TRIGGER_FAMILY[a.trigger];
    if (pref === 'real_example' && a.profile !== 'behavioural' && a.profile !== 'situational') pref = 'detail';
    if (pref && used.indexOf(pref) === -1 && lib[pref]) order.unshift(pref);
    for (var i = 0; i < order.length; i++) { if (used.indexOf(order[i]) === -1 && lib[order[i]]) return order[i]; }
    return null;
  }
  function probePhrase(fam) {
    var f = (B.probeLibrary || {})[fam] || {};
    var arr = f[lang()] || f.en || [];
    return arr.length ? arr[Math.floor(Math.random() * arr.length)] : null;
  }
  /* a probe answer “holds” when it adds substance rather than retreating */
  function probeHeld(a, text) {
    var brief = a && (a.profile === 'eligibility' || a.profile === 'closing' || a.profile === 'rapport');
    if (!a || a.limited || a.words < (brief ? 6 : 12)) return false;
    if (/\b(i don'?t know|don'?t remember|not sure|tidak tahu|lupa|nggak tahu|gak tahu|kurang ingat)\b/i.test(text || '') && a.words < 30) return false;
    return brief || a.digits > 0 || a.star.a || a.star.r || a.level >= 3 || a.words >= 30;
  }
  var PROBE_NAME = {
    own_actions: { en: 'your own actions', id: 'tindakanmu sendiri' }, why_choice: { en: 'why that choice', id: 'mengapa pilihan itu' },
    result_measure: { en: 'the result and how you know', id: 'hasil dan cara tahunya' }, change: { en: 'what you would change', id: 'yang akan kamu ubah' },
    real_example: { en: 'a real example', id: 'contoh nyata' }, detail: { en: 'more detail', id: 'detail lebih' },
    transfer: { en: 'how it transfers here', id: 'penerapannya di sini' }, challenge: { en: 'a challenge', id: 'tantangan' },
    pushback: { en: 'pushback', id: 'sanggahan' }
  };

  /* A lesson `tryit` may name one question (qid) or a short set, and pre-configure the persona,
     format, scoring profile and probe depth it was written for (blueprint 18.1). Unknown ids are skipped. */
  function startDrill(qid, opts) {
    var all = allQuestions();
    var ids = (opts && opts.set && opts.set.length) ? opts.set : [qid];
    var qs = ids.map(function (id) { return all.filter(function (x) { return x.id === id; })[0]; }).filter(Boolean);
    if (!qs.length) { renderHome(); return; }
    state.drill = true;
    state.restart = function () { startDrill(qid, opts); };
    var per = (opts && opts.persona && PERSONAS.some(function (p) { return p.id === opts.persona; })) ? opts.persona : (state.cfg.persona || 'hr');
    state.session = {
      cfg: { mode: 'practice', count: qs.length, persona: per, profile: (opts && opts.profile) || null, format: (opts && opts.format) || null, lesson: (opts && opts.lesson) || null,
        probes: (opts && typeof opts.probes === 'number') ? opts.probes : null },
      qs: qs, idx: 0, answers: [], startedAt: Date.now(), mode: 'practice', done: false, greeted: true
    };
    renderQuestion();
  }

  /* ─── PHASES — greeting → questions → closing, the shape of a real interview ───
     The greeting and the closing are turns of their own: a warm opener that is read
     for rapport (not for STAR), and a closing question that is the candidate's to
     ask. Both are hard-coded here, not improvised, so the sequence is always the
     same and can be rehearsed. One-way recorded formats and lesson drills skip them. */
  function framePhases(qs, cfg) {
    if (!qs.length || (cfg && cfg.format === 'one_way')) return qs;
    var out = [{
      id: 'greet', phase: 'greet', cat: 'greeting', d: 1, sig: [], warm: true, secName: { en: 'Greeting', id: 'Pembuka' },
      q: { en: 'Before we start — how are you doing today? Did you find everything all right?', id: 'Sebelum kita mulai — apa kabar hari ini? Semuanya lancar sampai di sini?' },
      tests: { en: 'Rapport — a warm, brief, two-way start.', id: 'Rapport — pembuka yang hangat, singkat, dua arah.' },
      coach: { en: 'One or two sentences, warm and specific, then hand it back: “And you?”', id: 'Satu atau dua kalimat, hangat dan spesifik, lalu kembalikan: “Bagaimana dengan Anda?”' }
    }].concat(qs);
    var last = out[out.length - 1];
    if (last.cat === 'closing') out[out.length - 1] = Object.assign({}, last, { phase: 'close', secName: last.secName || { en: 'Closing', id: 'Penutup' } });
    else out.push({
      id: 'close_qs', phase: 'close', cat: 'closing', d: 1, sig: ['research'], secName: { en: 'Closing', id: 'Penutup' },
      q: { en: 'That is all from my side. Do you have any questions for us?', id: 'Itu saja dari saya. Apakah ada yang ingin kamu tanyakan kepada kami?' },
      tests: { en: 'Preparation and genuine interest — the questions you bring.', id: 'Persiapan dan minat sungguhan — pertanyaan yang kamu bawa.' },
      coach: { en: 'Two researched questions this person can actually answer, then thanks and the next step.', id: 'Dua pertanyaan hasil riset yang benar-benar bisa dijawab orang ini, lalu terima kasih dan langkah berikutnya.' }
    });
    return out;
  }
  function phaseOf(q) { return (q && q.phase) || 'q'; }
  function qPosition(s) {
    var main = []; s.qs.forEach(function (q, i) { if (phaseOf(q) === 'q') main.push(i); });
    return { k: main.indexOf(s.idx) + 1, n: main.length, phase: phaseOf(s.qs[s.idx]) };
  }
  function qLabel(s) {
    var p = qPosition(s);
    if (p.phase === 'greet') return T('Greeting', 'Pembuka');
    if (p.phase === 'close') return T('Closing', 'Penutup');
    return T('Question ', 'Pertanyaan ') + p.k + '/' + p.n;
  }
  /* the progress bar across the top of the room: the phases, with the question phase filling as you go */
  function roomPhaseBar(s) {
    var bar = el('div', 'rm-phase');
    var p = qPosition(s), hasG = s.qs.some(function (q) { return q.phase === 'greet'; }), hasC = s.qs.some(function (q) { return q.phase === 'close'; });
    var order = ['greet', 'q', 'close'], ci = order.indexOf(p.phase);
    var segs = [];
    if (hasG) segs.push({ id: 'greet', t: T('Greeting', 'Pembuka') });
    segs.push({ id: 'q', t: T('Questions', 'Pertanyaan') + (p.n ? ' · ' + (p.phase === 'q' ? p.k : p.phase === 'close' ? p.n : 0) + '/' + p.n : '') });
    if (hasC) segs.push({ id: 'close', t: T('Closing', 'Penutup') });
    segs.forEach(function (sg) {
      var d = el('span', 'ph ' + sg.id + (sg.id === p.phase ? ' now' : order.indexOf(sg.id) < ci ? ' done' : ''));
      if (sg.id === 'q' && p.phase === 'q' && p.n) d.style.setProperty('--p', Math.round(((p.k - 1) / p.n) * 100) + '%');
      d.innerHTML = '<i></i>' + esc(sg.t); bar.appendChild(d);
    });
    return bar;
  }

  /* ─── FEEDBACK FROM THE INTERVIEWER'S SEAT — after every turn, inside the room ───
     Three lines, in the order a person would say them: what you said (a direct quote),
     what worked, and why it matters to the person across the table. Written as the
     interviewer's reading of the answer, not a score. Practice sessions add the one
     change for next time; live sessions keep coaching for the report. */
  function quoteOf(text) {
    var t = String(text || '').replace(/\s+/g, ' ').trim(); if (!t) return '';
    var sents = t.match(/[^.!?]+[.!?]*/g) || [t];
    var pick = sents.filter(function (x) { return /\d/.test(x); })[0] || sents.slice(0, 3).sort(function (a, b) { return b.length - a.length; })[0] || sents[0];
    pick = pick.trim(); return pick.length > 170 ? pick.slice(0, 167).replace(/\s+\S*$/, '') + '…' : pick;
  }
  function seatLine(a, q, per) {
    var p = a.profile, tr = a.trigger, lv = a.level || 0;
    if (a.limited) return T('Nothing reached the interviewer — a silence is read as a pass.', 'Tidak ada yang sampai ke pewawancara — hening dibaca sebagai melewatkan.');
    if (p === 'rapport') return lv >= 3 ? T('The room relaxed. A warm, brief start makes the interviewer lean in for the rest.', 'Suasana mencair. Pembuka yang hangat dan singkat membuat pewawancara condong sepanjang sisa wawancara.')
      : T('A cold or one-word start reads as nerves, and the interviewer now carries the warmth alone.', 'Pembuka dingin atau satu kata terbaca sebagai gugup, dan pewawancara kini memikul kehangatan sendirian.');
    if (p === 'closing') return lv >= 3 ? T('Your questions show you are deciding too — that goes in the notes as engagement.', 'Pertanyaanmu menunjukkan kamu juga sedang memutuskan — itu dicatat sebagai keterlibatan.')
      : T('“No questions” ends the interview flat; the interviewer leaves with nothing new about you.', '“Tidak ada pertanyaan” menutup wawancara dengan datar; pewawancara pulang tanpa hal baru tentangmu.');
    if (tr === 'too_short') return T('The interviewer is still waiting for the substance — a short answer makes them do the work.', 'Pewawancara masih menunggu isinya — jawaban pendek membuat mereka yang bekerja.');
    if (tr === 'generic') return T('From this seat it could be anyone’s answer; there is nothing to write in the notes.', 'Dari kursi ini jawabannya bisa milik siapa saja; tidak ada yang bisa dicatat.');
    if (tr === 'we_not_i') return T('The interviewer cannot tell what you did from what the team did — your name is not on the result yet.', 'Pewawancara tak bisa membedakan yang kamu lakukan dari yang tim lakukan — namamu belum ada di hasilnya.');
    if (tr === 'no_metric') return T('Without a number the claim goes in the notes as “says it improved” — unverifiable.', 'Tanpa angka, klaim itu dicatat sebagai “katanya membaik” — tak bisa diverifikasi.');
    if (tr === 'no_result') return T('The setup is written down; the interviewer is still waiting for the ending.', 'Latarnya sudah dicatat; pewawancara masih menunggu akhirnya.');
    if (tr === 'rambling') return T('Attention dropped halfway — the interviewer is now looking for a moment to cut in.', 'Perhatian turun di tengah jalan — pewawancara kini mencari celah untuk memotong.');
    if (tr === 'good_depth' || lv >= 4) return T('This goes in the notes as evidence: a real situation, your actions, a measured result.', 'Ini dicatat sebagai bukti: situasi nyata, tindakanmu, hasil terukur.');
    if (lv >= 3) return T('Clear and usable — the interviewer could repeat this to the panel in one line.', 'Jelas dan bisa dipakai — pewawancara bisa mengulangnya ke panel dalam satu kalimat.');
    if (a.num && a.num.verdict === 'ok') return T('The number is right and the working was audible — exactly what a case interviewer marks.', 'Angkanya benar dan cara hitungnya terdengar — persis yang dinilai pewawancara kasus.');
    return T('Usable, but nothing in it would make the interviewer underline a line.', 'Bisa dipakai, tapi tak ada yang membuat pewawancara menggarisbawahi.');
  }
  function roomFeedback(s, per) {
    var box = el('aside', 'rm-fb');
    box.appendChild(el('div', 'fb-h', '<b>' + T('How that landed', 'Bagaimana itu diterima') + '</b><span>' + T('from the interviewer’s seat', 'dari kursi pewawancara') + ' · ' + esc(L(per.name)) + '</span>'));
    var last = null; for (var i = s.answers.length - 1; i >= 0; i--) { if (!s.answers[i].skipped && (s.answers[i].text || s.answers[i].numRaw)) { last = s.answers[i]; break; } }
    if (!last) { box.appendChild(el('p', 'fb-empty', T('After each answer this panel shows what you said, what worked, and why it matters to the person across the table — while the interview is still running.', 'Setelah tiap jawaban, panel ini menunjukkan apa yang kamu katakan, apa yang berhasil, dan mengapa itu penting bagi orang di seberang meja — selagi wawancara masih berjalan.'))); return box; }
    if (last.quote) box.appendChild(el('blockquote', 'fb-q', '“' + esc(last.quote) + '”'));
    if (s.mode === 'practice' && last.fb && last.fb.strengths[0]) box.appendChild(el('p', 'fb-s', '<span>' + T('What worked', 'Yang berhasil') + '</span>' + esc(last.fb.strengths[0])));
    if (last.seat) box.appendChild(el('p', 'fb-y', '<span>' + T('Why it matters', 'Mengapa penting') + '</span>' + esc(last.seat)));
    if (s.mode === 'practice' && last.fb && last.fb.changes[0]) box.appendChild(el('p', 'fb-c', '<span>' + T('Next time', 'Lain kali') + '</span>' + esc(last.fb.changes[0])));
    var n = s.answers.filter(function (a) { return !a.skipped && a.text; }).length;
    box.appendChild(el('p', 'fb-n', n > 1 ? T(n + ' turns so far · every one is in the report', n + ' giliran sejauh ini · semuanya ada di laporan') : T('Full notes and the transcript follow in the report.', 'Catatan lengkap dan transkrip menyusul di laporan.')));
    return box;
  }

  /* media helpers */
  function stopMedia() {
    if (state.vi) { try { state.vi.destroy(); } catch (e) {} state.vi = null; }
    if (state.recog) { try { state.recog.stop(); } catch (e) {} state.recog = null; }
    if (state.recorder && state.recorder.state !== 'inactive') { try { state.recorder.stop(); } catch (e) {} }
    state.recorder = null; state.recOn = false;
    if (state.stream) { state.stream.getTracks().forEach(function (t) { t.stop(); }); state.stream = null; }
    if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
    if (state.meterId) { cancelAnimationFrame(state.meterId); state.meterId = null; }
    if (state.audioCtx) { try { state.audioCtx.close(); } catch (e) {} state.audioCtx = null; }
    if (window.speechSynthesis) try { window.speechSynthesis.cancel(); } catch (e) {}
  }

  function renderQuestion(followup) {
    stopMedia();
    var s = state.session;
    var q = s.qs[s.idx];
    var per = persona();
    var w = setScreen('interview', 'practice');
    var card = el('div', 'rsim-card');

    s.askedAt = Date.now();
    if (s.cfg && s.cfg.pathId) card.appendChild(sessionHeader(s));

    /* the interview room — a video call, not a form: phase bar, the interviewer's tile with your
       self-view, the feedback panel from the interviewer's seat, and the call tools */
    var media = window.MT_ROPE_SIM_MEDIA || {};
    var photo = PHOTOS[per.id] || null;
    var stage = el('div', 'rsim-stage rsim-room');
    if (!(s.cfg && s.cfg.pathId)) stage.appendChild(roomPhaseBar(s));   /* path sessions carry the section rail above instead */
    var grid = el('div', 'rm-grid'); stage.appendChild(grid);
    var main = el('div', 'rm-main'); grid.appendChild(main);
    if (state.vi) { try { state.vi.destroy(); } catch (e) {} state.vi = null; }
    var V = null;
    if (window.MT_ROPE_VIDEO) {
      V = state.vi = MT_ROPE_VIDEO.create({ host: main, persona: { id: per.id, name: L(per.name), still: photo && photo.src }, media: media, lang: lang(), captions: state.cc !== false, muted: !state.tts });
    } else if (photo) { var fbImg = el('img', 'rv-fallback'); fbImg.src = photo.src; fbImg.alt = ''; main.appendChild(fbImg); }
    var nameChip = el('div', 'st-name');
    nameChip.appendChild(el('span', 'dot'));
    var nWrap = el('span');
    nWrap.appendChild(el('b', null, esc(L(per.name)) + (s.cfg.company ? ' · ' + esc(s.cfg.company) : '')));
    var spP = s.cfg && s.cfg.pathId ? pathById(s.cfg.pathId) : null;
    nWrap.appendChild(el('span', null, ' — ' + esc(L((spP && spP.personaTitle) || per.title))));
    nameChip.appendChild(nWrap);
    main.appendChild(nameChip);
    var liveChip = el('div', 'st-live', '<i></i><span>' + T('Live', 'Langsung') + '</span><em>0:00</em>');
    main.appendChild(liveChip);
    (function () { var em = liveChip.querySelector('em'); var id = setInterval(function () { if (!document.body.contains(liveChip)) { clearInterval(id); return; } em.textContent = mmss((Date.now() - s.startedAt) / 1000); }, 1000); })();
    /* your tile: the camera when the answer format is video, otherwise a quiet "camera off" card */
    var pip = el('div', 'st-pip');
    var pipV = document.createElement('video'); pipV.muted = true; pipV.playsInline = true; pipV.autoplay = true;
    pip.appendChild(pipV);
    pip.appendChild(el('div', 'pip-off', '<b>' + T('You', 'Kamu') + '</b><span>' + T('Camera off', 'Kamera mati') + '</span>'));
    pip.appendChild(el('span', 'pip-lbl', T('You', 'Kamu')));
    pip.appendChild(el('div', 'recdot', '<i></i>REC'));
    main.appendChild(pip);
    var side = el('div', 'rm-side'); grid.appendChild(side);
    side.appendChild(roomFeedback(s, per));
    var tools = el('div', 'rm-tools'); stage.appendChild(tools);
    card.appendChild(stage);
    if (s.idx > 0 && !followup) {
      stage.classList.add('transitioning');
      setTimeout(function () { stage.classList.remove('transitioning'); }, 650);
    }
    function listening() { stage.classList.add('listening'); if (V) V.listen(true); }
    var replay = el('button', 'rsim-btn ghost', '🔊 ' + T('Repeat question', 'Ulangi pertanyaan'));

    var catName = '';
    B.categories.forEach(function (c) { if (c.id === q.cat) catName = L(c.name); });
    var probeTag = (followup && s.probeLevel) ? ' · ' + T('probe ', 'galian ') + s.probeLevel + '/' + Math.max(probeDepth(s, q), s.probeLevel) +
      (s.probeFamily && PROBE_NAME[s.probeFamily] ? ' — ' + esc(L(PROBE_NAME[s.probeFamily])) : '') : '';
    if (q.secName && s.cfg && s.cfg.pathId) catName = L(q.secName) + (q.step ? '' : ' · ' + catName);
    var kickSub = phaseOf(q) === 'q' ? esc(catName) : phaseOf(q) === 'greet' ? T('Rapport', 'Rapport') : (q.secName && !/^(Closing|Penutup)$/.test(L(q.secName)) ? esc(L(q.secName)) : T('Your questions', 'Pertanyaanmu'));
    card.appendChild(el('div', 'rsim-kick', qLabel(s) + ' · ' + kickSub + probeTag));
    if (!followup && s.cfg && s.cfg.format && s.cfg.format !== 'generic') {
      var FMT_NOTE = {
        one_way: T('One-way recorded format: no follow-up questions and one take, as in a recorded video interview. Switch the answer format to Video below.', 'Format rekaman satu arah: tanpa pertanyaan lanjutan dan satu kali ambil, seperti wawancara video rekaman. Ubah format jawaban ke Video di bawah.'),
        phone: T('Phone screen: voice only. Switch the answer format to Audio below — the interviewer cannot see you or your notes.', 'Seleksi telepon: suara saja. Ubah format jawaban ke Audio di bawah — pewawancara tidak bisa melihatmu atau catatanmu.'),
        phone_whatsapp: T('WhatsApp or phone screen: voice only, often unscheduled. Switch the answer format to Audio below and answer as if you picked up the call.', 'Seleksi WhatsApp atau telepon: suara saja, sering tanpa jadwal. Ubah format jawaban ke Audio di bawah dan jawab seolah kamu mengangkat teleponnya.')
      };
      if (FMT_NOTE[s.cfg.format]) card.appendChild(el('p', 'rsim-note', esc(FMT_NOTE[s.cfg.format])));
    }
    var qText = followup || L(q.q);
    if (followup) {
      card.appendChild(el('div', 'rsim-q', esc(L(q.q))));
      card.appendChild(el('div', 'rsim-followup', '↳ ' + esc(followup)));
    } else {
      card.appendChild(el('div', 'rsim-q', esc(qText)));
    }
    var meta = el('div', 'rsim-qmeta');
    meta.appendChild(el('span', null, T('Tests: ', 'Menguji: ') + '<b>' + esc(L(q.tests)) + '</b>'));
    card.appendChild(meta);
    if (s.mode === 'practice' && !followup && q.coach) {
      card.appendChild(el('div', 'rsim-followup', '🧭 ' + esc(L(q.coach))));
    }
    if (!followup && (q.caseId || q.exhibit)) { card.appendChild(casePanel(s, q)); s.factsFresh = false; }
    var numIn = null;
    if (!followup && q.num) {
      var nb = el('div', 'rsx-num');
      nb.appendChild(el('label', null, T('Your number', 'Angkamu')));
      numIn = document.createElement('input'); numIn.type = 'text'; numIn.setAttribute('inputmode', 'decimal'); numIn.autocomplete = 'off';
      numIn.placeholder = lang() === 'id' ? 'mis. 12,5' : 'e.g. 12.5';
      nb.appendChild(numIn);
      nb.appendChild(el('span', 'u', esc(q.num.unit === 'Rp bn' ? (lang() === 'id' ? 'miliar Rp' : 'Rp billion') : q.num.unit === 'Rp' ? 'Rp' : (lang() === 'id' && UNIT_ID[q.num.unit] ? UNIT_ID[q.num.unit] : q.num.unit))));
      nb.appendChild(el('span', 'h', T('Type the final number here; talk through your working in the answer box below — interviewers mark the method too.', 'Ketik angka akhirnya di sini; jelaskan cara hitungmu di kotak jawaban di bawah — pewawancara juga menilai caranya.')));
      card.appendChild(nb);
    }
    var caseBrief = (!followup && q.step === 'clarify' && q.caseId && SP && SP.cases[q.caseId]) ? L(SP.cases[q.caseId].brief) + ' ' : '';
    var joining = !s.greeted && !followup && !state.drill;
    var bridge = (!followup && s.idx > 0 && !state.drill && s.greeted && s.cfg.format !== 'one_way') ? bridgeFor(per.id, s.lastA) + ' ' : '';
    var spoken = (!s.greeted ? L(per.greet) + ' ' : '') + bridge + caseBrief + qText;
    s.greeted = true;
    var clipKey = followup ? null : (q.phase === 'greet' ? 'greet' : q.phase === 'close' ? 'close' : 'q:' + q.id);
    var armed = false;
    function armClock() { if (armed) return; armed = true; if (!state.t0) state.t0 = Date.now(); }
    state.t0 = null;
    function deliver() {
      if (!document.body.contains(stage) || !V) { armClock(); return; }
      V.say(spoken, { clip: clipKey, rate: per.rate, pitch: per.pitch }).then(armClock);
      /* belt and braces: the clock starts even if the line never reports its end */
      setTimeout(armClock, Math.min(2200 + spoken.length * 75, caseBrief ? 30000 : 16000));
    }
    if (joining) {
      /* joining the room: the tile resolves its video source while the overlay holds (at least 1.5 s, at most 5 s) */
      var jo = el('div', 'st-join');
      jo.innerHTML = '<span class="sj-ring"><i></i></span><b>' + T('Joining the interview room…', 'Memasuki ruang wawancara…') + '</b><span>' + esc(L(per.name)) + (s.cfg.company ? ' · ' + esc(s.cfg.company) : '') + '</span>';
      main.appendChild(jo); stage.classList.add('joining');
      var tJ = Date.now(), joined = false;
      var enter = function () {
        if (joined) return; joined = true;
        setTimeout(function () { stage.classList.remove('joining'); jo.classList.add('out'); setTimeout(function () { if (jo.parentNode) jo.parentNode.removeChild(jo); }, 500); deliver(); }, Math.max(0, 1500 - (Date.now() - tJ)));
      };
      (V ? V.ready : Promise.resolve()).then(enter, enter);
      setTimeout(enter, 5000);
    } else if (V) { V.ready.then(deliver, deliver); } else deliver();
    replay.addEventListener('click', function () { if (V) V.say(qText, { clip: clipKey, rate: per.rate, pitch: per.pitch }); });

    /* call tools: captions, replay, voice, camera, restart */
    var ccB = el('button', state.cc !== false ? 'on' : '', ic('cc') + T('Captions', 'Teks')); ccB.type = 'button'; ccB.setAttribute('aria-pressed', state.cc !== false ? 'true' : 'false');
    ccB.addEventListener('click', function () { state.cc = state.cc === false; ccB.classList.toggle('on', state.cc); ccB.setAttribute('aria-pressed', state.cc ? 'true' : 'false'); try { localStorage.setItem('mt-rope-cc', state.cc ? '1' : '0'); } catch (e) {} if (V) V.setCaptions(state.cc); });
    var rpB = el('button', '', ic('replay') + T('Replay', 'Ulangi')); rpB.type = 'button'; rpB.title = T('Hear the question again', 'Dengar lagi pertanyaannya');
    rpB.addEventListener('click', function () { if (V) V.say(qText, { clip: clipKey, rate: per.rate, pitch: per.pitch }); });
    var vcB = el('button', state.tts ? 'on' : '', ic('sound') + T('Voice', 'Suara')); vcB.type = 'button'; vcB.setAttribute('aria-pressed', state.tts ? 'true' : 'false');
    vcB.addEventListener('click', function () { state.tts = !state.tts; vcB.classList.toggle('on', state.tts); vcB.setAttribute('aria-pressed', state.tts ? 'true' : 'false'); if (V) V.setMuted(!state.tts); });
    var camB = el('button', '', ic('camera') + T('Camera', 'Kamera')); camB.type = 'button';
    camB.addEventListener('click', function () { setFormat(state.fmt === 'video' ? 'text' : 'video'); });
    var rsB = el('button', '', ic('restart') + T('Restart', 'Mulai ulang')); rsB.type = 'button'; var rsArmed = 0;
    rsB.addEventListener('click', function () {
      if (Date.now() - rsArmed < 3500) { stopMedia(); if (state.restart) state.restart(); else renderHome(); return; }
      rsArmed = Date.now(); rsB.classList.add('warn'); rsB.innerHTML = ic('restart') + T('Tap again to restart from the greeting', 'Ketuk lagi untuk mulai ulang dari pembuka');
      setTimeout(function () { rsB.classList.remove('warn'); rsB.innerHTML = ic('restart') + T('Restart', 'Mulai ulang'); }, 3500);
    });
    tools.appendChild(ccB); tools.appendChild(rpB); tools.appendChild(vcB);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) tools.appendChild(camB);
    if (!state.drill) tools.appendChild(rsB);
    tools.appendChild(el('span', 'rm-sp'));
    tools.appendChild(el('span', 'rm-note', esc(L((media.disclosure) || { en: 'AI interviewer · simulation', id: 'Pewawancara AI · simulasi' }))));

    /* answer format switcher */
    var fmt = el('div', 'rsim-fmt');
    var fmts = [
      ['text', '⌨ ' + T('Text', 'Teks')],
      ['audio', '🎙 ' + T('Audio', 'Audio')],
      ['video', '🎥 ' + T('Video', 'Video')]
    ];
    var mediaOk = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    fmts.forEach(function (f) {
      var b = el('button', null, f[1]);
      b.dataset.v = f[0];
      if (f[0] !== 'text' && !mediaOk) { b.disabled = true; b.title = T('Not available in this browser', 'Tidak tersedia di peramban ini'); }
      if (f[0] === state.fmt) b.classList.add('on');
      b.addEventListener('click', function () { setFormat(f[0]); });
      fmt.appendChild(b);
    });
    card.appendChild(fmt);

    /* answer area */
    var media = el('div', 'rsim-media');
    var camBox = el('div', 'rsim-cam');
    camBox.style.display = 'none';
    var vEl = document.createElement('video'); vEl.muted = true; vEl.playsInline = true; vEl.autoplay = true;
    camBox.appendChild(vEl);
    camBox.appendChild(el('div', 'recdot', '<i></i>REC'));
    media.appendChild(camBox);
    var right = el('div'); right.style.flex = '1'; right.style.minWidth = '240px';
    var timer = el('div', 'rsim-timer', '0:00');
    var tgt = targetSecs(q, s);
    var tWrap = el('div'); tWrap.style.display = 'flex'; tWrap.style.alignItems = 'baseline'; tWrap.style.flexWrap = 'wrap';
    tWrap.appendChild(timer); tWrap.appendChild(el('span', 'rsx-tgt', T('target ', 'target ') + mmss(tgt)));
    right.appendChild(tWrap);
    var meter = el('div', 'rsim-meter'); meter.style.display = 'none';
    for (var mi = 0; mi < 24; mi++) meter.appendChild(el('i'));
    right.appendChild(meter);
    var live = el('div', 'rsim-live', '');
    right.appendChild(live);
    var recRow = el('div', 'rsim-row'); recRow.style.display = 'none'; recRow.style.marginTop = '8px';
    var recBtn = el('button', 'rsim-btn rec', '● ' + T('Record answer', 'Rekam jawaban'));
    recRow.appendChild(recBtn);
    right.appendChild(recRow);
    var playSlot = el('div');
    right.appendChild(playSlot);
    var ta = document.createElement('textarea');
    ta.className = 'rsim-ta';
    right.appendChild(ta);
    media.appendChild(right);
    var guide = buildGuide(q, s, {});
    var arow = el('div', 'rsim-answer');
    arow.appendChild(media); arow.appendChild(guide.el);
    card.appendChild(arow);
    ta.addEventListener('input', function () { state.lastListen = Date.now(); listening(); guide.update(ta.value); });

    function setFormat(f) {
      state.fmt = f;
      fmt.querySelectorAll('button').forEach(function (b) { b.classList.toggle('on', b.dataset.v === f); });
      camBox.style.display = 'none';
      pip.classList.toggle('cam', f === 'video'); pip.classList.toggle('mic', f === 'audio');
      camB.classList.toggle('on', f === 'video');
      meter.style.display = f === 'audio' ? '' : 'none';
      recRow.style.display = f === 'text' ? 'none' : '';
      playSlot.innerHTML = '';
      ta.placeholder = f === 'text'
        ? T('Type your answer as you would say it out loud.', 'Ketik jawabanmu seperti kamu mengucapkannya.')
        : (SR ? T('Your live transcript appears here while you record — edit it before submitting.', 'Transkrip langsungmu muncul di sini saat merekam — sunting sebelum dikirim.')
              : T('Speech-to-text is not available in this browser — after recording, type your key points here for full feedback.', 'Ubah-suara-ke-teks tidak tersedia di peramban ini — setelah merekam, ketik poin utamamu di sini untuk umpan balik penuh.'));
      stopMedia2Keep();
      if (f !== 'text') acquireMedia(f);
    }
    function stopMedia2Keep() { /* stop stream/rec but keep timer + screen */
      if (state.recog) { try { state.recog.stop(); } catch (e) {} state.recog = null; }
      if (state.recorder && state.recorder.state !== 'inactive') { try { state.recorder.stop(); } catch (e) {} }
      state.recorder = null; state.recOn = false;
      camBox.classList.remove('rec'); pip.classList.remove('rec');
      recBtn.classList.remove('on'); recBtn.innerHTML = '● ' + T('Record answer', 'Rekam jawaban');
      if (state.stream) { state.stream.getTracks().forEach(function (t) { t.stop(); }); state.stream = null; }
      if (state.meterId) { cancelAnimationFrame(state.meterId); state.meterId = null; }
      if (state.audioCtx) { try { state.audioCtx.close(); } catch (e) {} state.audioCtx = null; }
    }
    function acquireMedia(f) {
      navigator.mediaDevices.getUserMedia(f === 'video' ? { video: true, audio: true } : { audio: true })
        .then(function (stream) {
          state.stream = stream;
          if (f === 'video') { pipV.srcObject = stream; pipV.play().catch(function () {}); }
          if (f === 'audio') startMeter(stream);
        })
        .catch(function () {
          live.textContent = T('Could not access that device — falling back to text.', 'Perangkat tidak dapat diakses — kembali ke teks.');
          setFormat('text');
        });
    }
    function startMeter(stream) {
      try {
        var AC = window.AudioContext || window.webkitAudioContext;
        state.audioCtx = new AC();
        var src = state.audioCtx.createMediaStreamSource(stream);
        var an = state.audioCtx.createAnalyser();
        an.fftSize = 64;
        src.connect(an);
        var data = new Uint8Array(an.frequencyBinCount);
        var bars = meter.querySelectorAll('i');
        (function loop() {
          an.getByteFrequencyData(data);
          bars.forEach(function (b, i) {
            b.style.height = Math.max(4, (data[i % data.length] / 255) * 26) + 'px';
          });
          state.meterId = requestAnimationFrame(loop);
        })();
      } catch (e) {}
    }
    function startRecording() {
      if (!state.stream || !window.MediaRecorder) return;
      try {
        state.chunks = [];
        state.sttGaps = 0; state.lastSttAt = Date.now();
        state.recorder = new MediaRecorder(state.stream);
        state.recorder.ondataavailable = function (e) { if (e.data && e.data.size) state.chunks.push(e.data); };
        state.recorder.start();
        state.recOn = true;
        listening(); state.lastListen = Date.now();
        camBox.classList.add('rec'); pip.classList.add('rec');
        recBtn.classList.add('on'); recBtn.innerHTML = '■ ' + T('Stop recording', 'Hentikan rekaman');
        startStt();
      } catch (e) { state.recorder = null; }
    }
    function stopRecording(cb) {
      if (state.recog) { try { state.recog.stop(); } catch (e) {} state.recog = null; }
      if (!state.recorder || state.recorder.state === 'inactive') { if (cb) cb(null); return; }
      state.recorder.onstop = function () {
        var blob = state.chunks.length ? new Blob(state.chunks, { type: state.fmt === 'video' ? 'video/webm' : 'audio/webm' }) : null;
        state.recOn = false;
        camBox.classList.remove('rec'); pip.classList.remove('rec');
        recBtn.classList.remove('on'); recBtn.innerHTML = '● ' + T('Record again', 'Rekam ulang');
        if (cb) cb(blob);
      };
      try { state.recorder.stop(); } catch (e) { if (cb) cb(null); }
      state.recorder = null;
    }
    var pendingBlob = null;
    recBtn.addEventListener('click', function () {
      if (state.recOn) {
        stopRecording(function (blob) {
          pendingBlob = blob;
          playSlot.innerHTML = '';
          if (blob) {
            var url = URL.createObjectURL(blob);
            var pb = document.createElement(state.fmt === 'video' ? 'video' : 'audio');
            pb.controls = true; pb.src = url; pb.className = 'rsim-playback';
            playSlot.appendChild(pb);
            playSlot.appendChild(el('p', 'rsim-note', T('Review your take, re-record if you want, then submit.', 'Tinjau rekamanmu, rekam ulang bila mau, lalu kirim.')));
          }
        });
      } else {
        pendingBlob = null; playSlot.innerHTML = '';
        if (!state.stream) acquireMedia(state.fmt);
        startRecording();
      }
    });
    function startStt() {
      if (!SR) return;
      try {
        var rec = new SR();
        rec.continuous = true; rec.interimResults = true;
        rec.lang = lang() === 'id' ? 'id-ID' : 'en-US';
        rec.onresult = function (e) {
          var now = Date.now();
          if (now - state.lastSttAt > 2500) state.sttGaps++;
          state.lastSttAt = now;
          var fin = '', inter = '';
          for (var i = 0; i < e.results.length; i++) {
            if (e.results[i].isFinal) fin += e.results[i][0].transcript + ' ';
            else inter += e.results[i][0].transcript;
          }
          if (fin) ta.value = fin;
          live.textContent = inter || T('Listening…', 'Mendengarkan…');
          state.lastListen = now; listening();
          guide.update((fin || ta.value) + ' ' + inter);
        };
        rec.onerror = function () { live.textContent = T('Voice transcription unavailable — type your key points below.', 'Transkripsi suara tidak tersedia — ketik poin utamamu di bawah.'); };
        rec.start();
        state.recog = rec;
        live.textContent = T('Listening…', 'Mendengarkan…');
      } catch (e) {}
    }
    setFormat(state.fmt);

    var row = el('div', 'rsim-row');
    var submit = el('button', 'rsim-btn', T('Submit answer →', 'Kirim jawaban →'));
    var skip = el('button', 'rsim-btn ghost', T('Skip question', 'Lewati pertanyaan'));
    var end = el('button', 'rsim-btn ghost', T('End session', 'Akhiri sesi'));
    row.appendChild(submit); row.appendChild(skip); row.appendChild(end);
    card.appendChild(row);
    card.appendChild(el('p', 'rsim-note', T('Answers are analysed on your device with a transparent rubric — structure, evidence, delivery. Recordings never leave this browser.', 'Jawaban dianalisis di perangkatmu dengan rubrik transparan — struktur, bukti, penyampaian. Rekaman tidak pernah meninggalkan peramban ini.')));
    w.appendChild(card);

    if (state.timerId) clearInterval(state.timerId);
    state.timerId = setInterval(function () {
      if (!state.t0) { timer.textContent = '0:00'; return; }
      var sSec = Math.floor((Date.now() - state.t0) / 1000);
      timer.textContent = Math.floor(sSec / 60) + ':' + String(sSec % 60).padStart(2, '0');
      if (sSec >= tgt) timer.style.color = '#FF9A7B';
    }, 400);

    function finishAnswer(skipped) {
      if (!skipped && V) { try { V.stop(); V.ack(); } catch (e) {} }
      var secs = state.t0 ? Math.round((Date.now() - state.t0) / 1000) : 0;
      if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
      function proceed(blob) {
        var text = ta.value.trim();
        var recKey = q.id + '_' + (s.answers.filter(function (a) { return a.qid === q.id; }).length + 1);
        if (blob) {
          try { state.recordings[recKey] = { url: URL.createObjectURL(blob), kind: state.fmt }; } catch (e) {}
        } else if (pendingBlob) {
          try { state.recordings[recKey] = { url: URL.createObjectURL(pendingBlob), kind: state.fmt }; } catch (e) {}
        }
        var numRaw = numIn ? numIn.value.trim() : '';
        var a = analyseAnswer(text, q, secs, state.sttGaps);
        if (!followup) a = specialise(a, q, text, numRaw);
        else a.dimScore = dimScoreFor(a, q);
        if (!followup && a.caseFacts) { s.facts = a.caseFacts; s.factsFresh = true; }
        var lvl = followup ? (s.probeLevel || 1) : 0;
        var rec2 = {
          qid: q.id, q: L(q.q), followup: followup || null, text: text, skipped: !!skipped,
          fmt: state.fmt, secs: secs, analysis: a, fb: followup ? feedbackFor(a, q) : feedbackAll(a, q), recKey: recKey, guide: guide.mode(),
          dim: q.dim || null, dimName: (function () { var pp = s.cfg && pathById(s.cfg.pathId); var d = pp && q.dim ? pp.dims.filter(function (x) { return x.id === q.dim; })[0] : null; return d ? L(d.name) : null; })(),
          secName: q.secName || null, numRaw: numRaw || null, solution: q.solution ? L(q.solution) : null, special: !!(q.step || q.num),
          askedAt: Math.round(((s.askedAt || Date.now()) - s.startedAt) / 1000), answeredAt: Math.round((Date.now() - s.startedAt) / 1000),
          attempt: followup ? null : s.answers.filter(function (x) { return x.qid === q.id && !x.followup; }).length + 1,
          probe: followup ? { family: s.probeFamily || null, level: lvl, held: !skipped && probeHeld(a, text) } : null,
          concern: q.hiddenConcern ? L(q.hiddenConcern) : null,
          warm: !!q.warm, phase: phaseOf(q),
          quote: skipped ? null : quoteOf(text), seat: skipped ? null : seatLine(a, q, per)
        };
        s.answers.push(rec2);
        s.lastA = skipped ? null : a;
        stopMedia2Keep();
        if (!followup) { s.probesUsed = []; s.probeLevel = 0; }
        if (!skipped && !followup && q.pushback && s.cfg && s.cfg.pushback) {
          s.probesUsed = ['pushback']; s.probeLevel = 1; s.probeFamily = 'pushback';
          renderQuestion(L(q.pushback));
          return;
        }
        if (!skipped && lvl < probeDepth(s, q)) {
          var fam = B.probeLibrary ? nextProbe(q, a, s.probesUsed || []) : null;
          var ptxt = fam ? probePhrase(fam) : null;
          if (!ptxt && !followup && a.trigger && B.followups && B.followups[a.trigger]) {
            /* bank without a probe library: the legacy single follow-up for this gap */
            var arr = B.followups[a.trigger][lang()] || B.followups[a.trigger].en;
            ptxt = arr[Math.floor(Math.random() * arr.length)]; fam = null;
          }
          if (ptxt) {
            (s.probesUsed = s.probesUsed || []).push(fam || ('legacy_' + a.trigger));
            s.probeLevel = lvl + 1; s.probeFamily = fam;
            renderQuestion(ptxt);
            return;
          }
        }
        s.probeLevel = 0; s.probesUsed = []; s.probeFamily = null;
        s.idx++;
        if (s.idx >= s.qs.length) {
          /* the interviewer closes the call before the report */
          s.done = true;
          if (V && !state.drill && s.cfg.format !== 'one_way') {
            card.classList.add('rsim-ending');
            var byeT = L(per.bye || per.greet), ended = false;
            var toReport = function () { if (ended) return; ended = true; renderDebrief(); };
            V.say(byeT, { clip: 'farewell', rate: per.rate, pitch: per.pitch }).then(function () { setTimeout(toReport, 500); });
            setTimeout(toReport, 9000);
          } else renderDebrief();
        }
        else renderQuestion();
      }
      if (state.recOn) stopRecording(proceed);
      else proceed(null);
    }
    submit.addEventListener('click', function () {
      if (numIn && numIn.value.trim()) { finishAnswer(false); return; }
      if (state.fmt === 'text' && !ta.value.trim()) {
        ta.focus();
        ta.placeholder = T('Say or type something first — silence is the one answer that never works.', 'Ucapkan atau ketik dulu — hening adalah satu-satunya jawaban yang tidak pernah berhasil.');
        return;
      }
      if (state.fmt !== 'text' && !ta.value.trim() && !pendingBlob && !state.recOn) {
        live.textContent = T('Record an answer (or type your key points) before submitting.', 'Rekam jawaban (atau ketik poin utamamu) sebelum mengirim.');
        return;
      }
      finishAnswer(false);
    });
    skip.addEventListener('click', function () { finishAnswer(true); });
    end.addEventListener('click', function () {
      if (s.answers.length) { s.done = true; renderDebrief(); }
      else { stopMedia(); renderHome(); }
    });
    if (state.fmt === 'text') { try { ta.focus({ preventScroll: true }); } catch (e) { ta.focus(); } }
  }

  /* ─── REVIEW ─── */
  function sessionScores(answers) {
    /* probe answers are judged on whether they held (see the resilience line), not on the full rubric */
    var live = answers.filter(function (a) { return !a.skipped && a.text && !a.followup && !a.warm; });
    if (!live.length) live = answers.filter(function (a) { return !a.skipped && a.text && !a.warm; });
    if (!live.length) live = answers.filter(function (a) { return !a.skipped && a.text; });
    if (!live.length) return { content: 0, structure: 0, comm: 0 };
    function avg(k) { return Math.round(live.reduce(function (t, a) { return t + a.analysis[k]; }, 0) / live.length); }
    return { content: avg('content'), structure: avg('structure'), comm: avg('comm') };
  }
  function renderDebrief(revisit) {
    stopMedia();
    var s = state.session;
    var w0 = setScreen('debrief', 'review');
    w0.classList.add('rsx-wide');
    var sc = sessionScores(s.answers);
    var live = s.answers.filter(function (a) { return !a.skipped && (a.text || a.numRaw || state.recordings[a.recKey]); });
    var prev = history().slice(-1)[0] || null;
    var spR = s.cfg && pathById(s.cfg.pathId);
    var dimsR = pathDims(s);
    var overallR = overallOf(dimsR, sc);
    var hAll = history(), prevSame = null;
    for (var hi = hAll.length - 1; hi >= 0; hi--) { if (hAll[hi].at === s.savedAt) continue; if ((hAll[hi].pathId || null) === ((s.cfg && s.cfg.pathId) || null)) { prevSame = hAll[hi]; break; } }
    w0.appendChild(reportHeader(s, spR, dimsR, overallR, sc, prevSame));
    var tabs = el('div', 'rsx-tabs'); tabs.setAttribute('role', 'tablist');
    var paneO = el('div', 'rsx-pane on'), paneA = el('div', 'rsx-pane'), paneT = el('div', 'rsx-pane');
    [[paneO, T('Overview', 'Ringkasan')], [paneA, T('Answers & feedback', 'Jawaban & umpan balik') + ' (' + s.answers.filter(function (a) { return !a.skipped; }).length + ')'], [paneT, T('Full transcript', 'Transkrip lengkap')]].forEach(function (tb, i) {
      var b = el('button', i === 0 ? 'on' : '', tb[1]); b.type = 'button'; b.setAttribute('role', 'tab');
      b.addEventListener('click', function () { tabs.querySelectorAll('button').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); [paneO, paneA, paneT].forEach(function (p2) { p2.classList.remove('on'); }); tb[0].classList.add('on'); });
      tabs.appendChild(b);
    });
    w0.appendChild(tabs); w0.appendChild(paneO); w0.appendChild(paneA); w0.appendChild(paneT);
    var w = paneO;
    var txR = transcriptTurns(s);
    paneT.appendChild(el('p', 'rsim-note', T('Every question, follow-up and answer from this session, with times from the start. Kept on this device so you can review it on the progress page.', 'Setiap pertanyaan, pertanyaan lanjutan, dan jawaban dari sesi ini, dengan waktu sejak awal. Disimpan di perangkat ini agar bisa kamu tinjau di halaman perkembangan.')));
    paneT.appendChild(transcriptEl(txR, s.startedAt));

    var head = el('div', 'rsim-card');
    head.appendChild(el('div', 'rsim-kick', T('Answer rubric — content, structure, communication', 'Rubrik jawaban — isi, struktur, komunikasi')));
    head.appendChild(el('p', 'rsim-sub', T('The three readings behind every dimension score, averaged over your main answers, with the change since your previous session.', 'Tiga pembacaan di balik setiap skor dimensi, dirata-ratakan dari jawaban utamamu, dengan perubahan sejak sesi sebelumnya.')));
    var bars = el('div', 'rsim-bars');
    [['content', T('Content — evidence & relevance', 'Isi — bukti & relevansi'), sc.content],
     ['structure', T('Structure — arc & landing', 'Struktur — alur & pendaratan'), sc.structure],
     ['comm', T('Communication — clarity & pace', 'Komunikasi — kejernihan & tempo'), sc.comm]].forEach(function (p) {
      var b = el('div', 'rsim-bar');
      b.appendChild(el('span', null, p[1]));
      var tr = el('div', 'tr'); tr.appendChild(el('i', null, '')); tr.firstChild.style.width = p[2] + '%';
      b.appendChild(tr);
      var val = el('b', null, String(p[2]));
      if (prev && prev[p[0]] != null) {
        var d = p[2] - prev[p[0]];
        if (d !== 0) val.innerHTML += ' <span class="delta ' + (d > 0 ? 'up' : 'dn') + '">' + (d > 0 ? '+' : '') + d + '</span>';
      }
      b.appendChild(val);
      bars.appendChild(b);
    });
    head.appendChild(bars);
    var issues = {};
    live.forEach(function (a) { if (!a.followup && a.analysis.trigger && a.analysis.trigger !== 'good_depth') issues[a.analysis.trigger] = (issues[a.analysis.trigger] || 0) + 1; });
    var issueNames = {
      too_short: T('Answers ending before the evidence', 'Jawaban selesai sebelum bukti hadir'),
      no_metric: T('Impact stated without numbers', 'Dampak tanpa angka'),
      we_not_i: T('"We" hiding your contribution', '"Kami" menyembunyikan kontribusimu'),
      rambling: T('Answers running long', 'Jawaban terlalu panjang'),
      generic: T('Principles without concrete stories', 'Prinsip tanpa kisah konkret'),
      no_result: T('Stories without endings', 'Kisah tanpa akhir')
    };
    var probesAsked = live.filter(function (a) { return a.probe; });
    var mains = live.filter(function (a) { return !a.followup && !a.special && a.analysis && a.analysis.level; });
    if (mains.length) {
      var lv = el('p', 'rsim-sub');
      var avgLv = mains.reduce(function (t, a) { return t + a.analysis.level; }, 0) / mains.length;
      lv.innerHTML = '<b style="color:var(--gold)">' + T('Anchor level: ', 'Level jangkar: ') + '</b>' + (Math.round(avgLv * 10) / 10) + '/4 ' +
        T('on average across ', 'rata-rata dari ') + mains.length + T(' main answer' + (mains.length > 1 ? 's' : ''), ' jawaban utama') +
        (probesAsked.length ? ' · <b style="color:var(--gold)">' + T('Probe resilience: ', 'Ketahanan galian: ') + '</b>' +
          probesAsked.filter(function (a) { return a.probe.held; }).length + '/' + probesAsked.length + T(' probes answered with substance', ' galian dijawab dengan isi') : '');
      head.appendChild(lv);
    }
    var recurring = Object.keys(issues).filter(function (k) { return issues[k] >= 2; });
    if (recurring.length) {
      var ri = el('p', 'rsim-sub');
      ri.innerHTML = '<b style="color:var(--gold)">' + T('Recurring pattern: ', 'Pola berulang: ') + '</b>' +
        recurring.map(function (k) { return esc(issueNames[k]) + ' (' + issues[k] + '×)'; }).join(' · ');
      head.appendChild(ri);
    }
    w.appendChild(head);

    /* presence self-review, when video was used */
    var hasVideo = live.some(function (a) { return a.fmt === 'video' && state.recordings[a.recKey]; });
    var presenceScore = { v: s.presence || null };
    if (hasVideo) {
      var pc = el('div', 'rsim-card rsim-presence');
      pc.appendChild(el('div', 'rsim-kick', T('Presence — your own honest review', 'Kehadiran — tinjauan jujurmu sendiri')));
      pc.appendChild(el('p', 'rsim-sub', T('Replay your recordings below, then check what was true. We do not fake a body-language score from pixels — this dimension is scored by you, about you, and that is the version that actually changes behaviour.', 'Putar ulang rekamanmu di bawah, lalu centang yang benar. Kami tidak memalsukan skor bahasa tubuh dari piksel — dimensi ini kamu nilai sendiri, tentang dirimu, dan versi itulah yang benar-benar mengubah perilaku.')));
      var items = [
        T('My eyes were on the lens, not on myself', 'Mataku menatap lensa, bukan diriku sendiri'),
        T('My face was lit and framed from the chest up', 'Wajahku terang dan terbingkai dari dada ke atas'),
        T('My posture stayed open — no folding, no slouching', 'Posturku tetap terbuka — tidak melipat, tidak merosot'),
        T('My energy rose at the key moments of the answer', 'Energiku naik di momen kunci jawaban'),
        T('My expression matched the story I was telling', 'Ekspresiku selaras dengan kisah yang kuceritakan')
      ];
      var boxes = [];
      items.forEach(function (t) {
        var lb = el('label');
        var cb = document.createElement('input'); cb.type = 'checkbox';
        lb.appendChild(cb); lb.appendChild(el('span', null, t));
        boxes.push(cb);
        pc.appendChild(lb);
      });
      var pOut = el('p', 'rsim-note', T('Presence (self-review): tick what was true.', 'Kehadiran (tinjauan mandiri): centang yang benar.'));
      pc.appendChild(pOut);
      boxes.forEach(function (cb) {
        cb.addEventListener('change', function () {
          var n = boxes.filter(function (x) { return x.checked; }).length;
          presenceScore.v = Math.round(n / boxes.length * 100);
          s.presence = presenceScore.v;
          pOut.textContent = T('Presence (self-review): ', 'Kehadiran (tinjauan mandiri): ') + presenceScore.v + '/100';
        });
      });
      paneA.appendChild(pc);
    }

    /* per-question cards */
    s.answers.forEach(function (a, i) {
      if (a.skipped) return;
      var c = el('div', 'rsim-card');
      var fmtIc = a.fmt === 'video' ? '🎥' : a.fmt === 'audio' ? '🎙' : '⌨';
      var an = a.analysis, prof = an.profile && PROFILE_NAME[an.profile] ? L(PROFILE_NAME[an.profile]) : '';
      c.appendChild(el('div', 'rsim-kick', T('Q', 'P') + (i + 1) + ' · ' + fmtIc + (a.dimName && !a.followup ? ' <span class="rsx-dimchip">' + esc(a.dimName) + (an.dimScore != null ? ' · ' + an.dimScore : '') + '</span>' : '') + (prof && !a.followup && !a.dimName ? ' · ' + esc(prof) : '') +
        (a.probe ? ' · ' + T('probe ', 'galian ') + a.probe.level + (a.probe.family && PROBE_NAME[a.probe.family] ? ' — ' + esc(L(PROBE_NAME[a.probe.family])) : '') : '') +
        (a.attempt > 1 ? ' · ' + T('attempt', 'percobaan') + ' ' + a.attempt : '')));
      c.appendChild(el('div', 'rsim-q', esc(a.q)));
      if (a.followup) c.appendChild(el('div', 'rsim-followup', '↳ ' + esc(a.followup)));
      if (an.num) {
        var vt2 = { ok: T('Correct', 'Benar'), close: T('Close', 'Mendekati'), off: T('Incorrect', 'Belum tepat'), none: T('No number given', 'Tanpa angka') }[an.num.verdict];
        c.appendChild(el('div', 'rsx-res ' + an.num.verdict, '<b>' + vt2 + '</b> · ' + T('your answer ', 'jawabanmu ') + '<b>' + esc(fmtUnit(an.num.given, an.num.unit)) + '</b> · ' + T('expected ', 'seharusnya ') + '<b>' + esc(fmtUnit(an.num.expected, an.num.unit)) + '</b>'));
      }
      if (an.reveal) c.appendChild(el('p', 'rsim-sub', '<b style="color:var(--gold)">' + T('Clarified: ', 'Diklarifikasi: ') + '</b>' + (an.reveal.asked.length ? esc(an.reveal.asked.join(' · ')) : T('none of the essentials', 'tidak ada hal pokok')) + (an.reveal.volunteered.length ? ' · <b style="color:var(--gold)">' + T('Volunteered by the interviewer: ', 'Diberitahukan pewawancara: ') + '</b>' + esc(an.reveal.volunteered.join(' · ')) : '')));
      if (!a.followup && a.concern) {
        c.appendChild(el('p', 'rsim-sub', '<b style="color:var(--gold)">' + T('What they were really asking: ', 'Yang sebenarnya mereka tanyakan: ') + '</b>' + esc(a.concern)));
      }
      if (!a.followup && !a.special && an.level && anchorText(an.profile, an.level)) {
        c.appendChild(el('p', 'rsim-sub', '<b style="color:var(--gold)">' + T('Anchor ', 'Jangkar ') + an.level + '/4' + (prof ? ' · ' + esc(prof) : '') + ': </b>' + esc(anchorText(an.profile, an.level)) +
          (an.level < 4 && anchorText(an.profile, an.level + 1) ? ' <span style="opacity:.75">— ' + T('next level: ', 'level berikutnya: ') + esc(anchorText(an.profile, an.level + 1)) + '</span>' : '')));
      }
      if (a.probe) {
        c.appendChild(el('p', 'rsim-sub', '<b style="color:var(--gold)">' + (a.probe.held ? T('Held: ', 'Bertahan: ') : T('Cracked: ', 'Retak: ')) + '</b>' +
          (a.probe.held ? T('the answer added substance under the probe.', 'jawaban menambah isi di bawah galian.') : T('the answer retreated or stayed thin — this is the rung to prepare.', 'jawaban mundur atau tetap tipis — inilah anak tangga yang perlu disiapkan.'))));
      }
      var att = el('div', 'rsim-att');
      att.appendChild(el('span', null, T('Length', 'Panjang') + ' <b>' + a.analysis.words + '</b> ' + T('words', 'kata') + ' · <b>' + Math.floor(a.secs / 60) + ':' + String(a.secs % 60).padStart(2, '0') + '</b>'));
      if (an.look) att.appendChild(el('span', null, T('Elements covered', 'Elemen tercakup') + ' <b>' + an.look.hit.length + '/' + (an.look.hit.length + an.look.miss.length) + '</b>'));
      if (an.ideas != null) att.appendChild(el('span', null, T('Distinct ideas', 'Ide berbeda') + ' <b>' + an.ideas + '</b>'));
      if (an.look || an.num || an.ideas != null || an.reveal) { /* path-specific readings shown above */ }
      else if (!an.profile || an.profile === 'behavioural') att.appendChild(el('span', null, 'STAR <b>' + a.analysis.starN + '/4</b>'));
      else if (an.checks && an.checks.length) att.appendChild(el('span', null, T('Checks', 'Pemeriksaan') + ' <b>' + an.checks.filter(function (k) { return k.ok; }).length + '/' + an.checks.length + '</b>'));
      att.appendChild(el('span', null, T('Measured numbers', 'Angka terukur') + ' <b>' + a.analysis.digits + '</b>'));
      att.appendChild(el('span', null, T('Fillers', 'Kata pengisi') + ' <b>' + a.analysis.fillers + '</b>'));
      if (a.analysis.uniq) att.appendChild(el('span', null, T('Unique words', 'Kata unik') + ' <b>' + a.analysis.uniq + '%</b>'));
      if (a.analysis.wpm) att.appendChild(el('span', null, T('Pace', 'Tempo') + ' <b>' + a.analysis.wpm + '</b> wpm'));
      if (a.analysis.pauses > 0 && a.fmt !== 'text') att.appendChild(el('span', null, T('Long pauses ≈', 'Jeda panjang ≈') + ' <b>' + a.analysis.pauses + '</b>'));
      c.appendChild(att);
      var fb = el('div', 'rsim-fb');
      if (a.seat) fb.appendChild(el('p', 'y', '<span class="lbl">' + T('How it landed', 'Bagaimana diterima') + '</span>' + esc(a.seat)));
      a.fb.strengths.forEach(function (t) { fb.appendChild(el('p', 's', '<span class="lbl">' + T('Strength', 'Kekuatan') + '</span>' + esc(t))); });
      a.fb.weaknesses.forEach(function (t) { fb.appendChild(el('p', 'w', '<span class="lbl">' + T('Weakness', 'Kelemahan') + '</span>' + esc(t))); });
      a.fb.changes.forEach(function (t) { fb.appendChild(el('p', 'c', '<span class="lbl">' + T('What to change', 'Yang perlu diubah') + '</span>' + esc(t))); });
      c.appendChild(fb);
      if (a.solution) {
        var sol = document.createElement('details'); sol.className = 'rsx-sol';
        sol.innerHTML = '<summary>' + T('Worked solution', 'Penyelesaian') + '</summary><p>' + esc(a.solution) + '</p>';
        c.appendChild(sol);
      }
      var rec = state.recordings[a.recKey];
      if (rec) {
        var pb = document.createElement(rec.kind === 'video' ? 'video' : 'audio');
        pb.controls = true; pb.src = rec.url; pb.className = 'rsim-playback';
        c.appendChild(pb);
      }
      if (a.text) {
        var det = document.createElement('details');
        det.innerHTML = '<summary style="cursor:pointer;color:var(--gold);font-size:12.5px;margin-top:10px">' + T('Show transcript', 'Lihat transkrip') + '</summary>';
        det.appendChild(el('div', 'rsim-transcript', esc(a.text)));
        c.appendChild(det);
      }
      var rrow = el('div', 'rsim-row');
      var retry = el('button', 'rsim-btn ghost', T('Try this answer again →', 'Coba jawab lagi →'));
      retry.addEventListener('click', function () {
        var qObj = s.qs.filter(function (q) { return q.id === a.qid; })[0] ||
          { id: a.qid, cat: 'behavioral', sig: ['star'], q: { en: a.q, id: a.q }, tests: { en: '', id: '' }, coach: { en: '', id: '' } };
        s.qs = [qObj]; s.idx = 0; s.done = false;
        renderQuestion();
      });
      rrow.appendChild(retry);
      c.appendChild(rrow);
      paneA.appendChild(c);
    });

    /* attempts comparison */
    var byQ = {};
    live.forEach(function (a) { if (a.text && !a.followup) (byQ[a.qid] = byQ[a.qid] || []).push(a); });
    Object.keys(byQ).forEach(function (qid) {
      if (byQ[qid].length < 2) return;
      var c = el('div', 'rsim-card');
      c.appendChild(el('div', 'rsim-kick', T('Deliberate practice — attempts compared', 'Latihan terarah — perbandingan percobaan')));
      c.appendChild(el('div', 'rsim-q', esc(byQ[qid][0].q)));
      var bars2 = el('div', 'rsim-bars');
      byQ[qid].forEach(function (a, i) {
        var avgS = Math.round((a.analysis.content + a.analysis.structure + a.analysis.comm) / 3);
        var b = el('div', 'rsim-bar');
        b.appendChild(el('span', null, T('Attempt ', 'Percobaan ') + (i + 1)));
        var tr = el('div', 'tr'); tr.appendChild(el('i')); tr.firstChild.style.width = avgS + '%';
        b.appendChild(tr); b.appendChild(el('b', null, String(avgS)));
        bars2.appendChild(b);
      });
      c.appendChild(bars2);
      w.appendChild(c);
    });

    /* persist once */
    if (!revisit && !s.saved) {
      s.saved = true;
      var dimMap = null;
      if (dimsR) { dimMap = {}; dimsR.forEach(function (d) { if (d.v != null) dimMap[d.id] = d.v; }); }
      var sess = { at: Date.now(), mode: s.mode, n: live.length, content: sc.content, structure: sc.structure, comm: sc.comm, presence: s.presence || null, roleId: s.cfg.roleId || null, difficulty: s.cfg.difficulty || 2,
        pathId: s.cfg.pathId || null, overall: overallR, dims: dimMap, mins: Math.round((Date.now() - s.startedAt) / 6000) / 10, style: s.cfg.style || null, dur: s.cfg.dur || null, caseId: s.caseId || null };
      s.savedAt = sess.at;
      var h = history(); h.push(sess); saveHistory(h);
      if (!state.drill) saveTranscript(sess.at, txR);
    }

    /* next: improve */
    var nextC = el('div', 'rsim-card');
    nextC.appendChild(el('div', 'rsim-kick', T('Next', 'Berikutnya')));
    var nrow = el('div', 'rsim-row');
    var toImprove = el('button', 'rsim-btn' + (spR ? ' ghost' : ''), T('Improve — targeted next round →', 'Perbaiki — putaran berikutnya yang tertarget →'));
    toImprove.addEventListener('click', function () { renderImprove(sc); });
    nrow.appendChild(toImprove);
    var toHome = el('button', 'rsim-btn ghost', T('All interviews', 'Semua wawancara'));
    toHome.addEventListener('click', renderHome);
    var toProg = el('button', 'rsim-btn ghost', T('Progress dashboard', 'Dasbor perkembangan'));
    toProg.addEventListener('click', renderHistory);
    if (!state.drill) { nrow.appendChild(toProg); nrow.appendChild(toHome); }
    if (state.drill) {
      var backLesson = el('button', 'rsim-btn ghost', T('← Back to the lesson', '← Kembali ke pelajaran'));
      backLesson.addEventListener('click', close);
      nrow.appendChild(backLesson);
    }
    nextC.appendChild(nrow);
    w0.appendChild(nextC);
  }

  /* ─── IMPROVE ─── */
  var LESSON_RECO = {
    structure: [['2.1', { en: 'The STAR-L Framework', id: 'Kerangka STAR-L' }], ['2.4', { en: 'Calibrating Stories to Interview Type and Seniority', id: 'Kalibrasi Kisah untuk Jenis Wawancara dan Senioritas' }]],
    content: [['3.3', { en: 'Decoding Job Descriptions into Competency Maps', id: 'Menerjemahkan Deskripsi Pekerjaan menjadi Peta Kompetensi' }], ['2.3', { en: 'Story Mining from Everyday Experience', id: 'Menambang Kisah dari Pengalaman Sehari-hari' }]],
    communication: [['1.4', { en: 'The Interview Performance Mindset', id: 'Pola Pikir Performa Wawancara' }], ['7.1', { en: 'The Solo Drill Protocol', id: 'Protokol Latihan Mandiri' }]]
  };
  function renderImprove(sc) {
    var s = state.session;
    var w = setScreen('improve', 'improve');
    var dim = weakestDim({ structure: sc.structure, content: sc.content, comm: sc.comm, communication: sc.comm });
    if (dim === 'comm') dim = 'communication';
    var avgAll = Math.round((sc.content + sc.structure + sc.comm) / 3);
    var curDiff = (s && s.cfg.difficulty) || 2;
    var nextDiff = avgAll >= 75 ? Math.min(curDiff + 1, 3) : curDiff;

    var card = el('div', 'rsim-card');
    card.appendChild(el('div', 'rsim-kick', T('04 · Improve — close the loop', '04 · Perbaiki — tutup putarannya')));
    card.appendChild(el('h2', null, T('Your targeted plan for the next round', 'Rencana tertargetmu untuk putaran berikutnya')));
    card.appendChild(el('p', 'rsim-sub', nextFocusText({ content: sc.content, structure: sc.structure, comm: sc.comm })));
    if (nextDiff > curDiff) {
      card.appendChild(el('p', 'rsim-sub', '📈 ' + T('You averaged ' + avgAll + ' — the next round steps up to a more demanding difficulty.', 'Rata-ratamu ' + avgAll + ' — putaran berikutnya naik ke tingkat yang lebih menuntut.')));
    }
    var reco = el('div', 'rsim-reco');
    (LESSON_RECO[dim] || LESSON_RECO.structure).forEach(function (r) {
      var rc = el('div', 'rc');
      rc.appendChild(el('span', 'k', T('Study', 'Pelajari')));
      rc.appendChild(el('b', null, r[0] + ' · ' + esc(L(r[1]))));
      rc.appendChild(el('span', null, T('The lesson behind this weakness — ten focused minutes before your next round.', 'Pelajaran di balik kelemahan ini — sepuluh menit fokus sebelum putaran berikutnya.')));
      var b = el('button', 'rsim-btn ghost', T('Open lesson →', 'Buka pelajaran →'));
      b.addEventListener('click', function () {
        close();
        if (window.MT_LMS_PLAYER) window.MT_LMS_PLAYER.open(r[0]);
      });
      rc.appendChild(b);
      reco.appendChild(rc);
    });
    var drillRc = el('div', 'rc');
    drillRc.appendChild(el('span', 'k', T('Drill', 'Latih')));
    drillRc.appendChild(el('b', null, T('Next round, tuned to this weakness', 'Putaran berikutnya, disetel ke kelemahan ini')));
    drillRc.appendChild(el('span', null, T('Same target, ' + (nextDiff > curDiff ? 'harder questions, ' : '') + 'question mix weighted toward what needs work.', 'Target sama, ' + (nextDiff > curDiff ? 'pertanyaan lebih sulit, ' : '') + 'komposisi pertanyaan diberatkan ke yang perlu diperbaiki.')));
    var db = el('button', 'rsim-btn', T('Run the next round →', 'Jalankan putaran berikutnya →'));
    db.addEventListener('click', function () {
      if (s && s.cfg && s.cfg.pathId) { var cp = JSON.parse(JSON.stringify(s.cfg)); cp.difficulty = nextDiff; startPathSession(cp); return; }
      var cfg = JSON.parse(JSON.stringify(state.cfg || {}));
      cfg.focus = [dim === 'communication' ? 'communication' : dim];
      cfg.difficulty = nextDiff;
      cfg.mode = cfg.mode || 'live';
      state.cfg = cfg; saveCfg(cfg);
      startSession(cfg);
    });
    drillRc.appendChild(db);
    reco.appendChild(drillRc);
    card.appendChild(reco);
    var row = el('div', 'rsim-row');
    var back = el('button', 'rsim-btn ghost', T('← Back to the debrief', '← Kembali ke debrief'));
    back.addEventListener('click', function () { renderDebrief(true); });
    var home = el('button', 'rsim-btn ghost', T('Home', 'Beranda'));
    home.addEventListener('click', renderHome);
    row.appendChild(back); row.appendChild(home);
    card.appendChild(row);
    w.appendChild(card);
  }

  /* ─── FAST-TRACK ─── */
  function renderFastTrack() {
    var w = setScreen('fasttrack', null);
    var card = el('div', 'rsim-card');
    card.appendChild(el('div', 'rsim-kick', T('⚡ Fast-Track — hours, not weeks', '⚡ Jalur Cepat — hitungan jam, bukan minggu')));
    card.appendChild(el('h2', null, T('Your interview is tomorrow. Prioritise ruthlessly.', 'Wawancaramu besok. Prioritaskan tanpa ampun.')));
    card.appendChild(el('p', 'rsim-sub', T('Six things matter now. Everything else is noise until after the interview.', 'Enam hal yang penting sekarang. Sisanya hanyalah derau sampai wawancara selesai.')));
    var steps = [
      [T('1 · Read the job description twice', '1 · Baca deskripsi pekerjaan dua kali'), T('Underline the three requirements repeated or listed first — those are the interview.', 'Garis bawahi tiga persyaratan yang diulang atau ditulis paling awal — itulah wawancaranya.')],
      [T('2 · Prepare five stories, not fifty answers', '2 · Siapkan lima kisah, bukan lima puluh jawaban'), T('One achievement, one failure, one conflict, one leadership moment, one fast learning. Each: context in one line, your actions, a number.', 'Satu pencapaian, satu kegagalan, satu konflik, satu momen memimpin, satu belajar cepat. Masing-masing: konteks satu kalimat, tindakanmu, satu angka.')],
      [T('3 · Build your 90-second opening', '3 · Bangun pembuka 90 detikmu'), T('"Tell me about yourself" is guaranteed. Present → proof → why here. Say it out loud three times.', '"Ceritakan tentang dirimu" pasti keluar. Posisi → bukti → alasan ke sini. Ucapkan lantang tiga kali.')],
      [T('4 · Prepare your difficult question', '4 · Siapkan pertanyaan sulitmu'), T('You already know which one you fear — gap, pivot, grades. One calm sentence, then redirect to evidence.', 'Kamu sudah tahu yang kamu takuti — jeda, banting setir, nilai. Satu kalimat tenang, lalu alihkan ke bukti.')],
      [T('5 · Write three questions to ask them', '5 · Tulis tiga pertanyaan untuk mereka'), T('About the work, the standard, the first 90 days. Never "none".', 'Tentang pekerjaannya, standarnya, 90 hari pertama. Jangan pernah "tidak ada".')],
      [T('6 · Run one simulation below', '6 · Jalankan satu simulasi di bawah'), T('A 4-question run with debrief beats four more hours of silent reading.', 'Satu sesi 4 pertanyaan dengan debrief mengalahkan empat jam lagi membaca dalam diam.')]
    ];
    steps.forEach(function (sp) {
      var r = el('div', 'rsim-check');
      r.appendChild(el('i', null, '·'));
      r.appendChild(el('span', null, '<b style="color:var(--text)">' + sp[0] + '</b><br>' + sp[1]));
      card.appendChild(r);
    });
    var jdF = el('div', 'rsim-field'); jdF.style.marginTop = '14px';
    jdF.appendChild(el('label', null, T('Paste the job description for a targeted mini-analysis', 'Tempel deskripsi pekerjaan untuk analisis mini tertarget')));
    var jd = document.createElement('textarea');
    jdF.appendChild(jd);
    var jdOut = el('div', 'rsim-sub'); jdOut.style.marginTop = '8px';
    jd.addEventListener('input', function () {
      if (jd.value.trim().length < 60) { jdOut.textContent = ''; return; }
      var m = mineJd(jd.value);
      jdOut.innerHTML = '<b style="color:var(--gold)">' + T('Skills detected: ', 'Keterampilan terdeteksi: ') + '</b>' +
        (m.skills.length ? esc(m.skills.join(' · ')) : T('none matched the career graph — read the JD again for its own vocabulary.', 'tidak ada yang cocok dengan peta karier — baca ulang JD untuk kosakatanya sendiri.')) +
        (m.reqs.length ? '<br><b style="color:var(--gold)">' + T('Requirement to prepare evidence for: ', 'Persyaratan yang perlu disiapkan buktinya: ') + '</b>' + esc(m.reqs[0].trim().slice(0, 160)) : '');
    });
    jdF.appendChild(jdOut);
    card.appendChild(jdF);
    var row = el('div', 'rsim-row');
    var go = el('button', 'rsim-btn', T('Run the 4-question sprint →', 'Jalankan sprint 4 pertanyaan →'));
    go.addEventListener('click', function () {
      var cfg = { count: 4, difficulty: 2, level: 'any', stage: 'hr', focus: ['structure'], caseIds: [], mode: 'live', jd: jd.value.trim(), persona: state.cfg.persona || 'hr' };
      state.cfg = cfg;
      startSession(cfg);
    });
    var back = el('button', 'rsim-btn ghost', T('← Back', '← Kembali'));
    back.addEventListener('click', renderHome);
    row.appendChild(go); row.appendChild(back);
    card.appendChild(row);
    w.appendChild(card);
  }

  /* ─── launch wiring ─── */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-rope-sim]');
    if (!b) return;
    e.preventDefault();
    open(b.getAttribute('data-rope-sim') || 'home');
  });
  document.addEventListener('mt:launch-tool', function (e) {
    if (e.detail && e.detail.tool === 'simulator') open(e.detail.mode || 'home', e.detail.qid || null, e.detail.tryit ? Object.assign({}, e.detail.tryit, { lesson: e.detail.lesson || null }) : null);
  });

  window.MT_ROPE_SIM = { open: open, close: close, stats: bankStats, paths: function () { return specPaths().length; }, _analyse: analyseAnswer, _num: bestNum, _video: function () { return state.vi || null; }, _bridge: bridgeFor, _phases: framePhases, _seat: seatLine, _quote: quoteOf };
})();
