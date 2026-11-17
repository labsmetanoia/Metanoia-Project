/**
 * Web Push without a library, for Pages Functions and the Worker (docs/21 N-05, docs/14 "Reminders").
 *
 *   RFC 8291   the message is encrypted for one browser with its own keys (aes128gcm)
 *   RFC 8292   VAPID: a short signed token tells the push service which site is sending
 *
 * Keys (both set in the Cloudflare dashboard, never in the repository):
 *   VAPID_PUBLIC_KEY    the uncompressed P-256 point, 65 bytes, base64url. Browsers get it to subscribe.
 *   VAPID_PRIVATE_KEY   the 32-byte private scalar, base64url. A secret.
 * Without both, nothing is offered to members and nothing is sent.
 *
 * A subscription's endpoint is written by the browser, so it is only accepted when it points at a
 * known push service. That keeps this code from being used to call arbitrary addresses.
 */
import { b64url, fromB64url } from './http.js';

const te = new TextEncoder();
const concat = (...parts) => { const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0)); let o = 0; for (const p of parts) { out.set(p, o); o += p.length; } return out; };
const bytes = s => { try { return fromB64url(String(s || '')); } catch (e) { return new Uint8Array(0); } };

export const pushConfigured = env => bytes(env.VAPID_PUBLIC_KEY).length === 65 && bytes(env.VAPID_PRIVATE_KEY).length === 32;
export const pushPublicKey = env => (pushConfigured(env) ? String(env.VAPID_PUBLIC_KEY).trim() : null);

const HOSTS = [/^fcm\.googleapis\.com$/, /^android\.googleapis\.com$/, /(^|\.)push\.services\.mozilla\.com$/, /(^|\.)notify\.windows\.com$/, /(^|\.)push\.apple\.com$/];
export function okEndpoint(url) {
  try {
    const u = new URL(String(url));
    return u.protocol === 'https:' && !u.username && !u.password && (!u.port || u.port === '443') && String(url).length <= 1000 && HOSTS.some(h => h.test(u.hostname));
  } catch (e) { return false; }
}
/* what a browser hands over on subscribe: an endpoint and two keys of fixed size */
export function cleanSubscription(input) {
  const b = input || {}, k = b.keys || {};
  if (!okEndpoint(b.endpoint)) return { error: 'not a push service address', field: 'endpoint' };
  if (bytes(k.p256dh).length !== 65 || bytes(k.p256dh)[0] !== 4) return { error: 'bad key', field: 'p256dh' };
  if (bytes(k.auth).length !== 16) return { error: 'bad key', field: 'auth' };
  return { sub: { endpoint: String(b.endpoint), p256dh: String(k.p256dh), auth: String(k.auth) } };
}

async function hkdf(salt, ikm, info, length) {
  const key = await crypto.subtle.importKey('raw', ikm, 'HKDF', false, ['deriveBits']);
  return new Uint8Array(await crypto.subtle.deriveBits({ name: 'HKDF', hash: 'SHA-256', salt, info }, key, length * 8));
}

/* RFC 8291: one record, a fresh key pair and salt per message */
export async function encryptPayload(sub, payload) {
  const ua = bytes(sub.p256dh), auth = bytes(sub.auth);
  const data = typeof payload === 'string' ? te.encode(payload) : payload;
  if (data.length > 3000) throw new Error('payload too large');
  const pair = await crypto.subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, true, ['deriveBits']);
  const asPub = new Uint8Array(await crypto.subtle.exportKey('raw', pair.publicKey));
  const uaKey = await crypto.subtle.importKey('raw', ua, { name: 'ECDH', namedCurve: 'P-256' }, false, []);
  const shared = new Uint8Array(await crypto.subtle.deriveBits({ name: 'ECDH', public: uaKey }, pair.privateKey, 256));
  const ikm = await hkdf(auth, shared, concat(te.encode('WebPush: info\0'), ua, asPub), 32);
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const cek = await hkdf(salt, ikm, te.encode('Content-Encoding: aes128gcm\0'), 16);
  const nonce = await hkdf(salt, ikm, te.encode('Content-Encoding: nonce\0'), 12);
  const key = await crypto.subtle.importKey('raw', cek, 'AES-GCM', false, ['encrypt']);
  const sealed = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv: nonce }, key, concat(data, new Uint8Array([2]))));
  /* header: salt, record size 4096, key id length, the sender's public key */
  return concat(salt, new Uint8Array([0, 0, 16, 0, 65]), asPub, sealed);
}

/* RFC 8292: a token for one push service, valid for twelve hours */
export async function vapidAuthorization(env, endpoint, now = Date.now()) {
  const pub = bytes(env.VAPID_PUBLIC_KEY);
  const jwk = { kty: 'EC', crv: 'P-256', d: String(env.VAPID_PRIVATE_KEY).trim(), x: b64url(pub.slice(1, 33)), y: b64url(pub.slice(33, 65)), ext: true };
  const key = await crypto.subtle.importKey('jwk', jwk, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
  const part = o => b64url(te.encode(JSON.stringify(o)));
  const unsigned = part({ typ: 'JWT', alg: 'ES256' }) + '.' + part({ aud: new URL(endpoint).origin, exp: Math.floor(now / 1000) + 12 * 3600, sub: env.VAPID_SUBJECT || 'mailto:hello@metanoialabs.net' });
  const sig = new Uint8Array(await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, key, te.encode(unsigned)));
  return `vapid t=${unsigned}.${b64url(sig)}, k=${String(env.VAPID_PUBLIC_KEY).trim()}`;
}

/**
 * One notification to one browser. `message` is { title, body, url?, tag? }; the service worker shows it.
 * Returns { ok, status, gone }: `gone` means the browser dropped the subscription and the row can go.
 * PUSH_MOCK=1 (local runs and the end-to-end workflow only) builds the request and sends nothing.
 */
export async function sendPush(env, sub, message, { ttl = 43200, cache } = {}) {
  if (!pushConfigured(env)) return { ok: false, reason: 'push not configured' };
  if (!okEndpoint(sub.endpoint)) return { ok: false, reason: 'bad endpoint', gone: true };
  try {
    const origin = new URL(sub.endpoint).origin;
    let authz = cache && cache[origin];
    if (!authz) { authz = await vapidAuthorization(env, sub.endpoint); if (cache) cache[origin] = authz; }
    const body = await encryptPayload(sub, JSON.stringify(message));
    if (env.PUSH_MOCK === '1') return { ok: true, status: 201, mock: true, bytes: body.length };
    const r = await fetch(sub.endpoint, { method: 'POST', headers: { authorization: authz, 'content-encoding': 'aes128gcm', 'content-type': 'application/octet-stream', ttl: String(ttl), urgency: 'normal' }, body });
    return { ok: r.status >= 200 && r.status < 300, status: r.status, gone: r.status === 404 || r.status === 410 };
  } catch (e) {
    return { ok: false, reason: String(e && e.message || e).slice(0, 120) };
  }
}
