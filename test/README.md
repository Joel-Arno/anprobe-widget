# Testumgebung (End-to-End)

Prüft die gebaute App (`dist/anprobe.js`) wie eine Kundin: Produktseite öffnen,
„Virtuell anprobieren“ klicken, Intro, „Kamera starten“, Laden, Live-Anprobe,
Variante wechseln, Foto aufnehmen und speichern, schließen. Die Kamera ist ein
Video aus einem Testfoto (Fake-Kamera von Chromium), Erkennung und 3D-Darstellung
laufen echt (MediaPipe und three.js im Browser).

## Voraussetzungen

* Node 22, `npm install` im Projekt (three, esbuild, @mediapipe/tasks-vision)
* Playwright mit Chromium (global installiert genügt; `laufen.mjs` findet es über
  `NODE_PATH` oder `npm root -g`)
* ffmpeg (für die Fake-Kamera-Videos)
* Modelle in `test/cache/modelle/` (`hand_landmarker.task`, `face_landmarker.task`,
  `pose_landmarker_lite.task`) und Testfotos in `test/cache/bilder/`.
  Beides ist nicht im Git (Lizenz/Größe). Die Modelle gibt es unter
  `https://storage.googleapis.com/mediapipe-models/…`, die Fotos stammen aus den
  MediaPipe-Beispielen.

## Bedienung

```
npm test                                  # = node test/laufen.mjs: baut, dann alle Szenarien
node test/laufen.mjs --nur ring           # nur eine Art (ring, armband, kette, ohrringe)
node test/laufen.mjs --nur ohrringe-business-person,foto   # Namen, Teilnamen, Ablauf, Gerät, RegExp
node test/laufen.mjs --liste              # alle Szenarien anzeigen
node test/laufen.mjs --kein-build --port 8110 --parallel 3
```

Weitere Schalter:

| Schalter | Standard | Bedeutung |
|---|---|---|
| `--port` | 8106 | Port des Testservers |
| `--kein-build` | – | `node build.mjs` überspringen |
| `--parallel` | 2 | gleichzeitige Browser (Software-WebGL braucht viel CPU) |
| `--ohne-intern` | – | Szenarien mit internen Bildern (portrait.jpg) auslassen |
| `--delegate` | `CPU` | MediaPipe-Rechenweg (`auto` = GPU wie in der App) |
| `--qualitaet` | `hoch` | Darstellungsqualität fest; `auto` = adaptive Qualität der App |
| `--zeitschritt` | 33 | Tracker-Uhr während der Zittermessung (ms je Bild, 0 = echte Zeit) |

Ergebnis:

* `test/ergebnisse/bericht.md` – Tabelle je Szenario: gefunden, Zeit bis live,
  Zittern, Bildrate, Fehler
* `test/ergebnisse/bericht.json` – alles maschinenlesbar
* `test/ergebnisse/<szenario>/` – Screenshots `01-intro`, `02-laden`, `03-live`,
  `04-nah` (vergrößerter Ausschnitt um den Schmuck), `05-live-ende`,
  `06-variante-nah`, `07-ergebnis`, die gespeicherte Aufnahme `aufnahme.jpg`,
  `messung.json` (alle aufgezeichneten Anker) und `bericht.json`

Der Exit-Code ist 0, wenn alle Szenarien ok sind (Schmuck gefunden, keine
Seitenfehler, keine Konsolenfehler, Aufnahme gespeichert, Kamera nach dem
Schließen aus).

## Bausteine

| Datei | Zweck |
|---|---|
| `server.mjs` | statischer Server ohne Pakete: Repo als Wurzel, `/mediapipe/` → `node_modules/@mediapipe/tasks-vision/`, `/modelle/` → `test/cache/modelle/`, MIME-Typen, kein Caching, Range-Anfragen. `node test/server.mjs 8106` oder `startServer(port)` |
| `kamera.mjs` | erzeugt y4m-Videos in `test/cache/kamera/` (nur wenn nötig): `statisch`, `rauschen` (Standbild mit Sensorrauschen) und `bewegt` (Schwenk, Zoom, leichte Drehung, 4 s). Format 1280×720 oder 720×1280, eingepasst mit weichgezeichnetem Rand oder füllend, optional Ausschnitt. `node test/kamera.mjs bild.jpg bewegt quer` |
| `szenarien.mjs` | alle Szenarien (Art × Testbild, Handy/Desktop, Foto, ohne Kamera, Kamera verweigert, Bewegung, Vorlage ohne Modell) |
| `seite.html` | Testseite mit je einem Produkt pro Art (vollständige Specs im Markup wie aus dem Shopify-Block) und einem Produkt ohne Modell; Produktbilder in `bilder/` (unabhängig von `demo/`) |
| `laufen.mjs` | Ablauf, Messung, Screenshots, Bericht |
| `integration/lupe.cjs` | schnelle Einzelbild-Prüfung (echter Tracker, echte Bühne, optional Verdecker eingeblendet) über `test/render/pruefung.html`: `NODE_PATH=$(npm root -g) node test/integration/lupe.cjs '{"bild":"paper_142.jpg","art":"armband","vorlage":"lunara-armband","zeigeVerdecker":true}' name`, Bilder in `integration/ausgabe/` |
| `integration/abbrueche*.cjs` | Nachweis, dass die `ERR_ABORTED`-Meldungen der Downloads ein Chromium-Artefakt sind (siehe unten) |
| `liquid.mjs` | prüft `shopify/anprobe.liquid` mit liquidjs und Testdaten (`npm i liquidjs --prefix test/cache/liquid --no-save`, dann `node test/liquid.mjs`) |

Die Seite bekommt per Init-Skript `window.AnprobeKonfig = { mediapipe: '/mediapipe',
modelle: {…'/modelle/…'}, debug: true, shopName: 'ARLISE', delegate, qualitaet }`.
Mit `debug: true` stellt die App `window.__anprobe` bereit (Zustand, letztes
Tracking-Ergebnis, fps, renderMs, trackingMs, Fehler); daraus liest der Test.

## Messgrößen

* **Zittern**: Nach dem Finden läuft die Testuhr (siehe unten) an, dann wird über
  8 Tracking-Ergebnisse eingeschwungen (Ergebnisse statt Wanduhr, weil
  Software-WebGL nur wenige je Sekunde schafft) und über mindestens 16 Ergebnisse
  gemessen (höchstens 60 s). Pos σ = Standardabweichung der Ankerposition
  (Kamerapixel, x und y zusammen), Sprung = mittlere Änderung von Ergebnis zu
  Ergebnis (trennt Zittern von langsamer Drift), Skala σ = Standardabweichung von
  pxProMm in %, Rot = RMS-Abweichung der Rotation vom Mittel in Grad.
* **Gefunden**: Anker sichtbar (Ring: `sichtbar > 0.9`). Bei `ring-hand-woman-man`
  (Hand seitlich, Finger übereinander) blendet die App den Ring bewusst aus und
  zeigt einen Hinweis; das gilt dort als gefunden (`erwartet.ausblendenErlaubt`).
* **Testuhr**: Software-WebGL (SwiftShader) schafft nur etwa 0,5–2 Bilder pro
  Sekunde. Damit die Glättungsfilter wie bei 30 fps arbeiten, läuft die Uhr des
  Trackers ab dem Finden künstlich in 33-ms-Schritten (nur bei stehendem
  Video). Bei `bewegt` läuft sie echt.
* **Zeitbudget**: Die App gönnt dem Hauptthread nach langen Schritten eine Pause
  (Bedienung bleibt flüssig). Im Headless-Lauf dauert ein Schritt Sekunden; Klicks
  und Abfragen des Tests kommen in diesen Pausen zum Zug.
* **fps, renderMs, trackingMs**: aus der App. In Headless-Chromium rechnet alles
  auf der CPU; die Werte sind nur untereinander vergleichbar, nicht mit echten
  Handys.

## Bekannte Eigenheiten

* Chromium liefert die Fake-Kamera im angeforderten Format (die App fordert am
  Desktop 1280×720, am Handy hochkant 720×1280 an) und schneidet sonst zu.
  `laufen.mjs` erzeugt das Video deshalb passend: Desktop quer, Handy hoch.
* Vollständig per `body.getReader()` gelesene Downloads (Modelle, wasm) meldet
  Chromium je nach Zeitablauf als `net::ERR_ABORTED`, obwohl alle Bytes ankommen
  (Gegenprobe: `test/integration/abbrueche2.cjs`). Das ist ein Artefakt und wird als
  harmlos gezählt (Liste in `bericht.json` unter `abgebrochen`). Echte Abbrüche
  erkennt die App selbst (Längenprüfung in `ladeDatei`) und meldet sie als Ladefehler.
* `portrait.jpg` (bekannte Person) dient nur internen Prüfungen. Die Ergebnisse
  liegen wie alle anderen in `test/ergebnisse/` (nicht im Git) und dürfen nicht
  weitergegeben werden. `--ohne-intern` lässt diese Szenarien aus.
* Ältere Prüfordner einzelner Bereiche (`test/tracking`, `test/schmuck`,
  `test/render`, `test/app`) enthalten Detailprüfungen aus der Entwicklung.
