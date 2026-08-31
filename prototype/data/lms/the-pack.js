/**
 * The Pack (Project Maverick) — LMS CONTENT REGISTRY
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
 "codename": "Project Maverick",
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
    "id": "Cara Rekrutmen Sebenarnya Bekerja"
   },
   "overview": {
    "en": "Module 1 of The Pack focuses on how hiring actually works. Work through the lessons in order — each builds on the last.",
    "id": "Modul 1 dari The Pack berfokus pada Cara Rekrutmen Sebenarnya Bekerja. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply how hiring actually works to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Cara Rekrutmen Sebenarnya Bekerja pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "1.1",
     "title": {
      "en": "The Hiring Gauntlet — Understanding the Elimination Process",
      "id": "Gauntlet Rekrutmen — Memahami Proses Eliminasi"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Hiring is not a talent contest; it is an elimination funnel designed to reduce thousands of applications to one signature at acceptable cost. Once you see the funnel from the employer's side, every stage of The Pack makes sense — and most common application advice stops making sense.",
      "id": "Rekrutmen bukan kontes bakat; ia corong eliminasi yang dirancang untuk memangkas ribuan lamaran menjadi satu tanda tangan dengan biaya wajar. Begitu kamu melihat corong dari sisi pemberi kerja, setiap tahap The Pack menjadi masuk akal — dan sebagian besar saran lamaran umum berhenti masuk akal."
     },
     "objectives": [
      {
       "en": "Describe the elimination funnel and the pass rates that shape each stage.",
       "id": "Menggambarkan corong eliminasi dan tingkat kelulusan yang membentuk tiap tahap."
      },
      {
       "en": "Explain what each stage is actually filtering for — and what it cannot see.",
       "id": "Menjelaskan apa yang sebenarnya disaring tiap tahap — dan apa yang tak bisa dilihatnya."
      },
      {
       "en": "Reposition your effort: optimise per-stage conversion, not application volume alone.",
       "id": "Memposisikan ulang usahamu: optimalkan konversi per tahap, bukan hanya volume lamaran."
      }
     ],
     "takeaways": [
      {
       "en": "Every stage exists to say no cheaply; your job is to make no difficult at each gate.",
       "id": "Setiap tahap ada untuk berkata tidak dengan murah; tugasmu membuat tidak menjadi sulit di tiap gerbang."
      },
      {
       "en": "Early stages filter on paper signals, not on you — a rejection there is a document problem, not a worth problem.",
       "id": "Tahap awal menyaring sinyal di atas kertas, bukan dirimu — penolakan di sana adalah masalah dokumen, bukan masalah harga diri."
      },
      {
       "en": "Funnel math beats motivation: small conversion gains at early stages multiply through everything after.",
       "id": "Matematika corong mengalahkan motivasi: kenaikan konversi kecil di tahap awal berlipat melalui semua tahap setelahnya."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "The employer's problem",
        "id": "Masalah pemberi kerja"
       },
       "body": {
        "en": "A popular graduate programme receives thousands of applications for dozens of seats. Reading every application deeply is impossible, so employers build a machine that discards cheaply at the top — software and six-second scans — and spends expensively only at the bottom, where interviews cost senior staff hours. Nothing personal operates in the first three gates. The candidates who survive are not always the best; they are the ones whose paper signals fit the machine. That is unfair, and it is also the game board. The Pack trains you gate by gate.",
        "id": "Program lulusan populer menerima ribuan lamaran untuk puluhan kursi. Membaca tiap lamaran secara mendalam mustahil, maka pemberi kerja membangun mesin yang membuang dengan murah di atas — perangkat lunak dan pindaian enam detik — dan menghabiskan mahal hanya di bawah, tempat wawancara memakan jam staf senior. Tak ada yang personal di tiga gerbang pertama. Kandidat yang lolos tak selalu yang terbaik; mereka yang sinyal kertasnya cocok dengan mesin. Itu tidak adil, dan itu juga papan permainannya. The Pack melatihmu gerbang demi gerbang."
       },
       "img": "../../assets/bg/gauntlet/gate-01-submission.jpg",
       "imgPos": "center 40%"
      },
      {
       "icon": "gear",
       "h": {
        "en": "What each gate filters",
        "id": "Yang disaring tiap gerbang"
       },
       "body": {
        "en": "<b>ATS / administrative screen:</b> keyword and requirement match — filters documents, not people. <b>Recruiter scan:</b> six to thirty seconds — filters clarity and evidence density. <b>Psychometric tests:</b> speed and accuracy under time — filter trainable test craft as much as raw aptitude. <b>Group discussion:</b> observable collaboration behaviours. <b>Interviews:</b> structured evidence of competencies (The Rope's territory). <b>Offer:</b> mutual risk assessment. Notice what no gate measures directly: your potential, your character, your story as you understand it. Gates read signals; The Pack is signal engineering.",
        "id": "<b>ATS / saringan administratif:</b> kecocokan kata kunci dan persyaratan — menyaring dokumen, bukan orang. <b>Pindaian perekrut:</b> enam hingga tiga puluh detik — menyaring kejelasan dan kepadatan bukti. <b>Tes psikometri:</b> kecepatan dan akurasi dalam waktu — menyaring keterampilan tes yang bisa dilatih sebanyak bakat mentah. <b>Diskusi kelompok:</b> perilaku kolaborasi yang teramati. <b>Wawancara:</b> bukti kompetensi terstruktur (wilayah The Rope). <b>Tawaran:</b> penilaian risiko timbal balik. Perhatikan yang tak diukur langsung gerbang mana pun: potensimu, karaktermu, kisahmu sebagaimana kamu memahaminya. Gerbang membaca sinyal; The Pack adalah rekayasa sinyal."
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
        "id": "Dua kandidat masing-masing mengirim 60 lamaran. A memperlakukannya sebagai lotre: CV sama di mana-mana, tanpa pelacakan, usaha diukur volume. B memperlakukannya sebagai corong: melacak di mana tiap lamaran mati, dan memperbaiki tahap yang bocor — CV ditulis ulang saat lamaran mati di penyaringan, latihan tes saat mati di asesmen, latihan FGD saat mati di tahap kelompok. Setelah tiga bulan, A mengirim lebih banyak lamaran; B punya wawancara. Bedanya adalah putaran umpan balik, dan membangun milikmu adalah tugas modul ini. Pelacak di Gym Penyaringan ada persis untuk ini."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: The elimination funnel — cheap filters first, expensive judgment last.",
       "id": "Peraga 1: Corong eliminasi — penyaring murah dulu, penilaian mahal terakhir."
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
         "id": "Hitungan detik per CV — kejelasan menang"
        }
       },
       {
        "h": {
         "en": "Tests & FGD",
         "id": "Tes & FGD"
        },
        "sub": {
         "en": "Timed aptitude · observed collaboration",
         "id": "Bakat berwaktu · kolaborasi teramati"
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
         "id": "Penilaian risiko timbal balik"
        }
       }
      ],
      "longdesc": {
       "en": "A five-stage funnel: automated ATS screening of documents against requirements; a seconds-long recruiter scan rewarding clarity; timed tests and observed group discussions; structured interviews; finally the offer stage as mutual risk assessment. Volume shrinks and evaluation cost per candidate grows at every stage.",
       "id": "Corong lima tahap: penyaringan ATS otomatis atas dokumen terhadap persyaratan; pindaian perekrut hitungan detik yang mengganjar kejelasan; tes berwaktu dan diskusi kelompok teramati; wawancara terstruktur; akhirnya tahap tawaran sebagai penilaian risiko timbal balik. Volume menyusut dan biaya evaluasi per kandidat naik di tiap tahap."
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
        "id": "Applicant Tracking System — perangkat lunak yang menyimpan, menyaring, dan memeringkat lamaran sebelum dibaca manusia."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Your last 20 applications all died before any test or interview invitation. What does funnel thinking prescribe?",
        "id": "20 lamaran terakhirmu semua mati sebelum undangan tes atau wawancara. Apa resep pemikiran corong?"
       },
       "options": [
        {
         "en": "Send 40 more applications with the same materials",
         "id": "Kirim 40 lamaran lagi dengan materi sama"
        },
        {
         "en": "Fix the screening stage: rebuild the CV against each JD and verify ATS-readability before sending more",
         "id": "Perbaiki tahap penyaringan: bangun ulang CV terhadap tiap JD dan pastikan terbaca ATS sebelum mengirim lagi"
        },
        {
         "en": "Skip online applications entirely and only network",
         "id": "Tinggalkan lamaran daring sepenuhnya dan hanya membangun jaringan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Deaths concentrated at one stage locate the leak. Volume through a broken gate multiplies rejections, not offers.",
        "id": "Kematian yang terkonsentrasi di satu tahap menunjukkan letak kebocoran. Volume melalui gerbang rusak menggandakan penolakan, bukan tawaran."
       }
      }
     ],
     "tool": {
      "id": "gym",
      "mode": "tracker",
      "title": {
       "en": "Start your pipeline",
       "id": "Mulai pipeline-mu"
      },
      "body": {
       "en": "The application tracker turns your search into a funnel you can read: every application, its stage, and where it died — the feedback loop this lesson demands.",
       "id": "Pelacak lamaran mengubah pencarianmu menjadi corong yang bisa dibaca: tiap lamaran, tahapnya, dan di mana ia mati — putaran umpan balik yang dituntut pelajaran ini."
      },
      "cta": {
       "en": "Open the tracker →",
       "id": "Buka pelacak →"
      }
     },
     "quote": {
      "en": "Every stage exists to say no cheaply. Your job is to make no difficult.",
      "id": "Setiap tahap ada untuk berkata tidak dengan murah. Tugasmu membuat tidak menjadi sulit."
     }
    },
    {
     "n": "1.2",
     "title": {
      "en": "The End-to-End Recruitment Journey — All 13 Stages",
      "id": "Perjalanan Rekrutmen dari Awal hingga Akhir — 13 Tahap"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "From a vacancy's birth to your first day, a typical corporate recruitment runs through thirteen stages — several of them invisible to candidates. Knowing the whole railway explains the silences, the sudden urgency, and where your leverage actually lives.",
      "id": "Dari lahirnya lowongan sampai hari pertamamu, rekrutmen korporat tipikal berjalan melalui tiga belas tahap — beberapa tak terlihat oleh kandidat. Mengetahui seluruh rel kereta menjelaskan keheningan, urgensi mendadak, dan di mana daya ungkitmu sebenarnya berada."
     },
     "objectives": [
      {
       "en": "Trace all 13 stages, including the invisible pre-posting and post-offer ones.",
       "id": "Menelusuri semua 13 tahap, termasuk yang tak terlihat sebelum tayang dan setelah tawaran."
      },
      {
       "en": "Explain the silences: what is happening when you hear nothing for weeks.",
       "id": "Menjelaskan keheningan: apa yang terjadi saat kamu tak mendengar kabar berminggu-minggu."
      },
      {
       "en": "Identify the three moments where a candidate has real leverage.",
       "id": "Mengenali tiga momen saat kandidat punya daya ungkit nyata."
      }
     ],
     "takeaways": [
      {
       "en": "Half the process happens before the job is posted and after the offer is drafted — where candidates never look.",
       "id": "Separuh proses terjadi sebelum lowongan tayang dan setelah tawaran disusun — tempat kandidat tak pernah melihat."
      },
      {
       "en": "Silence usually means internal queueing — approvals, calibration, other candidates — not rejection.",
       "id": "Keheningan biasanya berarti antrean internal — persetujuan, kalibrasi, kandidat lain — bukan penolakan."
      },
      {
       "en": "Your leverage peaks three times: before applying (referrals), after final interviews (comparison set), and at offer (negotiation).",
       "id": "Daya ungkitmu memuncak tiga kali: sebelum melamar (referal), setelah wawancara akhir (set pembanding), dan saat tawaran (negosiasi)."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "The thirteen stages",
        "id": "Tiga belas tahap"
       },
       "body": {
        "en": "<b>1</b> Headcount need identified → <b>2</b> budget approval → <b>3</b> job description drafted (often copied from the last hire) → <b>4</b> posting + sourcing (referrals start here, before you ever see the ad) → <b>5</b> ATS screening → <b>6</b> recruiter shortlist → <b>7</b> hiring-manager review → <b>8</b> assessments (tests, FGD) → <b>9</b> interview rounds → <b>10</b> internal calibration (candidates compared, notes reconciled) → <b>11</b> reference and background checks → <b>12</b> offer construction and approval → <b>13</b> negotiation, signature, onboarding. Candidates see stages 4–9 and 13; the machine spends most of its calendar time in the ones you cannot see.",
        "id": "<b>1</b> Kebutuhan orang teridentifikasi → <b>2</b> persetujuan anggaran → <b>3</b> deskripsi kerja disusun (sering disalin dari rekrutan sebelumnya) → <b>4</b> penayangan + sourcing (referal mulai di sini, sebelum kamu melihat iklannya) → <b>5</b> penyaringan ATS → <b>6</b> daftar pendek perekrut → <b>7</b> tinjauan manajer perekrut → <b>8</b> asesmen (tes, FGD) → <b>9</b> putaran wawancara → <b>10</b> kalibrasi internal (kandidat dibandingkan, catatan direkonsiliasi) → <b>11</b> pemeriksaan referensi dan latar belakang → <b>12</b> penyusunan dan persetujuan tawaran → <b>13</b> negosiasi, tanda tangan, onboarding. Kandidat melihat tahap 4–9 dan 13; mesin menghabiskan sebagian besar waktu kalendernya di tahap yang tak bisa kamu lihat."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Decoding the silences",
        "id": "Membaca keheningan"
       },
       "body": {
        "en": "Week-long silences almost always map to invisible stages: the manager is travelling, calibration waits for the last candidate's final round, the offer needs a compensation-committee signature. Two practical rules follow. First, ask about process at every touchpoint — “what are the remaining steps and rough timeline?” is a professional question that recruiters answer readily, and it converts silence into schedule. Second, keep your funnel full until a contract is signed: a verbal “we love you” at stage 10 dies quietly more often than anyone admits, usually for budget reasons that had nothing to do with you.",
        "id": "Keheningan berminggu-minggu hampir selalu terpeta ke tahap tak terlihat: manajer sedang bepergian, kalibrasi menunggu ronde akhir kandidat terakhir, tawaran butuh tanda tangan komite kompensasi. Dua aturan praktis mengikuti. Pertama, tanyakan proses di tiap titik kontak — “apa langkah tersisa dan perkiraan waktunya?” adalah pertanyaan profesional yang mudah dijawab perekrut, dan mengubah keheningan menjadi jadwal. Kedua, jaga corongmu tetap penuh sampai kontrak ditandatangani: “kami suka kamu” lisan di tahap 10 mati diam-diam lebih sering dari yang diakui siapa pun, biasanya karena alasan anggaran yang tak ada hubungannya denganmu."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The three leverage points",
        "id": "Tiga titik daya ungkit"
       },
       "body": {
        "en": "<b>Before applying:</b> a referral enters you at stage 4 with a trusted-source tag that survives the ATS — the single highest-return move in job search, and why The Pack keeps teaching honest networking. <b>After final interviews:</b> if you hold parallel processes, a polite “I have another process concluding next week” accelerates decisions and improves offers — but only when true. <b>At offer:</b> stage 12 built a range, not a number; stage 13 is where The Rope's negotiation module cashes in. Between these points, patience plus process questions; leverage spent at the wrong moment reads as pressure.",
        "id": "<b>Sebelum melamar:</b> referal memasukkanmu di tahap 4 dengan label sumber-tepercaya yang lolos ATS — langkah dengan imbal hasil tertinggi dalam pencarian kerja, dan alasan The Pack terus mengajarkan networking yang jujur. <b>Setelah wawancara akhir:</b> jika kamu memegang proses paralel, “saya punya proses lain yang selesai minggu depan” yang sopan mempercepat keputusan dan memperbaiki tawaran — tapi hanya bila benar. <b>Saat tawaran:</b> tahap 12 menyusun rentang, bukan angka; tahap 13 adalah tempat modul negosiasi The Rope dipanen. Di antara titik-titik ini, kesabaran plus pertanyaan proses; daya ungkit yang dipakai di momen salah terbaca sebagai tekanan."
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
       "id": "Rel kereta rekrutmen"
      },
      "items": [
       {
        "h": {
         "en": "Stages 1–3 · invisible",
         "id": "Tahap 1–3 · tak terlihat"
        },
        "sub": {
         "en": "Need, budget, JD drafting",
         "id": "Kebutuhan, anggaran, penyusunan JD"
        }
       },
       {
        "h": {
         "en": "Stages 4–9 · visible",
         "id": "Tahap 4–9 · terlihat"
        },
        "sub": {
         "en": "Posting, screens, tests, interviews",
         "id": "Penayangan, saringan, tes, wawancara"
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
       "id": "Garis waktu tiga belas tahap rekrutmen dalam empat pita: tahap satu sampai tiga kerja pra-tayang tak terlihat — identifikasi kebutuhan, anggaran, deskripsi kerja; tahap empat sampai sembilan pita terlihat — penayangan, penyaringan, tes, wawancara; tahap sepuluh sampai dua belas tak terlihat lagi — kalibrasi, pemeriksaan latar, penyusunan tawaran; tahap tiga belas kembali terlihat — negosiasi dan tanda tangan."
      }
     },
     "checks": [
      {
       "q": {
        "en": "Two weeks of silence after your final interview. The most likely explanation, per this lesson?",
        "id": "Dua minggu hening setelah wawancara akhirmu. Penjelasan paling mungkin, menurut pelajaran ini?"
       },
       "options": [
        {
         "en": "You were rejected and they will never tell you",
         "id": "Kamu ditolak dan mereka tak akan pernah memberitahu"
        },
        {
         "en": "The process is in an invisible stage — calibration, approvals, or waiting on other candidates",
         "id": "Proses ada di tahap tak terlihat — kalibrasi, persetujuan, atau menunggu kandidat lain"
        },
        {
         "en": "The company forgot you exist",
         "id": "Perusahaan lupa kamu ada"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Stages 10–12 consume weeks by design. A polite process question converts the silence into a timeline; meanwhile the funnel stays full.",
        "id": "Tahap 10–12 memakan berminggu-minggu memang dari desainnya. Pertanyaan proses yang sopan mengubah keheningan menjadi lini waktu; sementara itu corong tetap penuh."
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
      "id": "Pencarian kerja yang dijalankan dari ingatan dan tab peramban membocorkan peluang diam-diam. Pelajaran ini membangun sistem pencarianmu — daftar target, irama mingguan, pelacak pipeline, dan metrik yang memberitahu apa yang harus diperbaiki — lalu melatihnya pada satu minggu realistis."
     },
     "objectives": [
      {
       "en": "Build a tiered target list: reach, match, and foundation companies.",
       "id": "Membangun daftar target bertingkat: perusahaan jangkauan, sepadan, dan fondasi."
      },
      {
       "en": "Design a weekly cadence that balances new applications, follow-ups and skill drills.",
       "id": "Merancang irama mingguan yang menyeimbangkan lamaran baru, tindak lanjut, dan latihan keterampilan."
      },
      {
       "en": "Read pipeline metrics to locate your leaking stage.",
       "id": "Membaca metrik pipeline untuk menemukan tahap yang bocor."
      }
     ],
     "takeaways": [
      {
       "en": "Quality of system beats quantity of applications: ten targeted, tracked applications outperform fifty sprayed ones.",
       "id": "Kualitas sistem mengalahkan kuantitas lamaran: sepuluh lamaran terarah dan terlacak mengungguli lima puluh yang disebar."
      },
      {
       "en": "The pipeline tracker is your funnel X-ray — it shows which Pack module to train next.",
       "id": "Pelacak pipeline adalah rontgen corongmu — ia menunjukkan modul Pack mana yang dilatih berikutnya."
      },
      {
       "en": "A weekly review ritual keeps the search a project, not a mood.",
       "id": "Ritual tinjauan mingguan menjaga pencarian tetap proyek, bukan suasana hati."
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
        "id": "Daftar 20–30 perusahaan dalam tiga tingkat. <b>Jangkauan</b> (5–8): pemberi kerja impian dengan persaingan tersengit — lamar dengan materi terbaikmu dan, bila mungkin, referal. <b>Sepadan</b> (10–15): kecocokan solid untuk profilmu hari ini — inti pipeline-mu. <b>Fondasi</b> (5–8): sangat mungkin meloloskanmu — menjaga wawancara mengalir, keterampilan hangat, dan kepercayaan diri jujur. Basis data perusahaan The Range mengisi daftar ini dengan data nyata. Aturan yang membuat tingkat bekerja: tiap tingkat mendapat lamaran tiap bulan, karena latihan wawancara di tingkat fondasi adalah yang mengonversi peluang tingkat jangkauan."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "The weekly cadence",
        "id": "Irama mingguan"
       },
       "body": {
        "en": "A sustainable search week for a student or fresh graduate: <b>3–5 tailored applications</b> (tailored means the CV visibly answers that JD — Module 2's craft); <b>every follow-up due</b> (7–10 days after silence, once, politely); <b>two drill blocks</b> (aptitude tests or FGD practice per your leaking stage); <b>one networking touch</b> (a coffee chat, an alumni message — Module 5); and a <b>20-minute Friday review</b>: update the tracker, read the metrics, choose next week's fixes. Total: 8–10 focused hours. More than that burns out by week six; the search is a marathon paced like one.",
        "id": "Minggu pencarian berkelanjutan untuk mahasiswa atau lulusan baru: <b>3–5 lamaran disesuaikan</b> (disesuaikan berarti CV terlihat menjawab JD itu — keterampilan Modul 2); <b>semua tindak lanjut jatuh tempo</b> (7–10 hari setelah hening, sekali, sopan); <b>dua blok latihan</b> (tes bakat atau latihan FGD sesuai tahap bocormu); <b>satu sentuhan jaringan</b> (obrolan kopi, pesan alumni — Modul 5); dan <b>tinjauan Jumat 20 menit</b>: perbarui pelacak, baca metrik, pilih perbaikan minggu depan. Total: 8–10 jam fokus. Lebih dari itu kehabisan napas di minggu keenam; pencarian adalah maraton yang dipacu seperti maraton."
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
        "id": "Tiga rasio mendiagnosis semuanya. <b>Tingkat lolos saringan</b> — undangan ÷ lamaran: di bawah ~15% pada perusahaan tingkat sepadan berarti dokumen atau penargetanmu bocor (Modul 2 dan 6). <b>Tingkat lulus asesmen</b> — lulus ÷ percobaan: kegagalan berulang berarti berlatihlah lebih dulu sebelum melamar lebih banyak (Modul 3). <b>Konversi wawancara</b> — tawaran atau ronde lanjut ÷ wawancara: angka rendah mengarahkanmu ke The Rope. Pelacak menghitung ini dari datamu sendiri. Satu catatan jujur yang juga akan ditunjukkan alat: dengan angka kecil, rasio bergoyang — baca tren setelah sepuluh lamaran, bukan setelah dua."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill — Triage the week",
        "id": "Latihan — Triase minggu itu"
       },
       "body": {
        "en": "It is Sunday evening. Open items: 2 new match-tier JDs closing Friday; a reach-tier posting closing tomorrow that would need a full CV rework; a follow-up due to Company K (silent 9 days); a numerical test Thursday for Company M; and a friend offering to introduce you to an alum at a reach company. You have 9 hours this week. Allocate, then reveal.",
        "id": "Minggu malam. Item terbuka: 2 JD tingkat sepadan baru tutup Jumat; lowongan tingkat jangkauan tutup besok yang butuh perombakan CV penuh; tindak lanjut jatuh tempo ke Perusahaan K (hening 9 hari); tes numerik Kamis untuk Perusahaan M; dan teman menawarkan mengenalkanmu ke alumni di perusahaan jangkauan. Kamu punya 9 jam minggu ini. Alokasikan, lalu buka."
       },
       "debrief": {
        "en": "Model allocation: the Thursday test gets 3 hours of drills — a booked assessment is the scarcest asset in the pipeline. The introduction gets a same-day yes and 30 minutes of homework — referrals outrank everything at reach tier. The two match JDs get 2 hours each of tailored applications. The follow-up takes 10 minutes Monday. The overnight reach posting gets dropped — a rushed CV into the fiercest competition converts near zero; note the company for its next cycle. The pattern: protect booked assessments, seize referrals, decline volume that would be sent broken.",
        "id": "Alokasi model: tes Kamis mendapat 3 jam latihan — asesmen yang sudah terjadwal adalah aset terlangka di pipeline. Perkenalan mendapat ya di hari yang sama dan 30 menit PR — referal mengungguli segalanya di tingkat jangkauan. Dua JD sepadan mendapat masing-masing 2 jam lamaran tersesuaikan. Tindak lanjut 10 menit Senin. Lowongan jangkauan yang tutup besok dilepas — CV tergesa ke persaingan tersengit konversinya nyaris nol; catat perusahaannya untuk siklus berikutnya. Polanya: lindungi asesmen terjadwal, sambar referal, tolak volume yang akan terkirim rusak."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Measuring effort in applications sent",
         "id": "Mengukur usaha dari lamaran terkirim"
        },
        "fix": {
         "en": "Measure stage conversions. Fifty applications with a broken CV is fifty rehearsals of rejection.",
         "id": "Ukur konversi antartahap. Lima puluh lamaran dengan CV rusak adalah lima puluh latihan penolakan."
        }
       },
       {
        "h": {
         "en": "Following up daily — or never",
         "id": "Menindaklanjuti tiap hari — atau tak pernah"
        },
        "fix": {
         "en": "Once, 7–10 days after silence, referencing the role and one line of continued interest. Then let it rest.",
         "id": "Sekali, 7–10 hari setelah hening, menyebut peran dan satu baris minat berlanjut. Lalu biarkan."
        }
       },
       {
        "h": {
         "en": "Pausing the search after one promising interview",
         "id": "Menjeda pencarian setelah satu wawancara menjanjikan"
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
        "id": "Tingkat lolos saringanmu pada lamaran sepadan 5%; tingkat asesmen dan wawancara tampak baik. Modul mana yang melatih perbaikannya?"
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
        "id": "Kematian di tahap penyaringan adalah masalah dokumen dan penargetan: keterampilan CV (Modul 2) dan mekanika ATS (Modul 6)."
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
       "id": "Masukkan lamaran berjalanmu ke pelacak dan biarkan ia menghitung konversi antartahapmu — rontgen corong jujur pertamamu."
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
    "id": "Strategi Pengajuan Lamaran — Pengembangan LinkedIn, CV, Resume &amp; Surat Lamaran"
   },
   "overview": {
    "en": "Module 2 of The Pack focuses on application submission strategy — linkedin, cv, resume &amp; cover letter development. Work through the lessons in order — each builds on the last.",
    "id": "Modul 2 dari The Pack berfokus pada Strategi Pengajuan Lamaran — Pengembangan LinkedIn, CV, Resume &amp; Surat Lamaran. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply application submission strategy — linkedin, cv, resume &amp; cover letter development to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Strategi Pengajuan Lamaran — Pengembangan LinkedIn, CV, Resume &amp; Surat Lamaran pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
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
      "id": "Sebelum templat dan taktik, aturan emas: prinsip yang menentukan apakah dokumen lamaran apa pun bekerja, di kanal apa pun, untuk peran apa pun. Langgar ini dan tak ada trik format yang menyelamatkanmu; patuhi dan dokumen polos pun bersaing."
     },
     "objectives": [
      {
       "en": "Apply the evidence rule: every claim carries a number, artefact or verifiable specific.",
       "id": "Menerapkan aturan bukti: tiap klaim membawa angka, artefak, atau hal spesifik yang bisa diverifikasi."
      },
      {
       "en": "Apply the relevance rule: the document answers this JD, not your biography.",
       "id": "Menerapkan aturan relevansi: dokumen menjawab JD ini, bukan biografimu."
      },
      {
       "en": "Apply the honesty rule and know exactly where embellishment becomes disqualification.",
       "id": "Menerapkan aturan kejujuran dan tahu persis di mana bumbu menjadi diskualifikasi."
      }
     ],
     "takeaways": [
      {
       "en": "Recruiters buy evidence, not adjectives: “cut onboarding time 40%” beats “hard-working team player” every time.",
       "id": "Perekrut membeli bukti, bukan kata sifat: “memangkas waktu onboarding 40%” selalu mengalahkan “pekerja keras yang kooperatif”."
      },
      {
       "en": "Relevance is the reader's first filter: the six-second scan looks for their keywords, their problems, their language.",
       "id": "Relevansi adalah penyaring pertama pembaca: pindaian enam detik mencari kata kunci mereka, masalah mereka, bahasa mereka."
      },
      {
       "en": "Lies are found at reference checks and probation; framing honestly is a skill, inventing is a time bomb.",
       "id": "Kebohongan ketahuan saat pemeriksaan referensi dan probasi; membingkai dengan jujur adalah keterampilan, mengarang adalah bom waktu."
      }
     ],
     "sections": [
      {
       "icon": "flag",
       "h": {
        "en": "Rule 1 — Evidence over adjectives",
        "id": "Aturan 1 — Bukti di atas kata sifat"
       },
       "body": {
        "en": "Self-descriptions (“motivated”, “detail-oriented”, “excellent communicator”) are free to write and therefore worthless to read — every CV contains them. Evidence is scarce and therefore valuable: numbers (“managed a Rp 45m event budget”), artefacts (“built the dashboard now used by 3 faculties”), verdicts by others (“selected as 1 of 5 from 120 applicants”). The rewrite discipline: for every line, ask <i>could a stranger check this?</i> If not, replace it with something they could. A CV with eight verifiable lines beats a CV with twenty decorative ones.",
        "id": "Deskripsi diri (“termotivasi”, “teliti”, “komunikator ulung”) gratis ditulis dan karenanya tak bernilai dibaca — semua CV memuatnya. Bukti itu langka dan karenanya berharga: angka (“mengelola anggaran acara Rp 45 jt”), artefak (“membangun dasbor yang kini dipakai 3 fakultas”), penilaian pihak lain (“terpilih 1 dari 5 di antara 120 pelamar”). Disiplin penulisan ulang: untuk tiap baris, tanyakan <i>bisakah orang asing memeriksanya?</i> Jika tidak, ganti dengan yang bisa. CV dengan delapan baris terverifikasi mengalahkan CV dengan dua puluh baris dekoratif."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Rule 2 — Relevance over completeness",
        "id": "Aturan 2 — Relevansi di atas kelengkapan"
       },
       "body": {
        "en": "Your CV is not your archive; it is an argument that you fit <i>this</i> role. The JD tells you the argument's required points: its top requirements are your top bullets, its vocabulary is your vocabulary (they say “stakeholder management”, you do not say “handling people”), its problems are what your evidence should echo. Practical consequence: a master CV holding everything, from which each application cuts a tailored version — dropping honours that do not serve this argument hurts for a minute and works for years. Module 6 adds the machine layer to this same rule.",
        "id": "CV-mu bukan arsipmu; ia argumen bahwa kamu cocok untuk peran <i>ini</i>. JD memberitahumu poin wajib argumen itu: persyaratan teratasnya adalah butir teratasmu, kosakatanya adalah kosakatamu (mereka bilang “stakeholder management”, kamu tidak bilang “mengurus orang”), masalahnya adalah yang harus digemakan buktimu. Konsekuensi praktis: CV induk memuat semuanya, dan tiap lamaran memotong versi tersesuaikan darinya — melepas prestasi yang tak melayani argumen ini sakit semenit dan bekerja bertahun-tahun. Modul 6 menambahkan lapisan mesin pada aturan yang sama."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Rule 3 — Honest framing, never invention",
        "id": "Aturan 3 — Pembingkaian jujur, jangan pernah mengarang"
       },
       "body": {
        "en": "The line is bright: <b>framing</b> chooses which true things to emphasise — leading with your thesis project because it matches the role is craft. <b>Invention</b> states false things — a title you never held, a tool you never used, a grade you did not earn. Invention is found: reference checks call employers, technical interviews probe claimed tools in minutes, and probation reveals everything else. The cost is not just one offer — industries talk. Where your history is genuinely thin, the honest play is the difficult-case reframes taught in The Rope: name the gap, show the growth, bring the evidence you do have.",
        "id": "Garisnya terang: <b>pembingkaian</b> memilih hal-hal benar mana yang ditonjolkan — memimpin dengan proyek skripsimu karena cocok dengan peran adalah keterampilan. <b>Mengarang</b> menyatakan hal palsu — jabatan yang tak pernah kamu pegang, alat yang tak pernah kamu pakai, nilai yang tak kamu peroleh. Karangan akan ketahuan: pemeriksaan referensi menelepon pemberi kerja, wawancara teknis menguji alat yang diklaim dalam hitungan menit, dan probasi membongkar sisanya. Biayanya bukan hanya satu tawaran — industri saling bicara. Saat riwayatmu memang tipis, langkah jujurnya adalah pembingkaian ulang kasus sulit yang diajarkan The Rope: namai celahnya, tunjukkan pertumbuhannya, bawa bukti yang kamu punya."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "One CV line — decorative vs evidential",
        "id": "Satu baris CV — dekoratif vs berbukti"
       },
       "q": {
        "en": "Describing the same organisational role",
        "id": "Menggambarkan peran organisasi yang sama"
       },
       "weak": {
        "en": "“Responsible for sponsorships as Head of Partnerships. Hard-working, communicative, and experienced in negotiation with excellent leadership skills.”",
        "id": "“Bertanggung jawab atas sponsor sebagai Kepala Kemitraan. Pekerja keras, komunikatif, dan berpengalaman bernegosiasi dengan kepemimpinan unggul.”"
       },
       "strong": {
        "en": "“Head of Partnerships (team of 6): raised Rp 85m from 11 sponsors for a 3,000-attendee festival — 40% above target; renewed 8 of 11 sponsors for the following year.”",
        "id": "“Kepala Kemitraan (tim 6 orang): menghimpun Rp 85 jt dari 11 sponsor untuk festival 3.000 peserta — 40% di atas target; memperpanjang 8 dari 11 sponsor untuk tahun berikutnya.”"
       },
       "why": {
        "en": "Scale, numbers, and a repeat-business verdict a stranger could verify — the strong line survives the six-second scan and seeds three interview stories.",
        "id": "Skala, angka, dan bukti kepercayaan berulang yang bisa diverifikasi orang asing — baris kuat lolos pindaian enam detik dan menanam tiga kisah wawancara."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Which change turns “Skilled in data analysis” into an application-grade line?",
        "id": "Perubahan mana yang mengubah “Terampil analisis data” menjadi baris layak lamaran?"
       },
       "options": [
        {
         "en": "“Highly skilled in advanced data analysis”",
         "id": "“Sangat terampil dalam analisis data tingkat lanjut”"
        },
        {
         "en": "“Analysed 3 years of sales data (12k rows) for a family business; findings shifted stock budget 20% toward the two highest-margin lines”",
         "id": "“Menganalisis 3 tahun data penjualan (12 rb baris) bisnis keluarga; temuannya menggeser anggaran stok 20% ke dua lini margin tertinggi”"
        },
        {
         "en": "“Passionate about leveraging data-driven insights”",
         "id": "“Bersemangat memanfaatkan wawasan berbasis data”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "It adds scale, a real context and a consequence someone could check — evidence, not adjectives.",
        "id": "Ia menambah skala, konteks nyata, dan konsekuensi yang bisa diperiksa — bukti, bukan kata sifat."
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
      "id": "LinkedIn bukan CV daring; ia hasil pencarian. Perekrut menelusurinya seperti basis data, dan profil ditemukan — atau tidak — oleh bidang yang sama setiap kali. Pelajaran ini mengoptimalkan tiap bidang sesuai urutan perekrut benar-benar membacanya."
     },
     "objectives": [
      {
       "en": "Write a headline that answers a recruiter's query, not a motto.",
       "id": "Menulis headline yang menjawab kueri perekrut, bukan moto."
      },
      {
       "en": "Build an About section with the pyramid: who, evidence, direction, ask.",
       "id": "Menyusun bagian About dengan piramida: siapa, bukti, arah, ajakan."
      },
      {
       "en": "Turn experience entries into the same evidence lines your CV carries — plus media artefacts.",
       "id": "Mengubah entri pengalaman menjadi baris bukti yang sama dengan CV-mu — plus artefak media."
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
       "id": "Profil dengan artefak — proyek, dokumen, tautan — mengubah penonton menjadi penelepon."
      }
     ],
     "sections": [
      {
       "icon": "target",
       "h": {
        "en": "Headline and photo — the search result",
        "id": "Headline dan foto — hasil pencarian"
       },
       "body": {
        "en": "Recruiters search titles, skills and fields; your headline is matched against those queries. Formula for students and fresh graduates: <b>target role or field + strongest evidence tag + availability</b> — “Data Analyst (fresh graduate) · Finalist, National Statistics Olympiad · Open to work, Jakarta/remote”. Not “Dreamer | Learner | Future CEO”: nobody searches those words. The photo needs three properties only — recent, clear face, neutral background; the banner is free space for one line of proof (a dashboard screenshot, an event you ran). Fifteen minutes of work, permanent search visibility gain.",
        "id": "Perekrut mencari jabatan, keterampilan, dan bidang; headline-mu dicocokkan dengan kueri itu. Formula untuk mahasiswa dan lulusan baru: <b>peran atau bidang target + label bukti terkuat + ketersediaan</b> — “Data Analyst (lulusan baru) · Finalis Olimpiade Statistika Nasional · Open to work, Jakarta/remote”. Bukan “Dreamer | Learner | Future CEO”: tak ada yang mencari kata-kata itu. Foto hanya butuh tiga sifat — terkini, wajah jelas, latar netral; banner adalah ruang gratis untuk satu baris bukti (tangkapan layar dasbor, acara yang kamu jalankan). Lima belas menit kerja, keuntungan visibilitas pencarian permanen."
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
        "id": "Hanya dua baris pertama tampil sebelum “lihat selengkapnya”, maka piramida berlaku. <b>Baris 1–2:</b> siapa kamu dan satu hal yang ingin diingat pembaca — “Mahasiswa informatika tingkat akhir yang membangun alat data yang benar-benar dipakai organisasi.” <b>Paragraf 2:</b> dua-tiga butir bukti, langsung dari baris terkuat CV. <b>Paragraf 3:</b> arah — apa yang kamu cari, masalah mana yang menarikmu. <b>Paragraf 4:</b> ajakan dan kontak — “Terbuka untuk peran analis mulai Juni; bisa dihubungi di …”. Tulis dengan sudut pandang pertama, dengan suaramu sendiri; profil yang terbaca seperti siaran pers mengusir manusia yang sudah lolos tahap pencarian."
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
        "id": "Tiap entri pengalaman mendapat perlakuan CV: baris lingkup plus dua-tiga butir bukti berangka. Lalu lapisan yang tak bisa dibawa CV: <b>media</b> — lampirkan dasbor sungguhan, laporan acara, publikasi, repositori. Keterampilan: sematkan tiga yang cocok dengan pencarian targetmu (pencocokannya diberi bobot); kumpulkan endorsement dari orang yang sungguh melihat kerjamu. Rekomendasi: satu paragraf dari dosen atau supervisor magang yang bisa menyebut hal spesifik mengalahkan sepuluh endorsement generik. Aktivitas: sesekali berkomentar substantif di bidangmu menjaga profil hidup di linimasa — tetapi bidang profil di ataslah yang benar-benar mengonversi."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Motto headlines",
         "id": "Headline moto"
        },
        "fix": {
         "en": "“Aspiring professional | Lifelong learner” matches zero recruiter queries. Role + field + differentiator.",
         "id": "“Aspiring professional | Lifelong learner” cocok dengan nol kueri perekrut. Peran + bidang + pembeda."
        }
       },
       {
        "h": {
         "en": "Empty Open-to-Work settings",
         "id": "Pengaturan Open-to-Work kosong"
        },
        "fix": {
         "en": "Set target titles and locations in the Open to Work tool — recruiters filter on those fields directly.",
         "id": "Isi jabatan dan lokasi target di fitur Open to Work — perekrut memfilter langsung pada bidang itu."
        }
       },
       {
        "h": {
         "en": "Connection begging without context",
         "id": "Meminta koneksi tanpa konteks"
        },
        "fix": {
         "en": "Every connect request to a stranger carries one line of why — the 4.3 cold-message craft in miniature.",
         "id": "Tiap permintaan koneksi ke orang asing membawa satu baris alasan — keterampilan pesan dingin 4.3 dalam miniatur."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "Which headline gets found by a recruiter searching “data analyst Jakarta fresh graduate”?",
        "id": "Headline mana yang ditemukan perekrut yang mencari “data analyst Jakarta fresh graduate”?"
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
        "id": "Ia memuat jabatan, level, keterampilan, dan lokasi yang dicari sebagai string harfiah — headline adalah entri indeks pencarian, bukan slogan."
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
       "id": "Tempel headline, About, dan butir pengalamanmu ke pengoptimal LinkedIn — ia menerapkan aturan pelajaran ini di perangkatmu dan mengembalikan kerangka tulis ulang dari kata-katamu sendiri."
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
      "id": "Pengembangan CV dan Resume — Dari Template ke Dokumen Kompetitif"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The CV is your funnel's single highest-leverage document: one page that must survive software parsing, a six-second human scan, and a five-minute deep read — in that order. This lesson builds it section by section, from the master CV down to the tailored copy.",
      "id": "CV adalah dokumen berdaya ungkit tertinggi di corongmu: satu halaman yang harus lolos parsing perangkat lunak, pindaian manusia enam detik, dan pembacaan dalam lima menit — dalam urutan itu. Pelajaran ini membangunnya bagian demi bagian, dari CV induk hingga salinan tersesuaikan."
     },
     "objectives": [
      {
       "en": "Structure a one-page CV in the order recruiters scan.",
       "id": "Menstrukturkan CV satu halaman dalam urutan pindaian perekrut."
      },
      {
       "en": "Write experience bullets with the action–scope–result pattern.",
       "id": "Menulis butir pengalaman dengan pola aksi–lingkup–hasil."
      },
      {
       "en": "Run the tailoring pass: master CV to JD-specific version in 20 minutes.",
       "id": "Menjalankan penyesuaian: CV induk ke versi spesifik JD dalam 20 menit."
      }
     ],
     "takeaways": [
      {
       "en": "One page, newest first, evidence everywhere — the format argument ended years ago.",
       "id": "Satu halaman, terbaru dulu, bukti di mana-mana — perdebatan format sudah selesai bertahun-tahun lalu."
      },
      {
       "en": "Each bullet is a sentence-length proof: strong verb, real scope, measured result.",
       "id": "Tiap butir adalah pembuktian sepanjang kalimat: kata kerja kuat, lingkup nyata, hasil terukur."
      },
      {
       "en": "The tailoring pass — reorder, rephrase, cut — is where average CVs become interview invitations.",
       "id": "Penyesuaian — susun ulang, ubah frasa, potong — adalah tempat CV rata-rata menjadi undangan wawancara."
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
        "id": "Blok atas: nama, baris peran target, kota, telepon, email profesional, LinkedIn — tanpa foto, umur, agama, atau status pernikahan kecuali segmen pasar mensyaratkannya eksplisit (banyak korporat Indonesia tak lagi begitu; ikuti instruksi tiap pemberi kerja). Lalu, untuk mahasiswa: <b>Pendidikan</b> (gelar, universitas, tahun, IPK jika membantu, 2–3 butir prestasi) → <b>Pengalaman</b> (magang, organisasi, paruh waktu — diperlakukan sama: lingkup + hasil) → <b>Proyek</b> (sering bagian terkuatmu: artefak nyata) → <b>Keterampilan & sertifikasi</b> (terkelompok, versi dan level spesifik) → satu baris minat opsional. Ruang kosong adalah struktur: minimum 11pt, margin sungguhan, tanpa tabel atau kotak teks — Modul 6 menjelaskan mengapa mesin pun menuntut ini."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "The bullet formula",
        "id": "Formula butir"
       },
       "body": {
        "en": "<b>Strong verb + what you did + scope + measured result.</b> “Rebuilt the member database (400 records, 3 faculties), cutting event-invite errors from ~30/event to under 5.” Verbs carry the competency: led, built, negotiated, analysed, redesigned — never “was responsible for”, which describes a chair, not a person. Scope numbers (team size, budget, users, rows) make small things respectable: recruiters know student scale; what they are reading for is whether you measure your own work. No result yet? Use the honest fallback: state what it enabled — “used by the next two committees”.",
        "id": "<b>Kata kerja kuat + apa yang kamu lakukan + lingkup + hasil terukur.</b> “Membangun ulang basis data anggota (400 catatan, 3 fakultas), memangkas kesalahan undangan acara dari ~30/acara menjadi di bawah 5.” Kata kerja membawa kompetensi: memimpin, membangun, menegosiasikan, menganalisis, merancang ulang — jangan pernah “bertanggung jawab atas”, yang menggambarkan kursi, bukan orang. Angka lingkup (ukuran tim, anggaran, pengguna, baris) membuat hal kecil terhormat: perekrut tahu skala mahasiswa; yang mereka baca adalah apakah kamu mengukur kerjamu sendiri. Belum ada hasil? Pakai cadangan jujur: nyatakan apa yang dimungkinkannya — “dipakai dua kepanitiaan berikutnya”."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The 20-minute tailoring pass",
        "id": "Penyesuaian 20 menit"
       },
       "body": {
        "en": "From master CV to submission copy: <b>1.</b> Highlight the JD's five heaviest requirements (repeated words, first-listed items). <b>2.</b> Reorder your bullets so the ones answering those requirements lead each section. <b>3.</b> Rephrase to their vocabulary where truthful — their “stakeholder management” for your “coordinated with faculty and sponsors”. <b>4.</b> Cut what serves no requirement (the master keeps it forever). <b>5.</b> Rewrite the target-role line to name their role. Run the Screening Gym's ATS check as the final gate: it reads your CV against the JD on-device and shows the keyword coverage a machine would see.",
        "id": "Dari CV induk ke salinan kiriman: <b>1.</b> Tandai lima persyaratan terberat JD (kata berulang, item terdaftar pertama). <b>2.</b> Susun ulang butirmu agar yang menjawab persyaratan itu memimpin tiap bagian. <b>3.</b> Ubah frasa ke kosakata mereka bila jujur — “stakeholder management” mereka untuk “berkoordinasi dengan fakultas dan sponsor”-mu. <b>4.</b> Potong yang tak melayani persyaratan mana pun (CV induk menyimpannya selamanya). <b>5.</b> Tulis ulang baris peran target dengan nama peran mereka. Jalankan pemeriksa ATS di Gym Penyaringan sebagai gerbang akhir: ia membaca CV-mu terhadap JD di perangkat dan menunjukkan cakupan kata kunci yang akan dilihat mesin."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "Same internship, two bullets",
        "id": "Magang sama, dua butir"
       },
       "q": {
        "en": "Marketing internship at a local startup",
        "id": "Magang pemasaran di startup lokal"
       },
       "weak": {
        "en": "“Responsible for social media management and helping the marketing team with various tasks including content creation.”",
        "id": "“Bertanggung jawab mengelola media sosial dan membantu tim pemasaran dengan berbagai tugas termasuk pembuatan konten.”"
       },
       "strong": {
        "en": "“Ran 3 Instagram campaigns (12 posts, Rp 2m ad budget): follower base +18% in 10 weeks; best campaign drove 240 sign-ups — adopted as the template for two later launches.”",
        "id": "“Menjalankan 3 kampanye Instagram (12 unggahan, anggaran iklan Rp 2 jt): pengikut +18% dalam 10 minggu; kampanye terbaik menghasilkan 240 pendaftaran — diadopsi sebagai templat dua peluncuran berikutnya.”"
       },
       "why": {
        "en": "Verb, scope, numbers, and an adoption verdict — four proofs in one line, and three ready-made interview stories.",
        "id": "Kata kerja, lingkup, angka, dan bukti diadopsi — empat pembuktian dalam satu baris, dan tiga kisah wawancara siap pakai."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "The strongest section for a student with no internships yet is usually:",
        "id": "Bagian terkuat untuk mahasiswa tanpa magang biasanya:"
       },
       "options": [
        {
         "en": "A long skills list to compensate",
         "id": "Daftar keterampilan panjang sebagai kompensasi"
        },
        {
         "en": "Projects — real artefacts with scope and results, from courses, competitions or personal work",
         "id": "Proyek — artefak nyata dengan lingkup dan hasil, dari kuliah, kompetisi, atau karya pribadi"
        },
        {
         "en": "A detailed hobbies section showing personality",
         "id": "Bagian hobi terperinci yang menunjukkan kepribadian"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Projects prove capability with checkable artefacts — the same evidence rule, no employer required.",
        "id": "Proyek membuktikan kemampuan dengan artefak yang bisa diperiksa — aturan bukti yang sama, tanpa butuh pemberi kerja."
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
       "id": "Studio CV merakit draf ramah ATS bagian demi bagian, memeriksanya terhadap aturan pelajaran ini, dan mengekspor teks polos yang bisa kamu masukkan ke templat mana pun."
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
      "id": "Kebanyakan surat lamaran dibaca sepuluh detik, karena kebanyakan memang layak sepuluh detik. Sedikit yang berhasil melakukan satu tugas: menjawab “mengapa kami, mengapa kamu, mengapa sekarang” dalam kurang dari 250 kata dengan bukti yang sudah dibawa CV — disusun sebagai argumen, bukan permohonan."
     },
     "objectives": [
      {
       "en": "Decide when a cover letter matters and when it is skipped.",
       "id": "Memutuskan kapan surat lamaran penting dan kapan dilewati."
      },
      {
       "en": "Write the four-paragraph argument: hook, fit evidence, company knowledge, close.",
       "id": "Menulis argumen empat paragraf: kail, bukti kecocokan, pengetahuan perusahaan, penutup."
      },
      {
       "en": "Personalise at the only two points where personalisation is read.",
       "id": "Mempersonalisasi pada dua titik satu-satunya tempat personalisasi dibaca."
      }
     ],
     "takeaways": [
      {
       "en": "A cover letter earns its read by saying something the CV cannot: the why and the fit narrative.",
       "id": "Surat lamaran layak dibaca karena mengatakan yang tak bisa dikatakan CV: alasan dan narasi kecocokan."
      },
      {
       "en": "Generic letters are worse than none — “your esteemed company” signals mass production instantly.",
       "id": "Surat generik lebih buruk daripada tidak ada — “perusahaan terhormat Anda” langsung menandakan produksi massal."
      },
      {
       "en": "250 words, four paragraphs, zero adjectives about yourself that a stranger could not check.",
       "id": "250 kata, empat paragraf, nol kata sifat tentang dirimu yang tak bisa diperiksa orang asing."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "When it matters",
        "id": "Kapan ia penting"
       },
       "body": {
        "en": "Skip it where the portal marks it optional and the role is high-volume technical screening — nobody reads it before the test. Write it where: the application goes to a named human (smaller firms, direct emails); the JD asks for one (an instruction-following test in itself); you are switching fields and the CV alone cannot explain the jump; or you have a genuine, specific reason for this company that gives you an edge. In those cases the letter is your only channel for narrative — the CV proves capability, the letter argues fit.",
        "id": "Lewati bila portal menandainya opsional dan perannya penyaringan teknis bervolume tinggi — tak ada yang membacanya sebelum tes. Tulis bila: lamaran menuju manusia bernama (firma kecil, email langsung); JD memintanya (tes mengikuti instruksi itu sendiri); kamu pindah bidang dan CV saja tak bisa menjelaskan lompatannya; atau kamu punya alasan tulus dan spesifik untuk perusahaan ini yang memberimu keunggulan. Dalam kasus itu surat adalah satu-satunya kanal narasimu — CV membuktikan kemampuan, surat mengargumenkan kecocokan."
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
        "id": "<b>P1 — kail (2 kalimat):</b> peran, dan satu bukti terkuatmu yang paling relevan — “Saya melamar peran analis junior; tahun lalu saya membangun dasbor penjualan yang masih dipakai peritel 40 toko untuk keputusan mingguan.” Jangan pernah “Melalui surat ini saya bermaksud menyampaikan minat”, yang tak menyampaikan apa pun. <b>P2 — bukti kecocokan:</b> dua persyaratan dari JD, masing-masing dijawab satu hasil konkret dari riwayatmu. <b>P3 — mengapa mereka (2 kalimat):</b> satu fakta spesifik dan bisa diperiksa tentang perusahaan yang sungguh terhubung denganmu — produk yang kamu pakai, laporan yang mereka terbitkan, pasar yang mereka masuki. <b>P4 — penutup:</b> ketersediaan, satu baris terima kasih, tanpa memohon. Total di bawah 250 kata; ruang kosong adalah kepercayaan diri."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Personalisation that gets read",
        "id": "Personalisasi yang terbaca"
       },
       "body": {
        "en": "Readers check exactly two personalisation points: the opening proof (is it about their role?) and paragraph three (is it about their company, or copy-pasted?). Personalising anything else is invisible effort. Efficient workflow: keep a four-paragraph skeleton; per application, swap the P1 proof to match the JD's top requirement and research one real P3 fact (five minutes on their news page or product). AI drafting tools can help with fluency here — Module 8 covers using them without producing the generic sludge recruiters now recognise on sight.",
        "id": "Pembaca memeriksa tepat dua titik personalisasi: bukti pembuka (apakah tentang peran mereka?) dan paragraf tiga (apakah tentang perusahaan mereka, atau salin-tempel?). Mempersonalisasi yang lain adalah usaha tak terlihat. Alur kerja efisien: simpan kerangka empat paragraf; per lamaran, tukar bukti P1 agar cocok dengan persyaratan teratas JD dan riset satu fakta P3 nyata (lima menit di halaman berita atau produk mereka). Alat draf AI bisa membantu kelancaran di sini — Modul 8 membahas memakainya tanpa menghasilkan bubur generik yang kini langsung dikenali perekrut."
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
        "id": "Lamaran analis junior"
       },
       "weak": {
        "en": "“I am writing to express my sincere interest in the Junior Analyst position at your esteemed company. As a highly motivated fresh graduate with a passion for data, I believe I would be a valuable asset to your team.”",
        "id": "“Melalui surat ini saya menyampaikan minat tulus pada posisi Junior Analyst di perusahaan Anda yang terhormat. Sebagai lulusan baru yang sangat termotivasi dan bersemangat pada data, saya yakin akan menjadi aset berharga bagi tim Anda.”"
       },
       "strong": {
        "en": "“I'm applying for the Junior Analyst role. Last semester I analysed three years of sales data for a 40-store retailer as my thesis project — my stock-allocation findings are now part of their quarterly planning, and that is the kind of work I want to do for your merchant analytics team.”",
        "id": "“Saya melamar peran Junior Analyst. Semester lalu saya menganalisis tiga tahun data penjualan peritel 40 toko sebagai proyek skripsi — temuan alokasi stok saya kini bagian dari perencanaan kuartalan mereka, dan kerja semacam itulah yang ingin saya lakukan untuk tim analitik merchant Anda.”"
       },
       "why": {
        "en": "The strong opening spends its ten seconds on a checkable result tied to their team's actual work — motivation is demonstrated, not declared.",
        "id": "Pembuka kuat menghabiskan sepuluh detiknya pada hasil yang bisa diperiksa dan terkait kerja nyata tim mereka — motivasi ditunjukkan, bukan dideklarasikan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Paragraph 3 (“why them”) should contain:",
        "id": "Paragraf 3 (“mengapa mereka”) harus berisi:"
       },
       "options": [
        {
         "en": "Praise for the company's excellent reputation and work culture",
         "id": "Pujian atas reputasi dan budaya kerja perusahaan yang unggul"
        },
        {
         "en": "One specific, checkable fact about the company genuinely connected to your interest",
         "id": "Satu fakta spesifik dan bisa diperiksa tentang perusahaan yang sungguh terhubung dengan minatmu"
        },
        {
         "en": "A summary of your top three strengths",
         "id": "Ringkasan tiga kekuatan utamamu"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Generic praise is mass-production evidence; a specific fact proves research and genuine intent — the only thing P3 exists to prove.",
        "id": "Pujian generik adalah bukti produksi massal; fakta spesifik membuktikan riset dan niat tulus — satu-satunya hal yang ingin dibuktikan P3."
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
        "id": "Saya melamar peran analis junior. Semester lalu saya menganalisis tiga tahun data penjualan peritel empat puluh toko sebagai proyek skripsi. Temuan alokasi stok saya kini bagian dari perencanaan kuartalan mereka, dan kerja semacam itulah yang ingin saya lakukan untuk tim analitik merchant Anda."
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
       "id": "Jawab lima pertanyaan dan pengembang merakitnya ke struktur empat paragraf, lalu memeriksa draf terhadap JD yang kamu tempel — termasuk pencerminan istilah."
      },
      "cta": {
       "en": "Open the letter developer →",
       "id": "Buka pengembang surat →"
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
    "id": "Persiapan Tes Penyaringan — Simulasi Tes Psikometri &amp; Bakat"
   },
   "overview": {
    "en": "Module 3 of The Pack focuses on screening test preparation — psychometric &amp; aptitude test simulation. Work through the lessons in order — each builds on the last.",
    "id": "Modul 3 dari The Pack berfokus pada Persiapan Tes Penyaringan — Simulasi Tes Psikometri &amp; Bakat. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply screening test preparation — psychometric &amp; aptitude test simulation to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Persiapan Tes Penyaringan — Simulasi Tes Psikometri &amp; Bakat pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "3.1",
     "title": {
      "en": "Introduction to Psychometric and Aptitude Assessments",
      "id": "Pengantar Penilaian Psikometri dan Bakat"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Psychometric tests feel like judgment day; they are actually the most trainable stage of the funnel. This lesson maps the test landscape — what each type measures, how scores are used, and why practice moves results more than talent does.",
      "id": "Tes psikometri terasa seperti hari penghakiman; padahal ia tahap corong yang paling bisa dilatih. Pelajaran ini memetakan lanskap tes — apa yang diukur tiap jenis, bagaimana skor dipakai, dan mengapa latihan menggerakkan hasil lebih dari bakat."
     },
     "objectives": [
      {
       "en": "Identify the main test families: numerical, verbal, logical, personality, situational.",
       "id": "Mengenali keluarga tes utama: numerik, verbal, logis, kepribadian, situasional."
      },
      {
       "en": "Explain how employers actually use scores — cutoffs, norms and profiles.",
       "id": "Menjelaskan bagaimana pemberi kerja benar-benar memakai skor — ambang, norma, dan profil."
      },
      {
       "en": "Set up a practice plan calibrated to your weakest family.",
       "id": "Menyusun rencana latihan yang dikalibrasi ke keluarga terlemahmu."
      }
     ],
     "takeaways": [
      {
       "en": "Aptitude scores respond strongly to familiarity: format practice removes the noise that hides your real level.",
       "id": "Skor bakat merespons kuat terhadap keakraban: latihan format menghapus derau yang menyembunyikan level aslimu."
      },
      {
       "en": "You are scored against a norm group, usually as a cutoff — the goal is clearing the bar, not perfection.",
       "id": "Kamu dinilai terhadap kelompok norma, biasanya sebagai ambang — tujuannya melewati palang, bukan kesempurnaan."
      },
      {
       "en": "Personality tests have no cheat code worth using: gamed answers produce jobs that fit the mask, not you.",
       "id": "Tes kepribadian tak punya kode curang yang layak dipakai: jawaban palsu menghasilkan pekerjaan yang cocok untuk topeng, bukan kamu."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "The test families",
        "id": "Keluarga tes"
       },
       "body": {
        "en": "<b>Numerical reasoning:</b> percentages, ratios, rates of change read from tables and charts — business arithmetic under time, not calculus. <b>Verbal reasoning:</b> a passage plus statements to judge true / false / cannot say — reading precision, not vocabulary. <b>Logical/abstract:</b> sequences and matrices of shapes — pattern induction with no language at all. <b>Personality inventories:</b> work-style questionnaires with no time limit and, properly speaking, no wrong answers. <b>Situational judgment:</b> workplace scenarios asking which response is most and least effective. The first three are the trainable wall most candidates hit; the Screening Gym drills exactly those.",
        "id": "<b>Penalaran numerik:</b> persentase, rasio, laju perubahan dibaca dari tabel dan grafik — aritmetika bisnis dalam waktu, bukan kalkulus. <b>Penalaran verbal:</b> bacaan plus pernyataan untuk dinilai benar / salah / tak bisa disimpulkan — presisi membaca, bukan kosakata. <b>Logis/abstrak:</b> urutan dan matriks bentuk — induksi pola tanpa bahasa sama sekali. <b>Inventori kepribadian:</b> kuesioner gaya kerja tanpa batas waktu dan, sejatinya, tanpa jawaban salah. <b>Penilaian situasional:</b> skenario tempat kerja yang menanyakan respons mana paling dan paling tidak efektif. Tiga pertama adalah tembok terlatihkan yang ditabrak kebanyakan kandidat; Gym Penyaringan melatih persis itu."
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
        "id": "Skor mentahmu diubah menjadi persentil terhadap kelompok norma — lulusan lain, atau pelamar terdahulu pemberi kerja ini. Kebanyakan perusahaan menerapkan <b>ambang</b> (misal persentil 40–60) sebagai gerbang lulus/gagal; sebagian memeringkat kumpulan dan mengambil irisan teratas. Dua konsekuensi. Pertama, kamu tak butuh kejeniusan — kamu perlu melewati palang yang dilewati sebagian besar kandidat yang siap. Kedua, pertukaran kecepatan–akurasi penting: banyak tes tak menghukum lewatan tetapi menghukum deretan salah akibat menebak; set latihan mengajarimu tempo optimalmu sendiri. Profil kepribadian dibaca berbeda — sebagai penanda kecocokan dan bahan gali wawancara, bukan lulus/gagal."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The practice effect, honestly stated",
        "id": "Efek latihan, dinyatakan jujur"
       },
       "body": {
        "en": "Research on test preparation consistently shows meaningful score gains from familiarity and practice — largest for candidates new to the format. The mechanism is mundane: knowing the question types, the interface, and your pacing frees working memory for the actual reasoning. That is why this module sequences <b>learn the theory (3.3) → drill untimed → drill timed (3.4) → review every miss</b>. The review step carries most of the gain: each wrong answer in the Gym comes with a worked explanation, and an error understood is an error retired.",
        "id": "Riset persiapan tes secara konsisten menunjukkan kenaikan skor berarti dari keakraban dan latihan — terbesar bagi kandidat yang baru dengan formatnya. Mekanismenya sederhana: mengenal jenis soal, antarmuka, dan tempomu membebaskan memori kerja untuk penalaran sesungguhnya. Itulah mengapa modul ini berurutan <b>pelajari teori (3.3) → latihan tanpa waktu → latihan berwaktu (3.4) → tinjau tiap kesalahan</b>. Langkah tinjauan membawa sebagian besar kenaikan: tiap jawaban salah di Gym disertai pembahasan, dan kesalahan yang dipahami adalah kesalahan yang pensiun."
       }
      }
     ],
     "diagram": {
      "type": "quad",
      "exhibit": {
       "en": "Exhibit 1: The test landscape by what is measured and how it is scored.",
       "id": "Peraga 1: Lanskap tes menurut yang diukur dan cara menilainya."
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
         "id": "Aritmetika bisnis dalam waktu · dinilai ambang"
        }
       },
       {
        "h": {
         "en": "Verbal",
         "id": "Verbal"
        },
        "sub": {
         "en": "True / false / cannot say precision · cutoff scored",
         "id": "Presisi benar/salah/tak bisa disimpulkan · dinilai ambang"
        }
       },
       {
        "h": {
         "en": "Logical / abstract",
         "id": "Logis / abstrak"
        },
        "sub": {
         "en": "Shape patterns, no language · cutoff scored",
         "id": "Pola bentuk, tanpa bahasa · dinilai ambang"
        }
       },
       {
        "h": {
         "en": "Personality & SJT",
         "id": "Kepribadian & SJT"
        },
        "sub": {
         "en": "Work style and judgment · profiled, not passed",
         "id": "Gaya kerja dan penilaian · diprofilkan, bukan diluluskan"
        }
       }
      ],
      "longdesc": {
       "en": "A two-by-two of test families: numerical reasoning (business arithmetic under time), verbal reasoning (statement judgment against a passage), logical or abstract reasoning (shape patterns without language) — all typically scored against a percentile cutoff — and personality plus situational judgment tests, which produce profiles and interview probes rather than pass–fail scores.",
       "id": "Dua-kali-dua keluarga tes: penalaran numerik (aritmetika bisnis dalam waktu), penalaran verbal (penilaian pernyataan terhadap bacaan), penalaran logis atau abstrak (pola bentuk tanpa bahasa) — semuanya biasanya dinilai terhadap ambang persentil — dan tes kepribadian plus penilaian situasional, yang menghasilkan profil dan bahan gali wawancara alih-alih skor lulus–gagal."
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
        "id": "Kedudukanmu terhadap kelompok norma: persentil 70 berarti skormu di atas 70% peserta sebanding."
       }
      },
      {
       "term": {
        "en": "norm group",
        "id": "kelompok norma"
       },
       "def": {
        "en": "The comparison population — e.g. graduate applicants — whose results define what counts as a high or low score.",
        "id": "Populasi pembanding — mis. pelamar lulusan — yang hasilnya menentukan apa itu skor tinggi atau rendah."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why do format familiarity and pacing practice raise aptitude scores?",
        "id": "Mengapa keakraban format dan latihan tempo menaikkan skor bakat?"
       },
       "options": [
        {
         "en": "They do not — aptitude is fixed at birth",
         "id": "Tidak — bakat sudah tetap sejak lahir"
        },
        {
         "en": "They free working memory from navigating the test, leaving more for the actual reasoning",
         "id": "Mereka membebaskan memori kerja dari menavigasi tes, menyisakan lebih banyak untuk penalaran sesungguhnya"
        },
        {
         "en": "Test providers reward returning candidates with easier questions",
         "id": "Penyedia tes mengganjar kandidat yang kembali dengan soal lebih mudah"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The reasoning demand is constant, but unfamiliar formats tax attention. Practice removes that tax — which is why gains are largest for first-time formats.",
        "id": "Tuntutan penalaran konstan, tetapi format asing membebani perhatian. Latihan menghapus beban itu — karena itulah kenaikan terbesar terjadi pada format yang baru pertama ditemui."
       }
      }
     ],
     "tool": {
      "id": "gym",
      "mode": "drill",
      "title": {
       "en": "Meet your baseline",
       "id": "Temui garis dasarmu"
      },
      "body": {
       "en": "Run one untimed set per family in the Screening Gym to find your weakest — the rest of this module builds your plan from that reading.",
       "id": "Jalankan satu set tanpa waktu per keluarga di Gym Penyaringan untuk menemukan yang terlemah — sisa modul ini menyusun rencanamu dari pembacaan itu."
      },
      "cta": {
       "en": "Open the drills →",
       "id": "Buka latihan →"
      }
     },
     "quote": {
      "en": "The most trainable stage of the funnel is the one candidates fear most.",
      "id": "Tahap corong yang paling bisa dilatih justru yang paling ditakuti kandidat."
     }
    },
    {
     "n": "3.2",
     "title": {
      "en": "Study Preparation Strategies and Time Management for Tests",
      "id": "Strategi Persiapan Belajar dan Manajemen Waktu untuk Tes"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "Cramming works for facts, not for speed skills. This lesson builds your four-week test-preparation plan — distributed practice, error logs, simulated conditions — and drills the time-management decisions that decide real test sessions.",
      "id": "Sistem kebut semalam berhasil untuk fakta, bukan keterampilan kecepatan. Pelajaran ini menyusun rencana persiapan tes empat mingguanmu — latihan terdistribusi, catatan kesalahan, kondisi tersimulasi — dan melatih keputusan manajemen waktu yang menentukan sesi tes sungguhan."
     },
     "objectives": [
      {
       "en": "Build a four-week distributed practice plan around your weakest family.",
       "id": "Menyusun rencana latihan terdistribusi empat minggu di sekitar keluarga terlemahmu."
      },
      {
       "en": "Keep an error log that converts misses into retired mistakes.",
       "id": "Menjaga catatan kesalahan yang mengubah kegagalan menjadi kesalahan pensiun."
      },
      {
       "en": "Apply triage rules — answer, flag, skip — under a live clock.",
       "id": "Menerapkan aturan triase — jawab, tandai, lewati — di bawah jam berjalan."
      }
     ],
     "takeaways": [
      {
       "en": "Six 25-minute sessions a week beat one three-hour Sunday: speed skills consolidate between sessions.",
       "id": "Enam sesi 25 menit seminggu mengalahkan satu sesi tiga jam di Minggu: keterampilan kecepatan terkonsolidasi di antara sesi."
      },
      {
       "en": "The error log is the syllabus: your next session always starts from your last mistakes.",
       "id": "Catatan kesalahan adalah silabusnya: sesi berikutmu selalu mulai dari kesalahan terakhirmu."
      },
      {
       "en": "On test day you are managing seconds-per-question, not questions — pacing is a decision, not a feeling.",
       "id": "Pada hari tes kamu mengelola detik-per-soal, bukan soal — tempo adalah keputusan, bukan perasaan."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "The four-week arc",
        "id": "Busur empat minggu"
       },
       "body": {
        "en": "<b>Week 1 — diagnose:</b> one untimed set per family in the Gym; log accuracy and time per question; name your weakest family. <b>Week 2 — technique:</b> study the frameworks (3.3) and drill your weak family untimed until accuracy stabilises above ~80%. <b>Week 3 — speed:</b> timed sets at gradually tightening pace; keep the error log religiously. <b>Week 4 — simulate:</b> full timed sets under exam conditions — phone away, one sitting, morning hours if your real test is morning. If your test date is closer than four weeks, compress but keep the order: accuracy before speed, always.",
        "id": "<b>Minggu 1 — diagnosis:</b> satu set tanpa waktu per keluarga di Gym; catat akurasi dan waktu per soal; namai keluarga terlemahmu. <b>Minggu 2 — teknik:</b> pelajari kerangka (3.3) dan latih keluarga lemahmu tanpa waktu sampai akurasi stabil di atas ~80%. <b>Minggu 3 — kecepatan:</b> set berwaktu dengan tempo yang makin ketat; jaga catatan kesalahan dengan disiplin. <b>Minggu 4 — simulasi:</b> set berwaktu penuh dalam kondisi ujian — ponsel jauh, sekali duduk, jam pagi jika tes aslimu pagi. Jika tanggal tesmu kurang dari empat minggu, padatkan tetapi jaga urutannya: akurasi sebelum kecepatan, selalu."
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
        "id": "Empat kolom per kesalahan: jenis soal (“perubahan persentase dari tabel”), langkah salahmu (“menghitung perubahan ÷ nilai baru alih-alih ÷ awal”), prinsip yang benar, dan aturan satu baris untuk lain kali (“perubahan ÷ awal, selalu”). Sepuluh menit setelah tiap sesi, tinjau catatan dua minggu terakhir. Penggandaannya dramatis: kebanyakan kandidat salah pada lima arketipe soal yang sama berulang kali; memensiunkan satu arketipe per minggu bisa menggerakkan skor lebih dari menggandakan volume latihan — ini logika corong Modul 1 diterapkan pada kognisimu sendiri."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 — The pacing decision",
        "id": "Latihan 1 — Keputusan tempo"
       },
       "body": {
        "en": "A 20-question numerical set, 20 minutes. At question 8 you have used 11 minutes — question 8 is a dense multi-step table problem you estimate needs 3 more minutes. Decide your move, then reveal.",
        "id": "Set numerik 20 soal, 20 menit. Di soal 8 kamu sudah memakai 11 menit — soal 8 adalah soal tabel multilangkah padat yang kamu taksir butuh 3 menit lagi. Putuskan langkahmu, lalu buka."
       },
       "debrief": {
        "en": "Flag and skip, immediately. The arithmetic: 9 minutes remain for 13 questions (~40s each); spending 3 more on question 8 leaves ~28s each for twelve — a collapse. Skipping banks the reachable questions first, and flagged returns at the end often solve faster because a second look bypasses the first look's dead-end framing. The tell you should have moved earlier: any single question that reaches double your per-question budget. Pacing is triage — the score belongs to the set, not to any one question.",
        "id": "Tandai dan lewati, segera. Aritmetikanya: tersisa 9 menit untuk 13 soal (~40 dtk tiap); menghabiskan 3 menit lagi di soal 8 menyisakan ~28 dtk untuk dua belas — kolaps. Melewati mengamankan soal terjangkau lebih dulu, dan kembali ke soal bertanda di akhir sering lebih cepat karena pandangan kedua melewati bingkai buntu pandangan pertama. Tanda kamu seharusnya pindah lebih awal: satu soal mana pun yang mencapai dua kali anggaran per soalmu. Tempo adalah triase — skor milik set, bukan milik satu soal."
       }
      },
      {
       "h": {
        "en": "Drill 2 — The night before",
        "id": "Latihan 2 — Malam sebelumnya"
       },
       "body": {
        "en": "Your test is tomorrow at 9 a.m. It is 8 p.m. and you feel underprepared in verbal. Plan tonight and tomorrow morning, then reveal.",
        "id": "Tesmu besok jam 9 pagi. Sekarang jam 8 malam dan kamu merasa kurang siap di verbal. Rencanakan malam ini dan besok pagi, lalu buka."
       },
       "debrief": {
        "en": "Tonight: 30 minutes reviewing the error log only — not new sets, which at this point add anxiety, not skill — then equipment check (ID, link, quiet room, charged laptop) and a normal night within your sleep window; Lesson 5.1 of The Map is literal here, because sleep debt costs more test points than any final drill adds. Morning: light breakfast, arrive or log in 20 minutes early, one warm-up set of five easy questions to start the engine — athletes warm up, test-takers should too. The counterintuitive rule: the last 12 hours are for protecting the machine, not upgrading it.",
        "id": "Malam ini: 30 menit meninjau catatan kesalahan saja — bukan set baru, yang pada titik ini menambah cemas, bukan keterampilan — lalu periksa perlengkapan (identitas, tautan, ruang tenang, laptop terisi) dan malam normal dalam jendela tidurmu; Pelajaran 5.1 The Map berlaku harfiah di sini, karena utang tidur memakan lebih banyak poin tes daripada yang ditambahkan latihan terakhir mana pun. Pagi: sarapan ringan, datang atau masuk 20 menit lebih awal, satu set pemanasan lima soal mudah untuk menyalakan mesin — atlet pemanasan, peserta tes juga seharusnya. Aturan kontraintuitif: 12 jam terakhir untuk melindungi mesin, bukan meningkatkannya."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Practising only your strong family because it feels good",
         "id": "Berlatih hanya keluarga kuatmu karena terasa menyenangkan"
        },
        "fix": {
         "en": "Scores gate on the weakest family. Schedule the uncomfortable one first, while energy is high.",
         "id": "Skor terhambat keluarga terlemah. Jadwalkan yang tak nyaman lebih dulu, saat energi tinggi."
        }
       },
       {
        "h": {
         "en": "Unlogged practice",
         "id": "Latihan tanpa catatan"
        },
        "fix": {
         "en": "Volume without an error log repeats mistakes at speed. Log every miss in four columns.",
         "id": "Volume tanpa catatan kesalahan mengulang kesalahan dengan cepat. Catat tiap kegagalan dalam empat kolom."
        }
       },
       {
        "h": {
         "en": "First simulation on test day",
         "id": "Simulasi pertama di hari tes"
        },
        "fix": {
         "en": "The real interface, clock pressure and one-sitting fatigue must be old news by then — week 4 exists for this.",
         "id": "Antarmuka asli, tekanan jam, dan lelah sekali-duduk harus sudah jadi berita lama saat itu — minggu 4 ada untuk ini."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "Why does the plan demand accuracy above ~80% before adding time pressure?",
        "id": "Mengapa rencana menuntut akurasi di atas ~80% sebelum menambah tekanan waktu?"
       },
       "options": [
        {
         "en": "Because slow candidates fail anyway",
         "id": "Karena kandidat lambat toh gagal"
        },
        {
         "en": "Speeding up a wrong method automates the error; the method must be right before it is made fast",
         "id": "Mempercepat metode salah mengotomatiskan kesalahannya; metode harus benar dulu sebelum dipercepat"
        },
        {
         "en": "Because 80% is the universal pass mark",
         "id": "Karena 80% adalah ambang lulus universal"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Timed drilling consolidates whatever you practise — including mistakes. Order of operations: correct, then fast.",
        "id": "Latihan berwaktu mengonsolidasi apa pun yang kamu latih — termasuk kesalahan. Urutan operasinya: benar, lalu cepat."
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
       "id": "Set diagnosismu menunggu — tanpa waktu, satu per keluarga, dengan pembahasan untuk tiap kesalahan."
      },
      "cta": {
       "en": "Open the Screening Gym →",
       "id": "Buka Gym Penyaringan →"
      }
     }
    },
    {
     "n": "3.3",
     "title": {
      "en": "Core Theories — Numerical, Verbal, Logical, and Personality Frameworks",
      "id": "Teori Inti — Kerangka Numerik, Verbal, Logis, dan Kepribadian"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "slides",
     "placeholder": false,
     "overview": {
      "en": "The core technique deck: the handful of frameworks that solve most numerical, verbal and logical questions, plus how personality frameworks are read. Keep it open beside your first practice sessions.",
      "id": "Dek teknik inti: segelintir kerangka yang menyelesaikan sebagian besar soal numerik, verbal, dan logis, plus cara kerangka kepribadian dibaca. Biarkan terbuka di samping sesi latihan pertamamu."
     },
     "objectives": [
      {
       "en": "Apply the percentage toolkit: change, reverse, and compound.",
       "id": "Menerapkan perangkat persentase: perubahan, balik, dan majemuk."
      },
      {
       "en": "Use the cannot-say discipline on verbal statements.",
       "id": "Memakai disiplin tak-bisa-disimpulkan pada pernyataan verbal."
      },
      {
       "en": "Scan abstract patterns along the five standard dimensions.",
       "id": "Memindai pola abstrak sepanjang lima dimensi standar."
      }
     ],
     "takeaways": [
      {
       "en": "Most numerical questions are three formulas wearing different tables.",
       "id": "Sebagian besar soal numerik adalah tiga rumus berbaju tabel berbeda."
      },
      {
       "en": "Verbal tests measure your restraint: only what the passage says, never what you know.",
       "id": "Tes verbal mengukur pengendalianmu: hanya yang dikatakan bacaan, jangan pernah yang kamu ketahui."
      },
      {
       "en": "Abstract patterns hide in five dimensions — scan them in order and the answer surfaces.",
       "id": "Pola abstrak bersembunyi di lima dimensi — pindai berurutan dan jawabannya muncul."
      }
     ],
     "slides": [
      {
       "h": {
        "en": "Numerical — the percentage toolkit",
        "id": "Numerik — perangkat persentase"
       },
       "points": [
        {
         "en": "Change: (new − old) ÷ old × 100. Always divide by the ORIGINAL.",
         "id": "Perubahan: (baru − lama) ÷ lama × 100. Selalu bagi dengan nilai AWAL."
        },
        {
         "en": "Reverse: after +20%, the original is value ÷ 1.20 — never value × 0.80.",
         "id": "Balik: setelah +20%, nilai awal adalah nilai ÷ 1,20 — bukan nilai × 0,80."
        },
        {
         "en": "Compound: two changes multiply — +10% then −10% is ×1.1×0.9 = ×0.99, a net loss.",
         "id": "Majemuk: dua perubahan saling mengali — +10% lalu −10% adalah ×1,1×0,9 = ×0,99, rugi bersih."
        },
        {
         "en": "Ratios: keep units visible; scale to a common base before comparing.",
         "id": "Rasio: jaga satuan terlihat; samakan basis sebelum membandingkan."
        }
       ]
      },
      {
       "h": {
        "en": "Numerical — reading the exhibit",
        "id": "Numerik — membaca peraga"
       },
       "points": [
        {
         "en": "Read the title, units and footnotes BEFORE the question — most traps live there (thousands, %, fiscal years).",
         "id": "Baca judul, satuan, dan catatan kaki SEBELUM soal — kebanyakan jebakan tinggal di sana (ribuan, %, tahun fiskal)."
        },
        {
         "en": "Estimate first: round numbers, get a magnitude, then compute only if options are close.",
         "id": "Taksir dulu: bulatkan angka, dapatkan orde besaran, lalu hitung hanya jika opsi berdekatan."
        },
        {
         "en": "Two-table questions: identify the joining column before touching arithmetic.",
         "id": "Soal dua tabel: temukan kolom penghubung sebelum menyentuh aritmetika."
        }
       ]
      },
      {
       "h": {
        "en": "Verbal — true / false / cannot say",
        "id": "Verbal — benar / salah / tak bisa disimpulkan"
       },
       "points": [
        {
         "en": "TRUE: the passage states it or it follows necessarily. FALSE: the passage contradicts it.",
         "id": "BENAR: bacaan menyatakannya atau ia mengikuti secara niscaya. SALAH: bacaan membantahnya."
        },
        {
         "en": "CANNOT SAY: plausible, consistent with the passage, but not established by it — the trap for well-read candidates.",
         "id": "TAK BISA DISIMPULKAN: masuk akal, konsisten dengan bacaan, tetapi tak ditegakkan olehnya — jebakan bagi kandidat berwawasan."
        },
        {
         "en": "Outside knowledge is contamination: judge the statement against the passage alone.",
         "id": "Pengetahuan luar adalah kontaminasi: nilai pernyataan terhadap bacaan semata."
        },
        {
         "en": "Beware quantifier swaps: “some” in the passage never proves “most” in the statement.",
         "id": "Waspadai penukaran kuantor: “sebagian” di bacaan tak pernah membuktikan “kebanyakan” di pernyataan."
        }
       ]
      },
      {
       "h": {
        "en": "Logical — the five scan dimensions",
        "id": "Logis — lima dimensi pindai"
       },
       "points": [
        {
         "en": "Shape: what forms appear, appear, or vanish across the sequence?",
         "id": "Bentuk: rupa apa yang muncul, bertambah, atau hilang sepanjang urutan?"
        },
        {
         "en": "Number: count elements — sides, dots, shapes — is a counter running?",
         "id": "Jumlah: hitung elemen — sisi, titik, bentuk — adakah penghitung berjalan?"
        },
        {
         "en": "Position & rotation: does anything move or turn by a fixed step?",
         "id": "Posisi & rotasi: adakah yang bergeser atau berputar dengan langkah tetap?"
        },
        {
         "en": "Shading & size: does fill alternate or grow on a cycle?",
         "id": "Arsiran & ukuran: apakah isian berselang atau membesar dalam siklus?"
        },
        {
         "en": "Two rules often run at once — find one, hold it, scan for the second.",
         "id": "Dua aturan sering berjalan sekaligus — temukan satu, pegang, pindai yang kedua."
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
         "id": "Inventori memprofilkan gaya kerja terhadap peran; pemeriksa konsistensi menangkap persona buatan."
        },
        {
         "en": "Answer as your working self on a good day — honest, slightly formal, consistent.",
         "id": "Jawab sebagai dirimu yang bekerja di hari baik — jujur, sedikit formal, konsisten."
        },
        {
         "en": "SJT: the most effective response usually addresses the problem directly, keeps others informed, and escalates real risks early.",
         "id": "SJT: respons paling efektif biasanya menangani masalah langsung, menjaga orang lain terinformasi, dan mengeskalasi risiko nyata lebih awal."
        },
        {
         "en": "Gaming a profile wins you a role that fits the mask — a loss dressed as a win.",
         "id": "Mengakali profil memenangkanmu peran yang cocok untuk topeng — kekalahan berkostum kemenangan."
        }
       ]
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A price rose 25% to Rp 150,000. The original price?",
        "id": "Harga naik 25% menjadi Rp 150.000. Harga awalnya?"
       },
       "options": [
        {
         "en": "Rp 112,500",
         "id": "Rp 112.500"
        },
        {
         "en": "Rp 120,000",
         "id": "Rp 120.000"
        },
        {
         "en": "Rp 125,000",
         "id": "Rp 125.000"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Reverse percentage: 150,000 ÷ 1.25 = 120,000. Multiplying by 0.75 (giving 112,500) is the classic trap — it reverses the wrong operation.",
        "id": "Persentase balik: 150.000 ÷ 1,25 = 120.000. Mengalikan 0,75 (menghasilkan 112.500) adalah jebakan klasik — ia membalik operasi yang salah."
       }
      }
     ]
    },
    {
     "n": "3.4",
     "title": {
      "en": "Practice Exercises and Timed Mock Test Simulation",
      "id": "Latihan dan Simulasi Mock Test Berwaktu"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "Theory ends here. This lesson routes you through the Screening Gym's timed sets — the full simulation flow — and teaches you to read your results the way an assessor would, then convert them into next week's plan.",
      "id": "Teori berakhir di sini. Pelajaran ini mengarahkanmu melalui set berwaktu Gym Penyaringan — alur simulasi penuh — dan mengajarimu membaca hasilmu seperti asesor, lalu mengubahnya menjadi rencana minggu depan."
     },
     "objectives": [
      {
       "en": "Complete timed sets in all three aptitude families under exam conditions.",
       "id": "Menyelesaikan set berwaktu di ketiga keluarga bakat dalam kondisi ujian."
      },
      {
       "en": "Read your accuracy, pace and miss patterns like an assessor.",
       "id": "Membaca akurasi, tempo, dan pola kesalahanmu seperti asesor."
      },
      {
       "en": "Convert one results review into one concrete next-week plan.",
       "id": "Mengubah satu tinjauan hasil menjadi satu rencana konkret minggu depan."
      }
     ],
     "takeaways": [
      {
       "en": "Simulation quality equals prediction quality: full sets, real clock, no pauses.",
       "id": "Mutu simulasi sama dengan mutu prediksi: set penuh, jam sungguhan, tanpa jeda."
      },
      {
       "en": "Your miss pattern is more informative than your score — archetypes, not totals.",
       "id": "Pola kesalahanmu lebih informatif daripada skormu — arketipe, bukan total."
      },
      {
       "en": "Every simulation ends with a written plan or it was entertainment.",
       "id": "Setiap simulasi berakhir dengan rencana tertulis atau ia sekadar hiburan."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "Exam conditions, exactly",
        "id": "Kondisi ujian, persis"
       },
       "body": {
        "en": "Phone in another room, notifications off (Lesson 5.3's focus profile), water ready, one sitting per set, and the clock running from question one. Treat the Gym's timer as binding: when it ends, it ends. Afterwards, resist the urge to immediately re-run for a better number — first write the review: accuracy per family, seconds per question, and every miss into the error log with its archetype. The review is the product; the score is a by-product.",
        "id": "Ponsel di ruangan lain, notifikasi mati (profil fokus Pelajaran 5.3), air siap, satu duduk per set, dan jam berjalan dari soal satu. Perlakukan pewaktu Gym sebagai mengikat: saat habis, selesai. Setelahnya, tahan dorongan langsung mengulang demi angka lebih baik — tulis dulu tinjauannya: akurasi per keluarga, detik per soal, dan tiap kesalahan ke catatan dengan arketipenya. Tinjauan adalah produknya; skor adalah produk sampingan."
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
        "id": "Asesor melihat kisi: akurasi × penyelesaian. <b>Akurasi tinggi, penyelesaian rendah</b> — kamu teliti dan lambat: latih tempo berwaktu, bukan teknik. <b>Akurasi rendah, penyelesaian tinggi</b> — kamu cepat dan longgar: kembali ke kerja akurasi tanpa waktu; kecepatan sedang mencuci kesalahan. <b>Keduanya rendah</b> — celah teknik: kembali ke kerangka 3.3 untuk keluarga itu. <b>Keduanya tinggi</b> — kamu melewati ambang tipikal; pertahankan dua kali seminggu dan pindahkan jam latihanmu ke tahap corong yang bocor berikutnya. Catatan jujur, selalu: skor Gym mengalibrasi terhadap bank latihan, bukan kelompok norma pemberi kerja mana pun — ia mendiagnosis, bukan menjanjikan."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Simulation 1 — Numerical, timed",
        "id": "Simulasi 1 — Numerik, berwaktu"
       },
       "body": {
        "en": "Open the Gym, choose the numerical timed set, run it under exam conditions. Return and reveal when done.",
        "id": "Buka Gym, pilih set numerik berwaktu, jalankan dalam kondisi ujian. Kembali dan buka setelah selesai."
       },
       "debrief": {
        "en": "Check your grid position: if you finished under 70% of questions, your per-question budget needs the triage rule from 3.2 — no question gets double budget. If accuracy fell below 75%, find the shared archetype in your misses; it is usually one of the three percentage formulas applied backwards. Log it, write the one-line rule, and schedule the same set family for the day after tomorrow — spacing, not massing.",
        "id": "Periksa posisi kisimu: jika kamu menyelesaikan di bawah 70% soal, anggaran per soalmu butuh aturan triase 3.2 — tak ada soal yang mendapat anggaran ganda. Jika akurasi di bawah 75%, cari arketipe bersama dalam kesalahanmu; biasanya salah satu dari tiga rumus persentase yang diterapkan terbalik. Catat, tulis aturan satu barisnya, dan jadwalkan keluarga set yang sama lusa — berjarak, bukan menumpuk."
       }
      },
      {
       "h": {
        "en": "Simulation 2 — Verbal, timed",
        "id": "Simulasi 2 — Verbal, berwaktu"
       },
       "body": {
        "en": "Run the verbal timed set the same way. Return and reveal.",
        "id": "Jalankan set verbal berwaktu dengan cara sama. Kembali dan buka."
       },
       "debrief": {
        "en": "Verbal misses cluster on “cannot say”: count how many of your errors chose true/false where the honest answer was unproven. That count is your contamination index — how often outside knowledge or plausibility leaked into judgment. The repair drill: for each such miss, underline the exact passage words that would have been needed to prove the statement, and observe they are absent. Ten repetitions of that observation build the restraint the test measures.",
        "id": "Kesalahan verbal menggerombol di “tak bisa disimpulkan”: hitung berapa kesalahanmu memilih benar/salah padahal jawaban jujurnya belum terbukti. Hitungan itu indeks kontaminasimu — seberapa sering pengetahuan luar atau kemasukakalan bocor ke penilaian. Latihan perbaikannya: untuk tiap kesalahan itu, garis bawahi kata-kata bacaan yang dibutuhkan untuk membuktikan pernyataan, dan saksikan bahwa kata itu tidak ada. Sepuluh pengulangan pengamatan itu membangun pengendalian yang diukur tes."
       }
      },
      {
       "h": {
        "en": "Simulation 3 — Logical, timed, then the plan",
        "id": "Simulasi 3 — Logis, berwaktu, lalu rencananya"
       },
       "body": {
        "en": "Run the logical timed set, then write next week's three-line plan: which family, which archetypes, which days. Reveal after writing.",
        "id": "Jalankan set logis berwaktu, lalu tulis rencana tiga baris minggu depan: keluarga mana, arketipe mana, hari apa. Buka setelah menulis."
       },
       "debrief": {
        "en": "A model plan reads: “Numerical is the gate (68% accuracy): drill reverse-percentage and two-table archetypes Tue/Thu/Sat 25 minutes; verbal maintenance one set Sunday; re-simulate all three next Saturday morning.” Specific family, named archetypes, calendar days — compare yours. If any line says “practice more”, it is not yet a plan. Repeat the weekly cycle until your two gate families sit in the high-accuracy, high-completion quadrant; then this stage of the funnel is trained, and your hours belong to the next one.",
        "id": "Rencana model berbunyi: “Numerik adalah gerbangnya (akurasi 68%): latih arketipe persentase-balik dan dua-tabel Sel/Kam/Sab 25 menit; pemeliharaan verbal satu set Minggu; simulasi ulang ketiganya Sabtu pagi depan.” Keluarga spesifik, arketipe bernama, hari kalender — bandingkan milikmu. Jika ada baris berbunyi “latihan lebih banyak”, itu belum rencana. Ulangi siklus mingguan sampai dua keluarga gerbangmu duduk di kuadran akurasi-tinggi penyelesaian-tinggi; saat itu tahap corong ini sudah terlatih, dan jam-jammu milik tahap berikutnya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Your grid: 92% accuracy, 55% completion. The prescribed training focus?",
        "id": "Kisimu: akurasi 92%, penyelesaian 55%. Fokus latihan yang diresepkan?"
       },
       "options": [
        {
         "en": "Technique frameworks — back to the theory deck",
         "id": "Kerangka teknik — kembali ke dek teori"
        },
        {
         "en": "Timed pacing — your method is sound but slow; train the triage rules under a clock",
         "id": "Tempo berwaktu — metodemu benar tapi lambat; latih aturan triase di bawah jam"
        },
        {
         "en": "Switch to a different test family",
         "id": "Pindah ke keluarga tes lain"
        }
       ],
       "correct": 1,
       "why": {
        "en": "High accuracy proves technique; low completion is a pacing problem. Speed work on a correct method — the safe order.",
        "id": "Akurasi tinggi membuktikan teknik; penyelesaian rendah adalah masalah tempo. Kerja kecepatan pada metode yang benar — urutan yang aman."
       }
      }
     ],
     "tool": {
      "id": "gym",
      "mode": "drill",
      "title": {
       "en": "The timed sets are ready",
       "id": "Set berwaktu siap"
      },
      "body": {
       "en": "Numerical, verbal, logical — full simulation conditions, transparent scoring, worked explanations on every question.",
       "id": "Numerik, verbal, logis — kondisi simulasi penuh, penilaian transparan, pembahasan di tiap soal."
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
    "id": "Modul 4 dari The Pack berfokus pada Simulasi Role-Play FGD / LGD. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply fgd / lgd role-play simulations to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Simulasi Role-Play FGD / LGD pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "4.1",
     "title": {
      "en": "Overview of FGD and LGD — What Assessors Are Evaluating",
      "id": "Gambaran Umum FGD dan LGD — Apa yang Dievaluasi Assessor"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "In a group discussion, the topic is a prop. Assessors are not grading your answer to the case; they are scoring observable behaviours against a rubric — and the behaviours that score are learnable by Thursday. This lesson shows you the scoresheet.",
      "id": "Dalam diskusi kelompok, topiknya hanyalah properti panggung. Asesor tidak menilai jawabanmu atas kasus; mereka menskor perilaku teramati terhadap rubrik — dan perilaku yang menghasilkan skor bisa dipelajari sebelum Kamis. Pelajaran ini menunjukkan lembar skornya."
     },
     "objectives": [
      {
       "en": "Distinguish FGD from LGD formats and what each emphasises.",
       "id": "Membedakan format FGD dari LGD dan penekanan masing-masing."
      },
      {
       "en": "List the six scored behaviours and the anti-behaviours that cost points.",
       "id": "Menyebutkan enam perilaku yang diskor dan anti-perilaku yang mengurangi poin."
      },
      {
       "en": "Explain why airtime quantity is scored near zero and airtime quality near everything.",
       "id": "Menjelaskan mengapa kuantitas bicara diskor mendekati nol dan kualitasnya mendekati segalanya."
      }
     ],
     "takeaways": [
      {
       "en": "Assessors track behaviours with tallies: contributions that advance, invitations to others, structure moves, summary moves.",
       "id": "Asesor melacak perilaku dengan turus: kontribusi yang memajukan, ajakan ke orang lain, langkah struktur, langkah rangkuman."
      },
      {
       "en": "Dominating a discussion scores worse than balanced contribution — the loudest candidate is usually the first cut.",
       "id": "Mendominasi diskusi berskor lebih buruk daripada kontribusi seimbang — kandidat paling nyaring biasanya yang pertama dicoret."
      },
      {
       "en": "The scarcest, highest-scoring roles are the ones nobody takes: structurer, includer, summariser.",
       "id": "Peran terlangka dan berskor tertinggi adalah yang tak diambil siapa pun: penstruktur, pengajak, perangkum."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "The format and the fiction",
        "id": "Format dan fiksinya"
       },
       "body": {
        "en": "Six to ten candidates, one case — a business problem, a ranking exercise, a policy debate — twenty to forty minutes, two or three silent assessors with clipboards. In an FGD (focus/free group discussion) no roles are assigned; in an LGD (leaderless group discussion) the absence of a leader is itself the test: assessors watch who creates order without claiming a crown. The fiction candidates believe: that the group must reach the right answer. The reality: groups that reach a mediocre answer through visibly good process outscore groups that stumble into brilliance through chaos.",
        "id": "Enam sampai sepuluh kandidat, satu kasus — masalah bisnis, latihan peringkat, debat kebijakan — dua puluh sampai empat puluh menit, dua-tiga asesor diam dengan papan jalan. Dalam FGD (diskusi kelompok terarah/bebas) tak ada peran ditugaskan; dalam LGD (diskusi kelompok tanpa pemimpin) ketiadaan pemimpin itulah ujiannya: asesor mengamati siapa yang menciptakan keteraturan tanpa merebut mahkota. Fiksi yang dipercaya kandidat: kelompok harus mencapai jawaban benar. Kenyataannya: kelompok yang mencapai jawaban biasa lewat proses yang tampak baik mengungguli kelompok yang tersandung ke kejeniusan lewat kekacauan."
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
        "id": "<b>1 · Kontribusi memajukan:</b> gagasan yang membangun dari keadaan terkini diskusi — bukan pengulangan, bukan penyimpangan. <b>2 · Langkah struktur:</b> mengusulkan agenda, kerangka, pembagian waktu (“kita punya 25 menit — lima definisi, sepuluh gagasan, sepuluh keputusan?”). <b>3 · Langkah inklusi:</b> mengajak anggota pendiam masuk dengan menyebut nama — di antara detik paling bernilai dalam sesi. <b>4 · Pemakaian bukti:</b> angka dari kasus, bukan perasaan. <b>5 · Sintesis:</b> merangkum posisi dan menamai titik temu. <b>6 · Ketenangan:</b> tak setuju tanpa panas, menerima ketidaksetujuan tanpa runtuh. Anti-perilakunya: memotong, mengulang poin sendiri lebih keras, serangan pribadi, diam, dan membajak topik ke pidato siapanmu."
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
        "id": "Asesor menghitung peristiwa berkualitas, bukan menit. Delapan detik kuat — usulan struktur di menit dua, ajakan bernama di menit sepuluh, sintesis di menit dua puluh — mengungguli delapan menit pengisi yang fasih. Ini membalik naluri kebanyakan kandidat: mereka berebut lantai, padahal lantai itu murah dan barang langkanya adalah keteraturan, inklusi, dan titik temu. Target praktis: 4–6 kontribusi berkualitas dalam sesi 30 menit, minimal satu dari masing-masing struktur, inklusi, dan sintesis. Portofolio itu terjangkau bagi kandidat siap mana pun, termasuk introver — sering justru introver, yang intervensinya terbaca sebagai sinyal, bukan derau."
       }
      }
     ],
     "diagram": {
      "type": "quad",
      "exhibit": {
       "en": "Exhibit 1: What assessors tally — and what candidates think they tally.",
       "id": "Peraga 1: Yang diturus asesor — dan yang dikira kandidat diturus."
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
         "id": "Ajakan bernama ke anggota pendiam"
        }
       },
       {
        "h": {
         "en": "Evidence & advance",
         "id": "Bukti & kemajuan"
        },
        "sub": {
         "en": "Case numbers, building on others",
         "id": "Angka kasus, membangun dari yang lain"
        }
       },
       {
        "h": {
         "en": "Synthesis & composure",
         "id": "Sintesis & ketenangan"
        },
        "sub": {
         "en": "Summaries, calm disagreement",
         "id": "Rangkuman, ketidaksetujuan yang tenang"
        }
       }
      ],
      "longdesc": {
       "en": "A four-quadrant scoresheet of tallied behaviours: structure moves such as agendas and time splits; inclusion moves such as inviting quiet members by name; evidence-based contributions that advance the discussion; and synthesis plus composure — summarising convergence and disagreeing calmly.",
       "id": "Lembar skor empat kuadran perilaku yang diturus: langkah struktur seperti agenda dan pembagian waktu; langkah inklusi seperti mengajak anggota pendiam dengan nama; kontribusi berbasis bukti yang memajukan diskusi; dan sintesis plus ketenangan — merangkum titik temu dan berbeda pendapat dengan tenang."
      }
     },
     "checks": [
      {
       "q": {
        "en": "Minute 18 of 30: two candidates are locked in a loud back-and-forth; three members have not spoken. The highest-scoring available move?",
        "id": "Menit 18 dari 30: dua kandidat terkunci dalam adu argumen nyaring; tiga anggota belum bicara. Langkah tersedia dengan skor tertinggi?"
       },
       "options": [
        {
         "en": "Take a side in the argument with a stronger point",
         "id": "Memihak dalam adu argumen dengan poin lebih kuat"
        },
        {
         "en": "Summarise both positions in one line each, then invite a silent member by name to break the tie",
         "id": "Rangkum kedua posisi masing-masing satu baris, lalu ajak anggota diam dengan nama untuk memecah kebuntuan"
        },
        {
         "en": "Stay quiet and let them exhaust themselves",
         "id": "Diam saja dan biarkan mereka kehabisan tenaga"
        }
       ],
       "correct": 1,
       "why": {
        "en": "One move scores three tallies — synthesis, composure, inclusion — and visibly rescues the group's process. Assessors write it down every time.",
        "id": "Satu langkah menghasilkan tiga turus — sintesis, ketenangan, inklusi — dan tampak menyelamatkan proses kelompok. Asesor selalu mencatatnya."
       }
      }
     ],
     "quote": {
      "en": "The topic is a prop. The behaviours are the exam.",
      "id": "Topiknya hanyalah properti panggung. Perilakumu itulah ujiannya."
     }
    },
    {
     "n": "4.2",
     "title": {
      "en": "Preparation Strategies, Frameworks, and Theoretical Concepts",
      "id": "Strategi Persiapan, Kerangka Kerja, dan Konsep Teoritis"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Preparation for a group discussion is not memorising current affairs; it is installing a small set of moves you can execute under noise: an opening framework, contribution templates, recovery lines, and the discipline of the final five minutes.",
      "id": "Persiapan diskusi kelompok bukan menghafal isu terkini; melainkan memasang serangkaian kecil langkah yang bisa kamu eksekusi di tengah kebisingan: kerangka pembuka, templat kontribusi, kalimat pemulihan, dan disiplin lima menit terakhir."
     },
     "objectives": [
      {
       "en": "Deploy the define–split–decide framework on any case in the first two minutes.",
       "id": "Menerapkan kerangka definisi–pecah–putuskan pada kasus apa pun dalam dua menit pertama."
      },
      {
       "en": "Use the four contribution templates: build, bridge, evidence, invite.",
       "id": "Memakai empat templat kontribusi: bangun, jembatani, bukti, ajak."
      },
      {
       "en": "Run the endgame protocol: convergence, decision, and the one-line summary.",
       "id": "Menjalankan protokol akhir: titik temu, keputusan, dan rangkuman satu baris."
      }
     ],
     "takeaways": [
      {
       "en": "The candidate who gives the group a structure in minute one owns the discussion's skeleton without saying another word.",
       "id": "Kandidat yang memberi kelompok struktur di menit pertama memiliki kerangka diskusi tanpa perlu berkata apa-apa lagi."
      },
      {
       "en": "Templates beat improvisation under pressure: build, bridge, evidence, invite cover 90% of good contributions.",
       "id": "Templat mengalahkan improvisasi di bawah tekanan: bangun, jembatani, bukti, ajak mencakup 90% kontribusi baik."
      },
      {
       "en": "Groups are scored down for not concluding — whoever forces a decision in the last five minutes rescues everyone.",
       "id": "Kelompok dinilai turun karena tak menyimpulkan — siapa pun yang mendorong keputusan di lima menit terakhir menyelamatkan semua."
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
        "id": "Apa pun kasusnya, tawaran tiga bagian yang sama berhasil: <b>definisi</b> (“sebelum solusi — apakah kita sepakat apa masalah sebenarnya? Saya membacanya sebagai X”), <b>pecah</b> (“bagaimana kalau lima menit untuk sebab, sepuluh untuk opsi, dan sisakan sepuluh terakhir untuk memutuskan?”), <b>putuskan</b> (“dan sepakati sekarang cara memilih — suara terbanyak, atau kriteria?”). Ditawarkan sebagai pertanyaan, bukan titah — kelompok yang mengadopsinya itulah intinya. Jika orang lain mengusulkan struktur lebih dulu, dukung dengan terlihat dan perbaiki satu detail: pena asesor bergerak untuk kalian berdua. Jangan pernah bertengkar soal kerangka siapa yang menang; pertengkaran proses adalah kekalahan ganda."
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
        "id": "<b>Bangun:</b> “Menambah poin Rina soal biaya — kasus menyebut logistik 40% darinya, jadi idenya menyerang blok terbesar.” <b>Jembatani:</b> “Dimas dan Sari lebih dekat dari kedengarannya: keduanya mengasumsikan anggaran tetap. Jika kita uji itu, ketidaksetujuannya larut.” <b>Bukti:</b> “Dua angka dari kasus menyelesaikan ini: pendapatan turun 12% sementara pasar turun 3% — masalahnya sebagian besar milik kita, bukan pasar.” <b>Ajak:</b> “Bayu, kamu dari tadi membaca peraga — apa kata angka regionalnya?” Tiap templat menyebut orang atau angka: kespesifikan itulah yang memisahkan memajukan dari kebisingan, dan semuanya bisa dipakai berapa pun pengetahuanmu tentang topiknya."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "The endgame protocol",
        "id": "Protokol akhir"
       },
       "body": {
        "en": "At minus-five-minutes, someone must switch the group from exploring to concluding — be that someone: “Five minutes left. I hear agreement on A and B, and an open question on C. Can we commit to A and B, and note C as a condition?” Then, if the format includes a report-out, volunteer the summary or visibly support whoever gives it: one breath, three sentences — the problem, the decision, the main reason. Groups that end mid-argument mark down every member; the person who landed the plane is remembered by name. Rehearse the two sentences of the endgame until they are reflex; they are the highest-scoring twenty seconds available in the format.",
        "id": "Pada lima menit terakhir, seseorang harus mengalihkan kelompok dari menjelajah ke menyimpulkan — jadilah orang itu: “Lima menit lagi. Saya dengar kesepakatan pada A dan B, dan pertanyaan terbuka pada C. Bisakah kita komit ke A dan B, dan catat C sebagai syarat?” Lalu, jika format menyertakan pelaporan, tawarkan diri merangkum atau dukung dengan terlihat siapa pun yang merangkum: satu tarikan napas, tiga kalimat — masalahnya, keputusannya, alasan utamanya. Kelompok yang berakhir di tengah pertengkaran menurunkan nilai semua anggota; orang yang mendaratkan pesawat diingat namanya. Latih dua kalimat protokol akhir sampai refleks; itulah dua puluh detik berskor tertinggi yang tersedia dalam format ini."
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
        "id": "“Itu tidak masuk akal — kamu tak bisa mematikan pemasaran begitu saja, begitulah cara perusahaan mati. Lagi pula, seperti kataku tadi…”"
       },
       "strong": {
        "en": "“Interesting — it would free Rp 2bn. My worry is the case says 60% of new customers come from paid channels, so a full cut risks the top line. Could a 50% cut for one quarter test it more safely? Andi, you raised cash flow — would that cover the gap?”",
        "id": "“Menarik — itu membebaskan Rp 2 M. Kekhawatiranku, kasus menyebut 60% pelanggan baru datang dari kanal berbayar, jadi pemangkasan penuh membahayakan pendapatan. Apakah pemangkasan 50% selama satu kuartal mengujinya lebih aman? Andi, kamu tadi mengangkat arus kas — apakah itu menutup celahnya?”"
       },
       "why": {
        "en": "The strong version credits the idea, brings a case number, offers a testable middle, and hands the floor onward — four tallies in one turn, zero heat.",
        "id": "Versi kuat menghargai ide, membawa angka kasus, menawarkan jalan tengah teruji, dan mengoper lantai — empat turus dalam satu giliran, nol panas."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Someone else proposed a solid framework in minute one. Your best response?",
        "id": "Orang lain mengusulkan kerangka solid di menit pertama. Respons terbaikmu?"
       },
       "options": [
        {
         "en": "Propose a better framework so assessors see yours",
         "id": "Usulkan kerangka lebih baik agar asesor melihat milikmu"
        },
        {
         "en": "Second it aloud and add one improvement — e.g. reserving the last five minutes for the decision",
         "id": "Dukung dengan lantang dan tambahkan satu perbaikan — mis. menyisakan lima menit terakhir untuk keputusan"
        },
        {
         "en": "Ignore process and score points on content instead",
         "id": "Abaikan proses dan cari poin lewat konten saja"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Competing frameworks read as ego; visible support plus an improvement reads as collaboration and still tallies as a structure move.",
        "id": "Kerangka yang bersaing terbaca sebagai ego; dukungan terlihat plus perbaikan terbaca sebagai kolaborasi dan tetap terhitung langkah struktur."
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
       "id": "Enam ronde terskrip melawan tiga persona — dominator, pemegang data yang tenggelam, pelantur. Tiap pilihan dinilai terhadap fungsi asesor dari modul ini."
      },
      "cta": {
       "en": "Enter the FGD room →",
       "id": "Masuk ruang FGD →"
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
      "id": "Sesi latihan penuh: satu kasus, lima titik keputusan berwaktu, masing-masing menanyakan apa yang akan kamu lakukan saat itu — dengan pembahasan dari sudut pandang asesor. Lalu protokol berlatih dengan manusia sungguhan."
     },
     "objectives": [
      {
       "en": "Navigate five live decision points of a realistic FGD case.",
       "id": "Menavigasi lima titik keputusan langsung dari kasus FGD realistis."
      },
      {
       "en": "Practise the templates under simulated social pressure.",
       "id": "Melatih templat di bawah tekanan sosial tersimulasi."
      },
      {
       "en": "Set up a peer practice loop with rotating assessor roles.",
       "id": "Menyiapkan putaran latihan rekan dengan peran asesor bergilir."
      }
     ],
     "takeaways": [
      {
       "en": "Every decision point has a highest-tally move — and it is almost never the loudest one.",
       "id": "Setiap titik keputusan punya langkah turus tertinggi — dan hampir tak pernah yang paling nyaring."
      },
      {
       "en": "Social pressure shrinks your repertoire to what you rehearsed; rehearse the templates aloud.",
       "id": "Tekanan sosial menyusutkan repertoarmu ke yang sudah kamu latih; latih templat dengan bersuara."
      },
      {
       "en": "Three peer mocks with honest tallies teach more than thirty articles about FGDs.",
       "id": "Tiga latihan rekan dengan turus jujur mengajarkan lebih dari tiga puluh artikel tentang FGD."
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
        "id": "Kamu satu dari delapan kandidat. Kasus: operator kantin universitas menjalankan 12 gerai; pendapatan stagnan, tiga gerai merugi, mahasiswa mengeluhkan antrean di jam sibuk sementara kapasitas di luar jam sibuk menganggur. Kelompok harus mengusulkan rencana pemulihan dalam 30 menit. Asesor: dua, diam, di belakang ruangan. Kerjakan tiap titik keputusan di bawah seolah langsung — tetapkan langkahmu sebelum membuka pandangan asesor."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Minute 0 — Eight silent people",
        "id": "Menit 0 — Delapan orang diam"
       },
       "body": {
        "en": "The moderator says “begin” and the table goes quiet. Nobody wants to be first. Your move?",
        "id": "Moderator berkata “mulai” dan meja hening. Tak ada yang mau pertama. Langkahmu?"
       },
       "debrief": {
        "en": "Open with structure, not brilliance: “Shall we spend two minutes agreeing the problem, ten on causes and options, and keep the last eight to decide and summarise? And maybe someone tracks time?” First-mover structure earns the session's cheapest tally, and asking for a timekeeper creates a role without claiming one. What not to do: open with your solution — a solution before a shared definition invites the first fight.",
        "id": "Buka dengan struktur, bukan kecemerlangan: “Bagaimana kalau dua menit menyepakati masalah, sepuluh untuk sebab dan opsi, dan sisakan delapan terakhir untuk memutuskan dan merangkum? Dan mungkin ada yang menjaga waktu?” Struktur penggerak-pertama meraih turus termurah sesi itu, dan meminta penjaga waktu menciptakan peran tanpa merebutnya. Yang jangan dilakukan: membuka dengan solusimu — solusi sebelum definisi bersama mengundang pertengkaran pertama."
       }
      },
      {
       "h": {
        "en": "Minute 6 — The dominator",
        "id": "Menit 6 — Sang dominator"
       },
       "body": {
        "en": "One candidate has spoken four minutes straight, repeating that “closing the three losing outlets is obvious”. Others exchange glances. Your move?",
        "id": "Satu kandidat sudah bicara empat menit tanpa henti, mengulang bahwa “menutup tiga gerai merugi itu jelas”. Yang lain saling pandang. Langkahmu?"
       },
       "debrief": {
        "en": "Bridge plus evidence plus redirect, without confronting: “Closing them is one option — before we commit, the case says those three serve the night classes; do we know if the loss is the outlets or their hours? Maya, you flagged the queue data — does it say anything about timing?” You honoured the point, introduced the case's complicating number, and moved the floor. Assessors tally you for evidence and inclusion; the dominator's repetitions tally as one contribution, not five.",
        "id": "Jembatani plus bukti plus alihkan, tanpa konfrontasi: “Menutupnya satu opsi — sebelum kita komit, kasus menyebut tiga gerai itu melayani kelas malam; tahukah kita apakah ruginya di gerai atau di jamnya? Maya, kamu tadi menyinggung data antrean — adakah kaitannya dengan waktu?” Kamu menghormati poinnya, memasukkan angka penyulit dari kasus, dan memindahkan lantai. Asesor menurusmu untuk bukti dan inklusi; pengulangan sang dominator terhitung satu kontribusi, bukan lima."
       }
      },
      {
       "h": {
        "en": "Minute 14 — Your idea gets dismissed",
        "id": "Menit 14 — Idemu ditolak"
       },
       "body": {
        "en": "You propose staggered class-break schedules to flatten peak queues. A candidate waves it off: “Too complicated, universities never agree to that.” Two others nod. Your move?",
        "id": "Kamu mengusulkan jadwal istirahat kelas berjenjang untuk meratakan antrean puncak. Seorang kandidat menepisnya: “Terlalu rumit, universitas tak akan pernah setuju.” Dua lainnya mengangguk. Langkahmu?"
       },
       "debrief": {
        "en": "One calm defence with evidence, then release: “Fair concern. The case does say the faculty already staggers exam schedules, so the mechanism exists — but if the group prefers operational fixes first, I'm with that; can we park scheduling as a phase-two idea?” You showed composure (the actual thing being tested when your idea is attacked), grounded it once, and traded it gracefully. Candidates who die defending small hills lose the composure tally; candidates who fold instantly lose the conviction tally. One defence, then flexibility, banks both.",
        "id": "Satu pembelaan tenang dengan bukti, lalu lepaskan: “Kekhawatiran yang wajar. Kasus menyebut fakultas sudah menjenjangkan jadwal ujian, jadi mekanismenya ada — tapi jika kelompok memilih perbaikan operasional dulu, saya ikut; bisakah penjadwalan diparkir sebagai ide fase dua?” Kamu menunjukkan ketenangan (hal sebenarnya yang diuji saat idemu diserang), menjejakkannya sekali, dan menukarnya dengan anggun. Kandidat yang mati membela bukit kecil kehilangan turus ketenangan; yang langsung melipat kehilangan turus keyakinan. Satu pembelaan, lalu fleksibilitas, mengamankan keduanya."
       }
      },
      {
       "h": {
        "en": "Minute 22 — The quiet expert",
        "id": "Menit 22 — Ahli yang pendiam"
       },
       "body": {
        "en": "A candidate who mentioned working part-time in food service has said nothing for ten minutes. The group is debating kitchen capacity in circles. Your move?",
        "id": "Seorang kandidat yang tadi menyebut kerja paruh waktu di layanan makanan sudah sepuluh menit diam. Kelompok berdebat kapasitas dapur berputar-putar. Langkahmu?"
       },
       "debrief": {
        "en": "The named invitation, with context: “Sari, you've actually worked in food service — from what you saw, is the bottleneck kitchen capacity or counter service?” This is the single highest-value tally available: it visibly improves the group's information, rescues a silent member, and costs you six seconds. If her answer is good, build on it and credit her again — assessors specifically watch whether inviters honour the answers they invited.",
        "id": "Ajakan bernama, dengan konteks: “Sari, kamu pernah kerja di layanan makanan — dari yang kamu lihat, apakah lehernya di kapasitas dapur atau layanan konter?” Ini turus bernilai tertinggi yang tersedia: ia tampak memperbaiki informasi kelompok, menyelamatkan anggota diam, dan hanya memakan enam detikmu. Jika jawabannya bagus, bangun darinya dan hargai dia lagi — asesor khusus mengamati apakah pengajak menghormati jawaban yang diundangnya."
       }
      },
      {
       "h": {
        "en": "Minute 25 — Nobody is landing the plane",
        "id": "Menit 25 — Tak ada yang mendaratkan pesawat"
       },
       "body": {
        "en": "Five minutes left; the group has four half-agreed ideas and no decision. Your move — script it, then reveal.",
        "id": "Lima menit tersisa; kelompok punya empat ide setengah-sepakat dan belum ada keputusan. Langkahmu — skripkan, lalu buka."
       },
       "debrief": {
        "en": "The endgame protocol verbatim: “Five minutes left — may I try to land us? I hear agreement on extending peak-hour counters and piloting one outlet conversion; scheduling and closures stay phase-two pending data. If we agree, who wants to give the summary — or I can.” Then the three-sentence report if it falls to you: problem, decision, main reason. This move alone reverses a failing session for the whole group — and assessors know exactly one person made it happen.",
        "id": "Protokol akhir kata demi kata: “Lima menit lagi — boleh saya coba mendaratkan kita? Saya dengar kesepakatan memperpanjang konter jam sibuk dan uji coba konversi satu gerai; penjadwalan dan penutupan jadi fase dua menunggu data. Jika sepakat, siapa mau merangkum — atau saya bisa.” Lalu laporan tiga kalimat jika jatuh padamu: masalah, keputusan, alasan utama. Langkah ini sendirian membalikkan sesi yang gagal bagi seluruh kelompok — dan asesor tahu persis satu orang yang mewujudkannya."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Preparing content, not moves",
         "id": "Menyiapkan konten, bukan langkah"
        },
        "fix": {
         "en": "You cannot predict the case; you can fully predict the moments — silence, dominator, dismissal, endgame. Rehearse the moves.",
         "id": "Kamu tak bisa menebak kasus; kamu bisa sepenuhnya menebak momennya — hening, dominator, penolakan, akhir. Latih langkahnya."
        }
       },
       {
        "h": {
         "en": "Practising alone",
         "id": "Berlatih sendirian"
        },
        "fix": {
         "en": "Social pressure is the test. Three peers, one case from this module, rotating assessor with the six-behaviour tally sheet, 30 minutes plus 15 of feedback.",
         "id": "Tekanan sosial adalah ujiannya. Tiga rekan, satu kasus dari modul ini, asesor bergilir dengan lembar turus enam perilaku, 30 menit plus 15 umpan balik."
        }
       },
       {
        "h": {
         "en": "Reviewing the feeling, not the tally",
         "id": "Meninjau perasaan, bukan turus"
        },
        "fix": {
         "en": "“It went okay” teaches nothing. Count your structure, inclusion, evidence and synthesis moves per session; raise the smallest count next time.",
         "id": "“Tadi lumayan” tak mengajarkan apa pun. Hitung langkah struktur, inklusi, bukti, dan sintesismu per sesi; naikkan hitungan terkecil di sesi berikut."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "Why does one calm defence followed by graceful release beat both instant folding and repeated defence?",
        "id": "Mengapa satu pembelaan tenang lalu pelepasan anggun mengalahkan langsung melipat maupun pembelaan berulang?"
       },
       "options": [
        {
         "en": "Because it takes the least time",
         "id": "Karena paling hemat waktu"
        },
        {
         "en": "Because it evidences both conviction and flexibility — the two tallies the dismissal moment tests",
         "id": "Karena ia membuktikan keyakinan sekaligus fleksibilitas — dua turus yang diuji momen penolakan"
        },
        {
         "en": "Because assessors dislike all disagreement",
         "id": "Karena asesor tak suka semua ketidaksetujuan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The attacked-idea moment is a composure probe: fold instantly and you show no spine; defend forever and you show no ears. One grounded defence, then flexibility, shows both.",
        "id": "Momen ide diserang adalah uji ketenangan: langsung melipat berarti tanpa tulang punggung; membela selamanya berarti tanpa telinga. Satu pembelaan berdasar, lalu fleksibilitas, menunjukkan keduanya."
       }
      }
     ],
     "tool": {
      "id": "studio",
      "mode": "fgd",
      "title": {
       "en": "Run the mock session",
       "id": "Jalankan sesi simulasi"
      },
      "body": {
       "en": "Warm up in the scripted round, note which assessor functions you missed, then stage the live mock this lesson describes with friends — and record it.",
       "id": "Pemanasan di ronde terskrip, catat fungsi asesor yang terlewat, lalu gelar simulasi langsung yang dijelaskan pelajaran ini bersama teman — dan rekam."
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
    "id": "Strategi Lamaran Magang dan Penuh Waktu"
   },
   "overview": {
    "en": "Module 5 of The Pack focuses on internship and full-time application strategy. Work through the lessons in order — each builds on the last.",
    "id": "Modul 5 dari The Pack berfokus pada Strategi Lamaran Magang dan Penuh Waktu. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply internship and full-time application strategy to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Strategi Lamaran Magang dan Penuh Waktu pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "5.1",
     "title": {
      "en": "Overview of Internship and Graduate Recruitment Programmes",
      "id": "Gambaran Umum Program Rekrutmen Magang dan Sarjana"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Internships and graduate programmes run on a different calendar and a different logic from regular vacancies. Miss the windows and no amount of quality helps; understand the machine and even average applications land. This lesson maps the programme landscape.",
      "id": "Magang dan program lulusan berjalan dengan kalender dan logika berbeda dari lowongan reguler. Lewatkan jendelanya dan mutu setinggi apa pun tak menolong; pahami mesinnya dan lamaran rata-rata pun mendarat. Pelajaran ini memetakan lanskap program."
     },
     "objectives": [
      {
       "en": "Map the annual recruiting calendar for internships and graduate programmes.",
       "id": "Memetakan kalender rekrutmen tahunan magang dan program lulusan."
      },
      {
       "en": "Distinguish programme types and what each is really hiring for.",
       "id": "Membedakan jenis program dan apa yang sebenarnya direkrut masing-masing."
      },
      {
       "en": "Position internships as conversion machines: most graduate offers go to former interns.",
       "id": "Memposisikan magang sebagai mesin konversi: sebagian besar tawaran lulusan jatuh ke mantan magang."
      }
     ],
     "takeaways": [
      {
       "en": "Programme recruiting opens months before start dates — the calendar is the first filter, and it filters the unaware.",
       "id": "Rekrutmen program dibuka berbulan-bulan sebelum tanggal mulai — kalender adalah penyaring pertama, dan ia menyaring yang tak sadar."
      },
      {
       "en": "An internship is a 10-week interview: conversion to a full-time offer is its real product.",
       "id": "Magang adalah wawancara 10 minggu: konversi ke tawaran penuh waktu adalah produk sejatinya."
      },
      {
       "en": "Structured programmes hire for trainability and evidence of drive — not for finished expertise.",
       "id": "Program terstruktur merekrut untuk kemampuan dilatih dan bukti dorongan — bukan keahlian jadi."
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
        "id": "Pemberi kerja besar merencanakan asupan setahun di muka. Ritme khas korporat Indonesia dan regional: <b>program lulusan</b> (management trainee, pengembangan officer) membuka lamaran kira-kira enam sampai sembilan bulan sebelum kohort mulai, sering dua kali setahun; <b>magang terstruktur</b> merekrut satu semester di muka, dengan asupan musim panas teknologi besar dan perbankan buka lebih awal lagi; <b>magang di luar siklus</b> di startup berjalan terus tetapi cepat terisi lewat referal. Aturan operasional: di tahun kedua-terakhirmu, daftar jendela tipikal tiap program target di kalendermu sekarang — dari halaman perusahaan The Range dan situs karier pemberi kerja — karena menemukan jendela setelah tertutup adalah penolakan akibat-sendiri yang paling umum."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "What programmes hire for",
        "id": "Yang direkrut program"
       },
       "body": {
        "en": "A graduate programme is an investment product: the employer buys two years of training cost expecting a decade of return. So selection optimises for <b>trainability</b> (aptitude scores, learning stories), <b>drive</b> (evidence you finish hard things without supervision), and <b>stay probability</b> (informed interest in this industry, this company — not “any job please”). Finished expertise ranks last; they will train you. This inverts what students emphasise: a candidate who says “I ran three failed experiments before the fourth worked” beats one who lists certifications, because the programme is buying the persistence, not the certificate.",
        "id": "Program lulusan adalah produk investasi: pemberi kerja membeli dua tahun biaya pelatihan sambil mengharapkan imbal hasil satu dekade. Maka seleksi mengoptimalkan <b>kemampuan dilatih</b> (skor bakat, kisah belajar), <b>dorongan</b> (bukti kamu menyelesaikan hal sulit tanpa pengawasan), dan <b>probabilitas bertahan</b> (minat terinformasi pada industri ini, perusahaan ini — bukan “pekerjaan apa saja”). Keahlian jadi peringkat terakhir; mereka akan melatihmu. Ini membalik yang ditekankan mahasiswa: kandidat yang berkata “aku menjalankan tiga eksperimen gagal sebelum yang keempat berhasil” mengalahkan yang mendaftar sertifikasi, karena program membeli kegigihannya, bukan sertifikatnya."
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
        "id": "Di pemberi kerja dengan program magang terstruktur, porsi besar tawaran lulusan jatuh ke magang yang kembali — magang adalah wawancaranya, sepanjang sepuluh minggu, dengan derau performa wawancara digantikan kerja yang teramati. Strateginya mengikuti: prioritaskan magang di perusahaan yang tawaran lulusannya akan kamu terima; perlakukan minggu satu sampai sepuluh sebagai satu evaluasi berkelanjutan (deliver, minta umpan balik di titik tengah, permudah hidup manajermu); dan di dua minggu terakhir, tanyakan eksplisit jalur konversi — “apa yang membuat tawaran kembali menjadi mungkin?” adalah pertanyaan profesional yang memang diharapkan dari magang. Magang yang terkonversi menghapus seluruh corong lamaran lulusan."
       }
      }
     ],
     "diagram": {
      "type": "timeline",
      "exhibit": {
       "en": "Exhibit 1: A second-to-last-year student's programme calendar.",
       "id": "Peraga 1: Kalender program mahasiswa tahun kedua-terakhir."
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
         "id": "Daftar target + jendela; bangun bukti CV"
        }
       },
       {
        "h": {
         "en": "Sem 2",
         "id": "Sem 2"
        },
        "sub": {
         "en": "Summer/structured internship applications",
         "id": "Lamaran magang musim panas/terstruktur"
        }
       },
       {
        "h": {
         "en": "Break",
         "id": "Libur"
        },
        "sub": {
         "en": "The internship — a 10-week interview",
         "id": "Magangnya — wawancara 10 minggu"
        }
       },
       {
        "h": {
         "en": "Final year",
         "id": "Tahun akhir"
        },
        "sub": {
         "en": "Graduate programme windows + conversion talks",
         "id": "Jendela program lulusan + pembicaraan konversi"
        }
       }
      ],
      "longdesc": {
       "en": "A four-phase timeline: first semester of the second-to-last year for listing target programmes and their windows while building CV evidence; second semester for structured internship applications; the long break for the internship itself, treated as a ten-week interview; final year for graduate programme windows and internship conversion conversations.",
       "id": "Garis waktu empat fase: semester pertama tahun kedua-terakhir untuk mendaftar program target dan jendelanya sambil membangun bukti CV; semester dua untuk lamaran magang terstruktur; libur panjang untuk magangnya sendiri, diperlakukan sebagai wawancara sepuluh minggu; tahun akhir untuk jendela program lulusan dan pembicaraan konversi magang."
      }
     },
     "checks": [
      {
       "q": {
        "en": "Why does a converted internship beat any application strategy?",
        "id": "Mengapa magang terkonversi mengalahkan strategi lamaran mana pun?"
       },
       "options": [
        {
         "en": "Interns are paid less, so offers come easier",
         "id": "Magang digaji lebih rendah, jadi tawaran lebih mudah"
        },
        {
         "en": "Ten weeks of observed work replaces the entire noisy screening funnel with real evidence",
         "id": "Sepuluh minggu kerja teramati menggantikan seluruh corong penyaringan yang berderau dengan bukti nyata"
        },
        {
         "en": "Companies are contractually obliged to hire interns",
         "id": "Perusahaan terikat kontrak untuk merekrut magang"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Every funnel stage exists to approximate what an internship measures directly. The intern skips the approximation.",
        "id": "Setiap tahap corong ada untuk mengaproksimasi yang diukur langsung oleh magang. Sang magang melewati aproksimasinya."
       }
      }
     ],
     "quote": {
      "en": "The calendar is the first filter — and it filters the unaware.",
      "id": "Kalender adalah penyaring pertama — dan ia menyaring yang tak sadar."
     }
    },
    {
     "n": "5.2",
     "title": {
      "en": "Preparation and Application Strategies for Internship Roles",
      "id": "Strategi Persiapan dan Lamaran untuk Peran Magang"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Internship applications fail on three predictable fronts: thin evidence, wrong targets, and invisible effort. This lesson runs the counter-strategy — building an evidence base before you have experience, targeting where you can actually win, and converting the internship itself.",
      "id": "Lamaran magang gagal di tiga front yang bisa ditebak: bukti tipis, target salah, dan usaha tak terlihat. Pelajaran ini menjalankan strategi lawannya — membangun basis bukti sebelum punya pengalaman, menarget tempat kamu benar-benar bisa menang, dan mengonversi magangnya sendiri."
     },
     "objectives": [
      {
       "en": "Build pre-experience evidence: projects, competitions, and micro-work that CVs can carry.",
       "id": "Membangun bukti pra-pengalaman: proyek, kompetisi, dan kerja mikro yang bisa dibawa CV."
      },
      {
       "en": "Target internships with a realistic win-probability portfolio.",
       "id": "Menarget magang dengan portofolio probabilitas-menang yang realistis."
      },
      {
       "en": "Run the internship itself as a conversion campaign, week by week.",
       "id": "Menjalankan magangnya sendiri sebagai kampanye konversi, minggu demi minggu."
      }
     ],
     "takeaways": [
      {
       "en": "“No experience” is a solvable problem: projects are experience you assign yourself.",
       "id": "“Belum berpengalaman” adalah masalah terpecahkan: proyek adalah pengalaman yang kamu tugaskan sendiri."
      },
      {
       "en": "Apply where the evidence you have matches what they screen for — prestige alone is a bad targeting criterion.",
       "id": "Lamar ke tempat bukti yang kamu punya cocok dengan yang mereka saring — prestise semata adalah kriteria penargetan yang buruk."
      },
      {
       "en": "Conversion is won in weeks 3–8: visible delivery, midpoint feedback, and a manager whose life you made easier.",
       "id": "Konversi dimenangkan di minggu 3–8: pengiriman terlihat, umpan balik titik tengah, dan manajer yang hidupnya kamu permudah."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "Manufacturing evidence before experience",
        "id": "Memproduksi bukti sebelum pengalaman"
       },
       "body": {
        "en": "The internship paradox — need experience to get the internship that gives experience — dissolves once you notice what screeners actually accept as evidence: <b>self-assigned projects</b> (analyse a public dataset, build a tool, redesign a real organisation's process — with results, per Module 2's bullet formula); <b>competitions</b> (case competitions, olympiads, hackathons — structured, dated, ranked evidence); <b>micro-work</b> (freelance gigs, family-business projects, organisation roles run with professional discipline). One semester of deliberate evidence-building — one project, one competition, one org result — outfits a CV better than a lucky unstructured internship. The Map's Module 6 industry tracks are designed as first projects.",
        "id": "Paradoks magang — butuh pengalaman untuk mendapat magang yang memberi pengalaman — larut begitu kamu melihat apa yang sebenarnya diterima penyaring sebagai bukti: <b>proyek yang ditugaskan sendiri</b> (analisis dataset publik, bangun alat, rancang ulang proses organisasi nyata — dengan hasil, sesuai formula butir Modul 2); <b>kompetisi</b> (kompetisi kasus, olimpiade, hackathon — bukti terstruktur, bertanggal, berperingkat); <b>kerja mikro</b> (pekerjaan lepas, proyek bisnis keluarga, peran organisasi yang dijalankan dengan disiplin profesional). Satu semester membangun bukti dengan sengaja — satu proyek, satu kompetisi, satu hasil organisasi — memperlengkapi CV lebih baik daripada magang tak terstruktur yang kebetulan. Jalur industri Modul 6 The Map dirancang sebagai proyek pertama."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Targeting where you can win",
        "id": "Menarget tempat kamu bisa menang"
       },
       "body": {
        "en": "Apply the tiered portfolio from 1.3, adjusted for internships: a few reach programmes (the famous names, where referrals and early applications matter most), a core of match programmes (mid-size firms and growing startups whose screening emphasises the evidence you actually have), and foundation options (small companies and labs where a well-written cold email — Module 4.3 of The Map — often creates an internship that was never posted). The neglected goldmine is that last tier: smaller organisations give interns real scope, and real scope is what converts into CV lines the next application cycle buys.",
        "id": "Terapkan portofolio bertingkat dari 1.3, disesuaikan untuk magang: sedikit program jangkauan (nama tenar, tempat referal dan lamaran dini paling berarti), inti program sepadan (firma menengah dan startup bertumbuh yang penyaringannya menekankan bukti yang benar-benar kamu punya), dan opsi fondasi (perusahaan kecil dan lab tempat email dingin yang ditulis baik — Modul 4.3 The Map — sering menciptakan magang yang tak pernah ditayangkan). Tambang emas terabaikan adalah tingkat terakhir: organisasi kecil memberi magang lingkup nyata, dan lingkup nyata itulah yang terkonversi menjadi baris CV yang dibeli siklus lamaran berikutnya."
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
        "id": "Minggu 1–2: pelajari hambatan nyata tim; tulis bagaimana manajermu diukur. Minggu 3–6: kirimkan sesuatu yang utuh dan terlihat — kecil dan selesai mengalahkan besar dan macet; kirim satu-baris tiap Jumat (“rilis X, berikutnya Y, terhambat Z”) yang membuat kerjamu terbaca. Titik tengah: minta umpan balik sungguhan — “apa yang membuat paruh kedua lebih bernilai?” — dan tindaklanjuti secara teramati, yang lebih langka dan lebih mengesankan daripada langsung benar semuanya. Minggu 8–10: tuntaskan artefak, dokumentasikan serah terima, dan ajukan pertanyaan konversi. Tiap langkah adalah Modul 2 The Route dalam miniatur: performa plus keterbacaan, dimainkan dengan jujur."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "You have no internship history and two months before applications open. Highest-leverage use of the time?",
        "id": "Kamu belum punya riwayat magang dan dua bulan sebelum lamaran dibuka. Pemakaian waktu berdaya ungkit tertinggi?"
       },
       "options": [
        {
         "en": "Collect three online certificates in trending tools",
         "id": "Kumpulkan tiga sertifikat daring alat yang sedang tren"
        },
        {
         "en": "Complete one self-assigned project with measurable results and write it into CV bullets",
         "id": "Selesaikan satu proyek tugasan-sendiri dengan hasil terukur dan tulis menjadi butir CV"
        },
        {
         "en": "Perfect your CV template's visual design",
         "id": "Sempurnakan desain visual templat CV-mu"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Screeners buy evidence of work, and a completed project with numbers is exactly that; certificates say attended, artefacts say can.",
        "id": "Penyaring membeli bukti kerja, dan proyek selesai dengan angka adalah persis itu; sertifikat bilang hadir, artefak bilang bisa."
       }
      }
     ]
    },
    {
     "n": "5.3",
     "title": {
      "en": "Full-Time Application Strategy — Targeting, Timing, and Positioning",
      "id": "Strategi Lamaran Penuh Waktu — Penargetan, Waktu, dan Positioning"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Full-time strategy is portfolio management under a deadline: which roles, which companies, in which order, with which story. This lesson assembles the campaign — targeting, timing, positioning — for the final-year student and fresh graduate.",
      "id": "Strategi penuh waktu adalah manajemen portofolio di bawah tenggat: peran mana, perusahaan mana, urutan apa, dengan kisah apa. Pelajaran ini merakit kampanyenya — penargetan, waktu, positioning — untuk mahasiswa tahun akhir dan lulusan baru."
     },
     "objectives": [
      {
       "en": "Define a coherent target: role family × industry × company stage.",
       "id": "Mendefinisikan target koheren: keluarga peran × industri × tahap perusahaan."
      },
      {
       "en": "Sequence applications so practice precedes priority.",
       "id": "Mengurutkan lamaran agar latihan mendahului prioritas."
      },
      {
       "en": "Position one story across CV, letter and interviews: why this, why me, why now.",
       "id": "Memposisikan satu kisah lintas CV, surat, dan wawancara: mengapa ini, mengapa aku, mengapa sekarang."
      }
     ],
     "takeaways": [
      {
       "en": "A coherent target multiplies every artefact: one story serves twenty applications.",
       "id": "Target koheren menggandakan tiap artefak: satu kisah melayani dua puluh lamaran."
      },
      {
       "en": "Sequence foundation-tier first: your fifth interview is measurably better than your first — spend the early ones wisely.",
       "id": "Urutkan tingkat fondasi dulu: wawancara kelimamu terukur lebih baik dari yang pertama — belanjakan yang awal dengan bijak."
      },
      {
       "en": "Positioning is one sentence: for [role family], I bring [evidence], and I'm here because [informed reason].",
       "id": "Positioning adalah satu kalimat: untuk [keluarga peran], aku membawa [bukti], dan aku di sini karena [alasan terinformasi]."
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
        "id": "The Range menjawab arah; pelajaran ini mengoperasikannya. Definisikan target utama sebagai <b>keluarga peran</b> (peran analis, bukan “apa saja di bisnis”) × <b>industri</b> (dua-tiga, dari eksplorasi Range dan simulasi Map-mu) × <b>tahap perusahaan</b> (program korporat, startup bertumbuh, UKM — penyaringan berbeda, hari pertama berbeda). Tambah satu target sekunder berdampingan yang berbagi basis bukti sama. Semua di luar keduanya: tolak secara default, lamar sebagai pengecualian. Ujian koherensi: bisakah satu CV induk, satu kerangka surat, dan satu bank kisah wawancara melayani seluruh portofolio? Jika lamaran butuh kisah yang sama sekali berbeda, target tidak koheren dan tiap lamaran mulai dari nol."
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
        "id": "Keterampilan wawancara menggandakan diri dalam satu pencarian: tempo, penyampaian kisah, dan percakapan gaji semuanya membaik dengan pengulangan langsung. Maka urutkan dengan sengaja: buka dengan lamaran tingkat fondasi untuk menabung latihan dini saat taruhannya rendah; taruh lamaran tingkat sepadan di tengah; jadwalkan kiriman tingkat jangkauan saat putaran wawancaramu hangat — sambil menghormati jendela tetap mereka (kalender 5.1 mengalahkan preferensi; program jangkauan yang tutup lebih awal dilamar lebih awal, siap atau tidak, karena jendela tertutup berskor nol). Lacak semuanya di pelacak Gym; tinjau urutan bulanan seiring data masuk."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "Positioning: one story, three answers",
        "id": "Positioning: satu kisah, tiga jawaban"
       },
       "body": {
        "en": "Every artefact in the campaign answers the same three questions. <b>Why this role family:</b> an informed reason with contact evidence — “the Map simulations and my thesis both pulled me toward analytical work” beats “I am passionate about data”. <b>Why me:</b> your two or three strongest evidence lines, the same ones leading the CV. <b>Why now / why us:</b> the company-specific fact (2.4's paragraph three) plus your availability. Write the three answers once, one paragraph each; every letter, application form and interview opener then becomes an arrangement of sentences you already own. Consistency across artefacts is itself a signal — screeners at later stages reread what earlier stages saw.",
        "id": "Setiap artefak dalam kampanye menjawab tiga pertanyaan yang sama. <b>Mengapa keluarga peran ini:</b> alasan terinformasi dengan bukti kontak — “simulasi Map dan skripsiku sama-sama menarikku ke kerja analitis” mengalahkan “aku bersemangat pada data”. <b>Mengapa aku:</b> dua-tiga baris bukti terkuatmu, yang sama dengan yang memimpin CV. <b>Mengapa sekarang / mengapa kalian:</b> fakta spesifik perusahaan (paragraf tiga 2.4) plus ketersediaanmu. Tulis tiga jawaban itu sekali, masing-masing satu paragraf; tiap surat, formulir lamaran, dan pembuka wawancara kemudian menjadi susunan kalimat yang sudah kamu miliki. Konsistensi lintas artefak adalah sinyal tersendiri — penyaring tahap lanjut membaca ulang yang dilihat tahap awal."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why do foundation-tier applications go first in the sequence?",
        "id": "Mengapa lamaran tingkat fondasi lebih dulu dalam urutan?"
       },
       "options": [
        {
         "en": "They are easier to win, boosting confidence",
         "id": "Mereka lebih mudah dimenangkan, menaikkan kepercayaan diri"
        },
        {
         "en": "Interview skill compounds with repetitions — early low-stakes rounds warm you up for the applications that matter most",
         "id": "Keterampilan wawancara menggandakan diri lewat pengulangan — ronde awal bertaruhan rendah memanaskanmu untuk lamaran yang paling penting"
        },
        {
         "en": "Foundation companies have shorter processes",
         "id": "Perusahaan fondasi prosesnya lebih pendek"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Your fifth interview is materially better than your first. Sequencing spends the clumsy repetitions where they cost least — subject always to fixed windows.",
        "id": "Wawancara kelimamu jauh lebih baik dari yang pertama. Pengurutan membelanjakan pengulangan canggung di tempat biayanya termurah — selalu tunduk pada jendela tetap."
       }
      }
     ]
    },
    {
     "n": "5.4",
     "title": {
      "en": "Mindset and Career Planning — Navigating Early Career Decisions",
      "id": "Pola Pikir dan Perencanaan Karier — Menavigasi Keputusan Karier Awal"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "Early-career decisions arrive as dilemmas: offer in hand versus process still running, prestige versus scope, salary versus learning. This lesson installs a decision protocol and drills it on the three dilemmas most graduates actually face.",
      "id": "Keputusan awal karier datang sebagai dilema: tawaran di tangan versus proses masih berjalan, prestise versus lingkup, gaji versus pembelajaran. Pelajaran ini memasang protokol keputusan dan melatihnya pada tiga dilema yang paling sering dihadapi lulusan."
     },
     "objectives": [
      {
       "en": "Apply the two-lens test: 3-year outcome fit and reversibility.",
       "id": "Menerapkan uji dua lensa: kecocokan hasil 3 tahun dan keterbalikan."
      },
      {
       "en": "Handle exploding offers and parallel processes honestly.",
       "id": "Menangani tawaran meledak dan proses paralel dengan jujur."
      },
      {
       "en": "Reframe first-job choice as trajectory choice, not destination choice.",
       "id": "Membingkai ulang pilihan kerja pertama sebagai pilihan trajektori, bukan destinasi."
      }
     ],
     "takeaways": [
      {
       "en": "First jobs are rarely destinations; they are launch angles — judge them by the trajectory they open.",
       "id": "Pekerjaan pertama jarang menjadi destinasi; ia sudut peluncuran — nilai dari trajektori yang dibukanya."
      },
      {
       "en": "Most early decisions are more reversible than they feel; the truly one-way doors deserve the deliberation.",
       "id": "Sebagian besar keputusan awal lebih bisa dibalik dari rasanya; pintu satu-arah sejatilah yang layak mendapat pertimbangan."
      },
      {
       "en": "Honesty with employers about timelines is both ethical and strategically sound — games collapse careers early.",
       "id": "Kejujuran soal lini waktu kepada pemberi kerja itu etis sekaligus strategis — permainan menghancurkan karier lebih awal."
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
        "id": "Untuk keputusan karier apa pun, jalankan dua lensa sebelum daftar untung-rugi mana pun. <b>Lensa 1 — kecocokan hasil:</b> terhadap hasil 3 tahunmu (Map 2.3), opsi mana yang menggerakkan jarum lebih jauh? Nilai komponennya: kemajuan ranah, kemajuan level, artefak bukti, penghormatan batas. <b>Lensa 2 — keterbalikan:</b> jika pilihan ini keliru, berapa biaya membatalkannya? Bergabung ke startup yang gagal sangat bisa dibalik (kamu pergi membawa kisah lingkup); kontrak ikatan dua tahun berpenalti tidak. Aturannya: putuskan hal terbalikkan dengan cepat pada keyakinan 70%; beri pintu satu-arah sejati perlakuan matriks penuh dari Map 3.2. Kebanyakan kegalauan lulusan salah alokasi — pertimbangan dalam dihabiskan untuk pintu terbalikkan, penilaian kilat untuk yang mengikat."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Dilemma 1 — The exploding offer",
        "id": "Dilema 1 — Tawaran meledak"
       },
       "body": {
        "en": "A solid match-tier company offers you a role with seven days to accept. Your reach-tier process — final round done — promises a decision “in two to three weeks”. Decide your moves, then reveal.",
        "id": "Perusahaan tingkat sepadan yang solid menawarimu peran dengan tujuh hari untuk menerima. Proses tingkat jangkauanmu — ronde final selesai — menjanjikan keputusan “dalam dua-tiga minggu”. Putuskan langkahmu, lalu buka."
       },
       "debrief": {
        "en": "Two honest, parallel moves. To the offering company: gratitude, genuine enthusiasm, and a straightforward extension request — “could I have until the 15th to give you a fully committed yes?” Many will grant it; the request itself is normal and professional. To the reach company: the update that changes their clock — “I've received an offer with a deadline of the 15th; your process remains my first preference — is an accelerated decision possible?” Final-round candidates trigger real accelerations weekly. If the extension is refused and the reach answer cannot come in time: run the two lenses on what you actually hold — a real offer against a probability. Never accept intending to renege; reneging burns a network at its most formative moment.",
        "id": "Dua langkah jujur, paralel. Ke perusahaan penawar: terima kasih, antusiasme tulus, dan permintaan perpanjangan lugas — “bolehkah sampai tanggal 15 agar jawaban ya saya sepenuhnya mantap?” Banyak yang mengabulkan; permintaannya sendiri normal dan profesional. Ke perusahaan jangkauan: kabar yang mengubah jam mereka — “saya menerima tawaran bertenggat tanggal 15; proses Anda tetap preferensi pertama saya — mungkinkah keputusan dipercepat?” Kandidat ronde final memicu percepatan sungguhan tiap minggu. Jika perpanjangan ditolak dan jawaban jangkauan tak mungkin tiba tepat waktu: jalankan dua lensa pada yang benar-benar kamu pegang — tawaran nyata melawan probabilitas. Jangan pernah menerima sambil berniat mundur; mundur membakar jaringan di momen paling formatifnya."
       }
      },
      {
       "h": {
        "en": "Dilemma 2 — Prestige vs scope",
        "id": "Dilema 2 — Prestise vs lingkup"
       },
       "body": {
        "en": "Offer A: famous corporate, rotational programme, well-paid, but reviews describe two years of shadowing. Offer B: growing 80-person company, analyst role owning real deliverables from month one, 15% lower salary. Your 3-year outcome: “own end-to-end analyses with a shipped portfolio”. Decide with the lenses, then reveal.",
        "id": "Tawaran A: korporat tenar, program rotasi, gaji baik, tetapi ulasan menggambarkan dua tahun membayangi. Tawaran B: perusahaan bertumbuh 80 orang, peran analis memiliki hasil nyata sejak bulan pertama, gaji 15% lebih rendah. Hasil 3 tahunmu: “memiliki analisis ujung-ke-ujung dengan portofolio rilis”. Putuskan dengan lensa, lalu buka."
       },
       "debrief": {
        "en": "Lens 1 favours B strongly: the outcome names ownership and artefacts, which B delivers from month one and A defers two years. Lens 2 softens the risk: leaving B after 18 months with a real portfolio is an easy story; the brand gap is recoverable later, and B-to-A moves happen more easily than students assume once evidence exists. What would flip it: an outcome centred on corporate leadership tracks, a programme with genuinely rotations-with-ownership, family constraints where the salary delta binds, or A being one of the few brands your target industry treats as a passport. The lesson is not “B is right” — it is that the outcome sentence decides, and if yours cannot decide this, it needs sharpening (back to Map 2.3).",
        "id": "Lensa 1 sangat memihak B: hasilmu menamai kepemilikan dan artefak, yang diberikan B sejak bulan pertama dan ditunda A dua tahun. Lensa 2 melunakkan risikonya: meninggalkan B setelah 18 bulan dengan portofolio nyata adalah kisah mudah; celah merek bisa dipulihkan nanti, dan perpindahan B-ke-A terjadi lebih mudah dari dugaan mahasiswa begitu bukti ada. Yang bisa membaliknya: hasil yang berpusat jalur kepemimpinan korporat, program dengan rotasi yang sungguh disertai kepemilikan, batasan keluarga di mana selisih gaji mengikat, atau A termasuk sedikit merek yang diperlakukan industri targetmu sebagai paspor. Pelajarannya bukan “B benar” — melainkan kalimat hasilmu yang memutuskan, dan jika milikmu tak bisa memutuskan ini, ia perlu diasah (kembali ke Map 2.3)."
       }
      },
      {
       "h": {
        "en": "Dilemma 3 — The pause temptation",
        "id": "Dilema 3 — Godaan jeda"
       },
       "body": {
        "en": "Six months of rejections. A relative offers a comfortable admin role in the family business, “just until something better comes”. You are tired. Decide, then reveal.",
        "id": "Enam bulan penolakan. Seorang kerabat menawarkan peran administrasi nyaman di bisnis keluarga, “sementara saja sampai ada yang lebih baik”. Kamu lelah. Putuskan, lalu buka."
       },
       "debrief": {
        "en": "The honest analysis distinguishes the role from the frame. Taken as drift — untracked, indefinite, search paused — it quietly becomes year three of a career your outcome never chose; “temporary” without a boundary is the most common trajectory killer. Taken as a platform — income while the funnel keeps running at reduced but non-zero cadence (three applications weekly), plus deliberately extracting evidence from the role itself (digitise a process, build the reporting sheet, negotiate with a supplier: family businesses are scope goldmines) — it is a legitimate move. The two lenses agree: reversible if bounded, binding if unbounded. Write the boundary before accepting: a date, a weekly application floor, and one skill deliverable per month, logged in your audit.",
        "id": "Analisis jujur membedakan perannya dari bingkainya. Diambil sebagai hanyut — tak terlacak, tanpa batas, pencarian dijeda — ia diam-diam menjadi tahun ketiga karier yang tak pernah dipilih hasilmu; “sementara” tanpa batas adalah pembunuh trajektori paling umum. Diambil sebagai panggung — penghasilan sementara corong tetap berjalan pada irama berkurang tapi tak nol (tiga lamaran per minggu), plus dengan sengaja mengekstrak bukti dari perannya sendiri (digitalkan satu proses, bangun lembar pelaporan, negosiasi dengan pemasok: bisnis keluarga adalah tambang lingkup) — ia langkah sah. Dua lensa sepakat: terbalikkan jika berbatas, mengikat jika tanpa batas. Tulis batasnya sebelum menerima: tanggal, lantai lamaran mingguan, dan satu keterampilan terkirim per bulan, tercatat di auditmu."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "What makes “accept now, renege if the better offer lands” the wrong move in Dilemma 1?",
        "id": "Apa yang membuat “terima sekarang, mundur jika tawaran lebih baik datang” langkah salah di Dilema 1?"
       },
       "options": [
        {
         "en": "It is illegal in most jurisdictions",
         "id": "Ia ilegal di sebagian besar yurisdiksi"
        },
        {
         "en": "It trades a one-time convenience for network damage at the most formative moment, and both honest alternatives (extension, acceleration) were still untried",
         "id": "Ia menukar kemudahan sekali pakai dengan kerusakan jaringan di momen paling formatif, padahal dua alternatif jujur (perpanjangan, percepatan) belum dicoba"
        },
        {
         "en": "Reach-tier companies never accelerate decisions",
         "id": "Perusahaan tingkat jangkauan tak pernah mempercepat keputusan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Recruiters move between companies and remember; and the honest moves usually work. The game is rarely necessary and never free.",
        "id": "Perekrut berpindah antarperusahaan dan mengingat; dan langkah jujur biasanya berhasil. Permainan itu jarang perlu dan tak pernah gratis."
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
    "id": "Strategi Penyaringan Administratif — ATS &amp; Optimasi Lamaran"
   },
   "overview": {
    "en": "Module 6 of The Pack focuses on administrative screening strategy — ats &amp; application optimisation. Work through the lessons in order — each builds on the last.",
    "id": "Modul 6 dari The Pack berfokus pada Strategi Penyaringan Administratif — ATS &amp; Optimasi Lamaran. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply administrative screening strategy — ats &amp; application optimisation to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Strategi Penyaringan Administratif — ATS &amp; Optimasi Lamaran pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "6.1",
     "title": {
      "en": "Introduction to Applicant Tracking Systems (ATS) — How the Machine Works",
      "id": "Pengantar Applicant Tracking Systems (ATS) — Bagaimana Mesin Bekerja"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Before any human sees your application, software has parsed, indexed and often ranked it. This lesson explains what an ATS actually does — separating the real mechanics from the folklore — so the next two lessons can optimise for the machine that exists, not the monster candidates imagine.",
      "id": "Sebelum manusia mana pun melihat lamaranmu, perangkat lunak telah mengurai, mengindeks, dan sering memeringkatnya. Pelajaran ini menjelaskan apa yang sebenarnya dilakukan ATS — memisahkan mekanika nyata dari cerita rakyat — agar dua pelajaran berikut bisa mengoptimalkan untuk mesin yang ada, bukan monster yang dibayangkan kandidat."
     },
     "objectives": [
      {
       "en": "Describe the ATS pipeline: parse, index, filter, rank, present.",
       "id": "Menggambarkan pipeline ATS: urai, indeks, saring, peringkat, sajikan."
      },
      {
       "en": "Separate ATS facts from folklore — what actually rejects applications.",
       "id": "Memisahkan fakta ATS dari cerita rakyat — apa yang sebenarnya menolak lamaran."
      },
      {
       "en": "Identify the failure modes you control: parsing breaks, missing keywords, unanswered knockouts.",
       "id": "Mengenali mode kegagalan yang kamu kendalikan: parsing rusak, kata kunci hilang, pertanyaan gugur tak terjawab."
      }
     ],
     "takeaways": [
      {
       "en": "Most ATS rejections are human decisions applied to machine-organised lists — the machine's job is ordering the pile.",
       "id": "Sebagian besar penolakan ATS adalah keputusan manusia atas daftar yang diorganisasi mesin — tugas mesin adalah mengurutkan tumpukan."
      },
      {
       "en": "Parsing failure is silent: a CV the software cannot read becomes an empty record nobody ever ranks highly.",
       "id": "Kegagalan parsing itu senyap: CV yang tak terbaca perangkat lunak menjadi catatan kosong yang tak pernah diperingkat tinggi."
      },
      {
       "en": "Knockout questions reject more candidates than any algorithm — answer them exactly, never approximately.",
       "id": "Pertanyaan gugur menolak lebih banyak kandidat daripada algoritme mana pun — jawab persis, jangan pernah kira-kira."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "What the machine actually does",
        "id": "Yang sebenarnya dilakukan mesin"
       },
       "body": {
        "en": "An ATS is a workflow database. <b>Parse:</b> extract your text into structured fields — name, roles, dates, education, skills. <b>Index:</b> make every word searchable. <b>Filter:</b> apply knockout answers (work authorisation, degree, GPA floors, availability) as hard gates. <b>Rank or match:</b> many systems score keyword and requirement overlap against the JD; recruiters see an ordered list. <b>Present:</b> the recruiter works the list top-down under time pressure — which is where the six-second scan happens. Folklore says a robot silently bins 75% of CVs; reality is more mundane and more fixable: badly parsed CVs rank low, missing keywords rank low, and knockouts reject exactly what they say they reject.",
        "id": "ATS adalah basis data alur kerja. <b>Urai:</b> ekstrak teksmu menjadi bidang terstruktur — nama, peran, tanggal, pendidikan, keterampilan. <b>Indeks:</b> jadikan tiap kata dapat dicari. <b>Saring:</b> terapkan jawaban gugur (izin kerja, gelar, ambang IPK, ketersediaan) sebagai gerbang keras. <b>Peringkat atau cocokkan:</b> banyak sistem menskor tumpang tindih kata kunci dan persyaratan terhadap JD; perekrut melihat daftar terurut. <b>Sajikan:</b> perekrut menggarap daftar dari atas di bawah tekanan waktu — di situlah pindaian enam detik terjadi. Cerita rakyat bilang robot diam-diam membuang 75% CV; kenyataannya lebih membosankan dan lebih bisa diperbaiki: CV yang terurai buruk berperingkat rendah, kata kunci hilang berperingkat rendah, dan pertanyaan gugur menolak persis yang mereka katakan."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "The three failure modes you control",
        "id": "Tiga mode kegagalan yang kamu kendalikan"
       },
       "body": {
        "en": "<b>Parsing breaks:</b> tables, text boxes, multi-column layouts, headers/footers and image-embedded text scramble extraction — your experience lands in the wrong fields or vanishes. <b>Keyword absence:</b> you wrote “handled client relationships” while the JD and every search says “account management”; the index has no entry for you. <b>Knockout mismatches:</b> answering “expected salary” with a number double the band, or “available from” with a date after their start, triggers automatic exclusion regardless of CV quality. All three are audit-able before submission — which is exactly what the Screening Gym's ATS check and the next lesson do.",
        "id": "<b>Parsing rusak:</b> tabel, kotak teks, tata letak multikolom, header/footer, dan teks dalam gambar mengacaukan ekstraksi — pengalamanmu mendarat di bidang salah atau lenyap. <b>Ketiadaan kata kunci:</b> kamu menulis “menangani hubungan klien” sementara JD dan semua pencarian berkata “account management”; indeks tak punya entri untukmu. <b>Ketidakcocokan gugur:</b> menjawab “gaji harapan” dengan angka dua kali lipat rentang, atau “tersedia mulai” dengan tanggal setelah mulai mereka, memicu pengecualian otomatis berapa pun mutu CV. Ketiganya bisa diaudit sebelum pengiriman — persis yang dilakukan pemeriksa ATS Gym Penyaringan dan pelajaran berikutnya."
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
        "id": "Volume, kepatuhan, dan ingatan. Ribuan lamaran butuh pengurutan; regulasi menuntut proses terauditkan; dan basis data mengingatmu — kandidat kuat yang ditolak karena waktu tetap tercari untuk lowongan berikut, itulah mengapa lamaran bersih dan terurai baik tetap terbayar meski peran ini berkata tidak. Memahami tujuan sistem juga menetapkan garis etis yang dipegang pelajaran berikut: mengoptimalkan pengalaman sejatimu ke bahasa mesin adalah keterampilan; menyuntikkan kata kunci palsu adalah penipuan berjejak kertas, dalam basis data yang dirancang tak pernah lupa."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: The ATS pipeline — where applications actually die.",
       "id": "Peraga 1: Pipeline ATS — tempat lamaran benar-benar mati."
      },
      "title": {
       "en": "Parse → Index → Filter → Rank → Present",
       "id": "Urai → Indeks → Saring → Peringkat → Sajikan"
      },
      "items": [
       {
        "h": {
         "en": "Parse",
         "id": "Urai"
        },
        "sub": {
         "en": "Layout breaks lose your data here",
         "id": "Tata letak rusak menghilangkan datamu di sini"
        }
       },
       {
        "h": {
         "en": "Index & filter",
         "id": "Indeks & saring"
        },
        "sub": {
         "en": "Knockouts reject exactly as written",
         "id": "Pertanyaan gugur menolak persis seperti tertulis"
        }
       },
       {
        "h": {
         "en": "Rank",
         "id": "Peringkat"
        },
        "sub": {
         "en": "JD keyword overlap orders the pile",
         "id": "Tumpang tindih kata kunci JD mengurutkan tumpukan"
        }
       },
       {
        "h": {
         "en": "Present",
         "id": "Sajikan"
        },
        "sub": {
         "en": "A human scans the top of the list",
         "id": "Manusia memindai puncak daftar"
        }
       }
      ],
      "longdesc": {
       "en": "A four-stage flow: parsing extracts the CV into structured fields, where broken layouts silently lose data; indexing and knockout filters apply hard gates exactly as configured; ranking orders candidates by requirement and keyword overlap with the job description; presentation puts the ordered list before a time-pressed human who scans from the top.",
       "id": "Alur empat tahap: parsing mengekstrak CV menjadi bidang terstruktur, tempat tata letak rusak diam-diam menghilangkan data; indeks dan saringan gugur menerapkan gerbang keras persis sesuai konfigurasi; pemeringkatan mengurutkan kandidat berdasarkan tumpang tindih persyaratan dan kata kunci dengan deskripsi kerja; penyajian menaruh daftar terurut di depan manusia yang terdesak waktu dan memindai dari atas."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "knockout question",
        "id": "pertanyaan gugur"
       },
       "def": {
        "en": "An application-form question configured as a hard gate — a disqualifying answer excludes automatically, before any ranking.",
        "id": "Pertanyaan formulir lamaran yang dikonfigurasi sebagai gerbang keras — jawaban tak memenuhi syarat mengecualikan otomatis, sebelum pemeringkatan apa pun."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A strong candidate's beautifully designed two-column CV never gets callbacks through portals, but the same content sent by email does. Prime suspect?",
        "id": "CV dua kolom berdesain indah milik kandidat kuat tak pernah dipanggil lewat portal, tetapi konten sama via email berhasil. Tersangka utama?"
       },
       "options": [
        {
         "en": "Recruiters dislike well-designed CVs",
         "id": "Perekrut tak suka CV berdesain bagus"
        },
        {
         "en": "The parser scrambles the two-column layout, so the portal's structured record is empty or garbled",
         "id": "Parser mengacaukan tata letak dua kolom, sehingga catatan terstruktur portal kosong atau kacau"
        },
        {
         "en": "Email applications always outrank portal ones",
         "id": "Lamaran email selalu mengungguli portal"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Same content, different channel, different outcome isolates the variable: machine parsing. The next lesson builds the parse-safe version.",
        "id": "Konten sama, kanal beda, hasil beda mengisolasi variabelnya: parsing mesin. Pelajaran berikutnya membangun versi aman-parse."
       }
      }
     ],
     "quote": {
      "en": "Before any human reads your application, a machine has already voted.",
      "id": "Sebelum manusia mana pun membaca lamaranmu, sebuah mesin sudah memberi suara."
     }
    },
    {
     "n": "6.2",
     "title": {
      "en": "Resume Optimisation Techniques for ATS Screening",
      "id": "Teknik Optimasi Resume untuk Penyaringan ATS"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The machine-ready CV: parse-safe formatting, JD-mirrored keywords placed honestly, and the pre-flight routine that catches breaks before submission — including running your document through the Gym's on-device ATS check.",
      "id": "CV siap-mesin: format aman-parse, kata kunci yang mencerminkan JD dan ditempatkan jujur, dan rutinitas pra-terbang yang menangkap kerusakan sebelum pengiriman — termasuk menjalankan dokumenmu lewat pemeriksa ATS on-device di Gym."
     },
     "objectives": [
      {
       "en": "Format a CV that survives any parser: structure, fonts, file type.",
       "id": "Memformat CV yang lolos parser mana pun: struktur, fon, jenis berkas."
      },
      {
       "en": "Mirror JD keywords truthfully across the CV's high-weight zones.",
       "id": "Mencerminkan kata kunci JD dengan jujur di zona berbobot tinggi CV."
      },
      {
       "en": "Run the pre-flight: parse test, keyword coverage, knockout review.",
       "id": "Menjalankan pra-terbang: uji parse, cakupan kata kunci, tinjauan pertanyaan gugur."
      }
     ],
     "takeaways": [
      {
       "en": "Boring formats win: single column, standard headings, real text, no tables — the parser's favourite CV is a plain one.",
       "id": "Format membosankan menang: satu kolom, judul standar, teks sungguhan, tanpa tabel — CV kesayangan parser adalah yang polos."
      },
      {
       "en": "Keywords must appear as the JD spells them, in context, attached to true experience.",
       "id": "Kata kunci harus muncul sebagaimana JD mengejanya, dalam konteks, melekat pada pengalaman sejati."
      },
      {
       "en": "Three minutes of pre-flight checks beat three weeks of wondering why nobody called.",
       "id": "Tiga menit pemeriksaan pra-terbang mengalahkan tiga minggu bertanya-tanya mengapa tak ada yang menelepon."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "Parse-safe formatting",
        "id": "Format aman-parse"
       },
       "body": {
        "en": "Single column, top to bottom. Standard section headings the parser recognises: Education, Experience, Projects, Skills — cleverness (“My Journey”) costs fields. Standard fonts, 11pt+, no text boxes, no tables, no icons carrying meaning, contact details in the body (headers/footers are skipped by many parsers), dates in one consistent format (Jan 2024 – Mar 2025). File type: PDF exported from a text document unless the portal demands DOCX — never a scanned image, whose text does not exist to a parser. The design instinct is not wasted: spend it on typography, spacing and ruthless clarity, which both machines and six-second humans reward.",
        "id": "Satu kolom, atas ke bawah. Judul bagian standar yang dikenali parser: Pendidikan, Pengalaman, Proyek, Keterampilan — kecerdikan (“Perjalananku”) mengorbankan bidang. Fon standar, 11pt+, tanpa kotak teks, tanpa tabel, tanpa ikon pembawa makna, detail kontak di badan (header/footer dilewati banyak parser), tanggal satu format konsisten (Jan 2024 – Mar 2025). Jenis berkas: PDF diekspor dari dokumen teks kecuali portal meminta DOCX — jangan pernah citra pindaian, yang teksnya tak ada bagi parser. Naluri desain tak terbuang: belanjakan pada tipografi, spasi, dan kejelasan tanpa ampun, yang diganjar mesin maupun manusia enam detik."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Honest keyword mirroring",
        "id": "Pencerminan kata kunci yang jujur"
       },
       "body": {
        "en": "Extract the JD's load-bearing terms: named tools, methodologies, competencies that repeat or lead lists. Where your true experience matches, use their exact spelling — “stakeholder management”, “SQL”, “A/B testing” — in the high-weight zones: the target-role line, the skills section, and inside experience bullets where context proves use (“wrote SQL queries against a 200k-row sales table”). A term in a bullet with evidence outranks the same term naked in a skills list. The line that must not be crossed: no tool you have not used, no competency without an evidence bullet to back it — interviews probe keywords, and Module 2's honesty rule applies with a database remembering everything.",
        "id": "Ekstrak istilah penopang JD: alat bernama, metodologi, kompetensi yang berulang atau memimpin daftar. Di mana pengalaman sejatimu cocok, pakai ejaan persis mereka — “stakeholder management”, “SQL”, “A/B testing” — di zona berbobot tinggi: baris peran target, bagian keterampilan, dan di dalam butir pengalaman tempat konteks membuktikan pemakaian (“menulis kueri SQL atas tabel penjualan 200 rb baris”). Istilah dalam butir berbukti mengungguli istilah sama yang telanjang di daftar keterampilan. Garis yang tak boleh dilewati: tak ada alat yang belum kamu pakai, tak ada kompetensi tanpa butir bukti pendukung — wawancara menggali kata kunci, dan aturan kejujuran Modul 2 berlaku dengan basis data yang mengingat segalanya."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "The pre-flight routine",
        "id": "Rutinitas pra-terbang"
       },
       "body": {
        "en": "Before every submission, three checks. <b>Parse test:</b> select-all-copy your PDF into a plain text editor — if the text comes out in reading order with nothing missing, parsers will manage; scrambled order or vanished sections means the layout must simplify. <b>Coverage check:</b> run the Screening Gym's ATS check — CV against this JD, on-device — and review which load-bearing terms are absent; add only the ones your experience honestly supports. <b>Knockout review:</b> read every application-form question as a gate — salary bands researched (The Range's salary data helps), availability accurate, certifications exactly as held. Three minutes, every time; the checklist mentality is precisely what the administrative screen is testing for anyway.",
        "id": "Sebelum tiap pengiriman, tiga pemeriksaan. <b>Uji parse:</b> pilih-semua-salin PDF-mu ke editor teks polos — jika teks keluar berurutan baca tanpa yang hilang, parser akan sanggup; urutan kacau atau bagian lenyap berarti tata letak harus disederhanakan. <b>Pemeriksaan cakupan:</b> jalankan pemeriksa ATS Gym Penyaringan — CV terhadap JD ini, on-device — dan tinjau istilah penopang mana yang absen; tambahkan hanya yang didukung jujur pengalamanmu. <b>Tinjauan gugur:</b> baca tiap pertanyaan formulir sebagai gerbang — rentang gaji diriset (data gaji The Range membantu), ketersediaan akurat, sertifikasi persis seperti yang dipegang. Tiga menit, setiap kali; mentalitas daftar periksa persis yang diuji saringan administratif itu sendiri."
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
        "id": "Mengklaim keterampilan data untuk JD analis"
       },
       "weak": {
        "en": "“Skills: SQL, Python, Excel, Tableau, machine learning, communication, leadership, teamwork, time management, creativity.”",
        "id": "“Keterampilan: SQL, Python, Excel, Tableau, machine learning, komunikasi, kepemimpinan, kerja tim, manajemen waktu, kreativitas.”"
       },
       "strong": {
        "en": "“Skills: SQL (thesis: 200k-row retail dataset), Python/pandas (3 course projects), Excel incl. pivot models (org budget, Rp 45m). Currently learning: Tableau.”",
        "id": "“Keterampilan: SQL (skripsi: dataset ritel 200 rb baris), Python/pandas (3 proyek kuliah), Excel termasuk model pivot (anggaran organisasi, Rp 45 jt). Sedang dipelajari: Tableau.”"
       },
       "why": {
        "en": "Each keyword ships with its proof and survives interview probing; the honest “currently learning” outperforms a hollow claim when the technical interviewer starts asking questions.",
        "id": "Tiap kata kunci membawa buktinya dan lolos penggalian wawancara; “sedang dipelajari” yang jujur mengungguli klaim kosong saat pewawancara teknis mulai bertanya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "The copy-paste parse test on your CV outputs your job titles separated from their dates and employers. What must change?",
        "id": "Uji salin-tempel CV-mu mengeluarkan jabatan terpisah dari tanggal dan pemberi kerjanya. Apa yang harus diubah?"
       },
       "options": [
        {
         "en": "Nothing — humans will understand it",
         "id": "Tidak ada — manusia akan memahaminya"
        },
        {
         "en": "The layout: likely a table or multi-column structure is scattering related fields; rebuild as a single column",
         "id": "Tata letaknya: kemungkinan tabel atau struktur multikolom mencerai-beraikan bidang terkait; bangun ulang satu kolom"
        },
        {
         "en": "The font: switch to a more professional typeface",
         "id": "Fonnya: ganti ke huruf yang lebih profesional"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Reading-order corruption is the parser seeing your layout's internal structure. Single-column rebuilds fix it permanently.",
        "id": "Kerusakan urutan baca adalah parser melihat struktur internal tata letakmu. Pembangunan ulang satu kolom memperbaikinya permanen."
       }
      }
     ],
     "tool": {
      "id": "gym",
      "mode": "ats",
      "title": {
       "en": "Pre-flight this CV now",
       "id": "Pra-terbangkan CV ini sekarang"
      },
      "body": {
       "en": "Paste your CV and the JD you are targeting — the check reads both on your device and shows coverage, section signals and red flags before any employer's parser does.",
       "id": "Tempel CV-mu dan JD targetmu — pemeriksa membaca keduanya di perangkatmu dan menunjukkan cakupan, sinyal bagian, dan tanda bahaya sebelum parser pemberi kerja mana pun."
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
      "id": "Strategi Penyaringan Administratif — Praktik Terbaik dan Kesalahan Umum"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "visual",
     "placeholder": false,
     "overview": {
      "en": "The administrative screen is a checklist masquerading as a judgment. Explore the four zones of the screening map — completeness, consistency, requirements, and professional surface — each a place where prepared candidates pass and careless ones quietly disappear.",
      "id": "Saringan administratif adalah daftar periksa yang menyamar sebagai penilaian. Jelajahi empat zona peta penyaringan — kelengkapan, konsistensi, persyaratan, dan permukaan profesional — masing-masing tempat kandidat siap lolos dan yang ceroboh diam-diam lenyap."
     },
     "objectives": [
      {
       "en": "Audit an application for the four administrative failure zones.",
       "id": "Mengaudit lamaran untuk empat zona kegagalan administratif."
      },
      {
       "en": "Keep records consistent across CV, forms, LinkedIn and certificates.",
       "id": "Menjaga catatan konsisten lintas CV, formulir, LinkedIn, dan sertifikat."
      },
      {
       "en": "Read requirement lists like a screener: musts, shoulds, and negotiables.",
       "id": "Membaca daftar persyaratan seperti penyaring: wajib, sebaiknya, dan bisa dinegosiasikan."
      }
     ],
     "takeaways": [
      {
       "en": "Administrative rejections are the cheapest to prevent and the most common to suffer.",
       "id": "Penolakan administratif paling murah dicegah dan paling sering dialami."
      },
      {
       "en": "Inconsistencies between your documents read as carelessness at best, dishonesty at worst.",
       "id": "Ketidakkonsistenan antardokumenmu terbaca sebagai kecerobohan paling ringan, ketidakjujuran paling berat."
      },
      {
       "en": "A missing “must” requirement is a real gate; a missing “should” is an invitation to show a compensating strength.",
       "id": "Persyaratan “wajib” yang hilang adalah gerbang nyata; “sebaiknya” yang hilang adalah undangan menunjukkan kekuatan pengganti."
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
        "id": "Semua bidang terisi, semua dokumen diminta terlampir, dalam format dan penamaan yang diminta (“CV_Nama_Peran.pdf” bila ditentukan — instruksinya adalah ujiannya). Bidang opsional tidak opsional saat kamu punya isinya: bidang tautan portofolio kosong, padahal portofolio ada, adalah poin yang disumbangkan. Sebelum mengirim, baca ulang blok instruksi lowongan sekali, pelan — tim penyaring melaporkan kegagalan mengikuti instruksi sebagai pemotongan paling umum mereka."
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
        "id": "Tanggal, jabatan, IPK, nama pemberi kerja harus cocok lintas CV, formulir lamaran, LinkedIn, dan sertifikat — perekrut memeriksa silang dalam hitungan detik, dan tiap ketidakcocokan mengorbankan kepercayaan. Sebab polos yang umum: IPK dibulatkan di satu tempat dan persis di tempat lain; magang berjudul beda di LinkedIn; format tanggal berubah di tengah CV. Perbaiki di sumber: satu catatan induk (di catatan pelacak Gym-mu) yang disalin semua dokumen. Jika sesuatu memang berubah — jabatan diganti nama — satu versi terkini yang konsisten di mana-mana."
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
        "id": "Baca daftar seperti penulisnya: <b>wajib</b> (bidang gelar, jendela kelulusan, izin, ambang IPK keras) dikonfigurasi sebagai gugur — jangan melamar sambil berharap pengecualian yang tak bisa diberikan perangkat lunak; cari peran yang wajibnya kamu penuhi. <b>Sebaiknya</b> (“diutamakan”, “menjadi nilai tambah”) adalah bobot peringkat — lamar, dan biarkan baris bukti pengganti berargumen untukmu. Saat wajib ambigu (“rekam akademik kuat”), biasanya ia sebaiknya berbaju wajib; lamar dengan bukti terbaikmu. Melek persyaratan mengalihkan lamaran terbuang menuju yang bisa dimenangkan — separuh penargetan dari tingkat lolos saringanmu."
       }
      },
      {
       "x": 74,
       "y": 72,
       "h": {
        "en": "Professional surface",
        "id": "Permukaan profesional"
       },
       "body": {
        "en": "The email address, voicemail greeting, LinkedIn URL and photo, and the tone of every message you send the company — all part of the administrative read. Application emails get the Module 4 treatment: informative subject (“Application — Data Analyst — [Name]”), two-line body, named attachments. Response speed matters both ways: reply to recruiter emails within one business day; your responsiveness now is read as your responsiveness as an employee. None of this wins the job; all of it prevents the quiet loss of it.",
        "id": "Alamat email, sapaan pesan suara, URL dan foto LinkedIn, dan nada tiap pesan yang kamu kirim ke perusahaan — semua bagian dari pembacaan administratif. Email lamaran mendapat perlakuan Modul 4: subjek informatif (“Lamaran — Data Analyst — [Nama]”), badan dua baris, lampiran bernama. Kecepatan respons berlaku dua arah: balas email perekrut dalam satu hari kerja; ketanggapanmu sekarang dibaca sebagai ketanggapanmu sebagai karyawan. Semua ini tak memenangkan pekerjaan; semuanya mencegah kehilangan diam-diam atasnya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A JD lists “minimum GPA 3.25” and “experience with Tableau preferred”. You hold GPA 3.4 and no Tableau. The correct read?",
        "id": "JD mencantumkan “IPK minimum 3,25” dan “pengalaman Tableau diutamakan”. Kamu punya IPK 3,4 dan tanpa Tableau. Bacaan yang benar?"
       },
       "options": [
        {
         "en": "Do not apply — Tableau is listed, so it is required",
         "id": "Jangan melamar — Tableau tercantum, berarti wajib"
        },
        {
         "en": "Apply — the must is met; Tableau is a ranking weight your other evidence can compensate",
         "id": "Lamar — yang wajib terpenuhi; Tableau adalah bobot peringkat yang bisa dikompensasi bukti lainmu"
        },
        {
         "en": "Apply, and add Tableau to your skills list to be safe",
         "id": "Lamar, dan tambahkan Tableau ke daftar keterampilan biar aman"
        }
       ],
       "correct": 1,
       "why": {
        "en": "“Preferred” marks a should — a weight, not a gate. Option C crosses the honesty line and dies in the first technical probe.",
        "id": "“Diutamakan” menandai sebaiknya — bobot, bukan gerbang. Opsi C melewati garis kejujuran dan mati di penggalian teknis pertama."
       }
      }
     ]
    },
    {
     "n": "6.4",
     "title": {
      "en": "The Precise Applicant Mindset — Navigating Automated Recruitment Systems",
      "id": "Pola Pikir Pelamar yang Tepat — Menavigasi Sistem Rekrutmen Otomatis"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "The precise-applicant mindset in practice: three drills that convert this module's mechanics into reflexes — a full pre-flight on a real application, a consistency sweep across your documents, and a triage of borderline requirements.",
      "id": "Pola pikir pelamar presisi dalam praktik: tiga latihan yang mengubah mekanika modul ini menjadi refleks — pra-terbang penuh pada lamaran nyata, sapuan konsistensi lintas dokumenmu, dan triase persyaratan ambang."
     },
     "objectives": [
      {
       "en": "Execute the full pre-flight on a live application end-to-end.",
       "id": "Mengeksekusi pra-terbang penuh pada lamaran berjalan dari ujung ke ujung."
      },
      {
       "en": "Sweep and reconcile inconsistencies across CV, LinkedIn and forms.",
       "id": "Menyapu dan merekonsiliasi ketidakkonsistenan lintas CV, LinkedIn, dan formulir."
      },
      {
       "en": "Triage borderline requirements into apply / adjust / skip decisions.",
       "id": "Men-triase persyaratan ambang menjadi keputusan lamar / sesuaikan / lewati."
      }
     ],
     "takeaways": [
      {
       "en": "Precision is a habit loop, not a talent: checklist, sweep, triage — every application, every time.",
       "id": "Presisi adalah putaran kebiasaan, bukan bakat: daftar periksa, sapuan, triase — tiap lamaran, setiap kali."
      },
      {
       "en": "Your documents form one record in the employer's eyes; make them one record in fact.",
       "id": "Dokumenmu membentuk satu catatan di mata pemberi kerja; jadikan satu catatan dalam kenyataan."
      },
      {
       "en": "Skipping an unwinnable application is a win: the hour goes to one you can convert.",
       "id": "Melewati lamaran tak termenangkan adalah kemenangan: jamnya pergi ke yang bisa kamu konversi."
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
        "id": "Penyaringan administratif adalah satu-satunya tahap corong tempat keterampilan yang diuji persis keterampilan melewatinya: membaca instruksi tuntas, menjaga catatan konsisten, memenuhi spesifikasi. Pemberi kerja memperlakukannya sebagai pratinjau caramu menangani laporan mereka, email klien mereka, formulir kepatuhan mereka. Karena itulah modul ini berakhir dengan latihan, bukan teori — pola pikirnya harus bertahan dari kontak dengan portal nyata pada tenggat nyata."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 — Full pre-flight, live",
        "id": "Latihan 1 — Pra-terbang penuh, langsung"
       },
       "body": {
        "en": "Take one application you intend to submit this week. Run the sequence: parse test on the CV, ATS coverage check against the JD in the Gym, knockout review of every form question, instruction-block reread. Log what you caught, then reveal.",
        "id": "Ambil satu lamaran yang akan kamu kirim minggu ini. Jalankan urutannya: uji parse CV, pemeriksaan cakupan ATS terhadap JD di Gym, tinjauan gugur tiap pertanyaan formulir, baca ulang blok instruksi. Catat yang kamu tangkap, lalu buka."
       },
       "debrief": {
        "en": "Typical first-run catches, in frequency order: two or three JD keywords your experience supports but your CV never says; a date format inconsistency; one form question you had answered approximately (salary, availability) that deserved research; one instruction (file naming, subject line) you would have missed. Zero catches usually means the checks were skimmed — rerun the parse test properly, in a plain editor. The point of logging: after five applications, your personal top-three catches become your personal pre-flight shortlist.",
        "id": "Tangkapan lazim putaran pertama, urut frekuensi: dua-tiga kata kunci JD yang didukung pengalamanmu tetapi tak pernah disebut CV-mu; ketidakkonsistenan format tanggal; satu pertanyaan formulir yang kamu jawab kira-kira (gaji, ketersediaan) padahal layak diriset; satu instruksi (penamaan berkas, subjek) yang nyaris terlewat. Nol tangkapan biasanya berarti pemeriksaan dibaca sekilas — ulangi uji parse dengan benar, di editor polos. Guna pencatatan: setelah lima lamaran, tiga tangkapan teratasmu menjadi daftar pendek pra-terbang pribadimu."
       }
      },
      {
       "h": {
        "en": "Drill 2 — The consistency sweep",
        "id": "Latihan 2 — Sapuan konsistensi"
       },
       "body": {
        "en": "Open your CV, LinkedIn and one submitted application form side by side. Compare: every date, title, GPA, employer and certification name. Reconcile to one master record. Reveal when done.",
        "id": "Buka CV, LinkedIn, dan satu formulir lamaran terkirim berdampingan. Bandingkan: tiap tanggal, jabatan, IPK, pemberi kerja, dan nama sertifikasi. Rekonsiliasi ke satu catatan induk. Buka setelah selesai."
       },
       "debrief": {
        "en": "Most people find two to four mismatches on first sweep — commonly internship titles and month-level dates. The fix is structural, not motivational: create the master record now (a simple note: every role with exact title, dates, employer legal name, and your GPA to two decimals) and adopt the rule that no document ever states a fact except by copying from it. Five minutes of maintenance per new item, permanent immunity to the cross-check cut.",
        "id": "Kebanyakan orang menemukan dua sampai empat ketidakcocokan pada sapuan pertama — umumnya judul magang dan tanggal level bulan. Perbaikannya struktural, bukan motivasional: buat catatan induk sekarang (catatan sederhana: tiap peran dengan judul persis, tanggal, nama resmi pemberi kerja, dan IPK dua desimal) dan adopsi aturan bahwa tak ada dokumen menyatakan fakta kecuali menyalin darinya. Lima menit perawatan per item baru, kekebalan permanen terhadap pemotongan periksa-silang."
       }
      },
      {
       "h": {
        "en": "Drill 3 — Requirement triage",
        "id": "Latihan 3 — Triase persyaratan"
       },
       "body": {
        "en": "Three JDs: (a) must-have GPA 3.5, you hold 3.3; (b) “preferably final-year students of economics or related fields”, you study information systems; (c) must be available July, you are available August. Decide apply / adjust / skip for each, then reveal.",
        "id": "Tiga JD: (a) wajib IPK 3,5, kamu punya 3,3; (b) “diutamakan mahasiswa tingkat akhir ekonomi atau bidang terkait”, kamu belajar sistem informasi; (c) wajib tersedia Juli, kamu tersedia Agustus. Putuskan lamar / sesuaikan / lewati untuk masing-masing, lalu buka."
       },
       "debrief": {
        "en": "(a) Skip — a numeric GPA must is a configured knockout; the hour belongs to a winnable application. (b) Apply — “preferably” plus “related fields” is a should; information systems argues as related through your evidence bullets (data coursework, business projects). (c) Adjust, then decide — availability is sometimes negotiable when the gap is small: one short question to the recruiter (“is an August start workable for this intake?”) converts a guess into a fact before you spend the application. The pattern: musts with numbers are gates; soft language is weights; ambiguities are questions, not assumptions.",
        "id": "(a) Lewati — IPK wajib berangka adalah gugur terkonfigurasi; jamnya milik lamaran yang bisa dimenangkan. (b) Lamar — “diutamakan” plus “bidang terkait” adalah sebaiknya; sistem informasi berargumen sebagai terkait lewat butir buktimu (mata kuliah data, proyek bisnis). (c) Sesuaikan, lalu putuskan — ketersediaan kadang bisa dinegosiasikan saat celahnya kecil: satu pertanyaan singkat ke perekrut (“apakah mulai Agustus memungkinkan untuk angkatan ini?”) mengubah tebakan menjadi fakta sebelum kamu membelanjakan lamarannya. Polanya: wajib berangka adalah gerbang; bahasa lunak adalah bobot; ambiguitas adalah pertanyaan, bukan asumsi."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "What makes the master-record rule (“no document states a fact except by copying”) worth the maintenance?",
        "id": "Apa yang membuat aturan catatan induk (“tak ada dokumen menyatakan fakta kecuali menyalin”) layak perawatannya?"
       },
       "options": [
        {
         "en": "It saves typing time",
         "id": "Ia menghemat waktu mengetik"
        },
        {
         "en": "It makes cross-document consistency automatic — removing the trust-costing mismatches recruiters check for in seconds",
         "id": "Ia membuat konsistensi antardokumen otomatis — menghapus ketidakcocokan pengorban kepercayaan yang diperiksa perekrut dalam hitungan detik"
        },
        {
         "en": "Employers can request to see the master record",
         "id": "Pemberi kerja bisa meminta melihat catatan induk"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Consistency by discipline fails under deadline pressure; consistency by architecture cannot fail. The record is the architecture.",
        "id": "Konsistensi lewat disiplin gagal di bawah tekanan tenggat; konsistensi lewat arsitektur tak bisa gagal. Catatan itu arsitekturnya."
       }
      }
     ],
     "tool": {
      "id": "gym",
      "mode": "ats",
      "title": {
       "en": "Drill 1 starts here",
       "id": "Latihan 1 mulai di sini"
      },
      "body": {
       "en": "Run this week's real application through the ATS check as your pre-flight's second step.",
       "id": "Jalankan lamaran nyata minggu ini melalui pemeriksa ATS sebagai langkah kedua pra-terbangmu."
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
    "id": "Menjadi Kandidat Berdampak Tinggi Melalui Latihan Wawancara Kasus"
   },
   "overview": {
    "en": "Module 7 of The Pack focuses on becoming a high-impact candidate through case interview practice. Work through the lessons in order — each builds on the last.",
    "id": "Modul 7 dari The Pack berfokus pada Menjadi Kandidat Berdampak Tinggi Melalui Latihan Wawancara Kasus. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply becoming a high-impact candidate through case interview practice to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Menjadi Kandidat Berdampak Tinggi Melalui Latihan Wawancara Kasus pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
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
      "id": "Wawancara kasus menaruh masalah bisnis di atas meja dan menonton caramu berpikir. Ia bukan kuis tentang industri; ia demonstrasi langsung rantai pemecahan masalah The Map di bawah sorotan yang ramah. Pelajaran ini memetakan format dan dimensi penilaian sebenarnya."
     },
     "objectives": [
      {
       "en": "Distinguish case formats: interviewer-led, candidate-led, written, and market sizing.",
       "id": "Membedakan format kasus: dipandu pewawancara, dipandu kandidat, tertulis, dan penaksiran pasar."
      },
      {
       "en": "Name the four scored dimensions: structure, numeracy, judgment, communication.",
       "id": "Menyebutkan empat dimensi yang dinilai: struktur, numerasi, penilaian, komunikasi."
      },
      {
       "en": "Know which employers use cases and what junior-level bar they actually apply.",
       "id": "Mengetahui pemberi kerja mana yang memakai kasus dan standar level junior yang sebenarnya diterapkan."
      }
     ],
     "takeaways": [
      {
       "en": "The case tests how you think when you cannot know the answer — pretending to know scores zero.",
       "id": "Kasus menguji caramu berpikir saat tak mungkin tahu jawabannya — berpura-pura tahu berskor nol."
      },
      {
       "en": "Structure earns more points than knowledge: a clean tree with average insight beats brilliance delivered as chaos.",
       "id": "Struktur meraih lebih banyak poin daripada pengetahuan: pohon rapi dengan wawasan rata-rata mengalahkan kecemerlangan yang disampaikan kacau."
      },
      {
       "en": "At junior level the bar is trainable in weeks: framework fluency, clean arithmetic, stated assumptions, clear closing.",
       "id": "Di level junior standarnya terlatihkan dalam hitungan minggu: kefasihan kerangka, aritmetika bersih, asumsi dinyatakan, penutup jernih."
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
        "id": "<b>Dipandu pewawancara:</b> pewawancara mengarahkan lewat pertanyaan siap (“bagaimana kamu menstrukturkan ini? sekarang taksir pasarnya; sekarang baca peraga ini”) — lazim di ronde pertama firma konsultan besar. <b>Dipandu kandidat:</b> kamu menerima masalah dan mengemudi menuju rekomendasi, meminta data sepanjang jalan — ujian termurni rantai Map 3. <b>Kasus tertulis / kelompok:</b> materi untuk dicerna dan dipresentasikan dalam waktu, kadang dalam format FGD yang dilatih Modul 4. <b>Penaksiran pasar:</b> nomor estimasi (“berapa sepeda motor terjual di Indonesia per tahun?”) yang bisa muncul dalam format mana pun atau berdiri sendiri. Di luar konsultansi: bank, perusahaan teknologi, program FMCG, dan peran startup makin meminjam elemen kasus untuk perekrutan analis dan produk."
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
        "id": "<b>Struktur:</b> apakah kamu memaksakan keteraturan berguna pada ambiguitas — pohon MECE, urutan jelas, prioritas eksplisit? <b>Numerasi:</b> aritmetika bersih pada kecepatan percakapan, orde besaran dipegang benar, persentase yang bermakna. <b>Penilaian:</b> saat data tiba, apakah kamu melihat yang penting, menghubungkannya ke pertanyaan, dan menyesuaikan? Apakah rekomendasimu mengikuti analisismu? <b>Komunikasi:</b> penyampaian jawaban-dulu, penanda arah yang terlihat, ketenangan saat dikoreksi. Pewawancara menilai keempatnya terus-menerus — artinya tiap menit menawarkan pemulihan: kalkulasi tersandung yang diikuti kesalahan tertangkap dan koreksi bersih sering berskor lebih tinggi daripada jalan mulus yang biasa-biasa."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The junior bar, honestly",
        "id": "Standar junior, sejujurnya"
       },
       "body": {
        "en": "Nobody expects industry expertise from a fresh graduate. The realistic bar: open with a structured approach within a minute; do percentage and multiplication arithmetic without drama; state assumptions out loud before using them; read an exhibit and extract its one message; close with a recommendation that follows from what was discussed, plus its main risk. That is Map Module 3 plus composure — all trainable. What fails candidates: memorised frameworks recited regardless of fit (“I will use the 4Ps” on a cost problem), silent long pauses instead of narrated thinking, and defending errors instead of correcting them.",
        "id": "Tak ada yang mengharapkan keahlian industri dari lulusan baru. Standar realistisnya: buka dengan pendekatan terstruktur dalam satu menit; kerjakan aritmetika persentase dan perkalian tanpa drama; nyatakan asumsi bersuara sebelum memakainya; baca peraga dan ekstrak satu pesannya; tutup dengan rekomendasi yang mengikuti diskusi, plus risiko utamanya. Itu Modul 3 Map plus ketenangan — semuanya terlatihkan. Yang menggagalkan kandidat: kerangka hafalan dibacakan tanpa peduli kecocokan (“saya akan pakai 4P” pada masalah biaya), jeda panjang membisu alih-alih pemikiran yang dinarasikan, dan membela kesalahan alih-alih mengoreksinya."
       }
      }
     ],
     "diagram": {
      "type": "quad",
      "exhibit": {
       "en": "Exhibit 1: The four dimensions every case interviewer scores.",
       "id": "Peraga 1: Empat dimensi yang dinilai tiap pewawancara kasus."
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
         "id": "Keteraturan berguna atas ambiguitas"
        }
       },
       {
        "h": {
         "en": "Numeracy",
         "id": "Numerasi"
        },
        "sub": {
         "en": "Clean arithmetic, held magnitudes",
         "id": "Aritmetika bersih, orde besaran terjaga"
        }
       },
       {
        "h": {
         "en": "Judgment",
         "id": "Penilaian"
        },
        "sub": {
         "en": "Noticing what matters, adjusting",
         "id": "Melihat yang penting, menyesuaikan"
        }
       },
       {
        "h": {
         "en": "Communication",
         "id": "Komunikasi"
        },
        "sub": {
         "en": "Answer-first, signposted, composed",
         "id": "Jawaban-dulu, bertanda arah, tenang"
        }
       }
      ],
      "longdesc": {
       "en": "Four scored dimensions: structure — imposing usable order on an ambiguous problem; numeracy — clean conversational arithmetic with correct orders of magnitude; judgment — noticing what matters in new data and adjusting; communication — answer-first, signposted, composed delivery.",
       "id": "Empat dimensi dinilai: struktur — memaksakan keteraturan berguna pada masalah ambigu; numerasi — aritmetika percakapan bersih dengan orde besaran benar; penilaian — melihat yang penting pada data baru dan menyesuaikan; komunikasi — penyampaian jawaban-dulu, bertanda arah, tenang."
      }
     },
     "checks": [
      {
       "q": {
        "en": "Mid-case you realise your revenue estimate double-counted a segment. Best move?",
        "id": "Di tengah kasus kamu sadar estimasi pendapatanmu menghitung ganda satu segmen. Langkah terbaik?"
       },
       "options": [
        {
         "en": "Continue — changing numbers mid-case looks weak",
         "id": "Lanjutkan — mengubah angka di tengah kasus tampak lemah"
        },
        {
         "en": "Flag it immediately, correct it aloud, and carry the corrected number forward",
         "id": "Tandai segera, koreksi bersuara, dan bawa angka terkoreksi ke depan"
        },
        {
         "en": "Restart the whole structure from the top",
         "id": "Ulangi seluruh struktur dari awal"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Self-caught, cleanly corrected errors score as judgment and composure; hidden errors compound and surface later as worse ones.",
        "id": "Kesalahan yang tertangkap sendiri dan dikoreksi bersih dinilai sebagai penilaian dan ketenangan; kesalahan tersembunyi menggandakan diri dan muncul kemudian sebagai yang lebih buruk."
       }
      }
     ],
     "quote": {
      "en": "The case tests how you think when you cannot know the answer.",
      "id": "Kasus menguji caramu berpikir saat jawabannya mustahil kamu ketahui."
     }
    },
    {
     "n": "7.2",
     "title": {
      "en": "Preparation Methodology and Problem-Solving Frameworks",
      "id": "Metodologi Persiapan dan Kerangka Pemecahan Masalah"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "One preparation method covers every case: a small kit of first-principles structures, a market-sizing engine, and exhibit-reading drills — assembled on top of the Map's problem-solving chain rather than memorised as magic formulas.",
      "id": "Satu metode persiapan mencakup semua kasus: kit kecil struktur prinsip-pertama, mesin penaksiran pasar, dan latihan membaca peraga — dirakit di atas rantai pemecahan masalah The Map alih-alih dihafal sebagai rumus ajaib."
     },
     "objectives": [
      {
       "en": "Build case structures from profit, funnel and stakeholder first principles.",
       "id": "Membangun struktur kasus dari prinsip pertama laba, corong, dan pemangku kepentingan."
      },
      {
       "en": "Run market sizings with the segment–rate–frequency engine.",
       "id": "Menjalankan penaksiran pasar dengan mesin segmen–laju–frekuensi."
      },
      {
       "en": "Extract an exhibit's single message in thirty seconds.",
       "id": "Mengekstrak satu pesan peraga dalam tiga puluh detik."
      }
     ],
     "takeaways": [
      {
       "en": "Frameworks are scaffolding you assemble per problem, not incantations you recite — interviewers can tell instantly.",
       "id": "Kerangka adalah perancah yang kamu rakit per masalah, bukan mantra yang dibacakan — pewawancara langsung tahu bedanya."
      },
      {
       "en": "Every market sizing is population × applicable share × frequency × value, with assumptions said aloud.",
       "id": "Setiap penaksiran pasar adalah populasi × porsi berlaku × frekuensi × nilai, dengan asumsi diucapkan."
      },
      {
       "en": "An exhibit exists to change the case's direction — find the number that does.",
       "id": "Peraga ada untuk mengubah arah kasus — temukan angka yang melakukannya."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "First-principles structures",
        "id": "Struktur prinsip pertama"
       },
       "body": {
        "en": "Three roots generate most case trees. <b>Profit problems:</b> profit = revenue − cost; revenue = price × volume; costs split fixed/variable — then hang the case's specifics on the branches. <b>Growth/launch problems:</b> the funnel — market → aware → try → buy → repeat — locates where growth must come from. <b>Decision problems:</b> stakeholders × criteria — who is affected, what do they each need, what constraints bind. Build the tree live, from the case's own words: “Profit fell — I'd like to split that into revenue and cost, and given you mentioned new competitors, start on the revenue side, specifically volume.” That sentence — root, split, prioritised branch, reason — is the whole craft.",
        "id": "Tiga akar menghasilkan sebagian besar pohon kasus. <b>Masalah laba:</b> laba = pendapatan − biaya; pendapatan = harga × volume; biaya terbelah tetap/variabel — lalu gantungkan kekhususan kasus di cabangnya. <b>Masalah pertumbuhan/peluncuran:</b> corong — pasar → sadar → coba → beli → ulang — menunjukkan dari mana pertumbuhan harus datang. <b>Masalah keputusan:</b> pemangku kepentingan × kriteria — siapa terdampak, apa kebutuhan masing-masing, batasan apa yang mengikat. Bangun pohon langsung, dari kata-kata kasus itu sendiri: “Laba turun — saya ingin membelahnya menjadi pendapatan dan biaya, dan karena Anda menyebut pesaing baru, mulai dari sisi pendapatan, khususnya volume.” Kalimat itu — akar, belahan, cabang terprioritas, alasan — adalah seluruh keterampilannya."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The market-sizing engine",
        "id": "Mesin penaksiran pasar"
       },
       "body": {
        "en": "Every sizing decomposes as <b>population × applicable share × frequency × value</b>. Motorcycles sold in Indonesia yearly: ~280m people → ~70m households (assume 4 per household, said aloud) → assume ~60% own or want motorcycles in the addressable segments → replacement cycle ~8 years plus first-time buyers → sanity-check the result against any anchor you know. The score is in the method: round numbers chosen for arithmetic ease, each assumption flagged as an assumption, a written running product, and a final sanity check (“does 6–7 million a year feel right for a 280-million-person country? roughly one per 40 people per year — plausible”). Exact answers do not exist; auditable answers win.",
        "id": "Setiap penaksiran terurai sebagai <b>populasi × porsi berlaku × frekuensi × nilai</b>. Sepeda motor terjual di Indonesia per tahun: ~280 jt orang → ~70 jt rumah tangga (asumsi 4 per rumah tangga, diucapkan) → asumsikan ~60% memiliki atau menginginkan motor di segmen terjangkau → siklus penggantian ~8 tahun plus pembeli pertama → uji kewajaran hasil terhadap jangkar apa pun yang kamu tahu. Skornya ada di metode: angka bulat dipilih demi kemudahan aritmetika, tiap asumsi ditandai sebagai asumsi, hasil kali berjalan ditulis, dan pemeriksaan akhir (“apakah 6–7 juta per tahun wajar untuk negara 280 juta orang? kira-kira satu per 40 orang per tahun — masuk akal”). Jawaban persis tak ada; jawaban terauditkan yang menang."
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
        "id": "Saat grafik tiba, tahan keinginan menarasikannya (“ini menunjukkan pendapatan per wilayah…”). Protokol tiga puluh detik: baca judul, sumbu, satuan, catatan kaki; temukan pencilan, persilangan, atau patahan tren — peraga dipilih karena satu angka mengubah cerita; hubungkan ke pertanyaan kasus dalam satu kalimat: “Pesan kuncinya: wilayah C tumbuh 25% sementara lainnya menyusut — masalah klien bukan permintaan, melainkan tempat mereka bersaing.” Lalu biarkan pesan itu mengarahkan ulang pohonmu. Melatih sepuluh peraga cara ini (grafik publikasi bisnis mana pun bisa) membangun refleks dalam satu sore."
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
        "id": "“Klien kami, operator bus, mengalami penurunan laba 20% dalam dua tahun.”"
       },
       "weak": {
        "en": "“I would like to use the profitability framework, looking at revenue and costs. Revenue is price times volume. Costs are fixed and variable. I will also consider the market, the competition, and the customer segments using the 3C framework.”",
        "id": "“Saya akan memakai kerangka profitabilitas, melihat pendapatan dan biaya. Pendapatan adalah harga kali volume. Biaya ada tetap dan variabel. Saya juga akan mempertimbangkan pasar, kompetisi, dan segmen pelanggan dengan kerangka 3C.”"
       },
       "strong": {
        "en": "“Profit fell, so something moved in revenue, costs, or both. Given two years and no mention of new competitors, my hypothesis is a cost drift — fuel and maintenance are big lines for bus fleets. May I see how revenue and the main cost lines moved over the two years, so we can locate the damage before diagnosing it?”",
        "id": "“Laba turun, berarti ada yang bergerak di pendapatan, biaya, atau keduanya. Dengan rentang dua tahun dan tanpa sebutan pesaing baru, hipotesis saya penyimpangan biaya — BBM dan perawatan adalah pos besar armada bus. Boleh saya lihat pergerakan pendapatan dan pos biaya utama selama dua tahun itu, agar kita menemukan lokasi kerusakan sebelum mendiagnosisnya?”"
       },
       "why": {
        "en": "The strong opening builds the same tree but hangs the case's specifics on it, states a hypothesis, and asks for exactly the data that would test it — structure serving thought, not replacing it.",
        "id": "Pembuka kuat membangun pohon yang sama tetapi menggantungkan kekhususan kasus padanya, menyatakan hipotesis, dan meminta persis data yang mengujinya — struktur melayani pikiran, bukan menggantikannya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "In a sizing, why must assumptions be spoken rather than silently used?",
        "id": "Dalam penaksiran, mengapa asumsi harus diucapkan alih-alih dipakai diam-diam?"
       },
       "options": [
        {
         "en": "It fills time while you calculate",
         "id": "Ia mengisi waktu selagi kamu menghitung"
        },
        {
         "en": "Spoken assumptions can be corrected by the interviewer and turn the estimate into an auditable chain — the thing actually being scored",
         "id": "Asumsi terucap bisa dikoreksi pewawancara dan mengubah taksiran menjadi rantai terauditkan — hal yang sebenarnya dinilai"
        },
        {
         "en": "Interviewers penalise silence of any kind",
         "id": "Pewawancara menghukum semua jenis keheningan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The estimate's value is its method. Hidden assumptions make the number a guess; stated ones make it an analysis.",
        "id": "Nilai taksiran ada pada metodenya. Asumsi tersembunyi menjadikan angka itu tebakan; yang dinyatakan menjadikannya analisis."
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
      "id": "Penyampaian menentukan kasus di garis batas: caramu membuka, menarasikan pikiran, menghadapi kesalahan, dan mendaratkan rekomendasi. Pelajaran ini menskripkan lapisan komunikasi yang duduk di atas analisis."
     },
     "objectives": [
      {
       "en": "Run the case rhythm: clarify, structure, analyse aloud, synthesise.",
       "id": "Menjalankan ritme kasus: klarifikasi, struktur, analisis bersuara, sintesis."
      },
      {
       "en": "Narrate thinking without rambling — the guided-tour technique.",
       "id": "Menarasikan pikiran tanpa melantur — teknik tur berpemandu."
      },
      {
       "en": "Deliver the closing recommendation in the four-sentence format.",
       "id": "Menyampaikan rekomendasi penutup dalam format empat kalimat."
      }
     ],
     "takeaways": [
      {
       "en": "Clarifying questions are scored, not penalised: one minute of them prevents ten minutes of solving the wrong case.",
       "id": "Pertanyaan klarifikasi dinilai, bukan dihukum: satu menit klarifikasi mencegah sepuluh menit menyelesaikan kasus yang salah."
      },
      {
       "en": "Narrated thinking is a guided tour, not a stream of consciousness — announce where you are going before you go.",
       "id": "Pikiran ternarasikan adalah tur berpemandu, bukan arus kesadaran — umumkan tujuanmu sebelum berangkat."
      },
      {
       "en": "The closing is answer-first: recommendation, two reasons, main risk, first step. Rehearse the shape until automatic.",
       "id": "Penutup itu jawaban-dulu: rekomendasi, dua alasan, risiko utama, langkah pertama. Latih bentuknya sampai otomatis."
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
        "id": "<b>Klarifikasi (1–2 menit):</b> nyatakan ulang masalah dalam satu kalimat dan pastikan tujuannya — “jadi sukses berarti memulihkan margin ke 12% dalam setahun, bukan menumbuhkan pangsa?” Tanyakan yang sungguh kamu butuhkan: lingkup, rentang waktu, definisi. <b>Struktur (1 menit):</b> sajikan pohon, prioritaskan satu cabang, beri alasan. <b>Analisis (bagian terbesar):</b> kerjakan cabang demi cabang, minta data, kerjakan aritmetika di kertas sambil menarasikan titik periksa. <b>Sintesis (2 menit terakhir):</b> penutup empat kalimat. Disiplin waktu milikmu untuk dijaga, dengan sopan: “tersisa sekitar sepuluh menit — saya perdalam biaya atau bergerak ke rekomendasi?” adalah langkah kuat, bukan lancang."
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
        "id": "Keheningan terbaca sebagai ketiadaan; ocehan terbaca sebagai kekacauan. Jalan tengahnya mengumumkan tujuan: “Saya akan memeriksa apakah penurunan volume terjadi sepasar atau hanya kita — itu menentukan cabang mana yang penting.” Lalu kerjakan, diam sejenak bila perlu, dan laporkan: “Pasar turun 3%, kita turun 12% — ini sebagian besar masalah kita. Berikutnya saya ingin ekonomi unit.” Umumkan, kerjakan, laporkan — pewawancara selalu tahu posisimu di peta yang tak bisa mereka lihat. Saat butuh waktu berpikir, beli secara eksplisit: “boleh saya ambil tiga puluh detik untuk merapikan ini?” — selalu diberikan, dan jauh lebih kuat daripada tiga puluh detik tenggelam yang terlihat."
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
        "id": "Saat pewawancara mendorong balik (“yakin biaya tetap bekerja begitu?”), dorongan menguji pembaruan, bukan kesalahannya sendiri. Pola anggunnya: jeda, turunkan ulang, dan koreksi — “benar, saya mencampur tetap dengan hangus; saya ulang baris itu” — atau pertahankan dengan hormat disertai penalaran. Keduanya berskor; defensif semata yang gagal. Penutup, dalam empat kalimat terlatih: <b>Rekomendasi</b> (“saya sarankan klien keluar dari dua rute merugi dan memindahkan bus ke rute C”). <b>Alasan</b> (“C tumbuh 25% dengan margin tertinggi kita; rute yang ditinggal rugi di tiap perjalanan tanpa perbaikan masuk akal”). <b>Risiko</b> (“risiko utama: penalti kontrak saat keluar — layak dihitung dulu”). <b>Langkah pertama</b> (“mulai dengan pilot 90 hari memindahkan empat bus”). Latih sampai bentuknya bertahan dari adrenalin."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "You need 30 seconds to organise your structure. The strong move is:",
        "id": "Kamu butuh 30 detik merapikan struktur. Langkah kuatnya:"
       },
       "options": [
        {
         "en": "Keep talking while you think — silence is death",
         "id": "Terus bicara sambil berpikir — hening itu maut"
        },
        {
         "en": "Ask for the time explicitly, take it in silence, return with the organised structure",
         "id": "Minta waktunya secara eksplisit, ambil dalam hening, kembali dengan struktur rapi"
        },
        {
         "en": "Skip structuring and dive into the first idea",
         "id": "Lewati penstrukturan dan terjun ke ide pertama"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Requested thinking time reads as discipline; unrequested silence reads as drowning; babble reads as chaos. The request converts the same seconds into a strength.",
        "id": "Waktu berpikir yang diminta terbaca sebagai disiplin; hening tanpa izin terbaca tenggelam; ocehan terbaca kacau. Permintaan mengubah detik yang sama menjadi kekuatan."
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
      "id": "Dua kasus latihan penuh dengan jawaban model bertahap — kasus profitabilitas dan masuk pasar dengan penaksiran — dikerjakan keputusan demi keputusan, lalu protokol latihan rekan yang mengubah modul ini menjadi kebiasaan mingguan."
     },
     "objectives": [
      {
       "en": "Work two complete cases against staged model answers.",
       "id": "Mengerjakan dua kasus lengkap terhadap jawaban model bertahap."
      },
      {
       "en": "Practise the rhythm: clarify, structure, analyse, synthesise — under self-timing.",
       "id": "Melatih ritme: klarifikasi, struktur, analisis, sintesis — dengan pewaktuan sendiri."
      },
      {
       "en": "Set up weekly peer cases with the four-dimension scoresheet.",
       "id": "Menyiapkan kasus rekan mingguan dengan lembar skor empat dimensi."
      }
     ],
     "takeaways": [
      {
       "en": "Attempt before revealing: the gap between your move and the model is the curriculum.",
       "id": "Coba sebelum membuka: celah antara langkahmu dan model adalah kurikulumnya."
      },
      {
       "en": "Casing is a two-player sport — a partner reading a case script gives you 80% of a real interviewer.",
       "id": "Casing adalah olahraga dua pemain — rekan yang membaca skrip kasus memberimu 80% pewawancara sungguhan."
      },
      {
       "en": "Six practice cases move most candidates from panic to competence; track your four dimensions across them.",
       "id": "Enam kasus latihan memindahkan kebanyakan kandidat dari panik ke kompeten; lacak empat dimensimu sepanjang itu."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "How to run these",
        "id": "Cara menjalankannya"
       },
       "body": {
        "en": "Give each case 25 minutes. Write your clarifying questions, structure, and calculations on paper exactly as you would in the room; speak your narration aloud — the speaking is the training. Open each stage's debrief only after committing to your own move. Afterwards, score yourself one to five on the four dimensions and log it; the same scoresheet serves your peer sessions.",
        "id": "Beri tiap kasus 25 menit. Tulis pertanyaan klarifikasi, struktur, dan perhitunganmu di kertas persis seperti di ruangan; ucapkan narasimu bersuara — berbicaranya itulah latihannya. Buka pembahasan tiap tahap hanya setelah menetapkan langkahmu sendiri. Setelahnya, nilai dirimu satu sampai lima pada empat dimensi dan catat; lembar skor yang sama melayani sesi rekanmu."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Case A, stage 1 — The bleeding laundry chain",
        "id": "Kasus A, tahap 1 — Jaringan laundry yang berdarah"
       },
       "body": {
        "en": "“Our client operates 15 self-service laundromats in Greater Jakarta. Profit has fallen 35% in 18 months. Diagnose and recommend.” Write your clarifiers and structure, then reveal.",
        "id": "“Klien kami mengoperasikan 15 laundromat swalayan di Jabodetabek. Laba turun 35% dalam 18 bulan. Diagnosis dan rekomendasikan.” Tulis klarifikasi dan strukturmu, lalu buka."
       },
       "debrief": {
        "en": "Model clarifiers: is the 35% across all outlets or concentrated? any known market change (competitors, input costs)? what does the client count as profit (before/after rent)? Model structure: profit = revenue (price × loads per outlet) − costs (rent, utilities — water and electricity dominate laundromats — labour, maintenance), prioritising whichever side the concentration answer indicates. The trap to catch in yourself: proposing marketing fixes before locating the damage. Interviewer data: profits fell in all outlets; electricity tariffs rose 30%; two new competitors undercut price near 5 outlets. Now the tree has two live branches — cost drift everywhere, price pressure locally.",
        "id": "Klarifikasi model: apakah 35% merata semua gerai atau terkonsentrasi? adakah perubahan pasar diketahui (pesaing, biaya input)? apa yang dihitung klien sebagai laba (sebelum/sesudah sewa)? Struktur model: laba = pendapatan (harga × muatan per gerai) − biaya (sewa, utilitas — air dan listrik mendominasi laundromat — tenaga kerja, perawatan), memprioritaskan sisi yang ditunjukkan jawaban konsentrasi. Perangkap yang harus kamu tangkap pada dirimu: mengusulkan perbaikan pemasaran sebelum menemukan lokasi kerusakan. Data pewawancara: laba turun di semua gerai; tarif listrik naik 30%; dua pesaing baru memotong harga dekat 5 gerai. Kini pohon punya dua cabang hidup — penyimpangan biaya di mana-mana, tekanan harga lokal."
       }
      },
      {
       "h": {
        "en": "Case A, stage 2 — Numbers and the close",
        "id": "Kasus A, tahap 2 — Angka dan penutup"
       },
       "body": {
        "en": "Data: average outlet revenue Rp 60m/month, flat. Electricity was 25% of revenue, now 32.5%. The 5 contested outlets lost 20% of loads. Quantify the two effects and deliver the four-sentence close. Then reveal.",
        "id": "Data: pendapatan rata-rata gerai Rp 60 jt/bulan, stagnan. Listrik semula 25% pendapatan, kini 32,5%. Lima gerai terdampak kehilangan 20% muatan. Kuantifikasi dua efek dan sampaikan penutup empat kalimat. Lalu buka."
       },
       "debrief": {
        "en": "Electricity: +7.5 points of revenue × 15 outlets ≈ Rp 67.5m/month of margin gone — the dominant effect. Contested volume: 5 outlets × Rp 60m × 20% ≈ Rp 60m of revenue at risk, but only its margin (~say 30%) ≈ Rp 18m/month of profit. Model close: “Recommend attacking energy first: efficiency retrofit and off-peak pricing to shift loads — that addresses roughly three-quarters of the decline; defend the five contested outlets with targeted loyalty pricing rather than chain-wide cuts. Main risk: retrofit capex payback needs checking. First step: meter-level energy audit of three outlets this month.” If your close led with the competitors, note the lesson: size effects before choosing villains — the boring tariff outweighed the visible rivals.",
        "id": "Listrik: +7,5 poin pendapatan × 15 gerai ≈ Rp 67,5 jt/bulan margin hilang — efek dominan. Volume terdampak: 5 gerai × Rp 60 jt × 20% ≈ Rp 60 jt pendapatan berisiko, tetapi hanya marginnya (~misal 30%) ≈ Rp 18 jt/bulan laba. Penutup model: “Sarankan serang energi dulu: retrofit efisiensi dan harga di luar jam sibuk untuk menggeser muatan — itu menangani kira-kira tiga perempat penurunan; pertahankan lima gerai terdampak dengan harga loyalitas tertarget alih-alih potongan se-jaringan. Risiko utama: balik modal capex retrofit perlu diperiksa. Langkah pertama: audit energi level meteran tiga gerai bulan ini.” Jika penutupmu memimpin dengan pesaing, catat pelajarannya: ukur efek sebelum memilih penjahat — tarif membosankan mengalahkan rival yang terlihat."
       }
      },
      {
       "h": {
        "en": "Case B — Entry plus sizing",
        "id": "Kasus B — Masuk pasar plus penaksiran"
       },
       "body": {
        "en": "“A Thai bubble-tea chain considers entering Indonesia. Should they? Start by sizing the urban ready-to-drink tea-shop market.” Run the sizing engine and the entry structure, then reveal.",
        "id": "“Jaringan bubble tea Thailand mempertimbangkan masuk Indonesia. Haruskah? Mulai dengan menaksir pasar kedai minuman teh siap minum perkotaan.” Jalankan mesin penaksiran dan struktur masuk pasar, lalu buka."
       },
       "debrief": {
        "en": "Model sizing (yours will differ — the chain matters, not the total): ~60m urban dwellers aged 10–45 in target cities → assume 40% buy from tea shops at all → average buyer ~3 cups/month → ~72m cups/month → at ~Rp 25k average ≈ Rp 1.8tn/month ≈ Rp 21–22tn/year; sanity anchor: thousands of existing outlets doing plausible per-outlet volumes — coherent. Entry structure: market attractiveness (size ✓, growth, competition intensity — heavy incumbents), ability to win (brand strength vs local players, supply chain for tapioca and tea, site access, price point vs incumbents), entry mode (franchise vs owned vs JV) and its risks. Model recommendation: enter via a 10-store owned pilot in two cities to test price point against incumbents before committing to national franchise — a staged decision with a trigger, exactly like Map 3.3's shop case. The rhyme is deliberate: same chain, bigger board.",
        "id": "Penaksiran model (milikmu akan berbeda — rantainya yang penting, bukan totalnya): ~60 jt penduduk kota usia 10–45 di kota target → asumsikan 40% pernah membeli dari kedai teh → pembeli rata-rata ~3 gelas/bulan → ~72 jt gelas/bulan → pada rata-rata ~Rp 25 rb ≈ Rp 1,8 T/bulan ≈ Rp 21–22 T/tahun; jangkar kewajaran: ribuan gerai eksisting dengan volume per gerai masuk akal — koheren. Struktur masuk: daya tarik pasar (ukuran ✓, pertumbuhan, intensitas persaingan — petahana kuat), kemampuan menang (kekuatan merek vs pemain lokal, rantai pasok tapioka dan teh, akses lokasi, titik harga vs petahana), mode masuk (waralaba vs milik sendiri vs JV) dan risikonya. Rekomendasi model: masuk lewat pilot 10 toko milik sendiri di dua kota untuk menguji titik harga terhadap petahana sebelum komit waralaba nasional — keputusan bertahap dengan pemicu, persis kasus toko Map 3.3. Rimanya disengaja: rantai sama, papan lebih besar."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Reading cases instead of doing them",
         "id": "Membaca kasus alih-alih mengerjakannya"
        },
        "fix": {
         "en": "Recognition feels like competence and is not. Paper, pen, timer, voice — every time.",
         "id": "Mengenali terasa seperti kompeten padahal bukan. Kertas, pena, pewaktu, suara — setiap kali."
        }
       },
       {
        "h": {
         "en": "Solo-only practice",
         "id": "Latihan hanya sendirian"
        },
        "fix": {
         "en": "Weekly peer sessions: one gives the case from a script, one solves, both score the four dimensions, swap. The giver learns as much as the solver.",
         "id": "Sesi rekan mingguan: satu memberi kasus dari skrip, satu memecahkan, keduanya menskor empat dimensi, bertukar. Pemberi belajar sebanyak pemecah."
        }
       },
       {
        "h": {
         "en": "Chasing case volume over review depth",
         "id": "Mengejar volume kasus daripada kedalaman tinjauan"
        },
        "fix": {
         "en": "Six cases with written reviews beat twenty without. After each: which dimension lagged, and what is the one adjustment?",
         "id": "Enam kasus dengan tinjauan tertulis mengalahkan dua puluh tanpa. Setelah masing-masing: dimensi mana tertinggal, dan apa satu penyesuaiannya?"
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "In Case A, what error does “attack the new competitors first” reveal?",
        "id": "Di Kasus A, kesalahan apa yang diungkap “serang pesaing baru dulu”?"
       },
       "options": [
        {
         "en": "Ignoring the customer perspective",
         "id": "Mengabaikan sudut pandang pelanggan"
        },
        {
         "en": "Choosing the visible cause over the quantified one — the tariff effect was four times larger",
         "id": "Memilih sebab yang terlihat daripada yang terkuantifikasi — efek tarif empat kali lebih besar"
        },
        {
         "en": "Failing to use the 4P framework",
         "id": "Gagal memakai kerangka 4P"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Sizing before prioritising is the discipline: the dramatic story (competitors!) lost to the boring number (electricity) by 4×.",
        "id": "Mengukur sebelum memprioritaskan adalah disiplinnya: cerita dramatis (pesaing!) kalah dari angka membosankan (listrik) sebesar 4×."
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
    "id": "Alat Lamaran Berbantuan AI"
   },
   "overview": {
    "en": "Module 8 of The Pack focuses on ai-powered application tools. Work through the lessons in order — each builds on the last.",
    "id": "Modul 8 dari The Pack berfokus pada Alat Lamaran Berbantuan AI. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply ai-powered application tools to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Alat Lamaran Berbantuan AI pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "8.1",
     "title": {
      "en": "Introduction to AI Application Tools — What They Can and Cannot Do",
      "id": "Pengantar Alat Lamaran AI — Apa yang Bisa dan Tidak Bisa Dilakukan"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "AI tools have changed application work on both sides of the funnel: candidates draft with them, employers screen with them. This lesson maps what current tools genuinely do well, where they fail dangerously, and the disclosure-and-honesty rules that keep AI an advantage instead of a liability.",
      "id": "Alat AI telah mengubah kerja lamaran di kedua sisi corong: kandidat menyusun draf dengannya, pemberi kerja menyaring dengannya. Pelajaran ini memetakan yang benar-benar dikerjakan baik oleh alat saat ini, tempat mereka gagal berbahaya, dan aturan keterbukaan-dan-kejujuran yang menjaga AI tetap keunggulan alih-alih beban."
     },
     "objectives": [
      {
       "en": "Map the AI application toolscape: drafting, tailoring, scoring, research.",
       "id": "Memetakan lanskap alat AI lamaran: penyusunan, penyesuaian, penilaian, riset."
      },
      {
       "en": "Name the three failure modes: hallucinated facts, generic sludge, and false confidence.",
       "id": "Menyebutkan tiga mode kegagalan: fakta halusinasi, bubur generik, dan keyakinan palsu."
      },
      {
       "en": "Apply the ownership rule: AI drafts, you verify and decide — your name signs everything.",
       "id": "Menerapkan aturan kepemilikan: AI menyusun, kamu memverifikasi dan memutuskan — namamu menandatangani semuanya."
      }
     ],
     "takeaways": [
      {
       "en": "AI is a strong drafting assistant and a weak biographer: it will confidently invent your achievements if allowed.",
       "id": "AI adalah asisten draf yang kuat dan penulis biografi yang lemah: ia akan dengan yakin mengarang prestasimu jika dibiarkan."
      },
      {
       "en": "Recruiters now recognise unedited AI text on sight; generic sludge screens you out at the human stage.",
       "id": "Perekrut kini mengenali teks AI tanpa suntingan sekali lihat; bubur generik menyaringmu keluar di tahap manusia."
      },
      {
       "en": "Everything submitted under your name is your claim — the honesty rule from Module 2 applies to AI output unchanged.",
       "id": "Semua yang dikirim atas namamu adalah klaimmu — aturan kejujuran Modul 2 berlaku pada keluaran AI tanpa berubah."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "What the tools do well",
        "id": "Yang dikerjakan alat dengan baik"
       },
       "body": {
        "en": "Used properly, current AI assistants accelerate four jobs. <b>Drafting:</b> turning your raw notes about an internship into candidate bullet lines — you supply facts, it supplies fluency. <b>Tailoring:</b> comparing your CV against a JD and suggesting which evidence to lead with (the Screening Gym's ATS check does the keyword-coverage half of this transparently, on-device). <b>Research:</b> summarising a company's products, recent news and competitors before a letter or interview. <b>Rehearsal:</b> generating likely interview questions from a JD to practise against — The Rope's simulator builds this into a full training loop. The common thread: AI compresses hours of blank-page work into minutes of editing work.",
        "id": "Dipakai dengan benar, asisten AI saat ini mempercepat empat pekerjaan. <b>Penyusunan:</b> mengubah catatan mentahmu tentang magang menjadi kandidat baris butir — kamu memasok fakta, ia memasok kelancaran. <b>Penyesuaian:</b> membandingkan CV-mu dengan JD dan menyarankan bukti mana yang memimpin (pemeriksa ATS Gym Penyaringan mengerjakan separuh cakupan-kata-kunci ini secara transparan, on-device). <b>Riset:</b> merangkum produk, berita terkini, dan pesaing perusahaan sebelum surat atau wawancara. <b>Gladi:</b> menghasilkan pertanyaan wawancara yang mungkin dari JD untuk dilatih — simulator The Rope membangun ini menjadi putaran latihan penuh. Benang merahnya: AI memampatkan berjam-jam kerja halaman-kosong menjadi menit-menit kerja penyuntingan."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Where they fail dangerously",
        "id": "Tempat mereka gagal berbahaya"
       },
       "body": {
        "en": "<b>Hallucination:</b> ask an AI to “improve” your CV and it may upgrade “helped with social media” into “led a team of five in a viral campaign” — fluent, plausible, false, and yours the moment you submit it. <b>Generic sludge:</b> unedited AI cover letters share a recognisable texture — balanced sentences, empty enthusiasm, zero specifics — and recruiters who read hundreds now discount it instantly; the tool that was supposed to differentiate you mass-produces you. <b>False confidence:</b> AI research summaries occasionally state wrong facts about companies with perfect fluency; one invented “recent product launch” in a cover letter reveals both the tool and the unchecked delegation. Every failure mode has the same root: output not verified by the person who signs it.",
        "id": "<b>Halusinasi:</b> minta AI “memperbaiki” CV-mu dan ia bisa menaikkan “membantu media sosial” menjadi “memimpin tim lima orang dalam kampanye viral” — lancar, masuk akal, palsu, dan menjadi milikmu begitu dikirim. <b>Bubur generik:</b> surat lamaran AI tanpa suntingan berbagi tekstur yang dikenali — kalimat seimbang, antusiasme kosong, nol kekhususan — dan perekrut yang membaca ratusan kini langsung mendiskonnya; alat yang seharusnya membedakanmu justru memproduksi massalmu. <b>Keyakinan palsu:</b> ringkasan riset AI sesekali menyatakan fakta salah tentang perusahaan dengan kelancaran sempurna; satu “peluncuran produk terbaru” karangan dalam surat lamaran membongkar alatnya sekaligus delegasi tanpa periksa. Semua mode kegagalan berakar sama: keluaran tak diverifikasi oleh orang yang menandatanganinya."
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
        "id": "Tiga garis menjaga AI di sisi benar lamaranmu. <b>Fakta mengalir satu arah:</b> darimu ke alat — AI tak pernah memperkenalkan prestasi, angka, alat, atau jabatan yang tak kamu berikan; catatan indukmu (6.4) satu-satunya sumber fakta. <b>Setiap keluaran disunting:</b> suaramu, kekhususanmu, minimal satu detail per dokumen yang tak mungkin diketahui AI. <b>Keterbukaan mengikuti aturan penanya:</b> bila pemberi kerja bertanya apakah AI dipakai, jawab jujur; bila tes melarangnya, larangan itulah tesnya. Pemberi kerja makin menggali lamaran yang terpoles mencurigakan saat wawancara — pertahanan terpasti adalah semua yang diklaim benar dan semua yang tertulis sungguh milikmu setelah penyuntingan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "An AI rewrite of your CV added “managed a Rp 50m budget” to an internship where you tracked expenses in a spreadsheet. What happened and what do you do?",
        "id": "Penulisan ulang AI atas CV-mu menambah “mengelola anggaran Rp 50 jt” pada magang tempat kamu mencatat pengeluaran di spreadsheet. Apa yang terjadi dan apa tindakanmu?"
       },
       "options": [
        {
         "en": "The AI found a better framing — keep it, it sounds stronger",
         "id": "AI menemukan pembingkaian lebih baik — pertahankan, terdengar lebih kuat"
        },
        {
         "en": "It hallucinated a claim you never made — delete it, and restate the true scope: “tracked Rp 50m of project expenses”",
         "id": "Ia menghalusinasi klaim yang tak pernah kamu buat — hapus, dan nyatakan lingkup sebenarnya: “mencatat pengeluaran proyek Rp 50 jt”"
        },
        {
         "en": "Keep it but be ready to explain in interviews",
         "id": "Pertahankan tapi siap menjelaskan di wawancara"
        }
       ],
       "correct": 1,
       "why": {
        "en": "“Managed” claims authority you did not hold — a reference check away from disqualification. The true version, precisely framed, is still a strong line.",
        "id": "“Mengelola” mengklaim wewenang yang tak kamu pegang — satu pemeriksaan referensi dari diskualifikasi. Versi benar, dibingkai presisi, tetap baris yang kuat."
       }
      }
     ],
     "quote": {
      "en": "AI may help you present your truth at its best — never someone else's.",
      "id": "AI boleh membantumu menyajikan kebenaranmu pada versi terbaiknya — jangan pernah kebenaran orang lain."
     }
    },
    {
     "n": "8.2",
     "title": {
      "en": "AI for CV and Resume Optimisation",
      "id": "AI untuk Optimasi CV dan Resume"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The CV workflow with AI in the loop, end to end: facts from your master record, drafts from the tool, evidence discipline from Module 2, and verification passes that catch what the tool invented. With worked prompts and before/after lines.",
      "id": "Alur kerja CV dengan AI dalam putarannya, ujung ke ujung: fakta dari catatan indukmu, draf dari alat, disiplin bukti dari Modul 2, dan lintasan verifikasi yang menangkap karangan alat. Dengan prompt tergarap dan baris sebelum/sesudah."
     },
     "objectives": [
      {
       "en": "Run the five-step AI CV workflow: facts in, draft out, edit, verify, ATS-check.",
       "id": "Menjalankan alur CV AI lima langkah: fakta masuk, draf keluar, sunting, verifikasi, periksa ATS."
      },
      {
       "en": "Write fact-rich prompts that prevent hallucination by construction.",
       "id": "Menulis prompt kaya fakta yang mencegah halusinasi sejak konstruksi."
      },
      {
       "en": "Verify AI output line by line against the master record.",
       "id": "Memverifikasi keluaran AI baris demi baris terhadap catatan induk."
      }
     ],
     "takeaways": [
      {
       "en": "The prompt carries the facts; the tool carries the fluency; you carry the responsibility.",
       "id": "Prompt membawa fakta; alat membawa kelancaran; kamu membawa tanggung jawab."
      },
      {
       "en": "Give the AI your rough notes and the bullet formula — never ask it to “make my CV more impressive”.",
       "id": "Beri AI catatan kasarmu dan formula butir — jangan pernah memintanya “membuat CV-ku lebih mengesankan”."
      },
      {
       "en": "The verification pass reads for three things: invented facts, inflated verbs, and lost specificity.",
       "id": "Lintasan verifikasi membaca tiga hal: fakta karangan, kata kerja menggembung, dan kekhususan yang hilang."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "The five-step workflow",
        "id": "Alur lima langkah"
       },
       "body": {
        "en": "<b>1 · Facts in:</b> from the master record, write rough notes per role — what you did, numbers, tools, outcomes — ugly is fine. <b>2 · Draft out:</b> prompt the tool with the notes, the bullet formula (strong verb + scope + measured result), and the target JD's top requirements; ask for two or three candidate versions per bullet. <b>3 · Edit:</b> pick and adjust — your voice, correct emphasis, one specific detail per bullet the tool could not know. <b>4 · Verify:</b> line-by-line against the master record — every number, title, tool and claim traced to its source or deleted. <b>5 · ATS-check:</b> run the Gym's check against the JD; add honestly supportable missing keywords; run the parse test. Twenty minutes per tailored CV once the master record exists.",
        "id": "<b>1 · Fakta masuk:</b> dari catatan induk, tulis catatan kasar per peran — yang kamu lakukan, angka, alat, hasil — jelek tak apa. <b>2 · Draf keluar:</b> beri alat catatan itu, formula butir (kata kerja kuat + lingkup + hasil terukur), dan persyaratan teratas JD target; minta dua-tiga versi kandidat per butir. <b>3 · Sunting:</b> pilih dan sesuaikan — suaramu, penekanan benar, satu detail spesifik per butir yang tak mungkin diketahui alat. <b>4 · Verifikasi:</b> baris demi baris terhadap catatan induk — tiap angka, jabatan, alat, dan klaim ditelusuri ke sumbernya atau dihapus. <b>5 · Periksa ATS:</b> jalankan pemeriksa Gym terhadap JD; tambah kata kunci hilang yang didukung jujur; jalankan uji parse. Dua puluh menit per CV tersesuaikan begitu catatan induk ada."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "Prompts that work",
        "id": "Prompt yang bekerja"
       },
       "body": {
        "en": "Weak prompt: “Improve my CV for a data analyst role” — an invitation to invent. Strong prompt: “Here are my rough notes on an internship [paste facts]. Here are the top requirements of the target JD [paste]. Write three versions of two CV bullets using only facts from my notes, in the pattern: strong verb + what + scope numbers + measured result. Do not add any tool, number or achievement not present in my notes. Flag any place where a metric is missing and ask me for it instead of estimating.” The last sentence converts the tool's failure mode into a feature: instead of inventing your missing metric, it asks — and the question (“how many rows was that dataset?”) often reminds you of evidence you forgot you had.",
        "id": "Prompt lemah: “Perbaiki CV-ku untuk peran data analyst” — undangan mengarang. Prompt kuat: “Ini catatan kasarku tentang magang [tempel fakta]. Ini persyaratan teratas JD target [tempel]. Tulis tiga versi dari dua butir CV memakai hanya fakta dari catatanku, dengan pola: kata kerja kuat + apa + angka lingkup + hasil terukur. Jangan tambah alat, angka, atau prestasi yang tak ada di catatanku. Tandai tempat metrik hilang dan tanyakan padaku alih-alih menaksir.” Kalimat terakhir mengubah mode gagal alat menjadi fitur: alih-alih mengarang metrik yang hilang, ia bertanya — dan pertanyaannya (“berapa baris dataset itu?”) sering mengingatkanmu pada bukti yang kamu lupa miliki."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "The verification read",
        "id": "Pembacaan verifikasi"
       },
       "body": {
        "en": "Read the draft three times, once per failure mode. <b>Invented facts:</b> any number, tool, title or outcome not in your notes — delete or correct, no exceptions, however good it sounds. <b>Inflated verbs:</b> “led” where you contributed, “managed” where you tracked, “designed” where you implemented — downgrade to the true verb; precision reads as credibility, and interviews are calibrated to the verbs you chose. <b>Lost specificity:</b> AI smooths distinctive details into generic phrasing — restore the community name, the actual tool version, the odd concrete number (“Rp 85m” not “a substantial budget”), because those details are what make evidence believable and memorable.",
        "id": "Baca draf tiga kali, sekali per mode gagal. <b>Fakta karangan:</b> angka, alat, jabatan, atau hasil apa pun yang tak ada di catatanmu — hapus atau koreksi, tanpa kecuali, sebagus apa pun bunyinya. <b>Kata kerja menggembung:</b> “memimpin” padahal berkontribusi, “mengelola” padahal mencatat, “merancang” padahal mengimplementasi — turunkan ke kata kerja sebenarnya; presisi terbaca sebagai kredibilitas, dan wawancara dikalibrasi ke kata kerja pilihanmu. <b>Kekhususan hilang:</b> AI menghaluskan detail khas menjadi frasa generik — pulihkan nama komunitas, versi alat sebenarnya, angka konkret yang ganjil (“Rp 85 jt”, bukan “anggaran besar”), karena detail itulah yang membuat bukti dapat dipercaya dan diingat."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "AI-assisted bullet — unedited vs owned",
        "id": "Butir berbantuan AI — tanpa suntingan vs dimiliki"
       },
       "q": {
        "en": "From notes: “thesis - scraped 3 marketplace sites, python, ~90k listings, found price gap pattern, seller association invited me to present”",
        "id": "Dari catatan: “skripsi - scraping 3 situs marketplace, python, ~90 rb listing, menemukan pola celah harga, asosiasi penjual mengundang presentasi”"
       },
       "weak": {
        "en": "“Leveraged cutting-edge Python web scraping technologies to spearhead a comprehensive analysis of e-commerce marketplaces, delivering actionable insights that drove significant stakeholder engagement.”",
        "id": "“Memanfaatkan teknologi web scraping Python mutakhir untuk memelopori analisis komprehensif marketplace e-commerce, menghasilkan wawasan dapat ditindaklanjuti yang mendorong keterlibatan pemangku kepentingan signifikan.”"
       },
       "strong": {
        "en": "“Scraped and analysed ~90,000 listings from 3 Indonesian marketplaces (Python) for my thesis; identified a systematic cross-platform price gap that a regional seller association invited me to present to 40 members.”",
        "id": "“Melakukan scraping dan analisis ~90.000 listing dari 3 marketplace Indonesia (Python) untuk skripsi; menemukan celah harga lintas platform sistematis yang membuat asosiasi penjual regional mengundang saya presentasi di depan 40 anggota.”"
       },
       "why": {
        "en": "The weak version is fluent sludge — zero checkable facts survive. The strong version keeps every specific from the notes and adds the one detail (40 members) only the owner could supply.",
        "id": "Versi lemah adalah bubur lancar — nol fakta terperiksa yang bertahan. Versi kuat menjaga tiap kekhususan dari catatan dan menambah satu detail (40 anggota) yang hanya bisa dipasok pemiliknya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does the strong prompt instruct the AI to ask for missing metrics instead of estimating?",
        "id": "Mengapa prompt kuat menginstruksikan AI menanyakan metrik hilang alih-alih menaksir?"
       },
       "options": [
        {
         "en": "To make the conversation longer",
         "id": "Agar percakapannya lebih panjang"
        },
        {
         "en": "It blocks hallucination at the source and often surfaces real evidence you forgot you had",
         "id": "Ia memblokir halusinasi di sumbernya dan sering memunculkan bukti nyata yang kamu lupa miliki"
        },
        {
         "en": "AI estimates are usually too conservative",
         "id": "Taksiran AI biasanya terlalu konservatif"
        }
       ],
       "correct": 1,
       "why": {
        "en": "An estimating AI fills gaps with fiction; an asking AI fills them with your memory. The question is the safety mechanism.",
        "id": "AI yang menaksir mengisi celah dengan fiksi; AI yang bertanya mengisinya dengan ingatanmu. Pertanyaannya itulah mekanisme pengamannya."
       }
      }
     ],
     "tool": {
      "id": "studio",
      "mode": "cv",
      "title": {
       "en": "Let the rules do the reading",
       "id": "Biarkan aturan yang membaca"
      },
      "body": {
       "en": "The CV studio is this lesson in tool form: transparent lint rules for verbs, numbers and length — the checks AI tools run, shown openly so you learn what they reward.",
       "id": "Studio CV adalah pelajaran ini dalam bentuk alat: aturan lint transparan untuk kata kerja, angka, dan panjang — pemeriksaan yang dijalankan alat AI, ditampilkan terbuka agar kamu paham yang dihargainya."
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
      "id": "AI untuk Penilaian ATS dan Analisis Kesenjangan Kata Kunci"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Keyword-gap analysis with AI and without illusions: how matching actually works, how to close honest gaps, and why the Screening Gym's transparent on-device check is the calibration layer for any AI score you meet elsewhere.",
      "id": "Analisis celah kata kunci dengan AI dan tanpa ilusi: cara pencocokan sebenarnya bekerja, cara menutup celah dengan jujur, dan mengapa pemeriksa transparan on-device Gym Penyaringan adalah lapisan kalibrasi untuk skor AI mana pun yang kamu temui di tempat lain."
     },
     "objectives": [
      {
       "en": "Run a keyword-gap analysis between CV and JD, with AI and with the Gym's check.",
       "id": "Menjalankan analisis celah kata kunci antara CV dan JD, dengan AI dan dengan pemeriksa Gym."
      },
      {
       "en": "Close gaps honestly: rephrase, evidence, learn, or accept.",
       "id": "Menutup celah dengan jujur: ubah frasa, beri bukti, pelajari, atau terima."
      },
      {
       "en": "Calibrate third-party “ATS scores” against what they can actually know.",
       "id": "Mengalibrasi “skor ATS” pihak ketiga terhadap yang benar-benar bisa mereka ketahui."
      }
     ],
     "takeaways": [
      {
       "en": "A keyword gap has four honest closes: their term for your true experience, new evidence, actual learning — or acceptance.",
       "id": "Celah kata kunci punya empat penutup jujur: istilah mereka untuk pengalaman sejatimu, bukti baru, pembelajaran nyata — atau penerimaan."
      },
      {
       "en": "Commercial “ATS scores” estimate against generic models — treat them as linting, not verdicts.",
       "id": "“Skor ATS” komersial menaksir terhadap model generik — perlakukan sebagai linting, bukan vonis."
      },
      {
       "en": "The gap list doubles as interview prep: every keyword you claim will be probed by a human eventually.",
       "id": "Daftar celah merangkap persiapan wawancara: tiap kata kunci yang kamu klaim akhirnya akan digali manusia."
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
        "id": "Ekstrak dari JD: alat bernama, metode, kompetensi, istilah ranah — dibobot oleh pengulangan dan posisi. Bandingkan dengan CV-mu apa adanya. Pemeriksa ATS Gym mengotomatiskan persis ini, on-device dan transparan: ia menunjukkan istilah penopang JD mana yang muncul di CV-mu, mana yang hilang, dan di mana bagian tampak lemah bagi parser. Asisten AI menambah lintasan kedua yang berguna — sinonim dan kecocokan tersirat yang tak terlihat pemeriksa harfiah (“membangun dasbor mingguan” menyiratkan pengalaman pelaporan) — tetapi keluarannya adalah daftar saran, disaring lewat gerbang kejujuran yang sama dengan lainnya."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Four honest closes",
        "id": "Empat penutup jujur"
       },
       "body": {
        "en": "For each missing term, exactly one of four moves. <b>Rephrase:</b> you have the experience under different words — adopt their vocabulary (“coordinated with faculty and sponsors” becomes “stakeholder management”, truthfully). <b>Evidence:</b> you have adjacent experience worth an honest bullet that partially covers the term. <b>Learn:</b> the term names a real gap that matters across your target JDs — a weekend project or course converts it from gap to bullet (and “currently learning X, applied in [small project]” is a legitimate line). <b>Accept:</b> the gap is real and unclosable this cycle — apply anyway if the musts are met, and prepare the honest interview answer for when it comes up. What is never on the list: pasting the keyword without experience behind it.",
        "id": "Untuk tiap istilah hilang, tepat satu dari empat langkah. <b>Ubah frasa:</b> kamu punya pengalamannya dengan kata berbeda — adopsi kosakata mereka (“berkoordinasi dengan fakultas dan sponsor” menjadi “stakeholder management”, dengan jujur). <b>Bukti:</b> kamu punya pengalaman berdampingan yang layak satu butir jujur yang menutup sebagian istilah. <b>Pelajari:</b> istilah itu menamai celah nyata yang penting lintas JD targetmu — proyek akhir pekan atau kursus mengubahnya dari celah menjadi butir (dan “sedang mempelajari X, diterapkan di [proyek kecil]” adalah baris sah). <b>Terima:</b> celahnya nyata dan tak tertutup siklus ini — tetap lamar jika yang wajib terpenuhi, dan siapkan jawaban wawancara jujur untuk saat ia muncul. Yang tak pernah ada di daftar: menempel kata kunci tanpa pengalaman di baliknya."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Calibrating the scores",
        "id": "Mengalibrasi skor"
       },
       "body": {
        "en": "Commercial tools sell “ATS compatibility scores” with confident percentages. Understand what they can and cannot know: they can check parsing hygiene and keyword overlap against the JD you gave them — useful linting; they cannot know any specific employer's actual configuration, weights or knockouts, so “87% match” is an estimate against a generic model, not a prediction. Practical calibration: treat any score as a direction (higher coverage of load-bearing terms, cleaner parsing = better), ignore decimal precision, and never pay for a number the Gym's transparent check plus five minutes of judgment gives you honestly. The unfixable remainder — the employer's hidden weights — is exactly why referrals and evidence quality still dominate outcomes.",
        "id": "Alat komersial menjual “skor kompatibilitas ATS” dengan persentase percaya diri. Pahami yang bisa dan tak bisa mereka ketahui: mereka bisa memeriksa higiene parsing dan tumpang tindih kata kunci terhadap JD yang kamu beri — linting berguna; mereka tak bisa tahu konfigurasi, bobot, atau gugur aktual pemberi kerja spesifik mana pun, jadi “87% cocok” adalah taksiran terhadap model generik, bukan prediksi. Kalibrasi praktis: perlakukan skor apa pun sebagai arah (cakupan istilah penopang lebih tinggi, parsing lebih bersih = lebih baik), abaikan presisi desimal, dan jangan pernah membayar untuk angka yang diberikan jujur oleh pemeriksa transparan Gym plus lima menit penilaian. Sisa yang tak terperbaiki — bobot tersembunyi pemberi kerja — persis alasan referal dan mutu bukti tetap mendominasi hasil."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "The JD demands “experience with Tableau”; you have none but strong Excel dashboard work. The honest close?",
        "id": "JD menuntut “pengalaman Tableau”; kamu tak punya tetapi kuat di dasbor Excel. Penutup jujurnya?"
       },
       "options": [
        {
         "en": "Add Tableau to skills — dashboard concepts transfer anyway",
         "id": "Tambahkan Tableau ke keterampilan — konsep dasbor toh berpindah"
        },
        {
         "en": "Evidence the adjacent skill (“built 5 Excel dashboards used weekly by 20 staff”), start a small Tableau project, and list it as currently learning once real",
         "id": "Beri bukti keterampilan berdampingan (“membangun 5 dasbor Excel dipakai mingguan 20 staf”), mulai proyek Tableau kecil, dan cantumkan sebagai sedang dipelajari begitu nyata"
        },
        {
         "en": "Skip every JD that mentions Tableau",
         "id": "Lewati semua JD yang menyebut Tableau"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Adjacent evidence plus genuine learning covers the gap honestly and survives the interview probe that the pasted keyword would fail.",
        "id": "Bukti berdampingan plus pembelajaran sungguhan menutup celah dengan jujur dan lolos penggalian wawancara yang akan menggagalkan kata kunci tempelan."
       }
      }
     ],
     "tool": {
      "id": "gym",
      "mode": "ats",
      "title": {
       "en": "Run the transparent check",
       "id": "Jalankan pemeriksa transparan"
      },
      "body": {
       "en": "CV against JD, on your device, every matched and missing term visible — the calibration layer for any score anyone else sells you.",
       "id": "CV terhadap JD, di perangkatmu, tiap istilah cocok dan hilang terlihat — lapisan kalibrasi untuk skor apa pun yang dijual orang lain padamu."
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
      "id": "Surat dan riset, berbantuan AI tanpa bubur: alur riset perusahaan yang memverifikasi sebelum mengklaim, dan lintasan personalisasi yang mengembalikan manusia ke surat draf AI. Ditutup ringkasan etika modul."
     },
     "objectives": [
      {
       "en": "Run AI company research that separates verified facts from plausible fictions.",
       "id": "Menjalankan riset perusahaan AI yang memisahkan fakta terverifikasi dari fiksi masuk akal."
      },
      {
       "en": "Draft letters with AI, then apply the two-point personalisation pass by hand.",
       "id": "Menyusun surat dengan AI, lalu menerapkan lintasan personalisasi dua titik dengan tangan."
      },
      {
       "en": "State the module's ethics: where AI assistance ends and misrepresentation begins.",
       "id": "Menyatakan etika modul: di mana bantuan AI berakhir dan penyesatan dimulai."
      }
     ],
     "takeaways": [
      {
       "en": "AI research briefs are leads, not facts: every claim that enters your letter gets verified at the source.",
       "id": "Brief riset AI adalah petunjuk, bukan fakta: tiap klaim yang masuk suratmu diverifikasi di sumbernya."
      },
      {
       "en": "The two personalisation points (opening proof, why-them paragraph) must be human-made — they are what the reader checks.",
       "id": "Dua titik personalisasi (bukti pembuka, paragraf mengapa-mereka) harus buatan manusia — itulah yang diperiksa pembaca."
      },
      {
       "en": "The ethics line is constant across the module: assistance with your truth, never manufacture of a better one.",
       "id": "Garis etikanya konstan sepanjang modul: bantuan atas kebenaranmu, jangan pernah pabrikasi kebenaran yang lebih baik."
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
        "id": "Alurnya: minta AI brief terstruktur — produk, pelanggan, perkembangan terkini, pesaing, tantangan yang mungkin bagi tim yang kamu masuki — lalu <b>verifikasi sebelum pakai</b>: dua-tiga fakta yang akan kamu kutip diperiksa terhadap situs perusahaan sendiri, pencarian berita, atau laporan terbit mereka. Tugas AI adalah petanya; sumber adalah wilayahnya. Kebiasaan ini juga menaikkan kelas wawancara: “Saya membaca bagian audit pemasok di laporan keberlanjutan Anda” mendarat, dan bertahan dari susulan, dengan cara yang tak bisa dilakukan ringkasan tanpa verifikasi. Biaya waktu setelah terbiasa: lima belas menit per perusahaan, sebagian besar untuk membaca hal yang memang layak dibaca."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "The personalisation pass",
        "id": "Lintasan personalisasi"
       },
       "body": {
        "en": "Let the AI draft the letter's skeleton from your positioning paragraphs (5.3) — it is good at connective tissue. Then hand-write the two points readers actually check (2.4): the <b>opening proof</b>, chosen for this JD's top requirement, in your own phrasing with its own numbers; and the <b>why-them paragraph</b>, built on one verified fact and its genuine connection to you. Read the whole letter aloud once: anywhere your voice would not say it, rewrite it. The test of a done letter: could any other applicant have sent it? If yes, the personalisation pass is not finished.",
        "id": "Biarkan AI menyusun kerangka surat dari paragraf positioning-mu (5.3) — ia mahir pada jaringan penghubung. Lalu tulis tangan dua titik yang benar-benar diperiksa pembaca (2.4): <b>bukti pembuka</b>, dipilih untuk persyaratan teratas JD ini, dengan frasa dan angkamu sendiri; dan <b>paragraf mengapa-mereka</b>, dibangun di atas satu fakta terverifikasi dan hubungan tulusnya denganmu. Baca seluruh surat bersuara sekali: di mana pun suaramu tak akan mengatakannya, tulis ulang. Ujian surat selesai: mungkinkah pelamar lain mengirimnya? Jika ya, lintasan personalisasi belum selesai."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "The module's ethics, in one panel",
        "id": "Etika modul, dalam satu panel"
       },
       "body": {
        "en": "Legitimate: AI drafting from your true facts; AI tailoring suggestions you verify; AI research you check at source; AI mock interviews and question generation for practice. Illegitimate: invented experience however fluent; keywords without substance; AI-written assessment answers where the assessment tests your own writing; undisclosed AI use where disclosure is asked; live AI assistance in interviews — the position The Rope's integrity panel states publicly. The through-line of the whole module: employers are screening for who you are; AI may help you present that truthfully at your best, and may not help you present someone else.",
        "id": "Sah: penyusunan AI dari fakta sejatimu; saran penyesuaian AI yang kamu verifikasi; riset AI yang kamu periksa di sumber; wawancara tiruan dan pembangkitan pertanyaan AI untuk latihan. Tidak sah: pengalaman karangan sefasih apa pun; kata kunci tanpa substansi; jawaban asesmen tulisan AI padahal asesmen menguji tulisanmu sendiri; pemakaian AI tanpa keterbukaan saat keterbukaan diminta; bantuan AI langsung dalam wawancara — posisi yang dinyatakan publik oleh panel integritas The Rope. Benang merah seluruh modul: pemberi kerja menyaring siapa dirimu; AI boleh membantumu menyajikan itu dengan jujur pada versi terbaikmu, dan tak boleh membantumu menyajikan orang lain."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "An AI brief says the company “recently expanded to Vietnam”. Before citing it in your letter you should:",
        "id": "Brief AI menyebut perusahaan “baru saja berekspansi ke Vietnam”. Sebelum mengutipnya di suratmu kamu harus:"
       },
       "options": [
        {
         "en": "Cite it — AI research is usually right",
         "id": "Kutip saja — riset AI biasanya benar"
        },
        {
         "en": "Verify it on the company's site or news sources; cite only what you confirmed",
         "id": "Verifikasi di situs perusahaan atau sumber berita; kutip hanya yang kamu konfirmasi"
        },
        {
         "en": "Soften it to “I heard you may be expanding internationally”",
         "id": "Perlunak menjadi “saya dengar Anda mungkin berekspansi internasional”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "One hallucinated “fact” in a letter reveals unchecked delegation and sinks the application. Verification is minutes; the credibility is everything.",
        "id": "Satu “fakta” halusinasi dalam surat membongkar delegasi tanpa periksa dan menenggelamkan lamaran. Verifikasi hitungan menit; kredibilitasnya segalanya."
       }
      }
     ],
     "tool": {
      "id": "studio",
      "mode": "letter",
      "title": {
       "en": "Personalise against a real JD",
       "id": "Personalisasi terhadap JD nyata"
      },
      "body": {
       "en": "Paste a real JD into the letter developer's mirror check and watch which load-bearing terms your draft covers — the same gap analysis this lesson teaches, computed openly.",
       "id": "Tempel JD nyata ke cek pencerminan pengembang surat dan lihat istilah penopang mana yang dicakup drafmu — analisis celah yang sama seperti diajarkan pelajaran ini, dihitung terbuka."
      },
      "cta": {
       "en": "Open the letter developer →",
       "id": "Buka pengembang surat →"
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
    "id": "Modul 9 dari The Pack berfokus pada Etiket Profesional. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply professional etiquette to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Etiket Profesional pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
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
      "id": "Etiket bukan hiasan; ia penghormatan yang diterapkan, dan ia dibaca di tiap titik kontak pencalonanmu — sering sebelum kualifikasimu dibaca. Pelajaran ini memetakan tempat etiket terlihat, mengapa ia menggerakkan keputusan, dan setelan bawaan profesional yang tak pernah mempermalukanmu."
     },
     "objectives": [
      {
       "en": "Identify the touchpoints where candidates are etiquette-read: mail, calls, waits, follow-ups.",
       "id": "Mengenali titik kontak tempat kandidat dibaca etiketnya: surat, panggilan, penantian, tindak lanjut."
      },
      {
       "en": "Explain why etiquette functions as a competence preview for employers.",
       "id": "Menjelaskan mengapa etiket berfungsi sebagai pratinjau kompetensi bagi pemberi kerja."
      },
      {
       "en": "Install the professional defaults: response times, forms of address, punctuality buffers.",
       "id": "Memasang bawaan profesional: waktu respons, sapaan, penyangga ketepatan waktu."
      }
     ],
     "takeaways": [
      {
       "en": "Every interaction is read as a sample of your future workplace behaviour — because it is one.",
       "id": "Setiap interaksi dibaca sebagai sampel perilaku kerjamu kelak — karena memang begitu."
      },
      {
       "en": "Defaults beat improvisation: decide once how you address, respond, and arrive — then stop spending thought on it.",
       "id": "Bawaan mengalahkan improvisasi: putuskan sekali cara menyapa, merespons, dan tiba — lalu berhenti memikirkannya."
      },
      {
       "en": "Warmth and respect are the substance; the forms are just their local dialect.",
       "id": "Kehangatan dan hormat adalah substansinya; bentuk hanyalah dialek lokalnya."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "Where it shows",
        "id": "Di mana ia terlihat"
       },
       "body": {
        "en": "The etiquette read starts earlier than candidates think: the application email's subject line, whether instructions were followed, how you treat the receptionist and the scheduling coordinator (interviewers routinely ask them), your punctuality to calls, how you handle a rescheduled interview, the thank-you note, and how you respond to rejection. Two facts make these moments heavy. They are <b>low-noise</b>: unlike interview answers, nobody coaches their treatment of the coordinator, so it reads as character. And they are <b>remembered</b>: process notes in the ATS persist — the candidate who was rude to reception two years ago is still in the database.",
        "id": "Pembacaan etiket mulai lebih awal dari dugaan kandidat: subjek email lamaran, apakah instruksi diikuti, caramu memperlakukan resepsionis dan koordinator jadwal (pewawancara rutin bertanya pada mereka), ketepatanmu pada panggilan, caramu menangani wawancara yang dijadwalkan ulang, ucapan terima kasih, dan caramu merespons penolakan. Dua fakta membuat momen ini berat. Mereka <b>rendah derau</b>: tak seperti jawaban wawancara, tak ada yang melatih perlakuan pada koordinator, jadi ia terbaca sebagai karakter. Dan mereka <b>diingat</b>: catatan proses di ATS bertahan — kandidat yang kasar pada resepsionis dua tahun lalu masih ada di basis data."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "Why it moves decisions",
        "id": "Mengapa ia menggerakkan keputusan"
       },
       "body": {
        "en": "Hiring is risk assessment, and etiquette is the cheapest risk signal available. A candidate who replies within a day, follows instructions exactly, and treats juniors with respect is statistically predicting their behaviour with clients, deadlines and teammates. Between two similar finalists, the tie-breaker is almost never another skill question — it is “which one do we trust in front of a client?” Etiquette is also asymmetric: excellent manners rarely win a job alone, but poor ones lose jobs alone, silently, with feedback you will never receive.",
        "id": "Rekrutmen adalah penilaian risiko, dan etiket adalah sinyal risiko termurah yang tersedia. Kandidat yang membalas dalam sehari, mengikuti instruksi persis, dan memperlakukan junior dengan hormat secara statistik meramalkan perilakunya dengan klien, tenggat, dan rekan tim. Antara dua finalis serupa, pemecah seri hampir tak pernah pertanyaan keterampilan lagi — melainkan “yang mana kita percaya di depan klien?” Etiket juga asimetris: tata krama unggul jarang memenangkan pekerjaan sendirian, tetapi yang buruk kehilangan pekerjaan sendirian, diam-diam, dengan umpan balik yang tak akan pernah kamu terima."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "The professional defaults",
        "id": "Bawaan profesional"
       },
       "body": {
        "en": "Set once, run forever. <b>Response time:</b> recruiter emails answered within one business day, even if only “received, will confirm by Friday”. <b>Address:</b> formal first (Pak/Bu/Mr/Ms + name) until invited otherwise; mirror the other side's register. <b>Punctuality:</b> ten minutes early physically, three minutes early online, technology tested before — “buffer time is part of the appointment”. <b>Instructions:</b> read twice, follow exactly, ask early where genuinely ambiguous. <b>Gratitude:</b> a short specific thank-you within 24 hours of any interview or favour. <b>Rejection:</b> one gracious reply — thank, ask for feedback lightly, leave the door open; the recruiter who rejected you for role A shortlists people like you for role B.",
        "id": "Setel sekali, jalan selamanya. <b>Waktu respons:</b> email perekrut dijawab dalam satu hari kerja, meski hanya “diterima, saya konfirmasi Jumat”. <b>Sapaan:</b> formal dulu (Pak/Bu + nama) sampai diundang sebaliknya; cerminkan register pihak lain. <b>Ketepatan waktu:</b> sepuluh menit lebih awal secara fisik, tiga menit lebih awal daring, teknologi diuji sebelumnya — “waktu penyangga adalah bagian janji”. <b>Instruksi:</b> baca dua kali, ikuti persis, tanya lebih awal bila sungguh ambigu. <b>Terima kasih:</b> ucapan singkat spesifik dalam 24 jam setelah wawancara atau bantuan apa pun. <b>Penolakan:</b> satu balasan anggun — terima kasih, minta umpan balik dengan ringan, biarkan pintu terbuka; perekrut yang menolakmu untuk peran A memasukkan orang sepertimu ke daftar pendek peran B."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does treatment of the scheduling coordinator weigh so heavily in hiring assessments?",
        "id": "Mengapa perlakuan pada koordinator jadwal berbobot berat dalam penilaian rekrutmen?"
       },
       "options": [
        {
         "en": "Coordinators make the final hiring decision",
         "id": "Koordinator membuat keputusan rekrutmen final"
        },
        {
         "en": "It is an uncoached, low-noise sample of character — nobody performs for the coordinator",
         "id": "Ia sampel karakter tanpa latihan dan rendah derau — tak ada yang berakting untuk koordinator"
        },
        {
         "en": "It is a formal scored stage of the process",
         "id": "Ia tahap resmi yang diskor dalam proses"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Interview answers are rehearsed; corridor behaviour is not. Assessors weight unrehearsed signals precisely because they are unrehearsed.",
        "id": "Jawaban wawancara dilatih; perilaku koridor tidak. Asesor membobot sinyal tak terlatih justru karena ia tak terlatih."
       }
      }
     ],
     "quote": {
      "en": "Etiquette is applied respect — read at every touchpoint before your qualifications are.",
      "id": "Etiket adalah penghormatan yang diterapkan — terbaca di tiap titik kontak sebelum kualifikasimu."
     }
    },
    {
     "n": "9.2",
     "title": {
      "en": "Workplace Communication — Written, Verbal, and Digital Standards",
      "id": "Komunikasi Tempat Kerja — Standar Tertulis, Verbal, dan Digital"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The three channels where early careers are made or dented: written messages, spoken calls, and digital presence. Standards, templates and the recovery move for when you get one wrong.",
      "id": "Tiga kanal tempat karier awal dibangun atau penyok: pesan tertulis, panggilan lisan, dan kehadiran digital. Standar, templat, dan langkah pemulihan saat kamu salah di salah satunya."
     },
     "objectives": [
      {
       "en": "Write professional email and chat that respects the reader's time and the channel's register.",
       "id": "Menulis email dan chat profesional yang menghormati waktu pembaca dan register kanalnya."
      },
      {
       "en": "Handle calls and video meetings with presence: preparation, camera, turn-taking.",
       "id": "Menangani panggilan dan rapat video dengan kehadiran: persiapan, kamera, giliran bicara."
      },
      {
       "en": "Maintain a digital footprint that survives a recruiter's search.",
       "id": "Menjaga jejak digital yang lolos pencarian perekrut."
      }
     ],
     "takeaways": [
      {
       "en": "Match the channel: email for records and requests, chat for speed, calls for nuance — escalate when tone gets lost.",
       "id": "Cocokkan kanalnya: email untuk catatan dan permintaan, chat untuk kecepatan, panggilan untuk nuansa — naikkan saat nada mulai hilang."
      },
      {
       "en": "In video calls presence is preparation: camera on when others do, tested audio, and full attention visibly given.",
       "id": "Dalam panggilan video kehadiran adalah persiapan: kamera nyala saat yang lain menyalakan, audio teruji, dan perhatian penuh yang terlihat."
      },
      {
       "en": "Assume anything posted publicly will be read by a recruiter — because on shortlists, it often is.",
       "id": "Anggap apa pun yang diunggah publik akan dibaca perekrut — karena pada daftar pendek, sering memang begitu."
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
        "id": "Email profesional membawa lima bagian: subjek informatif (“Pertanyaan jadwal asesmen — [Nama]”), salam tepat, inti di baris pertama (piramida Modul 4 dalam miniatur), hanya konteks perlu setelahnya, dan tanda tangan dengan nama lengkap dan telepon. Platform chat melonggarkan bentuk, bukan hormatnya: jangan sebelas pesan terpenggal saat satu pesan tersusun cukup; jangan pesan suara ke orang yang belum kamu temui; perhatikan jam penerima — kirim-terjadwal itu ada. Di kedua kanal, periksa nama di atas segalanya: salah mengeja nama perekrut dalam email yang selain itu sempurna adalah kesalahan yang mereka ingat."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Calls and video presence",
        "id": "Panggilan dan kehadiran video"
       },
       "body": {
        "en": "Before: test the link, audio and lighting; read the attendee list; have your CV, the JD and two questions open. During: camera on if any interviewer's is, name-plate correct, background neutral or honestly blurred; let the other side finish before speaking — latency makes politeness technical; keep answers to the point and check landing (“does that answer it?”). Phone-call etiquette for the unscheduled recruiter call: it is fine — often wise — to say “I'm glad you called; may I ring you back in ten minutes from a quiet place?” Composure over immediacy, always.",
        "id": "Sebelum: uji tautan, audio, dan pencahayaan; baca daftar peserta; buka CV, JD, dan dua pertanyaan. Selama: kamera nyala jika kamera pewawancara mana pun nyala, nama tertulis benar, latar netral atau diburamkan jujur; biarkan pihak lain selesai sebelum bicara — latensi membuat kesopanan menjadi teknis; jaga jawaban tepat sasaran dan periksa pendaratan (“apakah itu menjawab?”). Etiket panggilan telepon untuk panggilan perekrut tak terjadwal: boleh — sering bijak — berkata “senang Anda menelepon; boleh saya telepon balik sepuluh menit lagi dari tempat tenang?” Ketenangan di atas kesegeraan, selalu."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "The footprint and the recovery",
        "id": "Jejak dan pemulihannya"
       },
       "body": {
        "en": "Search your own name quarterly, logged out. The standard is not sainthood; it is coherence: public posts you would defend in an interview, a consistent professional identity (2.2), and no public battles. Old embarrassments: delete what you can, and prepare a one-line honest answer for what you cannot. And when you make an etiquette error live — a missed call, a late reply, a wrong name — the recovery move is the same everywhere: prompt, brief, unexcused ownership. “Apologies for missing our call — that was my error entirely. I'm available today after 2 pm or tomorrow morning; whichever suits you.” Professionals are graded less on never erring than on how cleanly they repair.",
        "id": "Cari namamu sendiri tiap kuartal, dalam keadaan logout. Standarnya bukan kesucian; melainkan koherensi: unggahan publik yang berani kamu bela di wawancara, identitas profesional konsisten (2.2), dan tanpa pertempuran publik. Rasa malu lama: hapus yang bisa, dan siapkan jawaban jujur satu baris untuk yang tidak bisa. Dan saat kamu membuat kesalahan etiket langsung — panggilan terlewat, balasan telat, nama salah — langkah pemulihannya sama di mana pun: kepemilikan cepat, singkat, tanpa dalih. “Mohon maaf melewatkan panggilan kita — sepenuhnya kesalahan saya. Saya tersedia hari ini setelah jam 2 atau besok pagi; mana yang cocok untuk Anda.” Profesional dinilai bukan karena tak pernah salah, melainkan seberapa bersih ia memperbaiki."
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
        "id": "“Yth. Bu Anisa — keadaan darurat keluarga mengharuskan saya besok pagi, dan saya ingin memberi tim Ibu perhatian penuh. Mungkinkah dijadwalkan ulang? Saya tersedia Kamis dan Jumat, jam berapa pun. Mohon maaf atas gangguannya, dan terima kasih atas pengertiannya. — Rafi Pratama”"
       },
       "why": {
        "en": "The strong version gives a reason without oversharing, offers concrete alternatives, keeps the register professional — and reads as someone who will handle client emergencies the same way.",
        "id": "Versi kuat memberi alasan tanpa berlebihan, menawarkan alternatif konkret, menjaga register profesional — dan terbaca sebagai orang yang akan menangani keadaan darurat klien dengan cara sama."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A recruiter calls unannounced while you are on a noisy bus. Best move?",
        "id": "Perekrut menelepon mendadak saat kamu di bus yang bising. Langkah terbaik?"
       },
       "options": [
        {
         "en": "Answer and push through — availability shows enthusiasm",
         "id": "Jawab dan paksakan — ketersediaan menunjukkan antusiasme"
        },
        {
         "en": "Answer briefly, express gladness, and ask to call back in ten minutes from a quiet place",
         "id": "Jawab singkat, sampaikan senang, dan minta menelepon balik sepuluh menit lagi dari tempat tenang"
        },
        {
         "en": "Decline the call and email an apology tonight",
         "id": "Tolak panggilan dan kirim email maaf malam ini"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Composure beats immediacy: the callback request is standard professional behaviour and buys you a prepared, audible conversation.",
        "id": "Ketenangan mengalahkan kesegeraan: permintaan telepon balik adalah perilaku profesional standar dan membelikanmu percakapan yang siap dan terdengar."
       }
      }
     ],
     "listen": [
      {
       "label": {
        "en": "Rescheduling an interview — the professional register, heard",
        "id": "Menjadwalkan ulang wawancara — register profesional, didengar"
       },
       "text": {
        "en": "A family emergency requires me tomorrow morning, and I want to give your team my full attention. Could we reschedule? I am available Thursday and Friday, any time. My apologies for the disruption, and thank you for understanding.",
        "id": "Keadaan darurat keluarga mengharuskan saya besok pagi, dan saya ingin memberi tim Ibu perhatian penuh. Mungkinkah dijadwalkan ulang? Saya tersedia Kamis dan Jumat, jam berapa pun. Mohon maaf atas gangguannya, dan terima kasih atas pengertiannya."
       }
      }
     ]
    },
    {
     "n": "9.3",
     "title": {
      "en": "Business Etiquette and Professionalism Across Contexts",
      "id": "Etiket Bisnis dan Profesionalisme di Berbagai Konteks"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "Etiquette under fire: four scenarios where the polite move is not obvious — a late interviewer, a group-chat blunder, a LinkedIn conflict, and credit taken for your work. Decide, then compare against the professional standard.",
      "id": "Etiket di bawah tembakan: empat skenario di mana langkah santun tidak jelas — pewawancara terlambat, kekeliruan di grup chat, konflik LinkedIn, dan penghargaan atas kerjamu yang diambil orang. Putuskan, lalu bandingkan dengan standar profesional."
     },
     "objectives": [
      {
       "en": "Choose professional responses when others break etiquette first.",
       "id": "Memilih respons profesional saat orang lain melanggar etiket lebih dulu."
      },
      {
       "en": "Repair your own public errors quickly and without drama.",
       "id": "Memperbaiki kesalahan publikmu sendiri dengan cepat dan tanpa drama."
      },
      {
       "en": "Protect your interests while preserving relationships — the both/and skill.",
       "id": "Melindungi kepentinganmu sambil menjaga hubungan — keterampilan dua-duanya."
      }
     ],
     "takeaways": [
      {
       "en": "Other people's rudeness is not a licence; it is a test of your defaults under provocation.",
       "id": "Kekasaran orang lain bukan izin; ia ujian bawaanmu di bawah provokasi."
      },
      {
       "en": "Public errors are repaired publicly and briefly; private grievances are raised privately and specifically.",
       "id": "Kesalahan publik diperbaiki secara publik dan singkat; keluhan pribadi diangkat secara privat dan spesifik."
      },
      {
       "en": "Assertive and polite are not opposites — the professional register holds both.",
       "id": "Tegas dan santun bukan lawan — register profesional memuat keduanya."
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Scenario 1 — The 25-minute wait",
        "id": "Skenario 1 — Penantian 25 menit"
       },
       "body": {
        "en": "Your online interview's start time passes. Ten minutes, nothing. Twenty. At what points do you act, and how? Decide, then reveal.",
        "id": "Jam mulai wawancara daringmu lewat. Sepuluh menit, kosong. Dua puluh. Pada titik mana kamu bertindak, dan bagaimana? Putuskan, lalu buka."
       },
       "debrief": {
        "en": "Minute 5: stay in the room, recheck the link and your email for a change notice. Minute 10: one polite message to the coordinator — “I'm in the meeting room for our 2 pm; happy to keep waiting, and equally happy to reschedule if the day has moved.” Then wait, visibly unbothered, doing silent prep. If they arrive at minute 25: zero reproach, full engagement — “no trouble at all” — because how you absorb their disruption is the strongest data point you will generate today. Afterwards, if it recurs across the process, weigh it as culture evidence in your two-lens decision (Pack 5.4) — noticing is allowed; retaliating is not.",
        "id": "Menit 5: tetap di ruangan, periksa ulang tautan dan emailmu untuk pemberitahuan perubahan. Menit 10: satu pesan sopan ke koordinator — “Saya sudah di ruang rapat untuk jadwal jam 2; senang menunggu, dan sama senangnya dijadwalkan ulang bila harinya bergeser.” Lalu tunggu, tampak tak terganggu, sambil persiapan hening. Jika mereka tiba di menit 25: nol celaan, keterlibatan penuh — “tidak masalah sama sekali” — karena caramu menyerap gangguan mereka adalah titik data terkuat yang kamu hasilkan hari ini. Setelahnya, jika berulang sepanjang proses, timbang sebagai bukti budaya dalam keputusan dua lensamu (Pack 5.4) — memperhatikan boleh; membalas tidak."
       }
      },
      {
       "h": {
        "en": "Scenario 2 — The wrong group chat",
        "id": "Skenario 2 — Grup chat yang salah"
       },
       "body": {
        "en": "You meant to send a friend “this briefing is so boring 😭” — it landed in the internship team group, next to your supervisor's last message. Decide your next 60 seconds, then reveal.",
        "id": "Kamu bermaksud mengirim ke teman “briefing ini membosankan banget 😭” — pesan itu mendarat di grup tim magang, tepat di bawah pesan terakhir supervisormu. Putuskan 60 detik berikutmu, lalu buka."
       },
       "debrief": {
        "en": "Delete if the platform allows, but assume it was seen. One brief public repair in the same channel: “Apologies — that was meant for a friend and was unprofessional of me. Back to the briefing notes.” No triple apology, no jokes, no explaining the joke. Then a one-line private message to the supervisor owning it the same way. Then — the actual repair — visibly engaged work the rest of the week. The error is survivable; the cover-up (“my account was borrowed”) or the spiral of apologies is what converts a slip into a character verdict.",
        "id": "Hapus jika platform mengizinkan, tetapi asumsikan sudah terlihat. Satu perbaikan publik singkat di kanal yang sama: “Mohon maaf — pesan itu untuk teman dan tidak profesional dari saya. Kembali ke catatan briefing.” Tanpa maaf tiga kali, tanpa lelucon, tanpa menjelaskan leluconnya. Lalu satu baris pesan pribadi ke supervisor dengan kepemilikan yang sama. Lalu — perbaikan sesungguhnya — kerja yang tampak terlibat sepanjang sisa minggu. Kesalahannya bisa diselamatkan; penutupannya (“akunku dipinjam”) atau spiral permintaan maaflah yang mengubah keseleo menjadi vonis karakter."
       }
      },
      {
       "h": {
        "en": "Scenario 3 — The public correction",
        "id": "Skenario 3 — Koreksi publik"
       },
       "body": {
        "en": "On LinkedIn, a senior professional comments on your data-analysis post: “This is wrong, junior analysts shouldn't post about methods they don't understand.” Your analysis is, in fact, correct. Decide, then reveal.",
        "id": "Di LinkedIn, seorang profesional senior mengomentari unggahan analisis datamu: “Ini salah, analis junior tak seharusnya mengunggah metode yang tak mereka pahami.” Analisismu, faktanya, benar. Putuskan, lalu buka."
       },
       "debrief": {
        "en": "One reply, technical and temperature-zero: “Thank you for reading. The method follows [source/reasoning] — happy to be corrected on specifics if I've misapplied it.” Then stop; no second round regardless of their reply. Never delete a correct post under pressure, and never match the condescension — every future recruiter reading the thread sees a composed professional and a rude senior, which is the best outcome available. If they turn out right on a specific: thank them and amend visibly, which converts the incident into public evidence of exactly the coachability employers seek.",
        "id": "Satu balasan, teknis dan bersuhu nol: “Terima kasih sudah membaca. Metodenya mengikuti [sumber/penalaran] — dengan senang hati dikoreksi pada hal spesifik jika saya salah menerapkannya.” Lalu berhenti; tanpa ronde kedua apa pun balasan mereka. Jangan pernah menghapus unggahan yang benar karena tekanan, dan jangan pernah membalas merendahkan — tiap perekrut masa depan yang membaca utas melihat profesional yang tenang dan senior yang kasar, hasil terbaik yang tersedia. Jika mereka ternyata benar pada satu hal spesifik: terima kasih dan perbaiki dengan terlihat, yang mengubah insiden menjadi bukti publik dari kemauan dibina yang persis dicari pemberi kerja."
       }
      },
      {
       "h": {
        "en": "Scenario 4 — Credit, taken",
        "id": "Skenario 4 — Penghargaan, diambil"
       },
       "body": {
        "en": "In the intern showcase, a fellow intern presents the dashboard you built — “we made this” becomes, in the retelling, “I made this”. Your supervisor was in the room. Decide, then reveal.",
        "id": "Di pameran magang, sesama magang mempresentasikan dasbor yang kamu bangun — “kami membuat ini” menjadi, dalam penuturan ulang, “saya membuat ini”. Supervisormu ada di ruangan. Putuskan, lalu buka."
       },
       "debrief": {
        "en": "Not in the room — public credit disputes damage the challenger regardless of merit. Two moves instead. Privately, to the intern, factual and unheated: “In the showcase the dashboard came across as your solo work — I built the data model and the visuals, so let's keep the credit accurate going forward.” Most people correct course when the observation is that calm. Structurally: make authorship legible before disputes exist — commit histories, named files, the Friday one-liners from Pack 5.2 (“shipped the dashboard v2”) — so your work carries its own record. If it recurs, one factual line to the supervisor with artefacts, framed as record-keeping, not grievance. Protecting your work and staying gracious are the same skill performed twice.",
        "id": "Bukan di ruangan — sengketa penghargaan publik merusak penantang apa pun kebenarannya. Dua langkah sebagai gantinya. Secara pribadi, ke magang itu, faktual tanpa panas: “Di pameran, dasbor itu terkesan karya solomu — aku yang membangun model data dan visualnya, jadi mari jaga akurasi penghargaan ke depan.” Kebanyakan orang mengoreksi arah saat pengamatannya setenang itu. Secara struktural: buat kepengarangan terbaca sebelum sengketa ada — riwayat commit, berkas bernama, satu-baris Jumat dari Pack 5.2 (“merilis dasbor v2”) — sehingga karyamu membawa catatannya sendiri. Jika berulang, satu baris faktual ke supervisor dengan artefak, dibingkai sebagai pencatatan, bukan keluhan. Melindungi karyamu dan tetap anggun adalah keterampilan sama yang dimainkan dua kali."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Across all four scenarios, what is the common thread of the professional response?",
        "id": "Di keempat skenario, apa benang merah respons profesional?"
       },
       "options": [
        {
         "en": "Always escalate to the highest authority available",
         "id": "Selalu eskalasi ke otoritas tertinggi yang tersedia"
        },
        {
         "en": "Brief, factual, temperature-zero moves that repair or protect without creating a second incident",
         "id": "Langkah singkat, faktual, bersuhu nol yang memperbaiki atau melindungi tanpa menciptakan insiden kedua"
        },
        {
         "en": "Avoid all confrontation until the internship ends",
         "id": "Hindari semua konfrontasi sampai magang berakhir"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Every debrief solved for the same two goals at once: the interest protected, the relationship and record intact. That both/and is the etiquette skill.",
        "id": "Setiap pembahasan menyelesaikan dua tujuan sekaligus: kepentingan terlindungi, hubungan dan catatan utuh. Dua-duanya itulah keterampilan etiketnya."
       }
      }
     ]
    },
    {
     "n": "9.4",
     "title": {
      "en": "What Comes Next — The Room",
      "id": "Apa Berikutnya — Ruangan Itu"
     },
     "dur": {
      "en": "10 min",
      "id": "10 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The Pack ends where the interview begins. This closing lesson consolidates the system you have built — funnel, documents, tests, discussions, machines, AI, manners — and hands you to The Rope, where the human conversation decides everything the system earned you.",
      "id": "The Pack berakhir di tempat wawancara dimulai. Pelajaran penutup ini mengonsolidasikan sistem yang kamu bangun — corong, dokumen, tes, diskusi, mesin, AI, tata krama — dan menyerahkanmu ke The Rope, tempat percakapan manusia menentukan semua yang diperoleh sistem itu untukmu."
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
       "id": "Meninjau The Rope: apa yang berubah saat corong menjadi manusia."
      }
     ],
     "takeaways": [
      {
       "en": "You now run a system: targets, documents, drills, tracking — feedback loops where there was once hope.",
       "id": "Kini kamu menjalankan sistem: target, dokumen, latihan, pelacakan — putaran umpan balik di tempat yang dulu hanya harapan."
      },
      {
       "en": "The funnel's remaining stages are conversations — prepared for, practised, and debriefed like everything else here.",
       "id": "Tahap corong yang tersisa adalah percakapan — dipersiapkan, dilatih, dan didebrief seperti semua hal lain di sini."
      },
      {
       "en": "The room where they ask you questions is not a bigger gate; it is a different game — and it has its own training system.",
       "id": "Ruangan tempat mereka bertanya bukan gerbang yang lebih besar; ia permainan berbeda — dan ia punya sistem latihannya sendiri."
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
        "id": "Telusuri daftar periksa dengan jujur. <b>Modul 1:</b> daftar target bertingkat dan pelacak dengan data hidup. <b>Modul 2:</b> CV induk, LinkedIn sebagai hasil pencarian, kerangka surat. <b>Modul 3:</b> rutinitas latihan dan catatan kesalahan, keluarga terlemah diketahui. <b>Modul 4:</b> enam perilaku dan putaran latihan rekan. <b>Modul 5:</b> kalender jendela, pipeline bukti, protokol keputusan. <b>Modul 6:</b> dokumen aman-parse, catatan induk, kebiasaan pra-terbang. <b>Modul 7:</b> ritme kasus dan enam kasus latihan tercatat. <b>Modul 8:</b> AI dalam putaran, aturan kepemilikan utuh. <b>Modul 9:</b> bawaan terpasang. Yang belum tercentang adalah kerja minggu ini — modul tetap di sini, dan Gym Penyaringan menyimpan tiap latihan dan catatan yang kamu bangun."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "What The Rope changes",
        "id": "Yang diubah The Rope"
       },
       "body": {
        "en": "Everything in The Pack optimised signals read by machines and strangers at speed. The interview inverts the physics: a human, in conversation, with time, probing not whether your keywords match but whether your stories are true, your thinking holds under follow-ups, and your presence belongs in their team. New rules apply — story architecture (STAR-L), competency decoding, format-specific performance across HR, technical, user and final rounds, live simulation with honest feedback, and eventually the offer itself. The Rope trains all of it the way The Pack trained the funnel: system, drills, debriefs, repetition. Your Pack artefacts travel with you — the CV seeds the stories, the JD analyses seed the answers, the tracker tells you which interviews are coming.",
        "id": "Semua isi The Pack mengoptimalkan sinyal yang dibaca mesin dan orang asing dengan cepat. Wawancara membalik fisikanya: manusia, dalam percakapan, dengan waktu, menggali bukan apakah kata kuncimu cocok melainkan apakah kisahmu benar, pemikiranmu bertahan di bawah susulan, dan kehadiranmu pantas di tim mereka. Aturan baru berlaku — arsitektur kisah (STAR-L), pembacaan kompetensi, performa spesifik format lintas ronde HR, teknis, user, dan final, simulasi langsung dengan umpan balik jujur, dan akhirnya tawaran itu sendiri. The Rope melatih semuanya seperti The Pack melatih corong: sistem, latihan, debrief, pengulangan. Artefak Pack-mu ikut bersamamu — CV menyemai kisah, analisis JD menyemai jawaban, pelacak memberitahumu wawancara mana yang datang."
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
        "id": "Sebelum membuka ruangan berikutnya: perbarui pelacak agar pipeline wawancaramu terlihat; pilih dua butir CV terkuatmu dan tulis, untuk masing-masing, kisah lebih penuh di baliknya — kamu akan membutuhkannya di modul pertama The Rope; dan jadwalkan latihan minggu ini apa pun yang terjadi, karena tahap penyaringan terus berdatangan selagi kamu berlatih wawancara. Pendakian berlanjut di gunung yang sama. Tali berbeda, pendaki sama — berbekal lebih baik daripada yang memulai kursus ini."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "What fundamentally changes between The Pack's stages and The Rope's?",
        "id": "Apa yang berubah mendasar antara tahap The Pack dan The Rope?"
       },
       "options": [
        {
         "en": "The stakes get higher but the skills are the same",
         "id": "Taruhannya lebih tinggi tetapi keterampilannya sama"
        },
        {
         "en": "Evaluation shifts from fast signal-reading by machines and strangers to sustained human conversation probing truth, thinking and presence",
         "id": "Evaluasi bergeser dari pembacaan sinyal cepat oleh mesin dan orang asing ke percakapan manusia berkelanjutan yang menggali kebenaran, pemikiran, dan kehadiran"
        },
        {
         "en": "Nothing — interviews are just verbal CVs",
         "id": "Tidak ada — wawancara hanyalah CV lisan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The funnel read signals; the room reads you. Different physics, different training — which is why the trilogy hands over here.",
        "id": "Corong membaca sinyal; ruangan membaca dirimu. Fisika berbeda, latihan berbeda — karena itulah trilogi berpindah tangan di sini."
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
