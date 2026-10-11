/**
 * THE RANGE — ROLE COPY BY FUNCTION × INDUSTRY (editorial)
 * --------------------------------------------------------
 * The twelve function profiles in range-app.js (FN_META) describe a function
 * in general. A finance analyst at a bank, a mining group and a hotel chain
 * do different work, so every company page and opportunity view first looks
 * here for the (function | industry) pair and falls back to the generic
 * profile only when no pair exists.
 *
 * Everything below is editorial reading of what the function typically does
 * in that industry — never a claim about a specific employer. Keep that line:
 * no programme names, no figures, no company facts.
 *
 * Industry process notes (NOTES) are rendered under "How they typically
 * hire" with the same "our reading" label as the stage list.
 */
window.MT_RANGE_FNIND = (function () {
  'use strict';
  var P = function (en, id) { return { en: en, id: id }; };
  var X = {};
  function def(fn, ind, profile, resp) { X[fn + '|' + ind] = { profile: profile, resp: resp }; }

  /* ───────── financial services ───────── */
  def('trainee', 'financial-services',
    P('Graduates who want to see credit, branch, treasury and risk before choosing one — and can live with a bond and a posting.', 'Lulusan baru yang ingin melihat kredit, cabang, treasury, dan risiko sebelum memilih satu — dan siap dengan ikatan dinas serta penempatan.'),
    [P('Rotate through branch, credit analysis, operations and a head-office function on a fixed schedule', 'Berotasi melalui cabang, analisis kredit, operasional, dan satu fungsi kantor pusat sesuai jadwal tetap'),
     P('Write credit memos and present them to a committee that will push back', 'Menyusun memo kredit dan mempresentasikannya ke komite yang akan menguji'),
     P('Finish with a placement decided by the bank, often outside Jakarta', 'Berakhir dengan penempatan yang ditentukan bank, sering di luar Jakarta')]);
  def('commercial', 'financial-services',
    P('People who can earn trust around money — relationship managers who read a balance sheet and a person at the same time.', 'Orang yang bisa membangun kepercayaan soal uang — relationship manager yang membaca neraca dan orang sekaligus.'),
    [P('Grow a book of corporate, SME or affluent clients against monthly funding and lending targets', 'Menumbuhkan portofolio klien korporat, UKM, atau affluent terhadap target pendanaan dan pinjaman bulanan'),
     P('Structure a facility with credit, then defend it to the client and the committee', 'Menyusun fasilitas bersama tim kredit, lalu mempertahankannya di depan klien dan komite'),
     P('Cross-sell deposits, cash management, insurance and investment products', 'Menjual silang deposito, cash management, asuransi, dan produk investasi')]);
  def('finance', 'financial-services',
    P('People who like numbers that are the product, not the back office — where reporting, capital and liquidity are the business itself.', 'Orang yang menyukai angka sebagai produk, bukan back office — di mana pelaporan, modal, dan likuiditas adalah bisnisnya sendiri.'),
    [P('Produce regulatory and management reporting under OJK and Bank Indonesia timelines', 'Menyusun pelaporan regulasi dan manajemen sesuai tenggat OJK dan Bank Indonesia'),
     P('Model capital, liquidity and funding costs; support ALCO and budgeting', 'Memodelkan modal, likuiditas, dan biaya dana; mendukung ALCO dan penganggaran'),
     P('Analyse product and branch profitability for business heads', 'Menganalisis profitabilitas produk dan cabang untuk pimpinan bisnis')]);
  def('risk', 'financial-services',
    P('People who are comfortable saying no to revenue with a written reason — credit, market, operational and compliance risk are careers here, not committees.', 'Orang yang nyaman menolak pendapatan dengan alasan tertulis — risiko kredit, pasar, operasional, dan kepatuhan adalah karier di sini, bukan sekadar komite.'),
    [P('Review credit proposals, set limits and monitor early-warning signals in the portfolio', 'Meninjau proposal kredit, menetapkan limit, dan memantau sinyal peringatan dini portofolio'),
     P('Run compliance, AML/KYC and audit cycles against OJK regulation', 'Menjalankan siklus kepatuhan, AML/KYC, dan audit sesuai regulasi OJK'),
     P('Build and validate scorecards, stress tests and risk reporting', 'Membangun dan memvalidasi scorecard, stress test, dan pelaporan risiko')]);
  def('data', 'financial-services',
    P('Analysts who like the stakes of regulated data — every number feeds a credit decision, a fraud rule or a regulator.', 'Analis yang menyukai taruhan data teregulasi — setiap angka memberi makan keputusan kredit, aturan fraud, atau regulator.'),
    [P('Build credit, fraud and churn models and the dashboards that watch them', 'Membangun model kredit, fraud, dan churn beserta dasbor yang memantaunya'),
     P('Reconcile data across core banking, cards and digital channels', 'Merekonsiliasi data lintas core banking, kartu, dan kanal digital'),
     P('Answer product and risk questions with analysis that can be audited', 'Menjawab pertanyaan produk dan risiko dengan analisis yang bisa diaudit')]);
  def('strategy', 'financial-services',
    P('Generalists who want the view from the executive floor — digital strategy, partnerships and the business cases behind new products.', 'Generalis yang ingin melihat dari lantai eksekutif — strategi digital, kemitraan, dan business case di balik produk baru.'),
    [P('Build business cases for new products, segments and digital initiatives', 'Menyusun business case untuk produk, segmen, dan inisiatif digital baru'),
     P('Run strategic planning cycles and board material with finance', 'Menjalankan siklus perencanaan strategis dan materi dewan bersama finance'),
     P('Assess partnerships, fintech deals and market entry', 'Menilai kemitraan, kesepakatan fintech, dan masuk pasar')]);
  def('engineering', 'financial-services',
    P('Engineers who accept that uptime and audit trails matter as much as features — payments, mobile banking and core systems never sleep.', 'Insinyur yang menerima bahwa uptime dan jejak audit sama pentingnya dengan fitur — pembayaran, mobile banking, dan sistem inti tidak pernah tidur.'),
    [P('Build and maintain mobile banking, payment rails and APIs with strict change control', 'Membangun dan memelihara mobile banking, jalur pembayaran, dan API dengan kontrol perubahan ketat'),
     P('Integrate with core banking, switching and partner systems', 'Mengintegrasikan dengan core banking, switching, dan sistem mitra'),
     P('Meet security, availability and regulatory requirements on every release', 'Memenuhi persyaratan keamanan, ketersediaan, dan regulasi pada setiap rilis')]);
  def('product', 'financial-services',
    P('Product people who can hold regulation, risk appetite and a consumer app in one head.', 'Orang produk yang bisa memegang regulasi, selera risiko, dan aplikasi konsumen dalam satu kepala.'),
    [P('Own a lending, payments or wealth journey from onboarding to collections', 'Memegang perjalanan pinjaman, pembayaran, atau wealth dari onboarding hingga penagihan'),
     P('Work with risk and compliance to ship features that pass review', 'Bekerja bersama risiko dan kepatuhan agar fitur lolos tinjauan'),
     P('Measure activation, funding and default alongside engagement', 'Mengukur aktivasi, pendanaan, dan gagal bayar di samping engagement')]);

  /* ───────── technology & e-commerce ───────── */
  def('engineering', 'tech-ecommerce',
    P('People who like shipping to millions of users and reading the graphs afterwards — scale, speed and on-call are part of the job.', 'Orang yang suka merilis ke jutaan pengguna dan membaca grafiknya setelah itu — skala, kecepatan, dan on-call adalah bagian pekerjaan.'),
    [P('Ship features through a weekly or daily release train with automated tests', 'Merilis fitur lewat jalur rilis mingguan atau harian dengan tes otomatis'),
     P('Own a service end-to-end: performance, incidents and cost at scale', 'Memegang satu layanan ujung ke ujung: performa, insiden, dan biaya pada skala besar'),
     P('Run experiments with product and data, then roll out or roll back', 'Menjalankan eksperimen bersama produk dan data, lalu meluncurkan atau membatalkan')]);
  def('data', 'tech-ecommerce',
    P('Analysts who want experiments, funnels and the fastest feedback loop on The Map.', 'Analis yang menginginkan eksperimen, funnel, dan putaran umpan balik tercepat di The Map.'),
    [P('Design and read A/B tests for growth, search and checkout', 'Merancang dan membaca uji A/B untuk growth, pencarian, dan checkout'),
     P('Build metrics layers and dashboards product teams argue from', 'Membangun lapisan metrik dan dasbor yang menjadi dasar perdebatan tim produk'),
     P('Model demand, pricing and recommendations with data science teams', 'Memodelkan permintaan, harga, dan rekomendasi bersama tim data science')]);
  def('product', 'tech-ecommerce',
    P('Generalists who like owning a number — conversion, retention, take rate — and the roadmap that moves it.', 'Generalis yang suka memegang satu angka — konversi, retensi, take rate — dan roadmap yang menggerakkannya.'),
    [P('Own a surface of the app or marketplace with a weekly metric review', 'Memegang satu bagian aplikasi atau marketplace dengan tinjauan metrik mingguan'),
     P('Write specs, run experiments and prioritise a backlog with engineering and design', 'Menulis spesifikasi, menjalankan eksperimen, dan memprioritaskan backlog bersama engineering dan desain'),
     P('Balance buyers, sellers, drivers or merchants on the same platform', 'Menyeimbangkan pembeli, penjual, pengemudi, atau merchant di platform yang sama')]);
  def('design', 'tech-ecommerce',
    P('Designers who want their work in millions of hands and tested the same week.', 'Desainer yang ingin karyanya di jutaan tangan dan diuji pada minggu yang sama.'),
    [P('Design flows for onboarding, search, checkout and payments across Android-first users', 'Merancang alur onboarding, pencarian, checkout, dan pembayaran untuk pengguna yang mayoritas Android'),
     P('Run usability tests and ship through a design system', 'Menjalankan uji kegunaan dan merilis lewat sistem desain'),
     P('Measure designs with product and data, not only with critique', 'Mengukur desain bersama produk dan data, bukan hanya dengan kritik')]);
  def('marketing', 'tech-ecommerce',
    P('Marketers who like performance budgets, campaigns that change hourly and a dashboard that tells the truth.', 'Pemasar yang menyukai anggaran performa, kampanye yang berubah tiap jam, dan dasbor yang berkata jujur.'),
    [P('Run performance, CRM and campaign calendars (twin dates, payday, Ramadan)', 'Menjalankan performa, CRM, dan kalender kampanye (tanggal kembar, gajian, Ramadan)'),
     P('Manage vouchers, partnerships and creator programmes against CAC and ROI', 'Mengelola voucher, kemitraan, dan program kreator terhadap CAC dan ROI'),
     P('Work with product on growth loops rather than only on ads', 'Bekerja bersama produk pada growth loop, bukan hanya iklan')]);
  def('operations', 'tech-ecommerce',
    P('People who like the physical side of digital — warehouses, riders, merchants and the metrics that keep them moving.', 'Orang yang menyukai sisi fisik dari digital — gudang, kurir, merchant, dan metrik yang menjaganya terus bergerak.'),
    [P('Run fulfilment, logistics or merchant operations against SLA dashboards', 'Menjalankan operasi pemenuhan, logistik, atau merchant terhadap dasbor SLA'),
     P('Manage on-the-ground partners, agents and city teams', 'Mengelola mitra lapangan, agen, dan tim kota'),
     P('Design processes and tooling with product to remove the bottleneck of the week', 'Merancang proses dan alat bersama produk untuk menghapus hambatan minggu ini')]);
  def('commercial', 'tech-ecommerce',
    P('Sellers who like a pipeline of merchants, brands or enterprise accounts and a platform behind them.', 'Penjual yang menyukai pipeline merchant, merek, atau akun enterprise dengan platform di belakangnya.'),
    [P('Acquire and grow merchants, brands or advertisers on the platform', 'Mengakuisisi dan menumbuhkan merchant, merek, atau pengiklan di platform'),
     P('Negotiate campaigns, commissions and exclusives with category teams', 'Menegosiasikan kampanye, komisi, dan eksklusivitas bersama tim kategori'),
     P('Report GMV, take rate and account health weekly', 'Melaporkan GMV, take rate, dan kesehatan akun setiap minggu')]);

  /* ───────── FMCG & consumer ───────── */
  def('marketing', 'fmcg-consumer',
    P('Brand people who want to own a P&L line and see it on a shelf, a billboard and a cart this week.', 'Orang merek yang ingin memegang satu baris P&L dan melihatnya di rak, papan reklame, dan keranjang pekan ini.'),
    [P('Own a brand or category plan: positioning, innovation, pricing and media', 'Memegang rencana merek atau kategori: positioning, inovasi, harga, dan media'),
     P('Brief agencies and read consumer research, then defend the launch to sales', 'Memberi brief agensi dan membaca riset konsumen, lalu mempertahankan peluncuran di depan tim penjualan'),
     P('Track share, distribution and campaign ROI against the annual plan', 'Melacak pangsa, distribusi, dan ROI kampanye terhadap rencana tahunan')]);
  def('commercial', 'fmcg-consumer',
    P('People who like territories, distributors and targets you can see in a store — modern and traditional trade both count in Indonesia.', 'Orang yang menyukai wilayah, distributor, dan target yang bisa dilihat di toko — modern trade dan traditional trade sama-sama berarti di Indonesia.'),
    [P('Manage key accounts or a distributor territory against monthly sell-in and sell-out', 'Mengelola key account atau wilayah distributor terhadap sell-in dan sell-out bulanan'),
     P('Negotiate listings, promotions and shelf space with retailers', 'Menegosiasikan listing, promosi, dan ruang rak dengan peritel'),
     P('Coach field teams and merchandisers across hundreds of outlets', 'Membina tim lapangan dan merchandiser di ratusan outlet')]);
  def('operations', 'fmcg-consumer',
    P('Planners and plant people who like a machine that never stops — demand, factories and distribution in one chain.', 'Perencana dan orang pabrik yang menyukai mesin yang tak pernah berhenti — permintaan, pabrik, dan distribusi dalam satu rantai.'),
    [P('Plan demand and supply with sales and marketing in a monthly S&OP cycle', 'Merencanakan permintaan dan pasokan bersama sales dan marketing dalam siklus S&OP bulanan'),
     P('Run production, quality or warehouse operations against cost and service targets', 'Menjalankan operasi produksi, mutu, atau gudang terhadap target biaya dan layanan'),
     P('Manage suppliers, packaging and distributors across a national network', 'Mengelola pemasok, kemasan, dan distributor di jaringan nasional')]);
  def('finance', 'fmcg-consumer',
    P('People who want finance close to the product — trade spend, factory cost and brand profitability rather than just the ledger.', 'Orang yang ingin finance dekat dengan produk — trade spend, biaya pabrik, dan profitabilitas merek, bukan hanya buku besar.'),
    [P('Partner brand and sales teams on pricing, promotions and trade-spend ROI', 'Bermitra dengan tim merek dan penjualan soal harga, promosi, dan ROI trade spend'),
     P('Run factory and supply-chain costing and the monthly close', 'Menjalankan costing pabrik dan rantai pasok serta tutup buku bulanan'),
     P('Build the annual plan and forecasts with commercial leadership', 'Menyusun rencana tahunan dan proyeksi bersama pimpinan komersial')]);
  def('data', 'fmcg-consumer',
    P('Analysts who like consumer and retail data — panels, sell-out and promotions — and can translate them for brand and sales teams.', 'Analis yang menyukai data konsumen dan ritel — panel, sell-out, dan promosi — dan bisa menerjemahkannya untuk tim merek dan penjualan.'),
    [P('Analyse retail-audit, panel and distributor data for share and distribution', 'Menganalisis data retail audit, panel, dan distributor untuk pangsa dan distribusi'),
     P('Measure promotion and media effectiveness; build revenue-management models', 'Mengukur efektivitas promosi dan media; membangun model revenue management'),
     P('Automate the reporting that brand and sales meetings run on', 'Mengotomatiskan pelaporan yang menjadi dasar rapat merek dan penjualan')]);
  def('trainee', 'fmcg-consumer',
    P('Graduates who want brand, sales and supply chain in one programme and can take a field posting before head office.', 'Lulusan baru yang menginginkan merek, penjualan, dan rantai pasok dalam satu program dan siap ditempatkan di lapangan sebelum kantor pusat.'),
    [P('Rotate through sales territories, a plant or warehouse, and a brand team', 'Berotasi melalui wilayah penjualan, pabrik atau gudang, dan tim merek'),
     P('Deliver a business project per rotation, presented to leadership', 'Menyelesaikan proyek bisnis per rotasi, dipresentasikan ke pimpinan'),
     P('Earn a first management role on the strength of the rotations', 'Meraih peran manajerial pertama berkat hasil rotasi')]);

  /* ───────── healthcare & pharma ───────── */
  def('operations', 'healthcare-pharma',
    P('People who want quality and evidence to be the job — GMP, regulators and patients are all on the line.', 'Orang yang ingin mutu dan bukti menjadi pekerjaannya — GMP, regulator, dan pasien semua dipertaruhkan.'),
    [P('Run manufacturing, quality assurance or supply chain under GMP and BPOM requirements', 'Menjalankan manufaktur, penjaminan mutu, atau rantai pasok sesuai GMP dan persyaratan BPOM'),
     P('Manage cold chain, batch release and audits', 'Mengelola rantai dingin, pelepasan batch, dan audit'),
     P('Coordinate hospital or clinic operations against safety and service standards', 'Mengoordinasikan operasi rumah sakit atau klinik terhadap standar keselamatan dan layanan')]);
  def('data', 'healthcare-pharma',
    P('Analysts who like data with a compliance spine — prescriptions, outcomes and claims rather than clicks.', 'Analis yang menyukai data dengan tulang punggung kepatuhan — resep, luaran, dan klaim, bukan klik.'),
    [P('Analyse prescription, sales-force and market data for brand and medical teams', 'Menganalisis data resep, tenaga penjualan, dan pasar untuk tim merek dan medis'),
     P('Build clinical, claims or hospital dashboards with strict data governance', 'Membangun dasbor klinis, klaim, atau rumah sakit dengan tata kelola data ketat'),
     P('Support health-economics and real-world evidence studies', 'Mendukung studi ekonomi kesehatan dan real-world evidence')]);
  def('marketing', 'healthcare-pharma',
    P('Marketers who can sell on evidence inside a regulated code of conduct — doctors, pharmacists and patients each need a different story.', 'Pemasar yang bisa menjual berdasarkan bukti di dalam kode etik teregulasi — dokter, apoteker, dan pasien masing-masing butuh cerita berbeda.'),
    [P('Own a brand plan for prescription or consumer-health products within promotional regulation', 'Memegang rencana merek untuk produk resep atau consumer health dalam regulasi promosi'),
     P('Build medical-education programmes and key-opinion-leader relationships', 'Membangun program edukasi medis dan hubungan dengan key opinion leader'),
     P('Work with medical and regulatory affairs on every claim', 'Bekerja bersama medical dan regulatory affairs untuk setiap klaim')]);
  def('finance', 'healthcare-pharma',
    P('Finance people who like long product cycles, regulated pricing and tenders — the numbers move slowly and matter a lot.', 'Orang finance yang menyukai siklus produk panjang, harga teregulasi, dan tender — angkanya bergerak lambat dan sangat berarti.'),
    [P('Model product profitability under tender and reimbursement pricing', 'Memodelkan profitabilitas produk di bawah harga tender dan penggantian biaya'),
     P('Run plant costing, inventory valuation and the monthly close', 'Menjalankan costing pabrik, valuasi persediaan, dan tutup buku bulanan'),
     P('Support hospital or distribution budgets and capital projects', 'Mendukung anggaran rumah sakit atau distribusi dan proyek modal')]);
  def('engineering', 'healthcare-pharma',
    P('Engineers who want devices, hospital systems or validated software — regulated releases, not weekly deploys.', 'Insinyur yang menginginkan perangkat, sistem rumah sakit, atau perangkat lunak tervalidasi — rilis teregulasi, bukan deploy mingguan.'),
    [P('Build and validate medical-device, hospital-information or telehealth systems', 'Membangun dan memvalidasi sistem perangkat medis, informasi rumah sakit, atau telehealth'),
     P('Document every change for quality and regulatory review', 'Mendokumentasikan setiap perubahan untuk tinjauan mutu dan regulasi'),
     P('Support biomedical, laboratory or production equipment', 'Mendukung peralatan biomedis, laboratorium, atau produksi')]);
  def('people', 'healthcare-pharma',
    P('People professionals who can staff a 24-hour operation — nurses, specialists and shift rosters are the workforce question.', 'Profesional SDM yang bisa mengisi operasi 24 jam — perawat, spesialis, dan jadwal shift adalah persoalan tenaga kerjanya.'),
    [P('Recruit clinical and technical staff in a scarce market', 'Merekrut staf klinis dan teknis di pasar yang langka'),
     P('Run credentialing, training and compliance programmes', 'Menjalankan program kredensial, pelatihan, dan kepatuhan'),
     P('Design rosters, retention and development for shift-based teams', 'Merancang roster, retensi, dan pengembangan untuk tim berbasis shift')]);
  def('trainee', 'healthcare-pharma',
    P('Graduates, often from pharmacy or life sciences, who want commercial, medical and operations exposure before specialising.', 'Lulusan baru, sering dari farmasi atau ilmu hayati, yang ingin mencicipi komersial, medis, dan operasi sebelum berspesialisasi.'),
    [P('Rotate through sales, marketing, regulatory and supply chain', 'Berotasi melalui penjualan, pemasaran, regulasi, dan rantai pasok'),
     P('Shadow medical representatives and hospital tenders in the field', 'Mendampingi medical representative dan tender rumah sakit di lapangan'),
     P('Deliver a rotation project to leadership before placement', 'Menyelesaikan proyek rotasi untuk pimpinan sebelum penempatan')]);

  /* ───────── energy & industrials ───────── */
  def('engineering', 'energy-industrials',
    P('Engineers who want plants, sites and physical systems — process, mechanical, electrical and mining engineering with HSE in every decision.', 'Insinyur yang menginginkan pabrik, lokasi, dan sistem fisik — rekayasa proses, mesin, listrik, dan tambang dengan HSE dalam setiap keputusan.'),
    [P('Operate, maintain and improve plant, mine or grid assets against safety and reliability targets', 'Mengoperasikan, memelihara, dan meningkatkan aset pabrik, tambang, atau jaringan terhadap target keselamatan dan keandalan'),
     P('Run shutdowns, projects and contractors on site', 'Menjalankan shutdown, proyek, dan kontraktor di lokasi'),
     P('Accept rotation and remote postings early in the career', 'Menerima rotasi dan penempatan terpencil di awal karier')]);
  def('operations', 'energy-industrials',
    P('People who like heavy operations and visible output — production, logistics and procurement at national scale.', 'Orang yang menyukai operasi berat dan hasil yang terlihat — produksi, logistik, dan pengadaan pada skala nasional.'),
    [P('Plan and run production, port or fleet operations against volume and cost', 'Merencanakan dan menjalankan operasi produksi, pelabuhan, atau armada terhadap volume dan biaya'),
     P('Manage procurement, contractors and inventories for continuous operations', 'Mengelola pengadaan, kontraktor, dan persediaan untuk operasi berkelanjutan'),
     P('Lead shift teams and HSE routines on site', 'Memimpin tim shift dan rutinitas HSE di lokasi')]);
  def('finance', 'energy-industrials',
    P('Finance people who like capital projects, commodity prices and long horizons — the balance sheet is made of plants and reserves.', 'Orang finance yang menyukai proyek modal, harga komoditas, dan horizon panjang — neracanya terbuat dari pabrik dan cadangan.'),
    [P('Evaluate capital projects and asset investments with engineering teams', 'Mengevaluasi proyek modal dan investasi aset bersama tim rekayasa'),
     P('Manage project accounting, cost control and commodity hedging', 'Mengelola akuntansi proyek, pengendalian biaya, dan lindung nilai komoditas'),
     P('Support BUMN or group reporting and budgeting cycles', 'Mendukung siklus pelaporan dan penganggaran BUMN atau grup')]);
  def('strategy', 'energy-industrials',
    P('Generalists who want transition, decarbonisation and new businesses on the agenda — strategy here moves assets, not slides.', 'Generalis yang ingin transisi, dekarbonisasi, dan bisnis baru ada di agenda — strategi di sini menggerakkan aset, bukan slide.'),
    [P('Build the business case for new energy, downstream or digital ventures', 'Menyusun business case untuk energi baru, hilirisasi, atau usaha digital'),
     P('Run corporate planning, portfolio reviews and partnerships', 'Menjalankan perencanaan korporat, tinjauan portofolio, dan kemitraan'),
     P('Translate policy and regulation into operating plans', 'Menerjemahkan kebijakan dan regulasi menjadi rencana operasional')]);
  def('commercial', 'energy-industrials',
    P('Sellers who like long cycles, tenders and technical products — selling a turbine or a tonne of nickel is a year-long relationship.', 'Penjual yang menyukai siklus panjang, tender, dan produk teknis — menjual turbin atau satu ton nikel adalah hubungan setahun penuh.'),
    [P('Manage B2B accounts, tenders and long-term supply contracts', 'Mengelola akun B2B, tender, dan kontrak pasokan jangka panjang'),
     P('Work with engineering on technical proposals and after-sales service', 'Bekerja bersama rekayasa untuk proposal teknis dan layanan purnajual'),
     P('Track pricing, volumes and receivables across distributors or offtakers', 'Melacak harga, volume, dan piutang lintas distributor atau offtaker')]);
  def('trainee', 'energy-industrials',
    P('Graduates, often engineers, who want to see site, plant and head office before choosing — and can take a posting far from home.', 'Lulusan baru, sering insinyur, yang ingin melihat lokasi, pabrik, dan kantor pusat sebelum memilih — dan siap ditempatkan jauh dari rumah.'),
    [P('Rotate through operations, maintenance, supply chain and a corporate function', 'Berotasi melalui operasi, pemeliharaan, rantai pasok, dan satu fungsi korporat'),
     P('Deliver an improvement project on site with a mentor', 'Menyelesaikan proyek perbaikan di lokasi bersama mentor'),
     P('Finish with a placement across the group, including subsidiaries', 'Berakhir dengan penempatan di seluruh grup, termasuk anak perusahaan')]);
  def('data', 'energy-industrials',
    P('Analysts who like operational data — sensors, maintenance and production — and want models that change what a plant does tomorrow.', 'Analis yang menyukai data operasional — sensor, pemeliharaan, dan produksi — dan menginginkan model yang mengubah apa yang pabrik lakukan besok.'),
    [P('Build production, reliability and HSE dashboards from plant and ERP data', 'Membangun dasbor produksi, keandalan, dan HSE dari data pabrik dan ERP'),
     P('Model predictive maintenance, demand and logistics with engineering', 'Memodelkan pemeliharaan prediktif, permintaan, dan logistik bersama rekayasa'),
     P('Support commodity and cost analysis for finance and strategy', 'Mendukung analisis komoditas dan biaya untuk finance dan strategi')]);

  /* ───────── property, real estate & construction ───────── */
  def('commercial', 'property-construction',
    P('Sellers who like big-ticket, long-cycle deals — a unit, a tenancy or a project is months of relationship and paperwork.', 'Penjual yang menyukai transaksi besar dan bersiklus panjang — satu unit, satu sewa, atau satu proyek adalah hubungan dan dokumen berbulan-bulan.'),
    [P('Sell residential units or lease commercial space through agents, launches and corporate clients', 'Menjual unit hunian atau menyewakan ruang komersial lewat agen, peluncuran, dan klien korporat'),
     P('Pursue tenders and project bids with estimating and engineering teams', 'Mengejar tender dan penawaran proyek bersama tim estimasi dan rekayasa'),
     P('Manage pipelines, bank partnerships and buyer financing to close', 'Mengelola pipeline, kemitraan bank, dan pembiayaan pembeli hingga closing')]);
  def('finance', 'property-construction',
    P('Finance people who like project economics — land, financing, cash-flow timing and claims decide whether a project works.', 'Orang finance yang menyukai ekonomi proyek — lahan, pembiayaan, waktu arus kas, dan klaim menentukan apakah sebuah proyek berhasil.'),
    [P('Model project feasibility, financing and cash flow over multi-year builds', 'Memodelkan kelayakan proyek, pembiayaan, dan arus kas selama pembangunan bertahun-tahun'),
     P('Manage project cost control, progress claims and contractor payments', 'Mengelola pengendalian biaya proyek, klaim progres, dan pembayaran kontraktor'),
     P('Handle bank facilities, pre-sales recognition and group reporting', 'Menangani fasilitas bank, pengakuan pre-sales, dan pelaporan grup')]);
  def('operations', 'property-construction',
    P('People who like a site plan turning into a building — scheduling, contractors, quality and handover.', 'Orang yang menyukai rencana tapak berubah menjadi bangunan — penjadwalan, kontraktor, mutu, dan serah terima.'),
    [P('Run project schedules, procurement and subcontractors on site', 'Menjalankan jadwal proyek, pengadaan, dan subkontraktor di lokasi'),
     P('Manage quality, safety and permits through to handover', 'Mengelola mutu, keselamatan, dan perizinan hingga serah terima'),
     P('Operate estates, malls or facilities after completion', 'Mengoperasikan kawasan, mal, atau fasilitas setelah selesai')]);
  def('marketing', 'property-construction',
    P('Marketers who like launches — a project sells on a story, a show unit and the first weekend.', 'Pemasar yang menyukai peluncuran — sebuah proyek terjual lewat cerita, unit contoh, dan akhir pekan pertama.'),
    [P('Plan project launches, show units, events and agent programmes', 'Merencanakan peluncuran proyek, unit contoh, acara, dan program agen'),
     P('Run digital lead generation and nurture buyers through long decisions', 'Menjalankan pembangkitan prospek digital dan membina pembeli sepanjang keputusan yang panjang'),
     P('Position townships, malls or offices for different buyer segments', 'Memosisikan kota mandiri, mal, atau perkantoran untuk segmen pembeli berbeda')]);
  def('engineering', 'property-construction',
    P('Civil, structural and MEP engineers who want to build at infrastructure scale — toll roads, towers, ports and the sites that make them.', 'Insinyur sipil, struktur, dan MEP yang ingin membangun pada skala infrastruktur — jalan tol, menara, pelabuhan, dan lokasi yang mewujudkannya.'),
    [P('Design, plan and supervise civil, structural or MEP works on site', 'Merancang, merencanakan, dan mengawasi pekerjaan sipil, struktur, atau MEP di lokasi'),
     P('Manage methods, materials, safety and quality with contractors', 'Mengelola metode, material, keselamatan, dan mutu bersama kontraktor'),
     P('Rotate across projects and regions, often on state infrastructure programmes', 'Berotasi antar proyek dan wilayah, sering pada program infrastruktur negara')]);

  /* ───────── telecommunications ───────── */
  def('engineering', 'telecom',
    P('Engineers who want national infrastructure — networks, cloud and digital services for tens of millions of subscribers.', 'Insinyur yang menginginkan infrastruktur nasional — jaringan, cloud, dan layanan digital untuk puluhan juta pelanggan.'),
    [P('Plan, build and operate network, core and cloud platforms', 'Merencanakan, membangun, dan mengoperasikan platform jaringan, inti, dan cloud'),
     P('Develop digital services and apps on the operator’s platforms', 'Mengembangkan layanan digital dan aplikasi di platform operator'),
     P('Run vendor, rollout and incident management at scale', 'Menjalankan manajemen vendor, rollout, dan insiden pada skala besar')]);
  def('data', 'telecom',
    P('Analysts who like mass-market data — usage, churn and networks — on one of the largest customer bases in the country.', 'Analis yang menyukai data pasar massal — pemakaian, churn, dan jaringan — pada salah satu basis pelanggan terbesar di negeri ini.'),
    [P('Model churn, upsell and network demand from subscriber data', 'Memodelkan churn, upsell, dan permintaan jaringan dari data pelanggan'),
     P('Build campaign targeting and dashboards for marketing and network teams', 'Membangun penargetan kampanye dan dasbor untuk tim pemasaran dan jaringan'),
     P('Work with strict customer-data governance and regulation', 'Bekerja dengan tata kelola data pelanggan dan regulasi yang ketat')]);
  def('marketing', 'telecom',
    P('Marketers who like products on a national scale — packages, prepaid and digital bundles for every segment and region.', 'Pemasar yang menyukai produk berskala nasional — paket, prabayar, dan bundel digital untuk setiap segmen dan wilayah.'),
    [P('Design packages, pricing and campaigns by segment and region', 'Merancang paket, harga, dan kampanye per segmen dan wilayah'),
     P('Manage digital channels, apps and loyalty programmes', 'Mengelola kanal digital, aplikasi, dan program loyalitas'),
     P('Read usage and churn data weekly with analytics teams', 'Membaca data pemakaian dan churn mingguan bersama tim analitik')]);
  def('commercial', 'telecom',
    P('Sellers who like enterprise and channel sales — connectivity, cloud and solutions for corporates, or dealers and outlets for consumers.', 'Penjual yang menyukai penjualan enterprise dan kanal — konektivitas, cloud, dan solusi untuk korporat, atau dealer dan outlet untuk konsumen.'),
    [P('Sell connectivity, cloud and ICT solutions to enterprise and government accounts', 'Menjual konektivitas, cloud, dan solusi TIK ke akun enterprise dan pemerintah'),
     P('Manage dealer, outlet and regional channel performance', 'Mengelola performa dealer, outlet, dan kanal regional'),
     P('Coordinate solution delivery with engineering after the sale', 'Mengoordinasikan penyerahan solusi bersama rekayasa setelah penjualan')]);
  def('trainee', 'telecom',
    P('Graduates who want a structured programme at a large, stable employer and exposure to network, digital and commercial sides.', 'Lulusan baru yang menginginkan program terstruktur di perusahaan besar yang stabil dan paparan ke sisi jaringan, digital, dan komersial.'),
    [P('Rotate through network, digital services and commercial units', 'Berotasi melalui unit jaringan, layanan digital, dan komersial'),
     P('Deliver projects in regional offices as well as head office', 'Menyelesaikan proyek di kantor regional maupun kantor pusat'),
     P('Earn a placement through structured assessments', 'Meraih penempatan lewat asesmen terstruktur')]);

  /* ───────── media, gaming & entertainment ───────── */
  def('marketing', 'media-gaming',
    P('Marketers who like audiences and launches — content, campaigns and communities where attention is the product.', 'Pemasar yang menyukai audiens dan peluncuran — konten, kampanye, dan komunitas tempat perhatian adalah produknya.'),
    [P('Run campaigns and community programmes for titles, shows or clients', 'Menjalankan kampanye dan program komunitas untuk judul, acara, atau klien'),
     P('Manage creators, partnerships and media plans across platforms', 'Mengelola kreator, kemitraan, dan rencana media lintas platform'),
     P('Read audience, engagement and monetisation data weekly', 'Membaca data audiens, engagement, dan monetisasi mingguan')]);
  def('design', 'media-gaming',
    P('Designers and artists whose portfolio is the interview — visual craft, motion and UI for things people choose to look at.', 'Desainer dan seniman yang portofolionya adalah wawancara — keahlian visual, motion, dan UI untuk hal-hal yang orang pilih untuk dilihat.'),
    [P('Produce visual, motion or game art within a production pipeline', 'Memproduksi karya visual, motion, atau seni gim dalam pipeline produksi'),
     P('Design interfaces and experiences for players or viewers', 'Merancang antarmuka dan pengalaman untuk pemain atau penonton'),
     P('Iterate through critique, playtests and client reviews', 'Mengiterasi lewat kritik, playtest, dan tinjauan klien')]);
  def('commercial', 'media-gaming',
    P('Sellers who like selling attention — ad inventory, sponsorships and client accounts in an agency or a publisher.', 'Penjual yang menyukai menjual perhatian — inventori iklan, sponsor, dan akun klien di agensi atau penerbit.'),
    [P('Sell advertising, sponsorship and content partnerships to brands', 'Menjual iklan, sponsor, dan kemitraan konten ke merek'),
     P('Manage client accounts and pitches with creative and strategy teams', 'Mengelola akun klien dan pitch bersama tim kreatif dan strategi'),
     P('Track campaign delivery, revenue and renewals', 'Melacak penyerahan kampanye, pendapatan, dan perpanjangan')]);
  def('data', 'media-gaming',
    P('Analysts who like audience, player and campaign data — retention curves and attention are the metrics that matter.', 'Analis yang menyukai data audiens, pemain, dan kampanye — kurva retensi dan perhatian adalah metrik yang berarti.'),
    [P('Analyse audience, player retention and monetisation for product and marketing', 'Menganalisis audiens, retensi pemain, dan monetisasi untuk produk dan pemasaran'),
     P('Measure campaign and content performance across platforms', 'Mengukur performa kampanye dan konten lintas platform'),
     P('Build live-ops, scheduling or programming dashboards', 'Membangun dasbor live-ops, penjadwalan, atau pemrograman acara')]);
  def('engineering', 'media-gaming',
    P('Engineers who want games, streaming and creative tools — performance, live services and pipelines.', 'Insinyur yang menginginkan gim, streaming, dan alat kreatif — performa, layanan langsung, dan pipeline.'),
    [P('Build game, streaming or content platforms and their live services', 'Membangun platform gim, streaming, atau konten beserta layanan langsungnya'),
     P('Optimise performance across devices and networks', 'Mengoptimalkan performa lintas perangkat dan jaringan'),
     P('Support production pipelines and tooling for creative teams', 'Mendukung pipeline produksi dan perkakas untuk tim kreatif')]);
  def('product', 'media-gaming',
    P('Product people who like live products — features, economies and events that keep players or viewers coming back.', 'Orang produk yang menyukai produk hidup — fitur, ekonomi, dan acara yang membuat pemain atau penonton kembali.'),
    [P('Own a game, app or content product and its live-ops calendar', 'Memegang satu gim, aplikasi, atau produk konten beserta kalender live-ops-nya'),
     P('Design monetisation and retention features with data and design', 'Merancang fitur monetisasi dan retensi bersama data dan desain'),
     P('Run releases and events with studios or content teams', 'Menjalankan rilis dan acara bersama studio atau tim konten')]);
  def('strategy', 'media-gaming',
    P('Planners who like strategy for clients and brands — insight, positioning and the pitch, in an agency or a media group.', 'Perencana yang menyukai strategi untuk klien dan merek — insight, positioning, dan pitch, di agensi atau grup media.'),
    [P('Develop brand and communications strategy for client pitches', 'Mengembangkan strategi merek dan komunikasi untuk pitch klien'),
     P('Turn audience research into creative briefs', 'Mengubah riset audiens menjadi brief kreatif'),
     P('Support business development and new-format planning', 'Mendukung pengembangan bisnis dan perencanaan format baru')]);

  /* ───────── travel & hospitality ───────── */
  def('operations', 'travel-hospitality',
    P('People who like service at scale — a hotel, an airport operation or a fleet that runs on standards and shifts.', 'Orang yang menyukai layanan dalam skala besar — hotel, operasi bandara, atau armada yang berjalan di atas standar dan shift.'),
    [P('Run front-office, rooms, ground or flight operations against service and safety standards', 'Menjalankan operasi front office, kamar, darat, atau penerbangan terhadap standar layanan dan keselamatan'),
     P('Manage rosters, suppliers and daily performance reviews', 'Mengelola roster, pemasok, dan tinjauan performa harian'),
     P('Handle peaks, disruptions and guest or passenger recovery', 'Menangani puncak, gangguan, dan pemulihan tamu atau penumpang')]);
  def('commercial', 'travel-hospitality',
    P('Sellers who like corporate accounts, agents and distribution — rooms and seats are perishable, so the sale is daily.', 'Penjual yang menyukai akun korporat, agen, dan distribusi — kamar dan kursi tidak tahan lama, jadi penjualannya harian.'),
    [P('Manage corporate, agent and online distribution accounts', 'Mengelola akun korporat, agen, dan distribusi daring'),
     P('Work with revenue management on pricing and occupancy or load factor', 'Bekerja bersama revenue management soal harga dan okupansi atau load factor'),
     P('Sell MICE, group and partnership business', 'Menjual bisnis MICE, grup, dan kemitraan')]);
  def('marketing', 'travel-hospitality',
    P('Marketers who like destinations, loyalty and seasons — demand is made months ahead and lost in a weekend.', 'Pemasar yang menyukai destinasi, loyalitas, dan musim — permintaan dibentuk berbulan-bulan sebelumnya dan hilang dalam satu akhir pekan.'),
    [P('Run brand, loyalty and seasonal campaigns across markets', 'Menjalankan kampanye merek, loyalitas, dan musiman lintas pasar'),
     P('Manage digital channels, OTA presence and partnerships', 'Mengelola kanal digital, kehadiran di OTA, dan kemitraan'),
     P('Coordinate with revenue and sales teams on promotions', 'Berkoordinasi dengan tim revenue dan penjualan soal promosi')]);
  def('finance', 'travel-hospitality',
    P('Finance people who like yield and cost per seat or room — thin margins that swing with fuel, currency and season.', 'Orang finance yang menyukai yield dan biaya per kursi atau kamar — margin tipis yang berayun bersama bahan bakar, kurs, dan musim.'),
    [P('Run property or route profitability and the monthly close', 'Menjalankan profitabilitas properti atau rute dan tutup buku bulanan'),
     P('Support revenue management, fuel and currency hedging', 'Mendukung revenue management, lindung nilai bahan bakar dan kurs'),
     P('Manage capital projects such as fleet, refurbishment and openings', 'Mengelola proyek modal seperti armada, renovasi, dan pembukaan')]);
  def('engineering', 'travel-hospitality',
    P('Engineers who want aircraft, systems or booking platforms — maintenance and uptime where safety or the sale is on the line.', 'Insinyur yang menginginkan pesawat, sistem, atau platform pemesanan — pemeliharaan dan uptime dengan keselamatan atau penjualan yang dipertaruhkan.'),
    [P('Maintain aircraft, building systems or booking and inventory platforms', 'Memelihara pesawat, sistem gedung, atau platform pemesanan dan inventori'),
     P('Work under aviation, safety or PCI standards and audits', 'Bekerja di bawah standar dan audit penerbangan, keselamatan, atau PCI'),
     P('Integrate with global distribution and payment systems', 'Mengintegrasikan dengan sistem distribusi global dan pembayaran')]);
  def('data', 'travel-hospitality',
    P('Analysts who like demand forecasting and pricing — every seat and room is a daily optimisation problem.', 'Analis yang menyukai peramalan permintaan dan harga — setiap kursi dan kamar adalah persoalan optimasi harian.'),
    [P('Forecast demand and set pricing with revenue-management teams', 'Meramalkan permintaan dan menetapkan harga bersama tim revenue management'),
     P('Analyse booking funnels, loyalty and ancillary revenue', 'Menganalisis funnel pemesanan, loyalitas, dan pendapatan tambahan'),
     P('Build operational dashboards for on-time performance or occupancy', 'Membangun dasbor operasional untuk ketepatan waktu atau okupansi')]);
  def('product', 'travel-hospitality',
    P('Product people who like high-intent funnels — search, booking and payments where a conversion point is worth a lot.', 'Orang produk yang menyukai funnel berniat tinggi — pencarian, pemesanan, dan pembayaran dengan setiap titik konversi bernilai besar.'),
    [P('Own search, booking or post-booking journeys on the platform', 'Memegang perjalanan pencarian, pemesanan, atau pasca-pemesanan di platform'),
     P('Integrate supply from airlines, hotels and payment partners', 'Mengintegrasikan pasokan dari maskapai, hotel, dan mitra pembayaran'),
     P('Run experiments on conversion, cancellation and support', 'Menjalankan eksperimen pada konversi, pembatalan, dan dukungan')]);

  /* ───────── education ───────── */
  def('product', 'education',
    P('Product people who want learning outcomes as the metric — courses, classrooms and the platform that holds them.', 'Orang produk yang menginginkan hasil belajar sebagai metriknya — kursus, kelas, dan platform yang menaunginya.'),
    [P('Own learning products from curriculum to completion metrics', 'Memegang produk pembelajaran dari kurikulum hingga metrik penyelesaian'),
     P('Work with teachers, content and engineering on one roadmap', 'Bekerja bersama pengajar, konten, dan engineering pada satu roadmap'),
     P('Measure engagement, completion and outcomes rather than only sign-ups', 'Mengukur engagement, penyelesaian, dan hasil, bukan hanya pendaftaran')]);
  def('marketing', 'education',
    P('Marketers who like seasons and families — enrolment cycles, parents, students and institutions each decide differently.', 'Pemasar yang menyukai musim dan keluarga — siklus pendaftaran, orang tua, siswa, dan institusi masing-masing memutuskan secara berbeda.'),
    [P('Run enrolment campaigns around academic and exam calendars', 'Menjalankan kampanye pendaftaran mengikuti kalender akademik dan ujian'),
     P('Build content, community and referral programmes', 'Membangun program konten, komunitas, dan referral'),
     P('Measure cost per enrolment and retention across cohorts', 'Mengukur biaya per pendaftaran dan retensi lintas angkatan')]);
  def('commercial', 'education',
    P('Sellers who like institutions and partnerships — schools, universities and employers buy on trust and evidence.', 'Penjual yang menyukai institusi dan kemitraan — sekolah, universitas, dan pemberi kerja membeli berdasarkan kepercayaan dan bukti.'),
    [P('Sell to schools, universities, governments and corporate L&D', 'Menjual ke sekolah, universitas, pemerintah, dan L&D korporat'),
     P('Manage partnerships, tenders and renewals', 'Mengelola kemitraan, tender, dan perpanjangan'),
     P('Advise students and parents through long decisions', 'Menasihati siswa dan orang tua sepanjang keputusan yang panjang')]);
  def('design', 'education',
    P('Designers who care about clarity for learners — instructional design, content and interfaces that teach.', 'Desainer yang peduli pada kejelasan bagi pembelajar — desain instruksional, konten, dan antarmuka yang mengajar.'),
    [P('Design learning experiences, content and assessments with teachers', 'Merancang pengalaman belajar, konten, dan asesmen bersama pengajar'),
     P('Build interfaces for students, parents and teachers', 'Membangun antarmuka untuk siswa, orang tua, dan pengajar'),
     P('Test designs in real classrooms and iterate', 'Menguji desain di kelas sungguhan dan mengiterasinya')]);

  /* ───────── consulting & professional services ───────── */
  def('strategy', 'professional-services',
    P('People who like intensity, a steep curve and someone else’s hardest problem every few months.', 'Orang yang menyukai intensitas, kurva belajar terjal, dan masalah tersulit orang lain setiap beberapa bulan.'),
    [P('Structure a client problem, build the analysis and pressure-test it with the team', 'Menstrukturkan masalah klien, membangun analisis, dan mengujinya bersama tim'),
     P('Produce the deck and present to senior client audiences', 'Menyusun deck dan mempresentasikannya ke audiens klien senior'),
     P('Work across industries on short engagements with long hours', 'Bekerja lintas industri dalam penugasan singkat dengan jam kerja panjang')]);
  def('data', 'professional-services',
    P('Analysts who like variety — research, surveys and client datasets across industries, delivered on a deadline.', 'Analis yang menyukai variasi — riset, survei, dan dataset klien lintas industri, diserahkan tepat waktu.'),
    [P('Run research, surveys and data analysis for client engagements', 'Menjalankan riset, survei, dan analisis data untuk penugasan klien'),
     P('Build models and dashboards that become client deliverables', 'Membangun model dan dasbor yang menjadi deliverable klien'),
     P('Write findings that can be defended in a client meeting', 'Menulis temuan yang bisa dipertahankan di rapat klien')]);
  def('commercial', 'professional-services',
    P('People who can sell expertise — business development, proposals and client relationships for a firm that bills by the hour.', 'Orang yang bisa menjual keahlian — pengembangan bisnis, proposal, dan hubungan klien untuk firma yang menagih per jam.'),
    [P('Develop client relationships and proposals with partners', 'Mengembangkan hubungan klien dan proposal bersama para partner'),
     P('Place candidates or sell services against monthly targets (in talent firms)', 'Menempatkan kandidat atau menjual layanan terhadap target bulanan (di firma talenta)'),
     P('Manage pipelines, pricing and client renewals', 'Mengelola pipeline, harga, dan perpanjangan klien')]);
  def('finance', 'professional-services',
    P('Accountants and advisers who want technical depth — audit, tax and transactions as a profession with exams and a ladder.', 'Akuntan dan penasihat yang menginginkan kedalaman teknis — audit, pajak, dan transaksi sebagai profesi dengan ujian dan jenjang.'),
    [P('Audit financial statements or prepare tax and transaction advice for clients', 'Mengaudit laporan keuangan atau menyiapkan nasihat pajak dan transaksi untuk klien'),
     P('Work through busy season on several client teams', 'Bekerja melewati busy season di beberapa tim klien'),
     P('Study for professional qualifications alongside the job', 'Belajar untuk kualifikasi profesional di samping pekerjaan')]);
  def('people', 'professional-services',
    P('People professionals who like talent as the business — recruitment, assessment and HR advisory for clients.', 'Profesional SDM yang menyukai talenta sebagai bisnisnya — rekrutmen, asesmen, dan advisory HR untuk klien.'),
    [P('Source, assess and place candidates for client roles', 'Mencari, menilai, dan menempatkan kandidat untuk peran klien'),
     P('Run assessment centres, surveys and HR advisory projects', 'Menjalankan assessment centre, survei, dan proyek advisory HR'),
     P('Manage the firm’s own hiring and development programmes', 'Mengelola program rekrutmen dan pengembangan firma itu sendiri')]);
  def('risk', 'professional-services',
    P('People who like evidence and independence — audit, forensic, compliance and legal work for clients across industries.', 'Orang yang menyukai bukti dan independensi — audit, forensik, kepatuhan, dan pekerjaan hukum untuk klien lintas industri.'),
    [P('Test controls and investigate exceptions on client engagements', 'Menguji kontrol dan menyelidiki pengecualian pada penugasan klien'),
     P('Draft findings, opinions or legal documents that stand up to scrutiny', 'Menyusun temuan, opini, atau dokumen hukum yang tahan diuji'),
     P('Advise clients on regulation, disputes and compliance programmes', 'Menasihati klien soal regulasi, sengketa, dan program kepatuhan')]);
  def('operations', 'professional-services',
    P('People who like running projects and programmes for others — delivery, field operations and grants in development organisations and firms.', 'Orang yang menyukai menjalankan proyek dan program untuk pihak lain — delivery, operasi lapangan, dan hibah di organisasi pembangunan dan firma.'),
    [P('Run programme delivery, logistics and reporting for donors or clients', 'Menjalankan delivery program, logistik, dan pelaporan untuk donor atau klien'),
     P('Manage budgets, partners and compliance across field sites', 'Mengelola anggaran, mitra, dan kepatuhan di berbagai lokasi lapangan'),
     P('Coordinate consultants and engagement operations', 'Mengoordinasikan konsultan dan operasi penugasan')]);

  /* ───────── industry process notes (INFERRED tier) ───────── */
  var NOTES = {
    'financial-services': P('Banks run officer-development programmes with age and GPA caps, a bond and a placement decided by the bank; expect a numerical test, a group case and a medical check. Fintechs hire role by role like technology companies.', 'Bank menjalankan program officer development dengan batas usia dan IPK, ikatan dinas, dan penempatan yang ditentukan bank; harapkan tes numerik, kasus kelompok, dan tes kesehatan. Fintech merekrut per peran seperti perusahaan teknologi.'),
    'tech-ecommerce': P('Hiring is role by role rather than by annual intake: a take-home or live technical exercise for engineering and data, a product or case discussion for product and marketing, and a portfolio review for design. Intake sizes follow funding cycles.', 'Rekrutmen berjalan per peran, bukan per angkatan tahunan: tugas take-home atau latihan teknis langsung untuk engineering dan data, diskusi produk atau kasus untuk produk dan pemasaran, serta tinjauan portofolio untuk desain. Jumlah rekrutmen mengikuti siklus pendanaan.'),
    'fmcg-consumer': P('Management-trainee programmes are the main door: an online assessment, a group case and interviews with senior leaders, usually with a field or plant posting in the first year. Direct sales and supply roles hire year-round.', 'Program management trainee adalah pintu utama: asesmen daring, kasus kelompok, dan wawancara dengan pemimpin senior, biasanya dengan penempatan lapangan atau pabrik di tahun pertama. Peran penjualan dan rantai pasok langsung direkrut sepanjang tahun.'),
    'healthcare-pharma': P('Expect a product-knowledge or scientific element for commercial and medical roles, and strict background and compliance checks everywhere; pharmacy and life-science degrees are often required for regulatory and quality roles.', 'Harapkan unsur pengetahuan produk atau ilmiah untuk peran komersial dan medis, serta pemeriksaan latar belakang dan kepatuhan yang ketat di mana pun; gelar farmasi dan ilmu hayati sering disyaratkan untuk peran regulasi dan mutu.'),
    'energy-industrials': P('State-owned groups hire through the BUMN joint-recruitment cycle (values test, interview, medical); private groups run engineering and trainee intakes with site readiness, HSE questions and a willingness to be posted far from Java.', 'Grup BUMN merekrut lewat siklus rekrutmen bersama BUMN (tes nilai, wawancara, tes kesehatan); grup swasta menjalankan rekrutmen rekayasa dan trainee dengan kesiapan lokasi, pertanyaan HSE, dan kesediaan ditempatkan jauh dari Jawa.'),
    'property-construction': P('Contractors, many state-owned, hire civil and MEP engineers in project-driven waves and through the BUMN joint cycle, with site postings from day one. Developers hire sales, marketing and project teams around launches; commissions are a large part of sales pay.', 'Kontraktor, banyak di antaranya BUMN, merekrut insinyur sipil dan MEP dalam gelombang yang mengikuti proyek dan lewat siklus bersama BUMN, dengan penempatan lokasi sejak hari pertama. Pengembang merekrut tim penjualan, pemasaran, dan proyek di sekitar peluncuran; komisi adalah bagian besar dari gaji penjualan.'),
    'telecom': P('Operators run structured graduate and trainee intakes with online assessments and panel interviews, plus role-by-role hiring for digital units; regional postings are common for network and commercial roles.', 'Operator menjalankan rekrutmen lulusan baru dan trainee terstruktur dengan asesmen daring dan wawancara panel, ditambah rekrutmen per peran untuk unit digital; penempatan regional umum untuk peran jaringan dan komersial.'),
    'media-gaming': P('Portfolios and reels outweigh transcripts; expect a creative test or a take-home brief, and project-based or contract starts before a permanent role. Studios and agencies hire as projects are won.', 'Portofolio dan reel lebih berbobot daripada transkrip; harapkan tes kreatif atau brief take-home, serta awal berbasis proyek atau kontrak sebelum peran tetap. Studio dan agensi merekrut saat proyek dimenangkan.'),
    'travel-hospitality': P('Hotels run management-trainee programmes with rotations through operations; airlines hire operations and engineering through licensed, safety-screened intakes; online travel platforms hire like technology companies.', 'Hotel menjalankan program management trainee dengan rotasi melalui operasi; maskapai merekrut operasi dan rekayasa lewat rekrutmen berlisensi dengan penyaringan keselamatan; platform perjalanan daring merekrut seperti perusahaan teknologi.'),
    'education': P('Smaller companies with faster, less formal processes: a teaching or content demonstration for learning roles, a case or growth exercise for product and marketing, and references that matter.', 'Perusahaan lebih kecil dengan proses lebih cepat dan kurang formal: demonstrasi mengajar atau konten untuk peran pembelajaran, latihan kasus atau growth untuk produk dan pemasaran, serta referensi yang berarti.'),
    'professional-services': P('Audit firms take the largest graduate intakes with online tests and group exercises; strategy firms run several case interviews; law firms and advisers weigh transcripts and writing samples heavily. Busy-season timing shapes start dates.', 'Firma audit merekrut lulusan baru terbanyak dengan tes daring dan latihan kelompok; firma strategi menjalankan beberapa wawancara kasus; firma hukum dan penasihat menimbang transkrip dan contoh tulisan dengan berat. Waktu busy season menentukan tanggal mulai.')
  };

  return { PAIRS: X, NOTES: NOTES, get: function (fn, ind) { return X[fn + '|' + ind] || null; } };
})();
