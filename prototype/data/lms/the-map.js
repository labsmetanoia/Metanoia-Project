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
    "id": "Modul 1 The Map mengajakmu mengenal diri sendiri secara jujur lewat audit pribadi. Kerjakan pelajarannya berurutan — setiap pelajaran menjadi fondasi bagi pelajaran berikutnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply self-awareness and personal audit to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu punya metode yang konkret dan bisa diulang untuk membaca dirimu sendiri dengan jujur, lalu memakainya sebagai dasar setiap keputusan karier."
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
      "id": "Tiga adegan singkat membuka pelajaran ini: pekerjaan yang tiba-tiba terasa mudah digantikan, tugas yang tidak jelas harus dimulai dari mana, dan peran baru yang belum terasa klik. Perhatikan bagaimana masing-masing orang menyesuaikan diri — lalu lanjutkan membaca untuk mengubah apa yang kamu lihat menjadi metode yang bisa kamu pakai sendiri."
     },
     "videosOutro": {
      "title": {
       "en": "Key Takeaways: Enjoy the Journey Ahead",
       "id": "Poin Penting: Nikmati Perjalanan di Depan"
      },
      "body": [
       {
        "en": "These three stories illustrate how skills such as adaptability and resilience, problem-solving, and communicating with impact can help individuals unlock the next step in their careers.",
        "id": "Tiga cerita tadi menunjukkan bagaimana kemampuan beradaptasi dan bertahan, memecahkan masalah, serta berkomunikasi dengan berdampak bisa membuka pintu ke langkah karier berikutnya."
       },
       {
        "en": "We hope these stories inspire you to reflect on the new skills you may need to develop for your current or desired role and prepare yourself for the opportunities ahead.",
        "id": "Semoga cerita-cerita ini mendorongmu merenungkan keterampilan baru apa yang perlu kamu bangun untuk peran saat ini atau peran yang kamu incar — dan menyiapkan diri untuk peluang yang menanti."
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
        "id": "Saat pijakan bergeser: keterampilan yang bisa dibawa ke mana pun"
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
        "id": "Masalah dengan banyak bagian bergerak: minta bantuan sejak awal"
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
        "id": "Peran baru, medan baru: umpan balik, koneksi, dan pesan yang lebih jelas"
       },
       "captions": {
        "en": "../../assets/lms/the-map/adaptability-3-en.vtt",
        "id": "../../assets/lms/the-map/adaptability-3-id.vtt"
       }
      }
     ],
     "overview": {
      "en": "Careers rarely break because of one big storm. They break because the climber never learned to recover. This lesson reframes adaptability and resilience as trainable systems — a recovery loop you run after every setback — and connects them to the personal audit you will complete in this module.",
      "id": "Karier jarang runtuh karena satu badai besar. Karier runtuh karena pendakinya tidak pernah belajar bangkit lagi. Pelajaran ini memandang adaptabilitas dan ketangguhan bukan sebagai bakat, melainkan sistem yang bisa dilatih — sebuah putaran pemulihan yang kamu jalankan setiap kali tersandung — dan mengaitkannya langsung dengan audit pribadi yang akan kamu selesaikan di modul ini."
     },
     "objectives": [
      {
       "en": "Distinguish adaptability (changing your approach) from resilience (recovering your energy) and explain why both are skills, not traits.",
       "id": "Membedakan adaptabilitas (mengubah cara) dan ketangguhan (memulihkan energi), serta menjelaskan mengapa keduanya keterampilan yang bisa dilatih, bukan sifat bawaan."
      },
      {
       "en": "Run the four-step recovery loop — Name → Normalise → Extract → Next step — on a real setback from your own life.",
       "id": "Menjalankan putaran pemulihan empat langkah — Namai → Normalkan → Petik → Langkah berikutnya — pada satu kemunduran nyata dalam hidupmu."
      },
      {
       "en": "Identify your default response under pressure so the personal audit at the end of this module starts from honest data.",
       "id": "Mengenali respons otomatismu saat tertekan, supaya audit pribadi di akhir modul ini berangkat dari data yang jujur."
      }
     ],
     "takeaways": [
      {
       "en": "Adaptability is a decision about method; resilience is a discipline about energy. You can be strong at one and weak at the other — audit both.",
       "id": "Adaptabilitas adalah keputusan soal cara; ketangguhan adalah disiplin soal energi. Kamu bisa kuat di satu sisi dan lemah di sisi lain — karena itu, audit keduanya."
      },
      {
       "en": "A setback processed through the recovery loop becomes data. A setback avoided becomes fear.",
       "id": "Kemunduran yang diproses lewat putaran pemulihan berubah menjadi data. Kemunduran yang dihindari berubah menjadi rasa takut."
      },
      {
       "en": "Employers probe for resilience in interviews because the first two years of any career are mostly recovery: rejected applications, failed tests, hard feedback.",
       "id": "Pewawancara sengaja menggali ketangguhanmu, karena dua tahun pertama karier siapa pun sebagian besar berisi pemulihan: lamaran yang ditolak, tes yang gagal, umpan balik yang pedas."
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
        "id": "Adaptabilitas menjawab pertanyaan <b>“apakah caraku masih berhasil?”</b> — kesediaan melepas rencana yang sudah terbukti tidak jalan. Ketangguhan menjawab <b>“sanggupkah aku terus melangkah sambil mengubah caranya?”</b> — kemampuan menerima pukulan tanpa kehilangan satu minggu penuh. Lulusan baru sering mencampuradukkan keduanya: ada yang makin ngotot dengan cara yang sudah gagal (tangguh, tapi tidak adaptif), ada pula yang gonta-ganti cara tanpa sempat pulih (adaptif, tapi tidak tangguh). Pola paling kuat di awal karier justru terdengar membosankan: ganti cara dengan cepat, pulihkan energi dengan sengaja."
       },
       "img": "../../assets/bg/two-different-muscles.jpg",
       "imgPos": "center 38%"
      },
      {
       "icon": "gear",
       "h": {
        "en": "The recovery loop",
        "id": "Putaran pemulihan"
       },
       "body": {
        "en": "Run four steps after any setback, in order. <b>Name</b> it precisely — “I failed the numerical test at 62%” beats “I'm bad at tests”. <b>Normalise</b> it with base rates — most applicants fail most screening stages; rejection is the default outcome of a funnel, not a verdict on you. <b>Extract</b> one adjustment — a specific, small change you control before the next attempt. <b>Next step</b> — book the next attempt within 48 hours, because open loops close fastest while the details are fresh. The loop takes fifteen minutes on paper and turns an emotional event into an operational one.",
        "id": "Setiap kali tersandung, jalankan empat langkah ini secara berurutan. <b>Namai</b> dengan tepat — “aku gagal tes numerik dengan skor 62%” jauh lebih berguna daripada “aku memang payah soal tes”. <b>Normalkan</b> dengan angka dasar — sebagian besar pelamar gugur di sebagian besar tahap seleksi; penolakan adalah hasil normal dari sebuah corong, bukan vonis atas dirimu. <b>Petik</b> satu penyesuaian — perubahan kecil dan spesifik yang sepenuhnya ada di tanganmu sebelum percobaan berikutnya. <b>Langkah berikutnya</b> — jadwalkan percobaan berikut dalam 48 jam, karena urusan yang menggantung paling mudah dituntaskan selagi detailnya masih segar. Di atas kertas, putaran ini hanya butuh lima belas menit — dan mengubah peristiwa yang emosional menjadi urusan yang operasional."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Why this opens The Map",
        "id": "Mengapa The Map dibuka dengan ini"
       },
       "body": {
        "en": "Everything in The Map — the audit, the habits, the problem-solving frameworks, the industry simulations — assumes you will get things wrong and iterate. That assumption only holds if setbacks feed the system instead of stopping it. So before you map where you are going, you install the mechanism that survives the trip. In the Personal Audit tool you will rate your own recovery pattern honestly; that rating becomes one of the inputs to your development plan.",
        "id": "Semua isi The Map — audit, kebiasaan, kerangka pemecahan masalah, simulasi industri — berangkat dari satu asumsi: kamu akan salah, lalu memperbaiki. Asumsi itu hanya berlaku kalau setiap kemunduran justru memberi bahan bakar bagi sistem, bukan menghentikannya. Karena itu, sebelum memetakan tujuanmu, kamu memasang dulu mekanisme yang akan bertahan sepanjang perjalanan. Di alat Audit Pribadi, kamu akan menilai pola pemulihanmu sendiri dengan jujur; nilai itu menjadi salah satu masukan bagi rencana pengembanganmu."
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
         "id": "Sebutkan kemundurannya dengan tepat, pakai angka"
        }
       },
       {
        "h": {
         "en": "Normalise",
         "id": "Normalkan"
        },
        "sub": {
         "en": "Compare against base rates, not ideals",
         "id": "Bandingkan dengan angka dasar, bukan dengan kondisi ideal"
        }
       },
       {
        "h": {
         "en": "Extract",
         "id": "Petik"
        },
        "sub": {
         "en": "One adjustment you control",
         "id": "Satu penyesuaian yang ada di tanganmu"
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
       "id": "Alur empat simpul. Simpul satu, Namai: sebutkan kemundurannya dengan tepat, pakai angka. Simpul dua, Normalkan: bandingkan hasilnya dengan angka dasar, bukan kondisi ideal. Simpul tiga, Petik: pilih satu penyesuaian yang sepenuhnya ada di tanganmu. Simpul empat, Langkah berikutnya: jadwalkan percobaan berikut dalam 48 jam. Putaran ini diulang setiap kali ada kemunduran."
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
        "id": "Seberapa sering suatu hasil benar-benar terjadi pada orang kebanyakan — misalnya tingkat kelulusan rata-rata sebuah tes seleksi. Inilah pembanding yang jujur untuk hasilmu sendiri."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "After failing a screening test, a Map student says: “I'll just apply to twice as many companies with the same CV.” What is missing?",
        "id": "Setelah gagal di tes seleksi, seorang peserta The Map berkata: “Aku akan melamar ke dua kali lebih banyak perusahaan, dengan CV yang sama.” Apa yang terlewat?"
       },
       "options": [
        {
         "en": "Resilience — they should take a long break first",
         "id": "Ketangguhan — ia seharusnya istirahat panjang dulu"
        },
        {
         "en": "Adaptability — effort is doubled but the failing method is unchanged",
         "id": "Adaptabilitas — usahanya dilipatgandakan, tapi cara yang gagal tidak diubah"
        },
        {
         "en": "Nothing — volume is the main driver of offers",
         "id": "Tidak ada yang terlewat — jumlah lamaran adalah penentu utama tawaran kerja"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Doubling volume without extracting an adjustment repeats the failure at scale. The recovery loop demands one method change before the next attempt.",
        "id": "Melipatgandakan jumlah lamaran tanpa memetik satu penyesuaian sama saja mengulang kegagalan dalam skala lebih besar. Putaran pemulihan menuntut satu perubahan cara sebelum percobaan berikutnya."
       }
      }
     ],
     "tool": {
      "id": "audit",
      "mode": "home",
      "title": {
       "en": "Baseline yourself before you build",
       "id": "Ukur titik awalmu sebelum membangun"
      },
      "body": {
       "en": "The Personal Audit takes your first honest reading — energy, strengths, habits, recovery — and turns it into a development map you will refine through this module.",
       "id": "Audit Pribadi mengambil pembacaan jujur pertamamu — energi, kekuatan, kebiasaan, pola pemulihan — dan mengubahnya menjadi peta pengembangan yang akan kamu pertajam sepanjang modul ini."
      },
      "cta": {
       "en": "Open the Personal Audit →",
       "id": "Buka Audit Pribadi →"
      }
     },
     "quote": {
      "en": "A setback processed becomes data. A setback avoided becomes fear.",
      "id": "Kemunduran yang diproses menjadi data. Kemunduran yang dihindari menjadi rasa takut."
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
      "id": "Sebelum masuk ke teknik apa pun, kamu perlu sikap kerja: untuk apa kamu di sini, apa yang rela kamu korbankan, dan dari mana kamu tahu usahamu berhasil. Dek singkat ini membantumu merumuskan niat belajar yang akan kamu pakai lagi di setiap produk Metanoia — satu kalimat yang mengubah ambisi yang samar menjadi komitmen yang bisa diuji."
     },
     "objectives": [
      {
       "en": "Write a one-sentence learning intention with a concrete outcome and deadline.",
       "id": "Menulis niat belajar dalam satu kalimat, lengkap dengan hasil yang konkret dan tenggat waktu."
      },
      {
       "en": "Set a weekly time budget you can actually defend in your calendar.",
       "id": "Menetapkan jatah waktu mingguan yang benar-benar bisa kamu pertahankan di kalender."
      },
      {
       "en": "Choose one progress signal you will check every Sunday.",
       "id": "Memilih satu sinyal kemajuan yang kamu periksa setiap hari Minggu."
      }
     ],
     "takeaways": [
      {
       "en": "Intentions with a number and a date get finished; intentions with adjectives get abandoned.",
       "id": "Niat yang punya angka dan tanggal biasanya selesai; niat yang hanya berisi kata sifat biasanya ditinggalkan."
      },
      {
       "en": "A modest, defended time budget beats an ambitious, imaginary one.",
       "id": "Jatah waktu yang sederhana tapi benar-benar dijaga jauh lebih berharga daripada jatah ambisius yang hanya ada di angan-angan."
      },
      {
       "en": "Progress you do not measure weekly will quietly stop.",
       "id": "Kemajuan yang tidak kamu ukur setiap minggu akan berhenti tanpa kamu sadari."
      }
     ],
     "slides": [
      {
       "h": {
        "en": "Why an intention beats a goal",
        "id": "Mengapa niat lebih kuat daripada tujuan"
       },
       "points": [
        {
         "en": "A goal names a destination; an intention names the behaviour that gets you there.",
         "id": "Tujuan menyebut titik akhir; niat menyebut perilaku yang membawamu ke sana."
        },
        {
         "en": "“Get a job” is weather. “Complete two modules and one audit per week until March” is climate you control.",
         "id": "“Dapat kerja” itu cuaca — tak bisa kamu atur. “Menyelesaikan dua modul dan satu audit setiap minggu sampai Maret” itu iklim yang kamu kendalikan."
        },
        {
         "en": "Every product in Metanoia assumes iteration — the intention is what keeps you iterating.",
         "id": "Setiap produk Metanoia dirancang untuk diulang dan diperbaiki — niat inilah yang membuatmu terus mengulang."
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
         "id": "Aku akan [perilaku], [seberapa sering], sampai [tanggal], supaya [hasil yang bisa kubuktikan]."
        },
        {
         "en": "Example: “I will finish one Map module and log one audit update every week until 1 June, so that my development plan has 12 weeks of real data.”",
         "id": "Contoh: “Aku akan menyelesaikan satu modul The Map dan mencatat satu pembaruan audit setiap minggu sampai 1 Juni, supaya rencana pengembanganku berisi 12 minggu data nyata.”"
        },
        {
         "en": "Say it aloud. If it sounds impossible, shrink the frequency — not the deadline.",
         "id": "Ucapkan dengan lantang. Kalau terdengar mustahil, kurangi frekuensinya — jangan mundurkan tenggatnya."
        }
       ]
      },
      {
       "h": {
        "en": "Budget the hours honestly",
        "id": "Hitung jam yang tersedia dengan jujur"
       },
       "points": [
        {
         "en": "Count your real free hours this week — after classes, work, family, commuting, rest.",
         "id": "Hitung jam luang yang benar-benar kamu punya minggu ini — setelah kuliah, kerja, keluarga, perjalanan, dan istirahat."
        },
        {
         "en": "Commit 60–70% of that number, not 100%. Slack absorbs bad weeks; overcommitment ends streaks.",
         "id": "Komitmenkan 60–70% dari angka itu, bukan 100%. Sisanya menjadi bantalan untuk minggu yang kacau; komitmen berlebihan justru memutus ritme."
        },
        {
         "en": "Block the hours in your calendar now. Unblocked time belongs to whoever interrupts first.",
         "id": "Blokir jam-jam itu di kalender sekarang juga. Waktu yang tidak diblokir akan diambil siapa pun yang lebih dulu menyela."
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
         "id": "Jumlah pelajaran selesai, catatan audit yang masuk, atau simulasi yang dicoba — satu angka saja, diperiksa setiap hari Minggu."
        },
        {
         "en": "A moving signal proves the system works; a frozen signal is an early warning, not a failure.",
         "id": "Sinyal yang bergerak membuktikan sistemmu bekerja; sinyal yang diam adalah peringatan dini, bukan tanda gagal."
        },
        {
         "en": "Write intention, budget and signal into the Personal Audit tool — it will hold you to them.",
         "id": "Tulis niat, jatah waktu, dan sinyalmu di alat Audit Pribadi — alat itu akan menagih janjimu."
        }
       ]
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Which learning intention is most likely to survive a busy month?",
        "id": "Niat belajar mana yang paling mungkin bertahan di bulan yang sibuk?"
       },
       "options": [
        {
         "en": "“I'll work as hard as possible on my career”",
         "id": "“Aku akan berusaha sekeras mungkin untuk karierku”"
        },
        {
         "en": "“I'll finish one module per week until 1 June, tracked every Sunday”",
         "id": "“Aku akan menyelesaikan satu modul per minggu sampai 1 Juni, dicek setiap hari Minggu”"
        },
        {
         "en": "“I'll complete the whole platform this month”",
         "id": "“Aku akan menuntaskan seluruh platform bulan ini”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "It has a behaviour, a frequency, a deadline and a weekly signal — modest enough to defend, concrete enough to verify.",
        "id": "Ada perilaku, frekuensi, tenggat, dan sinyal mingguannya — cukup sederhana untuk dijaga, cukup konkret untuk dibuktikan."
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
      "id": "Dua keyakinan menentukan seberapa banyak yang bisa kamu petik dari platform ini: apakah kemampuan bisa tumbuh lewat cara dan usaha, dan apakah kamu penulis keadaanmu sendiri atau sekadar tokoh yang menjalaninya. Pelajaran ini menarik keduanya keluar dari kabut motivasi dan menjejakkannya pada perilaku yang bisa kamu audit."
     },
     "objectives": [
      {
       "en": "Catch fixed-mindset language in your own self-talk and translate it into method language.",
       "id": "Menangkap bahasa pola pikir tetap dalam percakapan batinmu sendiri dan menerjemahkannya menjadi bahasa cara."
      },
      {
       "en": "Separate your concern zone from your control zone for one real career worry.",
       "id": "Memisahkan zona kekhawatiran dari zona kendali untuk satu kecemasan karier yang nyata."
      },
      {
       "en": "Define what honest self-assessment means — neither self-flagellation nor self-marketing.",
       "id": "Merumuskan arti penilaian diri yang jujur — bukan menghakimi diri, bukan pula menjual diri."
      }
     ],
     "takeaways": [
      {
       "en": "“I'm bad at X” is a full stop; “I haven't trained X with a method yet” is a to-do item.",
       "id": "“Aku payah di X” adalah titik. “Aku belum melatih X dengan cara yang benar” adalah daftar kerja."
      },
      {
       "en": "Energy spent inside your influence compounds; energy spent on concerns you cannot move evaporates.",
       "id": "Energi yang kamu curahkan di dalam zona kendali akan berlipat; energi yang habis untuk kekhawatiran yang tak bisa kamu ubah akan menguap begitu saja."
      },
      {
       "en": "The audit you are about to run only works at the honesty setting: kind to the person, ruthless about the data.",
       "id": "Audit yang sebentar lagi kamu jalankan hanya berfungsi pada satu setelan: jujur — lembut pada orangnya, tegas pada datanya."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "Ability as a variable, not a verdict",
        "id": "Kemampuan itu variabel, bukan vonis"
       },
       "body": {
        "en": "Research on learning consistently shows that people who treat ability as improvable choose harder tasks, persist longer and recover faster from failure than those who treat it as fixed. You do not need the label “growth mindset” — you need its operating habit: every time you hear yourself say <i>I'm not a numbers person</i> or <i>I can't speak in public</i>, rewrite the sentence with a method in it. “I haven't drilled numerical tests yet.” “I haven't rehearsed a talk more than once.” The rewrite is not positive thinking; it is accurate thinking, because untrained is a different state from unable.",
        "id": "Riset tentang pembelajaran terus menunjukkan hal yang sama: orang yang memandang kemampuan sebagai sesuatu yang bisa ditingkatkan lebih berani memilih tugas sulit, lebih tahan lama, dan lebih cepat bangkit dari kegagalan dibanding mereka yang menganggap kemampuan sudah paten. Kamu tidak perlu labelnya, “growth mindset” — kamu perlu kebiasaan kerjanya: setiap kali kamu mendengar dirimu berkata <i>aku memang tidak jago angka</i> atau <i>aku tidak bisa bicara di depan umum</i>, tulis ulang kalimat itu dengan menyisipkan sebuah cara. “Aku belum berlatih soal tes numerik.” “Aku belum pernah menggladi presentasi lebih dari sekali.” Ini bukan berpikir positif; ini berpikir akurat — karena belum terlatih dan tidak mampu adalah dua keadaan yang berbeda."
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
        "id": "Tulis satu kecemasan karier — misalnya, “pasar kerja tahun ini kejam”. Lalu belah dua. Kondisi pasar ada di <b>zona kekhawatiran</b>: nyata, penting, tapi di luar kendalimu. Kualitas lamaran, skor tes, portofolio, jaringan, dan keterampilan wawancara ada di <b>zona kendali</b>: lebih kecil, tapi sepenuhnya milikmu. Aturan praktisnya soal alokasi: 90% jam kerjamu untuk zona kendali, sementara kekhawatiran cukup mendapat sepuluh menit membaca berita — bukan semalaman menggulir kabar buruk. Orang yang membalik alokasi ini merasa serba tahu, tapi tetap tidak ke mana-mana."
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
        "id": "Audit yang akan kamu jalankan memintamu menilai energi, kekuatan, dan kebiasaan. Ada dua cara gagal yang merusak hasilnya. <b>Menghakimi diri</b>: semua dinilai rendah supaya terkesan rendah hati — rencana yang lahir darinya berlebihan dan menguras tenaga. <b>Menjual diri</b>: semua dinilai tinggi supaya terasa siap — rencana yang lahir darinya tidak memperbaiki apa pun. Setelan yang jujur bertumpu pada bukti: untuk setiap angka, tanyakan <i>apa yang akan kutunjukkan kepada orang asing untuk membuktikan angka ini?</i> Kalau tidak ada yang terlintas, nilai jujurnya lebih rendah — dan sekarang kamu tahu persis bukti apa yang harus kamu bangun."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "Self-talk — fixed vs method",
        "id": "Percakapan batin — vonis vs cara"
       },
       "q": {
        "en": "Rewriting verdicts into to-do items",
        "id": "Mengubah vonis menjadi daftar kerja"
       },
       "weak": {
        "en": "“I bombed the group discussion. I'm just not a leader type. I'll aim for roles where I can work alone.”",
        "id": "“Aku kacau banget di diskusi kelompok tadi. Aku memang bukan tipe pemimpin. Lebih baik aku cari peran yang bisa kerja sendirian.”"
       },
       "strong": {
        "en": "“I bombed the group discussion — I spoke twice and never summarised. Next FGD I'll take the timekeeper role and close with a summary. That's trainable in The Pack, Module 4.”",
        "id": "“Aku kacau di diskusi kelompok tadi — cuma bicara dua kali dan tidak pernah merangkum. Di FGD berikutnya aku ambil peran penjaga waktu dan menutup dengan rangkuman. Itu bisa dilatih di The Pack, Modul 4.”"
       },
       "why": {
        "en": "The strong version names observable behaviour, extracts a specific adjustment, and routes it to a training ground — the verdict never gets a vote.",
        "id": "Versi yang kuat menyebut perilaku yang bisa diamati, memetik satu penyesuaian yang spesifik, dan mengarahkannya ke tempat berlatih — vonis tidak pernah diberi kesempatan bicara."
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
        "id": "Kumpulan hal yang benar-benar bisa digerakkan oleh tindakanmu — di sinilah usaha yang kamu tanam berlipat ganda."
       }
      },
      {
       "term": {
        "en": "concern zone",
        "id": "zona kekhawatiran"
       },
       "def": {
        "en": "Everything that worries you, including what you cannot move — worth knowing, not worth living in.",
        "id": "Segala hal yang mencemaskanmu, termasuk yang tidak bisa kamu ubah — perlu diketahui, tapi bukan tempat untuk tinggal."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Which statement shows the honest-assessment setting?",
        "id": "Pernyataan mana yang mencerminkan setelan penilaian diri yang jujur?"
       },
       "options": [
        {
         "en": "“I rate my communication 9 — I feel confident when talking to friends.”",
         "id": "“Komunikasiku 9 — aku merasa percaya diri kalau ngobrol dengan teman.”"
        },
        {
         "en": "“I rate my communication 4 — I have no evidence beyond casual conversation, so that's what the number says until I build some.”",
         "id": "“Komunikasiku 4 — aku belum punya bukti selain obrolan santai, jadi segitulah angkanya sampai aku membangun buktinya.”"
        },
        {
         "en": "“I rate my communication 2 — I always mess everything up.”",
         "id": "“Komunikasiku 2 — aku selalu mengacaukan semuanya.”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "It anchors the number to evidence and treats the gap as buildable — neither marketing nor flagellation.",
        "id": "Angkanya dijangkarkan pada bukti, dan kesenjangannya dipandang sebagai sesuatu yang bisa dibangun — bukan menjual diri, bukan pula menghakimi diri."
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
       "id": "Sikapnya sudah kamu pegang — putaran pemulihan, bahasa cara, kejujuran yang berpijak pada bukti. Audit ini mengubah semuanya menjadi peta pengembangan pertamamu."
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
    "id": "Modul 2 The Map membangun fondasi memimpin diri sendiri. Kerjakan pelajarannya berurutan — setiap pelajaran menjadi pijakan bagi pelajaran berikutnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply the foundations of self-leadership to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu punya metode yang konkret dan bisa diulang untuk memimpin dirimu sendiri — dan menerapkannya pada keputusan kariermu."
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
      "id": "Efektivitas bukan soal kepribadian; ia sebuah arsitektur. Pelajaran ini memperkenalkan tiga lapisan arsitektur itu — prinsip, paradigma, dan praktik — dan menunjukkan mengapa mengubah perilaku tanpa mengubah cara pandang di baliknya tidak pernah bertahan lama."
     },
     "objectives": [
      {
       "en": "Explain the difference between a principle (does not change), a paradigm (your lens) and a practice (your behaviour).",
       "id": "Menjelaskan perbedaan prinsip (tidak berubah), paradigma (cara pandangmu), dan praktik (perilakumu)."
      },
      {
       "en": "Identify one paradigm you currently hold about work that may be producing your least effective behaviour.",
       "id": "Mengenali satu paradigma tentang kerja yang sedang kamu pegang dan mungkin menjadi sumber perilakumu yang paling tidak efektif."
      },
      {
       "en": "Describe why managing yourself must come before leading or negotiating with others.",
       "id": "Menjelaskan mengapa mengelola diri sendiri harus datang lebih dulu sebelum memimpin atau bernegosiasi dengan orang lain."
      }
     ],
     "takeaways": [
      {
       "en": "Practices copied without their underlying paradigm decay in weeks; paradigm shifts change many practices at once.",
       "id": "Praktik yang ditiru tanpa paradigma di baliknya layu dalam hitungan minggu; sebaliknya, satu pergeseran paradigma mengubah banyak praktik sekaligus."
      },
      {
       "en": "Directed → self-directed → trusted with others is a sequence, not a menu — you cannot skip the middle.",
       "id": "Diarahkan → mengarahkan diri → dipercaya bersama orang lain adalah urutan, bukan menu — tahap tengahnya tidak bisa dilompati."
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
        "id": "Tiga lapisan"
       },
       "body": {
        "en": "<b>Principles</b> are cause-and-effect laws that operate whether you believe in them or not: trust is built slowly and destroyed quickly; skill follows deliberate practice; harvests follow planting seasons. <b>Paradigms</b> are the mental maps through which you see those laws — “my grades define my worth”, “networking is manipulation”, “busy means productive”. <b>Practices</b> are what you actually do. Most self-improvement fails because it edits practices while leaving the paradigm untouched — like taping a new destination label onto an old map. The habits in this module work at the paradigm layer first.",
        "id": "<b>Prinsip</b> adalah hukum sebab-akibat yang tetap berlaku, percaya atau tidak: kepercayaan dibangun perlahan dan runtuh dalam sekejap; keterampilan lahir dari latihan yang disengaja; panen datang setelah musim tanam. <b>Paradigma</b> adalah peta mental yang kamu pakai untuk memandang hukum-hukum itu — “nilai kuliahku menentukan hargaku”, “networking itu manipulasi”, “sibuk berarti produktif”. <b>Praktik</b> adalah apa yang benar-benar kamu lakukan. Kebanyakan upaya memperbaiki diri gagal karena hanya mengutak-atik praktik sementara paradigmanya dibiarkan — ibarat menempelkan label tujuan baru di atas peta lama. Kebiasaan-kebiasaan di modul ini bekerja di lapisan paradigma lebih dulu."
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
        "id": "Pertumbuhan profesional mengikuti urutan yang tetap. Kamu memulai dalam keadaan <b>diarahkan</b> — hasil ditentukan oleh guru, orang tua, atau keberuntungan. Tiga pelajaran berikutnya membangun lapisan <b>mengarahkan diri</b>: kamu memegang kendali atas responsmu, arahmu, dan jadwalmu. Baru setelah itu tahap <b>dipercaya bersama orang lain</b> — kerja tim, kepemimpinan, negosiasi — menjadi nyata. Sebab, tim yang berisi orang-orang yang tidak bisa mengelola dirinya sendiri bukanlah tim, melainkan antrean keadaan darurat. Pemberi kerja membaca urutan ini secara naluriah: pertanyaan wawancara tentang rasa memiliki, perencanaan, dan penentuan prioritas semuanya sedang menguji lapisan mengarahkan diri."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Auditing a paradigm",
        "id": "Mengaudit sebuah paradigma"
       },
       "body": {
        "en": "Take your least effective recurring behaviour — say, all-night cramming before deadlines. Ask: what would I have to believe for this behaviour to make sense? Perhaps “pressure is the only thing that makes me work”. That is the paradigm. Now test it against results over a semester, not a night: the pressure paradigm produces work, but also missed depth, damaged sleep and no compounding skill. A paradigm is disproven the same way any theory is — by its long-run data. Write yours down; you will rate it in the Personal Audit's habit baseline.",
        "id": "Ambil perilaku berulangmu yang paling tidak efektif — misalnya, begadang semalaman menjelang tenggat. Tanyakan: apa yang harus kupercayai supaya perilaku ini masuk akal? Mungkin “cuma tekanan yang bisa membuatku bekerja”. Itulah paradigmanya. Sekarang uji dengan hasil selama satu semester, bukan satu malam: paradigma tekanan memang menghasilkan pekerjaan, tapi juga pemahaman yang dangkal, tidur yang berantakan, dan keterampilan yang tidak pernah bertambah. Paradigma dibantah dengan cara yang sama seperti teori apa pun — lewat data jangka panjangnya. Tuliskan paradigmamu; kamu akan menilainya di bagian kebiasaan dasar pada Audit Pribadi."
       }
      }
     ],
     "diagram": {
      "type": "ladder",
      "exhibit": {
       "en": "Exhibit 1: Self-management comes before leading others.",
       "id": "Peraga 1: Mengelola diri datang lebih dulu sebelum memimpin orang lain."
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
         "id": "Pelajaran 2.2–2.4: pegang kendali atas respons, arah, dan prioritasmu"
        }
       },
       {
        "h": {
         "en": "Trusted with others",
         "id": "Dipercaya bersama orang lain"
        },
        "sub": {
         "en": "Teamwork and leadership built on self-management",
         "id": "Kerja tim dan kepemimpinan yang berdiri di atas pengelolaan diri"
        }
       }
      ],
      "longdesc": {
       "en": "A three-rung ladder. Bottom rung: directed, where outcomes are decided by others. Middle rung: self-directed, built across Lessons 2.2 to 2.4 — owning your response, your direction and your priorities. Top rung: trusted with others, where teamwork and leadership become possible because each member manages themselves.",
       "id": "Tangga dengan tiga anak tangga. Paling bawah: diarahkan — hasil ditentukan orang lain. Tengah: mengarahkan diri, dibangun sepanjang Pelajaran 2.2 sampai 2.4 — memegang kendali atas respons, arah, dan prioritas sendiri. Paling atas: dipercaya bersama orang lain — kerja tim dan kepemimpinan menjadi mungkin karena setiap anggota mampu mengelola dirinya."
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
        "id": "Peta mental yang kamu pakai untuk menafsirkan peristiwa — ia sudah memutuskan arti sebuah fakta bahkan sebelum kamu sempat berpikir."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A student copies a top performer's 5 a.m. routine and quits after two weeks. What most likely went wrong?",
        "id": "Seorang mahasiswa meniru rutinitas bangun jam 5 pagi milik orang berprestasi, lalu menyerah setelah dua minggu. Apa yang paling mungkin salah?"
       },
       "options": [
        {
         "en": "The routine needs at least 66 days to work",
         "id": "Rutinitas butuh minimal 66 hari untuk berhasil"
        },
        {
         "en": "They copied a practice without the paradigm that powers it",
         "id": "Ia meniru praktiknya tanpa paradigma yang menggerakkannya"
        },
        {
         "en": "Morning routines only work for morning people",
         "id": "Rutinitas pagi hanya cocok untuk orang yang memang suka bangun pagi"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Practices borrowed without their underlying lens have no root system. The performer's routine expresses their paradigm about energy and priority; copying the surface copies nothing that sustains it.",
        "id": "Praktik yang dipinjam tanpa cara pandang di baliknya tidak punya akar. Rutinitas si berprestasi adalah ungkapan paradigmanya tentang energi dan prioritas; meniru permukaannya berarti tidak meniru apa pun yang menopangnya."
       }
      }
     ],
     "quote": {
      "en": "Every outcome exists twice: once as the design you choose, then as the result you live.",
      "id": "Setiap hasil terjadi dua kali: pertama sebagai rancangan yang kamu pilih, lalu sebagai kenyataan yang kamu jalani."
     }
    },
    {
     "n": "2.2",
     "title": {
      "en": "Ownership: Acting Inside Your Control",
      "id": "Rasa Memiliki: Bertindak di Dalam Kendalimu"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Between what happens to you and what you do about it, there is a gap — and everything you build in your career is built in that gap. This lesson trains proactivity as an observable behaviour: response choice, ownership language, and initiative within your influence.",
      "id": "Di antara apa yang menimpamu dan apa yang kamu lakukan sesudahnya, ada sebuah celah — dan semua yang kamu bangun dalam karier dibangun di celah itu. Pelajaran ini melatih proaktivitas sebagai perilaku yang bisa diamati: memilih respons, berbahasa dengan rasa memiliki, dan berinisiatif di dalam zona kendalimu."
     },
     "objectives": [
      {
       "en": "Use the stimulus–gap–response model on one recent frustrating event.",
       "id": "Menerapkan model stimulus–celah–respons pada satu kejadian yang baru-baru ini membuatmu kesal."
      },
      {
       "en": "Translate three reactive sentences from your own vocabulary into proactive ones.",
       "id": "Mengubah tiga kalimat reaktif dari kosakatamu sendiri menjadi kalimat proaktif."
      },
      {
       "en": "Design one act of initiative this week that requires nobody's permission.",
       "id": "Merancang satu tindakan inisiatif minggu ini yang tidak membutuhkan izin siapa pun."
      }
     ],
     "takeaways": [
      {
       "en": "Proactivity is not aggression or hustle — it is refusing to let the stimulus write your response for you.",
       "id": "Proaktif bukan berarti agresif atau sok sibuk — proaktif berarti menolak membiarkan keadaan menuliskan responsmu."
      },
      {
       "en": "Your language is a live diagnostic: “I have to” and “they made me” are reactive tells; “I choose” and “I will” are ownership tells.",
       "id": "Bahasamu adalah alat diagnosis yang bekerja seketika: “aku terpaksa” dan “mereka yang membuatku” adalah tanda reaktif; “aku memilih” dan “aku akan” adalah tanda rasa memiliki."
      },
      {
       "en": "Initiative inside your influence needs no permission — which is exactly why interviewers ask for examples of it.",
       "id": "Inisiatif di dalam zona kendalimu tidak butuh izin siapa pun — justru karena itulah pewawancara selalu meminta contohnya."
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
        "id": "Email penolakan masuk. Stimulusnya sudah tetap. Yang belum tetap adalah dua detik sesudahnya: satu lulusan terpuruk selama seminggu; yang lain menjalankan putaran pemulihan dan mengirim lamaran berikutnya malam itu juga. Stimulus yang sama, karier yang berbeda. Proaktivitas adalah latihan menyadari celah itu dan memilih di dalamnya. Celah ini paling mudah terlihat pada stimulus kecil — komentar sinis, balasan yang lama, tugas yang membosankan — maka di situlah kamu melatihnya, jauh sebelum stimulus besar datang."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "Ownership language",
        "id": "Bahasa rasa memiliki"
       },
       "body": {
        "en": "Reactive language outsources authorship: <i>I have to attend</i>, <i>she makes me furious</i>, <i>there's nothing I can do</i>, <i>that's just how I am</i>. Proactive language takes it back: <i>I choose to attend because the relationship matters</i>, <i>I'm choosing anger — what else is available?</i>, <i>let's look at what we can do</i>, <i>I can train a different pattern</i>. This is not wording cosmetics. Language rehearses a worldview thousands of times a day, and hiring managers hear the difference within minutes — candidates who narrate their history as a series of choices sound like owners; candidates who narrate it as weather sound like passengers.",
        "id": "Bahasa reaktif menyerahkan kendali cerita kepada orang lain: <i>aku terpaksa hadir</i>, <i>dia bikin aku murka</i>, <i>tidak ada yang bisa kulakukan</i>, <i>aku memang begini</i>. Bahasa proaktif merebutnya kembali: <i>aku memilih hadir karena hubungan ini penting</i>, <i>aku sedang memilih untuk marah — adakah pilihan lain?</i>, <i>mari lihat apa yang bisa kita lakukan</i>, <i>aku bisa melatih pola yang berbeda</i>. Ini bukan sekadar merapikan kata. Bahasa menggladi cara pandangmu ribuan kali sehari, dan manajer perekrut mendengar bedanya dalam hitungan menit — kandidat yang menceritakan riwayatnya sebagai rangkaian pilihan terdengar seperti pemilik; kandidat yang menceritakannya seperti cuaca terdengar seperti penumpang."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Permissionless initiative",
        "id": "Inisiatif tanpa perlu izin"
       },
       "body": {
        "en": "Inside your control zone there is always a move available that requires nobody's approval: rebuild your CV against a real job description, cold-message one alum for a fifteen-minute call, prototype the spreadsheet your team keeps complaining about, run one mock interview. Proactive people keep a running list of such moves and execute one whenever they feel stuck — because motion inside influence is the antidote to anxiety about concern. This week's exercise: pick one, do it, log it in your audit.",
        "id": "Di dalam zona kendalimu selalu ada langkah yang tidak butuh persetujuan siapa pun: menyusun ulang CV berdasarkan deskripsi lowongan yang nyata, mengirim pesan ke seorang alumni untuk ngobrol lima belas menit, membuat purwarupa spreadsheet yang selama ini dikeluhkan timmu, menjalankan satu simulasi wawancara. Orang proaktif menyimpan daftar langkah semacam ini dan mengeksekusi satu setiap kali merasa buntu — karena bergerak di dalam zona kendali adalah penawar paling ampuh untuk kecemasan atas hal-hal di luar kendali. Latihan minggu ini: pilih satu, lakukan, lalu catat di auditmu."
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
        "id": "“Ceritakan satu masa sulit dan bagaimana kamu menghadapinya.”"
       },
       "weak": {
        "en": "“My thesis supervisor was never available, so my thesis got delayed a semester. It was really unfair because other students had responsive supervisors.”",
        "id": "“Dosen pembimbing saya hampir tidak pernah bisa ditemui, jadi skripsi saya molor satu semester. Rasanya tidak adil, karena mahasiswa lain dapat pembimbing yang responsif.”"
       },
       "strong": {
        "en": "“My supervisor had very limited availability, so after two missed meetings I changed method: I sent one-page updates every Friday with three specific questions, and booked office hours two weeks ahead. Turnaround went from three weeks to four days, and I defended on schedule.”",
        "id": "“Waktu dosen pembimbing saya sangat terbatas. Setelah dua kali pertemuan batal, saya mengubah cara: setiap Jumat saya kirim ringkasan satu halaman berisi tiga pertanyaan spesifik, dan saya pesan jam konsultasi dua minggu di muka. Waktu tanggapan turun dari tiga minggu menjadi empat hari, dan saya sidang tepat jadwal.”"
       },
       "why": {
        "en": "Same stimulus, but the strong answer relocates the story inside the control zone: a method change, a measurable result, ownership without blaming.",
        "id": "Stimulusnya sama, tapi jawaban yang kuat memindahkan ceritanya ke dalam zona kendali: ada perubahan cara, hasil yang terukur, dan rasa memiliki tanpa menyalahkan siapa pun."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Confusing proactivity with saying yes to everything",
         "id": "Menyamakan proaktif dengan mengiyakan semuanya"
        },
        "fix": {
         "en": "Proactivity includes proactive no's — declining what pulls you out of your priorities is a chosen response too.",
         "id": "Proaktif juga mencakup berkata tidak secara sadar — menolak hal yang menarikmu keluar dari prioritas adalah respons yang kamu pilih juga."
        }
       },
       {
        "h": {
         "en": "Training it only on big events",
         "id": "Hanya melatihnya pada peristiwa besar"
        },
        "fix": {
         "en": "The gap is trained on small stimuli daily — emails, comments, queues — so it holds when a rejection or layoff arrives.",
         "id": "Celah itu dilatih setiap hari pada stimulus kecil — email, komentar, antrean — supaya tetap kokoh saat penolakan atau PHK benar-benar datang."
        }
       },
       {
        "h": {
         "en": "Ownership language as self-blame",
         "id": "Menjadikan bahasa rasa memiliki sebagai cara menyalahkan diri"
        },
        "fix": {
         "en": "Owning your response is not owning every cause. The market, the layoff, the supervisor may be genuinely outside you — your next move never is.",
         "id": "Bertanggung jawab atas responsmu bukan berarti bertanggung jawab atas semua penyebabnya. Pasar, PHK, dosen pembimbing bisa saja benar-benar di luar kendalimu — tapi langkah berikutnya tidak pernah."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "Which sentence is the proactive translation of “I have to work weekends, my manager gives me too much”?",
        "id": "Mana versi proaktif dari kalimat “aku terpaksa kerja di akhir pekan, manajerku kasih beban terlalu banyak”?"
       },
       "options": [
        {
         "en": "“Weekends are just part of proving yourself early in a career.”",
         "id": "“Kerja akhir pekan memang bagian dari membuktikan diri di awal karier.”"
        },
        {
         "en": "“I've been accepting weekend work without raising load — this week I'll bring my task list to my manager and ask which two items move.”",
         "id": "“Selama ini aku menerima kerja akhir pekan tanpa pernah membicarakan beban — minggu ini aku bawa daftar tugasku ke manajer dan tanya dua item mana yang bisa digeser.”"
        },
        {
         "en": "“I'll quietly do less until someone notices the load.”",
         "id": "“Aku akan diam-diam mengurangi kerja sampai ada yang menyadari bebannya.”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "It converts a complaint about others into a specific, permissioned-by-nobody move inside the control zone — with the conversation as the chosen response.",
        "id": "Keluhan tentang orang lain diubah menjadi satu langkah spesifik di dalam zona kendali yang tidak butuh izin siapa pun — dan percakapan itulah respons yang dipilih."
       }
      }
     ]
    },
    {
     "n": "2.3",
     "title": {
      "en": "Designing the Outcome First",
      "id": "Merancang Hasil Akhir Lebih Dulu"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Every outcome exists twice: once as the design you choose, then as the result you live. Careers that skip the design stage get designed by default — by parents' expectations, feed algorithms and whoever offers first. This lesson builds the second discipline: designing the outcome first, at the scale of a career and of a week.",
      "id": "Setiap hasil terjadi dua kali: pertama sebagai rancangan yang kamu pilih, lalu sebagai kenyataan yang kamu jalani. Karier yang melewatkan tahap rancangan tetap akan dirancang — oleh harapan orang tua, algoritme linimasa, dan siapa pun yang lebih dulu menawarkan pekerjaan. Pelajaran ini membangun disiplin kedua: merancang hasil akhirnya lebih dulu, baik dalam skala karier maupun skala satu minggu."
     },
     "objectives": [
      {
       "en": "Draft a personal mission sentence that names contribution, not titles.",
       "id": "Menyusun satu kalimat misi pribadi yang menyebut kontribusi, bukan jabatan."
      },
      {
       "en": "Define a 3-year professional outcome specific enough to reverse-plan from.",
       "id": "Menetapkan hasil profesional 3 tahun yang cukup spesifik untuk direncanakan mundur ke hari ini."
      },
      {
       "en": "Connect the mission to The Range: direction chosen by design, not by first offer.",
       "id": "Mengaitkan misi dengan The Range: arah karier dipilih lewat rancangan, bukan lewat tawaran yang datang pertama."
      }
     ],
     "takeaways": [
      {
       "en": "If you do not write the script, you will still perform one — someone else's.",
       "id": "Kalau kamu tidak menulis naskahnya, kamu tetap akan memerankan sebuah naskah — naskah milik orang lain."
      },
      {
       "en": "A mission names the contribution you want to be trusted with; titles are just vehicles that carry it.",
       "id": "Misi menyebut kontribusi yang ingin kamu emban; jabatan hanyalah kendaraan yang membawanya."
      },
      {
       "en": "Reverse planning turns a 3-year outcome into this semester's checklist.",
       "id": "Perencanaan mundur mengubah hasil 3 tahun menjadi daftar periksa untuk semester ini."
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
        "id": "Sebuah gedung ada di atas kertas sebelum berdiri dalam beton; karier layak mendapat perlakuan yang sama. Tahap rancangan bukan khayalan tentang jabatan — ia jawaban sementara atas tiga pertanyaan: <b>Masalah apa yang ingin dipercayakan orang kepadaku?</b> <b>Orang seperti apa yang ingin kudengar digambarkan rekan kerja saat aku tidak ada di ruangan?</b> <b>Apa yang menjadi mungkin bagi orang lain berkat pekerjaanku?</b> Tulis jawaban kasarnya sekarang, dengan pensil. Inti tahap rancangan bukan ketepatan — melainkan kepengarangan: kamu yang menulis. Kamu akan merevisinya setiap tahun, dan tidak akan pernah menyesal memilikinya."
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
        "id": "Misi adalah kompas; ia butuh penanda pertama. Ubah misimu menjadi satu hasil 3 tahun dengan empat unsur: <b>ranah</b> (analitik data di industri jasa keuangan), <b>level</b> (dipercaya menangani analisis dari awal sampai akhir), <b>artefak bukti</b> (portofolio karya yang sudah dirilis), dan <b>batas yang pantang kamu langgar</b> (kesehatan, integritas, keluarga). Lalu rencanakan mundur: apa yang harus sudah terjadi dalam 18 bulan supaya hasil itu terjangkau? Dalam 6 bulan? Semester ini? Peta karier di The Range memberimu data yang jujur untuk memilih ranah; audit memantau apakah rencana semester ini benar-benar berjalan."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Default scripts",
        "id": "Naskah bawaan"
       },
       "body": {
        "en": "Without a design stage, three scripts compete to run your career. The <b>inheritance script</b>: study what the family respects, join what the family recognises. The <b>feed script</b>: chase whatever role is trending this year. The <b>first-offer script</b>: accept whoever says yes first, then let that accident define the decade. None of these are malicious — they are just unauthored. The test: for each big choice you are facing, ask <i>whose script is this line from?</i> If you cannot trace it to your own mission, it deserves a rewrite before you act on it.",
        "id": "Tanpa tahap rancangan, ada tiga naskah yang berebut menjalankan kariermu. <b>Naskah warisan</b>: pelajari bidang yang dihormati keluarga, masuki perusahaan yang dikenal keluarga. <b>Naskah linimasa</b>: kejar peran apa pun yang sedang tren tahun ini. <b>Naskah tawaran pertama</b>: terima siapa pun yang lebih dulu bilang ya, lalu biarkan kebetulan itu menentukan sepuluh tahun berikutnya. Tidak ada yang jahat dari ketiganya — hanya saja bukan kamu pengarangnya. Ujiannya: untuk setiap pilihan besar yang kamu hadapi, tanyakan <i>dialog ini berasal dari naskah siapa?</i> Kalau tidak bisa kamu telusuri sampai ke misimu sendiri, tulis ulang dulu sebelum kamu jalankan."
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
         "id": "Peran pertama atau proyek besar di ranah itu sudah berjalan"
        }
       },
       {
        "h": {
         "en": "6 months",
         "id": "6 bulan"
        },
        "sub": {
         "en": "Applications live, portfolio v1, network of 10 real contacts",
         "id": "Lamaran berjalan, portofolio versi 1, jaringan 10 kontak yang nyata"
        }
       },
       {
        "h": {
         "en": "This semester",
         "id": "Semester ini"
        },
        "sub": {
         "en": "Skills chosen, audit running, first artefact started",
         "id": "Keterampilan sudah dipilih, audit berjalan, artefak pertama dimulai"
        }
       }
      ],
      "longdesc": {
       "en": "A four-point timeline read right to left as a plan and left to right as execution: a 3-year outcome defines an 18-month milestone, which defines a 6-month state, which defines this semester's concrete checklist.",
       "id": "Garis waktu empat titik: dibaca dari kanan ke kiri sebagai rencana, dari kiri ke kanan sebagai eksekusi. Hasil 3 tahun menentukan tonggak 18 bulan, yang menentukan kondisi 6 bulan, yang menentukan daftar periksa konkret untuk semester ini."
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
        "id": "Merencanakan dari hasil akhir ke belakang sampai hari ini, sehingga setiap horizon waktu mewarisi syaratnya dari horizon setelahnya."
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
         "id": "“Sukses dan mapan secara finansial”"
        },
        {
         "en": "“Own end-to-end data analyses in a financial-services team, with a portfolio of five shipped projects, without sacrificing my health”",
         "id": "“Menangani analisis data dari awal sampai akhir di tim jasa keuangan, dengan portofolio lima proyek yang sudah dirilis, tanpa mengorbankan kesehatan”"
        },
        {
         "en": "“Work at a big-name company that people respect”",
         "id": "“Bekerja di perusahaan ternama yang dihormati orang”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "It names domain, level, evidence artefact and a protected constraint — each horizon behind it can now be derived.",
        "id": "Ranah, level, artefak bukti, dan batas yang dijaga semuanya disebut — setiap horizon di belakangnya kini bisa diturunkan."
       }
      }
     ],
     "tool": {
      "id": "audit",
      "mode": "home",
      "title": {
       "en": "Write the mission into your audit",
       "id": "Tuliskan misimu ke dalam audit"
      },
      "body": {
       "en": "The Personal Audit stores your mission draft and 3-year outcome next to your baseline — so every later reading is measured against a direction you authored.",
       "id": "Audit Pribadi menyimpan draf misi dan hasil 3 tahunmu berdampingan dengan data dasarmu — sehingga setiap pembacaan berikutnya diukur terhadap arah yang kamu tulis sendiri."
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
      "id": "Melindungi yang Penting dari yang Mendesak"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "You now have a direction; this lesson defends it. Defending the important against the urgent is the discipline of executing your design stage against the pull of everything urgent — built on one matrix, one weekly ritual, and the most underrated career skill: a graceful no.",
      "id": "Kamu sudah punya arah; pelajaran ini melindunginya. Melindungi yang penting dari yang mendesak adalah disiplin menjalankan rancanganmu di tengah tarikan segala hal yang terasa mendesak — dibangun di atas satu matriks, satu ritual mingguan, dan keterampilan karier yang paling diremehkan: menolak dengan elegan."
     },
     "objectives": [
      {
       "en": "Sort a real week of your tasks into the four quadrants of urgent × important.",
       "id": "Memilah tugas-tugasmu dalam satu minggu nyata ke dalam empat kuadran mendesak × penting."
      },
      {
       "en": "Run a 20-minute weekly preview that schedules important-not-urgent work before anything else.",
       "id": "Menjalankan tinjauan mingguan 20 menit yang menjadwalkan pekerjaan penting-tapi-tidak-mendesak sebelum yang lain."
      },
      {
       "en": "Deliver a graceful no that protects a priority without damaging a relationship.",
       "id": "Menyampaikan penolakan yang elegan: melindungi prioritas tanpa merusak hubungan."
      }
     ],
     "takeaways": [
      {
       "en": "Important-not-urgent work is where careers are actually built: skill practice, relationships, health, planning.",
       "id": "Pekerjaan penting-tapi-tidak-mendesak adalah tempat karier sesungguhnya dibangun: latihan keterampilan, hubungan, kesehatan, perencanaan."
      },
      {
       "en": "Nothing defends that work except a calendar block and a rehearsed no.",
       "id": "Tidak ada yang bisa melindungi pekerjaan itu selain blok waktu di kalender dan penolakan yang sudah kamu latih."
      },
      {
       "en": "Every yes is an unpriced no to something else — price it before you give it.",
       "id": "Setiap “ya” adalah “tidak” yang belum dihitung harganya bagi hal lain — hitung dulu sebelum kamu ucapkan."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "The urgency trap",
        "id": "Jebakan rasa mendesak"
       },
       "body": {
        "en": "Urgency is a sensation, not a measure of value. Notifications, other people's deadlines and minor crises all feel urgent because they tap you on the shoulder; skill-building, relationship-building and health never tap — they wait, quietly compounding or quietly decaying. Sort any week into four quadrants: <b>I</b> urgent+important (real deadlines, real crises), <b>II</b> important, not urgent (practice, planning, people, health), <b>III</b> urgent, not important (most pings and many meetings), <b>IV</b> neither (doomscrolling). The trap: III disguises itself as I, and eats the hours II needed. People who live in I and III are always busy and never further.",
        "id": "Mendesak adalah sensasi, bukan ukuran nilai. Notifikasi, tenggat orang lain, dan krisis kecil terasa mendesak karena mereka menepuk pundakmu; membangun keterampilan, hubungan, dan kesehatan tidak pernah menepuk — mereka menunggu, diam-diam berlipat atau diam-diam merosot. Pilah satu minggu ke dalam empat kuadran: <b>I</b> mendesak dan penting (tenggat sungguhan, krisis sungguhan), <b>II</b> penting tapi tidak mendesak (latihan, perencanaan, orang-orang, kesehatan), <b>III</b> mendesak tapi tidak penting (sebagian besar notifikasi dan banyak rapat), <b>IV</b> bukan keduanya (menggulir kabar buruk tanpa henti). Jebakannya: kuadran III menyamar sebagai I, lalu memakan jam yang seharusnya milik II. Orang yang hidup di kuadran I dan III selalu sibuk, tapi tidak pernah maju."
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
        "id": "Sekali seminggu, dua puluh menit, tiga langkah. <b>Tinjau</b> misi dan hasil 3 tahun yang kamu rancang di Pelajaran 2.3 — tiga puluh detik saja, sekadar mengingat tujuan. <b>Pilih</b> dua atau tiga blok penting-tapi-tidak-mendesak untuk minggu depan — sesi latihan keterampilan dua jam, satu ngopi dengan kontak, tiga kali olahraga — dan masukkan ke kalender lebih dulu, seperti batu besar sebelum kerikil. <b>Antisipasi</b> hal-hal mendesak-dan-penting yang sudah terlihat supaya mereka punya ruang dan tidak menjalar menjadi begadang. Urutannya penting: jadwalkan kuadran II sebelum kuadran I memenuhi minggumu, karena kuadran I selalu memuai mengisi ruang yang tersedia."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "The graceful no",
        "id": "Menolak dengan elegan"
       },
       "body": {
        "en": "A no has three parts: <b>appreciation</b> (thank the asker sincerely), <b>the protected reason</b> (name what the yes would damage — “I've committed Thursday evenings to test prep until June”), and <b>an alternative</b> (a later date, a smaller scope, another person, or a clean decline). “Thanks for thinking of me — I can't take this on before June because my evenings are committed to certification prep. If it can wait until July, I'm in.” Notice what it does not contain: apology spirals, fake maybes, or invented excuses. People respect a no that shows them your priorities; they resent a yes that gets delivered late and badly.",
        "id": "Penolakan yang baik punya tiga bagian: <b>apresiasi</b> (ucapkan terima kasih dengan tulus), <b>alasan yang kamu lindungi</b> (sebutkan apa yang akan dikorbankan kalau kamu bilang ya — “Kamis malam sampai Juni sudah kualokasikan untuk persiapan tes”), dan <b>alternatif</b> (waktu lain, lingkup yang lebih kecil, orang lain, atau penolakan yang bersih). “Terima kasih sudah mengingat aku — aku belum bisa ambil ini sebelum Juni, karena malam-malamku sudah untuk persiapan sertifikasi. Kalau bisa menunggu sampai Juli, aku ikut.” Perhatikan apa yang tidak ada di dalamnya: permintaan maaf yang bertubi-tubi, “mungkin” yang palsu, atau alasan yang dikarang. Orang menghargai penolakan yang memperlihatkan prioritasmu; yang membuat mereka kesal adalah “ya” yang akhirnya ditepati terlambat dan setengah hati."
       }
      }
     ],
     "diagram": {
      "type": "quad",
      "exhibit": {
       "en": "Exhibit 1: The urgency–importance matrix. Careers are built in the important-not-urgent cell.",
       "id": "Peraga 1: Matriks mendesak–penting. Karier dibangun di kotak penting-tapi-tidak-mendesak."
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
         "id": "Kerjakan sekarang — tapi perkecil lewat perencanaan"
        }
       },
       {
        "h": {
         "en": "II · Building",
         "id": "II · Membangun"
        },
        "sub": {
         "en": "Practice, people, health, planning — schedule first",
         "id": "Latihan, orang-orang, kesehatan, perencanaan — jadwalkan lebih dulu"
        }
       },
       {
        "h": {
         "en": "III · Interruptions",
         "id": "III · Gangguan"
        },
        "sub": {
         "en": "Urgent, not yours — decline, batch or delegate",
         "id": "Mendesak, tapi bukan urusanmu — tolak, kumpulkan, atau delegasikan"
        }
       },
       {
        "h": {
         "en": "IV · Escapes",
         "id": "IV · Pelarian"
        },
        "sub": {
         "en": "Neither — notice the trigger, cap the time",
         "id": "Bukan keduanya — kenali pemicunya, batasi waktunya"
        }
       }
      ],
      "longdesc": {
       "en": "A two-by-two matrix. The urgent-and-important cell: crises and deadlines — do them now, and shrink them over time with planning. The important-not-urgent cell: skill practice, relationships, health and planning — schedule these first. The urgent-but-not-important cell: interruptions and many meetings — decline, batch or delegate. The neither-urgent-nor-important cell: escapes — notice the trigger and cap the time.",
       "id": "Matriks dua kali dua. Kotak mendesak-dan-penting: krisis dan tenggat — kerjakan sekarang, dan perkecil dari waktu ke waktu lewat perencanaan. Kotak penting-tapi-tidak-mendesak: latihan keterampilan, hubungan, kesehatan, dan perencanaan — jadwalkan lebih dulu. Kotak mendesak-tapi-tidak-penting: gangguan dan banyak rapat — tolak, kumpulkan, atau delegasikan. Kotak tidak mendesak dan tidak penting: pelarian — kenali pemicunya dan batasi waktunya."
      }
     },
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Scheduling important-not-urgent work “when there's time left”",
         "id": "Menjadwalkan pekerjaan penting-tapi-tidak-mendesak “kalau ada sisa waktu”"
        },
        "fix": {
         "en": "There is never time left. Big rocks go in the calendar first; gravel fills around them.",
         "id": "Sisa waktu itu tidak pernah ada. Batu-batu besar masuk kalender lebih dulu; kerikil mengisi celah di sekitarnya."
        }
       },
       {
        "h": {
         "en": "Treating every request as urgent-and-important",
         "id": "Menganggap setiap permintaan sebagai mendesak-dan-penting"
        },
        "fix": {
         "en": "Ask “what happens if this waits 24 hours?” — most so-called urgencies survive the question.",
         "id": "Tanyakan: “apa yang terjadi kalau ini menunggu 24 jam?” — sebagian besar hal yang katanya mendesak ternyata baik-baik saja."
        }
       },
       {
        "h": {
         "en": "The apologetic, door-open no",
         "id": "Penolakan penuh maaf yang membiarkan pintu terbuka"
        },
        "fix": {
         "en": "“Maybe later, so sorry, I'll try” invites the same request next week. Appreciate, name the protected reason, offer one alternative, stop.",
         "id": "“Mungkin nanti ya, maaf banget, nanti kuusahakan” hanya mengundang permintaan yang sama minggu depan. Apresiasi, sebutkan alasan yang kamu lindungi, tawarkan satu alternatif, lalu berhenti."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "A friend asks for all-evening help moving apartments on the night you reserved for interview practice, two days before a real interview. What does the important-versus-urgent discipline suggest?",
        "id": "Seorang teman minta ditemani pindahan sepanjang malam, tepat di malam yang sudah kamu sisihkan untuk latihan wawancara — dua hari sebelum wawancara sungguhan. Apa yang disarankan disiplin penting-versus-mendesak?"
       },
       "options": [
        {
         "en": "Help — relationships are important-not-urgent, so they always win",
         "id": "Bantu — hubungan itu penting-tapi-tidak-mendesak, jadi selalu menang"
        },
        {
         "en": "Decline with appreciation, the protected reason, and an alternative — e.g. two hours Saturday",
         "id": "Tolak dengan apresiasi, alasan yang kamu lindungi, dan alternatif — misalnya dua jam di hari Sabtu"
        },
        {
         "en": "Say yes, then practice after midnight to fit both",
         "id": "Bilang ya, lalu berlatih lewat tengah malam supaya keduanya terkejar"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Both the friendship and the interview are important; the graceful-no format protects the scheduled priority while genuinely serving the relationship with a real alternative.",
        "id": "Persahabatan dan wawancara sama-sama penting; format penolakan yang elegan melindungi prioritas yang sudah dijadwalkan sambil tetap sungguh-sungguh menjaga hubungan lewat alternatif yang nyata."
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
    "id": "Dasar-Dasar Pemecahan Masalah – Memperbaiki Hidup Kita"
   },
   "overview": {
    "en": "Module 3 of The Map focuses on problem solving 101 – improve our life. Work through the lessons in order — each builds on the last.",
    "id": "Modul 3 The Map membahas dasar-dasar pemecahan masalah untuk memperbaiki hidup kita. Kerjakan pelajarannya berurutan — setiap pelajaran menjadi pijakan bagi pelajaran berikutnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply problem solving 101 – improve our life to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu punya metode yang konkret dan bisa diulang untuk memecahkan masalah — dan menerapkannya pada keputusan kariermu sendiri."
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
      "id": "Lepaskan aura misterius dari kata “kecerdasan”: dalam dunia kerja, kecerdasan adalah seberapa andal kamu mengubah niat menjadi hasil. Pelajaran ini memandang pemecahan masalah sebagai proses konversi itu, dan menunjukkan mengapa pemberi kerja mengujinya jauh lebih ketat daripada pengetahuan."
     },
     "objectives": [
      {
       "en": "Define practical intelligence as outcome-reaching and identify its four working components.",
       "id": "Mendefinisikan kecerdasan praktis sebagai kemampuan mencapai hasil, dan mengenali empat komponen kerjanya."
      },
      {
       "en": "Explain why a defined problem is half-solved, with the gap-statement format.",
       "id": "Menjelaskan mengapa masalah yang sudah dirumuskan berarti setengah terpecahkan, lewat format pernyataan kesenjangan."
      },
      {
       "en": "Recognise where problem-solving is tested in hiring: cases, tests, FGDs and probing interviews.",
       "id": "Mengenali di mana saja pemecahan masalah diuji dalam proses rekrutmen: studi kasus, tes, FGD, dan wawancara yang menggali."
      }
     ],
     "takeaways": [
      {
       "en": "In the workplace nobody asks how much you know; they ask what happened to the thing you owned.",
       "id": "Di tempat kerja, tidak ada yang bertanya seberapa banyak yang kamu tahu; mereka bertanya apa yang terjadi pada urusan yang kamu pegang."
      },
      {
       "en": "A problem is a gap between a current state and a desired state, plus an obstacle — write all three or you have a complaint, not a problem.",
       "id": "Masalah adalah kesenjangan antara kondisi sekarang dan kondisi yang diinginkan, ditambah hambatan — tulis ketiganya, atau yang kamu punya hanyalah keluhan, bukan masalah."
      },
      {
       "en": "Outcome-reaching is trainable because each component — defining, structuring, deciding, executing — is trainable.",
       "id": "Kemampuan mencapai hasil bisa dilatih, karena setiap komponennya — merumuskan, menyusun, memutuskan, mengeksekusi — bisa dilatih."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "Intelligence, redefined for work",
        "id": "Kecerdasan, didefinisikan ulang untuk dunia kerja"
       },
       "body": {
        "en": "School measures how well you absorb and reproduce knowledge. Work measures something else: given a fuzzy goal, limited information and other people, how reliably do you produce the intended result? Call it practical intelligence. It has four working components: <b>defining</b> the real problem beneath the stated one, <b>structuring</b> it into parts you can attack, <b>deciding</b> under uncertainty with incomplete data, and <b>executing</b> through people and setbacks. Grades correlate weakly with this; deliberate practice correlates strongly — which is the best news in this module.",
        "id": "Sekolah mengukur seberapa baik kamu menyerap dan mengulang pengetahuan. Dunia kerja mengukur hal yang berbeda: dengan tujuan yang samar, informasi yang terbatas, dan orang-orang lain di sekitarmu, seberapa andal kamu menghasilkan apa yang diminta? Sebut saja ini kecerdasan praktis. Ia punya empat komponen kerja: <b>merumuskan</b> masalah yang sebenarnya di balik masalah yang disebutkan, <b>menyusunnya</b> menjadi bagian-bagian yang bisa digarap, <b>memutuskan</b> di tengah ketidakpastian dengan data yang tidak lengkap, dan <b>mengeksekusi</b> lewat orang lain dan berbagai hambatan. Nilai akademik hanya berkorelasi lemah dengan semua ini; latihan yang disengaja berkorelasi kuat — dan itulah kabar terbaik di modul ini."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The gap statement",
        "id": "Pernyataan kesenjangan"
       },
       "body": {
        "en": "Most stated problems are actually symptoms or complaints: “our student organisation is dying”. Convert to a gap statement: <b>current state</b> (12 active members, down from 40 last year), <b>desired state</b> (30 active members by December), <b>obstacle</b> (we do not know why members leave after their first month). Suddenly there are lines of attack: interview leavers, examine the first-month experience, test retention fixes. The discipline is refusing to discuss solutions until the three parts are written down — because a solution to an undefined problem is a lottery ticket.",
        "id": "Sebagian besar “masalah” yang diucapkan orang sebenarnya gejala atau keluhan: “organisasi mahasiswa kami sekarat”. Ubah menjadi pernyataan kesenjangan: <b>kondisi sekarang</b> (12 anggota aktif, turun dari 40 tahun lalu), <b>kondisi yang diinginkan</b> (30 anggota aktif pada Desember), <b>hambatan</b> (kami tidak tahu mengapa anggota pergi setelah bulan pertama). Tiba-tiba muncul jalur yang bisa digarap: wawancarai yang keluar, periksa pengalaman di bulan pertama, uji coba cara mempertahankan anggota. Disiplinnya: menolak membahas solusi sebelum ketiga bagian itu tertulis — karena solusi untuk masalah yang belum dirumuskan sama saja dengan membeli tiket lotre."
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
        "id": "Setiap proses seleksi yang serius menguji kemampuan mencapai hasil di suatu titik: tes bakat menguji penalaran terstruktur di bawah tekanan waktu; diskusi kelompok menguji cara menyusun dan memutuskan bersama orang lain di ruangan yang sama; wawancara kasus menguji seluruh rantai pada sebuah masalah bisnis; wawancara perilaku menguji eksekusi — “ceritakan apa yang benar-benar kamu lakukan”. The Pack melatih setiap format itu secara khusus. Modul ini memberimu mesin yang mendasarinya, sehingga format-format itu menjadi wujud dari satu keterampilan yang sama, bukan empat pertunjukan yang terpisah."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: The outcome-reaching chain — every hiring assessment probes one of these links.",
       "id": "Peraga 1: Rantai pencapaian hasil — setiap asesmen rekrutmen menguji salah satu mata rantainya."
      },
      "title": {
       "en": "From fuzzy goal to outcome",
       "id": "Dari tujuan yang samar ke hasil"
      },
      "items": [
       {
        "h": {
         "en": "Define",
         "id": "Rumuskan"
        },
        "sub": {
         "en": "Gap statement: current, desired, obstacle",
         "id": "Pernyataan kesenjangan: sekarang, diinginkan, hambatan"
        }
       },
       {
        "h": {
         "en": "Structure",
         "id": "Susun"
        },
        "sub": {
         "en": "Split into attackable parts",
         "id": "Pecah menjadi bagian-bagian yang bisa digarap"
        }
       },
       {
        "h": {
         "en": "Decide",
         "id": "Putuskan"
        },
        "sub": {
         "en": "Choose under uncertainty, name the assumption",
         "id": "Pilih di tengah ketidakpastian, sebutkan asumsinya"
        }
       },
       {
        "h": {
         "en": "Execute",
         "id": "Eksekusi"
        },
        "sub": {
         "en": "Deliver through people and setbacks",
         "id": "Wujudkan lewat orang lain dan berbagai hambatan"
        }
       }
      ],
      "longdesc": {
       "en": "A four-link chain: define the problem as a gap statement; structure it into attackable parts; decide under uncertainty while naming assumptions; execute through people and setbacks. Aptitude tests, group discussions, case interviews and behavioural interviews each probe one or more links.",
       "id": "Rantai empat mata: rumuskan masalah sebagai pernyataan kesenjangan; susun menjadi bagian-bagian yang bisa digarap; putuskan di tengah ketidakpastian sambil menyebutkan asumsi; eksekusi lewat orang lain dan berbagai hambatan. Tes bakat, diskusi kelompok, wawancara kasus, dan wawancara perilaku masing-masing menguji satu mata rantai atau lebih."
      }
     },
     "checks": [
      {
       "q": {
        "en": "“Our café's revenue is disappointing” — what is the correct next move under this lesson?",
        "id": "“Pendapatan kafe kami mengecewakan” — menurut pelajaran ini, apa langkah berikutnya yang tepat?"
       },
       "options": [
        {
         "en": "Brainstorm promotions to boost sales",
         "id": "Curah gagasan promosi untuk mendongkrak penjualan"
        },
        {
         "en": "Write the gap statement: current revenue, target revenue, and the obstacle blocking the difference",
         "id": "Tulis pernyataan kesenjangan: pendapatan sekarang, target pendapatan, dan hambatan yang mengganjal selisihnya"
        },
        {
         "en": "Benchmark three competitor cafés this week",
         "id": "Bandingkan dengan tiga kafe pesaing minggu ini"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Until current, desired and obstacle are written, promotions and benchmarks are solutions to an undefined problem — motion without aim.",
        "id": "Selama kondisi sekarang, kondisi yang diinginkan, dan hambatannya belum tertulis, promosi dan pembandingan hanyalah solusi untuk masalah yang belum dirumuskan — bergerak tanpa sasaran."
       }
      }
     ],
     "quote": {
      "en": "Nobody asks how much you know. They ask what happened to the thing you owned.",
      "id": "Tidak ada yang bertanya seberapa banyak yang kamu tahu. Mereka bertanya apa yang terjadi pada urusan yang kamu pegang."
     }
    },
    {
     "n": "3.2",
     "title": {
      "en": "Structured Problem-Solving Frameworks",
      "id": "Kerangka Kerja Pemecahan Masalah Terstruktur"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "Three frameworks cover most problems a professional meets before their thirties: MECE trees for structure, 5 Whys for causes, and a weighted matrix for decisions. This lesson teaches each one and then makes you run them.",
      "id": "Tiga kerangka kerja sudah cukup untuk sebagian besar masalah yang dihadapi seorang profesional sebelum usia tiga puluh: pohon MECE untuk menyusun, 5 Why untuk menemukan sebab, dan matriks berbobot untuk memutuskan. Pelajaran ini mengajarkan ketiganya, lalu memintamu langsung menjalankannya."
     },
     "objectives": [
      {
       "en": "Break a problem into a MECE issue tree with two levels.",
       "id": "Memecah sebuah masalah menjadi pohon isu MECE dua tingkat."
      },
      {
       "en": "Drive from a symptom to a root cause with 5 Whys without jumping to blame.",
       "id": "Menelusuri dari gejala sampai ke akar sebab dengan 5 Why, tanpa buru-buru menyalahkan orang."
      },
      {
       "en": "Score options against weighted criteria and sanity-check the winner.",
       "id": "Menilai pilihan-pilihan dengan kriteria berbobot dan menguji kewajaran pemenangnya."
      }
     ],
     "takeaways": [
      {
       "en": "MECE — no overlaps, no gaps — is what makes a breakdown trustworthy enough to divide work by.",
       "id": "MECE — tanpa tumpang tindih, tanpa celah — adalah yang membuat sebuah pemecahan cukup bisa dipercaya untuk dijadikan dasar pembagian kerja."
      },
      {
       "en": "The fifth why usually lands on a process or a decision, not a person — that is how you know you dug deep enough.",
       "id": "“Mengapa” yang kelima biasanya mendarat pada sebuah proses atau keputusan, bukan pada orang — itulah tandanya kamu sudah menggali cukup dalam."
      },
      {
       "en": "A decision matrix does not decide for you; it exposes what you are really weighing so others can challenge it.",
       "id": "Matriks keputusan tidak memutuskan untukmu; ia membeberkan apa yang sebenarnya kamu timbang, sehingga orang lain bisa mengujinya."
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
        "id": "Ambil pernyataan kesenjangan dari 3.1, lalu pecah hambatannya menjadi cabang-cabang yang <b>saling lepas</b> (tidak ada butir yang masuk ke dua cabang sekaligus) dan <b>lengkap menyeluruh</b> (semuanya bersama-sama mencakup setiap kemungkinan). Masalah pendapatan terbelah rapi menjadi harga × volume; volume menjadi pelanggan baru × pelanggan yang kembali; setiap ujung cabang menjadi pertanyaan yang bisa dicari jawabannya oleh seseorang. Ujian pohon yang baik adalah delegasi: bisakah empat rekan tim masing-masing mengambil satu cabang tanpa pekerjaan yang dobel dan tanpa wilayah yang tak tergarap? Kalau tidak, potong ulang pohonnya sebelum ada yang mulai menggali."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "5 Whys, done honestly",
        "id": "5 Why, dijalankan dengan jujur"
       },
       "body": {
        "en": "Ask why five times, following the causal chain: sales fell → fewer repeat customers → wait times doubled → one barista per shift quit → schedules published one day ahead make shifts unplannable. Notice where it landed: a scheduling process, ownable and fixable. Two corruption modes to avoid: <b>blame-jumping</b> (stopping at “because Andi is lazy” — persons are rarely root causes, incentives and processes are) and <b>convenient stopping</b> (stopping at the cause you already know how to fix). Follow the chain where the evidence goes, not where your favourite solution lives.",
        "id": "Tanyakan “mengapa” lima kali sambil mengikuti rantai sebab-akibatnya: penjualan turun → pelanggan yang kembali berkurang → waktu tunggu jadi dua kali lipat → satu barista per sif berhenti → jadwal yang baru terbit sehari sebelumnya membuat sif mustahil direncanakan. Lihat di mana rantainya mendarat: sebuah proses penjadwalan — ada pemiliknya, dan bisa diperbaiki. Dua penyimpangan yang harus dihindari: <b>buru-buru menyalahkan</b> (berhenti di “karena Andi malas” — orang jarang menjadi akar masalah; insentif dan proseslah yang biasanya jadi penyebab) dan <b>berhenti di tempat yang nyaman</b> (berhenti di sebab yang kebetulan sudah kamu tahu cara memperbaikinya). Ikuti rantainya ke arah yang ditunjukkan bukti, bukan ke arah solusi favoritmu."
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
        "id": "Saat pilihan bertambah banyak — tiga tawaran kerja, empat ide proyek — daftar kriteria yang penting bagimu (pertumbuhan, kompensasi, kualitas mentor, jarak tempuh), beri bobot hingga totalnya 100, nilai setiap pilihan 1–5 untuk tiap kriteria, lalu kalikan. Setelah itu jalankan dua uji kewajaran yang membuat alat ini tetap jujur: <b>uji kernyit</b> — kalau baris pemenangnya membuatmu kecewa, berarti ada kriteria tersembunyi yang belum masuk tabel; temukan dan tambahkan. <b>Uji sensitivitas</b> — apakah pemenangnya berubah kalau satu bobot yang masih bisa diperdebatkan digeser sepuluh poin? Kalau ya, keputusan itu butuh lebih banyak informasi, bukan lebih banyak hitungan."
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
        "id": "Laba sebuah warung makan di kampus turun 30% semester ini. Susun pohon MECE dua tingkat untuk penyebabnya sebelum membuka tinjauan."
       },
       "debrief": {
        "en": "Level 1 splits profit = revenue − cost. Revenue splits into price × volume (volume into new/returning buyers); cost splits into ingredients, labour, rent/other. Every plausible cause — a new competitor, cheaper menu, rising chicken prices — now has exactly one home. If your tree mixed “competitor opened nearby” (a driver of volume) as a sibling of “revenue”, the levels are mixed: drivers hang beneath the component they move.",
        "id": "Tingkat 1 memecah laba = pendapatan − biaya. Pendapatan terbagi menjadi harga × volume (volume terbagi menjadi pembeli baru / pembeli yang kembali); biaya terbagi menjadi bahan baku, tenaga kerja, sewa/lain-lain. Setiap penyebab yang masuk akal — pesaing baru, menu yang lebih murah, harga ayam naik — kini punya tepat satu rumah. Kalau pohonmu menempatkan “pesaing buka di dekat kampus” (pendorong volume) sejajar dengan “pendapatan”, tingkatnya tercampur: pendorong seharusnya bergantung di bawah komponen yang ia gerakkan."
       }
      },
      {
       "h": {
        "en": "Drill 2 — Find the root",
        "id": "Latihan 2 — Temukan akarnya"
       },
       "body": {
        "en": "Symptom: you missed two assignment deadlines this month. Run 5 Whys on paper — no blaming persons, including yourself — then reveal.",
        "id": "Gejala: bulan ini kamu melewatkan dua tenggat tugas. Jalankan 5 Why di atas kertas — tanpa menyalahkan siapa pun, termasuk dirimu sendiri — lalu buka tinjauan."
       },
       "debrief": {
        "en": "A blame chain stops at “because I'm lazy” — untrainable, unfixable. An honest chain looks like: missed deadlines → started both three days late → tasks entered no system when assigned → I rely on memory for commitments → I have no capture habit. The root is a missing process (capture), which the weekly preview from Lesson 2.4 directly repairs. Roots that end in a fixable process are the signature of a well-run 5 Whys.",
        "id": "Rantai yang menyalahkan berhenti di “karena aku malas” — tidak bisa dilatih, tidak bisa diperbaiki. Rantai yang jujur terlihat begini: tenggat terlewat → keduanya dimulai tiga hari terlambat → tugas tidak dicatat ke sistem apa pun saat diberikan → aku mengandalkan ingatan untuk semua komitmen → aku tidak punya kebiasaan mencatat. Akarnya adalah proses yang hilang (mencatat), dan tinjauan mingguan dari Pelajaran 2.4 langsung memperbaikinya. Akar yang berujung pada proses yang bisa diperbaiki adalah ciri khas 5 Why yang dijalankan dengan benar."
       }
      },
      {
       "h": {
        "en": "Drill 3 — Score the offers",
        "id": "Latihan 3 — Nilai tawarannya"
       },
       "body": {
        "en": "Two internship offers: a famous company with routine work, versus a small firm with real responsibility and a strong mentor. Build a weighted matrix with four criteria, score both, then reveal.",
        "id": "Dua tawaran magang: perusahaan terkenal dengan pekerjaan rutin, atau firma kecil dengan tanggung jawab sungguhan dan mentor yang kuat. Susun matriks berbobot dengan empat kriteria, nilai keduanya, lalu buka tinjauan."
       },
       "debrief": {
        "en": "There is no universally right winner — the matrix's job is to expose YOUR weights. A typical early-career weighting (learning 40, mentor 25, brand 20, pay 15) favours the small firm; weight brand at 45 and the famous company wins. What matters: you can now defend the choice in one sentence — “I weighted learning highest because Module 2 set a skills-based 3-year outcome” — and the flinch test caught anyone who secretly wanted the other row.",
        "id": "Tidak ada pemenang yang berlaku untuk semua orang — tugas matriks adalah membeberkan bobot MILIKMU. Pembobotan awal karier yang lazim (belajar 40, mentor 25, nama besar 20, gaji 15) memenangkan firma kecil; beri nama besar bobot 45, dan perusahaan terkenal yang menang. Yang penting: sekarang kamu bisa mempertahankan pilihanmu dalam satu kalimat — “aku memberi bobot tertinggi pada belajar karena di Modul 2 aku menetapkan hasil 3 tahun berbasis keterampilan” — dan uji kernyit akan menangkap siapa pun yang diam-diam menginginkan baris satunya."
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
        "id": "Mutually Exclusive, Collectively Exhaustive — pemecahan yang bagian-bagiannya tidak saling tumpang tindih dan secara keseluruhan tidak menyisakan celah."
       }
      },
      {
       "term": {
        "en": "root cause",
        "id": "akar masalah"
       },
       "def": {
        "en": "The deepest cause in the chain that, if fixed, prevents the symptom from recurring — usually a process or decision, rarely a person.",
        "id": "Sebab terdalam dalam rantai yang, kalau diperbaiki, mencegah gejalanya terulang — biasanya sebuah proses atau keputusan, jarang sekali orang."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Which breakdown of “why students skip breakfast” is MECE?",
        "id": "Pemecahan mana untuk “mengapa mahasiswa melewatkan sarapan” yang memenuhi MECE?"
       },
       "options": [
        {
         "en": "No time / woke up late / not hungry / cafeteria far",
         "id": "Tidak sempat / bangun kesiangan / tidak lapar / kantin jauh"
        },
        {
         "en": "Doesn't want to eat (no appetite, dieting) / wants to but can't (time, money, access)",
         "id": "Tidak ingin makan (tidak selera, sedang diet) / ingin tapi tidak bisa (waktu, uang, akses)"
        },
        {
         "en": "Health reasons / lifestyle reasons / other reasons",
         "id": "Alasan kesehatan / alasan gaya hidup / alasan lain"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Option A overlaps (“no time” and “woke up late” are the same branch); option C's “other” is a gap wearing a label. B splits on want × ability — exclusive and exhaustive.",
        "id": "Pilihan A tumpang tindih (“tidak sempat” dan “bangun kesiangan” adalah cabang yang sama); “alasan lain” di pilihan C adalah celah yang diberi label. Pilihan B memecah berdasarkan ingin × mampu — saling lepas dan menyeluruh."
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
      "id": "Kerangka kerja baru menjadi keterampilan kalau dipakai di bawah tekanan. Tiga kasus yang digarap tuntas — satu pribadi, satu organisasi, satu bisnis — masing-masing menuntut rantai lengkap dari pernyataan kesenjangan sampai keputusan, dengan jawaban model untuk kamu bandingkan dengan percobaanmu sendiri."
     },
     "objectives": [
      {
       "en": "Run the full define → structure → decide chain on three unfamiliar cases.",
       "id": "Menjalankan rantai lengkap rumuskan → susun → putuskan pada tiga kasus yang belum pernah kamu temui."
      },
      {
       "en": "Practise stating assumptions out loud instead of hiding them.",
       "id": "Berlatih menyatakan asumsi secara terbuka, bukan menyembunyikannya."
      },
      {
       "en": "Compare your structure against a model answer and extract one adjustment.",
       "id": "Membandingkan strukturmu dengan jawaban model dan memetik satu penyesuaian."
      }
     ],
     "takeaways": [
      {
       "en": "The chain is the same whether the problem is your GPA, a student organisation or a company's revenue — scale changes, method does not.",
       "id": "Rantainya selalu sama, entah masalahnya IPK-mu, organisasi mahasiswa, atau pendapatan sebuah perusahaan — skalanya berubah, metodenya tidak."
      },
      {
       "en": "Stated assumptions can be corrected by others; hidden assumptions sink the analysis silently.",
       "id": "Asumsi yang dinyatakan bisa dikoreksi orang lain; asumsi yang disembunyikan menenggelamkan analisis tanpa suara."
      },
      {
       "en": "Comparing to a model answer is not about matching it — it is about noticing which branch you never considered.",
       "id": "Membandingkan dengan jawaban model bukan untuk mencocok-cocokkan — melainkan untuk menyadari cabang mana yang tidak pernah terpikir olehmu."
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
        "id": "Untuk setiap kasus: tulis dulu pernyataan kesenjangannya (dua menit), potong pohon MECE (lima menit), pilih cabang yang akan kamu selidiki pertama kali dan sebutkan alasannya, lalu sebutkan asumsi yang menopang pilihanmu. Baru setelah itu buka tinjauan. Tahan godaan membaca jawaban model lebih awal — nilainya justru tercipta tepat saat kamu buntu dan tetap harus memilih sebuah struktur. Rasa tidak nyaman itulah latihannya."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Case 1 — The sinking GPA",
        "id": "Kasus 1 — IPK yang merosot"
       },
       "body": {
        "en": "Your GPA fell from 3.5 to 3.0 over two semesters while you took on a part-time job and an organisation role. Graduation-with-honours needs 3.4. Work the chain, then reveal.",
        "id": "IPK-mu turun dari 3,5 ke 3,0 dalam dua semester, bertepatan dengan kamu mengambil kerja paruh waktu dan jabatan di organisasi. Untuk lulus dengan predikat cum laude kamu butuh 3,4. Garap rantainya, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Gap: 3.0 now, 3.4 needed, obstacle unknown time/energy allocation. Tree: academic inputs (attendance, study hours, method) × competing loads (job hours, org hours, recovery). Investigate first: where the removed study hours actually went — data beats guessing. Common miss: treating “drop the job” as the only branch; the model tree includes method upgrades (active recall over rereading) that recover grade-per-hour, not just hours.",
        "id": "Kesenjangan: 3,0 sekarang, butuh 3,4, hambatannya alokasi waktu/energi yang belum jelas. Pohon: masukan akademik (kehadiran, jam belajar, metode) × beban yang bersaing (jam kerja, jam organisasi, pemulihan). Selidiki lebih dulu: ke mana sebenarnya jam belajar yang hilang itu pergi — data mengalahkan tebakan. Kelalaian yang umum: menganggap “berhenti kerja” sebagai satu-satunya cabang; pohon model juga memuat peningkatan metode (mengingat aktif, bukan membaca ulang) yang memulihkan nilai per jam belajar, bukan sekadar menambah jam."
       }
      },
      {
       "h": {
        "en": "Case 2 — The empty event",
        "id": "Kasus 2 — Acara yang sepi"
       },
       "body": {
        "en": "Your organisation's flagship seminar drew 40 attendees against a 200 target, despite three weeks of Instagram promotion. The committee blames “bad luck with timing”. Work the chain, then reveal.",
        "id": "Seminar unggulan organisasimu hanya dihadiri 40 orang dari target 200, padahal sudah dipromosikan tiga minggu di Instagram. Panitia menyalahkan “waktunya sedang tidak beruntung”. Garap rantainya, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Gap: 40 vs 200, obstacle unknown funnel failure. Tree the funnel: reached (how many actually saw promotion?) → interested (right topic/audience?) → registered → attended (schedule conflict, reminder failure). Each stage has a number the committee never measured — “bad luck” is what an unmeasured funnel feels like. Model insight: 5 Whys on “why Instagram only” often lands on “we promote where we already are, not where the audience is” — a process root, fixable next event.",
        "id": "Kesenjangan: 40 vs 200, hambatannya kegagalan corong yang belum diketahui. Susun corongnya sebagai pohon: terjangkau (berapa orang yang benar-benar melihat promosi?) → tertarik (topik dan audiensnya tepat?) → mendaftar → hadir (bentrok jadwal, pengingat tidak sampai). Setiap tahap punya angka yang tidak pernah diukur panitia — “nasib buruk” adalah rasanya corong yang tidak pernah diukur. Wawasan dari jawaban model: 5 Why pada “mengapa hanya di Instagram” sering mendarat di “kami berpromosi di tempat kami berada, bukan di tempat audiens berada” — akar berupa proses, bisa diperbaiki di acara berikutnya."
       }
      },
      {
       "h": {
        "en": "Case 3 — The two-sided shop",
        "id": "Kasus 3 — Toko dengan dua sisi"
       },
       "body": {
        "en": "A family clothing shop's walk-in sales fall 20% yearly as the mall empties, while its small Instagram side-business grows 40% yearly from a low base. The owner asks: push harder offline, or shift online? Work the chain, then reveal.",
        "id": "Penjualan langsung sebuah toko pakaian keluarga turun 20% per tahun seiring sepinya mal, sementara bisnis sampingannya di Instagram tumbuh 40% per tahun dari basis yang masih kecil. Pemiliknya bertanya: genjot lebih keras di toko fisik, atau beralih ke online? Garap rantainya, lalu buka tinjauan."
       },
       "debrief": {
        "en": "This is a decision case: the tree (offline: traffic × conversion × basket; online: reach × conversion × fulfilment capacity) feeds a matrix with criteria like 3-year revenue potential, required investment, family skills fit, risk. The trap is arithmetic seduction: 40% growth on a tiny base may be smaller in rupiah than a 20% decline on a large base for years yet. The model answer states its assumption openly — “assuming mall traffic keeps declining at this rate” — and recommends a staged shift with a trigger point, not a leap. Staged decisions with named triggers beat one-way bets when uncertainty is high.",
        "id": "Ini kasus pengambilan keputusan: pohonnya (toko fisik: kunjungan × konversi × nilai belanja; online: jangkauan × konversi × kapasitas pengiriman) mengisi matriks dengan kriteria seperti potensi pendapatan 3 tahun, investasi yang dibutuhkan, kecocokan dengan keterampilan keluarga, dan risiko. Jebakannya adalah rayuan angka: pertumbuhan 40% dari basis yang kecil bisa jadi masih lebih sedikit dalam rupiah daripada penurunan 20% dari basis yang besar — selama bertahun-tahun. Jawaban model menyatakan asumsinya secara terbuka — “dengan asumsi kunjungan mal terus turun pada laju ini” — dan merekomendasikan peralihan bertahap dengan titik pemicu yang jelas, bukan lompatan sekaligus. Saat ketidakpastian tinggi, keputusan bertahap dengan pemicu yang disebutkan lebih unggul daripada taruhan satu arah."
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
         "id": "Mengenali bukan berarti bisa mengingat. Bergulat dulu; perbandingan baru mengajarkan sesuatu setelah ada percobaanmu sendiri."
        }
       },
       {
        "h": {
         "en": "Polishing the tree instead of picking a branch",
         "id": "Memoles pohon terus-menerus, bukan memilih cabang"
        },
        "fix": {
         "en": "A good-enough tree plus an investigated branch beats a perfect tree with no investigation. Time-box the structure.",
         "id": "Pohon yang cukup baik ditambah satu cabang yang diselidiki mengalahkan pohon sempurna tanpa penyelidikan. Batasi waktu untuk menyusun struktur."
        }
       },
       {
        "h": {
         "en": "Hiding the load-bearing assumption",
         "id": "Menyembunyikan asumsi yang menopang seluruh analisis"
        },
        "fix": {
         "en": "Say it: “this recommendation assumes X”. In interviews, stated assumptions earn points; discovered hidden ones end candidacies.",
         "id": "Ucapkan: “rekomendasi ini berasumsi bahwa X”. Dalam wawancara, asumsi yang dinyatakan menambah nilai; asumsi tersembunyi yang kemudian ketahuan bisa mengakhiri peluangmu."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "In Case 3, why does the model answer prefer a staged shift with a trigger point over an immediate full pivot online?",
        "id": "Pada Kasus 3, mengapa jawaban model lebih memilih peralihan bertahap dengan titik pemicu daripada langsung pindah sepenuhnya ke online?"
       },
       "options": [
        {
         "en": "Because online business is riskier than offline",
         "id": "Karena bisnis online lebih berisiko daripada toko fisik"
        },
        {
         "en": "Because under high uncertainty, staged moves buy information while preserving the larger revenue base",
         "id": "Karena saat ketidakpastian tinggi, langkah bertahap membeli informasi sambil menjaga basis pendapatan yang lebih besar"
        },
        {
         "en": "Because family businesses should never change their model",
         "id": "Karena bisnis keluarga tidak boleh mengubah modelnya"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The large declining base still pays the bills; each stage generates data that improves the next decision — an option an all-in leap destroys.",
        "id": "Basis pendapatan yang besar, meski menurun, masih membayar tagihan; setiap tahap menghasilkan data yang memperbaiki keputusan berikutnya — pilihan yang justru hilang kalau kamu melompat habis-habisan."
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
    "id": "Komunikasi yang Berdampak"
   },
   "overview": {
    "en": "Module 4 of The Map focuses on communication for impact. Work through the lessons in order — each builds on the last.",
    "id": "Modul 4 The Map membahas cara berkomunikasi yang berdampak. Kerjakan pelajarannya berurutan — setiap pelajaran menjadi pijakan bagi pelajaran berikutnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply communication for impact to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu punya metode yang konkret dan bisa diulang untuk berkomunikasi dengan berdampak — dan menerapkannya pada keputusan kariermu sendiri."
   },
   "lessons": [
    {
     "n": "4.1",
     "title": {
      "en": "Common Communication Challenges",
      "id": "Tantangan Komunikasi yang Umum Terjadi"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Most communication failures are not speaking failures — they are design failures that happened before anyone opened their mouth. This lesson names the five challenges that sink early-career communication and gives you a diagnostic to spot yours.",
      "id": "Kebanyakan kegagalan komunikasi bukan gagal saat berbicara — melainkan gagal saat merancang, jauh sebelum siapa pun membuka mulut. Pelajaran ini menyebut lima tantangan yang paling sering menenggelamkan komunikasi di awal karier, dan memberimu alat diagnosis untuk mengenali mana yang menjadi milikmu."
     },
     "objectives": [
      {
       "en": "Identify the five recurring communication challenges and which ones you exhibit.",
       "id": "Mengenali lima tantangan komunikasi yang selalu berulang, dan mana saja yang ada pada dirimu."
      },
      {
       "en": "Explain the curse of knowledge and why expertise makes explanation harder.",
       "id": "Menjelaskan “kutukan pengetahuan” dan mengapa semakin ahli seseorang, semakin sulit ia menjelaskan."
      },
      {
       "en": "Audit one recent message of yours against the five challenges.",
       "id": "Mengaudit satu pesan yang baru-baru ini kamu kirim terhadap kelima tantangan tersebut."
      }
     ],
     "takeaways": [
      {
       "en": "The audience owns the meaning: what they understood is what you communicated, regardless of intent.",
       "id": "Audienslah yang memiliki makna: apa yang mereka pahami adalah apa yang kamu komunikasikan, apa pun niatmu."
      },
      {
       "en": "Burying the lead is the most common early-career failure — professionals want the point first, the journey second.",
       "id": "Mengubur inti pesan adalah kegagalan awal karier yang paling umum — profesional ingin intinya lebih dulu, perjalanannya belakangan."
      },
      {
       "en": "Nervousness is not a personality flaw; it is unrehearsed material meeting a high-stakes audience.",
       "id": "Gugup bukan cacat kepribadian; itu hanya materi yang belum dilatih bertemu dengan audiens yang taruhannya tinggi."
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
        "id": "<b>1 · Mengubur inti pesan:</b> bercerita secara kronologis (“pertama aku mengumpulkan data, lalu membersihkannya…”) alih-alih membuka dengan kesimpulan. <b>2 · Kutukan pengetahuan:</b> begitu kamu tahu sesuatu, kamu tidak bisa lagi mengingat rasanya tidak tahu — sehingga kamu melompati langkah-langkah yang justru dibutuhkan audiens. <b>3 · Salah ketinggian:</b> memberi detail saat pendengar butuh ringkasan, atau ringkasan saat mereka butuh detail. <b>4 · Kebiasaan monolog:</b> memperlakukan komunikasi sebagai pengiriman pesan satu arah, tanpa memeriksa apa yang benar-benar sampai. <b>5 · Beku saat taruhannya tinggi:</b> lancar di antara teman, kaku di wawancara dan presentasi, karena materinya tidak pernah dilatih di bawah tekanan ringan sekalipun."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "Why smart people communicate badly",
        "id": "Mengapa orang cerdas sering buruk berkomunikasi"
       },
       "body": {
        "en": "The curse of knowledge deserves special attention because it worsens as you improve. The more you know about your thesis, your code or your analysis, the more compressed your internal representation becomes — and the more steps you skip when explaining. This is why brilliant students often give incomprehensible presentations: they are reading from an internal map the audience has never seen. The antidote is not dumbing down; it is deliberately rebuilding the staircase: what did I know right before I understood this? And before that? Explain up the staircase, not from the summit.",
        "id": "Kutukan pengetahuan layak mendapat perhatian khusus, karena ia justru memburuk seiring kamu semakin mahir. Semakin dalam kamu memahami skripsi, kode, atau analisismu, semakin padat gambaran di kepalamu — dan semakin banyak langkah yang kamu lompati saat menjelaskannya. Inilah sebabnya mahasiswa yang brilian sering memberikan presentasi yang tidak bisa dipahami: mereka membaca dari peta di kepala yang tidak pernah dilihat audiens. Penawarnya bukan menyederhanakan sampai dangkal, melainkan sengaja membangun kembali anak tangganya: apa yang kuketahui tepat sebelum aku memahami ini? Dan sebelum itu? Jelaskan dengan menaiki tangga, bukan dari puncaknya."
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
        "id": "Ambil pesan penting terakhir yang kamu kirim — email ke dosen, laporan kemajuan proyek, jawaban lamaran. Nilailah: apakah kalimat pertamanya sudah memuat intinya? Bisakah orang luar yang cerdas mengikutinya tanpa konteksmu? Apakah panjangnya pas dengan yang dibutuhkan pembaca untuk memutuskan? Apakah kamu mengajukan sesuatu untuk memastikan pesanmu dipahami? Kebanyakan orang secara konsisten gagal di dua dari lima tantangan — dua yang sama, dari tahun ke tahun. Menemukan pasangan milikmu adalah dua puluh menit paling berdaya ungkit di modul ini, dan hasilnya langsung mengisi nilai komunikasi di Audit Pribadimu."
       }
      }
     ],
     "scenario": {
      "icon": "chat",
      "img": "../../assets/bg/gauntlet/gate-03-assessment.jpg",
      "title": {
       "en": "In focus: the update that hid its own news",
       "id": "Sorotan: laporan yang menyembunyikan beritanya sendiri"
      },
      "body": [
       {
        "en": "Sari, an intern, emails her manager: four paragraphs on data collection, cleaning choices, a library version issue, and — in the final sentence — the finding that a key customer segment churned at twice the assumed rate. Her manager, skimming between meetings, archives it after paragraph one. The insight resurfaces three weeks later in someone else's deck.",
        "id": "Sari, seorang anak magang, mengirim email ke manajernya: empat paragraf tentang pengumpulan data, keputusan pembersihan, masalah versi pustaka, dan — di kalimat terakhir — temuan bahwa satu segmen pelanggan penting berhenti berlangganan dua kali lebih cepat dari asumsi. Manajernya, yang membaca sekilas di sela rapat, mengarsipkan email itu setelah paragraf pertama. Temuan itu baru muncul lagi tiga minggu kemudian, di presentasi orang lain."
       },
       {
        "en": "Nothing in Sari's work was wrong. The failure was architectural: the news was buried under the journey. One rewrite fixes it: “Finding: segment B churns at 2× our assumption — recommend we re-forecast. Method and caveats below.” Same content, opposite career outcome.",
        "id": "Tidak ada yang salah dengan pekerjaan Sari. Kegagalannya ada pada arsitektur pesan: beritanya terkubur di bawah cerita perjalanan. Satu penulisan ulang cukup untuk memperbaikinya: “Temuan: segmen B berhenti 2× lebih cepat dari asumsi kita — saya sarankan kita hitung ulang proyeksi. Metode dan catatan ada di bawah.” Isi yang sama, hasil karier yang berlawanan."
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "Your presentation to lecturers was fluent, but the Q&A revealed nobody understood your method. Which challenge is the prime suspect?",
        "id": "Presentasimu di depan para dosen berjalan lancar, tapi sesi tanya-jawab menunjukkan tidak seorang pun memahami metodemu. Tantangan mana yang menjadi tersangka utama?"
       },
       "options": [
        {
         "en": "Stakes freeze — nervousness ruined the delivery",
         "id": "Beku saat taruhannya tinggi — gugup merusak penyampaian"
        },
        {
         "en": "The curse of knowledge — steps obvious to you were never rebuilt for the audience",
         "id": "Kutukan pengetahuan — langkah-langkah yang jelas bagimu tidak pernah dibangun ulang untuk audiens"
        },
        {
         "en": "Burying the lead — the conclusion came too late",
         "id": "Mengubur inti pesan — kesimpulannya datang terlambat"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Fluent delivery with failed comprehension is the curse-of-knowledge signature: the staircase existed in your head and never on the slides.",
        "id": "Penyampaian yang lancar tapi tidak dipahami adalah tanda khas kutukan pengetahuan: anak tangganya ada di kepalamu, tidak pernah ada di salindia."
       }
      }
     ],
     "quote": {
      "en": "What they understood is what you communicated — regardless of what you meant.",
      "id": "Apa yang mereka pahami adalah apa yang kamu komunikasikan — apa pun yang kamu maksudkan."
     }
    },
    {
     "n": "4.2",
     "title": {
      "en": "Core Communication Theory",
      "id": "Teori Inti Komunikasi"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Four instruments cover most professional communication: audience-first design, the pyramid (answer first), altitude control, and the feedback loop that verifies landing. Learn them once; reuse them in every email, update, presentation and interview answer for the rest of your career.",
      "id": "Empat instrumen sudah mencakup sebagian besar komunikasi profesional: rancangan yang berangkat dari audiens, piramida (jawaban lebih dulu), kendali ketinggian, dan putaran umpan balik yang memastikan pesan sampai. Pelajari sekali, lalu pakai berulang di setiap email, laporan, presentasi, dan jawaban wawancara sepanjang kariermu."
     },
     "objectives": [
      {
       "en": "Design a message from the audience's decision backwards.",
       "id": "Merancang sebuah pesan dengan berangkat dari keputusan yang harus diambil audiens."
      },
      {
       "en": "Structure any update as answer → reasons → evidence (the pyramid).",
       "id": "Menyusun laporan apa pun dalam urutan jawaban → alasan → bukti (piramida)."
      },
      {
       "en": "Move deliberately between summary altitude and detail altitude on request.",
       "id": "Berpindah dengan sadar antara ketinggian ringkasan dan ketinggian detail, sesuai permintaan lawan bicara."
      }
     ],
     "takeaways": [
      {
       "en": "Before writing anything, answer: who is this for, what do they need to decide, and what do they already know?",
       "id": "Sebelum menulis apa pun, jawab dulu: untuk siapa pesan ini, apa yang harus mereka putuskan, dan apa yang sudah mereka ketahui?"
      },
      {
       "en": "Answer first is a courtesy and a filter: busy readers get the point in line one, interested readers keep reading.",
       "id": "Jawaban lebih dulu adalah bentuk kesopanan sekaligus penyaring: pembaca yang sibuk mendapat intinya di baris pertama, pembaca yang berminat lanjut membaca."
      },
      {
       "en": "“Did that answer it?” is the cheapest quality check in professional life — use it after every substantial answer.",
       "id": "“Apakah itu sudah menjawab?” adalah pemeriksaan mutu termurah dalam kehidupan profesional — pakai setiap kali selesai memberi jawaban yang panjang."
      }
     ],
     "sections": [
      {
       "icon": "target",
       "h": {
        "en": "Audience-first design",
        "id": "Rancangan yang berangkat dari audiens"
       },
       "body": {
        "en": "Every message exists to move a specific reader from state A to state B — usually toward a decision. So design backwards: <b>Who reads this?</b> (a manager with 90 seconds, not a peer with an afternoon). <b>What must they decide or do?</b> (approve, re-forecast, unblock). <b>What do they already know?</b> (skip it) <b>What do they need from me to act?</b> (only that). A message designed this way is usually one-third the length of the chronological draft and lands ten times more often. The discipline: write the reader's decision at the top of your draft before typing a word of content.",
        "id": "Setiap pesan ada untuk memindahkan pembaca tertentu dari kondisi A ke kondisi B — biasanya menuju sebuah keputusan. Karena itu, rancang dari belakang: <b>Siapa yang membaca?</b> (manajer dengan waktu 90 detik, bukan rekan dengan waktu sesore penuh). <b>Apa yang harus mereka putuskan atau lakukan?</b> (menyetujui, menghitung ulang proyeksi, membuka hambatan). <b>Apa yang sudah mereka ketahui?</b> (lewati saja). <b>Apa yang mereka butuhkan dariku untuk bisa bertindak?</b> (hanya itu). Pesan yang dirancang seperti ini biasanya sepertiga panjang draf kronologis, dan sepuluh kali lebih sering sampai. Disiplinnya: tulis keputusan pembaca di bagian paling atas drafmu, sebelum mengetik satu kata pun isi."
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
        "id": "Struktur profesional membalik struktur esai sekolah. Baris pertama: jawaban atau rekomendasi. Baris kedua sampai keempat: dua atau tiga alasan yang mendukungnya. Di bawahnya: bukti untuk setiap alasan, bagi pembaca yang menginginkannya. “Saya sarankan peluncuran ditunda satu minggu (jawaban). Pengujian pembayaran menemukan dua bug kritis (alasan 1); perbaikannya butuh empat hari ditambah uji regresi (alasan 2). Rinciannya: …” Piramida menghormati hierarki perhatian: semua orang membaca baris pertama, sebagian membaca alasannya, sedikit yang membaca buktinya — dan ketiga jenis pembaca itu terlayani dengan benar oleh dokumen yang sama."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Altitude control and the loop",
        "id": "Kendali ketinggian dan putaran umpan balik"
       },
       "body": {
        "en": "Skilled communicators fly at three altitudes and announce their moves: <b>30,000 ft</b> — one sentence, the executive summary; <b>3,000 ft</b> — the structure, main parts and how they connect; <b>ground</b> — specific numbers, quotes, code. Signal transitions: “Zooming out…”, “To get concrete…”. Listen for altitude requests — “what's the bottom line?” means climb; “walk me through that number” means descend. Then close the loop: after any substantial explanation, check landing — “Does that cover what you needed?” or, teaching, “Can you play it back so I know I explained it well?” The loop turns monologue into communication.",
        "id": "Komunikator yang terampil terbang di tiga ketinggian dan mengumumkan setiap perpindahannya: <b>30.000 kaki</b> — satu kalimat, ringkasan eksekutif; <b>3.000 kaki</b> — strukturnya, bagian-bagian utama dan bagaimana semuanya terhubung; <b>permukaan tanah</b> — angka spesifik, kutipan, kode. Tandai transisinya: “Kalau kita lihat gambaran besarnya…”, “Konkretnya…”. Dengarkan permintaan ketinggian — “intinya apa?” berarti naik; “coba jelaskan angka itu” berarti turun. Lalu tutup putarannya: setelah penjelasan yang panjang, pastikan pesan sampai — “Apakah itu sudah menjawab yang kamu butuhkan?” atau, saat mengajar, “Coba ulangi dengan bahasamu sendiri, supaya aku tahu penjelasanku cukup jelas.” Putaran inilah yang mengubah monolog menjadi komunikasi."
       }
      }
     ],
     "diagram": {
      "type": "ladder",
      "exhibit": {
       "en": "Exhibit 1: Three altitudes — announce every climb and descent.",
       "id": "Peraga 1: Tiga ketinggian — umumkan setiap kali naik dan turun."
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
         "id": "Satu kalimat yang bisa langsung ditindaklanjuti seorang CEO"
        }
       },
       {
        "h": {
         "en": "3,000 ft — the structure",
         "id": "3.000 kaki — strukturnya"
        },
        "sub": {
         "en": "Main parts and how they connect",
         "id": "Bagian-bagian utama dan bagaimana semuanya terhubung"
        }
       },
       {
        "h": {
         "en": "Ground — the evidence",
         "id": "Permukaan tanah — buktinya"
        },
        "sub": {
         "en": "Numbers, quotes, artefacts on request",
         "id": "Angka, kutipan, artefak — saat diminta"
        }
       }
      ],
      "longdesc": {
       "en": "A three-level ladder: the top level is the one-sentence point; the middle level is the structure of main parts; the bottom level is ground evidence — numbers, quotes and artefacts. Skilled communicators move between levels deliberately and announce each transition.",
       "id": "Tangga tiga tingkat: tingkat teratas adalah inti pesan dalam satu kalimat; tingkat tengah adalah struktur bagian-bagian utama; tingkat terbawah adalah bukti di permukaan tanah — angka, kutipan, dan artefak. Komunikator yang terampil berpindah tingkat dengan sengaja dan mengumumkan setiap transisinya."
      }
     },
     "compare": [
      {
       "tag": {
        "en": "Project update — chronology vs pyramid",
        "id": "Laporan proyek — kronologi vs piramida"
       },
       "q": {
        "en": "Weekly update to a busy manager",
        "id": "Laporan mingguan untuk manajer yang sibuk"
       },
       "weak": {
        "en": "“This week I attended the vendor call, then worked on the data pipeline, then had some issues with the API which took two days, then started the dashboard. Next week I plan to continue the dashboard.”",
        "id": "“Minggu ini saya ikut panggilan dengan vendor, lalu mengerjakan pipeline data, lalu ada masalah API yang memakan dua hari, lalu mulai mengerjakan dasbor. Minggu depan rencananya lanjut dasbor.”"
       },
       "strong": {
        "en": "“On track for Friday's dashboard demo. One risk: the vendor API failed twice this week (2 days lost) — if it recurs, demo slips to Tuesday; mitigation call booked Monday. Details below.”",
        "id": "“Demo dasbor hari Jumat tetap sesuai jadwal. Satu risiko: API vendor gagal dua kali minggu ini (2 hari hilang) — kalau terulang, demo mundur ke Selasa; panggilan mitigasi sudah dijadwalkan Senin. Rincian di bawah.”"
       },
       "why": {
        "en": "The strong version leads with the status the manager needs (on track), elevates the one thing they might act on (risk + mitigation), and pushes chronology into the basement where it belongs.",
        "id": "Versi yang kuat membuka dengan status yang dibutuhkan manajer (sesuai jadwal), mengangkat satu-satunya hal yang mungkin perlu ia tindak (risiko + mitigasi), dan menurunkan kronologi ke gudang — tempat yang memang seharusnya."
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
        "id": "Menyusun komunikasi dengan jawaban lebih dulu: kesimpulan di puncak, alasan-alasan yang dikelompokkan di bawahnya, bukti di dasar."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Mid-presentation, a panellist says “skip ahead — what's the bottom line?” What is the correct move?",
        "id": "Di tengah presentasi, seorang panelis berkata, “langsung saja — intinya apa?” Apa langkah yang tepat?"
       },
       "options": [
        {
         "en": "Finish the current section first so the logic stays complete",
         "id": "Selesaikan dulu bagian yang sedang dibahas supaya logikanya tetap utuh"
        },
        {
         "en": "Climb to 30,000 ft: give the one-sentence conclusion, then offer to descend wherever they want detail",
         "id": "Naik ke 30.000 kaki: sampaikan kesimpulan dalam satu kalimat, lalu tawarkan untuk turun ke detail mana pun yang mereka inginkan"
        },
        {
         "en": "Apologise and restart the presentation more slowly",
         "id": "Minta maaf dan mulai ulang presentasi dengan lebih pelan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "An altitude request must be honoured immediately — the audience owns the altitude. Answer first, then let their questions choose the descent.",
        "id": "Permintaan ketinggian harus dipenuhi seketika — audienslah yang memegang kendali ketinggian. Jawab dulu, lalu biarkan pertanyaan mereka yang menentukan ke mana kamu turun."
       }
      }
     ],
     "listen": [
      {
       "label": {
        "en": "The pyramid, spoken: a project update that leads with the answer",
        "id": "Piramida saat diucapkan: laporan proyek yang membuka dengan jawaban"
       },
       "text": {
        "en": "On track for Friday's dashboard demo. One risk: the vendor A P I failed twice this week, costing two days. If it recurs, the demo slips to Tuesday. A mitigation call is booked for Monday.",
        "id": "Demo dasbor hari Jumat tetap sesuai jadwal. Satu risiko: A P I vendor gagal dua kali minggu ini, memakan dua hari. Kalau terulang, demo mundur ke Selasa. Panggilan mitigasi sudah dijadwalkan hari Senin."
       }
      },
      {
       "label": {
        "en": "An altitude shift, announced out loud",
        "id": "Perpindahan ketinggian yang diumumkan dengan suara"
       },
       "text": {
        "en": "Zooming out: the point is that region C grows while the others shrink. To get concrete: C grew twenty five percent last quarter on our highest margin.",
        "id": "Kalau kita lihat gambaran besarnya: intinya, wilayah C tumbuh sementara wilayah lain menyusut. Konkretnya: C tumbuh dua puluh lima persen kuartal lalu, pada margin tertinggi kita."
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
      "id": "Tiga latihan terapan — email perkenalan yang benar-benar dibalas, laporan di rapat yang dipotong di tengah jalan, dan berbeda pendapat dengan atasan — masing-masing dengan jawaban model yang dibangun dari instrumen di 4.2."
     },
     "objectives": [
      {
       "en": "Write a cold email whose first line earns the second line.",
       "id": "Menulis email perkenalan yang baris pertamanya membuat orang mau membaca baris kedua."
      },
      {
       "en": "Deliver a pyramid update and survive an altitude interruption.",
       "id": "Menyampaikan laporan berstruktur piramida dan tetap tenang saat dipotong dengan permintaan ketinggian."
      },
      {
       "en": "Disagree upward using data, options and a question — without the word “wrong”.",
       "id": "Menyampaikan ketidaksetujuan kepada atasan dengan data, pilihan, dan pertanyaan — tanpa kata “salah”."
      }
     ],
     "takeaways": [
      {
       "en": "Cold messages are answered when the ask is small, specific and time-boxed — and the sender did visible homework.",
       "id": "Pesan kepada orang yang belum kenal akan dibalas kalau permintaannya kecil, spesifik, dan berbatas waktu — dan pengirimnya terlihat sudah mengerjakan PR-nya."
      },
      {
       "en": "Interruptions are altitude requests in disguise; treat them as navigation, not attack.",
       "id": "Potongan di tengah bicara adalah permintaan ketinggian yang menyamar; perlakukan sebagai navigasi, bukan serangan."
      },
      {
       "en": "Disagreement lands when it protects the decision, not your ego — share the data, name an option, ask a real question.",
       "id": "Ketidaksetujuan diterima kalau ia melindungi keputusan, bukan egomu — bagikan datanya, sebutkan satu pilihan, ajukan pertanyaan yang sungguh-sungguh."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "How to run the drills",
        "id": "Cara menjalankan latihan ini"
       },
       "body": {
        "en": "Draft your own version before opening each debrief — on paper or in your notes app, two to five minutes each. The comparison against the model is where the skill transfers: look for the structural difference, not the wording difference. Then re-draft yours once. One redraft after comparison is worth five fresh attempts.",
        "id": "Susun versimu sendiri sebelum membuka setiap tinjauan — di kertas atau di aplikasi catatan, dua sampai lima menit tiap latihan. Perbandingan dengan jawaban model adalah saat keterampilannya berpindah ke dirimu: cari perbedaan strukturnya, bukan perbedaan kata-katanya. Lalu tulis ulang versimu satu kali. Satu penulisan ulang setelah membandingkan lebih berharga daripada lima percobaan baru."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 — The cold email",
        "id": "Latihan 1 — Email perkenalan"
       },
       "body": {
        "en": "Write a cold email to an alumna who works in the industry you explored in The Range, asking for career insight. Draft it, then reveal the model.",
        "id": "Tulis email perkenalan kepada seorang alumni yang bekerja di industri yang kamu jelajahi di The Range, untuk meminta wawasan karier. Susun drafnya, lalu buka jawaban model."
       },
       "debrief": {
        "en": "Model: subject “Question about your path into risk analytics — [University] student”. Body: one line of specific homework (“your talk on model validation at [event] reframed how I think about the field”), one line of context (final-year student choosing between X and Y), one small time-boxed ask (“would you have 15 minutes in the next two weeks for two specific questions?”), and a graceful out (“if this month is busy, no reply needed — thank you either way”). What makes it work: the homework proves this is not a mass-send; the ask is answerable from a phone in ten seconds; the out removes social pressure — which paradoxically raises reply rates.",
        "id": "Model: subjek “Pertanyaan tentang jalan Kakak ke analitik risiko — mahasiswa [Universitas]”. Isi: satu baris PR yang spesifik (“presentasi Kakak tentang validasi model di [acara] mengubah cara saya memandang bidang ini”), satu baris konteks (mahasiswa tingkat akhir yang sedang memilih antara X dan Y), satu permintaan kecil berbatas waktu (“apakah Kakak punya 15 menit dalam dua minggu ke depan untuk dua pertanyaan spesifik?”), dan jalan keluar yang sopan (“kalau bulan ini sedang padat, tidak perlu dibalas — terima kasih apa pun jawabannya”). Yang membuatnya berhasil: PR-nya membuktikan ini bukan kiriman massal; permintaannya bisa dijawab dari ponsel dalam sepuluh detik; jalan keluarnya menghapus tekanan sosial — dan justru itu yang menaikkan tingkat balasan."
       }
      },
      {
       "h": {
        "en": "Drill 2 — Interrupted at 3,000 ft",
        "id": "Latihan 2 — Dipotong di ketinggian 3.000 kaki"
       },
       "body": {
        "en": "You are two minutes into a five-minute project update when a senior manager cuts in: “Sorry — are we shipping Friday or not?” Script your next 20 seconds, then reveal.",
        "id": "Kamu baru dua menit menjalani laporan proyek lima menit ketika seorang manajer senior memotong: “Maaf — jadi kita rilis Jumat atau tidak?” Tulis naskah 20 detik berikutnya, lalu buka jawaban model."
       },
       "debrief": {
        "en": "Model: “Yes — Friday holds, with one condition. The payment fix passed testing yesterday; if tomorrow's regression run is clean, we ship. If it fails, we ship Tuesday. I'll confirm by 3 pm tomorrow either way.” Then stop talking. Structure: direct answer (yes), the one condition that could change it, the date they'll know, silence. The failure mode being trained away: defending your prepared sequence (“I'm getting to that”) — the interruption told you what the room actually needs, and the room outranks the script.",
        "id": "Model: “Ya — Jumat tetap jalan, dengan satu syarat. Perbaikan pembayaran lolos uji kemarin; kalau uji regresi besok bersih, kita rilis. Kalau gagal, kita rilis Selasa. Apa pun hasilnya, saya konfirmasi besok jam 3 sore.” Lalu berhenti bicara. Strukturnya: jawaban langsung (ya), satu syarat yang bisa mengubahnya, kapan mereka akan tahu, lalu diam. Kebiasaan yang sedang dihilangkan: membela urutan presentasi yang sudah kamu siapkan (“sebentar, itu bagian berikutnya”) — potongan itu memberitahumu apa yang sebenarnya dibutuhkan ruangan, dan ruangan lebih berkuasa daripada naskahmu."
       }
      },
      {
       "h": {
        "en": "Drill 3 — Disagreeing upward",
        "id": "Latihan 3 — Berbeda pendapat dengan atasan"
       },
       "body": {
        "en": "Your team lead proposes promoting the product on platform X because “everyone is there”. Your data says your audience is on platform Y. Script the disagreement, then reveal.",
        "id": "Ketua timmu mengusulkan promosi produk di platform X karena “semua orang ada di sana”. Datamu menunjukkan audiensmu ada di platform Y. Tulis naskah ketidaksetujuanmu, lalu buka jawaban model."
       },
       "debrief": {
        "en": "Model: “Can I add one data point before we lock it? Our last three campaigns: platform Y drove 70% of signups from 30% of spend — X was the reverse. One option: run this campaign 80/20 toward Y and keep X as the test cell. What am I missing about X — is there a strategic reason beyond reach?” Anatomy: permission to contribute, the data without the word “wrong”, a concrete option that keeps their goal alive, and a genuine question that leaves room for information you lack. The senior person can now change course without losing face — which is the only kind of upward disagreement that gets adopted.",
        "id": "Model: “Boleh saya tambahkan satu data sebelum kita putuskan? Dari tiga kampanye terakhir, platform Y menghasilkan 70% pendaftaran dengan 30% anggaran — X justru sebaliknya. Satu opsi: jalankan kampanye ini 80/20 ke Y dan pertahankan X sebagai sel uji. Apa yang mungkin saya lewatkan soal X — apakah ada alasan strategis di luar jangkauan?” Anatominya: izin untuk menyumbang, data tanpa kata “salah”, opsi konkret yang menjaga tujuan mereka tetap hidup, dan pertanyaan yang sungguh-sungguh menyisakan ruang bagi informasi yang belum kamu punya. Atasan kini bisa mengubah arah tanpa kehilangan muka — dan hanya ketidaksetujuan jenis inilah yang benar-benar diadopsi."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Cold emails that ask for “any advice”",
         "id": "Email perkenalan yang meminta “saran apa saja”"
        },
        "fix": {
         "en": "Vague asks create work for the receiver. Two specific questions and a 15-minute cap make yes easy.",
         "id": "Permintaan yang samar membebani penerima. Dua pertanyaan spesifik dan batas 15 menit membuat “ya” jadi mudah."
        }
       },
       {
        "h": {
         "en": "Treating interruptions as disrespect",
         "id": "Menganggap potongan bicara sebagai bentuk tidak hormat"
        },
        "fix": {
         "en": "Senior interruptions are usually time management, not judgment. Answer the asked question at the asked altitude, then offer to continue.",
         "id": "Potongan dari orang senior biasanya soal mengelola waktu, bukan menghakimimu. Jawab pertanyaan yang diajukan pada ketinggian yang diminta, lalu tawarkan untuk melanjutkan."
        }
       },
       {
        "h": {
         "en": "Winning the argument, losing the decision",
         "id": "Memenangkan perdebatan, kehilangan keputusan"
        },
        "fix": {
         "en": "If the goal is the right decision, package your case so the other person can adopt it as theirs.",
         "id": "Kalau tujuannya keputusan yang tepat, kemas argumenmu supaya orang lain bisa mengadopsinya sebagai gagasannya sendiri."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "What single element most raises a cold email's reply rate, according to this lesson?",
        "id": "Menurut pelajaran ini, satu unsur apa yang paling menaikkan tingkat balasan email perkenalan?"
       },
       "options": [
        {
         "en": "A formal greeting and full self-introduction",
         "id": "Salam formal dan perkenalan diri yang lengkap"
        },
        {
         "en": "A small, specific, time-boxed ask backed by visible homework",
         "id": "Permintaan yang kecil, spesifik, dan berbatas waktu, didukung PR yang terlihat"
        },
        {
         "en": "Mentioning that you will follow up weekly until they respond",
         "id": "Menyebutkan bahwa kamu akan menindaklanjuti setiap minggu sampai dibalas"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Reply cost drives reply rate: a specific 15-minute ask with proof of genuine interest is cheap to grant and hard to resent.",
        "id": "Tingkat balasan ditentukan oleh biaya membalas: permintaan 15 menit yang spesifik dengan bukti minat yang tulus murah untuk dikabulkan dan sulit untuk dibenci."
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
    "id": "Relasi, Kesejahteraan, dan Kecakapan Digital"
   },
   "overview": {
    "en": "Module 5 of The Map focuses on relationships, well-being, and digital capability. Work through the lessons in order — each builds on the last.",
    "id": "Modul 5 The Map membahas relasi, kesejahteraan, dan kecakapan digital. Kerjakan pelajarannya berurutan — setiap pelajaran menjadi pijakan bagi pelajaran berikutnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply relationships, well-being, and digital capability to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu punya metode yang konkret dan bisa diulang untuk mengelola relasi, kesejahteraan, dan kecakapan digitalmu — dan menerapkannya pada keputusan karier."
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
      "id": "Energi, bukan waktu, adalah sumber daya paling dasar dalam sebuah karier — dan energi diproduksi oleh empat sistem yang sama sekali tidak glamor: tidur, gerak, asupan, dan pemulihan. Pelajaran ini memperlakukan kesehatan sebagai infrastruktur kinerja, dan memberimu protokol minimum yang tetap bisa dijalankan dengan anggaran mahasiswa dan jadwal pekerjaan pertama."
     },
     "objectives": [
      {
       "en": "Explain how sleep debt degrades exactly the skills interviews and jobs test.",
       "id": "Menjelaskan bagaimana utang tidur menggerogoti justru keterampilan yang diuji dalam wawancara dan pekerjaan."
      },
      {
       "en": "Assemble a minimum viable health protocol you can keep during exam and probation weeks.",
       "id": "Menyusun protokol kesehatan minimum yang bisa kamu pertahankan selama pekan ujian dan masa percobaan kerja."
      },
      {
       "en": "Recognise early overload signals and apply the two-step response.",
       "id": "Mengenali sinyal-sinyal awal kelebihan beban dan menerapkan respons dua langkah."
      }
     ],
     "takeaways": [
      {
       "en": "A tired brain fails at attention, working memory, mood control and honesty with itself — the interview stack.",
       "id": "Otak yang lelah gagal pada perhatian, memori kerja, kendali suasana hati, dan kejujuran pada diri sendiri — persis paket keterampilan yang diuji wawancara."
      },
      {
       "en": "Minimum viable beats optimal abandoned: a floor you never break outperforms a ceiling you never reach.",
       "id": "Protokol minimum yang dijalankan mengalahkan protokol optimal yang ditinggalkan: batas bawah yang tidak pernah kamu langgar lebih berharga daripada batas atas yang tidak pernah kamu capai."
      },
      {
       "en": "Asking for help early is an operational skill, not a character verdict.",
       "id": "Meminta bantuan lebih awal adalah keterampilan operasional, bukan vonis atas karaktermu."
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
        "id": "<b>Tidur</b> mengendapkan apa yang kamu pelajari dan memulihkan kendali diri yang kamu andalkan saat wawancara; kurang tidur yang kronis menghasilkan penurunan kemampuan yang terukur, setara dengan pengaruh alkohol. <b>Gerak</b> — tiga puluh menit aktivitas apa pun yang cukup cepat, hampir setiap hari — adalah intervensi suasana hati dan fokus yang paling terbukti andal dalam literatur. <b>Asupan</b>: makan teratur dengan protein, dan kafein sebelum tengah hari, bukan sesudahnya. <b>Pemulihan</b>: sakelar “mati” yang sungguhan (orang, alam, bermain), bukan istirahat sambil menggulir layar yang membuatmu lelah tanpa pernah benar-benar pulih. Tidak ada yang atletis di sini; ini hanya mesin membosankan yang menentukan apakah keterampilan yang sudah kamu latih benar-benar muncul pada hari H."
       },
       "img": "../../assets/bg/stage-activation.jpg",
       "imgPos": "center 55%"
      },
      {
       "icon": "target",
       "h": {
        "en": "Minimum viable protocol",
        "id": "Protokol minimum"
       },
       "body": {
        "en": "Design for your worst week, not your best: a sleep window you defend (say 23:30–06:30, protected by a phone-out-of-reach rule), movement snacks (two 15-minute brisk walks beat one imaginary gym session), one real meal with protein daily as non-negotiable, and one weekly recovery block with a human being. Write yours as four lines in the Personal Audit. The rule during crunch weeks: the protocol shrinks but never to zero — six hours instead of seven, one walk instead of two. Zero is the only failure.",
        "id": "Rancang untuk minggu terburukmu, bukan minggu terbaik: jendela tidur yang kamu pertahankan (misalnya 23.30–06.30, dijaga dengan aturan ponsel di luar jangkauan), “camilan gerak” (dua kali jalan cepat 15 menit lebih baik daripada satu sesi gym yang hanya ada dalam rencana), satu kali makan sungguhan dengan protein setiap hari sebagai hal yang tidak bisa ditawar, dan satu blok pemulihan mingguan bersama manusia sungguhan. Tuliskan protokolmu dalam empat baris di Audit Pribadi. Aturan di minggu yang padat: protokol boleh menyusut, tapi tidak pernah sampai nol — enam jam tidur alih-alih tujuh, satu kali jalan alih-alih dua. Satu-satunya kegagalan adalah nol."
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
        "id": "Waspadai tiga tanda awal ini: tidur yang tidak lagi menyegarkan, mudah tersulut oleh hal-hal kecil, dan menarik diri dari orang-orang yang biasanya kamu nikmati. Semuanya muncul berminggu-minggu sebelum masalah yang sesungguhnya. Respons dua langkahnya: <b>kurangi dulu</b> — lepaskan satu komitmen selama dua minggu dan pertahankan jendela tidur sebelum menambahkan perbaikan apa pun; <b>lalu bicarakan</b> — dengan teman, mentor, atau konselor. Kalau suasana hati yang murung, hilangnya minat, atau rasa putus asa bertahan hampir setiap hari selama dua minggu atau lebih, melibatkan tenaga profesional adalah langkah yang cakap — persis seperti yang kamu lakukan saat tulang patah. Universitas dan banyak perusahaan menyediakan layanan konseling yang rahasia; memakainya sejak dini adalah cara orang-orang berkinerja tinggi tetap kuat."
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
         "id": "Jendela tidur yang dijaga, hampir setiap malam"
        }
       },
       {
        "h": {
         "en": "Movement",
         "id": "Gerak"
        },
        "sub": {
         "en": "30 brisk minutes, most days",
         "id": "30 menit gerak cepat, hampir setiap hari"
        }
       },
       {
        "h": {
         "en": "Fuel",
         "id": "Asupan"
        },
        "sub": {
         "en": "Regular protein meals, caffeine before noon",
         "id": "Makan berprotein secara teratur, kafein sebelum tengah hari"
        }
       },
       {
        "h": {
         "en": "Recovery",
         "id": "Pemulihan"
        },
        "sub": {
         "en": "Real off-switches: people, nature, play",
         "id": "Sakelar “mati” yang sungguhan: orang, alam, bermain"
        }
       }
      ],
      "longdesc": {
       "en": "A ring of four mutually reinforcing systems — sleep, movement, fuel, recovery — whose combined output is usable energy. Weakening any one degrades the others; the minimum viable protocol sets a floor for each.",
       "id": "Sebuah cincin berisi empat sistem yang saling menguatkan — tidur, gerak, asupan, pemulihan — dengan keluaran gabungan berupa energi yang bisa dipakai. Melemahkan salah satunya menurunkan yang lain; protokol minimum menetapkan batas bawah untuk masing-masing."
      }
     },
     "checks": [
      {
       "q": {
        "en": "Exam week collides with two interviews. Under this lesson, what happens to your health protocol?",
        "id": "Pekan ujian bertabrakan dengan dua jadwal wawancara. Menurut pelajaran ini, apa yang terjadi pada protokol kesehatanmu?"
       },
       "options": [
        {
         "en": "Pause it — extraordinary weeks justify all-nighters, recover after",
         "id": "Hentikan sementara — minggu yang luar biasa membenarkan begadang, pulihkan setelahnya"
        },
        {
         "en": "Shrink it to its floor — shorter sleep window, one walk — but never to zero",
         "id": "Susutkan ke batas bawahnya — jendela tidur lebih pendek, satu kali jalan — tapi tidak pernah sampai nol"
        },
        {
         "en": "Double it — health matters most under pressure",
         "id": "Gandakan — kesehatan paling penting justru saat tertekan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The protocol is designed for worst weeks: it flexes down to a defended floor, because the interviews themselves run on the energy it produces.",
        "id": "Protokol ini memang dirancang untuk minggu-minggu terburuk: ia menyusut sampai batas bawah yang dijaga, karena wawancara itu sendiri berjalan dengan energi yang diproduksinya."
       }
      }
     ],
     "quote": {
      "en": "Energy, not time, is the base resource of a career.",
      "id": "Energi, bukan waktu, adalah sumber daya paling dasar dalam sebuah karier."
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
      "id": "Siklus teknologi akan selalu lebih cepat daripada alat apa pun yang kamu pelajari tahun ini. Yang bertahan adalah sebuah sikap: fondasi di bawah alat-alat itu, sistem belajar pribadi, bukti keterampilan yang bisa dilihat publik, dan jaringan yang memberitahumu apa yang berubah sebelum beritanya tersebar. Jelajahi empat jangkar ini pada peta sistem."
     },
     "objectives": [
      {
       "en": "Distinguish durable fundamentals from perishable tools in your own field.",
       "id": "Membedakan fondasi yang tahan lama dari alat yang cepat usang di bidangmu sendiri."
      },
      {
       "en": "Set up a lightweight personal learning loop: one source, one project, one log.",
       "id": "Menyiapkan putaran belajar pribadi yang ringan: satu sumber, satu proyek, satu catatan."
      },
      {
       "en": "Name where your skills are publicly evidenced and where the gaps are.",
       "id": "Menyebutkan di mana keterampilanmu sudah terbukti secara publik, dan di mana celahnya."
      }
     ],
     "takeaways": [
      {
       "en": "Tools expire; the fundamentals beneath them — logic, statistics, writing, domain judgment — compound.",
       "id": "Alat akan usang; fondasi di bawahnya — logika, statistika, menulis, penilaian di bidang — justru terus berlipat."
      },
      {
       "en": "One hour a week of deliberate learning, logged, beats occasional panic sprints when a new tool trends.",
       "id": "Satu jam belajar terencana setiap minggu, dicatat, mengalahkan sprint panik sesekali saat ada alat baru yang sedang tren."
      },
      {
       "en": "Skill that is not evidenced publicly is invisible to everyone who could reward it.",
       "id": "Keterampilan yang tidak terbukti secara publik tidak terlihat oleh siapa pun yang bisa menghargainya."
      }
     ],
     "hotspots": [
      {
       "x": 22,
       "y": 26,
       "h": {
        "en": "Fundamentals first",
        "id": "Fondasi lebih dulu"
       },
       "body": {
        "en": "Beneath every tool wave sits a durable layer: statistics beneath analytics dashboards, argumentation beneath slide software, human motivation beneath every marketing platform. Ask of anything you study: which part of this survives the tool's replacement? Spend 70% of learning time there. When the next wave arrives, you relearn syntax, not substance — which is why fundamentals-first people surf transitions that drown tool-only people.",
        "id": "Di bawah setiap gelombang alat baru ada lapisan yang tahan lama: statistika di bawah dasbor analitik, argumentasi di bawah perangkat lunak presentasi, motivasi manusia di bawah setiap platform pemasaran. Tanyakan pada apa pun yang kamu pelajari: bagian mana yang tetap berlaku saat alatnya diganti? Habiskan 70% waktu belajarmu di sana. Saat gelombang berikutnya datang, kamu hanya perlu mempelajari ulang sintaksnya, bukan substansinya — itulah mengapa orang yang mengutamakan fondasi bisa menunggangi transisi yang menenggelamkan orang yang hanya menguasai alat."
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
        "id": "Sistem yang berkelanjutan punya tiga bagian: <b>satu sumber</b> tepercaya per bidang (sebuah nawala, seorang praktisi yang kamu ikuti) supaya kamu tidak berusaha menelan seluruh internet; <b>satu proyek kecil</b> yang selalu berjalan, yang memaksa pengetahuan baru melewati tanganmu sendiri; <b>satu catatan</b> — satu halaman tempat kamu menulis apa yang kamu pelajari setiap minggu. Satu jam per minggu, dijaga di kalender seperti blok penting-tapi-tidak-mendesak lainnya. Catatan itu jauh lebih penting daripada kelihatannya: ia bahan mentah untuk CV, wawancara, dan pertanyaan “bagaimana kamu menjaga pengetahuanmu tetap mutakhir?”"
       }
      },
      {
       "x": 25,
       "y": 72,
       "h": {
        "en": "Public evidence",
        "id": "Bukti yang bisa dilihat publik"
       },
       "body": {
        "en": "Certificates say you attended; artefacts say you can. A tidied portfolio project, a written analysis, a small app, a well-documented spreadsheet — visible where your field looks (a repository, a portfolio page, a professional profile). One honest artefact per quarter is enough. The test: could a stranger in your field, in five minutes, see evidence of what you claim? If not, this quarter's project is that artefact.",
        "id": "Sertifikat hanya membuktikan kamu pernah hadir; artefak membuktikan kamu bisa. Proyek portofolio yang dirapikan, analisis tertulis, aplikasi kecil, spreadsheet yang terdokumentasi dengan baik — dipajang di tempat orang-orang di bidangmu biasa melihat (repositori, halaman portofolio, profil profesional). Satu artefak yang jujur per kuartal sudah cukup. Ujiannya: bisakah orang asing di bidangmu, dalam lima menit, melihat bukti dari apa yang kamu klaim? Kalau tidak, proyek kuartal ini adalah artefak itu."
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
        "id": "Perubahan sampai ke percakapan berbulan-bulan sebelum sampai ke kurikulum. Tiga atau empat praktisi yang bisa kamu tanya “apa yang benar-benar sedang berubah di timmu?” membentuk sistem peringatan dini yang tidak bisa diberikan kursus mana pun. Bangun jaringan ini seperti yang diajarkan di 4.3: permintaan yang kecil dan spesifik, PR yang sungguhan, rasa terima kasih. Sebagai balasannya, bagikan apa yang kamu pelajari — jaringan hidup dari dua arah. Basecamp dan sesi mentor di Metanoia memang dirancang sebagai lapisan ini."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A new AI tool sweeps your target industry. What does the fundamentals-first stance prescribe?",
        "id": "Sebuah alat AI baru melanda industri yang kamu incar. Apa yang disarankan sikap “fondasi lebih dulu”?"
       },
       "options": [
        {
         "en": "Ignore it — tools always pass",
         "id": "Abaikan — alat selalu datang dan pergi"
        },
        {
         "en": "Learn it through a small real project while identifying which underlying skill it amplifies or replaces",
         "id": "Pelajari lewat satu proyek kecil yang nyata, sambil mengenali keterampilan dasar mana yang ia perkuat atau gantikan"
        },
        {
         "en": "Drop current studies and retrain around the tool full-time",
         "id": "Tinggalkan studi yang sedang berjalan dan belajar ulang penuh waktu seputar alat itu"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The loop metabolises new tools through projects; the fundamentals lens tells you how much of your stack it actually changes — usually less than the headlines claim.",
        "id": "Putaran belajar mencerna alat baru lewat proyek; lensa fondasi memberitahumu seberapa banyak perangkat keterampilanmu yang benar-benar berubah — biasanya jauh lebih sedikit daripada yang diklaim berita."
       }
      }
     ]
    },
    {
     "n": "5.3",
     "title": {
      "en": "Practical Digital Productivity Toolkit",
      "id": "Perangkat Produktivitas Digital yang Praktis"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "A working professional's digital toolkit has five stations: capture, calendar, files, focus, and a professional inbox. This lesson sets up each one in under an hour total, using free tools you already have — then drills the habits that keep them running.",
      "id": "Perangkat digital seorang profesional punya lima pos: pencatatan, kalender, berkas, fokus, dan kotak masuk profesional. Pelajaran ini menyiapkan kelimanya dalam total kurang dari satu jam, dengan alat gratis yang sudah kamu miliki — lalu melatih kebiasaan yang menjaganya tetap berjalan."
     },
     "objectives": [
      {
       "en": "Install a single capture point for every commitment that enters your life.",
       "id": "Memasang satu titik pencatatan untuk setiap komitmen yang masuk ke hidupmu."
      },
      {
       "en": "Make the calendar the single source of truth for time, including important-not-urgent blocks.",
       "id": "Menjadikan kalender satu-satunya sumber kebenaran tentang waktu, termasuk blok penting-tapi-tidak-mendesak."
      },
      {
       "en": "Set up file hygiene and a distraction-resistant focus configuration.",
       "id": "Menata kebersihan berkas dan menyiapkan pengaturan fokus yang tahan gangguan."
      }
     ],
     "takeaways": [
      {
       "en": "The system's job is to be trusted: one capture point, processed daily, is what lets your brain stop rehearsing commitments.",
       "id": "Tugas sistem ini adalah menjadi tepercaya: satu titik pencatatan yang diproses setiap hari adalah yang membuat otakmu berhenti mengulang-ulang daftar komitmen."
      },
      {
       "en": "If it is not in the calendar, it is not real; if it is, defend it.",
       "id": "Kalau tidak ada di kalender, berarti tidak nyata; kalau sudah ada di kalender, pertahankan."
      },
      {
       "en": "Focus is an environment you configure once, not willpower you summon hourly.",
       "id": "Fokus adalah lingkungan yang kamu atur sekali, bukan tekad yang harus kamu kerahkan setiap jam."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "The five stations",
        "id": "Lima pos"
       },
       "body": {
        "en": "<b>Capture:</b> one notes app inbox where every task, promise and idea lands within ten seconds of arriving — processed into the calendar or a list every evening. <b>Calendar:</b> classes, deadlines, important-not-urgent blocks, and travel time between them; anything with a date lives here, nowhere else. <b>Files:</b> one cloud root with a shallow, predictable structure (Career/CV, Career/Applications, Uni/Semester-6, Projects/x) and filenames that sort: 2026-08-cv-dataanalyst-v3. <b>Focus:</b> notifications off by default with a small allowlist of humans, phone physically away during blocks, one site-blocker profile for deep work. <b>Professional inbox:</b> an email address that would look fine on a CV, checked twice daily at set times rather than continuously.",
        "id": "<b>Pencatatan:</b> satu kotak masuk di aplikasi catatan, tempat setiap tugas, janji, dan ide mendarat dalam sepuluh detik setelah muncul — lalu diproses ke kalender atau daftar setiap malam. <b>Kalender:</b> kuliah, tenggat, blok penting-tapi-tidak-mendesak, dan waktu perjalanan di antaranya; apa pun yang punya tanggal tinggal di sini, bukan di tempat lain. <b>Berkas:</b> satu folder induk di cloud dengan struktur yang dangkal dan mudah ditebak (Karier/CV, Karier/Lamaran, Kuliah/Semester-6, Proyek/x) dan nama berkas yang otomatis terurut: 2026-08-cv-dataanalyst-v3. <b>Fokus:</b> notifikasi mati secara bawaan dengan daftar izin kecil berisi manusia sungguhan, ponsel secara fisik dijauhkan selama blok kerja, satu profil pemblokir situs untuk kerja mendalam. <b>Kotak masuk profesional:</b> alamat email yang pantas tercantum di CV, diperiksa dua kali sehari pada jam yang tetap, bukan terus-menerus."
       }
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Setup sprint 1 — Capture and calendar (20 min)",
        "id": "Sprint penyiapan 1 — Pencatatan dan kalender (20 menit)"
       },
       "body": {
        "en": "Create the capture inbox; move every floating commitment from your head, chats and screenshots into it; then transfer everything dated into the calendar, including next week's two important-not-urgent blocks. Reveal the debrief when done.",
        "id": "Buat kotak masuk pencatatan; pindahkan setiap komitmen yang masih mengambang di kepala, di obrolan, dan di tangkapan layar ke dalamnya; lalu salin semua yang punya tanggal ke kalender, termasuk dua blok penting-tapi-tidak-mendesak untuk minggu depan. Buka tinjauan setelah selesai."
       },
       "debrief": {
        "en": "The uncomfortable part is the first sweep: most people find 20–40 floating commitments and feel the exact moment their background anxiety drops. That relief is the system working — the brain stops using working memory as a to-do list. The maintenance cost is one five-minute evening process; the failure mode is capturing into three places, which recreates the distrust the system exists to remove.",
        "id": "Bagian yang tidak nyaman adalah sapuan pertama: kebanyakan orang menemukan 20–40 komitmen yang mengambang, dan merasakan persis momen ketika kecemasan di latar belakang mereka mereda. Kelegaan itu tanda sistemnya bekerja — otak berhenti memakai memori kerja sebagai daftar tugas. Biaya perawatannya hanya proses lima menit setiap malam; cara gagalnya adalah mencatat ke tiga tempat sekaligus, yang menghidupkan lagi ketidakpercayaan yang justru ingin dihapus sistem ini."
       }
      },
      {
       "h": {
        "en": "Setup sprint 2 — Files and focus (20 min)",
        "id": "Sprint penyiapan 2 — Berkas dan fokus (20 menit)"
       },
       "body": {
        "en": "Build the folder skeleton, rename your five most-used files to the dated convention, then configure focus: notifications off, human allowlist, one blocker profile. Reveal when done.",
        "id": "Bangun kerangka foldernya, ganti nama lima berkas yang paling sering kamu pakai sesuai konvensi bertanggal, lalu atur fokus: notifikasi mati, daftar izin berisi manusia, satu profil pemblokir. Buka tinjauan setelah selesai."
       },
       "debrief": {
        "en": "File hygiene pays at exactly two moments: the interview where you need last year's project in ten seconds, and the application deadline where you need cv-v3, not cv-final-final-REAL. The focus configuration is doing the heavier lifting than it appears: environment design removes hundreds of daily micro-decisions, and each removed decision is willpower saved for actual work.",
        "id": "Kebersihan berkas terbayar tepat di dua momen: saat wawancara ketika kamu butuh proyek tahun lalu dalam sepuluh detik, dan saat tenggat lamaran ketika kamu butuh cv-v3, bukan cv-final-final-BENERAN. Pengaturan fokus bekerja lebih keras daripada kelihatannya: merancang lingkungan menghapus ratusan keputusan kecil setiap hari, dan setiap keputusan yang terhapus adalah tekad yang dihemat untuk pekerjaan sungguhan."
       }
      },
      {
       "h": {
        "en": "Setup sprint 3 — The professional surface (15 min)",
        "id": "Sprint penyiapan 3 — Wajah profesional (15 menit)"
       },
       "body": {
        "en": "Audit the email address, username and profile photo a recruiter would meet. Set two fixed inbox times. Draft a three-line signature. Reveal when done.",
        "id": "Periksa alamat email, nama pengguna, dan foto profil yang akan dilihat perekrut. Tetapkan dua jam tetap untuk memeriksa kotak masuk. Susun tanda tangan email tiga baris. Buka tinjauan setelah selesai."
       },
       "debrief": {
        "en": "Recruiters meet your digital surface before they meet you. The bar is modest — name-based address, clear photo, signature with name, degree and phone — but missing it is disproportionately expensive because it is read as a preview of your work habits. Batched inbox times are the deeper win: continuous checking fragments attention all day for a message volume that two sessions handle in twenty minutes.",
        "id": "Perekrut bertemu wajah digitalmu sebelum bertemu dirimu. Standarnya sederhana — alamat email berbasis nama, foto yang jelas, tanda tangan berisi nama, gelar, dan nomor telepon — tapi melewatkannya sangat mahal, karena dibaca sebagai cuplikan kebiasaan kerjamu. Jam kotak masuk yang dikelompokkan adalah kemenangan yang lebih besar: memeriksa email terus-menerus memecah perhatian sepanjang hari, padahal volume pesannya bisa diselesaikan dalam dua sesi berdurasi dua puluh menit."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Tool shopping instead of habit building",
         "id": "Berburu aplikasi, bukan membangun kebiasaan"
        },
        "fix": {
         "en": "Any notes app plus any calendar wins if processed daily. Switching tools is procrastination wearing a productivity costume.",
         "id": "Aplikasi catatan apa pun ditambah kalender apa pun sudah cukup, asal diproses setiap hari. Gonta-ganti alat adalah penundaan yang memakai kostum produktivitas."
        }
       },
       {
        "h": {
         "en": "A calendar that lies",
         "id": "Kalender yang berbohong"
        },
        "fix": {
         "en": "Blocks you routinely ignore teach you to ignore all blocks. Schedule less; honour everything scheduled.",
         "id": "Blok yang rutin kamu abaikan mengajari dirimu untuk mengabaikan semua blok. Jadwalkan lebih sedikit; tepati semua yang sudah dijadwalkan."
        }
       },
       {
        "h": {
         "en": "Deleting the system in busy weeks",
         "id": "Membuang sistem saat minggu sedang sibuk"
        },
        "fix": {
         "en": "Busy weeks are what the system is for. Shrink the evening process to two minutes, never to zero.",
         "id": "Minggu sibuk justru alasan sistem ini ada. Susutkan proses malam menjadi dua menit, jangan pernah sampai nol."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "Why does the lesson insist on a single capture point rather than notes scattered across apps?",
        "id": "Mengapa pelajaran ini bersikeras pada satu titik pencatatan, bukan catatan yang tersebar di berbagai aplikasi?"
       },
       "options": [
        {
         "en": "Because premium note apps have better features",
         "id": "Karena aplikasi catatan berbayar fiturnya lebih lengkap"
        },
        {
         "en": "Because the brain only releases a commitment when it trusts the place it was written will be seen again",
         "id": "Karena otak baru mau melepaskan sebuah komitmen kalau ia percaya tempat komitmen itu ditulis pasti akan dilihat lagi"
        },
        {
         "en": "Because backups are easier from one app",
         "id": "Karena mencadangkan data lebih mudah dari satu aplikasi"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Scattered capture recreates distrust, so the brain keeps rehearsing tasks — the exact load the system exists to remove.",
        "id": "Pencatatan yang tersebar menghidupkan lagi ketidakpercayaan, sehingga otak terus mengulang-ulang daftar tugas — beban yang justru ingin dihapus oleh sistem ini."
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
    "id": "Simulasi Kerja Virtual dan Persiapan Karier"
   },
   "overview": {
    "en": "Module 6 of The Map focuses on virtual job simulations and career preparation. Work through the lessons in order — each builds on the last.",
    "id": "Modul 6 The Map membahas simulasi kerja virtual dan persiapan karier. Kerjakan pelajarannya berurutan — setiap pelajaran menjadi pijakan bagi pelajaran berikutnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply virtual job simulations and career preparation to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu punya metode yang konkret dan bisa diulang untuk menguji arah karier lewat simulasi kerja — dan menerapkannya pada keputusan kariermu sendiri."
   },
   "lessons": [
    {
     "n": "6.1",
     "title": {
      "en": "Introduction to Virtual Job Simulations",
      "id": "Pengantar Simulasi Kerja Virtual"
     },
     "dur": {
      "en": "10 min",
      "id": "10 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The last module of The Map replaces guessing with contact: six industry tracks, each a compressed workday of realistic tasks with model debriefs. This lesson explains how to run a simulation so it produces career signal — energy data, fit data, and evidence for your Range profile.",
      "id": "Modul terakhir The Map mengganti tebakan dengan pengalaman langsung: enam jalur industri, masing-masing berupa satu hari kerja yang dipadatkan, berisi tugas-tugas realistis dengan tinjauan model. Pelajaran ini menjelaskan cara menjalankan simulasi supaya menghasilkan sinyal karier yang berguna — data energi, data kecocokan, dan bukti untuk profil Range-mu."
     },
     "objectives": [
      {
       "en": "Explain what a simulation can and cannot tell you about a career direction.",
       "id": "Menjelaskan apa yang bisa dan tidak bisa diberitahukan sebuah simulasi tentang arah karier."
      },
      {
       "en": "Use the three-question debrief after every track: energised? competent? curious?",
       "id": "Memakai tinjauan tiga pertanyaan setelah setiap jalur: bersemangat? kompeten? penasaran?"
      },
      {
       "en": "Feed simulation results into The Range's fit model honestly.",
       "id": "Memasukkan hasil simulasi ke model kecocokan The Range dengan jujur."
      }
     ],
     "takeaways": [
      {
       "en": "An afternoon of simulated tasks beats a month of reading about an industry.",
       "id": "Satu sore mengerjakan tugas simulasi lebih berharga daripada sebulan membaca tentang sebuah industri."
      },
      {
       "en": "You are measuring your reaction to the work, not your current skill at it — beginners are supposed to be slow.",
       "id": "Yang kamu ukur adalah reaksimu terhadap pekerjaannya, bukan keterampilanmu saat ini — pemula memang wajar lambat."
      },
      {
       "en": "Two tracks that energised you are a direction hypothesis; test it next in The Range's company data.",
       "id": "Dua jalur yang membuatmu bersemangat adalah hipotesis arah karier; uji berikutnya dengan data perusahaan di The Range."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "Why simulate",
        "id": "Mengapa perlu simulasi"
       },
       "body": {
        "en": "Career mistakes are expensive precisely because the information arrives late — most people discover what consulting or audit actually feels like in month two of a job they committed years to reaching. Simulations move that discovery forward to an afternoon. Global employers increasingly publish job simulations for the same reason: they filter for people who have met the real work. Each track here compresses a representative workday — the actual task types, the actual trade-offs, junior-level versions — into 60–90 minutes.",
        "id": "Kesalahan karier itu mahal justru karena informasinya datang terlambat — kebanyakan orang baru tahu seperti apa rasanya menjadi konsultan atau auditor di bulan kedua pekerjaan yang mereka kejar bertahun-tahun. Simulasi memajukan penemuan itu menjadi satu sore saja. Perusahaan-perusahaan global pun makin banyak menerbitkan simulasi kerja dengan alasan yang sama: menyaring orang yang sudah pernah bersentuhan dengan pekerjaan sesungguhnya. Setiap jalur di sini memadatkan satu hari kerja yang representatif — jenis tugas yang sebenarnya, dilema yang sebenarnya, dalam versi level junior — menjadi 60–90 menit."
       },
       "img": "../../assets/bg/gauntlet/gate-03-assessment.jpg",
       "imgPos": "center 35%"
      },
      {
       "icon": "eye",
       "h": {
        "en": "The three-question debrief",
        "id": "Tinjauan tiga pertanyaan"
       },
       "body": {
        "en": "After each track, before reading anything else, write three answers. <b>Energy:</b> did the 90 minutes pass quickly or crawl? Energy is the least fakeable career signal you own. <b>Competence trajectory:</b> not “was I good” — you were not, you are new — but “did I improve within the session, and did I want to?” <b>Curiosity:</b> which task would you happily do a harder version of tomorrow? A track scoring high on all three is a serious direction candidate; one scoring low on all three is an expensive mistake you just avoided for free.",
        "id": "Setelah setiap jalur, sebelum membaca apa pun, tulis tiga jawaban. <b>Energi:</b> apakah 90 menit itu terasa cepat berlalu atau merangkak? Energi adalah sinyal karier yang paling sulit dipalsukan yang kamu miliki. <b>Arah kompetensi:</b> bukan “apakah aku sudah jago” — belum, kamu masih baru — melainkan “apakah aku membaik dalam sesi itu, dan apakah aku ingin membaik?” <b>Rasa ingin tahu:</b> tugas mana yang versi lebih sulitnya rela kamu kerjakan besok? Jalur yang tinggi di ketiganya adalah kandidat arah yang serius; jalur yang rendah di ketiganya adalah kesalahan mahal yang baru saja kamu hindari secara gratis."
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
        "id": "Hasil simulasi adalah bukti, dan bukti seharusnya masuk ke profilmu: catat tiga jawaban dari setiap jalur di Audit Pribadi, lalu tinjau ulang kuesioner Range-mu — apakah arah yang disarankannya masih bertahan setelah bersentuhan dengan pekerjaan simulasi? Kalau simulasi dan kuesioner tidak sepakat, percayai simulasinya: preferensi yang diucapkan selalu lebih lemah daya prediksinya daripada perilaku. Dua jalur yang memberimu energi → jelajahi perusahaan-perusahaan di industri itu di basis data Range, dan baca halaman perannya dengan pandangan yang baru."
       }
      }
     ],
     "diagram": {
      "type": "flow",
      "exhibit": {
       "en": "Exhibit 1: The simulation loop — contact before commitment.",
       "id": "Peraga 1: Putaran simulasi — bersentuhan dulu, baru berkomitmen."
      },
      "title": {
       "en": "Run → Debrief → Compare → Decide",
       "id": "Jalankan → Tinjau → Bandingkan → Putuskan"
      },
      "items": [
       {
        "h": {
         "en": "Run the track",
         "id": "Jalankan jalurnya"
        },
        "sub": {
         "en": "90 minutes of realistic junior tasks",
         "id": "90 menit tugas level junior yang realistis"
        }
       },
       {
        "h": {
         "en": "Debrief",
         "id": "Tinjau"
        },
        "sub": {
         "en": "Energy · competence trajectory · curiosity",
         "id": "Energi · arah kompetensi · rasa ingin tahu"
        }
       },
       {
        "h": {
         "en": "Compare",
         "id": "Bandingkan"
        },
        "sub": {
         "en": "Across tracks and against your Range profile",
         "id": "Antarjalur, dan terhadap profil Range-mu"
        }
       },
       {
        "h": {
         "en": "Decide",
         "id": "Putuskan"
        },
        "sub": {
         "en": "Two candidates forward into company research",
         "id": "Dua kandidat maju ke tahap riset perusahaan"
        }
       }
      ],
      "longdesc": {
       "en": "A four-step loop: run a 90-minute track of realistic junior tasks; debrief on energy, competence trajectory and curiosity; compare results across tracks and against your Range questionnaire; decide which one or two directions advance into company research.",
       "id": "Putaran empat langkah: jalankan jalur 90 menit berisi tugas level junior yang realistis; tinjau energi, arah kompetensi, dan rasa ingin tahu; bandingkan hasil antarjalur dan terhadap kuesioner Range-mu; putuskan satu atau dua arah yang maju ke tahap riset perusahaan."
      }
     },
     "checks": [
      {
       "q": {
        "en": "You found the accounting track slow and draining but scored well on its tasks. How should this weigh on your direction?",
        "id": "Kamu merasa jalur akuntansi lambat dan menguras tenaga, tapi nilaimu di tugas-tugasnya bagus. Bagaimana seharusnya ini memengaruhi arah kariermu?"
       },
       "options": [
        {
         "en": "Pursue accounting — performance is what employers pay for",
         "id": "Kejar akuntansi — kinerja adalah yang dibayar perusahaan"
        },
        {
         "en": "Treat it cautiously — competence without energy predicts burnout-grade misfit over years",
         "id": "Sikapi dengan hati-hati — kompeten tanpa energi adalah resep ketidakcocokan yang berujung burnout dalam beberapa tahun"
        },
        {
         "en": "Ignore the session — one afternoon proves nothing",
         "id": "Abaikan sesinya — satu sore tidak membuktikan apa pun"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Skill can be built almost anywhere; energy cannot be faked for a decade. High-competence, low-energy tracks are the classic trap the debrief exists to catch.",
        "id": "Keterampilan bisa dibangun hampir di mana saja; energi tidak bisa dipalsukan selama sepuluh tahun. Jalur yang kompetensinya tinggi tapi energinya rendah adalah jebakan klasik yang memang ingin ditangkap oleh tinjauan ini."
       }
      }
     ],
     "quote": {
      "en": "An afternoon of contact beats a month of reading about the work.",
      "id": "Satu sore bersentuhan langsung mengalahkan sebulan membaca tentang pekerjaannya."
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
      "id": "Satu hari kerja level junior di bidang akuntansi, dipadatkan: tiga tugas realistis dengan tinjauan model. Jalankan dengan jujur — kerjakan setiap tugas sebelum membuka jawabannya — lalu catat tinjauan tiga pertanyaan di auditmu."
     },
     "objectives": [
      {
       "en": "Experience three representative junior tasks from accounting.",
       "id": "Merasakan tiga tugas level junior yang mewakili pekerjaan di bidang akuntansi."
      },
      {
       "en": "Attempt each task under a soft time-box before reading the model answer.",
       "id": "Mengerjakan setiap tugas dengan batas waktu longgar sebelum membaca jawaban model."
      },
      {
       "en": "Score the track on energy, competence trajectory and curiosity.",
       "id": "Menilai jalur ini dari sisi energi, arah kompetensi, dan rasa ingin tahu."
      }
     ],
     "takeaways": [
      {
       "en": "You now have behavioural data about this industry that no brochure could give you.",
       "id": "Kamu sekarang punya data perilaku tentang industri ini — sesuatu yang tidak bisa diberikan brosur mana pun."
      },
      {
       "en": "Slow is normal; the signal is whether the work pulled you in or pushed you away.",
       "id": "Lambat itu wajar; sinyalnya adalah apakah pekerjaan ini menarikmu masuk atau mendorongmu menjauh."
      },
      {
       "en": "Log the three-question debrief before the impression fades.",
       "id": "Catat tinjauan tiga pertanyaan sebelum kesannya memudar."
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
        "id": "Kamu junior di minggu pertama di sebuah kantor akuntan menengah. Seniormu menyerahkan catatan klien yang berantakan, satu jam sebelum panggilan laporan status: “Beri saya sesuatu yang bisa saya percaya.” Produk akuntansi yang sebenarnya bukan angka — melainkan kepercayaan terhadap angka."
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
        "id": "Ringkasan kas klien: saldo awal Rp 42,0 juta, penerimaan penjualan tercatat Rp 118,5 juta, pembayaran tercatat Rp 96,2 juta, saldo akhir menurut rekening koran Rp 61,8 juta. Apakah angkanya cocok? Kalau tidak, berapa selisihnya, dan apa yang akan kamu periksa lebih dulu? Kerjakan, lalu buka jawabannya."
       },
       "debrief": {
        "en": "Expected closing: 42.0 + 118.5 − 96.2 = Rp 64.3m; the bank shows 61.8m — a Rp 2.5m gap. Junior instinct says “find the error”; trained instinct says “list the usual suspects in likelihood order”: unrecorded bank charges or transfers out, a receipt recorded but not yet cleared (timing), a transposed digit (2.5m is suspiciously round), or — the reason the discipline exists — a payment that never should have happened. The professional habit on display: never present a number as reconciled until the difference is itemised to zero.",
        "id": "Saldo akhir yang seharusnya: 42,0 + 118,5 − 96,2 = Rp 64,3 juta; bank menunjukkan 61,8 juta — ada selisih Rp 2,5 juta. Naluri junior berkata “cari kesalahannya”; naluri yang terlatih berkata “daftar dulu tersangka yang lazim, urutkan dari yang paling mungkin”: biaya bank atau transfer keluar yang belum dicatat, penerimaan yang sudah dicatat tapi belum cair (selisih waktu), angka yang tertukar (2,5 juta terlalu bulat untuk kebetulan), atau — alasan disiplin ini ada — pembayaran yang seharusnya tidak pernah terjadi. Kebiasaan profesional yang terlihat di sini: jangan pernah menyajikan angka sebagai “cocok” sebelum selisihnya dirinci sampai nol."
       }
      },
      {
       "h": {
        "en": "Task 2 — Classify the grey items",
        "id": "Tugas 2 — Klasifikasikan pos-pos abu-abu"
       },
       "body": {
        "en": "Three items need classification before the call: (a) Rp 15m spent renovating the leased shop, (b) Rp 8m deposit received for goods delivering next month, (c) the owner's personal car fuel routinely paid from the business account. Decide how each is treated and why, then reveal.",
        "id": "Tiga pos perlu diklasifikasikan sebelum panggilan: (a) Rp 15 juta untuk renovasi toko yang disewa, (b) uang muka Rp 8 juta yang diterima untuk barang yang baru dikirim bulan depan, (c) bensin mobil pribadi pemilik yang rutin dibayar dari rekening usaha. Putuskan perlakuan untuk masing-masing dan alasannya, lalu buka jawabannya."
       },
       "debrief": {
        "en": "(a) Leasehold improvement — an asset depreciated over the lease term, not an expense today: it buys benefit across years. (b) Not revenue yet: it is a liability (unearned revenue) until delivery, because the obligation is still open — recognising it now would inflate this month's performance. (c) Not a business expense at all: an owner's draw, and mixing it in misstates both profit and tax. The pattern across all three: accounting keeps asking “whose money, which period, what obligation?” If those questions felt satisfying rather than pedantic, that is real signal.",
        "id": "(a) Perbaikan atas aset sewaan — dicatat sebagai aset dan disusutkan sepanjang masa sewa, bukan beban hari ini: manfaatnya dinikmati selama bertahun-tahun. (b) Belum bisa diakui sebagai pendapatan: ini liabilitas (pendapatan diterima di muka) sampai barangnya dikirim, karena kewajibannya masih terbuka — mengakuinya sekarang akan menggelembungkan kinerja bulan ini. (c) Sama sekali bukan beban usaha: ini prive pemilik, dan mencampurnya menyesatkan laba sekaligus pajak. Pola di ketiganya: akuntansi selalu bertanya “uang siapa, periode yang mana, kewajiban apa?” Kalau pertanyaan-pertanyaan itu terasa memuaskan, bukan cerewet, itu sinyal yang sungguhan."
       }
      },
      {
       "h": {
        "en": "Task 3 — Say it to the client",
        "id": "Tugas 3 — Sampaikan kepada klien"
       },
       "body": {
        "en": "Draft the two-sentence status you would give on the call: what is solid, what is open, what you need. Then reveal.",
        "id": "Susun laporan status dua kalimat yang akan kamu sampaikan di panggilan: apa yang sudah pasti, apa yang masih terbuka, dan apa yang kamu butuhkan. Lalu buka jawabannya."
       },
       "debrief": {
        "en": "Model: “Your cash position is Rp 61.8m confirmed against the bank; there's a Rp 2.5m recording gap I'm itemising — I'll have it closed by Thursday. To finish, I need the bank's fee advice slips and the delivery date for the Rp 8m advance order.” Notice the shape: verified number first, the open item with an owner and a date, a specific request. Accounting communication is the pyramid from Module 4 with a fiduciary spine.",
        "id": "Model: “Posisi kas Bapak/Ibu Rp 61,8 juta, sudah terkonfirmasi dengan bank; ada selisih pencatatan Rp 2,5 juta yang sedang saya rinci — selesai hari Kamis. Untuk menuntaskannya, saya butuh slip biaya bank dan tanggal kirim untuk pesanan dengan uang muka Rp 8 juta.” Perhatikan bentuknya: angka yang sudah terverifikasi lebih dulu, pos terbuka lengkap dengan penanggung jawab dan tanggal, lalu permintaan yang spesifik. Komunikasi akuntansi adalah piramida dari Modul 4, ditambah tulang punggung tanggung jawab fidusia."
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
        "id": "Membuktikan bahwa dua catatan atas uang yang sama saling cocok, dengan merinci setiap perbedaan sampai selisihnya nol."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why is the Rp 8m advance not counted as this month's revenue?",
        "id": "Mengapa uang muka Rp 8 juta tidak dihitung sebagai pendapatan bulan ini?"
       },
       "options": [
        {
         "en": "Because the amount is too small to matter",
         "id": "Karena jumlahnya terlalu kecil untuk diperhitungkan"
        },
        {
         "en": "Because the delivery obligation is still open — until then it is a liability",
         "id": "Karena kewajiban pengirimannya masih terbuka — sampai barang dikirim, uang itu adalah liabilitas"
        },
        {
         "en": "Because cash was received in a different bank account",
         "id": "Karena uangnya diterima di rekening bank yang berbeda"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Revenue follows the fulfilment of obligation, not the arrival of cash — the core of accrual thinking.",
        "id": "Pendapatan mengikuti terpenuhinya kewajiban, bukan masuknya uang — inilah inti cara berpikir akrual."
       }
      }
     ]
    },
    {
     "n": "6.3",
     "title": {
      "en": "Industry Track – Banking &amp; Financial Services",
      "id": "Jalur Industri – Perbankan &amp; Jasa Keuangan"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "A compressed junior workday in banking & financial services: three realistic tasks with model debriefs. Run it honestly — attempt each task before revealing — then log the three-question debrief in your audit.",
      "id": "Satu hari kerja level junior di bidang perbankan &amp; jasa keuangan, dipadatkan: tiga tugas realistis dengan tinjauan model. Jalankan dengan jujur — kerjakan setiap tugas sebelum membuka jawabannya — lalu catat tinjauan tiga pertanyaan di auditmu."
     },
     "objectives": [
      {
       "en": "Experience three representative junior tasks from banking & financial services.",
       "id": "Merasakan tiga tugas level junior yang mewakili pekerjaan di bidang perbankan &amp; jasa keuangan."
      },
      {
       "en": "Attempt each task under a soft time-box before reading the model answer.",
       "id": "Mengerjakan setiap tugas dengan batas waktu longgar sebelum membaca jawaban model."
      },
      {
       "en": "Score the track on energy, competence trajectory and curiosity.",
       "id": "Menilai jalur ini dari sisi energi, arah kompetensi, dan rasa ingin tahu."
      }
     ],
     "takeaways": [
      {
       "en": "You now have behavioural data about this industry that no brochure could give you.",
       "id": "Kamu sekarang punya data perilaku tentang industri ini — sesuatu yang tidak bisa diberikan brosur mana pun."
      },
      {
       "en": "Slow is normal; the signal is whether the work pulled you in or pushed you away.",
       "id": "Lambat itu wajar; sinyalnya adalah apakah pekerjaan ini menarikmu masuk atau mendorongmu menjauh."
      },
      {
       "en": "Log the three-question debrief before the impression fades.",
       "id": "Catat tinjauan tiga pertanyaan sebelum kesannya memudar."
      }
     ],
     "scenario": {
      "icon": "flag",
      "img": "../../assets/bg/gauntlet/gate-04-casestudy.jpg",
      "title": {
       "en": "Your desk today: Banking & Financial Services",
       "id": "Mejamu hari ini: Perbankan &amp; Jasa Keuangan"
      },
      "body": [
       {
        "en": "You are a junior credit analyst. A long-standing client — a building-materials distributor — requests a Rp 2bn working-capital loan. Your job is not to say yes or no; it is to make the risk legible to the person who decides.",
        "id": "Kamu analis kredit junior. Seorang klien lama — distributor bahan bangunan — mengajukan kredit modal kerja Rp 2 miliar. Tugasmu bukan berkata ya atau tidak, melainkan membuat risikonya terbaca jelas oleh orang yang mengambil keputusan."
       }
      ]
     },
     "steps": [
      {
       "h": {
        "en": "Task 1 — Read the numbers like a lender",
        "id": "Tugas 1 — Baca angkanya seperti pemberi pinjaman"
       },
       "body": {
        "en": "The distributor: revenue Rp 18bn (flat 2 years), net margin 4%, receivables collected in 74 days (was 51 two years ago), inventory 88 days, existing debt Rp 1.5bn. Which two numbers worry a lender most, and why? Work it, then reveal.",
        "id": "Data distributor itu: pendapatan Rp 18 miliar (stagnan selama 2 tahun), margin bersih 4%, piutang tertagih dalam 74 hari (dua tahun lalu 51 hari), persediaan 88 hari, utang berjalan Rp 1,5 miliar. Dua angka mana yang paling mengkhawatirkan bagi pemberi pinjaman, dan mengapa? Kerjakan, lalu buka jawabannya."
       },
       "debrief": {
        "en": "The killers are the trend, not the levels: receivables stretching from 51 to 74 days means customers pay ever later — the classic early sign of channel stress or disguised bad debts — and flat revenue means the stretch is not growth-driven. Together they say the requested loan may be funding other people's unpaid bills, not expansion. Lending lives on this asymmetry: upside is a few percent interest, downside is the principal — so analysts are professionally paid to find the uncomfortable trend first.",
        "id": "Yang mematikan adalah trennya, bukan levelnya: piutang yang memanjang dari 51 ke 74 hari berarti pelanggan membayar makin lambat — tanda awal klasik dari tekanan di jalur distribusi atau piutang macet yang disamarkan — dan pendapatan yang stagnan berarti pemanjangan itu bukan karena pertumbuhan. Bersama-sama, keduanya mengisyaratkan kredit yang diminta mungkin dipakai untuk menalangi tagihan orang lain yang belum dibayar, bukan untuk ekspansi. Bisnis kredit hidup dari asimetri ini: untungnya cuma bunga beberapa persen, ruginya bisa seluruh pokok pinjaman — karena itulah analis dibayar untuk menemukan tren yang tidak nyaman lebih dulu."
       }
      },
      {
       "h": {
        "en": "Task 2 — Structure a protection",
        "id": "Tugas 2 — Rancang perlindungannya"
       },
       "body": {
        "en": "You will recommend approval with conditions. Propose two structures that protect the bank if receivables keep deteriorating. Think, then reveal.",
        "id": "Kamu akan merekomendasikan persetujuan dengan syarat. Usulkan dua struktur yang melindungi bank kalau piutang terus memburuk. Pikirkan, lalu buka jawabannya."
       },
       "debrief": {
        "en": "Standard toolkit: lend against the receivables themselves (an assignment of receivables, advancing only 70–80% of invoices under 60 days) so collateral shrinks in step with the risk; and a covenant — e.g. receivable days must stay under 80, tested quarterly, breach triggering a review. Perhaps a personal guarantee given flat revenue. The intellectual move worth noticing: bankers rarely reject risk, they price and cage it. If designing the cage felt like a puzzle you enjoyed, that is banking signal.",
        "id": "Perangkat standarnya: pinjamkan dengan jaminan piutangnya sendiri (pengalihan piutang, dengan pencairan hanya 70–80% dari faktur yang berumur di bawah 60 hari), sehingga agunan menyusut seiring naiknya risiko; dan sebuah kovenan — misalnya umur piutang harus tetap di bawah 80 hari, diuji setiap kuartal, dan pelanggarannya memicu peninjauan ulang. Mungkin ditambah jaminan pribadi, mengingat pendapatan yang stagnan. Cara berpikir yang layak diperhatikan: bankir jarang menolak risiko, mereka memberi harga dan mengurungnya. Kalau merancang “kurungan” ini terasa seperti teka-teki yang kamu nikmati, itu sinyal untuk perbankan."
       }
      },
      {
       "h": {
        "en": "Task 3 — The one-paragraph memo",
        "id": "Tugas 3 — Memo satu paragraf"
       },
       "body": {
        "en": "Write the recommendation paragraph for the credit committee: decision, two reasons, conditions. Then reveal.",
        "id": "Tulis paragraf rekomendasi untuk komite kredit: keputusan, dua alasan, syarat-syaratnya. Lalu buka jawabannya."
       },
       "debrief": {
        "en": "Model: “Recommend approval of Rp 2bn working capital, structured as receivables financing at 75% advance on invoices <60 days. Rationale: 15-year relationship with unblemished repayment; cash cycle stress is real (receivables 51→74 days) but the structure self-limits our exposure to it. Conditions: quarterly receivables ageing report; covenant DSO <80; personal guarantee. Decline unstructured term lending until collection trend reverses.” Decision first, risk acknowledged not hidden, protection doing the arguing.",
        "id": "Model: “Merekomendasikan persetujuan kredit modal kerja Rp 2 miliar, distrukturkan sebagai pembiayaan piutang dengan pencairan 75% atas faktur berumur <60 hari. Dasar pertimbangan: hubungan 15 tahun dengan riwayat pembayaran tanpa cela; tekanan siklus kas memang nyata (piutang 51→74 hari), tetapi strukturnya secara otomatis membatasi eksposur kita. Syarat: laporan umur piutang setiap kuartal; kovenan DSO <80; jaminan pribadi. Tolak kredit berjangka tanpa struktur sampai tren penagihan berbalik.” Keputusan di depan, risiko diakui bukan disembunyikan, dan perlindungannya yang berbicara."
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
        "id": "Janji yang dituangkan dalam perjanjian kredit — sebuah rasio atau perilaku yang harus dijaga peminjam, dan pelanggarannya memicu konsekuensi."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why did receivable days (51→74) outweigh the healthy-looking 4% net margin?",
        "id": "Mengapa umur piutang (51→74 hari) lebih berat bobotnya daripada margin bersih 4% yang tampak sehat?"
       },
       "options": [
        {
         "en": "Margins are irrelevant to lenders",
         "id": "Margin tidak relevan bagi pemberi pinjaman"
        },
        {
         "en": "Profit is an opinion about periods; cash collection is the fact that repays loans — and its trend is deteriorating",
         "id": "Laba adalah opini tentang suatu periode; penagihan kas adalah fakta yang melunasi kredit — dan trennya sedang memburuk"
        },
        {
         "en": "Because 74 is above the industry maximum of 60",
         "id": "Karena 74 hari melampaui batas maksimum industri, yaitu 60 hari"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Loans are repaid with cash, not accounting profit. A stretching collection cycle attacks exactly the resource that services debt.",
        "id": "Kredit dilunasi dengan kas, bukan dengan laba akuntansi. Siklus penagihan yang memanjang menyerang tepat sumber daya yang dipakai untuk membayar utang."
       }
      }
     ]
    },
    {
     "n": "6.4",
     "title": {
      "en": "Industry Track – Consulting &amp; Professional Services",
      "id": "Jalur Industri – Konsultansi &amp; Jasa Profesional"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "A compressed junior workday in consulting & professional services: three realistic tasks with model debriefs. Run it honestly — attempt each task before revealing — then log the three-question debrief in your audit.",
      "id": "Satu hari kerja level junior di bidang konsultansi &amp; jasa profesional, dipadatkan: tiga tugas realistis dengan tinjauan model. Jalankan dengan jujur — kerjakan setiap tugas sebelum membuka jawabannya — lalu catat tinjauan tiga pertanyaan di auditmu."
     },
     "objectives": [
      {
       "en": "Experience three representative junior tasks from consulting & professional services.",
       "id": "Merasakan tiga tugas level junior yang mewakili pekerjaan di bidang konsultansi &amp; jasa profesional."
      },
      {
       "en": "Attempt each task under a soft time-box before reading the model answer.",
       "id": "Mengerjakan setiap tugas dengan batas waktu longgar sebelum membaca jawaban model."
      },
      {
       "en": "Score the track on energy, competence trajectory and curiosity.",
       "id": "Menilai jalur ini dari sisi energi, arah kompetensi, dan rasa ingin tahu."
      }
     ],
     "takeaways": [
      {
       "en": "You now have behavioural data about this industry that no brochure could give you.",
       "id": "Kamu sekarang punya data perilaku tentang industri ini — sesuatu yang tidak bisa diberikan brosur mana pun."
      },
      {
       "en": "Slow is normal; the signal is whether the work pulled you in or pushed you away.",
       "id": "Lambat itu wajar; sinyalnya adalah apakah pekerjaan ini menarikmu masuk atau mendorongmu menjauh."
      },
      {
       "en": "Log the three-question debrief before the impression fades.",
       "id": "Catat tinjauan tiga pertanyaan sebelum kesannya memudar."
      }
     ],
     "scenario": {
      "icon": "flag",
      "img": "../../assets/bg/gauntlet/gate-05-hr-interview.jpg",
      "title": {
       "en": "Your desk today: Consulting & Professional Services",
       "id": "Mejamu hari ini: Konsultansi &amp; Jasa Profesional"
      },
      "body": [
       {
        "en": "You are a first-month analyst at a consulting firm. The engagement manager walks past your desk: “Client call moved up — I need a first-cut structure on their retail revenue problem in 45 minutes, and one slide I could actually show.”",
        "id": "Kamu analis bulan pertama di sebuah firma konsultan. Manajer proyek lewat di depan mejamu: “Panggilan dengan klien dimajukan — saya butuh struktur awal untuk masalah pendapatan ritel mereka dalam 45 menit, plus satu salindia yang benar-benar layak saya tunjukkan.”"
       }
      ]
     },
     "steps": [
      {
       "h": {
        "en": "Task 1 — Structure under the clock",
        "id": "Tugas 1 — Menyusun struktur di bawah tekanan waktu"
       },
       "body": {
        "en": "The client: a 40-store fashion retailer, revenue −12% year-on-year while the market fell only 3%. Build the first-cut MECE structure for where the damage lives. Ten minutes, then reveal.",
        "id": "Kliennya: peritel fesyen dengan 40 toko, pendapatan turun 12% dari tahun lalu, sementara pasar hanya turun 3%. Bangun struktur MECE awal untuk menemukan di mana kerusakannya. Sepuluh menit, lalu buka jawabannya."
       },
       "debrief": {
        "en": "First cut: the −12% splits into market effect (−3%, everyone's problem) and company effect (−9%, our problem). The company effect splits by driver: fewer visitors × lower conversion × smaller baskets — and by cut: which stores, which categories, which channels. The consulting move is asking for the split before theorising: “is the −9% concentrated in 5 stores or spread across 40?” concentrates the entire engagement. Speed came from the Module 3 engine, not from knowing retail.",
        "id": "Struktur awal: −12% terbagi menjadi efek pasar (−3%, masalah semua orang) dan efek perusahaan (−9%, masalah kita). Efek perusahaan lalu dipecah per pendorong: pengunjung berkurang × konversi turun × nilai belanja mengecil — dan per irisan: toko mana, kategori mana, kanal mana. Gerakan khas konsultan adalah meminta pembagian data sebelum berteori: pertanyaan “apakah −9% itu terkonsentrasi di 5 toko atau tersebar di 40 toko?” langsung memusatkan seluruh proyek. Kecepatannya datang dari mesin di Modul 3, bukan dari pengetahuan tentang ritel."
       }
      },
      {
       "h": {
        "en": "Task 2 — Make one slide say one thing",
        "id": "Tugas 2 — Buat satu salindia menyampaikan satu hal"
       },
       "body": {
        "en": "Data arrives: 70% of the decline sits in 6 mall stores; street stores are flat; online grew 8%. Design the one slide — headline sentence plus supporting visual — that you would show. Sketch, then reveal.",
        "id": "Datanya datang: 70% penurunan ada di 6 toko di mal; toko-toko di jalan raya stagnan; online tumbuh 8%. Rancang satu salindia — kalimat judul plus visual pendukung — yang akan kamu tunjukkan. Buat sketsanya, lalu buka jawabannya."
       },
       "debrief": {
        "en": "The headline is the finding, not the topic: “Revenue decline is a 6-store mall problem, not a brand problem” — a so-called action title. Beneath it, one waterfall or bar chart attributing the −12% across store groups. Everything else — methodology, caveats, the other 34 stores — goes to backup slides. Consulting's craft rule: if the client remembers one sentence per slide, the deck should be exactly those sentences in order.",
        "id": "Judulnya adalah temuan, bukan topik: “Penurunan pendapatan adalah masalah 6 toko di mal, bukan masalah merek” — inilah yang disebut judul aksi. Di bawahnya, satu grafik air terjun atau grafik batang yang membagi −12% itu ke masing-masing kelompok toko. Segala hal lain — metodologi, catatan, 34 toko lainnya — masuk ke salindia cadangan. Aturan kerja konsultan: kalau klien hanya mengingat satu kalimat per salindia, dek itu seharusnya persis berisi kalimat-kalimat tersebut, secara berurutan."
       }
      },
      {
       "h": {
        "en": "Task 3 — Handle the pushback",
        "id": "Tugas 3 — Hadapi bantahan"
       },
       "body": {
        "en": "On the call, the client's retail director says: “Your analysis ignores that malls themselves are dying — this is not our execution.” Script a consultant's response, then reveal.",
        "id": "Di panggilan, direktur ritel klien berkata: “Analisis kalian mengabaikan fakta bahwa mal memang sedang sekarat — ini bukan soal eksekusi kami.” Tulis naskah respons seorang konsultan, lalu buka jawabannya."
       },
       "debrief": {
        "en": "Model: “You may be right — let's test it. If mall decline explains it, our 6 stores should track their malls' footfall. Two of them do. The other four declined 2–3× faster than their malls, and those four share a category mix and a store manager turnover problem. So the data says: partly the tide, partly the boat.” The shape: honour the objection, convert it to a testable claim, bring the test, land on the split. Consulting sells exactly this — disagreement conducted through evidence at client-relationship temperature.",
        "id": "Model: “Bisa jadi Bapak benar — mari kita uji. Kalau penurunan mal yang menjelaskan semuanya, 6 toko kita seharusnya bergerak seiring dengan lalu lintas pengunjung malnya. Dua toko memang begitu. Empat lainnya turun 2–3 kali lebih cepat daripada malnya, dan keempatnya punya kesamaan: bauran kategori dan masalah pergantian kepala toko. Jadi datanya bilang: sebagian karena arus, sebagian karena perahunya.” Bentuknya: hargai keberatannya, ubah menjadi klaim yang bisa diuji, bawa hasil ujinya, lalu mendarat pada pembagian yang jelas. Inilah persis yang dijual konsultansi — ketidaksetujuan yang dijalankan lewat bukti, pada suhu yang tetap menjaga hubungan dengan klien."
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
        "id": "Judul salindia yang menyatakan temuan sebagai kalimat lengkap, sehingga seluruh dek bisa dibaca sebagai sebuah argumen hanya dari judul-judulnya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does the analyst split −12% into market effect and company effect before anything else?",
        "id": "Mengapa analis memecah −12% menjadi efek pasar dan efek perusahaan sebelum melakukan apa pun?"
       },
       "options": [
        {
         "en": "Because clients expect two-part frameworks",
         "id": "Karena klien mengharapkan kerangka kerja dua bagian"
        },
        {
         "en": "Because it separates what the client can act on from what they cannot — sizing the addressable problem",
         "id": "Karena pembagian itu memisahkan apa yang bisa ditindaklanjuti klien dari apa yang tidak — mengukur seberapa besar masalah yang benar-benar bisa digarap"
        },
        {
         "en": "Because market data is easier to collect",
         "id": "Karena data pasar lebih mudah dikumpulkan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The −3% tide is context; the −9% company effect is the engagement. Structuring by controllability is the consulting reflex.",
        "id": "Arus −3% adalah konteks; efek perusahaan −9% adalah proyeknya. Menyusun struktur berdasarkan apa yang bisa dikendalikan adalah refleks seorang konsultan."
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
      "id": "Satu hari kerja level junior di bidang hukum, dipadatkan: tiga tugas realistis dengan tinjauan model. Jalankan dengan jujur — kerjakan setiap tugas sebelum membuka jawabannya — lalu catat tinjauan tiga pertanyaan di auditmu."
     },
     "objectives": [
      {
       "en": "Experience three representative junior tasks from law.",
       "id": "Merasakan tiga tugas level junior yang mewakili pekerjaan di bidang hukum."
      },
      {
       "en": "Attempt each task under a soft time-box before reading the model answer.",
       "id": "Mengerjakan setiap tugas dengan batas waktu longgar sebelum membaca jawaban model."
      },
      {
       "en": "Score the track on energy, competence trajectory and curiosity.",
       "id": "Menilai jalur ini dari sisi energi, arah kompetensi, dan rasa ingin tahu."
      }
     ],
     "takeaways": [
      {
       "en": "You now have behavioural data about this industry that no brochure could give you.",
       "id": "Kamu sekarang punya data perilaku tentang industri ini — sesuatu yang tidak bisa diberikan brosur mana pun."
      },
      {
       "en": "Slow is normal; the signal is whether the work pulled you in or pushed you away.",
       "id": "Lambat itu wajar; sinyalnya adalah apakah pekerjaan ini menarikmu masuk atau mendorongmu menjauh."
      },
      {
       "en": "Log the three-question debrief before the impression fades.",
       "id": "Catat tinjauan tiga pertanyaan sebelum kesannya memudar."
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
        "id": "Kamu trainee di sebuah firma hukum korporat. Seorang partner meletakkan draf perjanjian jasa di mejamu: “Klien tanda tangan besok. Tandai apa pun yang bisa merugikan mereka — dan ingat, mereka mau kesepakatannya jadi, bukan ceramah.”"
       }
      ]
     },
     "steps": [
      {
       "h": {
        "en": "Task 1 — Find the tilted clauses",
        "id": "Tugas 1 — Temukan klausul yang berat sebelah"
       },
       "body": {
        "en": "Three clauses from the draft: (a) “Provider may revise fees at any time upon notice.” (b) “Client indemnifies Provider against all claims arising from the services.” (c) “Either party may terminate with 30 days' notice; prepaid fees are non-refundable.” Your client is the customer. What is wrong with each? Work it, then reveal.",
        "id": "Tiga klausul dari draf: (a) “Penyedia dapat merevisi biaya kapan saja dengan pemberitahuan.” (b) “Klien membebaskan Penyedia dari seluruh klaim yang timbul dari jasa.” (c) “Salah satu pihak dapat mengakhiri perjanjian dengan pemberitahuan 30 hari; biaya yang telah dibayar di muka tidak dapat dikembalikan.” Klienmu adalah pihak pelanggan. Apa yang salah pada masing-masing klausul? Kerjakan, lalu buka jawabannya."
       },
       "debrief": {
        "en": "(a) A unilateral price-change right with no cap or consent converts a fixed deal into an open cheque — cap it, or grant a termination right on any increase. (b) The indemnity is backwards: the client would pay for the provider's own failures; indemnities should follow fault, each party covering harm it causes. (c) Termination looks mutual but non-refundable prepayment makes it one-sided — the provider can exit holding the client's money; unearned fees must be refunded pro-rata. Pattern: read every clause asking “who bears the risk if things go wrong, and who controls the lever?”",
        "id": "(a) Hak mengubah harga secara sepihak tanpa batas atau persetujuan mengubah kesepakatan yang tetap menjadi cek kosong — batasi, atau berikan hak mengakhiri perjanjian atas setiap kenaikan. (b) Ganti ruginya terbalik: klien justru menanggung kegagalan penyedia sendiri; ganti rugi seharusnya mengikuti kesalahan, masing-masing pihak menanggung kerugian yang ia sebabkan. (c) Pengakhiran tampak setara, tapi uang muka yang tidak bisa kembali membuatnya berat sebelah — penyedia bisa keluar sambil memegang uang klien; biaya yang belum terpakai wajib dikembalikan secara proporsional. Polanya: baca setiap klausul sambil bertanya “siapa yang menanggung risiko kalau terjadi masalah, dan siapa yang memegang tuasnya?”"
       }
      },
      {
       "h": {
        "en": "Task 2 — Redline, don't lecture",
        "id": "Tugas 2 — Perbaiki drafnya, jangan berceramah"
       },
       "body": {
        "en": "Redraft clause (a) so the client is protected but the deal still closes tomorrow. Then reveal.",
        "id": "Tulis ulang klausul (a) supaya klien terlindungi, tapi kesepakatan tetap bisa ditandatangani besok. Lalu buka jawabannya."
       },
       "debrief": {
        "en": "Model: “Provider may revise fees once per contract year, with 60 days' written notice, by no more than 5% or CPI, whichever is lower. If Client objects, Client may terminate without penalty before the revision takes effect, with unused prepaid fees refunded.” Notice the trade: the provider keeps a legitimate inflation valve; the client gains a cap, notice, and an exit. Deal-saving redlines offer the counterparty something reasonable while closing the abuse — lawyers who only strike clauses kill deals; lawyers who rebalance them close deals.",
        "id": "Model: “Penyedia dapat merevisi biaya satu kali per tahun kontrak, dengan pemberitahuan tertulis 60 hari sebelumnya, sebesar maksimal 5% atau tingkat inflasi, mana yang lebih rendah. Apabila Klien berkeberatan, Klien dapat mengakhiri perjanjian tanpa penalti sebelum revisi berlaku, dan biaya di muka yang belum terpakai dikembalikan.” Perhatikan pertukarannya: penyedia tetap punya katup inflasi yang sah; klien mendapat batas, pemberitahuan, dan jalan keluar. Perbaikan draf yang menyelamatkan kesepakatan selalu menawarkan sesuatu yang wajar bagi pihak lawan sambil menutup celah penyalahgunaannya — pengacara yang hanya mencoret klausul membunuh kesepakatan; pengacara yang menyeimbangkan ulang klausul yang membuatnya jadi."
       }
      },
      {
       "h": {
        "en": "Task 3 — The client email",
        "id": "Tugas 3 — Email untuk klien"
       },
       "body": {
        "en": "Write the email to the client: what you changed, what risk remains, what you need from them by when. Then reveal.",
        "id": "Tulis email untuk klien: apa yang kamu ubah, risiko apa yang masih tersisa, dan apa yang kamu butuhkan dari mereka beserta batas waktunya. Lalu buka jawabannya."
       },
       "debrief": {
        "en": "Model: three bullets. “Changed: fee increases now capped at 5%/year with exit right; indemnity now mutual and fault-based; termination refunds unused prepayment. Remaining risk: the liability cap stands at 12 months' fees — market-standard, but if the service fails during your peak season your losses could exceed it; we can push for carve-outs if you wish, at some risk to timeline. Needed: your call on the liability point by 3 pm today.” Legal advice at its best is exactly this: risks translated into business terms, decisions returned to their owner, deadlines explicit.",
        "id": "Model: tiga poin. “Yang diubah: kenaikan biaya kini dibatasi 5% per tahun dengan hak keluar; ganti rugi kini timbal balik dan berbasis kesalahan; pengakhiran perjanjian mengembalikan uang muka yang belum terpakai. Risiko yang tersisa: batas tanggung jawab tetap di angka biaya 12 bulan — ini standar pasar, tetapi kalau layanan gagal di musim puncak Bapak/Ibu, kerugian bisa melampauinya; kami bisa mengupayakan pengecualian jika diinginkan, dengan risiko pada jadwal. Yang dibutuhkan: keputusan Bapak/Ibu soal batas tanggung jawab sebelum pukul 15.00 hari ini.” Nasihat hukum terbaik persis seperti ini: risiko diterjemahkan ke bahasa bisnis, keputusan dikembalikan kepada pemiliknya, tenggat disebut dengan jelas."
       }
      }
     ],
     "glossary": [
      {
       "term": {
        "en": "indemnity",
        "id": "ganti rugi"
       },
       "def": {
        "en": "A contractual promise by one party to cover certain losses of the other — powerful, and dangerous when it does not follow fault.",
        "id": "Janji dalam kontrak dari satu pihak untuk menanggung kerugian tertentu pihak lain — kuat, dan berbahaya kalau tidak mengikuti siapa yang bersalah."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "What single question drives contract review in this track?",
        "id": "Satu pertanyaan apa yang menjadi penggerak utama tinjauan kontrak di jalur ini?"
       },
       "options": [
        {
         "en": "“Is the language grammatically precise?”",
         "id": "“Apakah bahasanya sudah tepat secara tata bahasa?”"
        },
        {
         "en": "“Who bears the risk if things go wrong, and who controls the lever?”",
         "id": "“Siapa yang menanggung risiko kalau terjadi masalah, dan siapa yang memegang tuasnya?”"
        },
        {
         "en": "“Does the contract match the standard template?”",
         "id": "“Apakah kontraknya sesuai dengan templat standar?”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Every flagged clause — fees, indemnity, termination — was a risk-and-control question wearing legal language.",
        "id": "Setiap klausul yang ditandai — biaya, ganti rugi, pengakhiran — sebenarnya adalah pertanyaan tentang risiko dan kendali yang berbalut bahasa hukum."
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
      "id": "Satu hari kerja level junior di bidang FMCG (barang konsumsi cepat habis), dipadatkan: tiga tugas realistis dengan tinjauan model. Jalankan dengan jujur — kerjakan setiap tugas sebelum membuka jawabannya — lalu catat tinjauan tiga pertanyaan di auditmu."
     },
     "objectives": [
      {
       "en": "Experience three representative junior tasks from fmcg.",
       "id": "Merasakan tiga tugas level junior yang mewakili pekerjaan di bidang FMCG."
      },
      {
       "en": "Attempt each task under a soft time-box before reading the model answer.",
       "id": "Mengerjakan setiap tugas dengan batas waktu longgar sebelum membaca jawaban model."
      },
      {
       "en": "Score the track on energy, competence trajectory and curiosity.",
       "id": "Menilai jalur ini dari sisi energi, arah kompetensi, dan rasa ingin tahu."
      }
     ],
     "takeaways": [
      {
       "en": "You now have behavioural data about this industry that no brochure could give you.",
       "id": "Kamu sekarang punya data perilaku tentang industri ini — sesuatu yang tidak bisa diberikan brosur mana pun."
      },
      {
       "en": "Slow is normal; the signal is whether the work pulled you in or pushed you away.",
       "id": "Lambat itu wajar; sinyalnya adalah apakah pekerjaan ini menarikmu masuk atau mendorongmu menjauh."
      },
      {
       "en": "Log the three-question debrief before the impression fades.",
       "id": "Catat tinjauan tiga pertanyaan sebelum kesannya memudar."
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
        "id": "Kamu junior brand associate di sebuah perusahaan barang konsumsi. Rapat metrik hari Senin: merek minuman instanmu kehilangan 1,2 poin pangsa pasar kuartal ini. Manajer merek menoleh kepadamu: “Coba kamu yang analisis dulu. Ke mana perginya, dan apa yang kita lakukan bulan ini?”"
       }
      ]
     },
     "steps": [
      {
       "h": {
        "en": "Task 1 — Decompose the share loss",
        "id": "Tugas 1 — Urai hilangnya pangsa pasar"
       },
       "body": {
        "en": "Data: your share 14.3% → 13.1%. Numeric distribution flat at 78% of stores. Competitor B launched a Rp 500 cheaper sachet and gained 1.5 points. Your price held; promo depth was cut 30% this quarter to protect margin. Where did the share go, mechanically? Work it, then reveal.",
        "id": "Data: pangsa pasarmu 14,3% → 13,1%. Distribusi numerik stagnan di 78% toko. Pesaing B meluncurkan sachet dengan harga Rp 500 lebih murah dan naik 1,5 poin. Hargamu tidak berubah; kedalaman promo dipangkas 30% kuartal ini demi menjaga margin. Secara mekanis, ke mana pangsa pasar itu pergi? Kerjakan, lalu buka jawabannya."
       },
       "debrief": {
        "en": "Share moves through four gates: distribution (can shoppers find you?), visibility (do they see you?), trial (does the price of entry work?), repeat (does the product deliver?). Distribution is flat, so the loss is in-store: the competitor's cheaper sachet attacks trial at exactly the moment your promo cut lowered your own visibility and price competitiveness. The mechanical answer: price-sensitive light buyers switched at shelf. FMCG's discipline is this decomposition — share never “just falls”, it leaks through a specific gate you can name.",
        "id": "Pangsa pasar bergerak melewati empat gerbang: distribusi (bisakah pembeli menemukanmu?), visibilitas (apakah mereka melihatmu?), coba (apakah harga masuknya cukup menarik?), beli ulang (apakah produknya memuaskan?). Distribusi stagnan, jadi kebocorannya terjadi di dalam toko: sachet murah pesaing menyerang gerbang coba tepat ketika pemangkasan promomu menurunkan visibilitas dan daya saing hargamu sendiri. Jawaban mekanisnya: pembeli ringan yang peka harga berpindah merek langsung di rak. Disiplin FMCG adalah penguraian seperti ini — pangsa pasar tidak pernah “sekadar turun”; ia bocor lewat gerbang tertentu yang bisa kamu sebutkan."
       }
      },
      {
       "h": {
        "en": "Task 2 — Choose this month's counter",
        "id": "Tugas 2 — Pilih langkah balasan bulan ini"
       },
       "body": {
        "en": "Three options, one month, limited budget: (a) match the competitor's price with a fighter pack, (b) restore promo depth in the top 20% of stores that drive 60% of volume, (c) launch a loyalty push on your app. Pick one with reasoning, then reveal.",
        "id": "Tiga pilihan, satu bulan, anggaran terbatas: (a) samai harga pesaing dengan kemasan tempur, (b) pulihkan kedalaman promo di 20% toko teratas yang menyumbang 60% volume, (c) luncurkan program loyalitas di aplikasimu. Pilih satu beserta alasannya, lalu buka jawabannya."
       },
       "debrief": {
        "en": "Model answer: (b). It counters the actual leak (trial/visibility at shelf) at the highest-leverage stores, is reversible, and defends volume without repricing the whole brand. (a) is the tempting trap: permanent price moves against a structurally cheaper attacker start margin wars you fund from a weaker position — fighter packs take months to do well. (c) targets heavy loyal buyers, who are not the ones leaving. The FMCG reflex being trained: match the intervention to the leaking gate, prefer reversible moves, and respect the 80/20 of stores.",
        "id": "Jawaban model: (b). Pilihan ini melawan kebocoran yang sebenarnya (gerbang coba dan visibilitas di rak) di toko-toko dengan daya ungkit tertinggi, bisa dibatalkan, dan mempertahankan volume tanpa mengubah harga seluruh merek. (a) adalah jebakan yang menggoda: perubahan harga permanen untuk melawan penyerang yang secara struktural lebih murah hanya memulai perang margin yang kamu biayai dari posisi lebih lemah — dan kemasan tempur butuh berbulan-bulan untuk dieksekusi dengan baik. (c) menyasar pembeli setia kelas berat, padahal bukan mereka yang pergi. Refleks FMCG yang sedang dilatih: cocokkan intervensi dengan gerbang yang bocor, utamakan langkah yang bisa dibatalkan, dan hormati prinsip 80/20 toko."
       }
      },
      {
       "h": {
        "en": "Task 3 — The Monday one-pager",
        "id": "Tugas 3 — Satu halaman untuk rapat Senin"
       },
       "body": {
        "en": "Write the four-line summary for the brand manager: what happened, why, this month's move, how we will know it worked. Then reveal.",
        "id": "Tulis rangkuman empat baris untuk manajer merek: apa yang terjadi, mengapa, langkah bulan ini, dan bagaimana kita tahu langkah itu berhasil. Lalu buka jawabannya."
       },
       "debrief": {
        "en": "Model: “Share −1.2pts, fully in-store: distribution flat, Competitor B's Rp500-cheaper sachet won price-sensitive trial while our promo depth fell 30%. Move: restore promo depth in the top-quintile stores (60% of volume) for 6 weeks, holding national price. Success metric: share in those stores back above 14% by week 6; if not, escalate fighter-pack evaluation. Cost: within quarter's trade budget.” Diagnosis, mechanism, action, measurable exit — the four sentences every commercial function speaks.",
        "id": "Model: “Pangsa −1,2 poin, seluruhnya terjadi di dalam toko: distribusi stagnan, sachet Pesaing B yang Rp 500 lebih murah memenangkan pembeli coba yang peka harga, tepat saat kedalaman promo kita turun 30%. Langkah: pulihkan kedalaman promo di toko-toko kuintil teratas (60% volume) selama 6 minggu, harga nasional tetap. Ukuran keberhasilan: pangsa di toko-toko itu kembali di atas 14% pada minggu ke-6; kalau tidak, naikkan evaluasi kemasan tempur ke pimpinan. Biaya: masih dalam anggaran promosi dagang kuartal ini.” Diagnosis, mekanisme, tindakan, pintu keluar yang terukur — empat kalimat yang dipakai setiap fungsi komersial."
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
        "id": "Persentase toko yang menjual produkmu, apa pun jumlahnya — gerbang pertama yang harus dilewati pangsa pasar."
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
         "id": "Memotong harga dilarang di industri FMCG"
        },
        {
         "en": "A permanent price war against a structurally cheaper attacker is fought from the weaker position, and the move is hard to reverse",
         "id": "Perang harga permanen melawan penyerang yang secara struktural lebih murah dijalani dari posisi yang lebih lemah, dan langkah itu sulit dibatalkan"
        },
        {
         "en": "Because the app loyalty option was cheaper",
         "id": "Karena program loyalitas di aplikasi lebih murah"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Reversible, targeted promo defends the leaking gate while preserving the pricing structure — optionality the price cut destroys.",
        "id": "Promo yang terarah dan bisa dibatalkan menjaga gerbang yang bocor sambil mempertahankan struktur harga — keleluasaan yang justru hilang begitu harga dipotong."
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
      "id": "Satu hari kerja level junior di bidang teknologi, dipadatkan: tiga tugas realistis dengan tinjauan model. Jalankan dengan jujur — kerjakan setiap tugas sebelum membuka jawabannya — lalu catat tinjauan tiga pertanyaan di auditmu."
     },
     "objectives": [
      {
       "en": "Experience three representative junior tasks from technology.",
       "id": "Merasakan tiga tugas level junior yang mewakili pekerjaan di bidang teknologi."
      },
      {
       "en": "Attempt each task under a soft time-box before reading the model answer.",
       "id": "Mengerjakan setiap tugas dengan batas waktu longgar sebelum membaca jawaban model."
      },
      {
       "en": "Score the track on energy, competence trajectory and curiosity.",
       "id": "Menilai jalur ini dari sisi energi, arah kompetensi, dan rasa ingin tahu."
      }
     ],
     "takeaways": [
      {
       "en": "You now have behavioural data about this industry that no brochure could give you.",
       "id": "Kamu sekarang punya data perilaku tentang industri ini — sesuatu yang tidak bisa diberikan brosur mana pun."
      },
      {
       "en": "Slow is normal; the signal is whether the work pulled you in or pushed you away.",
       "id": "Lambat itu wajar; sinyalnya adalah apakah pekerjaan ini menarikmu masuk atau mendorongmu menjauh."
      },
      {
       "en": "Log the three-question debrief before the impression fades.",
       "id": "Catat tinjauan tiga pertanyaan sebelum kesannya memudar."
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
        "id": "Kamu analis produk junior di sebuah aplikasi marketplace. Stand-up pagi: aktivasi — pengguna baru yang menyelesaikan pembelian pertama dalam 7 hari — turun dari 31% ke 24% dalam dua rilis terakhir. PM menugaskan investigasinya kepadamu."
       }
      ]
     },
     "steps": [
      {
       "h": {
        "en": "Task 1 — Localise the funnel break",
        "id": "Tugas 1 — Temukan titik patah di corong"
       },
       "body": {
        "en": "Funnel data per release: install → signup 62% → 61%; signup → first search 80% → 79%; search → add-to-cart 34% → 33%; cart → payment started 58% → 44%; payment → success 91% → 90%. Where is the break, and what changed in those releases would you check first? Work it, then reveal.",
        "id": "Data corong per rilis: pasang → daftar 62% → 61%; daftar → pencarian pertama 80% → 79%; pencarian → masuk keranjang 34% → 33%; keranjang → mulai bayar 58% → 44%; bayar → berhasil 91% → 90%. Di mana titik patahnya, dan perubahan apa di rilis-rilis itu yang akan kamu periksa lebih dulu? Kerjakan, lalu buka jawabannya."
       },
       "debrief": {
        "en": "Every stage wobbled a point except cart → payment-started: 58% → 44%, a 14-point cliff that alone explains most of the activation drop (0.62×0.79×0.33×0.44×0.90 ≈ 6.4% vs the old ≈ 8.5% through-rate). Suspects in the release notes: a new address-verification step, a shipping-cost reveal moved earlier, a payment-method list reordered. The tech reflex: funnels localise problems the way MECE trees do — never debug the whole app when one stage owns the cliff, and always check what shipped between the two measurements.",
        "id": "Semua tahap hanya goyah satu poin, kecuali keranjang → mulai bayar: 58% → 44%, jurang 14 poin yang sendirian menjelaskan sebagian besar penurunan aktivasi (0,62×0,79×0,33×0,44×0,90 ≈ 6,4%, dibandingkan laju lama ≈ 8,5%). Tersangka di catatan rilis: langkah verifikasi alamat yang baru, biaya kirim yang kini ditampilkan lebih awal, daftar metode pembayaran yang diurutkan ulang. Refleks di dunia teknologi: corong melokalisasi masalah persis seperti pohon MECE — jangan pernah mengutak-atik seluruh aplikasi kalau satu tahap sudah jelas memegang jurangnya, dan selalu periksa apa yang dirilis di antara dua pengukuran."
       }
      },
      {
       "h": {
        "en": "Task 2 — Design the experiment",
        "id": "Tugas 2 — Rancang eksperimennya"
       },
       "body": {
        "en": "The release notes show a new mandatory address-verification step at checkout, added to cut failed deliveries. Design the test that proves or clears it — and name the metric that could make “fixing” activation a mistake. Think, then reveal.",
        "id": "Catatan rilis menunjukkan ada langkah verifikasi alamat wajib yang baru di checkout, ditambahkan untuk mengurangi pengiriman gagal. Rancang uji yang membuktikan atau membebaskannya dari tuduhan — dan sebutkan metrik yang bisa membuat “memperbaiki” aktivasi justru menjadi kesalahan. Pikirkan, lalu buka jawabannya."
       },
       "debrief": {
        "en": "A/B test: 50% of new users get the verification step, 50% get the old flow; measure cart → payment-started, activation, and — the guardrail — failed-delivery rate over 30 days. The verification step was added for a reason: if removing it recovers 14 points of conversion but doubles failed deliveries, the company may be trading real money for vanity activation. Model outcome: keep verification but move it after payment method selection, or make it async. The signature tech trade-off: nearly every fix moves two metrics in opposite directions, and guardrail metrics are how grown-up teams stay honest.",
        "id": "Uji A/B: 50% pengguna baru mendapat langkah verifikasi, 50% mendapat alur lama; ukur keranjang → mulai bayar, aktivasi, dan — sebagai pagar pengaman — tingkat pengiriman gagal selama 30 hari. Langkah verifikasi itu ditambahkan karena ada alasannya: kalau menghapusnya memulihkan 14 poin konversi tapi melipatgandakan pengiriman gagal, perusahaan sedang menukar uang sungguhan demi angka aktivasi yang hanya enak dilihat. Hasil model: pertahankan verifikasi, tapi pindahkan setelah pemilihan metode pembayaran, atau jalankan secara asinkron. Dilema khas teknologi: hampir setiap perbaikan menggerakkan dua metrik ke arah yang berlawanan, dan metrik pagar pengaman adalah cara tim yang matang menjaga kejujurannya."
       }
      },
      {
       "h": {
        "en": "Task 3 — Stand-up summary",
        "id": "Tugas 3 — Rangkuman untuk stand-up"
       },
       "body": {
        "en": "Write your 30-second stand-up update: finding, hypothesis, test, timeline. Then reveal.",
        "id": "Tulis laporan stand-up 30 detikmu: temuan, hipotesis, uji, lini waktu. Lalu buka jawabannya."
       },
       "debrief": {
        "en": "Model: “Activation drop localises to cart → payment: 58 to 44. Prime suspect is the new mandatory address verification — it shipped exactly between the two measurements. Proposal: A/B it against the old flow with failed-delivery rate as guardrail; two weeks to significance at current traffic. If confirmed, cheapest fix is moving verification post-payment-selection. Dashboard link in the channel.” Thirty seconds, pyramid-shaped, experiment-first — how technical organisations metabolise problems.",
        "id": "Model: “Penurunan aktivasi terlokalisasi di keranjang → bayar: dari 58 ke 44. Tersangka utamanya verifikasi alamat wajib yang baru — dirilis tepat di antara dua pengukuran. Usulan: uji A/B terhadap alur lama dengan tingkat pengiriman gagal sebagai pagar pengaman; dua minggu untuk mencapai signifikansi dengan trafik saat ini. Kalau terkonfirmasi, perbaikan termurah adalah memindahkan verifikasi ke setelah pemilihan pembayaran. Tautan dasbornya ada di kanal.” Tiga puluh detik, berbentuk piramida, eksperimen lebih dulu — begitulah organisasi teknologi mencerna masalah."
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
        "id": "Metrik yang dipantau selama eksperimen untuk memastikan perbaikan yang sedang dikejar tidak diam-diam merusak sesuatu yang lebih penting."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does the experiment track failed-delivery rate alongside activation?",
        "id": "Mengapa eksperimen ini memantau tingkat pengiriman gagal di samping aktivasi?"
       },
       "options": [
        {
         "en": "Because more metrics make reports look thorough",
         "id": "Karena makin banyak metrik, laporan tampak makin menyeluruh"
        },
        {
         "en": "Because the verification step exists to protect deliveries — removing it may trade real losses for better-looking activation",
         "id": "Karena langkah verifikasi ada untuk melindungi pengiriman — menghapusnya bisa berarti menukar kerugian sungguhan demi angka aktivasi yang tampak lebih baik"
        },
        {
         "en": "Because activation cannot be measured directly",
         "id": "Karena aktivasi tidak bisa diukur secara langsung"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Guardrails encode the reason the “problem” feature was built. Experiments without them optimise one number by quietly breaking another.",
        "id": "Pagar pengaman menyimpan alasan mengapa fitur yang “bermasalah” itu dibangun. Eksperimen tanpa pagar pengaman mengoptimalkan satu angka sambil diam-diam merusak angka yang lain."
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
