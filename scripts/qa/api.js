/* End-to-end API checks against a server that runs the Pages Functions with a D1 database
   (`npx wrangler pages dev --port 8788` after `npx wrangler d1 migrations apply metanoia --local`).
   BASE overrides the origin. Exits non-zero when a check fails.

   Covers: health, registration validation, session cookie, sign-in, sign-out, the same-origin
   guard, admin role only after a verified address, progress, leads, Career Map results, events,
   account update / password / export / deletion, the admin API and its token.
   With D1_SQLITE=<path to the local D1 .sqlite file> it also proves the pre-hijack guard (it plants a
   one-time sign-in token directly in the database, which only a local run can do).
   Each run registers fresh addresses (…+<stamp>@example.test), so it can be repeated; the
   registration limiter (10 an hour per address) is the only state that carries over. */
const B = process.env.BASE || 'http://localhost:8788';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'local-admin-token';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.test';
const stamp = Date.now().toString(36);
const crypto = require('crypto'), { execFileSync } = require('child_process');
const sql = (q, args = []) => execFileSync('python3', ['-c', 'import sqlite3,sys,json\nc=sqlite3.connect(sys.argv[1],timeout=10)\nc.execute(sys.argv[2],json.loads(sys.argv[3]))\nc.commit()', process.env.D1_SQLITE, q, JSON.stringify(args)]);
let pass = 0, failN = 0;
const ok = (cond, label, detail) => { if (cond) { pass++; } else { failN++; console.log('FAIL', label, detail === undefined ? '' : JSON.stringify(detail).slice(0, 300)); } };

function client() {
  let jar = '';
  return async function call(method, path, body, headers = {}) {
    const h = { ...headers }; if (jar) h.cookie = jar;
    if (body !== undefined) h['content-type'] = 'application/json';
    if (method !== 'GET' && !('origin' in h)) h.origin = B;
    if (h.origin === null) delete h.origin;
    const r = await fetch(B + path, { method, headers: h, body: body === undefined ? undefined : JSON.stringify(body), redirect: 'manual' });
    const sc = r.headers.getSetCookie ? r.headers.getSetCookie() : [];
    for (const c of sc) { const m = /^mt_session=([^;]*)/.exec(c); if (m) jar = m[1] ? 'mt_session=' + m[1] : ''; }
    const text = await r.text(); let j = null; try { j = JSON.parse(text); } catch (e) {}
    return { status: r.status, j, text, headers: r.headers, setCookie: sc };
  };
}

(async () => {
  const anon = client();
  let r = await anon('GET', '/api/health');
  ok(r.status === 200 && r.j && r.j.ok && r.j.db, 'health', r.j);
  if (!(r.j && r.j.accounts)) { console.log('accounts are closed on this server; account checks skipped'); }

  /* ── registration validation ── */
  const email = `qa+${stamp}@example.test`, pw = 'correct horse battery';
  r = await anon('POST', '/api/auth/register', { name: 'QA', email, password: 'short', terms: true });
  ok(r.status === 400 && r.j.field === 'password', 'register rejects a short password', r.j);
  r = await anon('POST', '/api/auth/register', { name: 'QA', email: 'not-an-email', password: pw, terms: true });
  ok(r.status === 400 && r.j.field === 'email', 'register rejects a bad e-mail', r.j);
  r = await anon('POST', '/api/auth/register', { name: 'QA', email, password: pw });
  ok(r.status === 400 && r.j.field === 'terms', 'register needs the terms', r.j);
  r = await anon('POST', '/api/auth/register', { name: 'QA', email, password: pw, terms: true }, { origin: 'https://evil.example' });
  ok(r.status === 403, 'cross-origin register is refused', r.status);

  /* ── a member ── */
  const m = client();
  r = await m('POST', '/api/auth/register', { name: 'QA Member', email, password: pw, terms: true, audience: 'student', locale: 'id' });
  ok(r.status === 201 && r.j.user && r.j.user.email === email && r.j.user.role === 'member', 'register', r.j);
  ok(r.setCookie.some(c => /HttpOnly/i.test(c) && /SameSite=Lax/i.test(c)), 'session cookie is HttpOnly and SameSite', r.setCookie);
  ok(r.j.access && typeof r.j.access === 'object', 'register returns access', r.j.access);
  r = await m('GET', '/api/auth/me');
  ok(r.status === 200 && r.j.user.email === email && r.j.user.locale === 'id' && !('pw_hash' in r.j.user), 'me', r.j);
  r = await anon('POST', '/api/auth/register', { name: 'QA', email, password: pw, terms: true });
  ok(r.status === 409, 'duplicate registration is refused', r.status);
  r = await anon('GET', '/api/auth/me');
  ok(r.status === 200 && r.j.user === null, 'me for a guest answers 200 with no user (no console error on public pages)', r.status);

  /* ── sign-in ── */
  const m2 = client();
  r = await m2('POST', '/api/auth/login', { email, password: 'wrong password' });
  ok(r.status === 401, 'wrong password', r.status);
  r = await m2('POST', '/api/auth/login', { email: `nobody+${stamp}@example.test`, password: pw });
  ok(r.status === 401, 'unknown address reads the same as a wrong password', r.status);
  r = await m2('POST', '/api/auth/login', { email: email.toUpperCase(), password: pw });
  ok(r.status === 200 && r.j.user.email === email, 'login is case-insensitive on the address', r.j);
  r = await m2('GET', '/api/auth/sessions');
  ok(r.status === 200 && r.j.sessions.length === 2 && r.j.sessions.filter(s => s.current).length === 1, 'two sessions, one current', r.j);
  const other = r.j.sessions.find(s => !s.current);
  r = await m2('DELETE', '/api/auth/sessions/' + other.id);
  ok(r.status === 200, 'revoke the other device', r.j);
  r = await m('GET', '/api/auth/me');
  ok(r.status === 401 || (r.status === 200 && r.j.user === null), 'the revoked device is signed out', r.status);

  /* ── an ADMIN_EMAILS address registered with a password is not an admin until the address is proven ── */
  const adm = client();
  if (process.env.D1_SQLITE) { sql('DELETE FROM sessions WHERE user_id IN (SELECT id FROM users WHERE email = ?)', [ADMIN_EMAIL]); sql('DELETE FROM users WHERE email = ?', [ADMIN_EMAIL]); }
  r = await adm('POST', '/api/auth/register', { name: 'Not Yet Admin', email: ADMIN_EMAIL, password: pw, terms: true });
  if (r.status === 201) {
    ok(r.j.user.role === 'member', 'password registration never grants admin', r.j.user);
    r = await adm('GET', '/api/admin/stats');
    ok(r.status === 401, 'unverified admin address cannot read the admin API', r.status);
  } else {
    ok(r.status === 409, 'admin address already registered', r.status);
    r = await adm('POST', '/api/auth/login', { email: ADMIN_EMAIL, password: pw });
    if (r.status === 200) {
      ok(r.j.user.email_verified || r.j.user.role === 'member', 'unverified admin address stays a member at sign-in', r.j.user);
      if (!r.j.user.email_verified) { r = await adm('GET', '/api/admin/stats'); ok(r.status === 401, 'unverified admin address cannot read the admin API', r.status); }
    }
  }

  /* ── pre-hijack guard: a proven sign-in takes over an account someone opened with a password on that address ── */
  if (process.env.D1_SQLITE) {
    const victim = `victim+${stamp}@example.test`, attacker = client(), owner = client();
    r = await attacker('POST', '/api/auth/register', { name: 'Attacker', email: victim, password: 'attacker password', terms: true });
    ok(r.status === 201, 'attacker pre-registers the victim address', r.status);
    const raw = crypto.randomBytes(32).toString('base64url'), hash = crypto.createHash('sha256').update(raw).digest('hex');
    sql('INSERT INTO tokens (token_hash, kind, user_id, email, created_at, expires_at) VALUES (?, ?, NULL, ?, ?, ?)', [hash, 'magic', victim, new Date().toISOString(), new Date(Date.now() + 600000).toISOString()]);
    r = await owner('POST', '/api/auth/magic/consume', { token: raw });
    ok(r.status === 200 && r.j.user.email === victim && r.j.user.email_verified && r.j.user.has_password === false, 'the mailbox owner signs in by link and the unproven password is cleared', r.j);
    r = await attacker('GET', '/api/auth/me');
    ok(r.status === 200 && r.j.user === null, 'the attacker session is ended', r.j);
    r = await client()('POST', '/api/auth/login', { email: victim, password: 'attacker password' });
    ok(r.status === 401, 'the attacker password no longer works', r.status);
    r = await owner('POST', '/api/auth/magic/consume', { token: raw });
    ok(r.status === 400, 'a sign-in link works once', r.status);
    /* an ADMIN_EMAILS address proven by link becomes admin */
    const raw2 = crypto.randomBytes(32).toString('base64url'), hash2 = crypto.createHash('sha256').update(raw2).digest('hex');
    sql('INSERT INTO tokens (token_hash, kind, user_id, email, created_at, expires_at) VALUES (?, ?, NULL, ?, ?, ?)', [hash2, 'magic', ADMIN_EMAIL, new Date().toISOString(), new Date(Date.now() + 600000).toISOString()]);
    const realAdmin = client();
    r = await realAdmin('POST', '/api/auth/magic/consume', { token: raw2 });
    ok(r.status === 200 && r.j.user.role === 'admin', 'a proven ADMIN_EMAILS address is an admin', r.j && r.j.user);
    r = await realAdmin('GET', '/api/admin/stats');
    ok(r.status === 200 && r.j.actor === ADMIN_EMAIL, 'the proven admin reads the admin API by session', r.status);
    r = await adm('GET', '/api/auth/me');
    ok(r.j && r.j.user === null, 'the earlier unproven session on the admin address is ended', r.j);
  }

  /* ── feedback ── */
  r = await anon('POST', '/api/feedback', { kind: 'bug', message: 'hi' });
  ok(r.status === 400 && r.j.field === 'message', 'feedback needs a real message', r.j);
  r = await anon('POST', '/api/feedback', { kind: 'nonsense', message: 'a long enough message' });
  ok(r.status === 400 && r.j.field === 'kind', 'feedback kind is validated', r.j);
  r = await anon('POST', '/api/feedback', { kind: 'idea', message: 'Guest idea ' + stamp, rating: 9 });
  ok(r.status === 400 && r.j.field === 'rating', 'feedback rating is 1 to 5', r.j);
  r = await anon('POST', '/api/feedback', { kind: 'idea', message: 'Guest idea ' + stamp, rating: 4, contact: `guest+${stamp}@example.test`, page: '/help', locale: 'id' });
  ok(r.status === 201 && r.j.id, 'a guest sends feedback', r.j);
  r = await m2('POST', '/api/feedback', { kind: 'bug', message: '=HYPERLINK("x") member bug ' + stamp, page: '/portal' });
  ok(r.status === 201, 'a member sends feedback', r.j);
  r = await anon('POST', '/api/feedback', { kind: 'bug', message: 'cross site ' + stamp }, { origin: 'https://evil.example' });
  ok(r.status === 403, 'cross-origin feedback is refused', r.status);
  r = await m2('GET', '/api/admin/feedback');
  ok(r.status === 401, 'a member cannot read the feedback inbox', r.status);

  /* ── progress ── */
  r = await anon('GET', '/api/progress');
  ok(r.status === 401, 'progress needs a session', r.status);
  r = await m2('PUT', '/api/progress/qa-notes', { data: { a: 1 }, version: 1 });
  ok(r.status === 200 && r.j.ok, 'progress write', r.j);
  r = await m2('GET', '/api/progress/qa-notes');
  ok(r.status === 200 && r.j.data && r.j.data.a === 1, 'progress read', r.j);
  r = await m2('PUT', '/api/progress/qa-notes', { data: { a: 0 }, version: 0 });
  ok(r.j && r.j.data && r.j.data.a === 1, 'a stale write gets the stored record back', r.j);
  r = await m2('PUT', '/api/progress/' + encodeURIComponent('../x'), { data: {}, version: 1 });
  ok(r.status === 400 || r.status === 404, 'bad namespace', r.status);
  r = await m2('PUT', '/api/progress/qa-big', { data: 'x'.repeat(900 * 1024), version: 1 });
  ok(r.status === 413 || r.status === 400, 'oversized progress is refused', r.status);
  r = await m2('PUT', '/api/progress/browser', { data: { keys: { k1: 'v1' }, times: { k1: 10 }, deleted: {} }, version: 1 });
  ok(r.status === 200, 'keyed progress write', r.j);
  r = await m2('PUT', '/api/progress/browser', { data: { keys: { k2: 'v2' }, times: { k2: 20 }, deleted: {} }, version: 2 });
  ok(r.status === 200 && r.j.data && r.j.data.keys && r.j.data.keys.k1 === 'v1' && r.j.data.keys.k2 === 'v2', 'keyed progress merges per key', r.j);

  /* ── leads ── */
  r = await anon('POST', '/api/leads/newsletter', { email: `news+${stamp}@example.test`, consent: true, source_page: '/' });
  ok((r.status === 200 || r.status === 201) && r.j.ok && r.j.id, 'newsletter', r.j);
  r = await anon('POST', '/api/leads/newsletter', { email: `news2+${stamp}@example.test` });
  ok(r.status === 400 && r.j.field === 'consent', 'newsletter needs consent', r.j);
  r = await anon('POST', '/api/leads/enterprise', { name: 'QA', email: `ent+${stamp}@example.test`, company: 'QA Co', role: 'HR', cohort_size: '20', interest: 'Cohorts', message: 'hello', consent: true });
  ok((r.status === 200 || r.status === 201) && r.j.ok, 'enterprise inquiry', r.j);
  r = await anon('POST', '/api/leads/enterprise', { name: 'QA', email: `ent+${stamp}@example.test`, consent: true });
  ok(r.status === 400 && r.j.field === 'company', 'enterprise needs a company', r.j);
  r = await anon('POST', '/api/leads/mentor', { name: 'QA', email: `men+${stamp}@example.test`, expertise: 'Consulting', years: '7', linkedin: 'https://example.com/in/x', terms: true });
  ok(r.status === 400 && r.j.field === 'linkedin', 'mentor LinkedIn must be linkedin.com', r.j);
  r = await anon('POST', '/api/leads/mentor', { name: 'QA', email: `men+${stamp}@example.test`, expertise: 'Consulting', years: '7', linkedin: 'https://www.linkedin.com/in/x', terms: true, motivation: 'm' });
  ok((r.status === 200 || r.status === 201) && r.j.ok, 'mentor application', r.j);
  r = await anon('POST', '/api/leads/newsletter', { email: `bot+${stamp}@example.test`, consent: true, _gotcha: 'x' });
  ok(r.status === 200 && r.j.id === 'ok', 'honeypot is swallowed', r.j);
  r = await anon('POST', '/api/leads/nothing', { email: `x+${stamp}@example.test` });
  ok(r.status === 404, 'unknown lead kind', r.status);

  /* ── Career Map result by e-mail ── */
  r = await anon('POST', '/api/results', { email: `res+${stamp}@example.test`, total: 640, band: 'x', dims: {}, profile: {}, answers: {} });
  ok(r.status === 400 && r.j.field === 'total', 'result scores are validated', r.j);
  const dimKeys = ['ci', 'ps', 'ir', 'nc', 'cm'], dims = {}; dimKeys.forEach((k, i) => { dims[k] = 6 + i; });
  r = await anon('POST', '/api/results', { email: `res+${stamp}@example.test`, total: 64, band: 'Mid-Mountain', dims, profile: { stage: 'student' }, answers: { q1: 2 } });
  ok((r.status === 200 || r.status === 201) && r.j.url, 'result stored with a signed link', r.j);
  if (r.j && r.j.url) {
    const u = new URL(r.j.url, B);
    const got = await anon('GET', '/api/results/' + u.searchParams.get('result') + '?sig=' + u.searchParams.get('sig'));
    ok(got.status === 200 && got.j.result.total === 64 && !JSON.stringify(got.j).includes('@example.test'), 'the signed link returns the result and never the address', got.j);
    const bad = await anon('GET', '/api/results/' + u.searchParams.get('result') + '?sig=' + '0'.repeat(32));
    ok(bad.status === 404, 'a wrong signature is a 404', bad.status);
  }

  /* ── events ── */
  r = await anon('POST', '/api/events', { anon_id: 'qa-' + stamp + '-0123456789', locale: 'en', events: [{ name: 'site.page.viewed', page: '/qa', ts: new Date().toISOString() }] });
  ok(r.status === 200 || r.status === 202, 'events accepted', r.j);
  r = await anon('POST', '/api/events', { events: 'x' });
  ok(r.status === 400, 'events validated', r.status);

  /* ── account ── */
  r = await m2('POST', '/api/account/update', { name: 'QA Renamed', audience: 'fresh-graduate', locale: 'en', marketing: true });
  ok(r.status === 200 && r.j.user.name === 'QA Renamed' && r.j.user.audience === 'fresh-graduate', 'account update', r.j);
  r = await m2('POST', '/api/account/password', { current: 'nope', password: 'another good password' });
  ok(r.status === 401, 'password change needs the current one', r.status);
  r = await m2('POST', '/api/account/password', { current: pw, password: 'another good password' });
  ok(r.status === 200, 'password change', r.j);
  r = await m2('GET', '/api/auth/me');
  ok(r.status === 200 && r.j.user, 'this device stays signed in after a password change', r.status);
  r = await m2('GET', '/api/account/export');
  ok(r.status === 200 && r.text.includes(email) && !/pw_hash|token_hash/.test(r.text), 'export holds the member, not secrets', r.text.slice(0, 200));
  r = await m2('GET', '/api/admin/stats');
  ok(r.status === 401, 'a member cannot read the admin API', r.status);
  r = await m2('GET', '/api/admin/users.csv');
  ok(r.status === 401, 'a member cannot export members', r.status);

  /* ── admin token ── */
  const A = { authorization: 'Bearer ' + ADMIN_TOKEN };
  r = await anon('GET', '/api/admin/stats', undefined, { authorization: 'Bearer wrong' });
  ok(r.status === 401, 'wrong admin token', r.status);
  r = await anon('GET', '/api/admin/stats', undefined, A);
  ok(r.status === 200 && r.j.users >= 1, 'admin stats', r.j);
  r = await anon('GET', '/api/admin/leads?kind=enterprise&q=' + encodeURIComponent('QA Co'), undefined, A);
  ok(r.status === 200 && r.j.leads.length >= 1, 'admin finds the enterprise lead', r.j && r.j.leads && r.j.leads.length);
  const lead = r.j.leads[0];
  r = await anon('PATCH', '/api/admin/leads/' + lead.id, { status: 'contacted', notes: 'qa' }, A);
  ok(r.status === 200 && r.j.lead.status === 'contacted', 'admin updates a lead', r.j);
  r = await anon('PATCH', '/api/admin/leads/' + lead.id, { status: 'contacted' }, { ...A, origin: 'https://evil.example' });
  ok(r.status === 403, 'cross-origin admin write is refused', r.status);
  r = await anon('GET', '/api/admin/users?q=' + encodeURIComponent(email), undefined, A);
  ok(r.status === 200 && r.j.users.length === 1 && !('pw_hash' in r.j.users[0]), 'admin user search', r.j);
  r = await anon('GET', '/api/admin/users.csv?q=' + encodeURIComponent(email), undefined, A);
  ok(r.status === 200 && /text\/csv/.test(r.headers.get('content-type')) && r.text.includes(email), 'admin CSV', r.text.slice(0, 120));
  r = await anon('GET', '/api/admin/funnel?days=7', undefined, A);
  ok(r.status === 200 && Array.isArray(r.j.steps), 'admin funnel', r.j);
  r = await anon('POST', '/api/admin/entitlements', { user: email, product: 'all', plan: 'founding', note: 'qa' }, A);
  ok(r.status === 201 && r.j.entitlement, 'admin grants access', r.j);
  if (r.j && r.j.entitlement) { r = await anon('DELETE', '/api/admin/entitlements/' + r.j.entitlement.id, undefined, A); ok(r.status === 200, 'admin revokes access', r.j); }
  r = await anon('GET', '/api/admin/leads.csv?kind=enterprise', undefined, A);
  ok(r.status === 200 && /text\/csv/.test(r.headers.get('content-type')) && r.text.includes('QA Co'), 'admin lead export', r.text.slice(0, 120));
  r = await anon('GET', '/api/admin/feedback?q=' + stamp, undefined, A);
  ok(r.status === 200 && r.j.feedback.length === 2 && r.j.feedback.some(f => f.member && f.from === email) && r.j.feedback.some(f => !f.member && f.from === `guest+${stamp}@example.test`), 'admin reads the feedback inbox with who sent what', r.j);
  const fbItem = r.j.feedback[0];
  r = await anon('PATCH', '/api/admin/feedback/' + fbItem.id, { status: 'planned', notes: 'qa' }, A);
  ok(r.status === 200 && r.j.feedback.status === 'planned', 'admin triages feedback', r.j);
  r = await anon('PATCH', '/api/admin/feedback/' + fbItem.id, { status: 'bogus' }, A);
  ok(r.status === 400, 'feedback status is validated', r.status);
  r = await anon('GET', '/api/admin/stats', undefined, A);
  ok(r.status === 200 && typeof r.j.feedback_new === 'number', 'admin stats count new feedback', r.j.feedback_new);
  r = await anon('GET', '/api/admin/audit?limit=50', undefined, A);
  const acts = r.j && r.j.audit ? r.j.audit.map(a => a.action) : [];
  ok(r.status === 200 && ['lead.update', 'users.export', 'entitlement.grant', 'entitlement.revoke', 'leads.export', 'feedback.update'].every(a => acts.includes(a)), 'every admin write and export is in the audit trail', acts);
  r = await m2('GET', '/api/admin/audit');
  ok(r.status === 401, 'a member cannot read the audit trail', r.status);
  /* a member-typed formula is neutralised in exports */
  await m2('POST', '/api/account/update', { name: '=cmd|calc' });
  r = await anon('GET', '/api/admin/users.csv?q=' + encodeURIComponent(email), undefined, A);
  ok(r.status === 200 && r.text.includes("'=cmd|calc") , 'CSV export neutralises a leading formula character', r.text.slice(-120));

  /* ── deletion ── */
  r = await m2('POST', '/api/account/delete', { password: 'wrong' });
  ok(r.status === 401, 'deletion needs the password', r.status);
  r = await m2('POST', '/api/account/delete', { password: 'another good password' });
  ok(r.status === 200 && r.j.ok, 'deletion scheduled', r.j);
  r = await m2('GET', '/api/auth/me');
  ok(r.status === 401 || (r.status === 200 && r.j.user === null), 'signed out once deletion is scheduled', r.status);
  r = await client()('POST', '/api/auth/login', { email, password: 'another good password' });
  ok(r.status === 403, 'sign-in is blocked while deletion is pending', r.status);

  /* ── sign-out ── */
  const s = client();
  const e2 = `qa2+${stamp}@example.test`;
  await s('POST', '/api/auth/register', { name: 'QA Two', email: e2, password: pw, terms: true });
  r = await s('POST', '/api/auth/logout');
  ok(r.status === 200, 'logout', r.status);
  r = await s('GET', '/api/auth/me');
  ok(r.status === 401 || (r.status === 200 && r.j.user === null), 'signed out', r.status);

  console.log(`api checks: ${pass} passed, ${failN} failed`);
  process.exit(failN ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
