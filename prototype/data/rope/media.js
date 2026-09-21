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
   browsers without H.264). Nothing else needs to change. */
window.MT_ROPE_SIM_MEDIA = {
  "kind": "living-portrait",
  "personas": {
    "hr":      { "idle": ["../../assets/rope/interviewers/hr-idle.mp4", "../../assets/rope/interviewers/hr-idle.webm"],      "talking": ["../../assets/rope/interviewers/hr-talking.mp4", "../../assets/rope/interviewers/hr-talking.webm"],      "poster": "../../assets/rope/interviewers/hr-idle.jpg" },
    "manager": { "idle": ["../../assets/rope/interviewers/manager-idle.mp4", "../../assets/rope/interviewers/manager-idle.webm"], "talking": ["../../assets/rope/interviewers/manager-talking.mp4", "../../assets/rope/interviewers/manager-talking.webm"], "poster": "../../assets/rope/interviewers/manager-idle.jpg" },
    "exec":    { "idle": ["../../assets/rope/interviewers/exec-idle.mp4", "../../assets/rope/interviewers/exec-idle.webm"],    "talking": ["../../assets/rope/interviewers/exec-talking.mp4", "../../assets/rope/interviewers/exec-talking.webm"],    "poster": "../../assets/rope/interviewers/exec-idle.jpg" }
  }
};
