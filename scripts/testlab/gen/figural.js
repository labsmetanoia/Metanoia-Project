'use strict';
/* Generated figural and spatial items. Every figure is a parameter tuple (glyph, rotation,
   mirror, fill, count) rendered to a small SVG at build time, so keys are exact: two frames
   are equal only when their tuples are. Chiral glyphs are used wherever mirror versus
   rotation matters, symmetric ones where only count or shading moves. */
const { rng, item } = require('./util');

/* glyphs: chiral (no rotation equals a mirror) and symmetric */
const GLYPH = {
  flag: '<path d="M30 15v70M30 20h40l-12 14 12 14H30"/><circle cx="30" cy="85" r="6" fill="currentColor"/>',
  ell: '<path d="M28 18h18v40h26v24H28z" stroke-linejoin="round"/><circle cx="64" cy="26" r="5" fill="currentColor"/>',
  key: '<circle cx="34" cy="36" r="14"/><path d="M44 46l30 30M66 68l8-8M58 60l6-6"/><circle cx="34" cy="36" r="4" fill="currentColor"/>',
  arrowdot: '<path d="M22 60L52 30l10 10-30 30zM52 30l16-4-4 16"/><circle cx="76" cy="78" r="6" fill="currentColor"/>',
  tri: '<path d="M50 18L84 80H16z"/>', sq: '<rect x="22" y="22" width="56" height="56"/>', circ: '<circle cx="50" cy="50" r="30"/>',
  pent: '<path d="M50 16l34 25-13 40H29L16 41z"/>', hex: '<path d="M50 16l30 17v34L50 84 20 67V33z"/>'
};
const CHIRAL = ['flag', 'ell', 'key', 'arrowdot'], SYM = ['tri', 'sq', 'pent', 'hex'];
const FILLS = ['none', 'dots', 'full', 'cross'];
const FILL_ID = { none: 'kosong', dots: 'bertitik', full: 'penuh', cross: 'berpetak' };
const PERIOD = { tri: 120, sq: 90, pent: 72, hex: 60 };
const gcd = (a, b) => b ? gcd(b, a % b) : a, lcm = (a, b) => a * b / gcd(a, b);
/* visual identity: symmetric glyphs ignore mirroring (a mirror is the negative rotation) and
   repeat every PERIOD degrees; the cross pattern repeats every 90°, dots never change */
function vis(f) {
  const n = norm(f);
  if (CHIRAL.indexOf(n.g) >= 0) return JSON.stringify(n);
  let p = PERIOD[n.g]; if (n.fill === 'cross') p = lcm(p, 90);
  let rot = n.mir ? -n.rot : n.rot; rot = ((rot % p) + p) % p;
  return JSON.stringify({ g: n.g, rot, fill: n.fill, n: n.n, scale: n.scale });
}

function render(f, size) {
  size = size || 100;
  const fillAttr = f.fill === 'full' ? 'fill="currentColor"' : f.fill === 'dots' ? 'fill="url(#tlDots)"' : f.fill === 'cross' ? 'fill="url(#tlCross)"' : 'fill="none"';
  let tr = '';
  if (f.mir) tr += 'translate(100 0) scale(-1 1) ';
  if (f.rot) tr += 'rotate(' + f.rot + ' 50 50) ';
  if (f.scale && f.scale !== 1) tr += 'translate(50 50) scale(' + f.scale + ') translate(-50 -50) ';
  let dots = '';
  for (let i = 0; i < (f.n || 0); i++) { const x = 14 + i * 12; dots += '<circle cx="' + x + '" cy="90" r="4" fill="currentColor" stroke="none"/>'; }
  return '<svg viewBox="0 0 100 100" width="' + size + '" height="' + size + '" aria-hidden="true"><defs><pattern id="tlDots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="4.5" cy="4.5" r="1.8" fill="currentColor"/></pattern><pattern id="tlCross" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M5 0v10M0 5h10" stroke="currentColor" stroke-width="1.4"/></pattern></defs><rect x="2" y="2" width="96" height="96" rx="8" fill="none" stroke="currentColor" stroke-opacity=".25"/><g stroke="currentColor" stroke-width="4" stroke-linecap="round" ' + fillAttr + ' transform="' + tr.trim() + '">' + GLYPH[f.g] + '</g>' + dots + '</svg>';
}
const norm = f => ({ g: f.g, rot: ((f.rot || 0) % 360 + 360) % 360, mir: !!f.mir, fill: f.fill || 'none', n: f.n || 0, scale: f.scale || 1 });
const same = (a, b) => vis(a) === vis(b);
const alt = f => (f.g) + ', putaran ' + ((((f.rot || 0) % 360) + 360) % 360) + '°' + (f.mir ? ', cermin' : '') + ', isi ' + (FILL_ID[f.fill || 'none']) + (f.n ? ', ' + f.n + ' titik' : '');

function optionsFor(key, cands, r) {
  const out = [key];
  for (const c of cands) { if (out.length >= 5) break; if (!out.some(o => same(o, c))) out.push(c); }
  /* fallback distractors: rotation steps, then dot counts, then fills, with a hard cap */
  const fb = [];
  [45, 90, 135, 180, 225, 270, 315].forEach(d => fb.push(Object.assign({}, key, { rot: (key.rot || 0) + d })));
  [0, 1, 2, 3, 4].forEach(n => fb.push(Object.assign({}, key, { n })));
  FILLS.forEach(f => fb.push(Object.assign({}, key, { fill: f })));
  for (const c of fb) { if (out.length >= 5) break; if (!out.some(o => same(o, c))) out.push(c); }
  const order = r.shuffle(out);
  return { opts: order.map(f => ({ id: '', fig: norm(f), alt: alt(f) })), ans: order.findIndex(f => same(f, key)) };
}
function assetsFor(frames, label) { return [{ kind: 'frames', figs: frames.map(norm), alt: label + ': ' + frames.map(alt).join(' | ') }]; }

/* ─── deret gambar (serial) ─── */
function serial(seed, count) {
  const r = rng(seed); const out = [];
  const rules = [
    { d: 1, name: 'rotasi', step: (f, i) => Object.assign({}, f, { rot: f.rot + 45 * i }), txt: 'Gambar berputar 45° searah jarum jam setiap langkah.', chiral: true },
    { d: 1, name: 'jumlah', step: (f, i) => Object.assign({}, f, { n: 1 + i % 4 }), txt: 'Jumlah titik bertambah satu setiap langkah (1, 2, 3, 4, lalu kembali ke 1).', chiral: false },
    { d: 2, name: 'rotasi+isi', step: (f, i) => Object.assign({}, f, { rot: f.rot + 90 * i, fill: i % 2 ? 'full' : 'none' }), txt: 'Dua atribut: putaran 90° setiap langkah dan isi bergantian kosong, penuh.', chiral: true },
    { d: 2, name: 'isi+jumlah', step: (f, i) => Object.assign({}, f, { fill: FILLS[i % 4], n: (i % 3) + 1 }), txt: 'Isi berputar dalam siklus empat (kosong, bertitik, penuh, berpetak) sementara titik di bawah gambar berputar dalam siklus tiga.', chiral: false },
    { d: 3, name: 'rotasi+cermin+jumlah', step: (f, i) => Object.assign({}, f, { rot: f.rot + 90 * Math.floor(i / 2), mir: i % 2 === 1, n: 1 + i % 3 }), txt: 'Tiga atribut: cermin bergantian setiap langkah, putaran 90° setiap dua langkah, titik dalam siklus 1, 2, 3.', chiral: true },
    { d: 3, name: 'rotasi -45 + isi', step: (f, i) => Object.assign({}, f, { rot: f.rot - 45 * i, fill: FILLS[(i * 2) % 4] }), txt: 'Putaran 45° berlawanan arah jarum jam setiap langkah; isi bergantian kosong, penuh.', chiral: true }
  ];
  for (let n = 0; n < count; n++) {
    const R = rules[n % rules.length];
    const base = { g: r.pick(R.chiral ? CHIRAL : SYM), rot: r.pick([0, 45, 90]), mir: false, fill: 'none', n: 0 };
    const frames = [0, 1, 2, 3].map(i => R.step(base, i));
    const key = R.step(base, 4);
    const cands = [Object.assign({}, key, { mir: !key.mir }), Object.assign({}, key, { rot: key.rot + 45 }), Object.assign({}, key, { rot: key.rot - 45 }), Object.assign({}, key, { fill: key.fill === 'full' ? 'none' : 'full' }), Object.assign({}, key, { n: (key.n + 1) % 5 }), frames[3]];
    const { opts, ans } = optionsFor(key, cands, r);
    out.push(item({ family: 'figural', subtype: 'deret_gambar', d: R.d, gen: true,
      stem: { id: 'Perhatikan empat gambar berikut. Gambar kelima yang melanjutkan pola adalah …', en: 'Look at the four figures. The fifth figure that continues the pattern is …' },
      opts, ans, assets: assetsFor(frames, 'Deret gambar'),
      x: { pola: R.txt, langkah: 'Metode atribut: periksa arah (putaran), lalu jumlah titik di bawah gambar, lalu isi, lalu posisi, satu per satu. Catat atribut mana yang berubah tiap langkah dan atribut mana yang diam.', jebakan: 'Pengecoh yang paling sering dipilih: bayangan cermin (bukan putaran), putaran yang kurang atau lebih 45°, dan isi dari langkah sebelumnya.', cepat: 'Pecahkan satu atribut, coret opsi yang melanggarnya, baru pecahkan atribut berikutnya.', tag: 'deret_gambar · ' + R.name },
      skills: ['figural', 'atribut', R.name], traps: ['cermin_vs_putaran', 'langkah_sebelumnya'], t: R.d === 1 ? 40 : R.d === 2 ? 55 : 75, map: { tiu: 'figural', tkd: 'figural', tpa: 'figural' } }));
  }
  return out;
}

/* ─── analogi gambar ─── */
function analogi(seed, count) {
  const r = rng(seed); const out = [];
  const T = [
    { d: 1, name: 'putar 90°', f: a => Object.assign({}, a, { rot: a.rot + 90 }), txt: 'B adalah A yang diputar 90° searah jarum jam.', chiral: true },
    { d: 1, name: 'isi dibalik', f: a => Object.assign({}, a, { fill: a.fill === 'full' ? 'none' : 'full' }), txt: 'B adalah A dengan isi dibalik (kosong menjadi penuh).', chiral: false },
    { d: 2, name: 'cermin', f: a => Object.assign({}, a, { mir: !a.mir }), txt: 'B adalah bayangan cermin A (dibalik kiri-kanan), bukan putaran.', chiral: true },
    { d: 2, name: 'putar 180° + titik', f: a => Object.assign({}, a, { rot: a.rot + 180, n: a.n + 1 }), txt: 'Dua perubahan: putaran 180° dan satu titik ditambah.', chiral: true },
    { d: 3, name: 'cermin + isi + kecil', f: a => Object.assign({}, a, { mir: !a.mir, fill: 'dots', scale: .7 }), txt: 'Tiga perubahan: cermin, isi menjadi bertitik, ukuran mengecil.', chiral: true },
    { d: 3, name: 'putar 45° + arsir', f: a => Object.assign({}, a, { rot: a.rot + 45, fill: 'cross' }), txt: 'Putaran 45° searah jarum jam dan isi menjadi berpetak.', chiral: true }
  ];
  for (let n = 0; n < count; n++) {
    const t = T[n % T.length];
    const pool = t.chiral ? CHIRAL : SYM;
    const A = { g: r.pick(pool), rot: r.pick([0, 90]), mir: false, fill: r.pick(['none', 'full']), n: r.int(0, 2) };
    const B = t.f(A);
    let C = { g: r.pick(pool.filter(g => g !== A.g)), rot: r.pick([0, 45, 90, 270]), mir: r() < .3, fill: A.fill, n: r.int(0, 2) };
    const key = t.f(C);
    const cands = [Object.assign({}, key, { mir: !key.mir }), Object.assign({}, key, { rot: key.rot + 90 }), C, Object.assign({}, key, { fill: key.fill === 'none' ? 'full' : 'none' }), Object.assign({}, key, { rot: key.rot - 45 })];
    const { opts, ans } = optionsFor(key, cands, r);
    out.push(item({ family: 'figural', subtype: 'analogi_gambar', d: t.d, gen: true,
      stem: { id: 'Gambar A berhubungan dengan gambar B seperti gambar C berhubungan dengan …', en: 'Figure A is to figure B as figure C is to …' },
      opts, ans, assets: [{ kind: 'analogy', figs: [norm(A), norm(B), norm(C)], alt: 'A ' + alt(A) + '; B ' + alt(B) + '; C ' + alt(C) }],
      x: { pola: t.txt, langkah: 'Tulis perubahan A → B sebagai daftar atribut (putaran, cermin, isi, jumlah, ukuran). Terapkan daftar yang sama, dalam urutan yang sama, pada C.', jebakan: 'Menerapkan perubahan pada A (bukan C); menukar cermin dengan putaran 180°; menerapkan sebagian perubahan saja.', cepat: 'Sebutkan perubahan dengan kata sebelum melihat opsi; opsi yang tidak memuat seluruh kata itu dicoret.', tag: 'analogi_gambar · ' + t.name },
      skills: ['figural', 'transformasi', t.name], traps: ['cermin_vs_putaran', 'perubahan_sebagian'], t: t.d === 1 ? 40 : t.d === 2 ? 55 : 70, map: { tiu: 'figural', tkd: 'figural', tpa: 'figural' } }));
  }
  return out;
}

/* ─── beda gambar (ketidaksamaan) ─── */
function beda(seed, count) {
  const r = rng(seed); const out = [];
  const kinds = [
    { d: 1, name: 'jumlah', mk: () => { const g = r.pick(SYM), n = r.int(1, 3); const same4 = [0, 90, 180, 270].map(rot => ({ g, rot, fill: 'none', n })); return { four: same4, odd: { g, rot: 45, fill: 'none', n: n + 1 }, txt: 'Empat gambar memiliki jumlah titik yang sama; satu gambar punya titik lebih banyak.' }; } },
    { d: 2, name: 'cermin', mk: () => { const g = r.pick(CHIRAL), fill = r.pick(['none', 'full']); const four = [0, 90, 180, 270].map(rot => ({ g, rot, mir: false, fill, n: 0 })); return { four, odd: { g, rot: r.pick([0, 90]), mir: true, fill, n: 0 }, txt: 'Empat gambar adalah putaran dari satu bentuk; satu gambar adalah bayangan cerminnya, yang tidak bisa dihasilkan dengan memutar.' }; } },
    { d: 2, name: 'isi', mk: () => { const g = r.pick(SYM); const four = [0, 1, 2, 3].map(i => ({ g, rot: i * 45, fill: 'dots', n: 1 })); return { four, odd: { g, rot: 45, fill: 'cross', n: 1 }, txt: 'Empat gambar berisi pola titik; satu gambar berisi pola petak.' }; } },
    { d: 3, name: 'cermin+isi', mk: () => { const g = r.pick(CHIRAL); const four = [0, 90, 180, 270].map(rot => ({ g, rot, mir: false, fill: rot % 180 ? 'full' : 'none', n: 1 })); return { four, odd: { g, rot: 90, mir: true, fill: 'full', n: 1 }, txt: 'Aturan isi (penuh pada putaran 90° dan 270°) dipenuhi semua gambar; yang berbeda adalah bayangan cermin, bukan putaran.' }; } }
  ];
  for (let n = 0; n < count; n++) {
    const K = kinds[n % kinds.length]; const m = K.mk();
    const figs = r.shuffle(m.four.concat([m.odd]));
    const ans = figs.findIndex(f => same(f, m.odd));
    out.push(item({ family: 'figural', subtype: 'beda_gambar', d: K.d, gen: true,
      stem: { id: 'Empat dari lima gambar berikut mengikuti satu aturan yang sama. Gambar yang berbeda adalah …', en: 'Four of the five figures follow one rule. The figure that differs is …' },
      opts: figs.map(f => ({ id: '', fig: norm(f), alt: alt(f) })), ans,
      x: { pola: m.txt, langkah: 'Bandingkan atribut satu per satu di kelima gambar: bentuk, jumlah, isi, arah. Atribut yang bernilai sama di empat gambar dan berbeda di satu gambar adalah kuncinya.', jebakan: 'Terpaku pada putaran (yang memang berbeda di semua gambar) alih-alih atribut yang benar-benar melanggar aturan.', cepat: 'Putaran jarang menjadi pembeda; cek cermin dengan menandai satu sudut khas gambar dan mengikuti arahnya.', tag: 'beda_gambar · ' + K.name },
      skills: ['figural', 'ketidaksamaan', K.name], traps: ['cermin_vs_putaran'], t: K.d === 1 ? 35 : 55, map: { tiu: 'figural', tkd: 'figural', tpa: 'figural' } }));
  }
  return out;
}

/* ─── matriks 3×3 ─── */
function matriks(seed, count) {
  const r = rng(seed); const out = [];
  const rules = [
    { d: 1, name: 'bentuk per baris, isi per kolom', cell: (row, col, G) => ({ g: G[row], rot: 0, fill: FILLS[col], n: 0 }), txt: 'Setiap baris memakai satu bentuk; setiap kolom memakai satu isi (kosong, bertitik, penuh).', pool: SYM },
    { d: 2, name: 'putaran per kolom, titik per baris', cell: (row, col, G) => ({ g: G[0], rot: col * 90, fill: 'none', n: row + 1 }), txt: 'Kolom menambah putaran 90°; baris menambah satu titik.', pool: CHIRAL },
    { d: 3, name: 'bentuk latin, isi latin', cell: (row, col, G) => ({ g: G[(row + col) % 3], rot: 0, fill: FILLS[(row + 2 * col) % 3], n: 0 }), txt: 'Bentuk dan isi masing-masing membentuk bujur sangkar latin: setiap baris dan setiap kolom memuat ketiga bentuk dan ketiga isi tepat sekali.', pool: SYM }
  ];
  for (let n = 0; n < count; n++) {
    const R = rules[n % rules.length];
    const G = r.shuffle(R.pool).slice(0, 3);
    const grid = [];
    for (let row = 0; row < 3; row++) for (let col = 0; col < 3; col++) grid.push(R.cell(row, col, G));
    const key = grid[8];
    const cands = [Object.assign({}, key, { fill: FILLS[(FILLS.indexOf(key.fill) + 1) % 3] }), Object.assign({}, key, { g: G[(G.indexOf(key.g) + 1) % 3] }), Object.assign({}, key, { rot: key.rot + 90 }), Object.assign({}, key, { n: key.n + 1 }), grid[7]];
    const { opts, ans } = optionsFor(key, cands, r);
    out.push(item({ family: 'figural', subtype: 'matriks', d: R.d, gen: true,
      stem: { id: 'Gambar yang tepat mengisi sel kosong pada matriks 3×3 berikut adalah …', en: 'The figure that completes the empty cell of the 3×3 matrix is …' },
      opts, ans, assets: [{ kind: 'grid3', figs: grid.slice(0, 8).map(norm), alt: 'Matriks: ' + grid.slice(0, 8).map(alt).join(' | ') }],
      x: { pola: R.txt, langkah: 'Baca baris 1 dan 2: atribut apa yang tetap dalam baris, apa yang berubah antar kolom. Ulangi untuk kolom. Sel kosong harus memenuhi aturan baris ke-3 dan kolom ke-3 sekaligus.', jebakan: 'Memenuhi aturan baris tetapi melanggar aturan kolom (atau sebaliknya); menyalin sel tetangga.', cepat: 'Untuk pola latin, cari bentuk dan isi yang belum muncul di baris 3 dan kolom 3.', tag: 'matriks · ' + R.name },
      skills: ['figural', 'matriks', R.name], traps: ['aturan_sebagian', 'salin_tetangga'], t: R.d === 1 ? 45 : R.d === 2 ? 60 : 80, map: { tiu: 'figural', tkd: 'figural', tpa: 'figural' } }));
  }
  return out;
}

/* ─── spasial: rotasi/cermin dan jaring kubus ─── */
const NETS = [ /* cross net: cells (col,row); opposite pairs computed from the layout */
  { cells: [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2], [1, 3]], opp: [[0, 4], [1, 3], [2, 5]], txt: 'jaring salib' },
  { cells: [[0, 0], [1, 0], [2, 0], [3, 0], [1, 1], [1, 2]], opp: [[0, 2], [1, 3], [4, 5]], txt: 'jaring 1-4-1 bergeser' },
  { cells: [[0, 0], [0, 1], [1, 1], [2, 1], [2, 2], [2, 3]], opp: [[0, 3], [1, 4], [2, 5]], txt: 'jaring tangga' }
];
const LAB = ['A', 'B', 'C', 'D', 'E', 'F'];
function renderNet(net, labels) {
  const W = 4, H = 4, s = 24;
  const cells = net.cells.map((c, i) => '<rect x="' + (c[0] * s + 2) + '" y="' + (c[1] * s + 2) + '" width="' + (s - 4) + '" height="' + (s - 4) + '" fill="none" stroke="currentColor" stroke-width="2"/><text x="' + (c[0] * s + s / 2) + '" y="' + (c[1] * s + s / 2 + 5) + '" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">' + labels[i] + '</text>').join('');
  return '<svg viewBox="0 0 ' + (W * s) + ' ' + (H * s) + '" width="120" height="120" aria-hidden="true">' + cells + '</svg>';
}
function spasial(seed, count) {
  const r = rng(seed); const out = [];
  for (let n = 0; n < count; n++) {
    const kind = n % 3;
    if (kind === 0) { /* which option is a pure rotation of the given figure */
      const base = { g: r.pick(CHIRAL), rot: r.pick([0, 45, 90]), mir: false, fill: r.pick(['none', 'dots']), n: r.int(0, 2) };
      const key = Object.assign({}, base, { rot: base.rot + r.pick([90, 180, 270]) });
      const cands = [Object.assign({}, key, { mir: true }), Object.assign({}, base, { mir: true, rot: base.rot + 90 }), Object.assign({}, key, { fill: key.fill === 'none' ? 'full' : 'none' }), Object.assign({}, key, { mir: true, rot: key.rot + 45 })];
      const { opts, ans } = optionsFor(key, cands, r);
      out.push(item({ family: 'figural', subtype: 'spasial', d: 2, gen: true,
        stem: { id: 'Gambar manakah yang merupakan hasil putaran (tanpa dibalik) dari gambar berikut?', en: 'Which figure is a rotation (not a reflection) of the figure shown?' },
        opts, ans, assets: [{ kind: 'single', figs: [norm(base)], alt: alt(base) }],
        x: { pola: 'Putaran mempertahankan arah putar unsur-unsur gambar; cermin membaliknya.', langkah: 'Tandai dua unsur khas (misalnya titik dan lekukan) dan arah dari satu ke yang lain searah jarum jam. Putaran menjaga arah itu; cermin membaliknya.', jebakan: 'Bayangan cermin yang kebetulan tampak “miring sama”.', cepat: 'Uji arah jarum jam dari unsur 1 ke unsur 2; jika terbalik, itu cermin.', tag: 'spasial · rotasi' },
        skills: ['spasial', 'rotasi'], traps: ['cermin_vs_putaran'], t: 55, map: { tiu: 'figural', tkd: 'figural', tpa: 'figural' } }));
    } else if (kind === 1) { /* mirror image */
      const base = { g: r.pick(CHIRAL), rot: r.pick([0, 45, 90, 135]), mir: false, fill: r.pick(['none', 'full']), n: r.int(0, 2) };
      const key = Object.assign({}, base, { mir: true });
      const cands = [Object.assign({}, base, { rot: base.rot + 180 }), Object.assign({}, base, { rot: base.rot + 90 }), Object.assign({}, key, { rot: key.rot + 90 }), Object.assign({}, key, { fill: key.fill === 'none' ? 'full' : 'none' })];
      const { opts, ans } = optionsFor(key, cands, r);
      out.push(item({ family: 'figural', subtype: 'spasial', d: 1, gen: true,
        stem: { id: 'Bayangan cermin (dibalik kiri-kanan) dari gambar berikut adalah …', en: 'The mirror image (flipped left to right) of the figure shown is …' },
        opts, ans, assets: [{ kind: 'single', figs: [norm(base)], alt: alt(base) }],
        x: { pola: 'Cermin vertikal menukar kiri dan kanan; atas dan bawah tetap.', langkah: 'Ambil unsur paling kiri, bayangkan ia pindah ke paling kanan pada ketinggian yang sama. Periksa unsur kedua.', jebakan: 'Putaran 180° (yang menukar kiri-kanan dan atas-bawah sekaligus) sering tertukar dengan cermin.', cepat: 'Cermin menjaga atas-bawah; jika atas-bawah ikut bertukar, itu putaran 180°.', tag: 'spasial · cermin' },
        skills: ['spasial', 'cermin'], traps: ['putaran_180'], t: 40, map: { tiu: 'figural', tkd: 'figural', tpa: 'figural' } }));
    } else { /* cube net: opposite face */
      const net = r.pick(NETS);
      const labels = r.shuffle(LAB);
      const pair = r.pick(net.opp);
      const ask = labels[pair[0]], key = labels[pair[1]];
      const others = labels.filter(l => l !== ask && l !== key);
      const order = r.shuffle([key].concat(others.slice(0, 4)));
      out.push(item({ family: 'figural', subtype: 'spasial', d: 3, gen: true,
        stem: { id: 'Jaring-jaring berikut dilipat menjadi kubus. Sisi yang berhadapan dengan sisi ' + ask + ' adalah …', en: 'The net below is folded into a cube. The face opposite face ' + ask + ' is …' },
        opts: order.map(l => ({ id: l, en: l })), ans: order.indexOf(key),
        assets: [{ kind: 'net', net: net.cells, labels, alt: 'Jaring kubus (' + net.txt + ') dengan label ' + labels.join(', ') }],
        x: { pola: 'Pada jaring kubus, dua sisi yang terpisah satu kotak dalam satu garis lurus selalu berhadapan; sisi yang bersebelahan langsung tidak pernah berhadapan.', langkah: 'Cari garis lurus tiga kotak: ujung-ujungnya berhadapan. Pasangan ketiga adalah dua sisi yang tersisa.', jebakan: 'Memilih sisi yang menempel pada ' + ask + ' (pasti bersebelahan, bukan berhadapan).', cepat: 'Aturan “loncat satu”: dalam baris atau kolom jaring, kotak ke-1 dan ke-3 berhadapan.', tag: 'spasial · jaring' },
        skills: ['spasial', 'jaring_kubus'], traps: ['sisi_bersebelahan'], t: 60, map: { tiu: 'figural', tkd: 'figural', tpa: 'figural' } }));
    }
  }
  return out;
}

module.exports = { serial, analogi, beda, matriks, spasial, render };
