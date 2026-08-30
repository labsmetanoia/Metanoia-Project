/**
 * THE ROPE — AI INTERVIEW SIMULATOR v2 (Module 7 application layer)
 * -----------------------------------------------------------------
 * Prepare → Practice → Review → Improve → Repeat, entirely on-device.
 *
 * v2: the flagship treatment — the Home background system, a stage
 * navigation toolbar, animated interviewer personas with voice, three
 * answer formats (video / audio / text) with real recording controls,
 * an Improve stage that closes the learning loop into the curriculum,
 * and a drill mode lessons launch for single-question practice.
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
 *  - No live in-interview assistance, deliberately (see Integrity note).
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
      greet: { en: 'Thanks for making the time today. Let’s begin.', id: 'Terima kasih sudah meluangkan waktu. Mari kita mulai.' } },
    { id: 'manager', name: { en: 'Hiring Manager', id: 'Hiring Manager' },
      title: { en: 'Deep-dive round · direct and detailed', id: 'Babak pendalaman · lugas dan detail' },
      hue: '#C9A84C', rate: 1.02, pitch: 0.95,
      greet: { en: 'I’ve read your CV. I want to hear the details behind it.', id: 'Saya sudah membaca CV Anda. Saya ingin mendengar detail di baliknya.' } },
    { id: 'exec', name: { en: 'Senior Executive', id: 'Eksekutif Senior' },
      title: { en: 'Final round · skeptical, thinks in years', id: 'Babak final · skeptis, berpikir dalam tahun' },
      hue: '#B08968', rate: 0.96, pitch: 0.85,
      greet: { en: 'You have my attention for thirty minutes. Make them count.', id: 'Anda punya perhatian saya selama tiga puluh menit. Manfaatkan.' } }
  ];
  function persona() {
    return PERSONAS.filter(function (p) { return p.id === (state.cfg.persona || 'hr'); })[0] || PERSONAS[0];
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
  var TASK_RE = /\b(goal|responsible|tasked|needed to|had to|target|objective|tujuan|bertanggung jawab|ditugaskan|harus|sasaran)\b/i;
  var RESULT_RE = /\b(result|outcome|increased|decreased|reduced|improved|saved|grew|delivered|achieved|completed|hasil|dampak|meningkat|menurun|berkurang|membaik|menghemat|tumbuh|tercapai|selesai)\b/i;

  function countMatches(text, re) {
    var m = text.match(new RegExp(re.source, 'gi'));
    return m ? m.length : 0;
  }
  function analyseAnswer(text, q, secs, pauses) {
    var t = ' ' + String(text || '').trim() + ' ';
    var words = (t.match(/\S+/g) || []).length;
    if (words < 2) {
      return { limited: true, words: words, secs: secs || 0, wpm: null, fillers: 0, digits: 0,
        iCount: 0, weCount: 0, star: { s: false, t: false, a: false, r: false }, starN: 0,
        leadRatio: 1, uniq: 0, pauses: pauses || 0, content: 0, structure: 0, comm: 0, trigger: null };
    }
    var lower = t.toLowerCase();
    var fillers = 0;
    FILLERS.forEach(function (f) {
      var i = 0;
      while ((i = lower.indexOf(f, i)) !== -1) { fillers++; i += f.length; }
    });
    var digits = (t.match(/\d+[%\d.,]*/g) || []).length;
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

    var content = 50;
    content += Math.min(digits, 3) * 8;
    content += words >= 60 ? 10 : words >= 30 ? 4 : -14;
    if (wantsMetric && !digits) content -= 12;
    var structure = 45;
    structure += starN * 9;
    if (wantsStar && starN < 3) structure -= 10;
    if (leadRatio < 0.35) structure += 12; else if (leadRatio > 0.6) structure -= 10;
    if (words > 260) structure -= 12;
    var comm = 62;
    comm -= Math.min(fillers * 4, 24);
    if (words > 0 && weCount > iCount * 2 && wantsStar) comm -= 6;
    if (wpm !== null) { if (wpm > 185) comm -= 8; else if (wpm < 80 && words > 25) comm -= 4; }
    if (words >= 25 && words <= 220) comm += 8;
    if (uniq >= 60 && words >= 50) comm += 4;
    if (pauses && pauses > 3) comm -= Math.min((pauses - 3) * 2, 8);
    var clamp = function (v) { return Math.max(5, Math.min(98, Math.round(v))); };

    var trigger = null;
    if (words < 25) trigger = 'too_short';
    else if (digits === 0 && !SITU_RE.test(t)) trigger = 'generic';
    else if (wantsStar && weCount > iCount && weCount >= 3) trigger = 'we_not_i';
    else if (wantsMetric && digits === 0) trigger = 'no_metric';
    else if (wantsStar && !star.r) trigger = 'no_result';
    else if (words > 300) trigger = 'rambling';
    else if (words >= 60 && starN >= 3) trigger = 'good_depth';

    return {
      limited: false, words: words, secs: secs || 0, wpm: wpm, fillers: fillers, digits: digits,
      iCount: iCount, weCount: weCount, star: star, starN: starN, leadRatio: leadRatio,
      uniq: uniq, pauses: pauses || 0,
      content: clamp(content), structure: clamp(structure), comm: clamp(comm),
      trigger: trigger
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
    var av = root && root.querySelector('.rsim-avatar');
    if (!state.tts || !window.speechSynthesis) { if (done) done(); return; }
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      var per = persona();
      u.lang = lang() === 'id' ? 'id-ID' : 'en-US';
      u.rate = per.rate; u.pitch = per.pitch;
      u.onstart = function () { if (av) av.classList.add('talking'); };
      u.onend = u.onerror = function () { if (av) av.classList.remove('talking'); if (done) done(); };
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
  '.rsim-avatar svg{width:100%;height:100%;display:block}' +
  '.rsim-avatar .av-mouth{transform-origin:center;transition:transform .12s}' +
  '.rsim-avatar.talking .av-mouth{animation:rsimTalk .34s ease-in-out infinite alternate}' +
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
  '.rsim-cam .recdot{position:absolute;top:10px;left:10px;display:none;align-items:center;gap:6px;font-size:10.5px;font-weight:800;letter-spacing:.08em;color:#fff;' +
    'background:rgba(229,72,77,.9);border-radius:999px;padding:4px 10px}' +
  '.rsim-cam.rec .recdot{display:inline-flex}' +
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
    sttGaps: 0, lastSttAt: 0, cvMined: null, drill: false
  };

  var root = null, body = null, stepsEl = null;
  var STAGES = [
    ['prepare', { en: 'Prepare', id: 'Persiapan' }],
    ['practice', { en: 'Practice', id: 'Latihan' }],
    ['review', { en: 'Review', id: 'Tinjau' }],
    ['improve', { en: 'Improve', id: 'Perbaiki' }]
  ];

  function build() {
    if (root) return;
    var st = document.createElement('style');
    st.id = 'ropeSimCss'; st.textContent = css;
    document.head.appendChild(st);
    root = el('div', 'rsim'); root.id = 'ropeSim';
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-label', 'AI Interview Simulator');
    root.appendChild(el('div', 'rsim-bg'));
    root.appendChild(el('div', 'rsim-veil'));
    var top = el('div', 'rsim-top');
    top.appendChild(el('b', 'rsim-brand', T('The Rope · Interview Simulator', 'The Rope · Simulator Wawancara')));
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
    var reached = { prepare: true, practice: !!state.session, review: !!(state.session && state.session.done), improve: !!(state.session && state.session.done) };
    STAGES.forEach(function (s, i) {
      if (i > 0) stepsEl.appendChild(el('span', 'rsim-sep', '→'));
      var idx = STAGES.map(function (x) { return x[0]; }).indexOf(active);
      var cls = s[0] === active ? ' now' : (reached[s[0]] && i < idx ? ' done' : '');
      var b = el('button', 'rsim-step' + cls);
      b.appendChild(el('i', null, cls.indexOf('done') !== -1 ? '✓' : String(i + 1)));
      b.appendChild(el('span', null, L(s[1])));
      if (cls.indexOf('done') !== -1) {
        b.addEventListener('click', function () {
          if (s[0] === 'prepare') renderSetup();
          if (s[0] === 'practice' && state.session && !state.session.done) renderQuestion();
          if (s[0] === 'review' && state.session && state.session.done) renderDebrief(true);
        });
      }
      stepsEl.appendChild(b);
    });
  }

  function open(mode, qid) {
    build();
    root.classList.add('open');
    document.body.classList.add('lms-lock');
    if (mode === 'fasttrack') renderFastTrack();
    else if (mode === 'setup') renderSetup();
    else if (mode === 'history') renderHistory();
    else if (mode === 'drill' && qid) startDrill(qid);
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

  /* ─── avatar SVG ─── */
  function avatarSvg(per, big) {
    var hue = per.hue;
    return '<svg viewBox="0 0 100 100" aria-hidden="true">' +
      '<rect width="100" height="100" fill="#0B1524"/>' +
      '<circle cx="50" cy="112" r="42" fill="' + hue + '" opacity=".28"/>' +
      '<circle cx="50" cy="40" r="21" fill="#E8C9A0"/>' +
      '<path d="M29 40a21 21 0 0 1 42 0c0-14-8-24-21-24S29 26 29 40Z" fill="' + hue + '"/>' +
      '<g class="av-eyes" style="transform-origin:50px 40px">' +
      '<circle cx="42" cy="41" r="2.3" fill="#1A2333"/><circle cx="58" cy="41" r="2.3" fill="#1A2333"/></g>' +
      '<rect class="av-mouth" x="44" y="50" width="12" height="3.4" rx="1.7" fill="#8A5A44"/>' +
      '<path d="M22 96c3-18 13-27 28-27s25 9 28 27" fill="' + hue + '"/>' +
      '<rect x="44" y="66" width="12" height="9" fill="#E8C9A0"/>' +
      '</svg>';
  }

  /* ─── HOME ─── */
  function renderHome() {
    var w = setScreen('home', null);
    var s = bankStats();
    var hero = el('div', 'rsim-card');
    hero.appendChild(el('div', 'rsim-kick', T('Module 7 · The application layer', 'Modul 7 · Lapisan penerapan')));
    hero.appendChild(el('h2', null, T('Don’t just learn how to interview. Practice actually interviewing.', 'Jangan hanya belajar cara wawancara. Berlatihlah benar-benar diwawancarai.')));
    hero.appendChild(el('p', 'rsim-sub', T('One job. One goal. An interviewer with a face and a voice who asks, listens to what you actually said, follows up, and debriefs you — entirely on your device. Answer on video, by voice, or in text.', 'Satu pekerjaan. Satu tujuan. Pewawancara dengan wajah dan suara yang bertanya, mendengar jawabanmu yang sebenarnya, mengejar, dan mengevaluasimu — sepenuhnya di perangkatmu. Jawab lewat video, suara, atau teks.')));
    var loop = el('div', 'rsim-loop');
    var LP = { PREPARE: 'PERSIAPAN', PERFORM: 'TAMPIL', REVIEW: 'TINJAU', IMPROVE: 'PERBAIKI', REPEAT: 'ULANGI' };
    ['PREPARE', '→', 'PERFORM', '→', 'REVIEW', '→', 'IMPROVE', '→', 'REPEAT'].forEach(function (t) {
      loop.appendChild(t === '→' ? el('i', null, '→') : el('span', null, T(t, LP[t])));
    });
    hero.appendChild(loop);
    var stats = el('div', 'rsim-stats');
    [[s.total, T('questions in the bank', 'pertanyaan di bank')],
     [s.roles, T('career directions', 'arah karier')],
     [s.industries, T('industries', 'industri')],
     [s.cases, T('difficult-case paths', 'jalur kasus sulit')]].forEach(function (p) {
      var d = el('div'); d.appendChild(el('b', null, String(p[0]))); d.appendChild(el('span', null, p[1])); stats.appendChild(d);
    });
    hero.appendChild(stats);
    hero.appendChild(el('p', 'rsim-note', T('Counts are computed live from the question bank and the career graph — they grow as the database grows.', 'Jumlah dihitung langsung dari bank pertanyaan dan peta karier — bertambah seiring database tumbuh.')));
    var row = el('div', 'rsim-row');
    var b1 = el('button', 'rsim-btn', T('Set up your interview →', 'Siapkan wawancaramu →'));
    b1.addEventListener('click', function () { renderSetup(); });
    var b2 = el('button', 'rsim-btn ghost', T('⚡ Fast-Track: interview tomorrow', '⚡ Jalur Cepat: wawancara besok'));
    b2.addEventListener('click', renderFastTrack);
    var b3 = el('button', 'rsim-btn ghost', T('Your progress', 'Perkembanganmu'));
    b3.addEventListener('click', renderHistory);
    row.appendChild(b1); row.appendChild(b2); row.appendChild(b3);
    hero.appendChild(row);
    w.appendChild(hero);

    var h = history();
    if (h.length) {
      var last = h[h.length - 1];
      var cardN = el('div', 'rsim-card');
      cardN.appendChild(el('div', 'rsim-kick', T('Adaptive next step', 'Langkah adaptif berikutnya')));
      cardN.appendChild(el('p', 'rsim-sub', nextFocusText(last)));
      var rb = el('button', 'rsim-btn', T('Practice that now →', 'Latih itu sekarang →'));
      rb.addEventListener('click', function () { renderSetup(weakestDim(last)); });
      var rw = el('div', 'rsim-row'); rw.appendChild(rb);
      cardN.appendChild(rw);
      w.appendChild(cardN);
    }

    var integ = el('div', 'rsim-card');
    integ.innerHTML = '<div class="rsim-integrity"><b>' + T('Interview integrity', 'Integritas wawancara') + '</b>' +
      T('This simulator prepares you <em>before</em> the interview. Metanoia deliberately does not offer a live in-interview "copilot" that feeds you answers during a real assessment: it undermines fair evaluation, usually violates employer policy, and builds nothing you keep. Confidence is not assumed — it is built through practice. Everything here runs on your device; your voice and video never leave this browser.',
        'Simulator ini mempersiapkanmu <em>sebelum</em> wawancara. Metanoia sengaja tidak menyediakan "copilot" yang membisikkan jawaban saat asesmen sungguhan: itu merusak penilaian yang adil, umumnya melanggar kebijakan pemberi kerja, dan tidak membangun apa pun yang kamu miliki. Kepercayaan diri tidak diandaikan — ia dibangun lewat latihan. Semua berjalan di perangkatmu; suara dan videomu tidak pernah meninggalkan peramban ini.') + '</div>';
    w.appendChild(integ);
  }

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
    var w = setScreen('setup', 'prepare');
    var cfg = state.cfg || {};
    var card = el('div', 'rsim-card');
    card.appendChild(el('div', 'rsim-kick', T('01 · Prepare — one job, one goal', '01 · Persiapan — satu pekerjaan, satu tujuan')));
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
      var av = el('span', 'rsim-avatar'); av.innerHTML = avatarSvg(p);
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
        state.cvMined = mineCv(doc.text);
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
    qs = qs.slice(0, (cfg.count || 6) + 2);
    state.session = {
      cfg: cfg, qs: qs, idx: 0, answers: [], startedAt: Date.now(), mode: cfg.mode, done: false, greeted: false
    };
    renderQuestion();
  }

  function startDrill(qid) {
    var q = allQuestions().filter(function (x) { return x.id === qid; })[0];
    if (!q) { renderHome(); return; }
    state.drill = true;
    state.session = {
      cfg: { mode: 'practice', count: 1, persona: state.cfg.persona || 'hr' },
      qs: [q], idx: 0, answers: [], startedAt: Date.now(), mode: 'practice', done: false, greeted: true
    };
    renderQuestion();
  }

  /* media helpers */
  function stopMedia() {
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

    /* progress dots */
    var dots = el('div', 'rsim-qdots');
    s.qs.forEach(function (_, i) {
      dots.appendChild(el('i', i < s.idx ? 'done' : i === s.idx ? 'now' : ''));
    });
    card.appendChild(dots);

    /* interviewer panel */
    var ip = el('div', 'rsim-interviewer');
    var av = el('div', 'rsim-avatar big'); av.innerHTML = avatarSvg(per, true);
    var info = el('div', 'ri-info');
    info.appendChild(el('b', null, esc(L(per.name)) + (s.cfg.company ? ' · ' + esc(s.cfg.company) : '')));
    info.appendChild(el('span', null, esc(L(per.title))));
    var eq = el('span', 'rsim-speaking'); eq.innerHTML = '<i></i><i></i><i></i>';
    info.appendChild(eq);
    var replay = el('button', 'rsim-btn ghost ri-replay', '🔊 ' + T('Repeat question', 'Ulangi pertanyaan'));
    ip.appendChild(av); ip.appendChild(info); ip.appendChild(replay);
    card.appendChild(ip);

    var catName = '';
    B.categories.forEach(function (c) { if (c.id === q.cat) catName = L(c.name); });
    card.appendChild(el('div', 'rsim-kick', T('Question ', 'Pertanyaan ') + (s.idx + 1) + '/' + s.qs.length + ' · ' + esc(catName)));
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
    if (s.mode === 'practice' && !followup) {
      card.appendChild(el('div', 'rsim-followup', '🧭 ' + esc(L(q.coach))));
    }
    var spoken = (!s.greeted ? L(per.greet) + ' ' : '') + qText;
    s.greeted = true;
    speak(spoken);
    replay.addEventListener('click', function () { speak(qText); });

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
    right.appendChild(timer);
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
    card.appendChild(media);

    function setFormat(f) {
      state.fmt = f;
      fmt.querySelectorAll('button').forEach(function (b) { b.classList.toggle('on', b.dataset.v === f); });
      camBox.style.display = f === 'video' ? '' : 'none';
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
      camBox.classList.remove('rec');
      recBtn.classList.remove('on'); recBtn.innerHTML = '● ' + T('Record answer', 'Rekam jawaban');
      if (state.stream) { state.stream.getTracks().forEach(function (t) { t.stop(); }); state.stream = null; }
      if (state.meterId) { cancelAnimationFrame(state.meterId); state.meterId = null; }
      if (state.audioCtx) { try { state.audioCtx.close(); } catch (e) {} state.audioCtx = null; }
    }
    function acquireMedia(f) {
      navigator.mediaDevices.getUserMedia(f === 'video' ? { video: true, audio: true } : { audio: true })
        .then(function (stream) {
          state.stream = stream;
          if (f === 'video') { vEl.srcObject = stream; vEl.play().catch(function () {}); }
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
        camBox.classList.add('rec');
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
        camBox.classList.remove('rec');
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

    state.t0 = Date.now();
    if (state.timerId) clearInterval(state.timerId);
    state.timerId = setInterval(function () {
      var sSec = Math.floor((Date.now() - state.t0) / 1000);
      timer.textContent = Math.floor(sSec / 60) + ':' + String(sSec % 60).padStart(2, '0');
      if (sSec === 120) timer.style.color = '#FF9A7B';
    }, 400);

    function finishAnswer(skipped) {
      var secs = Math.round((Date.now() - state.t0) / 1000);
      if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
      function proceed(blob) {
        var text = ta.value.trim();
        var recKey = q.id + '_' + (s.answers.filter(function (a) { return a.qid === q.id; }).length + 1);
        if (blob) {
          try { state.recordings[recKey] = { url: URL.createObjectURL(blob), kind: state.fmt }; } catch (e) {}
        } else if (pendingBlob) {
          try { state.recordings[recKey] = { url: URL.createObjectURL(pendingBlob), kind: state.fmt }; } catch (e) {}
        }
        var a = analyseAnswer(text, q, secs, state.sttGaps);
        var rec2 = {
          qid: q.id, q: L(q.q), followup: followup || null, text: text, skipped: !!skipped,
          fmt: state.fmt, secs: secs, analysis: a, fb: feedbackFor(a, q), recKey: recKey,
          attempt: s.answers.filter(function (x) { return x.qid === q.id; }).length + 1
        };
        s.answers.push(rec2);
        stopMedia2Keep();
        var trig = a.trigger;
        if (!skipped && !followup && trig && trig !== 'good_depth' && B.followups[trig] && !state.drill) {
          var arr = B.followups[trig][lang()] || B.followups[trig].en;
          renderQuestion(arr[Math.floor(Math.random() * arr.length)]);
          return;
        }
        if (!skipped && !followup && trig === 'good_depth' && Math.random() < 0.5 && s.mode === 'live') {
          var arr2 = B.followups.good_depth[lang()] || B.followups.good_depth.en;
          renderQuestion(arr2[Math.floor(Math.random() * arr2.length)]);
          return;
        }
        s.idx++;
        if (s.idx >= s.qs.length) { s.done = true; renderDebrief(); }
        else renderQuestion();
      }
      if (state.recOn) stopRecording(proceed);
      else proceed(null);
    }
    submit.addEventListener('click', function () {
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
    if (state.fmt === 'text') ta.focus();
  }

  /* ─── REVIEW ─── */
  function sessionScores(answers) {
    var live = answers.filter(function (a) { return !a.skipped && a.text; });
    if (!live.length) return { content: 0, structure: 0, comm: 0 };
    function avg(k) { return Math.round(live.reduce(function (t, a) { return t + a.analysis[k]; }, 0) / live.length); }
    return { content: avg('content'), structure: avg('structure'), comm: avg('comm') };
  }
  function renderDebrief(revisit) {
    stopMedia();
    var s = state.session;
    var w = setScreen('debrief', 'review');
    var sc = sessionScores(s.answers);
    var live = s.answers.filter(function (a) { return !a.skipped && (a.text || state.recordings[a.recKey]); });
    var prev = history().slice(-1)[0] || null;

    var head = el('div', 'rsim-card');
    head.appendChild(el('div', 'rsim-kick', T('03 · Review — the interview debrief', '03 · Tinjau — debrief wawancara')));
    head.appendChild(el('h2', null, T('What you did well, what weakened your answers, and what to change', 'Yang sudah baik, yang melemahkan jawabanmu, dan yang perlu diubah')));
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
    live.forEach(function (a) { if (a.analysis.trigger && a.analysis.trigger !== 'good_depth') issues[a.analysis.trigger] = (issues[a.analysis.trigger] || 0) + 1; });
    var issueNames = {
      too_short: T('Answers ending before the evidence', 'Jawaban selesai sebelum bukti hadir'),
      no_metric: T('Impact stated without numbers', 'Dampak tanpa angka'),
      we_not_i: T('"We" hiding your contribution', '"Kami" menyembunyikan kontribusimu'),
      rambling: T('Answers running long', 'Jawaban terlalu panjang'),
      generic: T('Principles without concrete stories', 'Prinsip tanpa kisah konkret'),
      no_result: T('Stories without endings', 'Kisah tanpa akhir')
    };
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
      w.appendChild(pc);
    }

    /* per-question cards */
    s.answers.forEach(function (a, i) {
      if (a.skipped) return;
      var c = el('div', 'rsim-card');
      var fmtIc = a.fmt === 'video' ? '🎥' : a.fmt === 'audio' ? '🎙' : '⌨';
      c.appendChild(el('div', 'rsim-kick', T('Q', 'P') + (i + 1) + ' · ' + fmtIc + (a.attempt > 1 ? ' · ' + T('attempt', 'percobaan') + ' ' + a.attempt : '')));
      c.appendChild(el('div', 'rsim-q', esc(a.q)));
      if (a.followup) c.appendChild(el('div', 'rsim-followup', '↳ ' + esc(a.followup)));
      var att = el('div', 'rsim-att');
      att.appendChild(el('span', null, T('Length', 'Panjang') + ' <b>' + a.analysis.words + '</b> ' + T('words', 'kata') + ' · <b>' + Math.floor(a.secs / 60) + ':' + String(a.secs % 60).padStart(2, '0') + '</b>'));
      att.appendChild(el('span', null, 'STAR <b>' + a.analysis.starN + '/4</b>'));
      att.appendChild(el('span', null, T('Numbers', 'Angka') + ' <b>' + a.analysis.digits + '</b>'));
      att.appendChild(el('span', null, T('Fillers', 'Kata pengisi') + ' <b>' + a.analysis.fillers + '</b>'));
      if (a.analysis.uniq) att.appendChild(el('span', null, T('Unique words', 'Kata unik') + ' <b>' + a.analysis.uniq + '%</b>'));
      if (a.analysis.wpm) att.appendChild(el('span', null, T('Pace', 'Tempo') + ' <b>' + a.analysis.wpm + '</b> wpm'));
      if (a.analysis.pauses > 0 && a.fmt !== 'text') att.appendChild(el('span', null, T('Long pauses ≈', 'Jeda panjang ≈') + ' <b>' + a.analysis.pauses + '</b>'));
      c.appendChild(att);
      var fb = el('div', 'rsim-fb');
      a.fb.strengths.forEach(function (t) { fb.appendChild(el('p', 's', '<span class="lbl">' + T('Strength', 'Kekuatan') + '</span>' + esc(t))); });
      a.fb.weaknesses.forEach(function (t) { fb.appendChild(el('p', 'w', '<span class="lbl">' + T('Weakness', 'Kelemahan') + '</span>' + esc(t))); });
      a.fb.changes.forEach(function (t) { fb.appendChild(el('p', 'c', '<span class="lbl">' + T('What to change', 'Yang perlu diubah') + '</span>' + esc(t))); });
      c.appendChild(fb);
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
      w.appendChild(c);
    });

    /* attempts comparison */
    var byQ = {};
    live.forEach(function (a) { if (a.text) (byQ[a.qid] = byQ[a.qid] || []).push(a); });
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
      var sess = { at: Date.now(), mode: s.mode, n: live.length, content: sc.content, structure: sc.structure, comm: sc.comm, presence: s.presence || null, roleId: s.cfg.roleId || null, difficulty: s.cfg.difficulty || 2 };
      var h = history(); h.push(sess); saveHistory(h);
    }

    /* next: improve */
    var nextC = el('div', 'rsim-card');
    nextC.appendChild(el('div', 'rsim-kick', T('Next', 'Berikutnya')));
    var nrow = el('div', 'rsim-row');
    var toImprove = el('button', 'rsim-btn', T('04 · Improve — see your plan →', '04 · Perbaiki — lihat rencanamu →'));
    toImprove.addEventListener('click', function () { renderImprove(sc); });
    nrow.appendChild(toImprove);
    if (state.drill) {
      var backLesson = el('button', 'rsim-btn ghost', T('← Back to the lesson', '← Kembali ke pelajaran'));
      backLesson.addEventListener('click', close);
      nrow.appendChild(backLesson);
    }
    nextC.appendChild(nrow);
    w.appendChild(nextC);
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

  /* ─── HISTORY ─── */
  function renderHistory() {
    var w = setScreen('history', null);
    var h = history();
    var card = el('div', 'rsim-card');
    card.appendChild(el('div', 'rsim-kick', T('Progress over time', 'Perkembangan dari waktu ke waktu')));
    if (!h.length) {
      card.appendChild(el('p', 'rsim-sub', T('No sessions yet. Your first debrief creates your baseline — everything after that is measurable progress.', 'Belum ada sesi. Debrief pertamamu menjadi garis dasar — setelah itu semuanya adalah kemajuan yang terukur.')));
    } else {
      var listEl = el('div', 'rsim-hist');
      h.slice().reverse().forEach(function (sess) {
        var d = new Date(sess.at);
        var r = el('div', 'h-row');
        r.appendChild(el('span', null, d.toLocaleDateString(lang() === 'id' ? 'id-ID' : 'en-GB') + ' · ' + (sess.mode === 'live' ? T('Live', 'Langsung') : T('Practice', 'Latihan')) + ' · ' + sess.n + ' ' + T('answers', 'jawaban')));
        r.appendChild(el('span', null, T('Content', 'Isi') + ' <b>' + sess.content + '</b> · ' + T('Structure', 'Struktur') + ' <b>' + sess.structure + '</b> · ' + T('Comm', 'Komunikasi') + ' <b>' + sess.comm + '</b>' +
          (sess.presence != null ? ' · ' + T('Presence*', 'Kehadiran*') + ' <b>' + sess.presence + '</b>' : '')));
        listEl.appendChild(r);
      });
      card.appendChild(listEl);
      if (h.some(function (x) { return x.presence != null; })) {
        card.appendChild(el('p', 'rsim-note', '*' + T('Presence is self-reviewed against your own recordings.', 'Kehadiran ditinjau sendiri dari rekamanmu.')));
      }
      if (h.length >= 2) {
        var first = h[0], last = h[h.length - 1];
        var delta = Math.round(((last.content + last.structure + last.comm) - (first.content + first.structure + first.comm)) / 3);
        card.appendChild(el('p', 'rsim-sub', (delta >= 0 ? '▲ +' : '▼ ') + delta + ' ' + T('average points since your first session.', 'poin rata-rata sejak sesi pertamamu.')));
      }
    }
    var row = el('div', 'rsim-row');
    var back = el('button', 'rsim-btn ghost', T('← Back', '← Kembali'));
    back.addEventListener('click', renderHome);
    row.appendChild(back);
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
    if (e.detail && e.detail.tool === 'simulator') open(e.detail.mode || 'home', e.detail.qid || null);
  });

  window.MT_ROPE_SIM = { open: open, close: close, stats: bankStats, _analyse: analyseAnswer };
})();
