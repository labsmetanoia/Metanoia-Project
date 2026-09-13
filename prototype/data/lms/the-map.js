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
  "visual": "../../assets/opt/system-the-map.webp",
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
     "material": {
      "kicker": {
       "en": "Read next · 6 slides",
       "id": "Baca berikutnya · 6 slide"
      },
      "title": {
       "en": "Adaptability and Resilience — Material",
       "id": "Adaptabilitas dan Ketangguhan — Materi"
      },
      "intro": {
       "en": "Now read the chapter itself. Six slides walk through what adaptability and resilience mean, why they can be developed, and the three drivers you will work with across this module. Move through them at your own pace — the slide text is available under the player.",
       "id": "Sekarang baca bab materinya. Enam slide memandu apa arti adaptabilitas dan ketangguhan, mengapa keduanya bisa dikembangkan, dan tiga pendorong yang akan kamu pakai sepanjang modul ini. Baca sesuai ritmemu — teks slide tersedia di bawah pemutar."
      },
      "base": "../../assets/lms/the-map/slides/adaptability-",
      "slides": [
       {
        "title": {
         "en": "Chapter: Adaptability and Resilience",
         "id": "Bab: Adaptabilitas dan Ketangguhan"
        },
        "text": {
         "en": "Navigate change with confidence, turn challenges into opportunities, and grow stronger through uncertainty. Embrace change — stay open, stay curious. Build resilience — turn setbacks into strength. Move forward — create new opportunities. “It's not the strongest who survive, but the most adaptable.” — Charles Darwin",
         "id": "Hadapi perubahan dengan percaya diri, ubah tantangan menjadi peluang, dan tumbuh lebih kuat di tengah ketidakpastian. Terbuka terhadap perubahan — tetap berpikir terbuka, selalu ingin belajar. Bangun ketangguhan — ubah hambatan menjadi kekuatan. Melangkah lebih jauh — ciptakan peluang baru untuk masa depan. “Bukan yang paling kuat yang bertahan, melainkan yang paling mampu beradaptasi.” — Charles Darwin"
        }
       },
       {
        "title": {
         "en": "Adaptability & Resilience: what you will learn",
         "id": "Adaptabilitas dan Ketangguhan: yang akan Anda pelajari"
        },
        "text": {
         "en": "Build a resilient mindset to thrive through change and turn uncertainty into opportunity. In this course, you will learn how to: 01 Set meaningful learning intentions — clarify what you want to achieve and why it matters, so you can learn with purpose. 02 Develop the behaviors of effective learners — practice mindsets and habits used by high-performing, adaptable individuals. 03 Transform intentions into sustainable behaviors — use the Habit Loop to turn good intentions into consistent actions. 04 Apply the APR Framework — navigate challenging situations with an adaptable and resilient mindset. Apply to real life: use these lessons in your everyday decisions and personal development, whether by using the APR framework to reframe your mindset when engaging with colleagues or by unlearning unhealthy habits. Create lasting change: translate learning into meaningful, lasting change in both your personal and professional life.",
         "id": "Bangun pola pikir tangguh untuk berkembang di tengah perubahan dan ubah ketidakpastian menjadi peluang. Dalam kursus ini, Anda akan mempelajari cara: 01 Menetapkan tujuan belajar yang bermakna — memahami apa yang ingin Anda capai dan mengapa itu penting, sehingga Anda dapat belajar dengan penuh tujuan. 02 Mengembangkan perilaku pembelajar yang efektif — melatih pola pikir dan kebiasaan yang dimiliki oleh individu berprestasi dan adaptif. 03 Mengubah niat menjadi perilaku berkelanjutan — menggunakan Habit Loop untuk mengubah niat baik menjadi tindakan nyata yang konsisten. 04 Menerapkan Kerangka APR — menghadapi situasi yang menantang dengan pola pikir yang adaptif dan tangguh. Terapkan dalam kehidupan nyata: gunakan setiap pelajaran ini dalam keputusan sehari-hari dan pengembangan diri, baik dengan kerangka APR untuk mengubah pola pikir saat bekerja sama dengan rekan kerja maupun dengan menghilangkan kebiasaan yang tidak sehat. Ciptakan perubahan yang berkelanjutan: ubah pembelajaran menjadi perubahan yang nyata dan bermakna dalam kehidupan pribadi maupun profesional Anda."
        }
       },
       {
        "title": {
         "en": "Introduction to Adaptability & Resilience",
         "id": "Pengantar tentang Adaptabilitas & Resiliensi"
        },
        "text": {
         "en": "We wanted to start The Map journey with the Adaptability and Resilience course because in an ever-evolving world of work, the ability to adapt has become the ultimate superpower. Being ‘ready for the future’ doesn't mean reacting to the next challenge that comes your way, but rather being prepared to meet it when it arrives. There's one tool above all others that can help you do that: adaptability. The purpose of this course is to provide you with a set of tools and suggested mindsets that will help you tackle obstacles and the times of change you may encounter as you navigate your professional and personal journey. “It's not about avoiding change, but about growing through it.”",
         "id": "Kami ingin memulai perjalanan The Map dengan kursus Adaptabilitas dan Resiliensi karena dalam dunia kerja yang terus berkembang, kemampuan untuk beradaptasi telah menjadi kekuatan super yang paling penting. Menjadi “siap menghadapi masa depan” bukan berarti sekadar bereaksi terhadap tantangan berikutnya yang datang, melainkan mempersiapkan diri untuk menghadapinya ketika tantangan itu tiba. Ada satu kemampuan yang paling dapat membantu Anda melakukannya: adaptabilitas. Tujuan kursus ini adalah membekali Anda dengan serangkaian tools dan mindset yang direkomendasikan untuk membantu Anda menghadapi berbagai hambatan dan perubahan yang mungkin Anda temui sepanjang perjalanan profesional dan personal Anda. “Bukan tentang menghindari perubahan, tetapi tentang bertumbuh melaluinya.”"
        }
       },
       {
        "title": {
         "en": "Reflecting on Adaptability and Resilience",
         "id": "Refleksi tentang Adaptabilitas dan Resiliensi"
        },
        "text": {
         "en": "As a working individual, you can benefit from investing in adaptability — the ability to learn efficiently and apply that learning across a variety of situations. This helps you to grow and thrive in times of change. Learn faster: absorb new knowledge and apply it effectively in real situations. Be more adaptable: adjust to different conditions and challenges. Keep growing: turn change into opportunity to develop further. You will inevitably experience ups and downs when it comes to adaptability — challenges, learning, adaptation, setbacks, growth, a stronger you. That's part of the journey. Every challenge is an opportunity to learn, adapt, and become stronger.",
         "id": "Sebagai seorang profesional, Anda dapat memperoleh banyak manfaat dengan berinvestasi pada adaptabilitas — kemampuan untuk belajar secara efisien dan menerapkan pembelajaran tersebut di berbagai situasi. Hal ini membantu Anda untuk terus berkembang dan tetap mampu bertumbuh di tengah perubahan. Belajar lebih cepat: menyerap pengetahuan baru dan menerapkannya dalam situasi nyata. Lebih adaptif: menyesuaikan diri di berbagai kondisi dan tantangan. Terus bertumbuh: mengubah perubahan menjadi peluang untuk berkembang lebih jauh. Anda pasti akan mengalami pasang surut dalam perjalanan adaptabilitas ini — tantangan, belajar, adaptasi, kegagalan, bangkit, bertumbuh lebih kuat. Itu adalah bagian dari proses. Setiap tantangan adalah kesempatan untuk belajar, beradaptasi, dan menjadi lebih kuat."
        }
       },
       {
        "title": {
         "en": "Your adaptability and resilience journey",
         "id": "Perjalanan adaptabilitas dan ketangguhan Anda"
        },
        "text": {
         "en": "Every day we have a chance to practice adaptability: to see challenges as opportunities, to keep going when things are hard, and to respond positively to the changes around us. You already do this — you have been learning, growing, and adapting since birth. Adaptability can be developed — research shows that adaptability is not a trait; it is a state, which you can develop through practice. It leads to a better you — in challenging times, being adaptable and resilient reduces stress, improves relationships, helps you make better decisions, and makes your work more rewarding. There is no better time than now to continue building your resilience, like a muscle that gets stronger with time and use.",
         "id": "Setiap hari, kita memiliki kesempatan untuk melatih kemampuan beradaptasi: melihat tantangan sebagai peluang, terus melangkah ketika keadaan sulit, dan merespons perubahan di sekitar kita secara positif. Anda sudah melakukannya — Anda telah belajar, berkembang, dan beradaptasi sejak lahir. Adaptabilitas dapat dikembangkan — menurut penelitian, adaptabilitas bukanlah sifat bawaan, melainkan suatu kondisi yang dapat dikembangkan melalui latihan. Membawa dampak positif dalam hidup Anda — dalam situasi yang menantang, kemampuan beradaptasi dan ketangguhan membantu mengurangi stres, meningkatkan kualitas hubungan, memungkinkan kita membuat keputusan yang lebih baik, serta menjadikan pekerjaan lebih bermakna. Tidak ada waktu yang lebih baik daripada sekarang untuk terus membangun ketangguhan Anda, layaknya otot yang semakin kuat seiring waktu dan penggunaannya."
        }
       },
       {
        "title": {
         "en": "Explore the three major drivers of adaptability and resilience",
         "id": "Jelajahi tiga pendorong utama adaptabilitas dan ketangguhan"
        },
        "text": {
         "en": "Learn › Grow › Thrive. 01 Active learning — set intentions and develop positive learning habits. Change, uncertainty and pressure make learning difficult, and yet these challenging times are precisely when it is most important to adapt and grow. The best way to maximize your learning, and your adaptability, is to be intentional about what you want to learn and to develop positive habits. Be intentional: turn challenges into learning opportunities. 02 Strengthen personal adaptability and resilience — develop awareness of your mindsets and well-being. Mindsets are more powerful than we once understood and are critical for adaptability; you can re-wire your brain with new, more resilient mindsets. As you develop that awareness, especially during challenging times, you increase your ability to make purposeful, more productive choices that help you thrive and adapt to change. Build inner strength: a more adaptable, resilient you. 03 Reinforce with purpose — link your actions to personal and organizational purpose. Intrinsic motivation is one of the most powerful fuels on your life journeys; a clear sense of personal meaning helps you cut through the noise of the world and channel your energy towards what matters most. Stay purpose-driven: turn meaning into momentum. “Greater adaptability. A more resilient you. A brighter tomorrow.”",
         "id": "Belajar › Berkembang › Bertumbuh. 01 Pembelajaran aktif — tetapkan tujuan dan kembangkan kebiasaan belajar yang positif. Perubahan, ketidakpastian, dan tekanan membuat proses belajar menjadi lebih menantang, dan justru pada saat-saat inilah kemampuan beradaptasi paling dibutuhkan. Cara terbaik untuk memaksimalkan pembelajaran, dan adaptabilitas Anda, adalah dengan secara sadar menetapkan apa yang ingin Anda pelajari dan mengembangkan kebiasaan belajar yang positif. Jadilah tujuan yang jelas: ubah tantangan menjadi peluang belajar. 02 Perkuat adaptabilitas dan ketangguhan pribadi — kembangkan kesadaran terhadap pola pikir dan kesejahteraan diri. Pola pikir lebih berpengaruh daripada yang sering kita kira dan sangat penting untuk adaptabilitas; Anda dapat melatih cara berpikir dengan perspektif baru dan lebih tangguh. Dengan meningkatkan kesadaran itu, terutama di masa-masa sulit, Anda akan lebih mampu membuat pilihan yang bermakna, lebih produktif, dan dapat bertahan serta beradaptasi terhadap perubahan. Bangun kekuatan dari dalam: jadi pribadi yang lebih adaptif dan tangguh. 03 Perkuat dengan tujuan yang bermakna — hubungkan tindakan Anda dengan tujuan pribadi dan tujuan organisasi. Motivasi intrinsik adalah salah satu sumber energi paling kuat dalam perjalanan hidup Anda; makna yang jelas membantu Anda menyaring hiruk-pikuk dunia dan mengarahkan energi pada hal yang benar-benar penting. Tetap berorientasi pada tujuan: ubah makna menjadi momentum. “Adaptabilitas yang lebih besar. Pribadi yang lebih tangguh. Masa depan yang lebih cerah.”"
        }
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
      "en": "20 min",
      "id": "20 mnt"
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
     "videosPlacement": "after-material",
     "videosIntro": {
      "en": "Three short films take the slides further: why the mere act of setting an intention changes how you learn, when a learning intention should come before a performance goal, and what happens when an intention is tied to something that matters to you. Watch them in order, then test yourself in the knowledge check below.",
      "id": "Tiga film singkat melanjutkan slide tadi: mengapa tindakan sederhana menetapkan niat mengubah cara kamu belajar, kapan niat belajar harus mendahului target kinerja, dan apa yang terjadi ketika niat terhubung dengan hal yang penting bagimu. Tonton berurutan, lalu uji dirimu di cek pemahaman di bawah."
     },
     "videosOutro": {
      "title": {
       "en": "Key Takeaways: Intention before performance",
       "id": "Poin Penting: Niat sebelum kinerja"
      },
      "body": [
       {
        "en": "Setting an intention focuses limited attention on what you have decided matters — that is why the mere act of setting one improves learning.",
        "id": "Menetapkan niat memusatkan perhatian yang terbatas pada apa yang kamu putuskan penting — itulah mengapa tindakan menetapkannya saja sudah memperbaiki belajar."
       },
       {
        "en": "Early in a new skill, hold performance goals back: learn first, and perform when you feel excited to show what you can do.",
        "id": "Di awal keterampilan baru, tahan dulu target kinerja: belajar dulu, dan tampil ketika kamu bersemangat menunjukkan kemampuanmu."
       },
       {
        "en": "Intentions linked to personal meaning are the ones that survive difficult, long learning — Paula's repair list only came alive once it was about her team.",
        "id": "Niat yang terhubung dengan makna pribadi adalah yang bertahan dalam belajar yang sulit dan panjang — daftar perbaikan Paula baru hidup setelah menjadi soal timnya."
       }
      ]
     },
     "videos": [
      {
       "src": "../../assets/lms/the-map/learning-intention-1-brand.mp4",
       "poster": "../../assets/lms/the-map/learning-intention-1-poster.jpg",
       "dur": "2:19",
       "title": {
        "en": "Why set a learning intention at all?",
        "id": "Mengapa perlu menetapkan niat belajar?"
       },
       "captions": {
        "en": "../../assets/lms/the-map/learning-intention-1-en.vtt",
        "id": "../../assets/lms/the-map/learning-intention-1-id.vtt"
       }
      },
      {
       "src": "../../assets/lms/the-map/learning-intention-2-brand.mp4",
       "poster": "../../assets/lms/the-map/learning-intention-2-poster.jpg",
       "dur": "2:36",
       "title": {
        "en": "Learning intention first, performance goal later",
        "id": "Niat belajar dulu, target kinerja kemudian"
       },
       "captions": {
        "en": "../../assets/lms/the-map/learning-intention-2-en.vtt",
        "id": "../../assets/lms/the-map/learning-intention-2-id.vtt"
       }
      },
      {
       "src": "../../assets/lms/the-map/learning-intention-3-brand.mp4",
       "poster": "../../assets/lms/the-map/learning-intention-3-poster.jpg",
       "dur": "2:45",
       "title": {
        "en": "Link it to meaning: Paula and the repair list",
        "id": "Hubungkan dengan makna: Paula dan daftar perbaikan"
       },
       "captions": {
        "en": "../../assets/lms/the-map/learning-intention-3-en.vtt",
        "id": "../../assets/lms/the-map/learning-intention-3-id.vtt"
       }
      }
     ],
     "material": {
      "kicker": {
       "en": "Read · 7 slides",
       "id": "Baca · 7 slide"
      },
      "title": {
       "en": "Learning Intention — Material",
       "id": "Niat Belajar — Materi"
      },
      "intro": {
       "en": "Seven slides on why the way you frame a learning intention matters: focus on the journey, link it to meaning, and turn it into a commitment you will keep. Move through them at your own pace — the slide text is available under the player.",
       "id": "Tujuh slide tentang mengapa cara kamu merumuskan niat belajar itu penting: fokus pada prosesnya, hubungkan dengan makna, lalu ubah menjadi komitmen yang benar-benar kamu jalani. Baca sesuai ritmemu — teks slide tersedia di bawah pemutar."
      },
      "base": "../../assets/lms/the-map/slides/learning-intention-",
      "slides": [
       {
        "title": {
         "en": "Learning Intention: set a clearer intention",
         "id": "Niat Belajar: tetapkan niat yang lebih jelas"
        },
        "text": {
         "en": "Set a clearer intention. Create a more meaningful learning journey. 01 Why set intentions? In a world of distractions and stimuli, setting learning intentions helps you stay focused. It improves your ability to learn and makes learning more enjoyable — a clear intention creates direction. 02 Framing our intentions: do you ever feel you are working through an endless to-do list, often losing sight of the destination and why it matters? Or that you are responding on autopilot, going through the motions, but perhaps missing opportunities to learn, grow, and adapt? You're not alone — pause, reflect, reconnect. 03 The power of adaptable people: surprisingly, the most adaptable people are not those who set the most intentions but those who frame their intentions in the right way — it's not about more intentions, but better ones. 04 Your next step: you can frame your intentions in two specific, subtle ways to improve your ability to learn and the likelihood that you will enjoy the experience — same learning, a brighter you. Intentional learning today. A more adaptable and fulfilled you tomorrow.",
         "id": "Tetapkan niat yang lebih jelas. Ciptakan perjalanan belajar yang lebih bermakna. 01 Mengapa menetapkan niat? Di dunia yang penuh distraksi dan berbagai rangsangan, menetapkan niat belajar membantu Anda tetap fokus. Hal ini meningkatkan kemampuan Anda untuk belajar dan membuat proses pembelajaran lebih menyenangkan — niat yang jelas memberi arah. 02 Merumuskan niat kita: pernahkah Anda merasa bekerja tanpa henti menyelesaikan daftar tugas, hingga kehilangan arah tentang tujuan dan alasan di balik apa yang Anda lakukan? Atau merasa hanya berjalan secara otomatis, mengikuti rutinitas, tetapi mungkin melewatkan kesempatan untuk belajar, berkembang, dan beradaptasi? Anda tidak sendirian — berhenti sejenak, refleksi, terhubung kembali. 03 Kekuatan orang yang adaptif: menariknya, orang yang paling adaptif bukanlah mereka yang menetapkan niat paling banyak, melainkan mereka yang merumuskan niat dengan cara yang tepat — bukan tentang jumlah niat, tetapi kualitasnya. 04 Langkah Anda selanjutnya: Anda dapat merumuskan niat dengan dua cara yang spesifik dan sederhana untuk meningkatkan kemampuan Anda belajar dan kemungkinan Anda menikmati prosesnya — niat hari ini, pribadi yang lebih baik di masa depan. Mulai dengan niat yang lebih sadar hari ini. Pribadi yang lebih adaptif, lebih berkembang, dan lebih bermakna menanti Anda."
        }
       },
       {
        "title": {
         "en": "Framing our intentions",
         "id": "Merumuskan niat kita"
        },
        "text": {
         "en": "The way you frame your intentions shapes your learning journey. Here are two key ways to do it. 1 Focus on the journey — learning over performance: prioritize the learning experience itself by framing your desired outcome as a learning intention rather than a performance goal. Research shows that this can help people persist and expand their learning more than if they started with a performance goal. Right approach: “I want to learn how to play softball.” Wrong approach: “I want to win the softball league trophy.” 2 Link to meaning — purpose gives energy: connect your learning experience to something personally meaningful. Research shows that personal meaning can give people a feeling of self-direction, increasing their enjoyment, interest, and excitement during learning. Right approach: “If I learn how to fix a car, I can help my friends and family if they ever run into trouble.” Wrong approach: “I don't get why I need to learn how to fix a car. I'll just take it to the repair shop when it needs fixing.” “A clearer intention today. A more meaningful learning journey tomorrow.”",
         "id": "Cara Anda merumuskan niat akan membentuk perjalanan belajar Anda. Berikut dua cara utama untuk melakukannya. 1 Fokus pada prosesnya — pembelajaran lebih dari sekadar hasil akhir: utamakan pengalaman belajar itu sendiri dengan merumuskan hasil yang Anda inginkan sebagai niat belajar, bukan sekadar target kinerja. Penelitian menunjukkan bahwa cara ini dapat membantu seseorang untuk lebih konsisten bertahan dan memperluas pembelajarannya dibandingkan jika hanya berfokus pada target kinerja. Contoh pendekatan yang tepat: “Saya ingin belajar cara bermain softball.” Contoh pendekatan yang kurang tepat: “Saya ingin memenangkan trofi liga softball.” 2 Hubungkan dengan makna — tujuan memberi energi: kaitkan pengalaman belajar Anda dengan sesuatu yang bermakna secara pribadi. Penelitian menunjukkan bahwa makna personal dapat memberikan rasa arah bagi diri, meningkatkan kesenangan, minat, dan antusiasme selama proses belajar. Contoh pendekatan yang tepat: “Jika saya belajar cara memperbaiki mobil, saya bisa membantu teman dan keluarga saya jika mereka mengalami masalah.” Contoh pendekatan yang kurang tepat: “Saya tidak mengerti mengapa saya perlu belajar cara memperbaiki mobil. Saya hanya akan membawanya ke bengkel saat perlu diperbaiki.” “Niat yang lebih jelas hari ini, perjalanan belajar yang lebih bermakna esok.”"
        }
       },
       {
        "title": {
         "en": "Why the way you frame your learning intention matters",
         "id": "Mengapa cara Anda merumuskan niat belajar itu penting?"
        },
        "text": {
         "en": "It is easy to fall into the trap of setting performance goals, when what you really need is a learning intention. So, what is the difference? The distinction may seem subtle, but knowing when to use each can make a significant impact on your growth. Performance goals — focused on outcomes: specific targets to achieve certain numbers or results. They are helpful when you have a clear outcome in mind and already possess the skills or knowledge needed to achieve it. Examples: achieve IDR 1 billion in sales this year; obtain a CFA certification; lose 5 kg in 3 months. “Focused on the results you want to achieve within a certain timeframe.” Learning intentions — focused on the journey: most useful when it's time to build new skills and knowledge, especially when you are adapting to change or trying to do things in a new way. Examples: I want to better understand financial analysis; I want to develop my communication skills with stakeholders; I want to learn how to build healthier habits in daily life. “Focused on the learning process for continuous growth.” Choose the right intention, at the right time. Today's intention matters — it builds a bigger tomorrow.",
         "id": "Kita sering terjebak untuk menetapkan target kinerja, padahal yang kita butuhkan adalah niat belajar. Jadi, apa sebenarnya perbedaannya? Perbedaannya mungkin terasa halus, tetapi dampaknya sangat besar ketika Anda tahu kapan dan bagaimana menerapkannya. Target kinerja (performance goals) — berfokus pada hasil: tujuan untuk mencapai angka tertentu atau target spesifik. Target ini berguna ketika ada hasil yang jelas ingin Anda capai dan Anda sudah memiliki keterampilan atau pengetahuan yang diperlukan. Contoh: mencapai penjualan Rp1 miliar tahun ini; mendapatkan sertifikasi CFA; menurunkan berat badan 5 kg dalam 3 bulan. “Berfokus pada hasil yang ingin dicapai dalam jangka waktu tertentu.” Niat belajar (learning intentions) — berfokus pada proses: paling bermanfaat ketika saatnya membangun keterampilan dan pengetahuan baru, terutama ketika Anda sedang beradaptasi dengan perubahan yang menantang Anda untuk melakukan sesuatu dengan cara yang berbeda. Contoh: saya ingin belajar memahami analisis keuangan dengan lebih baik; saya ingin mengembangkan kemampuan komunikasi dengan stakeholder; saya ingin lebih memahami cara membangun kebiasaan hidup sehat. “Berfokus pada proses pembelajaran untuk terus berkembang.” Pilih niat yang tepat, pada waktu yang tepat. Hasil hari ini penting, tetapi pembelajaran hari ini membangun masa depan yang lebih besar."
        }
       },
       {
        "title": {
         "en": "Focus on the journey · Link to meaning",
         "id": "Fokus pada prosesnya · Hubungkan dengan makna"
        },
        "text": {
         "en": "01 Focus on the journey — growth comes from the process, not just the outcome. Why it matters: focusing on the journey means prioritizing the learning experience itself, not just the end result. Instead of setting a specific target, you focus on the process, on discovering new ideas, and on your growth. Key takeaway: once you know that you should set a learning intention, focusing on the journey — and linking it to personal meaning — will strengthen your intention and make the learning experience more enjoyable and sustainable. 02 Link to meaning — a deeper purpose fuels a stronger and more resilient you. Why it matters: each of your experiences of becoming more adaptable and resilient will look and feel different, in part because your motivations are different. Reflection prompt: imagine what you would like your professional and personal life to look like in the coming years. Take a moment to find the things you want to be celebrating. Consider what might be exciting and what might be hard to achieve. Try to think about it in as much detail as you can. Same learning. A farther journey. When you focus on the process and connect it to what truly matters, you unlock a more fulfilling future.",
         "id": "01 Fokus pada prosesnya — pertumbuhan datang dari proses, bukan hanya dari hasil akhir. Mengapa ini penting? Fokus pada proses berarti memprioritaskan pengalaman belajar itu sendiri, bukan hanya hasil akhir. Alih-alih menetapkan target spesifik, Anda berfokus pada proses, menemukan ide-ide baru, dan pertumbuhan diri Anda. Pesan utama: setelah Anda memahami bahwa Anda sebaiknya menetapkan niat belajar, fokus pada proses — dan mengaitkannya dengan makna pribadi — akan memperkuat niat Anda serta membuat pengalaman belajar lebih menyenangkan dan berkelanjutan. 02 Hubungkan dengan makna — tujuan yang lebih dalam akan mendorong Anda menjadi pribadi yang lebih tangguh dan adaptif. Mengapa ini penting? Setiap pengalaman Anda dalam menjadi lebih adaptif dan tangguh akan terasa berbeda, sebagian karena motivasi Anda yang berbeda. Menghubungkan proses belajar dengan makna pribadi akan memberi energi yang lebih besar. Pertanyaan refleksi: bayangkan seperti apa kehidupan profesional dan pribadi yang ingin Anda miliki dalam beberapa tahun ke depan. Luangkan waktu untuk menemukan hal-hal yang ingin Anda rayakan. Lalu bayangkan langkah-langkah untuk mencapainya. Pertimbangkan apa yang mungkin menarik dan apa yang mungkin menantang. Cobalah untuk memikirkannya sedetail mungkin. Pembelajaran yang sama. Perjalanan yang lebih jauh. Ketika Anda fokus pada proses dan menghubungkannya dengan hal yang benar-benar bermakna, Anda membuka masa depan yang lebih penuh."
        }
       },
       {
        "title": {
         "en": "Take a moment to reflect",
         "id": "Luangkan waktu untuk merefleksikan"
        },
        "text": {
         "en": "As you consider the journey ahead, take a moment to reflect: what would it unlock for you (and your family, team, business unit or function, and your organization) if you were more adaptable and resilient? What will keep you motivated when things get hard? Personal meaning matters: it keeps you motivated to start the learning journey and continue it, even when things get tough. As you embark on any learning journey, consider how it connects to your personal meaning. Your personal meaning can actually guide the choices you make about your own learning. Your reflection space — jot down a few thoughts to make it real for you: what does a more adaptable and resilient you enable? What will keep you going when things get hard? Your growth has a ripple effect. When your learning is connected to what truly matters, you create a stronger future — for yourself and beyond.",
         "id": "Saat Anda memandang perjalanan ke depan, luangkan waktu untuk merefleksikan: apa yang ingin terbuka untuk Anda (dan keluarga, tim, unit bisnis, serta organisasi Anda) jika Anda menjadi pribadi yang lebih adaptif dan tangguh? Apa yang akan membuat Anda tetap termotivasi ketika menghadapi situasi yang sulit? Makna personal itu penting: ini membantu Anda tetap termotivasi untuk memulai perjalanan belajar dan melanjutkannya, bahkan ketika situasi menjadi sulit. Saat Anda memulai perjalanan belajar, pertimbangkan bagaimana hal ini terhubung dengan makna personal Anda. Makna personal tersebut dapat benar-benar memandu pilihan yang Anda buat dalam proses belajar Anda. Ruang refleksi Anda — tuliskan beberapa pemikiran yang bermakna bagi Anda: apa yang dapat membuat Anda menjadi pribadi yang lebih adaptif dan tangguh? Apa yang akan membuat Anda tetap termotivasi ketika menghadapi situasi sulit? Perjalanan belajar Anda membawa dampak yang lebih besar. Ketika Anda menghubungkan pembelajaran dengan hal yang benar-benar bermakna, Anda membuka masa depan yang lebih penuh."
        }
       },
       {
        "title": {
         "en": "What's your learning intention?",
         "id": "Apa niat belajar Anda?"
        },
        "text": {
         "en": "It's a fact: you will get more out of a learning experience if you go in with a clear intention. Let's set an intention for the experience ahead. To get you started, here are a few examples we have heard from others on their personal adaptability journeys. In case it sparks additional ideas, we have also included a reminder of the topics we will cover during this journey. Leadership & team development: “As a manager, I care deeply about my team as individuals and as a unit. We just adopted a new organizational structure, and many of us are working virtually. I want to help my teams continue to achieve their full potential in this new environment.” Health & personal wellbeing: “I want to live a long, healthy, happy life surrounded by the people I love, so I need to improve my ability to cope with stress in and out of the workplace.” Professional development & digital transformation: “I will set aside more time for professional development. Our industry is changing rapidly, and I want to learn about digital advances and how we can implement them in my organization.” Your turn: what's your learning intention for this journey? Take a moment to reflect and set your intention.",
         "id": "Faktanya: Anda akan mendapatkan lebih banyak manfaat dari pengalaman belajar jika Anda memulainya dengan niat yang jelas. Mari tetapkan niat untuk perjalanan belajar ke depan. Untuk membantu Anda memulai, berikut beberapa contoh niat yang kami dengar dari orang lain dalam perjalanan adaptabilitas mereka. Jika ini memunculkan ide tambahan bagi Anda, kami juga menyertakan pengingat topik-topik yang akan kita bahas selama perjalanan ini. Kepemimpinan dan pengembangan tim: “Sebagai seorang manajer, saya sangat peduli terhadap tim saya sebagai individu maupun sebagai satu kesatuan. Kami baru saja mengadopsi struktur organisasi yang baru, dan banyak dari kami bekerja secara virtual. Saya ingin membantu tim saya terus mencapai potensi terbaik mereka di lingkungan baru ini.” Kesehatan dan kesejahteraan pribadi: “Saya ingin menjalani hidup yang panjang, sehat, dan bahagia, dikelilingi oleh orang-orang yang saya cintai. Karena itu, saya perlu meningkatkan kemampuan saya untuk mengelola stres, baik di dalam maupun di luar tempat kerja.” Pengembangan profesional dan transformasi digital: “Saya ingin meluangkan lebih banyak waktu untuk pengembangan profesional. Industri kita berubah dengan sangat cepat, dan saya ingin mempelajari perkembangan digital terkini serta bagaimana kita dapat menerapkannya di organisasi saya.” Saatnya Anda: apa niat belajar Anda untuk perjalanan ini? Luangkan waktu sejenak untuk merefleksikan dan menetapkan niat Anda."
        }
       },
       {
        "title": {
         "en": "Key takeaways",
         "id": "Poin penting"
        },
        "text": {
         "en": "Three tools to turn learning intention into meaningful progress. 01 Choosing learning intentions vs. performance goals — use learning intentions when developing a new skill and performance goals when you already have the skill and aim to achieve something with it. 02 Focusing on the journey, not just the outcome — use this to improve your ability to learn and enjoy the experience. 03 Connecting personal meaning to learning intentions — use this to strengthen your commitment to achieving your learning intentions. Brain food, to explore further: “The most fundamental skill: intentional learning and the career advantage” (McKinsey Insights); “What are the benefits of learning orientation” (Psychology Today); “Intentional learning in practice: a 3x3x3 approach” (McKinsey Insights).",
         "id": "Tiga alat utama untuk mengubah niat belajar menjadi kemajuan yang bermakna. 01 Memilih niat belajar vs. target kinerja — gunakan niat belajar saat mengembangkan keterampilan baru, dan target kinerja saat Anda sudah memiliki keterampilan tersebut dan ingin mencapai sesuatu dengannya. 02 Fokus pada proses, bukan hanya hasil — gunakan ini untuk meningkatkan kemampuan Anda dalam belajar dan menikmati pengalaman langsungnya. 03 Menghubungkan makna personal dengan niat belajar — gunakan ini untuk memperkuat komitmen Anda dalam mencapai niat belajar. Bahan bacaan, jelajahi lebih lanjut: “Keterampilan yang paling penting di masa depan: niat belajar dan keunggulan karier” (McKinsey Insights); “Apa saja manfaat dari orientasi belajar?” (Psychology Today); “Niat belajar dalam praktik: pendekatan 3x3x3” (McKinsey Insights)."
        }
       }
      ]
     },
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
      "en": "35 min",
      "id": "35 mnt"
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
     "videosPlacement": "after-material:2",
     "videosIntro": {
      "en": "Two short films pick up where the slide left off: what mindsets are and where your default ones come from, then how to shift one — by priming, and with the Awareness–Pause–Reframe technique you will practise in the slides that follow.",
      "id": "Dua film singkat melanjutkan slide tadi: apa itu mindset dan dari mana mindset bawaanmu berasal, lalu bagaimana menggesernya — lewat priming, dan dengan teknik Awareness–Pause–Reframe yang akan kamu latih di slide berikutnya."
     },
     "videos": [
      {
       "src": "../../assets/lms/the-map/mindset-101-1-brand.mp4",
       "poster": "../../assets/lms/the-map/mindset-101-1-poster.jpg",
       "dur": "3:04",
       "title": {
        "en": "What mindsets are, and where your defaults come from",
        "id": "Apa itu mindset, dan dari mana mindset bawaanmu berasal"
       },
       "captions": {
        "en": "../../assets/lms/the-map/mindset-101-1-en.vtt",
        "id": "../../assets/lms/the-map/mindset-101-1-id.vtt"
       }
      },
      {
       "src": "../../assets/lms/the-map/mindset-101-2-brand.mp4",
       "poster": "../../assets/lms/the-map/mindset-101-2-poster.jpg",
       "dur": "1:32",
       "title": {
        "en": "Shifting a mindset: priming and the APR technique",
        "id": "Menggeser mindset: priming dan teknik APR"
       },
       "captions": {
        "en": "../../assets/lms/the-map/mindset-101-2-en.vtt",
        "id": "../../assets/lms/the-map/mindset-101-2-id.vtt"
       }
      }
     ],
     "material": [
      {
       "kicker": {
        "en": "Read first · 6 slides",
        "id": "Baca dulu · 6 slide"
       },
       "title": {
        "en": "Mindset 101 — Material",
        "id": "Mindset 101 — Materi"
       },
       "intro": {
        "en": "Start with the deck. Six slides explain what a mindset is, which mindsets build adaptability and resilience, and how the same people get different outcomes from a different mindset — the ground the sections below build on. Move through them at your own pace; the slide text is available under the player.",
        "id": "Mulai dari deknya. Enam slide menjelaskan apa itu mindset, mindset mana yang membangun adaptabilitas dan ketangguhan, dan bagaimana orang yang sama mendapat hasil berbeda dari mindset yang berbeda — landasan bagi bagian-bagian di bawah. Baca sesuai ritmemu; teks slide tersedia di bawah pemutar."
       },
       "base": "../../assets/lms/the-map/slides/mindset-101-",
       "slides": [
        {
         "title": {
          "en": "Module: Mindset 101",
          "id": "Modul: Mindset 101"
         },
         "text": {
          "en": "Start with the right mindset, and unlock a bigger tomorrow. Understand your mindset · Build positive habits · Orient your future. The journey: 01 Mindset, 02 Growth, 03 Action, 04 Future. “Everything begins with a mindset.”",
          "id": "Mulai dari pola pikir, menuju kemungkinan yang lebih besar. Pahami mindset · Bangun kebiasaan positif · Arahkan masa depan. Perjalanannya: 01 Mindset, 02 Pertumbuhan, 03 Aksi, 04 Masa depan. “Everything begins with a mindset.”"
         }
        },
        {
         "title": {
          "en": "What are mindsets?",
          "id": "Apa itu mindset?"
         },
         "text": {
          "en": "Smaller beliefs, bigger possibilities. Mindsets are your belief filters between you and a constantly changing reality: they shape what you perceive, how you feel, and how you behave. Mindsets are the belief filters between you and reality — they influence what you perceive, how you feel, and how you behave. As you just saw, they are extremely powerful. In fact, they are arguably the most important thing when it comes to adaptability and resilience. Consider your own mindsets: it is true that mindsets associated with adaptability and resilience bring about many benefits, but you do not label mindsets as simply “good” or “bad”. Instead, you aim to adopt the mindset best suited to each situation. For example, circumstances might require you to be an expert or to react based mostly on your knowledge and experience. The key to adaptability is being aware of your mindset so you can make more deliberate choices. Let's build this awareness — greater awareness, brighter tomorrows.",
          "id": "Pola pikir yang lebih kecil, membuka kemungkinan yang lebih besar. Mindset menjadi filter keyakinan antara Anda dan realitas yang selalu berubah: memengaruhi apa yang Anda lihat (persepsi), bagaimana Anda merasa (emosi), dan bagaimana Anda bertindak (perilaku). Mindset adalah filter keyakinan antara Anda dan realitas — memengaruhi apa yang Anda persepsikan, bagaimana Anda merasa, dan bagaimana Anda bertindak. Seperti yang baru saja Anda lihat, mindset sangat kuat. Bahkan, mindset bisa dibilang merupakan hal yang paling penting dalam hal kemampuan beradaptasi dan ketangguhan. Renungkan mindset Anda sendiri: memang benar bahwa mindset yang berkaitan dengan kemampuan beradaptasi dan ketangguhan membawa banyak manfaat, namun Anda tidak perlu melabeli mindset sebagai sekadar “baik” atau “buruk”. Sebaliknya, Anda perlu mengadopsi mindset yang paling sesuai dengan setiap situasi. Misalnya, ada situasi yang menuntut Anda untuk menjadi ahli atau bereaksi berdasarkan pengetahuan dan pengalaman Anda. Kunci dari kemampuan beradaptasi adalah menyadari mindset Anda, sehingga Anda dapat membuat pilihan yang lebih sadar dan terarah. Mari bangun kesadaran ini — kesadaran yang lebih besar, masa depan yang lebih cerah."
         }
        },
        {
         "title": {
          "en": "Which mindsets help build adaptability and resilience?",
          "id": "Mindset apa saja yang membantu membangun adaptabilitas dan ketangguhan?"
         },
         "text": {
          "en": "Mindsets influence how you perceive and respond to the world around you, including how you interact with others — your perception, response, well-being, fulfillment, and performance. There are a number of mindsets that improve your well-being, sense of fulfillment, and performance. These mindsets can make your lives more vibrant. Pause and think about a moment when you operated from a mindset that was not particularly helpful. What were you thinking and feeling? How did you behave? What impact did it have on you? What was the impact on others? Reflect · Grow · Move forward. Same mindset, a different tomorrow.",
          "id": "Mindset memengaruhi cara Anda memandang dan merespons dunia di sekitar Anda, termasuk bagaimana Anda berinteraksi dengan orang lain — persepsi yang lebih luas, respons yang lebih positif, kesejahteraan yang lebih baik, rasa pemenuhan yang lebih tinggi, kinerja yang lebih optimal. Ada berbagai mindset yang dapat meningkatkan kesejahteraan, rasa pemenuhan, dan kinerja Anda. Mindset ini dapat membuat hidup Anda lebih bermakna dan berwarna. Coba berhenti sejenak dan pikirkan sebuah momen ketika Anda bertindak dengan mindset yang kurang membantu. Apa yang Anda pikirkan dan rasakan saat itu? Bagaimana Anda bertindak? Dampak apa yang ditimbulkan pada Anda? Apa dampaknya terhadap orang lain? Refleksi · Berkembang · Melangkah lebih jauh. Mindset yang sama, masa depan yang berbeda."
         }
        },
        {
         "title": {
          "en": "Adopting adaptable and resilient mindsets (1/2)",
          "id": "Mengadopsi mindset yang adaptif dan tangguh (1/2)"
         },
         "text": {
          "en": "Mindsets are the belief filters between you and reality. They influence what you perceive, how you feel, and how you behave. Mindsets impact your ability to learn and, ultimately, the success and satisfaction you will experience. We all have the capacity to change our mindsets and behaviors and, consequently, our outcomes, for the better. Explore some of the mindsets that are common to adaptable and resilient people. Limiting mindsets (same thinking, same outcomes) versus adaptive mindsets (brighter perspectives, bigger possibilities). Fixed — “A challenge is a test that I pass or fail, based on my inherent abilities. If I am not already good at something, I will not do well.” vs. Growth — “I can learn to do anything I want. Challenges and mistakes are opportunities for learning and development.” Expert — “I should already know the answer. I should perform during a challenge by having the answers.” vs. Curious — “I am going to ask a lot of questions, explore, and discover. I can learn a lot from trying something new.” Reactive — “I need to identify the problem and what is causing it so I can apply tested, well-practiced solutions to bring the situation under control.” vs. Creative — “I need to lead with purpose. I will empower myself and others to explore new possibilities and experiment our way to an innovative solution.”",
          "id": "Mindset adalah filter keyakinan antara Anda dan realitas. Mindset memengaruhi apa yang Anda persepsikan, bagaimana Anda merasa, dan bagaimana Anda bertindak. Mindset berdampak pada kemampuan Anda untuk belajar dan, pada akhirnya, kesuksesan dan kepuasan yang Anda rasakan. Kita semua memiliki kemampuan untuk mengubah mindset dan perilaku kita, dan dengan demikian, hasil yang kita capai, menjadi lebih baik. Mari jelajahi beberapa mindset yang umum dimiliki oleh individu yang adaptif dan tangguh. Mindset yang membatasi (pola pikir yang sama, hasil yang sama) versus mindset yang adaptif (perspektif yang lebih luas, peluang yang lebih besar). Statis — “Tantangan adalah ujian yang bisa saya lakukan atau gagal, berdasarkan kemampuan bawaan saya. Jika saya belum cukup baik saat ini, saya tidak akan pernah bisa.” vs. Berkembang — “Saya bisa belajar melakukan apa pun yang saya inginkan. Tantangan dan kesalahan adalah peluang untuk belajar dan berkembang.” Ahli — “Saya seharusnya sudah tahu jawabannya. Saya harus tampil baik dalam sebuah tantangan dengan memberikan jawaban yang benar.” vs. Ingin tahu — “Saya akan mengajukan banyak pertanyaan, mengeksplorasi, dan menemukan hal baru. Saya bisa belajar banyak dari mencoba hal-hal baru.” Reaktif — “Saya perlu segera mengidentifikasi masalah dan penyebabnya agar saya dapat menerapkan solusi yang sudah terbukti dan teruji untuk mengendalikan situasi.” vs. Kreatif — “Saya ingin memimpin dengan tujuan. Saya akan memberdayakan diri saya dan orang lain untuk mengeksplorasi kemungkinan baru dan bereksperimen dengan cara yang inovatif dalam menemukan solusi.”"
         }
        },
        {
         "title": {
          "en": "From limiting mindsets to empowering mindsets",
          "id": "Dari mindset yang membatasi menuju mindset yang memberdayakan"
         },
         "text": {
          "en": "Different mindsets. Dramatically different outcomes. Limiting mindsets see challenges as obstacles; empowering mindsets see challenges as opportunities. Victim — “There are many factors beyond my control that affect my ability to thrive, grow, and get things done.” → Agent — “Within reason, I believe in my ability to learn new things, overcome challenges, and accomplish just about anything I put my mind to.” Scarcity — “A challenge typically involves limited resources, hard choices, and trade-offs that must be made.” → Abundance — “A challenge is typically a potential win-win situation looking to be discovered.” Certainty — “I would rather things go according to plan than take a detour that may end up better.” → Exploration — “I do not know what the future holds, so the best way to succeed is to plan ahead but be flexible and curious as I go.” Protection — “I need to prevent something bad from happening.” → Opportunity — “I could make something great happen.” New mindset, brighter tomorrow.",
          "id": "Pola pikir yang berbeda, hasil yang sangat berbeda. Mindset yang membatasi melihat tantangan sebagai hambatan; mindset yang memberdayakan melihat tantangan sebagai peluang. Victim — “Ada banyak faktor di luar kendali saya yang memengaruhi kemampuan saya untuk berkembang, bertumbuh, dan menyelesaikan sesuatu.” → Agent — “Dalam batas yang ada, saya percaya pada kemampuan saya untuk belajar hal baru, mengatasi tantangan, dan mencapai hampir apa pun yang saya fokuskan.” Scarcity — “Tantangan biasanya melibatkan sumber daya yang terbatas, pilihan yang sulit, dan trade-off yang harus dilakukan.” → Abundance — “Tantangan biasanya merupakan situasi potensial win-win yang menunggu untuk ditemukan.” Certainty — “Saya lebih memilih agar segala sesuatu berjalan sesuai rencana daripada mengambil jalan memutar yang mungkin berujung lebih baik.” → Exploration — “Saya tidak tahu apa yang masa depan bawa, sehingga cara terbaik untuk berhasil adalah merencanakan ke depan namun tetap fleksibel dan penuh rasa ingin tahu dalam setiap langkah.” Protection — “Saya perlu mencegah hal buruk dari terjadi.” → Opportunity — “Saya bisa mewujudkan sesuatu yang hebat terjadi.” Mindset baru, peluang baru, masa depan lebih cerah."
         }
        },
        {
         "title": {
          "en": "Same people. Different mindsets. Brighter outcomes.",
          "id": "Orang yang sama. Mindset yang berbeda. Hasil yang lebih cerah."
         },
         "text": {
          "en": "Discover how a shift in mindset can turn challenges into opportunities. Tanya, a collaborative team member who wants to contribute and grow. Before: “This task will be tedious. I need to make sure my team members understand the problem and then share what works well for me.” Reactive — what if she held a creative mindset and saw this as an opportunity to reframe the challenge as a possibility, an innovative solution waiting to be found? Before: “This task will be challenging since our team hasn't worked well in the past. But I bet there is a way we can work together to come out ahead.” Abundance — this is an adaptable mindset: she recognizes that there is an opportunity for everyone to come out ahead. Key takeaway: a more open and opportunity-oriented mindset helps Tanya collaborate better and create stronger outcomes for the team. Ashley, a relatively new team member who wants to make an impact. Before: “As the most experienced team member, I feel responsible for making sure we do a good job. I also feel responsible for bringing out the best in my coworkers and coming up with a great solution together.” Opportunity — this is an adaptable mindset: she recognizes that something great could come out of this and that there might be a better way to do things. Before: “I need to find extra time to learn more before our next meeting. I don't want to be the person who looks like they don't know enough.” Expert — what if instead she held a curious mindset and realized that she needs to learn all the answers at this point in the project? Key takeaway: a curious and opportunity-seeking mindset helps Ashley learn faster and unlock better solutions with others. Matthieu, a self-driven learner who wants to build confidence with new tools. Before: “I don't want my lack of experience with this software to slow down the team — I've learned new things before and am excited to get up to speed on this software. I'll think of it like a new language, something I'm good at learning.” Agent — this is an adaptable mindset: he recognizes that he is capable of influencing the outcome of this situation. Before: “I haven't really understood this software in the past, so I doubt I will this time.” Fixed — what if he held a growth mindset and saw the challenge ahead as an opportunity to learn? Key takeaway: a growth and agent mindset helps Matthieu build confidence, develop new skills, and contribute more to the team. Different mindsets, brighter possibilities.",
          "id": "Temukan bagaimana perubahan mindset dapat mengubah tantangan menjadi peluang. Tanya, seorang anggota tim yang kolaboratif yang ingin berkontribusi dan berkembang. Sebelum: “Tugas ini terasa sangat melelahkan. Saya perlu memastikan anggota tim saya memahami masalahnya, lalu berbagi apa yang menurut saya akan berhasil untuk mereka.” Reaktif — apa jadinya jika ia memiliki mindset yang kreatif dan melihat ini sebagai peluang untuk memaknai ulang tantangan tersebut, sebuah solusi inovatif yang menunggu untuk ditemukan? Sebelum: “Tugas ini akan menantang karena tim kami belum pernah bekerja dengan baik di masa lalu. Namun saya yakin ada cara agar kita bisa bekerja sama dan mencapai hasil yang lebih baik.” Kelimpahan — ini adalah mindset yang adaptif: dia menyadari bahwa ada peluang bagi semua orang untuk maju bersama. Inti pembelajaran: mindset yang lebih terbuka dan berorientasi pada peluang membantu Tanya berkolaborasi lebih baik dan menciptakan hasil yang lebih kuat bagi tim. Ashley, anggota tim yang relatif baru yang ingin memberikan dampak. Sebelum: “Sebagai anggota tim yang paling berpengalaman, saya merasa bertanggung jawab untuk memastikan kami melakukan pekerjaan dengan baik. Saya juga merasa bertanggung jawab untuk mengeluarkan yang terbaik dari rekan kerja saya dan bersama-sama menemukan solusi yang tepat.” Peluang — ini adalah mindset yang adaptif: dia menyadari bahwa sesuatu yang hebat bisa muncul dari situasi ini dan mungkin ada cara yang lebih baik untuk melakukannya. Sebelum: “Saya perlu meluangkan lebih banyak waktu untuk belajar sebelum pertemuan berikutnya. Saya tidak ingin menjadi orang yang terlihat tidak tahu apa-apa.” Ahli — bagaimana jika ia memiliki mindset yang ingin tahu dan menyadari bahwa ia perlu mempelajari semua jawaban pada titik ini dalam proyek? Inti pembelajaran: mindset yang ingin tahu dan berorientasi pada peluang membantu Ashley belajar lebih cepat dan menemukan solusi yang lebih baik bersama orang lain. Matthieu, pembelajar yang mandiri yang ingin membangun kepercayaan diri dengan alat-alat baru. Sebelum: “Saya tidak ingin kurangnya pengalaman dengan perangkat lunak ini memperlambat tim — saya telah mempelajari banyak hal baru sebelumnya dan sangat antusias untuk segera menguasai perangkat lunak ini. Saya melihatnya seperti bahasa baru, sesuatu yang saya kuasai dalam belajar.” Penggerak — ini adalah mindset yang adaptif: dia menyadari bahwa ia mampu memengaruhi hasil dari situasi ini. Sebelum: “Saya belum benar-benar memahami perangkat lunak ini di masa lalu, jadi saya ragu saya bisa melakukannya kali ini.” Tetap (fixed) — bagaimana jika ia memiliki mindset berkembang (growth mindset) dan melihat tantangan di depan sebagai peluang untuk belajar? Inti pembelajaran: mindset berkembang dan penggerak membantu Matthieu membangun kepercayaan diri, mengembangkan keterampilan baru, dan berkontribusi lebih besar bagi tim. Mindset yang berbeda, peluang yang lebih besar."
         }
        }
       ]
      },
      {
       "kicker": {
        "en": "Read next · 1 slide",
        "id": "Baca berikutnya · 1 slide"
       },
       "title": {
        "en": "Shift Our Mindsets",
        "id": "Mengubah Mindset Kita"
       },
       "intro": {
        "en": "One slide that sets up the films that follow: noticing a limiting mindset is only the start — you can shift it on purpose, and Awareness–Pause–Reframe is the technique for doing so.",
        "id": "Satu slide yang membuka film-film berikutnya: mengenali mindset yang membatasi hanyalah awal — kamu bisa mengubahnya dengan sengaja, dan Awareness–Pause–Reframe adalah tekniknya."
       },
       "base": "../../assets/lms/the-map/slides/shift-mindsets-",
       "slides": [
        {
         "title": {
          "en": "How can we shift our mindsets?",
          "id": "Bagaimana kita dapat mengubah mindset kita?"
         },
         "text": {
          "en": "Different mindsets, brighter possibilities: limiting mindset or growth mindset. More than just recognizing when you or others are holding limiting mindsets, you have the opportunity to intentionally shift those mindsets. After this slide, we have a video that introduces “Awareness–Pause–Reframe” or APR, a technique you can use both in the moment and afterward during reflection. Stay tuned for the next video: Awareness – Pause – Reframe (APR), a simple yet powerful technique to help you shift your mindset and unlock new possibilities. Same you, a brighter you. A brighter mindset builds a brighter tomorrow.",
          "id": "Mindset yang berbeda, peluang yang lebih besar: mindset yang membatasi atau mindset bertumbuh. Lebih dari sekadar mengenali kapan kita atau orang lain memiliki mindset yang membatasi, kita memiliki peluang untuk secara sadar mengubah mindset tersebut. Setelah slide ini, kita akan menonton video yang memperkenalkan “Awareness-Pause-Reframe” atau APR, sebuah teknik yang dapat Anda gunakan baik di saat itu juga maupun setelahnya saat melakukan refleksi. Nantikan video berikutnya: Awareness – Pause – Reframe (APR), teknik sederhana namun kuat untuk membantu Anda mengubah mindset dan membuka peluang baru. Anda, yang lebih baik, setiap hari. Mindset yang lebih baik, membangun masa depan yang lebih cerah."
         }
        }
       ]
      },
      {
       "kicker": {
        "en": "Read next · 4 slides",
        "id": "Baca berikutnya · 4 slide"
       },
       "title": {
        "en": "Practising APR",
        "id": "Mempraktikkan APR"
       },
       "intro": {
        "en": "Now put the technique to work. Four slides walk you through a two-minute APR practice, the reframing questions for six limiting mindsets, how to take it to your team, and the module's key takeaways.",
        "id": "Sekarang praktikkan tekniknya. Empat slide memandumu melalui latihan APR dua menit, pertanyaan pembingkaian ulang untuk enam mindset yang membatasi, cara menerapkannya ke timmu, dan poin-poin penting modul ini."
       },
       "base": "../../assets/lms/the-map/slides/practising-apr-",
       "slides": [
        {
         "title": {
          "en": "Practicing APR",
          "id": "Mempraktikkan APR"
         },
         "text": {
          "en": "Small pause, bigger possibilities: same situation, a different mindset can change everything. The beauty of APR is that it can be used at any time to shift your mindset in subtle or bold ways. Let's take two minutes to practice it right now. 1 Awareness — notice what's happening: “Think of something you have been finding challenging. What does it make you think and feel? What are your mindsets?” 2 Pause — create space: “Take a pause in this very moment to center yourself. Maybe take a few deep breaths or plant your feet on the floor.” 3 Reframe — see new possibilities: “What opportunities would there be if you were to shift your mindset?” Keep practicing: continue to think about ways you can flexibly incorporate APR in your daily practices. In particular, think about how you can practice integrating questions that will help you to reframe specific mindsets. Same challenge, a brighter you.",
          "id": "Langkah kecil, peluang yang lebih besar: situasi yang sama, mindset yang berbeda dapat mengubah segalanya. Keunggulan dari APR adalah teknik ini dapat digunakan kapan saja untuk mengubah mindset Anda, baik dengan cara yang halus maupun tegas. Mari luangkan dua menit untuk mempraktikkannya sekarang. 1 Awareness (kesadaran) — sadari apa yang terjadi: pikirkan sesuatu yang sedang Anda anggap menantang. Apa yang membuat Anda berpikir dan merasa seperti itu? Apa mindset Anda saat ini? 2 Pause (jeda) — berhenti sejenak: ambil jeda sejenak pada saat ini untuk menenangkan diri. Mungkin tarik beberapa napas dalam atau rasakan pijakan kaki Anda di lantai. 3 Reframe (ubah perspektif) — lihat peluang baru: peluang apa yang mungkin muncul jika Anda mengubah mindset Anda? Bagaimana Anda bisa melihat situasi ini dari sudut pandang yang berbeda? Terus berlatih: terus pikirkan cara-cara yang fleksibel untuk mengintegrasikan APR dalam praktik sehari-hari Anda. Secara khusus, cobalah mempraktikkan pertanyaan-pertanyaan yang dapat membantu Anda mengubah mindset tertentu. Tantangan yang sama, versi diri yang lebih baik."
         }
        },
        {
         "title": {
          "en": "Questions that open new perspectives",
          "id": "Pertanyaan yang membuka perspektif baru"
         },
         "text": {
          "en": "Different mindsets. Different questions. Bigger possibilities. 01 From fixed to growth: How can this challenge be an opportunity? What could be possible if I learn and develop from this experience? 02 From expert to curious: What questions, new perspectives, or opportunities do I want to explore? If I approach this with fresh eyes, forgetting for now what I already know, what would I get curious about? What would be possible if I could embrace the struggles that come with learning something new? 03 From reactive to creative: What is the bigger “why” that I am solving for? If this challenge were actually a hidden opportunity to create something different and better, what would I want? What could I imagine that would be important and meaningful? What is the smallest step that I can take towards getting to the end state I desire? 04 From victim to agent: What are the various ways I can influence the situation? What do I already have going for me? What capabilities, ideas, or resources could I access to successfully navigate this challenge? 05 From scarcity to abundance: What could be a win-win scenario in this situation? If I release some of the constraints on the situation, what might be a bigger opportunity? 06 From protection to opportunity: What if this is not a risk-avoidance scenario, but an opportunity-capturing scenario? What is the most audaciously good thing that can come out of this? How might I be able to encourage that to happen?",
          "id": "Mindset yang berbeda, pertanyaan yang berbeda, peluang yang lebih besar. 01 Dari fixed ke growth: Bagaimana tantangan ini bisa menjadi sebuah peluang? Apa yang mungkin terjadi jika saya belajar dan berkembang dari pengalaman ini? 02 Dari expert ke curious: Pertanyaan baru, perspektif baru, atau peluang apa yang ingin saya eksplorasi? Jika saya melihat ini dengan sudut pandang yang segar, melupakan sejenak apa yang sudah saya ketahui, apa yang akan membuat saya penasaran? Apa yang mungkin terjadi jika saya menerima tantangan dan ketidaknyamanan dalam proses belajar hal baru? 03 Dari reactive ke creative: Apa “mengapa” yang lebih besar dari masalah yang sedang saya selesaikan? Jika tantangan ini sebenarnya adalah peluang tersembunyi untuk menciptakan sesuatu yang berbeda dan lebih baik, apa yang ingin saya wujudkan? Apa langkah terkecil yang bisa saya ambil sekarang untuk menuju hasil akhir yang saya inginkan? 04 Dari victim ke agent: Apa saja cara yang bisa saya lakukan untuk memengaruhi situasi ini? Apa yang sudah saya lakukan sejauh ini untuk diri saya sendiri? Kapabilitas, ide, atau sumber daya apa lagi yang bisa saya akses untuk berhasil menghadapi tantangan ini? 05 Dari scarcity ke abundance: Apa yang bisa menjadi skenario win-win dalam situasi ini? Jika saya melepaskan beberapa batasan dalam situasi ini, peluang yang lebih besar apa yang mungkin muncul? 06 Dari protection ke opportunity: Bagaimana jika ini bukan sekadar untuk menghindari risiko, melainkan skenario yang menangkap peluang? Apa hal terbaik yang bisa muncul dari situasi ini? Bagaimana saya bisa mendorong agar hal tersebut benar-benar terjadi?"
         }
        },
        {
         "title": {
          "en": "Take it to your team",
          "id": "Terapkan ini untuk tim Anda"
         },
         "text": {
          "en": "Whether you are a manager or a peer, you can use your newfound knowledge of mindsets to nudge others in the right direction. Here are four actions you can take. 01 Role model — show it in your own actions: when people see an adaptable mindset, they are drawn to imitate it. Talk openly about your mindsets, both the helpful and unhelpful ones, and what you do to reframe your mindset. Be as specific as possible. Example: “I used to see this as a setback, but now I see it as a learning opportunity. Here's what I did to shift my perspective…” 02 Prime them — use powerful questions: using phrases is a great way to prime others. For example, to get others into an abundance mindset you might ask, “What is the win-win here?” For a growth mindset you could try, “What can we learn from this?” Example: “What's another way to look at this?” “What opportunities might this create?” 03 Help them use APR — share a simple tool: share the APR approach and help others use it. If tensions are high at a meeting, for example, and some people have adopted limiting mindsets, draw awareness to it and help team members pause. Example: “Let's take a pause, reflect on what we're assuming, and reframe this. What else could be true?” 04 Reinforce mindsets — notice and encourage: point out to others when they are demonstrating helpful mindsets and encourage them further. For example, if a colleague was operating from a creative place during a challenge, point out that it would have been easy to slip into a reactive mode and encourage everyone to keep up the creative mindset. Example: “I really appreciate how you approached that with curiosity. It opened up new possibilities for the team.” Better conversations, stronger teams.",
          "id": "Baik Anda seorang manajer maupun rekan kerja, Anda dapat menggunakan pemahaman baru tentang mindset untuk mengarahkan orang lain ke arah yang lebih positif. Berikut empat tindakan yang bisa Anda lakukan. 01 Jadilah teladan — tunjukkan dalam tindakan nyata: ketika orang lain melihat mindset yang adaptif, mereka cenderung menirunya. Bicarakan secara terbuka tentang mindset Anda, baik yang membantu maupun yang menantang, serta apa yang Anda lakukan untuk mengubahnya. Jadilah spesifik sejauh mungkin. Contoh: “Dulu saya melihat ini sebagai hambatan, tapi sekarang saya melihatnya sebagai peluang belajar. Berikut yang saya lakukan untuk mengubah cara pandang saya…” 02 Gunakan pertanyaan pemicu — ajukan pertanyaan yang kuat: pertanyaan yang tepat dapat membuka perspektif baru bagi orang lain. Misalnya, untuk membantu orang lain memiliki mindset kelimpahan (abundance), Anda bisa bertanya, “Apa hasil terbaik yang mungkin terjadi di sini?” atau “Pelajaran apa yang bisa kita ambil dari situasi ini?” Contoh: “Cara lain apa yang bisa dilihat dari situasi ini?” “Peluang apa yang bisa kita ciptakan dari sini?” 03 Bantu mereka menggunakan APR — bagikan alat yang sederhana: perkenalkan pendekatan APR (Awareness-Pause-Reframe) dan bantu orang lain mempraktikkannya. Misalnya, ketika ketegangan tinggi dalam sebuah rapat, dan Anda mengetahui beberapa orang memiliki mindset yang membatasi, arahkan mereka untuk menyadarinya dan ajak tim mengambil jeda sejenak. Contoh: “Yuk kita berhenti sejenak, refleksikan apa yang sedang kita asumsikan, dan coba lihat dari sudut pandang lain. Apa lagi yang mungkin benar?” 04 Perkuat mindset positif — berikan apresiasi dan dorongan: tunjukkan dan akui ketika orang lain mulai menunjukkan mindset yang positif, lalu dorong mereka untuk terus melakukannya. Misalnya, jika seorang rekan berani mengemukakan ide dari sudut pandang yang kreatif dalam sebuah tantangan, tekankan bahwa hal tersebut sebetulnya bisa saja menjadi reaksi defensif, dan apresiasi keberanian mereka untuk tetap terbuka. Contoh: “Saya sangat mengapresiasi cara Anda melihat hal ini dengan rasa ingin tahu. Ini membuka kemungkinan baru bagi tim.” Percakapan yang lebih baik, tim yang lebih kuat."
         }
        },
        {
         "title": {
          "en": "Key takeaways",
          "id": "Poin-poin penting"
         },
         "text": {
          "en": "Same mindset, new possibilities: same old way, or a brighter way. In this module, we have covered the following key tools. 01 Recognizing mindsets — use this to identify whether your current mindset is limiting and switch to a more adaptable one like growth or creative when needed. “Awareness is the first step towards a different tomorrow.” 02 Awareness, Pause and Reframe (APR) framework — use this in a difficult situation to shift your mindsets for greater adaptability and resilience. “Pause. Look differently. Choose what's possible.” Resources you may also wish to explore: “The power of believing that you can improve” (TED, Carol Dweck); “Growth mindset tempers the effects of poverty on academic achievement”; “How the scarcity mindset can make problems worse” (NPR, 2017). Keep exploring: a more open mindset creates a brighter future.",
          "id": "Pola pikir baru, peluang baru, masa depan yang lebih baik: pola pikir yang sama, atau jalan menuju masa depan yang lebih cerah. Dalam modul ini, kita telah membahas dua alat penting berikut. 01 Mengenali pola pikir — gunakan ini untuk mengidentifikasi apakah pola pikir Anda saat ini bersifat membatasi, dan beralih ke pola pikir yang lebih adaptif seperti growth (bertumbuh) atau creative (kreatif) saat dibutuhkan. “Kesadaran adalah langkah pertama menuju hari esok yang berbeda.” 02 Kerangka Awareness-Pause-Reframe (APR) — gunakan ini dalam situasi yang menantang untuk mengubah pola pikir Anda demi meningkatkan adaptabilitas dan ketangguhan (resiliensi). “Berhenti sejenak. Lihat dari sudut pandang berbeda. Pilih yang mungkin.” Referensi tambahan yang dapat Anda eksplorasi: “Kekuatan keyakinan bahwa Anda bisa berkembang” (TED, Carol Dweck); “Growth mindset tempers the effects of poverty on academic achievement”; “Bagaimana pola pikir kelangkaan dapat memperburuk masalah” (NPR, 2017). Teruslah belajar: pola pikir yang lebih terbuka menciptakan masa depan yang lebih cerah."
         }
        }
       ]
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
     "youtube": {
      "id": "vwt9tEcDRgA",
      "kicker": {
       "en": "Watch · Closing film",
       "id": "Tonton · Film penutup"
      },
      "title": {
       "en": "Foundational Mindset — closing film",
       "id": "Pola Pikir Dasar — film penutup"
      },
      "intro": {
       "en": "A film to consolidate the module before you test yourself. Play it here, with English or Bahasa Indonesia subtitles where YouTube provides them, then continue to the knowledge check below.",
       "id": "Sebuah film untuk merangkum modul ini sebelum kamu menguji diri. Putar di sini, dengan teks bahasa Inggris atau Bahasa Indonesia bila YouTube menyediakannya, lalu lanjutkan ke cek pemahaman di bawah."
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
     "material": [
      {
       "kicker": {
        "en": "Read first · 2 slides",
        "id": "Baca dulu · 2 slide"
       },
       "title": {
        "en": "Self-Leadership Foundations — Material",
        "id": "Fondasi Kepemimpinan Diri — Materi"
       },
       "intro": {
        "en": "Start with the deck. Two slides frame what self-leadership is for — effectiveness, not efficiency — and the four moves this module builds: know yourself, develop your mindset, take intentional action, create lasting impact. Then watch the film that follows.",
        "id": "Mulai dari deknya. Dua slide membingkai untuk apa kepemimpinan diri — efektivitas, bukan efisiensi — dan empat langkah yang dibangun modul ini: kenali diri, kembangkan pola pikir, ambil tindakan nyata, ciptakan dampak. Lalu tonton film yang mengikutinya."
       },
       "base": "../../assets/lms/the-map/slides/self-leadership-",
       "slides": [
        {
         "title": {
          "en": "Self-Leadership Foundations",
          "id": "Self-Leadership Foundations"
         },
         "text": {
          "en": "Discover · Reflect · Grow · Lead. Building greater self-awareness, mindsets, and habits to become the best version of yourself — in your career, work, and life. Know yourself: understand your mindsets and how they influence your decisions, behaviors, and outcomes. Develop your mindset: shift to more adaptive mindsets such as growth and creative when challenges arise. Take intentional action: use practical tools and frameworks to overcome challenges and unlock new opportunities. Create lasting impact: lead yourself to drive sustainable growth in your career, work, and life. Mindset · Actions · Habits · Impact. A better you, a bigger tomorrow. Learn today, lead tomorrow. People grow, opportunities follow.",
          "id": "Discover · Reflect · Grow · Lead. Membangun kesadaran, pola pikir, dan kebiasaan untuk menjadi versi terbaik dari diri Anda — dalam karier, pekerjaan, dan kehidupan. Kenali diri: pahami pola pikir Anda dan bagaimana hal tersebut memengaruhi pilihan serta hasil yang Anda capai. Kembangkan pola pikir: beralih ke pola pikir yang lebih adaptif seperti growth dan creative saat dibutuhkan. Ambil tindakan nyata: gunakan alat dan kerangka kerja praktis untuk mengatasi tantangan dan membuka peluang baru. Ciptakan dampak: pimpin diri Anda untuk mencapai pertumbuhan berkelanjutan dalam karier, pekerjaan, dan kehidupan. Mindset · Actions · Habits · Impact. A better you, a bigger tomorrow. Learn today, lead tomorrow. People grow, opportunities follow."
         }
        },
        {
         "title": {
          "en": "Effectiveness, not efficiency",
          "id": "Efektivitas, bukan efisiensi"
         },
         "text": {
          "en": "Self-Leadership Foundations. This course is not about efficiency (getting things done quickly) or success (although effective people tend to enjoy success). It's about effectiveness — the ability to get desired results again and again, in a sustainable manner following principles of effectiveness. And it all starts with changes in paradigms. Objective: commit to increasing your personal effectiveness by accepting that character and consistently living specific habits yields true effectiveness. Better mindsets, brighter outcomes. Small better choices, brighter tomorrows.",
          "id": "Fondasi Kepemimpinan Diri. Kursus ini bukan tentang efisiensi (menyelesaikan pekerjaan dengan cepat) atau kesuksesan (meskipun orang yang efektif cenderung meraih kesuksesan). Ini tentang efektivitas — kemampuan untuk mencapai hasil yang diinginkan, berulang kali, secara berkelanjutan dengan mengikuti prinsip-prinsip efektivitas. Dan semuanya dimulai dari perubahan paradigma. Tujuan: berkomitmen untuk meningkatkan efektivitas diri dengan menyadari bahwa karakter dan kebiasaan yang dijalankan secara konsisten akan menghasilkan efektivitas yang sesungguhnya. Pola pikir lebih baik, pilihan lebih cerdas, masa depan lebih cerah. Langkah kecil, perubahan besar, hari esok."
         }
        }
       ]
      },
      {
       "kicker": {
        "en": "Read next · 4 slides",
        "id": "Baca berikutnya · 4 slide"
       },
       "title": {
        "en": "The Root of Effectiveness — Material",
        "id": "Akar dari Efektivitas — Materi"
       },
       "intro": {
        "en": "After the film, four slides go to the root: effectiveness grows from the inside out, character gives it deep roots, principles matter more than methods, and lasting results come from care rather than shortcuts. Then watch the second film that follows.",
        "id": "Setelah film, empat slide menuju ke akarnya: efektivitas tumbuh dari dalam ke luar, karakter memberinya akar yang dalam, prinsip lebih penting daripada metode, dan hasil yang bertahan lahir dari perawatan, bukan jalan pintas. Lalu tonton film kedua yang mengikutinya."
       },
       "base": "../../assets/lms/the-map/slides/root-effectiveness-",
       "slides": [
        {
         "title": {
          "en": "The roots of effectiveness",
          "id": "Akar dari efektivitas"
         },
         "text": {
          "en": "Effectiveness means getting the results you want today that will yield even better results in the future. Better results start within. The roots of effectiveness: by understanding that effectiveness develops from the inside out rather than the outside in, you develop character, which can lead to lasting success. Inside out: start with mindset, values, and character. Better actions: make more intentional and effective choices. Greater results: achieve the outcomes you want today. Lasting impact: build even better opportunities for the future.",
          "id": "Efektivitas berarti mencapai hasil yang Anda inginkan hari ini yang akan menghasilkan hasil yang lebih baik di masa depan. Hasil yang lebih baik dimulai dari diri Anda. Akar dari efektivitas: dengan memahami bahwa efektivitas berasal dari dalam diri, bukan dari faktor eksternal, Anda membangun karakter yang dapat membawa pada kesuksesan jangka panjang. Mulai dari dalam diri: bangun pola pikir, nilai-nilai, dan karakter yang kuat. Tindakan yang lebih baik: ambil keputusan yang lebih sadar dan efektif. Hasil yang lebih besar: capai hasil yang Anda inginkan hari ini. Dampak yang bertahan: buka lebih banyak peluang untuk masa depan yang lebih baik."
         }
        },
        {
         "title": {
          "en": "Character and effectiveness",
          "id": "Karakter dan efektivitas"
         },
         "text": {
          "en": "Character & effectiveness. Stephen R. Covey said: “People who live by the character ethic have strong roots, deep roots. They withstand the stresses of life, and they keep growing and progressing.”",
          "id": "Karakter & efektivitas. Stephen R. Covey berkata: “Orang-orang yang hidup dengan etika karakter memiliki akar yang kuat, akar yang dalam. Mereka mampu menghadapi tekanan dalam hidup, dan mereka terus bertumbuh dan berkembang.” Karakter hari ini, masa depan yang lebih baik. Manusia bertumbuh dari dalam."
         }
        },
        {
         "title": {
          "en": "You don’t need to know it all",
          "id": "Anda tidak perlu mengetahui semuanya"
         },
         "text": {
          "en": "Principles over methods. You don’t need to know it all. “As to methods, there may be a million and then some, but principles are few. The man who grasps principles can successfully select his own methods. The man who tries methods, ignoring principles, is sure to have trouble.” — Ralph Waldo Emerson, essayist and poet.",
          "id": "Prinsip lebih penting daripada metode. Anda tidak perlu mengetahui semuanya. “Terkait metode, mungkin ada jutaan metode dan bahkan lebih, tetapi prinsip jumlahnya sedikit. Seseorang yang memahami prinsip dapat dengan sukses memilih metodenya sendiri. Namun, orang yang hanya mencoba berbagai metode dan mengabaikan prinsip, pasti akan mengalami kesulitan.” — Ralph Waldo Emerson, esayis dan penyair."
         }
        },
        {
         "title": {
          "en": "The goose that laid the golden eggs",
          "id": "Angsa yang bertelur emas"
         },
         "text": {
          "en": "A lesson on patience & effectiveness. The goose that laid the golden eggs: lasting results come from care, consistency, and a long-term mindset. A valuable goose: a man owned a goose that laid a golden egg each day. Thinking to collect all the eggs at once, he killed the goose and cut her open, only to find that she was just like every other goose. There were no golden eggs inside her, and no goose to produce more. The key lesson: to get the golden eggs, you have to take care of the goose. Effectiveness requires investment over time — a lifelong process to get the results you want over and over again. Key takeaway: sustainable results come from nurturing what creates value, not from shortcuts.",
          "id": "Pelajaran tentang kesabaran & efektivitas. Angsa yang bertelur emas: hasil yang berkelanjutan lahir dari perawatan, konsistensi, dan pola pikir jangka panjang. Seekor angsa yang berharga: seorang pria memiliki seekor angsa yang bertelur emas setiap hari. Dengan keinginan mengumpulkan semua telur sekaligus, ia membunuh angsa tersebut dan membukanya, hanya untuk menemukan bahwa ia sama seperti angsa lainnya. Tidak ada telur emas di dalamnya, dan tidak ada lagi angsa yang bisa menghasilkan telur emas. Pelajaran utama: untuk mendapatkan telur emas, Anda harus merawat angsa tersebut. Efektivitas membutuhkan investasi dari waktu ke waktu — sebuah proses jangka panjang untuk mencapai hasil yang Anda inginkan, berulang kali. Intisari utama: hasil yang berkelanjutan lahir dari merawat apa yang menciptakan nilai, bukan dari jalan pintas."
         }
        }
       ]
      },
      {
       "kicker": {
        "en": "Read next · 5 slides",
        "id": "Baca berikutnya · 5 slide"
       },
       "title": {
        "en": "Stages of Maturity — Material",
        "id": "Tahapan Menuju Kematangan Diri — Materi"
       },
       "intro": {
        "en": "After the films, five slides trace the path from dependence to independence to interdependence, sum up the private and public victories, and show why changing your paradigms changes your habits — and why those paradigms must align with principles. Then watch the film that follows.",
        "id": "Setelah film, lima slide menelusuri jalan dari ketergantungan ke kemandirian hingga saling ketergantungan, merangkum kemenangan pribadi dan publik, dan menunjukkan mengapa mengubah paradigma mengubah kebiasaan — serta mengapa paradigma itu harus selaras dengan prinsip. Lalu tonton film yang mengikutinya."
       },
       "base": "../../assets/lms/the-map/slides/stages-maturity-",
       "slides": [
        {
         "title": {
          "en": "Stages of maturity",
          "id": "Tahapan menuju kematangan diri"
         },
         "text": {
          "en": "Growth today, a stronger tomorrow. Stages of maturity: like a seed that grows into a mature tree, our personal and interpersonal effectiveness happens through natural growth. 01 Dependence — relies on others. Behaviors: rely on others, leave decisions to others, and tend to blame others. Results: lack capacity to do, don’t know what to do, and have weaker relationships. 02 Independence — takes ownership. Behaviors: get things done on your own, make your own decisions, and don’t need supervision. Results: limited to your own capacity, limited to your own ideas, and little to no feedback. 03 Interdependence — grows together. Behaviors: collaborate with others, value differing strengths, seek inclusion, and work toward a shared vision. Results: exponentially greater creativity, ideas, and results; upward cycle of improvement and growth; strong, fulfilling relationships. Dependence, the seed: needs support from others. Independence, the sprout: starts to grow on its own. Interdependence, the tree: grows higher together. Key takeaway: true maturity is a journey, not a destination. Each stage builds valuable lessons that lead to a stronger, more fulfilling version of ourselves and our relationships.",
          "id": "Pertumbuhan hari ini, masa depan yang lebih baik. Tahapan menuju kematangan diri: seperti biji yang tumbuh menjadi pohon yang kuat, efektivitas diri berkembang secara alami melalui proses pertumbuhan. 01 Ketergantungan — bertumpu pada orang lain. Perilaku: mengandalkan orang lain, menyerahkan keputusan kepada orang lain, dan cenderung menyalahkan orang lain. Hasil: kurang kapasitas untuk bertindak, tidak tahu harus berbuat apa, dan hubungan menjadi lemah. 02 Kemandirian — mengambil kendali atas diri sendiri. Perilaku: melakukan sesuatu secara mandiri, mengambil keputusan sendiri, dan tidak lagi membutuhkan pengawasan. Hasil: terbatas pada kapasitas diri sendiri, terbatas pada ide sendiri, dan minim dalam menerima umpan balik. 03 Saling ketergantungan — berkolaborasi untuk hasil yang lebih besar. Perilaku: bekerja sama dengan orang lain, menghargai perbedaan kekuatan, mencari inklusi, dan bergerak menuju visi bersama. Hasil: kreativitas, ide, dan hasil yang jauh lebih besar, siklus peningkatan dan pertumbuhan berkelanjutan, serta hubungan yang lebih kuat dan bermakna. Ketergantungan, biji: butuh dukungan dari luar. Kemandirian, tunas: mulai tumbuh secara mandiri. Saling ketergantungan, pohon yang kuat: bersama, tumbuh lebih tinggi. Kematangan diri adalah perjalanan, bukan tujuan akhir. Setiap tahap membawa pelajaran yang berharga untuk versi diri yang lebih baik."
         }
        },
        {
         "title": {
          "en": "Key summary — the private and public victories",
          "id": "Ringkasan utama — kemenangan pribadi dan kemenangan publik"
         },
         "text": {
          "en": "Key summary: the private and public victories. Achieving independence is a Private Victory® and must happen before the Public Victory® of interdependence. Consider your own effectiveness in terms of the Maturity Continuum. Effectiveness is getting results today so you can get even better results in the future. Lasting effectiveness is rooted in strong character. Increased effectiveness comes by growing from dependence to independence to interdependence.",
          "id": "Ringkasan utama: kemenangan pribadi dan kemenangan publik. Mencapai kemandirian adalah Kemenangan Pribadi, dan harus terjadi sebelum Kemenangan Publik yaitu saling ketergantungan. Pertimbangkan efektivitas diri Anda berdasarkan Kontinuum Kematangan. Efektivitas adalah tentang mendapatkan hasil hari ini, sehingga Anda dapat mencapai hasil yang lebih baik di masa depan. Efektivitas jangka panjang berakar pada karakter yang kuat. Peningkatan efektivitas terjadi melalui pertumbuhan dari ketergantungan, menuju kemandirian, hingga saling ketergantungan."
         }
        },
        {
         "title": {
          "en": "Change your paradigms; change your habits",
          "id": "Ubah paradigma Anda; ubah kebiasaan Anda"
         },
         "text": {
          "en": "Mindset shapes actions. Change your paradigms; change your habits. Our results depend on what we do. And what we do depends on how we see the world around us. Therefore, if you want to change your habits, begin by changing your paradigms. What are paradigms? Paradigms are the way we see, understand, and interpret the world — our mental map. Paradigms are deeper than attitudes and behaviors, and changing your paradigm can result in greater changes than changing your behaviors. Different paradigms, a clearer tomorrow: see differently, understand more deeply, interpret the world, different actions, better results.",
          "id": "Pola pikir membentuk tindakan. Ubah paradigma Anda; ubah kebiasaan Anda. Hasil yang kita capai bergantung pada apa yang kita lakukan. Dan apa yang kita lakukan bergantung pada bagaimana kita melihat dunia di sekitar kita. Oleh karena itu, jika Anda ingin mengubah kebiasaan Anda, mulailah dengan mengubah paradigma Anda. Apa itu paradigma? Paradigma adalah cara kita melihat, memahami, dan menafsirkan dunia — peta mental kita. Paradigma lebih mendalam daripada sekadar sikap dan perilaku, dan mengubah paradigma dapat menghasilkan perubahan yang lebih besar dibandingkan dengan hanya mengubah perilaku Anda. Perspektif berbeda, masa depan yang lebih cerah: melihat lebih jernih, memahami lebih dalam, menafsirkan dunia dengan lebih baik, tindakan yang lebih tepat, hasil yang lebih baik."
         }
        },
        {
         "title": {
          "en": "Key summary — paradigm change",
          "id": "Ringkasan utama — perubahan paradigma"
         },
         "text": {
          "en": "Key summary. “If you want to make minor changes in your life, work on your behavior. But if you want to make significant, quantum breakthroughs, work on your paradigms.” In order to be effective, you need to invest in Private and Public Victories. Highly effective people have effective habits. The most effective way to change your habits is by changing your paradigms. Behavior change → paradigm change.",
          "id": "Ringkasan utama. “Jika Anda ingin membuat perubahan kecil dalam hidup Anda, fokuslah pada perilaku Anda. Namun jika Anda ingin membuat terobosan besar yang signifikan, fokuslah pada paradigma Anda.” Untuk menjadi efektif, Anda perlu berinvestasi pada Kemenangan Pribadi dan Kemenangan Publik. Orang yang sangat efektif memiliki kebiasaan yang efektif. Cara paling efektif untuk mengubah kebiasaan Anda adalah dengan mengubah paradigma Anda. Perubahan perilaku → perubahan paradigma. Perspektif baru, masa depan lebih cerah."
         }
        },
        {
         "title": {
          "en": "Align paradigms with principles",
          "id": "Selaraskan paradigma dengan prinsip"
         },
         "text": {
          "en": "Align paradigms with principles. Principles are timeless, universal, and self-evident, and they operate whether or not we accept or understand them. Effective paradigms lead to effective behavior. Effective people align their paradigms with principles of effectiveness. Principles — timeless & universal: principles are timeless, universal, and self-evident, and they operate whether or not we accept or understand them. Paradigms — shape how we see: effective people align their paradigms with principles of effectiveness. Behavior — drive effective action: effective paradigms lead to effective behavior. Right principles, a brighter tomorrow.",
          "id": "Selaraskan paradigma dengan prinsip. Prinsip bersifat abadi, universal, dan sudah jelas kebenarannya, serta tetap berlaku apakah kita menerima atau memahaminya atau tidak. Paradigma yang efektif akan menghasilkan perilaku yang efektif. Orang yang efektif menyelaraskan paradigma mereka dengan prinsip-prinsip efektivitas. Prinsip — bersifat abadi & universal: prinsip bersifat abadi, universal, dan sudah jelas kebenarannya, serta tetap berlaku apakah kita menerima atau memahaminya atau tidak. Paradigma — membentuk cara kita melihat: orang yang efektif menyelaraskan paradigma mereka dengan prinsip-prinsip efektivitas. Perilaku — menghasilkan tindakan yang efektif: paradigma yang efektif akan menghasilkan perilaku yang efektif. Prinsip yang tepat, masa depan yang lebih cerah."
         }
        }
       ]
      }
     ],
     "youtube": [
      {
       "id": "6RgN7bJgKwQ",
       "placement": "after-material:1",
       "kicker": {
        "en": "Watch · Lesson film",
        "id": "Tonton · Film pelajaran"
       },
       "title": {
        "en": "The 7 Habits of Highly Effective People",
        "id": "The 7 Habits of Highly Effective People"
       },
       "intro": {
        "en": "To become the leader of your own life, start by exploring Stephen Covey’s 7 Habits of Highly Effective People and the principles behind personal effectiveness through the video below.",
        "id": "Untuk menjadi pemimpin atas hidupmu sendiri, mulailah dengan menjelajahi 7 Habits of Highly Effective People dari Stephen Covey dan prinsip-prinsip di balik efektivitas pribadi melalui video di bawah ini."
       }
      },
      {
       "videos": [
        {
         "id": "oEOYFOQCcxY"
        },
        {
         "id": "RgK7ef_dgN0"
        }
       ],
       "placement": "after-material:2",
       "kicker": {
        "en": "Watch · Lesson film 2",
        "id": "Tonton · Film pelajaran 2"
       },
       "title": {
        "en": "The 7 Habits of Highly Effective People · Film 2",
        "id": "The 7 Habits of Highly Effective People · Film 2"
       },
       "intro": {
        "en": "To become the leader of your own life, explore Stephen Covey’s The 7 Habits of Highly Effective People and the principles of personal effectiveness through the videos below.",
        "id": "Untuk menjadi pemimpin atas hidupmu sendiri, jelajahi The 7 Habits of Highly Effective People dari Stephen Covey dan prinsip-prinsip efektivitas pribadi melalui video-video di bawah ini."
       }
      },
      {
       "id": "2Piokr05tt4",
       "placement": "after-material:3",
       "kicker": {
        "en": "Watch · Lesson film 3",
        "id": "Tonton · Film pelajaran 3"
       },
       "title": {
        "en": "How Your Lens Shapes Your Results · Film 3",
        "id": "Bagaimana Cara Pandang Membentuk Hasil · Film 3"
       },
       "intro": {
        "en": "A film to consolidate the stages of maturity and the paradigm principle before you move on. Play it here, with English or Bahasa Indonesia subtitles where YouTube provides them, then continue to Exhibit 1 below.",
        "id": "Sebuah film untuk merangkum tahapan kematangan diri dan prinsip paradigma sebelum kamu melanjutkan. Putar di sini, dengan teks bahasa Inggris atau Bahasa Indonesia bila YouTube menyediakannya, lalu lanjutkan ke Peraga 1 di bawah."
       }
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
     "material": [
      {
       "kicker": {
        "en": "Read first · 4 slides",
        "id": "Baca dulu · 4 slide"
       },
       "title": {
        "en": "Acting Inside Your Control — Material",
        "id": "Bertindak dalam Kendali Anda — Materi"
       },
       "intro": {
        "en": "Four slides open the lesson: the choice that sits between stimulus and response, responsibility for behaviour, results and growth, the pause-and-respond habit with its paradigm and practices, and the principle that you carry your own weather. Read them, then watch the film that follows.",
        "id": "Empat slide membuka pelajaran ini: pilihan yang ada di antara stimulus dan respons, tanggung jawab atas perilaku, hasil, dan pertumbuhan, kebiasaan berhenti sejenak dan merespons beserta paradigma dan praktiknya, serta prinsip bahwa Anda membawa cuaca Anda sendiri. Bacalah, lalu tonton film yang mengikutinya."
       },
       "base": "../../assets/lms/the-map/slides/acting-control-",
       "slides": [
        {
         "title": {
          "en": "Ownership: acting inside your control",
          "id": "Kepemilikan diri: bertindak dalam kendali Anda"
         },
         "text": {
          "en": "The Map — Personal Audit. Chapter 2. Ownership: Acting Inside Your Control. Greater progress starts when you focus on what you can control, not what you can’t. Awareness — see clearly. Ownership — take action. Progress — create impact. “Discipline today creates a freer tomorrow.” Same effort. A brighter tomorrow.",
          "id": "The Map — Audit Diri. Bab 2. Kepemilikan Diri: Bertindak dalam Kendali Anda. Kemajuan yang lebih besar dimulai ketika Anda fokus pada hal-hal yang dapat Anda kendalikan, bukan pada hal-hal yang tidak bisa. Kesadaran — lihat dengan lebih jelas. Kepemilikan — ambil tindakan. Kemajuan — ciptakan dampak nyata. “Disiplin hari ini menciptakan kebebasan untuk hari esok.” Upaya yang sama. Masa depan yang lebih cerah."
         }
        },
        {
         "title": {
          "en": "Responsible for behavior, results, and growth",
          "id": "Bertanggung jawab atas perilaku, hasil, dan pertumbuhan"
         },
         "text": {
          "en": "You have a choice. 1 · Between stimulus and response, there is a choice. What happens: external events can push you to react. The choice: a powerful moment to pause and choose how to respond. Your response: you can choose a proactive, intentional response. 2 · Take responsibility for what you can control. As you do, you take responsibility for your behavior, results, and growth by focusing on things you can do something about. Focus on what you can control: your actions — choose deliberately; your mindset — stay constructive; your results — create momentum; your growth — keep improving. “It’s not what happens to you, but how you choose to respond that shapes who you become.” More control, a better you.",
          "id": "Anda memiliki pilihan. 1 · Antara stimulus dan respons, ada sebuah pilihan. Apa yang terjadi: peristiwa eksternal dapat mendorong Anda untuk bereaksi. Momen pilihan: sebuah momen penuh kekuatan untuk berhenti dan memilih cara merespons. Respons Anda: Anda dapat memilih respons yang proaktif dan penuh kesadaran. 2 · Ambil tanggung jawab atas hal-hal yang dapat Anda kendalikan. Dengan melakukan itu, Anda mengambil tanggung jawab atas perilaku, hasil, dan pertumbuhan Anda dengan fokus pada hal-hal yang bisa Anda lakukan. Fokus pada hal-hal yang dapat Anda kendalikan: tindakan Anda — pilih dengan sadar; pola pikir Anda — tetap konstruktif; hasil Anda — ciptakan momentum; pertumbuhan Anda — terus berkembang. “Bukan apa yang terjadi pada Anda, tetapi bagaimana Anda memilih untuk merespons yang membentuk siapa Anda di masa depan.” Lebih banyak kendali, menuju versi terbaik Anda."
         }
        },
        {
         "title": {
          "en": "Habit 1 — pause and respond",
          "id": "Kebiasaan 1 — berhenti sejenak dan merespons"
         },
         "text": {
          "en": "Today’s choices shape a brighter tomorrow. Objective: take responsibility for your choices, regardless of circumstance. Habit 1 is based on the principles of responsibility, choice, accountability, initiative, and resourcefulness. From stimulus to response: stimulus — what happens around you; pause — a moment of power to choose; your response — you choose a proactive and intentional response. “Between stimulus and response, there is a space in which you have the power to choose.” In that space lies your freedom. Highly effective paradigm: “I am free to choose and am ultimately responsible for my happiness.” Highly effective practices: 1 pause and respond based on principles and desired results; 2 use proactive language; 3 focus on your Circle of Influence; 4 become a Transition Person. Greater awareness — see more clearly. Better choices — act with intention. Real results — create momentum. Sustainable growth — become a better version of yourself.",
          "id": "Pilihan hari ini menentukan arah masa depan Anda. Tujuan: bertanggung jawab atas pilihan Anda, terlepas dari keadaan. Kebiasaan 1 didasarkan pada prinsip tanggung jawab, pilihan, akuntabilitas, inisiatif, dan kemampuan memanfaatkan sumber daya. Dari reaksi ke respons: stimulus — apa yang terjadi di sekitar Anda; berhenti sejenak — momen penuh kekuatan untuk memilih; respons Anda — Anda dapat memilih respons yang proaktif dan penuh kesadaran. “Di antara stimulus dan respons, ada ruang di mana Anda memiliki pilihan.” Di sinilah kekuatan Anda berada. Paradigma yang sangat efektif: “Saya bebas memilih dan pada akhirnya bertanggung jawab atas kebahagiaan saya.” Praktik yang sangat efektif: 1 berhenti sejenak dan merespons berdasarkan prinsip serta hasil yang diinginkan; 2 gunakan bahasa proaktif; 3 fokus pada Lingkaran Pengaruh Anda; 4 jadilah Pribadi Pembawa Perubahan. Kesadaran lebih tinggi — melihat lebih jelas. Pilihan lebih baik — bertindak dengan sadar. Hasil lebih nyata — menciptakan momentum. Pertumbuhan berkelanjutan — menjadi versi terbaik diri Anda."
         }
        },
        {
         "title": {
          "en": "Carry your own weather",
          "id": "Bawalah cuaca Anda sendiri"
         },
         "text": {
          "en": "Each of us faces challenges, big and small. Habit 1 is based on the principle that your life is the result of your own decisions. You have the power to choose your response to what happens to you.",
          "id": "Setiap dari kita menghadapi tantangan, besar maupun kecil. Kebiasaan 1 didasarkan pada prinsip bahwa hidup Anda adalah hasil dari keputusan Anda sendiri. Anda memiliki kekuatan untuk memilih bagaimana merespons apa yang terjadi pada Anda."
         }
        }
       ]
      },
      {
       "kicker": {
        "en": "Read next · 4 slides",
        "id": "Baca berikutnya · 4 slide"
       },
       "title": {
        "en": "Pause and Respond — Material",
        "id": "Berhenti Sejenak dan Merespons — Materi"
       },
       "intro": {
        "en": "After the film, four slides take the habit apart: why you can choose how you respond, a reactive versus a proactive reading of the same parking-lot moment, the four unique human gifts that make the choice possible, and a key summary. Read them, then continue to the next slides.",
        "id": "Setelah film, empat slide mengurai kebiasaan ini: mengapa Anda dapat memilih cara merespons, pembacaan reaktif versus proaktif atas momen yang sama di tempat parkir, empat karunia unik manusia yang memungkinkan pilihan itu, dan sebuah ringkasan utama. Bacalah, lalu lanjutkan ke slide berikutnya."
       },
       "base": "../../assets/lms/the-map/slides/pause-respond-",
       "slides": [
        {
         "title": {
          "en": "Habit 1 — pause and respond",
          "id": "Kebiasaan 1 — berhenti sejenak dan merespons"
         },
         "text": {
          "en": "Choose your response. Shape your tomorrow. You can’t always choose your circumstances or what happens to you, but you can choose how you respond. In fact, you can decide right now that the next time something negative happens, you will pause and respond rather than merely reacting. Pause and respond based on principles and desired results. When something happens to us, we call that a stimulus — a comment, a setback, a delay, or an unexpected change. We can respond to the stimulus in a reactive or a proactive way. Reactive response: automatic, emotional, short-term results. Proactive response: intentional, principles-based, better long-term results. “Between a stimulus and a response, there is a choice.” Choose wisely. Live more intentionally. You have the power to choose your response, and in that choice lies your freedom. Greater awareness — see clearly. Better choices — act with intention. Real results — create positive change. A brighter tomorrow — be a better version of yourself.",
          "id": "Pilih cara Anda merespons. Bentuk masa depan Anda. Anda tidak selalu bisa memilih keadaan atau apa yang terjadi pada Anda, namun Anda dapat memilih bagaimana Anda merespons. Bahkan sekarang, Anda dapat memutuskan bahwa lain kali sesuatu yang negatif terjadi, Anda akan berhenti sejenak dan merespons, bukan sekadar bereaksi. Berhenti sejenak dan merespons berdasarkan prinsip-prinsip dan hasil yang Anda inginkan. Ketika sesuatu terjadi pada kita, itu disebut sebagai stimulus — sebuah komentar, kemunduran, penundaan, atau perubahan yang tidak terduga. Kita dapat merespons stimulus secara reaktif atau proaktif. Respons reaktif: otomatis, emosional, hasil jangka pendek. Respons proaktif: disengaja / penuh kesadaran, berdasarkan prinsip, hasil jangka panjang yang lebih baik. “Di antara stimulus dan respons, terdapat sebuah pilihan.” Pilih dengan bijak. Jalani hidup dengan lebih bermakna. Anda memiliki kekuatan untuk memilih respons Anda, dan dalam pilihan tersebut terletak kebebasan Anda. Kesadaran yang lebih tinggi — melihat lebih jelas. Pilihan yang lebih baik — bertindak dengan niat. Hasil nyata — menciptakan perubahan positif. Masa depan yang lebih baik — menjadi versi terbaik dari diri Anda."
         }
        },
        {
         "title": {
          "en": "Reactive and proactive behavior",
          "id": "Perilaku reaktif dan proaktif"
         },
         "text": {
          "en": "Same situation. Different mindset. Different outcome. Think about it: imagine this situation and consider whether it is an example of proactive or reactive behavior. Stimulus: you are late to work and another car slides into the parking spot you were signaling for. Response: you yell at the other driver. Is this a reactive or proactive behavior? What could a more proactive response look like? Reactive behavior: acting on emotions, blaming others, short-term relief, long-term tension. Proactive behavior: staying calm and in control, choosing a constructive response, focused on what you can control, better long-term outcomes. Respond today for a better tomorrow.",
          "id": "Situasi yang sama. Pola pikir yang berbeda. Hasil yang berbeda. Pikirkan situasinya: bayangkan situasi ini dan pertimbangkan apakah ini merupakan contoh perilaku reaktif atau proaktif. Stimulus: Anda terlambat ke kantor dan ada mobil lain yang tiba-tiba masuk ke tempat parkir yang sedang Anda beri lampu sein. Respons: Anda membentak pengemudi mobil tersebut. Apakah ini perilaku reaktif atau proaktif? Bagaimana respons yang lebih proaktif dapat terlihat dalam situasi ini? Perilaku reaktif: digerakkan oleh emosi, menyalahkan orang lain, memberikan pelepasan emosi jangka pendek, dapat menimbulkan ketegangan jangka panjang. Perilaku proaktif: tetap tenang dan mengendalikan diri, memilih respons yang konstruktif, fokus pada hal yang dapat Anda kendalikan, menghasilkan hasil yang lebih baik dalam jangka panjang. Respons hari ini untuk masa depan yang lebih baik."
         }
        },
        {
         "title": {
          "en": "The 4 unique human gifts",
          "id": "4 karunia unik manusia"
         },
         "text": {
          "en": "Being proactive is about choosing your response to the influences in your life. Your ability to choose your response is based on the 4 unique human gifts. 1 Self-awareness — our ability to stand apart from ourselves and examine our thoughts, moods, and behaviors. Pause. Be aware. 2 Imagination — our ability to visualize beyond our present reality. See what’s possible. 3 Conscience — our ability to sense right from wrong. Choose what’s right. 4 Independent will — our ability to act, independent of external influences. Take action. Stay in control. These four gifts give you the power to choose your response — and ultimately, to shape a better future.",
          "id": "Menjadi proaktif berarti memilih respons Anda terhadap berbagai pengaruh dalam hidup. Kemampuan Anda untuk memilih respons tersebut didasarkan pada 4 karunia unik manusia. 1 Kesadaran diri — kemampuan kita untuk melangkah mundur dari diri sendiri dan menelaah pikiran, perasaan, serta perilaku kita. Berhenti sejenak. Kenali diri. 2 Imajinasi — kemampuan kita untuk membayangkan kemungkinan di luar realitas saat ini. Lihat lebih jauh. Bayangkan yang mungkin. 3 Nurani — kemampuan kita untuk membedakan yang benar dan yang salah. Pilih yang benar. 4 Kehendak bebas — kemampuan kita untuk bertindak secara mandiri, terlepas dari pengaruh eksternal. Ambil tindakan. Tetap terkendali. Keempat karunia ini memberi Anda kekuatan untuk memilih respons Anda — dan pada akhirnya, membentuk masa depan yang lebih baik."
         }
        },
        {
         "title": {
          "en": "Key summary",
          "id": "Ringkasan utama"
         },
         "text": {
          "en": "Turn insights into a brighter tomorrow. Stimulus — what happens around us. Response — a choice in our hands. A better tomorrow — the future we create. You can choose happiness and growth, regardless of circumstance. Highly effective people use the space between stimulus and response to choose a proactive response. The 4 unique human gifts allow you to respond proactively. Choose your response today for a better tomorrow. “It’s not what happens to us, but how we respond that determines our future.” — Stephen R. Covey",
          "id": "Intisari untuk langkah nyata. Stimulus — hal yang terjadi di sekitar kita. Respons — pilihan ada di tangan kita. Hasil yang lebih baik — masa depan yang kita ciptakan. Anda dapat memilih kebahagiaan dan pertumbuhan, dalam kondisi apa pun yang terjadi. Orang yang sangat efektif memanfaatkan ruang antara stimulus dan respons untuk memilih respons yang proaktif. 4 karunia unik manusia memberi Anda kekuatan untuk merespons secara proaktif. Respons hari ini untuk masa depan yang lebih baik. “Bukan apa yang terjadi pada kita, tetapi bagaimana kita meresponsnya, yang menentukan masa depan kita.” — Pilih merespons, bukan sekadar bereaksi"
         }
        }
       ]
      },
      {
       "kicker": {
        "en": "Read next · 3 slides",
        "id": "Baca berikutnya · 3 slide"
       },
       "title": {
        "en": "Use Proactive Language — Material",
        "id": "Gunakan Bahasa Proaktif — Materi"
       },
       "intro": {
        "en": "Three slides turn the habit into words: victim language against proactive language, the shaken can against the still bottle when the same pressures hit, and a key summary of one car cutting you off read two ways. Read them, then watch the film that follows.",
        "id": "Tiga slide mengubah kebiasaan ini menjadi kata-kata: bahasa korban versus bahasa proaktif, kaleng yang terguncang versus botol yang tenang saat tekanan yang sama datang, dan ringkasan utama tentang satu mobil yang memotong Anda, dibaca dengan dua cara. Bacalah, lalu tonton film yang mengikutinya."
       },
       "base": "../../assets/lms/the-map/slides/proactive-language-",
       "slides": [
        {
         "title": {
          "en": "Use proactive language",
          "id": "Gunakan bahasa proaktif"
         },
         "text": {
          "en": "Lesson 2. Speaking carefully is a large part of proactive behavior. Common practice: blame, accuse, and use victim language — focuses on problems, external factors, and what we cannot control. “It’s not my fault.” “You always make this difficult.” “I can’t do anything about it.” “They made me do it.” “I have to…” Highly effective practice: use proactive language — focuses on solutions, choices, and what we can influence. “I take responsibility.” “Let’s find a better way.” “I can choose a different approach.” “I will make it happen.” “I choose to…” “You are influenced by your genes, by your upbringing, and by your environment, but you are not determined by them.” The impact of proactive language: proactive language not only opens our mind to the space between stimulus and response, it also positively affects our brain’s chemistry and function. As you watch, consider how proactive language impacts your life. “Words shape mindsets. Mindsets shape actions. Actions shape our future.” Choose your words. Choose a better tomorrow. Key takeaway: choose your words intentionally — because they shape your mindset, your actions, and your future.",
          "id": "Pelajaran 2. Berbicara dengan penuh kesadaran merupakan bagian penting dari perilaku proaktif. Kebiasaan yang umum terjadi: menyalahkan, menuduh, dan menggunakan bahasa sebagai korban — fokus pada masalah, faktor eksternal, dan hal-hal yang tidak dapat kita kendalikan. “Ini bukan salah saya.” “Kamu selalu membuat ini jadi sulit.” “Saya tidak bisa melakukan apa pun tentang itu.” “Mereka yang membuat saya melakukannya.” “Saya harus…” Praktik yang sangat efektif: gunakan bahasa proaktif — fokus pada solusi, pilihan, dan hal-hal yang dapat kita pengaruhi. “Saya bertanggung jawab.” “Mari kita cari cara yang lebih baik.” “Saya bisa memilih pendekatan yang berbeda.” “Saya akan mewujudkannya.” “Saya memilih untuk…” “Anda dipengaruhi oleh gen Anda, pola asuh Anda, dan lingkungan Anda, tetapi Anda tidak ditentukan oleh semuanya itu.” Dampak dari bahasa proaktif: bahasa proaktif tidak hanya membuka pikiran kita terhadap ruang antara stimulus dan respons, tetapi juga berdampak positif pada kimia dan fungsi otak kita. Saat Anda menonton, pikirkan bagaimana bahasa proaktif memengaruhi kehidupan Anda. “Kata-kata membentuk pola pikir. Pola pikir membentuk tindakan. Tindakan membentuk masa depan kita.” Pilih kata-katamu. Pilih masa depan yang lebih baik. Pesan utama: pilih kata-kata Anda dengan sadar — karena kata-kata tersebut membentuk pola pikir, tindakan, dan masa depan Anda."
         }
        },
        {
         "title": {
          "en": "Reactive and proactive language",
          "id": "Bahasa reaktif dan proaktif"
         },
         "text": {
          "en": "Same situations. Different responses. A brighter outcome. Reactive language gets shaken up by what happens: angry customers, crashing computer systems, yelling bosses, missed deadlines, rush-hour traffic — pressure builds, reactions take over. Stimulus: something bad happens. You choose your response. Response: reactive or proactive? Proactive language stays calm and in control under the same angry customers, crashing systems, yelling bosses, missed deadlines and rush-hour traffic — stay calm, choose your response, create a better outcome. It’s not just what happens, but how you respond that makes the difference.",
          "id": "Situasi yang sama. Respons yang berbeda. Hasil yang lebih baik. Bahasa reaktif mudah tergoyah oleh apa yang terjadi: pelanggan yang marah, sistem komputer yang error, atasan yang membentak, deadline yang terlewat, kemacetan saat jam sibuk — tekanan menumpuk, reaksi mengambil alih. Stimulus: sesuatu yang tidak menyenangkan terjadi. Anda memilih respons Anda. Respons: reaktif atau proaktif? Bahasa proaktif tetap tenang dan dalam kendali menghadapi pelanggan marah, sistem error, atasan membentak, deadline terlewat, dan kemacetan yang sama — tetap tenang, pilih respons Anda, ciptakan hasil yang lebih baik. Bukan hanya apa yang terjadi, tetapi bagaimana kita meresponsnya yang membuat perbedaan. Pesan utama: pilih kata-kata Anda dengan sadar — karena kata-kata membentuk pola pikir, tindakan, dan masa depan Anda."
         }
        },
        {
         "title": {
          "en": "Key summary",
          "id": "Ringkasan utama"
         },
         "text": {
          "en": "Same situation. Different mindset. Different response. A better you. The same situation: a car cuts you off in traffic. How will each of these people respond? What will they say? Reactive response — emotional, impulsive, makes it worse: “Hey! What are you doing?!?!” Explodes, honks, yells, and loses their temper; does not improve the situation; often ends up in an even worse mood. Proactive response — calm, thoughtful, takes control: “No worries. Let them pass.” Chooses to let the car pass; pauses and responds proactively; stays calm and does not feel under pressure or explosive. 1 Being careful with what we say is part of proactive behavior. 2 Proactive language positively alters the chemistry and function of our brain. Choose your response. A calmer you creates a brighter day.",
          "id": "Situasi yang sama. Pola pikir yang berbeda. Respons yang berbeda. Hasil yang lebih baik. Situasi yang sama: sebuah mobil memotong Anda di jalan. Bagaimana masing-masing orang akan merespons? Apa yang akan mereka katakan? Respons reaktif — emosional, impulsif, membuat keadaan lebih buruk: “Hei! Kamu ngapain sih?!!” Meledak, membunyikan klakson, memarahi, dan kehilangan kontrol emosi; tidak menyelesaikan masalah; sering berakhir dengan suasana hati yang lebih buruk. Respons proaktif — tenang, penuh pertimbangan, tetap dalam kendali: “Tidak apa-apa. Biarkan saja mereka lewat.” Memilih untuk membiarkan mobil tersebut lewat; menarik jeda sejenak dan merespons secara proaktif; tetap tenang dan tidak merasa tertekan atau mudah meledak. 1 Berhati-hati dalam memilih kata-kata yang kita ucapkan merupakan bagian dari perilaku proaktif. 2 Bahasa proaktif secara positif mengubah kimia dan fungsi otak kita. Pilih respons Anda. Diri yang lebih tenang menciptakan hari yang lebih baik."
         }
        }
       ]
      },
      {
       "kicker": {
        "en": "Read next · 4 slides",
        "id": "Baca berikutnya · 4 slide"
       },
       "title": {
        "en": "Circle of Influence — Material",
        "id": "Lingkaran Pengaruh — Materi"
       },
       "intro": {
        "en": "After the film, four slides draw the two circles: the Circle of Concern you worry about but cannot control, the Circle of Influence you can act on, what happens when you spend your energy there, and how that makes you a Transition Person for the people around you. Read them, then watch the film that follows.",
        "id": "Setelah film, empat slide menggambar dua lingkaran: Lingkaran Kepedulian yang Anda khawatirkan tetapi tidak bisa Anda kendalikan, Lingkaran Pengaruh yang bisa Anda tindaklanjuti, apa yang terjadi ketika Anda mencurahkan energi di sana, dan bagaimana itu menjadikan Anda seorang Transition Person bagi orang-orang di sekitar Anda. Bacalah, lalu tonton film yang mengikutinya."
       },
       "base": "../../assets/lms/the-map/slides/circle-influence-",
       "slides": [
        {
         "title": {
          "en": "Circle of Influence and Transition Person",
          "id": "Lingkaran Pengaruh dan Transition Person"
         },
         "text": {
          "en": "Lesson 3. Focus your energy. Create a bigger impact. Common practice: waste time and energy on things you can’t control. Highly effective practice: focus on your Circle of Influence. Circle of Concern — things you can’t directly control: economy, traffic, other people’s opinions, global events, past events, weather. Circle of Influence — things you can control: choices, effort, communication, preparation. Focus your energy here; expand your influence. Key insights: 1 To direct your efforts effectively, you need to understand what you can and can’t influence. Part of being proactive is focusing your energy only on those things you can influence. The Circle of Influence and Circle of Concern can help you tell the difference. 2 When we are proactive and choose to spend our efforts where we will see results, we expand our Circle of Influence and increase our effectiveness. Focus on what you can influence, not what you can’t control. Key takeaway: proactivity means investing your energy where you can create results. A more proactive you creates a brighter tomorrow.",
          "id": "Pelajaran 3. Fokuskan energi Anda. Ciptakan dampak yang lebih besar. Kebiasaan umum: membuang waktu dan energi pada hal-hal yang tidak bisa Anda kendalikan. Praktik yang sangat efektif: fokus pada Lingkaran Pengaruh Anda. Lingkaran Kepedulian — hal-hal yang tidak bisa Anda kendalikan: kondisi ekonomi, lalu lintas, pendapat orang lain, peristiwa global, kejadian di masa lalu, cuaca. Lingkaran Pengaruh — hal-hal yang bisa Anda kendalikan: pilihan, usaha, komunikasi, persiapan. Fokuskan energi Anda di sini; perluas pengaruh Anda. Pembelajaran utama: 1 Untuk mengarahkan upaya Anda secara efektif, Anda perlu memahami apa yang bisa dan tidak bisa Anda pengaruhi. Bagian dari bersikap proaktif adalah memfokuskan energi hanya pada hal-hal yang bisa Anda pengaruhi. Lingkaran Pengaruh dan Lingkaran Kepedulian dapat membantu Anda membedakan keduanya. 2 Ketika kita bersikap proaktif dan memilih untuk mengalokasikan upaya kita pada hal-hal yang akan memberikan hasil, kita memperluas Lingkaran Pengaruh dan meningkatkan efektivitas kita. Fokus pada apa yang bisa Anda pengaruhi, bukan apa yang tidak bisa Anda kendalikan. Inti pembelajaran: sikap proaktif berarti menginvestasikan energi Anda pada hal-hal yang dapat menciptakan hasil. Diri yang lebih proaktif menciptakan hari esok yang lebih cerah."
         }
        },
        {
         "title": {
          "en": "Circle of Influence",
          "id": "Lingkaran Pengaruh"
         },
         "text": {
          "en": "Circle of Concern: the Circle of Concern represents things you worry, think, and talk about but over which you don’t have much control. Examples: potential natural disasters, politics, future health challenges. Circle of Influence: the Circle of Influence includes those things over which you do have control. Examples: emergency preparedness, community service, healthy lifestyle changes. Focus your energy where you have control. Less worry. More impact.",
          "id": "Fokus pada hal yang bisa Anda pengaruhi, ciptakan dampak yang lebih besar. Lingkaran Kepedulian: Lingkaran Kepedulian mencakup hal-hal yang Anda khawatirkan, pikirkan, dan bicarakan, tetapi yang tidak banyak bisa Anda kendalikan. Contoh: potensi bencana alam, politik, tantangan kesehatan di masa depan. Lingkaran Pengaruh: Lingkaran Pengaruh mencakup hal-hal yang bisa Anda kendalikan. Contoh: kesiapsiagaan darurat, kegiatan sosial, perubahan gaya hidup sehat. Fokuskan energi Anda di sini. Lebih sedikit kekhawatiran, lebih banyak dampak. Pesan utama: bersikap proaktif berarti menginvestasikan energi Anda pada hal-hal yang dapat menciptakan hasil. Diri yang lebih proaktif, menciptakan hari esok yang lebih cerah."
         }
        },
        {
         "title": {
          "en": "Your Circle of Influence",
          "id": "Lingkaran Pengaruh Anda"
         },
         "text": {
          "en": "Circle of Concern — things you worry about but can’t control: global events, economy, other people’s opinions, politics, future health challenges. Circle of Influence — things you can control: your choices, your effort, your behaviors. Awareness, choice, positive impact — a positive impact on others. Often when we influence what we can do something about, we end up benefitting others. When this happens, we can even become a Transition Person. A Transition Person sees unhealthy, harmful, abusive, or ineffective learned behaviors in themselves or around them and chooses to focus on their Circle of Influence to have an impact on those around them. They replace reactive behaviors with proactive, helpful, effective behaviors. Influence today. A better tomorrow.",
          "id": "Lingkaran Kepedulian — hal-hal yang Anda khawatirkan tetapi tidak banyak bisa Anda kendalikan: peristiwa global, kondisi ekonomi, pendapat orang lain, politik, tantangan kesehatan di masa depan. Lingkaran Pengaruh — hal-hal yang bisa Anda kendalikan: pilihan Anda, upaya Anda, perilaku Anda. Kesadaran, pilihan, dampak positif — dampak positif bagi orang lain. Sering kali, ketika kita mempengaruhi hal-hal yang bisa kita lakukan, kita juga berakhir memberikan manfaat bagi orang lain. Ketika ini terjadi, kita bahkan bisa menjadi seorang Transition Person. Seorang Transition Person melihat perilaku yang tidak sehat, merugikan, kasar, atau tidak efektif — baik dalam dirinya sendiri maupun di sekitarnya — dan memilih untuk fokus pada Lingkaran Pengaruh mereka agar dapat memberikan dampak positif bagi orang-orang di sekitarnya. Mereka menggantikan perilaku reaktif dengan perilaku proaktif, yang membantu dan efektif. Pengaruh positif hari ini, hari esok yang lebih baik."
         }
        },
        {
         "title": {
          "en": "Key takeaways",
          "id": "Ringkasan utama"
         },
         "text": {
          "en": "Key summary — the key points to remember from this lesson. 01 Circle of Concern: represents things you worry, think, and talk about but over which you don’t have much control — global events, economy, other people’s opinions, future health challenges. 02 Circle of Influence: includes those things within your Circle of Concern over which you do have control — your effort, your behaviors, your choices, helping others. 03 Transition Person: sees unhealthy, harmful, abusive, or ineffective learned behaviors in themselves or around them and chooses to focus on their Circle of Influence to have an impact on those around them; they replace reactive behaviors with proactive, helpful, and effective behaviors. A more positive me, real impact, a better environment. Change starts with you. Focus on what you can influence. Focus on what you can influence today, and create a bigger impact tomorrow. Small steps today, a bigger tomorrow.",
          "id": "Ringkasan utama — hal-hal penting yang perlu diingat dari pelajaran ini. 01 Lingkaran Kepedulian: mencakup hal-hal yang Anda khawatirkan, pikirkan, dan bicarakan, tetapi tidak banyak bisa Anda kendalikan. 02 Lingkaran Pengaruh: mencakup hal-hal yang berada dalam Lingkaran Kepedulian Anda yang bisa Anda kendalikan. 03 Transition Person: seorang Transition Person menggantikan perilaku yang tidak sehat, merugikan, atau tidak efektif dengan perilaku yang proaktif, membantu, dan efektif. Perilaku positif, dampak nyata, lingkungan lebih baik. Perubahan dimulai dari diri kita. Fokus pada hal yang bisa kita pengaruhi. Fokus pada hal yang bisa Anda pengaruhi, untuk menciptakan dampak yang lebih besar. Langkah kecil hari ini, menciptakan perubahan besar esok hari."
         }
        }
       ]
      },
      {
       "kicker": {
        "en": "Read next · 5 slides",
        "id": "Baca berikutnya · 5 slide"
       },
       "title": {
        "en": "The Power of Learning Habits — Material",
        "id": "Kekuatan Kebiasaan Belajar — Materi"
       },
       "intro": {
        "en": "After the film, five slides turn ownership towards how you learn: why learning habits decide how fast you adapt, six myths and truths to test, the three families of effective learning behaviours, the full wheel of those behaviours, and the module’s key takeaways. Read them, then watch the video that follows.",
        "id": "Setelah film, lima slide mengarahkan rasa memiliki pada cara Anda belajar: mengapa kebiasaan belajar menentukan seberapa cepat Anda beradaptasi, enam mitos dan fakta untuk diuji, tiga kelompok perilaku belajar yang efektif, roda lengkap perilaku-perilaku itu, dan poin-poin penting modul ini. Bacalah, lalu tonton video yang mengikutinya."
       },
       "base": "../../assets/lms/the-map/slides/learning-habits-",
       "slides": [
        {
         "title": {
          "en": "The power of learning habits",
          "id": "Kekuatan kebiasaan belajar"
         },
         "text": {
          "en": "Lesson insight. Small habits. Big growth. A more capable you. You have developed both good and bad habits, consciously and unconsciously, in all areas of your life, including when it comes to learning. In the face of change, you succeed based on how quickly you respond to challenges, acquire new skills, and adapt. Good learning habits can help you do all of these things. Watch the video after this slide, and ask yourself: which learning habits have I developed? Are they working for or against me? Take a moment to reflect. Respond faster — be more agile in facing change. Acquire new skills — keep growing and stay relevant. Adapt and succeed — turn challenges into opportunities. Curiosity, discipline, practice, growth mindset. Key message: your learning habits today shape your opportunities tomorrow. Keep learning. Keep growing. Better habits, a brighter you.",
          "id": "Wawasan pembelajaran. Kebiasaan kecil. Pertumbuhan besar. Versi diri Anda yang lebih mampu. Anda telah mengembangkan kebiasaan baik maupun buruk, secara sadar maupun tidak sadar, dalam semua aspek kehidupan Anda, termasuk dalam hal belajar. Dalam menghadapi perubahan, Anda akan berhasil berdasarkan seberapa cepat Anda merespons tantangan, memperoleh keterampilan baru, dan beradaptasi. Kebiasaan belajar yang baik dapat membantu Anda melakukan semua hal tersebut. Tonton video setelah slide ini, dan tanyakan pada diri Anda sendiri: kebiasaan belajar apa saja yang telah saya kembangkan? Apakah kebiasaan tersebut mendukung atau justru menghambat saya? Luangkan waktu untuk merenung. Merespons lebih cepat — lebih tangkas dalam menghadapi perubahan. Memperoleh keterampilan baru — terus berkembang dan tetap relevan. Beradaptasi dan berhasil — mengubah tantangan menjadi peluang. Rasa ingin tahu, disiplin, latihan, pola pikir bertumbuh. Pesan utama: kebiasaan belajar Anda hari ini membentuk peluang Anda di masa depan. Terus belajar. Terus bertumbuh. Jadi versi terbaik Anda. Kebiasaan yang lebih baik, hidup yang lebih cerah."
         }
        },
        {
         "title": {
          "en": "Bust the myth",
          "id": "Tantang mitosnya"
         },
         "text": {
          "en": "Let’s challenge assumptions. Not everything you hear about learning habits is true. Habits help you save time and energy by making your behaviors automatic. Forming good learning habits might require an upfront investment, but it can help you maximize your efficiency and effectiveness for the long term. Explore some common examples. As you read each of the statements, determine whether or not the following habits are truths or myths that will support your learning. Question what you hear. The right habits can unlock your potential. Common examples — myth or truth? Myth: “Cramming” is effective since you want to learn as much as possible in the shortest time. Myth: research shows that cramming does not lead to true mastery; to really learn, we need repetition and time to process the material and consolidate it into long-term memory. Truth: it is a good use of time to break down a learning intention (e.g., become an Excel wizard) into small goals (e.g., download the latest version of Excel, learn one technique first, then another, etc.). Truth: breaking big goals down into manageable, sometimes even very minor, goals has been shown to increase motivation and reduce procrastination. Myth: I’m in the driver’s seat and responsible for my own learning, but I should consistently ask for feedback and consider new perspectives. Truth: you should feel ownership over your journey, but challenging your own assumptions — and asking others to challenge them — is a critical part of learning. Think critically. Learn smarter. Grow faster. Key takeaway: good learning habits aren’t just about working harder — they’re about working smarter. Small mindset shifts, big learning outcomes.",
          "id": "Mari tantang asumsi. Tidak semua hal yang sering kita dengar tentang kebiasaan belajar itu benar. Kebiasaan membantu Anda menghemat waktu dan energi dengan membuat perilaku Anda menjadi otomatis. Membangun kebiasaan belajar yang baik memang membutuhkan investasi di awal, namun dapat membantu Anda memaksimalkan efisiensi dan efektivitas dalam jangka panjang. Mari lihat beberapa contoh umum. Saat Anda membaca setiap pernyataan berikut, tentukan apakah masing-masing merupakan fakta atau mitos yang akan mendukung proses belajar Anda. Pertanyakan apa yang Anda dengar. Kebiasaan yang tepat dapat membuka potensi Anda. Contoh umum — mitos atau fakta? Mitos: “Belajar dengan sistem kebut semalam (SKS) itu efektif karena saya ingin belajar sebanyak mungkin dalam waktu sesingkat mungkin.” Mitos: penelitian menunjukkan bahwa belajar dengan sistem kebut semalam tidak menghasilkan penguasaan materi yang sesungguhnya; untuk benar-benar belajar, kita perlu pengulangan dan waktu untuk memproses materi serta mengonsolidasikannya ke dalam memori jangka panjang. Fakta: mengalokasikan waktu untuk memecah tujuan belajar (misalnya, menjadi ahli Excel) menjadi bagian-bagian kecil (misalnya, unduh versi terbaru Excel, pelajari satu teknik dulu, lalu lanjut ke teknik lainnya) itu baik. Fakta: memecah tujuan besar menjadi langkah-langkah yang lebih kecil dan terkelola, bahkan yang sangat kecil, terbukti dapat meningkatkan motivasi dan mengurangi prokrastinasi. Mitos: saya sudah duduk di kursi pengemudi dan bertanggung jawab atas pembelajaran saya sendiri, tetapi saya seharusnya selalu meminta feedback dan mempertimbangkan perspektif baru. Fakta: Anda seharusnya merasa memiliki kendali atas perjalanan belajar Anda, namun menantang asumsi sendiri — dan meminta orang lain untuk menantangnya — adalah bagian penting dari proses belajar. Berpikir kritis. Belajar lebih cerdas. Tumbuh lebih cepat. Pesan utama: kebiasaan belajar yang baik bukan hanya tentang bekerja lebih keras — tetapi tentang bekerja lebih cerdas. Perubahan kecil dalam cara berpikir, hasil besar dalam proses belajar."
         }
        },
        {
         "title": {
          "en": "What are the behaviors of effective learners?",
          "id": "Apa saja perilaku pembelajar yang efektif?"
         },
         "text": {
          "en": "From insight to action. Having just examined some truths and myths about habits, you might be asking, well, what should I focus on? Let’s start with healthy learning behaviors, the building blocks of habits. Once you understand those good behaviors, you can then turn your energy into making them automatic. We think of learning behaviors in three big categories. Ask yourself which of the following areas is your biggest opportunity for improvement and then go through the specific learning behaviors below. If you are inspired, read them all! 01 Preparation — am I investing the time and energy I need to set myself up for success? Set goals, prepare resources, manage time, create the right environment. 02 Execution — am I learning and performing to the best of my capabilities … and enjoying myself? Stay focused, use effective strategies, keep going, find joy in the process. 03 Reflection — am I learning from my past actions? Review what worked, identify what to improve, adjust my approach, apply insights moving forward. Key takeaway: preparation, execution, and reflection are the foundation of effective learning. Choose one area to focus on today, and take a small step forward. Learn, improve, repeat, grow. Small steps today, bigger possibilities tomorrow.",
          "id": "Dari wawasan menuju tindakan. Setelah kita membahas beberapa fakta dan mitos tentang kebiasaan, Anda mungkin bertanya, apa yang sebaiknya saya fokuskan? Mari kita mulai dengan perilaku belajar yang sehat, yaitu fondasi dari kebiasaan. Setelah Anda memahami perilaku-perilaku baik ini, Anda dapat mengubahnya menjadi kebiasaan otomatis. Kita membagi perilaku belajar ke dalam tiga kategori utama. Tanyakan pada diri Anda, area mana dari berikut ini yang menjadi peluang terbesar untuk Anda tingkatkan, kemudian pelajari perilaku-perilaku spesifik di bawah ini. Jika Anda terinspirasi, bacalah semuanya! 01 Persiapan — apakah saya menginvestasikan waktu dan energi yang dibutuhkan untuk mempersiapkan diri agar bisa sukses? Tetapkan tujuan, siapkan sumber daya yang dibutuhkan, kelola waktu dengan baik, ciptakan lingkungan yang mendukung. 02 Pelaksanaan — apakah saya belajar dan memberikan performa terbaik sesuai kemampuan saya … dan menikmati prosesnya? Tetap fokus, gunakan strategi yang efektif, terus konsisten, temukan kesenangan dalam prosesnya. 03 Refleksi — apakah saya belajar dari tindakan saya sebelumnya? Tinjau apa yang sudah berhasil, identifikasi apa yang bisa ditingkatkan, sesuaikan pendekatan saya, terapkan insight untuk melangkah lebih maju. Pesan utama: persiapan, pelaksanaan, dan refleksi adalah fondasi dari pembelajaran yang efektif. Pilih satu area untuk mulai Anda fokuskan hari ini, dan ambil satu langkah kecil. Belajar, berkembang, ulangi, capai lebih baik. Langkah kecil hari ini, peluang yang lebih besar esok hari."
         }
        },
        {
         "title": {
          "en": "The behaviors of effective learners",
          "id": "Perilaku pembelajar yang efektif"
         },
         "text": {
          "en": "Turn insight into action. Effective learning isn’t about talent — it’s about consistent behaviors. These behaviors fall into three key categories: preparation, execution, and reflection. Explore each category below to see the full list of behaviors and descriptions. Preparation — set yourself up for success: plan and prioritize regular practice (make learning a habit); anticipate roadblocks (be ready for challenges); set an intention and start small (take the first step). Invest time today for a stronger tomorrow. Execution — learn, apply, and make progress: practice deliberately and on the edge (step out of your comfort zone); teach others (reinforce your learning); be mindful (stay present and focused). Turn knowledge into action. Reflection — learn from experience and keep growing: take time to reflect (pause and think); question your assumptions (stay curious); give and receive feedback (be open to different perspectives). Pause. Learn. Grow stronger. At the centre: a more capable you — learn, apply, grow, make an impact. Key takeaway: small, consistent behaviors create big learning outcomes. Choose one behavior to focus on today and take a step forward. Progress starts with how you learn.",
          "id": "Dari wawasan menuju tindakan. Pembelajaran yang efektif bukan hanya tentang bakat, tetapi tentang kebiasaan yang konsisten. Perilaku-perilaku ini terbagi ke dalam tiga kategori utama: persiapan, pelaksanaan, dan refleksi. Jelajahi setiap kategori di bawah ini untuk melihat daftar perilaku lengkap beserta penjelasannya. Persiapan — mempersiapkan diri untuk sukses: rencanakan dan prioritaskan praktik belajar secara rutin (jadikan belajar sebagai kebiasaan); antisipasi hambatan yang mungkin muncul (siapkan diri untuk tantangan); tetapkan niat dan mulai dari langkah kecil (ambil langkah pertama hari ini). Investasikan waktu hari ini untuk versi diri yang lebih kuat di masa depan. Pelaksanaan — belajar, menerapkan, dan membuat kemajuan: berlatih secara sengaja dan konsisten (keluar dari zona nyaman); ajarkan kepada orang lain (perkuat pemahaman melalui berbagi); jadi lebih sadar (mindful) (tetap hadir dan fokus). Ubah pengetahuan menjadi tindakan nyata. Refleksi — belajar dari pengalaman dan terus bertumbuh: luangkan waktu untuk refleksi (berhenti sejenak dan berpikir); pertanyakan asumsi Anda (tetap penasaran); berikan dan terima umpan balik (terbuka terhadap perspektif berbeda). Berhenti sejenak. Belajar. Bertumbuh lebih kuat. Di pusatnya: menjadi diri yang lebih mampu — belajar, menerapkan, bertumbuh, memberi dampak. Pesan utama: kebiasaan kecil yang konsisten menciptakan hasil belajar yang besar. Pilih satu perilaku untuk Anda fokuskan hari ini, dan ambil satu langkah kecil ke depan. Kemajuan dimulai dari cara Anda belajar."
         }
        },
        {
         "title": {
          "en": "Key takeaways",
          "id": "Poin-poin penting"
         },
         "text": {
          "en": "Module wrap-up. In this module, we have covered the following key tools. Use these tools to build better habits, unlock your potential, and create a brighter future for yourself. 01 Habit loop (cue, routine, reward) — use this to make your desired behaviors stick and become regular habits. Cue: notice the trigger. Routine: take action. Reward: feel the benefit. Key insight: small, consistent actions create lasting change. 02 Unlearning unhealthy habits — use this to identify ways to maintain healthy habits and unlearn unhealthy habits. Let go of what doesn’t serve you: old patterns, unhelpful behaviors, limiting beliefs. Key insight: create space for better habits by letting go of what holds you back. 03 Creating a personalized plan of action for habits — use this to identify and form new, positive learning habits for your future. Set clear goals, take action, build your future. Key insight: a clear plan turns good intentions into meaningful progress. Remember: better habits are not built overnight, but with awareness, intention, and consistent action, you can create a brighter future. Small changes lead to big results. Better habits, brighter you.",
          "id": "Rangkuman modul. Dalam modul ini, kita telah membahas beberapa alat utama yang dapat Anda gunakan untuk membangun kebiasaan yang lebih baik, mengembangkan potensi diri, dan menciptakan masa depan yang lebih cerah. 01 Siklus kebiasaan (isyarat, rutinitas, hadiah) — gunakan alat ini untuk membuat perilaku yang Anda inginkan tetap bertahan dan menjadi kebiasaan yang rutin. Isyarat: perhatikan pemicu. Rutinitas: lakukan tindakan. Hadiah: rasakan manfaatnya. Wawasan utama: tindakan kecil yang konsisten dapat menciptakan perubahan yang berkelanjutan. 02 Melepaskan kebiasaan yang tidak sehat — gunakan alat ini untuk mengidentifikasi cara mempertahankan kebiasaan sehat dan melepaskan kebiasaan yang tidak sehat. Lepaskan yang tidak lagi mendukung Anda: pola lama, perilaku yang tidak sehat, keyakinan yang membatasi. Wawasan utama: berikan ruang untuk kebiasaan yang lebih baik dengan melepaskan hal-hal yang menahan Anda. 03 Membuat rencana aksi yang dipersonalisasi — gunakan alat ini untuk mengidentifikasi dan membentuk kebiasaan belajar yang baru dan positif untuk masa depan Anda. Tetapkan tujuan yang jelas, ambil tindakan, bangun masa depan Anda. Wawasan utama: rencana yang jelas mengubah niat baik menjadi kemajuan yang bermakna. Pesan utama: kebiasaan yang lebih baik tidak terbentuk dalam semalam, tetapi dengan kesadaran, niat, dan tindakan yang konsisten, Anda dapat menciptakan masa depan yang lebih cerah. Perubahan kecil hari ini membawa hasil besar di masa depan. Kebiasaan lebih baik untuk diri Anda yang lebih cerah."
         }
        }
       ]
      },
      {
       "kicker": {
        "en": "Read next · 11 slides",
        "id": "Baca berikutnya · 11 slide"
       },
       "title": {
        "en": "The Healthy Habits — Material",
        "id": "Kebiasaan yang Sehat — Materi"
       },
       "intro": {
        "en": "After the film, eleven slides make healthy learning habits practical: the three behaviour families in depth (preparation, execution, reflection), how a behaviour becomes a habit, the habit loop, the habits worth unlearning, how to maintain the ones that serve you, a workbook plan, and the takeaways. Read them, then continue to the lesson below.",
        "id": "Setelah film, sebelas slide menjadikan kebiasaan belajar yang sehat praktis: tiga kelompok perilaku secara mendalam (persiapan, eksekusi, refleksi), bagaimana perilaku menjadi kebiasaan, siklus kebiasaan, kebiasaan yang perlu dilepaskan, cara mempertahankan yang bermanfaat, rencana workbook, dan poin-poin pentingnya. Bacalah, lalu lanjutkan ke pelajaran di bawah."
       },
       "base": "../../assets/lms/the-map/slides/healthy-habits-",
       "slides": [
        {
         "title": {
          "en": "Preparation",
          "id": "Persiapan"
         },
         "text": {
          "en": "Build better learning habits. Lay the foundation for meaningful learning by setting a clear intention, creating the right conditions, and anticipating challenges. 01 Start with clarity — set a learning intention and then break it down into subcomponents: start with a learning intention (what do you want to be able to do?); setting an intention makes it more likely the learning will happen and that you will enjoy the process; when the overall goal seems overwhelming, break it into smaller parts so you can get started quickly and keep momentum, since small accomplishments provide a rush of dopamine. 02 Make it a priority — organize your learning to create focused space and time in your schedule: break out the steps you will need to take and include them as “must-dos” rather than optional activities; by taking ownership over your learning you satisfy your human need for autonomy, and when we do things our way we feel rewarded. 03 Stay flexible — think ahead to possible obstacles and continue to calibrate: before engaging in an activity, imagine the challenges you might face, whether skill (ability to do it), will (desire to do it), or opportunity (chance to do it), and consider how you will work around them; this proactive behaviour helps you learn more efficiently in new contexts. Key takeaway: prepare with intention, create the conditions, anticipate and adapt.",
          "id": "Bangun kebiasaan belajar yang lebih baik. Letakkan fondasi untuk pembelajaran yang bermakna dengan menetapkan niat yang jelas, menciptakan kondisi yang tepat, dan mengantisipasi tantangan. 01 Mulai dengan kejelasan — tetapkan niat belajar dan uraikan menjadi bagian-bagian yang lebih kecil: mulailah dengan niat belajar (apa yang ingin Anda capai?); menetapkan niat meningkatkan kemungkinan Anda benar-benar belajar dan menikmati prosesnya; jika tujuan terasa terlalu besar, pecah menjadi bagian-bagian kecil agar bisa mulai lebih cepat dan menjaga momentum, karena pencapaian kecil memberikan dorongan dopamin yang memotivasi. 02 Jadikan prioritas — atur pembelajaran Anda untuk menciptakan ruang fokus dan waktu dalam jadwal: uraikan langkah-langkah yang perlu diambil dan masukkan ke jadwal sebagai “kegiatan wajib”, bukan kegiatan opsional; dengan mengambil kendali atas pembelajaran, Anda memenuhi kebutuhan akan otonomi, dan ketika melakukan sesuatu dengan cara sendiri kita merasa lebih puas dan termotivasi. 03 Tetap fleksibel — pikirkan potensi hambatan dan terus lakukan penyesuaian: sebelum memulai suatu aktivitas, bayangkan tantangan yang mungkin Anda hadapi, apakah keterampilan (kemampuan), kemauan (keinginan), atau kesempatan (peluang), dan pikirkan bagaimana Anda akan mengatasinya; perilaku proaktif ini membantu Anda belajar lebih efektif dalam berbagai situasi. Poin penting: persiapkan diri dengan niat, ciptakan kondisi yang tepat, antisipasi dan beradaptasi."
         }
        },
        {
         "title": {
          "en": "Execution",
          "id": "Eksekusi"
         },
         "text": {
          "en": "Build a lifetime of learning. Turn your learning plans into action and make real progress. Preparation — set yourself up for success: set a learning intention (be clear on what you want to be able to do and break it into smaller steps); organize your learning (plan the steps and schedule them as must-dos, taking ownership to fuel autonomy and motivation); anticipate challenges (think ahead about obstacles and how you will work around them). Execution — learn, apply, and push your limits: work at the right level of challenge (engage in tasks on your highest-priority areas that are difficult enough to stay interesting but not so difficult they discourage you); share what you know with others (teaching helps you process information more deeply and reinforces your own learning); master the art of paying close attention (be fully present, evaluate information in context, try new things, consider alternatives, and avoid autopilot). Reflection — pause, learn, and improve: look back on your experience (what worked well, what could be better, what lessons to draw); adjust and refine (use insights to improve your approach in the next cycle); keep the momentum (celebrate progress, no matter how small, and set your next learning goal). Continuous learning, a brighter you. Growth happens when you do.",
          "id": "Bangun kebiasaan belajar yang lebih baik. Ubah rencana belajar Anda menjadi tindakan nyata dan ciptakan kemajuan yang berarti. Persiapan — siapkan diri Anda untuk sukses: tetapkan niat belajar (jelaskan apa yang ingin dicapai dan uraikan menjadi langkah-langkah kecil); atur pembelajaran Anda (rencanakan langkah-langkahnya dan masukkan ke jadwal sebagai kegiatan wajib, ambil kendali untuk menumbuhkan otonomi dan motivasi); antisipasi tantangan (pikirkan hambatan yang mungkin muncul dan bagaimana menghadapinya). Eksekusi — belajar, terapkan, dan dorong batas diri Anda: fokus pada tingkat tantangan yang tepat (terlibat dalam tugas pada area prioritas tertinggi yang cukup sulit untuk tetap menarik, tetapi tidak sampai membuat Anda kehilangan motivasi); bagikan apa yang Anda ketahui dengan orang lain (mengajar membantu memproses informasi lebih dalam dan memperkuat pemahaman sendiri); kuasai seni memberikan perhatian penuh (hadir sepenuhnya, evaluasi informasi dalam konteks, coba hal baru, pertimbangkan alternatif, hindari “mode otopilot”). Refleksi — berhenti sejenak, belajar, dan berkembang: lihat kembali pengalaman Anda (apa yang berjalan baik, apa yang bisa lebih baik, pelajaran apa yang diambil); sesuaikan dan sempurnakan (gunakan insight untuk meningkatkan pendekatan pada siklus berikutnya); pertahankan momentum (rayakan setiap kemajuan, sekecil apa pun, dan tetapkan tujuan belajar berikutnya). Pembelajaran berkelanjutan untuk versi diri yang lebih baik. Pertumbuhan terjadi saat Anda bertindak."
         }
        },
        {
         "title": {
          "en": "Reflection",
          "id": "Refleksi"
         },
         "text": {
          "en": "Build a lifetime of learning. Pause, gain perspective, and turn your experiences into lasting learning. 01 Establish a feedback loop — get perspectives to grow: sometimes we need additional perspectives on how we’re doing, especially with skills others can see, like communication or managing others; ask for feedback from those around you and use it to enhance your learning. 02 Self-examine often — be honest with yourself: we can prevent our learning from falling into disrepair by addressing what psychologists call self-serving bias, our tendency to accept greater-than-deserved praise for our successes and deflect blame for our failures; self-examination forces us to hold up the mirror instead of ignoring what does not suit us. 03 Make time to reflect — think deeper, learn longer: reflection is the mechanism that turns experiences into lasting learning; by taking time to process what you’re learning you continually refine your understanding and skills; without reflection even the most powerful experiences eventually fade from memory. A continuous cycle for growth. Key takeaway: reflection turns experience into lasting learning.",
          "id": "Bangun kebiasaan belajar yang lebih baik. Berhenti sejenak, dapatkan perspektif baru, dan ubah pengalaman menjadi pembelajaran yang bermakna dan berkelanjutan. 01 Bangun siklus umpan balik — dapatkan perspektif untuk tumbuh: kadang-kadang kita membutuhkan perspektif tambahan tentang bagaimana kita melakukannya, terutama untuk keterampilan yang dapat dilihat orang lain, seperti komunikasi atau mengelola orang lain; mintalah masukan dari orang-orang di sekitar Anda dan gunakan untuk meningkatkan pembelajaran Anda. 02 Lakukan evaluasi diri secara rutin — jujur terhadap diri sendiri: kita dapat mencegah pembelajaran tidak berjalan sesuai harapan dengan mengatasi bias yang menguntungkan diri sendiri (self-serving bias), kecenderungan untuk lebih menerima pujian yang lebih besar dari seharusnya atas keberhasilan dan mengalihkan kesalahan atas kegagalan; evaluasi diri membantu kita melihat cermin secara lebih objektif, bukan mengabaikan hal-hal yang tidak sesuai dengan diri kita. 03 Luangkan waktu untuk refleksi — pikirkan lebih dalam, pelajari lebih lama: refleksi adalah mekanisme yang mengubah pengalaman menjadi pembelajaran yang bertahan lama; dengan meluangkan waktu untuk memproses apa yang telah dipelajari, kita terus menyempurnakan pemahaman dan keterampilan; tanpa refleksi, bahkan pengalaman yang paling berharga sekalipun pada akhirnya akan memudar dari ingatan. Siklus berkelanjutan untuk pertumbuhan. Poin penting: refleksi mengubah pengalaman menjadi pembelajaran yang bertahan lama."
         }
        },
        {
         "title": {
          "en": "How do you turn behaviors into habits?",
          "id": "Bagaimana cara mengubah perilaku menjadi kebiasaan?"
         },
         "text": {
          "en": "Small changes, bigger impact. Research shows it takes about one to two months of consistent practice to make a behavior a habit. But habit formation is about more than just time: the key is to understand how habits form and persist, and then take deliberate actions to make behaviors truly stick. Once you have identified the learning habit you want to form (for example, giving and receiving feedback) you can make the behavior stick by applying the three components of the habit loop: 1 Cue (trigger) — a signal that prompts you to start the behavior; 2 Routine (action) — the behavior you consistently take; 3 Reward (outcome) — a positive result that makes you want to repeat the behavior. Turbocharge with meaning: throughout this process you can strengthen habit formation by connecting it to sources of meaning. Choose a habit that truly resonates with you (be clear on why it is important and how it aligns with your values and goals). See the bigger purpose (giving and receiving feedback, for example, is an opportunity to build stronger connections with colleagues whose success you care about). Drive continuous personal improvement (meaning gives you the motivation to keep going, especially when it feels challenging). Key takeaway: understand the process, take intentional action, connect it to what matters.",
          "id": "Kebiasaan kecil, dampak besar. Penelitian menunjukkan bahwa dibutuhkan sekitar satu hingga dua bulan latihan yang konsisten untuk menjadikan suatu perilaku sebagai kebiasaan. Namun, membentuk kebiasaan bukan hanya soal waktu: kuncinya adalah memahami bagaimana kebiasaan terbentuk dan bertahan, lalu mengambil tindakan yang disengaja agar perilaku tersebut benar-benar melekat. Setelah Anda mengidentifikasi kebiasaan belajar yang ingin dibentuk (misalnya, memberikan dan menerima umpan balik), Anda dapat membuat perilaku tersebut melekat dengan menerapkan tiga komponen siklus kebiasaan: 1 Isyarat (cue) — pemicu yang mengingatkan Anda untuk memulai perilaku; 2 Rutinitas (routine) — tindakan atau perilaku yang Anda lakukan secara konsisten; 3 Imbalan (reward) — hasil positif yang membuat Anda ingin mengulangi perilaku tersebut. Isi “turbo” dengan makna: sepanjang proses ini Anda dapat memperkuat pembentukan kebiasaan dengan menghubungkannya pada sumber makna. Pilih kebiasaan yang benar-benar bermakna bagi Anda (pastikan selaras dengan nilai, tujuan, dan hal-hal yang Anda pedulikan). Manfaatkan umpan balik sebagai peluang (kesempatan untuk membangun hubungan yang lebih kuat dengan rekan kerja yang masa depannya Anda pedulikan). Dorong perkembangan diri yang berkelanjutan (setiap kebiasaan adalah peluang untuk menjadi versi diri yang lebih baik). Pesan utama: pahami prosesnya, ambil tindakan yang disengaja, hubungkan dengan makna."
         }
        },
        {
         "title": {
          "en": "The Habit Loop",
          "id": "Siklus Kebiasaan"
         },
         "text": {
          "en": "Build better habits. A simple but powerful framework to turn behaviors into lasting habits: cue (reminder) → routine (action) → reward (outcome), a cycle that turns behaviors into lasting habits. 1 Reminder (cue) — what’s the reminder? In other words, what will trigger your habit? You might set an obvious reminder, for example a calendar invite that pops up at the start of every week; or try a physical note or object, like a reminder you place by your desk, or a calendar out in the open featuring an X on every day that you gave or received feedback. 2 Routine (action) — what’s the routine? What steps do you need to take to follow through on this habit? Perhaps you set aside time for feedback in your standing meetings; maybe you reach out to a new person each week to ask for feedback and a different person to give feedback; in addition to putting the habit into practice, maybe you also set aside time to read articles, watch videos, and reflect on the roadblocks you might encounter and how you could solve them. 3 Reward (outcome) — what will your reward be? What will make you feel good about your routine? In approaching feedback as a learning habit, the feedback itself might be the reward; but also consider other physical, mental, or emotional rewards, such as a “happy” folder in your inbox with a set of reminders to make you smile, the satisfaction of marking that big X on your calendar, or something tangible, like ordering yourself that new book you have been wanting. “A habit is a bridge between who you are today and who you want to be tomorrow.” — James Clear. Learn intentionally, apply consistently, grow continuously.",
          "id": "Bangun kebiasaan yang lebih baik. Kerangka sederhana namun kuat untuk mengubah perilaku menjadi kebiasaan yang bertahan lama: isyarat (pemicu) → rutinitas (tindakan) → imbalan (hasil), sebuah siklus yang mengubah perilaku menjadi kebiasaan yang bertahan lama. 1 Isyarat (pemicu) — apa yang menjadi isyarat? Dengan kata lain, apa yang akan memicu kebiasaan Anda? Anda bisa menetapkan pengingat yang jelas, misalnya undangan kalender yang muncul di awal setiap minggu; atau mencoba isyarat fisik, seperti menempelkan catatan di meja kerja, atau kalender terbuka dengan tanda X setiap hari saat Anda memberikan atau menerima umpan balik. 2 Rutinitas (tindakan) — apa yang menjadi rutinitas? Langkah-langkah apa yang perlu Anda lakukan untuk menjalankan kebiasaan ini? Mungkin Anda meluangkan waktu khusus untuk umpan balik dalam rapat rutin; mungkin Anda menghubungi satu orang baru setiap minggu untuk meminta umpan balik dan orang lain untuk memberikan umpan balik; selain mempraktikkan kebiasaan ini, Anda juga bisa meluangkan sedikit waktu untuk membaca artikel, menonton video, dan merefleksikan tantangan yang mungkin dihadapi serta cara mengatasinya. 3 Imbalan (hasil) — apa yang menjadi imbalan? Apa yang akan membuat Anda merasa senang setelah menjalankan rutinitas ini? Dalam konteks memberikan umpan balik sebagai kebiasaan belajar, umpan balik itu sendiri bisa menjadi imbalan; tetapi pertimbangkan juga imbalan lain, baik fisik, mental, maupun emosional, misalnya “folder bahagia” di inbox Anda berisi pengingat pencapaian kecil, kepuasan saat menandai tanda X besar di kalender, atau sesuatu yang nyata, seperti membeli buku baru yang sudah lama Anda inginkan. “Kebiasaan adalah jembatan antara siapa Anda hari ini dan siapa Anda ingin menjadi esok hari.” — James Clear. Belajar dengan tujuan, terapkan secara konsisten, berkembang secara berkelanjutan."
         }
        },
        {
         "title": {
          "en": "What habits do you need to unlearn?",
          "id": "Kebiasaan apa yang perlu Anda lepaskan?"
         },
         "text": {
          "en": "Reflect and grow. You have explored what positive learning behaviors are and how you can turn them into habits. There is also an important flip side to forming new habits: unlearning old habits. In the same way we know which habits support learning, we know which do not. This list is not meant to be exhaustive, but rather to provide an easy opportunity to check in with yourself: which habits might be holding you back? Which habits might you unlearn in order to make space for new, healthier habits? Let go of what holds you back to make room for a better you: old habits, comfort zone; new habits, greater possibilities. Key takeaway: unlearning is not about losing a part of yourself, but about creating space for a better version of you. “Sometimes letting go is the most productive thing you can do.” — James Clear.",
          "id": "Refleksi dan pertumbuhan. Anda telah mengeksplorasi perilaku belajar yang positif dan bagaimana cara mengubahnya menjadi kebiasaan. Namun, ada sisi lain yang juga penting dalam membentuk kebiasaan baru, yaitu: melepaskan kebiasaan lama. Sama seperti kita mengetahui kebiasaan mana yang mendukung pembelajaran, kita juga mengetahui kebiasaan mana yang tidak. Daftar ini tidak dimaksudkan untuk lengkap, melainkan untuk memberikan kesempatan bagi Anda untuk merefleksikan diri: kebiasaan apa yang mungkin menghambat Anda? Kebiasaan apa yang mungkin perlu Anda lepaskan agar ada ruang untuk kebiasaan baru yang lebih sehat? Lepaskan hal-hal yang menghambat Anda untuk memberi ruang bagi versi diri yang lebih baik: kebiasaan lama, zona nyaman; kebiasaan baru, peluang yang lebih besar. Pesan utama: melepaskan kebiasaan lama bukan berarti kehilangan sebagian dari diri Anda, melainkan menciptakan ruang untuk menjadi versi diri yang lebih baik. “Terkadang, melepaskan adalah hal paling produktif yang bisa Anda lakukan.” — James Clear."
         }
        },
        {
         "title": {
          "en": "Common unhealthy habits",
          "id": "Kebiasaan yang tidak sehat"
         },
         "text": {
          "en": "Build better learning habits. Be aware of the habits that can get in the way of your learning journey. 01 Before you learn — unhealthy preparation habits: cramming (amassing a lot of information in a short period of time leads to a lack of truly understanding the situation); poor diet (bad nutrition can lower attention, memory, and learning); lack of sleep or exercise (physical exhaustion and a lifestyle without much exercise are detrimental to attention, remembering information, and motivation); poor time management (lack of identifying the important tasks leads to little time and space to learn); procrastination (delaying when you do tasks will make the learning process more difficult). 02 During you learn — unhealthy execution habits: performance first (the need to always show that you can do this and are an expert detracts from effective learning); self-sabotaging or handicapping (not trying hard enough is sometimes a symptom of fear of failure); imitation (trying to do something because others are doing it and for their approval is mentally and emotionally exhausting); autopilot mode (not being careful about the choices you make robs you of ownership of your learning, as well as the enjoyment and effectiveness of the process). 03 After you learn — unhealthy reflection habits: self-serving attributions (not taking responsibility for failures and overestimating your role in successes undermines your ability to learn); lone wolf (doing things alone and never asking for help is a way to lower your learning potential). Prepare well, learn better. Same awareness, a brighter tomorrow.",
          "id": "Bangun kebiasaan belajar yang lebih baik. Kenali kebiasaan yang dapat menghambat perjalanan belajar Anda. 01 Sebelum Anda belajar — persiapan yang tidak sehat: menumpuk informasi (cramming: mengumpulkan banyak informasi dalam waktu singkat dapat menyebabkan kurangnya pemahaman yang mendalam); pola makan yang buruk (nutrisi yang tidak seimbang dapat menurunkan fokus, daya ingat, dan kemampuan belajar); kurang tidur atau olahraga (kelelahan fisik dan gaya hidup minim olahraga dapat menurunkan perhatian, kemampuan mengingat, dan motivasi); manajemen waktu yang buruk (tidak mampu mengidentifikasi tugas-tugas penting menyebabkan waktu dan ruang untuk belajar menjadi sangat terbatas); menunda-nunda (prokrastinasi: menunda mengerjakan tugas akan membuat proses belajar menjadi lebih sulit). 02 Saat Anda belajar — pelaksanaan yang tidak sehat: mengutamakan hasil (performance first: selalu merasa harus menunjukkan bahwa Anda bisa dan ahli mengalihkan fokus dari proses belajar yang efektif); menghambat diri sendiri (self-sabotaging: tidak berusaha cukup keras sering kali merupakan bentuk rasa takut akan kegagalan); meniru orang lain (imitasi: melakukan sesuatu hanya karena orang lain melakukannya dan untuk mendapatkan persetujuan mereka dapat membuat Anda lelah secara mental dan emosional); mode autopilot (tidak berhati-hati dalam membuat pilihan dapat mengurangi rasa kepemilikan terhadap proses belajar, serta kenikmatan dan efektivitasnya). 03 Setelah Anda belajar — refleksi yang tidak sehat: menyalahkan diri sendiri (tidak mau bertanggung jawab atas kegagalan dan terlalu meremehkan peran Anda dalam keberhasilan dapat mengurangi kemampuan belajar); bekerja sendirian (lone wolf: melakukan segala sesuatu sendiri dan tidak pernah meminta bantuan dapat menurunkan potensi belajar Anda). Persiapkan diri dengan baik, belajar dengan lebih baik. Kebiasaan yang sama, peluang yang lebih besar."
         }
        },
        {
         "title": {
          "en": "How can you maintain healthy habits?",
          "id": "Bagaimana Anda dapat mempertahankan kebiasaan yang sehat?"
         },
         "text": {
          "en": "Sustain for the long run. Habits are like cars: they work well when they’re new, but require care and upkeep to keep running smoothly. Making time to deliberately review your learning habits is like servicing a car, replacing older, outdated parts with new ones so the overall system functions as effectively as possible. A practical way to review your habits — take time to reflect using the following steps and questions. 1 Examine and question (look closely at your current habits): what are my current learning habits? Which ones are working and which are not? 2 Analyze your patterns (identify trends and root causes): what triggers these habits? When do I tend to fall off track? Are there any patterns in my behavior? 3 Consider alternative perspectives (look at different ways to approach it): how might someone else view this? What alternative habits could be more helpful? What can I learn from past experiences? 4 Build your self-confidence (reinforce your belief in change): what am I doing well right now? How can I keep it going? Which habits do I want to strengthen? 5 Set a plan for continuing (define clear actions and safeguards): what is working well that I should continue? What is not, and how might I try a different approach? What support do I need? 6 Make a commitment (turn insights into action): what assumptions am I making? What do I need to consider? If others observed my learning habits, what feedback might they give? Keep your habits in good shape, so you can go further. “Discipline is the bridge between goals and accomplishment.” — Jim Rohn.",
          "id": "Bertahan untuk jangka panjang. Kebiasaan itu seperti mobil: berfungsi dengan baik saat masih baru, tetapi membutuhkan perawatan dan perhatian agar tetap berjalan lancar. Meluangkan waktu untuk secara sadar meninjau kembali kebiasaan belajar Anda ibarat melakukan servis mobil, mengganti komponen yang sudah usang dengan yang baru, sehingga keseluruhan sistem dapat berfungsi seefektif mungkin. Pendekatan praktis untuk meninjau kembali kebiasaan Anda — luangkan waktu untuk berefleksi dengan mengikuti langkah-langkah dan pertanyaan berikut. 1 Amati dan ajukan pertanyaan (lihat lebih dekat kebiasaan Anda saat ini): apa saja kebiasaan belajar saya saat ini? Kebiasaan mana yang berjalan dengan baik dan mana yang tidak? 2 Analisis pola Anda (identifikasi tren dan akar penyebabnya): apa yang memicu kebiasaan ini? Kapan saya cenderung kehilangan fokus? Apakah ada pola tertentu dalam perilaku saya? 3 Pertimbangkan sudut pandang alternatif (lihat dari berbagai cara yang berbeda): bagaimana orang lain mungkin melihat hal ini? Kebiasaan alternatif apa yang bisa lebih membantu? Apa yang bisa saya pelajari dari pengalaman sebelumnya? 4 Bangun rasa percaya diri (perkuat keyakinan Anda untuk berubah): apa yang sudah saya lakukan dengan baik saat ini? Bagaimana saya bisa terus melakukannya? Kebiasaan mana yang ingin saya perkuat? 5 Buat rencana untuk terus maju (tentukan tindakan nyata dan langkah pengaman): apa yang sudah berjalan baik dan perlu saya lanjutkan? Apa yang belum berjalan dan bagaimana saya bisa mencoba pendekatan yang berbeda? Dukungan apa yang saya butuhkan? 6 Buat komitmen (ubah insight menjadi tindakan nyata): asumsi apa yang sedang saya buat? Hal lain apa yang perlu saya pertimbangkan? Jika orang lain mengamati kebiasaan belajar saya, umpan balik apa yang mungkin mereka berikan? Jaga kebiasaan Anda tetap dalam kondisi baik, agar Anda bisa melangkah lebih jauh. “Disiplin adalah jembatan antara tujuan dan pencapaian.” — Jim Rohn."
         }
        },
        {
         "title": {
          "en": "What’s your plan?",
          "id": "Apa rencana Anda?"
         },
         "text": {
          "en": "Workbook exercise. Cultivating great habits will make your learning more effective and more fun. You do not need to implement all of these positive habits at once: let’s focus on just one to start. 1 Start by choosing which behavior you’ll focus on. How will you truly make this new behavior a habit? Follow the steps: set a reminder (determine how you’ll remind yourself, that is, what cue will trigger your habit; for example an electronic reminder on your phone, a physical note or object, or a specific meeting or event); define the routine (outline what the habit will look like in action; for example read for 15 minutes every morning, review notes after each session, or do a short reflection at the end of the day); choose a reward (decide what will make you feel good about your routine; for example a physical reward such as a favourite coffee, a mental or emotional reward such as a sense of progress, or something connected to the experience itself such as enjoyment). 2 Reflect further. Take a moment to think about the following questions: why is this habit meaningful to you, and how will it help you in your learning journey? How will you ensure you are maintaining this habit, and what systems or support will you use? What might you need to unlearn: are there old habits that could get in the way? Reminder: start small, be consistent, celebrate progress. “A better you is built by better habits.”",
          "id": "Latihan workbook. Membangun kebiasaan yang baik akan membuat proses belajar Anda lebih efektif dan menyenangkan. Anda tidak perlu menerapkan semua kebiasaan positif ini sekaligus: mari fokus pada satu kebiasaan terlebih dahulu untuk memulai. 1 Mulai dengan memilih perilaku yang ingin Anda fokuskan. Bagaimana Anda benar-benar akan menjadikan perilaku baru ini sebagai kebiasaan? Ikuti langkah-langkah berikut: tentukan pengingat (putuskan bagaimana Anda akan mengingatkan diri sendiri, yaitu apa pemicu yang akan memicu kebiasaan ini; misalnya pengingat di ponsel, catatan fisik atau post-it, objek tertentu sebagai pemicu, atau pertemuan dan jadwal khusus); rancang rutinitas (jelaskan seperti apa rutinitas ini dalam praktik; misalnya membaca selama 15 menit setiap pagi, meninjau catatan setelah setiap sesi belajar, atau melakukan refleksi singkat di akhir hari); pilih hadiah (tentukan apa yang akan membuat Anda merasa baik tentang rutinitas ini; misalnya hadiah fisik seperti secangkir kopi favorit, hadiah mental atau emosional seperti rasa pencapaian, atau sesuatu yang terkait dengan pengalaman itu sendiri seperti kesenangan). 2 Refleksikan lebih lanjut. Luangkan waktu sejenak untuk memikirkan pertanyaan-pertanyaan berikut: mengapa kebiasaan ini berarti bagi Anda, dan bagaimana ia akan membantu Anda dalam perjalanan belajar? Bagaimana Anda akan memastikan kebiasaan ini tetap terjaga, dan sistem atau dukungan apa yang akan Anda gunakan? Apa yang mungkin perlu Anda hilangkan: apakah ada kebiasaan lama yang dapat menghambat kemajuan Anda? Pengingat: mulai dari hal kecil, konsisten, rayakan setiap kemajuan. “Diri yang lebih baik dibangun oleh kebiasaan yang lebih baik.”"
         }
        },
        {
         "title": {
          "en": "Key takeaways to remember",
          "id": "Poin penting yang perlu Anda ingat"
         },
         "text": {
          "en": "Key takeaways. In this module, we have covered several key tools that can help you build better, more sustainable, and more meaningful learning habits. 01 The habit loop (cue, routine, reward) — use this framework to make your desired behaviors stick and become consistent, regular habits: cue (trigger) → routine (action) → reward (motivation). 02 Unlearning unhealthy habits — use this tool to identify ways to maintain healthy habits and let go of habits that no longer serve you: let go of unhealthy habits, make space for a better you. 03 Creating a personalized plan of action for habits — use this tool to identify and form new, positive learning habits that will support your growth in the future: new habit, specific steps, realistic timeline, track progress, stay committed. “Big change always starts with small, consistent steps.” — James Clear. Better habits, a brighter you, a brighter tomorrow.",
          "id": "Poin penting. Dalam modul ini, kita telah membahas beberapa alat penting yang dapat membantu Anda membangun kebiasaan belajar yang lebih baik, berkelanjutan, dan bermakna. 01 Siklus kebiasaan (cue, routine, reward) — gunakan kerangka ini untuk membuat perilaku yang Anda inginkan lebih mudah dilakukan dan menjadi kebiasaan yang konsisten: isyarat (pemicu) → rutinitas → imbalan (hadiah). 02 Melepaskan kebiasaan tidak sehat — gunakan alat ini untuk mengidentifikasi cara mempertahankan kebiasaan sehat dan secara bertahap melepaskan kebiasaan yang tidak lagi bermanfaat bagi Anda: lepaskan kebiasaan lama yang tidak sehat, beri ruang untuk kebiasaan baru yang lebih baik. 03 Membuat rencana aksi pribadi untuk kebiasaan — gunakan alat ini untuk mengidentifikasi dan membentuk kebiasaan belajar baru yang positif sesuai dengan tujuan Anda di masa depan: kebiasaan baru, langkah konkret, jadwal yang realistis, komitmen untuk berubah. “Perubahan besar selalu dimulai dari langkah kecil yang konsisten.” — James Clear. Kebiasaan yang lebih baik, diri yang lebih baik, masa depan yang lebih cerah."
         }
        },
        {
         "title": {
          "en": "What you’ve learned",
          "id": "Apa yang telah Anda pelajari"
         },
         "text": {
          "en": "In summary. In this course, you have learned how to: 01 set meaningful learning intentions (define what you want to learn and why it matters, so you can stay focused and motivated); 02 create behaviors that are used by effective learners (adopt practical behaviors and strategies used by successful learners to improve your learning experience); 03 turn habits into behaviors using the habit loop (use cue, routine, and reward to build and sustain positive habits); 04 use the APR framework (apply it to take on challenging situations with an adaptable and resilient mindset). We hope you can apply some of these lessons to your day-to-day life decisions, whether it’s using the APR framework to shift your mindset when talking to your co-workers, or unlearning unhealthy habits to help you reach your fitness goals. Small steps today, a bigger tomorrow.",
          "id": "Ringkasan. Dalam kursus ini, Anda telah mempelajari bagaimana: 01 menetapkan niat belajar yang bermakna (menentukan apa yang ingin Anda pelajari dan mengapa hal tersebut penting, agar Anda tetap fokus dan termotivasi); 02 menciptakan perilaku yang digunakan oleh pembelajar efektif (mengadopsi perilaku dan strategi praktis yang digunakan oleh pembelajar sukses untuk meningkatkan pengalaman belajar Anda); 03 mengubah kebiasaan menjadi perilaku menggunakan Siklus Kebiasaan (menggunakan pemicu, rutinitas, dan hadiah untuk membangun dan mempertahankan kebiasaan positif); 04 menggunakan kerangka APR (menerapkannya untuk menghadapi situasi yang menantang dengan pola pikir yang adaptif dan tangguh). Kami berharap Anda dapat menerapkan beberapa pembelajaran ini dalam keputusan sehari-hari, baik dengan menggunakan kerangka APR untuk mengubah pola pikir saat berinteraksi dengan rekan kerja, maupun dengan melepaskan kebiasaan yang tidak sehat untuk mencapai tujuan kebugaran Anda. Langkah kecil hari ini, versi diri yang lebih baik esok nanti."
         }
        }
       ]
      }
     ],
     "youtube": [
      {
       "id": "FfsxUowcrig",
       "placement": "after-material:1",
       "kicker": {
        "en": "Watch · Lesson film",
        "id": "Tonton · Film pelajaran"
       },
       "title": {
        "en": "Acting Inside Your Control — Film",
        "id": "Bertindak dalam Kendali Anda — Film"
       },
       "intro": {
        "en": "After the slides, watch the film below to see the ideas of this lesson in motion — the space between stimulus and response, taking responsibility for what you can control, and the pause-and-respond habit that turns ownership into daily practice.",
        "id": "Setelah slide, tonton film di bawah ini untuk melihat gagasan pelajaran ini bergerak — ruang di antara stimulus dan respons, mengambil tanggung jawab atas hal-hal yang dapat Anda kendalikan, dan kebiasaan berhenti sejenak lalu merespons yang mengubah rasa memiliki menjadi praktik sehari-hari."
       }
      },
      {
       "id": "_5gHjRwOkU4",
       "placement": "after-material:3",
       "kicker": {
        "en": "Watch · Lesson film 2",
        "id": "Tonton · Film pelajaran 2"
       },
       "title": {
        "en": "Use Proactive Language — Film",
        "id": "Gunakan Bahasa Proaktif — Film"
       },
       "intro": {
        "en": "After the slides, watch the film below to hear proactive language in use — how the words you choose open the space between stimulus and response, and how they shape your mindset, your actions and your future.",
        "id": "Setelah slide, tonton film di bawah ini untuk mendengar bahasa proaktif dalam praktik — bagaimana kata-kata yang Anda pilih membuka ruang di antara stimulus dan respons, dan bagaimana kata-kata itu membentuk pola pikir, tindakan, dan masa depan Anda."
       }
      },
      {
       "id": "CVa5osoY_Z0",
       "placement": "after-material:4",
       "kicker": {
        "en": "Watch · Lesson film 3",
        "id": "Tonton · Film pelajaran 3"
       },
       "title": {
        "en": "Circle of Influence — Film",
        "id": "Lingkaran Pengaruh — Film"
       },
       "intro": {
        "en": "After the slides, watch the film below to see the two circles at work — where energy spent on the Circle of Concern drains away, how focusing on the Circle of Influence makes it grow, and what it looks like to become a Transition Person for the people around you.",
        "id": "Setelah slide, tonton film di bawah ini untuk melihat kedua lingkaran itu bekerja — bagaimana energi yang dicurahkan pada Lingkaran Kepedulian terbuang, bagaimana fokus pada Lingkaran Pengaruh membuatnya tumbuh, dan seperti apa menjadi seorang Transition Person bagi orang-orang di sekitar Anda."
       }
      },
      {
       "id": "7yMh2QNRc_M",
       "placement": "after-material:5",
       "kicker": {
        "en": "Watch · Lesson film 4",
        "id": "Tonton · Film pelajaran 4"
       },
       "title": {
        "en": "The Power of Learning Habits — Film",
        "id": "Kekuatan Kebiasaan Belajar — Film"
       },
       "intro": {
        "en": "After the lesson video, watch this short film to take the idea one step further: how a habit is built, why small repeated actions beat bursts of motivation, and what it takes to make a good learning habit stick. Subtitles are available in English and Bahasa Indonesia where YouTube provides them. When it ends, continue to the slides that follow.",
        "id": "Setelah video pelajaran, tonton film singkat ini untuk melangkah lebih jauh: bagaimana sebuah kebiasaan terbentuk, mengapa tindakan kecil yang diulang mengalahkan ledakan motivasi, dan apa yang dibutuhkan agar kebiasaan belajar yang baik bertahan. Subtitle tersedia dalam bahasa Inggris dan Bahasa Indonesia bila disediakan oleh YouTube. Setelah selesai, lanjutkan ke slide yang mengikutinya."
       }
      }
     ],
     "videos": [
      {
       "src": "../../assets/lms/the-map/learning-habits.mp4",
       "poster": "../../assets/lms/the-map/learning-habits-poster.jpg",
       "dur": "3:41",
       "title": {
        "en": "The Power of Learning Habits",
        "id": "Kekuatan Kebiasaan Belajar"
       },
       "captions": {
        "en": "../../assets/lms/the-map/learning-habits-en.vtt",
        "id": "../../assets/lms/the-map/learning-habits-id.vtt"
       }
      }
     ],
     "videosPlacement": "after-material:5",
     "videosKicker": {
      "en": "Watch next · Lesson video",
      "id": "Tonton berikutnya · Video pelajaran"
     },
     "videosIntro": {
      "en": "The slides asked you to watch the video after them. Here it is: one day in the life of someone whose learning habits are working for him — and a few that are not. Watch for the habit loop, the moments of reflection, and the plan he ends up with. Subtitles are available in English and Bahasa Indonesia. When it ends, continue to the film that follows.",
      "id": "Slide tadi meminta Anda menonton video setelahnya. Inilah videonya: satu hari dalam hidup seseorang yang kebiasaan belajarnya bekerja untuknya — dan beberapa yang tidak. Perhatikan siklus kebiasaan, momen-momen refleksi, dan rencana yang akhirnya ia buat. Subtitle tersedia dalam bahasa Inggris dan Bahasa Indonesia. Setelah selesai, lanjutkan ke film yang mengikutinya."
     },
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
     "takeawaysLead": {
      "en": "You can define your life’s outcomes by creating a personal mission statement. To prepare for creating one, you can:",
      "id": "Anda dapat menetapkan hasil-hasil hidup Anda dengan membuat pernyataan misi pribadi. Untuk bersiap membuatnya, Anda dapat:"
     },
     "takeaways": [
      {
       "en": "Reflect on your whole life — past, present, and future.",
       "id": "Merefleksikan seluruh hidup Anda — masa lalu, masa kini, dan masa depan."
      },
      {
       "en": "Consider the attributes of the people who have had the greatest influence on you.",
       "id": "Mempertimbangkan kualitas orang-orang yang telah memberikan pengaruh terbesar dalam hidup Anda."
      },
      {
       "en": "Consider your own attributes, including your strengths, challenges, and passions.",
       "id": "Mempertimbangkan kualitas diri Anda sendiri, termasuk kekuatan, tantangan, dan passion Anda."
      }
     ],
     "material": [
      {
       "kicker": {
        "en": "Read first · 6 slides",
        "id": "Baca dulu · 6 slide"
       },
       "title": {
        "en": "Designing the First Outcome — Material",
        "id": "Merancang Hasil Sejak Awal — Materi"
       },
       "intro": {
        "en": "Six slides open the lesson: three honest questions about the life you are building, why direction matters more than pace, setting direction with a personal vision, beginning with the end in mind, defining outcomes before you act, and the two creations — mental first, physical second. Read them, then watch the film that follows.",
        "id": "Enam slide membuka pelajaran ini: tiga pertanyaan jujur tentang hidup yang sedang Anda bangun, mengapa arah lebih penting daripada kecepatan, menentukan arah dengan visi pribadi, memulai dengan tujuan akhir di pikiran, menentukan hasil sebelum bertindak, dan dua penciptaan — mental lebih dulu, fisik kemudian. Bacalah, lalu tonton film yang mengikutinya."
       },
       "base": "../../assets/lms/the-map/slides/outcome-first-",
       "slides": [
        {
         "title": {
          "en": "Designing the outcome first",
          "id": "Merancang hasil sejak awal"
         },
         "text": {
          "en": "Designing your life. Before you take the next step, pause and reflect. The direction you choose today shapes the life you live tomorrow. 01 Are you right now who you want to be? Are you living the life you dreamed of, doing what you always wanted to do? Be honest. 02 Sometimes successes can feel empty. People may achieve visible wins, but at the expense of things that are far more valuable to them. 03 Direction matters. If your ladder is not leaning against the right wall, every step you take gets you to the wrong place faster. Focus on what you can control: focus time and energy on things that can be controlled. “Success means nothing if it takes you away from what truly matters.” — unknown. Reflect, prioritize, choose, take action. A clearer vision today, a more meaningful tomorrow.",
          "id": "Merancang kehidupan Anda. Sebelum melangkah ke tahap berikutnya, luangkan waktu untuk berhenti sejenak dan merenung. Arah yang Anda pilih hari ini akan membentuk kehidupan yang Anda jalani di masa depan. 01 Apakah Anda saat ini sudah menjadi pribadi yang ingin Anda lihat di masa depan? Apakah Anda sudah menjalani kehidupan yang Anda impikan dan melakukan hal-hal yang selalu ingin Anda lakukan? Jawab dengan jujur. 02 Terkadang kesuksesan bisa terasa hampa. Banyak orang meraih pencapaian yang terlihat luar biasa, namun dengan mengorbankan hal-hal lain yang sebenarnya jauh lebih bermakna bagi mereka. 03 Arah sangat menentukan. Jika tangga Anda tidak bersandar pada dinding yang tepat, setiap langkah yang Anda ambil justru akan membawa Anda ke tempat yang salah, lebih cepat. Fokus pada hal yang bisa Anda kendalikan: luangkan waktu dan energi pada hal-hal yang berada dalam kendali Anda. “Kesuksesan tidak ada artinya jika membuat Anda menjauh dari hal-hal yang benar-benar penting.” — penulis tidak diketahui. Refleksi, prioritaskan, pilih dengan sadar, ambil tindakan. Visi yang lebih jelas hari ini, menciptakan masa depan yang lebih bermakna untuk Anda."
         }
        },
        {
         "title": {
          "en": "Set your direction with a personal vision",
          "id": "Tentukan arah hidup Anda dengan visi pribadi"
         },
         "text": {
          "en": "Lesson 1. Give your efforts direction by articulating your vision for your life. Habit 2 is based on the principles of vision (see the bigger picture), commitment (stay dedicated to what matters) and purpose (give meaning to your journey). Common paradigm: “I can’t predict how my life will turn out, so I just go with the flow.” Common practices: get started without a clear idea of what you want to achieve; let others’ agendas and circumstances define how you live your life. Shift your mindset — from reacting to life to creating it. Highly effective paradigm: “Clearly defining my vision and purpose in life will make all the difference.” Highly effective practices: define outcomes before you act; create and live by a personal mission statement. Key takeaway: a clear vision gives direction, fuels commitment, and helps you live a more purposeful life. Your vision, a brighter you.",
          "id": "Pelajaran 1. Berikan arah pada setiap usaha Anda dengan merumuskan visi untuk hidup Anda. Kebiasaan 2 didasarkan pada prinsip visi (melihat gambaran besar), komitmen (tetap konsisten pada hal yang penting), dan tujuan (memberikan makna pada perjalanan hidup Anda). Paradigma umum: “Saya tidak bisa memprediksi bagaimana hidup saya akan berjalan, jadi saya hanya mengikuti arus saja.” Praktik umum: memulai sesuatu tanpa kejelasan tentang apa yang ingin Anda capai; membiarkan agenda dan keadaan orang lain menentukan bagaimana Anda menjalani hidup. Ubah cara pandang Anda — dari sekadar mengikuti keadaan menjadi menciptakan kehidupan yang Anda inginkan. Paradigma sangat efektif: “Dengan mendefinisikan visi dan tujuan hidup saya secara jelas, saya dapat membuat perbedaan yang nyata.” Praktik sangat efektif: tentukan hasil yang ingin dicapai sebelum bertindak; buat dan jalani pernyataan misi pribadi (personal mission statement). Intisari utama: visi yang jelas memberikan arah, menumbuhkan komitmen, dan membantu Anda menjalani hidup yang lebih bermakna. Visi Anda, versi terbaik dari Anda."
         }
        },
        {
         "title": {
          "en": "Begin with the end in mind",
          "id": "Mulailah dengan tujuan akhir di pikiran"
         },
         "text": {
          "en": "Live with purpose. To avoid spending your time and energy on activities that won’t get you where you want to go, you must begin with the end in mind. This means crafting a plan before you take action and developing a personal mission statement to help you define what you value and what you want to achieve. “It’s incredibly easy to work harder and harder at climbing the ladder of success, only to discover that it’s leaning against the wrong wall.” — Stephen R. Covey. Your destination — not the wrong direction.",
          "id": "Hidup dengan tujuan. Untuk menghindari membuang waktu dan energi Anda pada aktivitas yang tidak akan membawa Anda ke tempat yang Anda inginkan, Anda harus mulai dengan tujuan akhir di pikiran. Ini berarti menyusun rencana sebelum bertindak dan membuat pernyataan misi pribadi untuk membantu Anda menentukan apa yang Anda hargai dan apa yang ingin Anda capai. “Sangat mudah untuk bekerja semakin keras dan semakin keras dalam mengejar kesuksesan, hanya untuk kemudian menyadari bahwa kita justru bersandar pada dinding yang salah.” — Stephen R. Covey. Tujuan Anda — bukan arah yang salah. Langkah hari ini menuju versi terbaik diri Anda."
         }
        },
        {
         "title": {
          "en": "Define outcomes before you act",
          "id": "Tentukan hasil yang ingin dicapai sebelum Anda bertindak"
         },
         "text": {
          "en": "Turn intention into action. Be clear about what you want to achieve, so every step you take moves you in the right direction. Common practice: get started without a clear idea of what you want to achieve — “just start and see where it goes”; often leads to scattered efforts, easily distracted by others’ agendas, harder to measure progress. Highly effective practice: define outcomes before you act — “be clear on what you want to achieve, then take action with purpose”; provides clarity and focus, helps you prioritize what matters, increases the chances of success. Defining outcomes and achieving outcomes: the “mental creation” involves defining outcomes. Before you act, get specific about the outcomes you really want to see. Then work toward achieving those specific outcomes. Key takeaway: define the destination before you take the first step. Clarity today, a brighter tomorrow.",
          "id": "Ubah niat menjadi aksi. Jadilah jelas tentang apa yang ingin Anda capai, sehingga setiap langkah yang Anda ambil akan membawa Anda ke arah yang tepat. Praktik umum: memulai tanpa kejelasan tentang apa yang ingin Anda capai — “mulai saja dulu, nanti lihat ke mana arahnya”; sering kali menghasilkan upaya yang tersebar dan tidak fokus, mudah teralihkan oleh agenda orang lain, lebih sulit mengukur kemajuan. Praktik sangat efektif: tentukan hasil yang ingin dicapai sebelum bertindak — “jadilah jelas tentang apa yang ingin Anda capai, lalu ambil tindakan dengan tujuan yang kuat”; memberikan kejelasan dan fokus, membantu Anda memprioritaskan hal yang benar-benar penting, meningkatkan peluang keberhasilan. Menentukan hasil dan mencapainya: “penciptaan mental” melibatkan penentuan hasil yang ingin dicapai. Sebelum Anda bertindak, jadilah spesifik tentang hasil yang benar-benar ingin Anda lihat. Kemudian, bekerjalah secara konsisten untuk mencapai hasil tersebut. Poin utama: tentukan tujuan akhir sebelum Anda mengambil langkah pertama. Kejelasan hari ini, menciptakan masa depan yang lebih cerah."
         }
        },
        {
         "title": {
          "en": "Defining outcomes and achieving outcomes",
          "id": "Menentukan hasil dan mencapainya"
         },
         "text": {
          "en": "From clarity in the mind to impact in the real world. Mental — first creation: a clear agenda and objective; well-researched market specifications; a goal with a clear end point and deadline; a compelling personal mission statement. Define the outcome first. Physical — second creation: a productive meeting; a successful product in the marketplace; a goal achieved with excellence and on time; a life of contribution and fulfillment. From intention to real impact. Clarity creates direction; outcomes create a brighter tomorrow.",
          "id": "Dari kejelasan di dalam pikiran menuju dampak nyata di dunia nyata. Mental — penciptaan pertama: membayangkan, merencanakan, dan mendefinisikan hasil yang ingin dicapai; agenda dan tujuan yang jelas; riset pasar yang mendalam dan spesifikasi yang matang; tujuan dengan titik akhir yang jelas dan tenggat waktu; pernyataan misi pribadi yang kuat dan bermakna. Tentukan hasilnya terlebih dahulu. Fisik — penciptaan kedua: mewujudkan hasil melalui tindakan nyata di dunia nyata; rapat yang produktif; produk yang sukses di pasar; tujuan yang tercapai dengan hasil yang unggul dan tepat waktu; hidup yang penuh kontribusi dan kepuasan. Dari niat menuju dampak nyata. Kejelasan hari ini, arah yang lebih baik; hasil hari ini, masa depan yang lebih cerah."
         }
        },
        {
         "title": {
          "en": "From intention to real results",
          "id": "Dari niat ke hasil nyata"
         },
         "text": {
          "en": "Key summary. Success starts with clarity about what you want to achieve, then bringing it to life through consistent action. 1 First creation (mental) — involves defining the outcomes you want to achieve: “everything begins with a clear picture in your mind.” 2 Second creation (physical) — focuses on taking action toward the defined outcomes: “turn your plan into consistent action.” 3 Achieved outcomes — defining outcomes leads to achieving outcomes: “clarity today creates a better tomorrow.” Key takeaway: defining the outcomes you want to achieve leads to achieving those outcomes. Clarity creates direction; action creates results. A clear vision, consistent action, a more meaningful result.",
          "id": "Ringkasan utama. Keberhasilan dimulai dari kejelasan tentang apa yang ingin dicapai, kemudian diwujudkan melalui tindakan yang konsisten. 1 Penciptaan pertama (mental) — mencakup penetapan hasil yang ingin dicapai: “semua dimulai dari gambaran yang jelas di dalam pikiran.” 2 Penciptaan kedua (fisik) — berfokus pada pencapaian hasil yang telah ditetapkan: “ubah rencana menjadi tindakan nyata yang konsisten.” 3 Hasil yang dicapai — menetapkan hasil yang ingin dicapai mengarah pada pencapaian hasil tersebut: “kejelasan hari ini membawa hasil nyata esok hari.” Poin utama: menetapkan hasil yang ingin dicapai mengarah pada pencapaian hasil tersebut. Kejelasan membawa arah; tindakan membawa hasil. Visi yang jelas, tindakan yang konsisten, hasil yang bermakna."
         }
        }
       ]
      },
      {
       "kicker": {
        "en": "Read next · 4 slides",
        "id": "Baca berikutnya · 4 slide"
       },
       "title": {
        "en": "Personal Mission — Material",
        "id": "Misi Pribadi — Materi"
       },
       "intro": {
        "en": "After the film, four slides turn the outcome inward: what a personal mission is and three ways to think about it, the 80th-birthday reflection, one question about your one wild and precious life, and a closing reminder not to waste it. Read them, then watch the two films that follow.",
        "id": "Setelah film, empat slide mengarahkan hasil itu ke dalam diri: apa itu misi pribadi dan tiga cara memikirkannya, refleksi ulang tahun ke-80, satu pertanyaan tentang satu kehidupan Anda yang unik dan berharga, dan pengingat penutup untuk tidak menyia-nyiakannya. Bacalah, lalu tonton dua film yang mengikutinya."
       },
       "base": "../../assets/lms/the-map/slides/personal-mission-",
       "slides": [
        {
         "title": {
          "en": "Your personal mission",
          "id": "Misi pribadi Anda"
         },
         "text": {
          "en": "Lesson 2. A clear personal mission helps you define outcomes for your whole life as well as for specific events or projects. A powerful way to do this is to create a personal mission statement. Consider your personal mission: being effective means taking the time to define what’s important to you, what you want to achieve, and the kind of person you want to be. As you think about what you want to accomplish: 1 reflect on your life as a whole (consider your past, present, and future); 2 consider the attributes of others (think about the people who have had the greatest influence on you); 3 consider your own attributes (identify your strengths, challenges, and passions). “Lead your life or someone else will.” — Stephen R. Covey. Key takeaway: a personal mission gives you direction, focus, and a meaningful life. Clarity today, a more fulfilling tomorrow. Purpose, growth, impact, freedom.",
          "id": "Pelajaran 2. Misi pribadi yang jelas membantu Anda menetapkan hasil yang ingin dicapai untuk seluruh hidup Anda, serta untuk peristiwa atau proyek tertentu. Cara yang sangat efektif untuk melakukannya adalah dengan membuat pernyataan misi pribadi. Pertimbangkan misi pribadi Anda: menjadi efektif berarti meluangkan waktu untuk menetapkan apa yang penting bagi Anda, apa yang ingin Anda capai, dan seperti apa pribadi yang ingin Anda menjadi. Saat Anda memikirkan apa yang ingin Anda capai: 1 refleksikan hidup Anda secara keseluruhan (pertimbangkan masa lalu, masa kini, dan masa depan Anda); 2 pertimbangkan kualitas orang-orang yang paling memengaruhi Anda (pikirkan tentang orang-orang yang telah memberikan pengaruh terbesar dalam hidup Anda); 3 pertimbangkan kualitas diri Anda sendiri (kenali kekuatan, tantangan, dan passion Anda). “Pimpin hidup Anda, atau orang lain yang akan melakukannya.” — Stephen R. Covey. Poin utama: misi pribadi yang jelas memberi Anda arah, fokus, dan kehidupan yang lebih bermakna. Kejelasan hari ini, masa depan yang lebih baik. Tujuan, pertumbuhan, dampak, kebebasan."
         }
        },
        {
         "title": {
          "en": "80th birthday",
          "id": "Ulang tahun ke-80"
         },
         "text": {
          "en": "Reflection exercise. As you watch the next video, imagine what you would want people to say about you at your 80th birthday celebration, and think about what you might want to put in your personal mission statement. What would your family say about you? What would your friends say about you? What would your colleagues say about you? What kind of impact do you want to make in the world? The legacy I want to leave. “There is no greater joy nor greater reward than to make a fundamental difference in someone’s life.” — Mary Rose McGeady. Key takeaway: live with intention, so your life at 80 reflects the impact you hope to make today.",
          "id": "Latihan refleksi. Saat Anda menonton video berikutnya, bayangkan apa yang ingin Anda dengar dari orang-orang tentang diri Anda pada perayaan ulang tahun ke-80 Anda, dan pikirkan apa yang mungkin ingin Anda masukkan dalam pernyataan misi pribadi Anda. Apa yang akan dikatakan keluarga Anda tentang diri Anda? Apa yang akan dikatakan teman-teman Anda tentang diri Anda? Apa yang akan dikatakan rekan kerja Anda tentang diri Anda? Dampak seperti apa yang ingin Anda berikan kepada dunia? Warisan yang ingin saya tinggalkan. “Tidak ada kebahagiaan yang lebih besar maupun penghargaan yang lebih tinggi daripada membuat perbedaan yang nyata dalam kehidupan seseorang.” — Mary Rose McGeady. Poin utama: hiduplah dengan tujuan, agar hidup Anda di usia 80 mencerminkan dampak yang ingin Anda berikan hari ini."
         }
        },
        {
         "title": {
          "en": "Tell me! What is it you plan to do with your one wild and precious life?",
          "id": "Ceritakan kepada saya! Apa yang ingin Anda lakukan dengan satu kehidupan yang unik dan berharga ini?"
         },
         "text": {
          "en": "Reflection moment. What do you want to achieve? Your biggest dreams and goals. Who do you want to become? The kind of person you aspire to be. What impact do you want to make? The difference you want to create. “Tell me, what is it you plan to do with your one wild and precious life?” — Mary Oliver. Key takeaway: live intentionally. Turn your dreams into actions, and make your one wild and precious life count. More purpose, more freedom, more impact, a brighter tomorrow.",
          "id": "Momen refleksi. Apa yang ingin Anda capai? Impian dan tujuan terbesar Anda. Siapa yang ingin Anda menjadi? Nilai dan karakter seperti apa yang ingin Anda miliki. Dampak apa yang ingin Anda berikan? Perubahan positif apa yang ingin Anda ciptakan di sekitar Anda. “Tidak ada kebahagiaan yang lebih besar maupun penghargaan yang lebih tinggi daripada membuat perbedaan yang nyata dalam kehidupan seseorang.” — Mary Oliver. Poin utama: hiduplah dengan tujuan. Ubah impian Anda menjadi tindakan, dan jadikan satu kehidupan yang unik dan berharga ini benar-benar berarti. Tujuan yang lebih jelas, kebebasan yang lebih besar, dampak yang lebih luas, masa depan yang lebih baik."
         }
        },
        {
         "title": {
          "en": "Let’s not waste your life",
          "id": "Jangan sia-siakan hidup Anda"
         },
         "text": {
          "en": "Let’s not waste your life: let’s make purposeful use of your time to create meaningful impact.",
          "id": "Jangan sia-siakan hidup Anda: manfaatkan waktu Anda dengan tujuan untuk menciptakan dampak yang berarti."
         }
        }
       ]
      }
     ],
     "youtube": [
      {
       "id": "BxaJ_YjkWpA",
       "placement": "after-material:1",
       "kicker": {
        "en": "Watch · Lesson film",
        "id": "Tonton · Film pelajaran"
       },
       "title": {
        "en": "Designing the First Outcome — Film",
        "id": "Merancang Hasil Sejak Awal — Film"
       },
       "intro": {
        "en": "After the slides, watch this short film to see the idea in motion: why beginning with the end in mind changes the steps you take today, and how defining the outcome first turns intention into results. Subtitles are available in English and Bahasa Indonesia where YouTube provides them. When it ends, continue to the slides that follow.",
        "id": "Setelah slide, tonton film singkat ini untuk melihat gagasannya bergerak: mengapa memulai dengan tujuan akhir di pikiran mengubah langkah yang Anda ambil hari ini, dan bagaimana menentukan hasil lebih dulu mengubah niat menjadi hasil nyata. Subtitle tersedia dalam bahasa Inggris dan Bahasa Indonesia bila disediakan oleh YouTube. Setelah selesai, lanjutkan ke slide yang mengikutinya."
       }
      },
      {
       "id": "nWj5f7sLtUs",
       "placement": "after-material:2",
       "kicker": {
        "en": "Watch · Lesson film 2",
        "id": "Tonton · Film pelajaran 2"
       },
       "title": {
        "en": "Personal Mission — Film 1",
        "id": "Misi Pribadi — Film 1"
       },
       "intro": {
        "en": "The slides asked you to watch the next video with your 80th birthday in mind. Here it is: as you watch, imagine what you would want your family, friends and colleagues to say about you, and note what belongs in your personal mission statement. Subtitles are available in English and Bahasa Indonesia where YouTube provides them. When it ends, continue to the second film below.",
        "id": "Slide tadi meminta Anda menonton video berikutnya dengan membayangkan ulang tahun ke-80 Anda. Inilah videonya: sambil menonton, bayangkan apa yang ingin Anda dengar dari keluarga, teman, dan rekan kerja tentang diri Anda, dan catat apa yang layak masuk ke pernyataan misi pribadi Anda. Subtitle tersedia dalam bahasa Inggris dan Bahasa Indonesia bila disediakan oleh YouTube. Setelah selesai, lanjutkan ke film kedua di bawah."
       }
      },
      {
       "id": "FEH27urHwvg",
       "placement": "after-material:2",
       "kicker": {
        "en": "Watch · Lesson film 3",
        "id": "Tonton · Film pelajaran 3"
       },
       "title": {
        "en": "Personal Mission — Film 2",
        "id": "Misi Pribadi — Film 2"
       },
       "intro": {
        "en": "A second film to close the material: what it looks like to live by a personal mission, and why purposeful use of your time is the difference between a busy life and a meaningful one. Subtitles are available in English and Bahasa Indonesia where YouTube provides them. When it ends, continue to Exhibit 1 below.",
        "id": "Film kedua untuk menutup materi ini: seperti apa hidup yang dijalani berdasarkan misi pribadi, dan mengapa memanfaatkan waktu dengan tujuan adalah perbedaan antara hidup yang sibuk dan hidup yang bermakna. Subtitle tersedia dalam bahasa Inggris dan Bahasa Indonesia bila disediakan oleh YouTube. Setelah selesai, lanjutkan ke Peraga 1 di bawah."
       }
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
     ]
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
