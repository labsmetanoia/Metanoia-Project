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
      desc: L('Applications, assessments and interviews — how the gate actually works.', 'Lamaran, asesmen, dan wawancara — cara gerbang itu benar-benar bekerja.') },
    { id: 'market', name: L('Industry & Market', 'Industri & Pasar'), accent: '#D9A05B',
      desc: L('Industries, companies and the labour market, read honestly.', 'Industri, perusahaan, dan pasar kerja, dibaca dengan jujur.') },
    { id: 'worklife', name: L('Professional Life', 'Kehidupan Profesional'), accent: '#B08CC9',
      desc: L('The workplace itself: habits, relationships, and staying whole.', 'Dunia kerja itu sendiri: kebiasaan, relasi, dan tetap utuh.') },
    { id: 'opportunities', name: L('Opportunities', 'Peluang'), accent: '#5FA8A0',
      desc: L('Internships, scholarships and programmes — dated, linked, verified.', 'Magang, beasiswa, dan program — bertanggal, tertaut, terverifikasi.') }
  ];

  var FORMATS = {
    guide: L('Guide', 'Panduan'),
    explainer: L('Explainer', 'Penjelas'),
    data: L('Data', 'Data'),
    perspective: L('Perspective', 'Perspektif'),
    radar: L('Radar', 'Radar')
  };

  var STAGES = {
    'student': L('Student', 'Mahasiswa'),
    'fresh-graduate': L('Fresh graduate', 'Fresh graduate'),
    'early-professional': L('Early professional', 'Profesional awal'),
    'mature-professional': L('Experienced professional', 'Profesional berpengalaman')
  };

  var AUTHOR = L('Metanoia Editorial', 'Metanoia Editorial');

  var ARTICLES = [

  /* ═══════════ RECRUITMENT ═══════════ */
  {
    slug: 'first-90-days-of-a-job-search', topic: 'recruitment', format: 'guide',
    stages: ['fresh-graduate', 'student'], featured: true,
    date: '2026-08-14', reviewed: '2026-08-14', minutes: 7, author: AUTHOR,
    title: L('The first 90 days of a job search, planned like a project',
             '90 hari pertama mencari kerja, direncanakan seperti proyek'),
    dek: L('Most searches fail from sequence, not effort: applications sent before the materials are ready, interviews taken before the practice. Here is the order that works.',
           'Kebanyakan pencarian kerja gagal karena urutan, bukan karena usaha: lamaran dikirim sebelum materinya siap, wawancara dijalani sebelum latihan. Ini urutan yang bekerja.'),
    what: [
      L('A job search has phases the way a construction project does, and doing them out of order is expensive. The most common pattern we see is the reverse spiral: send fifty applications in week one, get silence, lose confidence, then start fixing the CV that caused the silence — after burning the fifty most obvious targets.',
        'Pencarian kerja punya fase seperti proyek konstruksi, dan mengerjakannya di luar urutan itu mahal. Pola paling umum yang kami lihat adalah spiral terbalik: kirim lima puluh lamaran di minggu pertama, dapat keheningan, kehilangan percaya diri, lalu mulai memperbaiki CV yang menyebabkan keheningan itu — setelah menghanguskan lima puluh target paling jelas.'),
      L('The fix is not working harder. It is refusing to spend your best targets while your materials are still your worst.',
        'Solusinya bukan bekerja lebih keras, melainkan menolak menghabiskan target terbaikmu selagi materimu masih dalam kondisi terburuk.')
    ],
    why: L('Every company you apply to with weak materials is a company you usually cannot apply to again this cycle. The applicant pool is scored once; first impressions are literal.',
           'Setiap perusahaan yang kamu lamar dengan materi lemah biasanya tidak bisa dilamar lagi pada siklus yang sama. Kandidat dinilai sekali; kesan pertama berlaku harfiah.'),
    act: [
      L('Days 1–14 — aim before you fire. Decide the two or three directions you are actually pursuing (not "anything"). Write the target list: 30 companies, ranked, with the 10 best explicitly reserved for later.',
        'Hari 1–14 — bidik sebelum menembak. Tentukan dua-tiga arah yang benar-benar kamu kejar (bukan "apa saja"). Susun daftar target: 30 perusahaan, berperingkat, dengan 10 terbaik sengaja disimpan untuk nanti.'),
      L('Days 15–30 — build the machine. One master CV, tailored per direction, passed through an honest ATS check. One reusable interview story bank (six stories, STAR-structured). Practise the assessment types your directions actually use.',
        'Hari 15–30 — bangun mesinnya. Satu CV induk, disesuaikan per arah, lolos pemeriksaan ATS yang jujur. Satu bank cerita wawancara (enam cerita, berstruktur STAR). Latih jenis asesmen yang benar-benar dipakai arah pilihanmu.'),
      L('Days 31–60 — apply in ranked waves. Weeks of five to eight quality applications from the middle of your list, reviewing response rates weekly. Silence after 15+ applications is a materials problem — stop and fix, do not push through.',
        'Hari 31–60 — melamar dalam gelombang berperingkat. Lima sampai delapan lamaran berkualitas per minggu dari bagian tengah daftarmu, dengan tinjauan tingkat respons mingguan. Keheningan setelah 15+ lamaran adalah masalah materi — berhenti dan perbaiki, jangan diterobos.'),
      L('Days 61–90 — spend the reserve. Your ten best targets now get your best materials, warm contact where possible, and interview practice that is already weeks deep.',
        'Hari 61–90 — gunakan cadanganmu. Sepuluh target terbaik kini mendapat materi terbaikmu, kontak hangat bila memungkinkan, dan latihan wawancara yang sudah berminggu-minggu dalamnya.'),
      L('Throughout — keep a decision log, not just a tracker: what you sent, what changed, what you learned. Searches compound only when they are inspected.',
        'Sepanjang proses — simpan log keputusan, bukan sekadar pelacak: apa yang dikirim, apa yang diubah, apa yang dipelajari. Pencarian kerja hanya terakumulasi bila diperiksa.')
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
    slug: 'ats-myths-decoded', topic: 'recruitment', format: 'explainer',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-08-10', reviewed: '2026-08-10', minutes: 5, author: AUTHOR,
    title: L('What an ATS actually does with your CV', 'Apa yang sebenarnya dilakukan ATS terhadap CV-mu'),
    dek: L('Half the advice about applicant tracking systems describes software that does not exist. What the screening layer really is — and the three failures that are actually yours to fix.',
           'Separuh nasihat tentang applicant tracking system menggambarkan perangkat lunak yang tidak ada. Apa sebenarnya lapisan penyaringan itu — dan tiga kegagalan yang benar-benar bisa kamu perbaiki.'),
    what: [
      L('An ATS is, first, a filing cabinet: it stores applications, parses them into fields, and lets recruiters search. The mythical robot that "rejects 75% of CVs before a human sees them" is mostly a misreading of two real things: parsing failures (your CV became unreadable data) and knockout questions (you answered no to a requirement).',
        'ATS pertama-tama adalah lemari arsip: menyimpan lamaran, mengurainya menjadi kolom data, dan memungkinkan perekrut mencari. Robot mitos yang "menolak 75% CV sebelum dilihat manusia" sebagian besar adalah salah baca atas dua hal nyata: kegagalan parsing (CV-mu menjadi data yang tak terbaca) dan pertanyaan gugur (kamu menjawab tidak pada sebuah persyaratan).'),
      L('That distinction changes what you optimise. You are not fighting an AI judge; you are formatting for a parser and answering honestly for a filter.',
        'Perbedaan itu mengubah apa yang kamu optimalkan. Kamu tidak sedang melawan hakim AI; kamu sedang memformat untuk parser dan menjawab jujur untuk filter.')
    ],
    why: L('Time spent gaming an imaginary algorithm is time not spent on the two failures that are real, common, and completely fixable before your next application.',
           'Waktu yang dihabiskan mengakali algoritme khayalan adalah waktu yang tidak dipakai memperbaiki dua kegagalan yang nyata, umum, dan sepenuhnya bisa dibereskan sebelum lamaran berikutnya.'),
    act: [
      L('Fix parseability: single column, standard section names, no text in images or headers, exported as a text-based PDF. If you can select the text in your PDF, a parser usually can too.',
        'Perbaiki keterbacaan mesin: satu kolom, nama bagian standar, tanpa teks dalam gambar atau header, diekspor sebagai PDF berbasis teks. Jika teks PDF-mu bisa diblok, parser biasanya juga bisa membacanya.'),
      L('Mirror the language of the vacancy for real skills you actually have — parsers and recruiters both search by the vacancy’s own words, not their synonyms.',
        'Cerminkan bahasa lowongan untuk keahlian yang benar-benar kamu miliki — parser dan perekrut sama-sama mencari dengan kata milik lowongan itu, bukan sinonimnya.'),
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
    slug: 'case-interview-anatomy', topic: 'recruitment', format: 'guide',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-07-28', reviewed: '2026-08-12', minutes: 6, author: AUTHOR,
    title: L('The case interview, dissected', 'Wawancara kasus, dibedah'),
    dek: L('Consulting-style cases feel like intelligence tests. They are actually structure tests — and structure is learnable in weeks, not years.',
           'Wawancara kasus ala konsultan terasa seperti tes kecerdasan. Sebenarnya ini tes struktur — dan struktur bisa dipelajari dalam hitungan minggu, bukan tahun.'),
    what: [
      L('A case interview hands you a vague business problem and watches how you make it tractable. The interviewer is not grading your answer; they are grading the shape of your thinking: did you clarify, structure, quantify, and conclude — out loud, in order, under mild pressure.',
        'Wawancara kasus memberimu masalah bisnis yang kabur dan mengamati caramu membuatnya bisa dikerjakan. Pewawancara tidak menilai jawabanmu; mereka menilai bentuk berpikirmu: apakah kamu mengklarifikasi, menstruktur, menghitung, dan menyimpulkan — bersuara, berurutan, di bawah tekanan ringan.'),
      L('This is why memorised frameworks fail: reciting a framework is the opposite of the skill being tested, which is building a small one that fits this problem.',
        'Karena itu kerangka hafalan gagal: membacakan kerangka justru kebalikan dari keahlian yang diuji, yaitu membangun kerangka kecil yang pas untuk masalah ini.')
    ],
    why: L('Case-style rounds have spread far beyond consulting — group cases and business problems appear across the management-trainee and analyst processes documented in our database.',
           'Ronde bergaya kasus sudah menyebar jauh melampaui konsultan — kasus kelompok dan masalah bisnis muncul di berbagai proses management trainee dan analis yang terdokumentasi di basis data kami.'),
    act: [
      L('Learn one spine, not ten frameworks: clarify the question → state a structure with 2–4 branches → pick a branch with a reason → do the arithmetic out loud → answer the question that was asked.',
        'Pelajari satu tulang punggung, bukan sepuluh kerangka: klarifikasi pertanyaan → nyatakan struktur dengan 2–4 cabang → pilih satu cabang dengan alasan → kerjakan hitungannya bersuara → jawab pertanyaan yang memang ditanyakan.'),
      L('Drill mental arithmetic ten minutes a day — percentages, market sizing, break-evens. Fluency here buys calm everywhere else.',
        'Latih aritmetika cepat sepuluh menit sehari — persentase, ukuran pasar, titik impas. Kefasihan di sini membeli ketenangan di semua bagian lain.'),
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
      { pillar: 'the-map', why: L('See which of your target companies actually use case rounds — in The Range (Explore).', 'Lihat perusahaan target mana yang benar-benar memakai ronde kasus — di The Range (Explore).') }
    ]
  },

  /* ═══════════ SKILLS ═══════════ */
  {
    slug: 'ai-at-work-what-to-actually-learn', topic: 'skills', format: 'guide',
    stages: ['student', 'fresh-graduate', 'early-professional', 'mature-professional'], trending: true,
    date: '2026-08-16', reviewed: '2026-08-16', minutes: 6, author: AUTHOR,
    title: L('AI at work: what to actually learn (and what to skip)',
             'AI di dunia kerja: apa yang benar-benar perlu dipelajari (dan yang bisa dilewati)'),
    dek: L('"Learn AI" is advice shaped like a shrug. The learnable, provable, durable version fits in three layers — and none of them require a computer-science degree.',
           '"Belajar AI" adalah nasihat berbentuk angkat bahu. Versi yang bisa dipelajari, dibuktikan, dan tahan lama muat dalam tiga lapisan — dan tak satu pun butuh gelar ilmu komputer.'),
    what: [
      L('Strip the hype and three durable layers remain. Layer one: working fluency — using AI tools on your actual tasks with judgement about when they are wrong. Layer two: workflow design — restructuring a process so the tool does the repetitive part and you do the accountable part. Layer three: domain grounding — knowing your field well enough to catch confident nonsense.',
        'Singkirkan hype dan tersisa tiga lapisan yang tahan lama. Lapisan satu: kefasihan kerja — memakai alat AI pada tugas nyatamu dengan penilaian kapan alat itu keliru. Lapisan dua: perancangan alur kerja — menyusun ulang proses supaya alat mengerjakan bagian repetitif dan kamu memegang bagian yang dipertanggungjawabkan. Lapisan tiga: pijakan domain — menguasai bidangmu cukup dalam untuk menangkap omong kosong yang percaya diri.'),
      L('Notice what is not on the list for most roles: training models, advanced mathematics, or chasing every new tool. Those matter for AI-specialist tracks, which are real but separate.',
        'Perhatikan yang tidak ada di daftar untuk kebanyakan peran: melatih model, matematika lanjut, atau mengejar setiap alat baru. Itu penting untuk jalur spesialis AI — nyata, tapi terpisah.')
    ],
    why: L('The differentiator employers describe is not tool knowledge — tools change quarterly — but the judgement to use them on real work without outsourcing responsibility for the result.',
           'Pembeda yang digambarkan pemberi kerja bukan pengetahuan alat — alat berganti tiap kuartal — melainkan penilaian untuk memakainya pada pekerjaan nyata tanpa menyerahkan tanggung jawab atas hasilnya.'),
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
      { pillar: 'the-map', why: L('See which functions in 675 companies lean on data and technology skills — in The Range (Explore).', 'Lihat fungsi mana di 675 perusahaan yang bertumpu pada keahlian data dan teknologi — di The Range (Explore).') }
    ]
  },

  {
    slug: 'portfolio-over-gpa', topic: 'skills', format: 'perspective',
    stages: ['student', 'fresh-graduate'],
    date: '2026-08-05', reviewed: '2026-08-05', minutes: 5, author: AUTHOR,
    title: L('Two pieces of demonstrated work beat 0.2 of GPA', 'Dua karya nyata mengalahkan 0,2 poin IPK'),
    dek: L('A perspective on where marginal effort actually pays: the portfolio line most students never build, and how to build it without an employer’s permission.',
           'Sebuah perspektif tentang di mana usaha marginal benar-benar terbayar: baris portofolio yang tak pernah dibangun kebanyakan mahasiswa, dan cara membangunnya tanpa izin pemberi kerja.'),
    what: [
      L('GPA clears thresholds; it rarely wins offers. Once you pass a programme’s stated cut-off — where one exists, it is usually published — additional decimals compete weakly against a candidate who can show finished work: an analysis, a build, an event run, a system improved.',
        'IPK melewati ambang; ia jarang memenangkan tawaran. Setelah kamu melewati batas yang dinyatakan sebuah program — bila ada, biasanya dipublikasikan — tambahan desimal bersaing lemah melawan kandidat yang bisa menunjukkan karya selesai: sebuah analisis, sebuah produk, sebuah acara yang dijalankan, sebuah sistem yang diperbaiki.'),
      L('This is our reading of how assessors behave, and it has a mechanism: work samples reduce hiring risk in a way grades cannot, because they preview the actual job.',
        'Ini pembacaan kami atas perilaku penilai, dan ia punya mekanisme: contoh karya menurunkan risiko perekrutan dengan cara yang tak bisa dilakukan nilai, karena ia mempratinjau pekerjaan yang sebenarnya.')
    ],
    why: L('The hours a decimal of GPA costs are enormous at the margin. The same hours produce two portfolio pieces — and portfolio pieces compound into interview stories, while decimals do not.',
           'Jam yang dibutuhkan untuk satu desimal IPK sangat besar di titik marginal. Jam yang sama menghasilkan dua karya portofolio — dan karya portofolio berbunga menjadi cerita wawancara, sementara desimal tidak.'),
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
    slug: 'skills-employers-test-2026', topic: 'skills', format: 'explainer',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-07-20', reviewed: '2026-08-12', minutes: 5, author: AUTHOR,
    title: L('What entry-level hiring actually tests', 'Apa yang benar-benar diuji rekrutmen level awal'),
    dek: L('Read enough hiring processes side by side and a short list of tested capabilities emerges — shorter, and stranger, than the skills lists in most vacancies.',
           'Baca cukup banyak proses rekrutmen secara berdampingan dan muncullah daftar pendek kapabilitas yang diuji — lebih pendek, dan lebih aneh, daripada daftar keahlian di kebanyakan lowongan.'),
    what: [
      L('Vacancy texts list aspirations; assessment stages reveal priorities. Across the processes in our database, entry-level stages cluster around a handful of tested things: structured communication (can you say something in order), numeracy under mild pressure, behavioural evidence (did you actually do what you claim), collaboration in group settings, and learning agility signals in rotational programmes.',
        'Teks lowongan memuat aspirasi; tahap asesmen mengungkap prioritas. Di seluruh proses dalam basis data kami, tahap level awal mengelompok pada segelintir hal yang diuji: komunikasi terstruktur (bisakah kamu berbicara berurutan), kecakapan angka di bawah tekanan ringan, bukti perilaku (benarkah kamu melakukan yang kamu klaim), kolaborasi dalam kelompok, dan sinyal kelincahan belajar pada program rotasi.'),
      L('Domain skills appear too — but typically as a screen, not the differentiator. The differentiators are the transferable five above, which is why they are worth deliberate practice.',
        'Keahlian domain juga muncul — tetapi biasanya sebagai penyaring, bukan pembeda. Pembedanya adalah lima kemampuan lintas bidang di atas, dan karena itu layak dilatih secara sengaja.')
    ],
    why: L('Preparation time is finite. Aiming it at what stages test — rather than at everything a vacancy lists — is the highest-leverage reallocation most candidates can make.',
           'Waktu persiapan itu terbatas. Mengarahkannya pada yang diuji tiap tahap — bukan pada semua yang tercantum di lowongan — adalah realokasi paling berdaya ungkit yang bisa dilakukan kebanyakan kandidat.'),
    act: [
      L('Map your target companies’ stages first (documented where available, clearly-labelled typical otherwise), then prepare stage by stage instead of vacancy by vacancy.',
        'Petakan dulu tahapan perusahaan targetmu (terdokumentasi bila tersedia, berlabel "umum" bila tidak), lalu bersiap per tahap alih-alih per lowongan.'),
      L('Build six behavioural stories with verifiable specifics. The behavioural interview is the most common stage in our database — and the cheapest to prepare well.',
        'Bangun enam cerita perilaku dengan detail yang bisa diverifikasi. Wawancara perilaku adalah tahap paling umum di basis data kami — dan yang paling murah untuk disiapkan dengan baik.'),
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
    slug: 'choosing-a-first-industry', topic: 'career', format: 'guide',
    stages: ['student', 'fresh-graduate'], featured: 'secondary',
    date: '2026-08-08', reviewed: '2026-08-08', minutes: 6, author: AUTHOR,
    title: L('Choosing a first industry when everything looks the same',
             'Memilih industri pertama saat semuanya tampak sama'),
    dek: L('From outside, industries blur into logos and salaries. Three questions separate them fast — and none of them is "what is prestigious".',
           'Dari luar, industri melebur menjadi logo dan gaji. Tiga pertanyaan memisahkan mereka dengan cepat — dan tak satu pun berbunyi "mana yang bergengsi".'),
    what: [
      L('First-industry choice matters less as destiny and more as curriculum: your first industry decides what you get good at by default. Banking teaches regulated precision; FMCG teaches brand and distribution mechanics; tech teaches shipping under iteration; consulting teaches structured problem intake.',
        'Pilihan industri pertama tidak terlalu penting sebagai takdir, tapi sangat penting sebagai kurikulum: industri pertamamu menentukan kamu otomatis mahir di hal apa. Perbankan mengajarkan presisi teregulasi; FMCG mengajarkan mekanika merek dan distribusi; teknologi mengajarkan merilis dalam iterasi; konsultan mengajarkan penstrukturan masalah.'),
      L('Because it is curriculum, the question flips: not "which industry is best" but "which default skills do I want compounding first, in what pace of environment, with what trade-offs I can live with".',
        'Karena ia kurikulum, pertanyaannya berbalik: bukan "industri mana yang terbaik" melainkan "keahlian bawaan mana yang ingin kutumbuhkan lebih dulu, dalam ritme lingkungan seperti apa, dengan kompromi apa yang sanggup kujalani".')
    ],
    why: L('People rarely regret an industry; they regret discovering its trade-offs after joining. Every industry’s trade-offs are knowable in advance — they are just rarely asked about.',
           'Orang jarang menyesali industri; mereka menyesal menemukan kompromi industri itu setelah bergabung. Kompromi setiap industri bisa diketahui di muka — hanya saja jarang ditanyakan.'),
    act: [
      L('Ask the curriculum question: list the three skills each candidate industry would build in you by default in two years. Choose the list you want to own.',
        'Ajukan pertanyaan kurikulum: tulis tiga keahlian yang otomatis dibangun tiap industri kandidat dalam dua tahun. Pilih daftar yang ingin kamu miliki.'),
      L('Ask the trade-off question early — hours, mobility, intensity, pace. Investigate them per direction rather than discovering them per employer.',
        'Ajukan pertanyaan kompromi sejak awal — jam kerja, mobilitas, intensitas, ritme. Selidiki per arah, jangan menemukannya per pemberi kerja.'),
      L('Ask the exit question: where do people in this industry go after three years? An industry is also a network and a resale value.',
        'Ajukan pertanyaan keluar: ke mana orang-orang industri ini pergi setelah tiga tahun? Industri juga berarti jejaring dan nilai jual berikutnya.'),
      L('Then investigate two, not ten: pick two candidate industries and go one level deeper — real companies, real hiring processes, real day-in-the-life — before deciding.',
        'Lalu selidiki dua, bukan sepuluh: pilih dua industri kandidat dan turun satu tingkat lebih dalam — perusahaan nyata, proses rekrutmen nyata, gambaran hari kerja nyata — sebelum memutuskan.')
    ],
    sources: [
      { note: L('Industry skill-curricula and trade-offs summarised from the direction profiles in Metanoia’s career graph, which state trade-offs explicitly.',
                'Kurikulum keahlian dan kompromi industri dirangkum dari profil arah dalam grafik karier Metanoia, yang menyatakan kompromi secara eksplisit.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('The Range (Explore) holds the day-in-the-life, trade-offs and hiring reality for 25 directions and 675 companies.', 'The Range (Explore) memuat gambaran hari kerja, kompromi, dan realitas rekrutmen untuk 25 arah dan 675 perusahaan.') }
    ]
  },
  {
    slug: 'career-pivot-readiness', topic: 'career', format: 'explainer',
    stages: ['early-professional', 'mature-professional'],
    date: '2026-07-15', reviewed: '2026-08-10', minutes: 6, author: AUTHOR,
    title: L('Ready to pivot, or just tired? A diagnostic', 'Siap pindah jalur, atau hanya lelah? Sebuah diagnosis'),
    dek: L('Half of career-change urges are actually job-change urges, and a quarter are rest deficits. A framework for telling them apart before you pay switching costs.',
           'Separuh dorongan ganti karier sebenarnya dorongan ganti pekerjaan, dan seperempatnya defisit istirahat. Kerangka untuk membedakannya sebelum kamu membayar biaya perpindahan.'),
    what: [
      L('A pivot is expensive: you trade accumulated seniority, network, and pattern-recognition for a beginner’s position in all three. Sometimes that trade is right. But the feeling that triggers pivot research — dread on Sunday night, meetings that feel pointless — is produced equally by three cheaper problems: the wrong manager, the wrong company, or plain depletion.',
        'Pindah jalur itu mahal: kamu menukar senioritas, jejaring, dan intuisi pola yang terakumulasi dengan posisi pemula di ketiganya. Kadang penukaran itu tepat. Tapi perasaan yang memicu riset pindah jalur — rasa berat di Minggu malam, rapat yang terasa hampa — sama-sama bisa dihasilkan tiga masalah yang lebih murah: manajer yang salah, perusahaan yang salah, atau sekadar kehabisan tenaga.'),
      L('The diagnostic: would the dread survive a great manager, a healthier company, and a real holiday? Only a yes to all three points at the work itself — and only then is a pivot the right instrument.',
        'Diagnosisnya: apakah rasa berat itu tetap ada dengan manajer hebat, perusahaan lebih sehat, dan liburan sungguhan? Hanya jika ketiganya ya, masalahnya ada pada pekerjaan itu sendiri — dan barulah pindah jalur menjadi instrumen yang tepat.')
    ],
    why: L('Mis-diagnosed pivots repeat: the same dread reappears in the new field once its novelty fades, now with the switching costs already paid.',
           'Pindah jalur yang salah diagnosis akan berulang: rasa berat yang sama muncul lagi di bidang baru begitu kebaruannya pudar, dengan biaya perpindahan yang telanjur dibayar.'),
    act: [
      L('Run the three-substitution test honestly, in writing. Manager, company, rest — cheapest first.',
        'Jalankan uji tiga substitusi dengan jujur, secara tertulis. Manajer, perusahaan, istirahat — yang termurah lebih dulu.'),
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
    slug: 'management-trainee-programmes-explained', topic: 'market', format: 'explainer',
    stages: ['student', 'fresh-graduate'],
    date: '2026-08-02', reviewed: '2026-08-15', minutes: 6, author: AUTHOR,
    title: L('Management-trainee programmes, explained without the brochure',
             'Program management trainee, dijelaskan tanpa brosur'),
    dek: L('MT programmes are Indonesia’s structured fast lane into management — and a two-year commitment with fine print. What the rotation model really buys, and costs.',
           'Program MT adalah jalur cepat terstruktur menuju manajemen di Indonesia — sekaligus komitmen dua tahun dengan syarat kecil-kecil. Apa yang benar-benar dibeli model rotasi, dan harganya.'),
    what: [
      L('The model: two years, several rotations across functions, a project per rotation presented upward, then placement. Companies run it to grow generalist managers with cross-functional networks; that is also exactly what it trains you to be.',
        'Modelnya: dua tahun, beberapa rotasi lintas fungsi, satu proyek per rotasi yang dipresentasikan ke atasan, lalu penempatan. Perusahaan menjalankannya untuk menumbuhkan manajer generalis dengan jejaring lintas fungsi; persis itu pula yang dilatihkannya padamu.'),
      L('The fine print worth reading twice: placement after rotation is usually the company’s call, not yours; rotations can land in cities and functions you did not choose; and state-owned joint recruitment carries published, sourced eligibility rules — including age caps and GPA minimums — that are checkable before you apply.',
        'Syarat kecil yang layak dibaca dua kali: penempatan setelah rotasi biasanya keputusan perusahaan, bukan kamu; rotasi bisa jatuh di kota dan fungsi yang tidak kamu pilih; dan rekrutmen bersama BUMN memuat aturan kelayakan terpublikasi dan bersumber — termasuk batas usia dan IPK minimum — yang bisa dicek sebelum melamar.')
    ],
    why: L('MT tracks appear across banking, FMCG, telecommunications and state-owned enterprises in our database — for many fresh graduates they are the single most common structured entry point, which makes their trade-offs everyone’s business.',
           'Jalur MT muncul di perbankan, FMCG, telekomunikasi, dan BUMN dalam basis data kami — bagi banyak fresh graduate ini titik masuk terstruktur paling umum, sehingga kompromi-kompromnya penting bagi semua orang.'),
    act: [
      L('Choose MT for breadth-before-depth on purpose, not because the brochure was shiny. If you already know your function, a direct functional entry often compounds faster.',
        'Pilih MT untuk keluasan-sebelum-kedalaman secara sengaja, bukan karena brosurnya mengilap. Jika kamu sudah tahu fungsimu, masuk langsung ke fungsi sering bertumbuh lebih cepat.'),
      L('Check the sourced eligibility rules before investing weeks: age caps and GPA thresholds for state-owned joint recruitment are published and non-negotiable.',
        'Periksa aturan kelayakan bersumber sebelum menginvestasikan waktu berminggu-minggu: batas usia dan ambang IPK rekrutmen bersama BUMN dipublikasikan dan tidak bisa dinegosiasikan.'),
      L('Interrogate placement: in the interview, ask how placement is decided and what last year’s cohort looks like now. A programme that answers precisely is telling you something; so is one that does not.',
        'Selidiki penempatan: di wawancara, tanyakan bagaimana penempatan diputuskan dan seperti apa angkatan tahun lalu sekarang. Program yang menjawab presisi sedang memberitahumu sesuatu; yang tidak menjawab juga.')
    ],
    sources: [
      { label: 'FHCI — Rekrutmen Bersama BUMN (official)', url: 'https://rekrutmenbersama.fhcibumn.id' },
      { note: L('Eligibility figures cited are the sourced rules in Metanoia’s database; programme-specific details always defer to the official page.',
                'Angka kelayakan yang dikutip adalah aturan bersumber di basis data Metanoia; detail spesifik program selalu mengacu ke laman resmi.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('The Range (Explore) lists MT tracks per company with documented or clearly-labelled typical stages.', 'The Range (Explore) memuat jalur MT per perusahaan dengan tahapan terdokumentasi atau berlabel umum.') },
      { pillar: 'the-rope', why: L('Group cases and panel interviews — the MT staples — are The Rope’s home ground.', 'Kasus kelompok dan wawancara panel — menu utama MT — adalah wilayah The Rope.') }
    ]
  },
  {
    slug: 'reading-a-company-before-you-apply', topic: 'market', format: 'guide',
    stages: ['student', 'fresh-graduate', 'early-professional', 'mature-professional'],
    date: '2026-07-24', reviewed: '2026-08-12', minutes: 5, author: AUTHOR,
    title: L('How to read a company in one evening', 'Cara membaca sebuah perusahaan dalam satu malam'),
    dek: L('Company research is not collecting facts; it is answering four questions. A repeatable evening routine that beats a week of unfocused tabs.',
           'Riset perusahaan bukan mengumpulkan fakta, melainkan menjawab empat pertanyaan. Rutinitas satu malam yang mengalahkan seminggu tab yang tak terarah.'),
    what: [
      L('Candidates over-research breadth and under-research the four things that change decisions: How does this company make money? What is it betting on next? What would I actually do all day? And how does it treat the people who do that?',
        'Kandidat kebanyakan meriset lebar dan kekurangan meriset empat hal yang mengubah keputusan: Bagaimana perusahaan ini menghasilkan uang? Apa taruhannya berikutnya? Apa yang benar-benar akan kukerjakan seharian? Dan bagaimana ia memperlakukan orang-orang yang mengerjakannya?'),
      L('Each question has a best source: annual reports and investor pages for the money; official announcements for the bets; job descriptions read closely (the verbs, not the adjectives) for the work; and the texture of employee accounts — read critically, plural, never one review — for the treatment.',
        'Tiap pertanyaan punya sumber terbaik: laporan tahunan dan laman investor untuk uangnya; pengumuman resmi untuk taruhannya; deskripsi pekerjaan yang dibaca cermat (kata kerjanya, bukan kata sifatnya) untuk pekerjaannya; dan tekstur cerita karyawan — dibaca kritis, jamak, jangan satu ulasan — untuk perlakuannya.')
    ],
    why: L('Interviewers can tell within minutes whether your research answered questions or collected trivia — and your own decision quality depends on the same four answers.',
           'Pewawancara bisa tahu dalam hitungan menit apakah risetmu menjawab pertanyaan atau mengoleksi trivia — dan kualitas keputusanmu sendiri bergantung pada empat jawaban yang sama.'),
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
    slug: 'first-year-professional-etiquette', topic: 'worklife', format: 'guide',
    stages: ['fresh-graduate', 'early-professional'],
    date: '2026-08-06', reviewed: '2026-08-06', minutes: 5, author: AUTHOR,
    title: L('The unwritten rules of a first year, written down', 'Aturan tak tertulis tahun pertama, dituliskan'),
    dek: L('Nobody fails a first year on competence alone. The habits that quietly build or burn trust — made explicit so they stop being a lottery.',
           'Tak ada yang gagal di tahun pertama karena kompetensi semata. Kebiasaan yang diam-diam membangun atau membakar kepercayaan — dibuat eksplisit agar berhenti menjadi lotre.'),
    what: [
      L('First-year reputations are built from small repeated signals: whether your messages can be answered in one read, whether deadlines slip silently or with warning, whether feedback produces visible change, whether you bring problems with a proposed option attached.',
        'Reputasi tahun pertama dibangun dari sinyal kecil yang berulang: apakah pesanmu bisa dijawab sekali baca, apakah tenggat meleset diam-diam atau dengan peringatan, apakah umpan balik menghasilkan perubahan terlihat, apakah kamu membawa masalah beserta usulan pilihan.'),
      L('None of this is personality. It is a small set of habits, all learnable, most invisible in job descriptions and decisive in performance conversations.',
        'Tak satu pun dari ini soal kepribadian. Ini sekumpulan kecil kebiasaan, semuanya bisa dipelajari, kebanyakan tak terlihat di deskripsi pekerjaan dan menentukan dalam percakapan kinerja.')
    ],
    why: L('Trust is the currency that buys interesting work. Interesting work is what builds the skills that build a career. The chain starts with etiquette, which is why it is not trivial.',
           'Kepercayaan adalah mata uang yang membeli pekerjaan menarik. Pekerjaan menarik membangun keahlian yang membangun karier. Rantainya dimulai dari etiket — karena itu ia tidak sepele.'),
    act: [
      L('Close loops loudly: every task ends with a message saying it ended, what changed, and where the result lives.',
        'Tutup setiap siklus dengan jelas: tiap tugas diakhiri pesan yang menyatakan tugas selesai, apa yang berubah, dan di mana hasilnya berada.'),
      L('Escalate early with options: "X will be late because Y; I can do A or B — which do you prefer?" beats every silent miracle attempt.',
        'Eskalasikan lebih awal dengan opsi: "X akan terlambat karena Y; aku bisa lakukan A atau B — mana yang kamu pilih?" mengalahkan semua usaha keajaiban diam-diam.'),
      L('Convert feedback within the week, visibly, and say so once: "You mentioned my summaries ramble — here is the one-paragraph version." Once is confident; every time is performative.',
        'Terapkan umpan balik dalam minggu itu juga, secara terlihat, dan sebut sekali: "Kemarin katanya ringkasanku bertele-tele — ini versi satu paragrafnya." Sekali itu percaya diri; tiap kali itu pencitraan.'),
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
    slug: 'networking-without-cringe', topic: 'worklife', format: 'guide',
    stages: ['student', 'fresh-graduate', 'early-professional'],
    date: '2026-07-18', reviewed: '2026-08-08', minutes: 5, author: AUTHOR,
    title: L('Networking for people who hate networking', 'Membangun jejaring bagi yang benci networking'),
    dek: L('The transactional version deserves the cringe. The working version is specific curiosity plus light bookkeeping — and introverts are often better at it.',
           'Versi transaksionalnya memang pantas bikin jengah. Versi yang bekerja adalah rasa ingin tahu yang spesifik plus pembukuan ringan — dan introver sering lebih mahir.'),
    what: [
      L('Strip networking of its costume and it is three moves: ask a specific person a specific question they are well placed to answer; make the interaction cost them almost nothing; and keep enough notes to honour the thread later. That is the whole machine.',
        'Lepaskan kostum networking dan tersisa tiga gerakan: ajukan pertanyaan spesifik kepada orang spesifik yang memang tepat menjawabnya; buat interaksi itu nyaris tanpa biaya bagi mereka; dan simpan catatan secukupnya untuk menghormati benang itu di kemudian hari. Itu seluruh mesinnya.'),
      L('"Can I pick your brain" fails all three: unspecific, unbounded, and forgettable. "You moved from audit to data in 2024 — what did you have to unlearn?" succeeds at all three in one sentence.',
        '"Boleh minta waktunya sharing-sharing?" gagal di ketiganya: tak spesifik, tak berbatas, dan terlupakan. "Kak, dulu pindah dari audit ke data di 2024 — apa yang harus di-unlearn?" berhasil di ketiganya dalam satu kalimat.')
    ],
    why: L('Most opportunity moves through people before it reaches any portal — not as corruption but as trust reducing hiring risk. Being findable and specific is how you enter that flow honestly.',
           'Sebagian besar peluang mengalir lewat orang sebelum tiba di portal mana pun — bukan sebagai kecurangan, melainkan karena kepercayaan menurunkan risiko perekrutan. Menjadi mudah ditemukan dan spesifik adalah cara masuk ke aliran itu secara jujur.'),
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
    slug: 'what-675-companies-tell-us', topic: 'market', format: 'data',
    stages: ['student', 'fresh-graduate', 'early-professional', 'mature-professional'], featured: 'secondary', trending: true,
    date: '2026-08-17', reviewed: '2026-08-17', minutes: 4, author: AUTHOR,
    title: L('What 675 companies tell us about where the doors are', 'Yang diceritakan 675 perusahaan tentang letak pintu-pintu masuk'),
    dek: L('We read the entry routes of every company in the Metanoia opportunity database. The shape of the result says more than any single vacancy board.',
           'Kami membaca jalur masuk setiap perusahaan di basis data peluang Metanoia. Bentuk hasilnya bercerita lebih banyak daripada papan lowongan mana pun.'),
    what: [
      L('This piece is computed live from Metanoia’s own opportunity database — the same data behind The Range (Explore) — so every number below is checkable inside the product. It is a map of our database, and only of our database: a curated view of commonly-targeted employers, not a census of the labour market.',
        'Artikel ini dihitung langsung dari basis data peluang milik Metanoia — data yang sama di balik The Range (Explore) — sehingga setiap angka di bawah bisa diperiksa di dalam produk. Ini peta basis data kami, dan hanya basis data kami: kurasi pemberi kerja yang umum dibidik, bukan sensus pasar kerja.'),
      L('Three shapes stand out. Function doors are unevenly distributed: finance, operations and data roles appear across nearly every industry, while design and product concentrate in technology. Trainee tracks cluster in Indonesian banking, FMCG and state-owned enterprises. And documented hiring processes remain rare — most companies publish nothing, which is why provenance labels matter.',
        'Tiga bentuk menonjol. Pintu fungsi tersebar tidak merata: peran keuangan, operasional, dan data muncul di hampir semua industri, sementara desain dan produk terkonsentrasi di teknologi. Jalur trainee mengelompok di perbankan Indonesia, FMCG, dan BUMN. Dan proses rekrutmen terdokumentasi tetap langka — kebanyakan perusahaan tidak memublikasikan apa pun, itulah mengapa label sumber penting.')
    ],
    why: L('If your target function only has doors in certain industries, that is worth knowing before you aim — and if a function opens doors everywhere, it is a more resilient first skill-set than its glamour suggests.',
           'Jika fungsi targetmu hanya punya pintu di industri tertentu, itu layak diketahui sebelum membidik — dan jika sebuah fungsi membuka pintu di mana-mana, ia bekal awal yang lebih tangguh daripada kesan gemerlapnya.'),
    act: [
      L('Read the chart below against your own target function: count its doors, note its industries.',
        'Baca grafik di bawah terhadap fungsi targetmu sendiri: hitung pintunya, catat industrinya.'),
      L('Treat function breadth as career insurance: if two directions attract you equally, the one with doors in more industries costs less to pivot from later.',
        'Perlakukan keluasan fungsi sebagai asuransi karier: jika dua arah sama menariknya, arah dengan pintu di lebih banyak industri lebih murah untuk ditinggalkan kelak.'),
      L('Open any bar in The Range (Explore) — the underlying companies, roles and hiring stages are all inspectable.',
        'Buka batang mana pun di The Range (Explore) — perusahaan, peran, dan tahapan rekrutmen di baliknya semua bisa diperiksa.')
    ],
    chart: 'db-live',
    sources: [
      { note: L('All figures computed at page load from data/range/companies-db.js and the base career graph — Metanoia’s own curated database, dated per entry. No external market statistics are claimed.',
                'Semua angka dihitung saat halaman dimuat dari data/range/companies-db.js dan grafik karier dasar — basis data kurasi milik Metanoia, bertanggal per entri. Tidak ada statistik pasar eksternal yang diklaim.') }
    ],
    tools: [
      { pillar: 'the-map', why: L('Every number here is a door you can open in The Range (Explore).', 'Setiap angka di sini adalah pintu yang bisa kamu buka di The Range (Explore).') }
    ]
  });

  /* ═══════════ OPPORTUNITY RADAR ═══════════
     Rules: only real, recurring, officially-published programmes; each entry
     carries the date we last checked and the official link; cycle windows are
     stated only where our database has a sourced date, otherwise the entry
     says to verify on the official page. Expired windows render as expired. */
  var RADAR = [
    { id: 'shopee-gdp', org: 'Shopee Indonesia',
      title: L('Global/Graduate Development Program', 'Global/Graduate Development Program'),
      type: L('Graduate programme', 'Program graduate'),
      window: L('2026 intake opened 13 February 2026 (sourced); next window unannounced', 'Angkatan 2026 dibuka 13 Februari 2026 (bersumber); jendela berikutnya belum diumumkan'),
      status: 'closed',
      checked: '2026-08-17', url: 'https://careers.shopee.co.id' },
    { id: 'fhci-bumn', org: 'FHCI · BUMN',
      title: L('Rekrutmen Bersama BUMN', 'Rekrutmen Bersama BUMN'),
      type: L('Joint recruitment (state-owned)', 'Rekrutmen bersama (BUMN)'),
      window: L('Recurring national cycle; published age and GPA rules apply — verify the current batch on the official portal', 'Siklus nasional berulang; aturan usia dan IPK terpublikasi berlaku — cek batch berjalan di portal resmi'),
      status: 'verify',
      checked: '2026-08-17', url: 'https://rekrutmenbersama.fhcibumn.id' },
    { id: 'ulip', org: 'Unilever Indonesia',
      title: L('Early careers: leadership programme & internships', 'Early careers: program kepemimpinan & magang'),
      type: L('Graduate programme · internship', 'Program graduate · magang'),
      window: L('Listed on the official careers site; cycles vary by track — verify there', 'Tercantum di situs karier resmi; siklus berbeda per jalur — cek di sana'),
      status: 'verify',
      checked: '2026-08-17', url: 'https://www.unilever.co.id/careers' },
    { id: 'lpdp', org: 'LPDP · Kementerian Keuangan',
      title: L('LPDP scholarship (graduate study)', 'Beasiswa LPDP (studi lanjut)'),
      type: L('Scholarship', 'Beasiswa'),
      window: L('Typically batched cycles each year; current batch, requirements and deadlines are published only on the official site', 'Biasanya beberapa batch per tahun; batch berjalan, syarat, dan tenggat hanya dipublikasikan di situs resmi'),
      status: 'verify',
      checked: '2026-08-17', url: 'https://lpdp.kemenkeu.go.id' },
    { id: 'bi-pcpm', org: 'Bank Indonesia',
      title: L('PCPM — central-bank leadership entry programme', 'PCPM — program masuk kepemimpinan bank sentral'),
      type: L('Graduate programme', 'Program graduate'),
      window: L('Recurring but not annual on a fixed date; announced only via official channels', 'Berulang tapi tidak tiap tahun pada tanggal tetap; diumumkan hanya lewat kanal resmi'),
      status: 'verify',
      checked: '2026-08-17', url: 'https://www.bi.go.id/id/karir' }
  ];

  return { TOPICS: TOPICS, FORMATS: FORMATS, STAGES: STAGES, ARTICLES: ARTICLES, RADAR: RADAR };
})();
