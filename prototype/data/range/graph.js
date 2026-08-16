/**
 * THE RANGE — CAREER GRAPH (MVP slice)
 * --------------------------------------
 * Three industry clusters, 25 career directions, 20 real companies.
 * Integrity rules (ME30AC1 Part 11): company facts are limited to
 * broadly public knowledge and carry a source type and review date.
 * Hiring-process stages exist ONLY where sourced documentation was
 * available; everything else shows the honest 'process not yet
 * documented' state. Nothing here is fabricated, and nothing here
 * implies affiliation with or endorsement by any company named.
 */
window.MT_RANGE_GRAPH = {
 "industries": [
  {
   "id": "tech-ecommerce",
   "name": {
    "en": "Technology & E-commerce",
    "id": "Teknologi & E-commerce"
   },
   "desc": {
    "en": "Digital platforms, marketplaces, and the engineering, product and growth work behind them.",
    "id": "Platform digital, marketplace, serta kerja rekayasa, produk, dan pertumbuhan di baliknya."
   }
  },
  {
   "id": "financial-services",
   "name": {
    "en": "Financial Services",
    "id": "Jasa Keuangan"
   },
   "desc": {
    "en": "Banks, insurers and fintech — where capital, risk and regulation meet.",
    "id": "Bank, asuransi, dan fintech — tempat modal, risiko, dan regulasi bertemu."
   }
  },
  {
   "id": "fmcg-consumer",
   "name": {
    "en": "FMCG & Consumer Goods",
    "id": "FMCG & Barang Konsumen"
   },
   "desc": {
    "en": "The companies behind everyday products, and the brand, sales and supply machinery that moves them.",
    "id": "Perusahaan di balik produk sehari-hari, beserta mesin merek, penjualan, dan rantai pasoknya."
   }
  },
  {
   "id": "professional-services",
   "name": {
    "en": "Consulting & Professional Services",
    "id": "Konsultan & Jasa Profesional"
   },
   "desc": {
    "en": "Consulting, audit, tax and advisory firms — client work across many industries at once.",
    "id": "Firma konsultan, audit, pajak, dan advisory — kerja klien lintas banyak industri sekaligus."
   }
  },
  {
   "id": "energy-industrials",
   "name": {
    "en": "Energy & Industrials",
    "id": "Energi & Industri"
   },
   "desc": {
    "en": "Energy, mining, manufacturing and the conglomerates that run heavy operations at national scale.",
    "id": "Energi, tambang, manufaktur, dan konglomerasi yang menjalankan operasi berat berskala nasional."
   }
  },
  {
   "id": "healthcare-pharma",
   "name": {
    "en": "Healthcare & Pharma",
    "id": "Kesehatan & Farmasi"
   },
   "desc": {
    "en": "Pharmaceutical and health companies — regulated products where quality and evidence matter most.",
    "id": "Perusahaan farmasi dan kesehatan — produk teregulasi di mana mutu dan bukti paling menentukan."
   }
  },
  {
   "id": "telecom",
   "name": {
    "en": "Telecommunications",
    "id": "Telekomunikasi"
   },
   "desc": {
    "en": "The operators behind national connectivity — networks, digital services and massive subscriber bases.",
    "id": "Operator di balik konektivitas nasional — jaringan, layanan digital, dan basis pelanggan raksasa."
   }
  }
 ],
 "functions": [
  {
   "id": "engineering",
   "name": {
    "en": "Engineering",
    "id": "Rekayasa"
   }
  },
  {
   "id": "data",
   "name": {
    "en": "Data & Analytics",
    "id": "Data & Analitik"
   }
  },
  {
   "id": "product",
   "name": {
    "en": "Product",
    "id": "Produk"
   }
  },
  {
   "id": "design",
   "name": {
    "en": "Design",
    "id": "Desain"
   }
  },
  {
   "id": "marketing",
   "name": {
    "en": "Marketing & Growth",
    "id": "Pemasaran & Pertumbuhan"
   }
  },
  {
   "id": "finance",
   "name": {
    "en": "Finance",
    "id": "Keuangan"
   }
  },
  {
   "id": "operations",
   "name": {
    "en": "Operations & Supply",
    "id": "Operasional & Rantai Pasok"
   }
  },
  {
   "id": "commercial",
   "name": {
    "en": "Sales & Commercial",
    "id": "Penjualan & Komersial"
   }
  },
  {
   "id": "people",
   "name": {
    "en": "People & HR",
    "id": "SDM"
   }
  },
  {
   "id": "risk",
   "name": {
    "en": "Risk & Assurance",
    "id": "Risiko & Asurans"
   }
  }
 ],
 "directions": [
  {
   "id": "software-engineering",
   "name": {
    "en": "Software Engineering",
    "id": "Rekayasa Perangkat Lunak"
   },
   "industry_ids": [
    "tech-ecommerce"
   ],
   "function_ids": [
    "engineering"
   ],
   "attrs": {
    "analytical": 75,
    "creative": 55,
    "people_facing": 30,
    "structured": 60,
    "autonomous": 70,
    "detail_oriented": 80,
    "ambiguity_tolerant": 60,
    "pace_intensity": 65,
    "technical_depth": 95,
    "commercial": 25
   },
   "entry_difficulty": "competitive",
   "market_demand": "growing",
   "summary": {
    "en": "Building the systems behind digital products — from app features to the infrastructure that keeps them running.",
    "id": "Membangun sistem di balik produk digital — dari fitur aplikasi hingga infrastruktur yang menjaganya tetap berjalan."
   },
   "day_in_life": {
    "en": "Mornings in code review and standup; afternoons building and debugging; the best days end with something shipped that thousands of people quietly use.",
    "id": "Pagi diisi code review dan standup; siang membangun dan men-debug; hari terbaik berakhir dengan sesuatu yang dirilis dan dipakai ribuan orang tanpa mereka sadari."
   },
   "tradeoffs": [
    {
     "en": "Interview processes lean heavily on algorithm tests that feel far from daily work.",
     "id": "Proses wawancara sangat bertumpu pada tes algoritma yang terasa jauh dari kerja harian."
    },
    {
     "en": "Technology churn means the learning never stops — that is a feature and a cost.",
     "id": "Pergantian teknologi berarti belajar tidak pernah berhenti — itu kelebihan sekaligus biaya."
    }
   ],
   "common_myths": [
    {
     "en": "You do not need a computer-science degree; you need demonstrable projects.",
     "id": "Kamu tidak wajib bergelar ilmu komputer; kamu butuh proyek yang bisa ditunjukkan."
    },
    {
     "en": "Most of the job is reading and changing existing code, not writing new systems from scratch.",
     "id": "Sebagian besar pekerjaan adalah membaca dan mengubah kode yang ada, bukan menulis sistem baru dari nol."
    }
   ],
   "core_skills": [
    "programming",
    "problem-solving",
    "systems-thinking"
   ],
   "interest_tags": [
    "technology",
    "building",
    "puzzles"
   ]
  },
  {
   "id": "data-analytics",
   "name": {
    "en": "Data & Business Analytics",
    "id": "Analitik Data & Bisnis"
   },
   "industry_ids": [
    "tech-ecommerce",
    "financial-services",
    "fmcg-consumer"
   ],
   "function_ids": [
    "data"
   ],
   "attrs": {
    "analytical": 90,
    "creative": 35,
    "people_facing": 40,
    "structured": 70,
    "autonomous": 60,
    "detail_oriented": 85,
    "ambiguity_tolerant": 50,
    "pace_intensity": 55,
    "technical_depth": 70,
    "commercial": 55
   },
   "entry_difficulty": "accessible",
   "market_demand": "growing",
   "summary": {
    "en": "Turning raw numbers into decisions — dashboards, experiments, and the analysis behind what a company does next.",
    "id": "Mengubah angka mentah menjadi keputusan — dashboard, eksperimen, dan analisis di balik langkah perusahaan berikutnya."
   },
   "day_in_life": {
    "en": "You pull data nobody else can find, clean it, and end the week presenting three charts that change what the team does next month.",
    "id": "Kamu menarik data yang tidak ditemukan orang lain, membersihkannya, dan menutup minggu dengan tiga grafik yang mengubah rencana tim bulan depan."
   },
   "tradeoffs": [
    {
     "en": "A surprising share of the work is cleaning messy data, not analysing it.",
     "id": "Porsi besar pekerjaannya adalah membersihkan data berantakan, bukan menganalisisnya."
    },
    {
     "en": "Your recommendations compete with opinions from people senior to you.",
     "id": "Rekomendasimu bersaing dengan opini orang-orang yang lebih senior darimu."
    }
   ],
   "common_myths": [
    {
     "en": "Excel and SQL open the door; Python is a multiplier, not a prerequisite.",
     "id": "Excel dan SQL membuka pintunya; Python adalah pengganda, bukan prasyarat."
    }
   ],
   "core_skills": [
    "sql-excel",
    "statistics",
    "data-storytelling"
   ],
   "interest_tags": [
    "data",
    "puzzles",
    "research"
   ]
  },
  {
   "id": "product-management",
   "name": {
    "en": "Product Management",
    "id": "Manajemen Produk"
   },
   "industry_ids": [
    "tech-ecommerce",
    "financial-services"
   ],
   "function_ids": [
    "product"
   ],
   "attrs": {
    "analytical": 70,
    "creative": 65,
    "people_facing": 80,
    "structured": 55,
    "autonomous": 65,
    "detail_oriented": 60,
    "ambiguity_tolerant": 85,
    "pace_intensity": 75,
    "technical_depth": 50,
    "commercial": 70
   },
   "entry_difficulty": "competitive",
   "market_demand": "stable",
   "summary": {
    "en": "Deciding what a digital product should do next, and aligning engineers, designers and business teams to ship it.",
    "id": "Menentukan apa yang harus dilakukan produk digital berikutnya, dan menyelaraskan engineer, desainer, dan tim bisnis untuk merilisnya."
   },
   "day_in_life": {
    "en": "Half your day is conversations — users, engineers, stakeholders. The other half is writing: specs, priorities, and the reasons behind them.",
    "id": "Separuh harimu adalah percakapan — pengguna, engineer, pemangku kepentingan. Separuhnya lagi menulis: spesifikasi, prioritas, dan alasan di baliknya."
   },
   "tradeoffs": [
    {
     "en": "You carry responsibility without direct authority — influence is the whole job.",
     "id": "Kamu memikul tanggung jawab tanpa otoritas langsung — memengaruhi adalah inti pekerjaannya."
    },
    {
     "en": "Fresh-graduate PM roles are rare in Indonesia; most people arrive via analytics, engineering or operations.",
     "id": "Peran PM untuk fresh graduate langka di Indonesia; kebanyakan orang masuk lewat analitik, rekayasa, atau operasional."
    }
   ],
   "common_myths": [
    {
     "en": "PMs do not spend their days inventing ideas; they spend them saying no to most ideas.",
     "id": "PM tidak menghabiskan hari menciptakan ide; mereka menghabiskannya menolak sebagian besar ide."
    }
   ],
   "core_skills": [
    "communication",
    "prioritisation",
    "user-empathy"
   ],
   "interest_tags": [
    "technology",
    "strategy",
    "people"
   ]
  },
  {
   "id": "ux-design",
   "name": {
    "en": "UX & Product Design",
    "id": "Desain UX & Produk"
   },
   "industry_ids": [
    "tech-ecommerce"
   ],
   "function_ids": [
    "design"
   ],
   "attrs": {
    "analytical": 55,
    "creative": 90,
    "people_facing": 60,
    "structured": 45,
    "autonomous": 65,
    "detail_oriented": 70,
    "ambiguity_tolerant": 70,
    "pace_intensity": 55,
    "technical_depth": 55,
    "commercial": 40
   },
   "entry_difficulty": "competitive",
   "market_demand": "stable",
   "summary": {
    "en": "Designing how digital products look, feel and behave — research, flows, interfaces and the reasoning behind them.",
    "id": "Merancang bagaimana produk digital terlihat, terasa, dan berperilaku — riset, alur, antarmuka, dan penalaran di baliknya."
   },
   "day_in_life": {
    "en": "Morning usability calls with real users; afternoons in Figma turning what you heard into flows the engineers can build next sprint.",
    "id": "Pagi sesi uji kegunaan dengan pengguna nyata; siang di Figma mengubah temuan menjadi alur yang bisa dibangun engineer sprint depan."
   },
   "tradeoffs": [
    {
     "en": "Portfolio quality outweighs GPA entirely — and building one takes months.",
     "id": "Kualitas portofolio jauh melampaui IPK — dan membangunnya butuh berbulan-bulan."
    },
    {
     "en": "You will defend design decisions to people who outrank you, weekly.",
     "id": "Kamu akan mempertahankan keputusan desain di hadapan orang yang lebih tinggi jabatannya, setiap minggu."
    }
   ],
   "common_myths": [
    {
     "en": "UX is research and reasoning first; visual polish is the last 20%.",
     "id": "UX adalah riset dan penalaran lebih dulu; polesan visual adalah 20% terakhir."
    }
   ],
   "core_skills": [
    "design-tools",
    "user-research",
    "visual-communication"
   ],
   "interest_tags": [
    "design",
    "people",
    "building"
   ]
  },
  {
   "id": "digital-marketing",
   "name": {
    "en": "Digital Marketing & Growth",
    "id": "Pemasaran Digital & Growth"
   },
   "industry_ids": [
    "tech-ecommerce",
    "fmcg-consumer"
   ],
   "function_ids": [
    "marketing"
   ],
   "attrs": {
    "analytical": 60,
    "creative": 75,
    "people_facing": 65,
    "structured": 50,
    "autonomous": 60,
    "detail_oriented": 65,
    "ambiguity_tolerant": 70,
    "pace_intensity": 70,
    "technical_depth": 40,
    "commercial": 80
   },
   "entry_difficulty": "accessible",
   "market_demand": "growing",
   "summary": {
    "en": "Acquiring and keeping customers through paid channels, content, SEO and experiments — measured to the rupiah.",
    "id": "Mendapatkan dan mempertahankan pelanggan lewat kanal berbayar, konten, SEO, dan eksperimen — terukur hingga ke rupiah."
   },
   "day_in_life": {
    "en": "You launch two ad variations before lunch, watch the numbers move by evening, and kill the loser without sentiment.",
    "id": "Kamu meluncurkan dua variasi iklan sebelum makan siang, memantau angkanya bergerak menjelang sore, dan menghentikan yang kalah tanpa sentimen."
   },
   "tradeoffs": [
    {
     "en": "Performance is public and daily — dashboards do not protect feelings.",
     "id": "Kinerja bersifat terbuka dan harian — dashboard tidak melindungi perasaan."
    }
   ],
   "common_myths": [
    {
     "en": "Modern marketing is closer to analytics than to advertising creativity.",
     "id": "Pemasaran modern lebih dekat ke analitik daripada kreativitas periklanan."
    }
   ],
   "core_skills": [
    "copywriting",
    "analytics",
    "experimentation"
   ],
   "interest_tags": [
    "media",
    "data",
    "business"
   ]
  },
  {
   "id": "cybersecurity",
   "name": {
    "en": "Cybersecurity",
    "id": "Keamanan Siber"
   },
   "industry_ids": [
    "tech-ecommerce",
    "financial-services"
   ],
   "function_ids": [
    "engineering",
    "risk"
   ],
   "attrs": {
    "analytical": 80,
    "creative": 40,
    "people_facing": 25,
    "structured": 75,
    "autonomous": 65,
    "detail_oriented": 90,
    "ambiguity_tolerant": 55,
    "pace_intensity": 60,
    "technical_depth": 90,
    "commercial": 20
   },
   "entry_difficulty": "competitive",
   "market_demand": "growing",
   "summary": {
    "en": "Protecting systems and data — monitoring threats, hardening infrastructure, and responding when something breaks through.",
    "id": "Melindungi sistem dan data — memantau ancaman, memperkuat infrastruktur, dan merespons saat ada yang tembus."
   },
   "day_in_life": {
    "en": "Quiet weeks are audits and hardening. Loud weeks are incident response, and everyone suddenly knows your name.",
    "id": "Minggu tenang berisi audit dan penguatan sistem. Minggu ramai berisi respons insiden, dan tiba-tiba semua orang tahu namamu."
   },
   "tradeoffs": [
    {
     "en": "On-call rotations are real: incidents do not respect office hours.",
     "id": "Rotasi on-call itu nyata: insiden tidak menghormati jam kantor."
    }
   ],
   "common_myths": [
    {
     "en": "Entry roles are mostly defensive monitoring, not the offensive hacking of films.",
     "id": "Peran awal kebanyakan pemantauan defensif, bukan peretasan ofensif seperti di film."
    }
   ],
   "core_skills": [
    "networking",
    "security-tools",
    "incident-response"
   ],
   "interest_tags": [
    "technology",
    "puzzles",
    "protecting"
   ]
  },
  {
   "id": "qa-engineering",
   "name": {
    "en": "Quality Assurance Engineering",
    "id": "Rekayasa Penjaminan Mutu"
   },
   "industry_ids": [
    "tech-ecommerce"
   ],
   "function_ids": [
    "engineering"
   ],
   "attrs": {
    "analytical": 70,
    "creative": 35,
    "people_facing": 35,
    "structured": 80,
    "autonomous": 55,
    "detail_oriented": 95,
    "ambiguity_tolerant": 45,
    "pace_intensity": 55,
    "technical_depth": 70,
    "commercial": 20
   },
   "entry_difficulty": "accessible",
   "market_demand": "stable",
   "summary": {
    "en": "Making sure software actually works before users find out it does not — test design, automation, and release gatekeeping.",
    "id": "Memastikan perangkat lunak benar-benar berfungsi sebelum pengguna menemukan sebaliknya — desain pengujian, otomasi, dan penjagaan rilis."
   },
   "day_in_life": {
    "en": "You think like the most careless user imaginable, then automate that carelessness so it runs on every release forever.",
    "id": "Kamu berpikir seperti pengguna paling ceroboh, lalu mengotomasi kecerobohan itu agar berjalan di setiap rilis selamanya."
   },
   "tradeoffs": [
    {
     "en": "The craft is respected unevenly; some teams treat QA as a stepping stone, not a destination.",
     "id": "Profesi ini dihargai tidak merata; sebagian tim menganggap QA batu loncatan, bukan tujuan."
    }
   ],
   "common_myths": [
    {
     "en": "Modern QA is engineering — automation code, not manual clicking.",
     "id": "QA modern adalah rekayasa — kode otomasi, bukan klik manual."
    }
   ],
   "core_skills": [
    "test-design",
    "automation",
    "attention-to-detail"
   ],
   "interest_tags": [
    "technology",
    "puzzles",
    "order"
   ]
  },
  {
   "id": "tech-operations",
   "name": {
    "en": "Marketplace & Tech Operations",
    "id": "Operasional Marketplace & Teknologi"
   },
   "industry_ids": [
    "tech-ecommerce"
   ],
   "function_ids": [
    "operations"
   ],
   "attrs": {
    "analytical": 65,
    "creative": 40,
    "people_facing": 60,
    "structured": 75,
    "autonomous": 55,
    "detail_oriented": 75,
    "ambiguity_tolerant": 60,
    "pace_intensity": 80,
    "technical_depth": 35,
    "commercial": 60
   },
   "entry_difficulty": "accessible",
   "market_demand": "stable",
   "summary": {
    "en": "Running the engine room of platforms — seller operations, logistics coordination, fraud queues, process design.",
    "id": "Menjalankan ruang mesin platform — operasional seller, koordinasi logistik, antrean fraud, desain proses."
   },
   "day_in_life": {
    "en": "You own a metric — delivery time, seller activation, refund rate — and spend the week finding the process change that moves it.",
    "id": "Kamu memegang satu metrik — waktu kirim, aktivasi seller, tingkat refund — dan menghabiskan minggu mencari perubahan proses yang menggerakkannya."
   },
   "tradeoffs": [
    {
     "en": "Operational fires interrupt planned work constantly; calm weeks are rare.",
     "id": "Masalah operasional terus menyela rencana kerja; minggu tenang itu langka."
    }
   ],
   "common_myths": [
    {
     "en": "Ops is where many of Indonesia’s tech leaders actually started.",
     "id": "Ops adalah titik awal banyak pemimpin teknologi Indonesia."
    }
   ],
   "core_skills": [
    "process-design",
    "coordination",
    "spreadsheet-fluency"
   ],
   "interest_tags": [
    "business",
    "order",
    "people"
   ]
  },
  {
   "id": "content-social",
   "name": {
    "en": "Content & Social Media",
    "id": "Konten & Media Sosial"
   },
   "industry_ids": [
    "tech-ecommerce",
    "fmcg-consumer"
   ],
   "function_ids": [
    "marketing"
   ],
   "attrs": {
    "analytical": 40,
    "creative": 90,
    "people_facing": 70,
    "structured": 40,
    "autonomous": 65,
    "detail_oriented": 55,
    "ambiguity_tolerant": 75,
    "pace_intensity": 70,
    "technical_depth": 30,
    "commercial": 65
   },
   "entry_difficulty": "accessible",
   "market_demand": "stable",
   "summary": {
    "en": "Building audiences and brand presence — short-form video, community, editorial calendars and the analytics behind reach.",
    "id": "Membangun audiens dan kehadiran merek — video pendek, komunitas, kalender editorial, dan analitik di balik jangkauan."
   },
   "day_in_life": {
    "en": "You script and shoot in the morning, edit after lunch, post at the algorithm’s favourite hour, and study tomorrow what tonight’s numbers say.",
    "id": "Kamu menulis naskah dan syuting pagi hari, mengedit setelah makan siang, mengunggah di jam favorit algoritma, dan besok mempelajari apa kata angka semalam."
   },
   "tradeoffs": [
    {
     "en": "The feed never closes — boundaries are yours to defend.",
     "id": "Linimasa tidak pernah tutup — batas waktu harus kamu jaga sendiri."
    }
   ],
   "common_myths": [
    {
     "en": "Consistency beats virality; the compounding is in the calendar, not the one big hit.",
     "id": "Konsistensi mengalahkan viralitas; efek majemuk ada di kalender, bukan satu unggahan besar."
    }
   ],
   "core_skills": [
    "content-creation",
    "copywriting",
    "trend-sense"
   ],
   "interest_tags": [
    "media",
    "creating",
    "people"
   ]
  },
  {
   "id": "corporate-finance",
   "name": {
    "en": "Corporate Finance & FP&A",
    "id": "Keuangan Korporat & FP&A"
   },
   "industry_ids": [
    "financial-services",
    "fmcg-consumer",
    "tech-ecommerce"
   ],
   "function_ids": [
    "finance"
   ],
   "attrs": {
    "analytical": 85,
    "creative": 30,
    "people_facing": 40,
    "structured": 85,
    "autonomous": 50,
    "detail_oriented": 90,
    "ambiguity_tolerant": 40,
    "pace_intensity": 60,
    "technical_depth": 55,
    "commercial": 70
   },
   "entry_difficulty": "competitive",
   "market_demand": "stable",
   "summary": {
    "en": "Budgeting, forecasting and the financial models behind company decisions — the numbers the board actually reads.",
    "id": "Anggaran, proyeksi, dan model keuangan di balik keputusan perusahaan — angka yang benar-benar dibaca direksi."
   },
   "day_in_life": {
    "en": "Month-end you close the books; mid-month you model scenarios; the quarter ends with you explaining variance to people who sign budgets.",
    "id": "Akhir bulan kamu menutup pembukuan; pertengahan bulan memodelkan skenario; kuartal berakhir dengan kamu menjelaskan varians kepada para penanda tangan anggaran."
   },
   "tradeoffs": [
    {
     "en": "Month-end and year-end closes bring predictable crunch periods.",
     "id": "Tutup buku bulanan dan tahunan membawa periode sibuk yang bisa diprediksi."
    }
   ],
   "common_myths": [
    {
     "en": "FP&A is forward-looking strategy work, not backward-looking bookkeeping.",
     "id": "FP&A adalah kerja strategi ke depan, bukan pembukuan ke belakang."
    }
   ],
   "core_skills": [
    "financial-modelling",
    "excel",
    "business-acumen"
   ],
   "interest_tags": [
    "numbers",
    "strategy",
    "order"
   ]
  },
  {
   "id": "investment-analysis",
   "name": {
    "en": "Investment & Capital Markets",
    "id": "Investasi & Pasar Modal"
   },
   "industry_ids": [
    "financial-services"
   ],
   "function_ids": [
    "finance"
   ],
   "attrs": {
    "analytical": 90,
    "creative": 35,
    "people_facing": 50,
    "structured": 70,
    "autonomous": 55,
    "detail_oriented": 85,
    "ambiguity_tolerant": 55,
    "pace_intensity": 85,
    "technical_depth": 60,
    "commercial": 85
   },
   "entry_difficulty": "highly-competitive",
   "market_demand": "stable",
   "summary": {
    "en": "Analysing companies and markets for investment decisions — research, valuation, and the discipline of being measurably right or wrong.",
    "id": "Menganalisis perusahaan dan pasar untuk keputusan investasi — riset, valuasi, dan disiplin untuk benar atau salah secara terukur."
   },
   "day_in_life": {
    "en": "Markets open and your thesis meets reality. Research, models, client notes — and a scoreboard that updates daily.",
    "id": "Pasar buka dan tesismu bertemu kenyataan. Riset, model, catatan klien — dan papan skor yang diperbarui harian."
   },
   "tradeoffs": [
    {
     "en": "Hours are long and intensity is high, especially in deal or reporting seasons.",
     "id": "Jam kerja panjang dan intensitas tinggi, terutama musim transaksi atau pelaporan."
    },
    {
     "en": "Entry filters are among the tightest in the market: expect GPA and university screens.",
     "id": "Saringan masuknya termasuk paling ketat di pasar: bersiaplah untuk filter IPK dan universitas."
    }
   ],
   "common_myths": [
    {
     "en": "Most of the job is disciplined reading and spreadsheet work, not trading-floor drama.",
     "id": "Sebagian besar pekerjaannya adalah membaca disiplin dan kerja spreadsheet, bukan drama lantai bursa."
    }
   ],
   "core_skills": [
    "valuation",
    "financial-modelling",
    "writing"
   ],
   "interest_tags": [
    "numbers",
    "markets",
    "research"
   ]
  },
  {
   "id": "risk-management",
   "name": {
    "en": "Risk Management",
    "id": "Manajemen Risiko"
   },
   "industry_ids": [
    "financial-services"
   ],
   "function_ids": [
    "risk"
   ],
   "attrs": {
    "analytical": 85,
    "creative": 30,
    "people_facing": 40,
    "structured": 90,
    "autonomous": 50,
    "detail_oriented": 90,
    "ambiguity_tolerant": 45,
    "pace_intensity": 55,
    "technical_depth": 60,
    "commercial": 45
   },
   "entry_difficulty": "competitive",
   "market_demand": "growing",
   "summary": {
    "en": "Identifying what could go wrong before it does — credit risk, market risk, operational risk, and the frameworks that contain them.",
    "id": "Mengidentifikasi apa yang bisa salah sebelum terjadi — risiko kredit, pasar, operasional, dan kerangka yang mengendalikannya."
   },
   "day_in_life": {
    "en": "You stress-test the portfolio against scenarios nobody hopes for, and write the memo that decides how much the bank can safely lend.",
    "id": "Kamu menguji portofolio terhadap skenario yang tak diharapkan siapa pun, dan menulis memo yang menentukan berapa banyak bank bisa meminjamkan dengan aman."
   },
   "tradeoffs": [
    {
     "en": "You are professionally obliged to be the cautious voice in optimistic rooms.",
     "id": "Kamu wajib secara profesional menjadi suara hati-hati di ruangan yang optimistis."
    }
   ],
   "common_myths": [
    {
     "en": "Risk is not the department of no; it is the department of how much, safely.",
     "id": "Risiko bukan departemen penolak; ia departemen \\u201cseberapa banyak, dengan aman\\u201d."
    }
   ],
   "core_skills": [
    "statistics",
    "regulation-literacy",
    "writing"
   ],
   "interest_tags": [
    "numbers",
    "order",
    "protecting"
   ]
  },
  {
   "id": "audit-assurance",
   "name": {
    "en": "Audit & Assurance",
    "id": "Audit & Asurans"
   },
   "industry_ids": [
    "financial-services",
    "fmcg-consumer"
   ],
   "function_ids": [
    "risk",
    "finance"
   ],
   "attrs": {
    "analytical": 80,
    "creative": 25,
    "people_facing": 50,
    "structured": 95,
    "autonomous": 45,
    "detail_oriented": 95,
    "ambiguity_tolerant": 35,
    "pace_intensity": 65,
    "technical_depth": 50,
    "commercial": 40
   },
   "entry_difficulty": "accessible",
   "market_demand": "stable",
   "summary": {
    "en": "Verifying that the numbers companies report are true — evidence, testing, and professional scepticism as a career.",
    "id": "Memverifikasi bahwa angka yang dilaporkan perusahaan itu benar — bukti, pengujian, dan skeptisisme profesional sebagai karier."
   },
   "day_in_life": {
    "en": "Client-site weeks: vouching transactions, testing controls, asking the follow-up question that turns a neat file into a finding.",
    "id": "Minggu di lokasi klien: menelusuri transaksi, menguji kontrol, mengajukan pertanyaan lanjutan yang mengubah berkas rapi menjadi temuan."
   },
   "tradeoffs": [
    {
     "en": "Busy season (January–April) is genuinely intense across the profession.",
     "id": "Musim sibuk (Januari–April) benar-benar intens di seluruh profesi."
    }
   ],
   "common_myths": [
    {
     "en": "Audit is the most common launchpad into finance leadership in Indonesia.",
     "id": "Audit adalah batu loncatan paling umum menuju kepemimpinan keuangan di Indonesia."
    }
   ],
   "core_skills": [
    "accounting",
    "evidence-testing",
    "client-handling"
   ],
   "interest_tags": [
    "numbers",
    "order",
    "business"
   ]
  },
  {
   "id": "fintech-ops",
   "name": {
    "en": "Fintech Product Operations",
    "id": "Operasional Produk Fintech"
   },
   "industry_ids": [
    "financial-services",
    "tech-ecommerce"
   ],
   "function_ids": [
    "operations",
    "product"
   ],
   "attrs": {
    "analytical": 70,
    "creative": 45,
    "people_facing": 55,
    "structured": 70,
    "autonomous": 60,
    "detail_oriented": 75,
    "ambiguity_tolerant": 65,
    "pace_intensity": 75,
    "technical_depth": 50,
    "commercial": 65
   },
   "entry_difficulty": "accessible",
   "market_demand": "growing",
   "summary": {
    "en": "Running payments, lending and wallet products day to day — where finance regulation meets tech execution.",
    "id": "Menjalankan produk pembayaran, pinjaman, dan dompet digital sehari-hari — tempat regulasi keuangan bertemu eksekusi teknologi."
   },
   "day_in_life": {
    "en": "A regulator circular lands Monday; by Friday you have translated it into product changes, ops procedures and a compliance sign-off.",
    "id": "Surat edaran regulator datang Senin; Jumat kamu sudah menerjemahkannya menjadi perubahan produk, prosedur ops, dan persetujuan kepatuhan."
   },
   "tradeoffs": [
    {
     "en": "You answer to two masters: growth targets and regulatory deadlines.",
     "id": "Kamu menjawab dua tuan: target pertumbuhan dan tenggat regulasi."
    }
   ],
   "common_myths": [
    {
     "en": "Deep fintech careers are built on regulation literacy as much as product sense.",
     "id": "Karier fintech yang dalam dibangun di atas literasi regulasi sebesar intuisi produk."
    }
   ],
   "core_skills": [
    "process-design",
    "regulation-literacy",
    "coordination"
   ],
   "interest_tags": [
    "business",
    "technology",
    "order"
   ]
  },
  {
   "id": "relationship-banking",
   "name": {
    "en": "Banking & Relationship Management",
    "id": "Perbankan & Relationship Management"
   },
   "industry_ids": [
    "financial-services"
   ],
   "function_ids": [
    "commercial"
   ],
   "attrs": {
    "analytical": 55,
    "creative": 40,
    "people_facing": 90,
    "structured": 65,
    "autonomous": 55,
    "detail_oriented": 60,
    "ambiguity_tolerant": 55,
    "pace_intensity": 70,
    "technical_depth": 30,
    "commercial": 90
   },
   "entry_difficulty": "accessible",
   "market_demand": "stable",
   "summary": {
    "en": "Managing client portfolios for banks — understanding businesses, structuring facilities, and being the human face of finance.",
    "id": "Mengelola portofolio nasabah untuk bank — memahami bisnis, menyusun fasilitas, dan menjadi wajah manusia dari keuangan."
   },
   "day_in_life": {
    "en": "Three client visits, one credit memo, and a target sheet that resets every quarter — relationships are the product.",
    "id": "Tiga kunjungan nasabah, satu memo kredit, dan lembar target yang di-reset tiap kuartal — relasi adalah produknya."
   },
   "tradeoffs": [
    {
     "en": "Sales targets are explicit and quarterly; comfort with being measured is required.",
     "id": "Target penjualan eksplisit dan kuartalan; kamu harus nyaman diukur."
    }
   ],
   "common_myths": [
    {
     "en": "Officer Development Programs at major banks are structured two-year educations, not just sales jobs.",
     "id": "Officer Development Program di bank besar adalah pendidikan terstruktur dua tahun, bukan sekadar pekerjaan penjualan."
    }
   ],
   "core_skills": [
    "communication",
    "financial-literacy",
    "negotiation"
   ],
   "interest_tags": [
    "people",
    "business",
    "numbers"
   ]
  },
  {
   "id": "actuarial-analytics",
   "name": {
    "en": "Actuarial & Insurance Analytics",
    "id": "Aktuaria & Analitik Asuransi"
   },
   "industry_ids": [
    "financial-services"
   ],
   "function_ids": [
    "data",
    "risk"
   ],
   "attrs": {
    "analytical": 95,
    "creative": 25,
    "people_facing": 25,
    "structured": 85,
    "autonomous": 60,
    "detail_oriented": 95,
    "ambiguity_tolerant": 40,
    "pace_intensity": 50,
    "technical_depth": 75,
    "commercial": 45
   },
   "entry_difficulty": "highly-competitive",
   "market_demand": "growing",
   "summary": {
    "en": "Pricing uncertainty itself — mortality, claims, and the mathematics that keeps insurers solvent.",
    "id": "Menetapkan harga ketidakpastian itu sendiri — mortalitas, klaim, dan matematika yang menjaga solvabilitas asuransi."
   },
   "day_in_life": {
    "en": "You model claim probabilities before lunch and defend an assumption change to the appointed actuary after it — precision is the culture.",
    "id": "Kamu memodelkan probabilitas klaim sebelum makan siang dan mempertahankan perubahan asumsi di depan aktuaris utama setelahnya — presisi adalah budayanya."
   },
   "tradeoffs": [
    {
     "en": "Professional certification exams continue for years alongside full-time work.",
     "id": "Ujian sertifikasi profesi berlanjut bertahun-tahun bersamaan kerja penuh waktu."
    }
   ],
   "common_myths": [
    {
     "en": "Indonesia has a recognised shortage of qualified actuaries — demand is structural.",
     "id": "Indonesia diakui kekurangan aktuaris berkualifikasi — permintaannya struktural."
    }
   ],
   "core_skills": [
    "probability",
    "modelling",
    "persistence"
   ],
   "interest_tags": [
    "numbers",
    "puzzles",
    "research"
   ]
  },
  {
   "id": "brand-management",
   "name": {
    "en": "Brand Management",
    "id": "Manajemen Merek"
   },
   "industry_ids": [
    "fmcg-consumer"
   ],
   "function_ids": [
    "marketing"
   ],
   "attrs": {
    "analytical": 65,
    "creative": 80,
    "people_facing": 70,
    "structured": 60,
    "autonomous": 55,
    "detail_oriented": 65,
    "ambiguity_tolerant": 65,
    "pace_intensity": 75,
    "technical_depth": 30,
    "commercial": 85
   },
   "entry_difficulty": "highly-competitive",
   "market_demand": "stable",
   "summary": {
    "en": "Owning a consumer brand like a small business — its positioning, campaigns, pricing, and profit line.",
    "id": "Memiliki merek konsumen seperti bisnis kecil — positioning, kampanye, harga, dan garis labanya."
   },
   "day_in_life": {
    "en": "You review campaign cuts at ten, defend next year’s pricing at one, and visit a traditional-trade store at four to see the shelf yourself.",
    "id": "Kamu meninjau potongan kampanye jam sepuluh, mempertahankan harga tahun depan jam satu, dan mengunjungi toko tradisional jam empat untuk melihat rak dengan matamu sendiri."
   },
   "tradeoffs": [
    {
     "en": "Management-trainee intakes for brand roles are among the most selective in FMCG.",
     "id": "Seleksi management trainee untuk peran merek termasuk paling ketat di FMCG."
    }
   ],
   "common_myths": [
    {
     "en": "Brand managers spend more time in P&L spreadsheets than in creative reviews.",
     "id": "Brand manager menghabiskan lebih banyak waktu di spreadsheet P&L daripada tinjauan kreatif."
    }
   ],
   "core_skills": [
    "consumer-insight",
    "commercial-judgement",
    "presentation"
   ],
   "interest_tags": [
    "business",
    "creating",
    "strategy"
   ]
  },
  {
   "id": "sales-key-account",
   "name": {
    "en": "Sales & Key Accounts",
    "id": "Penjualan & Key Account"
   },
   "industry_ids": [
    "fmcg-consumer"
   ],
   "function_ids": [
    "commercial"
   ],
   "attrs": {
    "analytical": 50,
    "creative": 45,
    "people_facing": 95,
    "structured": 55,
    "autonomous": 65,
    "detail_oriented": 55,
    "ambiguity_tolerant": 60,
    "pace_intensity": 80,
    "technical_depth": 20,
    "commercial": 95
   },
   "entry_difficulty": "accessible",
   "market_demand": "stable",
   "summary": {
    "en": "Getting products onto shelves and keeping them there — distributor negotiations, retail partnerships, territory targets.",
    "id": "Memastikan produk ada di rak dan tetap di sana — negosiasi distributor, kemitraan ritel, target wilayah."
   },
   "day_in_life": {
    "en": "Market visits in the morning, a distributor negotiation after lunch, and an evening spent planning how your territory hits number.",
    "id": "Kunjungan pasar pagi hari, negosiasi distributor setelah makan siang, dan malam untuk merencanakan cara wilayahmu mencapai target."
   },
   "tradeoffs": [
    {
     "en": "Field time is real: this career happens in markets and stores, not at a desk.",
     "id": "Waktu lapangan itu nyata: karier ini berlangsung di pasar dan toko, bukan di meja."
    }
   ],
   "common_myths": [
    {
     "en": "FMCG sales is analytical territory management, not door-to-door persuasion.",
     "id": "Penjualan FMCG adalah pengelolaan wilayah yang analitis, bukan persuasi pintu-ke-pintu."
    }
   ],
   "core_skills": [
    "negotiation",
    "territory-planning",
    "resilience"
   ],
   "interest_tags": [
    "people",
    "business",
    "moving"
   ]
  },
  {
   "id": "supply-chain",
   "name": {
    "en": "Supply Chain & Logistics",
    "id": "Rantai Pasok & Logistik"
   },
   "industry_ids": [
    "fmcg-consumer",
    "tech-ecommerce"
   ],
   "function_ids": [
    "operations"
   ],
   "attrs": {
    "analytical": 75,
    "creative": 35,
    "people_facing": 45,
    "structured": 85,
    "autonomous": 55,
    "detail_oriented": 80,
    "ambiguity_tolerant": 50,
    "pace_intensity": 70,
    "technical_depth": 50,
    "commercial": 55
   },
   "entry_difficulty": "accessible",
   "market_demand": "growing",
   "summary": {
    "en": "Moving goods from factory to shelf — demand planning, warehousing, distribution, and the maths of never running out.",
    "id": "Memindahkan barang dari pabrik ke rak — perencanaan permintaan, pergudangan, distribusi, dan matematika agar tak pernah kehabisan."
   },
   "day_in_life": {
    "en": "A forecast misses, a truck breaks down, a promo doubles demand — and you re-plan the network before the shelf goes empty.",
    "id": "Proyeksi meleset, truk mogok, promo menggandakan permintaan — dan kamu menyusun ulang jaringan sebelum rak kosong."
   },
   "tradeoffs": [
    {
     "en": "Factories and warehouses run on shifts; so, sometimes, do you.",
     "id": "Pabrik dan gudang berjalan dengan shift; kadang kamu juga."
    }
   ],
   "common_myths": [
    {
     "en": "Supply chain is now a data discipline as much as a physical one.",
     "id": "Rantai pasok kini disiplin data sebesar disiplin fisik."
    }
   ],
   "core_skills": [
    "planning",
    "analytics",
    "coordination"
   ],
   "interest_tags": [
    "order",
    "numbers",
    "moving"
   ]
  },
  {
   "id": "market-research",
   "name": {
    "en": "Market Research & Consumer Insight",
    "id": "Riset Pasar & Insight Konsumen"
   },
   "industry_ids": [
    "fmcg-consumer",
    "tech-ecommerce"
   ],
   "function_ids": [
    "data",
    "marketing"
   ],
   "attrs": {
    "analytical": 80,
    "creative": 55,
    "people_facing": 55,
    "structured": 65,
    "autonomous": 60,
    "detail_oriented": 80,
    "ambiguity_tolerant": 55,
    "pace_intensity": 50,
    "technical_depth": 45,
    "commercial": 60
   },
   "entry_difficulty": "accessible",
   "market_demand": "stable",
   "summary": {
    "en": "Finding out what consumers actually think and do — studies, segmentation, and turning fieldwork into strategy.",
    "id": "Mencari tahu apa yang sebenarnya dipikirkan dan dilakukan konsumen — studi, segmentasi, dan mengubah kerja lapangan menjadi strategi."
   },
   "day_in_life": {
    "en": "You watch eight shoppers ignore the shelf your client obsesses over, and your report explains why better than any dashboard could.",
    "id": "Kamu mengamati delapan pembeli mengabaikan rak yang diobsesikan klienmu, dan laporanmu menjelaskan alasannya lebih baik dari dashboard mana pun."
   },
   "tradeoffs": [
    {
     "en": "Project cycles bring deadline crunches around fieldwork and reporting.",
     "id": "Siklus proyek membawa tekanan tenggat saat kerja lapangan dan pelaporan."
    }
   ],
   "common_myths": [
    {
     "en": "The craft is in the question design; the software is the easy part.",
     "id": "Keahliannya ada di desain pertanyaan; perangkat lunak adalah bagian mudahnya."
    }
   ],
   "core_skills": [
    "research-design",
    "statistics",
    "storytelling"
   ],
   "interest_tags": [
    "research",
    "people",
    "data"
   ]
  },
  {
   "id": "trade-marketing",
   "name": {
    "en": "Trade Marketing",
    "id": "Trade Marketing"
   },
   "industry_ids": [
    "fmcg-consumer"
   ],
   "function_ids": [
    "marketing",
    "commercial"
   ],
   "attrs": {
    "analytical": 65,
    "creative": 60,
    "people_facing": 65,
    "structured": 65,
    "autonomous": 55,
    "detail_oriented": 70,
    "ambiguity_tolerant": 55,
    "pace_intensity": 70,
    "technical_depth": 25,
    "commercial": 85
   },
   "entry_difficulty": "accessible",
   "market_demand": "stable",
   "summary": {
    "en": "The bridge between brand and sales — promotions, in-store visibility, and winning the shelf where purchases actually happen.",
    "id": "Jembatan antara merek dan penjualan — promosi, visibilitas di toko, dan memenangkan rak tempat pembelian benar-benar terjadi."
   },
   "day_in_life": {
    "en": "You design a promo mechanic, cost it, sell it to the sales team, then stand in a minimarket watching whether shoppers notice.",
    "id": "Kamu merancang mekanik promo, menghitung biayanya, meyakinkan tim penjualan, lalu berdiri di minimarket mengamati apakah pembeli memperhatikan."
   },
   "tradeoffs": [
    {
     "en": "You sit between two demanding stakeholders — brand ambitions and sales realities.",
     "id": "Kamu duduk di antara dua pemangku kepentingan yang menuntut — ambisi merek dan realitas penjualan."
    }
   ],
   "common_myths": [
    {
     "en": "Trade marketing decisions are won with unit economics, not aesthetics.",
     "id": "Keputusan trade marketing dimenangkan dengan ekonomi unit, bukan estetika."
    }
   ],
   "core_skills": [
    "promo-planning",
    "commercial-judgement",
    "negotiation"
   ],
   "interest_tags": [
    "business",
    "creating",
    "people"
   ]
  },
  {
   "id": "hr-people",
   "name": {
    "en": "Human Resources & People Development",
    "id": "SDM & Pengembangan Orang"
   },
   "industry_ids": [
    "fmcg-consumer",
    "financial-services",
    "tech-ecommerce"
   ],
   "function_ids": [
    "people"
   ],
   "attrs": {
    "analytical": 50,
    "creative": 50,
    "people_facing": 90,
    "structured": 70,
    "autonomous": 50,
    "detail_oriented": 70,
    "ambiguity_tolerant": 50,
    "pace_intensity": 55,
    "technical_depth": 25,
    "commercial": 45
   },
   "entry_difficulty": "accessible",
   "market_demand": "stable",
   "summary": {
    "en": "Building the systems that find, grow and keep people — recruitment, learning, performance, and organisation design.",
    "id": "Membangun sistem yang menemukan, menumbuhkan, dan mempertahankan orang — rekrutmen, pembelajaran, kinerja, dan desain organisasi."
   },
   "day_in_life": {
    "en": "A morning of interviews, an afternoon designing the graduate programme you wish you’d had, and one hard conversation done kindly.",
    "id": "Pagi berisi wawancara, siang merancang program graduate yang dulu kamu harapkan ada, dan satu percakapan sulit yang dilakukan dengan baik."
   },
   "tradeoffs": [
    {
     "en": "You hold confidences and handle conflict as a daily part of the role.",
     "id": "Kamu memegang rahasia dan menangani konflik sebagai bagian harian peran ini."
    }
   ],
   "common_myths": [
    {
     "en": "Modern HR is analytics and organisation design, not administration.",
     "id": "HR modern adalah analitik dan desain organisasi, bukan administrasi."
    }
   ],
   "core_skills": [
    "empathy",
    "facilitation",
    "people-analytics"
   ],
   "interest_tags": [
    "people",
    "teaching",
    "order"
   ]
  },
  {
   "id": "procurement",
   "name": {
    "en": "Procurement & Sourcing",
    "id": "Pengadaan & Sourcing"
   },
   "industry_ids": [
    "fmcg-consumer",
    "financial-services"
   ],
   "function_ids": [
    "operations"
   ],
   "attrs": {
    "analytical": 70,
    "creative": 35,
    "people_facing": 60,
    "structured": 80,
    "autonomous": 55,
    "detail_oriented": 80,
    "ambiguity_tolerant": 45,
    "pace_intensity": 55,
    "technical_depth": 35,
    "commercial": 80
   },
   "entry_difficulty": "accessible",
   "market_demand": "stable",
   "summary": {
    "en": "Buying everything a company needs at the right price, quality and risk — negotiation as an analytical discipline.",
    "id": "Membeli semua kebutuhan perusahaan pada harga, kualitas, dan risiko yang tepat — negosiasi sebagai disiplin analitis."
   },
   "day_in_life": {
    "en": "You benchmark three suppliers, model the total cost of each, and walk into the negotiation knowing exactly where you can move.",
    "id": "Kamu membandingkan tiga pemasok, memodelkan biaya total masing-masing, dan masuk negosiasi tahu persis di mana bisa bergeser."
   },
   "tradeoffs": [
    {
     "en": "Savings targets are explicit; procurement is measured like a sales team in reverse.",
     "id": "Target penghematan eksplisit; pengadaan diukur seperti tim penjualan terbalik."
    }
   ],
   "common_myths": [
    {
     "en": "Strategic sourcing is relationship and risk work, not purchase-order processing.",
     "id": "Strategic sourcing adalah kerja relasi dan risiko, bukan pemrosesan purchase order."
    }
   ],
   "core_skills": [
    "negotiation",
    "cost-modelling",
    "supplier-management"
   ],
   "interest_tags": [
    "numbers",
    "business",
    "order"
   ]
  },
  {
   "id": "management-trainee",
   "name": {
    "en": "Management Trainee Track",
    "id": "Jalur Management Trainee"
   },
   "industry_ids": [
    "fmcg-consumer",
    "financial-services",
    "tech-ecommerce"
   ],
   "function_ids": [
    "commercial",
    "operations"
   ],
   "attrs": {
    "analytical": 65,
    "creative": 55,
    "people_facing": 75,
    "structured": 65,
    "autonomous": 55,
    "detail_oriented": 65,
    "ambiguity_tolerant": 70,
    "pace_intensity": 80,
    "technical_depth": 35,
    "commercial": 75
   },
   "entry_difficulty": "highly-competitive",
   "market_demand": "stable",
   "summary": {
    "en": "Rotational leadership programmes across functions — the structured fast lane into management at major companies.",
    "id": "Program kepemimpinan rotasi lintas fungsi — jalur cepat terstruktur menuju manajemen di perusahaan besar."
   },
   "day_in_life": {
    "en": "Six months in sales, six in supply chain, six in marketing — each rotation ends with a project you present to people two levels up.",
    "id": "Enam bulan di penjualan, enam di rantai pasok, enam di pemasaran — tiap rotasi berakhir dengan proyek yang kamu presentasikan dua tingkat ke atas."
   },
   "tradeoffs": [
    {
     "en": "Selection is brutal by design: thousands of applicants per cohort seat is normal.",
     "id": "Seleksinya memang berat: ribuan pelamar per kursi angkatan adalah hal normal."
    },
    {
     "en": "Rotations may place you in cities and functions you did not choose.",
     "id": "Rotasi bisa menempatkanmu di kota dan fungsi yang tidak kamu pilih."
    }
   ],
   "common_myths": [
    {
     "en": "MT programmes are entry points, not job titles — the career is what comes after.",
     "id": "Program MT adalah pintu masuk, bukan jabatan — kariernya adalah yang datang setelahnya."
    }
   ],
   "core_skills": [
    "leadership-potential",
    "adaptability",
    "case-solving"
   ],
   "interest_tags": [
    "business",
    "people",
    "strategy"
   ]
  },
  {
   "id": "learning-design",
   "name": {
    "en": "Learning Experience Design",
    "id": "Desain Pengalaman Belajar"
   },
   "industry_ids": [
    "tech-ecommerce",
    "fmcg-consumer"
   ],
   "function_ids": [
    "people",
    "design"
   ],
   "attrs": {
    "analytical": 60,
    "creative": 80,
    "people_facing": 65,
    "structured": 60,
    "autonomous": 65,
    "detail_oriented": 70,
    "ambiguity_tolerant": 60,
    "pace_intensity": 50,
    "technical_depth": 40,
    "commercial": 40
   },
   "entry_difficulty": "accessible",
   "market_demand": "growing",
   "summary": {
    "en": "Designing how people learn — curricula, workshops, digital courses, and the craft of making complex things learnable.",
    "id": "Merancang cara orang belajar — kurikulum, lokakarya, kursus digital, dan keahlian membuat hal kompleks jadi mudah dipelajari."
   },
   "day_in_life": {
    "en": "You take a subject expert’s tangled knowledge, find its spine, and build the module that makes a novice feel capable in forty minutes.",
    "id": "Kamu mengambil pengetahuan kusut seorang ahli, menemukan tulang punggungnya, dan membangun modul yang membuat pemula merasa mampu dalam empat puluh menit."
   },
   "tradeoffs": [
    {
     "en": "The field is young in Indonesia; roles carry many different titles and expectations.",
     "id": "Bidang ini masih muda di Indonesia; perannya membawa banyak judul dan ekspektasi berbeda."
    }
   ],
   "common_myths": [
    {
     "en": "This is design and psychology work, not teaching in front of a class.",
     "id": "Ini kerja desain dan psikologi, bukan mengajar di depan kelas."
    }
   ],
   "core_skills": [
    "instructional-design",
    "structuring-ideas",
    "empathy"
   ],
   "interest_tags": [
    "teaching",
    "creating",
    "people"
   ]
  }
 ],
 "companies": [
  {
   "id": "shopee-id",
   "name": "Shopee (Sea Group) Indonesia",
   "industry_id": "tech-ecommerce",
   "description": {
    "en": "A Southeast Asian e-commerce platform operating marketplace, logistics and digital financial services in Indonesia.",
    "id": "Platform e-commerce Asia Tenggara yang mengoperasikan marketplace, logistik, dan layanan keuangan digital di Indonesia."
   },
   "website": "https://careers.shopee.co.id",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "goto",
   "name": "GoTo (Gojek Tokopedia)",
   "industry_id": "tech-ecommerce",
   "description": {
    "en": "An Indonesian technology group spanning on-demand transport, e-commerce and financial technology.",
    "id": "Grup teknologi Indonesia yang mencakup transportasi on-demand, e-commerce, dan teknologi finansial."
   },
   "website": "https://www.gotocompany.com",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "grab-id",
   "name": "Grab Indonesia",
   "industry_id": "tech-ecommerce",
   "description": {
    "en": "A Southeast Asian super-app providing transportation, delivery and digital payment services.",
    "id": "Super-app Asia Tenggara yang menyediakan layanan transportasi, pengiriman, dan pembayaran digital."
   },
   "website": "https://www.grab.com/id",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "traveloka",
   "name": "Traveloka",
   "industry_id": "tech-ecommerce",
   "description": {
    "en": "An Indonesian online travel platform for flights, accommodation and lifestyle bookings.",
    "id": "Platform perjalanan daring Indonesia untuk penerbangan, akomodasi, dan pemesanan gaya hidup."
   },
   "website": "https://www.traveloka.com",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "blibli",
   "name": "Blibli",
   "industry_id": "tech-ecommerce",
   "description": {
    "en": "An Indonesian e-commerce platform operating an integrated retail and logistics ecosystem.",
    "id": "Platform e-commerce Indonesia dengan ekosistem ritel dan logistik terintegrasi."
   },
   "website": "https://www.blibli.com",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "telkom",
   "name": "Telkom Indonesia",
   "industry_id": "tech-ecommerce",
   "description": {
    "en": "Indonesia’s state-owned telecommunications company, providing network, data and digital services nationally.",
    "id": "BUMN telekomunikasi Indonesia yang menyediakan layanan jaringan, data, dan digital secara nasional."
   },
   "website": "https://www.telkom.co.id",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "telkomsel",
   "name": "Telkomsel",
   "industry_id": "tech-ecommerce",
   "description": {
    "en": "Indonesia’s largest mobile network operator, part of the Telkom group.",
    "id": "Operator jaringan seluler terbesar Indonesia, bagian dari grup Telkom."
   },
   "website": "https://www.telkomsel.com",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "bca",
   "name": "Bank Central Asia (BCA)",
   "industry_id": "financial-services",
   "description": {
    "en": "One of Indonesia’s largest private banks, known for transaction banking and its graduate development programmes.",
    "id": "Salah satu bank swasta terbesar Indonesia, dikenal dengan perbankan transaksi dan program pengembangan lulusannya."
   },
   "website": "https://www.bca.co.id",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "mandiri",
   "name": "Bank Mandiri",
   "industry_id": "financial-services",
   "description": {
    "en": "An Indonesian state-owned bank serving retail, commercial and wholesale segments nationwide.",
    "id": "Bank BUMN Indonesia yang melayani segmen ritel, komersial, dan wholesale secara nasional."
   },
   "website": "https://www.bankmandiri.co.id",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "bri",
   "name": "Bank Rakyat Indonesia (BRI)",
   "industry_id": "financial-services",
   "description": {
    "en": "A state-owned bank with Indonesia’s widest micro and small-business banking network.",
    "id": "Bank BUMN dengan jaringan perbankan mikro dan usaha kecil terluas di Indonesia."
   },
   "website": "https://www.bri.co.id",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "bni",
   "name": "Bank Negara Indonesia (BNI)",
   "industry_id": "financial-services",
   "description": {
    "en": "An Indonesian state-owned bank with retail, corporate and international banking operations.",
    "id": "Bank BUMN Indonesia dengan operasi perbankan ritel, korporat, dan internasional."
   },
   "website": "https://www.bni.co.id",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "dbs-id",
   "name": "DBS Indonesia",
   "industry_id": "financial-services",
   "description": {
    "en": "The Indonesian arm of the Singapore-headquartered DBS banking group.",
    "id": "Cabang Indonesia dari grup perbankan DBS yang berkantor pusat di Singapura."
   },
   "website": "https://www.dbs.id",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "prudential-id",
   "name": "Prudential Indonesia",
   "industry_id": "financial-services",
   "description": {
    "en": "A life insurance company operating in Indonesia as part of the Prudential plc group.",
    "id": "Perusahaan asuransi jiwa yang beroperasi di Indonesia sebagai bagian grup Prudential plc."
   },
   "website": "https://www.prudential.co.id",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "ojk-note",
   "name": "Bank Indonesia / OJK (regulators)",
   "industry_id": "financial-services",
   "description": {
    "en": "Indonesia’s central bank and financial services authority — public-sector careers with their own selection processes.",
    "id": "Bank sentral dan otoritas jasa keuangan Indonesia — karier sektor publik dengan proses seleksi tersendiri."
   },
   "website": "https://www.bi.go.id",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "unilever-id",
   "name": "Unilever Indonesia",
   "industry_id": "fmcg-consumer",
   "description": {
    "en": "A multinational consumer goods company with home care, personal care, and food brands across Indonesia.",
    "id": "Perusahaan barang konsumen multinasional dengan merek perawatan rumah, perawatan diri, dan makanan di seluruh Indonesia."
   },
   "website": "https://careers.unilever.com/indonesia",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "nestle-id",
   "name": "Nestlé Indonesia",
   "industry_id": "fmcg-consumer",
   "description": {
    "en": "The Indonesian operations of the global food and beverage company.",
    "id": "Operasi Indonesia dari perusahaan makanan dan minuman global."
   },
   "website": "https://www.nestle.co.id",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "loreal-id",
   "name": "L'Oréal Indonesia",
   "industry_id": "fmcg-consumer",
   "description": {
    "en": "The Indonesian arm of the global beauty company, spanning consumer and professional brands.",
    "id": "Cabang Indonesia dari perusahaan kecantikan global, mencakup merek konsumen dan profesional."
   },
   "website": "https://www.loreal.com",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "danone-id",
   "name": "Danone Indonesia",
   "industry_id": "fmcg-consumer",
   "description": {
    "en": "The Indonesian operations of the global food company, spanning waters and specialised nutrition.",
    "id": "Operasi Indonesia dari perusahaan makanan global, mencakup air minum dan nutrisi khusus."
   },
   "website": "https://www.danone.com",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "wings",
   "name": "Wings Group",
   "industry_id": "fmcg-consumer",
   "description": {
    "en": "An Indonesian consumer goods group producing home care, personal care and food products.",
    "id": "Grup barang konsumen Indonesia yang memproduksi perawatan rumah, perawatan diri, dan makanan."
   },
   "website": "https://www.wingscorp.com",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  },
  {
   "id": "mayora",
   "name": "Mayora Group",
   "industry_id": "fmcg-consumer",
   "description": {
    "en": "An Indonesian food and beverage manufacturer with brands distributed across Asia.",
    "id": "Produsen makanan dan minuman Indonesia dengan merek yang terdistribusi di seluruh Asia."
   },
   "website": "https://www.mayoraindah.co.id",
   "source_type": "official",
   "last_reviewed": "2026-08-16",
   "is_verified": false
  }
 ],
 "stageTypes": {
  "application_screening": {
   "pillar": "the-pack",
   "module": {
    "en": "ATS Optimisation",
    "id": "Optimasi ATS"
   }
  },
  "cv_screening": {
   "pillar": "the-pack",
   "module": {
    "en": "CV & Impact Statements",
    "id": "CV & Pernyataan Dampak"
   }
  },
  "online_assessment": {
   "pillar": "the-pack",
   "module": {
    "en": "Psychometric & Aptitude Prep",
    "id": "Persiapan Psikometri & Bakat"
   }
  },
  "technical_assessment": {
   "pillar": "the-pack",
   "module": {
    "en": "Technical Preparation",
    "id": "Persiapan Teknis"
   }
  },
  "group_case": {
   "pillar": "the-rope",
   "module": {
    "en": "FGD / LGD Simulation",
    "id": "Simulasi FGD / LGD"
   }
  },
  "case_interview": {
   "pillar": "the-rope",
   "module": {
    "en": "Case Interview",
    "id": "Wawancara Kasus"
   }
  },
  "behavioural_interview": {
   "pillar": "the-rope",
   "module": {
    "en": "STAR Method",
    "id": "Metode STAR"
   }
  },
  "functional_interview": {
   "pillar": "the-rope",
   "module": {
    "en": "Competency Interview",
    "id": "Wawancara Kompetensi"
   }
  },
  "values_interview": {
   "pillar": "the-rope",
   "module": {
    "en": "Culture & Values Fit",
    "id": "Kecocokan Budaya & Nilai"
   }
  },
  "hr_interview": {
   "pillar": "the-rope",
   "module": {
    "en": "HR Screening",
    "id": "Screening HR"
   }
  },
  "senior_interview": {
   "pillar": "the-rope",
   "module": {
    "en": "Final Interview",
    "id": "Wawancara Final"
   }
  },
  "panel_interview": {
   "pillar": "the-rope",
   "module": {
    "en": "Panel & Committee",
    "id": "Panel & Komite"
   }
  },
  "medical": {
   "pillar": null,
   "module": {
    "en": "Informational only",
    "id": "Hanya informasi"
   }
  }
 },
 "programmes": [
  {
   "id": "shopee-gdp",
   "company_id": "shopee-id",
   "name": {
    "en": "Graduate Development Program (GDP)",
    "id": "Graduate Development Program (GDP)"
   },
   "length": {
    "en": "2 years · four rotations of 6 months each",
    "id": "2 tahun · empat rotasi masing-masing 6 bulan"
   },
   "desc": {
    "en": "A two-year programme across business functions in e-commerce and digital financial services at Shopee and Monee.",
    "id": "Program dua tahun lintas fungsi bisnis di e-commerce dan layanan keuangan digital di Shopee dan Monee."
   },
   "window": {
    "en": "Applications opened 13 February 2026",
    "id": "Pendaftaran dibuka 13 Februari 2026"
   },
   "source_url": "https://careers.shopee.co.id/GDP",
   "source_type": "official",
   "last_verified": "2026-07-12",
   "confidence": "high",
   "stages": [
    {
     "seq": 1,
     "type": "application_screening",
     "name": {
      "en": "Administrative & Application Screening",
      "id": "Screening Administratif & Aplikasi"
     },
     "assess": {
      "en": "Eligibility, CV relevance, ATS parsing",
      "id": "Kelayakan, relevansi CV, pembacaan ATS"
     },
     "failure": {
      "en": "CV never parsed correctly",
      "id": "CV tidak terbaca ATS dengan benar"
     }
    },
    {
     "seq": 2,
     "type": "online_assessment",
     "name": {
      "en": "Online Assessment",
      "id": "Asesmen Daring"
     },
     "assess": {
      "en": "Numerical, verbal and logical reasoning",
      "id": "Penalaran numerik, verbal, dan logika"
     },
     "failure": null
    },
    {
     "seq": 3,
     "type": "behavioural_interview",
     "name": {
      "en": "Behavioural Interview",
      "id": "Wawancara Perilaku"
     },
     "assess": {
      "en": "How you learn and adapt; how you solve problems",
      "id": "Cara kamu belajar dan beradaptasi; cara memecahkan masalah"
     },
     "failure": null
    },
    {
     "seq": 4,
     "type": "group_case",
     "name": {
      "en": "Group Case Assessment",
      "id": "Asesmen Kasus Kelompok"
     },
     "assess": {
      "en": "Contribution, listening, building on others",
      "id": "Kontribusi, mendengarkan, membangun di atas ide orang lain"
     },
     "failure": {
      "en": "Dominating the room, or going silent",
      "id": "Mendominasi ruangan, atau justru diam"
     }
    },
    {
     "seq": 5,
     "type": "senior_interview",
     "name": {
      "en": "Interview with Senior Leaders",
      "id": "Wawancara dengan Pemimpin Senior"
     },
     "assess": {
      "en": "Motivation, judgement, long-term potential",
      "id": "Motivasi, penilaian, potensi jangka panjang"
     },
     "failure": null
    }
   ],
   "eligibility": [
    {
     "rule": "graduation_year",
     "label": {
      "en": "Recent graduates and final-year students",
      "id": "Lulusan baru dan mahasiswa tingkat akhir"
     },
     "check": "grad_window",
     "note": {
      "en": "Per the official programme page",
      "id": "Sesuai laman resmi program"
     },
     "hard": true
    },
    {
     "rule": "gpa",
     "label": {
      "en": "No published GPA minimum",
      "id": "Tidak ada IPK minimum yang dipublikasikan"
     },
     "check": "gpa_note",
     "note": {
      "en": "No official threshold is published for this programme.",
      "id": "Tidak ada ambang resmi yang dipublikasikan untuk program ini."
     },
     "hard": false
    }
   ]
  },
  {
   "id": "telkom-gptp",
   "company_id": "telkom",
   "name": {
    "en": "Great People Trainee Program (GPTP)",
    "id": "Great People Trainee Program (GPTP)"
   },
   "length": {
    "en": "~6 months, including 2 weeks of mental guidance (Bintal), then promotion to permanent employee",
    "id": "~6 bulan, termasuk 2 minggu bimbingan mental (Bintal), lalu diangkat menjadi karyawan tetap"
   },
   "desc": {
    "en": "Telkom’s flagship entry programme for fresh graduates across technology and business tracks.",
    "id": "Program masuk unggulan Telkom untuk lulusan baru di jalur teknologi dan bisnis."
   },
   "window": {
    "en": "Batch openings announced on official channels",
    "id": "Pembukaan batch diumumkan di kanal resmi"
   },
   "source_url": "https://careers.telkom.co.id",
   "source_type": "official",
   "last_verified": "2026-07-12",
   "confidence": "medium",
   "stages": null,
   "eligibility": []
  },
  {
   "id": "bumn-rekrutmen-bersama",
   "company_id": null,
   "name": {
    "en": "Rekrutmen Bersama BUMN",
    "id": "Rekrutmen Bersama BUMN"
   },
   "length": {
    "en": "Varies by enterprise and role",
    "id": "Bervariasi menurut perusahaan dan peran"
   },
   "desc": {
    "en": "Joint recruitment across 50+ state-owned enterprises, run by FHCI. Typically runs March–October.",
    "id": "Rekrutmen gabungan 50+ BUMN, diselenggarakan FHCI. Biasanya berlangsung Maret–Oktober."
   },
   "window": {
    "en": "Typically opens March",
    "id": "Biasanya dibuka Maret"
   },
   "source_url": "https://rekrutmenbersama.fhcibumn.id",
   "source_type": "official",
   "last_verified": "2026-07-12",
   "confidence": "medium",
   "stages": null,
   "eligibility": [
    {
     "rule": "age",
     "label": {
      "en": "Age cap: 27 for S1, 25 for D3/D4",
      "id": "Batas usia: 27 untuk S1, 25 untuk D3/D4"
     },
     "check": "age_max",
     "value": {
      "s1": 27,
      "d3_d4": 25
     },
     "note": {
      "en": "Hard filter in recent cycles",
      "id": "Filter mutlak pada siklus terakhir"
     },
     "hard": true
    },
    {
     "rule": "gpa",
     "label": {
      "en": "GPA minimum: 2.75 (PTN) / 3.00 (PTS)",
      "id": "IPK minimum: 2,75 (PTN) / 3,00 (PTS)"
     },
     "check": "gpa_min",
     "value": {
      "ptn": 2.75,
      "pts": 3.0
     },
     "note": {
      "en": "Hard filter in recent cycles",
      "id": "Filter mutlak pada siklus terakhir"
     },
     "hard": true
    }
   ]
  },
  {
   "id": "unilever-ulip",
   "company_id": "unilever-id",
   "name": {
    "en": "Unilever Leadership Internship & Early Careers",
    "id": "Unilever Leadership Internship & Early Careers"
   },
   "length": {
    "en": "Programme structures vary by intake",
    "id": "Struktur program bervariasi per angkatan"
   },
   "desc": {
    "en": "Unilever Indonesia’s early-careers entry points, listed on the official careers site.",
    "id": "Pintu masuk early-careers Unilever Indonesia, tercantum di situs karier resmi."
   },
   "window": {
    "en": "See the official early-careers page for current openings",
    "id": "Lihat laman early-careers resmi untuk pembukaan terkini"
   },
   "source_url": "https://careers.unilever.com/indonesiaearlycareers",
   "source_type": "official",
   "last_verified": "2026-07-12",
   "confidence": "medium",
   "stages": null,
   "eligibility": []
  }
 ]
};
