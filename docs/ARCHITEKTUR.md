# Anprobe 2 – Architektur

Ziel: Virtuelle Schmuck-Anprobe für einen Premium-Schmuckshop (ARLISE, arlise.de:
handgefertigter Schmuck aus 18k PVD-vergoldetem Edelstahl und echten
Süßwasserperlen; Halsketten, Ohrringe, Armbänder, dazu Ringe). Shopify.
Die erste Version (2D-Bild aufgeklebt) war ungenügend: sah flach aus, saß
ungenau, wackelte, Design wirkte billig. Version 2 rendert echte 3D-Modelle
mit physikalisch basierten Materialien, Verdeckung durch den Körper,
stabiler Verfolgung und einer hochwertigen Oberfläche.

Es gibt **keine 3D-Dateien** vom Schmuck, nur Produktfotos. Deshalb werden
alle Stücke **parametrisch** aus einer JSON-Beschreibung erzeugt (Kettenart,
Stärke, Länge, Perlen, Anhänger, Metall …). Ein Editor erlaubt dem Shop,
jedes Produkt nachzubauen und die JSON-Beschreibung zu kopieren. GLB-Dateien
werden zusätzlich unterstützt (für später).

Sprache: Bezeichner, Kommentare und Oberfläche auf Deutsch (Umlaute in
Oberflächentexten ja, in Bezeichnern nein). Kommentare in ASCII-Umschrift
(ae, oe, ue, ss) wie im restlichen Projekt.

## Verzeichnisse

```
src/
  main.js                 Einstieg: Knöpfe auf der Seite, Produktdaten lesen, Fenster öffnen
  konfig.js               Pfade (MediaPipe, Modelle), überschreibbar per window.AnprobeKonfig
  produkt.js              Produktdaten aus dem DOM (data-anprobe) lesen, Art bestimmen, Specs parsen
  tracking/               Agent "tracking"
    mediapipe.js          Laden der Tasks mit Fortschritt, GPU→CPU-Fallback, Modus VIDEO/IMAGE
    filter.js             One-Euro-Filter (Skalar, Vektor), Quaternion-Glättung
    hand.js               Handergebnis → Anker für Ringe/Armband + Verdecker
    gesicht.js            Gesichtsergebnis → Ohrläppchen-Anker + Kopf-Verdecker
    koerper.js            Gesicht + Pose → Hals-Anker für Ketten + Verdecker (auch Hände vor der Brust)
    unterarm.js           Unterarmrichtung, -breite und -mitte aus dem Kamerabild (Armband)
    finger.js             Fingerbreite und -mitte aus dem Kamerabild (Ring sitzt satt)
    tracker.js            class Tracker (siehe unten)
  schmuck/                Agent "schmuck"
    materialien.js        PBR-Materialien: Metalle, Perlen, Steine
    geometrie.js          Bausteine: Kettenglieder (instanziert entlang Kurven), Perle, Brillant, Drahtbogen …
    ring.js armband.js kette.js ohrring.js   parametrische Erzeuger
    anhaenger.js          Anhänger/Charms: Perle, Sonne, Blume, Mond, Herz, Münze, Tropfen, Stein
    vorlagen.js           fertige Vorlagen (Presets) im Stil des Shops
    index.js              baueSchmuck(spec) → SchmuckModell; ladeGlb(url)
  render/                 Agent "render"
    buehne.js             class Buehne (WebGL, Kamera, Video-Hintergrund, Rendern, Aufnahme)
    verdeckung.js         Verdecker-Meshes (nur Tiefe) aus Primitiven
    umgebung.js           Umgebungslicht: Studio (RoomEnvironment) + Reflexion aus dem Kamerabild
    licht.js              Helligkeit/Farbe des Kamerabilds schätzen → Belichtung anpassen
    physik.js             Pendel für Ohrringe/Anhänger, Durchhängen von Armbändern
    schaerfe.js           Schärfeangleich: Unschärfe des Kamerabilds am Schmuck messen, Schmuck passend weich auflegen
  ui/                     Agent "app"
    fenster.js            Vollbild-Oberfläche (Shadow DOM), Zustände, Bedienelemente
    stil.js               CSS
    symbole.js            Icons (inline SVG)
    anleitung.js          animierte Anleitungen (Hand, Gesicht, Hals)
  app.js                  Ablaufsteuerung: Kamera, Schleife, Tracker ↔ Buehne, Foto, Aufnahme
editor/                   Agent "editor": Konfigurator für den Shop (index.html, editor.js)
demo/                     Agent "editor": Demo-Produktseiten
test/                     Agent "test": Testumgebung (Server, Fake-Kamera, Playwright, Messungen)
dist/                     Build (esbuild): anprobe.js (Knopf) + anprobe-app.js (Anprobe), editor.js
build.mjs                 Build-Skript
shopify/anprobe.liquid    Block für Shopify
```

Build: `node build.mjs` bündelt `src/main.js` → `dist/anprobe.js` (ESM, minifiziert, klein:
Knopf und Produktdaten), `src/app.js` → `dist/anprobe-app.js` (three.js eingebaut) und
`editor/editor.js` → `dist/editor.js`. `anprobe.js` lädt `anprobe-app.js` per `import()`
aus demselben Ordner (gleiche `?v=`-Version) erst beim Überfahren/Fokus bzw. Klick des
Knopfs; beide Dateien gehören zusammen. MediaPipe wird zur Laufzeit per `import()` von
`konfig.mediapipe` geladen (nicht gebündelt).
three.js: `import * as THREE from 'three'`, Zusätze aus `three/addons/...`
(z. B. `three/addons/environments/RoomEnvironment.js`, `three/addons/loaders/GLTFLoader.js`,
`three/addons/utils/BufferGeometryUtils.js`). Version 0.186.1 liegt in node_modules.

## Koordinaten: der „Bühnenraum“

Alles wird in **einem** Raum gerechnet und gerendert:

* Einheit: **Pixel des Kamerabilds** (Breite W, Höhe H des Videoframes bzw. Fotos)
* X nach rechts **wie angezeigt** (bei Frontkamera also gespiegelt), Y nach **oben**, Z zur Betrachterin hin
* Orthografische Kamera, schaut entlang −Z. Perspektive vernachlässigbar (Schmuck ist klein)

Umrechnung normierter MediaPipe-Punkte (x, y, z ∈ Bild, z ≈ gleiche Skala wie x, kleiner = näher):

```
X = (spiegel ? 1 − x : x) · W
Y = (1 − y) · H
Z = −z · W
```

Weltpunkte (Meter, kameraorientiert; Hand: `worldLandmarks`) als **Richtungen** in den Bühnenraum:
`(spiegel ? −x : x, −y, −z) · 1000` → Millimeter. Für Orientierung nutzen, für Lage die Bildpunkte.

Gespiegelte Darstellung erzeugt eine gespiegelte Welt (Händigkeit kippt). Das ist
physikalisch richtig (Spiegelbild). Geometrie bleibt korrekt, nur asymmetrische Stücke
erscheinen gespiegelt – wie in einem echten Spiegel.

Schwerkraft im Bühnenraum: `(0, −1, 0)` (Handy aufrecht). Optional später DeviceOrientation.

## Modellkonventionen (Schmuck in Millimetern)

Jedes Modell ist eine `THREE.Group` in **mm** mit festem lokalen Rahmen:

| Art | Ursprung | +Y | +Z | Sonstiges |
|-----|----------|----|----|-----------|
| ring | Mitte des Rings auf der Fingerachse | entlang Finger zur Fingerspitze | Handrücken (Stein oben) | Schiene umläuft die Y-Achse; `masse.innenRadiusMm` |
| armband | Mitte des Handgelenk-Querschnitts | entlang Unterarm zur Hand | Handrücken | Schlaufe in X-Z-Ebene; `masse.innenRadienMm = {x, z}` (Schlaufe, nicht Handgelenk) |
| kette | Drosselgrube (vordere Halsbasis, Mitte) | den Hals hinauf | nach vorn aus der Brust | X = Y × Z (bei frontaler Person: Betrachter-rechts). Normhals: Zylinder Radius 55 mm, Mitte bei (0, ·, −55). Brust fällt unterhalb des Ursprungs nach vorn ab (ca. 25° zur Senkrechten) |
| ohrringe | Stichpunkt im Ohrläppchen | nach oben (hängende Teile gehen nach −Y) | Blickrichtung des Gesichts | +X = seitlich vom Kopf weg (für das Ohr auf der Betrachter-rechts-Seite). Das andere Ohr bekommt eine an X gespiegelte Kopie. Creolen liegen etwa in der Y-Z-Ebene (von vorn schmal). Stecker zeigen nach +X |

Die Kette wird für ihre Länge auf dem Normkörper berechnet (hinten um den Hals, über
die Schulteransätze, vorn als Bogen auf die Brust; Anhänger am tiefsten Punkt).
Der hintere Teil liegt hinter dem Hals und wird verdeckt.

## Schnittstelle schmuck → render

```js
// src/schmuck/index.js
export function baueSchmuck(spec) → SchmuckModell
export async function ladeGlb(url, spec) → SchmuckModell   // GLB in mm, gleiche Konventionen
export { VORLAGEN } from './vorlagen.js'                    // { id: {name, beschreibung, spec} }
export function pruefeSpec(spec) → { ok, fehler: string[], spec /* mit Standardwerten */ }

/** SchmuckModell */
{
  art: 'ring'|'armband'|'kette'|'ohrringe',
  gruppe: THREE.Group,                 // mm, Konvention oben
  masse: { innenRadiusMm?, innenRadienMm?: {x, z}, laengeMm?, halsRadiusMm?: 55,
           starr?: true /* Armreif: feste Form; biegsame Armbänder schmiegen sich ans Handgelenk */ },
  pendel: [ { knoten: THREE.Object3D, laengeMm, achse?: 'frei'|'x'|'z' } ],  // schwingende Teile, Drehpunkt = Ursprung des Knotens
  dispose(): void
}
```

Spec (JSON, kommt aus Shopify-Metafeld oder Editor):

```js
{
  art: 'kette',
  name: 'Gold',                        // Variantenname (optional)
  metall: 'gold' | 'silber' | 'rosegold' | 'weissgold',   // gold = 18k PVD-vergoldet, warm
  // art-spezifisch, alle Felder mit sinnvollen Standardwerten:
  kette:  { typ: 'anker'|'erbs'|'figaro'|'panzer'|'schlange'|'kugel'|'paperclip'|'seil'|'perlenstrang', staerkeMm: 1.2, laengeCm: 45 },
  perlen: { groesseMm: 6, form: 'rund'|'barock'|'tropfen'|'button'|'reis', farbe: 'weiss'|'creme'|'rose'|'champagner'|'grau',
            anordnung: 'strang'|'stationen'|'einzeln', abstandMm: 30, anzahl: 0 },
  anhaenger: { typ: 'keiner'|'perle'|'sonne'|'blume'|'mond'|'herz'|'muenze'|'tropfen'|'stein'|'stern'|'muschel', groesseMm: 12, stein?: {...} },
  // ohrringe:
  ohrring: { typ: 'stecker'|'creole'|'huggie'|'haenger'|'perlenstecker', durchmesserMm: 14, staerkeMm: 2, laengeMm: 30 },
  // ring:
  ring: { typ: 'band'|'solitaer'|'perle'|'offen'|'siegel'|'kette', schieneMm: 2, profil: 'rund'|'flach'|'halbrund', innenDurchmesserMm: 17 },
  stein: { art: 'diamant'|'zirkonia'|'saphir'|'rubin'|'smaragd'|'perle', farbe: '#...', groesseMm: 4, schliff: 'brillant'|'oval'|'tropfen'|'smaragd' },
  // armband:
  armband: { typ: 'kette'|'perlen'|'reif'|'tennis', laengeCm: 18, ... }
}
```

Materialien (müssen auf dem Handy flüssig laufen; Transmission nur für kleine Steine):

* Gold (18k PVD): `MeshPhysicalMaterial`, metalness 1, Farbe linear ≈ (1.00, 0.77, 0.40), roughness ≈ 0.18, clearcoat leicht. Silber/Edelstahl: (0.96, 0.95, 0.93), roughness 0.15. Roségold: (1.00, 0.70, 0.60)
* Süßwasserperle: leicht unregelmäßig (Form-Rauschen), `MeshPhysicalMaterial` mit hellem Grund, sheen, iridescence (Orient/Überton), clearcoat, geringer roughness; nie perfekt einheitlich (pro Perle leicht variiert)
* Steine: Brillant-Geometrie mit Facetten; ior 2.42 (Diamant), `dispersion`, Funkeln

## Schnittstelle tracking → render/app

```js
// src/tracking/tracker.js
export const BENOETIGT = { ring: ['hand'], armband: ['hand'], ohrringe: ['gesicht'], kette: ['gesicht', 'koerper'] }
export class Tracker {
  constructor(art, { konfig, onFortschritt /* (0..1, text) */ })
  async laden()                                   // lädt nur die nötigen Tasks, Modelle per fetch mit Fortschritt
  verarbeite(quelle, zeitMs /* null = Einzelbild */, { W, H, spiegel, sparen? }) → TrackingErgebnis
    // sparen (optional): knappes Zeitbudget; Nebenerkennungen seltener (Pose der Kette jedes 2. Bild)
  zuruecksetzen()                                 // Filter leeren (z. B. nach Kamerawechsel)
  dispose()
}

/** TrackingErgebnis (geglättet) */
{
  gefunden: boolean,
  hinweis: null | { code: string, text: string },   // z. B. {code:'naeher', text:'Etwas näher heran'}
  anker: {
    ring?:    { daumen: Anker, zeige: Anker, mittel: Anker, ring: Anker, klein: Anker },
    armband?: Anker,
    kette?:   Anker,
    ohrL?:    Anker, ohrR?: Anker      // L/R = Bildseite (Betrachter-links/rechts)
  },
  masse: { fingerRadiusPx?: {daumen, zeige, mittel, ring, klein}, handgelenkRadienPx?: {quer, tiefe}, halsRadiusMm? },
  verdecker: Primitiv[],                 // schreiben nur Tiefe
  schattenflaechen: Primitiv[],          // empfangen weiche Kontaktschatten (optional)
  schwerkraft: THREE.Vector3,
  debug?: { punkte2d: {x,y}[] }          // für Testansichten
}

/** Anker */
{ position: THREE.Vector3, quaternion: THREE.Quaternion, pxProMm: number, sichtbar: number /* 0..1, zum Ein-/Ausblenden */ }

/** Primitiv (Bühnenraum, Pixel) */
{ typ: 'kapsel', a: Vector3, b: Vector3, r: number }
{ typ: 'ellipsenzylinder', a: Vector3, b: Vector3, quer: Vector3 /* Einheit */, rQuer: number, rTiefe: number }
{ typ: 'ellipsoid', mitte: Vector3, quaternion: Quaternion, radien: Vector3 }
{ typ: 'netz', positionen: Float32Array, index: Uint16Array | Uint32Array }   // z. B. Gesichtsnetz
```

Ohrringe: Der Tracker lädt nach `laden()` im Hintergrund zusätzlich die Handerkennung
(zwei Hände, jedes 3. Bild) und liefert für eine Hand am Kopf Verdecker vor den Ohrläppchen
(abschaltbar mit `konfig.handVerdeckung = false`). Kette: Hände vor der Brust werden aus
den Pose-Punkten 13–22 als Kapseln verdeckt. Ringe: `Anker.sichtbar` sinkt, wenn der Ring
nicht sauber um einen sichtbaren Finger liegt (Finger übereinander, Fingerachse zur Kamera);
die Bühne blendet ihn dann aus, statt Bruchstücke zu zeigen.

Anker-Bedeutung: `Bühnenpunkt = position + quaternion · (pxProMm · modellpunktMm)`.
Für Ringe passt die Buehne die Skala so an, dass `innenRadiusMm` genau auf den
Fingerradius kommt (`fingerRadiusPx`, im Bild gemessen, auf 0,78–1,12 × Norm begrenzt),
damit der Ring immer satt sitzt. Für
Armbänder sorgt sie dafür, dass die Schlaufe das Handgelenk nicht schneidet (biegsame
Armbänder liegen mit etwas Spiel an, X/Z je Achse skaliert, Verhältnis begrenzt). Für
Ketten skaliert sie X und Z nach `halsRadiusMm / 55` (begrenzt 0,8…1,25).

Stabilität (Kernanforderung „wackelt nicht“):
* One-Euro-Filter auf die Rohpunkte, danach nochmals auf Anker (Position, Rotation per slerp, Skala stärker geglättet)
* Skala darf nicht pumpen; Rotation darf nicht flattern; bei schneller Bewegung wenig Verzögerung
* Bei kurzem Verlust (< 300 ms) letzte Lage halten, dann `sichtbar` weich auf 0; beim Wiederfinden weich auf 1
* Ausreißer (Sprung > 25 % Bildbreite in einem Frame) nicht übernehmen, sondern Filter neu ansetzen

Maßstab:
* Hand: Verhältnis der 2D-Pixellängen zu den XY-Längen der Weltpunkte (mehrere Handknochen)
* Gesicht: Irisdurchmesser ≈ 11,7 mm (Landmarken 468–477), stark geglättet; Plausibilität mit Gesichtsbreite
* Körper: Iris wenn vorhanden, sonst Schulterbreite ≈ 360 mm (3D, mit z)

## Schnittstelle render

```js
// src/render/buehne.js
export class Buehne {
  constructor(canvas, { pixelRatio, qualitaet: 'hoch'|'mittel', schaerfeAngleich?: true })
  setzeQuelle(videoOderCanvas, { W, H, spiegel })      // Hintergrund (VideoTexture bzw. CanvasTexture)
  setzeAnsicht(breiteCss, hoeheCss, modus: 'cover'|'contain')   // Ausschnitt: Kamera zeigt sichtbaren Bildteil
  setzeSchmuck(modell /* SchmuckModell */, { finger?: 'ring'|... })  // ersetzt vorheriges, Übergang weich
  setzeFinger(key)
  setzeAnpassung({ skala, versatzMm: Vector3 })        // Feinjustierung durch Nutzerin
  aktualisiere(ergebnis /* TrackingErgebnis */, dtSek)  // Anker, Verdecker, Physik, Licht
  rendere()
  bildschirmZuBuehne(clientX, clientY) → {x, y}        // für Ziehen
  async aufnahme({ breite }) → Blob                     // JPEG des sichtbaren Ausschnitts, inkl. Schmuck
  async vorbereiten()                                   // Shader vorab übersetzen (compileAsync), im Ladezustand
  gpuFertig() → boolean                                 // GPU hat das zuletzt gezeichnete Bild fertig (WebGL2-Zaun)
  setzeFokus({ x, y, zoom } | null)                     // Ausschnitt vergrößern (Foto: auf den Schmuck einpassen)
  onKontextVerlust: () => void                          // Rückruf bei WebGL-Kontextverlust (App baut neu auf)
  dispose()
}
```

Qualität: ACES- oder AgX-Tonemapping, sRGB-Ausgabe, Antialiasing, devicePixelRatio ≤ 2,
Umgebungsreflexion: Studio-Umgebung (RoomEnvironment, PMREM) gemischt mit einer
aus dem Kamerabild abgeleiteten, weichgezeichneten Umgebung (alle ~0,5 s aktualisiert),
damit Gold die Farben des Raums spiegelt. Weiche Kontaktschatten auf den Schattenflächen
(ShadowMaterial oder vorgefilterte Schattentextur), Belichtung an Bildhelligkeit angepasst.
Ein-/Ausblenden über `sichtbar`. Schärfeangleich (Standard): Der Schmuck wird in ein eigenes
Ziel gezeichnet (Halbfloat, 4-fach Mehrfachabtastung) und nur im Rechteck um den Schmuck so
weich aufgelegt, wie das Kamerabild dort ist (Gradientenenergie vor/nach bekannter
Nachunschärfe, 2-mal je Sekunde gemessen, geglättet); auf scharfem Bild bleibt er scharf.
Ziel: ≥ 30 fps auf einem Mittelklasse-Handy.

## Schnittstelle app/ui

```js
// src/app.js
export class AnprobeApp {
  constructor(wurzelElement /* im Shadow DOM */, { konfig })
  async oeffne(produkt /* siehe produkt.js */)   // Intro → Laden → Live
  schliesse()
}
// src/produkt.js
leseProdukt(element) → { titel, preis?, bildUrl?, art, varianten: [{ name, spec | glbUrl }], finger?,
                         shop: null | { varianten: [{ id, titel, verfuegbar }], hinzufuegen, warenkorb },
                         seitenVariante: string | null }
shopVariante(shop, name, seitenTitel?) → { id, titel } | null   // Kauf-Aktion der Ergebnisseite
// main.js ergänzt startVariante (Index der auf der Produktseite gewählten Variante, z. B. „Silber“)
```

Produktdaten im DOM (Shopify-Block erzeugt das):

```html
<div data-anprobe data-titel="Perlentropfen" data-preis="49,90 €" data-bild="…/foto.jpg"
     data-art="ohrringe" data-typ="Ohrringe" data-tags="…">
  <script type="application/json" data-anprobe-modell>[{ "name": "Gold", "art": "ohrringe", … }]</script>
  <script type="application/json" data-anprobe-shop>{ "hinzufuegen": "/cart/add.js", "warenkorb": "/cart",
    "varianten": [{ "id": 4711, "titel": "Gold", "verfuegbar": true }] }</script>   <!-- optional: Kauf-Aktion -->
</div>
```

Gibt es kein Modell, wird eine passende Vorlage nach Art/Titel gewählt (Notlösung, im Debug-Log vermerkt).

Live-Schleife: Tracking und Rendern laufen im selben Kamerabild-Rückruf (Hintergrund und
Schmuck aus demselben Bild). Dauert ein Schritt länger als die Hälfte des Kamera-Intervalls,
wartet die Schleife (ohne zu blockieren) auf den GPU-Zaun des Bilds (`Buehne.gpuFertig()`),
dann folgt eine Pause: 60 % der Schrittdauer, bei sehr langen Schritten (≥ 600 ms) bis 150 %.
Kamerabilder in der Pause werden ganz ausgelassen. Nach einem Tippen/einer Taste ruht die
Erkennung auf langsamen Geräten 450 ms, damit Klick, Übergang und Rückmeldung sofort kommen.

Debug/Test-Haken: Ist `konfig.debug` wahr (oder `?anprobe-debug` in der URL), setzt die App
`window.__anprobe = { zustand, ergebnis /* letztes TrackingErgebnis */, fps, renderMs, trackingMs, fehler: [],
  hinweis /* angezeigter Hinweis-Code */, variante, sparen, … }`
und aktualisiert es jeden Frame.

## Oberfläche (Premium)

Stil des Shops: zeitlos, feminin, ruhig, viel Weißraum. Farben: Elfenbein `#FBF8F3`,
warmes Schwarz `#1E1B18`, Champagner-Gold `#B8955A` als Akzent, feine Linien `#E8E1D6`.
Schrift: die des Shops erben (`font-family: inherit`), Überschriften über CSS-Variable
`--anprobe-schrift-titel` (Standard: inherit). **Keine externen Schriften** (Google Fonts
ist in Deutschland datenschutzrechtlich heikel). Großbuchstaben-Labels mit Laufweite,
dünne Linien, sanfte Übergänge (Ein-/Ausblenden, 200–300 ms), keine harten Schatten.

Handy: Vollbild-Kamera, Bedienelemente schweben auf mattiertem Glas.
Desktop: zentriertes Fenster. Intro-Bildschirm mit animierter Anleitung und
Datenschutzhinweis, dann „Kamera starten“. Ladefortschritt mit Prozent.
Hinweise (z. B. „Streich die Haare hinters Ohr“) als dezente Pille mit kleiner Animation.
Varianten als runde Metall-Swatches, Fingerwahl für Ringe als kleine Handgrafik.
Auslöser, Kamera wechseln, Foto wählen, Teilen/Speichern mit Shop-Name im Bild.
Barrierefrei: Fokus, aria, Escape, prefers-reduced-motion.

## Konfiguration

```js
window.AnprobeKonfig = {
  mediapipe: 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@1.1.0',   // Ordner mit vision_bundle.mjs und wasm/
  modelle: { hand: '…/hand_landmarker.task', gesicht: '…/face_landmarker.task', koerper: '…/pose_landmarker_lite.task' },
  shopName: 'ARLISE', debug: false,
  handVerdeckung: true,  // Ohrringe: Handerkennung nachladen (Hand vor dem Ohr)
  warenkorb: true        // Ergebnisseite: „In den Warenkorb“ (Shopify-Ajax /cart/add.js, Ereignis anprobe:warenkorb)
}
```

## Testumgebung

* `test/cache/modelle/` enthält die Modelle, `test/cache/bilder/` Testfotos (nicht im Git)
* jsDelivr ist in der Entwicklungsumgebung gesperrt → Tests liefern MediaPipe aus
  `node_modules/@mediapipe/tasks-vision` aus und setzen `window.AnprobeKonfig` per Init-Skript
* Fake-Kamera: Chromium mit `--use-fake-device-for-media-stream --use-file-for-fake-video-capture=<y4m>`
* Playwright global: `NODE_PATH=$(npm root -g)`, Chromium unter /opt/pw-browsers
