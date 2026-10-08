#!/usr/bin/env python3
"""
Build the Rope interviewer rigs: a head-and-shoulders portrait texture plus a
478-point face mesh for each persona, read once from the project's own
photographs with MediaPipe Face Landmarker. The browser engine
(prototype/js/rope-face.js) warps the real photograph on this mesh in real
time — jaw, lips, eyelids, brows, head pose, gaze — so the interviewer speaks
each question with her own face, and the stage delivers it as a video stream.

Outputs (prototype/assets/rope/interviewers/):
  <id>-portrait.jpg    1280×720 texture (video-call framing, face at ~42 % height)
  <id>-rig.json        {w, h, pts:[[x, y, z] × 478], face:{cx, cy, w, h}}
  prototype/data/rope/facemesh.js   the shared triangle list and feature index sets

Usage:  LD_LIBRARY_PATH=<dir with libEGL.so.1> python3 scripts/build-interviewer-rigs.py
Requires: mediapipe ≥ 1.1 (pip), its face_landmarker.task model, numpy, Pillow.
The model path is read from MP_FACE_MODEL (default: ./face_landmarker.task).
"""
import os, sys, json, math
import numpy as np
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
A = os.path.join(ROOT, 'prototype', 'assets')
OUT = os.path.join(A, 'rope', 'interviewers')
MODEL = os.environ.get('MP_FACE_MODEL', os.path.join(os.getcwd(), 'face_landmarker.task'))
TW, TH = 1280, 720

# persona → (source photograph, 0-based index of the face when the photo holds several, framing)
PERSONAS = {
    'hr':      {'src': 'negotiation.jpg',            'pick': 'frontal', 'zoom': 3.5, 'cy': 0.44},
    'manager': {'src': 'early-professional-pic.jpg', 'pick': 'largest', 'zoom': 3.6, 'cy': 0.43},
    'exec':    {'src': 'visibility.jpg',             'pick': 'largest', 'zoom': 3.5, 'cy': 0.43},
}

import mediapipe as mp
from mediapipe.tasks import python as mpp
from mediapipe.tasks.python import vision
from mediapipe.tasks.python.vision.face_landmarker import FaceLandmarksConnections as FC

opts = vision.FaceLandmarkerOptions(base_options=mpp.BaseOptions(model_asset_path=MODEL), num_faces=5, output_face_blendshapes=True, output_facial_transformation_matrixes=True)
LM = vision.FaceLandmarker.create_from_options(opts)

def detect(im):
    res = LM.detect(mp.Image(image_format=mp.ImageFormat.SRGB, data=np.asarray(im.convert('RGB'))))
    faces = []
    W, H = im.size
    for i, f in enumerate(res.face_landmarks):
        pts = np.array([[p.x * W, p.y * H, p.z * W] for p in f], np.float64)
        M = np.array(res.facial_transformation_matrixes[i]).reshape(4, 4); r = M[:3, :3]
        yaw = math.degrees(math.atan2(-r[2, 0], math.sqrt(r[0, 0] ** 2 + r[1, 0] ** 2)))
        faces.append({'pts': pts, 'yaw': yaw, 'bs': {b.category_name: round(b.score, 3) for b in res.face_blendshapes[i]}})
    return faces

def pick(faces, how):
    if not faces: raise SystemExit('no face found')
    if how == 'frontal': return min(faces, key=lambda f: abs(f['yaw']))
    return max(faces, key=lambda f: f['pts'][:, 0].max() - f['pts'][:, 0].min())

def oval_box(pts):
    oval = [c.start for c in FC.FACE_LANDMARKS_FACE_OVAL]
    o = pts[oval]
    return o[:, 0].min(), o[:, 1].min(), o[:, 0].max() - o[:, 0].min(), o[:, 1].max() - o[:, 1].min()

def build(pid, cfg):
    src = Image.open(os.path.join(A, cfg['src'])).convert('RGB')
    f = pick(detect(src), cfg['pick'])
    x, y, w, h = oval_box(f['pts'])
    cx, cy = x + w / 2, y + h / 2
    cw = w * cfg['zoom']; ch = cw * TH / TW
    left = cx - cw / 2; top = cy - ch * cfg['cy']
    left = max(0, min(left, src.size[0] - cw)); top = max(0, min(top, src.size[1] - ch))
    crop = src.crop((int(left), int(top), int(left + cw), int(top + ch))).resize((TW, TH), Image.LANCZOS)
    # re-detect on the final texture so the mesh matches its pixels exactly
    g = pick(detect(crop), 'largest')
    x, y, w, h = oval_box(g['pts'])
    os.makedirs(OUT, exist_ok=True)
    crop.save(os.path.join(OUT, pid + '-portrait.jpg'), quality=88, optimize=True, progressive=True)
    rig = {'w': TW, 'h': TH, 'face': {'cx': round(x + w / 2, 1), 'cy': round(y + h / 2, 1), 'w': round(w, 1), 'h': round(h, 1)},
           'yaw': round(g['yaw'], 1), 'rest': {k: g['bs'][k] for k in ('jawOpen', 'mouthSmileLeft', 'mouthSmileRight', 'eyeBlinkLeft', 'eyeBlinkRight', 'browInnerUp') if k in g['bs']},
           'source': cfg['src'], 'crop': [int(left), int(top), int(cw), int(ch)],
           'pts': [[round(p[0], 2), round(p[1], 2), round(p[2], 2)] for p in g['pts']]}
    with open(os.path.join(OUT, pid + '-rig.json'), 'w') as fh: json.dump(rig, fh, separators=(',', ':'))
    print(pid, cfg['src'], 'face', rig['face'], 'yaw', rig['yaw'], 'rest', rig['rest'])

def mesh():
    T = [(c.start, c.end) for c in FC.FACE_LANDMARKS_TESSELATION]
    tris = [[T[i][0], T[i + 1][0], T[i + 2][0]] for i in range(0, len(T), 3)]
    def ring(conn):
        out = []
        for c in conn:
            if c.start not in out: out.append(c.start)
        return out
    def idx(conn): return sorted(set([c.start for c in conn] + [c.end for c in conn]))
    data = {
        'tris': tris,
        'oval': ring(FC.FACE_LANDMARKS_FACE_OVAL),
        'lips': idx(FC.FACE_LANDMARKS_LIPS),
        'leye': ring(FC.FACE_LANDMARKS_LEFT_EYE), 'reye': ring(FC.FACE_LANDMARKS_RIGHT_EYE),
        'lbrow': idx(FC.FACE_LANDMARKS_LEFT_EYEBROW), 'rbrow': idx(FC.FACE_LANDMARKS_RIGHT_EYEBROW),
        'innerUp': [78, 191, 80, 81, 82, 13, 312, 311, 310, 415, 308], 'innerLow': [78, 95, 88, 178, 87, 14, 317, 402, 318, 324, 308],
        'outerUp': [61, 185, 40, 39, 37, 0, 267, 269, 270, 409, 291], 'outerLow': [61, 146, 91, 181, 84, 17, 314, 405, 321, 375, 291]
    }
    with open(os.path.join(ROOT, 'prototype', 'data', 'rope', 'facemesh.js'), 'w') as fh:
        fh.write('/* MediaPipe Face Mesh topology (468-point tessellation + feature index sets), extracted once by\n'
                 '   scripts/build-interviewer-rigs.py. Shared by every interviewer rig; see js/rope-face.js. */\n')
        fh.write('window.MT_FACE_MESH = ' + json.dumps(data, separators=(',', ':')) + ';\n')
    print('mesh', len(tris), 'triangles')

if __name__ == '__main__':
    mesh()
    for pid in (sys.argv[1:] or PERSONAS): build(pid, PERSONAS[pid])
