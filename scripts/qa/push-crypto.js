#!/usr/bin/env node
/* Web Push encryption and signing (server/lib/push.js) checked against an independent reading of the
   standards, written with Node's own crypto instead of WebCrypto:
     RFC 8291  a "browser" with its own key pair decrypts what the server library encrypted
     RFC 8292  the VAPID token verifies under the public key and names the push service
   No network and no dependency. Exits non-zero when a check fails. */
const crypto = require('crypto');
let pass = 0, failN = 0;
const ok = (c, label, detail) => { if (c) pass++; else { failN++; console.log('FAIL', label, detail === undefined ? '' : JSON.stringify(detail).slice(0, 200)); } };
const b64u = b => Buffer.from(b).toString('base64url');
const hkdf = (salt, ikm, info, len) => Buffer.from(crypto.hkdfSync('sha256', ikm, salt, info, len));

/* the receiving side of RFC 8291, section 3.4, and RFC 8188 for a single record */
function decrypt(body, ua, auth) {
  const salt = body.subarray(0, 16), rs = body.readUInt32BE(16), idlen = body[20], asPub = body.subarray(21, 21 + idlen), sealed = body.subarray(21 + idlen);
  const shared = ua.computeSecret(asPub);
  const ikm = hkdf(auth, shared, Buffer.concat([Buffer.from('WebPush: info\0'), ua.getPublicKey(), asPub]), 32);
  const cek = hkdf(salt, ikm, Buffer.from('Content-Encoding: aes128gcm\0'), 16), nonce = hkdf(salt, ikm, Buffer.from('Content-Encoding: nonce\0'), 12);
  const d = crypto.createDecipheriv('aes-128-gcm', cek, nonce);
  d.setAuthTag(sealed.subarray(sealed.length - 16));
  const plain = Buffer.concat([d.update(sealed.subarray(0, sealed.length - 16)), d.final()]);
  let end = plain.length - 1; while (end >= 0 && plain[end] === 0) end--;           /* padding, then the delimiter */
  return { rs, idlen, delimiter: plain[end], text: plain.subarray(0, end).toString('utf8') };
}

(async () => {
  const lib = await import('../../server/lib/push.js');
  const ua = crypto.createECDH('prime256v1'); ua.generateKeys();
  const auth = crypto.randomBytes(16);
  const sub = { endpoint: 'https://fcm.googleapis.com/fcm/send/qa', p256dh: b64u(ua.getPublicKey()), auth: b64u(auth) };
  const msg = JSON.stringify({ title: 'Hari ini di The Compass', body: 'Besok: tenggat Unilever · Marketing Analyst\nKebiasaan hari ini: Modul 20 menit', url: '/products/the-compass/' });
  const body = Buffer.from(await lib.encryptPayload(sub, msg));
  const out = decrypt(body, ua, auth);
  ok(out.text === msg && out.delimiter === 2 && out.rs === 4096 && out.idlen === 65, 'a browser key pair decrypts the message', { rs: out.rs, d: out.delimiter });
  const again = Buffer.from(await lib.encryptPayload(sub, msg));
  ok(!again.subarray(0, 16).equals(body.subarray(0, 16)) && !again.subarray(21, 86).equals(body.subarray(21, 86)), 'every message has a fresh salt and a fresh sender key');
  const other = crypto.createECDH('prime256v1'); other.generateKeys();
  let leaked = true; try { decrypt(body, other, auth); } catch (e) { leaked = false; }
  ok(!leaked, 'another browser cannot read it');
  let big = false; try { await lib.encryptPayload(sub, 'x'.repeat(4000)); } catch (e) { big = true; }
  ok(big, 'an oversized message is refused');

  const jwk = crypto.generateKeyPairSync('ec', { namedCurve: 'prime256v1' }).privateKey.export({ format: 'jwk' });
  const pub = Buffer.concat([Buffer.from([4]), Buffer.from(jwk.x, 'base64url'), Buffer.from(jwk.y, 'base64url')]);
  const env = { VAPID_PUBLIC_KEY: b64u(pub), VAPID_PRIVATE_KEY: jwk.d };
  ok(lib.pushConfigured(env) && !lib.pushConfigured({}) && !lib.pushConfigured({ VAPID_PUBLIC_KEY: 'abc', VAPID_PRIVATE_KEY: 'def' }), 'keys of the wrong size count as not set');
  const authz = await lib.vapidAuthorization(env, sub.endpoint);
  const m = /^vapid t=([^,]+), k=(.+)$/.exec(authz) || [], [h, p, s] = String(m[1]).split('.');
  const key = crypto.createPublicKey({ key: { kty: 'EC', crv: 'P-256', x: jwk.x, y: jwk.y }, format: 'jwk' });
  const claims = JSON.parse(Buffer.from(p, 'base64url').toString()), head = JSON.parse(Buffer.from(h, 'base64url').toString());
  ok(crypto.verify('sha256', Buffer.from(h + '.' + p), { key, dsaEncoding: 'ieee-p1363' }, Buffer.from(s, 'base64url')), 'the VAPID token verifies under the public key');
  ok(head.alg === 'ES256' && claims.aud === 'https://fcm.googleapis.com' && /^mailto:/.test(claims.sub) && claims.exp - Date.now() / 1000 <= 24 * 3600 && claims.exp > Date.now() / 1000 && m[2] === env.VAPID_PUBLIC_KEY, 'the token names the push service, a contact and an expiry within a day', claims);

  ok(lib.okEndpoint('https://fcm.googleapis.com/fcm/send/x') && lib.okEndpoint('https://updates.push.services.mozilla.com/wpush/v2/x') && lib.okEndpoint('https://web.push.apple.com/x') && lib.okEndpoint('https://db5p.notify.windows.com/w/?token=x'), 'the known push services are accepted');
  ok(!lib.okEndpoint('http://fcm.googleapis.com/x') && !lib.okEndpoint('https://evil.example/fcm.googleapis.com') && !lib.okEndpoint('https://fcm.googleapis.com.evil.example/x') && !lib.okEndpoint('https://127.0.0.1/x') && !lib.okEndpoint('https://user@fcm.googleapis.com/x') && !lib.okEndpoint('nonsense'), 'any other address is refused');
  ok(lib.cleanSubscription({ endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } }).sub && lib.cleanSubscription({ endpoint: sub.endpoint, keys: { p256dh: 'AAAA', auth: sub.auth } }).field === 'p256dh' && lib.cleanSubscription({ endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: 'AAAA' } }).field === 'auth', 'a subscription needs keys of the right size');
  const sent = await lib.sendPush({ ...env, PUSH_MOCK: '1' }, sub, { title: 't', body: 'b' });
  ok(sent.ok && sent.mock && sent.bytes > 100, 'mock mode builds the request and sends nothing', sent);

  console.log(`push checks: ${pass} passed, ${failN} failed`);
  process.exit(failN ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
