/**
 * THE COMPASS — NAVIGATOR
 * -----------------------
 * The personal navigation layer. It reads every Compass section —
 * Bearing (scores), Course Plotter (routes, stages, debriefs),
 * Navigation Briefing (pipeline patterns), Discovery (Personal Audit,
 * journal), Habits & Reminders, Development Plan (goals, milestones),
 * My Learning (module progress), Waypoints (journey log, badges) and
 * Resources (job-search checklist) — plus the member's own destination,
 * and answers eight questions:
 *   Where am I now? · Where am I trying to go? · What should I focus on
 *   next? · Why does it matter? · What should I do? · What first?
 *   · Am I making progress? · What if I fall behind?
 *
 * How it reasons: a transparent, on-device rules engine. Every candidate
 * action is scored for urgency and leverage from the member's own entries,
 * and every recommendation carries the evidence it was built from. It is
 * not a chatbot and it makes no predictions about hiring outcomes.
 *
 * Honesty contract: all reads and writes go through the page's getLS/setLS
 * (in-memory in demo mode). Nothing leaves the browser.
 * Rendered with js/tool-shell.js primitives.
 */
(function () {
  'use strict';
  var SH = window.MT_SHELL;
  if (!SH) return;
  var el = SH.el, esc = SH.esc;
  var C = null;   /* host API: see index.html init */
  var DAY = 86400000;
  var K = { profile: 'compass_nav_profile', snooze: 'compass_nav_snooze', history: 'compass_nav_history' };

  function lang() { return C.lang(); }
  function T(en, id) { return lang() === 'id' ? id : en; }
  function P(en, id) { return { en: en, id: id }; }
  function tx(p) { return p == null ? '' : typeof p === 'string' ? p : (p[lang()] || p.en || ''); }
  function today() { return new Date().toISOString().slice(0, 10); }
  function iso(ms) { return new Date(ms).toISOString().slice(0, 10); }
  /* whole calendar days from today (local): today 0, tomorrow 1, yesterday -1 */
  function daysUntil(d) { var t = new Date(); t.setHours(0, 0, 0, 0); return Math.round((new Date(String(d).slice(0, 10) + 'T00:00:00').getTime() - t.getTime()) / DAY); }
  function ageDays(d) { var t = typeof d === 'number' ? d : new Date(String(d).length === 10 ? d + 'T12:00:00' : d).getTime(); return Math.floor((Date.now() - t) / DAY); }
  function load(k, def) { try { var v = C.getLS(k, null); return v == null ? def : JSON.parse(v); } catch (e) { return def; } }
  function save(k, v) { C.setLS(k, JSON.stringify(v)); }
  function fmt(d) { return d ? new Date(d + (d.length === 10 ? 'T12:00:00' : '')).toLocaleDateString(lang() === 'id' ? 'id-ID' : 'en-GB', { day: 'numeric', month: 'short' }) : '—'; }
  function tools() { return window.MT_COMPASS_TOOLS; }
  function q(s) { return '“' + s + '”'; }
  function clip(s, n) { s = String(s || ''); return s.length > n ? s.slice(0, n - 1) + '…' : s; }

  /* ─── vocabulary ─── */
  var STAGE_OPTS = [
    ['student', P('Student', 'Mahasiswa'), P('a student', 'mahasiswa')],
    ['fresh_graduate', P('Fresh graduate', 'Lulusan baru'), P('a fresh graduate', 'lulusan baru')],
    ['early_professional', P('Early professional (1–5 years)', 'Profesional awal (1–5 tahun)'), P('an early professional', 'profesional awal')],
    ['experienced_professional', P('Experienced professional (5–10 years)', 'Profesional berpengalaman (5–10 tahun)'), P('an experienced professional', 'profesional berpengalaman')],
    ['senior_professional', P('Senior professional (10+ years)', 'Profesional senior (10+ tahun)'), P('a senior professional', 'profesional senior')]
  ];
  var OBJ_OPTS = [
    ['first_role', P('Land my first internship or graduate role', 'Mendapat magang atau peran graduate pertama')],
    ['transition', P('Move into a new industry or function', 'Pindah ke industri atau fungsi baru')],
    ['promotion', P('Earn a promotion', 'Meraih promosi')],
    ['leadership', P('Step into leadership', 'Masuk ke peran kepemimpinan')],
    ['growth', P('Accelerate my growth', 'Mempercepat pertumbuhan')],
    ['foundations', P('Build long-term foundations', 'Membangun fondasi jangka panjang')]
  ];
  var PHASES = {
    prepare: { name: P('preparation', 'persiapan'), label: P('Preparing', 'Bersiap'), focus: P('Foundations and targets — know what you are aiming for and build the materials before you apply.', 'Fondasi dan target — ketahui apa yang kamu tuju dan siapkan bahanmu sebelum melamar.') },
    apply: { name: P('application', 'melamar'), label: P('Applying', 'Melamar'), focus: P('A steady flow of well-targeted applications, and a CV that clears the first screen.', 'Aliran lamaran yang terarah dan konsisten, serta CV yang lolos saringan pertama.') },
    assess: { name: P('assessment', 'asesmen'), label: P('Assessments', 'Asesmen'), focus: P('Tests and case work — timed practice beats reading about it.', 'Tes dan studi kasus — latihan berbatas waktu lebih ampuh daripada sekadar membaca.') },
    interview: { name: P('interview', 'wawancara'), label: P('Interviewing', 'Wawancara'), focus: P('Interview conversion — prepared stories, rehearsed openings and a debrief after every round.', 'Konversi wawancara — cerita yang siap, pembuka yang terlatih, dan debrief setelah setiap babak.') },
    decide: { name: P('offer-decision', 'keputusan tawaran'), label: P('Deciding on an offer', 'Memutuskan tawaran'), focus: P('A well-evaluated decision — the whole package, your priorities, and a considered reply.', 'Keputusan yang dievaluasi dengan baik — seluruh paket, prioritasmu, dan balasan yang matang.') },
    grow: { name: P('in-role growth', 'pertumbuhan di peran'), label: P('Growing in role', 'Bertumbuh di peran'), focus: P('Performance, visibility and evidence — the raw material of your next move.', 'Kinerja, visibilitas, dan bukti — bahan baku langkah berikutnya.') }
  };
  var DIMS = [
    ['careerIntelligence', P('Career Intelligence', 'Kecerdasan Karier')],
    ['profileStrength', P('Profile Strength', 'Kekuatan Profil')],
    ['interviewReadiness', P('Interview Readiness', 'Kesiapan Wawancara')],
    ['networkCapital', P('Network Capital', 'Modal Jaringan')],
    ['careerMindset', P('Career Mindset', 'Pola Pikir Karier')]
  ];
  var GROUP_NAMES = { target: P('target', 'target'), applied: P('CV screening', 'seleksi CV'), assessment: P('assessment', 'asesmen'), interview: P('interview', 'wawancara'), decision: P('decision', 'keputusan') };
  var CO_TYPES = { multinational: P('multinational', 'multinasional'), indonesian: P('national corporate', 'korporasi nasional'), startup: P('startup', 'startup'), public: P('public-sector and state-owned', 'sektor publik dan BUMN') };
  var WEEKDAYS = { en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], id: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'] };
  function optLabel(list, key, i) { var o = list.filter(function (x) { return x[0] === key; })[0]; return o ? o[i || 1] : null; }

  /* ─── destination (profile) ─── */
  function profile() {
    var p = load(K.profile, null);
    if (p) { p.saved = true; return p; }
    var cal = null; try { cal = JSON.parse(sessionStorage.getItem('compass_calibration') || 'null'); } catch (e) {}
    p = { stage: (cal && cal.careerStage) || '', objective: (cal && cal.careerObjective) || '', target: '', by: '', hours: 6 };
    if (C.isDemoMode) { p = { stage: 'fresh_graduate', objective: 'first_role', target: T('Graduate trainee role in FMCG or banking', 'Peran graduate trainee di FMCG atau perbankan'), by: iso(Date.now() + 75 * DAY), hours: 8 }; save(K.profile, p); p.saved = true; return p; }
    var d = tools() ? tools().data() : {};
    if (d.audit && d.audit.mission && d.audit.mission.outcome) p.target = d.audit.mission.outcome;
    else if (d.routePlan && d.routePlan.plan && d.routePlan.plan.goal) p.target = d.routePlan.plan.goal;
    p.saved = false;
    return p;
  }

  /* ─── signals: one pass over every section ─── */
  function gather() {
    var td = today();
    var d = tools() ? tools().data() : { habits: [], goals: [], journal: [], checklist: {}, habitStats: { pct: 0, streak: 0 }, audit: null, routePlan: null, SUGGESTED: [], TOOLS: [], CHECKLIST: [], PRODUCT_LINKS: [] };
    var s = { d: d, td: td, prof: profile() };
    var apps = C.getApplications();
    s.apps = apps;
    s.live = apps.filter(function (a) { return a.status === 'active' || a.status === 'offer'; });
    s.offers = apps.filter(function (a) { return a.status === 'offer'; });
    s.rejected = apps.filter(function (a) { return a.status === 'rejected'; });
    s.sc = C.calculateScores(); s.lv = C.getLevel(s.sc.overall);
    s.overdueApps = s.live.filter(function (a) { return a.nextActionDue && daysUntil(a.nextActionDue) < 0; }).sort(function (a, b) { return String(a.nextActionDue).localeCompare(String(b.nextActionDue)); });
    s.interviewsSoon = s.live.filter(function (a) { return a.stage >= 7 && a.stage <= 10 && a.nextActionDue && daysUntil(a.nextActionDue) >= 0 && daysUntil(a.nextActionDue) <= 7; }).sort(function (a, b) { return String(a.nextActionDue).localeCompare(String(b.nextActionDue)); });
    s.stale = apps.filter(function (a) { return a.status === 'active' && ageDays(a.updatedAt || a.applicationDate) > 14; });
    s.rejNoDebrief = s.rejected.filter(function (a) { return !a.rejectionDebrief; });
    s.rejCv = s.rejected.filter(function (a) { var st = (a.rejectionDebrief && a.rejectionDebrief.stageReached) || a.stage; return C.groupOf(st) === 'applied'; });
    s.needDebrief = s.live.filter(function (a) { return a.stage >= 9 && a.stage <= 11 && !(a.interviewDebriefs || []).length; });
    s.apps14 = apps.filter(function (a) { return a.stage >= 2 && a.applicationDate && ageDays(a.applicationDate) <= 14; }).length;
    s.debriefs = []; apps.forEach(function (a) { (a.interviewDebriefs || []).forEach(function (x) { s.debriefs.push({ a: a, x: x }); }); });
    s.debriefs.sort(function (p, q2) { return String(q2.x.date).localeCompare(String(p.x.date)); });
    /* profile + phase */
    var obj = s.prof.objective, st = s.prof.stage;
    /* unknown stage and objective: start from preparation (the Compass pipeline) until the member sets a destination */
    s.jobSearch = obj === 'first_role' || obj === 'transition' || (!obj && (!st || st === 'student' || st === 'fresh_graduate')) || (s.live.length > 0 && obj !== 'promotion' && obj !== 'leadership');
    if (s.offers.length) s.phase = 'decide';
    else if (s.live.some(function (a) { return a.stage >= 7 && a.stage <= 11; })) s.phase = 'interview';
    else if (s.live.some(function (a) { return a.stage >= 4 && a.stage <= 6; })) s.phase = 'assess';
    else if (s.live.length && s.jobSearch) s.phase = 'apply';
    else s.phase = s.jobSearch ? 'prepare' : 'grow';
    /* habits */
    var hs = d.habits || []; s.habits = hs;
    var due7 = 0, done7 = 0, wk = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
    for (var i = 1; i <= 28; i++) {
      var dt = new Date(Date.now() - i * DAY), ds = iso(dt.getTime());
      hs.forEach(function (h) {
        if (!(tools() && tools().habitDue(h, dt)) || (h.created && h.created > ds)) return;
        var ok = !!(h.log && h.log[ds]);
        if (i <= 7) { due7++; if (ok) done7++; }
        wk[dt.getDay()][0]++; if (ok) wk[dt.getDay()][1]++;
      });
    }
    s.hab7 = { due: due7, done: done7, pct: due7 ? Math.round(done7 / due7 * 100) : null };
    s.hab30 = d.habitStats || { pct: 0, streak: 0 };
    var weakest = null; wk.forEach(function (w, k) { if (w[0] >= 3) { var r = w[1] / w[0]; if (!weakest || r < weakest.r) weakest = { day: k, r: r }; } });
    s.weakDay = weakest && weakest.r < 0.6 ? weakest : null;
    s.habitRank = hs.map(function (h) { var due = 0, done = 0; for (var j = 1; j <= 30; j++) { var dt2 = new Date(Date.now() - j * DAY), d2 = iso(dt2.getTime()); if (tools().habitDue(h, dt2) && !(h.created && h.created > d2)) { due++; if (h.log && h.log[d2]) done++; } } return { h: h, pct: due ? done / due : 0 }; }).sort(function (a, b) { return b.pct - a.pct; });
    /* goals */
    var gp = function (g) { return tools() ? tools().goalProgress(g) : 0; };
    s.goals = (d.goals || []).filter(function (g) { return !g.done; });
    s.goalsOverdue = s.goals.filter(function (g) { return g.due && daysUntil(g.due) < 0; }).sort(function (a, b) { return String(a.due).localeCompare(String(b.due)); });
    s.goalsBehind = s.goals.filter(function (g) {
      if (!g.due || !g.created || daysUntil(g.due) < 0) return false;
      var total = (new Date(g.due + 'T12:00:00') - new Date(g.created + 'T12:00:00')) / DAY; if (total < 7) return false;
      var el2 = total - daysUntil(g.due), exp = el2 / total;
      return exp > 0.3 && exp - gp(g) / 100 > 0.3;
    });
    s.goalsNoMs = s.goals.filter(function (g) { return !(g.milestones || []).length; });
    var msAll = 0, msDone = 0; s.goals.forEach(function (g) { (g.milestones || []).forEach(function (m) { msAll++; if (m.done) msDone++; }); });
    s.ms = { all: msAll, done: msDone };
    s.gp = gp;
    /* discovery */
    s.audit = d.audit; s.journal = d.journal || [];
    var lastJ = s.journal.map(function (e) { return e.date; }).sort().pop();
    s.journalAge = lastJ ? ageDays(lastJ) : null;
    /* learning */
    s.prog = C.PRODUCTS.map(function (p) { return { p: p, done: C.modulesDone(p.key + '_progress', p.total) }; });
    s.modsDone = s.prog.reduce(function (n, x) { return n + x.done; }, 0);
    s.modsTotal = s.prog.reduce(function (n, x) { return n + x.p.total; }, 0);
    /* resources */
    s.ck = d.checklist || {};
    s.ckDone = (d.CHECKLIST || []).filter(function (c) { return s.ck[c.key]; }).length;
    /* route plan (on-device, real mode only) */
    var rp = d.routePlan || {};
    s.rp = { goal: rp.plan && rp.plan.goal, day: rp.plan && rp.plan.started ? ageDays(rp.plan.started) + 1 : null, wins: (rp.wins || []).length, lastWin: (rp.wins || []).map(function (w) { return w.date; }).sort(function (a, b) { return b - a; })[0] || null, started: rp.plan && rp.plan.started };
    /* waypoints */
    s.log = C.getMilestones();
    s.badges = C.earnedCount();
    /* activity events → momentum */
    var ev = [];
    s.log.forEach(function (m) { if (m.date) ev.push(m.date); });
    hs.forEach(function (h) { Object.keys(h.log || {}).forEach(function (k) { ev.push(k); }); });
    s.journal.forEach(function (e) { ev.push(e.date); });
    apps.forEach(function (a) { if (a.applicationDate) ev.push(a.applicationDate); (a.interviewDebriefs || []).forEach(function (x) { if (x.date) ev.push(x.date); }); });
    (d.goals || []).forEach(function (g) { if (g.doneAt) ev.push(g.doneAt); });
    (rp.wins || []).forEach(function (w) { ev.push(iso(w.date)); });
    var weeks = [0, 0, 0, 0, 0, 0, 0, 0];
    ev.forEach(function (x) { var a = ageDays(x); if (a >= 0 && a < 56) weeks[Math.floor(a / 7)]++; });
    s.weeks = weeks;
    s.lastActivity = ev.filter(function (x) { return ageDays(x) >= 0; }).sort().pop() || null;
    s.idle = s.lastActivity ? ageDays(s.lastActivity) : null;
    var rec = weeks[0] + weeks[1], pri = weeks[2] + weeks[3];
    s.trend = !rec && !pri ? 'none' : rec > pri * 1.15 ? 'up' : rec < pri * 0.85 ? 'down' : 'steady';
    s.trendNums = [rec, pri];
    /* readiness history */
    s.history = recordHistory(s.sc);
    /* behind-plan signals */
    var b = [], n;
    if ((n = s.overdueApps.length)) b.push(P(n + (n === 1 ? ' route step is overdue' : ' route steps are overdue'), n + ' langkah rute terlambat'));
    if ((n = s.goalsOverdue.length)) b.push(P(n + (n === 1 ? ' goal is past its date' : ' goals are past their date'), n + ' tujuan melewati tenggatnya'));
    if ((n = s.goalsBehind.length)) b.push(P(n + (n === 1 ? ' goal is behind its schedule' : ' goals are behind their schedule'), n + ' tujuan tertinggal dari jadwalnya'));
    if (s.hab7.pct != null && s.hab7.due >= 3 && s.hab7.pct < 50) b.push(P('Habits kept ' + s.hab7.pct + '% in the last 7 days', 'Kebiasaan terjaga ' + s.hab7.pct + '% dalam 7 hari terakhir'));
    if (s.phase === 'apply' && s.apps14 < 2) b.push(P('Fewer than two applications in 14 days', 'Kurang dari dua lamaran dalam 14 hari'));
    if (s.idle != null && s.idle >= 10) b.push(P('No activity logged for ' + s.idle + ' days', 'Tidak ada aktivitas tercatat selama ' + s.idle + ' hari'));
    if (s.prof.by && daysUntil(s.prof.by) < 0) b.push(P('Your target date has passed', 'Tanggal targetmu sudah lewat'));
    s.behindP = b;
    s.behind = b.map(function (x) { return x.en; });
    s.behindId = b.map(function (x) { return x.id; });
    s.status = !b.length ? 'on' : b.length <= 2 ? 'drift' : 'off';
    return s;
  }

  function recordHistory(sc) {
    var h = load(K.history, []);
    if (!Array.isArray(h)) h = [];
    if (C.isDemoMode && !h.length) {
      var steps = [14, 12, 9, 7, 5, 2];
      steps.forEach(function (k, i) { h.push({ d: iso(Date.now() - (42 - i * 7) * DAY), o: Math.max(0, sc.overall - k) }); });
    }
    var td = today();
    if (!h.length || h[h.length - 1].d !== td) h.push({ d: td, o: sc.overall }); else h[h.length - 1].o = sc.overall;
    if (h.length > 180) h = h.slice(-180);
    save(K.history, h);
    return h;
  }

  /* ─── curriculum: the critical path for this phase ─── */
  function prod(key) { return C.PRODUCTS.filter(function (p) { return p.key === key; })[0]; }
  function done(key) { var p = prod(key); return p ? C.modulesDone(key + '_progress', p.total) : 0; }
  function mod(key, idx, reason) { var p = prod(key); if (!p || !p.modules[idx]) return null; return { p: p, idx: idx, m: p.modules[idx], reason: reason, done: done(key) > idx }; }
  function nextMod(key, reason) { var p = prod(key); if (!p) return null; var k = done(key); return k < p.total ? mod(key, k, reason) : null; }
  function criticalPath(s) {
    var out = [], obj = s.prof.objective;
    var add = function (x) { if (x && !x.done && !out.some(function (y) { return y.p.key === x.p.key && y.idx === x.idx; })) out.push(x); };
    var R = function (en, id) { return P(en, id); };
    if (s.phase === 'prepare') {
      add(nextMod('aladin', R('Self-awareness first: it decides which roles you should target.', 'Kesadaran diri lebih dulu: ia menentukan peran mana yang layak kamu bidik.')));
      add(mod('maverick', 0, R('Know how hiring works before you enter it.', 'Pahami cara kerja rekrutmen sebelum kamu masuk ke dalamnya.')));
      add(mod('maverick', 1, R('Targets and referrals shape where you apply.', 'Target dan referensi menentukan ke mana kamu melamar.')));
    } else if (s.phase === 'apply') {
      add(mod('maverick', 2, R('Your CV is the gate to every route you plot.', 'CV-mu adalah gerbang menuju setiap rute yang kamu buat.')));
      add(mod('maverick', 3, R('Clears the ATS and administrative screen.', 'Meloloskan saringan ATS dan administrasi.')));
      add(nextMod('maverick', R('Next unfinished module in The Pack.', 'Modul The Pack berikutnya yang belum selesai.')));
      add(mod('nexus', 1, R('Stories are the currency of the interviews to come.', 'Cerita adalah mata uang wawancara yang akan datang.')));
    } else if (s.phase === 'assess') {
      var hasCase = s.live.some(function (a) { return a.stage === 6; });
      add(mod('maverick', 6, R('Timed practice for the tests in front of you.', 'Latihan berbatas waktu untuk tes yang ada di depanmu.')));
      if (hasCase) add(mod('nexus', 5, R('One of your routes is at the case study stage.', 'Salah satu rutemu ada di tahap studi kasus.')));
      add(mod('nexus', 1, R('Interviews usually follow assessments — build the story bank now.', 'Wawancara biasanya menyusul asesmen — bangun bank cerita sekarang.')));
    } else if (s.phase === 'interview') {
      var MAPI = { 7: [6, R('A route is at the group assessment stage.', 'Ada rute di tahap diskusi kelompok.')], 8: [4, R('A route is at the HR interview stage.', 'Ada rute di tahap wawancara HR.')], 9: [5, R('A route is at the technical or user interview stage.', 'Ada rute di tahap wawancara teknis atau user.')], 10: [7, R('A route is at the final interview stage.', 'Ada rute di tahap wawancara final.')] };
      s.live.slice().sort(function (a, b) { return b.stage - a.stage; }).forEach(function (a) { var m = MAPI[a.stage]; if (m) add(mod('nexus', m[0], m[1])); });
      add(mod('nexus', 1, R('Prepared stories carry every interview format.', 'Cerita yang siap menopang setiap format wawancara.')));
      add(mod('nexus', 3, R('Your opening sets the frame for the whole conversation.', 'Pembukaanmu membingkai seluruh percakapan.')));
      add(mod('nexus', 8, R('Full rehearsals before the real thing.', 'Gladi penuh sebelum hari sebenarnya.')));
    } else if (s.phase === 'decide') {
      add(mod('nexus', 9, R('You hold an offer: evaluate and negotiate it properly.', 'Kamu memegang tawaran: evaluasi dan negosiasikan dengan benar.')));
      add(mod('nexus', 10, R('Plan the first 90 days before day one.', 'Rencanakan 90 hari pertama sebelum hari pertama.')));
    } else {
      if (obj === 'promotion') add(mod('horizon', 4, R('Your objective is a promotion.', 'Tujuanmu adalah promosi.')));
      if (obj === 'leadership') add(mod('horizon', 8, R('Your objective is leadership.', 'Tujuanmu adalah kepemimpinan.')));
      if (obj === 'transition') add(mod('horizon', 6, R('Your objective is a move.', 'Tujuanmu adalah perpindahan.')));
      add(nextMod('horizon', R('Next unfinished module in The Route.', 'Modul The Route berikutnya yang belum selesai.')));
      add(mod('horizon', 3, R('Visibility turns good work into recognised work.', 'Visibilitas mengubah kerja baik menjadi kerja yang diakui.')));
    }
    return out;
  }

  /* ─── candidate actions, scored ─── */
  function actions(s) {
    var A = [], snooze = load(K.snooze, {});
    var push = function (a) { if (snooze[a.id] !== s.td) A.push(a); };
    var stE = function (n) { var x = C.STAGES[n - 1]; return x ? x.en : ''; }, stI = function (n) { var x = C.STAGES[n - 1]; return x ? x.idn : ''; };
    var dueText = function (n) { return n <= 0 ? P('today', 'hari ini') : n === 1 ? P('tomorrow', 'besok') : P('in ' + n + ' days', 'dalam ' + n + ' hari'); };

    s.offers.forEach(function (a) {
      push({ id: 'offer-' + a.id, w: a.nextActionDue ? 98 - Math.max(0, Math.min(8, daysUntil(a.nextActionDue))) : 92, icon: 'scale', cat: P('Offer', 'Tawaran'), mins: 45,
        title: P('Evaluate the ' + a.company + ' offer before you reply', 'Evaluasi tawaran ' + a.company + ' sebelum membalas'),
        why: P('An offer is the moment your leverage is highest — once you accept, the terms are set. Weigh the whole package against your destination, not just the base pay.', 'Tawaran adalah saat daya tawarmu paling tinggi — setelah kamu menerima, syaratnya terkunci. Timbang seluruh paket terhadap tujuanmu, bukan hanya gaji pokok.'),
        steps: [P('Open the route and run the Offer Evaluation', 'Buka rutenya dan jalankan Evaluasi Tawaran'), P('Write down the three terms that matter most to you', 'Tuliskan tiga syarat yang paling penting bagimu'), P('Ask for a few days to review — a normal, professional request', 'Minta beberapa hari untuk meninjau — permintaan yang wajar dan profesional'), P('Prepare your reply with The Rope Module 10', 'Siapkan balasanmu dengan The Rope Modul 10')],
        cta: { label: P('Open the offer', 'Buka tawaran'), app: a.id }, src: P('Course Plotter', 'Perencana Rute') });
    });
    s.interviewsSoon.slice(0, 1).forEach(function (a) {
      var n = daysUntil(a.nextActionDue);
      var STEPS = {
        7: [P('Review The Rope Module 7 — group assessments', 'Pelajari The Rope Modul 7 — diskusi kelompok'), P('Practise one timed group case with two peers', 'Latih satu kasus kelompok berbatas waktu bersama dua rekan'), P('Plan how you will open, build on others and summarise', 'Rencanakan cara membuka, membangun gagasan orang lain, dan merangkum')],
        8: [P('Rehearse your opening out loud — The Rope Module 4', 'Latih pembukaanmu dengan bersuara — The Rope Modul 4'), P('Pick five stories from your story bank that fit this role', 'Pilih lima cerita dari bank ceritamu yang cocok untuk peran ini'), P('Run one mock HR interview, then debrief it', 'Lakukan satu simulasi wawancara HR, lalu debrief')],
        9: [P('List the technical requirements in the job description', 'Daftar persyaratan teknis di deskripsi lowongan'), P('Practise thinking out loud on two sample problems — The Rope Module 6', 'Latih berpikir sambil bersuara pada dua soal contoh — The Rope Modul 6'), P('Prepare one question about how the team works', 'Siapkan satu pertanyaan tentang cara kerja timnya')],
        10: [P('Form your view of where the organisation is heading — The Rope Module 8', 'Susun pandanganmu tentang arah organisasi — The Rope Modul 8'), P('Write five questions that show you did the research', 'Tulis lima pertanyaan yang menunjukkan kamu sudah meriset'), P('Rehearse a two-minute answer to “why us, why now”', 'Latih jawaban dua menit untuk “mengapa kami, mengapa sekarang”')]
      };
      push({ id: 'iv-' + a.id + '-' + a.stage, w: 99 - Math.max(0, n), icon: 'interview', cat: P('Interview', 'Wawancara'), mins: 60,
        title: P('Prepare for your ' + stE(a.stage) + ' at ' + a.company, 'Bersiap untuk ' + stI(a.stage) + ' di ' + a.company),
        why: P('It is due ' + tx(dueText(n)) + '. Preparation compounds in the days before an interview; the night before only adds nerves.', 'Jatuh temponya ' + dueText(n).id + '. Persiapan bertumbuh di hari-hari sebelum wawancara; malam sebelumnya hanya menambah gugup.'),
        steps: STEPS[a.stage] || STEPS[8], cta: { label: P('Open the route', 'Buka rute'), app: a.id }, src: P('Course Plotter', 'Perencana Rute') });
    });
    var ov = s.overdueApps.filter(function (a) { return a.status !== 'offer' && !s.interviewsSoon.some(function (x) { return x.id === a.id; }); });
    if (ov.length) {
      var a0 = ov[0], k = -daysUntil(a0.nextActionDue);
      push({ id: 'ov-' + a0.id, w: 84 + Math.min(8, k), icon: 'clock', cat: P('Overdue', 'Terlambat'), mins: 20,
        title: P('Clear the overdue step for ' + a0.company + (ov.length > 1 ? ' (+' + (ov.length - 1) + ' more)' : ''), 'Selesaikan langkah terlambat untuk ' + a0.company + (ov.length > 1 ? ' (+' + (ov.length - 1) + ' lagi)' : '')),
        why: P(q(clip(a0.nextAction || stE(a0.stage), 90)) + ' was due ' + k + (k === 1 ? ' day' : ' days') + ' ago. Overdue steps are where routes quietly go cold — do it, or re-date it honestly.', q(clip(a0.nextAction || stI(a0.stage), 90)) + ' jatuh tempo ' + k + ' hari lalu. Langkah yang terlambat adalah tempat rute diam-diam mendingin — kerjakan, atau jadwalkan ulang dengan jujur.'),
        steps: [P('Open the route', 'Buka rutenya'), P('Do the step, or set a new realistic date', 'Kerjakan langkahnya, atau tetapkan tanggal baru yang realistis'), P('Update the stage if anything has changed', 'Perbarui tahapnya jika ada perubahan')],
        cta: { label: P('Open the route', 'Buka rute'), app: a0.id }, src: P('Course Plotter', 'Perencana Rute') });
    }
    if (!s.prof.target) push({ id: 'dest', w: 78, icon: 'flag', cat: P('Destination', 'Tujuan'), mins: 5,
      title: P('Set your destination', 'Tetapkan tujuanmu'),
      why: P('Every recommendation here is weighed against where you are going. Without a destination the Navigator can only react to what is urgent — it cannot steer you towards what matters.', 'Setiap rekomendasi di sini ditimbang terhadap ke mana kamu menuju. Tanpa tujuan, Navigator hanya bisa bereaksi pada yang mendesak — tak bisa mengarahkanmu ke yang penting.'),
      steps: [P('Name the role or outcome in one line', 'Sebut peran atau hasilnya dalam satu kalimat'), P('Choose a realistic date', 'Pilih tanggal yang realistis'), P('Say how many hours a week you can give it', 'Tentukan berapa jam per minggu yang bisa kamu berikan')],
      cta: { label: P('Set it now', 'Tetapkan sekarang'), run: 'editDest' }, src: P('Navigator', 'Navigator') });
    if (s.prof.by && daysUntil(s.prof.by) < 0) push({ id: 'dest-date', w: 76, icon: 'calendar', cat: P('Destination', 'Tujuan'), mins: 5,
      title: P('Reset your target date', 'Atur ulang tanggal targetmu'),
      why: P('Your target date (' + fmt(s.prof.by) + ') has passed. A date in the past cannot pace anything — set the next honest one.', 'Tanggal targetmu (' + fmt(s.prof.by) + ') sudah lewat. Tanggal yang lampau tak bisa mengatur laju apa pun — tetapkan tanggal jujur berikutnya.'),
      steps: [P('Look at what moved since you set it', 'Lihat apa yang bergerak sejak kamu menetapkannya'), P('Choose a new date you can defend', 'Pilih tanggal baru yang bisa kamu pertanggungjawabkan')],
      cta: { label: P('Edit destination', 'Ubah tujuan'), run: 'editDest' }, src: P('Navigator', 'Navigator') });
    if (s.goalsOverdue.length) {
      var g0 = s.goalsOverdue[0], kg = -daysUntil(g0.due);
      push({ id: 'goal-ov-' + g0.id, w: 74, icon: 'flag', cat: P('Plan', 'Rencana'), mins: 15,
        title: P('Re-plan ' + q(clip(g0.title, 60)), 'Rencanakan ulang ' + q(clip(g0.title, 60))),
        why: P('It was due ' + kg + (kg === 1 ? ' day' : ' days') + ' ago with ' + s.gp(g0) + '% of its milestones done. A goal past its date stops guiding you — finish it, or give it an honest new date.', 'Tenggatnya ' + kg + ' hari lalu dengan ' + s.gp(g0) + '% tonggak selesai. Tujuan yang melewati tenggat berhenti menuntunmu — selesaikan, atau beri tanggal baru yang jujur.'),
        steps: [P('Tick what is actually done', 'Centang yang benar-benar sudah selesai'), P('Pick the next milestone you can finish this week', 'Pilih tonggak berikutnya yang bisa kamu selesaikan minggu ini'), P('Set a new date — or close the goal if it no longer matters', 'Tetapkan tanggal baru — atau tutup tujuannya jika tak lagi penting')],
        cta: { label: P('Open the plan', 'Buka rencana'), tab: 'plan' }, src: P('Development Plan', 'Rencana Pengembangan') });
    }
    if (s.rejCv.length >= 2 && !s.ck.ats) push({ id: 'ats', w: 72, icon: 'docSearch', cat: P('Pattern', 'Pola'), mins: 30,
      title: P('Run your CV through the ATS Check', 'Cek CV-mu dengan ATS Check'),
      why: P(s.rejCv.length + ' of your routes closed at CV screening — before a person read them. That pattern usually points to the document, not to you.', s.rejCv.length + ' rutemu ditutup di seleksi CV — sebelum ada orang yang membacanya. Pola itu biasanya menunjuk ke dokumennya, bukan ke dirimu.'),
      steps: [P('Paste a target job description into the ATS Check', 'Tempel deskripsi lowongan incaran ke ATS Check'), P('Fix the missing keywords and formatting flags', 'Perbaiki kata kunci yang hilang dan tanda format'), P('Tick it off in Resources', 'Centang di Sumber Daya')],
      cta: { label: P('Open the ATS Check', 'Buka ATS Check'), href: '/products/the-pack/?tool=gym&mode=ats' }, src: P('Navigation Briefing', 'Pengarahan Navigasi') });
    if ((s.phase === 'interview' || s.phase === 'assess') && !s.ck.stories) push({ id: 'stories', w: s.phase === 'interview' ? 70 : 60, icon: 'book', cat: P('Interview prep', 'Persiapan wawancara'), mins: 60,
      title: P('Write five STAR stories', 'Tulis lima cerita STAR'),
      why: P('Interviews ask for evidence. Five prepared stories cover most behavioural questions, so you answer with specifics instead of improvising.', 'Wawancara meminta bukti. Lima cerita yang siap menjawab sebagian besar pertanyaan perilaku, sehingga kamu menjawab dengan hal spesifik, bukan berimprovisasi.'),
      steps: [P('Open The Rope Module 2 — Your Story Bank', 'Buka The Rope Modul 2 — Bank Ceritamu'), P('Draft one story per core competency of the role', 'Tulis satu cerita untuk tiap kompetensi inti peran itu'), P('Tick “Five STAR stories” in Resources', 'Centang “Lima cerita STAR” di Sumber Daya')],
      cta: { label: P('Open The Rope', 'Buka The Rope'), href: '/products/the-rope/?context=compass' }, src: P('Resources', 'Sumber Daya') });
    if (s.phase === 'apply' && s.apps14 < 2) push({ id: 'velocity', w: 66, icon: 'send', cat: P('Pipeline', 'Alur'), mins: 90,
      title: P('Send two well-targeted applications this week', 'Kirim dua lamaran yang terarah minggu ini'),
      why: P('You logged ' + s.apps14 + ' application' + (s.apps14 === 1 ? '' : 's') + ' in the last 14 days. Interviews come from a steady flow of targeted applications; a pause now shows up as an empty calendar a month from now.', 'Kamu mencatat ' + s.apps14 + ' lamaran dalam 14 hari terakhir. Wawancara datang dari aliran lamaran terarah yang konsisten; jeda sekarang akan terlihat sebagai kalender kosong sebulan lagi.'),
      steps: [P('Pick two roles that fit your destination', 'Pilih dua peran yang sesuai dengan tujuanmu'), P('Tailor the CV to each with the ATS Check', 'Sesuaikan CV untuk masing-masing dengan ATS Check'), P('Plot both routes in the Course Plotter', 'Catat kedua rute di Perencana Rute')],
      cta: { label: P('Plot a new route', 'Buat rute baru'), add: true }, src: P('Course Plotter', 'Perencana Rute') });
    var cp = criticalPath(s)[0];
    if (cp) push({ id: 'learn-' + cp.p.key + '-' + cp.idx, w: s.phase === 'prepare' || s.phase === 'grow' ? 62 : 48, icon: 'book', cat: P('Learning', 'Belajar'), mins: 20,
      title: P('Continue ' + cp.p.nameEn + ' Module ' + (cp.idx + 1) + ': ' + cp.m.en, 'Lanjutkan ' + cp.p.nameEn + ' Modul ' + (cp.idx + 1) + ': ' + cp.m.idn),
      why: P(cp.reason.en + ' It sits on the critical path for the ' + PHASES[s.phase].name.en + ' phase.', cp.reason.id + ' Modul ini ada di jalur kritis fase ' + PHASES[s.phase].name.id + '.'),
      steps: [P('Open ' + cp.p.nameEn, 'Buka ' + cp.p.nameEn), P('Finish one lesson today — about 20 minutes', 'Selesaikan satu pelajaran hari ini — sekitar 20 menit'), P('Apply one idea to a live route or goal', 'Terapkan satu gagasan pada rute atau tujuan yang sedang berjalan')],
      cta: { label: P('Open ' + cp.p.nameEn, 'Buka ' + cp.p.nameEn), href: cp.p.file + '?context=compass' }, src: P('My Learning', 'Pembelajaranku') });
    if (!C.isDemoMode && !s.audit && (s.phase === 'prepare' || s.phase === 'apply')) push({ id: 'audit', w: s.phase === 'prepare' ? 64 : 46, icon: 'heart', cat: P('Discovery', 'Penjelajahan'), mins: 40,
      title: P('Complete the Personal Audit', 'Selesaikan Audit Pribadi'),
      why: P('Your values, energy and strengths are the filter for every target you choose. Without them, “what should I apply for?” has no good answer.', 'Nilai, energi, dan kekuatanmu adalah saringan bagi setiap target yang kamu pilih. Tanpanya, “aku harus melamar apa?” tak punya jawaban yang baik.'),
      steps: [P('Rank your values and map what gives and drains energy', 'Urutkan nilai-nilaimu dan petakan apa yang memberi dan menguras energi'), P('Name two strengths with evidence', 'Sebut dua kekuatan beserta buktinya'), P('Write a one-line mission', 'Tulis misi satu kalimat')],
      cta: { label: P('Open the Personal Audit', 'Buka Audit Pribadi'), href: '/products/the-map/?tool=audit' }, src: P('Discovery', 'Penjelajahan') });
    if (s.needDebrief.length) { var nd = s.needDebrief[0]; push({ id: 'debrief-' + nd.id, w: 57, icon: 'pen', cat: P('Debrief', 'Debrief'), mins: 10,
      title: P('Debrief your interviews at ' + nd.company, 'Debrief wawancaramu di ' + nd.company),
      why: P('The route has reached the ' + stE(nd.stage) + ' stage with no debrief logged. Memory of an interview fades within days — five minutes now is the raw material of the next round.', 'Rute ini sudah sampai tahap ' + stI(nd.stage) + ' tanpa debrief tercatat. Ingatan tentang wawancara memudar dalam hitungan hari — lima menit sekarang adalah bahan baku babak berikutnya.'),
      steps: [P('Note the questions that surprised you', 'Catat pertanyaan yang mengejutkanmu'), P('Write the better answer you would give now', 'Tulis jawaban yang lebih baik yang akan kamu berikan sekarang'), P('Name one lesson for the next round', 'Sebut satu pelajaran untuk babak berikutnya')],
      cta: { label: P('Open the route', 'Buka rute'), app: nd.id }, src: P('Course Plotter', 'Perencana Rute') }); }
    if (s.rejNoDebrief.length) push({ id: 'rejdebrief', w: 56, icon: 'refresh', cat: P('Learning from setbacks', 'Belajar dari kemunduran'), mins: 15,
      title: P('Debrief ' + s.rejNoDebrief.length + (s.rejNoDebrief.length === 1 ? ' closed route' : ' closed routes'), 'Debrief ' + s.rejNoDebrief.length + ' rute yang ditutup'),
      why: P('A rejection you have not analysed is a lesson you pay for twice. Two questions per route: where did it stop, and what will you change?', 'Penolakan yang belum kamu analisis adalah pelajaran yang kamu bayar dua kali. Dua pertanyaan per rute: di mana berhentinya, dan apa yang akan kamu ubah?'),
      steps: [P('Open each closed route', 'Buka setiap rute yang ditutup'), P('Record the stage reached and what you will do differently', 'Catat tahap yang dicapai dan apa yang akan kamu lakukan berbeda')],
      cta: { label: P('Open the Course Plotter', 'Buka Perencana Rute'), tab: 'course-plotter' }, src: P('Course Plotter', 'Perencana Rute') });
    if (s.stale.length) push({ id: 'stale', w: 54, icon: 'send', cat: P('Pipeline', 'Alur'), mins: 20,
      title: P('Follow up on ' + s.stale.length + (s.stale.length === 1 ? ' quiet route' : ' quiet routes'), 'Tindak lanjuti ' + s.stale.length + ' rute yang sepi'),
      why: P('Some routes have had no update for more than two weeks. One polite follow-up, 7–10 days after silence, is normal practice — then update the status either way.', 'Beberapa rute tak diperbarui lebih dari dua minggu. Satu tindak lanjut sopan, 7–10 hari setelah hening, adalah praktik yang wajar — lalu perbarui statusnya apa pun hasilnya.'),
      steps: [P('Send one short follow-up per route', 'Kirim satu tindak lanjut singkat per rute'), P('Update or close the route', 'Perbarui atau tutup rutenya')],
      cta: { label: P('Open the Course Plotter', 'Buka Perencana Rute'), tab: 'course-plotter' }, src: P('Course Plotter', 'Perencana Rute') });
    if (!s.habits.length) push({ id: 'habit-first', w: 50, icon: 'refresh', cat: P('Habits', 'Kebiasaan'), mins: 2,
      title: P('Add one keystone habit: the Sunday review', 'Tambahkan satu kebiasaan kunci: tinjauan hari Minggu'),
      why: P('Plans move when there is a fixed time to move them. A 15-minute weekly review is the smallest habit that keeps every other section current.', 'Rencana bergerak jika ada waktu tetap untuk menggerakkannya. Tinjauan mingguan 15 menit adalah kebiasaan terkecil yang menjaga semua bagian lain tetap mutakhir.'),
      steps: [P('Add the habit — reminder Sunday 18:00', 'Tambahkan kebiasaannya — pengingat Minggu 18:00'), P('On Sunday: plan, routes, habits, three priorities', 'Pada hari Minggu: rencana, rute, kebiasaan, tiga prioritas')],
      cta: { label: P('Add the Sunday review', 'Tambahkan tinjauan Minggu'), run: 'habit:review' }, src: P('Habits & Reminders', 'Kebiasaan & Pengingat') });
    else if (s.hab7.pct != null && s.hab7.due >= 3 && s.hab7.pct < 50) push({ id: 'habit-rescue', w: 58, icon: 'refresh', cat: P('Habits', 'Kebiasaan'), mins: 5,
      title: P('Rescue your habits this week', 'Selamatkan kebiasaanmu minggu ini'),
      why: P('You kept ' + s.hab7.pct + '% of scheduled habits in the last 7 days. When a routine slips, shrink it rather than drop it — keep the one or two habits that matter most.', 'Kamu menjaga ' + s.hab7.pct + '% kebiasaan terjadwal dalam 7 hari terakhir. Saat rutinitas tergelincir, kecilkan, jangan tinggalkan — pertahankan satu atau dua kebiasaan yang paling penting.'),
      steps: [P('Tick off today’s habits', 'Centang kebiasaan hari ini'), P('Remove or reschedule the one you keep missing', 'Hapus atau jadwalkan ulang yang terus terlewat')],
      cta: { label: P('Open Habits', 'Buka Kebiasaan'), tab: 'habits' }, src: P('Habits & Reminders', 'Kebiasaan & Pengingat') });
    if (!s.goals.length) push({ id: 'goal-first', w: 55, icon: 'flag', cat: P('Plan', 'Rencana'), mins: 10,
      title: P('Turn your destination into a dated goal', 'Ubah tujuanmu menjadi sasaran bertanggal'),
      why: P('The Development Plan is where a destination becomes milestones the Navigator can track. Without one, “am I on course?” cannot be measured.', 'Rencana Pengembangan adalah tempat tujuan menjadi tonggak yang bisa dilacak Navigator. Tanpanya, “apakah aku di jalur?” tak bisa diukur.'),
      steps: [P('Add a goal with a why and a date', 'Tambahkan tujuan dengan alasan dan tanggal'), P('Break it into three to five milestones', 'Pecah menjadi tiga sampai lima tonggak')],
      cta: { label: P('Open the plan', 'Buka rencana'), tab: 'plan' }, src: P('Development Plan', 'Rencana Pengembangan') });
    else if (s.goalsNoMs.length) push({ id: 'goal-ms-' + s.goalsNoMs[0].id, w: 42, icon: 'list', cat: P('Plan', 'Rencana'), mins: 10,
      title: P('Break ' + q(clip(s.goalsNoMs[0].title, 50)) + ' into milestones', 'Pecah ' + q(clip(s.goalsNoMs[0].title, 50)) + ' menjadi tonggak'),
      why: P('A goal without milestones cannot show progress, so it quietly stalls. Three to five checkpoints make it measurable.', 'Tujuan tanpa tonggak tak bisa menunjukkan kemajuan, sehingga diam-diam macet. Tiga sampai lima titik periksa membuatnya terukur.'),
      steps: [P('Add three to five milestones', 'Tambahkan tiga sampai lima tonggak')], cta: { label: P('Open the plan', 'Buka rencana'), tab: 'plan' }, src: P('Development Plan', 'Rencana Pengembangan') });
    if (s.phase === 'grow') {
      if (!s.rp.goal) push({ id: 'rp-plan', w: 58, icon: 'calendar', cat: P('The Route', 'The Route'), mins: 30,
        title: P('Write a 90-day plan', 'Tulis rencana 90 hari'),
        why: P('In role, progress comes in quarters. One goal and three 30-day phases turn “growing” into something your manager can see.', 'Di dalam peran, kemajuan datang per kuartal. Satu tujuan dan tiga fase 30 hari mengubah “bertumbuh” menjadi sesuatu yang bisa dilihat manajermu.'),
        steps: [P('Name one goal for the quarter', 'Sebut satu tujuan untuk kuartal ini'), P('Split it into three 30-day phases', 'Bagi menjadi tiga fase 30 hari')],
        cta: { label: P('Open the 90-Day Plan', 'Buka Rencana 90 Hari'), href: '/products/the-route/?tool=plan&mode=plan' }, src: P('Resources', 'Sumber Daya') });
      else if (s.rp.day > 90) push({ id: 'rp-review', w: 56, icon: 'refresh', cat: P('The Route', 'The Route'), mins: 20,
        title: P('Review and renew your 90-day plan', 'Tinjau dan perbarui rencana 90 harimu'),
        why: P('Your plan started ' + s.rp.day + ' days ago. A finished quarter needs a review — what moved, what did not — before the next one starts.', 'Rencanamu dimulai ' + s.rp.day + ' hari lalu. Kuartal yang selesai butuh tinjauan — apa yang bergerak, apa yang tidak — sebelum kuartal berikutnya dimulai.'),
        steps: [P('Score the goal honestly', 'Nilai tujuannya dengan jujur'), P('Set the next quarter’s goal', 'Tetapkan tujuan kuartal berikutnya')],
        cta: { label: P('Open the 90-Day Plan', 'Buka Rencana 90 Hari'), href: '/products/the-route/?tool=plan&mode=plan' }, src: P('Resources', 'Sumber Daya') });
      if (!s.rp.lastWin || ageDays(s.rp.lastWin) > 30) push({ id: 'rp-win', w: 52, icon: 'trophy', cat: P('Evidence', 'Bukti'), mins: 10,
        title: P('Log this month’s win', 'Catat kemenangan bulan ini'),
        why: P('Reviews, promotion cases and CVs are built from dated evidence. A win you did not write down this month is a win you cannot prove next year.', 'Tinjauan kinerja, kasus promosi, dan CV dibangun dari bukti bertanggal. Kemenangan yang tidak kamu catat bulan ini adalah kemenangan yang tak bisa kamu buktikan tahun depan.'),
        steps: [P('What you delivered, its number, who can verify it', 'Apa yang kamu tunaikan, angkanya, siapa yang bisa memverifikasi')],
        cta: { label: P('Open the Win Log', 'Buka Catatan Kemenangan'), href: '/products/the-route/?tool=plan&mode=wins' }, src: P('Resources', 'Sumber Daya') });
    }
    var lowest = DIMS.slice().sort(function (a, b) { return s.sc[a[0]] - s.sc[b[0]]; })[0];
    if (lowest[0] === 'networkCapital' && !s.habits.some(function (h) { return h.key === 'reach'; })) push({ id: 'reach', w: 40, icon: 'users', cat: P('Network', 'Jaringan'), mins: 15,
      title: P('Reach out to one person each week', 'Hubungi satu orang setiap minggu'),
      why: P('Network Capital is your lowest Compass Point (' + s.sc.networkCapital + '/100). Opportunities and referrals travel through people; one specific message a week compounds.', 'Modal Jaringan adalah Titik Kompas terendahmu (' + s.sc.networkCapital + '/100). Peluang dan referensi mengalir lewat orang; satu pesan spesifik per minggu akan berlipat.'),
      steps: [P('Add the habit — Tuesday and Thursday', 'Tambahkan kebiasaannya — Selasa dan Kamis'), P('One specific question, to one person whose path you respect', 'Satu pertanyaan spesifik, kepada satu orang yang jalannya kamu hormati')],
      cta: { label: P('Add the habit', 'Tambahkan kebiasaan'), run: 'habit:reach' }, src: P('Bearing', 'Bearing') });
    if (s.journalAge == null || s.journalAge > 14) push({ id: 'journal', w: 30, icon: 'pen', cat: P('Reflection', 'Refleksi'), mins: 10,
      title: P('Answer this week’s reflection prompt', 'Jawab pertanyaan refleksi pekan ini'),
      why: P('Ten minutes of reflection turns activity into learning — and gives you the words you will need in interviews and reviews.', 'Sepuluh menit refleksi mengubah aktivitas menjadi pembelajaran — dan memberimu kata-kata yang kamu perlukan saat wawancara dan tinjauan kinerja.'),
      steps: [P('Open Discovery and answer the prompt', 'Buka Penjelajahan dan jawab pertanyaannya')], cta: { label: P('Open Discovery', 'Buka Penjelajahan'), tab: 'discovery' }, src: P('Discovery', 'Penjelajahan') });
    A.sort(function (a, b) { return b.w - a.w; });
    return A;
  }
  function rankTag(w) {
    return w >= 90 ? P('Time-critical', 'Mendesak') : w >= 70 ? P('Unblocks progress', 'Membuka jalan') : w >= 50 ? P('Builds momentum', 'Membangun momentum') : P('Keeps you on course', 'Menjaga arah');
  }

  /* ─── gaps ─── */
  function gaps(s) {
    var G = [];
    var EV = {
      careerIntelligence: [P('The Map ' + s.sc.aladinDone + '/6 modules', 'The Map ' + s.sc.aladinDone + '/6 modul'), P('Finish the next Map module and the Personal Audit.', 'Selesaikan modul The Map berikutnya dan Audit Pribadi.')],
      profileStrength: [P('The Pack ' + s.sc.mavDone + '/9 modules · ATS Check ' + (s.ck.ats ? 'done' : 'not done'), 'The Pack ' + s.sc.mavDone + '/9 modul · ATS Check ' + (s.ck.ats ? 'selesai' : 'belum')), P('Rebuild the CV (Pack Modules 3–4) and run one ATS Check.', 'Bangun ulang CV (Pack Modul 3–4) dan jalankan satu ATS Check.')],
      interviewReadiness: [P('The Rope ' + s.sc.nexusDone + '/11 modules · ' + s.sc.debriefsAll + ' interview debriefs', 'The Rope ' + s.sc.nexusDone + '/11 modul · ' + s.sc.debriefsAll + ' debrief wawancara'), P('Build the story bank and debrief every real interview.', 'Bangun bank cerita dan debrief setiap wawancara sungguhan.')],
      networkCapital: [P('Self-reported on the Navigation Briefing', 'Dilaporkan sendiri di Pengarahan Navigasi'), P('One outreach message a week; ask a peer to form a practice pod.', 'Satu pesan perkenalan per minggu; ajak rekan membentuk pod latihan.')],
      careerMindset: [P(s.sc.recentCount + ' routes in 30 days · ' + s.sc.rejectionDebriefs + ' setback debriefs', s.sc.recentCount + ' rute dalam 30 hari · ' + s.sc.rejectionDebriefs + ' debrief kemunduran'), P('A fixed weekly block for applications, and a debrief for every closed route.', 'Blok mingguan tetap untuk melamar, dan debrief untuk setiap rute yang ditutup.')]
    };
    DIMS.forEach(function (d) { var v = s.sc[d[0]]; if (v < 40) G.push({ sev: v < 25 ? 2 : 1, icon: 'chart', title: P(d[1].en + ' is ' + v + '/100', d[1].id + ' di ' + v + '/100'), ev: EV[d[0]][0], fix: EV[d[0]][1], go: { tab: 'bearing' } }); });
    var REL = { prepare: ['targets', 'linkedin'], apply: ['ats', 'linkedin', 'targets', 'routes', 'followup'], assess: ['mock', 'ats'], interview: ['stories', 'mock', 'refs'], decide: ['refs'], grow: [] }[s.phase] || [];
    (s.d.CHECKLIST || []).forEach(function (c) { if (REL.indexOf(c.key) > -1 && !s.ck[c.key]) G.push({ sev: REL.indexOf(c.key) === 0 ? 2 : 1, icon: 'checkSq', title: c.text, ev: P('Not yet ticked in Resources', 'Belum dicentang di Sumber Daya'), fix: P('Relevant to the ' + PHASES[s.phase].name.en + ' phase.', 'Relevan untuk fase ' + PHASES[s.phase].name.id + '.'), go: c.href ? { href: c.href } : { tab: c.tab || 'resources' } }); });
    if (!C.isDemoMode && !s.audit && (s.phase === 'prepare' || s.phase === 'apply')) G.push({ sev: 1, icon: 'heart', title: P('No Personal Audit on file', 'Belum ada Audit Pribadi'), ev: P('Discovery has no values or strengths yet', 'Penjelajahan belum berisi nilai atau kekuatan'), fix: P('Forty minutes in The Map gives every target a filter.', 'Empat puluh menit di The Map memberi setiap target sebuah saringan.'), go: { href: '/products/the-map/?tool=audit' } });
    if (!s.prof.target) G.push({ sev: 2, icon: 'flag', title: P('No destination set', 'Belum ada tujuan'), ev: P('The Navigator cannot weigh actions against a goal', 'Navigator tak bisa menimbang tindakan terhadap tujuan'), fix: P('Set it at the top of this page.', 'Tetapkan di bagian atas halaman ini.'), go: { run: 'editDest' } });
    if (s.goals.length && !s.goals.some(function (g) { return g.due; })) G.push({ sev: 1, icon: 'calendar', title: P('No goal has a deadline', 'Tak ada tujuan yang bertenggat'), ev: P(s.goals.length + ' open goals, none dated', s.goals.length + ' tujuan terbuka, tanpa tanggal'), fix: P('Date the most important one.', 'Beri tanggal pada yang paling penting.'), go: { tab: 'plan' } });
    G.sort(function (a, b) { return b.sev - a.sev; });
    return G.slice(0, 6);
  }

  /* ─── recommendations: learning · resources · habits ─── */
  var RES = {
    prepare: [0, 1, 5, 10], apply: [3, 5, 1, 4], assess: [2, 3, 10], interview: ['rope', 5, 10], decide: ['rope', 9, 10], grow: [6, 7, 8, 9]
  };
  var HAB = { prepare: ['module', 'journal', 'review'], apply: ['apply', 'review', 'reach'], assess: ['module', 'sleep', 'review'], interview: ['module', 'sleep', 'reach'], decide: ['review', 'journal', 'sleep'], grow: ['winlog', 'review', 'reach'] };
  function recResources(s) {
    var T0 = s.d.TOOLS || [];
    return (RES[s.phase] || []).map(function (k) {
      if (k === 'rope') return { icon: 'interview', name: P('The Rope · Simulation Lab', 'The Rope · Lab Simulasi'), prod: 'The Rope', href: '/products/the-rope/?context=compass', sub: P('Full interview rehearsals with a debrief — Module 9', 'Gladi wawancara penuh dengan debrief — Modul 9') };
      return T0[k];
    }).filter(Boolean);
  }
  function recHabits(s) {
    var keys = (HAB[s.phase] || []).slice();
    if (s.status !== 'on' && keys.indexOf('review') > 0) { keys.splice(keys.indexOf('review'), 1); keys.unshift('review'); }
    else if (s.status !== 'on' && keys.indexOf('review') < 0) keys.unshift('review');
    return keys.slice(0, 3).map(function (k) { return (s.d.SUGGESTED || []).filter(function (x) { return x.key === k; })[0]; }).filter(Boolean);
  }

  /* ─── waypoints ahead ─── */
  function upcoming(s) {
    var W = [];
    s.live.forEach(function (a) { if (a.nextActionDue && daysUntil(a.nextActionDue) <= 21) W.push({ d: a.nextActionDue, icon: a.stage >= 7 ? 'interview' : 'send', title: a.company + ' — ' + C.stageName(a.stage), sub: a.nextAction || '', go: { app: a.id } }); });
    s.goals.forEach(function (g) { if (g.due && daysUntil(g.due) <= 30) W.push({ d: g.due, icon: 'flag', title: g.title, sub: T(s.gp(g) + '% of milestones done', s.gp(g) + '% tonggak selesai'), go: { tab: 'plan' } }); });
    if (s.rp.started) [30, 60, 90].forEach(function (k) { var dd = iso(s.rp.started + k * DAY); var n = daysUntil(dd); if (n >= 0 && n <= 30) W.push({ d: dd, icon: 'calendar', title: T('90-day plan — day ' + k + ' checkpoint', 'Rencana 90 hari — titik periksa hari ke-' + k), sub: s.rp.goal || '', go: { href: '/products/the-route/?tool=plan&mode=plan' } }); });
    if (s.prof.by && daysUntil(s.prof.by) >= 0 && daysUntil(s.prof.by) <= 90) W.push({ d: s.prof.by, icon: 'target', title: T('Destination date', 'Tanggal tujuan'), sub: s.prof.target || '', go: { run: 'editDest' } });
    if (s.habits.some(function (h) { return h.key === 'review'; })) { var sun = new Date(); sun.setDate(sun.getDate() + ((7 - sun.getDay()) % 7)); W.push({ d: iso(sun.getTime()), icon: 'refresh', title: T('Sunday weekly review', 'Tinjauan mingguan hari Minggu'), sub: T('Plan, routes, habits, three priorities', 'Rencana, rute, kebiasaan, tiga prioritas'), go: { tab: 'habits' } }); }
    W.sort(function (a, b) { return String(a.d).localeCompare(String(b.d)); });
    return W.slice(0, 8);
  }

  /* ─── progress milestones ─── */
  function milestonesAhead(s) {
    var M = [];
    if (s.lv.next) M.push({ icon: 'mountain', title: P((s.lv.next - s.sc.overall) + ' points to ' + s.lv.nextEn, (s.lv.next - s.sc.overall) + ' poin menuju ' + s.lv.nextId), pct: Math.round((s.sc.overall - s.lv.min) / (s.lv.next - s.lv.min) * 100), sub: P('Career Bearing ' + s.sc.overall + '/100', 'Career Bearing ' + s.sc.overall + '/100') });
    var near = s.prog.filter(function (x) { return x.done > 0 && x.done < x.p.total; }).sort(function (a, b) { return (b.done / b.p.total) - (a.done / a.p.total); })[0];
    if (near) { var left = near.p.total - near.done; M.push({ icon: 'book', title: P(left + (left === 1 ? ' module' : ' modules') + ' to finish ' + near.p.nameEn, left + ' modul lagi untuk menuntaskan ' + near.p.nameEn), pct: Math.round(near.done / near.p.total * 100), sub: P(near.done + '/' + near.p.total + ' complete', near.done + '/' + near.p.total + ' selesai') }); }
    if (s.ms.all) M.push({ icon: 'flag', title: P((s.ms.all - s.ms.done) + ' plan milestones open', (s.ms.all - s.ms.done) + ' tonggak rencana terbuka'), pct: Math.round(s.ms.done / s.ms.all * 100), sub: P(s.ms.done + ' of ' + s.ms.all + ' ticked', s.ms.done + ' dari ' + s.ms.all + ' dicentang') });
    var pref = { prepare: ['The Map', 'The Pack'], apply: ['Plotter', 'The Pack'], assess: ['The Pack', 'Plotter'], interview: ['Plotter', 'The Rope'], decide: ['Plotter', 'The Rope'], grow: ['The Route', 'Mindset'] }[s.phase];
    var ub = C.unearnedBadges().slice().sort(function (a, b) { var ia = pref.indexOf(a.cat), ib = pref.indexOf(b.cat); return (ia < 0 ? 9 : ia) - (ib < 0 ? 9 : ib); });
    ub.slice(0, 2).forEach(function (b) { M.push({ icon: 'star', emoji: b.icon, title: P(T('Badge: ', 'Lencana: ') + b.en, 'Lencana: ' + b.idn), sub: P(b.cEn, b.cId) }); });
    return M;
  }

  /* ─── personal insights ─── */
  function insights(s) {
    var I = [];
    if (s.debriefs.length && s.debriefs[0].x.keyLearning) { var db = s.debriefs[0]; I.push({ icon: 'bulb', text: P('After your ' + C.STAGES[(db.x.stage || db.a.stage) - 1].en + ' at ' + db.a.company + ' you wrote: ' + q(db.x.keyLearning) + ' Make that the first thing you rehearse before the next interview.', 'Setelah ' + C.STAGES[(db.x.stage || db.a.stage) - 1].idn + ' di ' + db.a.company + ' kamu menulis: ' + q(db.x.keyLearning) + ' Jadikan itu hal pertama yang kamu latih sebelum wawancara berikutnya.') }); }
    var rd = s.rejected.filter(function (a) { return a.rejectionDebrief && a.rejectionDebrief.doingDifferently; }).sort(function (a, b) { return String(b.updatedAt || b.applicationDate).localeCompare(String(a.updatedAt || a.applicationDate)); })[0];
    if (rd) I.push({ icon: 'refresh', text: P('From your ' + rd.company + ' debrief: ' + q(rd.rejectionDebrief.doingDifferently) + ' Check your next application against it before you send.', 'Dari debrief ' + rd.company + ': ' + q(rd.rejectionDebrief.doingDifferently) + ' Periksa lamaran berikutnya terhadap catatan itu sebelum mengirim.') });
    if (s.rejected.length >= 2) {
      var byG = {}; s.rejected.forEach(function (a) { var g = C.groupOf((a.rejectionDebrief && a.rejectionDebrief.stageReached) || a.stage); byG[g] = (byG[g] || 0) + 1; });
      var top = Object.keys(byG).sort(function (a, b) { return byG[b] - byG[a]; })[0];
      if (byG[top] >= 2) I.push({ icon: 'filter', text: P('Most of your closed routes (' + byG[top] + ' of ' + s.rejected.length + ') stopped at the ' + GROUP_NAMES[top].en + ' stage. That is where extra preparation pays back most.', 'Sebagian besar rute yang ditutup (' + byG[top] + ' dari ' + s.rejected.length + ') berhenti di tahap ' + GROUP_NAMES[top].id + '. Di situlah persiapan ekstra paling terbayar.') });
    }
    var byT = {}; s.apps.forEach(function (a) { var t = a.companyType || 'multinational'; byT[t] = byT[t] || [0, 0]; byT[t][0]++; if (a.stage >= 7) byT[t][1]++; });
    var types = Object.keys(byT).filter(function (t) { return byT[t][0] >= 2; });
    if (types.length >= 2) { types.sort(function (a, b) { return byT[b][1] / byT[b][0] - byT[a][1] / byT[a][0]; }); var bt = types[0], pc = Math.round(byT[bt][1] / byT[bt][0] * 100); if (pc > 0) I.push({ icon: 'chart', text: P('Your routes reach interview most often at ' + (CO_TYPES[bt] || P(bt, bt)).en + ' organisations (' + pc + '%, ' + byT[bt][1] + ' of ' + byT[bt][0] + '). Weight your next targets that way — or find out why the others stall.', 'Rutemu paling sering sampai wawancara di organisasi ' + (CO_TYPES[bt] || P(bt, bt)).id + ' (' + pc + '%, ' + byT[bt][1] + ' dari ' + byT[bt][0] + '). Beri bobot target berikutnya ke sana — atau cari tahu mengapa yang lain macet.') }); }
    if (s.weakDay) I.push({ icon: 'calendar', text: P('Your habits slip most on ' + WEEKDAYS.en[s.weakDay.day] + 's (kept ' + Math.round(s.weakDay.r * 100) + '% over four weeks). Move one reminder, or give that day a lighter version.', 'Kebiasaanmu paling sering tergelincir di hari ' + WEEKDAYS.id[s.weakDay.day] + ' (terjaga ' + Math.round(s.weakDay.r * 100) + '% selama empat minggu). Pindahkan satu pengingat, atau beri hari itu versi yang lebih ringan.') });
    var cp = criticalPath(s)[0];
    if (cp && s.prof.by && daysUntil(s.prof.by) > 0) {
      var left = cp.p.total - done(cp.p.key), fin = iso(Date.now() + left * 7 * DAY), before = fin <= s.prof.by;
      I.push({ icon: 'hourglass', text: P('At one module a week you would finish ' + cp.p.nameEn + ' around ' + fmt(fin) + ' — ' + (before ? 'before' : 'after') + ' your destination date of ' + fmt(s.prof.by) + '.' + (before ? '' : ' Prioritise the modules on the critical path below.'), 'Dengan satu modul per minggu kamu akan menuntaskan ' + cp.p.nameEn + ' sekitar ' + fmt(fin) + ' — ' + (before ? 'sebelum' : 'sesudah') + ' tanggal tujuanmu ' + fmt(s.prof.by) + '.' + (before ? '' : ' Dahulukan modul di jalur kritis di bawah.')) });
    }
    if (s.audit && s.audit.values && s.audit.values[0]) I.push({ icon: 'heart', text: P('Your Personal Audit ranks ' + q(s.audit.values[0]) + ' first. When two options look similar, choose the one that serves it.', 'Audit Pribadimu menempatkan ' + q(s.audit.values[0]) + ' di urutan pertama. Saat dua pilihan tampak serupa, pilih yang melayaninya.') });
    if (s.audit && s.audit.drains && s.audit.drains[0] && (s.phase === 'interview' || s.phase === 'assess')) I.push({ icon: 'battery', text: P('Your audit lists ' + q(s.audit.drains[0]) + ' as draining. If the stage ahead involves it, plan recovery time around it rather than hoping it will not.', 'Auditmu mencatat ' + q(s.audit.drains[0]) + ' sebagai hal yang menguras. Jika tahap berikutnya melibatkannya, rencanakan waktu pemulihan di sekitarnya.') });
    return I.slice(0, 5);
  }

  /* ─── briefing: the eight questions ─── */
  function briefing(s, A, G) {
    var stg = optLabel(STAGE_OPTS, s.prof.stage, 2);
    var ph = PHASES[s.phase].label;
    var iv = s.live.filter(function (a) { return a.stage >= 7 && a.stage <= 11; }).length;
    var live = s.live.length
      ? P(s.live.length + ' live ' + (s.live.length === 1 ? 'route' : 'routes') + (iv ? ', ' + iv + ' in interviews' : '') + (s.offers.length ? ', ' + s.offers.length + (s.offers.length === 1 ? ' offer' : ' offers') + ' on the table' : '') + '.', s.live.length + ' rute aktif' + (iv ? ', ' + iv + ' di tahap wawancara' : '') + (s.offers.length ? ', ' + s.offers.length + ' tawaran di tangan' : '') + '.')
      : P('No live routes yet.', 'Belum ada rute aktif.');
    var where = P((stg ? 'You are ' + stg.en + ' in the ' : 'You are in the ') + PHASES[s.phase].name.en + ' phase. ' + live.en + ' Career Bearing ' + s.sc.overall + '/100 (' + s.lv.en + ').',
      (stg ? 'Kamu ' + stg.id + ' di fase ' : 'Kamu berada di fase ') + PHASES[s.phase].name.id + '. ' + live.id + ' Career Bearing ' + s.sc.overall + '/100 (' + s.lv.idn + ').');
    var dn = s.prof.by ? daysUntil(s.prof.by) : null;
    var go = s.prof.target
      ? P(q(s.prof.target) + (s.prof.by ? (dn >= 0 ? ' by ' + fmt(s.prof.by) + ' — ' + dn + ' days away.' : ' — the date (' + fmt(s.prof.by) + ') has passed.') : ' — no date set yet.'),
          q(s.prof.target) + (s.prof.by ? (dn >= 0 ? ' pada ' + fmt(s.prof.by) + ' — ' + dn + ' hari lagi.' : ' — tanggalnya (' + fmt(s.prof.by) + ') sudah lewat.') : ' — belum ada tanggal.'))
      : P('Not set yet. Set your destination below so every recommendation is weighed against it.', 'Belum ditetapkan. Tetapkan tujuanmu di bawah agar setiap rekomendasi ditimbang terhadapnya.');
    var focus = P(PHASES[s.phase].focus.en + (G[0] ? ' Biggest gap: ' + tx(G[0].title).replace(/\.$/, '') + '.' : ''), PHASES[s.phase].focus.id + (G[0] ? ' Celah terbesar: ' + (G[0].title.id || G[0].title.en).replace(/\.$/, '') + '.' : ''));
    var nx = A[0];
    var first = A.slice(0, 3).map(function (a, i) { return (i + 1) + '. ' + tx(a.title); }).join('  ');
    var h = s.history, d0 = h.length > 1 ? h[0] : null, delta = d0 ? s.sc.overall - d0.o : 0;
    var prog = P(
      (s.trend === 'up' ? 'Yes — your logged activity is up (' + s.trendNums[0] + ' actions in the last two weeks vs ' + s.trendNums[1] + ' before).' : s.trend === 'down' ? 'Slowing — ' + s.trendNums[0] + ' logged actions in the last two weeks vs ' + s.trendNums[1] + ' before.' : s.trend === 'steady' ? 'Steadily — ' + s.trendNums[0] + ' logged actions in the last two weeks, similar to before.' : 'Too early to tell — log a few actions and this will show a trend.') +
      (d0 && delta ? ' Career Bearing ' + (delta > 0 ? '+' : '') + delta + ' since ' + fmt(d0.d) + '.' : ''),
      (s.trend === 'up' ? 'Ya — aktivitas yang kamu catat meningkat (' + s.trendNums[0] + ' tindakan dalam dua minggu terakhir vs ' + s.trendNums[1] + ' sebelumnya).' : s.trend === 'down' ? 'Melambat — ' + s.trendNums[0] + ' tindakan tercatat dalam dua minggu terakhir vs ' + s.trendNums[1] + ' sebelumnya.' : s.trend === 'steady' ? 'Stabil — ' + s.trendNums[0] + ' tindakan tercatat dalam dua minggu terakhir, serupa dengan sebelumnya.' : 'Terlalu dini — catat beberapa tindakan dan tren akan muncul di sini.') +
      (d0 && delta ? ' Career Bearing ' + (delta > 0 ? '+' : '') + delta + ' sejak ' + fmt(d0.d) + '.' : ''));
    var fall = s.status === 'on'
      ? P('You are on course. If you slip, use the four-step recalibration below: triage, shrink, one small win, re-plan on Sunday.', 'Kamu di jalur. Jika tergelincir, pakai empat langkah kalibrasi ulang di bawah: pilah, kecilkan, satu kemenangan kecil, rencanakan ulang hari Minggu.')
      : P('You are ' + (s.status === 'off' ? 'off course' : 'drifting') + ': ' + s.behind.join('; ').toLowerCase() + '. Start with the recalibration plan below — it takes about 20 minutes.', 'Kamu ' + (s.status === 'off' ? 'keluar jalur' : 'mulai bergeser') + ': ' + s.behindId.join('; ').toLowerCase() + '. Mulai dengan rencana kalibrasi ulang di bawah — sekitar 20 menit.');
    return [
      { q: P('Where am I now?', 'Di mana aku sekarang?'), a: where, to: 'nvProgress', icon: 'compass' },
      { q: P('Where am I trying to go?', 'Ke mana aku menuju?'), a: go, to: 'nvDest', icon: 'flag' },
      { q: P('What should I focus on next?', 'Apa fokusku berikutnya?'), a: focus, to: 'nvGaps', icon: 'target' },
      { q: P('Why does this matter?', 'Mengapa ini penting?'), a: nx ? nx.why : P('Nothing urgent — keep your rhythm.', 'Tak ada yang mendesak — jaga ritmemu.'), to: 'nvNext', icon: 'bulb' },
      { q: P('What should I do?', 'Apa yang harus kulakukan?'), a: nx ? P(nx.title.en + ' — about ' + nx.mins + ' minutes.', nx.title.id + ' — sekitar ' + nx.mins + ' menit.') : P('Keep going.', 'Lanjutkan.'), to: 'nvNext', icon: 'arrow' },
      { q: P('What should I complete first?', 'Apa yang harus kuselesaikan dulu?'), a: P(first, first), to: 'nvPri', icon: 'list' },
      { q: P('Am I making progress?', 'Apakah aku mengalami kemajuan?'), a: prog, to: 'nvProgress', icon: 'trendUp' },
      { q: P('What if I fall behind?', 'Bagaimana jika aku tertinggal?'), a: fall, to: 'nvRecal', icon: 'refresh' }
    ];
  }

  /* ═══ view ═══ */
  var editing = false;
  function act(go, host) {
    if (!go) return;
    if (go.href) { location.href = go.href; return; }
    if (go.app) { C.openApp(go.app); return; }
    if (go.add) { C.addApp(); return; }
    if (go.tab) { C.activateTab(go.tab); return; }
    if (go.run === 'editDest') { editing = true; render(host); var d = document.getElementById('nvDest'); if (d) d.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    if (go.run && go.run.indexOf('habit:') === 0) { if (tools()) tools().addSuggestedHabit(go.run.slice(6)); render(host); return; }
  }
  function sec(id, kick, title, sub) {
    var w = el('section', 'nv-sec'); w.id = id;
    var h = el('div', 'nv-sec-h'); h.appendChild(el('span', 'nv-kick', esc(tx(kick)))); h.appendChild(el('h3', null, esc(tx(title)))); if (sub) h.appendChild(el('p', null, esc(tx(sub)))); w.appendChild(h);
    return w;
  }
  function statusPill(s) {
    var L2 = { on: P('On course', 'Di jalur'), drift: P('Drifting', 'Mulai bergeser'), off: P('Off course', 'Keluar jalur') };
    return el('span', 'nv-status ' + s.status, '<i></i>' + esc(tx(L2[s.status])));
  }
  function ctaBtn(a, host, ghost) {
    return SH.btn(a.cta.label, { ghost: !!ghost, sm: !!ghost, icon: 'arrow', onClick: function () { act(a.cta, host); } });
  }

  function destCard(s, host) {
    var w = sec('nvDest', P('Destination', 'Tujuan'), P('Where you are going', 'Ke mana kamu menuju'));
    var c = el('div', 'glass-card nv-dest');
    var p = s.prof;
    if (!editing && p.target) {
      var row = el('div', 'nv-dest-row');
      [[P('Stage', 'Tahap'), optLabel(STAGE_OPTS, p.stage) || P('Not set', 'Belum diisi')], [P('Objective', 'Sasaran'), optLabel(OBJ_OPTS, p.objective) || P('Not set', 'Belum diisi')], [P('Destination', 'Tujuan'), P(p.target, p.target)], [P('By', 'Pada'), P(p.by ? fmt(p.by) + ' · ' + (daysUntil(p.by) >= 0 ? daysUntil(p.by) + ' days' : 'passed') : 'No date', p.by ? fmt(p.by) + ' · ' + (daysUntil(p.by) >= 0 ? daysUntil(p.by) + ' hari' : 'lewat') : 'Tanpa tanggal')], [P('Weekly time', 'Waktu per minggu'), P((p.hours || 0) + ' h', (p.hours || 0) + ' jam')]].forEach(function (x) {
        row.appendChild(el('div', 'nv-dest-f', '<small>' + esc(tx(x[0])) + '</small><b>' + esc(tx(x[1])) + '</b>'));
      });
      c.appendChild(row);
      var ed = SH.btn({ en: 'Edit', id: 'Ubah' }, { ghost: true, sm: true, iconL: 'edit', onClick: function () { editing = true; render(host); } }); ed.classList.add('nv-dest-edit');
      c.appendChild(ed);
      if (!p.saved) c.appendChild(el('p', 'nv-fine', esc(T('Suggested from your Personal Audit or Route plan — press Edit to confirm it.', 'Disarankan dari Audit Pribadi atau rencana Route-mu — tekan Ubah untuk mengonfirmasi.'))));
    } else {
      c.appendChild(el('p', 'nv-lead', esc(T('Tell the Navigator where you are going. Everything on this page is weighed against it.', 'Beri tahu Navigator ke mana kamu menuju. Semua di halaman ini ditimbang terhadapnya.'))));
      var f = el('div', 'nv-form');
      var sStage = SH.input('select', { options: [['', { en: 'Choose…', id: 'Pilih…' }]].concat(STAGE_OPTS.map(function (o) { return [o[0], o[1]]; })), value: p.stage || '' });
      var sObj = SH.input('select', { options: [['', { en: 'Choose…', id: 'Pilih…' }]].concat(OBJ_OPTS.map(function (o) { return [o[0], o[1]]; })), value: p.objective || '' });
      var iT = SH.input('text', { placeholder: { en: 'e.g. Data analyst at a consumer-goods company', id: 'mis. Analis data di perusahaan barang konsumen' }, value: p.target || '' });
      var iD = SH.input('date', { value: p.by || '' });
      var iH = SH.input('number', { value: p.hours || 6 }); iH.min = 1; iH.max = 40;
      [[P('Career stage', 'Tahap karier'), sStage], [P('Primary objective', 'Sasaran utama'), sObj], [P('Destination — the role or outcome', 'Tujuan — peran atau hasilnya'), iT], [P('Target date', 'Tanggal target'), iD], [P('Hours per week you can give it', 'Jam per minggu yang bisa kamu berikan'), iH]].forEach(function (x, i) {
        var fl = SH.field({ label: x[0], input: x[1] }); if (i === 2) fl.classList.add('wide'); f.appendChild(fl);
      });
      c.appendChild(f);
      var ar = el('div', 'nv-form-act');
      ar.appendChild(SH.btn({ en: 'Save destination', id: 'Simpan tujuan' }, { iconL: 'check', onClick: function () {
        save(K.profile, { stage: sStage.value, objective: sObj.value, target: iT.value.trim(), by: iD.value, hours: Math.max(1, Math.min(40, parseInt(iH.value, 10) || 6)) });
        editing = false; render(host);
      } }));
      if (p.target) ar.appendChild(SH.btn({ en: 'Cancel', id: 'Batal' }, { quiet: true, onClick: function () { editing = false; render(host); } }));
      c.appendChild(ar);
    }
    w.appendChild(c);
    return w;
  }

  function nextCard(a, s, host) {
    var w = sec('nvNext', P('Recommended next action', 'Tindakan berikutnya yang disarankan'), P('Do this next', 'Lakukan ini berikutnya'));
    var c = el('div', 'glass-card nv-next');
    if (!a) { c.appendChild(el('p', 'nv-lead', esc(T('Nothing needs you urgently. Keep your habits and review on Sunday.', 'Tak ada yang mendesak. Jaga kebiasaanmu dan tinjau hari Minggu.')))); w.appendChild(c); return w; }
    var top = el('div', 'nv-next-top');
    var ic = el('span', 'nv-next-ic'); ic.innerHTML = SH.ico(a.icon); top.appendChild(ic);
    var tt = el('div', 'nv-next-tt');
    tt.appendChild(el('div', 'nv-meta', '<span class="nv-tag">' + esc(tx(rankTag(a.w))) + '</span><span>' + esc(tx(a.cat)) + '</span><span>≈ ' + a.mins + ' ' + esc(T('min', 'mnt')) + '</span><span>' + esc(T('from ', 'dari ')) + esc(tx(a.src)) + '</span>'));
    tt.appendChild(el('h4', null, esc(tx(a.title))));
    top.appendChild(tt); c.appendChild(top);
    var body = el('div', 'nv-next-body');
    body.appendChild(el('div', 'nv-why', '<b>' + esc(T('Why this matters', 'Mengapa ini penting')) + '</b><p>' + esc(tx(a.why)) + '</p>'));
    var ol = el('ol', 'nv-steps'); a.steps.forEach(function (st) { ol.appendChild(el('li', null, esc(tx(st)))); });
    var hw = el('div', 'nv-how'); hw.appendChild(el('b', null, esc(T('How', 'Caranya')))); hw.appendChild(ol); body.appendChild(hw);
    c.appendChild(body);
    var ar = el('div', 'nv-next-act');
    ar.appendChild(ctaBtn(a, host));
    ar.appendChild(SH.btn({ en: 'Not today', id: 'Jangan hari ini' }, { quiet: true, sm: true, onClick: function () { var z = load(K.snooze, {}); Object.keys(z).forEach(function (k) { if (z[k] !== s.td) delete z[k]; }); z[a.id] = s.td; save(K.snooze, z); render(host); } }));
    c.appendChild(ar);
    w.appendChild(c);
    return w;
  }

  function briefCards(B, host) {
    var w = sec('nvBrief', P('The briefing', 'Pengarahan'), P('Eight questions, answered from your own data', 'Delapan pertanyaan, dijawab dari datamu sendiri'));
    var g = el('div', 'nv-brief');
    B.forEach(function (b, i) {
      var c = el('button', 'nv-q'); c.type = 'button';
      c.style.setProperty('--i', i);
      c.innerHTML = '<span class="nv-q-n">' + (i + 1) + '</span><span class="nv-q-ic">' + SH.ico(b.icon) + '</span><span class="nv-q-tx"><b>' + esc(tx(b.q)) + '</b><span>' + esc(tx(b.a)) + '</span></span><span class="nv-q-go" aria-hidden="true">' + SH.ico('arrow') + '</span>';
      c.addEventListener('click', function () { var t = document.getElementById(b.to); if (t) { t.scrollIntoView({ behavior: 'smooth', block: 'start' }); t.classList.remove('nv-flash'); void t.offsetWidth; t.classList.add('nv-flash'); } });
      g.appendChild(c);
    });
    w.appendChild(g);
    return w;
  }

  function priList(A, host, s) {
    var w = sec('nvPri', P('Priority actions', 'Tindakan prioritas'), P('In the order to complete them', 'Dalam urutan untuk diselesaikan'), P('Ordered by urgency and leverage. The number is the order — finish one before starting the next.', 'Diurutkan menurut urgensi dan daya ungkit. Nomornya adalah urutan — selesaikan satu sebelum memulai berikutnya.'));
    var list = el('div', 'nv-pri');
    if (!A.length) list.appendChild(el('p', 'nv-fine', esc(T('No further actions — you are up to date.', 'Tak ada tindakan lain — kamu sudah mutakhir.'))));
    A.forEach(function (a, i) {
      var r = el('details', 'glass-card nv-pri-i');
      var sm = el('summary');
      sm.innerHTML = '<span class="nv-pri-n">' + (i + 2) + '</span><span class="nv-pri-ic">' + SH.ico(a.icon) + '</span><span class="nv-pri-t"><b>' + esc(tx(a.title)) + '</b><small><span class="nv-tag">' + esc(tx(rankTag(a.w))) + '</span> ' + esc(tx(a.cat)) + ' · ≈ ' + a.mins + ' ' + esc(T('min', 'mnt')) + '</small></span><span class="nv-pri-car" aria-hidden="true">▾</span>';
      r.appendChild(sm);
      var b = el('div', 'nv-pri-b');
      b.appendChild(el('p', null, '<b>' + esc(T('Why: ', 'Mengapa: ')) + '</b>' + esc(tx(a.why))));
      var ol = el('ol', 'nv-steps'); a.steps.forEach(function (st) { ol.appendChild(el('li', null, esc(tx(st)))); }); b.appendChild(ol);
      var ar = el('div', 'nv-next-act'); ar.appendChild(ctaBtn(a, host, true));
      ar.appendChild(el('span', 'nv-fine', esc(T('Evidence from ', 'Bukti dari ')) + esc(tx(a.src))));
      b.appendChild(ar); r.appendChild(b);
      list.appendChild(r);
    });
    w.appendChild(list);
    return w;
  }

  function progressSec(s, host) {
    var w = sec('nvProgress', P('Progress', 'Kemajuan'), P('Am I making progress?', 'Apakah aku mengalami kemajuan?'));
    var grid = el('div', 'nv-two');
    /* momentum chart */
    var c1 = el('div', 'glass-card nv-mom');
    c1.appendChild(el('div', 'nv-card-h', '<b>' + esc(T('Momentum', 'Momentum')) + '</b><span>' + esc(T('Actions you logged, per week', 'Tindakan yang kamu catat, per minggu')) + '</span>'));
    var max = Math.max.apply(null, s.weeks.concat([1]));
    var bars = el('div', 'nv-bars');
    for (var i = 7; i >= 0; i--) {
      var v = s.weeks[i], bw = el('div', 'nv-bar' + (i === 0 ? ' now' : ''));
      bw.title = v + ' ' + T('actions', 'tindakan');
      bw.innerHTML = '<i style="--h:' + Math.round(v / max * 100) + '%"></i><em>' + v + '</em><span>' + (i === 0 ? esc(T('now', 'kini')) : '−' + i + T('w', 'mg')) + '</span>';
      bars.appendChild(bw);
    }
    c1.appendChild(bars);
    var TR = { up: P('Rising', 'Naik'), down: P('Slowing', 'Melambat'), steady: P('Steady', 'Stabil'), none: P('Not enough data', 'Data belum cukup') };
    c1.appendChild(el('p', 'nv-fine', '<b class="nv-trend ' + s.trend + '">' + esc(tx(TR[s.trend])) + '</b> · ' + esc(T('last two weeks ' + s.trendNums[0] + ' vs ' + s.trendNums[1] + ' before. Counted from routes, debriefs, habit ticks, journal entries, completed goals, wins and journey-log entries.', 'dua minggu terakhir ' + s.trendNums[0] + ' vs ' + s.trendNums[1] + ' sebelumnya. Dihitung dari rute, debrief, centang kebiasaan, entri jurnal, tujuan selesai, kemenangan, dan catatan perjalanan.'))));
    grid.appendChild(c1);
    /* readiness line + stats */
    var c2 = el('div', 'glass-card nv-bear');
    c2.appendChild(el('div', 'nv-card-h', '<b>' + esc(T('Career Bearing over time', 'Career Bearing dari waktu ke waktu')) + '</b><span>' + esc(C.isDemoMode ? T('Sample history (demo)', 'Riwayat contoh (demo)') : T('Recorded each day you open the Navigator', 'Dicatat setiap hari kamu membuka Navigator')) + '</span>'));
    c2.appendChild(spark(s.history));
    var st = SH.stats([
      [s.sc.overall + '/100', { en: 'Career Bearing', id: 'Career Bearing' }],
      [s.hab30.pct + '%', { en: 'Habits kept · 30 days', id: 'Kebiasaan terjaga · 30 hari' }],
      [s.modsDone + '/' + s.modsTotal, { en: 'Modules complete', id: 'Modul selesai' }],
      [s.ms.all ? Math.round(s.ms.done / s.ms.all * 100) + '%' : '—', { en: 'Plan milestones', id: 'Tonggak rencana' }]
    ]);
    c2.appendChild(st);
    grid.appendChild(c2);
    w.appendChild(grid);
    /* milestones ahead */
    var M = milestonesAhead(s);
    if (M.length) {
      w.appendChild(el('h4', 'nv-sub', esc(T('Progress milestones ahead', 'Tonggak kemajuan di depan'))));
      var mg = el('div', 'nv-ms');
      M.forEach(function (m) {
        var c = el('div', 'glass-card nv-ms-i');
        c.innerHTML = '<span class="nv-ms-ic">' + (m.emoji ? '<em>' + esc(m.emoji) + '</em>' : SH.ico(m.icon)) + '</span><div><b>' + esc(tx(m.title)) + '</b><small>' + esc(tx(m.sub)) + '</small></div>';
        if (m.pct != null) c.appendChild(SH.bar(m.pct));
        mg.appendChild(c);
      });
      w.appendChild(mg);
    }
    return w;
  }
  function spark(h) {
    var pts = h.slice(-30), W = 320, H = 90, pad = 8;
    var wrap = el('div', 'nv-spark');
    if (pts.length < 2) { wrap.appendChild(el('p', 'nv-fine', esc(T('Your first reading is today. Come back tomorrow and the line begins.', 'Pembacaan pertamamu hari ini. Kembalilah besok dan garisnya mulai terbentuk.')))); return wrap; }
    var lo = Math.min.apply(null, pts.map(function (p) { return p.o; })), hi = Math.max.apply(null, pts.map(function (p) { return p.o; }));
    if (hi - lo < 10) { lo = Math.max(0, lo - 5); hi = lo + 10; }
    var X = function (i) { return pad + i * (W - 2 * pad) / (pts.length - 1); }, Y = function (v) { return H - pad - (v - lo) / (hi - lo) * (H - 2 * pad); };
    var d = pts.map(function (p, i) { return (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(p.o).toFixed(1); }).join(' ');
    var area = d + ' L' + X(pts.length - 1).toFixed(1) + ' ' + (H - pad) + ' L' + X(0).toFixed(1) + ' ' + (H - pad) + ' Z';
    var last = pts[pts.length - 1], first = pts[0];
    wrap.innerHTML = '<svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" role="img" aria-label="' + esc(T('Career Bearing from ', 'Career Bearing dari ') + first.o + ' ' + T('to', 'ke') + ' ' + last.o) + '"><defs><linearGradient id="nvSparkG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C9A84C" stop-opacity=".35"/><stop offset="1" stop-color="#C9A84C" stop-opacity="0"/></linearGradient></defs><path d="' + area + '" fill="url(#nvSparkG)"/><path class="nv-spark-l" d="' + d + '" fill="none" stroke="#C9A84C" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/><circle cx="' + X(pts.length - 1).toFixed(1) + '" cy="' + Y(last.o).toFixed(1) + '" r="3.6" fill="#F0D878"/></svg>' +
      '<div class="nv-spark-lbl"><span>' + esc(fmt(first.d)) + ' · ' + first.o + '</span><span>' + esc(fmt(last.d)) + ' · <b>' + last.o + '</b></span></div>';
    return wrap;
  }

  function gapsSec(G, host) {
    var w = sec('nvGaps', P('Identified gaps', 'Celah yang teridentifikasi'), P('What is holding you back', 'Apa yang menahanmu'));
    if (!G.length) { w.appendChild(el('div', 'glass-card nv-empty', esc(T('No significant gaps for this phase. Keep going.', 'Tak ada celah berarti untuk fase ini. Lanjutkan.')))); return w; }
    var g = el('div', 'nv-gaps');
    G.forEach(function (x) {
      var c = el('button', 'glass-card nv-gap sev' + x.sev); c.type = 'button';
      c.innerHTML = '<span class="nv-gap-ic">' + SH.ico(x.icon) + '</span><div><b>' + esc(tx(x.title)) + '</b><small>' + esc(tx(x.ev)) + '</small><span>' + esc(tx(x.fix)) + '</span></div><span class="nv-sev">' + esc(x.sev === 2 ? T('High', 'Tinggi') : T('Medium', 'Sedang')) + '</span>';
      c.addEventListener('click', function () { act(x.go, host); });
      g.appendChild(c);
    });
    w.appendChild(g);
    return w;
  }

  function recSec(s, host) {
    var w = sec('nvRec', P('Recommendations', 'Rekomendasi'), P('Learning, resources and habits for this phase', 'Pembelajaran, sumber daya, dan kebiasaan untuk fase ini'));
    var cols = el('div', 'nv-rec');
    /* learning */
    var c1 = el('div', 'glass-card nv-rec-c');
    c1.appendChild(el('div', 'nv-card-h', '<b>' + esc(T('Recommended learning', 'Pembelajaran yang disarankan')) + '</b><span>' + esc(T('Critical path for the ', 'Jalur kritis fase ')) + esc(tx(PHASES[s.phase].name)) + esc(T(' phase', '')) + '</span>'));
    var L = criticalPath(s).slice(0, 4);
    if (!L.length) c1.appendChild(el('p', 'nv-fine', esc(T('Every module on this phase’s path is complete.', 'Semua modul di jalur fase ini sudah selesai.'))));
    L.forEach(function (x) {
      var a = el('a', 'nv-rec-i'); a.href = x.p.file + '?context=compass';
      a.innerHTML = '<span class="nv-rec-n">' + esc(x.p.nameEn.replace('The ', '')) + '<br><b>' + (x.idx + 1) + '</b></span><span><b>' + esc(T(x.m.en, x.m.idn)) + '</b><small>' + esc(tx(x.reason)) + '</small></span>';
      c1.appendChild(a);
    });
    cols.appendChild(c1);
    /* resources */
    var c2 = el('div', 'glass-card nv-rec-c');
    c2.appendChild(el('div', 'nv-card-h', '<b>' + esc(T('Suggested resources', 'Sumber daya yang disarankan')) + '</b><span>' + esc(T('Tools that fit what is in front of you', 'Alat yang sesuai dengan yang ada di depanmu')) + '</span>'));
    recResources(s).forEach(function (t) {
      var a = el('a', 'nv-rec-i'); a.href = t.href;
      a.innerHTML = '<span class="nv-rec-ic">' + SH.ico(t.icon) + '</span><span><b>' + esc(tx(t.name)) + '</b><small>' + esc(t.prod) + ' · ' + esc(tx(t.sub)) + '</small></span>';
      c2.appendChild(a);
    });
    cols.appendChild(c2);
    /* habits */
    var c3 = el('div', 'glass-card nv-rec-c');
    c3.appendChild(el('div', 'nv-card-h', '<b>' + esc(T('Recommended habits', 'Kebiasaan yang disarankan')) + '</b><span>' + esc(T('One tap adds it to Habits & Reminders', 'Satu ketukan menambahkannya ke Kebiasaan & Pengingat')) + '</span>'));
    recHabits(s).forEach(function (h) {
      var have = s.habits.some(function (x) { return x.key === h.key; });
      var r = el('div', 'nv-rec-i nv-hab');
      r.innerHTML = '<span class="nv-rec-ic">' + SH.ico(h.icon) + '</span><span><b>' + esc(tx(h.name)) + '</b><small>' + esc(tx(h.why)) + '</small></span>';
      var b = SH.btn(have ? { en: 'Added', id: 'Ditambahkan' } : { en: 'Add', id: 'Tambah' }, { ghost: have, sm: true, iconL: have ? 'check' : 'plus', disabled: have, onClick: function () { if (tools()) tools().addSuggestedHabit(h.key); render(host); } });
      r.appendChild(b);
      c3.appendChild(r);
    });
    cols.appendChild(c3);
    w.appendChild(cols);
    return w;
  }

  function waySec(s, host) {
    var w = sec('nvWay', P('Upcoming waypoints', 'Titik singgah mendatang'), P('The next three weeks', 'Tiga minggu ke depan'));
    var U = upcoming(s);
    if (!U.length) { w.appendChild(el('div', 'glass-card nv-empty', esc(T('Nothing dated in the next three weeks. Give your next route step or goal a date so it shows up here.', 'Tak ada yang bertanggal dalam tiga minggu ke depan. Beri tanggal pada langkah rute atau tujuan berikutnya agar muncul di sini.')))); return w; }
    var tl = el('div', 'glass-card nv-tl');
    U.forEach(function (u) {
      var n = daysUntil(u.d);
      var rel = n < 0 ? T(-n + ' d overdue', 'terlambat ' + (-n) + ' h') : n === 0 ? T('today', 'hari ini') : n === 1 ? T('tomorrow', 'besok') : T('in ' + n + ' d', n + ' h lagi');
      var r = el('button', 'nv-tl-i' + (n < 0 ? ' late' : n <= 2 ? ' soon' : '')); r.type = 'button';
      r.innerHTML = '<span class="nv-tl-d"><b>' + esc(fmt(u.d)) + '</b><small>' + esc(rel) + '</small></span><span class="nv-tl-dot">' + SH.ico(u.icon) + '</span><span class="nv-tl-t"><b>' + esc(u.title) + '</b>' + (u.sub ? '<small>' + esc(clip(u.sub, 110)) + '</small>' : '') + '</span>';
      r.addEventListener('click', function () { act(u.go, host); });
      tl.appendChild(r);
    });
    w.appendChild(tl);
    return w;
  }

  function insSec(s) {
    var w = sec('nvIns', P('Personalised career insights', 'Wawasan karier personal'), P('Patterns in your own entries', 'Pola dalam catatanmu sendiri'));
    var I = insights(s);
    if (!I.length) { w.appendChild(el('div', 'glass-card nv-empty', esc(T('Insights appear as you log routes, debriefs, habits and the Personal Audit. The more you record, the more specific they get.', 'Wawasan muncul seiring kamu mencatat rute, debrief, kebiasaan, dan Audit Pribadi. Semakin banyak yang kamu catat, semakin spesifik wawasannya.')))); return w; }
    var g = el('div', 'nv-ins');
    I.forEach(function (x) { var c = el('div', 'glass-card nv-ins-i'); c.innerHTML = '<span class="nv-ins-ic">' + SH.ico(x.icon) + '</span><p>' + esc(tx(x.text)) + '</p>'; g.appendChild(c); });
    w.appendChild(g);
    return w;
  }

  function recalSec(s, A, host) {
    var w = sec('nvRecal', P('If you fall behind', 'Jika kamu tertinggal'), s.status === 'on' ? P('The recalibration protocol', 'Protokol kalibrasi ulang') : P('Recalibrate in about 20 minutes', 'Kalibrasi ulang dalam sekitar 20 menit'));
    var c = el('div', 'glass-card nv-recal ' + s.status);
    if (s.status !== 'on') {
      c.appendChild(el('div', 'nv-recal-h', statusPill(s).outerHTML + '<span>' + esc(s.behindLocal.join(' · ')) + '</span>'));
      var steps = el('div', 'nv-recal-steps');
      /* 1 triage */
      var s1 = el('div', 'nv-rs'); s1.appendChild(el('b', null, '1 · ' + esc(T('Triage the overdue', 'Pilah yang terlambat'))));
      if (!s.goalsOverdue.length && !s.overdueApps.length) s1.appendChild(el('p', 'nv-fine', esc(T('Nothing overdue — skip to step 2.', 'Tak ada yang terlambat — lanjut ke langkah 2.'))));
      s.goalsOverdue.slice(0, 3).forEach(function (g) { var r = el('div', 'nv-rs-r', '<span>' + esc(clip(g.title, 60)) + ' <small>' + esc(fmt(g.due)) + '</small></span>'); r.appendChild(SH.btn({ en: '+14 days', id: '+14 hari' }, { ghost: true, sm: true, onClick: function () { if (tools()) tools().shiftGoal(g.id, 14); render(host); } })); s1.appendChild(r); });
      s.overdueApps.slice(0, 3).forEach(function (a) { var r = el('div', 'nv-rs-r', '<span>' + esc(a.company) + ' <small>' + esc(clip(a.nextAction || '', 50)) + '</small></span>'); r.appendChild(SH.btn({ en: 'Open', id: 'Buka' }, { ghost: true, sm: true, onClick: function () { C.openApp(a.id); } })); s1.appendChild(r); });
      steps.appendChild(s1);
      /* 2 shrink */
      var s2 = el('div', 'nv-rs'); s2.appendChild(el('b', null, '2 · ' + esc(T('Shrink, don’t stop', 'Kecilkan, jangan berhenti'))));
      var keep = s.habitRank.slice(0, 2).map(function (x) { return tx(x.h.name); });
      s2.appendChild(el('p', null, esc(keep.length ? T('Keep these for one week: ', 'Pertahankan ini selama satu minggu: ') + keep.join(' · ') + T('. Pause the rest.', '. Jeda sisanya.') : T('Pick one habit only for this week — the Sunday review.', 'Pilih satu kebiasaan saja minggu ini — tinjauan hari Minggu.'))));
      steps.appendChild(s2);
      /* 3 small win */
      var small = A.filter(function (a) { return a.mins <= 25; })[0];
      var s3 = el('div', 'nv-rs'); s3.appendChild(el('b', null, '3 · ' + esc(T('Bank one small win today', 'Raih satu kemenangan kecil hari ini'))));
      if (small) { s3.appendChild(el('p', null, esc(tx(small.title)) + ' <small>≈ ' + small.mins + ' ' + esc(T('min', 'mnt')) + '</small>')); s3.appendChild(ctaBtn(small, host, true)); }
      else s3.appendChild(el('p', null, esc(T('Tick off one habit or one plan milestone — anything under 25 minutes.', 'Centang satu kebiasaan atau satu tonggak rencana — apa pun di bawah 25 menit.'))));
      steps.appendChild(s3);
      /* 4 re-plan */
      var s4 = el('div', 'nv-rs'); s4.appendChild(el('b', null, '4 · ' + esc(T('Re-plan on Sunday', 'Rencanakan ulang hari Minggu'))));
      var hasRev = s.habits.some(function (h) { return h.key === 'review'; });
      s4.appendChild(el('p', null, esc(T('One destination, three priorities for the week.', 'Satu tujuan, tiga prioritas untuk minggu itu.'))));
      if (!hasRev) s4.appendChild(SH.btn({ en: 'Add the Sunday review', id: 'Tambahkan tinjauan Minggu' }, { ghost: true, sm: true, iconL: 'plus', onClick: function () { if (tools()) tools().addSuggestedHabit('review'); render(host); } }));
      steps.appendChild(s4);
      c.appendChild(steps);
    } else {
      c.appendChild(el('div', 'nv-recal-h', statusPill(s).outerHTML + '<span>' + esc(T('Nothing is overdue and your rhythm is holding. Keep this protocol for the week it slips.', 'Tak ada yang terlambat dan ritmemu terjaga. Simpan protokol ini untuk minggu saat ia tergelincir.')) + '</span>'));
    }
    var pr = el('details', 'nv-proto'); if (s.status !== 'on') pr.open = false;
    pr.appendChild(el('summary', null, esc(T('The protocol, in full', 'Protokol lengkapnya'))));
    var ol = el('ol', 'nv-steps');
    [P('Triage honestly: finish, re-date or drop every overdue item — nothing stays overdue.', 'Pilah dengan jujur: selesaikan, jadwalkan ulang, atau lepaskan setiap hal yang terlambat — tak ada yang dibiarkan terlambat.'),
     P('Shrink, don’t stop: keep your two most important habits and pause the rest for one week.', 'Kecilkan, jangan berhenti: pertahankan dua kebiasaan terpenting dan jeda sisanya selama satu minggu.'),
     P('Bank one small win today — 25 minutes or less — to restart momentum.', 'Raih satu kemenangan kecil hari ini — 25 menit atau kurang — untuk memulai lagi momentum.'),
     P('Re-plan on Sunday: one destination, three priorities for the week.', 'Rencanakan ulang hari Minggu: satu tujuan, tiga prioritas untuk minggu itu.'),
     P('Behind three weeks running? Then the plan — not you — needs changing: move the date or narrow the destination.', 'Tertinggal tiga minggu berturut-turut? Maka rencananya — bukan dirimu — yang perlu diubah: geser tanggal atau persempit tujuan.')
    ].forEach(function (p) { ol.appendChild(el('li', null, esc(tx(p)))); });
    pr.appendChild(ol); c.appendChild(pr);
    w.appendChild(c);
    return w;
  }

  function signalsSec(s) {
    var w = sec('nvSig', P('Signals read', 'Sinyal yang dibaca'), P('What the Navigator used', 'Apa yang dipakai Navigator'));
    var g = el('div', 'nv-sig');
    var rows = [
      ['bearing', 'compass', P('Bearing', 'Bearing'), P('Career Bearing ' + s.sc.overall + '/100 · five Compass Points', 'Career Bearing ' + s.sc.overall + '/100 · lima Titik Kompas')],
      ['course-plotter', 'send', P('Course Plotter', 'Perencana Rute'), P(s.apps.length + ' routes · ' + s.live.length + ' live · ' + s.sc.debriefsAll + ' debriefs', s.apps.length + ' rute · ' + s.live.length + ' aktif · ' + s.sc.debriefsAll + ' debrief')],
      ['nav-briefing', 'bulb', P('Navigation Briefing', 'Pengarahan Navigasi'), P(s.rejected.length + ' closed routes analysed for patterns', s.rejected.length + ' rute ditutup dianalisis polanya')],
      ['discovery', 'heart', P('Discovery', 'Penjelajahan'), P((s.audit ? 'Personal Audit on file' : 'No Personal Audit yet') + ' · ' + s.journal.length + ' journal entries', (s.audit ? 'Audit Pribadi tersedia' : 'Belum ada Audit Pribadi') + ' · ' + s.journal.length + ' entri jurnal')],
      ['habits', 'refresh', P('Habits & Reminders', 'Kebiasaan & Pengingat'), P(s.habits.length + ' habits · ' + s.hab30.pct + '% kept over 30 days', s.habits.length + ' kebiasaan · ' + s.hab30.pct + '% terjaga selama 30 hari')],
      ['plan', 'flag', P('Development Plan', 'Rencana Pengembangan'), P(s.goals.length + ' open goals · ' + s.ms.done + '/' + s.ms.all + ' milestones', s.goals.length + ' tujuan terbuka · ' + s.ms.done + '/' + s.ms.all + ' tonggak')],
      ['my-learning', 'book', P('My Learning', 'Pembelajaranku'), P(s.modsDone + '/' + s.modsTotal + ' modules across four courses', s.modsDone + '/' + s.modsTotal + ' modul di empat kursus')],
      ['waypoints', 'trophy', P('Waypoints', 'Titik Singgah'), P(s.log.length + ' journey-log entries · ' + s.badges + ' badges', s.log.length + ' catatan perjalanan · ' + s.badges + ' lencana')],
      ['resources', 'layers', P('Resources', 'Sumber Daya'), P(s.ckDone + '/' + (s.d.CHECKLIST || []).length + ' job-search checklist items', s.ckDone + '/' + (s.d.CHECKLIST || []).length + ' butir daftar periksa pencarian kerja')]
    ];
    rows.forEach(function (r) {
      var b = el('button', 'nv-sig-i'); b.type = 'button';
      b.innerHTML = '<span class="nv-sig-ic">' + SH.ico(r[1]) + '</span><span><b>' + esc(tx(r[2])) + '</b><small>' + esc(tx(r[3])) + '</small></span>';
      b.addEventListener('click', function () { C.activateTab(r[0]); });
      g.appendChild(b);
    });
    w.appendChild(g);
    w.appendChild(SH.priv({ en: 'How the Navigator works', id: 'Cara kerja Navigator' }, { en: 'A transparent rules engine that runs on this device over your own Compass entries. Each recommendation shows the evidence it came from. It does not predict hiring outcomes, and nothing is sent anywhere.', id: 'Mesin aturan yang transparan, berjalan di perangkat ini atas catatan Compass-mu sendiri. Setiap rekomendasi menunjukkan bukti asalnya. Ia tidak memprediksi hasil rekrutmen, dan tak ada yang dikirim ke mana pun.' }));
    return w;
  }

  function hero(s) {
    var h = el('div', 'tab-hero ts-tabhero nv-hero');
    h.innerHTML = '<span class="th-img" style="background-image:url(\'../../assets/bg/journey-bg.jpg\');background-position:center 38%" aria-hidden="true"></span><span class="th-veil" aria-hidden="true"></span>';
    var inn = el('div', 'th-in');
    inn.appendChild(el('span', 'th-kick', esc(T('Your personal navigation layer', 'Lapisan navigasi pribadimu'))));
    inn.appendChild(el('h2', null, esc(T('The', 'Sang')) + ' <span class="g">Navigator</span>'));
    inn.appendChild(el('p', 'tab-sub', esc(T('Reads every section of The Compass and tells you where you stand, where you are heading, and the next move that matters most — with the reason for each.', 'Membaca setiap bagian The Compass dan memberitahumu posisimu, arah tujuanmu, dan langkah berikutnya yang paling penting — beserta alasannya.'))));
    var stl = el('p', 'tab-stats nv-hero-stats');
    stl.appendChild(statusPill(s));
    stl.appendChild(el('span', null, esc(T('Phase: ', 'Fase: ')) + '<b>' + esc(tx(PHASES[s.phase].label)) + '</b>'));
    stl.appendChild(el('span', null, esc(T('9 sections read', '9 bagian dibaca'))));
    inn.appendChild(stl);
    h.appendChild(inn);
    return h;
  }

  function render(host) {
    if (!C || !host) return;
    var s = gather();
    s.behindLocal = s.behindP.map(tx);
    var A = actions(s), G = gaps(s), B = briefing(s, A, G);
    host.innerHTML = '';
    host.classList.add('nv-page');
    host.appendChild(hero(s));
    host.appendChild(nextCard(A[0], s, host));
    host.appendChild(briefCards(B, host));
    host.appendChild(destCard(s, host));
    host.appendChild(priList(A.slice(1, 6), host, s));
    host.appendChild(progressSec(s, host));
    host.appendChild(gapsSec(G, host));
    host.appendChild(recSec(s, host));
    host.appendChild(waySec(s, host));
    host.appendChild(insSec(s));
    host.appendChild(recalSec(s, A, host));
    host.appendChild(signalsSec(s));
    reveal(host);
  }
  function reveal(host) {
    var items = host.querySelectorAll('.nv-sec');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { items.forEach(function (x) { x.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (x) { io.observe(x); });
  }

  /* compact readout on Bearing */
  function renderMini(slot) {
    if (!C || !slot) return;
    var s = gather(); var A = actions(s); var a = A[0];
    slot.innerHTML = '';
    var c = el('button', 'glass-card nv-mini'); c.type = 'button';
    c.innerHTML = '<span class="nv-mini-ic">' + SH.ico('compass') + '</span><span class="nv-mini-tx"><span class="nv-mini-k">' + esc(T('Navigator', 'Navigator')) + ' · ' + esc(tx(PHASES[s.phase].label)) + '</span><b>' + esc(a ? T('Next: ', 'Berikutnya: ') + tx(a.title) : T('Nothing urgent — open your briefing', 'Tak ada yang mendesak — buka pengarahanmu')) + '</b></span>';
    c.appendChild(statusPill(s));
    c.appendChild(el('span', 'nv-mini-go', esc(T('Open briefing', 'Buka pengarahan')) + ' ' + SH.ico('arrow')));
    c.addEventListener('click', function () { C.activateTab('navigator'); });
    slot.appendChild(c);
  }

  window.MT_COMPASS_NAV = {
    init: function (api) { C = api; },
    render: function (host) { editing = false; render(host); },
    renderMini: renderMini,
    /* exposed for the Motivation layer and tests */
    signals: function () { var s = gather(); return { phase: s.phase, status: s.status, trend: s.trend, stage: s.prof.stage, objective: s.prof.objective, hab7: s.hab7, rejected: s.rejected.length, offers: s.offers.length, interviews: s.live.filter(function (a) { return a.stage >= 7 && a.stage <= 11; }).length, overall: s.sc.overall, idle: s.idle, behind: s.behind.length, goalsOverdue: s.goalsOverdue.length }; },
    _actions: function () { return actions(gather()).map(function (a) { return { id: a.id, w: a.w, title: a.title.en }; }); }
  };
})();
