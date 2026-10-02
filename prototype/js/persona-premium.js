/* ═══ Persona premium layer — Early & Mature Professional ═══
   Loaded with data-persona="early" | "mature". Additive only: it reads the
   page's existing chapters (#why-now, #market, #career-os, #products, #cta),
   its chapter pill (#chapNav), its folder tabs and its data-en/data-id
   language convention, so every injected string switches language with the
   page's own toggle.
     1. chapter rail — per-chapter reading progress + overall progress
     2. chapter bridges — why it matters · what you gain · what to do next
     3. self-check — four questions → your stage, the product that fits,
        one concrete next step (opens the matching stage and product tabs)
     4. glossary tooltips on specialist terms (hover, focus, tap)
     5. CTA micro-interactions (sheen, one-time glint on the hero CTA)
   Nothing is stored; no data leaves the page. */
(function () {
  'use strict';
  var me = document.currentScript;
  var persona = (me && me.getAttribute('data-persona')) || (/mature/.test(location.pathname) ? 'mature' : 'early');
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function lang() { try { var l = localStorage.getItem('mtLang') || localStorage.getItem('mt-lang'); return l === 'id' ? 'id' : 'en'; } catch (e) { return 'en'; } }
  function P(en, id) { return { en: en, id: id }; }
  function tx(p) { return p[lang()] || p.en; }
  function el(tag, cls, p) { var n = document.createElement(tag); if (cls) n.className = cls; if (p) bi(n, p); return n; }
  function bi(n, p) { n.setAttribute('data-en', p.en); n.setAttribute('data-id', p.id); n.innerHTML = tx(p); return n; }
  var ICO = {
    why: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>',
    gain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.9l-5.3 2.8 1.1-5.9-4.3-4.1 5.9-.8z"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg>',
    bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M8.5 14.5A5.5 5.5 0 1 1 15.5 14.5c-.7.6-1.5 1.5-1.5 2.5h-4c0-1-.8-1.9-1.5-2.5Z"/></svg>'
  };
  var MAP = '../career-map-assessment';

  /* ═══ content ═══ */
  var C = {
    early: {
      bridges: {
        'why-now': { k: P('Chapter I · what this means for you', 'Bab I · apa artinya bagimu'),
          why: P('Years 1–5 decide which rooms you are considered for next. The habits you set now compound — in either direction.', 'Tahun 1–5 menentukan ruangan mana yang akan mempertimbangkanmu berikutnya. Kebiasaan yang kamu bangun sekarang berlipat — ke arah mana pun.'),
          gain: P('A clear picture of the four stages from performer to architect — and an honest read of which one you are in today.', 'Gambaran jelas empat tahap dari pelaksana ke arsitek — dan pembacaan jujur tentang tahap mana yang kamu jalani hari ini.'),
          next: P('See your starting position in fifteen minutes with the free Career Map.', 'Lihat posisi awalmu dalam lima belas menit lewat Career Map gratis.'),
          cta: [P('Get my free Career Map', 'Dapatkan Career Map gratis'), MAP], to: ['market', P('Next: what the market asks of you', 'Berikutnya: apa yang diminta pasar darimu')] },
        'market': { k: P('Chapter I · the market, applied to you', 'Bab I · pasar, diterapkan padamu'),
          why: P('What you are judged on changes at every stage. Most people keep optimising for last year’s criteria — and wonder why the next level does not open.', 'Apa yang dinilai darimu berubah di setiap tahap. Kebanyakan orang terus mengejar kriteria tahun lalu — lalu heran mengapa jenjang berikutnya tak terbuka.'),
          gain: P('What “good” looks like at your stage, the Indonesian market stated plainly, and a rule for each hard decision years 1–5 force on you.', 'Seperti apa “baik” di tahapmu, pasar Indonesia yang dipaparkan apa adanya, dan satu aturan untuk setiap keputusan sulit di tahun 1–5.'),
          next: P('Take the 60-second self-check below to find your stage and the one tool that fits it.', 'Ikuti cek diri 60 detik di bawah untuk menemukan tahapmu dan satu alat yang cocok.'),
          to: ['pp-check', P('Find my stage', 'Temukan tahapku')] },
        'career-os': { k: P('Chapter II · the system', 'Bab II · sistemnya'),
          why: P('Without a system, progress depends on someone else noticing you at the right moment.', 'Tanpa sistem, kemajuan bergantung pada orang lain yang kebetulan memperhatikanmu di saat yang tepat.'),
          gain: P('Five connected tools — audit, positioning, interviews, acceleration and navigation — that pass what they learn about you to each other.', 'Lima alat yang saling terhubung — audit, pemosisian, wawancara, akselerasi, dan navigasi — yang saling meneruskan apa yang mereka pelajari tentangmu.'),
          next: P('Open the product that matches your biggest question right now.', 'Buka produk yang menjawab pertanyaan terbesarmu saat ini.'),
          to: ['products', P('See the five products', 'Lihat lima produknya')] },
        'products': { k: P('Chapter III · choosing where to start', 'Bab III · memilih titik mulai'),
          why: P('Each product answers one decision you will face in years 1–5 — you do not need all five on day one.', 'Setiap produk menjawab satu keputusan yang akan kamu hadapi di tahun 1–5 — kamu tak butuh kelimanya di hari pertama.'),
          gain: P('A starting point chosen for your situation, and a way to measure whether it is working.', 'Titik mulai yang dipilih untuk situasimu, dan cara mengukur apakah ia berhasil.'),
          next: P('Start with the free Career Map; it recommends which product to open first.', 'Mulai dengan Career Map gratis; ia merekomendasikan produk mana yang dibuka lebih dulu.'),
          cta: [P('Start free', 'Mulai gratis'), MAP], to: ['cta', P('Next: how to begin', 'Berikutnya: cara memulai')] }
      },
      check: {
        k: P('60-second self-check', 'Cek diri 60 detik'),
        h: P('Where are you, <em>really</em>?', 'Di mana posisimu, <em>sebenarnya</em>?'),
        p: P('Four questions. You get your stage, the product that fits it, and one step to take this week — nothing is stored.', 'Empat pertanyaan. Kamu mendapat tahapmu, produk yang cocok, dan satu langkah untuk minggu ini — tak ada yang disimpan.'),
        qs: [
          { q: P('How long have you been working full-time?', 'Sudah berapa lama kamu bekerja penuh waktu?'), key: 'yrs', o: [['0', P('Less than a year', 'Kurang dari setahun')], ['1', P('One to three years', 'Satu sampai tiga tahun')], ['2', P('Three to five years', 'Tiga sampai lima tahun')], ['3', P('More than five years', 'Lebih dari lima tahun')]] },
          { q: P('Which sentence describes your work best?', 'Kalimat mana yang paling menggambarkan pekerjaanmu?'), key: 'work', o: [['0', P('I deliver what I am assigned, and I am getting faster', 'Aku menuntaskan yang ditugaskan, dan makin cepat')], ['1', P('I own an area end to end — people come to me for it', 'Aku memegang satu area dari hulu ke hilir — orang datang padaku untuk itu')], ['2', P('I get results through other people and other teams', 'Aku mencapai hasil lewat orang lain dan tim lain')], ['3', P('I am being considered for the next level', 'Aku sedang dipertimbangkan untuk jenjang berikutnya')]] },
          { q: P('What question is on your mind most?', 'Pertanyaan apa yang paling sering muncul di pikiranmu?'), key: 'need', o: [['0', P('Am I in the right field or role?', 'Apakah aku di bidang atau peran yang tepat?')], ['1', P('Why do I perform well but not move up?', 'Mengapa kinerjaku baik tetapi tak naik?')], ['2', P('How do I pass interviews for bigger roles?', 'Bagaimana lolos wawancara untuk peran yang lebih besar?')], ['3', P('Should I study further or apply for a scholarship?', 'Perlukah aku kuliah lagi atau melamar beasiswa?')], ['4', P('I want to see and track all of it in one place', 'Aku ingin melihat dan memantau semuanya di satu tempat')]] },
          { q: P('Has your manager told you, in words, what the next level requires?', 'Apakah manajermu pernah mengatakan dengan jelas apa syarat jenjang berikutnya?'), key: 'crit', o: [['0', P('Yes, clearly', 'Ya, dengan jelas')], ['1', P('Partly — I am guessing the rest', 'Sebagian — sisanya aku menebak')], ['2', P('No', 'Tidak')]] }
        ],
        stages: [
          [P('Year 1 · Reliability and learning speed', 'Tahun 1 · Keandalan dan kecepatan belajar'), P('Your job now is to become someone whose work stops needing to be checked.', 'Tugasmu sekarang: menjadi orang yang pekerjaannya tak perlu lagi diperiksa.')],
          [P('Years 2–3 · Ownership of an area', 'Tahun 2–3 · Kepemilikan atas satu area'), P('Your job now is to be the person an area belongs to — and to make that visible.', 'Tugasmu sekarang: menjadi orang pemilik satu area — dan membuatnya terlihat.')],
          [P('Years 3–5 · Leverage', 'Tahun 3–5 · Daya ungkit'), P('Your job now is results through others: people, other teams, and the commercial side.', 'Tugasmu sekarang: hasil lewat orang lain — rekan, tim lain, dan sisi komersial.')],
          [P('The promotion decision', 'Keputusan promosi'), P('Your job now is to make the case easy for the people who decide.', 'Tugasmu sekarang: mempermudah kasusmu bagi para pengambil keputusan.')]
        ],
        prods: [P('Career Audit &amp; Pivot', 'Audit &amp; Pivot Karier'), P('Senior Positioning', 'Pemosisian Senior'), P('Interviews at the Next Level', 'Wawancara di Level Berikutnya'), P('Career Acceleration, Scholarships &amp; Advanced Degrees', 'Akselerasi Karier, Beasiswa &amp; Gelar Lanjutan'), P('The Compass — Professional Edition', 'The Compass — Edisi Profesional')],
        tips: [
          P('Good — write those criteria down and review your last quarter against them.', 'Bagus — tuliskan kriteria itu dan tinjau kuartal terakhirmu terhadapnya.'),
          P('In your next one-to-one, ask: “What would I need to show for you to put me forward?” Write the answer down.', 'Di one-on-one berikutnya, tanyakan: “Apa yang perlu kutunjukkan agar Bapak/Ibu mengajukanku?” Tuliskan jawabannya.'),
          P('This is the single most useful conversation you are not having. Ask for the next-level criteria in your next one-to-one.', 'Ini satu percakapan paling berguna yang belum kamu lakukan. Minta kriteria jenjang berikutnya di one-on-one berikutnya.')
        ]
      },
      terms: [
        [/\bATS\b/, P('ATS', 'ATS'), P('Applicant tracking system — the software many employers use to collect, parse and filter CVs before a person reads them.', 'Applicant tracking system — perangkat lunak yang dipakai banyak pemberi kerja untuk mengumpulkan, membaca, dan menyaring CV sebelum dibaca manusia.')],
        [/\bsponsors?\b/i, P('Sponsor', 'Sponsor'), P('A senior person who uses their influence to put your name forward. A mentor advises you; a sponsor spends capital on you.', 'Orang senior yang memakai pengaruhnya untuk mengajukan namamu. Mentor memberi nasihat; sponsor mempertaruhkan modalnya untukmu.')],
        [/\bskip-level\b/i, P('Skip-level', 'Skip-level'), P('A conversation with your manager’s manager.', 'Percakapan dengan atasan dari manajermu.')],
        [/\bcalibration\b/i, P('Calibration', 'Kalibrasi'), P('The meeting where managers compare ratings across a team before performance results become final.', 'Rapat tempat para manajer membandingkan penilaian di seluruh tim sebelum hasil kinerja difinalkan.')],
        [/\bexecutive presence\b/i, P('Executive presence', 'Kehadiran eksekutif'), P('How senior people read your composure, clarity and judgement — especially under pressure.', 'Cara orang senior membaca ketenangan, kejelasan, dan penilaianmu — terutama di bawah tekanan.')],
        [/\bleverage\b/i, P('Leverage', 'Daya ungkit'), P('Output that multiplies beyond your own hours — through other people, systems or cross-team influence.', 'Hasil yang berlipat melampaui jam kerjamu sendiri — lewat orang lain, sistem, atau pengaruh lintas tim.')]
      ]
    },
    mature: {
      bridges: {
        'why-now': { k: P('Chapter I · what this means for you', 'Bab I · apa artinya bagimu'),
          why: P('After a decade or more, performance is assumed. What decides the next chapter is direction — and whether you choose it or it chooses you.', 'Setelah satu dekade atau lebih, kinerja sudah dianggap wajar. Yang menentukan babak berikutnya adalah arah — dan apakah kamu memilihnya atau ia memilihmu.'),
          gain: P('A way to sort your experience into what transfers as-is, what translates with work, and what the next chapter needs you to build.', 'Cara memilah pengalamanmu: yang bisa dibawa apa adanya, yang perlu diterjemahkan, dan yang perlu kamu bangun untuk babak berikutnya.'),
          next: P('Take the free Career Map to see where your experience is strongest today.', 'Ikuti Career Map gratis untuk melihat di mana pengalamanmu paling kuat hari ini.'),
          cta: [P('Get my free Career Map', 'Dapatkan Career Map gratis'), MAP], to: ['market', P('Next: what the market asks now', 'Berikutnya: apa yang diminta pasar sekarang')] },
        'market': { k: P('Chapter I · the market, applied to you', 'Bab I · pasar, diterapkan padamu'),
          why: P('Seniority changes the question you are judged on — from your own judgement, to your team, to direction, to capital and people. Moves go wrong when you prepare for the wrong question.', 'Senioritas mengubah pertanyaan yang dinilai darimu — dari penilaianmu sendiri, ke timmu, ke arah, ke modal dan orang. Langkah gagal saat kamu bersiap untuk pertanyaan yang salah.'),
          gain: P('The moves open to you, when each one works, and the first step for each — stated plainly for the Indonesian market.', 'Langkah-langkah yang terbuka bagimu, kapan masing-masing berhasil, dan langkah pertamanya — dipaparkan apa adanya untuk pasar Indonesia.'),
          next: P('Take the 60-second self-check below to see which question you are being judged on now.', 'Ikuti cek diri 60 detik di bawah untuk melihat pertanyaan mana yang sedang dinilai darimu.'),
          to: ['pp-check', P('Find my stage', 'Temukan tahapku')] },
        'career-os': { k: P('Chapter II · the system', 'Bab II · sistemnya'),
          why: P('A second chapter built on instinct alone tends to repeat the first one. A system makes the choice deliberate.', 'Babak kedua yang dibangun hanya dengan naluri cenderung mengulang babak pertama. Sistem membuat pilihannya disengaja.'),
          gain: P('Five connected tools — assessment, presence, repositioning, education and navigation — working from one picture of you.', 'Lima alat yang saling terhubung — asesmen, kehadiran, pemosisian ulang, pendidikan, dan navigasi — bekerja dari satu gambaran tentang dirimu.'),
          next: P('Open the product that matches the decision in front of you.', 'Buka produk yang sesuai dengan keputusan di hadapanmu.'),
          to: ['products', P('See the five products', 'Lihat lima produknya')] },
        'products': { k: P('Chapter III · choosing where to start', 'Bab III · memilih titik mulai'),
          why: P('Senior transitions are expensive to get wrong. Start with the decision that is most time-sensitive for you.', 'Transisi senior mahal jika salah. Mulailah dari keputusan yang paling mendesak bagimu.'),
          gain: P('A first step matched to your situation, and a way to see whether the repositioning is working.', 'Langkah pertama yang sesuai dengan situasimu, dan cara melihat apakah pemosisian ulangnya berhasil.'),
          next: P('Start with the free Career Map; it recommends where to begin.', 'Mulai dengan Career Map gratis; ia merekomendasikan dari mana memulai.'),
          cta: [P('Start free', 'Mulai gratis'), MAP], to: ['cta', P('Next: how to begin', 'Berikutnya: cara memulai')] }
      },
      check: {
        k: P('60-second self-check', 'Cek diri 60 detik'),
        h: P('Which question are you <em>really</em> being judged on?', 'Pertanyaan mana yang <em>sebenarnya</em> dinilai darimu?'),
        p: P('Four questions. You get your stage, the product that fits it, and one step to take this month — nothing is stored.', 'Empat pertanyaan. Kamu mendapat tahapmu, produk yang cocok, dan satu langkah untuk bulan ini — tak ada yang disimpan.'),
        qs: [
          { q: P('How many years of experience do you have?', 'Berapa tahun pengalamanmu?'), key: 'yrs', o: [['0', P('Seven to ten years', 'Tujuh sampai sepuluh tahun')], ['1', P('Ten to fifteen years', 'Sepuluh sampai lima belas tahun')], ['2', P('More than fifteen years', 'Lebih dari lima belas tahun')]] },
          { q: P('What is your role today?', 'Apa peranmu hari ini?'), key: 'work', o: [['0', P('A senior expert — the hard problems come to me', 'Ahli senior — masalah sulit datang padaku')], ['1', P('I manage a team', 'Aku memimpin sebuah tim')], ['2', P('I lead managers or a whole function', 'Aku memimpin para manajer atau satu fungsi')], ['3', P('Executive, board or advisory', 'Eksekutif, dewan, atau penasihat')]] },
          { q: P('Which decision is in front of you?', 'Keputusan mana yang ada di depanmu?'), key: 'need', o: [['0', P('What exactly is my leadership gap?', 'Apa sebenarnya celah kepemimpinanku?')], ['1', P('How do I carry more weight at the top table?', 'Bagaimana lebih berbobot di meja pimpinan?')], ['2', P('Where should my experience go next?', 'Ke mana pengalamanku sebaiknya dibawa berikutnya?')], ['3', P('Is executive education or a scholarship worth it now?', 'Apakah pendidikan eksekutif atau beasiswa layak sekarang?')], ['4', P('I want to plan and track the whole transition', 'Aku ingin merencanakan dan memantau seluruh transisinya')]] },
          { q: P('Is there someone senior who would put your name forward?', 'Adakah orang senior yang akan mengajukan namamu?'), key: 'crit', o: [['0', P('Yes', 'Ya')], ['1', P('Not sure', 'Tidak yakin')], ['2', P('No', 'Tidak')]] }
        ],
        stages: [
          [P('Senior expert · judged on your own judgement', 'Ahli senior · dinilai dari penilaianmu sendiri'), P('Make sure your name is attached to outcomes, not tasks — inside and outside the company.', 'Pastikan namamu melekat pada hasil, bukan tugas — di dalam dan di luar perusahaan.')],
          [P('Manager of a team · judged on what your team delivers without you', 'Manajer tim · dinilai dari apa yang dihasilkan timmu tanpa dirimu'), P('Your test now is whether the team performs when you are not in the room.', 'Ujianmu sekarang: apakah tim tetap berkinerja saat kamu tak ada di ruangan.')],
          [P('Leader of leaders · judged on direction and the system you build', 'Pemimpin para pemimpin · dinilai dari arah dan sistem yang kamu bangun'), P('Your test now is the direction you set and the system that carries it.', 'Ujianmu sekarang: arah yang kamu tetapkan dan sistem yang membawanya.')],
          [P('Executive · advisory — judged on capital allocation and the people you back', 'Eksekutif · penasihat — dinilai dari alokasi modal dan orang yang kamu dukung'), P('Your test now is where you put money, time and trust — and who you back.', 'Ujianmu sekarang: ke mana kamu menaruh uang, waktu, dan kepercayaan — dan siapa yang kamu dukung.')]
        ],
        prods: [P('Leadership Assessment &amp; Gap Analysis', 'Leadership Assessment &amp; Gap Analysis'), P('Executive Presence Program', 'Program Kehadiran Eksekutif'), P('Strategic Repositioning', 'Pemosisian Ulang Strategis'), P('Scholarships &amp; Executive Education', 'Beasiswa &amp; Pendidikan Eksekutif'), P('The Compass — Senior Edition', 'The Compass — Edisi Senior')],
        tips: [
          P('Keep that relationship warm: send them one clear update on your direction this quarter.', 'Jaga hubungan itu: kirim satu kabar jelas tentang arahmu kuartal ini.'),
          P('List three senior people who have seen your best work. Book a conversation with one of them this month.', 'Daftar tiga orang senior yang pernah melihat kerja terbaikmu. Jadwalkan percakapan dengan salah satunya bulan ini.'),
          P('At this level, moves travel through people. Building one sponsor relationship is the first step, before any application.', 'Di level ini, langkah berpindah lewat orang. Membangun satu hubungan sponsor adalah langkah pertama, sebelum lamaran apa pun.')
        ]
      },
      terms: [
        [/\bP&amp;L\b|\bP&L\b/, P('P&amp;L', 'P&amp;L'), P('Profit-and-loss responsibility — accountability for the revenue and costs of a business unit.', 'Tanggung jawab laba-rugi — akuntabilitas atas pendapatan dan biaya sebuah unit bisnis.')],
        [/\bexecutive presence\b/i, P('Executive presence', 'Kehadiran eksekutif'), P('How senior people read your composure, clarity and judgement — especially under pressure.', 'Cara orang senior membaca ketenangan, kejelasan, dan penilaianmu — terutama di bawah tekanan.')],
        [/\bsponsors?\b/i, P('Sponsor', 'Sponsor'), P('A senior person who uses their influence to put your name forward. A mentor advises you; a sponsor spends capital on you.', 'Orang senior yang memakai pengaruhnya untuk mengajukan namamu. Mentor memberi nasihat; sponsor mempertaruhkan modalnya untukmu.')],
        [/\bleverage\b/i, P('Leverage', 'Daya ungkit'), P('Impact that multiplies beyond your own hours — through people, systems or capital.', 'Dampak yang berlipat melampaui jam kerjamu sendiri — lewat orang, sistem, atau modal.')],
        [/\bATS\b/, P('ATS', 'ATS'), P('Applicant tracking system — the software many employers use to collect, parse and filter CVs before a person reads them.', 'Applicant tracking system — perangkat lunak yang dipakai banyak pemberi kerja untuk mengumpulkan, membaca, dan menyaring CV sebelum dibaca manusia.')]
      ]
    }
  }[persona];
  if (!C) return;

  /* ═══ 1 · chapter rail ═══ */
  function rail() {
    var nav = document.getElementById('chapNav'); if (!nav) return;
    var links = [].slice.call(nav.querySelectorAll('a[href^="#"]'));
    var secs = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
    var rd = el('span', 'pp-read'); rd.setAttribute('aria-hidden', 'true'); rd.innerHTML = '<i></i><b>0%</b>'; nav.appendChild(rd);
    var tick = false;
    function docTop(n) { return n.getBoundingClientRect().top + window.scrollY; }
    function upd() {
      tick = false;
      var y = window.scrollY + innerHeight * 0.35, H = document.documentElement.scrollHeight - innerHeight;
      secs.forEach(function (s, i) {
        if (!s) return;
        var top = docTop(s), end = secs[i + 1] ? docTop(secs[i + 1]) : top + s.offsetHeight;
        var p = Math.max(0, Math.min(1, (y - top) / Math.max(1, end - top)));
        links[i].style.setProperty('--pp', p.toFixed(3));
        /* keep the highlighted chapter in step with the reader, also when scrolling back up
           through a chapter's later sections (the page's own observer only sees chapter starts) */
        if (y >= top && y < end) links.forEach(function (a, k) { a.classList.toggle('act', k === i); });
      });
      var t = Math.max(0, Math.min(1, window.scrollY / Math.max(1, H)));
      rd.style.setProperty('--pt', t.toFixed(3)); rd.lastChild.textContent = Math.round(t * 100) + '%';
    }
    addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
    addEventListener('resize', upd); upd();
  }

  /* ═══ 2 · chapter bridges ═══ */
  function goTo(id) {
    var t = document.getElementById(id); if (!t) return;
    var slide = t.closest && t.closest('.hz-slide');
    if (slide && window.MT_HZ) { MT_HZ.show(slide, { scroll: true, focus: true }); return; }
    if (t.querySelector && t.querySelector('.hz-deck') && window.MT_HZ) { MT_HZ.show(0, { scroll: true }); return; }
    t.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  }
  function bridges() {
    Object.keys(C.bridges).forEach(function (id) {
      var sec = document.getElementById(id); if (!sec) return;
      var b = C.bridges[id];
      var w = el('aside', 'pp-bridge'); w.setAttribute('aria-label', tx(b.k).replace(/<[^>]+>/g, ''));
      var inn = el('div', 'pp-bridge-in');
      inn.appendChild(el('div', 'pp-bridge-k', b.k));
      var g = el('div', 'pp-bridge-g');
      [['why', P('Why it matters to you', 'Mengapa penting bagimu'), b.why], ['gain', P('What you gain', 'Yang kamu dapat'), b.gain], ['next', P('What to do next', 'Langkah berikutnya'), b.next]].forEach(function (c) {
        var col = el('div', 'pp-col' + (c[0] === 'next' ? ' next' : ''));
        var h = el('div', 'pp-col-h'); var ic = el('span', 'pp-col-ic'); ic.innerHTML = ICO[c[0]]; h.appendChild(ic); h.appendChild(el('b', null, c[1])); col.appendChild(h);
        col.appendChild(el('p', null, c[2]));
        if (c[0] === 'next') {
          var act = el('div', 'pp-act');
          if (b.cta) { var a = el('a', 'pp-btn'); a.href = b.cta[1]; var sp = el('span', null, b.cta[0]); a.appendChild(sp); a.insertAdjacentHTML('beforeend', ICO.next); act.appendChild(a); }
          if (b.to) { var l = el('button', 'pp-link'); l.type = 'button'; l.appendChild(el('span', null, b.to[1])); l.insertAdjacentHTML('beforeend', ICO.down); l.addEventListener('click', function () { goTo(b.to[0]); }); act.appendChild(l); }
          col.appendChild(act);
        }
        g.appendChild(col);
      });
      inn.appendChild(g); w.appendChild(inn);
      sec.parentNode.insertBefore(w, sec.nextSibling);
      observe(w);
    });
  }
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: 0.2 }) : null;
  function observe(n) { if (io && !reduced) io.observe(n); else n.classList.add('in'); }

  /* ═══ 3 · self-check journey ═══ */
  function selfCheck() {
    var slot = document.getElementById('hz-check-slot');
    var after = slot || document.querySelector('#market + .pp-bridge') || document.getElementById('market'); if (!after) return;
    var K = C.check, ans = {}, step = 0;
    var w = el('section', 'pp-check'); w.id = 'pp-check'; w.setAttribute('aria-label', tx(K.k));
    var inn = el('div', 'pp-check-in');
    var side = el('div', 'pp-check-side');
    side.appendChild(el('div', 'pp-bridge-k', K.k));
    side.appendChild(el('h3', null, K.h));
    side.appendChild(el('p', null, K.p));
    var steps = el('div', 'pp-steps'); steps.setAttribute('aria-hidden', 'true');
    side.appendChild(steps);
    var stage = el('div', 'pp-stage'); stage.setAttribute('aria-live', 'polite');
    inn.appendChild(side); inn.appendChild(stage); w.appendChild(inn);
    if (slot) slot.appendChild(w); else after.parentNode.insertBefore(w, after.nextSibling);
    function paintSteps() {
      steps.innerHTML = '';
      for (var i = 0; i < K.qs.length; i++) steps.appendChild(el('span', i <= Math.min(step, K.qs.length - 1) ? 'on' : ''));
      steps.appendChild(el('small', null, step < K.qs.length ? P((step + 1) + ' / ' + K.qs.length, (step + 1) + ' / ' + K.qs.length) : P('Done', 'Selesai')));
    }
    function ask() {
      paintSteps(); stage.innerHTML = '';
      var q = K.qs[step];
      var box = el('div', 'pp-q');
      box.appendChild(el('h4', null, q.q));
      var opts = el('div', 'pp-opts'); opts.setAttribute('role', 'group');
      q.o.forEach(function (o, i) {
        var b = el('button', 'pp-opt' + (ans[q.key] === o[0] ? ' sel' : '')); b.type = 'button';
        b.innerHTML = '<i>' + String.fromCharCode(65 + i) + '</i>';
        var sp = el('span', null, o[1]); b.appendChild(sp);
        b.addEventListener('click', function () { ans[q.key] = o[0]; b.classList.add('sel'); setTimeout(function () { step++; if (step < K.qs.length) ask(); else result(); }, reduced ? 0 : 160); });
        opts.appendChild(b);
      });
      box.appendChild(opts);
      if (step > 0) { var bk = el('button', 'pp-link pp-back', P('← Back', '← Kembali')); bk.type = 'button'; bk.addEventListener('click', function () { step--; ask(); }); box.appendChild(bk); }
      stage.appendChild(box);
    }
    function result() {
      paintSteps(); stage.innerHTML = '';
      var yrs = +ans.yrs, wk = +ans.work, need = +ans.need, crit = +ans.crit;
      /* stage: mature maps directly from the role; early blends tenure with the work description,
         and "being considered for the next level" always reads as the promotion decision */
      var st = persona === 'mature' ? wk : (wk === 3 ? 3 : Math.max(0, Math.min(2, Math.round((Math.min(yrs, 2) + wk) / 2))));
      var S = K.stages[st], pr = K.prods[need], tip = K.tips[crit];
      var r = el('div', 'pp-res');
      r.appendChild(el('div', 'pp-res-k', P('Your read-out', 'Hasilmu')));
      r.appendChild(el('h4', null, S[0]));
      r.appendChild(el('p', 'pp-res-sub', S[1]));
      var g = el('div', 'pp-res-g');
      var c1 = el('div', 'pp-res-c'); c1.appendChild(el('b', null, P('The product that fits', 'Produk yang cocok'))); c1.appendChild(el('p', null, P('<strong>' + pr.en + '</strong> — it answers the question you picked.', '<strong>' + pr.id + '</strong> — ia menjawab pertanyaan yang kamu pilih.'))); g.appendChild(c1);
      var c2 = el('div', 'pp-res-c'); c2.appendChild(el('b', null, P('Read next on this page', 'Baca berikutnya di halaman ini'))); c2.appendChild(el('p', null, P('The market chapter for your stage — what you are judged on, what good looks like, and the trap.', 'Bab pasar untuk tahapmu — apa yang dinilai, seperti apa “baik”, dan jebakannya.'))); g.appendChild(c2);
      r.appendChild(g);
      var tp = el('div', 'pp-res-tip'); tp.innerHTML = ICO.bulb; tp.appendChild(el('span', null, tip)); r.appendChild(tp);
      var act = el('div', 'pp-act');
      var a = el('a', 'pp-btn'); a.href = MAP; a.appendChild(el('span', null, P('Get my free Career Map', 'Dapatkan Career Map gratis'))); a.insertAdjacentHTML('beforeend', ICO.next); act.appendChild(a);
      var l1 = el('button', 'pp-link', P('Open my stage', 'Buka tahapku')); l1.type = 'button';
      l1.addEventListener('click', function () { var t = document.querySelector('#market .fold-stages .fold-tab[data-tab="' + st + '"]'); if (t) { t.click(); var sl = t.closest('.hz-slide'); if (sl && window.MT_HZ) { MT_HZ.show(sl, { scroll: true, focus: true }); return; } } goTo('market'); });
      act.appendChild(l1);
      var l2 = el('button', 'pp-link', P('Open the product', 'Buka produknya')); l2.type = 'button';
      l2.addEventListener('click', function () { var t = document.querySelector('#products .fold-tab[data-tab="' + need + '"]'); if (t) t.click(); goTo('products'); });
      act.appendChild(l2);
      r.appendChild(act);
      var again = el('button', 'pp-link', P('Start again', 'Ulangi')); again.type = 'button'; again.style.marginTop = '14px';
      again.addEventListener('click', function () { ans = {}; step = 0; ask(); });
      r.appendChild(again);
      r.appendChild(el('p', 'pp-fine', P('A quick orientation from your own answers — not an assessment. The free Career Map measures it properly.', 'Orientasi singkat dari jawabanmu sendiri — bukan asesmen. Career Map gratis mengukurnya dengan benar.')));
      stage.appendChild(r);
    }
    ask();
  }

  /* ═══ 4 · glossary tooltips ═══ */
  var tip = null, cur = null;
  function showTip(t) {
    cur = t;
    if (!tip) { tip = el('div', 'pp-tip'); tip.setAttribute('role', 'tooltip'); tip.id = 'ppTip'; document.body.appendChild(tip); }
    var d = C.terms[+t.getAttribute('data-pp')];
    tip.innerHTML = '<b>' + tx(d[1]) + '</b>' + tx(d[2]);
    var r = t.getBoundingClientRect(); tip.classList.add('show');
    var tw = tip.offsetWidth, th = tip.offsetHeight;
    var x = Math.max(10, Math.min(innerWidth - tw - 10, r.left + r.width / 2 - tw / 2));
    var y = r.top - th - 10; if (y < 70) y = r.bottom + 10;
    tip.style.left = x + 'px'; tip.style.top = y + 'px';
    t.setAttribute('aria-describedby', 'ppTip');
  }
  function hideTip() { cur = null; if (tip) tip.classList.remove('show'); }
  function onScrollTip() { if (!cur) return; var r = cur.getBoundingClientRect(); if (r.bottom < 60 || r.top > innerHeight) hideTip(); else showTip(cur); }
  function terms() {
    var roots = ['why-now', 'market', 'career-os', 'products'].map(function (id) { return document.getElementById(id); }).filter(Boolean);
    C.terms.forEach(function (d, i) {
      if (document.querySelector('.pp-term[data-pp="' + i + '"]')) return;
      /* first pass: visible text; second pass: text inside collapsed disclosures (mobile) */
      for (var pass = 0; pass < 2; pass++) {
        for (var r = 0; r < roots.length; r++) {
          var walker = document.createTreeWalker(roots[r], NodeFilter.SHOW_TEXT, { acceptNode: function (n) {
            var p = n.parentNode; if (!p || p.closest('a,button,h1,h2,h3,h4,script,style,.pp-term,.pp-bridge,.pp-check,[aria-hidden="true"]')) return NodeFilter.FILTER_REJECT;
            if (pass === 0 && !p.offsetParent) return NodeFilter.FILTER_SKIP;
            return d[0].test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP; } });
          var n = walker.nextNode();
          if (n) {
            var m = n.nodeValue.match(d[0]);
            var hit = n.splitText(m.index); hit.splitText(m[0].length);
            var sp = document.createElement('span'); sp.className = 'pp-term'; sp.tabIndex = 0; sp.setAttribute('data-pp', i); sp.textContent = hit.nodeValue;
            hit.parentNode.replaceChild(sp, hit);
            return;
          }
        }
      }
    });
  }
  document.addEventListener('mouseover', function (e) { var t = e.target.closest && e.target.closest('.pp-term'); if (t) showTip(t); });
  document.addEventListener('mouseout', function (e) { if (e.target.closest && e.target.closest('.pp-term')) hideTip(); });
  document.addEventListener('focusin', function (e) { if (e.target.classList && e.target.classList.contains('pp-term')) showTip(e.target); });
  document.addEventListener('focusout', function (e) { if (e.target.classList && e.target.classList.contains('pp-term')) hideTip(); });
  document.addEventListener('click', function (e) { var t = e.target.closest && e.target.closest('.pp-term'); if (t) { e.preventDefault(); showTip(t); } else hideTip(); });
  addEventListener('scroll', onScrollTip, { passive: true });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hideTip(); });

  /* ═══ 5 · CTA micro-interaction ═══ */
  function glint() {
    var h = document.querySelector('.hero-cta'); if (!h || reduced) return;
    setTimeout(function () { h.classList.add('pp-glint'); setTimeout(function () { h.classList.remove('pp-glint'); }, 1800); }, 2200);
  }

  function init() {
    rail(); bridges(); selfCheck(); glint();
    setTimeout(terms, 400);
    /* the page's language toggle rewrites [data-en] nodes; restore the glossary afterwards */
    document.querySelectorAll('.ctl button, [data-lang]').forEach(function (b) { b.addEventListener('click', function () { setTimeout(terms, 60); }); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
