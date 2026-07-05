# The Ascent — Real Footage Shot List

> **Phase 1 (current validation): scenes 1–3 only.** Three videos have been
> provided via Google Drive (folder `1ePpwDKPkoS01IQxtjrGMebx54VuMBRNr`). The
> cloud session's network policy blocks Google Drive, so add them locally:
> download the folder, rename by narrative order, and place here —
>
> | Drive asset | Save as | Scene |
> |---|---|---|
> | Video 1 — The Valley | `01-call.mp4` | The Call to Climb |
> | Video 2 — Preparation | `02-prep.mp4` | Preparation |
> | Video 3 — The Climb | `03-climb.mp4` | The Climb |
>
> Then open `prototype/landing.html` — the scenes detect and play the files
> automatically (full-bleed, per-scene cinematic grade, pause when off-screen).
> If a clip exceeds ~50 MB, re-encode before committing:
> `ffmpeg -i in.mp4 -vf scale=1920:-2 -c:v libx264 -crf 23 -preset slow -an out.mp4`.
> Scenes 4–6 stay on the generative environment until Phase 1 is validated.

Drop licensed clips into this folder with these exact filenames and the landing
prototype picks them up automatically (each scene's `<video>` layer plays the
file; the generative environment renders whenever a file is missing).

**Global spec:** live-action only (no vector/illustration/2D), 4K master
downscaled to 1920×1080 H.264 MP4 for web, 8–20s seamless loop, slow motion
preferred (24–30fps conformed), muted, ~8–12 Mbps. Grade toward the brand
world: deep ink-blue nights, ember/amber warmth. Every clip should contain
slow forward or backward camera drift — the scroll interaction adds the
zoom-out, so avoid fast cuts or shake.

| File | Scene | Shot direction |
|---|---|---|
| `01-call.mp4` | The Call to Climb | Pre-dawn valley beneath a big peak, drifting fog, tiny headlamp light far up the route. Slow dolly/aerial push toward the mountain. Moody, blue hour, depth of field on foreground grass/tents. |
| `02-prep.mp4` | Preparation | First light. Close macro shots: hands packing a rope, checking gear, lacing boots, map on a table — golden window light, shallow DOF, deliberate slow motion. |
| `03-climb.mp4` | The Climb | Steep face in weather: climber on a ridgeline in blowing snow/spindrift, storm greys, wind-driven cloud racing past. Handheld-but-stabilized energy. |
| `04-basecamp.mp4` | Basecamp | Night. Tents glowing warm under a huge starfield, campfire sparks rising, people laughing quietly around flame light. Warm/cold contrast (ember vs. deep blue). |
| `05-summit.mp4` | Summit | Sunrise breaking over a sea of clouds from the summit; climber silhouette; long lens flare, gold flooding the frame. Slow pan or drone pull-up. |
| `06-horizon.mp4` | The Journey Never Ends | Endless layered ranges to the horizon in full day, slow backward aerial pull revealing more and more peaks. Expansive, luminous. |

Good free/licensed sources: Pexels Video, Coverr, Mixkit (free licenses);
Artgrid/Filmsupply for premium. Keep total payload budget ≤ 60 MB for the
web build (lazy-load scenes 3–6).
