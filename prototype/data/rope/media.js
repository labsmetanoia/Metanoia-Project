/* The Rope · Interview Simulator — interviewer video media.
   The stage plays real video of a human interviewer: an `idle` loop while
   the candidate answers and a `talking` loop while the question is spoken,
   cross-faded by the simulator (js/rope-sim.js). Optional `listening` and
   `nod` loops are used when present.

   The clips shipped here are interim living-portrait loops rendered in-repo
   from the project's interviewer photographs (see assets/asset-manifest.json):
   a real person, camera-like motion, no lip movement. To replace them with
   recorded footage of an HR professional, record short loops at 16:9
   (640×360 or larger, H.264, no audio): ~10 s idle (attentive, occasional
   nod), ~10 s talking (speaking to camera), optional ~6 s listening/nod —
   then point the paths below at the files (a string, or an array of
   alternatives in preference order — here H.264 MP4 first, VP9 WebM for
   browsers without H.264).

   Lip movement: `mouth` tells the simulator where the mouth sits on the
   640×360 talking clip — x, y = the seam between the lips, w = mouth width,
   chin = the chin line, rot = tilt of the mouth in degrees — and the stage
   animates the jaw, the mouth interior and the rounding of the lips in time
   with the spoken question. The talking clips keep the mouth on that fixed
   pixel (a breathing zoom about the mouth, no pan). For recorded footage of a
   real interviewer: film the talking loop with the head still, measure the
   mouth once, and declare it here; omit `mouth` to play the footage as is. */
window.MT_ROPE_SIM_MEDIA = {
  "kind": "living-portrait",
  /* Disclosure and consent record (The Rope blueprint 16.2.0). Every clip below is a photograph
     animated in-repo with synthetic lip movement and a text-to-speech voice — a simulation, not a
     recording of a real interviewer. The simulator labels the stage accordingly. Consent for
     synthetic animation of the photographed people has NOT been confirmed: the source photographs
     are listed in assets/asset-manifest.json with status "undocumented". Until a written consent
     reference (or a licence with synthetic-media rights, or an illustrated avatar) is recorded per
     persona, treat these as interim assets. */
  "disclosure": { "en": "Simulated interviewer · not a real person", "id": "Simulasi · bukan orang sungguhan" },
  "syntheticAnimation": true,
  "syntheticVoice": true,
  "consent": {
    "hr":      { "consentRef": null, "licence": "unverified — see assets/asset-manifest.json (assets/bg/gauntlet/gate-05-hr-interview.jpg)", "status": "unconfirmed" },
    "manager": { "consentRef": null, "licence": "unverified — see assets/asset-manifest.json (assets/mentoring-session.jpg)", "status": "unconfirmed" },
    "exec":    { "consentRef": null, "licence": "unverified — see assets/asset-manifest.json (assets/bg/gauntlet/gate-04-casestudy.jpg)", "status": "unconfirmed" }
  },
  "personas": {
    "hr":      { "idle": ["../../assets/rope/interviewers/hr-idle.mp4", "../../assets/rope/interviewers/hr-idle.webm"],      "talking": ["../../assets/rope/interviewers/hr-talking.mp4", "../../assets/rope/interviewers/hr-talking.webm"],      "poster": "../../assets/rope/interviewers/hr-idle.jpg",
                 "mouth": { "x": 324, "y": 237, "w": 44, "chin": 268, "rot": 4 } },
    "manager": { "idle": ["../../assets/rope/interviewers/manager-idle.mp4", "../../assets/rope/interviewers/manager-idle.webm"], "talking": ["../../assets/rope/interviewers/manager-talking.mp4", "../../assets/rope/interviewers/manager-talking.webm"], "poster": "../../assets/rope/interviewers/manager-idle.jpg",
                 "mouth": { "x": 191, "y": 286, "w": 24, "chin": 305, "rot": 0, "open": 0.8 } },
    "exec":    { "idle": ["../../assets/rope/interviewers/exec-idle.mp4", "../../assets/rope/interviewers/exec-idle.webm"],    "talking": ["../../assets/rope/interviewers/exec-talking.mp4", "../../assets/rope/interviewers/exec-talking.webm"],    "poster": "../../assets/rope/interviewers/exec-idle.jpg",
                 "mouth": { "x": 348, "y": 205, "w": 42, "chin": 245, "rot": 6 } }
  }
};
