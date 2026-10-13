/**
 * MIND PALACE — CONTENT REGISTRY (single source of truth)
 * -------------------------------------------------------
 * Adding or editing content happens HERE and only here; the page renders
 * whatever this file declares. Editorial rules (docs/mind-palace/STRATEGY.md):
 *  - one topic per piece; one format; explicit stages
 *  - every piece carries the enforced frame: what / why / (data) / act / tools
 *  - numbers require a named source or Metanoia's own database; everything
 *    else is written as judgement and reads like judgement
 *  - authors are real (Metanoia Editorial until named contributors exist)
 *  - trending is an editorial flag, never a fake metric
 *  - radar entries carry a checked date + official link, and expire visibly
 */
window.MT_MP = (function () {
  'use strict';
  var L = function (en, id) { return { en: en, id: id }; };

  var TOPICS = [
    { id: 'career', name: L('Career Paths', 'Jalur Karier'), accent: '#C9A84C',
      desc: L('Exploring, planning, changing and growing a career on purpose.', 'Menjelajahi, merencanakan, mengubah, dan menumbuhkan karier secara sengaja.') },
    { id: 'skills', name: L('Skills & Capabilities', 'Keahlian & Kapabilitas'), accent: '#5FB884',
      desc: L('What to learn, why employers value it, and how to prove it.', 'Apa yang perlu dipelajari, mengapa dihargai pemberi kerja, dan cara membuktikannya.') },
    { id: 'recruitment', name: L('Getting Hired', 'Lolos Rekrutmen'), accent: '#7BA5C4',
      desc: L('Applications, assessments and interviews; how the gate actually works.', 'Lamaran, asesmen, dan wawancara; cara gerbang itu benar-benar bekerja.') },
    { id: 'market', name: L('Industry & Market', 'Industri & Pasar'), accent: '#D9A05B',
      desc: L('Industries, companies and the labour market, read honestly.', 'Industri, perusahaan, dan pasar kerja, dibaca dengan jujur.') },
    { id: 'worklife', name: L('Professional Life', 'Kehidupan Profesional'), accent: '#B08CC9',
      desc: L('The workplace itself: habits, relationships, and staying whole.', 'Dunia kerja itu sendiri: kebiasaan, relasi, dan tetap utuh.') },
    { id: 'opportunities', name: L('Opportunities', 'Peluang'), accent: '#5FA8A0',
      desc: L('Internships, scholarships and programmes, dated, linked, verified.', 'Magang, beasiswa, dan program, bertanggal, tertaut, terverifikasi.') },
    { id: 'consulting', name: L('Problem Solving & Consulting', 'Pemecahan Masalah & Konsultasi'), accent: '#E0876A',
      desc: L('Structured thinking, case interviews and the consulting career, practised rather than admired.', 'Berpikir terstruktur, wawancara kasus, dan karier konsultan, dilatih alih-alih dikagumi.') }
  ];

  /* Editorial formats — each is a different reading experience, not a folder.
     Roadmap formats (Field Note, Toolkit, Career Brief) join only when real
     content of that kind exists; we never ship an empty format. */
  var FORMATS = {
    guide: L('Playbook', 'Playbook'),
    explainer: L('Explainer', 'Penjelas'),
    data: L('Signal', 'Sinyal'),
    perspective: L('Perspective', 'Perspektif'),
    radar: L('Opportunity', 'Peluang'),
    drill: L('Practice drill', 'Latihan'),
    case: L('Worked case', 'Kasus terurai')
  };

  /* Experience level of a piece: lets a reader find the right depth.
     Optional; pieces without a level read as open to everyone. */
  var LEVELS = {
    foundation: L('Foundation', 'Dasar'),
    intermediate: L('Intermediate', 'Menengah'),
    advanced: L('Advanced', 'Lanjutan')
  };

  var STAGES = {
    'student': L('Student', 'Mahasiswa'),
    'fresh-graduate': L('Fresh graduate', 'Fresh graduate'),
    'early-professional': L('Early professional', 'Profesional awal'),
    'mature-professional': L('Experienced professional', 'Profesional berpengalaman')
  };

  /* Need-based doors: the hub is organized around the reader's question,
     not our internal taxonomy. Each need maps onto registry topics. */
  var NEEDS = [
    { id: 'understand', topics: ['career'], img: '../assets/m/03-climb.jpg',
      q: L('I want to understand my career', 'Aku ingin memahami karierku'),
      sub: L('Direction, transitions, paths and industry exploration.', 'Arah, transisi, jalur, dan eksplorasi industri.') },
    { id: 'hired', topics: ['recruitment'], img: '../assets/bg/gauntlet/gate-05-hr-interview.jpg',
      q: L('I want to get hired', 'Aku ingin lolos rekrutmen'),
      sub: L('CV, applications, assessments and interviews.', 'CV, lamaran, asesmen, dan wawancara.') },
    { id: 'better', topics: ['skills', 'worklife'], img: '../assets/m/04-basecamp.jpg',
      q: L('I want to become better', 'Aku ingin menjadi lebih baik'),
      sub: L('Skills, communication, habits and AI at work.', 'Keahlian, komunikasi, kebiasaan, dan AI di dunia kerja.') },
    { id: 'market', topics: ['market'], img: '../assets/opt/global-map.webp',
      q: L('I want to understand the market', 'Aku ingin memahami pasar'),
      sub: L('Industries, companies and the labour market, read honestly.', 'Industri, perusahaan, dan pasar kerja, dibaca dengan jujur.') },
    { id: 'solve', topics: ['consulting'], img: '../assets/pe/th-casestudy.jpg',
      q: L('I want to solve problems like a consultant', 'Aku ingin memecahkan masalah seperti konsultan'),
      sub: L('Structuring, estimation, case math, synthesis and case interviews.', 'Penstrukturan, estimasi, matematika kasus, sintesis, dan wawancara kasus.') }
  ];

  var AUTHOR = L('Metanoia Editorial', 'Metanoia Editorial');

  var ARTICLES = [

  /* ═══════════ RECRUITMENT ═══════════ */
  {
    slug: 'first-90-days-of-a-job-search', img: '../assets/m/02-prep.jpg', topic: 'recruitment', format: 'guide',
    stages: ['fresh-graduate', 'student'], featured: true,
    date: '2026-08-14', reviewed: '2026-08-14', minutes: 7, author: AUTHOR,
    title: L('The first 90 days of a job search, planned like a project',
             '90 hari pertama mencari kerja, direncanakan seperti proyek'),
    dek: L('Most searches fail from sequence, not effort: applications sent before the materials are ready, interviews taken before the practice. Here is the order that works.',
           'Kebanyakan pencarian kerja gagal karena urutan, bukan karena usaha: lamaran dikirim sebelum materinya siap, wawancara dijalani sebelum latihan. Ini urutan yang bekerja.'),
    what: [
      L('A job search has phases the way a construction project does, and doing them out of order is expensive. The most common pattern we see is the reverse spiral: send fifty applications in week one, get silence, lose confidence, then start fixing the CV that caused the silence, after burning the fifty most obvious targets.',
        'Pencarian kerja punya fase seperti proyek konstruksi, dan mengerjakannya di luar urutan itu mahal. Pola paling umum yang kami lihat adalah spiral terbalik: kirim lima puluh lamaran di minggu pertama, dapat keheningan, kehilangan percaya diri, lalu mulai memperbaiki CV yang menyebabkan keheningan itu, setelah menghanguskan lima puluh target paling jelas.'),
      L('The fix is not working harder. It is refusing to spend your best targets while your materials are still your worst.',
        'Solusinya bukan bekerja lebih keras, melainkan menolak menghabiskan target terbaikmu selagi materimu masih dalam kondisi terburuk.')
    ],
    why: L('Every company you apply to with weak materials is a company you usually cannot apply to again this cycle. The applicant pool is scored once; first impressions are literal.',
           'Setiap perusahaan yang kamu lamar dengan materi lemah biasanya tidak bisa dilamar lagi pada siklus yang sama. Kandidat dinilai sekali; kesan pertama berlaku harfiah.'),
    means: {
      'student': L('The same sequence wins internship hunts; aim, build materials, then apply in ranked waves, at smaller scale.',
                   'Urutan yang sama memenangkan perburuan magang; bidik, bangun materi, lalu melamar dalam gelombang berperingkat, dalam skala lebih kecil.'),
      'fresh-graduate': L('Your first cycle burns the most valuable targets fastest; plan the 90 days before sending anything.',
                          'Siklus pertamamu menghanguskan target paling berharga paling cepat; rencanakan 90 hari sebelum mengirim apa pun.')
    },
    act: [
      L('Days 1–14: aim before you fire. Decide the two or three directions you are actually pursuing (not "anything"). Write the target list: 30 companies, ranked, with the 10 best explicitly reserved for later.',
        'Hari 1–14: bidik sebelum menembak. Tentukan dua-tiga arah yang benar-benar kamu kejar (bukan "apa saja"). Susun daftar target: 30 perusahaan, berperingkat, dengan 10 terbaik sengaja disimpan untuk nanti.'),
      L('Days 15–30: build the machine. One master CV, tailored per direction, passed through an honest ATS check. One reusable interview story bank (six stories, STAR-structured). Practise the assessment types your directions actually use.',
        'Hari 15–30: bangun mesinnya. Satu CV induk, disesuaikan per arah, lolos pemeriksaan ATS yang jujur. Satu bank cerita wawancara (enam cerita, berstruktur STAR). Latih jenis asesmen yang benar-benar dipakai arah pilihanmu.'),
      L('Days 31–60: apply in ranked waves. Weeks of five to eight quality applications from the middle of your list, reviewing response rates weekly. Silence after 15+ applications is a materials problem; stop and fix, do not push through.',
        'Hari 31–60: melamar dalam gelombang berperingkat. Lima sampai delapan lamaran berkualitas per minggu dari bagian tengah daftarmu, dengan tinjauan tingkat respons mingguan. Keheningan setelah 15+ lamaran adalah masalah materi; berhenti dan perbaiki, jangan diterobos.'),
      L('Days 61–90: spend the reserve. Your ten best targets now get your best materials, warm contact where possible, and interview practice that is already weeks deep.',
        'Hari 61–90: gunakan cadanganmu. Sepuluh target terbaik kini mendapat materi terbaikmu, kontak hangat bila memungkinkan, dan latihan wawancara yang sudah berminggu-minggu dalamnya.'),
      L('Throughout: keep a decision log, not just a tracker: what you sent, what changed, what you learned. Searches compound only when they are inspected.',
        'Sepanjang proses: simpan log keputusan, bukan sekadar pelacak: apa yang dikirim, apa yang diubah, apa yang dipelajari. Pencarian kerja hanya terakumulasi bila diperiksa.')
    ],
    sources: [
      { note: L('Sequencing judgement is Metanoia’s editorial reading of recruitment-process patterns documented in our opportunity database; it is guidance, not a guarantee.',
                'Pertimbangan urutan adalah pembacaan editorial Metanoia atas pola proses rekrutmen yang terdokumentasi di basis data peluang kami; ini panduan, bukan jaminan.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('The Range (Explore) turns "two or three directions" from a guess into an investigated choice.', 'The Range (Explore) mengubah "dua-tiga arah" dari tebakan menjadi pilihan yang diselidiki.') },
      { pillar: 'the-pack', why: L('The Pack is the days 15–30 machine: CV, ATS and assessment preparation.', 'The Pack adalah mesin hari 15–30: CV, ATS, dan persiapan asesmen.') }
    ]
  },

  {
    slug: 'ats-myths-decoded', img: '../assets/bg/gauntlet/gate-02-screening.jpg', topic: 'recruitment', format: 'explainer',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-08-10', reviewed: '2026-08-10', minutes: 5, author: AUTHOR,
    title: L('What an ATS actually does with your CV', 'Apa yang sebenarnya dilakukan ATS terhadap CV-mu'),
    dek: L('Half the advice about applicant tracking systems describes software that does not exist. What the screening layer really is, and the three failures that are actually yours to fix.',
           'Separuh nasihat tentang applicant tracking system menggambarkan perangkat lunak yang tidak ada. Apa sebenarnya lapisan penyaringan itu, dan tiga kegagalan yang benar-benar bisa kamu perbaiki.'),
    what: [
      L('An ATS is, first, a filing cabinet: it stores applications, parses them into fields, and lets recruiters search. The mythical robot that "rejects 75% of CVs before a human sees them" is mostly a misreading of two real things: parsing failures (your CV became unreadable data) and knockout questions (you answered no to a requirement).',
        'ATS pertama-tama adalah lemari arsip: menyimpan lamaran, mengurainya menjadi kolom data, dan memungkinkan perekrut mencari. Robot mitos yang "menolak 75% CV sebelum dilihat manusia" sebagian besar adalah salah baca atas dua hal nyata: kegagalan parsing (CV-mu menjadi data yang tak terbaca) dan pertanyaan gugur (kamu menjawab tidak pada sebuah persyaratan).'),
      L('That distinction changes what you optimise. You are not fighting an AI judge; you are formatting for a parser and answering honestly for a filter.',
        'Perbedaan itu mengubah apa yang kamu optimalkan. Kamu tidak sedang melawan hakim AI; kamu sedang memformat untuk parser dan menjawab jujur untuk filter.')
    ],
    why: L('Time spent gaming an imaginary algorithm is time not spent on the two failures that are real, common, and completely fixable before your next application.',
           'Waktu yang dihabiskan mengakali algoritme khayalan adalah waktu yang tidak dipakai memperbaiki dua kegagalan yang nyata, umum, dan sepenuhnya bisa dibereskan sebelum lamaran berikutnya.'),
    means: {
      'student': L('Make your internship CV parseable now; the formatting habits carry into every later application.',
                   'Buat CV magangmu terbaca mesin sekarang; kebiasaan format ini terbawa ke setiap lamaran berikutnya.'),
      'fresh-graduate': L('Before blaming an algorithm for silence, run the parse check; it is usually the fixable failure.',
                          'Sebelum menyalahkan algoritme atas keheningan, jalankan uji parsing; biasanya itulah kegagalan yang bisa diperbaiki.'),
      'early-professional': L('Your experience only counts if the parser can read it, mirror the vacancy’s words for skills you actually have.',
                              'Pengalamanmu hanya dihitung jika parser bisa membacanya, cerminkan kata-kata lowongan untuk keahlian yang benar-benar kamu miliki.')
    },
    act: [
      L('Fix parseability: single column, standard section names, no text in images or headers, exported as a text-based PDF. If you can select the text in your PDF, a parser usually can too.',
        'Perbaiki keterbacaan mesin: satu kolom, nama bagian standar, tanpa teks dalam gambar atau header, diekspor sebagai PDF berbasis teks. Jika teks PDF-mu bisa diblok, parser biasanya juga bisa membacanya.'),
      L('Mirror the language of the vacancy for real skills you actually have, parsers and recruiters both search by the vacancy’s own words, not their synonyms.',
        'Cerminkan bahasa lowongan untuk keahlian yang benar-benar kamu miliki, parser dan perekrut sama-sama mencari dengan kata milik lowongan itu, bukan sinonimnya.'),
      L('Treat knockout questions as contracts, not puzzles. Answering dishonestly gets past the filter and into a verification you will fail later, with your name attached.',
        'Perlakukan pertanyaan gugur sebagai kontrak, bukan teka-teki. Jawaban tidak jujur memang lolos filter, tapi masuk ke verifikasi yang akan kamu gagalkan kemudian, dengan namamu tercatat.')
    ],
    sources: [
      { note: L('Based on the screening stages documented and inferred in Metanoia’s hiring-process database; specific vendor behaviour varies and we say so where it matters.',
                'Berdasarkan tahap penyaringan yang terdokumentasi dan tersimpulkan di basis data proses rekrutmen Metanoia; perilaku tiap vendor berbeda dan kami menyatakannya di bagian yang penting.') }
    ],
    tools: [
      { pillar: 'the-pack', why: L('The Pack’s ATS module walks your actual CV through a parse check.', 'Modul ATS di The Pack memeriksa CV-mu yang sebenarnya lewat uji parsing.') }
    ]
  },

  {
    slug: 'case-interview-anatomy', img: '../assets/bg/gauntlet/gate-04-casestudy.jpg', topic: 'recruitment', format: 'guide',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-07-28', reviewed: '2026-08-12', minutes: 6, author: AUTHOR,
    title: L('The case interview, dissected', 'Wawancara kasus, dibedah'),
    dek: L('Consulting-style cases feel like intelligence tests. They are actually structure tests, and structure is learnable in weeks, not years.',
           'Wawancara kasus ala konsultan terasa seperti tes kecerdasan. Sebenarnya ini tes struktur, dan struktur bisa dipelajari dalam hitungan minggu, bukan tahun.'),
    what: [
      L('A case interview hands you a vague business problem and watches how you make it tractable. The interviewer is not grading your answer; they are grading the shape of your thinking: did you clarify, structure, quantify, and conclude, out loud, in order, under mild pressure.',
        'Wawancara kasus memberimu masalah bisnis yang kabur dan mengamati caramu membuatnya bisa dikerjakan. Pewawancara tidak menilai jawabanmu; mereka menilai bentuk berpikirmu: apakah kamu mengklarifikasi, menstruktur, menghitung, dan menyimpulkan, bersuara, berurutan, di bawah tekanan ringan.'),
      L('This is why memorised frameworks fail: reciting a framework is the opposite of the skill being tested, which is building a small one that fits this problem.',
        'Karena itu kerangka hafalan gagal: membacakan kerangka justru kebalikan dari keahlian yang diuji, yaitu membangun kerangka kecil yang pas untuk masalah ini.')
    ],
    why: L('Case-style rounds have spread far beyond consulting, group cases and business problems appear across the management-trainee and analyst processes documented in our database.',
           'Ronde bergaya kasus sudah menyebar jauh melampaui konsultan, kasus kelompok dan masalah bisnis muncul di berbagai proses management trainee dan analis yang terdokumentasi di basis data kami.'),
    means: {
      'student': L('Start the ten-minute arithmetic habit now; fluency compounds long before your first case round.',
                   'Mulai kebiasaan aritmetika sepuluh menit sekarang, kefasihan terakumulasi jauh sebelum ronde kasus pertamamu.'),
      'fresh-graduate': L('Expect case-style rounds beyond consulting, management-trainee and analyst processes use them too.',
                          'Antisipasi ronde bergaya kasus di luar konsultan, proses management trainee dan analis juga memakainya.'),
      'early-professional': L('Your work stories are case material; practise structuring them out loud, not just recalling them.',
                              'Cerita kerjamu adalah bahan kasus; latih menstrukturkannya bersuara, bukan sekadar mengingatnya.')
    },
    act: [
      L('Learn one spine, not ten frameworks: clarify the question → state a structure with 2–4 branches → pick a branch with a reason → do the arithmetic out loud → answer the question that was asked.',
        'Pelajari satu tulang punggung, bukan sepuluh kerangka: klarifikasi pertanyaan → nyatakan struktur dengan 2–4 cabang → pilih satu cabang dengan alasan → kerjakan hitungannya bersuara → jawab pertanyaan yang memang ditanyakan.'),
      L('Drill mental arithmetic ten minutes a day; percentages, market sizing, break-evens. Fluency here buys calm everywhere else.',
        'Latih aritmetika cepat sepuluh menit sehari, persentase, ukuran pasar, titik impas. Kefasihan di sini membeli ketenangan di semua bagian lain.'),
      L('Practise live with a partner who interrupts. Solo case reading builds recognition, not performance; the skill only exists out loud.',
        'Berlatihlah langsung dengan pasangan yang berani menyela. Membaca kasus sendirian membangun pengenalan, bukan performa; keahlian ini hanya ada saat disuarakan.'),
      L('End every practice case by writing the one-sentence answer you should have opened your conclusion with. Recap is where most candidates leak.',
        'Akhiri setiap latihan dengan menulis jawaban satu kalimat yang seharusnya membuka kesimpulanmu. Rekap adalah titik bocor kebanyakan kandidat.')
    ],
    sources: [
      { note: L('Stage prevalence is from Metanoia’s hiring-process database (documented and clearly-labelled typical processes).',
                'Prevalensi tahapan berasal dari basis data proses rekrutmen Metanoia (proses terdokumentasi dan proses umum yang berlabel jelas).') }
    ],
    tools: [
      { pillar: 'the-rope', why: L('The Rope’s interview modules run the spine live, with feedback.', 'Modul wawancara The Rope melatih tulang punggung itu secara langsung, dengan umpan balik.') },
      { pillar: 'the-map', why: L('See which of your target companies actually use case rounds, in The Range (Explore).', 'Lihat perusahaan target mana yang benar-benar memakai ronde kasus, di The Range (Explore).') }
    ]
  },

  /* ═══════════ SKILLS ═══════════ */
  {
    slug: 'ai-at-work-what-to-actually-learn', img: '../assets/bg/stage-execution.jpg', topic: 'skills', format: 'guide',
    stages: ['student', 'fresh-graduate', 'early-professional', 'mature-professional'], trending: true,
    date: '2026-08-16', reviewed: '2026-08-16', minutes: 6, author: AUTHOR,
    title: L('AI at work: what to actually learn (and what to skip)',
             'AI di dunia kerja: apa yang benar-benar perlu dipelajari (dan yang bisa dilewati)'),
    dek: L('"Learn AI" is advice shaped like a shrug. The learnable, provable, durable version fits in three layers, and none of them require a computer-science degree.',
           '"Belajar AI" adalah nasihat berbentuk angkat bahu. Versi yang bisa dipelajari, dibuktikan, dan tahan lama muat dalam tiga lapisan, dan tak satu pun butuh gelar ilmu komputer.'),
    what: [
      L('Strip the hype and three durable layers remain. Layer one: working fluency, using AI tools on your actual tasks with judgement about when they are wrong. Layer two: workflow design, restructuring a process so the tool does the repetitive part and you do the accountable part. Layer three: domain grounding, knowing your field well enough to catch confident nonsense.',
        'Singkirkan hype dan tersisa tiga lapisan yang tahan lama. Lapisan satu: kefasihan kerja. Memakai alat AI pada tugas nyatamu dengan penilaian kapan alat itu keliru. Lapisan dua: perancangan alur kerja. Menyusun ulang proses supaya alat mengerjakan bagian repetitif dan kamu memegang bagian yang dipertanggungjawabkan. Lapisan tiga: pijakan domain, menguasai bidangmu cukup dalam untuk menangkap omong kosong yang percaya diri.'),
      L('Notice what is not on the list for most roles: training models, advanced mathematics, or chasing every new tool. Those matter for AI-specialist tracks, which are real but separate.',
        'Perhatikan yang tidak ada di daftar untuk kebanyakan peran: melatih model, matematika lanjut, atau mengejar setiap alat baru. Itu penting untuk jalur spesialis AI, nyata, tapi terpisah.')
    ],
    why: L('The differentiator employers describe is not tool knowledge, tools change quarterly, but the judgement to use them on real work without outsourcing responsibility for the result.',
           'Pembeda yang digambarkan pemberi kerja bukan pengetahuan alat, alat berganti tiap kuartal, melainkan penilaian untuk memakainya pada pekerjaan nyata tanpa menyerahkan tanggung jawab atas hasilnya.'),
    means: {
      'student': L('Start building AI literacy on coursework you already do; one rebuilt task beats a certificate list.',
                   'Mulai bangun literasi AI pada tugas kuliah yang sudah kamu kerjakan, satu tugas yang dibangun ulang mengalahkan daftar sertifikat.'),
      'fresh-graduate': L('Learn to demonstrate AI-enabled productivity in interviews: the task, the failure you caught, the time saved.',
                          'Belajarlah menunjukkan produktivitas berbantuan AI di wawancara: tugasnya, kegagalan yang kamu tangkap, waktu yang dihemat.'),
      'early-professional': L('Redesign one workflow you own so the tool does the repetitive part; then own the accountable part loudly.',
                              'Rancang ulang satu alur kerja milikmu agar alat mengerjakan bagian repetitif; lalu pegang bagian yang dipertanggungjawabkan dengan jelas.'),
      'mature-professional': L('Map which parts of your role are becoming automatable, and move your value toward judgement and domain depth.',
                               'Petakan bagian mana dari peranmu yang mulai bisa diotomatisasi, dan geser nilaimu ke penilaian dan kedalaman domain.')
    },
    act: [
      L('Pick one recurring task from your studies or work and rebuild it with an AI tool in the loop. Document before/after honestly, including where the tool failed. That document is interview material.',
        'Pilih satu tugas berulang dari kuliah atau pekerjaanmu dan bangun ulang dengan alat AI di dalamnya. Dokumentasikan sebelum/sesudah secara jujur, termasuk di mana alat itu gagal. Dokumen itu adalah bahan wawancara.'),
      L('Learn to verify, not just generate: for every AI output you use, know what you checked and what you would stake your name on.',
        'Belajarlah memverifikasi, bukan sekadar menghasilkan: untuk setiap keluaran AI yang kamu pakai, ketahui apa yang kamu periksa dan apa yang berani kamu pertaruhkan atas namamu.'),
      L('Anchor in one domain. "AI + something you deeply know" is a career position; "AI in general" is a feed subscription.',
        'Berjangkar pada satu domain. "AI + sesuatu yang kamu kuasai dalam" adalah posisi karier; "AI secara umum" cuma langganan linimasa.'),
      L('In interviews, demonstrate rather than declare: walk through the task you rebuilt, the failure you caught, the time you saved. Specifics beat the word "passionate".',
        'Di wawancara, tunjukkan alih-alih mengaku: ceritakan tugas yang kamu bangun ulang, kegagalan yang kamu tangkap, waktu yang kamu hemat. Detail mengalahkan kata "passionate".')
    ],
    sources: [
      { note: L('Editorial judgement from the skill demands named across roles in Metanoia’s opportunity database; we do not publish adoption statistics we cannot source.',
                'Pertimbangan editorial dari tuntutan keahlian yang disebut lintas peran di basis data peluang Metanoia; kami tidak menerbitkan statistik adopsi yang tidak bisa kami rujuk.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('See which functions in 768 companies lean on data and technology skills, in The Range (Explore).', 'Lihat fungsi mana di 768 perusahaan yang bertumpu pada keahlian data dan teknologi, di The Range (Explore).') }
    ]
  },

  {
    slug: 'portfolio-over-gpa', img: '../assets/bg/stage-foundation.jpg', topic: 'skills', format: 'perspective',
    stages: ['student', 'fresh-graduate'],
    date: '2026-08-05', reviewed: '2026-08-05', minutes: 5, author: AUTHOR,
    title: L('Two pieces of demonstrated work beat 0.2 of GPA', 'Dua karya nyata mengalahkan 0,2 poin IPK'),
    dek: L('A perspective on where marginal effort actually pays: the portfolio line most students never build, and how to build it without an employer’s permission.',
           'Sebuah perspektif tentang di mana usaha marginal benar-benar terbayar: baris portofolio yang tak pernah dibangun kebanyakan mahasiswa, dan cara membangunnya tanpa izin pemberi kerja.'),
    what: [
      L('GPA clears thresholds; it rarely wins offers. Once you pass a programme’s stated cut-off, where one exists, it is usually published, additional decimals compete weakly against a candidate who can show finished work: an analysis, a build, an event run, a system improved.',
        'IPK melewati ambang; ia jarang memenangkan tawaran. Setelah kamu melewati batas yang dinyatakan sebuah program, bila ada, biasanya dipublikasikan, tambahan desimal bersaing lemah melawan kandidat yang bisa menunjukkan karya selesai: sebuah analisis, sebuah produk, sebuah acara yang dijalankan, sebuah sistem yang diperbaiki.'),
      L('This is our reading of how assessors behave, and it has a mechanism: work samples reduce hiring risk in a way grades cannot, because they preview the actual job.',
        'Ini pembacaan kami atas perilaku penilai, dan ia punya mekanisme: contoh karya menurunkan risiko perekrutan dengan cara yang tak bisa dilakukan nilai, karena ia mempratinjau pekerjaan yang sebenarnya.')
    ],
    why: L('The hours a decimal of GPA costs are enormous at the margin. The same hours produce two portfolio pieces, and portfolio pieces compound into interview stories, while decimals do not.',
           'Jam yang dibutuhkan untuk satu desimal IPK sangat besar di titik marginal. Jam yang sama menghasilkan dua karya portofolio, dan karya portofolio berbunga menjadi cerita wawancara, sementara desimal tidak.'),
    means: {
      'student': L('Above the published thresholds, redirect marginal study-hours into two finished, visible pieces of work.',
                   'Di atas ambang terpublikasi, alihkan jam belajar marginal ke dua karya selesai yang terlihat.'),
      'fresh-graduate': L('If your GPA is set, your portfolio is the variable you still control; build proof, then narrate it.',
                          'Jika IPK-mu sudah final, portofolio adalah variabel yang masih bisa kamu kendalikan, bangun bukti, lalu ceritakan.')
    },
    act: [
      L('Protect the threshold first: know the published GPA minimums of your target programmes and stay safely above the highest one. Below threshold, GPA is the priority; above it, stop optimising.',
        'Amankan ambangnya dulu: ketahui IPK minimum terpublikasi dari program targetmu dan tetap aman di atas yang tertinggi. Di bawah ambang, IPK adalah prioritas; di atasnya, berhenti mengoptimalkan.'),
      L('Build proof in public where your field allows: a written analysis of a real company, a small tool, a documented event, a dataset cleaned and explained. Finished and visible beats ambitious and private.',
        'Bangun bukti secara terbuka bila bidangmu memungkinkan: analisis tertulis atas perusahaan nyata, alat kecil, acara yang terdokumentasi, dataset yang dibersihkan dan dijelaskan. Selesai dan terlihat mengalahkan ambisius tapi tersimpan.'),
      L('Convert each piece into one interview story with numbers in it. Work you cannot narrate under pressure is work that does not exist in the room.',
        'Ubah tiap karya menjadi satu cerita wawancara yang memuat angka. Karya yang tak bisa kamu ceritakan di bawah tekanan adalah karya yang tidak hadir di ruangan itu.')
    ],
    sources: [
      { note: L('Published GPA thresholds referenced here are the sourced eligibility rules in Metanoia’s database (e.g. state-owned joint recruitment). The relative-weight claim is editorial judgement, marked as such.',
                'Ambang IPK terpublikasi yang dirujuk di sini adalah aturan kelayakan bersumber di basis data Metanoia (mis. rekrutmen bersama BUMN). Klaim bobot relatif adalah pertimbangan editorial, dan ditandai demikian.') }
    ],
    tools: [
      { pillar: 'the-pack', why: L('The Pack turns portfolio pieces into application evidence.', 'The Pack mengubah karya portofolio menjadi bukti lamaran.') }
    ]
  },

  {
    slug: 'skills-employers-test-2026', img: '../assets/bg/gauntlet/gate-03-assessment.jpg', topic: 'skills', format: 'explainer',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-07-20', reviewed: '2026-08-12', minutes: 5, author: AUTHOR,
    title: L('What entry-level hiring actually tests', 'Apa yang benar-benar diuji rekrutmen level awal'),
    dek: L('Read enough hiring processes side by side and a short list of tested capabilities emerges, shorter, and stranger, than the skills lists in most vacancies.',
           'Baca cukup banyak proses rekrutmen secara berdampingan dan muncullah daftar pendek kapabilitas yang diuji, lebih pendek, dan lebih aneh, daripada daftar keahlian di kebanyakan lowongan.'),
    what: [
      L('Vacancy texts list aspirations; assessment stages reveal priorities. Across the processes in our database, entry-level stages cluster around a handful of tested things: structured communication (can you say something in order), numeracy under mild pressure, behavioural evidence (did you actually do what you claim), collaboration in group settings, and learning agility signals in rotational programmes.',
        'Teks lowongan memuat aspirasi; tahap asesmen mengungkap prioritas. Di seluruh proses dalam basis data kami, tahap level awal mengelompok pada segelintir hal yang diuji: komunikasi terstruktur (bisakah kamu berbicara berurutan), kecakapan angka di bawah tekanan ringan, bukti perilaku (benarkah kamu melakukan yang kamu klaim), kolaborasi dalam kelompok, dan sinyal kelincahan belajar pada program rotasi.'),
      L('Domain skills appear too, but typically as a screen, not the differentiator. The differentiators are the transferable five above, which is why they are worth deliberate practice.',
        'Keahlian domain juga muncul, tetapi biasanya sebagai penyaring, bukan pembeda. Pembedanya adalah lima kemampuan lintas bidang di atas, dan karena itu layak dilatih secara sengaja.')
    ],
    why: L('Preparation time is finite. Aiming it at what stages test, rather than at everything a vacancy lists, is the highest-leverage reallocation most candidates can make.',
           'Waktu persiapan itu terbatas. Mengarahkannya pada yang diuji tiap tahap, bukan pada semua yang tercantum di lowongan, adalah realokasi paling berdaya ungkit yang bisa dilakukan kebanyakan kandidat.'),
    means: {
      'student': L('Practise the transferable five before your first process, structure, numeracy and stories are trainable now.',
                   'Latih lima kemampuan lintas bidang sebelum proses pertamamu, struktur, kecakapan angka, dan cerita bisa dilatih sekarang.'),
      'fresh-graduate': L('Prepare stage by stage, not vacancy by vacancy; six verifiable stories cover most behavioural rounds.',
                          'Bersiaplah per tahap, bukan per lowongan, enam cerita terverifikasi mencakup sebagian besar ronde perilaku.'),
      'early-professional': L('Assessments reappear at every switch; keep the story bank current with dated, numbered wins.',
                              'Asesmen muncul lagi di setiap perpindahan; jaga bank cerita tetap mutakhir dengan pencapaian bertanggal dan berangka.')
    },
    act: [
      L('Map your target companies’ stages first (documented where available, clearly-labelled typical otherwise), then prepare stage by stage instead of vacancy by vacancy.',
        'Petakan dulu tahapan perusahaan targetmu (terdokumentasi bila tersedia, berlabel "umum" bila tidak), lalu bersiap per tahap alih-alih per lowongan.'),
      L('Build six behavioural stories with verifiable specifics. The behavioural interview is the most common stage in our database, and the cheapest to prepare well.',
        'Bangun enam cerita perilaku dengan detail yang bisa diverifikasi. Wawancara perilaku adalah tahap paling umum di basis data kami, dan yang paling murah untuk disiapkan dengan baik.'),
      L('Practise speaking in structures: answer practice questions in numbered points, out loud. Structure under pressure is a habit, not a talent.',
        'Latih berbicara dalam struktur: jawab pertanyaan latihan dalam poin bernomor, bersuara. Struktur di bawah tekanan adalah kebiasaan, bukan bakat.')
    ],
    sources: [
      { note: L('Stage clustering is computed from Metanoia’s hiring-process database; the interpretation of what stages test is our reading.',
                'Pengelompokan tahap dihitung dari basis data proses rekrutmen Metanoia; tafsir atas apa yang diuji tiap tahap adalah pembacaan kami.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('Open any company in The Range (Explore) to see its stages and what each assesses.', 'Buka perusahaan mana pun di The Range (Explore) untuk melihat tahapannya dan apa yang dinilai masing-masing.') },
      { pillar: 'the-rope', why: L('The Rope drills the interview stages themselves.', 'The Rope melatih tahap-tahap wawancaranya sendiri.') }
    ]
  }
  ];

  /* ═══════════ CAREER ═══════════ */
  ARTICLES.push(
  {
    slug: 'choosing-a-first-industry', img: '../assets/bg/stage-exploration.jpg', topic: 'career', format: 'guide',
    stages: ['student', 'fresh-graduate'], featured: 'secondary',
    date: '2026-08-08', reviewed: '2026-08-08', minutes: 6, author: AUTHOR,
    title: L('Choosing a first industry when everything looks the same',
             'Memilih industri pertama saat semuanya tampak sama'),
    dek: L('From outside, industries blur into logos and salaries. Three questions separate them fast, and none of them is "what is prestigious".',
           'Dari luar, industri melebur menjadi logo dan gaji. Tiga pertanyaan memisahkan mereka dengan cepat, dan tak satu pun berbunyi "mana yang bergengsi".'),
    what: [
      L('First-industry choice matters less as destiny and more as curriculum: your first industry decides what you get good at by default. Banking teaches regulated precision; FMCG teaches brand and distribution mechanics; tech teaches shipping under iteration; consulting teaches structured problem intake.',
        'Pilihan industri pertama tidak terlalu penting sebagai takdir, tapi sangat penting sebagai kurikulum: industri pertamamu menentukan kamu otomatis mahir di hal apa. Perbankan mengajarkan presisi teregulasi; FMCG mengajarkan mekanika merek dan distribusi; teknologi mengajarkan merilis dalam iterasi; konsultan mengajarkan penstrukturan masalah.'),
      L('Because it is curriculum, the question flips: not "which industry is best" but "which default skills do I want compounding first, in what pace of environment, with what trade-offs I can live with".',
        'Karena ia kurikulum, pertanyaannya berbalik: bukan "industri mana yang terbaik" melainkan "keahlian bawaan mana yang ingin kutumbuhkan lebih dulu, dalam ritme lingkungan seperti apa, dengan kompromi apa yang sanggup kujalani".')
    ],
    why: L('People rarely regret an industry; they regret discovering its trade-offs after joining. Every industry’s trade-offs are knowable in advance; they are just rarely asked about.',
           'Orang jarang menyesali industri; mereka menyesal menemukan kompromi industri itu setelah bergabung. Kompromi setiap industri bisa diketahui di muka, hanya saja jarang ditanyakan.'),
    means: {
      'student': L('Use internships to test the curriculum question cheaply; one semester can rule an industry in or out.',
                   'Gunakan magang untuk menguji pertanyaan kurikulum dengan murah; satu semester bisa memasukkan atau mencoret sebuah industri.'),
      'fresh-graduate': L('Pick the default skills you want compounding first; then investigate two industries one level deeper.',
                          'Pilih keahlian bawaan yang ingin kamu tumbuhkan lebih dulu; lalu selidiki dua industri satu tingkat lebih dalam.')
    },
    act: [
      L('Ask the curriculum question: list the three skills each candidate industry would build in you by default in two years. Choose the list you want to own.',
        'Ajukan pertanyaan kurikulum: tulis tiga keahlian yang otomatis dibangun tiap industri kandidat dalam dua tahun. Pilih daftar yang ingin kamu miliki.'),
      L('Ask the trade-off question early, hours, mobility, intensity, pace. Investigate them per direction rather than discovering them per employer.',
        'Ajukan pertanyaan kompromi sejak awal, jam kerja, mobilitas, intensitas, ritme. Selidiki per arah, jangan menemukannya per pemberi kerja.'),
      L('Ask the exit question: where do people in this industry go after three years? An industry is also a network and a resale value.',
        'Ajukan pertanyaan keluar: ke mana orang-orang industri ini pergi setelah tiga tahun? Industri juga berarti jejaring dan nilai jual berikutnya.'),
      L('Then investigate two, not ten: pick two candidate industries and go one level deeper, real companies, real hiring processes, real day-in-the-life, before deciding.',
        'Lalu selidiki dua, bukan sepuluh: pilih dua industri kandidat dan turun satu tingkat lebih dalam, perusahaan nyata, proses rekrutmen nyata, gambaran hari kerja nyata, sebelum memutuskan.')
    ],
    sources: [
      { note: L('Industry skill-curricula and trade-offs summarised from the direction profiles in Metanoia’s career graph, which state trade-offs explicitly.',
                'Kurikulum keahlian dan kompromi industri dirangkum dari profil arah dalam grafik karier Metanoia, yang menyatakan kompromi secara eksplisit.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('The Range (Explore) holds the day-in-the-life, trade-offs and hiring reality for 25 directions and 768 companies.', 'The Range (Explore) memuat gambaran hari kerja, kompromi, dan realitas rekrutmen untuk 25 arah dan 768 perusahaan.') }
    ]
  },
  {
    slug: 'career-pivot-readiness', img: '../assets/m/06-horizon.jpg', topic: 'career', format: 'explainer',
    stages: ['early-professional', 'mature-professional'],
    date: '2026-07-15', reviewed: '2026-08-10', minutes: 6, author: AUTHOR,
    title: L('Ready to pivot, or just tired? A diagnostic', 'Siap pindah jalur, atau hanya lelah? Sebuah diagnosis'),
    dek: L('Half of career-change urges are actually job-change urges, and a quarter are rest deficits. A framework for telling them apart before you pay switching costs.',
           'Separuh dorongan ganti karier sebenarnya dorongan ganti pekerjaan, dan seperempatnya defisit istirahat. Kerangka untuk membedakannya sebelum kamu membayar biaya perpindahan.'),
    what: [
      L('A pivot is expensive: you trade accumulated seniority, network, and pattern-recognition for a beginner’s position in all three. Sometimes that trade is right. But the feeling that triggers pivot research, dread on Sunday night, meetings that feel pointless, is produced equally by three cheaper problems: the wrong manager, the wrong company, or plain depletion.',
        'Pindah jalur itu mahal: kamu menukar senioritas, jejaring, dan intuisi pola yang terakumulasi dengan posisi pemula di ketiganya. Kadang penukaran itu tepat. Tapi perasaan yang memicu riset pindah jalur, rasa berat di Minggu malam, rapat yang terasa hampa, sama-sama bisa dihasilkan tiga masalah yang lebih murah: manajer yang salah, perusahaan yang salah, atau sekadar kehabisan tenaga.'),
      L('The diagnostic: would the dread survive a great manager, a healthier company, and a real holiday? Only a yes to all three points at the work itself, and only then is a pivot the right instrument.',
        'Diagnosisnya: apakah rasa berat itu tetap ada dengan manajer hebat, perusahaan lebih sehat, dan liburan sungguhan? Hanya jika ketiganya ya, masalahnya ada pada pekerjaan itu sendiri, dan barulah pindah jalur menjadi instrumen yang tepat.')
    ],
    why: L('Mis-diagnosed pivots repeat: the same dread reappears in the new field once its novelty fades, now with the switching costs already paid.',
           'Pindah jalur yang salah diagnosis akan berulang: rasa berat yang sama muncul lagi di bidang baru begitu kebaruannya pudar, dengan biaya perpindahan yang telanjur dibayar.'),
    means: {
      'early-professional': L('Run the three-substitution test before paying switching costs; most dread has a cheaper cause.',
                              'Jalankan uji tiga substitusi sebelum membayar biaya perpindahan; kebanyakan rasa berat punya penyebab yang lebih murah.'),
      'mature-professional': L('If the work itself fails the test, pivot by adjacency: keep industry or function, change the other.',
                               'Jika pekerjaannya sendiri gagal dalam uji itu, berpindahlah secara bersebelahan: pertahankan industri atau fungsi, ubah yang lain.')
    },
    act: [
      L('Run the three-substitution test honestly, in writing. Manager, company, rest, cheapest first.',
        'Jalankan uji tiga substitusi dengan jujur, secara tertulis. Manajer, perusahaan, istirahat, yang termurah lebih dulu.'),
      L('If the work itself fails the test, pivot toward adjacency: keep one of {industry, function} and change the other. Double changes are where pivots stall.',
        'Jika pekerjaannya sendiri yang gagal dalam uji itu, berpindahlah ke arah bersebelahan: pertahankan salah satu dari {industri, fungsi} dan ubah yang lain. Perubahan ganda adalah tempat pivot macet.'),
      L('Prototype before you resign: one project, one course applied to a real deliverable, three conversations with people two years into the target field. Evidence first, resignation letter later.',
        'Prototipekan sebelum mengundurkan diri: satu proyek, satu kursus yang diterapkan pada hasil nyata, tiga percakapan dengan orang yang sudah dua tahun di bidang target. Bukti dulu, surat pengunduran diri belakangan.')
    ],
    sources: [
      { note: L('Editorial framework; the adjacency observation reflects the function-and-industry structure of Metanoia’s career graph.',
                'Kerangka editorial; observasi kedekatan mencerminkan struktur fungsi-dan-industri dalam grafik karier Metanoia.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('Rebuild your Career Identity in The Map and let the evidence argue with your assumptions.', 'Bangun ulang Identitas Karier di The Map dan biarkan bukti berdebat dengan asumsimu.') }
    ]
  });

  /* ═══════════ MARKET ═══════════ */
  ARTICLES.push(
  {
    slug: 'management-trainee-programmes-explained', img: '../assets/bg/stage-activation.jpg', topic: 'market', format: 'explainer',
    stages: ['student', 'fresh-graduate'],
    date: '2026-08-02', reviewed: '2026-08-15', minutes: 6, author: AUTHOR,
    title: L('Management-trainee programmes, explained without the brochure',
             'Program management trainee, dijelaskan tanpa brosur'),
    dek: L('MT programmes are Indonesia’s structured fast lane into management, and a two-year commitment with fine print. What the rotation model really buys, and costs.',
           'Program MT adalah jalur cepat terstruktur menuju manajemen di Indonesia, sekaligus komitmen dua tahun dengan syarat kecil-kecil. Apa yang benar-benar dibeli model rotasi, dan harganya.'),
    what: [
      L('The model: two years, several rotations across functions, a project per rotation presented upward, then placement. Companies run it to grow generalist managers with cross-functional networks; that is also exactly what it trains you to be.',
        'Modelnya: dua tahun, beberapa rotasi lintas fungsi, satu proyek per rotasi yang dipresentasikan ke atasan, lalu penempatan. Perusahaan menjalankannya untuk menumbuhkan manajer generalis dengan jejaring lintas fungsi; persis itu pula yang dilatihkannya padamu.'),
      L('The fine print worth reading twice: placement after rotation is usually the company’s call, not yours; rotations can land in cities and functions you did not choose; and state-owned joint recruitment carries published, sourced eligibility rules, including age caps and GPA minimums, that are checkable before you apply.',
        'Syarat kecil yang layak dibaca dua kali: penempatan setelah rotasi biasanya keputusan perusahaan, bukan kamu; rotasi bisa jatuh di kota dan fungsi yang tidak kamu pilih; dan rekrutmen bersama BUMN memuat aturan kelayakan terpublikasi dan bersumber, termasuk batas usia dan IPK minimum, yang bisa dicek sebelum melamar.')
    ],
    why: L('MT tracks appear across banking, FMCG, telecommunications and state-owned enterprises in our database, for many fresh graduates they are the single most common structured entry point, which makes their trade-offs everyone’s business.',
           'Jalur MT muncul di perbankan, FMCG, telekomunikasi, dan BUMN dalam basis data kami, bagi banyak fresh graduate ini titik masuk terstruktur paling umum, sehingga kompromi-kompromnya penting bagi semua orang.'),
    means: {
      'student': L('Check the published eligibility rules early, age caps and GPA minimums are set before you graduate.',
                   'Periksa aturan kelayakan terpublikasi sejak awal, batas usia dan IPK minimum sudah ditetapkan sebelum kamu lulus.'),
      'fresh-graduate': L('Choose MT for deliberate breadth; if you already know your function, direct entry often compounds faster.',
                          'Pilih MT untuk keluasan yang disengaja; jika sudah tahu fungsimu, masuk langsung sering bertumbuh lebih cepat.')
    },
    act: [
      L('Choose MT for breadth-before-depth on purpose, not because the brochure was shiny. If you already know your function, a direct functional entry often compounds faster.',
        'Pilih MT untuk keluasan-sebelum-kedalaman secara sengaja, bukan karena brosurnya mengilap. Jika kamu sudah tahu fungsimu, masuk langsung ke fungsi sering bertumbuh lebih cepat.'),
      L('Check the sourced eligibility rules before investing weeks: age caps and GPA thresholds for state-owned joint recruitment are published and non-negotiable.',
        'Periksa aturan kelayakan bersumber sebelum menginvestasikan waktu berminggu-minggu: batas usia dan ambang IPK rekrutmen bersama BUMN dipublikasikan dan tidak bisa dinegosiasikan.'),
      L('Interrogate placement: in the interview, ask how placement is decided and what last year’s cohort looks like now. A programme that answers precisely is telling you something; so is one that does not.',
        'Selidiki penempatan: di wawancara, tanyakan bagaimana penempatan diputuskan dan seperti apa angkatan tahun lalu sekarang. Program yang menjawab presisi sedang memberitahumu sesuatu; yang tidak menjawab juga.')
    ],
    sources: [
      { label: 'FHCI: Rekrutmen Bersama BUMN (official)', url: 'https://rekrutmenbersama.fhcibumn.id' },
      { note: L('Eligibility figures cited are the sourced rules in Metanoia’s database; programme-specific details always defer to the official page.',
                'Angka kelayakan yang dikutip adalah aturan bersumber di basis data Metanoia; detail spesifik program selalu mengacu ke laman resmi.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('The Range (Explore) lists MT tracks per company with documented or clearly-labelled typical stages.', 'The Range (Explore) memuat jalur MT per perusahaan dengan tahapan terdokumentasi atau berlabel umum.') },
      { pillar: 'the-rope', why: L('Group cases and panel interviews, the MT staples, are The Rope’s home ground.', 'Kasus kelompok dan wawancara panel, menu utama MT, adalah wilayah The Rope.') }
    ]
  },
  {
    slug: 'reading-a-company-before-you-apply', img: '../assets/for-enterprise-image.jpg', topic: 'market', format: 'guide',
    stages: ['student', 'fresh-graduate', 'early-professional', 'mature-professional'],
    date: '2026-07-24', reviewed: '2026-08-12', minutes: 5, author: AUTHOR,
    title: L('How to read a company in one evening', 'Cara membaca sebuah perusahaan dalam satu malam'),
    dek: L('Company research is not collecting facts; it is answering four questions. A repeatable evening routine that beats a week of unfocused tabs.',
           'Riset perusahaan bukan mengumpulkan fakta, melainkan menjawab empat pertanyaan. Rutinitas satu malam yang mengalahkan seminggu tab yang tak terarah.'),
    what: [
      L('Candidates over-research breadth and under-research the four things that change decisions: How does this company make money? What is it betting on next? What would I actually do all day? And how does it treat the people who do that?',
        'Kandidat kebanyakan meriset lebar dan kekurangan meriset empat hal yang mengubah keputusan: Bagaimana perusahaan ini menghasilkan uang? Apa taruhannya berikutnya? Apa yang benar-benar akan kukerjakan seharian? Dan bagaimana ia memperlakukan orang-orang yang mengerjakannya?'),
      L('Each question has a best source: annual reports and investor pages for the money; official announcements for the bets; job descriptions read closely (the verbs, not the adjectives) for the work; and the texture of employee accounts, read critically, plural, never one review, for the treatment.',
        'Tiap pertanyaan punya sumber terbaik: laporan tahunan dan laman investor untuk uangnya; pengumuman resmi untuk taruhannya; deskripsi pekerjaan yang dibaca cermat (kata kerjanya, bukan kata sifatnya) untuk pekerjaannya; dan tekstur cerita karyawan, dibaca kritis, jamak, jangan satu ulasan, untuk perlakuannya.')
    ],
    why: L('Interviewers can tell within minutes whether your research answered questions or collected trivia, and your own decision quality depends on the same four answers.',
           'Pewawancara bisa tahu dalam hitungan menit apakah risetmu menjawab pertanyaan atau mengoleksi trivia, dan kualitas keputusanmu sendiri bergantung pada empat jawaban yang sama.'),
    means: {
      'student': L('Run the four boxes on employers at career fairs; one page beats a stack of brochures.',
                   'Jalankan empat kotak pada pemberi kerja di bursa karier; satu halaman mengalahkan setumpuk brosur.'),
      'fresh-graduate': L('Do the evening routine before every application in your top ten, it doubles as interview preparation.',
                          'Jalankan rutinitas satu malam sebelum tiap lamaran di sepuluh besar targetmu, sekaligus menjadi persiapan wawancara.'),
      'early-professional': L('Apply the same four questions to your own employer yearly; box two tells you whether to stay.',
                              'Terapkan empat pertanyaan yang sama pada pemberi kerjamu sendiri tiap tahun, kotak kedua memberitahumu layak bertahan atau tidak.'),
      'mature-professional': L('At senior levels, box two is the interview: come with a view on the company’s next bet.',
                               'Di level senior, kotak kedua adalah wawancaranya: datanglah dengan pandangan tentang taruhan berikutnya perusahaan.')
    },
    act: [
      L('One evening, four boxes, one page. Write a sentence per question; if you cannot, that is your remaining research, precisely scoped.',
        'Satu malam, empat kotak, satu halaman. Tulis satu kalimat per pertanyaan; jika tidak bisa, itulah sisa risetmu, dengan cakupan yang presisi.'),
      L('Turn box two into your interview question: asking a specific question about the company’s next bet outperforms every generic "what is the culture like".',
        'Ubah kotak kedua menjadi pertanyaan wawancaramu: bertanya spesifik tentang taruhan berikutnya perusahaan mengalahkan semua pertanyaan generik "budayanya seperti apa".'),
      L('Date your notes. Companies change; research from last year is a rumour about the present.',
        'Beri tanggal catatanmu. Perusahaan berubah; riset tahun lalu adalah rumor tentang masa kini.')
    ],
    sources: [
      { note: L('Method piece; no external claims. Company data in Metanoia products carries its own provenance labels.',
                'Artikel metode; tanpa klaim eksternal. Data perusahaan di produk Metanoia membawa label sumbernya sendiri.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('Company pages in The Range (Explore) pre-answer the hiring-process half of the evening.', 'Halaman perusahaan di The Range (Explore) sudah menjawab separuh malam soal proses rekrutmen.') }
    ]
  });

  /* ═══════════ WORKLIFE ═══════════ */
  ARTICLES.push(
  {
    slug: 'first-year-professional-etiquette', img: '../assets/bg/stage-graduation.jpg', topic: 'worklife', format: 'guide',
    stages: ['fresh-graduate', 'early-professional'],
    date: '2026-08-06', reviewed: '2026-08-06', minutes: 5, author: AUTHOR,
    title: L('The unwritten rules of a first year, written down', 'Aturan tak tertulis tahun pertama, dituliskan'),
    dek: L('Nobody fails a first year on competence alone. The habits that quietly build or burn trust, made explicit so they stop being a lottery.',
           'Tak ada yang gagal di tahun pertama karena kompetensi semata. Kebiasaan yang diam-diam membangun atau membakar kepercayaan; dibuat eksplisit agar berhenti menjadi lotre.'),
    what: [
      L('First-year reputations are built from small repeated signals: whether your messages can be answered in one read, whether deadlines slip silently or with warning, whether feedback produces visible change, whether you bring problems with a proposed option attached.',
        'Reputasi tahun pertama dibangun dari sinyal kecil yang berulang: apakah pesanmu bisa dijawab sekali baca, apakah tenggat meleset diam-diam atau dengan peringatan, apakah umpan balik menghasilkan perubahan terlihat, apakah kamu membawa masalah beserta usulan pilihan.'),
      L('None of this is personality. It is a small set of habits, all learnable, most invisible in job descriptions and decisive in performance conversations.',
        'Tak satu pun dari ini soal kepribadian. Ini sekumpulan kecil kebiasaan, semuanya bisa dipelajari, kebanyakan tak terlihat di deskripsi pekerjaan dan menentukan dalam percakapan kinerja.')
    ],
    why: L('Trust is the currency that buys interesting work. Interesting work is what builds the skills that build a career. The chain starts with etiquette, which is why it is not trivial.',
           'Kepercayaan adalah mata uang yang membeli pekerjaan menarik. Pekerjaan menarik membangun keahlian yang membangun karier. Rantainya dimulai dari etiket; karena itu ia tidak sepele.'),
    means: {
      'fresh-graduate': L('Install the four habits in month one; reputations set early and compound either way.',
                          'Pasang empat kebiasaan itu di bulan pertama, reputasi terbentuk sejak awal dan terakumulasi ke arah mana pun.'),
      'early-professional': L('Audit which loops you close loudly and which slip silently; the gap is your reputation risk.',
                              'Audit siklus mana yang kamu tutup dengan jelas dan mana yang meleset diam-diam, celah itulah risiko reputasimu.')
    },
    act: [
      L('Close loops loudly: every task ends with a message saying it ended, what changed, and where the result lives.',
        'Tutup setiap siklus dengan jelas: tiap tugas diakhiri pesan yang menyatakan tugas selesai, apa yang berubah, dan di mana hasilnya berada.'),
      L('Escalate early with options: "X will be late because Y; I can do A or B; which do you prefer?" beats every silent miracle attempt.',
        'Eskalasikan lebih awal dengan opsi: "X akan terlambat karena Y; aku bisa lakukan A atau B; mana yang kamu pilih?" mengalahkan semua usaha keajaiban diam-diam.'),
      L('Convert feedback within the week, visibly, and say so once: "You mentioned my summaries ramble; here is the one-paragraph version." Once is confident; every time is performative.',
        'Terapkan umpan balik dalam minggu itu juga, secara terlihat, dan sebut sekali: "Kemarin katanya ringkasanku bertele-tele; ini versi satu paragrafnya." Sekali itu percaya diri; tiap kali itu pencitraan.'),
      L('Keep a brag document from day one: dated wins with numbers. Your future performance review, salary conversation, and CV all draw from it.',
        'Simpan catatan pencapaian sejak hari pertama: kemenangan bertanggal dengan angka. Tinjauan kinerja, negosiasi gaji, dan CV-mu kelak menarik dari sana.')
    ],
    sources: [
      { note: L('Editorial guidance drawn from the workplace-habits curriculum of Metanoia’s preparation pillars.',
                'Panduan editorial yang ditarik dari kurikulum kebiasaan kerja di pilar persiapan Metanoia.') }
    ],
    tools: [
      { pillar: 'the-rope', why: L('The Rope’s communication modules train the loop-closing and escalation habits live.', 'Modul komunikasi The Rope melatih kebiasaan menutup siklus dan eskalasi secara langsung.') }
    ]
  },
  {
    slug: 'networking-without-cringe', img: '../assets/bg/rope-team.jpg', topic: 'worklife', format: 'guide',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-07-18', reviewed: '2026-08-08', minutes: 5, author: AUTHOR,
    title: L('Networking for people who hate networking', 'Membangun jejaring bagi yang benci networking'),
    dek: L('The transactional version deserves the cringe. The working version is specific curiosity plus light bookkeeping, and introverts are often better at it.',
           'Versi transaksionalnya memang pantas bikin jengah. Versi yang bekerja adalah rasa ingin tahu yang spesifik plus pembukuan ringan, dan introver sering lebih mahir.'),
    what: [
      L('Strip networking of its costume and it is three moves: ask a specific person a specific question they are well placed to answer; make the interaction cost them almost nothing; and keep enough notes to honour the thread later. That is the whole machine.',
        'Lepaskan kostum networking dan tersisa tiga gerakan: ajukan pertanyaan spesifik kepada orang spesifik yang memang tepat menjawabnya; buat interaksi itu nyaris tanpa biaya bagi mereka; dan simpan catatan secukupnya untuk menghormati benang itu di kemudian hari. Itu seluruh mesinnya.'),
      L('"Can I pick your brain" fails all three: unspecific, unbounded, and forgettable. "You moved from audit to data in 2024; what did you have to unlearn?" succeeds at all three in one sentence.',
        '"Boleh minta waktunya sharing-sharing?" gagal di ketiganya: tak spesifik, tak berbatas, dan terlupakan. "Kak, dulu pindah dari audit ke data di 2024; apa yang harus di-unlearn?" berhasil di ketiganya dalam satu kalimat.')
    ],
    why: L('Most opportunity moves through people before it reaches any portal, not as corruption but as trust reducing hiring risk. Being findable and specific is how you enter that flow honestly.',
           'Sebagian besar peluang mengalir lewat orang sebelum tiba di portal mana pun, bukan sebagai kecurangan, melainkan karena kepercayaan menurunkan risiko perekrutan. Menjadi mudah ditemukan dan spesifik adalah cara masuk ke aliran itu secara jujur.'),
    means: {
      'student': L('Two specific questions a month, starting with alumni; the ledger you keep now is a career asset.',
                   'Dua pertanyaan spesifik per bulan, mulai dari alumni; buku besar yang kamu simpan sekarang adalah aset karier.'),
      'fresh-graduate': L('Aim questions at people two years ahead of you; they remember the gap you are standing in.',
                          'Arahkan pertanyaan ke orang yang dua tahun di depanmu; mereka masih ingat jurang tempatmu berdiri sekarang.'),
      'early-professional': L('Start answering as well as asking; being findable and generous enters you into the flow from the other side.',
                              'Mulailah menjawab, bukan hanya bertanya; menjadi mudah ditemukan dan murah hati memasukkanmu ke aliran itu dari sisi lain.')
    },
    act: [
      L('Two specific questions to two relevant people per month. Sustainable and compounding beats a burst of fifty connection requests.',
        'Dua pertanyaan spesifik kepada dua orang relevan per bulan. Berkelanjutan dan terakumulasi mengalahkan ledakan lima puluh permintaan koneksi.'),
      L('Close every thread with the outcome: people who learn their advice was used become advocates; advice into the void becomes a reason to ignore you.',
        'Tutup setiap benang dengan hasilnya: orang yang tahu sarannya dipakai menjadi pendukung; saran yang lenyap ke kehampaan menjadi alasan mengabaikanmu.'),
      L('Keep a ten-line ledger: who, when, what was said, what you owe. Memory is not a system.',
        'Simpan buku besar sepuluh baris: siapa, kapan, apa yang dibicarakan, apa utangmu. Ingatan bukan sistem.')
    ],
    sources: [
      { note: L('Editorial method piece; no statistics claimed.', 'Artikel metode editorial; tanpa klaim statistik.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('Use The Range (Explore) to find which functions and companies your questions should aim at.', 'Gunakan The Range (Explore) untuk menemukan fungsi dan perusahaan yang layak jadi sasaran pertanyaanmu.') }
    ]
  });

  /* ═══════════ DATA (market, own-database piece) ═══════════ */
  ARTICLES.push({
    slug: 'what-675-companies-tell-us', img: '../assets/bg/map.jpg', topic: 'market', format: 'data',
    stages: ['student', 'fresh-graduate', 'early-professional', 'mature-professional'], featured: 'secondary', trending: true,
    date: '2026-08-17', reviewed: '2026-08-17', minutes: 4, author: AUTHOR,
    title: L('What 768 companies tell us about where the doors are', 'Yang diceritakan 768 perusahaan tentang letak pintu-pintu masuk'),
    dek: L('We read the entry routes of every company in the Metanoia opportunity database. The shape of the result says more than any single vacancy board.',
           'Kami membaca jalur masuk setiap perusahaan di basis data peluang Metanoia. Bentuk hasilnya bercerita lebih banyak daripada papan lowongan mana pun.'),
    what: [
      L('This piece is computed live from Metanoia’s own opportunity database, the same data behind The Range (Explore), so every number below is checkable inside the product. It is a map of our database, and only of our database: a curated view of commonly-targeted employers, not a census of the labour market.',
        'Artikel ini dihitung langsung dari basis data peluang milik Metanoia, data yang sama di balik The Range (Explore), sehingga setiap angka di bawah bisa diperiksa di dalam produk. Ini peta basis data kami, dan hanya basis data kami: kurasi pemberi kerja yang umum dibidik, bukan sensus pasar kerja.'),
      L('Three shapes stand out. Function doors are unevenly distributed: finance, operations and data roles appear across nearly every industry, while design and product concentrate in technology. Trainee tracks cluster in Indonesian banking, FMCG and state-owned enterprises. And documented hiring processes remain rare; most companies publish nothing, which is why provenance labels matter.',
        'Tiga bentuk menonjol. Pintu fungsi tersebar tidak merata: peran keuangan, operasional, dan data muncul di hampir semua industri, sementara desain dan produk terkonsentrasi di teknologi. Jalur trainee mengelompok di perbankan Indonesia, FMCG, dan BUMN. Dan proses rekrutmen terdokumentasi tetap langka; kebanyakan perusahaan tidak memublikasikan apa pun, itulah mengapa label sumber penting.')
    ],
    why: L('If your target function only has doors in certain industries, that is worth knowing before you aim, and if a function opens doors everywhere, it is a more resilient first skill-set than its glamour suggests.',
           'Jika fungsi targetmu hanya punya pintu di industri tertentu, itu layak diketahui sebelum membidik, dan jika sebuah fungsi membuka pintu di mana-mana, ia bekal awal yang lebih tangguh daripada kesan gemerlapnya.'),
    means: {
      'student': L('Count the doors of the function you are studying toward; breadth now is pivot insurance later.',
                   'Hitung pintu fungsi yang sedang kamu tuju lewat kuliah; keluasan sekarang adalah asuransi pivot kelak.'),
      'fresh-graduate': L('Target the industries where your function’s doors actually are, not just where its glamour is.',
                          'Bidik industri tempat pintu fungsimu benar-benar berada, bukan sekadar tempat gemerlapnya.'),
      'early-professional': L('Function breadth prices your pivot: moving within a wide function costs less than changing function.',
                              'Keluasan fungsi menentukan harga pivotmu: berpindah di dalam fungsi yang luas lebih murah daripada berganti fungsi.'),
      'mature-professional': L('Wide-door functions read as resilient seniority; narrow ones concentrate risk in one industry’s cycle.',
                               'Fungsi berpintu lebar berarti senioritas yang tangguh, fungsi sempit memusatkan risiko pada siklus satu industri.')
    },
    act: [
      L('Read the chart below against your own target function: count its doors, note its industries.',
        'Baca grafik di bawah terhadap fungsi targetmu sendiri: hitung pintunya, catat industrinya.'),
      L('Treat function breadth as career insurance: if two directions attract you equally, the one with doors in more industries costs less to pivot from later.',
        'Perlakukan keluasan fungsi sebagai asuransi karier: jika dua arah sama menariknya, arah dengan pintu di lebih banyak industri lebih murah untuk ditinggalkan kelak.'),
      L('Open any bar in The Range (Explore); the underlying companies, roles and hiring stages are all inspectable.',
        'Buka batang mana pun di The Range (Explore), perusahaan, peran, dan tahapan rekrutmen di baliknya semua bisa diperiksa.')
    ],
    chart: 'db-live',
    sources: [
      { note: L('All figures computed at page load from data/range/companies-db.js and the base career graph; Metanoia’s own curated database, dated per entry. No external market statistics are claimed.',
                'Semua angka dihitung saat halaman dimuat dari data/range/companies-db.js dan grafik karier dasar, basis data kurasi milik Metanoia, bertanggal per entri. Tidak ada statistik pasar eksternal yang diklaim.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('Every number here is a door you can open in The Range (Explore).', 'Setiap angka di sini adalah pintu yang bisa kamu buka di The Range (Explore).') }
    ]
  });

  /* ═══════════ LIBRARY EXPANSION · October 2026 ═══════════
     24 pieces across skills, work life, career, recruitment, market and
     opportunities. Same frame as above: what / why / means / act, a named
     source for every claim, no invented statistics. */
  ARTICLES.push(

  /* ═══════════ SKILLS · the craft of the work itself ═══════════ */
  {
    slug: 'the-one-page-memo', img: '../assets/pe/ed-writing.jpg', topic: 'skills', format: 'guide',
    stages: ['fresh-graduate', 'early-professional', 'mature-professional'], featured: 'secondary',
    date: '2026-10-09', reviewed: '2026-10-09', minutes: 6, author: AUTHOR,
    title: L('Writing at work: the one-page memo that gets a decision',
             'Menulis di tempat kerja: memo satu halaman yang menghasilkan keputusan'),
    dek: L('Most workplace writing asks the reader to do the thinking. A memo that leads with the answer, states what it needs, and fits on one page is the single most transferable skill we see.',
           'Kebanyakan tulisan di tempat kerja meminta pembaca yang berpikir. Memo yang memulai dengan jawaban, menyebut apa yang dibutuhkan, dan muat di satu halaman adalah keahlian paling mudah dipindahkan yang kami lihat.'),
    what: [
      L('A good memo is not a shorter report. It is a different object: a decision document. It opens with the recommendation, gives the three reasons that carry it, names the main risk, and says exactly what it needs from the reader (a yes, a budget, a date). Everything else is support, placed after the answer so the reader can stop early without missing the point.',
        'Memo yang baik bukanlah laporan yang dipendekkan; ia objek yang berbeda: dokumen keputusan. Ia dibuka dengan rekomendasi, memberi tiga alasan yang menopangnya, menyebut risiko utama, dan mengatakan persis apa yang dibutuhkan dari pembaca (persetujuan, anggaran, tanggal). Sisanya adalah pendukung, diletakkan setelah jawaban agar pembaca bisa berhenti lebih awal tanpa kehilangan intinya.'),
      L('This structure has a name and a long history in consulting: the pyramid principle, in which the conclusion sits at the top and the arguments beneath it are grouped and ordered. You do not need the whole method. You need the habit of asking, before you type, "what do I want the reader to decide, and what is the one sentence that says it?"',
        'Struktur ini punya nama dan sejarah panjang di dunia konsultan: prinsip piramida, dengan kesimpulan di puncak dan argumen di bawahnya dikelompokkan dan diurutkan. Kamu tidak perlu seluruh metodenya; kamu perlu kebiasaan bertanya, sebelum mengetik, "apa yang ingin kuputuskan oleh pembaca, dan apa satu kalimat yang mengatakannya?"')
    ],
    why: L('Managers read upward in a hurry. A page that makes the decision easy is remembered as competence; a page that makes the reader reconstruct your reasoning is remembered as effort, at best. Writing is the one skill that is visible in every function at every level.',
           'Manajer membaca laporan dari bawahannya dengan tergesa. Halaman yang membuat keputusan mudah diingat sebagai kompetensi; halaman yang memaksa pembaca merekonstruksi penalaranmu paling-paling diingat sebagai usaha. Menulis adalah satu keahlian yang terlihat di setiap fungsi pada setiap jenjang.'),
    means: {
      'fresh-graduate': L('Your first memos will be short status notes; write them with the answer first anyway. The habit is noticed long before the big documents arrive.',
                          'Memo pertamamu akan berupa catatan status singkat; tetap tulis dengan jawaban di depan. Kebiasaan ini diperhatikan jauh sebelum dokumen besar datang.'),
      'early-professional': L('This is the year you start proposing, not reporting. The one-page format is how a proposal survives a busy inbox.',
                              'Inilah tahun kamu mulai mengusulkan, bukan sekadar melapor. Format satu halaman adalah cara sebuah usulan bertahan di kotak masuk yang sibuk.'),
      'mature-professional': L('Senior readers will judge the memo on whether the risk and the ask are honest. Lead with those two when the recommendation is contested.',
                               'Pembaca senior akan menilai memo dari kejujuran risiko dan permintaannya. Mulailah dengan keduanya ketika rekomendasinya diperdebatkan.')
    },
    act: [
      L('Write the last line first. One sentence: "I recommend X because Y; I need Z by date." If you cannot write it, you are not ready to write the memo.',
        'Tulis baris terakhir lebih dulu. Satu kalimat: "Saya merekomendasikan X karena Y; saya butuh Z pada tanggal tertentu." Jika kalimat itu belum bisa ditulis, kamu belum siap menulis memonya.'),
      L('Give three reasons, each a sentence with a fact in it. Reasons without facts are opinions wearing a suit.',
        'Beri tiga alasan, masing-masing satu kalimat yang memuat fakta. Alasan tanpa fakta adalah opini yang memakai jas.'),
      L('Name the strongest objection and answer it in two lines. A memo that hides the risk teaches the reader not to trust the next one.',
        'Sebut keberatan terkuat dan jawab dalam dua baris. Memo yang menyembunyikan risiko mengajari pembaca untuk tidak memercayai memo berikutnya.'),
      L('Cut until it fits one page, then cut the adjectives. Put tables, data and method in an appendix the reader can open or ignore.',
        'Pangkas sampai muat satu halaman, lalu pangkas kata sifatnya. Letakkan tabel, data, dan metode di lampiran yang bisa dibuka atau diabaikan pembaca.'),
      L('Read it aloud once before sending. Any sentence you stumble on, the reader will stumble on twice.',
        'Baca keras-keras sekali sebelum dikirim. Kalimat yang membuatmu tersandung akan membuat pembaca tersandung dua kali.')
    ],
    sources: [
      { note: L('The structure follows Barbara Minto’s pyramid principle as practised in consulting firms; the one-page discipline is Metanoia’s editorial reading of how Indonesian corporate and state-enterprise managers actually read.',
                'Strukturnya mengikuti prinsip piramida Barbara Minto sebagaimana dipraktikkan di firma konsultan; disiplin satu halaman adalah pembacaan editorial Metanoia atas cara manajer korporasi dan BUMN di Indonesia benar-benar membaca.') }
    ],
    tools: [
      { pillar: 'the-route', why: L('The Route’s visibility lessons are where the memo becomes a career instrument, not just a document.', 'Pelajaran visibilitas di The Route adalah tempat memo menjadi instrumen karier, bukan sekadar dokumen.') }
    ]
  },

  {
    slug: 'learning-how-to-learn-at-work', img: '../assets/pe/ed-study.jpg', topic: 'skills', format: 'explainer',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-10-07', reviewed: '2026-10-07', minutes: 6, author: AUTHOR,
    title: L('Learning how to learn: three findings that survive the lab', 'Belajar cara belajar: tiga temuan yang bertahan di luar laboratorium'),
    dek: L('Rereading feels productive and teaches little. Three well-replicated findings from memory research, spacing, retrieval and interleaving, turn the first year of a job into a curriculum you actually keep.',
           'Membaca ulang terasa produktif dan mengajarkan sedikit. Tiga temuan riset memori yang telah banyak direplikasi, jeda, pemanggilan kembali, dan selang-seling, mengubah tahun pertama bekerja menjadi kurikulum yang benar-benar kamu simpan.'),
    what: [
      L('Memory research has a small set of results that hold up across decades and populations. Spacing: the same hours of study spread over days beat the same hours in one sitting. Retrieval: pulling an answer out of your head (a quiz, a blank page, explaining to a colleague) strengthens it far more than reading it again. Interleaving: mixing problem types in practice feels harder and transfers better than drilling one type at a time.',
        'Riset memori punya sekumpulan kecil hasil yang bertahan lintas dekade dan populasi. Jeda: jam belajar yang sama, disebar ke beberapa hari, mengalahkan jam yang sama dalam sekali duduk. Pemanggilan kembali: menarik jawaban dari kepala (kuis, halaman kosong, menjelaskan ke rekan) menguatkannya jauh lebih dari membacanya lagi. Selang-seling: mencampur jenis soal saat berlatih terasa lebih sulit dan berpindah lebih baik daripada mengebor satu jenis saja.'),
      L('The uncomfortable corollary is that the methods that feel best (highlighting, rereading, watching a tutorial twice) are the ones that produce fluency without retention. Difficulty during practice is often the signal that learning is happening.',
        'Konsekuensi yang tidak nyaman: metode yang terasa paling enak (menyorot, membaca ulang, menonton tutorial dua kali) justru menghasilkan kelancaran tanpa retensi. Kesulitan saat berlatih sering kali adalah tanda bahwa pembelajaran sedang terjadi.')
    ],
    why: L('A first job is a year-long course with no syllabus and no exam, graded continuously. People who treat it as a curriculum, with deliberate review and self-testing, compound; people who rely on exposure plateau after the first few months.',
           'Pekerjaan pertama adalah kursus setahun tanpa silabus dan tanpa ujian, dinilai terus-menerus. Orang yang memperlakukannya sebagai kurikulum, dengan tinjauan sengaja dan uji diri, terus bertumbuh; orang yang mengandalkan paparan saja mendatar setelah beberapa bulan pertama.'),
    means: {
      'student': L('Replace one rereading session a week with a blank-page recall of the same chapter. The grade difference shows up within a semester.',
                   'Ganti satu sesi membaca ulang per minggu dengan mengingat kembali bab yang sama di halaman kosong. Bedanya terlihat dalam satu semester.'),
      'fresh-graduate': L('Keep a Friday page: what you learned this week, written from memory, then checked. It doubles as the record your probation review will ask for.',
                          'Simpan halaman Jumat: apa yang kamu pelajari minggu ini, ditulis dari ingatan, lalu diperiksa. Ia sekaligus menjadi catatan yang akan diminta saat tinjauan masa percobaan.'),
      'early-professional': L('Interleave: alternate the technical, the commercial and the people problems in the same week instead of batching them, and your judgement across them improves together.',
                              'Selang-seling: bergantianlah antara masalah teknis, komersial, dan orang dalam minggu yang sama alih-alih mengelompokkannya, dan penilaianmu di ketiganya membaik bersama.')
    },
    act: [
      L('After any training, close the material and write what you remember on one page. Then open the material and mark the gaps. The gaps are the study list.',
        'Setelah pelatihan apa pun, tutup materinya dan tulis apa yang kamu ingat di satu halaman. Lalu buka materinya dan tandai celahnya. Celah itulah daftar belajarmu.'),
      L('Schedule three short revisits (next day, next week, next month) instead of one long session. Put them in the calendar; intention does not survive a busy Tuesday.',
        'Jadwalkan tiga kunjungan ulang singkat (esok hari, minggu depan, bulan depan) alih-alih satu sesi panjang. Masukkan ke kalender; niat tidak bertahan di hari Selasa yang sibuk.'),
      L('Explain the thing to someone who does not know it. If you cannot, you have recognition, not understanding.',
        'Jelaskan hal itu kepada orang yang belum tahu. Jika tidak bisa, yang kamu punya adalah pengenalan, bukan pemahaman.'),
      L('Mix your practice. Two reconciliation problems and one customer complaint beat three reconciliations in a row, even for the reconciliation skill.',
        'Campur latihanmu. Dua soal rekonsiliasi dan satu keluhan pelanggan mengalahkan tiga rekonsiliasi berturut-turut, bahkan untuk keahlian rekonsiliasinya sendiri.'),
      L('Welcome the feeling of difficulty. Easy practice is usually practice of what you already know.',
        'Sambut rasa sulit. Latihan yang mudah biasanya latihan atas apa yang sudah kamu kuasai.')
    ],
    sources: [
      { note: L('The three effects (spacing, retrieval practice, interleaving) are summarised for general readers in Make It Stick (Brown, Roediger and McDaniel) and rest on decades of experimental work; their application to a first job is Metanoia’s editorial judgement.',
                'Ketiga efek (jeda, latihan pemanggilan kembali, selang-seling) dirangkum untuk pembaca umum dalam Make It Stick (Brown, Roediger, dan McDaniel) dan bertumpu pada riset eksperimental puluhan tahun; penerapannya pada pekerjaan pertama adalah pertimbangan editorial Metanoia.') }
    ],
    tools: [
      { pillar: 'the-rope', why: L('The Rope’s simulation lab is built on exactly these principles: spaced, retrieval-based practice with one fix at a time.', 'Laboratorium simulasi The Rope dibangun persis di atas prinsip ini: latihan berjeda berbasis pemanggilan kembali, satu perbaikan setiap kali.') },
      { pillar: 'the-pack', why: L('The Pack’s psychometric drills interleave item types on purpose.', 'Latihan psikotes di The Pack sengaja menyelang-seling jenis soal.') }
    ]
  },

  {
    slug: 'spreadsheet-fluency', img: '../assets/pe/th-data.jpg', topic: 'skills', format: 'guide',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-10-05', reviewed: '2026-10-05', minutes: 7, author: AUTHOR,
    title: L('Spreadsheet fluency is the quiet superpower of a first job', 'Kefasihan spreadsheet adalah kekuatan diam-diam di pekerjaan pertama'),
    dek: L('Before anyone lets you near the real systems, they will hand you a spreadsheet. The person who can clean, structure, summarise and sanity-check one in an afternoon becomes useful in week one.',
           'Sebelum siapa pun mengizinkanmu menyentuh sistem sesungguhnya, mereka akan menyerahkan spreadsheet. Orang yang bisa membersihkan, menyusun, meringkas, dan memeriksa kewajarannya dalam satu sore menjadi berguna di minggu pertama.'),
    what: [
      L('Across functions, from finance and operations to marketing and HR, the first analytical work handed to a new hire arrives as a spreadsheet: an export, a tracker, a budget, a list. Fluency is not knowing every function. It is a small set of habits: separating raw data from calculations, using tables and lookups instead of copy-paste, writing a formula once and filling it down, and checking totals against a known number before trusting the result.',
        'Lintas fungsi, dari keuangan dan operasi sampai pemasaran dan HR, pekerjaan analitis pertama yang diserahkan ke karyawan baru datang sebagai spreadsheet: ekspor, pelacak, anggaran, daftar. Kefasihan bukan hafal semua fungsi, melainkan sekumpulan kecil kebiasaan: memisahkan data mentah dari perhitungan, memakai tabel dan lookup alih-alih salin-tempel, menulis rumus sekali lalu mengisinya ke bawah, dan mencocokkan total dengan angka yang sudah diketahui sebelum memercayai hasilnya.'),
      L('The second half of fluency is communication: a summary tab the manager can read in a minute, with the source and the date on it. Most spreadsheet disasters are not formula errors; they are a number that nobody can trace.',
        'Separuh lainnya dari kefasihan adalah komunikasi: tab ringkasan yang bisa dibaca manajer dalam semenit, dengan sumber dan tanggalnya. Kebanyakan bencana spreadsheet bukan kesalahan rumus, melainkan angka yang tidak bisa dilacak siapa pun.')
    ],
    why: L('Interviewers increasingly test it directly (an Excel task in the user round, a data exercise in a take-home), and managers notice it indirectly: the new hire whose numbers reconcile is the one who gets the next, bigger task.',
           'Pewawancara makin sering mengujinya langsung (tugas Excel di putaran user, latihan data di take-home), dan manajer memperhatikannya secara tidak langsung: karyawan baru yang angkanya cocok adalah yang mendapat tugas berikutnya yang lebih besar.'),
    means: {
      'student': L('Build one real model this semester: a budget for an event, a dataset from a project. Finished files are portfolio pieces.',
                   'Bangun satu model nyata semester ini: anggaran acara, set data dari proyek. Berkas yang selesai adalah karya portofolio.'),
      'fresh-graduate': L('Expect a spreadsheet test somewhere in your first processes. Practise the six moves below until they are reflexes.',
                          'Perkirakan ada tes spreadsheet di salah satu prosesmu. Latih enam gerakan di bawah sampai menjadi refleks.'),
      'early-professional': L('Fluency now means building the file others use: clean inputs, locked calculations, a summary that survives a forwarded email.',
                              'Kefasihan kini berarti membangun berkas yang dipakai orang lain: input bersih, perhitungan terkunci, ringkasan yang bertahan saat email diteruskan.')
    },
    act: [
      L('Learn six moves cold: sort and filter, remove duplicates, text-to-columns, a lookup (XLOOKUP or INDEX/MATCH), a pivot table, and conditional formatting. They cover most of what a first year asks.',
        'Kuasai enam gerakan sampai hafal: urutkan dan saring, hapus duplikat, teks-ke-kolom, lookup (XLOOKUP atau INDEX/MATCH), pivot table, dan pemformatan bersyarat. Keenamnya mencakup sebagian besar yang diminta tahun pertama.'),
      L('Keep three tabs: Raw (never edited), Work (your formulas), Summary (what the reader needs). Date the file name.',
        'Pakai tiga tab: Raw (tidak pernah diedit), Work (rumusmu), Summary (yang dibutuhkan pembaca). Beri tanggal pada nama berkas.'),
      L('Before sending, reconcile one total to a number you already trust: last month’s report, the system dashboard, a receipt.',
        'Sebelum mengirim, cocokkan satu total dengan angka yang sudah kamu percaya: laporan bulan lalu, dasbor sistem, kuitansi.'),
      L('Write the assumption next to the number, not in your head. "Excludes branch X, data as of Friday" saves a meeting.',
        'Tulis asumsinya di samping angka, bukan di kepala. "Tidak termasuk cabang X, data per Jumat" menghemat satu rapat.'),
      L('Learn one shortcut a day for a month. Speed is what turns fluency into availability for the interesting work.',
        'Pelajari satu pintasan per hari selama sebulan. Kecepatan adalah yang mengubah kefasihan menjadi ketersediaan untuk pekerjaan yang menarik.')
    ],
    sources: [
      { note: L('Editorial guidance based on the assessment patterns recorded in Metanoia’s hiring-process database and the tasks described by early-career members; no vendor is endorsed.',
                'Panduan editorial berdasarkan pola asesmen yang tercatat di basis data proses rekrutmen Metanoia dan tugas-tugas yang digambarkan anggota karier awal; tidak ada vendor yang dipromosikan.') }
    ],
    tools: [
      { pillar: 'the-pack', why: L('The Pack’s screening gym includes data exercises of the kind user rounds set.', 'Gym penyaringan di The Pack memuat latihan data seperti yang diberikan putaran user.') }
    ]
  },

  {
    slug: 'feedback-literacy', img: '../assets/pe/ed-conversations.jpg', topic: 'skills', format: 'explainer',
    stages: ['fresh-graduate', 'early-professional', 'mature-professional'],
    date: '2026-10-03', reviewed: '2026-10-03', minutes: 5, author: AUTHOR,
    title: L('Feedback literacy: how to receive it so you actually get more of it', 'Melek umpan balik: cara menerimanya agar kamu benar-benar mendapat lebih banyak'),
    dek: L('People who handle feedback well are given more of it, earlier, and in more useful form. The skill is not thick skin; it is a short protocol for the first thirty seconds.',
           'Orang yang menangani umpan balik dengan baik diberi lebih banyak, lebih awal, dan dalam bentuk lebih berguna. Keahliannya bukan kulit tebal, melainkan protokol singkat untuk tiga puluh detik pertama.'),
    what: [
      L('Feedback fails on the receiving end for three predictable reasons: the content seems wrong, the person giving it seems unqualified or unfair, or the comment lands on something you feel is part of who you are. Each trigger produces the same visible reaction, a defence, and the giver learns to stop giving.',
        'Umpan balik gagal di pihak penerima karena tiga alasan yang bisa diduga: isinya terasa salah, pemberinya terasa tidak kompeten atau tidak adil, atau komentarnya mengenai sesuatu yang kamu rasa bagian dari dirimu. Setiap pemicu menghasilkan reaksi yang sama, pembelaan, dan pemberinya belajar untuk berhenti memberi.'),
      L('In Indonesian workplaces the problem has an extra layer: direct criticism is often softened or withheld to preserve harmony, so the feedback you get is quieter than the feedback that exists. Making it safe and easy to tell you things is therefore a career skill, not a personality trait.',
        'Di tempat kerja Indonesia masalahnya punya lapisan tambahan: kritik langsung sering diperhalus atau ditahan demi menjaga keharmonisan, sehingga umpan balik yang kamu terima lebih pelan daripada umpan balik yang ada. Membuat orang merasa aman dan mudah memberitahumu karena itu adalah keahlian karier, bukan sifat kepribadian.')
    ],
    why: L('Probation reviews, promotion decisions and interview debriefs all run on information other people hold about you. The faster that information reaches you, the cheaper it is to act on.',
           'Tinjauan masa percobaan, keputusan promosi, dan debrief wawancara semuanya berjalan di atas informasi tentang dirimu yang dipegang orang lain. Makin cepat informasi itu sampai padamu, makin murah untuk ditindaklanjuti.'),
    means: {
      'fresh-graduate': L('Ask one question in week one: "What would you like me to do differently next week?" It sets the tone for the whole probation.',
                          'Ajukan satu pertanyaan di minggu pertama: "Apa yang ingin Bapak/Ibu saya lakukan berbeda minggu depan?" Ia menentukan nada seluruh masa percobaan.'),
      'early-professional': L('Seek feedback from peers and juniors, not only upward. The view from the side is the one your manager cannot give you.',
                              'Cari umpan balik dari rekan dan junior, bukan hanya dari atasan. Pandangan dari samping adalah yang tidak bisa diberikan manajermu.'),
      'mature-professional': L('The more senior you are, the less unprompted feedback you receive. Build the mechanism deliberately or it stops.',
                               'Makin senior kamu, makin sedikit umpan balik yang datang tanpa diminta. Bangun mekanismenya dengan sengaja atau ia berhenti.')
    },
    act: [
      L('First thirty seconds: say thank you, ask one clarifying question, and do not explain. Explanation is defence with better manners.',
        'Tiga puluh detik pertama: ucapkan terima kasih, ajukan satu pertanyaan klarifikasi, dan jangan menjelaskan. Penjelasan adalah pembelaan dengan sopan santun yang lebih baik.'),
      L('Separate the three questions you are tempted to merge: Is it true? Is it well delivered? Does it threaten how I see myself? Answer only the first one today.',
        'Pisahkan tiga pertanyaan yang tergoda kamu gabungkan: Apakah benar? Apakah disampaikan dengan baik? Apakah mengancam cara pandangku pada diri sendiri? Jawab hanya yang pertama hari ini.'),
      L('Ask for behaviour, not verdicts: "what did you see me do?" is answerable; "am I good at this?" is not.',
        'Minta perilaku, bukan vonis: "apa yang Bapak/Ibu lihat saya lakukan?" bisa dijawab; "apakah saya bagus?" tidak.'),
      L('Close the loop within two weeks: "I tried the thing you suggested; here is what changed." Nothing earns a second round of feedback faster.',
        'Tutup putarannya dalam dua minggu: "Saya mencoba yang disarankan; ini yang berubah." Tidak ada yang lebih cepat mendatangkan umpan balik putaran kedua.'),
      L('Log it: date, giver, the sentence, what you changed. Patterns across givers are the truest feedback you will ever get.',
        'Catat: tanggal, pemberi, kalimatnya, apa yang kamu ubah. Pola lintas pemberi adalah umpan balik paling jujur yang akan pernah kamu dapat.')
    ],
    sources: [
      { note: L('The three triggers (truth, relationship, identity) follow Douglas Stone and Sheila Heen, Thanks for the Feedback; the Indonesian workplace reading is Metanoia’s editorial judgement.',
                'Tiga pemicu (kebenaran, relasi, identitas) mengikuti Douglas Stone dan Sheila Heen, Thanks for the Feedback; pembacaan tentang tempat kerja Indonesia adalah pertimbangan editorial Metanoia.') }
    ],
    tools: [
      { pillar: 'the-rope', why: L('The Rope’s debriefs are feedback practice: a score, the sentence that earned it, one fix.', 'Debrief di The Rope adalah latihan umpan balik: nilai, kalimat yang menghasilkannya, satu perbaikan.') }
    ]
  },

  /* ═══════════ PROFESSIONAL LIFE · staying whole ═══════════ */
  {
    slug: 'burnout-is-a-system-signal', img: '../assets/pe/ed-cycles.jpg', topic: 'worklife', format: 'explainer',
    stages: ['early-professional', 'mature-professional', 'fresh-graduate'], trending: true,
    date: '2026-10-10', reviewed: '2026-10-10', minutes: 6, author: AUTHOR,
    title: L('Burnout is a system signal, not a character flaw', 'Burnout adalah sinyal sistem, bukan cacat karakter'),
    dek: L('The research describes burnout as three things happening together: exhaustion, cynicism and a sense of ineffectiveness. Reading it that way changes what you do about it, and what you ask your manager for.',
           'Riset menggambarkan burnout sebagai tiga hal yang terjadi bersamaan: kelelahan, sinisme, dan rasa tidak efektif. Membacanya begitu mengubah apa yang kamu lakukan, dan apa yang kamu minta dari manajermu.'),
    what: [
      L('The dominant model in occupational psychology treats burnout as a work-related state with three dimensions: exhaustion (you have nothing left), cynicism or detachment (you stop caring about the work and the people), and reduced efficacy (you believe you are no longer any good at it). It is studied as a mismatch between a person and the job: workload, control, reward, community, fairness and values. Tired is not burnout. Tired plus detached plus doubting yourself, for weeks, is.',
        'Model dominan dalam psikologi kerja memperlakukan burnout sebagai kondisi terkait pekerjaan dengan tiga dimensi: kelelahan (tak ada yang tersisa), sinisme atau keterlepasan (kamu berhenti peduli pada pekerjaan dan orang-orangnya), dan efikasi yang menurun (kamu percaya tidak lagi mampu). Ia diteliti sebagai ketidakcocokan antara orang dan pekerjaan: beban kerja, kendali, imbalan, komunitas, keadilan, dan nilai. Lelah bukanlah burnout. Lelah plus terlepas plus meragukan diri, selama berminggu-minggu, itulah burnout.'),
      L('Because it is a mismatch, the useful questions are structural: which of the six areas is out of alignment, and which of them can be changed in your current role? That is a different conversation from "I need to be more resilient", and a more honest one.',
        'Karena ia ketidakcocokan, pertanyaan yang berguna bersifat struktural: area mana dari keenamnya yang tidak selaras, dan mana yang bisa diubah di peranmu sekarang? Itu percakapan yang berbeda dari "saya harus lebih tangguh", dan lebih jujur.')
    ],
    why: L('Early-career burnout is common precisely when people are least able to name it, and it is often misread as a motivation problem by the person and by the manager. Naming the dimensions turns a private shame into a solvable mismatch.',
           'Burnout karier awal justru lazim ketika orang paling tidak mampu menamainya, dan sering disalahbaca sebagai masalah motivasi oleh orangnya maupun manajernya. Menamai dimensinya mengubah rasa malu pribadi menjadi ketidakcocokan yang bisa diselesaikan.'),
    means: {
      'fresh-graduate': L('A hard probation is not burnout; losing interest in the work you were excited about three months ago might be. Check the three dimensions, not just the hours.',
                          'Masa percobaan yang berat bukanlah burnout; kehilangan minat pada pekerjaan yang membuatmu bersemangat tiga bulan lalu mungkin iya. Periksa tiga dimensinya, bukan hanya jam kerjanya.'),
      'early-professional': L('This is the stage where workload and control collide: more responsibility, little authority. The mismatch is usually control, and it can often be negotiated.',
                              'Inilah tahap ketika beban kerja dan kendali bertabrakan: tanggung jawab lebih besar, wewenang sedikit. Ketidakcocokannya biasanya kendali, dan sering bisa dinegosiasikan.'),
      'mature-professional': L('Values mismatch is the quiet one at senior levels: competent, well paid, and increasingly detached. It rarely resolves with a holiday.',
                               'Ketidakcocokan nilai adalah yang paling sunyi di jenjang senior: kompeten, dibayar baik, dan makin terlepas. Ia jarang selesai dengan liburan.')
    },
    act: [
      L('Rate the three dimensions honestly for the last month: exhaustion, detachment, doubt. One high is fatigue; three highs sustained is the signal.',
        'Nilai ketiga dimensi dengan jujur untuk sebulan terakhir: kelelahan, keterlepasan, keraguan. Satu yang tinggi adalah kelelahan; tiga yang tinggi berkelanjutan adalah sinyalnya.'),
      L('Find the mismatch: workload, control, reward, community, fairness, values. Write one sentence on each. The one you wrote fastest is usually the one.',
        'Temukan ketidakcocokannya: beban kerja, kendali, imbalan, komunitas, keadilan, nilai. Tulis satu kalimat untuk masing-masing. Yang kamu tulis paling cepat biasanya itulah penyebabnya.'),
      L('Bring the mismatch, not the feeling, to your manager: "I own four workstreams and can decide on none of them" is actionable; "I am burnt out" invites sympathy and nothing else.',
        'Bawa ketidakcocokannya, bukan perasaannya, kepada manajermu: "Saya memegang empat alur kerja dan tidak bisa memutuskan satu pun" bisa ditindaklanjuti; "Saya burnout" mengundang simpati dan tidak lebih.'),
      L('Protect recovery like a deadline: sleep, one exercise block, one evening a week with no screen. Recovery is not a reward for finishing; it is how finishing stays possible.',
        'Lindungi pemulihan seperti tenggat: tidur, satu blok olahraga, satu malam per minggu tanpa layar. Pemulihan bukan hadiah setelah selesai; ia yang membuat selesai tetap mungkin.'),
      L('If the three dimensions stay high after the mismatch is addressed, talk to a professional. This article is a map, not a clinic.',
        'Jika tiga dimensinya tetap tinggi setelah ketidakcocokan ditangani, bicaralah dengan profesional. Artikel ini peta, bukan klinik.')
    ],
    sources: [
      { note: L('The three-dimension model and the six areas of worklife follow the research programme of Christina Maslach and Michael Leiter; this piece is educational and is not medical or psychological advice.',
                'Model tiga dimensi dan enam area kehidupan kerja mengikuti program riset Christina Maslach dan Michael Leiter; tulisan ini bersifat edukatif dan bukan nasihat medis atau psikologis.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('The Map’s well-being lessons (Module 5) give you the assessment and the weekly check that keep this from becoming a surprise.', 'Pelajaran kesejahteraan di The Map (Modul 5) memberimu asesmen dan pemeriksaan mingguan agar ini tidak menjadi kejutan.') }
    ]
  },

  {
    slug: 'first-salary-money-habits', img: '../assets/pe/ed-pay.jpg', topic: 'worklife', format: 'guide',
    stages: ['fresh-graduate', 'early-professional'],
    date: '2026-10-01', reviewed: '2026-10-01', minutes: 6, author: AUTHOR,
    title: L('The first salary: six habits that outlast the number', 'Gaji pertama: enam kebiasaan yang bertahan lebih lama dari angkanya'),
    dek: L('Your first salary is small and your first money habits are permanent. The six below are boring on purpose; they are what people a decade ahead of you wish they had started in month one.',
           'Gaji pertamamu kecil dan kebiasaan uang pertamamu permanen. Enam kebiasaan di bawah ini memang sengaja membosankan; itulah yang orang sepuluh tahun di depanmu berharap mereka mulai di bulan pertama.'),
    what: [
      L('A first salary arrives with two surprises. The take-home is lower than the gross on the offer letter, because statutory contributions and income tax come out first; and the money disappears faster than expected, because a job creates new costs (commuting, meals, clothing, the lunches that build relationships). The habits that matter are not about the amount. They are about sequence: what happens to the money before you can spend it.',
        'Gaji pertama datang dengan dua kejutan. Take-home lebih rendah dari angka bruto di surat penawaran, karena iuran wajib dan pajak penghasilan dipotong lebih dulu; dan uangnya habis lebih cepat dari dugaan, karena pekerjaan menciptakan biaya baru (transportasi, makan, pakaian, makan siang yang membangun relasi). Kebiasaan yang penting bukan soal jumlah, melainkan urutan: apa yang terjadi pada uang sebelum kamu sempat membelanjakannya.'),
      L('The second principle is that your salary is one line of a longer equation: the annual value of a job includes holiday allowance, insurance, bonus structure and what you learn. Reading your own payslip properly is the first act of financial literacy, and most graduates never do it.',
        'Prinsip kedua: gajimu adalah satu baris dari persamaan yang lebih panjang: nilai tahunan sebuah pekerjaan mencakup THR, asuransi, struktur bonus, dan apa yang kamu pelajari. Membaca slip gaji sendiri dengan benar adalah tindakan melek finansial pertama, dan kebanyakan lulusan tidak pernah melakukannya.')
    ],
    why: L('Money stress is one of the quietest drains on early-career performance, and one of the most avoidable. A small buffer changes how you negotiate, when you can leave, and whether you can say no.',
           'Stres uang adalah salah satu penguras kinerja karier awal yang paling senyap, dan paling bisa dihindari. Penyangga kecil mengubah caramu bernegosiasi, kapan kamu bisa pergi, dan apakah kamu bisa menolak.'),
    means: {
      'fresh-graduate': L('Set the transfers on the day the first salary lands, before the first weekend. The second month is already too late for a habit.',
                          'Atur transfer pada hari gaji pertama masuk, sebelum akhir pekan pertama. Bulan kedua sudah terlambat untuk sebuah kebiasaan.'),
      'early-professional': L('Each raise is a chance to move the percentage, not the lifestyle. Decide the split before the first bigger payslip arrives.',
                              'Setiap kenaikan gaji adalah kesempatan menggeser persentase, bukan gaya hidup. Putuskan pembagiannya sebelum slip gaji pertama yang lebih besar datang.')
    },
    act: [
      L('Read the payslip line by line in month one: gross, each deduction, net. Ask HR about any line you cannot explain; they expect the question.',
        'Baca slip gaji baris demi baris di bulan pertama: bruto, setiap potongan, neto. Tanyakan ke HR baris yang tidak bisa kamu jelaskan; mereka mengharapkan pertanyaan itu.'),
      L('Automate a transfer to a separate account on payday, before spending. Start with any percentage you will not notice; raise it with every raise.',
        'Otomatiskan transfer ke rekening terpisah pada hari gajian, sebelum belanja. Mulai dengan persentase berapa pun yang tidak akan kamu rasakan; naikkan setiap kali gaji naik.'),
      L('Build the buffer first: a few months of essential costs in cash before any investing. The buffer is what lets you refuse a bad offer or leave a bad manager.',
        'Bangun penyangga lebih dulu: beberapa bulan biaya pokok dalam bentuk tunai sebelum berinvestasi apa pun. Penyangga inilah yang memungkinkanmu menolak tawaran buruk atau meninggalkan manajer yang buruk.'),
      L('Keep the monthly fixed costs below what a single bad month can absorb: rent, transport, subscriptions, family transfers. Variable spending can flex; fixed costs cannot.',
        'Jaga biaya tetap bulanan di bawah apa yang bisa ditanggung satu bulan buruk: sewa, transportasi, langganan, kiriman keluarga. Belanja variabel bisa lentur; biaya tetap tidak.'),
      L('Treat the holiday allowance and any bonus as one-off: decide its use in advance (buffer, debt, one meaningful purchase), or it becomes a lifestyle you then have to fund every month.',
        'Perlakukan THR dan bonus apa pun sebagai sekali terima: putuskan penggunaannya di muka (penyangga, utang, satu pembelian yang berarti), atau ia menjadi gaya hidup yang lalu harus kamu biayai tiap bulan.'),
      L('Say no to consumer credit for the first year. A card is a tool once there is a buffer; before that it is a leash.',
        'Katakan tidak pada kredit konsumtif di tahun pertama. Kartu adalah alat setelah ada penyangga; sebelum itu ia tali kekang.')
    ],
    sources: [
      { note: L('General financial-literacy guidance for early-career employees; statutory contributions and tax treatment change over time and should be verified against the current official rules. Nothing here is personalised financial advice.',
                'Panduan umum melek finansial untuk karyawan karier awal; iuran wajib dan perlakuan pajak berubah dari waktu ke waktu dan harus diverifikasi terhadap aturan resmi terkini. Tidak ada yang di sini merupakan nasihat keuangan personal.') }
    ],
    tools: [
      { pillar: 'the-rope', why: L('The Rope’s offer lessons (Module 10) teach the arithmetic of gross, net and annual value before you sign.', 'Pelajaran penawaran di The Rope (Modul 10) mengajarkan aritmetika bruto, neto, dan nilai tahunan sebelum kamu tanda tangan.') }
    ]
  },

  /* ═══════════ CAREER PATHS · choosing on purpose ═══════════ */
  {
    slug: 'optionality-choosing-a-first-job', img: '../assets/pe/ed-horizon.jpg', topic: 'career', format: 'perspective',
    stages: ['student', 'fresh-graduate'], featured: 'secondary',
    date: '2026-10-08', reviewed: '2026-10-08', minutes: 6, author: AUTHOR,
    title: L('Optionality: choose a first job for the doors it opens, not the title it gives',
             'Opsionalitas: pilih pekerjaan pertama untuk pintu yang dibukanya, bukan gelar yang diberikannya'),
    dek: L('A perspective on the first decision most graduates get backwards. The best first job is rarely the most impressive one; it is the one from which the most second jobs are reachable.',
           'Sebuah perspektif tentang keputusan pertama yang paling sering dibalik oleh lulusan. Pekerjaan pertama terbaik jarang yang paling mengesankan; ia adalah pekerjaan yang dari sana paling banyak pekerjaan kedua bisa dijangkau.'),
    what: [
      L('Every job is two things: a role you do now and a position in a graph of roles you can move to next. Graduates are trained to evaluate the first (title, brand, salary) and rarely see the second. Yet the second is what determines your career at year five. A function that is read as transferable across industries, a company whose alumni are known to move, a manager who develops people: these are the doors. A grand title in a narrow function at a company nobody poaches from is a beautiful room with no exits.',
        'Setiap pekerjaan adalah dua hal: peran yang kamu jalani sekarang dan posisi dalam jaringan peran yang bisa kamu tuju berikutnya. Lulusan dilatih menilai yang pertama (gelar, merek, gaji) dan jarang melihat yang kedua. Padahal yang kedua yang menentukan kariermu di tahun kelima. Fungsi yang dibaca sebagai mudah dipindahkan lintas industri, perusahaan yang alumninya dikenal berpindah, manajer yang mengembangkan orang: itulah pintu-pintunya. Gelar megah di fungsi sempit di perusahaan yang tak pernah dibajak orang adalah ruangan indah tanpa pintu keluar.'),
      L('This is a judgement, not a law. Some narrow doors lead to rooms worth staying in for a decade. The point is to choose with the exits in view rather than discover them in year three.',
        'Ini pertimbangan, bukan hukum. Beberapa pintu sempit mengarah ke ruangan yang layak ditinggali sepuluh tahun. Intinya adalah memilih dengan pintu keluar dalam pandangan, bukan menemukannya di tahun ketiga.')
    ],
    why: L('The cost of a first job is mostly the second job it rules out. Reading the exits before you sign is the cheapest career planning you will ever do.',
           'Biaya pekerjaan pertama sebagian besar adalah pekerjaan kedua yang ia tutup. Membaca pintu keluar sebelum tanda tangan adalah perencanaan karier termurah yang pernah akan kamu lakukan.'),
    means: {
      'student': L('Choose internships the same way: a function you can describe to any employer beats a famous logo in a role you cannot explain.',
                   'Pilih magang dengan cara yang sama: fungsi yang bisa kamu jelaskan ke pemberi kerja mana pun mengalahkan logo terkenal di peran yang tidak bisa kamu jelaskan.'),
      'fresh-graduate': L('If two offers are close, take the one whose alumni you can find in three different industries on LinkedIn. That is the exit map, published for free.',
                          'Jika dua tawaran berdekatan, ambil yang alumninya bisa kamu temukan di tiga industri berbeda di LinkedIn. Itulah peta pintu keluar, diterbitkan gratis.')
    },
    act: [
      L('For each offer, list five people who held the role three years ago and where they are now. If you cannot find five, that is information too.',
        'Untuk setiap tawaran, daftar lima orang yang memegang peran itu tiga tahun lalu dan di mana mereka sekarang. Jika tidak menemukan lima, itu pun informasi.'),
      L('Score the function, not the company: is it a wide door (finance, operations, sales, data) or a narrow one (a proprietary process, a niche tool)?',
        'Nilai fungsinya, bukan perusahaannya: apakah pintu lebar (keuangan, operasi, penjualan, data) atau pintu sempit (proses khas perusahaan, alat niche)?'),
      L('Ask in the final interview: "where have people in this role gone next?" A manager who answers specifically is a manager who develops people.',
        'Tanyakan di wawancara final: "ke mana orang di peran ini biasanya melanjutkan?" Manajer yang menjawab spesifik adalah manajer yang mengembangkan orang.'),
      L('Prefer the job you can explain in one sentence to any employer over the one that needs the company name to make sense.',
        'Utamakan pekerjaan yang bisa kamu jelaskan dalam satu kalimat ke pemberi kerja mana pun daripada yang butuh nama perusahaan agar masuk akal.'),
      L('Revisit the decision at month eighteen with the same five-person test. Doors close and open; the map needs a date on it.',
        'Tinjau ulang keputusan di bulan kedelapan belas dengan uji lima orang yang sama. Pintu menutup dan membuka; petanya butuh tanggal.')
    ],
    sources: [
      { note: L('Editorial perspective; the "wide door" reading of functions is computed from Metanoia’s own company and role database and is explorable in The Range.',
                'Perspektif editorial; pembacaan "pintu lebar" atas fungsi dihitung dari basis data perusahaan dan peran milik Metanoia dan bisa dijelajahi di The Range.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('The Range shows, per function, how many industries and companies open a door; that is the exit map in data form.', 'The Range menunjukkan, per fungsi, berapa banyak industri dan perusahaan yang membuka pintu; itulah peta pintu keluar dalam bentuk data.') }
    ]
  },

  {
    slug: 'lateral-moves-explained', img: '../assets/pe/ed-pivot.jpg', topic: 'career', format: 'explainer',
    stages: ['early-professional', 'mature-professional'],
    date: '2026-09-29', reviewed: '2026-09-29', minutes: 5, author: AUTHOR,
    title: L('Lateral moves, explained: when sideways is the fastest way up', 'Pindah lateral, dijelaskan: kapan menyamping adalah jalan tercepat ke atas'),
    dek: L('A move with the same title and similar pay looks like standing still. Done for the right reason, it is how people acquire the second skill that makes the next promotion obvious.',
           'Pindah dengan gelar yang sama dan gaji serupa tampak seperti jalan di tempat. Dilakukan dengan alasan yang tepat, itulah cara orang memperoleh keahlian kedua yang membuat promosi berikutnya jadi jelas.'),
    what: [
      L('A lateral move changes one of four things while holding the others roughly constant: the function (finance to operations), the industry (bank to telco), the company (same role, different culture), or the geography (head office to a regional branch). Each one buys a different asset. A function move buys a second skill; an industry move buys a second context for the same skill; a company move buys a new network and a reset of reputation; a geography move often buys early responsibility that head office would not give for years.',
        'Pindah lateral mengubah satu dari empat hal sambil menjaga yang lain kurang lebih tetap: fungsi (keuangan ke operasi), industri (bank ke telko), perusahaan (peran sama, budaya berbeda), atau geografi (kantor pusat ke cabang daerah). Masing-masing membeli aset yang berbeda. Pindah fungsi membeli keahlian kedua; pindah industri membeli konteks kedua untuk keahlian yang sama; pindah perusahaan membeli jaringan baru dan reputasi yang disetel ulang; pindah geografi sering membeli tanggung jawab dini yang tak akan diberikan kantor pusat bertahun-tahun.'),
      L('The move fails when it is made for the wrong reason (escaping a manager) or without a story (nobody, including you, can say what it was for). It works when the asset it buys is named before the move and visible after it.',
        'Perpindahan gagal ketika dilakukan karena alasan yang salah (kabur dari manajer) atau tanpa cerita (tak seorang pun, termasuk kamu, bisa menyebut untuk apa). Ia berhasil ketika aset yang dibelinya disebut sebelum pindah dan terlihat sesudahnya.')
    ],
    why: L('Promotion in most Indonesian organisations rewards breadth at the manager level: the candidate who has seen two functions or two regions beats the specialist with one more year. The lateral move is how breadth is bought on purpose.',
           'Promosi di kebanyakan organisasi Indonesia menghargai keluasan di jenjang manajer: kandidat yang sudah melihat dua fungsi atau dua daerah mengalahkan spesialis dengan satu tahun tambahan. Pindah lateral adalah cara keluasan dibeli dengan sengaja.'),
    means: {
      'early-professional': L('Year two to four is the cheapest time to move sideways: your salary is low enough that a match is easy, and your reputation is young enough to reset.',
                              'Tahun kedua sampai keempat adalah waktu termurah untuk pindah menyamping: gajimu cukup rendah sehingga mudah disamai, dan reputasimu cukup muda untuk disetel ulang.'),
      'mature-professional': L('At senior levels the lateral move is usually a rotation negotiated inside the company. Ask for it with the asset named: "I need P&L exposure before the next step."',
                               'Di jenjang senior pindah lateral biasanya rotasi yang dinegosiasikan di dalam perusahaan. Mintalah dengan menyebut asetnya: "Saya perlu paparan P&L sebelum langkah berikutnya."')
    },
    act: [
      L('Name the asset in one line before you move: second skill, second context, new network, or early responsibility. If you cannot name it, you are escaping, not moving.',
        'Sebut asetnya dalam satu baris sebelum pindah: keahlian kedua, konteks kedua, jaringan baru, atau tanggung jawab dini. Jika tidak bisa menyebutnya, kamu sedang kabur, bukan pindah.'),
      L('Keep one thing constant. Changing function, industry and company at once is a restart, and restarts are priced as such.',
        'Jaga satu hal tetap. Mengubah fungsi, industri, dan perusahaan sekaligus adalah memulai dari nol, dan itu dihargai sebagai memulai dari nol.'),
      L('Negotiate the story, not only the pay: a title that reads as a step, a project you will own, a date for the review.',
        'Negosiasikan ceritanya, bukan hanya gajinya: gelar yang terbaca sebagai langkah, proyek yang akan kamu miliki, tanggal untuk tinjauan.'),
      L('Give it eighteen months. The asset only becomes visible once you have delivered something in the new seat.',
        'Beri waktu delapan belas bulan. Asetnya baru terlihat setelah kamu menghasilkan sesuatu di kursi yang baru.'),
      L('Write the sentence you will say in your next interview now: "I moved to X to learn Y, and here is what I did with it." Then go and make it true.',
        'Tulis sekarang kalimat yang akan kamu ucapkan di wawancara berikutnya: "Saya pindah ke X untuk belajar Y, dan inilah yang saya lakukan dengannya." Lalu buat ia menjadi benar.')
    ],
    sources: [
      { note: L('Editorial reading of promotion patterns described by Metanoia members and mentors; organisations differ, and the breadth preference is strongest in large corporates and state-owned enterprises.',
                'Pembacaan editorial atas pola promosi yang digambarkan anggota dan mentor Metanoia; organisasi berbeda-beda, dan preferensi keluasan paling kuat di korporasi besar dan BUMN.') }
    ],
    tools: [
      { pillar: 'the-route', why: L('The Route’s career-architecture lessons turn the move into a planned step with a review date.', 'Pelajaran arsitektur karier di The Route mengubah perpindahan menjadi langkah terencana dengan tanggal tinjauan.') }
    ]
  },

  {
    slug: 'a-personal-board-of-advisors', img: '../assets/pe/ed-seats.jpg', topic: 'career', format: 'guide',
    stages: ['fresh-graduate', 'early-professional', 'mature-professional'],
    date: '2026-09-25', reviewed: '2026-09-25', minutes: 5, author: AUTHOR,
    title: L('A personal board of advisors: four seats, filled on purpose', 'Dewan penasihat pribadi: empat kursi, diisi dengan sengaja'),
    dek: L('One mentor cannot see your whole career. Four people with different vantage points, consulted a few times a year, can. Here is who sits where, and how to ask.',
           'Satu mentor tidak bisa melihat seluruh kariermu. Empat orang dengan sudut pandang berbeda, ditanyai beberapa kali setahun, bisa. Inilah siapa duduk di mana, dan cara memintanya.'),
    what: [
      L('A board is not a committee you convene. It is four relationships you maintain, each answering a question the others cannot. The senior sponsor, two levels up, who can see which doors are opening. The peer two years ahead, who remembers your current problem precisely. The outsider, in another industry or country, who tells you what is normal elsewhere. The truth-teller, who likes you enough to say the uncomfortable thing. Most people have one of these by accident; almost nobody has four on purpose.',
        'Dewan bukan komite yang kamu kumpulkan, melainkan empat relasi yang kamu jaga, masing-masing menjawab pertanyaan yang tak bisa dijawab yang lain. Sponsor senior, dua jenjang di atas, yang bisa melihat pintu mana yang sedang terbuka. Rekan dua tahun di depan, yang mengingat masalahmu sekarang dengan persis. Orang luar, di industri atau negara lain, yang memberitahumu apa yang normal di tempat lain. Pembicara jujur, yang cukup menyukaimu untuk mengatakan hal yang tidak nyaman. Kebanyakan orang punya satu di antaranya secara kebetulan; hampir tak ada yang punya empat dengan sengaja.'),
      L('The asking is lighter than people fear. Nobody is appointed; you simply ask each person a specific question two or three times a year and report back what you did with the answer. The reporting back is what turns a favour into a relationship.',
        'Memintanya lebih ringan dari yang ditakutkan orang. Tak ada yang diangkat; kamu hanya mengajukan pertanyaan spesifik ke masing-masing dua atau tiga kali setahun dan melaporkan kembali apa yang kamu lakukan dengan jawabannya. Pelaporan kembali inilah yang mengubah bantuan menjadi relasi.')
    ],
    why: L('Career decisions are made with partial information, and the missing part is usually held by someone a few seats away. A board shortens the distance to that information from years to weeks.',
           'Keputusan karier dibuat dengan informasi parsial, dan bagian yang hilang biasanya dipegang seseorang beberapa kursi dari tempatmu. Dewan memendekkan jarak ke informasi itu dari tahun menjadi minggu.'),
    means: {
      'fresh-graduate': L('Start with the peer seat: someone two years into the role you want. They are easy to reach and their advice is dated this year, not last decade.',
                          'Mulai dari kursi rekan: seseorang dua tahun di peran yang kamu inginkan. Mereka mudah dijangkau dan nasihatnya bertanggal tahun ini, bukan dekade lalu.'),
      'early-professional': L('This is when the sponsor seat matters: visibility to the people deciding the next role is not automatic, it is introduced.',
                              'Inilah saat kursi sponsor penting: visibilitas kepada orang yang memutuskan peran berikutnya tidak otomatis, melainkan diperkenalkan.'),
      'mature-professional': L('Fill the outsider seat deliberately. Senior people are surrounded by their own industry, and that is exactly the blind spot.',
                               'Isi kursi orang luar dengan sengaja. Orang senior dikelilingi industrinya sendiri, dan persis itulah titik butanya.')
    },
    act: [
      L('Write four names, one per seat. Where a seat is empty, write the type of person and one place you could meet them.',
        'Tulis empat nama, satu per kursi. Di kursi yang kosong, tulis tipe orangnya dan satu tempat kamu bisa bertemu mereka.'),
      L('Ask one specific question per conversation: "If you were me, which of these two offers?" beats "any advice?"',
        'Ajukan satu pertanyaan spesifik per percakapan: "Kalau Bapak/Ibu jadi saya, mana dari dua tawaran ini?" mengalahkan "ada saran?"'),
      L('Report back within a month, in three lines: what you did, what happened, thank you. This is the whole maintenance cost.',
        'Laporkan kembali dalam sebulan, dalam tiga baris: apa yang kamu lakukan, apa yang terjadi, terima kasih. Inilah seluruh biaya pemeliharaannya.'),
      L('Rotate the board every two years. The peer seat ages fastest; the truth-teller rarely needs replacing.',
        'Rotasi dewanmu setiap dua tahun. Kursi rekan paling cepat menua; pembicara jujur jarang perlu diganti.'),
      L('Sit on someone else’s board. The fastest way to understand how to be helped is to help one person two years behind you.',
        'Duduklah di dewan orang lain. Cara tercepat memahami cara dibantu adalah membantu satu orang dua tahun di belakangmu.')
    ],
    sources: [
      { note: L('The four-seat framing is Metanoia’s editorial synthesis of mentoring practice; it draws on the distinction between mentors and sponsors that is widely discussed in management writing, without endorsing a single source.',
                'Kerangka empat kursi adalah sintesis editorial Metanoia atas praktik mentoring; ia memakai pembedaan mentor dan sponsor yang banyak dibahas dalam tulisan manajemen, tanpa mendukung satu sumber tunggal.') }
    ],
    tools: [
      { pillar: 'the-route', why: L('The Route’s network and visibility lessons give the sponsor seat a method.', 'Pelajaran jejaring dan visibilitas di The Route memberi kursi sponsor sebuah metode.') }
    ]
  },

  {
    slug: 'the-two-week-energy-audit', img: '../assets/pe/ps-audit.jpg', topic: 'career', format: 'guide',
    stages: ['early-professional', 'mature-professional', 'fresh-graduate'],
    date: '2026-09-21', reviewed: '2026-09-21', minutes: 5, author: AUTHOR,
    title: L('The two-week energy audit: find the work you should do more of', 'Audit energi dua minggu: temukan pekerjaan yang seharusnya lebih banyak kamu lakukan'),
    dek: L('"Follow your passion" is useless advice because passion is an outcome, not an input. What you can measure is which tasks give energy back and which take it. Two weeks of honest notes is enough to see the pattern.',
           '"Ikuti gairahmu" adalah nasihat yang tak berguna karena gairah adalah hasil, bukan masukan. Yang bisa kamu ukur adalah tugas mana yang mengembalikan energi dan mana yang mengambilnya. Dua minggu catatan jujur cukup untuk melihat polanya.'),
    what: [
      L('Most people cannot answer "what do you enjoy at work?" because the question is too large. They can answer a smaller one: "at four o’clock on Tuesday, after the budget review, did you have more energy or less than at two?" Logged for ten working days, those small answers form a map. Tasks cluster: the ones that leave you more alert than they found you, and the ones that do not, regardless of how important or prestigious they are.',
        'Kebanyakan orang tidak bisa menjawab "apa yang kamu nikmati di tempat kerja?" karena pertanyaannya terlalu besar. Mereka bisa menjawab yang lebih kecil: "pukul empat sore Selasa, setelah tinjauan anggaran, energimu lebih banyak atau lebih sedikit dari pukul dua?" Dicatat selama sepuluh hari kerja, jawaban-jawaban kecil itu membentuk peta. Tugas-tugas mengelompok: yang meninggalkanmu lebih segar daripada sebelumnya, dan yang tidak, terlepas dari seberapa penting atau bergengsi.'),
      L('The map does not tell you to quit. It tells you what to ask for more of, what to trade away, and which direction a next role should lean. That is a far more useful instruction than a personality label.',
        'Peta itu tidak menyuruhmu berhenti. Ia memberitahu apa yang perlu diminta lebih banyak, apa yang perlu ditukar, dan ke arah mana peran berikutnya sebaiknya condong. Itu instruksi yang jauh lebih berguna daripada label kepribadian.')
    ],
    why: L('Careers drift toward whatever we are competent at, which is not always what sustains us. A deliberate audit is the cheapest way to steer before the drift becomes a decade.',
           'Karier melayang ke arah apa pun yang kita kuasai, yang tidak selalu yang menopang kita. Audit yang disengaja adalah cara termurah mengemudi sebelum pelayangan itu menjadi satu dekade.'),
    means: {
      'fresh-graduate': L('Run it in month four, once the job is routine enough to have a pattern. Earlier, everything is new and everything is tiring.',
                          'Jalankan di bulan keempat, setelah pekerjaan cukup rutin untuk punya pola. Lebih awal dari itu, semuanya baru dan semuanya melelahkan.'),
      'early-professional': L('Use the result in your next development conversation: "I would like more of X" is a request managers can act on.',
                              'Gunakan hasilnya di percakapan pengembangan berikutnya: "Saya ingin lebih banyak X" adalah permintaan yang bisa ditindaklanjuti manajer.'),
      'mature-professional': L('At senior levels the audit often shows that the energy is in the craft and the drain is in the meetings. That is a design problem you have the authority to fix.',
                               'Di jenjang senior audit sering menunjukkan energi ada di kerajinan dan kurasnya di rapat. Itu masalah desain yang punya wewenang untuk kamu perbaiki.')
    },
    act: [
      L('For ten working days, note three times a day: what you just did, and energy up, flat or down. Thirty seconds, no analysis.',
        'Selama sepuluh hari kerja, catat tiga kali sehari: apa yang baru saja kamu lakukan, dan energi naik, datar, atau turun. Tiga puluh detik, tanpa analisis.'),
      L('On day eleven, sort the notes into the two columns. Ignore importance and prestige; sort only by energy.',
        'Di hari kesebelas, pilah catatannya ke dua kolom. Abaikan kepentingan dan gengsi; pilah hanya berdasarkan energi.'),
      L('Name the pattern in a sentence: "I gain energy when I build or explain; I lose it when I chase or reconcile." Keep it concrete.',
        'Sebut polanya dalam satu kalimat: "Energiku naik saat membangun atau menjelaskan; turun saat mengejar atau merekonsiliasi." Jaga tetap konkret.'),
      L('Trade one hour a week. Offer a colleague a task from your drain column in exchange for one from their drain column that sits in your gain column.',
        'Tukar satu jam per minggu. Tawarkan ke rekan satu tugas dari kolom kurasmu sebagai ganti satu tugas dari kolom kuras mereka yang ada di kolom tambahmu.'),
      L('Repeat the audit yearly. The columns move as you grow; the method does not.',
        'Ulangi audit tiap tahun. Kolomnya bergeser seiring kamu tumbuh; metodenya tidak.')
    ],
    sources: [
      { note: L('A practical method in the spirit of the "job crafting" research (Amy Wrzesniewski and colleagues), applied as an editorial guide; the audit is self-report and should be read as such.',
                'Metode praktis dalam semangat riset "job crafting" (Amy Wrzesniewski dan rekan), diterapkan sebagai panduan editorial; audit ini laporan diri dan sebaiknya dibaca sebagaimana adanya.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('The Map’s self-discovery diagnostic is the structured version of this audit, with a bearing at the end.', 'Diagnostik penemuan diri di The Map adalah versi terstruktur dari audit ini, dengan arah di akhirnya.') },
      { pillar: 'the-compass', why: L('The Compass keeps the yearly repeat on your calendar.', 'The Compass menjaga pengulangan tahunan tetap di kalendermu.') }
    ]
  },

  /* ═══════════ SKILLS · thinking and speaking ═══════════ */
  {
    slug: 'prompting-is-a-writing-skill', img: '../assets/pe/th-judgement.jpg', topic: 'skills', format: 'explainer',
    stages: ['student', 'fresh-graduate', 'early-professional', 'mature-professional'],
    date: '2026-09-18', reviewed: '2026-09-18', minutes: 5, author: AUTHOR,
    title: L('Prompting is a writing skill, and judgement is the part that stays yours', 'Prompting adalah keahlian menulis, dan penilaian adalah bagian yang tetap milikmu'),
    dek: L('The useful half of working with AI tools is the half that was always yours: stating the task precisely, supplying the context, and checking the answer against something true.',
           'Separuh yang berguna dari bekerja dengan alat AI adalah separuh yang memang selalu milikmu: menyatakan tugas dengan tepat, memberi konteks, dan memeriksa jawaban terhadap sesuatu yang benar.'),
    what: [
      L('Strip away the vocabulary and a good prompt is a good brief: what you want, for whom, in what form, with what constraints, and what good looks like. People who write clear briefs to colleagues write clear prompts to tools; people who do not, get generic output and blame the tool. The skill transfers in both directions, which is the real reason to practise it.',
        'Lepaskan jargonnya, dan prompt yang baik adalah brief yang baik: apa yang kamu inginkan, untuk siapa, dalam bentuk apa, dengan batasan apa, dan seperti apa hasil yang baik. Orang yang menulis brief jelas ke rekan menulis prompt jelas ke alat; yang tidak, mendapat keluaran generik dan menyalahkan alatnya. Keahlian ini berpindah ke dua arah, dan itulah alasan sesungguhnya untuk melatihnya.'),
      L('The second half is verification. A fluent answer is not a correct one; tools produce confident text about things they have not checked. The person who can tell the difference, by testing a number, tracing a claim, or reading the source, is the person employers are actually hiring when they say "AI skills".',
        'Separuh kedua adalah verifikasi. Jawaban yang lancar bukan berarti benar; alat menghasilkan teks percaya diri tentang hal yang belum diperiksanya. Orang yang bisa membedakannya, dengan menguji angka, menelusuri klaim, atau membaca sumbernya, adalah orang yang sebenarnya direkrut pemberi kerja ketika mereka berkata "keahlian AI".')
    ],
    why: L('Employers have stopped being impressed that a candidate uses AI tools and started asking what they did with the output. Briefing and verification are the two answers that survive that question.',
           'Pemberi kerja tidak lagi terkesan bahwa kandidat memakai alat AI dan mulai bertanya apa yang mereka lakukan dengan keluarannya. Briefing dan verifikasi adalah dua jawaban yang bertahan dari pertanyaan itu.'),
    means: {
      'student': L('Use the tools to argue with your drafts, not to write them. Ask for the three strongest objections to your essay, then answer them yourself.',
                   'Gunakan alat untuk berdebat dengan drafmu, bukan menuliskannya. Minta tiga keberatan terkuat terhadap esaimu, lalu jawab sendiri.'),
      'fresh-graduate': L('Find out your employer’s policy in week one: what may be pasted into a tool, what may not. Confidential data in a prompt is a disciplinary matter, not a productivity hack.',
                          'Cari tahu kebijakan pemberi kerjamu di minggu pertama: apa yang boleh ditempel ke alat, apa yang tidak. Data rahasia di dalam prompt adalah persoalan disipliner, bukan trik produktivitas.'),
      'early-professional': L('The leverage is in the brief you give others. If your team can work from your one-paragraph brief, so can a tool, and so can a new hire.',
                              'Daya ungkitnya ada di brief yang kamu beri orang lain. Jika timmu bisa bekerja dari brief satu paragrafmu, alat pun bisa, demikian pula karyawan baru.'),
      'mature-professional': L('Your judgement is the product. Use the tools to widen the options you consider, then decide the way you always have: with the facts you can stand behind.',
                               'Penilaianmu adalah produknya. Gunakan alat untuk memperluas opsi yang kamu pertimbangkan, lalu putuskan seperti biasa: dengan fakta yang bisa kamu pertanggungjawabkan.')
    },
    act: [
      L('Write the brief first, as if to a junior colleague: task, audience, format, constraints, example of good. Then paste it.',
        'Tulis brief-nya dulu, seolah untuk rekan junior: tugas, audiens, format, batasan, contoh yang baik. Lalu tempelkan.'),
      L('Ask for the reasoning and the sources, not only the answer, and read them. Where there is no source, treat the claim as a draft.',
        'Minta penalaran dan sumbernya, bukan hanya jawabannya, dan baca. Jika tidak ada sumber, perlakukan klaim itu sebagai draf.'),
      L('Verify one thing per output against a reality you control: a calculation you redo, a document you open, a colleague you ask.',
        'Verifikasi satu hal per keluaran terhadap kenyataan yang kamu kendalikan: perhitungan yang kamu ulang, dokumen yang kamu buka, rekan yang kamu tanya.'),
      L('Never paste what you would not email to a stranger: customer data, internal numbers, unreleased plans.',
        'Jangan pernah tempel apa yang tidak akan kamu kirim lewat email ke orang asing: data pelanggan, angka internal, rencana yang belum dirilis.'),
      L('Keep a file of briefs that worked. Reusable briefs are the closest thing to a personal productivity system that this technology offers.',
        'Simpan berkas brief yang berhasil. Brief yang bisa dipakai ulang adalah hal terdekat dengan sistem produktivitas pribadi yang ditawarkan teknologi ini.')
    ],
    sources: [
      { note: L('Editorial guidance. Employer policies on AI use vary widely; the article makes no claim about any specific tool or company.',
                'Panduan editorial. Kebijakan pemberi kerja tentang penggunaan AI sangat beragam; artikel ini tidak membuat klaim tentang alat atau perusahaan tertentu.') }
    ],
    tools: [
      { pillar: 'the-pack', why: L('The Pack’s CV studio is a worked example: the tool drafts, you verify every line against what you actually did.', 'Studio CV di The Pack adalah contoh nyata: alat menyusun draf, kamu memverifikasi setiap baris terhadap yang benar-benar kamu lakukan.') }
    ]
  },

  {
    slug: 'public-speaking-without-loving-it', img: '../assets/pe/th-present.jpg', topic: 'skills', format: 'guide',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-09-15', reviewed: '2026-09-15', minutes: 6, author: AUTHOR,
    title: L('Public speaking for people who will never love it', 'Berbicara di depan umum untuk orang yang tak akan pernah menyukainya'),
    dek: L('You do not need to enjoy presenting. You need a structure that holds when your hands shake, and a rehearsal method that makes the first minute automatic. Both are learnable in a month.',
           'Kamu tidak perlu menikmati presentasi. Kamu perlu struktur yang bertahan saat tanganmu gemetar, dan metode latihan yang membuat menit pertama otomatis. Keduanya bisa dipelajari dalam sebulan.'),
    what: [
      L('Nerves are not the problem; unstructured nerves are. Most weak presentations fail in the first ninety seconds, before the speaker has found a rhythm, and the cause is almost always that the opening was improvised. A fixed opening (what this is, why it matters to you, the one thing I will ask for) removes the improvisation from the hardest minute. After that, the body is just the one-page memo spoken aloud: answer, three reasons, risk, ask.',
        'Gugup bukan masalahnya; gugup tanpa struktur yang jadi masalah. Kebanyakan presentasi lemah gagal di sembilan puluh detik pertama, sebelum pembicara menemukan ritme, dan penyebabnya hampir selalu pembukaan yang diimprovisasi. Pembukaan yang tetap (apa ini, mengapa penting bagi Anda, satu hal yang akan saya minta) menghapus improvisasi dari menit tersulit. Setelah itu, isinya hanyalah memo satu halaman yang diucapkan: jawaban, tiga alasan, risiko, permintaan.'),
      L('Rehearsal is where most people cheat: they read the slides silently and call it practice. Saying the words aloud, standing, with a timer, three times, is a different activity, and it is the one that works.',
        'Latihan adalah tempat kebanyakan orang curang: mereka membaca slide dalam hati dan menyebutnya latihan. Mengucapkan kata-katanya keras-keras, berdiri, dengan pengatur waktu, tiga kali, adalah aktivitas yang berbeda, dan itulah yang berhasil.')
    ],
    why: L('Presentations are where reputations are made disproportionately: ten minutes in front of the right people counts for more than a month of quiet work. That is unfair and true, so it is worth being prepared for.',
           'Presentasi adalah tempat reputasi dibentuk secara tidak proporsional: sepuluh menit di depan orang yang tepat lebih berarti daripada sebulan kerja diam-diam. Itu tidak adil dan benar, jadi layak dipersiapkan.'),
    means: {
      'student': L('Volunteer for the group presentation’s opening, not its middle. The opening is the part you can script and own.',
                   'Relakan diri mengambil pembukaan presentasi kelompok, bukan bagian tengahnya. Pembukaan adalah bagian yang bisa kamu tulis dan kuasai.'),
      'fresh-graduate': L('Assessment-centre presentations give you prep time; spend a third of it rehearsing aloud, not making slides prettier.',
                          'Presentasi di assessment centre memberimu waktu persiapan; habiskan sepertiganya berlatih keras-keras, bukan mempercantik slide.'),
      'early-professional': L('Your first client or steering-committee presentation decides whether you get the second. Rehearse the questions, not just the slides.',
                              'Presentasi pertamamu ke klien atau komite pengarah menentukan apakah kamu dapat yang kedua. Latih pertanyaannya, bukan hanya slidenya.')
    },
    act: [
      L('Script the first three sentences word for word and memorise them. Everything after can be structured; the opening must be automatic.',
        'Tulis tiga kalimat pertama kata demi kata dan hafalkan. Yang setelahnya bisa berupa struktur; pembukaan harus otomatis.'),
      L('One idea per slide, one sentence of text at most. The slide is a signpost for the audience, not notes for you.',
        'Satu gagasan per slide, paling banyak satu kalimat teks. Slide adalah penunjuk arah bagi audiens, bukan catatan untukmu.'),
      L('Rehearse aloud, standing, timed, three times. Record the third and watch it once at double speed for the fillers and the pacing.',
        'Berlatih keras-keras, berdiri, berwaktu, tiga kali. Rekam yang ketiga dan tonton sekali dengan kecepatan ganda untuk melihat kata pengisi dan temponya.'),
      L('Prepare the three questions you most hope nobody asks, and answer each in two sentences on paper.',
        'Siapkan tiga pertanyaan yang paling kamu harap tak ada yang bertanya, dan jawab masing-masing dalam dua kalimat di kertas.'),
      L('Breathe out before you begin, not in. A slow exhale is the one physiological trick that reliably steadies the voice.',
        'Hembuskan napas sebelum mulai, bukan menarik. Hembusan pelan adalah satu trik fisiologis yang paling andal menenangkan suara.')
    ],
    sources: [
      { note: L('Editorial guidance drawn from The Rope’s assessment-centre and presentation lessons; the memo structure follows the one-page-memo piece in this hub.',
                'Panduan editorial yang diambil dari pelajaran assessment centre dan presentasi di The Rope; struktur memonya mengikuti artikel memo satu halaman di hub ini.') }
    ],
    tools: [
      { pillar: 'the-rope', why: L('The Rope’s Module 7 covers the presentation exercise inside an assessment centre, with the clock.', 'Modul 7 The Rope membahas latihan presentasi di dalam assessment centre, lengkap dengan jamnya.') }
    ]
  },

  /* ═══════════ GETTING HIRED · the gate, stage by stage ═══════════ */
  {
    slug: 'the-take-home-assignment', img: '../assets/pe/th-casestudy.jpg', topic: 'recruitment', format: 'guide',
    stages: ['fresh-graduate', 'early-professional'],
    date: '2026-10-06', reviewed: '2026-10-06', minutes: 6, author: AUTHOR,
    title: L('The take-home assignment: build the answer, not the document', 'Tugas take-home: bangun jawabannya, bukan dokumennya'),
    dek: L('More processes now send candidates home with a brief. The ones who pass treat it as a work sample with a reader, not a school project with a page count.',
           'Makin banyak proses yang mengirim kandidat pulang dengan sebuah brief. Yang lolos memperlakukannya sebagai contoh kerja dengan seorang pembaca, bukan proyek sekolah dengan jumlah halaman.'),
    what: [
      L('A take-home exists to answer one question the interview cannot: what does this person produce when nobody is watching and the clock is realistic? The assessor is not grading effort or length. They open the file looking for a recommendation, the reasoning behind it, the assumptions, and whether the candidate noticed what was missing from the brief. A beautiful deck that never commits to an answer scores below a plain page that does.',
        'Take-home ada untuk menjawab satu pertanyaan yang tak bisa dijawab wawancara: apa yang dihasilkan orang ini ketika tidak ada yang mengawasi dan jamnya realistis? Penilai tidak menilai usaha atau panjangnya. Mereka membuka berkas mencari rekomendasi, penalaran di baliknya, asumsinya, dan apakah kandidat menyadari apa yang hilang dari brief. Dek yang indah tapi tidak pernah berkomitmen pada jawaban dinilai di bawah halaman polos yang berani menjawab.'),
      L('The second thing being tested is honesty about scope. Every brief implies an effort; candidates who spend three nights on a four-hour task signal poor judgement about priorities, and candidates who hide the limits of their analysis signal something worse.',
        'Hal kedua yang diuji adalah kejujuran tentang cakupan. Setiap brief menyiratkan sebuah usaha; kandidat yang menghabiskan tiga malam untuk tugas empat jam memberi sinyal penilaian prioritas yang buruk, dan kandidat yang menyembunyikan batas analisisnya memberi sinyal yang lebih buruk lagi.')
    ],
    why: L('The take-home is the stage with the highest variance in candidate quality and therefore the one where a prepared candidate gains the most ground. It is also the stage most people prepare for least.',
           'Take-home adalah tahap dengan variasi kualitas kandidat tertinggi dan karenanya tahap di mana kandidat yang siap paling banyak memperoleh keunggulan. Ia juga tahap yang paling sedikit dipersiapkan orang.'),
    means: {
      'fresh-graduate': L('You will be compared with people who have done this at work. Answer first and show your working; that is what separates a graduate from a professional on paper.',
                          'Kamu akan dibandingkan dengan orang yang sudah melakukannya di tempat kerja. Jawab dulu dan tunjukkan cara kerjamu; itulah yang membedakan lulusan dari profesional di atas kertas.'),
      'early-professional': L('Resist the urge to show everything you know. The assessor wants the judgement you would exercise in the role, at the speed the role allows.',
                              'Tahan keinginan menunjukkan semua yang kamu tahu. Penilai menginginkan penilaian yang akan kamu jalankan di peran itu, pada kecepatan yang diizinkan peran itu.')
    },
    act: [
      L('Find the decision in the brief and restate it in one sentence before you open any data. If it is ambiguous, ask; a clarifying email is a point in your favour.',
        'Temukan keputusan di dalam brief dan nyatakan ulang dalam satu kalimat sebelum membuka data apa pun. Jika ambigu, tanyakan; email klarifikasi adalah nilai tambah bagimu.'),
      L('Box the time to what the brief implies and say so in the deliverable: "Prepared in about four hours; with more time I would check X and Y."',
        'Batasi waktu sesuai yang disiratkan brief dan katakan dalam hasilnya: "Disiapkan dalam sekitar empat jam; dengan lebih banyak waktu saya akan memeriksa X dan Y."'),
      L('Page one: the question, the recommendation, three reasons, the main risk. Everything else goes behind it.',
        'Halaman satu: pertanyaan, rekomendasi, tiga alasan, risiko utama. Yang lain diletakkan di belakangnya.'),
      L('State every assumption next to the number it feeds. Assessors forgive a wrong assumption that is visible; they do not forgive a hidden one.',
        'Nyatakan setiap asumsi di samping angka yang ia pengaruhi. Penilai memaafkan asumsi keliru yang terlihat; mereka tidak memaafkan yang disembunyikan.'),
      L('Rehearse the ten-minute walkthrough aloud and prepare the three questions you hope they will not ask. They will.',
        'Latih walkthrough sepuluh menit keras-keras dan siapkan tiga pertanyaan yang kamu harap tidak ditanyakan. Mereka akan menanyakannya.'),
      L('Your own work, with any tool use declared the way the employer instructed. Every line must be one you can explain in the room.',
        'Pekerjaanmu sendiri, dengan penggunaan alat apa pun dinyatakan sesuai instruksi pemberi kerja. Setiap baris harus bisa kamu jelaskan di ruangan.')
    ],
    sources: [
      { note: L('Editorial guidance aligned with The Rope’s Lesson 6.5 and the assessment patterns recorded in Metanoia’s hiring-process database.',
                'Panduan editorial yang selaras dengan Pelajaran 6.5 The Rope dan pola asesmen yang tercatat di basis data proses rekrutmen Metanoia.') }
    ],
    tools: [
      { pillar: 'the-rope', why: L('The Rope’s Lesson 6.5 walks a full take-home with a model deliverable.', 'Pelajaran 6.5 The Rope membahas satu take-home lengkap dengan contoh hasil.') }
    ]
  },

  {
    slug: 'group-discussions-what-assessors-tick', img: '../assets/pe/th-stakeholders.jpg', topic: 'recruitment', format: 'explainer',
    stages: ['student', 'fresh-graduate'],
    date: '2026-10-02', reviewed: '2026-10-02', minutes: 5, author: AUTHOR,
    title: L('Group discussions: the assessors are not counting who was right', 'Diskusi kelompok: penilai tidak menghitung siapa yang benar'),
    dek: L('The leaderless group discussion is the most misunderstood stage in Indonesian graduate recruitment. The topic is a prop; the clipboard is tallying behaviours. Here is the list.',
           'Diskusi kelompok tanpa pemimpin adalah tahap yang paling disalahpahami dalam rekrutmen lulusan di Indonesia. Topiknya hanya properti; papan jalan penilai sedang menghitung perilaku. Inilah daftarnya.'),
    what: [
      L('Two or three silent assessors sit behind a group of six to ten candidates discussing a case or a topic for half an hour. They are not scoring opinions. They tick behaviours against written anchors: did the candidate contribute something reasoned, build on another person by name, structure the discussion, watch the clock, draw in a quiet member, disagree without heat, and help the group reach a decision. Each of those is visible and countable; being right is neither.',
        'Dua atau tiga penilai diam duduk di belakang kelompok enam sampai sepuluh kandidat yang mendiskusikan sebuah kasus atau topik selama setengah jam. Mereka tidak menilai pendapat. Mereka mencentang perilaku terhadap jangkar tertulis: apakah kandidat menyumbang sesuatu yang beralasan, membangun di atas gagasan orang lain dengan menyebut namanya, menstrukturkan diskusi, mengawasi waktu, mengajak anggota yang diam, tidak setuju tanpa panas, dan membantu kelompok mencapai keputusan. Masing-masing terlihat dan terhitung; menjadi benar tidak.'),
      L('This explains the three myths: that talking most wins (dominating scores poorly on collaboration), that you need the leader title (structuring and summarising score without it), and that silence is safe (no evidence is a low score, not a neutral one).',
        'Ini menjelaskan tiga mitos: bahwa bicara paling banyak menang (mendominasi dinilai buruk pada kolaborasi), bahwa kamu perlu gelar pemimpin (menstrukturkan dan meringkas dinilai tanpa gelar itu), dan bahwa diam itu aman (tanpa bukti berarti nilai rendah, bukan netral).')
    ],
    why: L('Officer programmes, management-trainee intakes and state-owned recruitment all use the format at scale, and it eliminates more candidates than the interview. Knowing what is scored turns a lottery into a prepared performance.',
           'Program officer, intake management trainee, dan rekrutmen BUMN semua memakai format ini dalam skala besar, dan ia menggugurkan lebih banyak kandidat daripada wawancara. Mengetahui apa yang dinilai mengubah lotre menjadi penampilan yang dipersiapkan.'),
    means: {
      'student': L('Practise in a study group with a timer and one observer holding the behaviour list. Three sessions change how you sound.',
                   'Berlatihlah dalam kelompok belajar dengan pengatur waktu dan satu pengamat yang memegang daftar perilaku. Tiga sesi mengubah caramu terdengar.'),
      'fresh-graduate': L('Plan four quality contributions, not twenty: one structure, one analysis with a number, one invitation to a quiet member, one summary near the end.',
                          'Rencanakan empat kontribusi berkualitas, bukan dua puluh: satu struktur, satu analisis dengan angka, satu ajakan ke anggota yang diam, satu ringkasan menjelang akhir.')
    },
    act: [
      L('In the first two minutes, propose a structure and a time plan. It scores on structuring and it makes every later contribution easier to place.',
        'Dalam dua menit pertama, usulkan struktur dan rencana waktu. Ia dinilai pada penstrukturan dan membuat setiap kontribusi berikutnya lebih mudah ditempatkan.'),
      L('Build on people by name: "Seperti yang Rani bilang tadi, kalau kita ambil angka itu…" That one habit scores on three dimensions at once.',
        'Bangun di atas gagasan orang dengan menyebut nama: "Seperti yang Rani bilang tadi, kalau kita ambil angka itu…" Satu kebiasaan itu dinilai pada tiga dimensi sekaligus.'),
      L('Disagree with a reason and a question, never with a verdict. "I see it differently because X; what would change your mind?" keeps the room and earns the mark.',
        'Tidak setujulah dengan alasan dan pertanyaan, jangan dengan vonis. "Saya melihatnya berbeda karena X; apa yang akan mengubah pandangan Anda?" menjaga suasana dan mendapat nilai.'),
      L('Watch the quiet members and bring one in with a specific question. Assessors notice who notices.',
        'Perhatikan anggota yang diam dan ajak satu dengan pertanyaan spesifik. Penilai memperhatikan siapa yang memperhatikan.'),
      L('Five minutes before the end, summarise the options and push for a decision. A group that never decides scores low for everyone; the person who got it to decide scores high.',
        'Lima menit sebelum akhir, ringkas opsinya dan dorong ke keputusan. Kelompok yang tidak pernah memutuskan dinilai rendah untuk semua; orang yang membuatnya memutuskan dinilai tinggi.')
    ],
    sources: [
      { note: L('The behaviour list is Metanoia’s reading of published assessment-centre practice; specific anchors vary by employer and are never public.',
                'Daftar perilaku adalah pembacaan Metanoia atas praktik assessment centre yang terpublikasi; jangkar spesifik berbeda per pemberi kerja dan tidak pernah dipublikasikan.') }
    ],
    tools: [
      { pillar: 'the-rope', why: L('The Rope’s Module 7 trains the moves, the phrases and the scorecard, then runs a simulated discussion.', 'Modul 7 The Rope melatih gerakan, frasa, dan kartu skornya, lalu menjalankan diskusi simulasi.') }
    ]
  },

  {
    slug: 'salary-questions-before-the-offer', img: '../assets/pe/th-commercial.jpg', topic: 'recruitment', format: 'guide',
    stages: ['fresh-graduate', 'early-professional'],
    date: '2026-09-27', reviewed: '2026-09-27', minutes: 5, author: AUTHOR,
    title: L('"What is your expected salary?" is a fit check, not a negotiation', '"Berapa ekspektasi gaji Anda?" adalah pemeriksaan kecocokan, bukan negosiasi'),
    dek: L('The question arrives at the HR screen, long before anyone has decided to hire you. A researched range, stated as gross and said once, is the whole answer. Everything else waits for the offer.',
           'Pertanyaan itu datang di penyaringan HR, jauh sebelum siapa pun memutuskan merekrutmu. Rentang yang diriset, dinyatakan sebagai bruto dan disebut sekali, adalah seluruh jawabannya. Yang lain menunggu penawaran.'),
    what: [
      L('At the screening stage the salary question has one purpose: to check that your expectation and the role’s band overlap, so that neither side wastes the next four rounds. It is not the moment to maximise. It is the moment to be inside the band with a number you can justify. Structured programmes (officer programmes, management trainee intakes, state-owned enterprises) usually have a fixed package, which turns the question into a different one: are you comfortable with what is published?',
        'Di tahap penyaringan pertanyaan gaji punya satu tujuan: memeriksa bahwa ekspektasimu dan rentang peran saling tumpang tindih, agar tak satu pihak pun membuang empat putaran berikutnya. Ini bukan saat untuk memaksimalkan, melainkan saat untuk berada di dalam rentang dengan angka yang bisa kamu pertanggungjawabkan. Program terstruktur (program officer, intake management trainee, BUMN) biasanya punya paket tetap, yang mengubah pertanyaannya: apakah kamu nyaman dengan yang dipublikasikan?'),
      L('Research is what makes a number sayable without apology: recruitment-firm surveys, postings that state a range, alumni two years ahead, and the regional minimum wage as a floor. State it as gross monthly, because that is how offers are written, and know roughly which deductions sit between gross and take-home.',
        'Riset adalah yang membuat angka bisa diucapkan tanpa permintaan maaf: survei firma rekrutmen, lowongan yang menyebut rentang, alumni dua tahun di depan, dan upah minimum regional sebagai batas bawah. Nyatakan sebagai bruto bulanan, karena begitulah penawaran ditulis, dan ketahui kira-kira potongan apa yang ada di antara bruto dan take-home.')
    ],
    why: L('An unresearched number ends processes in both directions: too high reads as unrealistic, too low anchors every later conversation. The researched range is cheap insurance against both.',
           'Angka yang tidak diriset mengakhiri proses dari dua arah: terlalu tinggi terbaca tidak realistis, terlalu rendah menjangkar setiap percakapan berikutnya. Rentang yang diriset adalah asuransi murah terhadap keduanya.'),
    means: {
      'fresh-graduate': L('If you have no previous salary, say so plainly and give the researched range. Nobody expects a graduate to have history; they expect homework.',
                          'Jika belum punya gaji sebelumnya, katakan terus terang dan beri rentang hasil riset. Tak ada yang berharap lulusan punya riwayat; mereka berharap ada pekerjaan rumah.'),
      'early-professional': L('State your current package truthfully if asked; inflating it is the one answer that fails at the reference check.',
                              'Sebutkan paketmu saat ini dengan jujur jika ditanya; menggelembungkannya adalah satu jawaban yang gagal saat pengecekan referensi.')
    },
    act: [
      L('Build the range from three sources and write them down. A range with a basis is a professional answer; a number from the air is a guess.',
        'Bangun rentangnya dari tiga sumber dan tulis. Rentang yang punya dasar adalah jawaban profesional; angka dari udara adalah tebakan.'),
      L('Say it once, as gross monthly, then stop. "Berdasarkan riset saya, sekitar X sampai Y bruto per bulan." The pause after it belongs to them.',
        'Ucapkan sekali, sebagai bruto bulanan, lalu berhenti. "Berdasarkan riset saya, sekitar X sampai Y bruto per bulan." Jeda setelahnya milik mereka.'),
      L('For a fixed-package programme, answer the real question: "I understand the package is standard; I am comfortable with it." Then ask about progression if you want a number later.',
        'Untuk program paket tetap, jawab pertanyaan sebenarnya: "Saya paham paketnya standar; saya nyaman dengan itu." Lalu tanyakan jenjang kenaikan jika ingin angka di kemudian hari.'),
      L('Clarify practical terms at this stage (placement, contract type, start date); negotiate them only after the offer exists.',
        'Perjelas syarat praktis di tahap ini (penempatan, jenis kontrak, tanggal mulai); negosiasikan hanya setelah penawaran ada.'),
      L('Never invent a competing offer. If you have one, say so briefly; if you do not, the researched range is enough.',
        'Jangan pernah mengarang tawaran pesaing. Jika punya, sebutkan singkat; jika tidak, rentang hasil riset sudah cukup.')
    ],
    sources: [
      { note: L('Aligned with The Rope’s Lessons 5.3 and 10.3. Minimum-wage figures and statutory deductions change yearly and should be verified against the current official publications before you rely on them.',
                'Selaras dengan Pelajaran 5.3 dan 10.3 The Rope. Angka upah minimum dan potongan wajib berubah tiap tahun dan harus diverifikasi terhadap publikasi resmi terkini sebelum diandalkan.') }
    ],
    tools: [
      { pillar: 'the-rope', why: L('The Rope’s Module 10 does the arithmetic of an offer and the one-request negotiation that follows.', 'Modul 10 The Rope mengerjakan aritmetika penawaran dan negosiasi satu permintaan setelahnya.') }
    ]
  },

  {
    slug: 'references-and-background-checks', img: '../assets/pe/th-senior-interview.jpg', topic: 'recruitment', format: 'explainer',
    stages: ['fresh-graduate', 'early-professional', 'mature-professional'],
    date: '2026-09-23', reviewed: '2026-09-23', minutes: 4, author: AUTHOR,
    title: L('References and background checks: what is verified, and what to prepare', 'Referensi dan pengecekan latar belakang: apa yang diverifikasi, dan apa yang disiapkan'),
    dek: L('The last stage is the quietest. Employers confirm the facts you gave and ask one or two people how you actually were. Nothing here is a trick; everything here rewards having told the truth earlier.',
           'Tahap terakhir adalah yang paling sunyi. Pemberi kerja mengonfirmasi fakta yang kamu beri dan bertanya kepada satu-dua orang bagaimana kamu sebenarnya. Tidak ada tipuan di sini; semuanya menghargai kejujuran yang sudah kamu sampaikan lebih dulu.'),
    what: [
      L('A background check confirms documents: the degree, the dates, the previous employer, sometimes a criminal-record letter, for regulated roles sometimes more. A reference check asks a person: usually a previous manager or lecturer, sometimes a peer, whether the stories you told hold up and whether they would work with you again. Both are routine, both are slow, and both only become a problem when something you said earlier does not match.',
        'Pengecekan latar belakang mengonfirmasi dokumen: ijazah, tanggal, pemberi kerja sebelumnya, kadang surat keterangan catatan kepolisian, untuk peran yang diregulasi kadang lebih. Pengecekan referensi bertanya kepada seseorang: biasanya manajer atau dosen sebelumnya, kadang rekan, apakah cerita yang kamu sampaikan terbukti dan apakah mereka mau bekerja denganmu lagi. Keduanya rutin, keduanya lambat, dan keduanya hanya menjadi masalah ketika sesuatu yang kamu katakan sebelumnya tidak cocok.'),
      L('The practical consequence is that references are prepared months earlier, when you decide what to claim. The person you name should recognise the story you told in the interview, because they will be asked about it.',
        'Konsekuensi praktisnya: referensi disiapkan berbulan-bulan sebelumnya, ketika kamu memutuskan apa yang diklaim. Orang yang kamu sebut harus mengenali cerita yang kamu sampaikan di wawancara, karena mereka akan ditanya tentang itu.')
    ],
    why: L('An offer letter is usually conditional on these checks. Candidates lose offers at this stage not for weak references but for inconsistency: a date, a title, a reason for leaving that changed between the CV and the call.',
           'Surat penawaran biasanya bersyarat pada pengecekan ini. Kandidat kehilangan tawaran di tahap ini bukan karena referensi yang lemah, melainkan karena inkonsistensi: tanggal, jabatan, alasan keluar yang berubah antara CV dan panggilan telepon.'),
    means: {
      'fresh-graduate': L('A lecturer, an internship supervisor or an organisation advisor are all valid referees. Ask them before you list them, and tell them what the role is.',
                          'Dosen, penyelia magang, atau pembina organisasi semuanya rujukan yang sah. Minta izin sebelum mencantumkan, dan beri tahu perannya.'),
      'early-professional': L('Keep your current employer out of it until the offer is unconditional; say so to the recruiter, who will understand.',
                              'Jaga pemberi kerja saat ini di luar proses sampai tawaran tanpa syarat; sampaikan ke perekrut, yang akan memahaminya.'),
      'mature-professional': L('Senior checks go wider: former peers and direct reports may be called. The pattern across them is what is being read.',
                               'Pengecekan di jenjang senior lebih luas: mantan rekan dan bawahan langsung mungkin dihubungi. Pola lintas mereka itulah yang dibaca.')
    },
    act: [
      L('Keep one record of your own facts: dates, titles, reasons for leaving, grades. Use it for every CV, form and interview so that nothing drifts.',
        'Simpan satu catatan faktamu sendiri: tanggal, jabatan, alasan keluar, nilai. Pakai untuk setiap CV, formulir, dan wawancara agar tidak ada yang bergeser.'),
      L('Ask referees in advance and brief them in three lines: the role, the two things you emphasised, the dates they may be asked.',
        'Minta izin rujukan di muka dan beri pengantar tiga baris: perannya, dua hal yang kamu tekankan, tanggal yang mungkin ditanyakan.'),
      L('Have the documents scanned and named before the offer: degree, transcript, identity, previous employment letters.',
        'Pindai dan beri nama dokumennya sebelum penawaran: ijazah, transkrip, identitas, surat keterangan kerja sebelumnya.'),
      L('If something in your history is awkward, it was already the moment for Acknowledge, Account, Advance in the interview; do not let the check be the first place it appears.',
        'Jika ada yang canggung dalam riwayatmu, saat untuk Akui, Jelaskan, Maju sudah lewat di wawancara; jangan biarkan pengecekan menjadi tempat pertama ia muncul.'),
      L('Thank your referees afterwards, whatever the outcome. They are the first members of your personal board.',
        'Ucapkan terima kasih kepada rujukanmu setelahnya, apa pun hasilnya. Mereka anggota pertama dewan pribadimu.')
    ],
    sources: [
      { note: L('General description of common practice; what is checked varies by employer, sector and jurisdiction, and regulated roles (finance, public sector) may require more.',
                'Gambaran umum praktik yang lazim; apa yang diperiksa berbeda menurut pemberi kerja, sektor, dan yurisdiksi, dan peran yang diregulasi (keuangan, sektor publik) mungkin menuntut lebih.') }
    ],
    tools: [
      { pillar: 'the-rope', why: L('The Rope’s Lesson 5.2 prepares the difficult question so that the check never surprises anyone.', 'Pelajaran 5.2 The Rope menyiapkan pertanyaan sulit agar pengecekan tidak pernah mengejutkan siapa pun.') },
      { pillar: 'the-compass', why: L('The Compass keeps the one record of facts and documents that every process draws on.', 'The Compass menyimpan satu catatan fakta dan dokumen yang dipakai setiap proses.') }
    ]
  },

  /* ═══════════ INDUSTRY & MARKET · reading the landscape ═══════════ */
  {
    slug: 'how-state-owned-enterprises-hire', img: '../assets/pe/ed-board.jpg', topic: 'market', format: 'explainer',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-10-04', reviewed: '2026-10-04', minutes: 6, author: AUTHOR,
    title: L('Why state-owned enterprises hire the way they do', 'Mengapa BUMN merekrut dengan cara seperti itu'),
    dek: L('Joint recruitment, published eligibility rules, values interviews and placement anywhere in the archipelago are not bureaucracy for its own sake. Each follows from what a state-owned enterprise is. Understanding that makes the process predictable.',
           'Rekrutmen bersama, aturan kelayakan yang dipublikasikan, wawancara nilai, dan penempatan di mana saja di nusantara bukanlah birokrasi demi birokrasi. Masing-masing mengikuti dari apa itu BUMN. Memahaminya membuat prosesnya bisa diprediksi.'),
    what: [
      L('A state-owned enterprise answers to a ministry, to the public, and often to a listed-company board at once. Its hiring therefore has to be defensible: published criteria (age, degree, GPA), a sequence everyone can see, and tests that produce a paper trail. That is why eligibility is screened mechanically before any human judgement, why psychometric and values stages carry real weight, and why the final panel asks about commitment, integrity and willingness to be placed. The enterprise is selecting people who will still be there, in Papua or Sumatra, in ten years.',
        'BUMN bertanggung jawab kepada kementerian, kepada publik, dan sering kepada dewan perusahaan tercatat sekaligus. Rekrutmennya karena itu harus bisa dipertanggungjawabkan: kriteria terpublikasi (usia, gelar, IPK), urutan yang bisa dilihat semua orang, dan tes yang menghasilkan jejak kertas. Itulah mengapa kelayakan disaring secara mekanis sebelum penilaian manusia, mengapa tahap psikotes dan nilai berbobot nyata, dan mengapa panel final bertanya tentang komitmen, integritas, dan kesediaan ditempatkan. Perusahaan ini memilih orang yang masih akan ada di sana, di Papua atau Sumatra, sepuluh tahun lagi.'),
      L('The core values framework used across state enterprises is public, and interviewers ask for evidence of it in your own history, not for the acronym. The candidate who tells one true story per value, with a cost paid, outperforms the one who can recite the list.',
        'Kerangka nilai inti yang dipakai lintas BUMN bersifat publik, dan pewawancara meminta buktinya dalam riwayatmu sendiri, bukan akronimnya. Kandidat yang menceritakan satu kisah nyata per nilai, dengan harga yang dibayar, mengungguli yang hafal daftarnya.')
    ],
    why: L('Tens of thousands apply to each joint intake; most are eliminated at stages that are entirely predictable from the published rules. Reading the logic of the process is worth more than any single answer you could prepare.',
           'Puluhan ribu orang melamar tiap intake bersama; sebagian besar gugur di tahap yang sepenuhnya bisa diprediksi dari aturan terpublikasi. Membaca logika prosesnya lebih berharga daripada jawaban tunggal mana pun yang bisa kamu siapkan.'),
    means: {
      'student': L('The eligibility rules reward planning two years out: the GPA floor, the age limit and the English test are all known in advance.',
                   'Aturan kelayakan menghargai perencanaan dua tahun ke depan: batas IPK, batas usia, dan tes bahasa Inggris semuanya diketahui sebelumnya.'),
      'fresh-graduate': L('Decide the placement question before you apply. "Yes, anywhere" said and then withdrawn costs more than an honest "preferably Java" said early.',
                          'Putuskan soal penempatan sebelum melamar. "Ya, di mana saja" lalu ditarik kembali lebih mahal daripada "sebaiknya Jawa" yang jujur sejak awal.'),
      'early-professional': L('Experienced hires enter through different doors (professional hire, specialist tracks). The values interview still comes, and still wants stories.',
                              'Karyawan berpengalaman masuk lewat pintu berbeda (professional hire, jalur spesialis). Wawancara nilai tetap datang, dan tetap menginginkan cerita.')
    },
    act: [
      L('Read the current announcement on the official portal and only there; third-party summaries are frequently out of date. Note every stated rule and the dates.',
        'Baca pengumuman terkini di portal resmi dan hanya di sana; ringkasan pihak ketiga sering kedaluwarsa. Catat setiap aturan yang dinyatakan dan tanggalnya.'),
      L('Map one Core 10 story to each core value, with the price you paid. Values questions are behavioural questions wearing a uniform.',
        'Petakan satu cerita Core 10 ke setiap nilai inti, dengan harga yang kamu bayar. Pertanyaan nilai adalah pertanyaan perilaku yang memakai seragam.'),
      L('Prepare the placement and bond sentences honestly and say them the same way in every round; panels compare notes with HR.',
        'Siapkan kalimat penempatan dan ikatan dinas dengan jujur dan ucapkan dengan cara yang sama di setiap putaran; panel mencocokkan catatan dengan HR.'),
      L('Practise the psychometric families used (verbal, numerical, abstract, personality) under time, because the cut is mechanical and early.',
        'Latih keluarga psikotes yang dipakai (verbal, numerik, abstrak, kepribadian) dengan batas waktu, karena pemotongannya mekanis dan terjadi di awal.'),
      L('Research the specific enterprise, not the sector: its annual report names the priorities the final panel will ask you to care about.',
        'Riset perusahaan spesifiknya, bukan sektornya: laporan tahunannya menyebut prioritas yang akan diminta panel final untuk kamu pedulikan.')
    ],
    sources: [
      { note: L('Process description is Metanoia’s editorial reading of publicly announced joint-recruitment cycles; rules change per batch and must be verified on the official portal. Specific companies’ processes are documented in The Range only where a source exists.',
                'Gambaran proses adalah pembacaan editorial Metanoia atas siklus rekrutmen bersama yang diumumkan secara publik; aturan berubah per batch dan harus diverifikasi di portal resmi. Proses perusahaan tertentu didokumentasikan di The Range hanya bila ada sumbernya.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('The Range filters state-owned enterprises and shows where a documented process exists.', 'The Range menyaring BUMN dan menunjukkan di mana proses terdokumentasi tersedia.') },
      { pillar: 'the-pack', why: L('The Pack’s psychometric practice covers the mechanical early cut.', 'Latihan psikotes The Pack mencakup pemotongan mekanis di awal.') }
    ]
  },

  {
    slug: 'startups-versus-corporates-the-real-trade', img: '../assets/pe/ed-startup.jpg', topic: 'market', format: 'perspective',
    stages: ['fresh-graduate', 'early-professional'],
    date: '2026-09-30', reviewed: '2026-09-30', minutes: 5, author: AUTHOR,
    title: L('Startups versus corporates: the real trade is not speed against safety', 'Startup versus korporasi: pertukaran sesungguhnya bukan kecepatan melawan keamanan'),
    dek: L('The usual framing, excitement versus stability, hides the trade that actually matters at twenty-three: scope now against structure later, and who will teach you.',
           'Pembingkaian yang lazim, kegembiraan melawan stabilitas, menyembunyikan pertukaran yang sungguh penting di usia dua puluh tiga: cakupan sekarang melawan struktur nanti, dan siapa yang akan mengajarimu.'),
    what: [
      L('A small, fast-growing company gives scope early: you own a process in month three because there is nobody else. A large company gives structure: a programme, a rotation, a manager whose job includes developing you, and a name that opens doors. Neither is better. They buy different assets, and the honest question is which asset you lack. A graduate with discipline but no exposure often gains more from scope; a graduate with ideas but no habits often gains more from structure.',
        'Perusahaan kecil yang tumbuh cepat memberi cakupan lebih awal: kamu memiliki sebuah proses di bulan ketiga karena tidak ada orang lain. Perusahaan besar memberi struktur: program, rotasi, manajer yang tugasnya termasuk mengembangkanmu, dan nama yang membuka pintu. Tak satu pun lebih baik. Keduanya membeli aset yang berbeda, dan pertanyaan jujurnya adalah aset mana yang belum kamu punya. Lulusan dengan disiplin tapi tanpa paparan sering lebih untung dari cakupan; lulusan dengan ide tapi tanpa kebiasaan sering lebih untung dari struktur.'),
      L('The second hidden variable is the manager. In a corporate, the institution teaches even when the manager does not; in a startup, the manager is the institution. The quality of that one person is worth more than the stage of the company.',
        'Variabel tersembunyi kedua adalah manajer. Di korporasi, institusinya mengajar bahkan ketika manajernya tidak; di startup, manajer adalah institusinya. Kualitas satu orang itu lebih berharga daripada tahap perusahaannya.')
    ],
    why: L('People choose on vibe, then spend two years discovering what they actually traded. Naming the assets up front turns a lifestyle choice into a career decision.',
           'Orang memilih berdasarkan suasana, lalu menghabiskan dua tahun untuk menyadari apa yang sebenarnya mereka tukar. Menyebut asetnya di muka mengubah pilihan gaya hidup menjadi keputusan karier.'),
    means: {
      'fresh-graduate': L('Ask the startup who will review your work weekly and the corporate what you will own by month six. The answers tell you more than the perks.',
                          'Tanyakan ke startup siapa yang akan meninjau kerjamu tiap minggu dan ke korporasi apa yang akan kamu miliki di bulan keenam. Jawabannya lebih bercerita daripada fasilitasnya.'),
      'early-professional': L('Moving from one to the other is a classic lateral move: name the asset you are buying and keep one thing constant.',
                              'Pindah dari satu ke yang lain adalah pindah lateral klasik: sebut aset yang kamu beli dan jaga satu hal tetap.')
    },
    act: [
      L('Write down the asset you lack: exposure, habits, a name, a network, a skill. Then ask which environment sells it cheapest.',
        'Tulis aset yang belum kamu punya: paparan, kebiasaan, nama, jaringan, keahlian. Lalu tanyakan lingkungan mana yang menjualnya paling murah.'),
      L('Interview the manager as hard as they interview you: how do they give feedback, what did their last junior go on to do?',
        'Wawancarai manajernya sekeras mereka mewawancaraimu: bagaimana mereka memberi umpan balik, apa yang dilakukan junior terakhir mereka setelahnya?'),
      L('Check the startup’s runway and the corporate’s programme completion honestly; both are askable questions in the final round.',
        'Periksa runway startup dan tingkat penyelesaian program korporasi dengan jujur; keduanya pertanyaan yang boleh ditanyakan di putaran final.'),
      L('Read the contract type and the bond, whichever side you choose. The exciting company and the safe one both have clauses.',
        'Baca jenis kontrak dan ikatan dinasnya, sisi mana pun yang kamu pilih. Perusahaan yang seru dan yang aman sama-sama punya klausul.'),
      L('Decide for two years, not for life. The asset you buy now is what makes the opposite choice available later.',
        'Putuskan untuk dua tahun, bukan seumur hidup. Aset yang kamu beli sekarang adalah yang membuat pilihan sebaliknya tersedia nanti.')
    ],
    sources: [
      { note: L('Editorial perspective informed by Metanoia members’ accounts of both environments; no company is named or rated.',
                'Perspektif editorial yang diinformasikan oleh kisah anggota Metanoia di kedua lingkungan; tidak ada perusahaan yang disebut atau dinilai.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('The Range shows, per company, the function doors and the documented process where one exists.', 'The Range menunjukkan, per perusahaan, pintu fungsi dan proses terdokumentasi bila ada.') }
    ]
  },
  /* ═══════════ WORK LIFE · the first years, seen clearly ═══════════ */
  {
    slug: 'the-first-90-days-from-your-managers-chair', img: '../assets/pe/ed-lead.jpg', topic: 'worklife', format: 'guide',
    stages: ['fresh-graduate', 'early-professional'], featured: 'secondary',
    date: '2026-10-11', reviewed: '2026-10-11', minutes: 6, author: AUTHOR,
    title: L('The first 90 days, seen from your manager’s chair', 'Sembilan puluh hari pertama, dilihat dari kursi manajermu'),
    dek: L('New hires ask what they should learn. Managers are asking a different question: can I stop checking this person’s work? The gap between the two explains most rocky starts.',
           'Karyawan baru bertanya apa yang harus mereka pelajari. Manajer bertanya hal yang berbeda: bisakah saya berhenti memeriksa pekerjaan orang ini? Jarak di antara keduanya menjelaskan sebagian besar awal yang goyah.'),
    what: [
      L('Every manager who takes on a new hire is running a private experiment. They hand over a small task, watch how it comes back, and adjust how much they can delegate next. The experiment has three readings: does the work arrive when promised, does it arrive in a form the manager can use without rework, and does the person say early when something is going wrong? Nothing about talent or qualifications enters the reading. Three clean cycles and the manager relaxes; three messy ones and they start writing the brief twice.',
        'Setiap manajer yang menerima karyawan baru sedang menjalankan eksperimen pribadi. Mereka menyerahkan tugas kecil, mengamati bagaimana hasilnya kembali, lalu menyesuaikan seberapa banyak yang bisa didelegasikan berikutnya. Eksperimen itu punya tiga pembacaan: apakah pekerjaan tiba sesuai janji, apakah tiba dalam bentuk yang bisa langsung dipakai tanpa dikerjakan ulang, dan apakah orang ini bicara lebih awal saat ada yang salah? Bakat dan kualifikasi tidak masuk dalam pembacaan ini. Tiga siklus bersih dan manajer menjadi tenang; tiga siklus berantakan dan mereka mulai menulis brief dua kali.'),
      L('The first ninety days are therefore not a learning period in the manager’s mind. They are a trust-building period, and trust is built on predictability rather than brilliance. The new hire who sends a two-line update on Thursday without being asked is doing more for their standing than the one who stays late and surprises everyone with a polished deliverable on Monday.',
        'Karena itu, sembilan puluh hari pertama bukanlah masa belajar di benak manajer. Ia adalah masa membangun kepercayaan, dan kepercayaan dibangun di atas keterprediksian, bukan kecemerlangan. Karyawan baru yang mengirim pembaruan dua baris pada hari Kamis tanpa diminta berbuat lebih banyak untuk posisinya daripada yang lembur dan mengejutkan semua orang dengan hasil yang kinclong pada hari Senin.')
    ],
    why: L('Managers do not announce the experiment, so most new hires optimise for the wrong thing: looking capable, when the person deciding their next assignment is measuring whether they can be left alone.',
           'Manajer tidak mengumumkan eksperimen itu, sehingga kebanyakan karyawan baru mengoptimalkan hal yang salah: tampak cakap, padahal orang yang menentukan tugas berikutnya sedang mengukur apakah mereka bisa ditinggal sendiri.'),
    means: {
      'fresh-graduate': L('University rewarded the finished product. Work rewards the visible process. Show the draft, flag the risk, name the date; then deliver.',
                          'Kampus menghargai produk jadi. Kantor menghargai proses yang terlihat. Tunjukkan drafnya, tandai risikonya, sebut tanggalnya; lalu kirimkan.'),
      'early-professional': L('If you have joined a second company, the experiment restarts from zero. Reputation does not transfer with the CV; it is rebuilt one cycle at a time.',
                              'Jika kamu bergabung ke perusahaan kedua, eksperimennya dimulai lagi dari nol. Reputasi tidak berpindah bersama CV; ia dibangun ulang satu siklus demi satu siklus.')
    },
    act: [
      L('In week one, ask your manager two questions: “How do you like to receive updates?” and “What would make you confident to hand me something bigger?” Write the answers down and follow them exactly.',
        'Di minggu pertama, tanyakan dua hal kepada manajermu: “Bagaimana Anda suka menerima pembaruan?” dan “Apa yang membuat Anda yakin untuk menyerahkan hal yang lebih besar kepada saya?” Catat jawabannya dan ikuti persis.'),
      L('Close every task the same way: what was asked, what was done, what is still open, in three lines. The habit makes you easy to delegate to.',
        'Tutup setiap tugas dengan cara yang sama: apa yang diminta, apa yang sudah dikerjakan, apa yang masih terbuka, dalam tiga baris. Kebiasaan itu membuatmu mudah diberi delegasi.'),
      L('Raise a problem the moment you can describe it, not the moment you can solve it. “This may be late by a day because X” on Tuesday is worth more than a perfect excuse on Friday.',
        'Angkat sebuah masalah begitu kamu bisa menjelaskannya, bukan begitu kamu bisa menyelesaikannya. “Ini mungkin terlambat sehari karena X” di hari Selasa lebih berharga daripada alasan sempurna di hari Jumat.'),
      L('At day 30, 60 and 90, ask for one sentence of feedback on reliability, not on skill. Skill grows on its own; reliability is what unlocks the next brief.',
        'Di hari ke-30, 60, dan 90, minta satu kalimat umpan balik tentang keandalan, bukan tentang keterampilan. Keterampilan tumbuh dengan sendirinya; keandalan adalah yang membuka brief berikutnya.')
    ],
    sources: [
      { note: L('Framing draws on Michael Watkins, “The First 90 Days” (Harvard Business Review Press), and on Metanoia mentors’ accounts of onboarding graduates; no statistics are claimed.',
                'Kerangka mengacu pada Michael Watkins, “The First 90 Days” (Harvard Business Review Press), dan pada kisah para mentor Metanoia saat menerima lulusan baru; tanpa klaim statistik.') }
    ],
    tools: [
      { pillar: 'the-rope', why: L('The Rope’s Module 11, The First 90 Days, turns the three-line close and the weekly update into a habit with a check.', 'Modul 11 The Rope, The First 90 Days, mengubah penutup tiga baris dan pembaruan mingguan menjadi kebiasaan dengan pemeriksaan.') },
      { pillar: 'the-pack', why: L('A Pack mentor who has managed graduates can tell you which of your habits read as reliable and which do not.', 'Mentor Pack yang pernah memimpin lulusan baru bisa memberi tahu kebiasaan mana yang terbaca andal dan mana yang tidak.') }
    ]
  },
  {
    slug: 'sungkan-without-silence', img: '../assets/pe/ed-room.jpg', topic: 'worklife', format: 'explainer',
    stages: ['fresh-graduate', 'early-professional'], trending: true,
    date: '2026-10-09', reviewed: '2026-10-09', minutes: 5, author: AUTHOR,
    title: L('Working across hierarchy: sungkan without silence', 'Bekerja lintas hierarki: sungkan tanpa membisu'),
    dek: L('Respect for seniority is part of how Indonesian workplaces run. The cost comes when deference turns into withholding, and the senior person never hears the thing they needed to know.',
           'Hormat pada senioritas adalah bagian dari cara kerja kantor di Indonesia. Biayanya muncul ketika rasa segan berubah menjadi menahan diri, dan orang senior tak pernah mendengar hal yang seharusnya mereka ketahui.'),
    what: [
      L('Sungkan, the reluctance to impose on or contradict someone senior, is often described as a weakness to unlearn. That misreads it. In most teams it functions as a courtesy that keeps meetings civil and lets juniors defer on matters they do not yet understand. The problem is narrower: sungkan becomes expensive at exactly the moments when a junior holds information the senior does not. A number that looks wrong, a client remark overheard, a deadline that has quietly become impossible. Deference in those moments is not politeness; it is a decision to let the senior person fail uninformed.',
        'Sungkan, keengganan untuk merepotkan atau membantah orang yang lebih senior, sering digambarkan sebagai kelemahan yang harus dibuang. Itu salah baca. Di kebanyakan tim, ia bekerja sebagai kesantunan yang menjaga rapat tetap tertib dan membiarkan junior mengalah pada hal yang belum mereka pahami. Masalahnya lebih sempit: sungkan menjadi mahal tepat pada saat seorang junior memegang informasi yang tidak dimiliki senior. Angka yang tampak salah, ucapan klien yang tak sengaja terdengar, tenggat yang diam-diam menjadi mustahil. Rasa segan pada saat seperti itu bukan kesantunan; ia adalah keputusan membiarkan orang senior gagal tanpa informasi.'),
      L('Experienced Indonesian managers describe a workable middle path. The junior does not challenge the decision; they add an observation and leave the decision where it belongs. “Pak, satu hal yang mungkin perlu dicek” followed by a fact does not contradict anyone. It gives the senior person a chance to decide with the full picture, and it is almost always received as care rather than challenge.',
        'Manajer Indonesia yang berpengalaman menggambarkan jalan tengah yang bisa dijalani. Junior tidak menantang keputusan; mereka menambahkan pengamatan dan membiarkan keputusan tetap pada tempatnya. “Pak, satu hal yang mungkin perlu dicek” diikuti sebuah fakta tidak membantah siapa pun. Ia memberi orang senior kesempatan memutuskan dengan gambaran utuh, dan hampir selalu diterima sebagai kepedulian, bukan tantangan.')
    ],
    why: L('The habit decides whether a junior becomes someone the senior relies on or someone the senior merely tolerates. Reliable people are the ones who speak when it matters and defer when it does not.',
           'Kebiasaan ini menentukan apakah seorang junior menjadi orang yang diandalkan senior atau sekadar ditoleransi. Orang yang andal adalah yang bicara saat penting dan mengalah saat tidak.'),
    means: {
      'fresh-graduate': L('You will be tempted to stay quiet for a year. Choose instead a small set of moments, facts rather than opinions, and practise the phrasing until it feels natural.',
                          'Kamu akan tergoda diam selama setahun. Pilihlah sejumlah momen kecil, fakta bukan opini, dan latih cara mengatakannya sampai terasa wajar.'),
      'early-professional': L('By now you may be the senior in some rooms. The same rule applies in reverse: make it visibly safe for the junior to add the fact you are missing.',
                              'Sekarang kamu mungkin jadi senior di beberapa ruangan. Aturan yang sama berlaku terbalik: buat junior merasa jelas aman untuk menambahkan fakta yang kamu lewatkan.')
    },
    act: [
      L('Separate facts from opinions before you speak. Facts (a date, a figure, something a client said) can be offered to anyone; opinions wait until they are asked for.',
        'Pisahkan fakta dari opini sebelum bicara. Fakta (tanggal, angka, sesuatu yang dikatakan klien) bisa disampaikan ke siapa pun; opini menunggu sampai diminta.'),
      L('Use the additive form: “one thing that might be worth checking” or “satu hal yang mungkin perlu dicek”, then the fact, then stop. Do not propose the decision.',
        'Gunakan bentuk menambahkan: “satu hal yang mungkin perlu dicek”, lalu faktanya, lalu berhenti. Jangan mengusulkan keputusannya.'),
      L('Pick the channel by the stakes. Small corrections go in a private message after the meeting; anything that changes a deadline or a client promise goes to the senior person directly and immediately.',
        'Pilih saluran sesuai taruhannya. Koreksi kecil disampaikan lewat pesan pribadi usai rapat; apa pun yang mengubah tenggat atau janji ke klien disampaikan langsung dan segera ke orang senior.'),
      L('When you are the senior, say it out loud once a month: “If you see something off, tell me; I would rather know.” Then thank the first person who does, in front of others.',
        'Saat kamu yang senior, ucapkan sebulan sekali: “Kalau ada yang janggal, beri tahu saya; saya lebih suka tahu.” Lalu berterima kasihlah pada orang pertama yang melakukannya, di depan yang lain.')
    ],
    sources: [
      { note: L('Editorial explainer informed by Metanoia mentors who have managed teams in Indonesian corporates and agencies; the term is used as practitioners use it, not as a cultural generalisation.',
                'Penjelasan editorial yang diinformasikan oleh mentor Metanoia yang pernah memimpin tim di korporasi dan agensi Indonesia; istilah ini dipakai sebagaimana praktisi memakainya, bukan sebagai generalisasi budaya.') }
    ],
    tools: [
      { pillar: 'the-pack', why: L('Rehearse the additive phrasing with a mentor who has sat on both sides of the table.', 'Latih bentuk kalimat menambahkan bersama mentor yang pernah duduk di kedua sisi meja.') },
      { pillar: 'the-route', why: L('The Route’s Module 3, Managing Up, Across, and Down, gives the bad-news template and the pre-alignment plan this article leans on.', 'Modul 3 The Route, Managing Up, Across, and Down, memberi templat kabar buruk dan rencana pra-penyelarasan yang menjadi sandaran artikel ini.') }
    ]
  },
  {
    slug: 'managing-up-in-one-page-a-week', img: '../assets/pe/ed-handshake.jpg', topic: 'worklife', format: 'guide',
    stages: ['early-professional', 'mature-professional'],
    date: '2026-10-07', reviewed: '2026-10-07', minutes: 5, author: AUTHOR,
    title: L('Managing up in one page a week', 'Mengelola atasan dengan satu halaman seminggu'),
    dek: L('Your manager has less time, more pressure and worse information than you think. A short weekly page fixes the third problem, and the first two improve as a result.',
           'Manajermu punya lebih sedikit waktu, lebih banyak tekanan, dan informasi yang lebih buruk daripada yang kamu kira. Satu halaman singkat setiap minggu membereskan masalah ketiga, dan dua yang pertama ikut membaik.'),
    what: [
      L('“Managing up” has a bad reputation because it sounds like flattery. The useful version is logistical. A manager who runs eight people cannot hold eight sets of priorities, risks and blockers in their head. The ones who seem to run smoothly are usually being fed a steady, compact stream of information by their best people. The page does three things: it tells the manager what is moving, it asks for the one decision only they can make, and it records what was agreed so nobody has to remember.',
        '“Mengelola atasan” punya reputasi buruk karena terdengar seperti menjilat. Versi yang berguna bersifat logistik. Manajer yang memimpin delapan orang tidak bisa menyimpan delapan rangkaian prioritas, risiko, dan hambatan di kepalanya. Yang tampak berjalan mulus biasanya sedang disuplai aliran informasi yang ajek dan padat oleh orang-orang terbaiknya. Halaman itu melakukan tiga hal: memberi tahu manajer apa yang bergerak, meminta satu keputusan yang hanya bisa mereka ambil, dan mencatat apa yang disepakati agar tak ada yang perlu mengingat-ingat.'),
      L('The format matters less than the rhythm. Sent at the same time every week, the page becomes something the manager reads in two minutes before their own meetings. Sent irregularly, it becomes one more message to triage. The page is also the record that protects you when priorities shift: what was agreed, and when, is written down in your own words.',
        'Formatnya tidak sepenting ritmenya. Dikirim pada waktu yang sama setiap minggu, halaman itu menjadi sesuatu yang dibaca manajer dalam dua menit sebelum rapat mereka sendiri. Dikirim tak teratur, ia menjadi satu lagi pesan yang harus dipilah. Halaman itu juga catatan yang melindungimu saat prioritas bergeser: apa yang disepakati, dan kapan, tertulis dengan kata-katamu sendiri.')
    ],
    why: L('Most career stalls in the early years are not about capability. They are about a manager who could not see the work, and therefore could not advocate for the person doing it.',
           'Kebanyakan kemandekan karier di tahun-tahun awal bukan soal kemampuan. Ia soal manajer yang tidak bisa melihat pekerjaannya, dan karenanya tidak bisa membela orang yang mengerjakannya.'),
    means: {
      'early-professional': L('This is the single highest-return habit of your first promotion cycle. It costs twenty minutes a week and makes your work legible to the person who writes your review.',
                              'Ini kebiasaan dengan imbal hasil tertinggi dalam siklus promosi pertamamu. Biayanya dua puluh menit seminggu dan membuat pekerjaanmu terbaca oleh orang yang menulis penilaianmu.'),
      'mature-professional': L('At senior levels the page shrinks to five lines and moves to your manager’s manager when needed. The discipline is the same; the audience changes.',
                               'Di tingkat senior, halaman itu menyusut jadi lima baris dan naik ke atasan manajermu bila perlu. Disiplinnya sama; audiensnya berubah.')
    },
    act: [
      L('Use four headings, every week, in this order: Done, Next, Risks, Need from you. Keep each under three bullets.',
        'Gunakan empat judul, setiap minggu, dengan urutan ini: Selesai, Berikutnya, Risiko, Yang saya butuhkan dari Anda. Masing-masing di bawah tiga poin.'),
      L('“Need from you” must contain at most one request, phrased so it can be answered with a yes, a no or a name. Decisions that need a conversation go in a meeting, not the page.',
        '“Yang saya butuhkan dari Anda” maksimal berisi satu permintaan, dirumuskan agar bisa dijawab dengan ya, tidak, atau sebuah nama. Keputusan yang butuh percakapan masuk ke rapat, bukan ke halaman.'),
      L('Send it at the same time weekly, before your manager’s own reporting moment. Ask once which day suits them, then never ask again.',
        'Kirim pada waktu yang sama tiap minggu, sebelum momen pelaporan manajermu sendiri. Tanyakan sekali hari mana yang cocok, lalu jangan tanya lagi.'),
      L('Keep every page in one document. At review time, your year is already written: what you did, what you flagged, what was decided and by whom.',
        'Simpan semua halaman dalam satu dokumen. Saat penilaian tiba, tahunmu sudah tertulis: apa yang kamu kerjakan, apa yang kamu tandai, apa yang diputuskan, dan oleh siapa.')
    ],
    sources: [
      { note: L('Method piece; the four-heading format is a Metanoia editorial convention distilled from mentors’ own weekly notes. No statistics are claimed.',
                'Artikel metode; format empat judul adalah konvensi editorial Metanoia yang disarikan dari catatan mingguan para mentor sendiri. Tanpa klaim statistik.') }
    ],
    tools: [
      { pillar: 'the-route', why: L('The Route’s Lesson 3.1, Managing Up: Understanding Your Manager, builds the manager map this page is written for.', 'Pelajaran 3.1 The Route, Managing Up: Understanding Your Manager, membangun peta manajer yang menjadi sasaran halaman ini.') }
    ]
  },

  /* ═══════════ MARKET · reading the ground before you aim ═══════════ */
  {
    slug: 'reading-an-annual-report-in-twenty-minutes', img: '../assets/pe/th-mapread.jpg', topic: 'market', format: 'guide',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-10-05', reviewed: '2026-10-05', minutes: 6, author: AUTHOR,
    title: L('Reading an annual report in twenty minutes', 'Membaca laporan tahunan dalam dua puluh menit'),
    dek: L('Every listed company in Indonesia publishes a document that explains where it makes money, what it fears and what it plans to build. Almost no candidate reads it. Here is the short route through it.',
           'Setiap perusahaan tercatat di Indonesia menerbitkan dokumen yang menjelaskan dari mana ia menghasilkan uang, apa yang ditakutinya, dan apa yang akan dibangunnya. Hampir tak ada kandidat yang membacanya. Berikut rute singkat menelusurinya.'),
    what: [
      L('An annual report is long because regulators require it to be, not because every page matters to you. For a candidate or a new joiner, five sections carry nearly all the value. The letter from the board or CEO states the year in the company’s own voice. The segment table shows which businesses actually earn the money, which is often not the one the brand is known for. The risk factors list what management worries about, in order. The strategy or outlook pages name the projects that will need people. And the human capital section, now standard in Indonesian reports, says how many employees there are, how they are distributed and what the company claims to invest in them.',
        'Laporan tahunan panjang karena regulator mewajibkannya, bukan karena setiap halaman penting bagimu. Bagi kandidat atau karyawan baru, lima bagian memuat hampir seluruh nilainya. Surat dari dewan atau CEO menyatakan tahun itu dengan suara perusahaan sendiri. Tabel segmen menunjukkan bisnis mana yang benar-benar menghasilkan uang, yang sering kali bukan bisnis yang dikenal mereknya. Daftar faktor risiko memuat apa yang dicemaskan manajemen, berurutan. Halaman strategi atau prospek menyebut proyek yang akan membutuhkan orang. Dan bagian sumber daya manusia, yang kini standar di laporan Indonesia, menyebut berapa jumlah karyawan, bagaimana sebarannya, dan apa yang diklaim perusahaan sebagai investasi pada mereka.'),
      L('Reading these five sections turns a vague interest in a company into specific questions. A candidate who asks about the segment that grew fastest, or about the risk the company placed first, is having a different conversation from one who asks about the culture. Interviewers notice, because they rarely hear it.',
        'Membaca lima bagian ini mengubah minat samar pada sebuah perusahaan menjadi pertanyaan yang spesifik. Kandidat yang bertanya tentang segmen yang tumbuh paling cepat, atau tentang risiko yang ditempatkan perusahaan di urutan pertama, sedang menjalani percakapan yang berbeda dari yang bertanya tentang budaya. Pewawancara menyadarinya, karena mereka jarang mendengarnya.')
    ],
    why: L('The report is public, free and written by the company itself. It is the cheapest piece of preparation with the largest gap between how useful it is and how few people use it.',
           'Laporan itu publik, gratis, dan ditulis perusahaan sendiri. Ia adalah persiapan paling murah dengan jarak terbesar antara seberapa berguna dan seberapa sedikit orang memakainya.'),
    means: {
      'student': L('Read one report for one company you admire. You will learn more about how businesses work than from a term of case studies about them.',
                   'Baca satu laporan dari satu perusahaan yang kamu kagumi. Kamu akan belajar lebih banyak tentang cara bisnis bekerja daripada satu semester studi kasus tentangnya.'),
      'fresh-graduate': L('Before any interview with a listed company, do the twenty minutes. Bring one question from the segment table and one from the risk list.',
                          'Sebelum wawancara dengan perusahaan tercatat mana pun, luangkan dua puluh menit itu. Bawa satu pertanyaan dari tabel segmen dan satu dari daftar risiko.'),
      'early-professional': L('For a lateral move, read the last three reports in sequence. The thing that moved from “outlook” to “segment” is where the hiring is.',
                              'Untuk pindah lateral, baca tiga laporan terakhir berurutan. Hal yang berpindah dari “prospek” ke “segmen” adalah tempat perekrutan terjadi.')
    },
    act: [
      L('Find the report on the company’s investor relations page or the Indonesia Stock Exchange (IDX) site; search for “laporan tahunan” plus the company name.',
        'Cari laporannya di halaman hubungan investor perusahaan atau situs Bursa Efek Indonesia (BEI); cari “laporan tahunan” plus nama perusahaan.'),
      L('Spend the twenty minutes in this order: CEO letter (4), segment table (4), risk factors (4), strategy pages (4), human capital (4). Set a timer and stop.',
        'Habiskan dua puluh menit dengan urutan ini: surat CEO (4), tabel segmen (4), faktor risiko (4), halaman strategi (4), sumber daya manusia (4). Pasang pengatur waktu dan berhenti.'),
      L('Write three lines: where the money comes from, what they are afraid of, what they are building. If you cannot fill a line, you have found your interview question.',
        'Tulis tiga baris: dari mana uangnya, apa yang mereka takutkan, apa yang mereka bangun. Jika satu baris tak bisa diisi, kamu telah menemukan pertanyaan wawancaramu.'),
      L('Cross-check with The Range: the functions that have doors at the company should match the segments and projects you just read about. Where they do not, ask why.',
        'Periksa silang dengan The Range: fungsi yang punya pintu di perusahaan itu seharusnya sesuai dengan segmen dan proyek yang baru kamu baca. Bila tidak, tanyakan mengapa.')
    ],
    sources: [
      { note: L('Section names follow the structure required by Indonesia’s Financial Services Authority (OJK) for issuers’ annual reports; the twenty-minute order is editorial. No company is named or rated.',
                'Nama bagian mengikuti struktur yang diwajibkan Otoritas Jasa Keuangan (OJK) untuk laporan tahunan emiten; urutan dua puluh menit bersifat editorial. Tidak ada perusahaan yang disebut atau dinilai.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('The Range (Explore) lists each company’s function doors and documented hiring process to set beside what the report says.', 'The Range (Explore) memuat pintu fungsi tiap perusahaan dan proses rekrutmen terdokumentasi untuk disandingkan dengan isi laporan.') }
    ]
  },
  {
    slug: 'regional-cities-as-a-first-move', img: '../assets/pe/th-trail.jpg', topic: 'market', format: 'perspective',
    stages: ['fresh-graduate', 'early-professional'],
    date: '2026-10-03', reviewed: '2026-10-03', minutes: 5, author: AUTHOR,
    title: L('Regional cities as a first move', 'Kota daerah sebagai langkah pertama'),
    dek: L('Jakarta concentrates headquarters, competition and rent. A first role in Surabaya, Medan, Makassar or Balikpapan can mean more responsibility sooner, if you choose the employer for the right reason.',
           'Jakarta memusatkan kantor pusat, persaingan, dan biaya sewa. Peran pertama di Surabaya, Medan, Makassar, atau Balikpapan bisa berarti tanggung jawab lebih besar lebih cepat, jika kamu memilih pemberi kerja dengan alasan yang tepat.'),
    what: [
      L('The usual argument for Jakarta is density: more companies, more roles, more people to learn from. The argument is correct and incomplete. Density also means that a graduate is one of many, that the interesting work sits several layers up, and that a large share of the first salary goes to rent and commuting. Regional operations of the same companies run with thinner teams. A branch finance officer in a provincial capital sees the whole cycle of the business in a year; their counterpart at head office may see one slice of it for three.',
        'Argumen yang biasa untuk Jakarta adalah kepadatan: lebih banyak perusahaan, lebih banyak peran, lebih banyak orang untuk belajar. Argumen itu benar dan tidak lengkap. Kepadatan juga berarti seorang lulusan hanyalah satu dari banyak, pekerjaan yang menarik berada beberapa lapis di atas, dan sebagian besar gaji pertama habis untuk sewa dan perjalanan. Operasi daerah dari perusahaan yang sama berjalan dengan tim yang lebih tipis. Petugas keuangan cabang di ibu kota provinsi melihat seluruh siklus bisnis dalam setahun; rekannya di kantor pusat mungkin hanya melihat satu irisannya selama tiga tahun.'),
      L('The trade has real costs. Mentors are fewer, the next employer is harder to find locally, and some head-office roles are not advertised to regional staff. The move works when the employer is a national or multinational company with a documented path back to the centre, and it works badly when the employer is local-only and the role has no next step. Choose the organisation, then the city, not the other way round.',
        'Pertukaran ini punya biaya nyata. Mentor lebih sedikit, pemberi kerja berikutnya lebih sulit ditemukan secara lokal, dan sebagian peran kantor pusat tidak diiklankan ke staf daerah. Langkah ini berhasil ketika pemberi kerja adalah perusahaan nasional atau multinasional dengan jalur terdokumentasi kembali ke pusat, dan gagal ketika pemberi kerja hanya lokal dan perannya tak punya langkah berikutnya. Pilih organisasinya, baru kotanya, bukan sebaliknya.')
    ],
    why: L('Responsibility compounds. Two years of running something end to end, even something small, is worth more at the next interview than two years of supporting someone who did.',
           'Tanggung jawab bersifat majemuk. Dua tahun menjalankan sesuatu dari ujung ke ujung, sekecil apa pun, lebih bernilai di wawancara berikutnya daripada dua tahun membantu orang yang menjalankannya.'),
    means: {
      'fresh-graduate': L('If a national company offers you a regional role and a Jakarta company offers a smaller one, ask both where the role’s holder was two years later. Decide on the answer.',
                          'Jika perusahaan nasional menawarimu peran daerah dan perusahaan Jakarta menawarkan peran yang lebih kecil, tanyakan kepada keduanya di mana pemegang peran itu dua tahun kemudian. Putuskan berdasarkan jawabannya.'),
      'early-professional': L('A regional posting mid-career is often the fastest route to a general-management profile. The question is whether the company moves people back; check before you go.',
                              'Penugasan daerah di tengah karier sering menjadi jalur tercepat menuju profil manajemen umum. Pertanyaannya apakah perusahaan memindahkan orang kembali; periksa sebelum berangkat.')
    },
    act: [
      L('Shortlist employers in The Range by function, then filter for those with regional operations and a stated rotation or transfer practice.',
        'Buat daftar pendek pemberi kerja di The Range berdasarkan fungsi, lalu saring yang punya operasi daerah serta praktik rotasi atau transfer yang dinyatakan.'),
      L('In the interview, ask: “What has happened to the last two people who held this role?” A clear answer means a path exists; a vague one means it does not.',
        'Dalam wawancara, tanyakan: “Apa yang terjadi pada dua orang terakhir yang memegang peran ini?” Jawaban jelas berarti jalurnya ada; jawaban samar berarti tidak.'),
      L('Set a review date before you accept: eighteen or twenty-four months, after which you either have the next step in writing or you start looking.',
        'Tetapkan tanggal tinjauan sebelum menerima: delapan belas atau dua puluh empat bulan, setelah itu kamu punya langkah berikutnya secara tertulis atau mulai mencari.'),
      L('Keep a Jakarta-based mentor regardless of where you sit. The Pack exists so that distance from head office is not distance from advice.',
        'Pertahankan mentor yang berbasis di Jakarta di mana pun kamu berada. The Pack ada agar jarak dari kantor pusat bukan jarak dari nasihat.')
    ],
    sources: [
      { note: L('Editorial perspective informed by Metanoia mentors who began outside Jakarta; cities are named as examples of provincial capitals with corporate operations, not as rankings. No statistics are claimed.',
                'Perspektif editorial yang diinformasikan oleh mentor Metanoia yang memulai di luar Jakarta; kota disebut sebagai contoh ibu kota provinsi dengan operasi korporasi, bukan sebagai peringkat. Tanpa klaim statistik.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('Use The Range (Explore) to see which companies in your function have operations outside Jakarta.', 'Gunakan The Range (Explore) untuk melihat perusahaan di fungsimu yang punya operasi di luar Jakarta.') },
      { pillar: 'the-pack', why: L('A mentor who made the move can tell you which employers actually bring people back.', 'Mentor yang pernah melakukan langkah ini bisa memberi tahu pemberi kerja mana yang benar-benar memulangkan orang.') }
    ]
  },

  /* ═══════════ OPPORTUNITIES · what the reviewer reads ═══════════ */
  {
    slug: 'what-scholarship-reviewers-actually-read', img: '../assets/pe/ed-abroad-map.jpg', topic: 'opportunities', format: 'guide',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-10-01', reviewed: '2026-10-01', minutes: 6, author: AUTHOR,
    title: L('What scholarship reviewers actually read', 'Yang benar-benar dibaca penilai beasiswa'),
    dek: L('Reviewers score hundreds of applications against a rubric in a few days. The essay that wins is rarely the most moving one; it is the one that makes the rubric easy to tick.',
           'Penilai menskor ratusan aplikasi berdasarkan rubrik dalam beberapa hari. Esai yang menang jarang yang paling mengharukan; ia adalah esai yang membuat rubrik mudah dicentang.'),
    what: [
      L('Most major scholarship programmes publish their selection criteria, and most applicants read them once and then write the essay they wanted to write anyway. Reviewers, by contrast, read with the criteria open beside them. They are looking for evidence under each heading: a clear study plan, a specific contribution to the country or field, leadership shown rather than claimed, and a plausible reason why this programme and not another. An essay that tells a beautiful story but leaves two headings empty scores below a plainer one that covers all four.',
        'Sebagian besar program beasiswa besar menerbitkan kriteria seleksinya, dan sebagian besar pelamar membacanya sekali lalu menulis esai yang memang ingin mereka tulis. Penilai, sebaliknya, membaca dengan kriteria terbuka di sampingnya. Mereka mencari bukti di bawah tiap judul: rencana studi yang jelas, kontribusi spesifik bagi negara atau bidang, kepemimpinan yang ditunjukkan bukan diklaim, dan alasan masuk akal mengapa program ini dan bukan yang lain. Esai yang menceritakan kisah indah tetapi membiarkan dua judul kosong dinilai di bawah esai yang lebih polos tapi mencakup keempatnya.'),
      L('The second thing reviewers read is consistency. The study plan, the recommendation letters and the interview must describe the same person heading in the same direction. A plan to study public health that is supported by a referee who praises your sales results and an interview where you mention wanting to work in fintech is three applications, not one, and none of them is strong.',
        'Hal kedua yang dibaca penilai adalah konsistensi. Rencana studi, surat rekomendasi, dan wawancara harus menggambarkan orang yang sama menuju arah yang sama. Rencana belajar kesehatan masyarakat yang didukung pemberi rekomendasi yang memuji hasil penjualanmu, dan wawancara yang menyebut keinginan bekerja di fintech, adalah tiga aplikasi, bukan satu, dan tak satu pun kuat.')
    ],
    why: L('Scholarships are decided by tired people with a rubric, not by a sympathetic reader with an afternoon. Writing for the rubric is not cynicism; it is respect for how the decision is actually made.',
           'Beasiswa diputuskan oleh orang-orang lelah dengan rubrik, bukan oleh pembaca simpatik dengan waktu sore yang luang. Menulis untuk rubrik bukan sinisme; ia adalah penghormatan pada cara keputusan sungguh dibuat.'),
    means: {
      'student': L('Start a folder now with evidence under each common heading: leadership, contribution, academic plan. The essay writes itself in final year if the evidence exists.',
                   'Mulai sekarang buat folder berisi bukti di bawah tiap judul umum: kepemimpinan, kontribusi, rencana akademik. Esainya akan menulis dirinya sendiri di tahun akhir jika buktinya ada.'),
      'fresh-graduate': L('Your work experience is short, so the contribution heading carries your application. Be specific about what you would do in year one after returning.',
                          'Pengalaman kerjamu singkat, sehingga judul kontribusi menopang aplikasimu. Spesifiklah tentang apa yang akan kamu lakukan di tahun pertama setelah kembali.'),
      'early-professional': L('You have the evidence; your risk is a study plan that reads as an escape from work rather than a step in it. Tie the degree to a role you can name.',
                              'Kamu punya buktinya; risikomu adalah rencana studi yang terbaca sebagai pelarian dari pekerjaan, bukan langkah di dalamnya. Kaitkan gelar itu dengan peran yang bisa kamu sebut.')
    },
    act: [
      L('Copy the programme’s published criteria into a table. Under each one, write the single strongest piece of evidence you have. Empty cells are your to-do list, not your essay.',
        'Salin kriteria yang diterbitkan program ke dalam tabel. Di bawah tiap kriteria, tulis satu bukti terkuat yang kamu miliki. Sel yang kosong adalah daftar tugasmu, bukan esaimu.'),
      L('Structure the essay so each criterion has its own paragraph, in the order the programme lists them. Reviewers tick faster when they do not have to hunt.',
        'Susun esai agar tiap kriteria punya paragrafnya sendiri, sesuai urutan yang dipakai program. Penilai mencentang lebih cepat bila tidak perlu mencari.'),
      L('Brief your referees with the same table. Ask each to cover the criteria they have seen first-hand; a letter that repeats your essay adds nothing.',
        'Beri pemberi rekomendasi tabel yang sama. Minta masing-masing membahas kriteria yang mereka saksikan langsung; surat yang mengulang esaimu tak menambah apa pun.'),
      L('Check the Opportunity Radar in Mind Palace for the programme’s official page and last-checked date; apply only through the link given there.',
        'Periksa Opportunity Radar di Mind Palace untuk halaman resmi program dan tanggal terakhir diperiksa; lamar hanya melalui tautan yang tercantum di sana.')
    ],
    sources: [
      { note: L('General guidance consistent with the published selection criteria of major programmes listed in the Opportunity Radar (LPDP, Chevening, Fulbright, Australia Awards); check each programme’s current page before applying. No acceptance rates are claimed.',
                'Panduan umum yang konsisten dengan kriteria seleksi terbitan program-program besar yang terdaftar di Opportunity Radar (LPDP, Chevening, Fulbright, Australia Awards); periksa halaman terkini tiap program sebelum melamar. Tanpa klaim tingkat penerimaan.') }
    ],
    tools: [
      { pillar: 'the-pack', why: L('Alumni of these programmes in The Pack can read your table against the rubric before you write a word.', 'Alumni program-program ini di The Pack bisa membaca tabelmu terhadap rubrik sebelum kamu menulis sepatah kata pun.') },
      { pillar: 'the-rope', why: L('The Rope’s Module 2, Your Story Bank, is where the evidence under each criterion gets written as a story a reviewer can score.', 'Modul 2 The Rope, Your Story Bank, adalah tempat bukti di bawah tiap kriteria ditulis sebagai kisah yang bisa diskor penilai.') }
    ]
  }
  );

  ARTICLES.push(
  /* ═══════════ PROBLEM SOLVING & CONSULTING · the industry and the career ═══════════
     Topic map informed by CaseCoach’s public blog (casecoach.com/blog); every piece
     is original Metanoia writing adapted to Indonesian candidates and wired into the
     products. CaseCoach pages are linked under Further reading, never reproduced. */
  {
    slug: 'what-consultants-actually-do', img: '../assets/pe/ed-people.jpg', topic: 'consulting', format: 'explainer', level: 'foundation',
    stages: ['student', 'fresh-graduate', 'early-professional'], featured: 'secondary',
    date: '2026-10-13', reviewed: '2026-10-13', minutes: 7, author: AUTHOR,
    title: L('What management consultants actually do, and the firms that hire them', 'Apa yang sebenarnya dikerjakan konsultan manajemen, dan firma yang merekrut mereka'),
    dek: L('Consulting is not one job. Strategy, transformation, technology and specialist advice are different trades with different days. Know which one you mean.',
           'Konsultasi bukan satu pekerjaan. Strategi, transformasi, teknologi, dan nasihat spesialis adalah keahlian berbeda dengan hari kerja berbeda. Ketahui yang kamu maksud.'),
    what: [
      L('A consultant is paid to help a client make or carry out a decision the client cannot handle alone, usually because of time, expertise or the need for an outside view. The work arrives as a project with a question, a team, a deadline and a fee. A typical project runs for weeks or months: the team gathers facts, builds an analysis, tests ideas with the client’s managers and ends with a recommendation or a working change. Then the team disbands and its members join the next project, often in a different industry.',
        'Konsultan dibayar untuk membantu klien membuat atau menjalankan keputusan yang tidak bisa ditangani klien sendirian, biasanya karena waktu, keahlian, atau kebutuhan akan sudut pandang luar. Pekerjaan datang sebagai proyek dengan pertanyaan, tim, tenggat, dan biaya. Proyek biasanya berjalan berminggu-minggu atau berbulan-bulan: tim mengumpulkan fakta, menyusun analisis, menguji gagasan bersama manajer klien, dan berakhir dengan rekomendasi atau perubahan yang berjalan. Lalu tim bubar dan anggotanya bergabung ke proyek berikutnya, sering di industri yang berbeda.'),
      L('Under one word sit several trades. Strategy firms answer questions such as where to grow, what to buy or how to respond to a competitor. Operations and transformation teams redesign how work gets done, from procurement to branch networks. Technology consultancies design and implement systems. Specialist advisers cover areas such as risk, tax, people or sustainability. In Indonesia you will meet all of them: global strategy firms with Jakarta offices, the Indonesian member firms of the Big Four, technology integrators, local boutiques, and in-house strategy teams inside large groups and state-owned enterprises that do consulting-style work for one employer.',
        'Di bawah satu kata ada beberapa keahlian. Firma strategi menjawab pertanyaan seperti ke mana tumbuh, apa yang dibeli, atau bagaimana merespons pesaing. Tim operasi dan transformasi mendesain ulang cara kerja, dari pengadaan sampai jaringan cabang. Konsultan teknologi merancang dan mengimplementasikan sistem. Penasihat spesialis menangani bidang seperti risiko, pajak, SDM, atau keberlanjutan. Di Indonesia kamu akan bertemu semuanya: firma strategi global dengan kantor di Jakarta, firma anggota Big Four di Indonesia, integrator teknologi, butik lokal, dan tim strategi internal di grup besar serta BUMN yang melakukan pekerjaan bergaya konsultan untuk satu pemberi kerja.')
    ],
    why: L('Candidates who say “I want to be a consultant” without naming the trade write vague applications and struggle in the “why us” question. Naming the trade is the first sign of the structured thinking the job requires.',
           'Kandidat yang berkata “Saya ingin jadi konsultan” tanpa menyebut keahliannya menulis lamaran yang samar dan kesulitan di pertanyaan “mengapa kami”. Menyebut keahliannya adalah tanda pertama dari cara berpikir terstruktur yang dituntut pekerjaan ini.'),
    framework: {
      name: L('Four kinds of consulting work', 'Empat jenis pekerjaan konsultasi'),
      steps: [
        { h: L('Strategy', 'Strategi'), d: L('Short, intense projects on direction: growth, entry, acquisitions, pricing. Output is a recommendation to senior leadership.', 'Proyek singkat dan intens tentang arah: pertumbuhan, masuk pasar, akuisisi, harga. Hasilnya rekomendasi untuk pimpinan puncak.') },
        { h: L('Operations and transformation', 'Operasi dan transformasi'), d: L('Longer projects that change how the work is done and measure the result: cost, service, productivity.', 'Proyek lebih panjang yang mengubah cara kerja dan mengukur hasilnya: biaya, layanan, produktivitas.') },
        { h: L('Technology and implementation', 'Teknologi dan implementasi'), d: L('Design, build and roll out systems; closer to engineering and project management.', 'Merancang, membangun, dan meluncurkan sistem; lebih dekat ke rekayasa dan manajemen proyek.') },
        { h: L('Specialist advisory', 'Nasihat spesialis'), d: L('Deep expertise in one domain such as tax, risk, people or sustainability; often tied to regulation.', 'Keahlian dalam pada satu domain seperti pajak, risiko, SDM, atau keberlanjutan; sering terkait regulasi.') }
      ]
    },
    means: {
      'student': L('You do not need to choose a trade yet, but you should be able to explain the difference between them in two sentences each.', 'Kamu belum perlu memilih keahlian, tetapi kamu harus bisa menjelaskan perbedaannya masing-masing dalam dua kalimat.'),
      'fresh-graduate': L('Apply to the trade that fits the work you enjoy, not to the firm with the loudest name. Graduate intakes in each trade look for different evidence.', 'Lamar ke keahlian yang cocok dengan pekerjaan yang kamu nikmati, bukan ke firma dengan nama paling nyaring. Penerimaan lulusan di tiap keahlian mencari bukti yang berbeda.'),
      'early-professional': L('Your industry experience is an asset. Specialist and transformation practices often value it more than strategy teams do at entry.', 'Pengalaman industrimu adalah aset. Praktik spesialis dan transformasi sering menghargainya lebih tinggi daripada tim strategi di tingkat masuk.')
    },
    act: [
      L('Write one sentence describing each of the four trades in your own words. If you cannot, read two firms’ project descriptions until you can.', 'Tulis satu kalimat yang menjelaskan masing-masing dari empat keahlian dengan kata-katamu sendiri. Jika belum bisa, baca deskripsi proyek dua firma sampai bisa.'),
      L('Open The Range, filter for Consulting & Professional Services, and sort the firms you recognise into the four trades.', 'Buka The Range, saring Konsultan & Jasa Profesional, dan kelompokkan firma yang kamu kenal ke empat keahlian itu.'),
      L('Ask one person who works in consulting what a normal Tuesday looked like on their last project. The answer tells you more than any brochure.', 'Tanyakan kepada satu orang yang bekerja di konsultasi seperti apa hari Selasa biasa di proyek terakhirnya. Jawabannya bercerita lebih banyak daripada brosur mana pun.'),
      L('Decide which trade you are aiming at and write it at the top of your application notes.', 'Putuskan keahlian mana yang kamu bidik dan tulis di bagian atas catatan lamaranmu.')
    ],
    reflect: [
      L('Which of the four trades produces the kind of work you would be proud to show someone in five years?', 'Dari empat keahlian itu, mana yang menghasilkan pekerjaan yang akan kamu banggakan lima tahun lagi?'),
      L('Do you prefer recommending a change or carrying it out? Your answer points to a trade.', 'Kamu lebih suka merekomendasikan perubahan atau menjalankannya? Jawabanmu menunjuk ke satu keahlian.')
    ],
    sources: [
      { note: L('Original Metanoia explainer. Topic selection informed by CaseCoach’s guide to the consulting industry (see Further reading); no text reproduced. Firm types are described generically; no firm is ranked.',
                'Penjelasan asli Metanoia. Pemilihan topik diinformasikan oleh panduan industri konsultasi dari CaseCoach (lihat Bacaan lanjutan); tidak ada teks yang direproduksi. Jenis firma dijelaskan secara umum; tidak ada firma yang diperingkat.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('The Range (Explore) lists consulting and professional-services firms with their roles and hiring processes; The Map’s virtual job simulation includes a Consulting & Professional Services track.', 'The Range (Explore) memuat firma konsultan dan jasa profesional beserta peran dan proses rekrutmennya; simulasi kerja virtual The Map memiliki jalur Konsultan & Jasa Profesional.') }
    ],
    further: [
      { url: 'https://casecoach.com/b/the-management-consulting-industry-the-free-casecoach-guide-for-candidates/', label: 'The management consulting industry: a guide for candidates', by: 'CaseCoach' },
      { url: 'https://casecoach.com/b/big-4-consulting-firms-different-mckinsey-bcg-bain/', label: 'Big Four consulting versus McKinsey, BCG and Bain', by: 'CaseCoach' }
    ]
  },
  {
    slug: 'is-consulting-for-you', img: '../assets/pe/ed-stay.jpg', topic: 'consulting', format: 'perspective', level: 'foundation',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-10-12', reviewed: '2026-10-12', minutes: 6, author: AUTHOR,
    title: L('Is consulting for you? Five questions before you spend six weeks preparing', 'Apakah konsultasi cocok untukmu? Lima pertanyaan sebelum menghabiskan enam minggu persiapan'),
    dek: L('Consulting rewards a particular temperament with a fast education. It also asks a particular price. Answer five honest questions before you start drilling cases.',
           'Konsultasi memberi pendidikan cepat kepada temperamen tertentu. Ia juga meminta harga tertentu. Jawab lima pertanyaan jujur sebelum mulai berlatih kasus.'),
    what: [
      L('People join consulting for good reasons. The learning curve is steep because every project is a new industry and a new problem. Junior staff present to senior clients far earlier than they would inside a company. The network of colleagues and alumni travels with you for a career. And the training in structured thinking, writing and presenting transfers to almost any later role.',
        'Orang bergabung ke konsultasi karena alasan yang baik. Kurva belajarnya curam karena setiap proyek adalah industri baru dan masalah baru. Staf junior presentasi ke klien senior jauh lebih awal daripada di dalam perusahaan. Jaringan rekan dan alumni ikut bersamamu sepanjang karier. Dan latihan berpikir terstruktur, menulis, serta presentasi bisa dibawa ke hampir semua peran berikutnya.'),
      L('People leave for equally good reasons. Hours are long and unpredictable around deadlines. Travel can be heavy. Many firms run an up-or-out model in which you are expected to be promoted within a window or move on. And some people discover they would rather own a result than advise on it. None of this makes consulting good or bad; it makes it a trade with a specific shape, and the shape should fit you.',
        'Orang keluar karena alasan yang sama baiknya. Jam kerja panjang dan tak terduga menjelang tenggat. Perjalanan bisa padat. Banyak firma menjalankan model up-or-out, yaitu kamu diharapkan naik jabatan dalam jangka waktu tertentu atau pindah. Dan sebagian orang menyadari bahwa mereka lebih suka memiliki hasil daripada menasihatinya. Semua ini tidak membuat konsultasi baik atau buruk; ia membuatnya keahlian dengan bentuk tertentu, dan bentuk itu harus cocok denganmu.')
    ],
    why: L('Case preparation takes weeks of evenings. Spending them on a career you would leave within a year is the expensive mistake; ten minutes of honest questions is the cheap insurance.',
           'Persiapan kasus memakan malam-malam selama berminggu-minggu. Menghabiskannya untuk karier yang akan kamu tinggalkan dalam setahun adalah kesalahan mahal; sepuluh menit pertanyaan jujur adalah asuransi murahnya.'),
    framework: {
      name: L('The five-question fit test', 'Uji kecocokan lima pertanyaan'),
      steps: [
        { h: L('Do ambiguous problems energise you?', 'Apakah masalah yang ambigu memberimu energi?'), d: L('Most projects start with a question nobody has answered well. If that excites you, good sign.', 'Sebagian besar proyek dimulai dengan pertanyaan yang belum dijawab dengan baik. Jika itu menyemangatimu, tanda baik.') },
        { h: L('Can you take blunt feedback weekly?', 'Bisakah kamu menerima umpan balik lugas setiap minggu?'), d: L('Drafts come back marked up. Progress depends on absorbing it without losing pace.', 'Draf kembali penuh coretan. Kemajuan bergantung pada menyerapnya tanpa kehilangan laju.') },
        { h: L('Are you comfortable not being the expert?', 'Nyamankah kamu tidak menjadi ahlinya?'), d: L('You will often know less about the industry than the client. Your value is the method.', 'Kamu sering tahu lebih sedikit tentang industrinya daripada klien. Nilaimu ada pada metodenya.') },
        { h: L('Can your life absorb irregular weeks?', 'Bisakah hidupmu menampung minggu yang tak teratur?'), d: L('Consider family duties, health and commitments honestly, not optimistically.', 'Pertimbangkan tanggung jawab keluarga, kesehatan, dan komitmen dengan jujur, bukan optimis.') },
        { h: L('Do you know what you want to learn, and for how long?', 'Tahukah kamu apa yang ingin dipelajari, dan berapa lama?'), d: L('A clear learning goal makes the hard months worth it and tells you when to move on.', 'Tujuan belajar yang jelas membuat bulan-bulan berat sepadan dan memberi tahu kapan harus beranjak.') }
      ]
    },
    means: {
      'student': L('An internship or a consulting club project is the cheapest way to test the fit before graduation.', 'Magang atau proyek klub konsultasi adalah cara termurah menguji kecocokan sebelum lulus.'),
      'fresh-graduate': L('Weigh consulting against roles that give similar learning with different trade-offs, such as management-trainee programmes or in-house strategy teams.', 'Timbang konsultasi dengan peran yang memberi pembelajaran serupa dengan pertukaran berbeda, seperti program management trainee atau tim strategi internal.'),
      'early-professional': L('Ask what you would do after consulting. If the answer is clear, the move is easier to justify and to time.', 'Tanyakan apa yang akan kamu lakukan setelah konsultasi. Jika jawabannya jelas, langkah ini lebih mudah dibenarkan dan diatur waktunya.')
    },
    act: [
      L('Answer the five questions in writing, one sentence each, and score yourself honestly from one to five.', 'Jawab lima pertanyaan secara tertulis, satu kalimat masing-masing, dan beri skor dirimu dengan jujur dari satu sampai lima.'),
      L('Talk to one current consultant and one person who left. Ask both what surprised them.', 'Bicaralah dengan satu konsultan aktif dan satu orang yang sudah keluar. Tanyakan kepada keduanya apa yang mengejutkan mereka.'),
      L('Try one realistic sample of the work: The Map’s Consulting & Professional Services simulation, or a timed case from this library.', 'Coba satu contoh pekerjaan yang realistis: simulasi Konsultan & Jasa Profesional di The Map, atau satu kasus berwaktu dari pustaka ini.'),
      L('Decide, then commit. Half-hearted preparation is the worst of both options.', 'Putuskan, lalu berkomitmen. Persiapan setengah hati adalah yang terburuk dari kedua pilihan.')
    ],
    reflect: [
      L('Which reason for joining is truly yours, and which did you borrow from someone else?', 'Alasan bergabung mana yang benar-benar milikmu, dan mana yang kamu pinjam dari orang lain?'),
      L('If the hours turned out to be the hardest part, what would you need in place to stay well?', 'Jika jam kerja ternyata bagian tersulit, apa yang perlu kamu siapkan agar tetap sehat?'),
      L('What would make you leave after two years and still call it a success?', 'Apa yang akan membuatmu keluar setelah dua tahun dan tetap menyebutnya keberhasilan?')
    ],
    sources: [
      { note: L('Original Metanoia perspective. Reasons for joining and leaving reflect themes discussed in CaseCoach’s articles on why people work in and leave consulting (see Further reading); no statistics are claimed here.',
                'Perspektif asli Metanoia. Alasan bergabung dan keluar mencerminkan tema yang dibahas dalam artikel CaseCoach tentang mengapa orang bekerja di dan keluar dari konsultasi (lihat Bacaan lanjutan); tidak ada klaim statistik di sini.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('The Map’s Module 6 Consulting & Professional Services track lets you try the work before you commit to preparing for it.', 'Jalur Konsultan & Jasa Profesional di Modul 6 The Map memungkinkanmu mencoba pekerjaannya sebelum berkomitmen mempersiapkannya.') },
      { pillar: 'the-compass', why: L('Record the decision and its reasons in The Compass so you can revisit it honestly in a year.', 'Catat keputusan dan alasannya di The Compass agar kamu bisa meninjaunya dengan jujur setahun lagi.') }
    ],
    further: [
      { url: 'https://casecoach.com/b/why-work-in-management-consulting/', label: 'Why work in management consulting?', by: 'CaseCoach' },
      { url: 'https://casecoach.com/b/why-people-leave-consulting-after-two-to-four-years/', label: 'Why people leave consulting after two to four years', by: 'CaseCoach' },
      { url: 'https://casecoach.com/b/consulting-vs-start-ups/', label: 'Management consulting versus startups', by: 'CaseCoach' }
    ]
  },
  {
    slug: 'the-consulting-career-ladder-and-exits', img: '../assets/pe/ed-ladder.jpg', topic: 'consulting', format: 'explainer', level: 'intermediate',
    stages: ['fresh-graduate', 'early-professional', 'mature-professional'],
    date: '2026-10-11', reviewed: '2026-10-11', minutes: 6, author: AUTHOR,
    title: L('The consulting career ladder, and the doors out of it', 'Tangga karier konsultan, dan pintu-pintu keluarnya'),
    dek: L('Titles differ by firm, but the ladder has the same rungs everywhere, and most people step off it on purpose. Plan both the climb and the exit from the start.',
           'Gelar berbeda di tiap firma, tetapi anak tangganya sama di mana pun, dan kebanyakan orang turun dengan sengaja. Rencanakan pendakian dan jalan keluarnya sejak awal.'),
    what: [
      L('Most consulting firms share one structure under different names. Analysts or associates gather data and build analyses. Consultants own a workstream: a part of the problem with its own client counterpart. Managers or project leaders run the whole engagement day to day. Principals or associate partners carry several engagements and the client relationship. Partners sell the work and are accountable for its quality. Promotion is reviewed regularly, usually against explicit criteria for the next rung, and in many firms an up-or-out norm means that staying long without promotion is not an option.',
        'Sebagian besar firma konsultan memiliki satu struktur dengan nama berbeda. Analis atau associate mengumpulkan data dan menyusun analisis. Konsultan memegang satu alur kerja: bagian dari masalah dengan mitra klien sendiri. Manajer atau pemimpin proyek menjalankan seluruh penugasan sehari-hari. Principal atau associate partner memegang beberapa penugasan dan hubungan klien. Partner menjual pekerjaan dan bertanggung jawab atas kualitasnya. Promosi ditinjau secara rutin, biasanya terhadap kriteria eksplisit untuk anak tangga berikutnya, dan di banyak firma norma up-or-out berarti bertahan lama tanpa promosi bukanlah pilihan.'),
      L('The exits are part of the design. Former consultants move into in-house strategy and business development, operating roles in growing companies, technology firms, investment roles where analytical skill is valued, entrepreneurship, and the public and non-profit sectors. Firms usually support this through alumni networks and career services, because alumni become clients. Many consultants also choose an expert track, deepening one industry or function rather than staying a generalist.',
        'Pintu keluar adalah bagian dari rancangannya. Mantan konsultan pindah ke strategi dan pengembangan bisnis internal, peran operasional di perusahaan yang tumbuh, firma teknologi, peran investasi yang menghargai keterampilan analitis, kewirausahaan, serta sektor publik dan nirlaba. Firma biasanya mendukung ini lewat jaringan alumni dan layanan karier, karena alumni menjadi klien. Banyak konsultan juga memilih jalur ahli, memperdalam satu industri atau fungsi alih-alih tetap generalis.')
    ],
    why: L('A consultant who knows which exit they want collects the right projects, skills and relationships on the way. One who does not tends to leave when tired rather than when ready.',
           'Konsultan yang tahu pintu keluar mana yang diinginkannya akan mengumpulkan proyek, keterampilan, dan relasi yang tepat di sepanjang jalan. Yang tidak tahu cenderung keluar saat lelah, bukan saat siap.'),
    framework: {
      name: L('The ladder in five rungs', 'Tangga dalam lima anak tangga'),
      steps: [
        { h: L('Analyst or associate', 'Analis atau associate'), d: L('Owns analyses. Judged on accuracy, speed and clear slides.', 'Memegang analisis. Dinilai dari ketepatan, kecepatan, dan slide yang jelas.') },
        { h: L('Consultant', 'Konsultan'), d: L('Owns a workstream and its client counterpart. Judged on structuring and client trust.', 'Memegang satu alur kerja dan mitra kliennya. Dinilai dari penstrukturan dan kepercayaan klien.') },
        { h: L('Manager or project leader', 'Manajer atau pemimpin proyek'), d: L('Runs the engagement. Judged on team leadership and the quality of the final answer.', 'Menjalankan penugasan. Dinilai dari kepemimpinan tim dan kualitas jawaban akhir.') },
        { h: L('Principal or associate partner', 'Principal atau associate partner'), d: L('Carries several engagements and relationships. Judged on client impact and early selling.', 'Memegang beberapa penugasan dan relasi. Dinilai dari dampak bagi klien dan penjualan awal.') },
        { h: L('Partner', 'Partner'), d: L('Sells and is accountable for the work. Judged on client portfolio and firm building.', 'Menjual dan bertanggung jawab atas pekerjaan. Dinilai dari portofolio klien dan pembangunan firma.') }
      ]
    },
    means: {
      'fresh-graduate': L('Your first two years build the base every exit draws on: analysis, writing and composure with senior people. Optimise for those.', 'Dua tahun pertamamu membangun fondasi yang dipakai setiap pintu keluar: analisis, menulis, dan ketenangan di depan orang senior. Optimalkan itu.'),
      'early-professional': L('Pick projects that point toward your intended exit, and say so to the people who staff them.', 'Pilih proyek yang mengarah ke pintu keluar yang kamu tuju, dan sampaikan kepada orang yang mengatur penugasan.'),
      'mature-professional': L('If you are joining mid-career, ask which rung you will enter and what the criteria for the next one are, in writing.', 'Jika kamu bergabung di tengah karier, tanyakan di anak tangga mana kamu masuk dan apa kriteria untuk yang berikutnya, secara tertulis.')
    },
    act: [
      L('Find the published career path of two firms you are considering and map their titles to the five rungs.', 'Cari jalur karier yang dipublikasikan dua firma yang kamu pertimbangkan dan petakan gelarnya ke lima anak tangga.'),
      L('Write your intended exit in one line, even if it changes later. It shapes which projects you ask for.', 'Tulis pintu keluar yang kamu tuju dalam satu baris, meski nanti berubah. Itu membentuk proyek mana yang kamu minta.'),
      L('In interviews, ask how promotion criteria are communicated and how often reviews happen.', 'Dalam wawancara, tanyakan bagaimana kriteria promosi dikomunikasikan dan seberapa sering tinjauan dilakukan.'),
      L('Keep a project log: client industry, your role, the skill you built. It becomes your next CV.', 'Simpan catatan proyek: industri klien, peranmu, keterampilan yang kamu bangun. Itu menjadi CV-mu berikutnya.')
    ],
    reflect: [
      L('Which rung would you be happy to leave from, and why that one?', 'Di anak tangga mana kamu akan senang untuk keluar, dan mengapa yang itu?'),
      L('Generalist or expert: which one would you choose if you had to decide today?', 'Generalis atau ahli: mana yang akan kamu pilih jika harus memutuskan hari ini?')
    ],
    sources: [
      { note: L('Original Metanoia explainer. Rung names are generic composites; each firm publishes its own titles. Exit routes reflect themes covered in CaseCoach’s career-path and exit articles (see Further reading); no figures are reproduced.',
                'Penjelasan asli Metanoia. Nama anak tangga adalah gabungan umum; setiap firma memublikasikan gelarnya sendiri. Rute keluar mencerminkan tema yang dibahas dalam artikel jalur karier dan pintu keluar dari CaseCoach (lihat Bacaan lanjutan); tidak ada angka yang direproduksi.') }
    ],
    tools: [
      { pillar: 'the-route', why: L('The Route’s Module 7, The Second Move, gives you the readiness check and four-lens evaluation for any exit.', 'Modul 7 The Route, The Second Move, memberimu pemeriksaan kesiapan dan evaluasi empat lensa untuk pintu keluar mana pun.') },
      { pillar: 'the-route', why: L('The Route’s Module 5, The Promotion Game, explains how promotion files are built and judged.', 'Modul 5 The Route, The Promotion Game, menjelaskan bagaimana berkas promosi disusun dan dinilai.') }
    ],
    further: [
      { url: 'https://casecoach.com/b/consulting-career-path-mckinsey-bcg-bain/', label: 'The consulting career path at a top firm', by: 'CaseCoach' },
      { url: 'https://casecoach.com/b/exit-opportunities-consulting-career/', label: 'Exit opportunities from a consulting career', by: 'CaseCoach' },
      { url: 'https://casecoach.com/b/up-or-out-policy-mckinsey-bcg-or-bain/', label: 'The up-or-out policy explained', by: 'CaseCoach' },
      { url: 'https://casecoach.com/b/expert-track-mckinsey-bcg-bain/', label: 'Expert versus generalist career paths', by: 'CaseCoach' }
    ]
  },
  {
    slug: 'the-consulting-cv-and-application', img: '../assets/pe/ps-interviews.jpg', topic: 'consulting', format: 'guide', level: 'foundation',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-10-10', reviewed: '2026-10-10', minutes: 7, author: AUTHOR,
    title: L('The consulting CV: one page that proves three things', 'CV konsultan: satu halaman yang membuktikan tiga hal'),
    dek: L('Most consulting applications are decided at the screen. The CV that passes proves achievement, leadership and problem solving, with numbers, on one clean page.',
           'Sebagian besar lamaran konsultan diputuskan di tahap penyaringan. CV yang lolos membuktikan prestasi, kepemimpinan, dan pemecahan masalah, dengan angka, di satu halaman rapi.'),
    what: [
      L('Consulting firms receive far more applications than they can interview, so the screen is strict and fast. A reviewer scans for three things: evidence that you achieve more than your peers, evidence that you lead or influence others, and evidence that you solve problems with analysis. Grades and university matter, but they are read as a threshold; what separates candidates above the threshold is specific, quantified achievement.',
        'Firma konsultan menerima jauh lebih banyak lamaran daripada yang bisa diwawancarai, sehingga penyaringannya ketat dan cepat. Peninjau memindai tiga hal: bukti bahwa kamu berprestasi melebihi rekan sebayamu, bukti bahwa kamu memimpin atau memengaruhi orang lain, dan bukti bahwa kamu memecahkan masalah dengan analisis. Nilai dan universitas penting, tetapi dibaca sebagai ambang batas; yang membedakan kandidat di atas ambang itu adalah prestasi spesifik yang terukur.'),
      L('The format follows from the reader. One page for students and early graduates, one font, clear section headings, and bullets of at most two lines that start with a verb and end with a result. Cover letters exist but carry less weight than the CV; their job is to state motivation and fit briefly. Networking helps mainly at the screen: a referral from someone who knows your work can get a CV read carefully, but it does not decide the interview.',
        'Formatnya mengikuti pembacanya. Satu halaman untuk mahasiswa dan lulusan baru, satu jenis huruf, judul bagian yang jelas, dan poin paling banyak dua baris yang diawali kata kerja dan diakhiri hasil. Surat lamaran ada, tetapi bobotnya lebih kecil daripada CV; tugasnya menyatakan motivasi dan kecocokan secara singkat. Jejaring terutama membantu di tahap penyaringan: rekomendasi dari orang yang mengenal pekerjaanmu bisa membuat CV dibaca dengan saksama, tetapi tidak menentukan hasil wawancara.')
    ],
    why: L('The screen is where most candidates are lost, and it is the stage you control most completely. An hour spent sharpening bullets returns more than an hour of case practice for someone who never reaches the interview.',
           'Penyaringan adalah tahap tempat sebagian besar kandidat gugur, dan tahap yang paling sepenuhnya kamu kendalikan. Satu jam mempertajam poin memberi hasil lebih besar daripada satu jam latihan kasus bagi orang yang tak pernah sampai ke wawancara.'),
    framework: {
      name: L('The bullet that proves', 'Poin yang membuktikan'),
      steps: [
        { h: L('Start with a strong verb', 'Mulai dengan kata kerja kuat'), d: L('Led, built, cut, grew, negotiated. Not “responsible for”.', 'Memimpin, membangun, memangkas, menumbuhkan, menegosiasikan. Bukan “bertanggung jawab atas”.') },
        { h: L('Name the scale', 'Sebut skalanya'), d: L('People, money, frequency or time: “a team of 12”, “Rp 40 million budget”.', 'Orang, uang, frekuensi, atau waktu: “tim berisi 12 orang”, “anggaran Rp 40 juta”.') },
        { h: L('State the result honestly', 'Nyatakan hasilnya dengan jujur'), d: L('A number if you have one; an approximate one if you must, labelled as such.', 'Angka jika ada; angka perkiraan jika terpaksa, dengan label perkiraan.') },
        { h: L('Show the method', 'Tunjukkan caranya'), d: L('“By redesigning…”, “through a survey of…”: this is where problem solving shows.', '“Dengan mendesain ulang…”, “melalui survei terhadap…”: di sinilah pemecahan masalah terlihat.') },
        { h: L('Cut to two lines', 'Pangkas menjadi dua baris'), d: L('If it runs longer, you are explaining, not proving.', 'Jika lebih panjang, kamu sedang menjelaskan, bukan membuktikan.') }
      ]
    },
    example: {
      title: L('One bullet, rewritten', 'Satu poin, ditulis ulang'),
      paras: [
        L('Before: “Responsible for the finance division of the student entrepreneurship club and helped organise events.”', 'Sebelum: “Bertanggung jawab atas divisi keuangan klub kewirausahaan mahasiswa dan membantu mengatur acara.”'),
        L('After: “Rebuilt the club’s sponsorship pipeline, contacting 30 companies and closing 6, which funded two national events for 400 participants.”', 'Sesudah: “Membangun ulang jalur sponsor klub, menghubungi 30 perusahaan dan menutup 6, yang mendanai dua acara nasional untuk 400 peserta.”'),
        L('The second version names a verb, a scale, a method and a result. A reviewer can now picture the work and ask about it.', 'Versi kedua menyebut kata kerja, skala, cara, dan hasil. Peninjau kini bisa membayangkan pekerjaannya dan menanyakannya.')
      ],
      note: L('Illustrative example; the figures are invented for demonstration.', 'Contoh ilustratif; angkanya dibuat untuk demonstrasi.')
    },
    means: {
      'student': L('Start collecting evidence now: every committee role, competition and project, with the numbers written down while you still remember them.', 'Mulai kumpulkan bukti sekarang: setiap peran kepanitiaan, kompetisi, dan proyek, dengan angkanya dicatat selagi masih ingat.'),
      'fresh-graduate': L('Your strongest bullets may come from organisations or internships. Put the most impressive first, even if it is not the most recent.', 'Poin terkuatmu mungkin berasal dari organisasi atau magang. Taruh yang paling mengesankan di depan, meski bukan yang terbaru.'),
      'early-professional': L('Translate work achievements into business terms: cost, revenue, time, risk. Internal jargon reads as noise to an outside reviewer.', 'Terjemahkan prestasi kerja ke dalam istilah bisnis: biaya, pendapatan, waktu, risiko. Jargon internal terbaca sebagai gangguan bagi peninjau luar.')
    },
    act: [
      L('List every activity of the last four years and mark which prove achievement, leadership or problem solving.', 'Daftar setiap kegiatan empat tahun terakhir dan tandai mana yang membuktikan prestasi, kepemimpinan, atau pemecahan masalah.'),
      L('Rewrite your top eight bullets with the five-step method above.', 'Tulis ulang delapan poin teratasmu dengan metode lima langkah di atas.'),
      L('Ask someone outside your field to read the page for thirty seconds and tell you what you are good at. Fix whatever they missed.', 'Minta seseorang di luar bidangmu membaca halaman itu selama tiga puluh detik dan memberi tahu kamu unggul di mana. Perbaiki apa pun yang terlewat olehnya.'),
      L('Prepare to talk through the CV in two minutes, because many consulting interviews open with exactly that.', 'Bersiaplah menjelaskan CV dalam dua menit, karena banyak wawancara konsultan dibuka persis dengan itu.')
    ],
    drill: {
      title: L('Rewrite three weak bullets', 'Tulis ulang tiga poin lemah'), minutes: 15,
      prompt: L('Rewrite each bullet using verb, scale, method and result. Invent no facts; where you lack a number, write the approximate figure you could defend in an interview. (1) “Member of the research team for a lecturer’s project.” (2) “Did an internship in the marketing department.” (3) “Organised a charity event.”',
                'Tulis ulang setiap poin dengan kata kerja, skala, cara, dan hasil. Jangan mengarang fakta; bila tak punya angka, tulis perkiraan yang bisa kamu pertahankan di wawancara. (1) “Anggota tim riset untuk proyek dosen.” (2) “Magang di departemen pemasaran.” (3) “Mengorganisasi acara amal.”'),
      steps: [
        L('Ask what changed because you were there.', 'Tanyakan apa yang berubah karena kehadiranmu.'),
        L('Find the scale: how many people, how much money, how often.', 'Cari skalanya: berapa orang, berapa uang, seberapa sering.'),
        L('Keep each to two lines.', 'Jaga masing-masing tetap dua baris.')
      ],
      answer: [
        L('(1) “Coded and analysed 250 survey responses on SME digital adoption for a faculty study, producing the three charts used in the published report.”', '(1) “Mengode dan menganalisis 250 respons survei tentang adopsi digital UMKM untuk studi fakultas, menghasilkan tiga grafik yang dipakai di laporan terbit.”'),
        L('(2) “Compared five competitors’ pricing across 40 products and recommended two price changes, one adopted for the next quarter’s campaign.”', '(2) “Membandingkan harga lima pesaing di 40 produk dan merekomendasikan dua perubahan harga, satu diadopsi untuk kampanye kuartal berikutnya.”'),
        L('(3) “Led a team of 8 to run a fundraising concert for 300 guests, raising Rp 25 million through ticketing and three local sponsors.”', '(3) “Memimpin tim berisi 8 orang menjalankan konser penggalangan dana untuk 300 tamu, mengumpulkan Rp 25 juta lewat tiket dan tiga sponsor lokal.”'),
        L('Your versions will differ; check that each names a verb, a scale, a method and a result you could explain for two minutes.', 'Versimu akan berbeda; periksa bahwa masing-masing menyebut kata kerja, skala, cara, dan hasil yang bisa kamu jelaskan selama dua menit.')
      ]
    },
    reflect: [
      L('Which of your bullets would you be nervous to be asked about? Fix or remove it.', 'Poin mana yang membuatmu gugup jika ditanyakan? Perbaiki atau hapus.'),
      L('Does the page show all three: achievement, leadership and problem solving?', 'Apakah halaman itu menunjukkan ketiganya: prestasi, kepemimpinan, dan pemecahan masalah?')
    ],
    sources: [
      { note: L('Original Metanoia guide. The emphasis on the screen stage, the one-page format and the limited role of cover letters and referrals reflects CaseCoach’s resume, cover-letter and networking guides (see Further reading); no text reproduced.',
                'Panduan asli Metanoia. Penekanan pada tahap penyaringan, format satu halaman, dan peran terbatas surat lamaran serta rekomendasi mencerminkan panduan CV, surat lamaran, dan jejaring dari CaseCoach (lihat Bacaan lanjutan); tidak ada teks yang direproduksi.') }
    ],
    tools: [
      { pillar: 'the-pack', why: L('The Pack’s Module 3, The CV Rebuild, builds the evidence pantry and the bullets that prove; Module 2 covers the networks that get a CV read.', 'Modul 3 The Pack, The CV Rebuild, membangun lumbung bukti dan poin yang membuktikan; Modul 2 membahas jejaring yang membuat CV dibaca.') },
      { pillar: 'the-rope', why: L('The Rope’s Module 4 trains the 60-second opening that walks an interviewer through your CV.', 'Modul 4 The Rope melatih pembukaan 60 detik yang menuntun pewawancara menelusuri CV-mu.') }
    ],
    further: [
      { url: 'https://casecoach.com/b/the-complete-guide-to-writing-effective-consulting-resumes-and-cover-letters/', label: 'Writing effective consulting resumes and cover letters', by: 'CaseCoach' },
      { url: 'https://casecoach.com/b/networking-management-consulting/', label: 'How networking helps you get into consulting', by: 'CaseCoach' },
      { url: 'https://casecoach.com/b/talking-through-your-resume-in-a-consulting-interview/', label: 'Talking through your resume in a consulting interview', by: 'CaseCoach' }
    ]
  },
  /* ═══════════ PROBLEM SOLVING & CONSULTING · the core toolkit ═══════════ */
  {
    slug: 'issue-trees-and-mece', img: '../assets/pe/ed-specialise.jpg', topic: 'consulting', format: 'guide', level: 'foundation',
    stages: ['student', 'fresh-graduate', 'early-professional', 'mature-professional'], featured: 'secondary', trending: true,
    date: '2026-10-13', reviewed: '2026-10-13', minutes: 8, author: AUTHOR,
    title: L('Issue trees and MECE: break any problem into pieces you can actually solve', 'Pohon masalah dan MECE: pecah masalah apa pun menjadi bagian yang benar-benar bisa diselesaikan'),
    dek: L('A good structure turns a vague question into a short list of checkable parts. Learn the issue tree and the MECE test, then build one under a timer.',
           'Struktur yang baik mengubah pertanyaan samar menjadi daftar pendek bagian yang bisa diperiksa. Pelajari pohon masalah dan uji MECE, lalu buat satu dengan pengatur waktu.'),
    what: [
      L('An issue tree starts with one question at the top and splits it into the smaller questions whose answers would answer it. Each branch splits again until every leaf is something you could check with data or a conversation. “Why are our profits falling?” becomes revenue and costs; revenue becomes volume and price; volume becomes number of customers and purchases per customer. Within minutes you have a map of where to look, and a team can divide the work without overlap.',
        'Pohon masalah dimulai dengan satu pertanyaan di puncak dan memecahnya menjadi pertanyaan lebih kecil yang jawabannya akan menjawab pertanyaan itu. Setiap cabang dipecah lagi sampai setiap daun adalah sesuatu yang bisa kamu periksa dengan data atau percakapan. “Mengapa laba kita turun?” menjadi pendapatan dan biaya; pendapatan menjadi volume dan harga; volume menjadi jumlah pelanggan dan pembelian per pelanggan. Dalam beberapa menit kamu punya peta tempat mencari, dan tim bisa membagi pekerjaan tanpa tumpang tindih.'),
      L('The test for a good split is MECE: mutually exclusive, collectively exhaustive. Mutually exclusive means no item appears in two branches, so nothing is counted twice. Collectively exhaustive means the branches together cover every possibility, so nothing important is missed. The term is associated with Barbara Minto’s work at McKinsey and is now standard across consulting. In practice, perfect MECE is rare; the goal is a split clean enough that a sceptical listener cannot point to a gap or an overlap.',
        'Uji untuk pemecahan yang baik adalah MECE: mutually exclusive, collectively exhaustive, yaitu saling lepas dan menyeluruh. Saling lepas berarti tidak ada butir yang muncul di dua cabang, sehingga tidak ada yang dihitung dua kali. Menyeluruh berarti cabang-cabang itu bersama-sama mencakup semua kemungkinan, sehingga tidak ada hal penting yang terlewat. Istilah ini dikaitkan dengan karya Barbara Minto di McKinsey dan kini menjadi standar di dunia konsultasi. Dalam praktik, MECE yang sempurna jarang terjadi; tujuannya adalah pemecahan yang cukup bersih sehingga pendengar yang skeptis tidak bisa menunjuk celah atau tumpang tindih.')
    ],
    why: L('Structure is the skill interviewers weigh most at the start of a case, and the habit managers notice first at work. A clear tree shows you understand the problem before you have solved it.',
           'Struktur adalah keterampilan yang paling ditimbang pewawancara di awal kasus, dan kebiasaan yang pertama diperhatikan manajer di tempat kerja. Pohon yang jelas menunjukkan bahwa kamu memahami masalahnya sebelum menyelesaikannya.'),
    framework: {
      name: L('Building an issue tree in five moves', 'Membangun pohon masalah dalam lima langkah'),
      steps: [
        { h: L('Write the question precisely', 'Tulis pertanyaannya dengan tepat'), d: L('Whose problem, what measure, by when. “Restore operating margin to 12% within 18 months” beats “improve profits”.', 'Masalah siapa, ukuran apa, kapan. “Mengembalikan margin operasi ke 12% dalam 18 bulan” lebih baik daripada “meningkatkan laba”.') },
        { h: L('Choose a split logic', 'Pilih logika pemecahan'), d: L('Mathematical (revenue minus cost), process (steps in order), segment (customers, regions, products) or stakeholder.', 'Matematis (pendapatan dikurangi biaya), proses (langkah berurutan), segmen (pelanggan, wilayah, produk), atau pemangku kepentingan.') },
        { h: L('Split into two to five branches', 'Pecah menjadi dua sampai lima cabang'), d: L('Fewer is cleaner. More than five usually means two levels are mixed together.', 'Lebih sedikit lebih bersih. Lebih dari lima biasanya berarti dua tingkat tercampur.') },
        { h: L('Test MECE at every level', 'Uji MECE di setiap tingkat'), d: L('Ask: could anything belong to two branches? Is anything outside all of them?', 'Tanyakan: adakah yang bisa masuk ke dua cabang? Adakah yang berada di luar semuanya?') },
        { h: L('Stop at checkable leaves', 'Berhenti di daun yang bisa diperiksa'), d: L('A leaf is done when you can name the data or person that would answer it.', 'Daun selesai saat kamu bisa menyebut data atau orang yang akan menjawabnya.') }
      ]
    },
    example: {
      title: L('A café chain’s falling profit', 'Laba jaringan kafe yang turun'),
      paras: [
        L('Question: why has the chain’s monthly profit fallen over the last two quarters, and what should it do? First split: revenue and costs, a mathematical split that is MECE by definition.', 'Pertanyaan: mengapa laba bulanan jaringan ini turun dalam dua kuartal terakhir, dan apa yang harus dilakukan? Pemecahan pertama: pendapatan dan biaya, pemecahan matematis yang MECE secara definisi.'),
        L('Revenue splits into number of transactions and average spend per transaction. Transactions split into existing outlets and new outlets, and then into dine-in, takeaway and delivery apps. Costs split into variable costs (ingredients, packaging, app commissions) and fixed costs (rent, staff, utilities).', 'Pendapatan dipecah menjadi jumlah transaksi dan rata-rata belanja per transaksi. Transaksi dipecah menjadi gerai lama dan gerai baru, lalu menjadi makan di tempat, bawa pulang, dan aplikasi pesan antar. Biaya dipecah menjadi biaya variabel (bahan, kemasan, komisi aplikasi) dan biaya tetap (sewa, staf, utilitas).'),
        L('Notice the trap: “delivery” appears under revenue as a channel and its commission appears under cost. That is not an overlap, because one branch counts sales and the other counts costs. Spotting the difference between a real overlap and two views of one activity is what the MECE test is for.', 'Perhatikan jebakannya: “pesan antar” muncul di bawah pendapatan sebagai kanal dan komisinya muncul di bawah biaya. Itu bukan tumpang tindih, karena satu cabang menghitung penjualan dan yang lain menghitung biaya. Membedakan tumpang tindih sungguhan dari dua sudut pandang atas satu kegiatan adalah gunanya uji MECE.')
      ],
      note: L('Illustrative case; the chain is fictional.', 'Kasus ilustratif; jaringan kafenya fiktif.')
    },
    means: {
      'student': L('Practise on everyday questions: why your organisation’s event attendance fell, or why a canteen queue is slow. Structure is a habit before it is an interview skill.', 'Berlatihlah pada pertanyaan sehari-hari: mengapa kehadiran acara organisasimu turun, atau mengapa antrean kantin lambat. Struktur adalah kebiasaan sebelum menjadi keterampilan wawancara.'),
      'fresh-graduate': L('In a case interview, say your first split aloud and why you chose it. Interviewers score the logic as much as the branches.', 'Dalam wawancara kasus, ucapkan pemecahan pertamamu dan alasannya. Pewawancara menilai logikanya sebanyak cabang-cabangnya.'),
      'early-professional': L('Before your next analysis request, sketch the tree and agree it with your manager. It prevents a week of work on the wrong branch.', 'Sebelum permintaan analisis berikutnya, buat sketsa pohonnya dan sepakati dengan manajermu. Itu mencegah seminggu kerja di cabang yang salah.'),
      'mature-professional': L('Use trees to delegate: each branch becomes a clear brief with its own owner and question.', 'Gunakan pohon untuk mendelegasikan: setiap cabang menjadi brief yang jelas dengan pemilik dan pertanyaannya sendiri.')
    },
    act: [
      L('Take one problem you face this week and build a three-level tree on one page.', 'Ambil satu masalah yang kamu hadapi minggu ini dan buat pohon tiga tingkat di satu halaman.'),
      L('Show it to someone and ask them to find one overlap or one gap. Fix it.', 'Tunjukkan kepada seseorang dan minta mereka menemukan satu tumpang tindih atau satu celah. Perbaiki.'),
      L('Collect the split logics that worked into a personal list. Over time you will build your own frameworks rather than borrowing generic ones.', 'Kumpulkan logika pemecahan yang berhasil ke daftar pribadi. Lama-kelamaan kamu akan membangun kerangkamu sendiri alih-alih meminjam yang generik.'),
      L('Do the drill below under a timer, then compare with the model answer.', 'Kerjakan latihan di bawah dengan pengatur waktu, lalu bandingkan dengan contoh jawabannya.')
    ],
    drill: {
      title: L('Structure a career-centre problem', 'Strukturkan masalah pusat karier'), minutes: 8,
      prompt: L('A university career centre reports that fewer final-year students use its services than three years ago. The director asks you why, and what to do. Build an issue tree with at least three levels.',
                'Pusat karier sebuah universitas melaporkan bahwa lebih sedikit mahasiswa tingkat akhir yang memakai layanannya dibanding tiga tahun lalu. Direktur bertanya kepadamu mengapa, dan apa yang harus dilakukan. Buat pohon masalah dengan sedikitnya tiga tingkat.'),
      steps: [
        L('Define the measure first: unique students served, or total sessions?', 'Tentukan ukurannya dulu: jumlah mahasiswa unik yang dilayani, atau total sesi?'),
        L('Consider a process split: awareness, consideration, use, return.', 'Pertimbangkan pemecahan proses: kesadaran, pertimbangan, penggunaan, kembali lagi.'),
        L('Check whether demand or supply changed.', 'Periksa apakah permintaan atau penawaran yang berubah.')
      ],
      answer: [
        L('Top question: why has the number of final-year students using the centre fallen, and how can it be restored? Level one, a demand and supply split: fewer students want the service, or the service reaches or serves them less well.', 'Pertanyaan puncak: mengapa jumlah mahasiswa tingkat akhir yang memakai pusat karier turun, dan bagaimana memulihkannya? Tingkat satu, pemecahan permintaan dan penawaran: lebih sedikit mahasiswa yang menginginkan layanannya, atau layanannya menjangkau atau melayani mereka dengan kurang baik.'),
        L('Demand branch: the cohort is smaller; students use substitutes (online courses, alumni networks, platform job boards); students need help at a different time (earlier internships). Supply branch, split by the student journey: awareness (do they know the services?), access (opening hours, booking, online options), quality (are sessions useful?), and follow-up (are they invited back?).', 'Cabang permintaan: angkatannya lebih kecil; mahasiswa memakai pengganti (kursus daring, jejaring alumni, papan lowongan platform); mahasiswa butuh bantuan di waktu berbeda (magang lebih awal). Cabang penawaran, dipecah menurut perjalanan mahasiswa: kesadaran (apakah mereka tahu layanannya?), akses (jam buka, pemesanan, opsi daring), kualitas (apakah sesinya berguna?), dan tindak lanjut (apakah mereka diundang kembali?).'),
        L('Leaves are checkable: enrolment data for cohort size, a short student survey on substitutes and awareness, booking-system data for access, and session feedback for quality. A strong answer also says which branch you would test first and why, for example substitutes, because it would change the whole strategy.', 'Daunnya bisa diperiksa: data pendaftaran untuk ukuran angkatan, survei singkat mahasiswa tentang pengganti dan kesadaran, data sistem pemesanan untuk akses, dan umpan balik sesi untuk kualitas. Jawaban yang kuat juga menyebut cabang mana yang akan diuji lebih dulu dan mengapa, misalnya pengganti, karena itu akan mengubah seluruh strategi.')
      ]
    },
    reflect: [
      L('When did you last spend effort on the wrong branch of a problem? What tree would have prevented it?', 'Kapan terakhir kamu menghabiskan tenaga di cabang masalah yang salah? Pohon apa yang akan mencegahnya?'),
      L('Which split logic comes naturally to you, and which do you avoid?', 'Logika pemecahan mana yang alami bagimu, dan mana yang kamu hindari?')
    ],
    sources: [
      { note: L('Barbara Minto, “The Pyramid Principle” (Pearson), for the origin and use of MECE grouping; Charles Conn and Robert McLean, “Bulletproof Problem Solving” (Wiley, 2018), for issue-tree practice. Original Metanoia writing; the café case and drill are fictional.',
                'Barbara Minto, “The Pyramid Principle” (Pearson), untuk asal dan penggunaan pengelompokan MECE; Charles Conn dan Robert McLean, “Bulletproof Problem Solving” (Wiley, 2018), untuk praktik pohon masalah. Tulisan asli Metanoia; kasus kafe dan latihannya fiktif.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('The Map’s Module 3, Problem Solving 101, teaches the four-step method and root-cause analysis this tree builds on.', 'Modul 3 The Map, Problem Solving 101, mengajarkan metode empat langkah dan analisis akar masalah yang menjadi dasar pohon ini.') },
      { pillar: 'the-pack', why: L('The Pack’s Case Interview Practice module covers problem-solving frameworks and live structured cases with mentors.', 'Modul Case Interview Practice di The Pack membahas kerangka pemecahan masalah dan kasus terstruktur langsung bersama mentor.') }
    ],
    further: [
      { url: 'https://casecoach.com/b/ultimate-guide-case-interview-frameworks/', label: 'A guide to case interview frameworks', by: 'CaseCoach' },
      { url: 'https://casecoach.com/b/case-interview-preparation/', label: 'Case interview: the free preparation guide', by: 'CaseCoach' }
    ]
  },
  {
    slug: 'hypothesis-driven-problem-solving', img: '../assets/pe/ps-compass.jpg', topic: 'consulting', format: 'explainer', level: 'intermediate',
    stages: ['fresh-graduate', 'early-professional', 'mature-professional'],
    date: '2026-10-12', reviewed: '2026-10-12', minutes: 6, author: AUTHOR,
    title: L('Start with the answer: hypothesis-driven problem solving', 'Mulai dari jawaban: pemecahan masalah berbasis hipotesis'),
    dek: L('Consultants guess the answer on day one, then try to prove themselves wrong. Done honestly it is faster than gathering everything first, and it is not bias.',
           'Konsultan menebak jawaban di hari pertama, lalu berusaha membuktikan dirinya salah. Dilakukan dengan jujur, ini lebih cepat daripada mengumpulkan semuanya dulu, dan bukan bias.'),
    what: [
      L('Most people solve problems by collecting information until an answer appears. It feels thorough, but on a real deadline it rarely finishes: there is always more data, and nothing tells you which data matters. The hypothesis-driven approach reverses the order. You state your best current guess at the answer early, list what would have to be true for it to hold, and then gather only the evidence that would confirm or kill it.',
        'Kebanyakan orang memecahkan masalah dengan mengumpulkan informasi sampai jawaban muncul. Terasa teliti, tetapi dengan tenggat sungguhan jarang selesai: selalu ada data tambahan, dan tidak ada yang memberi tahu data mana yang penting. Pendekatan berbasis hipotesis membalik urutannya. Kamu menyatakan tebakan terbaikmu atas jawaban sejak awal, mendaftar apa yang harus benar agar tebakan itu bertahan, lalu hanya mengumpulkan bukti yang akan mengonfirmasi atau mematahkannya.'),
      L('The method is described in Ethan Rasiel’s “The McKinsey Way” and developed in Conn and McLean’s “Bulletproof Problem Solving”. Its safeguard is the willingness to be wrong. A hypothesis is a tool for focus, not a conclusion to defend. If the first test fails, you drop the hypothesis and form the next one, and the failed test still taught you where the answer is not.',
        'Metode ini dijelaskan dalam “The McKinsey Way” karya Ethan Rasiel dan dikembangkan dalam “Bulletproof Problem Solving” karya Conn dan McLean. Pengamannya adalah kesediaan untuk salah. Hipotesis adalah alat untuk fokus, bukan kesimpulan yang harus dibela. Jika uji pertama gagal, kamu membuang hipotesis itu dan membentuk yang berikutnya, dan uji yang gagal tetap mengajarkan di mana jawabannya tidak berada.')
    ],
    why: L('Time is the scarcest resource on any project. A hypothesis tells you which analysis to run first, and it lets your manager react to a concrete idea instead of waiting for a pile of facts.',
           'Waktu adalah sumber daya paling langka di proyek mana pun. Hipotesis memberi tahu analisis mana yang dijalankan lebih dulu, dan memungkinkan manajermu menanggapi gagasan konkret alih-alih menunggu tumpukan fakta.'),
    framework: {
      name: L('The hypothesis loop', 'Lingkaran hipotesis'),
      steps: [
        { h: L('State a falsifiable answer', 'Nyatakan jawaban yang bisa dibuktikan salah'), d: L('“Sales fell because a competitor undercut our price in two key cities” can be tested. “Market conditions changed” cannot.', '“Penjualan turun karena pesaing memotong harga di dua kota utama” bisa diuji. “Kondisi pasar berubah” tidak bisa.') },
        { h: L('List what must be true', 'Daftar apa yang harus benar'), d: L('Usually two to four conditions: the competitor cut prices; our decline is concentrated in those cities; customers cite price.', 'Biasanya dua sampai empat syarat: pesaing memotong harga; penurunan kita terpusat di kota-kota itu; pelanggan menyebut harga.') },
        { h: L('Design the cheapest test for each', 'Rancang uji termurah untuk masing-masing'), d: L('A price check, a sales split by city, five customer calls. Hours, not weeks.', 'Cek harga, pemisahan penjualan per kota, lima panggilan pelanggan. Hitungan jam, bukan minggu.') },
        { h: L('Run tests in order of power', 'Jalankan uji sesuai kekuatannya'), d: L('Start with the test most likely to kill the hypothesis.', 'Mulai dengan uji yang paling mungkin mematahkan hipotesis.') },
        { h: L('Keep, refine or replace', 'Pertahankan, perbaiki, atau ganti'), d: L('Update the hypothesis and say so aloud. Changing your mind on evidence is the method working.', 'Perbarui hipotesis dan ucapkan. Berubah pikiran karena bukti berarti metodenya bekerja.') }
      ]
    },
    example: {
      title: L('High downloads, low use', 'Unduhan tinggi, pemakaian rendah'),
      paras: [
        L('A bank’s new mobile app has strong downloads but few monthly active users. Day-one hypothesis: users download it for one task, such as checking a balance after a branch visit, and find no reason to return because the app lacks the features they use weekly.', 'Aplikasi seluler baru sebuah bank punya unduhan tinggi tetapi sedikit pengguna aktif bulanan. Hipotesis hari pertama: pengguna mengunduhnya untuk satu tugas, seperti cek saldo setelah mengunjungi cabang, dan tidak menemukan alasan untuk kembali karena aplikasinya tidak punya fitur yang mereka pakai mingguan.'),
        L('What must be true: most users open the app only in their first week; their first session is a single simple task; the features they use weekly elsewhere, such as transfers or e-wallet top-ups, are missing or hard to find. Tests: a cohort retention curve, a first-session event log, and a feature comparison with the two most-used alternatives.', 'Yang harus benar: sebagian besar pengguna membuka aplikasi hanya di minggu pertama; sesi pertama mereka adalah satu tugas sederhana; fitur yang mereka pakai mingguan di tempat lain, seperti transfer atau isi ulang dompet digital, tidak ada atau sulit ditemukan. Uji: kurva retensi kohort, log peristiwa sesi pertama, dan perbandingan fitur dengan dua alternatif yang paling banyak dipakai.'),
        L('If the retention curve shows users stay for a month and then leave, the hypothesis is wrong in an informative way: the problem is not first-week value but something that breaks later, such as login friction after an update. The next hypothesis is already half-written.', 'Jika kurva retensi menunjukkan pengguna bertahan sebulan lalu pergi, hipotesisnya salah dengan cara yang informatif: masalahnya bukan nilai minggu pertama, melainkan sesuatu yang rusak kemudian, seperti hambatan masuk setelah pembaruan. Hipotesis berikutnya sudah setengah tertulis.')
      ],
      note: L('Illustrative case; no real bank is described.', 'Kasus ilustratif; tidak ada bank nyata yang digambarkan.')
    },
    means: {
      'fresh-graduate': L('In a case interview, offering a hypothesis early, and dropping it gracefully when the data disagrees, signals maturity.', 'Dalam wawancara kasus, menawarkan hipotesis sejak awal, dan melepasnya dengan anggun saat data tidak sependapat, menandakan kedewasaan.'),
      'early-professional': L('Open your next update with “my current view is…” rather than a list of what you have done. Managers can steer a view; they cannot steer a list.', 'Buka pembaruan berikutnya dengan “pandangan saya saat ini…” alih-alih daftar apa yang sudah dikerjakan. Manajer bisa mengarahkan pandangan; mereka tidak bisa mengarahkan daftar.'),
      'mature-professional': L('Ask your team for their hypothesis before their analysis plan. It shows you how they think and saves days of misdirected work.', 'Minta timmu menyampaikan hipotesis sebelum rencana analisis. Itu menunjukkan cara mereka berpikir dan menghemat hari-hari kerja yang salah arah.')
    },
    act: [
      L('For your current biggest problem, write a one-sentence hypothesis you could be proven wrong about.', 'Untuk masalah terbesarmu saat ini, tulis hipotesis satu kalimat yang bisa dibuktikan salah.'),
      L('List three things that must be true and the cheapest test for each.', 'Daftar tiga hal yang harus benar dan uji termurah untuk masing-masing.'),
      L('Run the most powerful test first and write down what you would conclude from each possible result before you see it.', 'Jalankan uji terkuat lebih dulu dan tulis apa yang akan kamu simpulkan dari setiap kemungkinan hasil sebelum melihatnya.'),
      L('Share the hypothesis with one colleague and invite them to attack it.', 'Bagikan hipotesis itu kepada satu rekan dan undang mereka untuk menyerangnya.')
    ],
    drill: {
      title: L('Hypothesis and three tests', 'Hipotesis dan tiga uji'), minutes: 6,
      prompt: L('A regional minimarket chain’s sales per store have been flat for a year while its new stores grow quickly. Write one falsifiable hypothesis, three conditions that must be true, and the cheapest test for each.',
                'Penjualan per toko sebuah jaringan minimarket regional stagnan selama setahun sementara toko-toko barunya tumbuh cepat. Tulis satu hipotesis yang bisa dibuktikan salah, tiga syarat yang harus benar, dan uji termurah untuk masing-masing.'),
      steps: [
        L('Ask whether new stores could be taking sales from old ones.', 'Tanyakan apakah toko baru bisa mengambil penjualan dari toko lama.'),
        L('Make the hypothesis specific enough to fail.', 'Buat hipotesisnya cukup spesifik untuk bisa gagal.')
      ],
      answer: [
        L('Hypothesis: new stores opened near existing ones are drawing customers away, so the chain’s growth is partly a reshuffle of the same customers rather than new demand.', 'Hipotesis: toko baru yang dibuka di dekat toko lama menarik pelanggan, sehingga pertumbuhan jaringan sebagian hanyalah perpindahan pelanggan yang sama, bukan permintaan baru.'),
        L('Must be true: (1) old stores within a short distance of a new opening show sales drops after the opening date, while distant old stores do not; (2) transaction counts fall more than basket size at affected stores; (3) loyalty-card data shows the same customers shifting stores. Tests: a before-and-after comparison by distance band, a split of sales into transactions and basket, and a match of loyalty IDs across stores.', 'Harus benar: (1) toko lama dalam jarak dekat dengan pembukaan baru menunjukkan penurunan penjualan setelah tanggal pembukaan, sementara toko lama yang jauh tidak; (2) jumlah transaksi turun lebih besar daripada ukuran keranjang di toko terdampak; (3) data kartu loyalitas menunjukkan pelanggan yang sama berpindah toko. Uji: perbandingan sebelum dan sesudah menurut pita jarak, pemisahan penjualan menjadi transaksi dan keranjang, dan pencocokan ID loyalitas antartoko.'),
        L('If distant stores are also flat, the hypothesis fails and the next one points to a chain-wide cause, such as range, pricing or a competitor.', 'Jika toko yang jauh juga stagnan, hipotesisnya gagal dan hipotesis berikutnya mengarah ke penyebab di seluruh jaringan, seperti ragam produk, harga, atau pesaing.')
      ]
    },
    reflect: [
      L('Which belief about your own career have you never tested? What would the cheapest test be?', 'Keyakinan mana tentang kariermu sendiri yang belum pernah kamu uji? Apa uji termurahnya?'),
      L('How do you react when your first idea is proven wrong in front of others? What would make that easier?', 'Bagaimana reaksimu saat gagasan pertamamu terbukti salah di depan orang lain? Apa yang akan membuatnya lebih mudah?')
    ],
    sources: [
      { note: L('Ethan M. Rasiel, “The McKinsey Way” (McGraw-Hill, 1999); Charles Conn and Robert McLean, “Bulletproof Problem Solving” (Wiley, 2018). Original Metanoia writing; both cases are fictional.',
                'Ethan M. Rasiel, “The McKinsey Way” (McGraw-Hill, 1999); Charles Conn dan Robert McLean, “Bulletproof Problem Solving” (Wiley, 2018). Tulisan asli Metanoia; kedua kasus fiktif.') }
    ],
    tools: [
      { pillar: 'the-rope', why: L('The Rope’s Module 3 runs a “hypothesis hour” on a real role before the interview; Module 6 applies the method inside a case.', 'Modul 3 The Rope menjalankan “jam hipotesis” atas peran nyata sebelum wawancara; Modul 6 menerapkan metode ini di dalam kasus.') },
      { pillar: 'the-route', why: L('The Route’s Lesson 9.4, Thinking Like a Leader as an Individual Contributor, uses the same loop with a pre-mortem at work.', 'Pelajaran 9.4 The Route, Thinking Like a Leader as an Individual Contributor, memakai lingkaran yang sama dengan pre-mortem di tempat kerja.') }
    ],
    further: [
      { url: 'https://casecoach.com/b/case-interview-preparation/', label: 'Case interview: the free preparation guide', by: 'CaseCoach' }
    ]
  },
  {
    slug: 'market-sizing-step-by-step', img: '../assets/pe/th-network.jpg', topic: 'consulting', format: 'drill', level: 'foundation',
    stages: ['student', 'fresh-graduate', 'early-professional'], trending: true,
    date: '2026-10-11', reviewed: '2026-10-11', minutes: 8, author: AUTHOR,
    title: L('Market sizing, step by step: estimate anything in five moves', 'Estimasi ukuran pasar, langkah demi langkah: perkirakan apa pun dalam lima langkah'),
    dek: L('How many cups of coffee does a campus sell in a day? Estimation questions test structure, sensible assumptions and clean arithmetic, not trivia. Here is the method.',
           'Berapa cangkir kopi yang terjual di sebuah kampus per hari? Pertanyaan estimasi menguji struktur, asumsi yang masuk akal, dan aritmetika yang rapi, bukan hafalan. Ini metodenya.'),
    what: [
      L('A market-sizing question asks you to estimate a number with little or no data: the size of a market, the revenue of a shop, the number of something in a city. Nobody expects the true figure. The interviewer watches how you break the number into parts, which assumptions you choose, whether you state them clearly, how cleanly you calculate, and whether you check the result against common sense.',
        'Pertanyaan estimasi ukuran pasar memintamu memperkirakan sebuah angka dengan sedikit atau tanpa data: ukuran pasar, pendapatan toko, jumlah sesuatu di sebuah kota. Tidak ada yang mengharapkan angka sebenarnya. Pewawancara mengamati bagaimana kamu memecah angka menjadi bagian, asumsi apa yang kamu pilih, apakah kamu menyatakannya dengan jelas, seberapa rapi kamu menghitung, dan apakah kamu memeriksa hasilnya terhadap akal sehat.'),
      L('There are two broad approaches. Top-down starts from a large known population and narrows it: people, then the share who buy, then how often, then at what price. Bottom-up starts from one unit and scales it: one shop’s capacity, times the number of shops. Strong candidates often do one and use the other as a sanity check.',
        'Ada dua pendekatan besar. Top-down dimulai dari populasi besar yang diketahui lalu menyempitkannya: jumlah orang, lalu porsi yang membeli, lalu seberapa sering, lalu dengan harga berapa. Bottom-up dimulai dari satu unit lalu memperbesarnya: kapasitas satu toko, dikali jumlah toko. Kandidat yang kuat sering mengerjakan salah satu dan memakai yang lain sebagai pemeriksaan kewajaran.')
    ],
    why: L('Estimation is the most portable consulting skill. Business plans, budgets and every “is this worth doing?” conversation start with a number nobody has measured yet.',
           'Estimasi adalah keterampilan konsultasi yang paling mudah dibawa ke mana-mana. Rencana bisnis, anggaran, dan setiap percakapan “apakah ini layak dikerjakan?” dimulai dengan angka yang belum pernah diukur siapa pun.'),
    framework: {
      name: L('Five moves for any estimate', 'Lima langkah untuk estimasi apa pun'),
      steps: [
        { h: L('Clarify the unit and scope', 'Perjelas satuan dan cakupannya'), d: L('Per day or per year? Units or rupiah? Which geography? Ask before you calculate.', 'Per hari atau per tahun? Unit atau rupiah? Wilayah mana? Tanyakan sebelum menghitung.') },
        { h: L('Write the equation first', 'Tulis persamaannya dulu'), d: L('Say it aloud: cups per day = people on campus × share who buy × cups per buyer.', 'Ucapkan: cangkir per hari = orang di kampus × porsi yang membeli × cangkir per pembeli.') },
        { h: L('Choose round, defensible assumptions', 'Pilih asumsi bulat yang bisa dipertahankan'), d: L('Explain each in one phrase. Round numbers make the arithmetic safe.', 'Jelaskan masing-masing dalam satu frasa. Angka bulat membuat aritmetika aman.') },
        { h: L('Calculate step by step, aloud', 'Hitung langkah demi langkah, sambil bicara'), d: L('Write intermediate results. Track zeros explicitly.', 'Tulis hasil antara. Lacak angka nol secara eksplisit.') },
        { h: L('Sanity-check and state the so-what', 'Periksa kewajaran dan nyatakan maknanya'), d: L('Compare with a second method or a known anchor, then say what the number means for the decision.', 'Bandingkan dengan metode kedua atau patokan yang diketahui, lalu katakan apa arti angka itu bagi keputusan.') }
      ]
    },
    example: {
      title: L('Coffee sold on one campus per weekday', 'Kopi yang terjual di satu kampus per hari kerja'),
      paras: [
        L('Equation: cups per weekday = people on campus on a weekday × share who buy coffee on campus × cups per buyer.', 'Persamaan: cangkir per hari kerja = orang di kampus pada hari kerja × porsi yang membeli kopi di kampus × cangkir per pembeli.'),
        L('Assumptions: the university has 20,000 students and 2,000 staff; about 60% are on campus on a given weekday, so roughly 13,000 people. Perhaps one in four buys coffee on campus, about 3,250 people, and buyers average 1.2 cups. Estimate: about 3,900 cups, call it 4,000 per weekday.', 'Asumsi: universitas punya 20.000 mahasiswa dan 2.000 staf; sekitar 60% berada di kampus pada hari kerja, jadi kira-kira 13.000 orang. Mungkin satu dari empat membeli kopi di kampus, sekitar 3.250 orang, dan pembeli rata-rata membeli 1,2 cangkir. Estimasi: sekitar 3.900 cangkir, bulatkan menjadi 4.000 per hari kerja.'),
        L('Sanity check, bottom-up: if the campus has 10 coffee points and each serves about one customer a minute for six busy hours, that is 360 cups each, or about 3,600 in total. The two methods agree within roughly 10%, which is good enough. So-what: a new kiosk aiming for 400 cups a day would need about a tenth of the whole campus market, which is ambitious unless it has a clearly better location.', 'Pemeriksaan kewajaran, bottom-up: jika kampus punya 10 titik kopi dan masing-masing melayani sekitar satu pelanggan per menit selama enam jam sibuk, itu 360 cangkir per titik, atau sekitar 3.600 total. Kedua metode selisih sekitar 10%, cukup baik. Maknanya: kios baru yang menargetkan 400 cangkir sehari membutuhkan sekitar sepersepuluh seluruh pasar kampus, cukup ambisius kecuali lokasinya jelas lebih baik.')
      ],
      note: L('All figures are illustrative assumptions for practice, not data about any real campus.', 'Semua angka adalah asumsi ilustratif untuk latihan, bukan data tentang kampus nyata mana pun.')
    },
    means: {
      'student': L('Practise one estimate a day out loud on your commute. Speed comes from repetition, not from memorising facts.', 'Latih satu estimasi sehari dengan bersuara dalam perjalanan. Kecepatan datang dari pengulangan, bukan dari menghafal fakta.'),
      'fresh-graduate': L('Learn a few anchors you can defend: Indonesia’s population is roughly 280 million; a working year has about 250 weekdays. Anchors make assumptions credible.', 'Pelajari beberapa patokan yang bisa dipertahankan: penduduk Indonesia sekitar 280 juta; setahun kerja punya sekitar 250 hari kerja. Patokan membuat asumsi kredibel.'),
      'early-professional': L('Use the same method for internal proposals. A sized opportunity with stated assumptions gets approved faster than an adjective.', 'Gunakan metode yang sama untuk proposal internal. Peluang yang diukur dengan asumsi yang dinyatakan lebih cepat disetujui daripada sekadar kata sifat.')
    },
    act: [
      L('Memorise five anchors: national population, households, working days, hours in a year, and one price you know well.', 'Hafalkan lima patokan: jumlah penduduk nasional, jumlah rumah tangga, hari kerja, jam dalam setahun, dan satu harga yang kamu kenal baik.'),
      L('Always write the equation before any number. Interviewers forgive a rough assumption, not a missing structure.', 'Selalu tulis persamaan sebelum angka apa pun. Pewawancara memaafkan asumsi kasar, bukan struktur yang hilang.'),
      L('Run every estimate twice, top-down and bottom-up, until checking becomes a habit.', 'Kerjakan setiap estimasi dua kali, top-down dan bottom-up, sampai pemeriksaan menjadi kebiasaan.'),
      L('End every estimate with one sentence on what the number means for the decision.', 'Akhiri setiap estimasi dengan satu kalimat tentang arti angka itu bagi keputusan.')
    ],
    drill: {
      title: L('Ride-hailing trips by one student body', 'Perjalanan ojek daring oleh satu populasi mahasiswa'), minutes: 8,
      prompt: L('Estimate how many ride-hailing motorcycle trips the students of one university with 30,000 students take in a typical teaching week. State the equation first, then your assumptions, then a sanity check.',
                'Perkirakan berapa perjalanan ojek daring yang dilakukan mahasiswa sebuah universitas berisi 30.000 mahasiswa dalam satu minggu perkuliahan biasa. Nyatakan persamaannya dulu, lalu asumsimu, lalu pemeriksaan kewajaran.'),
      steps: [
        L('Segment by how students live: near campus, far from campus, with their own vehicle.', 'Segmentasikan menurut cara mahasiswa tinggal: dekat kampus, jauh dari kampus, punya kendaraan sendiri.'),
        L('Count trips per user per week, not per day.', 'Hitung perjalanan per pengguna per minggu, bukan per hari.'),
        L('Check against a bottom-up view of the campus gates.', 'Periksa dengan sudut pandang bottom-up dari gerbang kampus.')
      ],
      answer: [
        L('Equation: weekly trips = students × share who use ride-hailing × trips per user per week.', 'Persamaan: perjalanan mingguan = mahasiswa × porsi pengguna ojek daring × perjalanan per pengguna per minggu.'),
        L('Segments (illustrative): 40% own a motorcycle and rarely use the service; 35% live in boarding houses near campus and use it about twice a week for errands or rain; 25% live farther away and use it for about four trips a week. Users: 35% × 30,000 = 10,500 at 2 trips = 21,000; 25% × 30,000 = 7,500 at 4 trips = 30,000; owners add perhaps 1,000. Total about 52,000 trips a week.', 'Segmen (ilustratif): 40% punya motor dan jarang memakai layanan ini; 35% tinggal di kos dekat kampus dan memakainya sekitar dua kali seminggu untuk keperluan atau saat hujan; 25% tinggal lebih jauh dan memakainya sekitar empat perjalanan seminggu. Pengguna: 35% × 30.000 = 10.500 dengan 2 perjalanan = 21.000; 25% × 30.000 = 7.500 dengan 4 perjalanan = 30.000; pemilik motor menambah sekitar 1.000. Total sekitar 52.000 perjalanan seminggu.'),
        L('Sanity check: over five teaching days that is about 10,000 trips a day; across four main gates over about 12 active hours, roughly 200 pick-ups or drop-offs per gate per hour, three to four a minute. That feels plausible for a busy campus. A good answer says the result is sensitive mainly to the share of students living far away.', 'Pemeriksaan kewajaran: dalam lima hari kuliah itu sekitar 10.000 perjalanan sehari; di empat gerbang utama selama sekitar 12 jam aktif, kira-kira 200 penjemputan atau pengantaran per gerbang per jam, tiga sampai empat per menit. Itu terasa masuk akal untuk kampus yang ramai. Jawaban yang baik menyebut bahwa hasilnya terutama peka terhadap porsi mahasiswa yang tinggal jauh.')
      ]
    },
    reflect: [
      L('Which assumption in your answer were you least sure of, and how could you check it cheaply?', 'Asumsi mana dalam jawabanmu yang paling tidak kamu yakini, dan bagaimana memeriksanya dengan murah?'),
      L('Did you state the equation before the numbers? If not, what made you skip it?', 'Apakah kamu menyatakan persamaan sebelum angka? Jika tidak, apa yang membuatmu melewatkannya?')
    ],
    sources: [
      { note: L('Method synthesised from standard case-interview practice, including Marc Cosentino, “Case in Point” (Burgee Press). Population anchor: Statistics Indonesia (BPS) mid-decade projections put the population at roughly 280 million; check BPS for the current figure. All campus figures are illustrative.',
                'Metode disintesis dari praktik wawancara kasus yang umum, termasuk Marc Cosentino, “Case in Point” (Burgee Press). Patokan penduduk: proyeksi Badan Pusat Statistik (BPS) pertengahan dekade menyebut penduduk sekitar 280 juta; periksa BPS untuk angka terkini. Semua angka kampus bersifat ilustratif.') }
    ],
    tools: [
      { pillar: 'the-rope', why: L('The Rope’s Lesson 6.4, Estimation, Numbers and Business Cases, takes this method into a full interview with scoring.', 'Pelajaran 6.4 The Rope, Estimation, Numbers and Business Cases, membawa metode ini ke wawancara utuh dengan penilaian.') },
      { pillar: 'the-pack', why: L('The Pack’s Case Interview Practice module gives you live estimation cases with a mentor.', 'Modul Case Interview Practice di The Pack memberimu kasus estimasi langsung bersama mentor.') }
    ],
    further: [
      { url: 'https://casecoach.com/b/case-interview-preparation/', label: 'Case interview: the free preparation guide (market sizing and case math)', by: 'CaseCoach' },
      { url: 'https://casecoach.com/b/bain-interviews/', label: 'Bain interviews: an overview, including estimation questions', by: 'CaseCoach' }
    ]
  },
  {
    slug: 'case-math-without-a-calculator', img: '../assets/pe/ed-requirements.jpg', topic: 'consulting', format: 'drill', level: 'foundation',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-10-10', reviewed: '2026-10-10', minutes: 7, author: AUTHOR,
    title: L('Case math without a calculator: six tricks and a timed set', 'Matematika kasus tanpa kalkulator: enam trik dan satu set berwaktu'),
    dek: L('Case interviews are rarely lost on hard maths; they are lost on lost zeros and panic. Six mental-arithmetic habits fix most of it. Then test yourself against the clock.',
           'Wawancara kasus jarang gagal karena matematika sulit; ia gagal karena angka nol yang hilang dan panik. Enam kebiasaan aritmetika mental memperbaiki sebagian besarnya. Lalu uji dirimu melawan waktu.'),
    what: [
      L('Case math is arithmetic in a business setting: percentages, growth, margins, breakeven and unit conversions, usually with large numbers and no calculator. The difficulty is not the operations, which rarely go beyond multiplication and division. It is keeping track of magnitude under pressure while talking.',
        'Matematika kasus adalah aritmetika dalam konteks bisnis: persentase, pertumbuhan, margin, titik impas, dan konversi satuan, biasanya dengan angka besar dan tanpa kalkulator. Kesulitannya bukan pada operasinya, yang jarang melampaui perkalian dan pembagian. Kesulitannya adalah menjaga besaran angka di bawah tekanan sambil berbicara.'),
      L('The fix is a handful of habits practised until automatic. Interviewers also value the narration: saying “that is about 3.2 billion, let me double-check the zeros” is stronger than silence followed by a wrong number.',
        'Perbaikannya adalah segelintir kebiasaan yang dilatih sampai otomatis. Pewawancara juga menghargai narasinya: mengatakan “itu sekitar 3,2 miliar, saya periksa lagi angka nolnya” lebih kuat daripada diam lalu menyebut angka yang salah.')
    ],
    why: L('A wrong number undermines a right structure. Comfortable arithmetic frees your attention for the part interviewers care about most: what the number means.',
           'Angka yang salah meruntuhkan struktur yang benar. Aritmetika yang nyaman membebaskan perhatianmu untuk bagian yang paling dipedulikan pewawancara: apa arti angka itu.'),
    framework: {
      name: L('Six mental-math habits', 'Enam kebiasaan matematika mental'),
      steps: [
        { h: L('Separate digits from zeros', 'Pisahkan digit dari angka nol'), d: L('40,000 × 3,000: 4 × 3 = 12, then count zeros (4 + 3 = 7): 120,000,000.', '40.000 × 3.000: 4 × 3 = 12, lalu hitung nol (4 + 3 = 7): 120.000.000.') },
        { h: L('Use thousands, millions, billions as units', 'Pakai ribu, juta, miliar sebagai satuan'), d: L('Rp 2.5 million × 4,000 customers = 10,000 million = Rp 10 billion.', 'Rp 2,5 juta × 4.000 pelanggan = 10.000 juta = Rp 10 miliar.') },
        { h: L('Build percentages from 10% and 1%', 'Bangun persentase dari 10% dan 1%'), d: L('17% of 640 = 64 + 6.4 × 7 ≈ 64 + 44.8 = 108.8.', '17% dari 640 = 64 + 6,4 × 7 ≈ 64 + 44,8 = 108,8.') },
        { h: L('Round, then adjust', 'Bulatkan, lalu sesuaikan'), d: L('48 × 25 = 50 × 25 − 2 × 25 = 1,250 − 50 = 1,200.', '48 × 25 = 50 × 25 − 2 × 25 = 1.250 − 50 = 1.200.') },
        { h: L('Approximate growth with the rule of 72', 'Perkirakan pertumbuhan dengan aturan 72'), d: L('Doubling time ≈ 72 ÷ growth rate. At 12% a year, about six years.', 'Waktu berlipat ≈ 72 ÷ tingkat pertumbuhan. Pada 12% per tahun, sekitar enam tahun.') },
        { h: L('Breakeven is fixed cost ÷ unit margin', 'Titik impas adalah biaya tetap ÷ margin per unit'), d: L('Rp 300 million fixed, Rp 15,000 margin per unit: 20,000 units.', 'Biaya tetap Rp 300 juta, margin Rp 15.000 per unit: 20.000 unit.') }
      ]
    },
    means: {
      'student': L('Ten minutes a day of mental arithmetic for three weeks changes how you sound in an interview.', 'Sepuluh menit aritmetika mental sehari selama tiga minggu mengubah caramu terdengar di wawancara.'),
      'fresh-graduate': L('Numerical reasoning tests in many graduate programmes reward the same habits. One practice serves two gates.', 'Tes penalaran numerik di banyak program lulusan menghargai kebiasaan yang sama. Satu latihan melayani dua gerbang.'),
      'early-professional': L('Quick, correct mental estimates in meetings build credibility faster than polished spreadsheets afterwards.', 'Estimasi mental yang cepat dan benar dalam rapat membangun kredibilitas lebih cepat daripada spreadsheet rapi sesudahnya.')
    },
    act: [
      L('Write every number with its unit, such as “Rp 3 bn” or “12k units”, on your scratch paper.', 'Tulis setiap angka dengan satuannya, seperti “Rp 3 M” atau “12 rb unit”, di kertas coretan.'),
      L('Say each step aloud as you calculate. It slows panic and lets the interviewer correct you early.', 'Ucapkan setiap langkah saat menghitung. Itu meredam panik dan memungkinkan pewawancara mengoreksimu lebih awal.'),
      L('After every answer, ask: is this order of magnitude plausible?', 'Setelah setiap jawaban, tanyakan: apakah besaran ini masuk akal?'),
      L('Do the timed set below twice a week until you finish it inside the limit with no errors.', 'Kerjakan set berwaktu di bawah dua kali seminggu sampai selesai dalam batas waktu tanpa kesalahan.')
    ],
    drill: {
      title: L('Six questions in six minutes', 'Enam soal dalam enam menit'), minutes: 6,
      prompt: L('No calculator. Write units. (1) 35% of Rp 840 million. (2) 60,000 customers × Rp 45,000 per month, for a year. (3) Revenue grew from Rp 80 bn to Rp 92 bn; growth rate? (4) Fixed costs Rp 450 million; price Rp 60,000; variable cost Rp 35,000; breakeven units? (5) At 9% a year, roughly how long to double? (6) Margin is 18% on Rp 2.4 bn revenue; profit?',
                'Tanpa kalkulator. Tulis satuan. (1) 35% dari Rp 840 juta. (2) 60.000 pelanggan × Rp 45.000 per bulan, selama setahun. (3) Pendapatan naik dari Rp 80 M menjadi Rp 92 M; tingkat pertumbuhannya? (4) Biaya tetap Rp 450 juta; harga Rp 60.000; biaya variabel Rp 35.000; unit titik impas? (5) Pada 9% per tahun, kira-kira berapa lama untuk berlipat dua? (6) Margin 18% atas pendapatan Rp 2,4 M; labanya?'),
      steps: [
        L('Use 10% and 5% blocks for percentages.', 'Gunakan blok 10% dan 5% untuk persentase.'),
        L('For (2), multiply monthly first, then by 12.', 'Untuk (2), kalikan bulanan dulu, lalu kali 12.')
      ],
      answer: [
        L('(1) 10% = 84, so 30% = 252 and 5% = 42: Rp 294 million.', '(1) 10% = 84, jadi 30% = 252 dan 5% = 42: Rp 294 juta.'),
        L('(2) 60,000 × 45,000 = 2,700 million = Rp 2.7 bn a month; × 12 = Rp 32.4 bn a year.', '(2) 60.000 × 45.000 = 2.700 juta = Rp 2,7 M sebulan; × 12 = Rp 32,4 M setahun.'),
        L('(3) Increase 12 on a base of 80: 12 ÷ 80 = 15%.', '(3) Kenaikan 12 dari basis 80: 12 ÷ 80 = 15%.'),
        L('(4) Unit margin Rp 25,000; 450 million ÷ 25,000 = 18,000 units.', '(4) Margin per unit Rp 25.000; 450 juta ÷ 25.000 = 18.000 unit.'),
        L('(5) 72 ÷ 9 = about 8 years.', '(5) 72 ÷ 9 = sekitar 8 tahun.'),
        L('(6) 10% = 240, 8% = 192: Rp 432 million.', '(6) 10% = 240, 8% = 192: Rp 432 juta.')
      ]
    },
    reflect: [
      L('Which question took longest, and was it the arithmetic or the setup?', 'Soal mana yang paling lama, dan apakah karena aritmetikanya atau penyusunannya?'),
      L('Where do you lose zeros? Design one personal rule that prevents it.', 'Di mana kamu kehilangan angka nol? Rancang satu aturan pribadi untuk mencegahnya.')
    ],
    sources: [
      { note: L('Standard mental-arithmetic techniques; the rule of 72 is a well-known approximation for compound growth. Original Metanoia drill; all figures are invented for practice.',
                'Teknik aritmetika mental yang umum; aturan 72 adalah pendekatan terkenal untuk pertumbuhan majemuk. Latihan asli Metanoia; semua angka dibuat untuk latihan.') }
    ],
    tools: [
      { pillar: 'the-pack', why: L('The Pack’s Module 7, Psychometric & Aptitude Test Practice, drills numerical reasoning under time pressure.', 'Modul 7 The Pack, Psychometric & Aptitude Test Practice, melatih penalaran numerik di bawah tekanan waktu.') },
      { pillar: 'the-rope', why: L('The Rope’s Lesson 6.4 puts these numbers inside full business cases.', 'Pelajaran 6.4 The Rope menempatkan angka-angka ini di dalam kasus bisnis utuh.') }
    ],
    further: [
      { url: 'https://casecoach.com/b/practising-consulting-case-studies-by-yourself/', label: 'How to practise case interviews alone, including math drills', by: 'CaseCoach' }
    ]
  },
  /* ═══════════ PROBLEM SOLVING & CONSULTING · inside the case ═══════════ */
  {
    slug: 'profitability-cases-the-profit-tree', img: '../assets/pe/th-casestudy.jpg', topic: 'consulting', format: 'case', level: 'intermediate',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-10-09', reviewed: '2026-10-09', minutes: 9, author: AUTHOR,
    title: L('Profitability cases, worked through: the profit tree in practice', 'Kasus profitabilitas, dikerjakan tuntas: pohon laba dalam praktik'),
    dek: L('“Profits are falling, why?” is the most common case of all. Walk through a full worked case, then diagnose a gym chain’s promotion against the clock.',
           '“Laba turun, mengapa?” adalah kasus yang paling umum. Telusuri satu kasus terurai lengkap, lalu diagnosis promosi sebuah jaringan pusat kebugaran melawan waktu.'),
    what: [
      L('Profitability cases ask why a business earns less than before, or less than it should, and what to do. The backbone is simple: profit equals revenue minus costs; revenue equals volume times price; costs split into variable costs that move with volume and fixed costs that do not. The skill is not the tree, which every candidate knows. It is using it to find where the change actually happened and why.',
        'Kasus profitabilitas menanyakan mengapa sebuah bisnis menghasilkan lebih sedikit dari sebelumnya, atau lebih sedikit dari seharusnya, dan apa yang harus dilakukan. Tulang punggungnya sederhana: laba sama dengan pendapatan dikurangi biaya; pendapatan sama dengan volume dikali harga; biaya dipecah menjadi biaya variabel yang bergerak mengikuti volume dan biaya tetap yang tidak. Keterampilannya bukan pohonnya, yang diketahui semua kandidat. Keterampilannya adalah memakainya untuk menemukan di mana perubahan benar-benar terjadi dan mengapa.'),
      L('Strong candidates do three things weak ones skip. They compare against a baseline (last year, a competitor, a plan) so that every number means something. They segment before concluding, because an average hides the product, channel or region where the problem lives. And they move from where to why: a cost line that grew is a symptom; the reason it grew is the finding.',
        'Kandidat yang kuat melakukan tiga hal yang dilewatkan kandidat lemah. Mereka membandingkan dengan patokan (tahun lalu, pesaing, rencana) agar setiap angka bermakna. Mereka melakukan segmentasi sebelum menyimpulkan, karena rata-rata menyembunyikan produk, kanal, atau wilayah tempat masalah berada. Dan mereka bergerak dari di mana ke mengapa: pos biaya yang naik adalah gejala; alasan kenaikannya adalah temuannya.')
    ],
    why: L('Profitability logic appears in most business cases even when the question is about growth, pricing or entry. Mastering it once pays off in every case type.',
           'Logika profitabilitas muncul di sebagian besar kasus bisnis meski pertanyaannya tentang pertumbuhan, harga, atau masuk pasar. Menguasainya sekali memberi manfaat di setiap jenis kasus.'),
    framework: {
      name: L('The profit tree, used well', 'Pohon laba, dipakai dengan baik'),
      steps: [
        { h: L('Confirm the measure and the baseline', 'Pastikan ukuran dan patokannya'), d: L('Profit or margin? Compared with what period or peer?', 'Laba atau margin? Dibandingkan dengan periode atau pembanding apa?') },
        { h: L('Split revenue and costs, then quantify each change', 'Pecah pendapatan dan biaya, lalu ukur setiap perubahan'), d: L('Find which side moved more, in rupiah, not adjectives.', 'Temukan sisi mana yang bergerak lebih besar, dalam rupiah, bukan kata sifat.') },
        { h: L('Drill the bigger mover', 'Dalami penggerak yang lebih besar'), d: L('Revenue: volume, price, mix. Costs: variable per unit, fixed totals.', 'Pendapatan: volume, harga, bauran. Biaya: variabel per unit, total tetap.') },
        { h: L('Segment before concluding', 'Segmentasikan sebelum menyimpulkan'), d: L('By product, channel, region or customer type.', 'Menurut produk, kanal, wilayah, atau jenis pelanggan.') },
        { h: L('Ask why, then recommend', 'Tanyakan mengapa, lalu rekomendasikan'), d: L('Name the root cause and two or three actions with their likely size.', 'Sebut akar penyebab dan dua atau tiga tindakan beserta perkiraan besarnya.') }
      ]
    },
    example: {
      title: L('Roti Senja, a bakery chain whose margin halved in a year', 'Roti Senja, jaringan toko roti yang marginnya turun separuh dalam setahun'),
      paras: [
        L('The facts. Revenue rose 5%, from Rp 120 bn to Rp 126 bn, yet profit fell from Rp 18 bn to Rp 12.6 bn, so margin dropped from 15% to 10%. Costs rose from Rp 102 bn to Rp 113.4 bn, an increase of Rp 11.4 bn against only Rp 6 bn of extra revenue. The problem is on the cost side.', 'Faktanya. Pendapatan naik 5%, dari Rp 120 M menjadi Rp 126 M, tetapi laba turun dari Rp 18 M menjadi Rp 12,6 M, sehingga margin turun dari 15% menjadi 10%. Biaya naik dari Rp 102 M menjadi Rp 113,4 M, kenaikan Rp 11,4 M dibanding tambahan pendapatan hanya Rp 6 M. Masalahnya ada di sisi biaya.'),
        L('Drilling the costs. Ingredients rose from Rp 48 bn to Rp 52.9 bn (from 40% to 42% of revenue); delivery-app commissions from Rp 6 bn to Rp 10.1 bn; staff from Rp 24 bn to Rp 25.2 bn; rent from Rp 18 bn to Rp 18.9 bn; other costs from Rp 6 bn to Rp 6.3 bn. Two lines explain Rp 9 bn of the Rp 11.4 bn increase: ingredients and commissions.', 'Mendalami biaya. Bahan baku naik dari Rp 48 M menjadi Rp 52,9 M (dari 40% menjadi 42% pendapatan); komisi aplikasi pesan antar dari Rp 6 M menjadi Rp 10,1 M; staf dari Rp 24 M menjadi Rp 25,2 M; sewa dari Rp 18 M menjadi Rp 18,9 M; biaya lain dari Rp 6 M menjadi Rp 6,3 M. Dua pos menjelaskan Rp 9 M dari kenaikan Rp 11,4 M: bahan baku dan komisi.'),
        L('Asking why. Segmenting revenue by channel shows that delivery orders grew while in-store sales were flat, so the revenue growth came with a commission attached at the same menu prices. Ingredient costs rose with flour and butter prices that were not passed on. The finding: the chain grew its least profitable channel and absorbed input inflation.', 'Bertanya mengapa. Segmentasi pendapatan menurut kanal menunjukkan pesanan antar tumbuh sementara penjualan di toko datar, sehingga pertumbuhan pendapatan datang dengan komisi yang melekat pada harga menu yang sama. Biaya bahan naik bersama harga tepung dan mentega yang tidak diteruskan ke harga jual. Temuannya: jaringan ini menumbuhkan kanal yang paling tidak menguntungkan dan menyerap inflasi bahan baku.'),
        L('Recommendation: set delivery-menu prices or bundles that cover the commission, renegotiate or hedge the two largest ingredient contracts, and steer repeat customers to in-store pick-up with a loyalty offer. Then size each action before committing to it.', 'Rekomendasi: tetapkan harga menu antar atau paket yang menutup komisi, negosiasikan ulang atau lindungi nilai dua kontrak bahan baku terbesar, dan arahkan pelanggan tetap ke ambil di toko dengan penawaran loyalitas. Lalu ukur besaran setiap tindakan sebelum berkomitmen.')
      ],
      note: L('Fictional company; all figures are invented for practice.', 'Perusahaan fiktif; semua angka dibuat untuk latihan.')
    },
    means: {
      'student': L('Learn the tree until you can draw it in twenty seconds; then spend all your practice on the “why” step.', 'Pelajari pohonnya sampai bisa menggambarnya dalam dua puluh detik; lalu habiskan seluruh latihanmu pada langkah “mengapa”.'),
      'fresh-graduate': L('In interviews, quantify before you explore: “costs grew Rp 11.4 bn against Rp 6 bn of revenue, so I will start with costs” is a sentence that scores.', 'Dalam wawancara, ukur dulu sebelum menjelajah: “biaya naik Rp 11,4 M dibanding pendapatan Rp 6 M, jadi saya mulai dari biaya” adalah kalimat yang mendapat nilai.'),
      'early-professional': L('Run this tree on your own unit’s numbers once a quarter. It is the fastest way to understand what your manager is worried about.', 'Jalankan pohon ini pada angka unitmu sendiri sekali setiap kuartal. Itu cara tercepat memahami apa yang dicemaskan manajermu.')
    },
    act: [
      L('Redraw the profit tree from memory, including the variable and fixed split.', 'Gambar ulang pohon laba dari ingatan, termasuk pemisahan biaya variabel dan tetap.'),
      L('For the worked case, cover the third and fourth paragraphs and try to reach the finding yourself.', 'Untuk kasus terurai di atas, tutup paragraf ketiga dan keempat lalu coba capai temuannya sendiri.'),
      L('Do the drill below, then check whether you stated the baseline before the diagnosis.', 'Kerjakan latihan di bawah, lalu periksa apakah kamu menyatakan patokan sebelum diagnosis.'),
      L('Write your recommendation in three lines: finding, two actions, the first step on Monday.', 'Tulis rekomendasimu dalam tiga baris: temuan, dua tindakan, langkah pertama di hari Senin.')
    ],
    drill: {
      title: L('Was the gym promotion a success?', 'Apakah promosi pusat kebugaran itu berhasil?'), minutes: 10,
      prompt: L('A gym chain cut its monthly fee from Rp 400,000 to Rp 300,000 to attract members. Membership rose from 8,000 to 10,000. Variable cost per member is Rp 50,000 a month; fixed costs are Rp 2.4 bn a month and did not change. Was the promotion a success? How many members would the chain need at the new price to earn its old monthly profit?',
                'Sebuah jaringan pusat kebugaran memotong biaya bulanan dari Rp 400.000 menjadi Rp 300.000 untuk menarik anggota. Keanggotaan naik dari 8.000 menjadi 10.000. Biaya variabel per anggota Rp 50.000 per bulan; biaya tetap Rp 2,4 M per bulan dan tidak berubah. Apakah promosinya berhasil? Berapa anggota yang dibutuhkan pada harga baru untuk memperoleh laba bulanan seperti dulu?'),
      steps: [
        L('Compute monthly profit before and after.', 'Hitung laba bulanan sebelum dan sesudah.'),
        L('Contribution per member is price minus variable cost.', 'Kontribusi per anggota adalah harga dikurangi biaya variabel.'),
        L('Required members = (fixed costs + target profit) ÷ contribution.', 'Anggota yang dibutuhkan = (biaya tetap + target laba) ÷ kontribusi.')
      ],
      answer: [
        L('Before: revenue 8,000 × Rp 400k = Rp 3.2 bn; variable Rp 0.4 bn; profit 3.2 − 0.4 − 2.4 = Rp 0.4 bn a month. After: revenue 10,000 × Rp 300k = Rp 3.0 bn; variable Rp 0.5 bn; profit 3.0 − 0.5 − 2.4 = Rp 0.1 bn. Profit fell by three quarters, so on these numbers the promotion failed.', 'Sebelum: pendapatan 8.000 × Rp 400 rb = Rp 3,2 M; variabel Rp 0,4 M; laba 3,2 − 0,4 − 2,4 = Rp 0,4 M per bulan. Sesudah: pendapatan 10.000 × Rp 300 rb = Rp 3,0 M; variabel Rp 0,5 M; laba 3,0 − 0,5 − 2,4 = Rp 0,1 M. Laba turun tiga perempat, jadi dengan angka ini promosinya gagal.'),
        L('Contribution at the new price is Rp 250k per member. To earn Rp 0.4 bn: (2.4 + 0.4) bn ÷ 250k = 11,200 members. Simple breakeven is 2.4 bn ÷ 250k = 9,600 members, so the chain is barely above breakeven.', 'Kontribusi pada harga baru adalah Rp 250 rb per anggota. Untuk memperoleh Rp 0,4 M: (2,4 + 0,4) M ÷ 250 rb = 11.200 anggota. Titik impas sederhana adalah 2,4 M ÷ 250 rb = 9.600 anggota, jadi jaringan ini nyaris di atas titik impas.'),
        L('A strong answer adds the questions that could change the verdict: will promotional members convert to full price, does the gym have capacity for 11,200 members, and did the promotion pull existing members down to the lower fee?', 'Jawaban yang kuat menambahkan pertanyaan yang bisa mengubah kesimpulan: apakah anggota promosi akan beralih ke harga penuh, apakah pusat kebugaran punya kapasitas untuk 11.200 anggota, dan apakah promosi menurunkan anggota lama ke biaya yang lebih rendah?')
      ]
    },
    reflect: [
      L('In the worked case, which number would you have asked for first, and why?', 'Dalam kasus terurai, angka mana yang akan kamu minta pertama kali, dan mengapa?'),
      L('Where in your own organisation does growth hide a cost that nobody is measuring?', 'Di mana dalam organisasimu pertumbuhan menyembunyikan biaya yang tidak diukur siapa pun?')
    ],
    sources: [
      { note: L('Original Metanoia worked case and drill; both businesses are fictional and all figures are invented. The profit-tree logic is standard business arithmetic.', 'Kasus terurai dan latihan asli Metanoia; kedua bisnis fiktif dan semua angka dibuat. Logika pohon laba adalah aritmetika bisnis standar.') }
    ],
    tools: [
      { pillar: 'the-rope', why: L('The Rope’s Lesson 6.3, Case Interviews: The Protocol, sets out how to run a profitability case aloud with an interviewer.', 'Pelajaran 6.3 The Rope, Case Interviews: The Protocol, menjelaskan cara menjalankan kasus profitabilitas dengan bersuara bersama pewawancara.') },
      { pillar: 'the-pack', why: L('The Pack’s Case Interview Practice module includes live structured cases with mentors.', 'Modul Case Interview Practice di The Pack mencakup kasus terstruktur langsung bersama mentor.') }
    ],
    further: [
      { url: 'https://casecoach.com/b/ultimate-guide-case-interview-frameworks/', label: 'A guide to case interview frameworks, including profitability', by: 'CaseCoach' }
    ]
  },
  {
    slug: 'reading-exhibits-in-a-case', img: '../assets/pe/ps-presence.jpg', topic: 'consulting', format: 'drill', level: 'intermediate',
    stages: ['student', 'fresh-graduate', 'early-professional', 'mature-professional'],
    date: '2026-10-08', reviewed: '2026-10-08', minutes: 6, author: AUTHOR,
    title: L('Reading an exhibit in thirty seconds: from chart to “so what”', 'Membaca exhibit dalam tiga puluh detik: dari grafik ke “lalu apa”'),
    dek: L('Most case interviews hand you a chart or table and wait. Describing it earns nothing. Finding the one movement that matters, and what it implies, earns the point.',
           'Sebagian besar wawancara kasus memberimu grafik atau tabel lalu menunggu. Mendeskripsikannya tidak mendapat nilai. Menemukan satu pergerakan yang penting, dan implikasinya, yang mendapat nilai.'),
    what: [
      L('An exhibit is a test of judgement disguised as a test of reading. Candidates under pressure narrate everything they see: “this line goes up, that one goes down”. The interviewer already knows what the chart shows. They want to know whether you can find the one or two facts that change the answer to the case, and whether you can say what to look at next.',
        'Exhibit adalah uji penilaian yang menyamar sebagai uji membaca. Kandidat yang tertekan menarasikan semua yang mereka lihat: “garis ini naik, yang itu turun”. Pewawancara sudah tahu apa yang ditunjukkan grafik. Mereka ingin tahu apakah kamu bisa menemukan satu atau dua fakta yang mengubah jawaban kasus, dan apakah kamu bisa mengatakan apa yang perlu dilihat berikutnya.'),
      L('The same skill is how senior people read reports at work. They skip to the largest change, check it against the question they care about, and ask one sharp follow-up. Practising it on exhibits trains the habit for every dashboard you will ever be sent.',
        'Keterampilan yang sama adalah cara orang senior membaca laporan di tempat kerja. Mereka langsung menuju perubahan terbesar, memeriksanya terhadap pertanyaan yang mereka pedulikan, dan mengajukan satu pertanyaan lanjutan yang tajam. Melatihnya pada exhibit membentuk kebiasaan untuk setiap dasbor yang akan pernah dikirimkan kepadamu.')
    ],
    why: L('Interviewers score insight, not description. A candidate who says “e-commerce produced all of the growth” in the first thirty seconds has shown more than one who reads every number aloud.',
           'Pewawancara menilai wawasan, bukan deskripsi. Kandidat yang berkata “e-commerce menghasilkan seluruh pertumbuhan” dalam tiga puluh detik pertama menunjukkan lebih banyak daripada yang membacakan setiap angka.'),
    framework: {
      name: L('Four steps through any exhibit', 'Empat langkah menelusuri exhibit apa pun'),
      steps: [
        { h: L('Orient in ten seconds', 'Orientasi dalam sepuluh detik'), d: L('Read the title, units, time period and any footnote. Say them aloud briefly.', 'Baca judul, satuan, periode waktu, dan catatan kaki. Ucapkan secara singkat.') },
        { h: L('Find the biggest movement', 'Temukan pergerakan terbesar'), d: L('Largest change, largest share, or the outlier. Compute one ratio if it sharpens the point.', 'Perubahan terbesar, porsi terbesar, atau pencilan. Hitung satu rasio jika mempertajam poinnya.') },
        { h: L('Link it to the case question', 'Kaitkan dengan pertanyaan kasus'), d: L('“This matters because the client asked about growth, and all of it came from one channel.”', '“Ini penting karena klien bertanya tentang pertumbuhan, dan semuanya berasal dari satu kanal.”') },
        { h: L('Propose the next question', 'Usulkan pertanyaan berikutnya'), d: L('What would you want to know to act on this? Margins by channel, customer overlap, cause.', 'Apa yang ingin kamu ketahui untuk bertindak atas ini? Margin per kanal, irisan pelanggan, penyebab.') }
      ]
    },
    means: {
      'student': L('Practise on charts in business news: give yourself thirty seconds to state the so-what, then compare with the headline.', 'Berlatihlah pada grafik di berita bisnis: beri dirimu tiga puluh detik untuk menyatakan maknanya, lalu bandingkan dengan judul beritanya.'),
      'fresh-graduate': L('In interviews, ask for a moment to read, then speak in the four steps. Silence for ten seconds is fine; rambling for a minute is not.', 'Dalam wawancara, minta waktu sejenak untuk membaca, lalu bicara dengan empat langkah itu. Diam sepuluh detik tidak apa-apa; bertele-tele semenit tidak.'),
      'early-professional': L('When you send a chart, write its so-what as the title. Your reader will thank you.', 'Saat mengirim grafik, tulis maknanya sebagai judul. Pembacamu akan berterima kasih.'),
      'mature-professional': L('Ask your team to title every exhibit with its conclusion. It exposes weak analysis before the meeting does.', 'Minta timmu memberi judul setiap exhibit dengan kesimpulannya. Itu membuka analisis yang lemah sebelum rapat yang membukanya.')
    },
    act: [
      L('Rewrite the titles of three charts you have made recently as one-sentence conclusions.', 'Tulis ulang judul tiga grafik yang baru kamu buat sebagai kesimpulan satu kalimat.'),
      L('Do the drill below aloud, recording yourself. Count how many seconds pass before you say the so-what.', 'Kerjakan latihan di bawah dengan bersuara sambil merekam dirimu. Hitung berapa detik berlalu sebelum kamu menyebut maknanya.'),
      L('Keep a list of useful ratios: share of total, growth rate, multiple of the smallest.', 'Simpan daftar rasio yang berguna: porsi dari total, tingkat pertumbuhan, kelipatan dari yang terkecil.'),
      L('End every exhibit with a question, not a summary.', 'Akhiri setiap exhibit dengan pertanyaan, bukan ringkasan.')
    ],
    drill: {
      title: L('A snack maker’s sales by channel', 'Penjualan produsen camilan menurut kanal'), minutes: 3,
      prompt: L('Your client, a snack manufacturer, asks how to keep growing. Sales in Rp bn by channel for three years: modern retail 120, 125, 128; traditional shops (warung) 200, 190, 176; e-commerce 20, 40, 72. Totals: 340, 355, 376. In under a minute, give the insight, the implication and your next question.',
                'Klienmu, produsen camilan, bertanya bagaimana tetap tumbuh. Penjualan dalam Rp M menurut kanal selama tiga tahun: ritel modern 120, 125, 128; warung 200, 190, 176; e-commerce 20, 40, 72. Total: 340, 355, 376. Dalam kurang dari semenit, sampaikan wawasan, implikasi, dan pertanyaan berikutnya.'),
      steps: [
        L('Compare total growth with each channel’s change.', 'Bandingkan pertumbuhan total dengan perubahan tiap kanal.'),
        L('Compute one share to make the point vivid.', 'Hitung satu porsi agar poinnya hidup.')
      ],
      answer: [
        L('Insight: total sales grew Rp 36 bn over two years, and e-commerce alone grew Rp 52 bn, so e-commerce produced more than all of the growth while warung sales fell by Rp 24 bn. E-commerce went from about 6% to about 19% of sales; warung fell from about 59% to about 47%.', 'Wawasan: penjualan total naik Rp 36 M dalam dua tahun, dan e-commerce saja naik Rp 52 M, sehingga e-commerce menghasilkan lebih dari seluruh pertumbuhan sementara penjualan warung turun Rp 24 M. E-commerce naik dari sekitar 6% menjadi sekitar 19% penjualan; warung turun dari sekitar 59% menjadi sekitar 47%.'),
        L('Implication: the growth question is really two questions: how to keep e-commerce growing profitably, and how to slow the decline of the largest channel.', 'Implikasi: pertanyaan pertumbuhan sebenarnya dua pertanyaan: bagaimana menjaga e-commerce tumbuh secara menguntungkan, dan bagaimana memperlambat penurunan kanal terbesar.'),
        L('Next question: what are margins by channel, and are e-commerce buyers the same households that used to buy at warung? If the channel is cannibalising rather than adding, the strategy changes.', 'Pertanyaan berikutnya: berapa margin per kanal, dan apakah pembeli e-commerce adalah rumah tangga yang sama yang dulu membeli di warung? Jika kanal itu mengkanibal alih-alih menambah, strateginya berubah.')
      ]
    },
    reflect: [
      L('Do you tend to describe or to conclude? Which would your last manager say?', 'Apakah kamu cenderung mendeskripsikan atau menyimpulkan? Mana yang akan dikatakan manajer terakhirmu?'),
      L('What is one report you receive regularly whose so-what you have never written down?', 'Apa satu laporan yang rutin kamu terima yang maknanya belum pernah kamu tuliskan?')
    ],
    sources: [
      { note: L('Original Metanoia drill; the client and all figures are fictional. Chart-interpretation as a scored dimension of case interviews is described in CaseCoach’s preparation guide (see Further reading).', 'Latihan asli Metanoia; klien dan semua angka fiktif. Interpretasi grafik sebagai dimensi yang dinilai dalam wawancara kasus dijelaskan dalam panduan persiapan CaseCoach (lihat Bacaan lanjutan).') }
    ],
    tools: [
      { pillar: 'the-map', why: L('The Map’s Module 4, Communication for Impact, covers stating conclusions first, the same habit an exhibit title demands.', 'Modul 4 The Map, Communication for Impact, membahas menyatakan kesimpulan lebih dulu, kebiasaan yang sama yang dituntut judul exhibit.') },
      { pillar: 'the-rope', why: L('The Rope’s Lesson 6.4 includes exhibits inside full business cases.', 'Pelajaran 6.4 The Rope menyertakan exhibit di dalam kasus bisnis utuh.') }
    ],
    further: [
      { url: 'https://casecoach.com/b/case-interview-preparation/', label: 'Case interview: the free preparation guide (judgement and insight)', by: 'CaseCoach' }
    ]
  },
  {
    slug: 'synthesis-answer-first-in-sixty-seconds', img: '../assets/pe/th-summit.jpg', topic: 'consulting', format: 'guide', level: 'foundation',
    stages: ['student', 'fresh-graduate', 'early-professional', 'mature-professional'],
    date: '2026-10-07', reviewed: '2026-10-07', minutes: 6, author: AUTHOR,
    title: L('Synthesis: the sixty-second recommendation that ends a case well', 'Sintesis: rekomendasi enam puluh detik yang menutup kasus dengan baik'),
    dek: L('A case is often won or lost in its final minute. Lead with the answer, give three reasons, name the risk and the next step. The same shape works for any boss.',
           'Sebuah kasus sering dimenangkan atau dikalahkan di menit terakhirnya. Mulai dengan jawaban, beri tiga alasan, sebut risikonya dan langkah berikutnya. Bentuk yang sama berlaku untuk atasan mana pun.'),
    what: [
      L('At the end of a case the interviewer usually plays a senior client who has just walked in: “The CEO is here. What should we do?” Most candidates replay the analysis in the order they did it. A busy executive wants the opposite order: the answer first, then the reasons that support it, then what could go wrong and what happens next.',
        'Di akhir kasus, pewawancara biasanya berperan sebagai klien senior yang baru masuk: “CEO sudah di sini. Apa yang harus kita lakukan?” Kebanyakan kandidat mengulang analisis sesuai urutan mengerjakannya. Eksekutif yang sibuk menginginkan urutan sebaliknya: jawaban dulu, lalu alasan yang mendukungnya, lalu apa yang bisa salah dan apa yang terjadi berikutnya.'),
      L('This is Barbara Minto’s pyramid principle applied to speech: the governing thought at the top, supported by a small number of grouped arguments, each backed by evidence. Its power is that the listener can stop at any level and still have the essential message. Its discipline is that you must decide what you think before you start talking.',
        'Ini adalah prinsip piramida Barbara Minto yang diterapkan pada ucapan: gagasan utama di puncak, didukung sejumlah kecil argumen yang dikelompokkan, masing-masing ditopang bukti. Kekuatannya: pendengar bisa berhenti di tingkat mana pun dan tetap mendapat pesan intinya. Disiplinnya: kamu harus memutuskan apa yang kamu pikirkan sebelum mulai berbicara.')
    ],
    why: L('The final minute is what the interviewer remembers when they write up the case, and the same structure decides whether your updates at work get read or skimmed.',
           'Menit terakhir adalah yang diingat pewawancara saat menulis penilaian kasus, dan struktur yang sama menentukan apakah pembaruanmu di tempat kerja dibaca atau sekadar dilirik.'),
    framework: {
      name: L('The sixty-second synthesis', 'Sintesis enam puluh detik'),
      steps: [
        { h: L('Recommendation, in one sentence', 'Rekomendasi, dalam satu kalimat'), d: L('“We recommend X.” No preamble, no hedging.', '“Kami merekomendasikan X.” Tanpa pembuka, tanpa ragu-ragu.') },
        { h: L('Three supporting reasons', 'Tiga alasan pendukung'), d: L('Each with one number or fact from the case.', 'Masing-masing dengan satu angka atau fakta dari kasus.') },
        { h: L('The main risk', 'Risiko utama'), d: L('What could make this wrong, and how you would watch for it.', 'Apa yang bisa membuatnya salah, dan bagaimana kamu memantaunya.') },
        { h: L('Next steps', 'Langkah berikutnya'), d: L('Two concrete actions with an owner or a timeframe.', 'Dua tindakan konkret dengan penanggung jawab atau jangka waktu.') }
      ]
    },
    example: {
      title: L('Roti Senja, synthesised for its CEO', 'Roti Senja, disintesis untuk CEO-nya'),
      paras: [
        L('“We recommend repricing the delivery menu and renegotiating your two largest ingredient contracts. Three reasons. First, costs rose Rp 11.4 bn against Rp 6 bn of new revenue, so margin fell from 15% to 10%. Second, delivery commissions alone rose about Rp 4 bn because delivery grew at in-store prices. Third, ingredient costs rose from 40% to 42% of revenue without any price change.', '“Kami merekomendasikan penetapan ulang harga menu antar dan negosiasi ulang dua kontrak bahan baku terbesar Anda. Tiga alasan. Pertama, biaya naik Rp 11,4 M dibanding pendapatan baru Rp 6 M, sehingga margin turun dari 15% menjadi 10%. Kedua, komisi pesan antar saja naik sekitar Rp 4 M karena pesan antar tumbuh dengan harga toko. Ketiga, biaya bahan naik dari 40% menjadi 42% pendapatan tanpa perubahan harga.'),
        L('The main risk is that higher delivery prices reduce orders; we would test the new prices in three outlets for a month first. Next steps: the commercial team drafts delivery pricing this week, and procurement opens supplier talks before the next contract renewal.”', 'Risiko utamanya adalah harga antar yang lebih tinggi mengurangi pesanan; kami akan menguji harga baru di tiga gerai selama sebulan lebih dulu. Langkah berikutnya: tim komersial menyusun harga antar minggu ini, dan bagian pengadaan membuka pembicaraan dengan pemasok sebelum pembaruan kontrak berikutnya.”')
      ],
      note: L('Continues the fictional case from “Profitability cases, worked through”.', 'Melanjutkan kasus fiktif dari “Kasus profitabilitas, dikerjakan tuntas”.')
    },
    means: {
      'student': L('Use the shape for presentations and group assignments. Lecturers notice it as quickly as interviewers do.', 'Pakai bentuk ini untuk presentasi dan tugas kelompok. Dosen menyadarinya secepat pewawancara.'),
      'fresh-graduate': L('Take thirty seconds to prepare before you synthesise. Asking “may I take a moment to structure my answer?” is a strength, not a weakness.', 'Ambil tiga puluh detik untuk bersiap sebelum menyintesis. Bertanya “boleh saya mengambil waktu sejenak untuk menyusun jawaban?” adalah kekuatan, bukan kelemahan.'),
      'early-professional': L('Start every email to a senior person with the recommendation or the ask in the first line.', 'Mulai setiap surel kepada orang senior dengan rekomendasi atau permintaan di baris pertama.'),
      'mature-professional': L('Coach your team to brief you in this shape. It doubles the number of decisions you can make in a day.', 'Latih timmu memberi laporan kepadamu dalam bentuk ini. Itu menggandakan jumlah keputusan yang bisa kamu ambil dalam sehari.')
    },
    act: [
      L('Write the four-part synthesis for a decision you face this month, in under 120 words.', 'Tulis sintesis empat bagian untuk keputusan yang kamu hadapi bulan ini, di bawah 120 kata.'),
      L('Say it aloud and time it. If it runs past sixty seconds, cut the reasons, not the recommendation.', 'Ucapkan dan ukur waktunya. Jika lebih dari enam puluh detik, potong alasannya, bukan rekomendasinya.'),
      L('Check that every reason contains a number or a fact.', 'Pastikan setiap alasan memuat angka atau fakta.'),
      L('Do the drill below and compare your first sentence with the model.', 'Kerjakan latihan di bawah dan bandingkan kalimat pertamamu dengan contohnya.')
    ],
    drill: {
      title: L('Synthesise the gym case', 'Sintesis kasus pusat kebugaran'), minutes: 4,
      prompt: L('Using the gym chain drill from the profitability piece (fee cut from Rp 400k to Rp 300k; members up from 8,000 to 10,000; monthly profit down from Rp 0.4 bn to Rp 0.1 bn; 11,200 members needed to restore profit), write a sixty-second synthesis for the chain’s owner.',
                'Memakai latihan pusat kebugaran dari artikel profitabilitas (biaya dipotong dari Rp 400 rb menjadi Rp 300 rb; anggota naik dari 8.000 menjadi 10.000; laba bulanan turun dari Rp 0,4 M menjadi Rp 0,1 M; dibutuhkan 11.200 anggota untuk memulihkan laba), tulis sintesis enam puluh detik untuk pemilik jaringan.'),
      steps: [
        L('Decide your recommendation before writing anything else.', 'Putuskan rekomendasimu sebelum menulis apa pun.'),
        L('Use the three numbers that matter most.', 'Pakai tiga angka yang paling penting.')
      ],
      answer: [
        L('“We recommend ending the open-ended discount and moving promotional members to a time-limited offer. First, profit fell from Rp 0.4 bn to Rp 0.1 bn a month because each member now contributes Rp 250k instead of Rp 350k. Second, restoring the old profit at the new price needs 11,200 members, 12% more than today. Third, the chain is only 400 members above breakeven, so any churn puts it in loss.', '“Kami merekomendasikan menghentikan diskon tanpa batas waktu dan memindahkan anggota promosi ke penawaran berjangka. Pertama, laba turun dari Rp 0,4 M menjadi Rp 0,1 M per bulan karena setiap anggota kini berkontribusi Rp 250 rb, bukan Rp 350 rb. Kedua, memulihkan laba lama pada harga baru membutuhkan 11.200 anggota, 12% lebih banyak dari sekarang. Ketiga, jaringan ini hanya 400 anggota di atas titik impas, sehingga sedikit saja anggota yang berhenti akan membuatnya rugi.'),
        L('The risk is that new members leave when the price rises; we would offer them a three-month bridge rate. Next steps: stop the offer for new sign-ups this month and measure conversion of promotional members over the next quarter.”', 'Risikonya, anggota baru pergi saat harga naik; kami akan menawarkan tarif jembatan tiga bulan. Langkah berikutnya: hentikan penawaran untuk pendaftar baru bulan ini dan ukur konversi anggota promosi selama kuartal berikutnya.”')
      ]
    },
    reflect: [
      L('In your last important update, how many sentences came before the point?', 'Dalam pembaruan pentingmu yang terakhir, berapa kalimat yang muncul sebelum intinya?'),
      L('Which is harder for you: deciding the recommendation or cutting the detail?', 'Mana yang lebih sulit bagimu: memutuskan rekomendasi atau memangkas detail?')
    ],
    sources: [
      { note: L('Barbara Minto, “The Pyramid Principle: Logic in Writing and Thinking” (Pearson). Original Metanoia writing; the cases continue fictional examples from this library.', 'Barbara Minto, “The Pyramid Principle: Logic in Writing and Thinking” (Pearson). Tulisan asli Metanoia; kasusnya melanjutkan contoh fiktif dari pustaka ini.') }
    ],
    tools: [
      { pillar: 'the-route', why: L('The Route’s Lesson 9.1, Communication with Executive Presence, trains the same shape: point, reasons, risk and ask, detail on request.', 'Pelajaran 9.1 The Route, Communication with Executive Presence, melatih bentuk yang sama: inti, alasan, risiko dan permintaan, detail bila diminta.') },
      { pillar: 'the-map', why: L('The Map’s Module 4, Communication for Impact, builds the foundations of answer-first speaking.', 'Modul 4 The Map, Communication for Impact, membangun dasar berbicara dengan jawaban di depan.') }
    ],
    further: [
      { url: 'https://casecoach.com/b/case-interview-preparation/', label: 'Case interview: the free preparation guide (synthesis)', by: 'CaseCoach' }
    ]
  },
  {
    slug: 'recovering-from-a-mind-blank', img: '../assets/pe/th-route.jpg', topic: 'consulting', format: 'guide', level: 'foundation',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-10-06', reviewed: '2026-10-06', minutes: 5, author: AUTHOR,
    title: L('When your mind goes blank in a case: a recovery routine', 'Saat pikiranmu kosong di tengah kasus: rutinitas pemulihan'),
    dek: L('Everyone blanks at some point. Interviewers do not mark you down for blanking; they mark you down for hiding it. A five-step routine gets you moving again calmly.',
           'Semua orang pernah blank. Pewawancara tidak mengurangi nilaimu karena blank; mereka mengurangi karena kamu menyembunyikannya. Rutinitas lima langkah membuatmu bergerak lagi dengan tenang.'),
    what: [
      L('A mind blank usually arrives at a transition: a new exhibit, an unexpected question, a calculation that will not resolve. Stress narrows attention, and the candidate either freezes in silence or starts talking without direction. Both look worse than the blank itself.',
        'Blank biasanya datang di saat transisi: exhibit baru, pertanyaan tak terduga, perhitungan yang tidak kunjung selesai. Stres menyempitkan perhatian, dan kandidat entah membeku dalam diam atau mulai bicara tanpa arah. Keduanya tampak lebih buruk daripada blank itu sendiri.'),
      L('Recovery works because a case has structure you can return to. If you have written the objective and your issue tree on a tracker page at the start, you always have somewhere to go back to. The routine below turns that page into a lifeline, and practising it in mock cases makes it automatic when it matters.',
        'Pemulihan berhasil karena kasus memiliki struktur yang bisa kamu datangi lagi. Jika kamu menulis tujuan dan pohon masalahmu di halaman pelacak sejak awal, kamu selalu punya tempat untuk kembali. Rutinitas di bawah mengubah halaman itu menjadi tali penyelamat, dan melatihnya dalam kasus simulasi membuatnya otomatis saat dibutuhkan.')
    ],
    why: L('Composure under pressure is part of what is being assessed, because clients and senior managers will put you under pressure too. A visible, calm recovery can score better than never having struggled.',
           'Ketenangan di bawah tekanan adalah bagian dari yang dinilai, karena klien dan manajer senior juga akan menekanmu. Pemulihan yang terlihat dan tenang bisa mendapat nilai lebih baik daripada tidak pernah kesulitan.'),
    framework: {
      name: L('The five-step recovery', 'Pemulihan lima langkah'),
      steps: [
        { h: L('Name the pause', 'Sebut jedanya'), d: L('“Let me take a moment to organise my thoughts.” Then breathe out slowly once.', '“Izinkan saya mengambil waktu sejenak untuk menata pikiran.” Lalu buang napas perlahan sekali.') },
        { h: L('Restate the objective', 'Ulangi tujuannya'), d: L('Read the case question from your tracker page aloud. It resets your attention.', 'Bacakan pertanyaan kasus dari halaman pelacakmu. Itu mengatur ulang perhatianmu.') },
        { h: L('Locate yourself in the tree', 'Temukan posisimu di pohon'), d: L('“We have covered revenue; costs remain.” Saying where you are tells you where to go.', '“Kita sudah membahas pendapatan; biaya masih tersisa.” Menyebut posisimu memberi tahu ke mana harus pergi.') },
        { h: L('Pick the next branch or ask a precise question', 'Pilih cabang berikutnya atau ajukan pertanyaan yang tepat'), d: L('A precise question (“do we have cost data by outlet?”) is progress; a vague one is not.', 'Pertanyaan yang tepat (“apakah kita punya data biaya per gerai?”) adalah kemajuan; pertanyaan samar bukan.') },
        { h: L('Resume with a short summary', 'Lanjutkan dengan ringkasan singkat'), d: L('One sentence on what you know so far, then continue.', 'Satu kalimat tentang apa yang sudah diketahui, lalu lanjutkan.') }
      ]
    },
    means: {
      'student': L('Practise blanking on purpose: ask your practice partner to interrupt you with an off-topic question, then run the routine.', 'Latih blank dengan sengaja: minta rekan latihanmu menyela dengan pertanyaan di luar topik, lalu jalankan rutinitasnya.'),
      'fresh-graduate': L('Always keep a tracker page in interviews: objective at the top, tree beneath, findings ticked as you go.', 'Selalu siapkan halaman pelacak dalam wawancara: tujuan di atas, pohon di bawahnya, temuan dicentang sambil berjalan.'),
      'early-professional': L('The routine works in meetings too. Restating the question is the most underused move in professional life.', 'Rutinitas ini juga berlaku di rapat. Mengulang pertanyaan adalah langkah paling jarang dipakai dalam kehidupan profesional.')
    },
    act: [
      L('Set up a tracker page template: objective, tree, numbers, findings. Use it in every practice case.', 'Siapkan templat halaman pelacak: tujuan, pohon, angka, temuan. Pakai di setiap kasus latihan.'),
      L('Memorise your pause sentence in English and in Bahasa Indonesia.', 'Hafalkan kalimat jedamu dalam bahasa Inggris dan bahasa Indonesia.'),
      L('In your next three mock cases, ask your partner to trigger one blank on purpose.', 'Dalam tiga kasus simulasi berikutnya, minta rekanmu memicu satu blank dengan sengaja.'),
      L('After each case, note when you blanked and what the trigger was. Patterns appear quickly.', 'Setelah setiap kasus, catat kapan kamu blank dan apa pemicunya. Pola cepat terlihat.')
    ],
    drill: {
      title: L('Script the next thirty seconds', 'Tulis naskah tiga puluh detik berikutnya'), minutes: 3,
      prompt: L('You are twelve minutes into a case about a hospital group’s falling patient numbers. The interviewer hands you a table of patient visits by department and your mind goes blank. Write exactly what you would say in the next thirty seconds.',
                'Kamu sudah dua belas menit dalam kasus tentang turunnya jumlah pasien sebuah grup rumah sakit. Pewawancara memberimu tabel kunjungan pasien per departemen dan pikiranmu kosong. Tulis persis apa yang akan kamu ucapkan dalam tiga puluh detik berikutnya.'),
      steps: [
        L('Use the five steps in order.', 'Pakai lima langkah secara berurutan.'),
        L('End with a question or a concrete next action.', 'Akhiri dengan pertanyaan atau tindakan berikutnya yang konkret.')
      ],
      answer: [
        L('“Let me take a moment to look at this properly.” (Pause, one slow breath.) “We are trying to understand why patient numbers have fallen and how to restore them. So far we have established that the decline is in outpatient visits, not admissions. This table should tell us which departments drive that.', '“Izinkan saya melihat ini dengan saksama sejenak.” (Jeda, satu napas pelan.) “Kita sedang mencoba memahami mengapa jumlah pasien turun dan bagaimana memulihkannya. Sejauh ini kita sudah menetapkan bahwa penurunan ada di kunjungan rawat jalan, bukan rawat inap. Tabel ini seharusnya menunjukkan departemen mana yang mendorongnya.'),
        L('Let me start with the largest change. Before I compute it, is this data for all hospitals in the group or for the flagship only?” The question buys a few seconds, is genuinely useful, and puts you back inside the structure.', 'Saya mulai dari perubahan terbesar. Sebelum menghitungnya, apakah data ini untuk semua rumah sakit di grup atau hanya rumah sakit utamanya?” Pertanyaan itu memberi beberapa detik, benar-benar berguna, dan menempatkanmu kembali di dalam struktur.')
      ]
    },
    reflect: [
      L('What usually triggers your blanks: numbers, surprises, or a feeling of being judged?', 'Apa yang biasanya memicu blank-mu: angka, kejutan, atau perasaan sedang dinilai?'),
      L('What would you tell a friend who blanked in an interview yesterday? Can you say it to yourself?', 'Apa yang akan kamu katakan kepada teman yang blank di wawancara kemarin? Bisakah kamu mengatakannya kepada dirimu sendiri?')
    ],
    sources: [
      { note: L('Original Metanoia routine. The idea of recovering by restating the objective and returning to a tracker page is inspired by CaseCoach’s article on surviving a mind blank (see Further reading); the five-step wording and the drill are ours.', 'Rutinitas asli Metanoia. Gagasan pulih dengan mengulang tujuan dan kembali ke halaman pelacak terinspirasi dari artikel CaseCoach tentang bertahan dari blank (lihat Bacaan lanjutan); rumusan lima langkah dan latihannya adalah milik kami.') }
    ],
    tools: [
      { pillar: 'the-rope', why: L('The Rope’s Module 9, The Simulation Lab, covers nerves, delivery and practising with partners, and Lesson 6.2 sets out the “I don’t know” protocol.', 'Modul 9 The Rope, The Simulation Lab, membahas rasa gugup, cara penyampaian, dan berlatih dengan rekan, dan Pelajaran 6.2 menjelaskan protokol “saya tidak tahu”.') },
      { pillar: 'the-map', why: L('The Map’s Module 5 lesson Stress, Recovery and Mental Skills Under Pressure builds the underlying composure.', 'Pelajaran Stress, Recovery and Mental Skills Under Pressure di Modul 5 The Map membangun ketenangan yang mendasarinya.') }
    ],
    further: [
      { url: 'https://casecoach.com/b/how-to-survive-a-mind-blank-in-a-case-interview/', label: 'How to survive a mind blank in a case interview', by: 'CaseCoach' }
    ]
  },
  /* ═══════════ PROBLEM SOLVING & CONSULTING · preparing, and using it at work ═══════════ */
  {
    slug: 'practising-cases-a-six-week-plan', img: '../assets/pe/pf-range.jpg', topic: 'consulting', format: 'guide', level: 'intermediate',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-10-05', reviewed: '2026-10-05', minutes: 7, author: AUTHOR,
    title: L('Practising case interviews: a six-week plan that actually builds skill', 'Berlatih wawancara kasus: rencana enam minggu yang benar-benar membangun keterampilan'),
    dek: L('Reading about cases feels productive and changes little. Skill comes from live practice with feedback and solo drills on weak spots. Here is a week-by-week plan.',
           'Membaca tentang kasus terasa produktif tetapi sedikit mengubah. Keterampilan datang dari latihan langsung dengan umpan balik dan latihan mandiri pada titik lemah. Ini rencananya per minggu.'),
    what: [
      L('Case performance is a skill like public speaking: it improves through repetition with feedback, not through study alone. The core unit of practice is the live case, in which one person interviews and the other solves aloud, followed by honest feedback on structure, numbers, insight and communication. Solo work fills the gaps between: maths drills, structuring exercises and reading business news with a “so what” lens.',
        'Performa kasus adalah keterampilan seperti berbicara di depan umum: membaik lewat pengulangan dengan umpan balik, bukan lewat belajar saja. Unit inti latihannya adalah kasus langsung, di mana satu orang mewawancarai dan yang lain memecahkan dengan bersuara, diikuti umpan balik jujur tentang struktur, angka, wawasan, dan komunikasi. Kerja mandiri mengisi celahnya: latihan matematika, latihan penstrukturan, dan membaca berita bisnis dengan lensa “lalu apa”.'),
      L('Two habits separate efficient preparation from busy preparation. First, practise with varied partners, because each one notices different weaknesses and asks in a different style. Second, keep a mistake log and choose one thing to fix in each session. Doing many cases without changing anything mostly rehearses the same errors.',
        'Dua kebiasaan membedakan persiapan yang efisien dari persiapan yang sekadar sibuk. Pertama, berlatihlah dengan rekan yang beragam, karena masing-masing menyadari kelemahan berbeda dan bertanya dengan gaya berbeda. Kedua, simpan catatan kesalahan dan pilih satu hal untuk diperbaiki di setiap sesi. Mengerjakan banyak kasus tanpa mengubah apa pun sebagian besar hanya melatih kesalahan yang sama.')
    ],
    why: L('Most candidates under-practise live cases and over-read guides. A plan with a weekly target and a mistake log converts the same hours into visibly better performance.',
           'Kebanyakan kandidat kurang berlatih kasus langsung dan terlalu banyak membaca panduan. Rencana dengan target mingguan dan catatan kesalahan mengubah jam yang sama menjadi performa yang terlihat lebih baik.'),
    framework: {
      name: L('Six weeks, one focus each', 'Enam minggu, satu fokus per minggu'),
      steps: [
        { h: L('Week 1: learn the format and the toolkit', 'Minggu 1: pelajari format dan perangkatnya'), d: L('Read one solid guide, learn issue trees and the profit tree, start daily maths drills. Do two cases as interviewer to see what good looks like.', 'Baca satu panduan yang solid, pelajari pohon masalah dan pohon laba, mulai latihan matematika harian. Kerjakan dua kasus sebagai pewawancara untuk melihat seperti apa yang baik.') },
        { h: L('Week 2: first live cases', 'Minggu 2: kasus langsung pertama'), d: L('Three or four cases with peers. Expect them to be messy. Start the mistake log.', 'Tiga atau empat kasus dengan rekan sebaya. Wajar jika berantakan. Mulai catatan kesalahan.') },
        { h: L('Weeks 3 and 4: volume and variety', 'Minggu 3 dan 4: jumlah dan variasi'), d: L('Four to six cases a week across types: profitability, market entry, sizing, operations. Rotate partners. Fix one logged weakness per session.', 'Empat sampai enam kasus seminggu lintas jenis: profitabilitas, masuk pasar, estimasi, operasi. Ganti-ganti rekan. Perbaiki satu kelemahan tercatat per sesi.') },
        { h: L('Week 5: realistic mocks and fit stories', 'Minggu 5: simulasi realistis dan cerita fit'), d: L('Practise with experienced interviewers, ideally former consultants. Finish your fit stories and rehearse follow-ups.', 'Berlatihlah dengan pewawancara berpengalaman, idealnya mantan konsultan. Selesaikan cerita fit-mu dan latih pertanyaan lanjutan.') },
        { h: L('Week 6: sharpen and rest', 'Minggu 6: pertajam dan istirahat'), d: L('Fewer, higher-quality cases; firm-specific research; sleep. Arrive fresh, not exhausted.', 'Kasus lebih sedikit dengan kualitas lebih tinggi; riset spesifik firma; tidur. Datang segar, bukan kelelahan.') }
      ]
    },
    means: {
      'student': L('Start in the semester before applications open. Six weeks alongside classes is realistic; two weeks before an interview is not.', 'Mulailah di semester sebelum pendaftaran dibuka. Enam minggu di samping kuliah realistis; dua minggu sebelum wawancara tidak.'),
      'fresh-graduate': L('Find a practice group of three or four people with similar timelines. Rotating roles teaches as much as solving.', 'Temukan kelompok latihan berisi tiga atau empat orang dengan jadwal serupa. Bergantian peran mengajarkan sebanyak memecahkan kasus.'),
      'early-professional': L('Protect two evenings and one weekend slot a week in your calendar, and tell your manager only what you need to.', 'Lindungi dua malam dan satu slot akhir pekan setiap minggu di kalendermu, dan beri tahu manajermu hanya yang perlu.')
    },
    act: [
      L('Put the six weekly focuses into your calendar today, with the interview date at the end.', 'Masukkan enam fokus mingguan ke kalendermu hari ini, dengan tanggal wawancara di ujungnya.'),
      L('Create a mistake log with three columns: what went wrong, why, what I will do next time.', 'Buat catatan kesalahan dengan tiga kolom: apa yang salah, mengapa, apa yang akan saya lakukan lain kali.'),
      L('Recruit at least three different practice partners before week 2 starts.', 'Rekrut sedikitnya tiga rekan latihan berbeda sebelum minggu 2 dimulai.'),
      L('Use the drills in this library for solo sessions: issue trees, market sizing, case math, exhibits and synthesis.', 'Gunakan latihan di pustaka ini untuk sesi mandiri: pohon masalah, estimasi pasar, matematika kasus, exhibit, dan sintesis.')
    ],
    reflect: [
      L('Which part of a case do you avoid practising because it feels uncomfortable? That is your week 3 focus.', 'Bagian kasus mana yang kamu hindari karena terasa tidak nyaman? Itulah fokus minggu 3-mu.'),
      L('Who could give you the most honest feedback, and have you asked them yet?', 'Siapa yang bisa memberimu umpan balik paling jujur, dan sudahkah kamu memintanya?')
    ],
    sources: [
      { note: L('Original Metanoia plan. The emphasis on live practice with partners, solo drills and last-minute preparation reflects themes in CaseCoach’s practice articles (see Further reading); the week structure is ours.', 'Rencana asli Metanoia. Penekanan pada latihan langsung dengan rekan, latihan mandiri, dan persiapan menit terakhir mencerminkan tema dalam artikel latihan CaseCoach (lihat Bacaan lanjutan); struktur mingguannya milik kami.') }
    ],
    tools: [
      { pillar: 'the-pack', why: L('The Pack’s Case Interview Practice module runs live structured cases with mentors, the week 5 step most candidates cannot arrange alone.', 'Modul Case Interview Practice di The Pack menjalankan kasus terstruktur langsung bersama mentor, langkah minggu 5 yang sulit diatur sendiri oleh kebanyakan kandidat.') },
      { pillar: 'the-rope', why: L('The Rope’s Module 9, The Simulation Lab, covers deliberate practice, reading feedback, practising with partners and a 10-day sprint.', 'Modul 9 The Rope, The Simulation Lab, membahas latihan yang disengaja, membaca umpan balik, berlatih dengan rekan, dan sprint 10 hari.') },
      { pillar: 'the-compass', why: L('Put the six weeks and the interview date into The Compass so the plan stays visible.', 'Masukkan enam minggu dan tanggal wawancara ke The Compass agar rencananya tetap terlihat.') }
    ],
    further: [
      { url: 'https://casecoach.com/b/practice-case-interviews/', label: 'Practice case interviews: how to get started', by: 'CaseCoach' },
      { url: 'https://casecoach.com/b/practising-consulting-case-studies-by-yourself/', label: 'How to practise case interviews alone', by: 'CaseCoach' },
      { url: 'https://casecoach.com/b/five-steps-for-last-minute-case-interview-preparation/', label: 'Tips for last-minute case interview preparation', by: 'CaseCoach' }
    ]
  },
  {
    slug: 'fit-interviews-stories-that-show-capability', img: '../assets/pe/th-interview.jpg', topic: 'consulting', format: 'guide', level: 'foundation',
    stages: ['student', 'fresh-graduate', 'early-professional', 'mature-professional'], trending: true,
    date: '2026-10-04', reviewed: '2026-10-04', minutes: 7, author: AUTHOR,
    title: L('Fit interviews: one story, told deeply, beats five told well', 'Wawancara fit: satu cerita yang digali dalam mengalahkan lima cerita yang diceritakan dengan baik'),
    dek: L('Consulting fit interviews probe a single story until they reach your real decisions. Prepare fewer stories, in more depth, and be ready for the fourth follow-up.',
           'Wawancara fit konsultan menggali satu cerita sampai menemukan keputusanmu yang sebenarnya. Siapkan lebih sedikit cerita, lebih dalam, dan bersiaplah untuk pertanyaan lanjutan keempat.'),
    what: [
      L('Every consulting interview includes a personal part. Some firms run a short fit segment before the case; McKinsey calls its version the Personal Experience Interview and describes it on its careers site. The common thread is depth. The interviewer chooses one story and keeps asking: what exactly did you do, why that choice, what did the other person say, what would you change? Within a few minutes, a rehearsed story either reveals real decisions or collapses into “we”.',
        'Setiap wawancara konsultan mencakup bagian personal. Sebagian firma menjalankan segmen fit singkat sebelum kasus; McKinsey menyebut versinya Personal Experience Interview dan menjelaskannya di situs kariernya. Benang merahnya adalah kedalaman. Pewawancara memilih satu cerita dan terus bertanya: apa persisnya yang kamu lakukan, mengapa pilihan itu, apa kata orang lain, apa yang akan kamu ubah? Dalam beberapa menit, cerita yang dihafal entah mengungkap keputusan nyata atau runtuh menjadi “kami”.'),
      L('Firms assess a small set of qualities, typically some combination of leadership, drive or achievement, influence and personal impact, and growth or learning. Each strong story should carry one quality clearly, with tension in the middle: a disagreement, a setback, a risk you chose to take. Stories without tension sound like reports, and reports do not reveal character.',
        'Firma menilai sejumlah kecil kualitas, biasanya kombinasi dari kepemimpinan, dorongan atau prestasi, pengaruh dan dampak personal, serta pertumbuhan atau pembelajaran. Setiap cerita yang kuat harus membawa satu kualitas dengan jelas, dengan ketegangan di tengahnya: ketidaksepakatan, kemunduran, risiko yang kamu pilih untuk diambil. Cerita tanpa ketegangan terdengar seperti laporan, dan laporan tidak mengungkap karakter.')
    ],
    why: L('Candidates over-prepare cases and under-prepare stories, yet in many processes the personal interview carries equal weight. It is also the part you can prepare almost completely in advance.',
           'Kandidat berlebihan menyiapkan kasus dan kurang menyiapkan cerita, padahal di banyak proses wawancara personal punya bobot yang sama. Ia juga bagian yang hampir sepenuhnya bisa kamu siapkan lebih dulu.'),
    framework: {
      name: L('A story that survives probing', 'Cerita yang bertahan saat digali'),
      steps: [
        { h: L('Context in two sentences', 'Konteks dalam dua kalimat'), d: L('Where, when, what was at stake. Stop there.', 'Di mana, kapan, apa yang dipertaruhkan. Berhenti di situ.') },
        { h: L('The tension', 'Ketegangannya'), d: L('The obstacle, disagreement or risk that made it hard.', 'Hambatan, ketidaksepakatan, atau risiko yang membuatnya sulit.') },
        { h: L('Your choices, in the first person', 'Pilihanmu, dengan orang pertama'), d: L('Two or three decisions you made, and why. Say “I”.', 'Dua atau tiga keputusan yang kamu ambil, dan alasannya. Katakan “saya”.') },
        { h: L('The result, with a number if possible', 'Hasilnya, dengan angka jika mungkin'), d: L('What changed, for whom, and how you know.', 'Apa yang berubah, bagi siapa, dan bagaimana kamu tahu.') },
        { h: L('The reflection', 'Refleksinya'), d: L('What you learned and what you would do differently now.', 'Apa yang kamu pelajari dan apa yang akan kamu lakukan berbeda sekarang.') }
      ]
    },
    means: {
      'student': L('Your best stories may come from organisations, competitions or part-time work. Depth matters more than prestige.', 'Cerita terbaikmu mungkin datang dari organisasi, kompetisi, atau kerja paruh waktu. Kedalaman lebih penting daripada gengsi.'),
      'fresh-graduate': L('Prepare one main and one backup story for each quality the firm assesses. Eight deep stories beat twenty shallow ones.', 'Siapkan satu cerita utama dan satu cadangan untuk setiap kualitas yang dinilai firma. Delapan cerita yang dalam mengalahkan dua puluh yang dangkal.'),
      'early-professional': L('Choose stories where you influenced people you did not manage. That is the situation consultants face every week.', 'Pilih cerita saat kamu memengaruhi orang yang tidak kamu pimpin. Itulah situasi yang dihadapi konsultan setiap minggu.'),
      'mature-professional': L('Show judgement, not just results: a decision you got wrong, how you noticed, what you changed.', 'Tunjukkan penilaian, bukan hanya hasil: keputusan yang salah, bagaimana kamu menyadarinya, apa yang kamu ubah.')
    },
    act: [
      L('List the qualities your target firms say they assess, using their own careers pages.', 'Daftar kualitas yang menurut firma sasaranmu mereka nilai, memakai halaman karier mereka sendiri.'),
      L('Draft one story per quality using the five-part structure, in under 250 words each.', 'Susun satu cerita per kualitas memakai struktur lima bagian, di bawah 250 kata masing-masing.'),
      L('Ask a partner to probe each story with “why?” and “what exactly did you do?” until you run out of answers. Fill those gaps.', 'Minta rekan menggali setiap cerita dengan “mengapa?” dan “apa persisnya yang kamu lakukan?” sampai kamu kehabisan jawaban. Isi celah itu.'),
      L('Rehearse in both English and Bahasa Indonesia if the process may switch languages.', 'Latih dalam bahasa Inggris dan bahasa Indonesia jika prosesnya mungkin berganti bahasa.')
    ],
    drill: {
      title: L('Survive four follow-ups', 'Bertahan dari empat pertanyaan lanjutan'), minutes: 12,
      prompt: L('Choose a story about persuading someone who initially disagreed with you. Write it in the five-part structure, then write your answers to four follow-ups: (1) What exactly did you say first? (2) Why did you think that would work? (3) What did they object to, in their words? (4) What would you do differently?',
                'Pilih cerita tentang meyakinkan seseorang yang awalnya tidak setuju denganmu. Tulis dengan struktur lima bagian, lalu tulis jawabanmu untuk empat pertanyaan lanjutan: (1) Apa persisnya yang kamu katakan pertama kali? (2) Mengapa kamu kira itu akan berhasil? (3) Apa keberatan mereka, dengan kata-kata mereka? (4) Apa yang akan kamu lakukan berbeda?'),
      steps: [
        L('If you cannot answer (1) and (3) concretely, choose a different story.', 'Jika kamu tidak bisa menjawab (1) dan (3) secara konkret, pilih cerita lain.'),
        L('Keep “we” out of the choices section.', 'Jauhkan kata “kami” dari bagian pilihan.')
      ],
      answer: [
        L('A model shape: “As treasurer of a student association, I proposed moving our annual event from a hotel to the campus hall to cut costs by about a third. The chair disagreed because sponsors expected a hotel venue. I first asked for ten minutes to show the budget, not to argue the venue.', 'Bentuk contoh: “Sebagai bendahara asosiasi mahasiswa, saya mengusulkan memindahkan acara tahunan dari hotel ke aula kampus untuk memangkas biaya sekitar sepertiga. Ketua tidak setuju karena sponsor mengharapkan tempat di hotel. Saya pertama-tama meminta sepuluh menit untuk menunjukkan anggarannya, bukan untuk memperdebatkan tempatnya.'),
        L('I thought numbers would land better than opinions because the chair cared about the deficit. His objection was “sponsors will think we are cheap”, so I called two sponsors myself and asked; both cared about audience size, not venue. We moved, saved the money and doubled attendance. Today I would involve the chair in the sponsor calls, so the decision felt like his too.”', 'Saya kira angka akan lebih mengena daripada pendapat karena ketua peduli pada defisit. Keberatannya adalah “sponsor akan menganggap kita murahan”, jadi saya menelepon dua sponsor sendiri dan bertanya; keduanya peduli pada jumlah penonton, bukan tempat. Kami pindah, menghemat uang, dan menggandakan kehadiran. Hari ini saya akan melibatkan ketua dalam panggilan ke sponsor, agar keputusan itu juga terasa miliknya.”'),
        L('Notice the specific first move, the stated reasoning, the objection in the other person’s words and an honest improvement. Your story will be different; those four features should be present.', 'Perhatikan langkah pertama yang spesifik, alasan yang dinyatakan, keberatan dengan kata-kata orang lain, dan perbaikan yang jujur. Ceritamu akan berbeda; keempat ciri itu harus ada.')
      ]
    },
    reflect: [
      L('Which story do you tell most often, and which quality does it really show?', 'Cerita mana yang paling sering kamu ceritakan, dan kualitas apa yang sebenarnya ditunjukkannya?'),
      L('Which of your experiences have you never told because it involved a mistake? It may be your strongest growth story.', 'Pengalaman mana yang tidak pernah kamu ceritakan karena melibatkan kesalahan? Bisa jadi itulah cerita pertumbuhan terkuatmu.')
    ],
    sources: [
      { note: L('Original Metanoia guide. The single-story, deep-probing format and the advice to prepare a main and a backup story per assessed quality reflect CaseCoach’s guides to fit interviews and McKinsey’s Personal Experience Interview (see Further reading). Check each firm’s own careers site for what it currently assesses. The model story is illustrative.', 'Panduan asli Metanoia. Format satu cerita yang digali dalam dan saran menyiapkan satu cerita utama dan satu cadangan per kualitas yang dinilai mencerminkan panduan CaseCoach tentang wawancara fit dan Personal Experience Interview McKinsey (lihat Bacaan lanjutan). Periksa situs karier setiap firma untuk apa yang dinilainya saat ini. Cerita contohnya bersifat ilustratif.') }
    ],
    tools: [
      { pillar: 'the-rope', why: L('The Rope’s Module 2, Your Story Bank, builds STAR+L stories and prepares you for the third follow-up.', 'Modul 2 The Rope, Your Story Bank, membangun cerita STAR+L dan menyiapkanmu untuk pertanyaan lanjutan ketiga.') },
      { pillar: 'the-pack', why: L('A Pack mentor who has interviewed for consulting firms can probe your stories the way an interviewer will.', 'Mentor Pack yang pernah mewawancarai untuk firma konsultan bisa menggali ceritamu seperti yang akan dilakukan pewawancara.') }
    ],
    further: [
      { url: 'https://casecoach.com/b/how-to-ace-consulting-fit-interviews-the-free-casecoach-guide/', label: 'How to ace consulting fit interviews', by: 'CaseCoach' },
      { url: 'https://casecoach.com/b/mckinseys-personal-experience-interview-how-to-prepare-for-it/', label: 'Preparing for the McKinsey Personal Experience Interview', by: 'CaseCoach' },
      { url: 'https://casecoach.com/b/how-different-are-the-interviews-at-mckinsey-bain-and-bcg/', label: 'How interviews at McKinsey, BCG and Bain differ', by: 'CaseCoach' }
    ]
  },
  {
    slug: 'written-and-group-cases', img: '../assets/pe/th-alumni.jpg', topic: 'consulting', format: 'explainer', level: 'intermediate',
    stages: ['fresh-graduate', 'early-professional'],
    date: '2026-10-03', reviewed: '2026-10-03', minutes: 6, author: AUTHOR,
    title: L('Written cases and group cases: the formats that test triage and teamwork', 'Kasus tertulis dan kasus kelompok: format yang menguji pemilahan dan kerja sama'),
    dek: L('Some processes hand you a stack of documents and a deadline, or put you in a room with other candidates. Same problem-solving, different traps. Plan for both.',
           'Sebagian proses memberimu setumpuk dokumen dan tenggat, atau menempatkanmu di satu ruangan dengan kandidat lain. Pemecahan masalah yang sama, jebakan berbeda. Rencanakan keduanya.'),
    what: [
      L('In a written case you receive a brief, a set of documents and questions, and a fixed time to prepare a short presentation, often a handful of slides, which you then present and defend. It tests the same reasoning as a spoken case plus two extra skills: deciding what to ignore under time pressure, and turning analysis into a client-ready story without help. Written cases are less common than spoken ones, but they appear in some final rounds and in other employers’ assessment centres.',
        'Dalam kasus tertulis kamu menerima brief, sekumpulan dokumen dan pertanyaan, serta waktu tetap untuk menyiapkan presentasi singkat, sering beberapa slide, yang lalu kamu presentasikan dan pertahankan. Ia menguji penalaran yang sama dengan kasus lisan ditambah dua keterampilan: memutuskan apa yang diabaikan di bawah tekanan waktu, dan mengubah analisis menjadi cerita siap-klien tanpa bantuan. Kasus tertulis lebih jarang daripada kasus lisan, tetapi muncul di sebagian babak final dan di assessment centre pemberi kerja lain.'),
      L('In a group case, several candidates solve one problem together while assessors watch. Being right matters less than how you help the group get somewhere: proposing a structure, building on others’ ideas, keeping time, bringing in a quiet member, and summarising. Dominating is marked down as surely as disappearing.',
        'Dalam kasus kelompok, beberapa kandidat memecahkan satu masalah bersama sementara asesor mengamati. Menjadi benar kurang penting dibanding bagaimana kamu membantu kelompok mencapai sesuatu: mengusulkan struktur, membangun di atas gagasan orang lain, menjaga waktu, melibatkan anggota yang diam, dan merangkum. Mendominasi dinilai buruk sama pastinya dengan menghilang.')
    ],
    why: L('Candidates who have only practised spoken one-to-one cases are often surprised by these formats. A little specific preparation removes most of the surprise.',
           'Kandidat yang hanya berlatih kasus lisan satu lawan satu sering terkejut oleh format ini. Sedikit persiapan khusus menghilangkan sebagian besar kejutannya.'),
    framework: {
      name: L('Time plan for a written case', 'Rencana waktu untuk kasus tertulis'),
      steps: [
        { h: L('First 10%: read the questions, then skim everything', 'Sepuluh persen pertama: baca pertanyaan, lalu pindai semuanya'), d: L('Mark each document as essential, useful or ignore.', 'Tandai setiap dokumen sebagai penting, berguna, atau abaikan.') },
        { h: L('Next 15%: structure and hypothesis', 'Lima belas persen berikutnya: struktur dan hipotesis'), d: L('Draft your answer and the slide titles before calculating anything.', 'Susun jawaban dan judul slide sebelum menghitung apa pun.') },
        { h: L('Next 45%: analysis', 'Empat puluh lima persen berikutnya: analisis'), d: L('Only the calculations your slide titles need. Note assumptions.', 'Hanya perhitungan yang dibutuhkan judul slide-mu. Catat asumsi.') },
        { h: L('Next 20%: slides', 'Dua puluh persen berikutnya: slide'), d: L('Answer-first titles, one message per slide, a recommendation slide at the front.', 'Judul berupa jawaban, satu pesan per slide, slide rekomendasi di depan.') },
        { h: L('Final 10%: rehearse and anticipate', 'Sepuluh persen terakhir: latihan dan antisipasi'), d: L('Say the synthesis aloud once and list three likely challenges.', 'Ucapkan sintesisnya sekali dan daftar tiga kemungkinan sanggahan.') }
      ]
    },
    means: {
      'fresh-graduate': L('If a process mentions an assessment centre or a written exercise, practise one full timed run before the day.', 'Jika suatu proses menyebut assessment centre atau latihan tertulis, latih satu putaran penuh berwaktu sebelum harinya.'),
      'early-professional': L('In group cases, your work experience shows best as facilitation: proposing a plan and keeping the group on it.', 'Dalam kasus kelompok, pengalaman kerjamu paling terlihat sebagai fasilitasi: mengusulkan rencana dan menjaga kelompok tetap padanya.')
    },
    act: [
      L('Take any annual report or long article, set a 45-minute timer, and produce three answer-first slides on one question.', 'Ambil laporan tahunan atau artikel panjang apa pun, pasang pengatur waktu 45 menit, dan hasilkan tiga slide berjudul jawaban untuk satu pertanyaan.'),
      L('Learn three group-case phrases: one that proposes structure, one that builds on someone else, one that summarises.', 'Pelajari tiga frasa kasus kelompok: satu yang mengusulkan struktur, satu yang membangun di atas orang lain, satu yang merangkum.'),
      L('In practice groups, ask an observer to count how often each person speaks and whether they build or compete.', 'Dalam kelompok latihan, minta pengamat menghitung seberapa sering setiap orang bicara dan apakah mereka membangun atau bersaing.'),
      L('Read the drill below and decide your time plan before you look at the model answer.', 'Baca latihan di bawah dan putuskan rencana waktumu sebelum melihat contoh jawabannya.')
    ],
    drill: {
      title: L('Plan sixty minutes and twenty-five pages', 'Rencanakan enam puluh menit dan dua puluh lima halaman'), minutes: 5,
      prompt: L('You receive a 25-page pack on whether a regional hospital group should open a new clinic, with 60 minutes to prepare four slides and a 10-minute presentation. Write your minute-by-minute plan and your four slide titles before reading anything.',
                'Kamu menerima paket 25 halaman tentang apakah sebuah grup rumah sakit regional sebaiknya membuka klinik baru, dengan 60 menit untuk menyiapkan empat slide dan presentasi 10 menit. Tulis rencana menit demi menitmu dan empat judul slide sebelum membaca apa pun.'),
      steps: [
        L('Apply the time plan percentages.', 'Terapkan persentase rencana waktu.'),
        L('Slide titles should be sentences with blanks you will fill.', 'Judul slide sebaiknya berupa kalimat dengan bagian kosong yang akan kamu isi.')
      ],
      answer: [
        L('Plan: 0 to 6 minutes, read the questions and skim all 25 pages, marking each document; 6 to 15, write the hypothesis and slide titles; 15 to 42, analysis for those titles only; 42 to 54, build the slides; 54 to 60, rehearse the synthesis and list likely challenges.', 'Rencana: menit 0 sampai 6, baca pertanyaan dan pindai 25 halaman, tandai setiap dokumen; 6 sampai 15, tulis hipotesis dan judul slide; 15 sampai 42, analisis hanya untuk judul-judul itu; 42 sampai 54, susun slide; 54 sampai 60, latih sintesis dan daftar kemungkinan sanggahan.'),
        L('Titles: (1) “We recommend [opening / not opening] the clinic in [location]”; (2) “Demand: the catchment can support about [X] visits a year”; (3) “Economics: the clinic breaks even in about [Y] years”; (4) “Risks and next steps: [main risk], tested by [action]”.', 'Judul: (1) “Kami merekomendasikan [membuka / tidak membuka] klinik di [lokasi]”; (2) “Permintaan: wilayah layanan dapat menopang sekitar [X] kunjungan per tahun”; (3) “Ekonomi: klinik mencapai titik impas dalam sekitar [Y] tahun”; (4) “Risiko dan langkah berikutnya: [risiko utama], diuji dengan [tindakan]”.')
      ]
    },
    reflect: [
      L('In groups, are you more often the person who proposes, builds, or summarises? Which role do you need to practise?', 'Dalam kelompok, apakah kamu lebih sering menjadi yang mengusulkan, membangun, atau merangkum? Peran mana yang perlu kamu latih?'),
      L('Under time pressure, do you read too much or decide too early?', 'Di bawah tekanan waktu, apakah kamu terlalu banyak membaca atau terlalu cepat memutuskan?')
    ],
    sources: [
      { note: L('Original Metanoia explainer. The description of written case formats reflects CaseCoach’s preparation guide and Bain interview overview (see Further reading); the time plan and drill are ours. Formats change, so check each firm’s current process.', 'Penjelasan asli Metanoia. Deskripsi format kasus tertulis mencerminkan panduan persiapan dan ikhtisar wawancara Bain dari CaseCoach (lihat Bacaan lanjutan); rencana waktu dan latihannya milik kami. Format berubah, jadi periksa proses terkini setiap firma.') }
    ],
    tools: [
      { pillar: 'the-rope', why: L('The Rope’s Module 7, Group Assessments and Assessment Centres, covers scoring, roles and phrases, and in-tray and presentation exercises.', 'Modul 7 The Rope, Group Assessments and Assessment Centres, membahas penilaian, peran dan frasa, serta latihan in-tray dan presentasi.') },
      { pillar: 'the-pack', why: L('The Pack’s FGD / LGD Simulations module gives you a practice group session with feedback.', 'Modul FGD / LGD Simulations di The Pack memberimu sesi kelompok latihan dengan umpan balik.') }
    ],
    further: [
      { url: 'https://casecoach.com/b/bain-interviews/', label: 'Bain interviews: an overview, including written cases', by: 'CaseCoach' },
      { url: 'https://casecoach.com/b/whats-different-between-a-first-round-and-final-round-interview-at-bain-bcg-or-mckinsey/', label: 'How first- and final-round interviews differ', by: 'CaseCoach' }
    ]
  },
  {
    slug: 'consulting-habits-for-any-job', img: '../assets/pe/ps-repositioning.jpg', topic: 'consulting', format: 'perspective', level: 'intermediate',
    stages: ['fresh-graduate', 'early-professional', 'mature-professional'], featured: 'secondary',
    date: '2026-10-02', reviewed: '2026-10-02', minutes: 6, author: AUTHOR,
    title: L('Five consulting habits worth stealing, whatever your job', 'Lima kebiasaan konsultan yang layak dicuri, apa pun pekerjaanmu'),
    dek: L('You do not need to join a consulting firm to work like a good consultant. Five habits, from the day-one answer to the ghost deck, travel to any desk and show quickly.',
           'Kamu tidak perlu bergabung ke firma konsultan untuk bekerja seperti konsultan yang baik. Lima kebiasaan, dari jawaban hari pertama sampai ghost deck, bisa dibawa ke meja mana pun dan cepat terlihat.'),
    what: [
      L('Much of what makes consultants effective is not secret knowledge but working habits developed under time pressure and client scrutiny. They decide what they think early, plan the final document before doing the analysis, spend effort where it changes the answer, test every finding for its implication, and write down what they learn each week. None of these needs a consulting title.',
        'Sebagian besar yang membuat konsultan efektif bukanlah pengetahuan rahasia, melainkan kebiasaan kerja yang terbentuk di bawah tekanan waktu dan sorotan klien. Mereka memutuskan pendapatnya sejak awal, merencanakan dokumen akhir sebelum mengerjakan analisis, mencurahkan tenaga di tempat yang mengubah jawaban, menguji setiap temuan untuk implikasinya, dan mencatat apa yang dipelajari setiap minggu. Tak satu pun membutuhkan gelar konsultan.'),
      L('The habits are especially valuable in Indonesian workplaces where junior staff are expected to execute rather than to propose. A junior analyst who brings a clear draft answer and a plan for testing it is easy for a senior manager to say yes to, and it builds the reputation for judgement that drives later promotion.',
        'Kebiasaan ini sangat berharga di tempat kerja Indonesia, di mana staf junior diharapkan melaksanakan alih-alih mengusulkan. Analis junior yang membawa draf jawaban yang jelas dan rencana untuk mengujinya mudah disetujui manajer senior, dan itu membangun reputasi penilaian yang mendorong promosi kemudian.')
    ],
    why: L('These habits make your work easier to direct and easier to trust, which is what most managers mean when they call someone “ready for more”.',
           'Kebiasaan ini membuat pekerjaanmu lebih mudah diarahkan dan lebih mudah dipercaya, yang dimaksud kebanyakan manajer saat menyebut seseorang “siap untuk tanggung jawab lebih”.'),
    framework: {
      name: L('Five habits to steal', 'Lima kebiasaan untuk dicuri'),
      steps: [
        { h: L('The day-one answer', 'Jawaban hari pertama'), d: L('Write your best guess at the answer on the first day of any task, then work to test it.', 'Tulis tebakan terbaikmu atas jawaban di hari pertama tugas apa pun, lalu kerjakan untuk mengujinya.') },
        { h: L('The ghost deck', 'Ghost deck'), d: L('Write the slide titles or report headings of the final document before analysis. Each title is a hypothesis.', 'Tulis judul slide atau judul bagian laporan akhir sebelum analisis. Setiap judul adalah hipotesis.') },
        { h: L('Eighty-twenty effort', 'Usaha delapan puluh dua puluh'), d: L('Ask which 20% of the analysis would change the decision, and do that part first and best.', 'Tanyakan 20% analisis mana yang akan mengubah keputusan, dan kerjakan bagian itu lebih dulu dan paling baik.') },
        { h: L('The so-what test', 'Uji lalu apa'), d: L('After every finding, ask “so what?” until the answer is an action someone could take.', 'Setelah setiap temuan, tanyakan “lalu apa?” sampai jawabannya adalah tindakan yang bisa diambil seseorang.') },
        { h: L('The Friday synthesis', 'Sintesis hari Jumat'), d: L('Each week, write three lines: what we now believe, what changed, what we test next.', 'Setiap minggu, tulis tiga baris: apa yang kini kita yakini, apa yang berubah, apa yang kita uji berikutnya.') }
      ]
    },
    means: {
      'fresh-graduate': L('Use the ghost deck on your first big assignment and show it to your manager before you start. You will avoid a week of wasted work.', 'Pakai ghost deck pada tugas besar pertamamu dan tunjukkan kepada manajermu sebelum mulai. Kamu akan terhindar dari seminggu kerja yang sia-sia.'),
      'early-professional': L('The Friday synthesis, sent to your manager, is the simplest way to make your thinking visible.', 'Sintesis hari Jumat, dikirim ke manajermu, adalah cara paling sederhana membuat cara berpikirmu terlihat.'),
      'mature-professional': L('Ask your team for the day-one answer and the ghost deck on every new piece of work. Review the titles, not the spreadsheets.', 'Minta timmu menyampaikan jawaban hari pertama dan ghost deck untuk setiap pekerjaan baru. Tinjau judulnya, bukan spreadsheet-nya.')
    },
    act: [
      L('Pick your current main task and write the day-one answer in one sentence.', 'Pilih tugas utamamu saat ini dan tulis jawaban hari pertamanya dalam satu kalimat.'),
      L('Draft five slide titles that would prove it, then do the drill below.', 'Susun lima judul slide yang akan membuktikannya, lalu kerjakan latihan di bawah.'),
      L('Run the so-what test on the last three findings you shared at work.', 'Jalankan uji lalu apa pada tiga temuan terakhir yang kamu bagikan di tempat kerja.'),
      L('Start a Friday synthesis this week and keep it for a month.', 'Mulai sintesis hari Jumat minggu ini dan pertahankan selama sebulan.')
    ],
    drill: {
      title: L('Build a ghost deck in ten minutes', 'Bangun ghost deck dalam sepuluh menit'), minutes: 10,
      prompt: L('Your manager asks: “Should we move our customer-service team from email to WhatsApp Business?” Before any analysis, write the five slide titles of your final recommendation as complete sentences with blanks for numbers.',
                'Manajermu bertanya: “Haruskah tim layanan pelanggan kita pindah dari surel ke WhatsApp Business?” Sebelum analisis apa pun, tulis lima judul slide rekomendasi akhirmu sebagai kalimat lengkap dengan bagian kosong untuk angka.'),
      steps: [
        L('Slide 1 is the recommendation.', 'Slide 1 adalah rekomendasinya.'),
        L('Each other slide proves one reason or addresses one risk.', 'Setiap slide lain membuktikan satu alasan atau menangani satu risiko.')
      ],
      answer: [
        L('(1) “We recommend moving first-line service to WhatsApp Business within [X] months, keeping email for formal complaints.” (2) “Most customers already contact us by chat: [Y]% of enquiries last quarter.” (3) “Response time could fall from [A] hours to [B] minutes with the same team.”', '(1) “Kami merekomendasikan memindahkan layanan lini pertama ke WhatsApp Business dalam [X] bulan, dengan surel tetap untuk keluhan formal.” (2) “Sebagian besar pelanggan sudah menghubungi kami lewat obrolan: [Y]% pertanyaan kuartal lalu.” (3) “Waktu respons bisa turun dari [A] jam menjadi [B] menit dengan tim yang sama.”'),
        L('(4) “The main risks are data protection and record-keeping, addressed by [controls].” (5) “A two-month pilot with one product line tests the case before full roll-out.” Every blank is now a specific analysis to run, and nothing else needs doing first.', '(4) “Risiko utamanya adalah perlindungan data dan pencatatan, ditangani dengan [kontrol].” (5) “Uji coba dua bulan dengan satu lini produk menguji usulan ini sebelum peluncuran penuh.” Setiap bagian kosong kini adalah analisis spesifik untuk dijalankan, dan tidak ada hal lain yang perlu dikerjakan lebih dulu.')
      ]
    },
    reflect: [
      L('Which of the five habits would your manager notice first if you started tomorrow?', 'Kebiasaan mana dari lima ini yang pertama akan disadari manajermu jika kamu mulai besok?'),
      L('Where are you spending effort that would not change any decision?', 'Di mana kamu mencurahkan tenaga yang tidak akan mengubah keputusan apa pun?')
    ],
    sources: [
      { note: L('Original Metanoia perspective drawing on widely described consulting practice, including Ethan M. Rasiel, “The McKinsey Way” (McGraw-Hill, 1999), and Barbara Minto, “The Pyramid Principle” (Pearson). The drill scenario is illustrative.', 'Perspektif asli Metanoia yang mengacu pada praktik konsultasi yang banyak dijelaskan, termasuk Ethan M. Rasiel, “The McKinsey Way” (McGraw-Hill, 1999), dan Barbara Minto, “The Pyramid Principle” (Pearson). Skenario latihannya ilustratif.') }
    ],
    tools: [
      { pillar: 'the-route', why: L('The Route’s Lesson 9.4, Thinking Like a Leader as an Individual Contributor, and Lesson 2.2, Visible Contribution Without Self-Promotion, put these habits into a career plan.', 'Pelajaran 9.4 The Route, Thinking Like a Leader as an Individual Contributor, dan Pelajaran 2.2, Visible Contribution Without Self-Promotion, memasukkan kebiasaan ini ke dalam rencana karier.') },
      { pillar: 'the-map', why: L('The Map’s Module 2, Self-Leadership Foundations, covers designing the outcome first and defending the important against the urgent.', 'Modul 2 The Map, Self-Leadership Foundations, membahas merancang hasil lebih dulu dan membela yang penting dari yang mendesak.') }
    ],
    further: [
      { url: 'https://casecoach.com/blog/', label: 'The CaseCoach blog: consulting careers, applications and interviews', by: 'CaseCoach' }
    ]
  }
  );

  /* ═══════════ OPPORTUNITY RADAR ═══════════
     Rules: only real, recurring, officially-published programmes; each entry
     carries the date we last checked and the official link; cycle windows are
     stated only where our database has a sourced date, otherwise the entry
     says to verify on the official page. Expired windows render as expired. */
  var RADAR = [
    { id: 'shopee-gdp', domain: 'shopee.co.id', org: 'Shopee Indonesia',
      title: L('Global/Graduate Development Program', 'Global/Graduate Development Program'),
      type: L('Graduate programme', 'Program graduate'),
      window: L('2026 intake opened 13 February 2026 (sourced); next window unannounced', 'Angkatan 2026 dibuka 13 Februari 2026 (bersumber); jendela berikutnya belum diumumkan'),
      status: 'closed',
      checked: '2026-08-17', url: 'https://careers.shopee.co.id' },
    { id: 'fhci-bumn', domain: 'fhcibumn.id', org: 'FHCI · BUMN',
      title: L('Rekrutmen Bersama BUMN', 'Rekrutmen Bersama BUMN'),
      type: L('Joint recruitment (state-owned)', 'Rekrutmen bersama (BUMN)'),
      window: L('Recurring national cycle; published age and GPA rules apply; verify the current batch on the official portal', 'Siklus nasional berulang; aturan usia dan IPK terpublikasi berlaku; cek batch berjalan di portal resmi'),
      status: 'verify',
      checked: '2026-08-17', url: 'https://rekrutmenbersama.fhcibumn.id' },
    { id: 'ulip', domain: 'unilever.co.id', org: 'Unilever Indonesia',
      title: L('Early careers: leadership programme & internships', 'Early careers: program kepemimpinan & magang'),
      type: L('Graduate programme · internship', 'Program graduate · magang'),
      window: L('Listed on the official careers site; cycles vary by track, verify there', 'Tercantum di situs karier resmi; siklus berbeda per jalur, cek di sana'),
      status: 'verify',
      checked: '2026-08-17', url: 'https://www.unilever.co.id/careers' },
    { id: 'lpdp', domain: 'lpdp.kemenkeu.go.id', org: 'LPDP · Kementerian Keuangan',
      title: L('LPDP scholarship (graduate study)', 'Beasiswa LPDP (studi lanjut)'),
      type: L('Scholarship', 'Beasiswa'),
      window: L('Typically batched cycles each year; current batch, requirements and deadlines are published only on the official site', 'Biasanya beberapa batch per tahun; batch berjalan, syarat, dan tenggat hanya dipublikasikan di situs resmi'),
      status: 'verify',
      checked: '2026-08-17', url: 'https://lpdp.kemenkeu.go.id' },
    { id: 'bi-pcpm', domain: 'bi.go.id', org: 'Bank Indonesia',
      title: L('PCPM: central-bank leadership entry programme', 'PCPM: program masuk kepemimpinan bank sentral'),
      type: L('Graduate programme', 'Program graduate'),
      window: L('Recurring but not annual on a fixed date; announced only via official channels', 'Berulang tapi tidak tiap tahun pada tanggal tetap; diumumkan hanya lewat kanal resmi'),
      status: 'verify',
      checked: '2026-08-17', url: 'https://www.bi.go.id/id/karir' }
  ];

  /* ═══════════ READING PATHS ═══════════
     Curated sequences through the library. Each is three to five pieces in
     the order they are best read; a path is editorial, never auto-generated,
     so it only lists slugs that exist above. */
  var PATHS = [
    { id: 'first-role', img: '../assets/pe/th-interview.jpg',
      title: L('Landing the first role', 'Mendapatkan peran pertama'),
      sub: L('From the first application to the offer, in the order the process runs.', 'Dari lamaran pertama hingga penawaran, sesuai urutan prosesnya.'),
      reads: ['first-90-days-of-a-job-search', 'reading-a-company-before-you-apply', 'the-take-home-assignment', 'group-discussions-what-assessors-tick', 'salary-questions-before-the-offer'] },
    { id: 'first-year', img: '../assets/pe/ed-lead.jpg',
      title: L('The first year at work', 'Tahun pertama bekerja'),
      sub: L('What managers measure, how to speak up, and how to be easy to delegate to.', 'Apa yang diukur manajer, cara bersuara, dan cara menjadi mudah diberi delegasi.'),
      reads: ['the-first-90-days-from-your-managers-chair', 'first-year-professional-etiquette', 'sungkan-without-silence', 'managing-up-in-one-page-a-week', 'feedback-literacy'] },
    { id: 'skills-compound', img: '../assets/pe/ed-writing.jpg',
      title: L('Skills that compound', 'Keterampilan yang bermajemuk'),
      sub: L('Four habits that pay every year you keep them.', 'Empat kebiasaan yang memberi imbal hasil setiap tahun kamu mempertahankannya.'),
      reads: ['the-one-page-memo', 'spreadsheet-fluency', 'learning-how-to-learn-at-work', 'prompting-is-a-writing-skill'] },
    { id: 'read-the-market', img: '../assets/pe/th-mapread.jpg',
      title: L('Reading the market before you aim', 'Membaca pasar sebelum membidik'),
      sub: L('Where the doors are, how employers actually hire, and which trade-offs are real.', 'Di mana pintu-pintunya, bagaimana pemberi kerja sungguh merekrut, dan pertukaran mana yang nyata.'),
      reads: ['what-675-companies-tell-us', 'reading-an-annual-report-in-twenty-minutes', 'how-state-owned-enterprises-hire', 'startups-versus-corporates-the-real-trade', 'regional-cities-as-a-first-move'] },
    { id: 'second-move', img: '../assets/pe/ed-pivot.jpg',
      title: L('Deciding the second move', 'Memutuskan langkah kedua'),
      sub: L('Optionality, lateral moves, and the people who should be in the room when you decide.', 'Opsionalitas, pindah lateral, dan orang-orang yang seharusnya ada saat kamu memutuskan.'),
      reads: ['optionality-choosing-a-first-job', 'lateral-moves-explained', 'career-pivot-readiness', 'a-personal-board-of-advisors', 'the-two-week-energy-audit'] },
    { id: 'case-interview', img: '../assets/pe/th-casestudy.jpg',
      title: L('Cracking the case interview', 'Menaklukkan wawancara kasus'),
      sub: L('The toolkit in the order you need it, each with a timed drill.', 'Perangkatnya sesuai urutan yang kamu butuhkan, masing-masing dengan latihan berwaktu.'),
      reads: ['issue-trees-and-mece', 'market-sizing-step-by-step', 'case-math-without-a-calculator', 'profitability-cases-the-profit-tree', 'synthesis-answer-first-in-sixty-seconds'] },
    { id: 'into-consulting', img: '../assets/pe/ed-people.jpg',
      title: L('Is consulting for me, and how do I get in?', 'Apakah konsultasi untukku, dan bagaimana masuk?'),
      sub: L('The industry, the fit test, the application and the personal interview.', 'Industrinya, uji kecocokan, lamaran, dan wawancara personal.'),
      reads: ['what-consultants-actually-do', 'is-consulting-for-you', 'the-consulting-cv-and-application', 'fit-interviews-stories-that-show-capability', 'practising-cases-a-six-week-plan'] },
    { id: 'think-like-a-consultant', img: '../assets/pe/ps-repositioning.jpg',
      title: L('Think like a consultant at work', 'Berpikir seperti konsultan di tempat kerja'),
      sub: L('Structured problem solving for people who never plan to join a firm.', 'Pemecahan masalah terstruktur untuk orang yang tak berencana bergabung ke firma.'),
      reads: ['hypothesis-driven-problem-solving', 'consulting-habits-for-any-job', 'reading-exhibits-in-a-case', 'the-one-page-memo', 'managing-up-in-one-page-a-week'] }
  ];

  return { TOPICS: TOPICS, FORMATS: FORMATS, STAGES: STAGES, LEVELS: LEVELS, NEEDS: NEEDS, ARTICLES: ARTICLES, RADAR: RADAR, PATHS: PATHS };
})();
