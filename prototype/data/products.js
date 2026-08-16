/**
 * METANOIA PRODUCT REGISTRY — SINGLE SOURCE OF TRUTH
 * ---------------------------------------------------
 * No product name may be hardcoded anywhere else in the platform.
 * Adding a name here is the ONLY way to introduce one.
 * Retired names exist solely for redirect mapping and the transition note.
 * Project codenames (Aladdin, Maverick, Nexus, Horizon) are sanctioned
 * secondary identifiers, rendered beneath the pillar name.
 */

export const PILLARS = [
  {
    id: 'range',
    number: '00',
    pillar:      { en: 'The Range', id: 'Bentang' },
    definition:  { en: 'Making a career possibility decidable',
                   id: 'Membuat kemungkinan karier bisa diputuskan' },
    question:    { en: 'What could fit me — and what would it take?',
                   id: 'Apa yang bisa cocok untukku — dan apa yang dibutuhkan?' },
    mode: 'exploration',
    slug: 'the-range',
    free: true,   // free to start — exploration is never gated
    editions: {
      student:              { name: { en: 'Career Exploration',  id: 'Penjelajahan Karier' } },
      'fresh-graduate':     { name: { en: 'Career Exploration',  id: 'Penjelajahan Karier' } },
      'early-professional': { name: { en: 'Direction Reset',     id: 'Reset Arah' } },
      'mature-professional':{ name: { en: 'Reinvention Mapping', id: 'Pemetaan Reinvensi' } }
    },
    retiredNames: ['Eksplorasi Puncak Tujuan', 'The Lookout']
  },
  {
    id: 'map',
    number: '01',
    pillar:      { en: 'The Map',   id: 'Peta' },
    definition:  { en: 'Knowing where you are going and why',
                   id: 'Mengetahui ke mana kamu menuju dan mengapa' },
    question:    { en: 'What am I actually aiming at?',
                   id: 'Sebenarnya apa yang saya tuju?' },
    slug: 'the-map',
    codename: 'Project Aladdin',
    editions: {
      student:              { name: { en: 'Career Direction',        id: 'Arah Karier' } },
      'fresh-graduate':     { name: { en: 'Career Direction',        id: 'Arah Karier' } },
      'early-professional': { name: { en: 'Career Audit & Pivot',    id: 'Audit & Pivot Karier' } },
      'mature-professional':{ name: { en: 'Leadership Positioning',  id: 'Positioning Kepemimpinan' } }
    },
    retiredNames: ['Project Aladin', 'Aladin Direction Edition']
  },
  {
    id: 'pack',
    number: '02',
    pillar:      { en: 'The Pack',  id: 'Perlengkapan' },
    definition:  { en: 'Getting past the paper gate',
                   id: 'Melewati gerbang dokumen' },
    question:    { en: 'Why does nobody reply to my application?',
                   id: 'Mengapa tidak ada yang membalas lamaran saya?' },
    slug: 'the-pack',
    codename: 'Project Maverick',
    editions: {
      student:              { name: { en: 'The Application Toolkit', id: 'Perangkat Lamaran' } },
      'fresh-graduate':     { name: { en: 'The Application Toolkit', id: 'Perangkat Lamaran' } },
      'early-professional': { name: { en: 'Senior Positioning',      id: 'Positioning Senior' } },
      'mature-professional':{ name: { en: 'Executive Profile',       id: 'Profil Eksekutif' } }
    },
    retiredNames: [
      'Understanding the Professional World',
      'The Application Engine', 'CV & Resume Studio', 'ATS Screening Mastery',
      'Group Discussion Simulation', 'Psychometric Test Preparation'
    ]
  },
  {
    id: 'rope',
    number: '03',
    pillar:      { en: 'The Rope',  id: 'Tali' },
    definition:  { en: 'Getting past the human gate',
                   id: 'Melewati gerbang manusia' },
    question:    { en: 'Why do I lose it in the interview?',
                   id: 'Mengapa saya gagal di tahap wawancara?' },
    slug: 'the-rope',
    codename: 'Project Nexus',
    editions: {
      student:              { name: { en: 'Interview Foundations',   id: 'Dasar Wawancara' } },
      'fresh-graduate':     { name: { en: 'Interview Mastery',       id: 'Penguasaan Wawancara' } },
      'early-professional': { name: { en: 'Behavioural & Panel',     id: 'Wawancara Perilaku & Panel' } },
      'mature-professional':{ name: { en: 'Executive Presence',      id: 'Kehadiran Eksekutif' } }
    },
    retiredNames: ['Case Interview Preparation', 'Interview Mastery (standalone)']
  },
  {
    id: 'route',
    number: '04',
    pillar:      { en: 'The Route', id: 'Rute' },
    definition:  { en: 'The path beyond the immediate goal',
                   id: 'Jalan setelah tujuan terdekat' },
    question:    { en: 'What comes after this, and how do I fund it?',
                   id: 'Apa setelah ini, dan bagaimana membiayainya?' },
    slug: 'the-route',
    codename: 'Project Horizon',
    editions: {
      student:              { name: { en: 'Scholarship & Graduate Programmes',
                                      id: 'Beasiswa & Program Pascasarjana' } },
      'fresh-graduate':     { name: { en: 'Scholarship & Graduate Programmes',
                                      id: 'Beasiswa & Program Pascasarjana' } },
      'early-professional': { name: { en: 'Career Acceleration',     id: 'Akselerasi Karier' } },
      'mature-professional':{ name: { en: 'Strategic Repositioning', id: 'Repositioning Strategis' } }
    },
    retiredNames: ['Scholarship Preparation', 'The Horizon']
  },
  {
    id: 'compass',
    number: '05',
    pillar:      { en: 'The Compass', id: 'Kompas' },
    definition:  { en: 'Knowing where you stand, continuously',
                   id: 'Mengetahui posisimu, terus-menerus' },
    question:    { en: 'Am I actually making progress?',
                   id: 'Apakah saya benar-benar maju?' },
    slug: 'the-compass',
    editions: {
      student:              { name: { en: 'The Compass', id: 'Kompas' }, horizon: '4-year timeline' },
      'fresh-graduate':     { name: { en: 'The Compass', id: 'Kompas' }, horizon: '90-day sprint' },
      'early-professional': { name: { en: 'The Compass', id: 'Kompas' }, horizon: 'annual trajectory' },
      'mature-professional':{ name: { en: 'The Compass', id: 'Kompas' }, horizon: 'multi-year strategy' }
    },
    retiredNames: ['Project Compass', 'The Climb', 'Personalized Progress Tracker']
  }
];

export const AUDIENCES = [
  { id: 'student',             name: { en: 'Student',             id: 'Mahasiswa' },                 slug: 'student' },
  { id: 'fresh-graduate',      name: { en: 'Fresh Graduate',      id: 'Fresh Graduate' },            slug: 'fresh-graduate' },
  { id: 'early-professional',  name: { en: 'Early Professional',  id: 'Profesional Muda' },          slug: 'early-professional' },
  { id: 'mature-professional', name: { en: 'Mature Professional', id: 'Profesional Berpengalaman' }, slug: 'mature-professional' }
];

/** Display helper — the ONLY approved way to render a product name. */
export function productName(pillarId, audienceId, lang = 'en') {
  const p = PILLARS.find(x => x.id === pillarId);
  if (!p) throw new Error('Unknown pillar: ' + pillarId);
  const ed = p.editions[audienceId];
  if (!ed) throw new Error('Unknown edition: ' + audienceId);
  return `${p.pillar[lang]} · ${ed.name[lang]}`;
}
