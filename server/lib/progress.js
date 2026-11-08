/**
 * Progress merge for the `browser` namespace (cross-device progress).
 *
 * The browser mirrors its tracked storage keys as a "keyed document":
 *   { keys: { k: value }, times: { k: ms }, deleted: { k: ms } }
 * where `times` holds the moment each key was last written on the device
 * that wrote it and `deleted` holds tombstones for keys the member removed.
 *
 * Two devices never overwrite each other wholesale: the server merges per
 * key, the newest write wins, and a tombstone wins over writes older than
 * it. Tombstones expire after 90 days so the document does not grow forever.
 */
export const TOMBSTONE_DAYS = 90;

export function isKeyed(doc) {
  return !!(doc && typeof doc === 'object' && !Array.isArray(doc) && doc.keys && typeof doc.keys === 'object' && !Array.isArray(doc.keys));
}

function num(v) { return Number.isFinite(v) ? v : 0; }

export function mergeKeyed(stored, incoming, now = Date.now()) {
  const sK = (stored && stored.keys) || {}, iK = (incoming && incoming.keys) || {};
  const sT = (stored && stored.times) || {}, iT = (incoming && incoming.times) || {};
  const sD = (stored && stored.deleted) || {}, iD = (incoming && incoming.deleted) || {};
  const all = new Set([...Object.keys(sK), ...Object.keys(iK), ...Object.keys(sD), ...Object.keys(iD)]);
  const keys = {}, times = {}, deleted = {};
  for (const k of all) {
    /* candidates in order: stored first, incoming last, so the latest writer wins a tie */
    let best = null;
    if (Object.prototype.hasOwnProperty.call(sK, k)) best = { t: num(sT[k]), v: sK[k] };
    if (Object.prototype.hasOwnProperty.call(iK, k)) { const c = { t: num(iT[k]), v: iK[k] }; if (!best || c.t >= best.t) best = c; }
    const dT = Math.max(num(sD[k]), num(iD[k]));
    if (best && best.t >= dT) { keys[k] = best.v; times[k] = best.t; }
    else if (dT) deleted[k] = dT;
  }
  const cutoff = now - TOMBSTONE_DAYS * 86400000;
  for (const k of Object.keys(deleted)) if (deleted[k] < cutoff) delete deleted[k];
  return { keys, times, deleted };
}
