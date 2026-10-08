/* The Rope · Interview Specialist — interviewer media.
   Each persona is a RIG: a head-and-shoulders portrait (one of the project's own
   photographs, framed as a video call) plus a 478-point face mesh measured once by
   scripts/build-interviewer-rigs.py. On the stage, js/rope-face.js performs the
   portrait in real time — jaw and lips from the visemes of the spoken question,
   blinks, brows, head pose, breathing, nods while the candidate speaks, gaze — and
   delivers it as a video stream (canvas.captureStream → <video>).

   The `idle` / `talking` loops are pre-rendered by the SAME engine
   (scripts/render-interviewer-loops.py) and play where WebGL is unavailable and as
   previews (Rope page, Customise step). `gaze0` nudges the eyes toward the camera
   when the photograph looks slightly aside. `poster` is the first idle frame.

   To replace a persona with recorded footage of a real interviewer, set `idle` /
   `talking` to the clips and remove `rig` + `portrait`: the stage then plays the
   footage as is. */
window.MT_ROPE_SIM_MEDIA = {
  "kind": "face-rig",
  /* Disclosure and consent record (The Rope blueprint 16.2.0). Every persona below is a
     photograph animated in-repo with a synthetic voice — a simulation, not a recording of a
     real interviewer — and the simulator labels the stage accordingly. The source photographs
     were uploaded to the repository by its owner (assets/asset-manifest.json: negotiation.jpg,
     early-professional-pic.jpg, visibility.jpg); consent of the photographed people to
     synthetic animation has NOT been confirmed in writing. Until a consent reference (or a
     licence with synthetic-media rights) is recorded per persona, treat these as interim
     assets. */
  "disclosure": { "en": "Simulated interviewer · not a real person", "id": "Simulasi · bukan orang sungguhan" },
  "syntheticAnimation": true,
  "syntheticVoice": true,
  "consent": {
    "hr":      { "consentRef": null, "licence": "unverified — see assets/asset-manifest.json (assets/negotiation.jpg)",            "status": "unconfirmed" },
    "manager": { "consentRef": null, "licence": "unverified — see assets/asset-manifest.json (assets/early-professional-pic.jpg)", "status": "unconfirmed" },
    "exec":    { "consentRef": null, "licence": "unverified — see assets/asset-manifest.json (assets/visibility.jpg)",             "status": "unconfirmed" }
  },
  "personas": {
    "hr":      { "rig": "../../assets/rope/interviewers/hr-rig.json",      "portrait": "../../assets/rope/interviewers/hr-portrait.jpg",      "gaze0": [0.3, 0.05],
                 "idle": ["../../assets/rope/interviewers/hr-idle.mp4", "../../assets/rope/interviewers/hr-idle.webm"],           "talking": ["../../assets/rope/interviewers/hr-talking.mp4", "../../assets/rope/interviewers/hr-talking.webm"],           "poster": "../../assets/rope/interviewers/hr-idle.jpg" },
    "manager": { "rig": "../../assets/rope/interviewers/manager-rig.json", "portrait": "../../assets/rope/interviewers/manager-portrait.jpg", "gaze0": [0, 0],
                 "idle": ["../../assets/rope/interviewers/manager-idle.mp4", "../../assets/rope/interviewers/manager-idle.webm"], "talking": ["../../assets/rope/interviewers/manager-talking.mp4", "../../assets/rope/interviewers/manager-talking.webm"], "poster": "../../assets/rope/interviewers/manager-idle.jpg" },
    "exec":    { "rig": "../../assets/rope/interviewers/exec-rig.json",    "portrait": "../../assets/rope/interviewers/exec-portrait.jpg",    "gaze0": [-0.35, 0],
                 "idle": ["../../assets/rope/interviewers/exec-idle.mp4", "../../assets/rope/interviewers/exec-idle.webm"],       "talking": ["../../assets/rope/interviewers/exec-talking.mp4", "../../assets/rope/interviewers/exec-talking.webm"],       "poster": "../../assets/rope/interviewers/exec-idle.jpg" }
  }
};
