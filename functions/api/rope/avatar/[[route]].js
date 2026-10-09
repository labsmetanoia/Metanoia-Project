/**
 * The Rope · live video interviewer — provider proxy (Cloudflare Pages Function).
 *
 * The browser (js/rope-video.js) talks only to this endpoint; the provider's API key
 * lives in the Pages project's environment (secret HEYGEN_API_KEY) and never reaches
 * the client. Routes, all POST with a JSON body:
 *
 *   /api/rope/avatar/session  { persona, lang }   → { session, url, token }
 *   /api/rope/avatar/speak    { session, text }   → { ok }
 *   /api/rope/avatar/stop     { session }         → { ok }
 *
 * Provider: HeyGen Interactive Avatar (Streaming API). The calls below follow the
 * documented v1 streaming endpoints (create_token → new → start; task; stop); verify
 * them against the current HeyGen API reference before enabling `live` in
 * data/rope/media.js, and set the avatar/voice ids there. Until the secret exists the
 * function answers 503 and the stage falls back to the recorded or voice interviewer.
 *
 * Not exercised in this repository: there are no provider credentials here.
 */
const HEYGEN = {
  base: 'https://api.heygen.com/v1',
  token: '/streaming.create_token',
  create: '/streaming.new',
  start: '/streaming.start',
  task: '/streaming.task',
  stop: '/streaming.stop'
};

/* avatar + voice per persona: the owner's choices, kept out of the client bundle */
const PERSONAS = {
  hr:      { avatar: 'HEYGEN_AVATAR_HR',      voice: { en: 'HEYGEN_VOICE_HR_EN',      id: 'HEYGEN_VOICE_HR_ID' } },
  manager: { avatar: 'HEYGEN_AVATAR_MANAGER', voice: { en: 'HEYGEN_VOICE_MANAGER_EN', id: 'HEYGEN_VOICE_MANAGER_ID' } },
  exec:    { avatar: 'HEYGEN_AVATAR_EXEC',    voice: { en: 'HEYGEN_VOICE_EXEC_EN',    id: 'HEYGEN_VOICE_EXEC_ID' } }
};

const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });

async function heygen(path, body, auth) {
  const r = await fetch(HEYGEN.base + path, { method: 'POST', headers: { 'content-type': 'application/json', ...auth }, body: JSON.stringify(body || {}) });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error('provider ' + r.status + ' ' + (data && data.message ? data.message : ''));
  return data.data || data;
}

export async function onRequestPost({ request, env, params }) {
  const route = (params.route || []).join('/');
  if (!env.HEYGEN_API_KEY) return json({ error: 'live interviewer not configured' }, 503);
  let body = {};
  try { body = await request.json(); } catch (e) { body = {}; }
  const origin = request.headers.get('origin') || '';
  if (origin && new URL(request.url).origin !== origin) return json({ error: 'origin' }, 403);

  try {
    if (route === 'session') {
      const p = PERSONAS[body.persona] || PERSONAS.hr;
      const lang = body.lang === 'id' ? 'id' : 'en';
      const avatar = env[p.avatar], voice = env[p.voice[lang]] || env[p.voice.en];
      if (!avatar) return json({ error: 'avatar not configured for ' + (body.persona || 'hr') }, 503);
      /* a short-lived session token, so the API key is used once per session */
      const tok = await heygen(HEYGEN.token, {}, { 'x-api-key': env.HEYGEN_API_KEY });
      const bearer = { authorization: 'Bearer ' + tok.token };
      const s = await heygen(HEYGEN.create, { quality: 'high', avatar_id: avatar, voice: voice ? { voice_id: voice, rate: 1.0 } : undefined, version: 'v2', video_encoding: 'H264' }, bearer);
      await heygen(HEYGEN.start, { session_id: s.session_id }, bearer);
      /* the client needs the room and its access token; the session id is opaque to it */
      return json({ session: s.session_id + '.' + tok.token, url: s.url, token: s.access_token });
    }
    const [sid, stoken] = String(body.session || '').split('.');
    if (!sid || !stoken) return json({ error: 'session' }, 400);
    const bearer2 = { authorization: 'Bearer ' + stoken };
    if (route === 'speak') {
      const text = String(body.text || '').slice(0, 1200);
      if (!text) return json({ error: 'text' }, 400);
      await heygen(HEYGEN.task, { session_id: sid, text, task_type: 'repeat' }, bearer2);   /* 'repeat' = say exactly this line */
      return json({ ok: true });
    }
    if (route === 'stop') {
      await heygen(HEYGEN.stop, { session_id: sid }, bearer2);
      return json({ ok: true });
    }
    return json({ error: 'route' }, 404);
  } catch (e) {
    return json({ error: String(e && e.message || e) }, 502);
  }
}

export const onRequestGet = () => json({ service: 'rope-avatar', routes: ['session', 'speak', 'stop'] });
