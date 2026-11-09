/**
 * E-mail through Resend (https://resend.com). Nothing here runs without
 * RESEND_API_KEY and a verified sending domain (SPF, DKIM, DMARC on
 * metanoialabs.net). Every function returns { sent, reason } and never throws,
 * so a missing provider degrades to "not sent" that the caller can report
 * honestly to the user.
 *
 * Every attempt is written to mail_log when a database is bound (class, kind,
 * recipient hash, day, status): the lifecycle quota and the "send once" rules
 * in server/lib/lifecycle.js read that table. Transactional mail is never held
 * back by the quota; the Worker caps lifecycle mail before calling sendMail.
 */

const RESEND = 'https://api.resend.com/emails';

export async function sendMail(env, { to, subject, text, html, replyTo, headers, cls = 'transactional', kind = 'other', ref = null }) {
  if (!env.RESEND_API_KEY) return { sent: false, reason: 'mail not configured' };
  if (!to) return { sent: false, reason: 'no recipient' };
  let result;
  try {
    const r = await fetch(RESEND, {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${env.RESEND_API_KEY}` },
      body: JSON.stringify({ from: env.MAIL_FROM || 'Metanoia Labs <hello@metanoialabs.net>', to: [to], subject, text, html: html || `<pre style="font:15px/1.5 -apple-system,Segoe UI,sans-serif;white-space:pre-wrap">${escapeHtml(text)}</pre>`, ...(replyTo ? { reply_to: replyTo } : {}), ...(headers ? { headers } : {}) })
    });
    if (!r.ok) {
      /* visible in Pages → Deployments → Functions → Real-time logs; the body names the cause (domain, from address, quota) */
      let detail = '';
      try { detail = (await r.text()).slice(0, 300); } catch (e) {}
      console.error('resend', r.status, subject, detail);
      result = { sent: false, reason: `provider ${r.status}` };
    } else result = { sent: true };
  } catch (e) {
    console.error('resend unreachable', String(e && e.message || e).slice(0, 200));
    result = { sent: false, reason: 'provider unreachable' };
  }
  await logMail(env, { cls, kind, ref, to, sent: result.sent, reason: result.reason });
  return result;
}

async function logMail(env, { cls, kind, ref, to, sent, reason }) {
  if (!env.DB) return;
  try {
    const now = new Date().toISOString();
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(String(to).trim().toLowerCase()));
    const toHash = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
    await env.DB.prepare('INSERT INTO mail_log (id, class, kind, ref, to_hash, day, status, reason, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)')
      .bind(crypto.randomUUID().replace(/-/g, ''), cls, kind, ref, toHash, now.slice(0, 10), sent ? 'sent' : 'failed', sent ? null : (reason || null), now).run();
  } catch (e) {
    /* the table arrives with migration 0004; a missing table must never block a message */
    console.error('mail_log', String(e && e.message || e).slice(0, 200));
  }
}

const escapeHtml = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const T = {
  en: {
    verifySubject: 'Confirm your Metanoia Labs e-mail',
    verify: (name, url) => `Hi ${name},\n\nConfirm this address to finish setting up your Metanoia Labs account:\n${url}\n\nThe link works for 24 hours. If you did not create an account, ignore this message.\n\nMetanoia Labs`,
    resetSubject: 'Reset your Metanoia Labs password',
    reset: (name, url) => `Hi ${name},\n\nSomeone asked to reset the password for this account. If that was you, choose a new password here:\n${url}\n\nThe link works for one hour. If it was not you, nothing changes.\n\nMetanoia Labs`,
    mentorSubject: 'Your mentor application has been received',
    mentor: (name, id) => `Hi ${name},\n\nThank you for applying to mentor with Metanoia Labs. Your application (reference ${id}) has been stored and a member of the team will review it. We reply to every application within ten business days.\n\nMetanoia Labs`,
    enterpriseSubject: 'Your enterprise inquiry has been received',
    enterprise: (name, id) => `Hi ${name},\n\nThank you for your inquiry (reference ${id}). We respond within two business days with a scoped recommendation.\n\nMetanoia Labs`,
    newsletterSubject: 'Confirm your subscription to Letters from the expedition',
    newsletter: url => `Confirm that you want to receive Letters from the expedition from Metanoia Labs:\n${url}\n\nIf you did not sign up, ignore this message and nothing will be sent.\n\nMetanoia Labs`,
    waitlistSubject: 'You are on the Metanoia Labs waitlist',
    waitlist: name => `Hi${name ? ' ' + name : ''},\n\nYou are on the list. Accounts on Metanoia Labs open in stages, and this address will get one message from us when yours is ready, with nothing else in between.\n\nUntil then the free Career Map assessment is open to everyone at https://metanoialabs.net/career-map-assessment\n\nIf you did not ask for this, ignore this message and nothing further will be sent.\n\nMetanoia Labs`,
    magicSubject: 'Your sign-in link for Metanoia Labs',
    magic: (url, minutes) => `Hi,\n\nHere is your one-time sign-in link for Metanoia Labs:\n${url}\n\nIt works for ${minutes} minutes and only once. If you did not ask for it, ignore this message and nothing changes.\n\nMetanoia Labs`,
    resultsSubject: (total, band) => `Your Career Map result: ${total}/100, ${band}`,
    deleteConfirmSubject: 'Confirm the deletion of your Metanoia Labs account',
    deleteConfirm: (name, url) => `Hi${name ? ' ' + name : ''},\n\nYou asked to delete your Metanoia Labs account. Because this account signs in without a password, the address confirms it. Click to confirm:\n${url}\n\nThe link works for one hour. If you did not ask for this, ignore this message and nothing changes.\n\nMetanoia Labs`,
    deleteScheduledSubject: 'Your Metanoia Labs account will be deleted',
    deleteScheduled: (name, hours, cancelUrl) => `Hi${name ? ' ' + name : ''},\n\nYour deletion request is confirmed. Every device has been signed out, and the account, its progress, results and sessions will be removed within ${hours} hours. You will receive one last message when that has happened.\n\nChanged your mind? Cancel here before then and everything stays as it was:\n${cancelUrl}\n\nMetanoia Labs`,
    deletedSubject: 'Your Metanoia Labs account has been deleted',
    deleted: (name) => `Hi${name ? ' ' + name : ''},\n\nYour Metanoia Labs account and the data held with it have been deleted: profile, progress, results, applications, sessions and the record of the e-mail we sent you. Usage statistics that were never linked to a name remain, and cannot be traced back to you.\n\nThank you for climbing with us. The free Career Map stays open to everyone at https://metanoialabs.net/career-map-assessment should you ever want to return.\n\nMetanoia Labs`,
    weakestSubject: (dim) => `One gate to work on first: ${dim}`,
    weakest: (name, dim, score, product, productUrl, resultUrl, total, band, unsubscribe) => `Hi${name ? ' ' + name : ''},\n\nA few days ago your Career Map came back at ${total}/100, ${band}. The dimension that scored lowest was ${dim}, at ${score}/15.\n\nThat is the gate to work on first, because the hiring process is sequential: a weak ${dim} is not compensated by a strong score elsewhere. The product built for it is ${product}:\n${productUrl}\n\nYour full report, with the 90-day route, is still open at:\n${resultUrl}\n\nYou asked for e-mail about your result when you took the assessment. Stop these follow-ups with one click:\n${unsubscribe}\n\nMetanoia Labs`,
    weeklySubject: 'Your week on the mountain',
    weekly: (name, products, lastAt, focus, portalUrl, assessmentUrl, unsubscribe) => {
      const touched = products.length ? `This week you worked in ${products.join(', ')}.` : 'Nothing moved this week.';
      const last = lastAt ? ` Your last session was on ${new Date(lastAt).toUTCString().slice(0, 16)}.` : '';
      const next = focus
        ? `Your Career Map still points at ${focus.name} (${focus.score}/15) as the gate to work on first. The product built for it is ${focus.product}:\n${focus.url}`
        : `If you have not taken the free Career Map assessment yet, it tells you which gate to work on first, in 15 minutes:\n${assessmentUrl}`;
      return `Hi${name ? ' ' + name : ''},\n\n${touched}${last}\n\n${next}\n\nPick up where you left off:\n${portalUrl}\n\nYou receive this weekly note because you opted in at registration. Stop it with one click (sign-in links and results you ask for still arrive):\n${unsubscribe}\n\nMetanoia Labs`;
    },
    results: (name, total, band, lines, url, days) => `Hi${name ? ' ' + name : ''},\n\nHere is your Career Map readiness result.\n\nOverall: ${total}/100, ${band}\n\n${lines.join('\n')}\n\nOpen the full report, with your strengths, the gaps that matter most and a 90-day route, at:\n${url}\n\nThe link works for ${days} days and shows only this report. You can download it as a PDF from that page.\n\nIf you did not take the assessment, ignore this message and nothing further will be sent.\n\nMetanoia Labs`
  },
  id: {
    verifySubject: 'Konfirmasi e-mail Metanoia Labs-mu',
    verify: (name, url) => `Halo ${name},\n\nKonfirmasi alamat ini untuk menyelesaikan pembuatan akun Metanoia Labs-mu:\n${url}\n\nTautan berlaku 24 jam. Jika kamu tidak membuat akun, abaikan pesan ini.\n\nMetanoia Labs`,
    resetSubject: 'Atur ulang kata sandi Metanoia Labs-mu',
    reset: (name, url) => `Halo ${name},\n\nSeseorang meminta pengaturan ulang kata sandi untuk akun ini. Jika itu kamu, pilih kata sandi baru di sini:\n${url}\n\nTautan berlaku satu jam. Jika bukan kamu, tidak ada yang berubah.\n\nMetanoia Labs`,
    mentorSubject: 'Lamaran mentormu telah kami terima',
    mentor: (name, id) => `Halo ${name},\n\nTerima kasih telah melamar sebagai mentor Metanoia Labs. Lamaranmu (referensi ${id}) telah tersimpan dan akan ditinjau oleh tim. Kami membalas setiap lamaran dalam sepuluh hari kerja.\n\nMetanoia Labs`,
    enterpriseSubject: 'Pertanyaan enterprise Anda telah kami terima',
    enterprise: (name, id) => `Halo ${name},\n\nTerima kasih atas pertanyaan Anda (referensi ${id}). Kami merespons dalam dua hari kerja dengan rekomendasi yang terukur.\n\nMetanoia Labs`,
    newsletterSubject: 'Konfirmasi langgananmu untuk Surat dari ekspedisi',
    newsletter: url => `Konfirmasi bahwa kamu ingin menerima Surat dari ekspedisi dari Metanoia Labs:\n${url}\n\nJika kamu tidak mendaftar, abaikan pesan ini dan tidak ada yang akan dikirim.\n\nMetanoia Labs`,
    waitlistSubject: 'Kamu sudah masuk daftar tunggu Metanoia Labs',
    waitlist: name => `Halo${name ? ' ' + name : ''},\n\nKamu sudah masuk daftar. Akun Metanoia Labs dibuka bertahap, dan alamat ini akan menerima satu pesan dari kami saat giliranmu tiba, tanpa pesan lain di antaranya.\n\nSementara itu, asesmen Career Map gratis terbuka untuk semua orang di https://metanoialabs.net/career-map-assessment\n\nJika kamu tidak meminta ini, abaikan pesan ini dan tidak ada yang akan dikirim lagi.\n\nMetanoia Labs`,
    magicSubject: 'Tautan masuk Metanoia Labs-mu',
    magic: (url, minutes) => `Halo,\n\nIni tautan masuk sekali pakai untuk Metanoia Labs:\n${url}\n\nTautan berlaku ${minutes} menit dan hanya sekali. Jika kamu tidak memintanya, abaikan pesan ini dan tidak ada yang berubah.\n\nMetanoia Labs`,
    resultsSubject: (total, band) => `Hasil Career Map-mu: ${total}/100, ${band}`,
    deleteConfirmSubject: 'Konfirmasi penghapusan akun Metanoia Labs-mu',
    deleteConfirm: (name, url) => `Halo${name ? ' ' + name : ''},\n\nKamu meminta penghapusan akun Metanoia Labs-mu. Karena akun ini masuk tanpa kata sandi, alamat e-mail inilah yang mengonfirmasi. Klik untuk mengonfirmasi:\n${url}\n\nTautan berlaku satu jam. Jika kamu tidak memintanya, abaikan pesan ini dan tidak ada yang berubah.\n\nMetanoia Labs`,
    deleteScheduledSubject: 'Akun Metanoia Labs-mu akan dihapus',
    deleteScheduled: (name, hours, cancelUrl) => `Halo${name ? ' ' + name : ''},\n\nPermintaan penghapusanmu sudah dikonfirmasi. Semua perangkat telah dikeluarkan, dan akun ini beserta progres, hasil, dan sesinya akan dihapus dalam ${hours} jam. Kamu akan menerima satu pesan terakhir saat itu selesai.\n\nBerubah pikiran? Batalkan di sini sebelum itu dan semuanya tetap seperti semula:\n${cancelUrl}\n\nMetanoia Labs`,
    deletedSubject: 'Akun Metanoia Labs-mu telah dihapus',
    deleted: (name) => `Halo${name ? ' ' + name : ''},\n\nAkun Metanoia Labs-mu dan data yang tersimpan bersamanya telah dihapus: profil, progres, hasil, lamaran, sesi, dan catatan e-mail yang kami kirimkan kepadamu. Statistik penggunaan yang tidak pernah terhubung ke nama tetap ada, dan tidak bisa dilacak kembali kepadamu.\n\nTerima kasih telah mendaki bersama kami. Career Map gratis tetap terbuka untuk semua orang di https://metanoialabs.net/career-map-assessment jika suatu saat kamu ingin kembali.\n\nMetanoia Labs`,
    weakestSubject: (dim) => `Satu gerbang untuk digarap lebih dulu: ${dim}`,
    weakest: (name, dim, score, product, productUrl, resultUrl, total, band, unsubscribe) => `Halo${name ? ' ' + name : ''},\n\nBeberapa hari lalu Career Map-mu menunjukkan ${total}/100, ${band}. Dimensi dengan skor terendah adalah ${dim}, yaitu ${score}/15.\n\nItulah gerbang yang perlu digarap lebih dulu, karena proses rekrutmen berjalan berurutan: ${dim} yang lemah tidak tertutup oleh skor tinggi di bagian lain. Produk yang dibangun untuk itu adalah ${product}:\n${productUrl}\n\nLaporan lengkapmu, dengan rute 90 hari, masih bisa dibuka di:\n${resultUrl}\n\nKamu meminta e-mail tentang hasilmu saat mengerjakan asesmen. Hentikan tindak lanjut ini dengan satu klik:\n${unsubscribe}\n\nMetanoia Labs`,
    weeklySubject: 'Minggumu di gunung',
    weekly: (name, products, lastAt, focus, portalUrl, assessmentUrl, unsubscribe) => {
      const touched = products.length ? `Minggu ini kamu bekerja di ${products.join(', ')}.` : 'Belum ada yang bergerak minggu ini.';
      const last = lastAt ? ` Sesi terakhirmu pada ${new Date(lastAt).toUTCString().slice(0, 16)}.` : '';
      const next = focus
        ? `Career Map-mu masih menunjuk ${focus.name} (${focus.score}/15) sebagai gerbang yang perlu digarap lebih dulu. Produk yang dibangun untuk itu adalah ${focus.product}:\n${focus.url}`
        : `Jika kamu belum mengerjakan asesmen Career Map gratis, asesmen itu menunjukkan gerbang mana yang perlu digarap lebih dulu, dalam 15 menit:\n${assessmentUrl}`;
      return `Halo${name ? ' ' + name : ''},\n\n${touched}${last}\n\n${next}\n\nLanjutkan dari tempat kamu berhenti:\n${portalUrl}\n\nKamu menerima catatan mingguan ini karena memilihnya saat mendaftar. Hentikan dengan satu klik (tautan masuk dan hasil yang kamu minta tetap dikirim):\n${unsubscribe}\n\nMetanoia Labs`;
    },
    results: (name, total, band, lines, url, days) => `Halo${name ? ' ' + name : ''},\n\nIni hasil kesiapan Career Map-mu.\n\nKeseluruhan: ${total}/100, ${band}\n\n${lines.join('\n')}\n\nBuka laporan lengkapnya, dengan kekuatanmu, celah yang paling menentukan, dan rute 90 hari, di:\n${url}\n\nTautan berlaku ${days} hari dan hanya menampilkan laporan ini. Kamu bisa mengunduhnya sebagai PDF dari halaman itu.\n\nJika kamu tidak mengerjakan asesmen ini, abaikan pesan ini dan tidak ada yang akan dikirim lagi.\n\nMetanoia Labs`
  }
};

const t = locale => T[locale === 'id' ? 'id' : 'en'];

export const mailVerify = (env, { to, name, url, locale }) => sendMail(env, { to, kind: 'verify', subject: t(locale).verifySubject, text: t(locale).verify(name, url) });
export const mailReset = (env, { to, name, url, locale }) => sendMail(env, { to, kind: 'reset', subject: t(locale).resetSubject, text: t(locale).reset(name, url) });
export const mailMentorReceived = (env, { to, name, id, locale }) => sendMail(env, { to, kind: 'mentor', ref: id, subject: t(locale).mentorSubject, text: t(locale).mentor(name, id) });
export const mailEnterpriseReceived = (env, { to, name, id, locale }) => sendMail(env, { to, kind: 'enterprise', ref: id, subject: t(locale).enterpriseSubject, text: t(locale).enterprise(name, id) });
export const mailNewsletterConfirm = (env, { to, url, locale }) => sendMail(env, { to, kind: 'newsletter', subject: t(locale).newsletterSubject, text: t(locale).newsletter(url) });
export const mailWaitlistReceived = (env, { to, name, locale }) => sendMail(env, { to, kind: 'waitlist', subject: t(locale).waitlistSubject, text: t(locale).waitlist(name) });
export const mailMagic = (env, { to, url, minutes, locale }) => sendMail(env, { to, kind: 'magic', subject: t(locale).magicSubject, text: t(locale).magic(url, minutes) });
export const mailResults = (env, { to, name, total, band, lines, url, days, locale, ref }) => sendMail(env, { to, kind: 'results', ref, subject: t(locale).resultsSubject(total, band), text: t(locale).results(name, total, band, lines, url, days) });

export const mailDeleteConfirm = (env, { to, name, url, locale, ref }) => sendMail(env, { to, kind: 'delete-confirm', ref, subject: t(locale).deleteConfirmSubject, text: t(locale).deleteConfirm(name, url) });
export const mailDeleteScheduled = (env, { to, name, hours, cancelUrl, locale, ref }) => sendMail(env, { to, kind: 'delete-scheduled', ref, subject: t(locale).deleteScheduledSubject, text: t(locale).deleteScheduled(name, hours, cancelUrl) });
export const mailDeleted = (env, { to, name, locale, ref }) => sendMail(env, { to, kind: 'deleted', ref, subject: t(locale).deletedSubject, text: t(locale).deleted(name) });

/* lifecycle class: capped by the Worker, one-click unsubscribe in the body and the headers (RFC 2369 / 8058) */
const unsubHeaders = url => ({ 'List-Unsubscribe': `<${url}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' });
export const mailWeakest = (env, { to, name, dim, score, product, productUrl, resultUrl, total, band, unsubscribe, locale, ref }) =>
  sendMail(env, { to, cls: 'lifecycle', kind: 'weakest', ref, headers: unsubHeaders(unsubscribe), subject: t(locale).weakestSubject(dim), text: t(locale).weakest(name, dim, score, product, productUrl, resultUrl, total, band, unsubscribe) });
export const mailWeekly = (env, { to, name, products, lastAt, focus, portalUrl, assessmentUrl, unsubscribe, locale, ref }) =>
  sendMail(env, { to, cls: 'lifecycle', kind: 'weekly', ref, headers: unsubHeaders(unsubscribe), subject: t(locale).weeklySubject, text: t(locale).weekly(name, products || [], lastAt, focus, portalUrl, assessmentUrl, unsubscribe) });

/* internal notification to the team on every new lead */
export function mailLeadNotify(env, lead) {
  const to = env.LEADS_NOTIFY_TO;
  if (!to) return Promise.resolve({ sent: false, reason: 'LEADS_NOTIFY_TO unset' });
  const lines = Object.entries(lead.payload || {}).map(([k, v]) => `${k}: ${typeof v === 'string' ? v : JSON.stringify(v)}`).join('\n');
  return sendMail(env, {
    to, cls: 'internal', kind: 'notify', ref: lead.id,
    subject: `[Metanoia] New ${lead.kind} lead: ${lead.name || lead.email}`,
    text: `Kind: ${lead.kind}\nId: ${lead.id}\nE-mail: ${lead.email}\nSource: ${lead.source_page || ''}\n\n${lines}\n\nReview: ${env.SITE_URL || ''}/admin/`,
    replyTo: lead.email
  });
}
