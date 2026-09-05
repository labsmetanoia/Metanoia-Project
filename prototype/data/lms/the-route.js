/**
 * The Route — LMS CONTENT REGISTRY
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
window.MT_LMS['the-route'] = {
 "product": {
  "en": "The Route",
  "id": "The Route"
 },
 "media": {
  "video": "../../assets/06-horizon.mp4",
  "poster": "../../assets/bg/hero.jpg",
  "art": "../../assets/product-art/the-route.svg",
  "visual": "../../assets/system-the-route.png",
  "captions": {
   "en": "../../assets/lms/captions-en.vtt",
   "id": "../../assets/lms/captions-id.vtt"
  }
 },
 "modules": [
  {
   "num": 1,
   "title": {
    "en": "Career Architecture",
    "id": "Arsitektur Karier"
   },
   "overview": {
    "en": "Module 1 of The Route focuses on career architecture. Work through the lessons in order — each builds on the last.",
    "id": "Modul 1 dari The Route berfokus pada Arsitektur Karier. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply career architecture to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Arsitektur Karier pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "1.1",
     "title": {
      "en": "From Employee to Career Builder",
      "id": "Dari Karyawan Menjadi Pembangun Karier"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The offer letter made you an employee; nothing in it makes you a career builder. This opening lesson draws the distinction that powers the whole course: employees execute a role, builders use roles to compound assets — skills, results, relationships, reputation — that they carry out the door.",
      "id": "Surat tawaran menjadikanmu karyawan; tak ada isinya yang menjadikanmu pembangun karier. Pelajaran pembuka ini menarik perbedaan yang menggerakkan seluruh kursus: karyawan mengeksekusi peran, pembangun memakai peran untuk menggandakan aset — keterampilan, hasil, hubungan, reputasi — yang mereka bawa keluar pintu."
     },
     "objectives": [
      {
       "en": "Distinguish role goals (owned by the company) from career assets (owned by you).",
       "id": "Membedakan tujuan peran (milik perusahaan) dari aset karier (milikmu)."
      },
      {
       "en": "Audit your first months: which assets are you actually accumulating?",
       "id": "Mengaudit bulan-bulan pertamamu: aset mana yang benar-benar kamu kumpulkan?"
      },
      {
       "en": "Adopt the builder's weekly question: what did this week add that I keep?",
       "id": "Mengadopsi pertanyaan mingguan pembangun: apa yang ditambahkan minggu ini yang tetap kumiliki?"
      }
     ],
     "takeaways": [
      {
       "en": "Companies rent your time for their goals; careers are built from what compounds in you meanwhile.",
       "id": "Perusahaan menyewa waktumu untuk tujuan mereka; karier dibangun dari yang menggandakan diri dalam dirimu sementara itu."
      },
      {
       "en": "Four assets compound: skills with evidence, relationships with trust, reputation with witnesses, results with numbers.",
       "id": "Empat aset menggandakan diri: keterampilan berbukti, hubungan berkepercayaan, reputasi bersaksi, hasil berangka."
      },
      {
       "en": "The same year can add zero assets or four — the difference is deliberate steering, not harder work.",
       "id": "Tahun yang sama bisa menambah nol aset atau empat — bedanya kemudi yang disengaja, bukan kerja lebih keras."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "Two people, same desk",
        "id": "Dua orang, meja sama"
       },
       "body": {
        "en": "Two analysts join the same team. Both work hard; both get decent reviews. Three years later one has a promotion, a portfolio of named projects, two managers who would hire her again anywhere, and a skill stack the market prices — the other has three years of tenure. The difference was never talent. The first treated every assignment as two jobs: the company's deliverable, and the asset it could mint for her — a new skill made legible, a stakeholder who now trusts her, a result with a number attached. The second completed tasks. Task completion is rented; assets are owned.",
        "id": "Dua analis bergabung ke tim sama. Keduanya kerja keras; keduanya dapat penilaian layak. Tiga tahun kemudian yang satu punya promosi, portofolio proyek bernama, dua manajer yang akan merekrutnya lagi di mana pun, dan tumpukan keterampilan yang dihargai pasar — yang lain punya tiga tahun masa kerja. Bedanya tak pernah bakat. Yang pertama memperlakukan tiap penugasan sebagai dua pekerjaan: hasil untuk perusahaan, dan aset yang bisa dicetaknya — keterampilan baru yang terbaca, pemangku kepentingan yang kini percaya, hasil dengan angka terlampir. Yang kedua menyelesaikan tugas. Penyelesaian tugas itu disewa; aset itu dimiliki."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "The four compounding assets",
        "id": "Empat aset yang menggandakan diri"
       },
       "body": {
        "en": "<b>Skills with evidence:</b> not “I got better at analysis” but “I now own the churn model, documented, presented twice”. <b>Results with numbers:</b> every project ends with a line for the win log — what changed, by how much, verified by whom. <b>Relationships with trust:</b> people who have seen you deliver and would say so; built by delivering, not by networking events. <b>Reputation with witnesses:</b> what the room says when your name comes up — Module 4's territory. Each asset compounds because it lowers the cost of the next win: trusted people get better projects, better projects mint rarer skills, rarer skills draw bigger rooms.",
        "id": "<b>Keterampilan berbukti:</b> bukan “analisisku membaik” melainkan “aku kini memiliki model churn, terdokumentasi, dipresentasikan dua kali”. <b>Hasil berangka:</b> tiap proyek berakhir dengan satu baris untuk catatan kemenangan — apa yang berubah, berapa banyak, diverifikasi siapa. <b>Hubungan berkepercayaan:</b> orang yang telah melihatmu menunaikan dan mau mengatakannya; dibangun dengan menunaikan, bukan acara networking. <b>Reputasi bersaksi:</b> apa kata ruangan saat namamu disebut — wilayah Modul 4. Tiap aset menggandakan diri karena menurunkan biaya kemenangan berikut: orang tepercaya mendapat proyek lebih baik, proyek lebih baik mencetak keterampilan lebih langka, keterampilan lebih langka menarik ruangan lebih besar."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The builder's weekly question",
        "id": "Pertanyaan mingguan pembangun"
       },
       "body": {
        "en": "Every Friday, one question in the Route Planner's win log: <i>what did this week add that I keep?</i> Some weeks the honest answer is “nothing — I processed tickets”. That answer is information, not failure: three such weeks in a row means your role's asset yield has dropped and needs engineering — volunteer for the gnarly migration, ask to shadow the client call, propose the analysis nobody has time for. Asset yield, not busyness, is what this course teaches you to manage. The diagnostic and the log in the Route Planner exist to keep the question alive after the course ends.",
        "id": "Setiap Jumat, satu pertanyaan di catatan kemenangan Route Planner: <i>apa yang ditambahkan minggu ini yang tetap kumiliki?</i> Beberapa minggu jawaban jujurnya “tidak ada — aku memproses tiket”. Jawaban itu informasi, bukan kegagalan: tiga minggu berturut-turut seperti itu berarti hasil aset peranmu turun dan butuh direkayasa — ajukan diri untuk migrasi yang rumit, minta membayangi panggilan klien, usulkan analisis yang tak sempat dikerjakan siapa pun. Hasil aset, bukan kesibukan, itulah yang diajarkan kursus ini untuk kamu kelola. Diagnostik dan catatan di Route Planner ada untuk menjaga pertanyaan itu tetap hidup setelah kursus usai."
       }
      }
     ],
     "diagram": {
      "type": "ring",
      "exhibit": {
       "en": "Exhibit 1: The four assets a role can mint — if you steer it.",
       "id": "Peraga 1: Empat aset yang bisa dicetak sebuah peran — jika kamu mengemudikannya."
      },
      "title": {
       "en": "The career asset ring",
       "id": "Cincin aset karier"
      },
      "items": [
       {
        "h": {
         "en": "Skills",
         "id": "Keterampilan"
        },
        "sub": {
         "en": "Named, documented, demonstrated",
         "id": "Bernama, terdokumentasi, terdemonstrasi"
        }
       },
       {
        "h": {
         "en": "Results",
         "id": "Hasil"
        },
        "sub": {
         "en": "Numbers, verified, logged",
         "id": "Angka, terverifikasi, tercatat"
        }
       },
       {
        "h": {
         "en": "Relationships",
         "id": "Hubungan"
        },
        "sub": {
         "en": "Trust earned by delivery",
         "id": "Kepercayaan dari penunaian"
        }
       },
       {
        "h": {
         "en": "Reputation",
         "id": "Reputasi"
        },
        "sub": {
         "en": "What the room says unprompted",
         "id": "Apa kata ruangan tanpa diminta"
        }
       }
      ],
      "longdesc": {
       "en": "A ring of four mutually reinforcing career assets: skills made legible through documentation and demonstration; results captured as verified numbers; relationships built on delivered trust; and reputation — what is said about you when you are absent. Each lowers the acquisition cost of the next.",
       "id": "Cincin empat aset karier yang saling menguatkan: keterampilan yang terbaca lewat dokumentasi dan demonstrasi; hasil yang ditangkap sebagai angka terverifikasi; hubungan yang dibangun atas kepercayaan yang ditunaikan; dan reputasi — yang dikatakan tentangmu saat kamu tak hadir. Masing-masing menurunkan biaya perolehan yang berikutnya."
      }
     },
     "checks": [
      {
       "q": {
        "en": "After a quarter of flawless ticket-processing, your win log is empty. What does the builder's lens say?",
        "id": "Setelah satu kuartal memproses tiket tanpa cela, catatan kemenanganmu kosong. Apa kata lensa pembangun?"
       },
       "options": [
        {
         "en": "Keep going — flawless execution always gets noticed eventually",
         "id": "Lanjutkan — eksekusi tanpa cela pasti akhirnya diperhatikan"
        },
        {
         "en": "The role's asset yield is low: engineer it — volunteer for harder scope, propose the unowned analysis, ask to shadow",
         "id": "Hasil aset peran itu rendah: rekayasa — ajukan diri untuk lingkup lebih sulit, usulkan analisis tak bertuan, minta membayangi"
        },
        {
         "en": "Start looking for a new job immediately",
         "id": "Segera cari pekerjaan baru"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Effort without asset accumulation is rented out entirely. Before leaving a role, builders first try raising its yield — usually possible, and itself a skill.",
        "id": "Usaha tanpa akumulasi aset tersewa seluruhnya. Sebelum meninggalkan peran, pembangun lebih dulu mencoba menaikkan hasilnya — biasanya mungkin, dan itu sendiri keterampilan."
       }
      }
     ],
     "tool": {
      "id": "plan",
      "mode": "wins",
      "title": {
       "en": "Open the win log",
       "id": "Buka catatan kemenangan"
      },
      "body": {
       "en": "Start the Friday habit now: one entry for this week — what you delivered, its number, who can verify it.",
       "id": "Mulai kebiasaan Jumat sekarang: satu entri untuk minggu ini — apa yang kamu tunaikan, angkanya, siapa yang bisa memverifikasi."
      },
      "cta": {
       "en": "Open the Route Planner →",
       "id": "Buka Route Planner →"
      }
     },
     "quote": {
      "en": "Companies rent your time. Careers are built from what compounds in you meanwhile.",
      "id": "Perusahaan menyewa waktumu. Karier dibangun dari yang menggandakan diri dalam dirimu sementara itu."
     }
    },
    {
     "n": "1.2",
     "title": {
      "en": "Designing Your 3–5 Year Trajectory",
      "id": "Merancang Trajektori 3–5 Tahunmu"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "A trajectory is not a prediction; it is a design constraint. This lesson converts the Map's 3-year outcome into a working career architecture: the destination role family, the two or three way-station roles that reach it, and the asset requirements each transition demands.",
      "id": "Trajektori bukan ramalan; ia batasan rancangan. Pelajaran ini mengubah hasil 3 tahun dari The Map menjadi arsitektur karier yang bekerja: keluarga peran tujuan, dua-tiga peran persinggahan yang mencapainya, dan persyaratan aset yang dituntut tiap transisi."
     },
     "objectives": [
      {
       "en": "Design a 3–5 year trajectory as destination + way-stations + asset gates.",
       "id": "Merancang trajektori 3–5 tahun sebagai tujuan + persinggahan + gerbang aset."
      },
      {
       "en": "Derive this year's asset targets from the next transition's requirements.",
       "id": "Menurunkan target aset tahun ini dari persyaratan transisi berikutnya."
      },
      {
       "en": "Schedule the annual architecture review that keeps the design honest.",
       "id": "Menjadwalkan tinjauan arsitektur tahunan yang menjaga rancangan tetap jujur."
      }
     ],
     "takeaways": [
      {
       "en": "Careers are built backwards: the next role's requirements define this role's asset targets.",
       "id": "Karier dibangun mundur: persyaratan peran berikutnya menentukan target aset peran ini."
      },
      {
       "en": "Way-stations are chosen for what they mint, not what they pay — early compounding outearns early salary.",
       "id": "Persinggahan dipilih karena yang dicetaknya, bukan yang dibayarnya — penggandaan dini mengalahkan gaji dini."
      },
      {
       "en": "An architecture reviewed yearly bends with reality; one never reviewed becomes a museum piece.",
       "id": "Arsitektur yang ditinjau tahunan melentur bersama kenyataan; yang tak pernah ditinjau menjadi barang museum."
      }
     ],
     "sections": [
      {
       "icon": "target",
       "h": {
        "en": "Destination, way-stations, gates",
        "id": "Tujuan, persinggahan, gerbang"
       },
       "body": {
        "en": "Take your 3-year outcome (Map 2.3) and extend it to a 5-year destination role family — “senior analyst owning a domain”, “product manager of a small squad”, “team lead in operations”. Then ask: what role usually precedes that one? And what precedes that? Two or three way-stations emerge. For each transition, list the <b>asset gate</b>: what the next role's hiring manager must be able to verify — skills at what depth, results of what size, references from whom. Now the architecture reads backwards into the present: this year's job is to satisfy the first gate. Vague years disappear from the design; every quarter has a because.",
        "id": "Ambil hasil 3 tahunmu (Map 2.3) dan panjangkan ke keluarga peran tujuan 5 tahun — “analis senior yang memiliki satu ranah”, “manajer produk skuad kecil”, “pemimpin tim operasi”. Lalu tanyakan: peran apa yang biasanya mendahului itu? Dan apa yang mendahuluinya? Dua-tiga persinggahan muncul. Untuk tiap transisi, daftar <b>gerbang aset</b>: apa yang harus bisa diverifikasi manajer perekrut peran berikut — keterampilan sedalam apa, hasil sebesar apa, referensi dari siapa. Kini arsitektur terbaca mundur ke masa kini: tugas tahun ini adalah memenuhi gerbang pertama. Tahun-tahun samar hilang dari rancangan; tiap kuartal punya alasan."
       },
       "img": "../../assets/bg/journey-bg.jpg",
       "imgPos": "center 45%"
      },
      {
       "icon": "gear",
       "h": {
        "en": "Choosing way-stations by yield",
        "id": "Memilih persinggahan berdasarkan hasil"
       },
       "body": {
        "en": "When options appear — an internal move, an external offer, a project assignment — score them against the gate they should serve, not against their surface attributes. A slightly lower-paid role that mints the exact skill your next gate requires beats a raise that extends your current asset profile sideways. The trap this avoids has a name in every industry: the well-paid dead end — five years in, comfortable, and priced out of the transition you actually wanted because no way-station ever minted its requirements. The two-lens protocol from The Pack (outcome fit + reversibility) is the scoring tool; the architecture supplies the outcome half.",
        "id": "Saat opsi muncul — perpindahan internal, tawaran eksternal, penugasan proyek — nilai terhadap gerbang yang harus dilayaninya, bukan atribut permukaannya. Peran bergaji sedikit lebih rendah yang mencetak persis keterampilan yang dibutuhkan gerbang berikutmu mengalahkan kenaikan gaji yang memanjangkan profil asetmu ke samping. Perangkap yang dihindari ini punya nama di tiap industri: jalan buntu bergaji enak — lima tahun berlalu, nyaman, dan terlalu mahal untuk transisi yang sebenarnya kamu inginkan karena tak ada persinggahan yang mencetak persyaratannya. Protokol dua lensa dari The Pack (kecocokan hasil + keterbalikan) adalah alat penilaiannya; arsitektur memasok separuh kecocokan hasil."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "The annual review",
        "id": "Tinjauan tahunan"
       },
       "body": {
        "en": "Once a year — a birthday, a new year, an anniversary — reopen the architecture for ninety minutes. Three questions. <b>Did reality vote?</b> Promotions, reorganisations, market shifts and discovered preferences are data; update the destination if the data says so — revised by evidence is design working, not failing. <b>Did the gates move?</b> Industries reprice skills; check that next year's targets still open the transition. <b>Is the current role still yielding?</b> If two consecutive reviews find low yield and no engineering fix, the architecture itself is telling you it is time for Module 7's second move. Store the review in the Route Planner beside the diagnostic history.",
        "id": "Setahun sekali — ulang tahun, tahun baru, hari jadi — buka lagi arsitekturnya selama sembilan puluh menit. Tiga pertanyaan. <b>Apakah kenyataan memberi suara?</b> Promosi, reorganisasi, pergeseran pasar, dan preferensi yang tersingkap adalah data; perbarui tujuan jika data berkata begitu — direvisi oleh bukti adalah rancangan yang bekerja, bukan gagal. <b>Apakah gerbangnya bergeser?</b> Industri menghargai ulang keterampilan; pastikan target tahun depan masih membuka transisi. <b>Apakah peran kini masih menghasilkan?</b> Jika dua tinjauan berturut menemukan hasil rendah tanpa perbaikan rekayasa, arsitektur itu sendiri memberitahumu waktunya langkah kedua Modul 7. Simpan tinjauan di Route Planner di samping riwayat diagnostik."
       }
      }
     ],
     "diagram": {
      "type": "timeline",
      "exhibit": {
       "en": "Exhibit 1: Architecture read backwards — gates define this year's targets.",
       "id": "Peraga 1: Arsitektur dibaca mundur — gerbang menentukan target tahun ini."
      },
      "title": {
       "en": "Destination → way-stations → this year",
       "id": "Tujuan → persinggahan → tahun ini"
      },
      "items": [
       {
        "h": {
         "en": "Year 5 · Destination",
         "id": "Tahun 5 · Tujuan"
        },
        "sub": {
         "en": "Role family + level, in pencil",
         "id": "Keluarga peran + level, dengan pensil"
        }
       },
       {
        "h": {
         "en": "Year 3 · Way-station 2",
         "id": "Tahun 3 · Persinggahan 2"
        },
        "sub": {
         "en": "The role that usually precedes it",
         "id": "Peran yang biasanya mendahuluinya"
        }
       },
       {
        "h": {
         "en": "Year 1–2 · Way-station 1",
         "id": "Tahun 1–2 · Persinggahan 1"
        },
        "sub": {
         "en": "Often your current role, engineered",
         "id": "Sering peranmu kini, direkayasa"
        }
       },
       {
        "h": {
         "en": "This quarter",
         "id": "Kuartal ini"
        },
        "sub": {
         "en": "Asset targets from the first gate",
         "id": "Target aset dari gerbang pertama"
        }
       }
      ],
      "longdesc": {
       "en": "A right-to-left timeline: a year-five destination role family defines the year-three way-station, which defines the year-one-to-two way-station — often the current role deliberately engineered — which defines this quarter's concrete asset targets: skills, results, relationships to build now.",
       "id": "Garis waktu kanan-ke-kiri: keluarga peran tujuan tahun kelima menentukan persinggahan tahun ketiga, yang menentukan persinggahan tahun satu-dua — sering peran saat ini yang direkayasa sengaja — yang menentukan target aset konkret kuartal ini: keterampilan, hasil, hubungan yang dibangun sekarang."
      }
     },
     "checks": [
      {
       "q": {
        "en": "An external offer pays 20% more but mints none of your next gate's requirements. The architecture's read?",
        "id": "Tawaran eksternal membayar 20% lebih tetapi tak mencetak satu pun persyaratan gerbang berikutmu. Bacaan arsitekturnya?"
       },
       "options": [
        {
         "en": "Take it — salary compounds too",
         "id": "Ambil — gaji juga menggandakan diri"
        },
        {
         "en": "Score it as a sideways move: unless it opens a different gate you value, the raise buys a well-paid dead end",
         "id": "Nilai sebagai langkah menyamping: kecuali membuka gerbang lain yang kamu hargai, kenaikan itu membeli jalan buntu bergaji enak"
        },
        {
         "en": "Decline all external offers before year three",
         "id": "Tolak semua tawaran eksternal sebelum tahun ketiga"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Pay matters, but the gate test comes first: transitions are bought with assets, and a role that mints none prices you out of the destination later.",
        "id": "Gaji penting, tetapi uji gerbang lebih dulu: transisi dibeli dengan aset, dan peran yang tak mencetaknya membuatmu terlalu mahal untuk tujuan itu kelak."
       }
      }
     ],
     "tool": {
      "id": "plan",
      "mode": "readiness",
      "title": {
       "en": "Baseline your architecture",
       "id": "Ukur dasar arsitekturmu"
      },
      "body": {
       "en": "The readiness diagnostic scores the six dimensions this course trains — your first honest reading of where the gates stand.",
       "id": "Diagnostik kesiapan menilai enam dimensi yang dilatih kursus ini — pembacaan jujur pertamamu atas posisi gerbang-gerbang itu."
      },
      "cta": {
       "en": "Run the diagnostic →",
       "id": "Jalankan diagnostik →"
      }
     }
    },
    {
     "n": "1.3",
     "title": {
      "en": "Career Milestones, Decision Gates, and Red Lines",
      "id": "Tonggak Karier, Gerbang Keputusan, dan Garis Merah"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Architectures fail at three specific joints: milestones nobody defined, decision gates nobody scheduled, and red lines nobody wrote down until they were being crossed. This lesson installs all three.",
      "id": "Arsitektur gagal di tiga sambungan spesifik: tonggak yang tak pernah didefinisikan, gerbang keputusan yang tak pernah dijadwalkan, dan garis merah yang tak pernah ditulis sampai sedang dilanggar. Pelajaran ini memasang ketiganya."
     },
     "objectives": [
      {
       "en": "Define verifiable milestones for the next eighteen months.",
       "id": "Mendefinisikan tonggak terverifikasi untuk delapan belas bulan ke depan."
      },
      {
       "en": "Schedule decision gates: dates when staying must be re-justified, not assumed.",
       "id": "Menjadwalkan gerbang keputusan: tanggal ketika bertahan harus dijustifikasi ulang, bukan diasumsikan."
      },
      {
       "en": "Write your red lines before any pressure to cross them exists.",
       "id": "Menulis garis merahmu sebelum tekanan untuk melanggarnya ada."
      }
     ],
     "takeaways": [
      {
       "en": "A milestone you cannot verify is a mood; write them as artefacts and witnesses.",
       "id": "Tonggak yang tak bisa diverifikasi adalah suasana hati; tulis sebagai artefak dan saksi."
      },
      {
       "en": "Decision gates prevent the default decision — drifting — from making itself year after year.",
       "id": "Gerbang keputusan mencegah keputusan default — hanyut — mengambil dirinya sendiri tahun demi tahun."
      },
      {
       "en": "Red lines written in calm weather hold in storms; improvised ethics negotiate themselves down.",
       "id": "Garis merah yang ditulis saat cuaca tenang bertahan dalam badai; etika improvisasi menawar dirinya turun."
      }
     ],
     "sections": [
      {
       "icon": "flag",
       "h": {
        "en": "Milestones that verify",
        "id": "Tonggak yang terverifikasi"
       },
       "body": {
        "en": "“Grow in my role this year” cannot fail, which is why it cannot succeed. A milestone needs the evidence-rule treatment: <i>own the monthly reporting end-to-end by June, presented to the department head</i>; <i>ship the vendor-comparison analysis and have it cited in the Q3 decision</i>; <i>be the person new joiners are sent to for the data pipeline</i>. Artefact, date, witness. Two or three per half-year is enough — milestones are steering marks, not a to-do list. Log them in the Route Planner's 90-day plans; review them at each plan's end.",
        "id": "“Bertumbuh dalam peranku tahun ini” tak bisa gagal, karena itulah ia tak bisa berhasil. Tonggak butuh perlakuan aturan bukti: <i>memiliki pelaporan bulanan ujung-ke-ujung pada Juni, dipresentasikan ke kepala departemen</i>; <i>merilis analisis perbandingan vendor dan dikutip dalam keputusan Q3</i>; <i>menjadi orang yang dituju karyawan baru untuk pipeline data</i>. Artefak, tanggal, saksi. Dua-tiga per setengah tahun cukup — tonggak adalah tanda kemudi, bukan daftar tugas. Catat di rencana 90 hari Route Planner; tinjau di akhir tiap rencana."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "Decision gates",
        "id": "Gerbang keputusan"
       },
       "body": {
        "en": "Staying in a role is a decision, but it never feels like one — it is what happens when no decision is made. Decision gates fix the asymmetry: calendar dates (every 12 months, or at natural events like review cycles) when you formally re-decide, in writing, with three inputs: the asset yield of the last period (win log), the architecture's current gates, and the market's price for your profile (a glance at live vacancies — not to apply, to calibrate). Three honest outcomes: recommit with new targets; engineer the role; or open Module 7's second-move process. Any outcome is fine. Skipping the gate is the only failure.",
        "id": "Bertahan dalam peran adalah keputusan, tetapi tak pernah terasa begitu — ia yang terjadi saat tak ada keputusan dibuat. Gerbang keputusan memperbaiki asimetrinya: tanggal kalender (tiap 12 bulan, atau di peristiwa alami seperti siklus penilaian) ketika kamu memutuskan ulang secara resmi, tertulis, dengan tiga masukan: hasil aset periode lalu (catatan kemenangan), gerbang arsitektur saat ini, dan harga pasar profilmu (melirik lowongan aktif — bukan untuk melamar, untuk kalibrasi). Tiga hasil jujur: berkomitmen ulang dengan target baru; merekayasa peran; atau membuka proses langkah kedua Modul 7. Hasil mana pun baik. Melewatkan gerbangnya satu-satunya kegagalan."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Red lines",
        "id": "Garis merah"
       },
       "body": {
        "en": "Write them now, while nothing is at stake: what you will not do for any promotion — falsify, take credit that is not yours, stay silent on safety issues, sacrifice the health floor from Map 5.1, miss the family events that matter. Two properties make red lines work. They are <b>few</b> — three to five; a long list is a wish list. And they are <b>pre-decided</b> — the entire point is that when the test arrives disguised as a small favour with a deadline, the decision was already made by a calmer version of you. People with written red lines report the moments as easier, not harder: there is nothing to negotiate.",
        "id": "Tulis sekarang, selagi tak ada yang dipertaruhkan: apa yang tak akan kamu lakukan demi promosi apa pun — memalsukan, mengambil penghargaan yang bukan milikmu, diam soal isu keselamatan, mengorbankan lantai kesehatan dari Map 5.1, melewatkan acara keluarga yang penting. Dua sifat membuat garis merah bekerja. Ia <b>sedikit</b> — tiga sampai lima; daftar panjang adalah daftar keinginan. Dan ia <b>diputuskan di muka</b> — inti utamanya adalah saat ujian tiba menyamar sebagai bantuan kecil bertenggat, keputusan sudah dibuat oleh versi dirimu yang lebih tenang. Orang dengan garis merah tertulis melaporkan momen-momen itu lebih mudah, bukan lebih sulit: tak ada yang perlu dinegosiasikan."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Milestones as feelings",
         "id": "Tonggak sebagai perasaan"
        },
        "fix": {
         "en": "“Be more confident in meetings” verifies nothing. “Present the monthly numbers twice this quarter” does.",
         "id": "“Lebih percaya diri di rapat” tak memverifikasi apa pun. “Presentasikan angka bulanan dua kali kuartal ini” iya."
        }
       },
       {
        "h": {
         "en": "Gates only when unhappy",
         "id": "Gerbang hanya saat tak bahagia"
        },
        "fix": {
         "en": "Unhappiness is a lagging indicator. Scheduled gates catch drift while it is still cheap to correct.",
         "id": "Ketidakbahagiaan adalah indikator tertinggal. Gerbang terjadwal menangkap hanyut selagi masih murah dikoreksi."
        }
       },
       {
        "h": {
         "en": "Red lines drafted mid-crisis",
         "id": "Garis merah disusun di tengah krisis"
        },
        "fix": {
         "en": "Under pressure, everything is negotiable. Write them this week, in calm, and tell one person who will ask about them.",
         "id": "Di bawah tekanan, semuanya bisa ditawar. Tulis minggu ini, dalam tenang, dan beri tahu satu orang yang akan menanyakannya."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "What makes a scheduled decision gate different from “I'll leave when it gets bad”?",
        "id": "Apa beda gerbang keputusan terjadwal dari “aku akan pergi kalau sudah parah”?"
       },
       "options": [
        {
         "en": "Nothing — both lead to the same decision eventually",
         "id": "Tidak ada — keduanya akhirnya menuju keputusan sama"
        },
        {
         "en": "The gate runs on a date with written inputs, so drift gets examined while correction is cheap — “when it gets bad” examines only after years are spent",
         "id": "Gerbang berjalan pada tanggal dengan masukan tertulis, sehingga hanyut diperiksa selagi koreksi murah — “kalau sudah parah” memeriksa hanya setelah bertahun terpakai"
        },
        {
         "en": "Gates are for managers, not individual contributors",
         "id": "Gerbang untuk manajer, bukan kontributor individu"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Feelings lag reality by years in careers. Calendar-driven review with evidence inputs is how builders catch the lag.",
        "id": "Perasaan tertinggal bertahun-tahun dari kenyataan dalam karier. Tinjauan berbasis kalender dengan masukan bukti adalah cara pembangun menangkap ketertinggalan itu."
       }
      }
     ]
    },
    {
     "n": "1.4",
     "title": {
      "en": "Mapping Career Capital",
      "id": "Memetakan Modal Karier"
     },
     "dur": {
      "en": "10 min",
      "id": "10 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "Career capital made concrete: an inventory drill that maps your current assets, a gap drill that compares them against your next gate, and a yield drill that engineers your present role — the module's architecture, operationalised in one sitting.",
      "id": "Modal karier dibuat konkret: latihan inventaris yang memetakan asetmu kini, latihan celah yang membandingkannya dengan gerbang berikutmu, dan latihan hasil yang merekayasa peranmu sekarang — arsitektur modul ini, dioperasikan dalam sekali duduk."
     },
     "objectives": [
      {
       "en": "Inventory your current career capital across the four asset classes.",
       "id": "Menginventarisasi modal kariermu kini di empat kelas aset."
      },
      {
       "en": "Compute the gap between your inventory and your next transition's gate.",
       "id": "Menghitung celah antara inventarismu dan gerbang transisi berikutmu."
      },
      {
       "en": "Design two moves that raise your current role's asset yield this quarter.",
       "id": "Merancang dua langkah yang menaikkan hasil aset peranmu kuartal ini."
      }
     ],
     "takeaways": [
      {
       "en": "An honest inventory is usually smaller than the CV suggests and larger than imposter syndrome claims.",
       "id": "Inventaris jujur biasanya lebih kecil dari kesan CV dan lebih besar dari klaim sindrom penipu."
      },
      {
       "en": "Gaps are shopping lists, not verdicts — each maps to a project, a request, or a course.",
       "id": "Celah adalah daftar belanja, bukan vonis — masing-masing terpeta ke proyek, permintaan, atau kursus."
      },
      {
       "en": "Yield engineering is a conversation away more often than it feels: managers grant scope to people who ask with a plan.",
       "id": "Rekayasa hasil lebih sering hanya sejauh satu percakapan: manajer memberi lingkup pada orang yang meminta dengan rencana."
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 — The inventory",
        "id": "Latihan 1 — Inventaris"
       },
       "body": {
        "en": "Twenty minutes, four columns: skills (with their evidence), results (with numbers and witnesses), relationships (who would vouch, based on what), reputation (what you are known for, honestly). Write it, then reveal.",
        "id": "Dua puluh menit, empat kolom: keterampilan (dengan buktinya), hasil (dengan angka dan saksi), hubungan (siapa yang mau menjamin, berdasarkan apa), reputasi (kamu dikenal untuk apa, sejujurnya). Tulis, lalu buka."
       },
       "debrief": {
        "en": "Common findings, all normal: skills without evidence (you can do it, nothing shows it — the fix is an artefact, not more skill); results you never logged and can no longer reconstruct precisely (the win log exists to end this); relationships that are all same-level peers (senior trust takes deliberate building — Module 6); a reputation column that is blank because you never asked (ask two colleagues this week: “what would you say I'm the go-to person for?” — the answers are your current brand, whatever you intended it to be).",
        "id": "Temuan umum, semuanya normal: keterampilan tanpa bukti (kamu bisa, tak ada yang menunjukkannya — perbaikannya artefak, bukan tambah keterampilan); hasil yang tak pernah dicatat dan tak lagi bisa direkonstruksi persis (catatan kemenangan ada untuk mengakhiri ini); hubungan yang semuanya rekan selevel (kepercayaan senior butuh pembangunan sengaja — Modul 6); kolom reputasi kosong karena tak pernah bertanya (tanya dua kolega minggu ini: “menurutmu aku jadi rujukan untuk apa?” — jawabannya adalah merekmu saat ini, apa pun niatmu)."
       }
      },
      {
       "h": {
        "en": "Drill 2 — The gap",
        "id": "Latihan 2 — Celah"
       },
       "body": {
        "en": "Write your next way-station's gate as its hiring manager would: three verifiable requirements. Compare against the inventory. Name the two largest gaps, then reveal.",
        "id": "Tulis gerbang persinggahan berikutmu sebagaimana manajer perekrutnya: tiga persyaratan terverifikasi. Bandingkan dengan inventaris. Namai dua celah terbesar, lalu buka."
       },
       "debrief": {
        "en": "Gap types and their fixes: a <b>skill-depth gap</b> (you have used the tool; the gate needs ownership) maps to volunteering for the next project that exercises it end-to-end; an <b>evidence gap</b> (you have done it; nothing proves it) maps to documentation and a presentation — cheapest gap to close, most commonly ignored; a <b>scope gap</b> (the gate needs numbers bigger than your role offers) maps to Drill 3 or, if the ceiling is structural, to Module 7. Write each gap's fix as a named move with a quarter attached — that list is your development plan, derived rather than wished.",
        "id": "Jenis celah dan perbaikannya: <b>celah kedalaman keterampilan</b> (kamu pernah memakai alatnya; gerbang butuh kepemilikan) terpeta ke mengajukan diri untuk proyek berikut yang melatihnya ujung-ke-ujung; <b>celah bukti</b> (kamu sudah melakukannya; tak ada yang membuktikan) terpeta ke dokumentasi dan presentasi — celah termurah untuk ditutup, paling sering diabaikan; <b>celah lingkup</b> (gerbang butuh angka lebih besar dari yang ditawarkan peranmu) terpeta ke Latihan 3 atau, jika langit-langitnya struktural, ke Modul 7. Tulis perbaikan tiap celah sebagai langkah bernama dengan kuartal terlampir — daftar itu rencana pengembanganmu, diturunkan alih-alih diharapkan."
       }
      },
      {
       "h": {
        "en": "Drill 3 — Yield engineering",
        "id": "Latihan 3 — Rekayasa hasil"
       },
       "body": {
        "en": "Design two concrete moves that raise your current role's asset yield: one you can do without permission, one that needs your manager's yes. Script the manager conversation. Then reveal.",
        "id": "Rancang dua langkah konkret yang menaikkan hasil aset peranmu kini: satu yang bisa tanpa izin, satu yang butuh persetujuan manajermu. Skripkan percakapan manajernya. Lalu buka."
       },
       "debrief": {
        "en": "Permissionless model: document and standardise something you already do until it becomes the team's artefact with your name in the header — yield minted from existing work. Permissioned model, scripted: “I'd like to take ownership of X next quarter. It needs doing [evidence], I've handled the smaller version [evidence], and I'd keep my current commitments whole — could we try it for one quarter?” The anatomy: a real team need, proof of readiness, protection of existing delivery, and a bounded trial. Managers say yes to bounded trials with protected delivery far more often than to open-ended ambition — the ask itself demonstrates the judgment being requested.",
        "id": "Model tanpa izin: dokumentasikan dan bakukan sesuatu yang sudah kamu kerjakan sampai menjadi artefak tim dengan namamu di kepala berkas — hasil dicetak dari kerja yang ada. Model berizin, terskrip: “Saya ingin mengambil kepemilikan X kuartal depan. Ia memang perlu dikerjakan [bukti], saya sudah menangani versi kecilnya [bukti], dan komitmen saya saat ini tetap utuh — bisakah kita coba satu kuartal?” Anatominya: kebutuhan tim nyata, bukti kesiapan, perlindungan pengiriman yang ada, dan uji coba berbatas. Manajer berkata ya pada uji coba berbatas dengan pengiriman terlindungi jauh lebih sering daripada pada ambisi tanpa ujung — permintaannya sendiri mendemonstrasikan penilaian yang sedang diminta."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Your inventory shows real skills but almost no evidence artefacts. What does this module call that?",
        "id": "Inventarismu menunjukkan keterampilan nyata tetapi hampir tanpa artefak bukti. Modul ini menyebutnya apa?"
       },
       "options": [
        {
         "en": "Imposter syndrome — the skills probably are not real",
         "id": "Sindrom penipu — keterampilannya mungkin tak nyata"
        },
        {
         "en": "The cheapest gap to close: capability exists, legibility does not — documentation and presentation mint the evidence",
         "id": "Celah termurah untuk ditutup: kemampuan ada, keterbacaannya tidak — dokumentasi dan presentasi mencetak buktinya"
        },
        {
         "en": "A reason to change roles immediately",
         "id": "Alasan segera pindah peran"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Careers are advanced by verifiable assets. Skill without evidence is real to you and invisible to every gate — and visibility is manufacturable this quarter.",
        "id": "Karier dimajukan oleh aset terverifikasi. Keterampilan tanpa bukti nyata bagimu dan tak terlihat bagi tiap gerbang — dan keterlihatan bisa diproduksi kuartal ini."
       }
      }
     ],
     "tool": {
      "id": "plan",
      "mode": "plan",
      "title": {
       "en": "Turn the drills into a plan",
       "id": "Ubah latihan menjadi rencana"
      },
      "body": {
       "en": "Load your gap fixes and yield moves into a 90-day plan — three phases, tracked weekly, reviewed at the end.",
       "id": "Masukkan perbaikan celah dan langkah hasilmu ke rencana 90 hari — tiga fase, dilacak mingguan, ditinjau di akhir."
      },
      "cta": {
       "en": "Build the 90-day plan →",
       "id": "Susun rencana 90 hari →"
      }
     }
    }
   ],
   "hero": "../../assets/bg/journey-start.jpg",
   "heroPos": "center 45%"
  },
  {
   "num": 2,
   "title": {
    "en": "The Performance Game",
    "id": "Permainan Performa"
   },
   "overview": {
    "en": "Module 2 of The Route focuses on the performance game. Work through the lessons in order — each builds on the last.",
    "id": "Modul 2 dari The Route berfokus pada Permainan Performa. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply the performance game to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Permainan Performa pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "2.1",
     "title": {
      "en": "What Your Organisation Actually Measures",
      "id": "Apa yang Sebenarnya Diukur Organisasimu"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Every organisation runs two measurement systems: the official one in the review template, and the operating one in your manager's head. High performers read both. This lesson teaches the decoding — what is actually measured, by whom, on what calendar.",
      "id": "Setiap organisasi menjalankan dua sistem pengukuran: yang resmi di templat penilaian, dan yang beroperasi di kepala manajermu. Pekerja unggul membaca keduanya. Pelajaran ini mengajarkan pembacaannya — apa yang sebenarnya diukur, oleh siapa, pada kalender apa."
     },
     "objectives": [
      {
       "en": "Decode your organisation's official and operating measurement systems.",
       "id": "Membaca sistem pengukuran resmi dan operasional organisasimu."
      },
      {
       "en": "Identify your manager's scoreboard: what they are measured on, and how you show up in it.",
       "id": "Mengenali papan skor manajermu: mereka diukur atas apa, dan bagaimana kamu tampil di dalamnya."
      },
      {
       "en": "Align your quarter's effort with what is measured — without becoming a metric gamer.",
       "id": "Menyelaraskan usaha kuartalmu dengan yang diukur — tanpa menjadi pemain metrik."
      }
     ],
     "takeaways": [
      {
       "en": "Working hard on unmeasured things is a donation; know the scoreboard before choosing your effort.",
       "id": "Bekerja keras pada hal tak terukur adalah donasi; kenali papan skor sebelum memilih usahamu."
      },
      {
       "en": "Your manager's scoreboard is your shadow scoreboard: their goals price your contributions.",
       "id": "Papan skor manajermu adalah papan skor bayanganmu: tujuan mereka menghargai kontribusimu."
      },
      {
       "en": "Alignment is not gaming: gaming optimises the number against the mission; alignment serves both.",
       "id": "Penyelarasan bukan permainan: permainan mengoptimalkan angka melawan misi; penyelarasan melayani keduanya."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "The two systems",
        "id": "Dua sistem"
       },
       "body": {
        "en": "The <b>official system</b> lives in HR templates: competencies, ratings, calibration meetings on a known calendar. Learn it precisely — the criteria wording, who rates, when calibration happens — because vague awareness of the official system is the most common early-career blind spot. The <b>operating system</b> is what actually moves ratings inside the room: which projects the leadership actually watches, what your skip-level hears about you, which behaviours are punished regardless of the handbook. It is discovered by observation and by asking safe versions of sharp questions: “which of our team's deliverables matter most upstairs this half?” Both systems are real; only one is written down.",
        "id": "<b>Sistem resmi</b> tinggal di templat HR: kompetensi, peringkat, rapat kalibrasi pada kalender yang diketahui. Pelajari dengan presisi — bunyi kriterianya, siapa menilai, kapan kalibrasi terjadi — karena kesadaran samar atas sistem resmi adalah titik buta awal karier paling umum. <b>Sistem operasi</b> adalah yang benar-benar menggerakkan peringkat di dalam ruangan: proyek mana yang sungguh diperhatikan pimpinan, apa yang didengar atasan-atasanmu tentangmu, perilaku mana yang dihukum terlepas dari buku panduan. Ia ditemukan lewat pengamatan dan menanyakan versi aman dari pertanyaan tajam: “dari hasil kerja tim kita, mana yang paling berarti di atas semester ini?” Kedua sistem nyata; hanya satu yang tertulis."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Your manager's scoreboard",
        "id": "Papan skor manajermu"
       },
       "body": {
        "en": "Your manager is also being measured — on team delivery, on specific numbers, on problems that never reach their boss. Learn that scoreboard: what did they commit to this half? Which of their metrics are red? What does their manager ask them about? You do not need espionage; one honest conversation does it — “what are you on the hook for this quarter, and where can my work move it?” Contributions that move your manager's red metrics are priced double; work that creates problems they must explain upstairs is priced negative regardless of its local quality. This is not politics — it is knowing which direction the organisation's gravity points.",
        "id": "Manajermu juga sedang diukur — atas pengiriman tim, atas angka tertentu, atas masalah yang tak pernah mencapai bos mereka. Pelajari papan skor itu: apa komitmen mereka semester ini? Metrik mereka mana yang merah? Apa yang ditanyakan manajer mereka? Kamu tak butuh spionase; satu percakapan jujur cukup — “apa tanggunganmu kuartal ini, dan di mana kerjaku bisa menggerakkannya?” Kontribusi yang menggerakkan metrik merah manajermu dihargai ganda; kerja yang menciptakan masalah yang harus mereka jelaskan ke atas dihargai negatif berapa pun mutu lokalnya. Ini bukan politik — ini mengetahui arah gravitasi organisasi."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "Alignment without gaming",
        "id": "Penyelarasan tanpa permainan"
       },
       "body": {
        "en": "The line between reading the scoreboard and gaming it: gaming optimises the measured number at the mission's expense — sandbagging targets, cherry-picking easy tickets, claiming adjacent credit. It works briefly and is always eventually visible, at which point it reprices everything you did before. Alignment chooses, among genuinely valuable work, the valuable work that is also measured — and makes the unmeasured valuable work legible (Module 2.2) so the system can price it. When you find truly valuable work that the system structurally cannot see, that is a conversation with your manager, not a silent donation: “X matters and isn't visible anywhere — can we put it on the scoreboard?”",
        "id": "Garis antara membaca papan skor dan memainkannya: permainan mengoptimalkan angka terukur dengan mengorbankan misi — menahan target, memilih tiket mudah, mengklaim penghargaan tetangga. Ia berhasil sebentar dan selalu akhirnya terlihat, dan saat itu ia menghargai ulang semua yang kamu kerjakan sebelumnya. Penyelarasan memilih, di antara kerja yang sungguh bernilai, kerja bernilai yang juga terukur — dan membuat kerja bernilai tak terukur menjadi terbaca (Modul 2.2) agar sistem bisa menghargainya. Saat kamu menemukan kerja sungguh bernilai yang secara struktural tak bisa dilihat sistem, itu bahan percakapan dengan manajermu, bukan donasi diam-diam: “X penting dan tak terlihat di mana pun — bisakah kita taruh di papan skor?”"
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "You discover your manager's most-watched metric is customer response time, while you have been perfecting internal documentation. The lesson's move?",
        "id": "Kamu menemukan metrik paling diawasi manajermu adalah waktu respons pelanggan, sementara kamu menyempurnakan dokumentasi internal. Langkah menurut pelajaran ini?"
       },
       "options": [
        {
         "en": "Continue — documentation is objectively valuable",
         "id": "Lanjutkan — dokumentasi bernilai objektif"
        },
        {
         "en": "Rebalance: move visible effort toward the watched metric, and make the documentation's value legible in its terms (“cuts onboarding, protects response times”)",
         "id": "Seimbangkan ulang: pindahkan usaha terlihat ke metrik yang diawasi, dan buat nilai dokumentasi terbaca dalam bahasanya (“memangkas onboarding, menjaga waktu respons”)"
        },
        {
         "en": "Stop documenting — only measured work matters",
         "id": "Berhenti mendokumentasikan — hanya kerja terukur yang berarti"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Both matter; gravity decides pricing. Alignment serves the mission and the scoreboard at once — often by translating one into the other's language.",
        "id": "Keduanya penting; gravitasi menentukan harga. Penyelarasan melayani misi dan papan skor sekaligus — sering dengan menerjemahkan satu ke bahasa lainnya."
       }
      }
     ],
     "quote": {
      "en": "Working hard on unmeasured things is a donation.",
      "id": "Bekerja keras pada hal yang tak diukur adalah donasi."
     }
    },
    {
     "n": "2.2",
     "title": {
      "en": "Visible Contribution Without Self-Promotion",
      "id": "Kontribusi Terlihat Tanpa Promosi Diri"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Excellent work that nobody can see gets priced at zero — and the fix is not self-promotion, which everyone can smell. This lesson builds contribution legibility: delivery habits, artefacts and communication rhythms that let your work speak in rooms you are not in.",
      "id": "Kerja unggul yang tak terlihat siapa pun dihargai nol — dan perbaikannya bukan promosi diri, yang bisa dicium semua orang. Pelajaran ini membangun keterbacaan kontribusi: kebiasaan pengiriman, artefak, dan ritme komunikasi yang membuat kerjamu berbicara di ruangan yang tak kamu hadiri."
     },
     "objectives": [
      {
       "en": "Adopt the Friday one-liner and other legibility rhythms.",
       "id": "Mengadopsi satu-baris Jumat dan ritme keterbacaan lain."
      },
      {
       "en": "Convert finished work into artefacts that travel without you.",
       "id": "Mengubah kerja selesai menjadi artefak yang bepergian tanpamu."
      },
      {
       "en": "Credit generously and accurately — the legibility habit that compounds fastest.",
       "id": "Memberi penghargaan dengan murah hati dan akurat — kebiasaan keterbacaan yang menggandakan diri tercepat."
      }
     ],
     "takeaways": [
      {
       "en": "Legibility is service, not bragging: your manager needs your work visible to defend the team's results.",
       "id": "Keterbacaan adalah pelayanan, bukan pamer: manajermu butuh kerjamu terlihat untuk membela hasil tim."
      },
      {
       "en": "Artefacts outperform announcements: a document with your name travels further than any status update.",
       "id": "Artefak mengungguli pengumuman: dokumen bernamamu bepergian lebih jauh dari pembaruan status mana pun."
      },
      {
       "en": "Generous credit makes your reports trustworthy — and trustworthy reporting is read, which is the whole point.",
       "id": "Penghargaan murah hati membuat laporanmu tepercaya — dan pelaporan tepercaya itu dibaca, itulah intinya."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "Rhythms",
        "id": "Ritme"
       },
       "body": {
        "en": "The <b>Friday one-liner</b> to your manager: shipped X, next Y, blocked on Z — fifteen words that compound into an always-current answer to “what does she actually do?”. The <b>meeting artefact</b>: when you present, a one-pager exists afterwards; verbal-only contributions evaporate by Tuesday. The <b>milestone note</b>: when something ships, a short note to stakeholders — what changed, what it means for them, who helped. None of this is noise if it follows the pyramid discipline from The Map: lead with what the reader needs, keep it shorter than they expect, stop. The volume that annoys is status theatre; the volume that serves is decision-relevant information arriving before it is asked for.",
        "id": "<b>Satu-baris Jumat</b> ke manajermu: merilis X, berikutnya Y, terhambat Z — lima belas kata yang menggandakan diri menjadi jawaban selalu-terkini atas “dia sebenarnya mengerjakan apa?”. <b>Artefak rapat</b>: saat kamu presentasi, satu halaman ada setelahnya; kontribusi lisan-saja menguap sebelum Selasa. <b>Catatan tonggak</b>: saat sesuatu rilis, catatan singkat ke pemangku kepentingan — apa yang berubah, artinya bagi mereka, siapa yang membantu. Semua ini bukan kebisingan jika mengikuti disiplin piramida The Map: pimpin dengan yang dibutuhkan pembaca, buat lebih pendek dari dugaan mereka, berhenti. Volume yang mengganggu adalah teater status; volume yang melayani adalah informasi relevan-keputusan yang tiba sebelum diminta."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "Artefacts that travel",
        "id": "Artefak yang bepergian"
       },
       "body": {
        "en": "Work becomes legible when it takes a form that circulates: the analysis becomes a named document in the shared drive; the process you fixed becomes the runbook new joiners receive; the model becomes a dashboard with a footer crediting its author; the incident you resolved becomes a post-mortem others learn from. Two properties matter: <b>your name in the artefact</b> (headers, footers, commit history — factual, not flashy) and <b>usefulness to someone next quarter</b>, because artefacts are re-encountered at exactly the moments people form opinions about who is valuable. One travelling artefact per quarter is a realistic and sufficient rate.",
        "id": "Kerja menjadi terbaca saat mengambil bentuk yang beredar: analisis menjadi dokumen bernama di drive bersama; proses yang kamu perbaiki menjadi runbook yang diterima karyawan baru; model menjadi dasbor dengan catatan kaki mengkredit pembuatnya; insiden yang kamu selesaikan menjadi post-mortem yang dipelajari orang lain. Dua sifat penting: <b>namamu di artefak</b> (kepala berkas, catatan kaki, riwayat commit — faktual, tak norak) dan <b>berguna bagi seseorang kuartal depan</b>, karena artefak ditemui ulang tepat pada momen orang membentuk opini tentang siapa yang berharga. Satu artefak bepergian per kuartal adalah laju realistis dan cukup."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "Credit, the multiplier",
        "id": "Penghargaan, sang pengganda"
       },
       "body": {
        "en": "Name who helped, precisely, in every report and artefact: “the reconciliation used Dina's cleaning script”. Three effects compound. Your reporting becomes trusted, because people can verify the shared credit — and trusted reports are the ones that get read. Colleagues become allies who reciprocate legibility — they name you in rooms you are not in. And credit given never subtracts: the person who wrote “Dina's script” is remembered as the one who shipped the reconciliation and the one who is safe to work with. Credit hoarding reads instantly and prices everything you report afterwards at a discount.",
        "id": "Sebut siapa yang membantu, dengan presisi, di tiap laporan dan artefak: “rekonsiliasi memakai skrip pembersih Dina”. Tiga efek menggandakan diri. Pelaporanmu menjadi tepercaya, karena orang bisa memverifikasi penghargaan yang dibagi — dan laporan tepercaya itulah yang dibaca. Kolega menjadi sekutu yang membalas keterbacaan — mereka menyebut namamu di ruangan yang tak kamu hadiri. Dan penghargaan yang diberikan tak pernah mengurangi: penulis “skrip Dina” diingat sebagai yang merilis rekonsiliasi sekaligus yang aman diajak kerja. Menimbun penghargaan terbaca seketika dan mendiskon semua laporanmu setelahnya."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "Making a win legible — theatre vs service",
        "id": "Membuat kemenangan terbaca — teater vs pelayanan"
       },
       "q": {
        "en": "You automated a weekly report, saving the team ~4 hours/week",
        "id": "Kamu mengotomatiskan laporan mingguan, menghemat ~4 jam/minggu tim"
       },
       "weak": {
        "en": "(In the all-hands, unprompted) “I just want to highlight that I personally built an automation that saves us a huge amount of time every single week. It took a lot of late nights but that's just how I work.”",
        "id": "(Di rapat besar, tanpa diminta) “Saya hanya ingin menyoroti bahwa saya pribadi membangun otomasi yang menghemat sangat banyak waktu kita tiap minggu. Butuh banyak lembur tapi memang begitulah cara kerja saya.”"
       },
       "strong": {
        "en": "(Friday one-liner) “Shipped: weekly report automation — runs Mondays 7am, ~4 hrs/week saved, doc linked. Rina's template made the export step trivial. Next: applying it to the finance version if useful.”",
        "id": "(Satu-baris Jumat) “Rilis: otomasi laporan mingguan — jalan Senin 7 pagi, hemat ~4 jam/minggu, dokumen tertaut. Templat Rina membuat langkah ekspor jadi sepele. Berikutnya: menerapkan ke versi keuangan jika berguna.”"
       },
       "why": {
        "en": "Same fact, opposite reception: the strong version informs a decision-maker, credits accurately, attaches an artefact, and offers the next value — legibility as service.",
        "id": "Fakta sama, penerimaan berlawanan: versi kuat menginformasikan pengambil keputusan, memberi penghargaan akurat, melampirkan artefak, dan menawarkan nilai berikut — keterbacaan sebagai pelayanan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does generous, precise credit make your own work more visible rather than less?",
        "id": "Mengapa penghargaan murah hati dan presisi membuat kerjamu sendiri lebih terlihat, bukan kurang?"
       },
       "options": [
        {
         "en": "It does not — credit is zero-sum",
         "id": "Tidak — penghargaan itu zero-sum"
        },
        {
         "en": "It makes your reporting verifiably trustworthy, so it gets read — and it recruits allies who name you in rooms you are not in",
         "id": "Ia membuat pelaporanmu tepercaya dan terverifikasi, sehingga dibaca — dan merekrut sekutu yang menyebutmu di ruangan yang tak kamu hadiri"
        },
        {
         "en": "Managers require credit sections in reports",
         "id": "Manajer mewajibkan bagian penghargaan dalam laporan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Legibility runs on trust and distribution. Accurate credit buys both; hoarding destroys both.",
        "id": "Keterbacaan berjalan di atas kepercayaan dan distribusi. Penghargaan akurat membeli keduanya; menimbun menghancurkan keduanya."
       }
      }
     ]
    },
    {
     "n": "2.3",
     "title": {
      "en": "Seeking and Acting on Developmental Feedback",
      "id": "Mencari dan Menindaklanjuti Umpan Balik Pengembangan"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Feedback is the highest-grade fuel a career can burn, and most professionals receive almost none after probation — not because nobody has any, but because nobody volunteers it. This lesson builds the machinery for extracting, absorbing and acting on developmental feedback.",
      "id": "Umpan balik adalah bahan bakar kadar tertinggi yang bisa dibakar karier, dan kebanyakan profesional nyaris tak menerimanya setelah probasi — bukan karena tak ada yang punya, melainkan tak ada yang menawarkannya sukarela. Pelajaran ini membangun mesin untuk mengekstrak, menyerap, dan menindaklanjuti umpan balik pengembangan."
     },
     "objectives": [
      {
       "en": "Ask questions that produce specific feedback instead of polite reassurance.",
       "id": "Mengajukan pertanyaan yang menghasilkan umpan balik spesifik alih-alih penenangan sopan."
      },
      {
       "en": "Receive hard feedback without defending, deflecting or collapsing.",
       "id": "Menerima umpan balik keras tanpa membela, mengelak, atau runtuh."
      },
      {
       "en": "Close the loop visibly so feedback keeps flowing to you.",
       "id": "Menutup putaran secara terlihat agar umpan balik terus mengalir kepadamu."
      }
     ],
     "takeaways": [
      {
       "en": "“Any feedback?” harvests reassurance; “what one thing would make my reports more useful?” harvests information.",
       "id": "“Ada masukan?” memanen penenangan; “satu hal apa yang membuat laporanku lebih berguna?” memanen informasi."
      },
      {
       "en": "Your reaction to the last feedback determines whether you receive the next.",
       "id": "Reaksimu pada umpan balik terakhir menentukan apakah kamu menerima yang berikutnya."
      },
      {
       "en": "Feedback acted on visibly converts the giver into an investor in your growth.",
       "id": "Umpan balik yang ditindaklanjuti secara terlihat mengubah pemberinya menjadi penanam saham pertumbuhanmu."
      }
     ],
     "sections": [
      {
       "icon": "target",
       "h": {
        "en": "Extracting the specific",
        "id": "Mengekstrak yang spesifik"
       },
       "body": {
        "en": "General questions trigger social politeness; specific questions bypass it. Ask about an artefact: “in yesterday's deck, where did you want more or less?” Ask for one thing: “what single change would most improve how I run these calls?” Ask forward: “what would the next level of this look like?” Ask the negative safely: “what should I stop doing that I probably don't notice?” And ask the right people — the peer who watches you in meetings sees what your manager cannot. Cadence: one specific ask per fortnight beats an annual fishing trip; small regular questions also train your circle that you actually want answers.",
        "id": "Pertanyaan umum memicu kesopanan sosial; pertanyaan spesifik melewatinya. Tanyakan tentang artefak: “di dek kemarin, di mana kamu ingin lebih banyak atau lebih sedikit?” Minta satu hal: “satu perubahan apa yang paling memperbaiki caraku memimpin panggilan ini?” Tanya ke depan: “seperti apa level berikut dari ini?” Tanyakan yang negatif dengan aman: “apa yang sebaiknya kuhentikan yang mungkin tak kusadari?” Dan tanya orang yang tepat — rekan yang melihatmu di rapat menangkap yang tak bisa dilihat manajermu. Irama: satu permintaan spesifik per dua minggu mengalahkan ekspedisi memancing tahunan; pertanyaan kecil teratur juga melatih lingkaranmu bahwa kamu sungguh ingin jawaban."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Receiving under fire",
        "id": "Menerima di bawah tembakan"
       },
       "body": {
        "en": "Hard feedback triggers defence circuitry in everyone. The trained response has three beats. <b>Hold:</b> do not answer the content for the first breath — say “tell me more about that” instead; the extra sentences almost always soften and specify the message. <b>Split:</b> separate the data (what they observed) from the story (their interpretation) from your worth (not on the table). You can accept the data, negotiate the story, and leave your worth out of the room. <b>Thank and take it away:</b> “that's useful — let me sit with it and come back Thursday” beats both instant agreement and instant rebuttal; considered responses are also a professional signal in themselves. If the feedback was delivered badly — public, personal, exaggerated — the data may still be gold; extract it, and address the delivery separately if the relationship warrants.",
        "id": "Umpan balik keras memicu sirkuit pertahanan pada semua orang. Respons terlatih punya tiga ketukan. <b>Tahan:</b> jangan jawab isinya pada napas pertama — katakan “ceritakan lebih jauh” sebagai gantinya; kalimat tambahan hampir selalu melunakkan dan menspesifikkan pesan. <b>Belah:</b> pisahkan data (yang mereka amati) dari cerita (tafsiran mereka) dari hargamu (tidak sedang dibahas). Kamu bisa menerima datanya, menegosiasikan ceritanya, dan meninggalkan hargamu di luar ruangan. <b>Terima kasih dan bawa pulang:</b> “itu berguna — kuendapkan dulu dan kukembalikan Kamis” mengalahkan persetujuan instan maupun bantahan instan; respons yang dipertimbangkan juga sinyal profesional tersendiri. Jika umpan balik disampaikan buruk — publik, personal, dilebihkan — datanya mungkin tetap emas; ekstrak, dan bahas cara penyampaiannya terpisah jika hubungannya layak."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "Closing the loop",
        "id": "Menutup putaran"
       },
       "body": {
        "en": "Feedback dies when givers never learn what happened to it. The loop-closer: act on one concrete piece within two weeks, then tell the giver — “you said my updates buried the ask; I've led with it since, and approvals are coming back same-day.” This does three things: it improves the actual work; it converts the giver into someone invested in your trajectory (people water plants they have seen grow); and it marks you, accurately, as the rare colleague on whom feedback is not wasted — which is the exact reputation that makes seniors spend their scarce candour on you. One visible loop per month compounds into a private advisory board nobody else on your level has.",
        "id": "Umpan balik mati saat pemberinya tak pernah tahu apa yang terjadi padanya. Penutup putaran: tindaklanjuti satu hal konkret dalam dua minggu, lalu beri tahu pemberinya — “kamu bilang pembaruanku mengubur permintaan; sejak itu kupimpin dengannya, dan persetujuan kembali di hari yang sama.” Ini melakukan tiga hal: memperbaiki kerja sesungguhnya; mengubah pemberi menjadi penanam saham trajektorimu (orang menyiram tanaman yang pernah mereka lihat tumbuh); dan menandaimu, secara akurat, sebagai kolega langka yang umpan baliknya tak sia-sia — reputasi persis yang membuat para senior membelanjakan keterusterangan langka mereka padamu. Satu putaran terlihat per bulan menggandakan diri menjadi dewan penasihat pribadi yang tak dimiliki siapa pun selevelmu."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A senior says, in front of others, “your analysis missed the obvious seasonal effect — sloppy work.” The trained first move?",
        "id": "Seorang senior berkata, di depan orang lain, “analisismu melewatkan efek musiman yang jelas — kerja ceroboh.” Langkah pertama yang terlatih?"
       },
       "options": [
        {
         "en": "Defend the methodology immediately — public claims need public answers",
         "id": "Bela metodologinya segera — klaim publik butuh jawaban publik"
        },
        {
         "en": "Hold and split: “let me look at the seasonal point and come back to you today” — take the data, skip the verdict, handle the delivery later if needed",
         "id": "Tahan dan belah: “kuperiksa poin musimannya dan kukembalikan hari ini” — ambil datanya, lewati vonisnya, urus cara penyampaiannya nanti jika perlu"
        },
        {
         "en": "Apologise comprehensively for the sloppiness",
         "id": "Minta maaf menyeluruh atas kecerobohannya"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The seasonal point may be real gold; “sloppy” is a story you need not sign. Composure plus follow-through wins the room more than any instant rebuttal.",
        "id": "Poin musiman itu mungkin emas sungguhan; “ceroboh” adalah cerita yang tak perlu kamu tanda tangani. Ketenangan plus tindak lanjut memenangkan ruangan lebih dari bantahan instan mana pun."
       }
      }
     ],
     "tool": {
      "id": "field",
      "mode": "coach:feedback",
      "title": {
       "en": "Drill the feedback conversation",
       "id": "Latih percakapan umpan balik"
      },
      "body": {
       "en": "A peer review just called you 'hard to collaborate with'. Three decision points in the scenario coach — each choice answered against this lesson's frameworks.",
       "id": "Tinjauan rekan baru saja menyebutmu 'sulit diajak kolaborasi'. Tiga titik keputusan di pelatih skenario — tiap pilihan dijawab terhadap kerangka pelajaran ini."
      },
      "cta": {
       "en": "Run the scenario →",
       "id": "Jalankan skenarionya →"
      }
     }
    },
    {
     "n": "2.4",
     "title": {
      "en": "Sustainable High Performance",
      "id": "Performa Tinggi yang Berkelanjutan"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "High performance that costs your health is a loan against the very asset producing it. This closing lesson drills the sustainability mechanics — load shaping, recovery discipline, early-warning response — on three scenarios every first-year professional eventually meets.",
      "id": "Performa tinggi yang mengorbankan kesehatanmu adalah pinjaman terhadap aset yang justru memproduksinya. Pelajaran penutup ini melatih mekanika keberlanjutan — pembentukan beban, disiplin pemulihan, respons peringatan dini — pada tiga skenario yang akhirnya ditemui tiap profesional tahun pertama."
     },
     "objectives": [
      {
       "en": "Shape workload with the three levers: sequence, scope, and stated capacity.",
       "id": "Membentuk beban kerja dengan tiga tuas: urutan, lingkup, dan kapasitas yang dinyatakan."
      },
      {
       "en": "Protect the recovery floor from Map 5.1 inside a demanding job.",
       "id": "Melindungi lantai pemulihan dari Map 5.1 di dalam pekerjaan yang menuntut."
      },
      {
       "en": "Respond to overload signals with the subtract-then-talk protocol.",
       "id": "Merespons sinyal kelebihan beban dengan protokol kurangi-lalu-bicara."
      }
     ],
     "takeaways": [
      {
       "en": "Sustainable pace is a professional skill read by managers, not a private weakness to hide.",
       "id": "Tempo berkelanjutan adalah keterampilan profesional yang dibaca manajer, bukan kelemahan pribadi untuk disembunyikan."
      },
      {
       "en": "Saying yes to everything is not commitment; it is unpriced risk your team discovers at the worst time.",
       "id": "Mengiyakan segalanya bukan komitmen; ia risiko tak terhargai yang ditemukan timmu di saat terburuk."
      },
      {
       "en": "The floor never goes to zero — six hours instead of seven, one walk instead of two, never none.",
       "id": "Lantai tak pernah ke nol — enam jam alih-alih tujuh, satu jalan alih-alih dua, tak pernah nol."
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Scenario 1 — The pile-on",
        "id": "Skenario 1 — Penumpukan"
       },
       "body": {
        "en": "You carry two projects. Your manager adds a third, due the same month, saying “I know it's a lot”. Script your response, then reveal.",
        "id": "Kamu memegang dua proyek. Manajermu menambah yang ketiga, tenggat bulan sama, sambil berkata “aku tahu ini banyak”. Skripkan responsmu, lalu buka."
       },
       "debrief": {
        "en": "Model: “Happy to take it. Here's my current load: A ships the 15th, B needs ~10 hours/week until month-end. For C by the 30th, something moves — I could deliver A as planned and shift B's deadline a week, or hand B's data-pull to Sari if she has room. Which trade fits the team best?” The anatomy: yes to the mission, visible arithmetic of reality, two concrete trades, decision returned to its owner. What junior professionals do instead — silent absorption — reads as capacity until it detonates in week four, damaging exactly the reliability it was protecting. Stated capacity is not weakness; it is the information your manager's planning runs on.",
        "id": "Model: “Siap mengambilnya. Ini beban saya kini: A rilis tanggal 15, B butuh ~10 jam/minggu sampai akhir bulan. Agar C selesai tanggal 30, sesuatu harus bergeser — saya bisa mengirim A sesuai rencana dan menggeser tenggat B seminggu, atau menyerahkan tarikan data B ke Sari jika ia longgar. Pertukaran mana yang paling pas untuk tim?” Anatominya: ya pada misi, aritmetika kenyataan yang terlihat, dua pertukaran konkret, keputusan dikembalikan ke pemiliknya. Yang dilakukan profesional junior sebagai gantinya — penyerapan diam — terbaca sebagai kapasitas sampai meledak di minggu keempat, merusak persis keandalan yang ingin dilindunginya. Kapasitas yang dinyatakan bukan kelemahan; ia informasi tempat perencanaan manajermu berjalan."
       }
      },
      {
       "h": {
        "en": "Scenario 2 — The permanent sprint",
        "id": "Skenario 2 — Sprint permanen"
       },
       "body": {
        "en": "Month three of “crunch” with no end date. Sleep is eroding; the exercise slot vanished; Sunday dread has appeared. Design your response, then reveal.",
        "id": "Bulan ketiga “crunch” tanpa tanggal akhir. Tidur terkikis; slot olahraga hilang; kecemasan Minggu malam muncul. Rancang responsmu, lalu buka."
       },
       "debrief": {
        "en": "Two moves in order. <b>Restore the floor unilaterally:</b> the shrunken protocol from Map 5.1 — a defended sleep window even if shorter, movement snacks, one real recovery block weekly — requires no permission and reverses the performance decay that made the crunch feel endless. <b>Then convert the sprint into a project:</b> to your manager — “we've been in crunch twelve weeks; sustained like this my error rate climbs. Can we define what ends it — a date, a deliverable, or a scope cut — and what drops meanwhile?” Crunches persist because nobody names their exit condition; the person who names it professionally is usually thanked, not punished. If leadership's answer is that the sprint is simply the culture — that is data for Module 7, collected calmly.",
        "id": "Dua langkah berurutan. <b>Pulihkan lantai secara sepihak:</b> protokol menyusut dari Map 5.1 — jendela tidur yang dijaga meski lebih pendek, camilan gerak, satu blok pemulihan nyata mingguan — tak butuh izin dan membalikkan peluruhan performa yang membuat crunch terasa tanpa akhir. <b>Lalu ubah sprint menjadi proyek:</b> ke manajermu — “kita sudah crunch dua belas minggu; berlanjut begini tingkat kesalahanku naik. Bisakah kita definisikan apa yang mengakhirinya — tanggal, hasil, atau pemangkasan lingkup — dan apa yang dilepas sementara?” Crunch bertahan karena tak ada yang menamai syarat keluarnya; orang yang menamainya secara profesional biasanya diberi terima kasih, bukan hukuman. Jika jawaban pimpinan adalah bahwa sprint memang budayanya — itu data untuk Modul 7, dikumpulkan dengan tenang."
       }
      },
      {
       "h": {
        "en": "Scenario 3 — The early warnings",
        "id": "Skenario 3 — Peringatan dini"
       },
       "body": {
        "en": "A friend at another company describes their last month: unrefreshing sleep, snapping at small things, skipping the futsal group they love, working weekends to “catch up” without catching up. What do you tell them? Then reveal.",
        "id": "Seorang teman di perusahaan lain menceritakan bulan terakhirnya: tidur tak menyegarkan, tersulut hal kecil, melewatkan grup futsal kesayangan, kerja akhir pekan demi “mengejar” tanpa pernah terkejar. Apa katamu padanya? Lalu buka."
       },
       "debrief": {
        "en": "The trio — non-restorative sleep, irritability, social withdrawal — is Map 5.1's early-warning signature, arriving weeks before real trouble. The protocol you would give them is the one to keep for yourself: <b>subtract first</b> (drop one commitment for two weeks, defend the sleep window, return to the futsal group — connection is treatment, not reward) and <b>then talk</b> — a friend, a mentor, and if low mood or hopelessness persists most days for two weeks or more, a professional, exactly as one would see a doctor for a fracture. Handling this early is a career skill with compounding returns: performers who last decades are the ones who learned to read their own gauges in year one.",
        "id": "Trio itu — tidur tak memulihkan, mudah tersulut, menarik diri sosial — adalah tanda peringatan dini Map 5.1, datang berminggu-minggu sebelum masalah nyata. Protokol yang akan kamu berikan padanya adalah yang harus kamu simpan untuk dirimu: <b>kurangi dulu</b> (lepas satu komitmen dua minggu, jaga jendela tidur, kembali ke grup futsal — koneksi adalah perawatan, bukan hadiah) dan <b>lalu bicara</b> — teman, mentor, dan jika suasana hati rendah atau keputusasaan bertahan hampir tiap hari dua minggu atau lebih, seorang profesional, persis seperti ke dokter untuk patah tulang. Menangani ini lebih awal adalah keterampilan karier dengan imbal hasil menggandakan: pekerja yang bertahan puluhan tahun adalah yang belajar membaca indikatornya sendiri di tahun pertama."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does the pile-on script show the arithmetic instead of just accepting or refusing?",
        "id": "Mengapa skrip penumpukan menunjukkan aritmetika alih-alih sekadar menerima atau menolak?"
       },
       "options": [
        {
         "en": "To prove how busy you are",
         "id": "Untuk membuktikan betapa sibuknya kamu"
        },
        {
         "en": "Because the manager owns the priority decision but lacks your load data — the script supplies the data and keeps the decision with its owner",
         "id": "Karena manajer memiliki keputusan prioritas tetapi tak punya data bebanmu — skrip memasok data dan menjaga keputusan pada pemiliknya"
        },
        {
         "en": "To create a paper trail for later disputes",
         "id": "Untuk menciptakan jejak tertulis bagi sengketa kelak"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Silent absorption hides the trade-offs until they detonate. Visible arithmetic plus offered trades is what managed capacity looks like from above.",
        "id": "Penyerapan diam menyembunyikan pertukaran sampai meledak. Aritmetika terlihat plus pertukaran yang ditawarkan adalah rupa kapasitas terkelola dari atas."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/bg/stage-execution.jpg",
   "heroPos": "center 40%"
  },
  {
   "num": 3,
   "title": {
    "en": "Managing Up, Across, and Down",
    "id": "Managing Up, Across, dan Down"
   },
   "overview": {
    "en": "Module 3 of The Route focuses on managing up, across, and down. Work through the lessons in order — each builds on the last.",
    "id": "Modul 3 dari The Route berfokus pada Managing Up, Across, dan Down. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply managing up, across, and down to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Managing Up, Across, dan Down pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "3.1",
     "title": {
      "en": "Managing Up: Understanding Your Manager",
      "id": "Managing Up: Memahami Manajermu"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Your manager is not your boss so much as your most important working relationship — one you are half responsible for operating. This lesson builds the managing-up toolkit: reading their world, matching their operating manual, and making yourself the report that lightens their week.",
      "id": "Manajermu bukan sekadar atasan melainkan hubungan kerja terpentingmu — yang separuh pengoperasiannya menjadi tanggung jawabmu. Pelajaran ini membangun perangkat managing up: membaca dunia mereka, menyesuaikan manual operasi mereka, dan menjadikan dirimu bawahan yang meringankan minggu mereka."
     },
     "objectives": [
      {
       "en": "Map your manager's pressures, priorities and preferences in one page.",
       "id": "Memetakan tekanan, prioritas, dan preferensi manajermu dalam satu halaman."
      },
      {
       "en": "Adapt to their operating manual: channel, cadence, detail level, decision style.",
       "id": "Beradaptasi dengan manual operasi mereka: kanal, irama, level detail, gaya keputusan."
      },
      {
       "en": "Run one-on-ones as your meeting, prepared and agenda'd.",
       "id": "Menjalankan one-on-one sebagai rapatmu, dipersiapkan dan beragenda."
      }
     ],
     "takeaways": [
      {
       "en": "Managing up is not flattery; it is reducing the friction between your work and its sponsor.",
       "id": "Managing up bukan menjilat; ia mengurangi gesekan antara kerjamu dan sponsornya."
      },
      {
       "en": "Every manager has an operating manual — most never write it down, all reward those who learn it.",
       "id": "Tiap manajer punya manual operasi — kebanyakan tak pernah menuliskannya, semuanya mengganjar yang mempelajarinya."
      },
      {
       "en": "A prepared one-on-one is the cheapest career instrument you own; most people waste it on status updates.",
       "id": "One-on-one yang dipersiapkan adalah instrumen karier termurah milikmu; kebanyakan orang memboroskannya untuk laporan status."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "Their world, mapped",
        "id": "Dunia mereka, terpetakan"
       },
       "body": {
        "en": "One page, three headings. <b>Pressures:</b> what they are measured on (2.1), what is currently red, what their manager asks about. <b>Priorities:</b> the two or three outcomes this half that actually matter to them — stated in their words, from planning docs and repeated phrases. <b>Preferences:</b> how they like to receive information (written first or talk first?), when they are sharpest, what visibly irritates them, how they decide (data, options, or recommendations?). You fill this map by observation and light questions over a month, then keep it current. It converts guesswork — the main tax on junior-manager relationships — into service.",
        "id": "Satu halaman, tiga judul. <b>Tekanan:</b> mereka diukur atas apa (2.1), apa yang sedang merah, apa yang ditanyakan manajer mereka. <b>Prioritas:</b> dua-tiga hasil semester ini yang sungguh berarti bagi mereka — dinyatakan dalam kata mereka, dari dokumen perencanaan dan frasa berulang. <b>Preferensi:</b> cara mereka suka menerima informasi (tertulis dulu atau bicara dulu?), kapan mereka paling tajam, apa yang tampak mengganggu mereka, cara mereka memutuskan (data, opsi, atau rekomendasi?). Kamu mengisi peta ini lewat pengamatan dan pertanyaan ringan selama sebulan, lalu menjaganya terkini. Ia mengubah tebak-tebakan — pajak utama hubungan junior-manajer — menjadi pelayanan."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "Matching the manual",
        "id": "Menyesuaikan manual"
       },
       "body": {
        "en": "Once mapped, adapt: the written-first manager gets your one-pager the evening before, not a surprise monologue; the options manager gets two options with your recommendation, not an open question; the morning-sharp manager gets decisions before lunch and FYIs after. Two boundaries keep adaptation healthy. It runs on <b>form, not substance</b> — you adjust packaging, never facts or your honest view. And it is <b>reciprocal over time</b> — as trust builds, you can say “I think better in writing; can I send a memo before we discuss?” Good managers adapt back; the manual is a meeting point, not a surrender.",
        "id": "Setelah terpetakan, beradaptasilah: manajer tulisan-dulu mendapat satu halamanmu sore sebelumnya, bukan monolog kejutan; manajer opsi mendapat dua opsi dengan rekomendasimu, bukan pertanyaan terbuka; manajer tajam-pagi mendapat keputusan sebelum makan siang dan FYI sesudahnya. Dua batas menjaga adaptasi tetap sehat. Ia berjalan pada <b>bentuk, bukan substansi</b> — kamu menyesuaikan kemasan, tak pernah fakta atau pandangan jujurmu. Dan ia <b>timbal balik seiring waktu</b> — saat kepercayaan tumbuh, kamu bisa berkata “aku berpikir lebih baik lewat tulisan; boleh kukirim memo sebelum kita diskusi?” Manajer baik beradaptasi balik; manual adalah titik temu, bukan penyerahan."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The one-on-one, upgraded",
        "id": "One-on-one, ditingkatkan"
       },
       "body": {
        "en": "The weekly or fortnightly one-on-one is your meeting — treat status as pre-read (the Friday one-liners already carried it) and spend the room on what only this conversation can do: decisions you need, obstacles they can move, feedback in both directions, and one development topic. Standing agenda, sent ahead: “1. Decision: vendor A/B (context attached). 2. Heads-up: risk on the migration. 3. Feedback ask: yesterday's client call. 4. Development: I'd like the next presentation slot.” Bring your notes from last time; nothing signals seriousness like following up your own threads. Managers describe reports who run one-on-ones this way with one word: promotable.",
        "id": "One-on-one mingguan atau dwimingguan adalah rapatmu — perlakukan status sebagai pra-baca (satu-baris Jumat sudah membawanya) dan belanjakan ruangan untuk yang hanya bisa dilakukan percakapan ini: keputusan yang kamu butuhkan, hambatan yang bisa mereka singkirkan, umpan balik dua arah, dan satu topik pengembangan. Agenda tetap, dikirim di muka: “1. Keputusan: vendor A/B (konteks terlampir). 2. Peringatan: risiko migrasi. 3. Minta umpan balik: panggilan klien kemarin. 4. Pengembangan: saya ingin slot presentasi berikutnya.” Bawa catatanmu dari pertemuan lalu; tak ada yang menandakan keseriusan seperti menindaklanjuti benangmu sendiri. Manajer menggambarkan bawahan yang menjalankan one-on-one begini dengan satu kata: layak promosi."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Your manager decides from written options, and you have been raising issues verbally in corridors — with poor results. The managing-up fix?",
        "id": "Manajermu memutuskan dari opsi tertulis, dan kamu selama ini mengangkat isu lisan di koridor — dengan hasil buruk. Perbaikan managing up-nya?"
       },
       "options": [
        {
         "en": "Escalate issues to their manager instead",
         "id": "Eskalasikan isu ke manajer mereka saja"
        },
        {
         "en": "Match the manual: send a short written note with two options and your recommendation before discussing",
         "id": "Sesuaikan manualnya: kirim catatan tertulis singkat dengan dua opsi dan rekomendasimu sebelum berdiskusi"
        },
        {
         "en": "Keep raising verbally but more often",
         "id": "Terus angkat lisan tapi lebih sering"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The channel was fighting the decision style. Packaging adapted to the manual is service; the substance stays yours.",
        "id": "Kanalnya melawan gaya keputusan. Kemasan yang menyesuaikan manual adalah pelayanan; substansinya tetap milikmu."
       }
      }
     ],
     "quote": {
      "en": "Managing up is not flattery; it is removing friction between your work and its sponsor.",
      "id": "Managing up bukan menjilat; ia menghapus gesekan antara kerjamu dan sponsornya."
     },
     "listen": [
      {
       "label": {
        "en": "A one-on-one agenda, sent ahead — hear the shape",
        "id": "Agenda one-on-one, dikirim di muka — dengarkan bentuknya"
       },
       "text": {
        "en": "One: decision needed on vendor A or B, context attached. Two: heads up on a migration risk. Three: feedback request on yesterday's client call. Four: development — I'd like the next presentation slot.",
        "id": "Satu: butuh keputusan vendor A atau B, konteks terlampir. Dua: peringatan risiko migrasi. Tiga: minta umpan balik panggilan klien kemarin. Empat: pengembangan — saya ingin slot presentasi berikutnya."
       }
      }
     ],
     "tool": {
      "id": "field",
      "mode": "coach:up",
      "title": {
       "en": "Practice the difficult week",
       "id": "Latih pekan yang sulit"
      },
      "body": {
       "en": "A slipping deadline, a distracted manager, a capacity collision — the managing-up drill walks all three moments with feedback per move.",
       "id": "Tenggat mundur, manajer terdistraksi, tabrakan kapasitas — latihan managing-up melewati ketiga momen dengan umpan balik per langkah."
      },
      "cta": {
       "en": "Run the scenario →",
       "id": "Jalankan skenarionya →"
      }
     }
    },
    {
     "n": "3.2",
     "title": {
      "en": "Managing Across: Peer Credibility and Cross-Functional Relationships",
      "id": "Managing Across: Kredibilitas Rekan dan Hubungan Lintas Fungsi"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Peers decide more of your career than you expect: they are tomorrow's managers, this quarter's dependency, and the loudest witnesses to your reputation. This lesson builds peer credibility — reliability, cross-functional respect, and conflict handled before it scars.",
      "id": "Rekan menentukan lebih banyak kariermu dari dugaanmu: mereka manajer masa depan, dependensi kuartal ini, dan saksi paling nyaring reputasimu. Pelajaran ini membangun kredibilitas rekan — keandalan, hormat lintas fungsi, dan konflik yang ditangani sebelum meninggalkan bekas."
     },
     "objectives": [
      {
       "en": "Build the reliability record that makes peers route work and trust toward you.",
       "id": "Membangun rekam keandalan yang membuat rekan mengarahkan kerja dan kepercayaan padamu."
      },
      {
       "en": "Work across functions in their language and their constraints.",
       "id": "Bekerja lintas fungsi dalam bahasa dan batasan mereka."
      },
      {
       "en": "Resolve peer friction directly and early, without escalation theatre.",
       "id": "Menyelesaikan gesekan rekan secara langsung dan dini, tanpa teater eskalasi."
      }
     ],
     "takeaways": [
      {
       "en": "Peer credibility has one currency: things you said you would do, done, on time, without chasing.",
       "id": "Kredibilitas rekan punya satu mata uang: hal yang kamu janjikan, selesai, tepat waktu, tanpa dikejar."
      },
      {
       "en": "Cross-functional respect starts with learning why the other team's “no” makes sense in their world.",
       "id": "Hormat lintas fungsi mulai dari memahami mengapa “tidak” tim lain masuk akal di dunia mereka."
      },
      {
       "en": "Friction addressed in 48 hours is a conversation; friction stored for months is a feud.",
       "id": "Gesekan yang dibahas dalam 48 jam adalah percakapan; yang disimpan berbulan-bulan adalah permusuhan."
      }
     ],
     "sections": [
      {
       "icon": "flag",
       "h": {
        "en": "The reliability record",
        "id": "Rekam keandalan"
       },
       "body": {
        "en": "Among peers there is no formal scoreboard — there is memory. Every commitment is a deposit or a withdrawal: the data pull delivered when promised, the review returned in a day, the meeting joined prepared. Three habits compound the record. <b>Commit precisely:</b> “by Thursday noon” beats “soon” — vague promises read as soft even when kept. <b>Flag early:</b> the moment a commitment is at risk, say so with a new date; peers forgive moved deadlines and never forgive silent ones. <b>Close loops:</b> confirm done, link the artefact. Within two quarters this record becomes your reputation's load-bearing wall — peers describe you in exactly these terms when managers ask around.",
        "id": "Di antara rekan tak ada papan skor resmi — yang ada ingatan. Tiap komitmen adalah setoran atau penarikan: tarikan data terkirim sesuai janji, tinjauan kembali dalam sehari, rapat dihadiri dengan siap. Tiga kebiasaan menggandakan rekamnya. <b>Berkomitmen presisi:</b> “Kamis siang” mengalahkan “segera” — janji samar terbaca lunak bahkan saat ditepati. <b>Tandai lebih awal:</b> begitu komitmen berisiko, katakan dengan tanggal baru; rekan memaafkan tenggat bergeser dan tak pernah memaafkan yang bergeser diam-diam. <b>Tutup putaran:</b> konfirmasi selesai, tautkan artefaknya. Dalam dua kuartal rekam ini menjadi dinding penopang reputasimu — rekan menggambarkanmu persis dalam istilah-istilah ini saat manajer bertanya-tanya."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "Crossing functions",
        "id": "Menyeberangi fungsi"
       },
       "body": {
        "en": "Finance is not slow; finance is accountable for controls you cannot see. Legal is not obstructive; legal absorbs risks you will never be blamed for. The cross-functional skill is translating requests into the other function's frame: instead of “I need this approved fast”, try “what do you need from me to make this easy to approve — and what timeline is realistic on your side?” Learn each neighbouring function's calendar (month-end freezes, release windows), their constraints, and one person in each who will explain how things really work over coffee. Cross-functional fluency is rare enough at junior levels that it reads as seniority years before the title arrives.",
        "id": "Keuangan bukan lambat; keuangan bertanggung jawab atas kontrol yang tak kamu lihat. Legal bukan penghambat; legal menyerap risiko yang kamu tak akan pernah disalahkan atasnya. Keterampilan lintas fungsi adalah menerjemahkan permintaan ke bingkai fungsi lain: alih-alih “aku butuh ini disetujui cepat”, coba “apa yang kamu butuhkan dariku agar ini mudah disetujui — dan lini waktu apa yang realistis di sisimu?” Pelajari kalender tiap fungsi tetangga (pembekuan akhir bulan, jendela rilis), batasan mereka, dan satu orang di masing-masing yang mau menjelaskan cara kerja sebenarnya sambil ngopi. Kefasihan lintas fungsi cukup langka di level junior sehingga terbaca sebagai senioritas bertahun-tahun sebelum gelarnya tiba."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Friction, handled early",
        "id": "Gesekan, ditangani dini"
       },
       "body": {
        "en": "A peer talks over you in meetings; a teammate's late inputs keep burning your weekends; someone reworded your analysis and circulated it. The protocol: <b>within 48 hours, directly, privately, behaviour-first.</b> “In yesterday's review my numbers went out under a different framing — walk me through what happened?” opens with curiosity rather than accusation because the innocent explanation is genuinely common. If the behaviour continues: name the impact and the ask — “when inputs land Friday night, my weekend absorbs the slip; I need them Thursday or we re-scope.” Escalation is the third resort, brought as a process problem with artefacts, not a personality complaint. What stores badly: hint-dropping, cc-warfare, and the silent grudge that peers can feel but never address.",
        "id": "Seorang rekan memotongmu di rapat; masukan telat seorang kolega terus membakar akhir pekanmu; seseorang mengubah framing analisismu dan mengedarkannya. Protokolnya: <b>dalam 48 jam, langsung, privat, perilaku-dulu.</b> “Di tinjauan kemarin angkaku keluar dengan bingkai berbeda — ceritakan apa yang terjadi?” dibuka dengan rasa ingin tahu alih-alih tuduhan karena penjelasan polos memang sungguh umum. Jika perilaku berlanjut: namai dampak dan permintaannya — “saat masukan mendarat Jumat malam, akhir pekanku menyerap kelambatannya; aku membutuhkannya Kamis atau kita atur ulang lingkup.” Eskalasi adalah pilihan ketiga, dibawa sebagai masalah proses dengan artefak, bukan keluhan kepribadian. Yang tersimpan buruk: sindiran, perang-cc, dan dendam diam yang bisa dirasakan rekan tapi tak pernah dibahas."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Finance has sat on your approval for a week and the deadline is Friday. The cross-functional move?",
        "id": "Keuangan menahan persetujuanmu seminggu dan tenggatnya Jumat. Langkah lintas fungsinya?"
       },
       "options": [
        {
         "en": "Email them daily with your manager in cc until it moves",
         "id": "Email tiap hari dengan manajermu di cc sampai bergerak"
        },
        {
         "en": "Ask what would make it easy to approve and what is realistic on their side — then adjust or escalate with that information",
         "id": "Tanyakan apa yang membuatnya mudah disetujui dan apa yang realistis di sisi mereka — lalu sesuaikan atau eskalasi dengan informasi itu"
        },
        {
         "en": "Proceed without approval and apologise later",
         "id": "Jalan terus tanpa persetujuan dan minta maaf belakangan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Their week has constraints you cannot see — month-end, missing documents, a queue. Learning them either unblocks you or arms a legitimate escalation.",
        "id": "Minggu mereka punya batasan yang tak kamu lihat — akhir bulan, dokumen kurang, antrean. Mempelajarinya entah membuka blokirmu atau mempersenjatai eskalasi yang sah."
       }
      }
     ]
    },
    {
     "n": "3.3",
     "title": {
      "en": "Organisational Navigation: Reading Political Terrain",
      "id": "Navigasi Organisasi: Membaca Medan Politik"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Every organisation has a political terrain: informal influence, unwritten alliances, decisions made before the meeting. You can refuse to weaponise it and still refuse to be blind to it. This lesson teaches ethical navigation — reading the terrain without becoming the thing you read.",
      "id": "Setiap organisasi punya medan politik: pengaruh informal, aliansi tak tertulis, keputusan yang dibuat sebelum rapat. Kamu bisa menolak mempersenjatainya dan tetap menolak buta terhadapnya. Pelajaran ini mengajarkan navigasi etis — membaca medan tanpa menjadi hal yang kamu baca."
     },
     "objectives": [
      {
       "en": "Map informal influence: who is consulted, who blocks, who champions.",
       "id": "Memetakan pengaruh informal: siapa dikonsultasikan, siapa memblokir, siapa memperjuangkan."
      },
      {
       "en": "Pre-align important proposals ethically before the meeting that decides them.",
       "id": "Menyelaraskan proposal penting secara etis sebelum rapat yang memutuskannya."
      },
      {
       "en": "Stay clean: the practices that build influence without manipulation.",
       "id": "Tetap bersih: praktik yang membangun pengaruh tanpa manipulasi."
      }
     ],
     "takeaways": [
      {
       "en": "The org chart shows reporting lines; influence flows through trust lines — map both.",
       "id": "Bagan organisasi menunjukkan garis pelaporan; pengaruh mengalir lewat garis kepercayaan — petakan keduanya."
      },
      {
       "en": "Big decisions are made in the small conversations before the big meeting; be in those conversations honestly.",
       "id": "Keputusan besar dibuat dalam percakapan kecil sebelum rapat besar; hadirlah dalam percakapan itu dengan jujur."
      },
      {
       "en": "Political capital earned by delivery and spent on missions outlasts capital earned by manoeuvring.",
       "id": "Modal politik yang diperoleh lewat penunaian dan dibelanjakan untuk misi bertahan lebih lama daripada modal hasil manuver."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "Reading the terrain",
        "id": "Membaca medan"
       },
       "body": {
        "en": "Watch three flows for a month. <b>Consultation:</b> before decisions land, whose desk do leaders stop at? Those are the trusted advisors, title regardless. <b>Blocking:</b> whose quiet scepticism kills proposals — and what convinces them (data? precedent? risk cover?). <b>Championing:</b> who successfully sponsors other people's ideas upward? Add the informal networks — who lunches with whom, which alumni or project bonds persist — and you hold a second org chart, the one decisions actually travel through. This map is neutral information, gathered by observation, no different from learning the official processes; what you do with it is where ethics enter.",
        "id": "Amati tiga aliran selama sebulan. <b>Konsultasi:</b> sebelum keputusan mendarat, meja siapa yang disinggahi pemimpin? Merekalah penasihat tepercaya, apa pun gelarnya. <b>Pemblokiran:</b> skeptisisme diam siapa yang membunuh proposal — dan apa yang meyakinkan mereka (data? preseden? jaminan risiko?). <b>Perjuangan:</b> siapa yang berhasil mensponsori ide orang lain ke atas? Tambahkan jaringan informal — siapa makan siang dengan siapa, ikatan alumni atau proyek mana yang bertahan — dan kamu memegang bagan organisasi kedua, tempat keputusan sebenarnya mengalir. Peta ini informasi netral, dikumpulkan lewat pengamatan, tak beda dari mempelajari proses resmi; yang kamu lakukan dengannya, di situlah etika masuk."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "Pre-alignment, done clean",
        "id": "Pra-penyelarasan, dilakukan bersih"
       },
       "body": {
        "en": "The naive move: perfect your proposal in secret and unveil it at the meeting — where it dies from questions any stakeholder would have raised earlier. The navigated move: before the meeting, walk the proposal past the people it affects — “I'm bringing X on Thursday; you know this area — what would make it fail?” Blockers consulted early often convert; their objections improve the proposal; and the meeting becomes a confirmation, not an ambush. The ethical line is transparency of intent: pre-alignment shares the real proposal with the real stakeholders, manipulation shows different faces to different rooms. One test: would you be comfortable if all your pre-meeting conversations were minuted together? If yes, it is diplomacy; if no, it is scheming.",
        "id": "Langkah naif: sempurnakan proposal diam-diam dan singkap di rapat — tempat ia mati oleh pertanyaan yang seharusnya diangkat pemangku kepentingan lebih awal. Langkah ternavigasi: sebelum rapat, bawa proposal melewati orang-orang yang terdampak — “aku membawa X Kamis; kamu paham area ini — apa yang bisa membuatnya gagal?” Pemblokir yang dikonsultasikan dini sering berbalik mendukung; keberatan mereka memperbaiki proposal; dan rapat menjadi konfirmasi, bukan penyergapan. Garis etisnya adalah transparansi niat: pra-penyelarasan membagikan proposal sungguhan ke pemangku kepentingan sungguhan, manipulasi menunjukkan wajah berbeda ke ruangan berbeda. Satu ujian: apakah kamu nyaman jika semua percakapan pra-rapatmu dinotulenkan bersama? Jika ya, itu diplomasi; jika tidak, itu persekongkolan."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "Staying clean",
        "id": "Tetap bersih"
       },
       "body": {
        "en": "Rules that survive every terrain. Never trade in negative gossip — listeners correctly conclude you do it about them too; the phrase “I'd rather hear that from her directly” exits any session without sanctimony. Keep confidences absolutely. Give public credit, raise disagreements privately first. Do not join factions — be the person every faction can work with; in factional weather, the bridge outlasts the armies. And build your influence on the one base politics cannot devalue: being genuinely useful to many people's goals. Players are tolerated while winning; contributors are wanted permanently. The long game belongs, unglamorously, to the clean.",
        "id": "Aturan yang bertahan di segala medan. Jangan pernah berdagang gosip negatif — pendengar dengan tepat menyimpulkan kamu melakukannya tentang mereka juga; frasa “aku lebih suka dengar itu langsung darinya” keluar dari sesi mana pun tanpa sok suci. Jaga rahasia mutlak. Beri penghargaan publik, angkat ketidaksetujuan privat lebih dulu. Jangan bergabung faksi — jadilah orang yang bisa diajak kerja semua faksi; di cuaca faksional, jembatan bertahan lebih lama dari pasukan. Dan bangun pengaruhmu di atas satu fondasi yang tak bisa didevaluasi politik: sungguh berguna bagi tujuan banyak orang. Pemain ditoleransi selama menang; kontributor diinginkan permanen. Permainan panjang, tanpa glamor, milik yang bersih."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Your proposal goes to committee Thursday. The known sceptic is the operations head. The navigated, ethical move?",
        "id": "Proposalmu masuk komite Kamis. Skeptis yang dikenal adalah kepala operasi. Langkah ternavigasi dan etisnya?"
       },
       "options": [
        {
         "en": "Avoid them until Thursday so they cannot prepare objections",
         "id": "Hindari dia sampai Kamis agar tak sempat menyiapkan keberatan"
        },
        {
         "en": "Bring them the real proposal early: “what would make this fail?” — convert or learn before the room decides",
         "id": "Bawakan proposal sungguhan lebih awal: “apa yang bisa membuat ini gagal?” — ubah jadi dukungan atau belajar sebelum ruangan memutuskan"
        },
        {
         "en": "Lobby their rival to outnumber them in the meeting",
         "id": "Lobi rival mereka agar kalah suara di rapat"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Early consultation converts blockers, improves proposals, and passes the minuted-together test. Ambushes and faction plays win meetings and lose years.",
        "id": "Konsultasi dini mengubah pemblokir, memperbaiki proposal, dan lolos ujian notulen-bersama. Penyergapan dan permainan faksi memenangkan rapat dan kehilangan bertahun-tahun."
       }
      }
     ]
    },
    {
     "n": "3.4",
     "title": {
      "en": "Managing Down: Leading Before the Title",
      "id": "Managing Down: Memimpin Sebelum Gelar"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "Leadership begins years before the title: the intern you onboard, the project you coordinate, the junior who asks you questions. Three scenarios drill managing down without authority — delegation, difficult feedback, and credit flowing downward.",
      "id": "Kepemimpinan dimulai bertahun-tahun sebelum gelar: magang yang kamu terima, proyek yang kamu koordinasikan, junior yang bertanya padamu. Tiga skenario melatih managing down tanpa otoritas — delegasi, umpan balik sulit, dan penghargaan yang mengalir ke bawah."
     },
     "objectives": [
      {
       "en": "Delegate with context and checkpoints, not task-dumping.",
       "id": "Mendelegasikan dengan konteks dan titik periksa, bukan membuang tugas."
      },
      {
       "en": "Give corrective feedback that grows the person and the work.",
       "id": "Memberi umpan balik korektif yang menumbuhkan orang dan pekerjaannya."
      },
      {
       "en": "Push credit down visibly — the leadership habit that costs nothing and builds everything.",
       "id": "Mendorong penghargaan ke bawah secara terlihat — kebiasaan kepemimpinan tanpa biaya yang membangun segalanya."
      }
     ],
     "takeaways": [
      {
       "en": "Delegation transfers ownership, not just labour: context, definition of done, and a checkpoint.",
       "id": "Delegasi memindahkan kepemilikan, bukan sekadar tenaga: konteks, definisi selesai, dan titik periksa."
      },
      {
       "en": "Feedback to juniors is a gift wrapped in respect: specific, private, paired with belief.",
       "id": "Umpan balik ke junior adalah hadiah berbungkus hormat: spesifik, privat, dipasangkan dengan keyakinan."
      },
      {
       "en": "Leaders are people others got stronger around — the title eventually follows the evidence.",
       "id": "Pemimpin adalah orang yang membuat sekitarnya menguat — gelar akhirnya mengikuti buktinya."
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Scenario 1 — Delegating to the intern",
        "id": "Skenario 1 — Mendelegasikan ke magang"
       },
       "body": {
        "en": "You coordinate a data-cleaning task and an intern will execute it. Script the handover, then reveal.",
        "id": "Kamu mengoordinasikan tugas pembersihan data dan seorang magang akan mengeksekusinya. Skripkan serah terimanya, lalu buka."
       },
       "debrief": {
        "en": "Model handover, four parts. <b>Context:</b> “this feeds Thursday's client report — errors here become errors in front of the client.” <b>Definition of done:</b> “all rows validated against the rules doc, exceptions listed in a second sheet, by Wednesday noon.” <b>Resources and authority:</b> “the rules doc, last month's example, and you can decide formatting yourself.” <b>Checkpoint:</b> “send me the first fifty rows by tomorrow morning so we catch any drift early.” Compare with task-dumping — “clean this by Wednesday” — which produces exactly the rework it deserved. The checkpoint is the professional's secret: it converts big failures into small corrections while leaving ownership intact.",
        "id": "Serah terima model, empat bagian. <b>Konteks:</b> “ini mengisi laporan klien Kamis — kesalahan di sini menjadi kesalahan di depan klien.” <b>Definisi selesai:</b> “semua baris tervalidasi terhadap dokumen aturan, pengecualian didaftar di lembar kedua, Rabu siang.” <b>Sumber daya dan wewenang:</b> “dokumen aturan, contoh bulan lalu, dan format kamu putuskan sendiri.” <b>Titik periksa:</b> “kirimkan lima puluh baris pertama besok pagi supaya penyimpangan tertangkap dini.” Bandingkan dengan membuang tugas — “bersihkan ini sebelum Rabu” — yang menghasilkan persis pengerjaan ulang yang pantas diterimanya. Titik periksa adalah rahasia profesional: mengubah kegagalan besar menjadi koreksi kecil sambil menjaga kepemilikan tetap utuh."
       }
      },
      {
       "h": {
        "en": "Scenario 2 — The correction",
        "id": "Skenario 2 — Koreksi"
       },
       "body": {
        "en": "The intern's fifty rows arrive with a systematic error — they misread one rule and applied it everywhere. They are visibly proud of the speed. Script your feedback, then reveal.",
        "id": "Lima puluh baris magang tiba dengan kesalahan sistematis — ia salah membaca satu aturan dan menerapkannya di semua tempat. Ia tampak bangga pada kecepatannya. Skripkan umpan balikmu, lalu buka."
       },
       "debrief": {
        "en": "Model: private, specific, belief attached. “Good speed, and the checkpoint did its job — one thing to fix before it compounds: rule 4 applies only to active accounts; here it ran on all of them, so about twenty rows need a redo. Easy misread, the doc is genuinely ambiguous there — I did the same in my first month. Rerun those rows and you're on track for Wednesday.” Anatomy: the behaviour and its consequence, zero character commentary, the normalising story (true, not invented), the concrete path forward, the timeline intact. What it avoids: public correction, sarcasm, silently redoing it yourself — the three moves that teach juniors to hide errors, which is how small errors become client-facing ones.",
        "id": "Model: privat, spesifik, disertai keyakinan. “Kecepatannya bagus, dan titik periksa menjalankan tugasnya — satu hal untuk diperbaiki sebelum menggandakan diri: aturan 4 hanya berlaku untuk akun aktif; di sini ia jalan pada semuanya, jadi sekitar dua puluh baris perlu diulang. Salah baca yang wajar, dokumennya memang ambigu di sana — aku pun begitu di bulan pertamaku. Ulangi baris itu dan kamu tetap sesuai jadwal Rabu.” Anatominya: perilaku dan konsekuensinya, nol komentar karakter, cerita penormal (benar, bukan karangan), jalur maju konkret, lini waktu utuh. Yang dihindarinya: koreksi publik, sarkasme, diam-diam mengulang sendiri — tiga langkah yang mengajari junior menyembunyikan kesalahan, itulah cara kesalahan kecil menjadi kesalahan di depan klien."
       }
      },
      {
       "h": {
        "en": "Scenario 3 — The showcase",
        "id": "Skenario 3 — Pameran"
       },
       "body": {
        "en": "The cleaned dataset powers a client insight; your manager congratulates you in the team channel. The intern is not mentioned. Script your reply, then reveal.",
        "id": "Dataset bersih itu menghasilkan temuan untuk klien; manajermu memberi selamat padamu di kanal tim. Sang magang tak disebut. Skripkan balasanmu, lalu buka."
       },
       "debrief": {
        "en": "Model, posted where the praise was: “Thanks! Flagging that Andi ran the whole validation — fifty thousand rows against a genuinely ambiguous ruleset, exceptions documented cleanly. Made the analysis trivial on my end.” Ten seconds, three effects: the intern's first public evidence artefact (they will remember who wrote it for years); your manager's improved map of team capability; and your own record enhanced, not diminished — pushing credit down is read from above as the definitive leadership tell, because it is the behaviour of someone secure enough to build others. The pattern, repeated, is how individual contributors get handed teams.",
        "id": "Model, diunggah di tempat pujiannya: “Terima kasih! Perlu kusebut Andi yang menjalankan seluruh validasi — lima puluh ribu baris terhadap perangkat aturan yang memang ambigu, pengecualian terdokumentasi rapi. Membuat analisisku jadi ringan.” Sepuluh detik, tiga efek: artefak bukti publik pertama sang magang (ia akan mengingat siapa penulisnya bertahun-tahun); peta kemampuan tim manajermu membaik; dan rekammu sendiri menguat, bukan berkurang — mendorong penghargaan ke bawah dibaca dari atas sebagai tanda kepemimpinan paling definitif, karena itu perilaku orang yang cukup aman untuk membangun orang lain. Pola ini, diulang, adalah cara kontributor individu akhirnya diserahi tim."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does the checkpoint (“first fifty rows by tomorrow”) belong in every delegation?",
        "id": "Mengapa titik periksa (“lima puluh baris pertama besok”) harus ada di tiap delegasi?"
       },
       "options": [
        {
         "en": "To signal you do not fully trust the person",
         "id": "Untuk menandakan kamu tak sepenuhnya percaya orang itu"
        },
        {
         "en": "It converts potential large failures into small early corrections while keeping ownership with the doer",
         "id": "Ia mengubah potensi kegagalan besar menjadi koreksi kecil yang dini sambil menjaga kepemilikan pada pengerjanya"
        },
        {
         "en": "It creates documentation for performance reviews",
         "id": "Ia menciptakan dokumentasi untuk penilaian kinerja"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Scenario 2 proved it: the systematic error was caught at fifty rows, not fifty thousand. Checkpoints are how trust and safety coexist.",
        "id": "Skenario 2 membuktikannya: kesalahan sistematis tertangkap di lima puluh baris, bukan lima puluh ribu. Titik periksa adalah cara kepercayaan dan keamanan hidup berdampingan."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/mentoring-session.jpg",
   "heroPos": "80% 40%"
  },
  {
   "num": 4,
   "title": {
    "en": "Building Professional Visibility",
    "id": "Membangun Visibilitas Profesional"
   },
   "overview": {
    "en": "Module 4 of The Route focuses on building professional visibility. Work through the lessons in order — each builds on the last.",
    "id": "Modul 4 dari The Route berfokus pada Membangun Visibilitas Profesional. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply building professional visibility to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Membangun Visibilitas Profesional pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "4.1",
     "title": {
      "en": "Your Internal Reputation System",
      "id": "Sistem Reputasi Internalmu"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Inside every organisation runs a reputation system: opinions formed in calibration meetings, corridor mentions, and the two seconds after your name comes up. You cannot opt out of having a reputation — only out of steering it. This lesson makes the internal system legible and steerable.",
      "id": "Di dalam tiap organisasi berjalan sistem reputasi: opini yang terbentuk di rapat kalibrasi, sebutan koridor, dan dua detik setelah namamu muncul. Kamu tak bisa memilih keluar dari punya reputasi — hanya dari mengemudikannya. Pelajaran ini membuat sistem internal terbaca dan terkemudikan."
     },
     "objectives": [
      {
       "en": "Map how reputation actually forms and travels inside an organisation.",
       "id": "Memetakan cara reputasi sebenarnya terbentuk dan berjalan di dalam organisasi."
      },
      {
       "en": "Define the two-or-three-word brand you want your name to trigger.",
       "id": "Mendefinisikan merek dua-tiga kata yang ingin dipicu namamu."
      },
      {
       "en": "Align your visible behaviour to that brand without performance or pretence.",
       "id": "Menyelaraskan perilaku terlihatmu dengan merek itu tanpa akting atau kepura-puraan."
      }
     ],
     "takeaways": [
      {
       "en": "Your reputation is decided in rooms you are not in, from samples you did not choose — unless you supply the samples.",
       "id": "Reputasimu diputuskan di ruangan yang tak kamu hadiri, dari sampel yang tak kamu pilih — kecuali kamu memasok sampelnya."
      },
      {
       "en": "A steered brand is two or three words you earn on purpose: “rigorous and calm”, “makes things ship”.",
       "id": "Merek terkemudi adalah dua-tiga kata yang kamu peroleh dengan sengaja: “teliti dan tenang”, “membuat hal terkirim”."
      },
      {
       "en": "Brand and behaviour must match: reputation engineering without delivery is discovered and repriced brutally.",
       "id": "Merek dan perilaku harus cocok: rekayasa reputasi tanpa penunaian akan ketahuan dan dihargai ulang dengan brutal."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "How the system works",
        "id": "Cara sistem bekerja"
       },
       "body": {
        "en": "Reputation forms from <b>sampled moments</b>, not averages: the meeting where you kept your head, the deadline you saved, the time you were sharp with the intern. It travels through <b>retellings</b> — each hop compressing the story to one trait — and it is <b>consulted at decision points</b>: staffing, promotions, who gets the visible project. Three properties follow. Small samples dominate, so high-visibility moments are worth disproportionate care. Early impressions anchor, because the first story becomes the lens for later ones. And negative samples travel roughly three times as far as positive ones — one corridor outburst outruns a quarter of quiet excellence.",
        "id": "Reputasi terbentuk dari <b>momen tersampel</b>, bukan rata-rata: rapat tempat kamu tetap tenang, tenggat yang kamu selamatkan, saat kamu ketus pada magang. Ia berjalan lewat <b>penceritaan ulang</b> — tiap lompatan memampatkan cerita menjadi satu sifat — dan <b>dikonsultasikan di titik keputusan</b>: penugasan, promosi, siapa mendapat proyek terlihat. Tiga sifat mengikuti. Sampel kecil mendominasi, maka momen visibilitas tinggi layak mendapat perhatian tak proporsional. Kesan awal menjangkar, karena cerita pertama menjadi lensa bagi berikutnya. Dan sampel negatif berjalan kira-kira tiga kali lebih jauh dari yang positif — satu ledakan koridor mengalahkan satu kuartal keunggulan senyap."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Choosing the brand",
        "id": "Memilih merek"
       },
       "body": {
        "en": "Ask: when a manager needs to staff the project you want, what two or three words must your name trigger for you to be the obvious pick? Derive them from your architecture (Module 1): the analyst aiming at senior-analyst-owning-a-domain wants “rigorous, reliable, explains clearly”; the future team lead wants “delivers, grows people, calm under fire”. Write the words down. Then audit: ask two trusted colleagues what you are currently known for (the 1.4 drill) and measure the gap between brand held and brand wanted. The gap defines this quarter's visible-behaviour priorities — which moments to volunteer for, which habits to fix first.",
        "id": "Tanyakan: saat manajer harus mengisi proyek yang kamu inginkan, dua-tiga kata apa yang harus dipicu namamu agar kamu pilihan yang jelas? Turunkan dari arsitekturmu (Modul 1): analis yang menuju analis-senior-pemilik-ranah menginginkan “teliti, andal, menjelaskan dengan jernih”; calon pemimpin tim menginginkan “menunaikan, menumbuhkan orang, tenang di bawah tekanan”. Tuliskan kata-katanya. Lalu audit: tanya dua kolega tepercaya kamu kini dikenal untuk apa (latihan 1.4) dan ukur celah antara merek yang dipegang dan yang diinginkan. Celah itu menentukan prioritas perilaku terlihat kuartal ini — momen mana yang diambil sukarela, kebiasaan mana yang diperbaiki dulu."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "Earning it, not performing it",
        "id": "Memperolehnya, bukan memerankannya"
       },
       "body": {
        "en": "Brand steering fails in two directions. <b>Performance without substance</b> — optics management, visibility theatre — is detected quickly in any organisation with memory, and the detection itself becomes the brand. <b>Substance without samples</b> — the excellent recluse — leaves the reputation system running on noise. The working method: deliver genuinely (Module 2), then ensure the delivery produces samples — the travelling artefact, the calm intervention in the tense meeting, the Friday one-liner — in the moments the system actually samples. You are not inventing a character; you are making sure the true character gets witnessed.",
        "id": "Kemudi merek gagal dalam dua arah. <b>Akting tanpa substansi</b> — manajemen citra, teater visibilitas — cepat terdeteksi di organisasi mana pun yang punya ingatan, dan deteksi itu sendiri menjadi mereknya. <b>Substansi tanpa sampel</b> — pertapa unggul — membiarkan sistem reputasi berjalan di atas derau. Metode kerjanya: tunaikan dengan sungguh (Modul 2), lalu pastikan penunaian menghasilkan sampel — artefak bepergian, intervensi tenang di rapat tegang, satu-baris Jumat — pada momen yang sungguh disampel sistem. Kamu bukan menciptakan karakter; kamu memastikan karakter sejati mendapat saksi."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why do negative samples deserve disproportionate prevention effort?",
        "id": "Mengapa sampel negatif layak mendapat usaha pencegahan tak proporsional?"
       },
       "options": [
        {
         "en": "Because organisations only remember mistakes",
         "id": "Karena organisasi hanya mengingat kesalahan"
        },
        {
         "en": "Because negative stories travel roughly three times as far as positive ones and anchor future interpretation",
         "id": "Karena cerita negatif berjalan kira-kira tiga kali lebih jauh dari yang positif dan menjangkar tafsiran berikutnya"
        },
        {
         "en": "Because positive work is invisible by nature",
         "id": "Karena kerja positif tak terlihat secara alami"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The asymmetry is the system's physics: one public outburst reprices a quarter of delivery. Composure in sampled moments is brand insurance.",
        "id": "Asimetri itu fisika sistemnya: satu ledakan publik menghargai ulang satu kuartal penunaian. Ketenangan di momen tersampel adalah asuransi merek."
       }
      }
     ],
     "quote": {
      "en": "Your reputation is decided in rooms you are not in — unless you supply the samples.",
      "id": "Reputasimu diputuskan di ruangan yang tak kamu hadiri — kecuali kamu memasok sampelnya."
     }
    },
    {
     "n": "4.2",
     "title": {
      "en": "LinkedIn as a Professional Visibility Tool (Not a Job Board)",
      "id": "LinkedIn sebagai Alat Visibilitas Profesional (Bukan Papan Lowongan)"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "For a working professional, LinkedIn is not a job board — it is a public record of professional identity that compounds quietly between searches. This lesson rebuilds the profile for the employed (not the seeking), and sets a sustainable presence cadence that does not become a second job.",
      "id": "Bagi profesional yang bekerja, LinkedIn bukan papan lowongan — ia catatan publik identitas profesional yang menggandakan diri diam-diam di antara pencarian. Pelajaran ini membangun ulang profil untuk yang sudah bekerja (bukan yang mencari), dan menetapkan irama kehadiran berkelanjutan yang tidak menjadi pekerjaan kedua."
     },
     "objectives": [
      {
       "en": "Convert the job-seeker profile from The Pack into a professional-record profile.",
       "id": "Mengubah profil pencari kerja dari The Pack menjadi profil catatan profesional."
      },
      {
       "en": "Post and engage on a cadence that compounds without consuming evenings.",
       "id": "Mengunggah dan berinteraksi pada irama yang menggandakan diri tanpa memakan malam-malammu."
      },
      {
       "en": "Handle the ethics: employer confidentiality, humility, and the visibility that helps rather than grates.",
       "id": "Menangani etikanya: kerahasiaan pemberi kerja, kerendahan hati, dan visibilitas yang membantu alih-alih mengganggu."
      }
     ],
     "takeaways": [
      {
       "en": "The employed profile answers a different question: not “hire me” but “this is what I am building”.",
       "id": "Profil orang bekerja menjawab pertanyaan berbeda: bukan “rekrut aku” melainkan “inilah yang sedang kubangun”."
      },
      {
       "en": "One genuine post a month beats daily engagement-bait forever.",
       "id": "Satu unggahan tulus per bulan mengalahkan umpan-interaksi harian selamanya."
      },
      {
       "en": "Everything public is read by three audiences at once: your market, your employer, your future teams.",
       "id": "Semua yang publik dibaca tiga audiens sekaligus: pasarmu, pemberi kerjamu, tim masa depanmu."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "The professional-record profile",
        "id": "Profil catatan profesional"
       },
       "body": {
        "en": "Update the Pack-era profile's frame: the headline shifts from availability to identity — “Data analyst at [company] · pricing & churn analytics · I write about honest dashboards”. The About section tells the current chapter: what you work on, what you are learning, what problems interest you — first person, concrete, two paragraphs. Experience entries get the same evidence bullets as the CV, refreshed twice a year from the win log (the Route Planner makes this a ten-minute job). Skills and recommendations update as assets mint. The profile's job between searches: when your name is googled before a meeting, a conference, an internal move — the record confirms the brand.",
        "id": "Perbarui bingkai profil era-Pack: headline bergeser dari ketersediaan ke identitas — “Analis data di [perusahaan] · analitik harga & churn · menulis tentang dasbor yang jujur”. Bagian About menceritakan bab saat ini: apa yang kamu kerjakan, apa yang kamu pelajari, masalah apa yang menarikmu — sudut pandang pertama, konkret, dua paragraf. Entri pengalaman mendapat butir bukti yang sama dengan CV, disegarkan dua kali setahun dari catatan kemenangan (Route Planner menjadikannya kerja sepuluh menit). Keterampilan dan rekomendasi diperbarui seiring aset tercetak. Tugas profil di antara pencarian: saat namamu digoogle sebelum rapat, konferensi, perpindahan internal — catatan itu mengonfirmasi merek."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "A cadence that compounds",
        "id": "Irama yang menggandakan diri"
       },
       "body": {
        "en": "The sustainable pattern: <b>monthly, one contribution</b> — a short post on something you genuinely learned (“three things our churn model got wrong before it got right”), a useful resource with two lines of why, or a thoughtful comment thread on your field's active question. <b>Weekly, ten minutes of engagement</b> — substantive comments on others' work in your field; comments build more relationships than posts at this career stage. What to skip entirely: engagement-bait formats, humble-brags, reposting platitudes, and anything you would not say aloud in a room of colleagues — the three-audiences test. Written this way, a year of light presence compounds into exactly the external witness layer Module 4.3 builds on.",
        "id": "Pola berkelanjutan: <b>bulanan, satu kontribusi</b> — unggahan pendek tentang hal yang sungguh kamu pelajari (“tiga kesalahan model churn kami sebelum menjadi benar”), sumber berguna dengan dua baris alasan, atau utas komentar yang berbobot pada pertanyaan aktif bidangmu. <b>Mingguan, sepuluh menit interaksi</b> — komentar substantif pada karya orang lain di bidangmu; komentar membangun lebih banyak hubungan daripada unggahan di tahap karier ini. Yang dilewati sepenuhnya: format umpan-interaksi, pamer berbalut rendah hati, mengunggah ulang kata mutiara, dan apa pun yang tak akan kamu ucapkan keras di ruangan kolega — ujian tiga audiens. Ditulis begini, setahun kehadiran ringan menggandakan diri menjadi persis lapisan saksi eksternal yang dibangun Modul 4.3."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "The ethics layer",
        "id": "Lapisan etika"
       },
       "body": {
        "en": "Three rules keep public presence safe. <b>Confidentiality first:</b> no client names without permission, no internal numbers, no screenshots of anything not already public — when in doubt, genericise (“a retail client” / “a mid-size dataset”) or ask. <b>Humility as accuracy:</b> write what you learned, including what you got wrong first; learning-in-public reads as confidence, achievement-parading as insecurity — and seniors in your field can tell instantly which is which. <b>Colleagues before audience:</b> never turn a workplace disagreement, a team failure or a colleague's mistake into content, however anonymised it feels to you. The room always recognises itself.",
        "id": "Tiga aturan menjaga kehadiran publik tetap aman. <b>Kerahasiaan dulu:</b> tanpa nama klien tanpa izin, tanpa angka internal, tanpa tangkapan layar apa pun yang belum publik — bila ragu, generikkan (“klien ritel” / “dataset menengah”) atau tanyakan. <b>Kerendahan hati sebagai akurasi:</b> tulis yang kamu pelajari, termasuk yang mula-mula salah; belajar-di-publik terbaca sebagai percaya diri, pamer prestasi sebagai rasa tak aman — dan para senior bidangmu langsung tahu mana yang mana. <b>Kolega sebelum audiens:</b> jangan pernah mengubah ketidaksetujuan tempat kerja, kegagalan tim, atau kesalahan kolega menjadi konten, seanonim apa pun rasanya bagimu. Ruangan selalu mengenali dirinya sendiri."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Which monthly post passes all three of this lesson's filters?",
        "id": "Unggahan bulanan mana yang lolos ketiga penyaring pelajaran ini?"
       },
       "options": [
        {
         "en": "“Blessed to announce I crushed another quarter 🚀 #hustle”",
         "id": "“Bersyukur mengumumkan kuartal luar biasa lagi 🚀 #hustle”"
        },
        {
         "en": "“Three mistakes our team's first churn model made — and the checks that caught them. (Numbers genericised.)”",
         "id": "“Tiga kesalahan model churn pertama tim kami — dan pemeriksaan yang menangkapnya. (Angka digenerikkan.)”"
        },
        {
         "en": "“My honest thoughts on why our management keeps getting prioritisation wrong”",
         "id": "“Pendapat jujurku tentang mengapa manajemen kami terus salah memprioritaskan”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "It teaches something real, protects confidentiality, and shows learning-in-public humility. The third option turns colleagues into content — the unforgivable pattern.",
        "id": "Ia mengajarkan hal nyata, menjaga kerahasiaan, dan menunjukkan kerendahan hati belajar-di-publik. Opsi ketiga mengubah kolega menjadi konten — pola yang tak termaafkan."
       }
      }
     ]
    },
    {
     "n": "4.3",
     "title": {
      "en": "Building External Credibility: Writing, Speaking, and Industry Presence",
      "id": "Membangun Kredibilitas Eksternal: Menulis, Berbicara, dan Kehadiran Industri"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "External credibility — writing, speaking, industry presence — is the slowest asset in this course and the one with the longest half-life. This lesson sizes it honestly for an early-career professional: the small versions that are actually available, and the compounding path from forum answer to conference stage.",
      "id": "Kredibilitas eksternal — menulis, berbicara, kehadiran industri — adalah aset paling lambat di kursus ini dan yang paruh hidupnya terpanjang. Pelajaran ini mengukurnya jujur untuk profesional awal karier: versi kecil yang benar-benar tersedia, dan jalur penggandaan dari jawaban forum ke panggung konferensi."
     },
     "objectives": [
      {
       "en": "Identify the entry-level external credibility moves available in year one and two.",
       "id": "Mengenali langkah kredibilitas eksternal level pemula yang tersedia di tahun satu dan dua."
      },
      {
       "en": "Build the writing habit that feeds every other external channel.",
       "id": "Membangun kebiasaan menulis yang mengisi semua kanal eksternal lain."
      },
      {
       "en": "Climb the speaking ladder from team demo to industry meetup.",
       "id": "Menaiki tangga berbicara dari demo tim ke meetup industri."
      }
     ],
     "takeaways": [
      {
       "en": "External credibility starts embarrassingly small — a forum answer, a lightning talk — and compounds for decades.",
       "id": "Kredibilitas eksternal mulai dari yang memalukan kecilnya — jawaban forum, presentasi kilat — dan menggandakan diri berdekade."
      },
      {
       "en": "Writing is the root channel: every talk, thread and answer begins as written thinking.",
       "id": "Menulis adalah kanal akar: tiap presentasi, utas, dan jawaban bermula sebagai pemikiran tertulis."
      },
      {
       "en": "Speak about what you actually did, at the level you actually are — borrowed authority collapses on the first question.",
       "id": "Bicarakan yang sungguh kamu kerjakan, pada level yang sungguh kamu jalani — otoritas pinjaman runtuh pada pertanyaan pertama."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "The available rungs",
        "id": "Anak tangga yang tersedia"
       },
       "body": {
        "en": "Forget keynotes; year one and two offer real rungs: answering questions well in your field's forums and communities (the fastest reputation loop on the internet); writing up a project honestly on a personal blog or the platform post from 4.2; a lightning talk at a local meetup — five minutes, one lesson learned; contributing documentation or small fixes to tools your field uses; helping organise a meetup (organisers meet every speaker). Each rung is available regardless of employer prestige, and each produces a public artefact that the next rung's gatekeeper can check. The compounding is real: meetup organisers become conference reviewers; forum answers become the writing sample that gets the talk accepted.",
        "id": "Lupakan keynote; tahun satu dan dua menawarkan anak tangga nyata: menjawab pertanyaan dengan baik di forum dan komunitas bidangmu (putaran reputasi tercepat di internet); menulis proyek dengan jujur di blog pribadi atau unggahan platform dari 4.2; presentasi kilat di meetup lokal — lima menit, satu pelajaran; menyumbang dokumentasi atau perbaikan kecil ke alat yang dipakai bidangmu; membantu mengorganisasi meetup (penyelenggara bertemu semua pembicara). Tiap anak tangga tersedia terlepas dari prestise pemberi kerja, dan tiap menghasilkan artefak publik yang bisa diperiksa penjaga gerbang anak tangga berikutnya. Penggandaannya nyata: penyelenggara meetup menjadi peninjau konferensi; jawaban forum menjadi sampel tulisan yang membuat presentasi diterima."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "Writing as the root",
        "id": "Menulis sebagai akar"
       },
       "body": {
        "en": "One artefact per quarter, five hundred to a thousand words, about work you actually did: the problem, the wrong turns (they are the credibility), the solution, the numbers you can share. The discipline transfers directly from Map Module 4: pyramid structure, concrete language, reader-first design. Keep a running note of post-worthy moments — the bug that taught you something, the analysis that surprised you — because the hardest part is not writing but noticing. Where to publish matters less than existing: a simple personal page or your platform profile both work; consistency of voice across years is what eventually gets noticed.",
        "id": "Satu artefak per kuartal, lima ratus sampai seribu kata, tentang kerja yang sungguh kamu lakukan: masalahnya, belokan salah (itulah kredibilitasnya), solusinya, angka yang boleh dibagikan. Disiplinnya berpindah langsung dari Modul 4 Map: struktur piramida, bahasa konkret, rancangan pembaca-dulu. Simpan catatan berjalan momen layak-tulis — bug yang mengajarimu sesuatu, analisis yang mengejutkanmu — karena bagian tersulit bukan menulis melainkan menyadari. Tempat menerbitkan kurang penting daripada keberadaannya: halaman pribadi sederhana atau profil platformmu sama-sama bekerja; konsistensi suara lintas tahun itulah yang akhirnya diperhatikan."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "The speaking ladder",
        "id": "Tangga berbicara"
       },
       "body": {
        "en": "Rung one: present inside — the team demo, the lunch-and-learn; every organisation is starved for people willing to explain things clearly. Rung two: the local meetup lightning talk — organisers actively seek new speakers, and five minutes about a real lesson (“what 90k messy rows taught me about validation”) is a warmly received genre. Rung three: a full meetup talk, then community events and industry panels as the artefact trail grows. Two rules keep the ladder honest: speak from your own work at your own level — the junior who explains their actual mistakes teaches more than the junior imitating a keynote — and rehearse aloud three times minimum (Map 4's stakes-freeze cure applies verbatim). Nerves are normal and survivable; borrowed authority is neither.",
        "id": "Anak tangga satu: presentasi di dalam — demo tim, sesi makan siang sambil belajar; tiap organisasi kekurangan orang yang mau menjelaskan dengan jernih. Anak tangga dua: presentasi kilat meetup lokal — penyelenggara aktif mencari pembicara baru, dan lima menit tentang pelajaran nyata (“yang diajarkan 90 rb baris kotor tentang validasi”) adalah genre yang disambut hangat. Anak tangga tiga: presentasi meetup penuh, lalu acara komunitas dan panel industri seiring jejak artefak tumbuh. Dua aturan menjaga tangga tetap jujur: bicaralah dari kerjamu sendiri pada levelmu sendiri — junior yang menjelaskan kesalahan nyatanya mengajar lebih banyak daripada junior yang meniru keynote — dan latih bersuara minimal tiga kali (obat beku-taruhan Map 4 berlaku verbatim). Gugup itu normal dan bisa dilalui; otoritas pinjaman tidak keduanya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Which first external move does this lesson recommend for a first-year analyst?",
        "id": "Langkah eksternal pertama mana yang disarankan pelajaran ini untuk analis tahun pertama?"
       },
       "options": [
        {
         "en": "Pitch a talk to the industry's main conference",
         "id": "Ajukan presentasi ke konferensi utama industri"
        },
        {
         "en": "Write up one real project honestly, and answer questions in the field's community — small artefacts that compound",
         "id": "Tulis satu proyek nyata dengan jujur, dan jawab pertanyaan di komunitas bidang — artefak kecil yang menggandakan diri"
        },
        {
         "en": "Start a podcast interviewing senior leaders",
         "id": "Mulai podcast mewawancarai pemimpin senior"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The ladder starts at rungs that are actually reachable and produce checkable artefacts. Conference stages are downstream of years of small public evidence.",
        "id": "Tangga dimulai dari anak tangga yang sungguh terjangkau dan menghasilkan artefak terperiksa. Panggung konferensi berada di hilir bertahun-tahun bukti publik kecil."
       }
      }
     ]
    },
    {
     "n": "4.4",
     "title": {
      "en": "The Visibility System: Making It Sustainable",
      "id": "Sistem Visibilitas: Membuatnya Berkelanjutan"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "Visibility fails as a project and works as a system. This closing lesson assembles yours: a quarterly rhythm of internal samples, external artefacts and brand audits — then drills it against the two failure modes, invisibility and oversharing.",
      "id": "Visibilitas gagal sebagai proyek dan berhasil sebagai sistem. Pelajaran penutup ini merakit milikmu: irama kuartalan sampel internal, artefak eksternal, dan audit merek — lalu melatihnya terhadap dua mode kegagalan, ketidaktampakan dan pamer berlebihan."
     },
     "objectives": [
      {
       "en": "Assemble the quarterly visibility rhythm from the module's parts.",
       "id": "Merakit irama visibilitas kuartalan dari bagian-bagian modul."
      },
      {
       "en": "Balance internal and external visibility for your career stage.",
       "id": "Menyeimbangkan visibilitas internal dan eksternal untuk tahap kariermu."
      },
      {
       "en": "Audit and correct course twice a year with real feedback.",
       "id": "Mengaudit dan mengoreksi arah dua kali setahun dengan umpan balik nyata."
      }
     ],
     "takeaways": [
      {
       "en": "The system is small: one travelling artefact, one external piece, one brand audit per quarter — plus the weekly one-liner.",
       "id": "Sistemnya kecil: satu artefak bepergian, satu karya eksternal, satu audit merek per kuartal — plus satu-baris mingguan."
      },
      {
       "en": "Internal visibility pays this year's promotion; external visibility pays next decade's options — hold both.",
       "id": "Visibilitas internal membayar promosi tahun ini; eksternal membayar opsi dekade depan — pegang keduanya."
      },
      {
       "en": "The system runs on delivered work; the moment it outruns delivery, pause it.",
       "id": "Sistem berjalan di atas kerja yang ditunaikan; begitu ia melampaui penunaian, jedakan."
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 — Assemble your quarter",
        "id": "Latihan 1 — Rakit kuartalmu"
       },
       "body": {
        "en": "Design your next quarter's visibility plan: the one internal artefact, the one external piece, the brand-audit conversation, and where the weekly one-liner goes. Write it, then reveal.",
        "id": "Rancang rencana visibilitas kuartal depanmu: satu artefak internal, satu karya eksternal, percakapan audit merek, dan ke mana satu-baris mingguan pergi. Tulis, lalu buka."
       },
       "debrief": {
        "en": "A model quarter: internal — turn the recurring analysis into a documented, named team asset and present it once; external — one honest write-up of a finished project, posted where your field reads; audit — one “what am I becoming known for?” coffee with a trusted colleague, answers logged in the Route Planner; rhythm — Friday one-liners continue to the manager. Total cost: perhaps six hours across thirteen weeks. If your plan listed five posts and a conference pitch, cut it — the failure mode of visibility systems is ambition that collapses in week four; the version that survives is the boring one.",
        "id": "Kuartal model: internal — ubah analisis berulang menjadi aset tim terdokumentasi bernama dan presentasikan sekali; eksternal — satu tulisan jujur proyek selesai, diunggah di tempat bidangmu membaca; audit — satu obrolan kopi “aku sedang dikenal untuk apa?” dengan kolega tepercaya, jawaban dicatat di Route Planner; irama — satu-baris Jumat berlanjut ke manajer. Total biaya: mungkin enam jam dalam tiga belas minggu. Jika rencanamu memuat lima unggahan dan pengajuan konferensi, pangkas — mode gagal sistem visibilitas adalah ambisi yang runtuh di minggu empat; versi yang bertahan adalah yang membosankan."
       }
      },
      {
       "h": {
        "en": "Drill 2 — The invisibility case",
        "id": "Latihan 2 — Kasus ketidaktampakan"
       },
       "body": {
        "en": "A brilliant teammate confides: passed over again for the visible project, “even though everyone knows my work is solid”. Nobody outside the team knows their name. Advise them, then reveal.",
        "id": "Seorang rekan brilian curhat: lagi-lagi dilewati untuk proyek terlihat, “padahal semua tahu kerjaku solid”. Tak seorang pun di luar tim tahu namanya. Beri saran, lalu buka."
       },
       "debrief": {
        "en": "The diagnostic question: “everyone — or your three teammates?” Reputation is consulted at decision points by people two rooms away, and their system is running on noise. The advice, in module order: pick the two-word brand the desired projects require; start supplying samples — the Friday one-liner upward, one presented artefact per quarter, credit given precisely (it recruits echo); and ask their manager one direct question: “what would need to be true for me to be the obvious pick next time?” The last question routinely dissolves years of silent waiting — managers usually answer it specifically, and the answer is a to-do list, not a mystery.",
        "id": "Pertanyaan diagnostiknya: “semua orang — atau tiga rekan setimmu?” Reputasi dikonsultasikan di titik keputusan oleh orang dua ruangan jauhnya, dan sistem mereka berjalan di atas derau. Sarannya, berurutan modul: pilih merek dua kata yang dibutuhkan proyek yang diinginkan; mulai pasok sampel — satu-baris Jumat ke atas, satu artefak dipresentasikan per kuartal, penghargaan diberikan presisi (ia merekrut gema); dan tanyakan satu pertanyaan langsung ke manajernya: “apa yang harus benar agar aku pilihan jelas lain kali?” Pertanyaan terakhir itu rutin melarutkan bertahun-tahun penantian diam — manajer biasanya menjawab spesifik, dan jawabannya daftar kerja, bukan misteri."
       }
      },
      {
       "h": {
        "en": "Drill 3 — The oversharing case",
        "id": "Latihan 3 — Kasus pamer berlebihan"
       },
       "body": {
        "en": "Another colleague posts daily: achievements, “thrilled to announce”, engagement-bait threads, hot takes on management. Their delivery is average. Advise them — or rather, diagnose what happens next. Then reveal.",
        "id": "Kolega lain mengunggah tiap hari: pencapaian, “bangga mengumumkan”, utas umpan-interaksi, opini panas tentang manajemen. Penunaiannya biasa saja. Beri saran — atau lebih tepatnya, diagnosis yang terjadi berikutnya. Lalu buka."
       },
       "debrief": {
        "en": "The trajectory is predictable: the three audiences diverge. The external audience inflates briefly; the internal audience — which sees the delivery gap daily — reprices everything, and “more visible than valuable” becomes the brand, consulted at exactly the decision points that matter. The repair, if they ask: invert the ratio — deliver first, sample sparingly, and let the work set the ceiling on the talking. The rule from this module holds in both directions: visibility must trail delivery by a step. Trailing by ten steps is invisibility (Drill 2); leading by ten is this. One step behind is the entire craft.",
        "id": "Trajektorinya bisa ditebak: tiga audiens berpisah jalan. Audiens eksternal menggembung sebentar; audiens internal — yang melihat celah penunaian tiap hari — menghargai ulang semuanya, dan “lebih terlihat daripada berharga” menjadi merek, dikonsultasikan tepat di titik keputusan yang penting. Perbaikannya, jika ia bertanya: balikkan rasionya — tunaikan dulu, sampel hemat, dan biarkan kerja menetapkan langit-langit bicaranya. Aturan modul ini berlaku dua arah: visibilitas harus membuntuti penunaian satu langkah. Membuntuti sepuluh langkah adalah ketidaktampakan (Latihan 2); mendahului sepuluh adalah ini. Satu langkah di belakang adalah seluruh keterampilannya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "What single rule balances the invisibility and oversharing failure modes?",
        "id": "Aturan tunggal apa yang menyeimbangkan mode gagal ketidaktampakan dan pamer berlebihan?"
       },
       "options": [
        {
         "en": "Post exactly once per week",
         "id": "Unggah tepat sekali seminggu"
        },
        {
         "en": "Visibility trails delivery by one step — samples always backed by shipped work, work always given its sample",
         "id": "Visibilitas membuntuti penunaian satu langkah — sampel selalu didukung kerja terkirim, kerja selalu diberi sampelnya"
        },
        {
         "en": "Focus on internal visibility only until year five",
         "id": "Fokus visibilitas internal saja sampai tahun kelima"
        }
       ],
       "correct": 1,
       "why": {
        "en": "One step behind delivery, visibility is evidence; ten steps behind it is waste; ten steps ahead it is theatre. The step is the system.",
        "id": "Satu langkah di belakang penunaian, visibilitas adalah bukti; sepuluh langkah di belakang ia pemborosan; sepuluh di depan ia teater. Langkah itu adalah sistemnya."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/bg/fg-stage-ascent.jpg",
   "heroPos": "center 40%"
  },
  {
   "num": 5,
   "title": {
    "en": "The Promotion Game",
    "id": "Permainan Promosi"
   },
   "overview": {
    "en": "Module 5 of The Route focuses on the promotion game. Work through the lessons in order — each builds on the last.",
    "id": "Modul 5 dari The Route berfokus pada Permainan Promosi. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply the promotion game to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Permainan Promosi pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "5.1",
     "title": {
      "en": "How Promotion Decisions Are Actually Made",
      "id": "Bagaimana Keputusan Promosi Sebenarnya Dibuat"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Promotions feel like verdicts and operate like committee decisions with budgets, timing and evidence files. This lesson opens the machinery: who actually decides, on what calendar, with what inputs — and why excellent performers without files lose to good performers with them.",
      "id": "Promosi terasa seperti vonis dan beroperasi seperti keputusan komite dengan anggaran, waktu, dan berkas bukti. Pelajaran ini membuka mesinnya: siapa sebenarnya memutuskan, pada kalender apa, dengan masukan apa — dan mengapa pekerja unggul tanpa berkas kalah dari pekerja baik yang memilikinya."
     },
     "objectives": [
      {
       "en": "Trace the promotion pipeline: nomination, evidence, calibration, budget.",
       "id": "Menelusuri pipeline promosi: nominasi, bukti, kalibrasi, anggaran."
      },
      {
       "en": "Identify the real decision-makers and what each needs to say yes.",
       "id": "Mengenali pengambil keputusan sesungguhnya dan apa yang dibutuhkan masing-masing untuk berkata ya."
      },
      {
       "en": "Locate the calendar: when files close, months before announcements.",
       "id": "Menemukan kalendernya: kapan berkas ditutup, berbulan-bulan sebelum pengumuman."
      }
     ],
     "takeaways": [
      {
       "en": "Promotions are decided in calibration rooms by people who mostly know you as a file — the file is the candidate.",
       "id": "Promosi diputuskan di ruang kalibrasi oleh orang yang sebagian besar mengenalmu sebagai berkas — berkas itulah kandidatnya."
      },
      {
       "en": "Your manager is your advocate, not your judge: arm them or they enter the room empty-handed.",
       "id": "Manajermu adalah pembelamu, bukan hakimmu: persenjatai mereka atau mereka masuk ruangan dengan tangan kosong."
      },
      {
       "en": "The effective deadline is the file deadline — typically a quarter before anything is announced.",
       "id": "Tenggat efektifnya adalah tenggat berkas — biasanya satu kuartal sebelum apa pun diumumkan."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "The pipeline",
        "id": "Pipeline-nya"
       },
       "body": {
        "en": "A typical cycle: your manager <b>nominates</b> (or does not — the first gate); an <b>evidence file</b> is assembled — achievements, scope, next-level behaviours, often peer feedback; a <b>calibration committee</b> compares candidates across teams, where your manager has minutes to make your case against colleagues making theirs; <b>budget and headcount</b> constraints cut the approved list; announcements follow months later. Grasp what this means: most people in the deciding room have never worked with you. They know the file and the five sentences your advocate manages to say. Optimising the work without optimising the file is competing with one hand.",
        "id": "Siklus tipikal: manajermu <b>menominasikan</b> (atau tidak — gerbang pertama); <b>berkas bukti</b> disusun — pencapaian, lingkup, perilaku level-berikut, sering umpan balik rekan; <b>komite kalibrasi</b> membandingkan kandidat lintas tim, tempat manajermu punya hitungan menit untuk membela kasusmu melawan kolega yang membela kasus mereka; batasan <b>anggaran dan headcount</b> memangkas daftar yang disetujui; pengumuman menyusul berbulan-bulan kemudian. Pahami artinya: kebanyakan orang di ruang keputusan tak pernah bekerja denganmu. Mereka mengenal berkas dan lima kalimat yang sempat diucapkan pembelamu. Mengoptimalkan kerja tanpa mengoptimalkan berkas adalah bertanding dengan satu tangan."
       },
       "img": "../../assets/m/05-summit.jpg",
       "imgPos": "center 40%"
      },
      {
       "icon": "target",
       "h": {
        "en": "The three yeses",
        "id": "Tiga persetujuan"
       },
       "body": {
        "en": "<b>Your manager</b> must believe the case is strong enough to spend political capital on — they are ranking you against their other reports and their credibility in the room. <b>The committee</b> needs evidence they can defend in comparison: next-level behaviours already demonstrated, results with numbers, no unresolved flags. <b>The budget owner</b> needs the promotion to fit this cycle's constraints — which is why “yes, but next cycle” is often literally true rather than a soft rejection. Each yes has different evidence needs, and Module 5.2 builds the case file that serves all three. The immediate action from this lesson: learn your organisation's actual calendar — ask your manager directly, “when do promotion files effectively close?”",
        "id": "<b>Manajermu</b> harus yakin kasusnya cukup kuat untuk dibelanjakan modal politik — mereka memeringkatmu terhadap bawahan lain dan kredibilitas mereka di ruangan. <b>Komite</b> butuh bukti yang bisa dibela dalam perbandingan: perilaku level-berikut yang sudah terdemonstrasi, hasil berangka, tanpa bendera yang belum tuntas. <b>Pemilik anggaran</b> butuh promosi itu muat dalam batasan siklus ini — karena itulah “ya, tapi siklus depan” sering benar harfiah alih-alih penolakan halus. Tiap persetujuan punya kebutuhan bukti berbeda, dan Modul 5.2 membangun berkas kasus yang melayani ketiganya. Aksi langsung dari pelajaran ini: pelajari kalender nyata organisasimu — tanya manajermu langsung, “kapan berkas promosi efektif ditutup?”"
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "Why the best performer sometimes loses",
        "id": "Mengapa pekerja terbaik kadang kalah"
       },
       "body": {
        "en": "Calibration compares files, not souls. The excellent engineer whose wins were never logged, whose artefacts carry no name, whose manager arrives with adjectives instead of numbers — loses to the good engineer with eighteen months of documented, witnessed, quantified delivery. This is not corruption; it is epistemics: committees can only weigh what reaches the room. The response this course has been building all along: the win log (evidence), legibility habits (witnesses), brand samples (what the room already believes). The promotion file is those systems' output, printed. If you started them in Module 1, the file writes itself; if not, today is the day.",
        "id": "Kalibrasi membandingkan berkas, bukan jiwa. Insinyur unggul yang kemenangannya tak pernah dicatat, artefaknya tanpa nama, manajernya datang membawa kata sifat alih-alih angka — kalah dari insinyur baik dengan delapan belas bulan penunaian terdokumentasi, bersaksi, terkuantifikasi. Ini bukan korupsi; ini epistemik: komite hanya bisa menimbang yang mencapai ruangan. Jawaban yang sedari awal dibangun kursus ini: catatan kemenangan (bukti), kebiasaan keterbacaan (saksi), sampel merek (yang sudah dipercaya ruangan). Berkas promosi adalah keluaran sistem-sistem itu, dicetak. Jika kamu memulainya di Modul 1, berkas menulis dirinya sendiri; jika belum, hari inilah harinya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Promotions announce in January. When is your case effectively decided?",
        "id": "Promosi diumumkan Januari. Kapan kasusmu efektif diputuskan?"
       },
       "options": [
        {
         "en": "January, at the announcement",
         "id": "Januari, saat pengumuman"
        },
        {
         "en": "Around September–October, when nomination and evidence files close for calibration",
         "id": "Sekitar September–Oktober, saat nominasi dan berkas bukti ditutup untuk kalibrasi"
        },
        {
         "en": "December, in the final committee meeting",
         "id": "Desember, di rapat komite terakhir"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The file is the candidate, and files close a quarter or more before announcements. Evidence delivered after the close waits a full cycle.",
        "id": "Berkas itulah kandidatnya, dan berkas ditutup satu kuartal atau lebih sebelum pengumuman. Bukti yang tiba setelah penutupan menunggu satu siklus penuh."
       }
      }
     ],
     "quote": {
      "en": "In the calibration room, the file is the candidate.",
      "id": "Di ruang kalibrasi, berkas itulah kandidatnya."
     }
    },
    {
     "n": "5.2",
     "title": {
      "en": "Building Your Promotion Case Over Time",
      "id": "Membangun Kasus Promosimu dari Waktu ke Waktu"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "A promotion case is built like a legal case: claim, evidence, witnesses — assembled over quarters, not the week before files close. This lesson constructs yours: the next-level claim, the evidence file from your win log, and the advocate briefing that arms your manager.",
      "id": "Kasus promosi dibangun seperti kasus hukum: klaim, bukti, saksi — disusun selama berkuartal-kuartal, bukan seminggu sebelum berkas ditutup. Pelajaran ini membangun milikmu: klaim level-berikut, berkas bukti dari catatan kemenanganmu, dan briefing pembela yang mempersenjatai manajermu."
     },
     "objectives": [
      {
       "en": "Frame the case as next-level behaviours already demonstrated, not tenure served.",
       "id": "Membingkai kasus sebagai perilaku level-berikut yang sudah terdemonstrasi, bukan masa kerja yang dijalani."
      },
      {
       "en": "Assemble the evidence file from the win log: scope, numbers, witnesses.",
       "id": "Menyusun berkas bukti dari catatan kemenangan: lingkup, angka, saksi."
      },
      {
       "en": "Brief your advocate with the one-pager they can argue from.",
       "id": "Membekali pembelamu dengan satu halaman yang bisa mereka argumenkan."
      }
     ],
     "takeaways": [
      {
       "en": "The winning argument is always “already operating at the next level” — never “deserves it” or “has waited long enough”.",
       "id": "Argumen pemenang selalu “sudah beroperasi di level berikut” — tak pernah “pantas” atau “sudah cukup lama menunggu”."
      },
      {
       "en": "Evidence beats adjectives in calibration exactly as it did in CVs: numbers, artefacts, named witnesses.",
       "id": "Bukti mengalahkan kata sifat di kalibrasi persis seperti di CV: angka, artefak, saksi bernama."
      },
      {
       "en": "Your manager argues your case from whatever you gave them — give them a weapon, not a feeling.",
       "id": "Manajermu membela kasusmu dari apa pun yang kamu berikan — beri mereka senjata, bukan perasaan."
      }
     ],
     "sections": [
      {
       "icon": "target",
       "h": {
        "en": "The claim",
        "id": "Klaimnya"
       },
       "body": {
        "en": "Committees promote to confirm a level already reached — the safest yes in the room is “this person is already doing the job”. So the case's spine is the next level's published expectations (most organisations have them; ask HR or your manager for the level guide) mapped one-to-one against your demonstrated behaviours: the level says “owns problems end-to-end” — here are two problems owned end-to-end, with dates and outcomes; the level says “develops others” — here is the intern onboarded, the runbook adopted, the training session run. Gaps in the mapping are not disqualifiers; they are your next two quarters' targets, which is why the case starts being built a year out.",
        "id": "Komite mempromosikan untuk mengonfirmasi level yang sudah dicapai — persetujuan teraman di ruangan adalah “orang ini sudah menjalankan pekerjaannya”. Maka tulang punggung kasus adalah ekspektasi terpublikasi level berikut (kebanyakan organisasi memilikinya; minta panduan level ke HR atau manajermu) yang dipetakan satu-satu terhadap perilaku terdemonstrasimu: level berkata “memiliki masalah ujung-ke-ujung” — ini dua masalah yang dimiliki ujung-ke-ujung, dengan tanggal dan hasil; level berkata “mengembangkan orang lain” — ini magang yang di-onboard, runbook yang diadopsi, sesi pelatihan yang dijalankan. Celah dalam pemetaan bukan diskualifikasi; ia target dua kuartal berikutmu, karena itulah kasus mulai dibangun setahun sebelumnya."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "The evidence file",
        "id": "Berkas bukti"
       },
       "body": {
        "en": "From the win log, select six to ten entries that carry the mapping, each written as: what you did, its scope (team size, budget, users, rows), the measured outcome, and who can verify. Attach or link artefacts — the dashboard, the post-mortem, the adopted runbook. Include one honest growth story: a real stumble, what changed after it, the evidence of the change — committees trust files that contain a shadow; flawless files read as curated. Keep the whole thing to two pages: calibration rooms have minutes per candidate, and a file that cannot be skimmed is a file that argues nothing.",
        "id": "Dari catatan kemenangan, pilih enam sampai sepuluh entri yang membawa pemetaan, masing-masing ditulis sebagai: apa yang kamu lakukan, lingkupnya (ukuran tim, anggaran, pengguna, baris), hasil terukur, dan siapa yang bisa memverifikasi. Lampirkan atau tautkan artefak — dasbor, post-mortem, runbook yang diadopsi. Sertakan satu kisah pertumbuhan yang jujur: sandungan nyata, apa yang berubah setelahnya, bukti perubahannya — komite mempercayai berkas yang memuat bayangan; berkas tanpa cela terbaca sebagai kurasi. Jaga seluruhnya dua halaman: ruang kalibrasi punya hitungan menit per kandidat, dan berkas yang tak bisa dibaca sekilas adalah berkas yang tak membela apa pun."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "Arming the advocate",
        "id": "Mempersenjatai pembela"
       },
       "body": {
        "en": "A quarter before files close, book the conversation: “I'd like to be considered next cycle. Here's a one-pager mapping my work against the level guide — where do you see the case as strong, and where is it thin?” Three outcomes, all wins. If they agree and the case is strong, your advocate now walks into the room armed. If they see gaps, you have a quarter of targeted work and their investment in the outcome. If they refuse engagement entirely across two cycles — that is architecture-level data (Module 1.3's decision gate consumes it). Managers advocate hardest for cases they helped build; the early conversation converts your promotion from their task into their project.",
        "id": "Satu kuartal sebelum berkas ditutup, jadwalkan percakapannya: “Saya ingin dipertimbangkan siklus depan. Ini satu halaman yang memetakan kerja saya terhadap panduan level — di mana kasusnya kuat menurutmu, dan di mana tipis?” Tiga hasil, semuanya kemenangan. Jika mereka setuju dan kasusnya kuat, pembelamu kini masuk ruangan bersenjata. Jika mereka melihat celah, kamu punya satu kuartal kerja terarah dan investasi mereka pada hasilnya. Jika mereka menolak terlibat sepenuhnya selama dua siklus — itu data level-arsitektur (gerbang keputusan Modul 1.3 yang mencernanya). Manajer membela paling keras kasus yang ikut mereka bangun; percakapan dini mengubah promosimu dari tugas mereka menjadi proyek mereka."
       }
      }
     ],
     "compare": [
      {
       "tag": {
        "en": "The ask — feeling vs case",
        "id": "Permintaan — perasaan vs kasus"
       },
       "q": {
        "en": "Opening the promotion conversation with your manager",
        "id": "Membuka percakapan promosi dengan manajermu"
       },
       "weak": {
        "en": "“I've been here two and a half years and I think it's time. Everyone from my batch has been promoted. I work really hard and I feel I've earned it.”",
        "id": "“Saya sudah di sini dua setengah tahun dan kurasa sudah waktunya. Semua seangkatanku sudah dipromosikan. Saya kerja sangat keras dan merasa pantas.”"
       },
       "strong": {
        "en": "“I'd like to build the case for next cycle. Against the senior-analyst guide: I've owned the churn and pricing analyses end-to-end for three quarters (linked), the runbook I wrote onboarded both new joiners, and my error-catch on the Q2 forecast saved the re-plan (Pak Har can verify). The thin spot I see is cross-team scope — I'd like your read, and a project that would close it.”",
        "id": "“Saya ingin membangun kasus untuk siklus depan. Terhadap panduan analis senior: saya memiliki analisis churn dan harga ujung-ke-ujung tiga kuartal (tertaut), runbook tulisan saya meng-onboard kedua karyawan baru, dan tangkapan kesalahan saya pada proyeksi Q2 menyelamatkan perencanaan ulang (Pak Har bisa memverifikasi). Titik tipis yang kulihat lingkup lintas tim — saya ingin pendapatmu, dan proyek yang menutupnya.”"
       },
       "why": {
        "en": "Tenure and feelings argue nothing in calibration. The strong version maps evidence to the level guide, names witnesses, self-identifies the gap, and recruits the manager into the build.",
        "id": "Masa kerja dan perasaan tak membela apa pun di kalibrasi. Versi kuat memetakan bukti ke panduan level, menyebut saksi, mengenali sendiri celahnya, dan merekrut manajer ke dalam pembangunannya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does the file include one honest growth story rather than only wins?",
        "id": "Mengapa berkas memuat satu kisah pertumbuhan jujur alih-alih hanya kemenangan?"
       },
       "options": [
        {
         "en": "HR requires a weakness section",
         "id": "HR mewajibkan bagian kelemahan"
        },
        {
         "en": "Committees trust files with a verified shadow — flawless files read as curated, and next-level readiness includes learning from failure",
         "id": "Komite mempercayai berkas dengan bayangan terverifikasi — berkas tanpa cela terbaca kurasi, dan kesiapan level-berikut mencakup belajar dari kegagalan"
        },
        {
         "en": "It lowers expectations for the following year",
         "id": "Ia menurunkan ekspektasi untuk tahun berikutnya"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The growth story is evidence of exactly the meta-skill the next level demands — and it inoculates the file against the curated-perfection discount.",
        "id": "Kisah pertumbuhan adalah bukti persis meta-keterampilan yang dituntut level berikut — dan ia mengimunisasi berkas dari diskon kesempurnaan-kurasi."
       }
      }
     ],
     "tool": {
      "id": "field",
      "mode": "promo",
      "title": {
       "en": "Build the case from your win log",
       "id": "Bangun kasus dari catatan kemenanganmu"
      },
      "body": {
       "en": "The promotion case builder assembles a one-page file from your logged wins and three claims, then checks it against this module's evidence standards.",
       "id": "Perakit kasus promosi menyusun berkas satu halaman dari kemenangan tercatatmu dan tiga klaim, lalu memeriksanya terhadap standar bukti modul ini."
      },
      "cta": {
       "en": "Open the case builder →",
       "id": "Buka perakit kasus →"
      }
     }
    },
    {
     "n": "5.3",
     "title": {
      "en": "Timing and Initiating the Promotion Conversation",
      "id": "Menentukan Waktu dan Memulai Percakapan Promosi"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Timing turns identical cases into different outcomes. This lesson covers the promotion conversation's choreography: when to raise it, how to run the ask itself, how to respond to each of the four possible answers — and how to keep the relationship strong through all of them.",
      "id": "Waktu mengubah kasus identik menjadi hasil berbeda. Pelajaran ini membahas koreografi percakapan promosi: kapan mengangkatnya, cara menjalankan permintaannya sendiri, cara merespons tiap dari empat jawaban yang mungkin — dan cara menjaga hubungan tetap kuat melewati semuanya."
     },
     "objectives": [
      {
       "en": "Time the conversation to the file calendar and the organisation's weather.",
       "id": "Menepatkan waktu percakapan pada kalender berkas dan cuaca organisasi."
      },
      {
       "en": "Run the ask as a case review, not a demand or a plea.",
       "id": "Menjalankan permintaan sebagai tinjauan kasus, bukan tuntutan atau permohonan."
      },
      {
       "en": "Respond professionally to yes, not-yet, silence, and no.",
       "id": "Merespons profesional terhadap ya, belum, keheningan, dan tidak."
      }
     ],
     "takeaways": [
      {
       "en": "Raise it a quarter before files close, in a scheduled conversation — never in the corridor, never in anger.",
       "id": "Angkat satu kuartal sebelum berkas ditutup, dalam percakapan terjadwal — jangan pernah di koridor, jangan pernah dalam marah."
      },
      {
       "en": "The ask is collaborative: “help me see the case as the committee will” outperforms “I want a promotion”.",
       "id": "Permintaannya kolaboratif: “bantu aku melihat kasus ini sebagaimana komite” mengungguli “aku mau promosi”."
      },
      {
       "en": "Every answer except yes comes with a follow-up that converts it into a plan with dates.",
       "id": "Setiap jawaban selain ya disertai tindak lanjut yang mengubahnya menjadi rencana bertanggal."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "Reading the calendar and the weather",
        "id": "Membaca kalender dan cuaca"
       },
       "body": {
        "en": "The hard constraint is the file calendar from 5.1: the conversation happens a quarter before files close, so gaps can still be closed and your advocate can prepare. The soft constraint is organisational weather: a hiring freeze, a bad quarter, a reorg mid-flight all lower the yes-rate regardless of merit — raising the case a cycle later, into calmer weather, is sometimes the strongest timing move available. What never works: the corridor ambush, the post-rejection-of-a-peer window (budgets just spent), and the resignation-threat opener, which converts a promotion conversation into a hostage negotiation your relationship does not survive intact.",
        "id": "Batasan kerasnya kalender berkas dari 5.1: percakapan terjadi satu kuartal sebelum berkas ditutup, agar celah masih bisa ditutup dan pembelamu bisa bersiap. Batasan lunaknya cuaca organisasi: pembekuan rekrutmen, kuartal buruk, reorganisasi di tengah jalan semuanya menurunkan tingkat ya terlepas dari kelayakan — mengangkat kasus satu siklus kemudian, ke cuaca lebih tenang, kadang langkah waktu terkuat yang tersedia. Yang tak pernah berhasil: penyergapan koridor, jendela pasca-penolakan-rekan (anggaran baru terpakai), dan pembuka ancaman-mundur, yang mengubah percakapan promosi menjadi negosiasi sandera yang tak akan dilalui utuh oleh hubunganmu."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "Running the ask",
        "id": "Menjalankan permintaan"
       },
       "body": {
        "en": "Book it explicitly (“I'd like 30 minutes to discuss my development toward the next level”), bring the one-pager from 5.2, and open collaboratively: “I believe the case is close; I'd value your read on where it stands and what would complete it.” Then be quiet and take notes. The posture is a case review between colleagues, which lets your manager engage as coach and advocate rather than defend as gatekeeper. Close with concrete next steps regardless of tone: “so the plan is X by September and the cross-team project — can we check in on this monthly?” The monthly check-in is the mechanism that keeps the case alive rather than annually resurrected.",
        "id": "Jadwalkan eksplisit (“saya ingin 30 menit membahas pengembangan saya menuju level berikut”), bawa satu halaman dari 5.2, dan buka kolaboratif: “Saya yakin kasusnya sudah dekat; saya ingin pendapatmu tentang posisinya dan apa yang melengkapinya.” Lalu diam dan mencatat. Posturnya tinjauan kasus antar-kolega, yang membuat manajermu terlibat sebagai pelatih dan pembela alih-alih bertahan sebagai penjaga gerbang. Tutup dengan langkah konkret apa pun nadanya: “jadi rencananya X sebelum September dan proyek lintas tim — bisakah kita cek bulanan?” Cek bulanan adalah mekanisme yang menjaga kasus tetap hidup alih-alih dibangkitkan tahunan."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "The four answers",
        "id": "Empat jawaban"
       },
       "body": {
        "en": "<b>Yes:</b> confirm the mechanics — “what do you need from me for the file?” — and keep delivering; announced yeses have been lost in calibration. <b>Not yet, because X:</b> the most useful answer — convert X into dated targets on the spot and book the monthly check-in; a “not yet” with a plan converts at high rates next cycle. <b>Vagueness:</b> (“let's see how the year goes”) — press gently once for specifics: “what would a complete case contain?”; persistent vagueness across two conversations is itself information about advocacy. <b>No, and the reasoning does not hold:</b> stay professional in the room, verify the reasoning against the level guide afterwards, and feed the result into Module 5.4 and the decision gate. In every branch, the relationship survives the conversation — you will need it whichever path follows.",
        "id": "<b>Ya:</b> pastikan mekanikanya — “apa yang kamu butuhkan dariku untuk berkasnya?” — dan terus tunaikan; ya yang terucap pernah kalah di kalibrasi. <b>Belum, karena X:</b> jawaban paling berguna — ubah X menjadi target bertanggal saat itu juga dan jadwalkan cek bulanan; “belum” dengan rencana terkonversi tinggi di siklus berikut. <b>Kesamaran:</b> (“kita lihat setahun ini dulu”) — tekan lembut sekali untuk kespesifikan: “kasus lengkap berisi apa?”; kesamaran menetap dua percakapan adalah informasi tentang pembelaan itu sendiri. <b>Tidak, dan alasannya tak kokoh:</b> tetap profesional di ruangan, verifikasi alasannya terhadap panduan level sesudahnya, dan masukkan hasilnya ke Modul 5.4 dan gerbang keputusan. Di setiap cabang, hubungan selamat dari percakapan — kamu akan membutuhkannya jalur mana pun yang mengikuti."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Your manager answers: “not yet — I need to see you lead something cross-team.” The strongest response?",
        "id": "Manajermu menjawab: “belum — aku perlu melihatmu memimpin sesuatu lintas tim.” Respons terkuat?"
       },
       "options": [
        {
         "en": "Accept it and wait to be given something cross-team",
         "id": "Terima dan tunggu diberi sesuatu yang lintas tim"
        },
        {
         "en": "Convert it on the spot: “agreed — the vendor-migration project would demonstrate that. If I lead it and it lands, is the case complete for the March file? Can we check monthly?”",
         "id": "Ubah saat itu juga: “setuju — proyek migrasi vendor bisa mendemonstrasikannya. Jika kupimpin dan berhasil, apakah kasusnya lengkap untuk berkas Maret? Bisa kita cek bulanan?”"
        },
        {
         "en": "Ask HR whether cross-team leadership is really in the level guide",
         "id": "Tanya HR apakah kepemimpinan lintas tim sungguh ada di panduan level"
        }
       ],
       "correct": 1,
       "why": {
        "en": "A “not yet” is an option contract: name the project, the date, the completion condition and the check-in — and the vague future becomes a scheduled yes.",
        "id": "“Belum” adalah kontrak opsi: sebutkan proyeknya, tanggalnya, syarat lengkapnya, dan cek berkalanya — dan masa depan samar menjadi ya yang terjadwal."
       }
      }
     ]
    },
    {
     "n": "5.4",
     "title": {
      "en": "Navigating a Promotion Delay or Denial",
      "id": "Menavigasi Penundaan atau Penolakan Promosi"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "slides",
     "placeholder": false,
     "overview": {
      "en": "Sooner or later a cycle passes you by. What you do in the following month decides more than the outcome did. This deck walks the delay-or-denial protocol: the 48-hour rule, the diagnostic conversation, the three verdicts, and the comeback plan for each.",
      "id": "Cepat atau lambat sebuah siklus melewatimu. Yang kamu lakukan sebulan setelahnya menentukan lebih banyak daripada hasilnya sendiri. Dek ini menelusuri protokol tunda-atau-tolak: aturan 48 jam, percakapan diagnostik, tiga vonis, dan rencana bangkit untuk masing-masing."
     },
     "objectives": [
      {
       "en": "Apply the 48-hour rule before any response to a promotion disappointment.",
       "id": "Menerapkan aturan 48 jam sebelum respons apa pun atas kekecewaan promosi."
      },
      {
       "en": "Run the diagnostic conversation that separates case, cycle and ceiling.",
       "id": "Menjalankan percakapan diagnostik yang memisahkan kasus, siklus, dan langit-langit."
      },
      {
       "en": "Execute the comeback plan matching your verdict.",
       "id": "Mengeksekusi rencana bangkit yang sesuai vonismu."
      }
     ],
     "takeaways": [
      {
       "en": "Your reaction is watched more closely than your file ever was — composure here is next cycle's first evidence.",
       "id": "Reaksimu diawasi lebih dekat daripada berkasmu — ketenangan di sini adalah bukti pertama siklus berikutnya."
      },
      {
       "en": "Three different verdicts wear the same announcement: weak case, wrong cycle, or hard ceiling — diagnose before deciding.",
       "id": "Tiga vonis berbeda memakai pengumuman yang sama: kasus lemah, siklus salah, atau langit-langit keras — diagnosis sebelum memutuskan."
      },
      {
       "en": "A ceiling is not a tragedy; it is routing information for the architecture.",
       "id": "Langit-langit bukan tragedi; ia informasi rute bagi arsitektur."
      }
     ],
     "slides": [
      {
       "h": {
        "en": "The 48-hour rule",
        "id": "Aturan 48 jam"
       },
       "points": [
        {
         "en": "No decisions, no emails, no corridor commentary for two days — disappointment writes cheques composure has to cash.",
         "id": "Tanpa keputusan, tanpa email, tanpa komentar koridor selama dua hari — kekecewaan menulis cek yang harus dibayar ketenangan."
        },
        {
         "en": "In the room, one sentence suffices: “I'm disappointed, and I want to understand it properly — can we debrief next week?”",
         "id": "Di ruangan, satu kalimat cukup: “Saya kecewa, dan ingin memahaminya dengan benar — bisa kita bahas minggu depan?”"
        },
        {
         "en": "The organisation is watching the reaction, not the rejection: calm here is the strongest possible opening of the next case.",
         "id": "Organisasi mengamati reaksinya, bukan penolakannya: tenang di sini adalah pembuka terkuat kasus berikutnya."
        }
       ]
      },
      {
       "h": {
        "en": "The diagnostic conversation",
        "id": "Percakapan diagnostik"
       },
       "points": [
        {
         "en": "Scheduled, calm, three questions: What was the committee's actual reasoning? What specifically would a successful file have contained? Is that achievable here in a cycle?",
         "id": "Terjadwal, tenang, tiga pertanyaan: Apa alasan komite sebenarnya? Berkas yang berhasil persisnya berisi apa? Apakah itu tercapai di sini dalam satu siklus?"
        },
        {
         "en": "Listen for which verdict the answers describe — case, cycle, or ceiling.",
         "id": "Dengarkan vonis mana yang digambarkan jawaban — kasus, siklus, atau langit-langit."
        },
        {
         "en": "Take notes visibly; the conversation is also your advocate's memo for next time.",
         "id": "Mencatatlah dengan terlihat; percakapan ini juga memo pembelamu untuk kali berikutnya."
        }
       ]
      },
      {
       "h": {
        "en": "Verdict 1 — Weak case",
        "id": "Vonis 1 — Kasus lemah"
       },
       "points": [
        {
         "en": "The reasons map to real gaps: scope, evidence, a next-level behaviour not yet shown.",
         "id": "Alasannya terpeta ke celah nyata: lingkup, bukti, perilaku level-berikut yang belum tampak."
        },
        {
         "en": "Comeback: dated targets per gap, monthly check-ins, file rebuilt next cycle — the 5.3 “not yet” play.",
         "id": "Bangkit: target bertanggal per celah, cek bulanan, berkas dibangun ulang siklus depan — permainan “belum” dari 5.3."
        },
        {
         "en": "Highest conversion rate of the three verdicts. Most delays are this one.",
         "id": "Tingkat konversi tertinggi dari tiga vonis. Kebanyakan penundaan adalah yang ini."
        }
       ]
      },
      {
       "h": {
        "en": "Verdict 2 — Wrong cycle",
        "id": "Vonis 2 — Siklus salah"
       },
       "points": [
        {
         "en": "The case held; budget, headcount or politics did not — “yes, but not now” in its honest form.",
         "id": "Kasusnya kokoh; anggaran, headcount, atau politik tidak — “ya, tapi bukan sekarang” dalam bentuk jujurnya."
        },
        {
         "en": "Comeback: keep the file warm, secure written acknowledgment of readiness, confirm priority next cycle.",
         "id": "Bangkit: jaga berkas tetap hangat, amankan pengakuan tertulis kesiapan, pastikan prioritas siklus depan."
        },
        {
         "en": "Two consecutive wrong-cycles with no interim recognition is a ceiling wearing a calendar costume.",
         "id": "Dua siklus-salah berturut tanpa pengakuan sementara adalah langit-langit berkostum kalender."
        }
       ]
      },
      {
       "h": {
        "en": "Verdict 3 — The ceiling",
        "id": "Vonis 3 — Langit-langit"
       },
       "points": [
        {
         "en": "Signals: vague reasons that shift, no achievable file described, peers with equal evidence advancing.",
         "id": "Sinyal: alasan samar yang berubah, tak ada berkas tercapai yang digambarkan, rekan berbukti setara terus maju."
        },
        {
         "en": "Comeback: not a fight — a routing decision. Open Module 7: the market prices your assets even when this room does not.",
         "id": "Bangkit: bukan pertarungan — keputusan rute. Buka Modul 7: pasar menghargai asetmu bahkan saat ruangan ini tidak."
        },
        {
         "en": "Leave well regardless (Module 7.4): the industry is small and the file travels with you, informally.",
         "id": "Pergilah dengan baik apa pun itu (Modul 7.4): industrinya kecil dan berkas ikut bersamamu, secara informal."
        }
       ]
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Two cycles running you were told “strong case, bad timing”, with no interim scope or recognition added. The deck's read?",
        "id": "Dua siklus berturut kamu diberi tahu “kasus kuat, waktu buruk”, tanpa lingkup atau pengakuan sementara ditambahkan. Bacaan dek ini?"
       },
       "options": [
        {
         "en": "Wait a third cycle — budgets are genuinely tight everywhere",
         "id": "Tunggu siklus ketiga — anggaran memang ketat di mana-mana"
        },
        {
         "en": "Treat it as a probable ceiling: verify against peers' outcomes, then run the architecture's decision gate toward Module 7",
         "id": "Perlakukan sebagai kemungkinan langit-langit: verifikasi terhadap hasil rekan, lalu jalankan gerbang keputusan arsitektur menuju Modul 7"
        },
        {
         "en": "Escalate to the committee directly",
         "id": "Eskalasi langsung ke komite"
        }
       ],
       "correct": 1,
       "why": {
        "en": "One wrong-cycle is weather; two with no interim investment is a pattern. The composed response is routing, not a third year of waiting.",
        "id": "Satu siklus-salah adalah cuaca; dua tanpa investasi sementara adalah pola. Respons yang tenang adalah pengalihan rute, bukan tahun ketiga menunggu."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/m/05-summit.jpg",
   "heroPos": "center 35%"
  },
  {
   "num": 6,
   "title": {
    "en": "Mentors, Sponsors, and Your Inner Circle",
    "id": "Mentor, Sponsor, dan Lingkaran Dalammu"
   },
   "overview": {
    "en": "Module 6 of The Route focuses on mentors, sponsors, and your inner circle. Work through the lessons in order — each builds on the last.",
    "id": "Modul 6 dari The Route berfokus pada Mentor, Sponsor, dan Lingkaran Dalammu. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply mentors, sponsors, and your inner circle to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Mentor, Sponsor, dan Lingkaran Dalammu pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "6.1",
     "title": {
      "en": "Mentors vs. Sponsors: A Critical Distinction",
      "id": "Mentor vs. Sponsor: Perbedaan yang Krusial"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "A mentor talks with you; a sponsor talks about you — in rooms where your file is on the table. Confusing the two is the most expensive networking error in early careers. This lesson separates the roles, what each is for, and how each is actually obtained.",
      "id": "Mentor berbicara denganmu; sponsor berbicara tentangmu — di ruangan tempat berkasmu ada di atas meja. Mencampuradukkan keduanya adalah kesalahan networking termahal di awal karier. Pelajaran ini memisahkan perannya, kegunaan masing-masing, dan cara masing-masing sebenarnya diperoleh."
     },
     "objectives": [
      {
       "en": "Distinguish mentorship (guidance) from sponsorship (advocacy) and what each costs the giver.",
       "id": "Membedakan mentorship (bimbingan) dari sponsorship (pembelaan) dan biaya masing-masing bagi pemberinya."
      },
      {
       "en": "Identify which you currently lack and which the next transition needs.",
       "id": "Mengenali mana yang kini tak kamu miliki dan mana yang dibutuhkan transisi berikutnya."
      },
      {
       "en": "Recognise sponsorship's currency: risk taken on your name.",
       "id": "Mengenali mata uang sponsorship: risiko yang diambil atas namamu."
      }
     ],
     "takeaways": [
      {
       "en": "Mentors give you their thinking; sponsors spend their credibility — which is why sponsors are rarer and never recruited by asking.",
       "id": "Mentor memberimu pemikirannya; sponsor membelanjakan kredibilitasnya — karena itulah sponsor lebih langka dan tak pernah direkrut dengan meminta."
      },
      {
       "en": "Advice without advocacy explains careers that are well-guided and stuck.",
       "id": "Nasihat tanpa pembelaan menjelaskan karier yang terbimbing baik namun macet."
      },
      {
       "en": "Sponsorship is earned by being safe to bet on — delivery plus composure plus legibility, over time.",
       "id": "Sponsorship diperoleh dengan menjadi aman untuk dipertaruhkan — penunaian plus ketenangan plus keterbacaan, seiring waktu."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "Two different transactions",
        "id": "Dua transaksi berbeda"
       },
       "body": {
        "en": "<b>Mentorship</b> transfers judgment: how to read the terrain, which skills to build, what the mentor wishes they had known. Its cost to the giver is time, which many seniors give gladly — teaching is rewarding and low-risk. <b>Sponsorship</b> transfers credibility: “put her on the project — I'll vouch for it”; “he's ready for the level — I've seen the work”. Its cost is risk: if you fail, the sponsor's judgment is repriced in the room. This is why organisations overflow with advice and starve for advocacy, and why the two roles usually live in different people: the mentor may be anywhere; the sponsor must be where your decisions are made.",
        "id": "<b>Mentorship</b> memindahkan penilaian: cara membaca medan, keterampilan mana yang dibangun, apa yang mentor harap dulu ia ketahui. Biayanya bagi pemberi adalah waktu, yang banyak senior berikan dengan senang — mengajar itu memuaskan dan berisiko rendah. <b>Sponsorship</b> memindahkan kredibilitas: “taruh dia di proyek itu — aku jaminannya”; “dia siap untuk level itu — aku sudah melihat kerjanya”. Biayanya risiko: jika kamu gagal, penilaian sponsor dihargai ulang di ruangan. Karena itulah organisasi meluap dengan nasihat dan kelaparan pembelaan, dan mengapa dua peran itu biasanya tinggal pada orang berbeda: mentor boleh di mana saja; sponsor harus berada di tempat keputusanmu dibuat."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Which one your career needs now",
        "id": "Mana yang dibutuhkan kariermu sekarang"
       },
       "body": {
        "en": "Diagnose from your situation, not from templates. Struggling to choose directions, decode the organisation, or grow a skill — that is mentor territory. Strong file, clear brand, but doors not opening; passed over for visible projects; “great work, keep it up” with no scope growth — that is a sponsorship gap, and more mentoring will not close it. Most early careers need both: a mentor or two for judgment (including one outside your company for unconflicted advice), and over time, sponsorship earned where the decisions happen. The Route Planner's diagnostic includes a relationships dimension precisely for this reading.",
        "id": "Diagnosis dari situasimu, bukan dari templat. Kesulitan memilih arah, membaca organisasi, atau menumbuhkan keterampilan — itu wilayah mentor. Berkas kuat, merek jelas, tetapi pintu tak terbuka; dilewati untuk proyek terlihat; “kerja bagus, teruskan” tanpa pertumbuhan lingkup — itu celah sponsorship, dan lebih banyak mentoring tak akan menutupnya. Kebanyakan karier awal butuh keduanya: satu-dua mentor untuk penilaian (termasuk satu di luar perusahaanmu untuk nasihat bebas konflik), dan seiring waktu, sponsorship yang diperoleh di tempat keputusan terjadi. Diagnostik Route Planner memuat dimensi hubungan persis untuk pembacaan ini."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "The currency of sponsorship",
        "id": "Mata uang sponsorship"
       },
       "body": {
        "en": "You cannot ask someone to spend credibility on you — the ask itself signals you do not understand the price. Sponsorship is extended when three conditions hold in the sponsor's mind: <b>they have seen the work</b> (legibility — your artefacts and results reached them); <b>they trust the composure</b> (you will not embarrass them in the room they put you in); <b>the bet serves them too</b> (your success reflects on their judgment, fills their project's need, builds their team's bench). Which means sponsorship is manufactured indirectly: deliver visibly near people with power to bet, and behave — in meetings, under fire, with juniors — like someone safe to vouch for. Module 6.3 turns this into practice.",
        "id": "Kamu tak bisa meminta orang membelanjakan kredibilitas untukmu — permintaannya sendiri menandakan kamu tak paham harganya. Sponsorship diberikan saat tiga syarat terpenuhi di benak sponsor: <b>mereka telah melihat kerjanya</b> (keterbacaan — artefak dan hasilmu mencapai mereka); <b>mereka mempercayai ketenangannya</b> (kamu tak akan mempermalukan mereka di ruangan tempat mereka menaruhmu); <b>taruhannya juga melayani mereka</b> (suksesmu mencerminkan penilaian mereka, mengisi kebutuhan proyek mereka, membangun kedalaman tim mereka). Artinya sponsorship diproduksi tak langsung: tunaikan secara terlihat dekat orang-orang berdaya taruh, dan berperilakulah — di rapat, di bawah tekanan, dengan junior — seperti orang yang aman dijamin. Modul 6.3 mengubah ini menjadi praktik."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Your work is strong and well-documented, your reviews glowing — yet visible projects keep going to peers. What is missing?",
        "id": "Kerjamu kuat dan terdokumentasi baik, penilaianmu cemerlang — namun proyek terlihat terus jatuh ke rekan. Apa yang hilang?"
       },
       "options": [
        {
         "en": "More mentors to advise on strategy",
         "id": "Lebih banyak mentor untuk menasihati strategi"
        },
        {
         "en": "Sponsorship — nobody in the deciding rooms is spending credibility on your name",
         "id": "Sponsorship — tak ada di ruang keputusan yang membelanjakan kredibilitas atas namamu"
        },
        {
         "en": "Better time management",
         "id": "Manajemen waktu lebih baik"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Guidance is not the bottleneck; advocacy is. The gap closes through visible delivery near decision-makers, not through more advice.",
        "id": "Bimbingan bukan lehernya; pembelaan iya. Celah tertutup lewat penunaian terlihat di dekat pengambil keputusan, bukan lewat nasihat tambahan."
       }
      }
     ],
     "quote": {
      "en": "A mentor talks with you. A sponsor talks about you.",
      "id": "Mentor berbicara denganmu. Sponsor berbicara tentangmu."
     }
    },
    {
     "n": "6.2",
     "title": {
      "en": "Building Mentoring Relationships With Integrity",
      "id": "Membangun Hubungan Mentoring dengan Integritas"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Mentoring relationships die of vagueness more than anything else. This lesson builds them with integrity and structure: choosing for the gap you actually have, asking in a way that respects the mentor's economics, and running the relationship so both sides profit.",
      "id": "Hubungan mentoring mati karena kesamaran lebih dari apa pun. Pelajaran ini membangunnya dengan integritas dan struktur: memilih sesuai celah yang sungguh kamu punya, meminta dengan cara yang menghormati ekonomi sang mentor, dan menjalankan hubungannya agar kedua pihak beruntung."
     },
     "objectives": [
      {
       "en": "Choose mentors for specific gaps, not for seniority prestige.",
       "id": "Memilih mentor untuk celah spesifik, bukan prestise senioritas."
      },
      {
       "en": "Open with the small, specific, time-boxed ask — never “will you be my mentor?”.",
       "id": "Membuka dengan permintaan kecil, spesifik, berbatas waktu — jangan pernah “maukah jadi mentorku?”."
      },
      {
       "en": "Run the relationship: prepared sessions, closed loops, honest value back.",
       "id": "Menjalankan hubungannya: sesi dipersiapkan, putaran ditutup, nilai balik yang jujur."
      }
     ],
     "takeaways": [
      {
       "en": "“Will you be my mentor?” asks for an undefined lifetime commitment; a specific question asks for twenty minutes — start there.",
       "id": "“Maukah jadi mentorku?” meminta komitmen seumur hidup tak terdefinisi; pertanyaan spesifik meminta dua puluh menit — mulailah di sana."
      },
      {
       "en": "The mentee runs the relationship: agendas, follow-through, and reporting back what happened to the advice.",
       "id": "Mentee yang menjalankan hubungannya: agenda, tindak lanjut, dan melaporkan balik apa yang terjadi pada nasihatnya."
      },
      {
       "en": "Mentors stay for one reason: visible evidence that their input changes your actions.",
       "id": "Mentor bertahan karena satu alasan: bukti terlihat bahwa masukannya mengubah tindakanmu."
      }
     ],
     "sections": [
      {
       "icon": "target",
       "h": {
        "en": "Choosing for the gap",
        "id": "Memilih sesuai celah"
       },
       "body": {
        "en": "Name the gap first (1.4's inventory): decoding the organisation → someone two levels up inside it; technical depth → the respected senior in that craft, employer irrelevant; career architecture → someone whose path resembles your intended one, five years ahead; industry perspective → someone outside your company entirely. Two or three mentors covering distinct gaps beat one all-purpose sage — and the person slightly ahead of you often teaches the mechanics better than the legend thirty years out, because they still remember the actual steps. Sources: your own organisation, alumni networks, professional communities, and Metanoia's Basecamp mentors.",
        "id": "Namai celahnya dulu (inventaris 1.4): membaca organisasi → seseorang dua level di atas di dalamnya; kedalaman teknis → senior yang dihormati di keahlian itu, pemberi kerja tak penting; arsitektur karier → seseorang yang jalurnya mirip niatmu, lima tahun di depan; perspektif industri → seseorang sepenuhnya di luar perusahaanmu. Dua-tiga mentor menutup celah berbeda mengalahkan satu orang bijak serba guna — dan orang yang sedikit di depanmu sering mengajarkan mekanika lebih baik daripada legenda tiga puluh tahun jauhnya, karena mereka masih ingat langkah-langkah nyatanya. Sumber: organisasimu sendiri, jaringan alumni, komunitas profesional, dan mentor Basecamp Metanoia."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "The opening ask",
        "id": "Permintaan pembuka"
       },
       "body": {
        "en": "The cold-email craft from Map 4.3 applies verbatim: visible homework, one specific question, fifteen-minute cap, graceful out. “Your move from audit into risk analytics is the transition I'm mapping for myself — could I ask you two specific questions about it? Fifteen minutes, any time in the next two weeks.” Then, if the conversation is good, the bridge is not a proposal but a pattern: “this was genuinely useful — would it be all right if I came back in a month or two when I've acted on it?” Relationships that begin as one useful conversation and recur on evidence outlive every formal mentor-mentee contract signed on day one.",
        "id": "Keterampilan email dingin dari Map 4.3 berlaku verbatim: PR terlihat, satu pertanyaan spesifik, batas lima belas menit, jalan keluar anggun. “Perpindahanmu dari audit ke analitik risiko adalah transisi yang sedang kupetakan untuk diriku — bolehkah kutanyakan dua pertanyaan spesifik tentangnya? Lima belas menit, kapan pun dalam dua minggu ke depan.” Lalu, jika percakapannya baik, jembatannya bukan proposal melainkan pola: “ini sungguh berguna — bolehkah aku kembali sebulan-dua bulan lagi setelah menindaklanjutinya?” Hubungan yang bermula sebagai satu percakapan berguna dan berulang atas bukti bertahan lebih lama dari tiap kontrak mentor-mentee resmi yang diteken di hari pertama."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "Running it with integrity",
        "id": "Menjalankannya dengan integritas"
       },
       "body": {
        "en": "The mentee owns the machinery: come with an agenda (one decision, one struggle, one update), take notes, and — the retention secret — <b>close every loop</b>: “you suggested I present the analysis myself; I did, it led to the cross-team invite.” Give value back honestly: ground-level intelligence seniors lack, help with something concrete, amplification of their work where genuine. Respect the meta-rules: confidences kept absolutely, advice weighed rather than blindly executed (report your reasoning when you diverge — good mentors respect it), and gratitude that is specific rather than performative. When a relationship has run its season, let it downshift gracefully to occasional updates; forced permanence sours what a clean arc would have preserved.",
        "id": "Mentee memiliki mesinnya: datang dengan agenda (satu keputusan, satu pergumulan, satu kabar), mencatat, dan — rahasia retensi — <b>tutup tiap putaran</b>: “kamu menyarankan aku mempresentasikan analisisnya sendiri; kulakukan, dan itu membawa undangan lintas tim.” Beri nilai balik dengan jujur: intelijen lapangan yang tak dimiliki senior, bantuan pada hal konkret, amplifikasi karya mereka bila tulus. Hormati meta-aturannya: rahasia dijaga mutlak, nasihat ditimbang alih-alih dieksekusi buta (laporkan penalaranmu saat menyimpang — mentor baik menghormatinya), dan terima kasih yang spesifik alih-alih seremonial. Saat hubungan menyelesaikan musimnya, biarkan turun gigi dengan anggun ke kabar sesekali; permanensi paksaan mengasamkan yang seharusnya diawetkan busur yang bersih."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does “will you be my mentor?” underperform a specific question, according to this lesson?",
        "id": "Mengapa “maukah jadi mentorku?” kalah dari pertanyaan spesifik, menurut pelajaran ini?"
       },
       "options": [
        {
         "en": "It sounds old-fashioned",
         "id": "Terdengar kuno"
        },
        {
         "en": "It requests an undefined, open-ended commitment before any evidence the time will be well spent — the specific question costs twenty minutes and lets the relationship prove itself",
         "id": "Ia meminta komitmen tak terdefinisi dan terbuka sebelum ada bukti waktunya akan berguna — pertanyaan spesifik berbiaya dua puluh menit dan membiarkan hubungan membuktikan dirinya"
        },
        {
         "en": "Formal mentorship is only for executives",
         "id": "Mentorship formal hanya untuk eksekutif"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Seniors decline undefined liabilities and accept bounded, prepared asks. The title “mentor” arrives later, as a description of what already exists.",
        "id": "Senior menolak kewajiban tak terdefinisi dan menerima permintaan berbatas yang dipersiapkan. Gelar “mentor” datang belakangan, sebagai deskripsi dari yang sudah ada."
       }
      }
     ]
    },
    {
     "n": "6.3",
     "title": {
      "en": "Earning Sponsorship",
      "id": "Meraih Sponsorship"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "You cannot ask for sponsorship, but you can systematically become the person sponsors bet on. This lesson engineers the conditions: proximity to bettors, proof they can see, safety they can trust — and the graceful handling of sponsorship once it arrives.",
      "id": "Kamu tak bisa meminta sponsorship, tetapi kamu bisa secara sistematis menjadi orang yang dipertaruhkan sponsor. Pelajaran ini merekayasa kondisinya: kedekatan dengan penaruh, bukti yang bisa mereka lihat, keamanan yang bisa mereka percaya — dan penanganan anggun sponsorship begitu ia tiba."
     },
     "objectives": [
      {
       "en": "Create legitimate proximity to the people whose bets shape careers.",
       "id": "Menciptakan kedekatan sah dengan orang-orang yang taruhannya membentuk karier."
      },
      {
       "en": "Convert delivery into proof that reaches potential sponsors.",
       "id": "Mengubah penunaian menjadi bukti yang mencapai calon sponsor."
      },
      {
       "en": "Honour a sponsor's bet when it comes — and survive a sponsor's exit.",
       "id": "Menghormati taruhan sponsor saat ia datang — dan bertahan saat sponsor pergi."
      }
     ],
     "takeaways": [
      {
       "en": "Sponsors bet on what they have personally witnessed — engineering witnessed moments is the whole game.",
       "id": "Sponsor bertaruh pada yang mereka saksikan sendiri — merekayasa momen tersaksikan adalah seluruh permainannya."
      },
      {
       "en": "Every delivered bet raises your betting line; every fumbled one reprices it — treat sponsored projects accordingly.",
       "id": "Setiap taruhan yang ditunaikan menaikkan garis taruhanmu; setiap yang gagal menghargainya ulang — perlakukan proyek tersponsori sebagaimana mestinya."
      },
      {
       "en": "Never depend on one sponsor: people leave, reorganise, and fall from grace — portfolios apply to advocates too.",
       "id": "Jangan pernah bergantung pada satu sponsor: orang pergi, direorganisasi, dan jatuh pamor — portofolio berlaku juga untuk pembela."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "Proximity, engineered legitimately",
        "id": "Kedekatan, direkayasa secara sah"
       },
       "body": {
        "en": "Sponsors can only bet on people who cross their field of vision. Legitimate crossings: volunteer for projects whose steering committee includes them; present your own work when the chance exists (never yield your slot); join the cross-functional initiative they care about; ask one good question in their forum. Illegitimate crossings — engineered coffee ambushes, flattery campaigns, hovering — are read instantly for what they are. The difference: legitimate proximity always carries work in its hands. You are not seeking an audience; you are doing visible work in shared spaces, which is simply what 2.2's legibility looks like at higher altitude.",
        "id": "Sponsor hanya bisa bertaruh pada orang yang melintasi bidang pandangnya. Lintasan sah: ajukan diri untuk proyek yang komite pengarahnya mengikutsertakan mereka; presentasikan karyamu sendiri saat kesempatan ada (jangan pernah serahkan slotmu); ikut inisiatif lintas fungsi yang mereka pedulikan; ajukan satu pertanyaan bagus di forum mereka. Lintasan tak sah — penyergapan kopi yang direkayasa, kampanye pujian, berkeliaran — langsung terbaca apa adanya. Bedanya: kedekatan sah selalu membawa kerja di tangannya. Kamu bukan mencari audiensi; kamu mengerjakan kerja terlihat di ruang bersama, yang sederhananya adalah keterbacaan 2.2 pada ketinggian lebih tinggi."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Proof and safety",
        "id": "Bukti dan keamanan"
       },
       "body": {
        "en": "Proof: when your work lands near a potential sponsor, it must be attributable (your name on the artefact, your voice in the presentation) and complete (finished things, not promising drafts). Safety: sponsors audit composure before they bet — how you took the hard question in their meeting, whether your numbers survived scrutiny, how you treated the junior who erred, whether confidence stayed calibrated under praise. The safety audit is passive and continuous; you will not know when it ran. Which yields this module's quiet rule: behave in every visible moment as if a potential sponsor is deciding — because statistically, one is.",
        "id": "Bukti: saat karyamu mendarat dekat calon sponsor, ia harus teratribusi (namamu di artefak, suaramu di presentasi) dan tuntas (hal selesai, bukan draf menjanjikan). Keamanan: sponsor mengaudit ketenangan sebelum bertaruh — caramu menerima pertanyaan sulit di rapat mereka, apakah angkamu lolos pengawasan, caramu memperlakukan junior yang keliru, apakah kepercayaan diri tetap terkalibrasi di bawah pujian. Audit keamanan itu pasif dan berkelanjutan; kamu tak akan tahu kapan ia berjalan. Yang menghasilkan aturan senyap modul ini: berperilakulah di tiap momen terlihat seolah calon sponsor sedang memutuskan — karena secara statistik, memang ada."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "When the bet arrives — and when it leaves",
        "id": "Saat taruhan tiba — dan saat ia pergi"
       },
       "body": {
        "en": "A sponsor's bet looks like an assignment: the stretch project, the client room, the committee seat. Honour it operationally: over-communicate progress to the sponsor (they are exposed; feed them ammunition), deliver completely, and credit their backing accurately when it succeeds — sponsors whose bets are honoured bet again, bigger. If the bet is failing, tell them first and early; sponsors forgive rescued failures and never forgive ambushes. And diversify: a single-sponsor career inherits that sponsor's fortunes — cultivate advocacy in more than one room, keep your external market presence (4.2–4.3) alive, so a sponsor's departure is a setback rather than a decapitation.",
        "id": "Taruhan sponsor tampak seperti penugasan: proyek peregangan, ruang klien, kursi komite. Hormati secara operasional: komunikasikan kemajuan berlebih ke sponsor (mereka terekspos; beri mereka amunisi), tunaikan tuntas, dan hargai dukungan mereka akurat saat berhasil — sponsor yang taruhannya dihormati bertaruh lagi, lebih besar. Jika taruhan sedang gagal, beri tahu mereka pertama dan lebih awal; sponsor memaafkan kegagalan yang diselamatkan dan tak pernah memaafkan penyergapan. Dan diversifikasi: karier satu-sponsor mewarisi nasib sponsor itu — pupuk pembelaan di lebih dari satu ruangan, jaga kehadiran pasar eksternalmu (4.2–4.3) tetap hidup, agar kepergian sponsor adalah kemunduran, bukan pemenggalan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A director hands you a stretch project after seeing your quarterly presentation. Mid-project, a key dependency slips and the deadline is at risk. The sponsorship-aware move?",
        "id": "Seorang direktur memberimu proyek peregangan setelah melihat presentasi kuartalanmu. Di tengah proyek, satu dependensi kunci meleset dan tenggat berisiko. Langkah sadar-sponsorship-nya?"
       },
       "options": [
        {
         "en": "Work nights to fix it quietly — the director must never see trouble",
         "id": "Kerja lembur memperbaikinya diam-diam — direktur tak boleh melihat masalah"
        },
        {
         "en": "Tell the director early with the recovery plan: they are exposed on this bet and early warning plus a plan is what protects them",
         "id": "Beri tahu direktur lebih awal dengan rencana pemulihan: mereka terekspos pada taruhan ini dan peringatan dini plus rencana itulah yang melindungi mereka"
        },
        {
         "en": "Ask your mentor to mention it to the director informally",
         "id": "Minta mentormu menyinggungnya ke direktur secara informal"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Sponsors forgive rescued failures and never forgive ambushes. Early warning with a plan is how bets get honoured even when they wobble.",
        "id": "Sponsor memaafkan kegagalan terselamatkan dan tak pernah memaafkan penyergapan. Peringatan dini dengan rencana adalah cara taruhan dihormati bahkan saat goyah."
       }
      }
     ],
     "tool": {
      "id": "field",
      "mode": "coach:sponsor",
      "title": {
       "en": "Earn the sponsor, move by move",
       "id": "Peroleh sponsor, langkah demi langkah"
      },
      "body": {
       "en": "A director knows your name and a stretch project is staffing next month. The drill plays the three moments where sponsorship is won or quietly lost.",
       "id": "Seorang direktur tahu namamu dan proyek menantang akan diisi bulan depan. Latihan ini memainkan tiga momen tempat sponsorship dimenangkan atau diam-diam hilang."
      },
      "cta": {
       "en": "Run the scenario →",
       "id": "Jalankan skenarionya →"
      }
     }
    },
    {
     "n": "6.4",
     "title": {
      "en": "Your Inner Circle: The Four or Five Who Matter Most",
      "id": "Lingkaran Dalammu: Empat atau Lima Orang yang Paling Penting"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "Beyond mentors and sponsors sits the inner circle: the four or five people whose judgment you trust with your career's hardest calls. This closing lesson designs yours deliberately — composition, maintenance, and the drill of actually consulting it.",
      "id": "Di luar mentor dan sponsor ada lingkaran dalam: empat-lima orang yang penilaiannya kamu percayai untuk keputusan tersulit kariermu. Pelajaran penutup ini merancang milikmu dengan sengaja — komposisi, perawatan, dan latihan benar-benar mengonsultasikannya."
     },
     "objectives": [
      {
       "en": "Design the circle's composition: the five seats and who fills them.",
       "id": "Merancang komposisi lingkaran: lima kursi dan siapa pengisinya."
      },
      {
       "en": "Maintain it with the light rhythm that keeps trust current.",
       "id": "Merawatnya dengan irama ringan yang menjaga kepercayaan tetap terkini."
      },
      {
       "en": "Consult it properly on a real decision — and reciprocate.",
       "id": "Mengonsultasikannya dengan benar pada keputusan nyata — dan membalasnya."
      }
     ],
     "takeaways": [
      {
       "en": "Five seats: the truth-teller, the domain sage, the connector, the peer in the trenches, the one who knew you before the title.",
       "id": "Lima kursi: penyampai kebenaran, empu ranah, penghubung, rekan seperjuangan, dan yang mengenalmu sebelum gelar."
      },
      {
       "en": "Circles decay without contact: small, regular, two-directional touches keep the trust consultable.",
       "id": "Lingkaran membusuk tanpa kontak: sentuhan kecil, teratur, dua arah menjaga kepercayaan tetap bisa dikonsultasikan."
      },
      {
       "en": "You are a seat in other people's circles — the reciprocity is the system.",
       "id": "Kamu adalah kursi di lingkaran orang lain — timbal balik itulah sistemnya."
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 — Cast the seats",
        "id": "Latihan 1 — Isi kursinya"
       },
       "body": {
        "en": "Write five names against the five seats: truth-teller (tells you what you avoid hearing), domain sage (deep in your craft), connector (knows everyone, sees across silos), trench peer (your level, your battles, unfiltered honesty), old witness (knew you before any title, keeps you calibrated). Gaps allowed. Then reveal.",
        "id": "Tulis lima nama untuk lima kursi: penyampai kebenaran (mengatakan yang kamu hindari dengar), empu ranah (dalam di keahlianmu), penghubung (kenal semua orang, melihat lintas silo), rekan seperjuangan (selevelmu, pertempuranmu, kejujuran tanpa saring), saksi lama (mengenalmu sebelum gelar apa pun, menjaga kalibrasimu). Celah dibolehkan. Lalu buka."
       },
       "debrief": {
        "en": "Common findings. Multiple seats filled by one person — risky concentration; work to separate them over the year. The truth-teller seat empty — most common and most costly gap: candidates are people who have already disagreed with you and stayed; promote one deliberately by asking for hard opinions and rewarding them visibly. All seats inside your current employer — the circle inherits your employer's blind spots; recruit at least one outside voice (an old classmate now elsewhere, a community peer). No name for the old witness — call the person you are thinking of; that seat mostly needs maintenance, not recruitment.",
        "id": "Temuan umum. Beberapa kursi diisi satu orang — konsentrasi berisiko; upayakan memisahkannya sepanjang tahun. Kursi penyampai kebenaran kosong — celah paling umum dan paling mahal: kandidatnya orang yang sudah pernah tak setuju denganmu dan tetap tinggal; angkat satu dengan sengaja dengan meminta opini keras dan menghargainya terlihat. Semua kursi di dalam pemberi kerjamu kini — lingkaran mewarisi titik buta pemberi kerjamu; rekrut minimal satu suara luar (teman kuliah lama yang kini di tempat lain, rekan komunitas). Tak ada nama untuk saksi lama — telepon orang yang sedang kamu pikirkan; kursi itu kebanyakan butuh perawatan, bukan perekrutan."
       }
      },
      {
       "h": {
        "en": "Drill 2 — Design the maintenance",
        "id": "Latihan 2 — Rancang perawatannya"
       },
       "body": {
        "en": "Design a maintenance rhythm costing under an hour a month for the whole circle. Write it, then reveal.",
        "id": "Rancang irama perawatan berbiaya di bawah satu jam sebulan untuk seluruh lingkaran. Tulis, lalu buka."
       },
       "debrief": {
        "en": "A working model: one substantial touch per person per quarter — a coffee, a call, a long message with a real update and a real question; plus opportunistic micro-touches — sending the article that made you think of them, congratulating the win you noticed, answering their asks fast and well. The asymmetric rule: respond to circle members within a day, always — the circle's value is precisely that its requests jump your queue, in both directions. Log the touches lightly (the Route Planner's win log takes relationship notes too); memory is not a maintenance system.",
        "id": "Model kerja: satu sentuhan berarti per orang per kuartal — kopi, telepon, pesan panjang dengan kabar nyata dan pertanyaan nyata; plus sentuhan mikro oportunistik — mengirim artikel yang membuatmu teringat mereka, mengucapkan selamat atas kemenangan yang kamu lihat, menjawab permintaan mereka cepat dan baik. Aturan asimetrisnya: balas anggota lingkaran dalam sehari, selalu — nilai lingkaran justru bahwa permintaannya melompati antreanmu, dua arah. Catat sentuhannya ringan (catatan kemenangan Route Planner menampung catatan hubungan juga); ingatan bukan sistem perawatan."
       }
      },
      {
       "h": {
        "en": "Drill 3 — Consult it for real",
        "id": "Latihan 3 — Konsultasikan sungguhan"
       },
       "body": {
        "en": "Take a live career question — a role choice, a promotion strategy, a difficult manager. Design how you consult the circle on it: who, in what order, asking what. Then reveal.",
        "id": "Ambil pertanyaan karier yang hidup — pilihan peran, strategi promosi, manajer sulit. Rancang cara mengonsultasikan lingkaran: siapa, urutan apa, menanyakan apa. Lalu buka."
       },
       "debrief": {
        "en": "Model consultation: frame the question precisely first (Map 3's gap statement — current, desired, obstacle); consult seats for their strengths — the domain sage on the technical read, the connector on how the market or organisation actually sees it, the trench peer on ground truth, the truth-teller last and with the hardest framing (“what am I not letting myself see?”); then decide yourself — the circle informs, the architect decides. Afterwards, close the loops: tell each what you decided and what happened. That reporting-back is what converts five advisors into a standing council — and it is the reciprocity that keeps your seat in their circles too.",
        "id": "Konsultasi model: bingkai pertanyaannya presisi dulu (pernyataan celah Map 3 — kini, diinginkan, hambatan); konsultasikan kursi sesuai kekuatannya — empu ranah untuk bacaan teknis, penghubung untuk cara pasar atau organisasi sungguh melihatnya, rekan seperjuangan untuk kebenaran lapangan, penyampai kebenaran terakhir dengan bingkai tersulit (“apa yang tak kubiarkan diriku lihat?”); lalu putuskan sendiri — lingkaran menginformasikan, arsitek memutuskan. Setelahnya, tutup putarannya: beri tahu masing-masing apa yang kamu putuskan dan apa yang terjadi. Pelaporan balik itulah yang mengubah lima penasihat menjadi dewan tetap — dan itulah timbal balik yang menjaga kursimu di lingkaran mereka juga."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does the truth-teller seat get consulted last in the model consultation?",
        "id": "Mengapa kursi penyampai kebenaran dikonsultasikan terakhir dalam konsultasi model?"
       },
       "options": [
        {
         "en": "Their opinion matters least",
         "id": "Opini mereka paling tak penting"
        },
        {
         "en": "By then you hold the full picture and your emerging preference — exactly what the truth-teller exists to stress-test",
         "id": "Saat itu kamu memegang gambaran penuh dan preferensi yang mulai terbentuk — persis yang ada untuk diuji-tekan sang penyampai kebenaran"
        },
        {
         "en": "Truth-tellers need the most scheduling notice",
         "id": "Penyampai kebenaran butuh pemberitahuan jadwal terpanjang"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The truth-teller's question — “what am I not letting myself see?” — only bites once a preference exists to examine. Sequence is part of the craft.",
        "id": "Pertanyaan penyampai kebenaran — “apa yang tak kubiarkan diriku lihat?” — hanya menggigit begitu ada preferensi untuk diperiksa. Urutan adalah bagian keterampilannya."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/bg/rope-team.jpg",
   "heroPos": "center 35%"
  },
  {
   "num": 7,
   "title": {
    "en": "The Second Move",
    "id": "Langkah Kedua"
   },
   "overview": {
    "en": "Module 7 of The Route focuses on the second move. Work through the lessons in order — each builds on the last.",
    "id": "Modul 7 dari The Route berfokus pada Langkah Kedua. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply the second move to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Langkah Kedua pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "7.1",
     "title": {
      "en": "Career Capital and the Right Time to Move",
      "id": "Modal Karier dan Waktu yang Tepat untuk Bergerak"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The second move — your first deliberate job change — sets your trajectory more than the first job did, because this time you choose with assets. This lesson covers the timing question: reading your capital's market value, the signals that say move, and the ones that say stay.",
      "id": "Langkah kedua — perpindahan kerja sengaja pertamamu — menentukan trajektorimu lebih dari pekerjaan pertama, karena kali ini kamu memilih dengan aset. Pelajaran ini membahas soal waktu: membaca nilai pasar modalmu, sinyal yang berkata pindah, dan yang berkata bertahan."
     },
     "objectives": [
      {
       "en": "Read your career capital's market value without applying anywhere.",
       "id": "Membaca nilai pasar modal kariermu tanpa melamar ke mana pun."
      },
      {
       "en": "Distinguish the four legitimate move triggers from the three false ones.",
       "id": "Membedakan empat pemicu pindah yang sah dari tiga yang palsu."
      },
      {
       "en": "Time moves to capital peaks, not frustration peaks.",
       "id": "Menepatkan waktu pindah pada puncak modal, bukan puncak frustrasi."
      }
     ],
     "takeaways": [
      {
       "en": "Move when your assets peak and compound elsewhere — not when a bad week peaks.",
       "id": "Pindahlah saat asetmu memuncak dan menggandakan diri di tempat lain — bukan saat minggu buruk memuncak."
      },
      {
       "en": "The market prices you continuously whether you look or not; looking quarterly is calibration, not disloyalty.",
       "id": "Pasar menghargaimu terus-menerus entah kamu melihat atau tidak; melihat kuartalan adalah kalibrasi, bukan pengkhianatan."
      },
      {
       "en": "Staying is also a move — legitimate when yield is high, dangerous when it is merely comfortable.",
       "id": "Bertahan juga sebuah langkah — sah saat hasil tinggi, berbahaya saat sekadar nyaman."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "Reading your market value",
        "id": "Membaca nilai pasarmu"
       },
       "body": {
        "en": "Without sending one application: read live vacancies for your target next role and check which requirements you now meet (the 1.4 gap analysis, repriced by the market); note which of your skills appear in postings' first lines (those are the priced ones); watch what peers with similar profiles move into; and take the occasional recruiter call as free market data even when uninterested — “what would make a candidate compelling for this?” is a question they answer well. Log the reading quarterly in the Route Planner. The point is calibration: people who never look systematically underprice themselves, then anchor to their own underpricing in negotiations.",
        "id": "Tanpa mengirim satu lamaran pun: baca lowongan aktif untuk peran target berikutmu dan periksa persyaratan mana yang kini kamu penuhi (analisis celah 1.4, dihargai ulang oleh pasar); catat keterampilanmu mana yang muncul di baris-baris pertama iklan (itulah yang dihargai); amati rekan berprofil serupa pindah ke mana; dan terima sesekali telepon perekrut sebagai data pasar gratis bahkan saat tak berminat — “apa yang membuat kandidat menarik untuk peran ini?” adalah pertanyaan yang mereka jawab dengan baik. Catat pembacaannya kuartalan di Route Planner. Intinya kalibrasi: orang yang tak pernah melihat secara sistematis menghargai dirinya terlalu murah, lalu berjangkar pada harga murahnya sendiri dalam negosiasi."
       },
       "img": "../../assets/m/06-horizon.jpg",
       "imgPos": "center 45%"
      },
      {
       "icon": "target",
       "h": {
        "en": "True and false triggers",
        "id": "Pemicu benar dan palsu"
       },
       "body": {
        "en": "<b>Legitimate triggers:</b> the asset-yield floor — two decision gates running on empty with engineering attempts failed; the ceiling verdict from 5.4; a market repricing your skills sharply upward while your role cannot follow; an architecture change — the destination itself has legitimately moved. <b>False triggers:</b> the bad-quarter effect (a rough project, a hard manager month — weather, not climate); the shiny-offer effect (recruiters flatter; the two-lens test from Pack 5.4 exists for this); and the peer-envy effect (their move served their architecture, which is not yours). The discipline: no move decisions inside a bad month, and every move decision through the architecture, in writing.",
        "id": "<b>Pemicu sah:</b> lantai hasil aset — dua gerbang keputusan berjalan kosong dengan upaya rekayasa gagal; vonis langit-langit dari 5.4; pasar menghargai ulang keterampilanmu tajam ke atas sementara peranmu tak bisa mengikuti; perubahan arsitektur — tujuannya sendiri berpindah secara sah. <b>Pemicu palsu:</b> efek kuartal-buruk (proyek kasar, bulan manajer sulit — cuaca, bukan iklim); efek tawaran-berkilau (perekrut memuji; uji dua lensa Pack 5.4 ada untuk ini); dan efek iri-rekan (pindahnya melayani arsitektur mereka, yang bukan milikmu). Disiplinnya: tak ada keputusan pindah di dalam bulan buruk, dan tiap keputusan pindah melalui arsitektur, tertulis."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "The capital-peak principle",
        "id": "Prinsip puncak modal"
       },
       "body": {
        "en": "Move on strength: just after the shipped project, the promotion, the visible win — when your file is fresh and your story leads with momentum. The instinct runs opposite — people move when miserable, arriving at negotiations with stale wins and visible fatigue. If a legitimate trigger fires during a trough, the sequence is: stabilise (three months of deliberate delivery and one bankable win), then move on the strength you rebuilt. The exception that overrides everything: genuinely toxic situations — integrity pressure, health damage, red lines crossed — where the leaving is the win, executed as cleanly as circumstances allow.",
        "id": "Pindahlah dalam kekuatan: tepat setelah proyek rilis, promosi, kemenangan terlihat — saat berkasmu segar dan kisahmu memimpin dengan momentum. Nalurinya berlawanan — orang pindah saat sengsara, tiba di negosiasi dengan kemenangan basi dan kelelahan yang terlihat. Jika pemicu sah menyala saat palung, urutannya: stabilkan (tiga bulan penunaian sengaja dan satu kemenangan yang bisa diandalkan), lalu pindah dengan kekuatan yang kamu bangun ulang. Pengecualian yang mengalahkan segalanya: situasi sungguh beracun — tekanan integritas, kerusakan kesehatan, garis merah terlanggar — di mana kepergian itulah kemenangannya, dieksekusi sebersih yang diizinkan keadaan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "After a brutal quarter under a difficult manager, a recruiter dangles a 25% raise. The lesson's prescription?",
        "id": "Setelah kuartal brutal di bawah manajer sulit, seorang perekrut menggantung kenaikan 25%. Resep pelajaran ini?"
       },
       "options": [
        {
         "en": "Take it — the market has spoken",
         "id": "Ambil — pasar telah bicara"
        },
        {
         "en": "Recognise two false triggers stacking (bad quarter + shiny offer); run it through the architecture and two lenses in a calm week before deciding",
         "id": "Kenali dua pemicu palsu bertumpuk (kuartal buruk + tawaran berkilau); jalankan lewat arsitektur dan dua lensa di minggu tenang sebelum memutuskan"
        },
        {
         "en": "Decline — never move before year three",
         "id": "Tolak — jangan pernah pindah sebelum tahun ketiga"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The offer may be right — but a decision made at frustration-peak, on flattery, without the architecture, is a coin flip wearing a salary.",
        "id": "Tawarannya mungkin benar — tetapi keputusan di puncak frustrasi, atas pujian, tanpa arsitektur, adalah lempar koin berbaju gaji."
       }
      }
     ],
     "quote": {
      "en": "Move when your assets peak — not when a bad week peaks.",
      "id": "Pindahlah saat asetmu memuncak — bukan saat minggu buruk memuncak."
     }
    },
    {
     "n": "7.2",
     "title": {
      "en": "Evaluating Your Next Role Against Your Career Architecture",
      "id": "Mengevaluasi Peran Berikutmu Terhadap Arsitektur Kariermu"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "An offer is a bundle of thirty variables wearing one salary number. This lesson builds the evaluation discipline: pricing the whole bundle against your architecture, interrogating the parts that matter, and refusing the arithmetic seductions that make bad moves look good.",
      "id": "Tawaran adalah bundel tiga puluh variabel berbaju satu angka gaji. Pelajaran ini membangun disiplin evaluasi: menghargai seluruh bundel terhadap arsitekturmu, menginterogasi bagian yang penting, dan menolak rayuan aritmetika yang membuat langkah buruk tampak bagus."
     },
     "objectives": [
      {
       "en": "Evaluate offers as bundles: role scope, manager, trajectory, compensation, life fit.",
       "id": "Mengevaluasi tawaran sebagai bundel: lingkup peran, manajer, trajektori, kompensasi, kecocokan hidup."
      },
      {
       "en": "Interrogate the offer with the questions that reveal the real role.",
       "id": "Menginterogasi tawaran dengan pertanyaan yang mengungkap peran sebenarnya."
      },
      {
       "en": "Compare against your current role's true trajectory, not its worst week.",
       "id": "Membandingkan dengan trajektori sejati peranmu kini, bukan minggu terburuknya."
      }
     ],
     "takeaways": [
      {
       "en": "The manager you would join is the biggest unpriced variable in every offer — price it.",
       "id": "Manajer yang akan kamu ikuti adalah variabel tak terhargai terbesar di tiap tawaran — hargai."
      },
      {
       "en": "Scope beats title beats salary at this stage: ownership mints assets, labels do not.",
       "id": "Lingkup mengalahkan gelar mengalahkan gaji di tahap ini: kepemilikan mencetak aset, label tidak."
      },
      {
       "en": "Compare bundles at the three-year mark, not day one — trajectories, not snapshots.",
       "id": "Bandingkan bundel pada titik tiga tahun, bukan hari pertama — trajektori, bukan potret."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "Pricing the bundle",
        "id": "Menghargai bundel"
       },
       "body": {
        "en": "Score both options — offer and current role — against the same sheet, derived from your architecture: <b>scope</b> (what will you own end-to-end, and how soon), <b>manager</b> (their reputation for growing people — ask around; a bad manager taxes every other line), <b>trajectory</b> (what do people in this role move into, at what pace), <b>compensation</b> (total: base, variable, benefits, and the growth curve, not the entry point), <b>life fit</b> (commute, hours culture, the constraint lines from 1.3). Weight by your architecture, score honestly, and let the flinch test from Map 3.2 catch the criteria you secretly hold. The sheet's job is not to decide — it is to make your real reasoning visible enough to interrogate.",
        "id": "Nilai kedua opsi — tawaran dan peran kini — dengan lembar sama, diturunkan dari arsitekturmu: <b>lingkup</b> (apa yang akan kamu miliki ujung-ke-ujung, dan seberapa cepat), <b>manajer</b> (reputasinya menumbuhkan orang — tanyakan sekeliling; manajer buruk memajaki semua baris lain), <b>trajektori</b> (orang di peran ini berpindah ke mana, seberapa cepat), <b>kompensasi</b> (total: pokok, variabel, tunjangan, dan kurva pertumbuhan, bukan titik masuk), <b>kecocokan hidup</b> (perjalanan, budaya jam, garis batas dari 1.3). Bobot sesuai arsitekturmu, nilai jujur, dan biarkan uji kernyit Map 3.2 menangkap kriteria yang diam-diam kamu pegang. Tugas lembar itu bukan memutuskan — melainkan membuat penalaran sejatimu cukup terlihat untuk diinterogasi."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "Interrogating the offer",
        "id": "Menginterogasi tawaran"
       },
       "body": {
        "en": "Questions that reveal the real role, all legitimate to ask between offer and acceptance: “What happened to the last person in this seat?” (growth, exit, or revolving door — each tells). “What would my first two deliverables be?” (vague answers predict vague roles). “How does this role get evaluated at six months?” (no answer means no thought). “Can I speak with someone on the team?” (refusal is data). “What does progression from this role look like — who last made it?” Companies respect candidates who interrogate; evasive answers to fair questions are themselves the answer. Do the same diligence on the company that The Range taught for research: funding or results trajectory, turnover signals, market position.",
        "id": "Pertanyaan yang mengungkap peran sebenarnya, semuanya sah ditanyakan antara tawaran dan penerimaan: “Apa yang terjadi pada orang terakhir di kursi ini?” (tumbuh, keluar, atau pintu berputar — masing-masing bercerita). “Apa dua hasil pertama saya?” (jawaban samar meramalkan peran samar). “Bagaimana peran ini dievaluasi pada enam bulan?” (tanpa jawaban berarti tanpa pemikiran). “Boleh saya bicara dengan seseorang di tim?” (penolakan adalah data). “Seperti apa jenjang dari peran ini — siapa terakhir yang menaikinya?” Perusahaan menghormati kandidat yang menginterogasi; jawaban mengelak atas pertanyaan wajar adalah jawabannya sendiri. Lakukan kecermatan yang sama pada perusahaan seperti yang diajarkan The Range untuk riset: trajektori pendanaan atau hasil, sinyal pergantian, posisi pasar."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "The honest comparison",
        "id": "Perbandingan jujur"
       },
       "body": {
        "en": "Compare the offer against your current role's true trajectory: with the engineering moves you have not yet tried, the promotion case in flight, the sponsor half-earned — versus the offer's promises discounted to what its evidence supports. Then project both to year three: where does each bundle leave your assets, your gates, your constraints? The arithmetic seductions to refuse: comparing their best case to your worst week; pricing the raise without pricing the reset (new trust to build, new terrain to learn — six months of reduced compounding); and treating the current role's known problems as heavier than the offer's unknown ones. Unknown problems arrive on schedule; they are simply not visible from here.",
        "id": "Bandingkan tawaran dengan trajektori sejati peranmu kini: dengan langkah rekayasa yang belum kamu coba, kasus promosi yang sedang berjalan, sponsor yang setengah diperoleh — versus janji tawaran yang didiskon ke bukti pendukungnya. Lalu proyeksikan keduanya ke tahun ketiga: di mana tiap bundel meninggalkan asetmu, gerbangmu, batasanmu? Rayuan aritmetika yang harus ditolak: membandingkan kasus terbaik mereka dengan minggu terburukmu; menghargai kenaikan tanpa menghargai reset (kepercayaan baru untuk dibangun, medan baru untuk dipelajari — enam bulan penggandaan berkurang); dan memperlakukan masalah yang diketahui di peran kini lebih berat dari masalah tak diketahui di tawaran. Masalah tak diketahui datang tepat waktu; ia hanya belum terlihat dari sini."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "The offer's salary is 15% higher but the hiring manager cannot name your first two deliverables and the last two people in the seat left within a year. The bundle read?",
        "id": "Gaji tawaran 15% lebih tinggi tetapi manajer perekrut tak bisa menyebut dua hasil pertamamu dan dua orang terakhir di kursi itu keluar dalam setahun. Bacaan bundelnya?"
       },
       "options": [
        {
         "en": "Take it — salary is the only verifiable variable",
         "id": "Ambil — gaji satu-satunya variabel terverifikasi"
        },
        {
         "en": "The two strongest signals (vague scope, revolving door) price the bundle down past the raise — decline or investigate further",
         "id": "Dua sinyal terkuat (lingkup samar, pintu berputar) menurunkan harga bundel melampaui kenaikannya — tolak atau selidiki lebih jauh"
        },
        {
         "en": "Negotiate for 25% to compensate for the risk",
         "id": "Negosiasikan 25% untuk mengompensasi risikonya"
        }
       ],
       "correct": 1,
       "why": {
        "en": "A raise buys six months of pay difference; a revolving-door seat with undefined scope costs years of compounding. The bundle, not the number.",
        "id": "Kenaikan membeli enam bulan selisih gaji; kursi pintu-berputar dengan lingkup tak terdefinisi mengorbankan bertahun penggandaan. Bundelnya, bukan angkanya."
       }
      }
     ]
    },
    {
     "n": "7.3",
     "title": {
      "en": "Internal Mobility: Moving Within Your Organisation",
      "id": "Mobilitas Internal: Bergerak di Dalam Organisasimu"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The cheapest second move is often inside the building: new scope, new team, new domain — with your trust capital carried over instead of reset. This lesson covers internal mobility's mechanics: finding the openings, running the quiet campaign, and managing your current manager through it.",
      "id": "Langkah kedua termurah sering berada di dalam gedung: lingkup baru, tim baru, ranah baru — dengan modal kepercayaanmu terbawa alih-alih di-reset. Pelajaran ini membahas mekanika mobilitas internal: menemukan bukaan, menjalankan kampanye senyap, dan mengelola manajermu kini sepanjang prosesnya."
     },
     "objectives": [
      {
       "en": "Weigh internal moves against external ones with the reset cost priced.",
       "id": "Menimbang pindah internal terhadap eksternal dengan biaya reset terhitung."
      },
      {
       "en": "Run the internal campaign: visibility, conversations, and formal process in the right order.",
       "id": "Menjalankan kampanye internal: visibilitas, percakapan, dan proses formal dalam urutan benar."
      },
      {
       "en": "Handle the current-manager conversation without burning the bridge you stand on.",
       "id": "Menangani percakapan dengan manajer kini tanpa membakar jembatan tempatmu berdiri."
      }
     ],
     "takeaways": [
      {
       "en": "Internal moves carry your trust capital; external moves reprice it from zero — the difference is often worth more than a raise.",
       "id": "Pindah internal membawa modal kepercayaanmu; eksternal menghargainya ulang dari nol — selisihnya sering lebih berharga dari kenaikan gaji."
      },
      {
       "en": "Internal campaigns run on sponsorship and timing: the receiving team must want you before the posting exists.",
       "id": "Kampanye internal berjalan di atas sponsorship dan waktu: tim penerima harus menginginkanmu sebelum lowongannya ada."
      },
      {
       "en": "Tell your manager at the right moment, in the right frame — growth, not escape.",
       "id": "Beri tahu manajermu pada momen tepat, dalam bingkai tepat — pertumbuhan, bukan pelarian."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "The internal option, priced fairly",
        "id": "Opsi internal, dihargai adil"
       },
       "body": {
        "en": "An internal move keeps what external moves destroy: your reputation samples, your witness network, your knowledge of how things actually work — the invisible half of your effectiveness. It typically trades away the salary jump external moves bring (internal adjustments run smaller) and risks less: a known culture, verifiable managers, and your sponsors still in the building. The evaluation sheet from 7.2 applies unchanged — score the internal opening as a bundle. When the architecture needs new assets but not a new market, internal is usually the efficient move; when the ceiling verdict came from the organisation itself, only external resets the game.",
        "id": "Pindah internal menjaga yang dihancurkan pindah eksternal: sampel reputasimu, jaringan saksimu, pengetahuanmu tentang cara kerja sesungguhnya — separuh tak terlihat dari efektivitasmu. Ia biasanya menukar lompatan gaji yang dibawa pindah eksternal (penyesuaian internal lebih kecil) dan berisiko lebih kecil: budaya dikenal, manajer terverifikasi, dan sponsormu masih di gedung. Lembar evaluasi 7.2 berlaku tak berubah — nilai bukaan internal sebagai bundel. Saat arsitektur butuh aset baru tetapi bukan pasar baru, internal biasanya langkah efisien; saat vonis langit-langit datang dari organisasinya sendiri, hanya eksternal yang me-reset permainan."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "The quiet campaign",
        "id": "Kampanye senyap"
       },
       "body": {
        "en": "Internal moves are decided before postings appear. The sequence: <b>signal availability upward and sideways</b> — in development conversations, name the domain you want to grow into; <b>build proximity to the target team</b> — the cross-functional project, the offered help, the presented artefact their lead attends; <b>let your sponsors know</b> what you are looking for (this is precisely what sponsors are for); and when interest firms up, <b>use the formal process cleanly</b> — internal applications, interviews taken as seriously as external ones. What sinks campaigns: badmouthing your current team as the reason (receiving managers hear how you talk about teams you leave), and campaigns run so secretly that your manager learns from HR — the one version of events you cannot repair.",
        "id": "Pindah internal diputuskan sebelum lowongan muncul. Urutannya: <b>sinyalkan ketersediaan ke atas dan ke samping</b> — di percakapan pengembangan, sebutkan ranah yang ingin kamu tumbuh ke dalamnya; <b>bangun kedekatan dengan tim target</b> — proyek lintas fungsi, bantuan yang ditawarkan, artefak yang dipresentasikan dan dihadiri pemimpin mereka; <b>beri tahu sponsormu</b> apa yang kamu cari (persis untuk inilah sponsor ada); dan saat minat mengeras, <b>pakai proses formal dengan bersih</b> — lamaran internal, wawancara diseriusi seperti eksternal. Yang menenggelamkan kampanye: menjelekkan tim kini sebagai alasan (manajer penerima mendengar caramu bicara tentang tim yang kamu tinggalkan), dan kampanye yang begitu rahasia sampai manajermu tahu dari HR — satu-satunya versi kejadian yang tak bisa kamu perbaiki."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "The manager conversation",
        "id": "Percakapan dengan manajer"
       },
       "body": {
        "en": "Timing: after your interest is real and roughly reciprocated, before any formal application — your manager must never learn second-hand. Frame: growth toward your architecture, not escape from their team — “I want to build pricing-analytics depth, and the commercial team is where that lives; I'd like to explore it, and I want to handle it well for our team.” Offer the operational goodwill that makes yes easy: a real transition period, documentation, handover of your systems. Most managers, treated this way, convert into references and even advocates — they know blocked people leave buildings entirely. If your organisation's culture genuinely punishes mobility signals, that is architecture-level information about the organisation, and the external path inherits the case.",
        "id": "Waktu: setelah minatmu nyata dan kurang lebih berbalas, sebelum lamaran formal apa pun — manajermu tak boleh tahu dari tangan kedua. Bingkai: pertumbuhan menuju arsitekturmu, bukan pelarian dari tim mereka — “Saya ingin membangun kedalaman analitik harga, dan tim komersial tempatnya; saya ingin menjajakinya, dan ingin menanganinya dengan baik untuk tim kita.” Tawarkan niat baik operasional yang membuat ya menjadi mudah: masa transisi sungguhan, dokumentasi, serah terima sistemmu. Kebanyakan manajer, diperlakukan begini, berubah menjadi referensi bahkan pembela — mereka tahu orang yang dihalangi akan meninggalkan gedung sepenuhnya. Jika budaya organisasimu sungguh menghukum sinyal mobilitas, itu informasi level arsitektur tentang organisasinya, dan jalur eksternal mewarisi kasusnya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "You want the commercial team's analyst opening, posting expected next month. Your manager knows nothing. First move?",
        "id": "Kamu menginginkan lowongan analis tim komersial, tayang bulan depan. Manajermu belum tahu apa-apa. Langkah pertama?"
       },
       "options": [
        {
         "en": "Apply the moment it posts — formal process protects you",
         "id": "Lamar begitu tayang — proses formal melindungimu"
        },
        {
         "en": "Before the posting: confirm the mutual interest with the commercial lead, then tell your manager in the growth frame — never let them learn from HR",
         "id": "Sebelum tayang: pastikan minat timbal balik dengan pemimpin komersial, lalu beri tahu manajermu dalam bingkai pertumbuhan — jangan pernah biarkan mereka tahu dari HR"
        },
        {
         "en": "Ask HR to keep your application confidential from your manager",
         "id": "Minta HR merahasiakan lamaranmu dari manajermu"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Internal moves run on relationships that persist after the move. The sequence — interest confirmed, manager told well, then formal process — protects all of them.",
        "id": "Pindah internal berjalan di atas hubungan yang bertahan setelah pindah. Urutannya — minat dipastikan, manajer diberi tahu baik-baik, lalu proses formal — melindungi semuanya."
       }
      }
     ]
    },
    {
     "n": "7.4",
     "title": {
      "en": "Executing the External Transition",
      "id": "Melaksanakan Transisi Eksternal"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "visual",
     "placeholder": false,
     "overview": {
      "en": "External transitions are judged twice: by where you land, and by how you left. Explore the four stations of a clean exit — the decision confirmed, the resignation done right, the notice period as reputation showcase, and the alumni bridge that pays for decades.",
      "id": "Transisi eksternal dinilai dua kali: dari tempatmu mendarat, dan dari caramu pergi. Jelajahi empat stasiun kepergian bersih — keputusan yang dikonfirmasi, pengunduran diri yang benar, masa pemberitahuan sebagai etalase reputasi, dan jembatan alumni yang membayar berdekade."
     },
     "objectives": [
      {
       "en": "Confirm the decision through the architecture before any irreversible step.",
       "id": "Mengonfirmasi keputusan lewat arsitektur sebelum langkah tak terbalikkan."
      },
      {
       "en": "Execute the resignation conversation and counteroffer response professionally.",
       "id": "Mengeksekusi percakapan pengunduran diri dan respons tawaran balik secara profesional."
      },
      {
       "en": "Run the notice period as your final — and most remembered — performance.",
       "id": "Menjalankan masa pemberitahuan sebagai penampilan terakhirmu — dan yang paling diingat."
      }
     ],
     "takeaways": [
      {
       "en": "Resign to your manager first, in person, with a written offer accepted — order matters enormously.",
       "id": "Mengundurkan dirilah ke manajermu dulu, langsung, dengan tawaran tertulis diterima — urutan sangat penting."
      },
      {
       "en": "Counteroffers answer the question you asked with money — which was rarely the question.",
       "id": "Tawaran balik menjawab pertanyaanmu dengan uang — padahal itu jarang pertanyaannya."
      },
      {
       "en": "The last month is the story your former colleagues will tell about you forever.",
       "id": "Bulan terakhir adalah kisah yang akan diceritakan mantan kolegamu tentangmu selamanya."
      }
     ],
     "hotspots": [
      {
       "x": 22,
       "y": 26,
       "h": {
        "en": "Station 1 · Confirm",
        "id": "Stasiun 1 · Konfirmasi"
       },
       "body": {
        "en": "Before resigning: the offer is written and signed-off, start date agreed, and the move has passed the architecture test in a calm week (7.1's false-trigger check run honestly). Notice terms read, financials bridged (final salary, unused leave, any bonus timing — leaving three weeks before a vesting date is a decision to make knowingly, not discover later). Only then does anything become irreversible. The station exists because resignations announced on verbal offers occasionally meet rescinded offers — a survivable event with a signed contract, a catastrophe without one.",
        "id": "Sebelum mundur: tawaran tertulis dan disahkan, tanggal mulai disepakati, dan pindahnya telah lolos uji arsitektur di minggu tenang (pemeriksaan pemicu-palsu 7.1 dijalankan jujur). Ketentuan pemberitahuan dibaca, keuangan dijembatani (gaji akhir, cuti tak terpakai, waktu bonus — pergi tiga minggu sebelum tanggal vesting adalah keputusan yang diambil sadar, bukan ditemukan belakangan). Baru setelah itu ada yang menjadi tak terbalikkan. Stasiun ini ada karena pengunduran diri yang diumumkan atas tawaran lisan sesekali bertemu tawaran yang ditarik — peristiwa yang bisa dilalui dengan kontrak ditandatangani, bencana tanpa itu."
       }
      },
      {
       "x": 72,
       "y": 24,
       "h": {
        "en": "Station 2 · Resign",
        "id": "Stasiun 2 · Mundur"
       },
       "body": {
        "en": "Your manager hears first, live (in person or video), before any colleague, before any announcement: “I've accepted a role at [company], starting [date]. I wanted you to hear it from me first, and I want to make the transition excellent.” Short, warm, decided. The letter follows the conversation as paperwork. No grievance airing — the exit interview is not therapy and the industry has long ears. The counteroffer, if it comes: hear it respectfully, take a day, and remember why you ran the process — if money was the only gap, the architecture would have said so before you interviewed. Accepted counteroffers famously precede departures anyway within the year: the move's reasons rarely dissolve in a raise.",
        "id": "Manajermu mendengar pertama, langsung (tatap muka atau video), sebelum kolega mana pun, sebelum pengumuman apa pun: “Saya menerima peran di [perusahaan], mulai [tanggal]. Saya ingin Bapak/Ibu mendengarnya dari saya lebih dulu, dan saya ingin membuat transisinya unggul.” Singkat, hangat, mantap. Surat menyusul percakapan sebagai administrasi. Tanpa curahan keluhan — wawancara keluar bukan terapi dan industri bertelinga panjang. Tawaran balik, jika datang: dengarkan hormat, ambil sehari, dan ingat mengapa kamu menjalankan prosesnya — jika uang satu-satunya celah, arsitektur akan mengatakannya sebelum kamu wawancara. Tawaran balik yang diterima toh terkenal mendahului kepergian dalam setahun: alasan pindah jarang larut dalam kenaikan gaji."
       }
      },
      {
       "x": 25,
       "y": 72,
       "h": {
        "en": "Station 3 · The showcase month",
        "id": "Stasiun 3 · Bulan etalase"
       },
       "body": {
        "en": "The notice period inverts incentives: you owe the future nothing here, which is exactly why behaviour now is read as character revealed. Run it as a project: a handover document that needs no author present (systems, statuses, contacts, passwords transferred properly, the things only you know written down); successors introduced and warm-handed; loose ends closed or explicitly assigned; energy sustained to the last day. Colleagues forget years of solid work faster than they forget a checked-out final month — and remember a superb handover for just as long. This is the cheapest reputation purchase available in professional life.",
        "id": "Masa pemberitahuan membalik insentif: kamu tak berutang apa pun pada masa depan di sini, justru karena itulah perilaku kini dibaca sebagai karakter yang tersingkap. Jalankan sebagai proyek: dokumen serah terima yang tak butuh kehadiran penulisnya (sistem, status, kontak, kata sandi dipindahkan benar, hal yang hanya kamu tahu dituliskan); penerus diperkenalkan dan diserahterimakan hangat; ujung longgar ditutup atau ditugaskan eksplisit; energi dijaga sampai hari terakhir. Kolega melupakan bertahun kerja solid lebih cepat daripada bulan terakhir yang setengah hati — dan mengingat serah terima hebat sama lamanya. Inilah pembelian reputasi termurah yang tersedia dalam kehidupan profesional."
       }
      },
      {
       "x": 74,
       "y": 70,
       "h": {
        "en": "Station 4 · The alumni bridge",
        "id": "Stasiun 4 · Jembatan alumni"
       },
       "body": {
        "en": "Former colleagues become your industry: future clients, referees, hiring managers, co-founders. Before leaving: personal goodbyes to your circle-adjacent people with genuine thanks and current contact details. After leaving: the occasional check-in, congratulations on their wins, help freely given when asked — the 6.4 maintenance rhythm extended to alumni. Keep every confidence and never trash the old employer publicly; your new colleagues calibrate how you will one day speak of them. Done over years, the alumni bridge quietly becomes the most valuable network you own — senior people consistently report their biggest breaks arrived through someone they once worked beside.",
        "id": "Mantan kolega menjadi industrimu: klien masa depan, pemberi referensi, manajer perekrut, rekan pendiri. Sebelum pergi: pamitan personal ke orang-orang dekat lingkaranmu dengan terima kasih tulus dan kontak terkini. Setelah pergi: sapaan sesekali, ucapan selamat atas kemenangan mereka, bantuan yang diberikan lepas saat diminta — irama perawatan 6.4 diperluas ke alumni. Jaga semua rahasia dan jangan pernah menjelekkan pemberi kerja lama di publik; kolega barumu mengalibrasi caramu kelak akan membicarakan mereka. Dijalani bertahun-tahun, jembatan alumni diam-diam menjadi jaringan paling berharga milikmu — orang-orang senior konsisten melaporkan terobosan terbesar mereka datang lewat seseorang yang pernah bekerja di samping mereka."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Your resignation triggers a counteroffer 10% above your new offer. The lesson's frame for deciding?",
        "id": "Pengunduran dirimu memicu tawaran balik 10% di atas tawaran barumu. Bingkai keputusan menurut pelajaran ini?"
       },
       "options": [
        {
         "en": "Take it — highest number wins",
         "id": "Ambil — angka tertinggi menang"
        },
        {
         "en": "Revisit why you ran the move: if the trigger was yield, ceiling or architecture, money answers a question you never asked",
         "id": "Kunjungi lagi alasanmu menjalankan pindah: jika pemicunya hasil, langit-langit, atau arsitektur, uang menjawab pertanyaan yang tak pernah kamu ajukan"
        },
        {
         "en": "Use it to renegotiate the new offer upward",
         "id": "Pakai untuk menegosiasi ulang tawaran baru ke atas"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Counteroffers reprice the salary line of a bundle you rejected for other lines. The architecture that justified the move usually still stands.",
        "id": "Tawaran balik menghargai ulang baris gaji dari bundel yang kamu tolak karena baris lain. Arsitektur yang membenarkan pindah biasanya masih berdiri."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/m/06-horizon.jpg",
   "heroPos": "center 40%"
  },
  {
   "num": 8,
   "title": {
    "en": "Early Career Financial Intelligence",
    "id": "Kecerdasan Keuangan Awal Karier"
   },
   "overview": {
    "en": "Module 8 of The Route focuses on early career financial intelligence. Work through the lessons in order — each builds on the last.",
    "id": "Modul 8 dari The Route berfokus pada Kecerdasan Keuangan Awal Karier. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply early career financial intelligence to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Kecerdasan Keuangan Awal Karier pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "8.1",
     "title": {
      "en": "Your Total Compensation and How to Benchmark It",
      "id": "Total Kompensasimu dan Cara Membandingkannya"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "You cannot negotiate, compare or plan around a number you do not understand. This lesson decomposes total compensation — everything your work actually pays you — and builds the benchmarking habit that keeps your price calibrated to the market rather than to habit.",
      "id": "Kamu tak bisa menegosiasikan, membandingkan, atau merencanakan angka yang tak kamu pahami. Pelajaran ini mengurai kompensasi total — semua yang sungguh dibayarkan pekerjaanmu — dan membangun kebiasaan pembandingan yang menjaga hargamu terkalibrasi ke pasar alih-alih ke kebiasaan."
     },
     "objectives": [
      {
       "en": "Decompose an offer or payslip into its full compensation stack.",
       "id": "Mengurai tawaran atau slip gaji menjadi tumpukan kompensasi penuhnya."
      },
      {
       "en": "Benchmark your compensation against market data honestly.",
       "id": "Membandingkan kompensasimu dengan data pasar secara jujur."
      },
      {
       "en": "Read the growth curve — the variable that outweighs the entry number.",
       "id": "Membaca kurva pertumbuhan — variabel yang mengalahkan angka awal."
      }
     ],
     "takeaways": [
      {
       "en": "Total compensation is base + variable + benefits + growth curve; comparing bases alone misprices offers routinely.",
       "id": "Kompensasi total adalah pokok + variabel + tunjangan + kurva pertumbuhan; membandingkan pokok saja rutin salah menghargai tawaran."
      },
      {
       "en": "Benchmark from multiple sources, adjusted for stage and city — single anecdotes mislead in both directions.",
       "id": "Bandingkan dari banyak sumber, disesuaikan tahap dan kota — anekdot tunggal menyesatkan dua arah."
      },
      {
       "en": "A 4% versus 10% annual growth curve dwarfs a 15% starting difference within five years.",
       "id": "Kurva pertumbuhan tahunan 4% versus 10% mengerdilkan selisih awal 15% dalam lima tahun."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "The stack",
        "id": "Tumpukannya"
       },
       "body": {
        "en": "<b>Base salary</b> — the guaranteed line, and in Indonesia typically the reference for THR (the mandatory religious-holiday allowance) and severance formulas. <b>Variable</b> — bonuses and incentives: ask what the realistic payout has been, not the theoretical maximum. <b>Benefits with cash value</b> — health coverage beyond BPJS, retirement contributions beyond the mandatory, meal/transport allowances, phone plans, education budgets: price them, they routinely add 10–20%. <b>Equity or options</b> — at startups, value them soberly: illiquid, probabilistic, and worth asking hard questions about (vesting, dilution, what happens on departure). <b>The growth curve</b> — the increase policy, promotion increments, and how the company has actually behaved: the stack's most underweighted line.",
        "id": "<b>Gaji pokok</b> — baris terjamin, dan di Indonesia biasanya rujukan untuk THR serta rumus pesangon. <b>Variabel</b> — bonus dan insentif: tanyakan realisasi pembayaran yang nyata, bukan maksimum teoretis. <b>Tunjangan bernilai uang</b> — jaminan kesehatan di atas BPJS, iuran pensiun di atas wajib, tunjangan makan/transport, paket telepon, anggaran pendidikan: hargai, rutin menambah 10–20%. <b>Ekuitas atau opsi</b> — di startup, nilai dengan bening: tak likuid, probabilistik, dan layak ditanyai keras (vesting, dilusi, apa yang terjadi saat keluar). <b>Kurva pertumbuhan</b> — kebijakan kenaikan, kenaikan promosi, dan perilaku nyata perusahaan: baris paling kurang dibobot di tumpukan."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Benchmarking honestly",
        "id": "Membandingkan dengan jujur"
       },
       "body": {
        "en": "Triangulate: salary surveys and job-portal ranges for your role and city; recruiter conversations (they quote ranges freely — it is their inventory); trusted peers via ranges rather than numbers (“is 8–10 the right zone for this?” travels better than “what do you earn?”); and posted vacancy bands where available. Adjust for company stage — corporates pay steadier, startups pay more variably with equity lottery tickets — and for city cost differentials. Update the reading annually into the Route Planner. Two calibration errors to avoid: anchoring on one outlier friend, and anchoring on your own current salary — the market does not know or care what you currently earn.",
        "id": "Triangulasikan: survei gaji dan rentang portal kerja untuk peran dan kotamu; percakapan perekrut (mereka menyebut rentang dengan bebas — itu inventaris mereka); rekan tepercaya lewat rentang alih-alih angka (“apakah 8–10 zona yang tepat untuk ini?” berjalan lebih baik daripada “gajimu berapa?”); dan pita gaji lowongan yang dipublikasikan bila ada. Sesuaikan dengan tahap perusahaan — korporat membayar lebih stabil, startup lebih variabel dengan tiket lotre ekuitas — dan selisih biaya kota. Perbarui pembacaan tahunan ke Route Planner. Dua kesalahan kalibrasi yang dihindari: berjangkar pada satu teman pencilan, dan berjangkar pada gajimu sendiri kini — pasar tak tahu dan tak peduli berapa gajimu sekarang."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The curve beats the number",
        "id": "Kurva mengalahkan angka"
       },
       "body": {
        "en": "Run the arithmetic once and it changes how you read offers forever: Rp 8m growing 10% yearly passes Rp 9.2m growing 4% within four years, and the gap then widens permanently. So interrogate curves: what were actual increase percentages the last two years? What increment does promotion carry? Do internal moves reprice? How does the company handle inflation years? The same lens prices skill investments: the certification or domain that moves you to a faster curve outearns a one-time raise. This is Module 1's compounding logic wearing rupiah — the reason career capital and financial capital are the same course.",
        "id": "Jalankan aritmetikanya sekali dan ia mengubah caramu membaca tawaran selamanya: Rp 8 jt yang tumbuh 10% per tahun melewati Rp 9,2 jt yang tumbuh 4% dalam empat tahun, dan celahnya kemudian melebar permanen. Maka interogasilah kurva: berapa persen kenaikan nyata dua tahun terakhir? Berapa kenaikan yang dibawa promosi? Apakah pindah internal menghargai ulang? Bagaimana perusahaan menangani tahun inflasi? Lensa yang sama menghargai investasi keterampilan: sertifikasi atau ranah yang memindahkanmu ke kurva lebih cepat mengalahkan kenaikan sekali. Ini logika penggandaan Modul 1 berbaju rupiah — alasan modal karier dan modal finansial adalah kursus yang sama."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Offer A: Rp 9m base, 4% typical annual growth. Offer B: Rp 8m base, 10% growth, benefits worth ~Rp 800k/month more. The stack read?",
        "id": "Tawaran A: pokok Rp 9 jt, pertumbuhan tahunan lazim 4%. Tawaran B: pokok Rp 8 jt, pertumbuhan 10%, tunjangan bernilai ~Rp 800 rb/bulan lebih. Bacaan tumpukannya?"
       },
       "options": [
        {
         "en": "A — the base is 12.5% higher",
         "id": "A — pokoknya 12,5% lebih tinggi"
        },
        {
         "en": "B — benefits nearly close today's gap and the curve overtakes within ~3 years, then compounds",
         "id": "B — tunjangan hampir menutup celah hari ini dan kurvanya menyalip dalam ~3 tahun, lalu menggandakan diri"
        },
        {
         "en": "They are equivalent — take the bigger brand",
         "id": "Setara — ambil merek lebih besar"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Stack plus curve, not base: B's effective gap today is small and its growth compounds past A permanently — assuming the curves are verified, which is the interrogation's job.",
        "id": "Tumpukan plus kurva, bukan pokok: celah efektif B hari ini kecil dan pertumbuhannya melewati A permanen — dengan asumsi kurva terverifikasi, itulah tugas interogasi."
       }
      }
     ],
     "quote": {
      "en": "You cannot negotiate a number you do not understand.",
      "id": "Kamu tak bisa menegosiasikan angka yang tak kamu pahami."
     },
     "diagram": {
      "type": "bars",
      "exhibit": {
       "en": "Exhibit 2: The curve beats the number — the lesson's own worked example, year by year.",
       "id": "Peraga 2: Kurva mengalahkan angka — contoh hitung pelajaran ini, tahun demi tahun."
      },
      "title": {
       "en": "Rp 8m at 10% growth vs Rp 9.2m at 4% (illustrative arithmetic)",
       "id": "Rp 8 jt tumbuh 10% vs Rp 9,2 jt tumbuh 4% (aritmetika ilustratif)"
      },
      "items": [
       {
        "h": {
         "en": "Year 0 — offer A (9.2m, 4%)",
         "id": "Tahun 0 — tawaran A (9,2 jt, 4%)"
        },
        "v": 79,
        "label": "9.2"
       },
       {
        "h": {
         "en": "Year 0 — offer B (8.0m, 10%)",
         "id": "Tahun 0 — tawaran B (8,0 jt, 10%)"
        },
        "v": 68,
        "label": "8.0"
       },
       {
        "h": {
         "en": "Year 2 — offer A",
         "id": "Tahun 2 — tawaran A"
        },
        "v": 85,
        "label": "9.95"
       },
       {
        "h": {
         "en": "Year 2 — offer B",
         "id": "Tahun 2 — tawaran B"
        },
        "v": 83,
        "label": "9.68"
       },
       {
        "h": {
         "en": "Year 4 — offer A",
         "id": "Tahun 4 — tawaran A"
        },
        "v": 92,
        "label": "10.76"
       },
       {
        "h": {
         "en": "Year 4 — offer B",
         "id": "Tahun 4 — tawaran B"
        },
        "v": 100,
        "label": "11.71"
       }
      ],
      "note": {
       "en": "Bars are proportional to the computed salary in Rp millions. By year four the faster curve has passed the higher entry number — and the gap widens permanently from there.",
       "id": "Batang proporsional terhadap gaji terhitung dalam juta rupiah. Pada tahun keempat kurva yang lebih cepat telah melewati angka awal yang lebih tinggi — dan celahnya melebar permanen sejak itu."
      }
     }
    },
    {
     "n": "8.2",
     "title": {
      "en": "Building a Savings Discipline on Any Income",
      "id": "Membangun Disiplin Menabung pada Penghasilan Apa Pun"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The first salary arrives and lifestyle arrives with it — unless a system arrives first. This lesson installs the early-career money system: pay-yourself-first automation, the emergency fund that buys career courage, and the lifestyle-inflation firewall.",
      "id": "Gaji pertama tiba dan gaya hidup ikut tiba — kecuali sistemnya tiba lebih dulu. Pelajaran ini memasang sistem uang awal karier: otomasi bayar-dirimu-dulu, dana darurat yang membeli keberanian karier, dan tembok api inflasi gaya hidup."
     },
     "objectives": [
      {
       "en": "Automate saving before spending is possible: the transfer-on-payday design.",
       "id": "Mengotomatiskan menabung sebelum belanja mungkin: rancangan transfer-saat-gajian."
      },
      {
       "en": "Build the emergency fund sized to your actual monthly needs.",
       "id": "Membangun dana darurat berukuran kebutuhan bulananmu yang nyata."
      },
      {
       "en": "Contain lifestyle inflation with the raise-split rule.",
       "id": "Menahan inflasi gaya hidup dengan aturan pembagian kenaikan."
      }
     ],
     "takeaways": [
      {
       "en": "Willpower budgets fail; architecture budgets work — move the money before you can see it.",
       "id": "Anggaran tekad gagal; anggaran arsitektur bekerja — pindahkan uang sebelum kamu bisa melihatnya."
      },
      {
       "en": "Three to six months of expenses in reserve converts career decisions from desperate to deliberate.",
       "id": "Tiga sampai enam bulan pengeluaran sebagai cadangan mengubah keputusan karier dari putus asa menjadi terencana."
      },
      {
       "en": "Split every raise on arrival — half to the future, half to the present — and inflation never owns the curve.",
       "id": "Bagi tiap kenaikan saat tiba — separuh ke masa depan, separuh ke masa kini — dan inflasi tak pernah memiliki kurvanya."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "Architecture over willpower",
        "id": "Arsitektur di atas tekad"
       },
       "body": {
        "en": "The design: on payday, an automatic transfer moves your savings rate — start at 10–20%, any number beats zero — into an account you do not carry a card for. What remains is genuinely spendable, no tracking apps or guilt required; the decision was made once, by the calm version of you, and executes monthly without consulting the tired version. This is Map 2.4's important-not-urgent work logic applied to money: the important-not-urgent transfer scheduled before urgencies fill the month. Increase the rate with each raise (below) and revisit the number annually — the system flexes, the existence of the system does not.",
        "id": "Rancangannya: saat gajian, transfer otomatis memindahkan tingkat tabunganmu — mulai 10–20%, angka berapa pun mengalahkan nol — ke rekening yang kartunya tak kamu bawa. Sisanya sungguh boleh dibelanjakan, tanpa aplikasi pelacak atau rasa bersalah; keputusannya dibuat sekali, oleh versi dirimu yang tenang, dan tereksekusi bulanan tanpa berkonsultasi pada versi yang lelah. Ini logika kerja penting–tidak mendesak Map 2.4 diterapkan pada uang: transfer penting-tak-mendesak dijadwalkan sebelum kemendesakan mengisi bulan. Naikkan tingkatnya di tiap kenaikan (di bawah) dan tinjau angkanya tahunan — sistemnya melentur, keberadaan sistemnya tidak."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "The emergency fund is a career instrument",
        "id": "Dana darurat adalah instrumen karier"
       },
       "body": {
        "en": "Target three to six months of real monthly expenses (not salary), parked in an instantly accessible account — a separate savings account or money-market fund, not investments that can be down 30% the month you need them. Its career function outweighs its financial one: a funded runway is what lets you decline the toxic role, negotiate without desperation leaking into your voice, survive a probation failure or layoff without grabbing the first offer, and take the two-lens decision (Pack 5.4) on merit instead of fear. Build it before any investing: the fund is the foundation the risk-taking stands on.",
        "id": "Targetkan tiga sampai enam bulan pengeluaran bulanan nyata (bukan gaji), diparkir di rekening yang bisa diakses seketika — rekening tabungan terpisah atau reksa dana pasar uang, bukan investasi yang bisa turun 30% di bulan kamu membutuhkannya. Fungsi kariernya melampaui fungsi finansialnya: landasan pacu yang terdanai adalah yang membuatmu bisa menolak peran beracun, bernegosiasi tanpa keputusasaan bocor ke suaramu, bertahan dari kegagalan probasi atau PHK tanpa menyambar tawaran pertama, dan mengambil keputusan dua lensa (Pack 5.4) berdasar kelayakan alih-alih ketakutan. Bangun sebelum investasi apa pun: dana ini fondasi tempat pengambilan risiko berdiri."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "The raise-split firewall",
        "id": "Tembok api pembagian kenaikan"
       },
       "body": {
        "en": "Lifestyle inflation is silent: each raise absorbed into slightly nicer everything, until the doubled salary supports zero additional saving — and, more dangerously, until the lifestyle requires the salary, locking you into roles the architecture would otherwise leave. The firewall is one rule applied within a week of any raise: half the increase joins the automatic transfer, half upgrades your life guilt-free. You feel every raise and the savings rate ratchets automatically. The same rule tames the THR and bonus cycle: a fixed split decided in advance — some to the future, some to obligations and generosity, some to joy — beats twelve Decembers of improvisation.",
        "id": "Inflasi gaya hidup itu senyap: tiap kenaikan terserap ke segala hal yang sedikit lebih bagus, sampai gaji dua kali lipat menopang nol tabungan tambahan — dan, lebih berbahaya, sampai gaya hidup membutuhkan gajinya, menguncimu di peran yang seharusnya ditinggalkan arsitektur. Tembok apinya satu aturan diterapkan dalam seminggu setelah kenaikan apa pun: separuh kenaikan bergabung ke transfer otomatis, separuh meningkatkan hidupmu tanpa rasa bersalah. Kamu merasakan tiap kenaikan dan tingkat tabungan naik otomatis. Aturan sama menjinakkan siklus THR dan bonus: pembagian tetap yang diputuskan di muka — sebagian ke masa depan, sebagian ke kewajiban dan kemurahan hati, sebagian ke kegembiraan — mengalahkan dua belas Desember improvisasi."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does the emergency fund precede all investing in this course's ordering?",
        "id": "Mengapa dana darurat mendahului semua investasi dalam urutan kursus ini?"
       },
       "options": [
        {
         "en": "Because investments are only for the wealthy",
         "id": "Karena investasi hanya untuk orang kaya"
        },
        {
         "en": "Because it is simultaneously the buffer that keeps investments untouched in bad months and the runway that keeps career decisions deliberate",
         "id": "Karena ia sekaligus penyangga yang menjaga investasi tak tersentuh di bulan buruk dan landasan pacu yang menjaga keputusan karier tetap terencana"
        },
        {
         "en": "Because banks require it before opening investment accounts",
         "id": "Karena bank mewajibkannya sebelum membuka rekening investasi"
        }
       ],
       "correct": 1,
       "why": {
        "en": "An unfunded investor sells at the bottom when the motor breaks; an unfunded professional accepts bad roles from fear. The fund fixes both failure modes at once.",
        "id": "Investor tanpa dana menjual di dasar saat motor rusak; profesional tanpa dana menerima peran buruk karena takut. Dana ini memperbaiki kedua mode gagal sekaligus."
       }
      }
     ],
     "tool": {
      "id": "field",
      "mode": "money",
      "title": {
       "en": "Run your own numbers",
       "id": "Hitung angkamu sendiri"
      },
      "body": {
       "en": "Runway and compound-growth arithmetic on your income, expenses and horizon — formulas on screen, assumptions yours, computed on this device.",
       "id": "Aritmetika landasan pacu dan bunga majemuk pada pendapatan, pengeluaran, dan horizonmu — rumus di layar, asumsi milikmu, dihitung di perangkat ini."
      },
      "cta": {
       "en": "Open the money instruments →",
       "id": "Buka instrumen uang →"
      }
     }
    },
    {
     "n": "8.3",
     "title": {
      "en": "Investment Foundations for Your Market",
      "id": "Fondasi Investasi untuk Pasarmu"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "With the fund built, surplus needs a home that outruns inflation. This lesson covers investing foundations for an Indonesian early-career professional: the instruments in ascending risk, the cost-and-diversification principles that survive every market, and the scam-detection reflexes that protect everything else.",
      "id": "Dengan dana terbangun, surplus butuh rumah yang mengalahkan inflasi. Pelajaran ini membahas fondasi investasi untuk profesional awal karier Indonesia: instrumen dalam risiko menaik, prinsip biaya-dan-diversifikasi yang bertahan di semua pasar, dan refleks deteksi penipuan yang melindungi semuanya."
     },
     "objectives": [
      {
       "en": "Map the instrument ladder: deposits, money market, bonds, index funds, equities.",
       "id": "Memetakan tangga instrumen: deposito, pasar uang, obligasi, reksa dana indeks, saham."
      },
      {
       "en": "Apply the three survivor principles: costs, diversification, time in market.",
       "id": "Menerapkan tiga prinsip penyintas: biaya, diversifikasi, waktu di pasar."
      },
      {
       "en": "Detect the scam patterns that specifically hunt young professionals.",
       "id": "Mendeteksi pola penipuan yang khusus memburu profesional muda."
      }
     ],
     "takeaways": [
      {
       "en": "Start boring: regular amounts into diversified low-cost instruments beat exciting bets on any honest timescale.",
       "id": "Mulailah membosankan: nominal rutin ke instrumen terdiversifikasi berbiaya rendah mengalahkan taruhan seru pada skala waktu jujur mana pun."
      },
      {
       "en": "Costs compound against you exactly as returns compound for you — read every fee.",
       "id": "Biaya menggandakan diri melawanmu persis seperti imbal hasil menggandakan diri untukmu — baca setiap biaya."
      },
      {
       "en": "Guaranteed high returns are the signature of fraud, not opportunity — walk away every time.",
       "id": "Imbal hasil tinggi terjamin adalah tanda tangan penipuan, bukan peluang — pergilah setiap kali."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "The instrument ladder",
        "id": "Tangga instrumen"
       },
       "body": {
        "en": "Ascending risk and expected return: <b>deposits</b> (bank time deposits — LPS-insured within limits, barely beat inflation); <b>money-market funds</b> (reksa dana pasar uang — liquid, low volatility, a common emergency-fund home); <b>government retail bonds</b> (ORI/SBR/sukuk series — state-backed, coupons above deposit rates, sold in retail denominations); <b>index and mixed funds</b> (reksa dana indeks/campuran — diversified market exposure in one purchase, the workhorse of long-horizon saving); <b>individual equities</b> (single-company risk demanding real research time — earn the right by learning first, sized small). Regulated platforms make all of these accessible from a phone with small minimums; regulation to verify: OJK-registered products and platforms, always.",
        "id": "Risiko dan ekspektasi imbal menaik: <b>deposito</b> (deposito bank — dijamin LPS dalam batas, nyaris hanya mengimbangi inflasi); <b>reksa dana pasar uang</b> (likuid, volatilitas rendah, rumah lazim dana darurat); <b>obligasi ritel negara</b> (seri ORI/SBR/sukuk — dijamin negara, kupon di atas bunga deposito, dijual dalam denominasi ritel); <b>reksa dana indeks dan campuran</b> (eksposur pasar terdiversifikasi dalam satu pembelian, kuda beban tabungan horizon panjang); <b>saham individual</b> (risiko satu-perusahaan yang menuntut waktu riset nyata — peroleh haknya dengan belajar dulu, berukuran kecil). Platform teregulasi membuat semuanya terjangkau dari ponsel dengan minimum kecil; regulasi yang diverifikasi: produk dan platform terdaftar OJK, selalu."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "The survivor principles",
        "id": "Prinsip penyintas"
       },
       "body": {
        "en": "<b>Costs:</b> a 2% annual fee consumes roughly a third of a portfolio's growth over 25 years; compare expense ratios and platform fees before performance claims, which do not persist the way costs do. <b>Diversification:</b> across companies (funds do this by construction), across time (fixed monthly buying — averaging — removes the timing decision you cannot win), and eventually across asset classes. <b>Time in market:</b> the compounding curve rewards years invested, not entries timed; the investor who starts at 23 with modest amounts beats the one who waits at 30 for the perfect moment. Corollary: money needed within three years does not belong in volatile instruments at all.",
        "id": "<b>Biaya:</b> biaya tahunan 2% memakan kira-kira sepertiga pertumbuhan portofolio dalam 25 tahun; bandingkan rasio biaya dan biaya platform sebelum klaim kinerja, yang tak bertahan seperti biaya bertahan. <b>Diversifikasi:</b> lintas perusahaan (reksa dana melakukannya sejak konstruksi), lintas waktu (pembelian bulanan tetap — merata-ratakan — menghapus keputusan waktu yang tak bisa kamu menangkan), dan akhirnya lintas kelas aset. <b>Waktu di pasar:</b> kurva penggandaan mengganjar tahun-tahun berinvestasi, bukan momen masuk yang ditepatkan; investor yang mulai di 23 dengan nominal sederhana mengalahkan yang menunggu momen sempurna di 30. Korolari: uang yang dibutuhkan dalam tiga tahun sama sekali bukan tempatnya di instrumen bergejolak."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "The scam radar",
        "id": "Radar penipuan"
       },
       "body": {
        "en": "Young professionals with first salaries are a targeted demographic. The signatures, any one sufficient to walk away: <b>guaranteed returns above deposit rates</b> (real investments cannot guarantee — “pasti untung” is the confession); <b>recruitment rewards</b> (yield produced by new members is a pyramid, whatever product decorates it); <b>pressure and secrecy</b> (“slots close tonight”, “don't tell the bank why you're transferring”); <b>unverifiable custody</b> (your money in someone's personal account, a platform absent from OJK's lists); <b>authority costumes</b> (fake endorsements, screenshot profits, rented luxury). The defence is procedural, not intellectual: verify registration, refuse urgency, and remember that every era's scam wears that era's most exciting asset as a mask.",
        "id": "Profesional muda bergaji pertama adalah demografi yang ditarget. Tanda tangannya, satu saja cukup untuk pergi: <b>imbal hasil terjamin di atas bunga deposito</b> (investasi nyata tak bisa menjamin — “pasti untung” adalah pengakuannya); <b>imbalan perekrutan</b> (hasil yang diproduksi anggota baru adalah piramida, apa pun produk penghiasnya); <b>tekanan dan kerahasiaan</b> (“slot tutup malam ini”, “jangan beri tahu bank alasan transfer”); <b>kustodi tak terverifikasi</b> (uangmu di rekening pribadi seseorang, platform absen dari daftar OJK); <b>kostum otoritas</b> (endorse palsu, tangkapan layar profit, kemewahan sewaan). Pertahanannya prosedural, bukan intelektual: verifikasi pendaftaran, tolak urgensi, dan ingat penipuan tiap era memakai aset paling seru era itu sebagai topeng."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A colleague's investment group promises 5% monthly, “guaranteed, backed by crypto arbitrage”, with bonuses for bringing friends. The radar says?",
        "id": "Grup investasi kolega menjanjikan 5% per bulan, “dijamin, didukung arbitrase kripto”, dengan bonus mengajak teman. Kata radarnya?"
       },
       "options": [
        {
         "en": "Investigate the arbitrage strategy's details first",
         "id": "Selidiki detail strategi arbitrasenya dulu"
        },
        {
         "en": "Two signatures already present — guaranteed returns and recruitment rewards — walk away regardless of the strategy story",
         "id": "Dua tanda tangan sudah hadir — imbal terjamin dan imbalan perekrutan — pergilah apa pun cerita strateginya"
        },
        {
         "en": "Invest a small test amount to verify",
         "id": "Investasikan nominal uji kecil untuk memverifikasi"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The mask (crypto, gold, forex) changes yearly; the signatures do not. Small test amounts are exactly how these schemes grow — early payouts recruit the victim as a witness.",
        "id": "Topengnya (kripto, emas, forex) berganti tiap tahun; tanda tangannya tidak. Nominal uji kecil justru cara skema ini tumbuh — pembayaran awal merekrut korban sebagai saksi."
       }
      }
     ]
    },
    {
     "n": "8.4",
     "title": {
      "en": "The Financial Planning Horizon: From First Salary to Financial Independence",
      "id": "Horizon Perencanaan Keuangan: Dari Gaji Pertama ke Kemandirian Finansial"
     },
     "dur": {
      "en": "10 min",
      "id": "10 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Money decisions stop being monthly and start being decadal: the horizon view. This closing lesson connects the system — fund, investing, curve — to the long arcs: the big purchases, the family obligations, the sabbaticals and studies, and the eventual independence that makes work a choice.",
      "id": "Keputusan uang berhenti bulanan dan mulai dekadal: pandangan horizon. Pelajaran penutup ini menghubungkan sistem — dana, investasi, kurva — ke busur panjang: pembelian besar, kewajiban keluarga, jeda dan studi, dan kemandirian akhirnya yang menjadikan kerja sebuah pilihan."
     },
     "objectives": [
      {
       "en": "Sketch the financial horizon: the named goals a decade of surplus serves.",
       "id": "Mensketsakan horizon finansial: tujuan bernama yang dilayani satu dekade surplus."
      },
      {
       "en": "Handle family financial obligations with structure and dignity.",
       "id": "Menangani kewajiban finansial keluarga dengan struktur dan martabat."
      },
      {
       "en": "Understand financial independence as a direction, not a finish line.",
       "id": "Memahami kemandirian finansial sebagai arah, bukan garis akhir."
      }
     ],
     "takeaways": [
      {
       "en": "Named goals with dates and numbers convert vague saving into funded plans.",
       "id": "Tujuan bernama dengan tanggal dan angka mengubah tabungan samar menjadi rencana terdanai."
      },
      {
       "en": "Family support is a budget line designed with love and limits — not an unbounded obligation absorbed in silence.",
       "id": "Dukungan keluarga adalah baris anggaran yang dirancang dengan kasih dan batas — bukan kewajiban tanpa batas yang diserap dalam diam."
      },
      {
       "en": "Every percent of savings rate buys future optionality: the real product is choices, not a number.",
       "id": "Setiap persen tingkat tabungan membeli opsi masa depan: produk sejatinya pilihan, bukan angka."
      }
     ],
     "sections": [
      {
       "icon": "target",
       "h": {
        "en": "Naming the horizon",
        "id": "Menamai horizon"
       },
       "body": {
        "en": "Generic “saving for the future” cannot be planned or felt. Name the goals: the professional certification at year two (Rp X by month Y); the marriage or the home down payment at year five; the study leave or sabbatical fund; the parents' support fund as they age. Each named goal gets a number, a date, and therefore a monthly figure and an appropriate instrument (three-year money in stable instruments, ten-year money in growth ones — 8.3's corollary applied). Revisit the map annually beside the career architecture review — the two documents describe one life and should agree with each other.",
        "id": "“Menabung untuk masa depan” yang generik tak bisa direncanakan atau dirasakan. Namai tujuannya: sertifikasi profesional di tahun kedua (Rp X pada bulan Y); pernikahan atau uang muka rumah di tahun kelima; dana cuti belajar atau jeda; dana dukungan orang tua seiring usia. Tiap tujuan bernama mendapat angka, tanggal, dan karenanya nominal bulanan serta instrumen yang sesuai (uang tiga-tahun di instrumen stabil, uang sepuluh-tahun di instrumen pertumbuhan — korolari 8.3 diterapkan). Kunjungi lagi peta ini tahunan di samping tinjauan arsitektur karier — dua dokumen itu menggambarkan satu kehidupan dan seharusnya saling bersetuju."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "Family, structured with dignity",
        "id": "Keluarga, terstruktur dengan martabat"
       },
       "body": {
        "en": "For many Indonesian professionals the first salary carries family expectations — parents, siblings' schooling, extended obligations. The failure modes mirror each other: unbounded absorption (every request met until your own foundation never forms, helping no one sustainably) and guilty avoidance (relationships corroding under unspoken resentment). The structured middle: a deliberate monthly amount, decided by you within your system, given consistently and communicated warmly — “this is yours every month, reliably” serves families better than unpredictable larger sums under pressure. For larger asks beyond the line, the graceful-no craft from Map 2.4 applies with love: what you protect by declining is the system that keeps the monthly line reliable for years.",
        "id": "Bagi banyak profesional Indonesia gaji pertama membawa harapan keluarga — orang tua, sekolah adik, kewajiban keluarga besar. Mode gagalnya saling bercermin: penyerapan tanpa batas (tiap permintaan dipenuhi sampai fondasimu sendiri tak pernah terbentuk, tak menolong siapa pun secara berkelanjutan) dan penghindaran penuh rasa bersalah (hubungan terkorosi di bawah dendam tak terucap). Jalan tengah terstruktur: nominal bulanan yang disengaja, diputuskan olehmu di dalam sistemmu, diberikan konsisten dan dikomunikasikan hangat — “ini untukmu tiap bulan, bisa diandalkan” melayani keluarga lebih baik daripada jumlah lebih besar yang tak terduga di bawah tekanan. Untuk permintaan lebih besar di luar baris itu, keterampilan penolakan anggun Map 2.4 berlaku dengan kasih: yang kamu lindungi dengan menolak adalah sistem yang menjaga baris bulanan andal bertahun-tahun."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "Independence as direction",
        "id": "Kemandirian sebagai arah"
       },
       "body": {
        "en": "Financial independence — assets generating enough to make employment optional — sits decades out, and its number matters less than its gradient: every percent of savings rate, every year of compounding, every skill that raises the curve moves you along it. What the direction buys long before arrival: the funded runway that declined the toxic promotion; the sabbatical that retrained you into the better field; the ability to take the mission-driven role at a pay cut because the foundation holds. That is the course's closing frame: financial intelligence is career intelligence — the system exists so that the architect, not the bank balance, decides the route.",
        "id": "Kemandirian finansial — aset yang menghasilkan cukup untuk menjadikan pekerjaan opsional — berjarak berdekade, dan angkanya kurang penting daripada gradiennya: tiap persen tingkat tabungan, tiap tahun penggandaan, tiap keterampilan yang menaikkan kurva menggerakkanmu di sepanjangnya. Yang dibeli arah ini jauh sebelum tiba: landasan pacu terdanai yang menolak promosi beracun; jeda yang melatihmu ulang ke bidang lebih baik; kemampuan mengambil peran bermisi dengan potongan gaji karena fondasinya kokoh. Itulah bingkai penutup kursus ini: kecerdasan finansial adalah kecerdasan karier — sistem ada agar sang arsitek, bukan saldo bank, yang menentukan rute."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "How does this module change the reading of a 20% pay-cut offer at a mission-driven organisation you admire?",
        "id": "Bagaimana modul ini mengubah pembacaan tawaran potongan gaji 20% di organisasi bermisi yang kamu kagumi?"
       },
       "options": [
        {
         "en": "It forbids it — never accept less money",
         "id": "Ia melarangnya — jangan pernah menerima uang lebih sedikit"
        },
        {
         "en": "It makes it a system question: with the fund built, obligations structured and the curve understood, the cut may be affordable and the architecture may say it is worth it",
         "id": "Ia menjadikannya soal sistem: dengan dana terbangun, kewajiban terstruktur, dan kurva dipahami, potongan itu mungkin terjangkau dan arsitektur mungkin berkata layak"
        },
        {
         "en": "It defers all such decisions until financial independence",
         "id": "Ia menunda semua keputusan begitu sampai kemandirian finansial"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The system's product is optionality. A funded professional can price a mission role deliberately; an unfunded one never even reaches the question.",
        "id": "Produk sistem ini adalah opsi. Profesional terdanai bisa menghargai peran bermisi dengan sengaja; yang tak terdanai bahkan tak pernah sampai ke pertanyaannya."
       }
      }
     ]
    }
   ],
   "hero": "../../assets/mature-professional-feature.jpg",
   "heroPos": "center 30%"
  },
  {
   "num": 9,
   "title": {
    "en": "Leadership Foundations",
    "id": "Fondasi Kepemimpinan"
   },
   "overview": {
    "en": "Module 9 of The Route focuses on leadership foundations. Work through the lessons in order — each builds on the last.",
    "id": "Modul 9 dari The Route berfokus pada Fondasi Kepemimpinan. Kerjakan pelajaran secara berurutan — setiap pelajaran dibangun di atas sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply leadership foundations to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini kamu dapat menerapkan Fondasi Kepemimpinan pada keputusan kariermu sendiri dengan metode konkret yang dapat diulang."
   },
   "lessons": [
    {
     "n": "9.1",
     "title": {
      "en": "Communication with Executive Presence",
      "id": "Komunikasi dengan Kehadiran Eksekutif"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Executive presence is not charisma; it is the earned impression that things are under control when you speak. This lesson decomposes it into trainable parts — grounded delivery, altitude fluency, composure under fire — and connects each to skills the trilogy already built.",
      "id": "Kehadiran eksekutif bukan karisma; ia kesan yang diperoleh bahwa segala sesuatu terkendali saat kamu bicara. Pelajaran ini menguraikannya menjadi bagian terlatihkan — penyampaian membumi, kefasihan ketinggian, ketenangan di bawah tembakan — dan menghubungkan masing-masing ke keterampilan yang sudah dibangun trilogi."
     },
     "objectives": [
      {
       "en": "Decompose executive presence into its trainable components.",
       "id": "Mengurai kehadiran eksekutif menjadi komponen terlatihkan."
      },
      {
       "en": "Speak to senior rooms: altitude first, brevity as confidence, numbers as ballast.",
       "id": "Berbicara ke ruangan senior: ketinggian dulu, keringkasan sebagai kepercayaan diri, angka sebagai pemberat."
      },
      {
       "en": "Hold composure when challenged — the moment presence is actually measured.",
       "id": "Menjaga ketenangan saat ditantang — momen kehadiran sungguh diukur."
      }
     ],
     "takeaways": [
      {
       "en": "Presence is pattern-matched from samples: prepared openings, held silences, calm corrections.",
       "id": "Kehadiran dipetakan dari sampel: pembukaan siap, keheningan tertahan, koreksi tenang."
      },
      {
       "en": "Senior rooms reward the same pyramid the Map taught — conclusion first, evidence on request, stop talking.",
       "id": "Ruangan senior mengganjar piramida yang diajarkan Map — kesimpulan dulu, bukti sesuai permintaan, berhenti bicara."
      },
      {
       "en": "The challenge moment is the exam: pause, ground in data, concede precisely or hold precisely.",
       "id": "Momen tantangan adalah ujiannya: jeda, berpijak pada data, mengakui presisi atau bertahan presisi."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "What rooms actually read",
        "id": "Yang sungguh dibaca ruangan"
       },
       "body": {
        "en": "Senior audiences sample for control signals: does the speaker know what they want to say (prepared, structured openings — no warm-up rambling)? Can they handle interruption (the altitude moves from Map 4.2)? Do they distinguish what they know from what they assume (stated confidence levels — “verified” versus “our current estimate”)? Do they finish sentences and then stop (trailing qualifiers dissolve authority)? None of this is height, voice or charisma — the quiet analyst who opens with the conclusion, answers the hard question with a number, and stops talking has presence; the fluent performer who cannot survive a follow-up does not.",
        "id": "Audiens senior menyampel sinyal kendali: apakah pembicara tahu yang ingin dikatakannya (pembukaan siap dan terstruktur — tanpa pemanasan bertele-tele)? Sanggupkah ia menangani interupsi (gerakan ketinggian dari Map 4.2)? Apakah ia membedakan yang diketahui dari yang diasumsikan (tingkat keyakinan dinyatakan — “terverifikasi” versus “estimasi kami saat ini”)? Apakah ia menyelesaikan kalimat lalu berhenti (kualifikasi menggantung melarutkan otoritas)? Tak satu pun soal tinggi badan, suara, atau karisma — analis pendiam yang membuka dengan kesimpulan, menjawab pertanyaan sulit dengan angka, dan berhenti bicara punya kehadiran; penampil fasih yang tak selamat dari satu susulan tidak."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "Speaking upward, engineered",
        "id": "Berbicara ke atas, direkayasa"
       },
       "body": {
        "en": "Preparing for a senior room: write the one sentence you must land if the meeting collapses to ninety seconds — that sentence opens. Prepare the 30-second, 3-minute and 10-minute versions (altitude fluency); expect to deliver the middle one and be interrupted into the short one. Carry your three load-bearing numbers in memory — reading your own key figures off a slide reprices everything else you say. Rehearse aloud once; senior-room fluency is a motor skill, not a knowledge state. And close every segment with stop-shaped sentences: “That is the recommendation.” — silence afterwards included. The silence is the presence.",
        "id": "Persiapan ruangan senior: tulis satu kalimat yang harus mendarat jika rapat runtuh menjadi sembilan puluh detik — kalimat itulah pembukanya. Siapkan versi 30 detik, 3 menit, dan 10 menit (kefasihan ketinggian); berharaplah menyampaikan yang tengah dan diinterupsi ke yang pendek. Bawa tiga angka penopangmu dalam ingatan — membaca angka kuncimu sendiri dari salindia menghargai ulang semua ucapanmu yang lain. Latih bersuara sekali; kefasihan ruangan senior adalah keterampilan motorik, bukan keadaan pengetahuan. Dan tutup tiap segmen dengan kalimat berbentuk berhenti: “Itulah rekomendasinya.” — termasuk keheningan sesudahnya. Keheningan itulah kehadirannya."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "Composure under fire",
        "id": "Ketenangan di bawah tembakan"
       },
       "body": {
        "en": "The challenge — “those numbers look wrong”, “we tried this, it failed” — is where presence is actually scored. The trained sequence: <b>pause</b> one breath (the pause reads as thought, not weakness); <b>ground</b> in the data — “the figure is from the March reconciliation; happy to re-verify the assumption behind it”; then <b>concede precisely or hold precisely</b> — “you're right about the Q2 window, and the trend since holds” or “I've checked that concern; here is why it doesn't apply”. What fails: instant capitulation (presence evaporates), heat (composure was the test), and bluffing (seniors probe exactly where bluffs live — Rope training's claim-probe logic, now aimed at you). This is interview composure, promoted to the boardroom.",
        "id": "Tantangan — “angka itu tampak salah”, “kami pernah coba, gagal” — adalah tempat kehadiran sungguh diskor. Urutan terlatih: <b>jeda</b> satu napas (jeda terbaca sebagai pikiran, bukan kelemahan); <b>berpijak</b> pada data — “angka itu dari rekonsiliasi Maret; dengan senang hati kuverifikasi ulang asumsinya”; lalu <b>akui presisi atau tahan presisi</b> — “kamu benar soal jendela Q2, dan trennya sejak itu tetap berlaku” atau “kekhawatiran itu sudah kuperiksa; ini alasannya tak berlaku”. Yang gagal: kapitulasi instan (kehadiran menguap), panas (ketenangan adalah ujiannya), dan gertakan (senior menggali persis tempat gertakan tinggal — logika penggalian klaim dari latihan Rope, kini diarahkan padamu). Ini ketenangan wawancara, dipromosikan ke ruang rapat direksi."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A director interrupts your ten-minute update at minute two: “bottom line?” Presence-wise, the correct response is:",
        "id": "Seorang direktur memotong pembaruan sepuluh menitmu di menit kedua: “intinya?” Dari sisi kehadiran, respons yang benar:"
       },
       "options": [
        {
         "en": "“I'm building to that — two more minutes of context first.”",
         "id": "“Saya sedang menuju ke sana — dua menit konteks lagi.”"
        },
        {
         "en": "The prepared 30-second version, delivered as a complete answer, then silence for their next question",
         "id": "Versi 30 detik yang sudah disiapkan, disampaikan sebagai jawaban utuh, lalu hening menunggu pertanyaan berikutnya"
        },
        {
         "en": "Apologise for the length and offer to reschedule",
         "id": "Minta maaf atas panjangnya dan tawarkan penjadwalan ulang"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The interruption is the room choosing its altitude — presence is having the short version ready and landing it without resentment or filler.",
        "id": "Interupsi adalah ruangan memilih ketinggiannya — kehadiran berarti versi pendek sudah siap dan mendarat tanpa dendam atau pengisi."
       }
      }
     ],
     "quote": {
      "en": "People follow evidence before they follow titles.",
      "id": "Orang mengikuti bukti sebelum mengikuti gelar."
     },
     "listen": [
      {
       "label": {
        "en": "A stop-shaped close, spoken with the silence after",
        "id": "Penutup berbentuk berhenti, diucapkan dengan keheningan sesudahnya"
       },
       "text": {
        "en": "Recommend approval of the pilot: three quarters of the decline is energy cost, and the retrofit addresses it directly. Main risk is capex payback, which we verify first. That is the recommendation.",
        "id": "Merekomendasikan persetujuan pilot: tiga perempat penurunan adalah biaya energi, dan retrofit menanganinya langsung. Risiko utamanya balik modal capex, yang kita verifikasi dulu. Itulah rekomendasinya."
       }
      }
     ],
     "tool": {
      "id": "field",
      "mode": "coach:presence",
      "title": {
       "en": "Eight minutes with the leadership call",
       "id": "Delapan menit di rapat pimpinan"
      },
      "body": {
       "en": "Open under pressure, absorb a VP's interruption, and route the credit — the executive-presence drill scores all three choices.",
       "id": "Membuka di bawah tekanan, menyerap selaan VP, dan mengarahkan kredit — latihan executive presence menilai ketiga pilihan."
      },
      "cta": {
       "en": "Run the scenario →",
       "id": "Jalankan skenarionya →"
      }
     }
    },
    {
     "n": "9.2",
     "title": {
      "en": "Developing Others: The Leadership Multiplier",
      "id": "Mengembangkan Orang Lain: Pengganda Kepemimpinan"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The leadership multiplier is simple arithmetic: one person's output is capped; a person who makes five others better is not. This lesson builds the developing-others toolkit years before any team reports to you — teaching, delegating upward-invisible work, and growing the people around you.",
      "id": "Pengganda kepemimpinan adalah aritmetika sederhana: keluaran satu orang berlangit-langit; orang yang membuat lima orang lain lebih baik tidak. Pelajaran ini membangun perangkat menumbuhkan-orang-lain bertahun sebelum tim mana pun melapor padamu — mengajar, mendelegasikan, dan menumbuhkan orang di sekitarmu."
     },
     "objectives": [
      {
       "en": "Teach so the learner can do it without you next time.",
       "id": "Mengajar agar pembelajar bisa melakukannya tanpamu lain kali."
      },
      {
       "en": "Build team capability through documentation, onboarding and deliberate knowledge transfer.",
       "id": "Membangun kemampuan tim lewat dokumentasi, onboarding, dan transfer pengetahuan sengaja."
      },
      {
       "en": "Measure yourself by others' growth — the metric leadership tracks actually use.",
       "id": "Mengukur dirimu dari pertumbuhan orang lain — metrik yang sungguh dipakai jalur kepemimpinan."
      }
     ],
     "takeaways": [
      {
       "en": "Every “can you show me?” is a leadership audition — teach the method, not just the answer.",
       "id": "Setiap “bisa tunjukkan caranya?” adalah audisi kepemimpinan — ajarkan metodenya, bukan hanya jawabannya."
      },
      {
       "en": "Knowledge hoarding caps careers at exactly the point where organisations need multipliers.",
       "id": "Menimbun pengetahuan membatasi karier tepat di titik organisasi membutuhkan pengganda."
      },
      {
       "en": "The strongest promotion evidence for leadership tracks: people who got measurably better near you.",
       "id": "Bukti promosi terkuat untuk jalur kepemimpinan: orang yang terukur membaik di dekatmu."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "Teaching that transfers",
        "id": "Pengajaran yang berpindah"
       },
       "body": {
        "en": "When a colleague asks how, the hoarding answer does it for them (fast, and creates the next request); the multiplier answer teaches the method: do it together once narrating the why, let them drive the second pass with you nearby, then leave the runbook. Slower today, compounding forever — and the Map's curse-of-knowledge warning applies: rebuild the staircase, name the steps experts skip. People taught this way become your evidence (they will say so), your capacity (delegatable work now exists), and your reputation — “learned it from her” is the sentence leadership tracks are built from.",
        "id": "Saat kolega bertanya bagaimana, jawaban penimbun mengerjakannya untuk mereka (cepat, dan menciptakan permintaan berikut); jawaban pengganda mengajarkan metode: kerjakan bersama sekali sambil menarasikan alasannya, biarkan mereka mengemudi di lintasan kedua dengan kamu di dekatnya, lalu tinggalkan runbook. Lebih lambat hari ini, menggandakan diri selamanya — dan peringatan kutukan-pengetahuan Map berlaku: bangun ulang tangganya, namai langkah yang dilompati ahli. Orang yang diajar begini menjadi buktimu (mereka akan mengatakannya), kapasitasmu (kerja terdelegasikan kini ada), dan reputasimu — “belajar darinya” adalah kalimat pembentuk jalur kepemimpinan."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "Building capability structurally",
        "id": "Membangun kemampuan secara struktural"
       },
       "body": {
        "en": "Beyond one-to-one teaching, the structural moves: <b>runbooks</b> for everything you own (2.2's travelling artefacts, aimed at succession); <b>onboarding</b> volunteered for — the person who onboards new joiners shapes the team's standards and is remembered as its teacher; <b>knowledge sessions</b> — the lunch-and-learn on what you know that others need (4.3's first speaking rung, aimed inward); <b>documented decisions</b> — why things are the way they are, saving future colleagues the archaeology. Each structural move survives your absence — which is the definition of built capability, and precisely what separates “great individual contributor” from “ready for a team” in calibration language.",
        "id": "Di luar pengajaran satu-satu, langkah struktural: <b>runbook</b> untuk semua yang kamu miliki (artefak bepergian 2.2, diarahkan ke suksesi); <b>onboarding</b> yang diambil sukarela — orang yang meng-onboard karyawan baru membentuk standar tim dan diingat sebagai gurunya; <b>sesi pengetahuan</b> — makan siang sambil belajar tentang yang kamu tahu dan dibutuhkan orang lain (anak tangga bicara pertama 4.3, diarahkan ke dalam); <b>keputusan terdokumentasi</b> — mengapa segala sesuatu seperti adanya, menghemat arkeologi kolega masa depan. Tiap langkah struktural bertahan tanpa kehadiranmu — itulah definisi kemampuan terbangun, dan persis yang memisahkan “kontributor individu hebat” dari “siap memegang tim” dalam bahasa kalibrasi."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The multiplier metric",
        "id": "Metrik pengganda"
       },
       "body": {
        "en": "Track it like any asset: who near you can now do something they could not last quarter, and what evidence shows it? The intern who now owns the validation; the peer whose dashboards adopted your checks; the new joiner productive in week two because of your onboarding. Log these in the win log alongside your own deliveries — they are your deliveries, at one remove. When the leadership conversation eventually comes, this ledger is the case: organisations promote to team leadership on evidence of multiplication, not on individual output alone, because the job being filled is precisely making-others-better, demonstrated or not.",
        "id": "Lacak seperti aset mana pun: siapa di dekatmu kini bisa melakukan yang tak bisa mereka lakukan kuartal lalu, dan bukti apa yang menunjukkannya? Magang yang kini memiliki validasi; rekan yang dasbornya mengadopsi pemeriksaanmu; karyawan baru yang produktif di minggu kedua karena onboarding-mu. Catat ini di catatan kemenangan di samping pengirimanmu sendiri — mereka adalah pengirimanmu, satu tingkat berjarak. Saat percakapan kepemimpinan akhirnya tiba, buku besar inilah kasusnya: organisasi mempromosikan ke kepemimpinan tim atas bukti penggandaan, bukan keluaran individu semata, karena pekerjaan yang diisi persisnya membuat-orang-lain-lebih-baik, terdemonstrasi atau tidak."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does volunteering to onboard new joiners rank so highly in this lesson?",
        "id": "Mengapa mengajukan diri meng-onboard karyawan baru berperingkat tinggi di pelajaran ini?"
       },
       "options": [
        {
         "en": "It is light work that frees time for real projects",
         "id": "Ia kerja ringan yang membebaskan waktu untuk proyek sungguhan"
        },
        {
         "en": "It multiplies capability at the team's entry point, shapes standards, and generates continuous multiplier evidence",
         "id": "Ia menggandakan kemampuan di titik masuk tim, membentuk standar, dan menghasilkan bukti pengganda berkelanjutan"
        },
        {
         "en": "New joiners give the best performance reviews",
         "id": "Karyawan baru memberi penilaian kinerja terbaik"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Onboarding is teaching, standard-setting and succession-building in one recurring package — the multiplier metric's most reliable generator.",
        "id": "Onboarding adalah pengajaran, penetapan standar, dan pembangunan suksesi dalam satu paket berulang — generator paling andal metrik pengganda."
       }
      }
     ]
    },
    {
     "n": "9.3",
     "title": {
      "en": "Building the Reputation of Someone Worth Following",
      "id": "Membangun Reputasi Seseorang yang Layak Diikuti"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "People follow evidence before they follow titles. This lesson assembles the followable reputation: reliability under pressure, fairness in credit and conflict, and the visible spine of someone whose standards do not depend on who is watching.",
      "id": "Orang mengikuti bukti sebelum mengikuti gelar. Pelajaran ini merakit reputasi yang layak diikuti: keandalan di bawah tekanan, keadilan dalam penghargaan dan konflik, dan tulang punggung terlihat dari seseorang yang standarnya tak bergantung pada siapa yang menonton."
     },
     "objectives": [
      {
       "en": "Identify the moments where followable reputations are actually made.",
       "id": "Mengenali momen tempat reputasi layak-diikuti sungguh dibentuk."
      },
      {
       "en": "Practise the ownership behaviours: mistakes owned, credit shared, standards kept.",
       "id": "Melatih perilaku kepemilikan: kesalahan diakui, penghargaan dibagi, standar dijaga."
      },
      {
       "en": "Audit your current followability against the evidence.",
       "id": "Mengaudit kelayak-ikutanmu kini terhadap buktinya."
      }
     ],
     "takeaways": [
      {
       "en": "Followability is sampled in pressure moments: the missed deadline, the public error, the unfair meeting.",
       "id": "Kelayak-ikutan disampel di momen tekanan: tenggat terlewat, kesalahan publik, rapat tak adil."
      },
      {
       "en": "Owning mistakes fast is the single strongest followability signal — and the rarest.",
       "id": "Mengakui kesalahan dengan cepat adalah sinyal kelayak-ikutan terkuat — dan terlangka."
      },
      {
       "en": "Standards kept when inconvenient are the spine people decide to stand behind.",
       "id": "Standar yang dijaga saat merepotkan adalah tulang punggung yang membuat orang memutuskan berdiri di belakangmu."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "Where following begins",
        "id": "Di mana pengikutan dimulai"
       },
       "body": {
        "en": "Nobody decides to follow you during your good weeks. The decision forms in observed pressure: the deliverable slipping — do you surface it early and own the recovery, or manage the optics? The junior's public error — do you shield and correct privately, or let them absorb the room? The credit moment — does it flow accurately, including downward? The unfair criticism of an absent colleague — silence, or a calm “that doesn't match what I saw”? Each moment is small; the pattern across them is what colleagues mean when they say someone “would be a good lead” — a verdict formed years before any org chart asks for it.",
        "id": "Tak seorang pun memutuskan mengikutimu di minggu-minggu baikmu. Keputusan terbentuk dalam tekanan teramati: hasil kerja yang meleset — apakah kamu memunculkannya dini dan memiliki pemulihannya, atau mengelola citranya? Kesalahan publik si junior — apakah kamu melindungi dan mengoreksi privat, atau membiarkannya menyerap ruangan? Momen penghargaan — apakah mengalir akurat, termasuk ke bawah? Kritik tak adil pada kolega yang absen — diam, atau “itu tak cocok dengan yang kulihat” yang tenang? Tiap momen kecil; pola lintas momen itulah yang dimaksud kolega saat berkata seseorang “akan jadi pemimpin yang baik” — vonis yang terbentuk bertahun sebelum bagan organisasi menanyakannya."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "The ownership behaviours",
        "id": "Perilaku kepemilikan"
       },
       "body": {
        "en": "<b>Mistakes:</b> surfaced by you, before discovery, with the fix in hand — “the report went out with March's rates; corrected version in ten minutes; I've added a check so it can't recur.” The pattern is so rare that people who do it consistently become trusted beyond their level. <b>Credit:</b> the 2.2 and 3.4 habits, now understood as followability infrastructure — people follow those who make them visible. <b>Standards:</b> quality held when nobody would notice, the inconvenient truth told kindly, the red lines from 1.3 quietly kept. None requires authority; all are being recorded by the colleagues who will one day be asked, in a calibration room, whether they would work for you.",
        "id": "<b>Kesalahan:</b> dimunculkan olehmu, sebelum ketahuan, dengan perbaikan di tangan — “laporan keluar memakai kurs Maret; versi terkoreksi sepuluh menit lagi; kutambahkan pemeriksa agar tak terulang.” Polanya begitu langka sehingga orang yang konsisten melakukannya dipercaya melampaui levelnya. <b>Penghargaan:</b> kebiasaan 2.2 dan 3.4, kini dipahami sebagai infrastruktur kelayak-ikutan — orang mengikuti yang membuat mereka terlihat. <b>Standar:</b> mutu dijaga saat tak ada yang akan tahu, kebenaran merepotkan disampaikan baik-baik, garis merah 1.3 dijaga senyap. Tak satu pun butuh otoritas; semuanya sedang direkam oleh kolega yang suatu hari ditanya, di ruang kalibrasi, apakah mereka mau bekerja untukmu."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The followability audit",
        "id": "Audit kelayak-ikutan"
       },
       "body": {
        "en": "Evidence over intention: When did you last own a mistake before it was found? Whose growth would witnesses attribute partly to you? What did you do, specifically, in the last unfair meeting you sat in? Would the intern, the peer and the difficult stakeholder each describe your standards the same way? Uncomfortable audits locate the training ground. And the honest caveat this course owes you: followability is necessary for leadership, not sufficient — organisations also weigh delivery, timing and need. Build it anyway; unlike the title, it travels with you to every team, employer and industry for the rest of your career.",
        "id": "Bukti di atas niat: Kapan terakhir kamu mengakui kesalahan sebelum ditemukan? Pertumbuhan siapa yang oleh saksi akan sebagian diatribusikan padamu? Apa yang kamu lakukan, spesifik, di rapat tak adil terakhir yang kamu hadiri? Akankah magang, rekan, dan pemangku kepentingan sulit masing-masing menggambarkan standarmu dengan cara sama? Audit yang tak nyaman menunjukkan lapangan latihan. Dan catatan jujur yang diutangkan kursus ini padamu: kelayak-ikutan perlu bagi kepemimpinan, tak cukup — organisasi juga menimbang pengiriman, waktu, dan kebutuhan. Bangunlah tetap; tak seperti gelar, ia ikut bersamamu ke tiap tim, pemberi kerja, dan industri sepanjang sisa kariermu."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "You discover your published analysis used stale data. Nobody has noticed yet. The followability move?",
        "id": "Kamu menemukan analisis terbitanmu memakai data basi. Belum ada yang sadar. Langkah kelayak-ikutannya?"
       },
       "options": [
        {
         "en": "Quietly fix the source so future runs are correct",
         "id": "Perbaiki sumbernya diam-diam agar eksekusi mendatang benar"
        },
        {
         "en": "Surface it now with the correction and the prevention: announced error, fixed version, new check — before anyone finds it",
         "id": "Munculkan sekarang dengan koreksi dan pencegahan: kesalahan diumumkan, versi diperbaiki, pemeriksa baru — sebelum ada yang menemukannya"
        },
        {
         "en": "Wait to see if it materially affected any decision first",
         "id": "Tunggu dulu apakah ia berdampak material pada keputusan mana pun"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Self-surfaced errors with fixes build trust faster than error-free streaks — and discovered cover-ups destroy in a day what years built.",
        "id": "Kesalahan yang dimunculkan sendiri dengan perbaikan membangun kepercayaan lebih cepat dari rentetan tanpa-kesalahan — dan penutupan yang ketahuan menghancurkan dalam sehari apa yang dibangun bertahun-tahun."
       }
      }
     ]
    },
    {
     "n": "9.4",
     "title": {
      "en": "Thinking Like a Leader as an Individual Contributor",
      "id": "Berpikir Seperti Pemimpin sebagai Kontributor Individu"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "The trilogy's final lesson: thinking like a leader while your badge still says individual contributor. Three drills — the ownership upgrade, the team-lens decision, and the stewardship review that closes The Route and hands the course back to your career.",
      "id": "Pelajaran akhir trilogi: berpikir seperti pemimpin selagi lencanamu masih berkata kontributor individu. Tiga latihan — peningkatan kepemilikan, keputusan lensa-tim, dan tinjauan penatalayanan yang menutup The Route dan menyerahkan kursus kembali ke kariermu."
     },
     "objectives": [
      {
       "en": "Upgrade from task ownership to outcome ownership in daily work.",
       "id": "Meningkat dari kepemilikan tugas ke kepemilikan hasil dalam kerja harian."
      },
      {
       "en": "Run decisions through the team lens before the personal lens.",
       "id": "Menjalankan keputusan lewat lensa tim sebelum lensa pribadi."
      },
      {
       "en": "Close the course with a stewardship plan for your own trajectory.",
       "id": "Menutup kursus dengan rencana penatalayanan untuk trajektorimu sendiri."
      }
     ],
     "takeaways": [
      {
       "en": "Leaders-in-waiting own outcomes: the report and its consequences, not just the report.",
       "id": "Calon pemimpin memiliki hasil: laporan dan konsekuensinya, bukan hanya laporannya."
      },
      {
       "en": "The team lens usually agrees with the personal lens long-term — and flags the exceptions that matter.",
       "id": "Lensa tim biasanya sepakat dengan lensa pribadi jangka panjang — dan menandai pengecualian yang penting."
      },
      {
       "en": "The course ends; the systems continue: architecture, win log, plans, circle, reviews.",
       "id": "Kursus berakhir; sistemnya berlanjut: arsitektur, catatan kemenangan, rencana, lingkaran, tinjauan."
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 — The ownership upgrade",
        "id": "Latihan 1 — Peningkatan kepemilikan"
       },
       "body": {
        "en": "Your task: “send the weekly performance report”. List what task ownership delivers versus what outcome ownership would deliver. Then reveal.",
        "id": "Tugasmu: “kirim laporan kinerja mingguan”. Daftar yang diberikan kepemilikan tugas versus yang akan diberikan kepemilikan hasil. Lalu buka."
       },
       "debrief": {
        "en": "Task ownership: accurate report, on time, every week — blameless and capped. Outcome ownership asks what the report is for: decisions. So it notices that two recipients never open it (ask them why — maybe they need one number in chat instead); that a metric leadership keeps asking about is missing (add it); that last month's anomaly went unexplained (annotate it before being asked); that the report could trigger the review meeting's agenda automatically. Same task, leader-shaped: the question is never “did I do the task?” but “did the outcome the task serves actually happen?” Practising this upgrade on every recurring duty is how contributor years become leadership evidence.",
        "id": "Kepemilikan tugas: laporan akurat, tepat waktu, tiap minggu — tanpa cela dan berlangit-langit. Kepemilikan hasil bertanya untuk apa laporan itu: keputusan. Maka ia menyadari dua penerima tak pernah membukanya (tanya mengapa — mungkin mereka butuh satu angka di chat saja); metrik yang terus ditanyakan pimpinan tak ada (tambahkan); anomali bulan lalu tak terjelaskan (anotasi sebelum ditanya); laporan bisa memicu agenda rapat tinjauan otomatis. Tugas sama, berbentuk pemimpin: pertanyaannya tak pernah “apakah kukerjakan tugasnya?” melainkan “apakah hasil yang dilayani tugas itu sungguh terjadi?” Melatih peningkatan ini pada tiap kewajiban berulang adalah cara tahun-tahun kontributor menjadi bukti kepemimpinan."
       }
      },
      {
       "h": {
        "en": "Drill 2 — The team lens",
        "id": "Latihan 2 — Lensa tim"
       },
       "body": {
        "en": "Two projects are offered: A polishes your specialist skill and profile; B fixes the team's biggest bottleneck but the work is unglamorous integration. Your promotion file could use either. Decide with both lenses, then reveal.",
        "id": "Dua proyek ditawarkan: A memoles keterampilan dan profil spesialismu; B memperbaiki hambatan terbesar tim tetapi kerjanya integrasi tak glamor. Berkas promosimu bisa memakai keduanya. Putuskan dengan dua lensa, lalu buka."
       },
       "debrief": {
        "en": "The team lens usually converges with the long game: B's bottleneck fix multiplies everyone's output (9.2's metric), earns the gratitude of the whole roster, and — read through Module 5 — is exactly the “team-first, cross-boundary scope” evidence promotion committees weight for leadership tracks. A serves this quarter's comfort; B serves the multi-year architecture. The honest exceptions the lens also surfaces: if B's work is invisible and unlogged, engineer its legibility first (2.2) — sacrifice without witnesses helps no one, including the team, whose bottleneck-fixer burns out unthanked. And if every quarter offers only B-shaped work, that is a yield conversation with your manager, not a life sentence.",
        "id": "Lensa tim biasanya bertemu dengan permainan panjang: perbaikan hambatan B menggandakan keluaran semua orang (metrik 9.2), memperoleh terima kasih seisi daftar, dan — dibaca lewat Modul 5 — persis bukti “tim-dulu, lingkup lintas-batas” yang dibobot komite promosi untuk jalur kepemimpinan. A melayani kenyamanan kuartal ini; B melayani arsitektur multi-tahun. Pengecualian jujur yang juga dimunculkan lensa: jika kerja B tak terlihat dan tak tercatat, rekayasa dulu keterbacaannya (2.2) — pengorbanan tanpa saksi tak menolong siapa pun, termasuk tim, yang pemerbaiki-hambatannya kehabisan tenaga tanpa terima kasih. Dan jika tiap kuartal hanya menawarkan kerja berbentuk B, itu bahan percakapan hasil dengan manajermu, bukan hukuman seumur hidup."
       }
      },
      {
       "h": {
        "en": "Drill 3 — The stewardship review",
        "id": "Latihan 3 — Tinjauan penatalayanan"
       },
       "body": {
        "en": "The course's closing exercise: write your stewardship plan — which systems from the trilogy run on which cadence, and who holds you to them. Then reveal.",
        "id": "Latihan penutup kursus: tulis rencana penatalayananmu — sistem mana dari trilogi berjalan pada irama apa, dan siapa yang menagihmu. Lalu buka."
       },
       "debrief": {
        "en": "A complete plan, for reference: <b>weekly</b> — the win log entry and the Friday one-liner (ten minutes); <b>monthly</b> — plan progress check in the Route Planner, one circle touch, one visibility sample; <b>quarterly</b> — readiness diagnostic re-run, market calibration read, one external artefact; <b>annually</b> — the architecture review, the financial horizon review, and the decision gate, with your truth-teller booked for the hard questions. Accountability: the systems are self-run, but announcing the cadence to one circle member converts private intentions into social commitments. The trilogy ends here; the compounding it configured does not. The Route was never the destination — it is the discipline of travelling well.",
        "id": "Rencana lengkap, sebagai rujukan: <b>mingguan</b> — entri catatan kemenangan dan satu-baris Jumat (sepuluh menit); <b>bulanan</b> — cek kemajuan rencana di Route Planner, satu sentuhan lingkaran, satu sampel visibilitas; <b>kuartalan</b> — jalankan ulang diagnostik kesiapan, pembacaan kalibrasi pasar, satu artefak eksternal; <b>tahunan</b> — tinjauan arsitektur, tinjauan horizon finansial, dan gerbang keputusan, dengan penyampai kebenaranmu dijadwalkan untuk pertanyaan sulit. Akuntabilitas: sistem berjalan mandiri, tetapi mengumumkan iramanya ke satu anggota lingkaran mengubah niat pribadi menjadi komitmen sosial. Trilogi berakhir di sini; penggandaan yang dikonfigurasinya tidak. The Route tak pernah menjadi tujuan — ia disiplin menempuh perjalanan dengan baik."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "What converts “sent the report weekly, accurately” into leadership evidence?",
        "id": "Apa yang mengubah “mengirim laporan mingguan, akurat” menjadi bukti kepemimpinan?"
       },
       "options": [
        {
         "en": "Sending it earlier each week",
         "id": "Mengirimnya lebih awal tiap minggu"
        },
        {
         "en": "Owning the outcome it serves: noticing who needs what decision, fixing the report's actual usefulness, preventing the questions before they are asked",
         "id": "Memiliki hasil yang dilayaninya: menyadari siapa butuh keputusan apa, memperbaiki kegunaan nyata laporan, mencegah pertanyaan sebelum diajukan"
        },
        {
         "en": "Adding more metrics and pages",
         "id": "Menambah metrik dan halaman"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Outcome ownership is the leader's default question applied without authority — and it is visible to everyone who will one day decide whether you get some.",
        "id": "Kepemilikan hasil adalah pertanyaan default pemimpin diterapkan tanpa otoritas — dan ia terlihat oleh semua yang kelak memutuskan apakah kamu mendapatkannya."
       }
      }
     ],
     "tool": {
      "id": "plan",
      "mode": "readiness",
      "title": {
       "en": "Close the course with a reading",
       "id": "Tutup kursus dengan satu pembacaan"
      },
      "body": {
       "en": "Re-run the readiness diagnostic and compare against your first — the delta across six dimensions is what this course built. Then set the next 90-day plan.",
       "id": "Jalankan ulang diagnostik kesiapan dan bandingkan dengan yang pertama — selisih di enam dimensi itulah yang dibangun kursus ini. Lalu susun rencana 90 hari berikutnya."
      },
      "cta": {
       "en": "Open the Route Planner →",
       "id": "Buka Route Planner →"
      }
     }
    }
   ],
   "hero": "../../assets/bg/fg-stage-horizon.jpg",
   "heroPos": "center 40%"
  }
 ]
};
