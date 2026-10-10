// Ablauftest des Trackers ohne Browser: echte Handpunkte (ausgabe/roh.json)
// werden ueber eine Attrappe der Erkennung eingespielt.
// Prueft Einzelbildmodus, Halten bei kurzem Verlust, weiches Aus-/Einblenden,
// Ausreisser (Sprung > 25 % Bildbreite), Hinweise und gleiche Zeitstempel.
//   node test/tracking/zustand.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Tracker } from '../../src/tracking/tracker.js';

const hier = path.dirname(fileURLToPath(import.meta.url));
const roh = JSON.parse(fs.readFileSync(path.join(hier, 'ausgabe/roh.json')));
const vorlage = roh['paper_165.jpg'];
const W = vorlage.W, H = vorlage.H;

let fehler = 0;
function pruefe(bedingung, text) {
  console.log(`${bedingung ? 'ok    ' : 'FEHLER'} ${text}`);
  if (!bedingung) fehler++;
}

/** Handergebnis, verschoben um dx (normiert) und mit kleinem Rauschen. */
function hand(dx = 0, rauschen = 0) {
  const h = JSON.parse(JSON.stringify(vorlage.hand));
  for (const p of h.landmarks[0]) {
    p.x += dx + (Math.random() - 0.5) * rauschen;
    p.y += (Math.random() - 0.5) * rauschen;
  }
  return h;
}

function neuerTracker(art) {
  const t = new Tracker(art, { konfig: {} });
  let naechstes = null;
  t.erkenner = { hand: { erkenne: () => naechstes } };
  t.setze = (e) => { naechstes = e; };
  return t;
}

// 1. Einzelbild: keine zeitliche Glaettung, sofort sichtbar
{
  const t = neuerTracker('ring');
  t.setze(hand());
  const e1 = t.verarbeite(null, null, { W, H, spiegel: false });
  t.setze(hand(0.1));
  const e2 = t.verarbeite(null, null, { W, H, spiegel: false });
  pruefe(e1.gefunden && e1.anker.ring && e1.anker.ring.mittel.sichtbar === 1, 'Einzelbild: gefunden, sichtbar = 1');
  const d = e2.anker.ring.mittel.position.x - e1.anker.ring.mittel.position.x;
  pruefe(Math.abs(d - 0.1 * W) < 0.5, `Einzelbild: zweites Bild ohne Nachziehen (Versatz ${d.toFixed(2)} px, erwartet ${(0.1 * W).toFixed(2)})`);
  t.setze(null);
  const e3 = t.verarbeite(null, null, { W, H, spiegel: false });
  pruefe(!e3.gefunden && !e3.anker.ring && e3.hinweis && e3.hinweis.code === 'hand-zeigen', 'Einzelbild ohne Hand: nicht gefunden, Hinweis hand-zeigen');
}

// 2. Video: Einblenden, Halten, Ausblenden, Wiederfinden
{
  const t = neuerTracker('ring');
  const dt = 1000 / 30;
  let zeit = 1000;
  const lauf = (e, n) => { let r; for (let i = 0; i < n; i++) { t.setze(e); r = t.verarbeite(null, zeit, { W, H, spiegel: false }); zeit += dt; } return r; };
  let r = lauf(hand(), 1);
  pruefe(r.gefunden && r.anker.ring.mittel.sichtbar > 0 && r.anker.ring.mittel.sichtbar < 0.3, `erster Videoframe blendet weich ein (sichtbar ${r.anker.ring.mittel.sichtbar.toFixed(2)})`);
  r = lauf(hand(), 10);
  pruefe(r.anker.ring.mittel.sichtbar === 1, 'nach 11 Frames voll sichtbar');
  const vorher = r.anker.ring.mittel.position.clone();
  r = lauf(null, 8); // 267 ms Verlust
  pruefe(r.gefunden && r.anker.ring.mittel.sichtbar === 1 && r.anker.ring.mittel.position.distanceTo(vorher) < 1e-9, 'kurzer Verlust (< 300 ms): Lage gehalten, voll sichtbar');
  r = lauf(null, 3);
  pruefe(!r.gefunden && r.anker.ring && r.anker.ring.mittel.sichtbar < 1 && r.anker.ring.mittel.sichtbar > 0, `nach 300 ms: blendet aus (sichtbar ${r.anker.ring && r.anker.ring.mittel.sichtbar.toFixed(2)})`);
  r = lauf(null, 12);
  pruefe(!r.gefunden && !r.anker.ring, 'danach ganz ausgeblendet, keine Anker');
  pruefe(!r.hinweis, 'Hinweis noch nicht sofort (Entprellung 0,5 s nach dem Halten)');
  r = lauf(null, 3);
  pruefe(r.hinweis && r.hinweis.code === 'hand-zeigen', 'Hinweis hand-zeigen 0,8 s nach Verlust');
  r = lauf(hand(0.05), 1);
  pruefe(r.gefunden && r.anker.ring.mittel.sichtbar < 0.3, 'Wiederfinden: weich einblenden');
  const neu = r.anker.ring.mittel.position.x;
  pruefe(Math.abs(neu - (vorher.x + 0.05 * W)) < 1, 'Wiederfinden: Filter neu angesetzt (kein Gleiten vom alten Ort)');
  r = lauf(hand(0.05), 10);

  // 3. Ausreisser: einzelner Sprung > 25 % Bildbreite wird verworfen
  const ruhig = r.anker.ring.mittel.position.clone();
  r = lauf(hand(0.4), 1);
  pruefe(r.anker.ring.mittel.position.distanceTo(ruhig) < 1, 'einzelner Sprung (40 % Bildbreite) verworfen');
  r = lauf(hand(0.05), 1);
  pruefe(r.anker.ring.mittel.position.distanceTo(ruhig) < 1, 'danach wieder am alten Ort');
  // bestaetigter Sprung: zwei Frames am neuen Ort -> Filter neu ansetzen
  lauf(hand(0.4), 1);
  r = lauf(hand(0.4), 1);
  pruefe(Math.abs(r.anker.ring.mittel.position.x - (ruhig.x + 0.35 * W)) < 1, 'bestaetigter Sprung: sofort am neuen Ort');

  // 4. gleicher Zeitstempel: keine Spruenge in der Sichtbarkeit
  t.setze(null);
  zeit += 400;
  t.verarbeite(null, zeit, { W, H, spiegel: false });
  const s1 = t.verarbeite(null, zeit + 1, { W, H, spiegel: false });
  const s2 = t.verarbeite(null, zeit + 1, { W, H, spiegel: false });
  const a1 = s1.anker.ring ? s1.anker.ring.mittel.sichtbar : 0, a2 = s2.anker.ring ? s2.anker.ring.mittel.sichtbar : 0;
  pruefe(Math.abs(a1 - a2) < 1e-9, 'gleicher Zeitstempel aendert die Sichtbarkeit nicht');
}

// 5. Hinweise: Hand zu klein -> naeher (nach Entprellung)
{
  const t = neuerTracker('ring');
  const klein = JSON.parse(JSON.stringify(vorlage.hand));
  for (const p of klein.landmarks[0]) { p.x = 0.5 + (p.x - 0.5) * 0.25; p.y = 0.5 + (p.y - 0.5) * 0.25; }
  let r;
  for (let i = 0; i < 30; i++) { t.setze(klein); r = t.verarbeite(null, 1000 + i * 33, { W, H, spiegel: false }); }
  pruefe(r.hinweis && r.hinweis.code === 'naeher' && /näher/.test(r.hinweis.text), `kleine Hand: Hinweis naeher ("${r.hinweis && r.hinweis.text}")`);
}

// 6. Armband und Spiegelung: Anker gespiegelt, Masse gleich
{
  const t = neuerTracker('armband');
  t.setze(hand());
  const a = t.verarbeite(null, null, { W, H, spiegel: false });
  t.setze(hand());
  const b = t.verarbeite(null, null, { W, H, spiegel: true });
  pruefe(Math.abs(a.anker.armband.position.x - (W - b.anker.armband.position.x)) < 1e-6, 'Spiegelung: Armband-Anker an der Bildmitte gespiegelt');
  pruefe(Math.abs(a.masse.handgelenkRadienPx.quer - b.masse.handgelenkRadienPx.quer) < 1e-9, 'Spiegelung: Handgelenk-Radien gleich');
  // gespiegelter Rahmen: Y' = S·Y, Z' = S·Z, X' = -S·X (S spiegelt x)
  const achse = (q, x, y, z) => {
    const v = { x, y, z };
    // q · v (Quaternion-Drehung ohne three.js-Abhaengigkeit im Test)
    const ix = q.w * v.x + q.y * v.z - q.z * v.y, iy = q.w * v.y + q.z * v.x - q.x * v.z;
    const iz = q.w * v.z + q.x * v.y - q.y * v.x, iw = -q.x * v.x - q.y * v.y - q.z * v.z;
    return [ix * q.w + iw * -q.x + iy * -q.z - iz * -q.y, iy * q.w + iw * -q.y + iz * -q.x - ix * -q.z, iz * q.w + iw * -q.z + ix * -q.y - iy * -q.x];
  };
  const qa = a.anker.armband.quaternion, qb = b.anker.armband.quaternion;
  const [ya, yb] = [achse(qa, 0, 1, 0), achse(qb, 0, 1, 0)];
  const [za, zb] = [achse(qa, 0, 0, 1), achse(qb, 0, 0, 1)];
  const [xa, xb] = [achse(qa, 1, 0, 0), achse(qb, 1, 0, 0)];
  const gleich = (u, v) => Math.hypot(u[0] - v[0], u[1] - v[1], u[2] - v[2]) < 1e-6;
  pruefe(gleich(yb, [-ya[0], ya[1], ya[2]]) && gleich(zb, [-za[0], za[1], za[2]]) && gleich(xb, [xa[0], -xa[1], -xa[2]]),
    'Spiegelung: Rahmen gespiegelt (Y, Z gespiegelt, X = -S·X), Z bleibt Handruecken');
}

console.log(fehler ? `\n${fehler} Fehler` : '\nalle Pruefungen bestanden');
process.exit(fehler ? 1 : 0);
