/**
 * The Map — LMS CONTENT REGISTRY
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
window.MT_LMS['the-map'] = {
 "product": {
  "en": "The Map",
  "id": "The Map"
 },
 "media": {
  "video": "../../assets/01-call-v2.mp4",
  "poster": "../../assets/bg/map-hero.jpg",
  "art": "../../assets/product-art/the-map.svg",
  "visual": "../../assets/system-the-map.png",
  "captions": {
   "en": "../../assets/lms/captions-en.vtt",
   "id": "../../assets/lms/captions-id.vtt"
  }
 },
 "modules": [
  {
   "num": 1,
   "title": {
    "en": "Self-Awareness and Personal Audit",
    "id": "Kesadaran Diri dan Audit Pribadi"
   },
   "overview": {
    "en": "Module 1 of The Map focuses on self-awareness and personal audit. Work through the lessons in order — each builds on the last.",
    "id": "Modul 1 dari The Map berfokus pada Kesadaran Diri dan Audit Pribadi. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply self-awareness and personal audit to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Kesadaran Diri dan Audit Pribadi pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "1.1",
     "title": {
      "en": "Adaptability and Resilience",
      "id": "Adaptabilitas dan Ketangguhan"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "videosIntro": {
      "en": "Three short scenes set the stage: a job that suddenly feels replaceable, a task with no obvious starting point, and a new role where nothing quite connects yet. Watch how each person adapts — then read on to turn what you saw into a method.",
      "id": "Tiga adegan singkat membuka pelajaran ini: pekerjaan yang tiba-tiba terasa mudah digantikan, tugas tanpa titik awal yang jelas, dan peran baru yang belum terasa nyambung. Perhatikan cara setiap orang beradaptasi — lalu lanjutkan membaca untuk mengubah yang kamu lihat menjadi metode."
     },
     "videosOutro": {
      "title": {
       "en": "Key Takeaways: Enjoy the Journey Ahead",
       "id": "Poin Penting: Nikmati Perjalanan di Depan"
      },
      "body": [
       {
        "en": "These three stories illustrate how skills such as adaptability and resilience, problem-solving, and communicating with impact can help individuals unlock the next step in their careers.",
        "id": "Tiga cerita ini menggambarkan bagaimana keterampilan seperti adaptabilitas dan ketangguhan, pemecahan masalah, serta komunikasi yang berdampak dapat membantu seseorang membuka langkah berikutnya dalam kariernya."
       },
       {
        "en": "We hope these stories inspire you to reflect on the new skills you may need to develop for your current or desired role and prepare yourself for the opportunities ahead.",
        "id": "Kami berharap cerita-cerita ini menginspirasimu untuk merenungkan keterampilan baru yang mungkin perlu kamu kembangkan untuk peran saat ini atau yang kamu inginkan, dan mempersiapkan diri untuk peluang di depan."
       }
      ]
     },
     "videos": [
      {
       "src": "../../assets/lms/the-map/adaptability-1-brand.mp4",
       "poster": "../../assets/lms/the-map/adaptability-1-poster.jpg",
       "dur": "1:33",
       "title": {
        "en": "When the ground shifts: learning skills that travel",
        "id": "Saat pijakan bergeser: mempelajari keterampilan yang bisa dibawa"
       },
       "captions": {
        "en": "../../assets/lms/the-map/adaptability-1-en.vtt",
        "id": "../../assets/lms/the-map/adaptability-1-id.vtt"
       }
      },
      {
       "src": "../../assets/lms/the-map/adaptability-2-brand.mp4",
       "poster": "../../assets/lms/the-map/adaptability-2-poster.jpg",
       "dur": "0:57",
       "title": {
        "en": "A problem with many moving pieces: asking for help early",
        "id": "Masalah dengan banyak bagian bergerak: minta bantuan lebih awal"
       },
       "captions": {
        "en": "../../assets/lms/the-map/adaptability-2-en.vtt",
        "id": "../../assets/lms/the-map/adaptability-2-id.vtt"
       }
      },
      {
       "src": "../../assets/lms/the-map/adaptability-3-brand.mp4",
       "poster": "../../assets/lms/the-map/adaptability-3-poster.jpg",
       "dur": "1:44",
       "title": {
        "en": "New role, new ground: feedback, connection and a clearer message",
        "id": "Peran baru, pijakan baru: umpan balik, koneksi, dan pesan yang lebih jelas"
       },
       "captions": {
        "en": "../../assets/lms/the-map/adaptability-3-en.vtt",
        "id": "../../assets/lms/the-map/adaptability-3-id.vtt"
       }
      }
     ],
     "overview": {
      "en": "Careers rarely break because of one big storm. They break because the climber never learned to recover. This lesson reframes adaptability and resilience as trainable systems — a recovery loop you run after every setback — and connects them to the personal audit you will complete in this module.",
      "id": "Karier jarang hancur karena satu badai besar. Karier hancur karena pendaki tidak pernah belajar pulih. Pelajaran ini membingkai ulang adaptabilitas dan ketangguhan sebagai sistem yang bisa dilatih — sebuah putaran pemulihan yang kamu jalankan setelah setiap kemunduran — dan menghubungkannya dengan audit pribadi yang akan kamu selesaikan di modul ini."
     },
     "objectives": [
      {
       "en": "Distinguish adaptability (changing your approach) from resilience (recovering your energy) and explain why both are skills, not traits.",
       "id": "Membedakan adaptabilitas (mengubah pendekatan) dari ketangguhan (memulihkan energi) dan menjelaskan mengapa keduanya keterampilan, bukan bawaan."
      },
      {
       "en": "Run the four-step recovery loop — Name → Normalise → Extract → Next step — on a real setback from your own life.",
       "id": "Menjalankan putaran pemulihan empat langkah — Namai → Normalisasi → Ekstrak → Langkah berikutnya — pada kemunduran nyata dalam hidupmu."
      },
      {
       "en": "Identify your default response under pressure so the personal audit at the end of this module starts from honest data.",
       "id": "Mengenali respons bawaanmu di bawah tekanan agar audit pribadi di akhir modul ini dimulai dari data yang jujur."
      }
     ],
     "takeaways": [
      {
       "en": "Adaptability is a decision about method; resilience is a discipline about energy. You can be strong at one and weak at the other — audit both.",
       "id": "Adaptabilitas adalah keputusan tentang metode; ketangguhan adalah disiplin tentang energi. Kamu bisa kuat di satu dan lemah di lainnya — audit keduanya."
      },
      {
       "en": "A setback processed through the recovery loop becomes data. A setback avoided becomes fear.",
       "id": "Kemunduran yang diproses lewat putaran pemulihan menjadi data. Kemunduran yang dihindari menjadi ketakutan."
      },
      {
       "en": "Employers probe for resilience in interviews because the first two years of any career are mostly recovery: rejected applications, failed tests, hard feedback.",
       "id": "Pemberi kerja menggali ketangguhan saat wawancara karena dua tahun pertama karier apa pun sebagian besar adalah pemulihan: lamaran ditolak, tes gagal, umpan balik keras."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "Two different muscles",
        "id": "Dua otot yang berbeda"
       },
       "body": {
        "en": "Adaptability answers the question <b>“is my method still working?”</b> — it is the willingness to drop a plan that reality has already rejected. Resilience answers <b>“can I keep going while I change it?”</b> — the capacity to absorb a hit without losing the week. Graduates often confuse them: they push harder with a failing method (resilient but not adaptive) or hop between methods without recovering (adaptive but not resilient). The strongest early-career pattern is boring: change the method quickly, recover the energy deliberately.",
        "id": "Adaptabilitas menjawab pertanyaan <b>“apakah metodeku masih berhasil?”</b> — kesediaan melepas rencana yang sudah ditolak kenyataan. Ketangguhan menjawab <b>“sanggupkah aku terus berjalan sambil mengubahnya?”</b> — kapasitas menerima pukulan tanpa kehilangan satu minggu. Lulusan baru sering mencampuradukkan keduanya: memaksa lebih keras dengan metode yang gagal (tangguh tapi tidak adaptif) atau melompat-lompat metode tanpa pulih (adaptif tapi tidak tangguh). Pola awal karier terkuat justru membosankan: ubah metode dengan cepat, pulihkan energi dengan sengaja."
       },
       "img": "../../assets/bg/start.jpg",
       "imgPos": "center 45%"
      },
      {
       "icon": "gear",
       "h": {
        "en": "The recovery loop",
        "id": "Putaran pemulihan"
       },
       "body": {
        "en": "Run four steps after any setback, in order. <b>Name</b> it precisely — “I failed the numerical test at 62%” beats “I'm bad at tests”. <b>Normalise</b> it with base rates — most applicants fail most screening stages; rejection is the default outcome of a funnel, not a verdict on you. <b>Extract</b> one adjustment — a specific, small change you control before the next attempt. <b>Next step</b> — book the next attempt within 48 hours, because open loops close fastest while the details are fresh. The loop takes fifteen minutes on paper and turns an emotional event into an operational one.",
        "id": "Jalankan empat langkah setelah kemunduran apa pun, berurutan. <b>Namai</b> dengan presisi — “aku gagal tes numerik di 62%” lebih baik daripada “aku payah dalam tes”. <b>Normalisasi</b> dengan angka dasar — sebagian besar pelamar gagal di sebagian besar tahap penyaringan; penolakan adalah hasil bawaan sebuah corong, bukan vonis atas dirimu. <b>Ekstrak</b> satu penyesuaian — perubahan kecil dan spesifik yang kamu kendalikan sebelum percobaan berikutnya. <b>Langkah berikutnya</b> — jadwalkan percobaan berikut dalam 48 jam, karena putaran terbuka paling cepat tertutup saat detail masih segar. Putaran ini butuh lima belas menit di atas kertas dan mengubah peristiwa emosional menjadi peristiwa operasional."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Why this opens The Map",
        "id": "Mengapa ini membuka The Map"
       },
       "body": {
        "en": "Everything in The Map — the audit, the habits, the problem-solving frameworks, the industry simulations — assumes you will get things wrong and iterate. That assumption only holds if setbacks feed the system instead of stopping it. So before you map where you are going, you install the mechanism that survives the trip. In the Personal Audit tool you will rate your own recovery pattern honestly; that rating becomes one of the inputs to your development plan.",
        "id": "Semua isi The Map — audit, kebiasaan, kerangka pemecahan masalah, simulasi industri — mengasumsikan kamu akan salah dan mengulang. Asumsi itu hanya berlaku jika kemunduran memberi makan sistem, bukan menghentikannya. Maka sebelum memetakan tujuan, kamu memasang mekanisme yang bertahan sepanjang perjalanan. Di alat Audit Pribadi kamu akan menilai pola pemulihanmu dengan jujur; nilai itu menjadi salah satu masukan rencana pengembanganmu."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: The recovery loop — fifteen minutes that turn a setback into data.",
       "id": "Peraga 1: Putaran pemulihan — lima belas menit yang mengubah kemunduran menjadi data."
      },
      "title": {
       "en": "The recovery loop",
       "id": "Putaran pemulihan"
      },
      "items": [
       {
        "h": {
         "en": "Name",
         "id": "Namai"
        },
        "sub": {
         "en": "State the setback precisely, with numbers",
         "id": "Nyatakan kemunduran dengan presisi, pakai angka"
        }
       },
       {
        "h": {
         "en": "Normalise",
         "id": "Normalisasi"
        },
        "sub": {
         "en": "Compare against base rates, not ideals",
         "id": "Bandingkan dengan angka dasar, bukan ideal"
        }
       },
       {
        "h": {
         "en": "Extract",
         "id": "Ekstrak"
        },
        "sub": {
         "en": "One adjustment you control",
         "id": "Satu penyesuaian yang kamu kendalikan"
        }
       },
       {
        "h": {
         "en": "Next step",
         "id": "Langkah berikutnya"
        },
        "sub": {
         "en": "Book the next attempt within 48 hours",
         "id": "Jadwalkan percobaan berikut dalam 48 jam"
        }
       }
      ],
      "longdesc": {
       "en": "A four-node flow. Node one, Name: state the setback precisely with numbers. Node two, Normalise: compare the outcome against base rates rather than ideals. Node three, Extract: choose one adjustment fully within your control. Node four, Next step: schedule the next attempt within 48 hours. The loop repeats after every setback.",
       "id": "Alur empat simpul. Simpul satu, Namai: nyatakan kemunduran dengan presisi memakai angka. Simpul dua, Normalisasi: bandingkan hasil dengan angka dasar, bukan ideal. Simpul tiga, Ekstrak: pilih satu penyesuaian yang sepenuhnya kamu kendalikan. Simpul empat, Langkah berikutnya: jadwalkan percobaan berikut dalam 48 jam. Putaran berulang setiap kemunduran."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "base rates",
        "id": "angka dasar"
       },
       "def": {
        "en": "How often an outcome actually happens across everyone, e.g. typical pass rates for a screening test — the honest comparison point for your own result.",
        "id": "Seberapa sering suatu hasil benar-benar terjadi pada semua orang, mis. tingkat kelulusan tipikal sebuah tes penyaringan — pembanding jujur untuk hasilmu sendiri."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "After failing a screening test, a Map student says: “I'll just apply to twice as many companies with the same CV.” What is missing?",
        "id": "Setelah gagal tes penyaringan, seorang siswa Map berkata: “Aku akan melamar ke dua kali lebih banyak perusahaan dengan CV yang sama.” Apa yang hilang?"
       },
       "options": [
        {
         "en": "Resilience — they should take a long break first",
         "id": "Ketangguhan — ia harus istirahat panjang dulu"
        },
        {
         "en": "Adaptability — effort is doubled but the failing method is unchanged",
         "id": "Adaptabilitas — usaha digandakan tetapi metode yang gagal tidak diubah"
        },
        {
         "en": "Nothing — volume is the main driver of offers",
         "id": "Tidak ada — volume adalah pendorong utama tawaran"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Doubling volume without extracting an adjustment repeats the failure at scale. The recovery loop demands one method change before the next attempt.",
        "id": "Menggandakan volume tanpa mengekstrak penyesuaian mengulang kegagalan dalam skala besar. Putaran pemulihan menuntut satu perubahan metode sebelum percobaan berikutnya."
       }
      }
     ],
     "tool": {
      "id": "audit",
      "mode": "home",
      "title": {
       "en": "Baseline yourself before you build",
       "id": "Ukur dirimu sebelum membangun"
      },
      "body": {
       "en": "The Personal Audit takes your first honest reading — energy, strengths, habits, recovery — and turns it into a development map you will refine through this module.",
       "id": "Audit Pribadi mengambil pembacaan jujur pertamamu — energi, kekuatan, kebiasaan, pemulihan — dan mengubahnya menjadi peta pengembangan yang akan kamu pertajam sepanjang modul ini."
      },
      "cta": {
       "en": "Open the Personal Audit →",
       "id": "Buka Audit Pribadi →"
      }
     },
     "quote": {
      "en": "A setback processed becomes data. A setback avoided becomes fear.",
      "id": "Kemunduran yang diproses menjadi data. Kemunduran yang dihindari menjadi ketakutan."
     }
    },
    {
     "n": "1.2",
     "title": {
      "en": "Learning Intention",
      "id": "Niat Belajar"
     },
     "dur": {
      "en": "10 min",
      "id": "10 mnt"
     },
     "kind": "slides",
     "placeholder": false,
     "overview": {
      "en": "Before any technique, a working posture: why you are here, what you are willing to trade for it, and how you will know it is working. This short deck sets a learning intention you will reuse in every Metanoia product — one sentence that converts vague ambition into a testable commitment.",
      "id": "Sebelum teknik apa pun, sebuah sikap kerja: mengapa kamu di sini, apa yang rela kamu tukar untuknya, dan bagaimana kamu tahu itu berhasil. Dek singkat ini menetapkan niat belajar yang akan kamu pakai ulang di setiap produk Metanoia — satu kalimat yang mengubah ambisi samar menjadi komitmen yang bisa diuji."
     },
     "objectives": [
      {
       "en": "Write a one-sentence learning intention with a concrete outcome and deadline.",
       "id": "Menulis niat belajar satu kalimat dengan hasil konkret dan tenggat."
      },
      {
       "en": "Set a weekly time budget you can actually defend in your calendar.",
       "id": "Menetapkan anggaran waktu mingguan yang benar-benar bisa kamu pertahankan di kalendermu."
      },
      {
       "en": "Choose one progress signal you will check every Sunday.",
       "id": "Memilih satu sinyal kemajuan yang kamu periksa setiap Minggu."
      }
     ],
     "takeaways": [
      {
       "en": "Intentions with a number and a date get finished; intentions with adjectives get abandoned.",
       "id": "Niat dengan angka dan tanggal akan selesai; niat dengan kata sifat akan ditinggalkan."
      },
      {
       "en": "A modest, defended time budget beats an ambitious, imaginary one.",
       "id": "Anggaran waktu sederhana yang dipertahankan mengalahkan anggaran ambisius yang khayal."
      },
      {
       "en": "Progress you do not measure weekly will quietly stop.",
       "id": "Kemajuan yang tidak kamu ukur mingguan akan berhenti diam-diam."
      }
     ],
     "slides": [
      {
       "h": {
        "en": "Why an intention beats a goal",
        "id": "Mengapa niat mengalahkan tujuan"
       },
       "points": [
        {
         "en": "A goal names a destination; an intention names the behaviour that gets you there.",
         "id": "Tujuan menamai destinasi; niat menamai perilaku yang membawamu ke sana."
        },
        {
         "en": "“Get a job” is weather. “Complete two modules and one audit per week until March” is climate you control.",
         "id": "“Dapat kerja” itu cuaca. “Selesaikan dua modul dan satu audit per minggu sampai Maret” itu iklim yang kamu kendalikan."
        },
        {
         "en": "Every product in Metanoia assumes iteration — the intention is what keeps you iterating.",
         "id": "Setiap produk Metanoia mengasumsikan iterasi — niatlah yang membuatmu terus beriterasi."
        }
       ]
      },
      {
       "h": {
        "en": "The one-sentence format",
        "id": "Format satu kalimat"
       },
       "points": [
        {
         "en": "I will [behaviour], [frequency], until [date], so that [outcome I can verify].",
         "id": "Aku akan [perilaku], [frekuensi], sampai [tanggal], supaya [hasil yang bisa kuverifikasi]."
        },
        {
         "en": "Example: “I will finish one Map module and log one audit update every week until 1 June, so that my development plan has 12 weeks of real data.”",
         "id": "Contoh: “Aku akan menyelesaikan satu modul Map dan mencatat satu pembaruan audit tiap minggu sampai 1 Juni, supaya rencana pengembanganku punya 12 minggu data nyata.”"
        },
        {
         "en": "Say it aloud. If it sounds impossible, shrink the frequency — not the deadline.",
         "id": "Ucapkan keras-keras. Kalau terdengar mustahil, kecilkan frekuensi — bukan tenggatnya."
        }
       ]
      },
      {
       "h": {
        "en": "Budget the hours honestly",
        "id": "Anggarkan jam dengan jujur"
       },
       "points": [
        {
         "en": "Count your real free hours this week — after classes, work, family, commuting, rest.",
         "id": "Hitung jam luang nyatamu minggu ini — setelah kuliah, kerja, keluarga, perjalanan, istirahat."
        },
        {
         "en": "Commit 60–70% of that number, not 100%. Slack absorbs bad weeks; overcommitment ends streaks.",
         "id": "Komitmenkan 60–70% dari angka itu, bukan 100%. Kelonggaran menyerap minggu buruk; komitmen berlebihan mengakhiri rangkaian."
        },
        {
         "en": "Block the hours in your calendar now. Unblocked time belongs to whoever interrupts first.",
         "id": "Blokir jamnya di kalender sekarang. Waktu tak terblokir milik siapa pun yang menyela lebih dulu."
        }
       ]
      },
      {
       "h": {
        "en": "Pick one weekly signal",
        "id": "Pilih satu sinyal mingguan"
       },
       "points": [
        {
         "en": "Lessons completed, audit entries logged, or simulations attempted — one number, checked every Sunday.",
         "id": "Pelajaran selesai, entri audit tercatat, atau simulasi dicoba — satu angka, diperiksa tiap Minggu."
        },
        {
         "en": "A moving signal proves the system works; a frozen signal is an early warning, not a failure.",
         "id": "Sinyal yang bergerak membuktikan sistem bekerja; sinyal beku adalah peringatan dini, bukan kegagalan."
        },
        {
         "en": "Write intention, budget and signal into the Personal Audit tool — it will hold you to them.",
         "id": "Tulis niat, anggaran, dan sinyal ke alat Audit Pribadi — ia akan menagihmu."
        }
       ]
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Which learning intention is most likely to survive a busy month?",
        "id": "Niat belajar mana yang paling mungkin bertahan di bulan sibuk?"
       },
       "options": [
        {
         "en": "“I'll work as hard as possible on my career”",
         "id": "“Aku akan berusaha sekeras mungkin untuk karierku”"
        },
        {
         "en": "“I'll finish one module per week until 1 June, tracked every Sunday”",
         "id": "“Aku akan menyelesaikan satu modul per minggu sampai 1 Juni, dicek tiap Minggu”"
        },
        {
         "en": "“I'll complete the whole platform this month”",
         "id": "“Aku akan menyelesaikan seluruh platform bulan ini”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "It has a behaviour, a frequency, a deadline and a weekly signal — modest enough to defend, concrete enough to verify.",
        "id": "Ada perilaku, frekuensi, tenggat, dan sinyal mingguan — cukup sederhana untuk dipertahankan, cukup konkret untuk diverifikasi."
       }
      }
     ]
    },
    {
     "n": "1.3",
     "title": {
      "en": "Foundational Mindset",
      "id": "Pola Pikir Dasar"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Two beliefs decide how much you learn from this platform: whether ability grows with method and effort, and whether you are the author of your circumstances or their subject. This lesson takes both out of the self-help fog and grounds them in behaviour you can audit.",
      "id": "Dua keyakinan menentukan seberapa banyak kamu belajar dari platform ini: apakah kemampuan tumbuh lewat metode dan usaha, dan apakah kamu penulis keadaanmu atau objeknya. Pelajaran ini mengeluarkan keduanya dari kabut motivasi dan menjejakkannya pada perilaku yang bisa diaudit."
     },
     "objectives": [
      {
       "en": "Catch fixed-mindset language in your own self-talk and translate it into method language.",
       "id": "Menangkap bahasa pola pikir tetap dalam ucapan batinmu dan menerjemahkannya menjadi bahasa metode."
      },
      {
       "en": "Separate your concern zone from your control zone for one real career worry.",
       "id": "Memisahkan zona kekhawatiran dari zona kendali untuk satu kecemasan karier nyata."
      },
      {
       "en": "Define what honest self-assessment means — neither self-flagellation nor self-marketing.",
       "id": "Mendefinisikan arti penilaian diri yang jujur — bukan menyalahkan diri, bukan pula memasarkan diri."
      }
     ],
     "takeaways": [
      {
       "en": "“I'm bad at X” is a full stop; “I haven't trained X with a method yet” is a to-do item.",
       "id": "“Aku payah di X” adalah titik; “aku belum melatih X dengan metode” adalah daftar kerja."
      },
      {
       "en": "Energy spent inside your influence compounds; energy spent on concerns you cannot move evaporates.",
       "id": "Energi di dalam zona kendali menggandakan diri; energi pada kekhawatiran yang tak bisa kamu gerakkan menguap."
      },
      {
       "en": "The audit you are about to run only works at the honesty setting: kind to the person, ruthless about the data.",
       "id": "Audit yang akan kamu jalankan hanya bekerja pada setelan jujur: lembut pada orangnya, tegas pada datanya."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "Ability as a variable, not a verdict",
        "id": "Kemampuan sebagai variabel, bukan vonis"
       },
       "body": {
        "en": "Research on learning consistently shows that people who treat ability as improvable choose harder tasks, persist longer and recover faster from failure than those who treat it as fixed. You do not need the label “growth mindset” — you need its operating habit: every time you hear yourself say <i>I'm not a numbers person</i> or <i>I can't speak in public</i>, rewrite the sentence with a method in it. “I haven't drilled numerical tests yet.” “I haven't rehearsed a talk more than once.” The rewrite is not positive thinking; it is accurate thinking, because untrained is a different state from unable.",
        "id": "Riset pembelajaran secara konsisten menunjukkan orang yang memperlakukan kemampuan sebagai hal yang bisa tumbuh memilih tugas lebih sulit, bertahan lebih lama, dan pulih lebih cepat dari kegagalan dibanding yang menganggapnya tetap. Kamu tidak butuh label “growth mindset” — kamu butuh kebiasaan operasinya: tiap kali mendengar dirimu berkata <i>aku bukan orang angka</i> atau <i>aku tak bisa bicara di depan umum</i>, tulis ulang kalimatnya dengan metode di dalamnya. “Aku belum melatih tes numerik.” “Aku belum melatih presentasi lebih dari sekali.” Penulisan ulang ini bukan berpikir positif; ini berpikir akurat, karena belum terlatih adalah keadaan yang berbeda dari tidak mampu."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Concern vs influence",
        "id": "Kekhawatiran vs pengaruh"
       },
       "body": {
        "en": "List a career worry — say, “the job market is brutal this year”. Split it. The market's condition sits in your <b>concern zone</b>: real, important, and outside your control. Your application quality, test scores, portfolio, network and interview craft sit in your <b>control zone</b>: smaller, and entirely yours. The practical rule is allocation: 90% of your working hours go to influence, and concern gets ten minutes of reading, not a night of doomscrolling. People who invert that allocation feel informed and stay stuck.",
        "id": "Tulis satu kecemasan karier — misal, “pasar kerja tahun ini brutal”. Belah dua. Kondisi pasar ada di <b>zona kekhawatiran</b>: nyata, penting, dan di luar kendalimu. Kualitas lamaranmu, skor tes, portofolio, jaringan, dan keterampilan wawancara ada di <b>zona kendali</b>: lebih kecil, dan sepenuhnya milikmu. Aturan praktisnya adalah alokasi: 90% jam kerjamu untuk zona kendali, dan kekhawatiran mendapat sepuluh menit membaca, bukan semalam doomscrolling. Orang yang membalik alokasi itu merasa terinformasi dan tetap terjebak."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Honest self-assessment",
        "id": "Penilaian diri yang jujur"
       },
       "body": {
        "en": "The audit ahead asks you to rate energy, strengths and habits. Two failure modes corrupt it. <b>Self-flagellation</b> rates everything low to feel humble — the plan that follows overcorrects and exhausts you. <b>Self-marketing</b> rates everything high to feel ready — the plan that follows fixes nothing. The honest setting uses evidence: for each rating, ask <i>what would I show a stranger to justify this number?</i> If nothing comes to mind, the honest rating is lower — and now you know exactly what evidence to go build.",
        "id": "Audit di depan memintamu menilai energi, kekuatan, dan kebiasaan. Dua mode kegagalan merusaknya. <b>Menyalahkan diri</b> menilai semuanya rendah agar terasa rendah hati — rencana yang mengikuti akan berlebihan mengoreksi dan menghabiskanmu. <b>Memasarkan diri</b> menilai semuanya tinggi agar terasa siap — rencana yang mengikuti tak memperbaiki apa pun. Setelan jujur memakai bukti: untuk tiap nilai, tanyakan <i>apa yang akan kutunjukkan pada orang asing untuk membenarkan angka ini?</i> Jika tak ada yang terlintas, nilai jujurnya lebih rendah — dan kini kamu tahu persis bukti apa yang harus dibangun."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "Self-talk — fixed vs method",
        "id": "Ucapan batin — tetap vs metode"
       },
       "q": {
        "en": "Rewriting verdicts into to-do items",
        "id": "Menulis ulang vonis menjadi daftar kerja"
       },
       "weak": {
        "en": "“I bombed the group discussion. I'm just not a leader type. I'll aim for roles where I can work alone.”",
        "id": "“Aku hancur di diskusi kelompok. Aku memang bukan tipe pemimpin. Aku akan cari peran yang bisa kerja sendiri.”"
       },
       "strong": {
        "en": "“I bombed the group discussion — I spoke twice and never summarised. Next FGD I'll take the timekeeper role and close with a summary. That's trainable in The Pack, Module 4.”",
        "id": "“Aku hancur di diskusi kelompok — aku bicara dua kali dan tak pernah merangkum. FGD berikutnya aku ambil peran penjaga waktu dan tutup dengan rangkuman. Itu bisa dilatih di The Pack, Modul 4.”"
       },
       "why": {
        "en": "The strong version names observable behaviour, extracts a specific adjustment, and routes it to a training ground — the verdict never gets a vote.",
        "id": "Versi kuat menamai perilaku teramati, mengekstrak penyesuaian spesifik, dan mengarahkannya ke tempat latihan — vonis tidak pernah dapat suara."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "control zone",
        "id": "zona kendali"
       },
       "def": {
        "en": "The set of things your actions can actually move — where invested effort compounds.",
        "id": "Kumpulan hal yang benar-benar bisa digerakkan tindakanmu — tempat usaha yang ditanam menggandakan diri."
       }
      },
      {
       "term": {
        "en": "concern zone",
        "id": "zona kekhawatiran"
       },
       "def": {
        "en": "Everything that worries you, including what you cannot move — worth knowing, not worth living in.",
        "id": "Semua yang mencemaskanmu, termasuk yang tak bisa kamu gerakkan — layak diketahui, tak layak ditinggali."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Which statement shows the honest-assessment setting?",
        "id": "Pernyataan mana yang menunjukkan setelan penilaian jujur?"
       },
       "options": [
        {
         "en": "“I rate my communication 9 — I feel confident when talking to friends.”",
         "id": "“Nilai komunikasiku 9 — aku percaya diri saat bicara dengan teman.”"
        },
        {
         "en": "“I rate my communication 4 — I have no evidence beyond casual conversation, so that's what the number says until I build some.”",
         "id": "“Nilai komunikasiku 4 — aku belum punya bukti selain obrolan santai, jadi itu angkanya sampai aku membangun bukti.”"
        },
        {
         "en": "“I rate my communication 2 — I always mess everything up.”",
         "id": "“Nilai komunikasiku 2 — aku selalu mengacaukan semuanya.”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "It anchors the number to evidence and treats the gap as buildable — neither marketing nor flagellation.",
        "id": "Ia menjangkar angka pada bukti dan memperlakukan celah sebagai hal yang bisa dibangun — bukan pemasaran, bukan penyalahan diri."
       }
      }
     ],
     "tool": {
      "id": "audit",
      "mode": "home",
      "title": {
       "en": "Run your Personal Audit now",
       "id": "Jalankan Audit Pribadimu sekarang"
      },
      "body": {
       "en": "You have the posture — recovery loop, method language, evidence-based honesty. The audit turns it into your first development map.",
       "id": "Kamu sudah punya sikapnya — putaran pemulihan, bahasa metode, kejujuran berbasis bukti. Audit mengubahnya menjadi peta pengembangan pertamamu."
      },
      "cta": {
       "en": "Open the Personal Audit →",
       "id": "Buka Audit Pribadi →"
      }
     }
    }
   ],
   "hero": "../../assets/bg/ch1-realization.jpg",
   "heroPos": "center 30%"
  },
  {
   "num": 2,
   "title": {
    "en": "Self-Leadership Foundations",
    "id": "Fondasi Kepemimpinan Diri"
   },
   "overview": {
    "en": "Module 2 of The Map focuses on the foundations of self-leadership. Work through the lessons in order — each builds on the last.",
    "id": "Modul 2 dari The Map berfokus pada Fondasi Kepemimpinan Diri. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply the foundations of self-leadership to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Fondasi Kepemimpinan Diri pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "2.1",
     "title": {
      "en": "How Your Lens Shapes Your Results",
      "id": "Bagaimana Cara Pandang Membentuk Hasil"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Effectiveness is not a personality; it is an architecture. This lesson introduces the three layers of that architecture — principles, paradigms and practices — and shows why changing behaviour without changing the lens behind it never sticks.",
      "id": "Efektivitas bukan kepribadian; ia adalah arsitektur. Pelajaran ini memperkenalkan tiga lapis arsitektur itu — prinsip, paradigma, dan praktik — dan menunjukkan mengapa mengubah perilaku tanpa mengubah lensa di baliknya tidak pernah bertahan."
     },
     "objectives": [
      {
       "en": "Explain the difference between a principle (does not change), a paradigm (your lens) and a practice (your behaviour).",
       "id": "Menjelaskan beda prinsip (tidak berubah), paradigma (lensamu), dan praktik (perilakumu)."
      },
      {
       "en": "Identify one paradigm you currently hold about work that may be producing your least effective behaviour.",
       "id": "Mengenali satu paradigma tentang kerja yang kamu pegang yang mungkin menghasilkan perilakumu yang paling tidak efektif."
      },
      {
       "en": "Describe why managing yourself must come before leading or negotiating with others.",
       "id": "Menjelaskan mengapa mengelola diri harus mendahului memimpin atau bernegosiasi dengan orang lain."
      }
     ],
     "takeaways": [
      {
       "en": "Practices copied without their underlying paradigm decay in weeks; paradigm shifts change many practices at once.",
       "id": "Praktik yang ditiru tanpa paradigmanya membusuk dalam hitungan minggu; pergeseran paradigma mengubah banyak praktik sekaligus."
      },
      {
       "en": "Directed → self-directed → trusted with others is a sequence, not a menu — you cannot skip the middle.",
       "id": "Diarahkan → mengarahkan diri → dipercaya bersama orang lain adalah urutan, bukan menu — kamu tak bisa melompati bagian tengah."
      },
      {
       "en": "The next three lessons are all self-management: proactivity, direction, and priority.",
       "id": "Tiga pelajaran berikutnya semuanya tentang mengelola diri: proaktivitas, arah, dan prioritas."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "Three layers",
        "id": "Tiga lapis"
       },
       "body": {
        "en": "<b>Principles</b> are cause-and-effect laws that operate whether you believe in them or not: trust is built slowly and destroyed quickly; skill follows deliberate practice; harvests follow planting seasons. <b>Paradigms</b> are the mental maps through which you see those laws — “my grades define my worth”, “networking is manipulation”, “busy means productive”. <b>Practices</b> are what you actually do. Most self-improvement fails because it edits practices while leaving the paradigm untouched — like taping a new destination label onto an old map. The habits in this module work at the paradigm layer first.",
        "id": "<b>Prinsip</b> adalah hukum sebab-akibat yang berlaku entah kamu percaya atau tidak: kepercayaan dibangun perlahan dan hancur cepat; keterampilan mengikuti latihan yang disengaja; panen mengikuti musim tanam. <b>Paradigma</b> adalah peta mental tempat kamu melihat hukum-hukum itu — “nilaiku menentukan hargaku”, “networking itu manipulasi”, “sibuk berarti produktif”. <b>Praktik</b> adalah yang benar-benar kamu lakukan. Kebanyakan perbaikan diri gagal karena mengedit praktik sambil membiarkan paradigma — seperti menempel label tujuan baru pada peta lama. Kebiasaan di modul ini bekerja di lapis paradigma lebih dulu."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "The maturity sequence",
        "id": "Urutan kematangan"
       },
       "body": {
        "en": "Professional growth follows a fixed order. You start <b>directed</b> — outcomes are decided by teachers, parents, luck. The next three lessons build a <b>self-directed</b> layer: you own your responses, your direction and your schedule. Only then does being <b>trusted with others</b> — teamwork, leadership, negotiation — become real, because a team of people who cannot manage themselves is not a team, it is a queue of emergencies. Employers read this sequence instinctively: interview questions about ownership, planning and prioritisation are all probes of the self-directed layer.",
        "id": "Pertumbuhan profesional mengikuti urutan tetap. Kamu mulai <b>diarahkan</b> — hasil ditentukan guru, orang tua, keberuntungan. Tiga pelajaran berikutnya membangun lapis <b>mengarahkan diri</b>: kamu memiliki responsmu, arahmu, dan jadwalmu. Baru setelah itu <b>dipercaya bersama orang lain</b> — kerja tim, kepemimpinan, negosiasi — menjadi nyata, karena tim berisi orang yang tak bisa mengelola diri bukanlah tim, melainkan antrean keadaan darurat. Pemberi kerja membaca urutan ini secara naluriah: pertanyaan wawancara tentang kepemilikan, perencanaan, dan prioritas semuanya menguji lapis mengarahkan diri."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Auditing a paradigm",
        "id": "Mengaudit paradigma"
       },
       "body": {
        "en": "Take your least effective recurring behaviour — say, all-night cramming before deadlines. Ask: what would I have to believe for this behaviour to make sense? Perhaps “pressure is the only thing that makes me work”. That is the paradigm. Now test it against results over a semester, not a night: the pressure paradigm produces work, but also missed depth, damaged sleep and no compounding skill. A paradigm is disproven the same way any theory is — by its long-run data. Write yours down; you will rate it in the Personal Audit's habit baseline.",
        "id": "Ambil perilaku berulangmu yang paling tidak efektif — misal, begadang menjelang tenggat. Tanyakan: apa yang harus kupercayai agar perilaku ini masuk akal? Mungkin “hanya tekanan yang membuatku bekerja”. Itulah paradigmanya. Sekarang uji terhadap hasil selama satu semester, bukan satu malam: paradigma tekanan menghasilkan pekerjaan, tetapi juga kedalaman yang hilang, tidur yang rusak, dan keterampilan yang tak menggandakan diri. Paradigma dibantah sama seperti teori mana pun — oleh data jangka panjangnya. Tuliskan milikmu; kamu akan menilainya di garis dasar kebiasaan pada Audit Pribadi."
       }
      }
     ],
     "diagram": {
      "type": "ladder",
      "exhibit": {
       "en": "Exhibit 1: Self-management comes before leading others.",
       "id": "Peraga 1: Mengelola diri mendahului memimpin orang lain."
      },
      "title": {
       "en": "Directed → Self-directed → Trusted with others",
       "id": "Diarahkan → Mengarahkan diri → Dipercaya bersama orang lain"
      },
      "items": [
       {
        "h": {
         "en": "Directed",
         "id": "Diarahkan"
        },
        "sub": {
         "en": "Outcomes decided by others — “you take care of me”",
         "id": "Hasil ditentukan orang lain — “kamu yang mengurusku”"
        }
       },
       {
        "h": {
         "en": "Self-directed",
         "id": "Mengarahkan diri"
        },
        "sub": {
         "en": "Lessons 2.2–2.4: own your response, direction, priorities",
         "id": "Pelajaran 2.2–2.4: miliki respons, arah, prioritasmu"
        }
       },
       {
        "h": {
         "en": "Trusted with others",
         "id": "Dipercaya bersama orang lain"
        },
        "sub": {
         "en": "Teamwork and leadership built on self-management",
         "id": "Kerja tim dan kepemimpinan di atas pengelolaan diri"
        }
       }
      ],
      "longdesc": {
       "en": "A three-rung ladder. Bottom rung: directed, where outcomes are decided by others. Middle rung: self-directed, built across Lessons 2.2 to 2.4 — owning your response, your direction and your priorities. Top rung: trusted with others, where teamwork and leadership become possible because each member manages themselves.",
       "id": "Tangga tiga anak tangga. Terbawah: diarahkan, hasil ditentukan orang lain. Tengah: mengarahkan diri, dibangun di Pelajaran 2.2 sampai 2.4 — memiliki respons, arah, dan prioritas. Teratas: dipercaya bersama orang lain, tempat kerja tim dan kepemimpinan menjadi mungkin karena tiap anggota mengelola dirinya."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "paradigm",
        "id": "paradigma"
       },
       "def": {
        "en": "The mental map through which you interpret events — it decides what a fact means before you consciously think.",
        "id": "Peta mental tempat kamu menafsirkan peristiwa — ia memutuskan makna sebuah fakta sebelum kamu berpikir sadar."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A student copies a top performer's 5 a.m. routine and quits after two weeks. What most likely went wrong?",
        "id": "Seorang siswa meniru rutinitas jam 5 pagi seorang berprestasi dan berhenti setelah dua minggu. Apa yang paling mungkin salah?"
       },
       "options": [
        {
         "en": "The routine needs at least 66 days to work",
         "id": "Rutinitas butuh minimal 66 hari agar berhasil"
        },
        {
         "en": "They copied a practice without the paradigm that powers it",
         "id": "Ia meniru praktik tanpa paradigma yang menggerakkannya"
        },
        {
         "en": "Morning routines only work for morning people",
         "id": "Rutinitas pagi hanya berhasil untuk orang pagi"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Practices borrowed without their underlying lens have no root system. The performer's routine expresses their paradigm about energy and priority; copying the surface copies nothing that sustains it.",
        "id": "Praktik yang dipinjam tanpa lensanya tidak punya akar. Rutinitas sang berprestasi mengekspresikan paradigmanya tentang energi dan prioritas; meniru permukaan tidak meniru apa pun yang menopangnya."
       }
      }
     ],
     "quote": {
      "en": "Every outcome exists twice: once as the design you choose, then as the result you live.",
      "id": "Setiap hasil ada dua kali: pertama sebagai rancangan yang kamu pilih, lalu sebagai hasil yang kamu jalani."
     }
    },
    {
     "n": "2.2",
     "title": {
      "en": "Ownership: Acting Inside Your Control",
      "id": "Kepemilikan: Bertindak di Dalam Kendalimu"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Between what happens to you and what you do about it, there is a gap — and everything you build in your career is built in that gap. This lesson trains proactivity as an observable behaviour: response choice, ownership language, and initiative within your influence.",
      "id": "Antara yang terjadi padamu dan yang kamu lakukan terhadapnya, ada celah — dan semua yang kamu bangun dalam karier dibangun di celah itu. Pelajaran ini melatih proaktivitas sebagai perilaku teramati: memilih respons, bahasa kepemilikan, dan inisiatif di dalam zona kendalimu."
     },
     "objectives": [
      {
       "en": "Use the stimulus–gap–response model on one recent frustrating event.",
       "id": "Memakai model stimulus–celah–respons pada satu peristiwa menjengkelkan baru-baru ini."
      },
      {
       "en": "Translate three reactive sentences from your own vocabulary into proactive ones.",
       "id": "Menerjemahkan tiga kalimat reaktif dari kosakatamu sendiri menjadi proaktif."
      },
      {
       "en": "Design one act of initiative this week that requires nobody's permission.",
       "id": "Merancang satu tindakan inisiatif minggu ini yang tak butuh izin siapa pun."
      }
     ],
     "takeaways": [
      {
       "en": "Proactivity is not aggression or hustle — it is refusing to let the stimulus write your response for you.",
       "id": "Proaktivitas bukan agresi atau sok sibuk — ia menolak membiarkan stimulus menulis responsmu."
      },
      {
       "en": "Your language is a live diagnostic: “I have to” and “they made me” are reactive tells; “I choose” and “I will” are ownership tells.",
       "id": "Bahasamu adalah diagnostik langsung: “aku terpaksa” dan “mereka membuatku” adalah tanda reaktif; “aku memilih” dan “aku akan” adalah tanda kepemilikan."
      },
      {
       "en": "Initiative inside your influence needs no permission — which is exactly why interviewers ask for examples of it.",
       "id": "Inisiatif di dalam zona kendali tak butuh izin — itulah mengapa pewawancara meminta contohnya."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "The gap",
        "id": "Celah itu"
       },
       "body": {
        "en": "A rejection email arrives. The stimulus is fixed. What is not fixed is the two seconds after: one graduate spirals for a week; another runs the recovery loop and books the next application that evening. Same stimulus, different careers. Proactivity is the practice of noticing the gap and choosing inside it. It is easiest to see under small stimuli — a sarcastic comment, a delayed reply, a boring task — so that is where you train it, long before the big stimuli arrive.",
        "id": "Email penolakan tiba. Stimulusnya tetap. Yang tidak tetap adalah dua detik sesudahnya: satu lulusan terpuruk seminggu; yang lain menjalankan putaran pemulihan dan mengirim lamaran berikutnya malam itu. Stimulus sama, karier berbeda. Proaktivitas adalah praktik menyadari celah dan memilih di dalamnya. Paling mudah terlihat pada stimulus kecil — komentar sinis, balasan tertunda, tugas membosankan — maka di sanalah kamu melatihnya, jauh sebelum stimulus besar datang."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "Ownership language",
        "id": "Bahasa kepemilikan"
       },
       "body": {
        "en": "Reactive language outsources authorship: <i>I have to attend</i>, <i>she makes me furious</i>, <i>there's nothing I can do</i>, <i>that's just how I am</i>. Proactive language takes it back: <i>I choose to attend because the relationship matters</i>, <i>I'm choosing anger — what else is available?</i>, <i>let's look at what we can do</i>, <i>I can train a different pattern</i>. This is not wording cosmetics. Language rehearses a worldview thousands of times a day, and hiring managers hear the difference within minutes — candidates who narrate their history as a series of choices sound like owners; candidates who narrate it as weather sound like passengers.",
        "id": "Bahasa reaktif menyerahkan kepengarangan: <i>aku terpaksa hadir</i>, <i>dia membuatku murka</i>, <i>tak ada yang bisa kulakukan</i>, <i>memang begini aku</i>. Bahasa proaktif mengambilnya kembali: <i>aku memilih hadir karena hubungannya penting</i>, <i>aku sedang memilih marah — apa pilihan lain?</i>, <i>mari lihat apa yang bisa kita lakukan</i>, <i>aku bisa melatih pola berbeda</i>. Ini bukan kosmetik kata. Bahasa melatih cara pandang ribuan kali sehari, dan manajer rekrutmen mendengar bedanya dalam hitungan menit — kandidat yang menarasikan riwayatnya sebagai rangkaian pilihan terdengar seperti pemilik; yang menarasikannya sebagai cuaca terdengar seperti penumpang."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Permissionless initiative",
        "id": "Inisiatif tanpa izin"
       },
       "body": {
        "en": "Inside your control zone there is always a move available that requires nobody's approval: rebuild your CV against a real job description, cold-message one alum for a fifteen-minute call, prototype the spreadsheet your team keeps complaining about, run one mock interview. Proactive people keep a running list of such moves and execute one whenever they feel stuck — because motion inside influence is the antidote to anxiety about concern. This week's exercise: pick one, do it, log it in your audit.",
        "id": "Di dalam zona kendalimu selalu ada langkah yang tak butuh persetujuan siapa pun: bangun ulang CV terhadap deskripsi kerja nyata, kirim pesan ke satu alumni untuk panggilan lima belas menit, buat purwarupa spreadsheet yang terus dikeluhkan timmu, jalankan satu simulasi wawancara. Orang proaktif menyimpan daftar langkah semacam itu dan mengeksekusi satu setiap kali merasa buntu — karena gerak di dalam pengaruh adalah penawar kecemasan atas kekhawatiran. Latihan minggu ini: pilih satu, lakukan, catat di auditmu."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "Interview answer — passenger vs owner",
        "id": "Jawaban wawancara — penumpang vs pemilik"
       },
       "q": {
        "en": "“Tell me about a difficult period and how you handled it.”",
        "id": "“Ceritakan masa sulit dan cara kamu menghadapinya.”"
       },
       "weak": {
        "en": "“My thesis supervisor was never available, so my thesis got delayed a semester. It was really unfair because other students had responsive supervisors.”",
        "id": "“Dosen pembimbingku tak pernah bisa ditemui, jadi skripsiku telat satu semester. Sangat tidak adil karena mahasiswa lain punya pembimbing responsif.”"
       },
       "strong": {
        "en": "“My supervisor had very limited availability, so after two missed meetings I changed method: I sent one-page updates every Friday with three specific questions, and booked office hours two weeks ahead. Turnaround went from three weeks to four days, and I defended on schedule.”",
        "id": "“Pembimbingku sangat sulit ditemui, jadi setelah dua pertemuan gagal aku mengubah metode: kukirim ringkasan satu halaman tiap Jumat dengan tiga pertanyaan spesifik, dan kupesan jam konsultasi dua minggu di muka. Waktu tanggapan turun dari tiga minggu ke empat hari, dan aku sidang tepat waktu.”"
       },
       "why": {
        "en": "Same stimulus, but the strong answer relocates the story inside the control zone: a method change, a measurable result, ownership without blaming.",
        "id": "Stimulus sama, tetapi jawaban kuat memindahkan cerita ke dalam zona kendali: perubahan metode, hasil terukur, kepemilikan tanpa menyalahkan."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Confusing proactivity with saying yes to everything",
         "id": "Menyamakan proaktivitas dengan mengiyakan segalanya"
        },
        "fix": {
         "en": "Proactivity includes proactive no's — declining what pulls you out of your priorities is a chosen response too.",
         "id": "Proaktivitas termasuk penolakan proaktif — menolak yang menarikmu keluar dari prioritas juga respons yang dipilih."
        }
       },
       {
        "h": {
         "en": "Training it only on big events",
         "id": "Melatihnya hanya pada peristiwa besar"
        },
        "fix": {
         "en": "The gap is trained on small stimuli daily — emails, comments, queues — so it holds when a rejection or layoff arrives.",
         "id": "Celah dilatih pada stimulus kecil setiap hari — email, komentar, antrean — agar bertahan saat penolakan atau PHK datang."
        }
       },
       {
        "h": {
         "en": "Ownership language as self-blame",
         "id": "Bahasa kepemilikan sebagai menyalahkan diri"
        },
        "fix": {
         "en": "Owning your response is not owning every cause. The market, the layoff, the supervisor may be genuinely outside you — your next move never is.",
         "id": "Memiliki respons bukan memiliki semua sebab. Pasar, PHK, pembimbing bisa benar-benar di luar dirimu — langkah berikutmu tidak pernah."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "Which sentence is the proactive translation of “I have to work weekends, my manager gives me too much”?",
        "id": "Mana terjemahan proaktif dari “aku terpaksa kerja akhir pekan, manajerku memberi terlalu banyak”?"
       },
       "options": [
        {
         "en": "“Weekends are just part of proving yourself early in a career.”",
         "id": "“Akhir pekan memang bagian dari membuktikan diri di awal karier.”"
        },
        {
         "en": "“I've been accepting weekend work without raising load — this week I'll bring my task list to my manager and ask which two items move.”",
         "id": "“Aku selama ini menerima kerja akhir pekan tanpa mengangkat soal beban — minggu ini kubawa daftar tugasku ke manajer dan kutanya dua item mana yang bisa digeser.”"
        },
        {
         "en": "“I'll quietly do less until someone notices the load.”",
         "id": "“Aku akan diam-diam mengurangi kerja sampai ada yang sadar bebannya.”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "It converts a complaint about others into a specific, permissioned-by-nobody move inside the control zone — with the conversation as the chosen response.",
        "id": "Ia mengubah keluhan tentang orang lain menjadi langkah spesifik tanpa izin di dalam zona kendali — dengan percakapan sebagai respons yang dipilih."
       }
      }
     ]
    },
    {
     "n": "2.3",
     "title": {
      "en": "Designing the Outcome First",
      "id": "Merancang Hasil Lebih Dulu"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Every outcome exists twice: once as the design you choose, then as the result you live. Careers that skip the design stage get designed by default — by parents' expectations, feed algorithms and whoever offers first. This lesson builds the second discipline: designing the outcome first, at the scale of a career and of a week.",
      "id": "Setiap hasil ada dua kali: pertama sebagai rancangan yang kamu pilih, lalu sebagai hasil yang kamu jalani. Karier yang melewatkan tahap rancangan akan dirancang secara default — oleh harapan orang tua, algoritme linimasa, dan siapa pun yang menawar lebih dulu. Pelajaran ini membangun disiplin kedua: merancang hasil lebih dulu, pada skala karier dan skala minggu."
     },
     "objectives": [
      {
       "en": "Draft a personal mission sentence that names contribution, not titles.",
       "id": "Menyusun kalimat misi pribadi yang menamai kontribusi, bukan jabatan."
      },
      {
       "en": "Define a 3-year professional outcome specific enough to reverse-plan from.",
       "id": "Menetapkan hasil profesional 3 tahun yang cukup spesifik untuk direncanakan mundur."
      },
      {
       "en": "Connect the mission to The Range: direction chosen by design, not by first offer.",
       "id": "Menghubungkan misi dengan The Range: arah dipilih dengan rancangan, bukan tawaran pertama."
      }
     ],
     "takeaways": [
      {
       "en": "If you do not write the script, you will still perform one — someone else's.",
       "id": "Jika kamu tidak menulis naskah, kamu tetap akan memerankannya — naskah orang lain."
      },
      {
       "en": "A mission names the contribution you want to be trusted with; titles are just vehicles that carry it.",
       "id": "Misi menamai kontribusi yang ingin kamu percayakan pada dirimu; jabatan hanyalah kendaraan yang membawanya."
      },
      {
       "en": "Reverse planning turns a 3-year outcome into this semester's checklist.",
       "id": "Perencanaan mundur mengubah hasil 3 tahun menjadi daftar periksa semester ini."
      }
     ],
     "sections": [
      {
       "icon": "flag",
       "h": {
        "en": "The design stage",
        "id": "Tahap rancangan"
       },
       "body": {
        "en": "A building exists on paper before it exists in concrete; a career deserves the same courtesy. The design stage is not a fantasy about titles — it is a working answer to three questions: <b>What problems do I want to be trusted with?</b> <b>What kind of person do I want colleagues to describe when I'm not in the room?</b> <b>What does my work make possible for other people?</b> Write rough answers now, in pencil. The point of the design stage is not accuracy — it is authorship. You will revise it every year; you will never regret having one.",
        "id": "Gedung ada di atas kertas sebelum ada dalam beton; karier layak mendapat perlakuan sama. Tahap rancangan bukan fantasi tentang jabatan — ia jawaban kerja atas tiga pertanyaan: <b>Masalah apa yang ingin kupercayakan pada diriku?</b> <b>Orang seperti apa yang ingin digambarkan kolegaku saat aku tak di ruangan?</b> <b>Apa yang dimungkinkan pekerjaanku bagi orang lain?</b> Tulis jawaban kasarnya sekarang, dengan pensil. Inti tahap rancangan bukan akurasi — melainkan kepengarangan. Kamu akan merevisinya tiap tahun; kamu tak akan pernah menyesal memilikinya."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "From mission to 3-year outcome",
        "id": "Dari misi ke hasil 3 tahun"
       },
       "body": {
        "en": "A mission is a compass; it needs a first landmark. Convert it into one 3-year outcome with four properties: a <b>domain</b> (data analytics in financial services), a <b>level</b> (trusted to own analyses end-to-end), an <b>evidence artefact</b> (a portfolio of shipped work), and a <b>constraint you refuse to violate</b> (health, integrity, family). Then reverse-plan: what must be true in 18 months for that to be reachable? In 6? This semester? The Range's career graph gives you honest data for the domain choice; the audit tracks whether this semester's row is actually happening.",
        "id": "Misi adalah kompas; ia butuh penanda pertama. Ubah menjadi satu hasil 3 tahun dengan empat sifat: <b>ranah</b> (analitik data di layanan keuangan), <b>level</b> (dipercaya memiliki analisis ujung-ke-ujung), <b>artefak bukti</b> (portofolio karya yang dirilis), dan <b>batas yang tak mau kamu langgar</b> (kesehatan, integritas, keluarga). Lalu rencanakan mundur: apa yang harus benar dalam 18 bulan agar itu terjangkau? Dalam 6? Semester ini? Peta karier The Range memberi data jujur untuk memilih ranah; audit melacak apakah baris semester ini benar-benar terjadi."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Default scripts",
        "id": "Naskah default"
       },
       "body": {
        "en": "Without a design stage, three scripts compete to run your career. The <b>inheritance script</b>: study what the family respects, join what the family recognises. The <b>feed script</b>: chase whatever role is trending this year. The <b>first-offer script</b>: accept whoever says yes first, then let that accident define the decade. None of these are malicious — they are just unauthored. The test: for each big choice you are facing, ask <i>whose script is this line from?</i> If you cannot trace it to your own mission, it deserves a rewrite before you act on it.",
        "id": "Tanpa tahap rancangan, tiga naskah bersaing menjalankan kariermu. <b>Naskah warisan</b>: pelajari yang dihormati keluarga, masuki yang dikenali keluarga. <b>Naskah linimasa</b>: kejar peran apa pun yang sedang tren tahun ini. <b>Naskah tawaran pertama</b>: terima siapa pun yang bilang ya lebih dulu, lalu biarkan kebetulan itu mendefinisikan satu dekade. Tak satu pun jahat — hanya tanpa pengarang. Ujiannya: untuk tiap pilihan besar yang kamu hadapi, tanyakan <i>dari naskah siapa dialog ini?</i> Jika tak bisa kamu telusuri ke misimu sendiri, ia layak ditulis ulang sebelum kamu jalankan."
       }
      }
     ],
     "diagram": {
      "type": "timeline",
      "exhibit": {
       "en": "Exhibit 1: Reverse planning — from a 3-year outcome back to this semester.",
       "id": "Peraga 1: Perencanaan mundur — dari hasil 3 tahun kembali ke semester ini."
      },
      "title": {
       "en": "Reverse planning",
       "id": "Perencanaan mundur"
      },
      "items": [
       {
        "h": {
         "en": "3 years",
         "id": "3 tahun"
        },
        "sub": {
         "en": "Domain + level + evidence artefact + protected constraint",
         "id": "Ranah + level + artefak bukti + batas yang dijaga"
        }
       },
       {
        "h": {
         "en": "18 months",
         "id": "18 bulan"
        },
        "sub": {
         "en": "First role or major project in the domain underway",
         "id": "Peran atau proyek besar pertama di ranah sedang berjalan"
        }
       },
       {
        "h": {
         "en": "6 months",
         "id": "6 bulan"
        },
        "sub": {
         "en": "Applications live, portfolio v1, network of 10 real contacts",
         "id": "Lamaran berjalan, portofolio v1, jaringan 10 kontak nyata"
        }
       },
       {
        "h": {
         "en": "This semester",
         "id": "Semester ini"
        },
        "sub": {
         "en": "Skills chosen, audit running, first artefact started",
         "id": "Keterampilan dipilih, audit berjalan, artefak pertama dimulai"
        }
       }
      ],
      "longdesc": {
       "en": "A four-point timeline read right to left as a plan and left to right as execution: a 3-year outcome defines an 18-month milestone, which defines a 6-month state, which defines this semester's concrete checklist.",
       "id": "Garis waktu empat titik dibaca kanan-ke-kiri sebagai rencana dan kiri-ke-kanan sebagai eksekusi: hasil 3 tahun menentukan tonggak 18 bulan, yang menentukan keadaan 6 bulan, yang menentukan daftar periksa konkret semester ini."
      }
     },
     "glossary": [
      {
       "term": {
        "en": "reverse planning",
        "id": "perencanaan mundur"
       },
       "def": {
        "en": "Planning from the outcome backwards to today, so each horizon inherits its requirements from the one after it.",
        "id": "Merencanakan dari hasil ke belakang menuju hari ini, sehingga tiap horizon mewarisi persyaratannya dari horizon sesudahnya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Which 3-year outcome is specific enough to reverse-plan from?",
        "id": "Hasil 3 tahun mana yang cukup spesifik untuk direncanakan mundur?"
       },
       "options": [
        {
         "en": "“Be successful and financially stable”",
         "id": "“Sukses dan stabil secara finansial”"
        },
        {
         "en": "“Own end-to-end data analyses in a financial-services team, with a portfolio of five shipped projects, without sacrificing my health”",
         "id": "“Memiliki analisis data ujung-ke-ujung di tim layanan keuangan, dengan portofolio lima proyek rilis, tanpa mengorbankan kesehatanku”"
        },
        {
         "en": "“Work at a big-name company that people respect”",
         "id": "“Bekerja di perusahaan ternama yang dihormati orang”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "It names domain, level, evidence artefact and a protected constraint — each horizon behind it can now be derived.",
        "id": "Ia menamai ranah, level, artefak bukti, dan batas yang dijaga — tiap horizon di belakangnya kini bisa diturunkan."
       }
      }
     ],
     "tool": {
      "id": "audit",
      "mode": "home",
      "title": {
       "en": "Write the mission into your audit",
       "id": "Tuliskan misi ke dalam auditmu"
      },
      "body": {
       "en": "The Personal Audit stores your mission draft and 3-year outcome next to your baseline — so every later reading is measured against a direction you authored.",
       "id": "Audit Pribadi menyimpan draf misi dan hasil 3 tahunmu di samping garis dasarmu — sehingga tiap pembacaan berikutnya diukur terhadap arah yang kamu tulis sendiri."
      },
      "cta": {
       "en": "Open the Personal Audit →",
       "id": "Buka Audit Pribadi →"
      }
     }
    },
    {
     "n": "2.4",
     "title": {
      "en": "Defending the Important Against the Urgent",
      "id": "Membela yang Penting dari yang Mendesak"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "You now have a direction; this lesson defends it. Defending the important against the urgent is the discipline of executing your design stage against the pull of everything urgent — built on one matrix, one weekly ritual, and the most underrated career skill: a graceful no.",
      "id": "Kamu kini punya arah; pelajaran ini mempertahankannya. Membela yang penting dari yang mendesak adalah disiplin mengeksekusi tahap rancanganmu melawan tarikan segala yang mendesak — dibangun di atas satu matriks, satu ritual mingguan, dan keterampilan karier paling diremehkan: penolakan yang anggun."
     },
     "objectives": [
      {
       "en": "Sort a real week of your tasks into the four quadrants of urgent × important.",
       "id": "Memilah satu minggu nyata tugasmu ke empat kuadran mendesak × penting."
      },
      {
       "en": "Run a 20-minute weekly preview that schedules important-not-urgent work before anything else.",
       "id": "Menjalankan tinjauan mingguan 20 menit yang menjadwalkan kerja penting–tidak mendesak sebelum yang lain."
      },
      {
       "en": "Deliver a graceful no that protects a priority without damaging a relationship.",
       "id": "Menyampaikan penolakan anggun yang melindungi prioritas tanpa merusak hubungan."
      }
     ],
     "takeaways": [
      {
       "en": "Important-not-urgent work is where careers are actually built: skill practice, relationships, health, planning.",
       "id": "Kerja penting–tidak mendesak adalah tempat karier benar-benar dibangun: latihan keterampilan, hubungan, kesehatan, perencanaan."
      },
      {
       "en": "Nothing defends that work except a calendar block and a rehearsed no.",
       "id": "Tak ada yang mempertahankan kerja itu kecuali blok kalender dan penolakan yang sudah dilatih."
      },
      {
       "en": "Every yes is an unpriced no to something else — price it before you give it.",
       "id": "Setiap ya adalah tidak tanpa harga bagi hal lain — hargai dulu sebelum kamu berikan."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "The urgency trap",
        "id": "Perangkap kemendesakan"
       },
       "body": {
        "en": "Urgency is a sensation, not a measure of value. Notifications, other people's deadlines and minor crises all feel urgent because they tap you on the shoulder; skill-building, relationship-building and health never tap — they wait, quietly compounding or quietly decaying. Sort any week into four quadrants: <b>I</b> urgent+important (real deadlines, real crises), <b>II</b> important, not urgent (practice, planning, people, health), <b>III</b> urgent, not important (most pings and many meetings), <b>IV</b> neither (doomscrolling). The trap: III disguises itself as I, and eats the hours II needed. People who live in I and III are always busy and never further.",
        "id": "Kemendesakan adalah sensasi, bukan ukuran nilai. Notifikasi, tenggat orang lain, dan krisis kecil terasa mendesak karena menepuk pundakmu; membangun keterampilan, hubungan, dan kesehatan tak pernah menepuk — mereka menunggu, diam-diam menggandakan diri atau diam-diam membusuk. Pilah satu minggu ke empat kuadran: <b>I</b> mendesak+penting (tenggat nyata, krisis nyata), <b>II</b> penting, tidak mendesak (latihan, perencanaan, orang, kesehatan), <b>III</b> mendesak, tidak penting (kebanyakan notifikasi dan banyak rapat), <b>IV</b> bukan keduanya (doomscrolling). Perangkapnya: III menyamar sebagai I, dan memakan jam yang dibutuhkan II. Orang yang hidup di I dan III selalu sibuk dan tak pernah lebih maju."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "The weekly preview",
        "id": "Tinjauan mingguan"
       },
       "body": {
        "en": "Once a week, twenty minutes, three moves. <b>Review</b> the mission and 3-year outcome you designed in Lesson 2.3 — thirty seconds, just to load the destination. <b>Choose</b> two or three important-not-urgent blocks for the coming week — a two-hour skill session, one coffee chat, three workouts — and put them in the calendar first, like big rocks before gravel. <b>Preview</b> the known urgent-and-important items so they have space and do not metastasise into all-nighters. The order matters: schedule II before I fills the week, because I always expands to the space available.",
        "id": "Sekali seminggu, dua puluh menit, tiga langkah. <b>Tinjau</b> misi dan hasil 3 tahun yang kamu rancang di Pelajaran 2.3 — tiga puluh detik, sekadar memuat tujuan. <b>Pilih</b> dua atau tiga blok penting–tidak mendesak untuk minggu depan — sesi keterampilan dua jam, satu obrolan kopi, tiga olahraga — dan masukkan ke kalender lebih dulu, seperti batu besar sebelum kerikil. <b>Pratinjau</b> item mendesak-dan-penting yang sudah diketahui agar punya ruang dan tak menjalar jadi begadang. Urutannya penting: jadwalkan II sebelum I mengisi minggu, karena I selalu memuai ke ruang yang tersedia."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "The graceful no",
        "id": "Penolakan yang anggun"
       },
       "body": {
        "en": "A no has three parts: <b>appreciation</b> (thank the asker sincerely), <b>the protected reason</b> (name what the yes would damage — “I've committed Thursday evenings to test prep until June”), and <b>an alternative</b> (a later date, a smaller scope, another person, or a clean decline). “Thanks for thinking of me — I can't take this on before June because my evenings are committed to certification prep. If it can wait until July, I'm in.” Notice what it does not contain: apology spirals, fake maybes, or invented excuses. People respect a no that shows them your priorities; they resent a yes that gets delivered late and badly.",
        "id": "Penolakan punya tiga bagian: <b>apresiasi</b> (terima kasih yang tulus), <b>alasan yang dijaga</b> (namai apa yang akan dirusak oleh ya — “malam Kamisku sudah kukomit untuk persiapan tes sampai Juni”), dan <b>alternatif</b> (tanggal lain, lingkup lebih kecil, orang lain, atau penolakan bersih). “Terima kasih sudah mengingatku — aku tak bisa ambil ini sebelum Juni karena malamku sudah untuk persiapan sertifikasi. Kalau bisa menunggu Juli, aku ikut.” Perhatikan yang tak ada di dalamnya: spiral permintaan maaf, mungkin palsu, atau alasan karangan. Orang menghormati penolakan yang menunjukkan prioritasmu; mereka kesal pada ya yang ditunaikan terlambat dan buruk."
       }
      }
     ],
     "diagram": {
      "type": "quad",
      "exhibit": {
       "en": "Exhibit 1: The urgency–importance matrix. Careers are built in the important-not-urgent cell.",
       "id": "Peraga 1: Matriks kemendesakan–kepentingan. Karier dibangun di sel penting–tidak mendesak."
      },
      "title": {
       "en": "Urgent × Important",
       "id": "Mendesak × Penting"
      },
      "items": [
       {
        "h": {
         "en": "I · Crises & deadlines",
         "id": "I · Krisis & tenggat"
        },
        "sub": {
         "en": "Do now — but shrink it with planning",
         "id": "Kerjakan sekarang — tapi kecilkan lewat perencanaan"
        }
       },
       {
        "h": {
         "en": "II · Building",
         "id": "II · Membangun"
        },
        "sub": {
         "en": "Practice, people, health, planning — schedule first",
         "id": "Latihan, orang, kesehatan, perencanaan — jadwalkan lebih dulu"
        }
       },
       {
        "h": {
         "en": "III · Interruptions",
         "id": "III · Interupsi"
        },
        "sub": {
         "en": "Urgent, not yours — decline, batch or delegate",
         "id": "Mendesak, bukan milikmu — tolak, kelompokkan, atau delegasikan"
        }
       },
       {
        "h": {
         "en": "IV · Escapes",
         "id": "IV · Pelarian"
        },
        "sub": {
         "en": "Neither — notice the trigger, cap the time",
         "id": "Bukan keduanya — sadari pemicunya, batasi waktunya"
        }
       }
      ],
      "longdesc": {
       "en": "A two-by-two matrix. The urgent-and-important cell: crises and deadlines — do them now, and shrink them over time with planning. The important-not-urgent cell: skill practice, relationships, health and planning — schedule these first. The urgent-but-not-important cell: interruptions and many meetings — decline, batch or delegate. The neither-urgent-nor-important cell: escapes — notice the trigger and cap the time.",
       "id": "Matriks dua-kali-dua. Sel mendesak-dan-penting: krisis dan tenggat — kerjakan sekarang, kecilkan seiring waktu lewat perencanaan. Sel penting–tidak mendesak: latihan keterampilan, hubungan, kesehatan, perencanaan — jadwalkan lebih dulu. Sel mendesak-tidak-penting: interupsi dan banyak rapat — tolak, kelompokkan, atau delegasikan. Sel bukan keduanya: pelarian — sadari pemicu dan batasi waktu."
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Scheduling important-not-urgent work “when there's time left”",
         "id": "Menjadwalkan kerja penting–tidak mendesak “kalau ada sisa waktu”"
        },
        "fix": {
         "en": "There is never time left. Big rocks go in the calendar first; gravel fills around them.",
         "id": "Tidak pernah ada sisa waktu. Batu besar masuk kalender lebih dulu; kerikil mengisi sekelilingnya."
        }
       },
       {
        "h": {
         "en": "Treating every request as urgent-and-important",
         "id": "Memperlakukan setiap permintaan sebagai mendesak-dan-penting"
        },
        "fix": {
         "en": "Ask “what happens if this waits 24 hours?” — most so-called urgencies survive the question.",
         "id": "Tanyakan “apa yang terjadi jika ini menunggu 24 jam?” — kebanyakan yang katanya mendesak lolos dari pertanyaan itu."
        }
       },
       {
        "h": {
         "en": "The apologetic, door-open no",
         "id": "Penolakan penuh maaf dengan pintu terbuka"
        },
        "fix": {
         "en": "“Maybe later, so sorry, I'll try” invites the same request next week. Appreciate, name the protected reason, offer one alternative, stop.",
         "id": "“Mungkin nanti, maaf banget, kuusahakan” mengundang permintaan sama minggu depan. Apresiasi, namai alasan yang dijaga, tawarkan satu alternatif, berhenti."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "A friend asks for all-evening help moving apartments on the night you reserved for interview practice, two days before a real interview. What does the important-versus-urgent discipline suggest?",
        "id": "Seorang teman minta bantuan pindahan sepanjang malam pada malam yang kamu sisihkan untuk latihan wawancara, dua hari sebelum wawancara sungguhan. Apa saran disiplin penting-lawan-mendesak?"
       },
       "options": [
        {
         "en": "Help — relationships are important-not-urgent, so they always win",
         "id": "Bantu — hubungan itu penting–tidak mendesak, jadi selalu menang"
        },
        {
         "en": "Decline with appreciation, the protected reason, and an alternative — e.g. two hours Saturday",
         "id": "Tolak dengan apresiasi, alasan yang dijaga, dan alternatif — mis. dua jam Sabtu"
        },
        {
         "en": "Say yes, then practice after midnight to fit both",
         "id": "Bilang ya, lalu berlatih lewat tengah malam agar keduanya muat"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Both the friendship and the interview are important; the graceful-no format protects the scheduled priority while genuinely serving the relationship with a real alternative.",
        "id": "Persahabatan dan wawancara sama-sama penting; format penolakan anggun melindungi prioritas terjadwal sambil sungguh melayani hubungan lewat alternatif nyata."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/bg/stage-foundation.jpg",
   "heroPos": "center 40%"
  },
  {
   "num": 3,
   "title": {
    "en": "Problem Solving 101 – Improve Our Life",
    "id": "Pemecahan Masalah 101 – Tingkatkan Kehidupan Kita"
   },
   "overview": {
    "en": "Module 3 of The Map focuses on problem solving 101 – improve our life. Work through the lessons in order — each builds on the last.",
    "id": "Modul 3 dari The Map berfokus pada Pemecahan Masalah 101 – Tingkatkan Kehidupan Kita. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply problem solving 101 – improve our life to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Pemecahan Masalah 101 – Tingkatkan Kehidupan Kita pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "3.1",
     "title": {
      "en": "Intelligence as the Ability to Achieve Desired Outcomes",
      "id": "Kecerdasan sebagai Kemampuan Mencapai Hasil yang Diinginkan"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Strip the mystique from intelligence: in working life it is the reliability with which you convert intentions into outcomes. This lesson reframes problem-solving as that conversion process and shows why employers test it more heavily than knowledge.",
      "id": "Lucuti mistik dari kecerdasan: dalam kehidupan kerja, ia adalah keandalan mengubah niat menjadi hasil. Pelajaran ini membingkai ulang pemecahan masalah sebagai proses konversi itu dan menunjukkan mengapa pemberi kerja mengujinya lebih berat daripada pengetahuan."
     },
     "objectives": [
      {
       "en": "Define practical intelligence as outcome-reaching and identify its four working components.",
       "id": "Mendefinisikan kecerdasan praktis sebagai pencapaian hasil dan mengenali empat komponen kerjanya."
      },
      {
       "en": "Explain why a defined problem is half-solved, with the gap-statement format.",
       "id": "Menjelaskan mengapa masalah yang terdefinisi sudah setengah terpecahkan, dengan format pernyataan celah."
      },
      {
       "en": "Recognise where problem-solving is tested in hiring: cases, tests, FGDs and probing interviews.",
       "id": "Mengenali di mana pemecahan masalah diuji dalam rekrutmen: kasus, tes, FGD, dan wawancara mendalam."
      }
     ],
     "takeaways": [
      {
       "en": "In the workplace nobody asks how much you know; they ask what happened to the thing you owned.",
       "id": "Di tempat kerja tak ada yang bertanya seberapa banyak kamu tahu; mereka bertanya apa yang terjadi pada hal yang kamu miliki."
      },
      {
       "en": "A problem is a gap between a current state and a desired state, plus an obstacle — write all three or you have a complaint, not a problem.",
       "id": "Masalah adalah celah antara keadaan kini dan keadaan yang diinginkan, plus hambatan — tulis ketiganya atau kamu punya keluhan, bukan masalah."
      },
      {
       "en": "Outcome-reaching is trainable because each component — defining, structuring, deciding, executing — is trainable.",
       "id": "Pencapaian hasil bisa dilatih karena tiap komponen — mendefinisikan, menstrukturkan, memutuskan, mengeksekusi — bisa dilatih."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "Intelligence, redefined for work",
        "id": "Kecerdasan, didefinisikan ulang untuk kerja"
       },
       "body": {
        "en": "School measures how well you absorb and reproduce knowledge. Work measures something else: given a fuzzy goal, limited information and other people, how reliably do you produce the intended result? Call it practical intelligence. It has four working components: <b>defining</b> the real problem beneath the stated one, <b>structuring</b> it into parts you can attack, <b>deciding</b> under uncertainty with incomplete data, and <b>executing</b> through people and setbacks. Grades correlate weakly with this; deliberate practice correlates strongly — which is the best news in this module.",
        "id": "Sekolah mengukur seberapa baik kamu menyerap dan mereproduksi pengetahuan. Kerja mengukur hal lain: dengan tujuan samar, informasi terbatas, dan orang lain, seberapa andal kamu menghasilkan hasil yang dimaksud? Sebut saja kecerdasan praktis. Ia punya empat komponen kerja: <b>mendefinisikan</b> masalah nyata di balik yang dinyatakan, <b>menstrukturkan</b> menjadi bagian yang bisa diserang, <b>memutuskan</b> dalam ketidakpastian dengan data tak lengkap, dan <b>mengeksekusi</b> melalui orang dan kemunduran. Nilai akademik berkorelasi lemah dengan ini; latihan yang disengaja berkorelasi kuat — kabar terbaik di modul ini."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The gap statement",
        "id": "Pernyataan celah"
       },
       "body": {
        "en": "Most stated problems are actually symptoms or complaints: “our student organisation is dying”. Convert to a gap statement: <b>current state</b> (12 active members, down from 40 last year), <b>desired state</b> (30 active members by December), <b>obstacle</b> (we do not know why members leave after their first month). Suddenly there are lines of attack: interview leavers, examine the first-month experience, test retention fixes. The discipline is refusing to discuss solutions until the three parts are written down — because a solution to an undefined problem is a lottery ticket.",
        "id": "Kebanyakan masalah yang dinyatakan sebenarnya gejala atau keluhan: “organisasi mahasiswa kami sekarat”. Ubah menjadi pernyataan celah: <b>keadaan kini</b> (12 anggota aktif, turun dari 40 tahun lalu), <b>keadaan diinginkan</b> (30 anggota aktif per Desember), <b>hambatan</b> (kami tak tahu mengapa anggota pergi setelah bulan pertama). Tiba-tiba ada jalur serangan: wawancarai yang keluar, periksa pengalaman bulan pertama, uji perbaikan retensi. Disiplinnya adalah menolak membahas solusi sebelum tiga bagian tertulis — karena solusi untuk masalah tak terdefinisi adalah tiket lotre."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "Where hiring tests this",
        "id": "Di mana rekrutmen mengujinya"
       },
       "body": {
        "en": "Every serious selection process probes outcome-reaching somewhere: aptitude tests probe structured reasoning under time; group discussions probe structuring and deciding with other people in the room; case interviews probe the full chain on a business problem; behavioural interviews probe execution — “walk me through what you actually did”. The Pack trains each of those formats specifically. This module gives you the underlying engine, so those formats become expressions of one skill rather than four separate performances.",
        "id": "Setiap proses seleksi serius menguji pencapaian hasil di suatu tempat: tes bakat menguji penalaran terstruktur dalam waktu; diskusi kelompok menguji penstrukturan dan pengambilan keputusan bersama orang lain; wawancara kasus menguji rantai penuh pada masalah bisnis; wawancara perilaku menguji eksekusi — “ceritakan yang benar-benar kamu lakukan”. The Pack melatih tiap format itu secara spesifik. Modul ini memberi mesin dasarnya, sehingga format-format itu menjadi ekspresi satu keterampilan, bukan empat pertunjukan terpisah."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: The outcome-reaching chain — every hiring assessment probes one of these links.",
       "id": "Peraga 1: Rantai pencapaian hasil — tiap asesmen rekrutmen menguji salah satu mata rantainya."
      },
      "title": {
       "en": "From fuzzy goal to outcome",
       "id": "Dari tujuan samar ke hasil"
      },
      "items": [
       {
        "h": {
         "en": "Define",
         "id": "Definisikan"
        },
        "sub": {
         "en": "Gap statement: current, desired, obstacle",
         "id": "Pernyataan celah: kini, diinginkan, hambatan"
        }
       },
       {
        "h": {
         "en": "Structure",
         "id": "Strukturkan"
        },
        "sub": {
         "en": "Split into attackable parts",
         "id": "Pecah menjadi bagian yang bisa diserang"
        }
       },
       {
        "h": {
         "en": "Decide",
         "id": "Putuskan"
        },
        "sub": {
         "en": "Choose under uncertainty, name the assumption",
         "id": "Pilih dalam ketidakpastian, namai asumsinya"
        }
       },
       {
        "h": {
         "en": "Execute",
         "id": "Eksekusi"
        },
        "sub": {
         "en": "Deliver through people and setbacks",
         "id": "Wujudkan melalui orang dan kemunduran"
        }
       }
      ],
      "longdesc": {
       "en": "A four-link chain: define the problem as a gap statement; structure it into attackable parts; decide under uncertainty while naming assumptions; execute through people and setbacks. Aptitude tests, group discussions, case interviews and behavioural interviews each probe one or more links.",
       "id": "Rantai empat mata: definisikan masalah sebagai pernyataan celah; strukturkan menjadi bagian yang bisa diserang; putuskan dalam ketidakpastian sambil menamai asumsi; eksekusi melalui orang dan kemunduran. Tes bakat, diskusi kelompok, wawancara kasus, dan wawancara perilaku masing-masing menguji satu mata rantai atau lebih."
      }
     },
     "checks": [
      {
       "q": {
        "en": "“Our café's revenue is disappointing” — what is the correct next move under this lesson?",
        "id": "“Pendapatan kafe kami mengecewakan” — apa langkah berikut yang benar menurut pelajaran ini?"
       },
       "options": [
        {
         "en": "Brainstorm promotions to boost sales",
         "id": "Curah gagasan promosi untuk mendongkrak penjualan"
        },
        {
         "en": "Write the gap statement: current revenue, target revenue, and the obstacle blocking the difference",
         "id": "Tulis pernyataan celah: pendapatan kini, target, dan hambatan yang mengganjal selisihnya"
        },
        {
         "en": "Benchmark three competitor cafés this week",
         "id": "Bandingkan tiga kafe pesaing minggu ini"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Until current, desired and obstacle are written, promotions and benchmarks are solutions to an undefined problem — motion without aim.",
        "id": "Sebelum keadaan kini, diinginkan, dan hambatan tertulis, promosi dan pembandingan adalah solusi untuk masalah tak terdefinisi — gerak tanpa sasaran."
       }
      }
     ],
     "quote": {
      "en": "Nobody asks how much you know. They ask what happened to the thing you owned.",
      "id": "Tak ada yang bertanya seberapa banyak kamu tahu. Mereka bertanya apa yang terjadi pada hal yang kamu miliki."
     }
    },
    {
     "n": "3.2",
     "title": {
      "en": "Structured Problem-Solving Frameworks",
      "id": "Kerangka Pemecahan Masalah Terstruktur"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "Three frameworks cover most problems a professional meets before their thirties: MECE trees for structure, 5 Whys for causes, and a weighted matrix for decisions. This lesson teaches each one and then makes you run them.",
      "id": "Tiga kerangka mencakup sebagian besar masalah yang ditemui profesional sebelum usia tiga puluh: pohon MECE untuk struktur, 5 Why untuk sebab, dan matriks berbobot untuk keputusan. Pelajaran ini mengajarkan ketiganya lalu memintamu menjalankannya."
     },
     "objectives": [
      {
       "en": "Break a problem into a MECE issue tree with two levels.",
       "id": "Memecah masalah menjadi pohon isu MECE dua tingkat."
      },
      {
       "en": "Drive from a symptom to a root cause with 5 Whys without jumping to blame.",
       "id": "Menelusuri dari gejala ke akar sebab dengan 5 Why tanpa melompat ke menyalahkan."
      },
      {
       "en": "Score options against weighted criteria and sanity-check the winner.",
       "id": "Menilai opsi terhadap kriteria berbobot dan menguji kewajaran pemenangnya."
      }
     ],
     "takeaways": [
      {
       "en": "MECE — no overlaps, no gaps — is what makes a breakdown trustworthy enough to divide work by.",
       "id": "MECE — tanpa tumpang tindih, tanpa celah — membuat pemecahan cukup tepercaya untuk membagi kerja."
      },
      {
       "en": "The fifth why usually lands on a process or a decision, not a person — that is how you know you dug deep enough.",
       "id": "Why kelima biasanya mendarat pada proses atau keputusan, bukan orang — begitulah tanda galianmu cukup dalam."
      },
      {
       "en": "A decision matrix does not decide for you; it exposes what you are really weighing so others can challenge it.",
       "id": "Matriks keputusan tidak memutuskan untukmu; ia membeberkan apa yang benar-benar kamu timbang sehingga orang lain bisa mengujinya."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "MECE issue trees",
        "id": "Pohon isu MECE"
       },
       "body": {
        "en": "Take the gap statement from 3.1 and split the obstacle into branches that are <b>mutually exclusive</b> (no item belongs to two branches) and <b>collectively exhaustive</b> (together they cover every possibility). Revenue problems split cleanly into price × volume; volume into new × returning customers; each leaf becomes a question someone can go answer. The test of a good tree is delegation: could four teammates each take a branch without duplicating work or leaving territory uncovered? If not, re-cut the tree before anyone starts digging.",
        "id": "Ambil pernyataan celah dari 3.1 dan pecah hambatannya menjadi cabang yang <b>saling lepas</b> (tak ada item milik dua cabang) dan <b>lengkap menyeluruh</b> (bersama-sama mencakup semua kemungkinan). Masalah pendapatan terbelah rapi menjadi harga × volume; volume menjadi pelanggan baru × kembali; tiap daun menjadi pertanyaan yang bisa dijawab seseorang. Ujian pohon yang baik adalah delegasi: bisakah empat rekan masing-masing mengambil satu cabang tanpa duplikasi kerja atau wilayah tak tergarap? Jika tidak, potong ulang pohonnya sebelum ada yang mulai menggali."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "5 Whys, done honestly",
        "id": "5 Why, dijalankan jujur"
       },
       "body": {
        "en": "Ask why five times, following the causal chain: sales fell → fewer repeat customers → wait times doubled → one barista per shift quit → schedules published one day ahead make shifts unplannable. Notice where it landed: a scheduling process, ownable and fixable. Two corruption modes to avoid: <b>blame-jumping</b> (stopping at “because Andi is lazy” — persons are rarely root causes, incentives and processes are) and <b>convenient stopping</b> (stopping at the cause you already know how to fix). Follow the chain where the evidence goes, not where your favourite solution lives.",
        "id": "Tanyakan mengapa lima kali, mengikuti rantai sebab: penjualan turun → pelanggan kembali berkurang → waktu tunggu berlipat → satu barista per sif berhenti → jadwal terbit sehari sebelumnya membuat sif tak bisa direncanakan. Perhatikan pendaratannya: proses penjadwalan, bisa dimiliki dan diperbaiki. Dua mode korupsi yang harus dihindari: <b>melompat ke menyalahkan</b> (berhenti di “karena Andi malas” — orang jarang jadi akar sebab, insentif dan proseslah) dan <b>berhenti yang nyaman</b> (berhenti di sebab yang sudah kamu tahu solusinya). Ikuti rantai ke arah bukti, bukan ke tempat solusi favoritmu tinggal."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The weighted decision matrix",
        "id": "Matriks keputusan berbobot"
       },
       "body": {
        "en": "When options multiply — three job offers, four project ideas — list criteria that matter (growth, compensation, mentor quality, commute), weight them to sum to 100, score each option 1–5 per criterion, and multiply. Then run the two sanity checks that make the tool honest: <b>the flinch test</b> — if the winning row disappoints you, a hidden criterion is missing from the table; find it and add it. <b>The sensitivity test</b> — would the winner change if a debatable weight moved by ten points? If yes, the decision deserves more information, not more arithmetic.",
        "id": "Saat opsi berlipat — tiga tawaran kerja, empat ide proyek — daftar kriteria yang penting (pertumbuhan, kompensasi, kualitas mentor, jarak), beri bobot berjumlah 100, nilai tiap opsi 1–5 per kriteria, lalu kalikan. Kemudian jalankan dua uji kewajaran yang membuat alat ini jujur: <b>uji kernyit</b> — jika baris pemenang mengecewakanmu, ada kriteria tersembunyi yang hilang dari tabel; temukan dan tambahkan. <b>Uji sensitivitas</b> — apakah pemenang berubah jika satu bobot yang bisa diperdebatkan bergeser sepuluh poin? Jika ya, keputusan itu layak diberi lebih banyak informasi, bukan lebih banyak aritmetika."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 — Cut the tree",
        "id": "Latihan 1 — Potong pohonnya"
       },
       "body": {
        "en": "A campus food stall's profit fell 30% this semester. Draft a two-level MECE tree for the causes before revealing the debrief.",
        "id": "Laba warung kampus turun 30% semester ini. Susun pohon MECE dua tingkat untuk sebab-sebabnya sebelum membuka pembahasan."
       },
       "debrief": {
        "en": "Level 1 splits profit = revenue − cost. Revenue splits into price × volume (volume into new/returning buyers); cost splits into ingredients, labour, rent/other. Every plausible cause — a new competitor, cheaper menu, rising chicken prices — now has exactly one home. If your tree mixed “competitor opened nearby” (a driver of volume) as a sibling of “revenue”, the levels are mixed: drivers hang beneath the component they move.",
        "id": "Tingkat 1 membelah laba = pendapatan − biaya. Pendapatan terbelah menjadi harga × volume (volume menjadi pembeli baru/kembali); biaya menjadi bahan, tenaga kerja, sewa/lainnya. Setiap sebab masuk akal — pesaing baru, menu lebih murah, harga ayam naik — kini punya tepat satu rumah. Jika pohonmu menaruh “pesaing buka di dekat” (penggerak volume) sejajar dengan “pendapatan”, tingkatnya tercampur: penggerak menggantung di bawah komponen yang digerakkannya."
       }
      },
      {
       "h": {
        "en": "Drill 2 — Find the root",
        "id": "Latihan 2 — Temukan akarnya"
       },
       "body": {
        "en": "Symptom: you missed two assignment deadlines this month. Run 5 Whys on paper — no blaming persons, including yourself — then reveal.",
        "id": "Gejala: kamu melewatkan dua tenggat tugas bulan ini. Jalankan 5 Why di kertas — tanpa menyalahkan orang, termasuk dirimu — lalu buka pembahasan."
       },
       "debrief": {
        "en": "A blame chain stops at “because I'm lazy” — untrainable, unfixable. An honest chain looks like: missed deadlines → started both three days late → tasks entered no system when assigned → I rely on memory for commitments → I have no capture habit. The root is a missing process (capture), which the weekly preview from Lesson 2.4 directly repairs. Roots that end in a fixable process are the signature of a well-run 5 Whys.",
        "id": "Rantai menyalahkan berhenti di “karena aku malas” — tak bisa dilatih, tak bisa diperbaiki. Rantai jujur tampak seperti: tenggat terlewat → keduanya dimulai telat tiga hari → tugas tak masuk sistem apa pun saat diberikan → aku mengandalkan ingatan untuk komitmen → aku tak punya kebiasaan mencatat. Akarnya proses yang hilang (pencatatan), yang langsung diperbaiki tinjauan mingguan Pelajaran 2.4. Akar yang berujung pada proses yang bisa diperbaiki adalah tanda 5 Why yang dijalankan baik."
       }
      },
      {
       "h": {
        "en": "Drill 3 — Score the offers",
        "id": "Latihan 3 — Nilai tawarannya"
       },
       "body": {
        "en": "Two internship offers: a famous company with routine work, versus a small firm with real responsibility and a strong mentor. Build a weighted matrix with four criteria, score both, then reveal.",
        "id": "Dua tawaran magang: perusahaan terkenal dengan kerja rutin, versus firma kecil dengan tanggung jawab nyata dan mentor kuat. Bangun matriks berbobot empat kriteria, nilai keduanya, lalu buka pembahasan."
       },
       "debrief": {
        "en": "There is no universally right winner — the matrix's job is to expose YOUR weights. A typical early-career weighting (learning 40, mentor 25, brand 20, pay 15) favours the small firm; weight brand at 45 and the famous company wins. What matters: you can now defend the choice in one sentence — “I weighted learning highest because Module 2 set a skills-based 3-year outcome” — and the flinch test caught anyone who secretly wanted the other row.",
        "id": "Tak ada pemenang yang benar universal — tugas matriks adalah membeberkan bobot MILIKMU. Pembobotan awal karier yang lazim (belajar 40, mentor 25, merek 20, gaji 15) memenangkan firma kecil; beri merek 45 dan perusahaan terkenal menang. Yang penting: kini kamu bisa membela pilihan dalam satu kalimat — “kuberi bobot tertinggi pada belajar karena Modul 2 menetapkan hasil 3 tahun berbasis keterampilan” — dan uji kernyit menangkap siapa pun yang diam-diam menginginkan baris satunya."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "MECE",
        "id": "MECE"
       },
       "def": {
        "en": "Mutually Exclusive, Collectively Exhaustive — a breakdown with no overlaps between parts and no gaps overall.",
        "id": "Mutually Exclusive, Collectively Exhaustive — pemecahan tanpa tumpang tindih antarbagian dan tanpa celah keseluruhan."
       }
      },
      {
       "term": {
        "en": "root cause",
        "id": "akar sebab"
       },
       "def": {
        "en": "The deepest cause in the chain that, if fixed, prevents the symptom from recurring — usually a process or decision, rarely a person.",
        "id": "Sebab terdalam dalam rantai yang, jika diperbaiki, mencegah gejala berulang — biasanya proses atau keputusan, jarang orang."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Which breakdown of “why students skip breakfast” is MECE?",
        "id": "Pemecahan mana dari “mengapa mahasiswa melewatkan sarapan” yang MECE?"
       },
       "options": [
        {
         "en": "No time / woke up late / not hungry / cafeteria far",
         "id": "Tak sempat / bangun telat / tidak lapar / kantin jauh"
        },
        {
         "en": "Doesn't want to eat (no appetite, dieting) / wants to but can't (time, money, access)",
         "id": "Tak ingin makan (tak selera, diet) / ingin tapi tak bisa (waktu, uang, akses)"
        },
        {
         "en": "Health reasons / lifestyle reasons / other reasons",
         "id": "Alasan kesehatan / alasan gaya hidup / alasan lain"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Option A overlaps (“no time” and “woke up late” are the same branch); option C's “other” is a gap wearing a label. B splits on want × ability — exclusive and exhaustive.",
        "id": "Opsi A tumpang tindih (“tak sempat” dan “bangun telat” satu cabang); “lainnya” di opsi C adalah celah berlabel. B membelah pada ingin × mampu — saling lepas dan menyeluruh."
       }
      }
     ]
    },
    {
     "n": "3.3",
     "title": {
      "en": "Problem-Solving Case Studies",
      "id": "Studi Kasus Pemecahan Masalah"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "Frameworks only become skill under pressure. Three worked cases — one personal, one organisational, one business — each demand the full chain from gap statement to decision, with model answers to compare against your own attempt.",
      "id": "Kerangka hanya menjadi keterampilan di bawah tekanan. Tiga kasus tergarap — satu pribadi, satu organisasi, satu bisnis — masing-masing menuntut rantai penuh dari pernyataan celah sampai keputusan, dengan jawaban model untuk dibandingkan dengan percobaanmu."
     },
     "objectives": [
      {
       "en": "Run the full define → structure → decide chain on three unfamiliar cases.",
       "id": "Menjalankan rantai penuh definisikan → strukturkan → putuskan pada tiga kasus asing."
      },
      {
       "en": "Practise stating assumptions out loud instead of hiding them.",
       "id": "Berlatih menyatakan asumsi terang-terangan alih-alih menyembunyikannya."
      },
      {
       "en": "Compare your structure against a model answer and extract one adjustment.",
       "id": "Membandingkan strukturmu dengan jawaban model dan mengekstrak satu penyesuaian."
      }
     ],
     "takeaways": [
      {
       "en": "The chain is the same whether the problem is your GPA, a student organisation or a company's revenue — scale changes, method does not.",
       "id": "Rantainya sama entah masalahnya IPK-mu, organisasi mahasiswa, atau pendapatan perusahaan — skala berubah, metode tidak."
      },
      {
       "en": "Stated assumptions can be corrected by others; hidden assumptions sink the analysis silently.",
       "id": "Asumsi yang dinyatakan bisa dikoreksi orang lain; asumsi tersembunyi menenggelamkan analisis diam-diam."
      },
      {
       "en": "Comparing to a model answer is not about matching it — it is about noticing which branch you never considered.",
       "id": "Membandingkan dengan jawaban model bukan soal mencocokkan — melainkan menyadari cabang mana yang tak pernah kamu pertimbangkan."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "How to work these cases",
        "id": "Cara menggarap kasus-kasus ini"
       },
       "body": {
        "en": "For each case: write the gap statement first (two minutes), cut a MECE tree (five minutes), pick the branch you would investigate first and say why, and name the assumption your choice depends on. Only then open the debrief. Resist reading the model answer early — the value is manufactured exactly at the moment you are stuck and must choose a structure anyway. That discomfort is the workout.",
        "id": "Untuk tiap kasus: tulis pernyataan celah dulu (dua menit), potong pohon MECE (lima menit), pilih cabang yang akan kamu selidiki pertama dan katakan alasannya, lalu namai asumsi yang menopang pilihanmu. Baru buka pembahasan. Tahan godaan membaca jawaban model lebih awal — nilainya diproduksi tepat pada saat kamu buntu dan tetap harus memilih struktur. Ketidaknyamanan itulah latihannya."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Case 1 — The sinking GPA",
        "id": "Kasus 1 — IPK yang tenggelam"
       },
       "body": {
        "en": "Your GPA fell from 3.5 to 3.0 over two semesters while you took on a part-time job and an organisation role. Graduation-with-honours needs 3.4. Work the chain, then reveal.",
        "id": "IPK-mu turun dari 3,5 ke 3,0 dalam dua semester saat kamu mengambil kerja paruh waktu dan peran organisasi. Lulus cum laude butuh 3,4. Garap rantainya, lalu buka."
       },
       "debrief": {
        "en": "Gap: 3.0 now, 3.4 needed, obstacle unknown time/energy allocation. Tree: academic inputs (attendance, study hours, method) × competing loads (job hours, org hours, recovery). Investigate first: where the removed study hours actually went — data beats guessing. Common miss: treating “drop the job” as the only branch; the model tree includes method upgrades (active recall over rereading) that recover grade-per-hour, not just hours.",
        "id": "Celah: 3,0 kini, butuh 3,4, hambatan alokasi waktu/energi tak diketahui. Pohon: masukan akademik (kehadiran, jam belajar, metode) × beban pesaing (jam kerja, jam organisasi, pemulihan). Selidiki dulu: ke mana perginya jam belajar yang hilang — data mengalahkan tebakan. Kelalaian umum: memperlakukan “berhenti kerja” sebagai satu-satunya cabang; pohon model memuat peningkatan metode (active recall alih-alih membaca ulang) yang memulihkan nilai-per-jam, bukan hanya jam."
       }
      },
      {
       "h": {
        "en": "Case 2 — The empty event",
        "id": "Kasus 2 — Acara yang sepi"
       },
       "body": {
        "en": "Your organisation's flagship seminar drew 40 attendees against a 200 target, despite three weeks of Instagram promotion. The committee blames “bad luck with timing”. Work the chain, then reveal.",
        "id": "Seminar unggulan organisasimu hanya menarik 40 peserta dari target 200, meski tiga minggu promosi Instagram. Panitia menyalahkan “nasib buruk soal waktu”. Garap rantainya, lalu buka."
       },
       "debrief": {
        "en": "Gap: 40 vs 200, obstacle unknown funnel failure. Tree the funnel: reached (how many actually saw promotion?) → interested (right topic/audience?) → registered → attended (schedule conflict, reminder failure). Each stage has a number the committee never measured — “bad luck” is what an unmeasured funnel feels like. Model insight: 5 Whys on “why Instagram only” often lands on “we promote where we already are, not where the audience is” — a process root, fixable next event.",
        "id": "Celah: 40 vs 200, hambatan kegagalan corong yang tak diketahui. Pohonkan corongnya: terjangkau (berapa yang benar-benar melihat promosi?) → tertarik (topik/audiens tepat?) → terdaftar → hadir (bentrok jadwal, pengingat gagal). Tiap tahap punya angka yang tak pernah diukur panitia — “nasib buruk” adalah rasanya corong yang tak diukur. Wawasan model: 5 Why pada “mengapa hanya Instagram” sering mendarat di “kami berpromosi di tempat kami berada, bukan di tempat audiens berada” — akar proses, bisa diperbaiki di acara berikut."
       }
      },
      {
       "h": {
        "en": "Case 3 — The two-sided shop",
        "id": "Kasus 3 — Toko dua sisi"
       },
       "body": {
        "en": "A family clothing shop's walk-in sales fall 20% yearly as the mall empties, while its small Instagram side-business grows 40% yearly from a low base. The owner asks: push harder offline, or shift online? Work the chain, then reveal.",
        "id": "Penjualan langsung toko pakaian keluarga turun 20% per tahun seiring mal yang sepi, sementara bisnis sampingan Instagram-nya tumbuh 40% per tahun dari basis kecil. Pemilik bertanya: dorong lebih keras offline, atau beralih online? Garap rantainya, lalu buka."
       },
       "debrief": {
        "en": "This is a decision case: the tree (offline: traffic × conversion × basket; online: reach × conversion × fulfilment capacity) feeds a matrix with criteria like 3-year revenue potential, required investment, family skills fit, risk. The trap is arithmetic seduction: 40% growth on a tiny base may be smaller in rupiah than a 20% decline on a large base for years yet. The model answer states its assumption openly — “assuming mall traffic keeps declining at this rate” — and recommends a staged shift with a trigger point, not a leap. Staged decisions with named triggers beat one-way bets when uncertainty is high.",
        "id": "Ini kasus keputusan: pohon (offline: lalu lintas × konversi × keranjang; online: jangkauan × konversi × kapasitas pemenuhan) mengisi matriks dengan kriteria seperti potensi pendapatan 3 tahun, investasi dibutuhkan, kecocokan keterampilan keluarga, risiko. Perangkapnya rayuan aritmetika: pertumbuhan 40% pada basis mungil bisa lebih kecil dalam rupiah daripada penurunan 20% pada basis besar selama bertahun-tahun. Jawaban model menyatakan asumsinya terbuka — “dengan asumsi lalu lintas mal terus turun pada laju ini” — dan merekomendasikan peralihan bertahap dengan titik pemicu, bukan lompatan. Keputusan bertahap dengan pemicu bernama mengalahkan taruhan satu arah saat ketidakpastian tinggi."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Reading the model answer before attempting",
         "id": "Membaca jawaban model sebelum mencoba"
        },
        "fix": {
         "en": "Recognition is not recall. Struggle first; the comparison only teaches after an attempt exists.",
         "id": "Mengenali bukan mengingat. Berjuang dulu; perbandingan hanya mengajar setelah ada percobaan."
        }
       },
       {
        "h": {
         "en": "Polishing the tree instead of picking a branch",
         "id": "Memoles pohon alih-alih memilih cabang"
        },
        "fix": {
         "en": "A good-enough tree plus an investigated branch beats a perfect tree with no investigation. Time-box the structure.",
         "id": "Pohon cukup-baik plus cabang yang diselidiki mengalahkan pohon sempurna tanpa penyelidikan. Batasi waktu penstrukturan."
        }
       },
       {
        "h": {
         "en": "Hiding the load-bearing assumption",
         "id": "Menyembunyikan asumsi penopang"
        },
        "fix": {
         "en": "Say it: “this recommendation assumes X”. In interviews, stated assumptions earn points; discovered hidden ones end candidacies.",
         "id": "Ucapkan: “rekomendasi ini mengasumsikan X”. Dalam wawancara, asumsi yang dinyatakan menambah nilai; asumsi tersembunyi yang ketahuan mengakhiri pencalonan."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "In Case 3, why does the model answer prefer a staged shift with a trigger point over an immediate full pivot online?",
        "id": "Pada Kasus 3, mengapa jawaban model memilih peralihan bertahap dengan titik pemicu daripada pindah penuh online segera?"
       },
       "options": [
        {
         "en": "Because online business is riskier than offline",
         "id": "Karena bisnis online lebih berisiko daripada offline"
        },
        {
         "en": "Because under high uncertainty, staged moves buy information while preserving the larger revenue base",
         "id": "Karena dalam ketidakpastian tinggi, langkah bertahap membeli informasi sambil menjaga basis pendapatan yang lebih besar"
        },
        {
         "en": "Because family businesses should never change their model",
         "id": "Karena bisnis keluarga tak boleh mengubah modelnya"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The large declining base still pays the bills; each stage generates data that improves the next decision — an option an all-in leap destroys.",
        "id": "Basis besar yang menurun masih membayar tagihan; tiap tahap menghasilkan data yang memperbaiki keputusan berikut — opsi yang dihancurkan oleh lompatan habis-habisan."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/bg/stage-exploration.jpg",
   "heroPos": "center 45%"
  },
  {
   "num": 4,
   "title": {
    "en": "Communication for Impact",
    "id": "Komunikasi untuk Dampak"
   },
   "overview": {
    "en": "Module 4 of The Map focuses on communication for impact. Work through the lessons in order — each builds on the last.",
    "id": "Modul 4 dari The Map berfokus pada Komunikasi untuk Dampak. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply communication for impact to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Komunikasi untuk Dampak pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "4.1",
     "title": {
      "en": "Common Communication Challenges",
      "id": "Tantangan Komunikasi yang Umum"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Most communication failures are not speaking failures — they are design failures that happened before anyone opened their mouth. This lesson names the five challenges that sink early-career communication and gives you a diagnostic to spot yours.",
      "id": "Kebanyakan kegagalan komunikasi bukan kegagalan berbicara — melainkan kegagalan perancangan yang terjadi sebelum siapa pun membuka mulut. Pelajaran ini menamai lima tantangan yang menenggelamkan komunikasi awal karier dan memberimu diagnostik untuk menemukan milikmu."
     },
     "objectives": [
      {
       "en": "Identify the five recurring communication challenges and which ones you exhibit.",
       "id": "Mengenali lima tantangan komunikasi berulang dan mana yang kamu tunjukkan."
      },
      {
       "en": "Explain the curse of knowledge and why expertise makes explanation harder.",
       "id": "Menjelaskan kutukan pengetahuan dan mengapa keahlian mempersulit penjelasan."
      },
      {
       "en": "Audit one recent message of yours against the five challenges.",
       "id": "Mengaudit satu pesanmu baru-baru ini terhadap lima tantangan itu."
      }
     ],
     "takeaways": [
      {
       "en": "The audience owns the meaning: what they understood is what you communicated, regardless of intent.",
       "id": "Audiens memiliki makna: yang mereka pahami adalah yang kamu komunikasikan, terlepas dari niat."
      },
      {
       "en": "Burying the lead is the most common early-career failure — professionals want the point first, the journey second.",
       "id": "Mengubur inti adalah kegagalan awal karier paling umum — profesional ingin intinya dulu, perjalanannya kemudian."
      },
      {
       "en": "Nervousness is not a personality flaw; it is unrehearsed material meeting a high-stakes audience.",
       "id": "Kegugupan bukan cacat kepribadian; ia materi tak terlatih yang bertemu audiens berisiko tinggi."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "The five challenges",
        "id": "Lima tantangan"
       },
       "body": {
        "en": "<b>1 · Burying the lead:</b> narrating chronology (“first I collected data, then I cleaned it…”) instead of leading with the conclusion. <b>2 · The curse of knowledge:</b> once you know something, you cannot remember not knowing it — so you skip the steps your audience needed. <b>3 · Wrong altitude:</b> giving detail when the listener needed the summary, or summary when they needed detail. <b>4 · Monologue habit:</b> treating communication as transmission instead of checking what actually landed. <b>5 · Stakes freeze:</b> fluent among friends, rigid in interviews and presentations, because the material was never rehearsed under mild pressure.",
        "id": "<b>1 · Mengubur inti:</b> menarasikan kronologi (“pertama kukumpulkan data, lalu kubersihkan…”) alih-alih memimpin dengan kesimpulan. <b>2 · Kutukan pengetahuan:</b> begitu tahu sesuatu, kamu tak bisa mengingat rasanya tidak tahu — sehingga kamu melompati langkah yang dibutuhkan audiensmu. <b>3 · Ketinggian salah:</b> memberi detail saat pendengar butuh ringkasan, atau ringkasan saat mereka butuh detail. <b>4 · Kebiasaan monolog:</b> memperlakukan komunikasi sebagai transmisi tanpa memeriksa apa yang benar-benar sampai. <b>5 · Beku oleh taruhan:</b> lancar di antara teman, kaku di wawancara dan presentasi, karena materi tak pernah dilatih di bawah tekanan ringan."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "Why smart people communicate badly",
        "id": "Mengapa orang cerdas berkomunikasi buruk"
       },
       "body": {
        "en": "The curse of knowledge deserves special attention because it worsens as you improve. The more you know about your thesis, your code or your analysis, the more compressed your internal representation becomes — and the more steps you skip when explaining. This is why brilliant students often give incomprehensible presentations: they are reading from an internal map the audience has never seen. The antidote is not dumbing down; it is deliberately rebuilding the staircase: what did I know right before I understood this? And before that? Explain up the staircase, not from the summit.",
        "id": "Kutukan pengetahuan layak mendapat perhatian khusus karena memburuk seiring kamu membaik. Makin kamu paham skripsimu, kodemu, atau analisismu, makin terkompresi representasi internalmu — dan makin banyak langkah yang kamu lompati saat menjelaskan. Inilah mengapa mahasiswa brilian sering memberi presentasi yang tak terpahami: mereka membaca dari peta internal yang tak pernah dilihat audiens. Penawarnya bukan menyederhanakan berlebihan; melainkan membangun ulang tangganya dengan sengaja: apa yang kuketahui tepat sebelum aku memahami ini? Dan sebelum itu? Jelaskan menaiki tangga, bukan dari puncak."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Self-diagnosis",
        "id": "Diagnosis diri"
       },
       "body": {
        "en": "Take the last important message you sent — an email to a lecturer, a project update, an application answer. Score it: did the first sentence carry the point? Could a smart outsider follow it without your context? Was the length matched to what the reader needed to decide? Did you ask anything that verified understanding? Most people fail two of the five consistently — the same two, across years. Identifying your pair is the highest-leverage twenty minutes in this module, and it feeds directly into your Personal Audit's communication rating.",
        "id": "Ambil pesan penting terakhir yang kamu kirim — email ke dosen, pembaruan proyek, jawaban lamaran. Nilai: apakah kalimat pertama membawa intinya? Bisakah orang luar yang cerdas mengikutinya tanpa konteksmu? Apakah panjangnya sesuai kebutuhan pembaca untuk memutuskan? Apakah kamu menanyakan sesuatu yang memverifikasi pemahaman? Kebanyakan orang gagal di dua dari lima secara konsisten — dua yang sama, bertahun-tahun. Mengenali pasanganmu adalah dua puluh menit paling berdaya ungkit di modul ini, dan langsung mengisi nilai komunikasi di Audit Pribadimu."
       }
      }
     ],
     "scenario": {
      "icon": "chat",
      "img": "../../assets/bg/gauntlet/gate-03-assessment.jpg",
      "title": {
       "en": "In focus: the update that hid its own news",
       "id": "Sorotan: pembaruan yang menyembunyikan beritanya sendiri"
      },
      "body": [
       {
        "en": "Sari, an intern, emails her manager: four paragraphs on data collection, cleaning choices, a library version issue, and — in the final sentence — the finding that a key customer segment churned at twice the assumed rate. Her manager, skimming between meetings, archives it after paragraph one. The insight resurfaces three weeks later in someone else's deck.",
        "id": "Sari, seorang magang, mengirim email ke manajernya: empat paragraf tentang pengumpulan data, pilihan pembersihan, masalah versi pustaka, dan — di kalimat terakhir — temuan bahwa satu segmen pelanggan kunci berhenti dua kali lipat dari asumsi. Manajernya, membaca sekilas di antara rapat, mengarsipkannya setelah paragraf satu. Temuan itu muncul lagi tiga minggu kemudian di dek orang lain."
       },
       {
        "en": "Nothing in Sari's work was wrong. The failure was architectural: the news was buried under the journey. One rewrite fixes it: “Finding: segment B churns at 2× our assumption — recommend we re-forecast. Method and caveats below.” Same content, opposite career outcome.",
        "id": "Tak ada yang salah dalam kerja Sari. Kegagalannya arsitektural: berita terkubur di bawah perjalanan. Satu penulisan ulang memperbaikinya: “Temuan: segmen B berhenti 2× dari asumsi kita — kusarankan kita hitung ulang proyeksi. Metode dan catatan di bawah.” Konten sama, hasil karier berlawanan."
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "Your presentation to lecturers was fluent, but the Q&A revealed nobody understood your method. Which challenge is the prime suspect?",
        "id": "Presentasimu ke dosen lancar, tetapi tanya-jawab menunjukkan tak ada yang paham metodemu. Tantangan mana tersangka utamanya?"
       },
       "options": [
        {
         "en": "Stakes freeze — nervousness ruined the delivery",
         "id": "Beku oleh taruhan — kegugupan merusak penyampaian"
        },
        {
         "en": "The curse of knowledge — steps obvious to you were never rebuilt for the audience",
         "id": "Kutukan pengetahuan — langkah yang jelas bagimu tak pernah dibangun ulang untuk audiens"
        },
        {
         "en": "Burying the lead — the conclusion came too late",
         "id": "Mengubur inti — kesimpulan datang terlambat"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Fluent delivery with failed comprehension is the curse-of-knowledge signature: the staircase existed in your head and never on the slides.",
        "id": "Penyampaian lancar dengan pemahaman gagal adalah tanda kutukan pengetahuan: tangganya ada di kepalamu dan tak pernah ada di salindia."
       }
      }
     ],
     "quote": {
      "en": "What they understood is what you communicated — regardless of what you meant.",
      "id": "Yang mereka pahami adalah yang kamu komunikasikan — terlepas dari maksudmu."
     }
    },
    {
     "n": "4.2",
     "title": {
      "en": "Core Communication Theory",
      "id": "Teori Komunikasi Inti"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Four instruments cover most professional communication: audience-first design, the pyramid (answer first), altitude control, and the feedback loop that verifies landing. Learn them once; reuse them in every email, update, presentation and interview answer for the rest of your career.",
      "id": "Empat instrumen mencakup sebagian besar komunikasi profesional: perancangan berbasis audiens, piramida (jawaban dulu), kendali ketinggian, dan putaran umpan balik yang memverifikasi pendaratan. Pelajari sekali; pakai ulang di setiap email, pembaruan, presentasi, dan jawaban wawancara sepanjang kariermu."
     },
     "objectives": [
      {
       "en": "Design a message from the audience's decision backwards.",
       "id": "Merancang pesan dari keputusan audiens ke belakang."
      },
      {
       "en": "Structure any update as answer → reasons → evidence (the pyramid).",
       "id": "Menstrukturkan pembaruan apa pun sebagai jawaban → alasan → bukti (piramida)."
      },
      {
       "en": "Move deliberately between summary altitude and detail altitude on request.",
       "id": "Berpindah dengan sengaja antara ketinggian ringkasan dan ketinggian detail sesuai permintaan."
      }
     ],
     "takeaways": [
      {
       "en": "Before writing anything, answer: who is this for, what do they need to decide, and what do they already know?",
       "id": "Sebelum menulis apa pun, jawab: untuk siapa ini, apa yang perlu mereka putuskan, dan apa yang sudah mereka ketahui?"
      },
      {
       "en": "Answer first is a courtesy and a filter: busy readers get the point in line one, interested readers keep reading.",
       "id": "Jawaban dulu adalah kesopanan sekaligus penyaring: pembaca sibuk mendapat inti di baris satu, pembaca berminat terus membaca."
      },
      {
       "en": "“Did that answer it?” is the cheapest quality check in professional life — use it after every substantial answer.",
       "id": "“Apakah itu menjawab?” adalah pemeriksa mutu termurah dalam kehidupan profesional — pakai setelah tiap jawaban substansial."
      }
     ],
     "sections": [
      {
       "icon": "target",
       "h": {
        "en": "Audience-first design",
        "id": "Perancangan berbasis audiens"
       },
       "body": {
        "en": "Every message exists to move a specific reader from state A to state B — usually toward a decision. So design backwards: <b>Who reads this?</b> (a manager with 90 seconds, not a peer with an afternoon). <b>What must they decide or do?</b> (approve, re-forecast, unblock). <b>What do they already know?</b> (skip it) <b>What do they need from me to act?</b> (only that). A message designed this way is usually one-third the length of the chronological draft and lands ten times more often. The discipline: write the reader's decision at the top of your draft before typing a word of content.",
        "id": "Setiap pesan ada untuk memindahkan pembaca spesifik dari keadaan A ke B — biasanya menuju keputusan. Maka rancang mundur: <b>Siapa yang membaca?</b> (manajer dengan 90 detik, bukan rekan dengan waktu sesore). <b>Apa yang harus mereka putuskan atau lakukan?</b> (menyetujui, menghitung ulang, membuka blokir). <b>Apa yang sudah mereka tahu?</b> (lewati) <b>Apa yang mereka butuhkan dariku untuk bertindak?</b> (hanya itu). Pesan yang dirancang begini biasanya sepertiga panjang draf kronologis dan sampai sepuluh kali lebih sering. Disiplinnya: tulis keputusan pembaca di puncak drafmu sebelum mengetik satu kata konten."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "The pyramid",
        "id": "Piramida"
       },
       "body": {
        "en": "Professional structure inverts the school essay. Line one: the answer or recommendation. Lines two to four: the two or three reasons that support it. Below that: the evidence for each reason, for readers who want it. “Recommend we delay launch one week (answer). Payment testing found two critical bugs (reason 1); the fix needs four days plus regression (reason 2). Details: …” The pyramid respects hierarchy of attention: everyone reads line one, some read the reasons, few read the evidence — and all three audiences are served correctly by the same document.",
        "id": "Struktur profesional membalik esai sekolah. Baris satu: jawaban atau rekomendasi. Baris dua sampai empat: dua-tiga alasan pendukungnya. Di bawahnya: bukti tiap alasan, bagi pembaca yang menginginkannya. “Kusarankan tunda peluncuran satu minggu (jawaban). Pengujian pembayaran menemukan dua bug kritis (alasan 1); perbaikan butuh empat hari plus regresi (alasan 2). Detail: …” Piramida menghormati hierarki perhatian: semua membaca baris satu, sebagian membaca alasan, sedikit membaca bukti — dan ketiga audiens terlayani benar oleh dokumen yang sama."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Altitude control and the loop",
        "id": "Kendali ketinggian dan putarannya"
       },
       "body": {
        "en": "Skilled communicators fly at three altitudes and announce their moves: <b>30,000 ft</b> — one sentence, the executive summary; <b>3,000 ft</b> — the structure, main parts and how they connect; <b>ground</b> — specific numbers, quotes, code. Signal transitions: “Zooming out…”, “To get concrete…”. Listen for altitude requests — “what's the bottom line?” means climb; “walk me through that number” means descend. Then close the loop: after any substantial explanation, check landing — “Does that cover what you needed?” or, teaching, “Can you play it back so I know I explained it well?” The loop turns monologue into communication.",
        "id": "Komunikator terampil terbang di tiga ketinggian dan mengumumkan gerakannya: <b>30.000 kaki</b> — satu kalimat, ringkasan eksekutif; <b>3.000 kaki</b> — struktur, bagian utama dan hubungannya; <b>darat</b> — angka spesifik, kutipan, kode. Tandai transisi: “Kalau diperbesar…”, “Konkretnya…”. Dengarkan permintaan ketinggian — “intinya apa?” berarti naik; “jelaskan angka itu” berarti turun. Lalu tutup putarannya: setelah penjelasan substansial, periksa pendaratan — “Apakah itu mencakup yang kamu butuhkan?” atau, saat mengajar, “Bisa ulangi versimu supaya kutahu penjelasanku jelas?” Putaran mengubah monolog menjadi komunikasi."
       }
      }
     ],
     "diagram": {
      "type": "ladder",
      "exhibit": {
       "en": "Exhibit 1: Three altitudes — announce every climb and descent.",
       "id": "Peraga 1: Tiga ketinggian — umumkan setiap naik dan turun."
      },
      "title": {
       "en": "Altitude control",
       "id": "Kendali ketinggian"
      },
      "items": [
       {
        "h": {
         "en": "30,000 ft — the point",
         "id": "30.000 kaki — intinya"
        },
        "sub": {
         "en": "One sentence a CEO could act on",
         "id": "Satu kalimat yang bisa ditindaklanjuti CEO"
        }
       },
       {
        "h": {
         "en": "3,000 ft — the structure",
         "id": "3.000 kaki — strukturnya"
        },
        "sub": {
         "en": "Main parts and how they connect",
         "id": "Bagian utama dan hubungannya"
        }
       },
       {
        "h": {
         "en": "Ground — the evidence",
         "id": "Darat — buktinya"
        },
        "sub": {
         "en": "Numbers, quotes, artefacts on request",
         "id": "Angka, kutipan, artefak sesuai permintaan"
        }
       }
      ],
      "longdesc": {
       "en": "A three-level ladder: the top level is the one-sentence point; the middle level is the structure of main parts; the bottom level is ground evidence — numbers, quotes and artefacts. Skilled communicators move between levels deliberately and announce each transition.",
       "id": "Tangga tiga tingkat: teratas inti satu kalimat; tengah struktur bagian utama; terbawah bukti darat — angka, kutipan, artefak. Komunikator terampil berpindah tingkat dengan sengaja dan mengumumkan tiap transisi."
      }
     },
     "compare": [
      {
       "tag": {
        "en": "Project update — chronology vs pyramid",
        "id": "Pembaruan proyek — kronologi vs piramida"
       },
       "q": {
        "en": "Weekly update to a busy manager",
        "id": "Pembaruan mingguan ke manajer sibuk"
       },
       "weak": {
        "en": "“This week I attended the vendor call, then worked on the data pipeline, then had some issues with the API which took two days, then started the dashboard. Next week I plan to continue the dashboard.”",
        "id": "“Minggu ini aku ikut panggilan vendor, lalu mengerjakan pipeline data, lalu ada masalah API yang memakan dua hari, lalu mulai dasbor. Minggu depan kulanjutkan dasbornya.”"
       },
       "strong": {
        "en": "“On track for Friday's dashboard demo. One risk: the vendor API failed twice this week (2 days lost) — if it recurs, demo slips to Tuesday; mitigation call booked Monday. Details below.”",
        "id": "“Sesuai jadwal untuk demo dasbor Jumat. Satu risiko: API vendor gagal dua kali minggu ini (2 hari hilang) — jika terulang, demo mundur ke Selasa; panggilan mitigasi sudah dijadwalkan Senin. Detail di bawah.”"
       },
       "why": {
        "en": "The strong version leads with the status the manager needs (on track), elevates the one thing they might act on (risk + mitigation), and pushes chronology into the basement where it belongs.",
        "id": "Versi kuat memimpin dengan status yang dibutuhkan manajer (sesuai jadwal), mengangkat satu hal yang mungkin perlu ditindak (risiko + mitigasi), dan menurunkan kronologi ke gudang tempat seharusnya."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "pyramid principle",
        "id": "prinsip piramida"
       },
       "def": {
        "en": "Structuring communication answer-first: conclusion at the top, grouped reasons beneath, evidence at the base.",
        "id": "Menstrukturkan komunikasi jawaban-dulu: kesimpulan di puncak, alasan terkelompok di bawahnya, bukti di dasar."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Mid-presentation, a panellist says “skip ahead — what's the bottom line?” What is the correct move?",
        "id": "Di tengah presentasi, seorang panelis berkata “langsung saja — intinya apa?” Apa langkah yang benar?"
       },
       "options": [
        {
         "en": "Finish the current section first so the logic stays complete",
         "id": "Selesaikan bagian ini dulu agar logikanya utuh"
        },
        {
         "en": "Climb to 30,000 ft: give the one-sentence conclusion, then offer to descend wherever they want detail",
         "id": "Naik ke 30.000 kaki: beri kesimpulan satu kalimat, lalu tawarkan turun ke detail yang mereka mau"
        },
        {
         "en": "Apologise and restart the presentation more slowly",
         "id": "Minta maaf dan mulai ulang presentasi lebih pelan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "An altitude request must be honoured immediately — the audience owns the altitude. Answer first, then let their questions choose the descent.",
        "id": "Permintaan ketinggian harus dipenuhi segera — audiens memiliki ketinggian. Jawab dulu, lalu biarkan pertanyaan mereka memilih penurunan."
       }
      }
     ],
     "listen": [
      {
       "label": {
        "en": "The pyramid, spoken: a project update that leads with the answer",
        "id": "Piramida, diucapkan: pembaruan proyek yang memimpin dengan jawaban"
       },
       "text": {
        "en": "On track for Friday's dashboard demo. One risk: the vendor A P I failed twice this week, costing two days. If it recurs, the demo slips to Tuesday. A mitigation call is booked for Monday.",
        "id": "Sesuai jadwal untuk demo dasbor Jumat. Satu risiko: A P I vendor gagal dua kali minggu ini, memakan dua hari. Jika terulang, demo mundur ke Selasa. Panggilan mitigasi sudah dijadwalkan Senin."
       }
      },
      {
       "label": {
        "en": "An altitude shift, announced out loud",
        "id": "Perpindahan ketinggian, diumumkan bersuara"
       },
       "text": {
        "en": "Zooming out: the point is that region C grows while the others shrink. To get concrete: C grew twenty five percent last quarter on our highest margin.",
        "id": "Kalau diperbesar: intinya wilayah C tumbuh sementara yang lain menyusut. Konkretnya: C tumbuh dua puluh lima persen kuartal lalu pada margin tertinggi kita."
       }
      }
     ]
    },
    {
     "n": "4.3",
     "title": {
      "en": "Applied Communication Case Studies",
      "id": "Studi Kasus Komunikasi Terapan"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "Three applied drills — a cold email that gets answered, a meeting update under interruption, and disagreeing with someone senior — each with a worked model answer built on the instruments from 4.2.",
      "id": "Tiga latihan terapan — email dingin yang dibalas, pembaruan rapat di bawah interupsi, dan berbeda pendapat dengan yang lebih senior — masing-masing dengan jawaban model yang dibangun dari instrumen 4.2."
     },
     "objectives": [
      {
       "en": "Write a cold email whose first line earns the second line.",
       "id": "Menulis email dingin yang baris pertamanya membeli baris kedua."
      },
      {
       "en": "Deliver a pyramid update and survive an altitude interruption.",
       "id": "Menyampaikan pembaruan piramida dan bertahan dari interupsi ketinggian."
      },
      {
       "en": "Disagree upward using data, options and a question — without the word “wrong”.",
       "id": "Berbeda pendapat ke atas memakai data, opsi, dan pertanyaan — tanpa kata “salah”."
      }
     ],
     "takeaways": [
      {
       "en": "Cold messages are answered when the ask is small, specific and time-boxed — and the sender did visible homework.",
       "id": "Pesan dingin dibalas saat permintaannya kecil, spesifik, dan berbatas waktu — dan pengirim tampak mengerjakan PR."
      },
      {
       "en": "Interruptions are altitude requests in disguise; treat them as navigation, not attack.",
       "id": "Interupsi adalah permintaan ketinggian yang menyamar; perlakukan sebagai navigasi, bukan serangan."
      },
      {
       "en": "Disagreement lands when it protects the decision, not your ego — share the data, name an option, ask a real question.",
       "id": "Ketidaksetujuan sampai saat ia melindungi keputusan, bukan egomu — bagikan data, namai opsi, ajukan pertanyaan sungguhan."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "How to run the drills",
        "id": "Cara menjalankan latihan"
       },
       "body": {
        "en": "Draft your own version before opening each debrief — on paper or in your notes app, two to five minutes each. The comparison against the model is where the skill transfers: look for the structural difference, not the wording difference. Then re-draft yours once. One redraft after comparison is worth five fresh attempts.",
        "id": "Susun versimu sendiri sebelum membuka tiap pembahasan — di kertas atau aplikasi catatan, dua sampai lima menit. Perbandingan dengan model adalah tempat keterampilan berpindah: cari beda struktural, bukan beda kata. Lalu tulis ulang milikmu sekali. Satu penulisan ulang setelah perbandingan setara lima percobaan baru."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 — The cold email",
        "id": "Latihan 1 — Email dingin"
       },
       "body": {
        "en": "Write a cold email to an alumna who works in the industry you explored in The Range, asking for career insight. Draft it, then reveal the model.",
        "id": "Tulis email dingin ke seorang alumni yang bekerja di industri yang kamu jelajahi di The Range, meminta wawasan karier. Susun, lalu buka model."
       },
       "debrief": {
        "en": "Model: subject “Question about your path into risk analytics — [University] student”. Body: one line of specific homework (“your talk on model validation at [event] reframed how I think about the field”), one line of context (final-year student choosing between X and Y), one small time-boxed ask (“would you have 15 minutes in the next two weeks for two specific questions?”), and a graceful out (“if this month is busy, no reply needed — thank you either way”). What makes it work: the homework proves this is not a mass-send; the ask is answerable from a phone in ten seconds; the out removes social pressure — which paradoxically raises reply rates.",
        "id": "Model: subjek “Pertanyaan tentang jalurmu ke analitik risiko — mahasiswa [Universitas]”. Isi: satu baris PR spesifik (“presentasimu tentang validasi model di [acara] mengubah caraku memandang bidang ini”), satu baris konteks (mahasiswa tingkat akhir memilih antara X dan Y), satu permintaan kecil berbatas waktu (“adakah 15 menit dalam dua minggu ke depan untuk dua pertanyaan spesifik?”), dan jalan keluar anggun (“jika bulan ini sibuk, tak perlu membalas — terima kasih apa pun itu”). Yang membuatnya berhasil: PR membuktikan ini bukan kiriman massal; permintaannya bisa dijawab dari ponsel dalam sepuluh detik; jalan keluar menghapus tekanan sosial — yang justru menaikkan tingkat balasan."
       }
      },
      {
       "h": {
        "en": "Drill 2 — Interrupted at 3,000 ft",
        "id": "Latihan 2 — Diinterupsi di 3.000 kaki"
       },
       "body": {
        "en": "You are two minutes into a five-minute project update when a senior manager cuts in: “Sorry — are we shipping Friday or not?” Script your next 20 seconds, then reveal.",
        "id": "Kamu dua menit menjalani pembaruan proyek lima menit ketika seorang manajer senior memotong: “Maaf — kita rilis Jumat atau tidak?” Skripkan 20 detikmu berikutnya, lalu buka."
       },
       "debrief": {
        "en": "Model: “Yes — Friday holds, with one condition. The payment fix passed testing yesterday; if tomorrow's regression run is clean, we ship. If it fails, we ship Tuesday. I'll confirm by 3 pm tomorrow either way.” Then stop talking. Structure: direct answer (yes), the one condition that could change it, the date they'll know, silence. The failure mode being trained away: defending your prepared sequence (“I'm getting to that”) — the interruption told you what the room actually needs, and the room outranks the script.",
        "id": "Model: “Ya — Jumat aman, dengan satu syarat. Perbaikan pembayaran lolos uji kemarin; jika uji regresi besok bersih, kita rilis. Jika gagal, kita rilis Selasa. Kukonfirmasi besok jam 3 sore apa pun hasilnya.” Lalu berhenti bicara. Struktur: jawaban langsung (ya), satu syarat yang bisa mengubahnya, tanggal mereka akan tahu, diam. Mode kegagalan yang sedang dihilangkan: membela urutan siapanmu (“sebentar, akan kusampaikan”) — interupsi memberitahumu apa yang benar-benar dibutuhkan ruangan, dan ruangan mengalahkan naskah."
       }
      },
      {
       "h": {
        "en": "Drill 3 — Disagreeing upward",
        "id": "Latihan 3 — Tak setuju ke atas"
       },
       "body": {
        "en": "Your team lead proposes promoting the product on platform X because “everyone is there”. Your data says your audience is on platform Y. Script the disagreement, then reveal.",
        "id": "Ketua timmu mengusulkan promosi produk di platform X karena “semua orang di sana”. Datamu bilang audiensmu di platform Y. Skripkan ketidaksetujuanmu, lalu buka."
       },
       "debrief": {
        "en": "Model: “Can I add one data point before we lock it? Our last three campaigns: platform Y drove 70% of signups from 30% of spend — X was the reverse. One option: run this campaign 80/20 toward Y and keep X as the test cell. What am I missing about X — is there a strategic reason beyond reach?” Anatomy: permission to contribute, the data without the word “wrong”, a concrete option that keeps their goal alive, and a genuine question that leaves room for information you lack. The senior person can now change course without losing face — which is the only kind of upward disagreement that gets adopted.",
        "id": "Model: “Boleh kutambahkan satu data sebelum kita kunci? Tiga kampanye terakhir: platform Y menghasilkan 70% pendaftaran dari 30% belanja — X kebalikannya. Satu opsi: jalankan kampanye ini 80/20 ke Y dan pertahankan X sebagai sel uji. Apa yang mungkin kulewatkan soal X — adakah alasan strategis di luar jangkauan?” Anatomi: izin berkontribusi, data tanpa kata “salah”, opsi konkret yang menjaga tujuan mereka tetap hidup, dan pertanyaan sungguhan yang menyisakan ruang untuk informasi yang tak kamu punya. Orang senior kini bisa berubah arah tanpa kehilangan muka — satu-satunya jenis ketidaksetujuan ke atas yang diadopsi."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Cold emails that ask for “any advice”",
         "id": "Email dingin yang meminta “saran apa saja”"
        },
        "fix": {
         "en": "Vague asks create work for the receiver. Two specific questions and a 15-minute cap make yes easy.",
         "id": "Permintaan samar menciptakan kerja bagi penerima. Dua pertanyaan spesifik dan batas 15 menit membuat ya menjadi mudah."
        }
       },
       {
        "h": {
         "en": "Treating interruptions as disrespect",
         "id": "Menganggap interupsi sebagai tak hormat"
        },
        "fix": {
         "en": "Senior interruptions are usually time management, not judgment. Answer the asked question at the asked altitude, then offer to continue.",
         "id": "Interupsi senior biasanya manajemen waktu, bukan penilaian. Jawab pertanyaan yang diajukan pada ketinggian yang diminta, lalu tawarkan melanjutkan."
        }
       },
       {
        "h": {
         "en": "Winning the argument, losing the decision",
         "id": "Memenangkan debat, kehilangan keputusan"
        },
        "fix": {
         "en": "If the goal is the right decision, package your case so the other person can adopt it as theirs.",
         "id": "Jika tujuannya keputusan yang benar, kemas argumenmu agar orang lain bisa mengadopsinya sebagai miliknya."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "What single element most raises a cold email's reply rate, according to this lesson?",
        "id": "Elemen tunggal apa yang paling menaikkan tingkat balasan email dingin, menurut pelajaran ini?"
       },
       "options": [
        {
         "en": "A formal greeting and full self-introduction",
         "id": "Salam formal dan perkenalan diri lengkap"
        },
        {
         "en": "A small, specific, time-boxed ask backed by visible homework",
         "id": "Permintaan kecil, spesifik, berbatas waktu, didukung PR yang terlihat"
        },
        {
         "en": "Mentioning that you will follow up weekly until they respond",
         "id": "Menyebutkan kamu akan menindaklanjuti tiap minggu sampai dibalas"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Reply cost drives reply rate: a specific 15-minute ask with proof of genuine interest is cheap to grant and hard to resent.",
        "id": "Biaya membalas menentukan tingkat balasan: permintaan spesifik 15 menit dengan bukti minat tulus murah dikabulkan dan sulit dibenci."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/mentoring-session.jpg",
   "heroPos": "80% 40%"
  },
  {
   "num": 5,
   "title": {
    "en": "Relationships, Well-Being, and Digital Capability",
    "id": "Hubungan, Kesejahteraan, dan Kemampuan Digital"
   },
   "overview": {
    "en": "Module 5 of The Map focuses on relationships, well-being, and digital capability. Work through the lessons in order — each builds on the last.",
    "id": "Modul 5 dari The Map berfokus pada Hubungan, Kesejahteraan, dan Kemampuan Digital. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply relationships, well-being, and digital capability to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Hubungan, Kesejahteraan, dan Kemampuan Digital pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "5.1",
     "title": {
      "en": "Physical and Mental Health as the Foundation of Performance",
      "id": "Kesehatan Fisik dan Mental sebagai Fondasi Kinerja"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Energy, not time, is the base resource of a career — and it is produced by four unglamorous systems: sleep, movement, fuel and recovery. This lesson treats health as performance infrastructure and gives you a minimum viable protocol that survives student budgets and first-job schedules.",
      "id": "Energi, bukan waktu, adalah sumber daya dasar karier — dan ia diproduksi oleh empat sistem tak glamor: tidur, gerak, bahan bakar, dan pemulihan. Pelajaran ini memperlakukan kesehatan sebagai infrastruktur kinerja dan memberimu protokol minimum layak yang bertahan di anggaran mahasiswa dan jadwal kerja pertama."
     },
     "objectives": [
      {
       "en": "Explain how sleep debt degrades exactly the skills interviews and jobs test.",
       "id": "Menjelaskan bagaimana utang tidur menurunkan tepat keterampilan yang diuji wawancara dan pekerjaan."
      },
      {
       "en": "Assemble a minimum viable health protocol you can keep during exam and probation weeks.",
       "id": "Menyusun protokol kesehatan minimum layak yang bisa kamu jaga selama pekan ujian dan probasi."
      },
      {
       "en": "Recognise early overload signals and apply the two-step response.",
       "id": "Mengenali sinyal kelebihan beban dini dan menerapkan respons dua langkah."
      }
     ],
     "takeaways": [
      {
       "en": "A tired brain fails at attention, working memory, mood control and honesty with itself — the interview stack.",
       "id": "Otak lelah gagal pada perhatian, memori kerja, kendali suasana hati, dan kejujuran pada diri — tumpukan keterampilan wawancara."
      },
      {
       "en": "Minimum viable beats optimal abandoned: a floor you never break outperforms a ceiling you never reach.",
       "id": "Minimum layak mengalahkan optimal yang ditinggalkan: lantai yang tak pernah kamu langgar mengalahkan langit-langit yang tak pernah tercapai."
      },
      {
       "en": "Asking for help early is an operational skill, not a character verdict.",
       "id": "Meminta bantuan lebih awal adalah keterampilan operasional, bukan vonis karakter."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "The energy production line",
        "id": "Lini produksi energi"
       },
       "body": {
        "en": "<b>Sleep</b> consolidates what you studied and restores the prefrontal control you interview with; chronic short sleep produces measurable deficits comparable to alcohol impairment. <b>Movement</b> — thirty minutes of anything brisk, most days — is the single most reliable mood and focus intervention in the literature. <b>Fuel</b>: regular meals with protein, and caffeine before noon rather than after. <b>Recovery</b>: genuine off-switches (people, nature, play) rather than scroll-rest that leaves you tired and unrested. None of this is athletic; it is the boring machinery that decides whether your trained skills actually show up on the day.",
        "id": "<b>Tidur</b> mengonsolidasikan yang kamu pelajari dan memulihkan kendali prefrontal yang kamu pakai wawancara; kurang tidur kronis menghasilkan defisit terukur setara gangguan alkohol. <b>Gerak</b> — tiga puluh menit apa pun yang cukup cepat, hampir tiap hari — adalah intervensi suasana hati dan fokus paling andal dalam literatur. <b>Bahan bakar</b>: makan teratur dengan protein, dan kafein sebelum tengah hari, bukan sesudahnya. <b>Pemulihan</b>: sakelar mati sungguhan (orang, alam, main) alih-alih istirahat-scroll yang membuatmu lelah tanpa pulih. Tak ada yang atletis di sini; ini mesin membosankan yang menentukan apakah keterampilan terlatihmu benar-benar hadir pada harinya."
       },
       "img": "../../assets/bg/stage-activation.jpg",
       "imgPos": "center 55%"
      },
      {
       "icon": "target",
       "h": {
        "en": "Minimum viable protocol",
        "id": "Protokol minimum layak"
       },
       "body": {
        "en": "Design for your worst week, not your best: a sleep window you defend (say 23:30–06:30, protected by a phone-out-of-reach rule), movement snacks (two 15-minute brisk walks beat one imaginary gym session), one real meal with protein daily as non-negotiable, and one weekly recovery block with a human being. Write yours as four lines in the Personal Audit. The rule during crunch weeks: the protocol shrinks but never to zero — six hours instead of seven, one walk instead of two. Zero is the only failure.",
        "id": "Rancang untuk minggu terburukmu, bukan terbaik: jendela tidur yang kamu pertahankan (misal 23.30–06.30, dijaga aturan ponsel di luar jangkauan), camilan gerak (dua jalan cepat 15 menit mengalahkan satu sesi gym khayalan), satu makan sungguhan berprotein tiap hari sebagai tak-bisa-ditawar, dan satu blok pemulihan mingguan bersama manusia. Tulis milikmu sebagai empat baris di Audit Pribadi. Aturan di minggu padat: protokol menyusut tapi tak pernah ke nol — enam jam alih-alih tujuh, satu jalan alih-alih dua. Nol adalah satu-satunya kegagalan."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Overload signals and the two-step response",
        "id": "Sinyal kelebihan beban dan respons dua langkah"
       },
       "body": {
        "en": "Watch for the early trio: sleep that stops refreshing, irritability at small things, and withdrawal from people you normally enjoy. These arrive weeks before real trouble. The two-step response: <b>subtract first</b> — drop one commitment for two weeks and defend the sleep window before adding any fix; <b>then talk</b> — to a friend, mentor or counsellor. If low mood, loss of interest or hopelessness persists most days for two weeks or more, involving a professional is the competent move, exactly as it would be for a broken bone. Universities and many employers provide confidential counselling; using it early is how strong performers stay strong.",
        "id": "Waspadai trio dini: tidur yang berhenti menyegarkan, mudah tersulut oleh hal kecil, dan menarik diri dari orang yang biasanya kamu nikmati. Ini datang berminggu-minggu sebelum masalah nyata. Respons dua langkah: <b>kurangi dulu</b> — lepas satu komitmen selama dua minggu dan pertahankan jendela tidur sebelum menambah perbaikan apa pun; <b>lalu bicara</b> — dengan teman, mentor, atau konselor. Jika suasana hati rendah, hilang minat, atau keputusasaan bertahan hampir tiap hari selama dua minggu atau lebih, melibatkan profesional adalah langkah kompeten, persis seperti pada patah tulang. Universitas dan banyak pemberi kerja menyediakan konseling rahasia; memakainya lebih awal adalah cara pekerja tangguh tetap tangguh."
       }
      }
     ],
     "diagram": {
      "type": "ring",
      "exhibit": {
       "en": "Exhibit 1: Four systems, one output — usable energy.",
       "id": "Peraga 1: Empat sistem, satu keluaran — energi yang bisa dipakai."
      },
      "title": {
       "en": "The energy ring",
       "id": "Cincin energi"
      },
      "items": [
       {
        "h": {
         "en": "Sleep",
         "id": "Tidur"
        },
        "sub": {
         "en": "A defended window, most nights",
         "id": "Jendela yang dijaga, hampir tiap malam"
        }
       },
       {
        "h": {
         "en": "Movement",
         "id": "Gerak"
        },
        "sub": {
         "en": "30 brisk minutes, most days",
         "id": "30 menit cepat, hampir tiap hari"
        }
       },
       {
        "h": {
         "en": "Fuel",
         "id": "Bahan bakar"
        },
        "sub": {
         "en": "Regular protein meals, caffeine before noon",
         "id": "Makan protein teratur, kafein sebelum siang"
        }
       },
       {
        "h": {
         "en": "Recovery",
         "id": "Pemulihan"
        },
        "sub": {
         "en": "Real off-switches: people, nature, play",
         "id": "Sakelar mati sungguhan: orang, alam, main"
        }
       }
      ],
      "longdesc": {
       "en": "A ring of four mutually reinforcing systems — sleep, movement, fuel, recovery — whose combined output is usable energy. Weakening any one degrades the others; the minimum viable protocol sets a floor for each.",
       "id": "Cincin empat sistem yang saling menguatkan — tidur, gerak, bahan bakar, pemulihan — yang keluaran gabungannya adalah energi terpakai. Melemahkan satu menurunkan yang lain; protokol minimum layak menetapkan lantai untuk masing-masing."
      }
     },
     "checks": [
      {
       "q": {
        "en": "Exam week collides with two interviews. Under this lesson, what happens to your health protocol?",
        "id": "Pekan ujian bertabrakan dengan dua wawancara. Menurut pelajaran ini, apa yang terjadi pada protokol kesehatanmu?"
       },
       "options": [
        {
         "en": "Pause it — extraordinary weeks justify all-nighters, recover after",
         "id": "Jeda — minggu luar biasa membenarkan begadang, pulihkan setelahnya"
        },
        {
         "en": "Shrink it to its floor — shorter sleep window, one walk — but never to zero",
         "id": "Susutkan ke lantainya — jendela tidur lebih pendek, satu jalan — tapi tak pernah ke nol"
        },
        {
         "en": "Double it — health matters most under pressure",
         "id": "Gandakan — kesehatan paling penting di bawah tekanan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The protocol is designed for worst weeks: it flexes down to a defended floor, because the interviews themselves run on the energy it produces.",
        "id": "Protokol dirancang untuk minggu terburuk: ia melentur turun ke lantai yang dijaga, karena wawancara itu sendiri berjalan pada energi yang diproduksinya."
       }
      }
     ],
     "quote": {
      "en": "Energy, not time, is the base resource of a career.",
      "id": "Energi, bukan waktu, adalah sumber daya dasar sebuah karier."
     }
    },
    {
     "n": "5.2",
     "title": {
      "en": "Staying Relevant Amid Rapid Technological Change",
      "id": "Tetap Relevan di Tengah Perubahan Teknologi yang Pesat"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "visual",
     "placeholder": false,
     "overview": {
      "en": "Technology cycles will outrun any specific tool you learn this year. What survives is a stance: fundamentals beneath the tools, a personal learning system, public evidence of skill, and a network that tells you what is changing before the news does. Explore the four anchors on the system map.",
      "id": "Siklus teknologi akan melampaui alat spesifik apa pun yang kamu pelajari tahun ini. Yang bertahan adalah sikap: fondasi di bawah alat, sistem belajar pribadi, bukti keterampilan yang publik, dan jaringan yang memberitahumu apa yang berubah sebelum berita. Jelajahi empat jangkar pada peta sistem."
     },
     "objectives": [
      {
       "en": "Distinguish durable fundamentals from perishable tools in your own field.",
       "id": "Membedakan fondasi tahan lama dari alat mudah usang di bidangmu."
      },
      {
       "en": "Set up a lightweight personal learning loop: one source, one project, one log.",
       "id": "Menyiapkan putaran belajar pribadi ringan: satu sumber, satu proyek, satu catatan."
      },
      {
       "en": "Name where your skills are publicly evidenced and where the gaps are.",
       "id": "Menyebutkan di mana keterampilanmu terbukti secara publik dan di mana celahnya."
      }
     ],
     "takeaways": [
      {
       "en": "Tools expire; the fundamentals beneath them — logic, statistics, writing, domain judgment — compound.",
       "id": "Alat kedaluwarsa; fondasi di bawahnya — logika, statistika, menulis, penilaian ranah — menggandakan diri."
      },
      {
       "en": "One hour a week of deliberate learning, logged, beats occasional panic sprints when a new tool trends.",
       "id": "Satu jam seminggu belajar terencana, tercatat, mengalahkan sprint panik sesekali saat alat baru tren."
      },
      {
       "en": "Skill that is not evidenced publicly is invisible to everyone who could reward it.",
       "id": "Keterampilan tanpa bukti publik tak terlihat bagi siapa pun yang bisa menghargainya."
      }
     ],
     "hotspots": [
      {
       "x": 22,
       "y": 26,
       "h": {
        "en": "Fundamentals first",
        "id": "Fondasi dulu"
       },
       "body": {
        "en": "Beneath every tool wave sits a durable layer: statistics beneath analytics dashboards, argumentation beneath slide software, human motivation beneath every marketing platform. Ask of anything you study: which part of this survives the tool's replacement? Spend 70% of learning time there. When the next wave arrives, you relearn syntax, not substance — which is why fundamentals-first people surf transitions that drown tool-only people.",
        "id": "Di bawah tiap gelombang alat ada lapisan tahan lama: statistika di bawah dasbor analitik, argumentasi di bawah perangkat salindia, motivasi manusia di bawah tiap platform pemasaran. Tanyakan pada apa pun yang kamu pelajari: bagian mana yang bertahan saat alatnya diganti? Habiskan 70% waktu belajar di sana. Saat gelombang berikut tiba, kamu mempelajari ulang sintaks, bukan substansi — itulah mengapa orang fondasi-dulu menunggangi transisi yang menenggelamkan orang hanya-alat."
       }
      },
      {
       "x": 72,
       "y": 24,
       "h": {
        "en": "The learning loop",
        "id": "Putaran belajar"
       },
       "body": {
        "en": "A sustainable system has three parts: <b>one source</b> you trust per field (a newsletter, a practitioner you follow) so you are not drinking the whole internet; <b>one small project</b> at any time that forces the new knowledge through your hands; <b>one log</b> — a page where you note what you learned each week. An hour weekly, defended in the calendar like any important-not-urgent block. The log matters more than it looks: it is raw material for CVs, interviews and the “tell me how you stay current” question.",
        "id": "Sistem berkelanjutan punya tiga bagian: <b>satu sumber</b> tepercaya per bidang (nawala, praktisi yang kamu ikuti) agar kamu tak meminum seluruh internet; <b>satu proyek kecil</b> setiap saat yang memaksa pengetahuan baru melewati tanganmu; <b>satu catatan</b> — halaman tempat kamu menulis yang dipelajari tiap minggu. Sejam seminggu, dijaga di kalender seperti blok penting–tidak mendesak mana pun. Catatan itu lebih penting dari kelihatannya: ia bahan mentah CV, wawancara, dan pertanyaan “bagaimana kamu tetap mutakhir”."
       }
      },
      {
       "x": 25,
       "y": 72,
       "h": {
        "en": "Public evidence",
        "id": "Bukti publik"
       },
       "body": {
        "en": "Certificates say you attended; artefacts say you can. A tidied portfolio project, a written analysis, a small app, a well-documented spreadsheet — visible where your field looks (a repository, a portfolio page, a professional profile). One honest artefact per quarter is enough. The test: could a stranger in your field, in five minutes, see evidence of what you claim? If not, this quarter's project is that artefact.",
        "id": "Sertifikat bilang kamu hadir; artefak bilang kamu bisa. Proyek portofolio yang dirapikan, analisis tertulis, aplikasi kecil, spreadsheet terdokumentasi baik — terlihat di tempat bidangmu melihat (repositori, halaman portofolio, profil profesional). Satu artefak jujur per kuartal sudah cukup. Ujiannya: bisakah orang asing di bidangmu, dalam lima menit, melihat bukti klaimmu? Jika tidak, proyek kuartal ini adalah artefak itu."
       }
      },
      {
       "x": 74,
       "y": 70,
       "h": {
        "en": "The sensing network",
        "id": "Jaringan pengindra"
       },
       "body": {
        "en": "Change reaches conversations months before it reaches curricula. Three or four practitioners you can ask “what's actually changing in your team?” form an early-warning system no course provides. Build it the way 4.3 taught: small specific asks, genuine homework, gratitude. In return, share what you learn — a network is fed by both directions. Basecamp and mentor sessions inside Metanoia are designed as this layer.",
        "id": "Perubahan mencapai percakapan berbulan-bulan sebelum mencapai kurikulum. Tiga-empat praktisi yang bisa kamu tanya “apa yang benar-benar berubah di timmu?” membentuk sistem peringatan dini yang tak disediakan kursus mana pun. Bangun seperti diajarkan 4.3: permintaan kecil spesifik, PR sungguhan, terima kasih. Sebagai balasan, bagikan yang kamu pelajari — jaringan diberi makan dari dua arah. Basecamp dan sesi mentor di Metanoia dirancang sebagai lapisan ini."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A new AI tool sweeps your target industry. What does the fundamentals-first stance prescribe?",
        "id": "Alat AI baru melanda industri targetmu. Apa resep sikap fondasi-dulu?"
       },
       "options": [
        {
         "en": "Ignore it — tools always pass",
         "id": "Abaikan — alat selalu berlalu"
        },
        {
         "en": "Learn it through a small real project while identifying which underlying skill it amplifies or replaces",
         "id": "Pelajari lewat proyek kecil nyata sambil mengenali keterampilan dasar mana yang ia perkuat atau gantikan"
        },
        {
         "en": "Drop current studies and retrain around the tool full-time",
         "id": "Tinggalkan studi saat ini dan berlatih ulang penuh waktu di sekitar alat itu"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The loop metabolises new tools through projects; the fundamentals lens tells you how much of your stack it actually changes — usually less than the headlines claim.",
        "id": "Putaran mencerna alat baru lewat proyek; lensa fondasi memberitahu seberapa banyak tumpukanmu yang benar-benar berubah — biasanya kurang dari klaim berita."
       }
      }
     ]
    },
    {
     "n": "5.3",
     "title": {
      "en": "Practical Digital Productivity Toolkit",
      "id": "Toolkit Produktivitas Digital Praktis"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "A working professional's digital toolkit has five stations: capture, calendar, files, focus, and a professional inbox. This lesson sets up each one in under an hour total, using free tools you already have — then drills the habits that keep them running.",
      "id": "Toolkit digital seorang profesional punya lima stasiun: pencatatan, kalender, berkas, fokus, dan kotak masuk profesional. Pelajaran ini menyiapkan masing-masing dalam total kurang dari satu jam, memakai alat gratis yang sudah kamu punya — lalu melatih kebiasaan yang menjaganya berjalan."
     },
     "objectives": [
      {
       "en": "Install a single capture point for every commitment that enters your life.",
       "id": "Memasang satu titik pencatatan untuk setiap komitmen yang masuk hidupmu."
      },
      {
       "en": "Make the calendar the single source of truth for time, including important-not-urgent blocks.",
       "id": "Menjadikan kalender satu-satunya sumber kebenaran waktu, termasuk blok penting–tidak mendesak."
      },
      {
       "en": "Set up file hygiene and a distraction-resistant focus configuration.",
       "id": "Menyiapkan higiene berkas dan konfigurasi fokus tahan distraksi."
      }
     ],
     "takeaways": [
      {
       "en": "The system's job is to be trusted: one capture point, processed daily, is what lets your brain stop rehearsing commitments.",
       "id": "Tugas sistem adalah dipercaya: satu titik pencatatan, diproses harian, membuat otakmu berhenti melatih ulang komitmen."
      },
      {
       "en": "If it is not in the calendar, it is not real; if it is, defend it.",
       "id": "Jika tak ada di kalender, ia tak nyata; jika ada, pertahankan."
      },
      {
       "en": "Focus is an environment you configure once, not willpower you summon hourly.",
       "id": "Fokus adalah lingkungan yang kamu konfigurasi sekali, bukan tekad yang kamu panggil tiap jam."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "The five stations",
        "id": "Lima stasiun"
       },
       "body": {
        "en": "<b>Capture:</b> one notes app inbox where every task, promise and idea lands within ten seconds of arriving — processed into the calendar or a list every evening. <b>Calendar:</b> classes, deadlines, important-not-urgent blocks, and travel time between them; anything with a date lives here, nowhere else. <b>Files:</b> one cloud root with a shallow, predictable structure (Career/CV, Career/Applications, Uni/Semester-6, Projects/x) and filenames that sort: 2026-08-cv-dataanalyst-v3. <b>Focus:</b> notifications off by default with a small allowlist of humans, phone physically away during blocks, one site-blocker profile for deep work. <b>Professional inbox:</b> an email address that would look fine on a CV, checked twice daily at set times rather than continuously.",
        "id": "<b>Pencatatan:</b> satu kotak masuk aplikasi catatan tempat tiap tugas, janji, dan ide mendarat dalam sepuluh detik — diproses ke kalender atau daftar tiap malam. <b>Kalender:</b> kuliah, tenggat, blok penting–tidak mendesak, dan waktu perjalanan di antaranya; apa pun bertanggal tinggal di sini, tidak di tempat lain. <b>Berkas:</b> satu akar cloud dengan struktur dangkal dan terduga (Karier/CV, Karier/Lamaran, Kuliah/Semester-6, Proyek/x) dan nama berkas yang terurut: 2026-08-cv-dataanalyst-v3. <b>Fokus:</b> notifikasi mati secara default dengan daftar-izin kecil berisi manusia, ponsel jauh secara fisik selama blok, satu profil pemblokir situs untuk kerja dalam. <b>Kotak masuk profesional:</b> alamat email yang pantas di CV, diperiksa dua kali sehari pada jam tetap, bukan terus-menerus."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Setup sprint 1 — Capture and calendar (20 min)",
        "id": "Sprint penyiapan 1 — Pencatatan dan kalender (20 mnt)"
       },
       "body": {
        "en": "Create the capture inbox; move every floating commitment from your head, chats and screenshots into it; then transfer everything dated into the calendar, including next week's two important-not-urgent blocks. Reveal the debrief when done.",
        "id": "Buat kotak masuk pencatatan; pindahkan tiap komitmen mengambang dari kepala, obrolan, dan tangkapan layar ke dalamnya; lalu salin semua yang bertanggal ke kalender, termasuk dua blok penting–tidak mendesak minggu depan. Buka pembahasan setelah selesai."
       },
       "debrief": {
        "en": "The uncomfortable part is the first sweep: most people find 20–40 floating commitments and feel the exact moment their background anxiety drops. That relief is the system working — the brain stops using working memory as a to-do list. The maintenance cost is one five-minute evening process; the failure mode is capturing into three places, which recreates the distrust the system exists to remove.",
        "id": "Bagian tak nyamannya adalah sapuan pertama: kebanyakan orang menemukan 20–40 komitmen mengambang dan merasakan momen persis kecemasan latar mereka turun. Kelegaan itu tanda sistem bekerja — otak berhenti memakai memori kerja sebagai daftar tugas. Biaya perawatannya proses malam lima menit; mode gagalnya mencatat ke tiga tempat, yang menciptakan ulang ketidakpercayaan yang ingin dihapus sistem."
       }
      },
      {
       "h": {
        "en": "Setup sprint 2 — Files and focus (20 min)",
        "id": "Sprint penyiapan 2 — Berkas dan fokus (20 mnt)"
       },
       "body": {
        "en": "Build the folder skeleton, rename your five most-used files to the dated convention, then configure focus: notifications off, human allowlist, one blocker profile. Reveal when done.",
        "id": "Bangun kerangka folder, ganti nama lima berkas tersering ke konvensi bertanggal, lalu konfigurasi fokus: notifikasi mati, daftar-izin manusia, satu profil pemblokir. Buka setelah selesai."
       },
       "debrief": {
        "en": "File hygiene pays at exactly two moments: the interview where you need last year's project in ten seconds, and the application deadline where you need cv-v3, not cv-final-final-REAL. The focus configuration is doing the heavier lifting than it appears: environment design removes hundreds of daily micro-decisions, and each removed decision is willpower saved for actual work.",
        "id": "Higiene berkas terbayar tepat di dua momen: wawancara saat kamu butuh proyek tahun lalu dalam sepuluh detik, dan tenggat lamaran saat kamu butuh cv-v3, bukan cv-final-final-BENERAN. Konfigurasi fokus bekerja lebih berat dari kelihatannya: perancangan lingkungan menghapus ratusan keputusan mikro harian, dan tiap keputusan yang terhapus adalah tekad yang dihemat untuk kerja sungguhan."
       }
      },
      {
       "h": {
        "en": "Setup sprint 3 — The professional surface (15 min)",
        "id": "Sprint penyiapan 3 — Permukaan profesional (15 mnt)"
       },
       "body": {
        "en": "Audit the email address, username and profile photo a recruiter would meet. Set two fixed inbox times. Draft a three-line signature. Reveal when done.",
        "id": "Audit alamat email, nama pengguna, dan foto profil yang akan ditemui perekrut. Tetapkan dua jam kotak masuk. Susun tanda tangan tiga baris. Buka setelah selesai."
       },
       "debrief": {
        "en": "Recruiters meet your digital surface before they meet you. The bar is modest — name-based address, clear photo, signature with name, degree and phone — but missing it is disproportionately expensive because it is read as a preview of your work habits. Batched inbox times are the deeper win: continuous checking fragments attention all day for a message volume that two sessions handle in twenty minutes.",
        "id": "Perekrut bertemu permukaan digitalmu sebelum bertemu kamu. Standarnya sederhana — alamat berbasis nama, foto jelas, tanda tangan berisi nama, gelar, dan telepon — tetapi melewatkannya mahal tak proporsional karena dibaca sebagai pratinjau kebiasaan kerjamu. Jam kotak masuk terkelompok adalah kemenangan lebih dalam: pengecekan terus-menerus memecah perhatian sepanjang hari untuk volume pesan yang ditangani dua sesi dalam dua puluh menit."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Tool shopping instead of habit building",
         "id": "Belanja alat alih-alih membangun kebiasaan"
        },
        "fix": {
         "en": "Any notes app plus any calendar wins if processed daily. Switching tools is procrastination wearing a productivity costume.",
         "id": "Aplikasi catatan apa pun plus kalender apa pun menang jika diproses harian. Berganti alat adalah penundaan berkostum produktivitas."
        }
       },
       {
        "h": {
         "en": "A calendar that lies",
         "id": "Kalender yang berbohong"
        },
        "fix": {
         "en": "Blocks you routinely ignore teach you to ignore all blocks. Schedule less; honour everything scheduled.",
         "id": "Blok yang rutin kamu abaikan mengajarimu mengabaikan semua blok. Jadwalkan lebih sedikit; hormati semua yang terjadwal."
        }
       },
       {
        "h": {
         "en": "Deleting the system in busy weeks",
         "id": "Menghapus sistem di minggu sibuk"
        },
        "fix": {
         "en": "Busy weeks are what the system is for. Shrink the evening process to two minutes, never to zero.",
         "id": "Minggu sibuk justru alasan sistem ada. Susutkan proses malam ke dua menit, jangan pernah ke nol."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "Why does the lesson insist on a single capture point rather than notes scattered across apps?",
        "id": "Mengapa pelajaran ini bersikeras pada satu titik pencatatan alih-alih catatan tersebar antar-aplikasi?"
       },
       "options": [
        {
         "en": "Because premium note apps have better features",
         "id": "Karena aplikasi catatan premium fiturnya lebih baik"
        },
        {
         "en": "Because the brain only releases a commitment when it trusts the place it was written will be seen again",
         "id": "Karena otak hanya melepas komitmen saat percaya tempat menulisnya akan terlihat lagi"
        },
        {
         "en": "Because backups are easier from one app",
         "id": "Karena cadangan lebih mudah dari satu aplikasi"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Scattered capture recreates distrust, so the brain keeps rehearsing tasks — the exact load the system exists to remove.",
        "id": "Pencatatan tersebar menciptakan ulang ketidakpercayaan, sehingga otak terus melatih ulang tugas — beban yang justru ingin dihapus sistem."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/bg/stage-activation.jpg",
   "heroPos": "center 40%"
  },
  {
   "num": 6,
   "title": {
    "en": "Virtual Job Simulations and Career Preparation",
    "id": "Simulasi Pekerjaan Virtual dan Persiapan Karier"
   },
   "overview": {
    "en": "Module 6 of The Map focuses on virtual job simulations and career preparation. Work through the lessons in order — each builds on the last.",
    "id": "Modul 6 dari The Map berfokus pada Simulasi Pekerjaan Virtual dan Persiapan Karier. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply virtual job simulations and career preparation to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Simulasi Pekerjaan Virtual dan Persiapan Karier pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "6.1",
     "title": {
      "en": "Introduction to Virtual Job Simulations",
      "id": "Pengantar Simulasi Pekerjaan Virtual"
     },
     "dur": {
      "en": "10 min",
      "id": "10 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The last module of The Map replaces guessing with contact: six industry tracks, each a compressed workday of realistic tasks with model debriefs. This lesson explains how to run a simulation so it produces career signal — energy data, fit data, and evidence for your Range profile.",
      "id": "Modul terakhir The Map mengganti tebakan dengan kontak: enam jalur industri, masing-masing satu hari kerja terpadatkan berisi tugas realistis dengan pembahasan model. Pelajaran ini menjelaskan cara menjalankan simulasi agar menghasilkan sinyal karier — data energi, data kecocokan, dan bukti untuk profil Range-mu."
     },
     "objectives": [
      {
       "en": "Explain what a simulation can and cannot tell you about a career direction.",
       "id": "Menjelaskan apa yang bisa dan tak bisa diberitahukan simulasi tentang arah karier."
      },
      {
       "en": "Use the three-question debrief after every track: energised? competent? curious?",
       "id": "Memakai debrief tiga pertanyaan setelah tiap jalur: berenergi? kompeten? penasaran?"
      },
      {
       "en": "Feed simulation results into The Range's fit model honestly.",
       "id": "Memasukkan hasil simulasi ke model kecocokan The Range dengan jujur."
      }
     ],
     "takeaways": [
      {
       "en": "An afternoon of simulated tasks beats a month of reading about an industry.",
       "id": "Satu sore tugas tersimulasi mengalahkan sebulan membaca tentang sebuah industri."
      },
      {
       "en": "You are measuring your reaction to the work, not your current skill at it — beginners are supposed to be slow.",
       "id": "Yang kamu ukur adalah reaksimu terhadap pekerjaannya, bukan keterampilanmu saat ini — pemula memang seharusnya lambat."
      },
      {
       "en": "Two tracks that energised you are a direction hypothesis; test it next in The Range's company data.",
       "id": "Dua jalur yang memberimu energi adalah hipotesis arah; uji berikutnya di data perusahaan The Range."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "Why simulate",
        "id": "Mengapa bersimulasi"
       },
       "body": {
        "en": "Career mistakes are expensive precisely because the information arrives late — most people discover what consulting or audit actually feels like in month two of a job they committed years to reaching. Simulations move that discovery forward to an afternoon. Global employers increasingly publish job simulations for the same reason: they filter for people who have met the real work. Each track here compresses a representative workday — the actual task types, the actual trade-offs, junior-level versions — into 60–90 minutes.",
        "id": "Kesalahan karier mahal justru karena informasinya datang terlambat — kebanyakan orang menemukan rasa sebenarnya konsultan atau audit di bulan kedua pekerjaan yang mereka kejar bertahun-tahun. Simulasi memajukan penemuan itu ke satu sore. Pemberi kerja global makin banyak menerbitkan simulasi kerja dengan alasan sama: menyaring orang yang sudah bertemu pekerjaan nyata. Tiap jalur di sini memadatkan hari kerja representatif — jenis tugas sebenarnya, dilema sebenarnya, versi level junior — menjadi 60–90 menit."
       },
       "img": "../../assets/bg/gauntlet/gate-03-assessment.jpg",
       "imgPos": "center 35%"
      },
      {
       "icon": "eye",
       "h": {
        "en": "The three-question debrief",
        "id": "Debrief tiga pertanyaan"
       },
       "body": {
        "en": "After each track, before reading anything else, write three answers. <b>Energy:</b> did the 90 minutes pass quickly or crawl? Energy is the least fakeable career signal you own. <b>Competence trajectory:</b> not “was I good” — you were not, you are new — but “did I improve within the session, and did I want to?” <b>Curiosity:</b> which task would you happily do a harder version of tomorrow? A track scoring high on all three is a serious direction candidate; one scoring low on all three is an expensive mistake you just avoided for free.",
        "id": "Setelah tiap jalur, sebelum membaca apa pun, tulis tiga jawaban. <b>Energi:</b> apakah 90 menit terasa cepat atau merangkak? Energi adalah sinyal karier paling sulit dipalsukan yang kamu miliki. <b>Trajektori kompetensi:</b> bukan “apakah aku bagus” — belum, kamu baru — melainkan “apakah aku membaik dalam sesi itu, dan apakah aku ingin?” <b>Rasa ingin tahu:</b> tugas mana yang versi lebih sulitnya rela kamu kerjakan besok? Jalur bernilai tinggi di ketiganya adalah kandidat arah serius; yang rendah di ketiganya adalah kesalahan mahal yang baru saja kamu hindari gratis."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Feeding The Range",
        "id": "Mengisi The Range"
       },
       "body": {
        "en": "Simulation results are evidence, and evidence belongs in your profile: log each track's three answers in the Personal Audit, then revisit your Range questionnaire — does the direction it suggested survive contact with the simulated work? Where simulation and questionnaire disagree, trust the simulation more: stated preferences predict weaker than behaviour. Two energising tracks → explore those industries' companies in Range's database and read the role pages with new eyes.",
        "id": "Hasil simulasi adalah bukti, dan bukti milik profilmu: catat tiga jawaban tiap jalur di Audit Pribadi, lalu kunjungi ulang kuesioner Range-mu — apakah arah yang disarankannya bertahan setelah kontak dengan kerja tersimulasi? Saat simulasi dan kuesioner tak sepakat, percayai simulasi lebih: preferensi yang dinyatakan memprediksi lebih lemah daripada perilaku. Dua jalur yang memberi energi → jelajahi perusahaan industri itu di basis data Range dan baca halaman perannya dengan mata baru."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: The simulation loop — contact before commitment.",
       "id": "Peraga 1: Putaran simulasi — kontak sebelum komitmen."
      },
      "title": {
       "en": "Run → Debrief → Compare → Decide",
       "id": "Jalankan → Debrief → Bandingkan → Putuskan"
      },
      "items": [
       {
        "h": {
         "en": "Run the track",
         "id": "Jalankan jalur"
        },
        "sub": {
         "en": "90 minutes of realistic junior tasks",
         "id": "90 menit tugas junior realistis"
        }
       },
       {
        "h": {
         "en": "Debrief",
         "id": "Debrief"
        },
        "sub": {
         "en": "Energy · competence trajectory · curiosity",
         "id": "Energi · trajektori kompetensi · rasa ingin tahu"
        }
       },
       {
        "h": {
         "en": "Compare",
         "id": "Bandingkan"
        },
        "sub": {
         "en": "Across tracks and against your Range profile",
         "id": "Antarjalur dan terhadap profil Range-mu"
        }
       },
       {
        "h": {
         "en": "Decide",
         "id": "Putuskan"
        },
        "sub": {
         "en": "Two candidates forward into company research",
         "id": "Dua kandidat maju ke riset perusahaan"
        }
       }
      ],
      "longdesc": {
       "en": "A four-step loop: run a 90-minute track of realistic junior tasks; debrief on energy, competence trajectory and curiosity; compare results across tracks and against your Range questionnaire; decide which one or two directions advance into company research.",
       "id": "Putaran empat langkah: jalankan jalur 90 menit tugas junior realistis; debrief energi, trajektori kompetensi, rasa ingin tahu; bandingkan hasil antarjalur dan terhadap kuesioner Range; putuskan satu-dua arah yang maju ke riset perusahaan."
      }
     },
     "checks": [
      {
       "q": {
        "en": "You found the accounting track slow and draining but scored well on its tasks. How should this weigh on your direction?",
        "id": "Kamu merasa jalur akuntansi lambat dan menguras tetapi nilainya bagus. Bagaimana ini menimbang arahmu?"
       },
       "options": [
        {
         "en": "Pursue accounting — performance is what employers pay for",
         "id": "Kejar akuntansi — kinerja yang dibayar pemberi kerja"
        },
        {
         "en": "Treat it cautiously — competence without energy predicts burnout-grade misfit over years",
         "id": "Perlakukan hati-hati — kompetensi tanpa energi memprediksi ketidakcocokan tingkat burnout dalam hitungan tahun"
        },
        {
         "en": "Ignore the session — one afternoon proves nothing",
         "id": "Abaikan sesinya — satu sore tak membuktikan apa pun"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Skill can be built almost anywhere; energy cannot be faked for a decade. High-competence, low-energy tracks are the classic trap the debrief exists to catch.",
        "id": "Keterampilan bisa dibangun hampir di mana pun; energi tak bisa dipalsukan sepuluh tahun. Jalur kompetensi-tinggi energi-rendah adalah perangkap klasik yang ingin ditangkap debrief."
       }
      }
     ],
     "quote": {
      "en": "An afternoon of contact beats a month of reading about the work.",
      "id": "Satu sore kontak langsung mengalahkan sebulan membaca tentang pekerjaannya."
     }
    },
    {
     "n": "6.2",
     "title": {
      "en": "Industry Track – Accounting",
      "id": "Jalur Industri – Akuntansi"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "A compressed junior workday in accounting: three realistic tasks with model debriefs. Run it honestly — attempt each task before revealing — then log the three-question debrief in your audit.",
      "id": "Satu hari kerja junior terpadatkan di bidang akuntansi: tiga tugas realistis dengan pembahasan model. Jalankan dengan jujur — coba tiap tugas sebelum membuka — lalu catat debrief tiga pertanyaan di auditmu."
     },
     "objectives": [
      {
       "en": "Experience three representative junior tasks from accounting.",
       "id": "Mengalami tiga tugas junior representatif dari akuntansi."
      },
      {
       "en": "Attempt each task under a soft time-box before reading the model answer.",
       "id": "Mencoba tiap tugas dalam batas waktu longgar sebelum membaca jawaban model."
      },
      {
       "en": "Score the track on energy, competence trajectory and curiosity.",
       "id": "Menilai jalur ini pada energi, trajektori kompetensi, dan rasa ingin tahu."
      }
     ],
     "takeaways": [
      {
       "en": "You now have behavioural data about this industry that no brochure could give you.",
       "id": "Kamu kini punya data perilaku tentang industri ini yang tak bisa diberikan brosur mana pun."
      },
      {
       "en": "Slow is normal; the signal is whether the work pulled you in or pushed you away.",
       "id": "Lambat itu normal; sinyalnya apakah pekerjaan menarikmu masuk atau mendorongmu keluar."
      },
      {
       "en": "Log the three-question debrief before the impression fades.",
       "id": "Catat debrief tiga pertanyaan sebelum kesannya memudar."
      }
     ],
     "scenario": {
      "icon": "flag",
      "img": "../../assets/bg/gauntlet/gate-03-assessment.jpg",
      "title": {
       "en": "Your desk today: Accounting",
       "id": "Mejamu hari ini: Akuntansi"
      },
      "body": [
       {
        "en": "You are a first-week junior at a mid-size accounting firm. Your senior hands you a client's messy records an hour before a status call: “Give me something I can trust.” Accounting's real product is not numbers — it is confidence in numbers.",
        "id": "Kamu junior minggu pertama di kantor akuntan menengah. Seniormu menyerahkan catatan klien yang berantakan sejam sebelum panggilan status: “Beri aku sesuatu yang bisa kupercaya.” Produk nyata akuntansi bukan angka — melainkan kepercayaan pada angka."
       }
      ]
     },
     "steps": [
      {
       "h": {
        "en": "Task 1 — Find what does not balance",
        "id": "Tugas 1 — Temukan yang tidak seimbang"
       },
       "body": {
        "en": "A client's cash summary: opening balance Rp 42.0m, recorded sales receipts Rp 118.5m, recorded payments Rp 96.2m, closing balance per bank statement Rp 61.8m. Does it reconcile? If not, by how much and what would you check first? Work it, then reveal.",
        "id": "Ringkasan kas klien: saldo awal Rp 42,0 jt, penerimaan penjualan tercatat Rp 118,5 jt, pembayaran tercatat Rp 96,2 jt, saldo akhir per rekening koran Rp 61,8 jt. Apakah cocok? Jika tidak, berapa selisihnya dan apa yang kamu periksa pertama? Kerjakan, lalu buka."
       },
       "debrief": {
        "en": "Expected closing: 42.0 + 118.5 − 96.2 = Rp 64.3m; the bank shows 61.8m — a Rp 2.5m gap. Junior instinct says “find the error”; trained instinct says “list the usual suspects in likelihood order”: unrecorded bank charges or transfers out, a receipt recorded but not yet cleared (timing), a transposed digit (2.5m is suspiciously round), or — the reason the discipline exists — a payment that never should have happened. The professional habit on display: never present a number as reconciled until the difference is itemised to zero.",
        "id": "Saldo akhir seharusnya: 42,0 + 118,5 − 96,2 = Rp 64,3 jt; bank menunjukkan 61,8 jt — selisih Rp 2,5 jt. Naluri junior bilang “cari kesalahannya”; naluri terlatih bilang “daftar tersangka lazim berurutan kemungkinan”: biaya bank atau transfer keluar tak tercatat, penerimaan tercatat tapi belum cair (waktu), digit tertukar (2,5 jt mencurigakan bulat), atau — alasan disiplin ini ada — pembayaran yang seharusnya tak pernah terjadi. Kebiasaan profesional yang tampak: jangan pernah menyajikan angka sebagai cocok sebelum selisihnya dirinci sampai nol."
       }
      },
      {
       "h": {
        "en": "Task 2 — Classify the grey items",
        "id": "Tugas 2 — Klasifikasikan pos abu-abu"
       },
       "body": {
        "en": "Three items need classification before the call: (a) Rp 15m spent renovating the leased shop, (b) Rp 8m deposit received for goods delivering next month, (c) the owner's personal car fuel routinely paid from the business account. Decide how each is treated and why, then reveal.",
        "id": "Tiga pos butuh klasifikasi sebelum panggilan: (a) Rp 15 jt renovasi toko sewaan, (b) uang muka Rp 8 jt untuk barang yang dikirim bulan depan, (c) bensin mobil pribadi pemilik yang rutin dibayar dari rekening usaha. Putuskan perlakuan masing-masing dan alasannya, lalu buka."
       },
       "debrief": {
        "en": "(a) Leasehold improvement — an asset depreciated over the lease term, not an expense today: it buys benefit across years. (b) Not revenue yet: it is a liability (unearned revenue) until delivery, because the obligation is still open — recognising it now would inflate this month's performance. (c) Not a business expense at all: an owner's draw, and mixing it in misstates both profit and tax. The pattern across all three: accounting keeps asking “whose money, which period, what obligation?” If those questions felt satisfying rather than pedantic, that is real signal.",
        "id": "(a) Perbaikan aset sewa — aset yang disusutkan sepanjang masa sewa, bukan beban hari ini: ia membeli manfaat lintas tahun. (b) Belum pendapatan: ia liabilitas (pendapatan diterima di muka) sampai pengiriman, karena kewajiban masih terbuka — mengakuinya sekarang menggelembungkan kinerja bulan ini. (c) Sama sekali bukan beban usaha: prive pemilik, dan mencampurnya menyesatkan laba sekaligus pajak. Pola ketiganya: akuntansi terus bertanya “uang siapa, periode mana, kewajiban apa?” Jika pertanyaan itu terasa memuaskan alih-alih cerewet, itu sinyal sungguhan."
       }
      },
      {
       "h": {
        "en": "Task 3 — Say it to the client",
        "id": "Tugas 3 — Sampaikan ke klien"
       },
       "body": {
        "en": "Draft the two-sentence status you would give on the call: what is solid, what is open, what you need. Then reveal.",
        "id": "Susun status dua kalimat yang akan kamu sampaikan di panggilan: apa yang solid, apa yang terbuka, apa yang kamu butuhkan. Lalu buka."
       },
       "debrief": {
        "en": "Model: “Your cash position is Rp 61.8m confirmed against the bank; there's a Rp 2.5m recording gap I'm itemising — I'll have it closed by Thursday. To finish, I need the bank's fee advice slips and the delivery date for the Rp 8m advance order.” Notice the shape: verified number first, the open item with an owner and a date, a specific request. Accounting communication is the pyramid from Module 4 with a fiduciary spine.",
        "id": "Model: “Posisi kas Bapak/Ibu Rp 61,8 jt terkonfirmasi terhadap bank; ada selisih pencatatan Rp 2,5 jt yang sedang kurinci — selesai Kamis. Untuk menuntaskan, saya butuh slip biaya bank dan tanggal kirim pesanan uang muka Rp 8 jt.” Perhatikan bentuknya: angka terverifikasi dulu, pos terbuka dengan pemilik dan tanggal, permintaan spesifik. Komunikasi akuntansi adalah piramida Modul 4 dengan tulang punggung fidusia."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "reconciliation",
        "id": "rekonsiliasi"
       },
       "def": {
        "en": "Proving two records of the same money agree, itemising every difference until the gap is zero.",
        "id": "Membuktikan dua catatan atas uang yang sama bersesuaian, merinci tiap perbedaan sampai selisihnya nol."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why is the Rp 8m advance not counted as this month's revenue?",
        "id": "Mengapa uang muka Rp 8 jt tidak dihitung sebagai pendapatan bulan ini?"
       },
       "options": [
        {
         "en": "Because the amount is too small to matter",
         "id": "Karena jumlahnya terlalu kecil untuk berarti"
        },
        {
         "en": "Because the delivery obligation is still open — until then it is a liability",
         "id": "Karena kewajiban pengiriman masih terbuka — sampai saat itu ia liabilitas"
        },
        {
         "en": "Because cash was received in a different bank account",
         "id": "Karena kas diterima di rekening bank berbeda"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Revenue follows the fulfilment of obligation, not the arrival of cash — the core of accrual thinking.",
        "id": "Pendapatan mengikuti pemenuhan kewajiban, bukan kedatangan kas — inti pemikiran akrual."
       }
      }
     ]
    },
    {
     "n": "6.3",
     "title": {
      "en": "Industry Track – Banking &amp; Financial Services",
      "id": "Jalur Industri – Perbankan &amp; Layanan Keuangan"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "A compressed junior workday in banking & financial services: three realistic tasks with model debriefs. Run it honestly — attempt each task before revealing — then log the three-question debrief in your audit.",
      "id": "Satu hari kerja junior terpadatkan di bidang perbankan & layanan keuangan: tiga tugas realistis dengan pembahasan model. Jalankan dengan jujur — coba tiap tugas sebelum membuka — lalu catat debrief tiga pertanyaan di auditmu."
     },
     "objectives": [
      {
       "en": "Experience three representative junior tasks from banking & financial services.",
       "id": "Mengalami tiga tugas junior representatif dari perbankan & layanan keuangan."
      },
      {
       "en": "Attempt each task under a soft time-box before reading the model answer.",
       "id": "Mencoba tiap tugas dalam batas waktu longgar sebelum membaca jawaban model."
      },
      {
       "en": "Score the track on energy, competence trajectory and curiosity.",
       "id": "Menilai jalur ini pada energi, trajektori kompetensi, dan rasa ingin tahu."
      }
     ],
     "takeaways": [
      {
       "en": "You now have behavioural data about this industry that no brochure could give you.",
       "id": "Kamu kini punya data perilaku tentang industri ini yang tak bisa diberikan brosur mana pun."
      },
      {
       "en": "Slow is normal; the signal is whether the work pulled you in or pushed you away.",
       "id": "Lambat itu normal; sinyalnya apakah pekerjaan menarikmu masuk atau mendorongmu keluar."
      },
      {
       "en": "Log the three-question debrief before the impression fades.",
       "id": "Catat debrief tiga pertanyaan sebelum kesannya memudar."
      }
     ],
     "scenario": {
      "icon": "flag",
      "img": "../../assets/bg/gauntlet/gate-04-casestudy.jpg",
      "title": {
       "en": "Your desk today: Banking & Financial Services",
       "id": "Mejamu hari ini: Perbankan & Layanan Keuangan"
      },
      "body": [
       {
        "en": "You are a junior credit analyst. A long-standing client — a building-materials distributor — requests a Rp 2bn working-capital loan. Your job is not to say yes or no; it is to make the risk legible to the person who decides.",
        "id": "Kamu analis kredit junior. Klien lama — distributor bahan bangunan — mengajukan kredit modal kerja Rp 2 M. Tugasmu bukan bilang ya atau tidak; melainkan membuat risikonya terbaca oleh orang yang memutuskan."
       }
      ]
     },
     "steps": [
      {
       "h": {
        "en": "Task 1 — Read the numbers like a lender",
        "id": "Tugas 1 — Baca angka seperti pemberi pinjaman"
       },
       "body": {
        "en": "The distributor: revenue Rp 18bn (flat 2 years), net margin 4%, receivables collected in 74 days (was 51 two years ago), inventory 88 days, existing debt Rp 1.5bn. Which two numbers worry a lender most, and why? Work it, then reveal.",
        "id": "Sang distributor: pendapatan Rp 18 M (stagnan 2 tahun), margin bersih 4%, piutang tertagih 74 hari (dulu 51 dua tahun lalu), persediaan 88 hari, utang berjalan Rp 1,5 M. Dua angka mana yang paling mencemaskan pemberi pinjaman, dan mengapa? Kerjakan, lalu buka."
       },
       "debrief": {
        "en": "The killers are the trend, not the levels: receivables stretching from 51 to 74 days means customers pay ever later — the classic early sign of channel stress or disguised bad debts — and flat revenue means the stretch is not growth-driven. Together they say the requested loan may be funding other people's unpaid bills, not expansion. Lending lives on this asymmetry: upside is a few percent interest, downside is the principal — so analysts are professionally paid to find the uncomfortable trend first.",
        "id": "Pembunuhnya tren, bukan level: piutang memanjang dari 51 ke 74 hari berarti pelanggan membayar makin telat — tanda dini klasik tekanan kanal atau piutang macet terselubung — dan pendapatan stagnan berarti pemanjangan itu bukan karena pertumbuhan. Bersama-sama keduanya berkata kredit yang diminta mungkin mendanai tagihan tak terbayar orang lain, bukan ekspansi. Kredit hidup pada asimetri ini: sisi atas bunga beberapa persen, sisi bawah pokoknya — maka analis secara profesional dibayar untuk menemukan tren tak nyaman lebih dulu."
       }
      },
      {
       "h": {
        "en": "Task 2 — Structure a protection",
        "id": "Tugas 2 — Susun perlindungan"
       },
       "body": {
        "en": "You will recommend approval with conditions. Propose two structures that protect the bank if receivables keep deteriorating. Think, then reveal.",
        "id": "Kamu akan merekomendasikan persetujuan bersyarat. Usulkan dua struktur yang melindungi bank jika piutang terus memburuk. Pikirkan, lalu buka."
       },
       "debrief": {
        "en": "Standard toolkit: lend against the receivables themselves (an assignment of receivables, advancing only 70–80% of invoices under 60 days) so collateral shrinks in step with the risk; and a covenant — e.g. receivable days must stay under 80, tested quarterly, breach triggering a review. Perhaps a personal guarantee given flat revenue. The intellectual move worth noticing: bankers rarely reject risk, they price and cage it. If designing the cage felt like a puzzle you enjoyed, that is banking signal.",
        "id": "Perangkat standar: pinjamkan terhadap piutangnya sendiri (pengalihan piutang, hanya memajukan 70–80% faktur di bawah 60 hari) agar agunan menyusut seiring risiko; dan kovenan — mis. hari piutang harus di bawah 80, diuji kuartalan, pelanggaran memicu peninjauan. Mungkin jaminan pribadi mengingat pendapatan stagnan. Gerakan intelektual yang layak diperhatikan: bankir jarang menolak risiko, mereka menghargai dan mengurungnya. Jika merancang kurungan terasa seperti teka-teki yang kamu nikmati, itu sinyal perbankan."
       }
      },
      {
       "h": {
        "en": "Task 3 — The one-paragraph memo",
        "id": "Tugas 3 — Memo satu paragraf"
       },
       "body": {
        "en": "Write the recommendation paragraph for the credit committee: decision, two reasons, conditions. Then reveal.",
        "id": "Tulis paragraf rekomendasi untuk komite kredit: keputusan, dua alasan, syarat. Lalu buka."
       },
       "debrief": {
        "en": "Model: “Recommend approval of Rp 2bn working capital, structured as receivables financing at 75% advance on invoices <60 days. Rationale: 15-year relationship with unblemished repayment; cash cycle stress is real (receivables 51→74 days) but the structure self-limits our exposure to it. Conditions: quarterly receivables ageing report; covenant DSO <80; personal guarantee. Decline unstructured term lending until collection trend reverses.” Decision first, risk acknowledged not hidden, protection doing the arguing.",
        "id": "Model: “Merekomendasikan persetujuan modal kerja Rp 2 M, terstruktur sebagai pembiayaan piutang dengan uang muka 75% atas faktur <60 hari. Dasar: hubungan 15 tahun dengan pembayaran tak bercela; tekanan siklus kas nyata (piutang 51→74 hari) tetapi strukturnya membatasi sendiri eksposur kita. Syarat: laporan umur piutang kuartalan; kovenan DSO <80; jaminan pribadi. Tolak kredit berjangka tanpa struktur sampai tren penagihan berbalik.” Keputusan dulu, risiko diakui bukan disembunyikan, perlindungan yang berargumen."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "covenant",
        "id": "kovenan"
       },
       "def": {
        "en": "A promise written into a loan — a ratio or behaviour the borrower must maintain, whose breach triggers consequences.",
        "id": "Janji yang ditulis dalam kredit — rasio atau perilaku yang harus dijaga peminjam, yang pelanggarannya memicu konsekuensi."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why did receivable days (51→74) outweigh the healthy-looking 4% net margin?",
        "id": "Mengapa hari piutang (51→74) lebih berat daripada margin bersih 4% yang tampak sehat?"
       },
       "options": [
        {
         "en": "Margins are irrelevant to lenders",
         "id": "Margin tak relevan bagi pemberi pinjaman"
        },
        {
         "en": "Profit is an opinion about periods; cash collection is the fact that repays loans — and its trend is deteriorating",
         "id": "Laba adalah opini tentang periode; penagihan kas adalah fakta yang membayar kredit — dan trennya memburuk"
        },
        {
         "en": "Because 74 is above the industry maximum of 60",
         "id": "Karena 74 di atas maksimum industri 60"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Loans are repaid with cash, not accounting profit. A stretching collection cycle attacks exactly the resource that services debt.",
        "id": "Kredit dibayar dengan kas, bukan laba akuntansi. Siklus penagihan yang memanjang menyerang tepat sumber daya yang melunasi utang."
       }
      }
     ]
    },
    {
     "n": "6.4",
     "title": {
      "en": "Industry Track – Consulting &amp; Professional Services",
      "id": "Jalur Industri – Konsultasi &amp; Layanan Profesional"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "A compressed junior workday in consulting & professional services: three realistic tasks with model debriefs. Run it honestly — attempt each task before revealing — then log the three-question debrief in your audit.",
      "id": "Satu hari kerja junior terpadatkan di bidang konsultansi & layanan profesional: tiga tugas realistis dengan pembahasan model. Jalankan dengan jujur — coba tiap tugas sebelum membuka — lalu catat debrief tiga pertanyaan di auditmu."
     },
     "objectives": [
      {
       "en": "Experience three representative junior tasks from consulting & professional services.",
       "id": "Mengalami tiga tugas junior representatif dari konsultansi & layanan profesional."
      },
      {
       "en": "Attempt each task under a soft time-box before reading the model answer.",
       "id": "Mencoba tiap tugas dalam batas waktu longgar sebelum membaca jawaban model."
      },
      {
       "en": "Score the track on energy, competence trajectory and curiosity.",
       "id": "Menilai jalur ini pada energi, trajektori kompetensi, dan rasa ingin tahu."
      }
     ],
     "takeaways": [
      {
       "en": "You now have behavioural data about this industry that no brochure could give you.",
       "id": "Kamu kini punya data perilaku tentang industri ini yang tak bisa diberikan brosur mana pun."
      },
      {
       "en": "Slow is normal; the signal is whether the work pulled you in or pushed you away.",
       "id": "Lambat itu normal; sinyalnya apakah pekerjaan menarikmu masuk atau mendorongmu keluar."
      },
      {
       "en": "Log the three-question debrief before the impression fades.",
       "id": "Catat debrief tiga pertanyaan sebelum kesannya memudar."
      }
     ],
     "scenario": {
      "icon": "flag",
      "img": "../../assets/bg/gauntlet/gate-05-hr-interview.jpg",
      "title": {
       "en": "Your desk today: Consulting & Professional Services",
       "id": "Mejamu hari ini: Konsultansi & Layanan Profesional"
      },
      "body": [
       {
        "en": "You are a first-month analyst at a consulting firm. The engagement manager walks past your desk: “Client call moved up — I need a first-cut structure on their retail revenue problem in 45 minutes, and one slide I could actually show.”",
        "id": "Kamu analis bulan pertama di firma konsultan. Manajer proyek melewati mejamu: “Panggilan klien dimajukan — aku butuh struktur potongan-pertama untuk masalah pendapatan ritel mereka dalam 45 menit, dan satu salindia yang benar-benar bisa kutunjukkan.”"
       }
      ]
     },
     "steps": [
      {
       "h": {
        "en": "Task 1 — Structure under the clock",
        "id": "Tugas 1 — Strukturkan melawan jam"
       },
       "body": {
        "en": "The client: a 40-store fashion retailer, revenue −12% year-on-year while the market fell only 3%. Build the first-cut MECE structure for where the damage lives. Ten minutes, then reveal.",
        "id": "Klien: peritel fesyen 40 toko, pendapatan −12% tahun-ke-tahun sementara pasar hanya turun 3%. Bangun struktur MECE potongan-pertama untuk letak kerusakannya. Sepuluh menit, lalu buka."
       },
       "debrief": {
        "en": "First cut: the −12% splits into market effect (−3%, everyone's problem) and company effect (−9%, our problem). The company effect splits by driver: fewer visitors × lower conversion × smaller baskets — and by cut: which stores, which categories, which channels. The consulting move is asking for the split before theorising: “is the −9% concentrated in 5 stores or spread across 40?” concentrates the entire engagement. Speed came from the Module 3 engine, not from knowing retail.",
        "id": "Potongan pertama: −12% terbelah menjadi efek pasar (−3%, masalah semua orang) dan efek perusahaan (−9%, masalah kita). Efek perusahaan terbelah per penggerak: pengunjung berkurang × konversi turun × keranjang mengecil — dan per irisan: toko mana, kategori mana, kanal mana. Gerakan konsultan adalah meminta pembelahan sebelum berteori: “apakah −9% terkonsentrasi di 5 toko atau tersebar di 40?” memusatkan seluruh proyek. Kecepatan datang dari mesin Modul 3, bukan dari tahu ritel."
       }
      },
      {
       "h": {
        "en": "Task 2 — Make one slide say one thing",
        "id": "Tugas 2 — Buat satu salindia berkata satu hal"
       },
       "body": {
        "en": "Data arrives: 70% of the decline sits in 6 mall stores; street stores are flat; online grew 8%. Design the one slide — headline sentence plus supporting visual — that you would show. Sketch, then reveal.",
        "id": "Data tiba: 70% penurunan ada di 6 toko mal; toko jalanan stagnan; online tumbuh 8%. Rancang satu salindia — kalimat judul plus visual pendukung — yang akan kamu tunjukkan. Sketsa, lalu buka."
       },
       "debrief": {
        "en": "The headline is the finding, not the topic: “Revenue decline is a 6-store mall problem, not a brand problem” — a so-called action title. Beneath it, one waterfall or bar chart attributing the −12% across store groups. Everything else — methodology, caveats, the other 34 stores — goes to backup slides. Consulting's craft rule: if the client remembers one sentence per slide, the deck should be exactly those sentences in order.",
        "id": "Judulnya temuan, bukan topik: “Penurunan pendapatan adalah masalah 6 toko mal, bukan masalah merek” — yang disebut judul aksi. Di bawahnya, satu grafik air terjun atau batang yang mengatribusikan −12% antar-kelompok toko. Sisanya — metodologi, catatan, 34 toko lain — masuk salindia cadangan. Aturan keterampilan konsultan: jika klien mengingat satu kalimat per salindia, dek seharusnya persis kalimat-kalimat itu berurutan."
       }
      },
      {
       "h": {
        "en": "Task 3 — Handle the pushback",
        "id": "Tugas 3 — Hadapi bantahan"
       },
       "body": {
        "en": "On the call, the client's retail director says: “Your analysis ignores that malls themselves are dying — this is not our execution.” Script a consultant's response, then reveal.",
        "id": "Di panggilan, direktur ritel klien berkata: “Analisis kalian mengabaikan bahwa mal memang sekarat — ini bukan eksekusi kami.” Skripkan respons konsultan, lalu buka."
       },
       "debrief": {
        "en": "Model: “You may be right — let's test it. If mall decline explains it, our 6 stores should track their malls' footfall. Two of them do. The other four declined 2–3× faster than their malls, and those four share a category mix and a store manager turnover problem. So the data says: partly the tide, partly the boat.” The shape: honour the objection, convert it to a testable claim, bring the test, land on the split. Consulting sells exactly this — disagreement conducted through evidence at client-relationship temperature.",
        "id": "Model: “Bisa jadi benar — mari kita uji. Jika penurunan mal penjelasnya, 6 toko kita seharusnya mengikuti lalu lintas malnya. Dua di antaranya iya. Empat lainnya turun 2–3× lebih cepat dari malnya, dan keempatnya berbagi masalah bauran kategori dan pergantian kepala toko. Jadi data berkata: sebagian arus, sebagian perahunya.” Bentuknya: hormati keberatan, ubah menjadi klaim teruji, bawa ujinya, mendarat pada pembelahan. Konsultansi menjual persis ini — ketidaksetujuan lewat bukti pada suhu hubungan klien."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "action title",
        "id": "judul aksi"
       },
       "def": {
        "en": "A slide headline that states the finding as a full sentence, so the deck reads as an argument from titles alone.",
        "id": "Judul salindia yang menyatakan temuan sebagai kalimat utuh, sehingga dek terbaca sebagai argumen dari judul saja."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does the analyst split −12% into market effect and company effect before anything else?",
        "id": "Mengapa analis membelah −12% menjadi efek pasar dan efek perusahaan sebelum apa pun?"
       },
       "options": [
        {
         "en": "Because clients expect two-part frameworks",
         "id": "Karena klien mengharapkan kerangka dua bagian"
        },
        {
         "en": "Because it separates what the client can act on from what they cannot — sizing the addressable problem",
         "id": "Karena ia memisahkan yang bisa ditindak klien dari yang tidak — mengukur masalah yang bisa digarap"
        },
        {
         "en": "Because market data is easier to collect",
         "id": "Karena data pasar lebih mudah dikumpulkan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The −3% tide is context; the −9% company effect is the engagement. Structuring by controllability is the consulting reflex.",
        "id": "Arus −3% adalah konteks; efek perusahaan −9% adalah proyeknya. Menstrukturkan berdasarkan keterkendalian adalah refleks konsultan."
       }
      }
     ]
    },
    {
     "n": "6.5",
     "title": {
      "en": "Industry Track – Law",
      "id": "Jalur Industri – Hukum"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "A compressed junior workday in law: three realistic tasks with model debriefs. Run it honestly — attempt each task before revealing — then log the three-question debrief in your audit.",
      "id": "Satu hari kerja junior terpadatkan di bidang hukum: tiga tugas realistis dengan pembahasan model. Jalankan dengan jujur — coba tiap tugas sebelum membuka — lalu catat debrief tiga pertanyaan di auditmu."
     },
     "objectives": [
      {
       "en": "Experience three representative junior tasks from law.",
       "id": "Mengalami tiga tugas junior representatif dari hukum."
      },
      {
       "en": "Attempt each task under a soft time-box before reading the model answer.",
       "id": "Mencoba tiap tugas dalam batas waktu longgar sebelum membaca jawaban model."
      },
      {
       "en": "Score the track on energy, competence trajectory and curiosity.",
       "id": "Menilai jalur ini pada energi, trajektori kompetensi, dan rasa ingin tahu."
      }
     ],
     "takeaways": [
      {
       "en": "You now have behavioural data about this industry that no brochure could give you.",
       "id": "Kamu kini punya data perilaku tentang industri ini yang tak bisa diberikan brosur mana pun."
      },
      {
       "en": "Slow is normal; the signal is whether the work pulled you in or pushed you away.",
       "id": "Lambat itu normal; sinyalnya apakah pekerjaan menarikmu masuk atau mendorongmu keluar."
      },
      {
       "en": "Log the three-question debrief before the impression fades.",
       "id": "Catat debrief tiga pertanyaan sebelum kesannya memudar."
      }
     ],
     "scenario": {
      "icon": "flag",
      "img": "../../assets/bg/gauntlet/gate-06-final-interview.jpg",
      "title": {
       "en": "Your desk today: Law",
       "id": "Mejamu hari ini: Hukum"
      },
      "body": [
       {
        "en": "You are a trainee at a corporate law firm. A partner drops a draft services agreement on your desk: “Client signs tomorrow. Flag anything that could hurt them — and remember, they want the deal, not a lecture.”",
        "id": "Kamu trainee di firma hukum korporat. Seorang partner meletakkan draf perjanjian jasa di mejamu: “Klien tanda tangan besok. Tandai apa pun yang bisa merugikan mereka — dan ingat, mereka mau kesepakatannya, bukan ceramah.”"
       }
      ]
     },
     "steps": [
      {
       "h": {
        "en": "Task 1 — Find the tilted clauses",
        "id": "Tugas 1 — Temukan klausul yang miring"
       },
       "body": {
        "en": "Three clauses from the draft: (a) “Provider may revise fees at any time upon notice.” (b) “Client indemnifies Provider against all claims arising from the services.” (c) “Either party may terminate with 30 days' notice; prepaid fees are non-refundable.” Your client is the customer. What is wrong with each? Work it, then reveal.",
        "id": "Tiga klausul dari draf: (a) “Penyedia dapat merevisi biaya kapan saja dengan pemberitahuan.” (b) “Klien membebaskan Penyedia dari semua klaim yang timbul dari jasa.” (c) “Salah satu pihak dapat mengakhiri dengan pemberitahuan 30 hari; biaya dibayar di muka tidak dapat dikembalikan.” Klienmu adalah pelanggan. Apa yang salah pada masing-masing? Kerjakan, lalu buka."
       },
       "debrief": {
        "en": "(a) A unilateral price-change right with no cap or consent converts a fixed deal into an open cheque — cap it, or grant a termination right on any increase. (b) The indemnity is backwards: the client would pay for the provider's own failures; indemnities should follow fault, each party covering harm it causes. (c) Termination looks mutual but non-refundable prepayment makes it one-sided — the provider can exit holding the client's money; unearned fees must be refunded pro-rata. Pattern: read every clause asking “who bears the risk if things go wrong, and who controls the lever?”",
        "id": "(a) Hak ubah harga sepihak tanpa batas atau persetujuan mengubah kesepakatan tetap menjadi cek terbuka — batasi, atau beri hak pengakhiran atas tiap kenaikan. (b) Indemnitasnya terbalik: klien akan membayar kegagalan penyedia sendiri; indemnitas harus mengikuti kesalahan, tiap pihak menanggung kerugian yang disebabkannya. (c) Pengakhiran tampak timbal balik tetapi uang muka tak kembali membuatnya berat sebelah — penyedia bisa keluar sambil memegang uang klien; biaya belum terpakai wajib dikembalikan pro-rata. Polanya: baca tiap klausul sambil bertanya “siapa menanggung risiko jika salah, dan siapa mengendalikan tuasnya?”"
       }
      },
      {
       "h": {
        "en": "Task 2 — Redline, don't lecture",
        "id": "Tugas 2 — Redline, bukan ceramah"
       },
       "body": {
        "en": "Redraft clause (a) so the client is protected but the deal still closes tomorrow. Then reveal.",
        "id": "Tulis ulang klausul (a) agar klien terlindungi tetapi kesepakatan tetap tertutup besok. Lalu buka."
       },
       "debrief": {
        "en": "Model: “Provider may revise fees once per contract year, with 60 days' written notice, by no more than 5% or CPI, whichever is lower. If Client objects, Client may terminate without penalty before the revision takes effect, with unused prepaid fees refunded.” Notice the trade: the provider keeps a legitimate inflation valve; the client gains a cap, notice, and an exit. Deal-saving redlines offer the counterparty something reasonable while closing the abuse — lawyers who only strike clauses kill deals; lawyers who rebalance them close deals.",
        "id": "Model: “Penyedia dapat merevisi biaya sekali per tahun kontrak, dengan pemberitahuan tertulis 60 hari, maksimal 5% atau inflasi, mana yang lebih rendah. Jika Klien berkeberatan, Klien dapat mengakhiri tanpa penalti sebelum revisi berlaku, dengan biaya di muka yang belum terpakai dikembalikan.” Perhatikan pertukarannya: penyedia mempertahankan katup inflasi yang sah; klien mendapat batas, pemberitahuan, dan jalan keluar. Redline penyelamat kesepakatan menawarkan sesuatu yang wajar bagi pihak lawan sambil menutup penyalahgunaannya — pengacara yang hanya mencoret membunuh kesepakatan; yang menyeimbangkan ulang menutupnya."
       }
      },
      {
       "h": {
        "en": "Task 3 — The client email",
        "id": "Tugas 3 — Email klien"
       },
       "body": {
        "en": "Write the email to the client: what you changed, what risk remains, what you need from them by when. Then reveal.",
        "id": "Tulis email ke klien: apa yang kamu ubah, risiko apa yang tersisa, apa yang kamu butuhkan dari mereka sebelum kapan. Lalu buka."
       },
       "debrief": {
        "en": "Model: three bullets. “Changed: fee increases now capped at 5%/year with exit right; indemnity now mutual and fault-based; termination refunds unused prepayment. Remaining risk: the liability cap stands at 12 months' fees — market-standard, but if the service fails during your peak season your losses could exceed it; we can push for carve-outs if you wish, at some risk to timeline. Needed: your call on the liability point by 3 pm today.” Legal advice at its best is exactly this: risks translated into business terms, decisions returned to their owner, deadlines explicit.",
        "id": "Model: tiga butir. “Diubah: kenaikan biaya kini dibatasi 5%/tahun dengan hak keluar; indemnitas kini timbal balik berbasis kesalahan; pengakhiran mengembalikan uang muka tak terpakai. Risiko tersisa: batas tanggung jawab pada biaya 12 bulan — standar pasar, tetapi jika jasa gagal di musim puncakmu kerugian bisa melebihinya; kami bisa mendorong pengecualian jika diinginkan, dengan risiko pada jadwal. Dibutuhkan: keputusanmu atas poin tanggung jawab sebelum jam 3 sore ini.” Nasihat hukum terbaik persis ini: risiko diterjemahkan ke bahasa bisnis, keputusan dikembalikan ke pemiliknya, tenggat eksplisit."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "indemnity",
        "id": "indemnitas"
       },
       "def": {
        "en": "A contractual promise by one party to cover certain losses of the other — powerful, and dangerous when it does not follow fault.",
        "id": "Janji kontraktual satu pihak menanggung kerugian tertentu pihak lain — kuat, dan berbahaya bila tidak mengikuti kesalahan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "What single question drives contract review in this track?",
        "id": "Pertanyaan tunggal apa yang menggerakkan tinjauan kontrak di jalur ini?"
       },
       "options": [
        {
         "en": "“Is the language grammatically precise?”",
         "id": "“Apakah bahasanya presisi secara tata bahasa?”"
        },
        {
         "en": "“Who bears the risk if things go wrong, and who controls the lever?”",
         "id": "“Siapa menanggung risiko jika salah, dan siapa mengendalikan tuasnya?”"
        },
        {
         "en": "“Does the contract match the standard template?”",
         "id": "“Apakah kontrak sesuai templat standar?”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Every flagged clause — fees, indemnity, termination — was a risk-and-control question wearing legal language.",
        "id": "Setiap klausul yang ditandai — biaya, indemnitas, pengakhiran — adalah pertanyaan risiko-dan-kendali berbaju bahasa hukum."
       }
      }
     ]
    },
    {
     "n": "6.6",
     "title": {
      "en": "Industry Track – FMCG",
      "id": "Jalur Industri – FMCG"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "A compressed junior workday in fmcg: three realistic tasks with model debriefs. Run it honestly — attempt each task before revealing — then log the three-question debrief in your audit.",
      "id": "Satu hari kerja junior terpadatkan di bidang fmcg: tiga tugas realistis dengan pembahasan model. Jalankan dengan jujur — coba tiap tugas sebelum membuka — lalu catat debrief tiga pertanyaan di auditmu."
     },
     "objectives": [
      {
       "en": "Experience three representative junior tasks from fmcg.",
       "id": "Mengalami tiga tugas junior representatif dari fmcg."
      },
      {
       "en": "Attempt each task under a soft time-box before reading the model answer.",
       "id": "Mencoba tiap tugas dalam batas waktu longgar sebelum membaca jawaban model."
      },
      {
       "en": "Score the track on energy, competence trajectory and curiosity.",
       "id": "Menilai jalur ini pada energi, trajektori kompetensi, dan rasa ingin tahu."
      }
     ],
     "takeaways": [
      {
       "en": "You now have behavioural data about this industry that no brochure could give you.",
       "id": "Kamu kini punya data perilaku tentang industri ini yang tak bisa diberikan brosur mana pun."
      },
      {
       "en": "Slow is normal; the signal is whether the work pulled you in or pushed you away.",
       "id": "Lambat itu normal; sinyalnya apakah pekerjaan menarikmu masuk atau mendorongmu keluar."
      },
      {
       "en": "Log the three-question debrief before the impression fades.",
       "id": "Catat debrief tiga pertanyaan sebelum kesannya memudar."
      }
     ],
     "scenario": {
      "icon": "flag",
      "img": "../../assets/mentoring-session.jpg",
      "title": {
       "en": "Your desk today: FMCG",
       "id": "Mejamu hari ini: FMCG"
      },
      "body": [
       {
        "en": "You are a junior brand associate at a consumer-goods company. Monday metrics meeting: your instant-beverage brand lost 1.2 points of market share this quarter. The brand manager turns to you: “Take the first pass. Where did it go, and what do we do this month?”",
        "id": "Kamu junior brand associate di perusahaan barang konsumen. Rapat metrik Senin: merek minuman instanmu kehilangan 1,2 poin pangsa pasar kuartal ini. Manajer merek menoleh padamu: “Ambil analisis pertama. Ke mana perginya, dan apa yang kita lakukan bulan ini?”"
       }
      ]
     },
     "steps": [
      {
       "h": {
        "en": "Task 1 — Decompose the share loss",
        "id": "Tugas 1 — Urai kehilangan pangsa"
       },
       "body": {
        "en": "Data: your share 14.3% → 13.1%. Numeric distribution flat at 78% of stores. Competitor B launched a Rp 500 cheaper sachet and gained 1.5 points. Your price held; promo depth was cut 30% this quarter to protect margin. Where did the share go, mechanically? Work it, then reveal.",
        "id": "Data: pangsamu 14,3% → 13,1%. Distribusi numerik stagnan di 78% toko. Pesaing B meluncurkan sachet Rp 500 lebih murah dan naik 1,5 poin. Hargamu bertahan; kedalaman promo dipangkas 30% kuartal ini demi margin. Ke mana pangsa itu pergi, secara mekanis? Kerjakan, lalu buka."
       },
       "debrief": {
        "en": "Share moves through four gates: distribution (can shoppers find you?), visibility (do they see you?), trial (does the price of entry work?), repeat (does the product deliver?). Distribution is flat, so the loss is in-store: the competitor's cheaper sachet attacks trial at exactly the moment your promo cut lowered your own visibility and price competitiveness. The mechanical answer: price-sensitive light buyers switched at shelf. FMCG's discipline is this decomposition — share never “just falls”, it leaks through a specific gate you can name.",
        "id": "Pangsa bergerak lewat empat gerbang: distribusi (bisakah pembeli menemukanmu?), visibilitas (apakah mereka melihatmu?), coba (apakah harga masuknya berhasil?), ulang (apakah produk menepati?). Distribusi stagnan, jadi kebocoran ada di dalam toko: sachet murah pesaing menyerang gerbang coba tepat saat pemangkasan promomu menurunkan visibilitas dan daya saing hargamu sendiri. Jawaban mekanisnya: pembeli ringan yang sensitif harga pindah di rak. Disiplin FMCG adalah penguraian ini — pangsa tak pernah “sekadar turun”, ia bocor lewat gerbang spesifik yang bisa kamu namai."
       }
      },
      {
       "h": {
        "en": "Task 2 — Choose this month's counter",
        "id": "Tugas 2 — Pilih serangan balik bulan ini"
       },
       "body": {
        "en": "Three options, one month, limited budget: (a) match the competitor's price with a fighter pack, (b) restore promo depth in the top 20% of stores that drive 60% of volume, (c) launch a loyalty push on your app. Pick one with reasoning, then reveal.",
        "id": "Tiga opsi, satu bulan, anggaran terbatas: (a) samai harga pesaing dengan kemasan petarung, (b) pulihkan kedalaman promo di 20% toko teratas penyumbang 60% volume, (c) luncurkan dorongan loyalitas di aplikasimu. Pilih satu dengan alasan, lalu buka."
       },
       "debrief": {
        "en": "Model answer: (b). It counters the actual leak (trial/visibility at shelf) at the highest-leverage stores, is reversible, and defends volume without repricing the whole brand. (a) is the tempting trap: permanent price moves against a structurally cheaper attacker start margin wars you fund from a weaker position — fighter packs take months to do well. (c) targets heavy loyal buyers, who are not the ones leaving. The FMCG reflex being trained: match the intervention to the leaking gate, prefer reversible moves, and respect the 80/20 of stores.",
        "id": "Jawaban model: (b). Ia melawan kebocoran sebenarnya (coba/visibilitas di rak) pada toko berdaya ungkit tertinggi, dapat dibalik, dan mempertahankan volume tanpa menghargai ulang seluruh merek. (a) adalah perangkap menggoda: gerakan harga permanen melawan penyerang yang lebih murah secara struktural memulai perang margin yang kamu danai dari posisi lebih lemah — kemasan petarung butuh berbulan-bulan agar benar. (c) menyasar pembeli setia berat, yang bukan pihak yang pergi. Refleks FMCG yang dilatih: cocokkan intervensi dengan gerbang yang bocor, utamakan langkah yang bisa dibalik, dan hormati 80/20 toko."
       }
      },
      {
       "h": {
        "en": "Task 3 — The Monday one-pager",
        "id": "Tugas 3 — Satu halaman untuk Senin"
       },
       "body": {
        "en": "Write the four-line summary for the brand manager: what happened, why, this month's move, how we will know it worked. Then reveal.",
        "id": "Tulis rangkuman empat baris untuk manajer merek: apa yang terjadi, mengapa, langkah bulan ini, bagaimana kita tahu berhasil. Lalu buka."
       },
       "debrief": {
        "en": "Model: “Share −1.2pts, fully in-store: distribution flat, Competitor B's Rp500-cheaper sachet won price-sensitive trial while our promo depth fell 30%. Move: restore promo depth in the top-quintile stores (60% of volume) for 6 weeks, holding national price. Success metric: share in those stores back above 14% by week 6; if not, escalate fighter-pack evaluation. Cost: within quarter's trade budget.” Diagnosis, mechanism, action, measurable exit — the four sentences every commercial function speaks.",
        "id": "Model: “Pangsa −1,2 poin, sepenuhnya di dalam toko: distribusi stagnan, sachet Rp500 lebih murah Pesaing B memenangkan pencobaan sensitif harga saat kedalaman promo kita turun 30%. Langkah: pulihkan kedalaman promo di toko kuintil teratas (60% volume) selama 6 minggu, tahan harga nasional. Metrik sukses: pangsa di toko itu kembali di atas 14% pada minggu ke-6; jika tidak, eskalasi evaluasi kemasan petarung. Biaya: dalam anggaran dagang kuartal.” Diagnosis, mekanisme, aksi, pintu keluar terukur — empat kalimat yang diucapkan semua fungsi komersial."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "numeric distribution",
        "id": "distribusi numerik"
       },
       "def": {
        "en": "The share of stores that stock your product at all — the first gate share must pass through.",
        "id": "Porsi toko yang menjual produkmu sama sekali — gerbang pertama yang harus dilewati pangsa."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why was matching the competitor's price rejected as the first response?",
        "id": "Mengapa menyamai harga pesaing ditolak sebagai respons pertama?"
       },
       "options": [
        {
         "en": "Price cuts are illegal in FMCG",
         "id": "Potongan harga ilegal di FMCG"
        },
        {
         "en": "A permanent price war against a structurally cheaper attacker is fought from the weaker position, and the move is hard to reverse",
         "id": "Perang harga permanen melawan penyerang yang lebih murah secara struktural bertarung dari posisi lebih lemah, dan langkahnya sulit dibalik"
        },
        {
         "en": "Because the app loyalty option was cheaper",
         "id": "Karena opsi loyalitas aplikasi lebih murah"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Reversible, targeted promo defends the leaking gate while preserving the pricing structure — optionality the price cut destroys.",
        "id": "Promo terarah yang bisa dibalik mempertahankan gerbang yang bocor sambil menjaga struktur harga — opsi yang dihancurkan potongan harga."
       }
      }
     ]
    },
    {
     "n": "6.7",
     "title": {
      "en": "Industry Track – Technology",
      "id": "Jalur Industri – Teknologi"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "A compressed junior workday in technology: three realistic tasks with model debriefs. Run it honestly — attempt each task before revealing — then log the three-question debrief in your audit.",
      "id": "Satu hari kerja junior terpadatkan di bidang teknologi: tiga tugas realistis dengan pembahasan model. Jalankan dengan jujur — coba tiap tugas sebelum membuka — lalu catat debrief tiga pertanyaan di auditmu."
     },
     "objectives": [
      {
       "en": "Experience three representative junior tasks from technology.",
       "id": "Mengalami tiga tugas junior representatif dari teknologi."
      },
      {
       "en": "Attempt each task under a soft time-box before reading the model answer.",
       "id": "Mencoba tiap tugas dalam batas waktu longgar sebelum membaca jawaban model."
      },
      {
       "en": "Score the track on energy, competence trajectory and curiosity.",
       "id": "Menilai jalur ini pada energi, trajektori kompetensi, dan rasa ingin tahu."
      }
     ],
     "takeaways": [
      {
       "en": "You now have behavioural data about this industry that no brochure could give you.",
       "id": "Kamu kini punya data perilaku tentang industri ini yang tak bisa diberikan brosur mana pun."
      },
      {
       "en": "Slow is normal; the signal is whether the work pulled you in or pushed you away.",
       "id": "Lambat itu normal; sinyalnya apakah pekerjaan menarikmu masuk atau mendorongmu keluar."
      },
      {
       "en": "Log the three-question debrief before the impression fades.",
       "id": "Catat debrief tiga pertanyaan sebelum kesannya memudar."
      }
     ],
     "scenario": {
      "icon": "flag",
      "img": "../../assets/bg/gauntlet/gate-02-screening.jpg",
      "title": {
       "en": "Your desk today: Technology",
       "id": "Mejamu hari ini: Teknologi"
      },
      "body": [
       {
        "en": "You are a junior product analyst at a marketplace app. Morning stand-up: activation — new users who complete a first purchase within 7 days — fell from 31% to 24% over two releases. The PM assigns you the investigation.",
        "id": "Kamu analis produk junior di aplikasi marketplace. Stand-up pagi: aktivasi — pengguna baru yang menyelesaikan pembelian pertama dalam 7 hari — turun dari 31% ke 24% dalam dua rilis. PM menugaskan investigasinya padamu."
       }
      ]
     },
     "steps": [
      {
       "h": {
        "en": "Task 1 — Localise the funnel break",
        "id": "Tugas 1 — Lokalisasi patahan corong"
       },
       "body": {
        "en": "Funnel data per release: install → signup 62% → 61%; signup → first search 80% → 79%; search → add-to-cart 34% → 33%; cart → payment started 58% → 44%; payment → success 91% → 90%. Where is the break, and what changed in those releases would you check first? Work it, then reveal.",
        "id": "Data corong per rilis: pasang → daftar 62% → 61%; daftar → pencarian pertama 80% → 79%; pencarian → keranjang 34% → 33%; keranjang → mulai bayar 58% → 44%; bayar → sukses 91% → 90%. Di mana patahannya, dan perubahan apa di rilis itu yang kamu periksa pertama? Kerjakan, lalu buka."
       },
       "debrief": {
        "en": "Every stage wobbled a point except cart → payment-started: 58% → 44%, a 14-point cliff that alone explains most of the activation drop (0.62×0.79×0.33×0.44×0.90 ≈ 6.4% vs the old ≈ 8.5% through-rate). Suspects in the release notes: a new address-verification step, a shipping-cost reveal moved earlier, a payment-method list reordered. The tech reflex: funnels localise problems the way MECE trees do — never debug the whole app when one stage owns the cliff, and always check what shipped between the two measurements.",
        "id": "Semua tahap goyah satu poin kecuali keranjang → mulai-bayar: 58% → 44%, jurang 14 poin yang sendirian menjelaskan sebagian besar penurunan aktivasi (0,62×0,79×0,33×0,44×0,90 ≈ 6,4% vs laju lama ≈ 8,5%). Tersangka di catatan rilis: langkah verifikasi alamat baru, biaya kirim yang ditampilkan lebih awal, daftar metode bayar yang diurutkan ulang. Refleks teknologi: corong melokalisasi masalah seperti pohon MECE — jangan pernah debug seluruh aplikasi saat satu tahap memiliki jurangnya, dan selalu periksa apa yang dirilis di antara dua pengukuran."
       }
      },
      {
       "h": {
        "en": "Task 2 — Design the experiment",
        "id": "Tugas 2 — Rancang eksperimennya"
       },
       "body": {
        "en": "The release notes show a new mandatory address-verification step at checkout, added to cut failed deliveries. Design the test that proves or clears it — and name the metric that could make “fixing” activation a mistake. Think, then reveal.",
        "id": "Catatan rilis menunjukkan langkah verifikasi alamat wajib baru di checkout, ditambahkan untuk memangkas kiriman gagal. Rancang uji yang membuktikan atau membersihkannya — dan namai metrik yang bisa membuat “memperbaiki” aktivasi jadi kesalahan. Pikirkan, lalu buka."
       },
       "debrief": {
        "en": "A/B test: 50% of new users get the verification step, 50% get the old flow; measure cart → payment-started, activation, and — the guardrail — failed-delivery rate over 30 days. The verification step was added for a reason: if removing it recovers 14 points of conversion but doubles failed deliveries, the company may be trading real money for vanity activation. Model outcome: keep verification but move it after payment method selection, or make it async. The signature tech trade-off: nearly every fix moves two metrics in opposite directions, and guardrail metrics are how grown-up teams stay honest.",
        "id": "Uji A/B: 50% pengguna baru mendapat langkah verifikasi, 50% alur lama; ukur keranjang → mulai-bayar, aktivasi, dan — pagar pengaman — tingkat kiriman gagal selama 30 hari. Langkah verifikasi ditambahkan karena suatu alasan: jika menghapusnya memulihkan 14 poin konversi tetapi menggandakan kiriman gagal, perusahaan mungkin menukar uang nyata demi aktivasi kosmetik. Hasil model: pertahankan verifikasi tetapi pindahkan setelah pemilihan metode bayar, atau jadikan asinkron. Dilema khas teknologi: hampir tiap perbaikan menggerakkan dua metrik berlawanan arah, dan metrik pagar pengaman adalah cara tim dewasa tetap jujur."
       }
      },
      {
       "h": {
        "en": "Task 3 — Stand-up summary",
        "id": "Tugas 3 — Rangkuman stand-up"
       },
       "body": {
        "en": "Write your 30-second stand-up update: finding, hypothesis, test, timeline. Then reveal.",
        "id": "Tulis pembaruan stand-up 30 detikmu: temuan, hipotesis, uji, lini waktu. Lalu buka."
       },
       "debrief": {
        "en": "Model: “Activation drop localises to cart → payment: 58 to 44. Prime suspect is the new mandatory address verification — it shipped exactly between the two measurements. Proposal: A/B it against the old flow with failed-delivery rate as guardrail; two weeks to significance at current traffic. If confirmed, cheapest fix is moving verification post-payment-selection. Dashboard link in the channel.” Thirty seconds, pyramid-shaped, experiment-first — how technical organisations metabolise problems.",
        "id": "Model: “Penurunan aktivasi terlokalisasi di keranjang → bayar: 58 ke 44. Tersangka utama verifikasi alamat wajib baru — dirilis tepat di antara dua pengukuran. Usulan: A/B terhadap alur lama dengan tingkat kiriman gagal sebagai pagar pengaman; dua minggu menuju signifikansi pada trafik saat ini. Jika terkonfirmasi, perbaikan termurah memindahkan verifikasi setelah pemilihan pembayaran. Tautan dasbor di kanal.” Tiga puluh detik, berbentuk piramida, eksperimen-dulu — cara organisasi teknis mencerna masalah."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "guardrail metric",
        "id": "metrik pagar pengaman"
       },
       "def": {
        "en": "A metric watched during an experiment to ensure the improvement being chased does not silently damage something more important.",
        "id": "Metrik yang diawasi selama eksperimen untuk memastikan perbaikan yang dikejar tidak diam-diam merusak hal yang lebih penting."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does the experiment track failed-delivery rate alongside activation?",
        "id": "Mengapa eksperimen melacak tingkat kiriman gagal di samping aktivasi?"
       },
       "options": [
        {
         "en": "Because more metrics make reports look thorough",
         "id": "Karena lebih banyak metrik membuat laporan tampak menyeluruh"
        },
        {
         "en": "Because the verification step exists to protect deliveries — removing it may trade real losses for better-looking activation",
         "id": "Karena langkah verifikasi ada untuk melindungi pengiriman — menghapusnya bisa menukar kerugian nyata demi aktivasi yang tampak lebih baik"
        },
        {
         "en": "Because activation cannot be measured directly",
         "id": "Karena aktivasi tak bisa diukur langsung"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Guardrails encode the reason the “problem” feature was built. Experiments without them optimise one number by quietly breaking another.",
        "id": "Pagar pengaman mengodekan alasan fitur “bermasalah” itu dibuat. Eksperimen tanpanya mengoptimalkan satu angka sambil diam-diam merusak yang lain."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/bg/gauntlet/gate-03-assessment.jpg",
   "heroPos": "center 30%"
  }
 ]
};
