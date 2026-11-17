#!/usr/bin/env node
/* Prints a throwaway pair of push keys in .dev.vars form, for local runs and the end-to-end workflow:
     node scripts/qa/push-keys.js >> .dev.vars
   PUSH_MOCK=1 makes the API build every notification and send none. Production keys are made in the
   admin page (Reminders) and live only in the Cloudflare dashboard. */
const crypto = require('crypto');
const jwk = crypto.generateKeyPairSync('ec', { namedCurve: 'prime256v1' }).privateKey.export({ format: 'jwk' });
const pub = Buffer.concat([Buffer.from([4]), Buffer.from(jwk.x, 'base64url'), Buffer.from(jwk.y, 'base64url')]).toString('base64url');
process.stdout.write(`VAPID_PUBLIC_KEY=${pub}\nVAPID_PRIVATE_KEY=${jwk.d}\nPUSH_MOCK=1\n`);
