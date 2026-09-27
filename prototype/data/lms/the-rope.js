/**
 * The Rope — LMS CONTENT REGISTRY
 * ----------------------------------------------------------------
 * This file is the CONTENT LAYER. The player (js/lms-player.js) renders
 * whatever is declared here — edit this file only, no UI changes needed.
 *  - kind: reading | interactive | slides | visual
 *  - interactive lessons carry steps[] with per-step debrief text
 *  - lesson 7.2 declares tool:{id:'simulator'} — the player renders a
 *    launch panel and products/the-rope/js/rope-sim.js answers the event
 *  - all lessons carry real content; placeholder:false throughout
 */
window.MT_LMS = window.MT_LMS || {};
window.MT_LMS['the-rope'] = {
 "product": {
  "en": "The Rope",
  "id": "The Rope"
 },
 "media": {
  "video": "../../assets/04-basecamp.mp4",
  "poster": "../../assets/bg/hero.jpg",
  "art": "../../assets/product-art/the-rope.svg",
  "visual": "../../assets/opt/system-the-rope.webp",
  "captions": {
   "en": "../../assets/lms/captions-en.vtt",
   "id": "../../assets/lms/captions-id.vtt"
  }
 },
 "modules": [
  {
   "num": 1,
   "phase": "understand",
   "title": {
    "en": "Inside the Room",
    "id": "Di Dalam Ruang Wawancara"
   },
   "overview": {
    "en": "Most candidates prepare for an interview as if it were an oral exam with right answers. It is not. An interview is a structured attempt, under time pressure, to reduce an employer’s uncertainty about one decision: if we hire this person, will they do this job well, stay, and work well with us? Four lessons and one case: what the interviewer is deciding, how answers are scored against written anchors, the seven question types and the concern behind each, and how Indonesian selection processes are sequenced — so you can predict what your own next interview will test.",
    "id": "Sebagian besar kandidat menyiapkan wawancara seolah ujian lisan dengan jawaban benar. Bukan itu. Wawancara adalah upaya terstruktur, di bawah tekanan waktu, untuk mengurangi ketidakpastian perusahaan tentang satu keputusan: jika kami merekrut orang ini, apakah ia akan bekerja dengan baik, bertahan, dan cocok dengan kami? Empat pelajaran dan satu kasus: apa yang diputuskan pewawancara, bagaimana jawaban dinilai terhadap jangkar tertulis, tujuh tipe pertanyaan dan kekhawatiran di balik masing-masing, dan bagaimana proses seleksi Indonesia diurutkan — agar kamu bisa memprediksi apa yang akan diuji wawancaramu berikutnya."
   },
   "outcome": {
    "en": "By the end of this module you can explain what an interviewer is trying to find out in each type of interview, how answers are scored, which questions carry hidden concerns, and how Indonesian selection processes are sequenced — and use this to predict what your own next interview will test.",
    "id": "Di akhir modul ini kamu bisa menjelaskan apa yang ingin diketahui pewawancara di tiap jenis wawancara, bagaimana jawaban dinilai, pertanyaan mana yang membawa kekhawatiran tersembunyi, dan bagaimana proses seleksi Indonesia diurutkan — dan memakainya untuk memprediksi apa yang akan diuji wawancaramu berikutnya."
   },
   "kit": {
    "en": "Format map for your Top 3 targets · personal red/green flag list",
    "id": "Peta format untuk 3 sasaran teratasmu · daftar tanda merah/hijau pribadi"
   },
   "round": {
    "en": "Round 1 · Diagnostic session (baseline) — a mixed six-question session at standard difficulty; Module 9 compares every later session to it.",
    "id": "Putaran 1 · Sesi diagnostik (garis dasar) — sesi campuran enam pertanyaan pada tingkat standar; Modul 9 membandingkan setiap sesi berikutnya dengannya."
   },
   "hero": "../../assets/bg/rope.jpg",
   "heroPos": "center 34%",
   "lessons": [
    {
     "n": "1.1",
     "kind": "reading",
     "placeholder": false,
     "dur": {
      "en": "30 min",
      "id": "30 mnt"
     },
     "title": {
      "en": "What an Interview Is Actually For",
      "id": "Untuk Apa Sebenarnya Wawancara Itu"
     },
     "overview": {
      "en": "Most candidates prepare for an interview as if it were an oral exam with right answers. It is not. An interview is a structured attempt, under time pressure, to reduce an employer’s uncertainty about one decision: if we hire this person, will they do this job well, stay, and work well with us? Everything that happens in the room — every question, every follow-up, every silence — serves that decision. When you understand the decision, you stop guessing what “they want to hear” and start giving the evidence they need.",
      "id": "Sebagian besar kandidat menyiapkan wawancara seolah ujian lisan dengan jawaban benar. Bukan itu. Wawancara adalah upaya terstruktur, di bawah tekanan waktu, untuk mengurangi ketidakpastian perusahaan tentang satu keputusan: jika kami merekrut orang ini, apakah ia akan bekerja dengan baik, bertahan, dan cocok dengan kami? Semua yang terjadi di ruangan — setiap pertanyaan, setiap pertanyaan lanjutan, setiap keheningan — melayani keputusan itu. Saat kamu memahami keputusannya, kamu berhenti menebak “apa yang ingin mereka dengar” dan mulai memberi bukti yang mereka butuhkan."
     },
     "objectives": [
      {
       "en": "Name the three things every interviewer is trying to decide (can do · will do · will fit) and give an example question for each.",
       "id": "Menyebutkan tiga hal yang ingin diputuskan setiap pewawancara (bisa · mau · cocok) dan memberi contoh pertanyaan untuk masing-masing."
      },
      {
       "en": "Explain why interviewers probe with follow-up questions, and why rehearsed answers fail under probing.",
       "id": "Menjelaskan mengapa pewawancara menggali dengan pertanyaan lanjutan, dan mengapa jawaban hafalan gagal saat digali."
      },
      {
       "en": "Describe the interview as a two-way evaluation and name two things you are deciding.",
       "id": "Menggambarkan wawancara sebagai evaluasi dua arah dan menyebutkan dua hal yang kamu putuskan."
      },
      {
       "en": "Recognise the four common interviewer styles and adapt to each.",
       "id": "Mengenali empat gaya pewawancara yang umum dan menyesuaikan diri dengan masing-masing."
      }
     ],
     "readFirst": {
      "kicker": {
       "en": "Read first · 4 slides",
       "id": "Baca dulu · 4 slide"
      },
      "title": {
       "en": "One decision, three questions",
       "id": "Satu keputusan, tiga pertanyaan"
      },
      "intro": {
       "en": "Before the first lesson: the frame that every later module builds on. An interview is not a test of you; it is a decision about a risk.",
       "id": "Sebelum pelajaran pertama: kerangka yang dibangun setiap modul berikutnya. Wawancara bukan ujian tentangmu; ia keputusan tentang sebuah risiko."
      },
      "slides": [
       {
        "h": {
         "en": "One decision, three questions",
         "id": "Satu keputusan, tiga pertanyaan"
        },
        "points": [
         {
          "en": "Can you do the job? Will you do it — motivation and reliability? Will you work well here?",
          "id": "Bisakah kamu mengerjakannya? Maukah kamu — motivasi dan keandalan? Cocokkah kamu bekerja di sini?"
         },
         {
          "en": "Every question maps to at least one of the three.",
          "id": "Setiap pertanyaan memetakan ke setidaknya satu dari ketiganya."
         }
        ]
       },
       {
        "h": {
         "en": "The interviewer’s risk",
         "id": "Risiko pewawancara"
        },
        "points": [
         {
          "en": "A bad hire costs the interviewer’s reputation, the team’s time, and months of salary.",
          "id": "Salah rekrut merugikan reputasi pewawancara, waktu tim, dan berbulan-bulan gaji."
         },
         {
          "en": "They are more afraid of a wrong yes than of a missed great candidate (Ryan; Kador).",
          "id": "Mereka lebih takut pada “ya” yang salah daripada kehilangan kandidat hebat (Ryan; Kador)."
         }
        ]
       },
       {
        "h": {
         "en": "Evidence beats claims",
         "id": "Bukti mengalahkan klaim"
        },
        "points": [
         {
          "en": "“I’m a hard worker” is a claim. What you did last March, with a result, is evidence.",
          "id": "“Saya pekerja keras” adalah klaim. Apa yang kamu lakukan Maret lalu, dengan hasil, adalah bukti."
         },
         {
          "en": "Claims are identical across candidates; evidence is not.",
          "id": "Klaim sama di semua kandidat; bukti tidak."
         }
        ]
       },
       {
        "h": {
         "en": "You are interviewing them too",
         "id": "Kamu juga mewawancarai mereka"
        },
        "points": [
         {
          "en": "You leave with information that tells you whether to accept.",
          "id": "Kamu pulang dengan informasi yang memberitahumu apakah akan menerima."
         },
         {
          "en": "Candidates who ask sharp, informed questions look more serious to the employer.",
          "id": "Kandidat yang bertanya tajam dan berdasar terlihat lebih serius di mata perusahaan."
         }
        ]
       }
      ]
     },
     "sections": [
      {
       "icon": "target",
       "img": "../../assets/bg/gauntlet/gate-05-hr-interview.jpg",
       "imgPos": "50% 38%",
       "h": {
        "en": "The one decision behind every question",
        "id": "Satu keputusan di balik setiap pertanyaan"
       },
       "body": {
        "en": "An employer invests weeks and a salary commitment in each hire. The interview exists because a CV cannot answer three questions. <b>Can they do it?</b> — skills, knowledge, thinking. <b>Will they do it?</b> — motivation, reliability, fit with the actual work, including the boring parts. <b>Will they fit?</b> — how they work with people, handle pressure, respond to feedback. Kador’s guide for interviewers organises the entire hiring conversation around this: every question should reveal something about how the candidate has behaved, because past behaviour in similar situations is the best available predictor of future behaviour <i>(Kador, The Manager’s Book of Questions, Introduction)</i>. That claim is one of the best-supported findings in selection research — structured interviews that ask for past behaviour outperform unstructured conversations — and it is the foundation of Modules 1 and 2.",
        "id": "Perusahaan menginvestasikan berminggu-minggu dan komitmen gaji pada setiap rekrutan. Wawancara ada karena CV tidak bisa menjawab tiga pertanyaan. <b>Bisakah ia?</b> — keterampilan, pengetahuan, cara berpikir. <b>Maukah ia?</b> — motivasi, keandalan, kecocokan dengan pekerjaan sebenarnya, termasuk bagian yang membosankan. <b>Cocokkah ia?</b> — cara bekerja dengan orang, menangani tekanan, merespons umpan balik. Panduan Kador untuk pewawancara menata seluruh percakapan rekrutmen di sekitar ini: setiap pertanyaan harus mengungkap sesuatu tentang bagaimana kandidat pernah berperilaku, karena perilaku masa lalu dalam situasi serupa adalah prediktor terbaik perilaku masa depan <i>(Kador, The Manager’s Book of Questions, Pendahuluan)</i>. Klaim itu salah satu temuan yang paling kuat didukung dalam riset seleksi — wawancara terstruktur yang menanyakan perilaku masa lalu mengungguli percakapan tak terstruktur — dan itulah fondasi Modul 1 dan 2."
       },
       "table": {
        "cols": [
         {
          "en": "The question",
          "id": "Pertanyaannya"
         },
         {
          "en": "What it is really asking",
          "id": "Yang sebenarnya ditanyakan"
         },
         {
          "en": "Example questions",
          "id": "Contoh pertanyaan"
         }
        ],
        "rows": [
         [
          {
           "en": "<b>Can you do it?</b>",
           "id": "<b>Bisakah kamu?</b>"
          },
          {
           "en": "Skills, knowledge, thinking — for this work, at this level",
           "id": "Keterampilan, pengetahuan, cara berpikir — untuk pekerjaan ini, di tingkat ini"
          },
          {
           "en": "“Walk me through how you reconciled the budget.” · “How would you find the bottleneck in a process you’ve never seen?”",
           "id": "“Ceritakan cara Anda merekonsiliasi anggaran itu.” · “Bagaimana Anda menemukan titik hambat dalam proses yang belum pernah Anda lihat?”"
          }
         ],
         [
          {
           "en": "<b>Will you do it?</b>",
           "id": "<b>Maukah kamu?</b>"
          },
          {
           "en": "Motivation, reliability, fit with the real work including the boring parts; will you stay",
           "id": "Motivasi, keandalan, kecocokan dengan pekerjaan nyata termasuk bagian membosankan; apakah kamu bertahan"
          },
          {
           "en": "“Why this role, and not a role in a bank?” · “Bersedia ditempatkan di luar Jawa?” · “Di mana Anda lima tahun lagi?”",
           "id": "“Mengapa peran ini, bukan peran di bank?” · “Bersedia ditempatkan di luar Jawa?” · “Di mana Anda lima tahun lagi?”"
          }
         ],
         [
          {
           "en": "<b>Will you fit?</b>",
           "id": "<b>Cocokkah kamu?</b>"
          },
          {
           "en": "People, pressure, feedback, values",
           "id": "Orang, tekanan, umpan balik, nilai"
          },
          {
           "en": "“Tell me about a disagreement with a teammate.” · “How do you handle criticism?”",
           "id": "“Ceritakan perselisihan dengan rekan setim.” · “Bagaimana Anda menangani kritik?”"
          }
         ]
        ],
        "caption": {
         "en": "Three questions, one decision. Strong answers cover more than one.",
         "id": "Tiga pertanyaan, satu keputusan. Jawaban kuat mencakup lebih dari satu."
        }
       },
       "after": [
        {
         "en": "<b>For you, this means:</b> before any interview, list what the employer is uncertain about <i>in your specific case</i>. A fresh graduate with no full-time experience creates one uncertainty (can they perform in a real workplace?); a candidate changing fields creates another (why the change, and will they stay?). Your preparation should target the uncertainty you create — not a generic list of “common questions”.",
         "id": "<b>Bagimu, ini berarti:</b> sebelum wawancara apa pun, daftar apa yang tidak pasti bagi perusahaan <i>dalam kasusmu</i>. Lulusan baru tanpa pengalaman penuh waktu menciptakan satu ketidakpastian (bisakah ia bekerja di tempat kerja sungguhan?); kandidat yang pindah bidang menciptakan yang lain (mengapa pindah, dan apakah bertahan?). Persiapanmu harus membidik ketidakpastian yang kamu ciptakan — bukan daftar generik “pertanyaan umum”."
        }
       ]
      },
      {
       "icon": "chat",
       "h": {
        "en": "Why interviewers probe",
        "id": "Mengapa pewawancara menggali"
       },
       "body": {
        "en": "Trained interviewers know candidates arrive with rehearsed answers. So they ask the first question, listen, then dig: “What exactly did <i>you</i> do?” “Why did you choose that?” “What happened next?” “What would you do differently?” This is called probing. A story you actually lived survives three probes — the details get richer. A story that is exaggerated or borrowed collapses by the second probe — details get vaguer, “we” replaces “I”, the numbers change. The lesson is not “prepare answers to follow-ups” but <b>prepare real stories in depth</b>. Module 2 teaches exactly this, and the simulator’s probe ladder (Module 9) tests it.",
        "id": "Pewawancara terlatih tahu kandidat datang dengan jawaban hafalan. Maka mereka mengajukan pertanyaan pertama, mendengarkan, lalu menggali: “Apa persisnya yang <i>Anda</i> lakukan?” “Mengapa memilih cara itu?” “Lalu apa yang terjadi?” “Apa yang akan Anda lakukan berbeda?” Ini disebut menggali (probing). Cerita yang benar-benar kamu alami bertahan tiga galian — detailnya makin kaya. Cerita yang dilebih-lebihkan atau dipinjam runtuh pada galian kedua — detail makin samar, “kami” menggantikan “saya”, angkanya berubah. Pelajarannya bukan “siapkan jawaban untuk pertanyaan lanjutan” tetapi <b>siapkan cerita nyata secara mendalam</b>. Modul 2 mengajarkan persis ini, dan tangga galian simulator (Modul 9) mengujinya."
       },
       "table": {
        "cols": [
         {
          "en": "Rung",
          "id": "Anak tangga"
         },
         {
          "en": "The probe",
          "id": "Galian"
         },
         {
          "en": "Example",
          "id": "Contoh"
         }
        ],
        "rows": [
         [
          {
           "en": "Claim",
           "id": "Klaim"
          },
          {
           "en": "What you say about yourself",
           "id": "Apa yang kamu katakan tentang dirimu"
          },
          {
           "en": "“I’m organised.”",
           "id": "“Saya orangnya rapi dan terorganisir.”"
          }
         ],
         [
          {
           "en": "Example",
           "id": "Contoh"
          },
          {
           "en": "“Tell me about a time.”",
           "id": "“Ceritakan satu kejadian.”"
          },
          {
           "en": "The HIMA treasury year",
           "id": "Tahun bendahara HIMA"
          }
         ],
         [
          {
           "en": "Your action",
           "id": "Tindakanmu"
          },
          {
           "en": "“What did <i>you</i> do?”",
           "id": "“Apa yang <i>Anda</i> lakukan?”"
          },
          {
           "en": "“Saya yang menyusun sistem pencatatan bulanan…”",
           "id": "“Saya yang menyusun sistem pencatatan bulanan…”"
          }
         ],
         [
          {
           "en": "Why",
           "id": "Mengapa"
          },
          {
           "en": "“Why that way? Other options?”",
           "id": "“Kenapa cara itu? Ada opsi lain?”"
          },
          {
           "en": "“Karena kuitansi hilang di dua acara sebelumnya…”",
           "id": "“Karena kuitansi hilang di dua acara sebelumnya…”"
          }
         ],
         [
          {
           "en": "Result",
           "id": "Hasil"
          },
          {
           "en": "“What happened? How do you know?”",
           "id": "“Apa hasilnya? Bagaimana Anda tahu?”"
          },
          {
           "en": "“Audit fakultas nol temuan, pertama dalam tiga tahun.”",
           "id": "“Audit fakultas nol temuan, pertama dalam tiga tahun.”"
          }
         ],
         [
          {
           "en": "What you’d change",
           "id": "Yang akan kamu ubah"
          },
          {
           "en": "“Looking back?”",
           "id": "“Kalau mengulang?”"
          },
          {
           "en": "“Melibatkan divisi acara sejak awal…”",
           "id": "“Melibatkan divisi acara sejak awal…”"
          }
         ],
         [
          {
           "en": "Transfer",
           "id": "Transfer"
          },
          {
           "en": "“How would that work here?”",
           "id": "“Bagaimana itu berlaku di sini?”"
          },
          {
           "en": "“Di cabang, rekonsiliasi harian butuh disiplin yang sama…”",
           "id": "“Di cabang, rekonsiliasi harian butuh disiplin yang sama…”"
          }
         ]
        ],
        "caption": {
         "en": "The probe ladder — used throughout The Rope and in the simulator.",
         "id": "Tangga galian — dipakai di seluruh The Rope dan di simulator."
        }
       }
      },
      {
       "icon": "compass",
       "h": {
        "en": "Two directions of evaluation",
        "id": "Dua arah evaluasi"
       },
       "body": {
        "en": "The interview is also the only chance you have to see inside the organisation before committing. Bolles argues the candidate should arrive with their own questions about the work, the team and what success looks like, because the decision to accept is as consequential as the decision to hire <i>(Bolles, What Color Is Your Parachute?, interview chapter)</i>. You are deciding: <i>Do I want this work? Will I learn here? Can I trust these people? Is the offer fair?</i> This is not only good for you — candidates who ask sharp, informed questions look more serious to the employer, and Module 8 builds a question ladder for every stage. Two practical habits follow. First, take notes on what you learn, not only on what you were asked; the tracker in the Interview Kit has a column for it. Second, treat every stage as data about the culture: how you were invited, how long you waited, whether the interviewer had read your CV. Noticing is allowed; deciding in the room is not — the decision belongs to Module 10, with the offer in front of you.",
        "id": "Wawancara juga satu-satunya kesempatan melihat ke dalam organisasi sebelum berkomitmen. Bolles berpendapat kandidat harus datang dengan pertanyaannya sendiri tentang pekerjaan, tim, dan seperti apa keberhasilan, karena keputusan menerima sama pentingnya dengan keputusan merekrut <i>(Bolles, What Color Is Your Parachute?, bab wawancara)</i>. Kamu sedang memutuskan: <i>Apakah saya mau pekerjaan ini? Apakah saya akan belajar di sini? Bisakah saya memercayai orang-orang ini? Apakah tawarannya adil?</i> Ini bukan hanya baik untukmu — kandidat yang bertanya tajam dan berdasar terlihat lebih serius di mata perusahaan, dan Modul 8 membangun tangga pertanyaan untuk setiap tahap. Dua kebiasaan praktis mengikuti. Pertama, catat apa yang kamu pelajari, bukan hanya apa yang ditanyakan; pelacak di Perangkat Wawancara punya kolom untuk itu. Kedua, perlakukan setiap tahap sebagai data tentang budaya: cara kamu diundang, berapa lama menunggu, apakah pewawancara sudah membaca CV-mu. Memperhatikan boleh; memutuskan di ruangan tidak — keputusan itu milik Modul 10, dengan tawaran di depanmu."
       }
      },
      {
       "icon": "users",
       "h": {
        "en": "The four interviewer styles you will meet",
        "id": "Empat gaya pewawancara yang akan kamu temui"
       },
       "body": {
        "en": "Not every interviewer is trained. Pellett describes interviewer types the candidate must adapt to <i>(Pellett, Cracking the Code to a Successful Interview)</i>; the table adapts them for Indonesia and adds two local figures. The point of recognising the style is not to judge it but to make sure your evidence is heard whatever the style — a talker still has to leave the room with a reason to say yes.",
        "id": "Tidak semua pewawancara terlatih. Pellett menggambarkan tipe-tipe pewawancara yang harus disesuaikan oleh kandidat <i>(Pellett, Cracking the Code to a Successful Interview)</i>; tabel ini mengadaptasinya untuk Indonesia dan menambah dua sosok lokal. Tujuan mengenali gaya bukan untuk menghakiminya tetapi memastikan buktimu terdengar apa pun gayanya — pewawancara yang banyak bicara tetap harus pulang dengan alasan untuk berkata ya."
       },
       "table": {
        "cols": [
         {
          "en": "Style",
          "id": "Gaya"
         },
         {
          "en": "How you recognise them",
          "id": "Cara mengenalinya"
         },
         {
          "en": "What to do",
          "id": "Yang harus dilakukan"
         }
        ],
        "rows": [
         [
          {
           "en": "<b>The structured assessor</b>",
           "id": "<b>Penilai terstruktur</b>"
          },
          {
           "en": "Fixed list of questions, takes notes, few reactions",
           "id": "Daftar pertanyaan tetap, mencatat, sedikit reaksi"
          },
          {
           "en": "Give complete, well-structured answers; don’t wait for encouragement",
           "id": "Beri jawaban lengkap dan terstruktur; jangan menunggu dorongan"
          }
         ],
         [
          {
           "en": "<b>The talker</b>",
           "id": "<b>Si banyak bicara</b>"
          },
          {
           "en": "Talks about the company or themselves for most of the time",
           "id": "Bicara tentang perusahaan atau dirinya hampir sepanjang waktu"
          },
          {
           "en": "Listen, ask a good question, then bridge: “That connects to something I did…” — make sure your key evidence is heard",
           "id": "Dengarkan, ajukan pertanyaan bagus, lalu jembatani: “Itu terkait dengan yang pernah saya lakukan…” — pastikan bukti kuncimu terdengar"
          }
         ],
         [
          {
           "en": "<b>The tester</b>",
           "id": "<b>Si penguji</b>"
          },
          {
           "en": "Challenges answers, interrupts, sceptical tone",
           "id": "Menantang jawaban, menyela, nada skeptis"
          },
          {
           "en": "Stay calm; acknowledge, then give evidence. It is a test of composure, not a verdict",
           "id": "Tetap tenang; akui, lalu beri bukti. Ini ujian ketenangan, bukan vonis"
          }
         ],
         [
          {
           "en": "<b>The unprepared</b>",
           "id": "<b>Si tidak siap</b>"
          },
          {
           "en": "Hasn’t read your CV, asks generic questions",
           "id": "Belum membaca CV-mu, bertanya generik"
          },
          {
           "en": "Take gentle initiative: “Would it be useful if I walked you through the two experiences most relevant to this role?”",
           "id": "Ambil inisiatif halus: “Apakah membantu jika saya ceritakan dua pengalaman yang paling relevan dengan peran ini?”"
          }
         ],
         [
          {
           "en": "<i>Indonesia: the senior Bapak/Ibu</i>",
           "id": "<i>Indonesia: Bapak/Ibu senior</i>"
          },
          {
           "en": "Formal, respectful distance, may ask about family or hometown",
           "id": "Formal, menjaga jarak hormat, mungkin bertanya tentang keluarga atau kampung halaman"
          },
          {
           "en": "Answer respectfully and briefly; personal questions are often about rapport, not discrimination — but see Lesson 5.4 on what you don’t have to answer",
           "id": "Jawab dengan hormat dan singkat; pertanyaan pribadi sering soal keakraban, bukan diskriminasi — tapi lihat Pelajaran 5.4 tentang apa yang tidak wajib kamu jawab"
          }
         ],
         [
          {
           "en": "<i>Indonesia: the user teknis</i>",
           "id": "<i>Indonesia: user teknis</i>"
          },
          {
           "en": "Direct, detail-focused, low patience for general answers",
           "id": "Lugas, fokus detail, tidak sabar dengan jawaban umum"
          },
          {
           "en": "Go straight to specifics: tools, numbers, what you did",
           "id": "Langsung ke spesifik: alat, angka, apa yang kamu lakukan"
          }
         ]
        ]
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "What does not decide the outcome (despite what you’ve heard)",
        "id": "Yang tidak menentukan hasil (meski kamu pernah dengar)"
       },
       "body": {
        "en": "Several popular claims are weaker than they sound. “93% of communication is non-verbal” misreads a narrow 1960s study about ambiguous single words, not interviews <span class=\"ev ev-contested\">Contested · Appendix C</span>. “Power posing before an interview raises testosterone” failed to replicate <span class=\"ev ev-contested\">Contested</span>. “The interviewer decides in the first 30 seconds” overstates it — first impressions matter and can bias what follows, but structured interviews and follow-up evidence regularly overturn them <span class=\"ev ev-dated\">Grade C · nuanced</span>. Good grooming and a warm opening help; they do not replace evidence. The practical consequence is where you spend your preparation hours: on stories that survive probing (Module 2), a decoded role (Module 3) and an opening that sets the frame (Module 4) — not on a handshake technique.",
        "id": "Beberapa klaim populer lebih lemah dari kedengarannya. “93% komunikasi bersifat nonverbal” salah membaca studi sempit tahun 1960-an tentang kata tunggal yang ambigu, bukan wawancara <span class=\"ev ev-contested\">Diperdebatkan · Lampiran C</span>. “Power posing sebelum wawancara menaikkan testosteron” gagal direplikasi <span class=\"ev ev-contested\">Diperdebatkan</span>. “Pewawancara memutuskan dalam 30 detik pertama” berlebihan — kesan pertama penting dan bisa membiaskan yang berikutnya, tetapi wawancara terstruktur dan bukti lanjutan rutin membalikkannya <span class=\"ev ev-dated\">Peringkat C · bernuansa</span>. Penampilan rapi dan pembuka hangat membantu; keduanya tidak menggantikan bukti. Konsekuensi praktisnya adalah ke mana jam persiapanmu pergi: ke cerita yang bertahan saat digali (Modul 2), peran yang dibedah (Modul 3), dan pembuka yang menetapkan kerangka (Modul 4) — bukan ke teknik jabat tangan."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: The three questions",
       "id": "Peraga 1: Tiga pertanyaan"
      },
      "title": {
       "en": "Every interview question maps to at least one — and the hire decision sits where they overlap",
       "id": "Setiap pertanyaan wawancara memetakan ke setidaknya satu — dan keputusan merekrut berada di irisannya"
      },
      "items": [
       {
        "icon": "gear",
        "h": {
         "en": "Can you do it?",
         "id": "Bisakah kamu?"
        },
        "sub": {
         "en": "Skills and thinking — “Walk me through how you reconciled the budget.”",
         "id": "Keterampilan dan cara berpikir — “Ceritakan cara Anda merekonsiliasi anggaran itu.”"
        }
       },
       {
        "icon": "compass",
        "h": {
         "en": "Will you do it?",
         "id": "Maukah kamu?"
        },
        "sub": {
         "en": "Motivation and reliability — “Why this role, and not a role in a bank?”",
         "id": "Motivasi dan keandalan — “Mengapa peran ini, bukan peran di bank?”"
        }
       },
       {
        "icon": "users",
        "h": {
         "en": "Will you fit?",
         "id": "Cocokkah kamu?"
        },
        "sub": {
         "en": "People and pressure — “Tell me about a disagreement with a teammate.”",
         "id": "Orang dan tekanan — “Ceritakan perselisihan dengan rekan setim.”"
        }
       },
       {
        "icon": "check",
        "h": {
         "en": "The hire decision",
         "id": "Keputusan merekrut"
        },
        "sub": {
         "en": "Made where the three overlap; probed until the interviewer is sure enough to risk a yes.",
         "id": "Dibuat di irisan ketiganya; digali sampai pewawancara cukup yakin untuk mengambil risiko berkata ya."
        }
       }
      ],
      "note": {
       "en": "Strong answers cover more than one circle at once — “why accounting?” answers will-do and hints at can-do.",
       "id": "Jawaban kuat mencakup lebih dari satu lingkaran sekaligus — “mengapa akuntansi?” menjawab mau dan menyiratkan bisa."
      },
      "longdesc": {
       "en": "Three overlapping circles labelled “Can you do it?” (skills and thinking, e.g. “Walk me through how you reconciled the budget”), “Will you do it?” (motivation and reliability, e.g. “Why this role, and not a role in a bank?”) and “Will you fit?” (people and pressure, e.g. “Tell me about a disagreement with a teammate”). The overlap is labelled “the hire decision”.",
       "id": "Tiga lingkaran beririsan berlabel “Bisakah kamu?” (keterampilan dan cara berpikir, mis. “Ceritakan cara Anda merekonsiliasi anggaran itu”), “Maukah kamu?” (motivasi dan keandalan, mis. “Mengapa peran ini, bukan peran di bank?”), dan “Cocokkah kamu?” (orang dan tekanan, mis. “Ceritakan perselisihan dengan rekan setim”). Irisannya berlabel “keputusan merekrut”."
      }
     },
     "compare": [
      {
       "tag": {
        "en": "“Why should we hire you?”",
        "id": "“Mengapa kami harus merekrut Anda?”"
       },
       "q": {
        "en": "The recruiter at Bank Sinar Nusantara’s ODP screen asks Nadia, fifteen minutes in: “Kenapa kami harus merekrut Anda?”",
        "id": "Rekruter di seleksi ODP Bank Sinar Nusantara bertanya kepada Nadia, di menit kelima belas: “Kenapa kami harus merekrut Anda?”"
       },
       "weak": {
        "en": "“Saya orangnya pekerja keras, cepat belajar, dan bisa bekerja dalam tim. Saya yakin bisa berkontribusi untuk perusahaan ini.”",
        "id": "“Saya orangnya pekerja keras, cepat belajar, dan bisa bekerja dalam tim. Saya yakin bisa berkontribusi untuk perusahaan ini.”"
       },
       "strong": {
        "en": "“Tiga alasan singkat. Pertama, peran ini banyak pekerjaan rekonsiliasi — saya sudah melakukannya selama magang di operasional bank, laporan harian untuk tiga cabang, dan selisih terminal yang berulang berhasil saya tandai sehingga koreksi manual berkurang sekitar 30 menit per hari. Kedua, saya terbiasa bekerja dengan target — saya mengumpulkan sponsor Rp85 juta dari sebelas sponsor untuk kompetisi nasional dengan tim enam orang. Ketiga, saya ingin berkarier di operasional, bukan hanya mencari pekerjaan pertama — itu sebabnya saya melamar ODP, bukan posisi frontliner.”",
        "id": "“Tiga alasan singkat. Pertama, peran ini banyak pekerjaan rekonsiliasi — saya sudah melakukannya selama magang di operasional bank, laporan harian untuk tiga cabang, dan selisih terminal yang berulang berhasil saya tandai sehingga koreksi manual berkurang sekitar 30 menit per hari. Kedua, saya terbiasa bekerja dengan target — saya mengumpulkan sponsor Rp85 juta dari sebelas sponsor untuk kompetisi nasional dengan tim enam orang. Ketiga, saya ingin berkarier di operasional, bukan hanya mencari pekerjaan pertama — itu sebabnya saya melamar ODP, bukan posisi frontliner.”"
       },
       "why": {
        "en": "The weak answer is three claims, zero evidence, identical to every other candidate. The strong answer maps to <i>can do</i> (reconciliation evidence with numbers the interviewer can probe), <i>will do</i> (targets, and a motivation for operations specifically), and it is structured — “tiga alasan” — so the interviewer can follow and note it. Every number in it comes from Nadia’s Pack Dossier, which is why it survives the follow-up “berapa lama Anda magang?”.",
        "id": "Jawaban lemah adalah tiga klaim, nol bukti, identik dengan setiap kandidat lain. Jawaban kuat memetakan ke <i>bisa</i> (bukti rekonsiliasi dengan angka yang bisa digali pewawancara), <i>mau</i> (target, dan motivasi khusus untuk operasional), dan terstruktur — “tiga alasan” — sehingga pewawancara bisa mengikuti dan mencatatnya. Setiap angka di dalamnya berasal dari Dossier The Pack Nadia, itulah sebabnya ia bertahan saat ditanya lanjutan “berapa lama Anda magang?”."
       }
      }
     ],
     "scenario": {
      "icon": "chat",
      "title": {
       "en": "In focus: Nadia’s first real interview",
       "id": "Sorotan: wawancara nyata pertama Nadia"
      },
      "body": [
       {
        "en": "Nadia’s first call from Bank Sinar Nusantara is a fifteen-minute phone screen. She has prepared answers about her strengths. The recruiter asks instead: “Kamu bersedia ditempatkan di seluruh Indonesia?” and “Ekspektasi gaji kamu berapa?” She hesitates on both. After the call she realises the screen wasn’t testing her strengths at all — it was testing two eligibility risks: placement and cost.",
        "id": "Telepon pertama Nadia dari Bank Sinar Nusantara adalah seleksi telepon lima belas menit. Ia sudah menyiapkan jawaban tentang kekuatannya. Rekruter justru bertanya: “Kamu bersedia ditempatkan di seluruh Indonesia?” dan “Ekspektasi gaji kamu berapa?” Ia ragu pada keduanya. Setelah telepon ia sadar seleksi itu sama sekali tidak menguji kekuatannya — ia menguji dua risiko kelayakan: penempatan dan biaya."
       },
       {
        "en": "The lesson she writes in her tracker that evening: every stage has its own uncertainty. The screen tests eligibility; the user tests capability; the final tests fit and commitment. Her next preparation hour goes to two truthful sentences — one on placement, one on salary — and not to a fourth strengths story. Lesson 1.4 maps the stages; Lesson 5.3 builds the salary answer.",
        "id": "Pelajaran yang ia tulis di pelacaknya malam itu: setiap tahap punya ketidakpastiannya sendiri. Seleksi awal menguji kelayakan; user menguji kemampuan; final menguji kecocokan dan komitmen. Jam persiapan berikutnya ia pakai untuk dua kalimat jujur — satu tentang penempatan, satu tentang gaji — bukan untuk cerita kekuatan keempat. Pelajaran 1.4 memetakan tahapnya; Pelajaran 5.3 membangun jawaban gajinya."
       }
      ]
     },
     "steps": [
      {
       "h": {
        "en": "Drill 1 · The uncertainty audit",
        "id": "Latihan 1 · Audit ketidakpastian"
       },
       "body": {
        "en": "Write down the three biggest uncertainties an employer would have about hiring <i>you</i> for your top target. Be specific: not “experience” but “no full-time experience in a workplace with deadlines set by other people”. Then, next to each, write the one piece of evidence you already have that reduces it — or “none yet”.",
        "id": "Tulis tiga ketidakpastian terbesar yang akan dimiliki perusahaan tentang merekrut <i>kamu</i> untuk sasaran teratasmu. Spesifik: bukan “pengalaman” tetapi “belum ada pengalaman penuh waktu di tempat kerja dengan tenggat yang ditetapkan orang lain”. Lalu, di sebelah masing-masing, tulis satu bukti yang sudah kamu punya yang menguranginya — atau “belum ada”."
       },
       "debrief": {
        "en": "Common answers for fresh graduates: no full-time experience; motivation (“is this their first choice or their tenth application?”); stability (“will they leave in a year for S2 or a bigger company?”); a CV item that raises a question (a gap, a low IPK, an unrelated major). Each uncertainty becomes a story you prepare in Module 2 — the “none yet” rows are your story-mining priorities. Nadia’s three: no full-time experience (evidence: the internship checklist still in use), motivation for operations rather than “any job” (evidence: applying to ODP, not frontliner), and placement anywhere in Indonesia (evidence: none yet — she needs a truthful answer, not a story).",
        "id": "Jawaban umum lulusan baru: belum ada pengalaman penuh waktu; motivasi (“apakah ini pilihan pertama atau lamaran kesepuluh?”); stabilitas (“apakah ia pergi setahun lagi untuk S2 atau perusahaan lebih besar?”); butir CV yang memunculkan pertanyaan (jeda, IPK rendah, jurusan tak terkait). Setiap ketidakpastian menjadi cerita yang kamu siapkan di Modul 2 — baris “belum ada” adalah prioritas penambangan ceritamu. Tiga milik Nadia: belum ada pengalaman penuh waktu (bukti: daftar periksa magang yang masih dipakai), motivasi untuk operasional bukan “pekerjaan apa saja” (bukti: melamar ODP, bukan frontliner), dan penempatan di mana saja di Indonesia (bukti: belum ada — ia butuh jawaban jujur, bukan cerita)."
       }
      },
      {
       "h": {
        "en": "Drill 2 · Classify ten questions",
        "id": "Latihan 2 · Golongkan sepuluh pertanyaan"
       },
       "body": {
        "en": "Sort these into Can do / Will do / Will fit (some fit more than one): (1) “What did you learn in your thesis?” (2) “Where do you see yourself in 5 years?” (3) “Tell me about a time you missed a deadline.” (4) “How would you calculate the profit of a coffee shop?” (5) “Why did you choose accounting?” (6) “How do you handle criticism?” (7) “What’s your IPK?” (8) “What do you know about us?” (9) “Tell me about conflict in a group project.” (10) “Are you willing to be placed outside Java?”",
        "id": "Golongkan ke Bisa / Mau / Cocok (sebagian masuk lebih dari satu): (1) “Apa yang Anda pelajari dari skripsi?” (2) “Di mana Anda lima tahun lagi?” (3) “Ceritakan saat Anda melewatkan tenggat.” (4) “Bagaimana Anda menghitung laba sebuah kedai kopi?” (5) “Mengapa memilih akuntansi?” (6) “Bagaimana Anda menangani kritik?” (7) “Berapa IPK Anda?” (8) “Apa yang Anda ketahui tentang kami?” (9) “Ceritakan konflik dalam proyek kelompok.” (10) “Bersedia ditempatkan di luar Jawa?”"
       },
       "debrief": {
        "en": "(1) can do; (2) will do — and the hidden concern “will you stay?”; (3) will fit, with a can-do edge (reliability); (4) can do; (5) will do, hinting at can do; (6) will fit; (7) can do, as a screen; (8) will do — seriousness and research; (9) will fit; (10) will do — eligibility. Several questions test more than one, and that is the point: the strongest answers deliberately cover two circles. “Why accounting?” answered with a reason <i>and</i> a piece of work you did because of that reason answers will-do and can-do in one breath.",
        "id": "(1) bisa; (2) mau — dan kekhawatiran tersembunyi “apakah kamu bertahan?”; (3) cocok, dengan sisi bisa (keandalan); (4) bisa; (5) mau, menyiratkan bisa; (6) cocok; (7) bisa, sebagai penyaring; (8) mau — keseriusan dan riset; (9) cocok; (10) mau — kelayakan. Beberapa pertanyaan menguji lebih dari satu, dan itulah intinya: jawaban terkuat sengaja mencakup dua lingkaran. “Mengapa akuntansi?” yang dijawab dengan alasan <i>dan</i> satu pekerjaan yang kamu lakukan karena alasan itu menjawab mau dan bisa dalam satu tarikan napas."
       }
      },
      {
       "h": {
        "en": "Drill 3 · Probe yourself",
        "id": "Latihan 3 · Gali dirimu sendiri"
       },
       "body": {
        "en": "Pick one achievement from your CV. Answer the probe ladder out loud, rung by rung: claim → example → your action → why → result → what you’d change → transfer to this job. Time yourself. Where did you run out of detail?",
        "id": "Pilih satu pencapaian dari CV-mu. Jawab tangga galian dengan suara, anak tangga demi anak tangga: klaim → contoh → tindakanmu → mengapa → hasil → yang akan kamu ubah → transfer ke pekerjaan ini. Ukur waktunya. Di mana kamu kehabisan detail?"
       },
       "debrief": {
        "en": "The rung where you stall is the rung Module 2 will fix. Most graduates stall at <i>why</i> (they did it the way they were told) or <i>result</i> (they never checked what happened afterwards). If you stalled at <i>your action</i> — everything was “kami” — the story may be real but not yet yours; Lesson 1.2 shows the we → I → we shape that fixes it. If you reached <i>transfer</i> with detail to spare, that achievement is a Core 10 candidate.",
        "id": "Anak tangga tempat kamu macet adalah yang akan diperbaiki Modul 2. Kebanyakan lulusan macet di <i>mengapa</i> (mereka melakukannya seperti yang diperintahkan) atau <i>hasil</i> (mereka tidak pernah memeriksa apa yang terjadi setelahnya). Jika kamu macet di <i>tindakanmu</i> — semuanya “kami” — ceritanya mungkin nyata tetapi belum milikmu; Pelajaran 1.2 menunjukkan bentuk kami → saya → kami yang memperbaikinya. Jika kamu sampai di <i>transfer</i> dengan detail tersisa, pencapaian itu kandidat Core 10."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Preparing “answers” instead of evidence",
         "id": "Menyiapkan “jawaban” alih-alih bukti"
        },
        "fix": {
         "en": "Prepare ten real stories deeply (Module 2); answers follow from them.",
         "id": "Siapkan sepuluh cerita nyata secara mendalam (Modul 2); jawaban mengikuti darinya."
        }
       },
       {
        "h": {
         "en": "Treating the interviewer as an opponent",
         "id": "Memperlakukan pewawancara sebagai lawan"
        },
        "fix": {
         "en": "They want you to be the answer — give them the evidence to justify saying yes.",
         "id": "Mereka ingin kamu menjadi jawabannya — beri mereka bukti untuk membenarkan “ya”."
        }
       },
       {
        "h": {
         "en": "Assuming the first five minutes decide everything",
         "id": "Menganggap lima menit pertama menentukan segalanya"
        },
        "fix": {
         "en": "A nervous start is recoverable; a weak middle is not.",
         "id": "Awal yang gugup bisa dipulihkan; bagian tengah yang lemah tidak."
        }
       },
       {
        "h": {
         "en": "Not preparing questions of your own",
         "id": "Tidak menyiapkan pertanyaanmu sendiri"
        },
        "fix": {
         "en": "At least three per stage (Module 8).",
         "id": "Setidaknya tiga per tahap (Modul 8)."
        }
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "Probing",
        "id": "Menggali (probing)"
       },
       "def": {
        "en": "Follow-up questions that dig into an answer — your action, why, the result — to separate lived stories from rehearsed claims.",
        "id": "Pertanyaan lanjutan yang menggali jawaban — tindakanmu, mengapa, hasilnya — untuk memisahkan cerita yang dialami dari klaim hafalan."
       }
      },
      {
       "term": {
        "en": "Structured interview",
        "id": "Wawancara terstruktur"
       },
       "def": {
        "en": "Fixed questions and a written scoring guide, applied to every candidate; the format with the strongest evidence base.",
        "id": "Pertanyaan tetap dan panduan penilaian tertulis, diterapkan ke setiap kandidat; format dengan basis bukti terkuat."
       }
      },
      {
       "term": {
        "en": "Competency",
        "id": "Kompetensi"
       },
       "def": {
        "en": "A behaviour the role needs — problem solving, teamwork, integrity — that questions are designed to find evidence of.",
        "id": "Perilaku yang dibutuhkan peran — pemecahan masalah, kerja tim, integritas — yang buktinya dicari oleh pertanyaan."
       }
      },
      {
       "term": {
        "en": "Evidence",
        "id": "Bukti"
       },
       "def": {
        "en": "A specific past situation with your action and a result; the opposite of a claim.",
        "id": "Situasi masa lalu yang spesifik dengan tindakanmu dan hasil; lawan dari klaim."
       }
      },
      {
       "term": {
        "en": "Hiring manager / user",
        "id": "Atasan langsung / user"
       },
       "def": {
        "en": "The person you would report to; usually conducts the decisive round.",
        "id": "Orang yang akan menjadi atasanmu; biasanya memimpin ronde yang menentukan."
       }
      },
      {
       "term": {
        "en": "Fit",
        "id": "Kecocokan"
       },
       "def": {
        "en": "How you work with people, handle pressure and respond to feedback — the third of the three questions.",
        "id": "Cara kamu bekerja dengan orang, menangani tekanan, dan merespons umpan balik — pertanyaan ketiga dari tiga."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "An interviewer asks “What exactly was <i>your</i> part in that?” three times in different ways. What is most likely happening?",
        "id": "Pewawancara bertanya “Apa persisnya bagian <i>Anda</i> dalam itu?” tiga kali dengan cara berbeda. Apa yang paling mungkin terjadi?"
       },
       "options": [
        {
         "en": "They didn’t hear you",
         "id": "Mereka tidak mendengarmu"
        },
        {
         "en": "They are probing to separate your contribution from the team’s",
         "id": "Mereka menggali untuk memisahkan kontribusimu dari tim"
        },
        {
         "en": "They dislike the answer",
         "id": "Mereka tidak suka jawabannya"
        },
        {
         "en": "They are wasting time",
         "id": "Mereka membuang waktu"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Repeated “your part” questions are a probe for ownership; answer with specific actions using “saya”.",
        "id": "Pertanyaan “bagian Anda” yang berulang adalah galian untuk kepemilikan; jawab dengan tindakan spesifik memakai “saya”."
       }
      },
      {
       "q": {
        "en": "A fresh graduate with an internship and organisational experience is asked “Why should we hire you?” The best preparation is…",
        "id": "Lulusan baru dengan magang dan pengalaman organisasi ditanya “Mengapa kami harus merekrut Anda?” Persiapan terbaiknya…"
       },
       "options": [
        {
         "en": "A list of adjectives",
         "id": "Daftar kata sifat"
        },
        {
         "en": "A memorised paragraph",
         "id": "Paragraf hafalan"
        },
        {
         "en": "Two or three pieces of evidence mapped to the job’s main requirements",
         "id": "Dua atau tiga bukti yang dipetakan ke persyaratan utama pekerjaan"
        },
        {
         "en": "A statement of passion",
         "id": "Pernyataan tentang gairah"
        }
       ],
       "correct": 2,
       "why": {
        "en": "Evidence mapped to requirements answers can-do and will-do together.",
        "id": "Bukti yang dipetakan ke persyaratan menjawab bisa dan mau sekaligus."
       }
      },
      {
       "q": {
        "en": "An interviewer talks for 20 of 30 minutes about the company. What should you do?",
        "id": "Pewawancara bicara 20 dari 30 menit tentang perusahaan. Apa yang sebaiknya kamu lakukan?"
       },
       "options": [
        {
         "en": "Wait politely until asked",
         "id": "Menunggu dengan sopan sampai ditanya"
        },
        {
         "en": "Interrupt to tell your stories",
         "id": "Menyela untuk menceritakan kisahmu"
        },
        {
         "en": "Listen, ask a relevant question, then bridge to your most relevant evidence",
         "id": "Dengarkan, ajukan pertanyaan relevan, lalu jembatani ke bukti paling relevanmu"
        },
        {
         "en": "Ask if they will ask you questions",
         "id": "Tanyakan apakah mereka akan bertanya kepadamu"
        }
       ],
       "correct": 2,
       "why": {
        "en": "The talker style still needs to leave with evidence to justify a yes.",
        "id": "Gaya banyak bicara tetap harus pulang dengan bukti untuk membenarkan “ya”."
       }
      }
     ],
     "tryit": {
      "qid": "hr_why_hire",
      "persona": "hr",
      "profile": "motivational",
      "returnTo": 1,
      "label": {
       "en": "Drill “Why should we hire you?” now",
       "id": "Latih “Mengapa kami harus merekrut Anda?” sekarang"
      },
      "desc": {
       "en": "One question with the HR persona. Give three reasons with evidence — the debrief reads whether you named a real requirement and a real result, not adjectives.",
       "id": "Satu pertanyaan dengan persona HR. Beri tiga alasan dengan bukti — debrief membaca apakah kamu menyebut persyaratan nyata dan hasil nyata, bukan kata sifat."
      }
     },
     "takeaways": [
      {
       "en": "An interview reduces one uncertainty: can you do it, will you, will you fit.",
       "id": "Wawancara mengurangi satu ketidakpastian: bisakah kamu, maukah kamu, cocokkah kamu."
      },
      {
       "en": "Real stories survive probing; rehearsed claims don’t.",
       "id": "Cerita nyata bertahan saat digali; klaim hafalan tidak."
      },
      {
       "en": "You are evaluating them too — arrive with questions and leave with notes.",
       "id": "Kamu juga mengevaluasi mereka — datang dengan pertanyaan dan pulang dengan catatan."
      }
     ],
     "resources": {
      "title": {
       "en": "Sources and the uncertainty audit",
       "id": "Sumber dan audit ketidakpastian"
      },
      "lead": {
       "en": "Three sources, and the one-page audit to run before every process.",
       "id": "Tiga sumber, dan audit satu halaman untuk dijalankan sebelum setiap proses."
      },
      "items": [
       {
        "kind": "guide",
        "title": {
         "en": "Reading list · Lesson 1.1",
         "id": "Daftar bacaan · Pelajaran 1.1"
        },
        "desc": {
         "en": "Frameworks paraphrased and attributed; contested claims graded in Appendix C of the blueprint.",
         "id": "Kerangka diparafrasakan dan diatribusikan; klaim yang diperdebatkan dinilai di Lampiran C cetak biru."
        },
        "body": [
         {
          "en": "J. Kador, <i>The Manager’s Book of Questions</i> (rev. ed., 2006), Introduction — behavioural questioning; why interviewers probe.",
          "id": "J. Kador, <i>The Manager’s Book of Questions</i> (ed. rev., 2006), Pendahuluan — pertanyaan perilaku; mengapa pewawancara menggali."
         },
         {
          "en": "E. Pellett, <i>Cracking the Code to a Successful Interview</i> (2016) — interviewer types.",
          "id": "E. Pellett, <i>Cracking the Code to a Successful Interview</i> (2016) — tipe-tipe pewawancara."
         },
         {
          "en": "R. N. Bolles, <i>What Color Is Your Parachute?</i>, interview chapter — the candidate’s own questions; the two-way decision.",
          "id": "R. N. Bolles, <i>What Color Is Your Parachute?</i>, bab wawancara — pertanyaan kandidat sendiri; keputusan dua arah."
         },
         {
          "en": "R. Ryan, <i>60 Seconds & You’re Hired!</i> — the interviewer’s risk.",
          "id": "R. Ryan, <i>60 Seconds & You’re Hired!</i> — risiko pewawancara."
         }
        ]
       },
       {
        "kind": "worksheet",
        "title": {
         "en": "The uncertainty audit",
         "id": "Audit ketidakpastian"
        },
        "desc": {
         "en": "One page per target; the first entry in your Interview Kit.",
         "id": "Satu halaman per sasaran; entri pertama di Perangkat Wawancaramu."
        },
        "body": [
         {
          "en": "Target role and employer · stage I am preparing for",
          "id": "Peran dan perusahaan sasaran · tahap yang saya siapkan"
         },
         {
          "en": "Uncertainty 1 (can do): … · evidence I have: … · story to build: …",
          "id": "Ketidakpastian 1 (bisa): … · bukti yang saya punya: … · cerita yang dibangun: …"
         },
         {
          "en": "Uncertainty 2 (will do): … · evidence: … · truthful sentence if it is an eligibility question: …",
          "id": "Ketidakpastian 2 (mau): … · bukti: … · kalimat jujur jika ini pertanyaan kelayakan: …"
         },
         {
          "en": "Uncertainty 3 (will fit): … · evidence: … · story to build: …",
          "id": "Ketidakpastian 3 (cocok): … · bukti: … · cerita yang dibangun: …"
         },
         {
          "en": "Two things I am deciding about them, and the question that will tell me",
          "id": "Dua hal yang saya putuskan tentang mereka, dan pertanyaan yang akan memberitahu saya"
         }
        ]
       }
      ]
     }
    },
    {
     "n": "1.2",
     "kind": "reading",
     "placeholder": false,
     "dur": {
      "en": "35 min",
      "id": "35 mnt"
     },
     "title": {
      "en": "How Answers Are Scored",
      "id": "Bagaimana Jawaban Dinilai"
     },
     "overview": {
      "en": "In a structured interview, your answer is not judged by whether the interviewer “liked” it. It is compared against a written description of what a weak, acceptable, good and excellent answer looks like for that competency. If you know how the scoresheet is built, you know what to put in your answer — and you know why consistency across rounds is itself scored, why numbers only count when they prove a result, and which red flags override a good score.",
      "id": "Dalam wawancara terstruktur, jawabanmu tidak dinilai dari apakah pewawancara “menyukainya”. Jawabanmu dibandingkan dengan deskripsi tertulis tentang seperti apa jawaban lemah, cukup, baik, dan sangat baik untuk kompetensi itu. Jika kamu tahu cara lembar penilaian dibangun, kamu tahu apa yang harus masuk ke jawabanmu — dan kamu tahu mengapa konsistensi lintas ronde ikut dinilai, mengapa angka hanya bernilai jika membuktikan hasil, dan tanda bahaya mana yang menggugurkan skor yang baik."
     },
     "objectives": [
      {
       "en": "Explain how a behaviourally anchored rating scale (1–4 or 1–5) works.",
       "id": "Menjelaskan cara kerja skala penilaian berjangkar perilaku (1–4 atau 1–5)."
      },
      {
       "en": "Identify the five features that separate a “4” answer from a “2” answer.",
       "id": "Mengenali lima ciri yang membedakan jawaban “4” dari jawaban “2”."
      },
      {
       "en": "Describe how multiple interviewers combine scores, and why consistency across rounds matters.",
       "id": "Menggambarkan cara beberapa pewawancara menggabungkan skor, dan mengapa konsistensi lintas ronde penting."
      },
      {
       "en": "Recognise the red flags that override a good score.",
       "id": "Mengenali tanda bahaya yang menggugurkan skor yang baik."
      }
     ],
     "readFirst": {
      "kicker": {
       "en": "Read first · 4 slides",
       "id": "Baca dulu · 4 slide"
      },
      "title": {
       "en": "You are scored against anchors, not against a mood",
       "id": "Kamu dinilai terhadap jangkar, bukan suasana hati"
      },
      "intro": {
       "en": "The scoresheet is the least visible and most decisive object in the room. This deck shows what is written on it.",
       "id": "Lembar penilaian adalah benda paling tak terlihat dan paling menentukan di ruangan. Deck ini menunjukkan apa yang tertulis di dalamnya."
      },
      "slides": [
       {
        "h": {
         "en": "The scoresheet",
         "id": "Lembar penilaian"
        },
        "points": [
         {
          "en": "Four to seven competencies for the role, one or two questions each, a rating scale with behavioural descriptions.",
          "id": "Empat hingga tujuh kompetensi untuk peran, satu atau dua pertanyaan masing-masing, skala penilaian dengan deskripsi perilaku."
         },
         {
          "en": "Trained interviewers write evidence next to the score, not adjectives.",
          "id": "Pewawancara terlatih menulis bukti di sebelah skor, bukan kata sifat."
         }
        ]
       },
       {
        "h": {
         "en": "What a 4 looks like",
         "id": "Seperti apa nilai 4"
        },
        "points": [
         {
          "en": "Specific · owned · reasoned · resulted · reflected.",
          "id": "Spesifik · dimiliki · beralasan · berhasil · direfleksikan."
         },
         {
          "en": "A 2 has a real example but the candidate’s own actions or the result are missing.",
          "id": "Nilai 2 punya contoh nyata tetapi tindakan kandidat sendiri atau hasilnya hilang."
         }
        ]
       },
       {
        "h": {
         "en": "Red flags that override",
         "id": "Tanda bahaya yang menggugurkan"
        },
        "points": [
         {
          "en": "Inconsistency between rounds, blame, disrespect to junior staff, no questions, unreasoned salary demands.",
          "id": "Ketidakkonsistenan antar ronde, menyalahkan, tidak hormat pada staf junior, tanpa pertanyaan, tuntutan gaji tanpa alasan."
         },
         {
          "en": "A strong technical score does not survive them.",
          "id": "Skor teknis yang kuat tidak bertahan dari itu."
         }
        ]
       },
       {
        "h": {
         "en": "The debrief after you leave",
         "id": "Rapat evaluasi setelah kamu pulang"
        },
        "points": [
         {
          "en": "Interviewers compare notes; inconsistencies become the topic.",
          "id": "Pewawancara membandingkan catatan; ketidakkonsistenan menjadi topiknya."
         },
         {
          "en": "One source of truth — your Story Bank — keeps the numbers the same in every room.",
          "id": "Satu sumber kebenaran — Bank Ceritamu — menjaga angka tetap sama di setiap ruangan."
         }
        ]
       }
      ]
     },
     "sections": [
      {
       "icon": "book",
       "img": "../../assets/bg/gauntlet/gate-06-final-interview.jpg",
       "imgPos": "50% 40%",
       "h": {
        "en": "The scoresheet",
        "id": "Lembar penilaian"
       },
       "body": {
        "en": "Most large Indonesian employers — banks, BUMN, multinationals — use a competency-based interview guide: a list of four to seven competencies for the role, one or two questions for each, and a rating scale with behavioural descriptions. BUMN processes frequently map to the AKHLAK core values (Amanah, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif) <span class=\"ev ev-verify\">Verify: current BUMN core-values guidance</span>. Startups and smaller firms often use lighter versions or none — but trained interviewers still listen for the same things, and untrained ones are persuaded by the same things without knowing why. A typical anchored scale for <i>problem solving</i> reads like the table below. Notice that nothing in it rewards confidence, vocabulary or charm; every row is about what the answer <i>contains</i>.",
        "id": "Sebagian besar perusahaan besar Indonesia — bank, BUMN, multinasional — memakai panduan wawancara berbasis kompetensi: daftar empat hingga tujuh kompetensi untuk peran, satu atau dua pertanyaan masing-masing, dan skala penilaian dengan deskripsi perilaku. Proses BUMN sering memetakan ke nilai inti AKHLAK (Amanah, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif) <span class=\"ev ev-verify\">Verifikasi: panduan nilai inti BUMN terkini</span>. Startup dan perusahaan kecil sering memakai versi ringan atau tidak sama sekali — tetapi pewawancara terlatih tetap mendengarkan hal yang sama, dan yang tidak terlatih terbujuk oleh hal yang sama tanpa tahu mengapa. Skala berjangkar yang lazim untuk <i>pemecahan masalah</i> terbaca seperti tabel di bawah. Perhatikan tidak ada yang mengganjar kepercayaan diri, kosakata, atau pesona; setiap baris tentang apa yang <i>dikandung</i> jawaban."
       },
       "table": {
        "cols": [
         {
          "en": "Score",
          "id": "Skor"
         },
         {
          "en": "Anchor — what the interviewer hears",
          "id": "Jangkar — yang didengar pewawancara"
         }
        ],
        "rows": [
         [
          {
           "en": "<b>1 · Weak</b>",
           "id": "<b>1 · Lemah</b>"
          },
          {
           "en": "Vague or hypothetical; no specific example; blames others",
           "id": "Samar atau hipotetis; tanpa contoh spesifik; menyalahkan orang lain"
          }
         ],
         [
          {
           "en": "<b>2 · Developing</b>",
           "id": "<b>2 · Berkembang</b>"
          },
          {
           "en": "A real example, but the candidate’s own actions are unclear or the result is missing",
           "id": "Contoh nyata, tetapi tindakan kandidat sendiri tidak jelas atau hasilnya hilang"
          }
         ],
         [
          {
           "en": "<b>3 · Meets</b>",
           "id": "<b>3 · Memenuhi</b>"
          },
          {
           "en": "A specific example; clear personal actions; a result; some reasoning",
           "id": "Contoh spesifik; tindakan pribadi jelas; hasil; sedikit alasan"
          }
         ],
         [
          {
           "en": "<b>4 · Strong</b>",
           "id": "<b>4 · Kuat</b>"
          },
          {
           "en": "All of 3, plus: explained <i>why</i> they chose the approach, considered alternatives, measurable result, and a learning applied later",
           "id": "Semua di 3, plus: menjelaskan <i>mengapa</i> memilih pendekatan itu, mempertimbangkan alternatif, hasil terukur, dan pembelajaran yang diterapkan kemudian"
          }
         ]
        ],
        "caption": {
         "en": "An anchored scale for problem solving. The simulator’s debrief shows the same four rows against your answer.",
         "id": "Skala berjangkar untuk pemecahan masalah. Debrief simulator menunjukkan empat baris yang sama terhadap jawabanmu."
        }
       }
      },
      {
       "icon": "check",
       "h": {
        "en": "The five features of a top-anchor answer",
        "id": "Lima ciri jawaban di jangkar teratas"
       },
       "body": {
        "en": "Across interviewer guides <i>(Kador; Graham, Switchers; Pellett)</i> the same features recur, and they are the checklist the simulator scores against.",
        "id": "Di berbagai panduan pewawancara <i>(Kador; Graham, Switchers; Pellett)</i> ciri yang sama berulang, dan itulah daftar periksa yang dinilai simulator."
       },
       "bullets": [
        {
         "en": "<b>Specific</b> — one real situation, with when and where. “Di minggu ketiga magang di operasional cabang…”",
         "id": "<b>Spesifik</b> — satu situasi nyata, dengan kapan dan di mana. “Di minggu ketiga magang di operasional cabang…”"
        },
        {
         "en": "<b>Owned</b> — “saya” for your actions; “kami” only for the shared context.",
         "id": "<b>Dimiliki</b> — “saya” untuk tindakanmu; “kami” hanya untuk konteks bersama."
        },
        {
         "en": "<b>Reasoned</b> — why you did it that way; the part most candidates skip, and the commonest 3→4 gap.",
         "id": "<b>Beralasan</b> — mengapa kamu melakukannya dengan cara itu; bagian yang paling sering dilewati kandidat, dan celah 3→4 yang paling umum."
        },
        {
         "en": "<b>Resulted</b> — an outcome, measured where honest numbers exist; observable where they don’t (“the lecturer adopted our template for the next cohort”).",
         "id": "<b>Berhasil</b> — sebuah hasil, terukur jika angka jujur ada; teramati jika tidak (“dosen mengadopsi templat kami untuk angkatan berikutnya”)."
        },
        {
         "en": "<b>Reflected</b> — what you learned or would change, and evidence you applied it.",
         "id": "<b>Direfleksikan</b> — apa yang kamu pelajari atau akan kamu ubah, dan bukti kamu menerapkannya."
        }
       ],
       "after": [
        {
         "en": "<b>Numbers are not the point.</b> A number is valuable because it proves a result happened and gives it scale. A number without a result (“I was one of five members”) adds nothing — and inventing one is the fastest way to fail the second probe. The simulator’s scoring credits numbers only when they sit inside a result sentence; digits elsewhere do not count.",
         "id": "<b>Angka bukan intinya.</b> Angka berharga karena membuktikan sebuah hasil terjadi dan memberinya skala. Angka tanpa hasil (“saya salah satu dari lima anggota”) tidak menambah apa pun — dan mengarangnya adalah cara tercepat gagal di galian kedua. Penilaian simulator menghargai angka hanya jika berada di dalam kalimat hasil; digit di tempat lain tidak dihitung."
        }
       ]
      },
      {
       "icon": "users",
       "h": {
        "en": "Humility calibration — the Indonesian twist",
        "id": "Kalibrasi kerendahan hati — sentuhan Indonesia"
       },
       "body": {
        "en": "In many Indonesian rooms, heavy self-promotion reads as <i>sombong</i>, while too much “we” reads as no contribution. Mills warns that “we” hides what you actually did <i>(Mills, You’re Hired! CVs)</i>; Fry argues “we” projects belonging <i>(Fry, 101 Smart Questions)</i>. The Rope resolves it with the <b>we → I → we</b> shape: set the shared context (“Tim kami lima orang…”), state your specific part in first person (“Saya yang menyusun…”), and return credit to the team at the end (“…dan hasilnya tim kami…”). Interviewers get ownership evidence without the candidate sounding boastful; the “kami” at the end is not modesty theatre but a true statement about who benefited. Use “we” freely when talking about the <i>future</i> team you hope to join — that is the belonging Fry means.",
        "id": "Di banyak ruangan Indonesia, promosi diri berlebihan terbaca <i>sombong</i>, sementara terlalu banyak “kami” terbaca tanpa kontribusi. Mills memperingatkan “kami” menyembunyikan apa yang sebenarnya kamu lakukan <i>(Mills, You’re Hired! CVs)</i>; Fry berpendapat “kami” memancarkan rasa memiliki <i>(Fry, 101 Smart Questions)</i>. The Rope menyelesaikannya dengan bentuk <b>kami → saya → kami</b>: tetapkan konteks bersama (“Tim kami lima orang…”), nyatakan bagianmu dalam orang pertama (“Saya yang menyusun…”), dan kembalikan kredit ke tim di akhir (“…dan hasilnya tim kami…”). Pewawancara mendapat bukti kepemilikan tanpa kandidat terdengar sombong; “kami” di akhir bukan teater kerendahan hati tetapi pernyataan benar tentang siapa yang diuntungkan. Pakai “kami” dengan bebas saat bicara tentang tim <i>masa depan</i> yang ingin kamu masuki — itulah rasa memiliki yang dimaksud Fry."
       },
       "table": {
        "cols": [
         {
          "en": "Shape",
          "id": "Bentuk"
         },
         {
          "en": "Sounds like",
          "id": "Terdengar seperti"
         },
         {
          "en": "What the interviewer writes down",
          "id": "Yang ditulis pewawancara"
         }
        ],
        "rows": [
         [
          {
           "en": "All “kami”",
           "id": "Semua “kami”"
          },
          {
           "en": "“Kami mencari penyebabnya dan kami berhasil…”",
           "id": "“Kami mencari penyebabnya dan kami berhasil…”"
          },
          {
           "en": "“own contribution unclear” → 2",
           "id": "“kontribusi pribadi tidak jelas” → 2"
          }
         ],
         [
          {
           "en": "All “saya”",
           "id": "Semua “saya”"
          },
          {
           "en": "“Saya yang menemukan, saya yang memperbaiki, saya yang…”",
           "id": "“Saya yang menemukan, saya yang memperbaiki, saya yang…”"
          },
          {
           "en": "evidence noted; a private note “sombong?” in a formal panel",
           "id": "bukti dicatat; catatan pribadi “sombong?” di panel formal"
          }
         ],
         [
          {
           "en": "<b>kami → saya → kami</b>",
           "id": "<b>kami → saya → kami</b>"
          },
          {
           "en": "“Tim kami lima orang. Saya yang mengambil data tiga bulan dan mengusulkan checklist. Hasilnya tim kami…”",
           "id": "“Tim kami lima orang. Saya yang mengambil data tiga bulan dan mengusulkan checklist. Hasilnya tim kami…”"
          },
          {
           "en": "owned actions + team credit → 3 or 4",
           "id": "tindakan dimiliki + kredit tim → 3 atau 4"
          }
         ]
        ]
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "How scores are combined",
        "id": "Cara skor digabungkan"
       },
       "body": {
        "en": "In multi-round processes, each interviewer scores separately, then they meet — the debrief, or <i>rapat keputusan</i> — to compare. Inconsistencies get noticed: if your reason for leaving your internship differs between the HR and user rounds, or your numbers change, that becomes the topic of the meeting. <b>Consistency across rounds is itself scored.</b> The remedy is not memorising sentences — recited answers are their own red flag — but keeping one source of truth for facts: your Story Bank (Module 2), where every story carries its numbers, dates and names once. The interviewer’s notes matter more than their memory: in the debrief, nobody remembers your face; they read what was written. So speak in sentences that are easy to write down — a claim, a number, a named result.",
        "id": "Dalam proses beberapa ronde, tiap pewawancara menilai terpisah, lalu mereka bertemu — rapat evaluasi, atau <i>rapat keputusan</i> — untuk membandingkan. Ketidakkonsistenan terlihat: jika alasanmu meninggalkan magang berbeda antara ronde HR dan user, atau angkamu berubah, itu menjadi topik rapat. <b>Konsistensi lintas ronde ikut dinilai.</b> Obatnya bukan menghafal kalimat — jawaban yang dibacakan adalah tanda bahaya tersendiri — tetapi menjaga satu sumber kebenaran untuk fakta: Bank Ceritamu (Modul 2), tempat setiap cerita membawa angka, tanggal, dan namanya sekali. Catatan pewawancara lebih penting daripada ingatannya: di rapat evaluasi, tidak ada yang mengingat wajahmu; mereka membaca yang tertulis. Maka bicaralah dalam kalimat yang mudah ditulis — klaim, angka, hasil yang bernama."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "Red flags that override a good score",
        "id": "Tanda bahaya yang menggugurkan skor yang baik"
       },
       "body": {
        "en": "A strong technical score can be overridden by a short list of behaviours that every interviewer guide treats as disqualifying, whatever the scoresheet says.",
        "id": "Skor teknis yang kuat bisa digugurkan oleh daftar pendek perilaku yang diperlakukan setiap panduan pewawancara sebagai penggugur, apa pun kata lembar penilaian."
       },
       "bullets": [
        {
         "en": "<b>Dishonesty or inconsistency</b> — a changed number, a reason that shifts between rounds, a grade rounded up.",
         "id": "<b>Ketidakjujuran atau ketidakkonsistenan</b> — angka yang berubah, alasan yang bergeser antar ronde, nilai yang dibulatkan ke atas."
        },
        {
         "en": "<b>Blaming or badmouthing</b> previous teams, employers or lecturers.",
         "id": "<b>Menyalahkan atau menjelekkan</b> tim, perusahaan, atau dosen sebelumnya."
        },
        {
         "en": "<b>Disrespect to junior staff</b> — receptionists, drivers, coordinators; some employers ask them.",
         "id": "<b>Tidak hormat pada staf junior</b> — resepsionis, sopir, koordinator; sebagian perusahaan bertanya kepada mereka."
        },
        {
         "en": "<b>No questions and no knowledge of the company</b> — the “random application” signal.",
         "id": "<b>Tanpa pertanyaan dan tanpa pengetahuan tentang perusahaan</b> — sinyal “lamaran acak”."
        },
        {
         "en": "<b>Unrealistic salary demands without reason</b> (Lesson 5.3).",
         "id": "<b>Tuntutan gaji tidak realistis tanpa alasan</b> (Pelajaran 5.3)."
        },
        {
         "en": "<b>Refusing eligibility conditions</b> — placement, service bond — that the candidate knew about when applying.",
         "id": "<b>Menolak syarat kelayakan</b> — penempatan, ikatan dinas — yang sudah diketahui kandidat saat melamar."
        }
       ]
      }
     ],
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: From answer to decision",
       "id": "Peraga 1: Dari jawaban ke keputusan"
      },
      "title": {
       "en": "What happens to your answer after you say it",
       "id": "Apa yang terjadi pada jawabanmu setelah kamu mengucapkannya"
      },
      "items": [
       {
        "icon": "chat",
        "h": {
         "en": "Your answer",
         "id": "Jawabanmu"
        },
        "sub": {
         "en": "One story, 60–90 seconds, five features present or absent.",
         "id": "Satu cerita, 60–90 detik, lima ciri ada atau tidak."
        }
       },
       {
        "icon": "chart",
        "h": {
         "en": "Rating per competency",
         "id": "Penilaian per kompetensi"
        },
        "sub": {
         "en": "1–4 against the written anchor for that competency.",
         "id": "1–4 terhadap jangkar tertulis untuk kompetensi itu."
        }
       },
       {
        "icon": "book",
        "h": {
         "en": "Interviewer notes",
         "id": "Catatan pewawancara"
        },
        "sub": {
         "en": "Evidence written next to the score — what can be retold, not how it felt.",
         "id": "Bukti ditulis di sebelah skor — yang bisa diceritakan ulang, bukan bagaimana rasanya."
        }
       },
       {
        "icon": "users",
        "h": {
         "en": "Debrief",
         "id": "Rapat evaluasi"
        },
        "sub": {
         "en": "Interviewers compare; inconsistencies across rounds become the agenda; red flags override.",
         "id": "Pewawancara membandingkan; ketidakkonsistenan antar ronde menjadi agenda; tanda bahaya menggugurkan."
        }
       },
       {
        "icon": "check",
        "h": {
         "en": "Hire · next round · no",
         "id": "Rekrut · ronde berikutnya · tidak"
        },
        "sub": {
         "en": "Decided on the notes, not on the memory of your face.",
         "id": "Diputuskan berdasarkan catatan, bukan ingatan tentang wajahmu."
        }
       }
      ],
      "note": {
       "en": "Speak in sentences that are easy to write down.",
       "id": "Bicaralah dalam kalimat yang mudah ditulis."
      },
      "longdesc": {
       "en": "A five-step flow: the candidate’s answer; a rating per competency on a one-to-four anchored scale; the interviewer’s written notes with evidence; the debrief where interviewers compare notes, resolve inconsistencies and apply red flags; and the outcome — hire, next round or no.",
       "id": "Alur lima langkah: jawaban kandidat; penilaian per kompetensi pada skala berjangkar satu hingga empat; catatan tertulis pewawancara dengan bukti; rapat evaluasi tempat pewawancara membandingkan catatan, menyelesaikan ketidakkonsistenan, dan menerapkan tanda bahaya; dan hasilnya — rekrut, ronde berikutnya, atau tidak."
      }
     },
     "compare": [
      {
       "tag": {
        "en": "“Tell me about a time you solved a difficult problem.”",
        "id": "“Ceritakan saat Anda memecahkan masalah yang sulit.”"
       },
       "q": {
        "en": "The same question, the same internship, two answers. Rate each against the anchor table before reading why.",
        "id": "Pertanyaan yang sama, magang yang sama, dua jawaban. Nilai masing-masing terhadap tabel jangkar sebelum membaca alasannya."
       },
       "weak": {
        "en": "Score 2: “Waktu magang, ada masalah data yang tidak cocok. Kami tim mencari tahu penyebabnya dan akhirnya berhasil diselesaikan. Dari situ saya belajar pentingnya teliti.”",
        "id": "Skor 2: “Waktu magang, ada masalah data yang tidak cocok. Kami tim mencari tahu penyebabnya dan akhirnya berhasil diselesaikan. Dari situ saya belajar pentingnya teliti.”"
       },
       "strong": {
        "en": "Score 4: “Di minggu ketiga magang di operasional cabang, laporan rekonsiliasi harian untuk tiga cabang selisih hampir setiap hari, dan tiap selisih makan waktu teller sekitar tiga puluh menit koreksi manual. Supervisor minta saya cari polanya. Saya ambil data tiga bulan dan kelompokkan per jenis transaksi — ternyata sebagian besar selisih berasal dari satu terminal yang pengaturannya berbeda. Saya usulkan perbaikan pengaturan dan checklist penutupan dengan satu langkah cek terminal, dan uji coba di satu shift dulu supaya tidak mengganggu operasional. Setelah perbaikan, koreksi manual berkurang sekitar tiga puluh menit per hari, dan checklist-nya masih dipakai tim cabang. Kalau mengulang, saya akan libatkan teller sejak awal — minggu pertama ada resistensi karena mereka merasa diawasi.”",
        "id": "Skor 4: “Di minggu ketiga magang di operasional cabang, laporan rekonsiliasi harian untuk tiga cabang selisih hampir setiap hari, dan tiap selisih makan waktu teller sekitar tiga puluh menit koreksi manual. Supervisor minta saya cari polanya. Saya ambil data tiga bulan dan kelompokkan per jenis transaksi — ternyata sebagian besar selisih berasal dari satu terminal yang pengaturannya berbeda. Saya usulkan perbaikan pengaturan dan checklist penutupan dengan satu langkah cek terminal, dan uji coba di satu shift dulu supaya tidak mengganggu operasional. Setelah perbaikan, koreksi manual berkurang sekitar tiga puluh menit per hari, dan checklist-nya masih dipakai tim cabang. Kalau mengulang, saya akan libatkan teller sejak awal — minggu pertama ada resistensi karena mereka merasa diawasi.”"
       },
       "why": {
        "en": "Specific time and place; owned (“saya ambil data… saya usulkan”); reasoned (“uji coba di satu shift dulu supaya…”); a result with honest scale (about thirty minutes a day, a checklist still in use); reflection with a real lesson. About 140 words — roughly 60 seconds. The score-2 answer is true, and that is the point: truth alone earns a 2. What lifts it is not more feeling but the five features.",
        "id": "Waktu dan tempat spesifik; dimiliki (“saya ambil data… saya usulkan”); beralasan (“uji coba di satu shift dulu supaya…”); hasil dengan skala jujur (sekitar tiga puluh menit per hari, daftar periksa yang masih dipakai); refleksi dengan pelajaran nyata. Sekitar 140 kata — kira-kira 60 detik. Jawaban skor 2 itu benar, dan itulah intinya: kebenaran saja mendapat 2. Yang mengangkatnya bukan lebih banyak perasaan tetapi lima ciri."
       }
      }
     ],
     "scenario": {
      "icon": "chart",
      "title": {
       "en": "In focus: nine “kami”, one “saya”",
       "id": "Sorotan: sembilan “kami”, satu “saya”"
      },
      "body": [
       {
        "en": "Nadia sees her feedback from a mock panel run by the campus career centre: <i>Teamwork 3, Problem solving 2, Motivation 4.</i> The note on problem solving says “example clear, own contribution unclear”. She replays the recording and counts: she said “kami” nine times and “saya” once — in the sentence “saya belajar pentingnya teliti”. The story was real. Her part in it was invisible.",
        "id": "Nadia melihat umpan balik dari panel simulasi yang dijalankan pusat karier kampus: <i>Kerja tim 3, Pemecahan masalah 2, Motivasi 4.</i> Catatan pada pemecahan masalah berbunyi “contoh jelas, kontribusi pribadi tidak jelas”. Ia memutar ulang rekaman dan menghitung: ia berkata “kami” sembilan kali dan “saya” sekali — di kalimat “saya belajar pentingnya teliti”. Ceritanya nyata. Bagiannya di dalamnya tak terlihat."
       },
       {
        "en": "The fix took ten minutes, not a new story: the same events retold as kami → saya → kami, with the three actions that were actually hers stated in first person. Her second recording scored 4 on the same anchor. The lesson she wrote down: the scoresheet cannot give credit for what it cannot hear.",
        "id": "Perbaikannya butuh sepuluh menit, bukan cerita baru: peristiwa yang sama diceritakan ulang sebagai kami → saya → kami, dengan tiga tindakan yang benar-benar miliknya dinyatakan dalam orang pertama. Rekaman keduanya mendapat 4 pada jangkar yang sama. Pelajaran yang ia tulis: lembar penilaian tidak bisa memberi kredit untuk yang tidak bisa didengarnya."
       }
      ]
     },
     "steps": [
      {
       "h": {
        "en": "Drill 1 · Score three answers",
        "id": "Latihan 1 · Nilai tiga jawaban"
       },
       "body": {
        "en": "Three answers to “Tell me about working under pressure.” Rate each 1–4 with the anchor table and name the missing feature. <b>A:</b> “I would stay calm and make a list of priorities, then work through them one by one; I think staying organised is the key.” <b>B:</b> “During the national competition, sponsorship fell short two weeks before the event and the team had to find more; we contacted more companies and in the end the budget was covered.” <b>C:</b> “Two weeks before the competition we were Rp25 juta short. I split the remaining prospects by sector and took the eleven food-and-beverage companies myself, called each with a one-page offer, and closed four in nine days; we reached the full Rp85 juta and the event ran as planned.”",
        "id": "Tiga jawaban untuk “Ceritakan saat bekerja di bawah tekanan.” Nilai masing-masing 1–4 dengan tabel jangkar dan sebutkan ciri yang hilang. <b>A:</b> “Saya akan tetap tenang dan membuat daftar prioritas, lalu mengerjakannya satu per satu; menurut saya tetap terorganisir adalah kuncinya.” <b>B:</b> “Saat kompetisi nasional, sponsor kurang dua minggu sebelum acara dan tim harus mencari lagi; kami menghubungi lebih banyak perusahaan dan akhirnya anggaran tertutup.” <b>C:</b> “Dua minggu sebelum kompetisi kami kurang Rp25 juta. Saya membagi sisa prospek per sektor dan mengambil sendiri sebelas perusahaan makanan-minuman, menelepon masing-masing dengan penawaran satu halaman, dan menutup empat dalam sembilan hari; kami mencapai Rp85 juta penuh dan acara berjalan sesuai rencana.”"
       },
       "debrief": {
        "en": "A = 1: hypothetical (“I would…”), no example. B = 2: a real situation, but no personal action (“the team… we contacted”) and a result without scale. C = 3: specific, owned, resulted with numbers — but no reasoning (why split by sector? why F&B for herself?) and no reflection. To reach 4, C adds one sentence of why (“F&B sponsors had said yes fastest the year before”) and one of learning applied later.",
        "id": "A = 1: hipotetis (“Saya akan…”), tanpa contoh. B = 2: situasi nyata, tetapi tanpa tindakan pribadi (“tim… kami menghubungi”) dan hasil tanpa skala. C = 3: spesifik, dimiliki, berhasil dengan angka — tetapi tanpa alasan (mengapa dibagi per sektor? mengapa F&B untuk dirinya?) dan tanpa refleksi. Untuk mencapai 4, C menambah satu kalimat mengapa (“sponsor F&B tahun sebelumnya paling cepat berkata ya”) dan satu pembelajaran yang diterapkan kemudian."
       }
      },
      {
       "h": {
        "en": "Drill 2 · Upgrade a 2 to a 4",
        "id": "Latihan 2 · Naikkan 2 menjadi 4"
       },
       "body": {
        "en": "Take answer B and rewrite it with the five features, using only facts you can defend: when and where, your own actions in “saya”, why you chose them, a result with honest scale, and one learning you applied since. Keep it under 150 words.",
        "id": "Ambil jawaban B dan tulis ulang dengan lima ciri, hanya memakai fakta yang bisa kamu pertahankan: kapan dan di mana, tindakanmu sendiri dalam “saya”, mengapa memilihnya, hasil dengan skala jujur, dan satu pembelajaran yang kamu terapkan sejak itu. Di bawah 150 kata."
       },
       "debrief": {
        "en": "Model upgrade, features marked: [specific] “Dua minggu sebelum Kompetisi Bisnis Nasional 2025, dana sponsor masih kurang Rp25 juta dari target Rp85 juta.” [owned] “Sebagai kepala sponsorship, saya membagi 30 prospek tersisa ke enam anggota tim per sektor dan mengambil sektor makanan-minuman sendiri.” [reasoned] “Saya pilih sektor itu karena tahun sebelumnya mereka paling cepat memutuskan.” [resulted] “Dalam sembilan hari, empat dari sebelas perusahaan yang saya hubungi menandatangani, dan tim kami mencapai Rp85 juta dari sebelas sponsor untuk 1.200 peserta.” [reflected] “Sejak itu saya membuat prospek cadangan 30% di awal — di kompetisi berikutnya tidak ada kekurangan di minggu terakhir.” Note the shape: kami → saya → kami.",
        "id": "Model peningkatan, ciri ditandai: [spesifik] “Dua minggu sebelum Kompetisi Bisnis Nasional 2025, dana sponsor masih kurang Rp25 juta dari target Rp85 juta.” [dimiliki] “Sebagai kepala sponsorship, saya membagi 30 prospek tersisa ke enam anggota tim per sektor dan mengambil sektor makanan-minuman sendiri.” [beralasan] “Saya pilih sektor itu karena tahun sebelumnya mereka paling cepat memutuskan.” [berhasil] “Dalam sembilan hari, empat dari sebelas perusahaan yang saya hubungi menandatangani, dan tim kami mencapai Rp85 juta dari sebelas sponsor untuk 1.200 peserta.” [direfleksikan] “Sejak itu saya membuat prospek cadangan 30% di awal — di kompetisi berikutnya tidak ada kekurangan di minggu terakhir.” Perhatikan bentuknya: kami → saya → kami."
       }
      },
      {
       "h": {
        "en": "Drill 3 · Count your saya",
        "id": "Latihan 3 · Hitung “saya”-mu"
       },
       "body": {
        "en": "Record yourself telling one team story for 60–90 seconds. Play it back and count “saya” against “kami/kita”. Then mark each sentence: context, action or credit.",
        "id": "Rekam dirimu menceritakan satu cerita tim selama 60–90 detik. Putar ulang dan hitung “saya” terhadap “kami/kita”. Lalu tandai tiap kalimat: konteks, tindakan, atau kredit."
       },
       "debrief": {
        "en": "Aim for context in “kami”, actions in “saya”, credit in “kami” — not a ratio, a shape. If every action sentence is “kami”, the story is a 2 however true it is. If there is no “kami” at all in a team story, add the context and the credit; the score does not change, the impression in a formal panel does. The simulator counts this for you in every debrief.",
        "id": "Targetkan konteks dalam “kami”, tindakan dalam “saya”, kredit dalam “kami” — bukan rasio, melainkan bentuk. Jika setiap kalimat tindakan adalah “kami”, ceritanya bernilai 2 seberapa pun benarnya. Jika tidak ada “kami” sama sekali dalam cerita tim, tambahkan konteks dan kreditnya; skornya tidak berubah, kesan di panel formal berubah. Simulator menghitungnya untukmu di setiap debrief."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Hypothetical answers to behavioural questions (“I would…”)",
         "id": "Jawaban hipotetis untuk pertanyaan perilaku (“Saya akan…”)"
        },
        "fix": {
         "en": "A real situation, past tense, with your action; the anchor gives hypotheticals a 1.",
         "id": "Situasi nyata, lampau, dengan tindakanmu; jangkar memberi hipotetis nilai 1."
        }
       },
       {
        "h": {
         "en": "Stopping at the action without a result",
         "id": "Berhenti di tindakan tanpa hasil"
        },
        "fix": {
         "en": "“Apa hasilnya?” is the next probe — answer it before it is asked.",
         "id": "“Apa hasilnya?” adalah galian berikutnya — jawab sebelum ditanya."
        }
       },
       {
        "h": {
         "en": "Forcing a number where none exists — or inventing one",
         "id": "Memaksakan angka yang tidak ada — atau mengarangnya"
        },
        "fix": {
         "en": "An observable outcome is honest and scores; an invented figure fails the second probe and the debrief.",
         "id": "Hasil yang teramati itu jujur dan dinilai; angka karangan gagal di galian kedua dan rapat evaluasi."
        }
       },
       {
        "h": {
         "en": "Changing details between rounds",
         "id": "Mengubah detail antar ronde"
        },
        "fix": {
         "en": "One source of truth — the Story Bank — for every number, date and name.",
         "id": "Satu sumber kebenaran — Bank Cerita — untuk setiap angka, tanggal, dan nama."
        }
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "Anchored rating scale",
        "id": "Skala penilaian berjangkar"
       },
       "def": {
        "en": "A 1–4 or 1–5 scale where each score has a written behavioural description; interviewers match your answer to the description.",
        "id": "Skala 1–4 atau 1–5 di mana tiap skor punya deskripsi perilaku tertulis; pewawancara mencocokkan jawabanmu dengan deskripsinya."
       }
      },
      {
       "term": {
        "en": "Competency interview",
        "id": "Wawancara berbasis kompetensi"
       },
       "def": {
        "en": "An interview built from a list of competencies, each with questions and anchors.",
        "id": "Wawancara yang dibangun dari daftar kompetensi, masing-masing dengan pertanyaan dan jangkar."
       }
      },
      {
       "term": {
        "en": "Debrief (rapat keputusan)",
        "id": "Rapat evaluasi pewawancara"
       },
       "def": {
        "en": "The meeting where interviewers compare scores and notes, and where inconsistencies are discussed.",
        "id": "Rapat tempat pewawancara membandingkan skor dan catatan, dan tempat ketidakkonsistenan dibahas."
       }
      },
      {
       "term": {
        "en": "Red flag",
        "id": "Tanda bahaya"
       },
       "def": {
        "en": "A behaviour that overrides a good score: dishonesty, blame, disrespect, no questions, unreasoned demands.",
        "id": "Perilaku yang menggugurkan skor baik: ketidakjujuran, menyalahkan, tidak hormat, tanpa pertanyaan, tuntutan tanpa alasan."
       }
      },
      {
       "term": {
        "en": "Ownership",
        "id": "Kepemilikan / kontribusi pribadi"
       },
       "def": {
        "en": "Your specific actions stated in first person — the feature the we → I → we shape protects.",
        "id": "Tindakan spesifikmu yang dinyatakan dalam orang pertama — ciri yang dilindungi bentuk kami → saya → kami."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Which addition most raises a “3” answer to a “4”?",
        "id": "Tambahan mana yang paling menaikkan jawaban “3” menjadi “4”?"
       },
       "options": [
        {
         "en": "More adjectives",
         "id": "Lebih banyak kata sifat"
        },
        {
         "en": "A longer situation description",
         "id": "Deskripsi situasi yang lebih panjang"
        },
        {
         "en": "The reasoning behind your choice and a lesson you applied later",
         "id": "Alasan di balik pilihanmu dan pelajaran yang kamu terapkan kemudian"
        },
        {
         "en": "Mentioning the company name",
         "id": "Menyebut nama perusahaan"
        }
       ],
       "correct": 2,
       "why": {
        "en": "Reasoning and applied reflection are the typical 3→4 differentiators.",
        "id": "Alasan dan refleksi yang diterapkan adalah pembeda 3→4 yang lazim."
       }
      },
      {
       "q": {
        "en": "You mentioned “40 transactions per day” in the HR round and “around 100” in the user round. The likely consequence:",
        "id": "Kamu menyebut “40 transaksi per hari” di ronde HR dan “sekitar 100” di ronde user. Konsekuensi yang mungkin:"
       },
       "options": [
        {
         "en": "Nothing",
         "id": "Tidak ada"
        },
        {
         "en": "The inconsistency is raised at the debrief and weakens trust in all your evidence",
         "id": "Ketidakkonsistenan diangkat di rapat evaluasi dan melemahkan kepercayaan pada semua buktimu"
        },
        {
         "en": "A higher score for scale",
         "id": "Skor lebih tinggi untuk skala"
        },
        {
         "en": "They assume a typo",
         "id": "Mereka menganggapnya salah ketik"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Consistency across rounds is scored; interviewers compare notes.",
        "id": "Konsistensi lintas ronde dinilai; pewawancara membandingkan catatan."
       }
      },
      {
       "q": {
        "en": "Best way to handle a team achievement in an Indonesian panel:",
        "id": "Cara terbaik menangani pencapaian tim di panel Indonesia:"
       },
       "options": [
        {
         "en": "Only “kami”, to stay humble",
         "id": "Hanya “kami”, agar tetap rendah hati"
        },
        {
         "en": "Only “saya”, to show impact",
         "id": "Hanya “saya”, untuk menunjukkan dampak"
        },
        {
         "en": "“Kami” for context, “saya” for your actions, “kami” for shared credit",
         "id": "“Kami” untuk konteks, “saya” untuk tindakanmu, “kami” untuk kredit bersama"
        },
        {
         "en": "Avoid team stories",
         "id": "Hindari cerita tim"
        }
       ],
       "correct": 2,
       "why": {
        "en": "We → I → we gives ownership evidence without sounding sombong.",
        "id": "Kami → saya → kami memberi bukti kepemilikan tanpa terdengar sombong."
       }
      }
     ],
     "tryit": {
      "qid": "beh_problem_solving",
      "persona": "manager",
      "profile": "behavioural",
      "returnTo": 2,
      "label": {
       "en": "Drill “Tell me about a difficult problem you solved”",
       "id": "Latih “Ceritakan masalah sulit yang Anda pecahkan”"
      },
      "desc": {
       "en": "One behavioural question with the Hiring Manager persona. The debrief shows the anchor table against your answer and counts your “saya” and “kami”.",
       "id": "Satu pertanyaan perilaku dengan persona Hiring Manager. Debrief menunjukkan tabel jangkar terhadap jawabanmu dan menghitung “saya” dan “kami”-mu."
      }
     },
     "takeaways": [
      {
       "en": "You are scored against written anchors, not “liking”.",
       "id": "Kamu dinilai terhadap jangkar tertulis, bukan “rasa suka”."
      },
      {
       "en": "Top answers are specific, owned, reasoned, resulted, reflected.",
       "id": "Jawaban teratas spesifik, dimiliki, beralasan, berhasil, direfleksikan."
      },
      {
       "en": "Consistency across rounds is scored — keep one source of truth.",
       "id": "Konsistensi lintas ronde dinilai — jaga satu sumber kebenaran."
      }
     ],
     "resources": {
      "title": {
       "en": "Sources and the anchor card",
       "id": "Sumber dan kartu jangkar"
      },
      "lead": {
       "en": "Three sources, and the card to keep beside every story you build.",
       "id": "Tiga sumber, dan kartu untuk disimpan di samping setiap cerita yang kamu bangun."
      },
      "items": [
       {
        "kind": "guide",
        "title": {
         "en": "Reading list · Lesson 1.2",
         "id": "Daftar bacaan · Pelajaran 1.2"
        },
        "desc": {
         "en": "Interviewer-side sources; the AKHLAK mapping is marked for verification.",
         "id": "Sumber dari sisi pewawancara; pemetaan AKHLAK ditandai untuk verifikasi."
        },
        "body": [
         {
          "en": "J. Kador, <i>The Manager’s Book of Questions</i> — behavioural questioning and what interviewers write down.",
          "id": "J. Kador, <i>The Manager’s Book of Questions</i> — pertanyaan perilaku dan apa yang ditulis pewawancara."
         },
         {
          "en": "D. Graham, <i>Switchers</i> — question structure; reasoning and reflection.",
          "id": "D. Graham, <i>Switchers</i> — struktur pertanyaan; alasan dan refleksi."
         },
         {
          "en": "E. Pellett, <i>Cracking the Code to a Successful Interview</i> — how interviewers decide.",
          "id": "E. Pellett, <i>Cracking the Code to a Successful Interview</i> — cara pewawancara memutuskan."
         },
         {
          "en": "C. Mills, <i>You’re Hired! CVs</i>; R. Fry, <i>101 Smart Questions</i> — the “I” vs “we” positions The Rope resolves as we → I → we.",
          "id": "C. Mills, <i>You’re Hired! CVs</i>; R. Fry, <i>101 Smart Questions</i> — posisi “saya” vs “kami” yang diselesaikan The Rope sebagai kami → saya → kami."
         }
        ]
       },
       {
        "kind": "checklist",
        "title": {
         "en": "The five-feature card",
         "id": "Kartu lima ciri"
        },
        "desc": {
         "en": "Run every story through it before it enters the Story Bank.",
         "id": "Jalankan setiap cerita melaluinya sebelum masuk Bank Cerita."
        },
        "body": [
         {
          "en": "Specific — when, where, one situation",
          "id": "Spesifik — kapan, di mana, satu situasi"
         },
         {
          "en": "Owned — my actions in “saya”; context and credit in “kami”",
          "id": "Dimiliki — tindakan saya dalam “saya”; konteks dan kredit dalam “kami”"
         },
         {
          "en": "Reasoned — why that way; what else I considered",
          "id": "Beralasan — mengapa cara itu; apa lagi yang saya pertimbangkan"
         },
         {
          "en": "Resulted — a measured or observable outcome, honest scale",
          "id": "Berhasil — hasil terukur atau teramati, skala jujur"
         },
         {
          "en": "Reflected — what I learned and where I applied it since",
          "id": "Direfleksikan — apa yang saya pelajari dan di mana saya menerapkannya sejak itu"
         }
        ]
       }
      ]
     }
    },
    {
     "n": "1.3",
     "kind": "reading",
     "placeholder": false,
     "dur": {
      "en": "40 min",
      "id": "40 mnt"
     },
     "title": {
      "en": "The Seven Question Types and the Question Behind the Question",
      "id": "Tujuh Tipe Pertanyaan dan Maksud Tersembunyi di Baliknya"
     },
     "overview": {
      "en": "Interview questions come in a limited number of types, and each type has a right shape of answer. Just as important, many questions carry a hidden concern — “Where do you see yourself in five years?” is usually asking “Will you leave us in a year?” Once you can identify the type and the concern, you can answer the real question. This lesson also gives you the protocol for pressure — silence, scepticism, curveballs — and for the moment you do not know.",
      "id": "Pertanyaan wawancara datang dalam jumlah tipe yang terbatas, dan setiap tipe punya bentuk jawaban yang tepat. Sama pentingnya, banyak pertanyaan membawa kekhawatiran tersembunyi — “Di mana Anda lima tahun lagi?” biasanya bertanya “Apakah Anda akan pergi setahun lagi?” Begitu kamu bisa mengenali tipe dan kekhawatirannya, kamu bisa menjawab pertanyaan yang sebenarnya. Pelajaran ini juga memberimu protokol untuk tekanan — keheningan, skeptisisme, pertanyaan tak terduga — dan untuk saat kamu tidak tahu."
     },
     "objectives": [
      {
       "en": "Identify seven question types and the answer shape each requires.",
       "id": "Mengenali tujuh tipe pertanyaan dan bentuk jawaban yang dibutuhkan masing-masing."
      },
      {
       "en": "Name the hidden concern behind ten common questions.",
       "id": "Menyebutkan kekhawatiran tersembunyi di balik sepuluh pertanyaan umum."
      },
      {
       "en": "Answer a question in a way that addresses both the stated and the hidden concern.",
       "id": "Menjawab pertanyaan dengan cara yang menangani kekhawatiran yang dinyatakan dan yang tersembunyi."
      },
      {
       "en": "Hold steady under stress techniques and say “I don’t know” without bluffing.",
       "id": "Tetap tenang di bawah teknik tekanan dan berkata “saya tidak tahu” tanpa menggertak."
      }
     ],
     "readFirst": {
      "kicker": {
       "en": "Read first · 5 slides",
       "id": "Baca dulu · 5 slide"
      },
      "title": {
       "en": "Identify the type, then use its shape",
       "id": "Kenali tipenya, lalu pakai bentuknya"
      },
      "intro": {
       "en": "Seven types, seven shapes, one habit: before answering, spend two seconds deciding which type you just heard.",
       "id": "Tujuh tipe, tujuh bentuk, satu kebiasaan: sebelum menjawab, luangkan dua detik memutuskan tipe mana yang baru kamu dengar."
      },
      "slides": [
       {
        "h": {
         "en": "Seven types",
         "id": "Tujuh tipe"
        },
        "points": [
         {
          "en": "Behavioural · situational · motivational · self-assessment · technical · case · stress.",
          "id": "Perilaku · situasional · motivasional · penilaian diri · teknis · kasus · tekanan."
         },
         {
          "en": "Adapted from Kador’s classification for interviewers.",
          "id": "Diadaptasi dari klasifikasi Kador untuk pewawancara."
         }
        ]
       },
       {
        "h": {
         "en": "Answer shapes",
         "id": "Bentuk jawaban"
        },
        "points": [
         {
          "en": "STAR+L for behavioural; principle → steps → real example for situational; REC for motivational; claim + evidence for self-assessment.",
          "id": "STAR+L untuk perilaku; prinsip → langkah → contoh nyata untuk situasional; REC untuk motivasional; klaim + bukti untuk penilaian diri."
         },
         {
          "en": "Direct answer → reasoning → example for technical; clarify → structure → analyse → answer for case.",
          "id": "Jawaban langsung → alasan → contoh untuk teknis; klarifikasi → struktur → analisis → jawab untuk kasus."
         }
        ]
       },
       {
        "h": {
         "en": "Hidden concerns",
         "id": "Kekhawatiran tersembunyi"
        },
        "points": [
         {
          "en": "Behind many common questions sits a small set of employer worries: will you stay, is this random, is there a disqualifier.",
          "id": "Di balik banyak pertanyaan umum ada sekumpulan kecil kekhawatiran perusahaan: apakah kamu bertahan, apakah ini acak, adakah penggugur."
         },
         {
          "en": "The best answer addresses the worry directly (Ryan).",
          "id": "Jawaban terbaik menangani kekhawatiran itu secara langsung (Ryan)."
         }
        ]
       },
       {
        "h": {
         "en": "Stress questions",
         "id": "Pertanyaan tekanan"
        },
        "points": [
         {
          "en": "Pause → acknowledge → evidence → forward.",
          "id": "Jeda → akui → bukti → ke depan."
         },
         {
          "en": "Silence after your answer is not a request for more words.",
          "id": "Keheningan setelah jawabanmu bukan permintaan untuk lebih banyak kata."
         }
        ]
       },
       {
        "h": {
         "en": "Illegal and sensitive questions — preview",
         "id": "Pertanyaan tidak pantas dan sensitif — pratinjau"
        },
        "points": [
         {
          "en": "Marriage, S2 plans, religion, family: common in Indonesia, sometimes inappropriate.",
          "id": "Pernikahan, rencana S2, agama, keluarga: umum di Indonesia, kadang tidak pantas."
         },
         {
          "en": "Address the concern behind them without over-sharing — Lesson 5.4 gives the tiers.",
          "id": "Tangani kekhawatiran di baliknya tanpa berbagi berlebihan — Pelajaran 5.4 memberi tingkatannya."
         }
        ]
       }
      ]
     },
     "sections": [
      {
       "icon": "book",
       "img": "../../assets/bg/gauntlet/gate-03-assessment.jpg",
       "imgPos": "50% 40%",
       "h": {
        "en": "The seven types",
        "id": "Tujuh tipe"
       },
       "body": {
        "en": "Kador classifies questions from the interviewer’s side by what each is designed to reveal <i>(Kador, The Manager’s Book of Questions)</i>. Turned around for the candidate, the classification becomes a routing table: identify the type, and the shape of a good answer follows. The mismatch is the commonest failure in the simulator’s logs — a STAR story told to a motivational question, a principle recited to a behavioural one.",
        "id": "Kador menggolongkan pertanyaan dari sisi pewawancara berdasarkan apa yang dirancang untuk diungkap masing-masing <i>(Kador, The Manager’s Book of Questions)</i>. Dibalik untuk kandidat, klasifikasi itu menjadi tabel pengarah: kenali tipenya, dan bentuk jawaban yang baik mengikuti. Ketidakcocokan adalah kegagalan paling umum di catatan simulator — cerita STAR untuk pertanyaan motivasional, prinsip yang dibacakan untuk pertanyaan perilaku."
       },
       "table": {
        "cols": [
         {
          "en": "Type",
          "id": "Tipe"
         },
         {
          "en": "Example",
          "id": "Contoh"
         },
         {
          "en": "What it tests",
          "id": "Yang diuji"
         },
         {
          "en": "Answer shape",
          "id": "Bentuk jawaban"
         }
        ],
        "rows": [
         [
          {
           "en": "<b>Behavioural</b>",
           "id": "<b>Perilaku</b>"
          },
          {
           "en": "“Tell me about a time you had to meet a tight deadline.”",
           "id": "“Ceritakan saat Anda harus mengejar tenggat yang ketat.”"
          },
          {
           "en": "Past behaviour as predictor",
           "id": "Perilaku masa lalu sebagai prediktor"
          },
          {
           "en": "<b>STAR+L</b> story (Module 2)",
           "id": "Cerita <b>STAR+L</b> (Modul 2)"
          }
         ],
         [
          {
           "en": "<b>Situational / hypothetical</b>",
           "id": "<b>Situasional / hipotetis</b>"
          },
          {
           "en": "“What would you do if a customer shouted at you?”",
           "id": "“Apa yang Anda lakukan jika pelanggan membentak Anda?”"
          },
          {
           "en": "Judgement, values",
           "id": "Penilaian, nilai"
          },
          {
           "en": "<b>Principle → steps → a real example</b> that shows you’ve done similar",
           "id": "<b>Prinsip → langkah → contoh nyata</b> yang menunjukkan kamu pernah melakukan yang serupa"
          }
         ],
         [
          {
           "en": "<b>Motivational</b>",
           "id": "<b>Motivasional</b>"
          },
          {
           "en": "“Why this company?”, “Why this role?”",
           "id": "“Mengapa perusahaan ini?”, “Mengapa peran ini?”"
          },
          {
           "en": "Will-do, commitment",
           "id": "Mau, komitmen"
          },
          {
           "en": "<b>REC</b> — Research, Experience, Contribution (Module 4)",
           "id": "<b>REC</b> — Riset, Pengalaman, Kontribusi (Modul 4)"
          }
         ],
         [
          {
           "en": "<b>Self-assessment</b>",
           "id": "<b>Penilaian diri</b>"
          },
          {
           "en": "“What’s your weakness?”, “How would friends describe you?”",
           "id": "“Apa kelemahan Anda?”, “Bagaimana teman menggambarkan Anda?”"
          },
          {
           "en": "Self-awareness, honesty",
           "id": "Kesadaran diri, kejujuran"
          },
          {
           "en": "<b>Claim + evidence</b>; for weakness: real weakness → system → progress (Module 4)",
           "id": "<b>Klaim + bukti</b>; untuk kelemahan: kelemahan nyata → sistem → kemajuan (Modul 4)"
          }
         ],
         [
          {
           "en": "<b>Technical / knowledge</b>",
           "id": "<b>Teknis / pengetahuan</b>"
          },
          {
           "en": "“How does a bank’s net interest margin work?”",
           "id": "“Bagaimana cara kerja net interest margin bank?”"
          },
          {
           "en": "Can-do",
           "id": "Bisa"
          },
          {
           "en": "<b>Direct answer → reasoning → example of use</b>; say what you don’t know",
           "id": "<b>Jawaban langsung → alasan → contoh penggunaan</b>; katakan yang tidak kamu tahu"
          }
         ],
         [
          {
           "en": "<b>Case / problem-solving</b>",
           "id": "<b>Kasus / pemecahan masalah</b>"
          },
          {
           "en": "“Estimate the market for bubble tea in Bandung.”",
           "id": "“Perkirakan pasar boba di Bandung.”"
          },
          {
           "en": "Structured thinking",
           "id": "Berpikir terstruktur"
          },
          {
           "en": "<b>Clarify → structure → analyse → answer → sanity check</b> (Module 6)",
           "id": "<b>Klarifikasi → struktur → analisis → jawab → uji kewajaran</b> (Modul 6)"
          }
         ],
         [
          {
           "en": "<b>Stress / curveball</b>",
           "id": "<b>Tekanan / tak terduga</b>"
          },
          {
           "en": "“Why is your IPK only 3.1?”, silence, “Convince me.”",
           "id": "“Kenapa IPK Anda cuma 3,1?”, keheningan, “Yakinkan saya.”"
          },
          {
           "en": "Composure, honesty",
           "id": "Ketenangan, kejujuran"
          },
          {
           "en": "<b>Pause → acknowledge → evidence → forward</b>",
           "id": "<b>Jeda → akui → bukti → ke depan</b>"
          }
         ]
        ]
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "The question behind the question",
        "id": "Pertanyaan di balik pertanyaan"
       },
       "body": {
        "en": "Ryan’s advice is that behind many common questions sits a small set of employer worries, and the best answer addresses the worry directly <i>(Ryan, 60 Seconds & You’re Hired!)</i>. The table is an original one for the Indonesian early-career market. Read the middle column first: it is what the interviewer is writing in the margin while you answer the left one.",
        "id": "Saran Ryan adalah bahwa di balik banyak pertanyaan umum ada sekumpulan kecil kekhawatiran perusahaan, dan jawaban terbaik menangani kekhawatiran itu secara langsung <i>(Ryan, 60 Seconds & You’re Hired!)</i>. Tabel ini asli untuk pasar karier awal Indonesia. Baca kolom tengah dulu: itulah yang ditulis pewawancara di pinggir saat kamu menjawab kolom kiri."
       },
       "table": {
        "cols": [
         {
          "en": "Stated question",
          "id": "Pertanyaan yang dinyatakan"
         },
         {
          "en": "Hidden concern",
          "id": "Kekhawatiran tersembunyi"
         },
         {
          "en": "What the answer must include",
          "id": "Yang harus ada dalam jawaban"
         }
        ],
        "rows": [
         [
          {
           "en": "“Ceritakan tentang diri Anda.”",
           "id": "“Ceritakan tentang diri Anda.”"
          },
          {
           "en": "Can you communicate clearly and relevantly?",
           "id": "Bisakah Anda berkomunikasi dengan jelas dan relevan?"
          },
          {
           "en": "A relevant, structured 60-second opening (Module 4)",
           "id": "Pembuka 60 detik yang relevan dan terstruktur (Modul 4)"
          }
         ],
         [
          {
           "en": "“Di mana Anda lima tahun lagi?”",
           "id": "“Di mana Anda lima tahun lagi?”"
          },
          {
           "en": "Will you stay? Are you realistic?",
           "id": "Apakah Anda bertahan? Apakah Anda realistis?"
          },
          {
           "en": "Growth <i>inside</i> this path; learning goals; no “own business” or “S2 abroad next year” unless true and handled",
           "id": "Pertumbuhan <i>di dalam</i> jalur ini; tujuan belajar; tanpa “usaha sendiri” atau “S2 ke luar negeri tahun depan” kecuali benar dan ditangani"
          }
         ],
         [
          {
           "en": "“Kenapa ingin bekerja di sini?”",
           "id": "“Kenapa ingin bekerja di sini?”"
          },
          {
           "en": "Is this a random application?",
           "id": "Apakah ini lamaran acak?"
          },
          {
           "en": "Specific research + fit to your experience",
           "id": "Riset spesifik + kecocokan dengan pengalamanmu"
          }
         ],
         [
          {
           "en": "“Apa kelemahan Anda?”",
           "id": "“Apa kelemahan Anda?”"
          },
          {
           "en": "Self-awareness; is there a disqualifier?",
           "id": "Kesadaran diri; adakah penggugur?"
          },
          {
           "en": "Real, non-core weakness with a system to manage it",
           "id": "Kelemahan nyata bukan inti dengan sistem untuk mengelolanya"
          }
         ],
         [
          {
           "en": "“Kenapa IPK Anda rendah?”",
           "id": "“Kenapa IPK Anda rendah?”"
          },
          {
           "en": "Capability; excuses",
           "id": "Kemampuan; alasan"
          },
          {
           "en": "Brief ownership, then other evidence of capability",
           "id": "Pengakuan singkat, lalu bukti kemampuan lain"
          }
         ],
         [
          {
           "en": "“Sudah melamar ke mana saja?”",
           "id": "“Sudah melamar ke mana saja?”"
          },
          {
           "en": "Seriousness, your market value, will you accept?",
           "id": "Keseriusan, nilai pasarmu, apakah Anda menerima?"
          },
          {
           "en": "Consistent direction, honest but not exhaustive",
           "id": "Arah yang konsisten, jujur tetapi tidak menyeluruh"
          }
         ],
         [
          {
           "en": "“Bersedia ditempatkan di mana saja?”",
           "id": "“Bersedia ditempatkan di mana saja?”"
          },
          {
           "en": "Eligibility; will you resign after placement?",
           "id": "Kelayakan; apakah Anda mengundurkan diri setelah penempatan?"
          },
          {
           "en": "A truthful answer; if yes, a reason you can mean",
           "id": "Jawaban jujur; jika ya, alasan yang benar-benar kamu maksud"
          }
         ],
         [
          {
           "en": "“Apa rencana Anda soal S2/menikah?”",
           "id": "“Apa rencana Anda soal S2/menikah?”"
          },
          {
           "en": "Will you leave soon? (often asked, sometimes inappropriate)",
           "id": "Apakah Anda segera pergi? (sering ditanya, kadang tidak pantas)"
          },
          {
           "en": "Address the concern (commitment) without over-sharing — Lesson 5.4",
           "id": "Tangani kekhawatirannya (komitmen) tanpa berbagi berlebihan — Pelajaran 5.4"
          }
         ],
         [
          {
           "en": "“Kenapa keluar dari pekerjaan sebelumnya?”",
           "id": "“Kenapa keluar dari pekerjaan sebelumnya?”"
          },
          {
           "en": "Problem employee?",
           "id": "Karyawan bermasalah?"
          },
          {
           "en": "Forward-looking reason; no blame",
           "id": "Alasan yang mengarah ke depan; tanpa menyalahkan"
          }
         ],
         [
          {
           "en": "“Ada pertanyaan?”",
           "id": "“Ada pertanyaan?”"
          },
          {
           "en": "Interest, preparation",
           "id": "Minat, persiapan"
          },
          {
           "en": "2–3 researched questions (Module 8)",
           "id": "2–3 pertanyaan hasil riset (Modul 8)"
          }
         ]
        ],
        "caption": {
         "en": "Ten stated questions, ten concerns. The right column is what a “4” answer contains.",
         "id": "Sepuluh pertanyaan yang dinyatakan, sepuluh kekhawatiran. Kolom kanan adalah isi jawaban “4”."
        }
       }
      },
      {
       "icon": "lock",
       "h": {
        "en": "Stress techniques and how to hold steady",
        "id": "Teknik tekanan dan cara tetap tenang"
       },
       "body": {
        "en": "Interviewers sometimes deliberately create pressure: a long silence after your answer, rapid questions, open scepticism (“Saya tidak yakin itu cukup”), or questions designed to unsettle. Pellett describes these as tests of composure rather than judgements of content <i>(Pellett, Cracking the Code)</i>. The protocol: <b>pause</b> (two seconds is fine) → <b>acknowledge</b> (“Pertanyaan yang wajar”) → <b>evidence</b> (a fact, not a defence) → <b>forward</b> (what you would do, or what you have learned). Silence after your complete answer: do not keep talking to fill it — the extra sentences are where over-claims and “we” creep in. A short “Apakah itu menjawab pertanyaan Bapak/Ibu, atau ada bagian yang ingin saya perdalam?” is enough, and it hands the turn back. The simulator’s silence mode (Module 9) measures the words you add after a six-second pause; the target is zero.",
        "id": "Pewawancara kadang sengaja menciptakan tekanan: keheningan panjang setelah jawabanmu, pertanyaan beruntun, skeptisisme terbuka (“Saya tidak yakin itu cukup”), atau pertanyaan yang dirancang untuk mengguncang. Pellett menggambarkannya sebagai ujian ketenangan, bukan penilaian isi <i>(Pellett, Cracking the Code)</i>. Protokolnya: <b>jeda</b> (dua detik tidak apa-apa) → <b>akui</b> (“Pertanyaan yang wajar”) → <b>bukti</b> (fakta, bukan pembelaan) → <b>ke depan</b> (apa yang akan kamu lakukan, atau yang kamu pelajari). Keheningan setelah jawaban lengkapmu: jangan terus bicara untuk mengisinya — kalimat tambahan itulah tempat klaim berlebihan dan “kami” menyelinap. “Apakah itu menjawab pertanyaan Bapak/Ibu, atau ada bagian yang ingin saya perdalam?” yang singkat sudah cukup, dan mengembalikan giliran. Mode keheningan simulator (Modul 9) mengukur kata yang kamu tambahkan setelah jeda enam detik; targetnya nol."
       },
       "table": {
        "cols": [
         {
          "en": "Technique",
          "id": "Teknik"
         },
         {
          "en": "What it is testing",
          "id": "Yang diuji"
         },
         {
          "en": "Your move",
          "id": "Langkahmu"
         }
        ],
        "rows": [
         [
          {
           "en": "Long silence after your answer",
           "id": "Keheningan panjang setelah jawabanmu"
          },
          {
           "en": "Whether you over-talk under discomfort",
           "id": "Apakah kamu bicara berlebihan saat tidak nyaman"
          },
          {
           "en": "Wait, or offer once to go deeper on any part",
           "id": "Tunggu, atau tawarkan sekali untuk memperdalam bagian mana pun"
          }
         ],
         [
          {
           "en": "Rapid questions",
           "id": "Pertanyaan beruntun"
          },
          {
           "en": "Whether you keep structure at speed",
           "id": "Apakah kamu menjaga struktur dalam kecepatan"
          },
          {
           "en": "Answer each briefly with the type’s shape; do not chase the previous one",
           "id": "Jawab masing-masing singkat dengan bentuk tipenya; jangan mengejar yang sebelumnya"
          }
         ],
         [
          {
           "en": "Open scepticism",
           "id": "Skeptisisme terbuka"
          },
          {
           "en": "Composure; whether evidence exists beneath the claim",
           "id": "Ketenangan; apakah ada bukti di bawah klaim"
          },
          {
           "en": "Acknowledge, then one more fact — not a bigger claim",
           "id": "Akui, lalu satu fakta lagi — bukan klaim yang lebih besar"
          }
         ],
         [
          {
           "en": "“Convince me.”",
           "id": "“Yakinkan saya.”"
          },
          {
           "en": "Whether you can prioritise",
           "id": "Apakah kamu bisa memprioritaskan"
          },
          {
           "en": "Two reasons with evidence, then stop",
           "id": "Dua alasan dengan bukti, lalu berhenti"
          }
         ]
        ]
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "When you don’t know",
        "id": "Saat kamu tidak tahu"
       },
       "body": {
        "en": "For technical questions, bluffing is the worst option — interviewers who know the subject spot it instantly, and a confident wrong answer is remembered longer than an honest gap. The protocol: say what you do know; reason aloud toward an answer; name how you would find out. “Saya belum pernah menghitung NIM secara langsung, tapi setahu saya itu selisih pendapatan bunga dan beban bunga dibagi aset produktif. Kalau salah, saya ingin tahu bagaimana tim di sini menghitungnya.” That answer scores on <i>limits handled</i> even if the formula is imperfect, because it shows the two things a manager needs from a junior: honesty at the edge of knowledge, and the habit of reasoning rather than freezing. Lesson 6.2 turns this into a full “I don’t know” protocol for your field.",
        "id": "Untuk pertanyaan teknis, menggertak adalah pilihan terburuk — pewawancara yang menguasai subjeknya langsung tahu, dan jawaban salah yang percaya diri diingat lebih lama daripada celah yang jujur. Protokolnya: katakan yang kamu tahu; bernalar dengan suara menuju jawaban; sebutkan cara kamu mencari tahu. “Saya belum pernah menghitung NIM secara langsung, tapi setahu saya itu selisih pendapatan bunga dan beban bunga dibagi aset produktif. Kalau salah, saya ingin tahu bagaimana tim di sini menghitungnya.” Jawaban itu dinilai pada <i>batas yang ditangani</i> meski rumusnya belum sempurna, karena menunjukkan dua hal yang dibutuhkan manajer dari junior: kejujuran di batas pengetahuan, dan kebiasaan bernalar alih-alih membeku. Pelajaran 6.2 mengubah ini menjadi protokol “saya tidak tahu” lengkap untuk bidangmu."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: Identify → answer shape",
       "id": "Peraga 1: Kenali → bentuk jawaban"
      },
      "title": {
       "en": "Seven questions to ask yourself in the two seconds before you answer",
       "id": "Tujuh pertanyaan untuk dirimu dalam dua detik sebelum menjawab"
      },
      "items": [
       {
        "icon": "clock",
        "h": {
         "en": "Does it ask about the past?",
         "id": "Apakah bertanya tentang masa lalu?"
        },
        "sub": {
         "en": "→ behavioural · STAR+L",
         "id": "→ perilaku · STAR+L"
        }
       },
       {
        "icon": "compass",
        "h": {
         "en": "Future or hypothetical?",
         "id": "Masa depan atau hipotetis?"
        },
        "sub": {
         "en": "→ situational · principle → steps → real example",
         "id": "→ situasional · prinsip → langkah → contoh nyata"
        }
       },
       {
        "icon": "target",
        "h": {
         "en": "Why us / why this?",
         "id": "Mengapa kami / mengapa ini?"
        },
        "sub": {
         "en": "→ motivational · REC",
         "id": "→ motivasional · REC"
        }
       },
       {
        "icon": "eye",
        "h": {
         "en": "About yourself?",
         "id": "Tentang dirimu?"
        },
        "sub": {
         "en": "→ self-assessment · claim + evidence",
         "id": "→ penilaian diri · klaim + bukti"
        }
       },
       {
        "icon": "book",
        "h": {
         "en": "Knowledge?",
         "id": "Pengetahuan?"
        },
        "sub": {
         "en": "→ technical · direct → reasoning → example; say what you don’t know",
         "id": "→ teknis · langsung → alasan → contoh; katakan yang tidak kamu tahu"
        }
       },
       {
        "icon": "chart",
        "h": {
         "en": "A problem to solve?",
         "id": "Masalah untuk dipecahkan?"
        },
        "sub": {
         "en": "→ case · clarify → structure → analyse → answer",
         "id": "→ kasus · klarifikasi → struktur → analisis → jawab"
        }
       },
       {
        "icon": "lock",
        "h": {
         "en": "Pressure?",
         "id": "Tekanan?"
        },
        "sub": {
         "en": "→ stress · pause → acknowledge → evidence → forward",
         "id": "→ tekanan · jeda → akui → bukti → ke depan"
        }
       }
      ],
      "note": {
       "en": "The routing takes two seconds and prevents the commonest failure: the right story in the wrong shape.",
       "id": "Pengarahannya butuh dua detik dan mencegah kegagalan paling umum: cerita yang benar dalam bentuk yang salah."
      },
      "longdesc": {
       "en": "A decision tree with seven branches: a question about the past routes to a behavioural STAR+L answer; a future or hypothetical question to a situational answer of principle, steps and a real example; a why-us question to REC; a question about yourself to claim plus evidence; a knowledge question to a direct answer with reasoning and an example, admitting what you do not know; a problem to the case protocol; and pressure to pause, acknowledge, evidence, forward.",
       "id": "Pohon keputusan dengan tujuh cabang: pertanyaan tentang masa lalu mengarah ke jawaban perilaku STAR+L; pertanyaan masa depan atau hipotetis ke jawaban situasional berupa prinsip, langkah, dan contoh nyata; pertanyaan mengapa-kami ke REC; pertanyaan tentang dirimu ke klaim plus bukti; pertanyaan pengetahuan ke jawaban langsung dengan alasan dan contoh, mengakui yang tidak kamu tahu; masalah ke protokol kasus; dan tekanan ke jeda, akui, bukti, ke depan."
      }
     },
     "compare": [
      {
       "tag": {
        "en": "“Di mana Anda lima tahun lagi?” (ODP, bank)",
        "id": "“Di mana Anda lima tahun lagi?” (ODP, bank)"
       },
       "q": {
        "en": "The HR interviewer at Bank Sinar Nusantara asks the five-year question. The hidden concern is “will you stay, and are you realistic?”",
        "id": "Pewawancara HR di Bank Sinar Nusantara mengajukan pertanyaan lima tahun. Kekhawatiran tersembunyinya “apakah kamu bertahan, dan apakah kamu realistis?”"
       },
       "weak": {
        "en": "“Saya ingin punya usaha sendiri.” — or — “Mungkin di posisi Bapak.”",
        "id": "“Saya ingin punya usaha sendiri.” — atau — “Mungkin di posisi Bapak.”"
       },
       "strong": {
        "en": "“Saya ingin sudah menguasai operasional dan kredit dengan baik — idealnya sudah memegang tanggung jawab penuh atas satu unit atau portofolio. Program ODP di sini memberi rotasi di tiga fungsi di tahun pertama, dan itu jalur yang saya cari. Yang paling ingin saya bangun adalah kemampuan membaca risiko nasabah, karena itu yang saya lihat paling membedakan orang operasional yang baik.”",
        "id": "“Saya ingin sudah menguasai operasional dan kredit dengan baik — idealnya sudah memegang tanggung jawab penuh atas satu unit atau portofolio. Program ODP di sini memberi rotasi di tiga fungsi di tahun pertama, dan itu jalur yang saya cari. Yang paling ingin saya bangun adalah kemampuan membaca risiko nasabah, karena itu yang saya lihat paling membedakan orang operasional yang baik.”"
       },
       "why": {
        "en": "The first weak answer signals leaving; the second is a cliché that can land as arrogant in a formal room. The strong answer addresses the hidden concern (stay and grow here), shows research (the programme’s three-function rotation), and gives a concrete learning goal — which is the part interviewers can write down. It is also true, which is why it survives “kenapa risiko nasabah?”.",
        "id": "Jawaban lemah pertama menandakan pergi; yang kedua klise yang bisa terkesan sombong di ruangan formal. Jawaban kuat menangani kekhawatiran tersembunyi (bertahan dan tumbuh di sini), menunjukkan riset (rotasi tiga fungsi program), dan memberi tujuan belajar konkret — bagian yang bisa ditulis pewawancara. Jawaban itu juga benar, sebab itulah ia bertahan saat ditanya “kenapa risiko nasabah?”."
       }
      }
     ],
     "scenario": {
      "icon": "chat",
      "title": {
       "en": "In focus: “Kalau diterima dua-duanya, pilih mana?”",
       "id": "Sorotan: “Kalau diterima dua-duanya, pilih mana?”"
      },
      "body": [
       {
        "en": "In Arunika’s user interview, the supply-chain manager asks: “Kalau kamu diterima di sini dan di Bank Sinar sekaligus, kamu pilih mana?” It is a stress question wearing a motivational coat. Nadia recognises the hidden concern — will she accept, or is Arunika her backup — and answers honestly without overcommitting: she names what draws her to Arunika specifically (the supply-chain rotation and the plant in Semarang, where she interned in bank operations), says the final decision will depend on the role details in each offer, and closes: “tapi posisi ini memang yang paling sesuai dengan minat saya di operasional rantai pasok.”",
        "id": "Di wawancara user Arunika, manajer rantai pasok bertanya: “Kalau kamu diterima di sini dan di Bank Sinar sekaligus, kamu pilih mana?” Ini pertanyaan tekanan berjubah motivasional. Nadia mengenali kekhawatiran tersembunyinya — apakah ia akan menerima, atau Arunika hanya cadangan — dan menjawab jujur tanpa berjanji berlebihan: ia menyebut yang menariknya ke Arunika secara spesifik (rotasi rantai pasok dan pabrik di Semarang, tempat ia magang di operasional bank), mengatakan keputusan akhir bergantung pada detail peran di tiap tawaran, dan menutup: “tapi posisi ini memang yang paling sesuai dengan minat saya di operasional rantai pasok.”"
       },
       {
        "en": "What she did not do matters as much: she did not claim Arunika was her only application (the manager knows better), did not disparage the bank, and did not promise to accept an offer she has not seen. Pause, acknowledge, evidence, forward — and the truth, which is the only answer that is still true in the final panel.",
        "id": "Yang tidak ia lakukan sama pentingnya: ia tidak mengklaim Arunika satu-satunya lamarannya (manajer itu lebih tahu), tidak merendahkan bank, dan tidak berjanji menerima tawaran yang belum ia lihat. Jeda, akui, bukti, ke depan — dan kebenaran, satu-satunya jawaban yang masih benar di panel akhir."
       }
      ]
     },
     "steps": [
      {
       "h": {
        "en": "Drill 1 · Type-spotting speed drill",
        "id": "Latihan 1 · Latihan cepat mengenali tipe"
       },
       "body": {
        "en": "Classify each in under eight seconds: (1) “Describe a time you persuaded someone more senior than you.” (2) “A vendor offers you a gift after you approve their invoice. What do you do?” (3) “What do you know about how we make money?” (4) “Which part of this role do you expect to find hardest?” (5) “Why can a profitable company run out of cash?” (6) “A branch’s new-account openings dropped 30% in three months. How would you investigate?” (7) “I’m not convinced by that example. Give me a better one.” (8) “Tell me about the most repetitive task you’ve done. How did you keep the quality up?” (9) “What would make you leave a job in your first year?” (10) “Estimate how many motorbike taxis operate in a city of 2 million people.”",
        "id": "Golongkan masing-masing dalam kurang dari delapan detik: (1) “Ceritakan saat Anda meyakinkan orang yang lebih senior.” (2) “Vendor memberi hadiah setelah Anda menyetujui tagihannya. Apa yang Anda lakukan?” (3) “Apa yang Anda tahu tentang cara kami menghasilkan uang?” (4) “Bagian mana dari peran ini yang menurut Anda paling sulit?” (5) “Mengapa perusahaan yang untung bisa kehabisan kas?” (6) “Pembukaan rekening baru di satu cabang turun 30% dalam tiga bulan. Bagaimana Anda menyelidikinya?” (7) “Saya tidak yakin dengan contoh itu. Beri saya yang lebih baik.” (8) “Ceritakan tugas paling berulang yang pernah Anda kerjakan. Bagaimana Anda menjaga kualitasnya?” (9) “Apa yang akan membuat Anda meninggalkan pekerjaan di tahun pertama?” (10) “Perkirakan berapa ojek yang beroperasi di kota berpenduduk 2 juta.”"
       },
       "debrief": {
        "en": "(1) behavioural; (2) situational — integrity (gratifikasi), principle first, then a real example if you have one; (3) motivational — research; (4) self-assessment; (5) technical; (6) case; (7) stress; (8) behavioural — detail and reliability; (9) motivational — the hidden concern is stability; (10) case — estimation. If you scored eight or more, the routing is automatic; if fewer, the simulator’s mixed-type set (this lesson’s tryit) names the type after each answer until it is.",
        "id": "(1) perilaku; (2) situasional — integritas (gratifikasi), prinsip dulu, lalu contoh nyata jika ada; (3) motivasional — riset; (4) penilaian diri; (5) teknis; (6) kasus; (7) tekanan; (8) perilaku — ketelitian dan keandalan; (9) motivasional — kekhawatiran tersembunyinya stabilitas; (10) kasus — estimasi. Jika kamu benar delapan atau lebih, pengarahannya sudah otomatis; jika kurang, set tipe campuran simulator (tryit pelajaran ini) menyebutkan tipe setelah tiap jawaban sampai otomatis."
       }
      },
      {
       "h": {
        "en": "Drill 2 · Hidden-concern rewrite",
        "id": "Latihan 2 · Tulis ulang kekhawatiran tersembunyi"
       },
       "body": {
        "en": "For three questions on your own target list — the ones you least want to be asked — write the hidden concern in one line, then one sentence that addresses it truthfully. Use the table’s right column as the standard.",
        "id": "Untuk tiga pertanyaan di daftar sasaranmu sendiri — yang paling tidak ingin kamu tanyakan — tulis kekhawatiran tersembunyinya dalam satu baris, lalu satu kalimat yang menanganinya dengan jujur. Pakai kolom kanan tabel sebagai standar."
       },
       "debrief": {
        "en": "Nadia’s three: “Kenapa IPK 3,38 dan bukan di atas 3,5?” → concern: capability → “Semester tiga dan empat saya mengambil peran bendahara penuh waktu; nilai turun, dan itu pilihan saya — tetapi audit fakultas tahun itu nol temuan, dan semester berikutnya IPK saya naik lagi.” “Sudah melamar ke mana saja?” → concern: seriousness and acceptance → “Empat proses, semuanya operasional atau management trainee — arahnya sama.” “Bersedia ditempatkan di luar Jawa?” → concern: eligibility and resignation → a truthful yes with a reason she can mean, or a truthful no. The test of a good rewrite: it would still be true if the interviewer checked.",
        "id": "Tiga milik Nadia: “Kenapa IPK 3,38 dan bukan di atas 3,5?” → kekhawatiran: kemampuan → “Semester tiga dan empat saya mengambil peran bendahara penuh waktu; nilai turun, dan itu pilihan saya — tetapi audit fakultas tahun itu nol temuan, dan semester berikutnya IPK saya naik lagi.” “Sudah melamar ke mana saja?” → kekhawatiran: keseriusan dan penerimaan → “Empat proses, semuanya operasional atau management trainee — arahnya sama.” “Bersedia ditempatkan di luar Jawa?” → kekhawatiran: kelayakan dan pengunduran diri → ya yang jujur dengan alasan yang benar-benar ia maksud, atau tidak yang jujur. Ujian tulisan ulang yang baik: tetap benar jika pewawancara memeriksanya."
       }
      },
      {
       "h": {
        "en": "Drill 3 · Silence drill",
        "id": "Latihan 3 · Latihan keheningan"
       },
       "body": {
        "en": "Record one full answer to any behavioural question, then stay silent for six seconds after your last sentence. Count the words you added before the six seconds were up. Repeat until the count is zero.",
        "id": "Rekam satu jawaban lengkap untuk pertanyaan perilaku apa pun, lalu diam enam detik setelah kalimat terakhirmu. Hitung kata yang kamu tambahkan sebelum enam detik habis. Ulangi sampai hitungannya nol."
       },
       "debrief": {
        "en": "Most learners add ten to forty words on the first attempt — and those words are almost always a weaker restatement, a hedge (“…kalau tidak salah”), or a “we”. The measured target is zero words; the permitted alternative is one sentence handing the turn back. The simulator’s silence mode runs this automatically with a six-second interviewer pause.",
        "id": "Sebagian besar pembelajar menambah sepuluh hingga empat puluh kata pada percobaan pertama — dan kata-kata itu hampir selalu pernyataan ulang yang lebih lemah, pagar (“…kalau tidak salah”), atau “kami”. Target terukurnya nol kata; alternatif yang diizinkan adalah satu kalimat mengembalikan giliran. Mode keheningan simulator menjalankan ini otomatis dengan jeda pewawancara enam detik."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Answering a behavioural question hypothetically",
         "id": "Menjawab pertanyaan perilaku secara hipotetis"
        },
        "fix": {
         "en": "“Tell me about a time” wants the past tense and a real situation.",
         "id": "“Ceritakan saat” menginginkan bentuk lampau dan situasi nyata."
        }
       },
       {
        "h": {
         "en": "Answering a motivational question with a STAR story that never says why <i>this</i> company",
         "id": "Menjawab pertanyaan motivasional dengan cerita STAR yang tidak pernah menyebut mengapa perusahaan <i>ini</i>"
        },
        "fix": {
         "en": "REC — one researched fact, one experience, one contribution (Module 4).",
         "id": "REC — satu fakta riset, satu pengalaman, satu kontribusi (Modul 4)."
        }
       },
       {
        "h": {
         "en": "Rambling to fill silence",
         "id": "Mengoceh untuk mengisi keheningan"
        },
        "fix": {
         "en": "Wait, or hand the turn back in one sentence.",
         "id": "Tunggu, atau kembalikan giliran dalam satu kalimat."
        }
       },
       {
        "h": {
         "en": "Bluffing on technical questions",
         "id": "Menggertak pada pertanyaan teknis"
        },
        "fix": {
         "en": "What you know → reasoning aloud → how you would find out.",
         "id": "Yang kamu tahu → bernalar dengan suara → cara kamu mencari tahu."
        }
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "Behavioural question",
        "id": "Pertanyaan perilaku"
       },
       "def": {
        "en": "Asks for a real past situation as evidence of how you will behave; answered with STAR+L.",
        "id": "Meminta situasi nyata masa lalu sebagai bukti caramu akan berperilaku; dijawab dengan STAR+L."
       }
      },
      {
       "term": {
        "en": "Situational question",
        "id": "Pertanyaan situasional"
       },
       "def": {
        "en": "A hypothetical that tests judgement and values; answered with a principle, steps and a real example.",
        "id": "Hipotetis yang menguji penilaian dan nilai; dijawab dengan prinsip, langkah, dan contoh nyata."
       }
      },
      {
       "term": {
        "en": "Hidden concern",
        "id": "Kekhawatiran tersembunyi"
       },
       "def": {
        "en": "The employer worry behind a stated question — will you stay, is this random, is there a disqualifier.",
        "id": "Kekhawatiran perusahaan di balik pertanyaan yang dinyatakan — apakah kamu bertahan, apakah ini acak, adakah penggugur."
       }
      },
      {
       "term": {
        "en": "Stress interview",
        "id": "Wawancara tekanan"
       },
       "def": {
        "en": "Deliberate pressure — silence, rapid fire, scepticism — used to test composure, not content.",
        "id": "Tekanan yang disengaja — keheningan, beruntun, skeptisisme — dipakai untuk menguji ketenangan, bukan isi."
       }
      },
      {
       "term": {
        "en": "REC",
        "id": "REC"
       },
       "def": {
        "en": "Research, Experience, Contribution — the shape of a motivational answer (Module 4; after Dalton).",
        "id": "Riset, Pengalaman, Kontribusi — bentuk jawaban motivasional (Modul 4; mengikuti Dalton)."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "“Apa yang akan Anda lakukan jika atasan meminta sesuatu yang menurut Anda salah?” is best answered with…",
        "id": "“Apa yang akan Anda lakukan jika atasan meminta sesuatu yang menurut Anda salah?” paling baik dijawab dengan…"
       },
       "options": [
        {
         "en": "A STAR story only",
         "id": "Hanya cerita STAR"
        },
        {
         "en": "Principle and steps, backed by a real example if you have one",
         "id": "Prinsip dan langkah, didukung contoh nyata jika ada"
        },
        {
         "en": "“Saya akan ikuti atasan”",
         "id": "“Saya akan ikuti atasan”"
        },
        {
         "en": "Refusing to answer",
         "id": "Menolak menjawab"
        }
       ],
       "correct": 1,
       "why": {
        "en": "A situational question — show judgement, then evidence.",
        "id": "Pertanyaan situasional — tunjukkan penilaian, lalu bukti."
       }
      },
      {
       "q": {
        "en": "The hidden concern behind “Sudah melamar ke mana saja?” is most likely…",
        "id": "Kekhawatiran tersembunyi di balik “Sudah melamar ke mana saja?” paling mungkin…"
       },
       "options": [
        {
         "en": "Curiosity",
         "id": "Rasa ingin tahu"
        },
        {
         "en": "Your direction and likelihood of accepting",
         "id": "Arahmu dan kemungkinan menerima"
        },
        {
         "en": "Checking competitors",
         "id": "Memeriksa pesaing"
        },
        {
         "en": "Testing memory",
         "id": "Menguji ingatan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Seriousness, market value and whether you will accept — answer with a consistent direction, honestly but not exhaustively.",
        "id": "Keseriusan, nilai pasar, dan apakah kamu menerima — jawab dengan arah yang konsisten, jujur tetapi tidak menyeluruh."
       }
      },
      {
       "q": {
        "en": "After your full answer, the interviewer says nothing for five seconds. Best move:",
        "id": "Setelah jawaban lengkapmu, pewawancara diam lima detik. Langkah terbaik:"
       },
       "options": [
        {
         "en": "Add more detail",
         "id": "Tambah detail"
        },
        {
         "en": "Apologise",
         "id": "Minta maaf"
        },
        {
         "en": "Wait, or briefly offer to go deeper on any part",
         "id": "Tunggu, atau tawarkan singkat untuk memperdalam bagian mana pun"
        },
        {
         "en": "Change the subject",
         "id": "Ganti topik"
        }
       ],
       "correct": 2,
       "why": {
        "en": "Silence tests whether you over-talk; the extra words are where over-claims creep in.",
        "id": "Keheningan menguji apakah kamu bicara berlebihan; kata tambahan itulah tempat klaim berlebihan menyelinap."
       }
      }
     ],
     "tryit": {
      "qid": "beh_deadline_01",
      "set": [
       "beh_deadline_01",
       "sit_sop_conflict",
       "mot_why_programme",
       "self_hardest_part",
       "stress_not_convinced"
      ],
      "persona": "hr",
      "profile": "mixed",
      "returnTo": 1,
      "label": {
       "en": "Mixed-type set: five questions, one per type",
       "id": "Set tipe campuran: lima pertanyaan, satu per tipe"
      },
      "desc": {
       "en": "Behavioural, situational, motivational, self-assessment and stress — in one short session with the HR persona. After each answer the debrief names the type and whether your answer matched its shape.",
       "id": "Perilaku, situasional, motivasional, penilaian diri, dan tekanan — dalam satu sesi singkat dengan persona HR. Setelah tiap jawaban debrief menyebut tipenya dan apakah jawabanmu cocok dengan bentuknya."
      }
     },
     "takeaways": [
      {
       "en": "Identify the type, then use its answer shape.",
       "id": "Kenali tipenya, lalu pakai bentuk jawabannya."
      },
      {
       "en": "Answer the hidden concern, not just the words.",
       "id": "Jawab kekhawatiran tersembunyinya, bukan hanya kata-katanya."
      },
      {
       "en": "Composure under pressure is itself the test — pause, acknowledge, evidence, forward.",
       "id": "Ketenangan di bawah tekanan adalah ujiannya sendiri — jeda, akui, bukti, ke depan."
      }
     ],
     "resources": {
      "title": {
       "en": "Sources and the type card",
       "id": "Sumber dan kartu tipe"
      },
      "lead": {
       "en": "Four sources, and the card to read before every session.",
       "id": "Empat sumber, dan kartu untuk dibaca sebelum setiap sesi."
      },
      "items": [
       {
        "kind": "guide",
        "title": {
         "en": "Reading list · Lesson 1.3",
         "id": "Daftar bacaan · Pelajaran 1.3"
        },
        "desc": {
         "en": "The hidden-concern table is original to The Rope; the classification follows Kador.",
         "id": "Tabel kekhawatiran tersembunyi asli milik The Rope; klasifikasinya mengikuti Kador."
        },
        "body": [
         {
          "en": "J. Kador, <i>The Manager’s Book of Questions</i> — question types from the interviewer’s side.",
          "id": "J. Kador, <i>The Manager’s Book of Questions</i> — tipe pertanyaan dari sisi pewawancara."
         },
         {
          "en": "R. Ryan, <i>60 Seconds & You’re Hired!</i> — employer concerns behind common questions.",
          "id": "R. Ryan, <i>60 Seconds & You’re Hired!</i> — kekhawatiran perusahaan di balik pertanyaan umum."
         },
         {
          "en": "D. Georgevich, <i>The Top 10 Job Interview Questions</i> — common-question do’s and don’ts (light source).",
          "id": "D. Georgevich, <i>The Top 10 Job Interview Questions</i> — anjuran dan larangan pertanyaan umum (sumber ringan)."
         },
         {
          "en": "E. Pellett, <i>Cracking the Code to a Successful Interview</i> — stress techniques.",
          "id": "E. Pellett, <i>Cracking the Code to a Successful Interview</i> — teknik tekanan."
         }
        ]
       },
       {
        "kind": "checklist",
        "title": {
         "en": "The type card",
         "id": "Kartu tipe"
        },
        "desc": {
         "en": "Seven lines; two seconds each.",
         "id": "Tujuh baris; dua detik masing-masing."
        },
        "body": [
         {
          "en": "Past? → STAR+L. Hypothetical? → principle, steps, real example.",
          "id": "Masa lalu? → STAR+L. Hipotetis? → prinsip, langkah, contoh nyata."
         },
         {
          "en": "Why us? → REC. About me? → claim + evidence (weakness: real → system → progress).",
          "id": "Mengapa kami? → REC. Tentang saya? → klaim + bukti (kelemahan: nyata → sistem → kemajuan)."
         },
         {
          "en": "Knowledge? → direct, reasoning, example; say what I don’t know.",
          "id": "Pengetahuan? → langsung, alasan, contoh; katakan yang tidak saya tahu."
         },
         {
          "en": "Problem? → clarify, structure, analyse, answer, sanity check.",
          "id": "Masalah? → klarifikasi, struktur, analisis, jawab, uji kewajaran."
         },
         {
          "en": "Pressure? → pause, acknowledge, evidence, forward — then stop.",
          "id": "Tekanan? → jeda, akui, bukti, ke depan — lalu berhenti."
         }
        ]
       }
      ]
     }
    },
    {
     "n": "1.4",
     "kind": "reading",
     "placeholder": false,
     "dur": {
      "en": "35 min",
      "id": "35 mnt"
     },
     "title": {
      "en": "Indonesian Selection Processes, Stage by Stage",
      "id": "Proses Seleksi di Indonesia, Tahap demi Tahap"
     },
     "overview": {
      "en": "A fresh graduate applying to a bank’s ODP, a BUMN, an FMCG management-trainee programme and a startup will face four very different processes. Each stage tests something different and is run by different people. Knowing the map lets you prepare the right thing at the right time — and the Kit item this lesson produces, your format map, is the first page of your Interview Kit.",
      "id": "Lulusan baru yang melamar ODP bank, BUMN, program management trainee FMCG, dan startup akan menghadapi empat proses yang sangat berbeda. Setiap tahap menguji hal berbeda dan dijalankan oleh orang berbeda. Mengetahui petanya membuatmu menyiapkan hal yang tepat pada waktu yang tepat — dan butir Perangkat yang dihasilkan pelajaran ini, peta formatmu, adalah halaman pertama Perangkat Wawancaramu."
     },
     "objectives": [
      {
       "en": "Sequence the typical stages for five Indonesian tracks.",
       "id": "Mengurutkan tahap yang lazim untuk lima jalur Indonesia."
      },
      {
       "en": "State what each stage tests and who conducts it.",
       "id": "Menyatakan apa yang diuji tiap tahap dan siapa yang menjalankannya."
      },
      {
       "en": "Decode an interview invitation for format, duration, interviewer and implied test.",
       "id": "Menguraikan undangan wawancara untuk format, durasi, pewawancara, dan ujian tersirat."
      },
      {
       "en": "Build a format map for your Top 3 targets.",
       "id": "Membangun peta format untuk 3 sasaran teratasmu."
      }
     ],
     "readFirst": {
      "kicker": {
       "en": "Read first · 3 slides",
       "id": "Baca dulu · 3 slide"
      },
      "title": {
       "en": "Map the process before you prepare",
       "id": "Petakan prosesnya sebelum bersiap"
      },
      "intro": {
       "en": "Patterns only — every employer differs, and stage names change by year. Confirm from the posting, the recruiter or recent candidates.",
       "id": "Pola saja — setiap perusahaan berbeda, dan nama tahap berubah tiap tahun. Konfirmasi dari lowongan, rekruter, atau kandidat terbaru."
      },
      "slides": [
       {
        "h": {
         "en": "Five tracks, five sequences",
         "id": "Lima jalur, lima urutan"
        },
        "points": [
         {
          "en": "Bank ODP · BUMN · FMCG/multinational MT · startup · SME. Each orders its stages differently and weights them differently.",
          "id": "ODP bank · BUMN · MT FMCG/multinasional · startup · UKM. Masing-masing mengurutkan dan membobot tahapnya berbeda."
         },
         {
          "en": "The user interview usually decides.",
          "id": "Wawancara user biasanya menentukan."
         }
        ]
       },
       {
        "h": {
         "en": "Who runs each stage",
         "id": "Siapa yang menjalankan tiap tahap"
        },
        "points": [
         {
          "en": "HR screens eligibility; the psychologist checks consistency; the user tests capability; the panel tests values and commitment.",
          "id": "HR menyaring kelayakan; psikolog memeriksa konsistensi; user menguji kemampuan; panel menguji nilai dan komitmen."
         },
         {
          "en": "Prepare for the person, not just the question.",
          "id": "Bersiaplah untuk orangnya, bukan hanya pertanyaannya."
         }
        ]
       },
       {
        "h": {
         "en": "Formats you must be ready for",
         "id": "Format yang harus kamu siapkan"
        },
        "points": [
         {
          "en": "In person · video call · one-way recorded video · phone or WhatsApp · panel · group discussion · meal · assessment-centre day.",
          "id": "Tatap muka · panggilan video · video rekaman satu arah · telepon atau WhatsApp · panel · diskusi kelompok · makan · hari assessment center."
         },
         {
          "en": "Module 9 lets you practise every one of them in the simulator.",
          "id": "Modul 9 membuatmu bisa berlatih setiap formatnya di simulator."
         }
        ]
       }
      ]
     },
     "sections": [
      {
       "icon": "compass",
       "img": "../../assets/bg/gauntlet/gate-02-screening.jpg",
       "imgPos": "50% 40%",
       "h": {
        "en": "Typical process patterns",
        "id": "Pola proses yang lazim"
       },
       "body": {
        "en": "Patterns only; every employer differs — confirm from the posting, the recruiter or recent candidates <span class=\"ev ev-verify\">Verify each against current public programme pages before publishing</span>. The value of the table is not the exact sequence but the habit of asking, for each target, “which of these am I facing, and which stage have I never practised?”",
        "id": "Pola saja; setiap perusahaan berbeda — konfirmasi dari lowongan, rekruter, atau kandidat terbaru <span class=\"ev ev-verify\">Verifikasi masing-masing terhadap laman program publik terkini sebelum diterbitkan</span>. Nilai tabel ini bukan urutan persisnya tetapi kebiasaan bertanya, untuk tiap sasaran, “yang mana yang saya hadapi, dan tahap mana yang belum pernah saya latih?”"
       },
       "table": {
        "cols": [
         {
          "en": "Track",
          "id": "Jalur"
         },
         {
          "en": "Typical sequence",
          "id": "Urutan lazim"
         },
         {
          "en": "Notes",
          "id": "Catatan"
         }
        ],
        "rows": [
         [
          {
           "en": "<b>Bank ODP / officer development</b>",
           "id": "<b>ODP bank / officer development</b>"
          },
          {
           "en": "Online application → online test (cognitive, English) → psychological test (<i>psikotes</i>) and/or LGD → HR interview → user interview → sometimes a panel → medical check-up → offer",
           "id": "Lamaran daring → tes daring (kognitif, Inggris) → tes psikologi (<i>psikotes</i>) dan/atau LGD → wawancara HR → wawancara user → kadang panel → pemeriksaan kesehatan → tawaran"
          },
          {
           "en": "Service bond (<i>ikatan dinas</i>) common; placement anywhere",
           "id": "Ikatan dinas umum; penempatan di mana saja"
          }
         ],
         [
          {
           "en": "<b>BUMN (joint recruitment and individual)</b>",
           "id": "<b>BUMN (rekrutmen bersama dan mandiri)</b>"
          },
          {
           "en": "Administrative selection → core-values/AKHLAK test, cognitive test, English → LGD/assessment centre → interview (HR, user, sometimes with core-values focus) → medical → offer",
           "id": "Seleksi administrasi → tes nilai inti/AKHLAK, tes kognitif, Inggris → LGD/assessment center → wawancara (HR, user, kadang berfokus nilai inti) → medis → tawaran"
          },
          {
           "en": "Stages and names differ by year; check the official portal",
           "id": "Tahap dan nama berbeda tiap tahun; periksa portal resmi"
          }
         ],
         [
          {
           "en": "<b>FMCG / multinational MT</b>",
           "id": "<b>MT FMCG / multinasional</b>"
          },
          {
           "en": "Online application → online tests (often gamified or one-way video) → assessment centre (LGD, case, presentation) → user interview → final panel with senior leaders",
           "id": "Lamaran daring → tes daring (sering gamifikasi atau video satu arah) → assessment center (LGD, kasus, presentasi) → wawancara user → panel akhir dengan pemimpin senior"
          },
          {
           "en": "Case and group exercises weigh heavily",
           "id": "Latihan kasus dan kelompok berbobot besar"
          }
         ],
         [
          {
           "en": "<b>Startup / scale-up</b>",
           "id": "<b>Startup / scale-up</b>"
          },
          {
           "en": "Recruiter screen (often WhatsApp or call) → take-home task or case → hiring-manager interview → founder/culture interview → offer",
           "id": "Seleksi rekruter (sering WhatsApp atau telepon) → tugas take-home atau kasus → wawancara hiring manager → wawancara pendiri/budaya → tawaran"
          },
          {
           "en": "Faster; less structured; practical tasks",
           "id": "Lebih cepat; kurang terstruktur; tugas praktis"
          }
         ],
         [
          {
           "en": "<b>SME / family business</b>",
           "id": "<b>UKM / bisnis keluarga</b>"
          },
          {
           "en": "Owner or manager interview (sometimes informal, over coffee or lunch) → trial day or week → offer",
           "id": "Wawancara pemilik atau manajer (kadang informal, sambil kopi atau makan siang) → hari atau minggu percobaan → tawaran"
          },
          {
           "en": "Trust, attitude, reliability; see Lesson 5.4",
           "id": "Kepercayaan, sikap, keandalan; lihat Pelajaran 5.4"
          }
         ]
        ]
       }
      },
      {
       "icon": "users",
       "h": {
        "en": "Who runs each stage and what they want",
        "id": "Siapa yang menjalankan tiap tahap dan apa yang mereka inginkan"
       },
       "body": {
        "en": "The same question sounds different from different mouths because each stage owner is reducing a different uncertainty. Preparing “for the interview” is too coarse; prepare for the person.",
        "id": "Pertanyaan yang sama terdengar berbeda dari mulut berbeda karena tiap pemilik tahap mengurangi ketidakpastian yang berbeda. Bersiap “untuk wawancara” terlalu kasar; bersiaplah untuk orangnya."
       },
       "bullets": [
        {
         "en": "<b>HR / recruiter screen</b> — eligibility (degree, IPK, placement, salary, start date), communication, basic motivation. Fifteen to twenty minutes; often by phone or WhatsApp; answers should be direct and short.",
         "id": "<b>Seleksi HR / rekruter</b> — kelayakan (gelar, IPK, penempatan, gaji, tanggal mulai), komunikasi, motivasi dasar. Lima belas hingga dua puluh menit; sering lewat telepon atau WhatsApp; jawaban harus langsung dan singkat."
        },
        {
         "en": "<b>Psychologist interview</b> (inside <i>psikotes</i>) — consistency with your test results, emotional stability, self-awareness. Answer honestly and consistently; do not perform an ideal personality, because the tests you just sat will contradict it.",
         "id": "<b>Wawancara psikolog</b> (di dalam <i>psikotes</i>) — konsistensi dengan hasil tesmu, kestabilan emosi, kesadaran diri. Jawab jujur dan konsisten; jangan memerankan kepribadian ideal, karena tes yang baru kamu jalani akan membantahnya."
        },
        {
         "en": "<b>User interview</b> — your future manager. Capability for the actual work, technical depth, and “can I work with this person?” Usually the decisive round, and the one with the deepest probing (Module 6).",
         "id": "<b>Wawancara user</b> — calon atasanmu. Kemampuan untuk pekerjaan sebenarnya, kedalaman teknis, dan “bisakah saya bekerja dengan orang ini?” Biasanya ronde yang menentukan, dan yang galiannya paling dalam (Modul 6)."
        },
        {
         "en": "<b>Panel / final</b> — senior leaders. Values, commitment, long-term potential, presence. Often shorter than you expect; answers should be shorter too (Module 8).",
         "id": "<b>Panel / final</b> — pemimpin senior. Nilai, komitmen, potensi jangka panjang, kehadiran. Sering lebih singkat dari dugaanmu; jawaban juga harus lebih singkat (Modul 8)."
        }
       ],
       "table": {
        "cols": [
         {
          "en": "Stage",
          "id": "Tahap"
         },
         {
          "en": "Owner",
          "id": "Pemilik"
         },
         {
          "en": "Uncertainty it reduces",
          "id": "Ketidakpastian yang dikurangi"
         },
         {
          "en": "Prepare",
          "id": "Siapkan"
         }
        ],
        "rows": [
         [
          {
           "en": "Screen",
           "id": "Seleksi awal"
          },
          {
           "en": "Recruiter / HR",
           "id": "Rekruter / HR"
          },
          {
           "en": "Eligibility, cost, communication",
           "id": "Kelayakan, biaya, komunikasi"
          },
          {
           "en": "Truthful one-line answers on placement, salary range, start date (Module 5)",
           "id": "Jawaban satu baris yang jujur tentang penempatan, rentang gaji, tanggal mulai (Modul 5)"
          }
         ],
         [
          {
           "en": "Psikotes + psychologist",
           "id": "Psikotes + psikolog"
          },
          {
           "en": "Psychologist",
           "id": "Psikolog"
          },
          {
           "en": "Stability, consistency",
           "id": "Kestabilan, konsistensi"
          },
          {
           "en": "Honest self-description; the same person in every test",
           "id": "Deskripsi diri yang jujur; orang yang sama di setiap tes"
          }
         ],
         [
          {
           "en": "LGD / assessment centre",
           "id": "LGD / assessment center"
          },
          {
           "en": "Assessors",
           "id": "Asesor"
          },
          {
           "en": "Working with others under observation",
           "id": "Bekerja dengan orang lain di bawah pengamatan"
          },
          {
           "en": "Role plan and contribution moves (Module 7)",
           "id": "Rencana peran dan langkah kontribusi (Modul 7)"
          }
         ],
         [
          {
           "en": "User",
           "id": "User"
          },
          {
           "en": "Future manager",
           "id": "Calon atasan"
          },
          {
           "en": "Capability, depth, workability",
           "id": "Kemampuan, kedalaman, kecocokan kerja"
          },
          {
           "en": "Core 10 stories, technical five, case protocol (Modules 2, 6)",
           "id": "Cerita Core 10, lima teknis, protokol kasus (Modul 2, 6)"
          }
         ],
         [
          {
           "en": "Panel / final",
           "id": "Panel / final"
          },
          {
           "en": "Senior leaders",
           "id": "Pemimpin senior"
          },
          {
           "en": "Values, commitment, potential",
           "id": "Nilai, komitmen, potensi"
          },
          {
           "en": "Short answers, question ladder, respectful close (Module 8)",
           "id": "Jawaban singkat, tangga pertanyaan, penutup yang hormat (Modul 8)"
          }
         ]
        ]
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "Formats you must prepare for",
        "id": "Format yang harus kamu siapkan"
       },
       "body": {
        "en": "In person · video call (Zoom, Teams, Meet) · <b>one-way recorded video</b> (you record answers to on-screen prompts with a timer, usually one retake or none) · phone or WhatsApp call · panel of three to five · group discussion · meal interview · assessment-centre day. Each has specific requirements covered in the relevant module, and Module 9 lets you practise every one in the simulator. Two are new to most graduates and decide more than they expect: the one-way video, where nobody nods and the timer is the interviewer (Lesson 4.5 is built around it), and the group discussion, where the assessors are scoring how you treat the other candidates (Module 7).",
        "id": "Tatap muka · panggilan video (Zoom, Teams, Meet) · <b>video rekaman satu arah</b> (kamu merekam jawaban atas petunjuk di layar dengan pengatur waktu, biasanya satu pengulangan atau tidak sama sekali) · telepon atau WhatsApp · panel tiga hingga lima orang · diskusi kelompok · wawancara sambil makan · hari assessment center. Masing-masing punya persyaratan khusus yang dibahas di modul terkait, dan Modul 9 membuatmu bisa berlatih setiap formatnya di simulator. Dua di antaranya baru bagi sebagian besar lulusan dan lebih menentukan dari dugaan mereka: video satu arah, tempat tidak ada yang mengangguk dan pengatur waktu adalah pewawancaranya (Pelajaran 4.5 dibangun di sekitarnya), dan diskusi kelompok, tempat asesor menilai caramu memperlakukan kandidat lain (Modul 7)."
       }
      },
      {
       "icon": "mail",
       "h": {
        "en": "Reading the invitation",
        "id": "Membaca undangan"
       },
       "body": {
        "en": "The invitation email tells you a lot: who is interviewing (look them up on LinkedIn — role, tenure, what they post about), the format, the duration (a 20-minute slot is a screen; 60 minutes or more suggests competency depth or a case), whether to bring anything (a portfolio, ID, a printed CV — and, for BUMN and banks, original documents). If it is missing, it is appropriate to ask once, politely: “Boleh saya tahu format dan perkiraan durasi wawancaranya, serta dengan siapa saya akan bertemu?” The reply is itself data about the organisation. Log every decoded invitation in the tracker; over four processes, the pattern of what each employer tells you unasked says something about how they treat people.",
        "id": "Email undangan memberitahumu banyak: siapa yang mewawancarai (cari di LinkedIn — peran, lama bekerja, apa yang mereka unggah), formatnya, durasinya (slot 20 menit adalah seleksi awal; 60 menit atau lebih menyiratkan kedalaman kompetensi atau kasus), apakah perlu membawa sesuatu (portofolio, identitas, CV cetak — dan, untuk BUMN dan bank, dokumen asli). Jika tidak ada, wajar untuk bertanya sekali, dengan sopan: “Boleh saya tahu format dan perkiraan durasi wawancaranya, serta dengan siapa saya akan bertemu?” Balasannya sendiri adalah data tentang organisasi. Catat setiap undangan yang diurai di pelacak; dalam empat proses, pola apa yang diberitahukan tiap perusahaan tanpa diminta mengatakan sesuatu tentang cara mereka memperlakukan orang."
       },
       "table": {
        "cols": [
         {
          "en": "Clue in the invitation",
          "id": "Petunjuk dalam undangan"
         },
         {
          "en": "What it implies",
          "id": "Yang tersirat"
         },
         {
          "en": "Prepare",
          "id": "Siapkan"
         }
        ],
        "rows": [
         [
          {
           "en": "20-minute slot, “HR”",
           "id": "Slot 20 menit, “HR”"
          },
          {
           "en": "A screen: eligibility and communication",
           "id": "Seleksi awal: kelayakan dan komunikasi"
          },
          {
           "en": "Placement, salary, start-date answers; 60-second opening",
           "id": "Jawaban penempatan, gaji, tanggal mulai; pembuka 60 detik"
          }
         ],
         [
          {
           "en": "“Interview with Head of Supply Chain”, 60 min",
           "id": "“Wawancara dengan Head of Supply Chain”, 60 mnt"
          },
          {
           "en": "User round: depth and probing",
           "id": "Ronde user: kedalaman dan galian"
          },
          {
           "en": "Core 10, technical five, questions for a manager",
           "id": "Core 10, lima teknis, pertanyaan untuk manajer"
          }
         ],
         [
          {
           "en": "“Please prepare a 5-minute presentation”",
           "id": "“Mohon siapkan presentasi 5 menit”"
          },
          {
           "en": "Assessment-centre element",
           "id": "Elemen assessment center"
          },
          {
           "en": "Structure, timing, one exhibit (Lesson 7.3)",
           "id": "Struktur, waktu, satu peraga (Pelajaran 7.3)"
          }
         ],
         [
          {
           "en": "“Record your answers by Friday; 5 questions, 90 s each”",
           "id": "“Rekam jawaban Anda paling lambat Jumat; 5 pertanyaan, 90 dtk masing-masing”"
          },
          {
           "en": "One-way video",
           "id": "Video satu arah"
          },
          {
           "en": "Camera, light, sound; timed rehearsal (Lesson 4.5)",
           "id": "Kamera, cahaya, suara; latihan berwaktu (Pelajaran 4.5)"
          }
         ],
         [
          {
           "en": "“Ngobrol santai sama Bu Ratna, makan siang”",
           "id": "“Ngobrol santai sama Bu Ratna, makan siang”"
          },
          {
           "en": "SME owner interview: trust and attitude",
           "id": "Wawancara pemilik UKM: kepercayaan dan sikap"
          },
          {
           "en": "Manners, curiosity, the same honesty as a formal room (Lesson 5.4)",
           "id": "Tata krama, rasa ingin tahu, kejujuran yang sama dengan ruangan formal (Pelajaran 5.4)"
          }
         ]
        ]
       }
      }
     ],
     "diagram": {
      "type": "timeline",
      "exhibit": {
       "en": "Exhibit 1: Five tracks, one swimlane",
       "id": "Peraga 1: Lima jalur, satu lintasan"
      },
      "title": {
       "en": "What each stage is testing — eligibility, capability, fit or values — across the tracks",
       "id": "Apa yang diuji tiap tahap — kelayakan, kemampuan, kecocokan, atau nilai — lintas jalur"
      },
      "items": [
       {
        "icon": "mail",
        "h": {
         "en": "Apply and screen",
         "id": "Lamar dan seleksi awal"
        },
        "sub": {
         "en": "Eligibility. All tracks: application; banks and BUMN add online tests; startups screen by WhatsApp.",
         "id": "Kelayakan. Semua jalur: lamaran; bank dan BUMN menambah tes daring; startup menyaring lewat WhatsApp."
        }
       },
       {
        "icon": "chart",
        "h": {
         "en": "Tests and psikotes",
         "id": "Tes dan psikotes"
        },
        "sub": {
         "en": "Capability and consistency. Banks, BUMN, MT programmes; the psychologist interview sits here.",
         "id": "Kemampuan dan konsistensi. Bank, BUMN, program MT; wawancara psikolog berada di sini."
        }
       },
       {
        "icon": "users",
        "h": {
         "en": "Group and assessment centre",
         "id": "Kelompok dan assessment center"
        },
        "sub": {
         "en": "Fit and capability under observation. BUMN, banks, MT; startups substitute a take-home task.",
         "id": "Kecocokan dan kemampuan di bawah pengamatan. BUMN, bank, MT; startup menggantinya dengan tugas take-home."
        }
       },
       {
        "icon": "target",
        "h": {
         "en": "User interview",
         "id": "Wawancara user"
        },
        "sub": {
         "en": "Capability. Every track; usually decisive; deepest probing.",
         "id": "Kemampuan. Setiap jalur; biasanya menentukan; galian terdalam."
        }
       },
       {
        "icon": "flag",
        "h": {
         "en": "Panel, final, founder",
         "id": "Panel, final, pendiri"
        },
        "sub": {
         "en": "Values and commitment. Banks (sometimes), BUMN, MT, startups (founder); SMEs skip to a trial.",
         "id": "Nilai dan komitmen. Bank (kadang), BUMN, MT, startup (pendiri); UKM langsung ke percobaan."
        }
       },
       {
        "icon": "check",
        "h": {
         "en": "Medical and offer",
         "id": "Medis dan tawaran"
        },
        "sub": {
         "en": "Eligibility again; the contract and any service bond (Module 10).",
         "id": "Kelayakan lagi; kontrak dan ikatan dinas jika ada (Modul 10)."
        }
       }
      ],
      "note": {
       "en": "The same colour rarely appears twice in a row: each stage reduces a different uncertainty.",
       "id": "Warna yang sama jarang muncul dua kali berturut-turut: tiap tahap mengurangi ketidakpastian yang berbeda."
      },
      "longdesc": {
       "en": "A six-step timeline read across five tracks: apply and screen (eligibility; all tracks); tests and psikotes (capability and consistency; banks, BUMN, MT); group and assessment centre (fit under observation; BUMN, banks, MT, with startups using a take-home task instead); the user interview (capability; every track, usually decisive); panel, final or founder interview (values and commitment); and medical and offer (eligibility again, plus contract and service bond).",
       "id": "Linimasa enam langkah yang dibaca lintas lima jalur: lamar dan seleksi awal (kelayakan; semua jalur); tes dan psikotes (kemampuan dan konsistensi; bank, BUMN, MT); kelompok dan assessment center (kecocokan di bawah pengamatan; BUMN, bank, MT, dengan startup memakai tugas take-home); wawancara user (kemampuan; setiap jalur, biasanya menentukan); wawancara panel, final, atau pendiri (nilai dan komitmen); dan medis serta tawaran (kelayakan lagi, plus kontrak dan ikatan dinas)."
      }
     },
     "compare": [
      {
       "tag": {
        "en": "“Bersedia ditempatkan di seluruh Indonesia?” — the screen",
        "id": "“Bersedia ditempatkan di seluruh Indonesia?” — seleksi awal"
       },
       "q": {
        "en": "The Bank Sinar Nusantara recruiter, on a fifteen-minute call, asks the placement question. Nadia knows the ODP places anywhere for the first two years.",
        "id": "Rekruter Bank Sinar Nusantara, dalam telepon lima belas menit, mengajukan pertanyaan penempatan. Nadia tahu ODP menempatkan di mana saja selama dua tahun pertama."
       },
       "weak": {
        "en": "“Hmm… tergantung sih, Bu. Kalau bisa di Jawa. Tapi kalau memang harus, ya saya coba dulu, nanti lihat.”",
        "id": "“Hmm… tergantung sih, Bu. Kalau bisa di Jawa. Tapi kalau memang harus, ya saya coba dulu, nanti lihat.”"
       },
       "strong": {
        "en": "“Bersedia, Bu. Saya sudah membaca ketentuan penempatan dua tahun pertama sebelum mendaftar, dan saya sudah membicarakannya dengan keluarga. Kalau boleh tahu, apakah penempatan pertama biasanya diumumkan sebelum atau sesudah penandatanganan kontrak?”",
        "id": "“Bersedia, Bu. Saya sudah membaca ketentuan penempatan dua tahun pertama sebelum mendaftar, dan saya sudah membicarakannya dengan keluarga. Kalau boleh tahu, apakah penempatan pertama biasanya diumumkan sebelum atau sesudah penandatanganan kontrak?”"
       },
       "why": {
        "en": "A screen tests eligibility, and the recruiter is listening for a clean yes or a clean no — “coba dulu, nanti lihat” is the profile of the trainee who resigns after placement, which is exactly the hidden concern. The strong answer is direct, shows the condition was read before applying, gives a reason the recruiter can believe (the family conversation), and asks one useful question. If the honest answer is no, say no: a truthful no at the screen costs one process; a false yes costs a service bond.",
        "id": "Seleksi awal menguji kelayakan, dan rekruter mendengarkan ya yang jelas atau tidak yang jelas — “coba dulu, nanti lihat” adalah profil trainee yang mengundurkan diri setelah penempatan, persis kekhawatiran tersembunyinya. Jawaban kuat langsung, menunjukkan ketentuannya dibaca sebelum melamar, memberi alasan yang bisa dipercaya rekruter (pembicaraan keluarga), dan mengajukan satu pertanyaan berguna. Jika jawaban jujurnya tidak, katakan tidak: tidak yang jujur di seleksi awal mengorbankan satu proses; ya yang palsu mengorbankan ikatan dinas."
       }
      }
     ],
     "scenario": {
      "icon": "compass",
      "title": {
       "en": "In focus: three group assessments she has never practised",
       "id": "Sorotan: tiga asesmen kelompok yang belum pernah ia latih"
      },
      "body": [
       {
        "en": "Nadia lists her four processes side by side — Bank Sinar Nusantara ODP, Arunika MT, KilatPay, Rumah Rempah — and reads the invitations against the table in this lesson. Three of the four include a group assessment she has never practised. Two use one-way video. Only one — Rumah Rempah’s lunch with Bu Ratna — is the conversational interview she has been rehearsing for.",
        "id": "Nadia mendaftar empat prosesnya berdampingan — ODP Bank Sinar Nusantara, MT Arunika, KilatPay, Rumah Rempah — dan membaca undangannya terhadap tabel di pelajaran ini. Tiga dari empat mencakup asesmen kelompok yang belum pernah ia latih. Dua memakai video satu arah. Hanya satu — makan siang Rumah Rempah dengan Bu Ratna — yang merupakan wawancara percakapan yang selama ini ia latih."
       },
       {
        "en": "She reorders her preparation: Module 7 and one-way video practice first, the Core 10 stories in parallel because they serve all four, and the salary and placement sentences before the phone screen on Tuesday. The format map took twenty minutes; it saved her a week of preparing the wrong thing.",
        "id": "Ia mengurutkan ulang persiapannya: Modul 7 dan latihan video satu arah lebih dulu, cerita Core 10 secara paralel karena melayani keempatnya, dan kalimat gaji serta penempatan sebelum seleksi telepon hari Selasa. Peta formatnya butuh dua puluh menit; ia menghemat seminggu menyiapkan hal yang salah."
       }
      ]
     },
     "steps": [
      {
       "h": {
        "en": "Drill 1 · Build your format map (Kit item)",
        "id": "Latihan 1 · Bangun peta formatmu (butir Perangkat)"
       },
       "body": {
        "en": "For your Top 3 targets, fill one row per stage: the stage, who conducts it, what it tests (eligibility · capability · fit · values), the format, and what you will prepare. Mark every stage you have never practised. Use the template in the resources.",
        "id": "Untuk 3 sasaran teratasmu, isi satu baris per tahap: tahapnya, siapa yang menjalankan, yang diuji (kelayakan · kemampuan · kecocokan · nilai), formatnya, dan apa yang akan kamu siapkan. Tandai setiap tahap yang belum pernah kamu latih. Pakai templat di sumber."
       },
       "debrief": {
        "en": "A good map has more rows marked “never practised” than you expected — that is its job. Order your preparation by two things: the nearest deadline, and the stages that serve more than one target (the Core 10 stories serve every user interview; the one-way video serves two of Nadia’s four). Nadia’s map: KilatPay case first by deadline, one-way video with a timer, Core 10 by day five, LGD practice before Arunika’s assessment centre, and the two eligibility sentences before Tuesday.",
        "id": "Peta yang baik punya lebih banyak baris bertanda “belum pernah dilatih” dari dugaanmu — itulah tugasnya. Urutkan persiapanmu berdasarkan dua hal: tenggat terdekat, dan tahap yang melayani lebih dari satu sasaran (cerita Core 10 melayani setiap wawancara user; video satu arah melayani dua dari empat proses Nadia). Peta Nadia: kasus KilatPay dulu karena tenggat, video satu arah dengan pengatur waktu, Core 10 sebelum hari kelima, latihan LGD sebelum assessment center Arunika, dan dua kalimat kelayakan sebelum Selasa."
       }
      },
      {
       "h": {
        "en": "Drill 2 · Invitation decoding",
        "id": "Latihan 2 · Menguraikan undangan"
       },
       "body": {
        "en": "Extract format, duration, interviewer and implied test from each: (a) “Kami mengundang Anda mengikuti wawancara dengan tim HR pada Selasa, 10.00–10.20, melalui telepon. Mohon konfirmasi ketersediaan.” (b) “Please complete your video interview by Friday. You will answer 5 questions with 90 seconds each and 30 seconds of preparation; one retake is allowed per question.” (c) “Undangan wawancara user bersama Kepala Departemen Supply Chain, Kamis, 14.00–15.00, kantor Bekasi. Mohon membawa KTP, ijazah asli, dan satu contoh analisis yang pernah Anda kerjakan.”",
        "id": "Uraikan format, durasi, pewawancara, dan ujian tersirat dari masing-masing: (a) “Kami mengundang Anda mengikuti wawancara dengan tim HR pada Selasa, 10.00–10.20, melalui telepon. Mohon konfirmasi ketersediaan.” (b) “Please complete your video interview by Friday. You will answer 5 questions with 90 seconds each and 30 seconds of preparation; one retake is allowed per question.” (c) “Undangan wawancara user bersama Kepala Departemen Supply Chain, Kamis, 14.00–15.00, kantor Bekasi. Mohon membawa KTP, ijazah asli, dan satu contoh analisis yang pernah Anda kerjakan.”"
       },
       "debrief": {
        "en": "(a) Phone screen, 20 minutes, HR: eligibility, communication, basic motivation — prepare the placement, salary and start-date sentences and a 60-second opening; confirm within one working day. (b) One-way video, asynchronous, no interviewer: structure under a timer — rehearse with 30 s prep and 90 s answers, use the retake once per question at most, test camera and sound (Lesson 4.5). (c) User interview, 60 minutes, the department head, in person: capability and depth — bring the documents, choose the one analysis you can defend for ten minutes (the inventory-turnover thesis, not the sponsorship deck), prepare the technical five and two questions for a manager. The document list in (c) also tells you the process is formal enough to check originals: consistency across CV, ijazah and your answers will be noticed.",
        "id": "(a) Seleksi telepon, 20 menit, HR: kelayakan, komunikasi, motivasi dasar — siapkan kalimat penempatan, gaji, dan tanggal mulai serta pembuka 60 detik; konfirmasi dalam satu hari kerja. (b) Video satu arah, asinkron, tanpa pewawancara: struktur di bawah pengatur waktu — latih dengan persiapan 30 dtk dan jawaban 90 dtk, pakai pengulangan paling banyak sekali per pertanyaan, uji kamera dan suara (Pelajaran 4.5). (c) Wawancara user, 60 menit, kepala departemen, tatap muka: kemampuan dan kedalaman — bawa dokumennya, pilih satu analisis yang bisa kamu pertahankan sepuluh menit (skripsi inventory turnover, bukan dek sponsorship), siapkan lima teknis dan dua pertanyaan untuk manajer. Daftar dokumen di (c) juga memberitahumu prosesnya cukup formal untuk memeriksa dokumen asli: konsistensi antara CV, ijazah, dan jawabanmu akan diperhatikan."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Preparing only for the HR interview",
         "id": "Hanya bersiap untuk wawancara HR"
        },
        "fix": {
         "en": "Map every stage; the user round usually decides.",
         "id": "Petakan setiap tahap; ronde user biasanya menentukan."
        }
       },
       {
        "h": {
         "en": "Treating the psychologist interview as a performance",
         "id": "Memperlakukan wawancara psikolog sebagai pertunjukan"
        },
        "fix": {
         "en": "Honest and consistent with the tests you just sat.",
         "id": "Jujur dan konsisten dengan tes yang baru kamu jalani."
        }
       },
       {
        "h": {
         "en": "Not checking the interviewer’s role",
         "id": "Tidak memeriksa peran pewawancara"
        },
        "fix": {
         "en": "Look them up; prepare for the person and their uncertainty.",
         "id": "Cari tahu; bersiaplah untuk orangnya dan ketidakpastiannya."
        }
       },
       {
        "h": {
         "en": "Ignoring eligibility questions until they are asked",
         "id": "Mengabaikan pertanyaan kelayakan sampai ditanyakan"
        },
        "fix": {
         "en": "Truthful one-line answers on placement, bond, salary and start date before the screen.",
         "id": "Jawaban satu baris yang jujur tentang penempatan, ikatan dinas, gaji, dan tanggal mulai sebelum seleksi awal."
        }
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "User interview",
        "id": "Wawancara user"
       },
       "def": {
        "en": "The interview with your future manager; usually the decisive round.",
        "id": "Wawancara dengan calon atasanmu; biasanya ronde yang menentukan."
       }
      },
      {
       "term": {
        "en": "Psychological test (psikotes)",
        "id": "Psikotes"
       },
       "def": {
        "en": "A battery of tests, often with a psychologist interview, checking consistency and stability.",
        "id": "Rangkaian tes, sering dengan wawancara psikolog, memeriksa konsistensi dan kestabilan."
       }
      },
      {
       "term": {
        "en": "Assessment centre",
        "id": "Assessment center"
       },
       "def": {
        "en": "A day of observed exercises — group discussion, case, presentation, in-tray — scored by assessors.",
        "id": "Satu hari latihan yang diamati — diskusi kelompok, kasus, presentasi, in-tray — dinilai asesor."
       }
      },
      {
       "term": {
        "en": "Service bond (ikatan dinas)",
        "id": "Ikatan dinas"
       },
       "def": {
        "en": "A commitment to stay for a period after training, with a penalty for leaving early; common in bank ODPs.",
        "id": "Komitmen bertahan selama periode setelah pelatihan, dengan penalti jika keluar lebih awal; umum di ODP bank."
       }
      },
      {
       "term": {
        "en": "Medical check-up (MCU)",
        "id": "Pemeriksaan kesehatan (MCU)"
       },
       "def": {
        "en": "The health check before an offer; an eligibility stage, not a capability one.",
        "id": "Pemeriksaan kesehatan sebelum tawaran; tahap kelayakan, bukan kemampuan."
       }
      },
      {
       "term": {
        "en": "One-way video interview",
        "id": "Wawancara video satu arah"
       },
       "def": {
        "en": "Recorded answers to on-screen prompts under a timer, reviewed later; no interviewer present.",
        "id": "Jawaban rekaman atas petunjuk di layar dengan pengatur waktu, ditinjau kemudian; tanpa pewawancara."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "The decisive round in most Indonesian corporate processes is usually…",
        "id": "Ronde yang menentukan di sebagian besar proses korporat Indonesia biasanya…"
       },
       "options": [
        {
         "en": "The HR screen",
         "id": "Seleksi HR"
        },
        {
         "en": "The user interview with the future manager",
         "id": "Wawancara user dengan calon atasan"
        },
        {
         "en": "The medical check-up",
         "id": "Pemeriksaan kesehatan"
        },
        {
         "en": "The online test",
         "id": "Tes daring"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The user tests capability for the actual work and “can I work with this person?” — and probes deepest.",
        "id": "User menguji kemampuan untuk pekerjaan sebenarnya dan “bisakah saya bekerja dengan orang ini?” — dan menggali paling dalam."
       }
      },
      {
       "q": {
        "en": "In a psychologist interview the best approach is…",
        "id": "Dalam wawancara psikolog pendekatan terbaik adalah…"
       },
       "options": [
        {
         "en": "Present an ideal personality",
         "id": "Menampilkan kepribadian ideal"
        },
        {
         "en": "Answer honestly and consistently with your test responses",
         "id": "Menjawab jujur dan konsisten dengan respons tesmu"
        },
        {
         "en": "Keep answers very short",
         "id": "Menjaga jawaban sangat singkat"
        },
        {
         "en": "Ask about the results",
         "id": "Bertanya tentang hasilnya"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The interview checks consistency with the tests you just sat; a performance contradicts them.",
        "id": "Wawancara memeriksa konsistensi dengan tes yang baru kamu jalani; pertunjukan membantahnya."
       }
      },
      {
       "q": {
        "en": "A 20-minute call from a recruiter most likely tests…",
        "id": "Telepon 20 menit dari rekruter paling mungkin menguji…"
       },
       "options": [
        {
         "en": "Technical depth",
         "id": "Kedalaman teknis"
        },
        {
         "en": "Eligibility, basic communication and motivation",
         "id": "Kelayakan, komunikasi dasar, dan motivasi"
        },
        {
         "en": "Leadership",
         "id": "Kepemimpinan"
        },
        {
         "en": "Case skills",
         "id": "Keterampilan kasus"
        }
       ],
       "correct": 1,
       "why": {
        "en": "A short slot is a screen; prepare direct answers on placement, salary and start date.",
        "id": "Slot singkat adalah seleksi awal; siapkan jawaban langsung tentang penempatan, gaji, dan tanggal mulai."
       }
      }
     ],
     "tryit": {
      "qid": "elig_placement",
      "set": [
       "elig_placement",
       "elig_service_bond",
       "elig_start_date",
       "elig_salary_gross",
       "elig_other_processes"
      ],
      "persona": "hr",
      "format": "phone_whatsapp",
      "profile": "eligibility",
      "returnTo": 2,
      "label": {
       "en": "Recruiter screen: five eligibility questions",
       "id": "Seleksi rekruter: lima pertanyaan kelayakan"
      },
      "desc": {
       "en": "Placement, service bond, start date, salary range, other processes — with the HR persona, as a short call. The target is a direct, honest answer in 15–40 seconds each.",
       "id": "Penempatan, ikatan dinas, tanggal mulai, rentang gaji, proses lain — dengan persona HR, sebagai panggilan singkat. Targetnya jawaban langsung dan jujur dalam 15–40 detik masing-masing."
      }
     },
     "tool": {
      "id": "simulator",
      "mode": "setup",
      "title": {
       "en": "Round 1 · Diagnostic session (your baseline)",
       "id": "Putaran 1 · Sesi diagnostik (garis dasarmu)"
      },
      "body": {
       "en": "Before Module 2, run one mixed six-question session at standard difficulty: an opening, two behavioural, one motivational, one difficult, one closing. Do not prepare specially — the point is a baseline. Its scores are stored with the session; Module 9 compares every later session to it and asks you to name what changed.",
       "id": "Sebelum Modul 2, jalankan satu sesi campuran enam pertanyaan pada tingkat standar: pembuka, dua perilaku, satu motivasional, satu sulit, satu penutup. Jangan bersiap khusus — intinya adalah garis dasar. Skornya disimpan bersama sesi; Modul 9 membandingkan setiap sesi berikutnya dengannya dan memintamu menyebut apa yang berubah."
      },
      "cta": {
       "en": "Open the simulator →",
       "id": "Buka simulator →"
      }
     },
     "takeaways": [
      {
       "en": "Every stage tests a different uncertainty.",
       "id": "Setiap tahap menguji ketidakpastian yang berbeda."
      },
      {
       "en": "Map the process before you prepare — and mark what you have never practised.",
       "id": "Petakan prosesnya sebelum bersiap — dan tandai yang belum pernah kamu latih."
      },
      {
       "en": "The user round usually decides.",
       "id": "Ronde user biasanya menentukan."
      }
     ],
     "resources": {
      "title": {
       "en": "Sources and the format-map template",
       "id": "Sumber dan templat peta format"
      },
      "lead": {
       "en": "The process patterns are course material marked for verification; the template is your first Kit item.",
       "id": "Pola prosesnya materi kursus yang ditandai untuk verifikasi; templatnya butir Perangkat pertamamu."
      },
      "items": [
       {
        "kind": "guide",
        "title": {
         "en": "Reading list · Lesson 1.4",
         "id": "Daftar bacaan · Pelajaran 1.4"
        },
        "desc": {
         "en": "Where the stage logic comes from; the Indonesian sequences must be checked against current official programme pages.",
         "id": "Dari mana logika tahapnya berasal; urutan Indonesia harus diperiksa terhadap laman program resmi terkini."
        },
        "body": [
         {
          "en": "E. Pellett, <i>Cracking the Code to a Successful Interview</i> — the recruiter’s view of the sequence.",
          "id": "E. Pellett, <i>Cracking the Code to a Successful Interview</i> — pandangan rekruter tentang urutan."
         },
         {
          "en": "R. Ryan, <i>60 Seconds & You’re Hired!</i> — interview formats.",
          "id": "R. Ryan, <i>60 Seconds & You’re Hired!</i> — format wawancara."
         },
         {
          "en": "<span class=\"ev ev-verify\">Verify</span> Official sources, checked each cycle: the BUMN joint-recruitment portal; each bank’s ODP page; each employer’s careers page.",
          "id": "<span class=\"ev ev-verify\">Verifikasi</span> Sumber resmi, diperiksa tiap siklus: portal rekrutmen bersama BUMN; laman ODP tiap bank; laman karier tiap perusahaan."
         }
        ]
       },
       {
        "kind": "template",
        "title": {
         "en": "Format map (Kit item)",
         "id": "Peta format (butir Perangkat)"
        },
        "desc": {
         "en": "One block per target; one row per stage.",
         "id": "Satu blok per sasaran; satu baris per tahap."
        },
        "body": [
         {
          "en": "Target · track (bank ODP / BUMN / MT / startup / SME) · deadline of the next stage",
          "id": "Sasaran · jalur (ODP bank / BUMN / MT / startup / UKM) · tenggat tahap berikutnya"
         },
         {
          "en": "Stage · who conducts it · tests (eligibility / capability / fit / values) · format · duration",
          "id": "Tahap · siapa yang menjalankan · menguji (kelayakan / kemampuan / kecocokan / nilai) · format · durasi"
         },
         {
          "en": "What I will prepare · which module · practised before? (yes / never)",
          "id": "Yang akan saya siapkan · modul mana · pernah dilatih? (ya / belum pernah)"
         },
         {
          "en": "The one question I will ask to learn most about the stage ahead",
          "id": "Satu pertanyaan yang akan saya ajukan untuk mengetahui tahap berikutnya sebanyak mungkin"
         },
         {
          "en": "Red / green flags noticed so far (invitation tone, punctuality, clarity)",
          "id": "Tanda merah / hijau yang diperhatikan sejauh ini (nada undangan, ketepatan waktu, kejelasan)"
         }
        ]
       }
      ]
     }
    },
    {
     "n": "1.5",
     "kind": "assignment",
     "placeholder": false,
     "dur": {
      "en": "60 min",
      "id": "60 mnt"
     },
     "title": {
      "en": "Case Assignment — Map Nadia’s Four Processes",
      "id": "Tugas Kasus — Petakan Empat Proses Nadia"
     },
     "overview": {
      "en": "Nadia has four processes starting within three weeks and two hours a day to prepare. Using everything in Module 1 — what each stage tests, who runs it, the hidden concerns, the Indonesian sequences — map her four processes, name the uncertainties each employer will have about her specifically, build a two-week preparation plan in priority order, and write the one question she should ask each employer. Then do the same for your own Top 3: your format map is the first item in your Interview Kit.",
      "id": "Nadia punya empat proses yang dimulai dalam tiga minggu dan dua jam sehari untuk bersiap. Dengan semua isi Modul 1 — apa yang diuji tiap tahap, siapa yang menjalankan, kekhawatiran tersembunyi, urutan Indonesia — petakan empat prosesnya, sebutkan ketidakpastian yang akan dimiliki tiap perusahaan tentang dirinya secara spesifik, bangun rencana persiapan dua minggu dalam urutan prioritas, dan tulis satu pertanyaan yang harus ia ajukan ke tiap perusahaan. Lalu lakukan hal yang sama untuk 3 sasaran teratasmu: peta formatmu adalah butir pertama Perangkat Wawancaramu."
     },
     "objectives": [
      {
       "en": "Map four Indonesian processes stage by stage, naming what each stage tests.",
       "id": "Memetakan empat proses Indonesia tahap demi tahap, menyebutkan apa yang diuji tiap tahap."
      },
      {
       "en": "Identify employer-specific uncertainties about a real candidate profile.",
       "id": "Mengenali ketidakpastian khas perusahaan tentang profil kandidat nyata."
      },
      {
       "en": "Prioritise two weeks of preparation by deadline and reuse.",
       "id": "Memprioritaskan dua minggu persiapan berdasarkan tenggat dan pemakaian ulang."
      },
      {
       "en": "Write stage-appropriate questions that reveal what comes next.",
       "id": "Menulis pertanyaan sesuai tahap yang mengungkap apa yang akan datang."
      }
     ],
     "readFirst": {
      "kicker": {
       "en": "Read first · how this case works",
       "id": "Baca dulu · cara kerja kasus ini"
      },
      "title": {
       "en": "Four invitations, two hours a day",
       "id": "Empat undangan, dua jam sehari"
      },
      "intro": {
       "en": "Five steps, five written answers. The case file has three tabs: Nadia’s profile from The Pack, the four invitations as received, and the three-week calendar. Every answer is checked for the ideas Module 1 taught, not for matching a model.",
       "id": "Lima langkah, lima jawaban tertulis. Berkas kasus punya tiga tab: profil Nadia dari The Pack, empat undangan sebagaimana diterima, dan kalender tiga minggu. Setiap jawaban diperiksa untuk gagasan yang diajarkan Modul 1, bukan kecocokan dengan model."
      },
      "slides": [
       {
        "h": {
         "en": "Read like a planner",
         "id": "Baca seperti perencana"
        },
        "points": [
         {
          "en": "Each invitation names a stage; the stage names a test; the test names a module to prepare with.",
          "id": "Setiap undangan menyebut tahap; tahap menyebut ujian; ujian menyebut modul untuk bersiap."
         },
         {
          "en": "The calendar is the constraint: fourteen days, two hours each, deadlines fixed.",
          "id": "Kalender adalah kendalanya: empat belas hari, dua jam masing-masing, tenggat tetap."
         }
        ]
       },
       {
        "h": {
         "en": "Then map yourself",
         "id": "Lalu petakan dirimu"
        },
        "points": [
         {
          "en": "Step 5 is your own format map for your Top 3 — the Kit item. Model notes open after you submit.",
          "id": "Langkah 5 adalah peta formatmu sendiri untuk 3 teratas — butir Perangkat. Catatan model terbuka setelah kamu mengumpulkan."
         },
         {
          "en": "Compare, do not copy: the model is Nadia’s plan, not yours.",
          "id": "Bandingkan, jangan salin: modelnya rencana Nadia, bukan rencanamu."
         }
        ]
       }
      ]
     },
     "caseStudy": {
      "format": "generic",
      "idPrefix": "RP1",
      "kicker": {
       "en": "Case assignment · Interactive case",
       "id": "Tugas kasus · Kasus interaktif"
      },
      "title": {
       "en": "Map Nadia’s Four Processes",
       "id": "Petakan Empat Proses Nadia"
      },
      "lead": {
       "en": "Four fictional employers, four invitations, one candidate with two hours a day. Decide what she prepares, in what order, and what each stage is going to test in her case.",
       "id": "Empat perusahaan fiktif, empat undangan, satu kandidat dengan dua jam sehari. Putuskan apa yang ia siapkan, dalam urutan apa, dan apa yang akan diuji tiap tahap dalam kasusnya."
      },
      "practice": [
       {
        "en": "Stage mapping",
        "id": "Pemetaan tahap"
       },
       {
        "en": "Uncertainty audit",
        "id": "Audit ketidakpastian"
       },
       {
        "en": "Preparation plan",
        "id": "Rencana persiapan"
       },
       {
        "en": "Stage questions",
        "id": "Pertanyaan tahap"
       },
       {
        "en": "Your format map",
        "id": "Peta formatmu"
       }
      ],
      "goal": {
       "en": "A format map and a fourteen-day plan Nadia could follow tomorrow morning — and the same map for your own targets.",
       "id": "Peta format dan rencana empat belas hari yang bisa diikuti Nadia besok pagi — dan peta yang sama untuk sasaranmu sendiri."
      },
      "brief": {
       "email": {
        "initials": "RS",
        "from": {
         "en": "Rina Sari · Metanoia mentor",
         "id": "Rina Sari · Mentor Metanoia"
        },
        "to": {
         "en": "to: you · cc: Nadia Putri",
         "id": "kepada: kamu · cc: Nadia Putri"
        },
        "date": {
         "en": "Sunday, 20:10",
         "id": "Minggu, 20.10"
        },
        "subject": {
         "en": "Nadia’s four processes — help her decide what to prepare and in what order",
         "id": "Empat proses Nadia — bantu ia memutuskan apa yang disiapkan dan urutannya"
        },
        "paragraphs": [
         {
          "en": "Nadia finished The Pack with a rebuilt CV and a Top 5, and four of them have replied in the same week. I have pasted the four invitations exactly as she received them, and her profile from the Pack Dossier. She has about two hours a day for the next three weeks and is trying to prepare for all four at once, which means she is preparing for none of them.",
          "id": "Nadia menyelesaikan The Pack dengan CV yang dibangun ulang dan 5 Teratas, dan empat di antaranya membalas di minggu yang sama. Saya tempelkan empat undangan persis seperti yang ia terima, dan profilnya dari Dossier The Pack. Ia punya sekitar dua jam sehari selama tiga minggu ke depan dan mencoba bersiap untuk keempatnya sekaligus, yang berarti ia tidak bersiap untuk satu pun."
         },
         {
          "en": "Help her decide what to prepare, in what order, and what each stage is going to test in her case — not in general. She has never done a group discussion or a one-way video, and the KilatPay case is due in four days.",
          "id": "Bantu ia memutuskan apa yang disiapkan, dalam urutan apa, dan apa yang akan diuji tiap tahap dalam kasusnya — bukan secara umum. Ia belum pernah mengikuti diskusi kelompok atau video satu arah, dan kasus KilatPay jatuh tempo dalam empat hari."
         },
         {
          "en": "Then do the same for your own three targets. That map is the first page of your Interview Kit; I will look at it at our next session.",
          "id": "Lalu lakukan hal yang sama untuk tiga sasaranmu sendiri. Peta itu halaman pertama Perangkat Wawancaramu; saya akan melihatnya di sesi kita berikutnya."
         }
        ],
        "asks": [
         {
          "en": "For each process: the stages and what each tests",
          "id": "Untuk tiap proses: tahap dan apa yang diuji masing-masing"
         },
         {
          "en": "The three biggest uncertainties each employer will have about Nadia specifically",
          "id": "Tiga ketidakpastian terbesar tiap perusahaan tentang Nadia secara spesifik"
         },
         {
          "en": "A two-week plan in priority order, with reasons",
          "id": "Rencana dua minggu dalam urutan prioritas, dengan alasan"
         },
         {
          "en": "One question per employer that learns the most about the stage ahead",
          "id": "Satu pertanyaan per perusahaan yang paling banyak mengungkap tahap berikutnya"
         }
        ],
        "closing": [
         {
          "en": "Terima kasih — Rina",
          "id": "Terima kasih — Rina"
         }
        ]
       },
       "facts": [
        {
         "icon": "clock",
         "k": {
          "en": "2 h / day",
          "id": "2 jam / hari"
         },
         "v": {
          "en": "Nadia’s available preparation time for the next three weeks — 14 days ≈ 28 hours in the plan window",
          "id": "Waktu persiapan Nadia untuk tiga minggu ke depan — 14 hari ≈ 28 jam dalam jendela rencana"
         },
         "hot": true
        },
        {
         "icon": "flag",
         "k": {
          "en": "4 days",
          "id": "4 hari"
         },
         "v": {
          "en": "KilatPay take-home case due — the nearest hard deadline",
          "id": "Kasus take-home KilatPay jatuh tempo — tenggat keras terdekat"
         },
         "hot": true
        },
        {
         "icon": "users",
         "k": {
          "en": "Never practised",
          "id": "Belum pernah dilatih"
         },
         "v": {
          "en": "group discussion (Bank Sinar Nusantara, Arunika) · one-way video (Arunika) · a take-home case (KilatPay)",
          "id": "diskusi kelompok (Bank Sinar Nusantara, Arunika) · video satu arah (Arunika) · kasus take-home (KilatPay)"
         },
         "hot": true
        },
        {
         "icon": "mail",
         "k": {
          "en": "Tuesday",
          "id": "Selasa"
         },
         "v": {
          "en": "Bank Sinar Nusantara phone screen, 15 minutes, HR",
          "id": "Seleksi telepon Bank Sinar Nusantara, 15 menit, HR"
         }
        },
        {
         "icon": "eye",
         "k": {
          "en": "Friday",
          "id": "Jumat"
         },
         "v": {
          "en": "Arunika one-way video due: 5 questions × 90 s, 30 s preparation, one retake each",
          "id": "Video satu arah Arunika jatuh tempo: 5 pertanyaan × 90 dtk, persiapan 30 dtk, satu pengulangan masing-masing"
         }
        },
        {
         "icon": "compass",
         "k": {
          "en": "Next week",
          "id": "Minggu depan"
         },
         "v": {
          "en": "Rumah Rempah “ngobrol santai” lunch with the owner, Bu Ratna",
          "id": "Makan siang “ngobrol santai” Rumah Rempah dengan pemilik, Bu Ratna"
         }
        }
       ],
       "docs": [
        {
         "tab": {
          "en": "Nadia’s profile",
          "id": "Profil Nadia"
         },
         "title": {
          "en": "From the Pack Dossier — the facts every answer must use",
          "id": "Dari Dossier The Pack — fakta yang harus dipakai setiap jawaban"
         },
         "meta": {
          "en": "The only source for claims about her",
          "id": "Satu-satunya sumber untuk klaim tentang dirinya"
         },
         "body": [
          {
           "items": [
            {
             "en": "Nadia Putri, 22 · S1 Manajemen, IPK 3,38 · graduates Aug 2026 · thesis on inventory turnover at a Tegal retailer",
             "id": "Nadia Putri, 22 · S1 Manajemen, IPK 3,38 · lulus Agu 2026 · skripsi tentang inventory turnover di peritel Tegal"
            },
            {
             "en": "Operations Intern, Bank Sinar Nusantara, Semarang · Jun–Aug 2025 · reconciled daily transaction reports for 3 branches · flagged a recurring terminal mismatch; the fix removed about 30 minutes of manual correction a day · built the reconciliation checklist the branch team still uses",
             "id": "Operations Intern, Bank Sinar Nusantara, Semarang · Jun–Agu 2025 · merekonsiliasi laporan transaksi harian untuk 3 cabang · menandai selisih terminal berulang; perbaikannya menghilangkan sekitar 30 menit koreksi manual per hari · membangun daftar periksa rekonsiliasi yang masih dipakai tim cabang"
            },
            {
             "en": "Treasurer, HIMA Manajemen · Aug 2024–Jul 2025 · 300 members, 12 events, Rp 120 juta budget · monthly close with receipts · faculty audit: zero issues, first in 3 years",
             "id": "Bendahara, HIMA Manajemen · Agu 2024–Jul 2025 · 300 anggota, 12 acara, anggaran Rp 120 juta · tutup buku bulanan dengan kuitansi · audit fakultas: nol temuan, pertama dalam 3 tahun"
            },
            {
             "en": "Head of Sponsorship, 2025 National Business Competition · 6-person team · Rp 85 juta from 11 sponsors · 1,200 participants",
             "id": "Kepala Sponsorship, Kompetisi Bisnis Nasional 2025 · tim 6 orang · Rp 85 juta dari 11 sponsor · 1.200 peserta"
            },
            {
             "en": "Barista (part-time), Kopi Tepian · Mar 2024–May 2025 · 120–150 customers a shift · pre-order board for the morning rush · trained 4 new baristas",
             "id": "Barista (paruh waktu), Kopi Tepian · Mar 2024–Mei 2025 · 120–150 pelanggan per sif · papan pra-pesan untuk jam sibuk pagi · melatih 4 barista baru"
            },
            {
             "en": "KKN financial-literacy workshop, Tegal · Jul 2024 · 40 participants",
             "id": "Lokakarya literasi keuangan KKN, Tegal · Jul 2024 · 40 peserta"
            },
            {
             "en": "Tools: Excel (pivot tables, VLOOKUP), Google Sheets; SQL fundamentals course in progress (module 2 of 6); never used Tableau or Power BI · TOEFL ITP 540",
             "id": "Alat: Excel (pivot table, VLOOKUP), Google Sheets; kursus dasar SQL sedang berjalan (modul 2 dari 6); tidak pernah memakai Tableau atau Power BI · TOEFL ITP 540"
            },
            {
             "en": "Targets: operations or management-trainee roles in banking, FMCG, fintech · open to Jakarta · has not yet decided about placement outside Java",
             "id": "Sasaran: peran operasi atau management trainee di perbankan, FMCG, fintech · bersedia ke Jakarta · belum memutuskan soal penempatan di luar Jawa"
            }
           ]
          }
         ]
        },
        {
         "tab": {
          "en": "The four invitations",
          "id": "Empat undangan"
         },
         "title": {
          "en": "As received — read each for format, duration, interviewer and implied test",
          "id": "Sebagaimana diterima — baca masing-masing untuk format, durasi, pewawancara, dan ujian tersirat"
         },
         "meta": {
          "en": "Fictional employers",
          "id": "Perusahaan fiktif"
         },
         "body": [
          {
           "h": {
            "en": "Bank Sinar Nusantara — Officer Development Program",
            "id": "Bank Sinar Nusantara — Officer Development Program"
           }
          },
          {
           "items": [
            {
             "en": "“Kami mengundang Anda mengikuti wawancara awal dengan tim HR pada Selasa, 10.00–10.15, melalui telepon. Tahap berikutnya: psikotes dan LGD (dijadwalkan setelah wawancara awal), wawancara user dengan Kepala Cabang, dan panel dengan Direktur Regional. Program ini mensyaratkan ikatan dinas dua tahun dan kesediaan penempatan di seluruh Indonesia.”",
             "id": "“Kami mengundang Anda mengikuti wawancara awal dengan tim HR pada Selasa, 10.00–10.15, melalui telepon. Tahap berikutnya: psikotes dan LGD (dijadwalkan setelah wawancara awal), wawancara user dengan Kepala Cabang, dan panel dengan Direktur Regional. Program ini mensyaratkan ikatan dinas dua tahun dan kesediaan penempatan di seluruh Indonesia.”"
            }
           ]
          },
          {
           "h": {
            "en": "PT Arunika Consumer Goods — Management Trainee (MT-27-SC)",
            "id": "PT Arunika Consumer Goods — Management Trainee (MT-27-SC)"
           }
          },
          {
           "items": [
            {
             "en": "“Please complete your one-way video interview by Friday: 5 questions, 90 seconds each, 30 seconds of preparation, one retake per question. Shortlisted candidates attend an assessment centre (leaderless group discussion and a supply-chain case) at our Bekasi office, followed by a user interview and a final panel.”",
             "id": "“Please complete your one-way video interview by Friday: 5 questions, 90 seconds each, 30 seconds of preparation, one retake per question. Shortlisted candidates attend an assessment centre (leaderless group discussion and a supply-chain case) at our Bekasi office, followed by a user interview and a final panel.”"
            }
           ]
          },
          {
           "h": {
            "en": "KilatPay — Business Operations Associate (OPS-26-04)",
            "id": "KilatPay — Business Operations Associate (OPS-26-04)"
           }
          },
          {
           "items": [
            {
             "en": "“Hi Nadia — thanks for the chat yesterday. Next step is a short take-home case (attached): merchant onboarding drop-off. Please send your analysis (max 3 slides or 1 page) within 4 days. If it goes well, you’ll meet Mr. Aditya (Head of Merchant Operations) and then one of our founders. — Dewi, Talent Acquisition”",
             "id": "“Hi Nadia — thanks for the chat yesterday. Next step is a short take-home case (attached): merchant onboarding drop-off. Please send your analysis (max 3 slides or 1 page) within 4 days. If it goes well, you’ll meet Mr. Aditya (Head of Merchant Operations) and then one of our founders. — Dewi, Talent Acquisition”"
            }
           ]
          },
          {
           "h": {
            "en": "Rumah Rempah — Area Operations Trainee",
            "id": "Rumah Rempah — Area Operations Trainee"
           }
          },
          {
           "items": [
            {
             "en": "“Nadia, Bu Ratna mau ngobrol santai sambil makan siang minggu depan di outlet Tembalang, hari Rabu jam 12. Nggak usah bawa apa-apa. — Wulan”",
             "id": "“Nadia, Bu Ratna mau ngobrol santai sambil makan siang minggu depan di outlet Tembalang, hari Rabu jam 12. Nggak usah bawa apa-apa. — Wulan”"
            }
           ]
          }
         ]
        },
        {
         "tab": {
          "en": "The calendar",
          "id": "Kalender"
         },
         "title": {
          "en": "Three weeks, deadlines fixed",
          "id": "Tiga minggu, tenggat tetap"
         },
         "meta": {
          "en": "Today is Sunday, day 0",
          "id": "Hari ini Minggu, hari 0"
         },
         "body": [
          {
           "items": [
            {
             "en": "Day 2 (Tue) · Bank Sinar Nusantara phone screen, 15 min",
             "id": "Hari 2 (Sel) · seleksi telepon Bank Sinar Nusantara, 15 mnt"
            },
            {
             "en": "Day 4 (Thu) · KilatPay take-home case due",
             "id": "Hari 4 (Kam) · kasus take-home KilatPay jatuh tempo"
            },
            {
             "en": "Day 5 (Fri) · Arunika one-way video due",
             "id": "Hari 5 (Jum) · video satu arah Arunika jatuh tempo"
            },
            {
             "en": "Day 10 (Wed) · Rumah Rempah lunch with Bu Ratna, 12.00",
             "id": "Hari 10 (Rab) · makan siang Rumah Rempah dengan Bu Ratna, 12.00"
            },
            {
             "en": "Day 12–14 · likely KilatPay user interview (Mr. Aditya) if the case passes",
             "id": "Hari 12–14 · kemungkinan wawancara user KilatPay (Bapak Aditya) jika kasus lolos"
            },
            {
             "en": "Day 15–21 · likely Bank Sinar Nusantara psikotes + LGD; likely Arunika assessment centre if shortlisted",
             "id": "Hari 15–21 · kemungkinan psikotes + LGD Bank Sinar Nusantara; kemungkinan assessment center Arunika jika masuk daftar pendek"
            },
            {
             "en": "Available: 2 hours every day; Sundays free for a longer block",
             "id": "Tersedia: 2 jam setiap hari; Minggu luang untuk blok yang lebih panjang"
            }
           ]
          }
         ]
        }
       ]
      },
      "steps": [
       {
        "title": {
         "en": "Stage mapping",
         "id": "Pemetaan tahap"
        },
        "short": {
         "en": "Stages",
         "id": "Tahap"
        },
        "guide": {
         "en": "Lesson 1.4. For each of the four processes, list the stages in order and, for each stage, what it tests (eligibility · capability · fit · values) and who conducts it. Use the invitations, not the generic table, where they differ.",
         "id": "Pelajaran 1.4. Untuk tiap dari empat proses, daftar tahapnya berurutan dan, untuk tiap tahap, apa yang diuji (kelayakan · kemampuan · kecocokan · nilai) dan siapa yang menjalankan. Pakai undangannya, bukan tabel generik, jika berbeda."
        },
        "questions": [
         {
          "id": "q1",
          "min": 110,
          "rows": 14,
          "title": {
           "en": "Four processes, every stage, what it tests",
           "id": "Empat proses, setiap tahap, apa yang diuji"
          },
          "help": {
           "en": "One block per employer. Name the stage, the owner, and the test. Note which stages are eligibility screens and which is the decisive user round.",
           "id": "Satu blok per perusahaan. Sebutkan tahap, pemiliknya, dan ujiannya. Catat tahap mana yang seleksi kelayakan dan mana ronde user yang menentukan."
          },
          "placeholder": {
           "en": "Bank Sinar Nusantara: (1) HR phone screen — eligibility: placement, bond, salary, start date · (2) psikotes + LGD — consistency, fit under observation · (3) user interview, Kepala Cabang — capability, decisive · (4) panel, Direktur Regional — values, commitment · (5) MCU — eligibility\nArunika: (1) one-way video — communication and structure … \nKilatPay: …\nRumah Rempah: …",
           "id": "Bank Sinar Nusantara: (1) seleksi telepon HR — kelayakan: penempatan, ikatan dinas, gaji, tanggal mulai · (2) psikotes + LGD — konsistensi, kecocokan di bawah pengamatan · (3) wawancara user, Kepala Cabang — kemampuan, menentukan · (4) panel, Direktur Regional — nilai, komitmen · (5) MCU — kelayakan\nArunika: (1) video satu arah — komunikasi dan struktur … \nKilatPay: …\nRumah Rempah: …"
          },
          "keywords": [
           [
            "eligibility",
            "kelayakan",
            "placement",
            "penempatan"
           ],
           [
            "capability",
            "kemampuan"
           ],
           [
            "fit",
            "kecocokan",
            "values",
            "nilai"
           ],
           [
            "user",
            "kepala cabang",
            "aditya",
            "manager",
            "atasan"
           ],
           [
            "psikotes",
            "lgd",
            "group",
            "kelompok",
            "assessment"
           ],
           [
            "one-way",
            "satu arah",
            "video"
           ],
           [
            "case",
            "kasus",
            "take-home"
           ],
           [
            "panel",
            "founder",
            "pendiri",
            "direktur"
           ],
           [
            "owner",
            "pemilik",
            "ratna",
            "lunch",
            "makan siang"
           ],
           [
            "decisive",
            "menentukan"
           ]
          ]
         }
        ]
       },
       {
        "title": {
         "en": "Uncertainty audit",
         "id": "Audit ketidakpastian"
        },
        "short": {
         "en": "Uncertainty",
         "id": "Ketidakpastian"
        },
        "guide": {
         "en": "Lesson 1.1. For each employer, the three biggest uncertainties they will have about Nadia specifically — from her profile, not from a generic list — and the evidence in her profile (or “none yet”) that answers each.",
         "id": "Pelajaran 1.1. Untuk tiap perusahaan, tiga ketidakpastian terbesar mereka tentang Nadia secara spesifik — dari profilnya, bukan daftar generik — dan bukti di profilnya (atau “belum ada”) yang menjawab masing-masing."
        },
        "questions": [
         {
          "id": "q2",
          "min": 110,
          "rows": 14,
          "title": {
           "en": "Twelve uncertainties, with evidence or “none yet”",
           "id": "Dua belas ketidakpastian, dengan bukti atau “belum ada”"
          },
          "help": {
           "en": "Think per employer: the bank worries about placement and the bond; Arunika about supply-chain capability and the group; KilatPay about data tools and speed; Rumah Rempah about attitude and staying. Name the profile fact that answers each.",
           "id": "Pikirkan per perusahaan: bank khawatir soal penempatan dan ikatan dinas; Arunika soal kemampuan rantai pasok dan kelompok; KilatPay soal alat data dan kecepatan; Rumah Rempah soal sikap dan bertahan. Sebutkan fakta profil yang menjawab masing-masing."
          },
          "placeholder": {
           "en": "Bank Sinar Nusantara — (1) will she accept placement outside Java? evidence: none yet — needs a truthful answer · (2) no full-time experience: evidence — internship checklist still in use · (3) motivation for ODP vs a bigger bank: evidence — …\nArunika — …\nKilatPay — (1) SQL/Tableau: evidence — SQL course module 2 of 6, honest close …\nRumah Rempah — …",
           "id": "Bank Sinar Nusantara — (1) apakah ia menerima penempatan di luar Jawa? bukti: belum ada — butuh jawaban jujur · (2) belum ada pengalaman penuh waktu: bukti — daftar periksa magang masih dipakai · (3) motivasi ODP vs bank lebih besar: bukti — …\nArunika — …\nKilatPay — (1) SQL/Tableau: bukti — kursus SQL modul 2 dari 6, penutup jujur …\nRumah Rempah — …"
          },
          "keywords": [
           [
            "full-time",
            "penuh waktu",
            "experience",
            "pengalaman"
           ],
           [
            "placement",
            "penempatan",
            "java",
            "jawa"
           ],
           [
            "motivation",
            "motivasi",
            "first choice",
            "pilihan pertama",
            "accept",
            "menerima"
           ],
           [
            "ipk",
            "3,38",
            "3.38"
           ],
           [
            "operations",
            "operasi",
            "supply chain",
            "rantai pasok"
           ],
           [
            "sql",
            "excel",
            "tableau",
            "data"
           ],
           [
            "group",
            "kelompok",
            "lgd"
           ],
           [
            "stay",
            "bertahan",
            "stability",
            "stabilitas",
            "bond",
            "ikatan dinas"
           ],
           [
            "none yet",
            "belum ada"
           ],
           [
            "evidence",
            "bukti",
            "checklist",
            "daftar periksa",
            "audit",
            "sponsor"
           ]
          ]
         }
        ]
       },
       {
        "title": {
         "en": "Two-week preparation plan",
         "id": "Rencana persiapan dua minggu"
        },
        "short": {
         "en": "Plan",
         "id": "Rencana"
        },
        "guide": {
         "en": "Lessons 1.3 and 1.4, plus the calendar. Fourteen days, two hours each. Order the work by the nearest deadline and by reuse (what serves more than one process). Give a reason for each priority, name the module each item comes from, and say what Nadia does <i>not</i> prepare this fortnight.",
         "id": "Pelajaran 1.3 dan 1.4, plus kalender. Empat belas hari, dua jam masing-masing. Urutkan pekerjaan berdasarkan tenggat terdekat dan pemakaian ulang (yang melayani lebih dari satu proses). Beri alasan untuk tiap prioritas, sebutkan modul asal tiap butir, dan katakan apa yang <i>tidak</i> disiapkan Nadia dua minggu ini."
        },
        "questions": [
         {
          "id": "q3",
          "min": 120,
          "rows": 14,
          "title": {
           "en": "Day by day, with reasons",
           "id": "Hari demi hari, dengan alasan"
          },
          "help": {
           "en": "Days 1–2 before the phone screen; days 2–4 the KilatPay case; days 3–5 the one-way video; Core 10 stories running through (they serve every user round); LGD before any assessment centre. Say why each comes when it does.",
           "id": "Hari 1–2 sebelum seleksi telepon; hari 2–4 kasus KilatPay; hari 3–5 video satu arah; cerita Core 10 berjalan sepanjang waktu (melayani setiap ronde user); LGD sebelum assessment center mana pun. Katakan mengapa masing-masing datang saat itu."
          },
          "placeholder": {
           "en": "Day 1 (Mon): eligibility sentences — placement, bond, salary range, start date (Lesson 5.3, 1.4); decode all four invitations; 60-second opening draft. Reason: phone screen is Tuesday and tests eligibility, not stories.\nDay 2 (Tue): screen in the morning; afternoon — read the KilatPay case, clarify the question, structure (Module 6). Reason: nearest hard deadline.\nDay 3–4: …\nDay 5 (Fri): record the one-way video …\nDays 6–14: …\nNot this fortnight: …",
           "id": "Hari 1 (Sen): kalimat kelayakan — penempatan, ikatan dinas, rentang gaji, tanggal mulai (Pelajaran 5.3, 1.4); uraikan keempat undangan; draf pembuka 60 detik. Alasan: seleksi telepon hari Selasa dan menguji kelayakan, bukan cerita.\nHari 2 (Sel): seleksi pagi; sore — baca kasus KilatPay, klarifikasi pertanyaan, struktur (Modul 6). Alasan: tenggat keras terdekat.\nHari 3–4: …\nHari 5 (Jum): rekam video satu arah …\nHari 6–14: …\nTidak dua minggu ini: …"
          },
          "keywords": [
           [
            "deadline",
            "tenggat",
            "due",
            "jatuh tempo"
           ],
           [
            "one-way",
            "satu arah",
            "video",
            "timer",
            "pengatur waktu"
           ],
           [
            "case",
            "kasus",
            "kilatpay"
           ],
           [
            "group",
            "kelompok",
            "lgd"
           ],
           [
            "story",
            "cerita",
            "core 10",
            "star"
           ],
           [
            "eligibility",
            "kelayakan",
            "placement",
            "penempatan",
            "salary",
            "gaji"
           ],
           [
            "because",
            "karena",
            "reason",
            "alasan"
           ],
           [
            "day",
            "hari"
           ],
           [
            "not",
            "tidak",
            "later",
            "nanti",
            "skip"
           ]
          ]
         }
        ]
       },
       {
        "title": {
         "en": "One question per employer",
         "id": "Satu pertanyaan per perusahaan"
        },
        "short": {
         "en": "Questions",
         "id": "Pertanyaan"
        },
        "guide": {
         "en": "Lesson 1.4, section 4. For each employer, the one question Nadia should ask — at the stage she is in now — to learn the most about the stage ahead. The question must be answerable by that person, in the register of Lesson 9.1 of The Pack, and must not ask something the invitation already answered.",
         "id": "Pelajaran 1.4, bagian 4. Untuk tiap perusahaan, satu pertanyaan yang harus diajukan Nadia — pada tahap yang sedang ia jalani — untuk mengetahui tahap berikutnya sebanyak mungkin. Pertanyaan harus bisa dijawab orang itu, dalam register Pelajaran 9.1 The Pack, dan tidak boleh menanyakan yang sudah dijawab undangan."
        },
        "questions": [
         {
          "id": "q4",
          "min": 70,
          "rows": 8,
          "title": {
           "en": "Four questions, each to the right person",
           "id": "Empat pertanyaan, masing-masing ke orang yang tepat"
          },
          "help": {
           "en": "To the HR recruiter on Tuesday; to Dewi at KilatPay; to Arunika (there is no person yet — say where the question goes); to Wulan or Bu Ratna. Say what each answer would change in her preparation.",
           "id": "Ke rekruter HR hari Selasa; ke Dewi di KilatPay; ke Arunika (belum ada orangnya — katakan ke mana pertanyaannya); ke Wulan atau Bu Ratna. Katakan apa yang akan diubah tiap jawaban dalam persiapannya."
          },
          "placeholder": {
           "en": "Bank Sinar Nusantara (to HR, end of the screen): “Boleh saya tahu format LGD-nya — berapa orang per kelompok dan apakah topiknya diberikan di tempat?” → changes: how she practises Module 7.\nKilatPay (reply to Dewi): …\nArunika (to the recruiting address, once): …\nRumah Rempah (to Wulan): …",
           "id": "Bank Sinar Nusantara (ke HR, akhir seleksi): “Boleh saya tahu format LGD-nya — berapa orang per kelompok dan apakah topiknya diberikan di tempat?” → mengubah: cara ia melatih Modul 7.\nKilatPay (balasan ke Dewi): …\nArunika (ke alamat rekrutmen, sekali): …\nRumah Rempah (ke Wulan): …"
          },
          "keywords": [
           [
            "format",
            "durasi",
            "duration"
           ],
           [
            "lgd",
            "group",
            "kelompok",
            "assessment"
           ],
           [
            "case",
            "kasus",
            "slides",
            "data"
           ],
           [
            "aditya",
            "user",
            "interview",
            "wawancara"
           ],
           [
            "ratna",
            "wulan",
            "outlet",
            "lunch",
            "makan"
           ],
           [
            "changes",
            "mengubah",
            "so that",
            "agar",
            "prepare",
            "siapkan"
           ],
           [
            "boleh",
            "may i",
            "could"
           ]
          ]
         }
        ]
       },
       {
        "title": {
         "en": "Your own format map",
         "id": "Peta formatmu sendiri"
        },
        "short": {
         "en": "Your map",
         "id": "Petamu"
        },
        "guide": {
         "en": "The Kit item. For your Top 3 targets, one block each: the stages in order, who conducts each, what it tests, the format, what you will prepare and from which module, and whether you have practised it before. End with your three biggest uncertainties and the one question you will ask at your next stage.",
         "id": "Butir Perangkat. Untuk 3 sasaran teratasmu, satu blok masing-masing: tahap berurutan, siapa yang menjalankan, apa yang diuji, formatnya, apa yang akan kamu siapkan dan dari modul mana, dan apakah kamu pernah melatihnya. Akhiri dengan tiga ketidakpastian terbesarmu dan satu pertanyaan yang akan kamu ajukan di tahap berikutnya."
        },
        "questions": [
         {
          "id": "q5",
          "min": 120,
          "rows": 14,
          "title": {
           "en": "Three targets, every stage, never-practised marked",
           "id": "Tiga sasaran, setiap tahap, yang belum pernah dilatih ditandai"
          },
          "help": {
           "en": "If you do not yet know a target’s stages, write the pattern from Lesson 1.4 for its track and mark it “to confirm”. Mark every stage you have never practised. Save this map — Module 9 reads it back.",
           "id": "Jika kamu belum tahu tahap sebuah sasaran, tulis polanya dari Pelajaran 1.4 untuk jalurnya dan tandai “akan dikonfirmasi”. Tandai setiap tahap yang belum pernah kamu latih. Simpan peta ini — Modul 9 membacanya kembali."
          },
          "placeholder": {
           "en": "Target 1: [employer], [track] — (1) [stage] · [owner] · tests [ ] · format [ ] · prepare [ ] (Module …) · practised: never …\nTarget 2: …\nTarget 3: …\nMy three uncertainties: …\nMy next-stage question: …",
           "id": "Sasaran 1: [perusahaan], [jalur] — (1) [tahap] · [pemilik] · menguji [ ] · format [ ] · siapkan [ ] (Modul …) · pernah dilatih: belum …\nSasaran 2: …\nSasaran 3: …\nTiga ketidakpastian saya: …\nPertanyaan tahap berikutnya saya: …"
          },
          "keywords": [
           [
            "target",
            "sasaran"
           ],
           [
            "stage",
            "tahap"
           ],
           [
            "tests",
            "menguji",
            "eligibility",
            "kelayakan",
            "capability",
            "kemampuan",
            "fit",
            "kecocokan",
            "values",
            "nilai"
           ],
           [
            "format",
            "video",
            "phone",
            "telepon",
            "panel",
            "group",
            "kelompok",
            "in person",
            "tatap muka"
           ],
           [
            "module",
            "modul"
           ],
           [
            "never",
            "belum",
            "practised",
            "dilatih"
           ],
           [
            "uncertaint",
            "ketidakpastian"
           ],
           [
            "question",
            "pertanyaan"
           ]
          ]
         }
        ]
       }
      ],
      "rubric": [
       {
        "h": {
         "en": "Stage mapping — all four processes, every stage with its test and owner; the decisive round named",
         "id": "Pemetaan tahap — keempat proses, setiap tahap dengan ujian dan pemiliknya; ronde penentu disebut"
        },
        "w": "20%"
       },
       {
        "h": {
         "en": "Uncertainty audit — employer-specific, drawn from Nadia’s profile, each with evidence or “none yet”",
         "id": "Audit ketidakpastian — khas perusahaan, diambil dari profil Nadia, masing-masing dengan bukti atau “belum ada”"
        },
        "w": "20%"
       },
       {
        "h": {
         "en": "Preparation plan — ordered by deadline and reuse, fits 2 h/day, reasons given, modules named, something deliberately left out",
         "id": "Rencana persiapan — diurutkan berdasarkan tenggat dan pemakaian ulang, muat 2 jam/hari, alasan diberikan, modul disebut, ada yang sengaja ditinggalkan"
        },
        "w": "25%"
       },
       {
        "h": {
         "en": "Stage questions — one per employer, to the right person, in register, not already answered, with what it changes",
         "id": "Pertanyaan tahap — satu per perusahaan, ke orang yang tepat, dalam register, belum terjawab, dengan apa yang diubahnya"
        },
        "w": "15%"
       },
       {
        "h": {
         "en": "Your format map — three targets, every stage, never-practised marked, uncertainties and a next-stage question",
         "id": "Peta formatmu — tiga sasaran, setiap tahap, yang belum pernah dilatih ditandai, ketidakpastian dan pertanyaan tahap berikutnya"
        },
        "w": "20%"
       }
      ],
      "model": {
       "title": {
        "en": "Model notes — Nadia’s map and plan",
        "id": "Catatan model — peta dan rencana Nadia"
       },
       "body": [
        {
         "h": {
          "en": "The stages",
          "id": "Tahap"
         }
        },
        {
         "en": "Bank Sinar Nusantara: HR phone screen (eligibility — placement, two-year bond, salary, start) → psikotes and LGD (consistency; fit under observation) → user interview with the Kepala Cabang (capability; decisive) → panel with the Direktur Regional (values and commitment; short) → MCU and offer (eligibility again; the bond in writing). Arunika: one-way video (communication and structure under a timer; a screen, not a conversation) → assessment centre with LGD and a supply-chain case (fit and capability under observation) → user interview (capability; decisive) → final panel (values). KilatPay: recruiter chat, done → take-home case (capability; a written work sample) → user interview with Mr. Aditya (capability; decisive) → founder interview (values and fit). Rumah Rempah: owner lunch (trust, attitude, reliability — an SME interview in a relaxed register; still an interview) → probably a trial day → offer with a PKWT contract (Module 10).",
         "id": "Bank Sinar Nusantara: seleksi telepon HR (kelayakan — penempatan, ikatan dinas dua tahun, gaji, mulai) → psikotes dan LGD (konsistensi; kecocokan di bawah pengamatan) → wawancara user dengan Kepala Cabang (kemampuan; menentukan) → panel dengan Direktur Regional (nilai dan komitmen; singkat) → MCU dan tawaran (kelayakan lagi; ikatan dinas tertulis). Arunika: video satu arah (komunikasi dan struktur di bawah pengatur waktu; seleksi awal, bukan percakapan) → assessment center dengan LGD dan kasus rantai pasok (kecocokan dan kemampuan di bawah pengamatan) → wawancara user (kemampuan; menentukan) → panel akhir (nilai). KilatPay: obrolan rekruter, selesai → kasus take-home (kemampuan; contoh kerja tertulis) → wawancara user dengan Bapak Aditya (kemampuan; menentukan) → wawancara pendiri (nilai dan kecocokan). Rumah Rempah: makan siang pemilik (kepercayaan, sikap, keandalan — wawancara UKM dalam register santai; tetap wawancara) → mungkin hari percobaan → tawaran dengan kontrak PKWT (Modul 10)."
        },
        {
         "h": {
          "en": "The uncertainties",
          "id": "Ketidakpastian"
         }
        },
        {
         "en": "Bank: will she accept placement outside Java and a two-year bond (none yet — a truthful answer is needed before Tuesday, not a story); can a graduate with no full-time experience run branch operations (the internship checklist still in use; the terminal fix); is ODP her first choice or a fallback (she applied to ODP, not frontliner; the reconciliation work). Arunika: supply-chain capability from a management degree (the inventory-turnover thesis; the sponsorship logistics); performance in a group (none yet); will she stay through an 18-month rotation in Semarang and Bekasi (open to placement in Java; her family conversation). KilatPay: data tools (Excel pivot and VLOOKUP; SQL module 2 of 6, closed honestly; no Tableau — never claim it); speed and “measure everything” (the 30-minutes-a-day figure); startup pace (the barista rush). Rumah Rempah: attitude and reliability in a small team (four baristas trained; the pre-order board); will she leave for a bigger name in six months (her honest answer, and the question she asks Bu Ratna).",
         "id": "Bank: apakah ia menerima penempatan di luar Jawa dan ikatan dinas dua tahun (belum ada — jawaban jujur dibutuhkan sebelum Selasa, bukan cerita); bisakah lulusan tanpa pengalaman penuh waktu menjalankan operasional cabang (daftar periksa magang masih dipakai; perbaikan terminal); apakah ODP pilihan pertamanya atau cadangan (ia melamar ODP, bukan frontliner; kerja rekonsiliasi). Arunika: kemampuan rantai pasok dari gelar manajemen (skripsi inventory turnover; logistik sponsorship); kinerja dalam kelompok (belum ada); apakah ia bertahan sepanjang rotasi 18 bulan di Semarang dan Bekasi (bersedia penempatan di Jawa; pembicaraan keluarganya). KilatPay: alat data (Excel pivot dan VLOOKUP; SQL modul 2 dari 6, ditutup jujur; tanpa Tableau — jangan pernah klaim); kecepatan dan “ukur segalanya” (angka 30 menit per hari); ritme startup (jam sibuk barista). Rumah Rempah: sikap dan keandalan di tim kecil (empat barista dilatih; papan pra-pesan); apakah ia pergi ke nama lebih besar dalam enam bulan (jawaban jujurnya, dan pertanyaan yang ia ajukan ke Bu Ratna)."
        },
        {
         "h": {
          "en": "The plan",
          "id": "Rencana"
         }
        },
        {
         "en": "Day 1: decode the four invitations; write the four eligibility sentences (placement, bond, salary range, start date) and a 60-second opening draft — the screen is Tuesday and tests eligibility, not stories. Day 2: the screen; then the KilatPay case — clarify the question and set a structure (Module 6), because it is the nearest hard deadline and a written work sample. Day 3: KilatPay analysis and one page; evening, camera and sound test. Day 4: send KilatPay; record the one-way video answers with a 30-second prep timer, one retake maximum (Lesson 4.5). Day 5: submit the video; Sunday block: mine and draft the Core 10 (Module 2) — they serve every user round, so they start by day 5 even though no user interview is scheduled yet. Days 6–9: Core 10 to probe depth; Rumah Rempah research and two questions for Bu Ratna. Day 10: the lunch. Days 11–14: LGD practice (Module 7) before either assessment centre; technical five for KilatPay (Module 6); the difficult-case answer on IPK (Module 5). Not this fortnight: panel preparation (Module 8) and salary negotiation (Module 10) — nothing reaches those stages within fourteen days.",
         "id": "Hari 1: uraikan empat undangan; tulis empat kalimat kelayakan (penempatan, ikatan dinas, rentang gaji, tanggal mulai) dan draf pembuka 60 detik — seleksi hari Selasa dan menguji kelayakan, bukan cerita. Hari 2: seleksi; lalu kasus KilatPay — klarifikasi pertanyaan dan tetapkan struktur (Modul 6), karena tenggat keras terdekat dan contoh kerja tertulis. Hari 3: analisis KilatPay dan satu halaman; malam, uji kamera dan suara. Hari 4: kirim KilatPay; rekam jawaban video satu arah dengan pengatur waktu persiapan 30 detik, pengulangan maksimal satu (Pelajaran 4.5). Hari 5: kirim video; blok Minggu: tambang dan draf Core 10 (Modul 2) — melayani setiap ronde user, jadi dimulai sebelum hari 5 meski belum ada wawancara user terjadwal. Hari 6–9: Core 10 sampai kedalaman galian; riset Rumah Rempah dan dua pertanyaan untuk Bu Ratna. Hari 10: makan siang. Hari 11–14: latihan LGD (Modul 7) sebelum assessment center mana pun; lima teknis untuk KilatPay (Modul 6); jawaban kasus sulit tentang IPK (Modul 5). Tidak dua minggu ini: persiapan panel (Modul 8) dan negosiasi gaji (Modul 10) — tidak ada yang mencapai tahap itu dalam empat belas hari."
        },
        {
         "h": {
          "en": "The questions",
          "id": "Pertanyaan"
         }
        },
        {
         "en": "To HR at the end of the screen: “Boleh saya tahu format LGD-nya — berapa orang per kelompok, dan apakah topiknya diberikan di tempat?” — it changes how she practises Module 7. To Dewi, in the reply confirming the case: “Is there a preferred format — three slides or one page — and will Mr. Aditya be the reader?” — it changes the deliverable and tells her who probes it. To Arunika, once, at the recruiting address: “Is the assessment centre in Bahasa Indonesia or English, and is the case individual or group?” — it changes the language she rehearses in. To Wulan: “Apakah Bu Ratna ingin saya cerita soal pengalaman operasional, atau lebih ke kenalan dulu?” — it tells her whether to bring the one-page story or only her manners. A question that fails: asking the bank whether placement is nationwide — the invitation already said so.",
         "id": "Ke HR di akhir seleksi: “Boleh saya tahu format LGD-nya — berapa orang per kelompok, dan apakah topiknya diberikan di tempat?” — mengubah cara ia melatih Modul 7. Ke Dewi, dalam balasan mengonfirmasi kasus: “Is there a preferred format — three slides or one page — and will Mr. Aditya be the reader?” — mengubah hasil kerjanya dan memberitahu siapa yang menggalinya. Ke Arunika, sekali, ke alamat rekrutmen: “Is the assessment centre in Bahasa Indonesia or English, and is the case individual or group?” — mengubah bahasa yang ia latih. Ke Wulan: “Apakah Bu Ratna ingin saya cerita soal pengalaman operasional, atau lebih ke kenalan dulu?” — memberitahunya apakah membawa cerita satu halaman atau hanya tata kramanya. Pertanyaan yang gagal: menanyakan ke bank apakah penempatan nasional — undangan sudah mengatakannya."
        }
       ],
       "after": {
        "en": "Compare, do not copy. If your plan has no day marked for the Core 10, you have prepared for four processes and none of the user rounds. If your questions ask something the invitation already answered, re-read the invitations tab. If your own map has no “never practised” rows, look harder — the group discussion or the one-way video is usually there.",
        "id": "Bandingkan, jangan salin. Jika rencanamu tidak punya hari untuk Core 10, kamu bersiap untuk empat proses dan tidak untuk satu pun ronde user. Jika pertanyaanmu menanyakan yang sudah dijawab undangan, baca ulang tab undangan. Jika petamu sendiri tidak punya baris “belum pernah dilatih”, lihat lebih teliti — diskusi kelompok atau video satu arah biasanya ada di sana."
       }
      },
      "submit": {
       "title": {
        "en": "Review & submit",
        "id": "Tinjau & kumpulkan"
       },
       "short": {
        "en": "Submit",
        "id": "Kumpulkan"
       },
       "lead": {
        "en": "Read your five answers as Rina would on Monday morning, with Nadia’s calendar open. Submitting locks them on this device, opens the model notes, and saves your format map as the first Kit item.",
        "id": "Baca kelima jawabanmu seperti Rina pada Senin pagi, dengan kalender Nadia terbuka. Mengumpulkan menguncinya di perangkat ini, membuka catatan model, dan menyimpan peta formatmu sebagai butir Perangkat pertama."
       },
       "button": {
        "en": "Submit the case",
        "id": "Kumpulkan kasus"
       },
       "doneTitle": {
        "en": "Case submitted",
        "id": "Kasus terkumpul"
       },
       "doneBody": {
        "en": "Your answers are locked on this device. Compare with the model notes, then run Round 1 in the simulator — the diagnostic baseline — before you start Module 2.",
        "id": "Jawabanmu terkunci di perangkat ini. Bandingkan dengan catatan model, lalu jalankan Putaran 1 di simulator — garis dasar diagnostik — sebelum memulai Modul 2."
       }
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Mapping the generic track instead of the invitation",
         "id": "Memetakan jalur generik alih-alih undangan"
        },
        "fix": {
         "en": "The invitation names the stages; the table is only the pattern.",
         "id": "Undangan menyebut tahapnya; tabel hanya polanya."
        }
       },
       {
        "h": {
         "en": "Uncertainties that could be about any graduate",
         "id": "Ketidakpastian yang bisa tentang lulusan mana pun"
        },
        "fix": {
         "en": "Draw each one from a line in her profile.",
         "id": "Ambil masing-masing dari satu baris di profilnya."
        }
       },
       {
        "h": {
         "en": "A plan that prepares for all four equally",
         "id": "Rencana yang menyiapkan keempatnya sama rata"
        },
        "fix": {
         "en": "Deadline first, reuse second; say what you leave out.",
         "id": "Tenggat dulu, pemakaian ulang kedua; katakan yang kamu tinggalkan."
        }
       },
       {
        "h": {
         "en": "Questions the invitation already answered",
         "id": "Pertanyaan yang sudah dijawab undangan"
        },
        "fix": {
         "en": "Ask about the stage ahead, to the person who can answer.",
         "id": "Tanyakan tahap berikutnya, ke orang yang bisa menjawab."
        }
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "Format map",
        "id": "Peta format"
       },
       "def": {
        "en": "The Kit item: every stage of every target, with owner, test, format, preparation and whether you have practised it.",
        "id": "Butir Perangkat: setiap tahap dari setiap sasaran, dengan pemilik, ujian, format, persiapan, dan apakah kamu pernah melatihnya."
       }
      },
      {
       "term": {
        "en": "Uncertainty audit",
        "id": "Audit ketidakpastian"
       },
       "def": {
        "en": "The three things a specific employer is unsure about in your specific case, each with evidence or “none yet”.",
        "id": "Tiga hal yang tidak pasti bagi perusahaan tertentu dalam kasusmu, masing-masing dengan bukti atau “belum ada”."
       }
      },
      {
       "term": {
        "en": "Reuse",
        "id": "Pemakaian ulang"
       },
       "def": {
        "en": "Preparation that serves more than one process — the Core 10 stories serve every user round.",
        "id": "Persiapan yang melayani lebih dari satu proses — cerita Core 10 melayani setiap ronde user."
       }
      },
      {
       "term": {
        "en": "Interview Kit",
        "id": "Perangkat Wawancara"
       },
       "def": {
        "en": "The Rope’s equivalent of the Pack Dossier: one finished item per module, starting with this map.",
        "id": "Padanan Dossier The Pack di The Rope: satu butir jadi per modul, dimulai dari peta ini."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Nadia’s nearest hard deadline is the KilatPay case in four days, but her first scheduled contact is the bank screen on Tuesday. Day 1 goes to…",
        "id": "Tenggat keras terdekat Nadia adalah kasus KilatPay dalam empat hari, tetapi kontak terjadwal pertamanya adalah seleksi bank hari Selasa. Hari 1 untuk…"
       },
       "options": [
        {
         "en": "The KilatPay case — the deadline is hardest",
         "id": "Kasus KilatPay — tenggatnya paling keras"
        },
        {
         "en": "The four eligibility sentences and the invitations — the screen tests eligibility and is first",
         "id": "Empat kalimat kelayakan dan undangan — seleksi menguji kelayakan dan datang lebih dulu"
        },
        {
         "en": "Core 10 stories — they serve everything",
         "id": "Cerita Core 10 — melayani semuanya"
        },
        {
         "en": "LGD practice — she has never done one",
         "id": "Latihan LGD — ia belum pernah"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Order by the nearest event and what it tests; the screen needs four truthful sentences, not a case or a story.",
        "id": "Urutkan berdasarkan acara terdekat dan apa yang diujinya; seleksi butuh empat kalimat jujur, bukan kasus atau cerita."
       }
      },
      {
       "q": {
        "en": "Which uncertainty is employer-specific rather than generic?",
        "id": "Ketidakpastian mana yang khas perusahaan, bukan generik?"
       },
       "options": [
        {
         "en": "“She is a fresh graduate”",
         "id": "“Ia lulusan baru”"
        },
        {
         "en": "“Will she accept placement outside Java for a two-year bond?” — for the bank",
         "id": "“Apakah ia menerima penempatan di luar Jawa dengan ikatan dinas dua tahun?” — untuk bank"
        },
        {
         "en": "“Is she a team player?”",
         "id": "“Apakah ia pemain tim?”"
        },
        {
         "en": "“Is she confident?”",
         "id": "“Apakah ia percaya diri?”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "It comes from the invitation and her profile (“has not yet decided about placement”), and it needs a truthful answer, not a story.",
        "id": "Berasal dari undangan dan profilnya (“belum memutuskan soal penempatan”), dan butuh jawaban jujur, bukan cerita."
       }
      },
      {
       "q": {
        "en": "The best question to Wulan before the Rumah Rempah lunch is…",
        "id": "Pertanyaan terbaik ke Wulan sebelum makan siang Rumah Rempah adalah…"
       },
       "options": [
        {
         "en": "“Berapa gajinya?”",
         "id": "“Berapa gajinya?”"
        },
        {
         "en": "“Apakah Bu Ratna ingin saya cerita soal pengalaman operasional, atau lebih ke kenalan dulu?”",
         "id": "“Apakah Bu Ratna ingin saya cerita soal pengalaman operasional, atau lebih ke kenalan dulu?”"
        },
        {
         "en": "“Apakah ini wawancara?”",
         "id": "“Apakah ini wawancara?”"
        },
        {
         "en": "No question — it is informal",
         "id": "Tanpa pertanyaan — ini informal"
        }
       ],
       "correct": 1,
       "why": {
        "en": "It is answerable by Wulan, in register, not already answered, and it changes what Nadia brings.",
        "id": "Bisa dijawab Wulan, dalam register, belum terjawab, dan mengubah apa yang dibawa Nadia."
       }
      }
     ],
     "tryit": {
      "qid": "hr01",
      "set": [
       "hr01",
       "beh_learning_new_tool",
       "beh_plan_fell_apart",
       "mot_why_programme",
       "diff_ipk_threshold",
       "close_any_questions"
      ],
      "persona": "hr",
      "profile": "mixed",
      "returnTo": 1,
      "label": {
       "en": "Round 1 · Diagnostic session (baseline)",
       "id": "Putaran 1 · Sesi diagnostik (garis dasar)"
      },
      "desc": {
       "en": "Six questions — an opening, two behavioural, one motivational, one difficult, one closing — at standard difficulty. Do not prepare specially. The scores become your baseline; Module 9 compares every later session to it.",
       "id": "Enam pertanyaan — pembuka, dua perilaku, satu motivasional, satu sulit, satu penutup — pada tingkat standar. Jangan bersiap khusus. Skornya menjadi garis dasarmu; Modul 9 membandingkan setiap sesi berikutnya dengannya."
      }
     },
     "tool": {
      "id": "simulator",
      "mode": "history",
      "title": {
       "en": "Your baseline, on record",
       "id": "Garis dasarmu, tercatat"
      },
      "body": {
       "en": "After Round 1, open the session history and note three numbers for the Kit: your content, structure and communication scores. Module 9’s improvement log starts from them. If you skipped Round 1, run it now — a baseline you did not measure cannot show improvement later.",
       "id": "Setelah Putaran 1, buka riwayat sesi dan catat tiga angka untuk Perangkat: skor isi, struktur, dan komunikasimu. Catatan perbaikan Modul 9 dimulai darinya. Jika kamu melewatkan Putaran 1, jalankan sekarang — garis dasar yang tidak diukur tidak bisa menunjukkan perbaikan nanti."
      },
      "cta": {
       "en": "Open session history →",
       "id": "Buka riwayat sesi →"
      }
     },
     "takeaways": [
      {
       "en": "Map the invitation, not the generic track; every stage names a test.",
       "id": "Petakan undangannya, bukan jalur generik; setiap tahap menyebut ujian."
      },
      {
       "en": "Order preparation by the nearest deadline, then by reuse — and say what you leave out.",
       "id": "Urutkan persiapan berdasarkan tenggat terdekat, lalu pemakaian ulang — dan katakan yang kamu tinggalkan."
      },
      {
       "en": "Your format map is the first Kit item; Round 1 is the baseline everything is measured against.",
       "id": "Peta formatmu adalah butir Perangkat pertama; Putaran 1 adalah garis dasar tempat semuanya diukur."
      }
     ],
     "journey": {
      "before": {
       "label": {
        "en": "Lessons 1.1–1.4",
        "id": "Pelajaran 1.1–1.4"
       },
       "desc": {
        "en": "What the interviewer decides, how answers are scored, the seven types and hidden concerns, the Indonesian stages.",
        "id": "Apa yang diputuskan pewawancara, bagaimana jawaban dinilai, tujuh tipe dan kekhawatiran tersembunyi, tahap-tahap Indonesia."
       }
      },
      "now": {
       "label": {
        "en": "1.5 · Map Nadia’s four processes",
        "id": "1.5 · Petakan empat proses Nadia"
       },
       "desc": {
        "en": "You have mapped four processes, audited the uncertainties, planned two weeks, written four questions and built your own format map.",
        "id": "Kamu sudah memetakan empat proses, mengaudit ketidakpastian, merencanakan dua minggu, menulis empat pertanyaan, dan membangun peta formatmu sendiri."
       }
      },
      "next": {
       "label": {
        "en": "Module 2 · Your Story Bank",
        "id": "Modul 2 · Bank Ceritamu"
       },
       "desc": {
        "en": "Ten real stories, each prepared to survive three levels of follow-up — the evidence every stage on your map will ask for.",
        "id": "Sepuluh cerita nyata, masing-masing disiapkan untuk bertahan tiga tingkat pertanyaan lanjutan — bukti yang akan diminta setiap tahap di petamu."
       },
       "lesson": "2.1"
      }
     }
    }
   ]
  },
  {
   "num": 2,
   "phase": "prepare",
   "title": {
    "en": "Your Story Bank",
    "id": "Bank Ceritamu"
   },
   "overview": {
    "en": "Interviewers get past rehearsed answers with follow-up questions, and a story that was exaggerated or borrowed collapses on the second probe. This module builds a bank of ten real stories in STAR+L form, each tagged to competencies and prepared to survive three levels of follow-up — and teaches you to retell any of them at three lengths and from different angles. Ten, not thirty: the research consensus and a fresh graduate’s history both point to a small bank prepared deeply.",
    "id": "Pewawancara menembus jawaban hafalan dengan pertanyaan lanjutan, dan cerita yang dilebih-lebihkan atau dipinjam runtuh pada galian kedua. Modul ini membangun bank sepuluh cerita nyata dalam bentuk STAR+L, masing-masing ditandai kompetensi dan disiapkan untuk bertahan tiga tingkat pertanyaan lanjutan — dan mengajarimu menceritakannya kembali dalam tiga panjang dan dari sudut berbeda. Sepuluh, bukan tiga puluh: konsensus riset dan riwayat lulusan baru sama-sama menunjuk ke bank kecil yang disiapkan mendalam."
   },
   "outcome": {
    "en": "By the end of this module you have a bank of ten real, tagged stories in STAR+L format, each prepared to survive three levels of follow-up questioning, and can retell any of them at three lengths (20 seconds, 60–90 seconds, 3 minutes) and adapt it to different competency questions.",
    "id": "Di akhir modul ini kamu punya bank sepuluh cerita nyata bertanda dalam format STAR+L, masing-masing disiapkan untuk bertahan tiga tingkat pertanyaan lanjutan, dan bisa menceritakan kembali salah satunya dalam tiga panjang (20 detik, 60–90 detik, 3 menit) dan menyesuaikannya dengan pertanyaan kompetensi berbeda."
   },
   "kit": {
    "en": "Core 10 story bank (STAR+L, tagged, each with 3 prepared follow-ups)",
    "id": "Bank cerita Core 10 (STAR+L, bertanda, masing-masing dengan 3 pertanyaan lanjutan yang disiapkan)"
   },
   "lessons": [
    {
     "n": "2.1",
     "title": {
      "en": "The STAR-L Framework",
      "id": "Kerangka STAR-L"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Context → Challenge → Action → Result → Learning. STAR-L is STAR with the piece interviewers remember most: what changed in you. This lesson teaches the spine, its proportions, and the anti-formula warning — the framework is scaffolding for truth, not a script for reciting.",
      "id": "Konteks → Tantangan → Tindakan → Hasil → Pembelajaran. STAR-L adalah STAR ditambah bagian yang paling diingat pewawancara: apa yang berubah dalam dirimu. Pelajaran ini mengajarkan tulang punggungnya, proporsinya, dan peringatan anti-rumus — kerangka ini adalah perancah untuk kebenaran, bukan naskah untuk dihafal."
     },
     "objectives": [
      {
       "en": "Structure any experience as Context → Challenge → Action → Result → Learning.",
       "id": "Menyusun pengalaman apa pun menjadi Konteks → Tantangan → Tindakan → Hasil → Pembelajaran."
      },
      {
       "en": "Apply the proportions: one sentence of setup, the bulk on action, a measured result.",
       "id": "Menerapkan proporsinya: satu kalimat latar, porsi terbesar untuk tindakan, hasil yang terukur."
      },
      {
       "en": "Avoid the robotic-STAR failure mode that makes rehearsed candidates forgettable.",
       "id": "Menghindari jebakan STAR yang kaku, yang membuat kandidat hafalan mudah dilupakan."
      }
     ],
     "takeawaysLead": {
      "en": "STAR-L is scaffolding for truth, not a script. To let the structure live under natural speech, you can:",
      "id": "STAR-L adalah perancah bagi kebenaran, bukan naskah. Agar strukturnya hidup di balik tutur yang alami, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Setup is one sentence; the action is the story; the result is a number; the learning is the gift.",
       "id": "Latar cukup satu kalimat; tindakan adalah ceritanya; hasil adalah sebuah angka; pembelajaran adalah hadiahnya."
      },
      {
       "en": "STAR-L organises truth — it never replaces it. If the structure shows, soften it.",
       "id": "STAR-L merapikan kebenaran — tidak pernah menggantikannya. Kalau strukturnya sampai terlihat, lunakkan."
      },
      {
       "en": "The learning line is what separates a good answer from a memorable one.",
       "id": "Kalimat pembelajaran adalah pembeda antara jawaban yang baik dan jawaban yang diingat."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "The spine",
        "id": "Tulang punggungnya"
       },
       "body": {
        "en": "Context: where and when, one sentence. Challenge: what made it hard, one sentence. Action: what you — first person singular — actually did, in sequence, most of the answer. Result: what changed, with a number wherever truthful. Learning: the one-line principle you carry forward. Sixty to a hundred and fifty words covers it; two minutes is the ceiling.",
        "id": "Konteks: di mana dan kapan, satu kalimat. Tantangan: apa yang membuatnya sulit, satu kalimat. Tindakan: apa yang benar-benar kamu — “saya”, bukan “kami” — lakukan, secara berurutan; ini porsi terbesar jawaban. Hasil: apa yang berubah, dengan angka di mana pun angka itu jujur. Pembelajaran: prinsip satu baris yang kamu bawa ke depan. Enam puluh sampai seratus lima puluh kata sudah cukup; dua menit adalah batas atasnya."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "Why the L matters",
        "id": "Mengapa huruf L itu penting"
       },
       "body": {
        "en": "Result proves competence; learning proves growth. Interviewers hiring for potential — which is every interviewer hiring below executive level — weigh the learning line heavily. It shows a mind that converts experience into principle. Without it, even a great story is a closed file; with it, the story predicts your future behaviour.",
        "id": "Hasil membuktikan kompetensi; pembelajaran membuktikan pertumbuhan. Pewawancara yang merekrut berdasarkan potensi — dan itu berarti semua pewawancara di bawah level eksekutif — memberi bobot besar pada kalimat pembelajaran. Kalimat itu menunjukkan pikiran yang mampu mengubah pengalaman menjadi prinsip. Tanpanya, cerita yang hebat pun hanya berkas yang sudah ditutup; dengannya, cerita itu meramalkan perilakumu di masa depan."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "The anti-formula warning",
        "id": "Peringatan anti-rumus"
       },
       "body": {
        "en": "Interviewers hear STAR performed robotically many times a week: “The Situation was… The Task was…”. Never announce the labels. Let the structure live underneath natural speech — a story told by a person, organised by a framework the listener never sees. If you sound like a template, the content stops being believed.",
        "id": "Pewawancara mendengar STAR dibawakan seperti robot berkali-kali dalam seminggu: “Situasinya adalah… Tugasnya adalah…”. Jangan pernah mengumumkan labelnya. Biarkan strukturnya hidup di bawah tutur yang alami — sebuah cerita yang dituturkan seorang manusia, dirapikan oleh kerangka yang tidak pernah terlihat oleh pendengarnya. Kalau kamu terdengar seperti templat, isinya berhenti dipercaya."
       },
       "icon": "target"
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "STAR-L — the narrative spine and its proportions",
       "id": "STAR-L — tulang punggung narasi dan proporsinya"
      },
      "items": [
       {
        "h": {
         "en": "Context",
         "id": "Konteks"
        },
        "sub": {
         "en": "1 sentence — where and when",
         "id": "1 kalimat — di mana dan kapan"
        }
       },
       {
        "h": {
         "en": "Challenge",
         "id": "Tantangan"
        },
        "sub": {
         "en": "1 sentence — what made it hard",
         "id": "1 kalimat — apa yang membuatnya sulit"
        }
       },
       {
        "h": {
         "en": "Action",
         "id": "Tindakan"
        },
        "sub": {
         "en": "The bulk — what YOU did, in sequence",
         "id": "Porsi terbesar — apa yang KAMU lakukan, berurutan"
        }
       },
       {
        "h": {
         "en": "Result",
         "id": "Hasil"
        },
        "sub": {
         "en": "1–2 sentences — with a number",
         "id": "1–2 kalimat — dengan angka"
        }
       },
       {
        "h": {
         "en": "Learning",
         "id": "Pembelajaran"
        },
        "sub": {
         "en": "1 line — the principle you keep",
         "id": "1 baris — prinsip yang kamu simpan"
        }
       }
      ],
      "note": {
       "en": "60–150 words covers it. If the labels show, soften them — the framework organises truth, it never performs it.",
       "id": "60–150 kata sudah cukup. Kalau labelnya sampai terlihat, lunakkan — kerangka ini merapikan kebenaran, bukan mempertontonkannya."
      },
      "exhibit": {
       "en": "Exhibit 1: STAR-L — the narrative spine and its proportions",
       "id": "Peraga 1: STAR-L — tulang punggung narasi dan proporsinya"
      },
      "longdesc": {
       "en": "Diagram of STAR-L — the narrative spine and its proportions. It presents, in order: Context — 1 sentence — where and when; Challenge — 1 sentence — what made it hard; Action — The bulk — what YOU did, in sequence; Result — 1–2 sentences — with a number; Learning — 1 line — the principle you keep.",
       "id": "Diagram STAR-L — tulang punggung narasi dan proporsinya. Menyajikan, secara berurutan: Konteks — 1 kalimat, di mana dan kapan; Tantangan — 1 kalimat, apa yang membuatnya sulit; Tindakan — porsi terbesar, apa yang KAMU lakukan, berurutan; Hasil — 1–2 kalimat, dengan angka; Pembelajaran — 1 baris, prinsip yang kamu simpan."
      }
     },
     "compare": [
      {
       "tag": {
        "en": "“What achievement are you most proud of?”",
        "id": "“Pencapaian apa yang paling Anda banggakan?”"
       },
       "weak": {
        "en": "I'm most proud of my final-year project. It was really challenging and we worked very hard as a team, and in the end it went well and the lecturers liked it.",
        "id": "Saya paling bangga dengan proyek tugas akhir saya. Proyeknya sangat menantang dan kami bekerja sangat keras sebagai tim, dan pada akhirnya berjalan baik dan para dosen menyukainya."
       },
       "strong": {
        "en": "In my final year, our team's research app had zero users two months before the deadline. I took over user recruitment, partnered with three student communities, and ran weekly feedback cycles. We ended with 400 active users, and the project scored highest in our cohort. I learned that distribution is a feature — I now plan it from day one.",
        "id": "Di tahun terakhir kuliah, aplikasi riset tim kami masih nol pengguna dua bulan sebelum tenggat. Saya mengambil alih perekrutan pengguna, menggandeng tiga komunitas mahasiswa, dan menjalankan siklus umpan balik mingguan. Kami menutup proyek dengan 400 pengguna aktif, dan mendapat nilai tertinggi di angkatan. Saya belajar bahwa distribusi adalah bagian dari produk — sekarang saya merencanakannya sejak hari pertama."
       },
       "why": {
        "en": "Same project, different machinery: one sentence of setup, first-person actions, a number, a learning. Nothing is invented — it is organised.",
        "id": "Proyek yang sama, mesin yang berbeda: satu kalimat latar, tindakan dengan subjek “saya”, satu angka, satu pembelajaran. Tidak ada yang dikarang — semuanya hanya dirapikan."
       }
      }
     ],
     "tryit": {
      "qid": "bh21",
      "label": {
       "en": "Tell your proudest story, timed",
       "id": "Ceritakan pencapaian kebanggaanmu, dengan pewaktu"
      },
      "desc": {
       "en": "Run this exact question in the simulator — it will read your STAR beats and your landing.",
       "id": "Jalankan pertanyaan yang persis sama ini di simulator — ia akan membaca ketukan STAR-mu dan cara kamu menutup."
      }
     },
     "scenario": {
      "icon": "book",
      "img": "../../assets/bg/fg-stage-ascent.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat dalam Sorotan"
      },
      "body": [
       {
        "en": "Sari has run operations for a family restaurant for two years and swears she “has no interview stories — it's just daily work.” Then a mentor asks: “Tell me about the worst Saturday.” Out comes a fully-formed story — a double-booked event, a supplier failure at noon, a decision to move the whole party forward an hour, and a customer who still writes to her. It was never a lack of stories. It was a lack of mining.",
        "id": "Sari sudah dua tahun mengelola operasional restoran keluarga dan bersikeras ia “tidak punya cerita untuk wawancara — semuanya cuma kerja harian.” Lalu seorang mentor bertanya: “Ceritakan hari Sabtu terburukmu.” Keluarlah sebuah cerita yang utuh — acara yang jadwalnya bentrok, pemasok yang gagal kirim tepat tengah hari, keputusan memajukan seluruh acara satu jam, dan seorang pelanggan yang sampai sekarang masih mengiriminya pesan. Masalahnya bukan pernah kekurangan cerita. Yang kurang adalah menambangnya."
       },
       {
        "en": "This module gives you the mining protocol Sari used — and the STAR-L spine that turns what you find into answers interviewers write down.",
        "id": "Modul ini memberimu protokol penambangan yang dipakai Sari — dan tulang punggung STAR-L yang mengubah apa yang kamu temukan menjadi jawaban yang dicatat pewawancara."
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "STAR-L",
        "id": "STAR-L"
       },
       "def": {
        "en": "Context → Challenge → Action → Result → Learning: the narrative spine for behavioral answers.",
        "id": "Konteks → Tantangan → Tindakan → Hasil → Pembelajaran: tulang punggung narasi untuk jawaban pertanyaan perilaku."
       }
      },
      {
       "term": {
        "en": "learning line",
        "id": "baris pembelajaran"
       },
       "def": {
        "en": "The final beat of STAR-L: what changed in you. Result proves competence; the learning line proves growth, which is what interviewers hiring for potential weigh most.",
        "id": "Ketukan terakhir STAR-L: apa yang berubah dalam dirimu. Hasil membuktikan kompetensi; baris pembelajaran membuktikan pertumbuhan, yang paling ditimbang pewawancara yang merekrut untuk potensi."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Announcing the framework: “The Situation was… the Task was…”",
         "id": "Mengumumkan kerangkanya: “Situasinya adalah… Tugasnya adalah…”"
        },
        "fix": {
         "en": "Let STAR-L live under natural speech — the listener should feel structure, never see labels.",
         "id": "Biarkan STAR-L hidup di bawah tutur yang alami — pendengar seharusnya merasakan strukturnya, tidak pernah melihat labelnya."
        }
       },
       {
        "h": {
         "en": "Spending a minute on context",
         "id": "Menghabiskan satu menit untuk konteks"
        },
        "fix": {
         "en": "One sentence of setup. If your first action verb hasn't arrived by second twenty, restart.",
         "id": "Latar cukup satu kalimat. Kalau kata kerja tindakan pertamamu belum muncul di detik kedua puluh, mulai ulang."
        }
       },
       {
        "h": {
         "en": "Ending on the result and trailing off",
         "id": "Berhenti di hasil, lalu suaranya menghilang"
        },
        "fix": {
         "en": "Land the learning line — it is the sentence interviewers quote when they argue for you.",
         "id": "Daratkan kalimat pembelajarannya — itulah kalimat yang dikutip pewawancara saat mereka membelamu di debrief."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "Where should most of your speaking time go in a STAR-L answer?",
        "id": "Ke mana sebagian besar waktu bicaramu seharusnya pergi dalam jawaban STAR-L?"
       },
       "options": [
        {
         "en": "The result, repeated in several different ways",
         "id": "Ke hasilnya, diulang dengan beberapa cara yang berbeda"
        },
        {
         "en": "The actions you personally took",
         "id": "Ke tindakan yang kamu ambil sendiri"
        },
        {
         "en": "The context, so the interviewer fully understands the situation",
         "id": "Ke konteksnya, supaya pewawancara benar-benar paham situasinya"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Correct — context in one line, then spend the answer on what you did. Actions carry the evidence.",
        "id": "Benar — konteks cukup satu kalimat, lalu habiskan jawabanmu untuk apa yang kamu lakukan. Tindakanlah yang membawa bukti."
       }
      }
     ],
     "insights": {
      "lead": {
       "en": "Why STAR-L, and why the L.",
       "id": "Mengapa STAR-L, dan mengapa L-nya."
      },
      "items": [
       {
        "h": {
         "en": "The learning line is what gets written down",
         "id": "Baris pembelajaran adalah yang dicatat"
        },
        "body": {
         "en": "Result lines are expected; learning lines are remembered. “Since then I always confirm the data owner before I build” is the sentence that shows growth — and it fits in a note.",
         "id": "Baris hasil sudah diharapkan; baris pembelajaran diingat. “Sejak itu saya selalu memastikan pemilik data sebelum membangun” adalah kalimat yang menunjukkan pertumbuhan — dan muat dalam catatan."
        }
       },
       {
        "h": {
         "en": "Proportion beats completeness",
         "id": "Proporsi mengalahkan kelengkapan"
        },
        "body": {
         "en": "Context in two sentences, action in five, result in two, learning in one. Candidates lose interviewers in the context because they narrate the whole project before the problem appears.",
         "id": "Konteks dua kalimat, tindakan lima, hasil dua, pembelajaran satu. Kandidat kehilangan perhatian pewawancara di bagian konteks karena menarasikan seluruh proyek sebelum masalahnya muncul."
        }
       },
       {
        "h": {
         "en": "“I” is not arrogance",
         "id": "“Saya” bukan kesombongan"
        },
        "body": {
         "en": "A story told entirely in “we” cannot be scored for you. Say what the team did once, then what you personally decided and did.",
         "id": "Cerita yang seluruhnya memakai “kami” tak bisa dinilai untukmu. Katakan apa yang tim lakukan sekali, lalu apa yang secara pribadi kamu putuskan dan lakukan."
        }
       }
      ]
     },
     "resources": {
      "items": [
       {
        "kind": "template",
        "title": {
         "en": "STAR-L story card",
         "id": "Kartu cerita STAR-L"
        },
        "desc": {
         "en": "One card per story. Fill every line; then cut it to 90 seconds aloud.",
         "id": "Satu kartu per cerita. Isi setiap baris; lalu pangkas sampai 90 detik saat diucapkan."
        },
        "body": [
         {
          "en": "TITLE (how I will remember it): …",
          "id": "JUDUL (cara aku mengingatnya): …"
         },
         {
          "en": "CONTEXT (2 sentences): where, when, my role, what was at stake",
          "id": "KONTEKS (2 kalimat): di mana, kapan, peranku, apa yang dipertaruhkan"
         },
         {
          "en": "CHALLENGE (1 sentence): the specific problem or tension",
          "id": "TANTANGAN (1 kalimat): masalah atau ketegangan spesifiknya"
         },
         {
          "en": "ACTION (3–5 sentences, “I”): what I decided, what I did, one obstacle handled",
          "id": "TINDAKAN (3–5 kalimat, “saya”): yang kuputuskan, yang kulakukan, satu hambatan yang ditangani"
         },
         {
          "en": "RESULT (1–2 sentences): number, artefact or recognition; what happened next",
          "id": "HASIL (1–2 kalimat): angka, artefak, atau pengakuan; apa yang terjadi setelahnya"
         },
         {
          "en": "LEARNING (1 sentence): what I do differently since",
          "id": "PEMBELAJARAN (1 kalimat): apa yang kulakukan berbeda sejak itu"
         },
         {
          "en": "TAGS (competencies this story proves): …  |  ALTITUDES: peer / manager / executive versions drafted?",
          "id": "TAG (kompetensi yang dibuktikan cerita ini): …  |  KETINGGIAN: versi rekan / manajer / eksekutif sudah disusun?"
         }
        ]
       }
      ]
     },
     "migratedFrom": "the-rope:2.1"
    },
    {
     "n": "2.2",
     "title": {
      "en": "The 10 Universal Competency Categories",
      "id": "10 Kategori Kompetensi Universal"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Thousands of behavioral questions reduce to roughly ten competencies. Learn the ten, and no question is truly new — it is one of your tagged stories wearing different words. This lesson names each category, its signature question shapes, and what a strong answer must contain.",
      "id": "Ribuan pertanyaan perilaku bisa diringkas menjadi kira-kira sepuluh kompetensi. Kuasai sepuluh itu, dan tidak ada lagi pertanyaan yang benar-benar baru — semuanya hanya salah satu ceritamu yang sudah berlabel, mengenakan kata-kata yang berbeda. Pelajaran ini menamai setiap kategori, bentuk pertanyaan khasnya, dan apa yang wajib ada dalam jawaban yang kuat."
     },
     "objectives": [
      {
       "en": "Name the ten competency categories behind most behavioral questions.",
       "id": "Menyebutkan sepuluh kategori kompetensi di balik sebagian besar pertanyaan perilaku."
      },
      {
       "en": "Recognise which competency a question is probing regardless of its wording.",
       "id": "Mengenali kompetensi mana yang sedang digali sebuah pertanyaan, apa pun susunan katanya."
      },
      {
       "en": "Tag your own stories by the competencies they evidence.",
       "id": "Memberi label pada cerita-ceritamu sendiri berdasarkan kompetensi yang dibuktikannya."
      }
     ],
     "takeawaysLead": {
      "en": "Thousands of behavioural questions reduce to ten competencies. To hear the probe through the costume, you can:",
      "id": "Ribuan pertanyaan perilaku menyusut menjadi sepuluh kompetensi. Untuk mendengar sasaran di balik kostumnya, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Every behavioral question is a competency probe wearing costume; identify the competency and retrieval becomes instant.",
       "id": "Setiap pertanyaan perilaku adalah uji kompetensi yang memakai kostum; kenali kompetensinya, dan memanggil cerita yang tepat menjadi seketika."
      },
      {
       "en": "One strong story usually evidences two or three competencies — tag it for all of them.",
       "id": "Satu cerita yang kuat biasanya membuktikan dua atau tiga kompetensi — beri label untuk semuanya."
      },
      {
       "en": "Coverage beats volume: eight stories covering ten categories outperform thirty untagged anecdotes.",
       "id": "Cakupan mengalahkan jumlah: delapan cerita yang menutup sepuluh kategori mengungguli tiga puluh anekdot tanpa label."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "The ten",
        "id": "Sepuluh kategorinya"
       },
       "body": {
        "en": "1 Leadership & influence. 2 Ownership & initiative. 3 Conflict & difficult people. 4 Resilience & failure. 5 Communication & persuasion. 6 Prioritisation under pressure. 7 Learning agility. 8 Judgment & decision-making. 9 Collaboration across differences. 10 Integrity & courage. Nearly every “tell me about a time…” lives in one of these rooms.",
        "id": "1 Kepemimpinan & pengaruh. 2 Rasa memiliki & inisiatif. 3 Konflik & orang yang sulit. 4 Ketangguhan & kegagalan. 5 Komunikasi & persuasi. 6 Menentukan prioritas di bawah tekanan. 7 Kelincahan belajar. 8 Pertimbangan & pengambilan keputusan. 9 Kolaborasi lintas perbedaan. 10 Integritas & keberanian. Hampir setiap “ceritakan saat Anda…” tinggal di salah satu ruangan ini."
       }
      },
      {
       "h": {
        "en": "Hearing through the costume",
        "id": "Mendengar menembus kostumnya"
       },
       "body": {
        "en": "“Describe a time you exceeded expectations” is ownership. “Have you worked with someone difficult?” is conflict. “What would you do with two deadlines?” is prioritisation, even in hypothetical clothes. Train the reflex: on hearing any question, silently name the category first. The half-second of classification buys you the right story instead of the nearest one.",
        "id": "“Ceritakan saat Anda melampaui ekspektasi” adalah rasa memiliki. “Pernah bekerja dengan orang yang sulit?” adalah konflik. “Apa yang Anda lakukan kalau ada dua tenggat bersamaan?” adalah prioritas, meskipun berpakaian hipotetis. Latih refleksnya: begitu mendengar pertanyaan apa pun, sebut dulu kategorinya dalam hati. Setengah detik untuk mengklasifikasi itu memberimu cerita yang tepat, bukan cerita yang kebetulan paling dekat."
       }
      },
      {
       "h": {
        "en": "Tagging your library",
        "id": "Memberi label pada perpustakaanmu"
       },
       "body": {
        "en": "Take each story you own and ask: which of the ten does this actually evidence? A product launch story might carry ownership, prioritisation and communication at once. Write the tags down. In the interview, retrieval works backward: category → tagged story → STAR-L. That pipeline, practised, is what composure under fire is made of.",
        "id": "Ambil setiap cerita yang kamu miliki dan tanyakan: yang mana dari sepuluh kategori itu yang benar-benar dibuktikannya? Cerita peluncuran produk bisa memuat rasa memiliki, prioritas, dan komunikasi sekaligus. Tuliskan labelnya. Dalam wawancara, proses memanggilnya berjalan mundur: kategori → cerita berlabel → STAR-L. Alur itulah, kalau sudah dilatih, yang menjadi bahan baku ketenangan di bawah tekanan."
       }
      }
     ],
     "diagram": {
      "type": "ring",
      "title": {
       "en": "The ten competency rooms",
       "id": "Sepuluh ruang kompetensi"
      },
      "items": [
       {
        "h": {
         "en": "Leadership & influence",
         "id": "Kepemimpinan & pengaruh"
        }
       },
       {
        "h": {
         "en": "Ownership & initiative",
         "id": "Rasa memiliki & inisiatif"
        }
       },
       {
        "h": {
         "en": "Conflict",
         "id": "Konflik"
        }
       },
       {
        "h": {
         "en": "Resilience & failure",
         "id": "Ketangguhan & kegagalan"
        }
       },
       {
        "h": {
         "en": "Communication",
         "id": "Komunikasi"
        }
       },
       {
        "h": {
         "en": "Prioritisation",
         "id": "Prioritas"
        }
       },
       {
        "h": {
         "en": "Learning agility",
         "id": "Kelincahan belajar"
        }
       },
       {
        "h": {
         "en": "Judgment",
         "id": "Pertimbangan"
        }
       },
       {
        "h": {
         "en": "Collaboration",
         "id": "Kolaborasi"
        }
       },
       {
        "h": {
         "en": "Integrity & courage",
         "id": "Integritas & keberanian"
        }
       }
      ],
      "note": {
       "en": "Hear any behavioral question, silently name its room first — then retrieve the tagged story that lives there.",
       "id": "Begitu mendengar pertanyaan perilaku apa pun, sebut dulu ruangannya dalam hati — lalu panggil cerita berlabel yang tinggal di sana."
      },
      "exhibit": {
       "en": "Exhibit 1: The ten competency rooms",
       "id": "Peraga 1: Sepuluh ruang kompetensi"
      },
      "longdesc": {
       "en": "Diagram of The ten competency rooms. It presents, in order: Leadership & influence; Ownership & initiative; Conflict; Resilience & failure; Communication; Prioritisation; Learning agility; Judgment; Collaboration; Integrity & courage.",
       "id": "Diagram sepuluh ruang kompetensi. Menyajikan, secara berurutan: Kepemimpinan & pengaruh; Rasa memiliki & inisiatif; Konflik; Ketangguhan & kegagalan; Komunikasi; Prioritas; Kelincahan belajar; Pertimbangan; Kolaborasi; Integritas & keberanian."
      }
     },
     "checks": [
      {
       "q": {
        "en": "“Tell me about a time you had to deliver bad news” is primarily probing:",
        "id": "“Ceritakan saat Anda harus menyampaikan kabar buruk” terutama menggali:"
       },
       "options": [
        {
         "en": "Technical depth in your domain",
         "id": "Kedalaman teknis di bidangmu"
        },
        {
         "en": "Salary expectations",
         "id": "Ekspektasi gaji"
        },
        {
         "en": "Communication and courage under discomfort",
         "id": "Komunikasi dan keberanian dalam situasi yang tidak nyaman"
        }
       ],
       "correct": 2,
       "why": {
        "en": "Correct — the costume is “bad news”; the competency is candid communication when it costs something.",
        "id": "Benar — kostumnya “kabar buruk”; kompetensinya adalah komunikasi yang jujur ketika kejujuran itu ada harganya."
       }
      },
      {
       "q": {
        "en": "“Describe a time you had too much to do and too little time” lives in which room?",
        "id": "“Ceritakan saat pekerjaan Anda terlalu banyak dan waktunya terlalu sedikit” tinggal di ruang mana?"
       },
       "options": [
        {
         "en": "Prioritisation under pressure",
         "id": "Menentukan prioritas di bawah tekanan"
        },
        {
         "en": "Integrity & courage",
         "id": "Integritas & keberanian"
        },
        {
         "en": "Learning agility",
         "id": "Kelincahan belajar"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — overload questions probe your ranking rule and what you consciously dropped, not your stamina.",
        "id": "Benar — pertanyaan tentang beban berlebih menggali aturan pengurutanmu dan apa yang sengaja kamu lepaskan, bukan daya tahanmu."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "STAR-L",
        "id": "STAR-L"
       },
       "def": {
        "en": "Context → Challenge → Action → Result → Learning: the narrative spine for behavioral answers.",
        "id": "Konteks → Tantangan → Tindakan → Hasil → Pembelajaran: tulang punggung narasi untuk jawaban pertanyaan perilaku."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      },
      {
       "term": {
        "en": "influence",
        "id": "pengaruh"
       },
       "def": {
        "en": "Moving people and decisions without formal authority — evidence of leadership before the title arrives.",
        "id": "Menggerakkan orang dan keputusan tanpa wewenang formal — bukti kepemimpinan sebelum jabatannya datang."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "One story per competency, no spares",
         "id": "Satu cerita per kompetensi, tanpa cadangan"
        },
        "fix": {
         "en": "Interviewers ask “another example?”. Two stories per competency, from different settings, is the minimum.",
         "id": "Pewawancara bertanya “contoh lain?”. Dua cerita per kompetensi, dari latar berbeda, adalah minimum."
        }
       },
       {
        "h": {
         "en": "Tagging by what the story is about",
         "id": "Memberi tag berdasarkan tentang apa ceritanya"
        },
        "fix": {
         "en": "Tag by what it proves. A logistics story can prove influence, judgment and resilience — three tags, not one.",
         "id": "Beri tag berdasarkan apa yang dibuktikannya. Cerita logistik bisa membuktikan pengaruh, penilaian, dan ketahanan — tiga tag, bukan satu."
        }
       },
       {
        "h": {
         "en": "Ignoring the negative-frame questions",
         "id": "Mengabaikan pertanyaan berbingkai negatif"
        },
        "fix": {
         "en": "“Tell me about a failure” maps to the same ten categories. Prepare the honest version with a real learning line.",
         "id": "“Ceritakan kegagalanmu” memetakan ke sepuluh kategori yang sama. Siapkan versi jujur dengan baris pembelajaran yang nyata."
        }
       }
      ]
     },
     "migratedFrom": "the-rope:2.2"
    },
    {
     "n": "2.3",
     "title": {
      "en": "Story Mining from Everyday Experience",
      "id": "Menambang Cerita dari Pengalaman Sehari-hari"
     },
     "kind": "interactive",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "“I don't have stories” is almost never true — it is a retrieval failure, not an experience failure. Campus projects, part-time shifts, family logistics, community work: anywhere there was tension and a decision, there is a story. This lesson is the mining protocol.",
      "id": "“Saya tidak punya cerita” hampir tidak pernah benar — itu kegagalan mengingat, bukan kekurangan pengalaman. Proyek kampus, kerja paruh waktu, urusan keluarga, kegiatan komunitas: di mana pun ada ketegangan dan sebuah keputusan, di situ ada cerita. Pelajaran ini adalah protokol untuk menambangnya."
     },
     "objectives": [
      {
       "en": "Generate a raw list of tension moments from ordinary life and work.",
       "id": "Menyusun daftar mentah momen-momen menegangkan dari kehidupan dan pekerjaan sehari-hari."
      },
      {
       "en": "Filter the list into stories with decisions, results and learnings.",
       "id": "Menyaring daftar itu menjadi cerita yang punya keputusan, hasil, dan pembelajaran."
      },
      {
       "en": "Build the eight-story core library that covers all ten competencies.",
       "id": "Membangun perpustakaan inti berisi delapan cerita yang menutup semua sepuluh kompetensi."
      }
     ],
     "takeawaysLead": {
      "en": "“I don't have stories” is a retrieval failure, not an experience failure. To mine your own history, you can:",
      "id": "“Saya tidak punya cerita” adalah kegagalan mengingat, bukan kegagalan pengalaman. Untuk menambang sejarahmu sendiri, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Stories hide where there was tension plus a decision — dig at those coordinates.",
       "id": "Cerita bersembunyi di titik pertemuan ketegangan dan keputusan — galilah di koordinat itu."
      },
      {
       "en": "Small and true beats big and vague: a well-run bazaar stall can out-interview an inflated internship.",
       "id": "Kecil tapi nyata mengalahkan besar tapi samar: lapak bazar yang dikelola dengan baik bisa menang wawancara melawan magang yang dibesar-besarkan."
      },
      {
       "en": "Eight polished, tagged stories are a complete arsenal for almost any interview.",
       "id": "Delapan cerita yang sudah dipoles dan diberi label adalah persenjataan lengkap untuk hampir semua wawancara."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "Where stories actually live",
        "id": "Di mana cerita sebenarnya tinggal"
       },
       "body": {
        "en": "Group assignments where someone vanished. The event that nearly fell apart. The shift where two customers needed you at once. Teaching a sibling. Organising a family move. None of these sound like “leadership experience” — all of them can be, if there was a moment you saw the problem, chose an action, and something changed because of you.",
        "id": "Tugas kelompok yang salah satu anggotanya menghilang. Acara yang nyaris berantakan. Sif kerja saat dua pelanggan membutuhkanmu di saat yang sama. Mengajari adik. Mengatur kepindahan keluarga. Tidak satu pun terdengar seperti “pengalaman kepemimpinan” — tetapi semuanya bisa menjadi itu, kalau ada satu momen ketika kamu melihat masalahnya, memilih sebuah tindakan, dan sesuatu berubah karena dirimu."
       }
      },
      {
       "h": {
        "en": "The mining protocol",
        "id": "Protokol penambangan"
       },
       "body": {
        "en": "Step one: list twenty moments of tension from the last three years — one line each, no filtering. Step two: for each, ask “did I decide something?” Cut those where you only witnessed. Step three: ask “what changed, and can I say it concretely?” Keep the survivors. Step four: tag each with its competencies and write the STAR-L skeleton. Most people end with eight to twelve — a full library.",
        "id": "Langkah satu: tulis dua puluh momen menegangkan dari tiga tahun terakhir — satu baris untuk tiap momen, tanpa disaring. Langkah dua: untuk masing-masing, tanyakan “apakah saya memutuskan sesuatu?” Coret yang di dalamnya kamu hanya menonton. Langkah tiga: tanyakan “apa yang berubah, dan bisakah saya menyebutnya secara konkret?” Simpan yang lolos. Langkah empat: beri label kompetensinya dan tulis kerangka STAR-L-nya. Kebanyakan orang berakhir dengan delapan sampai dua belas cerita — sebuah perpustakaan yang lengkap."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: The mining protocol — twenty moments in, eight tagged stories out.",
       "id": "Peraga 1: Protokol penambangan — dua puluh momen masuk, delapan cerita bertanda keluar."
      },
      "title": {
       "en": "Raw dig → Decision filter → Result and tag → Library",
       "id": "Gali mentah → Saring keputusan → Hasil dan tanda → Pustaka"
      },
      "items": [
       {
        "h": {
         "en": "Raw dig",
         "id": "Gali mentah"
        },
        "sub": {
         "en": "Twenty moments of tension from three years — one line each, no filtering",
         "id": "Dua puluh momen ketegangan dari tiga tahun — satu baris masing-masing, tanpa penyaringan"
        }
       },
       {
        "h": {
         "en": "Decision filter",
         "id": "Saring keputusan"
        },
        "sub": {
         "en": "“Did I decide something?” Cut the ones you only witnessed",
         "id": "“Apakah saya memutuskan sesuatu?” Buang yang hanya kamu saksikan"
        }
       },
       {
        "h": {
         "en": "Result and tag",
         "id": "Hasil dan tanda"
        },
        "sub": {
         "en": "What changed, with a number; which of the ten competencies it evidences",
         "id": "Apa yang berubah, dengan angka; kompetensi mana dari sepuluh yang dibuktikannya"
        }
       },
       {
        "h": {
         "en": "Library",
         "id": "Pustaka"
        },
        "sub": {
         "en": "Eight polished, tagged stories — a complete arsenal",
         "id": "Delapan cerita yang dipoles dan bertanda — persenjataan lengkap"
        }
       }
      ],
      "longdesc": {
       "en": "A four-step flow: list twenty moments of tension without filtering; keep only those where you made a decision; attach a result with a number and tag each with the competencies it evidences; and assemble the eight best into your story library.",
       "id": "Alur empat langkah: daftar dua puluh momen ketegangan tanpa penyaringan; simpan hanya yang di dalamnya kamu membuat keputusan; lampirkan hasil dengan angka dan tandai masing-masing dengan kompetensi yang dibuktikannya; dan susun delapan yang terbaik ke dalam pustaka ceritamu."
      }
     },
     "steps": [
      {
       "h": {
        "en": "Step 1 · The raw dig",
        "id": "Langkah 1 · Galian mentah"
       },
       "body": {
        "en": "Set a timer for ten minutes. Write twenty one-line moments of tension from study, work, organisations, family, community. No judging, no filtering — volume first.",
        "id": "Pasang pewaktu sepuluh menit. Tulis dua puluh momen menegangkan, masing-masing satu baris, dari kuliah, kerja, organisasi, keluarga, komunitas. Jangan menilai, jangan menyaring — jumlah dulu."
       },
       "debrief": {
        "en": "If you stalled before twenty, widen the definition of tension: any moment you felt your pulse — a deadline, a disagreement, a thing about to fail — qualifies. The list is ore, not jewellery. Nobody sees it but you.",
        "id": "Kalau macet sebelum sampai dua puluh, perluas definisi ketegangan: momen apa pun ketika denyut nadimu terasa naik — tenggat, perbedaan pendapat, sesuatu yang nyaris gagal — memenuhi syarat. Daftar ini bijih, bukan perhiasan. Tidak ada yang melihatnya selain kamu."
       }
      },
      {
       "h": {
        "en": "Step 2 · The decision filter",
        "id": "Langkah 2 · Saringan keputusan"
       },
       "body": {
        "en": "Cross out every line where you only observed the tension. Keep lines where you chose something: spoke up, reorganised, took over, let go, asked for help.",
        "id": "Coret setiap baris yang di dalamnya kamu hanya mengamati ketegangan. Simpan baris yang di dalamnya kamu memilih sesuatu: bersuara, menata ulang, mengambil alih, melepaskan, meminta bantuan."
       },
       "debrief": {
        "en": "A story needs an agent. “Our team almost missed the deadline” is scenery until it becomes “so I froze the scope and renegotiated the deliverable”. If a crossed-out moment still stings, look again — passivity you regret can become an honest failure story with a real learning.",
        "id": "Cerita butuh pelaku. “Tim kami nyaris melewatkan tenggat” hanyalah latar, sampai menjadi “jadi saya bekukan cakupannya dan negosiasikan ulang hasil yang harus diserahkan”. Kalau momen yang sudah dicoret masih terasa menyengat, lihat lagi — kepasifan yang kamu sesali bisa menjadi cerita kegagalan yang jujur, dengan pembelajaran yang nyata."
       }
      },
      {
       "h": {
        "en": "Step 3 · Result and tag",
        "id": "Langkah 3 · Hasil dan label"
       },
       "body": {
        "en": "For each survivor, write what changed — with a number if truthful (time saved, people served, score, revenue, errors avoided) — then tag one to three of the ten competencies.",
        "id": "Untuk setiap cerita yang lolos, tulis apa yang berubah — dengan angka kalau memang jujur (waktu yang dihemat, orang yang dilayani, skor, pendapatan, kesalahan yang terhindar) — lalu beri label satu sampai tiga dari sepuluh kompetensi."
       },
       "debrief": {
        "en": "No number? Approximate honestly (“about a third faster”) or use a concrete non-number (“the client renewed”). Check coverage across your tags: gaps in conflict, failure or integrity are the ones interviews find. Mine specifically for those.",
        "id": "Tidak ada angka? Perkirakan dengan jujur (“kira-kira sepertiga lebih cepat”) atau pakai hal konkret yang bukan angka (“klien memperpanjang kontrak”). Periksa cakupan label-labelmu: celah di konflik, kegagalan, atau integritas adalah celah yang paling sering ditemukan wawancara. Tambang secara khusus untuk itu."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "“I have no leadership experience” — mined",
        "id": "“Saya tidak punya pengalaman memimpin” — setelah ditambang"
       },
       "weak": {
        "en": "Honestly, I haven't had a chance to lead anything yet — I've mostly just been a member in my organisations.",
        "id": "Jujur saja, saya belum pernah punya kesempatan memimpin apa pun — di organisasi saya kebanyakan hanya jadi anggota."
       },
       "strong": {
        "en": "My clearest leadership moment wasn't a title. Our bazaar stall was losing money on day one, and the committee had gone quiet. I called the six of us together that evening, we cut the menu from twelve items to four, and I took over supplier calls myself. We closed the three days at a profit — small, but ours. Leading, I learned, starts with calling the meeting nobody else wants to call.",
        "id": "Momen memimpin saya yang paling jelas bukan datang dari jabatan. Lapak bazar kami sudah rugi di hari pertama, dan panitia mendadak diam semua. Malam itu saya kumpulkan kami berenam, kami pangkas menu dari dua belas jadi empat, dan saya ambil alih sendiri urusan telepon ke pemasok. Tiga hari itu kami tutup dengan untung — kecil, tapi milik kami. Saya belajar bahwa memimpin dimulai dari mengadakan rapat yang tidak ingin diadakan siapa pun."
       },
       "why": {
        "en": "The experience existed all along — mining found it. Tension plus decision plus consequence, told with ownership; no title required.",
        "id": "Pengalamannya sudah ada sejak dulu — penambanganlah yang menemukannya. Ketegangan plus keputusan plus akibat, dituturkan dengan rasa memiliki; tidak butuh jabatan."
       }
      }
     ],
     "tryit": {
      "qid": "bh08",
      "label": {
       "en": "Drill an ownership story from ordinary life",
       "id": "Latih cerita rasa memiliki dari kehidupan sehari-hari"
      },
      "desc": {
       "en": "“Beyond your job description” — answer it with something mined, not something grand.",
       "id": "“Melampaui deskripsi pekerjaan Anda” — jawab dengan sesuatu yang kamu tambang, bukan sesuatu yang megah."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "STAR-L",
        "id": "STAR-L"
       },
       "def": {
        "en": "Context → Challenge → Action → Result → Learning: the narrative spine for behavioral answers.",
        "id": "Konteks → Tantangan → Tindakan → Hasil → Pembelajaran: tulang punggung narasi untuk jawaban pertanyaan perilaku."
       }
      },
      {
       "term": {
        "en": "decision filter",
        "id": "saringan keputusan"
       },
       "def": {
        "en": "The mining step that keeps only moments where you decided something and cuts those where you merely witnessed — the test that separates a story from an anecdote.",
        "id": "Langkah penambangan yang hanya menyimpan momen ketika kamu memutuskan sesuatu dan membuang momen ketika kamu sekadar menyaksikan — ujian yang memisahkan cerita dari anekdot."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Only counting formal jobs as experience",
         "id": "Hanya menghitung pekerjaan formal sebagai pengalaman"
        },
        "fix": {
         "en": "Mine campus, family, community and part-time life: tension plus decision plus consequence is a story anywhere.",
         "id": "Tambang dari kampus, keluarga, komunitas, dan kerja paruh waktu: ketegangan plus keputusan plus akibat adalah cerita, di mana pun tempatnya."
        }
       },
       {
        "h": {
         "en": "Inflating small stories into epics",
         "id": "Membesar-besarkan cerita kecil menjadi epik"
        },
        "fix": {
         "en": "Small and true beats big and vague — one follow-up question destroys inflation.",
         "id": "Kecil tapi nyata mengalahkan besar tapi samar — satu pertanyaan lanjutan cukup untuk meruntuhkan yang dibesar-besarkan."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "The best signal that an experience contains an interview story is:",
        "id": "Sinyal terbaik bahwa sebuah pengalaman mengandung cerita untuk wawancara adalah:"
       },
       "options": [
        {
         "en": "There was tension, and you made a decision inside it",
         "id": "Ada ketegangan, dan kamu mengambil keputusan di dalamnya"
        },
        {
         "en": "It happened at a famous company",
         "id": "Terjadi di perusahaan yang terkenal"
        },
        {
         "en": "It lasted longer than six months",
         "id": "Berlangsung lebih dari enam bulan"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — prestige and duration are irrelevant; tension plus decision plus consequence is the anatomy of a story.",
        "id": "Benar — prestise dan durasi tidak relevan; ketegangan plus keputusan plus akibat adalah anatomi sebuah cerita."
       }
      }
     ],
     "resources": {
      "items": [
       {
        "kind": "worksheet",
        "title": {
         "en": "Story-mining prompts",
         "id": "Pemicu penambangan cerita"
        },
        "desc": {
         "en": "Twenty minutes with these prompts usually yields eight to twelve raw stories.",
         "id": "Dua puluh menit dengan pemicu ini biasanya menghasilkan delapan sampai dua belas cerita mentah."
        },
        "body": [
         {
          "en": "A time a plan fell apart and I had to decide fast",
          "id": "Saat rencana berantakan dan aku harus memutuskan cepat"
         },
         {
          "en": "A time I disagreed with someone senior — and what I did about it",
          "id": "Saat aku tidak setuju dengan orang yang lebih senior — dan apa yang kulakukan"
         },
         {
          "en": "A time I took something on that nobody assigned",
          "id": "Saat aku mengambil sesuatu yang tak ditugaskan siapa pun"
         },
         {
          "en": "A time I got it wrong and had to tell people",
          "id": "Saat aku salah dan harus memberi tahu orang-orang"
         },
         {
          "en": "A time I made something faster, cheaper or clearer",
          "id": "Saat aku membuat sesuatu lebih cepat, murah, atau jelas"
         },
         {
          "en": "A time I helped someone who was struggling, or asked for help myself",
          "id": "Saat aku membantu orang yang kesulitan, atau meminta bantuan sendiri"
         },
         {
          "en": "A time I had to persuade people who did not report to me",
          "id": "Saat aku harus meyakinkan orang yang bukan bawahanku"
         },
         {
          "en": "A time I learned a skill under pressure",
          "id": "Saat aku mempelajari keterampilan di bawah tekanan"
         },
         {
          "en": "A time I handled a difficult person — customer, teammate, family member",
          "id": "Saat aku menangani orang yang sulit — pelanggan, rekan, anggota keluarga"
         },
         {
          "en": "A time I kept going when it would have been reasonable to stop",
          "id": "Saat aku terus maju ketika berhenti pun masuk akal"
         },
         {
          "en": "Settings to search: campus projects, part-time shifts, organisations, competitions, family logistics, community or religious activities, side projects",
          "id": "Latar yang bisa ditelusuri: proyek kampus, shift kerja paruh waktu, organisasi, kompetisi, logistik keluarga, kegiatan komunitas atau keagamaan, proyek sampingan"
         }
        ]
       }
      ]
     },
     "migratedFrom": "the-rope:2.3"
    },
    {
     "n": "2.4",
     "title": {
      "en": "Calibrating Stories to Interview Type and Seniority",
      "id": "Mengalibrasi Cerita untuk Jenis Wawancara dan Level Senioritas"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "One story, many altitudes. The same project is told as execution detail to a peer, as decision-making to a manager, and as business impact to an executive. Calibration — not new stories — is how a small library covers every room you will enter.",
      "id": "Satu cerita, banyak ketinggian. Proyek yang sama dituturkan sebagai detail eksekusi kepada calon rekan, sebagai pengambilan keputusan kepada manajer, dan sebagai dampak bisnis kepada eksekutif. Kalibrasi — bukan cerita baru — adalah cara perpustakaan yang kecil bisa menjangkau setiap ruangan yang akan kamu masuki."
     },
     "objectives": [
      {
       "en": "Retell one story at three altitudes: execution, decision, impact.",
       "id": "Menuturkan ulang satu cerita pada tiga ketinggian: eksekusi, keputusan, dampak."
      },
      {
       "en": "Match story emphasis to HR, technical, user and final formats.",
       "id": "Menyesuaikan penekanan cerita dengan format HR, teknis, user, dan final."
      },
      {
       "en": "Adjust ownership language up and down seniority honestly.",
       "id": "Menyesuaikan bahasa rasa memiliki ke atas dan ke bawah sesuai level, dengan jujur."
      }
     ],
     "takeawaysLead": {
      "en": "One story, many altitudes — calibration, not new stories, covers every room. To calibrate without inflating, you can:",
      "id": "Satu cerita, banyak ketinggian — kalibrasi, bukan cerita baru, yang mencakup setiap ruangan. Untuk mengalibrasi tanpa menggelembungkan, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Peers want your hands, managers want your choices, executives want the consequences.",
       "id": "Calon rekan ingin melihat tanganmu, manajer ingin melihat pilihanmu, eksekutif ingin melihat akibatnya."
      },
      {
       "en": "Calibration changes emphasis, never facts — inflation is discovered in follow-ups.",
       "id": "Kalibrasi mengubah penekanan, tidak pernah mengubah fakta — yang dibesar-besarkan akan ketahuan di pertanyaan lanjutan."
      },
      {
       "en": "Prepare the three altitudes of your two best stories before any onsite loop.",
       "id": "Siapkan tiga ketinggian dari dua cerita terbaikmu sebelum rangkaian wawancara tatap muka mana pun."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "Three altitudes of one story",
        "id": "Tiga ketinggian dari satu cerita"
       },
       "body": {
        "en": "Execution altitude: the concrete how — tools, sequences, obstacles, hours. Decision altitude: the forks — options you saw, why you chose, what you traded. Impact altitude: what it meant — money, time, risk, people. All three are the same true story. Practising the shifts takes minutes and multiplies your library by three.",
        "id": "Ketinggian eksekusi: cara konkretnya — alat, urutan, hambatan, jam kerja. Ketinggian keputusan: persimpangannya — pilihan yang kamu lihat, alasan memilih, apa yang kamu korbankan. Ketinggian dampak: apa artinya — uang, waktu, risiko, orang. Ketiganya adalah cerita benar yang sama. Melatih perpindahan di antara ketiganya hanya butuh beberapa menit, dan melipatgandakan perpustakaanmu tiga kali."
       }
      },
      {
       "h": {
        "en": "Calibrating to format",
        "id": "Mengalibrasi ke format"
       },
       "body": {
        "en": "HR hears the same story as motivation and reliability evidence. Technical rooms want the method inside it. User rooms want the collaboration scenes — who you worked with and how it felt to be beside you. Finals want the judgment and the arc. Before each round, ask: which slice of my story does this room buy?",
        "id": "HR mendengar cerita yang sama sebagai bukti motivasi dan keandalan. Ruang teknis ingin melihat metode di dalamnya. Ruang user ingin adegan kolaborasinya — dengan siapa kamu bekerja, dan bagaimana rasanya berada di sampingmu. Ronde final ingin melihat pertimbangan dan alur perjalanannya. Sebelum setiap ronde, tanyakan: irisan mana dari ceritaku yang dibeli ruangan ini?"
       }
      },
      {
       "h": {
        "en": "Seniority honesty",
        "id": "Jujur soal level"
       },
       "body": {
        "en": "Entry-level candidates over-claim (“I led the entire project”) and get dismantled by one follow-up. Senior candidates under-slice (“the team delivered”) and vanish from their own story. Calibrate ownership to the truth: name exactly what was yours, credit the rest cleanly. Precision about your own boundary is itself a senior signal.",
        "id": "Kandidat pemula terlalu banyak mengklaim (“saya memimpin seluruh proyek”) dan dibongkar habis oleh satu pertanyaan lanjutan. Kandidat senior mengiris terlalu tipis (“tim yang menyelesaikannya”) dan lenyap dari ceritanya sendiri. Kalibrasikan rasa memiliki pada kebenaran: sebut persis bagian mana yang milikmu, dan beri kredit untuk sisanya dengan bersih. Ketepatan tentang batas dirimu sendiri justru merupakan sinyal senioritas."
       }
      }
     ],
     "diagram": {
      "type": "ladder",
      "title": {
       "en": "One story, three altitudes",
       "id": "Satu cerita, tiga ketinggian"
      },
      "items": [
       {
        "h": {
         "en": "Execution",
         "id": "Eksekusi"
        },
        "sub": {
         "en": "Tools, sequence, obstacles — for peers",
         "id": "Alat, urutan, hambatan — untuk calon rekan"
        }
       },
       {
        "h": {
         "en": "Decision",
         "id": "Keputusan"
        },
        "sub": {
         "en": "Options, criteria, trade-offs — for managers",
         "id": "Pilihan, kriteria, trade-off — untuk manajer"
        }
       },
       {
        "h": {
         "en": "Impact",
         "id": "Dampak"
        },
        "sub": {
         "en": "Money, time, risk, people — for executives",
         "id": "Uang, waktu, risiko, orang — untuk eksekutif"
        }
       }
      ],
      "note": {
       "en": "Practising the shifts takes minutes and multiplies your library by three. Calibration changes emphasis — never facts.",
       "id": "Melatih perpindahannya hanya butuh beberapa menit dan melipatgandakan perpustakaanmu tiga kali. Kalibrasi mengubah penekanan — tidak pernah mengubah fakta."
      },
      "exhibit": {
       "en": "Exhibit 1: One story, three altitudes",
       "id": "Peraga 1: Satu cerita, tiga ketinggian"
      },
      "longdesc": {
       "en": "Diagram of One story, three altitudes. It presents, in order: Execution — Tools, sequence, obstacles — for peers; Decision — Options, criteria, trade-offs — for managers; Impact — Money, time, risk, people — for executives.",
       "id": "Diagram satu cerita, tiga ketinggian. Menyajikan, secara berurutan: Eksekusi — alat, urutan, hambatan, untuk calon rekan; Keputusan — pilihan, kriteria, trade-off, untuk manajer; Dampak — uang, waktu, risiko, orang, untuk eksekutif."
      }
     },
     "tryit": {
      "qid": "bh04",
      "label": {
       "en": "Tell one story at manager altitude",
       "id": "Tuturkan satu cerita di ketinggian manajer"
      },
      "desc": {
       "en": "Answer the impossible-deadline question leading with the trade-off you chose, not the hours you worked.",
       "id": "Jawab pertanyaan tentang tenggat yang mustahil dengan membuka pada trade-off yang kamu pilih, bukan jam kerja yang kamu habiskan."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "follow-up",
        "id": "pertanyaan lanjutan"
       },
       "def": {
        "en": "The probing question after your answer — where inflated claims collapse and honest depth scores.",
        "id": "Pertanyaan penggali setelah jawabanmu — tempat klaim yang dibesar-besarkan runtuh, dan kedalaman yang jujur mendapat nilai."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Telling a story to an executive, you should lead with:",
        "id": "Saat bercerita kepada seorang eksekutif, sebaiknya kamu membuka dengan:"
       },
       "options": [
        {
         "en": "The tools and techniques you used",
         "id": "Alat dan teknik yang kamu pakai"
        },
        {
         "en": "The outcome and its business consequence, then decisions on request",
         "id": "Hasilnya beserta akibat bisnisnya, lalu keputusannya kalau diminta"
        },
        {
         "en": "Every step of the process in chronological order",
         "id": "Setiap langkah prosesnya, secara kronologis"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Correct — executives buy consequences first. The chronology exists if they ask; most will not.",
        "id": "Benar — eksekutif membeli akibatnya lebih dulu. Kronologinya tersedia kalau mereka minta; kebanyakan tidak akan meminta."
       }
      }
     ],
     "resources": {
      "items": [
       {
        "kind": "template",
        "title": {
         "en": "One story, three altitudes",
         "id": "Satu cerita, tiga ketinggian"
        },
        "desc": {
         "en": "Draft the same story three ways before any interview loop.",
         "id": "Susun cerita yang sama dalam tiga cara sebelum putaran wawancara mana pun."
        },
        "body": [
         {
          "en": "PEER (how): tools, steps, what broke, how you fixed it, what you would do differently technically",
          "id": "REKAN (bagaimana): alat, langkah, apa yang rusak, cara memperbaikinya, apa yang akan kamu lakukan berbeda secara teknis"
         },
         {
          "en": "MANAGER (decisions): the options you saw, why you chose, how you kept people informed, the risk you managed",
          "id": "MANAJER (keputusan): opsi yang kamu lihat, mengapa memilih, cara menjaga orang tetap terinformasi, risiko yang kamu kelola"
         },
         {
          "en": "EXECUTIVE (impact): the business problem in one line, what changed, what it was worth, what you learned about the business",
          "id": "EKSEKUTIF (dampak): masalah bisnis dalam satu baris, apa yang berubah, seberapa berharga, apa yang kamu pelajari tentang bisnis"
         },
         {
          "en": "Check: each version is under 90 seconds and ends with the learning line.",
          "id": "Uji: setiap versi di bawah 90 detik dan berakhir dengan baris pembelajaran."
         }
        ]
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Executive detail for a peer",
         "id": "Detail eksekutif untuk rekan"
        },
        "fix": {
         "en": "A peer wants to know how you actually did it. Give the mechanics; save the business impact for the final.",
         "id": "Rekan ingin tahu bagaimana kamu benar-benar melakukannya. Berikan mekanismenya; simpan dampak bisnis untuk babak akhir."
        }
       },
       {
        "h": {
         "en": "Rewriting the story for each round",
         "id": "Menulis ulang cerita untuk tiap babak"
        },
        "fix": {
         "en": "Same facts, different altitude. Only the proportions change — which sentences get five and which get one.",
         "id": "Fakta sama, ketinggian berbeda. Hanya proporsinya yang berubah — kalimat mana yang mendapat lima dan mana yang satu."
        }
       },
       {
        "h": {
         "en": "Inflating scope for seniority",
         "id": "Menggelembungkan lingkup demi senioritas"
        },
        "fix": {
         "en": "Senior panels check scope with one question. State the real scope; show judgment inside it.",
         "id": "Panel senior memeriksa lingkup dengan satu pertanyaan. Nyatakan lingkup yang sebenarnya; tunjukkan penilaian di dalamnya."
        }
       }
      ]
     },
     "journey": {
      "before": {
       "label": {
        "en": "Module 1 · the room",
        "id": "Modul 1 · ruangannya"
       },
       "desc": {
        "en": "You know what is being scored; now you need the material.",
        "id": "Kamu tahu apa yang dinilai; kini kamu butuh bahannya."
       }
      },
      "now": {
       "label": {
        "en": "Module 2 · a library, not a script",
        "id": "Modul 2 · perpustakaan, bukan naskah"
       },
       "desc": {
        "en": "Twelve tagged stories at three altitudes cover almost every behavioural question you will meet.",
        "id": "Dua belas cerita bertag di tiga ketinggian mencakup hampir semua pertanyaan perilaku yang akan kamu temui."
       }
      },
      "next": {
       "label": {
        "en": "Module 3 · the rubric in plain sight",
        "id": "Modul 3 · rubrik yang terlihat jelas"
       },
       "desc": {
        "en": "Company frameworks and job descriptions decoded into the competencies they will probe.",
        "id": "Kerangka perusahaan dan deskripsi pekerjaan diuraikan menjadi kompetensi yang akan mereka gali."
       },
       "lesson": "3.1"
      }
     },
     "migratedFrom": "the-rope:2.4"
    }
   ],
   "hero": "../../assets/bg/ch1-realization.jpg",
   "heroPos": "center 30%"
  },
  {
   "num": 3,
   "phase": "prepare",
   "title": {
    "en": "Decode the Role",
    "id": "Membedah Peran"
   },
   "overview": {
    "en": "Every role has a scorecard, and most of it is visible before the interview: in the job posting, the company’s own pages, its annual report, its people on LinkedIn, and the news. This module teaches you to reconstruct the likely competency scorecard for a role from public materials, research an organisation in ninety minutes, predict ten to fifteen questions, and map your Core 10 stories to each — the hypothesis hour that turns preparation from guessing into targeting.",
    "id": "Setiap peran punya lembar penilaian, dan sebagian besar terlihat sebelum wawancara: di lowongan, laman perusahaan sendiri, laporan tahunannya, orang-orangnya di LinkedIn, dan berita. Modul ini mengajarimu merekonstruksi kemungkinan lembar penilaian kompetensi sebuah peran dari materi publik, meriset organisasi dalam sembilan puluh menit, memprediksi sepuluh hingga lima belas pertanyaan, dan memetakan cerita Core 10 ke masing-masing — jam hipotesis yang mengubah persiapan dari menebak menjadi membidik."
   },
   "outcome": {
    "en": "From public materials (job posting, company website, annual report, LinkedIn, news), you can reconstruct the likely competency scorecard for a role, predict 10–15 questions, and map Core 10 stories to each predicted question.",
    "id": "Dari materi publik (lowongan, situs perusahaan, laporan tahunan, LinkedIn, berita), kamu bisa merekonstruksi kemungkinan lembar penilaian kompetensi sebuah peran, memprediksi 10–15 pertanyaan, dan memetakan cerita Core 10 ke tiap pertanyaan yang diprediksi."
   },
   "kit": {
    "en": "Role decode + predicted questions for your Top 3 targets",
    "id": "Bedah peran + pertanyaan yang diprediksi untuk 3 sasaran teratasmu"
   },
   "lessons": [
    {
     "n": "3.1",
     "title": {
      "en": "Reading Company-Specific Frameworks",
      "id": "Membaca Kerangka Khas Perusahaan"
     },
     "kind": "slides",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Many companies publish their values, principles or competency language publicly. Those pages are not wall decoration — they are the interview rubric in plain sight. This deck teaches you to find them, translate value-words into testable behaviours, and prepare stories that speak the company's own language.",
      "id": "Banyak perusahaan menerbitkan nilai, prinsip, atau bahasa kompetensinya secara terbuka. Halaman-halaman itu bukan hiasan dinding — itulah rubrik wawancara yang terpampang di depan mata. Dek ini mengajarimu cara menemukannya, menerjemahkan kata-kata nilai menjadi perilaku yang bisa diuji, dan menyiapkan cerita yang berbicara dalam bahasa perusahaan itu sendiri."
     },
     "objectives": [
      {
       "en": "Locate a company's published values or principles in minutes.",
       "id": "Menemukan nilai atau prinsip yang diterbitkan sebuah perusahaan dalam hitungan menit."
      },
      {
       "en": "Translate a value-word into the behaviour an interviewer would probe.",
       "id": "Menerjemahkan sebuah kata nilai menjadi perilaku yang akan digali pewawancara."
      },
      {
       "en": "Select stories that evidence the company's specific language.",
       "id": "Memilih cerita yang membuktikan bahasa khas perusahaan itu."
      }
     ],
     "takeawaysLead": {
      "en": "Published values are the rubric in plain sight. To turn a company's own words into your preparation, you can:",
      "id": "Nilai-nilai yang dipublikasikan adalah rubrik yang terlihat jelas. Untuk mengubah kata-kata perusahaan itu sendiri menjadi persiapanmu, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Published values are the rubric in public; read them the week before, not the night before.",
       "id": "Nilai yang diterbitkan adalah rubrik yang dipajang di ruang publik; baca seminggu sebelumnya, bukan semalam sebelumnya."
      },
      {
       "en": "Translate every value-word into a question: “when did I actually behave like that?”",
       "id": "Terjemahkan setiap kata nilai menjadi pertanyaan: “kapan saya benar-benar pernah berperilaku seperti itu?”"
      },
      {
       "en": "Speak your story in their vocabulary once — naturally — and the mapping does itself.",
       "id": "Ucapkan ceritamu dalam kosakata mereka satu kali saja — secara alami — dan pemetaannya terjadi dengan sendirinya."
      }
     ],
     "slides": [
      {
       "h": {
        "en": "The rubric hides in public",
        "id": "Rubriknya bersembunyi di tempat terbuka"
       },
       "points": [
        {
         "en": "Careers pages, annual reports, founder letters and published principles carry the competency language interviews use.",
         "id": "Halaman karier, laporan tahunan, surat dari pendiri, dan prinsip yang diterbitkan memuat bahasa kompetensi yang dipakai dalam wawancara."
        },
        {
         "en": "If a company repeats a word — ownership, rigour, speed, service — expect a question shaped like it.",
         "id": "Kalau sebuah perusahaan mengulang satu kata — rasa memiliki, ketelitian, kecepatan, pelayanan — bersiaplah untuk pertanyaan yang berbentuk seperti kata itu."
        }
       ]
      },
      {
       "h": {
        "en": "Value-word → behaviour → probe",
        "id": "Kata nilai → perilaku → pertanyaan"
       },
       "points": [
        {
         "en": "“Customer obsession” becomes: tell me about a time you sacrificed convenience for a user.",
         "id": "“Customer obsession” menjadi: ceritakan saat Anda mengorbankan kenyamanan demi pengguna."
        },
        {
         "en": "“Integrity” becomes: describe a moment honesty cost you something.",
         "id": "“Integritas” menjadi: ceritakan momen ketika kejujuran membuat Anda kehilangan sesuatu."
        },
        {
         "en": "Run the translation for every listed value — you have just predicted half the interview.",
         "id": "Jalankan penerjemahan ini untuk setiap nilai yang tercantum — dan kamu baru saja meramalkan separuh isi wawancaranya."
        }
       ]
      },
      {
       "h": {
        "en": "Map your library onto their language",
        "id": "Petakan perpustakaanmu ke bahasa mereka"
       },
       "points": [
        {
         "en": "For each value, pick the one tagged story that evidences it best.",
         "id": "Untuk setiap nilai, pilih satu cerita berlabel yang paling kuat membuktikannya."
        },
        {
         "en": "Use their word once in the telling — naturally, not as flattery.",
         "id": "Pakai kata mereka satu kali dalam penuturanmu — secara alami, bukan untuk menjilat."
        },
        {
         "en": "Where you have no story for a value, mine for one now — that gap is where the interview will hurt.",
         "id": "Kalau tidak ada cerita untuk salah satu nilai, tambang sekarang juga — di celah itulah wawancara akan terasa sakit."
        }
       ]
      },
      {
       "h": {
        "en": "When nothing is published",
        "id": "Ketika tidak ada yang diterbitkan"
       },
       "points": [
        {
         "en": "Read several of the company's job ads — repeated requirements across roles are de facto values.",
         "id": "Baca beberapa iklan lowongan perusahaan itu — persyaratan yang berulang di berbagai posisi adalah nilai perusahaan secara de facto."
        },
        {
         "en": "Ask people who interviewed there; the Metanoia community and mentors exist for exactly this.",
         "id": "Tanyai orang yang pernah diwawancarai di sana; komunitas dan mentor Metanoia ada persis untuk hal ini."
        },
        {
         "en": "Default to the ten universal competencies — they underlie every private rubric too.",
         "id": "Kembali ke sepuluh kompetensi universal — itu juga fondasi dari setiap rubrik yang tidak dipublikasikan."
        }
       ]
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "Finding the rubric in public",
        "id": "Menemukan rubrik di ruang publik"
       },
       "body": {
        "en": "Careers pages, annual reports, founder letters and published leadership principles carry the competency language that interviews use — because the people who wrote the interview guide read the same pages. The tell is repetition: a company that says “ownership”, “rigour”, “speed” or “service” in three different places will ask a question shaped like each word. Spend one evening the week before the interview collecting them. Where nothing is published, the rubric still leaks: read several of the company's job advertisements and note requirements that repeat across roles — those are de facto values; ask people who have interviewed there, which is exactly what the Metanoia community and mentors exist for; and, failing both, default to the ten universal competencies from 2.2, which underlie every private rubric ever written.",
        "id": "Halaman karier, laporan tahunan, surat pendiri, dan prinsip kepemimpinan yang dipublikasikan membawa bahasa kompetensi yang dipakai wawancara — karena orang yang menulis panduan wawancara membaca halaman yang sama. Petunjuknya adalah pengulangan: perusahaan yang menyebut “kepemilikan”, “ketelitian”, “kecepatan”, atau “pelayanan” di tiga tempat berbeda akan mengajukan pertanyaan yang berbentuk seperti tiap kata itu. Luangkan satu malam seminggu sebelum wawancara untuk mengumpulkannya. Bila tidak ada yang dipublikasikan, rubriknya tetap bocor: baca beberapa iklan lowongan perusahaan itu dan catat persyaratan yang berulang lintas peran — itulah nilai-nilai de facto; tanyakan pada orang yang pernah wawancara di sana, yang persis untuk itulah komunitas dan mentor Metanoia ada; dan bila keduanya gagal, kembali ke sepuluh kompetensi universal dari 2.2, yang mendasari setiap rubrik privat yang pernah ditulis."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Translating value-words into probes",
        "id": "Menerjemahkan kata-nilai menjadi pertanyaan penyelidik"
       },
       "body": {
        "en": "A value-word is not a question yet; the translation makes it one. “Customer obsession” becomes <i>tell me about a time you sacrificed convenience for a user</i>. “Integrity” becomes <i>describe a moment honesty cost you something</i>. “Bias for action” becomes <i>when did you move before you had all the information — and what happened?</i> Run the translation for every listed value, writing the probe in the interviewer's voice, and you have predicted roughly half the interview before it starts. The discipline that makes this honest rather than performative is asking, for each probe, “when did I actually behave this way?” — not “what would sound right?” The answer to the first question is a story; the answer to the second is a bluff, and 5.2 covers how bluffs end.",
        "id": "Kata-nilai belum menjadi pertanyaan; penerjemahanlah yang membuatnya begitu. “Obsesi pada pelanggan” menjadi <i>ceritakan saat kamu mengorbankan kenyamanan demi pengguna</i>. “Integritas” menjadi <i>gambarkan momen ketika kejujuran merugikanmu</i>. “Kecenderungan bertindak” menjadi <i>kapan kamu bergerak sebelum punya semua informasi — dan apa yang terjadi?</i> Jalankan penerjemahan untuk setiap nilai yang tercantum, tulis pertanyaannya dengan suara pewawancara, dan kamu sudah memprediksi kira-kira separuh wawancara sebelum dimulai. Disiplin yang membuat ini jujur alih-alih pura-pura adalah bertanya, untuk setiap pertanyaan, “kapan saya benar-benar berperilaku seperti ini?” — bukan “apa yang akan terdengar tepat?” Jawaban atas pertanyaan pertama adalah cerita; jawaban atas yang kedua adalah gertakan, dan 5.2 membahas bagaimana gertakan berakhir."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "Mapping your library onto their language",
        "id": "Memetakan pustakamu ke bahasa mereka"
       },
       "body": {
        "en": "With the probes written, open your tagged story library from Module 2 and, for each value, pick the one story that evidences it best. Most values map onto stories you already own under a different competency tag — “rigour” is usually a judgment or learning-agility story; “service” is often a conflict or communication one. Where a value has no story, you have found where the interview will hurt: mine for one now using the 2.3 protocol, or prepare the honest partial answer. In the telling, use their word once — naturally, in the place where it is true — and never as flattery; interviewers hear their own principles parroted back weekly and score it as noise. Used once, in evidence, the mapping does its job silently: the note the interviewer writes contains the word they were listening for, attached to a specific you actually did.",
        "id": "Dengan pertanyaan-pertanyaan itu tertulis, buka pustaka cerita bertandamu dari Modul 2 dan, untuk setiap nilai, pilih satu cerita yang paling kuat membuktikannya. Sebagian besar nilai memetakan ke cerita yang sudah kamu miliki dengan tanda kompetensi berbeda — “ketelitian” biasanya cerita penilaian atau ketangkasan belajar; “pelayanan” sering kali cerita konflik atau komunikasi. Bila sebuah nilai tak punya cerita, kamu telah menemukan bagian yang akan menyakitkan saat wawancara: tambang sekarang dengan protokol 2.3, atau siapkan jawaban parsial yang jujur. Saat bercerita, pakai kata mereka sekali — secara alami, di tempat yang memang benar — dan jangan pernah sebagai sanjungan; pewawancara mendengar prinsip mereka sendiri dibeo setiap minggu dan menilainya sebagai kebisingan. Dipakai sekali, dalam bukti, pemetaan itu bekerja diam-diam: catatan yang ditulis pewawancara memuat kata yang mereka cari, melekat pada hal spesifik yang benar-benar kamu lakukan."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: From a published value to a rehearsed story — the translation runs in three moves.",
       "id": "Peraga 1: Dari nilai yang dipublikasikan ke cerita yang dilatih — penerjemahan berjalan dalam tiga langkah."
      },
      "title": {
       "en": "Value-word → Behaviour → Probe → Your story",
       "id": "Kata-nilai → Perilaku → Pertanyaan → Ceritamu"
      },
      "items": [
       {
        "h": {
         "en": "Value-word",
         "id": "Kata-nilai"
        },
        "sub": {
         "en": "“Customer obsession” — repeated across careers page, report, principles",
         "id": "“Obsesi pada pelanggan” — berulang di halaman karier, laporan, prinsip"
        }
       },
       {
        "h": {
         "en": "Behaviour",
         "id": "Perilaku"
        },
        "sub": {
         "en": "Sacrificing convenience for a user",
         "id": "Mengorbankan kenyamanan demi pengguna"
        }
       },
       {
        "h": {
         "en": "Probe",
         "id": "Pertanyaan"
        },
        "sub": {
         "en": "“Tell me about a time you…” — written in the interviewer's voice",
         "id": "“Ceritakan saat kamu…” — ditulis dengan suara pewawancara"
        }
       },
       {
        "h": {
         "en": "Your story",
         "id": "Ceritamu"
        },
        "sub": {
         "en": "The one tagged story that evidences it — their word used once",
         "id": "Satu cerita bertanda yang membuktikannya — kata mereka dipakai sekali"
        }
       }
      ],
      "longdesc": {
       "en": "A four-step flow: a value-word found repeated in public material is translated into the behaviour it describes, then into the probe an interviewer would ask, and finally matched to the one tagged story in your library that evidences it, told with their word used once.",
       "id": "Alur empat langkah: kata-nilai yang ditemukan berulang di materi publik diterjemahkan menjadi perilaku yang digambarkannya, lalu menjadi pertanyaan yang akan diajukan pewawancara, dan akhirnya dicocokkan dengan satu cerita bertanda di pustakamu yang membuktikannya, diceritakan dengan kata mereka dipakai sekali."
      }
     },
     "tryit": {
      "qid": "hr03",
      "label": {
       "en": "Use their language on “why us”",
       "id": "Pakai bahasa mereka untuk menjawab “mengapa kami”"
      },
      "desc": {
       "en": "Answer “why this company” naming one true, specific thing — the simulator checks for research signals.",
       "id": "Jawab “mengapa perusahaan ini” dengan menyebut satu hal yang benar dan spesifik — simulator akan memeriksa tanda-tanda bahwa kamu sudah riset."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "competency",
        "id": "kompetensi"
       },
       "def": {
        "en": "A capability a role requires — leadership, prioritisation, judgment — that interviews probe with behavioral evidence.",
        "id": "Kemampuan yang dituntut sebuah posisi — kepemimpinan, menentukan prioritas, pertimbangan — yang digali wawancara lewat bukti perilaku."
       }
      },
      {
       "term": {
        "en": "rubric",
        "id": "rubrik"
       },
       "def": {
        "en": "The written standard an answer is scored against — criteria plus what each level of quality looks like.",
        "id": "Standar tertulis yang dipakai untuk menilai sebuah jawaban — kriterianya, plus seperti apa wujud setiap tingkat kualitas."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A company lists “bias for action” among its principles. Your preparation move:",
        "id": "Sebuah perusahaan mencantumkan “bias for action” di antara prinsip-prinsipnya. Langkah persiapanmu:"
       },
       "options": [
        {
         "en": "Ready a story where you moved before certainty and it was the right call",
         "id": "Siapkan cerita ketika kamu bergerak sebelum ada kepastian, dan itu ternyata keputusan yang tepat"
        },
        {
         "en": "Memorise the principle's exact wording to recite in the interview",
         "id": "Hafalkan kata-kata persis prinsip itu untuk dibacakan saat wawancara"
        },
        {
         "en": "Assume it is marketing language with no interview relevance",
         "id": "Anggap itu bahasa pemasaran yang tidak ada hubungannya dengan wawancara"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — the principle predicts the probe. Evidence beats recitation.",
        "id": "Benar — prinsip itu meramalkan pertanyaannya. Bukti mengalahkan hafalan."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Quoting the values page back at them",
         "id": "Mengutip halaman nilai kembali ke mereka"
        },
        "fix": {
         "en": "Reciting “customer obsession” is flattery. Tell a story that demonstrates it and let them name the value.",
         "id": "Mengucapkan “obsesi pelanggan” adalah sanjungan. Ceritakan kisah yang menunjukkannya dan biarkan mereka menyebut nilainya."
        }
       },
       {
        "h": {
         "en": "Assuming all companies use the same words",
         "id": "Menganggap semua perusahaan memakai kata yang sama"
        },
        "fix": {
         "en": "“Ownership” at one firm means finishing; at another it means challenging the plan. Read their examples, not just their headings.",
         "id": "“Kepemilikan” di satu perusahaan berarti menyelesaikan; di yang lain berarti menantang rencana. Baca contoh mereka, bukan hanya judulnya."
        }
       },
       {
        "h": {
         "en": "Stopping at the careers page",
         "id": "Berhenti di halaman karier"
        },
        "fix": {
         "en": "Annual reports, leadership talks and employee posts show which values are actually rewarded this year.",
         "id": "Laporan tahunan, ceramah pimpinan, dan unggahan karyawan menunjukkan nilai mana yang benar-benar dihargai tahun ini."
        }
       }
      ]
     },
     "migratedFrom": "the-rope:3.2"
    },
    {
     "n": "3.2",
     "title": {
      "en": "Decoding Job Descriptions into Competency Maps",
      "id": "Mengurai Deskripsi Lowongan menjadi Peta Kompetensi"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "A job description is a leaked exam paper. Its repeated words, its first three bullets, its 'musts' versus 'nices' — all encode what the interview will probe. This lesson teaches the decoding method and the evidence table that turns any JD into your preparation plan.",
      "id": "Deskripsi lowongan adalah bocoran soal ujian. Kata-kata yang berulang, tiga butir pertamanya, syarat “wajib” versus “nilai tambah” — semuanya menyimpan kode tentang apa yang akan digali wawancara. Pelajaran ini mengajarkan metode menguraikannya, dan tabel bukti yang mengubah deskripsi lowongan apa pun menjadi rencana persiapanmu."
     },
     "objectives": [
      {
       "en": "Extract the three requirements a JD actually cares about.",
       "id": "Mengambil tiga persyaratan yang benar-benar dipentingkan sebuah deskripsi lowongan."
      },
      {
       "en": "Predict interview questions from requirement lines.",
       "id": "Meramalkan pertanyaan wawancara dari baris-baris persyaratan."
      },
      {
       "en": "Build a requirement → evidence table before any interview.",
       "id": "Menyusun tabel persyaratan → bukti sebelum wawancara mana pun."
      }
     ],
     "takeawaysLead": {
      "en": "A job description is a leaked exam paper. To decode it into your preparation checklist, you can:",
      "id": "Deskripsi pekerjaan adalah lembar ujian yang bocor. Untuk menguraikannya menjadi daftar periksa persiapanmu, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Repetition is emphasis: any word appearing three times in a JD will appear in the interview.",
       "id": "Pengulangan adalah penekanan: kata apa pun yang muncul tiga kali di deskripsi lowongan akan muncul di wawancara."
      },
      {
       "en": "The first three bullets are the job; the rest is the wishlist.",
       "id": "Tiga butir pertama adalah pekerjaannya; sisanya daftar keinginan."
      },
      {
       "en": "A completed evidence table converts interview anxiety into a checklist.",
       "id": "Tabel bukti yang sudah terisi mengubah kecemasan menghadapi wawancara menjadi daftar periksa."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "Anatomy of a JD",
        "id": "Anatomi sebuah deskripsi lowongan"
       },
       "body": {
        "en": "Title and level set the altitude of expected answers. The opening paragraph names the team's mission — echo it in your “why this role”. Responsibilities describe the actual Tuesday; requirements describe the filter. Watch the verbs: “own” signals autonomy tests, “support” signals collaboration tests, “drive” signals influence-without-authority tests.",
        "id": "Judul dan level menentukan ketinggian jawaban yang diharapkan. Paragraf pembuka menyebutkan misi tim — gaungkan itu dalam jawaban “mengapa posisi ini”-mu. Bagian tanggung jawab menggambarkan hari Selasa yang sebenarnya; bagian persyaratan menggambarkan saringannya. Perhatikan kata kerjanya: “memiliki” menandakan uji kemandirian, “mendukung” menandakan uji kolaborasi, “mendorong” menandakan uji kemampuan memengaruhi tanpa wewenang."
       }
      },
      {
       "h": {
        "en": "The decoding method",
        "id": "Metode menguraikannya"
       },
       "body": {
        "en": "Pass one: highlight every skill or behaviour word. Pass two: count repetitions — three appearances make a core theme. Pass three: separate musts from nices, and note which musts you can evidence strongly, weakly, or not at all. The weak cells are your preparation priorities and your likely difficult questions.",
        "id": "Putaran pertama: tandai setiap kata yang menyebut keterampilan atau perilaku. Putaran kedua: hitung pengulangannya — muncul tiga kali berarti tema inti. Putaran ketiga: pisahkan yang wajib dari yang nilai tambah, dan catat syarat wajib mana yang bisa kamu buktikan dengan kuat, lemah, atau sama sekali belum bisa. Sel-sel yang lemah adalah prioritas persiapanmu, sekaligus calon pertanyaan sulitmu."
       }
      },
      {
       "h": {
        "en": "The evidence table",
        "id": "Tabel bukti"
       },
       "body": {
        "en": "Three columns: requirement, my evidence, the number in it. Fill it for the top five requirements. Where a cell is empty, decide honestly: is there a story you have not mined, or is this a real gap you should acknowledge with a ramp-up plan? Interviewers respect a named gap with a plan far more than a bluffed strength.",
        "id": "Tiga kolom: persyaratan, bukti saya, angka di dalamnya. Isi untuk lima persyaratan teratas. Kalau ada sel yang kosong, putuskan dengan jujur: adakah cerita yang belum kamu tambang, atau ini celah nyata yang sebaiknya kamu akui disertai rencana untuk mengejarnya? Pewawancara jauh lebih menghargai celah yang diakui beserta rencananya daripada kekuatan yang digertakkan."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "The JD decode, in four passes",
       "id": "Mengurai deskripsi lowongan, dalam empat putaran"
      },
      "items": [
       {
        "h": {
         "en": "Highlight",
         "id": "Tandai"
        },
        "sub": {
         "en": "Every skill and behaviour word",
         "id": "Setiap kata keterampilan dan perilaku"
        }
       },
       {
        "h": {
         "en": "Count",
         "id": "Hitung"
        },
        "sub": {
         "en": "Three appearances = a core theme",
         "id": "Muncul tiga kali = tema inti"
        }
       },
       {
        "h": {
         "en": "Split",
         "id": "Pisahkan"
        },
        "sub": {
         "en": "Musts vs nice-to-haves",
         "id": "Wajib vs nilai tambah"
        }
       },
       {
        "h": {
         "en": "Table",
         "id": "Tabel"
        },
        "sub": {
         "en": "Requirement → my evidence → the number in it",
         "id": "Persyaratan → bukti saya → angka di dalamnya"
        }
       }
      ],
      "note": {
       "en": "The weak cells of the table are your preparation priorities — and your likely difficult questions.",
       "id": "Sel-sel yang lemah di tabel itu adalah prioritas persiapanmu — sekaligus calon pertanyaan sulitmu."
      },
      "exhibit": {
       "en": "Exhibit 1: The JD decode, in four passes",
       "id": "Peraga 1: Mengurai deskripsi lowongan, dalam empat putaran"
      },
      "longdesc": {
       "en": "Diagram of The JD decode, in four passes. It presents, in order: Highlight — Every skill and behaviour word; Count — Three appearances = a core theme; Split — Musts vs nice-to-haves; Table — Requirement → my evidence → the number in it.",
       "id": "Diagram mengurai deskripsi lowongan dalam empat putaran. Menyajikan, secara berurutan: Tandai — setiap kata keterampilan dan perilaku; Hitung — muncul tiga kali = tema inti; Pisahkan — wajib vs nilai tambah; Tabel — persyaratan → bukti saya → angka di dalamnya."
      }
     },
     "tryit": {
      "qid": "hr04",
      "label": {
       "en": "Answer “why this role” from the decode",
       "id": "Jawab “mengapa posisi ini” dari hasil uraianmu"
      },
      "desc": {
       "en": "Quote the JD back in your own words and map two demands to two proofs.",
       "id": "Ulangi isi deskripsi lowongan dengan bahasamu sendiri, dan pasangkan dua tuntutannya dengan dua bukti milikmu."
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Preparing for every listed requirement equally",
         "id": "Menyiapkan semua persyaratan dengan bobot yang sama"
        },
        "fix": {
         "en": "Weight by repetition and position: three mentions or first-three-bullets = the interview's core.",
         "id": "Beri bobot berdasarkan pengulangan dan posisi: disebut tiga kali, atau ada di tiga butir pertama = inti wawancaranya."
        }
       },
       {
        "h": {
         "en": "Ignoring the JD's own vocabulary",
         "id": "Mengabaikan kosakata deskripsi lowongan itu sendiri"
        },
        "fix": {
         "en": "Echo their words once, naturally — the interviewer wrote that JD and hears the match.",
         "id": "Gaungkan kata-kata mereka satu kali, secara alami — pewawancara itulah yang menulis deskripsi lowongannya, dan ia mendengar kecocokannya."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "A JD lists “stakeholder management” in its first bullet and twice more below. You should:",
        "id": "Sebuah deskripsi lowongan mencantumkan “stakeholder management” di butir pertama, dan dua kali lagi di bawahnya. Kamu sebaiknya:"
       },
       "options": [
        {
         "en": "Plan to ask the interviewer what they mean by it",
         "id": "Berencana menanyakan maksudnya kepada pewawancara"
        },
        {
         "en": "Prepare your strongest stakeholder story with a measurable outcome",
         "id": "Menyiapkan cerita terkuatmu tentang pemangku kepentingan, dengan hasil yang terukur"
        },
        {
         "en": "Ignore it — it appears in every JD",
         "id": "Mengabaikannya — itu muncul di semua deskripsi lowongan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Correct — first position plus repetition marks the core competency. It will be probed; arrive with evidence.",
        "id": "Benar — posisi pertama plus pengulangan menandai kompetensi inti. Itu pasti digali; datanglah dengan bukti."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      },
      {
       "term": {
        "en": "influence",
        "id": "pengaruh"
       },
       "def": {
        "en": "Moving people and decisions without formal authority — evidence of leadership before the title arrives.",
        "id": "Menggerakkan orang dan keputusan tanpa wewenang formal — bukti kepemimpinan sebelum jabatannya datang."
       }
      }
     ],
     "resources": {
      "items": [
       {
        "kind": "worksheet",
        "title": {
         "en": "JD decoding sheet",
         "id": "Lembar penguraian JD"
        },
        "desc": {
         "en": "Fifteen minutes per job description. Output: the competencies they will probe and which story covers each.",
         "id": "Lima belas menit per deskripsi pekerjaan. Keluaran: kompetensi yang akan mereka gali dan cerita mana yang mencakup masing-masing."
        },
        "body": [
         {
          "en": "1. Circle every repeated word or phrase (appears twice or more) — these are the obsessions.",
          "id": "1. Lingkari setiap kata atau frasa yang berulang (muncul dua kali atau lebih) — inilah obsesi mereka."
         },
         {
          "en": "2. First three bullets under responsibilities = the daily job. Translate each into a competency (deliver, analyse, influence, own…).",
          "id": "2. Tiga butir pertama di bawah tanggung jawab = pekerjaan harian. Terjemahkan masing-masing menjadi kompetensi (menyampaikan, menganalisis, memengaruhi, memiliki…)."
         },
         {
          "en": "3. “Must” vs “nice”: musts will be probed directly; nices decide ties.",
          "id": "3. “Wajib” vs “diutamakan”: yang wajib akan digali langsung; yang diutamakan menentukan seri."
         },
         {
          "en": "4. Verbs tell you the altitude: “support” (junior), “own” (mid), “drive” or “define” (senior).",
          "id": "4. Kata kerja memberi tahu ketinggian: “mendukung” (junior), “memiliki” (menengah), “mendorong” atau “mendefinisikan” (senior)."
         },
         {
          "en": "5. Map: competency → my best story → my second story → gap? If gap, what is the honest closest example?",
          "id": "5. Petakan: kompetensi → cerita terbaikku → cerita keduaku → celah? Jika celah, apa contoh jujur yang paling dekat?"
         },
         {
          "en": "6. Write the three questions you would ask if you were interviewing for this JD. Prepare those.",
          "id": "6. Tulis tiga pertanyaan yang akan kamu ajukan jika kamu yang mewawancarai untuk JD ini. Siapkan itu."
         }
        ]
       }
      ]
     },
     "migratedFrom": "the-rope:3.3"
    },
    {
     "n": "3.3",
     "title": {
      "en": "Matching Your Story Library to the Target Framework",
      "id": "Mencocokkan Perpustakaan Cerita dengan Kerangka yang Dituju"
     },
     "kind": "interactive",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The final assembly step: your tagged stories on one axis, the target role's competencies on the other. The matrix shows instantly which stories to polish, which competencies are uncovered, and which single story is your workhorse. Twenty minutes of matrix beats two hours of unfocused rehearsal.",
      "id": "Langkah perakitan terakhir: cerita-ceritamu yang sudah berlabel di satu sumbu, kompetensi posisi yang dituju di sumbu lainnya. Matriksnya seketika memperlihatkan cerita mana yang perlu dipoles, kompetensi mana yang belum tertutup, dan satu cerita mana yang menjadi andalanmu. Dua puluh menit menyusun matriks mengalahkan dua jam latihan tanpa fokus."
     },
     "objectives": [
      {
       "en": "Build the story × competency matrix for a real target role.",
       "id": "Menyusun matriks cerita × kompetensi untuk posisi sungguhan yang kamu tuju."
      },
      {
       "en": "Identify coverage gaps and workhorse stories.",
       "id": "Mengenali celah cakupan dan cerita-cerita andalan."
      },
      {
       "en": "Plan the final polish order before an interview loop.",
       "id": "Merencanakan urutan pemolesan akhir sebelum rangkaian wawancara."
      }
     ],
     "takeawaysLead": {
      "en": "Twenty minutes of matrix beat hours of vague rehearsal. To assemble your library against the target framework, you can:",
      "id": "Dua puluh menit matriks mengalahkan berjam-jam latihan yang samar. Untuk menyusun pustakamu terhadap kerangka target, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "The matrix turns preparation from a mood into a checklist.",
       "id": "Matriks mengubah persiapan dari sekadar suasana hati menjadi daftar periksa."
      },
      {
       "en": "A workhorse story covering three competencies deserves triple polish.",
       "id": "Cerita andalan yang menutup tiga kompetensi layak dipoles tiga kali lebih keras."
      },
      {
       "en": "An uncovered competency is a predictable ambush — mine or plan for it now.",
       "id": "Kompetensi yang belum tertutup adalah penyergapan yang bisa diramalkan — tambang, atau siapkan rencananya sekarang."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "Building the matrix",
        "id": "Menyusun matriksnya"
       },
       "body": {
        "en": "Rows: your eight to twelve stories. Columns: the role's five to seven competencies, from the JD decode and any published framework. Mark each cell where a story genuinely evidences a competency. Ten honest minutes. The picture that emerges — clusters, gaps, one column empty — is your entire preparation agenda.",
        "id": "Baris: delapan sampai dua belas ceritamu. Kolom: lima sampai tujuh kompetensi posisi itu, dari uraian deskripsi lowongan dan kerangka yang diterbitkan, kalau ada. Tandai setiap sel tempat sebuah cerita benar-benar membuktikan sebuah kompetensi. Sepuluh menit yang jujur. Gambaran yang muncul — kelompok-kelompok, celah, satu kolom yang kosong — adalah seluruh agenda persiapanmu."
       }
      },
      {
       "h": {
        "en": "Reading the picture",
        "id": "Membaca gambarannya"
       },
       "body": {
        "en": "A story with three or more marks is a workhorse: rehearse it at all three altitudes. A competency column with two-plus stories lets you vary answers across a long loop without repeating. An empty column is tomorrow's ambush. And a story with zero marks may simply not belong in this interview — retire it without guilt.",
        "id": "Cerita dengan tiga tanda atau lebih adalah andalan: latih pada ketiga ketinggian. Kolom kompetensi dengan dua cerita atau lebih membuatmu bisa memvariasikan jawaban sepanjang rangkaian yang panjang tanpa mengulang. Kolom yang kosong adalah penyergapan esok hari. Dan cerita tanpa satu pun tanda mungkin memang tidak cocok untuk wawancara ini — pensiunkan tanpa rasa bersalah."
       }
      }
     ],
     "diagram": {
      "type": "quad",
      "exhibit": {
       "en": "Exhibit 1: Reading the story matrix — what each pattern of marks tells you to do next.",
       "id": "Peraga 1: Membaca matriks cerita — apa yang diperintahkan tiap pola tanda untuk dilakukan berikutnya."
      },
      "title": {
       "en": "Stories × competencies",
       "id": "Cerita × kompetensi"
      },
      "items": [
       {
        "h": {
         "en": "Workhorse story",
         "id": "Cerita andalan"
        },
        "sub": {
         "en": "Three or more marks — rehearse it at all three altitudes",
         "id": "Tiga tanda atau lebih — latih di ketiga ketinggian"
        }
       },
       {
        "h": {
         "en": "Deep column",
         "id": "Kolom dalam"
        },
        "sub": {
         "en": "Two-plus stories for one competency — vary answers across a long loop",
         "id": "Dua cerita atau lebih untuk satu kompetensi — variasikan jawaban sepanjang rangkaian panjang"
        }
       },
       {
        "h": {
         "en": "Empty column",
         "id": "Kolom kosong"
        },
        "sub": {
         "en": "A predictable ambush — mine a story now or plan the honest partial answer",
         "id": "Penyergapan yang bisa diprediksi — tambang cerita sekarang atau siapkan jawaban parsial yang jujur"
        }
       },
       {
        "h": {
         "en": "Single-mark story",
         "id": "Cerita satu tanda"
        },
        "sub": {
         "en": "Keep it lean — one altitude, one competency, polish last",
         "id": "Jaga tetap ringkas — satu ketinggian, satu kompetensi, poles terakhir"
        }
       }
      ],
      "longdesc": {
       "en": "A two-by-two grid of the patterns a story matrix produces: a workhorse story with three or more marks earns triple polish; a competency column with two or more stories lets you vary answers; an empty column is a predictable ambush to mine for now; and a story with a single mark is kept lean and polished last.",
       "id": "Kisi dua kali dua berisi pola yang dihasilkan matriks cerita: cerita andalan dengan tiga tanda atau lebih layak dipoles tiga kali; kolom kompetensi dengan dua cerita atau lebih memungkinkanmu memvariasikan jawaban; kolom kosong adalah penyergapan yang bisa diprediksi dan harus ditambang sekarang; dan cerita dengan satu tanda dijaga ringkas dan dipoles terakhir."
      }
     },
     "steps": [
      {
       "h": {
        "en": "Step 1 · Draw it for a real role",
        "id": "Langkah 1 · Gambar untuk posisi sungguhan"
       },
       "body": {
        "en": "Pick a role you actually want. Decode its JD into five to seven competencies, list your stories, and mark the matrix — paper or spreadsheet, ten minutes, no perfectionism.",
        "id": "Pilih posisi yang benar-benar kamu inginkan. Uraikan deskripsi lowongannya menjadi lima sampai tujuh kompetensi, daftar ceritamu, dan tandai matriksnya — di kertas atau spreadsheet, sepuluh menit, tanpa perfeksionisme."
       },
       "debrief": {
        "en": "Common surprise: your proudest story evidences fewer target competencies than a humbler one. The matrix judges fit, not prestige — trust it. The humble story with three marks is the one to polish tonight.",
        "id": "Kejutan yang lazim: cerita yang paling kamu banggakan ternyata membuktikan lebih sedikit kompetensi target daripada cerita yang lebih sederhana. Matriks menilai kecocokan, bukan gengsi — percayalah padanya. Cerita sederhana dengan tiga tanda itulah yang harus dipoles malam ini."
       }
      },
      {
       "h": {
        "en": "Step 2 · Attack the gaps",
        "id": "Langkah 2 · Serang celahnya"
       },
       "body": {
        "en": "For each empty column, run the mining protocol from lesson 2.3 aimed specifically at that competency. If nothing surfaces, draft the honest acknowledgment: the gap, why it exists, your ramp-up plan.",
        "id": "Untuk setiap kolom yang kosong, jalankan protokol penambangan dari pelajaran 2.3 yang dibidikkan khusus ke kompetensi itu. Kalau tetap tidak ada yang muncul, susun pengakuan yang jujur: celahnya, mengapa celah itu ada, dan rencanamu untuk mengejarnya."
       },
       "debrief": {
        "en": "An honest gap statement sounds like: “Direct people management I haven't done yet — I've led through influence in two projects, and management is exactly the growth this role offers.” Ownership of the gap plus adjacent evidence plus motive. That answer scores; a bluff does not.",
        "id": "Pengakuan celah yang jujur berbunyi seperti ini: “Mengelola orang secara langsung memang belum pernah saya lakukan — di dua proyek saya memimpin lewat pengaruh, dan pengalaman manajerial adalah persis pertumbuhan yang ditawarkan posisi ini.” Mengakui celah, plus bukti yang berdekatan, plus motivasi. Jawaban seperti itu dapat nilai; gertakan tidak."
       }
      },
      {
       "h": {
        "en": "Step 3 · Set the polish order",
        "id": "Langkah 3 · Tetapkan urutan pemolesan"
       },
       "body": {
        "en": "Rank: workhorse stories first, then stories covering rare competencies, then the rest. Rehearse aloud in that order — the simulator in Module 9 runs exactly these priorities with you.",
        "id": "Urutkan: cerita andalan lebih dulu, lalu cerita yang menutup kompetensi langka, lalu sisanya. Latih dengan suara keras dalam urutan itu — simulator di Modul 9 menjalankan prioritas yang persis sama bersamamu."
       },
       "debrief": {
        "en": "Polish means: spoken aloud three times, timed under two minutes, one number verified, learning line sharpened. Four passes per story. With the matrix set, Module 9's simulation stops being scary and becomes a test drive of a machine you built.",
        "id": "Memoles artinya: diucapkan dengan suara keras tiga kali, diukur di bawah dua menit, satu angka diverifikasi, kalimat pembelajaran dipertajam. Empat putaran per cerita. Dengan matriks yang sudah siap, simulasi di Modul 9 berhenti menakutkan dan berubah menjadi uji jalan atas mesin yang kamu bangun sendiri."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "An empty matrix column — bluffed vs owned",
        "id": "Kolom matriks yang kosong — digertak vs diakui"
       },
       "q": {
        "en": "“This role needs direct people management. Have you done it?”",
        "id": "“Posisi ini butuh pengalaman mengelola orang secara langsung. Sudah pernah?”"
       },
       "weak": {
        "en": "Yes, definitely — I basically managed people in most of my projects, like coordinating and things like that.",
        "id": "Ya, tentu — saya pada dasarnya mengelola orang di hampir semua proyek saya, misalnya koordinasi dan hal-hal semacam itu."
       },
       "strong": {
        "en": "Direct people management I haven't done yet — I want to be straightforward about that. What I have done is lead through influence: in two projects I set the plan, ran the reviews, and coached one junior member weekly. Management is exactly the growth this role offers, and it's why I want it.",
        "id": "Mengelola orang secara langsung memang belum pernah — saya ingin jujur soal itu. Yang sudah saya lakukan adalah memimpin lewat pengaruh: di dua proyek, saya yang menyusun rencananya, memimpin review-nya, dan membimbing satu anggota junior setiap minggu. Pengalaman manajerial adalah persis pertumbuhan yang ditawarkan posisi ini, dan itulah alasan saya menginginkannya."
       },
       "why": {
        "en": "The bluff dies at the first follow-up. The owned gap earns trust, shows adjacent evidence, and turns the weakness into motive.",
        "id": "Gertakan mati di pertanyaan lanjutan pertama. Celah yang diakui menuai kepercayaan, memperlihatkan bukti yang berdekatan, dan mengubah kelemahan menjadi motivasi."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Your matrix shows one competency with no story. Best move:",
        "id": "Matriksmu menunjukkan satu kompetensi tanpa cerita. Langkah terbaik:"
       },
       "options": [
        {
         "en": "Hope the interview skips that competency",
         "id": "Berharap wawancaranya melewatkan kompetensi itu"
        },
        {
         "en": "Reuse any strong story and claim it fits",
         "id": "Memakai ulang cerita kuat mana pun dan mengklaimnya cocok"
        },
        {
         "en": "Mine deliberately for a story there, or prepare an honest gap acknowledgment",
         "id": "Menambang cerita secara khusus untuk itu, atau menyiapkan pengakuan celah yang jujur"
        }
       ],
       "correct": 2,
       "why": {
        "en": "Correct — hope is not preparation, and forced fits collapse under follow-ups. Mine or acknowledge.",
        "id": "Benar — berharap bukan persiapan, dan kecocokan yang dipaksakan runtuh oleh pertanyaan lanjutan. Tambang, atau akui."
       }
      }
     ],
     "tryit": {
      "qid": "dc06",
      "label": {
       "en": "Drill your own gap acknowledgment",
       "id": "Latih pengakuan celahmu sendiri"
      },
      "desc": {
       "en": "“What do you bring instead of formal experience?” — one calm sentence, then evidence.",
       "id": "“Apa yang Anda tawarkan sebagai pengganti pengalaman formal?” — satu kalimat yang tenang, lalu bukti."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "competency",
        "id": "kompetensi"
       },
       "def": {
        "en": "A capability a role requires — leadership, prioritisation, judgment — that interviews probe with behavioral evidence.",
        "id": "Kemampuan yang dituntut sebuah posisi — kepemimpinan, menentukan prioritas, pertimbangan — yang digali wawancara lewat bukti perilaku."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      }
     ],
     "resources": {
      "items": [
       {
        "kind": "template",
        "title": {
         "en": "Story × competency matrix",
         "id": "Matriks cerita × kompetensi"
        },
        "desc": {
         "en": "Paste into a spreadsheet. Rows = stories, columns = the target role’s competencies.",
         "id": "Tempel ke spreadsheet. Baris = cerita, kolom = kompetensi peran tujuan."
        },
        "body": [
         {
          "en": "Story title | Setting | Ownership | Problem solving | Influence | Collaboration | Resilience | Learning | Delivery | Judgment | Customer | Integrity",
          "id": "Judul cerita | Latar | Kepemilikan | Pemecahan masalah | Pengaruh | Kolaborasi | Ketahanan | Pembelajaran | Penyampaian | Penilaian | Pelanggan | Integritas"
         },
         {
          "en": "Mark ● primary proof, ○ secondary proof. Column totals under 2 = uncovered; row totals over 4 = over-used.",
          "id": "Tandai ● bukti utama, ○ bukti sekunder. Total kolom di bawah 2 = belum tercakup; total baris di atas 4 = terlalu sering dipakai."
         },
         {
          "en": "Polish order: stories with the most ● in “must” columns first.",
          "id": "Urutan pemolesan: cerita dengan ● terbanyak di kolom “wajib” lebih dulu."
         }
        ]
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Polishing the stories you like",
         "id": "Memoles cerita yang kamu sukai"
        },
        "fix": {
         "en": "Polish the stories that cover the most uncovered competencies. The matrix decides, not your affection.",
         "id": "Poles cerita yang mencakup paling banyak kompetensi belum tercakup. Matriks yang memutuskan, bukan kesukaanmu."
        }
       },
       {
        "h": {
         "en": "Leaving a competency at zero",
         "id": "Membiarkan satu kompetensi kosong"
        },
        "fix": {
         "en": "An uncovered “must” is an interview lost. Mine again, or prepare the honest adjacent example and say it is adjacent.",
         "id": "“Wajib” yang belum tercakup berarti wawancara yang hilang. Tambang lagi, atau siapkan contoh jujur yang berdekatan dan katakan itu berdekatan."
        }
       },
       {
        "h": {
         "en": "One story carrying five competencies",
         "id": "Satu cerita menanggung lima kompetensi"
        },
        "fix": {
         "en": "Interviewers notice the same project every answer. Spread the load across at least four settings.",
         "id": "Pewawancara menyadari proyek yang sama di setiap jawaban. Sebar bebannya ke setidaknya empat latar."
        }
       }
      ]
     },
     "journey": {
      "before": {
       "label": {
        "en": "Module 2 · the library",
        "id": "Modul 2 · perpustakaannya"
       },
       "desc": {
        "en": "Tagged stories at three altitudes.",
        "id": "Cerita bertag di tiga ketinggian."
       }
      },
      "now": {
       "label": {
        "en": "Module 3 · aimed at the rubric",
        "id": "Modul 3 · diarahkan ke rubrik"
       },
       "desc": {
        "en": "Anchored scales, company frameworks, decoded JDs and a matrix that shows what to polish.",
        "id": "Skala berjangkar, kerangka perusahaan, JD yang diuraikan, dan matriks yang menunjukkan apa yang harus dipoles."
       }
      },
      "next": {
       "label": {
        "en": "Module 5 · the HR interview",
        "id": "Modul 5 · wawancara HR"
       },
       "desc": {
        "en": "Five questions HR needs answered, the positioning statement and the answer systems for the predictable questions.",
        "id": "Lima pertanyaan yang perlu dijawab HR, pernyataan pemosisian, dan sistem jawaban untuk pertanyaan yang bisa diprediksi."
       },
       "lesson": "5.1"
      }
     },
     "migratedFrom": "the-rope:3.4"
    }
   ],
   "hero": "../../assets/bg/gauntlet/gate-04-casestudy.jpg",
   "heroPos": "56% 22%"
  },
  {
   "num": 4,
   "phase": "prepare",
   "title": {
    "en": "Your Opening and Core Message",
    "id": "Pembuka dan Pesan Utamamu"
   },
   "overview": {
    "en": "“Tell me about yourself”, “why us”, “why should we hire you”, strengths and weakness are asked in every format, by every interviewer, and they set the frame for everything that follows. This module builds the five-point core message that runs underneath them all, a 60-second opening in English and Indonesian, a researched “why this company” answer, and a real-weakness answer — each delivered naturally, not recited, and consistent with your Story Bank.",
    "id": "“Ceritakan tentang diri Anda”, “mengapa kami”, “mengapa kami harus merekrut Anda”, kekuatan dan kelemahan ditanyakan di setiap format, oleh setiap pewawancara, dan menetapkan kerangka untuk semua yang mengikuti. Modul ini membangun pesan utama lima poin yang mengalir di bawah semuanya, pembuka 60 detik dalam bahasa Inggris dan Indonesia, jawaban “mengapa perusahaan ini” hasil riset, dan jawaban kelemahan nyata — masing-masing disampaikan alami, bukan dibacakan, dan konsisten dengan Bank Ceritamu."
   },
   "outcome": {
    "en": "By the end of this module you have a five-point core message, a 60-second opening in English and Indonesian, a researched “why this company/role” answer, a real-weakness answer and a strengths answer — each delivered naturally (not recited) and consistent with your Story Bank.",
    "id": "Di akhir modul ini kamu punya pesan utama lima poin, pembuka 60 detik dalam bahasa Inggris dan Indonesia, jawaban “mengapa perusahaan/peran ini” hasil riset, jawaban kelemahan nyata, dan jawaban kekuatan — masing-masing disampaikan alami (bukan dibacakan) dan konsisten dengan Bank Ceritamu."
   },
   "kit": {
    "en": "5-point agenda · 60-second opening (EN/ID) · “why us” (REC) · weakness answer · strengths answer",
    "id": "Agenda 5 poin · pembuka 60 detik (EN/ID) · “mengapa kami” (REC) · jawaban kelemahan · jawaban kekuatan"
   },
   "lessons": [
    {
     "n": "4.1",
     "title": {
      "en": "The Positioning Statement System",
      "id": "Sistem Positioning Statement"
     },
     "kind": "reading",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "“Tell me about yourself” opens most interviews, and most candidates retell their CV chronologically — the one structure guaranteed to be forgettable. The positioning statement replaces chronology with an argument: present, proof, why-here. Ninety seconds, three moves, built once and tailored per company.",
      "id": "“Ceritakan tentang diri Anda” membuka sebagian besar wawancara, dan sebagian besar kandidat menceritakan ulang CV-nya secara kronologis — satu-satunya struktur yang dijamin terlupakan. Positioning statement mengganti kronologi dengan sebuah argumen: posisi saat ini, bukti, alasan ke sini. Sembilan puluh detik, tiga langkah, dibangun sekali dan disesuaikan untuk tiap perusahaan."
     },
     "objectives": [
      {
       "en": "Build your present → proof → why-here statement.",
       "id": "Membangun pernyataan posisi saat ini → bukti → alasan ke sini milikmu."
      },
      {
       "en": "Compress it into a 30-second version for unexpected moments.",
       "id": "Memadatkannya menjadi versi 30 detik untuk momen-momen tak terduga."
      },
      {
       "en": "Tailor the why-here per company without rebuilding the whole statement.",
       "id": "Menyesuaikan bagian “alasan ke sini” untuk tiap perusahaan tanpa membangun ulang seluruh pernyataan."
      }
     ],
     "takeawaysLead": {
      "en": "Chronology is the one structure guaranteed to be forgettable. To answer “tell me about yourself” as an argument, you can:",
      "id": "Kronologi adalah satu-satunya struktur yang dijamin mudah dilupakan. Untuk menjawab “ceritakan tentang dirimu” sebagai argumen, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Position first: who you are professionally in one sentence, not your life story.",
       "id": "Posisi lebih dulu: siapa kamu secara profesional dalam satu kalimat, bukan riwayat hidupmu."
      },
      {
       "en": "Proof next: two examples with numbers that make the position undeniable.",
       "id": "Bukti berikutnya: dua contoh dengan angka yang membuat posisi itu tidak terbantahkan."
      },
      {
       "en": "Why-here last: the specific bridge between your direction and this company.",
       "id": "Alasan ke sini di akhir: jembatan yang spesifik antara arahmu dan perusahaan ini."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "Move one — present",
        "id": "Langkah satu — posisi saat ini"
       },
       "body": {
        "en": "One sentence that frames you professionally: “I'm a data analyst who turns messy operational data into decisions retail teams actually use.” Identity plus flavour plus value, no adjectives about your personality. This sentence is the thesis; everything after supports it. Write ten versions, keep the one that sounds like you on a good day.",
        "id": "Satu kalimat yang membingkaimu secara profesional: “Saya analis data yang mengubah data operasional yang berantakan menjadi keputusan yang benar-benar dipakai tim ritel.” Identitas plus ciri khas plus nilai, tanpa kata sifat tentang kepribadianmu. Kalimat ini adalah tesisnya; semua yang datang sesudahnya mendukungnya. Tulis sepuluh versi, simpan yang paling terdengar seperti dirimu di hari yang baik."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "Move two — proof",
        "id": "Langkah dua — bukti"
       },
       "body": {
        "en": "Two examples, each one breath long, each with a number: “Last year I automated the weekly stock report — four hours saved per branch per week. Before that I led our campus team to a national final.” Proof converts the thesis from claim to fact. Choose examples pointing toward the target role, not your two biggest trophies.",
        "id": "Dua contoh, masing-masing sepanjang satu tarikan napas, masing-masing dengan angka: “Tahun lalu saya mengotomatiskan laporan stok mingguan — hemat empat jam per cabang per minggu. Sebelumnya, saya memimpin tim kampus sampai ke final nasional.” Bukti mengubah tesis dari klaim menjadi fakta. Pilih contoh yang mengarah ke posisi yang kamu tuju, bukan dua trofi terbesarmu."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "Move three — why here",
        "id": "Langkah tiga — alasan ke sini"
       },
       "body": {
        "en": "Close the loop into their room: “Which is why this role drew me — you're scaling exactly the kind of operations data problem I want to spend the next years on.” Specific to the company, one sentence, forward-facing. This is the only part you rebuild per interview; the rest travels with you.",
        "id": "Tutup lingkarannya ke ruangan mereka: “Itulah sebabnya posisi ini menarik bagi saya — Anda sedang mengembangkan persis jenis persoalan data operasional yang ingin saya tekuni dalam beberapa tahun ke depan.” Spesifik untuk perusahaan itu, satu kalimat, menghadap ke depan. Hanya bagian ini yang kamu bangun ulang untuk tiap wawancara; sisanya ikut ke mana pun kamu pergi."
       },
       "icon": "target"
      },
      {
       "h": {
        "en": "The 30-second version",
        "id": "Versi 30 detik"
       },
       "body": {
        "en": "Elevators, webinar chats, unexpected introductions: thesis plus one proof plus one interest line. Practise both versions aloud until the transition between them is a dial, not a different speech. When adrenaline hits, you will speak whichever version you rehearsed more — so rehearse the long one at least three times aloud.",
        "id": "Di lift, di kolom obrolan webinar, di perkenalan yang tak terduga: tesis plus satu bukti plus satu kalimat tentang minatmu. Latih kedua versi dengan suara keras sampai perpindahan di antara keduanya terasa seperti memutar kenop, bukan berganti pidato. Ketika adrenalin datang, yang keluar adalah versi yang lebih sering kamu latih — jadi latih versi panjangnya minimal tiga kali dengan suara keras."
       },
       "icon": "chat"
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "The positioning statement — three moves",
       "id": "Positioning statement — tiga langkah"
      },
      "items": [
       {
        "h": {
         "en": "Present",
         "id": "Posisi saat ini"
        },
        "sub": {
         "en": "Who you are professionally, one sentence",
         "id": "Siapa kamu secara profesional, satu kalimat"
        }
       },
       {
        "h": {
         "en": "Proof",
         "id": "Bukti"
        },
        "sub": {
         "en": "Two examples with numbers",
         "id": "Dua contoh dengan angka"
        }
       },
       {
        "h": {
         "en": "Why here",
         "id": "Alasan ke sini"
        },
        "sub": {
         "en": "The bridge to this company, one sentence",
         "id": "Jembatan ke perusahaan ini, satu kalimat"
        }
       }
      ],
      "note": {
       "en": "Ninety seconds total. Only the last move is rebuilt per company — the rest travels with you.",
       "id": "Total sembilan puluh detik. Hanya langkah terakhir yang dibangun ulang untuk tiap perusahaan — sisanya ikut ke mana pun kamu pergi."
      },
      "exhibit": {
       "en": "Exhibit 1: The positioning statement — three moves",
       "id": "Peraga 1: Positioning statement — tiga langkah"
      },
      "longdesc": {
       "en": "Diagram of The positioning statement — three moves. It presents, in order: Present — Who you are professionally, one sentence; Proof — Two examples with numbers; Why here — The bridge to this company, one sentence.",
       "id": "Diagram positioning statement — tiga langkah. Menyajikan, secara berurutan: Posisi saat ini — siapa kamu secara profesional, satu kalimat; Bukti — dua contoh dengan angka; Alasan ke sini — jembatan ke perusahaan ini, satu kalimat."
      }
     },
     "compare": [
      {
       "tag": {
        "en": "“Tell me about yourself” — chronology vs argument",
        "id": "“Ceritakan tentang diri Anda” — kronologi vs argumen"
       },
       "weak": {
        "en": "So I graduated in 2023 from industrial engineering, then I joined a company as an admin staff, then I moved to another company, and now I'm looking for new opportunities in data.",
        "id": "Jadi saya lulus tahun 2023 dari teknik industri, lalu saya bergabung ke sebuah perusahaan sebagai staf admin, lalu pindah ke perusahaan lain, dan sekarang saya sedang mencari peluang baru di bidang data."
       },
       "strong": {
        "en": "I'm a data analyst who turns messy operational data into decisions retail teams actually use. Last year I automated a weekly stock report that saved each branch four hours a week; before that I led a campus team to a national final. That's why this role caught me — you're scaling exactly this kind of operations problem.",
        "id": "Saya analis data yang mengubah data operasional yang berantakan menjadi keputusan yang benar-benar dipakai tim ritel. Tahun lalu saya mengotomatiskan laporan stok mingguan yang menghemat empat jam per cabang setiap minggu; sebelumnya, saya memimpin tim kampus sampai ke final nasional. Itulah sebabnya posisi ini menarik bagi saya — Anda sedang mengembangkan persis jenis persoalan operasional seperti ini."
       },
       "why": {
        "en": "The weak version lists facts in order; the strong one makes a case: identity, two numbered proofs, and a bridge to their room.",
        "id": "Versi yang lemah mendaftar fakta secara berurutan; versi yang kuat membangun argumen: identitas, dua bukti berangka, dan jembatan ke ruangan mereka."
       }
      }
     ],
     "listen": [
      {
       "label": {
        "en": "A full 90-second positioning, spoken",
        "id": "Positioning 90 detik yang utuh, diucapkan"
       },
       "text": {
        "en": "I'm a data analyst who turns messy operational data into decisions retail teams actually use. Two quick proofs. Last year I automated our weekly stock report — four hours saved per branch, every week, across nine branches. And at university I led a five-person team to a national data competition final, on a dataset none of us had touched before. Which is exactly why this role drew me: you're scaling the same kind of operations problem, and I want to spend the next years on it.",
        "id": "Saya analis data yang mengubah data operasional yang berantakan menjadi keputusan yang benar-benar dipakai tim ritel. Dua bukti singkat. Tahun lalu saya mengotomatiskan laporan stok mingguan kami — hemat empat jam per cabang, setiap minggu, di sembilan cabang. Dan di kampus, saya memimpin tim lima orang sampai ke final kompetisi data nasional, dengan dataset yang belum pernah kami sentuh sebelumnya. Itulah persis alasan posisi ini menarik saya: Anda sedang mengembangkan jenis persoalan operasional yang sama, dan saya ingin menekuninya dalam beberapa tahun ke depan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "The biggest failure mode in “tell me about yourself” is:",
        "id": "Kegagalan terbesar dalam menjawab “ceritakan tentang diri Anda” adalah:"
       },
       "options": [
        {
         "en": "Mentioning numbers too early",
         "id": "Menyebut angka terlalu dini"
        },
        {
         "en": "Chronological CV retelling with no argument",
         "id": "Menceritakan ulang CV secara kronologis tanpa argumen"
        },
        {
         "en": "Speaking for ninety seconds",
         "id": "Berbicara selama sembilan puluh detik"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Correct — chronology lists facts; positioning makes a case. Interviewers remember cases.",
        "id": "Benar — kronologi hanya mendaftar fakta; positioning membangun argumen. Pewawancara mengingat argumen."
       }
      }
     ],
     "tryit": {
      "qid": "hr01",
      "label": {
       "en": "Now record yours",
       "id": "Sekarang rekam milikmu"
      },
      "desc": {
       "en": "Say your positioning into the simulator — camera on if you dare. Compare your transcript to the model above.",
       "id": "Ucapkan positioning-mu ke simulator — nyalakan kamera kalau berani. Bandingkan transkripmu dengan contoh di atas."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "positioning statement",
        "id": "positioning statement"
       },
       "def": {
        "en": "Your 90-second opening: who you are professionally, two numbered proofs, and why this company.",
        "id": "Pembuka 90 detikmu: siapa kamu secara profesional, dua bukti berangka, dan mengapa perusahaan ini."
       }
      },
      {
       "term": {
        "en": "present–proof–why-here",
        "id": "sekarang–bukti–mengapa di sini"
       },
       "def": {
        "en": "The three moves of the positioning statement: one sentence framing you professionally, two proofs with numbers, one sentence bridging your direction to this company — ninety seconds in full, thirty in the short version.",
        "id": "Tiga langkah pernyataan pemosisian: satu kalimat yang membingkaimu secara profesional, dua bukti dengan angka, satu kalimat yang menjembatani arahmu ke perusahaan ini — sembilan puluh detik versi penuh, tiga puluh detik versi singkat."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Retelling the CV in order",
         "id": "Menceritakan ulang CV secara berurutan"
        },
        "fix": {
         "en": "Make an argument instead: identity, two numbered proofs, bridge to this company.",
         "id": "Bangun argumen sebagai gantinya: identitas, dua bukti berangka, jembatan ke perusahaan ini."
        }
       },
       {
        "h": {
         "en": "Starting the story at birth",
         "id": "Memulai cerita dari lahir"
        },
        "fix": {
         "en": "Start at the present. History earns a sentence only when it explains the present.",
         "id": "Mulai dari masa kini. Masa lalu hanya berhak mendapat satu kalimat, itu pun kalau menjelaskan masa kini."
        }
       },
       {
        "h": {
         "en": "Same speech for every company",
         "id": "Pidato yang sama untuk semua perusahaan"
        },
        "fix": {
         "en": "Rebuild only the why-here line per company — thirty seconds of tailoring, visible difference.",
         "id": "Bangun ulang hanya kalimat “alasan ke sini” untuk tiap perusahaan — tiga puluh detik penyesuaian, perbedaannya terasa."
        }
       }
      ]
     },
     "resources": {
      "items": [
       {
        "kind": "template",
        "title": {
         "en": "Positioning statement — 60 seconds",
         "id": "Pernyataan pemosisian — 60 detik"
        },
        "desc": {
         "en": "Argument, not chronology. Fill, then say it aloud until it sounds like talking.",
         "id": "Argumen, bukan kronologi. Isi, lalu ucapkan sampai terdengar seperti bercakap."
        },
        "body": [
         {
          "en": "WHO (1 sentence): “I’m a [field] professional / graduate who [the thing you do best, in plain words].”",
          "id": "SIAPA (1 kalimat): “Saya profesional / lulusan [bidang] yang [hal yang paling kamu kuasai, dengan kata-kata sederhana].”"
         },
         {
          "en": "EVIDENCE (2 sentences): the two strongest proofs for this role, each with a number or artefact.",
          "id": "BUKTI (2 kalimat): dua bukti terkuat untuk peran ini, masing-masing dengan angka atau artefak."
         },
         {
          "en": "DIRECTION (1 sentence): “What I’m looking for now is [scope or problem], which is why [this role / this team] stood out.”",
          "id": "ARAH (1 kalimat): “Yang saya cari sekarang adalah [lingkup atau masalah], karena itulah [peran ini / tim ini] menonjol.”"
         },
         {
          "en": "BRIDGE (1 sentence): “Happy to go deeper on any of that — where would be most useful?”",
          "id": "JEMBATAN (1 kalimat): “Saya siap membahas lebih dalam bagian mana pun — mana yang paling berguna?”"
         },
         {
          "en": "Test: could this be said about someone else? If yes, sharpen the evidence.",
          "id": "Uji: bisakah ini dikatakan tentang orang lain? Jika ya, pertajam buktinya."
         }
        ]
       }
      ]
     },
     "migratedFrom": "the-rope:4.2"
    }
   ],
   "hero": "../../assets/bg/gauntlet/gate-04-casestudy.jpg",
   "heroPos": "56% 22%"
  },
  {
   "num": 5,
   "phase": "perform",
   "title": {
    "en": "The HR Interview",
    "id": "Wawancara HR"
   },
   "overview": {
    "en": "The HR round screens for eligibility, communication and risk before anyone assesses your capability: placement, service bonds, salary expectations, gaps and grades, and — in Indonesia — personal questions that are common and sometimes inappropriate. This module prepares the full HR answer set: what HR is actually screening for, your own difficult-case answer, a researched salary range and the practical terms, and a tiered way to handle sensitive questions honestly, briefly and consistently.",
    "id": "Ronde HR menyaring kelayakan, komunikasi, dan risiko sebelum siapa pun menilai kemampuanmu: penempatan, ikatan dinas, ekspektasi gaji, jeda dan nilai, dan — di Indonesia — pertanyaan pribadi yang umum dan kadang tidak pantas. Modul ini menyiapkan set jawaban HR lengkap: apa yang sebenarnya disaring HR, jawaban kasus sulitmu sendiri, rentang gaji hasil riset dan syarat praktis, dan cara bertingkat menangani pertanyaan sensitif dengan jujur, singkat, dan konsisten."
   },
   "outcome": {
    "en": "By the end of this module you can handle a full HR interview — screening questions, background questions, your own difficult-case question, sensitive or inappropriate questions, and salary expectations — honestly, briefly and consistently.",
    "id": "Di akhir modul ini kamu bisa menangani wawancara HR lengkap — pertanyaan seleksi, pertanyaan latar belakang, pertanyaan kasus sulitmu sendiri, pertanyaan sensitif atau tidak pantas, dan ekspektasi gaji — dengan jujur, singkat, dan konsisten."
   },
   "kit": {
    "en": "HR answer set · your difficult-case answer · researched salary range",
    "id": "Set jawaban HR · jawaban kasus sulitmu · rentang gaji hasil riset"
   },
   "lessons": [
    {
     "n": "5.1",
     "title": {
      "en": "The HR Interviewer's Mandate",
      "id": "Mandat Pewawancara HR"
     },
     "kind": "reading",
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "HR screens exist to answer five questions: is this person motivated for this role, within budget, available on our timeline, communicative at a professional baseline, and free of avoidable risk? Everything asked in the screen serves one of the five. Once you see the mandate, the interview becomes legible.",
      "id": "Penyaringan HR ada untuk menjawab lima pertanyaan: apakah orang ini termotivasi untuk posisi ini, masuk anggaran, tersedia sesuai jadwal kami, mampu berkomunikasi pada standar profesional, dan bebas dari risiko yang sebenarnya bisa dihindari? Semua yang ditanyakan dalam penyaringan melayani salah satu dari lima itu. Begitu kamu melihat mandatnya, wawancaranya menjadi mudah dibaca."
     },
     "objectives": [
      {
       "en": "Name the five questions every HR screen is built to answer.",
       "id": "Menyebutkan lima pertanyaan yang menjadi dasar setiap penyaringan HR."
      },
      {
       "en": "Map any screen question back to the mandate it serves.",
       "id": "Memetakan pertanyaan penyaringan apa pun kembali ke mandat yang dilayaninya."
      },
      {
       "en": "Avoid the classic screen-stage mistakes: rambling, bitterness, fake salary numbers.",
       "id": "Menghindari kesalahan klasik di tahap penyaringan: melantur, kepahitan, angka gaji yang asal sebut."
      }
     ],
     "takeawaysLead": {
      "en": "Every screen question serves one of five mandates. To pass a screen that cannot hire you but can end you, you can:",
      "id": "Setiap pertanyaan seleksi melayani satu dari lima mandat. Untuk lolos seleksi yang tak bisa merekrutmu tetapi bisa mengakhirimu, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "HR cannot usually hire you, but can always end you — treat the screen as a precision round.",
       "id": "HR biasanya tidak bisa merekrutmu, tetapi selalu bisa menghentikanmu — perlakukan penyaringan sebagai ronde presisi."
      },
      {
       "en": "Friendliness is a technique, not a verdict; match its warmth and keep your discipline.",
       "id": "Keramahan adalah teknik, bukan vonis; balas kehangatannya, dan jaga disiplinmu."
      },
      {
       "en": "Every screen question maps to motivation, money, timing, communication or risk.",
       "id": "Setiap pertanyaan penyaringan bermuara pada motivasi, uang, waktu, komunikasi, atau risiko."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "Five questions, one screen",
        "id": "Lima pertanyaan, satu penyaringan"
       },
       "body": {
        "en": "Motivation: do you want this role, or any role? Money: does your range fit the band? Timing: notice period, start date, competing processes. Communication: can you explain yourself clearly on a first meeting? Risk: gaps unexplained, bitterness, inconsistencies with the CV. Score yourself on the five before the recruiter does.",
        "id": "Motivasi: kamu menginginkan posisi ini, atau posisi apa saja? Uang: apakah rentang gajimu masuk dalam kisaran mereka? Waktu: masa pemberitahuan pengunduran diri, tanggal mulai, proses lamaran lain yang sedang berjalan. Komunikasi: bisakah kamu menjelaskan dirimu dengan jelas pada pertemuan pertama? Risiko: jeda karier tanpa penjelasan, kepahitan, ketidaksesuaian dengan CV. Nilai dirimu pada lima hal itu sebelum perekrut yang melakukannya."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "The friendliness trap",
        "id": "Jebakan keramahan"
       },
       "body": {
        "en": "Recruiters are professionally warm, and warmth loosens tongues. Candidates confess doubts, criticise old employers, or negotiate against themselves — in the first fifteen minutes. Be warm back, and treat every sentence as on the record, because it is. The screen is a filter wearing a smile.",
        "id": "Perekrut bersikap hangat secara profesional, dan kehangatan melonggarkan lidah. Kandidat mengakui keraguan, mengkritik tempat kerja lama, atau menawar merugikan diri sendiri — semuanya dalam lima belas menit pertama. Balas kehangatannya, dan perlakukan setiap kalimat sebagai catatan resmi, karena memang begitu adanya. Penyaringan adalah saringan yang mengenakan senyum."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "What passes the screen",
        "id": "Apa yang lolos penyaringan"
       },
       "body": {
        "en": "A clean screen performance is unspectacular by design: specific motivation for this company, a researched salary range delivered without flinching, honest timeline, one or two crisp proof stories, zero negativity. You are not trying to win the job here — you are trying not to lose it. Save the fireworks for rooms that can hire you.",
        "id": "Penampilan yang bersih di penyaringan memang sengaja tidak spektakuler: motivasi yang spesifik untuk perusahaan ini, rentang gaji hasil riset yang disampaikan tanpa ragu, jadwal yang jujur, satu atau dua cerita bukti yang ringkas, dan nol nada negatif. Di sini kamu tidak sedang berusaha memenangkan pekerjaan — kamu sedang berusaha untuk tidak kehilangannya. Simpan kembang apinya untuk ruangan yang bisa merekrutmu."
       },
       "icon": "target"
      }
     ],
     "diagram": {
      "type": "ring",
      "title": {
       "en": "The five questions every screen serves",
       "id": "Lima pertanyaan yang dilayani setiap penyaringan"
      },
      "items": [
       {
        "h": {
         "en": "Motivation",
         "id": "Motivasi"
        },
        "sub": {
         "en": "This role, or any role?",
         "id": "Posisi ini, atau posisi apa saja?"
        }
       },
       {
        "h": {
         "en": "Money",
         "id": "Uang"
        },
        "sub": {
         "en": "Does your range fit the band?",
         "id": "Apakah rentangmu masuk kisaran mereka?"
        }
       },
       {
        "h": {
         "en": "Timing",
         "id": "Waktu"
        },
        "sub": {
         "en": "Notice period, start date, other processes",
         "id": "Masa pemberitahuan, tanggal mulai, proses lain"
        }
       },
       {
        "h": {
         "en": "Communication",
         "id": "Komunikasi"
        },
        "sub": {
         "en": "Clear on a first meeting?",
         "id": "Jelas pada pertemuan pertama?"
        }
       },
       {
        "h": {
         "en": "Risk",
         "id": "Risiko"
        },
        "sub": {
         "en": "Gaps, bitterness, inconsistencies",
         "id": "Jeda karier, kepahitan, ketidaksesuaian"
        }
       }
      ],
      "note": {
       "en": "Every screen question maps to one of the five. Score yourself before the recruiter does.",
       "id": "Setiap pertanyaan penyaringan bermuara ke salah satu dari lima itu. Nilai dirimu sendiri sebelum perekrut yang melakukannya."
      },
      "exhibit": {
       "en": "Exhibit 1: The five questions every screen serves",
       "id": "Peraga 1: Lima pertanyaan yang dilayani setiap penyaringan"
      },
      "longdesc": {
       "en": "Diagram of The five questions every screen serves. It presents, in order: Motivation — This role, or any role?; Money — Does your range fit the band?; Timing — Notice period, start date, other processes; Communication — Clear on a first meeting?; Risk — Gaps, bitterness, inconsistencies.",
       "id": "Diagram lima pertanyaan yang dilayani setiap penyaringan. Menyajikan, secara berurutan: Motivasi — posisi ini, atau posisi apa saja?; Uang — apakah rentangmu masuk kisaran mereka?; Waktu — masa pemberitahuan, tanggal mulai, proses lain; Komunikasi — jelas pada pertemuan pertama?; Risiko — jeda karier, kepahitan, ketidaksesuaian."
      }
     },
     "checks": [
      {
       "q": {
        "en": "“Why are you leaving your current job?” serves which part of the HR mandate?",
        "id": "“Mengapa Anda ingin meninggalkan pekerjaan Anda sekarang?” melayani bagian mandat HR yang mana?"
       },
       "options": [
        {
         "en": "Risk — checking for bitterness, conflict patterns, and unrealistic expectations",
         "id": "Risiko — memeriksa kepahitan, pola konflik, dan ekspektasi yang tidak realistis"
        },
        {
         "en": "Budget — estimating your salary expectations",
         "id": "Anggaran — memperkirakan ekspektasi gajimu"
        },
        {
         "en": "Timeline — determining your start date",
         "id": "Waktu — menentukan tanggal mulaimu"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — the question hunts risk signals. A forward-facing answer clears it; litigating the past confirms it.",
        "id": "Benar — pertanyaan itu memburu sinyal risiko. Jawaban yang menghadap ke depan meloloskanmu; mengadili masa lalu justru mengonfirmasi risikonya."
       }
      },
      {
       "q": {
        "en": "The recruiter chats warmly about your old employer's problems. You should:",
        "id": "Perekrut mengobrol hangat tentang masalah-masalah di tempat kerjamu yang lama. Kamu sebaiknya:"
       },
       "options": [
        {
         "en": "Stay warm and stay forward-facing — every sentence is on the record",
         "id": "Tetap hangat dan tetap menghadap ke depan — setiap kalimat adalah catatan resmi"
        },
        {
         "en": "Relax and share the real gossip — rapport helps your case",
         "id": "Santai dan bagikan gosip yang sebenarnya — keakraban membantu posisimu"
        },
        {
         "en": "Refuse to discuss your old employer at all",
         "id": "Menolak sama sekali membahas tempat kerja lama"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — warmth is a technique. Match it, and keep your discipline: the screen is a filter wearing a smile.",
        "id": "Benar — kehangatan adalah teknik. Balaslah, dan jaga disiplinmu: penyaringan adalah saringan yang mengenakan senyum."
       }
      }
     ],
     "scenario": {
      "icon": "chat",
      "img": "../../assets/mentoring-session.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat dalam Sorotan"
      },
      "body": [
       {
        "en": "Maya's screening call is going wonderfully — the recruiter laughs at her jokes, the conversation drifts to weekend plans. Relaxed, Maya mentions she is “honestly just desperate to leave” her current team, and that her salary hope is “whatever, negotiable, really.” The call ends warmly. The process ends silently. Maya never learns which two sentences did it — but after this module, you will recognise both.",
        "id": "Panggilan penyaringan Maya berjalan sangat menyenangkan — perekrutnya tertawa mendengar candaannya, obrolan melebar ke rencana akhir pekan. Karena merasa santai, Maya menyebut bahwa ia “jujur, sudah tidak tahan ingin keluar” dari timnya sekarang, dan harapan gajinya “berapa saja, bisa nego, sungguh.” Panggilan berakhir dengan hangat. Prosesnya berakhir dalam sunyi. Maya tidak pernah tahu dua kalimat mana yang menjadi penyebabnya — tetapi setelah modul ini, kamu akan mengenali keduanya."
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "notice period",
        "id": "masa pemberitahuan"
       },
       "def": {
        "en": "The contractual time between resigning and leaving — honour it; how you exit is part of your reputation.",
        "id": "Waktu yang ditetapkan kontrak antara pengunduran diri dan hari terakhir bekerja — hormati; cara kamu pamit adalah bagian dari reputasimu."
       }
      },
      {
       "term": {
        "en": "the friendliness trap",
        "id": "jebakan keramahan"
       },
       "def": {
        "en": "Professional warmth that loosens tongues — candidates confess doubts, criticise old employers or negotiate against themselves in the first fifteen minutes. Match the warmth; keep the discipline.",
        "id": "Kehangatan profesional yang melonggarkan lidah — kandidat mengaku ragu, mengkritik mantan pemberi kerja, atau menegosiasikan diri sendiri ke bawah dalam lima belas menit pertama. Imbangi kehangatannya; jaga disiplinnya."
       }
      }
     ],
     "insights": {
      "lead": {
       "en": "The HR screen from the HR side.",
       "id": "Penyaringan HR dari sisi HR."
      },
      "items": [
       {
        "h": {
         "en": "They are protecting the manager’s time",
         "id": "Mereka melindungi waktu manajer"
        },
        "body": {
         "en": "Every candidate they pass through costs a hiring manager an hour. The screen asks “will the manager thank me for this?” — motivation, availability, budget and manner answer it.",
         "id": "Setiap kandidat yang mereka loloskan menghabiskan satu jam manajer perekrut. Penyaringan bertanya “akankah manajer berterima kasih pada saya untuk ini?” — motivasi, ketersediaan, anggaran, dan sikap menjawabnya."
        }
       },
       {
        "h": {
         "en": "Salary is asked early to avoid waste, not to trap you",
         "id": "Gaji ditanyakan lebih awal untuk menghindari pemborosan, bukan menjebakmu"
        },
        "body": {
         "en": "A range with a reason (“based on the published guides and the scope you described”) keeps you in the process without anchoring low.",
         "id": "Rentang dengan alasan (“berdasarkan panduan yang dipublikasikan dan lingkup yang Anda jelaskan”) menjagamu tetap dalam proses tanpa menjangkar rendah."
        }
       },
       {
        "h": {
         "en": "Risk is the silent fifth question",
         "id": "Risiko adalah pertanyaan kelima yang senyap"
        },
        "body": {
         "en": "Gaps, short stints, a pivot — HR is not judging them; they are checking whether you can explain them calmly. A prepared one-sentence answer removes the risk.",
         "id": "Jeda, masa kerja singkat, perpindahan — HR tidak menghakiminya; mereka memeriksa apakah kamu bisa menjelaskannya dengan tenang. Jawaban satu kalimat yang disiapkan menghilangkan risikonya."
        }
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Treating HR as “just the screen”",
         "id": "Menganggap HR “hanya penyaringan”"
        },
        "fix": {
         "en": "HR notes travel to every later round and to the offer stage. Be as prepared as for the manager.",
         "id": "Catatan HR mengalir ke setiap babak berikutnya dan ke tahap tawaran. Bersiaplah seperti untuk manajer."
        }
       },
       {
        "h": {
         "en": "Refusing to give a salary range",
         "id": "Menolak memberi rentang gaji"
        },
        "fix": {
         "en": "It reads as either unprepared or difficult. Give a researched range and a reason; keep the negotiation for the offer.",
         "id": "Itu terbaca sebagai tidak siap atau sulit. Beri rentang hasil riset dan alasannya; simpan negosiasi untuk tahap tawaran."
        }
       },
       {
        "h": {
         "en": "Over-explaining the gap",
         "id": "Terlalu menjelaskan jeda"
        },
        "fix": {
         "en": "One calm sentence and what you did in the time. Three minutes of justification makes it look bigger.",
         "id": "Satu kalimat tenang dan apa yang kamu lakukan selama itu. Tiga menit pembenaran membuatnya tampak lebih besar."
        }
       }
      ]
     },
     "migratedFrom": "the-rope:4.1"
    },
    {
     "n": "5.2",
     "title": {
      "en": "High-Frequency HR Questions and the Answer System",
      "id": "Pertanyaan HR yang Paling Sering Muncul dan Sistem Jawabannya"
     },
     "kind": "interactive",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Why us. Why leave. Greatest strength, greatest weakness. Five years. Salary. The difficult cases — gaps, pivots, layoffs. These questions are predictable, which makes them buildable: each has an answer system, not a script. This lesson installs the systems and drills the two most feared.",
      "id": "Mengapa kami. Mengapa pindah. Kekuatan terbesar, kelemahan terbesar. Lima tahun lagi. Gaji. Kasus-kasus sulit — jeda karier, banting setir, PHK. Pertanyaan-pertanyaan ini bisa diprediksi, dan karena itu bisa disiapkan: masing-masing punya sistem jawaban, bukan naskah. Pelajaran ini memasang sistem-sistem itu dan melatih dua pertanyaan yang paling ditakuti."
     },
     "objectives": [
      {
       "en": "Apply the answer system for each high-frequency HR question.",
       "id": "Menerapkan sistem jawaban untuk setiap pertanyaan HR yang sering muncul."
      },
      {
       "en": "Deliver a real weakness with its management plan convincingly.",
       "id": "Menyampaikan kelemahan yang sungguhan beserta cara mengelolanya, secara meyakinkan."
      },
      {
       "en": "Reframe your difficult case — gap, pivot, layoff — with calm honesty.",
       "id": "Membingkai ulang kasus sulitmu — jeda karier, banting setir, PHK — dengan kejujuran yang tenang."
      }
     ],
     "takeawaysLead": {
      "en": "The high-frequency questions are predictable, which makes them buildable. To answer from systems rather than scripts, you can:",
      "id": "Pertanyaan-pertanyaan berfrekuensi tinggi bisa diprediksi, yang membuatnya bisa dibangun. Untuk menjawab dari sistem alih-alih naskah, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Systems, not scripts: know the moves of each answer and improvise the words.",
       "id": "Sistem, bukan naskah: kuasai langkah-langkah setiap jawaban, dan improvisasikan kata-katanya."
      },
      {
       "en": "The weakness question is a trust test — a disguised strength fails it instantly.",
       "id": "Pertanyaan tentang kelemahan adalah ujian kepercayaan — kekuatan yang disamarkan langsung gagal."
      },
      {
       "en": "Difficult cases are answered in one calm sentence plus a redirect to evidence.",
       "id": "Kasus sulit dijawab dengan satu kalimat yang tenang, lalu dialihkan ke bukti."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "The systems at a glance",
        "id": "Sistem-sistemnya, sekilas"
       },
       "body": {
        "en": "Why us: something true and specific about them, bridged to your direction. Why leave: face forward, never litigate. Strength: one claim, one story, one number. Weakness: real, costed once, managed by a system. Five years: a capability, not a title. Salary: a researched range plus what it depends on. Every system is two or three moves — learn the moves.",
        "id": "Mengapa kami: sesuatu yang benar dan spesifik tentang mereka, dijembatani ke arah kariermu. Mengapa pindah: menghadap ke depan, jangan pernah mengadili masa lalu. Kekuatan: satu klaim, satu cerita, satu angka. Kelemahan: yang sungguhan, akibatnya disebut satu kali, dikendalikan oleh sebuah sistem. Lima tahun lagi: sebuah kemampuan, bukan jabatan. Gaji: rentang hasil riset plus apa yang memengaruhinya. Setiap sistem hanya dua atau tiga langkah — kuasai langkah-langkahnya."
       }
      },
      {
       "h": {
        "en": "The difficult cases, honestly",
        "id": "Kasus-kasus sulit, dengan jujur"
       },
       "body": {
        "en": "Gap, pivot, layoff, low grades, job-hopping: the pattern is identical. One calm sentence naming the fact, zero apology spiral, then a redirect to what you built or learned, landing on the present. The interviewer's fear is evasion and decay; your calm brevity answers both. Full preparation paths for sixteen difficult cases live in the simulator's setup — select yours and drill it.",
        "id": "Jeda karier, banting setir, PHK, nilai rendah, terlalu sering pindah kerja: polanya sama persis. Satu kalimat tenang yang menyebutkan faktanya, tanpa pusaran permintaan maaf, lalu alihkan ke apa yang kamu bangun atau pelajari, dan daratkan di masa kini. Yang ditakutkan pewawancara adalah pengelakan dan kemunduran; keringkasanmu yang tenang menjawab keduanya. Jalur persiapan lengkap untuk enam belas kasus sulit tersedia di pengaturan simulator — pilih milikmu, lalu latih."
       }
      }
     ],
     "diagram": {
      "type": "quad",
      "exhibit": {
       "en": "Exhibit 1: Four answer systems — the moves, not the words.",
       "id": "Peraga 1: Empat sistem jawaban — langkahnya, bukan kata-katanya."
      },
      "title": {
       "en": "Why us · Why leave · Strength · Weakness",
       "id": "Mengapa kami · Mengapa keluar · Kekuatan · Kelemahan"
      },
      "items": [
       {
        "h": {
         "en": "Why us",
         "id": "Mengapa kami"
        },
        "sub": {
         "en": "Something true and specific about them, bridged to your direction",
         "id": "Sesuatu yang benar dan spesifik tentang mereka, dijembatani ke arahmu"
        }
       },
       {
        "h": {
         "en": "Why leave",
         "id": "Mengapa keluar"
        },
        "sub": {
         "en": "Face forward; never litigate the old employer",
         "id": "Menghadap ke depan; jangan pernah berperkara dengan mantan pemberi kerja"
        }
       },
       {
        "h": {
         "en": "Strength",
         "id": "Kekuatan"
        },
        "sub": {
         "en": "One claim, one story, one number",
         "id": "Satu klaim, satu cerita, satu angka"
        }
       },
       {
        "h": {
         "en": "Weakness",
         "id": "Kelemahan"
        },
        "sub": {
         "en": "Real, costed once, managed by a visible system — never a disguised strength",
         "id": "Nyata, biayanya disebut sekali, dikelola oleh sistem yang terlihat — bukan kekuatan yang disamarkan"
        }
       }
      ],
      "note": {
       "en": "Difficult cases — gap, pivot, layoff — share one move: one calm sentence, then a redirect to what you built.",
       "id": "Kasus sulit — jeda, banting setir, PHK — berbagi satu langkah: satu kalimat tenang, lalu pengalihan ke apa yang kamu bangun."
      },
      "longdesc": {
       "en": "A two-by-two grid of the four most frequent HR questions and the moves of each answer system: why us is a true specific bridged to your direction; why leave faces forward without litigating; strength is one claim with one story and one number; weakness is real, costed once and visibly managed. The note adds the shared move for difficult cases.",
       "id": "Kisi dua kali dua berisi empat pertanyaan HR paling sering dan langkah tiap sistem jawabannya: mengapa kami adalah hal spesifik yang benar dijembatani ke arahmu; mengapa keluar menghadap ke depan tanpa berperkara; kekuatan adalah satu klaim dengan satu cerita dan satu angka; kelemahan itu nyata, biayanya disebut sekali, dan dikelola secara terlihat. Catatannya menambahkan langkah bersama untuk kasus sulit."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "answer system",
        "id": "sistem jawaban"
       },
       "def": {
        "en": "The known moves of a recurring question — for “why leave”: face forward, never litigate — improvised freshly each time rather than recited as a memorised script.",
        "id": "Langkah-langkah yang diketahui untuk pertanyaan berulang — untuk “mengapa keluar”: menghadap ke depan, jangan pernah berperkara — diimprovisasi segar setiap kali alih-alih dibacakan sebagai naskah hafalan."
       }
      },
      {
       "term": {
        "en": "difficult case",
        "id": "kasus sulit"
       },
       "def": {
        "en": "A gap, pivot, layoff, low grade or job-hop in your history — answered with one calm sentence naming the fact, no apology spiral, and a redirect to what you built or learned.",
        "id": "Jeda, banting setir, PHK, nilai rendah, atau sering pindah kerja dalam riwayatmu — dijawab dengan satu kalimat tenang yang menyebut faktanya, tanpa spiral permintaan maaf, dan pengalihan ke apa yang kamu bangun atau pelajari."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 · Your weakness, for real",
        "id": "Latihan 1 · Kelemahanmu, yang sungguhan"
       },
       "body": {
        "en": "Write your actual weakness — the one a former teammate would name. Then write one sentence about a time it cost you, and two sentences on the system you now use against it. Say all four sentences aloud.",
        "id": "Tulis kelemahanmu yang sebenarnya — yang akan disebut oleh mantan rekan setimmu. Lalu tulis satu kalimat tentang saat kelemahan itu merugikanmu, dan dua kalimat tentang sistem yang sekarang kamu pakai untuk mengatasinya. Ucapkan keempat kalimat itu dengan suara keras."
       },
       "debrief": {
        "en": "Test it: would the interviewer learn something true about working with you? “Perfectionism” fails that test; “I default to doing instead of delegating — I now write a handover list at the start of each project” passes. The system is the answer; the weakness is just its address.",
        "id": "Ujilah: apakah pewawancara jadi tahu sesuatu yang benar tentang rasanya bekerja bersamamu? “Perfeksionis” gagal dalam ujian itu; “Saya cenderung mengerjakan sendiri alih-alih mendelegasikan — sekarang saya menulis daftar pembagian tugas di awal setiap proyek” lulus. Sistemnya adalah jawabannya; kelemahan hanyalah alamatnya."
       }
      },
      {
       "h": {
        "en": "Drill 2 · Your difficult case in one breath",
        "id": "Latihan 2 · Kasus sulitmu dalam satu tarikan napas"
       },
       "body": {
        "en": "Identify your difficult case. Draft the one calm sentence that names it, and the redirect sentence that moves to evidence. Time yourself: both sentences inside twenty seconds.",
        "id": "Kenali kasus sulitmu. Susun satu kalimat tenang yang menyebutkannya, dan satu kalimat pengalih yang bergerak ke bukti. Ukur waktunya: kedua kalimat selesai dalam dua puluh detik."
       },
       "debrief": {
        "en": "Example, gap: “I took eight months out to care for my father; during it I kept my skills alive with two freelance dashboards — happy to show them.” Fact, no apology, evidence, forward. Twenty seconds ends the danger; three minutes of explaining creates it.",
        "id": "Contoh untuk jeda karier: “Saya berhenti delapan bulan untuk merawat ayah; selama itu saya menjaga keterampilan tetap hidup lewat dua proyek dashboard lepas — dengan senang hati saya tunjukkan.” Fakta, tanpa permintaan maaf, bukti, maju. Dua puluh detik mengakhiri bahayanya; tiga menit penjelasan justru menciptakannya."
       }
      },
      {
       "h": {
        "en": "Drill 3 · The salary range without flinching",
        "id": "Latihan 3 · Rentang gaji tanpa ragu"
       },
       "body": {
        "en": "Using module 8's research method (or your current best data), write your range for the target role and the sentence that delivers it. Practise saying it aloud until the number stops feeling like a confession.",
        "id": "Dengan metode riset dari Modul 10 (atau data terbaik yang kamu punya sekarang), tulis rentang gajimu untuk posisi yang dituju, dan kalimat untuk menyampaikannya. Latih mengucapkannya dengan suara keras sampai angka itu tidak lagi terasa seperti pengakuan dosa."
       },
       "debrief": {
        "en": "Delivery pattern: “Based on market data for this role and level, I'm looking at X to Y, depending on the total package.” Anchored, ranged, conditional. Hesitation before a number reads as an invitation to discount it — rehearse until the hesitation is gone.",
        "id": "Pola penyampaian: “Berdasarkan data pasar untuk posisi dan level ini, saya mengincar X sampai Y, tergantung paket keseluruhannya.” Berpatokan pada data, berupa rentang, bersyarat. Keraguan sebelum menyebut angka terbaca sebagai undangan untuk menawarnya turun — latih sampai keraguan itu hilang."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "The weakness question",
        "id": "Pertanyaan tentang kelemahan"
       },
       "q": {
        "en": "“What is your greatest weakness?”",
        "id": "“Apa kelemahan terbesar Anda?”"
       },
       "weak": {
        "en": "I'd say I'm a perfectionist — I just care too much about quality, and sometimes I work too hard.",
        "id": "Saya rasa saya perfeksionis — saya terlalu peduli pada kualitas, dan kadang bekerja terlalu keras."
       },
       "strong": {
        "en": "I default to doing instead of delegating. It cost me once: on a campus event I kept three tasks I should have handed over, and two were late. Since then I write a handover list at the start of every project — who takes what, by when. My last two projects shipped on time because of it.",
        "id": "Saya cenderung mengerjakan sendiri alih-alih mendelegasikan. Itu pernah merugikan saya: di sebuah acara kampus, saya memegang tiga tugas yang seharusnya saya serahkan, dan dua di antaranya terlambat. Sejak itu saya menulis daftar pembagian tugas di awal setiap proyek — siapa memegang apa, sampai kapan. Dua proyek terakhir saya selesai tepat waktu karena itu."
       },
       "why": {
        "en": "The disguised strength fails the trust test instantly. Real weakness + one honest cost + a working system = self-awareness with receipts.",
        "id": "Kekuatan yang disamarkan langsung gagal dalam ujian kepercayaan. Kelemahan sungguhan + satu akibat yang jujur + sistem yang berjalan = kesadaran diri yang ada buktinya."
       }
      },
      {
       "tag": {
        "en": "Why are you leaving?",
        "id": "Mengapa Anda ingin pindah?"
       },
       "weak": {
        "en": "Honestly my manager plays favourites and the company is a mess — there's no appreciation for people who actually work.",
        "id": "Jujur saja, atasan saya pilih kasih dan perusahaannya kacau — tidak ada penghargaan untuk orang yang benar-benar bekerja."
       },
       "strong": {
        "en": "I've grown a lot there — I built their reporting from scratch. What I can't get there is scale: the data problems I want next are the kind this team works on daily. I'm moving toward that, not away from anything.",
        "id": "Saya banyak bertumbuh di sana — saya membangun sistem pelaporan mereka dari nol. Yang tidak bisa saya dapatkan di sana adalah skala: persoalan data yang ingin saya tangani berikutnya adalah jenis yang dikerjakan tim ini setiap hari. Saya bergerak menuju sesuatu, bukan menjauh dari sesuatu."
       },
       "why": {
        "en": "Bitterness confirms the risk the question hunts. Facing forward — credit to the past, pull toward the future — clears it.",
        "id": "Kepahitan mengonfirmasi risiko yang diburu pertanyaan itu. Menghadap ke depan — menghargai masa lalu, tertarik ke masa depan — meloloskanmu."
       }
      }
     ],
     "listen": [
      {
       "label": {
        "en": "A difficult case in one breath — the gap",
        "id": "Kasus sulit dalam satu tarikan napas — jeda karier"
       },
       "text": {
        "en": "I took eight months out to care for my father. During that time I kept my skills alive with two freelance dashboard projects — I'm happy to show them. I'm back at full capacity, and honestly, hungrier than before.",
        "id": "Saya berhenti delapan bulan untuk merawat ayah saya. Selama itu, saya menjaga keterampilan tetap hidup lewat dua proyek dashboard lepas — dengan senang hati saya tunjukkan. Saya kembali dengan kapasitas penuh, dan jujur, lebih lapar daripada sebelumnya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A strong answer to “what is your greatest weakness?” contains:",
        "id": "Jawaban yang kuat untuk “apa kelemahan terbesar Anda?” berisi:"
       },
       "options": [
        {
         "en": "A strength disguised: “I work too hard”",
         "id": "Kekuatan yang disamarkan: “Saya bekerja terlalu keras”"
        },
        {
         "en": "A refusal: “I can't think of any”",
         "id": "Penolakan: “Saya tidak bisa memikirkan satu pun”"
        },
        {
         "en": "A real weakness, one honest cost, and the system now containing it",
         "id": "Kelemahan yang sungguhan, satu akibat yang jujur, dan sistem yang kini mengendalikannya"
        }
       ],
       "correct": 2,
       "why": {
        "en": "Correct — honesty plus management. The interviewer is testing self-awareness, and self-awareness has receipts.",
        "id": "Benar — kejujuran plus pengelolaan. Pewawancara sedang menguji kesadaran diri, dan kesadaran diri punya bukti."
       }
      }
     ],
     "tryit": {
      "qid": "hr08",
      "label": {
       "en": "Your weakness, for real, on the clock",
       "id": "Kelemahanmu, yang sungguhan, dengan waktu berjalan"
      },
      "desc": {
       "en": "The simulator reads whether your answer carries a cost and a system — or just adjectives.",
       "id": "Simulator membaca apakah jawabanmu memuat akibat dan sistem — atau hanya kata sifat."
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "The disguised-strength weakness",
         "id": "Kelemahan yang menyamar sebagai kekuatan"
        },
        "fix": {
         "en": "“I work too hard” fails the trust test instantly. Real weakness, one honest cost, working system.",
         "id": "“Saya bekerja terlalu keras” langsung gagal dalam ujian kepercayaan. Kelemahan sungguhan, satu akibat yang jujur, sistem yang berjalan."
        }
       },
       {
        "h": {
         "en": "Litigating your old employer",
         "id": "Mengadili tempat kerja lama"
        },
        "fix": {
         "en": "Face forward: what you are moving toward. Bitterness confirms the exact risk being probed.",
         "id": "Menghadap ke depan: apa yang kamu tuju. Kepahitan justru mengonfirmasi persis risiko yang sedang diperiksa."
        }
       },
       {
        "h": {
         "en": "Flinching before the salary number",
         "id": "Ragu sebelum menyebut angka gaji"
        },
        "fix": {
         "en": "A researched range, stated in one calm sentence, with what it depends on. Rehearse until boring.",
         "id": "Rentang hasil riset, disampaikan dalam satu kalimat tenang, beserta apa yang memengaruhinya. Latih sampai terasa membosankan."
        }
       }
      ]
     },
     "resources": {
      "items": [
       {
        "kind": "script",
        "title": {
         "en": "Answer systems for the predictable questions",
         "id": "Sistem jawaban untuk pertanyaan yang bisa diprediksi"
        },
        "desc": {
         "en": "Structures, not scripts. Attach your own facts.",
         "id": "Struktur, bukan naskah. Lekatkan faktamu sendiri."
        },
        "body": [
         {
          "en": "WHY US: one verified specific about the company + what you would contribute to it + why now in your trajectory.",
          "id": "MENGAPA KAMI: satu hal spesifik terverifikasi tentang perusahaan + apa yang akan kamu sumbangkan + mengapa sekarang dalam lintasanmu."
         },
         {
          "en": "WHY LEAVE: what you are moving toward (scope, problem, growth) — never a complaint about where you are; one neutral line about the current role.",
          "id": "MENGAPA PINDAH: apa yang kamu tuju (lingkup, masalah, pertumbuhan) — jangan pernah keluhan tentang tempatmu sekarang; satu baris netral tentang peran saat ini."
         },
         {
          "en": "STRENGTH: name it + the story that proves it + how it will show up in this role.",
          "id": "KEKUATAN: sebutkan + cerita yang membuktikan + bagaimana itu akan tampak di peran ini."
         },
         {
          "en": "WEAKNESS: a real one that is not core to the job + what you have done about it + evidence it is improving.",
          "id": "KELEMAHAN: yang nyata dan bukan inti pekerjaan + apa yang sudah kamu lakukan + bukti bahwa membaik."
         },
         {
          "en": "FIVE YEARS: the direction (not a title) + what you want to be trusted with + how this role builds toward it.",
          "id": "LIMA TAHUN: arahnya (bukan jabatan) + apa yang ingin kamu dipercayakan + bagaimana peran ini membangun ke sana."
         },
         {
          "en": "SALARY: “Based on [sources] and the scope described, I’m looking at [range]. I’m flexible on structure if the total is in that region.”",
          "id": "GAJI: “Berdasarkan [sumber] dan lingkup yang dijelaskan, saya melihat kisaran [rentang]. Saya fleksibel soal struktur jika totalnya di kisaran itu.”"
         },
         {
          "en": "GAP / PIVOT / LAYOFF: one calm sentence of fact + what you did with the time + why it points here.",
          "id": "JEDA / PERPINDAHAN / PHK: satu kalimat fakta yang tenang + apa yang kamu lakukan dengan waktunya + mengapa itu mengarah ke sini."
         }
        ]
       }
      ]
     },
     "migratedFrom": "the-rope:4.3"
    },
    {
     "n": "5.3",
     "title": {
      "en": "Closing the HR Interview and Follow-Up Protocol",
      "id": "Menutup Wawancara HR dan Protokol Tindak Lanjut"
     },
     "kind": "reading",
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Interviews are remembered by their endings. The last five minutes — your questions, your close, and the follow-up that lands the next day — are the cheapest points on the board. This lesson covers the closing question set, the thank-you note that adds signal instead of flattery, and the etiquette of waiting.",
      "id": "Wawancara diingat dari cara berakhirnya. Lima menit terakhir — pertanyaanmu, penutupmu, dan tindak lanjut yang tiba keesokan harinya — adalah poin termurah di papan skor. Pelajaran ini membahas rangkaian pertanyaan penutup, ucapan terima kasih yang menambah sinyal alih-alih sanjungan, dan etika menunggu."
     },
     "objectives": [
      {
       "en": "Ask closing questions that add signal about your judgment.",
       "id": "Mengajukan pertanyaan penutup yang menambah sinyal tentang pertimbanganmu."
      },
      {
       "en": "Write a follow-up note that strengthens your candidacy in four sentences.",
       "id": "Menulis pesan tindak lanjut yang memperkuat pencalonanmu dalam empat kalimat."
      },
      {
       "en": "Handle silence after the interview without damaging your position.",
       "id": "Menghadapi keheningan setelah wawancara tanpa merusak posisimu."
      }
     ],
     "takeawaysLead": {
      "en": "Interviews are remembered by their endings, and the last five minutes are the cheapest points on the board. To close and follow up well, you can:",
      "id": "Wawancara diingat dari akhirnya, dan lima menit terakhir adalah poin termurah di papan skor. Untuk menutup dan menindaklanjuti dengan baik, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Your questions are scored too: ask about the work and the standard, never the perks first.",
       "id": "Pertanyaanmu juga dinilai: tanyakan tentang pekerjaan dan standarnya, jangan pernah tentang fasilitas lebih dulu."
      },
      {
       "en": "A good follow-up adds one thing: a sharpened answer, a relevant link, a concrete next step.",
       "id": "Tindak lanjut yang baik menambahkan satu hal: jawaban yang dipertajam, tautan yang relevan, atau langkah berikutnya yang konkret."
      },
      {
       "en": "One polite nudge after the stated timeline passes — then let your other processes carry your leverage.",
       "id": "Satu pengingat sopan setelah tenggat yang dijanjikan lewat — setelah itu, biarkan proses-proses lamaranmu yang lain memikul daya tawarmu."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "The last five minutes",
        "id": "Lima menit terakhir"
       },
       "body": {
        "en": "When they ask for your questions, three archetypes work in every room: the standard question (“what does excellent look like in this role after six months?”), the reality question (“what is the hardest part of this job that the description doesn't say?”), and the growth question (“how have people grown out of this role before?”). Two or three, asked with genuine curiosity — then a clean close: appreciation, one line of enthusiasm, next steps.",
        "id": "Ketika mereka mempersilakanmu bertanya, tiga jenis pertanyaan ini bekerja di semua ruangan: pertanyaan standar (“seperti apa kinerja yang unggul di posisi ini setelah enam bulan?”), pertanyaan realitas (“apa bagian tersulit dari pekerjaan ini yang tidak tertulis di deskripsinya?”), dan pertanyaan pertumbuhan (“bagaimana orang-orang sebelumnya bertumbuh dari posisi ini?”). Dua atau tiga pertanyaan, diajukan dengan rasa ingin tahu yang tulus — lalu penutup yang bersih: apresiasi, satu kalimat antusiasme, langkah berikutnya."
       }
      },
      {
       "h": {
        "en": "The follow-up that adds",
        "id": "Tindak lanjut yang menambah nilai"
       },
       "body": {
        "en": "Within twenty-four hours, four sentences: thanks with one specific reference to the conversation; one addition — a sharper version of an answer you fumbled, or a link to work you mentioned; enthusiasm in one line; confirmation of the next step. That is signal. Long letters, flattery, or essays re-arguing your case are noise that ages badly.",
        "id": "Dalam dua puluh empat jam, empat kalimat: terima kasih dengan satu rujukan spesifik ke percakapan tadi; satu tambahan — versi yang lebih tajam dari jawaban yang tadi tersendat, atau tautan ke karya yang kamu sebut; antusiasme dalam satu kalimat; konfirmasi langkah berikutnya. Itulah sinyal. Surat yang panjang, sanjungan, atau esai yang mengulang argumenmu adalah derau yang cepat basi."
       }
      },
      {
       "h": {
        "en": "The etiquette of waiting",
        "id": "Etika menunggu"
       },
       "body": {
        "en": "Ask for the timeline in the room, then respect it. If it passes, one polite nudge referencing the stated date. After that, silence from you — continued chasing converts interest into pity. Keep other processes moving; nothing improves your patience, your posture, and your eventual negotiation like a live alternative.",
        "id": "Tanyakan jadwalnya saat masih di ruangan, lalu hormati. Kalau lewat, satu pengingat sopan yang merujuk ke tanggal yang mereka janjikan. Setelah itu, diam dari pihakmu — mengejar terus-menerus mengubah minat menjadi rasa kasihan. Jaga proses lamaran lain tetap berjalan; tidak ada yang lebih memperbaiki kesabaranmu, sikapmu, dan negosiasimu nanti selain alternatif yang masih hidup."
       }
      }
     ],
     "diagram": {
      "type": "timeline",
      "exhibit": {
       "en": "Exhibit 1: The close and the follow-up — from the last five minutes to the etiquette of waiting.",
       "id": "Peraga 1: Penutup dan tindak lanjut — dari lima menit terakhir hingga etiket menunggu."
      },
      "title": {
       "en": "Last 5 minutes → 24 hours → Stated date → After",
       "id": "5 menit terakhir → 24 jam → Tanggal yang disebutkan → Sesudahnya"
      },
      "items": [
       {
        "h": {
         "en": "Last five minutes",
         "id": "Lima menit terakhir"
        },
        "sub": {
         "en": "Three question archetypes — standard, reality, growth — then ask for the timeline",
         "id": "Tiga arketipe pertanyaan — standar, realitas, pertumbuhan — lalu tanyakan garis waktunya"
        },
        "icon": "target"
       },
       {
        "h": {
         "en": "Within 24 hours",
         "id": "Dalam 24 jam"
        },
        "sub": {
         "en": "Four sentences: specific thanks, one addition, enthusiasm, availability",
         "id": "Empat kalimat: terima kasih spesifik, satu tambahan, antusiasme, ketersediaan"
        },
        "icon": "book"
       },
       {
        "h": {
         "en": "Stated date passes",
         "id": "Tanggal yang disebutkan lewat"
        },
        "sub": {
         "en": "One polite nudge referencing the date",
         "id": "Satu sentuhan pengingat sopan yang merujuk tanggal itu"
        },
        "icon": "flag"
       },
       {
        "h": {
         "en": "After that",
         "id": "Sesudahnya"
        },
        "sub": {
         "en": "Silence from you; other processes keep moving",
         "id": "Diam darimu; proses lain terus berjalan"
        },
        "icon": "eye"
       }
      ],
      "longdesc": {
       "en": "A four-point timeline: in the last five minutes ask three archetype questions and for the timeline; within twenty-four hours send a four-sentence follow-up that adds one thing; when the stated date passes send one polite nudge; and after that stay silent while other processes continue.",
       "id": "Garis waktu empat titik: di lima menit terakhir ajukan tiga pertanyaan arketipe dan tanyakan garis waktu; dalam dua puluh empat jam kirim tindak lanjut empat kalimat yang menambahkan satu hal; ketika tanggal yang disebutkan lewat, kirim satu sentuhan pengingat sopan; dan sesudahnya tetap diam sementara proses lain berlanjut."
      }
     },
     "compare": [
      {
       "tag": {
        "en": "The follow-up email",
        "id": "Email tindak lanjut"
       },
       "weak": {
        "en": "Dear Ms. Sari, thank you so much for the amazing opportunity to interview at your wonderful company. I have always dreamed of working somewhere like this. I really really hope to hear good news. I will wait every day for your reply. Thank you again and again.",
        "id": "Ibu Sari yang terhormat, terima kasih banyak atas kesempatan luar biasa untuk wawancara di perusahaan Ibu yang hebat. Saya selalu bermimpi bekerja di tempat seperti ini. Saya sangat sangat berharap mendapat kabar baik. Saya akan menunggu balasan Ibu setiap hari. Sekali lagi terima kasih banyak."
       },
       "strong": {
        "en": "Dear Ms. Sari — thank you for this morning's conversation, especially your point about the Q4 reporting bottleneck. One addition: the automation I mentioned is documented here [link] — the version relevant to your stack. I'm genuinely enthusiastic about the role, and I look forward to the next step you mentioned for next week. Best regards.",
        "id": "Ibu Sari — terima kasih atas percakapan tadi pagi, khususnya poin Ibu tentang hambatan pelaporan di kuartal 4. Satu tambahan: otomasi yang saya sebutkan terdokumentasi di sini [tautan] — versi yang relevan dengan sistem Ibu. Saya sungguh antusias dengan posisi ini, dan menantikan langkah berikutnya yang Ibu sebutkan untuk minggu depan. Salam hormat."
       },
       "why": {
        "en": "Four sentences: specific thanks, one strengthening addition, one line of enthusiasm, next step. Signal — not flattery, not begging.",
        "id": "Empat kalimat: terima kasih yang spesifik, satu tambahan yang memperkuat, satu kalimat antusiasme, langkah berikutnya. Sinyal — bukan sanjungan, bukan memohon."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "The best follow-up email after an HR screen:",
        "id": "Email tindak lanjut terbaik setelah penyaringan HR:"
       },
       "options": [
        {
         "en": "Thanks them, adds one concrete strengthening detail, and confirms next steps",
         "id": "Berterima kasih, menambahkan satu detail konkret yang memperkuat, dan mengonfirmasi langkah berikutnya"
        },
        {
         "en": "Repeats your entire positioning statement in writing",
         "id": "Mengulang seluruh positioning statement-mu dalam bentuk tertulis"
        },
        {
         "en": "Asks whether you got the job",
         "id": "Menanyakan apakah kamu diterima"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — short, additive, forward-looking. It is your last quotable line in their notes.",
        "id": "Benar — singkat, menambah nilai, menghadap ke depan. Itulah kalimat terakhirmu yang bisa dikutip di catatan mereka."
       }
      }
     ],
     "tryit": {
      "qid": "hr16",
      "label": {
       "en": "Drill your closing questions",
       "id": "Latih pertanyaan penutupmu"
      },
      "desc": {
       "en": "“What questions do you have for us?” — bring the standard, reality and growth archetypes.",
       "id": "“Ada pertanyaan untuk kami?” — bawa tiga jenisnya: standar, realitas, dan pertumbuhan."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "negotiation",
        "id": "negosiasi"
       },
       "def": {
        "en": "The conversation after a written offer and before acceptance where terms can move — expected, when done professionally.",
        "id": "Percakapan setelah tawaran tertulis dan sebelum kamu menerimanya, ketika syarat-syarat masih bisa bergerak — hal yang wajar, kalau dilakukan secara profesional."
       }
      },
      {
       "term": {
        "en": "the one nudge",
        "id": "satu sentuhan pengingat"
       },
       "def": {
        "en": "A single polite message after the stated decision date passes, referencing that date — and then silence, because continued chasing converts interest into pity.",
        "id": "Satu pesan sopan setelah tanggal keputusan yang disebutkan lewat, merujuk pada tanggal itu — lalu diam, karena terus mengejar mengubah minat menjadi rasa kasihan."
       }
      }
     ],
     "resources": {
      "items": [
       {
        "kind": "script",
        "title": {
         "en": "The last five minutes",
         "id": "Lima menit terakhir"
        },
        "desc": {
         "en": "Questions, close, and the next-day note.",
         "id": "Pertanyaan, penutup, dan catatan hari berikutnya."
        },
        "body": [
         {
          "en": "QUESTION 1 (standard of excellence): “What does someone who is excellent in this role do in their first six months that a merely good hire does not?”",
          "id": "PERTANYAAN 1 (standar keunggulan): “Apa yang dilakukan orang yang sangat baik di peran ini dalam enam bulan pertama yang tidak dilakukan orang yang sekadar baik?”"
         },
         {
          "en": "QUESTION 2 (reality check): “What is the hardest part of this role that the job description does not say?”",
          "id": "PERTANYAAN 2 (cek realitas): “Apa bagian tersulit dari peran ini yang tidak disebutkan deskripsi pekerjaan?”"
         },
         {
          "en": "CLOSE: “Thank you — this confirmed my interest. From what we discussed, I think [one line of fit]. What are the next steps and timing?”",
          "id": "PENUTUP: “Terima kasih — ini menguatkan minat saya. Dari yang kita bahas, saya rasa [satu baris kecocokan]. Apa langkah berikutnya dan waktunya?”"
         },
         {
          "en": "NEXT-DAY NOTE: “Thank you for yesterday. I keep thinking about [specific moment]. [One useful addition: link / clarification / idea]. I remain very interested and look forward to [next step].”",
          "id": "CATATAN HARI BERIKUTNYA: “Terima kasih untuk kemarin. Saya terus memikirkan [momen spesifik]. [Satu tambahan berguna: tautan / klarifikasi / ide]. Saya tetap sangat tertarik dan menantikan [langkah berikutnya].”"
         }
        ]
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "“No, I think you covered everything”",
         "id": "“Tidak, sepertinya semua sudah dibahas”"
        },
        "fix": {
         "en": "Always have two questions ready that show you listened. Silence at the end erases a good interview.",
         "id": "Selalu siapkan dua pertanyaan yang menunjukkan kamu menyimak. Diam di akhir menghapus wawancara yang baik."
        }
       },
       {
        "h": {
         "en": "A thank-you email that says nothing",
         "id": "Email terima kasih yang tak mengatakan apa-apa"
        },
        "fix": {
         "en": "Reference one specific moment and add one useful thing — a link, a clarification, a thought you had afterwards.",
         "id": "Rujuk satu momen spesifik dan tambahkan satu hal berguna — tautan, klarifikasi, pemikiran yang muncul setelahnya."
        }
       },
       {
        "h": {
         "en": "Following up before the date they gave",
         "id": "Menindaklanjuti sebelum tanggal yang mereka berikan"
        },
        "fix": {
         "en": "Ask for the timeline in the room; follow up one working day after it passes.",
         "id": "Tanyakan garis waktu di ruangan; tindak lanjuti satu hari kerja setelah lewat."
        }
       }
      ]
     },
     "journey": {
      "before": {
       "label": {
        "en": "Module 3 · the rubric",
        "id": "Modul 3 · rubriknya"
       },
       "desc": {
        "en": "You know what will be probed and which story answers it.",
        "id": "Kamu tahu apa yang akan digali dan cerita mana yang menjawabnya."
       }
      },
      "now": {
       "label": {
        "en": "Module 5 · the HR room, solved",
        "id": "Modul 5 · ruang HR, terpecahkan"
       },
       "desc": {
        "en": "Five questions, a positioning statement, answer systems and a close that lands the next day.",
        "id": "Lima pertanyaan, pernyataan pemosisian, sistem jawaban, dan penutup yang mendarat keesokan harinya."
       }
      },
      "next": {
       "label": {
        "en": "Module 6 · technical and peer rounds",
        "id": "Modul 6 · babak teknis dan rekan"
       },
       "desc": {
        "en": "Method under observation, the “I don’t know” protocol and the dynamics of the peer interview.",
        "id": "Metode di bawah pengamatan, protokol “saya tidak tahu”, dan dinamika wawancara rekan."
       },
       "lesson": "6.1"
      }
     },
     "migratedFrom": "the-rope:4.4"
    }
   ],
   "hero": "../../assets/bg/gauntlet/gate-04-casestudy.jpg",
   "heroPos": "56% 22%"
  },
  {
   "num": 6,
   "phase": "perform",
   "title": {
    "en": "The User, Technical and Case Interview",
    "id": "Wawancara User, Teknis, dan Kasus"
   },
   "overview": {
    "en": "The user interview — with your future manager — is usually the decisive round, and it is where probing goes deepest: competency stories followed up three levels down, technical questions in your field, “I don’t know” moments, take-home tasks and live case questions. This module absorbs The Pack’s case-interview material and gives you a technical deep-dive five, the “I don’t know” protocol, and a case protocol for estimation, numbers and business cases.",
    "id": "Wawancara user — dengan calon atasanmu — biasanya ronde yang menentukan, dan di sinilah galian paling dalam: cerita kompetensi yang digali tiga tingkat, pertanyaan teknis di bidangmu, momen “saya tidak tahu”, tugas take-home, dan pertanyaan kasus langsung. Modul ini menyerap materi wawancara kasus The Pack dan memberimu lima pendalaman teknis, protokol “saya tidak tahu”, dan protokol kasus untuk estimasi, angka, dan kasus bisnis."
   },
   "outcome": {
    "en": "By the end of this module you can handle the decisive user round: competency questions probed in depth, technical questions in your field (including “I don’t know” moments), take-home tasks, and live case questions using a structured protocol.",
    "id": "Di akhir modul ini kamu bisa menangani ronde user yang menentukan: pertanyaan kompetensi yang digali mendalam, pertanyaan teknis di bidangmu (termasuk momen “saya tidak tahu”), tugas take-home, dan pertanyaan kasus langsung dengan protokol terstruktur."
   },
   "kit": {
    "en": "Technical deep-dive five · case protocol card",
    "id": "Lima pendalaman teknis · kartu protokol kasus"
   },
   "lessons": [
    {
     "n": "6.1",
     "title": {
      "en": "Technical Questions as Thinking Tests",
      "id": "Pertanyaan Teknis sebagai Ujian Berpikir"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The interviewer already knows the answer; what they cannot see is your method. Clarify, structure, solve aloud, verify — the four-beat loop that makes even a wrong answer score. This lesson installs the loop and the habit of narrating your reasoning without narrating your panic.",
      "id": "Pewawancara sudah tahu jawabannya; yang tidak bisa mereka lihat adalah metodemu. Klarifikasi, susun struktur, selesaikan dengan suara keras, verifikasi — putaran empat ketukan yang membuat jawaban keliru sekalipun tetap dapat nilai. Pelajaran ini memasang putaran itu, beserta kebiasaan menarasikan penalaranmu tanpa menarasikan kepanikanmu."
     },
     "objectives": [
      {
       "en": "Apply the clarify → structure → solve → verify loop to any technical question.",
       "id": "Menerapkan putaran klarifikasi → struktur → selesaikan → verifikasi pada pertanyaan teknis apa pun."
      },
      {
       "en": "Narrate reasoning aloud in a way interviewers can score.",
       "id": "Menarasikan penalaran dengan suara keras, dengan cara yang bisa dinilai pewawancara."
      },
      {
       "en": "Recover from a wrong path visibly and gracefully.",
       "id": "Pulih dari jalur yang keliru secara terlihat dan anggun."
      }
     ],
     "takeawaysLead": {
      "en": "The interviewer already knows the answer; what they cannot see is your method. To make even a wrong answer score, you can:",
      "id": "Pewawancara sudah tahu jawabannya; yang tak bisa mereka lihat adalah metodemu. Agar jawaban yang keliru pun tetap mendapat nilai, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Clarifying first is not weakness — it is the most senior move in the room.",
       "id": "Mengklarifikasi lebih dulu bukan kelemahan — itu langkah paling senior di ruangan."
      },
      {
       "en": "A wrong answer with visible method outscores a right answer produced in silence.",
       "id": "Jawaban keliru dengan metode yang terlihat mengungguli jawaban benar yang lahir dalam diam."
      },
      {
       "en": "Verification aloud — “let me sanity-check that” — is the loop most candidates skip.",
       "id": "Verifikasi dengan suara keras — “saya cek dulu masuk akal atau tidak” — adalah ketukan yang paling sering dilewati kandidat."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "The four beats",
        "id": "Empat ketukannya"
       },
       "body": {
        "en": "Clarify: restate the problem and surface assumptions — scope, constraints, success criteria. Structure: announce your plan before executing it. Solve: work the plan aloud, flagging forks and choices. Verify: check the result against a quick independent estimate or an edge case. The beats take discipline precisely when adrenaline says rush — which is why they are practised, not remembered.",
        "id": "Klarifikasi: nyatakan ulang masalahnya dan angkat asumsinya — cakupan, kendala, kriteria keberhasilan. Struktur: umumkan rencanamu sebelum menjalankannya. Selesaikan: kerjakan rencana itu dengan suara keras, tandai persimpangan dan pilihannya. Verifikasi: periksa hasilnya terhadap taksiran cepat yang independen atau sebuah kasus tepi. Ketukan-ketukan ini menuntut disiplin justru ketika adrenalin menyuruhmu buru-buru — itulah sebabnya ia dilatih, bukan sekadar diingat."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "Narrating without spiralling",
        "id": "Bernarasi tanpa berputar-putar"
       },
       "body": {
        "en": "Think-aloud is not stream-of-consciousness. Narrate decisions and reasons — “I'll segment by channel first because the drop could be concentrated” — not doubts and apologies. If you need silent seconds, buy them explicitly: “give me ten seconds to structure this.” Silence you announced reads as control; silence that just happens reads as freezing.",
        "id": "Berpikir dengan suara keras bukan berarti arus kesadaran. Narasikan keputusan dan alasannya — “saya pisahkan per kanal dulu, karena penurunannya mungkin terkonsentrasi di satu tempat” — bukan keraguan dan permintaan maaf. Kalau butuh beberapa detik untuk diam, minta secara terbuka: “beri saya sepuluh detik untuk menyusun ini.” Keheningan yang kamu umumkan terbaca sebagai kendali; keheningan yang terjadi begitu saja terbaca sebagai membeku."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "What is actually being scored",
        "id": "Apa yang sebenarnya dinilai"
       },
       "body": {
        "en": "Method, decomposition, judgment at forks, honesty about assumptions, and recovery from error. Speed matters far less than candidates believe; direction changes matter far less than how they are handled. The interviewer is simulating working with you on a hard problem — make the simulation pleasant and rigorous at once.",
        "id": "Metode, cara memecah masalah, pertimbangan di persimpangan, kejujuran tentang asumsi, dan pemulihan dari kesalahan. Kecepatan jauh kurang penting daripada yang diyakini kandidat; perubahan arah jauh kurang penting daripada cara menanganinya. Pewawancara sedang menyimulasikan bekerja bersamamu pada masalah yang sulit — buat simulasi itu menyenangkan sekaligus teliti."
       },
       "icon": "target"
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "The four-beat loop for any technical question",
       "id": "Putaran empat ketukan untuk pertanyaan teknis apa pun"
      },
      "items": [
       {
        "h": {
         "en": "Clarify",
         "id": "Klarifikasi"
        },
        "sub": {
         "en": "Restate, surface assumptions, define success",
         "id": "Nyatakan ulang, angkat asumsi, tentukan ukuran berhasil"
        }
       },
       {
        "h": {
         "en": "Structure",
         "id": "Susun struktur"
        },
        "sub": {
         "en": "Announce the plan before executing",
         "id": "Umumkan rencana sebelum menjalankannya"
        }
       },
       {
        "h": {
         "en": "Solve aloud",
         "id": "Selesaikan dengan suara keras"
        },
        "sub": {
         "en": "Narrate decisions and forks, not doubts",
         "id": "Narasikan keputusan dan persimpangan, bukan keraguan"
        }
       },
       {
        "h": {
         "en": "Verify",
         "id": "Verifikasi"
        },
        "sub": {
         "en": "Sanity-check against an estimate or edge case",
         "id": "Uji kewajaran terhadap taksiran atau kasus tepi"
        }
       }
      ],
      "note": {
       "en": "A wrong answer reached by visible method outscores a right answer produced in silence.",
       "id": "Jawaban keliru yang dicapai dengan metode yang terlihat mengungguli jawaban benar yang lahir dalam diam."
      },
      "exhibit": {
       "en": "Exhibit 1: The four-beat loop for any technical question",
       "id": "Peraga 1: Putaran empat ketukan untuk pertanyaan teknis apa pun"
      },
      "longdesc": {
       "en": "Diagram of The four-beat loop for any technical question. It presents, in order: Clarify — Restate, surface assumptions, define success; Structure — Announce the plan before executing; Solve aloud — Narrate decisions and forks, not doubts; Verify — Sanity-check against an estimate or edge case.",
       "id": "Diagram putaran empat ketukan untuk pertanyaan teknis apa pun. Menyajikan, secara berurutan: Klarifikasi — nyatakan ulang, angkat asumsi, tentukan ukuran berhasil; Susun struktur — umumkan rencana sebelum menjalankannya; Selesaikan dengan suara keras — narasikan keputusan dan persimpangan, bukan keraguan; Verifikasi — uji kewajaran terhadap taksiran atau kasus tepi."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "four-beat loop",
        "id": "putaran empat ketukan"
       },
       "def": {
        "en": "Clarify, structure, solve aloud, verify — the sequence that turns any technical question into visible method, and the reason a wrong answer with method outscores a right answer produced in silence.",
        "id": "Perjelas, susun, selesaikan dengan bersuara, verifikasi — urutan yang mengubah pertanyaan teknis apa pun menjadi metode yang terlihat, dan alasan jawaban keliru dengan metode mengalahkan jawaban benar yang dihasilkan dalam diam."
       }
      },
      {
       "term": {
        "en": "narrated decision",
        "id": "keputusan yang dinarasikan"
       },
       "def": {
        "en": "Think-aloud that states choices and reasons — “I'll segment by channel first because the drop could be concentrated” — rather than doubts and apologies.",
        "id": "Berpikir bersuara yang menyatakan pilihan dan alasan — “Saya akan memilah per kanal dulu karena penurunannya mungkin terkonsentrasi” — alih-alih keraguan dan permintaan maaf."
       }
      }
     ],
     "tryit": {
      "qid": "tc02",
      "label": {
       "en": "Show your first move",
       "id": "Tunjukkan langkah pertamamu"
      },
      "desc": {
       "en": "“What do you do before solving?” — walk the simulator through a real example, beats one and two.",
       "id": "“Apa yang Anda lakukan sebelum mulai menyelesaikan?” — ajak simulator menyusuri contoh sungguhan, ketukan satu dan dua."
      }
     },
     "scenario": {
      "icon": "gear",
      "img": "../../assets/bg/stage-execution.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat dalam Sorotan"
      },
      "body": [
       {
        "en": "Bayu freezes at the whiteboard. The system-design question has seven parts and he knows maybe four. The candidate before him answered fast and confidently — and wrongly, twice, without noticing. Bayu does something different: “Let me make sure I understand the constraints first.” He asks three questions, states two assumptions out loud, and solves the four parts he knows while naming the edge of the rest. He gets the offer. The fast candidate does not.",
        "id": "Bayu membeku di depan papan tulis. Soal desain sistemnya punya tujuh bagian, dan ia menguasai mungkin empat. Kandidat sebelumnya menjawab dengan cepat dan percaya diri — dan keliru, dua kali, tanpa menyadarinya. Bayu melakukan hal yang berbeda: “Izinkan saya memastikan dulu kendalanya.” Ia mengajukan tiga pertanyaan, menyebut dua asumsi dengan suara keras, dan menyelesaikan empat bagian yang ia kuasai sambil menyebutkan batas dari sisanya. Ia mendapat tawaran. Kandidat yang cepat tadi tidak."
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Diving in before clarifying",
         "id": "Langsung terjun sebelum mengklarifikasi"
        },
        "fix": {
         "en": "Restate the problem and surface assumptions first — clarifying is the most senior move in the room.",
         "id": "Nyatakan ulang masalahnya dan angkat asumsinya lebih dulu — mengklarifikasi adalah langkah paling senior di ruangan."
        }
       },
       {
        "h": {
         "en": "Thinking in silence",
         "id": "Berpikir dalam diam"
        },
        "fix": {
         "en": "Announce silence when you need it: “ten seconds to structure this.” Unannounced silence reads as freezing.",
         "id": "Umumkan keheningan saat kamu membutuhkannya: “sepuluh detik untuk menyusun ini.” Keheningan tanpa pengumuman terbaca sebagai membeku."
        }
       },
       {
        "h": {
         "en": "Defending a path you know is wrong",
         "id": "Mempertahankan jalur yang kamu tahu keliru"
        },
        "fix": {
         "en": "Say it, name why, restart: visible recovery from error scores higher than stubborn consistency.",
         "id": "Katakan, sebutkan alasannya, mulai ulang: pemulihan dari kesalahan yang terlihat dinilai lebih tinggi daripada konsistensi yang keras kepala."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "You realise mid-answer that your approach is wrong. Best move:",
        "id": "Di tengah jawaban, kamu sadar pendekatanmu keliru. Langkah terbaik:"
       },
       "options": [
        {
         "en": "Go quiet and think until you are certain",
         "id": "Diam dan berpikir sampai benar-benar yakin"
        },
        {
         "en": "Say so, name why, and restart on the better path",
         "id": "Katakan, sebutkan alasannya, dan mulai ulang di jalur yang lebih baik"
        },
        {
         "en": "Push through to the end so you look decisive",
         "id": "Terus sampai selesai supaya terlihat tegas"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Correct — “actually, this breaks on X; let me restart from the constraint” is a senior behaviour, scored as such.",
        "id": "Benar — “sebentar, ini tidak berlaku untuk X; saya mulai ulang dari kendalanya” adalah perilaku senior, dan dinilai sebagai perilaku senior."
       }
      }
     ],
     "insights": {
      "lead": {
       "en": "Why method outscores answers.",
       "id": "Mengapa metode mengalahkan jawaban."
      },
      "items": [
       {
        "h": {
         "en": "They have seen the right answer a hundred times",
         "id": "Mereka sudah melihat jawaban benar seratus kali"
        },
        "body": {
         "en": "What they have not seen is how you get there. A clarifying question that narrows the problem tells them more than a correct number produced in silence.",
         "id": "Yang belum mereka lihat adalah caramu sampai ke sana. Pertanyaan klarifikasi yang mempersempit masalah memberi tahu mereka lebih banyak daripada angka benar yang dihasilkan dalam diam."
        }
       },
       {
        "h": {
         "en": "Verification is the senior signal",
         "id": "Verifikasi adalah sinyal senior"
        },
        "body": {
         "en": "Juniors stop when they have an answer; seniors check it. “Let me test this against an edge case” is the sentence that changes the score.",
         "id": "Junior berhenti saat punya jawaban; senior memeriksanya. “Izinkan saya menguji ini dengan kasus tepi” adalah kalimat yang mengubah skor."
        }
       },
       {
        "h": {
         "en": "Hints are part of the test",
         "id": "Petunjuk adalah bagian dari tes"
        },
        "body": {
         "en": "How quickly you take a hint and build on it is scored as learning speed. Ignoring a hint to protect your original idea is scored too.",
         "id": "Seberapa cepat kamu mengambil petunjuk dan membangun darinya dinilai sebagai kecepatan belajar. Mengabaikan petunjuk demi melindungi ide awalmu juga dinilai."
        }
       }
      ]
     },
     "resources": {
      "items": [
       {
        "kind": "script",
        "title": {
         "en": "The four-beat loop, spoken",
         "id": "Loop empat ketukan, diucapkan"
        },
        "desc": {
         "en": "Phrases for each beat of a technical question.",
         "id": "Frasa untuk tiap ketukan pertanyaan teknis."
        },
        "body": [
         {
          "en": "CLARIFY: “Before I start — is the goal [X] or [Y]? What scale are we talking about? Any constraints I should respect?”",
          "id": "KLARIFIKASI: “Sebelum mulai — apakah tujuannya [X] atau [Y]? Skala apa yang kita bicarakan? Ada batasan yang harus saya patuhi?”"
         },
         {
          "en": "STRUCTURE: “I’d approach this in three steps: … I’ll start with the second because it decides the rest.”",
          "id": "SUSUN: “Saya akan mendekatinya dalam tiga langkah: … Saya mulai dari yang kedua karena itu menentukan sisanya.”"
         },
         {
          "en": "SOLVE ALOUD: “The trade-off here is … I’d choose … because … If that assumption is wrong, I’d switch to …”",
          "id": "SELESAIKAN LANTANG: “Pertukarannya di sini adalah … Saya pilih … karena … Jika asumsi itu salah, saya beralih ke …”"
         },
         {
          "en": "VERIFY: “Let me check this against [edge case / a quick number / what happens at scale]. … That holds. One thing I’d still want to test is …”",
          "id": "VERIFIKASI: “Saya cek ini terhadap [kasus tepi / angka cepat / apa yang terjadi pada skala]. … Itu bertahan. Satu hal yang masih ingin saya uji adalah …”"
         }
        ]
       }
      ]
     },
     "migratedFrom": "the-rope:5.1"
    },
    {
     "n": "6.2",
     "title": {
      "en": "Handling &quot;I Don&#39;t Know&quot; Gracefully",
      "id": "Menghadapi &quot;Saya Tidak Tahu&quot; dengan Anggun"
     },
     "kind": "reading",
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Every interview eventually reaches the edge of your knowledge — by design. What happens next separates candidates: bluffing collapses under one follow-up, silence reads as freezing, but the IDK protocol — name it, bound it, plan it — converts the edge into evidence of professional honesty.",
      "id": "Setiap wawancara pada akhirnya sampai di batas pengetahuanmu — memang dirancang begitu. Apa yang terjadi berikutnya memisahkan para kandidat: gertakan runtuh oleh satu pertanyaan lanjutan, diam terbaca sebagai membeku, tetapi protokol “saya tidak tahu” — sebutkan, batasi, rencanakan — mengubah batas itu menjadi bukti kejujuran profesional."
     },
     "objectives": [
      {
       "en": "Execute the name → bound → plan protocol at the edge of your knowledge.",
       "id": "Menjalankan protokol sebutkan → batasi → rencanakan di batas pengetahuanmu."
      },
      {
       "en": "Distinguish partial knowledge from no knowledge, honestly.",
       "id": "Membedakan pengetahuan yang sebagian dari yang sama sekali tidak ada, dengan jujur."
      },
      {
       "en": "Avoid the bluff — and recognise why interviewers always catch it.",
       "id": "Menghindari gertakan — dan memahami mengapa pewawancara selalu menangkapnya."
      }
     ],
     "takeawaysLead": {
      "en": "Every interview reaches the edge of your knowledge by design. To convert the edge into evidence, you can:",
      "id": "Setiap wawancara mencapai tepi pengetahuanmu secara sengaja. Untuk mengubah tepi itu menjadi bukti, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "“I don't know, and here is how I'd find out” is a scoring answer, not a forfeit.",
       "id": "“Saya tidak tahu, dan begini cara saya akan mencari tahu” adalah jawaban yang dapat nilai, bukan menyerah."
      },
      {
       "en": "Bound the unknown: say what you do know that borders it.",
       "id": "Batasi yang tidak kamu ketahui: sebutkan apa yang kamu ketahui di sekitarnya."
      },
      {
       "en": "Interviewers probe depth until they find the edge — reaching it is the plan, not the failure.",
       "id": "Pewawancara menggali sampai menemukan batasmu — sampai di sana adalah bagian dari rencana, bukan kegagalan."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "Why bluffing always loses",
        "id": "Mengapa gertakan selalu kalah"
       },
       "body": {
        "en": "The interviewer asks about X because they know X. Your improvised answer is being compared against real knowledge in real time, and the follow-up — there is always a follow-up — is aimed at the exact soft spot. One bluff caught taints every honest answer before it. The mathematics of credibility are brutal: never spend it on a bluff.",
        "id": "Pewawancara bertanya tentang X karena mereka menguasai X. Jawaban karanganmu sedang dibandingkan dengan pengetahuan yang sesungguhnya, saat itu juga, dan pertanyaan lanjutannya — selalu ada pertanyaan lanjutan — dibidikkan tepat ke titik lemahnya. Satu gertakan yang tertangkap menodai semua jawaban jujur sebelumnya. Matematika kredibilitas itu kejam: jangan pernah menghabiskannya untuk gertakan."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "The protocol",
        "id": "Protokolnya"
       },
       "body": {
        "en": "Name it: “I haven't worked with that directly.” Bound it: “What I do know is the neighbouring concept — here is how they relate as I understand it.” Plan it: “To get productive I'd start with the docs, build a small test case, and ask whoever owns it here for the local conventions.” Fifteen seconds, fully honest, and it demonstrates exactly how you will handle the unknown on the job — which is the real question.",
        "id": "Sebutkan: “Saya belum pernah menangani itu secara langsung.” Batasi: “Yang saya kuasai adalah konsep yang bersebelahan — begini kaitannya, sejauh pemahaman saya.” Rencanakan: “Supaya cepat produktif, saya akan mulai dari dokumentasinya, membangun kasus uji kecil, dan bertanya kepada pemiliknya di sini tentang konvensi yang berlaku.” Lima belas detik, sepenuhnya jujur, dan itu memperagakan persis bagaimana kamu akan menghadapi hal yang tidak kamu ketahui saat bekerja — dan itulah pertanyaan yang sebenarnya."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "Partial knowledge, stated precisely",
        "id": "Pengetahuan yang sebagian, dinyatakan dengan tepat"
       },
       "body": {
        "en": "Most edges are partial: you read about it, used it once, know its cousin. Say exactly that — “I've used it in one project, not at scale” — and let the interviewer calibrate the follow-up. Precision about your own boundary is a competence signal in itself; seniors do it instinctively, and interviewers recognise the dialect.",
        "id": "Kebanyakan batas itu bersifat sebagian: kamu pernah membacanya, pernah memakainya sekali, mengenal kerabatnya. Katakan persis itu — “pernah saya pakai di satu proyek, belum dalam skala besar” — dan biarkan pewawancara mengalibrasi pertanyaan lanjutannya. Ketepatan tentang batas dirimu sendiri adalah sinyal kompetensi tersendiri; para senior melakukannya secara naluriah, dan pewawancara mengenali dialek itu."
       },
       "icon": "target"
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "The IDK protocol",
       "id": "Protokol “saya tidak tahu”"
      },
      "items": [
       {
        "h": {
         "en": "Name it",
         "id": "Sebutkan"
        },
        "sub": {
         "en": "“I haven't worked with that directly”",
         "id": "“Saya belum pernah menangani itu secara langsung”"
        }
       },
       {
        "h": {
         "en": "Bound it",
         "id": "Batasi"
        },
        "sub": {
         "en": "State the neighbouring thing you do know",
         "id": "Sebutkan hal bersebelahan yang kamu kuasai"
        }
       },
       {
        "h": {
         "en": "Plan it",
         "id": "Rencanakan"
        },
        "sub": {
         "en": "Docs → small test → ask the owner",
         "id": "Dokumentasi → uji kecil → tanya pemiliknya"
        }
       }
      ],
      "note": {
       "en": "Fifteen seconds, fully honest — and it demonstrates exactly how you will handle the unknown on the job.",
       "id": "Lima belas detik, sepenuhnya jujur — dan itu memperagakan persis bagaimana kamu akan menghadapi hal yang tidak kamu ketahui saat bekerja."
      },
      "exhibit": {
       "en": "Exhibit 1: The IDK protocol",
       "id": "Peraga 1: Protokol “saya tidak tahu”"
      },
      "longdesc": {
       "en": "Diagram of The IDK protocol. It presents, in order: Name it — “I haven't worked with that directly”; Bound it — State the neighbouring thing you do know; Plan it — Docs → small test → ask the owner.",
       "id": "Diagram protokol “saya tidak tahu”. Menyajikan, secara berurutan: Sebutkan — “Saya belum pernah menangani itu secara langsung”; Batasi — sebutkan hal bersebelahan yang kamu kuasai; Rencanakan — dokumentasi → uji kecil → tanya pemiliknya."
      }
     },
     "listen": [
      {
       "label": {
        "en": "The protocol, spoken end to end",
        "id": "Protokolnya, diucapkan dari awal sampai akhir"
       },
       "text": {
        "en": "I haven't used that framework directly. What I do know well is its predecessor — as I understand it, the main difference is the rendering model. To get productive I'd start with the migration guide, build one small component as a test, and ask whoever owns the codebase here about local conventions. I'd expect to be useful within days, not weeks.",
        "id": "Saya belum pernah memakai framework itu secara langsung. Yang saya kuasai dengan baik adalah pendahulunya — sejauh pemahaman saya, perbedaan utamanya ada di model rendering. Supaya cepat produktif, saya akan mulai dari panduan migrasinya, membangun satu komponen kecil sebagai uji coba, dan bertanya kepada pemilik kode di sini tentang konvensi yang berlaku. Perkiraan saya, saya sudah bisa berkontribusi dalam hitungan hari, bukan minggu."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Asked about a method you have never used, you should:",
        "id": "Ditanya tentang metode yang belum pernah kamu pakai, kamu sebaiknya:"
       },
       "options": [
        {
         "en": "Improvise a definition from the name and hope",
         "id": "Mengarang definisi dari namanya, lalu berharap"
        },
        {
         "en": "Redirect to a topic you know better without acknowledging",
         "id": "Mengalihkan ke topik yang lebih kamu kuasai tanpa mengakuinya"
        },
        {
         "en": "Say you have not used it, state the adjacent thing you know, and describe how you would ramp up",
         "id": "Mengatakan belum pernah memakainya, menyebutkan hal terdekat yang kamu kuasai, dan menjelaskan cara kamu akan mengejarnya"
        }
       ],
       "correct": 2,
       "why": {
        "en": "Correct — the protocol in action. One follow-up destroys the improvised definition; nothing destroys honest bounding.",
        "id": "Benar — itulah protokolnya dalam praktik. Satu pertanyaan lanjutan menghancurkan definisi yang dikarang; tidak ada yang bisa menghancurkan pembatasan yang jujur."
       }
      }
     ],
     "tryit": {
      "qid": "tc03",
      "label": {
       "en": "Say “I don't know” under observation",
       "id": "Ucapkan “saya tidak tahu” sambil diamati"
      },
      "desc": {
       "en": "Practice the moment you fear — the edge of your knowledge, handled with a plan.",
       "id": "Latih momen yang kamu takuti — batas pengetahuanmu, dihadapi dengan sebuah rencana."
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Improvising a definition from the term's name",
         "id": "Mengarang definisi dari nama istilahnya"
        },
        "fix": {
         "en": "The interviewer knows the real answer; the follow-up aims exactly at your soft spot. Never bluff.",
         "id": "Pewawancara tahu jawaban yang sebenarnya; pertanyaan lanjutannya membidik persis titik lemahmu. Jangan pernah menggertak."
        }
       },
       {
        "h": {
         "en": "A bare “I don't know”",
         "id": "“Saya tidak tahu” yang berdiri sendiri"
        },
        "fix": {
         "en": "Attach the plan: what you'd check, who you'd ask, when you'd come back. IDK plus plan scores.",
         "id": "Sertakan rencananya: apa yang akan kamu periksa, siapa yang akan kamu tanya, kapan kamu kembali dengan jawaban. “Saya tidak tahu” plus rencana itu dapat nilai."
        }
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "follow-up",
        "id": "pertanyaan lanjutan"
       },
       "def": {
        "en": "The probing question after your answer — where inflated claims collapse and honest depth scores.",
        "id": "Pertanyaan penggali setelah jawabanmu — tempat klaim yang dibesar-besarkan runtuh, dan kedalaman yang jujur mendapat nilai."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      }
     ],
     "migratedFrom": "the-rope:5.2"
    },
    {
     "n": "6.3",
     "title": {
      "en": "The User/Peer Interview Dynamic",
      "id": "Dinamika Wawancara dengan Calon Rekan Setim"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Peers are not testing whether you are impressive; they are testing whether Tuesday with you will be bearable. Load-sharing, communication under friction, ego when challenged, help given and asked for — this lesson decodes the partnership test and how to interview your future teammates back.",
      "id": "Calon rekan setim tidak menguji apakah kamu mengesankan; mereka menguji apakah hari Selasa bersamamu akan tertahankan. Berbagi beban, komunikasi saat bergesekan, ego ketika ditantang, bantuan yang diberikan dan diminta — pelajaran ini membedah ujian kemitraan itu, dan cara mewawancarai balik calon rekan setimmu."
     },
     "objectives": [
      {
       "en": "Answer peer questions with collaboration scenes, not solo trophies.",
       "id": "Menjawab pertanyaan calon rekan setim dengan adegan kolaborasi, bukan trofi pribadi."
      },
      {
       "en": "Show healthy help-seeking and help-giving behaviour.",
       "id": "Menunjukkan perilaku yang sehat dalam meminta dan memberi bantuan."
      },
      {
       "en": "Ask peers the questions that reveal the team's real weather.",
       "id": "Mengajukan pertanyaan kepada calon rekan yang mengungkap cuaca sebenarnya di tim itu."
      }
     ],
     "takeawaysLead": {
      "en": "Peers are testing whether Tuesday with you will be bearable. To pass the partnership test and interview them back, you can:",
      "id": "Rekan sejawat menguji apakah hari Selasa bersamamu akan tertanggungkan. Untuk lolos uji kemitraan dan mewawancarai mereka balik, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Peers imagine working beside you on a bad week — give them scenes of exactly that.",
       "id": "Calon rekan setim membayangkan bekerja di sampingmu pada minggu yang buruk — beri mereka adegan persis seperti itu."
      },
      {
       "en": "Asking for help early is a strength signal in peer rooms, not a confession.",
       "id": "Meminta bantuan sejak awal adalah sinyal kekuatan di ruang calon rekan, bukan pengakuan kelemahan."
      },
      {
       "en": "Their answers to your questions tell you the team's truth — listen as hard as you speak.",
       "id": "Jawaban mereka atas pertanyaanmu menceritakan kebenaran tentang tim itu — dengarkan sekeras kamu berbicara."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "The Tuesday question",
        "id": "Pertanyaan hari Selasa"
       },
       "body": {
        "en": "Behind every peer question sits one image: a slipping deadline, a broken build, a disagreement at 5 pm — with you in the room. Will you communicate or go dark? Share load or guard territory? Stay curious or get defensive? Choose stories that show you in exactly those moments, behaving like someone worth having on the rope.",
        "id": "Di balik setiap pertanyaan dari calon rekan setim ada satu bayangan: tenggat yang molor, sistem yang rusak, perbedaan pendapat pukul 5 sore — dengan kamu di ruangan itu. Apakah kamu akan berkomunikasi, atau menghilang? Berbagi beban, atau menjaga wilayah? Tetap ingin tahu, atau menjadi defensif? Pilih cerita yang memperlihatkanmu persis di momen-momen seperti itu, bersikap seperti orang yang layak berada di tali yang sama."
       }
      },
      {
       "h": {
        "en": "Help as a signal",
        "id": "Bantuan sebagai sinyal"
       },
       "body": {
        "en": "Peers fear two extremes: the hero who never asks and melts down at scale, and the passenger who asks before trying. The healthy middle has a protocol: try, timebox, then ask precisely — “I've tried A and B, I'm stuck on C, can you look?” Tell one story of asking exactly like that, and one of being the person others asked. Both directions matter.",
        "id": "Calon rekan setim takut pada dua ekstrem: si pahlawan yang tidak pernah bertanya lalu tumbang saat beban membesar, dan si penumpang yang bertanya sebelum mencoba. Jalan tengah yang sehat punya protokol: coba dulu, batasi waktunya, lalu bertanya dengan tepat — “Saya sudah mencoba A dan B, macet di C, bisa tolong lihat?” Ceritakan satu kisah ketika kamu bertanya persis seperti itu, dan satu kisah ketika kamu menjadi orang yang ditanya. Kedua arah itu sama pentingnya."
       }
      },
      {
       "h": {
        "en": "Interviewing them back",
        "id": "Mewawancarai mereka balik"
       },
       "body": {
        "en": "Peers answer more honestly than managers. Ask: what does a normal week actually look like? What breaks first when things get busy? What would you change about how the team works? Their hesitations are data. A peer round where you learned nothing about the team was a wasted intelligence opportunity, whatever the verdict.",
        "id": "Calon rekan setim menjawab lebih jujur daripada manajer. Tanyakan: seperti apa minggu yang normal sebenarnya? Apa yang paling dulu jebol saat sedang sibuk? Apa yang ingin kamu ubah dari cara tim ini bekerja? Keraguan mereka saat menjawab adalah data. Ronde dengan calon rekan yang tidak memberimu pengetahuan baru tentang tim adalah kesempatan intelijen yang terbuang, apa pun hasil akhirnya."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: The help protocol peers are listening for — neither hero nor passenger.",
       "id": "Peraga 1: Protokol meminta bantuan yang didengarkan rekan sejawat — bukan pahlawan, bukan penumpang."
      },
      "title": {
       "en": "Try → Timebox → Ask precisely → Share back",
       "id": "Coba → Batasi waktu → Tanya dengan presisi → Bagikan kembali"
      },
      "items": [
       {
        "h": {
         "en": "Try",
         "id": "Coba"
        },
        "sub": {
         "en": "An honest attempt first — the passenger skips this",
         "id": "Usaha jujur lebih dulu — sang penumpang melewatkannya"
        }
       },
       {
        "h": {
         "en": "Timebox",
         "id": "Batasi waktu"
        },
        "sub": {
         "en": "A cap decided in advance — the hero never sets one",
         "id": "Batas yang ditetapkan di muka — sang pahlawan tak pernah menetapkannya"
        }
       },
       {
        "h": {
         "en": "Ask precisely",
         "id": "Tanya dengan presisi"
        },
        "sub": {
         "en": "“I've tried A and B; I'm stuck at C — what am I missing?”",
         "id": "“Saya sudah mencoba A dan B; tersangkut di C — apa yang saya lewatkan?”"
        }
       },
       {
        "h": {
         "en": "Share back",
         "id": "Bagikan kembali"
        },
        "sub": {
         "en": "The answer written down where the next person can find it",
         "id": "Jawabannya dituliskan di tempat orang berikutnya bisa menemukannya"
        }
       }
      ],
      "longdesc": {
       "en": "A four-step flow for asking for help the way peers respect: make an honest attempt, cap the time in advance, ask precisely by stating what you tried and where you are stuck, and share the answer back where the next person can find it.",
       "id": "Alur empat langkah untuk meminta bantuan dengan cara yang dihormati rekan sejawat: lakukan usaha jujur, batasi waktunya di muka, tanyakan dengan presisi dengan menyebut apa yang sudah dicoba dan di mana tersangkut, dan bagikan jawabannya kembali di tempat orang berikutnya bisa menemukannya."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "the Tuesday question",
        "id": "pertanyaan hari Selasa"
       },
       "def": {
        "en": "The image behind every peer question — a slipping deadline, a broken build, a disagreement at 5 pm, with you in the room — and whether you communicate, share load and stay curious in it.",
        "id": "Gambaran di balik setiap pertanyaan rekan sejawat — tenggat yang meleset, build yang rusak, perselisihan pukul 5 sore, dengan kamu di ruangan — dan apakah kamu berkomunikasi, berbagi beban, dan tetap ingin tahu di dalamnya."
       }
      },
      {
       "term": {
        "en": "try–timebox–ask",
        "id": "coba–batasi waktu–tanya"
       },
       "def": {
        "en": "The healthy help protocol between the hero who never asks and the passenger who asks before trying: attempt, cap the time, then ask precisely what you tried and where you are stuck.",
        "id": "Protokol meminta bantuan yang sehat di antara sang pahlawan yang tak pernah bertanya dan sang penumpang yang bertanya sebelum mencoba: coba, batasi waktunya, lalu tanyakan dengan presisi apa yang sudah dicoba dan di mana kamu tersangkut."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "The peer room hears differently",
        "id": "Ruang calon rekan mendengar dengan cara yang berbeda"
       },
       "q": {
        "en": "“Tell me about working with someone difficult.”",
        "id": "“Ceritakan pengalaman Anda bekerja dengan orang yang sulit.”"
       },
       "weak": {
        "en": "One teammate was really slow and honestly not very skilled, so I ended up doing most of the work myself and we delivered thanks to that.",
        "id": "Ada satu rekan yang sangat lambat dan, jujur saja, kurang terampil, jadi akhirnya saya mengerjakan sebagian besar sendiri, dan kami selesai berkat itu."
       },
       "strong": {
        "en": "A designer and I kept missing each other — my specs were too abstract for him, his mockups too final for me. I asked for thirty minutes and we found a working agreement: rough sketches before any polish, and my feedback within a day. The next two features shipped without a single redo. I'd rather fix the interface between people than route around a person.",
        "id": "Saya dan seorang desainer terus tidak nyambung — spesifikasi saya terlalu abstrak baginya, mockup-nya terlalu final bagi saya. Saya minta waktu tiga puluh menit, dan kami menemukan kesepakatan kerja: sketsa kasar dulu sebelum dipoles, dan umpan balik dari saya dalam sehari. Dua fitur berikutnya rilis tanpa satu pun pengerjaan ulang. Saya lebih memilih memperbaiki cara kerja antara dua orang daripada menghindari seseorang."
       },
       "why": {
        "en": "The weak answer outshines a teammate — the exact wrong evidence in a partnership test. The strong one fixes the collaboration and shares the win.",
        "id": "Jawaban yang lemah mengungguli rekan setim — bukti yang paling keliru dalam ujian kemitraan. Jawaban yang kuat memperbaiki kolaborasinya dan berbagi kemenangan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "In a peer interview, the strongest story choice is:",
        "id": "Dalam wawancara dengan calon rekan setim, pilihan cerita yang paling kuat adalah:"
       },
       "options": [
        {
         "en": "A collaboration under pressure where you shared load and credit",
         "id": "Kolaborasi di bawah tekanan, ketika kamu berbagi beban dan berbagi kredit"
        },
        {
         "en": "Your biggest individual achievement",
         "id": "Pencapaian pribadi terbesarmu"
        },
        {
         "en": "A story where you outperformed a weak teammate",
         "id": "Cerita ketika kamu mengungguli rekan setim yang lemah"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — the room is a partnership test. Outshining teammates is the exact wrong evidence here.",
        "id": "Benar — ruangan ini adalah ujian kemitraan. Mengungguli rekan setim justru bukti yang paling keliru di sini."
       }
      }
     ],
     "tryit": {
      "qid": "bh14",
      "label": {
       "en": "Drill the partnership answer",
       "id": "Latih jawaban kemitraan"
      },
      "desc": {
       "en": "“Working with someone very different” — make the working agreement the hero, not yourself.",
       "id": "“Bekerja dengan orang yang sangat berbeda dari Anda” — jadikan kesepakatan kerjanya sebagai pahlawan, bukan dirimu."
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Impressing the peer",
         "id": "Mengesankan rekan"
        },
        "fix": {
         "en": "They are not scoring brilliance; they are imagining Tuesday. Show how you share load and take feedback.",
         "id": "Mereka tidak menilai kecemerlangan; mereka membayangkan hari Selasa. Tunjukkan cara kamu berbagi beban dan menerima umpan balik."
        }
       },
       {
        "h": {
         "en": "Criticising their current setup",
         "id": "Mengkritik pengaturan mereka saat ini"
        },
        "fix": {
         "en": "Ask why it is that way before suggesting anything. Curiosity scores; judgment of strangers does not.",
         "id": "Tanyakan mengapa begitu sebelum menyarankan apa pun. Rasa ingin tahu mendapat nilai; menghakimi orang asing tidak."
        }
       },
       {
        "h": {
         "en": "No questions about the actual work",
         "id": "Tak ada pertanyaan tentang pekerjaan sebenarnya"
        },
        "fix": {
         "en": "Peers love being asked about the real day: tools, rituals, what breaks. It is also your best data on the job.",
         "id": "Rekan senang ditanya tentang hari yang sebenarnya: alat, ritual, apa yang rusak. Itu juga data terbaikmu tentang pekerjaan itu."
        }
       }
      ]
     },
     "migratedFrom": "the-rope:5.3"
    },
    {
     "n": "6.4",
     "title": {
      "en": "Technical Deep-Dive Questions by Function",
      "id": "Pertanyaan Pendalaman Teknis per Fungsi"
     },
     "kind": "interactive",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Every function has its deep-dive shape: engineers defend architecture choices, analysts defend metric definitions, marketers defend channel decisions, operators defend process trade-offs. This lesson teaches you to predict your function's five likely deep-dives and build evidence for each — with the career graph as your map.",
      "id": "Setiap fungsi punya bentuk pendalamannya sendiri: engineer mempertahankan pilihan arsitektur, analis mempertahankan definisi metrik, pemasar mempertahankan keputusan kanal, orang operasional mempertahankan trade-off proses. Pelajaran ini mengajarimu meramalkan lima pendalaman yang paling mungkin untuk fungsimu dan membangun bukti untuk masing-masing — dengan peta karier sebagai panduanmu."
     },
     "objectives": [
      {
       "en": "Identify the deep-dive shape of your target function.",
       "id": "Mengenali bentuk pendalaman untuk fungsi yang kamu tuju."
      },
      {
       "en": "Predict five likely deep-dive questions for your role.",
       "id": "Meramalkan lima pertanyaan pendalaman yang paling mungkin untuk posisimu."
      },
      {
       "en": "Prepare a defended decision — options, choice, trade-off — for each.",
       "id": "Menyiapkan satu keputusan yang bisa dipertahankan — pilihan, keputusan, trade-off — untuk masing-masing."
      }
     ],
     "takeawaysLead": {
      "en": "Every function has its deep-dive shape, and the descent stops at your edge by design. To predict and defend yours, you can:",
      "id": "Setiap fungsi punya bentuk penyelaman mendalamnya sendiri, dan penurunannya berhenti di tepimu secara sengaja. Untuk memprediksi dan mempertahankan milikmu, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Deep-dives probe decisions you claim as yours: be ready to defend the fork, not just describe the road.",
       "id": "Pendalaman menggali keputusan yang kamu klaim sebagai milikmu: siaplah mempertahankan persimpangannya, bukan sekadar menggambarkan jalannya."
      },
      {
       "en": "“Why not the alternative?” is the real question inside every deep-dive.",
       "id": "“Mengapa bukan alternatifnya?” adalah pertanyaan sebenarnya di dalam setiap pendalaman."
      },
      {
       "en": "The Range's career directions list each role's core skills — use them as your prediction engine.",
       "id": "Arah karier di The Range mencantumkan keterampilan inti setiap posisi — pakai itu sebagai mesin prediksimu."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "The shape of a deep-dive",
        "id": "Bentuk sebuah pendalaman"
       },
       "body": {
        "en": "It starts from your own CV or answer: “you mentioned X — go deeper.” Then it descends: why this way, why not that way, what broke, what would you change now. The descent stops at your edge — by design. Preparation is therefore vertical, not horizontal: for your two or three flagship projects, be ready to go four levels down with honest detail.",
        "id": "Pendalaman berangkat dari CV atau jawabanmu sendiri: “Anda tadi menyebut X — coba perdalam.” Lalu ia turun: mengapa dengan cara ini, mengapa bukan cara itu, apa yang rusak, apa yang akan kamu ubah sekarang. Penurunan itu berhenti di batasmu — memang dirancang begitu. Karena itu persiapannya bersifat vertikal, bukan horizontal: untuk dua atau tiga proyek unggulanmu, siaplah turun empat tingkat dengan detail yang jujur."
       }
      },
      {
       "h": {
        "en": "Prediction from the career graph",
        "id": "Meramalkan dari peta karier"
       },
       "body": {
        "en": "Open your target direction in The Range (inside The Map). Its core skills are the deep-dive menu: each skill generates a “defend a decision involving this” question. Product roles get prioritisation and metric-choice dives; engineering gets architecture and debugging dives; sales gets pipeline and objection dives. Write your five, then attach a real defended decision to each.",
        "id": "Buka arah karier yang kamu tuju di The Range (di dalam The Map). Keterampilan intinya adalah menu pendalaman: setiap keterampilan melahirkan satu pertanyaan “pertahankan sebuah keputusan yang melibatkan ini”. Posisi produk mendapat pendalaman tentang prioritas dan pemilihan metrik; engineering mendapat arsitektur dan debugging; sales mendapat pipeline dan penanganan keberatan. Tulis lima milikmu, lalu lekatkan satu keputusan sungguhan yang bisa dipertahankan pada masing-masing."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: The shape of a deep-dive — it starts from your own claim and descends until it finds your edge.",
       "id": "Peraga 1: Bentuk penyelaman mendalam — dimulai dari klaimmu sendiri dan menurun sampai menemukan tepimu."
      },
      "title": {
       "en": "Your claim → Why this way → Why not that → What broke → What now → The edge",
       "id": "Klaimmu → Mengapa begini → Mengapa bukan begitu → Apa yang rusak → Apa sekarang → Tepi"
      },
      "items": [
       {
        "h": {
         "en": "Your claim",
         "id": "Klaimmu"
        },
        "sub": {
         "en": "“You mentioned X — go deeper”",
         "id": "“Kamu menyebut X — jelaskan lebih dalam”"
        }
       },
       {
        "h": {
         "en": "Why this way",
         "id": "Mengapa begini"
        },
        "sub": {
         "en": "The decision you own, with its reason",
         "id": "Keputusan yang kamu miliki, beserta alasannya"
        }
       },
       {
        "h": {
         "en": "Why not that",
         "id": "Mengapa bukan begitu"
        },
        "sub": {
         "en": "The alternative you rejected — the real question inside every deep-dive",
         "id": "Alternatif yang kamu tolak — pertanyaan sebenarnya di dalam setiap penyelaman"
        }
       },
       {
        "h": {
         "en": "What broke",
         "id": "Apa yang rusak"
        },
        "sub": {
         "en": "Honest failure, handled — not hidden",
         "id": "Kegagalan yang jujur, ditangani — bukan disembunyikan"
        }
       },
       {
        "h": {
         "en": "What now",
         "id": "Apa sekarang"
        },
        "sub": {
         "en": "What you would change today, and why",
         "id": "Apa yang akan kamu ubah hari ini, dan mengapa"
        }
       },
       {
        "h": {
         "en": "The edge",
         "id": "Tepi"
        },
        "sub": {
         "en": "Reached by design — name it, bound it, plan it (5.2)",
         "id": "Dicapai secara sengaja — namai, batasi, rencanakan (5.2)"
        }
       }
      ],
      "longdesc": {
       "en": "A six-step flow showing how a technical deep-dive descends: it starts from a claim on your CV, asks why you chose that approach, why not the alternative, what broke, what you would change now, and stops at the edge of your knowledge, which is handled with the IDK protocol from lesson 5.2.",
       "id": "Alur enam langkah yang memperlihatkan bagaimana penyelaman teknis menurun: dimulai dari klaim di CV-mu, bertanya mengapa kamu memilih pendekatan itu, mengapa bukan alternatifnya, apa yang rusak, apa yang akan kamu ubah sekarang, dan berhenti di tepi pengetahuanmu, yang ditangani dengan protokol IDK dari pelajaran 5.2."
      }
     },
     "steps": [
      {
       "h": {
        "en": "Step 1 · Write your five",
        "id": "Langkah 1 · Tulis lima milikmu"
       },
       "body": {
        "en": "From your target role's core skills, draft the five deep-dive questions you would ask a candidate for this role. Phrase them as an interviewer would.",
        "id": "Dari keterampilan inti posisi yang kamu tuju, susun lima pertanyaan pendalaman yang akan kamu ajukan kepada kandidat untuk posisi itu. Rumuskan seperti seorang pewawancara."
       },
       "debrief": {
        "en": "If your five feel generic, they are horizontal. Verticalise: attach each to a specific artefact a candidate would own — a dashboard, a campaign, a pipeline, a system. “Defend your metric definitions on a dashboard you built” is a real deep-dive; “tell me about analytics” is not.",
        "id": "Kalau lima pertanyaanmu terasa generik, berarti masih horizontal. Buat vertikal: lekatkan masing-masing pada artefak spesifik yang dimiliki seorang kandidat — sebuah dashboard, kampanye, pipeline, sistem. “Pertahankan definisi metrik di dashboard yang Anda bangun” adalah pendalaman yang sungguhan; “ceritakan tentang analitik” bukan."
       }
      },
      {
       "h": {
        "en": "Step 2 · Attach defended decisions",
        "id": "Langkah 2 · Lekatkan keputusan yang bisa dipertahankan"
       },
       "body": {
        "en": "For each question, pick a real decision from your work: the options you saw, the criteria you used, the trade-off you accepted, what happened. One paragraph each, spoken aloud once.",
        "id": "Untuk setiap pertanyaan, pilih satu keputusan sungguhan dari pekerjaanmu: pilihan yang kamu lihat, kriteria yang kamu pakai, trade-off yang kamu terima, dan apa yang terjadi kemudian. Satu paragraf untuk masing-masing, diucapkan dengan suara keras satu kali."
       },
       "debrief": {
        "en": "The defended-decision pattern: “I had A and B. A was faster, B was safer. Given the launch date, I chose A and mitigated the risk by X. It held, though today I'd add Y.” Options, criteria, mitigation, honesty about hindsight — four sentences that survive any depth of follow-up.",
        "id": "Pola keputusan yang bisa dipertahankan: “Ada pilihan A dan B. A lebih cepat, B lebih aman. Mengingat tanggal rilisnya, saya memilih A dan meredam risikonya dengan X. Pilihan itu bertahan, meskipun kalau sekarang saya akan menambahkan Y.” Pilihan, kriteria, mitigasi, kejujuran saat menengok ke belakang — empat kalimat yang tahan pertanyaan lanjutan sedalam apa pun."
       }
      },
      {
       "h": {
        "en": "Step 3 · Find your edge on purpose",
        "id": "Langkah 3 · Temukan batasmu dengan sengaja"
       },
       "body": {
        "en": "For each flagship project, descend your own knowledge four levels until you hit the point where you would say “I don't know”. Write the honest IDK sentence for that point, using the 5.2 protocol.",
        "id": "Untuk setiap proyek unggulan, turuni pengetahuanmu sendiri empat tingkat sampai ke titik ketika kamu akan berkata “saya tidak tahu”. Tulis kalimat “saya tidak tahu” yang jujur untuk titik itu, dengan protokol dari 5.2."
       },
       "debrief": {
        "en": "Knowing where your edge is before the interviewer finds it removes the fear of the descent. The edge sentence — “below that, I'd be guessing; here's how I'd find out” — is prepared honesty, and prepared honesty is unshakeable.",
        "id": "Mengetahui di mana batasmu sebelum pewawancara menemukannya menghapus rasa takut terhadap penurunan itu. Kalimat batasnya — “di bawah itu saya hanya akan menebak; begini cara saya mencari tahu” — adalah kejujuran yang disiapkan, dan kejujuran yang disiapkan tidak tergoyahkan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A deep-dive interviewer asks “why did you choose that approach?” They are really testing:",
        "id": "Pewawancara pendalaman bertanya, “mengapa Anda memilih pendekatan itu?” Yang sebenarnya mereka uji:"
       },
       "options": [
        {
         "en": "Whether you can recall the project timeline",
         "id": "Apakah kamu ingat lini waktu proyeknya"
        },
        {
         "en": "Whether you saw alternatives and chose with reasons",
         "id": "Apakah kamu melihat alternatifnya dan memilih dengan alasan"
        },
        {
         "en": "Whether your approach matches their favourite",
         "id": "Apakah pendekatanmu sama dengan favorit mereka"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Correct — judgment lives at the forks. Options seen, criteria used, trade-off accepted: that is the deep-dive answer shape.",
        "id": "Benar — pertimbangan hidup di persimpangan. Pilihan yang terlihat, kriteria yang dipakai, trade-off yang diterima: itulah bentuk jawaban pendalaman."
       }
      },
      {
       "q": {
        "en": "A deep-dive descends until it finds:",
        "id": "Sebuah pendalaman turun terus sampai menemukan:"
       },
       "options": [
        {
         "en": "The edge of your knowledge — by design; how you handle it is the score",
         "id": "Batas pengetahuanmu — memang dirancang begitu; cara kamu menghadapinya itulah nilaimu"
        },
        {
         "en": "A fact you cannot possibly know, to embarrass you",
         "id": "Fakta yang mustahil kamu ketahui, untuk mempermalukanmu"
        },
        {
         "en": "The complete history of your project",
         "id": "Riwayat lengkap proyekmu"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — reaching the edge is the plan, not the failure. Prepared honesty at the edge is unshakeable.",
        "id": "Benar — sampai di batas adalah bagian dari rencana, bukan kegagalan. Kejujuran yang disiapkan di batas itu tidak tergoyahkan."
       }
      }
     ],
     "tryit": {
      "qid": "tc07",
      "label": {
       "en": "The unfamiliar-system drill",
       "id": "Latihan sistem yang asing"
      },
      "desc": {
       "en": "Describe your first hour on a system you've never touched — orient, reproduce, bisect.",
       "id": "Gambarkan satu jam pertamamu di sistem yang belum pernah kamu sentuh — orientasi, reproduksi, persempit masalahnya."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "trade-off",
        "id": "trade-off"
       },
       "def": {
        "en": "A deliberate exchange — accepting a cost on one dimension to gain on another; interviewers probe whether yours are conscious.",
        "id": "Pertukaran yang disengaja — menerima kerugian di satu dimensi demi keuntungan di dimensi lain; pewawancara menguji apakah trade-off milikmu diambil secara sadar."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      }
     ],
     "resources": {
      "items": [
       {
        "kind": "worksheet",
        "title": {
         "en": "Deep-dive prep by function",
         "id": "Persiapan pendalaman per fungsi"
        },
        "desc": {
         "en": "Prepare two defended decisions in your function’s shape.",
         "id": "Siapkan dua keputusan yang dipertahankan dalam bentuk fungsimu."
        },
        "body": [
         {
          "en": "ENGINEERING: an architecture or tooling choice — alternatives considered, trade-offs, what you would change now",
          "id": "REKAYASA: pilihan arsitektur atau alat — alternatif yang dipertimbangkan, pertukaran, apa yang akan kamu ubah sekarang"
         },
         {
          "en": "DATA / ANALYTICS: a metric you defined — numerator, denominator, why that definition, what it missed",
          "id": "DATA / ANALITIK: metrik yang kamu definisikan — pembilang, penyebut, mengapa definisi itu, apa yang terlewat"
         },
         {
          "en": "MARKETING: a channel or budget decision — hypothesis, test, result, what you learned about the customer",
          "id": "PEMASARAN: keputusan kanal atau anggaran — hipotesis, uji, hasil, apa yang kamu pelajari tentang pelanggan"
         },
         {
          "en": "OPERATIONS: a process trade-off — speed vs quality vs cost, how you measured, what broke",
          "id": "OPERASI: pertukaran proses — kecepatan vs kualitas vs biaya, cara mengukur, apa yang rusak"
         },
         {
          "en": "FINANCE: an assumption in a model or forecast — where it came from, its sensitivity, how it turned out",
          "id": "KEUANGAN: asumsi dalam model atau prakiraan — asalnya, sensitivitasnya, bagaimana hasilnya"
         },
         {
          "en": "SALES / BD: a deal you shaped — qualification, objections, why it closed or did not",
          "id": "PENJUALAN / BD: kesepakatan yang kamu bentuk — kualifikasi, keberatan, mengapa tertutup atau tidak"
         },
         {
          "en": "For each: the one follow-up you are most afraid of, and your honest answer to it.",
          "id": "Untuk masing-masing: satu pertanyaan lanjutan yang paling kamu takuti, dan jawaban jujurmu."
         }
        ]
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Defending a choice you did not make",
         "id": "Membela pilihan yang tidak kamu buat"
        },
        "fix": {
         "en": "If the team decided, say so and explain what you would have done and why. Ownership of judgment, not of everything.",
         "id": "Jika tim yang memutuskan, katakan begitu dan jelaskan apa yang akan kamu lakukan dan mengapa. Kepemilikan atas penilaian, bukan atas segalanya."
        }
       },
       {
        "h": {
         "en": "Metrics without definitions",
         "id": "Metrik tanpa definisi"
        },
        "fix": {
         "en": "“We improved retention” invites “defined how?”. Know the numerator and denominator of every number you cite.",
         "id": "“Kami meningkatkan retensi” mengundang “didefinisikan bagaimana?”. Ketahui pembilang dan penyebut setiap angka yang kamu kutip."
        }
       },
       {
        "h": {
         "en": "Going deeper than asked",
         "id": "Lebih dalam dari yang diminta"
        },
        "fix": {
         "en": "Answer at the depth of the question, then offer: “I can go into the implementation if useful.”",
         "id": "Jawab sedalam pertanyaannya, lalu tawarkan: “Saya bisa masuk ke implementasi jika berguna.”"
        }
       }
      ]
     },
     "journey": {
      "before": {
       "label": {
        "en": "Module 5 · HR",
        "id": "Modul 5 · HR"
       },
       "desc": {
        "en": "Motivation and fit established; now method and teamwork are observed.",
        "id": "Motivasi dan kecocokan sudah terbukti; kini metode dan kerja tim yang diamati."
       }
      },
      "now": {
       "label": {
        "en": "Module 6 · method and Tuesday",
        "id": "Modul 6 · metode dan hari Selasa"
       },
       "desc": {
        "en": "The four-beat loop, the IDK protocol, the peer dynamic and defended decisions in your function.",
        "id": "Loop empat ketukan, protokol IDK, dinamika rekan, dan keputusan yang dipertahankan dalam fungsimu."
       }
      },
      "next": {
       "label": {
        "en": "Module 8 · the final round",
        "id": "Modul 8 · babak akhir"
       },
       "desc": {
        "en": "Executive psychology, strategic framing, pressure and the questions that carry signal.",
        "id": "Psikologi eksekutif, pembingkaian strategis, tekanan, dan pertanyaan yang membawa sinyal."
       },
       "lesson": "8.1"
      }
     },
     "migratedFrom": "the-rope:5.4"
    },
    {
     "n": "6.5",
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
     "takeawaysLead": {
      "en": "A case interview watches you think when you cannot know the answer. To be scored well on the four real dimensions, you can:",
      "id": "Wawancara kasus mengamati caramu berpikir ketika kamu tak mungkin tahu jawabannya. Untuk dinilai baik pada empat dimensi yang sesungguhnya, kamu bisa:"
     },
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
        "en": "<b>Interviewer-led:</b> the interviewer steers through prepared questions (“how would you structure this? now size this market; now read this exhibit”) — common in large consulting firms' first rounds. <b>Candidate-led:</b> you receive the problem and drive to a recommendation, asking for data as you go — the purest test of the Map 3 chain. <b>Written / group cases:</b> materials to digest and present under time, sometimes in the FGD format Module 10 trained. <b>Market sizing:</b> the estimation set-piece (“how many motorcycles are sold in Indonesia yearly?”) that can appear inside any format or alone. Beyond consulting: banks, tech companies, FMCG programmes and startup roles increasingly borrow case elements for analyst and product hiring.",
        "id": "<b>Dipandu pewawancara:</b> pewawancara mengarahkan lewat pertanyaan yang sudah disiapkan (“bagaimana kamu akan menstrukturkan ini? sekarang taksir ukuran pasarnya; sekarang baca peraga ini”) — lazim di ronde pertama firma konsultan besar. <b>Dipandu kandidat:</b> kamu menerima masalahnya dan mengemudikan diskusi sampai ke rekomendasi, sambil meminta data di sepanjang jalan — ujian paling murni untuk rantai Map Modul 7. <b>Kasus tertulis / kelompok:</b> materi yang harus dicerna dan dipresentasikan dalam batas waktu, kadang dalam format FGD yang dilatih di Modul 10. <b>Penaksiran ukuran pasar:</b> soal estimasi klasik (“berapa sepeda motor yang terjual di Indonesia setiap tahun?”) yang bisa muncul di dalam format mana pun atau berdiri sendiri. Di luar dunia konsultan: bank, perusahaan teknologi, program FMCG, dan posisi di startup makin sering meminjam unsur wawancara kasus untuk merekrut analis dan orang produk."
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
        "en": "Nobody expects industry expertise from a fresh graduate. The realistic bar: open with a structured approach within a minute; do percentage and multiplication arithmetic without drama; state assumptions out loud before using them; read an exhibit and extract its one message; close with a recommendation that follows from what was discussed, plus its main risk. That is Map Module 7 plus composure — all trainable. What fails candidates: memorised frameworks recited regardless of fit (“I will use the 4Ps” on a cost problem), silent long pauses instead of narrated thinking, and defending errors instead of correcting them.",
        "id": "Tidak ada yang mengharapkan keahlian industri dari lulusan baru. Standar yang realistis: membuka dengan pendekatan terstruktur dalam satu menit; mengerjakan hitungan persentase dan perkalian tanpa drama; menyebutkan asumsi dengan suara keras sebelum memakainya; membaca sebuah peraga dan menangkap satu pesannya; menutup dengan rekomendasi yang mengikuti apa yang sudah dibahas, plus risiko utamanya. Itu adalah Map Modul 7 ditambah ketenangan — semuanya bisa dilatih. Yang menggagalkan kandidat: kerangka hafalan yang dibacakan tanpa peduli cocok atau tidak (“saya akan memakai 4P” untuk masalah biaya), jeda panjang yang membisu alih-alih menarasikan jalan pikiran, dan membela kesalahan alih-alih mengoreksinya."
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
     "glossary": [
      {
       "term": {
        "en": "MECE",
        "id": "MECE"
       },
       "def": {
        "en": "Mutually exclusive, collectively exhaustive — the property of a structure whose branches do not overlap and together cover the whole problem; the first thing a case interviewer scores.",
        "id": "Mutually exclusive, collectively exhaustive — sifat sebuah struktur yang cabang-cabangnya tidak tumpang tindih dan bersama-sama mencakup seluruh masalah; hal pertama yang dinilai pewawancara kasus."
       }
      },
      {
       "term": {
        "en": "candidate-led case",
        "id": "kasus yang dipimpin kandidat"
       },
       "def": {
        "en": "A format in which you receive the problem and drive to a recommendation yourself, requesting data as you go — as opposed to interviewer-led cases that steer through prepared questions.",
        "id": "Format ketika kamu menerima masalah dan mengemudikannya sendiri hingga rekomendasi, meminta data sambil berjalan — berbeda dari kasus yang dipimpin pewawancara yang mengarahkan lewat pertanyaan yang sudah disiapkan."
       }
      }
     ],
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
     },
     "insights": {
      "lead": {
       "en": "What case interviewers are listening for.",
       "id": "Yang didengarkan pewawancara kasus."
      },
      "items": [
       {
        "h": {
         "en": "Structure before speed",
         "id": "Struktur sebelum kecepatan"
        },
        "body": {
         "en": "A candidate who takes thirty seconds to lay out a clear structure and then works through it steadily outscores one who jumps to a clever answer. The structure shows how you will handle problems they have not asked yet.",
         "id": "Kandidat yang meluangkan tiga puluh detik untuk menyusun struktur yang jelas lalu mengerjakannya dengan mantap mengalahkan yang langsung melompat ke jawaban cerdik. Struktur menunjukkan bagaimana kamu akan menangani masalah yang belum mereka tanyakan."
        }
       },
       {
        "h": {
         "en": "They want to be able to help you",
         "id": "Mereka ingin bisa membantumu"
        },
        "body": {
         "en": "Narrating your thinking lets the interviewer steer. Silent computation followed by a wrong number gives them nothing to work with.",
         "id": "Menarasikan pemikiranmu membuat pewawancara bisa mengarahkan. Perhitungan diam-diam yang diikuti angka salah tak memberi mereka apa pun untuk dikerjakan."
        }
       },
       {
        "h": {
         "en": "“So what?” is the whole test",
         "id": "“Lalu kenapa?” adalah seluruh tesnya"
        },
        "body": {
         "en": "Every number you produce should end with an implication for the client. Analysis without a recommendation is homework, not consulting.",
         "id": "Setiap angka yang kamu hasilkan harus berakhir dengan implikasi bagi klien. Analisis tanpa rekomendasi adalah pekerjaan rumah, bukan konsultasi."
        }
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Memorised frameworks recited as-is",
         "id": "Kerangka hafalan dibacakan apa adanya"
        },
        "fix": {
         "en": "Interviewers recognise the textbook tree instantly. Build a structure from first principles for this case, and name it in the client’s terms.",
         "id": "Pewawancara langsung mengenali pohon buku teks. Bangun struktur dari prinsip pertama untuk kasus ini, dan namai dengan istilah klien."
        }
       },
       {
        "h": {
         "en": "Asking for data you have not thought about",
         "id": "Meminta data yang belum kamu pikirkan"
        },
        "fix": {
         "en": "Say why you want a number before you ask. “To see if the decline is volume or price, could I see units and average price?”",
         "id": "Katakan mengapa kamu ingin angka itu sebelum bertanya. “Untuk melihat apakah penurunan ini soal volume atau harga, boleh saya lihat unit dan harga rata-rata?”"
        }
       },
       {
        "h": {
         "en": "Freezing when a number is wrong",
         "id": "Membeku saat angka salah"
        },
        "fix": {
         "en": "Being corrected is normal. “Thank you — let me redo that with the right base” and continue. Composure is scored.",
         "id": "Dikoreksi itu wajar. “Terima kasih — saya ulangi dengan basis yang benar” lalu lanjutkan. Ketenangan dinilai."
        }
       }
      ]
     },
     "migratedFrom": "the-pack:11.1"
    },
    {
     "n": "6.6",
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
     "takeawaysLead": {
      "en": "One preparation method covers every case: a small kit of structures, a sizing engine, and exhibit drills. To assemble it, you can:",
      "id": "Satu metode persiapan mencakup setiap kasus: perangkat kecil berisi struktur, mesin penaksir ukuran, dan latihan membaca peraga. Untuk menyusunnya, kamu bisa:"
     },
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
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: The three roots that generate most case trees — pick the root from the case's own words, then hang its specifics on the branches.",
       "id": "Peraga 1: Tiga akar yang menghasilkan sebagian besar pohon kasus — pilih akarnya dari kata-kata kasus itu sendiri, lalu gantungkan detailnya di cabang."
      },
      "title": {
       "en": "Root → Split → Prioritised branch → Reason",
       "id": "Akar → Pecah → Cabang prioritas → Alasan"
      },
      "items": [
       {
        "h": {
         "en": "Profit root",
         "id": "Akar laba"
        },
        "sub": {
         "en": "Profit = revenue − cost; revenue = price × volume; costs fixed / variable",
         "id": "Laba = pendapatan − biaya; pendapatan = harga × volume; biaya tetap / variabel"
        }
       },
       {
        "h": {
         "en": "Funnel root",
         "id": "Akar corong"
        },
        "sub": {
         "en": "Market → aware → try → buy → repeat — where must growth come from?",
         "id": "Pasar → sadar → coba → beli → ulang — dari mana pertumbuhan harus datang?"
        }
       },
       {
        "h": {
         "en": "Decision root",
         "id": "Akar keputusan"
        },
        "sub": {
         "en": "Stakeholders × criteria — who is affected, what each needs, what binds",
         "id": "Pemangku kepentingan × kriteria — siapa yang terdampak, apa kebutuhan masing-masing, apa yang mengikat"
        }
       },
       {
        "h": {
         "en": "The sentence",
         "id": "Kalimatnya"
        },
        "sub": {
         "en": "“I'd split this into revenue and cost, and start on volume — because you mentioned new competitors”",
         "id": "“Saya akan memecahnya menjadi pendapatan dan biaya, dan mulai dari volume — karena Anda menyebut pesaing baru”"
        }
       }
      ],
      "longdesc": {
       "en": "A four-step flow. Choose the root that matches the case — profit, funnel or decision; split it into its standard branches; prioritise one branch; and say the reason aloud. The final step is the one sentence that demonstrates the whole craft: root, split, prioritised branch, reason.",
       "id": "Alur empat langkah. Pilih akar yang cocok dengan kasus — laba, corong, atau keputusan; pecah menjadi cabang-cabang standarnya; prioritaskan satu cabang; dan ucapkan alasannya. Langkah terakhir adalah satu kalimat yang memperlihatkan seluruh keahlian: akar, pecahan, cabang prioritas, alasan."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "first-principles structure",
        "id": "struktur dari prinsip dasar"
       },
       "def": {
        "en": "A tree built live from the case's own words on one of three roots — profit, funnel, or stakeholders × criteria — rather than a memorised framework recited regardless of the problem.",
        "id": "Pohon yang dibangun langsung dari kata-kata kasus di atas salah satu dari tiga akar — laba, corong, atau pemangku kepentingan × kriteria — alih-alih kerangka hafalan yang dibacakan tanpa peduli masalahnya."
       }
      },
      {
       "term": {
        "en": "market-sizing engine",
        "id": "mesin penaksir pasar"
       },
       "def": {
        "en": "Population × applicable share × frequency × value, with every assumption said aloud — the decomposition that solves any sizing question.",
        "id": "Populasi × porsi yang berlaku × frekuensi × nilai, dengan setiap asumsi diucapkan — dekomposisi yang menyelesaikan soal penaksiran ukuran apa pun."
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
     ],
     "resources": {
      "items": [
       {
        "kind": "guide",
        "title": {
         "en": "First-principles structure kit",
         "id": "Perangkat struktur prinsip pertama"
        },
        "desc": {
         "en": "Three starting trees you adapt, never recite.",
         "id": "Tiga pohon awal yang kamu sesuaikan, bukan hafalkan."
        },
        "body": [
         {
          "en": "Profit problem: Profit = Revenue − Cost → Revenue = volume × price (by segment / channel) → Cost = fixed + variable (by driver). Ask: which branch moved, since when, versus competitors?",
          "id": "Masalah laba: Laba = Pendapatan − Biaya → Pendapatan = volume × harga (per segmen / kanal) → Biaya = tetap + variabel (per pemicu). Tanya: cabang mana yang bergerak, sejak kapan, dibanding pesaing?"
         },
         {
          "en": "Market entry: Is the market attractive (size, growth, margins, competition)? Can we win (capabilities, distribution, brand, cost)? How (build / partner / buy) and what does it take (investment, time, risks)?",
          "id": "Masuk pasar: Apakah pasarnya menarik (ukuran, pertumbuhan, margin, persaingan)? Bisakah kita menang (kapabilitas, distribusi, merek, biaya)? Bagaimana (bangun / bermitra / beli) dan apa yang dibutuhkan (investasi, waktu, risiko)?"
         },
         {
          "en": "Operations or growth: where is the bottleneck (demand, capacity, process, people)? What is the cost of it? What are three fixes, ranked by impact vs effort?",
          "id": "Operasi atau pertumbuhan: di mana hambatannya (permintaan, kapasitas, proses, orang)? Berapa biayanya? Apa tiga perbaikan, diurutkan berdasarkan dampak vs usaha?"
         },
         {
          "en": "Always finish: recommendation, two reasons, one risk, next step.",
          "id": "Selalu tutup dengan: rekomendasi, dua alasan, satu risiko, langkah berikutnya."
         }
        ]
       },
       {
        "kind": "worksheet",
        "title": {
         "en": "Market-sizing engine",
         "id": "Mesin penghitung ukuran pasar"
        },
        "desc": {
         "en": "Top-down and bottom-up, with a sanity check.",
         "id": "Atas-bawah dan bawah-atas, dengan pengecekan kewajaran."
        },
        "body": [
         {
          "en": "Top-down: population → relevant segment (%) → users (%) → frequency per year → units per use → price → market value",
          "id": "Atas-bawah: populasi → segmen relevan (%) → pengguna (%) → frekuensi per tahun → unit per pemakaian → harga → nilai pasar"
         },
         {
          "en": "Bottom-up: number of outlets or sellers → sales per outlet per day → days → price",
          "id": "Bawah-atas: jumlah gerai atau penjual → penjualan per gerai per hari → hari → harga"
         },
         {
          "en": "Memorise three round anchors you have verified yourself (national population, your metro area’s population, number of households) and say “roughly” every time you use one.",
          "id": "Hafalkan tiga angka jangkar bulat yang sudah kamu verifikasi sendiri (populasi nasional, populasi wilayah metropolitanmu, jumlah rumah tangga) dan katakan “kira-kira” setiap kali memakainya."
         },
         {
          "en": "Sanity check: does the answer imply a per-person or per-household figure that sounds plausible? If not, find the wrong assumption.",
          "id": "Pengecekan kewajaran: apakah jawabannya menyiratkan angka per orang atau per rumah tangga yang masuk akal? Jika tidak, cari asumsi yang salah."
         }
        ]
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Sizing without stating assumptions",
         "id": "Menghitung ukuran tanpa menyatakan asumsi"
        },
        "fix": {
         "en": "Every estimate is a chain of guesses. Say each guess aloud so the interviewer can accept it or correct it.",
         "id": "Setiap estimasi adalah rangkaian tebakan. Ucapkan setiap tebakan agar pewawancara bisa menerima atau mengoreksinya."
        }
       },
       {
        "h": {
         "en": "Reading the chart before reading the axes",
         "id": "Membaca grafik sebelum membaca sumbunya"
        },
        "fix": {
         "en": "Title, units, time period, footnotes — then the shape. Most exhibit errors are axis errors.",
         "id": "Judul, satuan, periode waktu, catatan kaki — baru bentuknya. Sebagian besar kesalahan peraga adalah kesalahan sumbu."
        }
       },
       {
        "h": {
         "en": "Practising cases alone by reading",
         "id": "Berlatih kasus sendirian dengan membaca"
        },
        "fix": {
         "en": "Cases are spoken. Practise aloud with a partner or into a recorder; reading solutions builds recognition, not performance.",
         "id": "Kasus itu diucapkan. Berlatihlah dengan suara bersama rekan atau ke perekam; membaca solusi membangun pengenalan, bukan performa."
        }
       }
      ]
     },
     "migratedFrom": "the-pack:11.2"
    },
    {
     "n": "6.7",
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
     "takeawaysLead": {
      "en": "Delivery decides borderline cases. To run the communication layer on top of the analysis, you can:",
      "id": "Cara penyampaian menentukan kasus-kasus yang di ambang batas. Untuk menjalankan lapisan komunikasi di atas analisis, kamu bisa:"
     },
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
     "diagram": {
      "type": "timeline",
      "exhibit": {
       "en": "Exhibit 1: The case rhythm — four phases with their time budgets; the discipline of keeping them is yours.",
       "id": "Peraga 1: Irama kasus — empat fase dengan anggaran waktunya; disiplin menjaganya ada padamu."
      },
      "title": {
       "en": "Clarify → Structure → Analyse → Synthesise",
       "id": "Perjelas → Susun → Analisis → Sintesis"
      },
      "items": [
       {
        "h": {
         "en": "Clarify · 1–2 min",
         "id": "Perjelas · 1–2 mnt"
        },
        "sub": {
         "en": "Restate the problem in one sentence; confirm the objective; ask what you need",
         "id": "Nyatakan ulang masalah dalam satu kalimat; pastikan tujuannya; tanyakan yang kamu butuhkan"
        },
        "icon": "eye"
       },
       {
        "h": {
         "en": "Structure · 1 min",
         "id": "Susun · 1 mnt"
        },
        "sub": {
         "en": "Present the tree, prioritise a branch, give the reason",
         "id": "Sajikan pohonnya, prioritaskan satu cabang, berikan alasannya"
        },
        "icon": "book"
       },
       {
        "h": {
         "en": "Analyse · the bulk",
         "id": "Analisis · porsi terbesar"
        },
        "sub": {
         "en": "Branch by branch; request data; arithmetic on paper with narrated checkpoints",
         "id": "Cabang demi cabang; minta data; aritmetika di kertas dengan titik periksa yang dinarasikan"
        },
        "icon": "gear"
       },
       {
        "h": {
         "en": "Synthesise · 2 min",
         "id": "Sintesis · 2 mnt"
        },
        "sub": {
         "en": "Recommendation, two reasons, main risk, first step",
         "id": "Rekomendasi, dua alasan, risiko utama, langkah pertama"
        },
        "icon": "flag"
       }
      ],
      "longdesc": {
       "en": "A four-phase timeline: one to two minutes clarifying the problem and objective; one minute presenting a structure with a prioritised branch and reason; the bulk of the time analysing branch by branch with narrated checkpoints; and a final two minutes for the answer-first synthesis.",
       "id": "Garis waktu empat fase: satu hingga dua menit memperjelas masalah dan tujuan; satu menit menyajikan struktur dengan cabang prioritas dan alasan; porsi waktu terbesar menganalisis cabang demi cabang dengan titik periksa yang dinarasikan; dan dua menit terakhir untuk sintesis jawaban-dulu."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "the guided tour",
        "id": "tur terpandu"
       },
       "def": {
        "en": "Narrated thinking that announces destinations — “I'm going to check whether the drop is market-wide or ours” — then works briefly and reports, avoiding both silence and stream of consciousness.",
        "id": "Penalaran yang dinarasikan dengan mengumumkan tujuannya — “Saya akan memeriksa apakah penurunan ini terjadi di seluruh pasar atau hanya kita” — lalu bekerja sebentar dan melapor, menghindari keheningan maupun aliran pikiran tanpa arah."
       }
      },
      {
       "term": {
        "en": "answer-first close",
        "id": "penutup jawaban-dulu"
       },
       "def": {
        "en": "The four-sentence synthesis: recommendation, two reasons, the main risk, the first step — delivered in the final two minutes, conclusion before evidence.",
        "id": "Sintesis empat kalimat: rekomendasi, dua alasan, risiko utama, langkah pertama — disampaikan di dua menit terakhir, kesimpulan sebelum bukti."
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
     ],
     "resources": {
      "items": [
       {
        "kind": "script",
        "title": {
         "en": "The four transitions",
         "id": "Empat transisi"
        },
        "desc": {
         "en": "Phrases for the moments that decide borderline cases.",
         "id": "Frasa untuk momen-momen yang menentukan kasus ambang."
        },
        "body": [
         {
          "en": "OPENING (after the prompt): “Let me make sure I have it: [restate in one sentence]. The objective is [X] by [when]. May I take a moment to structure?”",
          "id": "PEMBUKAAN (setelah soal): “Izinkan saya memastikan: [nyatakan ulang dalam satu kalimat]. Tujuannya adalah [X] pada [kapan]. Boleh saya ambil waktu sebentar untuk menyusun struktur?”"
         },
         {
          "en": "PRESENTING STRUCTURE: “I’d look at three areas. First … second … third … I’d start with [one] because [reason]. Does that fit?”",
          "id": "MEMAPARKAN STRUKTUR: “Saya akan melihat tiga area. Pertama … kedua … ketiga … Saya mulai dari [satu] karena [alasan]. Apakah itu sesuai?”"
         },
         {
          "en": "BEING WRONG: “Good catch — I used the wrong base. Redoing it: … which changes the conclusion to …”",
          "id": "SAAT SALAH: “Tangkapan bagus — saya memakai basis yang salah. Saya ulangi: … yang mengubah kesimpulannya menjadi …”"
         },
         {
          "en": "CLOSING: “My recommendation is [X]. Two reasons: … The main risk is …, which I’d test by … Next step: …”",
          "id": "PENUTUP: “Rekomendasi saya adalah [X]. Dua alasan: … Risiko utamanya …, yang akan saya uji dengan … Langkah berikutnya: …”"
         }
        ]
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Narrating every arithmetic step",
         "id": "Menarasikan setiap langkah aritmetika"
        },
        "fix": {
         "en": "Narrate the logic, not the multiplication. “Volume fell 20% while price held, so roughly a fifth of revenue” — then the number.",
         "id": "Narasikan logikanya, bukan perkaliannya. “Volume turun 20% sementara harga tetap, jadi kira-kira seperlima pendapatan” — lalu angkanya."
        }
       },
       {
        "h": {
         "en": "Hedging the recommendation",
         "id": "Mengaburkan rekomendasi"
        },
        "fix": {
         "en": "“It depends” is not an answer. Commit, give two reasons, name the risk, say what you would check next.",
         "id": "“Tergantung” bukan jawaban. Berkomitmen, beri dua alasan, sebut risikonya, katakan apa yang akan kamu periksa berikutnya."
        }
       },
       {
        "h": {
         "en": "Ignoring the interviewer’s hint",
         "id": "Mengabaikan petunjuk pewawancara"
        },
        "fix": {
         "en": "A prompt like “what about the competitors?” is a gift. Take it immediately and say thank you.",
         "id": "Petunjuk seperti “bagaimana dengan pesaing?” adalah hadiah. Ambil segera dan ucapkan terima kasih."
        }
       }
      ]
     },
     "migratedFrom": "the-pack:11.3"
    },
    {
     "n": "6.8",
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
     "takeawaysLead": {
      "en": "The gap between your move and the model answer is the curriculum. To make case practice a weekly habit, you can:",
      "id": "Jarak antara langkahmu dan jawaban model adalah kurikulumnya. Untuk menjadikan latihan kasus kebiasaan mingguan, kamu bisa:"
     },
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
     "diagram": {
      "type": "ring",
      "exhibit": {
       "en": "Exhibit 1: The practice loop — six cases through this loop move most candidates from panic to competence.",
       "id": "Peraga 1: Lingkaran latihan — enam kasus melalui lingkaran ini menggerakkan sebagian besar kandidat dari panik ke kompeten."
      },
      "title": {
       "en": "Attempt → Reveal → Compare → Log → Partner → Repeat",
       "id": "Coba → Ungkap → Bandingkan → Catat → Berpasangan → Ulangi"
      },
      "items": [
       {
        "h": {
         "en": "Attempt",
         "id": "Coba"
        },
        "sub": {
         "en": "25 minutes, on paper, narration spoken aloud",
         "id": "25 menit, di kertas, narasi diucapkan"
        }
       },
       {
        "h": {
         "en": "Reveal",
         "id": "Ungkap"
        },
        "sub": {
         "en": "One stage of the model answer at a time",
         "id": "Satu tahap jawaban model setiap kali"
        }
       },
       {
        "h": {
         "en": "Compare",
         "id": "Bandingkan"
        },
        "sub": {
         "en": "Where did your structure, numbers or close diverge — and why?",
         "id": "Di mana struktur, angka, atau penutupmu menyimpang — dan mengapa?"
        }
       },
       {
        "h": {
         "en": "Log",
         "id": "Catat"
        },
        "sub": {
         "en": "The four dimensions scored honestly; the miss pattern named",
         "id": "Empat dimensi dinilai jujur; pola kesalahan dinamai"
        }
       },
       {
        "h": {
         "en": "Partner",
         "id": "Berpasangan"
        },
        "sub": {
         "en": "A peer reads the next case script; you return the favour",
         "id": "Rekan membacakan naskah kasus berikutnya; kamu membalasnya"
        }
       },
       {
        "h": {
         "en": "Repeat",
         "id": "Ulangi"
        },
        "sub": {
         "en": "Weekly — track your fourth, fifth and sixth case",
         "id": "Mingguan — lacak kasus keempat, kelima, dan keenam"
        }
       }
      ],
      "longdesc": {
       "en": "A six-step ring: attempt the case for twenty-five minutes on paper, reveal the model answer one stage at a time, compare where you diverged, log the four dimensions and your miss pattern, practise the next case with a partner reading the script, and repeat weekly.",
       "id": "Cincin enam langkah: coba kasus selama dua puluh lima menit di kertas, ungkap jawaban model satu tahap demi satu tahap, bandingkan di mana kamu menyimpang, catat empat dimensi dan pola kesalahanmu, latih kasus berikutnya dengan rekan yang membacakan naskah, dan ulangi setiap minggu."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "staged model answer",
        "id": "jawaban model bertahap"
       },
       "def": {
        "en": "A debrief revealed one stage at a time — clarifiers, structure, numbers, close — opened only after you have committed your own move on paper.",
        "id": "Pembahasan yang diungkap satu tahap demi satu tahap — pertanyaan penjelas, struktur, angka, penutup — dibuka hanya setelah kamu menuliskan langkahmu sendiri di kertas."
       }
      },
      {
       "term": {
        "en": "case partner",
        "id": "rekan latihan kasus"
       },
       "def": {
        "en": "A peer who reads a case script and plays interviewer — giving you roughly 80% of the training value of a real case for the price of returning the favour.",
        "id": "Rekan yang membacakan naskah kasus dan berperan sebagai pewawancara — memberimu sekitar 80% nilai latihan dari kasus sungguhan dengan imbalan membalas jasa yang sama."
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
     ],
     "resources": {
      "items": [
       {
        "kind": "template",
        "title": {
         "en": "Peer case-practice protocol",
         "id": "Protokol latihan kasus bersama rekan"
        },
        "desc": {
         "en": "Forty-five minutes, two people, one case each. Weekly.",
         "id": "Empat puluh lima menit, dua orang, satu kasus masing-masing. Mingguan."
        },
        "body": [
         {
          "en": "0–20 min: A interviews B on one case; A holds the solution and gives data only when asked with a reason",
          "id": "0–20 mnt: A mewawancarai B pada satu kasus; A memegang solusinya dan memberi data hanya jika diminta dengan alasan"
         },
         {
          "en": "20–25 min: debrief with the scorecard — structure, drive, numbers, communication, recommendation (1–5 each)",
          "id": "20–25 mnt: debrief dengan kartu skor — struktur, dorongan, angka, komunikasi, rekomendasi (1–5 masing-masing)"
         },
         {
          "en": "25–45 min: swap roles",
          "id": "25–45 mnt: tukar peran"
         },
         {
          "en": "Log: one thing each will do differently next week; carry it into the next session",
          "id": "Catat: satu hal yang akan dilakukan berbeda minggu depan; bawa ke sesi berikutnya"
         }
        ]
       },
       {
        "kind": "checklist",
        "title": {
         "en": "Case scorecard",
         "id": "Kartu skor kasus"
        },
        "desc": {
         "en": "Score each other after every case.",
         "id": "Saling menilai setelah setiap kasus."
        },
        "body": [
         {
          "en": "Restated the problem and objective in one sentence",
          "id": "Menyatakan ulang masalah dan tujuan dalam satu kalimat"
         },
         {
          "en": "Structure was specific to this case, not a recited tree",
          "id": "Struktur spesifik untuk kasus ini, bukan pohon hafalan"
         },
         {
          "en": "Asked for data with a reason each time",
          "id": "Meminta data dengan alasan setiap kali"
         },
         {
          "en": "Numbers were rounded, narrated and sanity-checked",
          "id": "Angka dibulatkan, dinarasikan, dan dicek kewajarannya"
         },
         {
          "en": "Every analysis ended with a “so what”",
          "id": "Setiap analisis berakhir dengan “lalu kenapa”"
         },
         {
          "en": "Took corrections calmly and continued",
          "id": "Menerima koreksi dengan tenang dan melanjutkan"
         },
         {
          "en": "Closed with recommendation, reasons, risk, next step",
          "id": "Menutup dengan rekomendasi, alasan, risiko, langkah berikutnya"
         }
        ]
       }
      ]
     },
     "migratedFrom": "the-pack:11.4"
    }
   ],
   "hero": "../../assets/bg/gauntlet/gate-04-casestudy.jpg",
   "heroPos": "56% 22%"
  },
  {
   "num": 7,
   "phase": "perform",
   "title": {
    "en": "Group Assessments and Assessment Centres",
    "id": "Diskusi Kelompok dan Assessment Center"
   },
   "overview": {
    "en": "Leaderless group discussions and assessment-centre exercises are standard in Indonesian management-trainee, bank and BUMN selection, and they are scored on how you work with the other candidates, not on whether you win. This module — moved here from The Pack — shows how assessors score a group discussion, how to contribute well whatever your personality (roles, moves and phrases in Indonesian), and how to handle in-tray, role-play and presentation exercises.",
    "id": "Diskusi kelompok tanpa pemimpin dan latihan assessment center adalah standar dalam seleksi management trainee, bank, dan BUMN di Indonesia, dan dinilai dari caramu bekerja dengan kandidat lain, bukan apakah kamu menang. Modul ini — dipindahkan ke sini dari The Pack — menunjukkan cara asesor menilai diskusi kelompok, cara berkontribusi dengan baik apa pun kepribadianmu (peran, langkah, dan frasa dalam bahasa Indonesia), dan cara menangani latihan in-tray, role-play, dan presentasi."
   },
   "outcome": {
    "en": "By the end of this module you understand how LGD/FGD and assessment-centre exercises are scored, can contribute effectively in a group discussion regardless of personality, and can handle in-tray, role-play and presentation exercises.",
    "id": "Di akhir modul ini kamu memahami cara LGD/FGD dan latihan assessment center dinilai, bisa berkontribusi efektif dalam diskusi kelompok apa pun kepribadianmu, dan bisa menangani latihan in-tray, role-play, dan presentasi."
   },
   "kit": {
    "en": "Group-assessment role plan · in-tray method card",
    "id": "Rencana peran asesmen kelompok · kartu metode in-tray"
   },
   "lessons": [
    {
     "n": "7.1",
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
     "takeawaysLead": {
      "en": "In a group discussion the topic is a prop and the behaviours are the score. To play to the scoresheet, you can:",
      "id": "Dalam diskusi kelompok, topiknya hanyalah properti panggung dan perilakulah yang dinilai. Untuk bermain sesuai lembar penilaian, kamu bisa:"
     },
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
     "glossary": [
      {
       "term": {
        "en": "LGD",
        "id": "LGD"
       },
       "def": {
        "en": "Leaderless group discussion — no roles are assigned, so the structurer, includer and synthesiser seats are open, and taking one is the highest-scoring move available.",
        "id": "Diskusi kelompok tanpa pemimpin — tidak ada peran yang ditetapkan, sehingga kursi penyusun struktur, pengajak, dan penyintesis terbuka, dan mengambil salah satunya adalah langkah bernilai tertinggi yang tersedia."
       }
      },
      {
       "term": {
        "en": "quality event",
        "id": "peristiwa berkualitas"
       },
       "def": {
        "en": "A single scorable contribution an assessor tallies — a structure proposal, a named invitation, a synthesis — as opposed to minutes of airtime, which are not counted.",
        "id": "Satu kontribusi yang bisa dinilai dan dicatat penilai — usulan struktur, ajakan bernama, sintesis — berbeda dari menit-menit bicara, yang tidak dihitung."
       }
      }
     ],
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
     },
     "insights": {
      "lead": {
       "en": "What the assessor’s sheet actually contains.",
       "id": "Apa yang sebenarnya ada di lembar asesor."
      },
      "items": [
       {
        "h": {
         "en": "Four behaviours, not one winner",
         "id": "Empat perilaku, bukan satu pemenang"
        },
        "body": {
         "en": "Typical rubrics score contribution quality, listening and building on others, structure and time awareness, and influence without dominance. Several candidates can pass the same session.",
         "id": "Rubrik umum menilai kualitas kontribusi, mendengarkan dan membangun dari orang lain, struktur dan kesadaran waktu, serta pengaruh tanpa mendominasi. Beberapa kandidat bisa lolos dari sesi yang sama."
        }
       },
       {
        "h": {
         "en": "The loudest voice is often the first eliminated",
         "id": "Suara paling keras sering tereliminasi pertama"
        },
        "body": {
         "en": "Interrupting and monopolising score negatively on the collaboration line. Assessors are watching who makes the group better, not who talks most.",
         "id": "Menyela dan memonopoli mendapat nilai negatif pada baris kolaborasi. Asesor mengamati siapa yang membuat kelompok lebih baik, bukan siapa yang paling banyak bicara."
        }
       },
       {
        "h": {
         "en": "The summary is the highest-value minute",
         "id": "Rangkuman adalah menit paling bernilai"
        },
        "body": {
         "en": "Whoever cleanly summarises the group’s position and next steps in the final minutes demonstrates structure, listening and leadership at once. Prepare to be that person.",
         "id": "Siapa pun yang merangkum posisi kelompok dan langkah berikutnya dengan rapi di menit-menit akhir menunjukkan struktur, mendengarkan, dan kepemimpinan sekaligus. Bersiaplah menjadi orang itu."
        }
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Winning the argument",
         "id": "Memenangkan perdebatan"
        },
        "fix": {
         "en": "Nobody is scored on being right. Move the group toward a decision; concede small points visibly.",
         "id": "Tak ada yang dinilai karena benar. Gerakkan kelompok menuju keputusan; mengalah pada poin kecil secara terlihat."
        }
       },
       {
        "h": {
         "en": "Silence until you have the perfect point",
         "id": "Diam sampai punya poin sempurna"
        },
        "fix": {
         "en": "A candidate with no contribution in the first five minutes is hard to score at all. Enter early with structure: “Shall we agree the criteria first?”",
         "id": "Kandidat tanpa kontribusi di lima menit pertama sulit dinilai sama sekali. Masuk lebih awal dengan struktur: “Bagaimana kalau kita sepakati kriterianya dulu?”"
        }
       },
       {
        "h": {
         "en": "Speaking to the assessor",
         "id": "Berbicara kepada asesor"
        },
        "fix": {
         "en": "Eye contact and address go to the group. The assessor is furniture until the debrief.",
         "id": "Kontak mata dan sapaan ditujukan ke kelompok. Asesor adalah perabot sampai sesi debrief."
        }
       }
      ]
     },
     "migratedFrom": "the-pack:10.1"
    },
    {
     "n": "7.2",
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
     "takeawaysLead": {
      "en": "Preparation is installing moves you can execute under noise. To have them ready by Thursday, you can:",
      "id": "Persiapan adalah memasang langkah-langkah yang bisa kamu jalankan di tengah kebisingan. Agar siap pada hari Kamis, kamu bisa:"
     },
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
     "diagram": {
      "type": "quad",
      "exhibit": {
       "en": "Exhibit 1: The four contribution templates — each names a person or a number, and each works whatever you know about the topic.",
       "id": "Peraga 1: Empat templat kontribusi — masing-masing menyebut seseorang atau sebuah angka, dan masing-masing berhasil apa pun yang kamu tahu tentang topiknya."
      },
      "title": {
       "en": "Build · Bridge · Evidence · Invite",
       "id": "Bangun · Jembatani · Bukti · Ajak"
      },
      "items": [
       {
        "h": {
         "en": "Build",
         "id": "Bangun"
        },
        "sub": {
         "en": "“Adding to Rina's point about costs — logistics is 40% of them…”",
         "id": "“Menambahkan poin Rina soal biaya — logistik 40% darinya…”"
        }
       },
       {
        "h": {
         "en": "Bridge",
         "id": "Jembatani"
        },
        "sub": {
         "en": "“Dimas and Sari are closer than it sounds: both assume the budget is fixed…”",
         "id": "“Dimas dan Sari lebih dekat dari kedengarannya: keduanya berasumsi anggaran tetap…”"
        }
       },
       {
        "h": {
         "en": "Evidence",
         "id": "Bukti"
        },
        "sub": {
         "en": "“Two numbers settle this: revenue fell 12% while the market fell 3%…”",
         "id": "“Dua angka menyelesaikan ini: pendapatan turun 12% sementara pasar turun 3%…”"
        }
       },
       {
        "h": {
         "en": "Invite",
         "id": "Ajak"
        },
        "sub": {
         "en": "“Bayu, you've been reading the exhibit — what do the regional numbers say?”",
         "id": "“Bayu, kamu sudah membaca peraganya — apa kata angka per wilayah?”"
        }
       }
      ],
      "longdesc": {
       "en": "A two-by-two grid of the four contribution templates: build on a named colleague's point; bridge two positions by naming their shared assumption; bring evidence with two numbers from the case; and invite a named quiet member by referring to what they have been doing. Each template names a person or a number, which is what separates advancing from noise.",
       "id": "Kisi dua kali dua berisi empat templat kontribusi: bangun di atas poin rekan yang disebut namanya; jembatani dua posisi dengan menyebut asumsi bersama mereka; bawa bukti dengan dua angka dari kasus; dan ajak anggota pendiam yang disebut namanya dengan merujuk pada apa yang sedang ia kerjakan. Setiap templat menyebut seseorang atau sebuah angka, itulah yang membedakan kontribusi yang memajukan dari kebisingan."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "the two-minute opening",
        "id": "pembukaan dua menit"
       },
       "def": {
        "en": "The define–split–decide offer that works for any case: agree the problem, propose a time split, and fix how the group will decide — the move that lets one candidate own the discussion's structure.",
        "id": "Tawaran definisikan–bagi–putuskan yang berhasil untuk kasus apa pun: sepakati masalahnya, usulkan pembagian waktu, dan tetapkan cara kelompok memutuskan — langkah yang membuat satu kandidat memiliki struktur diskusi."
       }
      },
      {
       "term": {
        "en": "endgame protocol",
        "id": "protokol akhir"
       },
       "def": {
        "en": "At minus five minutes, switching the group from exploring to concluding: name the agreements, park the open question, and commit — groups are scored down for not concluding.",
        "id": "Pada lima menit terakhir, mengalihkan kelompok dari menjelajah ke menyimpulkan: sebutkan kesepakatan, tunda pertanyaan terbuka, dan berkomitmen — kelompok dinilai lebih rendah karena tidak menyimpulkan."
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
     "resources": {
      "items": [
       {
        "kind": "script",
        "title": {
         "en": "Contribution lines",
         "id": "Kalimat kontribusi"
        },
        "desc": {
         "en": "Short, reusable sentences for each moment of a group discussion.",
         "id": "Kalimat pendek yang bisa dipakai ulang untuk tiap momen diskusi kelompok."
        },
        "body": [
         {
          "en": "OPEN (first 2 minutes): “Before we jump to options, can we agree what a good answer needs to satisfy? I’d suggest three criteria: …”",
          "id": "BUKA (2 menit pertama): “Sebelum lompat ke opsi, bisa kita sepakati dulu apa yang harus dipenuhi jawaban yang baik? Saya usulkan tiga kriteria: …”"
         },
         {
          "en": "BUILD: “Building on [Name]’s point about cost — if we add the timeline, that option actually looks stronger because …”",
          "id": "BANGUN: “Melanjutkan poin [Nama] tentang biaya — kalau kita tambahkan garis waktu, opsi itu justru terlihat lebih kuat karena …”"
         },
         {
          "en": "INVITE: “[Name], you haven’t had a chance yet — what’s your read on the risk side?”",
          "id": "UNDANG: “[Nama], kamu belum sempat bicara — bagaimana pandanganmu di sisi risiko?”"
         },
         {
          "en": "REDIRECT: “We have eight minutes left. Can we park the definitions and decide between options A and B?”",
          "id": "ALIHKAN: “Sisa waktu delapan menit. Bisa kita tunda dulu soal definisi dan putuskan antara opsi A dan B?”"
         },
         {
          "en": "CONCEDE: “That’s fair — I was wrong about the scale. Given that, I’d go with …”",
          "id": "MENGALAH: “Itu masuk akal — saya keliru soal skalanya. Dengan begitu, saya pilih …”"
         },
         {
          "en": "SUMMARISE (last 3 minutes): “So we agree on X because of Y; the open question is Z, which we’d resolve by …”",
          "id": "RANGKUM (3 menit terakhir): “Jadi kita sepakat pada X karena Y; pertanyaan yang tersisa adalah Z, yang akan kita selesaikan dengan …”"
         }
        ]
       },
       {
        "kind": "template",
        "title": {
         "en": "Three opening frames",
         "id": "Tiga kerangka pembuka"
        },
        "desc": {
         "en": "Pick one in the first minute according to the case type.",
         "id": "Pilih satu di menit pertama sesuai tipe kasus."
        },
        "body": [
         {
          "en": "Decision case (choose between options): criteria → score options → risks → recommendation",
          "id": "Kasus keputusan (memilih antar opsi): kriteria → nilai opsi → risiko → rekomendasi"
         },
         {
          "en": "Problem case (something is wrong): define the problem → causes → options → quick wins vs long fixes",
          "id": "Kasus masalah (ada yang salah): definisikan masalah → penyebab → opsi → kemenangan cepat vs perbaikan jangka panjang"
         },
         {
          "en": "Ethics or policy case (should we?): stakeholders → principles → consequences → position with safeguards",
          "id": "Kasus etika atau kebijakan (haruskah kita?): pemangku kepentingan → prinsip → konsekuensi → posisi dengan pengaman"
         }
        ]
       },
       {
        "kind": "checklist",
        "title": {
         "en": "Self-score after any practice session",
         "id": "Nilai diri setelah sesi latihan"
        },
        "desc": {
         "en": "Score honestly; ask a peer to score you too.",
         "id": "Nilai dengan jujur; minta rekan menilaimu juga."
        },
        "body": [
         {
          "en": "I contributed in the first three minutes",
          "id": "Aku berkontribusi di tiga menit pertama"
         },
         {
          "en": "I built on someone else’s point by name at least twice",
          "id": "Aku membangun dari poin orang lain dengan menyebut nama setidaknya dua kali"
         },
         {
          "en": "I invited a quiet member in",
          "id": "Aku mengundang anggota yang pendiam"
         },
         {
          "en": "I proposed structure or criteria",
          "id": "Aku mengusulkan struktur atau kriteria"
         },
         {
          "en": "I tracked time aloud once",
          "id": "Aku menyebut waktu dengan lantang sekali"
         },
         {
          "en": "I conceded a point gracefully",
          "id": "Aku mengalah pada satu poin dengan anggun"
         },
         {
          "en": "I summarised or supported the summary",
          "id": "Aku merangkum atau mendukung rangkuman"
         },
         {
          "en": "I never interrupted mid-sentence",
          "id": "Aku tak pernah menyela di tengah kalimat"
         }
        ]
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Memorising a speech for the opening",
         "id": "Menghafal pidato untuk pembukaan"
        },
        "fix": {
         "en": "Openings that ignore what was just said read as rehearsed. Prepare a structure, then attach it to the live case.",
         "id": "Pembukaan yang mengabaikan apa yang baru saja dikatakan terbaca seperti hafalan. Siapkan struktur, lalu lekatkan ke kasus yang sedang berjalan."
        }
       },
       {
        "h": {
         "en": "One framework for every case",
         "id": "Satu kerangka untuk semua kasus"
        },
        "fix": {
         "en": "A cost-benefit frame on an ethics case looks tone-deaf. Carry three frames and pick in the first minute.",
         "id": "Kerangka biaya-manfaat pada kasus etika tampak tidak peka. Bawa tiga kerangka dan pilih di menit pertama."
        }
       },
       {
        "h": {
         "en": "Preparing content, not moves",
         "id": "Menyiapkan konten, bukan langkah"
        },
        "fix": {
         "en": "You cannot predict the topic. You can predict that you will need to open, build, redirect and summarise. Drill those.",
         "id": "Kamu tak bisa menebak topiknya. Kamu bisa menebak bahwa kamu perlu membuka, membangun, mengalihkan, dan merangkum. Latih itu."
        }
       }
      ]
     },
     "migratedFrom": "the-pack:10.2"
    },
    {
     "n": "7.3",
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
     "takeawaysLead": {
      "en": "Every decision point in a discussion has a highest-tally move, and social pressure shrinks your repertoire to what you rehearsed. To rehearse it, you can:",
      "id": "Setiap titik keputusan dalam diskusi punya langkah bernilai tertinggi, dan tekanan sosial menyusutkan repertoarmu menjadi hanya yang pernah kamu latih. Untuk melatihnya, kamu bisa:"
     },
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
     "diagram": {
      "type": "timeline",
      "exhibit": {
       "en": "Exhibit 1: The mock session's five decision points — and the move that scores at each.",
       "id": "Peraga 1: Lima titik keputusan dalam sesi simulasi — dan langkah yang mendapat nilai di masing-masing."
      },
      "title": {
       "en": "Minute 0 → 6 → 14 → 22 → 25",
       "id": "Menit 0 → 6 → 14 → 22 → 25"
      },
      "items": [
       {
        "h": {
         "en": "Minute 0 · Silence",
         "id": "Menit 0 · Keheningan"
        },
        "sub": {
         "en": "Offer the two-minute opening: define, split, decide",
         "id": "Tawarkan pembukaan dua menit: definisikan, bagi, putuskan"
        },
        "icon": "flag"
       },
       {
        "h": {
         "en": "Minute 6 · The dominator",
         "id": "Menit 6 · Sang dominator"
        },
        "sub": {
         "en": "A bridge or structure move that returns the floor — not a contest",
         "id": "Langkah jembatan atau struktur yang mengembalikan pembicaraan — bukan perebutan"
        },
        "icon": "gear"
       },
       {
        "h": {
         "en": "Minute 14 · Dismissed",
         "id": "Menit 14 · Ditepis"
        },
        "sub": {
         "en": "Re-anchor to the case's numbers; concede what is fair, keep what holds",
         "id": "Kembalikan ke angka kasus; akui yang wajar, pertahankan yang bertahan"
        },
        "icon": "target"
       },
       {
        "h": {
         "en": "Minute 22 · The quiet expert",
         "id": "Menit 22 · Ahli yang pendiam"
        },
        "sub": {
         "en": "A named invitation — the highest-tally move nobody takes",
         "id": "Ajakan bernama — langkah bernilai tertinggi yang tak seorang pun ambil"
        },
        "icon": "eye"
       },
       {
        "h": {
         "en": "Minute 25 · Land the plane",
         "id": "Menit 25 · Daratkan pesawat"
        },
        "sub": {
         "en": "Name the agreements, park the open question, commit",
         "id": "Sebutkan kesepakatan, tunda pertanyaan terbuka, berkomitmen"
        },
        "icon": "book"
       }
      ],
      "longdesc": {
       "en": "A five-point timeline of the mock session: at minute zero, break the silence with the two-minute opening; at minute six, handle the dominator with a bridge or structure move; at minute fourteen, re-anchor a dismissed idea to the case's numbers; at minute twenty-two, invite the quiet expert by name; at minute twenty-five, switch the group to concluding.",
       "id": "Garis waktu lima titik dari sesi simulasi: di menit nol, pecahkan keheningan dengan pembukaan dua menit; di menit enam, tangani sang dominator dengan langkah jembatan atau struktur; di menit empat belas, kembalikan gagasan yang ditepis ke angka kasus; di menit dua puluh dua, ajak ahli yang pendiam dengan menyebut namanya; di menit dua puluh lima, alihkan kelompok ke menyimpulkan."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "the dominator",
        "id": "sang dominator"
       },
       "def": {
        "en": "The candidate who holds the floor for minutes on one idea; the scoring response is a structure or bridge move that returns the floor to the group, not a contest for airtime.",
        "id": "Kandidat yang menguasai pembicaraan bermenit-menit untuk satu gagasan; respons yang mendapat nilai adalah langkah struktur atau jembatan yang mengembalikan pembicaraan ke kelompok, bukan berebut waktu bicara."
       }
      },
      {
       "term": {
        "en": "peer mock",
        "id": "simulasi bersama rekan"
       },
       "def": {
        "en": "A practice discussion with three to five peers, one case, and a designated tally-keeper scoring the six behaviours — three of these teach more than thirty articles.",
        "id": "Diskusi latihan dengan tiga hingga lima rekan, satu kasus, dan seorang pencatat yang menilai enam perilaku — tiga kali latihan ini mengajarkan lebih banyak daripada tiga puluh artikel."
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
     "migratedFrom": "the-pack:10.3"
    }
   ],
   "hero": "../../assets/bg/gauntlet/gate-04-casestudy.jpg",
   "heroPos": "56% 22%"
  },
  {
   "num": 8,
   "phase": "perform",
   "title": {
    "en": "The Final and Panel Interview",
    "id": "Wawancara Final dan Panel"
   },
   "overview": {
    "en": "The final round is shorter than you expect and judged by people who think in years: values, leadership potential, commitment, presence. This module prepares you for senior interviewers and multi-person panels, values and “big picture” questions, the questions you ask at every stage — a ladder that differs for HR, user, peers and the final panel — and a close that is respectful in the Indonesian register and still memorable.",
    "id": "Ronde final lebih singkat dari dugaanmu dan dinilai oleh orang yang berpikir dalam tahun: nilai, potensi kepemimpinan, komitmen, kehadiran. Modul ini menyiapkanmu untuk pewawancara senior dan panel beberapa orang, pertanyaan nilai dan “gambaran besar”, pertanyaan yang kamu ajukan di setiap tahap — tangga yang berbeda untuk HR, user, rekan, dan panel akhir — dan penutup yang hormat dalam register Indonesia dan tetap berkesan."
   },
   "outcome": {
    "en": "By the end of this module you can handle a senior or multi-person panel, answer values and leadership-potential questions, ask sharp stage-appropriate questions, and close the interview respectfully and memorably.",
    "id": "Di akhir modul ini kamu bisa menangani panel senior atau beberapa orang, menjawab pertanyaan nilai dan potensi kepemimpinan, mengajukan pertanyaan tajam yang sesuai tahap, dan menutup wawancara dengan hormat dan berkesan."
   },
   "kit": {
    "en": "Question ladder for each stage · respectful close",
    "id": "Tangga pertanyaan untuk tiap tahap · penutup yang hormat"
   },
   "lessons": [
    {
     "n": "8.1",
     "title": {
      "en": "Executive Interviewer Psychology",
      "id": "Psikologi Pewawancara Eksekutif"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Executives interview differently: shorter attention, higher abstraction, faster verdicts. They listen for judgment, ownership economics — is this person worth the total cost? — and trajectory. This lesson teaches the headline-first answer pattern and the ownership language the last room rewards.",
      "id": "Eksekutif mewawancarai dengan cara yang berbeda: rentang perhatian lebih pendek, tingkat abstraksi lebih tinggi, keputusan lebih cepat. Mereka menyimak pertimbangan, hitung-hitungan kepemilikan — apakah orang ini sepadan dengan total biayanya? — dan lintasan. Pelajaran ini mengajarkan pola jawaban yang mendahulukan intinya, dan bahasa rasa memiliki yang dihargai di ruangan terakhir."
     },
     "objectives": [
      {
       "en": "Answer headline-first, expanding only on request.",
       "id": "Menjawab dengan intinya lebih dulu, memperluas hanya bila diminta."
      },
      {
       "en": "Frame your work in terms of business consequences.",
       "id": "Membingkai pekerjaanmu dalam bahasa akibat bisnis."
      },
      {
       "en": "Show trajectory: where you are going, not only where you have been.",
       "id": "Menunjukkan lintasan: ke mana kamu menuju, bukan hanya dari mana kamu datang."
      }
     ],
     "takeawaysLead": {
      "en": "Executives buy headlines and hire for the role after this one. To answer at their altitude, you can:",
      "id": "Eksekutif membeli judul utama dan merekrut untuk peran setelah peran ini. Untuk menjawab di ketinggian mereka, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Executives buy headlines: outcome first, mechanics on request.",
       "id": "Eksekutif membeli intinya: hasil dulu, mekanismenya kalau diminta."
      },
      {
       "en": "Translate everything into revenue, cost, risk or capability — the four executive currencies.",
       "id": "Terjemahkan semuanya menjadi pendapatan, biaya, risiko, atau kemampuan — empat mata uang eksekutif."
      },
      {
       "en": "Trajectory talk is not ambition theatre; it is evidence you will still be valuable in year three.",
       "id": "Bicara soal lintasan bukan teater ambisi; itu bukti bahwa kamu masih akan bernilai di tahun ketiga."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "The attention economics of the last room",
        "id": "Ekonomi perhatian di ruangan terakhir"
       },
       "body": {
        "en": "A final-round executive may give you thirty minutes between two other meetings that matter more to their day. Long wind-ups lose them in the first minute. Headline first — result, scale, consequence — then let their questions choose the depth. Paradoxically, saying less earns the invitation to say more.",
        "id": "Eksekutif di ronde final mungkin memberimu tiga puluh menit di antara dua rapat lain yang lebih penting bagi hari mereka. Pembukaan yang panjang membuatmu kehilangan mereka di menit pertama. Inti dulu — hasil, skala, akibat — lalu biarkan pertanyaan mereka yang menentukan kedalamannya. Paradoksnya, bicara lebih sedikit justru membuka undangan untuk bicara lebih banyak."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "The four currencies",
        "id": "Empat mata uang"
       },
       "body": {
        "en": "Revenue made or protected. Cost removed. Risk reduced. Capability built. Every project you have ever done cashes into at least one. Before the final round, translate your three best stories into their currency: “the dashboard” becomes “visibility that cut stockout losses”; “the migration” becomes “removed our single point of failure”. Same truth, executive denomination.",
        "id": "Pendapatan yang dihasilkan atau dijaga. Biaya yang dihilangkan. Risiko yang dikurangi. Kemampuan yang dibangun. Setiap proyek yang pernah kamu kerjakan bisa ditukarkan ke setidaknya satu di antaranya. Sebelum ronde final, terjemahkan tiga cerita terbaikmu ke mata uang mereka: “dashboard itu” menjadi “visibilitas yang memangkas kerugian akibat stok kosong”; “migrasi itu” menjadi “menghilangkan satu-satunya titik kegagalan kami”. Kebenaran yang sama, dalam denominasi eksekutif."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "Trajectory: the year-three question",
        "id": "Lintasan: pertanyaan tahun ketiga"
       },
       "body": {
        "en": "Executives hire for the role after this one too. Show a direction: the capability you are deliberately building, and how this role compounds it. Not a title ambition — a capability arc. “I'm building the muscle of leading through others; this role's cross-team scope is exactly that gym” tells them year three of you is worth waiting for.",
        "id": "Eksekutif merekrut juga untuk posisi setelah posisi ini. Tunjukkan arah: kemampuan yang sengaja sedang kamu bangun, dan bagaimana posisi ini memperkuatnya. Bukan ambisi jabatan — melainkan busur kemampuan. “Saya sedang membangun otot untuk memimpin lewat orang lain; cakupan lintas tim di posisi ini persis tempat latihannya” memberi tahu mereka bahwa dirimu di tahun ketiga layak ditunggu."
       },
       "icon": "target"
      }
     ],
     "diagram": {
      "type": "quad",
      "title": {
       "en": "The four executive currencies",
       "id": "Empat mata uang eksekutif"
      },
      "items": [
       {
        "h": {
         "en": "Revenue",
         "id": "Pendapatan"
        },
        "sub": {
         "en": "Made or protected",
         "id": "Dihasilkan atau dijaga"
        }
       },
       {
        "h": {
         "en": "Cost",
         "id": "Biaya"
        },
        "sub": {
         "en": "Removed or avoided",
         "id": "Dihilangkan atau dihindari"
        }
       },
       {
        "h": {
         "en": "Risk",
         "id": "Risiko"
        },
        "sub": {
         "en": "Reduced or contained",
         "id": "Dikurangi atau dikendalikan"
        }
       },
       {
        "h": {
         "en": "Capability",
         "id": "Kemampuan"
        },
        "sub": {
         "en": "Built and kept",
         "id": "Dibangun dan dipertahankan"
        }
       }
      ],
      "note": {
       "en": "Every project you have done cashes into at least one. Translate your three best stories before the final round.",
       "id": "Setiap proyek yang pernah kamu kerjakan bisa ditukarkan ke setidaknya satu di antaranya. Terjemahkan tiga cerita terbaikmu sebelum ronde final."
      },
      "exhibit": {
       "en": "Exhibit 1: The four executive currencies",
       "id": "Peraga 1: Empat mata uang eksekutif"
      },
      "longdesc": {
       "en": "Diagram of The four executive currencies. It presents, in order: Revenue — Made or protected; Cost — Removed or avoided; Risk — Reduced or contained; Capability — Built and kept.",
       "id": "Diagram empat mata uang eksekutif. Menyajikan, secara berurutan: Pendapatan — dihasilkan atau dijaga; Biaya — dihilangkan atau dihindari; Risiko — dikurangi atau dikendalikan; Kemampuan — dibangun dan dipertahankan."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "headline-first",
        "id": "judul utama lebih dulu"
       },
       "def": {
        "en": "Opening any answer to an executive with the result, its scale and its consequence — mechanics only on request — because their attention is shortest and their verdict fastest.",
        "id": "Membuka jawaban apa pun kepada eksekutif dengan hasil, skalanya, dan akibatnya — mekanismenya hanya bila diminta — karena perhatian mereka paling singkat dan vonisnya paling cepat."
       }
      },
      {
       "term": {
        "en": "the four currencies",
        "id": "empat mata uang"
       },
       "def": {
        "en": "Revenue made or protected, cost removed, risk reduced, capability built — the only units an executive room converts a story into.",
        "id": "Pendapatan yang dihasilkan atau dilindungi, biaya yang dihilangkan, risiko yang dikurangi, kemampuan yang dibangun — satu-satunya satuan yang dipakai ruangan eksekutif untuk mengonversi sebuah cerita."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "The same project, two altitudes",
        "id": "Proyek yang sama, dua ketinggian"
       },
       "q": {
        "en": "“Tell me about your biggest project.” (final round)",
        "id": "“Ceritakan proyek terbesar Anda.” (ronde final)"
       },
       "weak": {
        "en": "It started in March when we got the requirements, then we set up the database, then we built the API, then the frontend, then we tested it, and then we launched in October after some delays.",
        "id": "Proyeknya dimulai bulan Maret waktu kami menerima kebutuhannya, lalu kami menyiapkan database, lalu membangun API, lalu frontend, lalu kami uji, dan akhirnya rilis bulan Oktober setelah beberapa kali tertunda."
       },
       "strong": {
        "en": "We cut order-processing cost by 18% in six months — that project. The two decisions that mattered: killing a legacy integration everyone was afraid to touch, and phasing the rollout by region so risk stayed contained. Happy to go into either.",
        "id": "Kami memangkas biaya pemrosesan pesanan 18% dalam enam bulan — itu proyeknya. Dua keputusan yang menentukan: mematikan integrasi lama yang semua orang takut menyentuhnya, dan merilis bertahap per wilayah supaya risikonya tetap terkendali. Dengan senang hati saya perdalam salah satunya."
       },
       "why": {
        "en": "Executives buy consequences first. The strong version leads with the number, offers the decisions, and hands them control of the depth.",
        "id": "Eksekutif membeli akibatnya lebih dulu. Versi yang kuat membuka dengan angka, menawarkan keputusan-keputusannya, dan menyerahkan kendali atas kedalaman kepada mereka."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "An executive asks about your biggest project. Your first sentence should be:",
        "id": "Seorang eksekutif bertanya tentang proyek terbesarmu. Kalimat pertamamu sebaiknya:"
       },
       "options": [
        {
         "en": "The full context so they understand the situation",
         "id": "Konteks lengkap supaya mereka paham situasinya"
        },
        {
         "en": "The team structure and your reporting line",
         "id": "Struktur tim dan kepada siapa kamu melapor"
        },
        {
         "en": "The outcome and what it meant for the business",
         "id": "Hasilnya, dan apa artinya bagi bisnis"
        }
       ],
       "correct": 2,
       "why": {
        "en": "Correct — “we cut fulfilment cost 18% in six months; happy to unpack how” is the executive dialect. Detail follows demand.",
        "id": "Benar — “kami memangkas biaya fulfilment 18% dalam enam bulan; dengan senang hati saya uraikan caranya” adalah dialek eksekutif. Detail mengikuti permintaan."
       }
      }
     ],
     "tryit": {
      "qid": "cl06",
      "label": {
       "en": "Compress your case to two sentences",
       "id": "Padatkan argumenmu menjadi dua kalimat"
      },
      "desc": {
       "en": "The executive summary of you — need-match plus expected result. Then stop.",
       "id": "Ringkasan eksekutif tentang dirimu — kecocokan dengan kebutuhan mereka plus hasil yang bisa diharapkan. Lalu berhenti."
      }
     },
     "scenario": {
      "icon": "flag",
      "img": "../../assets/for-enterprise-image.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat dalam Sorotan"
      },
      "body": [
       {
        "en": "Rani's final round is with a country manager who gives her twenty-five minutes between board meetings. Her prepared chronology of the warehouse project would take six. Instead she opens: “We cut fulfilment cost eighteen percent in six months — and the two decisions that mattered were killing a legacy integration and phasing rollout by region. Where would you like me to go deeper?” The executive picks one, they spend twenty minutes in real conversation, and Rani leaves having been interviewed like a peer.",
        "id": "Ronde final Rani adalah dengan seorang country manager yang memberinya dua puluh lima menit di sela rapat direksi. Kronologi proyek gudang yang sudah ia siapkan butuh enam menit. Alih-alih itu, ia membuka: “Kami memangkas biaya fulfilment delapan belas persen dalam enam bulan — dan dua keputusan yang menentukan adalah mematikan integrasi lama dan merilis bertahap per wilayah. Bagian mana yang ingin Bapak perdalam?” Sang eksekutif memilih satu, mereka menghabiskan dua puluh menit dalam percakapan yang sungguhan, dan Rani pulang setelah diwawancarai layaknya rekan sejawat."
       }
      ]
     },
     "insights": {
      "lead": {
       "en": "How executives decide in thirty minutes.",
       "id": "Bagaimana eksekutif memutuskan dalam tiga puluh menit."
      },
      "items": [
       {
        "h": {
         "en": "They are pricing you",
         "id": "Mereka menaksir nilaimu"
        },
        "body": {
         "en": "Total cost — salary, management time, risk — against expected contribution. Stories about owning outcomes without supervision lower the perceived cost.",
         "id": "Biaya total — gaji, waktu manajemen, risiko — dibandingkan kontribusi yang diharapkan. Cerita tentang memiliki hasil tanpa pengawasan menurunkan biaya yang dipersepsikan."
        }
       },
       {
        "h": {
         "en": "Altitude is tested in the first answer",
         "id": "Ketinggian diuji di jawaban pertama"
        },
        "body": {
         "en": "If you answer “tell me about your work” with task detail, they conclude you cannot see the business. Lead with the problem and the impact; the detail is available on request.",
         "id": "Jika kamu menjawab “ceritakan pekerjaanmu” dengan detail tugas, mereka menyimpulkan kamu tak bisa melihat bisnis. Pimpin dengan masalah dan dampak; detail tersedia jika diminta."
        }
       },
       {
        "h": {
         "en": "They remember one thing",
         "id": "Mereka mengingat satu hal"
        },
        "body": {
         "en": "Decide before the room what the one thing is — a judgment call you made, a view on their business — and make sure it is said clearly in the first ten minutes.",
         "id": "Putuskan sebelum masuk ruangan apa satu hal itu — keputusan yang kamu buat, pandangan tentang bisnis mereka — dan pastikan diucapkan dengan jelas di sepuluh menit pertama."
        }
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Deference instead of a view",
         "id": "Kepatuhan alih-alih pandangan"
        },
        "fix": {
         "en": "Executives hire people who will tell them something. Have a considered opinion about the business and hold it with humility.",
         "id": "Eksekutif merekrut orang yang akan mengatakan sesuatu kepada mereka. Miliki pendapat yang matang tentang bisnis dan pegang dengan rendah hati."
        }
       },
       {
        "h": {
         "en": "Long context",
         "id": "Konteks panjang"
        },
        "fix": {
         "en": "Executives interrupt. Give the headline first; add context only if asked.",
         "id": "Eksekutif menyela. Berikan judul utamanya dulu; tambahkan konteks hanya jika diminta."
        }
       },
       {
        "h": {
         "en": "Reading brevity as disapproval",
         "id": "Membaca keringkasan sebagai ketidaksetujuan"
        },
        "fix": {
         "en": "Short questions and few nods are the style, not the verdict. Stay at altitude and keep landing points.",
         "id": "Pertanyaan pendek dan sedikit anggukan adalah gaya, bukan putusan. Tetap di ketinggian dan terus daratkan poin."
        }
       }
      ]
     },
     "migratedFrom": "the-rope:6.1"
    },
    {
     "n": "8.2",
     "title": {
      "en": "Strategic-Level Questions and Framing",
      "id": "Pertanyaan Level Strategis dan Cara Membingkainya"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "“Where should we take this product?” “What would you change about our business?” Strategic questions in finals are not requests for a consulting deck — they test whether you can reason about the company from the outside with humility and structure. This lesson gives the framing pattern.",
      "id": "“Ke mana produk ini sebaiknya kita bawa?” “Apa yang akan Anda ubah dari bisnis kami?” Pertanyaan strategis di ronde final bukan permintaan untuk membuat dek konsultan — pertanyaan itu menguji apakah kamu bisa bernalar tentang perusahaan dari luar, dengan rendah hati dan terstruktur. Pelajaran ini memberimu pola pembingkaiannya."
     },
     "objectives": [
      {
       "en": "Structure a strategic answer: observation → options → recommendation → humility.",
       "id": "Menyusun jawaban strategis: observasi → pilihan → rekomendasi → kerendahan hati."
      },
      {
       "en": "Ground strategy answers in public, verifiable observations.",
       "id": "Mendasarkan jawaban strategis pada observasi publik yang bisa diverifikasi."
      },
      {
       "en": "Disagree with a company decision respectfully when invited to.",
       "id": "Menyatakan ketidaksetujuan terhadap keputusan perusahaan dengan hormat, ketika memang diundang untuk itu."
      }
     ],
     "takeawaysLead": {
      "en": "Strategic questions test whether you can reason about the company from outside, with humility and structure. To frame an answer that earns its opinion, you can:",
      "id": "Pertanyaan strategis menguji apakah kamu bisa bernalar tentang perusahaan dari luar, dengan kerendahan hati dan struktur. Untuk membingkai jawaban yang layak berpendapat, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Observation first: earn the right to an opinion by showing you did the reading.",
       "id": "Observasi dulu: dapatkan hak untuk beropini dengan menunjukkan bahwa kamu sudah membaca."
      },
      {
       "en": "Offer options before a recommendation — strategy is choosing, and choosing needs choices.",
       "id": "Tawarkan pilihan sebelum rekomendasi — strategi adalah memilih, dan memilih butuh pilihan."
      },
      {
       "en": "End with calibrated humility: “from the outside” is a phrase that buys credibility, not weakness.",
       "id": "Tutup dengan kerendahan hati yang terukur: “dari luar” adalah frasa yang membeli kredibilitas, bukan kelemahan."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "The framing pattern",
        "id": "Pola pembingkaiannya"
       },
       "body": {
        "en": "Observation: “Using the product, I noticed onboarding takes four screens before value appears.” Options: “You could shorten it, delay account creation, or show value first.” Recommendation with reasons: “I'd test value-first — competitors converted me that way.” Humility: “though you'll have data I can't see from outside.” Four beats, two minutes, senior sound.",
        "id": "Observasi: “Waktu memakai produknya, saya perhatikan onboarding butuh empat layar sebelum nilainya muncul.” Pilihan: “Bisa dipersingkat, pembuatan akun ditunda, atau nilainya ditunjukkan lebih dulu.” Rekomendasi dengan alasan: “Saya akan menguji opsi nilai-lebih-dulu — pesaing berhasil meyakinkan saya dengan cara itu.” Kerendahan hati: “meskipun Anda pasti punya data yang tidak terlihat dari luar.” Empat ketukan, dua menit, terdengar senior."
       }
      },
      {
       "h": {
        "en": "Doing the reading",
        "id": "Mengerjakan PR-nya"
       },
       "body": {
        "en": "Strategic credibility is bought before the interview: use the product, read the annual report or public interviews, know the two or three visible strategic bets. You need one genuine observation per bet — not a full analysis. The candidate who says “I noticed you launched X; my read is you're playing for Y” has already separated from the field.",
        "id": "Kredibilitas strategis dibeli sebelum wawancara: pakai produknya, baca laporan tahunan atau wawancara publik mereka, kenali dua atau tiga taruhan strategis yang terlihat. Kamu butuh satu observasi yang tulus untuk setiap taruhan — bukan analisis lengkap. Kandidat yang berkata “saya lihat Anda meluncurkan X; bacaan saya, Anda sedang bermain untuk Y” sudah memisahkan diri dari kerumunan."
       }
      },
      {
       "h": {
        "en": "Disagreeing when invited",
        "id": "Tidak setuju, ketika diundang"
       },
       "body": {
        "en": "Sometimes the executive states a position and watches: will you fold, flatter, or think? Disagree the professional way — acknowledge the reasoning, add the consideration you would weigh, propose how to test the difference. You are demonstrating what disagreeing with you in a meeting will feel like. Make it feel like progress.",
        "id": "Kadang eksekutif menyatakan sebuah posisi, lalu mengamati: apakah kamu akan mengalah, menjilat, atau berpikir? Sampaikan ketidaksetujuan dengan cara yang profesional — akui penalarannya, tambahkan pertimbangan yang akan kamu timbang, usulkan cara menguji perbedaannya. Kamu sedang memperagakan seperti apa rasanya berbeda pendapat denganmu di dalam rapat. Buat rasanya seperti kemajuan."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "Strategic answers, framed",
       "id": "Jawaban strategis, dibingkai"
      },
      "items": [
       {
        "h": {
         "en": "Observation",
         "id": "Observasi"
        },
        "sub": {
         "en": "Something true you noticed — proof of homework",
         "id": "Hal yang benar yang kamu perhatikan — bukti kamu sudah riset"
        }
       },
       {
        "h": {
         "en": "Options",
         "id": "Pilihan"
        },
        "sub": {
         "en": "Two or three real paths",
         "id": "Dua atau tiga jalur yang nyata"
        }
       },
       {
        "h": {
         "en": "Recommendation",
         "id": "Rekomendasi"
        },
        "sub": {
         "en": "One choice, with reasons",
         "id": "Satu pilihan, dengan alasan"
        }
       },
       {
        "h": {
         "en": "Humility",
         "id": "Kerendahan hati"
        },
        "sub": {
         "en": "“…though you'll have data I can't see”",
         "id": "“…meskipun Anda punya data yang tidak terlihat dari luar”"
        }
       }
      ],
      "note": {
       "en": "Four beats, two minutes, senior sound. Boldness without observation is noise.",
       "id": "Empat ketukan, dua menit, terdengar senior. Keberanian tanpa observasi hanyalah derau."
      },
      "exhibit": {
       "en": "Exhibit 1: Strategic answers, framed",
       "id": "Peraga 1: Jawaban strategis, dibingkai"
      },
      "longdesc": {
       "en": "Diagram of Strategic answers, framed. It presents, in order: Observation — Something true you noticed — proof of homework; Options — Two or three real paths; Recommendation — One choice, with reasons; Humility — “…though you'll have data I can't see”.",
       "id": "Diagram jawaban strategis, dibingkai. Menyajikan, secara berurutan: Observasi — hal yang benar yang kamu perhatikan, bukti kamu sudah riset; Pilihan — dua atau tiga jalur yang nyata; Rekomendasi — satu pilihan, dengan alasan; Kerendahan hati — “…meskipun Anda punya data yang tidak terlihat dari luar”."
      }
     },
     "tryit": {
      "qid": "cs03",
      "label": {
       "en": "Frame a market-entry answer",
       "id": "Bingkai jawaban tentang masuk pasar"
      },
      "desc": {
       "en": "Structure the launch decision out loud — criteria before answer.",
       "id": "Susun keputusan peluncurannya dengan suara keras — kriteria dulu, baru jawaban."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "onboarding",
        "id": "onboarding"
       },
       "def": {
        "en": "The structured first weeks of a new role — learning systems, people and the real process.",
        "id": "Minggu-minggu pertama yang terstruktur di posisi baru — mempelajari sistem, orang-orang, dan proses yang sesungguhnya."
       }
      },
      {
       "term": {
        "en": "observation–options–recommendation",
        "id": "observasi–opsi–rekomendasi"
       },
       "def": {
        "en": "The framing pattern for strategic questions: one genuine observation from doing the reading, two or three options, then a recommendation with its reason and a calibrated “from the outside”.",
        "id": "Pola pembingkaian untuk pertanyaan strategis: satu observasi tulen dari membaca, dua atau tiga opsi, lalu rekomendasi beserta alasannya dan “dari sudut pandang luar” yang terkalibrasi."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Asked “what would you change about our product?”, you should open with:",
        "id": "Ditanya “apa yang akan Anda ubah dari produk kami?”, kamu sebaiknya membuka dengan:"
       },
       "options": [
        {
         "en": "A specific observation from actually using or studying the product",
         "id": "Observasi spesifik dari benar-benar memakai atau mempelajari produknya"
        },
        {
         "en": "A disclaimer that you cannot possibly know",
         "id": "Penafian bahwa kamu tidak mungkin tahu"
        },
        {
         "en": "Your boldest idea, delivered with total confidence",
         "id": "Ide paling beranimu, disampaikan dengan keyakinan penuh"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — evidence of homework earns the opinion. Boldness without observation is noise; disclaimers without content are worse.",
        "id": "Benar — bukti bahwa kamu sudah riset membeli hak untuk beropini. Keberanian tanpa observasi adalah derau; penafian tanpa isi lebih buruk lagi."
       }
      }
     ],
     "resources": {
      "items": [
       {
        "kind": "guide",
        "title": {
         "en": "Strategic-answer frame",
         "id": "Kerangka jawaban strategis"
        },
        "desc": {
         "en": "For “what would you change?”, “where should we take this?”, “what worries you about our business?”.",
         "id": "Untuk “apa yang akan kamu ubah?”, “ke mana kita harus membawa ini?”, “apa yang mengkhawatirkanmu tentang bisnis kami?”."
        },
        "body": [
         {
          "en": "1. Customer first (1 sentence): who they are and the job they hire this product or company to do.",
          "id": "1. Pelanggan dulu (1 kalimat): siapa mereka dan pekerjaan yang mereka percayakan pada produk atau perusahaan ini."
         },
         {
          "en": "2. One observation (verified): something you saw in the product, the market or the numbers.",
          "id": "2. Satu pengamatan (terverifikasi): sesuatu yang kamu lihat di produk, pasar, atau angka."
         },
         {
          "en": "3. One move: what you would do, in plain words.",
          "id": "3. Satu langkah: apa yang akan kamu lakukan, dengan kata-kata sederhana."
         },
         {
          "en": "4. The cost: what it takes and what you would stop doing.",
          "id": "4. Biayanya: apa yang dibutuhkan dan apa yang akan kamu hentikan."
         },
         {
          "en": "5. Humility close: “That’s from the outside — I’d want to know [one thing] before I was sure.”",
          "id": "5. Penutup rendah hati: “Itu dari luar — saya ingin tahu [satu hal] sebelum yakin.”"
         }
        ]
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Presenting a consulting deck",
         "id": "Menyajikan dek konsultan"
        },
        "fix": {
         "en": "They want to see reasoning from the customer’s seat, not a framework. Start with who the customer is and what they struggle with.",
         "id": "Mereka ingin melihat penalaran dari kursi pelanggan, bukan kerangka. Mulai dari siapa pelanggannya dan apa kesulitannya."
        }
       },
       {
        "h": {
         "en": "Criticising without cost",
         "id": "Mengkritik tanpa biaya"
        },
        "fix": {
         "en": "“I would change X” must come with what it costs and what you would stop doing to fund it.",
         "id": "“Saya akan mengubah X” harus disertai biayanya dan apa yang akan kamu hentikan untuk mendanainya."
        }
       },
       {
        "h": {
         "en": "Knowing nothing about last quarter",
         "id": "Tidak tahu apa pun tentang kuartal lalu"
        },
        "fix": {
         "en": "Read the latest public statement, launch or announcement. Strategic questions assume you did.",
         "id": "Baca pernyataan publik, peluncuran, atau pengumuman terbaru. Pertanyaan strategis mengasumsikan kamu sudah membacanya."
        }
       }
      ]
     },
     "migratedFrom": "the-rope:6.2"
    },
    {
     "n": "8.3",
     "title": {
      "en": "Handling Stress-Test and Skeptical Interviewers",
      "id": "Menghadapi Uji Tekanan dan Pewawancara yang Skeptis"
     },
     "kind": "interactive",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Some finals include deliberate pressure: interrupted answers, challenged claims, “I'm not convinced.” The test is not the content — it is your composure and your relationship to pushback. This lesson installs the curious-not-defensive response and drills the three most common stress moves.",
      "id": "Sebagian ronde final memuat tekanan yang disengaja: jawaban dipotong, klaim ditantang, “saya belum yakin.” Yang diuji bukan isinya — melainkan ketenanganmu dan caramu berhubungan dengan tekanan balik. Pelajaran ini memasang respons “ingin tahu, bukan defensif” dan melatih tiga gerakan tekanan yang paling umum."
     },
     "objectives": [
      {
       "en": "Recognise deliberate stress-testing versus genuine disagreement.",
       "id": "Membedakan uji tekanan yang disengaja dari ketidaksetujuan yang sungguhan."
      },
      {
       "en": "Respond to challenges with curiosity instead of defence or collapse.",
       "id": "Merespons tantangan dengan rasa ingin tahu, bukan dengan pembelaan diri atau menyerah."
      },
      {
       "en": "Hold a position under pressure while staying genuinely open.",
       "id": "Mempertahankan posisi di bawah tekanan sambil tetap terbuka dengan tulus."
      }
     ],
     "takeawaysLead": {
      "en": "A stress-test scores your composure, not your comeback. To stay curious rather than defensive under pushback, you can:",
      "id": "Uji tekanan menilai ketenanganmu, bukan balasanmu. Untuk tetap ingin tahu alih-alih bertahan saat ditekan, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "The stress-test scores your composure, not your comeback.",
       "id": "Uji tekanan menilai ketenanganmu, bukan balasan tajammu."
      },
      {
       "en": "Curiosity is the counter: “what makes you read it differently?” disarms almost everything.",
       "id": "Rasa ingin tahu adalah penawarnya: “apa yang membuat Anda membacanya berbeda?” melucuti hampir segalanya."
      },
      {
       "en": "Neither instant fold nor blind digging-in — update with reasons or hold with reasons.",
       "id": "Bukan langsung mengalah, bukan pula ngotot membabi buta — perbarui pendapatmu dengan alasan, atau pertahankan dengan alasan."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "Why they do it",
        "id": "Mengapa mereka melakukannya"
       },
       "body": {
        "en": "Roles that face clients, boards or crises need people who stay operational under challenge. A deliberate stress-test is a cheap simulation of that. Recognising it as simulation is half the victory: the challenge is a prop, your physiology is the exam. Slow your speech ten percent and the room reads composure.",
        "id": "Posisi yang berhadapan dengan klien, dewan direksi, atau krisis membutuhkan orang yang tetap berfungsi saat ditantang. Uji tekanan yang disengaja adalah simulasi murah dari situasi itu. Mengenalinya sebagai simulasi sudah separuh kemenangan: tantangannya hanya properti panggung, fisiologimulah ujiannya. Perlambat bicaramu sepuluh persen, dan ruangan akan membaca ketenangan."
       }
      },
      {
       "h": {
        "en": "The curious counter",
        "id": "Penawar bernama rasa ingin tahu"
       },
       "body": {
        "en": "Defence escalates; collapse disqualifies; curiosity converts. “Interesting — which part reads as overstated to you?” does three things: buys composure time, extracts the real objection, and models how you handle challenge at work. Then answer the specific objection with specific evidence, and check: “does that address it?”",
        "id": "Membela diri memanaskan suasana; menyerah menggugurkanmu; rasa ingin tahu membalikkan keadaan. “Menarik — bagian mana yang menurut Anda terasa berlebihan?” melakukan tiga hal sekaligus: membeli waktu untuk menenangkan diri, mengeluarkan keberatan yang sebenarnya, dan memperagakan cara kamu menghadapi tantangan di tempat kerja. Lalu jawab keberatan spesifik itu dengan bukti spesifik, dan pastikan: “apakah itu sudah menjawabnya?”"
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: The stress-test response — recognise the simulation, get curious, then update or hold with reasons.",
       "id": "Peraga 1: Respons uji tekanan — kenali simulasinya, jadilah ingin tahu, lalu perbarui atau pertahankan dengan alasan."
      },
      "title": {
       "en": "Recognise → Curious counter → Extract the objection → Update or hold — with reasons",
       "id": "Kenali → Balasan ingin tahu → Gali keberatan → Perbarui atau pertahankan — dengan alasan"
      },
      "items": [
       {
        "h": {
         "en": "Recognise",
         "id": "Kenali"
        },
        "sub": {
         "en": "A deliberate simulation of pressure — half the victory is naming it",
         "id": "Simulasi tekanan yang disengaja — separuh kemenangan adalah menyadarinya"
        }
       },
       {
        "h": {
         "en": "Curious counter",
         "id": "Balasan ingin tahu"
        },
        "sub": {
         "en": "“Interesting — which part reads as overstated to you?”",
         "id": "“Menarik — bagian mana yang menurut Anda berlebihan?”"
        }
       },
       {
        "h": {
         "en": "Extract the objection",
         "id": "Gali keberatan"
        },
        "sub": {
         "en": "The real concern surfaces; composure time is bought",
         "id": "Kekhawatiran sebenarnya muncul; waktu untuk tenang terbeli"
        }
       },
       {
        "h": {
         "en": "Update or hold",
         "id": "Perbarui atau pertahankan"
        },
        "sub": {
         "en": "Concede with reasons, or stand with evidence — never fold, never dig in blindly",
         "id": "Akui dengan alasan, atau bertahan dengan bukti — jangan menyerah, jangan bersikeras membabi buta"
        }
       }
      ],
      "note": {
       "en": "What fails: instant fold, heat, and blind digging-in. What scores: composure and a visible relationship to pushback.",
       "id": "Yang gagal: langsung menyerah, emosi panas, dan bersikeras membabi buta. Yang dinilai: ketenangan dan sikap yang terlihat terhadap tekanan."
      },
      "longdesc": {
       "en": "A four-step flow for a skeptical or interrupting interviewer: recognise the pressure as a simulation, answer with a curious counter-question, let the real objection surface, and then either update your position with reasons or hold it with evidence. The note lists the failing responses: folding, heat, and blind digging-in.",
       "id": "Alur empat langkah menghadapi pewawancara yang skeptis atau menyela: kenali tekanan sebagai simulasi, jawab dengan pertanyaan balik yang ingin tahu, biarkan keberatan sebenarnya muncul, lalu perbarui posisimu dengan alasan atau pertahankan dengan bukti. Catatannya menyebut respons yang gagal: menyerah, emosi panas, dan bersikeras membabi buta."
      }
     },
     "steps": [
      {
       "h": {
        "en": "Drill 1 · The interruption",
        "id": "Latihan 1 · Dipotong di tengah jalan"
       },
       "body": {
        "en": "Mid-story, the interviewer cuts in: “Skip to the end — what was the result?” Practise the pivot sentence you would use, out loud.",
        "id": "Di tengah cerita, pewawancara memotong: “Langsung ke akhirnya saja — apa hasilnya?” Latih kalimat peralihan yang akan kamu pakai, dengan suara keras."
       },
       "debrief": {
        "en": "Right move: give the result instantly, cleanly, without visible offence — “Result: 30% faster onboarding. The two decisions that got us there, if useful: …” Interruptions test flexibility; treat them as navigation, not disrespect.",
        "id": "Langkah yang tepat: berikan hasilnya seketika, bersih, tanpa terlihat tersinggung — “Hasilnya: onboarding 30% lebih cepat. Dua keputusan yang membawa kami ke sana, kalau berguna: …” Interupsi menguji kelenturan; perlakukan sebagai navigasi, bukan penghinaan."
       }
      },
      {
       "h": {
        "en": "Drill 2 · The challenged claim",
        "id": "Latihan 2 · Klaim yang ditantang"
       },
       "body": {
        "en": "“Anyone could have done that project.” Draft your level response using the curious counter, then the evidence.",
        "id": "“Siapa pun bisa mengerjakan proyek itu.” Susun respons tenangmu dengan penawar rasa ingin tahu, lalu buktinya."
       },
       "debrief": {
        "en": "Model: “Fair challenge. The part that wasn't obvious: three teams had tried and stalled on the data access problem. What unlocked it was the agreement I negotiated with legal — that piece was mine.” Specific non-obviousness, owned quietly. No heat required.",
        "id": "Contoh: “Tantangan yang wajar. Bagian yang tidak terlihat dari luar: tiga tim sudah mencoba dan macet di masalah akses data. Yang membukanya adalah kesepakatan yang saya negosiasikan dengan tim legal — bagian itu milik saya.” Hal yang tidak jelas dari luar, disebut secara spesifik, diakui dengan tenang. Tidak perlu memanas."
       }
      },
      {
       "h": {
        "en": "Drill 3 · The flat “not convinced”",
        "id": "Latihan 3 · “Belum yakin” yang datar"
       },
       "body": {
        "en": "You finish your positioning and the interviewer says only: “I'm not convinced you're ready for this level.” Write your first two sentences.",
        "id": "Kamu baru menutup positioning-mu, dan pewawancara hanya berkata: “Saya belum yakin Anda siap untuk level ini.” Tulis dua kalimat pertamamu."
       },
       "debrief": {
        "en": "Two-sentence shape: “That's a fair thing to test — which dimension concerns you most?” then meet the named dimension with your strongest specific evidence. If they refuse to name one, offer your own honest read of your readiness edge and your plan for it. Composure, specificity, no begging.",
        "id": "Bentuk dua kalimatnya: “Itu wajar untuk diuji — dimensi mana yang paling Anda khawatirkan?” lalu jawab dimensi yang disebut dengan bukti spesifik terkuatmu. Kalau mereka menolak menyebutkan satu pun, tawarkan bacaan jujurmu sendiri tentang batas kesiapanmu dan rencanamu untuk mengejarnya. Tenang, spesifik, tanpa memohon."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "“I'm not convinced.” — fold vs curiosity",
        "id": "“Saya belum yakin.” — mengalah vs ingin tahu"
       },
       "weak": {
        "en": "Oh… okay, yes, you're probably right, maybe it wasn't that impressive. I just meant it was important to me personally.",
        "id": "Oh… baik, ya, Bapak mungkin benar, mungkin memang tidak sehebat itu. Maksud saya, proyek itu penting bagi saya pribadi."
       },
       "strong": {
        "en": "Fair challenge — which part reads as overstated to you? … The piece that wasn't visible from outside: three teams had tried and stalled on data access. What unlocked it was the agreement I negotiated with legal. That part was mine. Does that address it?",
        "id": "Tantangan yang wajar — bagian mana yang menurut Bapak berlebihan? … Bagian yang tidak terlihat dari luar: tiga tim sudah mencoba dan macet di akses data. Yang membukanya adalah kesepakatan yang saya negosiasikan dengan tim legal. Bagian itu milik saya. Apakah itu sudah menjawabnya?"
       },
       "why": {
        "en": "Folding fails the composure test; volume fails it differently. Curiosity extracts the objection, then meets it with specific, quiet evidence.",
        "id": "Mengalah gagal dalam ujian ketenangan; menaikkan volume gagal dengan cara yang lain. Rasa ingin tahu mengeluarkan keberatannya, lalu menjawabnya dengan bukti spesifik yang disampaikan dengan tenang."
       }
      }
     ],
     "listen": [
      {
       "label": {
        "en": "The curious counter, in a level voice",
        "id": "Penawar rasa ingin tahu, dengan nada suara yang tenang"
       },
       "text": {
        "en": "That's interesting — which part reads as overstated to you? I'd rather address the exact concern than repeat myself.",
        "id": "Menarik — bagian mana yang menurut Anda berlebihan? Saya lebih suka menjawab kekhawatiran yang persis daripada mengulang-ulang."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "The interviewer says flatly: “I don't think that project was as impressive as you're presenting it.” Best response:",
        "id": "Pewawancara berkata datar: “Menurut saya proyek itu tidak sehebat yang Anda gambarkan.” Respons terbaik:"
       },
       "options": [
        {
         "en": "Restate the achievement more forcefully",
         "id": "Menyatakan ulang pencapaiannya dengan lebih keras"
        },
        {
         "en": "Stay level: ask what specifically reads as weak, then address exactly that with facts",
         "id": "Tetap tenang: tanyakan bagian mana persisnya yang terbaca lemah, lalu jawab persis itu dengan fakta"
        },
        {
         "en": "Concede immediately to avoid conflict",
         "id": "Langsung mengalah demi menghindari konflik"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Correct — composure plus curiosity plus targeted evidence. Folding fails the test; volume fails it differently.",
        "id": "Benar — ketenangan plus rasa ingin tahu plus bukti yang tepat sasaran. Mengalah gagal dalam ujian ini; menaikkan volume gagal dengan cara yang lain."
       }
      }
     ],
     "tryit": {
      "qid": "dc16",
      "label": {
       "en": "Survive the sixty-second close",
       "id": "Bertahan di penutup enam puluh detik"
      },
      "desc": {
       "en": "“You have one minute. Convince me.” — slow down, land three beats, stop early.",
       "id": "“Anda punya satu menit. Yakinkan saya.” — perlambat, daratkan tiga ketukan, berhenti lebih awal."
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Folding at the first pushback",
         "id": "Mengalah pada tekanan pertama"
        },
        "fix": {
         "en": "Stay level and get curious: “which part reads as overstated to you?” — then answer that, specifically.",
         "id": "Tetap tenang dan jadilah ingin tahu: “bagian mana yang menurut Anda berlebihan?” — lalu jawab persis itu, secara spesifik."
        }
       },
       {
        "h": {
         "en": "Raising your volume with your defence",
         "id": "Menaikkan volume bersama pembelaan diri"
        },
        "fix": {
         "en": "Slow your speech ten percent instead. The challenge is a prop; your physiology is the exam.",
         "id": "Justru perlambat bicaramu sepuluh persen. Tantangannya hanya properti panggung; fisiologimulah ujiannya."
        }
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      },
      {
       "term": {
        "en": "the curious counter",
        "id": "balasan penuh rasa ingin tahu"
       },
       "def": {
        "en": "“Interesting — which part reads as overstated to you?” — the response that buys composure time, extracts the real objection and models how you handle challenge at work.",
        "id": "“Menarik — bagian mana yang menurut Anda terdengar berlebihan?” — respons yang membeli waktu untuk tenang, menggali keberatan sebenarnya, dan memperlihatkan caramu menghadapi tantangan di tempat kerja."
       }
      }
     ],
     "resources": {
      "items": [
       {
        "kind": "script",
        "title": {
         "en": "Composure lines under pressure",
         "id": "Kalimat ketenangan di bawah tekanan"
        },
        "desc": {
         "en": "For interruptions, challenged claims and “I’m not convinced”.",
         "id": "Untuk penyelaan, klaim yang ditantang, dan “saya tidak yakin”."
        },
        "body": [
         {
          "en": "INTERRUPTED: stop immediately; “Sure —” and answer the new question. Return to the old one only if they ask.",
          "id": "DISELA: berhenti segera; “Tentu —” dan jawab pertanyaan baru. Kembali ke yang lama hanya jika mereka meminta."
         },
         {
          "en": "CLAIM CHALLENGED: “Fair challenge. The evidence I have is [specific]. Where it is weaker is [honest limit].”",
          "id": "KLAIM DITANTANG: “Tantangan yang adil. Bukti yang saya punya adalah [spesifik]. Yang lebih lemah adalah [batas yang jujur].”"
         },
         {
          "en": "“I’M NOT CONVINCED”: “What would convince you? … Then let me address that directly: …”",
          "id": "“SAYA TIDAK YAKIN”: “Apa yang akan meyakinkan Anda? … Kalau begitu izinkan saya menjawab itu langsung: …”"
         },
         {
          "en": "WHEN THEY ARE RIGHT: “You’re right — I hadn’t weighed that. Given it, I’d revise to …”",
          "id": "SAAT MEREKA BENAR: “Anda benar — saya belum mempertimbangkannya. Dengan itu, saya merevisi menjadi …”"
         },
         {
          "en": "WHEN THEY ARE WRONG: “I see it differently, and here is why: [one piece of evidence]. I may be missing context though.”",
          "id": "SAAT MEREKA SALAH: “Saya melihatnya berbeda, dan ini alasannya: [satu bukti]. Meski begitu, mungkin saya kurang konteks.”"
         }
        ]
       }
      ]
     },
     "migratedFrom": "the-rope:6.3"
    },
    {
     "n": "8.4",
     "title": {
      "en": "The Power of Asking Great Questions",
      "id": "Kekuatan Mengajukan Pertanyaan yang Hebat"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "At senior rounds, your questions carry as much signal as your answers. A question portfolio — standard-of-excellence, reality-check, growth, and strategy questions, matched to the stage — closes every interview with the impression of someone who thinks in systems and chooses employers deliberately.",
      "id": "Di ronde senior, pertanyaanmu membawa sinyal sebesar jawabanmu. Sebuah portofolio pertanyaan — tentang standar keunggulan, cek realitas, pertumbuhan, dan strategi, disesuaikan dengan tahapnya — menutup setiap wawancara dengan kesan seseorang yang berpikir dalam sistem dan memilih tempat bekerja dengan sengaja."
     },
     "objectives": [
      {
       "en": "Build a question portfolio across the four archetypes.",
       "id": "Membangun portofolio pertanyaan dari empat jenis."
      },
      {
       "en": "Match question depth to the interviewer's seniority.",
       "id": "Menyesuaikan kedalaman pertanyaan dengan level pewawancara."
      },
      {
       "en": "Use their answers as real data for your own decision.",
       "id": "Memakai jawaban mereka sebagai data sungguhan untuk keputusanmu sendiri."
      }
     ],
     "takeawaysLead": {
      "en": "At senior rounds your questions carry as much signal as your answers. To close with a portfolio rather than a blank, you can:",
      "id": "Di babak senior, pertanyaanmu membawa sinyal sebesar jawabanmu. Untuk menutup dengan portofolio alih-alih kekosongan, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Questions are scored: they reveal what you think about when no one assigns you a task.",
       "id": "Pertanyaan itu dinilai: ia mengungkap apa yang kamu pikirkan ketika tidak ada yang memberimu tugas."
      },
      {
       "en": "Ask executives about direction and standards; ask peers about Tuesdays.",
       "id": "Tanyakan arah dan standar kepada eksekutif; tanyakan hari Selasa kepada calon rekan setim."
      },
      {
       "en": "Their hesitations answering are data about the company — collect it.",
       "id": "Keraguan mereka saat menjawab adalah data tentang perusahaan — kumpulkan."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "The four archetypes",
        "id": "Empat jenisnya"
       },
       "body": {
        "en": "Standard: “what separates good from great in this role?” Reality: “what is the hardest part nobody writes in the JD?” Growth: “how have people grown out of this role?” Strategy, for finals: “what has to be true in a year for this hire to be a great decision?” Two per interview, chosen for the room. Logistics questions go to the recruiter, never to the executive.",
        "id": "Standar: “apa yang membedakan yang baik dari yang hebat di posisi ini?” Realitas: “apa bagian tersulit yang tidak pernah ditulis di deskripsi lowongan?” Pertumbuhan: “bagaimana orang-orang sebelumnya bertumbuh dari posisi ini?” Strategi, untuk ronde final: “apa yang harus terjadi dalam setahun supaya perekrutan ini menjadi keputusan yang hebat?” Dua pertanyaan per wawancara, dipilih sesuai ruangannya. Pertanyaan logistik ditujukan ke perekrut, jangan pernah ke eksekutif."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "Listening to the answers",
        "id": "Mendengarkan jawabannya"
       },
       "body": {
        "en": "Great questions are wasted on candidates who do not listen. If “what does success look like” produces vagueness, the role is undefined — price that risk. If “hardest part” produces a suspicious “nothing really”, add scepticism. You are running your own evaluation; their answers, and their comfort answering, are your rubric.",
        "id": "Pertanyaan yang hebat sia-sia di tangan kandidat yang tidak mendengarkan. Kalau “seperti apa sukses itu” dijawab dengan kabur, posisinya belum terdefinisi — perhitungkan risiko itu. Kalau “bagian tersulit” dijawab dengan “tidak ada, sih” yang mencurigakan, tambahkan skeptisisme. Kamu sedang menjalankan evaluasimu sendiri; jawaban mereka, dan seberapa nyaman mereka menjawab, adalah rubrikmu."
       },
       "icon": "book"
      },
      {
       "icon": "book",
       "h": {
        "en": "Matching depth to the room",
        "id": "Menyesuaikan kedalaman dengan ruangan"
       },
       "body": {
        "en": "The same portfolio is drawn from differently in each room. Peers get the reality and growth questions at ground level — what a normal week looks like, what breaks first when it gets busy, how the last person in this seat grew — because peers answer those honestly and their hesitations are data. Managers get the standard question in its sharpest form: what excellent looks like at six months, and how they will know. Executives get strategy and direction — what has to be true in a year for this hire to look like a great decision, which bet the company is making that this role serves — and nothing operational; asking an executive about leave policy spends your two questions on the recruiter's job. Depth also means length: one sentence of question, then silence. Candidates who preface a question with a paragraph of context are answering their own question before it is asked, and the room notices.",
        "id": "Portofolio yang sama diambil secara berbeda di tiap ruangan. Rekan sejawat mendapat pertanyaan realitas dan pertumbuhan di tingkat lapangan — seperti apa minggu yang normal, apa yang rusak lebih dulu saat sibuk, bagaimana orang terakhir di kursi ini bertumbuh — karena rekan menjawabnya dengan jujur dan keraguan mereka adalah data. Manajer mendapat pertanyaan standar dalam bentuk paling tajam: seperti apa hasil yang luar biasa di bulan keenam, dan bagaimana mereka akan mengetahuinya. Eksekutif mendapat strategi dan arah — apa yang harus terjadi dalam setahun agar perekrutan ini tampak sebagai keputusan hebat, taruhan mana yang sedang diambil perusahaan yang dilayani peran ini — dan tak ada yang operasional; bertanya kepada eksekutif soal kebijakan cuti menghabiskan dua pertanyaanmu untuk pekerjaan perekrut. Kedalaman juga berarti panjang: satu kalimat pertanyaan, lalu diam. Kandidat yang mengawali pertanyaan dengan satu paragraf konteks sedang menjawab pertanyaannya sendiri sebelum diajukan, dan ruangan menyadarinya."
       }
      }
     ],
     "diagram": {
      "type": "quad",
      "title": {
       "en": "The question portfolio",
       "id": "Portofolio pertanyaan"
      },
      "items": [
       {
        "h": {
         "en": "Standard",
         "id": "Standar"
        },
        "sub": {
         "en": "What separates good from great here?",
         "id": "Apa yang membedakan yang baik dari yang hebat di sini?"
        }
       },
       {
        "h": {
         "en": "Reality",
         "id": "Realitas"
        },
        "sub": {
         "en": "The hardest part the JD doesn't say?",
         "id": "Bagian tersulit yang tidak ditulis di deskripsi lowongan?"
        }
       },
       {
        "h": {
         "en": "Growth",
         "id": "Pertumbuhan"
        },
        "sub": {
         "en": "How have people grown out of this role?",
         "id": "Bagaimana orang-orang bertumbuh dari posisi ini?"
        }
       },
       {
        "h": {
         "en": "Strategy",
         "id": "Strategi"
        },
        "sub": {
         "en": "What must be true in a year for this hire to be great?",
         "id": "Apa yang harus terjadi dalam setahun supaya perekrutan ini hebat?"
        }
       }
      ],
      "note": {
       "en": "Two per interview, chosen for the room. Logistics questions go to the recruiter — never to the executive.",
       "id": "Dua per wawancara, dipilih sesuai ruangannya. Pertanyaan logistik ditujukan ke perekrut — jangan pernah ke eksekutif."
      },
      "exhibit": {
       "en": "Exhibit 1: The question portfolio",
       "id": "Peraga 1: Portofolio pertanyaan"
      },
      "longdesc": {
       "en": "Diagram of The question portfolio. It presents, in order: Standard — What separates good from great here?; Reality — The hardest part the JD doesn't say?; Growth — How have people grown out of this role?; Strategy — What must be true in a year for this hire to be great?.",
       "id": "Diagram portofolio pertanyaan. Menyajikan, secara berurutan: Standar — apa yang membedakan yang baik dari yang hebat di sini?; Realitas — bagian tersulit yang tidak ditulis di deskripsi lowongan?; Pertumbuhan — bagaimana orang-orang bertumbuh dari posisi ini?; Strategi — apa yang harus terjadi dalam setahun supaya perekrutan ini hebat?"
      }
     },
     "tryit": {
      "qid": "cl05",
      "label": {
       "en": "Ask for what you need — well",
       "id": "Minta apa yang kamu butuhkan — dengan cara yang baik"
      },
      "desc": {
       "en": "“What would you need from us in your first month?” — real asks, not “nothing”.",
       "id": "“Apa yang Anda butuhkan dari kami di bulan pertama?” — permintaan yang sungguhan, bukan “tidak ada”."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "rubric",
        "id": "rubrik"
       },
       "def": {
        "en": "The written standard an answer is scored against — criteria plus what each level of quality looks like.",
        "id": "Standar tertulis yang dipakai untuk menilai sebuah jawaban — kriterianya, plus seperti apa wujud setiap tingkat kualitas."
       }
      },
      {
       "term": {
        "en": "question portfolio",
        "id": "portofolio pertanyaan"
       },
       "def": {
        "en": "Prepared questions across four archetypes — standard, reality, growth, strategy — with two chosen per interview for the seniority of the room, and logistics kept for the recruiter.",
        "id": "Pertanyaan yang disiapkan dalam empat arketipe — standar, realitas, pertumbuhan, strategi — dua dipilih per wawancara sesuai senioritas ruangan, dengan urusan logistik disimpan untuk perekrut."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "The strongest final-round question of these is:",
        "id": "Pertanyaan ronde final yang paling kuat di antara ini adalah:"
       },
       "options": [
        {
         "en": "“How many vacation days do I get?”",
         "id": "“Berapa hari cuti yang saya dapat?”"
        },
        {
         "en": "“Can you describe the company culture?”",
         "id": "“Bisa ceritakan budaya perusahaannya?”"
        },
        {
         "en": "“What has to be true in a year for this hire to have been a great decision?”",
         "id": "“Apa yang harus terjadi dalam setahun supaya perekrutan ini terbukti sebagai keputusan yang hebat?”"
        }
       ],
       "correct": 2,
       "why": {
        "en": "Correct — it makes the executive define success concretely, shows outcome thinking, and gives you the real job description.",
        "id": "Benar — pertanyaan itu membuat eksekutif mendefinisikan sukses secara konkret, memperlihatkan cara berpikir yang berorientasi hasil, dan memberimu deskripsi pekerjaan yang sebenarnya."
       }
      }
     ],
     "resources": {
      "items": [
       {
        "kind": "template",
        "title": {
         "en": "Question portfolio by stage",
         "id": "Portofolio pertanyaan per tahap"
        },
        "desc": {
         "en": "Pick two per round; adapt the wording to what you heard.",
         "id": "Pilih dua per babak; sesuaikan kata-katanya dengan yang kamu dengar."
        },
        "body": [
         {
          "en": "HR: “How does the team define success in the first year?” · “What made the last person in this role succeed or struggle?”",
          "id": "HR: “Bagaimana tim mendefinisikan keberhasilan di tahun pertama?” · “Apa yang membuat orang terakhir di peran ini berhasil atau kesulitan?”"
         },
         {
          "en": "MANAGER: “What is the hardest problem on your plate this quarter?” · “How do you like to be kept informed?”",
          "id": "MANAJER: “Apa masalah tersulit di meja Anda kuartal ini?” · “Bagaimana Anda ingin tetap diberi informasi?”"
         },
         {
          "en": "PEER: “What does a normal Tuesday look like?” · “What would you fix here if you could?”",
          "id": "REKAN: “Seperti apa hari Selasa yang normal?” · “Apa yang akan Anda perbaiki di sini jika bisa?”"
         },
         {
          "en": "EXECUTIVE: “What has to be true in two years for this bet to have worked?” · “What do you worry about that the market does not see yet?”",
          "id": "EKSEKUTIF: “Apa yang harus terjadi dalam dua tahun agar taruhan ini berhasil?” · “Apa yang Anda khawatirkan yang belum dilihat pasar?”"
         },
         {
          "en": "ANY ROUND: “Is there anything about my background that gives you pause? I’d rather address it now.”",
          "id": "BABAK MANA PUN: “Adakah hal dari latar belakang saya yang membuat Anda ragu? Saya lebih suka menjawabnya sekarang.”"
         }
        ]
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Asking about salary and leave in the final",
         "id": "Menanyakan gaji dan cuti di babak akhir"
        },
        "fix": {
         "en": "That is HR’s room and the offer stage. The final is for judgment questions.",
         "id": "Itu ruang HR dan tahap tawaran. Babak akhir untuk pertanyaan penilaian."
        }
       },
       {
        "h": {
         "en": "Questions you could have googled",
         "id": "Pertanyaan yang bisa dicari di Google"
        },
        "fix": {
         "en": "“What does the company do?” ends the conversation. Ask what only this person can answer.",
         "id": "“Apa yang dilakukan perusahaan?” mengakhiri percakapan. Tanyakan apa yang hanya bisa dijawab orang ini."
        }
       },
       {
        "h": {
         "en": "A list instead of a conversation",
         "id": "Daftar alih-alih percakapan"
        },
        "fix": {
         "en": "Ask one, listen, follow up on the answer. Two good questions beat five read from a page.",
         "id": "Tanyakan satu, dengarkan, tindak lanjuti jawabannya. Dua pertanyaan bagus mengalahkan lima yang dibaca dari halaman."
        }
       }
      ]
     },
     "journey": {
      "before": {
       "label": {
        "en": "Module 6 · method and peers",
        "id": "Modul 6 · metode dan rekan"
       },
       "desc": {
        "en": "You have shown how you think and how you work with others.",
        "id": "Kamu sudah menunjukkan cara berpikir dan cara bekerja dengan orang lain."
       }
      },
      "now": {
       "label": {
        "en": "Module 8 · judgment at altitude",
        "id": "Modul 8 · penilaian di ketinggian"
       },
       "desc": {
        "en": "A view on the business, composure under pushback and questions that carry signal.",
        "id": "Pandangan tentang bisnis, ketenangan di bawah tekanan, dan pertanyaan yang membawa sinyal."
       }
      },
      "next": {
       "label": {
        "en": "Module 9 · practise it live",
        "id": "Modul 9 · latih secara langsung"
       },
       "desc": {
        "en": "Solo drills, the simulator with a human interviewer on video, peer mocks and the ten-day sprint.",
        "id": "Latihan mandiri, simulator dengan pewawancara manusia di video, wawancara tiruan dengan rekan, dan sprint sepuluh hari."
       },
       "lesson": "9.1"
      }
     },
     "migratedFrom": "the-rope:6.4"
    }
   ],
   "hero": "../../assets/bg/gauntlet/gate-06-final-interview.jpg",
   "heroPos": "center 30%"
  },
  {
   "num": 9,
   "phase": "practise",
   "title": {
    "en": "The Simulation Lab",
    "id": "Laboratorium Simulasi"
   },
   "overview": {
    "en": "Practice now runs through every module; this one teaches how to practise. Deliberate practice without memorising, reading the simulator’s feedback and fixing one thing at a time, practising with a partner or a mentor, delivery — voice, presence, video and nerves — the ten-day sprint and the day before, and the capstone: the full process, run end to end, with measured improvement against your Round 1 baseline.",
    "id": "Latihan kini mengalir di setiap modul; modul ini mengajarkan cara berlatih. Latihan terarah tanpa menghafal, membaca umpan balik simulator dan memperbaiki satu hal sekaligus, berlatih dengan pasangan atau mentor, penyampaian — suara, kehadiran, video, dan gugup — sprint sepuluh hari dan hari sebelumnya, dan capstone: proses lengkap, dijalankan ujung ke ujung, dengan perbaikan terukur terhadap garis dasar Putaran 1-mu."
   },
   "outcome": {
    "en": "By the end of this module you know how to practise effectively — with the simulator, a partner and alone — can read and act on feedback, and demonstrate measurable improvement across at least five full simulated interviews, including one in your weakest format.",
    "id": "Di akhir modul ini kamu tahu cara berlatih efektif — dengan simulator, pasangan, dan sendiri — bisa membaca dan menindaklanjuti umpan balik, dan menunjukkan perbaikan terukur di setidaknya lima wawancara simulasi penuh, termasuk satu di format terlemahmu."
   },
   "kit": {
    "en": "Simulation record (≥ 5 sessions with measured change vs baseline) · improvement log",
    "id": "Rekam simulasi (≥ 5 sesi dengan perubahan terukur vs garis dasar) · catatan perbaikan"
   },
   "lessons": [
    {
     "n": "9.1",
     "title": {
      "en": "The Solo Drill Protocol",
      "id": "Protokol Latihan Mandiri"
     },
     "kind": "interactive",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The cheapest interview coach is your own recording. The solo drill: one question, a two-minute cap, recorded; then a transcript review against the same rubric the simulator uses — structure, evidence, delivery; then two more attempts. Three cycles turn a shaky answer into a landed one.",
      "id": "Pelatih wawancara termurah adalah rekamanmu sendiri. Latihan mandiri: satu pertanyaan, batas dua menit, direkam; lalu tinjau transkripnya dengan rubrik yang sama seperti yang dipakai simulator — struktur, bukti, penyampaian; lalu dua percobaan lagi. Tiga siklus mengubah jawaban yang goyah menjadi jawaban yang mendarat."
     },
     "objectives": [
      {
       "en": "Run the record → review → retry cycle on one question.",
       "id": "Menjalankan siklus rekam → tinjau → ulangi pada satu pertanyaan."
      },
      {
       "en": "Review your own transcript against the three-dimension rubric.",
       "id": "Meninjau transkripmu sendiri dengan rubrik tiga dimensi."
      },
      {
       "en": "Track measurable deltas between attempts.",
       "id": "Melacak perbedaan yang terukur antara satu percobaan dan percobaan berikutnya."
      }
     ],
     "takeawaysLead": {
      "en": "The recording never flatters, which is exactly why it works. To run the solo drill as deliberate practice, you can:",
      "id": "Rekaman tak pernah menyanjung, dan justru itulah mengapa ia bekerja. Untuk menjalankan latihan mandiri sebagai latihan yang disengaja, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "The recording never flatters — which is exactly why it works.",
       "id": "Rekaman tidak pernah menyanjung — justru karena itulah ia bekerja."
      },
      {
       "en": "Review with the rubric, not with your mood: words, STAR beats, numbers, fillers.",
       "id": "Tinjau dengan rubrik, bukan dengan suasana hati: jumlah kata, ketukan STAR, angka, kata pengisi."
      },
      {
       "en": "Three attempts per question is the deliberate-practice dose — more repeats the mistake, fewer skips the gain.",
       "id": "Tiga percobaan per pertanyaan adalah dosis latihan yang terarah — lebih dari itu mengulang kesalahan, kurang dari itu melewatkan kemajuannya."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "Why recordings beat mirrors",
        "id": "Mengapa rekaman mengalahkan cermin"
       },
       "body": {
        "en": "Mirrors show you performing; recordings show you as the interviewer experiences you. The gap is always humbling: fillers you never noticed, a story that takes ninety seconds to reach its point, an ending that trails off. Every one of those is fixable within minutes — but only after it is seen. The drill exists to make you see.",
        "id": "Cermin memperlihatkanmu sedang tampil; rekaman memperlihatkanmu sebagaimana pewawancara mengalamimu. Jaraknya selalu merendahkan hati: kata pengisi yang tidak pernah kamu sadari, cerita yang butuh sembilan puluh detik untuk sampai ke intinya, penutup yang menghilang begitu saja. Semua itu bisa diperbaiki dalam hitungan menit — tetapi hanya setelah terlihat. Latihan ini ada untuk membuatmu melihat."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "The rubric in your hands",
        "id": "Rubrik di tanganmu"
       },
       "body": {
        "en": "Structure: did the context take one sentence? Did the first action verb arrive early? Did it land on a result? Evidence: is there a number, a name, a concrete artefact? Delivery: count the fillers, check the length — sixty to two hundred words. Score honestly, pick the single biggest gap, and fix only that in the next attempt. One fix per cycle; that is how deltas stay visible.",
        "id": "Struktur: apakah konteksnya hanya satu kalimat? Apakah kata kerja tindakan pertama datang lebih awal? Apakah jawabannya mendarat pada hasil? Bukti: adakah angka, nama, artefak yang konkret? Penyampaian: hitung kata pengisinya, periksa panjangnya — enam puluh sampai dua ratus kata. Beri nilai dengan jujur, pilih satu celah terbesar, dan perbaiki hanya itu di percobaan berikutnya. Satu perbaikan per siklus; begitulah perbedaannya tetap terlihat."
       },
       "icon": "book"
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Cycle 1 · Baseline",
        "id": "Siklus 1 · Titik awal"
       },
       "body": {
        "en": "Pick one question you fear from the bank. Record your answer — phone voice memo or the simulator — with a hard two-minute cap. Do not restart, whatever happens.",
        "id": "Pilih satu pertanyaan dari bank yang paling kamu takuti. Rekam jawabanmu — memo suara di ponsel atau simulator — dengan batas keras dua menit. Jangan mengulang dari awal, apa pun yang terjadi."
       },
       "debrief": {
        "en": "The ugly first take is the point: it is your honest baseline, and every improvement is measured against it. Professionals keep bad first takes; amateurs delete them and lose the evidence of growth.",
        "id": "Rekaman pertama yang buruk justru intinya: itulah titik awalmu yang jujur, dan setiap perbaikan diukur terhadapnya. Profesional menyimpan rekaman pertama yang jelek; amatir menghapusnya dan kehilangan bukti pertumbuhan."
       }
      },
      {
       "h": {
        "en": "Cycle 2 · One fix",
        "id": "Siklus 2 · Satu perbaikan"
       },
       "body": {
        "en": "Review with the rubric. Name the one biggest gap out loud — “my action came too late” — and re-record fixing only that.",
        "id": "Tinjau dengan rubrik. Sebutkan satu celah terbesar dengan suara keras — “tindakan saya datang terlalu lambat” — lalu rekam ulang dengan memperbaiki hanya itu."
       },
       "debrief": {
        "en": "Single-focus retries improve faster than fix-everything retries, which usually degrade under cognitive load. If the fix held, cycle 3 targets the next gap; if it did not, cycle 3 repeats this one. Patience here is speed later.",
        "id": "Pengulangan dengan satu fokus membaik lebih cepat daripada pengulangan yang memperbaiki semuanya sekaligus, yang biasanya justru memburuk karena beban pikiran. Kalau perbaikannya bertahan, siklus 3 membidik celah berikutnya; kalau tidak, siklus 3 mengulang yang ini. Sabar di sini berarti cepat nantinya."
       }
      },
      {
       "h": {
        "en": "Cycle 3 · Pressure",
        "id": "Siklus 3 · Tekanan"
       },
       "body": {
        "en": "Third take: add pressure. Stand up, add a timer you can see, or have someone watch. Same question, same fix, harder conditions.",
        "id": "Rekaman ketiga: tambahkan tekanan. Berdiri, pasang pewaktu yang bisa kamu lihat, atau minta seseorang menonton. Pertanyaan yang sama, perbaikan yang sama, kondisi yang lebih berat."
       },
       "debrief": {
        "en": "Skills that only work in comfort are not yet skills. If the answer held its structure under mild pressure, it is ready for the simulator's live mode — and after that, for the room. Log your three attempts; the visible delta is your confidence, earned.",
        "id": "Keterampilan yang hanya bekerja dalam keadaan nyaman belum bisa disebut keterampilan. Kalau jawabanmu tetap mempertahankan strukturnya di bawah tekanan ringan, ia siap untuk mode langsung di simulator — dan setelah itu, untuk ruangan yang sesungguhnya. Catat ketiga percobaanmu; perbedaan yang terlihat adalah kepercayaan dirimu, yang kamu peroleh dengan usaha."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "The solo drill cycle",
       "id": "Siklus latihan mandiri"
      },
      "items": [
       {
        "h": {
         "en": "Record",
         "id": "Rekam"
        },
        "sub": {
         "en": "One question, two-minute cap, no restarts",
         "id": "Satu pertanyaan, batas dua menit, tanpa mengulang"
        }
       },
       {
        "h": {
         "en": "Review",
         "id": "Tinjau"
        },
        "sub": {
         "en": "Rubric, not mood: STAR, numbers, fillers, length",
         "id": "Rubrik, bukan suasana hati: STAR, angka, kata pengisi, panjang"
        }
       },
       {
        "h": {
         "en": "Retry",
         "id": "Ulangi"
        },
        "sub": {
         "en": "One fix per cycle — then add pressure",
         "id": "Satu perbaikan per siklus — lalu tambahkan tekanan"
        }
       }
      ],
      "note": {
       "en": "Three cycles per question is the deliberate-practice dose. The visible delta is your confidence, earned.",
       "id": "Tiga siklus per pertanyaan adalah dosis latihan yang terarah. Perbedaan yang terlihat adalah kepercayaan dirimu, yang kamu peroleh dengan usaha."
      },
      "exhibit": {
       "en": "Exhibit 1: The solo drill cycle",
       "id": "Peraga 1: Siklus latihan mandiri"
      },
      "longdesc": {
       "en": "Diagram of The solo drill cycle. It presents, in order: Record — One question, two-minute cap, no restarts; Review — Rubric, not mood: STAR, numbers, fillers, length; Retry — One fix per cycle — then add pressure.",
       "id": "Diagram siklus latihan mandiri. Menyajikan, secara berurutan: Rekam — satu pertanyaan, batas dua menit, tanpa mengulang; Tinjau — rubrik, bukan suasana hati: STAR, angka, kata pengisi, panjang; Ulangi — satu perbaikan per siklus, lalu tambahkan tekanan."
      }
     },
     "tryit": {
      "qid": "bh03",
      "label": {
       "en": "Run cycle one on the failure question",
       "id": "Jalankan siklus satu untuk pertanyaan tentang kegagalan"
      },
      "desc": {
       "en": "Record your failure story now — baseline first, polish after.",
       "id": "Rekam cerita kegagalanmu sekarang — titik awal dulu, poles kemudian."
      }
     },
     "scenario": {
      "icon": "target",
      "img": "../../assets/bg/rope-team.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat dalam Sorotan"
      },
      "body": [
       {
        "en": "Tono has read every lesson twice. He can recite STAR-L in his sleep. Then he records himself answering one question — and hears eleven “ums,” a ninety-second wind-up before his first action verb, and an ending that just… stops. Reading about interviewing and performing an interview, it turns out, are different sports. This module is the gym where the second one is trained.",
        "id": "Tono sudah membaca setiap pelajaran dua kali. Ia bisa melafalkan STAR-L sambil tidur. Lalu ia merekam dirinya menjawab satu pertanyaan — dan mendengar sebelas “emm”, pengantar sembilan puluh detik sebelum kata kerja tindakan pertamanya muncul, dan penutup yang… berhenti begitu saja. Membaca tentang wawancara dan benar-benar tampil di wawancara, ternyata, adalah dua cabang olahraga yang berbeda. Modul ini adalah tempat latihan untuk cabang yang kedua."
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "rubric",
        "id": "rubrik"
       },
       "def": {
        "en": "The written standard an answer is scored against — criteria plus what each level of quality looks like.",
        "id": "Standar tertulis yang dipakai untuk menilai sebuah jawaban — kriterianya, plus seperti apa wujud setiap tingkat kualitas."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "The core of the solo drill is:",
        "id": "Inti dari latihan mandiri adalah:"
       },
       "options": [
        {
         "en": "Recording an answer, reviewing it objectively, and retrying immediately",
         "id": "Merekam jawaban, meninjaunya secara objektif, dan langsung mencoba lagi"
        },
        {
         "en": "Reading model answers until they feel familiar",
         "id": "Membaca contoh jawaban sampai terasa akrab"
        },
        {
         "en": "Practising in front of a mirror for confidence",
         "id": "Berlatih di depan cermin supaya percaya diri"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — the loop is record, review with a rubric, retry. Objective feedback plus immediate repetition is what builds fluency.",
        "id": "Benar — putarannya adalah rekam, tinjau dengan rubrik, ulangi. Umpan balik yang objektif plus pengulangan segera itulah yang membangun kelancaran."
       }
      }
     ],
     "insights": {
      "lead": {
       "en": "What recordings reveal that memory hides.",
       "id": "Yang diungkap rekaman dan disembunyikan ingatan."
      },
      "items": [
       {
        "h": {
         "en": "You are longer than you think",
         "id": "Kamu lebih panjang dari yang kamu kira"
        },
        "body": {
         "en": "Most first recordings run twice the intended length. The cut is almost always in the context — start closer to the problem.",
         "id": "Sebagian besar rekaman pertama berjalan dua kali lebih panjang dari yang dimaksud. Pemangkasannya hampir selalu di bagian konteks — mulai lebih dekat ke masalahnya."
        }
       },
       {
        "h": {
         "en": "Fillers cluster at transitions",
         "id": "Kata pengisi berkumpul di transisi"
        },
        "body": {
         "en": "“Um” appears between story beats, not inside them. Practise the four transitions until they are automatic and the fillers disappear.",
         "id": "“Em” muncul di antara ketukan cerita, bukan di dalamnya. Latih empat transisi sampai otomatis dan kata pengisi menghilang."
        }
       },
       {
        "h": {
         "en": "The result line is often missing",
         "id": "Baris hasil sering hilang"
        },
        "body": {
         "en": "Candidates stop after the action because it feels complete. The transcript shows the interviewer never heard what happened. End every story with the number and the learning.",
         "id": "Kandidat berhenti setelah tindakan karena terasa lengkap. Transkrip menunjukkan pewawancara tak pernah mendengar apa yang terjadi. Akhiri setiap cerita dengan angka dan pembelajarannya."
        }
       }
      ]
     },
     "resources": {
      "items": [
       {
        "kind": "checklist",
        "title": {
         "en": "Transcript review rubric",
         "id": "Rubrik tinjauan transkrip"
        },
        "desc": {
         "en": "The same lens the simulator uses. Score one recording at a time.",
         "id": "Lensa yang sama dengan simulator. Nilai satu rekaman setiap kali."
        },
        "body": [
         {
          "en": "Structure: context ≤ 2 sentences, a clear challenge, actions in “I”, a result, a learning line",
          "id": "Struktur: konteks ≤ 2 kalimat, tantangan yang jelas, tindakan dengan “saya”, hasil, baris pembelajaran"
         },
         {
          "en": "Evidence: at least one number, name or artefact",
          "id": "Bukti: setidaknya satu angka, nama, atau artefak"
         },
         {
          "en": "Length: under two minutes",
          "id": "Durasi: di bawah dua menit"
         },
         {
          "en": "Fillers: fewer than five",
          "id": "Kata pengisi: kurang dari lima"
         },
         {
          "en": "Ownership: “I” for decisions, “we” for the team’s work — both present",
          "id": "Kepemilikan: “saya” untuk keputusan, “kami” untuk kerja tim — keduanya hadir"
         },
         {
          "en": "Landing: the last sentence is the point, not a trailing “so… yeah”",
          "id": "Pendaratan: kalimat terakhir adalah poinnya, bukan “jadi… ya” yang menggantung"
         },
         {
          "en": "One note for next time, written down",
          "id": "Satu catatan untuk lain kali, ditulis"
         }
        ]
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Re-recording until it is perfect",
         "id": "Merekam ulang sampai sempurna"
        },
        "fix": {
         "en": "One take, one review, one note, next question. Perfection in the fifth take does not transfer to the room.",
         "id": "Satu take, satu tinjauan, satu catatan, pertanyaan berikutnya. Kesempurnaan di take kelima tidak terbawa ke ruangan."
        }
       },
       {
        "h": {
         "en": "Reviewing for how you look",
         "id": "Meninjau bagaimana penampilanmu"
        },
        "fix": {
         "en": "Review the transcript for structure and evidence first; delivery second. Appearance last, if at all.",
         "id": "Tinjau transkrip untuk struktur dan bukti dulu; penyampaian kedua. Penampilan terakhir, kalaupun perlu."
        }
       },
       {
        "h": {
         "en": "Only easy questions",
         "id": "Hanya pertanyaan mudah"
        },
        "fix": {
         "en": "Drill the one you dread — the failure, the conflict, the gap — twice as often as the ones you enjoy.",
         "id": "Latih yang paling kamu takuti — kegagalan, konflik, jeda — dua kali lebih sering dari yang kamu sukai."
        }
       }
      ]
     },
     "migratedFrom": "the-rope:7.1"
    },
    {
     "n": "9.2",
     "title": {
      "en": "AI-Powered Mock Interview Practice",
      "id": "Latihan Mock Interview Berbasis AI"
     },
     "kind": "interactive",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The AI Interview Simulator is the centrepiece of Module 9: configure one job and one goal, then face an interviewer that asks from a live question bank, listens to what you actually said, follows up on the weaknesses in your answer, and debriefs you across content, structure and communication — entirely on your device. This lesson explains the system, then hands you to it.",
      "id": "Simulator Wawancara AI adalah pusat dari Modul 9: tentukan satu pekerjaan dan satu tujuan, lalu hadapi pewawancara yang bertanya dari bank pertanyaan yang hidup, mendengarkan apa yang benar-benar kamu ucapkan, mengejar kelemahan dalam jawabanmu, dan memberimu debrief tentang isi, struktur, dan komunikasi — sepenuhnya di perangkatmu. Pelajaran ini menjelaskan sistemnya, lalu mengantarmu kepadanya."
     },
     "objectives": [
      {
       "en": "Configure a personalised simulation: role, industry, stage, difficulty, JD and CV.",
       "id": "Mengatur simulasi yang personal: posisi, industri, tahap, tingkat kesulitan, deskripsi lowongan, dan CV."
      },
      {
       "en": "Complete a full session in practice mode, then in live mode.",
       "id": "Menyelesaikan satu sesi penuh dalam mode latihan, lalu dalam mode langsung."
      },
      {
       "en": "Read the debrief and convert it into your next session's focus.",
       "id": "Membaca debrief-nya dan mengubahnya menjadi fokus sesi berikutnya."
      }
     ],
     "takeawaysLead": {
      "en": "A simulation without a target measures nothing; with one, it probes your own claims. To get the most from the simulator, you can:",
      "id": "Simulasi tanpa target tidak mengukur apa pun; dengan target, ia menyelidiki klaimmu sendiri. Untuk mendapatkan hasil maksimal dari simulator, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "The simulator adapts to your actual answers: too short, no metric, we-not-I — each triggers its own follow-up.",
       "id": "Simulator menyesuaikan diri dengan jawabanmu yang sebenarnya: terlalu singkat, tanpa angka, “kami” bukan “saya” — masing-masing memicu pertanyaan lanjutannya sendiri."
      },
      {
       "en": "Upload your CV and the simulator probes your own claims — the exact thing real interviewers do.",
       "id": "Unggah CV-mu, dan simulator akan menguji klaimmu sendiri — persis seperti yang dilakukan pewawancara sungguhan."
      },
      {
       "en": "Everything runs on your device; voice and video never leave your browser.",
       "id": "Semuanya berjalan di perangkatmu; suara dan video tidak pernah meninggalkan browser-mu."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "One job, one goal",
        "id": "Satu pekerjaan, satu tujuan"
       },
       "body": {
        "en": "A simulation without a target measures nothing. Setup asks for the role, industry, seniority, stage, difficulty and length — plus the job description and your CV if you have them. The JD's stated requirements become questions; your CV's claims become probes. The interview that follows is about your candidacy, not a generic script.",
        "id": "Simulasi tanpa target tidak mengukur apa-apa. Pengaturannya menanyakan posisi, industri, level, tahap, tingkat kesulitan, dan durasi — plus deskripsi lowongan dan CV-mu kalau ada. Persyaratan yang tertulis di deskripsi lowongan menjadi pertanyaan; klaim di CV-mu menjadi bahan penggalian. Wawancara yang mengikuti adalah tentang pencalonanmu, bukan naskah generik."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "Practice mode, then live mode",
        "id": "Mode latihan, lalu mode langsung"
       },
       "body": {
        "en": "Practice mode shows coaching notes before each answer — scaffolding while you install the techniques. Live mode withholds them: questions, follow-ups, a timer, optionally your own camera. Run practice until the coaching stops surprising you, then move to live. The transition is the moment techniques become habits.",
        "id": "Mode latihan menampilkan catatan arahan sebelum setiap jawaban — perancah selagi kamu memasang teknik-tekniknya. Mode langsung tidak menampilkannya: hanya pertanyaan, pertanyaan lanjutan, pewaktu, dan kalau mau, kameramu sendiri. Jalankan mode latihan sampai arahannya tidak lagi mengejutkanmu, lalu pindah ke mode langsung. Perpindahan itulah momen ketika teknik menjadi kebiasaan."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "The debrief and the loop",
        "id": "Debrief dan putarannya"
       },
       "body": {
        "en": "After each session: dimension scores, question-by-question strengths, weaknesses and concrete changes, recurring patterns, attempt comparisons, and — if your camera was on — your recordings for honest self-review of presence. The final panel names your weakest dimension and configures the next session to train it. That closing of the loop is what separates a training system from a toy.",
        "id": "Setelah setiap sesi: skor per dimensi, kekuatan dan kelemahan per pertanyaan beserta perubahan konkretnya, pola yang berulang, perbandingan antarpercobaan, dan — kalau kameramu menyala — rekamanmu sendiri untuk meninjau kehadiranmu dengan jujur. Panel penutupnya menyebutkan dimensi terlemahmu dan mengatur sesi berikutnya untuk melatihnya. Penutupan putaran itulah yang membedakan sistem latihan dari mainan."
       },
       "icon": "target"
      }
     ],
     "tool": {
      "id": "simulator",
      "mode": "home",
      "title": {
       "en": "Launch the AI Interview Simulator",
       "id": "Jalankan Simulator Wawancara AI"
      },
      "body": {
       "en": "Your question bank, your role, your CV, your debrief — the full prepare → perform → review → repeat loop starts here.",
       "id": "Bank pertanyaanmu, posisimu, CV-mu, debrief-mu — putaran lengkap persiapan → tampil → tinjau → ulangi dimulai di sini."
      },
      "cta": {
       "en": "Open the simulator →",
       "id": "Buka simulator →"
      }
     },
     "diagram": {
      "type": "flow",
      "title": {
       "en": "The loop this module installs",
       "id": "Putaran yang dipasang modul ini"
      },
      "items": [
       {
        "h": {
         "en": "Prepare",
         "id": "Persiapan"
        },
        "sub": {
         "en": "One job, one goal, JD + CV loaded",
         "id": "Satu pekerjaan, satu tujuan, deskripsi lowongan + CV sudah dimuat"
        }
       },
       {
        "h": {
         "en": "Perform",
         "id": "Tampil"
        },
        "sub": {
         "en": "Video, voice or text — under realistic pressure",
         "id": "Video, suara, atau teks — di bawah tekanan yang realistis"
        }
       },
       {
        "h": {
         "en": "Review",
         "id": "Tinjau"
        },
        "sub": {
         "en": "Transparent debrief on your own transcript",
         "id": "Debrief yang transparan atas transkripmu sendiri"
        }
       },
       {
        "h": {
         "en": "Improve",
         "id": "Perbaiki"
        },
        "sub": {
         "en": "Weakness → targeted lessons and drills",
         "id": "Kelemahan → pelajaran dan latihan yang tepat sasaran"
        }
       },
       {
        "h": {
         "en": "Repeat",
         "id": "Ulangi"
        },
        "sub": {
         "en": "Progressively harder rounds",
         "id": "Ronde yang makin lama makin sulit"
        }
       }
      ],
      "note": {
       "en": "A mock interview is an event. This is a training system — the difference is the loop.",
       "id": "Mock interview adalah sebuah peristiwa. Ini adalah sistem latihan — bedanya ada pada putarannya."
      },
      "exhibit": {
       "en": "Exhibit 1: The loop this module installs",
       "id": "Peraga 1: Putaran yang dipasang modul ini"
      },
      "longdesc": {
       "en": "Diagram of The loop this module installs. It presents, in order: Prepare — One job, one goal, JD + CV loaded; Perform — Video, voice or text — under realistic pressure; Review — Transparent debrief on your own transcript; Improve — Weakness → targeted lessons and drills; Repeat — Progressively harder rounds.",
       "id": "Diagram putaran yang dipasang modul ini. Menyajikan, secara berurutan: Persiapan — satu pekerjaan, satu tujuan, deskripsi lowongan + CV sudah dimuat; Tampil — video, suara, atau teks, di bawah tekanan yang realistis; Tinjau — debrief yang transparan atas transkripmu sendiri; Perbaiki — kelemahan → pelajaran dan latihan yang tepat sasaran; Ulangi — ronde yang makin lama makin sulit."
      }
     },
     "checks": [
      {
       "q": {
        "en": "The simulator's debrief is honest because:",
        "id": "Debrief dari simulator ini jujur karena:"
       },
       "options": [
        {
         "en": "It compares you against other users' answers",
         "id": "Ia membandingkanmu dengan jawaban pengguna lain"
        },
        {
         "en": "It is a transparent rule-based reading of your transcript, computed on your device",
         "id": "Ia membaca transkripmu dengan aturan yang transparan, dan dihitung di perangkatmu"
        },
        {
         "en": "It always gives an encouraging score",
         "id": "Ia selalu memberi skor yang menyemangati"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Correct — the rubric is visible and deterministic: STAR beats, numbers, fillers, length, pace. No black box, no invented body-language scores.",
        "id": "Benar — rubriknya terlihat dan pasti: ketukan STAR, angka, kata pengisi, panjang, tempo. Tidak ada kotak hitam, tidak ada skor bahasa tubuh yang dikarang."
       }
      },
      {
       "q": {
        "en": "What turns a practice session into deliberate practice?",
        "id": "Apa yang mengubah sesi latihan biasa menjadi latihan yang terarah?"
       },
       "options": [
        {
         "en": "A feedback loop that changes what you practice next",
         "id": "Putaran umpan balik yang mengubah apa yang kamu latih berikutnya"
        },
        {
         "en": "Practising for more hours in a row",
         "id": "Berlatih lebih banyak jam berturut-turut"
        },
        {
         "en": "Recording in higher video quality",
         "id": "Merekam dengan kualitas video yang lebih tinggi"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — repetition alone plateaus. Feedback that redirects the next repetition is what compounds.",
        "id": "Benar — pengulangan saja akan mentok. Umpan balik yang mengarahkan ulang pengulangan berikutnya itulah yang menumpuk menjadi kemajuan."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "follow-up",
        "id": "pertanyaan lanjutan"
       },
       "def": {
        "en": "The probing question after your answer — where inflated claims collapse and honest depth scores.",
        "id": "Pertanyaan penggali setelah jawabanmu — tempat klaim yang dibesar-besarkan runtuh, dan kedalaman yang jujur mendapat nilai."
       }
      },
      {
       "term": {
        "en": "live mode",
        "id": "mode langsung"
       },
       "def": {
        "en": "The simulator setting that withholds coaching notes — questions, follow-ups, a timer and optionally your camera — used once practice mode has installed the techniques.",
        "id": "Pengaturan simulator yang menahan catatan pelatihan — pertanyaan, pertanyaan lanjutan, pengatur waktu, dan opsional kameramu — dipakai setelah mode latihan memasang teknik-tekniknya."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Practising in Light mode only",
         "id": "Berlatih hanya dalam mode Ringan"
        },
        "fix": {
         "en": "Use Full guidance to learn the structure, then Light, then Off — the real room has no panel.",
         "id": "Gunakan panduan Penuh untuk mempelajari struktur, lalu Ringan, lalu Mati — ruangan sebenarnya tak punya panel."
        }
       },
       {
        "h": {
         "en": "Ignoring the follow-ups",
         "id": "Mengabaikan pertanyaan lanjutan"
        },
        "fix": {
         "en": "The simulator follows up on the weak beat on purpose. That is the drill: answer the follow-up cleanly.",
         "id": "Simulator sengaja menindaklanjuti ketukan yang lemah. Itulah latihannya: jawab pertanyaan lanjutan dengan rapi."
        }
       },
       {
        "h": {
         "en": "Reading from your story cards",
         "id": "Membaca dari kartu cerita"
        },
        "fix": {
         "en": "Cards are for before. In the session, talk. The transcript will show whether the story is really yours.",
         "id": "Kartu untuk sebelumnya. Dalam sesi, bicaralah. Transkrip akan menunjukkan apakah cerita itu benar-benar milikmu."
        }
       }
      ]
     },
     "migratedFrom": "the-rope:7.2"
    },
    {
     "n": "9.3",
     "title": {
      "en": "The Peer Mock Interview Framework",
      "id": "Kerangka Mock Interview Bersama Teman"
     },
     "kind": "interactive",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The simulator measures; a human adds what machines honestly cannot — the social pressure of real eyes. The peer mock framework structures a practice interview between two people: roles, a question script, an observer rubric, and an evidence-based debrief. Basecamp exists for exactly this exchange.",
      "id": "Simulator mengukur; manusia menambahkan apa yang sejujurnya tidak bisa diberikan mesin — tekanan sosial dari tatapan mata sungguhan. Kerangka mock bersama teman menyusun wawancara latihan antara dua orang: peran, naskah pertanyaan, rubrik pengamat, dan debrief berbasis bukti. Basecamp ada persis untuk pertukaran seperti ini."
     },
     "objectives": [
      {
       "en": "Run a structured peer mock as interviewer and as candidate.",
       "id": "Menjalankan mock interview terstruktur bersama teman, sebagai pewawancara maupun sebagai kandidat."
      },
      {
       "en": "Use the observer rubric to give evidence-based feedback.",
       "id": "Memakai rubrik pengamat untuk memberi umpan balik berbasis bukti."
      },
      {
       "en": "Debrief without flattery and without cruelty.",
       "id": "Melakukan debrief tanpa sanjungan dan tanpa kekejaman."
      }
     ],
     "takeawaysLead": {
      "en": "The simulator measures; a human adds the pressure of real eyes. To run a peer mock that teaches both ends of the rope, you can:",
      "id": "Simulator mengukur; manusia menambahkan tekanan dari tatapan sungguhan. Untuk menjalankan simulasi bersama rekan yang mengajari kedua ujung tali, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Playing the interviewer teaches you more than playing the candidate — you feel what scores.",
       "id": "Berperan sebagai pewawancara mengajarimu lebih banyak daripada berperan sebagai kandidat — kamu merasakan sendiri apa yang layak dinilai."
      },
      {
       "en": "Feedback must quote: “at minute two you said X” beats “you were a bit unclear”.",
       "id": "Umpan balik harus mengutip: “di menit kedua kamu bilang X” mengalahkan “kamu agak kurang jelas”."
      },
      {
       "en": "Swap roles every session; the rope holds because both ends practise.",
       "id": "Bertukar peran di setiap sesi; tali bertahan karena kedua ujungnya berlatih."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "The setup",
        "id": "Persiapannya"
       },
       "body": {
        "en": "Two people, forty-five minutes: five minutes to configure (role, stage, six questions from the bank), twenty for the interview, ten for debrief, then swap what you can fit. The interviewer sticks to the script plus natural follow-ups; the observer rubric — structure, evidence, delivery, presence — is filled during, not after, with quotes and timestamps.",
        "id": "Dua orang, empat puluh lima menit: lima menit untuk mengatur (posisi, tahap, enam pertanyaan dari bank), dua puluh menit wawancara, sepuluh menit debrief, lalu bertukar peran kalau waktunya masih cukup. Pewawancara berpegang pada naskah plus pertanyaan lanjutan yang alami; rubrik pengamat — struktur, bukti, penyampaian, kehadiran — diisi selama wawancara berlangsung, bukan setelahnya, lengkap dengan kutipan dan penanda waktu."
       }
      },
      {
       "h": {
        "en": "Debrief discipline",
        "id": "Disiplin debrief"
       },
       "body": {
        "en": "Format: two strengths with quotes, two weaknesses with quotes, one change to try immediately — then a five-minute retry of the weakest answer. Skip the compliment sandwich; respectful directness with evidence is kinder than comfortable vagueness, because it is the only kind that changes the next interview.",
        "id": "Formatnya: dua kekuatan dengan kutipan, dua kelemahan dengan kutipan, satu perubahan untuk langsung dicoba — lalu lima menit mengulang jawaban yang paling lemah. Lewati “roti lapis” pujian; keterusterangan yang hormat dan berbukti lebih baik daripada kekaburan yang nyaman, karena hanya itu yang mengubah wawancara berikutnya."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Step 1 · Configure together",
        "id": "Langkah 1 · Atur bersama"
       },
       "body": {
        "en": "Agree the candidate's real target role and stage. Pull six questions from the simulator's bank for that configuration — include one difficult-case question the candidate actually fears.",
        "id": "Sepakati posisi dan tahap wawancara yang benar-benar sedang dituju kandidat. Ambil enam pertanyaan dari bank simulator untuk konfigurasi itu — sertakan satu pertanyaan kasus sulit yang benar-benar ditakuti kandidat."
       },
       "debrief": {
        "en": "Practising the feared question with a friendly human first is graduated exposure — the healthy kind. By the third repetition the fear is a procedure. That is the entire psychology of this module in one step.",
        "id": "Melatih pertanyaan yang ditakuti bersama manusia yang ramah lebih dulu adalah paparan bertahap — jenis yang sehat. Pada pengulangan ketiga, ketakutan itu sudah menjadi prosedur. Itulah seluruh psikologi modul ini, dalam satu langkah."
       }
      },
      {
       "h": {
        "en": "Step 2 · Hold the frame",
        "id": "Langkah 2 · Jaga bingkainya"
       },
       "body": {
        "en": "Interviewer: stay in character for the full twenty minutes — no coaching mid-interview, no breaking to chat. Follow up when answers are vague, exactly as the simulator does.",
        "id": "Pewawancara: tetap dalam peran selama dua puluh menit penuh — tidak ada arahan di tengah wawancara, tidak ada jeda untuk mengobrol. Ajukan pertanyaan lanjutan ketika jawabannya kabur, persis seperti yang dilakukan simulator."
       },
       "debrief": {
        "en": "The value of a peer mock is proportional to how seriously the frame is held. Every break in character releases the pressure that the candidate came to practise under. Kindness here means staying in role.",
        "id": "Nilai mock bersama teman sebanding dengan seberapa serius bingkainya dijaga. Setiap kali keluar dari peran, tekanan yang justru ingin dilatih kandidat ikut lepas. Berbaik hati di sini berarti tetap dalam peran."
       }
      },
      {
       "h": {
        "en": "Step 3 · Evidence debrief + retry",
        "id": "Langkah 3 · Debrief berbukti + ulangi"
       },
       "body": {
        "en": "Deliver the debrief in the strict format: 2 strengths, 2 weaknesses, 1 change — all with quotes. Then re-run the weakest question immediately.",
        "id": "Sampaikan debrief dalam format yang ketat: 2 kekuatan, 2 kelemahan, 1 perubahan — semuanya dengan kutipan. Lalu langsung ulangi pertanyaan yang paling lemah."
       },
       "debrief": {
        "en": "The immediate retry is where the session pays out: the feedback is still warm, the stakes are still low, and the improvement is instantly visible to both of you. End every peer mock with a retry — never with only talk.",
        "id": "Pengulangan segera adalah saat sesi ini membuahkan hasil: umpan baliknya masih hangat, taruhannya masih rendah, dan perbaikannya langsung terlihat oleh kalian berdua. Akhiri setiap mock bersama teman dengan pengulangan — jangan pernah hanya dengan obrolan."
       }
      }
     ],
     "diagram": {
      "type": "timeline",
      "title": {
       "en": "The 45-minute peer mock",
       "id": "Mock interview 45 menit bersama teman"
      },
      "items": [
       {
        "h": {
         "en": "0–5 min",
         "id": "Menit 0–5"
        },
        "sub": {
         "en": "Configure: role, stage, six bank questions",
         "id": "Atur: posisi, tahap, enam pertanyaan dari bank"
        }
       },
       {
        "h": {
         "en": "5–25 min",
         "id": "Menit 5–25"
        },
        "sub": {
         "en": "Interview — frame held, no coaching",
         "id": "Wawancara — bingkai dijaga, tanpa arahan"
        }
       },
       {
        "h": {
         "en": "25–35 min",
         "id": "Menit 25–35"
        },
        "sub": {
         "en": "Debrief: 2 strengths, 2 weaknesses, 1 change — with quotes",
         "id": "Debrief: 2 kekuatan, 2 kelemahan, 1 perubahan — dengan kutipan"
        }
       },
       {
        "h": {
         "en": "35–40 min",
         "id": "Menit 35–40"
        },
        "sub": {
         "en": "Immediate retry of the weakest answer",
         "id": "Langsung ulangi jawaban yang paling lemah"
        }
       },
       {
        "h": {
         "en": "40–45 min",
         "id": "Menit 40–45"
        },
        "sub": {
         "en": "Swap roles or book the next session",
         "id": "Bertukar peran, atau jadwalkan sesi berikutnya"
        }
       }
      ],
      "note": {
       "en": "End every peer mock with a retry — never with only talk.",
       "id": "Akhiri setiap mock bersama teman dengan pengulangan — jangan pernah hanya dengan obrolan."
      },
      "exhibit": {
       "en": "Exhibit 1: The 45-minute peer mock",
       "id": "Peraga 1: Mock interview 45 menit bersama teman"
      },
      "longdesc": {
       "en": "Diagram of The 45-minute peer mock. It presents, in order: 0–5 min — Configure: role, stage, six bank questions; 5–25 min — Interview — frame held, no coaching; 25–35 min — Debrief: 2 strengths, 2 weaknesses, 1 change — with quotes; 35–40 min — Immediate retry of the weakest answer; 40–45 min — Swap roles or book the next session.",
       "id": "Diagram mock interview 45 menit bersama teman. Menyajikan, secara berurutan: menit 0–5 — atur: posisi, tahap, enam pertanyaan dari bank; menit 5–25 — wawancara, bingkai dijaga, tanpa arahan; menit 25–35 — debrief: 2 kekuatan, 2 kelemahan, 1 perubahan, dengan kutipan; menit 35–40 — langsung ulangi jawaban yang paling lemah; menit 40–45 — bertukar peran, atau jadwalkan sesi berikutnya."
      }
     },
     "checks": [
      {
       "q": {
        "en": "Useful peer feedback sounds like:",
        "id": "Umpan balik dari teman yang berguna berbunyi seperti:"
       },
       "options": [
        {
         "en": "“That was great, you're definitely ready.”",
         "id": "“Tadi bagus banget, kamu pasti sudah siap.”"
        },
        {
         "en": "“You need more confidence.”",
         "id": "“Kamu perlu lebih percaya diri.”"
        },
        {
         "en": "“Your answer ran 3 minutes and the result only arrived in the last sentence — try leading with it.”",
         "id": "“Jawabanmu 3 menit, dan hasilnya baru muncul di kalimat terakhir — coba buka dengan hasilnya.”"
        }
       ],
       "correct": 2,
       "why": {
        "en": "Correct — quoted evidence plus a concrete change. Encouragement without evidence and adjectives without examples both change nothing.",
        "id": "Benar — bukti yang dikutip plus satu perubahan konkret. Semangat tanpa bukti dan kata sifat tanpa contoh sama-sama tidak mengubah apa pun."
       }
      },
      {
       "q": {
        "en": "Why does playing the interviewer improve your own answers?",
        "id": "Mengapa berperan sebagai pewawancara memperbaiki jawabanmu sendiri?"
       },
       "options": [
        {
         "en": "You feel from the inside what scores — vagueness becomes audible",
         "id": "Kamu merasakan dari dalam apa yang layak dinilai — jawaban yang kabur jadi terdengar"
        },
        {
         "en": "It doesn't — only answering practice helps",
         "id": "Tidak memperbaiki — hanya latihan menjawab yang membantu"
        },
        {
         "en": "Because you memorise more questions",
         "id": "Karena kamu menghafal lebih banyak pertanyaan"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — an hour in the interviewer's chair recalibrates your ear. You stop tolerating your own vague answers.",
        "id": "Benar — satu jam di kursi pewawancara mengalibrasi ulang telingamu. Kamu berhenti menoleransi jawaban kaburmu sendiri."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "debrief",
        "id": "debrief"
       },
       "def": {
        "en": "The meeting after the interview loop where interviewers pool notes and argue the hire decision — without you in the room.",
        "id": "Rapat setelah seluruh rangkaian wawancara, tempat para pewawancara menggabungkan catatan dan memperdebatkan keputusan rekrutmen — tanpa kamu di ruangan."
       }
      },
      {
       "term": {
        "en": "rubric",
        "id": "rubrik"
       },
       "def": {
        "en": "The written standard an answer is scored against — criteria plus what each level of quality looks like.",
        "id": "Standar tertulis yang dipakai untuk menilai sebuah jawaban — kriterianya, plus seperti apa wujud setiap tingkat kualitas."
       }
      },
      {
       "term": {
        "en": "follow-up",
        "id": "pertanyaan lanjutan"
       },
       "def": {
        "en": "The probing question after your answer — where inflated claims collapse and honest depth scores.",
        "id": "Pertanyaan penggali setelah jawabanmu — tempat klaim yang dibesar-besarkan runtuh, dan kedalaman yang jujur mendapat nilai."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      }
     ],
     "resources": {
      "items": [
       {
        "kind": "template",
        "title": {
         "en": "Peer mock — 40-minute protocol",
         "id": "Wawancara tiruan rekan — protokol 40 menit"
        },
        "desc": {
         "en": "Three roles: interviewer, candidate, observer. Rotate.",
         "id": "Tiga peran: pewawancara, kandidat, pengamat. Bergilir."
        },
        "body": [
         {
          "en": "0–2 min: interviewer states the role and the round (HR / technical / final)",
          "id": "0–2 mnt: pewawancara menyebutkan peran dan babak (HR / teknis / akhir)"
         },
         {
          "en": "2–17 min: five questions from the script, each with one follow-up on the weakest beat; observer times and scores",
          "id": "2–17 mnt: lima pertanyaan dari naskah, masing-masing dengan satu pertanyaan lanjutan pada ketukan terlemah; pengamat mengatur waktu dan menilai"
         },
         {
          "en": "17–20 min: candidate asks two questions and closes",
          "id": "17–20 mnt: kandidat mengajukan dua pertanyaan dan menutup"
         },
         {
          "en": "20–30 min: debrief — observer first (rubric), interviewer second (what they would write in the note), candidate last (what felt hard)",
          "id": "20–30 mnt: debrief — pengamat dulu (rubrik), pewawancara kedua (apa yang akan mereka tulis di catatan), kandidat terakhir (apa yang terasa sulit)"
         },
         {
          "en": "30–40 min: candidate re-answers the two weakest questions",
          "id": "30–40 mnt: kandidat menjawab ulang dua pertanyaan terlemah"
         },
         {
          "en": "Question script: mix two behavioural, one technical-method, one strategic, one difficult-case (gap / failure / conflict)",
          "id": "Naskah pertanyaan: campur dua perilaku, satu metode teknis, satu strategis, satu kasus sulit (jeda / kegagalan / konflik)"
         }
        ]
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "A friend who says “that was great”",
         "id": "Teman yang bilang “itu bagus”"
        },
        "fix": {
         "en": "Give your observer the rubric and forbid compliments. Ask for the one thing to fix.",
         "id": "Beri pengamatmu rubriknya dan larang pujian. Minta satu hal untuk diperbaiki."
        }
       },
       {
        "h": {
         "en": "No observer, no timer",
         "id": "Tanpa pengamat, tanpa pengatur waktu"
        },
        "fix": {
         "en": "The interviewer cannot watch the clock and the answer. Three roles or it is a conversation, not a mock.",
         "id": "Pewawancara tak bisa mengawasi jam dan jawaban sekaligus. Tiga peran atau itu percakapan, bukan wawancara tiruan."
        }
       },
       {
        "h": {
         "en": "Debriefing for an hour",
         "id": "Debrief selama satu jam"
        },
        "fix": {
         "en": "Ten minutes: structure, evidence, delivery, one fix. Then swap.",
         "id": "Sepuluh menit: struktur, bukti, penyampaian, satu perbaikan. Lalu tukar."
        }
       }
      ]
     },
     "migratedFrom": "the-rope:7.3"
    },
    {
     "n": "9.4",
     "title": {
      "en": "The 10-Day Pre-Interview Sprint Plan",
      "id": "Rencana Sprint 10 Hari Menjelang Wawancara"
     },
     "kind": "reading",
     "dur": {
      "en": "10 min",
      "id": "10 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "An interview date concentrates the mind. This is the ten-day protocol from invitation to interview morning — research, story calibration, simulations, difficult-case drilling, logistics, and the final checklist. And if you have days, not weeks: the fast-track version lives one click away in the simulator.",
      "id": "Tanggal wawancara memusatkan pikiran. Inilah protokol sepuluh hari dari undangan sampai pagi hari wawancara — riset, kalibrasi cerita, simulasi, latihan kasus sulit, logistik, dan daftar periksa terakhir. Dan kalau waktumu hitungan hari, bukan minggu: versi jalur cepatnya tersedia satu klik saja di dalam simulator."
     },
     "objectives": [
      {
       "en": "Run the 10-day sprint structure for a real interview.",
       "id": "Menjalankan struktur sprint 10 hari untuk wawancara sungguhan."
      },
      {
       "en": "Allocate simulation sessions across the sprint deliberately.",
       "id": "Mengalokasikan sesi simulasi di sepanjang sprint dengan sengaja."
      },
      {
       "en": "Execute the day-before and day-of checklists.",
       "id": "Menjalankan daftar periksa H-1 dan hari-H."
      }
     ],
     "takeawaysLead": {
      "en": "Ten days, three phases — intelligence, answers, performance — and a last day for logistics and sleep. To run the sprint, you can:",
      "id": "Sepuluh hari, tiga fase — intelijen, jawaban, penampilan — dan satu hari terakhir untuk logistik dan tidur. Untuk menjalankan sprint ini, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Days 10–8 build intelligence; days 7–4 build answers; days 3–1 build performance.",
       "id": "Hari 10–8 membangun intelijen; hari 7–4 membangun jawaban; hari 3–1 membangun performa."
      },
      {
       "en": "The last 24 hours are for logistics and sleep, not new material.",
       "id": "24 jam terakhir untuk logistik dan tidur, bukan untuk materi baru."
      },
      {
       "en": "Hours, not days? Use the simulator's Fast-Track — priorities, JD analysis, and one sprint session.",
       "id": "Waktumu hitungan jam, bukan hari? Pakai Jalur Cepat di simulator — prioritas, analisis deskripsi lowongan, dan satu sesi sprint."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "Days 10–8 · Intelligence",
        "id": "Hari 10–8 · Intelijen"
       },
       "body": {
        "en": "Decode the JD into its competency map (lesson 3.3). Read the company's public frameworks, product and recent moves. Build the requirement → evidence table. Configure the simulator with the role, stage, JD and your CV — run one practice-mode session as a baseline and note the weakest dimension.",
        "id": "Uraikan deskripsi lowongan menjadi peta kompetensinya (pelajaran 3.3). Baca kerangka nilai yang diterbitkan perusahaan, produknya, dan langkah-langkah terbarunya. Susun tabel persyaratan → bukti. Atur simulator dengan posisi, tahap, deskripsi lowongan, dan CV-mu — jalankan satu sesi mode latihan sebagai titik awal, dan catat dimensi yang paling lemah."
       }
      },
      {
       "h": {
        "en": "Days 7–4 · Answers",
        "id": "Hari 7–4 · Jawaban"
       },
       "body": {
        "en": "Polish the story matrix for this role: workhorse stories at three altitudes, your difficult case in one calm breath, the positioning statement tailored. One simulator session daily, alternating focus on your measured weaknesses. Day 5: a peer mock if you can get one — Basecamp is where you find the peer.",
        "id": "Poles matriks cerita untuk posisi ini: cerita andalan pada tiga ketinggian, kasus sulitmu dalam satu tarikan napas yang tenang, positioning statement yang sudah disesuaikan. Satu sesi simulator setiap hari, bergantian fokus pada kelemahan-kelemahanmu yang terukur. Hari ke-5: mock interview bersama teman kalau bisa — Basecamp adalah tempat menemukan temannya."
       }
      },
      {
       "h": {
        "en": "Days 3–1 · Performance",
        "id": "Hari 3–1 · Performa"
       },
       "body": {
        "en": "Switch to live mode with camera on. Full-length sessions at the real stage and difficulty. Review recordings for presence honestly. Day 1: logistics — route or link tested, outfit ready, questions-to-ask written, positioning read aloud once. Then stop. Sleep is preparation; anxiety rehearsal is not.",
        "id": "Beralih ke mode langsung dengan kamera menyala. Sesi berdurasi penuh, pada tahap dan tingkat kesulitan yang sebenarnya. Tinjau rekamanmu untuk menilai kehadiran dengan jujur. H-1: logistik — rute atau tautan sudah diuji, pakaian siap, daftar pertanyaan sudah ditulis, positioning dibaca dengan suara keras satu kali. Lalu berhenti. Tidur adalah persiapan; melatih kecemasan bukan."
       }
      },
      {
       "h": {
        "en": "Interview morning",
        "id": "Pagi hari wawancara"
       },
       "body": {
        "en": "Eat. Arrive or log in ten minutes early. Read your one-line positioning and your three questions — nothing else. Two slow breaths before the door. You have practised more than nearly every other candidate walking in today; walk in like it.",
        "id": "Sarapan. Tiba atau masuk sepuluh menit lebih awal. Baca positioning satu kalimatmu dan tiga pertanyaanmu — tidak ada yang lain. Dua tarikan napas pelan sebelum pintu. Kamu sudah berlatih lebih banyak daripada hampir semua kandidat lain yang masuk hari ini; masuklah dengan sikap seperti itu."
       }
      }
     ],
     "diagram": {
      "type": "timeline",
      "title": {
       "en": "Ten days, three phases",
       "id": "Sepuluh hari, tiga fase"
      },
      "items": [
       {
        "h": {
         "en": "Days 10–8",
         "id": "Hari 10–8"
        },
        "sub": {
         "en": "Intelligence: JD decode, frameworks, evidence table, baseline session",
         "id": "Intelijen: uraikan deskripsi lowongan, kerangka nilai, tabel bukti, sesi titik awal"
        }
       },
       {
        "h": {
         "en": "Days 7–4",
         "id": "Hari 7–4"
        },
        "sub": {
         "en": "Answers: story matrix, difficult case, one session daily",
         "id": "Jawaban: matriks cerita, kasus sulit, satu sesi setiap hari"
        }
       },
       {
        "h": {
         "en": "Days 3–1",
         "id": "Hari 3–1"
        },
        "sub": {
         "en": "Performance: live mode, camera on, then logistics and sleep",
         "id": "Performa: mode langsung, kamera menyala, lalu logistik dan tidur"
        }
       },
       {
        "h": {
         "en": "Morning",
         "id": "Pagi hari-H"
        },
        "sub": {
         "en": "Eat, arrive early, one read of your positioning, two slow breaths",
         "id": "Sarapan, datang lebih awal, baca positioning satu kali, dua tarikan napas pelan"
        }
       }
      ],
      "note": {
       "en": "Hours, not days? The simulator's Fast-Track compresses this into one evening.",
       "id": "Waktumu hitungan jam, bukan hari? Jalur Cepat di simulator memadatkan semua ini menjadi satu malam."
      },
      "exhibit": {
       "en": "Exhibit 1: Ten days, three phases",
       "id": "Peraga 1: Sepuluh hari, tiga fase"
      },
      "longdesc": {
       "en": "Diagram of Ten days, three phases. It presents, in order: Days 10–8 — Intelligence: JD decode, frameworks, evidence table, baseline session; Days 7–4 — Answers: story matrix, difficult case, one session daily; Days 3–1 — Performance: live mode, camera on, then logistics and sleep; Morning — Eat, arrive early, one read of your positioning, two slow breaths.",
       "id": "Diagram sepuluh hari, tiga fase. Menyajikan, secara berurutan: Hari 10–8 — intelijen: uraikan deskripsi lowongan, kerangka nilai, tabel bukti, sesi titik awal; Hari 7–4 — jawaban: matriks cerita, kasus sulit, satu sesi setiap hari; Hari 3–1 — performa: mode langsung, kamera menyala, lalu logistik dan tidur; Pagi hari-H — sarapan, datang lebih awal, baca positioning satu kali, dua tarikan napas pelan."
      }
     },
     "tryit": {
      "qid": "hr10",
      "label": {
       "en": "The sprint's anchor question",
       "id": "Pertanyaan jangkar sprint ini"
      },
      "desc": {
       "en": "“Why should we hire you?” — the three-sentence close, rehearsed until boring.",
       "id": "“Mengapa kami harus merekrut Anda?” — penutup tiga kalimat, dilatih sampai terasa membosankan."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "competency",
        "id": "kompetensi"
       },
       "def": {
        "en": "A capability a role requires — leadership, prioritisation, judgment — that interviews probe with behavioral evidence.",
        "id": "Kemampuan yang dituntut sebuah posisi — kepemimpinan, menentukan prioritas, pertimbangan — yang digali wawancara lewat bukti perilaku."
       }
      },
      {
       "term": {
        "en": "positioning statement",
        "id": "positioning statement"
       },
       "def": {
        "en": "Your 90-second opening: who you are professionally, two numbered proofs, and why this company.",
        "id": "Pembuka 90 detikmu: siapa kamu secara profesional, dua bukti berangka, dan mengapa perusahaan ini."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Cramming new material the night before",
         "id": "Melahap materi baru pada malam sebelumnya"
        },
        "fix": {
         "en": "The last 24 hours are for logistics and sleep. New material adds anxiety, not capability.",
         "id": "24 jam terakhir untuk logistik dan tidur. Materi baru menambah kecemasan, bukan kemampuan."
        }
       },
       {
        "h": {
         "en": "Practising silently by re-reading",
         "id": "Berlatih dalam diam dengan membaca ulang"
        },
        "fix": {
         "en": "One 4-question simulation with a debrief beats four more hours of reading — run it.",
         "id": "Satu simulasi 4 pertanyaan dengan debrief mengalahkan empat jam tambahan membaca — jalankan."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "The night before the interview you should:",
        "id": "Malam sebelum wawancara, kamu sebaiknya:"
       },
       "options": [
        {
         "en": "Confirm logistics, re-read your positioning once, and sleep",
         "id": "Memastikan logistik, membaca ulang positioning-mu satu kali, lalu tidur"
        },
        {
         "en": "Cram three new modules of material",
         "id": "Melahap tiga modul materi baru"
        },
        {
         "en": "Run simulations until midnight",
         "id": "Menjalankan simulasi sampai tengah malam"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — performance rides on rest. New material within 24 hours adds anxiety, not capability.",
        "id": "Benar — performa bertumpu pada istirahat. Materi baru dalam 24 jam terakhir menambah kecemasan, bukan kemampuan."
       }
      }
     ],
     "resources": {
      "items": [
       {
        "kind": "checklist",
        "title": {
         "en": "Ten-day sprint tracker",
         "id": "Pelacak sprint sepuluh hari"
        },
        "desc": {
         "en": "From invitation to interview morning. Tick each day.",
         "id": "Dari undangan sampai pagi wawancara. Centang tiap hari."
        },
        "body": [
         {
          "en": "Day 10: JD decoded; company research questions answered from primary sources",
          "id": "Hari 10: JD diuraikan; pertanyaan riset perusahaan dijawab dari sumber primer"
         },
         {
          "en": "Day 9: story matrix updated; three stories chosen to polish",
          "id": "Hari 9: matriks cerita diperbarui; tiga cerita dipilih untuk dipoles"
         },
         {
          "en": "Day 8: positioning statement rewritten for this role; said aloud five times",
          "id": "Hari 8: pernyataan pemosisian ditulis ulang untuk peran ini; diucapkan lima kali"
         },
         {
          "en": "Day 7: simulator session (Full guidance) — the round you will face first",
          "id": "Hari 7: sesi simulator (panduan Penuh) — babak yang akan kamu hadapi pertama"
         },
         {
          "en": "Day 6: difficult-case drill — gap, failure, conflict, salary",
          "id": "Hari 6: latihan kasus sulit — jeda, kegagalan, konflik, gaji"
         },
         {
          "en": "Day 5: simulator session (Light) — technical or strategic round",
          "id": "Hari 5: sesi simulator (Ringan) — babak teknis atau strategis"
         },
         {
          "en": "Day 4: peer mock with observer; one fix noted",
          "id": "Hari 4: wawancara tiruan rekan dengan pengamat; satu perbaikan dicatat"
         },
         {
          "en": "Day 3: question portfolio chosen (two per round); logistics confirmed",
          "id": "Hari 3: portofolio pertanyaan dipilih (dua per babak); logistik dikonfirmasi"
         },
         {
          "en": "Day 2: simulator session (Off) — full run; sleep early",
          "id": "Hari 2: sesi simulator (Mati) — putaran penuh; tidur lebih awal"
         },
         {
          "en": "Day 1: light review only — three stories, one question, the frame; clothes and route ready",
          "id": "Hari 1: tinjauan ringan saja — tiga cerita, satu pertanyaan, bingkainya; pakaian dan rute siap"
         },
         {
          "en": "Morning: two-minute reset; arrive or log in ten minutes early",
          "id": "Pagi: reset dua menit; tiba atau masuk sepuluh menit lebih awal"
         }
        ]
       }
      ]
     },
     "journey": {
      "before": {
       "label": {
        "en": "Modules 1–6 · the material",
        "id": "Modul 1–6 · bahannya"
       },
       "desc": {
        "en": "Stories, rubrics, answer systems and judgment at altitude.",
        "id": "Cerita, rubrik, sistem jawaban, dan penilaian di ketinggian."
       }
      },
      "now": {
       "label": {
        "en": "Module 9 · rehearsed under real conditions",
        "id": "Modul 9 · dilatih dalam kondisi nyata"
       },
       "desc": {
        "en": "Recordings reviewed, the simulator run in three modes, peers with a rubric, ten days planned.",
        "id": "Rekaman ditinjau, simulator dijalankan dalam tiga mode, rekan dengan rubrik, sepuluh hari direncanakan."
       }
      },
      "next": {
       "label": {
        "en": "Module 10 · the offer",
        "id": "Modul 10 · tawarannya"
       },
       "desc": {
        "en": "Total compensation, market research and the fifteen-minute conversation worth months of salary.",
        "id": "Kompensasi total, riset pasar, dan percakapan lima belas menit yang bernilai berbulan-bulan gaji."
       },
       "lesson": "10.1"
      }
     },
     "migratedFrom": "the-rope:7.4"
    }
   ],
   "hero": "../../assets/m/02-prep.jpg",
   "heroPos": "center 40%"
  },
  {
   "num": 10,
   "phase": "after",
   "title": {
    "en": "Offer Evaluation and Negotiation",
    "id": "Evaluasi dan Negosiasi Penawaran"
   },
   "overview": {
    "en": "The offer is where months of work become a number, a contract and a start date — and where most graduates accept the first figure they hear. This module teaches you to read an Indonesian offer letter and employment contract, calculate the real value of a package (monthly take-home, annual value, benefits), understand PKWT, PKWTT, probation and service bonds, decide whether to negotiate, negotiate professionally in the Indonesian register — and accept or decline gracefully.",
    "id": "Tawaran adalah tempat berbulan-bulan kerja menjadi angka, kontrak, dan tanggal mulai — dan tempat sebagian besar lulusan menerima angka pertama yang mereka dengar. Modul ini mengajarimu membaca surat penawaran dan kontrak kerja Indonesia, menghitung nilai sebenarnya sebuah paket (take-home bulanan, nilai tahunan, tunjangan), memahami PKWT, PKWTT, masa percobaan, dan ikatan dinas, memutuskan apakah bernegosiasi, bernegosiasi profesional dalam register Indonesia — dan menerima atau menolak dengan anggun."
   },
   "outcome": {
    "en": "By the end of this module you can read an Indonesian offer letter and employment contract, calculate the real value of a package (monthly take-home, annual value, benefits), spot red flags, decide whether to negotiate, and negotiate professionally — or accept or decline gracefully.",
    "id": "Di akhir modul ini kamu bisa membaca surat penawaran dan kontrak kerja Indonesia, menghitung nilai sebenarnya sebuah paket (take-home bulanan, nilai tahunan, tunjangan), mengenali tanda bahaya, memutuskan apakah bernegosiasi, dan bernegosiasi profesional — atau menerima atau menolak dengan anggun."
   },
   "kit": {
    "en": "Offer decode · negotiation prep sheet",
    "id": "Bedah tawaran · lembar persiapan negosiasi"
   },
   "lessons": [
    {
     "n": "10.1",
     "title": {
      "en": "Total Compensation Anatomy",
      "id": "Anatomi Kompensasi Total"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Base salary is one line of a longer equation: bonus and its real attainment, allowances, insurance, retirement contributions, leave, learning budget, equipment — and the invisible lines: title, scope, manager quality, growth rate. Two offers with the same base can differ by a quarter of real value.",
      "id": "Gaji pokok hanyalah satu baris dari persamaan yang lebih panjang: bonus dan realisasinya yang sebenarnya, tunjangan, asuransi, iuran pensiun, cuti, anggaran belajar, peralatan — dan baris-baris yang tidak terlihat: jabatan, ruang lingkup, kualitas atasan, laju pertumbuhan. Dua tawaran dengan gaji pokok yang sama bisa berbeda nilai nyata sampai seperempatnya."
     },
     "objectives": [
      {
       "en": "Itemise an offer into its full compensation components.",
       "id": "Merinci sebuah tawaran menjadi komponen kompensasinya yang lengkap."
      },
      {
       "en": "Ask the questions that reveal a bonus's real value.",
       "id": "Mengajukan pertanyaan yang mengungkap nilai bonus yang sebenarnya."
      },
      {
       "en": "Weigh invisible compensation: scope, growth, manager, learning.",
       "id": "Menimbang kompensasi yang tidak terlihat: ruang lingkup, pertumbuhan, atasan, kesempatan belajar."
      }
     ],
     "takeawaysLead": {
      "en": "Base salary is one line of a longer equation, and the invisible lines appear in your career rather than the letter. To compare offers honestly, you can:",
      "id": "Gaji pokok hanyalah satu baris dari persamaan yang lebih panjang, dan baris-baris tak terlihat muncul di kariermu, bukan di surat. Untuk membandingkan tawaran dengan jujur, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Compare offers on total annual value, not base salary.",
       "id": "Bandingkan tawaran berdasarkan nilai total per tahun, bukan gaji pokok."
      },
      {
       "en": "A “performance bonus” is worth its typical attainment, not its maximum — ask for the typical.",
       "id": "“Bonus kinerja” nilainya sebesar yang lazim benar-benar diterima, bukan maksimumnya — tanyakan angka yang lazim itu."
      },
      {
       "en": "Early career, growth rate often outvalues salary delta; price it deliberately.",
       "id": "Di awal karier, laju pertumbuhan sering lebih bernilai daripada selisih gaji; beri harga dengan sengaja."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "The visible lines",
        "id": "Baris-baris yang terlihat"
       },
       "body": {
        "en": "List every component with an annual number: base × 12 (or 13 where a religious-holiday allowance applies), realistic bonus, transport and meal allowances, insurance premiums the company pays, retirement contributions, paid leave days at their daily value, learning budget, device policy. The spreadsheet takes twenty minutes and regularly reverses which offer is “higher”.",
        "id": "Daftar setiap komponen dengan angka tahunan: gaji pokok × 12 (atau × 13 kalau ada THR), bonus yang realistis, tunjangan transportasi dan makan, premi asuransi yang dibayar perusahaan, iuran pensiun, hari cuti berbayar dengan nilai hariannya, anggaran belajar, kebijakan perangkat kerja. Spreadsheet-nya hanya butuh dua puluh menit, dan sering kali membalikkan tawaran mana yang sebenarnya “lebih tinggi”."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "The invisible lines",
        "id": "Baris-baris yang tidak terlihat"
       },
       "body": {
        "en": "Scope: will you own something, or assist someone who does? Growth rate: what did the last person in this seat learn per year? Manager: a great one compounds your value for a decade. Brand and network: doors this name opens later. None of these appear in the letter; all of them appear in your career. Score them one to five, deliberately, next to the money.",
        "id": "Ruang lingkup: apakah kamu akan memegang sesuatu, atau membantu orang yang memegangnya? Laju pertumbuhan: apa yang dipelajari orang sebelumnya di kursi ini setiap tahun? Atasan: atasan yang hebat melipatgandakan nilaimu selama satu dekade. Nama besar dan jejaring: pintu-pintu yang dibukakan nama ini di kemudian hari. Tidak satu pun dari ini muncul di surat tawaran; semuanya muncul di kariermu. Beri skor satu sampai lima, dengan sengaja, di samping angka uangnya."
       },
       "icon": "book"
      },
      {
       "icon": "target",
       "h": {
        "en": "Putting the two offers side by side",
        "id": "Menyandingkan dua tawaran"
       },
       "body": {
        "en": "The comparison only works when both offers sit on the same sheet, in the same units. Row by row: the visible lines as annual numbers, summed to a total annual value; then the invisible lines scored one to five — scope, growth rate, manager, brand and network — with one sentence of evidence beside each score so the number is not a mood. Two things regularly happen at this point. The offer that looked higher on base loses on total value once allowances, a thirteenth month or a realistic bonus are counted. And an offer that loses narrowly on money wins clearly on the invisible lines — a manager with a reputation for growing people, a scope you would own rather than assist — which, early in a career, compounds for longer than a salary gap does. The sheet does not make the decision; it makes the decision honest, and it becomes the basis for 8.2's range and 8.3's ask.",
        "id": "Perbandingan hanya bekerja bila kedua tawaran duduk di lembar yang sama, dengan satuan yang sama. Baris demi baris: baris-baris yang terlihat sebagai angka tahunan, dijumlahkan menjadi nilai tahunan total; lalu baris-baris tak terlihat dinilai satu sampai lima — lingkup, laju pertumbuhan, manajer, merek dan jaringan — dengan satu kalimat bukti di samping tiap skor agar angkanya bukan sekadar perasaan. Dua hal biasa terjadi di titik ini. Tawaran yang tampak lebih tinggi pada gaji pokok kalah pada nilai total begitu tunjangan, gaji ke-13, atau bonus realistis dihitung. Dan tawaran yang kalah tipis pada uang menang jelas pada baris tak terlihat — manajer yang dikenal menumbuhkan orang, lingkup yang akan kamu miliki alih-alih bantu — yang, di awal karier, bertumbuh lebih lama daripada selisih gaji. Lembar ini tidak membuat keputusan; ia membuat keputusan menjadi jujur, dan menjadi dasar bagi rentang di 8.2 dan permintaan di 8.3."
       }
      }
     ],
     "diagram": {
      "type": "ring",
      "title": {
       "en": "Total compensation — the whole equation",
       "id": "Kompensasi total — persamaan yang utuh"
      },
      "items": [
       {
        "h": {
         "en": "Base salary",
         "id": "Gaji pokok"
        },
        "sub": {
         "en": "×12 or ×13 with the holiday allowance",
         "id": "×12, atau ×13 dengan THR"
        }
       },
       {
        "h": {
         "en": "Bonus",
         "id": "Bonus"
        },
        "sub": {
         "en": "Worth its TYPICAL attainment, not its maximum",
         "id": "Nilainya sebesar realisasi yang LAZIM, bukan maksimumnya"
        }
       },
       {
        "h": {
         "en": "Allowances & insurance",
         "id": "Tunjangan & asuransi"
        },
        "sub": {
         "en": "Transport, meals, premiums, retirement",
         "id": "Transportasi, makan, premi, pensiun"
        }
       },
       {
        "h": {
         "en": "Leave & learning",
         "id": "Cuti & belajar"
        },
        "sub": {
         "en": "Paid days, budget, equipment",
         "id": "Hari cuti berbayar, anggaran, peralatan"
        }
       },
       {
        "h": {
         "en": "Invisible lines",
         "id": "Baris yang tidak terlihat"
        },
        "sub": {
         "en": "Scope, growth rate, manager, network",
         "id": "Ruang lingkup, laju pertumbuhan, atasan, jejaring"
        }
       }
      ],
      "note": {
       "en": "Two offers with the same base can differ by a quarter of real value. Build the twenty-minute spreadsheet.",
       "id": "Dua tawaran dengan gaji pokok yang sama bisa berbeda nilai nyata sampai seperempatnya. Buat spreadsheet dua puluh menit itu."
      },
      "exhibit": {
       "en": "Exhibit 1: Total compensation — the whole equation",
       "id": "Peraga 1: Kompensasi total — persamaan yang utuh"
      },
      "longdesc": {
       "en": "Diagram of Total compensation — the whole equation. It presents, in order: Base salary — ×12 or ×13 with the holiday allowance; Bonus — Worth its TYPICAL attainment, not its maximum; Allowances & insurance — Transport, meals, premiums, retirement; Leave & learning — Paid days, budget, equipment; Invisible lines — Scope, growth rate, manager, network.",
       "id": "Diagram kompensasi total — persamaan yang utuh. Menyajikan, secara berurutan: Gaji pokok — ×12, atau ×13 dengan THR; Bonus — nilainya sebesar realisasi yang LAZIM, bukan maksimumnya; Tunjangan & asuransi — transportasi, makan, premi, pensiun; Cuti & belajar — hari cuti berbayar, anggaran, peralatan; Baris yang tidak terlihat — ruang lingkup, laju pertumbuhan, atasan, jejaring."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "total annual value",
        "id": "nilai tahunan total"
       },
       "def": {
        "en": "Every compensation component converted to a yearly number — base times twelve or thirteen, realistic bonus, allowances, insurance, retirement, leave, learning budget — the only basis on which two offers can be compared.",
        "id": "Setiap komponen kompensasi dikonversi ke angka tahunan — gaji pokok kali dua belas atau tiga belas, bonus realistis, tunjangan, asuransi, pensiun, cuti, anggaran belajar — satu-satunya dasar untuk membandingkan dua tawaran."
       }
      },
      {
       "term": {
        "en": "typical attainment",
        "id": "pencapaian lazim"
       },
       "def": {
        "en": "What a bonus actually pays in a normal year, as opposed to its advertised maximum — the number to ask for when a letter says “up to”.",
        "id": "Berapa bonus benar-benar dibayarkan di tahun normal, berbeda dari maksimum yang diiklankan — angka yang perlu ditanyakan ketika surat mengatakan “hingga”."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "An offer includes “up to 4 months bonus”. The right question is:",
        "id": "Sebuah tawaran mencantumkan “bonus hingga 4 bulan gaji”. Pertanyaan yang tepat:"
       },
       "options": [
        {
         "en": "Nothing — bonus terms are impolite to question",
         "id": "Tidak ada — menanyakan ketentuan bonus itu tidak sopan"
        },
        {
         "en": "“What did the typical person at this level actually receive last year?”",
         "id": "“Berapa yang benar-benar diterima orang di level ini pada umumnya tahun lalu?”"
        },
        {
         "en": "“Can you guarantee the maximum in writing?”",
         "id": "“Bisakah angka maksimumnya dijamin secara tertulis?”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Correct — “up to” is marketing; typical attainment is data. The question is normal and professionals ask it.",
        "id": "Benar — “hingga” adalah bahasa pemasaran; realisasi yang lazim adalah data. Pertanyaan itu wajar, dan para profesional menanyakannya."
       }
      },
      {
       "q": {
        "en": "Early in your career, the component that most often outvalues a salary delta is:",
        "id": "Di awal karier, komponen yang paling sering melampaui nilai selisih gaji adalah:"
       },
       "options": [
        {
         "en": "Growth rate — what the seat teaches per year",
         "id": "Laju pertumbuhan — apa yang diajarkan kursi itu setiap tahun"
        },
        {
         "en": "The meal allowance",
         "id": "Tunjangan makan"
        },
        {
         "en": "The office location",
         "id": "Lokasi kantor"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — capability compounds for decades; a small salary delta does not. Price growth deliberately.",
        "id": "Benar — kemampuan bertumbuh berlipat selama puluhan tahun; selisih gaji yang kecil tidak. Beri harga pada pertumbuhan dengan sengaja."
       }
      }
     ],
     "scenario": {
      "icon": "book",
      "img": "../../assets/bg/stage-activation.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat dalam Sorotan"
      },
      "body": [
       {
        "en": "Lia holds two offers. Company A: base salary 8% higher. Company B: a thirteenth-month allowance, full family insurance, a named learning budget, and a manager whose last three analysts were promoted within two years. Her friends say “take A, it pays more.” Her spreadsheet — twenty minutes of honest arithmetic — says B is worth more this year, and far more in three. This module builds that spreadsheet with you.",
        "id": "Lia memegang dua tawaran. Perusahaan A: gaji pokok 8% lebih tinggi. Perusahaan B: THR, asuransi keluarga penuh, anggaran belajar yang jelas, dan seorang atasan yang tiga analis terakhirnya dipromosikan dalam dua tahun. Teman-temannya bilang, “ambil A, gajinya lebih besar.” Spreadsheet-nya — dua puluh menit hitungan yang jujur — mengatakan B lebih bernilai tahun ini, dan jauh lebih bernilai dalam tiga tahun. Modul ini menyusun spreadsheet itu bersamamu."
       }
      ]
     },
     "insights": {
      "lead": {
       "en": "How employers build an offer.",
       "id": "Bagaimana pemberi kerja menyusun tawaran."
      },
      "items": [
       {
        "h": {
         "en": "There is a band, and you are placed in it",
         "id": "Ada rentang, dan kamu ditempatkan di dalamnya"
        },
        "body": {
         "en": "Most roles carry a salary band with a midpoint. The first number offered is usually below the midpoint for an external hire; the room to move is real and expected.",
         "id": "Sebagian besar peran punya rentang gaji dengan titik tengah. Angka pertama yang ditawarkan biasanya di bawah titik tengah untuk rekrutan eksternal; ruang untuk bergerak itu nyata dan diharapkan."
        }
       },
       {
        "h": {
         "en": "Non-salary items cost the company less",
         "id": "Item non-gaji lebih murah bagi perusahaan"
        },
        "body": {
         "en": "Start date, learning budget, title, equipment and a six-month review are often easier to grant than base — and some are worth more to you.",
         "id": "Tanggal mulai, anggaran belajar, jabatan, peralatan, dan tinjauan enam bulan sering lebih mudah diberikan daripada gaji pokok — dan sebagian bernilai lebih bagimu."
        }
       },
       {
        "h": {
         "en": "The offer conversation is remembered",
         "id": "Percakapan tawaran diingat"
        },
        "body": {
         "en": "A calm, evidence-based ask raises the manager’s opinion of you before day one. A silent acceptance leaves value on the table and teaches nothing.",
         "id": "Permintaan yang tenang dan berbasis bukti meningkatkan pandangan manajer tentangmu sebelum hari pertama. Penerimaan diam meninggalkan nilai di meja dan tak mengajarkan apa pun."
        }
       }
      ]
     },
     "resources": {
      "items": [
       {
        "kind": "worksheet",
        "title": {
         "en": "Total compensation calculator",
         "id": "Kalkulator kompensasi total"
        },
        "desc": {
         "en": "Fill both columns for every offer. Annual figures.",
         "id": "Isi kedua kolom untuk setiap tawaran. Angka tahunan."
        },
        "body": [
         {
          "en": "Base salary × 12 (or × 13 if a religious-holiday allowance / THR is paid): …",
          "id": "Gaji pokok × 12 (atau × 13 jika THR dibayarkan): …"
         },
         {
          "en": "Bonus at realistic attainment (ask for the last two years’ average): …",
          "id": "Bonus pada pencapaian realistis (tanyakan rata-rata dua tahun terakhir): …"
         },
         {
          "en": "Fixed allowances (transport, meals, housing, phone): …",
          "id": "Tunjangan tetap (transportasi, makan, perumahan, telepon): …"
         },
         {
          "en": "Employer contributions (health, pension / retirement, social security): …",
          "id": "Iuran pemberi kerja (kesehatan, pensiun, jaminan sosial): …"
         },
         {
          "en": "Leave beyond the legal minimum, valued at daily base rate: …",
          "id": "Cuti di atas minimum hukum, dinilai pada tarif harian gaji pokok: …"
         },
         {
          "en": "Learning budget, equipment, certifications paid: …",
          "id": "Anggaran belajar, peralatan, sertifikasi yang dibayar: …"
         },
         {
          "en": "TOTAL cash + benefits: …",
          "id": "TOTAL tunai + tunjangan: …"
         },
         {
          "en": "Invisible lines (score 1–5 each): title, scope, manager, learning, brand, commute. These break ties and often decide.",
          "id": "Baris tak terlihat (nilai 1–5 masing-masing): jabatan, lingkup, manajer, pembelajaran, merek, perjalanan. Ini memutuskan seri dan sering menentukan."
         }
        ]
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Comparing base to base",
         "id": "Membandingkan gaji pokok dengan gaji pokok"
        },
        "fix": {
         "en": "Bonus attainment, allowances, insurance, retirement and leave move the real number by a lot. Compare totals.",
         "id": "Pencapaian bonus, tunjangan, asuransi, pensiun, dan cuti menggeser angka sebenarnya secara signifikan. Bandingkan totalnya."
        }
       },
       {
        "h": {
         "en": "Taking the bonus at target",
         "id": "Mengambil bonus pada target"
        },
        "fix": {
         "en": "Ask what the average payout was for the last two years. Target and actual are different numbers.",
         "id": "Tanyakan berapa rata-rata pembayaran dua tahun terakhir. Target dan aktual adalah angka yang berbeda."
        }
       },
       {
        "h": {
         "en": "Forgetting the invisible lines",
         "id": "Melupakan baris yang tak terlihat"
        },
        "fix": {
         "en": "Title, scope, manager quality and learning are compensation too. They compound; the allowance does not.",
         "id": "Jabatan, lingkup, kualitas manajer, dan pembelajaran juga kompensasi. Mereka bertumbuh; tunjangan tidak."
        }
       }
      ]
     },
     "migratedFrom": "the-rope:8.1"
    },
    {
     "n": "10.2",
     "title": {
      "en": "Market Rate Research Methodology",
      "id": "Metode Riset Harga Pasar"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "“What are your salary expectations?” is only frightening without data. The research method triangulates three sources — published salary guides, job ads that state ranges, and real conversations with people near the role — into a defensible range you can say out loud without flinching.",
      "id": "“Berapa ekspektasi gaji Anda?” hanya menakutkan kalau kamu tidak punya data. Metode risetnya menyilangkan tiga sumber — panduan gaji yang diterbitkan, iklan lowongan yang mencantumkan rentang, dan percakapan sungguhan dengan orang-orang di sekitar posisi itu — menjadi rentang yang bisa dipertahankan dan kamu ucapkan tanpa ragu."
     },
     "objectives": [
      {
       "en": "Triangulate a salary range from three independent source types.",
       "id": "Menyilangkan rentang gaji dari tiga jenis sumber yang saling independen."
      },
      {
       "en": "Adjust for company stage, industry and your leverage honestly.",
       "id": "Menyesuaikannya dengan tahap perusahaan, industri, dan daya tawarmu secara jujur."
      },
      {
       "en": "Deliver the range with its reasoning in one practised sentence.",
       "id": "Menyampaikan rentang itu beserta alasannya dalam satu kalimat yang sudah dilatih."
      }
     ],
     "takeawaysLead": {
      "en": "A salary question is only frightening without data. To build a range you can say out loud and defend, you can:",
      "id": "Pertanyaan soal gaji hanya menakutkan tanpa data. Untuk membangun rentang yang bisa kamu ucapkan dan pertahankan, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "One source is a guess; three sources agreeing is a range you can defend.",
       "id": "Satu sumber adalah tebakan; tiga sumber yang sepakat adalah rentang yang bisa kamu pertahankan."
      },
      {
       "en": "People share salary information more readily than folklore claims — ask for ranges, not numbers.",
       "id": "Orang lebih terbuka berbagi informasi gaji daripada yang dikira — mintalah rentang, bukan angka pribadi."
      },
      {
       "en": "State the range with its basis: “based on market data for this role and level…”",
       "id": "Sampaikan rentang beserta dasarnya: “berdasarkan data pasar untuk posisi dan level ini…”"
      }
     ],
     "sections": [
      {
       "h": {
        "en": "The three sources",
        "id": "Tiga sumbernya"
       },
       "body": {
        "en": "Published guides from recruitment firms give the wide band by role, level and city. Job advertisements that state ranges give the live market — collect five for your target role. Conversations give the truth behind both: ask people one step ahead of you, “for someone at my level in this kind of company, what range is realistic?” Ranges, not personal numbers — people answer that question.",
        "id": "Panduan gaji terbitan firma rekrutmen memberi kisaran lebar berdasarkan posisi, level, dan kota. Iklan lowongan yang mencantumkan rentang memberi gambaran pasar yang hidup — kumpulkan lima untuk posisi yang kamu tuju. Percakapan memberi kebenaran di balik keduanya: tanyai orang yang selangkah di depanmu, “untuk seseorang di level saya di perusahaan seperti ini, rentang berapa yang realistis?” Rentang, bukan angka pribadi — pertanyaan seperti itu dijawab orang."
       }
      },
      {
       "h": {
        "en": "Adjustments and honesty",
        "id": "Penyesuaian dan kejujuran"
       },
       "body": {
        "en": "Adjust for stage: startups pay differently from multinationals, and partly in learning and scope. Adjust for your leverage: competing offers move you up the band; urgency moves you down it. Then commit to a range whose bottom you would genuinely accept — a range you would refuse is a bluff, and module 5 already covered how bluffs end.",
        "id": "Sesuaikan dengan tahap perusahaan: startup membayar berbeda dari perusahaan multinasional, sebagian dalam bentuk kesempatan belajar dan ruang lingkup. Sesuaikan dengan daya tawarmu: tawaran dari perusahaan lain menaikkanmu di dalam kisaran; keterdesakan menurunkanmu. Lalu tetapkan rentang yang batas bawahnya benar-benar akan kamu terima — rentang yang akan kamu tolak sendiri adalah gertakan, dan Modul 6 sudah membahas bagaimana gertakan berakhir."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "Saying the range out loud",
        "id": "Mengucapkan rentang itu"
       },
       "body": {
        "en": "The research is wasted if the sentence falls apart in the room. The practised form is one breath long and carries its basis: “Based on market data for this role and level in Jakarta, and the scope we've discussed, I'm looking at X to Y.” The basis matters more than the numbers — it converts a demand into a reasoned position, and it invites the recruiter to respond with their band rather than with silence. Three habits keep the sentence steady. State the range once and stop; the pause after it is the recruiter's, not yours to fill with a discount. If asked for a single number, give the upper-middle of the range with the same basis. And if asked early — in the HR screen, before any offer exists — answer with the range rather than deflecting; a researched range delivered calmly is itself evidence of the professionalism the screen is testing for, and it anchors every later conversation at a number you chose.",
        "id": "Riset itu sia-sia jika kalimatnya berantakan di ruangan. Bentuk yang sudah dilatih sepanjang satu tarikan napas dan membawa dasarnya: “Berdasarkan data pasar untuk peran dan level ini di Jakarta, dan lingkup yang sudah kita bahas, saya melihat kisaran X sampai Y.” Dasarnya lebih penting daripada angkanya — ia mengubah tuntutan menjadi posisi yang bernalar, dan mengundang perekrut menjawab dengan rentang mereka alih-alih dengan keheningan. Tiga kebiasaan menjaga kalimat itu tetap mantap. Sebutkan rentang sekali lalu berhenti; jeda setelahnya milik perekrut, bukan untuk kamu isi dengan diskon. Bila diminta satu angka, berikan bagian tengah-atas rentang dengan dasar yang sama. Dan bila ditanya lebih awal — di seleksi HR, sebelum tawaran apa pun ada — jawab dengan rentang alih-alih mengelak; rentang hasil riset yang disampaikan dengan tenang adalah bukti profesionalisme yang sedang diuji seleksi itu, dan ia menjangkarkan setiap percakapan berikutnya pada angka yang kamu pilih."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "Triangulating your range",
       "id": "Menyilangkan sumber untuk rentangmu"
      },
      "items": [
       {
        "h": {
         "en": "Salary guides",
         "id": "Panduan gaji"
        },
        "sub": {
         "en": "The wide band by role, level, city",
         "id": "Kisaran lebar berdasarkan posisi, level, kota"
        }
       },
       {
        "h": {
         "en": "Job ads with ranges",
         "id": "Iklan lowongan dengan rentang"
        },
        "sub": {
         "en": "The live market — collect five",
         "id": "Pasar yang hidup — kumpulkan lima"
        }
       },
       {
        "h": {
         "en": "Conversations",
         "id": "Percakapan"
        },
        "sub": {
         "en": "Ask for ranges, not personal numbers",
         "id": "Minta rentang, bukan angka pribadi"
        }
       },
       {
        "h": {
         "en": "Your range",
         "id": "Rentangmu"
        },
        "sub": {
         "en": "Bottom you would genuinely accept",
         "id": "Batas bawah yang benar-benar akan kamu terima"
        }
       }
      ],
      "note": {
       "en": "One source is a guess; three agreeing is a range you can say out loud without flinching.",
       "id": "Satu sumber adalah tebakan; tiga yang sepakat adalah rentang yang bisa kamu ucapkan tanpa ragu."
      },
      "exhibit": {
       "en": "Exhibit 1: Triangulating your range",
       "id": "Peraga 1: Menyilangkan sumber untuk rentangmu"
      },
      "longdesc": {
       "en": "Diagram of Triangulating your range. It presents, in order: Salary guides — The wide band by role, level, city; Job ads with ranges — The live market — collect five; Conversations — Ask for ranges, not personal numbers; Your range — Bottom you would genuinely accept.",
       "id": "Diagram menyilangkan sumber untuk rentangmu. Menyajikan, secara berurutan: Panduan gaji — kisaran lebar berdasarkan posisi, level, kota; Iklan lowongan dengan rentang — pasar yang hidup, kumpulkan lima; Percakapan — minta rentang, bukan angka pribadi; Rentangmu — batas bawah yang benar-benar akan kamu terima."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "triangulation",
        "id": "triangulasi"
       },
       "def": {
        "en": "Combining three independent source types — published salary guides, job advertisements that state ranges, and conversations with people one step ahead — into one defensible range.",
        "id": "Menggabungkan tiga jenis sumber independen — panduan gaji yang dipublikasikan, iklan lowongan yang mencantumkan rentang, dan percakapan dengan orang yang selangkah di depan — menjadi satu rentang yang bisa dipertahankan."
       }
      },
      {
       "term": {
        "en": "walk-away bottom",
        "id": "batas bawah yang sungguh diterima"
       },
       "def": {
        "en": "The lowest number in your stated range, chosen so that you would genuinely accept it — a range whose bottom you would refuse is a bluff.",
        "id": "Angka terendah dalam rentang yang kamu sebutkan, dipilih agar kamu benar-benar mau menerimanya — rentang yang batas bawahnya akan kamu tolak adalah gertakan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "The strongest basis for your stated range is:",
        "id": "Dasar terkuat untuk rentang yang kamu sebutkan adalah:"
       },
       "options": [
        {
         "en": "What your friend at a different company earns",
         "id": "Gaji temanmu di perusahaan yang berbeda"
        },
        {
         "en": "Your current salary plus a fixed percentage",
         "id": "Gaji sekarang ditambah persentase tetap"
        },
        {
         "en": "Three independent sources that roughly agree",
         "id": "Tiga sumber independen yang kurang lebih sepakat"
        }
       ],
       "correct": 2,
       "why": {
        "en": "Correct — triangulation. A single data point, especially your own history, anchors you to noise.",
        "id": "Benar — menyilangkan sumber. Satu titik data, apalagi riwayat gajimu sendiri, hanya menambatkanmu pada derau."
       }
      }
     ],
     "tryit": {
      "qid": "hr06",
      "label": {
       "en": "Deliver your range without flinching",
       "id": "Sampaikan rentangmu tanpa ragu"
      },
      "desc": {
       "en": "“What are your salary expectations?” — anchored, ranged, conditional.",
       "id": "“Berapa ekspektasi gaji Anda?” — berpatokan pada data, berupa rentang, bersyarat."
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "One source, one number",
         "id": "Satu sumber, satu angka"
        },
        "fix": {
         "en": "Triangulate: published guides, job ads with ranges, and two conversations with people near the role. Take the overlap.",
         "id": "Triangulasi: panduan yang dipublikasikan, iklan lowongan dengan rentang, dan dua percakapan dengan orang di sekitar peran itu. Ambil irisannya."
        }
       },
       {
        "h": {
         "en": "Asking strangers “what do you earn?”",
         "id": "Menanyai orang asing “berapa gajimu?”"
        },
        "fix": {
         "en": "Ask about the range for the role and level, not their personal number. People answer that readily.",
         "id": "Tanyakan rentang untuk peran dan levelnya, bukan angka pribadi mereka. Orang menjawab itu dengan mudah."
        }
       },
       {
        "h": {
         "en": "Ignoring company size and industry",
         "id": "Mengabaikan ukuran perusahaan dan industri"
        },
        "fix": {
         "en": "The same title pays differently in a bank, a start-up and a state-owned enterprise. Benchmark within the segment.",
         "id": "Jabatan yang sama dibayar berbeda di bank, start-up, dan BUMN. Bandingkan dalam segmennya."
        }
       }
      ]
     },
     "migratedFrom": "the-rope:8.2"
    },
    {
     "n": "10.3",
     "title": {
      "en": "The Negotiation Conversation Script",
      "id": "Naskah Percakapan Negosiasi"
     },
     "kind": "interactive",
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Negotiation is one conversation, usually under fifteen minutes, that can be worth months of salary — and most candidates skip it out of fear the offer will vanish. It almost never does. This lesson gives the timing, the script skeleton, and the non-salary levers, then drills the three moments people fumble.",
      "id": "Negosiasi adalah satu percakapan, biasanya kurang dari lima belas menit, yang bisa bernilai berbulan-bulan gaji — dan kebanyakan kandidat melewatkannya karena takut tawarannya lenyap. Itu hampir tidak pernah terjadi. Pelajaran ini memberimu waktunya, kerangka naskahnya, dan tuas-tuas di luar gaji, lalu melatih tiga momen yang paling sering membuat orang tergagap."
     },
     "objectives": [
      {
       "en": "Time the negotiation correctly: after the offer, before acceptance.",
       "id": "Menempatkan negosiasi pada waktu yang tepat: setelah tawaran, sebelum menerima."
      },
      {
       "en": "Run the appreciation → enthusiasm → ask → silence sequence.",
       "id": "Menjalankan urutan apresiasi → antusiasme → permintaan → diam."
      },
      {
       "en": "Deploy non-salary levers when the base is fixed.",
       "id": "Memakai tuas-tuas di luar gaji ketika gaji pokoknya tidak bisa bergerak."
      }
     ],
     "takeawaysLead": {
      "en": "One conversation under fifteen minutes can be worth months of salary, and the offer almost never vanishes. To run it professionally, you can:",
      "id": "Satu percakapan kurang dari lima belas menit bisa bernilai berbulan-bulan gaji, dan tawaran hampir tak pernah lenyap. Untuk menjalankannya secara profesional, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Companies expect negotiation; a professional ask has never reasonably cancelled an offer.",
       "id": "Perusahaan memang mengharapkan negosiasi; permintaan yang profesional tidak pernah secara wajar membatalkan sebuah tawaran."
      },
      {
       "en": "Ask once, clearly, with your researched basis — then stop talking.",
       "id": "Minta sekali, dengan jelas, dengan dasar risetmu — lalu berhenti bicara."
      },
      {
       "en": "Start date, sign-on, learning budget, review timing, title: levers that move when salary cannot.",
       "id": "Tanggal mulai, bonus penandatanganan, anggaran belajar, waktu peninjauan gaji, jabatan: tuas-tuas yang bisa bergerak ketika gaji tidak bisa."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "Timing and channel",
        "id": "Waktu dan salurannya"
       },
       "body": {
        "en": "Negotiate after a written offer exists and before you accept — never during interviews, never after signing. A call beats email for the conversation itself; email confirms what was agreed. If asked for your number early in the process, give the researched range and move on; the real conversation happens when they have already chosen you.",
        "id": "Negosiasikan setelah tawaran tertulis ada dan sebelum kamu menerimanya — jangan pernah selama wawancara, jangan pernah setelah tanda tangan. Untuk percakapannya sendiri, telepon lebih baik daripada email; email dipakai untuk mengonfirmasi apa yang sudah disepakati. Kalau dimintai angka di awal proses, sampaikan rentang hasil risetmu dan lanjutkan; percakapan yang sesungguhnya terjadi ketika mereka sudah memilihmu."
       }
      },
      {
       "h": {
        "en": "The script skeleton",
        "id": "Kerangka naskahnya"
       },
       "body": {
        "en": "Appreciation: thank them, specifically. Enthusiasm: you want this role — say it, because it makes the ask collaborative, not adversarial. The ask: “based on my research for this role and level — X to Y — is there room to move the base toward Z?” Silence: the hardest beat. They speak next, whatever the pause costs you in heartbeats.",
        "id": "Apresiasi: ucapkan terima kasih, secara spesifik. Antusiasme: kamu menginginkan posisi ini — katakan, karena itu membuat permintaanmu terasa kolaboratif, bukan berhadap-hadapan. Permintaan: “berdasarkan riset saya untuk posisi dan level ini — X sampai Y — apakah ada ruang untuk menggerakkan gaji pokok mendekati Z?” Diam: ketukan yang paling sulit. Merekalah yang bicara berikutnya, berapa pun detak jantung yang harus kamu bayar untuk jeda itu."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: The negotiation script — four moves, one ask, then silence.",
       "id": "Peraga 1: Naskah negosiasi — empat langkah, satu permintaan, lalu diam."
      },
      "title": {
       "en": "Appreciation → Enthusiasm → The ask → Silence → Confirm in writing",
       "id": "Apresiasi → Antusiasme → Permintaan → Diam → Konfirmasi tertulis"
      },
      "items": [
       {
        "h": {
         "en": "Appreciation",
         "id": "Apresiasi"
        },
        "sub": {
         "en": "Thank them, specifically",
         "id": "Berterima kasih, secara spesifik"
        }
       },
       {
        "h": {
         "en": "Enthusiasm",
         "id": "Antusiasme"
        },
        "sub": {
         "en": "“I want this role” — it makes the ask collaborative",
         "id": "“Saya menginginkan peran ini” — membuat permintaan menjadi kolaboratif"
        }
       },
       {
        "h": {
         "en": "The ask",
         "id": "Permintaan"
        },
        "sub": {
         "en": "“Based on my research for this role and level — X to Y”",
         "id": "“Berdasarkan riset saya untuk peran dan level ini — X sampai Y”"
        }
       },
       {
        "h": {
         "en": "Silence",
         "id": "Diam"
        },
        "sub": {
         "en": "Ask once, clearly, then stop talking",
         "id": "Minta sekali, dengan jelas, lalu berhenti bicara"
        }
       },
       {
        "h": {
         "en": "Confirm in writing",
         "id": "Konfirmasi tertulis"
        },
        "sub": {
         "en": "Email restates what was agreed — the letter is the deal",
         "id": "Email menyatakan ulang yang disepakati — suratnya adalah kesepakatannya"
        }
       }
      ],
      "note": {
       "en": "If the salary budget is fixed: pivot to the non-salary levers in the same conversation.",
       "id": "Jika anggaran gaji tetap: beralih ke tuas non-gaji dalam percakapan yang sama."
      },
      "longdesc": {
       "en": "A five-step flow: thank the company specifically; state that you want the role; make one clear researched ask as a range; stop talking and let them respond; and confirm whatever is agreed in writing. The note covers the pivot to non-salary levers when the salary budget is fixed.",
       "id": "Alur lima langkah: berterima kasih kepada perusahaan secara spesifik; nyatakan bahwa kamu menginginkan peran itu; ajukan satu permintaan jelas hasil riset dalam bentuk rentang; berhenti bicara dan biarkan mereka merespons; dan konfirmasi apa pun yang disepakati secara tertulis. Catatannya membahas peralihan ke tuas non-gaji ketika anggaran gaji tetap."
      }
     },
     "steps": [
      {
       "h": {
        "en": "Drill 1 · Say the ask aloud",
        "id": "Latihan 1 · Ucapkan permintaannya dengan suara keras"
       },
       "body": {
        "en": "Write your ask sentence with your real range and basis, and say it aloud five times, ending in silence each time.",
        "id": "Tulis kalimat permintaanmu dengan rentang dan dasar yang sebenarnya, lalu ucapkan dengan suara keras lima kali, setiap kali diakhiri dengan diam."
       },
       "debrief": {
        "en": "The fifth repetition should sound boring — that is the target. Boring means the adrenaline has left the sentence, and what remains is a professional stating market data. That tone is what moves offers.",
        "id": "Pengulangan kelima seharusnya terdengar membosankan — itulah targetnya. Membosankan berarti adrenalin sudah meninggalkan kalimat itu, dan yang tersisa adalah seorang profesional yang menyampaikan data pasar. Nada seperti itulah yang menggerakkan tawaran."
       }
      },
      {
       "h": {
        "en": "Drill 2 · The “budget is fixed” pivot",
        "id": "Latihan 2 · Beralih saat “anggarannya sudah tetap”"
       },
       "body": {
        "en": "They respond: “the base is fixed for this level.” Draft your next sentence using two non-salary levers.",
        "id": "Mereka menjawab: “gaji pokok untuk level ini sudah tetap.” Susun kalimat berikutmu dengan memakai dua tuas di luar gaji."
       },
       "debrief": {
        "en": "Model: “Understood. Could we then look at a sign-on to bridge the gap, and a written six-month review with a defined raise path?” Fixed bases are often true; fixed everything rarely is. The pivot keeps the collaboration alive and regularly recovers most of the gap.",
        "id": "Contoh: “Saya mengerti. Kalau begitu, bisakah kita melihat bonus penandatanganan untuk menjembatani selisihnya, dan peninjauan enam bulan yang tertulis dengan jalur kenaikan yang jelas?” Gaji pokok yang tetap sering kali memang benar; semuanya tetap jarang benar. Peralihan ini menjaga kolaborasi tetap hidup, dan sering kali memulihkan sebagian besar selisihnya."
       }
      },
      {
       "h": {
        "en": "Drill 3 · Two offers, one conversation",
        "id": "Latihan 3 · Dua tawaran, satu percakapan"
       },
       "body": {
        "en": "You hold a competing offer. Draft the sentence that uses it honestly — no bluffing, no ultimatum.",
        "id": "Kamu memegang tawaran dari perusahaan lain. Susun kalimat yang memakainya dengan jujur — tanpa gertakan, tanpa ultimatum."
       },
       "debrief": {
        "en": "Model: “I want to be transparent: I have another offer at X. This role is my first choice — if you can approach that number, I'm ready to accept.” Truthful leverage plus a clear preference plus a commitment. Never invent an offer; module 4's rule about reference checks has a sibling here — verification happens.",
        "id": "Contoh: “Saya ingin transparan: saya memegang tawaran lain sebesar X. Posisi ini adalah pilihan pertama saya — kalau angkanya bisa didekati, saya siap menerima.” Daya tawar yang jujur plus preferensi yang jelas plus komitmen. Jangan pernah mengarang tawaran; aturan dari Modul 5 tentang pemeriksaan referensi punya saudara kembar di sini — verifikasi itu benar-benar terjadi."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "The ask",
        "id": "Permintaannya"
       },
       "weak": {
        "en": "I was kind of hoping for maybe a bit more, if that's possible? But it's okay if not, I understand, the offer is already good…",
        "id": "Sebenarnya saya agak berharap mungkin bisa sedikit lebih, kalau memungkinkan? Tapi tidak apa-apa kalau tidak bisa, saya mengerti, tawarannya sudah bagus kok…"
       },
       "strong": {
        "en": "Thank you — I'm genuinely excited about this role. Based on my research for this position and level, the market sits at X to Y. Is there room to move the base toward Z?",
        "id": "Terima kasih — saya sungguh antusias dengan posisi ini. Berdasarkan riset saya untuk posisi dan level ini, pasarnya berada di X sampai Y. Apakah ada ruang untuk menggerakkan gaji pokok mendekati Z?"
       },
       "why": {
        "en": "The weak ask negotiates against itself before they answer. The strong one: appreciation, enthusiasm, researched anchor, one clear ask — then silence.",
        "id": "Permintaan yang lemah menawar merugikan diri sendiri sebelum mereka sempat menjawab. Yang kuat: apresiasi, antusiasme, patokan hasil riset, satu permintaan yang jelas — lalu diam."
       }
      }
     ],
     "listen": [
      {
       "label": {
        "en": "The ask, in the tone that moves offers",
        "id": "Permintaan itu, dengan nada yang menggerakkan tawaran"
       },
       "text": {
        "en": "Thank you for the offer — I'm genuinely excited about this role and this team. Based on my research for this position and level, the market sits between the numbers I shared. Is there room to move the base toward the top of that range?",
        "id": "Terima kasih atas tawarannya — saya sungguh antusias dengan posisi dan tim ini. Berdasarkan riset saya untuk posisi dan level ini, pasarnya berada di antara angka yang saya sampaikan. Apakah ada ruang untuk menggerakkan gaji pokok mendekati batas atas rentang itu?"
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "You receive an offer at the bottom of your researched range. Your move:",
        "id": "Kamu menerima tawaran di batas bawah rentang hasil risetmu. Langkahmu:"
       },
       "options": [
        {
         "en": "Thank them warmly, restate enthusiasm, present your range with its basis, ask, then be silent",
         "id": "Berterima kasih dengan hangat, tegaskan antusiasme, sampaikan rentangmu beserta dasarnya, minta, lalu diam"
        },
        {
         "en": "Accept immediately before they change their mind",
         "id": "Langsung terima sebelum mereka berubah pikiran"
        },
        {
         "en": "Decline to signal your market value",
         "id": "Tolak untuk menunjukkan nilai pasarmu"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — the four-beat script. The silence after the ask is where the movement happens; do not fill it.",
        "id": "Benar — naskah empat ketukan. Diam setelah permintaan adalah saat pergerakan terjadi; jangan mengisinya."
       }
      }
     ],
     "tryit": {
      "qid": "dc15",
      "label": {
       "en": "Defend the jump",
       "id": "Pertahankan lompatannya"
      },
      "desc": {
       "en": "“Why are you worth well above your current salary?” — price the role, not your history.",
       "id": "“Mengapa Anda layak digaji jauh di atas gaji Anda sekarang?” — beri harga pada posisinya, bukan pada riwayatmu."
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Negotiating against yourself in the ask",
         "id": "Menawar merugikan diri sendiri di dalam permintaan"
        },
        "fix": {
         "en": "No “but it's okay if not…” — appreciation, enthusiasm, researched range, one ask, then silence.",
         "id": "Jangan ada “tapi tidak apa-apa kalau tidak bisa…” — apresiasi, antusiasme, rentang hasil riset, satu permintaan, lalu diam."
        }
       },
       {
        "h": {
         "en": "Inventing a competing offer",
         "id": "Mengarang tawaran dari perusahaan lain"
        },
        "fix": {
         "en": "Verification exists. Use leverage only when it is real, and pair it with a clear preference.",
         "id": "Verifikasi itu benar-benar terjadi. Pakai daya tawar hanya kalau memang nyata, dan sandingkan dengan preferensi yang jelas."
        }
       },
       {
        "h": {
         "en": "Accepting on the call out of relief",
         "id": "Menerima saat itu juga karena lega"
        },
        "fix": {
         "en": "Thank them, ask for the letter, take a day. Nothing legitimate evaporates overnight.",
         "id": "Ucapkan terima kasih, minta suratnya, ambil waktu sehari. Tidak ada tawaran yang sah yang lenyap dalam semalam."
        }
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "negotiation",
        "id": "negosiasi"
       },
       "def": {
        "en": "The conversation after a written offer and before acceptance where terms can move — expected, when done professionally.",
        "id": "Percakapan setelah tawaran tertulis dan sebelum kamu menerimanya, ketika syarat-syarat masih bisa bergerak — hal yang wajar, kalau dilakukan secara profesional."
       }
      },
      {
       "term": {
        "en": "non-salary levers",
        "id": "tuas non-gaji"
       },
       "def": {
        "en": "Start date, sign-on bonus, learning budget, review timing, title — the items a fixed salary budget can still move, asked for in the same conversation.",
        "id": "Tanggal mulai, bonus penandatanganan, anggaran belajar, waktu tinjauan, jabatan — hal-hal yang masih bisa digerakkan oleh anggaran gaji yang tetap, diminta dalam percakapan yang sama."
       }
      }
     ],
     "resources": {
      "items": [
       {
        "kind": "script",
        "title": {
         "en": "The negotiation conversation",
         "id": "Percakapan negosiasi"
        },
        "desc": {
         "en": "Fifteen minutes. Warm, specific, easy to say yes to.",
         "id": "Lima belas menit. Hangat, spesifik, mudah disetujui."
        },
        "body": [
         {
          "en": "OPEN: “Thank you — I’m excited about the role and the team, and I want to make this work. I’d like to talk through two parts of the offer.”",
          "id": "BUKA: “Terima kasih — saya antusias dengan peran dan timnya, dan ingin ini berhasil. Saya ingin membahas dua bagian dari tawaran ini.”"
         },
         {
          "en": "ANCHOR WITH EVIDENCE: “Based on [sources] for this level and scope, the range I’m seeing is [X–Y]. The offer is at [Z]. Is there room to bring the base to [specific number]?”",
          "id": "JANGKAR DENGAN BUKTI: “Berdasarkan [sumber] untuk level dan lingkup ini, rentang yang saya lihat adalah [X–Y]. Tawarannya di [Z]. Adakah ruang untuk membawa gaji pokok ke [angka spesifik]?”"
         },
         {
          "en": "IF NO ON BASE: “I understand. Could we look at [sign-on / earlier review / title / learning budget / start date] instead?”",
          "id": "JIKA TIDAK PADA GAJI POKOK: “Saya mengerti. Bisakah kita melihat [bonus penandatanganan / tinjauan lebih awal / jabatan / anggaran belajar / tanggal mulai] sebagai gantinya?”"
         },
         {
          "en": "SILENCE: after the ask, stop talking. Let them respond.",
          "id": "KEHENINGAN: setelah meminta, berhenti bicara. Biarkan mereka merespons."
         },
         {
          "en": "CLOSE: “If we can get to [number or package], I’m ready to accept today. Could you confirm in writing?”",
          "id": "TUTUP: “Jika kita bisa sampai di [angka atau paket], saya siap menerima hari ini. Bisakah Anda mengonfirmasi secara tertulis?”"
         },
         {
          "en": "NEVER: threaten, invent a competing offer, or negotiate twice after a yes.",
          "id": "JANGAN PERNAH: mengancam, mengarang tawaran pesaing, atau bernegosiasi dua kali setelah ya."
         }
        ]
       }
      ]
     },
     "migratedFrom": "the-rope:8.3"
    },
    {
     "n": "10.4",
     "title": {
      "en": "Offer Letter Red Flags and Verbal vs Written Commitments",
      "id": "Tanda Bahaya di Surat Tawaran, dan Janji Lisan vs Tertulis"
     },
     "kind": "visual",
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "The letter is the deal; everything else is conversation. This visual walk covers the four zones to inspect before signing: compensation exactness, probation terms, scope and title precision, and the penalty clauses — plus the golden rule that verbal promises must become written ones before they count.",
      "id": "Suratnya adalah kesepakatannya; selebihnya hanya percakapan. Telusuran visual ini mencakup empat zona yang harus diperiksa sebelum tanda tangan: ketepatan kompensasi, ketentuan masa percobaan, ketepatan ruang lingkup dan jabatan, serta klausul penalti — plus aturan emasnya: janji lisan harus menjadi tertulis dulu sebelum bisa dihitung."
     },
     "objectives": [
      {
       "en": "Inspect the four risk zones of any offer letter.",
       "id": "Memeriksa empat zona risiko di surat tawaran mana pun."
      },
      {
       "en": "Convert verbal promises into written terms before signing.",
       "id": "Mengubah janji lisan menjadi ketentuan tertulis sebelum tanda tangan."
      },
      {
       "en": "Ask clarifying questions about unclear clauses without awkwardness.",
       "id": "Menanyakan klausul yang tidak jelas tanpa merasa canggung."
      }
     ],
     "takeawaysLead": {
      "en": "The letter is the deal; everything else is conversation. To read an offer the way it will one day be enforced, you can:",
      "id": "Suratnya adalah kesepakatannya; selebihnya hanya percakapan. Untuk membaca tawaran sebagaimana ia kelak ditegakkan, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "If it matters and it is not written, it does not exist yet — ask for the sentence.",
       "id": "Kalau penting dan belum tertulis, berarti belum ada — minta kalimatnya."
      },
      {
       "en": "Probation terms deserve the same reading as salary: length, criteria, and what happens after.",
       "id": "Ketentuan masa percobaan layak dibaca seteliti gaji: durasinya, kriterianya, dan apa yang terjadi setelahnya."
      },
      {
       "en": "Questions about the letter are normal diligence; discomfort with them is itself a signal.",
       "id": "Bertanya tentang isi surat adalah kehati-hatian yang normal; kalau mereka tidak nyaman ditanya, itu sendiri sebuah sinyal."
      }
     ],
     "hotspots": [
      {
       "x": 24,
       "y": 26,
       "h": {
        "en": "Compensation exactness",
        "id": "Ketepatan kompensasi"
       },
       "body": {
        "en": "Base amount and currency, allowance lines, bonus formula with its conditions, payment schedule. “Competitive bonus” is not a number; ask for the formula or the typical attainment in writing.",
        "id": "Nominal gaji pokok dan mata uangnya, baris-baris tunjangan, rumus bonus beserta syaratnya, jadwal pembayaran. “Bonus yang kompetitif” bukan angka; minta rumusnya, atau realisasi yang lazim, secara tertulis."
       }
      },
      {
       "x": 72,
       "y": 30,
       "h": {
        "en": "Probation terms",
        "id": "Ketentuan masa percobaan"
       },
       "body": {
        "en": "Length, evaluation criteria, salary during probation, notice period within it, and what confirmation changes. Vague probation criteria are the most common early-career dispute — ask how success will be measured, and keep the answer.",
        "id": "Durasi, kriteria evaluasi, gaji selama masa percobaan, masa pemberitahuan di dalamnya, dan apa yang berubah setelah diangkat. Kriteria masa percobaan yang kabur adalah sengketa awal karier yang paling umum — tanyakan bagaimana keberhasilan akan diukur, dan simpan jawabannya."
       }
      },
      {
       "x": 30,
       "y": 68,
       "h": {
        "en": "Scope, title and location",
        "id": "Ruang lingkup, jabatan, dan lokasi"
       },
       "body": {
        "en": "Does the title match what was discussed? Is the reporting line named? Work location and any relocation or travel expectations written? A letter that says “and other duties as assigned” is normal; a letter vaguer than the interviews were is not.",
        "id": "Apakah jabatannya sesuai dengan yang dibicarakan? Apakah kepada siapa kamu melapor disebutkan? Apakah lokasi kerja dan ekspektasi relokasi atau perjalanan dinas tertulis? Kalimat “dan tugas-tugas lain yang ditetapkan” itu normal; surat yang lebih kabur daripada wawancaranya tidak."
       }
      },
      {
       "x": 76,
       "y": 74,
       "h": {
        "en": "Penalty and exit clauses",
        "id": "Klausul penalti dan pengunduran diri"
       },
       "body": {
        "en": "Training-cost clawbacks, minimum service periods with penalties, sweeping non-competes, IP claims over personal projects. These exist in some markets — read them before signing, ask for limits where they are broad, and know what you are agreeing to walk away from.",
        "id": "Kewajiban mengembalikan biaya pelatihan, masa kerja minimum dengan penalti, larangan bekerja di pesaing yang terlalu luas, klaim kekayaan intelektual atas proyek pribadimu. Klausul seperti ini ada di sebagian pasar kerja — baca sebelum tanda tangan, minta batasan kalau cakupannya terlalu luas, dan pahami apa yang kamu relakan."
       }
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "Money and probation, in numbers",
        "id": "Uang dan masa percobaan, dalam angka"
       },
       "body": {
        "en": "Read the compensation section as an auditor would. Base amount and currency; each allowance as its own line; the bonus as a formula with its conditions and payment schedule, not as an adjective — “competitive bonus” is not a number, and the fix is to ask, in writing, for the formula or the typical attainment. Then the probation terms, which deserve the same reading as salary and rarely get it: the length; the evaluation criteria; the salary during probation if it differs; the notice period inside probation, which is often shorter for both sides; and what confirmation changes. Vague probation criteria are the most common early-career dispute, because “we'll see how it goes” means something different to each party. Ask how success will be measured, and keep the answer — ideally in the email that confirms the offer, so the criteria are as written as the salary is.",
        "id": "Baca bagian kompensasi seperti seorang auditor. Jumlah gaji pokok dan mata uangnya; setiap tunjangan sebagai barisnya sendiri; bonus sebagai rumus dengan syarat dan jadwal pembayarannya, bukan sebagai kata sifat — “bonus kompetitif” bukan angka, dan perbaikannya adalah meminta, secara tertulis, rumusnya atau pencapaian lazimnya. Lalu ketentuan masa percobaan, yang layak dibaca sama telitinya dengan gaji dan jarang mendapatkannya: lamanya; kriteria evaluasi; gaji selama masa percobaan jika berbeda; masa pemberitahuan di dalam masa percobaan, yang sering lebih singkat bagi kedua pihak; dan apa yang berubah setelah pengangkatan. Kriteria masa percobaan yang samar adalah sengketa awal karier paling umum, karena “kita lihat saja nanti” berarti berbeda bagi tiap pihak. Tanyakan bagaimana keberhasilan akan diukur, dan simpan jawabannya — idealnya di email yang mengonfirmasi tawaran, sehingga kriterianya sama tertulisnya dengan gaji."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Scope, title, location — and the clauses that bite later",
        "id": "Lingkup, jabatan, lokasi — dan klausul yang menggigit kemudian"
       },
       "body": {
        "en": "The middle of the letter should match the interviews. Does the title match what was discussed? Is the reporting line named? Are work location and any relocation or travel expectations written down? “And other duties as assigned” is normal boilerplate; a letter that is vaguer than the conversations were is a signal, and the professional response is a polite request that the discussed scope be reflected. Then the clauses most candidates skip: training-cost clawbacks, minimum service periods with penalties, non-competes broad enough to cover the whole industry, intellectual-property claims that reach into personal projects. These exist legitimately in some markets and roles. The task is not to refuse them reflexively but to read them before signing, ask for limits where they are sweeping — a duration, a scope, a cap — and know precisely what you are agreeing to walk away from if you leave early.",
        "id": "Bagian tengah surat harus sesuai dengan wawancara. Apakah jabatannya sesuai yang dibicarakan? Apakah garis pelaporannya disebutkan? Apakah lokasi kerja serta ekspektasi relokasi atau perjalanan dituliskan? “Dan tugas lain yang ditetapkan” adalah frasa baku yang wajar; surat yang lebih samar daripada percakapannya adalah sinyal, dan respons profesionalnya adalah permintaan sopan agar lingkup yang dibicarakan tercermin. Lalu klausul yang dilewatkan sebagian besar kandidat: pengembalian biaya pelatihan, masa kerja minimum dengan penalti, larangan bersaing yang cukup luas untuk mencakup seluruh industri, klaim kekayaan intelektual yang menjangkau proyek pribadi. Semua itu ada secara sah di sebagian pasar dan peran. Tugasnya bukan menolak secara refleks, melainkan membacanya sebelum menandatangani, meminta batasan bila terlalu luas — durasi, lingkup, batas atas — dan tahu persis apa yang kamu sepakati untuk ditinggalkan jika keluar lebih awal."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "The golden rule: verbal promises are conversation",
        "id": "Aturan emas: janji lisan hanyalah percakapan"
       },
       "body": {
        "en": "Everything that mattered in the interviews — the salary review at six months, the title change after probation, the training budget, the hybrid arrangement — either appears in the letter or does not yet exist. This is not cynicism about the people who promised; managers change, budgets change, and a promise the letter does not carry has no owner in a year. The move is a calm sentence that treats the omission as an administrative detail: “Could the six-month review we discussed be reflected in the letter or the confirmation email?” Companies that meant the promise add the line without friction; companies that hesitate have told you something useful before you signed. Questions about the letter are normal diligence, and an employer's discomfort with them is itself information. Sign only when the document says what the room said — and keep the final version, with every confirmation email, where you can find it in six months.",
        "id": "Segala hal yang penting dalam wawancara — tinjauan gaji di bulan keenam, perubahan jabatan setelah masa percobaan, anggaran pelatihan, pengaturan kerja hibrida — entah muncul di surat atau belum ada. Ini bukan sinisme terhadap orang yang berjanji; manajer berganti, anggaran berubah, dan janji yang tak dibawa surat tak punya pemilik dalam setahun. Langkahnya adalah satu kalimat tenang yang memperlakukan kelalaian itu sebagai detail administratif: “Bisakah tinjauan enam bulan yang kita bahas dicantumkan di surat atau email konfirmasi?” Perusahaan yang sungguh-sungguh berjanji menambahkan barisnya tanpa hambatan; perusahaan yang ragu telah memberitahumu sesuatu yang berguna sebelum kamu menandatangani. Pertanyaan tentang surat adalah kehati-hatian yang wajar, dan ketidaknyamanan pemberi kerja terhadapnya adalah informasi tersendiri. Tanda tangani hanya ketika dokumennya mengatakan apa yang dikatakan ruangan — dan simpan versi finalnya, beserta setiap email konfirmasi, di tempat yang bisa kamu temukan enam bulan lagi."
       }
      }
     ],
     "diagram": {
      "type": "quad",
      "exhibit": {
       "en": "Exhibit 1: The four zones of an offer letter — inspect each before signing; if it matters and it is not written, it does not exist yet.",
       "id": "Peraga 1: Empat zona surat tawaran — periksa masing-masing sebelum menandatangani; jika penting dan tidak tertulis, berarti belum ada."
      },
      "title": {
       "en": "Compensation · Probation · Scope & title · Penalty clauses",
       "id": "Kompensasi · Masa percobaan · Lingkup & jabatan · Klausul penalti"
      },
      "items": [
       {
        "h": {
         "en": "Compensation exactness",
         "id": "Ketepatan kompensasi"
        },
        "sub": {
         "en": "Base, currency, allowance lines, bonus formula and schedule",
         "id": "Gaji pokok, mata uang, baris tunjangan, rumus dan jadwal bonus"
        }
       },
       {
        "h": {
         "en": "Probation terms",
         "id": "Ketentuan masa percobaan"
        },
        "sub": {
         "en": "Length, criteria, salary during, notice inside, what confirmation changes",
         "id": "Lama, kriteria, gaji selama masa itu, pemberitahuan di dalamnya, apa yang berubah setelah pengangkatan"
        }
       },
       {
        "h": {
         "en": "Scope, title, location",
         "id": "Lingkup, jabatan, lokasi"
        },
        "sub": {
         "en": "Title as discussed, reporting line named, location and travel written",
         "id": "Jabatan sesuai pembicaraan, garis pelaporan disebut, lokasi dan perjalanan tertulis"
        }
       },
       {
        "h": {
         "en": "Penalty and exit clauses",
         "id": "Klausul penalti dan keluar"
        },
        "sub": {
         "en": "Clawbacks, minimum service, non-competes, IP — read, bound, accept knowingly",
         "id": "Pengembalian biaya, masa kerja minimum, larangan bersaing, HKI — baca, batasi, terima dengan sadar"
        }
       }
      ],
      "longdesc": {
       "en": "A two-by-two grid of the four zones to inspect in an offer letter: compensation stated exactly with a bonus formula; probation terms with length and criteria; scope, title and location matching the interviews; and penalty or exit clauses read and bounded before signing.",
       "id": "Kisi dua kali dua berisi empat zona yang harus diperiksa dalam surat tawaran: kompensasi yang dinyatakan persis dengan rumus bonus; ketentuan masa percobaan dengan lama dan kriteria; lingkup, jabatan, dan lokasi yang sesuai wawancara; serta klausul penalti atau keluar yang dibaca dan dibatasi sebelum menandatangani."
      }
     },
     "checks": [
      {
       "q": {
        "en": "The hiring manager verbally promised a salary review after six months. It is not in the letter. You should:",
        "id": "Manajer perekrut berjanji secara lisan akan ada peninjauan gaji setelah enam bulan. Itu tidak ada di surat. Kamu sebaiknya:"
       },
       "options": [
        {
         "en": "Sign now and raise it again in month six",
         "id": "Tanda tangan sekarang, lalu ungkit lagi di bulan keenam"
        },
        {
         "en": "Ask for it to be added in writing before you sign",
         "id": "Minta agar itu ditambahkan secara tertulis sebelum kamu tanda tangan"
        },
        {
         "en": "Trust it — they seemed sincere",
         "id": "Percaya saja — mereka tampak tulus"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Correct — sincerity is not the issue; memory and turnover are. Managers change; letters remain. One polite sentence gets it written.",
        "id": "Benar — masalahnya bukan ketulusan; masalahnya adalah ingatan dan pergantian orang. Manajer berganti; surat tetap ada. Satu kalimat yang sopan cukup untuk membuatnya tertulis."
       }
      },
      {
       "q": {
        "en": "A clause says training costs are repayable if you leave within two years. You should:",
        "id": "Sebuah klausul menyebut biaya pelatihan harus dikembalikan kalau kamu keluar dalam dua tahun. Kamu sebaiknya:"
       },
       "options": [
        {
         "en": "Read it fully, ask for its limits, and decide knowingly before signing",
         "id": "Membacanya sampai tuntas, menanyakan batasannya, dan memutuskan dengan sadar sebelum tanda tangan"
        },
        {
         "en": "Ignore it — those clauses are never enforced",
         "id": "Mengabaikannya — klausul seperti itu tidak pernah ditegakkan"
        },
        {
         "en": "Refuse the offer immediately",
         "id": "Langsung menolak tawarannya"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — such clauses exist and can be real. Knowing what you sign is the whole discipline of this lesson.",
        "id": "Benar — klausul seperti itu memang ada dan bisa berlaku sungguhan. Tahu persis apa yang kamu tanda tangani adalah inti disiplin pelajaran ini."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "probation",
        "id": "masa percobaan"
       },
       "def": {
        "en": "The initial evaluation period of a new job, with its own terms for review, notice and confirmation.",
        "id": "Periode evaluasi di awal pekerjaan baru, dengan ketentuannya sendiri untuk peninjauan, pemberitahuan, dan pengangkatan."
       }
      },
      {
       "term": {
        "en": "clawback",
        "id": "pengembalian biaya (clawback)"
       },
       "def": {
        "en": "A clause requiring you to repay training or relocation costs if you leave before a minimum service period — legitimate in some markets, but to be read, bounded and knowingly accepted before signing.",
        "id": "Klausul yang mewajibkanmu mengembalikan biaya pelatihan atau relokasi jika keluar sebelum masa kerja minimum — sah di sebagian pasar, tetapi harus dibaca, dibatasi, dan diterima dengan sadar sebelum menandatangani."
       }
      }
     ],
     "resources": {
      "items": [
       {
        "kind": "checklist",
        "title": {
         "en": "Offer letter inspection",
         "id": "Pemeriksaan surat tawaran"
        },
        "desc": {
         "en": "Four zones. Do not sign until every box is ticked or explained.",
         "id": "Empat zona. Jangan tanda tangan sampai setiap kotak dicentang atau dijelaskan."
        },
        "body": [
         {
          "en": "Compensation: base, bonus scheme and its conditions, allowances, THR / holiday allowance, pay date — all exact",
          "id": "Kompensasi: gaji pokok, skema bonus dan syaratnya, tunjangan, THR, tanggal gajian — semua tepat"
         },
         {
          "en": "Probation: length, evaluation criteria, what happens at the end, notice during probation",
          "id": "Masa percobaan: durasi, kriteria evaluasi, apa yang terjadi di akhir, pemberitahuan selama masa percobaan"
         },
         {
          "en": "Scope: title, level, reporting line, location, work arrangement — match the conversation",
          "id": "Lingkup: jabatan, level, garis pelaporan, lokasi, pengaturan kerja — sesuai percakapan"
         },
         {
          "en": "Contract type: permanent or fixed-term; if fixed-term, the end date and renewal terms",
          "id": "Jenis kontrak: tetap atau waktu tertentu; jika waktu tertentu, tanggal akhir dan syarat perpanjangan"
         },
         {
          "en": "Penalties: training bond amount and period, notice period, non-compete scope and duration",
          "id": "Penalti: jumlah dan masa ikatan dinas, masa pemberitahuan, lingkup dan durasi non-kompetisi"
         },
         {
          "en": "Every verbal agreement written in the letter or confirmed by HR email",
          "id": "Setiap kesepakatan lisan tertulis di surat atau dikonfirmasi lewat email HR"
         },
         {
          "en": "Start date, documents required, first-day logistics",
          "id": "Tanggal mulai, dokumen yang diperlukan, logistik hari pertama"
         }
        ]
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Signing on the verbal promise",
         "id": "Menandatangani berdasarkan janji lisan"
        },
        "fix": {
         "en": "If it was agreed, it goes in the letter or an email from HR. “We’ll sort it after you join” is not a term.",
         "id": "Jika disepakati, masukkan ke surat atau email dari HR. “Nanti kita urus setelah kamu bergabung” bukan ketentuan."
        }
       },
       {
        "h": {
         "en": "Skipping the penalty clauses",
         "id": "Melewatkan klausul penalti"
        },
        "fix": {
         "en": "Training bonds, notice periods and non-compete language decide how expensive your next move is. Read them before you feel grateful.",
         "id": "Ikatan dinas, masa pemberitahuan, dan klausul non-kompetisi menentukan seberapa mahal langkah berikutnya. Baca sebelum kamu merasa bersyukur."
        }
       },
       {
        "h": {
         "en": "Assuming the title in the letter matches the conversation",
         "id": "Menganggap jabatan di surat sama dengan yang dibicarakan"
        },
        "fix": {
         "en": "Check the exact title, level and reporting line. They follow you to the next employer.",
         "id": "Periksa jabatan, level, dan garis pelaporan yang tepat. Itu mengikutimu ke pemberi kerja berikutnya."
        }
       }
      ]
     },
     "journey": {
      "before": {
       "label": {
        "en": "Module 9 · rehearsed",
        "id": "Modul 9 · terlatih"
       },
       "desc": {
        "en": "You performed under real conditions and the offer arrived.",
        "id": "Kamu tampil dalam kondisi nyata dan tawarannya datang."
       }
      },
      "now": {
       "label": {
        "en": "Module 10 · the deal, understood",
        "id": "Modul 10 · kesepakatan yang dipahami"
       },
       "desc": {
        "en": "Total compensation, triangulated data, a fifteen-minute conversation and a letter inspected in four zones.",
        "id": "Kompensasi total, data yang ditriangulasi, percakapan lima belas menit, dan surat yang diperiksa dalam empat zona."
       }
      },
      "next": {
       "label": {
        "en": "Module 11 · the first ninety days",
        "id": "Modul 11 · sembilan puluh hari pertama"
       },
       "desc": {
        "en": "Listen and map, contribute visibly, own a lane — and pass probation on evidence.",
        "id": "Dengarkan dan petakan, berkontribusi secara terlihat, miliki satu jalur — dan lolos masa percobaan berdasarkan bukti."
       },
       "lesson": "11.1"
      }
     },
     "migratedFrom": "the-rope:8.4"
    }
   ],
   "hero": "../../assets/bg/gauntlet/gate-08-offer.jpg",
   "heroPos": "center 30%"
  },
  {
   "num": 11,
   "phase": "after",
   "title": {
    "en": "The First 90 Days",
    "id": "90 Hari Pertama"
   },
   "overview": {
    "en": "The offer is converted in probation, not on signing. This module — a bridge to The Route — gives you a 30/60/90-day plan, shows what probation actually evaluates, builds relationships and feedback habits deliberately, handles early mistakes, and keeps a weekly evidence log that feeds your first review — and your next Story Bank.",
    "id": "Tawaran dikonversi pada masa percobaan, bukan saat menandatangani. Modul ini — jembatan ke The Route — memberimu rencana 30/60/90 hari, menunjukkan apa yang sebenarnya dievaluasi masa percobaan, membangun hubungan dan kebiasaan umpan balik dengan sengaja, menangani kesalahan awal, dan menjaga catatan bukti mingguan yang mengisi tinjauan pertamamu — dan Bank Cerita berikutnya."
   },
   "outcome": {
    "en": "By the end of this module you enter a new job with a 30/60/90-day plan, understand how probation is evaluated, build relationships deliberately, and keep a weekly evidence log that feeds your first review — and your next Story Bank.",
    "id": "Di akhir modul ini kamu memasuki pekerjaan baru dengan rencana 30/60/90 hari, memahami cara masa percobaan dievaluasi, membangun hubungan dengan sengaja, dan menjaga catatan bukti mingguan yang mengisi tinjauan pertamamu — dan Bank Cerita berikutnya."
   },
   "kit": {
    "en": "30/60/90 plan · weekly evidence log",
    "id": "Rencana 30/60/90 · catatan bukti mingguan"
   },
   "lessons": [
    {
     "n": "11.1",
     "title": {
      "en": "The 30/60/90-Day Learning Plan",
      "id": "Rencana Belajar 30/60/90 Hari"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "New hires fail from motion without direction: busy immediately, valuable never. The 30/60/90 arc — listen and map, contribute visibly, own a lane — sequences your energy so that by day ninety the question “was hiring them right?” answers itself.",
      "id": "Karyawan baru gagal karena bergerak tanpa arah: langsung sibuk, tetapi tidak pernah bernilai. Busur 30/60/90 — dengarkan dan petakan, berkontribusi secara terlihat, pegang satu jalur — mengurutkan energimu sehingga pada hari kesembilan puluh, pertanyaan “apakah merekrutnya keputusan yang tepat?” terjawab dengan sendirinya."
     },
     "objectives": [
      {
       "en": "Structure your first ninety days as learn → contribute → own.",
       "id": "Menyusun sembilan puluh hari pertamamu sebagai belajar → berkontribusi → memegang."
      },
      {
       "en": "Set expectations with your manager in week one.",
       "id": "Menyelaraskan ekspektasi dengan atasanmu di minggu pertama."
      },
      {
       "en": "Keep an evidence log from day one.",
       "id": "Mencatat bukti sejak hari pertama."
      }
     ],
     "takeawaysLead": {
      "en": "New hires fail from motion without direction. To sequence your first ninety days so the confirmation question answers itself, you can:",
      "id": "Karyawan baru gagal karena bergerak tanpa arah. Untuk mengurutkan sembilan puluh hari pertamamu agar pertanyaan pengangkatan terjawab dengan sendirinya, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Days 1–30: listen, map, learn the real process — resist premature fixes.",
       "id": "Hari 1–30: dengarkan, petakan, pelajari proses yang sebenarnya — tahan godaan untuk memperbaiki terlalu dini."
      },
      {
       "en": "Days 31–60: deliver the first visible contribution, chosen with your manager.",
       "id": "Hari 31–60: hadirkan kontribusi pertama yang terlihat, dipilih bersama atasanmu."
      },
      {
       "en": "Days 61–90: own a lane end-to-end and start the review conversation early.",
       "id": "Hari 61–90: pegang satu jalur dari awal sampai akhir, dan mulai percakapan peninjauan lebih awal."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "Days 1–30 · The listening tour",
        "id": "Hari 1–30 · Tur mendengarkan"
       },
       "body": {
        "en": "Meet everyone your role touches; ask each the same three questions: what does this team do well, what breaks most often, what should I absolutely not change? Learn the real process, which differs from the documented one everywhere on earth. Write down what surprises you — by day sixty you will be blind to it, and that list is where your future contributions hide.",
        "id": "Temui semua orang yang bersinggungan dengan posisimu; ajukan tiga pertanyaan yang sama kepada masing-masing: apa yang dikerjakan tim ini dengan baik, apa yang paling sering bermasalah, apa yang sebaiknya sama sekali tidak saya ubah? Pelajari proses yang sebenarnya, yang di mana pun di dunia ini selalu berbeda dari yang terdokumentasi. Tulis apa saja yang mengejutkanmu — pada hari keenam puluh kamu sudah tidak akan menyadarinya lagi, dan di daftar itulah kontribusi masa depanmu bersembunyi."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "Days 31–60 · First contribution",
        "id": "Hari 31–60 · Kontribusi pertama"
       },
       "body": {
        "en": "Choose one deliverable that is visible, finishable inside a month, and genuinely useful — ideally something from your surprise list, validated with your manager. Deliver it completely: shipped, documented, communicated. One finished thing beats five started things at a rate that surprises every new hire who tests it.",
        "id": "Pilih satu hasil kerja yang terlihat, bisa dirampungkan dalam sebulan, dan benar-benar berguna — idealnya dari daftar kejutanmu, dan sudah divalidasi bersama atasan. Selesaikan sampai tuntas: dirilis, didokumentasikan, dikomunikasikan. Satu hal yang selesai mengalahkan lima hal yang baru dimulai, dengan selisih yang mengejutkan setiap karyawan baru yang mengujinya."
       },
       "icon": "book"
      },
      {
       "h": {
        "en": "Days 61–90 · Owning a lane",
        "id": "Hari 61–90 · Memegang satu jalur"
       },
       "body": {
        "en": "Take end-to-end responsibility for one recurring area — a report, a process, a client, a component. Ownership means people stop checking: it arrives correct, on time, without reminders. That reliability, demonstrated on even a small lane, is the strongest possible probation evidence, because it predicts everything else.",
        "id": "Ambil tanggung jawab dari awal sampai akhir atas satu area yang berulang — sebuah laporan, proses, klien, atau komponen. Memegang berarti orang berhenti memeriksa: hasilnya datang benar, tepat waktu, tanpa perlu diingatkan. Keandalan seperti itu, bahkan pada jalur yang kecil, adalah bukti masa percobaan yang paling kuat, karena ia meramalkan segala hal lainnya."
       },
       "icon": "target"
      }
     ],
     "diagram": {
      "type": "timeline",
      "title": {
       "en": "The 30/60/90 arc",
       "id": "Busur 30/60/90"
      },
      "items": [
       {
        "h": {
         "en": "Days 1–30",
         "id": "Hari 1–30"
        },
        "sub": {
         "en": "Listen, map, learn the real process — log every surprise",
         "id": "Dengarkan, petakan, pelajari proses yang sebenarnya — catat setiap kejutan"
        }
       },
       {
        "h": {
         "en": "Days 31–60",
         "id": "Hari 31–60"
        },
        "sub": {
         "en": "First visible contribution — shipped, documented, communicated",
         "id": "Kontribusi pertama yang terlihat — dirilis, didokumentasikan, dikomunikasikan"
        }
       },
       {
        "h": {
         "en": "Days 61–90",
         "id": "Hari 61–90"
        },
        "sub": {
         "en": "Own a lane end-to-end; start the review conversation early",
         "id": "Pegang satu jalur dari awal sampai akhir; mulai percakapan peninjauan lebih awal"
        }
       }
      ],
      "note": {
       "en": "Ask in week one: what does success at day ninety look like? Write the answer down.",
       "id": "Tanyakan di minggu pertama: seperti apa sukses di hari kesembilan puluh? Tulis jawabannya."
      },
      "exhibit": {
       "en": "Exhibit 1: The 30/60/90 arc",
       "id": "Peraga 1: Busur 30/60/90"
      },
      "longdesc": {
       "en": "Diagram of The 30/60/90 arc. It presents, in order: Days 1–30 — Listen, map, learn the real process — log every surprise; Days 31–60 — First visible contribution — shipped, documented, communicated; Days 61–90 — Own a lane end-to-end; start the review conversation early.",
       "id": "Diagram busur 30/60/90. Menyajikan, secara berurutan: Hari 1–30 — dengarkan, petakan, pelajari proses yang sebenarnya, catat setiap kejutan; Hari 31–60 — kontribusi pertama yang terlihat: dirilis, didokumentasikan, dikomunikasikan; Hari 61–90 — pegang satu jalur dari awal sampai akhir; mulai percakapan peninjauan lebih awal."
      }
     },
     "tryit": {
      "qid": "st01",
      "label": {
       "en": "Say your 90-day plan aloud",
       "id": "Ucapkan rencana 90 harimu dengan suara keras"
      },
      "desc": {
       "en": "The simulator's first-90-days question — three phases, with examples.",
       "id": "Pertanyaan tentang 90 hari pertama di simulator — tiga fase, dengan contoh."
      }
     },
     "scenario": {
      "icon": "flag",
      "img": "../../assets/bg/stage-foundation.jpg",
      "title": {
       "en": "Candidate In Focus",
       "id": "Kandidat dalam Sorotan"
      },
      "body": [
       {
        "en": "Agus starts Monday. By Wednesday he has proposed reorganising the team's reporting, corrected his manager in a meeting, and skipped two coffee invitations to “focus.” He is working harder than anyone — and by day thirty, quietly, nobody brings him anything anymore. His colleague Ratih started the same week: she spent it asking questions, mapping who depends on whom, and fixing one small broken thing somebody complained about. Guess whose probation review writes itself.",
        "id": "Agus mulai bekerja hari Senin. Hari Rabu ia sudah mengusulkan penataan ulang sistem pelaporan tim, mengoreksi atasannya di tengah rapat, dan menolak dua ajakan ngopi demi “fokus.” Ia bekerja lebih keras daripada siapa pun — dan pada hari ketiga puluh, diam-diam, tidak ada lagi yang membawa pekerjaan kepadanya. Rekannya, Ratih, mulai di minggu yang sama: ia menghabiskannya dengan bertanya, memetakan siapa bergantung pada siapa, dan memperbaiki satu hal kecil yang rusak dan dikeluhkan orang. Tebak peninjauan masa percobaan siapa yang menulis dirinya sendiri."
       }
      ]
     },
     "glossary": [
      {
       "term": {
        "en": "probation",
        "id": "masa percobaan"
       },
       "def": {
        "en": "The initial evaluation period of a new job, with its own terms for review, notice and confirmation.",
        "id": "Periode evaluasi di awal pekerjaan baru, dengan ketentuannya sendiri untuk peninjauan, pemberitahuan, dan pengangkatan."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Proposing big changes in week one",
         "id": "Mengusulkan perubahan besar di minggu pertama"
        },
        "fix": {
         "en": "Listen and map first — your surprise list from month one is where good contributions hide.",
         "id": "Dengarkan dan petakan dulu — daftar kejutanmu dari bulan pertama adalah tempat kontribusi yang baik bersembunyi."
        }
       },
       {
        "h": {
         "en": "Being busy instead of visible",
         "id": "Sibuk, tetapi tidak terlihat"
        },
        "fix": {
         "en": "One finished, communicated deliverable beats five started ones — every time.",
         "id": "Satu hasil kerja yang tuntas dan dikomunikasikan mengalahkan lima yang baru dimulai — setiap saat."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "In week one, your most important meeting is:",
        "id": "Di minggu pertama, rapat terpentingmu adalah:"
       },
       "options": [
        {
         "en": "Introducing your improvement ideas to the team",
         "id": "Memperkenalkan ide-ide perbaikanmu kepada tim"
        },
        {
         "en": "Negotiating your next salary review",
         "id": "Menegosiasikan peninjauan gaji berikutnya"
        },
        {
         "en": "Expectations with your manager: what does success at 90 days look like?",
         "id": "Menyelaraskan ekspektasi dengan atasanmu: seperti apa sukses di hari ke-90?"
        }
       ],
       "correct": 2,
       "why": {
        "en": "Correct — you cannot hit an undefined target. Ask it explicitly, write the answer down, and revisit it monthly.",
        "id": "Benar — kamu tidak bisa mengenai sasaran yang belum ditentukan. Tanyakan secara eksplisit, tulis jawabannya, dan tinjau ulang setiap bulan."
       }
      }
     ],
     "insights": {
      "lead": {
       "en": "What managers watch in a new hire.",
       "id": "Yang diamati manajer pada karyawan baru."
      },
      "items": [
       {
        "h": {
         "en": "Questions in week one, answers in week six",
         "id": "Pertanyaan di minggu pertama, jawaban di minggu keenam"
        },
        "body": {
         "en": "Early questions read as engagement; the same questions in month three read as not learning. Front-load curiosity and write the answers down.",
         "id": "Pertanyaan awal terbaca sebagai keterlibatan; pertanyaan yang sama di bulan ketiga terbaca sebagai tidak belajar. Curahkan rasa ingin tahu di awal dan tulis jawabannya."
        }
       },
       {
        "h": {
         "en": "Reliability is scored before brilliance",
         "id": "Keandalan dinilai sebelum kecemerlangan"
        },
        "body": {
         "en": "Did the small things arrive on time, complete and without reminders? That answer forms in the first month and colours everything after.",
         "id": "Apakah hal-hal kecil tiba tepat waktu, lengkap, dan tanpa pengingat? Jawaban itu terbentuk di bulan pertama dan mewarnai semua yang setelahnya."
        }
       },
       {
        "h": {
         "en": "Your manager wants one thing to say about you",
         "id": "Manajermu ingin satu hal untuk dikatakan tentangmu"
        },
        "body": {
         "en": "In their own calibration meeting they need a sentence: “She fixed the reporting mess.” Give them that sentence by day sixty.",
         "id": "Di rapat kalibrasi mereka sendiri, mereka butuh satu kalimat: “Dia membereskan kekacauan pelaporan.” Beri mereka kalimat itu pada hari keenam puluh."
        }
       }
      ]
     },
     "resources": {
      "items": [
       {
        "kind": "worksheet",
        "title": {
         "en": "30/60/90 plan",
         "id": "Rencana 30/60/90"
        },
        "desc": {
         "en": "Fill in week one; review with your manager in week two.",
         "id": "Isi di minggu pertama; tinjau bersama manajermu di minggu kedua."
        },
        "body": [
         {
          "en": "DAYS 1–30 — LISTEN AND MAP: people I must meet (10 names) · systems and tools to learn · how success is measured here · the one question I will ask everyone: “What would make my role most useful to you?”",
          "id": "HARI 1–30 — DENGARKAN DAN PETAKAN: orang yang harus kutemui (10 nama) · sistem dan alat yang harus dipelajari · bagaimana keberhasilan diukur di sini · satu pertanyaan yang akan kuajukan ke semua orang: “Apa yang akan membuat peran saya paling berguna bagi Anda?”"
         },
         {
          "en": "DAYS 31–60 — CONTRIBUTE VISIBLY: the first visible contribution (chosen with the manager) · two small reliability wins · a weekly one-line update to the manager",
          "id": "HARI 31–60 — BERKONTRIBUSI SECARA TERLIHAT: kontribusi pertama yang terlihat (dipilih bersama manajer) · dua kemenangan keandalan kecil · pembaruan satu baris mingguan ke manajer"
         },
         {
          "en": "DAYS 61–90 — OWN A LANE: the recurring responsibility that is now mine · the evidence log started · the probation self-review drafted",
          "id": "HARI 61–90 — MILIKI SATU JALUR: tanggung jawab berulang yang kini milikku · catatan bukti dimulai · tinjauan diri masa percobaan disusun"
         },
         {
          "en": "Checkpoints: day 14 (plan agreed), day 45 (first contribution shipped), day 75 (self-review shared)",
          "id": "Titik cek: hari 14 (rencana disepakati), hari 45 (kontribusi pertama selesai), hari 75 (tinjauan diri dibagikan)"
         }
        ]
       }
      ]
     },
     "migratedFrom": "the-rope:9.1"
    },
    {
     "n": "11.2",
     "title": {
      "en": "Stakeholder Mapping and Relationship Building",
      "id": "Memetakan Pemangku Kepentingan dan Membangun Hubungan"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Work travels on relationships; org charts only approximate them. The stakeholder map plots who your role depends on and who depends on you, where trust already flows, and which two relationships will decide your probation. Build those first, deliberately, before you need them.",
      "id": "Pekerjaan berjalan di atas hubungan; bagan organisasi hanya perkiraan kasarnya. Peta pemangku kepentingan menggambarkan pada siapa posisimu bergantung dan siapa yang bergantung padamu, ke mana kepercayaan sudah mengalir, dan dua hubungan mana yang akan menentukan masa percobaanmu. Bangun keduanya lebih dulu, dengan sengaja, sebelum kamu membutuhkannya."
     },
     "objectives": [
      {
       "en": "Draw the dependency map of your new role.",
       "id": "Menggambar peta ketergantungan dari posisi barumu."
      },
      {
       "en": "Identify the two probation-deciding relationships.",
       "id": "Mengenali dua hubungan yang menentukan masa percobaan."
      },
      {
       "en": "Build trust through small kept promises at speed.",
       "id": "Membangun kepercayaan lewat janji-janji kecil yang ditepati dengan cepat."
      }
     ],
     "takeawaysLead": {
      "en": "Work travels on relationships, and two of them decide most probations. To build the right ones first, you can:",
      "id": "Pekerjaan berjalan di atas relasi, dan dua di antaranya menentukan sebagian besar masa percobaan. Untuk membangun yang tepat lebih dulu, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Map dependencies both directions: inputs you need, outputs others wait for.",
       "id": "Petakan ketergantungan dua arah: masukan yang kamu butuhkan, dan hasil yang ditunggu orang lain darimu."
      },
      {
       "en": "Trust is built in small denominations: kept promises, early warnings, credit given.",
       "id": "Kepercayaan dibangun dalam pecahan kecil: janji yang ditepati, peringatan dini, kredit yang diberikan."
      },
      {
       "en": "Your manager and one influential peer decide most probations — invest accordingly.",
       "id": "Atasanmu dan satu rekan yang berpengaruh memutuskan sebagian besar masa percobaan — berinvestasilah sesuai itu."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "Drawing the map",
        "id": "Menggambar petanya"
       },
       "body": {
        "en": "Three columns: people whose output you need, people who need yours, people who influence how your work is judged. Add two annotations per person: what they care about most, and the current trust level. The third column — influencers — is the one new hires forget, and the one probation reviews quietly poll.",
        "id": "Tiga kolom: orang yang hasil kerjanya kamu butuhkan, orang yang membutuhkan hasil kerjamu, dan orang yang memengaruhi cara pekerjaanmu dinilai. Tambahkan dua catatan untuk tiap orang: apa yang paling mereka pedulikan, dan tingkat kepercayaan saat ini. Kolom ketiga — para pemberi pengaruh — adalah yang paling sering dilupakan karyawan baru, dan yang diam-diam dimintai pendapat saat peninjauan masa percobaan."
       }
      },
      {
       "h": {
        "en": "The two that decide",
        "id": "Dua orang yang menentukan"
       },
       "body": {
        "en": "Your manager's confirmation instinct forms early, from small evidence: responsiveness, quality of questions, kept commitments. The influential peer — the one whose opinion others borrow — forms the team's verdict. Identify both in week one. Serve the manager's stated priorities; make the peer's life concretely easier once. Those two investments outperform every other relationship strategy.",
        "id": "Naluri atasanmu untuk mengukuhkanmu terbentuk sejak awal, dari bukti-bukti kecil: ketanggapan, mutu pertanyaanmu, komitmen yang ditepati. Rekan yang berpengaruh — orang yang pendapatnya dipinjam orang lain — membentuk vonis tim. Kenali keduanya di minggu pertama. Layani prioritas yang disebutkan atasanmu; permudah hidup rekan itu secara konkret, satu kali. Dua investasi itu mengungguli semua strategi hubungan yang lain."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "Trust in small denominations",
        "id": "Kepercayaan dalam pecahan kecil"
       },
       "body": {
        "en": "Trust in a new role is not built by a grand gesture; it is accumulated in small, frequent, kept commitments — and lost the same way. The denominations that count in the first weeks: replying to messages the same day, even to say when you will have an answer; giving early warning the moment a deadline looks at risk, rather than a late explanation; asking one good question before starting a task instead of three after finishing it wrong; and closing every loop — “done, here is where it lives” — so nobody has to check. Each is small enough to seem beneath notice; together they are precisely what the stakeholder map's influencer column reports when the probation review quietly asks around. The counterpart is reciprocity: make one person's life concretely easier in your first month — the peer whose opinion others borrow, ideally — and the map starts working for you before you have anything large to show.",
        "id": "Kepercayaan di peran baru tidak dibangun oleh satu gestur besar; ia terkumpul dari komitmen kecil, sering, dan ditepati — dan hilang dengan cara yang sama. Pecahan yang dihitung di minggu-minggu pertama: membalas pesan di hari yang sama, meski hanya untuk menyebut kapan jawabannya siap; memberi peringatan dini begitu tenggat tampak berisiko, alih-alih penjelasan yang terlambat; mengajukan satu pertanyaan bagus sebelum memulai tugas alih-alih tiga pertanyaan setelah mengerjakannya salah; dan menutup setiap lingkaran — “selesai, ini lokasinya” — sehingga tak ada yang perlu memeriksa. Masing-masing cukup kecil untuk tampak tak berarti; bersama-sama semuanya persis apa yang dilaporkan kolom pemengaruh di peta pemangku kepentingan ketika tinjauan masa percobaan diam-diam bertanya ke sana kemari. Pasangannya adalah timbal balik: buat hidup satu orang lebih mudah secara konkret di bulan pertamamu — idealnya rekan yang pendapatnya dipinjam orang lain — dan peta itu mulai bekerja untukmu sebelum kamu punya sesuatu yang besar untuk ditunjukkan."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "The stakeholder map — three columns",
       "id": "Peta pemangku kepentingan — tiga kolom"
      },
      "items": [
       {
        "h": {
         "en": "You need them",
         "id": "Kamu membutuhkan mereka"
        },
        "sub": {
         "en": "Whose output feeds your work?",
         "id": "Hasil kerja siapa yang menjadi bahan pekerjaanmu?"
        }
       },
       {
        "h": {
         "en": "They need you",
         "id": "Mereka membutuhkanmu"
        },
        "sub": {
         "en": "Who waits on what you produce?",
         "id": "Siapa yang menunggu hasil kerjamu?"
        }
       },
       {
        "h": {
         "en": "They influence",
         "id": "Mereka memengaruhi"
        },
        "sub": {
         "en": "Whose opinion shapes how you are judged?",
         "id": "Pendapat siapa yang membentuk penilaian atas dirimu?"
        }
       }
      ],
      "note": {
       "en": "The third column is the one new hires forget — and the one probation reviews quietly poll.",
       "id": "Kolom ketiga adalah yang paling sering dilupakan karyawan baru — dan yang diam-diam dimintai pendapat saat peninjauan masa percobaan."
      },
      "exhibit": {
       "en": "Exhibit 1: The stakeholder map — three columns",
       "id": "Peraga 1: Peta pemangku kepentingan — tiga kolom"
      },
      "longdesc": {
       "en": "Diagram of The stakeholder map — three columns. It presents, in order: You need them — Whose output feeds your work?; They need you — Who waits on what you produce?; They influence — Whose opinion shapes how you are judged?.",
       "id": "Diagram peta pemangku kepentingan — tiga kolom. Menyajikan, secara berurutan: Kamu membutuhkan mereka — hasil kerja siapa yang menjadi bahan pekerjaanmu?; Mereka membutuhkanmu — siapa yang menunggu hasil kerjamu?; Mereka memengaruhi — pendapat siapa yang membentuk penilaian atas dirimu?"
      }
     },
     "checks": [
      {
       "q": {
        "en": "The fastest trust-builder in a new role is:",
        "id": "Cara tercepat membangun kepercayaan di posisi baru adalah:"
       },
       "options": [
        {
         "en": "Small promises kept visibly and consistently",
         "id": "Janji-janji kecil yang ditepati secara terlihat dan konsisten"
        },
        {
         "en": "An impressive presentation about your background",
         "id": "Presentasi yang mengesankan tentang latar belakangmu"
        },
        {
         "en": "Working later than everyone else",
         "id": "Pulang lebih larut daripada semua orang"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — reliability compounds. “They said Thursday and it came Thursday” repeated five times is a reputation.",
        "id": "Benar — keandalan itu berlipat. “Katanya Kamis, dan datangnya memang Kamis” yang terjadi lima kali berturut-turut adalah reputasi."
       }
      },
      {
       "q": {
        "en": "Trust in a new role is built fastest by:",
        "id": "Kepercayaan di posisi baru paling cepat dibangun dengan:"
       },
       "options": [
        {
         "en": "Small promises kept visibly, plus early warnings when things slip",
         "id": "Janji-janji kecil yang ditepati secara terlihat, plus peringatan dini ketika ada yang meleset"
        },
        {
         "en": "An impressive introduction presentation",
         "id": "Presentasi perkenalan yang mengesankan"
        },
        {
         "en": "Agreeing with everyone for the first month",
         "id": "Menyetujui semua orang selama bulan pertama"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — reliability compounds, and honest early warnings buy more trust than silent hoping.",
        "id": "Benar — keandalan itu berlipat, dan peringatan dini yang jujur membeli lebih banyak kepercayaan daripada berharap dalam diam."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "probation",
        "id": "masa percobaan"
       },
       "def": {
        "en": "The initial evaluation period of a new job, with its own terms for review, notice and confirmation.",
        "id": "Periode evaluasi di awal pekerjaan baru, dengan ketentuannya sendiri untuk peninjauan, pemberitahuan, dan pengangkatan."
       }
      },
      {
       "term": {
        "en": "stakeholder",
        "id": "pemangku kepentingan"
       },
       "def": {
        "en": "Anyone whose input your work needs or whose outcomes depend on it — clients, other teams, leadership.",
        "id": "Siapa pun yang masukannya dibutuhkan pekerjaanmu, atau yang hasilnya bergantung pada pekerjaanmu — klien, tim lain, pimpinan."
       }
      },
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      },
      {
       "term": {
        "en": "influence",
        "id": "pengaruh"
       },
       "def": {
        "en": "Moving people and decisions without formal authority — evidence of leadership before the title arrives.",
        "id": "Menggerakkan orang dan keputusan tanpa wewenang formal — bukti kepemimpinan sebelum jabatannya datang."
       }
      }
     ],
     "resources": {
      "items": [
       {
        "kind": "template",
        "title": {
         "en": "Stakeholder map",
         "id": "Peta pemangku kepentingan"
        },
        "desc": {
         "en": "One row per person. Revisit monthly.",
         "id": "Satu baris per orang. Tinjau ulang bulanan."
        },
        "body": [
         {
          "en": "Name | Role | They need from me | I need from them | Trust today (low / medium / high) | Last contact | Next touch",
          "id": "Nama | Peran | Yang mereka butuhkan dariku | Yang kubutuhkan dari mereka | Kepercayaan saat ini (rendah / sedang / tinggi) | Kontak terakhir | Sentuhan berikutnya"
         },
         {
          "en": "Mark the two relationships that will decide your probation. Those get a weekly touch.",
          "id": "Tandai dua hubungan yang akan menentukan masa percobaanmu. Keduanya mendapat sentuhan mingguan."
         },
         {
          "en": "Include: manager, manager’s manager, two peers, one downstream user of your work, one upstream supplier, one quiet expert, one person in HR or finance who processes your things.",
          "id": "Sertakan: manajer, atasan manajer, dua rekan, satu pengguna hilir hasil kerjamu, satu pemasok hulu, satu ahli pendiam, satu orang di HR atau keuangan yang memproses urusanmu."
         }
        ]
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Mapping the org chart, not the work",
         "id": "Memetakan bagan organisasi, bukan pekerjaannya"
        },
        "fix": {
         "en": "Who actually unblocks things? Who does your manager listen to? Those names belong on the map whatever their title.",
         "id": "Siapa yang benar-benar membuka hambatan? Siapa yang didengarkan manajermu? Nama-nama itu masuk peta apa pun jabatannya."
        }
       },
       {
        "h": {
         "en": "Only meeting people who are useful to you",
         "id": "Hanya menemui orang yang berguna bagimu"
        },
        "fix": {
         "en": "Ask what you can do for them first. Trust flows toward people who give before they need.",
         "id": "Tanyakan dulu apa yang bisa kamu lakukan untuk mereka. Kepercayaan mengalir ke orang yang memberi sebelum membutuhkan."
        }
       },
       {
        "h": {
         "en": "Skipping the quiet experts",
         "id": "Melewatkan ahli yang pendiam"
        },
        "fix": {
         "en": "The person who has been there twelve years and never speaks in meetings knows where everything is buried. Have coffee with them.",
         "id": "Orang yang sudah dua belas tahun di sana dan tak pernah bicara di rapat tahu di mana semuanya terkubur. Minum kopi bersama mereka."
        }
       }
      ]
     },
     "migratedFrom": "the-rope:9.2"
    },
    {
     "n": "11.3",
     "title": {
      "en": "Making Your First Visible Contribution",
      "id": "Menghadirkan Kontribusi Pertama yang Terlihat"
     },
     "kind": "reading",
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Somewhere in your first sixty days there is one deliverable that converts you from “the new person” into “the person who did X”. Choosing it well — visible, finishable, useful, low-risk — and finishing it completely is the highest-leverage decision of your probation.",
      "id": "Di suatu titik dalam enam puluh hari pertamamu, ada satu hasil kerja yang mengubahmu dari “si orang baru” menjadi “orang yang mengerjakan X”. Memilihnya dengan baik — terlihat, bisa dirampungkan, berguna, berisiko rendah — dan menyelesaikannya sampai tuntas adalah keputusan dengan daya ungkit tertinggi selama masa percobaanmu."
     },
     "objectives": [
      {
       "en": "Select a first contribution using the four criteria.",
       "id": "Memilih kontribusi pertama dengan empat kriteria."
      },
      {
       "en": "Scope it to finish inside a month.",
       "id": "Membatasi cakupannya supaya selesai dalam sebulan."
      },
      {
       "en": "Communicate completion so the contribution is actually visible.",
       "id": "Mengomunikasikan penyelesaiannya supaya kontribusi itu benar-benar terlihat."
      }
     ],
     "takeawaysLead": {
      "en": "One deliverable converts you from “the new person” into “the person who did X”. To choose it well and finish it completely, you can:",
      "id": "Satu hasil kerja mengubahmu dari “orang baru” menjadi “orang yang mengerjakan X”. Untuk memilihnya dengan baik dan menyelesaikannya tuntas, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Visible, finishable, useful, low-risk — all four, or choose again.",
       "id": "Terlihat, bisa dirampungkan, berguna, berisiko rendah — harus keempatnya, atau pilih yang lain."
      },
      {
       "en": "Finished means shipped, documented and communicated — not merely done.",
       "id": "Selesai berarti dirilis, didokumentasikan, dan dikomunikasikan — bukan sekadar rampung dikerjakan."
      },
      {
       "en": "Quiet competence is invisible competence; share completion without theatre.",
       "id": "Kompetensi yang diam adalah kompetensi yang tidak terlihat; kabarkan penyelesaiannya, tanpa drama."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "The four criteria",
        "id": "Empat kriterianya"
       },
       "body": {
        "en": "Visible: people beyond your desk will notice. Finishable: done inside a month with the access you already have. Useful: someone's Tuesday genuinely improves. Low-risk: if it goes wrong, nothing breaks that matters. Candidates that fail any one criterion produce famous new-hire mistakes — the giant proposal, the invisible cleanup, the risky refactor.",
        "id": "Terlihat: orang di luar mejamu akan menyadarinya. Bisa dirampungkan: selesai dalam sebulan, dengan akses yang sudah kamu miliki. Berguna: hari Selasa seseorang benar-benar membaik. Berisiko rendah: kalau salah, tidak ada hal penting yang rusak. Kandidat yang gagal di salah satu kriteria saja melahirkan kesalahan klasik karyawan baru — proposal raksasa, beres-beres yang tidak terlihat, refactor yang berisiko."
       }
      },
      {
       "h": {
        "en": "Finishing completely",
        "id": "Menyelesaikan sampai tuntas"
       },
       "body": {
        "en": "Shipped: it works where people use it, not on your machine. Documented: the next person can run it without you. Communicated: a short note to the affected people — what changed, what it saves, where the documentation lives — plus one line in the team update. That last mile of communication is where “done” becomes “visible”, and most new hires skip it out of modesty. Do not.",
        "id": "Dirilis: bekerja di tempat orang memakainya, bukan hanya di komputermu. Didokumentasikan: orang berikutnya bisa menjalankannya tanpa kamu. Dikomunikasikan: satu pesan singkat kepada orang-orang yang terdampak — apa yang berubah, apa yang dihemat, di mana dokumentasinya — plus satu baris di laporan rutin tim. Langkah terakhir berupa komunikasi itulah yang mengubah “selesai” menjadi “terlihat”, dan kebanyakan karyawan baru melewatkannya karena merasa tidak enak. Jangan."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Finding the candidate on your surprise list",
        "id": "Menemukan kandidatnya di daftar kejutanmu"
       },
       "body": {
        "en": "The right first contribution is rarely invented; it is noticed. During the listening tour of days one to thirty, keep a surprise list: the manual step everyone performs weekly, the report that arrives late and nobody trusts, the onboarding document that stopped being true a year ago, the question three people asked you that has no written answer. Each is a candidate. Run the four criteria against the list rather than against your ambitions — visible, finishable inside a month with the access you already have, useful to someone's Tuesday, low-risk if it fails — and most candidates fall away, which is the point. Then validate the survivor with your manager in one sentence: “I noticed X costs the team about Y a week; I'd like to fix it by the end of next month — is that a good use of my first project?” The question does three things at once: it shows you were listening, it gives the manager ownership of the choice, and it turns your first deliverable into something they are already expecting to see.",
        "id": "Kontribusi pertama yang tepat jarang direkayasa; ia diperhatikan. Selama tur mendengar di hari satu sampai tiga puluh, simpan daftar kejutan: langkah manual yang dilakukan semua orang tiap minggu, laporan yang datang terlambat dan tak dipercaya siapa pun, dokumen orientasi yang berhenti akurat setahun lalu, pertanyaan yang diajukan tiga orang kepadamu tanpa jawaban tertulis. Masing-masing adalah kandidat. Jalankan empat kriteria terhadap daftar itu alih-alih terhadap ambisimu — terlihat, bisa diselesaikan dalam sebulan dengan akses yang sudah kamu punya, berguna bagi hari Selasa seseorang, berisiko rendah jika gagal — dan sebagian besar kandidat gugur, itulah tujuannya. Lalu validasi yang bertahan dengan manajermu dalam satu kalimat: “Saya perhatikan X memakan waktu tim sekitar Y per minggu; saya ingin memperbaikinya sebelum akhir bulan depan — apakah ini penggunaan yang baik untuk proyek pertama saya?” Pertanyaan itu melakukan tiga hal sekaligus: menunjukkan kamu mendengarkan, memberi manajer kepemilikan atas pilihan itu, dan mengubah hasil kerja pertamamu menjadi sesuatu yang sudah mereka nantikan."
       }
      }
     ],
     "diagram": {
      "type": "quad",
      "title": {
       "en": "Choosing the first contribution",
       "id": "Memilih kontribusi pertama"
      },
      "items": [
       {
        "h": {
         "en": "Visible",
         "id": "Terlihat"
        },
        "sub": {
         "en": "People beyond your desk will notice",
         "id": "Orang di luar mejamu akan menyadarinya"
        }
       },
       {
        "h": {
         "en": "Finishable",
         "id": "Bisa dirampungkan"
        },
        "sub": {
         "en": "Done inside a month, with access you have",
         "id": "Selesai dalam sebulan, dengan akses yang sudah ada"
        }
       },
       {
        "h": {
         "en": "Useful",
         "id": "Berguna"
        },
        "sub": {
         "en": "Someone's Tuesday genuinely improves",
         "id": "Hari Selasa seseorang benar-benar membaik"
        }
       },
       {
        "h": {
         "en": "Low-risk",
         "id": "Berisiko rendah"
        },
        "sub": {
         "en": "If it fails, nothing important breaks",
         "id": "Kalau gagal, tidak ada hal penting yang rusak"
        }
       }
      ],
      "note": {
       "en": "All four, or choose again. The famous new-hire mistakes each fail exactly one of these.",
       "id": "Harus keempatnya, atau pilih yang lain. Kesalahan klasik karyawan baru masing-masing gagal tepat di salah satu kriteria ini."
      },
      "exhibit": {
       "en": "Exhibit 1: Choosing the first contribution",
       "id": "Peraga 1: Memilih kontribusi pertama"
      },
      "longdesc": {
       "en": "Diagram of Choosing the first contribution. It presents, in order: Visible — People beyond your desk will notice; Finishable — Done inside a month, with access you have; Useful — Someone's Tuesday genuinely improves; Low-risk — If it fails, nothing important breaks.",
       "id": "Diagram memilih kontribusi pertama. Menyajikan, secara berurutan: Terlihat — orang di luar mejamu akan menyadarinya; Bisa dirampungkan — selesai dalam sebulan, dengan akses yang sudah ada; Berguna — hari Selasa seseorang benar-benar membaik; Berisiko rendah — kalau gagal, tidak ada hal penting yang rusak."
      }
     },
     "checks": [
      {
       "q": {
        "en": "The best first-contribution candidate among these is:",
        "id": "Kandidat kontribusi pertama yang paling baik di antara ini adalah:"
       },
       "options": [
        {
         "en": "A six-month research project with executive visibility",
         "id": "Proyek riset enam bulan yang dilihat para eksekutif"
        },
        {
         "en": "A recurring report everyone dreads, automated and documented in three weeks",
         "id": "Laporan berulang yang dibenci semua orang, diotomatiskan dan didokumentasikan dalam tiga minggu"
        },
        {
         "en": "A proposal to reorganise the team's entire workflow",
         "id": "Proposal untuk menata ulang seluruh alur kerja tim"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Correct — visible, finishable, useful, low-risk. The reorganisation fails the risk test; the research fails the finishable test.",
        "id": "Benar — terlihat, bisa dirampungkan, berguna, berisiko rendah. Penataan ulang gagal di uji risiko; proyek riset gagal di uji rampung."
       }
      },
      {
       "q": {
        "en": "“Finished” for your first contribution means:",
        "id": "“Selesai” untuk kontribusi pertamamu berarti:"
       },
       "options": [
        {
         "en": "Shipped where people use it, documented for the next person, and communicated",
         "id": "Dirilis di tempat orang memakainya, didokumentasikan untuk orang berikutnya, dan dikomunikasikan"
        },
        {
         "en": "Working on your own machine",
         "id": "Berjalan di komputermu sendiri"
        },
        {
         "en": "Announced in a meeting before it is built",
         "id": "Diumumkan di rapat sebelum dibangun"
        }
       ],
       "correct": 0,
       "why": {
        "en": "Correct — the last mile of documentation and communication is where “done” becomes “visible”. Do not skip it out of modesty.",
        "id": "Benar — langkah terakhir berupa dokumentasi dan komunikasi itulah yang mengubah “selesai” menjadi “terlihat”. Jangan melewatkannya karena merasa tidak enak."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "probation",
        "id": "masa percobaan"
       },
       "def": {
        "en": "The initial evaluation period of a new job, with its own terms for review, notice and confirmation.",
        "id": "Periode evaluasi di awal pekerjaan baru, dengan ketentuannya sendiri untuk peninjauan, pemberitahuan, dan pengangkatan."
       }
      },
      {
       "term": {
        "en": "last-mile communication",
        "id": "komunikasi jarak terakhir"
       },
       "def": {
        "en": "The short note to affected people and one line in the team update that turns a finished deliverable into a visible one — the step most new hires skip out of modesty.",
        "id": "Catatan singkat kepada orang-orang yang terdampak dan satu baris di pembaruan tim yang mengubah hasil kerja yang selesai menjadi yang terlihat — langkah yang dilewatkan sebagian besar karyawan baru karena rendah hati."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Choosing the impressive project",
         "id": "Memilih proyek yang mengesankan"
        },
        "fix": {
         "en": "Choose the finishable one. A completed small fix beats an ambitious half-built system every time.",
         "id": "Pilih yang bisa diselesaikan. Perbaikan kecil yang tuntas mengalahkan sistem ambisius setengah jadi setiap kali."
        }
       },
       {
        "h": {
         "en": "Finishing quietly",
         "id": "Menyelesaikan diam-diam"
        },
        "fix": {
         "en": "A contribution nobody saw did not happen. Demo it, document it, hand it over in writing.",
         "id": "Kontribusi yang tak dilihat siapa pun sama dengan tidak terjadi. Demokan, dokumentasikan, serahkan secara tertulis."
        }
       },
       {
        "h": {
         "en": "Fixing something someone owns",
         "id": "Memperbaiki sesuatu yang dimiliki orang lain"
        },
        "fix": {
         "en": "Ask the owner first. An uninvited fix on someone’s territory costs more trust than it earns.",
         "id": "Tanyakan pemiliknya dulu. Perbaikan tak diundang di wilayah orang lain menghabiskan lebih banyak kepercayaan daripada yang didapat."
        }
       }
      ]
     },
     "migratedFrom": "the-rope:9.3"
    },
    {
     "n": "11.4",
     "title": {
      "en": "The Probation Review Conversation",
      "id": "Percakapan Peninjauan Masa Percobaan"
     },
     "kind": "reading",
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "placeholder": false,
     "overview": {
      "en": "Confirmed or extended is often decided before the meeting — from evidence you either assembled or did not. This lesson covers the evidence log, the self-review that frames the conversation, handling improvement feedback in the room, and using the review to set up your next six months.",
      "id": "Dikukuhkan atau diperpanjang sering kali sudah diputuskan sebelum rapatnya — dari bukti yang kamu kumpulkan, atau tidak kamu kumpulkan. Pelajaran ini membahas catatan bukti, penilaian diri yang membingkai percakapan, cara menyikapi umpan balik perbaikan di dalam ruangan, dan cara memakai peninjauan itu untuk menyiapkan enam bulan berikutnya."
     },
     "objectives": [
      {
       "en": "Maintain an evidence log across probation.",
       "id": "Menjaga catatan bukti sepanjang masa percobaan."
      },
      {
       "en": "Open the review with a structured self-assessment.",
       "id": "Membuka peninjauan dengan penilaian diri yang terstruktur."
      },
      {
       "en": "Receive improvement feedback as fuel, visibly.",
       "id": "Menerima umpan balik perbaikan sebagai bahan bakar, secara terlihat."
      }
     ],
     "takeawaysLead": {
      "en": "Confirmed or extended is often decided before the meeting, from evidence you did or did not assemble. To run your own review, you can:",
      "id": "Diangkat atau diperpanjang sering diputuskan sebelum rapat, dari bukti yang kamu kumpulkan atau tidak. Untuk menjalankan tinjauanmu sendiri, kamu bisa:"
     },
     "takeaways": [
      {
       "en": "Log wins weekly: deliverable, effect, who benefited. Memory fails; logs do not.",
       "id": "Catat capaian setiap minggu: hasil kerjanya, dampaknya, siapa yang terbantu. Ingatan bisa gagal; catatan tidak."
      },
      {
       "en": "Lead the review with your own honest assessment — framing beats reacting.",
       "id": "Pimpin peninjauan dengan penilaian jujurmu sendiri — membingkai lebih baik daripada bereaksi."
      },
      {
       "en": "How you receive criticism in this meeting is itself probation evidence.",
       "id": "Cara kamu menerima kritik di rapat ini adalah bukti masa percobaan tersendiri."
      }
     ],
     "sections": [
      {
       "h": {
        "en": "The evidence log",
        "id": "Catatan bukti"
       },
       "body": {
        "en": "Ten minutes every Friday: what shipped, what it changed, who noticed. By review day you hold a dated list of contributions with effects — the exact material the confirmation discussion runs on. Bring the three strongest as your opening; hold the rest for questions. Nothing about this is boastful; it is the professional habit of making your work legible.",
        "id": "Sepuluh menit setiap Jumat: apa yang dirilis, apa yang berubah karenanya, siapa yang menyadarinya. Pada hari peninjauan, kamu memegang daftar kontribusi bertanggal lengkap dengan dampaknya — persis bahan yang menjadi dasar diskusi pengukuhan. Bawa tiga yang terkuat sebagai pembuka; simpan sisanya untuk menjawab pertanyaan. Tidak ada yang sombong dari ini; ini kebiasaan profesional untuk membuat pekerjaanmu mudah dibaca."
       },
       "icon": "eye"
      },
      {
       "h": {
        "en": "In the room",
        "id": "Di dalam ruangan"
       },
       "body": {
        "en": "Open with the three-part self-review. When improvement feedback comes — it will, and its presence is normal — take notes visibly, ask one clarifying question, and answer with a plan, not a defence: “fair; here is how I'll approach that this quarter.” Then close forward: confirm expectations for the next six months and the one capability you intend to grow. You leave having turned an evaluation into a planning meeting — which is exactly what confirmed employees do.",
        "id": "Buka dengan penilaian diri tiga bagian. Ketika umpan balik perbaikan datang — pasti datang, dan itu normal — buat catatan secara terlihat, ajukan satu pertanyaan untuk memperjelas, dan jawab dengan rencana, bukan pembelaan: “masuk akal; begini cara saya menanganinya kuartal ini.” Lalu tutup dengan menghadap ke depan: pastikan ekspektasi untuk enam bulan berikutnya, dan satu kemampuan yang ingin kamu tumbuhkan. Kamu pulang setelah mengubah sebuah evaluasi menjadi rapat perencanaan — dan itulah persis yang dilakukan karyawan yang dikukuhkan."
       },
       "icon": "book"
      },
      {
       "icon": "target",
       "h": {
        "en": "Writing the self-review before anyone asks",
        "id": "Menulis tinjauan diri sebelum ada yang meminta"
       },
       "body": {
        "en": "A week before the review, turn the evidence log into one page with three parts. <b>Delivered:</b> the three strongest entries, each as deliverable, effect and who noticed — “the weekly reconciliation now runs in twenty minutes instead of three hours; finance stopped re-checking it in month two.” <b>Learned:</b> two honest observations about how the team actually works and how you adjusted — this is where you show the listening tour paid off, and where a self-aware line about an early misstep earns more trust than its absence would. <b>Next:</b> the one capability you intend to grow and the lane you would like to own, stated as a proposal rather than a request. Send it to your manager two days ahead with a one-line note. Managers rarely receive this; when they do, the review runs on your document, their improvement feedback arrives as additions to a plan rather than as the agenda, and the confirmation conversation has already been half-written by the person being reviewed.",
        "id": "Seminggu sebelum tinjauan, ubah catatan bukti menjadi satu halaman dengan tiga bagian. <b>Dihasilkan:</b> tiga entri terkuat, masing-masing sebagai hasil kerja, dampak, dan siapa yang memperhatikan — “rekonsiliasi mingguan kini berjalan dua puluh menit alih-alih tiga jam; tim keuangan berhenti memeriksa ulang di bulan kedua.” <b>Dipelajari:</b> dua pengamatan jujur tentang cara tim benar-benar bekerja dan bagaimana kamu menyesuaikan diri — di sinilah kamu menunjukkan tur mendengar membuahkan hasil, dan satu kalimat sadar diri tentang kekeliruan awal menghasilkan lebih banyak kepercayaan daripada ketiadaannya. <b>Berikutnya:</b> satu kemampuan yang ingin kamu tumbuhkan dan jalur yang ingin kamu miliki, dinyatakan sebagai usulan alih-alih permintaan. Kirimkan kepada manajermu dua hari sebelumnya dengan catatan satu baris. Manajer jarang menerima ini; ketika menerimanya, tinjauan berjalan di atas dokumenmu, umpan balik perbaikan mereka datang sebagai tambahan pada sebuah rencana alih-alih sebagai agenda, dan percakapan pengangkatan sudah separuh ditulis oleh orang yang sedang ditinjau."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "title": {
       "en": "Running your own probation review",
       "id": "Mengemudikan sendiri peninjauan masa percobaanmu"
      },
      "items": [
       {
        "h": {
         "en": "Evidence log",
         "id": "Catatan bukti"
        },
        "sub": {
         "en": "Ten minutes every Friday: shipped, changed, noticed",
         "id": "Sepuluh menit setiap Jumat: dirilis, berubah, disadari"
        }
       },
       {
        "h": {
         "en": "Self-review",
         "id": "Penilaian diri"
        },
        "sub": {
         "en": "Open with: delivered, learned, next focus",
         "id": "Buka dengan: capaian, pembelajaran, fokus berikutnya"
        }
       },
       {
        "h": {
         "en": "Feedback → plan",
         "id": "Umpan balik → rencana"
        },
        "sub": {
         "en": "Notes taken visibly; answer with a plan, not a defence",
         "id": "Mencatat secara terlihat; menjawab dengan rencana, bukan pembelaan"
        }
       },
       {
        "h": {
         "en": "Forward close",
         "id": "Penutup yang menghadap ke depan"
        },
        "sub": {
         "en": "Confirm the next six months and one capability to grow",
         "id": "Pastikan enam bulan berikutnya, dan satu kemampuan untuk ditumbuhkan"
        }
       }
      ],
      "note": {
       "en": "You leave having turned an evaluation into a planning meeting — which is what confirmed employees do.",
       "id": "Kamu pulang setelah mengubah sebuah evaluasi menjadi rapat perencanaan — itulah yang dilakukan karyawan yang dikukuhkan."
      },
      "exhibit": {
       "en": "Exhibit 1: Running your own probation review",
       "id": "Peraga 1: Mengemudikan sendiri peninjauan masa percobaanmu"
      },
      "longdesc": {
       "en": "Diagram of Running your own probation review. It presents, in order: Evidence log — Ten minutes every Friday: shipped, changed, noticed; Self-review — Open with: delivered, learned, next focus; Feedback → plan — Notes taken visibly; answer with a plan, not a defence; Forward close — Confirm the next six months and one capability to grow.",
       "id": "Diagram mengemudikan sendiri peninjauan masa percobaanmu. Menyajikan, secara berurutan: Catatan bukti — sepuluh menit setiap Jumat: dirilis, berubah, disadari; Penilaian diri — buka dengan: capaian, pembelajaran, fokus berikutnya; Umpan balik → rencana — mencatat secara terlihat; menjawab dengan rencana, bukan pembelaan; Penutup yang menghadap ke depan — pastikan enam bulan berikutnya, dan satu kemampuan untuk ditumbuhkan."
      }
     },
     "tryit": {
      "qid": "cl04",
      "label": {
       "en": "Practice the outside view",
       "id": "Latih sudut pandang dari luar"
      },
      "desc": {
       "en": "“How would your last manager describe you?” — quote something real, praise and growth note both.",
       "id": "“Bagaimana atasan terakhir Anda akan menggambarkan Anda?” — kutip sesuatu yang nyata, pujian dan catatan pengembangan sekaligus."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "evidence",
        "id": "bukti"
       },
       "def": {
        "en": "Concrete, checkable specifics — numbers, names, artefacts — the only currency rubrics can score.",
        "id": "Hal-hal konkret yang bisa diperiksa — angka, nama, artefak — satu-satunya mata uang yang bisa dinilai oleh rubrik."
       }
      },
      {
       "term": {
        "en": "three-part self-review",
        "id": "tinjauan diri tiga bagian"
       },
       "def": {
        "en": "The opening of the probation conversation: what you delivered with effects, what you learned about how the team works, and what you intend to grow next — framing the meeting before feedback arrives.",
        "id": "Pembuka percakapan masa percobaan: apa yang kamu hasilkan beserta dampaknya, apa yang kamu pelajari tentang cara kerja tim, dan apa yang ingin kamu tumbuhkan berikutnya — membingkai rapat sebelum umpan balik datang."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "The strongest way to open your probation review:",
        "id": "Cara terkuat membuka peninjauan masa percobaanmu:"
       },
       "options": [
        {
         "en": "Waiting silently for their verdict",
         "id": "Menunggu vonis mereka dalam diam"
        },
        {
         "en": "A list of obstacles that explain any shortfalls",
         "id": "Daftar hambatan yang menjelaskan setiap kekurangan"
        },
        {
         "en": "A brief self-review: delivered, learned, and what I'd focus on next",
         "id": "Penilaian diri yang singkat: apa yang sudah saya capai, apa yang saya pelajari, dan apa fokus saya berikutnya"
        }
       ],
       "correct": 2,
       "why": {
        "en": "Correct — delivered, learned, next. It frames the conversation around evidence and growth, and managers remember who framed well.",
        "id": "Benar — capaian, pembelajaran, fokus berikutnya. Itu membingkai percakapan di sekitar bukti dan pertumbuhan, dan manajer ingat siapa yang membingkainya dengan baik."
       }
      }
     ],
     "resources": {
      "items": [
       {
        "kind": "template",
        "title": {
         "en": "Probation self-review",
         "id": "Tinjauan diri masa percobaan"
        },
        "desc": {
         "en": "One page. Share it two days before the meeting.",
         "id": "Satu halaman. Bagikan dua hari sebelum pertemuan."
        },
        "body": [
         {
          "en": "WHAT I WAS ASKED TO DO (from the 30/60/90 plan): …",
          "id": "YANG DIMINTA DARI SAYA (dari rencana 30/60/90): …"
         },
         {
          "en": "WHAT SHIPPED (3–5 lines, each with a result and who it helped): …",
          "id": "YANG SELESAI (3–5 baris, masing-masing dengan hasil dan siapa yang terbantu): …"
         },
         {
          "en": "WHAT I LEARNED ABOUT HOW THIS TEAM WORKS: …",
          "id": "YANG SAYA PELAJARI TENTANG CARA KERJA TIM INI: …"
         },
         {
          "en": "WHERE I FELL SHORT AND WHAT I CHANGED: …",
          "id": "DI MANA SAYA KURANG DAN APA YANG SAYA UBAH: …"
         },
         {
          "en": "THE LANE I NOW OWN: …",
          "id": "JALUR YANG KINI SAYA MILIKI: …"
         },
         {
          "en": "NEXT 90 DAYS — what I propose to take on, and what I need from you: …",
          "id": "90 HARI BERIKUTNYA — yang saya usulkan untuk diambil, dan yang saya butuhkan dari Anda: …"
         }
        ]
       }
      ]
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Walking in without evidence",
         "id": "Masuk tanpa bukti"
        },
        "fix": {
         "en": "Bring the log: what shipped, who it helped, what you learned. The review is decided by what is on the table.",
         "id": "Bawa catatannya: apa yang selesai, siapa yang terbantu, apa yang kamu pelajari. Tinjauan diputuskan oleh apa yang ada di meja."
        }
       },
       {
        "h": {
         "en": "Defending against improvement points",
         "id": "Membela diri terhadap poin perbaikan"
        },
        "fix": {
         "en": "Write them down, ask for an example, propose the fix. That behaviour is the confirmation signal.",
         "id": "Catat, minta contohnya, usulkan perbaikan. Perilaku itulah sinyal konfirmasi."
        }
       },
       {
        "h": {
         "en": "Ending without the next ninety days",
         "id": "Mengakhiri tanpa sembilan puluh hari berikutnya"
        },
        "fix": {
         "en": "Close with “what would make the next quarter a success from your side?” and write the answer into your plan.",
         "id": "Tutup dengan “apa yang akan membuat kuartal berikutnya berhasil dari sisi Anda?” dan tulis jawabannya ke dalam rencanamu."
        }
       }
      ]
     },
     "journey": {
      "before": {
       "label": {
        "en": "Modules 1–8 · from the room to the deal",
        "id": "Modul 1–8 · dari ruangan ke kesepakatan"
       },
       "desc": {
        "en": "You were interviewed, you negotiated, you signed.",
        "id": "Kamu diwawancarai, bernegosiasi, dan menandatangani."
       }
      },
      "now": {
       "label": {
        "en": "Module 11 · confirmed on evidence",
        "id": "Modul 11 · dikonfirmasi berdasarkan bukti"
       },
       "desc": {
        "en": "A 30/60/90 arc, a stakeholder map, one visible contribution and a self-review that frames the conversation.",
        "id": "Alur 30/60/90, peta pemangku kepentingan, satu kontribusi yang terlihat, dan tinjauan diri yang membingkai percakapan."
       }
      },
      "next": {
       "label": {
        "en": "The Route · what’s next",
        "id": "The Route · langkah selanjutnya"
       },
       "desc": {
        "en": "From employee to career builder: architecture, performance, managing up, visibility, promotion and the second move.",
        "id": "Dari karyawan menjadi pembangun karier: arsitektur, kinerja, mengelola atasan, visibilitas, promosi, dan langkah kedua."
       },
       "href": "../the-route/",
       "cta": {
        "en": "Continue to The Route →",
        "id": "Lanjut ke The Route →"
       }
      }
     },
     "migratedFrom": "the-rope:9.4"
    }
   ],
   "hero": "../../assets/bg/stage-execution.jpg",
   "heroPos": "center 40%"
  }
 ]
};
