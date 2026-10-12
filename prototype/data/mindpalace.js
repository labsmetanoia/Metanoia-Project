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
      desc: L('Internships, scholarships and programmes, dated, linked, verified.', 'Magang, beasiswa, dan program, bertanggal, tertaut, terverifikasi.') }
  ];

  /* Editorial formats — each is a different reading experience, not a folder.
     Roadmap formats (Field Note, Toolkit, Career Brief) join only when real
     content of that kind exists; we never ship an empty format. */
  var FORMATS = {
    guide: L('Playbook', 'Playbook'),
    explainer: L('Explainer', 'Penjelas'),
    data: L('Signal', 'Sinyal'),
    perspective: L('Perspective', 'Perspektif'),
    radar: L('Opportunity', 'Peluang')
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
      sub: L('Industries, companies and the labour market, read honestly.', 'Industri, perusahaan, dan pasar kerja, dibaca dengan jujur.') }
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
      reads: ['optionality-choosing-a-first-job', 'lateral-moves-explained', 'career-pivot-readiness', 'a-personal-board-of-advisors', 'the-two-week-energy-audit'] }
  ];

  return { TOPICS: TOPICS, FORMATS: FORMATS, STAGES: STAGES, NEEDS: NEEDS, ARTICLES: ARTICLES, RADAR: RADAR, PATHS: PATHS };
})();
