/* THE RANGE — CAREER PATHS, RELATIONSHIPS AND THE GUIDE LEXICON
 * ---------------------------------------------------------------
 * Editorial career analysis per function and per industry: entry titles,
 * how scope typically grows, routes in and out, the skills that matter and
 * which industries hire which functions. Used by the company pages, the
 * Career Map (#/map) and the Range Guide (#/guide). Metanoia analysis of how
 * roles of each kind generally work — never a specific company's ladder, and
 * no salary figures. The guide lexicon maps plain-language interests and
 * objectives onto the same tags, functions, industries and attributes the fit
 * model already uses; matching runs entirely in the browser. */
window.MT_RANGE_PATHS = (function () {
  'use strict';
  var L = function (en, id) { return { en: en, id: id }; };

  /* ── skills dictionary ── */
  var SKILLS = {
    'programming': L('Programming', 'Pemrograman'), 'systems-thinking': L('Systems thinking', 'Berpikir sistem'), 'debugging': L('Debugging & testing', 'Debugging & pengujian'),
    'sql-excel': L('SQL & spreadsheets', 'SQL & spreadsheet'), 'statistics': L('Statistics fundamentals', 'Dasar statistika'), 'data-storytelling': L('Data storytelling', 'Bercerita dengan data'),
    'communication': L('Structured communication', 'Komunikasi terstruktur'), 'prioritisation': L('Prioritisation under constraint', 'Prioritisasi dalam keterbatasan'), 'user-empathy': L('User empathy', 'Empati pengguna'),
    'design-tools': L('Design tools', 'Perangkat desain'), 'user-research': L('User research', 'Riset pengguna'), 'visual-craft': L('Visual & interaction craft', 'Keahlian visual & interaksi'),
    'copywriting': L('Copy & content', 'Naskah & konten'), 'channel-analytics': L('Channel analytics', 'Analitik kanal'), 'experimentation': L('Experimentation habit', 'Kebiasaan bereksperimen'), 'consumer-insight': L('Consumer insight', 'Insight konsumen'),
    'financial-modelling': L('Financial modelling', 'Pemodelan keuangan'), 'accounting': L('Accounting fundamentals', 'Dasar akuntansi'), 'valuation': L('Valuation', 'Valuasi'), 'reporting': L('Concise reporting', 'Pelaporan ringkas'),
    'planning': L('Planning & forecasting', 'Perencanaan & peramalan'), 'coordination': L('Cross-team coordination', 'Koordinasi lintas tim'), 'process-design': L('Process design', 'Perancangan proses'), 'supplier-management': L('Supplier & vendor management', 'Manajemen pemasok & vendor'),
    'negotiation': L('Negotiation', 'Negosiasi'), 'pipeline-discipline': L('Pipeline discipline', 'Disiplin pipeline'), 'resilience': L('Resilience to rejection', 'Tahan terhadap penolakan'), 'commercial-judgement': L('Commercial judgement', 'Penilaian komersial'),
    'people-judgement': L('Judgement about people', 'Penilaian tentang orang'), 'facilitation': L('Facilitation', 'Fasilitasi'), 'confidentiality': L('Confidentiality & fairness', 'Kerahasiaan & keadilan'),
    'evidence-testing': L('Evidence testing', 'Pengujian bukti'), 'regulation-literacy': L('Regulatory literacy', 'Literasi regulasi'), 'structured-writing': L('Structured writing', 'Penulisan terstruktur'), 'independence': L('Independence', 'Independensi'),
    'problem-structuring': L('Structured problem solving', 'Pemecahan masalah terstruktur'), 'slide-craft': L('Slide & narrative craft', 'Keahlian slide & narasi'), 'market-sizing': L('Market sizing', 'Market sizing'),
    'learning-agility': L('Learning agility', 'Kelincahan belajar'), 'adaptability': L('Adaptability', 'Adaptabilitas'), 'leadership-signals': L('Leadership signals', 'Sinyal kepemimpinan'), 'security-basics': L('Security fundamentals', 'Dasar keamanan')
  };

  /* ── per-function career paths (editorial) ── */
  var FUNCTIONS = {
    engineering: {
      entry: [L('Junior / associate software engineer', 'Junior / associate software engineer'), L('Engineer I', 'Engineer I'), L('Graduate developer', 'Graduate developer')],
      ladder: [
        { t: L('Junior engineer', 'Junior engineer'), y: '0–2', s: L('Ships well-defined tickets with review; learns the codebase and the team’s way of working.', 'Merilis tiket yang terdefinisi jelas dengan review; mempelajari basis kode dan cara kerja tim.') },
        { t: L('Engineer', 'Engineer'), y: '2–4', s: L('Owns features end to end; reviews others’ code; trusted with production incidents.', 'Memegang fitur ujung ke ujung; meninjau kode orang lain; dipercaya menangani insiden produksi.') },
        { t: L('Senior engineer', 'Senior engineer'), y: '4–7', s: L('Designs systems, sets standards, mentors; the person others bring ambiguous problems to.', 'Merancang sistem, menetapkan standar, membimbing; orang yang didatangi rekan dengan masalah ambigu.') },
        { t: L('Staff / principal — or engineering manager', 'Staff / principal — atau engineering manager'), y: '7+', s: L('Two tracks: deep technical leadership across teams, or leading people and delivery.', 'Dua jalur: kepemimpinan teknis mendalam lintas tim, atau memimpin orang dan penyampaian.') }
      ],
      routes_in: [L('Computer-science or engineering degree, but portfolios and take-home tests matter more at most employers.', 'Gelar ilmu komputer atau teknik, tetapi portofolio dan tes take-home lebih penting di sebagian besar perusahaan.'), L('Bootcamps and self-taught routes with shipped projects on GitHub.', 'Bootcamp dan jalur otodidak dengan proyek yang sudah dirilis di GitHub.'), L('Internships that convert — the most common door at platforms.', 'Magang yang berlanjut menjadi karyawan — pintu paling umum di platform.')],
      routes_out: [{ fn: 'product', why: L('Engineers who like the “why” more than the “how”.', 'Engineer yang lebih menyukai “mengapa” daripada “bagaimana”.') }, { fn: 'data', why: L('Via data engineering and analytics infrastructure.', 'Lewat data engineering dan infrastruktur analitik.') }, { fn: 'strategy', why: L('Technology consulting and solution architecture.', 'Konsultansi teknologi dan arsitektur solusi.') }],
      skills: ['programming', 'debugging', 'systems-thinking', 'communication', 'security-basics'],
      adjacent: ['data', 'product', 'design'], track: '6.9',
      demand: L('Hired in every industry, not only technology; the bar has risen but the door is the most portable on The Map.', 'Direkrut di setiap industri, bukan hanya teknologi; standarnya naik, tetapi pintunya paling portabel di The Map.')
    },
    data: {
      entry: [L('Data analyst', 'Data analyst'), L('Junior BI analyst', 'Junior BI analyst'), L('Analytics graduate', 'Analytics graduate')],
      ladder: [
        { t: L('Analyst', 'Analyst'), y: '0–2', s: L('Answers defined questions with SQL and dashboards; learns to distrust the first number.', 'Menjawab pertanyaan yang sudah jelas dengan SQL dan dasbor; belajar mencurigai angka pertama.') },
        { t: L('Senior analyst', 'Senior analyst'), y: '2–4', s: L('Owns a domain’s metrics; sharpens vague requests; presents to decision-makers.', 'Memegang metrik satu domain; mempertajam permintaan samar; presentasi ke pengambil keputusan.') },
        { t: L('Lead / analytics manager — or data scientist / engineer', 'Lead / analytics manager — atau data scientist / engineer'), y: '4–7', s: L('Leads a team or goes deeper technically into modelling or pipelines.', 'Memimpin tim atau mendalami sisi teknis: pemodelan atau pipeline.') },
        { t: L('Head of data / analytics', 'Head of data / analytics'), y: '7+', s: L('Sets how the company measures itself; owns data quality and the roadmap.', 'Menentukan cara perusahaan mengukur dirinya; memegang kualitas data dan peta jalan.') }
      ],
      routes_in: [L('Any quantitative degree plus SQL and one of Python or R — now assumed rather than a differentiator.', 'Gelar kuantitatif apa pun plus SQL dan salah satu dari Python atau R — kini dianggap wajib, bukan pembeda.'), L('Graduate programmes at platforms, banks and consultancies.', 'Program lulusan baru di platform, bank, dan konsultan.'), L('Sideways from finance, operations or marketing with demonstrated analysis work.', 'Pindah dari keuangan, operasi, atau pemasaran dengan karya analisis yang terbukti.')],
      routes_out: [{ fn: 'product', why: L('Analysts who start proposing what to build.', 'Analis yang mulai mengusulkan apa yang harus dibangun.') }, { fn: 'strategy', why: L('Analytics consulting and corporate strategy.', 'Konsultansi analitik dan strategi korporat.') }, { fn: 'engineering', why: L('Through data engineering.', 'Lewat data engineering.') }],
      skills: ['sql-excel', 'statistics', 'data-storytelling', 'problem-structuring', 'communication'],
      adjacent: ['engineering', 'product', 'finance', 'marketing'], track: '6.8',
      demand: L('Demand grew with the platforms and spread to banks, FMCG and BUMNs building data offices; judgement about what a number means is the differentiator.', 'Permintaan tumbuh seiring platform dan menyebar ke bank, FMCG, dan BUMN yang membangun kantor data; penilaian tentang arti sebuah angka adalah pembedanya.')
    },
    product: {
      entry: [L('Associate product manager', 'Associate product manager'), L('Product analyst', 'Product analyst'), L('Product operations associate', 'Product operations associate')],
      ladder: [
        { t: L('Associate PM', 'Associate PM'), y: '0–2', s: L('Owns one feature; writes tickets engineers can start without a meeting.', 'Memegang satu fitur; menulis tiket yang bisa langsung dikerjakan engineer tanpa rapat.') },
        { t: L('Product manager', 'Product manager'), y: '2–5', s: L('Owns a product area and its metrics; runs experiments; says no well.', 'Memegang satu area produk dan metriknya; menjalankan eksperimen; pandai berkata tidak.') },
        { t: L('Senior / group PM', 'Senior / group PM'), y: '5–8', s: L('Owns a product line; coaches PMs; negotiates with leadership.', 'Memegang satu lini produk; membina PM; bernegosiasi dengan pimpinan.') },
        { t: L('Head of product / CPO', 'Head of product / CPO'), y: '8+', s: L('Sets product strategy and the shape of the organisation.', 'Menetapkan strategi produk dan bentuk organisasinya.') }
      ],
      routes_in: [L('Rarely a first job: most enter from engineering, data, design, consulting or operations.', 'Jarang menjadi pekerjaan pertama: kebanyakan masuk dari rekayasa, data, desain, konsultansi, atau operasi.'), L('APM programmes at larger platforms — few seats, heavy competition.', 'Program APM di platform besar — kursinya sedikit, persaingannya berat.'), L('Product analyst or product-operations roles as the side door.', 'Peran product analyst atau product operations sebagai pintu samping.')],
      routes_out: [{ fn: 'strategy', why: L('Product strategy and founding companies.', 'Strategi produk dan mendirikan perusahaan.') }, { fn: 'marketing', why: L('Growth product overlaps with growth marketing.', 'Produk growth bersinggungan dengan growth marketing.') }],
      skills: ['communication', 'prioritisation', 'user-empathy', 'sql-excel', 'experimentation'],
      adjacent: ['engineering', 'data', 'design', 'marketing'], track: '6.7',
      demand: L('Fewer seats than engineering or data and rarely entry-level; the realistic route is an adjacent function first.', 'Kursinya lebih sedikit daripada rekayasa atau data dan jarang untuk level awal; jalur realistisnya adalah fungsi yang berdekatan lebih dulu.')
    },
    design: {
      entry: [L('Junior product / UX designer', 'Junior product / UX designer'), L('UI designer', 'UI designer'), L('UX researcher (junior)', 'UX researcher (junior)')],
      ladder: [
        { t: L('Junior designer', 'Junior designer'), y: '0–2', s: L('Executes flows and screens within a design system; learns to take critique.', 'Mengerjakan alur dan layar dalam sistem desain; belajar menerima kritik.') },
        { t: L('Product designer', 'Product designer'), y: '2–5', s: L('Owns a product area end to end, from research to shipped interface.', 'Memegang satu area produk ujung ke ujung, dari riset hingga antarmuka yang dirilis.') },
        { t: L('Senior / lead designer', 'Senior / lead designer'), y: '5–8', s: L('Sets craft standards; runs the design system; shapes product decisions.', 'Menetapkan standar keahlian; menjalankan sistem desain; membentuk keputusan produk.') },
        { t: L('Head of design', 'Head of design'), y: '8+', s: L('Owns design across the company and the team that does it.', 'Memegang desain di seluruh perusahaan dan tim yang mengerjakannya.') }
      ],
      routes_in: [L('A portfolio of real or realistic work matters more than the degree.', 'Portofolio karya nyata atau realistis lebih penting daripada gelarnya.'), L('Agencies and studios as the training ground before in-house product teams.', 'Agensi dan studio sebagai tempat berlatih sebelum tim produk internal.'), L('Design bootcamps plus freelance projects.', 'Bootcamp desain plus proyek lepas.')],
      routes_out: [{ fn: 'product', why: L('Designers who want to own the outcome, not only the interface.', 'Desainer yang ingin memegang hasilnya, bukan hanya antarmukanya.') }, { fn: 'marketing', why: L('Brand and content design.', 'Desain merek dan konten.') }],
      skills: ['design-tools', 'user-research', 'visual-craft', 'communication', 'user-empathy'],
      adjacent: ['product', 'marketing', 'engineering'], track: '6.7',
      demand: L('Concentrated in platforms, fintechs, agencies and the digital arms of banks and telcos.', 'Terkonsentrasi di platform, fintech, agensi, dan divisi digital bank dan telko.')
    },
    marketing: {
      entry: [L('Marketing associate / executive', 'Marketing associate / executive'), L('Growth or performance analyst', 'Growth atau performance analyst'), L('Content / social media specialist', 'Content / social media specialist')],
      ladder: [
        { t: L('Executive / associate', 'Executive / associate'), y: '0–2', s: L('Runs channels and campaigns; learns to read cost per order, not views.', 'Menjalankan kanal dan kampanye; belajar membaca biaya per pesanan, bukan tayangan.') },
        { t: L('Marketing / brand / growth manager', 'Marketing / brand / growth manager'), y: '2–5', s: L('Owns a brand, product or channel budget and defends it with evidence.', 'Memegang anggaran merek, produk, atau kanal dan mempertahankannya dengan bukti.') },
        { t: L('Senior / group manager', 'Senior / group manager'), y: '5–8', s: L('Owns a portfolio; leads a team; sets the annual plan.', 'Memegang portofolio; memimpin tim; menyusun rencana tahunan.') },
        { t: L('Head of marketing / CMO', 'Head of marketing / CMO'), y: '8+', s: L('Owns brand, growth and the commercial narrative.', 'Memegang merek, pertumbuhan, dan narasi komersial.') }
      ],
      routes_in: [L('Management-trainee programmes at FMCG companies — the classic brand route.', 'Program management trainee di perusahaan FMCG — jalur merek klasik.'), L('Agencies for craft, then in-house for ownership.', 'Agensi untuk keahlian, lalu in-house untuk kepemilikan.'), L('Growth roles at platforms for people who like numbers as much as words.', 'Peran growth di platform bagi yang menyukai angka sebanyak kata.')],
      routes_out: [{ fn: 'commercial', why: L('Trade marketing and key accounts.', 'Trade marketing dan key account.') }, { fn: 'product', why: L('Growth marketing into growth product.', 'Growth marketing ke produk growth.') }, { fn: 'strategy', why: L('Brand strategy and general management.', 'Strategi merek dan manajemen umum.') }],
      skills: ['copywriting', 'channel-analytics', 'experimentation', 'consumer-insight', 'communication'],
      adjacent: ['commercial', 'product', 'design', 'data'], track: '6.10',
      demand: L('Every company with something to sell hires here; performance and content skills are in shortest supply.', 'Setiap perusahaan yang punya sesuatu untuk dijual merekrut di sini; keterampilan performa dan konten paling langka.')
    },
    finance: {
      entry: [L('Finance staff / analyst', 'Staf / analis keuangan'), L('Junior auditor / associate', 'Junior auditor / associate'), L('Investment banking analyst', 'Investment banking analyst')],
      ladder: [
        { t: L('Analyst / associate', 'Analyst / associate'), y: '0–3', s: L('Builds the models, closes the books, itemises every difference to zero.', 'Membangun model, menutup buku, merinci setiap selisih sampai nol.') },
        { t: L('Senior / supervisor', 'Senior / supervisor'), y: '3–5', s: L('Owns a ledger area, a client or a deal workstream; reviews juniors.', 'Memegang satu area buku besar, klien, atau alur kerja transaksi; meninjau junior.') },
        { t: L('Manager / finance manager', 'Manager / finance manager'), y: '5–8', s: L('Owns reporting or a client portfolio; the business asks what the numbers mean.', 'Memegang pelaporan atau portofolio klien; bisnis bertanya apa arti angkanya.') },
        { t: L('Controller / director / partner → CFO', 'Controller / director / partner → CFO'), y: '8+', s: L('Owns capital, control and the story told to investors.', 'Memegang modal, kontrol, dan cerita yang disampaikan ke investor.') }
      ],
      routes_in: [L('Accounting, finance or economics degree; professional credentials (CPA, CA, ACCA, CFA) are the currency of promotion.', 'Gelar akuntansi, keuangan, atau ekonomi; sertifikasi profesi (CPA, CA, ACCA, CFA) adalah mata uang promosi.'), L('Two to three years in audit, then in-house at a client — the most underrated route.', 'Dua-tiga tahun di audit, lalu ke dalam perusahaan klien — jalur yang paling diremehkan.'), L('Bank officer-development programmes.', 'Program officer development bank.')],
      routes_out: [{ fn: 'strategy', why: L('Corporate development and strategy.', 'Corporate development dan strategi.') }, { fn: 'data', why: L('FP&A into analytics.', 'FP&A ke analitik.') }, { fn: 'risk', why: L('Audit into risk and compliance.', 'Audit ke risiko dan kepatuhan.') }],
      skills: ['financial-modelling', 'accounting', 'reporting', 'valuation', 'sql-excel'],
      adjacent: ['risk', 'strategy', 'data', 'commercial'], track: '6.2',
      demand: L('The largest graduate intakes are in audit and banking; in-house finance hires steadily in every industry.', 'Rekrutmen lulusan baru terbesar ada di audit dan perbankan; keuangan internal merekrut stabil di setiap industri.')
    },
    operations: {
      entry: [L('Supply / demand planner', 'Supply / demand planner'), L('Operations or logistics coordinator', 'Koordinator operasi atau logistik'), L('Procurement analyst', 'Procurement analyst')],
      ladder: [
        { t: L('Analyst / coordinator', 'Analyst / coordinator'), y: '0–2', s: L('Keeps one process running; diagnoses before blaming; learns the numbers behind a shelf.', 'Menjaga satu proses tetap berjalan; mendiagnosis sebelum menyalahkan; mempelajari angka di balik sebuah rak.') },
        { t: L('Planner / buyer / supervisor', 'Planner / buyer / supervisor'), y: '2–5', s: L('Owns a category, a site or a lane; prices trade-offs; handles suppliers.', 'Memegang satu kategori, lokasi, atau jalur; menghitung kompromi; menangani pemasok.') },
        { t: L('Operations / supply-chain manager', 'Operations / supply-chain manager'), y: '5–8', s: L('Owns a network or a plant’s performance; designs the processes, not only runs them.', 'Memegang kinerja sebuah jaringan atau pabrik; merancang prosesnya, bukan hanya menjalankannya.') },
        { t: L('Head of operations / plant manager / COO', 'Head of operations / plant manager / COO'), y: '8+', s: L('Owns the promises the company keeps and what it costs to keep them.', 'Memegang janji yang ditepati perusahaan dan biaya untuk menepatinya.') }
      ],
      routes_in: [L('Industrial engineering, business or any degree via a management-trainee rotation.', 'Teknik industri, bisnis, atau gelar apa pun lewat rotasi management trainee.'), L('Platform operations (fleet, fulfilment, merchant ops) as the fastest-growing door.', 'Operasi platform (armada, pemenuhan pesanan, operasi merchant) sebagai pintu yang tumbuh paling cepat.'), L('Certifications (APICS / ASCM) valued for progression.', 'Sertifikasi (APICS / ASCM) dihargai untuk kenaikan jenjang.')],
      routes_out: [{ fn: 'strategy', why: L('The strongest route into general management.', 'Jalur terkuat ke manajemen umum.') }, { fn: 'product', why: L('Operations people who start fixing the tools.', 'Orang operasi yang mulai memperbaiki alatnya.') }, { fn: 'commercial', why: L('Procurement into commercial and key accounts.', 'Pengadaan ke komersial dan key account.') }],
      skills: ['planning', 'coordination', 'process-design', 'supplier-management', 'sql-excel'],
      adjacent: ['commercial', 'finance', 'data', 'product'], track: '6.11',
      demand: L('The largest hidden job market: every manufacturer, retailer, logistics firm, platform and hospital runs on it.', 'Pasar kerja tersembunyi terbesar: setiap pabrikan, peritel, perusahaan logistik, platform, dan rumah sakit berjalan di atasnya.')
    },
    commercial: {
      entry: [L('Account executive / sales executive', 'Account executive / sales executive'), L('Relationship officer (banking)', 'Relationship officer (perbankan)'), L('Business-development associate', 'Business-development associate')],
      ladder: [
        { t: L('Executive / officer', 'Executive / officer'), y: '0–2', s: L('Owns a territory or a portfolio; learns to listen before pitching.', 'Memegang satu wilayah atau portofolio; belajar mendengar sebelum menawarkan.') },
        { t: L('Key account / relationship manager', 'Key account / relationship manager'), y: '2–5', s: L('Owns the accounts that move the number; negotiates with authority.', 'Memegang akun-akun yang menggerakkan angka; bernegosiasi dengan wewenang.') },
        { t: L('Sales / area / regional manager', 'Sales / area / regional manager'), y: '5–8', s: L('Leads a team against a target; builds the pipeline discipline.', 'Memimpin tim mengejar target; membangun disiplin pipeline.') },
        { t: L('Head of sales / commercial director', 'Head of sales / commercial director'), y: '8+', s: L('Owns revenue and the channel strategy.', 'Memegang pendapatan dan strategi kanal.') }
      ],
      routes_in: [L('Any degree; the interview tests listening, resilience and arithmetic more than the transcript.', 'Gelar apa pun; wawancaranya menguji mendengar, ketahanan, dan hitung-hitungan lebih dari transkrip.'), L('Bank and FMCG trainee programmes with sales rotations.', 'Program trainee bank dan FMCG dengan rotasi penjualan.'), L('Inside sales and business development at B2B software as a modern entry.', 'Inside sales dan business development di perangkat lunak B2B sebagai pintu masuk modern.')],
      routes_out: [{ fn: 'marketing', why: L('Trade marketing and category management.', 'Trade marketing dan manajemen kategori.') }, { fn: 'strategy', why: L('Commercial strategy and general management.', 'Strategi komersial dan manajemen umum.') }, { fn: 'operations', why: L('Channel operations and distribution.', 'Operasi kanal dan distribusi.') }],
      skills: ['negotiation', 'pipeline-discipline', 'resilience', 'commercial-judgement', 'communication'],
      adjacent: ['marketing', 'operations', 'finance', 'people'], track: '6.10',
      demand: L('Always hiring; the fastest route to owning a number, and the one most people underrate.', 'Selalu merekrut; jalur tercepat untuk memegang sebuah angka, dan yang paling sering diremehkan orang.')
    },
    people: {
      entry: [L('HR / talent associate', 'HR / talent associate'), L('Recruiter (junior)', 'Recruiter (junior)'), L('Learning & development associate', 'Learning & development associate')],
      ladder: [
        { t: L('Associate', 'Associate'), y: '0–2', s: L('Runs recruiting or onboarding processes; learns confidentiality and fairness the hard way.', 'Menjalankan proses rekrutmen atau onboarding; mempelajari kerahasiaan dan keadilan dengan cara yang tidak mudah.') },
        { t: L('HR business partner / specialist', 'HR business partner / specialist'), y: '2–5', s: L('Advises managers; owns a function’s people decisions or a specialism.', 'Menasihati manajer; memegang keputusan SDM satu fungsi atau satu spesialisasi.') },
        { t: L('HR manager', 'HR manager'), y: '5–8', s: L('Owns people processes for a business unit; leads difficult conversations.', 'Memegang proses SDM satu unit bisnis; memimpin percakapan sulit.') },
        { t: L('Head of people / CHRO', 'Head of people / CHRO'), y: '8+', s: L('Owns culture, organisation design and leadership succession.', 'Memegang budaya, desain organisasi, dan suksesi kepemimpinan.') }
      ],
      routes_in: [L('Psychology, management or any degree with recruiting or organising experience.', 'Psikologi, manajemen, atau gelar apa pun dengan pengalaman merekrut atau mengorganisasi.'), L('Talent and recruitment firms as the training ground.', 'Firma talenta dan rekrutmen sebagai tempat berlatih.'), L('Trainee programmes with an HR rotation.', 'Program trainee dengan rotasi SDM.')],
      routes_out: [{ fn: 'strategy', why: L('Organisation and change consulting.', 'Konsultansi organisasi dan perubahan.') }, { fn: 'operations', why: L('People operations into business operations.', 'People operations ke operasi bisnis.') }],
      skills: ['people-judgement', 'facilitation', 'confidentiality', 'process-design', 'communication'],
      adjacent: ['operations', 'strategy', 'commercial'], track: null,
      demand: L('Hires in every organisation above a certain size; people analytics and talent acquisition are the growing corners.', 'Merekrut di setiap organisasi di atas ukuran tertentu; people analytics dan akuisisi talenta adalah sudut yang tumbuh.')
    },
    risk: {
      entry: [L('Junior auditor / associate', 'Junior auditor / associate'), L('Risk or compliance analyst', 'Analis risiko atau kepatuhan'), L('Internal audit staff', 'Staf audit internal')],
      ladder: [
        { t: L('Associate / analyst', 'Associate / analyst'), y: '0–3', s: L('Tests controls and documents findings that stand up to scrutiny.', 'Menguji kontrol dan mendokumentasikan temuan yang tahan diuji.') },
        { t: L('Senior', 'Senior'), y: '3–5', s: L('Leads fieldwork or a risk area; disagrees politely with power.', 'Memimpin pekerjaan lapangan atau satu area risiko; berbeda pendapat secara santun dengan atasan.') },
        { t: L('Manager', 'Manager'), y: '5–8', s: L('Owns a portfolio of engagements or the risk framework for a business line.', 'Memegang portofolio penugasan atau kerangka risiko satu lini bisnis.') },
        { t: L('Director / partner / chief risk officer', 'Director / partner / chief risk officer'), y: '8+', s: L('Owns what the organisation is allowed to do and how it proves it.', 'Memegang apa yang boleh dilakukan organisasi dan cara membuktikannya.') }
      ],
      routes_in: [L('Audit at the Big Four and mid-tier firms — the largest single graduate door in professional services.', 'Audit di Big Four dan firma menengah — pintu lulusan baru tunggal terbesar di jasa profesional.'), L('Bank trainee programmes with risk rotations.', 'Program trainee bank dengan rotasi risiko.'), L('Law or economics degrees into compliance.', 'Gelar hukum atau ekonomi ke kepatuhan.')],
      routes_out: [{ fn: 'finance', why: L('Audit into in-house finance.', 'Audit ke keuangan internal.') }, { fn: 'strategy', why: L('Risk advisory and consulting.', 'Advisory risiko dan konsultansi.') }, { fn: 'data', why: L('Model risk and fraud analytics.', 'Risiko model dan analitik fraud.') }],
      skills: ['evidence-testing', 'regulation-literacy', 'structured-writing', 'independence', 'accounting'],
      adjacent: ['finance', 'data', 'strategy'], track: '6.2',
      demand: L('Regulated industries never stop hiring here; the busy season is the trade-off to feel before signing up.', 'Industri teregulasi tidak pernah berhenti merekrut di sini; musim sibuk adalah kompromi yang perlu dirasakan sebelum mendaftar.')
    },
    strategy: {
      entry: [L('Business analyst / associate consultant', 'Business analyst / associate consultant'), L('Corporate strategy analyst', 'Corporate strategy analyst'), L('Technology consulting analyst', 'Technology consulting analyst')],
      ladder: [
        { t: L('Analyst / associate', 'Analyst / associate'), y: '0–2', s: L('Structures under the clock; builds the analysis; makes one slide say one thing.', 'Menyusun struktur di bawah tekanan waktu; membangun analisis; membuat satu slide menyampaikan satu hal.') },
        { t: L('Consultant / senior associate', 'Consultant / senior associate'), y: '2–4', s: L('Owns a workstream and the client relationship at working level.', 'Memegang satu alur kerja dan hubungan klien di tingkat operasional.') },
        { t: L('Engagement manager / project leader', 'Engagement manager / project leader'), y: '4–7', s: L('Runs the team and the answer; the ‘up or out’ clock is loudest here.', 'Menjalankan tim dan jawabannya; jam ‘naik atau keluar’ paling nyaring di sini.') },
        { t: L('Principal / partner — or head of strategy in-house', 'Principal / partner — atau head of strategy di dalam perusahaan'), y: '7+', s: L('Sells and owns the work; or leads strategy inside a company.', 'Menjual dan memegang pekerjaannya; atau memimpin strategi di dalam perusahaan.') }
      ],
      routes_in: [L('Strong academics plus case-interview preparation at strategy firms; broader intakes at Big Four and technology consulting.', 'Akademik kuat plus persiapan wawancara kasus di firma strategi; rekrutmen lebih luas di Big Four dan konsultansi teknologi.'), L('Internships that convert, and MBA hiring at the top firms.', 'Magang yang berlanjut, dan rekrutmen MBA di firma-firma teratas.'), L('In-house strategy teams at conglomerates, BUMNs and platforms — often after two years elsewhere.', 'Tim strategi internal di konglomerat, BUMN, dan platform — sering setelah dua tahun di tempat lain.')],
      routes_out: [{ fn: 'product', why: L('Consultants into product and operations at platforms.', 'Konsultan ke produk dan operasi di platform.') }, { fn: 'finance', why: L('Private equity and corporate development.', 'Private equity dan corporate development.') }, { fn: 'operations', why: L('General management routes.', 'Jalur manajemen umum.') }],
      skills: ['problem-structuring', 'slide-craft', 'market-sizing', 'communication', 'financial-modelling'],
      adjacent: ['finance', 'data', 'product', 'operations'], track: '6.4',
      demand: L('Small intakes at strategy firms, larger at the Big Four and technology consultancies; the exit routes are the real prize.', 'Rekrutmen kecil di firma strategi, lebih besar di Big Four dan konsultansi teknologi; jalur keluarnya adalah hadiah sebenarnya.')
    },
    trainee: {
      entry: [L('Management trainee', 'Management trainee'), L('Officer development programme (banking)', 'Officer development programme (perbankan)'), L('Graduate development programme', 'Graduate development programme')],
      ladder: [
        { t: L('Trainee', 'Trainee'), y: '0–1.5', s: L('Rotates through functions; delivers a project per rotation, presented upward.', 'Berotasi lintas fungsi; menyelesaikan satu proyek per rotasi, dipresentasikan ke atasan.') },
        { t: L('First placement (officer / executive / supervisor)', 'Penempatan pertama (officer / executive / supervisor)'), y: '1.5–3', s: L('Placed in the function that fit; expected to progress faster than direct hires.', 'Ditempatkan di fungsi yang cocok; diharapkan naik lebih cepat daripada rekrutan langsung.') },
        { t: L('Manager', 'Manager'), y: '3–6', s: L('Programme alumni typically reach first management earlier.', 'Alumni program biasanya mencapai jabatan manajerial pertama lebih awal.') },
        { t: L('Senior management', 'Manajemen senior'), y: '6+', s: L('The programme’s purpose: a bench of future leaders who know the whole company.', 'Tujuan programnya: cadangan pemimpin masa depan yang memahami seluruh perusahaan.') }
      ],
      routes_in: [L('Fresh graduates with strong academics and leadership signals; age and GPA caps are common and published.', 'Lulusan baru dengan akademik kuat dan sinyal kepemimpinan; batas usia dan IPK lazim dan dipublikasikan.'), L('Group case, panel interview and medical are typical stages — The Rope drills them.', 'Kasus kelompok, wawancara panel, dan tes kesehatan adalah tahap yang umum — The Rope melatihnya.'), L('BUMN joint recruitment (FHCI) for state-owned programmes.', 'Rekrutmen bersama BUMN (FHCI) untuk program milik negara.')],
      routes_out: [{ fn: 'commercial', why: L('The most common first placement.', 'Penempatan pertama yang paling umum.') }, { fn: 'operations', why: L('Plant, supply and branch roles.', 'Peran pabrik, pasokan, dan cabang.') }, { fn: 'finance', why: L('Finance and risk placements at banks.', 'Penempatan keuangan dan risiko di bank.') }],
      skills: ['learning-agility', 'adaptability', 'leadership-signals', 'communication', 'problem-structuring'],
      adjacent: ['commercial', 'operations', 'finance', 'marketing'], track: '6.6',
      demand: L('Concentrated in banks, FMCG, conglomerates and BUMNs; the front door for generalists who want breadth before depth.', 'Terkonsentrasi di bank, FMCG, konglomerat, dan BUMN; pintu depan bagi generalis yang ingin keluasan sebelum kedalaman.')
    }
  };

  /* ── per-industry relationships (editorial) ── */
  var INDUSTRIES = {
    'tech-ecommerce': { core: ['engineering', 'data', 'product'], common: ['design', 'marketing', 'operations', 'commercial'], track: '6.7', related: ['financial-services', 'media-gaming', 'telecom'],
      routes: L('Internships that convert, graduate programmes at the large platforms, and direct applications with a portfolio or take-home test. Roles are hired by scope, not fixed grades.', 'Magang yang berlanjut, program lulusan baru di platform besar, dan lamaran langsung dengan portofolio atau tes take-home. Peran direkrut berdasarkan lingkup, bukan jenjang tetap.'),
      moves: ['programming', 'sql-excel', 'experimentation', 'user-empathy'],
      note: L('Hiring follows funding cycles: intakes swing year to year, and the same skills are now hired by banks, telcos and conglomerates building their own technology.', 'Rekrutmen mengikuti siklus pendanaan: jumlahnya berayun dari tahun ke tahun, dan keterampilan yang sama kini direkrut bank, telko, dan konglomerat yang membangun teknologinya sendiri.') },
    'financial-services': { core: ['finance', 'risk', 'commercial', 'trainee'], common: ['data', 'engineering', 'product', 'operations'], track: '6.3', related: ['professional-services', 'tech-ecommerce'],
      routes: L('Officer-development and management-trainee programmes at banks; analyst intakes at investment banks, asset managers and insurers; engineering and data hires at fintechs and digital banks.', 'Program officer development dan management trainee di bank; rekrutmen analis di bank investasi, manajer aset, dan asuransi; rekrutmen rekayasa dan data di fintech dan bank digital.'),
      moves: ['financial-modelling', 'regulation-literacy', 'sql-excel', 'negotiation'],
      note: L('Several careers share one lobby: judging one counterparty deeply (credit, deals), designing for millions (retail, product) or keeping the system safe (risk, compliance). Age and GPA caps are common on trainee routes.', 'Beberapa karier berbagi satu lobi: menilai satu pihak secara mendalam (kredit, transaksi), merancang untuk jutaan orang (ritel, produk), atau menjaga sistem tetap aman (risiko, kepatuhan). Batas usia dan IPK lazim di jalur trainee.') },
    'fmcg-consumer': { core: ['marketing', 'commercial', 'operations', 'trainee'], common: ['finance', 'data', 'people'], track: '6.6', related: ['healthcare-pharma', 'tech-ecommerce', 'media-gaming'],
      routes: L('Management-trainee programmes with rotations across brand, sales and supply chain; direct sales and supply roles; agency experience for marketing.', 'Program management trainee dengan rotasi lintas merek, penjualan, dan rantai pasok; peran penjualan dan pasokan langsung; pengalaman agensi untuk pemasaran.'),
      moves: ['consumer-insight', 'negotiation', 'planning', 'commercial-judgement'],
      note: L('Marketing, sales and supply chain run as one machine; the pace never drops and a share point lost this month is on your desk on Monday. Both modern and traditional trade matter in Indonesia.', 'Pemasaran, penjualan, dan rantai pasok berjalan sebagai satu mesin; temponya tidak pernah turun dan satu poin pangsa yang hilang bulan ini ada di mejamu hari Senin. Modern trade dan traditional trade sama-sama penting di Indonesia.') },
    'professional-services': { core: ['strategy', 'risk', 'finance', 'data'], common: ['people', 'commercial', 'engineering'], track: '6.4', related: ['financial-services', 'tech-ecommerce', 'energy-industrials'],
      routes: L('Audit is the largest single graduate door; strategy firms hire few and test case interviews hard; technology and management consulting sit in between. Two years here opens doors everywhere.', 'Audit adalah pintu lulusan baru tunggal terbesar; firma strategi merekrut sedikit dan menguji wawancara kasus dengan keras; konsultansi teknologi dan manajemen ada di antaranya. Dua tahun di sini membuka pintu di mana-mana.'),
      moves: ['problem-structuring', 'evidence-testing', 'slide-craft', 'accounting'],
      note: L('The firms sell judgement by the hour and differ mainly in what kind; the busy season and the ‘up or out’ clock are the trade-offs. Exit routes into corporate strategy, finance and product are well trodden.', 'Firma-firma ini menjual penilaian per jam dan berbeda terutama pada jenisnya; musim sibuk dan jam ‘naik atau keluar’ adalah kompromi. Jalur keluar ke strategi korporat, keuangan, dan produk sudah lazim.') },
    'energy-industrials': { core: ['operations', 'engineering', 'finance', 'trainee'], common: ['commercial', 'strategy', 'people', 'data'], track: '6.11', related: ['professional-services', 'fmcg-consumer'],
      routes: L('Engineering and management-trainee programmes at conglomerates, BUMNs and manufacturers; BUMN joint recruitment for state-owned groups; operations and procurement hires at logistics firms.', 'Program rekayasa dan management trainee di konglomerat, BUMN, dan pabrikan; rekrutmen bersama BUMN untuk grup milik negara; rekrutmen operasi dan pengadaan di perusahaan logistik.'),
      moves: ['planning', 'process-design', 'supplier-management', 'financial-modelling'],
      note: L('The largest hidden job market on The Map: heavy operations, long careers and a strong route into general management, because operations people understand how the whole business works.', 'Pasar kerja tersembunyi terbesar di The Map: operasi berat, karier panjang, dan jalur kuat ke manajemen umum, karena orang operasi memahami cara seluruh bisnis bekerja.') },
    'healthcare-pharma': { core: ['operations', 'marketing', 'commercial'], common: ['finance', 'data', 'people', 'trainee'], track: '6.6', related: ['fmcg-consumer', 'professional-services'],
      routes: L('Management-trainee and medical-representative routes at pharmaceutical companies; operations and quality roles at manufacturers and hospital groups; data roles growing in both.', 'Jalur management trainee dan medical representative di perusahaan farmasi; peran operasi dan mutu di pabrikan dan grup rumah sakit; peran data tumbuh di keduanya.'),
      moves: ['regulation-literacy', 'planning', 'consumer-insight', 'communication'],
      note: L('Regulated products where quality and evidence decide: the work rewards precision, and commercial roles carry a compliance spine that FMCG does not.', 'Produk teregulasi tempat mutu dan bukti yang menentukan: pekerjaannya menghargai presisi, dan peran komersial membawa tulang punggung kepatuhan yang tidak dimiliki FMCG.') },
    'telecom': { core: ['engineering', 'data', 'marketing', 'trainee'], common: ['commercial', 'operations', 'product', 'finance'], track: '6.7', related: ['tech-ecommerce', 'media-gaming'],
      routes: L('Graduate and trainee programmes at the operators; network and digital-services engineering; data and marketing roles built on mass consumer bases.', 'Program lulusan baru dan trainee di operator; rekayasa jaringan dan layanan digital; peran data dan pemasaran yang dibangun di atas basis konsumen massal.'),
      moves: ['programming', 'sql-excel', 'channel-analytics', 'planning'],
      note: L('Large, stable employers with mass-market data and the digital arms of a technology company; progression is structured and slower than at platforms.', 'Perusahaan besar dan stabil dengan data pasar massal dan divisi digital layaknya perusahaan teknologi; kenaikan jenjangnya terstruktur dan lebih lambat daripada di platform.') },
    'media-gaming': { core: ['marketing', 'design', 'engineering'], common: ['commercial', 'product', 'data', 'strategy'], track: '6.10', related: ['tech-ecommerce', 'fmcg-consumer', 'telecom'],
      routes: L('Agencies and studios as the training ground; portfolios over transcripts; engineering and product hires at games and streaming companies.', 'Agensi dan studio sebagai tempat berlatih; portofolio di atas transkrip; rekrutmen rekayasa dan produk di perusahaan gim dan streaming.'),
      moves: ['copywriting', 'visual-craft', 'channel-analytics', 'programming'],
      note: L('Attention and craft decide; the work is visible and the hours are project-shaped. Agency years are the classic route into in-house brand and content roles everywhere else.', 'Perhatian dan keahlian yang menentukan; pekerjaannya terlihat dan jam kerjanya mengikuti proyek. Tahun-tahun di agensi adalah jalur klasik ke peran merek dan konten internal di mana pun.') },
    'travel-hospitality': { core: ['operations', 'commercial', 'marketing'], common: ['engineering', 'product', 'data', 'finance'], track: '6.11', related: ['tech-ecommerce', 'fmcg-consumer'],
      routes: L('Hotel management-trainee programmes; airline operations and engineering intakes; product, engineering and data roles at online travel platforms.', 'Program management trainee hotel; rekrutmen operasi dan rekayasa maskapai; peran produk, rekayasa, dan data di platform perjalanan daring.'),
      moves: ['coordination', 'planning', 'negotiation', 'experimentation'],
      note: L('Operations-heavy businesses built on service standards; demand swings with travel cycles, and the platforms hire like technology companies while the operators hire like industrials.', 'Bisnis padat operasi yang dibangun di atas standar layanan; permintaan berayun mengikuti siklus perjalanan, dan platformnya merekrut seperti perusahaan teknologi sementara operatornya merekrut seperti industri.') },
    'education': { core: ['product', 'marketing', 'commercial'], common: ['design', 'people', 'engineering', 'data'], track: null, related: ['tech-ecommerce', 'media-gaming'],
      routes: L('Product, content and growth roles at learning platforms; teaching and learning-design roles at schools and training companies; sales to institutions.', 'Peran produk, konten, dan growth di platform pembelajaran; peran pengajaran dan desain pembelajaran di sekolah dan perusahaan pelatihan; penjualan ke institusi.'),
      moves: ['user-empathy', 'copywriting', 'facilitation', 'experimentation'],
      note: L('Product, content and teaching quality meet; the companies are smaller and the missions clearer, and learning-design skills transfer into people functions everywhere.', 'Produk, konten, dan mutu pengajaran bertemu; perusahaannya lebih kecil dan misinya lebih jelas, dan keterampilan desain pembelajaran berpindah ke fungsi SDM di mana pun.') }
  };

  /* ── guide lexicon: plain-language interests and objectives → the model's vocabulary ──
     Each rule: re (EN + ID words) → tags (direction interest tags), fns, inds, geo, attrs (nudges). */
  var LEXICON = [
    { re: /\b(cod(e|ing)|software|programm|developer|engineer|app(s)?\b|website|backend|frontend|pemrograman|koding|perangkat lunak|aplikasi)/i, tags: ['technology', 'building'], fns: ['engineering'] },
    { re: /\b(data|analytic|statistic|dashboard|sql|excel|numbers?|angka|analisis|statistik)/i, tags: ['data', 'puzzles'], fns: ['data'], attrs: { analytical: 80 } },
    { re: /\b(product manag|roadmap|feature|user experience|produk)/i, tags: ['technology', 'strategy'], fns: ['product'] },
    { re: /\b(design|visual|ui\b|ux\b|interface|desain|grafis|ilustrasi)/i, tags: ['design', 'creating'], fns: ['design'], attrs: { creative: 80 } },
    { re: /\b(marketing|brand|content|social media|campaign|advertis|iklan|pemasaran|konten|merek|kampanye)/i, tags: ['media', 'creating', 'business'], fns: ['marketing'] },
    { re: /\b(sales|selling|negotiat|client|customer|account|jualan|penjualan|negosiasi|pelanggan|klien)/i, tags: ['people', 'business'], fns: ['commercial'], attrs: { people_facing: 80, commercial: 80 } },
    { re: /\b(financ|accounting|audit|invest|stocks?\b|equit|capital markets?|valuation|keuangan|akuntansi|investasi|saham|valuasi)/i, tags: ['numbers', 'markets'], fns: ['finance'], attrs: { analytical: 70, detail_oriented: 70 } },
    { re: /\b(banks?\b|banking|fintech|insur|asuransi|perbankan|lender|payments?\b|pembayaran)/i, inds: ['financial-services'] },
    { re: /\b(consult|strateg|problem.?solv|case|advis|konsultan|strategi|memecahkan masalah)/i, tags: ['strategy', 'puzzles'], fns: ['strategy'], inds: ['professional-services'], attrs: { analytical: 80, pace_intensity: 75 } },
    { re: /\b(operation|logistic|supply|warehouse|manufactur|process|logistik|rantai pasok|operasi|gudang|pabrik|proses)/i, tags: ['order', 'moving'], fns: ['operations'], attrs: { structured: 75 } },
    { re: /\b(hr\b|human resource|recruit|talent|people team|sdm|rekrut|talenta)/i, tags: ['people', 'teaching'], fns: ['people'], attrs: { people_facing: 80 } },
    { re: /\b(risk|compliance|control|fraud|regulat|risiko|kepatuhan|regulasi)/i, tags: ['protecting', 'order'], fns: ['risk'], attrs: { detail_oriented: 80, structured: 75 } },
    { re: /\b(trainee|graduate program|management program|rotation|odp\b|rotasi)/i, tags: ['business', 'people'], fns: ['trainee'] },
    { re: /\b(law|legal|lawyer|contract|hukum|pengacara|kontrak)/i, tags: ['protecting', 'order'], fns: ['risk'], attrs: { detail_oriented: 85 }, note: L('Law itself is not a Range direction yet — the closest mapped functions are risk, compliance and assurance; Module 6 track 6.5 simulates legal work directly.', 'Hukum sendiri belum menjadi arah di The Range — fungsi terdekat yang terpetakan adalah risiko, kepatuhan, dan asurans; jalur 6.5 di Modul 6 mensimulasikan pekerjaan hukum secara langsung.') },
    { re: /\b(teach|educat|learning|training|mentor|mengajar|pendidikan|pelatihan)/i, tags: ['teaching', 'people'], inds: ['education'] },
    { re: /\b(health|medical|pharma|hospital|kesehatan|medis|farmasi|rumah sakit)/i, inds: ['healthcare-pharma'] },
    { re: /\b(start.?up|tech compan|e-?commerce|platform|marketplace|gojek|grab|shopee|tokopedia|teknologi)/i, tags: ['technology'], inds: ['tech-ecommerce'] },
    { re: /\b(fmcg|consumer goods|retail|unilever|indofood|barang konsumen|ritel)/i, inds: ['fmcg-consumer'] },
    { re: /\b(energy|mining|oil|gas|industrial|manufacturing|conglomerate|energi|tambang|minyak|industri|konglomerat)/i, inds: ['energy-industrials'] },
    { re: /\b(telco|telecom|telkom|network operator|telekomunikasi)/i, inds: ['telecom'] },
    { re: /\b(media|gam(e|ing)|entertainment|film|music|studio|creative industr|hiburan|gim)/i, tags: ['media', 'creating'], inds: ['media-gaming'] },
    { re: /\b(travel|hotel|airline|tourism|hospitality|perjalanan|pariwisata|maskapai|perhotelan)/i, inds: ['travel-hospitality'] },
    { re: /\b(abroad|international|overseas|global|singapore|remote|luar negeri|internasional|global)/i, geo: 'intl' },
    { re: /\b(indonesia|jakarta|bandung|surabaya|lokal|local|bumn|state.?owned)/i, geo: 'id' },
    { re: /\b(bumn|state.?owned|government|civil service|pemerintah|pns)/i, bumn: true },
    { re: /\b(stable|stability|secure|security|safe|long.?term|steady|aman|stabil|jangka panjang)/i, attrs: { structured: 75, pace_intensity: 35, ambiguity_tolerant: 35 }, obj: 'stability' },
    { re: /\b(fast|quick|grow|growth|ambiti|challeng|intense|cepat|tumbuh|ambisi|tantangan|intens)/i, attrs: { pace_intensity: 80, ambiguity_tolerant: 70 }, obj: 'growth' },
    { re: /\b(creativ|create|make things|build things|imagin|kreatif|mencipta|membuat)/i, attrs: { creative: 80 }, tags: ['creating'] },
    { re: /\b(independen|autonom|on my own|freelance|mandiri|sendiri)/i, attrs: { autonomous: 80 } },
    { re: /\b(detail|precis|accura|thorough|teliti|presisi|akurat|cermat)/i, attrs: { detail_oriented: 85 } },
    { re: /\b(lead|leadership|manage people|team lead|memimpin|kepemimpinan|mengelola tim)/i, attrs: { people_facing: 70 }, obj: 'leadership' },
    { re: /\b(money|salary|pay|earn|rich|wealth|gaji|uang|penghasilan|kaya)/i, attrs: { commercial: 70 }, obj: 'pay', note: L('We do not publish salary figures — no source we could defend. Directions below are matched on the work itself; compensation links go to third-party sites.', 'Kami tidak menampilkan angka gaji — tidak ada sumber yang bisa kami pertanggungjawabkan. Arah di bawah dicocokkan pada pekerjaannya sendiri; tautan kompensasi mengarah ke situs pihak ketiga.') },
    { re: /\b(impact|society|community|purpose|meaning|public good|dampak|masyarakat|makna|sosial)/i, tags: ['teaching', 'protecting'], obj: 'impact' },
    { re: /\b(balance|work.?life|family|flexible|keseimbangan|keluarga|fleksibel)/i, attrs: { pace_intensity: 30 }, obj: 'balance' },
    { re: /\b(people|helping|talk|social|communicat|orang|membantu|berbicara|komunikasi)/i, attrs: { people_facing: 80 }, tags: ['people'] },
    { re: /\b(research|investigat|curious|learn|deep|riset|meneliti|penasaran|mendalam)/i, tags: ['research', 'puzzles'], attrs: { analytical: 75 } },
    { re: /\b(technical|deep tech|engineering depth|hardcore|teknis)/i, attrs: { technical_depth: 85 }, obj: 'depth' }
  ];

  /* objective chips: the goals people actually name, as attribute nudges the fit model understands */
  var OBJECTIVES = [
    { id: 'growth', label: L('Fast growth & steep learning', 'Tumbuh cepat & belajar terjal'), attrs: { pace_intensity: 80, ambiguity_tolerant: 70 }, tags: ['strategy', 'technology'] },
    { id: 'stability', label: L('Stability & a long runway', 'Stabilitas & landasan panjang'), attrs: { structured: 75, pace_intensity: 35 }, inds: ['financial-services', 'energy-industrials', 'telecom'] },
    { id: 'international', label: L('International exposure', 'Paparan internasional'), geo: 'intl', tags: ['markets'] },
    { id: 'leadership', label: L('Leading people early', 'Memimpin orang sejak awal'), attrs: { people_facing: 75, commercial: 60 }, fns: ['trainee', 'commercial', 'operations'] },
    { id: 'depth', label: L('Deep technical mastery', 'Penguasaan teknis mendalam'), attrs: { technical_depth: 90, autonomous: 65 }, fns: ['engineering', 'data'] },
    { id: 'creative', label: L('Creative work that ships', 'Karya kreatif yang dirilis'), attrs: { creative: 85 }, fns: ['design', 'marketing'] },
    { id: 'impact', label: L('Visible impact on people', 'Dampak nyata pada orang'), attrs: { people_facing: 70 }, tags: ['teaching', 'protecting', 'people'] },
    { id: 'balance', label: L('Sustainable pace', 'Tempo yang berkelanjutan'), attrs: { pace_intensity: 30, structured: 65 } }
  ];
  var INTERESTS = [
    ['technology', L('Technology', 'Teknologi')], ['building', L('Building things', 'Membangun sesuatu')], ['puzzles', L('Puzzles', 'Teka-teki')], ['data', L('Data', 'Data')], ['research', L('Research', 'Riset')],
    ['strategy', L('Strategy', 'Strategi')], ['people', L('People', 'Orang')], ['design', L('Design', 'Desain')], ['media', L('Media & content', 'Media & konten')], ['creating', L('Creating', 'Mencipta')],
    ['business', L('Business', 'Bisnis')], ['numbers', L('Numbers', 'Angka')], ['markets', L('Markets', 'Pasar')], ['order', L('Order & systems', 'Keteraturan & sistem')], ['protecting', L('Protecting', 'Melindungi')],
    ['moving', L('Moving things', 'Menggerakkan barang')], ['teaching', L('Teaching', 'Mengajar')]
  ];

  return { SKILLS: SKILLS, FUNCTIONS: FUNCTIONS, INDUSTRIES: INDUSTRIES, LEXICON: LEXICON, OBJECTIVES: OBJECTIVES, INTERESTS: INTERESTS };
})();
