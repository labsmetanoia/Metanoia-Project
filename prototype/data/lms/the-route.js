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
    "id": "Modul 1 The Route berfokus pada arsitektur karier. Kerjakan pelajarannya secara berurutan — setiap pelajaran dibangun di atas pelajaran sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply career architecture to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu bisa menerapkan arsitektur karier pada keputusan kariermu sendiri, dengan metode yang konkret dan bisa diulang."
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
      "id": "Surat tawaran menjadikanmu karyawan; tidak ada satu pun isinya yang menjadikanmu pembangun karier. Pelajaran pembuka ini menarik garis pembeda yang menggerakkan seluruh kursus: karyawan menjalankan sebuah posisi, pembangun memakai posisi itu untuk menumpuk aset — keterampilan, hasil, hubungan, reputasi — yang mereka bawa saat keluar dari pintu."
     },
     "objectives": [
      {
       "en": "Distinguish role goals (owned by the company) from career assets (owned by you).",
       "id": "Membedakan tujuan posisi (milik perusahaan) dari aset karier (milikmu)."
      },
      {
       "en": "Audit your first months: which assets are you actually accumulating?",
       "id": "Mengaudit bulan-bulan pertamamu: aset mana yang benar-benar sedang kamu kumpulkan?"
      },
      {
       "en": "Adopt the builder's weekly question: what did this week add that I keep?",
       "id": "Membiasakan pertanyaan mingguan seorang pembangun: apa yang ditambahkan minggu ini, yang tetap menjadi milikku?"
      }
     ],
     "takeaways": [
      {
       "en": "Companies rent your time for their goals; careers are built from what compounds in you meanwhile.",
       "id": "Perusahaan menyewa waktumu untuk tujuan mereka; karier dibangun dari apa yang bertumbuh dalam dirimu selama itu."
      },
      {
       "en": "Four assets compound: skills with evidence, relationships with trust, reputation with witnesses, results with numbers.",
       "id": "Empat aset yang bertumbuh berlipat: keterampilan yang ada buktinya, hubungan yang ada kepercayaannya, reputasi yang ada saksinya, hasil yang ada angkanya."
      },
      {
       "en": "The same year can add zero assets or four — the difference is deliberate steering, not harder work.",
       "id": "Tahun yang sama bisa menambah nol aset atau empat — bedanya ada pada kemudi yang disengaja, bukan kerja yang lebih keras."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "Two people, same desk",
        "id": "Dua orang, meja yang sama"
       },
       "body": {
        "en": "Two analysts join the same team. Both work hard; both get decent reviews. Three years later one has a promotion, a portfolio of named projects, two managers who would hire her again anywhere, and a skill stack the market prices — the other has three years of tenure. The difference was never talent. The first treated every assignment as two jobs: the company's deliverable, and the asset it could mint for her — a new skill made legible, a stakeholder who now trusts her, a result with a number attached. The second completed tasks. Task completion is rented; assets are owned.",
        "id": "Dua analis bergabung ke tim yang sama. Keduanya bekerja keras; keduanya mendapat penilaian yang layak. Tiga tahun kemudian, yang satu punya promosi, portofolio proyek yang punya nama, dua manajer yang akan merekrutnya lagi di mana pun, dan tumpukan keterampilan yang dihargai pasar — yang satunya lagi punya tiga tahun masa kerja. Bedanya tidak pernah soal bakat. Yang pertama memperlakukan setiap penugasan sebagai dua pekerjaan sekaligus: hasil yang diserahkan ke perusahaan, dan aset yang bisa ia cetak untuk dirinya sendiri — keterampilan baru yang bisa dibuktikan, pemangku kepentingan yang kini memercayainya, hasil yang ada angkanya. Yang kedua menyelesaikan tugas. Penyelesaian tugas itu disewa; aset itu dimiliki."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "The four compounding assets",
        "id": "Empat aset yang bertumbuh berlipat"
       },
       "body": {
        "en": "<b>Skills with evidence:</b> not “I got better at analysis” but “I now own the churn model, documented, presented twice”. <b>Results with numbers:</b> every project ends with a line for the win log — what changed, by how much, verified by whom. <b>Relationships with trust:</b> people who have seen you deliver and would say so; built by delivering, not by networking events. <b>Reputation with witnesses:</b> what the room says when your name comes up — Module 4's territory. Each asset compounds because it lowers the cost of the next win: trusted people get better projects, better projects mint rarer skills, rarer skills draw bigger rooms.",
        "id": "<b>Keterampilan yang ada buktinya:</b> bukan “analisis saya makin baik”, melainkan “saya sekarang memegang model churn, terdokumentasi, sudah dipresentasikan dua kali”. <b>Hasil yang ada angkanya:</b> setiap proyek berakhir dengan satu baris di catatan capaian — apa yang berubah, seberapa besar, diverifikasi oleh siapa. <b>Hubungan yang ada kepercayaannya:</b> orang-orang yang pernah melihatmu menuntaskan pekerjaan dan bersedia mengatakannya; dibangun dengan menuntaskan, bukan dengan menghadiri acara networking. <b>Reputasi yang ada saksinya:</b> apa yang dikatakan orang-orang di ruangan saat namamu disebut — wilayah Modul 4. Setiap aset bertumbuh berlipat karena menurunkan biaya untuk kemenangan berikutnya: orang yang dipercaya mendapat proyek yang lebih baik, proyek yang lebih baik mencetak keterampilan yang lebih langka, keterampilan yang lebih langka membawa ke ruangan yang lebih besar."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The builder's weekly question",
        "id": "Pertanyaan mingguan seorang pembangun"
       },
       "body": {
        "en": "Every Friday, one question in the Route Planner's win log: <i>what did this week add that I keep?</i> Some weeks the honest answer is “nothing — I processed tickets”. That answer is information, not failure: three such weeks in a row means your role's asset yield has dropped and needs engineering — volunteer for the gnarly migration, ask to shadow the client call, propose the analysis nobody has time for. Asset yield, not busyness, is what this course teaches you to manage. The diagnostic and the log in the Route Planner exist to keep the question alive after the course ends.",
        "id": "Setiap Jumat, satu pertanyaan di catatan capaian Route Planner: <i>apa yang ditambahkan minggu ini, yang tetap menjadi milikku?</i> Ada minggu-minggu ketika jawaban jujurnya adalah “tidak ada — saya cuma memproses tiket”. Jawaban itu informasi, bukan kegagalan: tiga minggu berturut-turut seperti itu berarti imbal aset dari posisimu sudah turun dan perlu direkayasa — ajukan diri untuk migrasi yang rumit, minta ikut mendampingi panggilan klien, usulkan analisis yang tidak sempat dikerjakan siapa pun. Imbal aset, bukan kesibukan, itulah yang diajarkan kursus ini untuk kamu kelola. Diagnostik dan catatan di Route Planner ada untuk menjaga pertanyaan itu tetap hidup setelah kursus selesai."
       }
      }
     ],
     "diagram": {
      "type": "ring",
      "exhibit": {
       "en": "Exhibit 1: The four assets a role can mint — if you steer it.",
       "id": "Peraga 1: Empat aset yang bisa dicetak sebuah posisi — kalau kamu yang mengemudikannya."
      },
      "title": {
       "en": "The career asset ring",
       "id": "Lingkaran aset karier"
      },
      "items": [
       {
        "h": {
         "en": "Skills",
         "id": "Keterampilan"
        },
        "sub": {
         "en": "Named, documented, demonstrated",
         "id": "Punya nama, terdokumentasi, sudah diperlihatkan"
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
         "id": "Kepercayaan yang diperoleh dengan menuntaskan"
        }
       },
       {
        "h": {
         "en": "Reputation",
         "id": "Reputasi"
        },
        "sub": {
         "en": "What the room says unprompted",
         "id": "Apa yang dikatakan ruangan tanpa diminta"
        }
       }
      ],
      "longdesc": {
       "en": "A ring of four mutually reinforcing career assets: skills made legible through documentation and demonstration; results captured as verified numbers; relationships built on delivered trust; and reputation — what is said about you when you are absent. Each lowers the acquisition cost of the next.",
       "id": "Lingkaran empat aset karier yang saling menguatkan: keterampilan yang bisa dibaca orang lain lewat dokumentasi dan peragaan; hasil yang ditangkap sebagai angka yang terverifikasi; hubungan yang dibangun di atas kepercayaan yang sudah dibuktikan; dan reputasi — apa yang dikatakan tentangmu ketika kamu tidak ada. Masing-masing menurunkan biaya untuk mendapatkan yang berikutnya."
      }
     },
     "checks": [
      {
       "q": {
        "en": "After a quarter of flawless ticket-processing, your win log is empty. What does the builder's lens say?",
        "id": "Setelah satu kuartal memproses tiket tanpa cela, catatan capaianmu kosong. Apa kata lensa seorang pembangun?"
       },
       "options": [
        {
         "en": "Keep going — flawless execution always gets noticed eventually",
         "id": "Lanjutkan saja — eksekusi tanpa cela pasti diperhatikan pada akhirnya"
        },
        {
         "en": "The role's asset yield is low: engineer it — volunteer for harder scope, propose the unowned analysis, ask to shadow",
         "id": "Imbal aset posisi itu rendah: rekayasa — ajukan diri untuk cakupan yang lebih sulit, usulkan analisis yang belum ada pemiliknya, minta ikut mendampingi"
        },
        {
         "en": "Start looking for a new job immediately",
         "id": "Segera cari pekerjaan baru"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Effort without asset accumulation is rented out entirely. Before leaving a role, builders first try raising its yield — usually possible, and itself a skill.",
        "id": "Usaha tanpa penumpukan aset sepenuhnya disewa orang lain. Sebelum meninggalkan sebuah posisi, pembangun lebih dulu mencoba menaikkan imbalnya — biasanya bisa, dan itu sendiri adalah sebuah keterampilan."
       }
      }
     ],
     "tool": {
      "id": "plan",
      "mode": "wins",
      "title": {
       "en": "Open the win log",
       "id": "Buka catatan capaian"
      },
      "body": {
       "en": "Start the Friday habit now: one entry for this week — what you delivered, its number, who can verify it.",
       "id": "Mulai kebiasaan hari Jumat sekarang: satu entri untuk minggu ini — apa yang kamu tuntaskan, angkanya, siapa yang bisa memverifikasinya."
      },
      "cta": {
       "en": "Open the Route Planner →",
       "id": "Buka Route Planner →"
      }
     },
     "quote": {
      "en": "Companies rent your time. Careers are built from what compounds in you meanwhile.",
      "id": "Perusahaan menyewa waktumu. Karier dibangun dari apa yang bertumbuh dalam dirimu selama itu."
     }
    },
    {
     "n": "1.2",
     "title": {
      "en": "Designing Your 3–5 Year Trajectory",
      "id": "Merancang Lintasan 3–5 Tahunmu"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "A trajectory is not a prediction; it is a design constraint. This lesson converts the Map's 3-year outcome into a working career architecture: the destination role family, the two or three way-station roles that reach it, and the asset requirements each transition demands.",
      "id": "Lintasan bukan ramalan; ia batasan untuk merancang. Pelajaran ini mengubah hasil 3 tahun dari The Map menjadi arsitektur karier yang bisa dijalankan: keluarga posisi tujuan, dua atau tiga posisi persinggahan untuk mencapainya, dan persyaratan aset yang dituntut setiap transisi."
     },
     "objectives": [
      {
       "en": "Design a 3–5 year trajectory as destination + way-stations + asset gates.",
       "id": "Merancang lintasan 3–5 tahun sebagai tujuan + persinggahan + gerbang aset."
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
       "id": "Karier dibangun dari belakang: persyaratan posisi berikutnya menentukan target aset di posisi sekarang."
      },
      {
       "en": "Way-stations are chosen for what they mint, not what they pay — early compounding outearns early salary.",
       "id": "Persinggahan dipilih berdasarkan apa yang dicetaknya, bukan apa yang dibayarkannya — aset yang bertumbuh sejak dini mengalahkan gaji yang besar sejak dini."
      },
      {
       "en": "An architecture reviewed yearly bends with reality; one never reviewed becomes a museum piece.",
       "id": "Arsitektur yang ditinjau setiap tahun melentur mengikuti kenyataan; yang tidak pernah ditinjau berubah menjadi barang museum."
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
        "id": "Ambil hasil 3 tahunmu (Map 2.3) dan panjangkan menjadi keluarga posisi tujuan untuk 5 tahun — “analis senior yang memegang satu bidang”, “manajer produk untuk satu tim kecil”, “pemimpin tim operasional”. Lalu tanyakan: posisi apa yang biasanya mendahului itu? Dan apa yang mendahului posisi itu? Dua atau tiga persinggahan akan muncul. Untuk setiap transisi, daftarkan <b>gerbang asetnya</b>: apa yang harus bisa diverifikasi oleh manajer perekrut di posisi berikutnya — keterampilan sedalam apa, hasil sebesar apa, referensi dari siapa. Sekarang arsitekturnya terbaca mundur sampai ke masa kini: tugas tahun ini adalah memenuhi gerbang pertama. Tahun-tahun yang samar lenyap dari rancangan; setiap kuartal punya alasan."
       },
       "img": "../../assets/bg/journey-bg.jpg",
       "imgPos": "center 45%"
      },
      {
       "icon": "gear",
       "h": {
        "en": "Choosing way-stations by yield",
        "id": "Memilih persinggahan berdasarkan imbalnya"
       },
       "body": {
        "en": "When options appear — an internal move, an external offer, a project assignment — score them against the gate they should serve, not against their surface attributes. A slightly lower-paid role that mints the exact skill your next gate requires beats a raise that extends your current asset profile sideways. The trap this avoids has a name in every industry: the well-paid dead end — five years in, comfortable, and priced out of the transition you actually wanted because no way-station ever minted its requirements. The two-lens protocol from The Pack (outcome fit + reversibility) is the scoring tool; the architecture supplies the outcome half.",
        "id": "Ketika pilihan muncul — pindah internal, tawaran dari luar, penugasan proyek — nilailah berdasarkan gerbang yang seharusnya dilayaninya, bukan berdasarkan tampilan luarnya. Posisi dengan gaji sedikit lebih rendah yang mencetak persis keterampilan yang dibutuhkan gerbang berikutmu mengalahkan kenaikan gaji yang hanya memperlebar profil asetmu ke samping. Jebakan yang dihindari dengan cara ini punya nama di setiap industri: jalan buntu bergaji besar — lima tahun berlalu, nyaman, dan terlalu mahal untuk transisi yang sebenarnya kamu inginkan, karena tidak ada satu pun persinggahan yang mencetak persyaratannya. Protokol dua lensa dari The Pack (kesesuaian hasil + bisa dibatalkan atau tidak) adalah alat penilaiannya; arsitektur inilah yang memasok separuh soal kesesuaian hasil."
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
        "id": "Setahun sekali — di hari ulang tahun, tahun baru, atau hari jadi — buka lagi arsitekturnya selama sembilan puluh menit. Tiga pertanyaan. <b>Apakah kenyataan sudah bersuara?</b> Promosi, reorganisasi, pergeseran pasar, dan preferensi yang baru kamu sadari adalah data; perbarui tujuanmu kalau datanya berkata begitu — direvisi oleh bukti adalah tanda rancangan yang bekerja, bukan gagal. <b>Apakah gerbangnya bergeser?</b> Industri menilai ulang harga keterampilan; pastikan target tahun depan masih membuka transisi itu. <b>Apakah posisi sekarang masih memberi imbal?</b> Kalau dua tinjauan berturut-turut menemukan imbal yang rendah dan tidak ada lagi yang bisa direkayasa, arsitekturnya sendiri sedang memberitahumu bahwa sudah waktunya untuk langkah kedua dari Modul 7. Simpan tinjauan itu di Route Planner, bersebelahan dengan riwayat diagnostikmu."
       }
      }
     ],
     "diagram": {
      "type": "timeline",
      "exhibit": {
       "en": "Exhibit 1: Architecture read backwards — gates define this year's targets.",
       "id": "Peraga 1: Arsitektur yang dibaca mundur — gerbang menentukan target tahun ini."
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
         "id": "Keluarga posisi + level, ditulis dengan pensil"
        }
       },
       {
        "h": {
         "en": "Year 3 · Way-station 2",
         "id": "Tahun 3 · Persinggahan 2"
        },
        "sub": {
         "en": "The role that usually precedes it",
         "id": "Posisi yang biasanya mendahuluinya"
        }
       },
       {
        "h": {
         "en": "Year 1–2 · Way-station 1",
         "id": "Tahun 1–2 · Persinggahan 1"
        },
        "sub": {
         "en": "Often your current role, engineered",
         "id": "Sering kali posisimu sekarang, yang direkayasa"
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
       "id": "Garis waktu dari kanan ke kiri: keluarga posisi tujuan di tahun kelima menentukan persinggahan di tahun ketiga, yang menentukan persinggahan di tahun pertama sampai kedua — sering kali posisi saat ini yang sengaja direkayasa — yang menentukan target aset konkret untuk kuartal ini: keterampilan, hasil, dan hubungan yang harus dibangun sekarang."
      }
     },
     "checks": [
      {
       "q": {
        "en": "An external offer pays 20% more but mints none of your next gate's requirements. The architecture's read?",
        "id": "Sebuah tawaran dari luar membayar 20% lebih tinggi, tetapi tidak mencetak satu pun persyaratan gerbang berikutmu. Apa bacaan arsitekturnya?"
       },
       "options": [
        {
         "en": "Take it — salary compounds too",
         "id": "Ambil — gaji juga bertumbuh berlipat"
        },
        {
         "en": "Score it as a sideways move: unless it opens a different gate you value, the raise buys a well-paid dead end",
         "id": "Nilai sebagai langkah menyamping: kecuali membuka gerbang lain yang kamu hargai, kenaikan gaji itu membeli jalan buntu bergaji besar"
        },
        {
         "en": "Decline all external offers before year three",
         "id": "Tolak semua tawaran dari luar sebelum tahun ketiga"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Pay matters, but the gate test comes first: transitions are bought with assets, and a role that mints none prices you out of the destination later.",
        "id": "Gaji penting, tetapi uji gerbang datang lebih dulu: transisi dibeli dengan aset, dan posisi yang tidak mencetak aset membuatmu terlalu mahal untuk tujuan itu di kemudian hari."
       }
      }
     ],
     "tool": {
      "id": "plan",
      "mode": "readiness",
      "title": {
       "en": "Baseline your architecture",
       "id": "Ukur titik awal arsitekturmu"
      },
      "body": {
       "en": "The readiness diagnostic scores the six dimensions this course trains — your first honest reading of where the gates stand.",
       "id": "Diagnostik kesiapan menilai enam dimensi yang dilatih kursus ini — pembacaan jujur pertamamu tentang di mana gerbang-gerbang itu berdiri."
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
      "id": "Arsitektur gagal di tiga sambungan yang spesifik: tonggak yang tidak pernah didefinisikan, gerbang keputusan yang tidak pernah dijadwalkan, dan garis merah yang tidak pernah ditulis sampai saat sedang dilanggar. Pelajaran ini memasang ketiganya."
     },
     "objectives": [
      {
       "en": "Define verifiable milestones for the next eighteen months.",
       "id": "Mendefinisikan tonggak yang bisa diverifikasi untuk delapan belas bulan ke depan."
      },
      {
       "en": "Schedule decision gates: dates when staying must be re-justified, not assumed.",
       "id": "Menjadwalkan gerbang keputusan: tanggal ketika keputusan untuk bertahan harus dibenarkan ulang, bukan diasumsikan."
      },
      {
       "en": "Write your red lines before any pressure to cross them exists.",
       "id": "Menulis garis merahmu sebelum ada tekanan apa pun untuk melanggarnya."
      }
     ],
     "takeaways": [
      {
       "en": "A milestone you cannot verify is a mood; write them as artefacts and witnesses.",
       "id": "Tonggak yang tidak bisa diverifikasi hanyalah suasana hati; tulis sebagai artefak dan saksi."
      },
      {
       "en": "Decision gates prevent the default decision — drifting — from making itself year after year.",
       "id": "Gerbang keputusan mencegah keputusan bawaan — hanyut — mengambil keputusan untukmu tahun demi tahun."
      },
      {
       "en": "Red lines written in calm weather hold in storms; improvised ethics negotiate themselves down.",
       "id": "Garis merah yang ditulis saat cuaca tenang bertahan dalam badai; etika yang diimprovisasi akan menawar dirinya sendiri sampai turun."
      }
     ],
     "sections": [
      {
       "icon": "flag",
       "h": {
        "en": "Milestones that verify",
        "id": "Tonggak yang bisa diverifikasi"
       },
       "body": {
        "en": "“Grow in my role this year” cannot fail, which is why it cannot succeed. A milestone needs the evidence-rule treatment: <i>own the monthly reporting end-to-end by June, presented to the department head</i>; <i>ship the vendor-comparison analysis and have it cited in the Q3 decision</i>; <i>be the person new joiners are sent to for the data pipeline</i>. Artefact, date, witness. Two or three per half-year is enough — milestones are steering marks, not a to-do list. Log them in the Route Planner's 90-day plans; review them at each plan's end.",
        "id": "“Bertumbuh di posisiku tahun ini” tidak bisa gagal, dan justru karena itu tidak bisa berhasil. Tonggak butuh perlakuan seperti aturan bukti: <i>memegang pelaporan bulanan dari awal sampai akhir pada bulan Juni, dipresentasikan ke kepala departemen</i>; <i>merampungkan analisis perbandingan vendor dan dikutip dalam keputusan kuartal ketiga</i>; <i>menjadi orang yang dituju karyawan baru untuk urusan pipeline data</i>. Artefak, tanggal, saksi. Dua atau tiga tonggak per setengah tahun sudah cukup — tonggak adalah tanda untuk mengemudi, bukan daftar tugas. Catat di rencana 90 hari Route Planner; tinjau di akhir setiap rencana."
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
        "id": "Bertahan di sebuah posisi adalah keputusan, tetapi tidak pernah terasa seperti keputusan — ia yang terjadi ketika tidak ada keputusan yang dibuat. Gerbang keputusan memperbaiki ketimpangan itu: tanggal di kalender (setiap 12 bulan, atau pada momen alami seperti siklus penilaian kinerja) ketika kamu memutuskan ulang secara resmi, tertulis, dengan tiga masukan: imbal aset di periode terakhir (catatan capaian), gerbang arsitekturmu saat ini, dan harga profilmu di pasar (melirik lowongan yang sedang buka — bukan untuk melamar, tetapi untuk kalibrasi). Tiga hasil yang sama-sama jujur: berkomitmen ulang dengan target baru; merekayasa posisinya; atau membuka proses langkah kedua dari Modul 7. Hasil mana pun baik. Melewatkan gerbangnya adalah satu-satunya kegagalan."
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
        "id": "Tulis sekarang, selagi tidak ada yang dipertaruhkan: apa yang tidak akan kamu lakukan demi promosi apa pun — memalsukan, mengambil kredit yang bukan milikmu, diam soal masalah keselamatan, mengorbankan batas minimum kesehatan dari Map 5.1, melewatkan acara keluarga yang penting. Dua sifat membuat garis merah bekerja. Jumlahnya <b>sedikit</b> — tiga sampai lima; daftar yang panjang hanyalah daftar keinginan. Dan <b>sudah diputuskan di muka</b> — intinya justru di situ: ketika ujiannya datang menyamar sebagai bantuan kecil dengan tenggat, keputusannya sudah diambil oleh versi dirimu yang lebih tenang. Orang yang punya garis merah tertulis mengaku momen-momen itu justru lebih mudah, bukan lebih sulit: tidak ada yang perlu dinegosiasikan."
       }
      }
     ],
     "mistakes": {
      "items": [
       {
        "h": {
         "en": "Milestones as feelings",
         "id": "Tonggak yang berupa perasaan"
        },
        "fix": {
         "en": "“Be more confident in meetings” verifies nothing. “Present the monthly numbers twice this quarter” does.",
         "id": "“Lebih percaya diri di rapat” tidak memverifikasi apa pun. “Mempresentasikan angka bulanan dua kali kuartal ini” iya."
        }
       },
       {
        "h": {
         "en": "Gates only when unhappy",
         "id": "Gerbang hanya dibuka saat sedang tidak bahagia"
        },
        "fix": {
         "en": "Unhappiness is a lagging indicator. Scheduled gates catch drift while it is still cheap to correct.",
         "id": "Ketidakbahagiaan adalah indikator yang datang terlambat. Gerbang yang terjadwal menangkap hanyut selagi masih murah untuk dikoreksi."
        }
       },
       {
        "h": {
         "en": "Red lines drafted mid-crisis",
         "id": "Garis merah yang disusun di tengah krisis"
        },
        "fix": {
         "en": "Under pressure, everything is negotiable. Write them this week, in calm, and tell one person who will ask about them.",
         "id": "Di bawah tekanan, semuanya bisa ditawar. Tulis minggu ini, dalam keadaan tenang, dan beri tahu satu orang yang akan menanyakannya padamu."
        }
       }
      ]
     },
     "checks": [
      {
       "q": {
        "en": "What makes a scheduled decision gate different from “I'll leave when it gets bad”?",
        "id": "Apa bedanya gerbang keputusan yang terjadwal dengan “aku akan pergi kalau keadaannya sudah parah”?"
       },
       "options": [
        {
         "en": "Nothing — both lead to the same decision eventually",
         "id": "Tidak ada — keduanya pada akhirnya sampai pada keputusan yang sama"
        },
        {
         "en": "The gate runs on a date with written inputs, so drift gets examined while correction is cheap — “when it gets bad” examines only after years are spent",
         "id": "Gerbang berjalan pada tanggal tertentu dengan masukan tertulis, sehingga hanyut diperiksa selagi koreksinya masih murah — “kalau sudah parah” baru memeriksa setelah tahun-tahun terbuang"
        },
        {
         "en": "Gates are for managers, not individual contributors",
         "id": "Gerbang hanya untuk manajer, bukan untuk kontributor individu"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Feelings lag reality by years in careers. Calendar-driven review with evidence inputs is how builders catch the lag.",
        "id": "Dalam karier, perasaan tertinggal bertahun-tahun dari kenyataan. Tinjauan berdasarkan kalender dengan masukan berupa bukti adalah cara pembangun menangkap ketertinggalan itu."
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
      "id": "Modal karier dibuat konkret: latihan inventaris yang memetakan asetmu saat ini, latihan celah yang membandingkannya dengan gerbang berikutmu, dan latihan imbal yang merekayasa posisimu sekarang — arsitektur modul ini, dijalankan dalam sekali duduk."
     },
     "objectives": [
      {
       "en": "Inventory your current career capital across the four asset classes.",
       "id": "Menginventarisasi modal kariermu saat ini di empat kelas aset."
      },
      {
       "en": "Compute the gap between your inventory and your next transition's gate.",
       "id": "Menghitung celah antara inventarismu dan gerbang transisi berikutmu."
      },
      {
       "en": "Design two moves that raise your current role's asset yield this quarter.",
       "id": "Merancang dua langkah yang menaikkan imbal aset posisimu sekarang, kuartal ini."
      }
     ],
     "takeaways": [
      {
       "en": "An honest inventory is usually smaller than the CV suggests and larger than imposter syndrome claims.",
       "id": "Inventaris yang jujur biasanya lebih kecil daripada kesan yang diberikan CV, dan lebih besar daripada yang diklaim sindrom penipu."
      },
      {
       "en": "Gaps are shopping lists, not verdicts — each maps to a project, a request, or a course.",
       "id": "Celah adalah daftar belanja, bukan vonis — masing-masing bisa dipetakan ke sebuah proyek, permintaan, atau kursus."
      },
      {
       "en": "Yield engineering is a conversation away more often than it feels: managers grant scope to people who ask with a plan.",
       "id": "Merekayasa imbal lebih sering hanya berjarak satu percakapan daripada yang terasa: manajer memberi cakupan kepada orang yang meminta dengan rencana."
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
        "id": "Dua puluh menit, empat kolom: keterampilan (beserta buktinya), hasil (beserta angka dan saksinya), hubungan (siapa yang bersedia menjaminmu, berdasarkan apa), reputasi (kamu dikenal karena apa, sejujurnya). Tulis, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Common findings, all normal: skills without evidence (you can do it, nothing shows it — the fix is an artefact, not more skill); results you never logged and can no longer reconstruct precisely (the win log exists to end this); relationships that are all same-level peers (senior trust takes deliberate building — Module 6); a reputation column that is blank because you never asked (ask two colleagues this week: “what would you say I'm the go-to person for?” — the answers are your current brand, whatever you intended it to be).",
        "id": "Temuan yang lazim, dan semuanya normal: keterampilan tanpa bukti (kamu bisa, tetapi tidak ada yang menunjukkannya — perbaikannya adalah artefak, bukan tambahan keterampilan); hasil yang tidak pernah dicatat dan sekarang tidak bisa lagi direkonstruksi dengan persis (catatan capaian ada untuk mengakhiri hal ini); hubungan yang semuanya dengan rekan selevel (kepercayaan dari senior butuh dibangun dengan sengaja — Modul 6); kolom reputasi yang kosong karena kamu tidak pernah bertanya (tanyai dua kolega minggu ini: “menurutmu, aku jadi orang yang dituju untuk urusan apa?” — jawabannya adalah merekmu saat ini, apa pun yang tadinya kamu niatkan)."
       }
      },
      {
       "h": {
        "en": "Drill 2 — The gap",
        "id": "Latihan 2 — Celah"
       },
       "body": {
        "en": "Write your next way-station's gate as its hiring manager would: three verifiable requirements. Compare against the inventory. Name the two largest gaps, then reveal.",
        "id": "Tulis gerbang persinggahan berikutmu seperti yang akan ditulis manajer perekrutnya: tiga persyaratan yang bisa diverifikasi. Bandingkan dengan inventarismu. Sebutkan dua celah terbesar, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Gap types and their fixes: a <b>skill-depth gap</b> (you have used the tool; the gate needs ownership) maps to volunteering for the next project that exercises it end-to-end; an <b>evidence gap</b> (you have done it; nothing proves it) maps to documentation and a presentation — cheapest gap to close, most commonly ignored; a <b>scope gap</b> (the gate needs numbers bigger than your role offers) maps to Drill 3 or, if the ceiling is structural, to Module 7. Write each gap's fix as a named move with a quarter attached — that list is your development plan, derived rather than wished.",
        "id": "Jenis-jenis celah dan perbaikannya: <b>celah kedalaman keterampilan</b> (kamu pernah memakai alatnya; gerbang menuntut kepemilikan) dipetakan ke mengajukan diri untuk proyek berikutnya yang melatihnya dari awal sampai akhir; <b>celah bukti</b> (kamu sudah pernah melakukannya; tidak ada yang membuktikannya) dipetakan ke dokumentasi dan presentasi — celah termurah untuk ditutup, dan paling sering diabaikan; <b>celah cakupan</b> (gerbang menuntut angka yang lebih besar daripada yang bisa ditawarkan posisimu) dipetakan ke Latihan 3 atau, kalau batas atasnya memang struktural, ke Modul 7. Tulis perbaikan tiap celah sebagai langkah yang punya nama dengan kuartal yang jelas — daftar itu adalah rencana pengembanganmu, yang diturunkan dari analisis, bukan sekadar diharapkan."
       }
      },
      {
       "h": {
        "en": "Drill 3 — Yield engineering",
        "id": "Latihan 3 — Merekayasa imbal"
       },
       "body": {
        "en": "Design two concrete moves that raise your current role's asset yield: one you can do without permission, one that needs your manager's yes. Script the manager conversation. Then reveal.",
        "id": "Rancang dua langkah konkret yang menaikkan imbal aset posisimu sekarang: satu yang bisa kamu lakukan tanpa izin, satu yang butuh persetujuan manajermu. Tulis naskah percakapan dengan manajer itu. Lalu buka tinjauan."
       },
       "debrief": {
        "en": "Permissionless model: document and standardise something you already do until it becomes the team's artefact with your name in the header — yield minted from existing work. Permissioned model, scripted: “I'd like to take ownership of X next quarter. It needs doing [evidence], I've handled the smaller version [evidence], and I'd keep my current commitments whole — could we try it for one quarter?” The anatomy: a real team need, proof of readiness, protection of existing delivery, and a bounded trial. Managers say yes to bounded trials with protected delivery far more often than to open-ended ambition — the ask itself demonstrates the judgment being requested.",
        "id": "Contoh tanpa izin: dokumentasikan dan bakukan sesuatu yang memang sudah kamu kerjakan, sampai menjadi artefak milik tim dengan namamu di bagian atasnya — imbal yang dicetak dari pekerjaan yang sudah ada. Contoh yang butuh izin, dengan naskah: “Saya ingin memegang X di kuartal depan. Itu memang perlu dikerjakan [bukti], saya sudah menangani versi kecilnya [bukti], dan komitmen saya yang sekarang akan tetap utuh — bisakah kita coba selama satu kuartal?” Anatominya: kebutuhan tim yang nyata, bukti kesiapan, perlindungan atas pekerjaan yang sudah berjalan, dan uji coba yang berbatas. Manajer jauh lebih sering berkata ya pada uji coba berbatas yang tetap melindungi pekerjaan yang ada daripada pada ambisi tanpa batas — permintaannya sendiri sudah memperagakan pertimbangan yang sedang diminta."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Your inventory shows real skills but almost no evidence artefacts. What does this module call that?",
        "id": "Inventarismu menunjukkan keterampilan yang sungguhan, tetapi hampir tanpa artefak bukti. Modul ini menyebutnya apa?"
       },
       "options": [
        {
         "en": "Imposter syndrome — the skills probably are not real",
         "id": "Sindrom penipu — keterampilannya mungkin memang tidak nyata"
        },
        {
         "en": "The cheapest gap to close: capability exists, legibility does not — documentation and presentation mint the evidence",
         "id": "Celah termurah untuk ditutup: kemampuannya ada, yang belum ada adalah keterbacaannya — dokumentasi dan presentasi mencetak buktinya"
        },
        {
         "en": "A reason to change roles immediately",
         "id": "Alasan untuk segera pindah posisi"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Careers are advanced by verifiable assets. Skill without evidence is real to you and invisible to every gate — and visibility is manufacturable this quarter.",
        "id": "Karier dimajukan oleh aset yang bisa diverifikasi. Keterampilan tanpa bukti nyata bagimu tetapi tidak terlihat bagi setiap gerbang — dan keterlihatan itu bisa kamu produksi kuartal ini."
       }
      }
     ],
     "tool": {
      "id": "plan",
      "mode": "plan",
      "title": {
       "en": "Turn the drills into a plan",
       "id": "Ubah latihannya menjadi rencana"
      },
      "body": {
       "en": "Load your gap fixes and yield moves into a 90-day plan — three phases, tracked weekly, reviewed at the end.",
       "id": "Masukkan perbaikan celah dan langkah-langkah imbalmu ke dalam rencana 90 hari — tiga fase, dilacak setiap minggu, ditinjau di akhir."
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
    "id": "Permainan Kinerja"
   },
   "overview": {
    "en": "Module 2 of The Route focuses on the performance game. Work through the lessons in order — each builds on the last.",
    "id": "Modul 2 The Route berfokus pada permainan kinerja. Kerjakan pelajarannya secara berurutan — setiap pelajaran dibangun di atas pelajaran sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply the performance game to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu bisa menerapkan permainan kinerja pada keputusan kariermu sendiri, dengan metode yang konkret dan bisa diulang."
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
      "id": "Setiap organisasi menjalankan dua sistem pengukuran: yang resmi di templat penilaian kinerja, dan yang benar-benar beroperasi di kepala manajermu. Orang berkinerja tinggi membaca keduanya. Pelajaran ini mengajarkan cara membacanya — apa yang sebenarnya diukur, oleh siapa, dengan kalender seperti apa."
     },
     "objectives": [
      {
       "en": "Decode your organisation's official and operating measurement systems.",
       "id": "Membaca sistem pengukuran resmi dan sistem pengukuran operasional di organisasimu."
      },
      {
       "en": "Identify your manager's scoreboard: what they are measured on, and how you show up in it.",
       "id": "Mengenali papan skor manajermu: mereka diukur berdasarkan apa, dan bagaimana kamu muncul di dalamnya."
      },
      {
       "en": "Align your quarter's effort with what is measured — without becoming a metric gamer.",
       "id": "Menyelaraskan usaha kuartal ini dengan apa yang diukur — tanpa menjadi pemain metrik."
      }
     ],
     "takeaways": [
      {
       "en": "Working hard on unmeasured things is a donation; know the scoreboard before choosing your effort.",
       "id": "Bekerja keras pada hal yang tidak diukur adalah sumbangan; kenali papan skornya sebelum memilih ke mana usahamu pergi."
      },
      {
       "en": "Your manager's scoreboard is your shadow scoreboard: their goals price your contributions.",
       "id": "Papan skor manajermu adalah papan skor bayanganmu: tujuan merekalah yang memberi harga pada kontribusimu."
      },
      {
       "en": "Alignment is not gaming: gaming optimises the number against the mission; alignment serves both.",
       "id": "Menyelaraskan bukan mengakali: mengakali mengoptimalkan angka dengan mengorbankan misi; menyelaraskan melayani keduanya."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "The two systems",
        "id": "Dua sistemnya"
       },
       "body": {
        "en": "The <b>official system</b> lives in HR templates: competencies, ratings, calibration meetings on a known calendar. Learn it precisely — the criteria wording, who rates, when calibration happens — because vague awareness of the official system is the most common early-career blind spot. The <b>operating system</b> is what actually moves ratings inside the room: which projects the leadership actually watches, what your skip-level hears about you, which behaviours are punished regardless of the handbook. It is discovered by observation and by asking safe versions of sharp questions: “which of our team's deliverables matter most upstairs this half?” Both systems are real; only one is written down.",
        "id": "<b>Sistem resmi</b> tinggal di templat HR: kompetensi, peringkat, rapat kalibrasi dengan kalender yang diketahui. Pelajari dengan teliti — bunyi persis kriterianya, siapa yang menilai, kapan kalibrasi terjadi — karena kesadaran yang samar tentang sistem resmi adalah titik buta paling umum di awal karier. <b>Sistem operasional</b> adalah yang benar-benar menggerakkan peringkat di dalam ruangan: proyek mana yang sungguh-sungguh diperhatikan pimpinan, apa yang didengar atasan dari atasanmu tentang dirimu, perilaku mana yang dihukum apa pun kata buku panduan. Sistem ini ditemukan lewat pengamatan, dan lewat versi aman dari pertanyaan-pertanyaan tajam: “dari hasil kerja tim kita, mana yang paling diperhatikan di atas semester ini?” Kedua sistem itu nyata; hanya satu yang tertulis."
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
        "id": "Manajermu juga sedang diukur — dari hasil kerja timnya, dari angka-angka tertentu, dari masalah yang tidak boleh sampai ke atasan mereka. Pelajari papan skor itu: apa yang mereka janjikan untuk semester ini? Metrik mereka mana yang merah? Apa yang ditanyakan atasan mereka kepada mereka? Kamu tidak butuh spionase; satu percakapan jujur sudah cukup — “apa yang menjadi tanggungan Bapak/Ibu kuartal ini, dan di bagian mana pekerjaan saya bisa membantu menggerakkannya?” Kontribusi yang menggerakkan metrik merah manajermu dihargai dua kali lipat; pekerjaan yang menciptakan masalah yang harus mereka jelaskan ke atas dihargai negatif, sebagus apa pun kualitasnya sendiri. Ini bukan politik — ini soal tahu ke arah mana gravitasi organisasi menarik."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "Alignment without gaming",
        "id": "Menyelaraskan tanpa mengakali"
       },
       "body": {
        "en": "The line between reading the scoreboard and gaming it: gaming optimises the measured number at the mission's expense — sandbagging targets, cherry-picking easy tickets, claiming adjacent credit. It works briefly and is always eventually visible, at which point it reprices everything you did before. Alignment chooses, among genuinely valuable work, the valuable work that is also measured — and makes the unmeasured valuable work legible (Module 2.2) so the system can price it. When you find truly valuable work that the system structurally cannot see, that is a conversation with your manager, not a silent donation: “X matters and isn't visible anywhere — can we put it on the scoreboard?”",
        "id": "Garis pemisah antara membaca papan skor dan mengakalinya: mengakali berarti mengoptimalkan angka yang diukur dengan mengorbankan misi — menurunkan target supaya mudah dicapai, memilih tiket yang gampang, mengklaim kredit dari pekerjaan di sebelahmu. Cara itu berhasil sebentar, dan selalu terlihat pada akhirnya — dan begitu terlihat, semua yang kamu kerjakan sebelumnya ikut dinilai ulang. Menyelaraskan berarti memilih, di antara pekerjaan yang benar-benar bernilai, pekerjaan bernilai yang juga diukur — dan membuat pekerjaan bernilai yang tidak diukur menjadi terlihat (Modul 2.2), supaya sistem bisa memberinya harga. Kalau kamu menemukan pekerjaan yang benar-benar bernilai tetapi secara struktural tidak bisa dilihat sistem, itu bahan percakapan dengan manajermu, bukan sumbangan diam-diam: “X penting dan tidak terlihat di mana pun — bisakah kita masukkan ke papan skor?”"
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "You discover your manager's most-watched metric is customer response time, while you have been perfecting internal documentation. The lesson's move?",
        "id": "Kamu menemukan bahwa metrik yang paling diawasi manajermu adalah waktu respons ke pelanggan, sementara selama ini kamu sibuk menyempurnakan dokumentasi internal. Apa langkah menurut pelajaran ini?"
       },
       "options": [
        {
         "en": "Continue — documentation is objectively valuable",
         "id": "Lanjutkan — dokumentasi itu bernilai secara objektif"
        },
        {
         "en": "Rebalance: move visible effort toward the watched metric, and make the documentation's value legible in its terms (“cuts onboarding, protects response times”)",
         "id": "Seimbangkan ulang: geser usaha yang terlihat ke metrik yang diawasi, dan buat nilai dokumentasinya terbaca dalam bahasa metrik itu (“memangkas waktu onboarding, menjaga waktu respons”)"
        },
        {
         "en": "Stop documenting — only measured work matters",
         "id": "Berhenti mendokumentasikan — hanya pekerjaan yang diukur yang penting"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Both matter; gravity decides pricing. Alignment serves the mission and the scoreboard at once — often by translating one into the other's language.",
        "id": "Keduanya penting; gravitasilah yang menentukan harganya. Menyelaraskan berarti melayani misi dan papan skor sekaligus — sering kali dengan menerjemahkan yang satu ke bahasa yang lain."
       }
      }
     ],
     "quote": {
      "en": "Working hard on unmeasured things is a donation.",
      "id": "Bekerja keras pada hal yang tidak diukur adalah sumbangan."
     }
    },
    {
     "n": "2.2",
     "title": {
      "en": "Visible Contribution Without Self-Promotion",
      "id": "Kontribusi yang Terlihat, Tanpa Promosi Diri"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Excellent work that nobody can see gets priced at zero — and the fix is not self-promotion, which everyone can smell. This lesson builds contribution legibility: delivery habits, artefacts and communication rhythms that let your work speak in rooms you are not in.",
      "id": "Pekerjaan hebat yang tidak terlihat siapa pun dihargai nol — dan obatnya bukan promosi diri, yang bisa dicium semua orang. Pelajaran ini membangun keterbacaan kontribusi: kebiasaan menuntaskan, artefak, dan ritme komunikasi yang membuat pekerjaanmu berbicara di ruangan-ruangan yang tidak kamu hadiri."
     },
     "objectives": [
      {
       "en": "Adopt the Friday one-liner and other legibility rhythms.",
       "id": "Membiasakan laporan satu baris tiap Jumat dan ritme keterbacaan lainnya."
      },
      {
       "en": "Convert finished work into artefacts that travel without you.",
       "id": "Mengubah pekerjaan yang selesai menjadi artefak yang bisa berkelana tanpa kamu."
      },
      {
       "en": "Credit generously and accurately — the legibility habit that compounds fastest.",
       "id": "Memberi kredit dengan murah hati dan akurat — kebiasaan keterbacaan yang paling cepat berlipat."
      }
     ],
     "takeaways": [
      {
       "en": "Legibility is service, not bragging: your manager needs your work visible to defend the team's results.",
       "id": "Keterbacaan adalah bentuk pelayanan, bukan pamer: manajermu butuh pekerjaanmu terlihat supaya bisa membela hasil timnya."
      },
      {
       "en": "Artefacts outperform announcements: a document with your name travels further than any status update.",
       "id": "Artefak mengalahkan pengumuman: dokumen yang mencantumkan namamu berkelana lebih jauh daripada laporan status mana pun."
      },
      {
       "en": "Generous credit makes your reports trustworthy — and trustworthy reporting is read, which is the whole point.",
       "id": "Kredit yang murah hati membuat laporanmu bisa dipercaya — dan laporan yang dipercaya itulah yang dibaca; itulah intinya."
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
        "id": "<b>Laporan satu baris tiap Jumat</b> ke manajermu: X selesai, berikutnya Y, terhambat di Z — lima belas kata yang lama-lama menjadi jawaban yang selalu terbarui atas pertanyaan “dia sebenarnya mengerjakan apa?”. <b>Artefak rapat</b>: setiap kali kamu presentasi, ada dokumen satu halaman yang tersisa setelahnya; kontribusi yang hanya lisan menguap sebelum hari Selasa. <b>Catatan tonggak</b>: setiap kali sesuatu dirilis, satu pesan singkat ke pemangku kepentingan — apa yang berubah, apa artinya bagi mereka, siapa yang membantu. Semua ini bukan kebisingan selama mengikuti disiplin piramida dari The Map: buka dengan apa yang dibutuhkan pembaca, buat lebih pendek dari yang mereka duga, berhenti. Volume yang mengganggu adalah teater status; volume yang melayani adalah informasi yang relevan untuk keputusan, dan tiba sebelum diminta."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "Artefacts that travel",
        "id": "Artefak yang berkelana"
       },
       "body": {
        "en": "Work becomes legible when it takes a form that circulates: the analysis becomes a named document in the shared drive; the process you fixed becomes the runbook new joiners receive; the model becomes a dashboard with a footer crediting its author; the incident you resolved becomes a post-mortem others learn from. Two properties matter: <b>your name in the artefact</b> (headers, footers, commit history — factual, not flashy) and <b>usefulness to someone next quarter</b>, because artefacts are re-encountered at exactly the moments people form opinions about who is valuable. One travelling artefact per quarter is a realistic and sufficient rate.",
        "id": "Pekerjaan menjadi terbaca ketika mengambil bentuk yang bisa beredar: analisis menjadi dokumen bernama di drive bersama; proses yang kamu perbaiki menjadi panduan yang diterima karyawan baru; model menjadi dasbor dengan catatan kaki yang menyebut pembuatnya; insiden yang kamu selesaikan menjadi laporan pasca-insiden yang dipelajari orang lain. Dua sifat yang penting: <b>namamu ada di dalam artefak itu</b> (di bagian atas, catatan kaki, riwayat commit — faktual, bukan norak) dan <b>berguna bagi seseorang di kuartal berikutnya</b>, karena artefak ditemukan kembali persis pada momen-momen ketika orang membentuk pendapat tentang siapa yang berharga. Satu artefak yang berkelana per kuartal adalah laju yang realistis dan sudah cukup."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "Credit, the multiplier",
        "id": "Kredit, sang pengganda"
       },
       "body": {
        "en": "Name who helped, precisely, in every report and artefact: “the reconciliation used Dina's cleaning script”. Three effects compound. Your reporting becomes trusted, because people can verify the shared credit — and trusted reports are the ones that get read. Colleagues become allies who reciprocate legibility — they name you in rooms you are not in. And credit given never subtracts: the person who wrote “Dina's script” is remembered as the one who shipped the reconciliation and the one who is safe to work with. Credit hoarding reads instantly and prices everything you report afterwards at a discount.",
        "id": "Sebutkan siapa yang membantu, dengan tepat, di setiap laporan dan artefak: “rekonsiliasi ini memakai skrip pembersih data milik Dina”. Tiga efek yang saling melipatgandakan. Laporanmu menjadi bisa dipercaya, karena orang bisa memverifikasi kredit yang kamu bagi — dan laporan yang dipercaya itulah yang dibaca. Rekan-rekan menjadi sekutu yang membalas keterbacaan — mereka menyebut namamu di ruangan-ruangan yang tidak kamu hadiri. Dan kredit yang diberikan tidak pernah mengurangi apa pun: orang yang menulis “skrip milik Dina” diingat sebagai orang yang merilis rekonsiliasi itu, sekaligus orang yang aman diajak bekerja. Menimbun kredit langsung terbaca, dan membuat semua laporanmu sesudahnya dihargai dengan diskon."
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
        "id": "Kamu mengotomatiskan sebuah laporan mingguan, menghemat sekitar 4 jam per minggu untuk tim"
       },
       "weak": {
        "en": "(In the all-hands, unprompted) “I just want to highlight that I personally built an automation that saves us a huge amount of time every single week. It took a lot of late nights but that's just how I work.”",
        "id": "(Di rapat seluruh divisi, tanpa diminta) “Saya cuma ingin menyoroti bahwa saya secara pribadi membangun otomasi yang menghemat sangat banyak waktu kita setiap minggu. Butuh banyak lembur, tapi memang begitulah cara saya bekerja.”"
       },
       "strong": {
        "en": "(Friday one-liner) “Shipped: weekly report automation — runs Mondays 7am, ~4 hrs/week saved, doc linked. Rina's template made the export step trivial. Next: applying it to the finance version if useful.”",
        "id": "(Laporan satu baris hari Jumat) “Selesai: otomasi laporan mingguan — berjalan tiap Senin pukul 7 pagi, hemat ~4 jam/minggu, dokumennya tertaut. Templat dari Rina membuat langkah ekspornya jadi sepele. Berikutnya: menerapkannya ke versi keuangan, kalau berguna.”"
       },
       "why": {
        "en": "Same fact, opposite reception: the strong version informs a decision-maker, credits accurately, attaches an artefact, and offers the next value — legibility as service.",
        "id": "Fakta yang sama, sambutan yang berlawanan: versi yang kuat memberi informasi kepada pengambil keputusan, memberi kredit dengan akurat, melampirkan artefak, dan menawarkan nilai berikutnya — keterbacaan sebagai bentuk pelayanan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does generous, precise credit make your own work more visible rather than less?",
        "id": "Mengapa kredit yang murah hati dan tepat justru membuat pekerjaanmu sendiri lebih terlihat, bukan berkurang?"
       },
       "options": [
        {
         "en": "It does not — credit is zero-sum",
         "id": "Tidak begitu — kredit itu permainan jumlah tetap"
        },
        {
         "en": "It makes your reporting verifiably trustworthy, so it gets read — and it recruits allies who name you in rooms you are not in",
         "id": "Karena laporanmu jadi bisa dipercaya dan diverifikasi, sehingga dibaca — dan itu merekrut sekutu yang menyebut namamu di ruangan yang tidak kamu hadiri"
        },
        {
         "en": "Managers require credit sections in reports",
         "id": "Karena manajer mewajibkan bagian kredit di dalam laporan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Legibility runs on trust and distribution. Accurate credit buys both; hoarding destroys both.",
        "id": "Keterbacaan berjalan di atas kepercayaan dan penyebaran. Kredit yang akurat membeli keduanya; menimbun kredit menghancurkan keduanya."
       }
      }
     ]
    },
    {
     "n": "2.3",
     "title": {
      "en": "Seeking and Acting on Developmental Feedback",
      "id": "Mencari dan Menindaklanjuti Umpan Balik untuk Berkembang"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Feedback is the highest-grade fuel a career can burn, and most professionals receive almost none after probation — not because nobody has any, but because nobody volunteers it. This lesson builds the machinery for extracting, absorbing and acting on developmental feedback.",
      "id": "Umpan balik adalah bahan bakar berkualitas tertinggi yang bisa dibakar sebuah karier, dan kebanyakan profesional nyaris tidak menerimanya lagi setelah masa percobaan — bukan karena tidak ada yang punya, tetapi karena tidak ada yang menawarkannya tanpa diminta. Pelajaran ini membangun mesin untuk menggali, menyerap, dan menindaklanjuti umpan balik untuk berkembang."
     },
     "objectives": [
      {
       "en": "Ask questions that produce specific feedback instead of polite reassurance.",
       "id": "Mengajukan pertanyaan yang menghasilkan umpan balik spesifik, bukan penghiburan yang sopan."
      },
      {
       "en": "Receive hard feedback without defending, deflecting or collapsing.",
       "id": "Menerima umpan balik yang keras tanpa membela diri, mengelak, atau runtuh."
      },
      {
       "en": "Close the loop visibly so feedback keeps flowing to you.",
       "id": "Menutup putarannya secara terlihat, supaya umpan balik terus mengalir kepadamu."
      }
     ],
     "takeaways": [
      {
       "en": "“Any feedback?” harvests reassurance; “what one thing would make my reports more useful?” harvests information.",
       "id": "“Ada masukan?” memanen penghiburan; “satu hal apa yang akan membuat laporan saya lebih berguna?” memanen informasi."
      },
      {
       "en": "Your reaction to the last feedback determines whether you receive the next.",
       "id": "Reaksimu terhadap umpan balik yang terakhir menentukan apakah kamu akan menerima yang berikutnya."
      },
      {
       "en": "Feedback acted on visibly converts the giver into an investor in your growth.",
       "id": "Umpan balik yang ditindaklanjuti secara terlihat mengubah pemberinya menjadi orang yang ikut berinvestasi pada pertumbuhanmu."
      }
     ],
     "sections": [
      {
       "icon": "target",
       "h": {
        "en": "Extracting the specific",
        "id": "Menggali yang spesifik"
       },
       "body": {
        "en": "General questions trigger social politeness; specific questions bypass it. Ask about an artefact: “in yesterday's deck, where did you want more or less?” Ask for one thing: “what single change would most improve how I run these calls?” Ask forward: “what would the next level of this look like?” Ask the negative safely: “what should I stop doing that I probably don't notice?” And ask the right people — the peer who watches you in meetings sees what your manager cannot. Cadence: one specific ask per fortnight beats an annual fishing trip; small regular questions also train your circle that you actually want answers.",
        "id": "Pertanyaan umum memicu basa-basi; pertanyaan spesifik melewatinya. Tanyakan tentang sebuah artefak: “di dek kemarin, di bagian mana Anda ingin lebih banyak, atau lebih sedikit?” Minta satu hal: “satu perubahan apa yang paling akan memperbaiki cara saya memimpin panggilan-panggilan ini?” Tanyakan ke depan: “seperti apa level berikutnya dari hal ini?” Tanyakan hal negatif dengan aman: “apa yang sebaiknya saya hentikan, yang mungkin tidak saya sadari?” Dan tanyakan kepada orang yang tepat — rekan yang melihatmu di rapat menangkap hal-hal yang tidak bisa dilihat manajermu. Iramanya: satu permintaan spesifik setiap dua minggu mengalahkan ekspedisi memancing setahun sekali; pertanyaan kecil yang teratur juga melatih lingkaranmu bahwa kamu memang sungguh-sungguh ingin jawaban."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Receiving under fire",
        "id": "Menerima di bawah tekanan"
       },
       "body": {
        "en": "Hard feedback triggers defence circuitry in everyone. The trained response has three beats. <b>Hold:</b> do not answer the content for the first breath — say “tell me more about that” instead; the extra sentences almost always soften and specify the message. <b>Split:</b> separate the data (what they observed) from the story (their interpretation) from your worth (not on the table). You can accept the data, negotiate the story, and leave your worth out of the room. <b>Thank and take it away:</b> “that's useful — let me sit with it and come back Thursday” beats both instant agreement and instant rebuttal; considered responses are also a professional signal in themselves. If the feedback was delivered badly — public, personal, exaggerated — the data may still be gold; extract it, and address the delivery separately if the relationship warrants.",
        "id": "Umpan balik yang keras memicu sirkuit pertahanan diri pada semua orang. Respons yang terlatih punya tiga ketukan. <b>Tahan:</b> jangan jawab isinya pada tarikan napas pertama — katakan “coba ceritakan lebih jauh” sebagai gantinya; kalimat-kalimat tambahan itu hampir selalu melunakkan dan memperjelas pesannya. <b>Pisahkan:</b> bedakan data (apa yang mereka amati) dari cerita (tafsiran mereka) dari harga dirimu (yang tidak sedang dibahas). Kamu bisa menerima datanya, menegosiasikan ceritanya, dan meninggalkan harga dirimu di luar ruangan. <b>Ucapkan terima kasih, lalu bawa pulang:</b> “itu berguna — saya endapkan dulu dan saya kembali hari Kamis” mengalahkan persetujuan seketika maupun bantahan seketika; respons yang dipertimbangkan juga merupakan sinyal profesional tersendiri. Kalau umpan baliknya disampaikan dengan buruk — di depan umum, menyerang pribadi, dilebih-lebihkan — datanya mungkin tetap emas; gali datanya, dan bahas cara penyampaiannya secara terpisah kalau hubungannya memang layak."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "Closing the loop",
        "id": "Menutup putarannya"
       },
       "body": {
        "en": "Feedback dies when givers never learn what happened to it. The loop-closer: act on one concrete piece within two weeks, then tell the giver — “you said my updates buried the ask; I've led with it since, and approvals are coming back same-day.” This does three things: it improves the actual work; it converts the giver into someone invested in your trajectory (people water plants they have seen grow); and it marks you, accurately, as the rare colleague on whom feedback is not wasted — which is the exact reputation that makes seniors spend their scarce candour on you. One visible loop per month compounds into a private advisory board nobody else on your level has.",
        "id": "Umpan balik mati ketika pemberinya tidak pernah tahu apa yang terjadi setelahnya. Penutup putaran: tindak lanjuti satu hal konkret dalam dua minggu, lalu beri tahu pemberinya — “Anda bilang laporan saya mengubur permintaannya; sejak itu saya taruh permintaan di paling depan, dan persetujuan sekarang kembali di hari yang sama.” Ini melakukan tiga hal: memperbaiki pekerjaannya sendiri; mengubah pemberi umpan balik menjadi orang yang ikut berinvestasi pada lintasanmu (orang menyiram tanaman yang pernah mereka lihat tumbuh); dan menandaimu, dengan tepat, sebagai rekan langka yang umpan baliknya tidak sia-sia — persis reputasi yang membuat para senior rela menghabiskan keterusterangan mereka yang langka untukmu. Satu putaran yang terlihat setiap bulan berlipat menjadi dewan penasihat pribadi yang tidak dimiliki siapa pun di levelmu."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A senior says, in front of others, “your analysis missed the obvious seasonal effect — sloppy work.” The trained first move?",
        "id": "Seorang senior berkata, di depan orang lain, “analisismu melewatkan efek musiman yang sudah jelas — kerja yang ceroboh.” Langkah pertama yang terlatih?"
       },
       "options": [
        {
         "en": "Defend the methodology immediately — public claims need public answers",
         "id": "Langsung bela metodologinya — klaim di depan umum butuh jawaban di depan umum"
        },
        {
         "en": "Hold and split: “let me look at the seasonal point and come back to you today” — take the data, skip the verdict, handle the delivery later if needed",
         "id": "Tahan dan pisahkan: “saya periksa dulu poin musimannya dan saya kembali ke Anda hari ini” — ambil datanya, lewati vonisnya, urus cara penyampaiannya nanti kalau perlu"
        },
        {
         "en": "Apologise comprehensively for the sloppiness",
         "id": "Minta maaf panjang lebar atas kecerobohannya"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The seasonal point may be real gold; “sloppy” is a story you need not sign. Composure plus follow-through wins the room more than any instant rebuttal.",
        "id": "Poin musiman itu mungkin memang emas; “ceroboh” adalah cerita yang tidak perlu kamu tanda tangani. Ketenangan plus tindak lanjut memenangkan ruangan lebih daripada bantahan seketika mana pun."
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
       "id": "Sebuah penilaian dari rekan baru saja menyebutmu “sulit diajak kolaborasi”. Tiga titik keputusan di pelatih skenario — setiap pilihan dijawab berdasarkan kerangka dari pelajaran ini."
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
      "id": "Kinerja Tinggi yang Berkelanjutan"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "High performance that costs your health is a loan against the very asset producing it. This closing lesson drills the sustainability mechanics — load shaping, recovery discipline, early-warning response — on three scenarios every first-year professional eventually meets.",
      "id": "Kinerja tinggi yang mengorbankan kesehatanmu adalah utang yang ditarik dari aset yang justru menghasilkannya. Pelajaran penutup ini melatih mekanisme keberlanjutan — mengatur beban, disiplin pemulihan, respons terhadap peringatan dini — lewat tiga skenario yang pada akhirnya ditemui setiap profesional di tahun pertamanya."
     },
     "objectives": [
      {
       "en": "Shape workload with the three levers: sequence, scope, and stated capacity.",
       "id": "Mengatur beban kerja dengan tiga tuas: urutan, cakupan, dan kapasitas yang disampaikan."
      },
      {
       "en": "Protect the recovery floor from Map 5.1 inside a demanding job.",
       "id": "Melindungi batas minimum pemulihan dari Map 5.1 di tengah pekerjaan yang menuntut."
      },
      {
       "en": "Respond to overload signals with the subtract-then-talk protocol.",
       "id": "Merespons sinyal kelebihan beban dengan protokol kurangi-dulu-lalu-bicara."
      }
     ],
     "takeaways": [
      {
       "en": "Sustainable pace is a professional skill read by managers, not a private weakness to hide.",
       "id": "Tempo yang berkelanjutan adalah keterampilan profesional yang dibaca manajer, bukan kelemahan pribadi yang harus disembunyikan."
      },
      {
       "en": "Saying yes to everything is not commitment; it is unpriced risk your team discovers at the worst time.",
       "id": "Mengiyakan segalanya bukan komitmen; itu risiko yang belum dihitung, dan timmu akan menemukannya di saat yang paling buruk."
      },
      {
       "en": "The floor never goes to zero — six hours instead of seven, one walk instead of two, never none.",
       "id": "Batas minimum tidak pernah turun ke nol — enam jam alih-alih tujuh, satu kali jalan kaki alih-alih dua, tidak pernah nol."
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Scenario 1 — The pile-on",
        "id": "Skenario 1 — Ditimpa tugas baru"
       },
       "body": {
        "en": "You carry two projects. Your manager adds a third, due the same month, saying “I know it's a lot”. Script your response, then reveal.",
        "id": "Kamu memegang dua proyek. Manajermu menambahkan proyek ketiga, dengan tenggat di bulan yang sama, sambil berkata “saya tahu ini banyak”. Tulis naskah responsmu, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Model: “Happy to take it. Here's my current load: A ships the 15th, B needs ~10 hours/week until month-end. For C by the 30th, something moves — I could deliver A as planned and shift B's deadline a week, or hand B's data-pull to Sari if she has room. Which trade fits the team best?” The anatomy: yes to the mission, visible arithmetic of reality, two concrete trades, decision returned to its owner. What junior professionals do instead — silent absorption — reads as capacity until it detonates in week four, damaging exactly the reliability it was protecting. Stated capacity is not weakness; it is the information your manager's planning runs on.",
        "id": "Contoh: “Siap mengambilnya. Ini beban saya sekarang: A rilis tanggal 15, B butuh sekitar 10 jam per minggu sampai akhir bulan. Supaya C selesai tanggal 30, ada yang harus bergeser — saya bisa merilis A sesuai rencana dan menggeser tenggat B satu minggu, atau menyerahkan bagian tarik data di B ke Sari kalau dia ada waktu. Pertukaran mana yang paling pas untuk tim?” Anatominya: ya pada misinya, hitungan nyata yang terlihat, dua pertukaran yang konkret, keputusan dikembalikan ke pemiliknya. Yang biasanya dilakukan profesional junior — menyerap dalam diam — terbaca sebagai kapasitas sampai meledak di minggu keempat, dan merusak persis keandalan yang tadinya ingin dilindungi. Kapasitas yang disampaikan bukan kelemahan; itu informasi yang menjadi bahan perencanaan manajermu."
       }
      },
      {
       "h": {
        "en": "Scenario 2 — The permanent sprint",
        "id": "Skenario 2 — Sprint yang tidak pernah berakhir"
       },
       "body": {
        "en": "Month three of “crunch” with no end date. Sleep is eroding; the exercise slot vanished; Sunday dread has appeared. Design your response, then reveal.",
        "id": "Bulan ketiga masa “kejar tayang” tanpa tanggal akhir. Tidur terkikis; jadwal olahraga lenyap; rasa cemas di Minggu malam mulai muncul. Rancang responsmu, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Two moves in order. <b>Restore the floor unilaterally:</b> the shrunken protocol from Map 5.1 — a defended sleep window even if shorter, movement snacks, one real recovery block weekly — requires no permission and reverses the performance decay that made the crunch feel endless. <b>Then convert the sprint into a project:</b> to your manager — “we've been in crunch twelve weeks; sustained like this my error rate climbs. Can we define what ends it — a date, a deliverable, or a scope cut — and what drops meanwhile?” Crunches persist because nobody names their exit condition; the person who names it professionally is usually thanked, not punished. If leadership's answer is that the sprint is simply the culture — that is data for Module 7, collected calmly.",
        "id": "Dua langkah, berurutan. <b>Pulihkan batas minimum secara sepihak:</b> protokol versi ringkas dari Map 5.1 — jam tidur yang dijaga meskipun lebih pendek, gerak-gerak kecil di sela kerja, satu blok pemulihan sungguhan setiap minggu — tidak butuh izin siapa pun, dan membalikkan penurunan kinerja yang membuat masa kejar tayang terasa tanpa akhir. <b>Lalu ubah sprint itu menjadi proyek:</b> kepada manajermu — “kita sudah kejar tayang dua belas minggu; kalau berlanjut begini, tingkat kesalahan saya naik. Bisakah kita tetapkan apa yang mengakhirinya — sebuah tanggal, sebuah hasil, atau pemangkasan cakupan — dan apa yang dilepas sementara?” Masa kejar tayang bertahan karena tidak ada yang menyebutkan syarat berakhirnya; orang yang menyebutkannya secara profesional biasanya justru diberi terima kasih, bukan dihukum. Kalau jawaban pimpinan adalah bahwa sprint memang budayanya — itu data untuk Modul 7, yang kamu kumpulkan dengan tenang."
       }
      },
      {
       "h": {
        "en": "Scenario 3 — The early warnings",
        "id": "Skenario 3 — Peringatan dini"
       },
       "body": {
        "en": "A friend at another company describes their last month: unrefreshing sleep, snapping at small things, skipping the futsal group they love, working weekends to “catch up” without catching up. What do you tell them? Then reveal.",
        "id": "Seorang teman di perusahaan lain menceritakan bulan terakhirnya: tidur yang tidak menyegarkan, mudah tersulut oleh hal-hal kecil, melewatkan grup futsal yang ia sukai, bekerja di akhir pekan untuk “mengejar ketertinggalan” tanpa pernah benar-benar terkejar. Apa yang kamu katakan kepadanya? Lalu buka tinjauan."
       },
       "debrief": {
        "en": "The trio — non-restorative sleep, irritability, social withdrawal — is Map 5.1's early-warning signature, arriving weeks before real trouble. The protocol you would give them is the one to keep for yourself: <b>subtract first</b> (drop one commitment for two weeks, defend the sleep window, return to the futsal group — connection is treatment, not reward) and <b>then talk</b> — a friend, a mentor, and if low mood or hopelessness persists most days for two weeks or more, a professional, exactly as one would see a doctor for a fracture. Handling this early is a career skill with compounding returns: performers who last decades are the ones who learned to read their own gauges in year one.",
        "id": "Tiga hal itu — tidur yang tidak memulihkan, mudah tersulut, menarik diri dari pergaulan — adalah tanda peringatan dini dari Map 5.1, yang datang berminggu-minggu sebelum masalah yang sesungguhnya. Protokol yang akan kamu berikan kepadanya adalah protokol yang harus kamu simpan untuk dirimu sendiri: <b>kurangi dulu</b> (lepas satu komitmen selama dua minggu, jaga jam tidur, kembali ke grup futsal — hubungan dengan orang lain adalah perawatan, bukan hadiah) <b>lalu bicara</b> — dengan teman, mentor, dan kalau suasana hati yang rendah atau rasa putus asa bertahan hampir setiap hari selama dua minggu atau lebih, dengan seorang profesional, persis seperti orang pergi ke dokter untuk patah tulang. Menangani ini sejak dini adalah keterampilan karier yang hasilnya berlipat: orang-orang yang tetap berkinerja tinggi selama puluhan tahun adalah mereka yang belajar membaca indikator dirinya sendiri di tahun pertama."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does the pile-on script show the arithmetic instead of just accepting or refusing?",
        "id": "Mengapa naskah untuk skenario “ditimpa tugas baru” memperlihatkan hitungannya, bukan sekadar menerima atau menolak?"
       },
       "options": [
        {
         "en": "To prove how busy you are",
         "id": "Untuk membuktikan betapa sibuknya kamu"
        },
        {
         "en": "Because the manager owns the priority decision but lacks your load data — the script supplies the data and keeps the decision with its owner",
         "id": "Karena keputusan prioritas ada di tangan manajer, tetapi mereka tidak punya data bebanmu — naskah itu memasok datanya dan membiarkan keputusan tetap pada pemiliknya"
        },
        {
         "en": "To create a paper trail for later disputes",
         "id": "Untuk membuat jejak tertulis kalau nanti ada perselisihan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Silent absorption hides the trade-offs until they detonate. Visible arithmetic plus offered trades is what managed capacity looks like from above.",
        "id": "Menyerap dalam diam menyembunyikan pertukarannya sampai meledak. Hitungan yang terlihat plus pertukaran yang ditawarkan — begitulah kapasitas yang terkelola terlihat dari atas."
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
    "id": "Mengelola ke Atas, ke Samping, dan ke Bawah"
   },
   "overview": {
    "en": "Module 3 of The Route focuses on managing up, across, and down. Work through the lessons in order — each builds on the last.",
    "id": "Modul 3 The Route berfokus pada mengelola hubungan ke atas, ke samping, dan ke bawah. Kerjakan pelajarannya secara berurutan — setiap pelajaran dibangun di atas pelajaran sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply managing up, across, and down to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu bisa menerapkan cara mengelola hubungan ke atas, ke samping, dan ke bawah pada keputusan kariermu sendiri, dengan metode yang konkret dan bisa diulang."
   },
   "lessons": [
    {
     "n": "3.1",
     "title": {
      "en": "Managing Up: Understanding Your Manager",
      "id": "Mengelola ke Atas: Memahami Manajermu"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Your manager is not your boss so much as your most important working relationship — one you are half responsible for operating. This lesson builds the managing-up toolkit: reading their world, matching their operating manual, and making yourself the report that lightens their week.",
      "id": "Manajermu bukan sekadar atasan; ia hubungan kerja terpentingmu — dan separuh urusan menjalankannya adalah tanggung jawabmu. Pelajaran ini membangun perangkat untuk mengelola ke atas: membaca dunia mereka, menyesuaikan diri dengan buku manual mereka, dan menjadikan dirimu anggota tim yang meringankan minggu mereka."
     },
     "objectives": [
      {
       "en": "Map your manager's pressures, priorities and preferences in one page.",
       "id": "Memetakan tekanan, prioritas, dan preferensi manajermu dalam satu halaman."
      },
      {
       "en": "Adapt to their operating manual: channel, cadence, detail level, decision style.",
       "id": "Menyesuaikan diri dengan buku manual mereka: saluran, irama, tingkat detail, gaya mengambil keputusan."
      },
      {
       "en": "Run one-on-ones as your meeting, prepared and agenda'd.",
       "id": "Menjalankan sesi one-on-one sebagai rapatmu sendiri, dengan persiapan dan agenda."
      }
     ],
     "takeaways": [
      {
       "en": "Managing up is not flattery; it is reducing the friction between your work and its sponsor.",
       "id": "Mengelola ke atas bukan menjilat; itu mengurangi gesekan antara pekerjaanmu dan orang yang menyokongnya."
      },
      {
       "en": "Every manager has an operating manual — most never write it down, all reward those who learn it.",
       "id": "Setiap manajer punya buku manual — kebanyakan tidak pernah menuliskannya, tetapi semuanya menghargai orang yang mempelajarinya."
      },
      {
       "en": "A prepared one-on-one is the cheapest career instrument you own; most people waste it on status updates.",
       "id": "Sesi one-on-one yang dipersiapkan adalah instrumen karier termurah yang kamu miliki; kebanyakan orang menghabiskannya untuk laporan status."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "Their world, mapped",
        "id": "Dunia mereka, dipetakan"
       },
       "body": {
        "en": "One page, three headings. <b>Pressures:</b> what they are measured on (2.1), what is currently red, what their manager asks about. <b>Priorities:</b> the two or three outcomes this half that actually matter to them — stated in their words, from planning docs and repeated phrases. <b>Preferences:</b> how they like to receive information (written first or talk first?), when they are sharpest, what visibly irritates them, how they decide (data, options, or recommendations?). You fill this map by observation and light questions over a month, then keep it current. It converts guesswork — the main tax on junior-manager relationships — into service.",
        "id": "Satu halaman, tiga judul. <b>Tekanan:</b> mereka diukur dari apa (2.1), apa yang sedang merah, apa yang ditanyakan atasan mereka. <b>Prioritas:</b> dua atau tiga hasil semester ini yang benar-benar penting bagi mereka — ditulis dengan kata-kata mereka sendiri, dari dokumen perencanaan dan frasa yang sering mereka ulang. <b>Preferensi:</b> cara mereka suka menerima informasi (tertulis dulu, atau bicara dulu?), kapan mereka paling tajam, apa yang terlihat mengganggu mereka, cara mereka memutuskan (butuh data, pilihan, atau rekomendasi?). Kamu mengisi peta ini lewat pengamatan dan pertanyaan-pertanyaan ringan selama sebulan, lalu menjaganya tetap terbarui. Peta ini mengubah tebak-tebakan — pajak terbesar dalam hubungan junior dan manajer — menjadi pelayanan."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "Matching the manual",
        "id": "Menyesuaikan diri dengan manualnya"
       },
       "body": {
        "en": "Once mapped, adapt: the written-first manager gets your one-pager the evening before, not a surprise monologue; the options manager gets two options with your recommendation, not an open question; the morning-sharp manager gets decisions before lunch and FYIs after. Two boundaries keep adaptation healthy. It runs on <b>form, not substance</b> — you adjust packaging, never facts or your honest view. And it is <b>reciprocal over time</b> — as trust builds, you can say “I think better in writing; can I send a memo before we discuss?” Good managers adapt back; the manual is a meeting point, not a surrender.",
        "id": "Setelah terpetakan, sesuaikan diri: manajer yang suka tertulis dulu menerima dokumen satu halamanmu pada sore sebelumnya, bukan monolog dadakan; manajer yang suka pilihan menerima dua pilihan beserta rekomendasimu, bukan pertanyaan terbuka; manajer yang paling tajam di pagi hari menerima keputusan sebelum makan siang dan informasi biasa sesudahnya. Dua batasan menjaga adaptasi ini tetap sehat. Adaptasi berlaku pada <b>bentuk, bukan isi</b> — kamu menyesuaikan kemasannya, tidak pernah faktanya atau pandangan jujurmu. Dan adaptasi ini <b>timbal balik seiring waktu</b> — begitu kepercayaan tumbuh, kamu bisa berkata “saya berpikir lebih baik lewat tulisan; boleh saya kirim memo sebelum kita bahas?” Manajer yang baik akan ikut menyesuaikan diri; manual itu titik temu, bukan penyerahan diri."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The one-on-one, upgraded",
        "id": "Sesi one-on-one, naik kelas"
       },
       "body": {
        "en": "The weekly or fortnightly one-on-one is your meeting — treat status as pre-read (the Friday one-liners already carried it) and spend the room on what only this conversation can do: decisions you need, obstacles they can move, feedback in both directions, and one development topic. Standing agenda, sent ahead: “1. Decision: vendor A/B (context attached). 2. Heads-up: risk on the migration. 3. Feedback ask: yesterday's client call. 4. Development: I'd like the next presentation slot.” Bring your notes from last time; nothing signals seriousness like following up your own threads. Managers describe reports who run one-on-ones this way with one word: promotable.",
        "id": "Sesi one-on-one mingguan atau dua mingguan adalah rapatmu — perlakukan laporan status sebagai bahan bacaan sebelum rapat (laporan satu baris tiap Jumat sudah menyampaikannya), dan gunakan waktunya untuk hal-hal yang hanya bisa dilakukan percakapan ini: keputusan yang kamu butuhkan, hambatan yang bisa mereka singkirkan, umpan balik dua arah, dan satu topik pengembangan. Agenda tetap, dikirim sebelumnya: “1. Keputusan: vendor A atau B (konteks terlampir). 2. Peringatan: risiko pada migrasi. 3. Minta umpan balik: panggilan klien kemarin. 4. Pengembangan: saya ingin mengambil jatah presentasi berikutnya.” Bawa catatanmu dari sesi sebelumnya; tidak ada yang lebih menunjukkan keseriusan daripada menindaklanjuti benang yang kamu buka sendiri. Manajer menggambarkan anggota tim yang menjalankan one-on-one seperti ini dengan satu kata: layak dipromosikan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Your manager decides from written options, and you have been raising issues verbally in corridors — with poor results. The managing-up fix?",
        "id": "Manajermu mengambil keputusan dari pilihan-pilihan tertulis, sementara selama ini kamu mengangkat persoalan secara lisan di lorong kantor — dengan hasil yang buruk. Apa perbaikannya menurut cara mengelola ke atas?"
       },
       "options": [
        {
         "en": "Escalate issues to their manager instead",
         "id": "Eskalasi persoalannya ke atasan mereka saja"
        },
        {
         "en": "Match the manual: send a short written note with two options and your recommendation before discussing",
         "id": "Sesuaikan dengan manualnya: kirim catatan tertulis singkat berisi dua pilihan dan rekomendasimu sebelum berdiskusi"
        },
        {
         "en": "Keep raising verbally but more often",
         "id": "Tetap sampaikan secara lisan, tetapi lebih sering"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The channel was fighting the decision style. Packaging adapted to the manual is service; the substance stays yours.",
        "id": "Salurannya bertabrakan dengan gaya mengambil keputusan mereka. Kemasan yang disesuaikan dengan manual adalah pelayanan; isinya tetap milikmu."
       }
      }
     ],
     "quote": {
      "en": "Managing up is not flattery; it is removing friction between your work and its sponsor.",
      "id": "Mengelola ke atas bukan menjilat; itu menyingkirkan gesekan antara pekerjaanmu dan orang yang menyokongnya."
     },
     "listen": [
      {
       "label": {
        "en": "A one-on-one agenda, sent ahead — hear the shape",
        "id": "Agenda one-on-one yang dikirim lebih dulu — dengarkan bentuknya"
       },
       "text": {
        "en": "One: decision needed on vendor A or B, context attached. Two: heads up on a migration risk. Three: feedback request on yesterday's client call. Four: development — I'd like the next presentation slot.",
        "id": "Satu: butuh keputusan untuk vendor A atau B, konteksnya terlampir. Dua: peringatan tentang risiko migrasi. Tiga: permintaan umpan balik untuk panggilan klien kemarin. Empat: pengembangan — saya ingin mengambil jatah presentasi berikutnya."
       }
      }
     ],
     "tool": {
      "id": "field",
      "mode": "coach:up",
      "title": {
       "en": "Practice the difficult week",
       "id": "Latih minggu yang sulit"
      },
      "body": {
       "en": "A slipping deadline, a distracted manager, a capacity collision — the managing-up drill walks all three moments with feedback per move.",
       "id": "Tenggat yang molor, manajer yang sedang tidak fokus, tabrakan kapasitas — latihan mengelola ke atas ini membawamu melewati ketiga momen itu, dengan umpan balik untuk setiap langkah."
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
      "id": "Mengelola ke Samping: Kredibilitas di Mata Rekan dan Hubungan Lintas Fungsi"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Peers decide more of your career than you expect: they are tomorrow's managers, this quarter's dependency, and the loudest witnesses to your reputation. This lesson builds peer credibility — reliability, cross-functional respect, and conflict handled before it scars.",
      "id": "Rekan kerja menentukan lebih banyak bagian kariermu daripada yang kamu kira: mereka adalah manajer di masa depan, pihak yang pekerjaanmu bergantung padanya kuartal ini, dan saksi paling nyaring atas reputasimu. Pelajaran ini membangun kredibilitas di mata rekan — keandalan, rasa hormat lintas fungsi, dan konflik yang ditangani sebelum meninggalkan bekas luka."
     },
     "objectives": [
      {
       "en": "Build the reliability record that makes peers route work and trust toward you.",
       "id": "Membangun rekam jejak keandalan yang membuat rekan-rekan menyerahkan pekerjaan dan kepercayaan kepadamu."
      },
      {
       "en": "Work across functions in their language and their constraints.",
       "id": "Bekerja lintas fungsi dengan bahasa dan batasan yang berlaku di tim mereka, bukan di timmu."
      },
      {
       "en": "Resolve peer friction directly and early, without escalation theatre.",
       "id": "Menyelesaikan gesekan antar-rekan secara langsung dan sejak dini, tanpa drama eskalasi."
      }
     ],
     "takeaways": [
      {
       "en": "Peer credibility has one currency: things you said you would do, done, on time, without chasing.",
       "id": "Kredibilitas di mata rekan hanya punya satu mata uang: apa yang kamu janjikan, selesai, tepat waktu, tanpa perlu ditagih."
      },
      {
       "en": "Cross-functional respect starts with learning why the other team's “no” makes sense in their world.",
       "id": "Rasa hormat lintas fungsi dimulai dari memahami mengapa “tidak” dari tim lain masuk akal di dunia mereka."
      },
      {
       "en": "Friction addressed in 48 hours is a conversation; friction stored for months is a feud.",
       "id": "Gesekan yang dibicarakan dalam 48 jam adalah percakapan; gesekan yang dipendam berbulan-bulan adalah permusuhan."
      }
     ],
     "sections": [
      {
       "icon": "flag",
       "h": {
        "en": "The reliability record",
        "id": "Rekam jejak keandalan"
       },
       "body": {
        "en": "Among peers there is no formal scoreboard — there is memory. Every commitment is a deposit or a withdrawal: the data pull delivered when promised, the review returned in a day, the meeting joined prepared. Three habits compound the record. <b>Commit precisely:</b> “by Thursday noon” beats “soon” — vague promises read as soft even when kept. <b>Flag early:</b> the moment a commitment is at risk, say so with a new date; peers forgive moved deadlines and never forgive silent ones. <b>Close loops:</b> confirm done, link the artefact. Within two quarters this record becomes your reputation's load-bearing wall — peers describe you in exactly these terms when managers ask around.",
        "id": "Di antara sesama rekan tidak ada papan skor resmi — yang ada hanya ingatan. Setiap komitmen adalah setoran atau penarikan: tarikan data yang dikirim sesuai janji, ulasan yang dikembalikan dalam sehari, rapat yang kamu hadiri dengan persiapan. Tiga kebiasaan membuat rekam jejak ini bertumbuh berlipat. <b>Berjanji dengan presisi:</b> “Kamis siang” jauh lebih kuat daripada “segera” — janji yang samar terasa lembek bahkan ketika ditepati. <b>Beri tahu lebih awal:</b> begitu sebuah komitmen terancam, katakan sambil menawarkan tanggal baru; rekan memaafkan tenggat yang bergeser, tapi tidak pernah memaafkan tenggat yang lewat dalam diam. <b>Tutup setiap urusan:</b> konfirmasi bahwa sudah selesai, sertakan tautan hasilnya. Dalam dua kuartal, rekam jejak ini menjadi dinding penyangga reputasimu — persis dengan kata-kata inilah rekan-rekan menggambarkanmu ketika para manajer bertanya ke kiri-kanan."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "Crossing functions",
        "id": "Menyeberang ke fungsi lain"
       },
       "body": {
        "en": "Finance is not slow; finance is accountable for controls you cannot see. Legal is not obstructive; legal absorbs risks you will never be blamed for. The cross-functional skill is translating requests into the other function's frame: instead of “I need this approved fast”, try “what do you need from me to make this easy to approve — and what timeline is realistic on your side?” Learn each neighbouring function's calendar (month-end freezes, release windows), their constraints, and one person in each who will explain how things really work over coffee. Cross-functional fluency is rare enough at junior levels that it reads as seniority years before the title arrives.",
        "id": "Tim keuangan bukannya lambat; mereka bertanggung jawab atas kontrol yang tidak kamu lihat. Tim legal bukannya menghambat; mereka menanggung risiko yang tidak akan pernah dibebankan padamu. Keterampilan lintas fungsi adalah menerjemahkan permintaanmu ke dalam kerangka berpikir fungsi lain: alih-alih “saya butuh ini cepat disetujui”, coba “apa yang kamu perlukan dari saya supaya ini mudah disetujui — dan waktu seperti apa yang realistis di sisimu?” Pelajari kalender setiap fungsi tetangga (tutup buku akhir bulan, jendela rilis), batasan mereka, dan temukan satu orang di masing-masing tim yang mau menjelaskan cara kerja sebenarnya sambil ngopi. Kefasihan lintas fungsi cukup langka di level junior, sehingga terbaca sebagai senioritas bertahun-tahun sebelum jabatannya datang."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Friction, handled early",
        "id": "Gesekan, diselesaikan sejak dini"
       },
       "body": {
        "en": "A peer talks over you in meetings; a teammate's late inputs keep burning your weekends; someone reworded your analysis and circulated it. The protocol: <b>within 48 hours, directly, privately, behaviour-first.</b> “In yesterday's review my numbers went out under a different framing — walk me through what happened?” opens with curiosity rather than accusation because the innocent explanation is genuinely common. If the behaviour continues: name the impact and the ask — “when inputs land Friday night, my weekend absorbs the slip; I need them Thursday or we re-scope.” Escalation is the third resort, brought as a process problem with artefacts, not a personality complaint. What stores badly: hint-dropping, cc-warfare, and the silent grudge that peers can feel but never address.",
        "id": "Seorang rekan terus memotong bicaramu di rapat; masukan yang selalu telat dari seorang kolega menghabiskan akhir pekanmu; seseorang mengubah kerangka analisismu lalu mengedarkannya. Protokolnya: <b>dalam 48 jam, langsung, empat mata, mulai dari perilakunya.</b> “Di ulasan kemarin, angka-angka saya keluar dengan framing yang berbeda — bisa ceritakan apa yang terjadi?” dibuka dengan rasa ingin tahu, bukan tuduhan, karena penjelasan yang tidak berdosa memang sering terjadi. Kalau perilakunya berlanjut: sebutkan dampak dan permintaanmu — “kalau masukan baru masuk Jumat malam, akhir pekan saya yang menanggung keterlambatannya; saya butuh masukan itu Kamis, atau kita atur ulang lingkupnya.” Eskalasi adalah jalan ketiga, dibawa sebagai masalah proses dengan bukti, bukan keluhan soal kepribadian. Yang buruk kalau dipendam: sindiran halus, perang cc email, dan dendam diam-diam yang bisa dirasakan rekan tapi tidak pernah dibicarakan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Finance has sat on your approval for a week and the deadline is Friday. The cross-functional move?",
        "id": "Tim keuangan sudah seminggu menahan persetujuanmu, dan tenggatnya hari Jumat. Langkah lintas fungsi yang tepat?"
       },
       "options": [
        {
         "en": "Email them daily with your manager in cc until it moves",
         "id": "Email mereka setiap hari dengan manajermu di cc sampai prosesnya bergerak"
        },
        {
         "en": "Ask what would make it easy to approve and what is realistic on their side — then adjust or escalate with that information",
         "id": "Tanyakan apa yang akan membuatnya mudah disetujui dan waktu apa yang realistis di sisi mereka — lalu sesuaikan atau eskalasi berbekal informasi itu"
        },
        {
         "en": "Proceed without approval and apologise later",
         "id": "Jalan terus tanpa persetujuan, minta maaf belakangan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Their week has constraints you cannot see — month-end, missing documents, a queue. Learning them either unblocks you or arms a legitimate escalation.",
        "id": "Minggu mereka punya batasan yang tidak kamu lihat — tutup buku akhir bulan, dokumen yang kurang, antrean. Mengetahuinya entah membuka jalanmu, atau memberimu bahan untuk eskalasi yang sah."
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
      "id": "Setiap organisasi punya medan politik: pengaruh informal, aliansi yang tidak tertulis, keputusan yang sudah diambil sebelum rapat dimulai. Kamu boleh menolak menjadikannya senjata, tapi jangan sampai buta terhadapnya. Pelajaran ini mengajarkan navigasi yang etis — membaca medan tanpa berubah menjadi bagian dari apa yang kamu baca."
     },
     "objectives": [
      {
       "en": "Map informal influence: who is consulted, who blocks, who champions.",
       "id": "Memetakan pengaruh informal: siapa yang dimintai pendapat, siapa yang menghambat, siapa yang membela."
      },
      {
       "en": "Pre-align important proposals ethically before the meeting that decides them.",
       "id": "Menyelaraskan usulan penting secara etis, sebelum rapat yang akan memutuskannya."
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
       "id": "Keputusan besar diambil dalam percakapan-percakapan kecil sebelum rapat besar; hadirlah di percakapan itu dengan jujur."
      },
      {
       "en": "Political capital earned by delivery and spent on missions outlasts capital earned by manoeuvring.",
       "id": "Modal politik yang diperoleh lewat hasil kerja dan dibelanjakan untuk misi bersama bertahan jauh lebih lama daripada modal hasil manuver."
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
        "id": "Amati tiga arus selama sebulan. <b>Konsultasi:</b> sebelum sebuah keputusan diketuk, meja siapa yang disinggahi para pemimpin? Merekalah penasihat yang dipercaya, apa pun jabatannya. <b>Penghambatan:</b> skeptisisme diam-diam siapa yang mematikan usulan — dan apa yang bisa meyakinkan mereka (data? preseden? jaminan risiko?). <b>Pembelaan:</b> siapa yang berhasil membawa ide orang lain ke atas? Tambahkan jaringan informal — siapa makan siang dengan siapa, ikatan alumni atau ikatan proyek mana yang masih bertahan — dan kamu memegang bagan organisasi kedua, jalur yang sebenarnya dilalui keputusan. Peta ini informasi yang netral, dikumpulkan lewat pengamatan, tidak berbeda dari mempelajari prosedur resmi; etika baru berperan pada apa yang kamu lakukan dengannya."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "Pre-alignment, done clean",
        "id": "Penyelarasan awal, dengan cara bersih"
       },
       "body": {
        "en": "The naive move: perfect your proposal in secret and unveil it at the meeting — where it dies from questions any stakeholder would have raised earlier. The navigated move: before the meeting, walk the proposal past the people it affects — “I'm bringing X on Thursday; you know this area — what would make it fail?” Blockers consulted early often convert; their objections improve the proposal; and the meeting becomes a confirmation, not an ambush. The ethical line is transparency of intent: pre-alignment shares the real proposal with the real stakeholders, manipulation shows different faces to different rooms. One test: would you be comfortable if all your pre-meeting conversations were minuted together? If yes, it is diplomacy; if no, it is scheming.",
        "id": "Cara naif: sempurnakan usulanmu diam-diam, lalu pamerkan di rapat — tempat ia mati oleh pertanyaan yang sebenarnya bisa diajukan pemangku kepentingan mana pun sejak awal. Cara yang ternavigasi: sebelum rapat, bawa usulan itu ke orang-orang yang terdampak — “saya akan membawa X hari Kamis; kamu paham area ini — apa yang bisa membuatnya gagal?” Penghambat yang diajak bicara sejak dini sering berubah jadi pendukung; keberatan mereka memperbaiki usulanmu; dan rapat pun menjadi ajang konfirmasi, bukan penyergapan. Garis etisnya adalah keterbukaan niat: penyelarasan awal membagikan usulan yang sebenarnya kepada pemangku kepentingan yang sebenarnya, sedangkan manipulasi menunjukkan wajah berbeda di ruangan berbeda. Satu ujian: apakah kamu tetap nyaman kalau semua percakapan pra-rapatmu dinotulenkan dan dibaca bersama? Kalau ya, itu diplomasi; kalau tidak, itu persekongkolan."
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
        "id": "Aturan yang bertahan di medan mana pun. Jangan pernah berdagang gosip negatif — pendengarnya akan menyimpulkan, dengan tepat, bahwa kamu melakukannya juga tentang mereka; kalimat “saya lebih suka mendengarnya langsung dari dia” bisa mengakhiri sesi gosip mana pun tanpa terkesan sok suci. Pegang rahasia secara mutlak. Beri pengakuan di depan umum, sampaikan ketidaksetujuan secara pribadi lebih dulu. Jangan bergabung dengan faksi — jadilah orang yang bisa bekerja dengan semua faksi; saat cuaca organisasi memanas, jembatan bertahan lebih lama daripada pasukan. Dan bangun pengaruhmu di atas satu fondasi yang tidak bisa diturunkan nilainya oleh politik: benar-benar berguna bagi tujuan banyak orang. Pemain politik ditoleransi selama mereka menang; kontributor diinginkan untuk selamanya. Permainan jangka panjang, tanpa gemerlap, adalah milik mereka yang bersih."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Your proposal goes to committee Thursday. The known sceptic is the operations head. The navigated, ethical move?",
        "id": "Usulanmu akan dibahas komite hari Kamis. Skeptis yang paling dikenal adalah kepala operasional. Langkah yang ternavigasi sekaligus etis?"
       },
       "options": [
        {
         "en": "Avoid them until Thursday so they cannot prepare objections",
         "id": "Hindari dia sampai Kamis supaya tidak sempat menyiapkan keberatan"
        },
        {
         "en": "Bring them the real proposal early: “what would make this fail?” — convert or learn before the room decides",
         "id": "Bawa usulan yang sebenarnya kepadanya lebih awal: “apa yang bisa membuat ini gagal?” — ubah jadi pendukung, atau belajar darinya sebelum ruangan memutuskan"
        },
        {
         "en": "Lobby their rival to outnumber them in the meeting",
         "id": "Lobi rivalnya supaya dia kalah suara di rapat"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Early consultation converts blockers, improves proposals, and passes the minuted-together test. Ambushes and faction plays win meetings and lose years.",
        "id": "Konsultasi sejak dini mengubah penghambat jadi pendukung, memperbaiki usulan, dan lolos ujian notulen-dibaca-bersama. Penyergapan dan permainan faksi memenangkan rapat, tapi kehilangan bertahun-tahun."
       }
      }
     ]
    },
    {
     "n": "3.4",
     "title": {
      "en": "Managing Down: Leading Before the Title",
      "id": "Mengelola ke Bawah: Memimpin Sebelum Jabatan Tiba"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "interactive",
     "placeholder": false,
     "overview": {
      "en": "Leadership begins years before the title: the intern you onboard, the project you coordinate, the junior who asks you questions. Three scenarios drill managing down without authority — delegation, difficult feedback, and credit flowing downward.",
      "id": "Kepemimpinan dimulai bertahun-tahun sebelum jabatannya: anak magang yang kamu dampingi, proyek yang kamu koordinasikan, junior yang datang bertanya. Tiga skenario melatih mengelola ke bawah tanpa wewenang formal — delegasi, umpan balik yang sulit, dan pengakuan yang mengalir ke bawah."
     },
     "objectives": [
      {
       "en": "Delegate with context and checkpoints, not task-dumping.",
       "id": "Mendelegasikan dengan konteks dan titik periksa, bukan sekadar melempar tugas."
      },
      {
       "en": "Give corrective feedback that grows the person and the work.",
       "id": "Memberi umpan balik korektif yang menumbuhkan orangnya sekaligus pekerjaannya."
      },
      {
       "en": "Push credit down visibly — the leadership habit that costs nothing and builds everything.",
       "id": "Mendorong pengakuan ke bawah secara terlihat — kebiasaan kepemimpinan yang tidak berbiaya apa pun dan membangun segalanya."
      }
     ],
     "takeaways": [
      {
       "en": "Delegation transfers ownership, not just labour: context, definition of done, and a checkpoint.",
       "id": "Delegasi memindahkan rasa memiliki, bukan sekadar beban kerja: konteks, definisi selesai, dan satu titik periksa."
      },
      {
       "en": "Feedback to juniors is a gift wrapped in respect: specific, private, paired with belief.",
       "id": "Umpan balik untuk junior adalah hadiah yang dibungkus rasa hormat: spesifik, empat mata, disertai keyakinan bahwa dia mampu."
      },
      {
       "en": "Leaders are people others got stronger around — the title eventually follows the evidence.",
       "id": "Pemimpin adalah orang yang membuat sekitarnya jadi lebih kuat — jabatan pada akhirnya mengikuti bukti."
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Scenario 1 — Delegating to the intern",
        "id": "Skenario 1 — Mendelegasikan ke anak magang"
       },
       "body": {
        "en": "You coordinate a data-cleaning task and an intern will execute it. Script the handover, then reveal.",
        "id": "Kamu mengoordinasikan tugas pembersihan data, dan seorang anak magang yang akan mengerjakannya. Tulis naskah serah terimanya, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Model handover, four parts. <b>Context:</b> “this feeds Thursday's client report — errors here become errors in front of the client.” <b>Definition of done:</b> “all rows validated against the rules doc, exceptions listed in a second sheet, by Wednesday noon.” <b>Resources and authority:</b> “the rules doc, last month's example, and you can decide formatting yourself.” <b>Checkpoint:</b> “send me the first fifty rows by tomorrow morning so we catch any drift early.” Compare with task-dumping — “clean this by Wednesday” — which produces exactly the rework it deserved. The checkpoint is the professional's secret: it converts big failures into small corrections while leaving ownership intact.",
        "id": "Serah terima yang ideal terdiri dari empat bagian. <b>Konteks:</b> “ini bahan laporan klien hari Kamis — kesalahan di sini akan jadi kesalahan di depan klien.” <b>Definisi selesai:</b> “semua baris tervalidasi terhadap dokumen aturan, pengecualian dicatat di lembar kedua, selesai Rabu siang.” <b>Sumber daya dan wewenang:</b> “dokumen aturannya, contoh bulan lalu, dan soal format kamu boleh putuskan sendiri.” <b>Titik periksa:</b> “kirim lima puluh baris pertama besok pagi, supaya kalau ada yang melenceng kita tangkap lebih awal.” Bandingkan dengan melempar tugas — “bersihkan ini sebelum Rabu” — yang menghasilkan persis pengerjaan ulang yang memang pantas diterimanya. Titik periksa adalah rahasia para profesional: ia mengubah kegagalan besar menjadi koreksi kecil, sementara rasa memiliki tetap utuh di tangan pengerjanya."
       }
      },
      {
       "h": {
        "en": "Scenario 2 — The correction",
        "id": "Skenario 2 — Koreksi"
       },
       "body": {
        "en": "The intern's fifty rows arrive with a systematic error — they misread one rule and applied it everywhere. They are visibly proud of the speed. Script your feedback, then reveal.",
        "id": "Lima puluh baris dari si anak magang datang dengan kesalahan sistematis — dia salah membaca satu aturan dan menerapkannya di semua tempat. Dia terlihat bangga dengan kecepatannya. Tulis naskah umpan balikmu, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Model: private, specific, belief attached. “Good speed, and the checkpoint did its job — one thing to fix before it compounds: rule 4 applies only to active accounts; here it ran on all of them, so about twenty rows need a redo. Easy misread, the doc is genuinely ambiguous there — I did the same in my first month. Rerun those rows and you're on track for Wednesday.” Anatomy: the behaviour and its consequence, zero character commentary, the normalising story (true, not invented), the concrete path forward, the timeline intact. What it avoids: public correction, sarcasm, silently redoing it yourself — the three moves that teach juniors to hide errors, which is how small errors become client-facing ones.",
        "id": "Modelnya: empat mata, spesifik, disertai keyakinan. “Kecepatannya bagus, dan titik periksanya bekerja — ada satu hal yang perlu dibetulkan sebelum merembet: aturan 4 hanya berlaku untuk akun aktif; di sini diterapkan ke semua akun, jadi sekitar dua puluh baris perlu diulang. Wajar salah baca, dokumennya memang ambigu di bagian itu — saya juga begitu di bulan pertama. Ulang baris-baris itu, dan kamu masih tepat jadwal untuk Rabu.” Anatominya: perilaku dan akibatnya, nol komentar soal karakter, cerita yang menormalkan (yang benar-benar terjadi, bukan dikarang), jalan konkret ke depan, dan jadwal yang tetap utuh. Yang dihindari: koreksi di depan umum, sarkasme, diam-diam mengerjakan ulang sendiri — tiga hal yang mengajari junior untuk menyembunyikan kesalahan, dan begitulah kesalahan kecil berubah jadi kesalahan di depan klien."
       }
      },
      {
       "h": {
        "en": "Scenario 3 — The showcase",
        "id": "Skenario 3 — Sorotan"
       },
       "body": {
        "en": "The cleaned dataset powers a client insight; your manager congratulates you in the team channel. The intern is not mentioned. Script your reply, then reveal.",
        "id": "Dataset yang sudah bersih itu menghasilkan temuan berharga untuk klien; manajermu memberimu selamat di kanal tim. Si anak magang tidak disebut sama sekali. Tulis naskah balasanmu, lalu buka tinjauan."
       },
       "debrief": {
        "en": "Model, posted where the praise was: “Thanks! Flagging that Andi ran the whole validation — fifty thousand rows against a genuinely ambiguous ruleset, exceptions documented cleanly. Made the analysis trivial on my end.” Ten seconds, three effects: the intern's first public evidence artefact (they will remember who wrote it for years); your manager's improved map of team capability; and your own record enhanced, not diminished — pushing credit down is read from above as the definitive leadership tell, because it is the behaviour of someone secure enough to build others. The pattern, repeated, is how individual contributors get handed teams.",
        "id": "Modelnya, ditulis persis di tempat pujian itu muncul: “Terima kasih! Perlu saya sampaikan, Andi yang menjalankan seluruh validasinya — lima puluh ribu baris terhadap seperangkat aturan yang benar-benar ambigu, semua pengecualian terdokumentasi rapi. Analisisnya jadi mudah di pihak saya.” Sepuluh detik, tiga dampak: bukti publik pertama bagi si anak magang (dia akan ingat siapa yang menulisnya selama bertahun-tahun); peta kemampuan tim di kepala manajermu jadi lebih akurat; dan rekam jejakmu sendiri menguat, bukan berkurang — mendorong pengakuan ke bawah dibaca dari atas sebagai tanda kepemimpinan yang paling meyakinkan, karena itu perilaku orang yang cukup percaya diri untuk membangun orang lain. Pola ini, kalau diulang, adalah cara seorang kontributor individu akhirnya dipercaya memimpin tim."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does the checkpoint (“first fifty rows by tomorrow”) belong in every delegation?",
        "id": "Mengapa titik periksa (“lima puluh baris pertama besok pagi”) harus ada di setiap delegasi?"
       },
       "options": [
        {
         "en": "To signal you do not fully trust the person",
         "id": "Untuk memberi sinyal bahwa kamu belum sepenuhnya percaya pada orang itu"
        },
        {
         "en": "It converts potential large failures into small early corrections while keeping ownership with the doer",
         "id": "Ia mengubah potensi kegagalan besar menjadi koreksi kecil sejak dini, sementara rasa memiliki tetap di tangan pengerjanya"
        },
        {
         "en": "It creates documentation for performance reviews",
         "id": "Ia menciptakan dokumentasi untuk penilaian kinerja"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Scenario 2 proved it: the systematic error was caught at fifty rows, not fifty thousand. Checkpoints are how trust and safety coexist.",
        "id": "Skenario 2 membuktikannya: kesalahan sistematis tertangkap di baris ke-lima puluh, bukan ke-lima puluh ribu. Titik periksa adalah cara kepercayaan dan keamanan hidup berdampingan."
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
    "id": "Modul 4 The Route berfokus pada membangun visibilitas profesional. Kerjakan pelajarannya secara berurutan — setiap pelajaran dibangun di atas pelajaran sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply building professional visibility to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu bisa menerapkan visibilitas profesional pada keputusan kariermu sendiri dengan metode yang konkret dan bisa diulang."
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
      "id": "Di dalam setiap organisasi berjalan sebuah sistem reputasi: opini yang terbentuk di rapat kalibrasi, obrolan di lorong, dan dua detik setelah namamu disebut. Kamu tidak bisa memilih untuk tidak punya reputasi — yang bisa kamu pilih hanyalah mengemudikannya atau tidak. Pelajaran ini membuat sistem internal itu terbaca dan bisa dikemudikan."
     },
     "objectives": [
      {
       "en": "Map how reputation actually forms and travels inside an organisation.",
       "id": "Memetakan bagaimana reputasi sebenarnya terbentuk dan menyebar di dalam organisasi."
      },
      {
       "en": "Define the two-or-three-word brand you want your name to trigger.",
       "id": "Menentukan dua atau tiga kata yang kamu ingin muncul di benak orang saat namamu disebut."
      },
      {
       "en": "Align your visible behaviour to that brand without performance or pretence.",
       "id": "Menyelaraskan perilaku yang terlihat dengan citra itu, tanpa sandiwara atau kepura-puraan."
      }
     ],
     "takeaways": [
      {
       "en": "Your reputation is decided in rooms you are not in, from samples you did not choose — unless you supply the samples.",
       "id": "Reputasimu diputuskan di ruangan yang tidak kamu hadiri, dari contoh yang tidak kamu pilih — kecuali kamu sendiri yang menyediakan contohnya."
      },
      {
       "en": "A steered brand is two or three words you earn on purpose: “rigorous and calm”, “makes things ship”.",
       "id": "Citra yang dikemudikan adalah dua atau tiga kata yang kamu raih dengan sengaja: “teliti dan tenang”, “selalu bisa membuat sesuatu selesai”."
      },
      {
       "en": "Brand and behaviour must match: reputation engineering without delivery is discovered and repriced brutally.",
       "id": "Citra dan perilaku harus sejalan: rekayasa reputasi tanpa hasil kerja akan ketahuan, dan dinilai ulang dengan kejam."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "How the system works",
        "id": "Cara sistem ini bekerja"
       },
       "body": {
        "en": "Reputation forms from <b>sampled moments</b>, not averages: the meeting where you kept your head, the deadline you saved, the time you were sharp with the intern. It travels through <b>retellings</b> — each hop compressing the story to one trait — and it is <b>consulted at decision points</b>: staffing, promotions, who gets the visible project. Three properties follow. Small samples dominate, so high-visibility moments are worth disproportionate care. Early impressions anchor, because the first story becomes the lens for later ones. And negative samples travel roughly three times as far as positive ones — one corridor outburst outruns a quarter of quiet excellence.",
        "id": "Reputasi terbentuk dari <b>momen-momen yang terekam</b>, bukan dari rata-rata: rapat ketika kamu tetap tenang, tenggat yang kamu selamatkan, saat kamu ketus pada anak magang. Ia menyebar lewat <b>cerita yang diteruskan</b> — setiap kali berpindah mulut, cerita dipadatkan menjadi satu sifat — dan ia <b>dirujuk pada titik-titik keputusan</b>: penugasan, promosi, siapa yang mendapat proyek yang terlihat. Tiga sifat mengikuti. Sedikit contoh saja sudah menentukan, sehingga momen bervisibilitas tinggi layak mendapat perhatian yang jauh lebih besar. Kesan awal menjadi jangkar, karena cerita pertama menjadi lensa untuk cerita berikutnya. Dan contoh negatif menyebar kira-kira tiga kali lebih jauh daripada contoh positif — satu ledakan emosi di lorong mengalahkan satu kuartal kerja hebat yang senyap."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "Choosing the brand",
        "id": "Memilih citra"
       },
       "body": {
        "en": "Ask: when a manager needs to staff the project you want, what two or three words must your name trigger for you to be the obvious pick? Derive them from your architecture (Module 1): the analyst aiming at senior-analyst-owning-a-domain wants “rigorous, reliable, explains clearly”; the future team lead wants “delivers, grows people, calm under fire”. Write the words down. Then audit: ask two trusted colleagues what you are currently known for (the 1.4 drill) and measure the gap between brand held and brand wanted. The gap defines this quarter's visible-behaviour priorities — which moments to volunteer for, which habits to fix first.",
        "id": "Tanyakan: ketika seorang manajer harus mengisi proyek yang kamu inginkan, dua atau tiga kata apa yang harus muncul saat namamu disebut, supaya kamu jadi pilihan yang paling jelas? Turunkan dari arsitekturmu (Modul 1): analis yang membidik posisi analis senior pemilik satu ranah menginginkan “teliti, andal, menjelaskan dengan jernih”; calon pemimpin tim menginginkan “selalu menuntaskan, menumbuhkan orang, tenang di bawah tekanan”. Tuliskan kata-katanya. Lalu audit: tanyakan kepada dua kolega yang kamu percaya, saat ini kamu dikenal sebagai apa (latihan 1.4), dan ukur jarak antara citra yang kamu miliki dan citra yang kamu inginkan. Jarak itulah yang menentukan prioritas perilaku kuartal ini — momen mana yang perlu kamu ambil, kebiasaan mana yang perlu dibenahi lebih dulu."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "Earning it, not performing it",
        "id": "Meraihnya, bukan memerankannya"
       },
       "body": {
        "en": "Brand steering fails in two directions. <b>Performance without substance</b> — optics management, visibility theatre — is detected quickly in any organisation with memory, and the detection itself becomes the brand. <b>Substance without samples</b> — the excellent recluse — leaves the reputation system running on noise. The working method: deliver genuinely (Module 2), then ensure the delivery produces samples — the travelling artefact, the calm intervention in the tense meeting, the Friday one-liner — in the moments the system actually samples. You are not inventing a character; you are making sure the true character gets witnessed.",
        "id": "Mengemudikan citra bisa gagal ke dua arah. <b>Sandiwara tanpa substansi</b> — mengelola kesan, teater visibilitas — cepat terdeteksi di organisasi mana pun yang punya ingatan, dan deteksi itu sendiri yang lalu menjadi citramu. <b>Substansi tanpa contoh</b> — si hebat yang mengurung diri — membiarkan sistem reputasi berjalan di atas kebisingan. Metode kerjanya: tuntaskan pekerjaan dengan sungguh-sungguh (Modul 2), lalu pastikan hasil itu menghasilkan contoh — artefak yang beredar, sikap tenang di rapat yang tegang, laporan satu baris tiap Jumat — pada momen-momen yang memang direkam oleh sistem. Kamu tidak sedang menciptakan karakter; kamu memastikan karakter aslimu punya saksi."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why do negative samples deserve disproportionate prevention effort?",
        "id": "Mengapa contoh negatif layak mendapat upaya pencegahan yang jauh lebih besar?"
       },
       "options": [
        {
         "en": "Because organisations only remember mistakes",
         "id": "Karena organisasi hanya mengingat kesalahan"
        },
        {
         "en": "Because negative stories travel roughly three times as far as positive ones and anchor future interpretation",
         "id": "Karena cerita negatif menyebar kira-kira tiga kali lebih jauh daripada cerita positif, dan menjadi jangkar bagi penafsiran berikutnya"
        },
        {
         "en": "Because positive work is invisible by nature",
         "id": "Karena kerja yang positif memang tidak terlihat"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The asymmetry is the system's physics: one public outburst reprices a quarter of delivery. Composure in sampled moments is brand insurance.",
        "id": "Ketimpangan itu adalah hukum fisika sistem ini: satu ledakan emosi di depan umum menilai ulang satu kuartal hasil kerja. Ketenangan di momen yang terekam adalah asuransi bagi citramu."
       }
      }
     ],
     "quote": {
      "en": "Your reputation is decided in rooms you are not in — unless you supply the samples.",
      "id": "Reputasimu diputuskan di ruangan yang tidak kamu hadiri — kecuali kamu sendiri yang menyediakan contohnya."
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
      "id": "Bagi profesional yang sudah bekerja, LinkedIn bukan papan lowongan — ia catatan publik identitas profesional yang bertumbuh diam-diam di antara dua pencarian kerja. Pelajaran ini membangun ulang profil untuk orang yang sudah bekerja (bukan yang sedang mencari), dan menetapkan irama kehadiran yang berkelanjutan tanpa berubah menjadi pekerjaan kedua."
     },
     "objectives": [
      {
       "en": "Convert the job-seeker profile from The Pack into a professional-record profile.",
       "id": "Mengubah profil pencari kerja dari The Pack menjadi profil catatan profesional."
      },
      {
       "en": "Post and engage on a cadence that compounds without consuming evenings.",
       "id": "Mengunggah dan berinteraksi dengan irama yang bertumbuh berlipat, tanpa menyita malam-malammu."
      },
      {
       "en": "Handle the ethics: employer confidentiality, humility, and the visibility that helps rather than grates.",
       "id": "Menjaga etikanya: kerahasiaan pemberi kerja, kerendahan hati, dan visibilitas yang membantu, bukan yang membuat orang risi."
      }
     ],
     "takeaways": [
      {
       "en": "The employed profile answers a different question: not “hire me” but “this is what I am building”.",
       "id": "Profil orang yang sudah bekerja menjawab pertanyaan yang berbeda: bukan “rekrut saya”, melainkan “inilah yang sedang saya bangun”."
      },
      {
       "en": "One genuine post a month beats daily engagement-bait forever.",
       "id": "Satu unggahan yang tulus sebulan selamanya mengalahkan umpan interaksi setiap hari."
      },
      {
       "en": "Everything public is read by three audiences at once: your market, your employer, your future teams.",
       "id": "Semua yang publik dibaca oleh tiga audiens sekaligus: pasarmu, pemberi kerjamu, dan tim masa depanmu."
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
        "id": "Perbarui kerangka profil era The Pack: headline bergeser dari ketersediaan ke identitas — “Analis data di [perusahaan] · analitik harga & churn · menulis tentang dasbor yang jujur”. Bagian About menceritakan bab yang sedang berjalan: apa yang kamu kerjakan, apa yang sedang kamu pelajari, masalah apa yang menarik bagimu — sudut pandang orang pertama, konkret, dua paragraf. Entri pengalaman memakai butir-butir bukti yang sama dengan CV, disegarkan dua kali setahun dari catatan capaian (Route Planner menjadikannya pekerjaan sepuluh menit). Keterampilan dan rekomendasi diperbarui setiap kali aset baru tercetak. Tugas profil ini di antara dua pencarian kerja: ketika namamu dicari di Google sebelum rapat, konferensi, atau perpindahan internal — catatan itu mengonfirmasi citramu."
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "A cadence that compounds",
        "id": "Irama yang bertumbuh berlipat"
       },
       "body": {
        "en": "The sustainable pattern: <b>monthly, one contribution</b> — a short post on something you genuinely learned (“three things our churn model got wrong before it got right”), a useful resource with two lines of why, or a thoughtful comment thread on your field's active question. <b>Weekly, ten minutes of engagement</b> — substantive comments on others' work in your field; comments build more relationships than posts at this career stage. What to skip entirely: engagement-bait formats, humble-brags, reposting platitudes, and anything you would not say aloud in a room of colleagues — the three-audiences test. Written this way, a year of light presence compounds into exactly the external witness layer Module 4.3 builds on.",
        "id": "Pola yang berkelanjutan: <b>setiap bulan, satu kontribusi</b> — unggahan pendek tentang sesuatu yang benar-benar kamu pelajari (“tiga hal yang salah dari model churn kami sebelum akhirnya benar”), sebuah sumber yang berguna dengan dua baris alasan, atau utas komentar yang berbobot tentang pertanyaan yang sedang hangat di bidangmu. <b>Setiap minggu, sepuluh menit berinteraksi</b> — komentar bermakna pada karya orang lain di bidangmu; di tahap karier ini, komentar membangun lebih banyak hubungan daripada unggahan. Yang perlu dilewati sama sekali: format umpan interaksi, pamer berkedok rendah hati, mengunggah ulang kata-kata mutiara, dan apa pun yang tidak akan kamu ucapkan lantang di ruangan penuh kolega — ujian tiga audiens. Dengan cara ini, setahun kehadiran yang ringan bertumbuh menjadi persis lapisan saksi eksternal yang menjadi fondasi Pelajaran 4.3."
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
        "id": "Tiga aturan menjaga kehadiran publikmu tetap aman. <b>Kerahasiaan lebih dulu:</b> tidak ada nama klien tanpa izin, tidak ada angka internal, tidak ada tangkapan layar dari apa pun yang belum publik — kalau ragu, samarkan (“seorang klien ritel” / “dataset berukuran menengah”) atau minta izin. <b>Kerendahan hati sebagai akurasi:</b> tulis apa yang kamu pelajari, termasuk apa yang awalnya salah; belajar di depan publik terbaca sebagai percaya diri, memamerkan prestasi terbaca sebagai rasa tidak aman — dan para senior di bidangmu langsung tahu mana yang mana. <b>Kolega sebelum audiens:</b> jangan pernah mengubah perselisihan di kantor, kegagalan tim, atau kesalahan kolega menjadi konten, seanonim apa pun rasanya bagimu. Orang-orang di ruangan itu selalu mengenali diri mereka sendiri."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Which monthly post passes all three of this lesson's filters?",
        "id": "Unggahan bulanan mana yang lolos ketiga saringan pelajaran ini?"
       },
       "options": [
        {
         "en": "“Blessed to announce I crushed another quarter 🚀 #hustle”",
         "id": "“Bersyukur bisa mengumumkan satu lagi kuartal yang saya taklukkan 🚀 #hustle”"
        },
        {
         "en": "“Three mistakes our team's first churn model made — and the checks that caught them. (Numbers genericised.)”",
         "id": "“Tiga kesalahan model churn pertama tim kami — dan pemeriksaan yang menangkapnya. (Angka disamarkan.)”"
        },
        {
         "en": "“My honest thoughts on why our management keeps getting prioritisation wrong”",
         "id": "“Pendapat jujur saya tentang mengapa manajemen kami terus salah menentukan prioritas”"
        }
       ],
       "correct": 1,
       "why": {
        "en": "It teaches something real, protects confidentiality, and shows learning-in-public humility. The third option turns colleagues into content — the unforgivable pattern.",
        "id": "Ia mengajarkan sesuatu yang nyata, menjaga kerahasiaan, dan menunjukkan kerendahan hati orang yang belajar di depan publik. Opsi ketiga mengubah kolega menjadi konten — pola yang tidak termaafkan."
       }
      }
     ]
    },
    {
     "n": "4.3",
     "title": {
      "en": "Building External Credibility: Writing, Speaking, and Industry Presence",
      "id": "Membangun Kredibilitas Eksternal: Menulis, Berbicara, dan Kehadiran di Industri"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "External credibility — writing, speaking, industry presence — is the slowest asset in this course and the one with the longest half-life. This lesson sizes it honestly for an early-career professional: the small versions that are actually available, and the compounding path from forum answer to conference stage.",
      "id": "Kredibilitas eksternal — menulis, berbicara, hadir di industri — adalah aset yang paling lambat tumbuh di kursus ini, sekaligus yang paling lama bertahan. Pelajaran ini menakarnya dengan jujur untuk profesional awal karier: versi-versi kecil yang benar-benar bisa kamu jangkau, dan jalur bertumbuh dari jawaban di forum sampai panggung konferensi."
     },
     "objectives": [
      {
       "en": "Identify the entry-level external credibility moves available in year one and two.",
       "id": "Mengenali langkah-langkah kredibilitas eksternal untuk pemula yang tersedia di tahun pertama dan kedua."
      },
      {
       "en": "Build the writing habit that feeds every other external channel.",
       "id": "Membangun kebiasaan menulis yang menjadi sumber bagi semua kanal eksternal lainnya."
      },
      {
       "en": "Climb the speaking ladder from team demo to industry meetup.",
       "id": "Menaiki tangga berbicara di depan umum, dari demo tim sampai meetup industri."
      }
     ],
     "takeaways": [
      {
       "en": "External credibility starts embarrassingly small — a forum answer, a lightning talk — and compounds for decades.",
       "id": "Kredibilitas eksternal dimulai dari hal yang terasa terlalu kecil — satu jawaban di forum, satu presentasi kilat — dan bertumbuh berlipat selama puluhan tahun."
      },
      {
       "en": "Writing is the root channel: every talk, thread and answer begins as written thinking.",
       "id": "Menulis adalah kanal akar: setiap presentasi, utas, dan jawaban berawal dari pemikiran yang dituliskan."
      },
      {
       "en": "Speak about what you actually did, at the level you actually are — borrowed authority collapses on the first question.",
       "id": "Bicarakan apa yang benar-benar kamu kerjakan, di level yang benar-benar kamu jalani — otoritas pinjaman runtuh pada pertanyaan pertama."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "The available rungs",
        "id": "Anak tangga yang bisa kamu jangkau"
       },
       "body": {
        "en": "Forget keynotes; year one and two offer real rungs: answering questions well in your field's forums and communities (the fastest reputation loop on the internet); writing up a project honestly on a personal blog or the platform post from 4.2; a lightning talk at a local meetup — five minutes, one lesson learned; contributing documentation or small fixes to tools your field uses; helping organise a meetup (organisers meet every speaker). Each rung is available regardless of employer prestige, and each produces a public artefact that the next rung's gatekeeper can check. The compounding is real: meetup organisers become conference reviewers; forum answers become the writing sample that gets the talk accepted.",
        "id": "Lupakan keynote; tahun pertama dan kedua menawarkan anak tangga yang nyata: menjawab pertanyaan dengan baik di forum dan komunitas bidangmu (putaran reputasi tercepat yang ada di internet); menuliskan sebuah proyek secara jujur di blog pribadi atau lewat unggahan platform dari Pelajaran 4.2; presentasi kilat di meetup lokal — lima menit, satu pelajaran yang kamu petik; menyumbang dokumentasi atau perbaikan kecil untuk alat yang dipakai bidangmu; membantu menyelenggarakan meetup (panitia bertemu semua pembicara). Setiap anak tangga bisa dijangkau tanpa peduli seberapa bergengsi tempatmu bekerja, dan masing-masing menghasilkan artefak publik yang bisa diperiksa oleh penjaga gerbang anak tangga berikutnya. Efek berlipatnya nyata: panitia meetup kelak menjadi penilai konferensi; jawaban di forum menjadi contoh tulisan yang membuat proposal presentasimu diterima."
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
        "id": "Satu tulisan per kuartal, lima ratus sampai seribu kata, tentang pekerjaan yang benar-benar kamu lakukan: masalahnya, jalan-jalan yang keliru (di sinilah letak kredibilitasnya), solusinya, dan angka yang boleh kamu bagikan. Disiplinnya langsung diwarisi dari Modul 4 The Map: struktur piramida, bahasa yang konkret, rancangan yang mengutamakan pembaca. Simpan catatan berjalan tentang momen yang layak ditulis — bug yang mengajarimu sesuatu, analisis yang hasilnya mengejutkanmu — karena bagian tersulit bukan menulisnya, melainkan menyadarinya. Tempat menerbitkan tidak sepenting keberadaannya: halaman pribadi yang sederhana atau profil platformmu sama-sama berfungsi; konsistensi suara dari tahun ke tahun itulah yang pada akhirnya diperhatikan orang."
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
        "id": "Anak tangga pertama: presentasi di internal — demo tim, sesi berbagi saat makan siang; setiap organisasi kekurangan orang yang mau menjelaskan sesuatu dengan jernih. Anak tangga kedua: presentasi kilat di meetup lokal — panitia aktif mencari pembicara baru, dan lima menit tentang pelajaran nyata (“apa yang diajarkan 90 ribu baris data berantakan tentang validasi”) adalah jenis presentasi yang selalu disambut hangat. Anak tangga ketiga: presentasi penuh di meetup, lalu acara komunitas dan panel industri seiring jejak artefakmu bertambah. Dua aturan menjaga tangga ini tetap jujur: bicaralah dari pekerjaanmu sendiri di levelmu sendiri — junior yang menjelaskan kesalahan nyatanya mengajarkan lebih banyak daripada junior yang meniru gaya keynote — dan berlatihlah dengan suara lantang minimal tiga kali (obat untuk membeku karena taruhan tinggi dari Modul 4 The Map berlaku persis di sini). Gugup itu normal dan bisa dilewati; otoritas pinjaman tidak keduanya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Which first external move does this lesson recommend for a first-year analyst?",
        "id": "Langkah eksternal pertama mana yang disarankan pelajaran ini untuk analis di tahun pertama?"
       },
       "options": [
        {
         "en": "Pitch a talk to the industry's main conference",
         "id": "Ajukan proposal presentasi ke konferensi utama industri"
        },
        {
         "en": "Write up one real project honestly, and answer questions in the field's community — small artefacts that compound",
         "id": "Tuliskan satu proyek nyata dengan jujur, dan jawab pertanyaan di komunitas bidangmu — artefak-artefak kecil yang bertumbuh berlipat"
        },
        {
         "en": "Start a podcast interviewing senior leaders",
         "id": "Mulai podcast yang mewawancarai para pemimpin senior"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The ladder starts at rungs that are actually reachable and produce checkable artefacts. Conference stages are downstream of years of small public evidence.",
        "id": "Tangganya dimulai dari anak tangga yang benar-benar terjangkau dan menghasilkan artefak yang bisa diperiksa. Panggung konferensi berada di hilir dari bertahun-tahun bukti publik berukuran kecil."
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
      "id": "Visibilitas gagal kalau dijalankan sebagai proyek, dan berhasil kalau dijalankan sebagai sistem. Pelajaran penutup ini merakit sistem milikmu: irama kuartalan berisi contoh internal, artefak eksternal, dan audit citra — lalu mengujinya terhadap dua kegagalan yang lazim, tak terlihat sama sekali dan pamer berlebihan."
     },
     "objectives": [
      {
       "en": "Assemble the quarterly visibility rhythm from the module's parts.",
       "id": "Merakit irama visibilitas kuartalan dari bagian-bagian modul ini."
      },
      {
       "en": "Balance internal and external visibility for your career stage.",
       "id": "Menyeimbangkan visibilitas internal dan eksternal sesuai tahap kariermu."
      },
      {
       "en": "Audit and correct course twice a year with real feedback.",
       "id": "Mengaudit dan mengoreksi arah dua kali setahun dengan umpan balik yang nyata."
      }
     ],
     "takeaways": [
      {
       "en": "The system is small: one travelling artefact, one external piece, one brand audit per quarter — plus the weekly one-liner.",
       "id": "Sistemnya kecil: satu artefak yang beredar, satu karya eksternal, satu audit citra per kuartal — ditambah laporan satu baris tiap Jumat."
      },
      {
       "en": "Internal visibility pays this year's promotion; external visibility pays next decade's options — hold both.",
       "id": "Visibilitas internal membayar promosi tahun ini; visibilitas eksternal membayar pilihan-pilihanmu satu dekade ke depan — pegang keduanya."
      },
      {
       "en": "The system runs on delivered work; the moment it outruns delivery, pause it.",
       "id": "Sistem ini berjalan di atas pekerjaan yang sudah tuntas; begitu ia melaju mendahului hasil kerja, hentikan sejenak."
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
        "id": "Rancang rencana visibilitas untuk kuartal depan: satu artefak internal, satu karya eksternal, percakapan audit citra, dan ke mana laporan satu baris mingguanmu dikirim. Tuliskan, lalu buka tinjauan."
       },
       "debrief": {
        "en": "A model quarter: internal — turn the recurring analysis into a documented, named team asset and present it once; external — one honest write-up of a finished project, posted where your field reads; audit — one “what am I becoming known for?” coffee with a trusted colleague, answers logged in the Route Planner; rhythm — Friday one-liners continue to the manager. Total cost: perhaps six hours across thirteen weeks. If your plan listed five posts and a conference pitch, cut it — the failure mode of visibility systems is ambition that collapses in week four; the version that survives is the boring one.",
        "id": "Contoh kuartal yang ideal: internal — ubah analisis yang berulang menjadi aset tim yang terdokumentasi dan punya nama, lalu presentasikan sekali; eksternal — satu tulisan jujur tentang proyek yang sudah selesai, diunggah di tempat orang-orang di bidangmu membaca; audit — satu obrolan sambil ngopi “saya sedang dikenal sebagai apa?” dengan kolega yang kamu percaya, jawabannya dicatat di Route Planner; irama — laporan satu baris tiap Jumat tetap berjalan ke manajer. Total biaya: mungkin enam jam dalam tiga belas minggu. Kalau rencanamu berisi lima unggahan dan satu proposal konferensi, pangkas — kegagalan sistem visibilitas selalu bermula dari ambisi yang runtuh di minggu keempat; versi yang bertahan adalah versi yang membosankan."
       }
      },
      {
       "h": {
        "en": "Drill 2 — The invisibility case",
        "id": "Latihan 2 — Kasus tak terlihat"
       },
       "body": {
        "en": "A brilliant teammate confides: passed over again for the visible project, “even though everyone knows my work is solid”. Nobody outside the team knows their name. Advise them, then reveal.",
        "id": "Seorang rekan yang brilian curhat: lagi-lagi dilewati untuk proyek yang menonjol, “padahal semua orang tahu kerja saya solid”. Tidak ada seorang pun di luar tim yang tahu namanya. Beri dia saran, lalu buka tinjauan."
       },
       "debrief": {
        "en": "The diagnostic question: “everyone — or your three teammates?” Reputation is consulted at decision points by people two rooms away, and their system is running on noise. The advice, in module order: pick the two-word brand the desired projects require; start supplying samples — the Friday one-liner upward, one presented artefact per quarter, credit given precisely (it recruits echo); and ask their manager one direct question: “what would need to be true for me to be the obvious pick next time?” The last question routinely dissolves years of silent waiting — managers usually answer it specifically, and the answer is a to-do list, not a mystery.",
        "id": "Pertanyaan diagnostiknya: “semua orang — atau tiga rekan setimmu?” Reputasi dirujuk pada titik keputusan oleh orang-orang yang berjarak dua ruangan, dan sistem mereka sedang berjalan di atas kebisingan. Sarannya, mengikuti urutan modul: pilih citra dua kata yang dibutuhkan oleh proyek yang diinginkan; mulai sediakan contoh — laporan satu baris tiap Jumat ke atas, satu artefak yang dipresentasikan per kuartal, pengakuan yang diberikan dengan tepat kepada orang lain (ini mengundang gema balik); dan ajukan satu pertanyaan langsung kepada manajernya: “apa yang harus terjadi supaya lain kali saya jadi pilihan yang paling jelas?” Pertanyaan terakhir itu biasanya melarutkan bertahun-tahun penantian dalam diam — manajer umumnya menjawab dengan spesifik, dan jawabannya adalah daftar tugas, bukan misteri."
       }
      },
      {
       "h": {
        "en": "Drill 3 — The oversharing case",
        "id": "Latihan 3 — Kasus pamer berlebihan"
       },
       "body": {
        "en": "Another colleague posts daily: achievements, “thrilled to announce”, engagement-bait threads, hot takes on management. Their delivery is average. Advise them — or rather, diagnose what happens next. Then reveal.",
        "id": "Kolega lain mengunggah setiap hari: pencapaian, “bangga mengumumkan”, utas umpan interaksi, opini panas tentang manajemen. Hasil kerjanya biasa saja. Beri dia saran — atau lebih tepatnya, diagnosis apa yang akan terjadi berikutnya. Lalu buka tinjauan."
       },
       "debrief": {
        "en": "The trajectory is predictable: the three audiences diverge. The external audience inflates briefly; the internal audience — which sees the delivery gap daily — reprices everything, and “more visible than valuable” becomes the brand, consulted at exactly the decision points that matter. The repair, if they ask: invert the ratio — deliver first, sample sparingly, and let the work set the ceiling on the talking. The rule from this module holds in both directions: visibility must trail delivery by a step. Trailing by ten steps is invisibility (Drill 2); leading by ten is this. One step behind is the entire craft.",
        "id": "Lintasannya bisa ditebak: tiga audiens berpisah jalan. Audiens eksternal membesar sebentar; audiens internal — yang melihat jurang antara omongan dan hasil setiap hari — menilai ulang semuanya, dan “lebih terlihat daripada berharga” menjadi citranya, dirujuk persis di titik-titik keputusan yang penting. Perbaikannya, kalau dia bertanya: balik rasionya — tuntaskan dulu, sediakan contoh secukupnya, dan biarkan hasil kerja menentukan batas atas seberapa banyak yang boleh dibicarakan. Aturan modul ini berlaku ke dua arah: visibilitas harus berjalan satu langkah di belakang hasil kerja. Tertinggal sepuluh langkah artinya tak terlihat (Latihan 2); mendahului sepuluh langkah artinya seperti ini. Satu langkah di belakang — itulah seluruh keahliannya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "What single rule balances the invisibility and oversharing failure modes?",
        "id": "Satu aturan apa yang menyeimbangkan dua kegagalan ini, tak terlihat dan pamer berlebihan?"
       },
       "options": [
        {
         "en": "Post exactly once per week",
         "id": "Unggah tepat sekali seminggu"
        },
        {
         "en": "Visibility trails delivery by one step — samples always backed by shipped work, work always given its sample",
         "id": "Visibilitas berjalan satu langkah di belakang hasil kerja — setiap contoh selalu didukung pekerjaan yang tuntas, setiap pekerjaan selalu diberi contohnya"
        },
        {
         "en": "Focus on internal visibility only until year five",
         "id": "Fokus pada visibilitas internal saja sampai tahun kelima"
        }
       ],
       "correct": 1,
       "why": {
        "en": "One step behind delivery, visibility is evidence; ten steps behind it is waste; ten steps ahead it is theatre. The step is the system.",
        "id": "Satu langkah di belakang hasil kerja, visibilitas adalah bukti; sepuluh langkah di belakang, ia mubazir; sepuluh langkah di depan, ia sandiwara. Satu langkah itulah sistemnya."
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
    "id": "Modul 5 The Route berfokus pada permainan promosi. Kerjakan pelajarannya secara berurutan — setiap pelajaran dibangun di atas pelajaran sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply the promotion game to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu bisa menerapkan permainan promosi pada keputusan kariermu sendiri dengan metode yang konkret dan bisa diulang."
   },
   "lessons": [
    {
     "n": "5.1",
     "title": {
      "en": "How Promotion Decisions Are Actually Made",
      "id": "Bagaimana Keputusan Promosi Sebenarnya Diambil"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Promotions feel like verdicts and operate like committee decisions with budgets, timing and evidence files. This lesson opens the machinery: who actually decides, on what calendar, with what inputs — and why excellent performers without files lose to good performers with them.",
      "id": "Promosi terasa seperti vonis, padahal berjalan seperti keputusan komite: ada anggaran, ada jadwal, ada berkas bukti. Pelajaran ini membuka mesinnya: siapa yang sebenarnya memutuskan, mengikuti kalender apa, dengan masukan apa — dan mengapa orang yang berkinerja unggul tapi tanpa berkas kalah dari orang yang berkinerja baik dengan berkas lengkap."
     },
     "objectives": [
      {
       "en": "Trace the promotion pipeline: nomination, evidence, calibration, budget.",
       "id": "Menelusuri alur promosi: nominasi, bukti, kalibrasi, anggaran."
      },
      {
       "en": "Identify the real decision-makers and what each needs to say yes.",
       "id": "Mengenali siapa pengambil keputusan yang sebenarnya, dan apa yang dibutuhkan masing-masing untuk berkata ya."
      },
      {
       "en": "Locate the calendar: when files close, months before announcements.",
       "id": "Menemukan kalendernya: kapan berkas ditutup, berbulan-bulan sebelum pengumuman."
      }
     ],
     "takeaways": [
      {
       "en": "Promotions are decided in calibration rooms by people who mostly know you as a file — the file is the candidate.",
       "id": "Promosi diputuskan di ruang kalibrasi oleh orang-orang yang sebagian besar hanya mengenalmu sebagai berkas — berkas itulah kandidatnya."
      },
      {
       "en": "Your manager is your advocate, not your judge: arm them or they enter the room empty-handed.",
       "id": "Manajermu adalah pembelamu, bukan hakimmu: bekali dia, atau dia masuk ruangan dengan tangan kosong."
      },
      {
       "en": "The effective deadline is the file deadline — typically a quarter before anything is announced.",
       "id": "Tenggat yang sesungguhnya adalah tenggat berkas — biasanya satu kuartal sebelum apa pun diumumkan."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "The pipeline",
        "id": "Alurnya"
       },
       "body": {
        "en": "A typical cycle: your manager <b>nominates</b> (or does not — the first gate); an <b>evidence file</b> is assembled — achievements, scope, next-level behaviours, often peer feedback; a <b>calibration committee</b> compares candidates across teams, where your manager has minutes to make your case against colleagues making theirs; <b>budget and headcount</b> constraints cut the approved list; announcements follow months later. Grasp what this means: most people in the deciding room have never worked with you. They know the file and the five sentences your advocate manages to say. Optimising the work without optimising the file is competing with one hand.",
        "id": "Siklus yang umum: manajermu <b>menominasikan</b> (atau tidak — inilah gerbang pertama); <b>berkas bukti</b> disusun — pencapaian, lingkup tanggung jawab, perilaku setingkat di atas level saat ini, dan sering kali umpan balik dari rekan; <b>komite kalibrasi</b> membandingkan kandidat lintas tim; di sanalah manajermu hanya punya beberapa menit untuk membela kasusmu melawan manajer lain yang membela kandidat mereka; batasan <b>anggaran dan jumlah posisi</b> memangkas daftar yang disetujui; pengumumannya menyusul berbulan-bulan kemudian. Pahami artinya: kebanyakan orang di ruang keputusan tidak pernah bekerja bersamamu. Yang mereka kenal hanya berkasmu dan lima kalimat yang sempat diucapkan pembelamu. Mengoptimalkan pekerjaan tanpa mengoptimalkan berkas sama saja bertanding dengan satu tangan."
       },
       "img": "../../assets/m/05-summit.jpg",
       "imgPos": "center 40%"
      },
      {
       "icon": "target",
       "h": {
        "en": "The three yeses",
        "id": "Tiga “ya” yang dibutuhkan"
       },
       "body": {
        "en": "<b>Your manager</b> must believe the case is strong enough to spend political capital on — they are ranking you against their other reports and their credibility in the room. <b>The committee</b> needs evidence they can defend in comparison: next-level behaviours already demonstrated, results with numbers, no unresolved flags. <b>The budget owner</b> needs the promotion to fit this cycle's constraints — which is why “yes, but next cycle” is often literally true rather than a soft rejection. Each yes has different evidence needs, and Module 5.2 builds the case file that serves all three. The immediate action from this lesson: learn your organisation's actual calendar — ask your manager directly, “when do promotion files effectively close?”",
        "id": "<b>Manajermu</b> harus yakin kasusmu cukup kuat untuk layak ia belanjakan modal politiknya — ia sedang membandingkanmu dengan bawahannya yang lain, dan mempertaruhkan kredibilitasnya di ruangan itu. <b>Komite</b> butuh bukti yang bisa mereka bela saat dibandingkan: perilaku level berikutnya yang sudah terbukti, hasil yang ada angkanya, tidak ada catatan merah yang belum tuntas. <b>Pemilik anggaran</b> butuh promosi itu muat dalam batasan siklus ini — itulah sebabnya “ya, tapi siklus depan” sering kali benar-benar jujur, bukan penolakan halus. Setiap “ya” butuh bukti yang berbeda, dan Pelajaran 5.2 membangun berkas kasus yang melayani ketiganya. Tindakan langsung dari pelajaran ini: cari tahu kalender organisasimu yang sebenarnya — tanyakan langsung kepada manajermu, “kapan berkas promosi benar-benar ditutup?”"
       }
      },
      {
       "icon": "book",
       "h": {
        "en": "Why the best performer sometimes loses",
        "id": "Mengapa yang terbaik kadang kalah"
       },
       "body": {
        "en": "Calibration compares files, not souls. The excellent engineer whose wins were never logged, whose artefacts carry no name, whose manager arrives with adjectives instead of numbers — loses to the good engineer with eighteen months of documented, witnessed, quantified delivery. This is not corruption; it is epistemics: committees can only weigh what reaches the room. The response this course has been building all along: the win log (evidence), legibility habits (witnesses), brand samples (what the room already believes). The promotion file is those systems' output, printed. If you started them in Module 1, the file writes itself; if not, today is the day.",
        "id": "Kalibrasi membandingkan berkas, bukan jiwa. Insinyur unggul yang capaiannya tidak pernah dicatat, yang artefaknya tidak membawa namanya, yang manajernya datang membawa kata sifat alih-alih angka — kalah dari insinyur baik dengan delapan belas bulan hasil kerja yang terdokumentasi, punya saksi, dan terukur. Ini bukan kecurangan; ini soal cara pengetahuan bekerja: komite hanya bisa menimbang apa yang sampai ke ruangan. Jawabannya sudah dibangun kursus ini sejak awal: catatan capaian (bukti), kebiasaan keterbacaan (saksi), contoh-contoh citra (apa yang sudah dipercaya ruangan itu). Berkas promosi adalah hasil cetak dari sistem-sistem tersebut. Kalau kamu memulainya sejak Modul 1, berkasnya menulis dirinya sendiri; kalau belum, hari ini waktunya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Promotions announce in January. When is your case effectively decided?",
        "id": "Promosi diumumkan bulan Januari. Kapan kasusmu sebenarnya diputuskan?"
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
        "id": "Berkas itulah kandidatnya, dan berkas ditutup satu kuartal atau lebih sebelum pengumuman. Bukti yang datang setelah penutupan harus menunggu satu siklus penuh."
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
      "id": "Kasus promosi dibangun seperti kasus hukum: klaim, bukti, saksi — disusun selama berkuartal-kuartal, bukan seminggu sebelum berkas ditutup. Pelajaran ini menyusun kasus milikmu: klaim bahwa kamu sudah bekerja di level berikutnya, berkas bukti dari catatan capaianmu, dan pengarahan singkat yang membekali manajermu sebagai pembela."
     },
     "objectives": [
      {
       "en": "Frame the case as next-level behaviours already demonstrated, not tenure served.",
       "id": "Membingkai kasus sebagai perilaku level berikutnya yang sudah terbukti, bukan sebagai lama masa kerja."
      },
      {
       "en": "Assemble the evidence file from the win log: scope, numbers, witnesses.",
       "id": "Menyusun berkas bukti dari catatan capaian: lingkup, angka, saksi."
      },
      {
       "en": "Brief your advocate with the one-pager they can argue from.",
       "id": "Membekali pembelamu dengan satu halaman ringkas yang bisa ia jadikan dasar argumen."
      }
     ],
     "takeaways": [
      {
       "en": "The winning argument is always “already operating at the next level” — never “deserves it” or “has waited long enough”.",
       "id": "Argumen yang menang selalu “sudah bekerja di level berikutnya” — tidak pernah “pantas mendapatkannya” atau “sudah cukup lama menunggu”."
      },
      {
       "en": "Evidence beats adjectives in calibration exactly as it did in CVs: numbers, artefacts, named witnesses.",
       "id": "Di ruang kalibrasi, bukti mengalahkan kata sifat persis seperti di CV: angka, artefak, saksi yang punya nama."
      },
      {
       "en": "Your manager argues your case from whatever you gave them — give them a weapon, not a feeling.",
       "id": "Manajermu membela kasusmu dengan apa pun yang kamu berikan — beri dia senjata, bukan perasaan."
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
        "id": "Komite mempromosikan untuk mengonfirmasi level yang sudah dicapai — “ya” yang paling aman di ruangan itu adalah “orang ini sudah menjalankan pekerjaannya”. Maka tulang punggung kasusmu adalah ekspektasi resmi level berikutnya (kebanyakan organisasi memilikinya; minta panduan level ke HR atau manajermu), dipetakan satu per satu terhadap perilaku yang sudah kamu tunjukkan: panduan level bilang “memiliki masalah dari ujung ke ujung” — ini dua masalah yang kamu tangani dari ujung ke ujung, lengkap dengan tanggal dan hasilnya; panduan level bilang “mengembangkan orang lain” — ini anak magang yang kamu dampingi, buku manual yang diadopsi tim, sesi pelatihan yang kamu jalankan. Celah dalam pemetaan bukan alasan gugur; celah itu target dua kuartal berikutnya, dan justru karena itulah kasus mulai dibangun setahun sebelumnya."
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
        "id": "Dari catatan capaian, pilih enam sampai sepuluh entri yang menopang pemetaan itu, masing-masing ditulis begini: apa yang kamu lakukan, lingkupnya (ukuran tim, anggaran, jumlah pengguna, jumlah baris data), hasil yang terukur, dan siapa yang bisa memverifikasi. Lampirkan atau tautkan artefaknya — dasbor, laporan pasca-insiden, buku manual yang diadopsi. Sertakan satu cerita pertumbuhan yang jujur: kesalahan yang nyata, apa yang berubah setelahnya, bukti perubahannya — komite lebih percaya pada berkas yang punya bayangan; berkas tanpa cela terbaca seperti hasil kurasi. Jaga semuanya tetap dua halaman: ruang kalibrasi hanya punya beberapa menit per kandidat, dan berkas yang tidak bisa dibaca sekilas adalah berkas yang tidak membela apa pun."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "Arming the advocate",
        "id": "Membekali pembelamu"
       },
       "body": {
        "en": "A quarter before files close, book the conversation: “I'd like to be considered next cycle. Here's a one-pager mapping my work against the level guide — where do you see the case as strong, and where is it thin?” Three outcomes, all wins. If they agree and the case is strong, your advocate now walks into the room armed. If they see gaps, you have a quarter of targeted work and their investment in the outcome. If they refuse engagement entirely across two cycles — that is architecture-level data (Module 1.3's decision gate consumes it). Managers advocate hardest for cases they helped build; the early conversation converts your promotion from their task into their project.",
        "id": "Satu kuartal sebelum berkas ditutup, jadwalkan percakapannya: “Saya ingin dipertimbangkan di siklus depan. Ini satu halaman yang memetakan pekerjaan saya terhadap panduan level — menurut Bapak/Ibu, di mana kasus ini kuat, dan di mana masih tipis?” Tiga kemungkinan hasil, dan semuanya kemenangan. Kalau ia setuju dan kasusmu kuat, pembelamu kini masuk ruangan dengan bekal lengkap. Kalau ia melihat celah, kamu punya satu kuartal kerja yang terarah, plus keterlibatannya pada hasilnya. Kalau ia menolak terlibat sama sekali selama dua siklus berturut-turut — itu data di level arsitektur (gerbang keputusan di Pelajaran 1.3 yang akan mengolahnya). Manajer membela paling gigih kasus yang ikut mereka bangun; percakapan sejak dini mengubah promosimu dari tugas mereka menjadi proyek mereka."
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
        "id": "“Saya sudah dua setengah tahun di sini, dan rasanya sudah waktunya. Semua teman seangkatan saya sudah dipromosikan. Saya bekerja sangat keras dan merasa sudah pantas.”"
       },
       "strong": {
        "en": "“I'd like to build the case for next cycle. Against the senior-analyst guide: I've owned the churn and pricing analyses end-to-end for three quarters (linked), the runbook I wrote onboarded both new joiners, and my error-catch on the Q2 forecast saved the re-plan (Pak Har can verify). The thin spot I see is cross-team scope — I'd like your read, and a project that would close it.”",
        "id": "“Saya ingin membangun kasus untuk siklus depan. Terhadap panduan analis senior: selama tiga kuartal saya memegang analisis churn dan harga dari ujung ke ujung (tautannya ada), buku manual yang saya tulis dipakai untuk mendampingi dua karyawan baru, dan kesalahan yang saya tangkap di proyeksi Q2 menyelamatkan perencanaan ulang (Pak Har bisa memverifikasi). Bagian yang masih tipis menurut saya adalah lingkup lintas tim — saya ingin mendengar penilaian Bapak/Ibu, dan proyek apa yang bisa menutupnya.”"
       },
       "why": {
        "en": "Tenure and feelings argue nothing in calibration. The strong version maps evidence to the level guide, names witnesses, self-identifies the gap, and recruits the manager into the build.",
        "id": "Masa kerja dan perasaan tidak membela apa pun di ruang kalibrasi. Versi yang kuat memetakan bukti ke panduan level, menyebut nama saksi, mengakui celahnya sendiri, dan mengajak manajer ikut membangun kasusnya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does the file include one honest growth story rather than only wins?",
        "id": "Mengapa berkas memuat satu cerita pertumbuhan yang jujur, bukan hanya deretan capaian?"
       },
       "options": [
        {
         "en": "HR requires a weakness section",
         "id": "HR mewajibkan bagian kelemahan"
        },
        {
         "en": "Committees trust files with a verified shadow — flawless files read as curated, and next-level readiness includes learning from failure",
         "id": "Komite lebih percaya pada berkas yang punya bayangan yang terverifikasi — berkas tanpa cela terbaca seperti hasil kurasi, dan kesiapan level berikutnya mencakup belajar dari kegagalan"
        },
        {
         "en": "It lowers expectations for the following year",
         "id": "Ia menurunkan ekspektasi untuk tahun berikutnya"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The growth story is evidence of exactly the meta-skill the next level demands — and it inoculates the file against the curated-perfection discount.",
        "id": "Cerita pertumbuhan adalah bukti dari persis meta-keterampilan yang dituntut level berikutnya — dan ia melindungi berkas dari potongan nilai karena terkesan terlalu sempurna."
       }
      }
     ],
     "tool": {
      "id": "field",
      "mode": "promo",
      "title": {
       "en": "Build the case from your win log",
       "id": "Bangun kasus dari catatan capaianmu"
      },
      "body": {
       "en": "The promotion case builder assembles a one-page file from your logged wins and three claims, then checks it against this module's evidence standards.",
       "id": "Penyusun kasus promosi merangkai berkas satu halaman dari capaian yang sudah kamu catat dan tiga klaim, lalu memeriksanya terhadap standar bukti modul ini."
      },
      "cta": {
       "en": "Open the case builder →",
       "id": "Buka penyusun kasus →"
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
      "id": "Waktu yang berbeda bisa membuat dua kasus yang identik berakhir berbeda. Pelajaran ini membahas koreografi percakapan promosi: kapan mengangkatnya, cara menjalankan permintaannya, cara merespons masing-masing dari empat jawaban yang mungkin — dan cara menjaga hubungan tetap kuat apa pun jawabannya."
     },
     "objectives": [
      {
       "en": "Time the conversation to the file calendar and the organisation's weather.",
       "id": "Menyesuaikan waktu percakapan dengan kalender berkas dan cuaca organisasi."
      },
      {
       "en": "Run the ask as a case review, not a demand or a plea.",
       "id": "Menjalankan permintaan sebagai tinjauan kasus bersama, bukan tuntutan atau permohonan."
      },
      {
       "en": "Respond professionally to yes, not-yet, silence, and no.",
       "id": "Merespons secara profesional terhadap ya, belum, diam, dan tidak."
      }
     ],
     "takeaways": [
      {
       "en": "Raise it a quarter before files close, in a scheduled conversation — never in the corridor, never in anger.",
       "id": "Angkat satu kuartal sebelum berkas ditutup, dalam percakapan yang dijadwalkan — jangan pernah di lorong, jangan pernah dalam keadaan marah."
      },
      {
       "en": "The ask is collaborative: “help me see the case as the committee will” outperforms “I want a promotion”.",
       "id": "Permintaannya bersifat kolaboratif: “bantu saya melihat kasus ini dengan kacamata komite” jauh lebih efektif daripada “saya mau promosi”."
      },
      {
       "en": "Every answer except yes comes with a follow-up that converts it into a plan with dates.",
       "id": "Setiap jawaban selain ya harus disertai tindak lanjut yang mengubahnya menjadi rencana dengan tanggal."
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
        "id": "Batasan kerasnya adalah kalender berkas dari Pelajaran 5.1: percakapan terjadi satu kuartal sebelum berkas ditutup, supaya celah masih bisa ditutup dan pembelamu sempat bersiap. Batasan lunaknya adalah cuaca organisasi: pembekuan perekrutan, kuartal yang buruk, reorganisasi yang sedang berjalan — semuanya menurunkan peluang “ya” tanpa peduli seberapa layak kamu — sehingga mengangkat kasus satu siklus kemudian, ke cuaca yang lebih tenang, kadang justru langkah waktu terbaik yang tersedia. Yang tidak pernah berhasil: menyergap di lorong, mengajukan diri tepat setelah rekan ditolak (anggaran baru saja terpakai), dan membuka dengan ancaman mengundurkan diri, yang mengubah percakapan promosi menjadi negosiasi sandera yang tidak akan dilewati hubunganmu dalam keadaan utuh."
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
        "id": "Jadwalkan secara eksplisit (“saya ingin 30 menit untuk membahas pengembangan saya menuju level berikutnya”), bawa satu halaman dari Pelajaran 5.2, dan buka dengan nada kolaboratif: “Saya yakin kasusnya sudah dekat; saya ingin mendengar penilaian Bapak/Ibu tentang posisinya sekarang, dan apa yang masih perlu dilengkapi.” Lalu diam dan mencatat. Sikapnya adalah tinjauan kasus antar-kolega, yang memungkinkan manajermu berperan sebagai pelatih dan pembela, bukan bertahan sebagai penjaga gerbang. Tutup dengan langkah konkret, apa pun nada percakapannya: “jadi rencananya X sebelum September plus proyek lintas tim — bisa kita cek perkembangannya tiap bulan?” Pengecekan bulanan itulah mekanisme yang menjaga kasus tetap hidup, bukan dibangkitkan setahun sekali."
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
        "id": "<b>Ya:</b> pastikan mekanismenya — “apa yang Bapak/Ibu perlukan dari saya untuk berkasnya?” — dan terus tuntaskan pekerjaan; “ya” yang sudah diucapkan pun pernah kalah di ruang kalibrasi. <b>Belum, karena X:</b> jawaban yang paling berguna — ubah X menjadi target bertanggal saat itu juga dan jadwalkan pengecekan bulanan; “belum” yang disertai rencana sangat sering berubah menjadi “ya” di siklus berikutnya. <b>Jawaban mengambang:</b> (“kita lihat dulu setahun ini”) — desak dengan halus, sekali saja, untuk mendapat kejelasan: “kasus yang lengkap itu isinya apa saja?”; jawaban yang tetap mengambang selama dua percakapan adalah informasi tersendiri tentang seberapa besar dukungan yang kamu punya. <b>Tidak, dan alasannya tidak masuk akal:</b> tetap profesional di ruangan itu, cocokkan alasannya dengan panduan level sesudahnya, lalu masukkan hasilnya ke Pelajaran 5.4 dan gerbang keputusan. Di setiap cabang, hubungan harus selamat dari percakapan ini — kamu akan membutuhkannya, jalur mana pun yang kamu ambil setelahnya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Your manager answers: “not yet — I need to see you lead something cross-team.” The strongest response?",
        "id": "Manajermu menjawab: “belum — saya perlu melihat kamu memimpin sesuatu yang lintas tim.” Respons yang paling kuat?"
       },
       "options": [
        {
         "en": "Accept it and wait to be given something cross-team",
         "id": "Terima, lalu tunggu sampai diberi tugas lintas tim"
        },
        {
         "en": "Convert it on the spot: “agreed — the vendor-migration project would demonstrate that. If I lead it and it lands, is the case complete for the March file? Can we check monthly?”",
         "id": "Ubah saat itu juga: “setuju — proyek migrasi vendor bisa membuktikannya. Kalau saya memimpinnya dan berhasil, apakah kasusnya lengkap untuk berkas bulan Maret? Bisa kita cek tiap bulan?”"
        },
        {
         "en": "Ask HR whether cross-team leadership is really in the level guide",
         "id": "Tanyakan ke HR apakah kepemimpinan lintas tim memang ada di panduan level"
        }
       ],
       "correct": 1,
       "why": {
        "en": "A “not yet” is an option contract: name the project, the date, the completion condition and the check-in — and the vague future becomes a scheduled yes.",
        "id": "“Belum” adalah kontrak bersyarat: sebutkan proyeknya, tanggalnya, syarat selesainya, dan jadwal pengecekannya — maka masa depan yang samar berubah menjadi “ya” yang terjadwal."
       }
      }
     ]
    },
    {
     "n": "5.4",
     "title": {
      "en": "Navigating a Promotion Delay or Denial",
      "id": "Menghadapi Promosi yang Tertunda atau Ditolak"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "slides",
     "placeholder": false,
     "overview": {
      "en": "Sooner or later a cycle passes you by. What you do in the following month decides more than the outcome did. This deck walks the delay-or-denial protocol: the 48-hour rule, the diagnostic conversation, the three verdicts, and the comeback plan for each.",
      "id": "Cepat atau lambat, akan ada siklus yang melewatimu. Apa yang kamu lakukan sebulan setelahnya menentukan lebih banyak daripada keputusannya sendiri. Rangkaian slide ini menelusuri protokol saat promosi tertunda atau ditolak: aturan 48 jam, percakapan diagnostik, tiga kemungkinan vonis, dan rencana bangkit untuk masing-masing."
     },
     "objectives": [
      {
       "en": "Apply the 48-hour rule before any response to a promotion disappointment.",
       "id": "Menerapkan aturan 48 jam sebelum memberi respons apa pun atas kekecewaan promosi."
      },
      {
       "en": "Run the diagnostic conversation that separates case, cycle and ceiling.",
       "id": "Menjalankan percakapan diagnostik yang memisahkan tiga hal: kasus, siklus, dan batas atas."
      },
      {
       "en": "Execute the comeback plan matching your verdict.",
       "id": "Menjalankan rencana bangkit yang sesuai dengan vonis yang kamu terima."
      }
     ],
     "takeaways": [
      {
       "en": "Your reaction is watched more closely than your file ever was — composure here is next cycle's first evidence.",
       "id": "Reaksimu diamati jauh lebih dekat daripada berkasmu — ketenangan di momen ini adalah bukti pertama untuk siklus berikutnya."
      },
      {
       "en": "Three different verdicts wear the same announcement: weak case, wrong cycle, or hard ceiling — diagnose before deciding.",
       "id": "Tiga vonis yang berbeda datang dengan pengumuman yang sama: kasus yang lemah, siklus yang salah, atau batas atas yang keras — diagnosis dulu sebelum memutuskan."
      },
      {
       "en": "A ceiling is not a tragedy; it is routing information for the architecture.",
       "id": "Batas atas bukan tragedi; ia informasi arah bagi arsitektur kariermu."
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
         "id": "Tidak ada keputusan, tidak ada email, tidak ada komentar di lorong selama dua hari — kekecewaan suka membuat janji yang harus dibayar oleh ketenanganmu."
        },
        {
         "en": "In the room, one sentence suffices: “I'm disappointed, and I want to understand it properly — can we debrief next week?”",
         "id": "Di ruangan itu, satu kalimat sudah cukup: “Saya kecewa, dan saya ingin memahaminya dengan benar — bisa kita bahas lagi minggu depan?”"
        },
        {
         "en": "The organisation is watching the reaction, not the rejection: calm here is the strongest possible opening of the next case.",
         "id": "Organisasi memperhatikan reaksinya, bukan penolakannya: tenang di titik ini adalah pembuka terkuat untuk kasus berikutnya."
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
         "id": "Terjadwal, tenang, tiga pertanyaan: Apa alasan komite yang sebenarnya? Berkas yang berhasil persisnya berisi apa? Apakah itu bisa dicapai di sini dalam satu siklus?"
        },
        {
         "en": "Listen for which verdict the answers describe — case, cycle, or ceiling.",
         "id": "Dengarkan vonis mana yang tergambar dari jawabannya — kasus, siklus, atau batas atas."
        },
        {
         "en": "Take notes visibly; the conversation is also your advocate's memo for next time.",
         "id": "Mencatatlah secara terlihat; percakapan ini sekaligus menjadi memo bagi pembelamu untuk siklus berikutnya."
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
         "id": "Alasannya mengarah ke celah yang nyata: lingkup, bukti, atau perilaku level berikutnya yang belum terlihat."
        },
        {
         "en": "Comeback: dated targets per gap, monthly check-ins, file rebuilt next cycle — the 5.3 “not yet” play.",
         "id": "Bangkit: target bertanggal untuk setiap celah, pengecekan bulanan, berkas dibangun ulang untuk siklus depan — strategi “belum” dari Pelajaran 5.3."
        },
        {
         "en": "Highest conversion rate of the three verdicts. Most delays are this one.",
         "id": "Peluang berubah menjadi “ya” paling tinggi di antara tiga vonis. Kebanyakan penundaan masuk kategori ini."
        }
       ]
      },
      {
       "h": {
        "en": "Verdict 2 — Wrong cycle",
        "id": "Vonis 2 — Siklus yang salah"
       },
       "points": [
        {
         "en": "The case held; budget, headcount or politics did not — “yes, but not now” in its honest form.",
         "id": "Kasusnya kuat; anggaran, jumlah posisi, atau politiknya yang tidak mendukung — “ya, tapi bukan sekarang” dalam bentuknya yang jujur."
        },
        {
         "en": "Comeback: keep the file warm, secure written acknowledgment of readiness, confirm priority next cycle.",
         "id": "Bangkit: jaga berkas tetap segar, minta pengakuan tertulis bahwa kamu sudah siap, pastikan kamu jadi prioritas di siklus depan."
        },
        {
         "en": "Two consecutive wrong-cycles with no interim recognition is a ceiling wearing a calendar costume.",
         "id": "Dua siklus berturut-turut “salah waktu” tanpa pengakuan apa pun di antaranya adalah batas atas yang menyamar sebagai masalah kalender."
        }
       ]
      },
      {
       "h": {
        "en": "Verdict 3 — The ceiling",
        "id": "Vonis 3 — Batas atas"
       },
       "points": [
        {
         "en": "Signals: vague reasons that shift, no achievable file described, peers with equal evidence advancing.",
         "id": "Tandanya: alasan yang samar dan terus berubah, tidak ada gambaran berkas yang bisa dicapai, rekan dengan bukti setara terus naik."
        },
        {
         "en": "Comeback: not a fight — a routing decision. Open Module 7: the market prices your assets even when this room does not.",
         "id": "Bangkit: bukan dengan bertarung — dengan keputusan arah. Buka Modul 7: pasar menghargai asetmu meski ruangan ini tidak."
        },
        {
         "en": "Leave well regardless (Module 7.4): the industry is small and the file travels with you, informally.",
         "id": "Apa pun yang terjadi, pergilah dengan baik (Pelajaran 7.4): industrinya kecil, dan berkasmu ikut bersamamu secara informal."
        }
       ]
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Two cycles running you were told “strong case, bad timing”, with no interim scope or recognition added. The deck's read?",
        "id": "Dua siklus berturut-turut kamu diberi tahu “kasusnya kuat, waktunya tidak tepat”, tanpa tambahan lingkup atau pengakuan apa pun di antaranya. Bacaan slide ini?"
       },
       "options": [
        {
         "en": "Wait a third cycle — budgets are genuinely tight everywhere",
         "id": "Tunggu siklus ketiga — anggaran memang sedang ketat di mana-mana"
        },
        {
         "en": "Treat it as a probable ceiling: verify against peers' outcomes, then run the architecture's decision gate toward Module 7",
         "id": "Perlakukan sebagai kemungkinan batas atas: cocokkan dengan nasib rekan-rekanmu, lalu jalankan gerbang keputusan arsitektur ke arah Modul 7"
        },
        {
         "en": "Escalate to the committee directly",
         "id": "Eskalasi langsung ke komite"
        }
       ],
       "correct": 1,
       "why": {
        "en": "One wrong-cycle is weather; two with no interim investment is a pattern. The composed response is routing, not a third year of waiting.",
        "id": "Satu kali salah siklus adalah cuaca; dua kali tanpa investasi apa pun di antaranya adalah pola. Respons yang tenang adalah mengubah arah, bukan menunggu tahun ketiga."
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
    "id": "Modul 6 The Route berfokus pada mentor, sponsor, dan lingkaran dalammu. Kerjakan pelajarannya secara berurutan — setiap pelajaran dibangun di atas pelajaran sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply mentors, sponsors, and your inner circle to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu bisa menerapkan cara membangun mentor, sponsor, dan lingkaran dalam pada keputusan kariermu sendiri dengan metode yang konkret dan bisa diulang."
   },
   "lessons": [
    {
     "n": "6.1",
     "title": {
      "en": "Mentors vs. Sponsors: A Critical Distinction",
      "id": "Mentor vs. Sponsor: Perbedaan yang Menentukan"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "A mentor talks with you; a sponsor talks about you — in rooms where your file is on the table. Confusing the two is the most expensive networking error in early careers. This lesson separates the roles, what each is for, and how each is actually obtained.",
      "id": "Mentor berbicara denganmu; sponsor berbicara tentangmu — di ruangan tempat berkasmu ada di atas meja. Mencampuradukkan keduanya adalah kesalahan networking termahal di awal karier. Pelajaran ini memisahkan kedua peran, kegunaan masing-masing, dan cara masing-masing sebenarnya diperoleh."
     },
     "objectives": [
      {
       "en": "Distinguish mentorship (guidance) from sponsorship (advocacy) and what each costs the giver.",
       "id": "Membedakan mentoring (bimbingan) dari sponsorship (pembelaan), dan apa yang harus dibayar oleh pemberinya."
      },
      {
       "en": "Identify which you currently lack and which the next transition needs.",
       "id": "Mengenali mana yang saat ini belum kamu miliki, dan mana yang dibutuhkan untuk transisi berikutnya."
      },
      {
       "en": "Recognise sponsorship's currency: risk taken on your name.",
       "id": "Memahami mata uang sponsorship: risiko yang ditanggung seseorang atas namamu."
      }
     ],
     "takeaways": [
      {
       "en": "Mentors give you their thinking; sponsors spend their credibility — which is why sponsors are rarer and never recruited by asking.",
       "id": "Mentor memberimu cara berpikirnya; sponsor membelanjakan kredibilitasnya — itulah sebabnya sponsor lebih langka, dan tidak pernah didapat dengan meminta."
      },
      {
       "en": "Advice without advocacy explains careers that are well-guided and stuck.",
       "id": "Nasihat tanpa pembelaan menjelaskan mengapa ada karier yang terbimbing dengan baik tapi tetap macet."
      },
      {
       "en": "Sponsorship is earned by being safe to bet on — delivery plus composure plus legibility, over time.",
       "id": "Sponsorship diraih dengan menjadi orang yang aman untuk dipertaruhkan — hasil kerja, ditambah ketenangan, ditambah keterbacaan, dari waktu ke waktu."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "Two different transactions",
        "id": "Dua transaksi yang berbeda"
       },
       "body": {
        "en": "<b>Mentorship</b> transfers judgment: how to read the terrain, which skills to build, what the mentor wishes they had known. Its cost to the giver is time, which many seniors give gladly — teaching is rewarding and low-risk. <b>Sponsorship</b> transfers credibility: “put her on the project — I'll vouch for it”; “he's ready for the level — I've seen the work”. Its cost is risk: if you fail, the sponsor's judgment is repriced in the room. This is why organisations overflow with advice and starve for advocacy, and why the two roles usually live in different people: the mentor may be anywhere; the sponsor must be where your decisions are made.",
        "id": "<b>Mentoring</b> memindahkan pertimbangan: cara membaca medan, keterampilan mana yang perlu dibangun, apa yang dulu ingin diketahui sang mentor lebih awal. Biayanya bagi pemberi adalah waktu, dan banyak senior memberikannya dengan senang hati — mengajar itu memuaskan dan risikonya rendah. <b>Sponsorship</b> memindahkan kredibilitas: “taruh dia di proyek itu — saya yang jamin”; “dia sudah siap untuk level itu — saya sudah lihat kerjanya”. Biayanya adalah risiko: kalau kamu gagal, penilaian sang sponsor ikut dinilai ulang di ruangan itu. Itulah sebabnya organisasi kebanjiran nasihat tapi kekurangan pembelaan, dan mengapa kedua peran ini biasanya ada pada orang yang berbeda: mentor bisa ada di mana saja; sponsor harus berada di tempat keputusan tentangmu diambil."
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
        "id": "Diagnosis dari situasimu, bukan dari templat. Kesulitan memilih arah, membaca organisasi, atau menumbuhkan keterampilan — itu wilayah mentor. Berkas kuat, citra jelas, tapi pintu tidak kunjung terbuka; dilewati untuk proyek yang menonjol; “kerja bagus, teruskan” tanpa lingkup yang bertambah — itu celah sponsorship, dan mentoring sebanyak apa pun tidak akan menutupnya. Kebanyakan karier awal membutuhkan keduanya: satu atau dua mentor untuk pertimbangan (termasuk satu di luar perusahaanmu untuk nasihat yang bebas kepentingan), dan seiring waktu, sponsorship yang diraih di tempat keputusan diambil. Diagnostik di Route Planner memuat dimensi hubungan persis untuk pembacaan ini."
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
        "id": "Kamu tidak bisa meminta seseorang membelanjakan kredibilitasnya untukmu — permintaan itu sendiri menunjukkan kamu tidak paham harganya. Sponsorship diberikan ketika tiga syarat terpenuhi di benak sang sponsor: <b>mereka sudah melihat kerjamu</b> (keterbacaan — artefak dan hasilmu sampai kepada mereka); <b>mereka percaya pada ketenanganmu</b> (kamu tidak akan mempermalukan mereka di ruangan tempat mereka menempatkanmu); <b>taruhan itu juga menguntungkan mereka</b> (keberhasilanmu mencerminkan penilaian mereka, mengisi kebutuhan proyek mereka, memperkuat kedalaman tim mereka). Artinya, sponsorship dibangun secara tidak langsung: tuntaskan pekerjaan secara terlihat di dekat orang-orang yang punya wewenang untuk bertaruh, dan bersikaplah — di rapat, di bawah tekanan, kepada junior — seperti orang yang aman untuk dijamin. Pelajaran 6.3 mengubah ini menjadi praktik."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Your work is strong and well-documented, your reviews glowing — yet visible projects keep going to peers. What is missing?",
        "id": "Kerjamu kuat dan terdokumentasi dengan baik, penilaian kinerjamu cemerlang — tapi proyek yang menonjol terus jatuh ke rekan lain. Apa yang kurang?"
       },
       "options": [
        {
         "en": "More mentors to advise on strategy",
         "id": "Lebih banyak mentor untuk memberi nasihat strategi"
        },
        {
         "en": "Sponsorship — nobody in the deciding rooms is spending credibility on your name",
         "id": "Sponsorship — tidak ada seorang pun di ruang keputusan yang membelanjakan kredibilitasnya atas namamu"
        },
        {
         "en": "Better time management",
         "id": "Manajemen waktu yang lebih baik"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Guidance is not the bottleneck; advocacy is. The gap closes through visible delivery near decision-makers, not through more advice.",
        "id": "Bimbingan bukan hambatannya; pembelaanlah yang kurang. Celah ini ditutup lewat hasil kerja yang terlihat di dekat pengambil keputusan, bukan lewat nasihat tambahan."
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
      "id": "Hubungan mentoring lebih sering mati karena ketidakjelasan daripada karena hal lain. Pelajaran ini membangunnya dengan integritas dan struktur: memilih berdasarkan celah yang benar-benar kamu miliki, meminta dengan cara yang menghargai waktu sang mentor, dan menjalankan hubungannya sehingga kedua pihak mendapat manfaat."
     },
     "objectives": [
      {
       "en": "Choose mentors for specific gaps, not for seniority prestige.",
       "id": "Memilih mentor berdasarkan celah yang spesifik, bukan karena gengsi senioritas."
      },
      {
       "en": "Open with the small, specific, time-boxed ask — never “will you be my mentor?”.",
       "id": "Membuka dengan permintaan yang kecil, spesifik, dan berbatas waktu — jangan pernah dengan “maukah menjadi mentor saya?”."
      },
      {
       "en": "Run the relationship: prepared sessions, closed loops, honest value back.",
       "id": "Menjalankan hubungannya: sesi yang dipersiapkan, setiap urusan ditutup, dan nilai balik yang jujur."
      }
     ],
     "takeaways": [
      {
       "en": "“Will you be my mentor?” asks for an undefined lifetime commitment; a specific question asks for twenty minutes — start there.",
       "id": "“Maukah menjadi mentor saya?” meminta komitmen seumur hidup yang tidak jelas batasnya; pertanyaan yang spesifik hanya meminta dua puluh menit — mulailah dari sana."
      },
      {
       "en": "The mentee runs the relationship: agendas, follow-through, and reporting back what happened to the advice.",
       "id": "Mentee yang menjalankan hubungannya: menyiapkan agenda, menindaklanjuti, dan melaporkan kembali apa yang terjadi setelah nasihat itu dijalankan."
      },
      {
       "en": "Mentors stay for one reason: visible evidence that their input changes your actions.",
       "id": "Mentor bertahan karena satu alasan: bukti nyata bahwa masukan mereka mengubah tindakanmu."
      }
     ],
     "sections": [
      {
       "icon": "target",
       "h": {
        "en": "Choosing for the gap",
        "id": "Memilih berdasarkan celah"
       },
       "body": {
        "en": "Name the gap first (1.4's inventory): decoding the organisation → someone two levels up inside it; technical depth → the respected senior in that craft, employer irrelevant; career architecture → someone whose path resembles your intended one, five years ahead; industry perspective → someone outside your company entirely. Two or three mentors covering distinct gaps beat one all-purpose sage — and the person slightly ahead of you often teaches the mechanics better than the legend thirty years out, because they still remember the actual steps. Sources: your own organisation, alumni networks, professional communities, and Metanoia's Basecamp mentors.",
        "id": "Sebut dulu celahnya (inventaris dari Pelajaran 1.4): membaca organisasi → seseorang dua level di atasmu di dalam organisasi itu; kedalaman teknis → senior yang disegani di bidang itu, di perusahaan mana pun; arsitektur karier → seseorang yang jalurnya mirip dengan yang kamu tuju, lima tahun lebih dulu; perspektif industri → seseorang yang sepenuhnya di luar perusahaanmu. Dua atau tiga mentor yang masing-masing menutup celah berbeda lebih baik daripada satu orang bijak serba bisa — dan orang yang hanya sedikit di depanmu sering mengajarkan mekanismenya lebih baik daripada legenda yang sudah tiga puluh tahun berkarier, karena mereka masih ingat langkah-langkah nyatanya. Sumbernya: organisasimu sendiri, jaringan alumni, komunitas profesional, dan para mentor Basecamp Metanoia."
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
        "id": "Cara menulis email perkenalan dari Pelajaran 4.3 The Map berlaku persis di sini: riset yang terlihat, satu pertanyaan spesifik, batas lima belas menit, dan jalan keluar yang sopan. “Perpindahan Bapak/Ibu dari audit ke analitik risiko adalah transisi yang sedang saya petakan untuk diri saya — boleh saya ajukan dua pertanyaan spesifik tentang itu? Lima belas menit, kapan saja dalam dua minggu ke depan.” Lalu, kalau percakapannya berjalan baik, jembatannya bukan proposal, melainkan pola: “ini benar-benar bermanfaat — boleh saya kembali satu atau dua bulan lagi, setelah saya menjalankannya?” Hubungan yang dimulai dari satu percakapan yang bermanfaat dan berulang berdasarkan bukti bertahan lebih lama daripada kontrak mentor-mentee resmi mana pun yang diteken di hari pertama."
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
        "id": "Mentee yang memegang kendali: datang dengan agenda (satu keputusan, satu kesulitan, satu kabar terbaru), mencatat, dan — inilah rahasia agar mentor bertahan — <b>tutup setiap urusan</b>: “Bapak/Ibu menyarankan saya mempresentasikan analisisnya sendiri; saya lakukan, dan itu berbuah undangan ke proyek lintas tim.” Beri nilai balik dengan jujur: informasi dari lapangan yang tidak dimiliki senior, bantuan untuk hal yang konkret, mengangkat karya mereka bila memang tulus. Hormati aturan dasarnya: rahasia dijaga mutlak, nasihat ditimbang alih-alih dijalankan buta (sampaikan alasanmu bila memilih jalan lain — mentor yang baik menghargainya), dan terima kasih yang spesifik, bukan sekadar basa-basi. Ketika sebuah hubungan sudah melewati musimnya, biarkan ia melambat dengan anggun menjadi kabar sesekali; memaksakan hubungan berlanjut selamanya justru merusak apa yang seharusnya tersimpan baik lewat akhir yang bersih."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does “will you be my mentor?” underperform a specific question, according to this lesson?",
        "id": "Menurut pelajaran ini, mengapa “maukah menjadi mentor saya?” kalah dari pertanyaan yang spesifik?"
       },
       "options": [
        {
         "en": "It sounds old-fashioned",
         "id": "Terdengar kuno"
        },
        {
         "en": "It requests an undefined, open-ended commitment before any evidence the time will be well spent — the specific question costs twenty minutes and lets the relationship prove itself",
         "id": "Ia meminta komitmen yang tidak jelas dan tanpa batas, sebelum ada bukti bahwa waktunya akan bermanfaat — pertanyaan yang spesifik hanya butuh dua puluh menit dan memberi kesempatan hubungan itu membuktikan dirinya"
        },
        {
         "en": "Formal mentorship is only for executives",
         "id": "Mentoring formal hanya untuk eksekutif"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Seniors decline undefined liabilities and accept bounded, prepared asks. The title “mentor” arrives later, as a description of what already exists.",
        "id": "Senior menolak kewajiban yang tidak jelas, dan menerima permintaan yang berbatas dan dipersiapkan. Sebutan “mentor” datang belakangan, sebagai gambaran dari hubungan yang sudah terbentuk."
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
      "id": "Kamu tidak bisa meminta sponsorship, tapi kamu bisa secara sistematis menjadi orang yang layak dipertaruhkan oleh sponsor. Pelajaran ini merancang kondisinya: kedekatan dengan orang yang berwenang bertaruh, bukti yang bisa mereka lihat, rasa aman yang bisa mereka percaya — dan cara menyikapi sponsorship dengan baik begitu ia datang."
     },
     "objectives": [
      {
       "en": "Create legitimate proximity to the people whose bets shape careers.",
       "id": "Menciptakan kedekatan yang wajar dengan orang-orang yang taruhannya membentuk karier."
      },
      {
       "en": "Convert delivery into proof that reaches potential sponsors.",
       "id": "Mengubah hasil kerja menjadi bukti yang sampai kepada calon sponsor."
      },
      {
       "en": "Honour a sponsor's bet when it comes — and survive a sponsor's exit.",
       "id": "Menghargai taruhan seorang sponsor saat ia datang — dan tetap bertahan saat sponsor itu pergi."
      }
     ],
     "takeaways": [
      {
       "en": "Sponsors bet on what they have personally witnessed — engineering witnessed moments is the whole game.",
       "id": "Sponsor bertaruh pada apa yang mereka saksikan sendiri — menciptakan momen yang disaksikan adalah inti seluruh permainannya."
      },
      {
       "en": "Every delivered bet raises your betting line; every fumbled one reprices it — treat sponsored projects accordingly.",
       "id": "Setiap taruhan yang kamu tuntaskan menaikkan nilai taruhanmu; setiap yang kamu gagalkan menurunkannya — perlakukan proyek dari sponsor sesuai dengan itu."
      },
      {
       "en": "Never depend on one sponsor: people leave, reorganise, and fall from grace — portfolios apply to advocates too.",
       "id": "Jangan pernah bergantung pada satu sponsor: orang pindah, terkena reorganisasi, dan kehilangan pengaruh — prinsip portofolio berlaku juga untuk pembela."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "Proximity, engineered legitimately",
        "id": "Kedekatan, dibangun dengan cara yang wajar"
       },
       "body": {
        "en": "Sponsors can only bet on people who cross their field of vision. Legitimate crossings: volunteer for projects whose steering committee includes them; present your own work when the chance exists (never yield your slot); join the cross-functional initiative they care about; ask one good question in their forum. Illegitimate crossings — engineered coffee ambushes, flattery campaigns, hovering — are read instantly for what they are. The difference: legitimate proximity always carries work in its hands. You are not seeking an audience; you are doing visible work in shared spaces, which is simply what 2.2's legibility looks like at higher altitude.",
        "id": "Sponsor hanya bisa bertaruh pada orang yang melintas di bidang pandangnya. Cara melintas yang wajar: ajukan diri untuk proyek yang komite pengarahnya melibatkan mereka; presentasikan karyamu sendiri bila kesempatannya ada (jangan pernah menyerahkan giliranmu kepada orang lain); ikut inisiatif lintas fungsi yang mereka pedulikan; ajukan satu pertanyaan yang bagus di forum mereka. Cara melintas yang tidak wajar — ajakan ngopi yang direkayasa, kampanye pujian, terus berkeliaran di dekat mereka — langsung terbaca apa adanya. Bedanya: kedekatan yang wajar selalu membawa hasil kerja di tangan. Kamu tidak sedang mencari perhatian; kamu mengerjakan pekerjaan yang terlihat di ruang bersama, dan itulah wujud keterbacaan dari Pelajaran 2.2 di ketinggian yang lebih tinggi."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "Proof and safety",
        "id": "Bukti dan rasa aman"
       },
       "body": {
        "en": "Proof: when your work lands near a potential sponsor, it must be attributable (your name on the artefact, your voice in the presentation) and complete (finished things, not promising drafts). Safety: sponsors audit composure before they bet — how you took the hard question in their meeting, whether your numbers survived scrutiny, how you treated the junior who erred, whether confidence stayed calibrated under praise. The safety audit is passive and continuous; you will not know when it ran. Which yields this module's quiet rule: behave in every visible moment as if a potential sponsor is deciding — because statistically, one is.",
        "id": "Bukti: ketika karyamu sampai di dekat calon sponsor, ia harus jelas atributnya (namamu di artefak, suaramu di presentasi) dan tuntas (hal yang selesai, bukan draf yang menjanjikan). Rasa aman: sponsor mengaudit ketenanganmu sebelum bertaruh — cara kamu menerima pertanyaan sulit di rapat mereka, apakah angkamu tahan diperiksa, cara kamu memperlakukan junior yang berbuat salah, apakah kepercayaan dirimu tetap terukur saat dipuji. Audit ini berjalan pasif dan terus-menerus; kamu tidak akan tahu kapan ia berlangsung. Dari sini lahir aturan senyap modul ini: bersikaplah di setiap momen yang terlihat seolah-olah seorang calon sponsor sedang menimbangmu — karena secara statistik, memang ada yang sedang melakukannya."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "When the bet arrives — and when it leaves",
        "id": "Saat taruhan datang — dan saat ia pergi"
       },
       "body": {
        "en": "A sponsor's bet looks like an assignment: the stretch project, the client room, the committee seat. Honour it operationally: over-communicate progress to the sponsor (they are exposed; feed them ammunition), deliver completely, and credit their backing accurately when it succeeds — sponsors whose bets are honoured bet again, bigger. If the bet is failing, tell them first and early; sponsors forgive rescued failures and never forgive ambushes. And diversify: a single-sponsor career inherits that sponsor's fortunes — cultivate advocacy in more than one room, keep your external market presence (4.2–4.3) alive, so a sponsor's departure is a setback rather than a decapitation.",
        "id": "Taruhan seorang sponsor berwujud penugasan: proyek yang menantang, ruang rapat klien, kursi di komite. Hargai itu secara operasional: laporkan kemajuan ke sponsor lebih sering dari biasanya (mereka sedang menanggung risiko; beri mereka amunisi), tuntaskan sepenuhnya, dan akui dukungan mereka secara akurat ketika berhasil — sponsor yang taruhannya dihargai akan bertaruh lagi, lebih besar. Kalau taruhan itu mulai goyah, beri tahu mereka lebih dulu dan lebih awal; sponsor memaafkan kegagalan yang diselamatkan, dan tidak pernah memaafkan kejutan buruk. Dan lakukan diversifikasi: karier dengan satu sponsor mewarisi nasib sponsor itu — bangun pembelaan di lebih dari satu ruangan, jaga kehadiranmu di pasar eksternal (Pelajaran 4.2–4.3) tetap hidup, supaya kepergian seorang sponsor hanya menjadi kemunduran, bukan kehilangan kepala."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A director hands you a stretch project after seeing your quarterly presentation. Mid-project, a key dependency slips and the deadline is at risk. The sponsorship-aware move?",
        "id": "Seorang direktur memberimu proyek yang menantang setelah melihat presentasi kuartalanmu. Di tengah jalan, satu ketergantungan penting meleset dan tenggat terancam. Langkah yang sadar akan sponsorship?"
       },
       "options": [
        {
         "en": "Work nights to fix it quietly — the director must never see trouble",
         "id": "Lembur diam-diam untuk memperbaikinya — sang direktur tidak boleh melihat ada masalah"
        },
        {
         "en": "Tell the director early with the recovery plan: they are exposed on this bet and early warning plus a plan is what protects them",
         "id": "Beri tahu direktur sejak awal, lengkap dengan rencana pemulihan: mereka menanggung risiko atas taruhan ini, dan peringatan dini plus rencana itulah yang melindungi mereka"
        },
        {
         "en": "Ask your mentor to mention it to the director informally",
         "id": "Minta mentormu menyampaikannya ke direktur secara informal"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Sponsors forgive rescued failures and never forgive ambushes. Early warning with a plan is how bets get honoured even when they wobble.",
        "id": "Sponsor memaafkan kegagalan yang diselamatkan, dan tidak pernah memaafkan kejutan buruk. Peringatan dini disertai rencana adalah cara sebuah taruhan tetap dihargai bahkan ketika goyah."
       }
      }
     ],
     "tool": {
      "id": "field",
      "mode": "coach:sponsor",
      "title": {
       "en": "Earn the sponsor, move by move",
       "id": "Raih sponsor, langkah demi langkah"
      },
      "body": {
       "en": "A director knows your name and a stretch project is staffing next month. The drill plays the three moments where sponsorship is won or quietly lost.",
       "id": "Seorang direktur tahu namamu, dan sebuah proyek menantang akan diisi bulan depan. Latihan ini memainkan tiga momen ketika sponsorship diraih — atau hilang tanpa suara."
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
      "id": "Di luar mentor dan sponsor ada lingkaran dalam: empat atau lima orang yang pertimbangannya kamu percaya untuk keputusan tersulit dalam kariermu. Pelajaran penutup ini merancang lingkaran milikmu secara sengaja — susunannya, cara merawatnya, dan latihan untuk benar-benar meminta pendapat mereka."
     },
     "objectives": [
      {
       "en": "Design the circle's composition: the five seats and who fills them.",
       "id": "Merancang susunan lingkaran: lima kursi dan siapa yang mengisinya."
      },
      {
       "en": "Maintain it with the light rhythm that keeps trust current.",
       "id": "Merawatnya dengan irama ringan yang menjaga kepercayaan tetap hidup."
      },
      {
       "en": "Consult it properly on a real decision — and reciprocate.",
       "id": "Meminta pendapat mereka dengan benar untuk keputusan nyata — dan membalasnya."
      }
     ],
     "takeaways": [
      {
       "en": "Five seats: the truth-teller, the domain sage, the connector, the peer in the trenches, the one who knew you before the title.",
       "id": "Lima kursi: si penyampai kebenaran, si ahli bidang, si penghubung, rekan seperjuangan, dan orang yang mengenalmu sebelum ada jabatan."
      },
      {
       "en": "Circles decay without contact: small, regular, two-directional touches keep the trust consultable.",
       "id": "Lingkaran melapuk tanpa kontak: sapaan yang kecil, teratur, dan dua arah menjaga kepercayaan tetap bisa diandalkan."
      },
      {
       "en": "You are a seat in other people's circles — the reciprocity is the system.",
       "id": "Kamu juga menempati kursi di lingkaran orang lain — timbal balik itulah sistemnya."
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
        "id": "Tulis lima nama untuk lima kursi: penyampai kebenaran (mengatakan hal yang kamu hindari untuk didengar), ahli bidang (mendalam di keahlianmu), penghubung (kenal semua orang, melihat lintas sekat), rekan seperjuangan (selevel denganmu, menghadapi pertempuran yang sama, jujur tanpa saringan), saksi lama (mengenalmu sebelum ada jabatan apa pun, menjaga kamu tetap membumi). Boleh ada yang kosong. Lalu buka tinjauan."
       },
       "debrief": {
        "en": "Common findings. Multiple seats filled by one person — risky concentration; work to separate them over the year. The truth-teller seat empty — most common and most costly gap: candidates are people who have already disagreed with you and stayed; promote one deliberately by asking for hard opinions and rewarding them visibly. All seats inside your current employer — the circle inherits your employer's blind spots; recruit at least one outside voice (an old classmate now elsewhere, a community peer). No name for the old witness — call the person you are thinking of; that seat mostly needs maintenance, not recruitment.",
        "id": "Temuan yang umum. Beberapa kursi diisi satu orang yang sama — pemusatan yang berisiko; usahakan memisahkannya sepanjang tahun ini. Kursi penyampai kebenaran kosong — celah paling umum sekaligus paling mahal: kandidatnya adalah orang yang pernah tidak setuju denganmu dan tetap tinggal; angkat satu dengan sengaja, dengan meminta pendapat yang keras dan menghargainya secara terlihat. Semua kursi berada di dalam perusahaanmu sekarang — lingkaranmu mewarisi titik buta perusahaan; rekrut minimal satu suara dari luar (teman kuliah lama yang kini di tempat lain, rekan dari komunitas). Tidak ada nama untuk saksi lama — telepon orang yang sedang terlintas di pikiranmu; kursi itu umumnya butuh perawatan, bukan perekrutan."
       }
      },
      {
       "h": {
        "en": "Drill 2 — Design the maintenance",
        "id": "Latihan 2 — Rancang perawatannya"
       },
       "body": {
        "en": "Design a maintenance rhythm costing under an hour a month for the whole circle. Write it, then reveal.",
        "id": "Rancang irama perawatan yang menghabiskan kurang dari satu jam sebulan untuk seluruh lingkaran. Tuliskan, lalu buka tinjauan."
       },
       "debrief": {
        "en": "A working model: one substantial touch per person per quarter — a coffee, a call, a long message with a real update and a real question; plus opportunistic micro-touches — sending the article that made you think of them, congratulating the win you noticed, answering their asks fast and well. The asymmetric rule: respond to circle members within a day, always — the circle's value is precisely that its requests jump your queue, in both directions. Log the touches lightly (the Route Planner's win log takes relationship notes too); memory is not a maintenance system.",
        "id": "Model yang berjalan: satu sapaan bermakna per orang per kuartal — ngopi, telepon, atau pesan panjang berisi kabar yang nyata dan pertanyaan yang nyata; ditambah sapaan-sapaan kecil sesuai kesempatan — mengirim artikel yang membuatmu teringat mereka, memberi selamat atas capaian yang kamu perhatikan, menjawab permintaan mereka dengan cepat dan baik. Aturan asimetrisnya: balas anggota lingkaran dalam sehari, selalu — nilai lingkaran ini justru terletak pada permintaannya yang boleh melompati antreanmu, ke dua arah. Catat sapaan-sapaan itu secara ringan (catatan capaian di Route Planner bisa menampung catatan hubungan juga); ingatan bukan sistem perawatan."
       }
      },
      {
       "h": {
        "en": "Drill 3 — Consult it for real",
        "id": "Latihan 3 — Minta pendapat mereka sungguhan"
       },
       "body": {
        "en": "Take a live career question — a role choice, a promotion strategy, a difficult manager. Design how you consult the circle on it: who, in what order, asking what. Then reveal.",
        "id": "Ambil satu pertanyaan karier yang sedang kamu hadapi — pilihan peran, strategi promosi, manajer yang sulit. Rancang cara kamu meminta pendapat lingkaran tentang itu: siapa saja, dalam urutan apa, menanyakan apa. Lalu buka tinjauan."
       },
       "debrief": {
        "en": "Model consultation: frame the question precisely first (Map 3's gap statement — current, desired, obstacle); consult seats for their strengths — the domain sage on the technical read, the connector on how the market or organisation actually sees it, the trench peer on ground truth, the truth-teller last and with the hardest framing (“what am I not letting myself see?”); then decide yourself — the circle informs, the architect decides. Afterwards, close the loops: tell each what you decided and what happened. That reporting-back is what converts five advisors into a standing council — and it is the reciprocity that keeps your seat in their circles too.",
        "id": "Cara berkonsultasi yang ideal: rumuskan dulu pertanyaannya dengan tepat (pernyataan celah dari Modul 3 The Map — kondisi sekarang, kondisi yang diinginkan, hambatannya); minta pendapat setiap kursi sesuai kekuatannya — ahli bidang untuk pembacaan teknis, penghubung untuk cara pasar atau organisasi sebenarnya memandangnya, rekan seperjuangan untuk kenyataan di lapangan, dan penyampai kebenaran paling akhir dengan pertanyaan yang paling menantang (“apa yang tidak mau saya lihat?”); lalu putuskan sendiri — lingkaran memberi masukan, arsiteknya yang memutuskan. Setelah itu, tutup setiap urusan: beri tahu masing-masing apa yang kamu putuskan dan apa yang terjadi. Laporan balik itulah yang mengubah lima penasihat menjadi dewan tetap — dan itulah timbal balik yang menjaga kursimu di lingkaran mereka juga."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does the truth-teller seat get consulted last in the model consultation?",
        "id": "Mengapa kursi penyampai kebenaran dimintai pendapat paling akhir dalam cara berkonsultasi yang ideal?"
       },
       "options": [
        {
         "en": "Their opinion matters least",
         "id": "Pendapat mereka paling tidak penting"
        },
        {
         "en": "By then you hold the full picture and your emerging preference — exactly what the truth-teller exists to stress-test",
         "id": "Pada saat itu kamu sudah memegang gambaran utuh dan kecenderungan yang mulai terbentuk — persis itulah yang perlu diuji oleh sang penyampai kebenaran"
        },
        {
         "en": "Truth-tellers need the most scheduling notice",
         "id": "Penyampai kebenaran butuh pemberitahuan jadwal paling awal"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The truth-teller's question — “what am I not letting myself see?” — only bites once a preference exists to examine. Sequence is part of the craft.",
        "id": "Pertanyaan sang penyampai kebenaran — “apa yang tidak mau saya lihat?” — baru terasa menggigit ketika sudah ada kecenderungan yang bisa diperiksa. Urutan adalah bagian dari keahliannya."
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
    "id": "Modul 7 The Route berfokus pada langkah kedua. Kerjakan pelajarannya secara berurutan — setiap pelajaran dibangun di atas pelajaran sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply the second move to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu bisa menerapkan cara merencanakan langkah kedua pada keputusan kariermu sendiri dengan metode yang konkret dan bisa diulang."
   },
   "lessons": [
    {
     "n": "7.1",
     "title": {
      "en": "Career Capital and the Right Time to Move",
      "id": "Modal Karier dan Waktu yang Tepat untuk Pindah"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The second move — your first deliberate job change — sets your trajectory more than the first job did, because this time you choose with assets. This lesson covers the timing question: reading your capital's market value, the signals that say move, and the ones that say stay.",
      "id": "Langkah kedua — perpindahan kerja pertama yang kamu lakukan dengan sengaja — lebih menentukan lintasan kariermu daripada pekerjaan pertama, karena kali ini kamu memilih dengan bekal aset. Pelajaran ini membahas soal waktu: membaca nilai pasar dari modal kariermu, tanda-tanda yang menyuruhmu pindah, dan tanda-tanda yang menyuruhmu bertahan."
     },
     "objectives": [
      {
       "en": "Read your career capital's market value without applying anywhere.",
       "id": "Membaca nilai pasar modal kariermu tanpa melamar ke mana pun."
      },
      {
       "en": "Distinguish the four legitimate move triggers from the three false ones.",
       "id": "Membedakan empat pemicu pindah yang sah dari tiga pemicu yang palsu."
      },
      {
       "en": "Time moves to capital peaks, not frustration peaks.",
       "id": "Menentukan waktu pindah di puncak modal, bukan di puncak frustrasi."
      }
     ],
     "takeaways": [
      {
       "en": "Move when your assets peak and compound elsewhere — not when a bad week peaks.",
       "id": "Pindahlah ketika asetmu sedang di puncak dan bisa bertumbuh berlipat di tempat lain — bukan ketika minggu yang buruk sedang di puncaknya."
      },
      {
       "en": "The market prices you continuously whether you look or not; looking quarterly is calibration, not disloyalty.",
       "id": "Pasar terus menilai hargamu, entah kamu memperhatikannya atau tidak; menengok pasar tiap kuartal adalah kalibrasi, bukan ketidaksetiaan."
      },
      {
       "en": "Staying is also a move — legitimate when yield is high, dangerous when it is merely comfortable.",
       "id": "Bertahan juga sebuah langkah — sah ketika imbal asetnya tinggi, berbahaya ketika alasannya hanya nyaman."
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
        "id": "Tanpa mengirim satu lamaran pun: baca lowongan yang sedang buka untuk peran berikutnya yang kamu tuju, dan periksa persyaratan mana yang kini sudah kamu penuhi (analisis celah dari Pelajaran 1.4, dinilai ulang oleh pasar); catat keterampilanmu mana saja yang muncul di baris-baris pertama iklan lowongan (itulah yang dihargai pasar); perhatikan ke mana rekan-rekan dengan profil serupa berpindah; dan sesekali terima telepon dari perekrut sebagai data pasar gratis, meski kamu tidak berminat — “apa yang membuat seorang kandidat menarik untuk peran ini?” adalah pertanyaan yang mereka jawab dengan baik. Catat pembacaan ini setiap kuartal di Route Planner. Intinya adalah kalibrasi: orang yang tidak pernah menengok pasar secara sistematis menilai dirinya terlalu murah, lalu berpegang pada harga murah itu sendiri saat bernegosiasi."
       },
       "img": "../../assets/m/06-horizon.jpg",
       "imgPos": "center 45%"
      },
      {
       "icon": "target",
       "h": {
        "en": "True and false triggers",
        "id": "Pemicu yang sah dan yang palsu"
       },
       "body": {
        "en": "<b>Legitimate triggers:</b> the asset-yield floor — two decision gates running on empty with engineering attempts failed; the ceiling verdict from 5.4; a market repricing your skills sharply upward while your role cannot follow; an architecture change — the destination itself has legitimately moved. <b>False triggers:</b> the bad-quarter effect (a rough project, a hard manager month — weather, not climate); the shiny-offer effect (recruiters flatter; the two-lens test from Pack 5.4 exists for this); and the peer-envy effect (their move served their architecture, which is not yours). The discipline: no move decisions inside a bad month, and every move decision through the architecture, in writing.",
        "id": "<b>Pemicu yang sah:</b> imbal aset menyentuh batas minimum — dua gerbang keputusan berturut-turut tanpa aset baru, dan upaya perbaikan sudah dicoba tapi gagal; vonis batas atas dari Pelajaran 5.4; pasar menilai ulang keterampilanmu jauh lebih tinggi sementara peranmu tidak bisa mengikuti; perubahan arsitektur — tujuannya sendiri yang berpindah, dengan alasan yang sah. <b>Pemicu yang palsu:</b> efek kuartal buruk (proyek yang berat, sebulan bersama manajer yang sulit — itu cuaca, bukan iklim); efek tawaran mengilap (perekrut pandai memuji; uji dua lensa dari Pelajaran 5.4 The Pack ada untuk ini); dan efek iri pada rekan (kepindahan mereka melayani arsitektur mereka, yang bukan arsitekturmu). Disiplinnya: tidak ada keputusan pindah di dalam bulan yang buruk, dan setiap keputusan pindah harus melewati arsitektur, secara tertulis."
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
        "id": "Pindahlah saat sedang kuat: tepat setelah proyek dirilis, setelah promosi, setelah capaian yang terlihat — saat berkasmu masih segar dan ceritamu dibuka dengan momentum. Naluri kita justru sebaliknya — orang pindah saat sedang sengsara, lalu tiba di meja negosiasi dengan capaian yang sudah basi dan kelelahan yang kentara. Kalau pemicu yang sah muncul saat kamu sedang di titik rendah, urutannya: stabilkan dulu (tiga bulan kerja yang terarah dan satu capaian yang bisa diandalkan), baru pindah dengan kekuatan yang sudah kamu bangun kembali. Satu pengecualian yang mengalahkan semuanya: situasi yang benar-benar beracun — tekanan untuk mengorbankan integritas, kesehatan yang rusak, garis merah yang dilanggar — di situ, pergi itu sendiri sudah merupakan kemenangan, dan dijalankan sebersih yang keadaan memungkinkan."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "After a brutal quarter under a difficult manager, a recruiter dangles a 25% raise. The lesson's prescription?",
        "id": "Setelah satu kuartal yang brutal di bawah manajer yang sulit, seorang perekrut menawarkan kenaikan gaji 25%. Resep pelajaran ini?"
       },
       "options": [
        {
         "en": "Take it — the market has spoken",
         "id": "Ambil — pasar sudah bicara"
        },
        {
         "en": "Recognise two false triggers stacking (bad quarter + shiny offer); run it through the architecture and two lenses in a calm week before deciding",
         "id": "Sadari ada dua pemicu palsu yang bertumpuk (kuartal buruk + tawaran mengilap); uji lewat arsitektur dan dua lensa di minggu yang tenang sebelum memutuskan"
        },
        {
         "en": "Decline — never move before year three",
         "id": "Tolak — jangan pernah pindah sebelum tahun ketiga"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The offer may be right — but a decision made at frustration-peak, on flattery, without the architecture, is a coin flip wearing a salary.",
        "id": "Tawarannya mungkin memang tepat — tapi keputusan yang diambil di puncak frustrasi, karena pujian, tanpa melewati arsitektur, sama saja lempar koin yang dibungkus angka gaji."
       }
      }
     ],
     "quote": {
      "en": "Move when your assets peak — not when a bad week peaks.",
      "id": "Pindahlah saat asetmu di puncak — bukan saat minggu yang buruk di puncaknya."
     }
    },
    {
     "n": "7.2",
     "title": {
      "en": "Evaluating Your Next Role Against Your Career Architecture",
      "id": "Mengevaluasi Peran Berikutnya Terhadap Arsitektur Kariermu"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "An offer is a bundle of thirty variables wearing one salary number. This lesson builds the evaluation discipline: pricing the whole bundle against your architecture, interrogating the parts that matter, and refusing the arithmetic seductions that make bad moves look good.",
      "id": "Sebuah tawaran adalah paket berisi tiga puluh variabel yang dibungkus satu angka gaji. Pelajaran ini membangun disiplin evaluasi: menilai seluruh paket terhadap arsitekturmu, menggali bagian-bagian yang penting, dan menolak godaan hitung-hitungan yang membuat langkah buruk tampak bagus."
     },
     "objectives": [
      {
       "en": "Evaluate offers as bundles: role scope, manager, trajectory, compensation, life fit.",
       "id": "Mengevaluasi tawaran sebagai satu paket: lingkup peran, manajer, lintasan, kompensasi, kecocokan dengan hidupmu."
      },
      {
       "en": "Interrogate the offer with the questions that reveal the real role.",
       "id": "Menggali tawaran dengan pertanyaan-pertanyaan yang mengungkap peran yang sebenarnya."
      },
      {
       "en": "Compare against your current role's true trajectory, not its worst week.",
       "id": "Membandingkan dengan lintasan peranmu saat ini yang sebenarnya, bukan dengan minggu terburuknya."
      }
     ],
     "takeaways": [
      {
       "en": "The manager you would join is the biggest unpriced variable in every offer — price it.",
       "id": "Manajer yang akan kamu ikuti adalah variabel terbesar yang tidak pernah dihitung dalam setiap tawaran — hitunglah."
      },
      {
       "en": "Scope beats title beats salary at this stage: ownership mints assets, labels do not.",
       "id": "Di tahap ini, lingkup lebih penting dari jabatan, dan jabatan lebih penting dari gaji: rasa memiliki mencetak aset, label tidak."
      },
      {
       "en": "Compare bundles at the three-year mark, not day one — trajectories, not snapshots.",
       "id": "Bandingkan kedua paket di titik tiga tahun, bukan di hari pertama — lintasan, bukan potret sesaat."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "Pricing the bundle",
        "id": "Menilai seluruh paket"
       },
       "body": {
        "en": "Score both options — offer and current role — against the same sheet, derived from your architecture: <b>scope</b> (what will you own end-to-end, and how soon), <b>manager</b> (their reputation for growing people — ask around; a bad manager taxes every other line), <b>trajectory</b> (what do people in this role move into, at what pace), <b>compensation</b> (total: base, variable, benefits, and the growth curve, not the entry point), <b>life fit</b> (commute, hours culture, the constraint lines from 1.3). Weight by your architecture, score honestly, and let the flinch test from Map 3.2 catch the criteria you secretly hold. The sheet's job is not to decide — it is to make your real reasoning visible enough to interrogate.",
        "id": "Beri skor kedua pilihan — tawaran baru dan peran saat ini — dengan lembar yang sama, yang diturunkan dari arsitekturmu: <b>lingkup</b> (apa yang akan kamu pegang dari ujung ke ujung, dan seberapa cepat), <b>manajer</b> (reputasinya dalam menumbuhkan orang — tanya ke kiri-kanan; manajer yang buruk memajaki semua baris lainnya), <b>lintasan</b> (orang di peran ini berpindah ke mana, dan secepat apa), <b>kompensasi</b> (totalnya: gaji pokok, variabel, tunjangan, dan kurva pertumbuhannya, bukan angka awalnya), <b>kecocokan dengan hidupmu</b> (perjalanan ke kantor, budaya jam kerja, batasan-batasan dari Pelajaran 1.3). Beri bobot sesuai arsitekturmu, beri skor dengan jujur, dan biarkan uji kernyit dari Pelajaran 3.2 The Map menangkap kriteria yang diam-diam kamu pegang. Tugas lembar ini bukan memutuskan — melainkan membuat alasanmu yang sebenarnya cukup terlihat untuk diperiksa."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "Interrogating the offer",
        "id": "Menggali tawaran"
       },
       "body": {
        "en": "Questions that reveal the real role, all legitimate to ask between offer and acceptance: “What happened to the last person in this seat?” (growth, exit, or revolving door — each tells). “What would my first two deliverables be?” (vague answers predict vague roles). “How does this role get evaluated at six months?” (no answer means no thought). “Can I speak with someone on the team?” (refusal is data). “What does progression from this role look like — who last made it?” Companies respect candidates who interrogate; evasive answers to fair questions are themselves the answer. Do the same diligence on the company that The Range taught for research: funding or results trajectory, turnover signals, market position.",
        "id": "Pertanyaan yang mengungkap peran yang sebenarnya, semuanya wajar ditanyakan antara tawaran dan penerimaan: “Apa yang terjadi pada orang terakhir di posisi ini?” (naik, keluar, atau pintu putar — masing-masing bercerita). “Apa dua hasil kerja pertama yang diharapkan dari saya?” (jawaban yang samar meramalkan peran yang samar). “Bagaimana peran ini dievaluasi di bulan keenam?” (tidak ada jawaban berarti belum dipikirkan). “Boleh saya bicara dengan salah satu anggota tim?” (penolakan adalah data). “Seperti apa jenjang dari peran ini — siapa yang terakhir berhasil naik?” Perusahaan menghargai kandidat yang menggali; jawaban yang mengelak atas pertanyaan yang wajar adalah jawaban itu sendiri. Lakukan riset yang sama telitinya tentang perusahaan, seperti yang diajarkan The Range: arah pendanaan atau kinerjanya, tanda-tanda pergantian karyawan, posisinya di pasar."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "The honest comparison",
        "id": "Perbandingan yang jujur"
       },
       "body": {
        "en": "Compare the offer against your current role's true trajectory: with the engineering moves you have not yet tried, the promotion case in flight, the sponsor half-earned — versus the offer's promises discounted to what its evidence supports. Then project both to year three: where does each bundle leave your assets, your gates, your constraints? The arithmetic seductions to refuse: comparing their best case to your worst week; pricing the raise without pricing the reset (new trust to build, new terrain to learn — six months of reduced compounding); and treating the current role's known problems as heavier than the offer's unknown ones. Unknown problems arrive on schedule; they are simply not visible from here.",
        "id": "Bandingkan tawaran itu dengan lintasan peranmu saat ini yang sebenarnya: termasuk langkah-langkah perbaikan yang belum kamu coba, kasus promosi yang sedang berjalan, sponsor yang setengah jalan kamu raih — versus janji-janji tawaran yang sudah didiskon ke sebatas apa yang didukung buktinya. Lalu proyeksikan keduanya ke tahun ketiga: di mana masing-masing paket meninggalkan asetmu, gerbangmu, batasanmu? Godaan hitung-hitungan yang harus ditolak: membandingkan skenario terbaik mereka dengan minggu terburukmu; menghitung kenaikan gaji tanpa menghitung biaya memulai dari nol (kepercayaan baru yang harus dibangun, medan baru yang harus dipelajari — enam bulan dengan pertumbuhan yang melambat); dan menganggap masalah yang sudah kamu kenal di peran saat ini lebih berat daripada masalah yang belum kamu ketahui di tawaran baru. Masalah yang belum diketahui akan datang tepat waktu; ia hanya belum terlihat dari sini."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "The offer's salary is 15% higher but the hiring manager cannot name your first two deliverables and the last two people in the seat left within a year. The bundle read?",
        "id": "Gaji di tawaran itu 15% lebih tinggi, tapi manajer perekrutnya tidak bisa menyebutkan dua hasil kerja pertamamu, dan dua orang terakhir di posisi itu keluar dalam setahun. Bacaan paketnya?"
       },
       "options": [
        {
         "en": "Take it — salary is the only verifiable variable",
         "id": "Ambil — gaji satu-satunya variabel yang bisa diverifikasi"
        },
        {
         "en": "The two strongest signals (vague scope, revolving door) price the bundle down past the raise — decline or investigate further",
         "id": "Dua sinyal terkuat (lingkup yang samar, posisi pintu putar) menurunkan nilai paket melampaui kenaikan gajinya — tolak, atau selidiki lebih jauh"
        },
        {
         "en": "Negotiate for 25% to compensate for the risk",
         "id": "Negosiasikan jadi 25% sebagai kompensasi risikonya"
        }
       ],
       "correct": 1,
       "why": {
        "en": "A raise buys six months of pay difference; a revolving-door seat with undefined scope costs years of compounding. The bundle, not the number.",
        "id": "Kenaikan gaji membeli enam bulan selisih pendapatan; posisi pintu putar dengan lingkup yang tidak jelas mengorbankan pertumbuhan bertahun-tahun. Paketnya, bukan angkanya."
       }
      }
     ]
    },
    {
     "n": "7.3",
     "title": {
      "en": "Internal Mobility: Moving Within Your Organisation",
      "id": "Mobilitas Internal: Pindah di Dalam Organisasimu"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The cheapest second move is often inside the building: new scope, new team, new domain — with your trust capital carried over instead of reset. This lesson covers internal mobility's mechanics: finding the openings, running the quiet campaign, and managing your current manager through it.",
      "id": "Langkah kedua yang paling murah sering ada di dalam gedung yang sama: lingkup baru, tim baru, ranah baru — dengan modal kepercayaanmu ikut terbawa, bukan dimulai dari nol. Pelajaran ini membahas mekanisme mobilitas internal: menemukan peluangnya, menjalankan kampanye senyap, dan mengelola manajermu saat ini sepanjang prosesnya."
     },
     "objectives": [
      {
       "en": "Weigh internal moves against external ones with the reset cost priced.",
       "id": "Menimbang pindah internal terhadap pindah eksternal, dengan biaya memulai dari nol ikut dihitung."
      },
      {
       "en": "Run the internal campaign: visibility, conversations, and formal process in the right order.",
       "id": "Menjalankan kampanye internal: visibilitas, percakapan, dan proses formal dalam urutan yang benar."
      },
      {
       "en": "Handle the current-manager conversation without burning the bridge you stand on.",
       "id": "Menangani percakapan dengan manajermu saat ini tanpa membakar jembatan tempatmu berpijak."
      }
     ],
     "takeaways": [
      {
       "en": "Internal moves carry your trust capital; external moves reprice it from zero — the difference is often worth more than a raise.",
       "id": "Pindah internal membawa serta modal kepercayaanmu; pindah eksternal menilainya ulang dari nol — selisihnya sering lebih berharga daripada kenaikan gaji."
      },
      {
       "en": "Internal campaigns run on sponsorship and timing: the receiving team must want you before the posting exists.",
       "id": "Kampanye internal berjalan di atas sponsorship dan waktu: tim penerima harus sudah menginginkanmu sebelum lowongannya ada."
      },
      {
       "en": "Tell your manager at the right moment, in the right frame — growth, not escape.",
       "id": "Beri tahu manajermu di saat yang tepat, dengan bingkai yang tepat — sebagai pertumbuhan, bukan pelarian."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "The internal option, priced fairly",
        "id": "Pilihan internal, dinilai secara adil"
       },
       "body": {
        "en": "An internal move keeps what external moves destroy: your reputation samples, your witness network, your knowledge of how things actually work — the invisible half of your effectiveness. It typically trades away the salary jump external moves bring (internal adjustments run smaller) and risks less: a known culture, verifiable managers, and your sponsors still in the building. The evaluation sheet from 7.2 applies unchanged — score the internal opening as a bundle. When the architecture needs new assets but not a new market, internal is usually the efficient move; when the ceiling verdict came from the organisation itself, only external resets the game.",
        "id": "Pindah internal mempertahankan apa yang dihancurkan oleh pindah eksternal: contoh-contoh reputasimu, jaringan saksimu, pengetahuanmu tentang cara kerja yang sebenarnya — separuh efektivitasmu yang tidak terlihat. Biasanya ia mengorbankan lonjakan gaji yang dibawa pindah eksternal (penyesuaian internal cenderung lebih kecil), tapi risikonya juga lebih kecil: budaya yang sudah dikenal, manajer yang bisa diverifikasi, dan sponsor-sponsormu masih di gedung yang sama. Lembar evaluasi dari Pelajaran 7.2 berlaku tanpa perubahan — beri skor peluang internal itu sebagai satu paket. Ketika arsitekturmu membutuhkan aset baru tapi bukan pasar baru, internal biasanya langkah yang paling efisien; ketika vonis batas atas datang dari organisasinya sendiri, hanya pindah eksternal yang bisa memulai ulang permainannya."
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
        "id": "Pindah internal diputuskan sebelum lowongannya muncul. Urutannya: <b>beri sinyal ke atas dan ke samping bahwa kamu terbuka</b> — dalam percakapan pengembangan karier, sebutkan ranah yang ingin kamu tumbuhi; <b>bangun kedekatan dengan tim yang kamu tuju</b> — proyek lintas fungsi, bantuan yang kamu tawarkan, artefak yang kamu presentasikan dan dihadiri pemimpin tim itu; <b>beri tahu sponsor-sponsormu</b> apa yang kamu cari (persis untuk inilah sponsor ada); dan begitu minatnya mengerucut, <b>jalani proses formal dengan bersih</b> — lamaran internal, wawancara yang kamu seriusi seperti wawancara eksternal. Yang menenggelamkan kampanye: menjelek-jelekkan tim saat ini sebagai alasanmu (manajer penerima menyimak cara kamu bicara tentang tim yang kamu tinggalkan), dan kampanye yang begitu rahasia sampai manajermu justru tahu dari HR — satu-satunya versi cerita yang tidak bisa kamu perbaiki."
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
        "id": "Waktunya: setelah minatmu nyata dan kurang lebih berbalas, sebelum lamaran formal apa pun — manajermu tidak boleh tahu dari orang lain. Bingkainya: pertumbuhan menuju arsitekturmu, bukan pelarian dari timnya — “Saya ingin memperdalam analitik harga, dan tim komersial adalah tempatnya; saya ingin menjajakinya, dan saya ingin menanganinya dengan baik untuk tim kita.” Tawarkan niat baik yang membuat “ya” jadi mudah: masa transisi yang sungguhan, dokumentasi, serah terima sistem yang kamu pegang. Kebanyakan manajer, kalau diperlakukan begini, berubah menjadi pemberi referensi, bahkan pembela — mereka tahu orang yang dihalangi pindah akan meninggalkan gedung sepenuhnya. Kalau budaya organisasimu benar-benar menghukum orang yang menunjukkan minat pindah, itu informasi di level arsitektur tentang organisasi tersebut, dan jalur eksternal mewarisi kasusnya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "You want the commercial team's analyst opening, posting expected next month. Your manager knows nothing. First move?",
        "id": "Kamu menginginkan posisi analis di tim komersial, yang lowongannya diperkirakan tayang bulan depan. Manajermu belum tahu apa-apa. Langkah pertama?"
       },
       "options": [
        {
         "en": "Apply the moment it posts — formal process protects you",
         "id": "Lamar begitu lowongannya tayang — proses formal melindungimu"
        },
        {
         "en": "Before the posting: confirm the mutual interest with the commercial lead, then tell your manager in the growth frame — never let them learn from HR",
         "id": "Sebelum tayang: pastikan minatnya berbalas dengan pemimpin tim komersial, lalu beri tahu manajermu dengan bingkai pertumbuhan — jangan pernah biarkan ia tahu dari HR"
        },
        {
         "en": "Ask HR to keep your application confidential from your manager",
         "id": "Minta HR merahasiakan lamaranmu dari manajermu"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Internal moves run on relationships that persist after the move. The sequence — interest confirmed, manager told well, then formal process — protects all of them.",
        "id": "Pindah internal berjalan di atas hubungan yang tetap ada setelah kamu pindah. Urutannya — minat dipastikan, manajer diberi tahu baik-baik, baru proses formal — melindungi semua hubungan itu."
       }
      }
     ]
    },
    {
     "n": "7.4",
     "title": {
      "en": "Executing the External Transition",
      "id": "Menjalankan Transisi Eksternal"
     },
     "dur": {
      "en": "15 min",
      "id": "15 mnt"
     },
     "kind": "visual",
     "placeholder": false,
     "overview": {
      "en": "External transitions are judged twice: by where you land, and by how you left. Explore the four stations of a clean exit — the decision confirmed, the resignation done right, the notice period as reputation showcase, and the alumni bridge that pays for decades.",
      "id": "Transisi eksternal dinilai dua kali: dari tempatmu mendarat, dan dari cara kamu pergi. Telusuri empat persinggahan dari kepergian yang bersih — keputusan yang dipastikan, pengunduran diri yang dilakukan dengan benar, masa pemberitahuan sebagai etalase reputasi, dan jembatan alumni yang memberi hasil selama puluhan tahun."
     },
     "objectives": [
      {
       "en": "Confirm the decision through the architecture before any irreversible step.",
       "id": "Memastikan keputusan lewat arsitektur sebelum mengambil langkah yang tidak bisa ditarik kembali."
      },
      {
       "en": "Execute the resignation conversation and counteroffer response professionally.",
       "id": "Menjalankan percakapan pengunduran diri dan menanggapi tawaran balik secara profesional."
      },
      {
       "en": "Run the notice period as your final — and most remembered — performance.",
       "id": "Menjalani masa pemberitahuan sebagai penampilan terakhirmu — yang paling diingat orang."
      }
     ],
     "takeaways": [
      {
       "en": "Resign to your manager first, in person, with a written offer accepted — order matters enormously.",
       "id": "Sampaikan pengunduran diri ke manajermu lebih dulu, secara langsung, setelah tawaran tertulis kamu terima — urutan ini sangat penting."
      },
      {
       "en": "Counteroffers answer the question you asked with money — which was rarely the question.",
       "id": "Tawaran balik menjawab pertanyaanmu dengan uang — padahal uang jarang menjadi pertanyaannya."
      },
      {
       "en": "The last month is the story your former colleagues will tell about you forever.",
       "id": "Bulan terakhirmu adalah cerita yang akan diceritakan mantan kolegamu tentang dirimu selamanya."
      }
     ],
     "hotspots": [
      {
       "x": 22,
       "y": 26,
       "h": {
        "en": "Station 1 · Confirm",
        "id": "Persinggahan 1 · Pastikan"
       },
       "body": {
        "en": "Before resigning: the offer is written and signed-off, start date agreed, and the move has passed the architecture test in a calm week (7.1's false-trigger check run honestly). Notice terms read, financials bridged (final salary, unused leave, any bonus timing — leaving three weeks before a vesting date is a decision to make knowingly, not discover later). Only then does anything become irreversible. The station exists because resignations announced on verbal offers occasionally meet rescinded offers — a survivable event with a signed contract, a catastrophe without one.",
        "id": "Sebelum mengundurkan diri: tawaran sudah tertulis dan disetujui, tanggal mulai disepakati, dan kepindahan ini sudah lolos uji arsitektur di minggu yang tenang (pemeriksaan pemicu palsu dari Pelajaran 7.1 dijalankan dengan jujur). Ketentuan masa pemberitahuan sudah dibaca, keuangannya sudah dijembatani (gaji terakhir, cuti yang belum diambil, jadwal bonus — pergi tiga minggu sebelum tanggal vesting adalah keputusan yang harus diambil dengan sadar, bukan ditemukan belakangan). Baru setelah itu ada langkah yang tidak bisa ditarik kembali. Persinggahan ini ada karena pengunduran diri yang diumumkan berdasarkan tawaran lisan kadang berujung pada tawaran yang ditarik — peristiwa yang bisa dilewati kalau kontraknya sudah ditandatangani, dan bencana kalau belum."
       }
      },
      {
       "x": 72,
       "y": 24,
       "h": {
        "en": "Station 2 · Resign",
        "id": "Persinggahan 2 · Mengundurkan diri"
       },
       "body": {
        "en": "Your manager hears first, live (in person or video), before any colleague, before any announcement: “I've accepted a role at [company], starting [date]. I wanted you to hear it from me first, and I want to make the transition excellent.” Short, warm, decided. The letter follows the conversation as paperwork. No grievance airing — the exit interview is not therapy and the industry has long ears. The counteroffer, if it comes: hear it respectfully, take a day, and remember why you ran the process — if money was the only gap, the architecture would have said so before you interviewed. Accepted counteroffers famously precede departures anyway within the year: the move's reasons rarely dissolve in a raise.",
        "id": "Manajermu yang mendengar lebih dulu, secara langsung (tatap muka atau video), sebelum kolega mana pun, sebelum pengumuman apa pun: “Saya sudah menerima peran di [perusahaan], mulai [tanggal]. Saya ingin Bapak/Ibu mendengarnya dari saya lebih dulu, dan saya ingin transisinya berjalan sebaik mungkin.” Singkat, hangat, mantap. Surat resminya menyusul percakapan itu sebagai administrasi. Tidak ada curahan keluhan — wawancara keluar bukan sesi terapi, dan telinga industri ini panjang. Tawaran balik, kalau datang: dengarkan dengan hormat, ambil waktu sehari, dan ingat mengapa kamu menjalani proses ini — kalau uang satu-satunya celahnya, arsitekturmu pasti sudah mengatakannya sebelum kamu wawancara. Lagi pula, tawaran balik yang diterima terkenal sering disusul kepergian dalam setahun: alasan pindah jarang larut dalam kenaikan gaji."
       }
      },
      {
       "x": 25,
       "y": 72,
       "h": {
        "en": "Station 3 · The showcase month",
        "id": "Persinggahan 3 · Bulan etalase"
       },
       "body": {
        "en": "The notice period inverts incentives: you owe the future nothing here, which is exactly why behaviour now is read as character revealed. Run it as a project: a handover document that needs no author present (systems, statuses, contacts, passwords transferred properly, the things only you know written down); successors introduced and warm-handed; loose ends closed or explicitly assigned; energy sustained to the last day. Colleagues forget years of solid work faster than they forget a checked-out final month — and remember a superb handover for just as long. This is the cheapest reputation purchase available in professional life.",
        "id": "Masa pemberitahuan membalik insentif: kamu tidak lagi berutang apa pun pada masa depan di tempat ini, dan justru karena itulah perilakumu sekarang dibaca sebagai karakter yang sebenarnya. Jalani sebagai proyek: dokumen serah terima yang tidak butuh kehadiran penulisnya (sistem, status, kontak, kata sandi dipindahkan dengan benar, hal-hal yang hanya kamu tahu dituliskan); penerus diperkenalkan dan diserahi pekerjaan dengan hangat; urusan yang menggantung ditutup atau ditugaskan secara jelas; energi dijaga sampai hari terakhir. Kolega melupakan bertahun-tahun kerja yang solid lebih cepat daripada melupakan bulan terakhir yang setengah hati — dan mengingat serah terima yang hebat sama lamanya. Inilah cara membeli reputasi yang paling murah dalam kehidupan profesional."
       }
      },
      {
       "x": 74,
       "y": 70,
       "h": {
        "en": "Station 4 · The alumni bridge",
        "id": "Persinggahan 4 · Jembatan alumni"
       },
       "body": {
        "en": "Former colleagues become your industry: future clients, referees, hiring managers, co-founders. Before leaving: personal goodbyes to your circle-adjacent people with genuine thanks and current contact details. After leaving: the occasional check-in, congratulations on their wins, help freely given when asked — the 6.4 maintenance rhythm extended to alumni. Keep every confidence and never trash the old employer publicly; your new colleagues calibrate how you will one day speak of them. Done over years, the alumni bridge quietly becomes the most valuable network you own — senior people consistently report their biggest breaks arrived through someone they once worked beside.",
        "id": "Mantan kolega menjadi industrimu: klien di masa depan, pemberi referensi, manajer perekrut, rekan pendiri usaha. Sebelum pergi: pamit secara pribadi kepada orang-orang di sekitar lingkaranmu, dengan terima kasih yang tulus dan kontak terbaru. Setelah pergi: sapaan sesekali, ucapan selamat atas capaian mereka, bantuan yang diberikan tanpa pamrih saat diminta — irama perawatan dari Pelajaran 6.4 diperluas ke para alumni. Jaga semua rahasia dan jangan pernah menjelek-jelekkan mantan pemberi kerja di depan publik; kolega barumu sedang menakar bagaimana kelak kamu akan membicarakan mereka. Dijalani bertahun-tahun, jembatan alumni diam-diam menjadi jaringan paling berharga yang kamu miliki — orang-orang senior secara konsisten mengaku bahwa peluang terbesar mereka datang lewat seseorang yang pernah bekerja di samping mereka."
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
         "id": "Ambil — angka tertinggi yang menang"
        },
        {
         "en": "Revisit why you ran the move: if the trigger was yield, ceiling or architecture, money answers a question you never asked",
         "id": "Tengok kembali alasanmu pindah: kalau pemicunya imbal aset, batas atas, atau arsitektur, uang menjawab pertanyaan yang tidak pernah kamu ajukan"
        },
        {
         "en": "Use it to renegotiate the new offer upward",
         "id": "Pakai untuk menegosiasikan tawaran baru agar lebih tinggi"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Counteroffers reprice the salary line of a bundle you rejected for other lines. The architecture that justified the move usually still stands.",
        "id": "Tawaran balik hanya menaikkan baris gaji dari paket yang kamu tolak karena baris-baris lainnya. Arsitektur yang membenarkan kepindahan itu biasanya masih tetap berlaku."
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
    "id": "Kecerdasan Finansial di Awal Karier"
   },
   "overview": {
    "en": "Module 8 of The Route focuses on early career financial intelligence. Work through the lessons in order — each builds on the last.",
    "id": "Modul 8 The Route berfokus pada kecerdasan finansial di awal karier. Kerjakan pelajarannya secara berurutan — setiap pelajaran dibangun di atas pelajaran sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply early career financial intelligence to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu bisa menerapkan kecerdasan finansial pada keputusan kariermu sendiri dengan metode yang konkret dan bisa diulang."
   },
   "lessons": [
    {
     "n": "8.1",
     "title": {
      "en": "Your Total Compensation and How to Benchmark It",
      "id": "Total Kompensasimu dan Cara Membandingkannya dengan Pasar"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "You cannot negotiate, compare or plan around a number you do not understand. This lesson decomposes total compensation — everything your work actually pays you — and builds the benchmarking habit that keeps your price calibrated to the market rather than to habit.",
      "id": "Kamu tidak bisa menegosiasikan, membandingkan, atau merencanakan sesuatu berdasarkan angka yang tidak kamu pahami. Pelajaran ini mengurai total kompensasi — semua yang sebenarnya kamu terima dari pekerjaanmu — dan membangun kebiasaan membandingkan dengan pasar, supaya hargamu terkalibrasi ke pasar, bukan ke kebiasaan."
     },
     "objectives": [
      {
       "en": "Decompose an offer or payslip into its full compensation stack.",
       "id": "Mengurai sebuah tawaran atau slip gaji menjadi susunan kompensasinya yang lengkap."
      },
      {
       "en": "Benchmark your compensation against market data honestly.",
       "id": "Membandingkan kompensasimu dengan data pasar secara jujur."
      },
      {
       "en": "Read the growth curve — the variable that outweighs the entry number.",
       "id": "Membaca kurva pertumbuhan — variabel yang lebih menentukan daripada angka awal."
      }
     ],
     "takeaways": [
      {
       "en": "Total compensation is base + variable + benefits + growth curve; comparing bases alone misprices offers routinely.",
       "id": "Total kompensasi adalah gaji pokok + variabel + tunjangan + kurva pertumbuhan; membandingkan gaji pokok saja hampir selalu salah menilai tawaran."
      },
      {
       "en": "Benchmark from multiple sources, adjusted for stage and city — single anecdotes mislead in both directions.",
       "id": "Bandingkan dari beberapa sumber, disesuaikan dengan tahap karier dan kota — satu cerita dari satu orang menyesatkan ke dua arah."
      },
      {
       "en": "A 4% versus 10% annual growth curve dwarfs a 15% starting difference within five years.",
       "id": "Kurva pertumbuhan 4% versus 10% per tahun membuat selisih gaji awal 15% jadi tidak berarti dalam lima tahun."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "The stack",
        "id": "Susunannya"
       },
       "body": {
        "en": "<b>Base salary</b> — the guaranteed line, and in Indonesia typically the reference for THR (the mandatory religious-holiday allowance) and severance formulas. <b>Variable</b> — bonuses and incentives: ask what the realistic payout has been, not the theoretical maximum. <b>Benefits with cash value</b> — health coverage beyond BPJS, retirement contributions beyond the mandatory, meal/transport allowances, phone plans, education budgets: price them, they routinely add 10–20%. <b>Equity or options</b> — at startups, value them soberly: illiquid, probabilistic, and worth asking hard questions about (vesting, dilution, what happens on departure). <b>The growth curve</b> — the increase policy, promotion increments, and how the company has actually behaved: the stack's most underweighted line.",
        "id": "<b>Gaji pokok</b> — baris yang dijamin, dan di Indonesia biasanya menjadi dasar perhitungan THR serta rumus pesangon. <b>Variabel</b> — bonus dan insentif: tanyakan berapa yang realistis dibayarkan selama ini, bukan angka maksimum di atas kertas. <b>Tunjangan yang bernilai uang</b> — jaminan kesehatan di luar BPJS, iuran pensiun di luar yang wajib, tunjangan makan dan transportasi, paket telepon, anggaran pendidikan: hitung nilainya, karena semua ini lazim menambah 10–20%. <b>Saham atau opsi saham</b> — di startup, nilai dengan kepala dingin: tidak likuid, penuh ketidakpastian, dan layak ditanyakan secara tajam (vesting, dilusi, apa yang terjadi kalau kamu keluar). <b>Kurva pertumbuhan</b> — kebijakan kenaikan gaji, besaran kenaikan saat promosi, dan bagaimana perusahaan sebenarnya berperilaku selama ini: baris yang paling sering diremehkan dalam susunan ini."
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
        "id": "Lakukan triangulasi: survei gaji dan rentang gaji di portal lowongan untuk peran dan kotamu; obrolan dengan perekrut (mereka menyebut rentang dengan bebas — itu memang barang dagangan mereka); rekan yang kamu percaya, lewat rentang alih-alih angka pasti (“apakah 8–10 zona yang wajar untuk peran ini?” lebih enak didengar daripada “gajimu berapa?”); dan rentang gaji yang dicantumkan di lowongan, bila ada. Sesuaikan dengan tahap perusahaan — korporasi membayar lebih stabil, startup lebih fluktuatif dengan iming-iming saham yang seperti tiket lotre — dan dengan selisih biaya hidup antarkota. Perbarui pembacaan ini setiap tahun di Route Planner. Dua kesalahan kalibrasi yang harus dihindari: berpatokan pada satu teman yang gajinya kebetulan ekstrem, dan berpatokan pada gajimu sendiri saat ini — pasar tidak tahu dan tidak peduli berapa gajimu sekarang."
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
        "id": "Hitung sekali saja, dan cara kamu membaca tawaran akan berubah selamanya: Rp 8 juta yang tumbuh 10% per tahun melampaui Rp 9,2 juta yang tumbuh 4% dalam empat tahun, dan setelah itu selisihnya melebar untuk seterusnya. Maka galilah kurvanya: berapa persen kenaikan gaji yang benar-benar terjadi dua tahun terakhir? Berapa besar kenaikan saat promosi? Apakah pindah internal disertai penyesuaian gaji? Bagaimana perusahaan menyikapi tahun-tahun dengan inflasi tinggi? Lensa yang sama juga berlaku untuk menilai investasi keterampilan: sertifikasi atau ranah yang memindahkanmu ke kurva yang lebih curam menghasilkan lebih banyak daripada kenaikan gaji satu kali. Ini logika bertumbuh berlipat dari Modul 1 dalam wujud rupiah — alasan mengapa modal karier dan modal finansial adalah satu kursus yang sama."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Offer A: Rp 9m base, 4% typical annual growth. Offer B: Rp 8m base, 10% growth, benefits worth ~Rp 800k/month more. The stack read?",
        "id": "Tawaran A: gaji pokok Rp 9 juta, pertumbuhan tahunan biasanya 4%. Tawaran B: gaji pokok Rp 8 juta, pertumbuhan 10%, tunjangan bernilai sekitar Rp 800 ribu per bulan lebih besar. Bacaan susunannya?"
       },
       "options": [
        {
         "en": "A — the base is 12.5% higher",
         "id": "A — gaji pokoknya 12,5% lebih tinggi"
        },
        {
         "en": "B — benefits nearly close today's gap and the curve overtakes within ~3 years, then compounds",
         "id": "B — tunjangannya hampir menutup selisih hari ini, dan kurvanya menyalip dalam sekitar 3 tahun, lalu terus bertumbuh berlipat"
        },
        {
         "en": "They are equivalent — take the bigger brand",
         "id": "Setara — ambil yang mereknya lebih besar"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Stack plus curve, not base: B's effective gap today is small and its growth compounds past A permanently — assuming the curves are verified, which is the interrogation's job.",
        "id": "Susunan plus kurva, bukan gaji pokok: selisih efektif B hari ini kecil, dan pertumbuhannya melampaui A untuk seterusnya — dengan asumsi kurvanya sudah diverifikasi, dan itulah tugas menggali tawaran."
       }
      }
     ],
     "quote": {
      "en": "You cannot negotiate a number you do not understand.",
      "id": "Kamu tidak bisa menegosiasikan angka yang tidak kamu pahami."
     },
     "diagram": {
      "type": "bars",
      "exhibit": {
       "en": "Exhibit 2: The curve beats the number — the lesson's own worked example, year by year.",
       "id": "Peraga 2: Kurva mengalahkan angka — contoh hitungan dari pelajaran ini, tahun demi tahun."
      },
      "title": {
       "en": "Rp 8m at 10% growth vs Rp 9.2m at 4% (illustrative arithmetic)",
       "id": "Rp 8 juta tumbuh 10% vs Rp 9,2 juta tumbuh 4% (hitungan ilustratif)"
      },
      "items": [
       {
        "h": {
         "en": "Year 0 — offer A (9.2m, 4%)",
         "id": "Tahun 0 — tawaran A (9,2 juta, 4%)"
        },
        "v": 79,
        "label": "9.2"
       },
       {
        "h": {
         "en": "Year 0 — offer B (8.0m, 10%)",
         "id": "Tahun 0 — tawaran B (8,0 juta, 10%)"
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
       "id": "Panjang batang sebanding dengan gaji hasil hitungan, dalam juta rupiah. Di tahun keempat, kurva yang lebih curam sudah melampaui angka awal yang lebih tinggi — dan sejak itu selisihnya melebar untuk seterusnya."
      }
     }
    },
    {
     "n": "8.2",
     "title": {
      "en": "Building a Savings Discipline on Any Income",
      "id": "Membangun Disiplin Menabung dengan Penghasilan Berapa Pun"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "The first salary arrives and lifestyle arrives with it — unless a system arrives first. This lesson installs the early-career money system: pay-yourself-first automation, the emergency fund that buys career courage, and the lifestyle-inflation firewall.",
      "id": "Gaji pertama datang, dan gaya hidup datang bersamanya — kecuali sistemnya datang lebih dulu. Pelajaran ini memasang sistem keuangan awal karier: otomatisasi “bayar dirimu dulu”, dana darurat yang membeli keberanian dalam berkarier, dan tembok api terhadap inflasi gaya hidup."
     },
     "objectives": [
      {
       "en": "Automate saving before spending is possible: the transfer-on-payday design.",
       "id": "Mengotomatiskan tabungan sebelum uangnya sempat dibelanjakan: rancangan transfer otomatis di hari gajian."
      },
      {
       "en": "Build the emergency fund sized to your actual monthly needs.",
       "id": "Membangun dana darurat yang ukurannya sesuai kebutuhan bulananmu yang sebenarnya."
      },
      {
       "en": "Contain lifestyle inflation with the raise-split rule.",
       "id": "Menahan inflasi gaya hidup dengan aturan membagi dua setiap kenaikan gaji."
      }
     ],
     "takeaways": [
      {
       "en": "Willpower budgets fail; architecture budgets work — move the money before you can see it.",
       "id": "Anggaran yang mengandalkan tekad akan gagal; anggaran yang mengandalkan sistem akan berhasil — pindahkan uangnya sebelum kamu sempat melihatnya."
      },
      {
       "en": "Three to six months of expenses in reserve converts career decisions from desperate to deliberate.",
       "id": "Cadangan sebesar tiga sampai enam bulan pengeluaran mengubah keputusan karier dari terpaksa menjadi terencana."
      },
      {
       "en": "Split every raise on arrival — half to the future, half to the present — and inflation never owns the curve.",
       "id": "Bagi dua setiap kenaikan gaji begitu datang — separuh untuk masa depan, separuh untuk hari ini — dan inflasi gaya hidup tidak akan pernah menguasai kurvamu."
      }
     ],
     "sections": [
      {
       "icon": "gear",
       "h": {
        "en": "Architecture over willpower",
        "id": "Sistem, bukan tekad"
       },
       "body": {
        "en": "The design: on payday, an automatic transfer moves your savings rate — start at 10–20%, any number beats zero — into an account you do not carry a card for. What remains is genuinely spendable, no tracking apps or guilt required; the decision was made once, by the calm version of you, and executes monthly without consulting the tired version. This is Map 2.4's important-not-urgent work logic applied to money: the important-not-urgent transfer scheduled before urgencies fill the month. Increase the rate with each raise (below) and revisit the number annually — the system flexes, the existence of the system does not.",
        "id": "Rancangannya: di hari gajian, transfer otomatis memindahkan porsi tabunganmu — mulai dari 10–20%, angka berapa pun lebih baik daripada nol — ke rekening yang kartunya tidak kamu bawa ke mana-mana. Sisanya benar-benar boleh dibelanjakan, tanpa aplikasi pencatat pengeluaran atau rasa bersalah; keputusannya diambil satu kali, oleh versi dirimu yang tenang, dan dijalankan setiap bulan tanpa perlu berunding dengan versi dirimu yang lelah. Ini logika kerja penting-tapi-tidak-mendesak dari Pelajaran 2.4 The Map, diterapkan pada uang: transfer yang penting-tapi-tidak-mendesak dijadwalkan sebelum hal-hal mendesak memenuhi bulanmu. Naikkan porsinya setiap kali gaji naik (lihat di bawah) dan tinjau angkanya setahun sekali — angkanya boleh lentur, keberadaan sistemnya tidak."
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
        "id": "Targetkan tiga sampai enam bulan pengeluaran bulanan yang sebenarnya (bukan gaji), disimpan di tempat yang bisa dicairkan seketika — rekening tabungan terpisah atau reksa dana pasar uang, bukan investasi yang bisa turun 30% tepat di bulan kamu membutuhkannya. Fungsinya bagi karier lebih besar daripada fungsi finansialnya: landasan yang sudah terdanai inilah yang membuatmu bisa menolak peran yang beracun, bernegosiasi tanpa keputusasaan bocor ke suaramu, bertahan dari kegagalan masa percobaan atau PHK tanpa menyambar tawaran pertama yang lewat, dan mengambil keputusan dua lensa (Pelajaran 5.4 The Pack) berdasarkan kelayakan, bukan ketakutan. Bangun ini sebelum berinvestasi apa pun: dana ini adalah fondasi tempat semua pengambilan risiko berpijak."
       }
      },
      {
       "icon": "eye",
       "h": {
        "en": "The raise-split firewall",
        "id": "Tembok api: bagi dua setiap kenaikan"
       },
       "body": {
        "en": "Lifestyle inflation is silent: each raise absorbed into slightly nicer everything, until the doubled salary supports zero additional saving — and, more dangerously, until the lifestyle requires the salary, locking you into roles the architecture would otherwise leave. The firewall is one rule applied within a week of any raise: half the increase joins the automatic transfer, half upgrades your life guilt-free. You feel every raise and the savings rate ratchets automatically. The same rule tames the THR and bonus cycle: a fixed split decided in advance — some to the future, some to obligations and generosity, some to joy — beats twelve Decembers of improvisation.",
        "id": "Inflasi gaya hidup bekerja tanpa suara: setiap kenaikan gaji terserap ke segala sesuatu yang sedikit lebih bagus, sampai gaji yang sudah dua kali lipat tidak menambah tabungan sepeser pun — dan, yang lebih berbahaya, sampai gaya hidupmu menuntut gaji itu, menguncimu di peran yang seharusnya sudah kamu tinggalkan menurut arsitekturmu. Tembok apinya adalah satu aturan yang diterapkan dalam seminggu setelah kenaikan gaji apa pun: separuh kenaikannya masuk ke transfer otomatis, separuhnya lagi untuk meningkatkan kualitas hidupmu tanpa rasa bersalah. Kamu tetap merasakan setiap kenaikan, dan porsi tabunganmu naik dengan sendirinya. Aturan yang sama menjinakkan siklus THR dan bonus: pembagian tetap yang sudah diputuskan di muka — sebagian untuk masa depan, sebagian untuk kewajiban dan berbagi, sebagian untuk bersenang-senang — jauh lebih baik daripada dua belas kali improvisasi di setiap akhir tahun."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does the emergency fund precede all investing in this course's ordering?",
        "id": "Mengapa dana darurat harus ada sebelum investasi apa pun, menurut urutan kursus ini?"
       },
       "options": [
        {
         "en": "Because investments are only for the wealthy",
         "id": "Karena investasi hanya untuk orang kaya"
        },
        {
         "en": "Because it is simultaneously the buffer that keeps investments untouched in bad months and the runway that keeps career decisions deliberate",
         "id": "Karena ia sekaligus menjadi penyangga yang menjaga investasi tidak tersentuh di bulan yang buruk, dan landasan yang menjaga keputusan karier tetap terencana"
        },
        {
         "en": "Because banks require it before opening investment accounts",
         "id": "Karena bank mewajibkannya sebelum membuka rekening investasi"
        }
       ],
       "correct": 1,
       "why": {
        "en": "An unfunded investor sells at the bottom when the motor breaks; an unfunded professional accepts bad roles from fear. The fund fixes both failure modes at once.",
        "id": "Investor tanpa dana darurat menjual di titik terendah saat motornya mogok; profesional tanpa dana darurat menerima peran yang buruk karena takut. Dana ini memperbaiki kedua kegagalan itu sekaligus."
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
       "id": "Hitungan landasan dana darurat dan pertumbuhan majemuk berdasarkan penghasilan, pengeluaran, dan horizon waktumu — rumusnya tampil di layar, asumsinya milikmu, dihitung di perangkat ini."
      },
      "cta": {
       "en": "Open the money instruments →",
       "id": "Buka instrumen keuangan →"
      }
     }
    },
    {
     "n": "8.3",
     "title": {
      "en": "Investment Foundations for Your Market",
      "id": "Dasar-Dasar Investasi untuk Pasar Indonesia"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "With the fund built, surplus needs a home that outruns inflation. This lesson covers investing foundations for an Indonesian early-career professional: the instruments in ascending risk, the cost-and-diversification principles that survive every market, and the scam-detection reflexes that protect everything else.",
      "id": "Setelah dana darurat terbentuk, uang lebih butuh tempat yang hasilnya mengalahkan inflasi. Pelajaran ini membahas dasar-dasar investasi untuk profesional awal karier di Indonesia: instrumen-instrumen dari risiko terendah ke tertinggi, prinsip biaya dan diversifikasi yang bertahan di kondisi pasar apa pun, dan refleks mendeteksi penipuan yang melindungi semuanya."
     },
     "objectives": [
      {
       "en": "Map the instrument ladder: deposits, money market, bonds, index funds, equities.",
       "id": "Memetakan tangga instrumen: deposito, pasar uang, obligasi, reksa dana indeks, saham."
      },
      {
       "en": "Apply the three survivor principles: costs, diversification, time in market.",
       "id": "Menerapkan tiga prinsip yang selalu bertahan: biaya, diversifikasi, lamanya waktu di pasar."
      },
      {
       "en": "Detect the scam patterns that specifically hunt young professionals.",
       "id": "Mendeteksi pola-pola penipuan yang secara khusus mengincar profesional muda."
      }
     ],
     "takeaways": [
      {
       "en": "Start boring: regular amounts into diversified low-cost instruments beat exciting bets on any honest timescale.",
       "id": "Mulailah dengan yang membosankan: setoran rutin ke instrumen terdiversifikasi berbiaya rendah mengalahkan taruhan yang seru, dalam rentang waktu mana pun yang jujur."
      },
      {
       "en": "Costs compound against you exactly as returns compound for you — read every fee.",
       "id": "Biaya bertumbuh berlipat melawanmu, persis seperti imbal hasil bertumbuh berlipat untukmu — baca setiap biaya."
      },
      {
       "en": "Guaranteed high returns are the signature of fraud, not opportunity — walk away every time.",
       "id": "Imbal hasil tinggi yang dijamin adalah ciri khas penipuan, bukan peluang — tinggalkan, setiap kali."
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
        "id": "Dari risiko dan ekspektasi imbal hasil terendah ke tertinggi: <b>deposito</b> (deposito berjangka bank — dijamin LPS sampai batas tertentu, hasilnya nyaris hanya mengimbangi inflasi); <b>reksa dana pasar uang</b> (likuid, fluktuasinya rendah, tempat yang lazim untuk dana darurat); <b>obligasi ritel negara</b> (seri ORI/SBR/sukuk — dijamin negara, kuponnya di atas bunga deposito, dijual dalam pecahan ritel); <b>reksa dana indeks dan campuran</b> (paparan pasar yang terdiversifikasi dalam satu kali beli, kuda pekerja untuk tabungan jangka panjang); <b>saham individual</b> (risiko satu perusahaan yang menuntut waktu riset sungguhan — dapatkan haknya dengan belajar lebih dulu, dan mulai dengan porsi kecil). Platform yang teregulasi membuat semuanya bisa diakses dari ponsel dengan setoran minimum yang kecil; yang wajib diverifikasi: produk dan platformnya terdaftar di OJK, selalu."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "The survivor principles",
        "id": "Prinsip yang selalu bertahan"
       },
       "body": {
        "en": "<b>Costs:</b> a 2% annual fee consumes roughly a third of a portfolio's growth over 25 years; compare expense ratios and platform fees before performance claims, which do not persist the way costs do. <b>Diversification:</b> across companies (funds do this by construction), across time (fixed monthly buying — averaging — removes the timing decision you cannot win), and eventually across asset classes. <b>Time in market:</b> the compounding curve rewards years invested, not entries timed; the investor who starts at 23 with modest amounts beats the one who waits at 30 for the perfect moment. Corollary: money needed within three years does not belong in volatile instruments at all.",
        "id": "<b>Biaya:</b> biaya tahunan 2% menggerus kira-kira sepertiga pertumbuhan portofolio dalam 25 tahun; bandingkan rasio biaya dan biaya platform sebelum melihat klaim kinerja, karena kinerja tidak bertahan sekonsisten biaya. <b>Diversifikasi:</b> lintas perusahaan (reksa dana melakukannya secara bawaan), lintas waktu (pembelian bulanan dengan nominal tetap — merata-ratakan harga — menghapus keputusan menebak waktu yang tidak mungkin kamu menangkan), dan pada akhirnya lintas kelas aset. <b>Lamanya waktu di pasar:</b> kurva pertumbuhan majemuk mengganjar tahun-tahun yang kamu habiskan di pasar, bukan momen masuk yang tepat; investor yang mulai di usia 23 dengan nominal sederhana mengalahkan yang menunggu momen sempurna sampai usia 30. Konsekuensinya: uang yang kamu butuhkan dalam tiga tahun ke depan sama sekali tidak boleh ditaruh di instrumen yang fluktuatif."
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
        "id": "Profesional muda dengan gaji pertama adalah kelompok yang sengaja diincar. Ciri-cirinya, satu saja sudah cukup alasan untuk pergi: <b>imbal hasil dijamin di atas bunga deposito</b> (investasi sungguhan tidak bisa menjamin apa pun — “pasti untung” adalah pengakuan dosanya); <b>bonus untuk merekrut anggota</b> (hasil yang berasal dari setoran anggota baru adalah skema piramida, apa pun produk yang menghiasinya); <b>tekanan dan kerahasiaan</b> (“slot tutup malam ini”, “jangan bilang ke bank alasan transfernya”); <b>penyimpanan dana yang tidak bisa diverifikasi</b> (uangmu masuk ke rekening pribadi seseorang, platformnya tidak ada di daftar OJK); <b>kostum kredibilitas</b> (endorsement palsu, tangkapan layar keuntungan, kemewahan sewaan). Pertahanannya bersifat prosedural, bukan intelektual: verifikasi pendaftarannya, tolak segala desakan, dan ingat bahwa penipuan di setiap zaman memakai aset paling seru di zaman itu sebagai topeng."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A colleague's investment group promises 5% monthly, “guaranteed, backed by crypto arbitrage”, with bonuses for bringing friends. The radar says?",
        "id": "Grup investasi seorang kolega menjanjikan 5% per bulan, “dijamin, didukung arbitrase kripto”, dengan bonus kalau mengajak teman. Kata radarnya?"
       },
       "options": [
        {
         "en": "Investigate the arbitrage strategy's details first",
         "id": "Selidiki dulu detail strategi arbitrasenya"
        },
        {
         "en": "Two signatures already present — guaranteed returns and recruitment rewards — walk away regardless of the strategy story",
         "id": "Dua ciri sudah muncul — imbal hasil dijamin dan bonus perekrutan — tinggalkan, apa pun cerita strateginya"
        },
        {
         "en": "Invest a small test amount to verify",
         "id": "Coba investasikan nominal kecil dulu untuk membuktikan"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The mask (crypto, gold, forex) changes yearly; the signatures do not. Small test amounts are exactly how these schemes grow — early payouts recruit the victim as a witness.",
        "id": "Topengnya (kripto, emas, forex) berganti setiap tahun; ciri-cirinya tidak. Nominal kecil untuk “coba dulu” justru cara skema ini tumbuh — pembayaran awal merekrut korban sebagai saksi."
       }
      }
     ]
    },
    {
     "n": "8.4",
     "title": {
      "en": "The Financial Planning Horizon: From First Salary to Financial Independence",
      "id": "Horizon Perencanaan Keuangan: Dari Gaji Pertama Menuju Kemandirian Finansial"
     },
     "dur": {
      "en": "10 min",
      "id": "10 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Money decisions stop being monthly and start being decadal: the horizon view. This closing lesson connects the system — fund, investing, curve — to the long arcs: the big purchases, the family obligations, the sabbaticals and studies, and the eventual independence that makes work a choice.",
      "id": "Keputusan keuangan berhenti berskala bulanan dan mulai berskala puluhan tahun: inilah pandangan horizon. Pelajaran penutup ini menghubungkan sistem yang sudah dibangun — dana darurat, investasi, kurva — dengan rencana-rencana jangka panjang: pembelian besar, kewajiban keluarga, cuti panjang dan studi lanjut, dan pada akhirnya kemandirian yang menjadikan bekerja sebuah pilihan."
     },
     "objectives": [
      {
       "en": "Sketch the financial horizon: the named goals a decade of surplus serves.",
       "id": "Menggambar horizon finansial: tujuan-tujuan bernama yang akan didanai oleh satu dekade uang lebih."
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
       "id": "Tujuan yang punya nama, tanggal, dan angka mengubah tabungan yang samar menjadi rencana yang terdanai."
      },
      {
       "en": "Family support is a budget line designed with love and limits — not an unbounded obligation absorbed in silence.",
       "id": "Dukungan untuk keluarga adalah pos anggaran yang dirancang dengan kasih dan batas — bukan kewajiban tanpa batas yang ditanggung dalam diam."
      },
      {
       "en": "Every percent of savings rate buys future optionality: the real product is choices, not a number.",
       "id": "Setiap persen porsi tabungan membeli keleluasaan di masa depan: produk sebenarnya adalah pilihan, bukan angka."
      }
     ],
     "sections": [
      {
       "icon": "target",
       "h": {
        "en": "Naming the horizon",
        "id": "Memberi nama pada horizon"
       },
       "body": {
        "en": "Generic “saving for the future” cannot be planned or felt. Name the goals: the professional certification at year two (Rp X by month Y); the marriage or the home down payment at year five; the study leave or sabbatical fund; the parents' support fund as they age. Each named goal gets a number, a date, and therefore a monthly figure and an appropriate instrument (three-year money in stable instruments, ten-year money in growth ones — 8.3's corollary applied). Revisit the map annually beside the career architecture review — the two documents describe one life and should agree with each other.",
        "id": "“Menabung untuk masa depan” yang generik tidak bisa direncanakan, juga tidak bisa dirasakan. Beri nama tujuannya: sertifikasi profesional di tahun kedua (Rp X pada bulan Y); pernikahan atau uang muka rumah di tahun kelima; dana cuti belajar atau cuti panjang; dana dukungan untuk orang tua seiring bertambahnya usia mereka. Setiap tujuan yang bernama mendapat angka, tanggal, dan dengan sendirinya nominal bulanan serta instrumen yang sesuai (uang untuk tiga tahun ke depan di instrumen stabil, uang untuk sepuluh tahun ke depan di instrumen pertumbuhan — konsekuensi dari Pelajaran 8.3 diterapkan). Tinjau peta ini setiap tahun, berdampingan dengan tinjauan arsitektur karier — kedua dokumen itu menggambarkan satu kehidupan yang sama dan seharusnya saling selaras."
       }
      },
      {
       "icon": "chat",
       "h": {
        "en": "Family, structured with dignity",
        "id": "Keluarga, ditata dengan martabat"
       },
       "body": {
        "en": "For many Indonesian professionals the first salary carries family expectations — parents, siblings' schooling, extended obligations. The failure modes mirror each other: unbounded absorption (every request met until your own foundation never forms, helping no one sustainably) and guilty avoidance (relationships corroding under unspoken resentment). The structured middle: a deliberate monthly amount, decided by you within your system, given consistently and communicated warmly — “this is yours every month, reliably” serves families better than unpredictable larger sums under pressure. For larger asks beyond the line, the graceful-no craft from Map 2.4 applies with love: what you protect by declining is the system that keeps the monthly line reliable for years.",
        "id": "Bagi banyak profesional Indonesia, gaji pertama datang bersama harapan keluarga — orang tua, biaya sekolah adik, kewajiban keluarga besar. Dua kegagalannya saling bercermin: menanggung tanpa batas (setiap permintaan dipenuhi sampai fondasimu sendiri tidak pernah terbentuk, sehingga tidak ada yang tertolong secara berkelanjutan) dan menghindar dengan rasa bersalah (hubungan terkikis oleh kekesalan yang tidak pernah diucapkan). Jalan tengah yang tertata: nominal bulanan yang ditetapkan dengan sengaja, kamu putuskan sendiri di dalam sistemmu, diberikan secara konsisten dan disampaikan dengan hangat — “ini untuk Ibu dan Bapak setiap bulan, bisa diandalkan” lebih bermanfaat bagi keluarga daripada jumlah lebih besar yang datangnya tidak menentu di bawah tekanan. Untuk permintaan yang lebih besar di luar pos itu, cara menolak dengan anggun dari Pelajaran 2.4 The Map berlaku dengan penuh kasih: yang kamu lindungi dengan menolak adalah sistem yang menjaga pos bulanan itu tetap andal selama bertahun-tahun."
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
        "id": "Kemandirian finansial — aset yang menghasilkan cukup untuk membuat bekerja menjadi pilihan — masih puluhan tahun jauhnya, dan angkanya tidak sepenting arahnya: setiap persen porsi tabungan, setiap tahun pertumbuhan majemuk, setiap keterampilan yang membuat kurvamu lebih curam menggerakkanmu ke sana. Yang dibeli oleh arah ini jauh sebelum kamu tiba: landasan terdanai yang memungkinkanmu menolak promosi yang beracun; cuti panjang yang melatihmu ulang untuk bidang yang lebih baik; kemampuan mengambil peran yang bermakna dengan gaji lebih rendah karena fondasimu kokoh. Itulah bingkai penutup kursus ini: kecerdasan finansial adalah kecerdasan karier — sistem ini ada supaya sang arsitek, bukan saldo rekening, yang menentukan rutenya."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "How does this module change the reading of a 20% pay-cut offer at a mission-driven organisation you admire?",
        "id": "Bagaimana modul ini mengubah cara membaca tawaran dengan gaji 20% lebih rendah dari organisasi bermisi yang kamu kagumi?"
       },
       "options": [
        {
         "en": "It forbids it — never accept less money",
         "id": "Melarangnya — jangan pernah menerima uang yang lebih sedikit"
        },
        {
         "en": "It makes it a system question: with the fund built, obligations structured and the curve understood, the cut may be affordable and the architecture may say it is worth it",
         "id": "Menjadikannya pertanyaan tentang sistem: dengan dana darurat terbentuk, kewajiban tertata, dan kurva dipahami, pemotongan itu mungkin terjangkau, dan arsitekturmu mungkin berkata itu layak"
        },
        {
         "en": "It defers all such decisions until financial independence",
         "id": "Menunda semua keputusan semacam itu sampai kamu mandiri secara finansial"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The system's product is optionality. A funded professional can price a mission role deliberately; an unfunded one never even reaches the question.",
        "id": "Produk dari sistem ini adalah keleluasaan memilih. Profesional yang punya dana bisa menimbang peran bermisi dengan sadar; yang tidak punya bahkan tidak pernah sampai pada pertanyaannya."
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
    "id": "Modul 9 The Route berfokus pada fondasi kepemimpinan. Kerjakan pelajarannya secara berurutan — setiap pelajaran dibangun di atas pelajaran sebelumnya."
   },
   "outcome": {
    "en": "By the end of this module you can apply leadership foundations to your own career decisions with a concrete, repeatable method.",
    "id": "Di akhir modul ini, kamu bisa menerapkan fondasi kepemimpinan pada keputusan kariermu sendiri dengan metode yang konkret dan bisa diulang."
   },
   "lessons": [
    {
     "n": "9.1",
     "title": {
      "en": "Communication with Executive Presence",
      "id": "Komunikasi dengan Wibawa Eksekutif"
     },
     "dur": {
      "en": "25 min",
      "id": "25 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "Executive presence is not charisma; it is the earned impression that things are under control when you speak. This lesson decomposes it into trainable parts — grounded delivery, altitude fluency, composure under fire — and connects each to skills the trilogy already built.",
      "id": "Wibawa eksekutif bukan karisma; ia kesan yang kamu raih bahwa segalanya terkendali ketika kamu bicara. Pelajaran ini menguraikannya menjadi bagian-bagian yang bisa dilatih — penyampaian yang membumi, kefasihan berpindah ketinggian, ketenangan saat diserang — dan menghubungkan masing-masing dengan keterampilan yang sudah dibangun trilogi ini."
     },
     "objectives": [
      {
       "en": "Decompose executive presence into its trainable components.",
       "id": "Mengurai wibawa eksekutif menjadi komponen-komponen yang bisa dilatih."
      },
      {
       "en": "Speak to senior rooms: altitude first, brevity as confidence, numbers as ballast.",
       "id": "Berbicara di hadapan ruangan senior: ketinggian lebih dulu, ringkas sebagai tanda percaya diri, angka sebagai pemberat."
      },
      {
       "en": "Hold composure when challenged — the moment presence is actually measured.",
       "id": "Menjaga ketenangan saat ditantang — momen ketika wibawa benar-benar diukur."
      }
     ],
     "takeaways": [
      {
       "en": "Presence is pattern-matched from samples: prepared openings, held silences, calm corrections.",
       "id": "Wibawa dinilai dari contoh-contoh: pembukaan yang disiapkan, jeda yang ditahan, koreksi yang tenang."
      },
      {
       "en": "Senior rooms reward the same pyramid the Map taught — conclusion first, evidence on request, stop talking.",
       "id": "Ruangan senior menghargai piramida yang sama seperti yang diajarkan The Map — kesimpulan dulu, bukti kalau diminta, lalu berhenti bicara."
      },
      {
       "en": "The challenge moment is the exam: pause, ground in data, concede precisely or hold precisely.",
       "id": "Momen ditantang adalah ujiannya: jeda, berpijak pada data, mengakui dengan tepat atau bertahan dengan tepat."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "What rooms actually read",
        "id": "Apa yang sebenarnya dibaca ruangan"
       },
       "body": {
        "en": "Senior audiences sample for control signals: does the speaker know what they want to say (prepared, structured openings — no warm-up rambling)? Can they handle interruption (the altitude moves from Map 4.2)? Do they distinguish what they know from what they assume (stated confidence levels — “verified” versus “our current estimate”)? Do they finish sentences and then stop (trailing qualifiers dissolve authority)? None of this is height, voice or charisma — the quiet analyst who opens with the conclusion, answers the hard question with a number, and stops talking has presence; the fluent performer who cannot survive a follow-up does not.",
        "id": "Audiens senior mencari tanda-tanda kendali: apakah pembicara tahu apa yang ingin ia sampaikan (pembukaan yang disiapkan dan terstruktur — tanpa pemanasan yang bertele-tele)? Sanggupkah ia menangani interupsi (teknik berpindah ketinggian dari Pelajaran 4.2 The Map)? Apakah ia membedakan yang ia ketahui dari yang ia asumsikan (tingkat keyakinan disebut secara eksplisit — “sudah diverifikasi” versus “perkiraan kami saat ini”)? Apakah ia menyelesaikan kalimat lalu berhenti (embel-embel yang menggantung di ujung kalimat melarutkan otoritas)? Tidak ada satu pun dari ini yang soal tinggi badan, suara, atau karisma — analis pendiam yang membuka dengan kesimpulan, menjawab pertanyaan sulit dengan angka, lalu berhenti bicara, punya wibawa; pembicara fasih yang tidak selamat dari satu pertanyaan lanjutan, tidak."
       }
      },
      {
       "icon": "gear",
       "h": {
        "en": "Speaking upward, engineered",
        "id": "Berbicara ke atas, dengan persiapan"
       },
       "body": {
        "en": "Preparing for a senior room: write the one sentence you must land if the meeting collapses to ninety seconds — that sentence opens. Prepare the 30-second, 3-minute and 10-minute versions (altitude fluency); expect to deliver the middle one and be interrupted into the short one. Carry your three load-bearing numbers in memory — reading your own key figures off a slide reprices everything else you say. Rehearse aloud once; senior-room fluency is a motor skill, not a knowledge state. And close every segment with stop-shaped sentences: “That is the recommendation.” — silence afterwards included. The silence is the presence.",
        "id": "Persiapan menghadapi ruangan senior: tulis satu kalimat yang harus sampai kalau rapatnya tiba-tiba menyusut jadi sembilan puluh detik — kalimat itulah pembukamu. Siapkan versi 30 detik, 3 menit, dan 10 menit (kefasihan berpindah ketinggian); bersiaplah menyampaikan versi tengah dan diinterupsi hingga harus memakai versi pendek. Hafalkan tiga angka penopang utamamu — membaca angka kuncimu sendiri dari slide menurunkan nilai semua hal lain yang kamu ucapkan. Berlatihlah dengan suara lantang sekali; kefasihan di ruangan senior adalah keterampilan motorik, bukan sekadar pengetahuan. Dan tutup setiap bagian dengan kalimat yang bentuknya jelas berhenti: “Itu rekomendasinya.” — termasuk keheningan setelahnya. Keheningan itulah wibawanya."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "Composure under fire",
        "id": "Tenang saat diserang"
       },
       "body": {
        "en": "The challenge — “those numbers look wrong”, “we tried this, it failed” — is where presence is actually scored. The trained sequence: <b>pause</b> one breath (the pause reads as thought, not weakness); <b>ground</b> in the data — “the figure is from the March reconciliation; happy to re-verify the assumption behind it”; then <b>concede precisely or hold precisely</b> — “you're right about the Q2 window, and the trend since holds” or “I've checked that concern; here is why it doesn't apply”. What fails: instant capitulation (presence evaporates), heat (composure was the test), and bluffing (seniors probe exactly where bluffs live — Rope training's claim-probe logic, now aimed at you). This is interview composure, promoted to the boardroom.",
        "id": "Tantangan — “angka itu kelihatannya salah”, “kami pernah coba, gagal” — adalah momen ketika wibawa benar-benar dinilai. Urutan yang terlatih: <b>jeda</b> satu tarikan napas (jeda terbaca sebagai berpikir, bukan lemah); <b>berpijak</b> pada data — “angka itu dari rekonsiliasi bulan Maret; dengan senang hati saya verifikasi ulang asumsi di baliknya”; lalu <b>akui dengan tepat, atau bertahan dengan tepat</b> — “Bapak/Ibu benar soal periode Q2, dan tren sejak itu tetap berlaku” atau “kekhawatiran itu sudah saya periksa; ini alasannya tidak berlaku di sini”. Yang gagal: langsung menyerah (wibawa menguap), terpancing emosi (ketenangan adalah ujiannya), dan menggertak (senior menggali persis di tempat gertakan bersembunyi — logika menggali klaim dari latihan The Rope, kini diarahkan kepadamu). Ini ketenangan saat wawancara, yang dipromosikan ke ruang rapat direksi."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "A director interrupts your ten-minute update at minute two: “bottom line?” Presence-wise, the correct response is:",
        "id": "Seorang direktur memotong laporan sepuluh menitmu di menit kedua: “intinya apa?” Dari sisi wibawa, respons yang benar adalah:"
       },
       "options": [
        {
         "en": "“I'm building to that — two more minutes of context first.”",
         "id": "“Saya sedang menuju ke sana — dua menit konteks dulu.”"
        },
        {
         "en": "The prepared 30-second version, delivered as a complete answer, then silence for their next question",
         "id": "Versi 30 detik yang sudah disiapkan, disampaikan sebagai jawaban yang utuh, lalu diam menunggu pertanyaan berikutnya"
        },
        {
         "en": "Apologise for the length and offer to reschedule",
         "id": "Minta maaf karena terlalu panjang dan tawarkan untuk dijadwalkan ulang"
        }
       ],
       "correct": 1,
       "why": {
        "en": "The interruption is the room choosing its altitude — presence is having the short version ready and landing it without resentment or filler.",
        "id": "Interupsi itu adalah ruangan yang sedang memilih ketinggiannya — wibawa berarti versi pendeknya sudah siap, dan kamu menyampaikannya tanpa kesal dan tanpa basa-basi."
       }
      }
     ],
     "quote": {
      "en": "People follow evidence before they follow titles.",
      "id": "Orang mengikuti bukti sebelum mengikuti jabatan."
     },
     "listen": [
      {
       "label": {
        "en": "A stop-shaped close, spoken with the silence after",
        "id": "Penutup yang jelas berhenti, diucapkan dengan keheningan setelahnya"
       },
       "text": {
        "en": "Recommend approval of the pilot: three quarters of the decline is energy cost, and the retrofit addresses it directly. Main risk is capex payback, which we verify first. That is the recommendation.",
        "id": "Rekomendasi saya: setujui pilotnya. Tiga perempat penurunan berasal dari biaya energi, dan retrofit menanganinya secara langsung. Risiko utamanya adalah balik modal belanja modal, yang akan kita verifikasi lebih dulu. Itu rekomendasinya."
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
       "id": "Membuka di bawah tekanan, menyerap interupsi seorang VP, dan mengarahkan kredit ke orang yang tepat — latihan wibawa eksekutif ini menilai ketiga pilihanmu."
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
      "id": "Pengganda kepemimpinan adalah hitungan sederhana: hasil kerja satu orang ada batasnya; hasil kerja orang yang membuat lima orang lain lebih baik, tidak. Pelajaran ini membangun perangkat untuk mengembangkan orang lain, bertahun-tahun sebelum ada tim yang melapor kepadamu — mengajar, mendelegasikan, dan menumbuhkan orang-orang di sekitarmu."
     },
     "objectives": [
      {
       "en": "Teach so the learner can do it without you next time.",
       "id": "Mengajar sedemikian rupa sehingga lain kali orang itu bisa mengerjakannya tanpa kamu."
      },
      {
       "en": "Build team capability through documentation, onboarding and deliberate knowledge transfer.",
       "id": "Membangun kemampuan tim lewat dokumentasi, pendampingan orang baru, dan transfer pengetahuan yang disengaja."
      },
      {
       "en": "Measure yourself by others' growth — the metric leadership tracks actually use.",
       "id": "Mengukur dirimu dari pertumbuhan orang lain — ukuran yang benar-benar dipakai di jalur kepemimpinan."
      }
     ],
     "takeaways": [
      {
       "en": "Every “can you show me?” is a leadership audition — teach the method, not just the answer.",
       "id": "Setiap “bisa tunjukkan caranya?” adalah audisi kepemimpinan — ajarkan metodenya, bukan hanya jawabannya."
      },
      {
       "en": "Knowledge hoarding caps careers at exactly the point where organisations need multipliers.",
       "id": "Menimbun pengetahuan menghentikan karier tepat di titik ketika organisasi membutuhkan pengganda."
      },
      {
       "en": "The strongest promotion evidence for leadership tracks: people who got measurably better near you.",
       "id": "Bukti promosi terkuat untuk jalur kepemimpinan: orang-orang yang terbukti menjadi lebih baik di dekatmu."
      }
     ],
     "sections": [
      {
       "icon": "book",
       "h": {
        "en": "Teaching that transfers",
        "id": "Pengajaran yang benar-benar berpindah tangan"
       },
       "body": {
        "en": "When a colleague asks how, the hoarding answer does it for them (fast, and creates the next request); the multiplier answer teaches the method: do it together once narrating the why, let them drive the second pass with you nearby, then leave the runbook. Slower today, compounding forever — and the Map's curse-of-knowledge warning applies: rebuild the staircase, name the steps experts skip. People taught this way become your evidence (they will say so), your capacity (delegatable work now exists), and your reputation — “learned it from her” is the sentence leadership tracks are built from.",
        "id": "Ketika seorang kolega bertanya “caranya bagaimana?”, jawaban si penimbun adalah mengerjakannya untuk mereka (cepat, dan melahirkan permintaan berikutnya); jawaban si pengganda adalah mengajarkan metodenya: kerjakan bersama satu kali sambil menjelaskan alasannya, biarkan mereka yang mengemudi di putaran kedua dengan kamu di dekatnya, lalu tinggalkan buku manualnya. Lebih lambat hari ini, bertumbuh berlipat selamanya — dan peringatan The Map soal kutukan pengetahuan berlaku di sini: bangun ulang anak tangganya, sebutkan langkah-langkah yang biasa dilompati para ahli. Orang yang diajar dengan cara ini menjadi buktimu (mereka sendiri yang akan mengatakannya), kapasitasmu (kini ada pekerjaan yang bisa didelegasikan), dan reputasimu — “saya belajar itu dari dia” adalah kalimat yang menjadi bahan baku jalur kepemimpinan."
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
        "id": "Di luar mengajar satu per satu, ada langkah-langkah struktural: <b>buku manual</b> untuk semua yang kamu pegang (artefak yang beredar dari Pelajaran 2.2, diarahkan untuk suksesi); <b>mendampingi orang baru</b> atas inisiatif sendiri — orang yang mendampingi karyawan baru membentuk standar tim dan diingat sebagai gurunya; <b>sesi berbagi pengetahuan</b> — sesi makan siang tentang hal yang kamu kuasai dan dibutuhkan orang lain (anak tangga pertama berbicara dari Pelajaran 4.3, diarahkan ke dalam); <b>keputusan yang terdokumentasi</b> — mengapa segala sesuatu dibuat seperti sekarang, supaya kolega di masa depan tidak perlu menggali sejarahnya. Setiap langkah struktural ini tetap hidup tanpa kehadiranmu — itulah definisi kemampuan yang terbangun, dan persis itulah yang membedakan “kontributor individu yang hebat” dari “siap memimpin tim” dalam bahasa ruang kalibrasi."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The multiplier metric",
        "id": "Ukuran sang pengganda"
       },
       "body": {
        "en": "Track it like any asset: who near you can now do something they could not last quarter, and what evidence shows it? The intern who now owns the validation; the peer whose dashboards adopted your checks; the new joiner productive in week two because of your onboarding. Log these in the win log alongside your own deliveries — they are your deliveries, at one remove. When the leadership conversation eventually comes, this ledger is the case: organisations promote to team leadership on evidence of multiplication, not on individual output alone, because the job being filled is precisely making-others-better, demonstrated or not.",
        "id": "Lacak seperti aset lainnya: siapa di sekitarmu yang kini bisa melakukan sesuatu yang kuartal lalu belum bisa, dan bukti apa yang menunjukkannya? Anak magang yang kini memegang validasi; rekan yang dasbornya mengadopsi pemeriksaan buatanmu; karyawan baru yang sudah produktif di minggu kedua berkat pendampinganmu. Catat semua ini di catatan capaian, berdampingan dengan hasil kerjamu sendiri — karena ini juga hasil kerjamu, satu tingkat di belakang. Ketika percakapan tentang kepemimpinan akhirnya tiba, buku besar inilah kasusmu: organisasi mempromosikan orang ke posisi pemimpin tim berdasarkan bukti penggandaan, bukan hasil kerja individu semata, karena pekerjaan yang hendak diisi persis adalah membuat orang lain lebih baik — sudah terbukti atau belum."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "Why does volunteering to onboard new joiners rank so highly in this lesson?",
        "id": "Mengapa mengajukan diri untuk mendampingi karyawan baru dinilai begitu tinggi di pelajaran ini?"
       },
       "options": [
        {
         "en": "It is light work that frees time for real projects",
         "id": "Karena itu pekerjaan ringan yang membebaskan waktu untuk proyek sungguhan"
        },
        {
         "en": "It multiplies capability at the team's entry point, shapes standards, and generates continuous multiplier evidence",
         "id": "Karena ia menggandakan kemampuan di pintu masuk tim, membentuk standar, dan terus menghasilkan bukti sebagai pengganda"
        },
        {
         "en": "New joiners give the best performance reviews",
         "id": "Karena karyawan baru memberi penilaian kinerja yang paling bagus"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Onboarding is teaching, standard-setting and succession-building in one recurring package — the multiplier metric's most reliable generator.",
        "id": "Mendampingi orang baru adalah mengajar, menetapkan standar, dan membangun suksesi dalam satu paket yang berulang — penghasil bukti paling andal untuk ukuran sang pengganda."
       }
      }
     ]
    },
    {
     "n": "9.3",
     "title": {
      "en": "Building the Reputation of Someone Worth Following",
      "id": "Membangun Reputasi sebagai Orang yang Layak Diikuti"
     },
     "dur": {
      "en": "20 min",
      "id": "20 mnt"
     },
     "kind": "reading",
     "placeholder": false,
     "overview": {
      "en": "People follow evidence before they follow titles. This lesson assembles the followable reputation: reliability under pressure, fairness in credit and conflict, and the visible spine of someone whose standards do not depend on who is watching.",
      "id": "Orang mengikuti bukti sebelum mengikuti jabatan. Pelajaran ini merakit reputasi yang layak diikuti: keandalan di bawah tekanan, keadilan dalam soal pengakuan dan konflik, dan integritas yang terlihat dari orang yang standarnya tidak bergantung pada siapa yang sedang menonton."
     },
     "objectives": [
      {
       "en": "Identify the moments where followable reputations are actually made.",
       "id": "Mengenali momen-momen ketika reputasi yang layak diikuti sebenarnya terbentuk."
      },
      {
       "en": "Practise the ownership behaviours: mistakes owned, credit shared, standards kept.",
       "id": "Melatih perilaku rasa memiliki: kesalahan diakui, pengakuan dibagi, standar dijaga."
      },
      {
       "en": "Audit your current followability against the evidence.",
       "id": "Mengaudit seberapa layak kamu diikuti saat ini, berdasarkan bukti."
      }
     ],
     "takeaways": [
      {
       "en": "Followability is sampled in pressure moments: the missed deadline, the public error, the unfair meeting.",
       "id": "Kelayakan untuk diikuti dinilai di momen-momen tekanan: tenggat yang terlewat, kesalahan di depan umum, rapat yang tidak adil."
      },
      {
       "en": "Owning mistakes fast is the single strongest followability signal — and the rarest.",
       "id": "Cepat mengakui kesalahan adalah tanda terkuat bahwa seseorang layak diikuti — sekaligus yang paling langka."
      },
      {
       "en": "Standards kept when inconvenient are the spine people decide to stand behind.",
       "id": "Standar yang tetap dijaga saat merepotkan adalah integritas yang membuat orang memutuskan untuk berdiri di belakangmu."
      }
     ],
     "sections": [
      {
       "icon": "eye",
       "h": {
        "en": "Where following begins",
        "id": "Di mana keputusan untuk mengikuti dimulai"
       },
       "body": {
        "en": "Nobody decides to follow you during your good weeks. The decision forms in observed pressure: the deliverable slipping — do you surface it early and own the recovery, or manage the optics? The junior's public error — do you shield and correct privately, or let them absorb the room? The credit moment — does it flow accurately, including downward? The unfair criticism of an absent colleague — silence, or a calm “that doesn't match what I saw”? Each moment is small; the pattern across them is what colleagues mean when they say someone “would be a good lead” — a verdict formed years before any org chart asks for it.",
        "id": "Tidak ada orang yang memutuskan mengikutimu di minggu-minggu ketika semuanya lancar. Keputusan itu terbentuk saat mereka melihatmu di bawah tekanan: hasil kerja yang terancam meleset — apakah kamu mengangkatnya lebih awal dan bertanggung jawab atas pemulihannya, atau sibuk mengelola citra? Kesalahan si junior di depan umum — apakah kamu melindunginya dan mengoreksi secara pribadi, atau membiarkannya menanggung seisi ruangan? Momen pengakuan — apakah mengalir dengan akurat, termasuk ke bawah? Kritik yang tidak adil pada kolega yang sedang tidak hadir — diam, atau dengan tenang berkata “itu tidak sesuai dengan yang saya lihat”? Setiap momen itu kecil; pola dari seluruh momen itulah yang dimaksud kolega saat berkata seseorang “akan jadi pemimpin yang baik” — vonis yang terbentuk bertahun-tahun sebelum ada bagan organisasi yang menanyakannya."
       }
      },
      {
       "icon": "flag",
       "h": {
        "en": "The ownership behaviours",
        "id": "Perilaku rasa memiliki"
       },
       "body": {
        "en": "<b>Mistakes:</b> surfaced by you, before discovery, with the fix in hand — “the report went out with March's rates; corrected version in ten minutes; I've added a check so it can't recur.” The pattern is so rare that people who do it consistently become trusted beyond their level. <b>Credit:</b> the 2.2 and 3.4 habits, now understood as followability infrastructure — people follow those who make them visible. <b>Standards:</b> quality held when nobody would notice, the inconvenient truth told kindly, the red lines from 1.3 quietly kept. None requires authority; all are being recorded by the colleagues who will one day be asked, in a calibration room, whether they would work for you.",
        "id": "<b>Kesalahan:</b> kamu sendiri yang mengangkatnya, sebelum ketahuan, dengan perbaikan sudah di tangan — “laporannya terkirim dengan kurs bulan Maret; versi yang sudah dikoreksi menyusul sepuluh menit lagi; saya sudah tambahkan pemeriksaan supaya tidak terulang.” Pola ini begitu langka sehingga orang yang konsisten melakukannya dipercaya melampaui levelnya. <b>Pengakuan:</b> kebiasaan dari Pelajaran 2.2 dan 3.4, yang kini kamu pahami sebagai fondasi untuk layak diikuti — orang mengikuti mereka yang membuat orang lain terlihat. <b>Standar:</b> mutu yang dijaga saat tidak ada yang akan tahu, kebenaran yang merepotkan disampaikan dengan baik, garis merah dari Pelajaran 1.3 dijaga tanpa gembar-gembor. Tidak ada satu pun yang membutuhkan wewenang; semuanya sedang direkam oleh kolega-kolega yang suatu hari akan ditanya, di ruang kalibrasi, apakah mereka mau bekerja di bawahmu."
       }
      },
      {
       "icon": "target",
       "h": {
        "en": "The followability audit",
        "id": "Audit kelayakan untuk diikuti"
       },
       "body": {
        "en": "Evidence over intention: When did you last own a mistake before it was found? Whose growth would witnesses attribute partly to you? What did you do, specifically, in the last unfair meeting you sat in? Would the intern, the peer and the difficult stakeholder each describe your standards the same way? Uncomfortable audits locate the training ground. And the honest caveat this course owes you: followability is necessary for leadership, not sufficient — organisations also weigh delivery, timing and need. Build it anyway; unlike the title, it travels with you to every team, employer and industry for the rest of your career.",
        "id": "Bukti di atas niat: Kapan terakhir kali kamu mengakui kesalahan sebelum orang lain menemukannya? Pertumbuhan siapa yang, menurut para saksi, sebagian berkat dirimu? Apa yang kamu lakukan, secara spesifik, di rapat tidak adil terakhir yang kamu hadiri? Apakah si anak magang, rekan sejawat, dan pemangku kepentingan yang sulit akan menggambarkan standarmu dengan cara yang sama? Audit yang tidak nyaman menunjukkan di mana kamu perlu berlatih. Dan satu catatan jujur yang wajib disampaikan kursus ini: layak diikuti adalah syarat perlu untuk memimpin, bukan syarat cukup — organisasi juga menimbang hasil kerja, waktu, dan kebutuhan. Bangunlah tetap; tidak seperti jabatan, ia ikut bersamamu ke setiap tim, pemberi kerja, dan industri sepanjang sisa kariermu."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "You discover your published analysis used stale data. Nobody has noticed yet. The followability move?",
        "id": "Kamu menemukan analisis yang sudah kamu terbitkan ternyata memakai data lama. Belum ada yang menyadarinya. Langkah orang yang layak diikuti?"
       },
       "options": [
        {
         "en": "Quietly fix the source so future runs are correct",
         "id": "Perbaiki sumbernya diam-diam supaya laporan berikutnya benar"
        },
        {
         "en": "Surface it now with the correction and the prevention: announced error, fixed version, new check — before anyone finds it",
         "id": "Angkat sekarang, lengkap dengan koreksi dan pencegahannya: kesalahan diumumkan, versi yang diperbaiki, pemeriksaan baru — sebelum ada yang menemukannya"
        },
        {
         "en": "Wait to see if it materially affected any decision first",
         "id": "Tunggu dulu, apakah ada keputusan yang benar-benar terdampak"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Self-surfaced errors with fixes build trust faster than error-free streaks — and discovered cover-ups destroy in a day what years built.",
        "id": "Kesalahan yang kamu angkat sendiri beserta perbaikannya membangun kepercayaan lebih cepat daripada rekor tanpa kesalahan — dan upaya menutupi yang ketahuan menghancurkan dalam sehari apa yang dibangun bertahun-tahun."
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
      "id": "Pelajaran terakhir trilogi ini: berpikir seperti pemimpin selagi tanda pengenalmu masih bertuliskan kontributor individu. Tiga latihan — meningkatkan rasa memiliki, memutuskan dengan lensa tim, dan tinjauan pengelolaan diri yang menutup The Route dan mengembalikan kursus ini ke tangan kariermu."
     },
     "objectives": [
      {
       "en": "Upgrade from task ownership to outcome ownership in daily work.",
       "id": "Naik dari rasa memiliki atas tugas ke rasa memiliki atas hasil, dalam pekerjaan sehari-hari."
      },
      {
       "en": "Run decisions through the team lens before the personal lens.",
       "id": "Menimbang keputusan lewat lensa tim sebelum lensa pribadi."
      },
      {
       "en": "Close the course with a stewardship plan for your own trajectory.",
       "id": "Menutup kursus dengan rencana pengelolaan untuk lintasan kariermu sendiri."
      }
     ],
     "takeaways": [
      {
       "en": "Leaders-in-waiting own outcomes: the report and its consequences, not just the report.",
       "id": "Calon pemimpin merasa memiliki hasilnya: laporan beserta konsekuensinya, bukan hanya laporannya."
      },
      {
       "en": "The team lens usually agrees with the personal lens long-term — and flags the exceptions that matter.",
       "id": "Dalam jangka panjang, lensa tim biasanya sejalan dengan lensa pribadi — dan ia menandai pengecualian-pengecualian yang penting."
      },
      {
       "en": "The course ends; the systems continue: architecture, win log, plans, circle, reviews.",
       "id": "Kursus ini berakhir; sistemnya terus berjalan: arsitektur, catatan capaian, rencana, lingkaran, tinjauan."
      }
     ],
     "steps": [
      {
       "h": {
        "en": "Drill 1 — The ownership upgrade",
        "id": "Latihan 1 — Meningkatkan rasa memiliki"
       },
       "body": {
        "en": "Your task: “send the weekly performance report”. List what task ownership delivers versus what outcome ownership would deliver. Then reveal.",
        "id": "Tugasmu: “kirim laporan kinerja mingguan”. Tuliskan apa yang dihasilkan oleh rasa memiliki atas tugas, versus apa yang akan dihasilkan oleh rasa memiliki atas hasil. Lalu buka tinjauan."
       },
       "debrief": {
        "en": "Task ownership: accurate report, on time, every week — blameless and capped. Outcome ownership asks what the report is for: decisions. So it notices that two recipients never open it (ask them why — maybe they need one number in chat instead); that a metric leadership keeps asking about is missing (add it); that last month's anomaly went unexplained (annotate it before being asked); that the report could trigger the review meeting's agenda automatically. Same task, leader-shaped: the question is never “did I do the task?” but “did the outcome the task serves actually happen?” Practising this upgrade on every recurring duty is how contributor years become leadership evidence.",
        "id": "Rasa memiliki atas tugas: laporan yang akurat, tepat waktu, setiap minggu — tanpa cela, tapi ada batasnya. Rasa memiliki atas hasil bertanya untuk apa laporan itu ada: untuk keputusan. Maka ia menyadari bahwa dua penerima tidak pernah membukanya (tanyakan mengapa — mungkin mereka hanya butuh satu angka lewat chat); bahwa metrik yang terus ditanyakan pimpinan justru tidak ada (tambahkan); bahwa anomali bulan lalu tidak pernah dijelaskan (beri catatan sebelum ditanya); bahwa laporan ini bisa otomatis menjadi agenda rapat tinjauan. Tugas yang sama, dikerjakan dengan cara pemimpin: pertanyaannya tidak pernah “apakah tugasnya sudah saya kerjakan?” melainkan “apakah hasil yang dilayani tugas itu benar-benar terjadi?” Melatih peningkatan ini pada setiap kewajiban rutin adalah cara tahun-tahun sebagai kontributor berubah menjadi bukti kepemimpinan."
       }
      },
      {
       "h": {
        "en": "Drill 2 — The team lens",
        "id": "Latihan 2 — Lensa tim"
       },
       "body": {
        "en": "Two projects are offered: A polishes your specialist skill and profile; B fixes the team's biggest bottleneck but the work is unglamorous integration. Your promotion file could use either. Decide with both lenses, then reveal.",
        "id": "Dua proyek ditawarkan: A mengasah keterampilan spesialis dan profilmu; B membereskan hambatan terbesar tim, tapi pekerjaannya adalah integrasi yang tidak menarik. Berkas promosimu bisa memakai salah satunya. Putuskan dengan kedua lensa, lalu buka tinjauan."
       },
       "debrief": {
        "en": "The team lens usually converges with the long game: B's bottleneck fix multiplies everyone's output (9.2's metric), earns the gratitude of the whole roster, and — read through Module 5 — is exactly the “team-first, cross-boundary scope” evidence promotion committees weight for leadership tracks. A serves this quarter's comfort; B serves the multi-year architecture. The honest exceptions the lens also surfaces: if B's work is invisible and unlogged, engineer its legibility first (2.2) — sacrifice without witnesses helps no one, including the team, whose bottleneck-fixer burns out unthanked. And if every quarter offers only B-shaped work, that is a yield conversation with your manager, not a life sentence.",
        "id": "Lensa tim biasanya bertemu dengan permainan jangka panjang: perbaikan hambatan di proyek B melipatgandakan hasil kerja semua orang (ukuran dari Pelajaran 9.2), mendapat terima kasih dari seisi tim, dan — dibaca lewat Modul 5 — persis merupakan bukti “mengutamakan tim, lingkup lintas batas” yang diberi bobot besar oleh komite promosi untuk jalur kepemimpinan. A melayani kenyamanan kuartal ini; B melayani arsitektur bertahun-tahun ke depan. Pengecualian jujur yang juga diangkat lensa ini: kalau pekerjaan B tidak terlihat dan tidak tercatat, bangun dulu keterbacaannya (Pelajaran 2.2) — pengorbanan tanpa saksi tidak menolong siapa pun, termasuk tim, yang pembereskan hambatannya kehabisan tenaga tanpa ucapan terima kasih. Dan kalau setiap kuartal hanya menawarkan pekerjaan berbentuk B, itu bahan percakapan tentang imbal aset dengan manajermu, bukan hukuman seumur hidup."
       }
      },
      {
       "h": {
        "en": "Drill 3 — The stewardship review",
        "id": "Latihan 3 — Tinjauan pengelolaan diri"
       },
       "body": {
        "en": "The course's closing exercise: write your stewardship plan — which systems from the trilogy run on which cadence, and who holds you to them. Then reveal.",
        "id": "Latihan penutup kursus ini: tulis rencana pengelolaan dirimu — sistem mana dari trilogi ini yang berjalan dengan irama apa, dan siapa yang menagih komitmenmu. Lalu buka tinjauan."
       },
       "debrief": {
        "en": "A complete plan, for reference: <b>weekly</b> — the win log entry and the Friday one-liner (ten minutes); <b>monthly</b> — plan progress check in the Route Planner, one circle touch, one visibility sample; <b>quarterly</b> — readiness diagnostic re-run, market calibration read, one external artefact; <b>annually</b> — the architecture review, the financial horizon review, and the decision gate, with your truth-teller booked for the hard questions. Accountability: the systems are self-run, but announcing the cadence to one circle member converts private intentions into social commitments. The trilogy ends here; the compounding it configured does not. The Route was never the destination — it is the discipline of travelling well.",
        "id": "Rencana yang lengkap, sebagai rujukan: <b>mingguan</b> — entri catatan capaian dan laporan satu baris tiap Jumat (sepuluh menit); <b>bulanan</b> — cek kemajuan rencana di Route Planner, satu sapaan ke lingkaran dalam, satu contoh visibilitas; <b>kuartalan</b> — jalankan ulang diagnostik kesiapan, baca kalibrasi pasar, satu artefak eksternal; <b>tahunan</b> — tinjauan arsitektur, tinjauan horizon finansial, dan gerbang keputusan, dengan penyampai kebenaranmu sudah dijadwalkan untuk pertanyaan-pertanyaan sulit. Akuntabilitas: sistem ini berjalan sendiri, tapi mengumumkan iramanya kepada satu anggota lingkaran mengubah niat pribadi menjadi komitmen sosial. Trilogi ini berakhir di sini; pertumbuhan berlipat yang ia siapkan tidak. The Route tidak pernah dimaksudkan sebagai tujuan — ia adalah disiplin untuk menempuh perjalanan dengan baik."
       }
      }
     ],
     "checks": [
      {
       "q": {
        "en": "What converts “sent the report weekly, accurately” into leadership evidence?",
        "id": "Apa yang mengubah “mengirim laporan setiap minggu, dengan akurat” menjadi bukti kepemimpinan?"
       },
       "options": [
        {
         "en": "Sending it earlier each week",
         "id": "Mengirimnya lebih awal setiap minggu"
        },
        {
         "en": "Owning the outcome it serves: noticing who needs what decision, fixing the report's actual usefulness, preventing the questions before they are asked",
         "id": "Merasa memiliki hasil yang dilayaninya: menyadari siapa butuh keputusan apa, memperbaiki kegunaan laporan yang sebenarnya, mencegah pertanyaan sebelum diajukan"
        },
        {
         "en": "Adding more metrics and pages",
         "id": "Menambah lebih banyak metrik dan halaman"
        }
       ],
       "correct": 1,
       "why": {
        "en": "Outcome ownership is the leader's default question applied without authority — and it is visible to everyone who will one day decide whether you get some.",
        "id": "Rasa memiliki atas hasil adalah pertanyaan bawaan seorang pemimpin, diterapkan tanpa wewenang — dan ia terlihat oleh semua orang yang suatu hari akan memutuskan apakah kamu layak diberi wewenang itu."
       }
      }
     ],
     "tool": {
      "id": "plan",
      "mode": "readiness",
      "title": {
       "en": "Close the course with a reading",
       "id": "Tutup kursus ini dengan satu pembacaan"
      },
      "body": {
       "en": "Re-run the readiness diagnostic and compare against your first — the delta across six dimensions is what this course built. Then set the next 90-day plan.",
       "id": "Jalankan ulang diagnostik kesiapan dan bandingkan dengan hasil pertamamu — selisih di enam dimensi itulah yang dibangun kursus ini. Lalu susun rencana 90 hari berikutnya."
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
