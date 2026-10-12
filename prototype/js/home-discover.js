/**
 * METANOIA LABS — HOME · DISCOVER HERO
 * ------------------------------------
 * The second hero on the home page: one search across the whole ecosystem.
 * A visitor writes what they are looking for and what they love, in their
 * own words, and gets real destinations back — products, lessons, Mind
 * Palace articles, companies, industries and functions from The Range, and
 * the site's pages — ranked by an intent reader plus the site search index
 * (data/search-index.json, built by scripts/build-site.py).
 *
 * No network beyond the index. Bilingual: strings follow <html lang>, which
 * the home page sets whenever the visitor switches language.
 */
(function () {
  'use strict';
  var root = document.querySelector('.dsc-pane');
  if (!root) return;
  var form = root.querySelector('#dscForm'), ta = root.querySelector('#dscQ'), ph = root.querySelector('#dscPh'),
      scopes = root.querySelector('#dscScopes'), go = root.querySelector('#dscGo'), pop = root.querySelector('#dscPop'), res = root.querySelector('#dscRes');
  if (!form || !ta) return;

  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function lang() { return (document.documentElement.lang || 'en') === 'id' ? 'id' : 'en'; }
  function T(k) { var d = STR[lang()] || STR.en; return d[k] != null ? d[k] : (STR.en[k] || ''); }
  function esc(s) { return String(s == null ? '' : s).replace(/&amp;/g, '&').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  var STR = {
    en: {
      prompts: [
        'I’m a final-year student who wants a bank’s officer programme, and the interview makes me nervous…',
        'Fresh graduate. I love data and solving problems — which companies hire analysts, and how do I pass screening?',
        'I have an offer letter with a bond clause. How do I read it, and negotiate without losing the offer?'
      ],
      go: 'Find my route', tryL: 'Try', scopesL: 'Search in',
      scopes: { all: 'Everything', product: 'Products', lesson: 'Lessons', range: 'Companies', article: 'Articles' },
      popular: ['Interview preparation', 'A CV that passes screening', 'Negotiating an offer', 'Banking careers', 'Not sure where to start'],
      rec: 'Recommended for you', lesson: 'Lessons', article: 'Mind Palace', range: 'Companies, industries and functions', page: 'Pages and products',
      types: { page: 'Page', product: 'Product', lesson: 'Lesson', article: 'Article', company: 'Company', industry: 'Industry', 'function': 'Function' },
      empty: 'Nothing matched yet. Try a goal, a role, a company, or the feeling you have about your next step.',
      hint: 'Enter opens the top result · ↑↓ to move', more: 'Browse everything', loading: 'Reading the ecosystem…',
      count: function (n) { return n === 1 ? '1 destination' : n + ' destinations'; }
    },
    id: {
      prompts: [
        'Saya mahasiswa tingkat akhir yang ingin masuk program officer bank, dan wawancaranya membuat saya gugup…',
        'Lulusan baru. Saya suka data dan memecahkan masalah — perusahaan mana yang merekrut analis, dan bagaimana lolos penyaringan?',
        'Saya punya surat penawaran dengan klausul ikatan dinas. Bagaimana membacanya, dan menegosiasikan tanpa kehilangan tawaran?'
      ],
      go: 'Temukan ruteku', tryL: 'Coba', scopesL: 'Cari di',
      scopes: { all: 'Semua', product: 'Produk', lesson: 'Pelajaran', range: 'Perusahaan', article: 'Artikel' },
      popular: ['Persiapan wawancara', 'CV yang lolos penyaringan', 'Negosiasi tawaran', 'Karier perbankan', 'Belum tahu mulai dari mana'],
      rec: 'Rekomendasi untukmu', lesson: 'Pelajaran', article: 'Mind Palace', range: 'Perusahaan, industri, dan fungsi', page: 'Halaman dan produk',
      types: { page: 'Halaman', product: 'Produk', lesson: 'Pelajaran', article: 'Artikel', company: 'Perusahaan', industry: 'Industri', 'function': 'Fungsi' },
      empty: 'Belum ada yang cocok. Coba tulis tujuan, peran, perusahaan, atau perasaanmu tentang langkah berikutnya.',
      hint: 'Enter membuka hasil teratas · ↑↓ untuk berpindah', more: 'Jelajahi semuanya', loading: 'Membaca ekosistem…',
      count: function (n) { return n + ' tujuan'; }
    }
  };

  /* ── the intent reader: what a sentence is about, in either language ── */
  var INTENTS = [
    { id: 'offer', re: /\b(offer|tawaran|penawaran|salary|gaji|negotiat|negosiasi|contract|kontrak|bond|ikatan dinas|pkwt|take.?home|benefit|tunjangan)/i,
      to: [['/products/the-rope/?lesson=10.1', 'Read the whole offer, not the headline figure', 'Baca seluruh penawaran, bukan hanya angka utamanya'],
           ['/products/the-rope/?lesson=10.3', 'One reasoned request, said kindly', 'Satu permintaan beralasan, disampaikan dengan baik']] },
    { id: 'interview', re: /\b(interview|wawancara|hr screen|panel|case|mock|simulat|star\b|behaviou?ral|pertanyaan|question)/i,
      to: [['/products/the-rope/', 'Interview performance, from the HR screen to the final panel', 'Performa wawancara, dari penyaringan HR sampai panel final']] },
    { id: 'first90', re: /\b(first (90|ninety) days|90 hari|probation|masa percobaan|new job|onboarding|first year|tahun pertama|pekerjaan baru)/i,
      to: [['/products/the-rope/?lesson=11.2', 'Your 30/60/90 plan for the first ninety days', 'Rencana 30/60/90 untuk sembilan puluh hari pertama'],
           ['/products/the-route/', 'Career architecture after the first job', 'Arsitektur karier setelah pekerjaan pertama']] },
    { id: 'apply', re: /\b(cv|resume|résumé|ats|cover letter|surat lamaran|psychometric|psikotes|aptitude|screening|penyaringan|lamaran|apply|applic|portfolio|linkedin)/i,
      to: [['/products/the-pack/', 'The application toolkit: CV, ATS, psychometrics, screening', 'Perangkat lamaran: CV, ATS, psikotes, penyaringan']] },
    { id: 'direction', re: /\b(don.?t know|not sure|unsure|belum tahu|bingung|confus|lost|direction|arah|strength|kekuatan|passion|minat|which career|karier apa|assessment|asesmen|personality|kepribadian|self[- ]?discovery|where to start|mulai dari mana|readiness)/i,
      to: [['/career-map-assessment', 'Fifteen minutes to your first bearing, free', 'Lima belas menit menuju bearing pertamamu, gratis'],
           ['/products/the-map/', 'Direction: know yourself, then see what is out there', 'Arah: kenali dirimu, lalu lihat apa yang ada di luar']] },
    { id: 'companies', re: /\b(compan|perusahaan|employer|hiring|merekrut|where to apply|lowongan|industr|bank|fmcg|startup|bumn|state.?owned|consult|tech|telco|mining|energy|retail|analyst|analis|engineer|marketing|finance|hr\b)/i,
      to: [['/products/the-map/range/', 'The Range: real companies, hiring processes, honest eligibility', 'The Range: perusahaan nyata, proses rekrutmen, kelayakan yang jujur', 'The Range (Explore)']] },
    { id: 'grow', re: /\b(promot|promosi|raise|visib|trajectory|leadership|kepemimpinan|pivot|pindah karier|career change|second (job|move)|accelerat|senior|manager)/i,
      to: [['/products/the-route/', 'Trajectory, visibility and promotion strategy', 'Lintasan, visibilitas, dan strategi promosi']] },
    { id: 'track', re: /\b(track|dashboard|organis|organiz|deadline|my applications|lamaran saya|compass|progress)/i,
      to: [['/products/the-compass/', 'Know where you are and where you are going', 'Tahu posisimu dan arah tujuanmu']] },
    { id: 'mentor', re: /\b(mentor|coach|guidance|pembimbing|bimbingan|alumni)/i,
      to: [['/pages/mentors', 'The rope team: mentors who have stood on your summit', 'Rope team: mentor yang pernah berdiri di puncakmu']] },
    { id: 'student', re: /\b(student|mahasiswa|campus|kampus|semester|intern|magang|university|universitas|kuliah)/i,
      to: [['/pages/student', 'The Student edition: semester-by-semester readiness', 'Edisi Mahasiswa: kesiapan semester demi semester']] },
    { id: 'graduate', re: /\b(fresh grad|lulusan baru|graduat|first job|pekerjaan pertama|entry.?level)/i,
      to: [['/pages/fresh-graduate', 'The Fresh Graduate edition: the gauntlet to a first job', 'Edisi Lulusan Baru: jalan menuju pekerjaan pertama']] },
    { id: 'read', re: /\b(read|article|artikel|insight|playbook|learn about|belajar tentang|explain|jelaskan)/i,
      to: [['/pages/mind-palace', 'Mind Palace: playbooks and insights', 'Mind Palace: playbook dan wawasan']] },
    { id: 'enterprise', re: /\b(our (team|company|campus)|hire graduates|partner|b2b|enterprise|employer branding|sponsor)/i,
      to: [['/pages/enterprise', 'Programmes for employers and campuses', 'Program untuk pemberi kerja dan kampus']] },
    { id: 'price', re: /\b(price|pricing|harga|cost|biaya|free|gratis|plan|membership|langganan)/i,
      to: [['/pricing', 'Basecamp is free, always', 'Basecamp gratis, selamanya']] }
  ];

  /* ── tokens: strip stopwords, fold synonyms across English and Indonesian ── */
  var STOP = /^(the|a|an|and|or|to|of|in|on|at|for|with|is|are|am|be|i|im|i’m|me|my|we|our|you|your|it|its|this|that|do|does|how|what|which|who|want|wants|need|needs|love|like|looking|find|get|about|from|into|not|no|but|so|very|just|some|any|can|could|would|should|have|has|had|was|were|will|also|more|than|then|there|here|dan|atau|yang|untuk|di|ke|dari|dengan|saya|aku|kami|kita|kamu|anda|ini|itu|ada|adalah|bisa|mau|ingin|suka|cari|mencari|bagaimana|apa|apakah|siapa|juga|tidak|belum|sudah|akan|lebih|sangat|agar|supaya|karena|tapi|tetapi|yg|dgn|utk|sih|dong|nih|ya|sure|where|when|why|really|still|already|something|someone|thing|things|help|please|know|think|feel|feeling|going|next|step|mulai|sekali|tahu|rasa|merasa|langkah|tolong|bantu|lagi|saja|hanya|sedang|baru|ini)$/;
  var SYN = {
    interview: ['wawancara'], wawancara: ['interview'], cv: ['resume', 'ats'], resume: ['cv'], salary: ['gaji', 'offer'], gaji: ['salary', 'offer'],
    offer: ['tawaran', 'negotiation'], tawaran: ['offer', 'negotiation'], negotiate: ['negotiation', 'negosiasi'], negotiation: ['negosiasi'], negosiasi: ['negotiation'],
    company: ['companies', 'perusahaan'], companies: ['company', 'perusahaan'], perusahaan: ['company', 'companies'], bank: ['banking', 'financial'], banking: ['bank', 'financial'], perbankan: ['bank', 'banking'],
    data: ['analyst', 'analytics'], analyst: ['analytics', 'analis'], analis: ['analyst'], student: ['mahasiswa', 'campus'], mahasiswa: ['student', 'campus'],
    graduate: ['fresh', 'lulusan'], lulusan: ['graduate', 'fresh'], mentor: ['mentorship', 'mentors'], promotion: ['promosi', 'trajectory'], promosi: ['promotion'],
    intern: ['internship', 'magang'], magang: ['internship', 'intern'], job: ['role', 'career'], karier: ['career'], career: ['karier'], kerja: ['job', 'work'], work: ['job'],
    screening: ['penyaringan'], penyaringan: ['screening'], startup: ['startups', 'tech'], bumn: ['state-owned', 'enterprise'], consulting: ['consultant', 'konsultan'],
    marketing: ['pemasaran'], finance: ['keuangan', 'financial'], engineer: ['engineering'], tech: ['technology', 'teknologi'], story: ['stories', 'star'], probation: ['percobaan']
  };
  function tokens(q) {
    var raw = String(q || '').toLowerCase().replace(/[^\p{L}\p{N}\s’'-]/gu, ' ').split(/\s+/).filter(Boolean), out = [], seen = {};
    raw.forEach(function (w) {
      w = w.replace(/^['’]+|['’]+$/g, '');
      if (w.length < 3 || STOP.test(w)) return;
      var stem = w.replace(/(ing|ies|s)$/, function (m) { return m === 'ies' ? 'y' : ''; });
      [w, stem].concat(SYN[w] || [], SYN[stem] || []).forEach(function (t) { if (t && t.length >= 3 && !seen[t]) { seen[t] = 1; out.push(t); } });
    });
    return out;
  }

  /* ── the index ── */
  var items = null, loading = null, byU = {};
  function ensureIndex() {
    if (items) return Promise.resolve(items);
    if (loading) return loading;
    loading = fetch('data/search-index.json').then(function (r) { return r.json(); }).then(function (j) {
      items = (j.items || []).map(function (it) { it.hay = ((it.n || '') + ' ' + (it.ni || '') + ' ' + (it.s || '') + ' ' + (it.si || '') + ' ' + (it.k || '')).toLowerCase(); byU[it.u] = it; return it; });
      return items;
    }).catch(function () { items = []; return items; });
    return loading;
  }
  var BOOST = { page: 1.3, lesson: 1.15, article: 1.1, industry: 1.25, 'function': 1.15, company: .85 };
  function scoreItem(it, toks, ql) {
    var s = 0, h = 0, nameL = ((lang() === 'id' ? it.ni : it.n) || it.n || '').toLowerCase();
    toks.forEach(function (t) {
      if (nameL.indexOf(t) !== -1) { s += 3; h++; }
      else if (it.hay.indexOf(t) !== -1) { s += 1; h++; }
    });
    if (it.t === 'company' && s < 3) return 0;      /* a company must match on its name or industry, not a stray word */
    if (toks.length >= 3 && h < 2 && s < 3) return 0; /* a long sentence needs more than one stray word in common */
    if (it.t === 'page' && /^\/(legal|login|register|help)\b/.test(it.u) && !/privac|terms|legal|dignity|syarat|ketentuan|help|bantuan|login|masuk|sign|daftar|register|account|akun/i.test(ql)) return 0;   /* utility pages only when they are clearly asked for */
    return s * (BOOST[it.t] || 1);
  }
  function groupOf(it) { return it.t === 'page' ? 'page' : it.t === 'lesson' ? 'lesson' : it.t === 'article' ? 'article' : 'range'; }
  var scope = 'all';
  function inScope(it) {
    if (scope === 'all') return true;
    if (scope === 'product') return it.t === 'page';
    return groupOf(it) === scope;
  }
  function search(q) {
    var toks = tokens(q), ql = String(q || '').toLowerCase();
    var rec = [];
    INTENTS.forEach(function (I) {
      if (rec.length >= 3 || !I.re.test(ql)) return;
      I.to.forEach(function (t) {
        if (rec.length >= 3) return;
        if (rec.some(function (r) { return r.u === t[0]; })) return;
        var it = byU[t[0]];
        rec.push({ u: t[0], n: it ? (lang() === 'id' ? it.ni : it.n) : (t[3] || t[0]), s: lang() === 'id' ? t[2] : t[1], t: it ? it.t : 'page', rec: true });
      });
    });
    var hits = [];
    if (toks.length) {
      hits = items.map(function (it) { return [scoreItem(it, toks, ql), it]; }).filter(function (x) { return x[0] > 0 && inScope(x[1]); })
        .sort(function (a, b) { return b[0] - a[0] || a[1].n.localeCompare(b[1].n); }).map(function (x) { return x[1]; });
    }
    var groups = { lesson: [], article: [], range: [], page: [] }, CAP = { lesson: 4, article: 3, range: 4, page: 3 }, total = 0;
    hits.forEach(function (it) {
      if (rec.some(function (r) { return r.u === it.u; })) return;
      var g = groupOf(it); if (groups[g].length >= CAP[g] || total >= 14) return;
      groups[g].push(it); total++;
    });
    if (scope !== 'all') rec = rec.filter(function (r) { return scope === 'product' ? r.t === 'page' : groupOf(r) === scope; });
    return { rec: rec, groups: groups, total: total + rec.length };
  }

  /* ── render ── */
  function href(u) { return u.replace(/^\//, ''); }
  function item(it, L, isRec) {
    var name = isRec ? it.n : ((L === 'id' ? it.ni : it.n) || it.n), sub = isRec ? it.s : ((L === 'id' ? it.si : it.s) || it.s || '');
    return '<a class="dsc-it' + (isRec ? ' rec' : '') + '" href="' + esc(href(it.u)) + '" data-t="' + esc(it.t) + '"><span class="dsc-t">' + esc(T('types')[it.t] || it.t) + '</span><span><strong>' + esc(name) + '</strong><small>' + esc(sub) + '</small></span><i aria-hidden="true">→</i></a>';
  }
  function render(r, q) {
    var L = lang(), html = '';
    if (r.rec.length) html += '<div class="dsc-grp dsc-rec"><b>' + esc(T('rec')) + '</b>' + r.rec.map(function (x) { return item(x, L, true); }).join('') + '</div>';
    ['lesson', 'article', 'range', 'page'].forEach(function (g) {
      if (!r.groups[g].length) return;
      html += '<div class="dsc-grp"><b>' + esc(T(g)) + '</b>' + r.groups[g].map(function (x) { return item(x, L, false); }).join('') + '</div>';
    });
    if (!html) html = '<p class="dsc-empty">' + esc(T('empty')) + '</p>';
    html += '<div class="dsc-foot"><span>' + esc(r.total ? T('count')(r.total) : '') + (r.total ? ' · ' + esc(T('hint')) : '') + '</span><button type="button" class="dsc-more">' + esc(T('more')) + ' →</button></div>';
    res.innerHTML = html; openRes();
    var more = res.querySelector('.dsc-more');
    more.addEventListener('click', function () {
      /* the full Cmd/Ctrl+K palette, loaded on demand by mob-footer.js */
      var c = document.querySelector('[data-site-search]'); if (c) c.click();
    });
    try { if (window.MT && window.MT.track) window.MT.track('discover_search', { len: String(q || '').length, hits: r.total, rec: r.rec.length, scope: scope }); } catch (e) {}
  }
  var runT = 0;
  function run(immediate) {
    var q = ta.value.trim();
    clearTimeout(runT);
    if (!q) { closeRes(); res.innerHTML = ''; return; }
    var go2 = function () { ensureIndex().then(function () { if (ta.value.trim() !== q) return; render(search(q), q); }); };
    if (immediate) go2(); else runT = setTimeout(go2, 160);
    if (!items) { res.innerHTML = '<p class="dsc-empty">' + esc(T('loading')) + '</p>'; openRes(); }
  }

  /* ── chrome: scopes, popular prompts, button, language ── */
  function paint() {
    var L = lang();
    go.querySelector('span').textContent = T('go');
    ta.setAttribute('aria-label', L === 'id' ? 'Apa yang kamu cari?' : 'What are you looking for?');
    scopes.innerHTML = '<b>' + esc(T('scopesL')) + '</b>' + ['all', 'product', 'lesson', 'range', 'article'].map(function (k) {
      return '<button type="button" class="dsc-scope' + (scope === k ? ' on' : '') + '" data-scope="' + k + '" aria-pressed="' + (scope === k) + '">' + esc(T('scopes')[k]) + '</button>';
    }).join('');
    pop.innerHTML = '<b>' + esc(T('tryL')) + '</b>' + T('popular').map(function (p) { return '<button type="button" class="dsc-chip">' + esc(p) + '</button>'; }).join('');
    if (res.classList.contains('on') && ta.value.trim()) run(true);
  }
  scopes.addEventListener('click', function (e) {
    var b = e.target.closest('.dsc-scope'); if (!b) return;
    scope = b.dataset.scope; paint(); run(true); ta.focus();
  });
  pop.addEventListener('click', function (e) {
    var b = e.target.closest('.dsc-chip'); if (!b) return;
    ta.value = b.textContent; grow(); stopTyping(); run(true); ta.focus();
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!ta.value.trim()) { ta.focus(); return; }
    ensureIndex().then(function () {
      render(search(ta.value.trim()), ta.value.trim());
      var first = res.querySelector('.dsc-it'); if (first) first.focus();
    });
  });
  ta.addEventListener('input', function () { grow(); if (ta.value) stopTyping(); else startTyping(); run(false); });
  ta.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event('submit', { cancelable: true })); }
    else if (e.key === 'ArrowDown') { var f = res.querySelector('.dsc-it'); if (f) { e.preventDefault(); f.focus(); } }
    else if (e.key === 'Escape') { if (res.classList.contains('on')) closeRes(); else { ta.value = ''; res.innerHTML = ''; startTyping(); } }
  });
  res.addEventListener('keydown', function (e) {
    var links = [].slice.call(res.querySelectorAll('.dsc-it')), i = links.indexOf(document.activeElement);
    if (e.key === 'ArrowDown' && i > -1 && links[i + 1]) { e.preventDefault(); links[i + 1].focus(); }
    else if (e.key === 'ArrowUp' && i > -1) { e.preventDefault(); if (i === 0) ta.focus(); else links[i - 1].focus(); }
    else if (e.key === 'Escape') { ta.focus(); }
  });
  function grow() { /* the box keeps one height; long text scrolls inside it */ }
  /* the overlay never pushes the page: it opens beneath the box and is capped to the hero's frame */
  function fitRes() {
    var fr = (document.querySelector('#call .frame') || document.body).getBoundingClientRect(), r = res.getBoundingClientRect();
    var room = Math.floor(fr.bottom - r.top - 24);
    res.style.maxHeight = Math.max(160, Math.min(room, 460)) + 'px';
  }
  function openRes() { res.classList.add('on'); form.classList.add('open'); document.body.classList.add('dsc-open'); fitRes(); }
  function closeRes() { res.classList.remove('on'); form.classList.remove('open'); document.body.classList.remove('dsc-open'); }

  /* ── the placeholder writes itself, like someone thinking aloud ── */
  var typing = { on: false, t: 0, k: 0, i: 0, phase: 'type' };
  var phText = ph.querySelector('span');
  function stopTyping() { typing.on = false; clearTimeout(typing.t); ph.classList.remove('show'); }
  function startTyping() {
    if (ta.value) return;
    ph.classList.add('show');
    if (reduce) { phText.textContent = T('prompts')[0]; return; }
    if (typing.on) return;
    typing.on = true; typing.i = 0; typing.phase = 'type'; typing.k = typing.k % T('prompts').length;
    tick();
  }
  function tick() {
    if (!typing.on) return;
    var list = T('prompts'), s = list[typing.k % list.length], delay = 34;
    if (typing.phase === 'type') {
      typing.i++; phText.textContent = s.slice(0, typing.i);
      if (typing.i >= s.length) { typing.phase = 'hold'; delay = 2600; }
      else delay = /[,.…?]/.test(s.charAt(typing.i - 1)) ? 220 : 26 + Math.random() * 30;
    } else if (typing.phase === 'hold') { typing.phase = 'erase'; delay = 18; }
    else { typing.i = Math.max(0, typing.i - 3); phText.textContent = s.slice(0, typing.i); if (typing.i === 0) { typing.phase = 'type'; typing.k++; delay = 420; } else delay = 14; }
    typing.t = setTimeout(tick, delay);
  }
  ta.addEventListener('focus', function () { if (!ta.value) startTyping(); else if (res.innerHTML && !res.classList.contains('on')) openRes(); });
  /* a click outside the box folds the overlay away; the query stays */
  document.addEventListener('pointerdown', function (e) { if (!form.contains(e.target)) closeRes(); });
  addEventListener('resize', function () { if (res.classList.contains('on')) fitRes(); });

  /* language switches re-paint the chrome and restart the prompt in the new language */
  if ('MutationObserver' in window) new MutationObserver(function () { paint(); if (!ta.value) { stopTyping(); typing.k = 0; startTyping(); } }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  /* ── the hero's two panes: The Call ⇄ Discover ── */
  var panes = document.getElementById('hpanes'), hero = document.getElementById('call');
  var bgv = root.querySelector('.dsc-bg video'), bgw = root.querySelector('.dsc-bg'), cur = 0;
  var NO_FILM = document.documentElement.getAttribute('data-video') === 'off' || (window.matchMedia && matchMedia('(max-width:760px)').matches);
  function film(on) {
    if (!bgv || NO_FILM) return;
    if (on) { if (bgv.preload === 'none') { bgv.preload = 'auto'; bgv.load(); } var arm = function () { bgw.classList.add('has-video'); bgv.play().catch(function () {}); }; if (bgv.readyState >= 1) arm(); else bgv.addEventListener('loadedmetadata', arm, { once: true }); }
    else if (!bgv.paused) bgv.pause();
  }
  function setPane(i, opts) {
    opts = opts || {}; i = Math.max(0, Math.min(1, i));
    if (i === cur && !opts.force) return;
    cur = i; panes.dataset.cur = String(i);
    [].slice.call(panes.querySelectorAll('.hpane')).forEach(function (pn) { var on = +pn.dataset.pane === i; pn.classList.toggle('on', on); pn.setAttribute('aria-hidden', on ? 'false' : 'true'); if (on) pn.querySelectorAll('.fx').forEach(function (f) { f.classList.add('in'); }); });
    [].slice.call(document.querySelectorAll('.hp-dots [data-pane-to]')).forEach(function (b) { var on = +b.dataset.paneTo === i; b.classList.toggle('on', on); b.setAttribute('aria-selected', on ? 'true' : 'false'); });
    var pv = hero.querySelector('.hp-prev'), nx = hero.querySelector('.hp-next'); if (pv) pv.disabled = i === 0; if (nx) nx.disabled = i === 1;
    film(i === 1);
    if (i === 1) { ensureIndex(); startTyping(); if (opts.focus && !(window.matchMedia && matchMedia('(pointer:coarse)').matches)) ta.focus({ preventScroll: true }); }
    else { if (!ta.value) stopTyping(); closeRes(); }
    try { history.replaceState(null, '', i === 1 ? '#discover' : location.pathname + location.search); } catch (e) {}
    try { if (!opts.silent && window.MT && window.MT.track) window.MT.track('hero_pane', { pane: i === 1 ? 'discover' : 'call' }); } catch (e) {}
  }
  hero.addEventListener('click', function (e) {
    var to = e.target.closest('[data-pane-to]'), st = e.target.closest('[data-pane-step]');
    if (to) setPane(+to.dataset.paneTo, { focus: true });
    else if (st) setPane(cur + (+st.dataset.paneStep), { focus: true });
  });
  /* ← → switch panes while the hero is on screen (not while writing in the box) */
  addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    var ae = document.activeElement, tag = ae && ae.tagName;
    if (tag === 'TEXTAREA' || tag === 'INPUT' || (ae && ae.isContentEditable)) return;
    if (scrollY > innerHeight * .5) return;
    e.preventDefault(); e.stopImmediatePropagation();
    setPane(cur + (e.key === 'ArrowRight' ? 1 : -1), { focus: false });
  }, true);
  /* swipe */
  var sx = null, sy = null, st0 = 0;
  panes.addEventListener('pointerdown', function (e) { if (e.target.closest('textarea, .dsc-res, button, a, input')) { sx = null; return; } sx = e.clientX; sy = e.clientY; st0 = Date.now(); }, { passive: true });
  panes.addEventListener('pointerup', function (e) { if (sx == null) return; var dx = e.clientX - sx, dy = e.clientY - sy; sx = null; if (Date.now() - st0 > 1600) return; if (Math.abs(dx) > 56 && Math.abs(dx) > Math.abs(dy) * 1.6) setPane(cur + (dx < 0 ? 1 : -1), { focus: false }); }, { passive: true });
  panes.addEventListener('pointercancel', function () { sx = null; }, { passive: true });
  /* deep link: /#discover opens the right-hand pane */
  setPane(location.hash === '#discover' ? 1 : 0, { force: true, silent: true });
  window.MT_HERO = { setPane: setPane, pane: function () { return cur; } };

  paint(); grow();
  window.MT_DISCOVER = { search: function (q) { return ensureIndex().then(function () { return search(q); }); }, run: run };
})();
