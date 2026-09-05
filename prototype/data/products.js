/**
 * METANOIA PRODUCT REGISTRY — SINGLE SOURCE OF TRUTH
 * ---------------------------------------------------
 * No product name may be hardcoded anywhere else in the platform.
 * Adding a name here is the ONLY way to introduce one.
 * Retired names exist solely for redirect mapping and the transition note.
 *
 * Project codenames were retired in the 2026-09 IP remediation: the five
 * pillar names carry the brand on their own, and the codename layer created
 * avoidable trademark surface. Do not reintroduce one without clearance.
 */

export const PILLARS = [
  {
    id: 'map',
    number: '01',
    pillar:      { en: 'The Map',   id: 'Peta' },
    definition:  { en: 'Knowing where you are going and why',
                   id: 'Mengetahui ke mana kamu menuju dan mengapa' },
    question:    { en: 'What am I actually aiming at?',
                   id: 'Sebenarnya apa yang saya tuju?' },
    slug: 'the-map',
    editions: {
      student:              { name: { en: 'Career Direction',        id: 'Arah Karier' } },
      'fresh-graduate':     { name: { en: 'Career Direction',        id: 'Arah Karier' } },
      'early-professional': { name: { en: 'Career Audit & Pivot',    id: 'Audit & Pivot Karier' } },
      'mature-professional':{ name: { en: 'Leadership Positioning',  id: 'Positioning Kepemimpinan' } }
    },
    /* The Range was consolidated into The Map (2026-08): its exploration
       capabilities now live at /products/the-map/#/… as an integrated section.
       The name stays live as a feature identity, not a standalone product. */
    integrates: {
      name: { en: 'The Range (Explore)', id: 'The Range (Explore)' },
      definition: { en: 'Career & opportunity exploration', id: 'Penjelajahan karier & peluang' },
      route: '/products/the-map/#/home'
    },
    retiredNames: ['Project Aladin', 'Aladin Direction Edition',
      'Eksplorasi Puncak Tujuan', 'The Lookout']
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
