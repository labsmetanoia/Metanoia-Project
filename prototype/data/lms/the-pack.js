/**
 * The Pack — LMS CONTENT REGISTRY
 * ----------------------------------------------------------------
 * This file is the CONTENT LAYER. The player (js/lms-player.js) renders
 * whatever is declared here; updating or enriching a lesson only ever
 * means editing this file — no UI changes are required.
 * Authored bilingual content (EN/ID). Every lesson carries
 * placeholder:false; richer material can land here progressively.
 *  - kind: video | reading | interactive | slides | visual
 *  - rich blocks: scenario, diagram, compare, mistakes, listen,
 *    glossary, checks, tool — all optional, rendered when present.
 */
window.MT_LMS = window.MT_LMS || {};
window.MT_LMS['the-pack'] = {
 "product": {
  "en": "The Pack",
  "id": "The Pack"
 },
 "media": {
  "video": "../../assets/02-prep.mp4",
  "poster": "../../assets/bg/hero.jpg",
  "art": "../../assets/product-art/the-pack.svg",
  "visual": "../../assets/system-the-pack.png",
  "captions": {
   "en": "../../assets/lms/captions-en.vtt",
   "id": "../../assets/lms/captions-id.vtt"
  }
 },
 "modules": [
  {
   "num": 1,
   "title": {
    "en": "How Hiring Actually Works",
    "id": "Cara Kerja Rekrutmen yang Sebenarnya"
   },
   "overview": {
    "en": "Module 1 of The Pack focuses on how hiring actually works. Work through the lessons in order — each builds on the last.",
    "id": "Modul 1 The Pack membongkar cara kerja rekrutmen yang sebenarnya. Kerjakan pelajarannya berurutan — setiap pelajaran menjadi pijakan bagi pelajaran berikutnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply how hiring actually works to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu memahami cara kerja rekrutmen dari sisi perusahaan — dan punya metode yang konkret dan bisa diulang untuk memakainya dalam pencarian kerjamu sendiri."
   },
   "lessons": [
    {
     "n": "1.1",
     "title": {
      "en": "The Hiring Gauntlet — Understanding the Elimination Process",
      "id": "Gerbang Demi Gerbang — Memahami Proses Eliminasi Rekrutmen"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Hiring is not a talent contest; it is an elimination funnel designed to reduce thousands of applications to one signature at acceptable cost. Once you see the funnel from the employer's side, every stage of The Pack makes sense — and most common application advice stops making sense.",
      "id": "Rekrutmen bukan kontes bakat; ia adalah corong eliminasi yang dirancang untuk menyusutkan ribuan lamaran menjadi satu tanda tangan, dengan biaya yang masuk akal. Begitu kamu melihat corong ini dari sisi perusahaan, setiap tahap di The Pack menjadi masuk akal — dan sebagian besar nasihat melamar kerja yang beredar justru tidak masuk akal lagi."
     },
     "objectives": [
      {
       "en": "Describe the elimination funnel and the pass rates that shape each stage.",
       "id": "Menggambarkan corong eliminasi dan tingkat kelolosan yang membentuk setiap tahapnya."
      },
      {
       "en": "Explain what each stage is actually filtering for — and what it cannot see.",
       "id": "Menjelaskan apa yang sebenarnya disaring di setiap tahap — dan apa yang tidak bisa dilihatnya."
      },
      {
       "en": "Reposition your effort: optimise per-stage conversion, not application volume alone.",
       "id": "Mengarahkan ulang usahamu: mengoptimalkan konversi di setiap tahap, bukan sekadar menambah jumlah lamaran."
      }
     ],
     "takeaways": [
      {
       "en": "Every stage exists to say no cheaply; your job is to make no difficult at each gate.",
       "id": "Setiap tahap ada untuk berkata “tidak” dengan biaya murah; tugasmu adalah membuat “tidak” itu sulit diucapkan di setiap gerbang."
      },
      {
       "en": "Early stages filter on paper signals, not on you — a rejection there is a document problem, not a worth problem.",
       "id": "Tahap-tahap awal menyaring sinyal di atas kertas, bukan dirimu — penolakan di sana adalah masalah dokumen, bukan masalah harga diri."
      },
      {
       "en": "Funnel math beats motivation: small conversion gains at early stages multiply through everything after.",
       "id": "Matematika corong mengalahkan motivasi: kenaikan konversi kecil di tahap awal berlipat ganda di semua tahap setelahnya."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "The employer's problem",
        "id": "Masalah yang dihadapi perusahaan"
       },
       "body": {
        "en": "A popular graduate programme receives thousands of applications for dozens of seats. Reading every application deeply is impossible, so employers build a machine that discards cheaply at the top — software and six-second scans — and spends expensively only at the bottom, where interviews cost senior staff hours. Nothing personal operates in the first three gates. The candidates who survive are not always the best; they are the ones whose paper signals fit the machine. That is unfair, and it is also the game board. The Pack trains you gate by gate.",
        "id": "Sebuah program lulusan baru yang populer menerima ribuan lamaran untuk puluhan kursi. Membaca setiap lamaran secara mendalam mustahil, maka perusahaan membangun sebuah mesin: membuang dengan murah di bagian atas — perangkat lunak dan pindaian enam detik — dan baru mengeluarkan biaya besar di bagian bawah, saat wawancara memakan jam kerja staf senior. Tidak ada yang bersifat pribadi di tiga gerbang pertama. Kandidat yang lolos tidak selalu yang terbaik; mereka adalah kandidat yang sinyal di atas kertasnya cocok dengan mesin itu. Itu tidak adil — dan itu juga papan permainannya. The Pack melatihmu gerbang demi gerbang."
       },
       "img": "../../assets/bg/gauntlet/gate-01-submission.jpg",
       "imgPos": "center 40%"
      },
      {
       "icon": "gear",
       "h": {
        "en": "What each gate filters",
        "id": "Apa yang disaring di setiap gerbang"
       },
       "body": {
        "en": "<b>ATS / administrative screen:</b> keyword and requirement match — filters documents, not people. <b>Recruiter scan:</b> six to thirty seconds — filters clarity and evidence density. <b>Psychometric tests:</b> speed and accuracy under time — filter trainable test craft as much as raw aptitude. <b>Group discussion:</b> observable collaboration behaviours. <b>Interviews:</b> structured evidence of competencies (The Rope's territory). <b>Offer:</b> mutual risk assessment. Notice what no gate measures directly: your potential, your character, your story as you understand it. Gates read signals; The Pack is signal engineering.",
        "id": "<b>ATS / saringan administratif:</b> kecocokan kata kunci dan persyaratan — menyaring dokumen, bukan orang. <b>Pindaian perekrut:</b> enam sampai tiga puluh detik — menyaring kejelasan dan kepadatan bukti. <b>Tes psikometri:</b> kecepatan dan ketepatan di bawah batas waktu — sama banyaknya menyaring keterampilan mengerjakan tes yang bisa dilatih dengan bakat mentah. <b>Diskusi kelompok:</b> perilaku kolaborasi yang bisa diamati. <b>Wawancara:</b> bukti kompetensi yang terstruktur (wilayah The Rope). <b>Tawaran:</b> penilaian risiko dari dua sisi. Perhatikan apa yang tidak diukur langsung oleh gerbang mana pun: potensimu, karaktermu, kisahmu sebagaimana kamu memahaminya. Gerbang membaca sinyal; The Pack adalah ilmu merekayasa sinyal itu."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Playing the funnel, not the lottery",
        "id": "Memainkan corong, bukan lotre"
       },
       "body": {
        "en": "Two candidates send 60 applications each. A treats it as a lottery: same CV everywhere, no tracking, effort measured in volume. B treats it as a funnel: tracks where each application dies, and fixes the leaking stage — CV rewritten when applications die at screening, test drills when they die at assessments, FGD practice when they die in group stages. After three months, A has sent more applications; B has interviews. The difference is a feedback loop, and building yours is this module's assignment. The Screening Gym's tracker exists precisely for this.",
        "id": "Dua kandidat masing-masing mengirim 60 lamaran. A memperlakukannya seperti lotre: CV yang sama ke mana-mana, tanpa pelacakan, usaha diukur dari jumlah. B memperlakukannya seperti corong: melacak di tahap mana setiap lamaran gugur, lalu memperbaiki tahap yang bocor — CV ditulis ulang kalau lamaran gugur di penyaringan, latihan tes kalau gugur di asesmen, latihan FGD kalau gugur di tahap kelompok. Setelah tiga bulan, A sudah mengirim lebih banyak lamaran; B sudah mendapat wawancara. Bedanya ada pada putaran umpan balik, dan membangun putaranmu sendiri adalah tugas modul ini. Pelacak di Screening Gym ada persis untuk itu."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: The elimination funnel — cheap filters first, expensive judgment last.",
       "id": "Peraga 1: Corong eliminasi — saringan yang murah lebih dulu, penilaian yang mahal paling akhir."
      },
      "title": {
       "en": "The hiring funnel",
       "id": "Corong rekrutmen"
      },
      "items": [
       {
        "h": {
         "en": "ATS screen",
         "id": "Saringan ATS"
        },
        "sub": {
         "en": "Documents vs requirements",
         "id": "Dokumen vs persyaratan"
        }
       },
       {
        "h": {
         "en": "Recruiter scan",
         "id": "Pindaian perekrut"
        },
        "sub": {
         "en": "Seconds per CV — clarity wins",
         "id": "Hitungan detik per CV — yang jelas yang menang"
        }
       },
       {
        "h": {
         "en": "Tests & FGD",
         "id": "Tes & FGD"
        },
        "sub": {
         "en": "Timed aptitude · observed collaboration",
         "id": "Tes bakat berbatas waktu · kolaborasi yang diamati"
        }
       },
       {
        "h": {
         "en": "Interviews",
         "id": "Wawancara"
        },
        "sub": {
         "en": "Structured evidence — The Rope",
         "id": "Bukti terstruktur — The Rope"
        }
       },
       {
        "h": {
         "en": "Offer",
         "id": "Tawaran"
        },
        "sub": {
         "en": "Mutual risk assessment",
         "id": "Penilaian risiko dari dua sisi"
        }
       }
      ],
      "longdesc": {
       "en": "A five-stage funnel: automated ATS screening of documents against requirements; a seconds-long recruiter scan rewarding clarity; timed tests and observed group discussions; structured interviews; finally the offer stage as mutual risk assessment. Volume shrinks and evaluation cost per candidate grows at every stage.",
       "id": "Corong lima tahap: penyaringan ATS otomatis yang mencocokkan dokumen dengan persyaratan; pindaian perekrut selama hitungan detik yang mengganjar kejelasan; tes berbatas waktu dan diskusi kelompok yang diamati; wawancara terstruktur; dan akhirnya tahap tawaran sebagai penilaian risiko dari dua sisi. Di setiap tahap, jumlah kandidat menyusut dan biaya evaluasi per kandidat naik."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "ATS",
        "id": "ATS"
       },
       "def": {
        "en": "Applicant Tracking System — software that stores, filters and ranks applications before a human reads them.",
        "id": "Applicant Tracking System — perangkat lunak yang menyimpan, menyaring, dan memeringkat lamaran sebelum ada manusia yang membacanya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Your last 20 applications all died before any test or interview invitation. What does funnel thinking prescribe?",
        "id": "20 lamaran terakhirmu semuanya gugur sebelum ada undangan tes atau wawancara. Menurut cara berpikir corong, apa yang harus dilakukan?"
       },
       "options": [
        {
         "en": "Send 40 more applications with the same materials",
         "id": "Kirim 40 lamaran lagi dengan materi yang sama"
        },
        {
         "en": "Fix the screening stage: rebuild the CV against each JD and verify ATS-readability before sending more",
         "id": "Perbaiki tahap penyaringan: susun ulang CV sesuai setiap deskripsi lowongan dan pastikan terbaca oleh ATS sebelum mengirim lagi"
        },
        {
         "en": "Skip online applications entirely and only network",
         "id": "Tinggalkan lamaran daring sama sekali dan hanya mengandalkan jaringan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Deaths concentrated at one stage locate the leak. Volume through a broken gate multiplies rejections, not offers.",
        "id": "Lamaran yang gugur menumpuk di satu tahap menunjukkan letak kebocorannya. Menambah jumlah lamaran lewat gerbang yang rusak hanya melipatgandakan penolakan, bukan tawaran."
       }
      }
     ],
     "tool": {
      "id": "gym",
      "mode": "tracker",
      "title": {
       "en": "Start your pipeline",
       "id": "Mulai pipeline lamaranmu"
      },
      "body": {
       "en": "The application tracker turns your search into a funnel you can read: every application, its stage, and where it died — the feedback loop this lesson demands.",
       "id": "Pelacak lamaran mengubah pencarian kerjamu menjadi corong yang bisa dibaca: setiap lamaran, tahapnya, dan di mana ia gugur — putaran umpan balik yang dituntut pelajaran ini."
      },
      "cta": {
       "en": "Open the tracker →",
       "id": "Buka pelacak →"
      }
     },
     "quote": {
      "en": "Every stage exists to say no cheaply. Your job is to make no difficult.",
      "id": "Setiap tahap ada untuk berkata “tidak” dengan murah. Tugasmu membuat “tidak” itu sulit diucapkan."
     }
    },
    {
     "n": "1.2",
     "title": {
      "en": "The End-to-End Recruitment Journey — All 13 Stages",
      "id": "Perjalanan Rekrutmen dari Awal sampai Akhir — 13 Tahap"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "From a vacancy's birth to your first day, a typical corporate recruitment runs through thirteen stages — several of them invisible to candidates. Knowing the whole railway explains the silences, the sudden urgency, and where your leverage actually lives.",
      "id": "Dari lahirnya sebuah lowongan sampai hari pertamamu bekerja, rekrutmen korporat pada umumnya melewati tiga belas tahap — beberapa di antaranya tidak terlihat oleh kandidat. Mengenal seluruh jalurnya menjelaskan kenapa ada masa hening, kenapa tiba-tiba semua jadi mendesak, dan di mana sebenarnya daya tawarmu berada."
     },
     "objectives": [
      {
       "en": "Trace all 13 stages, including the invisible pre-posting and post-offer ones.",
       "id": "Menelusuri ke-13 tahap, termasuk tahap-tahap tak terlihat sebelum lowongan tayang dan setelah tawaran dibuat."
      },
      {
       "en": "Explain the silences: what is happening when you hear nothing for weeks.",
       "id": "Menjelaskan masa hening: apa yang sebenarnya terjadi saat kamu tidak mendengar kabar berminggu-minggu."
      },
      {
       "en": "Identify the three moments where a candidate has real leverage.",
       "id": "Mengenali tiga momen ketika kandidat benar-benar punya daya tawar."
      }
     ],
     "takeaways": [
      {
       "en": "Half the process happens before the job is posted and after the offer is drafted — where candidates never look.",
       "id": "Separuh proses terjadi sebelum lowongan tayang dan setelah tawaran disusun — di tempat yang tidak pernah dilihat kandidat."
      },
      {
       "en": "Silence usually means internal queueing — approvals, calibration, other candidates — not rejection.",
       "id": "Hening biasanya berarti antrean internal — persetujuan, kalibrasi, kandidat lain — bukan penolakan."
      },
      {
       "en": "Your leverage peaks three times: before applying (referrals), after final interviews (comparison set), and at offer (negotiation).",
       "id": "Daya tawarmu memuncak tiga kali: sebelum melamar (referal), setelah wawancara akhir (saat kamu dibandingkan dengan kandidat lain), dan saat tawaran (negosiasi)."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "The thirteen stages",
        "id": "Tiga belas tahap itu"
       },
       "body": {
        "en": "<b>1</b> Headcount need identified → <b>2</b> budget approval → <b>3</b> job description drafted (often copied from the last hire) → <b>4</b> posting + sourcing (referrals start here, before you ever see the ad) → <b>5</b> ATS screening → <b>6</b> recruiter shortlist → <b>7</b> hiring-manager review → <b>8</b> assessments (tests, FGD) → <b>9</b> interview rounds → <b>10</b> internal calibration (candidates compared, notes reconciled) → <b>11</b> reference and background checks → <b>12</b> offer construction and approval → <b>13</b> negotiation, signature, onboarding. Candidates see stages 4–9 and 13; the machine spends most of its calendar time in the ones you cannot see.",
        "id": "<b>1</b> Kebutuhan tenaga kerja teridentifikasi → <b>2</b> persetujuan anggaran → <b>3</b> deskripsi lowongan disusun (sering disalin dari rekrutmen sebelumnya) → <b>4</b> lowongan tayang + pencarian kandidat (referal mulai bekerja di sini, sebelum kamu melihat iklannya) → <b>5</b> penyaringan ATS → <b>6</b> daftar pendek dari perekrut → <b>7</b> tinjauan manajer perekrut → <b>8</b> asesmen (tes, FGD) → <b>9</b> putaran wawancara → <b>10</b> kalibrasi internal (kandidat dibandingkan, catatan disatukan) → <b>11</b> pemeriksaan referensi dan latar belakang → <b>12</b> penyusunan dan persetujuan tawaran → <b>13</b> negosiasi, tanda tangan, onboarding. Kandidat hanya melihat tahap 4–9 dan 13; mesin ini menghabiskan sebagian besar waktunya di tahap-tahap yang tidak bisa kamu lihat."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Decoding the silences",
        "id": "Membaca masa hening"
       },
       "body": {
        "en": "Week-long silences almost always map to invisible stages: the manager is travelling, calibration waits for the last candidate's final round, the offer needs a compensation-committee signature. Two practical rules follow. First, ask about process at every touchpoint — “what are the remaining steps and rough timeline?” is a professional question that recruiters answer readily, and it converts silence into schedule. Second, keep your funnel full until a contract is signed: a verbal “we love you” at stage 10 dies quietly more often than anyone admits, usually for budget reasons that had nothing to do with you.",
        "id": "Hening berminggu-minggu hampir selalu berkaitan dengan tahap yang tak terlihat: manajernya sedang bepergian, kalibrasi menunggu putaran akhir kandidat terakhir, tawaran butuh tanda tangan komite kompensasi. Dari sini lahir dua aturan praktis. Pertama, tanyakan prosesnya di setiap titik kontak — “apa saja langkah yang tersisa dan kira-kira kapan?” adalah pertanyaan profesional yang dengan senang hati dijawab perekrut, dan ia mengubah hening menjadi jadwal. Kedua, jaga corongmu tetap terisi sampai kontrak benar-benar ditandatangani: ucapan lisan “kami suka sekali dengan kamu” di tahap 10 lebih sering mati diam-diam daripada yang diakui siapa pun — biasanya karena urusan anggaran yang sama sekali tidak ada hubungannya denganmu."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The three leverage points",
        "id": "Tiga titik daya tawar"
       },
       "body": {
        "en": "<b>Before applying:</b> a referral enters you at stage 4 with a trusted-source tag that survives the ATS — the single highest-return move in job search, and why The Pack keeps teaching honest networking. <b>After final interviews:</b> if you hold parallel processes, a polite “I have another process concluding next week” accelerates decisions and improves offers — but only when true. <b>At offer:</b> stage 12 built a range, not a number; stage 13 is where The Rope's negotiation module cashes in. Between these points, patience plus process questions; leverage spent at the wrong moment reads as pressure.",
        "id": "<b>Sebelum melamar:</b> referal memasukkanmu di tahap 4 dengan label “sumber tepercaya” yang lolos dari ATS — langkah dengan imbal hasil tertinggi dalam pencarian kerja, dan alasan The Pack terus mengajarkan membangun jaringan dengan jujur. <b>Setelah wawancara akhir:</b> kalau kamu sedang menjalani proses di beberapa perusahaan sekaligus, kalimat sopan “saya sedang menjalani proses lain yang selesai minggu depan” mempercepat keputusan dan memperbaiki tawaran — tapi hanya kalau memang benar. <b>Saat tawaran:</b> tahap 12 menyusun sebuah rentang, bukan satu angka; tahap 13 adalah saat modul negosiasi The Rope menghasilkan buahnya. Di antara ketiga titik itu: bersabar, dan bertanya soal proses. Daya tawar yang dikeluarkan di momen yang salah terbaca sebagai tekanan."
       }
      }
     ],
     "diagram": {
      "type": "timeline",
      "exhibit": {
       "en": "Exhibit 1: What candidates see vs what actually happens.",
       "id": "Peraga 1: Yang dilihat kandidat vs yang sebenarnya terjadi."
      },
      "title": {
       "en": "The recruitment railway",
       "id": "Jalur rekrutmen"
      },
      "items": [
       {
        "h": {
         "en": "Stages 1–3 · invisible",
         "id": "Tahap 1–3 · tak terlihat"
        },
        "sub": {
         "en": "Need, budget, JD drafting",
         "id": "Kebutuhan, anggaran, penyusunan deskripsi lowongan"
        }
       },
       {
        "h": {
         "en": "Stages 4–9 · visible",
         "id": "Tahap 4–9 · terlihat"
        },
        "sub": {
         "en": "Posting, screens, tests, interviews",
         "id": "Tayang, saringan, tes, wawancara"
        }
       },
       {
        "h": {
         "en": "Stages 10–12 · invisible",
         "id": "Tahap 10–12 · tak terlihat"
        },
        "sub": {
         "en": "Calibration, checks, offer build",
         "id": "Kalibrasi, pemeriksaan, penyusunan tawaran"
        }
       },
       {
        "h": {
         "en": "Stage 13 · visible",
         "id": "Tahap 13 · terlihat"
        },
        "sub": {
         "en": "Negotiation, signature, day one",
         "id": "Negosiasi, tanda tangan, hari pertama"
        }
       }
      ],
      "longdesc": {
       "en": "A timeline of thirteen recruitment stages grouped in four bands: stages one to three are invisible pre-posting work — need identification, budget, job description; stages four to nine are the visible band — posting, screening, tests, interviews; stages ten to twelve are invisible again — calibration, background checks, offer construction; stage thirteen returns visible — negotiation and signature.",
       "id": "Garis waktu tiga belas tahap rekrutmen dalam empat kelompok: tahap satu sampai tiga adalah pekerjaan tak terlihat sebelum lowongan tayang — identifikasi kebutuhan, anggaran, deskripsi lowongan; tahap empat sampai sembilan adalah kelompok yang terlihat — tayang, penyaringan, tes, wawancara; tahap sepuluh sampai dua belas kembali tak terlihat — kalibrasi, pemeriksaan latar belakang, penyusunan tawaran; tahap tiga belas kembali terlihat — negosiasi dan tanda tangan."
      }
     },
     "checks": [
      {
       "q": {
        "en": "Two weeks of silence after your final interview. The most likely explanation, per this lesson?",
        "id": "Dua minggu hening setelah wawancara akhirmu. Menurut pelajaran ini, penjelasan yang paling mungkin?"
       },
       "options": [
        {
         "en": "You were rejected and they will never tell you",
         "id": "Kamu ditolak dan mereka tidak akan pernah memberitahumu"
        },
        {
         "en": "The process is in an invisible stage — calibration, approvals, or waiting on other candidates",
         "id": "Prosesnya sedang berada di tahap yang tak terlihat — kalibrasi, persetujuan, atau menunggu kandidat lain"
        },
        {
         "en": "The company forgot you exist",
         "id": "Perusahaan lupa kamu ada"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Stages 10–12 consume weeks by design. A polite process question converts the silence into a timeline; meanwhile the funnel stays full.",
        "id": "Tahap 10–12 memang dirancang memakan waktu berminggu-minggu. Pertanyaan sopan tentang proses mengubah hening menjadi jadwal; sementara itu, corongmu tetap terisi."
       }
      }
     ]
    },
    {
     "n": "1.3",
     "title": {
      "en": "Building Your Job Search System",
      "id": "Membangun Sistem Pencarian Kerja"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "A job search run from memory and browser tabs leaks opportunities silently. This lesson builds your search system — target list, weekly cadence, pipeline tracker, and the metrics that tell you what to fix — then drills it on a realistic week.",
      "id": "Pencarian kerja yang dijalankan dari ingatan dan tab peramban membocorkan peluang tanpa kamu sadari. Pelajaran ini membangun sistem pencarianmu — daftar target, ritme mingguan, pelacak pipeline, dan metrik yang memberitahumu apa yang harus diperbaiki — lalu melatihnya dalam satu minggu yang realistis."
     },
     "objectives": [
      {
       "en": "Build a tiered target list: reach, match, and foundation companies.",
       "id": "Menyusun daftar target bertingkat: perusahaan impian, perusahaan yang sepadan, dan perusahaan fondasi."
      },
      {
       "en": "Design a weekly cadence that balances new applications, follow-ups and skill drills.",
       "id": "Merancang ritme mingguan yang menyeimbangkan lamaran baru, tindak lanjut, dan latihan keterampilan."
      },
      {
       "en": "Read pipeline metrics to locate your leaking stage.",
       "id": "Membaca metrik pipeline untuk menemukan tahap yang bocor."
      }
     ],
     "takeaways": [
      {
       "en": "Quality of system beats quantity of applications: ten targeted, tracked applications outperform fifty sprayed ones.",
       "id": "Kualitas sistem mengalahkan jumlah lamaran: sepuluh lamaran yang terarah dan terlacak mengungguli lima puluh lamaran yang disebar asal-asalan."
      },
      {
       "en": "The pipeline tracker is your funnel X-ray — it shows which Pack module to train next.",
       "id": "Pelacak pipeline adalah rontgen corongmu — ia menunjukkan modul The Pack mana yang perlu kamu latih berikutnya."
      },
      {
       "en": "A weekly review ritual keeps the search a project, not a mood.",
       "id": "Ritual tinjauan mingguan menjaga pencarian kerja tetap menjadi proyek, bukan soal suasana hati."
      }
     ],
     "sections": [
      {
       "icon": "target",
       "h": {
        "en": "The tiered target list",
        "id": "Daftar target bertingkat"
       },
       "body": {
        "en": "List 20–30 companies in three tiers. <b>Reach</b> (5–8): dream employers where competition is fiercest — apply with your absolute best materials and, where possible, a referral. <b>Match</b> (10–15): solid fit for your profile today — the core of your pipeline. <b>Foundation</b> (5–8): highly likely to progress you — they keep interviews flowing, skills warm and confidence honest. The Range's company database feeds this list with real data. The rule that makes tiers work: every tier gets applications every month, because interview practice at foundation tier is what converts reach-tier chances.",
        "id": "Daftar 20–30 perusahaan dalam tiga tingkat. <b>Impian</b> (5–8): perusahaan idaman dengan persaingan paling sengit — lamar dengan materi terbaikmu dan, kalau bisa, lewat referal. <b>Sepadan</b> (10–15): kecocokan yang solid dengan profilmu hari ini — inti dari pipeline-mu. <b>Fondasi</b> (5–8): sangat mungkin meloloskanmu — menjaga wawancara tetap mengalir, keterampilan tetap terasah, dan kepercayaan diri tetap berpijak pada kenyataan. Basis data perusahaan di The Range mengisi daftar ini dengan data nyata. Aturan yang membuat tingkatan ini bekerja: setiap tingkat mendapat lamaran setiap bulan, karena latihan wawancara di tingkat fondasi adalah yang mengubah peluang di tingkat impian menjadi tawaran."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "The weekly cadence",
        "id": "Ritme mingguan"
       },
       "body": {
        "en": "A sustainable search week for a student or fresh graduate: <b>3–5 tailored applications</b> (tailored means the CV visibly answers that JD — Module 2's craft); <b>every follow-up due</b> (7–10 days after silence, once, politely); <b>two drill blocks</b> (aptitude tests or FGD practice per your leaking stage); <b>one networking touch</b> (a coffee chat, an alumni message — Module 5); and a <b>20-minute Friday review</b>: update the tracker, read the metrics, choose next week's fixes. Total: 8–10 focused hours. More than that burns out by week six; the search is a marathon paced like one.",
        "id": "Satu minggu pencarian kerja yang bisa dijalani terus oleh mahasiswa atau lulusan baru: <b>3–5 lamaran yang disesuaikan</b> (disesuaikan berarti CV-nya terlihat menjawab deskripsi lowongan itu — keterampilan dari Modul 2); <b>semua tindak lanjut yang jatuh tempo</b> (7–10 hari setelah hening, satu kali, dengan sopan); <b>dua blok latihan</b> (tes bakat atau latihan FGD, sesuai tahap yang bocor); <b>satu sentuhan jaringan</b> (ngopi bareng, pesan ke alumni — Modul 5); dan <b>tinjauan 20 menit setiap Jumat</b>: perbarui pelacak, baca metriknya, pilih perbaikan untuk minggu depan. Total: 8–10 jam yang fokus. Lebih dari itu, kamu kehabisan napas di minggu keenam; pencarian kerja adalah maraton, dan harus dijalani dengan kecepatan maraton."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Reading the metrics",
        "id": "Membaca metrik"
       },
       "body": {
        "en": "Three ratios diagnose everything. <b>Screen rate</b> — invitations ÷ applications: below ~15% on match-tier companies says your documents or targeting leak (Modules 2 and 6). <b>Assessment pass rate</b> — passes ÷ attempts: persistent failures say drill more before applying more (Module 3). <b>Interview conversion</b> — offers or next rounds ÷ interviews: low numbers route you to The Rope. The tracker computes these from your own data. One honest caveat the tool will also show you: with small numbers, ratios wobble — read trends after ten applications, not after two.",
        "id": "Tiga rasio cukup untuk mendiagnosis semuanya. <b>Tingkat lolos saringan</b> — undangan ÷ lamaran: di bawah ~15% di perusahaan tingkat sepadan berarti dokumen atau penargetanmu bocor (Modul 2 dan 6). <b>Tingkat lulus asesmen</b> — lulus ÷ percobaan: kegagalan yang terus berulang berarti berlatihlah lebih banyak sebelum melamar lebih banyak (Modul 3). <b>Konversi wawancara</b> — tawaran atau putaran lanjutan ÷ wawancara: angka yang rendah mengarahkanmu ke The Rope. Pelacak menghitung semua ini dari datamu sendiri. Satu catatan jujur yang juga akan ditampilkan alatnya: dengan angka yang masih kecil, rasio mudah goyang — baca trennya setelah sepuluh lamaran, bukan setelah dua."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill — Triage the week",
        "id": "Latihan — Triase satu minggu"
       },
       "body": {
        "en": "It is Sunday evening. Open items: 2 new match-tier JDs closing Friday; a reach-tier posting closing tomorrow that would need a full CV rework; a follow-up due to Company K (silent 9 days); a numerical test Thursday for Company M; and a friend offering to introduce you to an alum at a reach company. You have 9 hours this week. Allocate, then reveal.",
        "id": "Minggu malam. Yang ada di meja: 2 lowongan tingkat sepadan yang tutup hari Jumat; satu lowongan tingkat impian yang tutup besok dan butuh perombakan CV total; tindak lanjut yang jatuh tempo untuk Perusahaan K (hening 9 hari); tes numerik hari Kamis untuk Perusahaan M; dan seorang teman menawarkan mengenalkanmu ke alumni di salah satu perusahaan impian. Waktumu minggu ini 9 jam. Alokasikan, lalu buka jawabannya."
       },
       "debrief": {
        "en": "Model allocation: the Thursday test gets 3 hours of drills — a booked assessment is the scarcest asset in the pipeline. The introduction gets a same-day yes and 30 minutes of homework — referrals outrank everything at reach tier. The two match JDs get 2 hours each of tailored applications. The follow-up takes 10 minutes Monday. The overnight reach posting gets dropped — a rushed CV into the fiercest competition converts near zero; note the company for its next cycle. The pattern: protect booked assessments, seize referrals, decline volume that would be sent broken.",
        "id": "Alokasi model: tes hari Kamis mendapat 3 jam latihan — asesmen yang sudah terjadwal adalah aset paling langka di pipeline. Tawaran perkenalan dijawab “ya” hari itu juga plus 30 menit PR — referal mengalahkan segalanya di tingkat impian. Dua lowongan sepadan masing-masing mendapat 2 jam untuk lamaran yang disesuaikan. Tindak lanjut cukup 10 menit di hari Senin. Lowongan impian yang tutup besok dilepas — CV yang dikerjakan tergesa-gesa untuk persaingan paling sengit konversinya nyaris nol; catat saja perusahaannya untuk siklus berikutnya. Polanya: lindungi asesmen yang sudah terjadwal, sambar referal, tolak menambah jumlah kalau yang terkirim pasti rusak."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Measuring effort in applications sent",
         "id": "Mengukur usaha dari jumlah lamaran yang terkirim"
        },
        "fix": {
         "en": "Measure stage conversions. Fifty applications with a broken CV is fifty rehearsals of rejection.",
         "id": "Ukurlah konversi antartahap. Lima puluh lamaran dengan CV yang rusak sama dengan lima puluh kali berlatih ditolak."
        }
       },
       {
        "h": {
         "en": "Following up daily — or never",
         "id": "Menindaklanjuti setiap hari — atau tidak pernah sama sekali"
        },
        "fix": {
         "en": "Once, 7–10 days after silence, referencing the role and one line of continued interest. Then let it rest.",
         "id": "Satu kali, 7–10 hari setelah hening, sebutkan perannya dan satu kalimat yang menunjukkan minatmu masih ada. Setelah itu, biarkan."
        }
       },
       {
        "h": {
         "en": "Pausing the search after one promising interview",
         "id": "Menghentikan pencarian setelah satu wawancara yang menjanjikan"
        },
        "fix": {
         "en": "Pipelines die at stage 10–12 silently. Keep applying until a contract is signed.",
         "id": "Pipeline mati diam-diam di tahap 10–12. Terus melamar sampai kontrak ditandatangani."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "Your screen rate on match-tier applications is 5%; assessment and interview rates look fine. Which module trains the fix?",
        "id": "Tingkat lolos saringanmu untuk lamaran tingkat sepadan hanya 5%; tingkat asesmen dan wawancara terlihat baik. Modul mana yang melatih perbaikannya?"
       },
       "options": [
        {
         "en": "Module 4 — FGD simulations",
         "id": "Modul 4 — Simulasi FGD"
        },
        {
         "en": "Modules 2 and 6 — application documents and ATS optimisation",
         "id": "Modul 2 dan 6 — dokumen lamaran dan optimasi ATS"
        },
        {
         "en": "The Rope — interview performance",
         "id": "The Rope — performa wawancara"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Deaths at the screening stage are document and targeting problems: CV craft (Module 2) and ATS mechanics (Module 6).",
        "id": "Lamaran yang gugur di tahap penyaringan adalah masalah dokumen dan penargetan: keterampilan menyusun CV (Modul 2) dan mekanisme ATS (Modul 6)."
       }
      }
     ],
     "tool": {
      "id": "gym",
      "mode": "tracker",
      "title": {
       "en": "Build the system now",
       "id": "Bangun sistemnya sekarang"
      },
      "body": {
       "en": "Load your current applications into the tracker and let it compute your stage conversions — your first honest funnel X-ray.",
       "id": "Masukkan lamaran-lamaranmu yang sedang berjalan ke pelacak dan biarkan ia menghitung konversi antartahapmu — rontgen corong pertamamu yang jujur."
      },
      "cta": {
       "en": "Open the tracker →",
       "id": "Buka pelacak →"
      }
     }
    }
   ],
   "hero": "../../assets/bg/pack.jpg",
   "heroPos": "center 40%"
  },
  {
   "num": 2,
   "title": {
    "en": "Application Submission Strategy — LinkedIn, CV, Resume &amp; Cover Letter Development",
    "id": "Strategi Mengirim Lamaran — Membangun LinkedIn, CV, Resume &amp; Surat Lamaran"
   },
   "overview": {
    "en": "Module 2 of The Pack focuses on application submission strategy — linkedin, cv, resume &amp; cover letter development. Work through the lessons in order — each builds on the last.",
    "id": "Modul 2 The Pack membahas strategi mengirim lamaran — membangun LinkedIn, CV, resume &amp; surat lamaran. Kerjakan pelajarannya berurutan — setiap pelajaran menjadi pijakan bagi pelajaran berikutnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply application submission strategy — linkedin, cv, resume &amp; cover letter development to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu punya metode yang konkret dan bisa diulang untuk menyusun profil LinkedIn, CV, resume, dan surat lamaran yang menjawab lowongan — dan lolos dari saringan pertama."
   },
   "lessons": [
    {
     "n": "2.1",
     "title": {
      "en": "Best Practices and Golden Rules of Professional Application",
      "id": "Praktik Terbaik dan Aturan Emas Lamaran Profesional"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Before templates and tactics, the golden rules: the principles that decide whether any application document works, on any channel, for any role. Break these and no formatting trick saves you; keep them and even a plain document competes.",
      "id": "Sebelum bicara templat dan taktik, kenali dulu aturan emasnya: prinsip yang menentukan apakah dokumen lamaran apa pun berhasil — di kanal apa pun, untuk peran apa pun. Langgar aturan ini, dan tidak ada trik format yang bisa menyelamatkanmu; patuhi, dan dokumen paling sederhana pun mampu bersaing."
     },
     "objectives": [
      {
       "en": "Apply the evidence rule: every claim carries a number, artefact or verifiable specific.",
       "id": "Menerapkan aturan bukti: setiap klaim membawa angka, artefak, atau hal spesifik yang bisa diverifikasi."
      },
      {
       "en": "Apply the relevance rule: the document answers this JD, not your biography.",
       "id": "Menerapkan aturan relevansi: dokumen menjawab lowongan ini, bukan menceritakan biografimu."
      },
      {
       "en": "Apply the honesty rule and know exactly where embellishment becomes disqualification.",
       "id": "Menerapkan aturan kejujuran, dan tahu persis di titik mana membumbui berubah menjadi diskualifikasi."
      }
     ],
     "takeaways": [
      {
       "en": "Recruiters buy evidence, not adjectives: “cut onboarding time 40%” beats “hard-working team player” every time.",
       "id": "Perekrut membeli bukti, bukan kata sifat: “memangkas waktu onboarding 40%” selalu menang atas “pekerja keras dan mampu bekerja dalam tim”."
      },
      {
       "en": "Relevance is the reader's first filter: the six-second scan looks for their keywords, their problems, their language.",
       "id": "Relevansi adalah saringan pertama pembaca: pindaian enam detik mencari kata kunci mereka, masalah mereka, bahasa mereka."
      },
      {
       "en": "Lies are found at reference checks and probation; framing honestly is a skill, inventing is a time bomb.",
       "id": "Kebohongan ketahuan saat pemeriksaan referensi dan masa percobaan; membingkai dengan jujur adalah keterampilan, mengarang adalah bom waktu."
      }
     ],
     "sections": [
      {
       "icon": "flag",
       "h": {
        "en": "Rule 1 — Evidence over adjectives",
        "id": "Aturan 1 — Bukti mengalahkan kata sifat"
       },
       "body": {
        "en": "Self-descriptions (“motivated”, “detail-oriented”, “excellent communicator”) are free to write and therefore worthless to read — every CV contains them. Evidence is scarce and therefore valuable: numbers (“managed a Rp 45m event budget”), artefacts (“built the dashboard now used by 3 faculties”), verdicts by others (“selected as 1 of 5 from 120 applicants”). The rewrite discipline: for every line, ask <i>could a stranger check this?</i> If not, replace it with something they could. A CV with eight verifiable lines beats a CV with twenty decorative ones.",
        "id": "Deskripsi diri (“termotivasi”, “teliti”, “komunikator yang andal”) gratis untuk ditulis, dan karena itu tidak berharga untuk dibaca — semua CV memuatnya. Bukti itu langka, dan karena itu berharga: angka (“mengelola anggaran acara Rp 45 juta”), artefak (“membangun dasbor yang kini dipakai 3 fakultas”), penilaian pihak lain (“terpilih sebagai 1 dari 5 di antara 120 pelamar”). Disiplin menulis ulangnya: untuk setiap baris, tanyakan <i>bisakah orang asing memeriksa kebenarannya?</i> Kalau tidak, ganti dengan sesuatu yang bisa. CV dengan delapan baris yang bisa diverifikasi mengalahkan CV dengan dua puluh baris hiasan."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Rule 2 — Relevance over completeness",
        "id": "Aturan 2 — Relevansi mengalahkan kelengkapan"
       },
       "body": {
        "en": "Your CV is not your archive; it is an argument that you fit <i>this</i> role. The JD tells you the argument's required points: its top requirements are your top bullets, its vocabulary is your vocabulary (they say “stakeholder management”, you do not say “handling people”), its problems are what your evidence should echo. Practical consequence: a master CV holding everything, from which each application cuts a tailored version — dropping honours that do not serve this argument hurts for a minute and works for years. Module 6 adds the machine layer to this same rule.",
        "id": "CV-mu bukan arsip; ia sebuah argumen bahwa kamu cocok untuk peran <i>ini</i>. Deskripsi lowongan memberitahumu poin-poin wajib argumen itu: persyaratan teratasnya menjadi butir teratasmu, kosakatanya menjadi kosakatamu (kalau mereka menulis “stakeholder management”, kamu tidak menulis “mengurus orang”), dan masalah mereka adalah yang harus digemakan oleh buktimu. Konsekuensi praktisnya: siapkan satu CV induk yang memuat segalanya, lalu setiap lamaran memotong versi yang disesuaikan darinya — membuang prestasi yang tidak mendukung argumen ini terasa sayang selama satu menit, tapi bekerja untukmu selama bertahun-tahun. Modul 6 menambahkan lapisan mesin pada aturan yang sama ini."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Rule 3 — Honest framing, never invention",
        "id": "Aturan 3 — Bingkai dengan jujur, jangan pernah mengarang"
       },
       "body": {
        "en": "The line is bright: <b>framing</b> chooses which true things to emphasise — leading with your thesis project because it matches the role is craft. <b>Invention</b> states false things — a title you never held, a tool you never used, a grade you did not earn. Invention is found: reference checks call employers, technical interviews probe claimed tools in minutes, and probation reveals everything else. The cost is not just one offer — industries talk. Where your history is genuinely thin, the honest play is the difficult-case reframes taught in The Rope: name the gap, show the growth, bring the evidence you do have.",
        "id": "Garisnya jelas: <b>membingkai</b> berarti memilih hal-hal benar mana yang ditonjolkan — membuka dengan proyek skripsimu karena cocok dengan peran itu adalah keterampilan. <b>Mengarang</b> berarti menyatakan hal yang tidak benar — jabatan yang tidak pernah kamu pegang, alat yang tidak pernah kamu pakai, nilai yang tidak kamu raih. Karangan pasti ketahuan: pemeriksaan referensi menelepon mantan atasanmu, wawancara teknis menguji alat yang kamu klaim dalam hitungan menit, dan masa percobaan membongkar sisanya. Biayanya bukan sekadar satu tawaran — orang-orang di satu industri saling bicara. Kalau riwayatmu memang tipis, langkah jujurnya adalah pembingkaian ulang untuk kasus sulit yang diajarkan di The Rope: sebutkan celahnya, tunjukkan pertumbuhannya, bawa bukti yang memang kamu punya."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "One CV line — decorative vs evidential",
        "id": "Satu baris CV — hiasan vs bukti"
       },
       "q": {
        "en": "Describing the same organisational role",
        "id": "Menggambarkan peran organisasi yang sama"
       },
       "weak": {
        "en": "“Responsible for sponsorships as Head of Partnerships. Hard-working, communicative, and experienced in negotiation with excellent leadership skills.”",
        "id": "“Bertanggung jawab atas sponsor sebagai Kepala Kemitraan. Pekerja keras, komunikatif, dan berpengalaman dalam negosiasi dengan kemampuan kepemimpinan yang unggul.”"
       },
       "strong": {
        "en": "“Head of Partnerships (team of 6): raised Rp 85m from 11 sponsors for a 3,000-attendee festival — 40% above target; renewed 8 of 11 sponsors for the following year.”",
        "id": "“Kepala Kemitraan (tim 6 orang): menghimpun Rp 85 juta dari 11 sponsor untuk festival dengan 3.000 peserta — 40% di atas target; 8 dari 11 sponsor memperpanjang kerja sama untuk tahun berikutnya.”"
       },
       "why": {
        "en": "Scale, numbers, and a repeat-business verdict a stranger could verify — the strong line survives the six-second scan and seeds three interview stories.",
        "id": "Skala, angka, dan bukti kepercayaan berulang yang bisa diverifikasi orang asing — baris yang kuat lolos pindaian enam detik dan menanam bahan untuk tiga cerita wawancara."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Which change turns “Skilled in data analysis” into an application-grade line?",
        "id": "Perubahan mana yang mengubah “Terampil dalam analisis data” menjadi baris yang layak masuk lamaran?"
       },
       "options": [
        {
         "en": "“Highly skilled in advanced data analysis”",
         "id": "“Sangat terampil dalam analisis data tingkat lanjut”"
        },
        {
         "en": "“Analysed 3 years of sales data (12k rows) for a family business; findings shifted stock budget 20% toward the two highest-margin lines”",
         "id": "“Menganalisis 3 tahun data penjualan (12 ribu baris) sebuah bisnis keluarga; temuannya menggeser 20% anggaran stok ke dua lini dengan margin tertinggi”"
        },
        {
         "en": "“Passionate about leveraging data-driven insights”",
         "id": "“Bersemangat memanfaatkan wawasan berbasis data”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "It adds scale, a real context and a consequence someone could check — evidence, not adjectives.",
        "id": "Baris itu menambahkan skala, konteks yang nyata, dan dampak yang bisa diperiksa orang lain — bukti, bukan kata sifat."
       }
      }
     ],
     "quote": {
      "en": "Recruiters buy evidence, not adjectives.",
      "id": "Perekrut membeli bukti, bukan kata sifat."
     }
    },
    {
     "n": "2.2",
     "title": {
      "en": "LinkedIn Profile Optimisation — Structure, Content, and Strategy",
      "id": "Optimasi Profil LinkedIn — Struktur, Konten, dan Strategi"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "LinkedIn is not an online CV; it is a search result. Recruiters query it like a database, and profiles are found — or not — by the same fields every time. This lesson optimises each field in the order recruiters actually read them.",
      "id": "LinkedIn bukan CV versi daring; ia adalah hasil pencarian. Perekrut menelusurinya seperti basis data, dan profil ditemukan — atau tidak — lewat kolom yang sama setiap kali. Pelajaran ini mengoptimalkan setiap kolom sesuai urutan yang benar-benar dibaca perekrut."
     },
     "objectives": [
      {
       "en": "Write a headline that answers a recruiter's query, not a motto.",
       "id": "Menulis headline yang menjawab kueri pencarian perekrut, bukan moto hidup."
      },
      {
       "en": "Build an About section with the pyramid: who, evidence, direction, ask.",
       "id": "Menyusun bagian About dengan struktur piramida: siapa kamu, bukti, arah, ajakan."
      },
      {
       "en": "Turn experience entries into the same evidence lines your CV carries — plus media artefacts.",
       "id": "Mengubah entri pengalaman menjadi baris-baris bukti yang sama dengan di CV-mu — ditambah artefak media."
      }
     ],
     "takeaways": [
      {
       "en": "The headline is search real estate: role + field + one differentiator beats any inspirational quote.",
       "id": "Headline adalah lahan pencarian: peran + bidang + satu pembeda mengalahkan kutipan inspiratif mana pun."
      },
      {
       "en": "Recruiters read headline → current role → About's first two lines; optimise in that order.",
       "id": "Perekrut membaca headline → peran saat ini → dua baris pertama About; optimalkan dalam urutan itu."
      },
      {
       "en": "A profile with artefacts — projects, documents, links — converts a viewer into a caller.",
       "id": "Profil yang punya artefak — proyek, dokumen, tautan — mengubah orang yang sekadar melihat menjadi orang yang menghubungimu."
      }
     ],
     "sections": [
      {
       "icon": "target",
       "h": {
        "en": "Headline and photo — the search result",
        "id": "Headline dan foto — hasil pencarianmu"
       },
       "body": {
        "en": "Recruiters search titles, skills and fields; your headline is matched against those queries. Formula for students and fresh graduates: <b>target role or field + strongest evidence tag + availability</b> — “Data Analyst (fresh graduate) · Finalist, National Statistics Olympiad · Open to work, Jakarta/remote”. Not “Dreamer | Learner | Future CEO”: nobody searches those words. The photo needs three properties only — recent, clear face, neutral background; the banner is free space for one line of proof (a dashboard screenshot, an event you ran). Fifteen minutes of work, permanent search visibility gain.",
        "id": "Perekrut mencari berdasarkan jabatan, keterampilan, dan bidang; headline-mu dicocokkan dengan kueri-kueri itu. Rumus untuk mahasiswa dan lulusan baru: <b>peran atau bidang yang dituju + satu label bukti terkuat + ketersediaan</b> — “Data Analyst (lulusan baru) · Finalis Olimpiade Statistika Nasional · Open to work, Jakarta/remote”. Bukan “Dreamer | Learner | Future CEO”: tidak ada perekrut yang mencari kata-kata itu. Foto hanya perlu tiga hal — terbaru, wajah terlihat jelas, latar netral; banner adalah ruang gratis untuk satu baris bukti (tangkapan layar dasbor, acara yang kamu selenggarakan). Lima belas menit kerja, hasilnya visibilitas pencarian yang permanen."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "About — four short paragraphs",
        "id": "About — empat paragraf pendek"
       },
       "body": {
        "en": "Only the first two lines show before “see more”, so the pyramid applies. <b>Line 1–2:</b> who you are and the one thing you want a reader to remember — “Final-year informatics student who builds data tools organisations actually use.” <b>Paragraph 2:</b> two or three evidence bullets, straight from the CV's strongest lines. <b>Paragraph 3:</b> direction — what you are looking for, which problems pull you. <b>Paragraph 4:</b> the ask and the contact — “Open to analyst roles from June; reachable at …”. Write it in first person, in your own voice; profiles that read like press releases repel the humans who passed the search stage.",
        "id": "Hanya dua baris pertama yang tampil sebelum tombol “lihat selengkapnya”, jadi prinsip piramida berlaku. <b>Baris 1–2:</b> siapa kamu, dan satu hal yang ingin kamu tinggalkan di ingatan pembaca — “Mahasiswa informatika tingkat akhir yang membangun alat data yang benar-benar dipakai organisasi.” <b>Paragraf 2:</b> dua atau tiga butir bukti, diambil langsung dari baris terkuat CV-mu. <b>Paragraf 3:</b> arah — apa yang kamu cari, masalah seperti apa yang menarikmu. <b>Paragraf 4:</b> ajakan dan kontak — “Terbuka untuk peran analis mulai Juni; bisa dihubungi di …”. Tulis dengan kata ganti orang pertama dan suaramu sendiri; profil yang terbaca seperti siaran pers justru mengusir manusia yang sudah menemukanmu lewat pencarian."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "Experience, skills, and artefacts",
        "id": "Pengalaman, keterampilan, dan artefak"
       },
       "body": {
        "en": "Each experience entry gets the CV treatment: scope line plus two or three evidence bullets with numbers. Then the layer a CV cannot carry: <b>media</b> — attach the actual dashboard, the event report, the publication, the repository. Skills: pin the three that match your target searches (they weight matching); collect endorsements from people who genuinely saw the work. Recommendations: one paragraph from a lecturer or internship supervisor who can name something specific outweighs ten generic endorsements. Activity: commenting substantively in your field occasionally keeps the profile alive in feeds — but the profile fields above do the actual converting.",
        "id": "Setiap entri pengalaman mendapat perlakuan yang sama seperti di CV: satu baris lingkup, lalu dua atau tiga butir bukti dengan angka. Kemudian lapisan yang tidak bisa dibawa oleh CV: <b>media</b> — lampirkan dasbornya langsung, laporan acaranya, publikasinya, repositorinya. Keterampilan: sematkan tiga yang paling cocok dengan pencarian targetmu (kecocokan ini diberi bobot); kumpulkan endorsement dari orang yang benar-benar melihat hasil kerjamu. Rekomendasi: satu paragraf dari dosen atau pembimbing magang yang bisa menyebut sesuatu yang spesifik mengalahkan sepuluh endorsement generik. Aktivitas: sesekali berkomentar dengan isi yang bernas di bidangmu menjaga profil tetap hidup di linimasa — tapi kolom-kolom profil di ataslah yang benar-benar mengubah pengunjung menjadi peluang."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Motto headlines",
         "id": "Headline berisi moto"
        },
        "fix": {
         "en": "“Aspiring professional | Lifelong learner” matches zero recruiter queries. Role + field + differentiator.",
         "id": "“Aspiring professional | Lifelong learner” tidak cocok dengan satu pun kueri perekrut. Peran + bidang + pembeda."
        }
       },
       {
        "h": {
         "en": "Empty Open-to-Work settings",
         "id": "Fitur Open to Work dibiarkan kosong"
        },
        "fix": {
         "en": "Set target titles and locations in the Open to Work tool — recruiters filter on those fields directly.",
         "id": "Isi jabatan dan lokasi yang kamu incar di fitur Open to Work — perekrut menyaring langsung berdasarkan kolom-kolom itu."
        }
       },
       {
        "h": {
         "en": "Connection begging without context",
         "id": "Meminta koneksi tanpa konteks"
        },
        "fix": {
         "en": "Every connect request to a stranger carries one line of why — the 4.3 cold-message craft in miniature.",
         "id": "Setiap permintaan koneksi ke orang yang belum kenal harus membawa satu baris alasan — versi mini dari keterampilan pesan perkenalan di 4.3."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "Which headline gets found by a recruiter searching “data analyst Jakarta fresh graduate”?",
        "id": "Headline mana yang akan ditemukan perekrut yang mencari “data analyst Jakarta fresh graduate”?"
       },
       "options": [
        {
         "en": "“Turning dreams into data-driven reality ✨”",
         "id": "“Mengubah mimpi menjadi kenyataan berbasis data ✨”"
        },
        {
         "en": "“Data Analyst (fresh graduate) · Python & SQL · Statistics Olympiad finalist · Jakarta”",
         "id": "“Data Analyst (lulusan baru) · Python & SQL · Finalis Olimpiade Statistika · Jakarta”"
        },
        {
         "en": "“Student at University of Indonesia”",
         "id": "“Mahasiswa Universitas Indonesia”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "It contains the searched title, level, skills and location as literal strings — the headline is a search index entry, not a slogan.",
        "id": "Headline itu memuat jabatan, level, keterampilan, dan lokasi yang dicari, persis dengan kata-kata yang diketik — headline adalah entri indeks pencarian, bukan slogan."
       }
      }
     ],
     "tool": {
      "id": "studio",
      "mode": "linkedin",
      "title": {
       "en": "Audit your profile now",
       "id": "Audit profilmu sekarang"
      },
      "body": {
       "en": "Paste your headline, About and bullets into the LinkedIn optimiser — it applies this lesson's rules on your device and hands back rewrite scaffolds from your own words.",
       "id": "Tempel headline, About, dan butir pengalamanmu ke pengoptimal LinkedIn — alat ini menerapkan aturan pelajaran ini langsung di perangkatmu dan mengembalikan kerangka penulisan ulang yang disusun dari kata-katamu sendiri."
      },
      "cta": {
       "en": "Open the LinkedIn optimiser →",
       "id": "Buka pengoptimal LinkedIn →"
      }
     }
    },
    {
     "n": "2.3",
     "title": {
      "en": "CV and Resume Development — From Template to Competitive Document",
      "id": "Menyusun CV dan Resume — Dari Templat Menjadi Dokumen yang Kompetitif"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The CV is your funnel's single highest-leverage document: one page that must survive software parsing, a six-second human scan, and a five-minute deep read — in that order. This lesson builds it section by section, from the master CV down to the tailored copy.",
      "id": "CV adalah dokumen dengan daya ungkit tertinggi di corongmu: satu halaman yang harus lolos dari pembacaan mesin, pindaian manusia selama enam detik, dan pembacaan mendalam selama lima menit — dalam urutan itu. Pelajaran ini membangunnya bagian demi bagian, dari CV induk sampai versi yang disesuaikan untuk setiap lamaran."
     },
     "objectives": [
      {
       "en": "Structure a one-page CV in the order recruiters scan.",
       "id": "Menyusun CV satu halaman dalam urutan yang dipindai perekrut."
      },
      {
       "en": "Write experience bullets with the action–scope–result pattern.",
       "id": "Menulis butir pengalaman dengan pola tindakan–lingkup–hasil."
      },
      {
       "en": "Run the tailoring pass: master CV to JD-specific version in 20 minutes.",
       "id": "Menjalankan proses penyesuaian: dari CV induk menjadi versi khusus untuk satu lowongan dalam 20 menit."
      }
     ],
     "takeaways": [
      {
       "en": "One page, newest first, evidence everywhere — the format argument ended years ago.",
       "id": "Satu halaman, yang terbaru di atas, bukti di setiap baris — perdebatan soal format sudah selesai bertahun-tahun lalu."
      },
      {
       "en": "Each bullet is a sentence-length proof: strong verb, real scope, measured result.",
       "id": "Setiap butir adalah pembuktian sepanjang satu kalimat: kata kerja yang kuat, lingkup yang nyata, hasil yang terukur."
      },
      {
       "en": "The tailoring pass — reorder, rephrase, cut — is where average CVs become interview invitations.",
       "id": "Proses penyesuaian — susun ulang, ubah kata, potong — adalah tempat CV biasa-biasa saja berubah menjadi undangan wawancara."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "Architecture of the page",
        "id": "Arsitektur halaman"
       },
       "body": {
        "en": "Top block: name, target-role line, city, phone, professional email, LinkedIn — no photo, age, religion or marital status unless the market segment explicitly requires them (many Indonesian corporates no longer do; follow each employer's instructions). Then, for students: <b>Education</b> (degree, university, years, GPA if it helps, 2–3 achievement bullets) → <b>Experience</b> (internships, organisations, part-time — treated identically: scope + results) → <b>Projects</b> (often your strongest section: real artefacts) → <b>Skills & certifications</b> (grouped, specific versions and levels) → optional one-line interests. Whitespace is structure: 11pt minimum, real margins, no tables or text boxes — Module 6 explains why the machines demand this too.",
        "id": "Blok teratas: nama, satu baris peran yang dituju, kota, telepon, email profesional, LinkedIn — tanpa foto, umur, agama, atau status pernikahan, kecuali segmen pasarnya secara tegas mensyaratkannya (banyak korporasi Indonesia sudah tidak lagi memintanya; ikuti instruksi setiap perusahaan). Kemudian, untuk mahasiswa: <b>Pendidikan</b> (gelar, universitas, tahun, IPK kalau membantu, 2–3 butir prestasi) → <b>Pengalaman</b> (magang, organisasi, kerja paruh waktu — semuanya diperlakukan sama: lingkup + hasil) → <b>Proyek</b> (sering menjadi bagian terkuatmu: artefak yang nyata) → <b>Keterampilan & sertifikasi</b> (dikelompokkan, dengan versi dan tingkat yang spesifik) → satu baris minat, opsional. Ruang kosong adalah bagian dari struktur: ukuran huruf minimal 11pt, margin yang layak, tanpa tabel atau kotak teks — Modul 6 menjelaskan mengapa mesin pun menuntut hal ini."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "The bullet formula",
        "id": "Rumus butir pengalaman"
       },
       "body": {
        "en": "<b>Strong verb + what you did + scope + measured result.</b> “Rebuilt the member database (400 records, 3 faculties), cutting event-invite errors from ~30/event to under 5.” Verbs carry the competency: led, built, negotiated, analysed, redesigned — never “was responsible for”, which describes a chair, not a person. Scope numbers (team size, budget, users, rows) make small things respectable: recruiters know student scale; what they are reading for is whether you measure your own work. No result yet? Use the honest fallback: state what it enabled — “used by the next two committees”.",
        "id": "<b>Kata kerja kuat + apa yang kamu lakukan + lingkup + hasil terukur.</b> “Membangun ulang basis data anggota (400 data, 3 fakultas), sehingga kesalahan undangan acara turun dari ~30 per acara menjadi di bawah 5.” Kata kerjanya membawa kompetensi: memimpin, membangun, menegosiasikan, menganalisis, merancang ulang — jangan pernah memakai “bertanggung jawab atas”, karena itu menggambarkan sebuah kursi, bukan seseorang. Angka lingkup (ukuran tim, anggaran, jumlah pengguna, jumlah baris) membuat hal kecil pun terhormat: perekrut tahu skala kegiatan mahasiswa; yang mereka cari adalah apakah kamu mengukur hasil kerjamu sendiri. Belum ada hasil? Pakai cadangan yang jujur: sebutkan apa yang dimungkinkannya — “dipakai oleh dua kepanitiaan berikutnya”."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The 20-minute tailoring pass",
        "id": "Proses penyesuaian 20 menit"
       },
       "body": {
        "en": "From master CV to submission copy: <b>1.</b> Highlight the JD's five heaviest requirements (repeated words, first-listed items). <b>2.</b> Reorder your bullets so the ones answering those requirements lead each section. <b>3.</b> Rephrase to their vocabulary where truthful — their “stakeholder management” for your “coordinated with faculty and sponsors”. <b>4.</b> Cut what serves no requirement (the master keeps it forever). <b>5.</b> Rewrite the target-role line to name their role. Run the Screening Gym's ATS check as the final gate: it reads your CV against the JD on-device and shows the keyword coverage a machine would see.",
        "id": "Dari CV induk ke versi yang dikirim: <b>1.</b> Tandai lima persyaratan terberat di deskripsi lowongan (kata yang diulang, butir yang disebut paling awal). <b>2.</b> Susun ulang butir-butirmu sehingga yang menjawab persyaratan itu berada di urutan teratas setiap bagian. <b>3.</b> Sesuaikan kata-katanya dengan kosakata mereka, selama masih jujur — “stakeholder management” versi mereka untuk “berkoordinasi dengan fakultas dan sponsor” versimu. <b>4.</b> Potong apa pun yang tidak menjawab persyaratan (CV induk tetap menyimpannya). <b>5.</b> Tulis ulang baris peran yang dituju dengan nama peran mereka. Jalankan pemeriksa ATS di Screening Gym sebagai gerbang terakhir: ia membaca CV-mu terhadap deskripsi lowongan langsung di perangkatmu dan menunjukkan cakupan kata kunci seperti yang akan dilihat mesin."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "Same internship, two bullets",
        "id": "Magang yang sama, dua butir yang berbeda"
       },
       "q": {
        "en": "Marketing internship at a local startup",
        "id": "Magang pemasaran di sebuah startup lokal"
       },
       "weak": {
        "en": "“Responsible for social media management and helping the marketing team with various tasks including content creation.”",
        "id": "“Bertanggung jawab mengelola media sosial dan membantu tim pemasaran dalam berbagai tugas termasuk pembuatan konten.”"
       },
       "strong": {
        "en": "“Ran 3 Instagram campaigns (12 posts, Rp 2m ad budget): follower base +18% in 10 weeks; best campaign drove 240 sign-ups — adopted as the template for two later launches.”",
        "id": "“Menjalankan 3 kampanye Instagram (12 unggahan, anggaran iklan Rp 2 juta): pengikut bertambah 18% dalam 10 minggu; kampanye terbaik menghasilkan 240 pendaftaran — diadopsi sebagai templat untuk dua peluncuran berikutnya.”"
       },
       "why": {
        "en": "Verb, scope, numbers, and an adoption verdict — four proofs in one line, and three ready-made interview stories.",
        "id": "Kata kerja, lingkup, angka, dan bukti bahwa karyamu diadopsi — empat pembuktian dalam satu baris, plus tiga cerita wawancara yang siap pakai."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "The strongest section for a student with no internships yet is usually:",
        "id": "Bagian terkuat di CV seorang mahasiswa yang belum pernah magang biasanya adalah:"
       },
       "options": [
        {
         "en": "A long skills list to compensate",
         "id": "Daftar keterampilan yang panjang sebagai kompensasi"
        },
        {
         "en": "Projects — real artefacts with scope and results, from courses, competitions or personal work",
         "id": "Proyek — artefak nyata dengan lingkup dan hasil, dari tugas kuliah, kompetisi, atau karya pribadi"
        },
        {
         "en": "A detailed hobbies section showing personality",
         "id": "Bagian hobi yang terperinci untuk menunjukkan kepribadian"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Projects prove capability with checkable artefacts — the same evidence rule, no employer required.",
        "id": "Proyek membuktikan kemampuan lewat artefak yang bisa diperiksa — aturan bukti yang sama, tanpa perlu pernah bekerja di perusahaan."
       }
      }
     ],
     "tool": {
      "id": "studio",
      "mode": "cv",
      "title": {
       "en": "Build the document in the studio",
       "id": "Bangun dokumennya di studio"
      },
      "body": {
       "en": "The CV studio assembles an ATS-clean draft section by section, lints it against this lesson's rules, and exports plain text you can drop into any template.",
       "id": "Studio CV merakit draf yang ramah ATS bagian demi bagian, memeriksanya terhadap aturan pelajaran ini, dan mengekspor teks polos yang bisa kamu masukkan ke templat mana pun."
      },
      "cta": {
       "en": "Open the CV studio →",
       "id": "Buka studio CV →"
      }
     }
    },
    {
     "n": "2.4",
     "title": {
      "en": "Cover Letter Strategy — Purpose, Structure, and Personalisation",
      "id": "Strategi Surat Lamaran — Tujuan, Struktur, dan Personalisasi"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Most cover letters are read for ten seconds, because most deserve ten seconds. The few that work do one job: they answer “why us, why you, why now” in under 250 words with evidence the CV already carries — arranged as an argument, not a plea.",
      "id": "Kebanyakan surat lamaran hanya dibaca sepuluh detik, karena kebanyakan memang hanya layak dibaca sepuluh detik. Sedikit surat yang berhasil menjalankan satu tugas: menjawab “mengapa kami, mengapa kamu, mengapa sekarang” dalam kurang dari 250 kata, dengan bukti yang sudah ada di CV — disusun sebagai argumen, bukan permohonan."
     },
     "objectives": [
      {
       "en": "Decide when a cover letter matters and when it is skipped.",
       "id": "Memutuskan kapan surat lamaran penting, dan kapan sebaiknya dilewati."
      },
      {
       "en": "Write the four-paragraph argument: hook, fit evidence, company knowledge, close.",
       "id": "Menulis argumen empat paragraf: pembuka yang mengait, bukti kecocokan, pengetahuan tentang perusahaan, penutup."
      },
      {
       "en": "Personalise at the only two points where personalisation is read.",
       "id": "Mempersonalisasi surat hanya di dua titik yang benar-benar dibaca."
      }
     ],
     "takeaways": [
      {
       "en": "A cover letter earns its read by saying something the CV cannot: the why and the fit narrative.",
       "id": "Surat lamaran layak dibaca kalau ia mengatakan sesuatu yang tidak bisa dikatakan CV: alasanmu, dan cerita mengapa kamu cocok."
      },
      {
       "en": "Generic letters are worse than none — “your esteemed company” signals mass production instantly.",
       "id": "Surat yang generik lebih buruk daripada tidak ada surat sama sekali — “perusahaan yang terhormat” langsung menandakan produksi massal."
      },
      {
       "en": "250 words, four paragraphs, zero adjectives about yourself that a stranger could not check.",
       "id": "250 kata, empat paragraf, dan nol kata sifat tentang dirimu yang tidak bisa diperiksa orang asing."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "When it matters",
        "id": "Kapan surat lamaran penting"
       },
       "body": {
        "en": "Skip it where the portal marks it optional and the role is high-volume technical screening — nobody reads it before the test. Write it where: the application goes to a named human (smaller firms, direct emails); the JD asks for one (an instruction-following test in itself); you are switching fields and the CV alone cannot explain the jump; or you have a genuine, specific reason for this company that gives you an edge. In those cases the letter is your only channel for narrative — the CV proves capability, the letter argues fit.",
        "id": "Lewati kalau portalnya menandainya opsional dan perannya melewati penyaringan teknis bervolume tinggi — tidak ada yang membacanya sebelum tes. Tulis kalau: lamaranmu sampai ke manusia dengan nama jelas (perusahaan kecil, email langsung); deskripsi lowongan memintanya (ini sendiri sudah tes kepatuhan pada instruksi); kamu pindah bidang dan CV saja tidak bisa menjelaskan lompatannya; atau kamu punya alasan yang tulus dan spesifik untuk perusahaan ini yang memberimu keunggulan. Dalam kasus-kasus itu, surat adalah satu-satunya kanal untuk bercerita — CV membuktikan kemampuan, surat memperjuangkan kecocokan."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "The four-paragraph argument",
        "id": "Argumen empat paragraf"
       },
       "body": {
        "en": "<b>P1 — the hook (2 sentences):</b> the role, and your single strongest, most relevant proof — “I'm applying for the junior analyst role; last year I built the sales dashboard a 40-store retailer still uses for weekly decisions.” Never “I am writing to express my interest”, which expresses nothing. <b>P2 — fit evidence:</b> two requirements from the JD, each answered by one concrete result from your history. <b>P3 — why them (2 sentences):</b> one specific, checkable fact about the company that genuinely connects to you — a product you used, a report they published, a market they entered. <b>P4 — the close:</b> availability, one line of thanks, no begging. Under 250 words total; white space is confidence.",
        "id": "<b>P1 — pembuka yang mengait (2 kalimat):</b> perannya, dan satu bukti terkuatmu yang paling relevan — “Saya melamar posisi analis junior; tahun lalu saya membangun dasbor penjualan yang sampai sekarang dipakai peritel dengan 40 toko untuk keputusan mingguan.” Jangan pernah membuka dengan “Melalui surat ini saya bermaksud menyampaikan minat”, yang tidak menyampaikan apa pun. <b>P2 — bukti kecocokan:</b> dua persyaratan dari deskripsi lowongan, masing-masing dijawab dengan satu hasil konkret dari riwayatmu. <b>P3 — mengapa mereka (2 kalimat):</b> satu fakta spesifik dan bisa diperiksa tentang perusahaan itu yang benar-benar berhubungan denganmu — produk yang kamu pakai, laporan yang mereka terbitkan, pasar yang baru mereka masuki. <b>P4 — penutup:</b> ketersediaanmu, satu baris terima kasih, tanpa memohon. Totalnya di bawah 250 kata; ruang kosong menunjukkan kepercayaan diri."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Personalisation that gets read",
        "id": "Personalisasi yang benar-benar dibaca"
       },
       "body": {
        "en": "Readers check exactly two personalisation points: the opening proof (is it about their role?) and paragraph three (is it about their company, or copy-pasted?). Personalising anything else is invisible effort. Efficient workflow: keep a four-paragraph skeleton; per application, swap the P1 proof to match the JD's top requirement and research one real P3 fact (five minutes on their news page or product). AI drafting tools can help with fluency here — Module 8 covers using them without producing the generic sludge recruiters now recognise on sight.",
        "id": "Pembaca hanya memeriksa dua titik personalisasi: bukti di paragraf pembuka (apakah ini tentang peran mereka?) dan paragraf ketiga (apakah ini tentang perusahaan mereka, atau hasil salin-tempel?). Mempersonalisasi bagian lain adalah usaha yang tidak terlihat. Alur kerja yang efisien: simpan satu kerangka empat paragraf; untuk setiap lamaran, ganti bukti di P1 agar cocok dengan persyaratan utama lowongan, dan riset satu fakta nyata untuk P3 (lima menit di halaman berita atau produk mereka). Alat penyusun draf berbasis AI bisa membantu kelancaran bahasa di sini — Modul 8 membahas cara memakainya tanpa menghasilkan teks generik yang kini langsung dikenali perekrut dalam sekali lihat."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "Opening paragraph — plea vs proof",
        "id": "Paragraf pembuka — permohonan vs bukti"
       },
       "q": {
        "en": "Junior analyst application",
        "id": "Lamaran untuk posisi analis junior"
       },
       "weak": {
        "en": "“I am writing to express my sincere interest in the Junior Analyst position at your esteemed company. As a highly motivated fresh graduate with a passion for data, I believe I would be a valuable asset to your team.”",
        "id": "“Melalui surat ini saya bermaksud menyampaikan ketertarikan yang tulus pada posisi Junior Analyst di perusahaan Bapak/Ibu yang terhormat. Sebagai lulusan baru yang sangat termotivasi dan bersemangat pada data, saya yakin dapat menjadi aset berharga bagi tim.”"
       },
       "strong": {
        "en": "“I'm applying for the Junior Analyst role. Last semester I analysed three years of sales data for a 40-store retailer as my thesis project — my stock-allocation findings are now part of their quarterly planning, and that is the kind of work I want to do for your merchant analytics team.”",
        "id": "“Saya melamar posisi Junior Analyst. Semester lalu saya menganalisis tiga tahun data penjualan sebuah peritel dengan 40 toko sebagai proyek skripsi — temuan saya tentang alokasi stok kini menjadi bagian dari perencanaan kuartalan mereka, dan pekerjaan seperti itulah yang ingin saya lakukan untuk tim analitik merchant Bapak/Ibu.”"
       },
       "why": {
        "en": "The strong opening spends its ten seconds on a checkable result tied to their team's actual work — motivation is demonstrated, not declared.",
        "id": "Pembuka yang kuat memakai sepuluh detiknya untuk hasil yang bisa diperiksa dan terkait langsung dengan pekerjaan tim mereka — motivasi ditunjukkan, bukan dinyatakan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Paragraph 3 (“why them”) should contain:",
        "id": "Paragraf 3 (“mengapa mereka”) seharusnya berisi:"
       },
       "options": [
        {
         "en": "Praise for the company's excellent reputation and work culture",
         "id": "Pujian atas reputasi dan budaya kerja perusahaan yang unggul"
        },
        {
         "en": "One specific, checkable fact about the company genuinely connected to your interest",
         "id": "Satu fakta spesifik dan bisa diperiksa tentang perusahaan itu, yang benar-benar berhubungan dengan minatmu"
        },
        {
         "en": "A summary of your top three strengths",
         "id": "Ringkasan tiga kekuatan utamamu"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Generic praise is mass-production evidence; a specific fact proves research and genuine intent — the only thing P3 exists to prove.",
        "id": "Pujian generik adalah bukti produksi massal; fakta yang spesifik membuktikan kamu sudah riset dan sungguh-sungguh berminat — satu-satunya hal yang perlu dibuktikan P3."
       }
      }
     ],
     "listen": [
      {
       "label": {
        "en": "A strong opening paragraph, read aloud",
        "id": "Paragraf pembuka yang kuat, dibacakan"
       },
       "text": {
        "en": "I'm applying for the junior analyst role. Last semester I analysed three years of sales data for a forty store retailer as my thesis project. My stock allocation findings are now part of their quarterly planning, and that is the kind of work I want to do for your merchant analytics team.",
        "id": "Saya melamar posisi analis junior. Semester lalu saya menganalisis tiga tahun data penjualan sebuah peritel dengan empat puluh toko sebagai proyek skripsi. Temuan saya tentang alokasi stok kini menjadi bagian dari perencanaan kuartalan mereka, dan pekerjaan seperti itulah yang ingin saya lakukan untuk tim analitik merchant Bapak dan Ibu."
       }
      }
     ],
     "tool": {
      "id": "studio",
      "mode": "letter",
      "title": {
       "en": "Draft the letter from your own evidence",
       "id": "Susun suratnya dari buktimu sendiri"
      },
      "body": {
       "en": "Answer five questions and the developer assembles them into the four-paragraph structure, then checks the draft against the JD you paste — mirroring included.",
       "id": "Jawab lima pertanyaan, dan alat penyusun surat merangkainya ke dalam struktur empat paragraf, lalu memeriksa drafnya terhadap deskripsi lowongan yang kamu tempel — termasuk menyelaraskan istilah."
      },
      "cta": {
       "en": "Open the letter developer →",
       "id": "Buka penyusun surat →"
      }
     }
    }
   ],
   "hero": "../../assets/bg/gauntlet/gate-01-submission.jpg",
   "heroPos": "center 35%"
  },
  {
   "num": 3,
   "title": {
    "en": "Screening Test Preparation — Psychometric &amp; Aptitude Test Simulation",
    "id": "Persiapan Tes Seleksi — Simulasi Tes Psikometri &amp; Bakat"
   },
   "overview": {
    "en": "Module 3 of The Pack focuses on screening test preparation — psychometric &amp; aptitude test simulation. Work through the lessons in order — each builds on the last.",
    "id": "Modul 3 The Pack menyiapkanmu menghadapi tes seleksi lewat simulasi tes psikometri &amp; bakat. Kerjakan pelajarannya berurutan — setiap pelajaran menjadi pijakan bagi pelajaran berikutnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply screening test preparation — psychometric &amp; aptitude test simulation to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu punya metode yang konkret dan bisa diulang untuk menghadapi tes psikometri dan tes bakat — dari rencana latihan sampai pengaturan tempo di hari tes."
   },
   "lessons": [
    {
     "n": "3.1",
     "title": {
      "en": "Introduction to Psychometric and Aptitude Assessments",
      "id": "Pengantar Asesmen Psikometri dan Tes Bakat"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Psychometric tests feel like judgment day; they are actually the most trainable stage of the funnel. This lesson maps the test landscape — what each type measures, how scores are used, and why practice moves results more than talent does.",
      "id": "Tes psikometri terasa seperti hari penghakiman; padahal inilah tahap corong yang paling bisa dilatih. Pelajaran ini memetakan lanskap tesnya — apa yang diukur setiap jenis tes, bagaimana skornya dipakai, dan mengapa latihan lebih menentukan hasil daripada bakat."
     },
     "objectives": [
      {
       "en": "Identify the main test families: numerical, verbal, logical, personality, situational.",
       "id": "Mengenali keluarga tes utama: numerik, verbal, logika, kepribadian, dan situasional."
      },
      {
       "en": "Explain how employers actually use scores — cutoffs, norms and profiles.",
       "id": "Menjelaskan bagaimana perusahaan benar-benar memakai skor — ambang batas, kelompok norma, dan profil."
      },
      {
       "en": "Set up a practice plan calibrated to your weakest family.",
       "id": "Menyusun rencana latihan yang disesuaikan dengan keluarga tes terlemahmu."
      }
     ],
     "takeaways": [
      {
       "en": "Aptitude scores respond strongly to familiarity: format practice removes the noise that hides your real level.",
       "id": "Skor tes bakat sangat dipengaruhi keakraban: latihan format menyingkirkan gangguan yang menyembunyikan kemampuan aslimu."
      },
      {
       "en": "You are scored against a norm group, usually as a cutoff — the goal is clearing the bar, not perfection.",
       "id": "Kamu dinilai relatif terhadap kelompok norma, biasanya lewat ambang batas — tujuannya melewati batas itu, bukan menjadi sempurna."
      },
      {
       "en": "Personality tests have no cheat code worth using: gamed answers produce jobs that fit the mask, not you.",
       "id": "Tes kepribadian tidak punya trik curang yang layak dicoba: jawaban yang direkayasa menghasilkan pekerjaan yang cocok untuk topengmu, bukan untuk dirimu."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "The test families",
        "id": "Keluarga-keluarga tes"
       },
       "body": {
        "en": "<b>Numerical reasoning:</b> percentages, ratios, rates of change read from tables and charts — business arithmetic under time, not calculus. <b>Verbal reasoning:</b> a passage plus statements to judge true / false / cannot say — reading precision, not vocabulary. <b>Logical/abstract:</b> sequences and matrices of shapes — pattern induction with no language at all. <b>Personality inventories:</b> work-style questionnaires with no time limit and, properly speaking, no wrong answers. <b>Situational judgment:</b> workplace scenarios asking which response is most and least effective. The first three are the trainable wall most candidates hit; the Screening Gym drills exactly those.",
        "id": "<b>Penalaran numerik:</b> persentase, rasio, laju perubahan yang dibaca dari tabel dan grafik — aritmetika bisnis di bawah tekanan waktu, bukan kalkulus. <b>Penalaran verbal:</b> sebuah bacaan plus pernyataan yang harus dinilai benar / salah / tidak bisa disimpulkan — ketelitian membaca, bukan kosakata. <b>Logika/abstrak:</b> deret dan matriks bentuk — menemukan pola tanpa bahasa sama sekali. <b>Inventori kepribadian:</b> kuesioner gaya kerja tanpa batas waktu dan, sesungguhnya, tanpa jawaban yang salah. <b>Penilaian situasional:</b> skenario di tempat kerja yang menanyakan respons mana yang paling dan paling tidak efektif. Tiga jenis pertama adalah tembok yang ditabrak kebanyakan kandidat, dan bisa dilatih; Screening Gym melatih persis ketiganya."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "How scores are used",
        "id": "Bagaimana skor dipakai"
       },
       "body": {
        "en": "Your raw score is converted to a percentile against a norm group — other graduates, or past applicants to this employer. Most companies apply a <b>cutoff</b> (say, 40th–60th percentile) as a pass/fail gate; some rank the pool and take the top slice. Two consequences. First, you do not need brilliance — you need to clear a bar most prepared candidates clear. Second, speed–accuracy trade-offs matter: many tests penalise nothing for skipping but everything for wrong streaks under guessing; the drill sets teach you your own optimal pace. Personality profiles are read differently — as fit flags and interview probes, not pass/fail.",
        "id": "Skor mentahmu diubah menjadi persentil terhadap sebuah kelompok norma — lulusan lain, atau para pelamar sebelumnya di perusahaan itu. Kebanyakan perusahaan menerapkan <b>ambang batas</b> (misalnya persentil 40–60) sebagai gerbang lulus/gagal; sebagian lagi memeringkat seluruh pelamar dan mengambil lapisan teratas. Dua konsekuensinya. Pertama, kamu tidak perlu jenius — kamu hanya perlu melewati batas yang dilewati sebagian besar kandidat yang siap. Kedua, pertukaran antara kecepatan dan ketepatan itu penting: banyak tes tidak menghukum soal yang dilewati, tapi menghukum deretan jawaban salah akibat menebak; set latihan mengajarimu tempo optimalmu sendiri. Profil kepribadian dibaca dengan cara berbeda — sebagai penanda kecocokan dan bahan pertanyaan wawancara, bukan lulus/gagal."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The practice effect, honestly stated",
        "id": "Efek latihan, dinyatakan apa adanya"
       },
       "body": {
        "en": "Research on test preparation consistently shows meaningful score gains from familiarity and practice — largest for candidates new to the format. The mechanism is mundane: knowing the question types, the interface, and your pacing frees working memory for the actual reasoning. That is why this module sequences <b>learn the theory (3.3) → drill untimed → drill timed (3.4) → review every miss</b>. The review step carries most of the gain: each wrong answer in the Gym comes with a worked explanation, and an error understood is an error retired.",
        "id": "Riset tentang persiapan tes secara konsisten menunjukkan kenaikan skor yang berarti berkat keakraban dan latihan — paling besar pada kandidat yang belum pernah mengenal formatnya. Mekanismenya sederhana: mengenal jenis soal, tampilan tesnya, dan tempo mengerjakan membebaskan memori kerja untuk penalaran yang sesungguhnya. Itulah mengapa modul ini diurutkan begini: <b>pelajari teorinya (3.3) → berlatih tanpa waktu → berlatih dengan waktu (3.4) → tinjau setiap kesalahan</b>. Langkah tinjauan menyumbang sebagian besar kenaikan: setiap jawaban salah di Gym disertai pembahasan lengkap, dan kesalahan yang sudah dipahami adalah kesalahan yang tidak akan terulang."
       }
      }
     ],
     "diagram": {
      "type": "quad",
      "exhibit": {
       "en": "Exhibit 1: The test landscape by what is measured and how it is scored.",
       "id": "Peraga 1: Lanskap tes menurut apa yang diukur dan bagaimana dinilai."
      },
      "title": {
       "en": "Test families",
       "id": "Keluarga tes"
      },
      "items": [
       {
        "h": {
         "en": "Numerical",
         "id": "Numerik"
        },
        "sub": {
         "en": "Business arithmetic under time · cutoff scored",
         "id": "Aritmetika bisnis di bawah tekanan waktu · dinilai dengan ambang batas"
        }
       },
       {
        "h": {
         "en": "Verbal",
         "id": "Verbal"
        },
        "sub": {
         "en": "True / false / cannot say precision · cutoff scored",
         "id": "Ketelitian benar / salah / tidak bisa disimpulkan · dinilai dengan ambang batas"
        }
       },
       {
        "h": {
         "en": "Logical / abstract",
         "id": "Logika / abstrak"
        },
        "sub": {
         "en": "Shape patterns, no language · cutoff scored",
         "id": "Pola bentuk, tanpa bahasa · dinilai dengan ambang batas"
        }
       },
       {
        "h": {
         "en": "Personality & SJT",
         "id": "Kepribadian & SJT"
        },
        "sub": {
         "en": "Work style and judgment · profiled, not passed",
         "id": "Gaya kerja dan penilaian situasi · diprofilkan, bukan diluluskan"
        }
       }
      ],
      "longdesc": {
       "en": "A two-by-two of test families: numerical reasoning (business arithmetic under time), verbal reasoning (statement judgment against a passage), logical or abstract reasoning (shape patterns without language) — all typically scored against a percentile cutoff — and personality plus situational judgment tests, which produce profiles and interview probes rather than pass–fail scores.",
       "id": "Matriks dua kali dua keluarga tes: penalaran numerik (aritmetika bisnis di bawah tekanan waktu), penalaran verbal (menilai pernyataan terhadap sebuah bacaan), penalaran logika atau abstrak (pola bentuk tanpa bahasa) — ketiganya biasanya dinilai terhadap ambang persentil — serta tes kepribadian dan penilaian situasional, yang menghasilkan profil dan bahan pertanyaan wawancara, bukan skor lulus–gagal."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "percentile",
        "id": "persentil"
       },
       "def": {
        "en": "Your standing against the norm group: 70th percentile means you scored above 70% of comparable test-takers.",
        "id": "Posisimu relatif terhadap kelompok norma: persentil 70 berarti skormu lebih tinggi daripada 70% peserta yang sebanding."
       }
      },
      {
       "term": {
        "en": "norm group",
        "id": "kelompok norma"
       },
       "def": {
        "en": "The comparison population — e.g. graduate applicants — whose results define what counts as a high or low score.",
        "id": "Populasi pembanding — misalnya para pelamar lulusan baru — yang hasilnya menentukan mana skor yang tergolong tinggi atau rendah."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why do format familiarity and pacing practice raise aptitude scores?",
        "id": "Mengapa keakraban dengan format dan latihan tempo bisa menaikkan skor tes bakat?"
       },
       "options": [
        {
         "en": "They do not — aptitude is fixed at birth",
         "id": "Tidak bisa — bakat sudah ditentukan sejak lahir"
        },
        {
         "en": "They free working memory from navigating the test, leaving more for the actual reasoning",
         "id": "Keduanya membebaskan memori kerja dari urusan menavigasi tes, sehingga lebih banyak yang tersisa untuk penalaran yang sesungguhnya"
        },
        {
         "en": "Test providers reward returning candidates with easier questions",
         "id": "Penyedia tes memberi soal yang lebih mudah kepada kandidat yang mengulang"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The reasoning demand is constant, but unfamiliar formats tax attention. Practice removes that tax — which is why gains are largest for first-time formats.",
        "id": "Tuntutan penalarannya tetap sama, tapi format yang asing membebani perhatian. Latihan menghapus beban itu — karena itulah kenaikan terbesar terjadi pada format yang baru pertama kali ditemui."
       }
      }
     ],
     "tool": {
      "id": "gym",
      "mode": "drill",
      "title": {
       "en": "Meet your baseline",
       "id": "Kenali titik awalmu"
      },
      "body": {
       "en": "Run one untimed set per family in the Screening Gym to find your weakest — the rest of this module builds your plan from that reading.",
       "id": "Kerjakan satu set tanpa batas waktu untuk setiap keluarga tes di Screening Gym untuk menemukan yang terlemah — sisa modul ini menyusun rencanamu dari hasil itu."
      },
      "cta": {
       "en": "Open the drills →",
       "id": "Buka latihan →"
      }
     },
     "quote": {
      "en": "The most trainable stage of the funnel is the one candidates fear most.",
      "id": "Tahap corong yang paling bisa dilatih justru tahap yang paling ditakuti kandidat."
     }
    },
    {
     "n": "3.2",
     "title": {
      "en": "Study Preparation Strategies and Time Management for Tests",
      "id": "Strategi Belajar dan Manajemen Waktu untuk Tes"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "Cramming works for facts, not for speed skills. This lesson builds your four-week test-preparation plan — distributed practice, error logs, simulated conditions — and drills the time-management decisions that decide real test sessions.",
      "id": "Sistem kebut semalam berhasil untuk menghafal fakta, tidak untuk keterampilan yang butuh kecepatan. Pelajaran ini menyusun rencana persiapan tes empat mingguanmu — latihan yang disebar, catatan kesalahan, kondisi yang disimulasikan — dan melatih keputusan-keputusan manajemen waktu yang menentukan hasil sesi tes yang sebenarnya."
     },
     "objectives": [
      {
       "en": "Build a four-week distributed practice plan around your weakest family.",
       "id": "Menyusun rencana latihan empat minggu yang disebar merata, berpusat pada keluarga tes terlemahmu."
      },
      {
       "en": "Keep an error log that converts misses into retired mistakes.",
       "id": "Menjaga catatan kesalahan yang mengubah setiap kesalahan menjadi kesalahan yang tidak terulang."
      },
      {
       "en": "Apply triage rules — answer, flag, skip — under a live clock.",
       "id": "Menerapkan aturan triase — jawab, tandai, lewati — saat jam terus berjalan."
      }
     ],
     "takeaways": [
      {
       "en": "Six 25-minute sessions a week beat one three-hour Sunday: speed skills consolidate between sessions.",
       "id": "Enam sesi 25 menit dalam seminggu mengalahkan satu sesi tiga jam di hari Minggu: keterampilan kecepatan mengendap di antara sesi-sesi latihan."
      },
      {
       "en": "The error log is the syllabus: your next session always starts from your last mistakes.",
       "id": "Catatan kesalahan adalah silabusmu: sesi berikutnya selalu dimulai dari kesalahan terakhirmu."
      },
      {
       "en": "On test day you are managing seconds-per-question, not questions — pacing is a decision, not a feeling.",
       "id": "Di hari tes, yang kamu kelola adalah detik per soal, bukan soalnya — tempo adalah keputusan, bukan perasaan."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "The four-week arc",
        "id": "Alur empat minggu"
       },
       "body": {
        "en": "<b>Week 1 — diagnose:</b> one untimed set per family in the Gym; log accuracy and time per question; name your weakest family. <b>Week 2 — technique:</b> study the frameworks (3.3) and drill your weak family untimed until accuracy stabilises above ~80%. <b>Week 3 — speed:</b> timed sets at gradually tightening pace; keep the error log religiously. <b>Week 4 — simulate:</b> full timed sets under exam conditions — phone away, one sitting, morning hours if your real test is morning. If your test date is closer than four weeks, compress but keep the order: accuracy before speed, always.",
        "id": "<b>Minggu 1 — diagnosis:</b> satu set tanpa batas waktu untuk setiap keluarga tes di Gym; catat ketepatan dan waktu per soal; tentukan keluarga tes terlemahmu. <b>Minggu 2 — teknik:</b> pelajari kerangkanya (3.3) dan latih keluarga tes terlemahmu tanpa batas waktu sampai ketepatannya stabil di atas ~80%. <b>Minggu 3 — kecepatan:</b> set berbatas waktu dengan tempo yang makin ketat; jaga catatan kesalahan dengan disiplin. <b>Minggu 4 — simulasi:</b> set penuh berbatas waktu dalam kondisi ujian — ponsel dijauhkan, sekali duduk, di jam pagi kalau tes aslimu pagi. Kalau tanggal tesmu kurang dari empat minggu lagi, padatkan tapi jaga urutannya: ketepatan dulu, baru kecepatan — selalu."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "The error log",
        "id": "Catatan kesalahan"
       },
       "body": {
        "en": "Four columns per miss: the question type (“percentage change from a table”), your wrong move (“computed change ÷ new value instead of ÷ original”), the correct principle, and a one-line rule for next time (“change ÷ original, always”). Ten minutes after every session, review the log's last two weeks. The compounding is dramatic: most candidates miss the same five question archetypes repeatedly; retiring one archetype per week can move a score more than doubling practice volume — this is Module 1's funnel logic applied to your own cognition.",
        "id": "Empat kolom untuk setiap kesalahan: jenis soal (“perubahan persentase dari tabel”), langkahmu yang salah (“membagi perubahan dengan nilai baru, bukan nilai awal”), prinsip yang benar, dan satu baris aturan untuk lain kali (“perubahan ÷ nilai awal, selalu”). Sepuluh menit setelah setiap sesi, tinjau catatan dua minggu terakhir. Efek berlipatnya dramatis: kebanyakan kandidat terus-menerus salah pada lima tipe soal yang sama; menyingkirkan satu tipe per minggu bisa menaikkan skor lebih besar daripada menggandakan volume latihan — inilah logika corong dari Modul 1 yang diterapkan pada cara berpikirmu sendiri."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 — The pacing decision",
        "id": "Latihan 1 — Keputusan soal tempo"
       },
       "body": {
        "en": "A 20-question numerical set, 20 minutes. At question 8 you have used 11 minutes — question 8 is a dense multi-step table problem you estimate needs 3 more minutes. Decide your move, then reveal.",
        "id": "Satu set numerik berisi 20 soal, waktunya 20 menit. Sampai di soal nomor 8, kamu sudah menghabiskan 11 menit — dan soal nomor 8 ini soal tabel bertingkat yang padat, kamu taksir masih perlu 3 menit lagi. Tentukan langkahmu, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Flag and skip, immediately. The arithmetic: 9 minutes remain for 13 questions (~40s each); spending 3 more on question 8 leaves ~28s each for twelve — a collapse. Skipping banks the reachable questions first, and flagged returns at the end often solve faster because a second look bypasses the first look's dead-end framing. The tell you should have moved earlier: any single question that reaches double your per-question budget. Pacing is triage — the score belongs to the set, not to any one question.",
        "id": "Tandai, lalu lewati. Sekarang juga. Hitungannya begini: sisa 9 menit untuk 13 soal, sekitar 40 detik per soal. Kalau 3 menit lagi habis di soal 8, dua belas soal sisanya cuma kebagian sekitar 28 detik masing-masing — ambruk. Dengan melewati, kamu mengamankan dulu soal-soal yang masih terjangkau; dan soal bertanda yang dikunjungi ulang di akhir sering justru lebih cepat selesai, karena pandangan kedua tidak terjebak di sudut pandang buntu yang pertama. Sinyal bahwa kamu seharusnya sudah pindah lebih awal: begitu satu soal memakan dua kali jatah waktu per soalmu. Mengatur tempo itu triase — skor milik satu set utuh, bukan milik satu soal."
       }
      },
      {
       "h": {
        "en": "Drill 2 — The night before",
        "id": "Latihan 2 — Malam menjelang tes"
       },
       "body": {
        "en": "Your test is tomorrow at 9 a.m. It is 8 p.m. and you feel underprepared in verbal. Plan tonight and tomorrow morning, then reveal.",
        "id": "Tesmu besok pukul 9 pagi. Sekarang pukul 8 malam, dan kamu merasa belum siap di bagian verbal. Susun rencana untuk malam ini dan besok pagi, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Tonight: 30 minutes reviewing the error log only — not new sets, which at this point add anxiety, not skill — then equipment check (ID, link, quiet room, charged laptop) and a normal night within your sleep window; Lesson 5.1 of The Map is literal here, because sleep debt costs more test points than any final drill adds. Morning: light breakfast, arrive or log in 20 minutes early, one warm-up set of five easy questions to start the engine — athletes warm up, test-takers should too. The counterintuitive rule: the last 12 hours are for protecting the machine, not upgrading it.",
        "id": "Malam ini: 30 menit meninjau catatan kesalahan saja — bukan mengerjakan set baru, yang pada titik ini hanya menambah cemas, bukan menambah kemampuan. Lalu cek perlengkapan (kartu identitas, tautan tes, ruangan yang tenang, laptop terisi penuh) dan tidur normal sesuai jam tidurmu. Pelajaran 5.1 The Map berlaku harfiah di sini: utang tidur menggerus lebih banyak poin daripada yang bisa disumbangkan latihan terakhir mana pun. Besok pagi: sarapan ringan, tiba atau masuk 20 menit lebih awal, lalu satu set pemanasan lima soal mudah untuk menghidupkan mesin — atlet pemanasan dulu, peserta tes juga seharusnya begitu. Aturan yang terasa berlawanan dengan naluri: 12 jam terakhir gunanya menjaga mesin, bukan meng-upgrade-nya."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Practising only your strong family because it feels good",
         "id": "Cuma melatih keluarga tes yang sudah kuat, karena rasanya menyenangkan"
        },
        "fix": {
         "en": "Scores gate on the weakest family. Schedule the uncomfortable one first, while energy is high.",
         "id": "Skormu ditentukan keluarga tes yang paling lemah. Jadwalkan yang paling tidak nyaman lebih dulu, selagi energi masih penuh."
        }
       },
       {
        "h": {
         "en": "Unlogged practice",
         "id": "Berlatih tanpa mencatat"
        },
        "fix": {
         "en": "Volume without an error log repeats mistakes at speed. Log every miss in four columns.",
         "id": "Latihan banyak tanpa catatan kesalahan hanya mengulang kesalahan yang sama dengan lebih cepat. Catat setiap jawaban salah dalam empat kolom."
        }
       },
       {
        "h": {
         "en": "First simulation on test day",
         "id": "Simulasi pertama justru di hari tes"
        },
        "fix": {
         "en": "The real interface, clock pressure and one-sitting fatigue must be old news by then — week 4 exists for this.",
         "id": "Tampilan tes yang asli, tekanan waktu, dan lelahnya mengerjakan sekali duduk harus sudah terasa biasa sebelum hari itu — minggu 4 memang ada untuk itu."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "Why does the plan demand accuracy above ~80% before adding time pressure?",
        "id": "Mengapa rencananya menuntut ketepatan di atas ~80% dulu, baru menambah tekanan waktu?"
       },
       "options": [
        {
         "en": "Because slow candidates fail anyway",
         "id": "Karena kandidat yang lambat toh akan gagal"
        },
        {
         "en": "Speeding up a wrong method automates the error; the method must be right before it is made fast",
         "id": "Karena mempercepat metode yang salah sama saja mengotomatiskan kesalahannya; metodenya harus benar dulu, baru dibuat cepat"
        },
        {
         "en": "Because 80% is the universal pass mark",
         "id": "Karena 80% adalah batas lulus yang berlaku di mana-mana"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Timed drilling consolidates whatever you practise — including mistakes. Order of operations: correct, then fast.",
        "id": "Latihan berbatas waktu memperkuat apa pun yang kamu latih — termasuk kesalahannya. Urutannya: benar dulu, baru cepat."
       }
      }
     ],
     "tool": {
      "id": "gym",
      "mode": "drill",
      "title": {
       "en": "Start week 1 now",
       "id": "Mulai minggu 1 sekarang"
      },
      "body": {
       "en": "Your diagnosis set is waiting — untimed, one per family, with worked explanations for every miss.",
       "id": "Set diagnosismu sudah menunggu — tanpa batas waktu, satu untuk tiap keluarga tes, lengkap dengan pembahasan untuk setiap jawaban yang salah."
      },
      "cta": {
       "en": "Open the Screening Gym →",
       "id": "Buka Screening Gym →"
      }
     }
    },
    {
     "n": "3.3",
     "title": {
      "en": "Core Theories — Numerical, Verbal, Logical, and Personality Frameworks",
      "id": "Teori Inti — Kerangka Numerik, Verbal, Logika, dan Kepribadian"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "slides",
     "placeholder": false,
     "overview": {
      "en": "The core technique deck: the handful of frameworks that solve most numerical, verbal and logical questions, plus how personality frameworks are read. Keep it open beside your first practice sessions.",
      "id": "Inilah dek teknik intinya: segelintir kerangka yang cukup untuk menyelesaikan sebagian besar soal numerik, verbal, dan logika, plus cara pembaca menafsirkan kerangka kepribadian. Biarkan halaman ini terbuka di samping sesi-sesi latihan pertamamu."
     },
     "objectives": [
      {
       "en": "Apply the percentage toolkit: change, reverse, and compound.",
       "id": "Menerapkan tiga alat persentase: perubahan, kebalikan, dan majemuk."
      },
      {
       "en": "Use the cannot-say discipline on verbal statements.",
       "id": "Menerapkan disiplin “tidak bisa disimpulkan” pada pernyataan verbal."
      },
      {
       "en": "Scan abstract patterns along the five standard dimensions.",
       "id": "Memindai pola abstrak lewat lima dimensi standar."
      }
     ],
     "takeaways": [
      {
       "en": "Most numerical questions are three formulas wearing different tables.",
       "id": "Sebagian besar soal numerik hanyalah tiga rumus yang sama, dibungkus tabel yang berbeda."
      },
      {
       "en": "Verbal tests measure your restraint: only what the passage says, never what you know.",
       "id": "Tes verbal mengukur kemampuanmu menahan diri: hanya yang tertulis di bacaan, bukan yang kamu tahu."
      },
      {
       "en": "Abstract patterns hide in five dimensions — scan them in order and the answer surfaces.",
       "id": "Pola abstrak bersembunyi di lima dimensi — pindai satu per satu secara berurutan, jawabannya akan muncul."
      }
     ],
     "slides": [
      {
       "h": {
        "en": "Numerical — the percentage toolkit",
        "id": "Numerik — tiga alat persentase"
       },
       "points": [
        {
         "en": "Change: (new − old) ÷ old × 100. Always divide by the ORIGINAL.",
         "id": "Perubahan: (baru − lama) ÷ lama × 100. Selalu bagi dengan nilai AWAL."
        },
        {
         "en": "Reverse: after +20%, the original is value ÷ 1.20 — never value × 0.80.",
         "id": "Kebalikan: setelah naik 20%, nilai awalnya adalah nilai ÷ 1,20 — bukan nilai × 0,80."
        },
        {
         "en": "Compound: two changes multiply — +10% then −10% is ×1.1×0.9 = ×0.99, a net loss.",
         "id": "Majemuk: dua perubahan saling dikalikan — naik 10% lalu turun 10% berarti ×1,1×0,9 = ×0,99, hasil bersihnya turun."
        },
        {
         "en": "Ratios: keep units visible; scale to a common base before comparing.",
         "id": "Rasio: satuannya selalu ditulis; samakan dasarnya dulu sebelum membandingkan."
        }
       ]
      },
      {
       "h": {
        "en": "Numerical — reading the exhibit",
        "id": "Numerik — membaca tabel dan grafik"
       },
       "points": [
        {
         "en": "Read the title, units and footnotes BEFORE the question — most traps live there (thousands, %, fiscal years).",
         "id": "Baca judul, satuan, dan catatan kaki SEBELUM membaca soal — di situlah kebanyakan jebakan disembunyikan (ribuan, %, tahun fiskal)."
        },
        {
         "en": "Estimate first: round numbers, get a magnitude, then compute only if options are close.",
         "id": "Taksir dulu: bulatkan angkanya, dapatkan kisaran besarnya, lalu hitung persis hanya kalau pilihan jawabannya berdekatan."
        },
        {
         "en": "Two-table questions: identify the joining column before touching arithmetic.",
         "id": "Soal dua tabel: temukan dulu kolom yang menghubungkan keduanya, baru menyentuh hitungan."
        }
       ]
      },
      {
       "h": {
        "en": "Verbal — true / false / cannot say",
        "id": "Verbal — benar / salah / tidak bisa disimpulkan"
       },
       "points": [
        {
         "en": "TRUE: the passage states it or it follows necessarily. FALSE: the passage contradicts it.",
         "id": "BENAR: bacaan menyatakannya, atau hal itu pasti mengikuti dari bacaan. SALAH: bacaan bertentangan dengannya."
        },
        {
         "en": "CANNOT SAY: plausible, consistent with the passage, but not established by it — the trap for well-read candidates.",
         "id": "TIDAK BISA DISIMPULKAN: masuk akal, tidak bertentangan dengan bacaan, tetapi tidak dibuktikan oleh bacaan — jebakan bagi kandidat yang banyak tahu."
        },
        {
         "en": "Outside knowledge is contamination: judge the statement against the passage alone.",
         "id": "Pengetahuan dari luar adalah kontaminasi: nilai pernyataan itu hanya berdasarkan bacaannya."
        },
        {
         "en": "Beware quantifier swaps: “some” in the passage never proves “most” in the statement.",
         "id": "Waspadai pertukaran kata jumlah: “sebagian” di bacaan tidak pernah membuktikan “sebagian besar” di pernyataan."
        }
       ]
      },
      {
       "h": {
        "en": "Logical — the five scan dimensions",
        "id": "Logika — lima dimensi pindai"
       },
       "points": [
        {
         "en": "Shape: what forms appear, appear, or vanish across the sequence?",
         "id": "Bentuk: bentuk apa yang muncul, bertambah, atau menghilang di sepanjang urutan?"
        },
        {
         "en": "Number: count elements — sides, dots, shapes — is a counter running?",
         "id": "Jumlah: hitung elemennya — sisi, titik, bangun — apakah ada penghitung yang berjalan?"
        },
        {
         "en": "Position & rotation: does anything move or turn by a fixed step?",
         "id": "Posisi & rotasi: adakah yang bergeser atau berputar dengan langkah tetap?"
        },
        {
         "en": "Shading & size: does fill alternate or grow on a cycle?",
         "id": "Arsiran & ukuran: apakah isian berganti-ganti atau membesar mengikuti siklus?"
        },
        {
         "en": "Two rules often run at once — find one, hold it, scan for the second.",
         "id": "Dua aturan sering berjalan sekaligus — temukan satu, pegang, lalu pindai yang kedua."
        }
       ]
      },
      {
       "h": {
        "en": "Personality & SJT — read, not gamed",
        "id": "Kepribadian & SJT — dibaca, bukan diakali"
       },
       "points": [
        {
         "en": "Inventories profile work style against the role; consistency checks catch curated personas.",
         "id": "Inventori kepribadian memetakan gaya kerjamu terhadap tuntutan peran; pemeriksaan konsistensi menangkap persona yang dibuat-buat."
        },
        {
         "en": "Answer as your working self on a good day — honest, slightly formal, consistent.",
         "id": "Jawablah sebagai dirimu saat bekerja di hari yang baik — jujur, sedikit formal, konsisten."
        },
        {
         "en": "SJT: the most effective response usually addresses the problem directly, keeps others informed, and escalates real risks early.",
         "id": "SJT: respons yang paling efektif biasanya menangani masalahnya secara langsung, menjaga orang lain tetap tahu, dan mengeskalasi risiko yang nyata sejak dini."
        },
        {
         "en": "Gaming a profile wins you a role that fits the mask — a loss dressed as a win.",
         "id": "Mengakali profil hanya memenangkan peran yang cocok untuk topengmu — kekalahan yang berkostum kemenangan."
        }
       ]
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A price rose 25% to Rp 150,000. The original price?",
        "id": "Sebuah harga naik 25% menjadi Rp150.000. Berapa harga awalnya?"
       },
       "options": [
        {
         "en": "Rp 112,500",
         "id": "Rp112.500"
        },
        {
         "en": "Rp 120,000",
         "id": "Rp120.000"
        },
        {
         "en": "Rp 125,000",
         "id": "Rp125.000"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Reverse percentage: 150,000 ÷ 1.25 = 120,000. Multiplying by 0.75 (giving 112,500) is the classic trap — it reverses the wrong operation.",
        "id": "Persentase kebalikan: 150.000 ÷ 1,25 = 120.000. Mengalikan dengan 0,75 (hasilnya 112.500) adalah jebakan klasik — yang dibalik justru operasi yang salah."
       }
      }
     ]
    },
    {
     "n": "3.4",
     "title": {
      "en": "Practice Exercises and Timed Mock Test Simulation",
      "id": "Latihan Soal dan Simulasi Tes Berbatas Waktu"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "Theory ends here. This lesson routes you through the Screening Gym's timed sets — the full simulation flow — and teaches you to read your results the way an assessor would, then convert them into next week's plan.",
      "id": "Teori berhenti di sini. Pelajaran ini memandumu melewati set-set berbatas waktu di Screening Gym — alur simulasi yang utuh — dan mengajarimu membaca hasilnya seperti seorang asesor, lalu mengubahnya menjadi rencana untuk minggu depan."
     },
     "objectives": [
      {
       "en": "Complete timed sets in all three aptitude families under exam conditions.",
       "id": "Menyelesaikan set berbatas waktu untuk ketiga keluarga tes dalam kondisi ujian."
      },
      {
       "en": "Read your accuracy, pace and miss patterns like an assessor.",
       "id": "Membaca ketepatan, tempo, dan pola kesalahanmu seperti seorang asesor."
      },
      {
       "en": "Convert one results review into one concrete next-week plan.",
       "id": "Mengubah satu tinjauan hasil menjadi satu rencana konkret untuk minggu depan."
      }
     ],
     "takeaways": [
      {
       "en": "Simulation quality equals prediction quality: full sets, real clock, no pauses.",
       "id": "Mutu simulasi menentukan mutu prediksi: set penuh, waktu sungguhan, tanpa jeda."
      },
      {
       "en": "Your miss pattern is more informative than your score — archetypes, not totals.",
       "id": "Pola kesalahanmu lebih banyak bercerita daripada skormu — lihat jenis kesalahannya, bukan totalnya."
      },
      {
       "en": "Every simulation ends with a written plan or it was entertainment.",
       "id": "Setiap simulasi harus berakhir dengan rencana tertulis; kalau tidak, itu cuma hiburan."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "Exam conditions, exactly",
        "id": "Kondisi ujian, tanpa kompromi"
       },
       "body": {
        "en": "Phone in another room, notifications off (Lesson 5.3's focus profile), water ready, one sitting per set, and the clock running from question one. Treat the Gym's timer as binding: when it ends, it ends. Afterwards, resist the urge to immediately re-run for a better number — first write the review: accuracy per family, seconds per question, and every miss into the error log with its archetype. The review is the product; the score is a by-product.",
        "id": "Ponsel di ruangan lain, notifikasi dimatikan (profil fokus dari Pelajaran 5.3), air minum siap, satu set diselesaikan sekali duduk, dan waktu berjalan sejak soal pertama. Perlakukan pewaktu Gym sebagai aturan yang mengikat: begitu habis, ya selesai. Setelah itu, tahan keinginan untuk langsung mengulang demi angka yang lebih bagus — tulis dulu tinjauannya: ketepatan per keluarga tes, detik per soal, dan setiap jawaban salah masuk ke catatan kesalahan lengkap dengan jenisnya. Tinjauan itulah produknya; skor hanya hasil sampingan."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Reading results like an assessor",
        "id": "Membaca hasil seperti asesor"
       },
       "body": {
        "en": "Assessors see a grid: accuracy × completion. <b>High accuracy, low completion</b> — you are careful and slow: train timed pacing, not technique. <b>Low accuracy, high completion</b> — you are fast and loose: return to untimed accuracy work; speed is currently laundering errors. <b>Low both</b> — technique gap: back to 3.3's frameworks for that family. <b>High both</b> — you clear typical cutoffs; maintain twice weekly and move your training hours to the funnel's next leaking stage. Honest caveat, always: Gym scores calibrate you against the drill bank, not against any employer's norm group — they diagnose, they do not promise.",
        "id": "Asesor melihat sebuah kisi: ketepatan × penyelesaian. <b>Ketepatan tinggi, penyelesaian rendah</b> — kamu teliti tetapi lambat: yang perlu dilatih adalah tempo berbatas waktu, bukan teknik. <b>Ketepatan rendah, penyelesaian tinggi</b> — kamu cepat tetapi ceroboh: kembali ke latihan ketepatan tanpa batas waktu; saat ini kecepatanmu sedang menyamarkan kesalahan. <b>Keduanya rendah</b> — ada celah teknik: kembali ke kerangka 3.3 untuk keluarga tes itu. <b>Keduanya tinggi</b> — kamu sudah melewati ambang batas yang lazim; pertahankan dua kali seminggu dan pindahkan jam latihanmu ke tahap corong berikutnya yang masih bocor. Catatan jujur, seperti selalu: skor Gym mengukurmu terhadap bank soal latihan, bukan terhadap kelompok norma pemberi kerja mana pun — ia mendiagnosis, bukan menjanjikan."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Simulation 1 — Numerical, timed",
        "id": "Simulasi 1 — Numerik, berbatas waktu"
       },
       "body": {
        "en": "Open the Gym, choose the numerical timed set, run it under exam conditions. Return and reveal when done.",
        "id": "Buka Gym, pilih set numerik berbatas waktu, kerjakan dalam kondisi ujian. Kembali ke sini dan buka tinjauan setelah selesai."
       },
       "debrief": {
        "en": "Check your grid position: if you finished under 70% of questions, your per-question budget needs the triage rule from 3.2 — no question gets double budget. If accuracy fell below 75%, find the shared archetype in your misses; it is usually one of the three percentage formulas applied backwards. Log it, write the one-line rule, and schedule the same set family for the day after tomorrow — spacing, not massing.",
        "id": "Periksa posisimu di kisi: kalau soal yang terselesaikan di bawah 70%, jatah waktu per soalmu butuh aturan triase dari 3.2 — tidak ada soal yang boleh mendapat jatah dobel. Kalau ketepatan di bawah 75%, cari jenis kesalahan yang sama-sama muncul di jawaban salahmu; biasanya salah satu dari tiga rumus persentase yang diterapkan terbalik. Catat, tulis aturannya dalam satu baris, dan jadwalkan keluarga set yang sama untuk lusa — disebar, bukan ditumpuk."
       }
      },
      {
       "h": {
        "en": "Simulation 2 — Verbal, timed",
        "id": "Simulasi 2 — Verbal, berbatas waktu"
       },
       "body": {
        "en": "Run the verbal timed set the same way. Return and reveal.",
        "id": "Kerjakan set verbal berbatas waktu dengan cara yang sama. Kembali dan buka tinjauan."
       },
       "debrief": {
        "en": "Verbal misses cluster on “cannot say”: count how many of your errors chose true/false where the honest answer was unproven. That count is your contamination index — how often outside knowledge or plausibility leaked into judgment. The repair drill: for each such miss, underline the exact passage words that would have been needed to prove the statement, and observe they are absent. Ten repetitions of that observation build the restraint the test measures.",
        "id": "Kesalahan verbal biasanya menumpuk di “tidak bisa disimpulkan”: hitung berapa kali kamu menjawab benar/salah padahal jawaban jujurnya adalah belum terbukti. Angka itu adalah indeks kontaminasimu — seberapa sering pengetahuan dari luar atau perasaan “masuk akal” bocor ke penilaianmu. Latihan perbaikannya: untuk setiap kesalahan semacam itu, garis bawahi kata-kata di bacaan yang seharusnya diperlukan untuk membuktikan pernyataan itu, lalu perhatikan bahwa kata-kata itu memang tidak ada. Sepuluh kali pengamatan seperti itu membangun kemampuan menahan diri yang justru diukur tes ini."
       }
      },
      {
       "h": {
        "en": "Simulation 3 — Logical, timed, then the plan",
        "id": "Simulasi 3 — Logika, berbatas waktu, lalu rencananya"
       },
       "body": {
        "en": "Run the logical timed set, then write next week's three-line plan: which family, which archetypes, which days. Reveal after writing.",
        "id": "Kerjakan set logika berbatas waktu, lalu tulis rencana tiga baris untuk minggu depan: keluarga tes yang mana, jenis kesalahan yang mana, hari apa saja. Buka tinjauan setelah menulis."
       },
       "debrief": {
        "en": "A model plan reads: “Numerical is the gate (68% accuracy): drill reverse-percentage and two-table archetypes Tue/Thu/Sat 25 minutes; verbal maintenance one set Sunday; re-simulate all three next Saturday morning.” Specific family, named archetypes, calendar days — compare yours. If any line says “practice more”, it is not yet a plan. Repeat the weekly cycle until your two gate families sit in the high-accuracy, high-completion quadrant; then this stage of the funnel is trained, and your hours belong to the next one.",
        "id": "Contoh rencana yang baik berbunyi: “Numerik adalah gerbangnya (ketepatan 68%): latih soal persentase kebalikan dan soal dua tabel pada Sel/Kam/Sab, 25 menit; pemeliharaan verbal satu set hari Minggu; simulasi ulang ketiganya Sabtu pagi depan.” Keluarga tes yang spesifik, jenis kesalahan yang disebut jelas, hari yang tertulis di kalender — bandingkan dengan milikmu. Kalau ada baris yang berbunyi “latihan lebih banyak”, itu belum rencana. Ulangi siklus mingguan ini sampai dua keluarga tes penentumu berada di kuadran ketepatan tinggi dan penyelesaian tinggi. Saat itu, tahap corong ini sudah terlatih, dan jam-jammu menjadi milik tahap berikutnya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Your grid: 92% accuracy, 55% completion. The prescribed training focus?",
        "id": "Kisimu: ketepatan 92%, penyelesaian 55%. Fokus latihan yang dianjurkan?"
       },
       "options": [
        {
         "en": "Technique frameworks — back to the theory deck",
         "id": "Kerangka teknik — kembali ke dek teori"
        },
        {
         "en": "Timed pacing — your method is sound but slow; train the triage rules under a clock",
         "id": "Tempo berbatas waktu — metodemu sudah benar tetapi lambat; latih aturan triase dengan pewaktu"
        },
        {
         "en": "Switch to a different test family",
         "id": "Pindah ke keluarga tes yang lain"
        }
       ],
       "correct": 1,
       "why": {
        "en": "High accuracy proves technique; low completion is a pacing problem. Speed work on a correct method — the safe order.",
        "id": "Ketepatan tinggi membuktikan tekniknya sudah benar; penyelesaian rendah adalah masalah tempo. Latih kecepatan di atas metode yang sudah benar — itu urutan yang aman."
       }
      }
     ],
     "tool": {
      "id": "gym",
      "mode": "drill",
      "title": {
       "en": "The timed sets are ready",
       "id": "Set berbatas waktu sudah siap"
      },
      "body": {
       "en": "Numerical, verbal, logical — full simulation conditions, transparent scoring, worked explanations on every question.",
       "id": "Numerik, verbal, logika — kondisi simulasi penuh, penilaian yang transparan, pembahasan untuk setiap soal."
      },
      "cta": {
       "en": "Start Simulation 1 →",
       "id": "Mulai Simulasi 1 →"
      }
     }
    }
   ],
   "hero": "../../assets/bg/gauntlet/gate-02-screening.jpg",
   "heroPos": "center 30%"
  },
  {
   "num": 4,
   "title": {
    "en": "FGD / LGD Role-Play Simulations",
    "id": "Simulasi Role-Play FGD / LGD"
   },
   "overview": {
    "en": "Module 4 of The Pack focuses on fgd / lgd role-play simulations. Work through the lessons in order — each builds on the last.",
    "id": "Modul 4 The Pack berfokus pada simulasi role-play FGD / LGD. Kerjakan pelajarannya secara berurutan — setiap pelajaran dibangun di atas pelajaran sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply fgd / lgd role-play simulations to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu bisa menerapkan simulasi role-play FGD / LGD pada keputusan kariermu sendiri, dengan metode yang konkret dan bisa diulang."
   },
   "lessons": [
    {
     "n": "4.1",
     "title": {
      "en": "Overview of FGD and LGD — What Assessors Are Evaluating",
      "id": "Gambaran Umum FGD dan LGD — Apa yang Sebenarnya Dinilai Asesor"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "In a group discussion, the topic is a prop. Assessors are not grading your answer to the case; they are scoring observable behaviours against a rubric — and the behaviours that score are learnable by Thursday. This lesson shows you the scoresheet.",
      "id": "Dalam diskusi kelompok, topik hanyalah properti panggung. Asesor tidak menilai jawabanmu atas kasusnya; mereka menskor perilaku yang bisa diamati, berdasarkan rubrik — dan perilaku yang menghasilkan skor itu bisa kamu pelajari sebelum hari Kamis. Pelajaran ini memperlihatkan lembar skornya kepadamu."
     },
     "objectives": [
      {
       "en": "Distinguish FGD from LGD formats and what each emphasises.",
       "id": "Membedakan format FGD dan LGD, serta apa yang ditekankan masing-masing."
      },
      {
       "en": "List the six scored behaviours and the anti-behaviours that cost points.",
       "id": "Menyebutkan enam perilaku yang diskor, dan perilaku-perilaku sebaliknya yang menggerus poin."
      },
      {
       "en": "Explain why airtime quantity is scored near zero and airtime quality near everything.",
       "id": "Menjelaskan mengapa banyaknya waktu bicara nyaris tidak dihitung, sementara mutunya nyaris menentukan segalanya."
      }
     ],
     "takeaways": [
      {
       "en": "Assessors track behaviours with tallies: contributions that advance, invitations to others, structure moves, summary moves.",
       "id": "Asesor mencatat perilaku dengan turus: kontribusi yang memajukan diskusi, ajakan kepada orang lain, langkah menata struktur, langkah merangkum."
      },
      {
       "en": "Dominating a discussion scores worse than balanced contribution — the loudest candidate is usually the first cut.",
       "id": "Mendominasi diskusi mendapat skor lebih buruk daripada berkontribusi secara seimbang — kandidat yang paling nyaring biasanya yang pertama dicoret."
      },
      {
       "en": "The scarcest, highest-scoring roles are the ones nobody takes: structurer, includer, summariser.",
       "id": "Peran yang paling langka sekaligus paling tinggi skornya justru yang tidak diambil siapa pun: penata struktur, pengajak, perangkum."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "The format and the fiction",
        "id": "Formatnya, dan fiksinya"
       },
       "body": {
        "en": "Six to ten candidates, one case — a business problem, a ranking exercise, a policy debate — twenty to forty minutes, two or three silent assessors with clipboards. In an FGD (focus/free group discussion) no roles are assigned; in an LGD (leaderless group discussion) the absence of a leader is itself the test: assessors watch who creates order without claiming a crown. The fiction candidates believe: that the group must reach the right answer. The reality: groups that reach a mediocre answer through visibly good process outscore groups that stumble into brilliance through chaos.",
        "id": "Enam sampai sepuluh kandidat, satu kasus — masalah bisnis, latihan menyusun peringkat, debat kebijakan — dua puluh sampai empat puluh menit, dan dua atau tiga asesor yang diam memegang papan catatan. Dalam FGD (focus/free group discussion) tidak ada peran yang dibagikan; dalam LGD (leaderless group discussion) ketiadaan pemimpin itu sendiri yang menjadi ujiannya: asesor mengamati siapa yang menciptakan keteraturan tanpa merebut mahkota. Fiksi yang dipercaya para kandidat: kelompok harus sampai pada jawaban yang benar. Kenyataannya: kelompok yang tiba pada jawaban biasa-biasa saja lewat proses yang terlihat baik mendapat skor lebih tinggi daripada kelompok yang kebetulan menemukan jawaban brilian lewat kekacauan."
       },
       "img": "../../assets/bg/gauntlet/gate-03-assessment.jpg",
       "imgPos": "center 35%"
      },
      {
       "icon": "book",
       "h": {
        "en": "The six scored behaviours",
        "id": "Enam perilaku yang diskor"
       },
       "body": {
        "en": "<b>1 · Advancing contributions:</b> ideas that build on the discussion's current state — not repeats, not tangents. <b>2 · Structure moves:</b> proposing an agenda, a framework, a time split (“we have 25 minutes — five to define, ten to generate, ten to decide?”). <b>3 · Inclusion moves:</b> inviting a quiet member in by name — among the highest-value seconds in the session. <b>4 · Evidence use:</b> numbers from the case, not vibes. <b>5 · Synthesis:</b> summarising positions and naming convergence. <b>6 · Composure:</b> disagreeing without heat, receiving disagreement without collapse. The anti-behaviours: interrupting, repeating your own point louder, personal attacks, silence, and hijacking the topic to your prepared speech.",
        "id": "<b>1 · Kontribusi yang memajukan:</b> gagasan yang membangun dari posisi diskusi saat ini — bukan mengulang, bukan melantur. <b>2 · Langkah struktur:</b> mengusulkan agenda, kerangka, atau pembagian waktu (“kita punya 25 menit — lima untuk mendefinisikan, sepuluh untuk menggali opsi, sepuluh untuk memutuskan?”). <b>3 · Langkah inklusi:</b> mengajak anggota yang pendiam dengan menyebut namanya — salah satu detik paling bernilai dalam sesi. <b>4 · Penggunaan bukti:</b> angka dari kasus, bukan sekadar perasaan. <b>5 · Sintesis:</b> merangkum berbagai posisi dan menyebutkan titik temunya. <b>6 · Ketenangan:</b> berbeda pendapat tanpa memanas, menerima perbedaan pendapat tanpa goyah. Perilaku sebaliknya yang menggerus poin: memotong pembicaraan, mengulang poin sendiri dengan lebih keras, menyerang pribadi, diam saja, dan membelokkan topik ke pidato yang sudah kamu siapkan."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Airtime economics",
        "id": "Ekonomi waktu bicara"
       },
       "body": {
        "en": "Assessors tally quality events, not minutes. Eight strong seconds — a structure proposal at minute two, a named invitation at minute ten, a synthesis at minute twenty — outscore eight minutes of fluent filler. This inverts most candidates' instincts: they fight for the floor, when the floor is cheap and the scarce goods are order, inclusion and convergence. Practical target: 4–6 quality contributions in a 30-minute session, at least one from each of structure, inclusion and synthesis. That portfolio is achievable by any prepared candidate, including introverts — often especially introverts, whose interventions read as signal, not noise.",
        "id": "Asesor menghitung momen-momen berkualitas, bukan menit. Delapan detik yang kuat — usulan struktur di menit kedua, ajakan dengan menyebut nama di menit kesepuluh, sintesis di menit kedua puluh — mengalahkan delapan menit omongan lancar yang kosong. Ini membalik naluri kebanyakan kandidat: mereka berebut giliran bicara, padahal giliran bicara itu murah; yang langka adalah keteraturan, inklusi, dan titik temu. Target praktisnya: 4–6 kontribusi berkualitas dalam sesi 30 menit, minimal satu untuk masing-masing struktur, inklusi, dan sintesis. Portofolio itu bisa dicapai kandidat mana pun yang siap, termasuk introver — bahkan sering justru introver yang unggul, karena intervensinya terbaca sebagai sinyal, bukan derau."
       }
      }
     ],
     "diagram": {
      "type": "quad",
      "exhibit": {
       "en": "Exhibit 1: What assessors tally — and what candidates think they tally.",
       "id": "Peraga 1: Yang benar-benar dihitung asesor — dan yang dikira kandidat dihitung."
      },
      "title": {
       "en": "The FGD scoresheet",
       "id": "Lembar skor FGD"
      },
      "items": [
       {
        "h": {
         "en": "Structure",
         "id": "Struktur"
        },
        "sub": {
         "en": "Agendas, frameworks, time splits",
         "id": "Agenda, kerangka, pembagian waktu"
        }
       },
       {
        "h": {
         "en": "Inclusion",
         "id": "Inklusi"
        },
        "sub": {
         "en": "Named invitations to quiet members",
         "id": "Mengajak anggota pendiam dengan menyebut nama"
        }
       },
       {
        "h": {
         "en": "Evidence & advance",
         "id": "Bukti & kemajuan"
        },
        "sub": {
         "en": "Case numbers, building on others",
         "id": "Angka dari kasus, membangun dari gagasan orang lain"
        }
       },
       {
        "h": {
         "en": "Synthesis & composure",
         "id": "Sintesis & ketenangan"
        },
        "sub": {
         "en": "Summaries, calm disagreement",
         "id": "Rangkuman, berbeda pendapat dengan tenang"
        }
       }
      ],
      "longdesc": {
       "en": "A four-quadrant scoresheet of tallied behaviours: structure moves such as agendas and time splits; inclusion moves such as inviting quiet members by name; evidence-based contributions that advance the discussion; and synthesis plus composure — summarising convergence and disagreeing calmly.",
       "id": "Lembar skor empat kuadran berisi perilaku yang dihitung dengan turus: langkah struktur seperti agenda dan pembagian waktu; langkah inklusi seperti mengajak anggota pendiam dengan menyebut nama; kontribusi berbasis bukti yang memajukan diskusi; serta sintesis dan ketenangan — merangkum titik temu dan berbeda pendapat dengan tenang."
      }
     },
     "checks": [
      {
       "q": {
        "en": "Minute 18 of 30: two candidates are locked in a loud back-and-forth; three members have not spoken. The highest-scoring available move?",
        "id": "Menit ke-18 dari 30: dua kandidat terjebak adu argumen yang nyaring; tiga anggota belum bicara sama sekali. Langkah dengan skor tertinggi yang tersedia?"
       },
       "options": [
        {
         "en": "Take a side in the argument with a stronger point",
         "id": "Memihak salah satu, dengan argumen yang lebih kuat"
        },
        {
         "en": "Summarise both positions in one line each, then invite a silent member by name to break the tie",
         "id": "Merangkum kedua posisi masing-masing satu kalimat, lalu mengajak anggota yang diam dengan menyebut namanya untuk memecah kebuntuan"
        },
        {
         "en": "Stay quiet and let them exhaust themselves",
         "id": "Diam saja dan membiarkan mereka kehabisan tenaga"
        }
       ],
       "correct": 1,
       "why": {
        "en": "One move scores three tallies — synthesis, composure, inclusion — and visibly rescues the group's process. Assessors write it down every time.",
        "id": "Satu langkah, tiga turus sekaligus — sintesis, ketenangan, inklusi — dan terlihat jelas menyelamatkan proses kelompok. Asesor selalu mencatatnya."
       }
      }
     ],
     "quote": {
      "en": "The topic is a prop. The behaviours are the exam.",
      "id": "Topiknya hanya properti panggung. Perilakumu itulah ujiannya."
     }
    },
    {
     "n": "4.2",
     "title": {
      "en": "Preparation Strategies, Frameworks, and Theoretical Concepts",
      "id": "Strategi Persiapan, Kerangka, dan Konsep Teoretis"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Preparation for a group discussion is not memorising current affairs; it is installing a small set of moves you can execute under noise: an opening framework, contribution templates, recovery lines, and the discipline of the final five minutes.",
      "id": "Bersiap untuk diskusi kelompok bukan berarti menghafal isu-isu terkini. Yang kamu butuhkan adalah memasang sekumpulan kecil langkah yang bisa dijalankan di tengah kebisingan: kerangka pembuka, templat kontribusi, kalimat pemulihan, dan disiplin lima menit terakhir."
     },
     "objectives": [
      {
       "en": "Deploy the define–split–decide framework on any case in the first two minutes.",
       "id": "Menerapkan kerangka definisikan–bagi–putuskan pada kasus apa pun dalam dua menit pertama."
      },
      {
       "en": "Use the four contribution templates: build, bridge, evidence, invite.",
       "id": "Menggunakan empat templat kontribusi: bangun, jembatani, buktikan, ajak."
      },
      {
       "en": "Run the endgame protocol: convergence, decision, and the one-line summary.",
       "id": "Menjalankan protokol penutup: titik temu, keputusan, dan rangkuman satu kalimat."
      }
     ],
     "takeaways": [
      {
       "en": "The candidate who gives the group a structure in minute one owns the discussion's skeleton without saying another word.",
       "id": "Kandidat yang memberi kelompok sebuah struktur di menit pertama sudah memegang kerangka diskusi, tanpa perlu berkata apa-apa lagi."
      },
      {
       "en": "Templates beat improvisation under pressure: build, bridge, evidence, invite cover 90% of good contributions.",
       "id": "Di bawah tekanan, templat mengalahkan improvisasi: bangun, jembatani, buktikan, ajak sudah mencakup 90% kontribusi yang baik."
      },
      {
       "en": "Groups are scored down for not concluding — whoever forces a decision in the last five minutes rescues everyone.",
       "id": "Kelompok yang tidak sampai pada kesimpulan dinilai turun — siapa pun yang mendorong keputusan di lima menit terakhir menyelamatkan semua orang."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "The two-minute opening",
        "id": "Pembukaan dua menit"
       },
       "body": {
        "en": "Whatever the case, the same three-part offer works: <b>define</b> (“before solutions — are we agreeing what the actual problem is? I read it as X”), <b>split</b> (“shall we take five minutes on causes, ten on options, and keep the last ten to decide?”), <b>decide</b> (“and agree now how we'll choose — majority, or criteria?”). Offered as a question, not a decree — the group adopting it is the point. If someone else proposes structure first, second it visibly and improve one detail: the assessor's pen moves for both of you. Never fight over whose framework wins; process fights are double losses.",
        "id": "Apa pun kasusnya, tawaran tiga bagian yang sama selalu berhasil: <b>definisikan</b> (“sebelum bicara solusi — apakah kita sepakat dulu apa masalah sebenarnya? Saya membacanya sebagai X”), <b>bagi</b> (“bagaimana kalau lima menit untuk penyebab, sepuluh untuk opsi, dan sepuluh terakhir kita simpan untuk memutuskan?”), <b>putuskan</b> (“dan kita sepakati sekarang cara memilihnya — suara terbanyak, atau berdasarkan kriteria?”). Sampaikan sebagai pertanyaan, bukan titah — intinya adalah kelompok mengadopsinya. Kalau orang lain lebih dulu mengusulkan struktur, dukung secara terbuka dan perbaiki satu detailnya: pena asesor bergerak untuk kalian berdua. Jangan pernah berebut kerangka siapa yang menang; bertengkar soal proses adalah kekalahan ganda."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "Four contribution templates",
        "id": "Empat templat kontribusi"
       },
       "body": {
        "en": "<b>Build:</b> “Adding to Rina's point about costs — the case says logistics is 40% of them, so her idea attacks the biggest block.” <b>Bridge:</b> “Dimas and Sari are closer than it sounds: both assume the budget is fixed. If we test that, the disagreement dissolves.” <b>Evidence:</b> “Two numbers from the case settle this: revenue fell 12% while the market fell 3% — the problem is mostly ours, not the market's.” <b>Invite:</b> “Bayu, you've been reading the exhibit — what do the regional numbers say?” Each template names a person or a number: that specificity is what separates advancing from noise, and every one is deployable regardless of how much you know about the topic.",
        "id": "<b>Bangun:</b> “Menambahkan poin Rina soal biaya — kasusnya menyebut logistik 40% dari total, jadi idenya menyasar blok yang paling besar.” <b>Jembatani:</b> “Dimas dan Sari sebenarnya lebih dekat daripada kedengarannya: keduanya berasumsi anggarannya tetap. Kalau asumsi itu kita uji, perbedaannya hilang.” <b>Buktikan:</b> “Dua angka dari kasus ini menjawabnya: pendapatan turun 12% sementara pasar hanya turun 3% — masalahnya sebagian besar ada di kita, bukan di pasar.” <b>Ajak:</b> “Bayu, kamu dari tadi membaca peraganya — apa yang dikatakan angka per daerah?” Setiap templat menyebut seseorang atau sebuah angka: kekhususan itulah yang membedakan kontribusi yang memajukan dari sekadar kebisingan, dan semuanya bisa dipakai seberapa pun pengetahuanmu tentang topiknya."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "The endgame protocol",
        "id": "Protokol penutup"
       },
       "body": {
        "en": "At minus-five-minutes, someone must switch the group from exploring to concluding — be that someone: “Five minutes left. I hear agreement on A and B, and an open question on C. Can we commit to A and B, and note C as a condition?” Then, if the format includes a report-out, volunteer the summary or visibly support whoever gives it: one breath, three sentences — the problem, the decision, the main reason. Groups that end mid-argument mark down every member; the person who landed the plane is remembered by name. Rehearse the two sentences of the endgame until they are reflex; they are the highest-scoring twenty seconds available in the format.",
        "id": "Pada lima menit terakhir, seseorang harus mengalihkan kelompok dari menjelajah ke menyimpulkan — jadilah orang itu: “Sisa lima menit. Saya dengar kita sepakat pada A dan B, dan masih ada pertanyaan terbuka soal C. Bisakah kita komit pada A dan B, dan mencatat C sebagai syaratnya?” Lalu, kalau formatnya menyertakan sesi pelaporan, tawarkan diri untuk merangkum atau dukung secara terbuka siapa pun yang merangkum: satu tarikan napas, tiga kalimat — masalahnya, keputusannya, alasan utamanya. Kelompok yang berakhir di tengah perdebatan menurunkan nilai semua anggotanya; orang yang berhasil mendaratkan pesawatnya akan diingat namanya. Latih dua kalimat penutup itu sampai menjadi refleks; itulah dua puluh detik dengan skor tertinggi yang tersedia dalam format ini."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "Disagreeing in a group — heat vs light",
        "id": "Berbeda pendapat dalam kelompok — panas vs terang"
       },
       "q": {
        "en": "A member proposes cutting the marketing budget entirely",
        "id": "Seorang anggota mengusulkan memangkas habis anggaran pemasaran"
       },
       "weak": {
        "en": "“That makes no sense — you can't just kill marketing, that's how companies die. Anyway, as I was saying earlier…”",
        "id": "“Itu tidak masuk akal — kamu tidak bisa mematikan pemasaran begitu saja, begitulah cara perusahaan mati. Lagi pula, seperti yang saya bilang tadi…”"
       },
       "strong": {
        "en": "“Interesting — it would free Rp 2bn. My worry is the case says 60% of new customers come from paid channels, so a full cut risks the top line. Could a 50% cut for one quarter test it more safely? Andi, you raised cash flow — would that cover the gap?”",
        "id": "“Menarik — itu membebaskan Rp2 miliar. Yang saya khawatirkan, kasusnya menyebut 60% pelanggan baru datang dari kanal berbayar, jadi memangkas habis berisiko pada pendapatan. Bagaimana kalau memangkas 50% selama satu kuartal dulu, sebagai uji yang lebih aman? Andi, tadi kamu mengangkat soal arus kas — apakah itu cukup menutup celahnya?”"
       },
       "why": {
        "en": "The strong version credits the idea, brings a case number, offers a testable middle, and hands the floor onward — four tallies in one turn, zero heat.",
        "id": "Versi yang kuat menghargai idenya, membawa angka dari kasus, menawarkan jalan tengah yang bisa diuji, dan mengoper giliran bicara — empat turus dalam satu giliran, tanpa memanas sedikit pun."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Someone else proposed a solid framework in minute one. Your best response?",
        "id": "Orang lain sudah mengusulkan kerangka yang solid di menit pertama. Respons terbaikmu?"
       },
       "options": [
        {
         "en": "Propose a better framework so assessors see yours",
         "id": "Mengusulkan kerangka yang lebih baik supaya asesor melihat kerangkamu"
        },
        {
         "en": "Second it aloud and add one improvement — e.g. reserving the last five minutes for the decision",
         "id": "Mendukungnya secara terbuka dan menambahkan satu perbaikan — misalnya menyisihkan lima menit terakhir untuk keputusan"
        },
        {
         "en": "Ignore process and score points on content instead",
         "id": "Mengabaikan proses dan mengejar poin lewat isi saja"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Competing frameworks read as ego; visible support plus an improvement reads as collaboration and still tallies as a structure move.",
        "id": "Kerangka yang bersaing terbaca sebagai ego; dukungan terbuka plus satu perbaikan terbaca sebagai kolaborasi, dan tetap dihitung sebagai langkah struktur."
       }
      }
     ],
     "tool": {
      "id": "studio",
      "mode": "fgd",
      "title": {
       "en": "Take a seat in the practice round",
       "id": "Ambil kursi di ronde latihan"
      },
      "body": {
       "en": "Six scripted rounds against three authored personas — a dominator, a silenced data-holder, a tangent-taker. Every choice is scored against the assessor functions from this module.",
       "id": "Enam ronde berskenario melawan tiga persona yang sudah ditulis — si dominator, si pemegang data yang tenggelam, si pelantur. Setiap pilihanmu diskor berdasarkan fungsi asesor dari modul ini."
      },
      "cta": {
       "en": "Enter the FGD room →",
       "id": "Masuk ke ruang FGD →"
      }
     }
    },
    {
     "n": "4.3",
     "title": {
      "en": "FGD / LGD Practice Simulation and Mock Session",
      "id": "Simulasi Latihan FGD / LGD dan Sesi Mock"
     },
     "dur": {
      "en": "30 min",
      "id": "30 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "A full mock session: one case, five timed decision points, each asking what you would do in the moment — with assessor-view debriefs. Then the protocol for practising with real humans.",
      "id": "Satu sesi mock yang utuh: satu kasus, lima titik keputusan berbatas waktu, masing-masing menanyakan apa yang akan kamu lakukan pada saat itu — lengkap dengan tinjauan dari sudut pandang asesor. Setelah itu, protokol untuk berlatih dengan manusia sungguhan."
     },
     "objectives": [
      {
       "en": "Navigate five live decision points of a realistic FGD case.",
       "id": "Melewati lima titik keputusan langsung dalam kasus FGD yang realistis."
      },
      {
       "en": "Practise the templates under simulated social pressure.",
       "id": "Melatih templat-templat itu di bawah tekanan sosial yang disimulasikan."
      },
      {
       "en": "Set up a peer practice loop with rotating assessor roles.",
       "id": "Membentuk putaran latihan bersama teman, dengan peran asesor yang bergilir."
      }
     ],
     "takeaways": [
      {
       "en": "Every decision point has a highest-tally move — and it is almost never the loudest one.",
       "id": "Setiap titik keputusan punya satu langkah dengan turus tertinggi — dan hampir tidak pernah langkah yang paling nyaring."
      },
      {
       "en": "Social pressure shrinks your repertoire to what you rehearsed; rehearse the templates aloud.",
       "id": "Tekanan sosial menyempitkan repertoarmu hanya ke apa yang sudah kamu latih; latih templatnya dengan suara keras."
      },
      {
       "en": "Three peer mocks with honest tallies teach more than thirty articles about FGDs.",
       "id": "Tiga sesi mock bersama teman dengan turus yang jujur mengajarkan lebih banyak daripada tiga puluh artikel tentang FGD."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "The case",
        "id": "Kasusnya"
       },
       "body": {
        "en": "You are one of eight candidates. The case: a university canteen operator runs 12 outlets; revenue is flat, three outlets lose money, students complain about queues at peak hours while off-peak capacity sits idle. The group must propose a turnaround plan in 30 minutes. Assessors: two, silent, back of the room. Work each decision point below as if live — commit to a move before revealing the assessor view.",
        "id": "Kamu salah satu dari delapan kandidat. Kasusnya: seorang operator kantin universitas mengelola 12 gerai; pendapatan stagnan, tiga gerai merugi, mahasiswa mengeluhkan antrean di jam sibuk sementara di luar jam sibuk kapasitasnya menganggur. Kelompok harus mengusulkan rencana pemulihan dalam 30 menit. Asesor: dua orang, diam, di belakang ruangan. Kerjakan setiap titik keputusan di bawah ini seolah-olah sedang berlangsung — tetapkan langkahmu dulu sebelum membuka pandangan asesor."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Minute 0 — Eight silent people",
        "id": "Menit 0 — Delapan orang yang diam"
       },
       "body": {
        "en": "The moderator says “begin” and the table goes quiet. Nobody wants to be first. Your move?",
        "id": "Moderator berkata “silakan mulai”, dan meja langsung hening. Tidak ada yang mau jadi yang pertama. Langkahmu?"
       },
       "debrief": {
        "en": "Open with structure, not brilliance: “Shall we spend two minutes agreeing the problem, ten on causes and options, and keep the last eight to decide and summarise? And maybe someone tracks time?” First-mover structure earns the session's cheapest tally, and asking for a timekeeper creates a role without claiming one. What not to do: open with your solution — a solution before a shared definition invites the first fight.",
        "id": "Buka dengan struktur, bukan dengan ide cemerlang: “Bagaimana kalau dua menit untuk menyepakati masalahnya, sepuluh untuk penyebab dan opsi, dan delapan menit terakhir kita simpan untuk memutuskan dan merangkum? Mungkin ada yang mau menjaga waktu?” Struktur dari penggerak pertama mendapat turus termudah dalam sesi itu, dan meminta seorang penjaga waktu menciptakan peran tanpa merebutnya. Yang jangan dilakukan: membuka dengan solusimu — solusi sebelum ada definisi bersama mengundang pertengkaran pertama."
       }
      },
      {
       "h": {
        "en": "Minute 6 — The dominator",
        "id": "Menit 6 — Si dominator"
       },
       "body": {
        "en": "One candidate has spoken four minutes straight, repeating that “closing the three losing outlets is obvious”. Others exchange glances. Your move?",
        "id": "Satu kandidat sudah bicara empat menit tanpa henti, mengulang-ulang bahwa “menutup tiga gerai yang merugi itu sudah jelas”. Yang lain saling melirik. Langkahmu?"
       },
       "debrief": {
        "en": "Bridge plus evidence plus redirect, without confronting: “Closing them is one option — before we commit, the case says those three serve the night classes; do we know if the loss is the outlets or their hours? Maya, you flagged the queue data — does it say anything about timing?” You honoured the point, introduced the case's complicating number, and moved the floor. Assessors tally you for evidence and inclusion; the dominator's repetitions tally as one contribution, not five.",
        "id": "Jembatani, bawa bukti, lalu alihkan — tanpa konfrontasi: “Menutupnya memang salah satu opsi — tapi sebelum kita komit, kasusnya menyebut ketiga gerai itu melayani kelas malam; apakah kita tahu ruginya karena gerainya atau karena jam operasinya? Maya, tadi kamu menyinggung data antrean — ada kaitannya dengan waktu?” Kamu menghargai poinnya, memasukkan angka dari kasus yang memperumit, dan memindahkan giliran bicara. Asesor memberimu turus untuk bukti dan inklusi; pengulangan si dominator dihitung satu kontribusi, bukan lima."
       }
      },
      {
       "h": {
        "en": "Minute 14 — Your idea gets dismissed",
        "id": "Menit 14 — Idemu ditepis"
       },
       "body": {
        "en": "You propose staggered class-break schedules to flatten peak queues. A candidate waves it off: “Too complicated, universities never agree to that.” Two others nod. Your move?",
        "id": "Kamu mengusulkan jadwal istirahat kelas yang dibuat bertingkat untuk meratakan antrean di jam sibuk. Seorang kandidat menepisnya: “Terlalu rumit, universitas tidak akan pernah setuju.” Dua orang lain mengangguk. Langkahmu?"
       },
       "debrief": {
        "en": "One calm defence with evidence, then release: “Fair concern. The case does say the faculty already staggers exam schedules, so the mechanism exists — but if the group prefers operational fixes first, I'm with that; can we park scheduling as a phase-two idea?” You showed composure (the actual thing being tested when your idea is attacked), grounded it once, and traded it gracefully. Candidates who die defending small hills lose the composure tally; candidates who fold instantly lose the conviction tally. One defence, then flexibility, banks both.",
        "id": "Satu pembelaan yang tenang dengan bukti, lalu lepaskan: “Kekhawatiran yang wajar. Tapi kasusnya menyebut fakultas sudah membuat jadwal ujian bertingkat, jadi mekanismenya sebenarnya ada — kalau kelompok lebih memilih perbaikan operasional dulu, saya ikut; bisakah penjadwalan kita parkir sebagai ide fase dua?” Kamu menunjukkan ketenangan (hal yang sebenarnya diuji ketika idemu diserang), memberinya dasar satu kali, lalu melepasnya dengan anggun. Kandidat yang mati-matian membela bukit kecil kehilangan turus ketenangan; kandidat yang langsung menyerah kehilangan turus keyakinan. Satu pembelaan, lalu fleksibel: keduanya aman."
       }
      },
      {
       "h": {
        "en": "Minute 22 — The quiet expert",
        "id": "Menit 22 — Si ahli yang pendiam"
       },
       "body": {
        "en": "A candidate who mentioned working part-time in food service has said nothing for ten minutes. The group is debating kitchen capacity in circles. Your move?",
        "id": "Seorang kandidat yang tadi sempat menyebut pernah kerja paruh waktu di layanan makanan sudah sepuluh menit tidak bicara. Kelompok berputar-putar memperdebatkan kapasitas dapur. Langkahmu?"
       },
       "debrief": {
        "en": "The named invitation, with context: “Sari, you've actually worked in food service — from what you saw, is the bottleneck kitchen capacity or counter service?” This is the single highest-value tally available: it visibly improves the group's information, rescues a silent member, and costs you six seconds. If her answer is good, build on it and credit her again — assessors specifically watch whether inviters honour the answers they invited.",
        "id": "Ajakan dengan menyebut nama, lengkap dengan konteksnya: “Sari, kamu kan pernah bekerja di layanan makanan — dari yang kamu lihat, hambatannya di kapasitas dapur atau di layanan konter?” Ini satu-satunya turus paling bernilai yang tersedia: terlihat jelas memperbaiki informasi kelompok, menyelamatkan anggota yang diam, dan hanya memakan enam detik waktumu. Kalau jawabannya bagus, bangun dari jawaban itu dan beri dia kredit sekali lagi — asesor secara khusus mengamati apakah orang yang mengajak benar-benar menghargai jawaban yang ia undang."
       }
      },
      {
       "h": {
        "en": "Minute 25 — Nobody is landing the plane",
        "id": "Menit 25 — Tidak ada yang mendaratkan pesawat"
       },
       "body": {
        "en": "Five minutes left; the group has four half-agreed ideas and no decision. Your move — script it, then reveal.",
        "id": "Sisa lima menit; kelompok punya empat ide yang setengah disepakati dan belum ada keputusan. Langkahmu — tulis naskahnya, lalu buka tinjauan."
       },
       "debrief": {
        "en": "The endgame protocol verbatim: “Five minutes left — may I try to land us? I hear agreement on extending peak-hour counters and piloting one outlet conversion; scheduling and closures stay phase-two pending data. If we agree, who wants to give the summary — or I can.” Then the three-sentence report if it falls to you: problem, decision, main reason. This move alone reverses a failing session for the whole group — and assessors know exactly one person made it happen.",
        "id": "Protokol penutup, kata demi kata: “Sisa lima menit — boleh saya coba mendaratkan kita? Saya dengar kita sepakat menambah konter di jam sibuk dan menguji coba konversi satu gerai; penjadwalan dan penutupan jadi fase dua, menunggu data. Kalau setuju, siapa yang mau menyampaikan rangkumannya — atau saya bisa.” Lalu, kalau tugas melapor jatuh padamu, laporan tiga kalimat: masalah, keputusan, alasan utama. Langkah ini sendirian membalikkan sesi yang nyaris gagal bagi seluruh kelompok — dan asesor tahu persis siapa satu orang yang mewujudkannya."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Preparing content, not moves",
         "id": "Menyiapkan isi, bukan langkah"
        },
        "fix": {
         "en": "You cannot predict the case; you can fully predict the moments — silence, dominator, dismissal, endgame. Rehearse the moves.",
         "id": "Kasusnya tidak bisa kamu tebak; momen-momennya bisa kamu tebak sepenuhnya — hening, dominator, penolakan, penutup. Latih langkah-langkahnya."
        }
       },
       {
        "h": {
         "en": "Practising alone",
         "id": "Berlatih sendirian"
        },
        "fix": {
         "en": "Social pressure is the test. Three peers, one case from this module, rotating assessor with the six-behaviour tally sheet, 30 minutes plus 15 of feedback.",
         "id": "Tekanan sosial itulah ujiannya. Tiga teman, satu kasus dari modul ini, asesor bergilir dengan lembar turus enam perilaku, 30 menit ditambah 15 menit umpan balik."
        }
       },
       {
        "h": {
         "en": "Reviewing the feeling, not the tally",
         "id": "Meninjau perasaan, bukan turus"
        },
        "fix": {
         "en": "“It went okay” teaches nothing. Count your structure, inclusion, evidence and synthesis moves per session; raise the smallest count next time.",
         "id": "“Tadi lumayan lah” tidak mengajarkan apa-apa. Hitung langkah struktur, inklusi, bukti, dan sintesismu di setiap sesi; naikkan hitungan yang paling kecil di sesi berikutnya."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "Why does one calm defence followed by graceful release beat both instant folding and repeated defence?",
        "id": "Mengapa satu pembelaan yang tenang lalu melepaskan dengan anggun lebih baik daripada langsung menyerah maupun membela berulang-ulang?"
       },
       "options": [
        {
         "en": "Because it takes the least time",
         "id": "Karena paling hemat waktu"
        },
        {
         "en": "Because it evidences both conviction and flexibility — the two tallies the dismissal moment tests",
         "id": "Karena itu membuktikan keyakinan sekaligus fleksibilitas — dua turus yang justru diuji pada momen idemu ditepis"
        },
        {
         "en": "Because assessors dislike all disagreement",
         "id": "Karena asesor tidak suka perbedaan pendapat dalam bentuk apa pun"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The attacked-idea moment is a composure probe: fold instantly and you show no spine; defend forever and you show no ears. One grounded defence, then flexibility, shows both.",
        "id": "Momen ide diserang adalah ujian ketenangan: langsung menyerah berarti kamu tidak punya pendirian; membela terus-menerus berarti kamu tidak mau mendengar. Satu pembelaan berdasar, lalu fleksibel, menunjukkan keduanya."
       }
      }
     ],
     "tool": {
      "id": "studio",
      "mode": "fgd",
      "title": {
       "en": "Run the mock session",
       "id": "Jalankan sesi mock"
      },
      "body": {
       "en": "Warm up in the scripted round, note which assessor functions you missed, then stage the live mock this lesson describes with friends — and record it.",
       "id": "Pemanasan di ronde berskenario, catat fungsi asesor mana yang terlewat, lalu gelar sesi mock langsung seperti yang dijelaskan pelajaran ini bersama teman-temanmu — dan rekam."
      },
      "cta": {
       "en": "Warm up in the simulator →",
       "id": "Pemanasan di simulator →"
      }
     }
    }
   ],
   "hero": "../../assets/bg/gauntlet/gate-03-assessment.jpg",
   "heroPos": "center 30%"
  },
  {
   "num": 5,
   "title": {
    "en": "Internship and Full-Time Application Strategy",
    "id": "Strategi Melamar Magang dan Kerja Penuh Waktu"
   },
   "overview": {
    "en": "Module 5 of The Pack focuses on internship and full-time application strategy. Work through the lessons in order — each builds on the last.",
    "id": "Modul 5 The Pack berfokus pada strategi melamar magang dan kerja penuh waktu. Kerjakan pelajarannya secara berurutan — setiap pelajaran dibangun di atas pelajaran sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply internship and full-time application strategy to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu bisa menerapkan strategi melamar magang dan kerja penuh waktu pada keputusan kariermu sendiri, dengan metode yang konkret dan bisa diulang."
   },
   "lessons": [
    {
     "n": "5.1",
     "title": {
      "en": "Overview of Internship and Graduate Recruitment Programmes",
      "id": "Gambaran Umum Program Magang dan Rekrutmen Lulusan Baru"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Internships and graduate programmes run on a different calendar and a different logic from regular vacancies. Miss the windows and no amount of quality helps; understand the machine and even average applications land. This lesson maps the programme landscape.",
      "id": "Magang dan program lulusan baru berjalan dengan kalender dan logika yang berbeda dari lowongan biasa. Lewatkan jendela waktunya, dan sebagus apa pun lamaranmu tidak akan menolong; pahami cara mesinnya bekerja, dan lamaran yang biasa-biasa saja pun bisa mendarat. Pelajaran ini memetakan lanskap programnya."
     },
     "objectives": [
      {
       "en": "Map the annual recruiting calendar for internships and graduate programmes.",
       "id": "Memetakan kalender rekrutmen tahunan untuk magang dan program lulusan baru."
      },
      {
       "en": "Distinguish programme types and what each is really hiring for.",
       "id": "Membedakan jenis-jenis program dan apa yang sebenarnya dicari masing-masing."
      },
      {
       "en": "Position internships as conversion machines: most graduate offers go to former interns.",
       "id": "Memosisikan magang sebagai mesin konversi: sebagian besar tawaran untuk lulusan baru jatuh ke mantan peserta magang."
      }
     ],
     "takeaways": [
      {
       "en": "Programme recruiting opens months before start dates — the calendar is the first filter, and it filters the unaware.",
       "id": "Rekrutmen program dibuka berbulan-bulan sebelum tanggal mulai — kalender adalah penyaring pertama, dan yang tersaring adalah mereka yang tidak tahu."
      },
      {
       "en": "An internship is a 10-week interview: conversion to a full-time offer is its real product.",
       "id": "Magang adalah wawancara sepanjang 10 minggu: produk sesungguhnya adalah konversi menjadi tawaran kerja penuh waktu."
      },
      {
       "en": "Structured programmes hire for trainability and evidence of drive — not for finished expertise.",
       "id": "Program terstruktur merekrut orang yang mudah dilatih dan punya bukti daya juang — bukan orang yang keahliannya sudah jadi."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "The calendar",
        "id": "Kalendernya"
       },
       "body": {
        "en": "Large employers plan intake a year ahead. Typical rhythm for Indonesian and regional corporates: <b>graduate programmes</b> (management trainee, officer development) open applications roughly six to nine months before the cohort starts, often twice a year; <b>structured internships</b> recruit one semester ahead, with big-tech and banking summer intakes opening even earlier; <b>off-cycle internships</b> at startups run continuously but fill through referrals fast. The operational rule: in your second-to-last year, list every target programme's typical window in your calendar now — from The Range's company pages and the employers' career sites — because discovering a window after it closes is the most common self-inflicted rejection.",
        "id": "Perusahaan besar merencanakan penerimaan setahun sebelumnya. Ritme yang lazim di korporasi Indonesia dan regional: <b>program lulusan baru</b> (management trainee, officer development program) membuka pendaftaran kira-kira enam sampai sembilan bulan sebelum angkatan mulai, sering kali dua kali setahun; <b>magang terstruktur</b> merekrut satu semester sebelumnya, dan untuk perusahaan teknologi besar serta perbankan, penerimaan magang musim liburan dibuka lebih awal lagi; <b>magang di luar siklus</b> di startup dibuka sepanjang tahun, tetapi cepat terisi lewat rekomendasi. Aturan operasionalnya: di tahun kedua terakhir kuliahmu, catat jendela waktu tiap program targetmu di kalender sekarang juga — dari halaman perusahaan di The Range dan situs karier perusahaannya — karena baru tahu ada jendela setelah jendelanya tertutup adalah penolakan paling umum yang kamu ciptakan sendiri."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "What programmes hire for",
        "id": "Apa yang sebenarnya dicari program"
       },
       "body": {
        "en": "A graduate programme is an investment product: the employer buys two years of training cost expecting a decade of return. So selection optimises for <b>trainability</b> (aptitude scores, learning stories), <b>drive</b> (evidence you finish hard things without supervision), and <b>stay probability</b> (informed interest in this industry, this company — not “any job please”). Finished expertise ranks last; they will train you. This inverts what students emphasise: a candidate who says “I ran three failed experiments before the fourth worked” beats one who lists certifications, because the programme is buying the persistence, not the certificate.",
        "id": "Program lulusan baru adalah produk investasi: perusahaan membayar dua tahun biaya pelatihan dengan harapan imbal hasil selama satu dekade. Karena itu seleksinya mengutamakan <b>kemampuan dilatih</b> (skor tes bakat, cerita tentang cara belajarmu), <b>daya juang</b> (bukti kamu menuntaskan hal yang sulit tanpa diawasi), dan <b>peluang bertahan</b> (minat yang berdasar pada industri ini dan perusahaan ini — bukan “pekerjaan apa saja, asal diterima”). Keahlian yang sudah jadi ada di urutan terakhir; mereka yang akan melatihmu. Ini kebalikan dari yang biasa ditonjolkan mahasiswa: kandidat yang bercerita “saya menjalankan tiga eksperimen yang gagal sebelum yang keempat berhasil” mengalahkan kandidat yang mendaftar deretan sertifikasi, karena program itu membeli kegigihannya, bukan sertifikatnya."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Internships as conversion machines",
        "id": "Magang sebagai mesin konversi"
       },
       "body": {
        "en": "At employers with structured intern programmes, a large share of graduate offers goes to returning interns — the internship is the interview, ten weeks long, with the noise of interview performance replaced by observed work. Strategy follows: prioritise internships at companies you would accept a graduate offer from; treat week one to ten as a single sustained evaluation (deliver, ask for feedback at midpoint, make your manager's life easier); and in the final fortnight, explicitly ask about the conversion path — “what would make a return offer likely?” is a professional question interns are expected to ask. A converted internship deletes the entire graduate-application funnel.",
        "id": "Di perusahaan dengan program magang terstruktur, sebagian besar tawaran untuk lulusan baru jatuh ke peserta magang yang kembali — magang itulah wawancaranya, sepuluh minggu panjangnya, dan penampilan wawancara yang penuh derau digantikan oleh hasil kerja yang diamati langsung. Strateginya mengikuti: prioritaskan magang di perusahaan yang tawaran kerjanya akan kamu terima; perlakukan minggu pertama sampai kesepuluh sebagai satu evaluasi yang berkesinambungan (tuntaskan pekerjaan, minta umpan balik di pertengahan, permudah hidup manajermu); dan di dua minggu terakhir, tanyakan jalur konversinya secara terbuka — “apa yang akan membuat tawaran untuk kembali menjadi mungkin?” adalah pertanyaan profesional yang memang diharapkan dari seorang peserta magang. Magang yang berhasil dikonversi menghapus seluruh corong lamaran lulusan baru."
       }
      }
     ],
     "diagram": {
      "type": "timeline",
      "exhibit": {
       "en": "Exhibit 1: A second-to-last-year student's programme calendar.",
       "id": "Peraga 1: Kalender program untuk mahasiswa tahun kedua terakhir."
      },
      "title": {
       "en": "The programme year",
       "id": "Tahun program"
      },
      "items": [
       {
        "h": {
         "en": "Sem 1",
         "id": "Sem 1"
        },
        "sub": {
         "en": "List targets + windows; build CV evidence",
         "id": "Catat target + jendela waktunya; bangun bukti untuk CV"
        }
       },
       {
        "h": {
         "en": "Sem 2",
         "id": "Sem 2"
        },
        "sub": {
         "en": "Summer/structured internship applications",
         "id": "Lamaran magang musim liburan/terstruktur"
        }
       },
       {
        "h": {
         "en": "Break",
         "id": "Libur"
        },
        "sub": {
         "en": "The internship — a 10-week interview",
         "id": "Magangnya sendiri — wawancara 10 minggu"
        }
       },
       {
        "h": {
         "en": "Final year",
         "id": "Tahun terakhir"
        },
        "sub": {
         "en": "Graduate programme windows + conversion talks",
         "id": "Jendela program lulusan baru + pembicaraan konversi"
        }
       }
      ],
      "longdesc": {
       "en": "A four-phase timeline: first semester of the second-to-last year for listing target programmes and their windows while building CV evidence; second semester for structured internship applications; the long break for the internship itself, treated as a ten-week interview; final year for graduate programme windows and internship conversion conversations.",
       "id": "Garis waktu empat fase: semester pertama tahun kedua terakhir untuk mencatat program target beserta jendela waktunya sambil membangun bukti untuk CV; semester kedua untuk lamaran magang terstruktur; libur panjang untuk magangnya sendiri, yang diperlakukan sebagai wawancara sepuluh minggu; tahun terakhir untuk jendela program lulusan baru dan pembicaraan konversi magang."
      }
     },
     "checks": [
      {
       "q": {
        "en": "Why does a converted internship beat any application strategy?",
        "id": "Mengapa magang yang berhasil dikonversi mengalahkan strategi lamaran mana pun?"
       },
       "options": [
        {
         "en": "Interns are paid less, so offers come easier",
         "id": "Karena peserta magang digaji lebih rendah, jadi tawarannya lebih mudah keluar"
        },
        {
         "en": "Ten weeks of observed work replaces the entire noisy screening funnel with real evidence",
         "id": "Karena sepuluh minggu kerja yang diamati langsung menggantikan seluruh corong penyaringan yang penuh derau dengan bukti nyata"
        },
        {
         "en": "Companies are contractually obliged to hire interns",
         "id": "Karena perusahaan terikat kontrak untuk merekrut peserta magangnya"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Every funnel stage exists to approximate what an internship measures directly. The intern skips the approximation.",
        "id": "Setiap tahap corong ada untuk menaksir apa yang diukur langsung oleh magang. Peserta magang melompati taksirannya."
       }
      }
     ],
     "quote": {
      "en": "The calendar is the first filter — and it filters the unaware.",
      "id": "Kalender adalah penyaring pertama — dan yang tersaring adalah mereka yang tidak tahu."
     }
    },
    {
     "n": "5.2",
     "title": {
      "en": "Preparation and Application Strategies for Internship Roles",
      "id": "Strategi Persiapan dan Lamaran untuk Posisi Magang"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Internship applications fail on three predictable fronts: thin evidence, wrong targets, and invisible effort. This lesson runs the counter-strategy — building an evidence base before you have experience, targeting where you can actually win, and converting the internship itself.",
      "id": "Lamaran magang gagal di tiga sisi yang bisa ditebak: bukti yang tipis, target yang salah, dan usaha yang tidak terlihat. Pelajaran ini menjalankan strategi lawannya — membangun basis bukti sebelum kamu punya pengalaman, membidik tempat yang benar-benar bisa kamu menangkan, dan mengonversi magangnya sendiri menjadi tawaran."
     },
     "objectives": [
      {
       "en": "Build pre-experience evidence: projects, competitions, and micro-work that CVs can carry.",
       "id": "Membangun bukti sebelum punya pengalaman: proyek, kompetisi, dan pekerjaan kecil yang layak masuk CV."
      },
      {
       "en": "Target internships with a realistic win-probability portfolio.",
       "id": "Membidik magang dengan portofolio peluang menang yang realistis."
      },
      {
       "en": "Run the internship itself as a conversion campaign, week by week.",
       "id": "Menjalankan masa magang itu sendiri sebagai kampanye konversi, minggu demi minggu."
      }
     ],
     "takeaways": [
      {
       "en": "“No experience” is a solvable problem: projects are experience you assign yourself.",
       "id": "“Belum punya pengalaman” adalah masalah yang bisa dipecahkan: proyek adalah pengalaman yang kamu tugaskan pada dirimu sendiri."
      },
      {
       "en": "Apply where the evidence you have matches what they screen for — prestige alone is a bad targeting criterion.",
       "id": "Lamar ke tempat yang bukti milikmu cocok dengan apa yang mereka saring — prestise saja adalah kriteria pembidikan yang buruk."
      },
      {
       "en": "Conversion is won in weeks 3–8: visible delivery, midpoint feedback, and a manager whose life you made easier.",
       "id": "Konversi dimenangkan di minggu 3–8: hasil kerja yang terlihat, umpan balik di pertengahan, dan manajer yang hidupnya kamu buat lebih mudah."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "Manufacturing evidence before experience",
        "id": "Menciptakan bukti sebelum punya pengalaman"
       },
       "body": {
        "en": "The internship paradox — need experience to get the internship that gives experience — dissolves once you notice what screeners actually accept as evidence: <b>self-assigned projects</b> (analyse a public dataset, build a tool, redesign a real organisation's process — with results, per Module 2's bullet formula); <b>competitions</b> (case competitions, olympiads, hackathons — structured, dated, ranked evidence); <b>micro-work</b> (freelance gigs, family-business projects, organisation roles run with professional discipline). One semester of deliberate evidence-building — one project, one competition, one org result — outfits a CV better than a lucky unstructured internship. The Map's Module 6 industry tracks are designed as first projects.",
        "id": "Paradoks magang — butuh pengalaman untuk mendapat magang yang memberi pengalaman — lenyap begitu kamu melihat apa yang sebenarnya diterima penyaring sebagai bukti: <b>proyek yang kamu tugaskan sendiri</b> (menganalisis dataset publik, membangun sebuah alat, merancang ulang proses di organisasi sungguhan — lengkap dengan hasilnya, sesuai rumus butir di Modul 2); <b>kompetisi</b> (kompetisi kasus, olimpiade, hackathon — bukti yang terstruktur, bertanggal, dan berperingkat); <b>pekerjaan kecil</b> (pekerjaan lepas, proyek usaha keluarga, jabatan organisasi yang dijalankan dengan disiplin profesional). Satu semester membangun bukti dengan sengaja — satu proyek, satu kompetisi, satu hasil di organisasi — membekali CV lebih baik daripada magang tak terstruktur yang didapat karena beruntung. Jalur industri di Modul 6 The Map memang dirancang sebagai proyek pertama."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Targeting where you can win",
        "id": "Membidik tempat yang bisa kamu menangkan"
       },
       "body": {
        "en": "Apply the tiered portfolio from 1.3, adjusted for internships: a few reach programmes (the famous names, where referrals and early applications matter most), a core of match programmes (mid-size firms and growing startups whose screening emphasises the evidence you actually have), and foundation options (small companies and labs where a well-written cold email — Module 4.3 of The Map — often creates an internship that was never posted). The neglected goldmine is that last tier: smaller organisations give interns real scope, and real scope is what converts into CV lines the next application cycle buys.",
        "id": "Terapkan portofolio bertingkat dari 1.3, disesuaikan untuk magang: sedikit program tingkat impian (nama-nama tenar, tempat rekomendasi dan lamaran yang masuk lebih awal paling menentukan), inti berupa program tingkat sepadan (perusahaan menengah dan startup yang sedang tumbuh, yang penyaringannya menekankan bukti yang memang kamu punya), dan opsi tingkat fondasi (perusahaan kecil dan laboratorium, tempat satu email perkenalan yang ditulis dengan baik — Modul 4.3 The Map — sering menciptakan posisi magang yang tidak pernah diiklankan). Tambang emas yang terabaikan justru tingkat terakhir itu: organisasi kecil memberi peserta magang ruang lingkup sungguhan, dan ruang lingkup sungguhan itulah yang berubah menjadi baris CV yang dibeli siklus lamaran berikutnya."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "The conversion campaign",
        "id": "Kampanye konversi"
       },
       "body": {
        "en": "Week 1–2: learn the team's actual bottlenecks; write down how your manager is measured. Week 3–6: deliver something complete and visible — small and finished beats large and stuck; send Friday one-liners (“shipped X, next Y, blocked on Z”) that make your work legible. Midpoint: ask for real feedback — “what would make the second half more valuable?” — and act on it observably, which is rarer and more impressive than getting everything right first time. Week 8–10: finish artefacts, document handovers, and ask the conversion question. Every step is Module 2 of The Route in miniature: performance plus legibility, honestly played.",
        "id": "Minggu 1–2: pelajari hambatan tim yang sesungguhnya; tulis bagaimana kinerja manajermu diukur. Minggu 3–6: tuntaskan sesuatu yang utuh dan terlihat — kecil tapi selesai lebih baik daripada besar tapi macet; kirim laporan satu baris setiap Jumat (“X selesai, berikutnya Y, terhambat di Z”) supaya pekerjaanmu mudah terbaca. Pertengahan: minta umpan balik yang sungguhan — “apa yang akan membuat paruh kedua lebih bernilai?” — lalu tindak lanjuti dengan cara yang terlihat; itu lebih langka dan lebih mengesankan daripada langsung benar sejak awal. Minggu 8–10: rampungkan artefak, dokumentasikan serah terima, dan ajukan pertanyaan konversinya. Setiap langkah adalah Modul 2 The Route dalam versi mini: kinerja plus keterbacaan, dimainkan dengan jujur."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "You have no internship history and two months before applications open. Highest-leverage use of the time?",
        "id": "Kamu belum pernah magang, dan lamaran baru dibuka dua bulan lagi. Cara memakai waktu dengan daya ungkit tertinggi?"
       },
       "options": [
        {
         "en": "Collect three online certificates in trending tools",
         "id": "Mengumpulkan tiga sertifikat daring untuk alat yang sedang tren"
        },
        {
         "en": "Complete one self-assigned project with measurable results and write it into CV bullets",
         "id": "Menyelesaikan satu proyek yang kamu tugaskan sendiri, dengan hasil terukur, lalu menuliskannya menjadi butir CV"
        },
        {
         "en": "Perfect your CV template's visual design",
         "id": "Menyempurnakan desain visual templat CV-mu"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Screeners buy evidence of work, and a completed project with numbers is exactly that; certificates say attended, artefacts say can.",
        "id": "Penyaring membeli bukti kerja, dan proyek yang selesai dengan angka adalah persis itu; sertifikat mengatakan “pernah ikut”, artefak mengatakan “bisa”."
       }
      }
     ]
    },
    {
     "n": "5.3",
     "title": {
      "en": "Full-Time Application Strategy — Targeting, Timing, and Positioning",
      "id": "Strategi Lamaran Kerja Penuh Waktu — Pembidikan, Pengaturan Waktu, dan Positioning"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Full-time strategy is portfolio management under a deadline: which roles, which companies, in which order, with which story. This lesson assembles the campaign — targeting, timing, positioning — for the final-year student and fresh graduate.",
      "id": "Strategi kerja penuh waktu adalah mengelola portofolio di bawah tenggat: posisi mana, perusahaan mana, urutannya bagaimana, dengan cerita apa. Pelajaran ini merakit kampanyenya — pembidikan, pengaturan waktu, positioning — untuk mahasiswa tingkat akhir dan lulusan baru."
     },
     "objectives": [
      {
       "en": "Define a coherent target: role family × industry × company stage.",
       "id": "Menetapkan target yang koheren: keluarga posisi × industri × tahap perusahaan."
      },
      {
       "en": "Sequence applications so practice precedes priority.",
       "id": "Mengurutkan lamaran supaya latihan datang lebih dulu daripada prioritas."
      },
      {
       "en": "Position one story across CV, letter and interviews: why this, why me, why now.",
       "id": "Memosisikan satu cerita yang sama di CV, surat lamaran, dan wawancara: mengapa ini, mengapa saya, mengapa sekarang."
      }
     ],
     "takeaways": [
      {
       "en": "A coherent target multiplies every artefact: one story serves twenty applications.",
       "id": "Target yang koheren melipatgandakan setiap artefak: satu cerita cukup untuk dua puluh lamaran."
      },
      {
       "en": "Sequence foundation-tier first: your fifth interview is measurably better than your first — spend the early ones wisely.",
       "id": "Mulai dari tingkat fondasi: wawancara kelimamu terbukti lebih baik daripada yang pertama — pakai wawancara-wawancara awal dengan bijak."
      },
      {
       "en": "Positioning is one sentence: for [role family], I bring [evidence], and I'm here because [informed reason].",
       "id": "Positioning cukup satu kalimat: untuk [keluarga posisi], saya membawa [bukti], dan saya di sini karena [alasan yang berdasar]."
      }
     ],
     "sections": [
      {
       "icon": "target",
       "h": {
        "en": "Choosing the target",
        "id": "Memilih target"
       },
       "body": {
        "en": "The Range answered direction; this lesson operationalises it. Define a primary target as <b>role family</b> (analyst roles, not “anything in business”) × <b>industry</b> (two or three, from your Range exploration and Map simulations) × <b>company stage</b> (corporate programme, growth startup, SME — different screening, different day one). Add one adjacent secondary target sharing the same evidence base. Everything outside those two: decline by default, apply by exception. The test of coherence: can one CV master, one letter skeleton and one interview story bank serve the whole portfolio? If applications need entirely different stories, the target is incoherent and every application is starting from zero.",
        "id": "The Range menjawab soal arah; pelajaran ini menjadikannya operasional. Tetapkan target utama sebagai <b>keluarga posisi</b> (posisi analis, bukan “apa saja di bidang bisnis”) × <b>industri</b> (dua atau tiga, dari eksplorasimu di The Range dan simulasi di The Map) × <b>tahap perusahaan</b> (program korporat, startup yang sedang tumbuh, UKM — penyaringannya berbeda, hari pertamanya pun berbeda). Tambahkan satu target sekunder yang bersebelahan dan memakai basis bukti yang sama. Semua di luar keduanya: tolak sebagai aturan dasar, lamar hanya sebagai pengecualian. Ujian koherensinya: bisakah satu CV induk, satu kerangka surat, dan satu bank cerita wawancara melayani seluruh portofolio? Kalau tiap lamaran butuh cerita yang sama sekali berbeda, targetmu tidak koheren, dan setiap lamaran mulai lagi dari nol."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "Sequencing the campaign",
        "id": "Mengurutkan kampanye"
       },
       "body": {
        "en": "Interview skill compounds within a search: pacing, story delivery and salary conversations all improve with live repetitions. So sequence deliberately: open with foundation-tier applications to bank early practice where stakes are low; move match-tier applications into the middle; time reach-tier submissions for when your interview loop is warm — while respecting their fixed windows (5.1's calendar overrides preference; a reach programme closing early gets applied to early, prepared or not, because a closed window scores zero). Track everything in the Gym's tracker; review sequencing monthly as data arrives.",
        "id": "Keterampilan wawancara menumpuk sepanjang satu pencarian kerja: tempo, cara menyampaikan cerita, dan percakapan soal gaji semuanya membaik dengan pengulangan yang sungguhan. Karena itu, urutkan dengan sengaja: buka dengan lamaran tingkat fondasi untuk menabung latihan di awal, ketika taruhannya rendah; tempatkan lamaran tingkat sepadan di tengah; jadwalkan lamaran tingkat impian ketika ritme wawancaramu sudah panas — sambil tetap menghormati jendela waktu mereka yang tidak bisa digeser (kalender di 5.1 mengalahkan preferensi; program impian yang tutup lebih awal harus dilamar lebih awal, siap atau tidak, karena jendela yang tertutup bernilai nol). Catat semuanya di pelacak Gym; tinjau urutannya setiap bulan seiring data yang masuk."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "Positioning: one story, three answers",
        "id": "Positioning: satu cerita, tiga jawaban"
       },
       "body": {
        "en": "Every artefact in the campaign answers the same three questions. <b>Why this role family:</b> an informed reason with contact evidence — “the Map simulations and my thesis both pulled me toward analytical work” beats “I am passionate about data”. <b>Why me:</b> your two or three strongest evidence lines, the same ones leading the CV. <b>Why now / why us:</b> the company-specific fact (2.4's paragraph three) plus your availability. Write the three answers once, one paragraph each; every letter, application form and interview opener then becomes an arrangement of sentences you already own. Consistency across artefacts is itself a signal — screeners at later stages reread what earlier stages saw.",
        "id": "Setiap artefak dalam kampanye menjawab tiga pertanyaan yang sama. <b>Mengapa keluarga posisi ini:</b> alasan yang berdasar, dengan bukti bahwa kamu pernah bersentuhan langsung — “simulasi di The Map dan skripsi saya sama-sama menarik saya ke pekerjaan analitis” mengalahkan “saya bersemangat soal data”. <b>Mengapa saya:</b> dua atau tiga baris bukti terkuatmu, yang sama dengan yang memimpin CV-mu. <b>Mengapa sekarang / mengapa perusahaan ini:</b> fakta khusus tentang perusahaan itu (paragraf ketiga dari 2.4) plus kapan kamu bisa mulai. Tulis ketiga jawaban itu sekali saja, masing-masing satu paragraf; setiap surat, formulir lamaran, dan pembuka wawancara lalu tinggal menyusun ulang kalimat-kalimat yang sudah kamu miliki. Konsistensi antar-artefak itu sendiri sebuah sinyal — penyaring di tahap lanjut membaca ulang apa yang sudah dilihat tahap awal."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why do foundation-tier applications go first in the sequence?",
        "id": "Mengapa lamaran tingkat fondasi ditaruh paling depan dalam urutan?"
       },
       "options": [
        {
         "en": "They are easier to win, boosting confidence",
         "id": "Karena lebih mudah dimenangkan, jadi menaikkan rasa percaya diri"
        },
        {
         "en": "Interview skill compounds with repetitions — early low-stakes rounds warm you up for the applications that matter most",
         "id": "Karena keterampilan wawancara menumpuk lewat pengulangan — ronde awal yang taruhannya rendah memanaskanmu untuk lamaran yang paling penting"
        },
        {
         "en": "Foundation companies have shorter processes",
         "id": "Karena proses di perusahaan tingkat fondasi lebih singkat"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Your fifth interview is materially better than your first. Sequencing spends the clumsy repetitions where they cost least — subject always to fixed windows.",
        "id": "Wawancara kelimamu jauh lebih baik daripada yang pertama. Pengurutan menempatkan pengulangan yang masih canggung di tempat yang biayanya paling murah — dengan selalu tunduk pada jendela waktu yang tidak bisa digeser."
       }
      }
     ]
    },
    {
     "n": "5.4",
     "title": {
      "en": "Mindset and Career Planning — Navigating Early Career Decisions",
      "id": "Pola Pikir dan Perencanaan Karier — Mengambil Keputusan di Awal Karier"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "Early-career decisions arrive as dilemmas: offer in hand versus process still running, prestige versus scope, salary versus learning. This lesson installs a decision protocol and drills it on the three dilemmas most graduates actually face.",
      "id": "Keputusan di awal karier datang dalam bentuk dilema: tawaran yang sudah di tangan versus proses yang masih berjalan, prestise versus ruang lingkup, gaji versus kesempatan belajar. Pelajaran ini memasang sebuah protokol keputusan dan melatihnya pada tiga dilema yang paling sering benar-benar dihadapi lulusan baru."
     },
     "objectives": [
      {
       "en": "Apply the two-lens test: 3-year outcome fit and reversibility.",
       "id": "Menerapkan uji dua lensa: kesesuaian dengan hasil 3 tahun, dan seberapa bisa dibatalkan."
      },
      {
       "en": "Handle exploding offers and parallel processes honestly.",
       "id": "Menangani tawaran bertenggat singkat dan proses yang berjalan paralel dengan jujur."
      },
      {
       "en": "Reframe first-job choice as trajectory choice, not destination choice.",
       "id": "Membingkai ulang pilihan pekerjaan pertama sebagai pilihan lintasan, bukan pilihan tujuan akhir."
      }
     ],
     "takeaways": [
      {
       "en": "First jobs are rarely destinations; they are launch angles — judge them by the trajectory they open.",
       "id": "Pekerjaan pertama jarang menjadi tujuan akhir; ia adalah sudut peluncuran — nilailah dari lintasan yang dibukanya."
      },
      {
       "en": "Most early decisions are more reversible than they feel; the truly one-way doors deserve the deliberation.",
       "id": "Sebagian besar keputusan awal lebih mudah dibatalkan daripada yang terasa; hanya pintu satu arah yang sungguhan yang pantas dipertimbangkan lama."
      },
      {
       "en": "Honesty with employers about timelines is both ethical and strategically sound — games collapse careers early.",
       "id": "Jujur kepada perusahaan soal lini waktumu itu etis sekaligus strategis — bermain-main dengan itu bisa meruntuhkan karier sejak dini."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "The two-lens protocol",
        "id": "Protokol dua lensa"
       },
       "body": {
        "en": "For any career decision, run two lenses before any pros-and-cons list. <b>Lens 1 — outcome fit:</b> against your 3-year outcome (Map 2.3), which option moves the needle further? Score the components: domain progress, level progress, evidence artefacts, constraint respect. <b>Lens 2 — reversibility:</b> if this choice proves wrong, what does undoing it cost? Joining a startup that fails is highly reversible (you leave with scope stories); a two-year bonded contract with penalties is not. The rule: decide reversible things fast with 70% confidence; give true one-way doors the full matrix treatment from Map 3.2. Most graduate agonising is misallocated — deep deliberation spent on reversible doors, snap judgment on binding ones.",
        "id": "Untuk keputusan karier apa pun, jalankan dua lensa ini sebelum membuat daftar untung-rugi. <b>Lensa 1 — kesesuaian hasil:</b> diukur terhadap hasil 3 tahunmu (Map 2.3), opsi mana yang menggerakkan jarum lebih jauh? Beri nilai pada komponennya: kemajuan di bidang, kemajuan jenjang, artefak bukti, dan seberapa batasanmu dihormati. <b>Lensa 2 — bisa dibatalkan atau tidak:</b> kalau pilihan ini ternyata keliru, apa ongkos untuk membatalkannya? Bergabung ke startup yang lalu gagal sangat mudah dibatalkan (kamu pergi membawa cerita tentang ruang lingkup yang luas); kontrak ikatan dinas dua tahun dengan penalti tidak. Aturannya: putuskan hal-hal yang bisa dibatalkan dengan cepat, cukup dengan keyakinan 70%; berikan pintu satu arah yang sungguhan perlakuan matriks penuh dari Map 3.2. Kegalauan kebanyakan lulusan baru salah alamat — pertimbangan mendalam dihabiskan untuk pintu yang bisa dibatalkan, sementara pintu yang mengikat diputuskan sekilas."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Dilemma 1 — The exploding offer",
        "id": "Dilema 1 — Tawaran bertenggat singkat"
       },
       "body": {
        "en": "A solid match-tier company offers you a role with seven days to accept. Your reach-tier process — final round done — promises a decision “in two to three weeks”. Decide your moves, then reveal.",
        "id": "Sebuah perusahaan tingkat sepadan yang solid menawarimu posisi, dengan tenggat tujuh hari untuk menjawab. Proses di perusahaan tingkat impianmu — ronde final sudah selesai — menjanjikan keputusan “dalam dua sampai tiga minggu”. Tentukan langkah-langkahmu, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Two honest, parallel moves. To the offering company: gratitude, genuine enthusiasm, and a straightforward extension request — “could I have until the 15th to give you a fully committed yes?” Many will grant it; the request itself is normal and professional. To the reach company: the update that changes their clock — “I've received an offer with a deadline of the 15th; your process remains my first preference — is an accelerated decision possible?” Final-round candidates trigger real accelerations weekly. If the extension is refused and the reach answer cannot come in time: run the two lenses on what you actually hold — a real offer against a probability. Never accept intending to renege; reneging burns a network at its most formative moment.",
        "id": "Dua langkah jujur, dijalankan bersamaan. Kepada perusahaan yang menawari: ucapkan terima kasih, tunjukkan antusiasme yang tulus, dan minta perpanjangan secara lugas — “bolehkah saya diberi waktu sampai tanggal 15, supaya jawaban ‘ya’ saya benar-benar mantap?” Banyak yang akan mengabulkannya; permintaan seperti ini normal dan profesional. Kepada perusahaan impian: kabar yang mengubah jam mereka — “saya sudah menerima tawaran lain dengan tenggat tanggal 15; proses di perusahaan Anda tetap pilihan pertama saya — apakah keputusan bisa dipercepat?” Kandidat di ronde final memicu percepatan sungguhan setiap minggu. Kalau perpanjangan ditolak dan jawaban dari perusahaan impian tidak mungkin tiba tepat waktu: jalankan dua lensa pada apa yang benar-benar kamu pegang — tawaran nyata melawan sebuah kemungkinan. Jangan pernah menerima sambil berniat mundur belakangan; mundur setelah menerima membakar jaringanmu tepat di momen paling menentukan."
       }
      },
      {
       "h": {
        "en": "Dilemma 2 — Prestige vs scope",
        "id": "Dilema 2 — Prestise vs ruang lingkup"
       },
       "body": {
        "en": "Offer A: famous corporate, rotational programme, well-paid, but reviews describe two years of shadowing. Offer B: growing 80-person company, analyst role owning real deliverables from month one, 15% lower salary. Your 3-year outcome: “own end-to-end analyses with a shipped portfolio”. Decide with the lenses, then reveal.",
        "id": "Tawaran A: korporasi terkenal, program rotasi, gaji bagus, tetapi ulasan orang dalam menggambarkan dua tahun hanya membayangi senior. Tawaran B: perusahaan yang sedang tumbuh dengan 80 karyawan, posisi analis yang memegang hasil kerja sungguhan sejak bulan pertama, gaji 15% lebih rendah. Hasil 3 tahunmu: “memegang analisis dari awal sampai akhir, dengan portofolio yang sudah dirilis”. Putuskan dengan kedua lensa, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Lens 1 favours B strongly: the outcome names ownership and artefacts, which B delivers from month one and A defers two years. Lens 2 softens the risk: leaving B after 18 months with a real portfolio is an easy story; the brand gap is recoverable later, and B-to-A moves happen more easily than students assume once evidence exists. What would flip it: an outcome centred on corporate leadership tracks, a programme with genuinely rotations-with-ownership, family constraints where the salary delta binds, or A being one of the few brands your target industry treats as a passport. The lesson is not “B is right” — it is that the outcome sentence decides, and if yours cannot decide this, it needs sharpening (back to Map 2.3).",
        "id": "Lensa 1 sangat memihak B: hasilmu menyebut kepemilikan dan artefak, yang diberikan B sejak bulan pertama dan ditunda A selama dua tahun. Lensa 2 meredakan risikonya: meninggalkan B setelah 18 bulan dengan portofolio sungguhan adalah cerita yang mudah dijelaskan; selisih nama besar bisa dikejar belakangan, dan pindah dari B ke A ternyata lebih mudah daripada dugaan mahasiswa begitu buktinya ada. Yang bisa membalikkan keputusan: hasil 3 tahun yang berpusat pada jalur kepemimpinan korporat, program rotasi yang benar-benar memberi kepemilikan, kondisi keluarga yang membuat selisih gaji itu mengikat, atau A termasuk segelintir nama yang diperlakukan industri targetmu sebagai paspor. Pelajarannya bukan “B yang benar” — melainkan kalimat hasilmu yang memutuskan, dan kalau kalimat itu belum bisa memutuskan dilema ini, ia perlu dipertajam (kembali ke Map 2.3)."
       }
      },
      {
       "h": {
        "en": "Dilemma 3 — The pause temptation",
        "id": "Dilema 3 — Godaan untuk berhenti sejenak"
       },
       "body": {
        "en": "Six months of rejections. A relative offers a comfortable admin role in the family business, “just until something better comes”. You are tired. Decide, then reveal.",
        "id": "Enam bulan ditolak terus. Seorang kerabat menawarkan posisi administrasi yang nyaman di usaha keluarga, “sementara saja, sampai ada yang lebih baik”. Kamu lelah. Putuskan, lalu buka tinjauan."
       },
       "debrief": {
        "en": "The honest analysis distinguishes the role from the frame. Taken as drift — untracked, indefinite, search paused — it quietly becomes year three of a career your outcome never chose; “temporary” without a boundary is the most common trajectory killer. Taken as a platform — income while the funnel keeps running at reduced but non-zero cadence (three applications weekly), plus deliberately extracting evidence from the role itself (digitise a process, build the reporting sheet, negotiate with a supplier: family businesses are scope goldmines) — it is a legitimate move. The two lenses agree: reversible if bounded, binding if unbounded. Write the boundary before accepting: a date, a weekly application floor, and one skill deliverable per month, logged in your audit.",
        "id": "Analisis yang jujur membedakan posisinya dari bingkainya. Kalau diambil sebagai tempat hanyut — tanpa pelacakan, tanpa batas waktu, pencarian kerja dihentikan — posisi itu diam-diam menjadi tahun ketiga dari karier yang tidak pernah kamu pilih; “sementara” tanpa batas adalah pembunuh lintasan karier yang paling umum. Kalau diambil sebagai pijakan — ada penghasilan sementara corong tetap berjalan dengan ritme yang lebih pelan tetapi tidak nol (tiga lamaran per minggu), plus dengan sengaja menambang bukti dari posisi itu sendiri (mendigitalkan satu proses, membangun lembar pelaporan, bernegosiasi dengan pemasok: usaha keluarga adalah tambang emas ruang lingkup) — itu langkah yang sah. Kedua lensa sepakat: bisa dibatalkan kalau dibatasi, mengikat kalau tanpa batas. Tulis batasnya sebelum menerima: satu tanggal, jumlah minimum lamaran per minggu, dan satu hasil keterampilan per bulan, dicatat di auditmu."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "What makes “accept now, renege if the better offer lands” the wrong move in Dilemma 1?",
        "id": "Apa yang membuat “terima dulu sekarang, mundur kalau tawaran yang lebih baik datang” menjadi langkah yang salah di Dilema 1?"
       },
       "options": [
        {
         "en": "It is illegal in most jurisdictions",
         "id": "Karena itu ilegal di sebagian besar negara"
        },
        {
         "en": "It trades a one-time convenience for network damage at the most formative moment, and both honest alternatives (extension, acceleration) were still untried",
         "id": "Karena itu menukar kemudahan sesaat dengan kerusakan jaringan di momen paling menentukan, padahal dua alternatif yang jujur (minta perpanjangan, minta percepatan) belum dicoba"
        },
        {
         "en": "Reach-tier companies never accelerate decisions",
         "id": "Karena perusahaan tingkat impian tidak pernah mempercepat keputusan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Recruiters move between companies and remember; and the honest moves usually work. The game is rarely necessary and never free.",
        "id": "Perekrut berpindah-pindah perusahaan dan mereka ingat; dan langkah yang jujur biasanya berhasil. Bermain-main seperti itu jarang perlu, dan tidak pernah gratis."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/bg/stage-graduation.jpg",
   "heroPos": "center 35%"
  },
  {
   "num": 6,
   "title": {
    "en": "Administrative Screening Strategy — ATS &amp; Application Optimisation",
    "id": "Strategi Seleksi Administrasi — ATS &amp; Optimalisasi Lamaran"
   },
   "overview": {
    "en": "Module 6 of The Pack focuses on administrative screening strategy — ats &amp; application optimisation. Work through the lessons in order — each builds on the last.",
    "id": "Modul 6 The Pack berfokus pada strategi seleksi administrasi — ATS &amp; optimalisasi lamaran. Kerjakan pelajarannya secara berurutan — setiap pelajaran dibangun di atas pelajaran sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply administrative screening strategy — ats &amp; application optimisation to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu bisa menerapkan strategi seleksi administrasi — ATS &amp; optimalisasi lamaran pada keputusan kariermu sendiri, dengan metode yang konkret dan bisa diulang."
   },
   "lessons": [
    {
     "n": "6.1",
     "title": {
      "en": "Introduction to Applicant Tracking Systems (ATS) — How the Machine Works",
      "id": "Pengantar Applicant Tracking System (ATS) — Cara Kerja Mesinnya"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Before any human sees your application, software has parsed, indexed and often ranked it. This lesson explains what an ATS actually does — separating the real mechanics from the folklore — so the next two lessons can optimise for the machine that exists, not the monster candidates imagine.",
      "id": "Sebelum ada manusia yang melihat lamaranmu, sebuah perangkat lunak sudah lebih dulu mengurai, mengindeks, dan sering kali memeringkatnya. Pelajaran ini menjelaskan apa yang sebenarnya dilakukan ATS — memisahkan cara kerja yang nyata dari mitos — supaya dua pelajaran berikutnya bisa mengoptimalkan lamaranmu untuk mesin yang benar-benar ada, bukan monster yang dibayangkan para kandidat."
     },
     "objectives": [
      {
       "en": "Describe the ATS pipeline: parse, index, filter, rank, present.",
       "id": "Menjelaskan alur kerja ATS: urai, indeks, saring, peringkatkan, sajikan."
      },
      {
       "en": "Separate ATS facts from folklore — what actually rejects applications.",
       "id": "Memisahkan fakta ATS dari mitos — apa yang sebenarnya membuat lamaran ditolak."
      },
      {
       "en": "Identify the failure modes you control: parsing breaks, missing keywords, unanswered knockouts.",
       "id": "Mengenali kegagalan yang ada dalam kendalimu: format yang gagal diurai, kata kunci yang tidak ada, pertanyaan penggugur yang dijawab keliru."
      }
     ],
     "takeaways": [
      {
       "en": "Most ATS rejections are human decisions applied to machine-organised lists — the machine's job is ordering the pile.",
       "id": "Sebagian besar penolakan lewat ATS adalah keputusan manusia atas daftar yang disusun mesin — tugas mesin hanya mengurutkan tumpukan."
      },
      {
       "en": "Parsing failure is silent: a CV the software cannot read becomes an empty record nobody ever ranks highly.",
       "id": "Kegagalan mengurai itu senyap: CV yang tidak bisa dibaca perangkat lunak menjadi catatan kosong yang tidak akan pernah diperingkatkan tinggi."
      },
      {
       "en": "Knockout questions reject more candidates than any algorithm — answer them exactly, never approximately.",
       "id": "Pertanyaan penggugur menolak lebih banyak kandidat daripada algoritme mana pun — jawab dengan tepat, jangan pernah kira-kira."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "What the machine actually does",
        "id": "Apa yang sebenarnya dilakukan mesin"
       },
       "body": {
        "en": "An ATS is a workflow database. <b>Parse:</b> extract your text into structured fields — name, roles, dates, education, skills. <b>Index:</b> make every word searchable. <b>Filter:</b> apply knockout answers (work authorisation, degree, GPA floors, availability) as hard gates. <b>Rank or match:</b> many systems score keyword and requirement overlap against the JD; recruiters see an ordered list. <b>Present:</b> the recruiter works the list top-down under time pressure — which is where the six-second scan happens. Folklore says a robot silently bins 75% of CVs; reality is more mundane and more fixable: badly parsed CVs rank low, missing keywords rank low, and knockouts reject exactly what they say they reject.",
        "id": "ATS pada dasarnya adalah basis data alur kerja. <b>Urai:</b> mengekstrak teksmu ke dalam kolom-kolom terstruktur — nama, posisi, tanggal, pendidikan, keterampilan. <b>Indeks:</b> membuat setiap kata bisa dicari. <b>Saring:</b> menerapkan jawaban pertanyaan penggugur (izin kerja, gelar, batas minimum IPK, ketersediaan) sebagai gerbang yang tidak bisa ditawar. <b>Peringkatkan atau cocokkan:</b> banyak sistem memberi skor berdasarkan seberapa banyak kata kunci dan persyaratan yang beririsan dengan deskripsi lowongan; perekrut melihat daftar yang sudah terurut. <b>Sajikan:</b> perekrut menggarap daftar itu dari atas ke bawah dalam tekanan waktu — di sinilah pindaian enam detik terjadi. Mitosnya: robot diam-diam membuang 75% CV. Kenyataannya lebih membosankan dan lebih bisa diperbaiki: CV yang gagal diurai peringkatnya rendah, CV tanpa kata kunci peringkatnya rendah, dan pertanyaan penggugur menolak persis seperti yang tertulis."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "The three failure modes you control",
        "id": "Tiga kegagalan yang ada dalam kendalimu"
       },
       "body": {
        "en": "<b>Parsing breaks:</b> tables, text boxes, multi-column layouts, headers/footers and image-embedded text scramble extraction — your experience lands in the wrong fields or vanishes. <b>Keyword absence:</b> you wrote “handled client relationships” while the JD and every search says “account management”; the index has no entry for you. <b>Knockout mismatches:</b> answering “expected salary” with a number double the band, or “available from” with a date after their start, triggers automatic exclusion regardless of CV quality. All three are audit-able before submission — which is exactly what the Screening Gym's ATS check and the next lesson do.",
        "id": "<b>Gagal diurai:</b> tabel, kotak teks, tata letak beberapa kolom, header/footer, dan teks yang tertanam dalam gambar mengacaukan ekstraksi — pengalamanmu masuk ke kolom yang salah atau lenyap sama sekali. <b>Kata kunci tidak ada:</b> kamu menulis “menangani hubungan klien” sementara deskripsi lowongan dan setiap pencarian memakai istilah “account management”; indeksnya tidak punya catatan apa pun tentangmu. <b>Salah menjawab pertanyaan penggugur:</b> mengisi “gaji yang diharapkan” dengan angka dua kali lipat dari rentang mereka, atau “bisa mulai sejak” dengan tanggal setelah tanggal mulai yang mereka inginkan, memicu penolakan otomatis seberapa pun bagusnya CV-mu. Ketiganya bisa diperiksa sebelum kamu mengirim — dan itulah persis yang dilakukan pemeriksa ATS di Screening Gym dan pelajaran berikutnya."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "Why companies use them",
        "id": "Mengapa perusahaan memakainya"
       },
       "body": {
        "en": "Volume, compliance and memory. Thousands of applications need ordering; regulations demand auditable process; and the database remembers you — a strong candidate rejected for timing is searchable for the next opening, which is why a clean, parseable application pays even when this role says no. Understanding the system's purpose also sets the ethical line the next lessons hold: optimising your true experience into the machine's language is craft; injecting false keywords is fraud with a paper trail, in a database designed never to forget.",
        "id": "Volume, kepatuhan, dan ingatan. Ribuan lamaran perlu diurutkan; regulasi menuntut proses yang bisa diaudit; dan basis data itu mengingatmu — kandidat kuat yang ditolak karena soal waktu tetap bisa ditemukan lagi untuk lowongan berikutnya. Itulah mengapa lamaran yang bersih dan mudah diurai tetap terbayar meskipun untuk posisi ini jawabannya tidak. Memahami tujuan sistem ini juga menetapkan garis etika yang dipegang pelajaran-pelajaran berikutnya: menerjemahkan pengalaman aslimu ke dalam bahasa mesin adalah keahlian; menyisipkan kata kunci palsu adalah penipuan yang meninggalkan jejak, di dalam basis data yang memang dirancang untuk tidak pernah lupa."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: The ATS pipeline — where applications actually die.",
       "id": "Peraga 1: Alur kerja ATS — di mana lamaran benar-benar gugur."
      },
      "title": {
       "en": "Parse → Index → Filter → Rank → Present",
       "id": "Urai → Indeks → Saring → Peringkatkan → Sajikan"
      },
      "items": [
       {
        "h": {
         "en": "Parse",
         "id": "Urai"
        },
        "sub": {
         "en": "Layout breaks lose your data here",
         "id": "Tata letak yang rumit menghilangkan datamu di sini"
        }
       },
       {
        "h": {
         "en": "Index & filter",
         "id": "Indeks & saring"
        },
        "sub": {
         "en": "Knockouts reject exactly as written",
         "id": "Pertanyaan penggugur menolak persis seperti yang tertulis"
        }
       },
       {
        "h": {
         "en": "Rank",
         "id": "Peringkatkan"
        },
        "sub": {
         "en": "JD keyword overlap orders the pile",
         "id": "Irisan kata kunci dengan deskripsi lowongan mengurutkan tumpukan"
        }
       },
       {
        "h": {
         "en": "Present",
         "id": "Sajikan"
        },
        "sub": {
         "en": "A human scans the top of the list",
         "id": "Seorang manusia memindai bagian atas daftar"
        }
       }
      ],
      "longdesc": {
       "en": "A four-stage flow: parsing extracts the CV into structured fields, where broken layouts silently lose data; indexing and knockout filters apply hard gates exactly as configured; ranking orders candidates by requirement and keyword overlap with the job description; presentation puts the ordered list before a time-pressed human who scans from the top.",
       "id": "Alur empat tahap: pengurai mengekstrak CV ke dalam kolom-kolom terstruktur, dan tata letak yang rumit diam-diam menghilangkan data di sini; pengindeksan dan saringan penggugur menerapkan gerbang keras persis seperti yang dikonfigurasi; pemeringkatan mengurutkan kandidat berdasarkan irisan persyaratan dan kata kunci dengan deskripsi lowongan; penyajian menaruh daftar yang sudah terurut di depan manusia yang terdesak waktu dan memindai dari atas."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "knockout question",
        "id": "pertanyaan penggugur"
       },
       "def": {
        "en": "An application-form question configured as a hard gate — a disqualifying answer excludes automatically, before any ranking.",
        "id": "Pertanyaan di formulir lamaran yang dikonfigurasi sebagai gerbang keras — jawaban yang tidak memenuhi syarat langsung menggugurkan secara otomatis, sebelum pemeringkatan apa pun."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A strong candidate's beautifully designed two-column CV never gets callbacks through portals, but the same content sent by email does. Prime suspect?",
        "id": "CV dua kolom berdesain cantik milik seorang kandidat yang kuat tidak pernah dipanggil kalau dikirim lewat portal, tetapi isi yang sama berhasil kalau dikirim lewat email. Tersangka utamanya?"
       },
       "options": [
        {
         "en": "Recruiters dislike well-designed CVs",
         "id": "Perekrut tidak suka CV yang desainnya bagus"
        },
        {
         "en": "The parser scrambles the two-column layout, so the portal's structured record is empty or garbled",
         "id": "Pengurai mengacaukan tata letak dua kolom, sehingga catatan terstruktur di portal kosong atau berantakan"
        },
        {
         "en": "Email applications always outrank portal ones",
         "id": "Lamaran lewat email selalu diprioritaskan di atas lamaran lewat portal"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Same content, different channel, different outcome isolates the variable: machine parsing. The next lesson builds the parse-safe version.",
        "id": "Isi sama, saluran berbeda, hasil berbeda — itu mengisolasi variabelnya: penguraian oleh mesin. Pelajaran berikutnya membangun versi yang aman diurai."
       }
      }
     ],
     "quote": {
      "en": "Before any human reads your application, a machine has already voted.",
      "id": "Sebelum ada manusia yang membaca lamaranmu, sebuah mesin sudah lebih dulu memberikan suaranya."
     }
    },
    {
     "n": "6.2",
     "title": {
      "en": "Resume Optimisation Techniques for ATS Screening",
      "id": "Teknik Optimalisasi Resume untuk Seleksi ATS"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The machine-ready CV: parse-safe formatting, JD-mirrored keywords placed honestly, and the pre-flight routine that catches breaks before submission — including running your document through the Gym's on-device ATS check.",
      "id": "CV yang siap dibaca mesin: format yang aman diurai, kata kunci yang mencerminkan deskripsi lowongan dan ditempatkan dengan jujur, serta rutinitas pemeriksaan pra-kirim yang menangkap masalah sebelum lamaran terkirim — termasuk menjalankan dokumenmu lewat pemeriksa ATS di Gym, yang bekerja sepenuhnya di perangkatmu."
     },
     "objectives": [
      {
       "en": "Format a CV that survives any parser: structure, fonts, file type.",
       "id": "Memformat CV yang lolos dari pengurai mana pun: struktur, fon, jenis berkas."
      },
      {
       "en": "Mirror JD keywords truthfully across the CV's high-weight zones.",
       "id": "Mencerminkan kata kunci deskripsi lowongan dengan jujur di zona-zona berbobot tinggi pada CV."
      },
      {
       "en": "Run the pre-flight: parse test, keyword coverage, knockout review.",
       "id": "Menjalankan pemeriksaan pra-kirim: uji urai, cakupan kata kunci, tinjauan pertanyaan penggugur."
      }
     ],
     "takeaways": [
      {
       "en": "Boring formats win: single column, standard headings, real text, no tables — the parser's favourite CV is a plain one.",
       "id": "Format yang membosankan justru menang: satu kolom, judul bagian yang standar, teks asli, tanpa tabel — CV kesayangan pengurai adalah CV yang polos."
      },
      {
       "en": "Keywords must appear as the JD spells them, in context, attached to true experience.",
       "id": "Kata kunci harus muncul persis seperti ejaan di deskripsi lowongan, dalam konteks, dan melekat pada pengalaman yang benar-benar kamu miliki."
      },
      {
       "en": "Three minutes of pre-flight checks beat three weeks of wondering why nobody called.",
       "id": "Tiga menit pemeriksaan pra-kirim mengalahkan tiga minggu bertanya-tanya kenapa tidak ada yang menelepon."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "Parse-safe formatting",
        "id": "Format yang aman diurai"
       },
       "body": {
        "en": "Single column, top to bottom. Standard section headings the parser recognises: Education, Experience, Projects, Skills — cleverness (“My Journey”) costs fields. Standard fonts, 11pt+, no text boxes, no tables, no icons carrying meaning, contact details in the body (headers/footers are skipped by many parsers), dates in one consistent format (Jan 2024 – Mar 2025). File type: PDF exported from a text document unless the portal demands DOCX — never a scanned image, whose text does not exist to a parser. The design instinct is not wasted: spend it on typography, spacing and ruthless clarity, which both machines and six-second humans reward.",
        "id": "Satu kolom, dari atas ke bawah. Judul bagian yang standar dan dikenali pengurai: Pendidikan, Pengalaman, Proyek, Keterampilan — judul yang kreatif (“Perjalananku”) membuatmu kehilangan kolom data. Fon standar, ukuran 11pt ke atas, tanpa kotak teks, tanpa tabel, tanpa ikon yang membawa makna, detail kontak ditulis di badan dokumen (header/footer dilewati banyak pengurai), tanggal dalam satu format yang konsisten (Jan 2024 – Mar 2025). Jenis berkas: PDF yang diekspor dari dokumen teks, kecuali portal meminta DOCX — jangan pernah gambar hasil pindaian, karena bagi pengurai teksnya tidak ada. Naluri desainmu tidak sia-sia: curahkan pada tipografi, jarak antarbaris, dan kejelasan tanpa kompromi, yang dihargai baik oleh mesin maupun oleh manusia yang hanya punya enam detik."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Honest keyword mirroring",
        "id": "Mencerminkan kata kunci dengan jujur"
       },
       "body": {
        "en": "Extract the JD's load-bearing terms: named tools, methodologies, competencies that repeat or lead lists. Where your true experience matches, use their exact spelling — “stakeholder management”, “SQL”, “A/B testing” — in the high-weight zones: the target-role line, the skills section, and inside experience bullets where context proves use (“wrote SQL queries against a 200k-row sales table”). A term in a bullet with evidence outranks the same term naked in a skills list. The line that must not be crossed: no tool you have not used, no competency without an evidence bullet to back it — interviews probe keywords, and Module 2's honesty rule applies with a database remembering everything.",
        "id": "Ambil istilah-istilah penopang dari deskripsi lowongan: nama alat, metodologi, dan kompetensi yang berulang atau ditaruh di awal daftar. Di bagian yang benar-benar cocok dengan pengalamanmu, gunakan ejaan persis seperti mereka — “stakeholder management”, “SQL”, “A/B testing” — di zona berbobot tinggi: baris posisi yang dituju, bagian keterampilan, dan di dalam butir pengalaman yang konteksnya membuktikan kamu memang memakainya (“menulis kueri SQL atas tabel penjualan 200 ribu baris”). Sebuah istilah di dalam butir yang berbukti mengalahkan istilah yang sama yang berdiri telanjang di daftar keterampilan. Garis yang tidak boleh dilewati: tidak ada alat yang belum pernah kamu pakai, tidak ada kompetensi tanpa butir bukti yang menopangnya — wawancara akan menggali kata kunci, dan aturan kejujuran dari Modul 2 berlaku, dengan basis data yang mengingat segalanya."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "The pre-flight routine",
        "id": "Rutinitas pemeriksaan pra-kirim"
       },
       "body": {
        "en": "Before every submission, three checks. <b>Parse test:</b> select-all-copy your PDF into a plain text editor — if the text comes out in reading order with nothing missing, parsers will manage; scrambled order or vanished sections means the layout must simplify. <b>Coverage check:</b> run the Screening Gym's ATS check — CV against this JD, on-device — and review which load-bearing terms are absent; add only the ones your experience honestly supports. <b>Knockout review:</b> read every application-form question as a gate — salary bands researched (The Range's salary data helps), availability accurate, certifications exactly as held. Three minutes, every time; the checklist mentality is precisely what the administrative screen is testing for anyway.",
        "id": "Sebelum setiap pengiriman, tiga pemeriksaan. <b>Uji urai:</b> pilih semua teks di PDF-mu, salin, lalu tempel ke editor teks polos — kalau teksnya keluar sesuai urutan baca dan tidak ada yang hilang, pengurai akan sanggup; kalau urutannya kacau atau ada bagian yang lenyap, tata letaknya harus disederhanakan. <b>Pemeriksaan cakupan:</b> jalankan pemeriksa ATS di Screening Gym — CV-mu dibandingkan dengan deskripsi lowongan ini, sepenuhnya di perangkatmu — dan tinjau istilah penopang mana yang belum ada; tambahkan hanya yang secara jujur didukung pengalamanmu. <b>Tinjauan pertanyaan penggugur:</b> baca setiap pertanyaan di formulir lamaran sebagai gerbang — rentang gaji sudah diriset (data gaji di The Range membantu), ketersediaan ditulis akurat, sertifikasi ditulis persis seperti yang kamu pegang. Tiga menit, setiap kali; mentalitas daftar periksa ini persis yang sebenarnya diuji oleh seleksi administrasi."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "Skills section — naked vs evidenced",
        "id": "Bagian keterampilan — telanjang vs berbukti"
       },
       "q": {
        "en": "Claiming data skills for an analyst JD",
        "id": "Mengklaim keterampilan data untuk lowongan analis"
       },
       "weak": {
        "en": "“Skills: SQL, Python, Excel, Tableau, machine learning, communication, leadership, teamwork, time management, creativity.”",
        "id": "“Keterampilan: SQL, Python, Excel, Tableau, machine learning, komunikasi, kepemimpinan, kerja tim, manajemen waktu, kreativitas.”"
       },
       "strong": {
        "en": "“Skills: SQL (thesis: 200k-row retail dataset), Python/pandas (3 course projects), Excel incl. pivot models (org budget, Rp 45m). Currently learning: Tableau.”",
        "id": "“Keterampilan: SQL (skripsi: dataset ritel 200 ribu baris), Python/pandas (3 proyek mata kuliah), Excel termasuk model pivot (anggaran organisasi, Rp45 juta). Sedang dipelajari: Tableau.”"
       },
       "why": {
        "en": "Each keyword ships with its proof and survives interview probing; the honest “currently learning” outperforms a hollow claim when the technical interviewer starts asking questions.",
        "id": "Setiap kata kunci datang bersama buktinya dan tahan digali saat wawancara; “sedang dipelajari” yang jujur mengalahkan klaim kosong begitu pewawancara teknis mulai bertanya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "The copy-paste parse test on your CV outputs your job titles separated from their dates and employers. What must change?",
        "id": "Uji salin-tempel pada CV-mu menghasilkan jabatan yang terpisah dari tanggal dan nama perusahaannya. Apa yang harus diubah?"
       },
       "options": [
        {
         "en": "Nothing — humans will understand it",
         "id": "Tidak ada — manusia akan tetap memahaminya"
        },
        {
         "en": "The layout: likely a table or multi-column structure is scattering related fields; rebuild as a single column",
         "id": "Tata letaknya: kemungkinan ada tabel atau struktur beberapa kolom yang memisahkan kolom-kolom yang saling terkait; bangun ulang menjadi satu kolom"
        },
        {
         "en": "The font: switch to a more professional typeface",
         "id": "Fonnya: ganti ke jenis huruf yang lebih profesional"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Reading-order corruption is the parser seeing your layout's internal structure. Single-column rebuilds fix it permanently.",
        "id": "Urutan baca yang kacau berarti pengurai sedang melihat struktur internal tata letakmu. Membangun ulang menjadi satu kolom memperbaikinya untuk selamanya."
       }
      }
     ],
     "tool": {
      "id": "gym",
      "mode": "ats",
      "title": {
       "en": "Pre-flight this CV now",
       "id": "Periksa CV ini sekarang"
      },
      "body": {
       "en": "Paste your CV and the JD you are targeting — the check reads both on your device and shows coverage, section signals and red flags before any employer's parser does.",
       "id": "Tempel CV-mu dan deskripsi lowongan yang kamu tuju — pemeriksa membaca keduanya di perangkatmu dan menunjukkan cakupan kata kunci, sinyal per bagian, dan tanda bahaya sebelum pengurai milik perusahaan mana pun sempat melihatnya."
      },
      "cta": {
       "en": "Run the ATS check →",
       "id": "Jalankan pemeriksa ATS →"
      }
     }
    },
    {
     "n": "6.3",
     "title": {
      "en": "Administrative Screening Strategy — Best Practices and Common Mistakes",
      "id": "Strategi Seleksi Administrasi — Praktik Terbaik dan Kesalahan Umum"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "visual",
     "placeholder": false,
     "overview": {
      "en": "The administrative screen is a checklist masquerading as a judgment. Explore the four zones of the screening map — completeness, consistency, requirements, and professional surface — each a place where prepared candidates pass and careless ones quietly disappear.",
      "id": "Seleksi administrasi adalah daftar periksa yang menyamar sebagai penilaian. Jelajahi empat zona di peta seleksi — kelengkapan, konsistensi, persyaratan, dan tampilan profesional — masing-masing adalah tempat kandidat yang siap lolos, dan kandidat yang ceroboh diam-diam menghilang."
     },
     "objectives": [
      {
       "en": "Audit an application for the four administrative failure zones.",
       "id": "Mengaudit sebuah lamaran terhadap empat zona kegagalan administrasi."
      },
      {
       "en": "Keep records consistent across CV, forms, LinkedIn and certificates.",
       "id": "Menjaga data tetap konsisten di CV, formulir, LinkedIn, dan sertifikat."
      },
      {
       "en": "Read requirement lists like a screener: musts, shoulds, and negotiables.",
       "id": "Membaca daftar persyaratan seperti seorang penyeleksi: wajib, diutamakan, dan bisa dinegosiasikan."
      }
     ],
     "takeaways": [
      {
       "en": "Administrative rejections are the cheapest to prevent and the most common to suffer.",
       "id": "Penolakan administrasi adalah yang paling murah dicegah, dan yang paling sering dialami."
      },
      {
       "en": "Inconsistencies between your documents read as carelessness at best, dishonesty at worst.",
       "id": "Ketidakcocokan antardokumenmu paling ringan terbaca sebagai kecerobohan, paling berat sebagai ketidakjujuran."
      },
      {
       "en": "A missing “must” requirement is a real gate; a missing “should” is an invitation to show a compensating strength.",
       "id": "Persyaratan “wajib” yang tidak terpenuhi adalah gerbang sungguhan; persyaratan “diutamakan” yang tidak terpenuhi adalah undangan untuk menunjukkan kekuatan lain sebagai penggantinya."
      }
     ],
     "hotspots": [
      {
       "x": 24,
       "y": 25,
       "h": {
        "en": "Completeness",
        "id": "Kelengkapan"
       },
       "body": {
        "en": "Every field filled, every requested document attached, in the requested format and naming (“CV_Name_Role.pdf” when specified — the instruction is the test). Optional fields are not optional when you have content for them: an empty portfolio link field, with a portfolio existing, is a point donated. Before submitting, reread the vacancy's instruction block once, slowly — screening teams report instruction-following failures as their most common cut.",
        "id": "Setiap kolom terisi, setiap dokumen yang diminta terlampir, dalam format dan penamaan yang diminta (“CV_Nama_Posisi.pdf” kalau ditentukan — instruksinya itu sendiri adalah ujiannya). Kolom opsional tidak lagi opsional kalau kamu punya isinya: kolom tautan portofolio yang dibiarkan kosong, padahal portofolionya ada, adalah poin yang kamu sumbangkan cuma-cuma. Sebelum mengirim, baca ulang blok instruksi lowongan itu sekali lagi, pelan-pelan — tim seleksi melaporkan kegagalan mengikuti instruksi sebagai alasan pencoretan yang paling umum."
       }
      },
      {
       "x": 73,
       "y": 25,
       "h": {
        "en": "Consistency",
        "id": "Konsistensi"
       },
       "body": {
        "en": "Dates, titles, GPA, employer names must match across CV, application form, LinkedIn and certificates — recruiters cross-check in seconds, and every mismatch costs trust. Common innocent causes: a rounded GPA in one place and exact in another; an internship titled differently on LinkedIn; date formats that shift mid-CV. Fix at the source: one master record (in your Gym tracker's notes) from which every document copies. If something genuinely changed — a role was retitled — one consistent current version everywhere.",
        "id": "Tanggal, jabatan, IPK, dan nama perusahaan harus cocok di CV, formulir lamaran, LinkedIn, dan sertifikat — perekrut memeriksa silang dalam hitungan detik, dan setiap ketidakcocokan mengikis kepercayaan. Penyebab yang biasanya tidak disengaja: IPK dibulatkan di satu tempat tetapi ditulis persis di tempat lain; nama posisi magang yang berbeda di LinkedIn; format tanggal yang berubah di tengah CV. Perbaiki dari sumbernya: satu catatan induk (di catatan pelacak Gym-mu) yang menjadi acuan semua dokumen. Kalau memang ada yang berubah — misalnya nama jabatan diganti — pakai satu versi terkini yang konsisten di mana-mana."
       }
      },
      {
       "x": 25,
       "y": 72,
       "h": {
        "en": "Requirements",
        "id": "Persyaratan"
       },
       "body": {
        "en": "Read the list like its author: <b>musts</b> (degree fields, graduation windows, authorisations, hard GPA floors) are configured as knockouts — do not apply expecting an exception the software cannot grant; find roles whose musts you meet. <b>Shoulds</b> (“preferably”, “is a plus”) are ranking weights — apply, and let a compensating evidence line argue for you. When a must is ambiguous (“strong academic record”), it is usually a should wearing must clothing; apply with your best evidence. Requirement literacy redirects wasted applications toward winnable ones — the targeting half of your screen rate.",
        "id": "Baca daftarnya seperti orang yang menulisnya: <b>wajib</b> (bidang gelar, rentang tahun kelulusan, izin kerja, batas minimum IPK) dikonfigurasi sebagai penggugur — jangan melamar sambil berharap pengecualian yang tidak mungkin diberikan perangkat lunak; carilah posisi yang syarat wajibnya kamu penuhi. <b>Diutamakan</b> (“lebih disukai”, “menjadi nilai tambah”) adalah bobot peringkat — lamar, dan biarkan satu baris bukti pengganti berbicara untukmu. Kalau syarat wajibnya ambigu (“rekam jejak akademik yang kuat”), biasanya itu syarat “diutamakan” yang berpakaian “wajib”; lamar dengan bukti terbaikmu. Melek persyaratan mengalihkan lamaran yang sia-sia ke lamaran yang bisa dimenangkan — inilah separuh pembidikan dari tingkat lolos seleksimu."
       }
      },
      {
       "x": 74,
       "y": 72,
       "h": {
        "en": "Professional surface",
        "id": "Tampilan profesional"
       },
       "body": {
        "en": "The email address, voicemail greeting, LinkedIn URL and photo, and the tone of every message you send the company — all part of the administrative read. Application emails get the Module 4 treatment: informative subject (“Application — Data Analyst — [Name]”), two-line body, named attachments. Response speed matters both ways: reply to recruiter emails within one business day; your responsiveness now is read as your responsiveness as an employee. None of this wins the job; all of it prevents the quiet loss of it.",
        "id": "Alamat email, sapaan di pesan suara, URL dan foto LinkedIn, serta nada setiap pesan yang kamu kirim ke perusahaan — semuanya termasuk dalam pembacaan administrasi. Email lamaran mendapat perlakuan Modul 4: subjek yang informatif (“Lamaran — Data Analyst — [Nama]”), isi dua baris, lampiran dengan nama yang jelas. Kecepatan merespons berlaku dua arah: balas email perekrut dalam satu hari kerja; ketanggapanmu sekarang dibaca sebagai ketanggapanmu nanti sebagai karyawan. Tidak satu pun dari ini yang memenangkan pekerjaan; tetapi semuanya mencegah kamu kehilangannya secara diam-diam."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A JD lists “minimum GPA 3.25” and “experience with Tableau preferred”. You hold GPA 3.4 and no Tableau. The correct read?",
        "id": "Sebuah deskripsi lowongan mencantumkan “IPK minimum 3,25” dan “pengalaman dengan Tableau lebih disukai”. IPK-mu 3,4 dan kamu belum pernah memakai Tableau. Pembacaan yang benar?"
       },
       "options": [
        {
         "en": "Do not apply — Tableau is listed, so it is required",
         "id": "Jangan melamar — Tableau tercantum, berarti wajib"
        },
        {
         "en": "Apply — the must is met; Tableau is a ranking weight your other evidence can compensate",
         "id": "Lamar — syarat wajibnya terpenuhi; Tableau adalah bobot peringkat yang bisa ditutupi bukti lain milikmu"
        },
        {
         "en": "Apply, and add Tableau to your skills list to be safe",
         "id": "Lamar, dan tambahkan Tableau ke daftar keterampilan supaya aman"
        }
       ],
       "correct": 1,
       "why": {
        "en": "“Preferred” marks a should — a weight, not a gate. Option C crosses the honesty line and dies in the first technical probe.",
        "id": "“Lebih disukai” menandai syarat yang diutamakan — sebuah bobot, bukan gerbang. Opsi C melewati garis kejujuran dan mati di pertanyaan teknis pertama."
       }
      }
     ]
    },
    {
     "n": "6.4",
     "title": {
      "en": "The Precise Applicant Mindset — Navigating Automated Recruitment Systems",
      "id": "Pola Pikir Pelamar yang Presisi — Menghadapi Sistem Rekrutmen Otomatis"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "The precise-applicant mindset in practice: three drills that convert this module's mechanics into reflexes — a full pre-flight on a real application, a consistency sweep across your documents, and a triage of borderline requirements.",
      "id": "Pola pikir pelamar yang presisi dalam praktik: tiga latihan yang mengubah mekanisme modul ini menjadi refleks — pemeriksaan pra-kirim yang lengkap pada lamaran sungguhan, penyisiran konsistensi di semua dokumenmu, dan triase atas persyaratan yang berada di batas."
     },
     "objectives": [
      {
       "en": "Execute the full pre-flight on a live application end-to-end.",
       "id": "Menjalankan pemeriksaan pra-kirim yang lengkap pada lamaran sungguhan, dari awal sampai akhir."
      },
      {
       "en": "Sweep and reconcile inconsistencies across CV, LinkedIn and forms.",
       "id": "Menyisir dan menyelaraskan ketidakcocokan di CV, LinkedIn, dan formulir."
      },
      {
       "en": "Triage borderline requirements into apply / adjust / skip decisions.",
       "id": "Men-triase persyaratan yang berada di batas menjadi keputusan lamar / sesuaikan / lewati."
      }
     ],
     "takeaways": [
      {
       "en": "Precision is a habit loop, not a talent: checklist, sweep, triage — every application, every time.",
       "id": "Presisi adalah kebiasaan yang berulang, bukan bakat: daftar periksa, penyisiran, triase — di setiap lamaran, setiap kali."
      },
      {
       "en": "Your documents form one record in the employer's eyes; make them one record in fact.",
       "id": "Di mata perusahaan, dokumen-dokumenmu adalah satu catatan; jadikan benar-benar satu catatan."
      },
      {
       "en": "Skipping an unwinnable application is a win: the hour goes to one you can convert.",
       "id": "Melewati lamaran yang mustahil dimenangkan adalah sebuah kemenangan: jam itu berpindah ke lamaran yang bisa kamu konversi."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "Why precision reads as competence",
        "id": "Mengapa presisi terbaca sebagai kompetensi"
       },
       "body": {
        "en": "Administrative screening is the one funnel stage where the skill being tested is exactly the skill of passing it: reading instructions completely, keeping records consistent, meeting specifications. Employers treat it as a preview of how you will handle their reports, their client emails, their compliance forms. That is why this module ends with drills, not theory — the mindset must survive contact with a real portal on a real deadline.",
        "id": "Seleksi administrasi adalah satu-satunya tahap corong yang keterampilan diujinya persis sama dengan keterampilan untuk melewatinya: membaca instruksi sampai tuntas, menjaga data tetap konsisten, memenuhi spesifikasi. Perusahaan memperlakukannya sebagai cuplikan bagaimana kamu nanti menangani laporan mereka, email klien mereka, formulir kepatuhan mereka. Karena itulah modul ini ditutup dengan latihan, bukan teori — pola pikirnya harus bertahan saat berhadapan dengan portal sungguhan pada tenggat sungguhan."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 — Full pre-flight, live",
        "id": "Latihan 1 — Pemeriksaan pra-kirim lengkap, pada lamaran sungguhan"
       },
       "body": {
        "en": "Take one application you intend to submit this week. Run the sequence: parse test on the CV, ATS coverage check against the JD in the Gym, knockout review of every form question, instruction-block reread. Log what you caught, then reveal.",
        "id": "Ambil satu lamaran yang akan kamu kirim minggu ini. Jalankan urutannya: uji urai pada CV, pemeriksaan cakupan ATS terhadap deskripsi lowongan di Gym, tinjauan pertanyaan penggugur untuk setiap pertanyaan di formulir, baca ulang blok instruksi. Catat apa yang berhasil kamu tangkap, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Typical first-run catches, in frequency order: two or three JD keywords your experience supports but your CV never says; a date format inconsistency; one form question you had answered approximately (salary, availability) that deserved research; one instruction (file naming, subject line) you would have missed. Zero catches usually means the checks were skimmed — rerun the parse test properly, in a plain editor. The point of logging: after five applications, your personal top-three catches become your personal pre-flight shortlist.",
        "id": "Temuan yang lazim di percobaan pertama, diurutkan dari yang paling sering: dua atau tiga kata kunci dari deskripsi lowongan yang didukung pengalamanmu tetapi tidak pernah disebut di CV; format tanggal yang tidak konsisten; satu pertanyaan formulir yang kamu jawab dengan kira-kira (gaji, ketersediaan) padahal seharusnya diriset; satu instruksi (penamaan berkas, subjek email) yang nyaris terlewat. Kalau temuanmu nol, biasanya pemeriksaannya hanya dibaca sekilas — ulangi uji urai dengan benar, di editor teks polos. Gunanya mencatat: setelah lima lamaran, tiga temuan teratasmu menjadi daftar pemeriksaan pra-kirim pribadimu."
       }
      },
      {
       "h": {
        "en": "Drill 2 — The consistency sweep",
        "id": "Latihan 2 — Penyisiran konsistensi"
       },
       "body": {
        "en": "Open your CV, LinkedIn and one submitted application form side by side. Compare: every date, title, GPA, employer and certification name. Reconcile to one master record. Reveal when done.",
        "id": "Buka CV, LinkedIn, dan satu formulir lamaran yang sudah terkirim, berdampingan. Bandingkan: setiap tanggal, jabatan, IPK, nama perusahaan, dan nama sertifikasi. Selaraskan semuanya ke satu catatan induk. Buka tinjauan setelah selesai."
       },
       "debrief": {
        "en": "Most people find two to four mismatches on first sweep — commonly internship titles and month-level dates. The fix is structural, not motivational: create the master record now (a simple note: every role with exact title, dates, employer legal name, and your GPA to two decimals) and adopt the rule that no document ever states a fact except by copying from it. Five minutes of maintenance per new item, permanent immunity to the cross-check cut.",
        "id": "Kebanyakan orang menemukan dua sampai empat ketidakcocokan pada penyisiran pertama — biasanya nama posisi magang dan tanggal di tingkat bulan. Perbaikannya bersifat struktural, bukan soal motivasi: buat catatan induk sekarang (catatan sederhana berisi setiap posisi dengan nama jabatan yang persis, tanggal, nama resmi perusahaan, dan IPK-mu dengan dua angka di belakang koma), lalu terapkan aturan bahwa tidak ada dokumen yang boleh menyatakan sebuah fakta kecuali dengan menyalinnya dari catatan itu. Lima menit perawatan untuk setiap item baru, dan kamu kebal selamanya dari pencoretan akibat pemeriksaan silang."
       }
      },
      {
       "h": {
        "en": "Drill 3 — Requirement triage",
        "id": "Latihan 3 — Triase persyaratan"
       },
       "body": {
        "en": "Three JDs: (a) must-have GPA 3.5, you hold 3.3; (b) “preferably final-year students of economics or related fields”, you study information systems; (c) must be available July, you are available August. Decide apply / adjust / skip for each, then reveal.",
        "id": "Tiga deskripsi lowongan: (a) wajib IPK 3,5, IPK-mu 3,3; (b) “diutamakan mahasiswa tingkat akhir jurusan ekonomi atau bidang terkait”, kamu kuliah di sistem informasi; (c) wajib bisa mulai Juli, kamu baru bisa Agustus. Putuskan lamar / sesuaikan / lewati untuk masing-masing, lalu buka tinjauan."
       },
       "debrief": {
        "en": "(a) Skip — a numeric GPA must is a configured knockout; the hour belongs to a winnable application. (b) Apply — “preferably” plus “related fields” is a should; information systems argues as related through your evidence bullets (data coursework, business projects). (c) Adjust, then decide — availability is sometimes negotiable when the gap is small: one short question to the recruiter (“is an August start workable for this intake?”) converts a guess into a fact before you spend the application. The pattern: musts with numbers are gates; soft language is weights; ambiguities are questions, not assumptions.",
        "id": "(a) Lewati — syarat wajib IPK dengan angka adalah penggugur yang sudah dikonfigurasi; jam itu lebih berguna untuk lamaran yang bisa dimenangkan. (b) Lamar — “diutamakan” plus “bidang terkait” adalah syarat yang diutamakan, bukan wajib; sistem informasi bisa diargumenkan sebagai bidang terkait lewat butir-butir buktimu (mata kuliah data, proyek bisnis). (c) Sesuaikan, baru putuskan — ketersediaan kadang bisa dinegosiasikan kalau selisihnya kecil: satu pertanyaan singkat ke perekrut (“apakah mulai Agustus memungkinkan untuk angkatan ini?”) mengubah tebakan menjadi fakta sebelum kamu menghabiskan jatah lamaran. Polanya: syarat wajib dengan angka adalah gerbang; bahasa yang lunak adalah bobot; yang ambigu adalah pertanyaan, bukan asumsi."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "What makes the master-record rule (“no document states a fact except by copying”) worth the maintenance?",
        "id": "Apa yang membuat aturan catatan induk (“tidak ada dokumen yang menyatakan fakta kecuali dengan menyalin”) sepadan dengan usaha merawatnya?"
       },
       "options": [
        {
         "en": "It saves typing time",
         "id": "Karena menghemat waktu mengetik"
        },
        {
         "en": "It makes cross-document consistency automatic — removing the trust-costing mismatches recruiters check for in seconds",
         "id": "Karena konsistensi antardokumen menjadi otomatis — menghapus ketidakcocokan yang mengikis kepercayaan dan diperiksa perekrut dalam hitungan detik"
        },
        {
         "en": "Employers can request to see the master record",
         "id": "Karena perusahaan bisa meminta melihat catatan induk itu"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Consistency by discipline fails under deadline pressure; consistency by architecture cannot fail. The record is the architecture.",
        "id": "Konsistensi yang mengandalkan disiplin runtuh di bawah tekanan tenggat; konsistensi yang dibangun lewat sistem tidak bisa runtuh. Catatan induk itulah sistemnya."
       }
      }
     ],
     "tool": {
      "id": "gym",
      "mode": "ats",
      "title": {
       "en": "Drill 1 starts here",
       "id": "Latihan 1 dimulai di sini"
      },
      "body": {
       "en": "Run this week's real application through the ATS check as your pre-flight's second step.",
       "id": "Jalankan lamaran sungguhanmu minggu ini lewat pemeriksa ATS, sebagai langkah kedua pemeriksaan pra-kirimmu."
      },
      "cta": {
       "en": "Open the ATS check →",
       "id": "Buka pemeriksa ATS →"
      }
     }
    }
   ],
   "hero": "../../assets/bg/gauntlet/gate-04-casestudy.jpg",
   "heroPos": "center 25%"
  },
  {
   "num": 7,
   "title": {
    "en": "Becoming a High-Impact Candidate Through Case Interview Practice",
    "id": "Menjadi Kandidat Berdampak Tinggi Lewat Latihan Wawancara Kasus"
   },
   "overview": {
    "en": "Module 7 of The Pack focuses on becoming a high-impact candidate through case interview practice. Work through the lessons in order — each builds on the last.",
    "id": "Modul 7 The Pack berfokus pada cara menjadi kandidat berdampak tinggi lewat latihan wawancara kasus. Kerjakan pelajarannya secara berurutan — setiap pelajaran dibangun di atas pelajaran sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply becoming a high-impact candidate through case interview practice to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu bisa menerapkan cara menjadi kandidat berdampak tinggi lewat latihan wawancara kasus pada keputusan kariermu sendiri, dengan metode yang konkret dan bisa diulang."
   },
   "lessons": [
    {
     "n": "7.1",
     "title": {
      "en": "Introduction to Case Interviews — Types, Formats, and What Interviewers Assess",
      "id": "Pengantar Wawancara Kasus — Jenis, Format, dan Apa yang Dinilai Pewawancara"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Case interviews put a business problem on the table and watch you think. They are not trivia about industries; they are a live demonstration of the Map's problem-solving chain under a friendly spotlight. This lesson maps the formats and the real scoring dimensions.",
      "id": "Wawancara kasus meletakkan sebuah masalah bisnis di atas meja, lalu mengamati caramu berpikir. Ini bukan kuis pengetahuan tentang industri; ini peragaan langsung rantai pemecahan masalah dari The Map di bawah sorotan yang ramah. Pelajaran ini memetakan format-formatnya dan dimensi penilaian yang sebenarnya."
     },
     "objectives": [
      {
       "en": "Distinguish case formats: interviewer-led, candidate-led, written, and market sizing.",
       "id": "Membedakan format kasus: dipandu pewawancara, dipandu kandidat, tertulis, dan penaksiran ukuran pasar."
      },
      {
       "en": "Name the four scored dimensions: structure, numeracy, judgment, communication.",
       "id": "Menyebutkan empat dimensi yang dinilai: struktur, kecakapan berhitung, pertimbangan, komunikasi."
      },
      {
       "en": "Know which employers use cases and what junior-level bar they actually apply.",
       "id": "Mengetahui perusahaan mana saja yang memakai wawancara kasus, dan standar level junior yang sebenarnya mereka terapkan."
      }
     ],
     "takeaways": [
      {
       "en": "The case tests how you think when you cannot know the answer — pretending to know scores zero.",
       "id": "Kasus menguji caramu berpikir ketika jawabannya tidak mungkin kamu ketahui — berpura-pura tahu bernilai nol."
      },
      {
       "en": "Structure earns more points than knowledge: a clean tree with average insight beats brilliance delivered as chaos.",
       "id": "Struktur mendapat lebih banyak poin daripada pengetahuan: pohon yang rapi dengan wawasan rata-rata mengalahkan kecemerlangan yang disampaikan secara kacau."
      },
      {
       "en": "At junior level the bar is trainable in weeks: framework fluency, clean arithmetic, stated assumptions, clear closing.",
       "id": "Di level junior, standarnya bisa dilatih dalam hitungan minggu: lancar memakai kerangka, hitungan yang bersih, asumsi yang disebutkan, penutup yang jelas."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "Formats you will meet",
        "id": "Format yang akan kamu temui"
       },
       "body": {
        "en": "<b>Interviewer-led:</b> the interviewer steers through prepared questions (“how would you structure this? now size this market; now read this exhibit”) — common in large consulting firms' first rounds. <b>Candidate-led:</b> you receive the problem and drive to a recommendation, asking for data as you go — the purest test of the Map 3 chain. <b>Written / group cases:</b> materials to digest and present under time, sometimes in the FGD format Module 4 trained. <b>Market sizing:</b> the estimation set-piece (“how many motorcycles are sold in Indonesia yearly?”) that can appear inside any format or alone. Beyond consulting: banks, tech companies, FMCG programmes and startup roles increasingly borrow case elements for analyst and product hiring.",
        "id": "<b>Dipandu pewawancara:</b> pewawancara mengarahkan lewat pertanyaan yang sudah disiapkan (“bagaimana kamu akan menstrukturkan ini? sekarang taksir ukuran pasarnya; sekarang baca peraga ini”) — lazim di ronde pertama firma konsultan besar. <b>Dipandu kandidat:</b> kamu menerima masalahnya dan mengemudikan diskusi sampai ke rekomendasi, sambil meminta data di sepanjang jalan — ujian paling murni untuk rantai Map Modul 3. <b>Kasus tertulis / kelompok:</b> materi yang harus dicerna dan dipresentasikan dalam batas waktu, kadang dalam format FGD yang dilatih di Modul 4. <b>Penaksiran ukuran pasar:</b> soal estimasi klasik (“berapa sepeda motor yang terjual di Indonesia setiap tahun?”) yang bisa muncul di dalam format mana pun atau berdiri sendiri. Di luar dunia konsultan: bank, perusahaan teknologi, program FMCG, dan posisi di startup makin sering meminjam unsur wawancara kasus untuk merekrut analis dan orang produk."
       },
       "img": "../../assets/bg/gauntlet/gate-04-casestudy.jpg",
       "imgPos": "center 25%"
      },
      {
       "icon": "eye",
       "h": {
        "en": "The four scored dimensions",
        "id": "Empat dimensi yang dinilai"
       },
       "body": {
        "en": "<b>Structure:</b> do you impose usable order on ambiguity — a MECE tree, a clear sequence, explicit priorities? <b>Numeracy:</b> clean arithmetic at conversation speed, orders of magnitude held correctly, percentages that mean something. <b>Judgment:</b> when data arrives, do you notice what matters, connect it to the question, and adjust? Do your recommendations follow from your analysis? <b>Communication:</b> answer-first delivery, visible signposting, composure when corrected. Interviewers mark all four continuously — which means every minute offers recovery: a stumbled calculation followed by a caught error and a clean correction often scores higher than an unremarkable clean run.",
        "id": "<b>Struktur:</b> apakah kamu memberi keteraturan yang bisa dipakai pada situasi yang ambigu — pohon MECE, urutan yang jelas, prioritas yang eksplisit? <b>Kecakapan berhitung:</b> hitungan yang bersih pada kecepatan percakapan, orde besaran yang dijaga dengan benar, persentase yang punya makna. <b>Pertimbangan:</b> ketika data datang, apakah kamu menangkap apa yang penting, menghubungkannya ke pertanyaan, dan menyesuaikan diri? Apakah rekomendasimu benar-benar mengikuti analisismu? <b>Komunikasi:</b> menyampaikan jawaban lebih dulu, penanda arah yang terlihat, tetap tenang saat dikoreksi. Pewawancara menilai keempatnya terus-menerus — artinya setiap menit membuka peluang pemulihan: hitungan yang tersandung, lalu kesalahannya tertangkap dan dikoreksi dengan bersih, sering kali mendapat skor lebih tinggi daripada jalan mulus yang biasa-biasa saja."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The junior bar, honestly",
        "id": "Standar untuk level junior, sejujurnya"
       },
       "body": {
        "en": "Nobody expects industry expertise from a fresh graduate. The realistic bar: open with a structured approach within a minute; do percentage and multiplication arithmetic without drama; state assumptions out loud before using them; read an exhibit and extract its one message; close with a recommendation that follows from what was discussed, plus its main risk. That is Map Module 3 plus composure — all trainable. What fails candidates: memorised frameworks recited regardless of fit (“I will use the 4Ps” on a cost problem), silent long pauses instead of narrated thinking, and defending errors instead of correcting them.",
        "id": "Tidak ada yang mengharapkan keahlian industri dari lulusan baru. Standar yang realistis: membuka dengan pendekatan terstruktur dalam satu menit; mengerjakan hitungan persentase dan perkalian tanpa drama; menyebutkan asumsi dengan suara keras sebelum memakainya; membaca sebuah peraga dan menangkap satu pesannya; menutup dengan rekomendasi yang mengikuti apa yang sudah dibahas, plus risiko utamanya. Itu adalah Map Modul 3 ditambah ketenangan — semuanya bisa dilatih. Yang menggagalkan kandidat: kerangka hafalan yang dibacakan tanpa peduli cocok atau tidak (“saya akan memakai 4P” untuk masalah biaya), jeda panjang yang membisu alih-alih menarasikan jalan pikiran, dan membela kesalahan alih-alih mengoreksinya."
       }
      }
     ],
     "diagram": {
      "type": "quad",
      "exhibit": {
       "en": "Exhibit 1: The four dimensions every case interviewer scores.",
       "id": "Peraga 1: Empat dimensi yang dinilai setiap pewawancara kasus."
      },
      "title": {
       "en": "Case scoring",
       "id": "Penilaian kasus"
      },
      "items": [
       {
        "h": {
         "en": "Structure",
         "id": "Struktur"
        },
        "sub": {
         "en": "Usable order on ambiguity",
         "id": "Keteraturan yang bisa dipakai di tengah ambiguitas"
        }
       },
       {
        "h": {
         "en": "Numeracy",
         "id": "Kecakapan berhitung"
        },
        "sub": {
         "en": "Clean arithmetic, held magnitudes",
         "id": "Hitungan bersih, orde besaran terjaga"
        }
       },
       {
        "h": {
         "en": "Judgment",
         "id": "Pertimbangan"
        },
        "sub": {
         "en": "Noticing what matters, adjusting",
         "id": "Menangkap yang penting, menyesuaikan diri"
        }
       },
       {
        "h": {
         "en": "Communication",
         "id": "Komunikasi"
        },
        "sub": {
         "en": "Answer-first, signposted, composed",
         "id": "Jawaban lebih dulu, ada penanda arah, tenang"
        }
       }
      ],
      "longdesc": {
       "en": "Four scored dimensions: structure — imposing usable order on an ambiguous problem; numeracy — clean conversational arithmetic with correct orders of magnitude; judgment — noticing what matters in new data and adjusting; communication — answer-first, signposted, composed delivery.",
       "id": "Empat dimensi yang dinilai: struktur — memberi keteraturan yang bisa dipakai pada masalah yang ambigu; kecakapan berhitung — hitungan percakapan yang bersih dengan orde besaran yang benar; pertimbangan — menangkap apa yang penting dalam data baru dan menyesuaikan diri; komunikasi — penyampaian yang mendahulukan jawaban, bertanda arah, dan tenang."
      }
     },
     "checks": [
      {
       "q": {
        "en": "Mid-case you realise your revenue estimate double-counted a segment. Best move?",
        "id": "Di tengah kasus, kamu sadar estimasi pendapatanmu menghitung satu segmen dua kali. Langkah terbaik?"
       },
       "options": [
        {
         "en": "Continue — changing numbers mid-case looks weak",
         "id": "Lanjutkan saja — mengubah angka di tengah kasus terlihat lemah"
        },
        {
         "en": "Flag it immediately, correct it aloud, and carry the corrected number forward",
         "id": "Segera sampaikan, koreksi dengan suara keras, dan pakai angka yang sudah dikoreksi untuk langkah selanjutnya"
        },
        {
         "en": "Restart the whole structure from the top",
         "id": "Mulai ulang seluruh struktur dari awal"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Self-caught, cleanly corrected errors score as judgment and composure; hidden errors compound and surface later as worse ones.",
        "id": "Kesalahan yang kamu tangkap sendiri dan koreksi dengan bersih dinilai sebagai pertimbangan dan ketenangan; kesalahan yang disembunyikan menumpuk dan muncul belakangan sebagai kesalahan yang lebih parah."
       }
      }
     ],
     "quote": {
      "en": "The case tests how you think when you cannot know the answer.",
      "id": "Kasus menguji caramu berpikir ketika jawabannya tidak mungkin kamu ketahui."
     }
    },
    {
     "n": "7.2",
     "title": {
      "en": "Preparation Methodology and Problem-Solving Frameworks",
      "id": "Metode Persiapan dan Kerangka Pemecahan Masalah"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "One preparation method covers every case: a small kit of first-principles structures, a market-sizing engine, and exhibit-reading drills — assembled on top of the Map's problem-solving chain rather than memorised as magic formulas.",
      "id": "Satu metode persiapan cukup untuk semua kasus: satu set kecil struktur dari prinsip dasar, sebuah mesin penaksiran ukuran pasar, dan latihan membaca peraga — semuanya dirakit di atas rantai pemecahan masalah The Map, bukan dihafal sebagai rumus ajaib."
     },
     "objectives": [
      {
       "en": "Build case structures from profit, funnel and stakeholder first principles.",
       "id": "Membangun struktur kasus dari prinsip dasar laba, corong, dan pemangku kepentingan."
      },
      {
       "en": "Run market sizings with the segment–rate–frequency engine.",
       "id": "Menjalankan penaksiran ukuran pasar dengan mesin segmen–porsi–frekuensi."
      },
      {
       "en": "Extract an exhibit's single message in thirty seconds.",
       "id": "Menangkap satu pesan utama sebuah peraga dalam tiga puluh detik."
      }
     ],
     "takeaways": [
      {
       "en": "Frameworks are scaffolding you assemble per problem, not incantations you recite — interviewers can tell instantly.",
       "id": "Kerangka adalah perancah yang kamu rakit untuk setiap masalah, bukan mantra yang dibacakan — pewawancara langsung bisa membedakannya."
      },
      {
       "en": "Every market sizing is population × applicable share × frequency × value, with assumptions said aloud.",
       "id": "Setiap penaksiran ukuran pasar adalah populasi × porsi yang relevan × frekuensi × nilai, dengan asumsi yang diucapkan."
      },
      {
       "en": "An exhibit exists to change the case's direction — find the number that does.",
       "id": "Sebuah peraga ada untuk mengubah arah kasus — temukan angka yang melakukannya."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "First-principles structures",
        "id": "Struktur dari prinsip dasar"
       },
       "body": {
        "en": "Three roots generate most case trees. <b>Profit problems:</b> profit = revenue − cost; revenue = price × volume; costs split fixed/variable — then hang the case's specifics on the branches. <b>Growth/launch problems:</b> the funnel — market → aware → try → buy → repeat — locates where growth must come from. <b>Decision problems:</b> stakeholders × criteria — who is affected, what do they each need, what constraints bind. Build the tree live, from the case's own words: “Profit fell — I'd like to split that into revenue and cost, and given you mentioned new competitors, start on the revenue side, specifically volume.” That sentence — root, split, prioritised branch, reason — is the whole craft.",
        "id": "Tiga akar menghasilkan sebagian besar pohon kasus. <b>Masalah laba:</b> laba = pendapatan − biaya; pendapatan = harga × volume; biaya dipecah menjadi tetap/variabel — lalu gantungkan detail khas kasusnya di cabang-cabang itu. <b>Masalah pertumbuhan/peluncuran:</b> corong — pasar → tahu → coba → beli → beli lagi — menunjukkan dari mana pertumbuhan harus datang. <b>Masalah keputusan:</b> pemangku kepentingan × kriteria — siapa yang terdampak, apa yang dibutuhkan masing-masing, batasan apa yang mengikat. Bangun pohonnya secara langsung, dari kata-kata kasus itu sendiri: “Laba turun — saya ingin memecahnya menjadi pendapatan dan biaya, dan karena Anda menyebut ada pesaing baru, saya mulai dari sisi pendapatan, khususnya volume.” Kalimat itu — akar, pecahan, cabang yang diprioritaskan, alasannya — adalah keseluruhan keahliannya."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The market-sizing engine",
        "id": "Mesin penaksiran ukuran pasar"
       },
       "body": {
        "en": "Every sizing decomposes as <b>population × applicable share × frequency × value</b>. Motorcycles sold in Indonesia yearly: ~280m people → ~70m households (assume 4 per household, said aloud) → assume ~60% own or want motorcycles in the addressable segments → replacement cycle ~8 years plus first-time buyers → sanity-check the result against any anchor you know. The score is in the method: round numbers chosen for arithmetic ease, each assumption flagged as an assumption, a written running product, and a final sanity check (“does 6–7 million a year feel right for a 280-million-person country? roughly one per 40 people per year — plausible”). Exact answers do not exist; auditable answers win.",
        "id": "Setiap penaksiran bisa diuraikan menjadi <b>populasi × porsi yang relevan × frekuensi × nilai</b>. Sepeda motor yang terjual di Indonesia per tahun: ~280 juta orang → ~70 juta rumah tangga (asumsi 4 orang per rumah tangga, diucapkan) → asumsikan ~60% memiliki atau menginginkan motor di segmen yang relevan → siklus penggantian ~8 tahun plus pembeli pertama → uji kewajaran hasilnya terhadap patokan apa pun yang kamu tahu. Skornya ada di metodenya: angka bulat yang dipilih supaya mudah dihitung, setiap asumsi ditandai sebagai asumsi, hasil kali yang ditulis berjalan, dan uji kewajaran di akhir (“apakah 6–7 juta per tahun masuk akal untuk negara berpenduduk 280 juta? kira-kira satu per 40 orang per tahun — masuk akal”). Jawaban yang persis tidak ada; jawaban yang bisa ditelusuri yang menang."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Reading exhibits",
        "id": "Membaca peraga"
       },
       "body": {
        "en": "When a chart lands, resist narrating it (“this shows revenue by region…”). Thirty-second protocol: read title, axes, units, footnotes; find the outlier, the crossover, or the trend break — exhibits are chosen because one number changes the story; connect it to the case question in one sentence: “The key message: region C is growing 25% while the others shrink — the client's problem is not demand, it is where they compete.” Then let that message redirect your tree. Practising ten exhibits this way (any business publication's charts work) builds the reflex in an afternoon.",
        "id": "Ketika sebuah grafik disodorkan, tahan keinginan untuk menarasikannya (“grafik ini menunjukkan pendapatan per wilayah…”). Protokol tiga puluh detik: baca judul, sumbu, satuan, catatan kaki; temukan pencilannya, titik persilangannya, atau patahan trennya — peraga dipilih justru karena ada satu angka yang mengubah cerita; hubungkan angka itu ke pertanyaan kasus dalam satu kalimat: “Pesan utamanya: wilayah C tumbuh 25% sementara wilayah lain menyusut — masalah klien bukan permintaan, melainkan di mana mereka bersaing.” Lalu biarkan pesan itu mengarahkan ulang pohonmu. Melatih sepuluh peraga dengan cara ini (grafik dari publikasi bisnis mana pun bisa dipakai) sudah cukup membangun refleksnya dalam satu sore."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "Opening a case — recited vs assembled",
        "id": "Membuka kasus — dibacakan vs dirakit"
       },
       "q": {
        "en": "“Our client, a bus operator, has seen profits decline 20% in two years.”",
        "id": "“Klien kami, sebuah operator bus, mengalami penurunan laba 20% dalam dua tahun.”"
       },
       "weak": {
        "en": "“I would like to use the profitability framework, looking at revenue and costs. Revenue is price times volume. Costs are fixed and variable. I will also consider the market, the competition, and the customer segments using the 3C framework.”",
        "id": "“Saya akan memakai kerangka profitabilitas, dengan melihat pendapatan dan biaya. Pendapatan adalah harga dikali volume. Biaya terdiri dari biaya tetap dan variabel. Saya juga akan mempertimbangkan pasar, kompetisi, dan segmen pelanggan dengan kerangka 3C.”"
       },
       "strong": {
        "en": "“Profit fell, so something moved in revenue, costs, or both. Given two years and no mention of new competitors, my hypothesis is a cost drift — fuel and maintenance are big lines for bus fleets. May I see how revenue and the main cost lines moved over the two years, so we can locate the damage before diagnosing it?”",
        "id": "“Laba turun, berarti ada yang bergerak di pendapatan, biaya, atau keduanya. Karena rentangnya dua tahun dan tidak ada sebutan pesaing baru, hipotesis saya adalah biaya yang merangkak naik — BBM dan perawatan adalah pos besar untuk armada bus. Boleh saya lihat pergerakan pendapatan dan pos-pos biaya utama selama dua tahun itu, supaya kita menemukan lokasi kerusakannya dulu sebelum mendiagnosis?”"
       },
       "why": {
        "en": "The strong opening builds the same tree but hangs the case's specifics on it, states a hypothesis, and asks for exactly the data that would test it — structure serving thought, not replacing it.",
        "id": "Pembuka yang kuat membangun pohon yang sama, tetapi menggantungkan detail khas kasus padanya, menyatakan hipotesis, dan meminta persis data yang akan mengujinya — struktur yang melayani pemikiran, bukan menggantikannya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "In a sizing, why must assumptions be spoken rather than silently used?",
        "id": "Dalam penaksiran ukuran pasar, mengapa asumsi harus diucapkan, bukan dipakai diam-diam?"
       },
       "options": [
        {
         "en": "It fills time while you calculate",
         "id": "Karena mengisi waktu selagi kamu menghitung"
        },
        {
         "en": "Spoken assumptions can be corrected by the interviewer and turn the estimate into an auditable chain — the thing actually being scored",
         "id": "Karena asumsi yang diucapkan bisa dikoreksi pewawancara dan mengubah taksiran menjadi rantai yang bisa ditelusuri — hal yang sebenarnya dinilai"
        },
        {
         "en": "Interviewers penalise silence of any kind",
         "id": "Karena pewawancara menghukum segala bentuk keheningan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The estimate's value is its method. Hidden assumptions make the number a guess; stated ones make it an analysis.",
        "id": "Nilai sebuah taksiran ada pada metodenya. Asumsi yang disembunyikan membuat angkanya jadi tebakan; asumsi yang dinyatakan membuatnya jadi analisis."
       }
      }
     ]
    },
    {
     "n": "7.3",
     "title": {
      "en": "Case Interview Strategies — Communication, Structure, and Composure",
      "id": "Strategi Wawancara Kasus — Komunikasi, Struktur, dan Ketenangan"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Delivery decides borderline cases: how you open, how you narrate thinking, how you handle being wrong, and how you land the recommendation. This lesson scripts the communication layer that sits on top of the analysis.",
      "id": "Cara penyampaian menentukan hasil pada kasus yang berada di garis batas: caramu membuka, menarasikan jalan pikiran, menghadapi kesalahan, dan mendaratkan rekomendasi. Pelajaran ini menyusun naskah untuk lapisan komunikasi yang berada di atas analisis."
     },
     "objectives": [
      {
       "en": "Run the case rhythm: clarify, structure, analyse aloud, synthesise.",
       "id": "Menjalankan ritme kasus: klarifikasi, struktur, analisis dengan suara keras, sintesis."
      },
      {
       "en": "Narrate thinking without rambling — the guided-tour technique.",
       "id": "Menarasikan jalan pikiran tanpa melantur — teknik tur berpemandu."
      },
      {
       "en": "Deliver the closing recommendation in the four-sentence format.",
       "id": "Menyampaikan rekomendasi penutup dalam format empat kalimat."
      }
     ],
     "takeaways": [
      {
       "en": "Clarifying questions are scored, not penalised: one minute of them prevents ten minutes of solving the wrong case.",
       "id": "Pertanyaan klarifikasi diberi nilai, bukan dihukum: satu menit klarifikasi mencegah sepuluh menit memecahkan kasus yang salah."
      },
      {
       "en": "Narrated thinking is a guided tour, not a stream of consciousness — announce where you are going before you go.",
       "id": "Menarasikan jalan pikiran itu seperti tur berpemandu, bukan arus kesadaran — umumkan ke mana kamu akan pergi sebelum berangkat."
      },
      {
       "en": "The closing is answer-first: recommendation, two reasons, main risk, first step. Rehearse the shape until automatic.",
       "id": "Penutup selalu mendahulukan jawaban: rekomendasi, dua alasan, risiko utama, langkah pertama. Latih bentuknya sampai otomatis."
      }
     ],
     "sections": [
      {
       "icon": "chat",
       "h": {
        "en": "The rhythm",
        "id": "Ritmenya"
       },
       "body": {
        "en": "<b>Clarify (1–2 minutes):</b> restate the problem in one sentence and confirm the objective — “so success is restoring margin to 12% within a year, not growing share?” Ask what you genuinely need: scope, timeframe, definitions. <b>Structure (1 minute):</b> present the tree, prioritise a branch, give the reason. <b>Analyse (the bulk):</b> work branch by branch, requesting data, doing arithmetic on paper while narrating checkpoints. <b>Synthesise (final 2 minutes):</b> the four-sentence close. Time discipline is yours to keep, politely: “we have about ten minutes left — shall I go deeper on costs or move toward a recommendation?” is a strong move, not an imposition.",
        "id": "<b>Klarifikasi (1–2 menit):</b> nyatakan ulang masalahnya dalam satu kalimat dan pastikan tujuannya — “jadi ukuran suksesnya adalah mengembalikan margin ke 12% dalam setahun, bukan menambah pangsa pasar?” Tanyakan apa yang benar-benar kamu butuhkan: cakupan, rentang waktu, definisi. <b>Struktur (1 menit):</b> sajikan pohonnya, prioritaskan satu cabang, beri alasannya. <b>Analisis (bagian terbesar):</b> kerjakan cabang demi cabang, minta data, hitung di kertas sambil menarasikan titik-titik pemeriksaannya. <b>Sintesis (2 menit terakhir):</b> penutup empat kalimat. Disiplin waktu adalah tanggung jawabmu, sampaikan dengan sopan: “kita punya sekitar sepuluh menit lagi — sebaiknya saya perdalam sisi biaya, atau bergerak ke rekomendasi?” adalah langkah yang kuat, bukan lancang."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "The guided tour",
        "id": "Tur berpemandu"
       },
       "body": {
        "en": "Silence reads as absence; babble reads as chaos. The middle path announces destinations: “I'm going to check whether the volume drop is market-wide or ours alone — that decides which branch matters.” Then work, briefly silent if needed, and report: “Market fell 3%, we fell 12% — this is mostly our problem. Next I want unit economics.” Announce, work, report — the interviewer always knows where you are on the map they cannot see. When you need thinking time, buy it explicitly: “may I take thirty seconds to organise this?” — always granted, and far stronger than thirty seconds of visible drowning.",
        "id": "Diam terbaca sebagai kosong; mengoceh terbaca sebagai kacau. Jalan tengahnya adalah mengumumkan tujuan: “Saya akan memeriksa apakah penurunan volume terjadi di seluruh pasar atau hanya pada kita — itu menentukan cabang mana yang penting.” Lalu kerjakan, diam sejenak kalau perlu, dan laporkan: “Pasar turun 3%, kita turun 12% — ini sebagian besar masalah kita sendiri. Berikutnya saya ingin melihat ekonomi per unit.” Umumkan, kerjakan, laporkan — pewawancara selalu tahu posisimu di peta yang tidak bisa mereka lihat. Kalau butuh waktu berpikir, minta secara terbuka: “boleh saya ambil tiga puluh detik untuk merapikan ini?” — selalu dikabulkan, dan jauh lebih kuat daripada tiga puluh detik terlihat tenggelam."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "Being wrong, gracefully — and the close",
        "id": "Salah dengan anggun — dan penutupnya"
       },
       "body": {
        "en": "When the interviewer pushes back (“are you sure fixed costs work that way?”), the probe tests updating, not the error itself. The graceful pattern: pause, re-derive, and either correct — “you're right, I conflated fixed with sunk; let me redo that line” — or respectfully hold with reasoning. Both score; defensiveness alone fails. The close, in four rehearsed sentences: <b>Recommendation</b> (“I recommend the client exit the two loss-making routes and redeploy buses to route C”). <b>Reasons</b> (“C grows 25% with our highest margin; the exited routes lose money on every trip with no plausible fix”). <b>Risk</b> (“main risk: contractual penalties on exit — worth quantifying first”). <b>First step</b> (“start with a 90-day pilot moving four buses”). Practise until the shape survives adrenaline.",
        "id": "Ketika pewawancara menekan balik (“yakin biaya tetap bekerja seperti itu?”), yang diuji adalah kemampuanmu memperbarui pemikiran, bukan kesalahannya sendiri. Pola yang anggun: jeda, hitung ulang dari dasar, lalu koreksi — “Anda benar, saya mencampuradukkan biaya tetap dengan biaya hangus; saya ulang baris itu” — atau pertahankan dengan hormat disertai alasannya. Keduanya dapat nilai; hanya sikap defensif yang gagal. Penutupnya, dalam empat kalimat yang sudah dilatih: <b>Rekomendasi</b> (“saya sarankan klien keluar dari dua rute yang merugi dan memindahkan busnya ke rute C”). <b>Alasan</b> (“C tumbuh 25% dengan margin tertinggi kita; rute yang ditinggalkan rugi di setiap perjalanan dan tidak ada perbaikan yang masuk akal”). <b>Risiko</b> (“risiko utama: penalti kontrak saat keluar — perlu dihitung dulu”). <b>Langkah pertama</b> (“mulai dengan uji coba 90 hari memindahkan empat bus”). Latih sampai bentuknya bertahan di tengah adrenalin."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "You need 30 seconds to organise your structure. The strong move is:",
        "id": "Kamu butuh 30 detik untuk merapikan strukturmu. Langkah yang kuat adalah:"
       },
       "options": [
        {
         "en": "Keep talking while you think — silence is death",
         "id": "Terus bicara sambil berpikir — diam itu maut"
        },
        {
         "en": "Ask for the time explicitly, take it in silence, return with the organised structure",
         "id": "Minta waktunya secara terbuka, pakai dalam diam, lalu kembali dengan struktur yang sudah rapi"
        },
        {
         "en": "Skip structuring and dive into the first idea",
         "id": "Lewati penyusunan struktur dan langsung terjun ke ide pertama"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Requested thinking time reads as discipline; unrequested silence reads as drowning; babble reads as chaos. The request converts the same seconds into a strength.",
        "id": "Waktu berpikir yang diminta terbaca sebagai disiplin; diam tanpa izin terbaca sebagai tenggelam; mengoceh terbaca sebagai kacau. Permintaan itu mengubah detik-detik yang sama menjadi kekuatan."
       }
      }
     ]
    },
    {
     "n": "7.4",
     "title": {
      "en": "Live Case Practice — Structured Case Studies with Model Answers",
      "id": "Latihan Kasus Langsung — Studi Kasus Terstruktur dengan Jawaban Model"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "Two full practice cases with staged model answers — a profitability case and a market entry with sizing — worked decision by decision, then the peer-practice protocol that turns this module into a weekly habit.",
      "id": "Dua kasus latihan lengkap dengan jawaban model bertahap — satu kasus profitabilitas dan satu kasus masuk pasar dengan penaksiran ukuran pasar — dikerjakan keputusan demi keputusan, lalu protokol latihan bersama teman yang mengubah modul ini menjadi kebiasaan mingguan."
     },
     "objectives": [
      {
       "en": "Work two complete cases against staged model answers.",
       "id": "Mengerjakan dua kasus lengkap dan membandingkannya dengan jawaban model bertahap."
      },
      {
       "en": "Practise the rhythm: clarify, structure, analyse, synthesise — under self-timing.",
       "id": "Melatih ritmenya: klarifikasi, struktur, analisis, sintesis — dengan mengatur waktu sendiri."
      },
      {
       "en": "Set up weekly peer cases with the four-dimension scoresheet.",
       "id": "Menyiapkan latihan kasus mingguan bersama teman dengan lembar skor empat dimensi."
      }
     ],
     "takeaways": [
      {
       "en": "Attempt before revealing: the gap between your move and the model is the curriculum.",
       "id": "Coba dulu sebelum membuka jawaban: jarak antara langkahmu dan jawaban model itulah kurikulumnya."
      },
      {
       "en": "Casing is a two-player sport — a partner reading a case script gives you 80% of a real interviewer.",
       "id": "Latihan kasus adalah olahraga dua pemain — teman yang membacakan naskah kasus sudah memberimu 80% pengalaman pewawancara sungguhan."
      },
      {
       "en": "Six practice cases move most candidates from panic to competence; track your four dimensions across them.",
       "id": "Enam kasus latihan memindahkan kebanyakan kandidat dari panik ke kompeten; catat keempat dimensimu di sepanjang prosesnya."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "How to run these",
        "id": "Cara mengerjakannya"
       },
       "body": {
        "en": "Give each case 25 minutes. Write your clarifying questions, structure, and calculations on paper exactly as you would in the room; speak your narration aloud — the speaking is the training. Open each stage's debrief only after committing to your own move. Afterwards, score yourself one to five on the four dimensions and log it; the same scoresheet serves your peer sessions.",
        "id": "Beri setiap kasus waktu 25 menit. Tulis pertanyaan klarifikasi, struktur, dan perhitunganmu di kertas persis seperti di ruang wawancara; ucapkan narasimu dengan suara keras — bicaranya itulah latihannya. Buka tinjauan tiap tahap hanya setelah kamu menetapkan langkahmu sendiri. Setelah selesai, nilai dirimu dari satu sampai lima pada empat dimensi dan catat; lembar skor yang sama dipakai untuk sesi bersama temanmu."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Case A, stage 1 — The bleeding laundry chain",
        "id": "Kasus A, tahap 1 — Jaringan laundry yang terus merugi"
       },
       "body": {
        "en": "“Our client operates 15 self-service laundromats in Greater Jakarta. Profit has fallen 35% in 18 months. Diagnose and recommend.” Write your clarifiers and structure, then reveal.",
        "id": "“Klien kami mengoperasikan 15 laundry swalayan di Jabodetabek. Laba turun 35% dalam 18 bulan. Diagnosis dan beri rekomendasi.” Tulis pertanyaan klarifikasi dan strukturmu, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Model clarifiers: is the 35% across all outlets or concentrated? any known market change (competitors, input costs)? what does the client count as profit (before/after rent)? Model structure: profit = revenue (price × loads per outlet) − costs (rent, utilities — water and electricity dominate laundromats — labour, maintenance), prioritising whichever side the concentration answer indicates. The trap to catch in yourself: proposing marketing fixes before locating the damage. Interviewer data: profits fell in all outlets; electricity tariffs rose 30%; two new competitors undercut price near 5 outlets. Now the tree has two live branches — cost drift everywhere, price pressure locally.",
        "id": "Klarifikasi model: apakah penurunan 35% merata di semua gerai atau terkonsentrasi? adakah perubahan pasar yang diketahui (pesaing, biaya input)? apa yang dihitung klien sebagai laba (sebelum/sesudah sewa)? Struktur model: laba = pendapatan (harga × jumlah cucian per gerai) − biaya (sewa, utilitas — air dan listrik mendominasi bisnis laundry — tenaga kerja, perawatan), dengan prioritas pada sisi yang ditunjukkan jawaban soal konsentrasi. Jebakan yang harus kamu tangkap pada dirimu sendiri: mengusulkan perbaikan pemasaran sebelum menemukan lokasi kerusakannya. Data dari pewawancara: laba turun di semua gerai; tarif listrik naik 30%; dua pesaing baru memotong harga di dekat 5 gerai. Sekarang pohonnya punya dua cabang yang hidup — biaya yang merangkak naik di mana-mana, tekanan harga di lokasi tertentu."
       }
      },
      {
       "h": {
        "en": "Case A, stage 2 — Numbers and the close",
        "id": "Kasus A, tahap 2 — Angka dan penutup"
       },
       "body": {
        "en": "Data: average outlet revenue Rp 60m/month, flat. Electricity was 25% of revenue, now 32.5%. The 5 contested outlets lost 20% of loads. Quantify the two effects and deliver the four-sentence close. Then reveal.",
        "id": "Data: pendapatan rata-rata per gerai Rp60 juta/bulan, stagnan. Listrik semula 25% dari pendapatan, sekarang 32,5%. Lima gerai yang terkena persaingan kehilangan 20% cucian. Hitung besarnya kedua efek itu dan sampaikan penutup empat kalimat. Lalu buka tinjauan."
       },
       "debrief": {
        "en": "Electricity: +7.5 points of revenue × 15 outlets ≈ Rp 67.5m/month of margin gone — the dominant effect. Contested volume: 5 outlets × Rp 60m × 20% ≈ Rp 60m of revenue at risk, but only its margin (~say 30%) ≈ Rp 18m/month of profit. Model close: “Recommend attacking energy first: efficiency retrofit and off-peak pricing to shift loads — that addresses roughly three-quarters of the decline; defend the five contested outlets with targeted loyalty pricing rather than chain-wide cuts. Main risk: retrofit capex payback needs checking. First step: meter-level energy audit of three outlets this month.” If your close led with the competitors, note the lesson: size effects before choosing villains — the boring tariff outweighed the visible rivals.",
        "id": "Listrik: +7,5 poin dari pendapatan × 15 gerai ≈ Rp67,5 juta margin yang hilang per bulan — efek yang dominan. Volume di gerai yang terkena persaingan: 5 gerai × Rp60 juta × 20% ≈ Rp60 juta pendapatan yang berisiko, tetapi yang hilang hanya marginnya (~katakanlah 30%) ≈ Rp18 juta laba per bulan. Penutup model: “Saya sarankan menangani energi lebih dulu: peremajaan peralatan yang lebih hemat dan tarif lebih murah di luar jam sibuk untuk menggeser cucian — itu menjawab kira-kira tiga perempat penurunan; pertahankan lima gerai yang terkena persaingan dengan harga loyalitas yang tertarget, bukan potongan harga di seluruh jaringan. Risiko utama: balik modal investasi peremajaan perlu diperiksa. Langkah pertama: audit energi di tingkat meteran untuk tiga gerai bulan ini.” Kalau penutupmu memimpin dengan soal pesaing, catat pelajarannya: ukur besar efeknya dulu sebelum memilih penjahat — tarif listrik yang membosankan ternyata mengalahkan pesaing yang kasatmata."
       }
      },
      {
       "h": {
        "en": "Case B — Entry plus sizing",
        "id": "Kasus B — Masuk pasar plus penaksiran"
       },
       "body": {
        "en": "“A Thai bubble-tea chain considers entering Indonesia. Should they? Start by sizing the urban ready-to-drink tea-shop market.” Run the sizing engine and the entry structure, then reveal.",
        "id": "“Sebuah jaringan bubble tea dari Thailand mempertimbangkan masuk ke Indonesia. Haruskah? Mulailah dengan menaksir ukuran pasar kedai minuman teh siap minum di perkotaan.” Jalankan mesin penaksiran dan struktur masuk pasar, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Model sizing (yours will differ — the chain matters, not the total): ~60m urban dwellers aged 10–45 in target cities → assume 40% buy from tea shops at all → average buyer ~3 cups/month → ~72m cups/month → at ~Rp 25k average ≈ Rp 1.8tn/month ≈ Rp 21–22tn/year; sanity anchor: thousands of existing outlets doing plausible per-outlet volumes — coherent. Entry structure: market attractiveness (size ✓, growth, competition intensity — heavy incumbents), ability to win (brand strength vs local players, supply chain for tapioca and tea, site access, price point vs incumbents), entry mode (franchise vs owned vs JV) and its risks. Model recommendation: enter via a 10-store owned pilot in two cities to test price point against incumbents before committing to national franchise — a staged decision with a trigger, exactly like Map 3.3's shop case. The rhyme is deliberate: same chain, bigger board.",
        "id": "Penaksiran model (milikmu pasti berbeda — yang penting rantainya, bukan totalnya): ~60 juta penduduk kota usia 10–45 di kota-kota target → asumsikan 40% pernah membeli di kedai teh → pembeli rata-rata ~3 gelas/bulan → ~72 juta gelas/bulan → dengan harga rata-rata ~Rp25 ribu ≈ Rp1,8 triliun/bulan ≈ Rp21–22 triliun/tahun; uji kewajaran: ada ribuan gerai yang sudah beroperasi dengan volume per gerai yang masuk akal — angkanya koheren. Struktur masuk pasar: daya tarik pasar (ukuran ✓, pertumbuhan, intensitas persaingan — pemain lama yang kuat), kemampuan untuk menang (kekuatan merek dibanding pemain lokal, rantai pasok tapioka dan teh, akses lokasi, titik harga dibanding pemain lama), cara masuk (waralaba vs milik sendiri vs usaha patungan) beserta risikonya. Rekomendasi model: masuk lewat uji coba 10 toko milik sendiri di dua kota untuk menguji titik harga terhadap pemain lama, sebelum berkomitmen pada waralaba nasional — keputusan bertahap dengan pemicu, persis seperti kasus toko di Map 3.3. Kemiripannya memang disengaja: rantai yang sama, papan yang lebih besar."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Reading cases instead of doing them",
         "id": "Membaca kasus, bukan mengerjakannya"
        },
        "fix": {
         "en": "Recognition feels like competence and is not. Paper, pen, timer, voice — every time.",
         "id": "Merasa kenal terasa seperti mampu, padahal bukan. Kertas, pena, pewaktu, suara — setiap kali."
        }
       },
       {
        "h": {
         "en": "Solo-only practice",
         "id": "Hanya berlatih sendirian"
        },
        "fix": {
         "en": "Weekly peer sessions: one gives the case from a script, one solves, both score the four dimensions, swap. The giver learns as much as the solver.",
         "id": "Sesi mingguan bersama teman: satu orang membacakan kasus dari naskah, satu orang memecahkannya, keduanya memberi skor pada empat dimensi, lalu bertukar peran. Yang membacakan belajar sama banyaknya dengan yang memecahkan."
        }
       },
       {
        "h": {
         "en": "Chasing case volume over review depth",
         "id": "Mengejar jumlah kasus, bukan kedalaman tinjauan"
        },
        "fix": {
         "en": "Six cases with written reviews beat twenty without. After each: which dimension lagged, and what is the one adjustment?",
         "id": "Enam kasus dengan tinjauan tertulis mengalahkan dua puluh kasus tanpa tinjauan. Setelah setiap kasus: dimensi mana yang tertinggal, dan apa satu penyesuaiannya?"
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "In Case A, what error does “attack the new competitors first” reveal?",
        "id": "Di Kasus A, kesalahan apa yang terungkap dari jawaban “serang pesaing baru dulu”?"
       },
       "options": [
        {
         "en": "Ignoring the customer perspective",
         "id": "Mengabaikan sudut pandang pelanggan"
        },
        {
         "en": "Choosing the visible cause over the quantified one — the tariff effect was four times larger",
         "id": "Memilih penyebab yang kasatmata daripada penyebab yang sudah dihitung — efek tarif listrik empat kali lebih besar"
        },
        {
         "en": "Failing to use the 4P framework",
         "id": "Gagal memakai kerangka 4P"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Sizing before prioritising is the discipline: the dramatic story (competitors!) lost to the boring number (electricity) by 4×.",
        "id": "Mengukur dulu sebelum memprioritaskan, itulah disiplinnya: cerita yang dramatis (pesaing!) kalah 4× dari angka yang membosankan (listrik)."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/bg/gauntlet/gate-05-hr-interview.jpg",
   "heroPos": "60% 32%"
  },
  {
   "num": 8,
   "title": {
    "en": "AI-Powered Application Tools",
    "id": "Alat Lamaran Berbasis AI"
   },
   "overview": {
    "en": "Module 8 of The Pack focuses on ai-powered application tools. Work through the lessons in order — each builds on the last.",
    "id": "Modul 8 The Pack berfokus pada alat lamaran berbasis AI. Kerjakan pelajarannya secara berurutan — setiap pelajaran dibangun di atas pelajaran sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply ai-powered application tools to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu bisa menerapkan alat lamaran berbasis AI pada keputusan kariermu sendiri, dengan metode yang konkret dan bisa diulang."
   },
   "lessons": [
    {
     "n": "8.1",
     "title": {
      "en": "Introduction to AI Application Tools — What They Can and Cannot Do",
      "id": "Pengantar Alat Lamaran AI — Apa yang Bisa dan Tidak Bisa Dilakukannya"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "AI tools have changed application work on both sides of the funnel: candidates draft with them, employers screen with them. This lesson maps what current tools genuinely do well, where they fail dangerously, and the disclosure-and-honesty rules that keep AI an advantage instead of a liability.",
      "id": "Alat AI sudah mengubah cara kerja lamaran di kedua sisi corong: kandidat menyusun draf dengannya, perusahaan menyaring dengannya. Pelajaran ini memetakan apa yang benar-benar dikerjakan dengan baik oleh alat-alat yang ada sekarang, di mana mereka gagal secara berbahaya, dan aturan keterbukaan serta kejujuran yang menjaga AI tetap menjadi keunggulan, bukan beban."
     },
     "objectives": [
      {
       "en": "Map the AI application toolscape: drafting, tailoring, scoring, research.",
       "id": "Memetakan lanskap alat AI untuk lamaran: menyusun draf, menyesuaikan, menilai, riset."
      },
      {
       "en": "Name the three failure modes: hallucinated facts, generic sludge, and false confidence.",
       "id": "Menyebutkan tiga bentuk kegagalannya: fakta yang dikarang, teks generik yang hambar, dan rasa percaya diri yang keliru."
      },
      {
       "en": "Apply the ownership rule: AI drafts, you verify and decide — your name signs everything.",
       "id": "Menerapkan aturan kepemilikan: AI menyusun draf, kamu memverifikasi dan memutuskan — namamulah yang tertera di semua dokumen."
      }
     ],
     "takeaways": [
      {
       "en": "AI is a strong drafting assistant and a weak biographer: it will confidently invent your achievements if allowed.",
       "id": "AI adalah asisten penyusun draf yang kuat, tetapi penulis biografi yang buruk: kalau dibiarkan, ia akan dengan percaya diri mengarang prestasimu."
      },
      {
       "en": "Recruiters now recognise unedited AI text on sight; generic sludge screens you out at the human stage.",
       "id": "Perekrut sekarang bisa mengenali teks AI yang tidak disunting hanya dengan sekali lihat; teks generik yang hambar menyingkirkanmu di tahap penilaian manusia."
      },
      {
       "en": "Everything submitted under your name is your claim — the honesty rule from Module 2 applies to AI output unchanged.",
       "id": "Semua yang dikirim atas namamu adalah klaimmu — aturan kejujuran dari Modul 2 berlaku pada keluaran AI, tanpa pengecualian."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "What the tools do well",
        "id": "Apa yang dikerjakan alat AI dengan baik"
       },
       "body": {
        "en": "Used properly, current AI assistants accelerate four jobs. <b>Drafting:</b> turning your raw notes about an internship into candidate bullet lines — you supply facts, it supplies fluency. <b>Tailoring:</b> comparing your CV against a JD and suggesting which evidence to lead with (the Screening Gym's ATS check does the keyword-coverage half of this transparently, on-device). <b>Research:</b> summarising a company's products, recent news and competitors before a letter or interview. <b>Rehearsal:</b> generating likely interview questions from a JD to practise against — The Rope's simulator builds this into a full training loop. The common thread: AI compresses hours of blank-page work into minutes of editing work.",
        "id": "Kalau dipakai dengan benar, asisten AI yang ada sekarang mempercepat empat pekerjaan. <b>Menyusun draf:</b> mengubah catatan mentahmu tentang sebuah magang menjadi calon butir CV — kamu memasok faktanya, AI memasok kelancaran bahasanya. <b>Menyesuaikan:</b> membandingkan CV-mu dengan deskripsi lowongan dan menyarankan bukti mana yang sebaiknya ditaruh di depan (pemeriksa ATS di Screening Gym mengerjakan separuh bagian cakupan kata kunci ini secara transparan, sepenuhnya di perangkatmu). <b>Riset:</b> merangkum produk, berita terbaru, dan pesaing sebuah perusahaan sebelum kamu menulis surat atau wawancara. <b>Gladi:</b> menghasilkan pertanyaan wawancara yang kemungkinan muncul dari deskripsi lowongan, untuk kamu latih — simulator The Rope menjadikannya putaran latihan yang utuh. Benang merahnya: AI memampatkan berjam-jam kerja menghadapi halaman kosong menjadi beberapa menit kerja menyunting."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Where they fail dangerously",
        "id": "Di mana alat AI gagal secara berbahaya"
       },
       "body": {
        "en": "<b>Hallucination:</b> ask an AI to “improve” your CV and it may upgrade “helped with social media” into “led a team of five in a viral campaign” — fluent, plausible, false, and yours the moment you submit it. <b>Generic sludge:</b> unedited AI cover letters share a recognisable texture — balanced sentences, empty enthusiasm, zero specifics — and recruiters who read hundreds now discount it instantly; the tool that was supposed to differentiate you mass-produces you. <b>False confidence:</b> AI research summaries occasionally state wrong facts about companies with perfect fluency; one invented “recent product launch” in a cover letter reveals both the tool and the unchecked delegation. Every failure mode has the same root: output not verified by the person who signs it.",
        "id": "<b>Mengarang:</b> minta AI “memperbaiki” CV-mu, dan ia bisa menaikkan “membantu media sosial” menjadi “memimpin tim lima orang dalam kampanye viral” — lancar, masuk akal, palsu, dan menjadi klaimmu begitu kamu mengirimnya. <b>Teks generik yang hambar:</b> surat lamaran AI yang tidak disunting punya tekstur yang mudah dikenali — kalimat yang serba seimbang, antusiasme yang kosong, tanpa detail yang spesifik — dan perekrut yang membaca ratusan surat sekarang langsung mengabaikannya; alat yang seharusnya membedakanmu justru memproduksimu secara massal. <b>Percaya diri yang keliru:</b> ringkasan riset AI sesekali menyatakan fakta yang salah tentang perusahaan dengan kelancaran yang sempurna; satu “peluncuran produk terbaru” yang dikarang di surat lamaran membongkar alatnya sekaligus fakta bahwa kamu tidak memeriksa. Semua bentuk kegagalan itu berakar pada hal yang sama: keluaran yang tidak diverifikasi oleh orang yang menandatanganinya."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "The ownership rule",
        "id": "Aturan kepemilikan"
       },
       "body": {
        "en": "Three lines keep AI on the right side of your application. <b>Facts flow one way:</b> from you to the tool — the AI never introduces an achievement, number, tool or title you did not give it; your master record (6.4) is the only source of facts. <b>Every output is edited:</b> your voice, your specifics, at least one detail per document no AI could know. <b>Disclosure follows the asker's rules:</b> where an employer asks whether AI was used, answer truthfully; where tests forbid it, the prohibition is the test. Employers increasingly probe suspiciously polished applications in interviews — the surest defence is that everything claimed is true and everything written is genuinely yours after editing.",
        "id": "Tiga garis menjaga AI tetap berada di sisi yang benar dalam lamaranmu. <b>Fakta mengalir satu arah:</b> darimu ke alat — AI tidak pernah boleh memperkenalkan prestasi, angka, alat, atau jabatan yang tidak kamu berikan; catatan indukmu (6.4) adalah satu-satunya sumber fakta. <b>Setiap keluaran disunting:</b> suaramu, detailmu, minimal satu hal per dokumen yang tidak mungkin diketahui AI. <b>Keterbukaan mengikuti aturan pihak yang bertanya:</b> kalau perusahaan bertanya apakah kamu memakai AI, jawab dengan jujur; kalau sebuah tes melarangnya, larangan itu sendiri adalah tesnya. Perusahaan makin sering menggali lamaran yang terpoles secara mencurigakan saat wawancara — pertahanan paling pasti adalah semua yang diklaim memang benar, dan semua yang tertulis benar-benar milikmu setelah disunting."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "An AI rewrite of your CV added “managed a Rp 50m budget” to an internship where you tracked expenses in a spreadsheet. What happened and what do you do?",
        "id": "AI menulis ulang CV-mu dan menambahkan “mengelola anggaran Rp50 juta” pada magang yang sebenarnya hanya kamu isi dengan mencatat pengeluaran di spreadsheet. Apa yang terjadi, dan apa yang kamu lakukan?"
       },
       "options": [
        {
         "en": "The AI found a better framing — keep it, it sounds stronger",
         "id": "AI menemukan cara penyampaian yang lebih baik — pertahankan, kedengarannya lebih kuat"
        },
        {
         "en": "It hallucinated a claim you never made — delete it, and restate the true scope: “tracked Rp 50m of project expenses”",
         "id": "AI mengarang klaim yang tidak pernah kamu buat — hapus, dan tulis ulang sesuai cakupan yang sebenarnya: “mencatat pengeluaran proyek senilai Rp50 juta”"
        },
        {
         "en": "Keep it but be ready to explain in interviews",
         "id": "Pertahankan, tapi siap-siap menjelaskannya saat wawancara"
        }
       ],
       "correct": 1,
       "why": {
        "en": "“Managed” claims authority you did not hold — a reference check away from disqualification. The true version, precisely framed, is still a strong line.",
        "id": "“Mengelola” mengklaim wewenang yang tidak pernah kamu pegang — hanya berjarak satu pemeriksaan referensi dari diskualifikasi. Versi yang benar, ditulis dengan tepat, tetap merupakan butir yang kuat."
       }
      }
     ],
     "quote": {
      "en": "AI may help you present your truth at its best — never someone else's.",
      "id": "AI boleh membantumu menampilkan kebenaranmu dalam versi terbaiknya — tetapi tidak pernah kebenaran milik orang lain."
     }
    },
    {
     "n": "8.2",
     "title": {
      "en": "AI for CV and Resume Optimisation",
      "id": "AI untuk Optimalisasi CV dan Resume"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The CV workflow with AI in the loop, end to end: facts from your master record, drafts from the tool, evidence discipline from Module 2, and verification passes that catch what the tool invented. With worked prompts and before/after lines.",
      "id": "Alur kerja CV dengan AI di dalamnya, dari awal sampai akhir: fakta dari catatan indukmu, draf dari alat, disiplin bukti dari Modul 2, dan putaran verifikasi yang menangkap apa pun yang dikarang alat. Lengkap dengan contoh prompt dan butir sebelum/sesudah."
     },
     "objectives": [
      {
       "en": "Run the five-step AI CV workflow: facts in, draft out, edit, verify, ATS-check.",
       "id": "Menjalankan alur kerja CV dengan AI dalam lima langkah: masukkan fakta, keluarkan draf, sunting, verifikasi, periksa ATS."
      },
      {
       "en": "Write fact-rich prompts that prevent hallucination by construction.",
       "id": "Menulis prompt yang kaya fakta, sehingga sejak awal tidak memberi ruang untuk mengarang."
      },
      {
       "en": "Verify AI output line by line against the master record.",
       "id": "Memverifikasi keluaran AI baris demi baris terhadap catatan induk."
      }
     ],
     "takeaways": [
      {
       "en": "The prompt carries the facts; the tool carries the fluency; you carry the responsibility.",
       "id": "Prompt membawa faktanya; alat membawa kelancaran bahasanya; kamu membawa tanggung jawabnya."
      },
      {
       "en": "Give the AI your rough notes and the bullet formula — never ask it to “make my CV more impressive”.",
       "id": "Beri AI catatan kasarmu dan rumus butir — jangan pernah memintanya “membuat CV saya lebih mengesankan”."
      },
      {
       "en": "The verification pass reads for three things: invented facts, inflated verbs, and lost specificity.",
       "id": "Putaran verifikasi mencari tiga hal: fakta yang dikarang, kata kerja yang dibesar-besarkan, dan detail spesifik yang hilang."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "The five-step workflow",
        "id": "Alur kerja lima langkah"
       },
       "body": {
        "en": "<b>1 · Facts in:</b> from the master record, write rough notes per role — what you did, numbers, tools, outcomes — ugly is fine. <b>2 · Draft out:</b> prompt the tool with the notes, the bullet formula (strong verb + scope + measured result), and the target JD's top requirements; ask for two or three candidate versions per bullet. <b>3 · Edit:</b> pick and adjust — your voice, correct emphasis, one specific detail per bullet the tool could not know. <b>4 · Verify:</b> line-by-line against the master record — every number, title, tool and claim traced to its source or deleted. <b>5 · ATS-check:</b> run the Gym's check against the JD; add honestly supportable missing keywords; run the parse test. Twenty minutes per tailored CV once the master record exists.",
        "id": "<b>1 · Masukkan fakta:</b> dari catatan induk, tulis catatan kasar untuk setiap posisi — apa yang kamu kerjakan, angkanya, alatnya, hasilnya — berantakan tidak apa-apa. <b>2 · Keluarkan draf:</b> beri alat catatan itu, rumus butir (kata kerja kuat + cakupan + hasil terukur), dan persyaratan utama dari deskripsi lowongan yang dituju; minta dua atau tiga versi untuk setiap butir. <b>3 · Sunting:</b> pilih dan sesuaikan — suaramu, penekanan yang tepat, satu detail spesifik per butir yang tidak mungkin diketahui alat. <b>4 · Verifikasi:</b> baris demi baris terhadap catatan induk — setiap angka, jabatan, alat, dan klaim ditelusuri ke sumbernya, atau dihapus. <b>5 · Periksa ATS:</b> jalankan pemeriksa di Gym terhadap deskripsi lowongan; tambahkan kata kunci yang belum ada dan memang bisa kamu pertanggungjawabkan; jalankan uji urai. Dua puluh menit per CV yang disesuaikan, begitu catatan induknya sudah ada."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "Prompts that work",
        "id": "Prompt yang berhasil"
       },
       "body": {
        "en": "Weak prompt: “Improve my CV for a data analyst role” — an invitation to invent. Strong prompt: “Here are my rough notes on an internship [paste facts]. Here are the top requirements of the target JD [paste]. Write three versions of two CV bullets using only facts from my notes, in the pattern: strong verb + what + scope numbers + measured result. Do not add any tool, number or achievement not present in my notes. Flag any place where a metric is missing and ask me for it instead of estimating.” The last sentence converts the tool's failure mode into a feature: instead of inventing your missing metric, it asks — and the question (“how many rows was that dataset?”) often reminds you of evidence you forgot you had.",
        "id": "Prompt yang lemah: “Perbaiki CV saya untuk posisi data analyst” — itu undangan untuk mengarang. Prompt yang kuat: “Ini catatan kasar saya tentang sebuah magang [tempel fakta]. Ini persyaratan utama deskripsi lowongan yang saya tuju [tempel]. Tulis tiga versi untuk dua butir CV, hanya memakai fakta dari catatan saya, dengan pola: kata kerja kuat + apa yang dikerjakan + angka cakupan + hasil terukur. Jangan tambahkan alat, angka, atau prestasi apa pun yang tidak ada di catatan saya. Tandai bagian yang metriknya belum ada dan tanyakan kepada saya, jangan menaksir.” Kalimat terakhir itu mengubah kelemahan alat menjadi fitur: alih-alih mengarang metrik yang hilang, ia bertanya — dan pertanyaannya (“berapa baris dataset itu?”) sering mengingatkanmu pada bukti yang kamu lupa kamu punya."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "The verification read",
        "id": "Membaca untuk verifikasi"
       },
       "body": {
        "en": "Read the draft three times, once per failure mode. <b>Invented facts:</b> any number, tool, title or outcome not in your notes — delete or correct, no exceptions, however good it sounds. <b>Inflated verbs:</b> “led” where you contributed, “managed” where you tracked, “designed” where you implemented — downgrade to the true verb; precision reads as credibility, and interviews are calibrated to the verbs you chose. <b>Lost specificity:</b> AI smooths distinctive details into generic phrasing — restore the community name, the actual tool version, the odd concrete number (“Rp 85m” not “a substantial budget”), because those details are what make evidence believable and memorable.",
        "id": "Baca drafnya tiga kali, sekali untuk setiap bentuk kegagalan. <b>Fakta yang dikarang:</b> angka, alat, jabatan, atau hasil apa pun yang tidak ada di catatanmu — hapus atau koreksi, tanpa pengecualian, sebagus apa pun bunyinya. <b>Kata kerja yang dibesar-besarkan:</b> “memimpin” padahal kamu berkontribusi, “mengelola” padahal kamu mencatat, “merancang” padahal kamu mengimplementasikan — turunkan ke kata kerja yang sebenarnya; ketepatan terbaca sebagai kredibilitas, dan pertanyaan wawancara dikalibrasi pada kata kerja yang kamu pilih. <b>Detail spesifik yang hilang:</b> AI menghaluskan detail yang khas menjadi frasa generik — kembalikan nama komunitasnya, versi alat yang sebenarnya, angka konkret yang tidak bulat (“Rp85 juta”, bukan “anggaran yang besar”), karena detail seperti itulah yang membuat bukti bisa dipercaya dan diingat."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "AI-assisted bullet — unedited vs owned",
        "id": "Butir berbantuan AI — tanpa suntingan vs sudah kamu miliki"
       },
       "q": {
        "en": "From notes: “thesis - scraped 3 marketplace sites, python, ~90k listings, found price gap pattern, seller association invited me to present”",
        "id": "Dari catatan: “skripsi - scraping 3 situs marketplace, python, ~90 ribu listing, menemukan pola selisih harga, asosiasi penjual mengundang saya presentasi”"
       },
       "weak": {
        "en": "“Leveraged cutting-edge Python web scraping technologies to spearhead a comprehensive analysis of e-commerce marketplaces, delivering actionable insights that drove significant stakeholder engagement.”",
        "id": "“Memanfaatkan teknologi web scraping Python yang mutakhir untuk memelopori analisis komprehensif atas marketplace e-commerce, menghasilkan wawasan yang dapat ditindaklanjuti dan mendorong keterlibatan pemangku kepentingan yang signifikan.”"
       },
       "strong": {
        "en": "“Scraped and analysed ~90,000 listings from 3 Indonesian marketplaces (Python) for my thesis; identified a systematic cross-platform price gap that a regional seller association invited me to present to 40 members.”",
        "id": "“Melakukan scraping dan menganalisis ~90.000 listing dari 3 marketplace Indonesia (Python) untuk skripsi; menemukan pola selisih harga lintas platform yang sistematis, sehingga sebuah asosiasi penjual daerah mengundang saya mempresentasikannya di depan 40 anggota.”"
       },
       "why": {
        "en": "The weak version is fluent sludge — zero checkable facts survive. The strong version keeps every specific from the notes and adds the one detail (40 members) only the owner could supply.",
        "id": "Versi yang lemah adalah teks lancar yang hambar — tidak ada satu pun fakta yang bisa diperiksa. Versi yang kuat mempertahankan setiap detail dari catatan dan menambahkan satu hal (40 anggota) yang hanya bisa diberikan pemiliknya sendiri."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does the strong prompt instruct the AI to ask for missing metrics instead of estimating?",
        "id": "Mengapa prompt yang kuat menginstruksikan AI untuk menanyakan metrik yang belum ada, alih-alih menaksirnya?"
       },
       "options": [
        {
         "en": "To make the conversation longer",
         "id": "Supaya percakapannya lebih panjang"
        },
        {
         "en": "It blocks hallucination at the source and often surfaces real evidence you forgot you had",
         "id": "Karena itu memblokir karangan langsung di sumbernya, dan sering memunculkan bukti nyata yang kamu lupa kamu punya"
        },
        {
         "en": "AI estimates are usually too conservative",
         "id": "Karena taksiran AI biasanya terlalu konservatif"
        }
       ],
       "correct": 1,
       "why": {
        "en": "An estimating AI fills gaps with fiction; an asking AI fills them with your memory. The question is the safety mechanism.",
        "id": "AI yang menaksir mengisi celah dengan fiksi; AI yang bertanya mengisinya dengan ingatanmu. Pertanyaan itulah mekanisme pengamannya."
       }
      }
     ],
     "tool": {
      "id": "studio",
      "mode": "cv",
      "title": {
       "en": "Let the rules do the reading",
       "id": "Biarkan aturannya yang membaca"
      },
      "body": {
       "en": "The CV studio is this lesson in tool form: transparent lint rules for verbs, numbers and length — the checks AI tools run, shown openly so you learn what they reward.",
       "id": "Studio CV adalah pelajaran ini dalam bentuk alat: aturan pemeriksaan yang transparan untuk kata kerja, angka, dan panjang — pemeriksaan yang sama seperti yang dijalankan alat AI, ditampilkan secara terbuka supaya kamu paham apa yang dihargainya."
      },
      "cta": {
       "en": "Open the CV studio →",
       "id": "Buka studio CV →"
      }
     }
    },
    {
     "n": "8.3",
     "title": {
      "en": "AI for ATS Scoring and Keyword Gap Analysis",
      "id": "AI untuk Skor ATS dan Analisis Celah Kata Kunci"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Keyword-gap analysis with AI and without illusions: how matching actually works, how to close honest gaps, and why the Screening Gym's transparent on-device check is the calibration layer for any AI score you meet elsewhere.",
      "id": "Analisis celah kata kunci dengan AI, tanpa ilusi: cara pencocokan sebenarnya bekerja, cara menutup celah dengan jujur, dan mengapa pemeriksa transparan di Screening Gym yang bekerja di perangkatmu adalah lapisan kalibrasi untuk skor AI apa pun yang kamu temui di tempat lain."
     },
     "objectives": [
      {
       "en": "Run a keyword-gap analysis between CV and JD, with AI and with the Gym's check.",
       "id": "Menjalankan analisis celah kata kunci antara CV dan deskripsi lowongan, dengan AI dan dengan pemeriksa di Gym."
      },
      {
       "en": "Close gaps honestly: rephrase, evidence, learn, or accept.",
       "id": "Menutup celah dengan jujur: ubah frasanya, beri bukti, pelajari, atau terima."
      },
      {
       "en": "Calibrate third-party “ATS scores” against what they can actually know.",
       "id": "Mengalibrasi “skor ATS” dari pihak ketiga terhadap apa yang benar-benar bisa mereka ketahui."
      }
     ],
     "takeaways": [
      {
       "en": "A keyword gap has four honest closes: their term for your true experience, new evidence, actual learning — or acceptance.",
       "id": "Sebuah celah kata kunci punya empat cara jujur untuk ditutup: istilah mereka untuk pengalaman aslimu, bukti baru, belajar sungguhan — atau menerimanya."
      },
      {
       "en": "Commercial “ATS scores” estimate against generic models — treat them as linting, not verdicts.",
       "id": "“Skor ATS” komersial menaksir berdasarkan model generik — perlakukan sebagai pemeriksaan awal, bukan vonis."
      },
      {
       "en": "The gap list doubles as interview prep: every keyword you claim will be probed by a human eventually.",
       "id": "Daftar celah sekaligus menjadi persiapan wawancara: setiap kata kunci yang kamu klaim pada akhirnya akan digali oleh manusia."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "Running the analysis",
        "id": "Menjalankan analisisnya"
       },
       "body": {
        "en": "Extract from the JD: named tools, methods, competencies, domain terms — weighted by repetition and position. Compare against your CV as written. The Gym's ATS check automates exactly this, on-device and transparently: it shows which load-bearing JD terms appear in your CV, which are missing, and where sections look weak to a parser. An AI assistant adds a useful second pass — synonyms and implied matches the literal check cannot see (“built dashboards weekly” implies reporting experience) — but its output is a suggestion list, filtered through the same honesty gate as everything else.",
        "id": "Ambil dari deskripsi lowongan: nama alat, metode, kompetensi, istilah bidang — diberi bobot berdasarkan seberapa sering diulang dan di mana posisinya. Bandingkan dengan CV-mu apa adanya. Pemeriksa ATS di Gym mengotomatiskan persis ini, di perangkatmu dan secara transparan: ia menunjukkan istilah penopang mana dari deskripsi lowongan yang muncul di CV-mu, mana yang belum ada, dan bagian mana yang terlihat lemah bagi pengurai. Asisten AI menambahkan putaran kedua yang berguna — sinonim dan kecocokan tersirat yang tidak terlihat oleh pemeriksa harfiah (“membangun dasbor setiap minggu” menyiratkan pengalaman pelaporan) — tetapi keluarannya adalah daftar saran, yang disaring lewat gerbang kejujuran yang sama seperti semua hal lainnya."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Four honest closes",
        "id": "Empat cara jujur menutup celah"
       },
       "body": {
        "en": "For each missing term, exactly one of four moves. <b>Rephrase:</b> you have the experience under different words — adopt their vocabulary (“coordinated with faculty and sponsors” becomes “stakeholder management”, truthfully). <b>Evidence:</b> you have adjacent experience worth an honest bullet that partially covers the term. <b>Learn:</b> the term names a real gap that matters across your target JDs — a weekend project or course converts it from gap to bullet (and “currently learning X, applied in [small project]” is a legitimate line). <b>Accept:</b> the gap is real and unclosable this cycle — apply anyway if the musts are met, and prepare the honest interview answer for when it comes up. What is never on the list: pasting the keyword without experience behind it.",
        "id": "Untuk setiap istilah yang belum ada, pilih tepat satu dari empat langkah. <b>Ubah frasanya:</b> kamu punya pengalamannya, hanya dengan kata yang berbeda — pakai kosakata mereka (“berkoordinasi dengan fakultas dan sponsor” menjadi “stakeholder management”, dengan jujur). <b>Beri bukti:</b> kamu punya pengalaman yang berdekatan dan layak menjadi satu butir jujur yang menutup sebagian istilah itu. <b>Pelajari:</b> istilah itu menunjukkan celah nyata yang penting di banyak lowongan targetmu — proyek akhir pekan atau satu kursus mengubahnya dari celah menjadi butir (dan “sedang mempelajari X, diterapkan di [proyek kecil]” adalah butir yang sah). <b>Terima:</b> celahnya nyata dan tidak bisa ditutup di siklus ini — tetap lamar kalau syarat wajibnya terpenuhi, dan siapkan jawaban wawancara yang jujur untuk saat hal itu ditanyakan. Yang tidak pernah ada di daftar: menempelkan kata kunci tanpa pengalaman di baliknya."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Calibrating the scores",
        "id": "Mengalibrasi skornya"
       },
       "body": {
        "en": "Commercial tools sell “ATS compatibility scores” with confident percentages. Understand what they can and cannot know: they can check parsing hygiene and keyword overlap against the JD you gave them — useful linting; they cannot know any specific employer's actual configuration, weights or knockouts, so “87% match” is an estimate against a generic model, not a prediction. Practical calibration: treat any score as a direction (higher coverage of load-bearing terms, cleaner parsing = better), ignore decimal precision, and never pay for a number the Gym's transparent check plus five minutes of judgment gives you honestly. The unfixable remainder — the employer's hidden weights — is exactly why referrals and evidence quality still dominate outcomes.",
        "id": "Alat-alat komersial menjual “skor kompatibilitas ATS” dengan persentase yang terdengar meyakinkan. Pahami apa yang bisa dan tidak bisa mereka ketahui: mereka bisa memeriksa kebersihan format untuk diurai dan irisan kata kunci dengan deskripsi lowongan yang kamu berikan — pemeriksaan awal yang berguna; mereka tidak mungkin tahu konfigurasi, bobot, atau pertanyaan penggugur yang sebenarnya dipakai perusahaan tertentu, jadi “cocok 87%” adalah taksiran terhadap model generik, bukan ramalan. Kalibrasi praktisnya: perlakukan skor apa pun sebagai arah (cakupan istilah penopang lebih tinggi, format lebih bersih = lebih baik), abaikan angka di belakang koma, dan jangan pernah membayar untuk angka yang bisa kamu dapatkan dengan jujur dari pemeriksa transparan di Gym plus lima menit pertimbanganmu sendiri. Sisa yang tidak bisa diperbaiki — bobot tersembunyi milik perusahaan — persis alasan mengapa rekomendasi dan mutu bukti tetap paling menentukan hasil."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "The JD demands “experience with Tableau”; you have none but strong Excel dashboard work. The honest close?",
        "id": "Deskripsi lowongan menuntut “pengalaman dengan Tableau”; kamu tidak punya, tetapi kuat dalam membuat dasbor di Excel. Cara jujur menutupnya?"
       },
       "options": [
        {
         "en": "Add Tableau to skills — dashboard concepts transfer anyway",
         "id": "Tambahkan Tableau ke daftar keterampilan — toh konsep dasbornya sama saja"
        },
        {
         "en": "Evidence the adjacent skill (“built 5 Excel dashboards used weekly by 20 staff”), start a small Tableau project, and list it as currently learning once real",
         "id": "Beri bukti keterampilan yang berdekatan (“membangun 5 dasbor Excel yang dipakai 20 staf setiap minggu”), mulai proyek Tableau kecil, dan cantumkan sebagai sedang dipelajari begitu benar-benar berjalan"
        },
        {
         "en": "Skip every JD that mentions Tableau",
         "id": "Lewati semua lowongan yang menyebut Tableau"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Adjacent evidence plus genuine learning covers the gap honestly and survives the interview probe that the pasted keyword would fail.",
        "id": "Bukti yang berdekatan plus belajar sungguhan menutup celah dengan jujur, dan lolos dari pertanyaan wawancara yang pasti menjatuhkan kata kunci tempelan."
       }
      }
     ],
     "tool": {
      "id": "gym",
      "mode": "ats",
      "title": {
       "en": "Run the transparent check",
       "id": "Jalankan pemeriksa yang transparan"
      },
      "body": {
       "en": "CV against JD, on your device, every matched and missing term visible — the calibration layer for any score anyone else sells you.",
       "id": "CV dibandingkan dengan deskripsi lowongan, di perangkatmu, setiap istilah yang cocok dan yang belum ada terlihat jelas — lapisan kalibrasi untuk skor apa pun yang dijual orang lain kepadamu."
      },
      "cta": {
       "en": "Open the ATS check →",
       "id": "Buka pemeriksa ATS →"
      }
     }
    },
    {
     "n": "8.4",
     "title": {
      "en": "AI for Cover Letter Personalisation and Company Research",
      "id": "AI untuk Personalisasi Surat Lamaran dan Riset Perusahaan"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The letter and the research, AI-assisted without the sludge: company research workflows that verify before they claim, and the personalisation pass that puts a human back into an AI-drafted letter. Ends with the module's ethics summary.",
      "id": "Surat lamaran dan riset, dibantu AI tanpa jadi hambar: alur riset perusahaan yang memverifikasi sebelum mengklaim, dan putaran personalisasi yang mengembalikan sentuhan manusia ke dalam surat yang drafnya dibuat AI. Ditutup dengan ringkasan etika modul ini."
     },
     "objectives": [
      {
       "en": "Run AI company research that separates verified facts from plausible fictions.",
       "id": "Menjalankan riset perusahaan dengan AI yang memisahkan fakta terverifikasi dari fiksi yang terdengar masuk akal."
      },
      {
       "en": "Draft letters with AI, then apply the two-point personalisation pass by hand.",
       "id": "Menyusun draf surat dengan AI, lalu menerapkan putaran personalisasi dua titik dengan tanganmu sendiri."
      },
      {
       "en": "State the module's ethics: where AI assistance ends and misrepresentation begins.",
       "id": "Menyatakan etika modul ini: di mana bantuan AI berakhir dan penyesatan dimulai."
      }
     ],
     "takeaways": [
      {
       "en": "AI research briefs are leads, not facts: every claim that enters your letter gets verified at the source.",
       "id": "Ringkasan riset dari AI adalah petunjuk, bukan fakta: setiap klaim yang masuk ke suratmu harus diverifikasi di sumbernya."
      },
      {
       "en": "The two personalisation points (opening proof, why-them paragraph) must be human-made — they are what the reader checks.",
       "id": "Dua titik personalisasi (bukti pembuka dan paragraf “mengapa perusahaan ini”) harus buatan manusia — itulah yang diperiksa pembaca."
      },
      {
       "en": "The ethics line is constant across the module: assistance with your truth, never manufacture of a better one.",
       "id": "Garis etikanya tetap sama di sepanjang modul: bantuan untuk menyampaikan kebenaranmu, bukan untuk memproduksi kebenaran yang lebih bagus."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "Research that verifies",
        "id": "Riset yang memverifikasi"
       },
       "body": {
        "en": "The workflow: ask the AI for a structured brief — products, customers, recent developments, competitors, likely challenges for the team you are joining — then <b>verify before use</b>: the two or three facts you intend to cite get checked against the company's own site, a news search, or their published reports. The AI's job was the map; the sources are the territory. This habit also upgrades interviews: “I read your sustainability report's section on supplier audits” lands, and survives follow-up, in a way no unverified summary can. Time cost after practice: fifteen minutes per company, most of it reading things worth reading anyway.",
        "id": "Alurnya: minta AI membuat ringkasan terstruktur — produk, pelanggan, perkembangan terbaru, pesaing, kemungkinan tantangan bagi tim yang akan kamu masuki — lalu <b>verifikasi sebelum dipakai</b>: dua atau tiga fakta yang akan kamu kutip diperiksa terhadap situs resmi perusahaan, pencarian berita, atau laporan yang mereka terbitkan. Tugas AI adalah membuat petanya; sumber-sumber itulah wilayah sebenarnya. Kebiasaan ini juga menaikkan kelas wawancaramu: “Saya membaca bagian audit pemasok di laporan keberlanjutan Anda” mengena, dan tahan terhadap pertanyaan lanjutan, dengan cara yang tidak mungkin dicapai ringkasan yang belum diverifikasi. Biaya waktunya setelah terbiasa: lima belas menit per perusahaan, sebagian besar untuk membaca hal-hal yang memang layak dibaca."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "The personalisation pass",
        "id": "Putaran personalisasi"
       },
       "body": {
        "en": "Let the AI draft the letter's skeleton from your positioning paragraphs (5.3) — it is good at connective tissue. Then hand-write the two points readers actually check (2.4): the <b>opening proof</b>, chosen for this JD's top requirement, in your own phrasing with its own numbers; and the <b>why-them paragraph</b>, built on one verified fact and its genuine connection to you. Read the whole letter aloud once: anywhere your voice would not say it, rewrite it. The test of a done letter: could any other applicant have sent it? If yes, the personalisation pass is not finished.",
        "id": "Biarkan AI menyusun kerangka suratnya dari paragraf-paragraf positioning-mu (5.3) — AI mahir membuat kalimat penghubung. Lalu tulis sendiri dua titik yang benar-benar diperiksa pembaca (2.4): <b>bukti pembuka</b>, dipilih berdasarkan persyaratan utama lowongan ini, dengan susunan kata dan angkamu sendiri; dan <b>paragraf “mengapa perusahaan ini”</b>, dibangun di atas satu fakta terverifikasi dan kaitannya yang tulus denganmu. Baca seluruh surat dengan suara keras satu kali: di bagian mana pun yang tidak akan kamu ucapkan dengan suaramu sendiri, tulis ulang. Ujian surat yang sudah selesai: bisakah pelamar lain mengirim surat yang sama? Kalau ya, putaran personalisasinya belum selesai."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "The module's ethics, in one panel",
        "id": "Etika modul ini, dalam satu panel"
       },
       "body": {
        "en": "Legitimate: AI drafting from your true facts; AI tailoring suggestions you verify; AI research you check at source; AI mock interviews and question generation for practice. Illegitimate: invented experience however fluent; keywords without substance; AI-written assessment answers where the assessment tests your own writing; undisclosed AI use where disclosure is asked; live AI assistance in interviews — the position The Rope's integrity panel states publicly. The through-line of the whole module: employers are screening for who you are; AI may help you present that truthfully at your best, and may not help you present someone else.",
        "id": "Sah: AI menyusun draf dari fakta aslimu; saran penyesuaian dari AI yang kamu verifikasi; riset AI yang kamu periksa di sumbernya; wawancara simulasi dan pembuatan pertanyaan latihan dengan AI. Tidak sah: pengalaman yang dikarang, sefasih apa pun bahasanya; kata kunci tanpa substansi; jawaban asesmen yang ditulis AI padahal asesmen itu menguji tulisanmu sendiri; memakai AI tanpa memberi tahu ketika keterbukaan diminta; bantuan AI secara langsung saat wawancara — posisi yang dinyatakan secara terbuka oleh panel integritas The Rope. Benang merah seluruh modul: perusahaan sedang menyaring siapa dirimu; AI boleh membantumu menampilkan itu dengan jujur dalam versi terbaikmu, dan tidak boleh membantumu menampilkan orang lain."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "An AI brief says the company “recently expanded to Vietnam”. Before citing it in your letter you should:",
        "id": "Ringkasan AI menyebut perusahaan itu “baru saja berekspansi ke Vietnam”. Sebelum mengutipnya di suratmu, kamu sebaiknya:"
       },
       "options": [
        {
         "en": "Cite it — AI research is usually right",
         "id": "Kutip saja — riset AI biasanya benar"
        },
        {
         "en": "Verify it on the company's site or news sources; cite only what you confirmed",
         "id": "Verifikasi di situs perusahaan atau sumber berita; kutip hanya yang sudah kamu pastikan"
        },
        {
         "en": "Soften it to “I heard you may be expanding internationally”",
         "id": "Perhalus menjadi “saya dengar Anda mungkin sedang berekspansi ke luar negeri”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "One hallucinated “fact” in a letter reveals unchecked delegation and sinks the application. Verification is minutes; the credibility is everything.",
        "id": "Satu “fakta” karangan dalam surat membongkar bahwa kamu tidak memeriksa, dan menenggelamkan lamaranmu. Verifikasi hanya butuh beberapa menit; kredibilitas adalah segalanya."
       }
      }
     ],
     "tool": {
      "id": "studio",
      "mode": "letter",
      "title": {
       "en": "Personalise against a real JD",
       "id": "Personalisasi dengan deskripsi lowongan sungguhan"
      },
      "body": {
       "en": "Paste a real JD into the letter developer's mirror check and watch which load-bearing terms your draft covers — the same gap analysis this lesson teaches, computed openly.",
       "id": "Tempel deskripsi lowongan sungguhan ke pemeriksa pencerminan di penyusun surat, dan lihat istilah penopang mana yang sudah tercakup drafmu — analisis celah yang sama seperti yang diajarkan pelajaran ini, dihitung secara terbuka."
      },
      "cta": {
       "en": "Open the letter developer →",
       "id": "Buka penyusun surat →"
      }
     }
    }
   ],
   "hero": "../../assets/m/02-prep.jpg",
   "heroPos": "center 40%"
  },
  {
   "num": 9,
   "title": {
    "en": "Professional Etiquette",
    "id": "Etiket Profesional"
   },
   "overview": {
    "en": "Module 9 of The Pack focuses on professional etiquette. Work through the lessons in order — each builds on the last.",
    "id": "Modul 9 The Pack berfokus pada etiket profesional. Kerjakan pelajarannya secara berurutan — setiap pelajaran dibangun di atas pelajaran sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply professional etiquette to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu bisa menerapkan etiket profesional pada keputusan kariermu sendiri, dengan metode yang konkret dan bisa diulang."
   },
   "lessons": [
    {
     "n": "9.1",
     "title": {
      "en": "Introduction to Professional Etiquette — Why It Matters and Where It Shows",
      "id": "Pengantar Etiket Profesional — Mengapa Penting dan Di Mana Terlihat"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Etiquette is not decoration; it is applied respect, and it is being read at every touchpoint of your candidacy — often before your qualifications are. This lesson maps where etiquette shows, why it moves decisions, and the professional default settings that never embarrass you.",
      "id": "Etiket bukan hiasan; etiket adalah rasa hormat yang dipraktikkan, dan ia dibaca di setiap titik sentuh pencalonanmu — sering kali sebelum kualifikasimu sempat dibaca. Pelajaran ini memetakan di mana etiket terlihat, mengapa ia menggerakkan keputusan, dan setelan bawaan profesional yang tidak akan pernah mempermalukanmu."
     },
     "objectives": [
      {
       "en": "Identify the touchpoints where candidates are etiquette-read: mail, calls, waits, follow-ups.",
       "id": "Mengenali titik-titik sentuh tempat etiket kandidat dibaca: surat, telepon, waktu menunggu, tindak lanjut."
      },
      {
       "en": "Explain why etiquette functions as a competence preview for employers.",
       "id": "Menjelaskan mengapa etiket berfungsi sebagai cuplikan kompetensi di mata perusahaan."
      },
      {
       "en": "Install the professional defaults: response times, forms of address, punctuality buffers.",
       "id": "Memasang setelan bawaan profesional: waktu merespons, cara menyapa, waktu cadangan supaya tidak terlambat."
      }
     ],
     "takeaways": [
      {
       "en": "Every interaction is read as a sample of your future workplace behaviour — because it is one.",
       "id": "Setiap interaksi dibaca sebagai contoh perilakumu kelak di tempat kerja — karena memang begitu adanya."
      },
      {
       "en": "Defaults beat improvisation: decide once how you address, respond, and arrive — then stop spending thought on it.",
       "id": "Setelan bawaan mengalahkan improvisasi: putuskan sekali cara menyapa, merespons, dan datang — lalu berhenti memikirkannya."
      },
      {
       "en": "Warmth and respect are the substance; the forms are just their local dialect.",
       "id": "Kehangatan dan rasa hormat adalah isinya; bentuk-bentuknya hanya dialek setempat."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "Where it shows",
        "id": "Di mana etiket terlihat"
       },
       "body": {
        "en": "The etiquette read starts earlier than candidates think: the application email's subject line, whether instructions were followed, how you treat the receptionist and the scheduling coordinator (interviewers routinely ask them), your punctuality to calls, how you handle a rescheduled interview, the thank-you note, and how you respond to rejection. Two facts make these moments heavy. They are <b>low-noise</b>: unlike interview answers, nobody coaches their treatment of the coordinator, so it reads as character. And they are <b>remembered</b>: process notes in the ATS persist — the candidate who was rude to reception two years ago is still in the database.",
        "id": "Etiket mulai dibaca lebih awal daripada yang dikira kandidat: subjek email lamaran, apakah instruksi diikuti, caramu memperlakukan resepsionis dan koordinator jadwal (pewawancara rutin bertanya kepada mereka), ketepatan waktumu saat telepon, caramu menangani wawancara yang dijadwalkan ulang, ucapan terima kasih, dan caramu merespons penolakan. Dua hal membuat momen-momen ini berbobot. Momen-momen itu <b>minim polesan</b>: berbeda dari jawaban wawancara, tidak ada yang berlatih cara memperlakukan koordinator, sehingga perilakumu terbaca sebagai karakter. Dan momen-momen itu <b>diingat</b>: catatan proses di ATS bertahan lama — kandidat yang kasar kepada resepsionis dua tahun lalu masih ada di basis data."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "Why it moves decisions",
        "id": "Mengapa etiket menggerakkan keputusan"
       },
       "body": {
        "en": "Hiring is risk assessment, and etiquette is the cheapest risk signal available. A candidate who replies within a day, follows instructions exactly, and treats juniors with respect is statistically predicting their behaviour with clients, deadlines and teammates. Between two similar finalists, the tie-breaker is almost never another skill question — it is “which one do we trust in front of a client?” Etiquette is also asymmetric: excellent manners rarely win a job alone, but poor ones lose jobs alone, silently, with feedback you will never receive.",
        "id": "Merekrut adalah menilai risiko, dan etiket adalah sinyal risiko termurah yang tersedia. Kandidat yang membalas dalam sehari, mengikuti instruksi dengan tepat, dan memperlakukan staf junior dengan hormat secara statistik meramalkan perilakunya kelak terhadap klien, tenggat, dan rekan setim. Di antara dua finalis yang setara, penentunya hampir tidak pernah berupa pertanyaan keterampilan tambahan — melainkan “yang mana yang kita percaya untuk berhadapan dengan klien?” Etiket juga tidak simetris: tata krama yang sangat baik jarang memenangkan pekerjaan dengan sendirinya, tetapi tata krama yang buruk bisa menghilangkan pekerjaan dengan sendirinya, diam-diam, tanpa umpan balik yang akan pernah kamu terima."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "The professional defaults",
        "id": "Setelan bawaan profesional"
       },
       "body": {
        "en": "Set once, run forever. <b>Response time:</b> recruiter emails answered within one business day, even if only “received, will confirm by Friday”. <b>Address:</b> formal first (Pak/Bu/Mr/Ms + name) until invited otherwise; mirror the other side's register. <b>Punctuality:</b> ten minutes early physically, three minutes early online, technology tested before — “buffer time is part of the appointment”. <b>Instructions:</b> read twice, follow exactly, ask early where genuinely ambiguous. <b>Gratitude:</b> a short specific thank-you within 24 hours of any interview or favour. <b>Rejection:</b> one gracious reply — thank, ask for feedback lightly, leave the door open; the recruiter who rejected you for role A shortlists people like you for role B.",
        "id": "Atur sekali, berlaku selamanya. <b>Waktu merespons:</b> email perekrut dijawab dalam satu hari kerja, meskipun hanya “sudah diterima, saya konfirmasi hari Jumat”. <b>Sapaan:</b> formal lebih dulu (Pak/Bu + nama) sampai dipersilakan sebaliknya; ikuti register pihak lain. <b>Ketepatan waktu:</b> sepuluh menit lebih awal untuk pertemuan langsung, tiga menit lebih awal untuk pertemuan daring, teknologi diuji sebelumnya — “waktu cadangan adalah bagian dari janji temu”. <b>Instruksi:</b> baca dua kali, ikuti persis, bertanya lebih awal kalau memang ambigu. <b>Terima kasih:</b> ucapan singkat dan spesifik dalam 24 jam setelah wawancara atau bantuan apa pun. <b>Penolakan:</b> satu balasan yang anggun — berterima kasih, minta umpan balik dengan ringan, biarkan pintu tetap terbuka; perekrut yang menolakmu untuk posisi A akan memasukkan orang sepertimu ke daftar pendek untuk posisi B."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does treatment of the scheduling coordinator weigh so heavily in hiring assessments?",
        "id": "Mengapa cara memperlakukan koordinator jadwal berbobot begitu besar dalam penilaian rekrutmen?"
       },
       "options": [
        {
         "en": "Coordinators make the final hiring decision",
         "id": "Karena koordinator yang membuat keputusan akhir rekrutmen"
        },
        {
         "en": "It is an uncoached, low-noise sample of character — nobody performs for the coordinator",
         "id": "Karena itu contoh karakter yang tidak dilatih dan minim polesan — tidak ada yang berakting di depan koordinator"
        },
        {
         "en": "It is a formal scored stage of the process",
         "id": "Karena itu tahap resmi yang diberi skor dalam proses"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Interview answers are rehearsed; corridor behaviour is not. Assessors weight unrehearsed signals precisely because they are unrehearsed.",
        "id": "Jawaban wawancara sudah dilatih; perilaku di lorong tidak. Asesor memberi bobot pada sinyal yang tidak dilatih justru karena tidak dilatih."
       }
      }
     ],
     "quote": {
      "en": "Etiquette is applied respect — read at every touchpoint before your qualifications are.",
      "id": "Etiket adalah rasa hormat yang dipraktikkan — dibaca di setiap titik sentuh, sebelum kualifikasimu."
     }
    },
    {
     "n": "9.2",
     "title": {
      "en": "Workplace Communication — Written, Verbal, and Digital Standards",
      "id": "Komunikasi di Tempat Kerja — Standar Tertulis, Lisan, dan Digital"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The three channels where early careers are made or dented: written messages, spoken calls, and digital presence. Standards, templates and the recovery move for when you get one wrong.",
      "id": "Tiga saluran tempat karier awal dibangun atau tergores: pesan tertulis, percakapan telepon, dan kehadiran digital. Standarnya, templatnya, dan langkah pemulihan ketika kamu keliru di salah satunya."
     },
     "objectives": [
      {
       "en": "Write professional email and chat that respects the reader's time and the channel's register.",
       "id": "Menulis email dan pesan chat profesional yang menghormati waktu pembaca dan register salurannya."
      },
      {
       "en": "Handle calls and video meetings with presence: preparation, camera, turn-taking.",
       "id": "Menangani telepon dan rapat video dengan kehadiran penuh: persiapan, kamera, giliran bicara."
      },
      {
       "en": "Maintain a digital footprint that survives a recruiter's search.",
       "id": "Menjaga jejak digital yang tahan diperiksa oleh pencarian perekrut."
      }
     ],
     "takeaways": [
      {
       "en": "Match the channel: email for records and requests, chat for speed, calls for nuance — escalate when tone gets lost.",
       "id": "Sesuaikan salurannya: email untuk catatan dan permintaan, chat untuk kecepatan, telepon untuk nuansa — naikkan salurannya begitu nada mulai hilang."
      },
      {
       "en": "In video calls presence is preparation: camera on when others do, tested audio, and full attention visibly given.",
       "id": "Dalam rapat video, kehadiran adalah soal persiapan: kamera menyala kalau yang lain menyalakannya, audio sudah diuji, dan perhatian penuh yang terlihat."
      },
      {
       "en": "Assume anything posted publicly will be read by a recruiter — because on shortlists, it often is.",
       "id": "Anggap apa pun yang kamu unggah secara publik akan dibaca perekrut — karena untuk kandidat di daftar pendek, memang sering begitu."
      }
     ],
     "sections": [
      {
       "icon": "chat",
       "h": {
        "en": "Written standards",
        "id": "Standar tertulis"
       },
       "body": {
        "en": "Professional email carries five parts: informative subject (“Question about the assessment schedule — [Name]”), correct salutation, the point in the first line (Module 4's pyramid in miniature), only necessary context after, and a signature with full name and phone. Chat platforms relax the form, not the respect: no eleven fragmentary messages where one composed message serves; no voice notes to people you have not met; mind the recipient's hours — schedule-send exists. In both channels, proofread names above all: misspelling the recruiter's name in an otherwise perfect email is the error they remember.",
        "id": "Email profesional punya lima bagian: subjek yang informatif (“Pertanyaan tentang jadwal asesmen — [Nama]”), salam pembuka yang tepat, inti pesan di baris pertama (piramida dari Modul 4 dalam versi mini), konteks yang perlu saja sesudahnya, dan tanda tangan berisi nama lengkap dan nomor telepon. Platform chat melonggarkan bentuknya, bukan rasa hormatnya: jangan sebelas pesan terpotong-potong kalau satu pesan yang tersusun rapi sudah cukup; jangan mengirim pesan suara ke orang yang belum pernah kamu temui; perhatikan jam kerja penerima — fitur kirim terjadwal ada untuk itu. Di kedua saluran, periksa ejaan nama di atas segalanya: salah mengeja nama perekrut dalam email yang selebihnya sempurna adalah kesalahan yang akan mereka ingat."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Calls and video presence",
        "id": "Telepon dan kehadiran di rapat video"
       },
       "body": {
        "en": "Before: test the link, audio and lighting; read the attendee list; have your CV, the JD and two questions open. During: camera on if any interviewer's is, name-plate correct, background neutral or honestly blurred; let the other side finish before speaking — latency makes politeness technical; keep answers to the point and check landing (“does that answer it?”). Phone-call etiquette for the unscheduled recruiter call: it is fine — often wise — to say “I'm glad you called; may I ring you back in ten minutes from a quiet place?” Composure over immediacy, always.",
        "id": "Sebelumnya: uji tautan, audio, dan pencahayaan; baca daftar peserta; buka CV-mu, deskripsi lowongan, dan dua pertanyaan yang sudah kamu siapkan. Selama rapat: kamera menyala kalau kamera salah satu pewawancara menyala, nama tampilan ditulis benar, latar belakang netral atau diburamkan apa adanya; biarkan pihak lain selesai bicara sebelum kamu menyahut — jeda koneksi membuat kesopanan menjadi urusan teknis; jaga jawaban tetap tepat sasaran dan pastikan sampai (“apakah itu sudah menjawab?”). Etiket untuk telepon perekrut yang datang tanpa janji: boleh — bahkan sering lebih bijak — mengatakan “senang sekali Bapak/Ibu menelepon; boleh saya telepon balik sepuluh menit lagi dari tempat yang lebih tenang?” Ketenangan di atas kecepatan, selalu."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "The footprint and the recovery",
        "id": "Jejak digital dan cara memulihkannya"
       },
       "body": {
        "en": "Search your own name quarterly, logged out. The standard is not sainthood; it is coherence: public posts you would defend in an interview, a consistent professional identity (2.2), and no public battles. Old embarrassments: delete what you can, and prepare a one-line honest answer for what you cannot. And when you make an etiquette error live — a missed call, a late reply, a wrong name — the recovery move is the same everywhere: prompt, brief, unexcused ownership. “Apologies for missing our call — that was my error entirely. I'm available today after 2 pm or tomorrow morning; whichever suits you.” Professionals are graded less on never erring than on how cleanly they repair.",
        "id": "Cari namamu sendiri di mesin pencari setiap tiga bulan, dalam keadaan tidak login. Standarnya bukan kesucian, melainkan koherensi: unggahan publik yang berani kamu bela dalam wawancara, identitas profesional yang konsisten (2.2), dan tidak ada pertengkaran di ruang publik. Hal memalukan dari masa lalu: hapus yang bisa dihapus, dan siapkan satu kalimat jawaban jujur untuk yang tidak bisa. Dan ketika kamu membuat kesalahan etiket secara langsung — panggilan terlewat, balasan terlambat, salah nama — langkah pemulihannya sama di mana pun: akui dengan cepat, singkat, tanpa alasan. “Mohon maaf saya melewatkan telepon kita — sepenuhnya kesalahan saya. Saya bisa hari ini setelah pukul 2 siang atau besok pagi; mana yang lebih sesuai untuk Bapak/Ibu.” Profesional dinilai bukan dari tidak pernah salah, melainkan dari seberapa bersih ia memperbaikinya."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "Rescheduling an interview — two ways",
        "id": "Menjadwalkan ulang wawancara — dua cara"
       },
       "q": {
        "en": "A family emergency collides with tomorrow's interview",
        "id": "Keadaan darurat keluarga bertabrakan dengan wawancara besok"
       },
       "weak": {
        "en": "“Hi, so sorry but something came up tomorrow, is it possible to move the interview?? Really sorry again 🙏”",
        "id": "“Halo, maaf banget besok ada urusan mendadak, bisa nggak wawancaranya dipindah?? Sekali lagi maaf ya 🙏”"
       },
       "strong": {
        "en": "“Dear Ms Anisa — a family emergency requires me tomorrow morning, and I want to give your team my full attention. Could we reschedule? I am available Thursday and Friday, any time. My apologies for the disruption, and thank you for understanding. — Rafi Pratama”",
        "id": "“Yth. Ibu Anisa — ada keadaan darurat keluarga yang mengharuskan saya hadir besok pagi, dan saya ingin bisa memberikan perhatian penuh kepada tim Ibu. Apakah wawancara bisa dijadwalkan ulang? Saya bisa hari Kamis atau Jumat, jam berapa pun. Mohon maaf atas ketidaknyamanannya, dan terima kasih atas pengertiannya. — Rafi Pratama”"
       },
       "why": {
        "en": "The strong version gives a reason without oversharing, offers concrete alternatives, keeps the register professional — and reads as someone who will handle client emergencies the same way.",
        "id": "Versi yang kuat memberi alasan tanpa berlebihan bercerita, menawarkan alternatif yang konkret, menjaga register tetap profesional — dan terbaca sebagai orang yang akan menangani keadaan darurat klien dengan cara yang sama."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A recruiter calls unannounced while you are on a noisy bus. Best move?",
        "id": "Seorang perekrut menelepon tanpa janji ketika kamu sedang di bus yang bising. Langkah terbaik?"
       },
       "options": [
        {
         "en": "Answer and push through — availability shows enthusiasm",
         "id": "Angkat dan paksakan terus — selalu bisa dihubungi menunjukkan antusiasme"
        },
        {
         "en": "Answer briefly, express gladness, and ask to call back in ten minutes from a quiet place",
         "id": "Angkat sebentar, sampaikan bahwa kamu senang ditelepon, dan minta izin menelepon balik sepuluh menit lagi dari tempat yang tenang"
        },
        {
         "en": "Decline the call and email an apology tonight",
         "id": "Tolak panggilannya dan kirim email permintaan maaf malam ini"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Composure beats immediacy: the callback request is standard professional behaviour and buys you a prepared, audible conversation.",
        "id": "Ketenangan mengalahkan kecepatan: meminta menelepon balik adalah perilaku profesional yang standar, dan memberimu percakapan yang siap dan terdengar jelas."
       }
      }
     ],
     "listen": [
      {
       "label": {
        "en": "Rescheduling an interview — the professional register, heard",
        "id": "Menjadwalkan ulang wawancara — begini bunyi register profesional"
       },
       "text": {
        "en": "A family emergency requires me tomorrow morning, and I want to give your team my full attention. Could we reschedule? I am available Thursday and Friday, any time. My apologies for the disruption, and thank you for understanding.",
        "id": "Ada keadaan darurat keluarga yang mengharuskan saya hadir besok pagi, dan saya ingin bisa memberikan perhatian penuh kepada tim Ibu. Apakah wawancara bisa dijadwalkan ulang? Saya bisa hari Kamis atau Jumat, jam berapa pun. Mohon maaf atas ketidaknyamanannya, dan terima kasih atas pengertiannya."
       }
      }
     ]
    },
    {
     "n": "9.3",
     "title": {
      "en": "Business Etiquette and Professionalism Across Contexts",
      "id": "Etiket Bisnis dan Profesionalisme di Berbagai Situasi"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "Etiquette under fire: four scenarios where the polite move is not obvious — a late interviewer, a group-chat blunder, a LinkedIn conflict, and credit taken for your work. Decide, then compare against the professional standard.",
      "id": "Etiket saat diuji: empat skenario ketika langkah yang santun tidak langsung jelas — pewawancara yang terlambat, salah kirim di grup chat, konflik di LinkedIn, dan hasil kerjamu yang diakui orang lain. Putuskan, lalu bandingkan dengan standar profesional."
     },
     "objectives": [
      {
       "en": "Choose professional responses when others break etiquette first.",
       "id": "Memilih respons profesional ketika orang lain yang lebih dulu melanggar etiket."
      },
      {
       "en": "Repair your own public errors quickly and without drama.",
       "id": "Memperbaiki kesalahanmu sendiri di ruang publik dengan cepat dan tanpa drama."
      },
      {
       "en": "Protect your interests while preserving relationships — the both/and skill.",
       "id": "Melindungi kepentinganmu sambil menjaga hubungan — keterampilan “dua-duanya”."
      }
     ],
     "takeaways": [
      {
       "en": "Other people's rudeness is not a licence; it is a test of your defaults under provocation.",
       "id": "Kekasaran orang lain bukan izin untuk membalas; itu ujian bagi setelan bawaanmu saat diprovokasi."
      },
      {
       "en": "Public errors are repaired publicly and briefly; private grievances are raised privately and specifically.",
       "id": "Kesalahan di ruang publik diperbaiki secara publik dan singkat; keluhan pribadi disampaikan secara pribadi dan spesifik."
      },
      {
       "en": "Assertive and polite are not opposites — the professional register holds both.",
       "id": "Tegas dan santun bukan dua kutub yang berlawanan — register profesional memuat keduanya."
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Scenario 1 — The 25-minute wait",
        "id": "Skenario 1 — Menunggu 25 menit"
       },
       "body": {
        "en": "Your online interview's start time passes. Ten minutes, nothing. Twenty. At what points do you act, and how? Decide, then reveal.",
        "id": "Jam mulai wawancara daringmu sudah lewat. Sepuluh menit, tidak ada siapa-siapa. Dua puluh menit. Pada titik mana kamu bertindak, dan bagaimana? Putuskan, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Minute 5: stay in the room, recheck the link and your email for a change notice. Minute 10: one polite message to the coordinator — “I'm in the meeting room for our 2 pm; happy to keep waiting, and equally happy to reschedule if the day has moved.” Then wait, visibly unbothered, doing silent prep. If they arrive at minute 25: zero reproach, full engagement — “no trouble at all” — because how you absorb their disruption is the strongest data point you will generate today. Afterwards, if it recurs across the process, weigh it as culture evidence in your two-lens decision (Pack 5.4) — noticing is allowed; retaliating is not.",
        "id": "Menit ke-5: tetap di ruang rapat, periksa ulang tautan dan emailmu, siapa tahu ada pemberitahuan perubahan. Menit ke-10: satu pesan sopan ke koordinator — “Saya sudah berada di ruang rapat untuk jadwal pukul 2; saya tidak keberatan menunggu, dan sama-sama tidak keberatan dijadwalkan ulang kalau ada perubahan hari ini.” Lalu tunggu, terlihat tidak terganggu, sambil bersiap dalam diam. Kalau mereka datang di menit ke-25: tanpa celaan sedikit pun, keterlibatan penuh — “tidak masalah sama sekali” — karena caramu menyerap gangguan dari pihak mereka adalah data terkuat yang kamu hasilkan hari itu. Setelahnya, kalau hal ini terulang di sepanjang proses, pertimbangkan sebagai bukti budaya perusahaan dalam keputusan dua lensamu (Pack 5.4) — memperhatikan boleh; membalas tidak."
       }
      },
      {
       "h": {
        "en": "Scenario 2 — The wrong group chat",
        "id": "Skenario 2 — Salah grup chat"
       },
       "body": {
        "en": "You meant to send a friend “this briefing is so boring 😭” — it landed in the internship team group, next to your supervisor's last message. Decide your next 60 seconds, then reveal.",
        "id": "Kamu bermaksud mengirim ke teman “briefing ini membosankan banget 😭” — pesan itu malah masuk ke grup tim magang, tepat di bawah pesan terakhir supervisormu. Putuskan apa yang kamu lakukan dalam 60 detik berikutnya, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Delete if the platform allows, but assume it was seen. One brief public repair in the same channel: “Apologies — that was meant for a friend and was unprofessional of me. Back to the briefing notes.” No triple apology, no jokes, no explaining the joke. Then a one-line private message to the supervisor owning it the same way. Then — the actual repair — visibly engaged work the rest of the week. The error is survivable; the cover-up (“my account was borrowed”) or the spiral of apologies is what converts a slip into a character verdict.",
        "id": "Hapus kalau platformnya memungkinkan, tetapi anggap pesan itu sudah terbaca. Satu perbaikan singkat di ruang yang sama: “Mohon maaf — pesan itu untuk teman saya, dan itu tidak profesional. Kembali ke catatan briefing.” Tanpa minta maaf tiga kali, tanpa bercanda, tanpa menjelaskan candaannya. Lalu satu baris pesan pribadi ke supervisor yang mengakuinya dengan cara yang sama. Lalu — inilah perbaikan yang sesungguhnya — kerja yang terlihat sungguh-sungguh sepanjang sisa minggu itu. Kesalahannya masih bisa diselamatkan; yang mengubah keseleo menjadi vonis karakter adalah menutup-nutupinya (“akun saya dipinjam orang”) atau permintaan maaf yang berulang-ulang."
       }
      },
      {
       "h": {
        "en": "Scenario 3 — The public correction",
        "id": "Skenario 3 — Dikoreksi di depan umum"
       },
       "body": {
        "en": "On LinkedIn, a senior professional comments on your data-analysis post: “This is wrong, junior analysts shouldn't post about methods they don't understand.” Your analysis is, in fact, correct. Decide, then reveal.",
        "id": "Di LinkedIn, seorang profesional senior mengomentari unggahan analisis datamu: “Ini salah, analis junior sebaiknya tidak mengunggah metode yang tidak mereka pahami.” Analisismu sebenarnya benar. Putuskan, lalu buka tinjauan."
       },
       "debrief": {
        "en": "One reply, technical and temperature-zero: “Thank you for reading. The method follows [source/reasoning] — happy to be corrected on specifics if I've misapplied it.” Then stop; no second round regardless of their reply. Never delete a correct post under pressure, and never match the condescension — every future recruiter reading the thread sees a composed professional and a rude senior, which is the best outcome available. If they turn out right on a specific: thank them and amend visibly, which converts the incident into public evidence of exactly the coachability employers seek.",
        "id": "Satu balasan, teknis dan tanpa emosi sama sekali: “Terima kasih sudah membaca. Metodenya mengikuti [sumber/penalaran] — saya terbuka dikoreksi pada hal yang spesifik kalau memang saya salah menerapkannya.” Lalu berhenti; tidak ada ronde kedua, apa pun balasannya. Jangan pernah menghapus unggahan yang benar karena tekanan, dan jangan pernah membalas nada merendahkannya — setiap perekrut yang kelak membaca utas itu akan melihat seorang profesional yang tenang dan seorang senior yang kasar, dan itulah hasil terbaik yang tersedia. Kalau ternyata mereka benar pada satu hal spesifik: ucapkan terima kasih dan perbaiki secara terbuka, yang mengubah insiden itu menjadi bukti publik bahwa kamu mudah dibina — persis yang dicari perusahaan."
       }
      },
      {
       "h": {
        "en": "Scenario 4 — Credit, taken",
        "id": "Skenario 4 — Kredit yang diambil orang"
       },
       "body": {
        "en": "In the intern showcase, a fellow intern presents the dashboard you built — “we made this” becomes, in the retelling, “I made this”. Your supervisor was in the room. Decide, then reveal.",
        "id": "Di acara pameran hasil magang, sesama peserta magang mempresentasikan dasbor yang kamu bangun — “kami yang membuat ini” berubah, dalam penceritaan ulang, menjadi “saya yang membuat ini”. Supervisormu ada di ruangan itu. Putuskan, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Not in the room — public credit disputes damage the challenger regardless of merit. Two moves instead. Privately, to the intern, factual and unheated: “In the showcase the dashboard came across as your solo work — I built the data model and the visuals, so let's keep the credit accurate going forward.” Most people correct course when the observation is that calm. Structurally: make authorship legible before disputes exist — commit histories, named files, the Friday one-liners from Pack 5.2 (“shipped the dashboard v2”) — so your work carries its own record. If it recurs, one factual line to the supervisor with artefacts, framed as record-keeping, not grievance. Protecting your work and staying gracious are the same skill performed twice.",
        "id": "Jangan di ruangan itu — sengketa kredit di depan umum merugikan pihak yang menggugat, seberapa pun benarnya. Sebagai gantinya, dua langkah. Secara pribadi, kepada peserta magang itu, faktual dan tanpa emosi: “Di pameran tadi, dasbornya terkesan sebagai karyamu sendiri — padahal aku yang membangun model data dan visualnya, jadi ke depan mari kita jaga kreditnya tetap akurat.” Kebanyakan orang akan mengoreksi diri kalau teguran disampaikan setenang itu. Secara struktural: buat kepengarangan terbaca sebelum sengketa muncul — riwayat commit, berkas yang diberi nama, laporan satu baris tiap Jumat dari Pack 5.2 (“dasbor v2 selesai”) — sehingga hasil kerjamu membawa catatannya sendiri. Kalau terulang, satu kalimat faktual kepada supervisor disertai artefaknya, dibingkai sebagai pencatatan, bukan keluhan. Melindungi hasil kerjamu dan tetap anggun adalah satu keterampilan yang sama, dimainkan dua kali."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Across all four scenarios, what is the common thread of the professional response?",
        "id": "Di keempat skenario, apa benang merah dari respons profesionalnya?"
       },
       "options": [
        {
         "en": "Always escalate to the highest authority available",
         "id": "Selalu eskalasi ke atasan tertinggi yang ada"
        },
        {
         "en": "Brief, factual, temperature-zero moves that repair or protect without creating a second incident",
         "id": "Langkah yang singkat, faktual, dan tanpa emosi, yang memperbaiki atau melindungi tanpa menciptakan insiden kedua"
        },
        {
         "en": "Avoid all confrontation until the internship ends",
         "id": "Menghindari semua konfrontasi sampai magang berakhir"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Every debrief solved for the same two goals at once: the interest protected, the relationship and record intact. That both/and is the etiquette skill.",
        "id": "Setiap tinjauan menyelesaikan dua tujuan sekaligus: kepentingan terlindungi, hubungan dan rekam jejak tetap utuh. “Dua-duanya” itulah keterampilan etiketnya."
       }
      }
     ]
    },
    {
     "n": "9.4",
     "title": {
      "en": "What Comes Next — The Room",
      "id": "Setelah Ini — Ruang Wawancara"
     },
     "dur": {
      "en": "10 min",
      "id": "10 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The Pack ends where the interview begins. This closing lesson consolidates the system you have built — funnel, documents, tests, discussions, machines, AI, manners — and hands you to The Rope, where the human conversation decides everything the system earned you.",
      "id": "The Pack berakhir tepat di tempat wawancara dimulai. Pelajaran penutup ini merangkum sistem yang sudah kamu bangun — corong, dokumen, tes, diskusi, mesin, AI, tata krama — dan mengantarmu ke The Rope, tempat percakapan antarmanusia menentukan semua yang sudah diperjuangkan sistem itu untukmu."
     },
     "objectives": [
      {
       "en": "Audit your Pack system: what is built, what still leaks.",
       "id": "Mengaudit sistem Pack-mu: apa yang sudah terbangun, apa yang masih bocor."
      },
      {
       "en": "Read your pipeline metrics one more time and set the next training priority.",
       "id": "Membaca metrik pipeline-mu sekali lagi dan menetapkan prioritas latihan berikutnya."
      },
      {
       "en": "Preview The Rope: what changes when the funnel turns human.",
       "id": "Mengintip The Rope: apa yang berubah ketika corong menjadi urusan manusia."
      }
     ],
     "takeaways": [
      {
       "en": "You now run a system: targets, documents, drills, tracking — feedback loops where there was once hope.",
       "id": "Sekarang kamu menjalankan sebuah sistem: target, dokumen, latihan, pelacakan — putaran umpan balik di tempat yang dulu hanya diisi harapan."
      },
      {
       "en": "The funnel's remaining stages are conversations — prepared for, practised, and debriefed like everything else here.",
       "id": "Tahap-tahap corong yang tersisa adalah percakapan — yang dipersiapkan, dilatih, dan ditinjau seperti semua hal lain di sini."
      },
      {
       "en": "The room where they ask you questions is not a bigger gate; it is a different game — and it has its own training system.",
       "id": "Ruangan tempat mereka mengajukan pertanyaan bukan gerbang yang lebih besar; itu permainan yang berbeda — dan punya sistem latihannya sendiri."
      }
     ],
     "sections": [
      {
       "icon": "flag",
       "h": {
        "en": "The system audit",
        "id": "Audit sistem"
       },
       "body": {
        "en": "Walk the checklist honestly. <b>Module 1:</b> a tiered target list and a tracker with live data. <b>Module 2:</b> master CV, LinkedIn as a search result, letter skeleton. <b>Module 3:</b> a drill routine and error log, weakest family known. <b>Module 4:</b> the six behaviours and a peer practice loop. <b>Module 5:</b> calendar of windows, evidence pipeline, decision protocol. <b>Module 6:</b> parse-safe documents, master record, pre-flight habit. <b>Module 7:</b> case rhythm and six practice cases logged. <b>Module 8:</b> AI in the loop, ownership rule intact. <b>Module 9:</b> defaults installed. Anything unchecked is this week's work — the modules stay here, and the Screening Gym keeps every drill and record you have built.",
        "id": "Telusuri daftar periksanya dengan jujur. <b>Modul 1:</b> daftar target bertingkat dan pelacak dengan data yang hidup. <b>Modul 2:</b> CV induk, LinkedIn yang tampil sebagai hasil pencarian, kerangka surat lamaran. <b>Modul 3:</b> rutinitas latihan dan catatan kesalahan, keluarga tes terlemah sudah diketahui. <b>Modul 4:</b> enam perilaku dan putaran latihan bersama teman. <b>Modul 5:</b> kalender jendela waktu, pipeline bukti, protokol keputusan. <b>Modul 6:</b> dokumen yang aman diurai, catatan induk, kebiasaan pemeriksaan pra-kirim. <b>Modul 7:</b> ritme kasus dan enam kasus latihan yang tercatat. <b>Modul 8:</b> AI dalam alur kerja, aturan kepemilikan tetap utuh. <b>Modul 9:</b> setelan bawaan sudah terpasang. Apa pun yang belum tercentang adalah pekerjaan minggu ini — modulnya tetap ada di sini, dan Screening Gym menyimpan setiap latihan dan catatan yang sudah kamu bangun."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "What The Rope changes",
        "id": "Apa yang diubah The Rope"
       },
       "body": {
        "en": "Everything in The Pack optimised signals read by machines and strangers at speed. The interview inverts the physics: a human, in conversation, with time, probing not whether your keywords match but whether your stories are true, your thinking holds under follow-ups, and your presence belongs in their team. New rules apply — story architecture (STAR-L), competency decoding, format-specific performance across HR, technical, user and final rounds, live simulation with honest feedback, and eventually the offer itself. The Rope trains all of it the way The Pack trained the funnel: system, drills, debriefs, repetition. Your Pack artefacts travel with you — the CV seeds the stories, the JD analyses seed the answers, the tracker tells you which interviews are coming.",
        "id": "Semua isi The Pack mengoptimalkan sinyal yang dibaca cepat oleh mesin dan orang asing. Wawancara membalik hukumnya: seorang manusia, dalam percakapan, dengan waktu yang cukup, menggali bukan apakah kata kuncimu cocok, melainkan apakah ceritamu benar, apakah pemikiranmu bertahan ketika ditanya lebih dalam, dan apakah kehadiranmu cocok di tim mereka. Aturan baru berlaku — arsitektur cerita (STAR-L), membaca kompetensi yang dicari, penampilan yang sesuai format di ronde HR, teknis, user, dan final, simulasi langsung dengan umpan balik yang jujur, dan pada akhirnya tawaran kerja itu sendiri. The Rope melatih semua itu seperti The Pack melatih corong: sistem, latihan, tinjauan, pengulangan. Artefak-artefak dari Pack ikut bersamamu — CV menjadi benih cerita, analisis deskripsi lowongan menjadi benih jawaban, pelacak memberitahumu wawancara mana yang akan datang."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The handover",
        "id": "Serah terima"
       },
       "body": {
        "en": "Before you open the next room: update the tracker so your interview pipeline is visible; pick your two strongest CV bullets and write, for each, the fuller story behind it — you will need them within The Rope's first module; and book your drills for the week regardless, because screening stages keep arriving while you train for interviews. The climb continues on the same mountain. Different rope, same climber — better equipped than the one who started this course.",
        "id": "Sebelum membuka ruangan berikutnya: perbarui pelacakmu supaya pipeline wawancaramu terlihat; pilih dua butir CV terkuatmu dan tulis, untuk masing-masing, cerita yang lebih lengkap di baliknya — kamu akan membutuhkannya di modul pertama The Rope; dan jadwalkan latihan minggu ini apa pun yang terjadi, karena tahap-tahap seleksi terus berdatangan selagi kamu berlatih wawancara. Pendakian berlanjut di gunung yang sama. Tali yang berbeda, pendaki yang sama — dengan bekal yang lebih baik daripada saat memulai kursus ini."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "What fundamentally changes between The Pack's stages and The Rope's?",
        "id": "Apa yang berubah secara mendasar antara tahap-tahap The Pack dan tahap-tahap The Rope?"
       },
       "options": [
        {
         "en": "The stakes get higher but the skills are the same",
         "id": "Taruhannya lebih tinggi, tetapi keterampilannya sama"
        },
        {
         "en": "Evaluation shifts from fast signal-reading by machines and strangers to sustained human conversation probing truth, thinking and presence",
         "id": "Penilaiannya bergeser dari pembacaan sinyal secara cepat oleh mesin dan orang asing ke percakapan manusia yang berkelanjutan, yang menggali kebenaran, cara berpikir, dan kehadiranmu"
        },
        {
         "en": "Nothing — interviews are just verbal CVs",
         "id": "Tidak ada — wawancara hanyalah CV dalam bentuk lisan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The funnel read signals; the room reads you. Different physics, different training — which is why the trilogy hands over here.",
        "id": "Corong membaca sinyal; ruangan membaca dirimu. Hukum yang berbeda, latihan yang berbeda — itulah sebabnya trilogi ini berpindah tangan di sini."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/mentoring-session.jpg",
   "heroPos": "80% 40%"
  }
 ]
};
