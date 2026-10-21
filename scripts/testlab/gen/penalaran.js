'use strict';
/* Generated reasoning items: silogisme (valid forms and the classic invalid forms, keyed to
   "tidak dapat disimpulkan"), kondisional (ponens, tollens, the two fallacies, chains) and
   ingkaran (negations of quantified and conditional statements). Terms are drawn from neutral
   noun sets so no item leans on world knowledge. */
const { rng, item } = require('./util');

const SETS = [
  ['peserta pelatihan', 'pemegang kartu anggota', 'pengguna aplikasi', 'penerima buletin'],
  ['karyawan bagian gudang', 'pemakai rompi hijau', 'petugas sif malam', 'pemegang kunci loker'],
  ['mahasiswa semester akhir', 'anggota klub debat', 'penerima beasiswa', 'peserta magang'],
  ['warung di Jalan Melati', 'warung yang buka pagi', 'warung yang menerima pembayaran nontunai', 'warung yang menjual kopi'],
  ['penulis di majalah itu', 'penyunting lepas', 'pengguna kamera analog', 'alumni kursus foto'],
  ['kendaraan di parkiran utara', 'mobil berwarna putih', 'kendaraan dinas', 'kendaraan yang terdaftar tahun ini'],
  ['relawan posko', 'pemegang sertifikat pertolongan pertama', 'pengemudi ambulans', 'anggota tim logistik'],
  ['tanaman di rumah kaca', 'tanaman yang disiram tiap pagi', 'tanaman berbunga merah', 'tanaman dari pembibitan selatan']
];
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const NONE = { id: 'Tidak dapat ditarik kesimpulan yang pasti', en: 'No definite conclusion can be drawn' };

function silogisme(seed, count) {
  const r = rng(seed); const out = [];
  const forms = [
    { d: 1, name: 'Barbara', p: (A, B, C) => ['Semua ' + A + ' adalah ' + B + '.', 'Semua ' + B + ' adalah ' + C + '.'], key: (A, B, C) => 'Semua ' + A + ' adalah ' + C + '.', wrong: (A, B, C) => ['Semua ' + C + ' adalah ' + A + '.', 'Sebagian ' + A + ' bukan ' + C + '.', 'Semua ' + B + ' adalah ' + A + '.'], pola: 'Rantai universal: jika A ⊂ B dan B ⊂ C maka A ⊂ C.', jebakan: 'Membalik arah kesimpulan (semua C adalah A) tidak sah: C bisa lebih luas dari A.' },
    { d: 1, name: 'Celarent', p: (A, B, C) => ['Tidak ada ' + A + ' yang merupakan ' + B + '.', 'Semua ' + C + ' adalah ' + A + '.'], key: (A, B, C) => 'Tidak ada ' + C + ' yang merupakan ' + B + '.', wrong: (A, B, C) => ['Semua ' + B + ' adalah ' + C + '.', 'Sebagian ' + C + ' adalah ' + B + '.', 'Semua ' + A + ' adalah ' + C + '.'], pola: 'C seluruhnya berada di dalam A, dan A terpisah dari B, maka C terpisah dari B.', jebakan: 'Mengira pernyataan negatif tidak bisa dirantaikan; justru bisa jika salah satu premis universal.' },
    { d: 2, name: 'Darii', p: (A, B, C) => ['Semua ' + A + ' adalah ' + B + '.', 'Sebagian ' + C + ' adalah ' + A + '.'], key: (A, B, C) => 'Sebagian ' + C + ' adalah ' + B + '.', wrong: (A, B, C) => ['Semua ' + C + ' adalah ' + B + '.', 'Sebagian ' + B + ' bukan ' + C + '.', 'Semua ' + B + ' adalah ' + A + '.'], pola: 'Sebagian C masuk ke A, dan seluruh A masuk ke B, maka sebagian C masuk ke B.', jebakan: '“Sebagian” tidak boleh naik menjadi “semua”; kesimpulan hanya sekuat premis terlemah.' },
    { d: 2, name: 'Ferio', p: (A, B, C) => ['Tidak ada ' + A + ' yang merupakan ' + B + '.', 'Sebagian ' + C + ' adalah ' + A + '.'], key: (A, B, C) => 'Sebagian ' + C + ' bukan ' + B + '.', wrong: (A, B, C) => ['Tidak ada ' + C + ' yang merupakan ' + B + '.', 'Sebagian ' + B + ' adalah ' + C + '.', 'Semua ' + C + ' adalah ' + A + '.'], pola: 'Sebagian C ada di A, dan A terpisah dari B, maka sebagian C (yang ada di A) bukan B.', jebakan: 'Memperluas ke “tidak ada C yang B”: C yang di luar A bisa saja B.' },
    { d: 2, name: 'undistributed', p: (A, B, C) => ['Semua ' + A + ' adalah ' + B + '.', 'Semua ' + C + ' adalah ' + B + '.'], key: () => null, wrong: (A, B, C) => ['Semua ' + A + ' adalah ' + C + '.', 'Sebagian ' + A + ' adalah ' + C + '.', 'Tidak ada ' + A + ' yang merupakan ' + C + '.'], pola: 'Dua himpunan yang sama-sama berada di dalam B tidak harus beririsan: suku tengah (B) tidak tersebar.', jebakan: 'Bentuk yang tampak “semua, semua” menggoda untuk disimpulkan “semua A adalah C”; gambar diagram Venn: A dan C bisa terpisah di dalam B.' },
    { d: 3, name: 'two_particular', p: (A, B, C) => ['Sebagian ' + A + ' adalah ' + B + '.', 'Sebagian ' + B + ' adalah ' + C + '.'], key: () => null, wrong: (A, B, C) => ['Sebagian ' + A + ' adalah ' + C + '.', 'Semua ' + A + ' adalah ' + C + '.', 'Sebagian ' + A + ' bukan ' + C + '.'], pola: 'Dua premis partikular tidak pernah menghasilkan kesimpulan sah.', jebakan: 'Mengira dua “sebagian” bisa dirantai; bagian A yang B belum tentu bagian B yang C.' },
    { d: 3, name: 'neg_neg', p: (A, B, C) => ['Tidak ada ' + A + ' yang merupakan ' + B + '.', 'Tidak ada ' + B + ' yang merupakan ' + C + '.'], key: () => null, wrong: (A, B, C) => ['Tidak ada ' + A + ' yang merupakan ' + C + '.', 'Semua ' + A + ' adalah ' + C + '.', 'Sebagian ' + A + ' adalah ' + C + '.'], pola: 'Dua premis negatif tidak menghasilkan kesimpulan: A dan C sama-sama terpisah dari B tetapi hubungan A dengan C bebas.', jebakan: 'Merantai dua “tidak ada” menjadi “tidak ada A yang C”.' },
    { d: 3, name: 'chain3', p: (A, B, C, D) => ['Semua ' + A + ' adalah ' + B + '.', 'Semua ' + B + ' adalah ' + C + '.', 'Tidak ada ' + C + ' yang merupakan ' + D + '.'], key: (A, B, C, D) => 'Tidak ada ' + A + ' yang merupakan ' + D + '.', wrong: (A, B, C, D) => ['Semua ' + D + ' adalah ' + C + '.', 'Sebagian ' + A + ' adalah ' + D + '.', 'Tidak ada ' + B + ' yang merupakan ' + A + '.'], pola: 'Rantai tiga premis: A ⊂ B ⊂ C, dan C terpisah dari D, maka A terpisah dari D.', jebakan: 'Berhenti di premis kedua; atau membalik premis negatif.' }
  ];
  for (let n = 0; n < count; n++) {
    const f = forms[n % forms.length];
    const S = r.shuffle(r.pick(SETS));
    const [A, B, C, D] = S;
    const prem = f.p(A, B, C, D);
    const key = f.key(A, B, C, D);
    const wrong = f.wrong(A, B, C, D).map(cap);
    const opts = key ? r.shuffle([cap(key)].concat(wrong.slice(0, 2))) : r.shuffle(wrong.slice(0, 3));
    const full = key ? opts.map(o => ({ id: o })).concat([NONE]) : opts.map(o => ({ id: o })).concat([NONE]);
    const ans = key ? full.findIndex(o => o.id === cap(key)) : full.length - 1;
    out.push(item({ family: 'penalaran', subtype: 'silogisme', d: f.d, format: 'mcq4', gen: true,
      stem: { id: prem.map(cap).join(' ') + ' Kesimpulan yang sah adalah …', en: prem.map(cap).join(' ') + ' (Indonesian syllogism) The valid conclusion is …' },
      opts: full, ans,
      x: { pola: f.pola, langkah: key ? 'Gambar tiga lingkaran: tempatkan premis pertama, lalu premis kedua, lalu baca hubungan suku-suku ujung. Kesimpulan: ' + cap(key) : 'Gambar diagramnya dan cari dua gambar berbeda yang sama-sama memenuhi premis; jika hubungan ujungnya berubah, tidak ada kesimpulan sah.', jebakan: f.jebakan, cepat: 'Aturan cepat: dua premis negatif, dua premis partikular, atau suku tengah yang tidak pernah “semua/tidak ada” berarti tidak ada kesimpulan.', tag: 'silogisme · ' + f.name },
      skills: ['silogisme', f.name], traps: ['balik_arah', 'perluasan_sebagian', 'suku_tengah'], t: f.d === 1 ? 45 : f.d === 2 ? 60 : 75, map: { tiu: 'silogisme', tkd: 'penalaran', tpa: 'penalaran' } }));
  }
  return out;
}

const COND = [
  [['hujan', 'turun sore ini'], ['jalan menuju pasar', 'tergenang'], ['angkutan desa', 'berhenti beroperasi']],
  [['listrik', 'padam lebih dari satu jam'], ['genset kantor', 'menyala'], ['tagihan bahan bakar bulan ini', 'naik']],
  [['tim', 'lolos babak penyisihan'], ['pelatih', 'memanggil pemain cadangan'], ['jadwal latihan', 'ditambah']],
  [['mesin kasir', 'diperbarui'], ['struk', 'dicetak dalam dua bahasa'], ['pelanggan asing', 'bertambah']],
  [['pintu air', 'dibuka'], ['sawah di hilir', 'mendapat air'], ['panen', 'dimulai lebih awal']],
  [['pesanan', 'melebihi lima puluh kotak'], ['dapur', 'menambah sif kedua'], ['pengiriman', 'dilakukan dua kali sehari']]
].map(row => row.map(([s, v]) => ({ t: s + ' ' + v, n: s + ' tidak ' + v })));
const neg = s => (typeof s === 'object' ? s.n : 'tidak ' + s);
const T = s => (typeof s === 'object' ? s.t : s);
function kondisional(seed, count) {
  const r = rng(seed); const out = [];
  const forms = [
    { d: 1, name: 'ponens', given: (p, q) => cap(T(p)) + '.', key: (p, q) => cap(T(q)) + '.', wrong: (p, q) => [cap(neg(q)) + '.', cap(neg(p)) + '.'], pola: 'Modus ponens: jika p maka q; p benar; maka q benar.', jebakan: 'Tidak ada jebakan pada bentuk ini selain terburu-buru membaca premis.' },
    { d: 1, name: 'tollens', given: (p, q) => cap(neg(q)) + '.', key: (p, q) => cap(neg(p)) + '.', wrong: (p, q) => [cap(T(p)) + '.', cap(T(q)) + '.'], pola: 'Modus tollens: jika p maka q; q salah; maka p salah.', jebakan: 'Menyimpulkan “p” dari “tidak q” (tanda terbalik).' },
    { d: 2, name: 'affirm_consequent', given: (p, q) => cap(T(q)) + '.', key: () => null, wrong: (p, q) => [cap(T(p)) + '.', cap(neg(p)) + '.', cap(neg(q)) + '.'], pola: 'Mengiyakan akibat: q bisa terjadi karena sebab lain, jadi p tidak pasti.', jebakan: 'Membaca “jika p maka q” sebagai “jika q maka p”.' },
    { d: 2, name: 'deny_antecedent', given: (p, q) => cap(neg(p)) + '.', key: () => null, wrong: (p, q) => [cap(neg(q)) + '.', cap(T(q)) + '.', cap(T(p)) + '.'], pola: 'Mengingkari sebab: tanpa p, q masih mungkin terjadi lewat jalan lain.', jebakan: 'Mengira “jika p maka q” berarti “jika tidak p maka tidak q”.' },
    { d: 3, name: 'chain', given: (p, q, s) => 'Jika ' + T(q) + ', maka ' + T(s) + '. ' + cap(T(p)) + '.', key: (p, q, s) => cap(T(s)) + '.', wrong: (p, q, s) => [cap(neg(s)) + '.', cap(neg(q)) + '.'], pola: 'Rantai: p → q dan q → s, maka p → s (silogisme hipotetis).', jebakan: 'Berhenti pada q; atau membalik salah satu mata rantai.' },
    { d: 3, name: 'chain_tollens', given: (p, q, s) => 'Jika ' + T(q) + ', maka ' + T(s) + '. ' + cap(neg(s)) + '.', key: (p, q, s) => cap(neg(p)) + '.', wrong: (p, q, s) => [cap(T(p)) + '.', cap(T(q)) + '.'], pola: 'Rantai mundur: tidak s → tidak q → tidak p.', jebakan: 'Mengingkari hanya satu langkah; atau membaca “tidak s” sebagai “s”.' }
  ];
  for (let n = 0; n < count; n++) {
    const f = forms[n % forms.length];
    const [p, q, s] = r.pick(COND);
    const key = f.key(p, q, s);
    const wrong = f.wrong(p, q, s);
    const base = key ? r.shuffle([key].concat(wrong)) : r.shuffle(wrong);
    const full = base.map(o => ({ id: o })).concat([NONE]);
    const ans = key ? full.findIndex(o => o.id === key) : full.length - 1;
    out.push(item({ family: 'penalaran', subtype: 'kondisional', d: f.d, format: 'mcq4', gen: true,
      stem: { id: 'Jika ' + T(p) + ', maka ' + T(q) + '. ' + f.given(p, q, s) + ' Kesimpulan yang sah adalah …', en: 'Jika ' + T(p) + ', maka ' + T(q) + '. ' + f.given(p, q, s) + ' (Indonesian conditional) The valid conclusion is …' },
      opts: full, ans,
      x: { pola: f.pola, langkah: 'Tandai p dan q, tulis bentuknya (p → q), cocokkan premis kedua dengan empat bentuk: p (ponens), tidak q (tollens), q atau tidak p (tidak sah).', jebakan: f.jebakan, cepat: 'Hanya dua bentuk sah: “p” memberi “q”; “tidak q” memberi “tidak p”. Lainnya: tidak dapat disimpulkan.', tag: 'kondisional · ' + f.name },
      skills: ['kondisional', f.name], traps: ['mengiyakan_akibat', 'mengingkari_sebab'], t: f.d === 1 ? 40 : 60, map: { tiu: 'silogisme', tkd: 'penalaran', tpa: 'penalaran' } }));
  }
  return out;
}

function ingkaran(seed, count) {
  const r = rng(seed); const out = [];
  const forms = [
    { d: 1, st: (A, B) => 'Semua ' + A + ' adalah ' + B + '.', key: (A, B) => 'Sebagian ' + A + ' bukan ' + B + '.', wrong: (A, B) => ['Tidak ada ' + A + ' yang merupakan ' + B + '.', 'Semua ' + A + ' bukan ' + B + '.', 'Sebagian ' + A + ' adalah ' + B + '.'], pola: 'Ingkaran “semua A adalah B” cukup satu A yang bukan B: “sebagian A bukan B”.', jebakan: 'Mengambil lawan ekstrem (“tidak ada”) sebagai ingkaran.' },
    { d: 1, st: (A, B) => 'Sebagian ' + A + ' adalah ' + B + '.', key: (A, B) => 'Tidak ada ' + A + ' yang merupakan ' + B + '.', wrong: (A, B) => ['Sebagian ' + A + ' bukan ' + B + '.', 'Semua ' + A + ' adalah ' + B + '.', 'Sebagian ' + B + ' bukan ' + A + '.'], pola: 'Ingkaran “sebagian A adalah B” adalah “tidak ada A yang B”.', jebakan: 'Menjawab “sebagian A bukan B”, yang bisa benar bersamaan dengan pernyataan asli.' },
    { d: 2, st: (A, B, p, q) => 'Jika ' + T(p) + ', maka ' + T(q) + '.', key: (A, B, p, q) => cap(T(p)) + ' dan ' + neg(q) + '.', wrong: (A, B, p, q) => ['Jika ' + neg(p) + ', maka ' + neg(q) + '.', 'Jika ' + T(p) + ', maka ' + neg(q) + '.', cap(neg(p)) + ' atau ' + T(q) + '.'], pola: 'Ingkaran implikasi p → q adalah “p dan tidak q”.', jebakan: 'Mengingkari dengan membalik atau menegasikan kedua bagian; “tidak p atau q” justru setara dengan implikasinya.' },
    { d: 2, st: (A, B, p, q) => cap(T(p)) + ' dan ' + T(q) + '.', key: (A, B, p, q) => cap(neg(p)) + ' atau ' + neg(q) + '.', wrong: (A, B, p, q) => [cap(neg(p)) + ' dan ' + neg(q) + '.', cap(T(p)) + ' atau ' + T(q) + '.', cap(neg(p)) + ' dan ' + T(q) + '.'], pola: 'De Morgan: ingkaran “p dan q” adalah “tidak p atau tidak q”.', jebakan: 'Menegasikan keduanya tetapi mempertahankan “dan”.' },
    { d: 3, st: (A, B, p, q) => 'Jika semua ' + A + ' adalah ' + B + ', maka ' + T(q) + '.', key: (A, B, p, q) => 'Semua ' + A + ' adalah ' + B + ' dan ' + neg(q) + '.', wrong: (A, B, p, q) => ['Sebagian ' + A + ' bukan ' + B + ' dan ' + neg(q) + '.', 'Jika sebagian ' + A + ' bukan ' + B + ', maka ' + neg(q) + '.', 'Sebagian ' + A + ' bukan ' + B + ' atau ' + T(q) + '.'], pola: 'Ingkaran implikasi: antesedennya tetap, konsekuennya diingkari; “p dan tidak q”.', jebakan: 'Ikut mengingkari anteseden (“sebagian A bukan B”), padahal hanya konsekuen yang diingkari.' }
  ];
  for (let n = 0; n < count; n++) {
    const f = forms[n % forms.length];
    const S = r.shuffle(r.pick(SETS)); const [p, q] = r.pick(COND);
    const key = f.key(S[0], S[1], p, q), wrong = f.wrong(S[0], S[1], p, q);
    const full = r.shuffle([key].concat(wrong)).map(o => ({ id: cap(o) }));
    const ans = full.findIndex(o => o.id === cap(key));
    out.push(item({ family: 'penalaran', subtype: 'ingkaran', d: f.d, format: 'mcq4', gen: true,
      stem: { id: 'Ingkaran dari pernyataan “' + f.st(S[0], S[1], p, q) + '” adalah …', en: 'The negation of “' + f.st(S[0], S[1], p, q) + '” (Indonesian) is …' },
      opts: full, ans,
      x: { pola: f.pola, langkah: 'Tentukan bentuk pernyataan (semua / sebagian / jika-maka / dan / atau), lalu terapkan tabel ingkaran: semua ↔ sebagian bukan; sebagian ↔ tidak ada; p → q ↔ p dan tidak q; p dan q ↔ tidak p atau tidak q.', jebakan: f.jebakan, cepat: 'Ingkaran harus selalu bernilai kebalikan dari pernyataan asli; uji dengan satu contoh kecil.', tag: 'ingkaran' },
      skills: ['ingkaran', 'de_morgan'], traps: ['lawan_ekstrem', 'negasi_ganda'], t: f.d === 1 ? 35 : 55, map: { tiu: 'silogisme', tkd: 'penalaran', tpa: 'penalaran' } }));
  }
  return out;
}

module.exports = { silogisme, kondisional, ingkaran };
