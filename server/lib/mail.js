/**
 * Transactional e-mail through Resend (https://resend.com). Nothing here runs
 * without RESEND_API_KEY and a verified sending domain (SPF, DKIM, DMARC on
 * metanoialabs.net). Every function returns { sent, reason } and never throws,
 * so a missing provider degrades to "not sent" that the caller can report
 * honestly to the user.
 */

const RESEND = 'https://api.resend.com/emails';

export async function sendMail(env, { to, subject, text, html, replyTo }) {
  if (!env.RESEND_API_KEY) return { sent: false, reason: 'mail not configured' };
  if (!to) return { sent: false, reason: 'no recipient' };
  try {
    const r = await fetch(RESEND, {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${env.RESEND_API_KEY}` },
      body: JSON.stringify({ from: env.MAIL_FROM || 'Metanoia Labs <hello@metanoialabs.net>', to: [to], subject, text, html: html || `<pre style="font:15px/1.5 -apple-system,Segoe UI,sans-serif;white-space:pre-wrap">${escapeHtml(text)}</pre>`, ...(replyTo ? { reply_to: replyTo } : {}) })
    });
    if (!r.ok) return { sent: false, reason: `provider ${r.status}` };
    return { sent: true };
  } catch (e) {
    return { sent: false, reason: 'provider unreachable' };
  }
}

const escapeHtml = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const T = {
  en: {
    verifySubject: 'Confirm your Metanoia Labs e-mail',
    verify: (name, url) => `Hi ${name},\n\nConfirm this address to finish setting up your Metanoia Labs account:\n${url}\n\nThe link works for 24 hours. If you did not create an account, ignore this message.\n\n— Metanoia Labs`,
    resetSubject: 'Reset your Metanoia Labs password',
    reset: (name, url) => `Hi ${name},\n\nSomeone asked to reset the password for this account. If that was you, choose a new password here:\n${url}\n\nThe link works for one hour. If it was not you, nothing changes.\n\n— Metanoia Labs`,
    mentorSubject: 'Your mentor application has been received',
    mentor: (name, id) => `Hi ${name},\n\nThank you for applying to mentor with Metanoia Labs. Your application (reference ${id}) has been stored and a member of the team will review it. We reply to every application within ten business days.\n\n— Metanoia Labs`,
    enterpriseSubject: 'Your enterprise inquiry has been received',
    enterprise: (name, id) => `Hi ${name},\n\nThank you for your inquiry (reference ${id}). We respond within two business days with a scoped recommendation.\n\n— Metanoia Labs`,
    newsletterSubject: 'Confirm your subscription to Letters from the expedition',
    newsletter: url => `Confirm that you want to receive Letters from the expedition from Metanoia Labs:\n${url}\n\nIf you did not sign up, ignore this message and nothing will be sent.\n\n— Metanoia Labs`
  },
  id: {
    verifySubject: 'Konfirmasi e-mail Metanoia Labs-mu',
    verify: (name, url) => `Halo ${name},\n\nKonfirmasi alamat ini untuk menyelesaikan pembuatan akun Metanoia Labs-mu:\n${url}\n\nTautan berlaku 24 jam. Jika kamu tidak membuat akun, abaikan pesan ini.\n\n— Metanoia Labs`,
    resetSubject: 'Atur ulang kata sandi Metanoia Labs-mu',
    reset: (name, url) => `Halo ${name},\n\nSeseorang meminta pengaturan ulang kata sandi untuk akun ini. Jika itu kamu, pilih kata sandi baru di sini:\n${url}\n\nTautan berlaku satu jam. Jika bukan kamu, tidak ada yang berubah.\n\n— Metanoia Labs`,
    mentorSubject: 'Lamaran mentormu telah kami terima',
    mentor: (name, id) => `Halo ${name},\n\nTerima kasih telah melamar sebagai mentor Metanoia Labs. Lamaranmu (referensi ${id}) telah tersimpan dan akan ditinjau oleh tim. Kami membalas setiap lamaran dalam sepuluh hari kerja.\n\n— Metanoia Labs`,
    enterpriseSubject: 'Pertanyaan enterprise Anda telah kami terima',
    enterprise: (name, id) => `Halo ${name},\n\nTerima kasih atas pertanyaan Anda (referensi ${id}). Kami merespons dalam dua hari kerja dengan rekomendasi yang terukur.\n\n— Metanoia Labs`,
    newsletterSubject: 'Konfirmasi langgananmu untuk Surat dari ekspedisi',
    newsletter: url => `Konfirmasi bahwa kamu ingin menerima Surat dari ekspedisi dari Metanoia Labs:\n${url}\n\nJika kamu tidak mendaftar, abaikan pesan ini dan tidak ada yang akan dikirim.\n\n— Metanoia Labs`
  }
};

const t = locale => T[locale === 'id' ? 'id' : 'en'];

export const mailVerify = (env, { to, name, url, locale }) => sendMail(env, { to, subject: t(locale).verifySubject, text: t(locale).verify(name, url) });
export const mailReset = (env, { to, name, url, locale }) => sendMail(env, { to, subject: t(locale).resetSubject, text: t(locale).reset(name, url) });
export const mailMentorReceived = (env, { to, name, id, locale }) => sendMail(env, { to, subject: t(locale).mentorSubject, text: t(locale).mentor(name, id) });
export const mailEnterpriseReceived = (env, { to, name, id, locale }) => sendMail(env, { to, subject: t(locale).enterpriseSubject, text: t(locale).enterprise(name, id) });
export const mailNewsletterConfirm = (env, { to, url, locale }) => sendMail(env, { to, subject: t(locale).newsletterSubject, text: t(locale).newsletter(url) });

/* internal notification to the team on every new lead */
export function mailLeadNotify(env, lead) {
  const to = env.LEADS_NOTIFY_TO;
  if (!to) return Promise.resolve({ sent: false, reason: 'LEADS_NOTIFY_TO unset' });
  const lines = Object.entries(lead.payload || {}).map(([k, v]) => `${k}: ${typeof v === 'string' ? v : JSON.stringify(v)}`).join('\n');
  return sendMail(env, {
    to,
    subject: `[Metanoia] New ${lead.kind} lead — ${lead.name || lead.email}`,
    text: `Kind: ${lead.kind}\nId: ${lead.id}\nE-mail: ${lead.email}\nSource: ${lead.source_page || ''}\n\n${lines}\n\nReview: ${env.SITE_URL || ''}/admin/`,
    replyTo: lead.email
  });
}
