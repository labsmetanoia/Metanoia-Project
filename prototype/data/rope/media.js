/* The Rope · Interview Specialist — interviewer media (read by js/rope-video.js).

   The interview room puts a human interviewer on the tile in one of three ways,
   tried in this order:

   1. live   — a streaming video avatar (HeyGen Interactive Avatar or compatible)
               behind the project's own endpoint (functions/api/rope/avatar), so the
               provider key stays on the server. Set `live.enabled = true` once the
               key is configured and the avatar/voice ids below are filled in. The
               interviewer then speaks each question as real video, lips in sync.
   2. clips  — recorded footage of a real interviewer, one clip per line. Record at
               16:9 (1280×720 or larger, H.264 + optional VP9, with audio), one file
               per key: `greet`, `q:<question id>` for every question of the paths
               the persona fronts, `bridge:1..n`, `close`, `farewell`. Declare them
               under personas.<id>.clips = { key: { src: [mp4, webm], text: '…' } }.
               Lines without a clip are read by the voice.
   3. voice  — the still portrait (a plain crop of one of the project's photographs,
               shown as a photograph) with the browser's speech engine, live captions
               and a speaking indicator. This is the mode the prototype runs in.

   Nothing here animates a photograph: a mode either plays real video or shows the
   photograph as it is, and the tile says which ("AI interviewer · photo + voice"). */
window.MT_ROPE_SIM_MEDIA = {
  "kind": "video-interviewer",
  "disclosure": { "en": "AI interviewer · simulation", "id": "Pewawancara AI · simulasi" },
  "syntheticAnimation": false,
  "syntheticVoice": true,
  /* the provider key and the per-persona avatar/voice ids are environment variables of the
     Pages project (see functions/api/rope/avatar); nothing secret is declared here */
  "live": { "enabled": false, "endpoint": "/api/rope/avatar", "provider": "heygen" },
  "personas": {
    "hr":      { "still": "../../assets/rope/interviewers/hr-portrait.jpg",      "clips": {} },
    "manager": { "still": "../../assets/rope/interviewers/manager-portrait.jpg", "clips": {} },
    "exec":    { "still": "../../assets/rope/interviewers/exec-portrait.jpg",    "clips": {} }
  },
  /* The still portraits are crops of photographs uploaded to the repository by its owner
     (assets/asset-manifest.json: negotiation.jpg, early-professional-pic.jpg, visibility.jpg).
     Their licence and model release follow the source photographs. */
  "consent": {
    "hr":      { "source": "assets/negotiation.jpg",            "status": "follows source" },
    "manager": { "source": "assets/early-professional-pic.jpg", "status": "follows source" },
    "exec":    { "source": "assets/visibility.jpg",             "status": "follows source" }
  }
};
