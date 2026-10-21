'use strict';
/* Hand-authored verbal items (Indonesian, as the tests are). Original Metanoia practice items:
   sinonim, antonim, analogi (three relation models) and two original reading passages. */
const { item } = require('../gen/util');
const MAP = { tiu: 'analogi', tkd: 'verbal', tpa: 'verbal' };

function sin(d, w, key, wrong, note) {
  const opts = [key].concat(wrong);
  return item({ family: 'verbal', subtype: 'sinonim', d, stem: { id: 'Padanan makna yang paling tepat untuk kata “' + w + '” adalah …', en: 'The closest synonym of the Indonesian word “' + w + '” is …' }, opts, ans: 0,
    x: { pola: 'Sinonim: cari kata dengan makna inti yang sama, bukan kata yang sering muncul bersamanya.', langkah: 'Definisikan “' + w + '” dengan kalimatmu sendiri, lalu uji tiap opsi dalam satu kalimat yang sama. ' + (note || ''), jebakan: 'Pengecoh biasanya antonim, kata sebidang yang berbeda makna, atau kata yang mirip bunyi.', cepat: 'Buang antonim dulu; sisa opsi dibandingkan dengan definisi, bukan dengan perasaan “pernah dengar”.', tag: 'sinonim' },
    skills: ['kosakata', 'sinonim'], traps: ['antonim_sebagai_sinonim', 'mirip_bunyi'], t: d === 1 ? 20 : 30, map: MAP });
}
function ant(d, w, key, wrong, note) {
  const opts = [key].concat(wrong);
  return item({ family: 'verbal', subtype: 'antonim', d, stem: { id: 'Lawan kata dari “' + w + '” adalah …', en: 'The antonym of the Indonesian word “' + w + '” is …' }, opts, ans: 0,
    x: { pola: 'Antonim: lawan pada sumbu makna yang sama (bukan sekadar “berbeda”).', langkah: 'Tentukan sumbu makna “' + w + '” lalu cari kutub seberangnya. ' + (note || ''), jebakan: 'Sinonim yang diselipkan di antara opsi; kata yang berlawanan pada sumbu lain.', cepat: 'Jika ragu, letakkan kata dan opsi dalam kalimat “bukan X, melainkan Y”.', tag: 'antonim' },
    skills: ['kosakata', 'antonim'], traps: ['sinonim_sebagai_antonim'], t: d === 1 ? 20 : 30, map: MAP });
}
function ana(d, model, a, b, c, key, wrong, rel) {
  const opts = [key].concat(wrong);
  return item({ family: 'verbal', subtype: 'analogi', d, stem: { id: a + ' : ' + b + ' = ' + c + ' : …', en: a + ' : ' + b + ' = ' + c + ' : … (Indonesian word analogy)' }, opts, ans: 0,
    x: { pola: 'Hubungan ' + rel + '.', langkah: 'Ucapkan hubungan A–B dalam satu kalimat jembatan (“' + a + ' ' + rel + ' ' + b + '”), lalu pasangkan ' + c + ' dengan opsi yang membuat kalimat yang sama benar, pada arah yang sama.', jebakan: 'Opsi yang berhubungan dengan ' + c + ' tetapi lewat hubungan lain; atau hubungan yang benar tetapi arahnya terbalik.', cepat: 'Kalimat jembatan dulu, opsi kemudian; jika dua opsi lolos, perketat kalimatnya.', tag: 'analogi · ' + model },
    skills: ['analogi', model], traps: ['hubungan_lain', 'arah_terbalik'], t: d === 1 ? 25 : d === 2 ? 35 : 45, map: MAP });
}

const SINONIM = [
  sin(1, 'absah', 'sah', ['palsu', 'rusak', 'ragu', 'samar']),
  sin(1, 'gegabah', 'ceroboh', ['cermat', 'tenang', 'lamban', 'gagah']),
  sin(1, 'lazim', 'umum', ['langka', 'aneh', 'baru', 'kuno']),
  sin(1, 'kendala', 'hambatan', ['peluang', 'tujuan', 'sarana', 'dorongan']),
  sin(1, 'mufakat', 'sepakat', ['berselisih', 'ragu', 'menolak', 'bimbang']),
  sin(1, 'hemat', 'irit', ['boros', 'mewah', 'royal', 'mahal']),
  sin(1, 'tangkas', 'cekatan', ['lamban', 'kaku', 'gugup', 'malas']),
  sin(1, 'jenuh', 'bosan', ['gembira', 'segar', 'tenang', 'lega']),
  sin(1, 'pelik', 'rumit', ['mudah', 'jelas', 'ringkas', 'lancar']),
  sin(1, 'sahih', 'valid', ['keliru', 'palsu', 'rapuh', 'janggal']),
  sin(2, 'akurat', 'tepat', ['kasar', 'meleset', 'dugaan', 'samar'], 'Akurat berarti sesuai dengan nilai sebenarnya.'),
  sin(2, 'eksplisit', 'gamblang', ['tersirat', 'rahasia', 'samar', 'ringkas'], 'Eksplisit = dinyatakan terang-terangan; lawan dari implisit.'),
  sin(2, 'fluktuasi', 'gejolak', ['kestabilan', 'kenaikan', 'penurunan', 'kemandekan'], 'Fluktuasi adalah naik-turun yang tidak tetap, bukan kenaikan saja atau penurunan saja.'),
  sin(2, 'kredibel', 'tepercaya', ['meragukan', 'terkenal', 'kaya', 'cerdas'], 'Kredibel berkaitan dengan dapat dipercaya, bukan dengan ketenaran.'),
  sin(2, 'konsensus', 'kesepakatan', ['perdebatan', 'pemungutan suara', 'perintah', 'usulan'], 'Konsensus adalah kesepakatan bersama tanpa pemungutan suara.'),
  sin(2, 'deviasi', 'penyimpangan', ['kesesuaian', 'rata-rata', 'kepastian', 'kemajuan']),
  sin(2, 'komprehensif', 'menyeluruh', ['sebagian', 'sekilas', 'dangkal', 'terpisah']),
  sin(2, 'proteksi', 'perlindungan', ['serangan', 'pembiaran', 'ancaman', 'penolakan']),
  sin(2, 'estimasi', 'perkiraan', ['kepastian', 'pengukuran', 'keputusan', 'bukti']),
  sin(2, 'ambigu', 'taksa', ['tegas', 'tunggal', 'jelas', 'lugas'], 'Taksa (bermakna ganda) adalah padanan baku untuk ambigu.'),
  sin(3, 'nirlaba', 'tidak mencari keuntungan', ['merugi', 'tanpa modal', 'bebas pajak', 'tanpa pegawai'], 'Nir- berarti tanpa; nirlaba = tanpa tujuan laba, bukan berarti merugi.'),
  sin(3, 'gentar', 'takut', ['berani', 'marah', 'heran', 'kecewa']),
  sin(3, 'insinuasi', 'sindiran', ['pujian', 'pengumuman', 'perintah', 'permohonan']),
  sin(3, 'anomali', 'keganjilan', ['keteraturan', 'kebiasaan', 'kemiripan', 'kelaziman']),
  sin(3, 'renjana', 'gairah', ['kebencian', 'kesedihan', 'kebosanan', 'ketakutan'], 'Renjana = rasa hati yang kuat, rindu atau cinta.'),
  sin(3, 'prominen', 'terkemuka', ['terpencil', 'terabaikan', 'tersembunyi', 'terlambat']),
  sin(3, 'residu', 'sisa', ['inti', 'awal', 'hasil utama', 'bahan baku']),
  sin(3, 'komplemen', 'pelengkap', ['pengganti', 'penghalang', 'pesaing', 'pengurang']),
  sin(3, 'lugas', 'terus terang', ['berbelit', 'kiasan', 'samar', 'bertele-tele']),
  sin(3, 'paradoks', 'pernyataan yang tampak bertentangan', ['pernyataan yang pasti benar', 'perumpamaan', 'kesimpulan logis', 'ungkapan pujian'])
];

const ANTONIM = [
  ant(1, 'mujur', 'sial', ['beruntung', 'senang', 'kaya', 'cepat']),
  ant(1, 'kendur', 'kencang', ['longgar', 'lemas', 'lembut', 'lunak']),
  ant(1, 'lapang', 'sempit', ['luas', 'lega', 'terbuka', 'panjang']),
  ant(1, 'majemuk', 'tunggal', ['ganda', 'banyak', 'campuran', 'rangkap']),
  ant(1, 'amatir', 'profesional', ['pemula', 'awam', 'penonton', 'sukarelawan']),
  ant(1, 'gugup', 'tenang', ['cemas', 'bingung', 'takut', 'ragu']),
  ant(1, 'mentah', 'matang', ['segar', 'muda', 'mentah sekali', 'hijau']),
  ant(1, 'surut', 'pasang', ['turun', 'kering', 'tenang', 'dangkal']),
  ant(1, 'pangkal', 'ujung', ['dasar', 'akar', 'asal', 'awal']),
  ant(1, 'rajin', 'malas', ['tekun', 'giat', 'ulet', 'cekatan']),
  ant(2, 'eksplisit', 'implisit', ['gamblang', 'tegas', 'jelas', 'terbuka']),
  ant(2, 'konkret', 'abstrak', ['nyata', 'padat', 'jelas', 'berwujud']),
  ant(2, 'progresif', 'regresif', ['maju', 'cepat', 'modern', 'berkembang']),
  ant(2, 'heterogen', 'homogen', ['beragam', 'campuran', 'majemuk', 'berbeda']),
  ant(2, 'optimis', 'pesimis', ['yakin', 'percaya', 'berharap', 'semangat']),
  ant(2, 'inflasi', 'deflasi', ['kenaikan harga', 'stagnasi', 'resesi', 'devaluasi'], 'Inflasi: kenaikan harga umum; deflasi: penurunan harga umum.'),
  ant(2, 'mandiri', 'bergantung', ['bebas', 'sendiri', 'kuat', 'dewasa']),
  ant(2, 'apatis', 'peduli', ['acuh', 'dingin', 'masa bodoh', 'lesu']),
  ant(2, 'kolektif', 'individual', ['bersama', 'gotong royong', 'kelompok', 'umum']),
  ant(2, 'permanen', 'sementara', ['tetap', 'abadi', 'kekal', 'langgeng']),
  ant(3, 'sporadis', 'rutin', ['jarang', 'tersebar', 'sesekali', 'acak'], 'Sporadis = terjadi sesekali dan tidak teratur; lawannya teratur/rutin.'),
  ant(3, 'nomaden', 'menetap', ['berpindah', 'mengembara', 'berkelana', 'pengungsi']),
  ant(3, 'destruktif', 'konstruktif', ['merusak', 'menghancurkan', 'agresif', 'negatif']),
  ant(3, 'elusif', 'gamblang', ['sulit ditangkap', 'licin', 'samar', 'rumit'], 'Elusif = sukar dipahami atau ditangkap; lawannya mudah dipahami.'),
  ant(3, 'prolog', 'epilog', ['pembukaan', 'pengantar', 'dialog', 'monolog']),
  ant(3, 'skeptis', 'yakin', ['ragu', 'curiga', 'kritis', 'waspada']),
  ant(3, 'egois', 'altruistis', ['mementingkan diri', 'serakah', 'angkuh', 'acuh']),
  ant(3, 'kuantitatif', 'kualitatif', ['berjumlah', 'terukur', 'statistik', 'numerik']),
  ant(3, 'sentrifugal', 'sentripetal', ['menjauhi pusat', 'berputar', 'melingkar', 'menyebar']),
  ant(3, 'ekspansi', 'kontraksi', ['perluasan', 'pertumbuhan', 'pengembangan', 'pembukaan'])
];

const ANALOGI = [
  ana(1, 'model1', 'kaki', 'sepatu', 'tangan', 'sarung tangan', ['cincin', 'jam', 'kuku', 'gelang'], 'anggota badan dan pelindung yang dikenakan padanya'),
  ana(1, 'model1', 'burung', 'terbang', 'ikan', 'berenang', ['melompat', 'menyelam', 'berjalan', 'berlari'], 'makhluk dan cara geraknya yang khas'),
  ana(1, 'model1', 'gelap', 'lampu', 'lapar', 'makanan', ['dapur', 'piring', 'lelah', 'haus'], 'keadaan dan penawarnya'),
  ana(1, 'model1', 'buku', 'perpustakaan', 'obat', 'apotek', ['dokter', 'resep', 'rumah sakit', 'pasien'], 'benda dan tempat ia dikumpulkan untuk dilayankan'),
  ana(1, 'model1', 'panas', 'api', 'dingin', 'es', ['air', 'angin', 'hujan', 'kulkas'], 'sifat dan sumbernya'),
  ana(1, 'model1', 'dokter', 'pasien', 'guru', 'murid', ['sekolah', 'buku', 'kelas', 'pelajaran'], 'pemberi layanan dan penerimanya'),
  ana(1, 'model1', 'bensin', 'mobil', 'listrik', 'lampu', ['kabel', 'baterai', 'stopkontak', 'generator'], 'sumber energi dan alat yang dijalankannya'),
  ana(1, 'model1', 'kuas', 'pelukis', 'palu', 'tukang kayu', ['paku', 'kayu', 'bengkel', 'meja'], 'alat dan pemakainya'),
  ana(1, 'model1', 'huruf', 'kata', 'kata', 'kalimat', ['huruf', 'buku', 'suku kata', 'ejaan'], 'bagian dan keseluruhan yang dibentuknya'),
  ana(1, 'model1', 'mata', 'melihat', 'telinga', 'mendengar', ['berbicara', 'mencium', 'meraba', 'mengecap'], 'organ dan fungsinya'),
  ana(2, 'model2', 'benih', 'tanaman', 'telur', 'ayam', ['sarang', 'kandang', 'sayap', 'bulu'], 'asal dan hasil perkembangannya'),
  ana(2, 'model2', 'bisik', 'teriak', 'gerimis', 'badai', ['hujan', 'mendung', 'awan', 'kabut'], 'tingkat lemah dan tingkat kuat dari hal yang sama'),
  ana(2, 'model2', 'tepung', 'roti', 'kapas', 'kain', ['benang', 'jarum', 'pakaian', 'mesin jahit'], 'bahan mentah dan produk yang dibuat darinya'),
  ana(2, 'model2', 'jam', 'waktu', 'termometer', 'suhu', ['demam', 'cuaca', 'dokter', 'panas'], 'alat ukur dan besaran yang diukurnya'),
  ana(2, 'model2', 'nelayan', 'laut', 'petani', 'sawah', ['padi', 'cangkul', 'desa', 'panen'], 'pekerja dan tempat kerjanya'),
  ana(2, 'model2', 'gula', 'manis', 'garam', 'asin', ['putih', 'laut', 'pahit', 'halus'], 'benda dan rasa khasnya'),
  ana(2, 'model2', 'Februari', 'Maret', 'Senin', 'Selasa', ['Minggu', 'Sabtu', 'Rabu', 'pekan'], 'urutan: yang datang tepat sesudahnya'),
  ana(2, 'model2', 'gunting', 'memotong', 'sapu', 'menyapu', ['mengepel', 'membersihkan', 'lantai', 'debu'], 'alat dan kerja khasnya'),
  ana(2, 'model2', 'pengacara', 'hukum', 'akuntan', 'keuangan', ['kantor', 'pajak', 'kalkulator', 'bank'], 'profesi dan bidang keahliannya'),
  ana(2, 'model2', 'sepi', 'ramai', 'kering', 'basah', ['lembap', 'hujan', 'air', 'dingin'], 'lawan kata'),
  ana(3, 'model3', 'ragu', 'yakin', 'samar', 'jelas', ['gelap', 'kabur', 'terang', 'tegas'], 'dari keadaan kurang pasti ke keadaan pasti (lawan kata pada sumbu kepastian)'),
  ana(3, 'model3', 'metamorfosis', 'kupu-kupu', 'fermentasi', 'tapai', ['singkong', 'ragi', 'dapur', 'jamur'], 'proses dan hasil akhirnya'),
  ana(3, 'model3', 'laba', 'rugi', 'surplus', 'defisit', ['anggaran', 'hutang', 'tabungan', 'neraca'], 'lawan kata dalam bidang keuangan'),
  ana(3, 'model3', 'racun', 'sakit', 'obat', 'sembuh', ['dokter', 'resep', 'pahit', 'apotek'], 'sebab dan akibatnya'),
  ana(3, 'model3', 'prolog', 'epilog', 'pembukaan', 'penutup', ['isi', 'pengantar', 'kesimpulan', 'daftar isi'], 'bagian awal dan bagian akhir'),
  ana(3, 'model3', 'novelis', 'novel', 'komponis', 'simfoni', ['piano', 'orkestra', 'konser', 'nada'], 'pencipta dan karya yang diciptakannya'),
  ana(3, 'model3', 'hipotesis', 'teori', 'draf', 'naskah akhir', ['catatan', 'ide', 'judul', 'editor'], 'bentuk awal yang belum teruji dan bentuk matangnya'),
  ana(3, 'model3', 'diameter', 'lingkaran', 'diagonal', 'persegi', ['segitiga', 'sudut', 'sisi', 'garis'], 'garis yang menghubungkan dua titik berseberangan dan bangun tempatnya'),
  ana(3, 'model3', 'anak panah', 'busur', 'peluru', 'senapan', ['target', 'perang', 'tentara', 'mesiu'], 'proyektil dan alat pelontarnya'),
  ana(3, 'model3', 'kompas', 'arah', 'kalender', 'tanggal', ['bulan', 'tahun', 'jam', 'hari libur'], 'alat dan hal yang ditunjukkannya')
];

/* ─── wacana: two original passages ─── */
const P1 = { id: 'Koperasi Tani Lembah Sari berdiri pada 2019 dengan 42 anggota. Tujuan awalnya sederhana: membeli pupuk secara kolektif agar harganya lebih murah. Dalam dua tahun, koperasi menambah dua layanan, yaitu penyewaan alat pengering gabah dan penjualan beras kemasan langsung ke toko di kota kecamatan. Pada 2024 jumlah anggotanya mencapai 130 orang, tetapi pengurus mencatat bahwa hanya sekitar separuh anggota yang aktif menjual gabah lewat koperasi. Sisanya tetap menjual ke tengkulak karena pembayaran tunai diterima di hari yang sama, sedangkan koperasi membayar dua minggu setelah gabah diterima. Pengurus menilai bahwa masalah utama koperasi bukan harga jual, melainkan kecepatan pembayaran, dan sedang menjajaki pinjaman modal kerja agar dapat membayar anggota dalam tiga hari.' };
const P2 = { id: 'Sebuah perpustakaan kota mengubah jam bukanya dari pukul 08.00 sampai 16.00 menjadi pukul 10.00 sampai 20.00 selama enam bulan uji coba. Kepala perpustakaan beralasan bahwa sebagian besar pengunjung adalah pelajar dan pekerja yang baru dapat datang sore hari. Selama uji coba, jumlah kunjungan harian naik dari rata-rata 90 menjadi 140 orang, dan peminjaman buku naik sekitar sepertiga. Namun, petugas melaporkan bahwa ruang baca sering penuh setelah pukul 17.00 sementara pagi hari hampir kosong. Dewan kota belum memutuskan apakah jam buka baru akan dipermanenkan karena biaya listrik dan lembur petugas naik, dan belum ada data tentang siapa yang kehilangan akses akibat perpustakaan buka dua jam lebih siang.' };
function wac(p, d, kind, stem, opts, ans, x) {
  return item({ family: 'verbal', subtype: 'wacana', d, passage: p, stem: { id: stem }, opts, ans, x: Object.assign({ tag: 'wacana · ' + kind }, x), skills: ['wacana', kind], traps: ['pengetahuan_luar', 'kata_kunci_menyesatkan'], t: 60, map: { tiu: 'analogi', tkd: 'verbal', tpa: 'verbal' } });
}
const WACANA = [
  wac(P1, 1, 'ide pokok', 'Gagasan utama bacaan tersebut adalah …', ['koperasi berkembang, tetapi kecepatan pembayaran menjadi hambatan utama keaktifan anggota', 'harga jual gabah koperasi lebih rendah daripada harga tengkulak', 'koperasi gagal karena anggotanya tidak setia', 'pupuk kolektif adalah layanan paling menguntungkan koperasi', 'pinjaman modal kerja sudah diperoleh koperasi'], 0, { pola: 'Ide pokok mencakup seluruh bacaan, bukan satu kalimat saja.', langkah: 'Paragraf bergerak dari pertumbuhan ke masalah (separuh anggota tidak aktif) ke diagnosis (kecepatan pembayaran). Opsi yang memuat ketiganya adalah ide pokok.', jebakan: 'Opsi B menyatakan hal yang justru dibantah bacaan (“bukan harga jual”); E belum terjadi (“sedang menjajaki”).', cepat: 'Cari kalimat yang memuat kata penilai pengurus (“masalah utama … bukan …, melainkan …”).' }),
  wac(P1, 1, 'detail', 'Menurut bacaan, alasan sebagian anggota tetap menjual gabah ke tengkulak adalah …', ['tengkulak membayar tunai pada hari yang sama', 'tengkulak membeli dengan harga lebih tinggi', 'koperasi tidak menerima gabah basah', 'koperasi hanya melayani anggota lama', 'koperasi mewajibkan pembelian pupuk'], 0, { pola: 'Pertanyaan detail: jawabannya tertulis, bukan disimpulkan.', langkah: 'Cari kalimat dengan kata “tengkulak”: “karena pembayaran tunai diterima di hari yang sama”.', jebakan: 'Opsi B terdengar masuk akal, tetapi bacaan tidak menyebut harga tengkulak.', cepat: 'Kata kunci pertanyaan (“tengkulak”) menunjuk tepat ke satu kalimat.' }),
  wac(P1, 2, 'simpulan', 'Pernyataan yang dapat disimpulkan dari bacaan adalah …', ['jika koperasi membayar dalam tiga hari, pengurus berharap lebih banyak anggota menjual lewat koperasi', 'tengkulak akan kehilangan semua pemasok setelah koperasi mendapat pinjaman', 'anggota yang tidak aktif tidak lagi membeli pupuk lewat koperasi', 'koperasi mengalami kerugian pada 2024', 'layanan pengering gabah tidak diminati'], 0, { pola: 'Simpulan sah: didukung bacaan tanpa menambah informasi luar.', langkah: 'Diagnosis pengurus (kecepatan pembayaran) + rencana (bayar tiga hari) → harapan yang masuk akal: keaktifan naik. Opsi lain menambah klaim yang tidak ada.', jebakan: 'Opsi B terlalu kuat (“semua”); C dan D tidak disebut.', cepat: 'Coret opsi dengan kata mutlak (“semua”, “tidak lagi”) yang tidak ada dalam bacaan.' }),
  wac(P1, 2, 'rujukan', 'Kata “sisanya” pada kalimat kelima merujuk pada …', ['anggota yang tidak aktif menjual gabah lewat koperasi', 'pengurus koperasi', 'toko di kota kecamatan', 'layanan koperasi yang baru', 'gabah yang belum dikeringkan'], 0, { pola: 'Kata rujukan menunjuk pada kelompok yang disebut tepat sebelumnya.', langkah: 'Kalimat sebelumnya: “hanya sekitar separuh anggota yang aktif …”; “sisanya” = separuh anggota yang lain.', jebakan: 'Opsi E mengaitkan “sisa” dengan gabah karena kedekatan kata.', cepat: 'Ganti kata rujukan dengan opsi dan baca ulang kalimatnya.' }),
  wac(P1, 3, 'makna kata', 'Kata “menjajaki” dalam kalimat terakhir paling dekat maknanya dengan …', ['menjelajahi kemungkinan', 'menandatangani', 'menolak', 'mengumumkan', 'melunasi'], 0, { pola: 'Makna kata ditentukan oleh konteks kalimat.', langkah: '“Sedang menjajaki pinjaman” berarti pinjaman belum pasti; yang dilakukan adalah menelusuri kemungkinannya.', jebakan: 'Opsi B mengandaikan pinjaman sudah disetujui.', cepat: 'Perhatikan kata “sedang”: proses belum selesai.' }),
  wac(P2, 1, 'ide pokok', 'Topik utama bacaan tersebut adalah …', ['hasil uji coba perubahan jam buka perpustakaan dan pertimbangan yang belum selesai', 'alasan pelajar jarang membaca buku', 'kenaikan biaya listrik di perpustakaan kota', 'ruang baca perpustakaan terlalu kecil', 'keputusan dewan kota untuk menutup perpustakaan'], 0, { pola: 'Ide pokok merangkum perubahan, hasil, dan sisa pertanyaan.', langkah: 'Paragraf: perubahan jam → hasil (kunjungan naik) → masalah (penuh sore, kosong pagi, biaya, akses) → belum diputuskan.', jebakan: 'Opsi C dan D adalah detail pendukung, bukan topik.', cepat: 'Kalimat pertama dan terakhir biasanya membingkai topik.' }),
  wac(P2, 1, 'detail', 'Berapa kenaikan rata-rata kunjungan harian selama uji coba?', ['50 orang', '90 orang', '140 orang', '30 orang', 'sepertiga'], 0, { pola: 'Detail numerik: hitung dari angka yang diberikan.', langkah: '140 − 90 = 50 orang per hari.', jebakan: 'Opsi B dan C adalah angka mentah dari bacaan; E adalah kenaikan peminjaman, bukan kunjungan.', cepat: 'Pertanyaan menanyakan kenaikan, jadi selisih, bukan angka akhir.' }),
  wac(P2, 2, 'simpulan', 'Hal yang paling mungkin dimaksud dengan “siapa yang kehilangan akses” adalah …', ['pengunjung yang biasa datang antara pukul 08.00 dan 10.00', 'pelajar yang datang sore hari', 'petugas yang bekerja lembur', 'anggota dewan kota', 'toko buku di sekitar perpustakaan'], 0, { pola: 'Simpulan dari data yang ada: jam buka bergeser dua jam lebih siang, maka yang terdampak adalah pengunjung pagi.', langkah: 'Jam buka lama 08.00; jam baru 10.00; yang “kehilangan” adalah mereka yang datang pada dua jam itu.', jebakan: 'Opsi B justru kelompok yang diuntungkan.', cepat: 'Bandingkan jam lama dan jam baru; cari selisihnya.' }),
  wac(P2, 2, 'sikap penulis', 'Sikap penulis terhadap perubahan jam buka adalah …', ['netral: memaparkan manfaat dan biayanya tanpa memihak', 'mendukung penuh karena kunjungan naik', 'menolak karena biaya listrik naik', 'menganggap uji coba gagal', 'mengusulkan perpustakaan buka 24 jam'], 0, { pola: 'Sikap penulis dibaca dari keseimbangan argumen dan pilihan kata.', langkah: 'Bacaan memberi data positif (kunjungan, peminjaman) dan negatif (biaya, ruang, akses) tanpa kata penilai; penulis netral.', jebakan: 'Mengira angka kenaikan berarti penulis mendukung.', cepat: 'Cari kata penilai (“seharusnya”, “sayangnya”); jika tidak ada, sikapnya netral.' }),
  wac(P2, 3, 'struktur', 'Fungsi kalimat yang diawali dengan “Namun” dalam bacaan adalah …', ['menghadirkan temuan yang membatasi keberhasilan uji coba', 'mengulang alasan kepala perpustakaan', 'menyimpulkan bahwa uji coba berhasil', 'memperkenalkan topik baru tentang petugas', 'menjelaskan asal data kunjungan'], 0, { pola: 'Konjungsi pertentangan menandai perubahan arah argumen.', langkah: 'Sebelum “Namun”: data positif. Sesudahnya: ruang penuh dan kosong, yaitu sisi masalah dari hasil yang sama.', jebakan: 'Mengira kalimat itu pindah topik ke petugas; petugas hanya sumber laporan.', cepat: '“Namun/tetapi” = “ada sisi lain dari hal yang baru dikatakan”.' })
];

module.exports = { items: [].concat(SINONIM, ANTONIM, ANALOGI, WACANA) };
