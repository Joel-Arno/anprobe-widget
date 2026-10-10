# ARLISE Anprobe 2

Schmuck virtuell anprobieren, direkt auf der Produktseite. Ein Knopf
„Virtuell anprobieren“ öffnet die Kamera, und das Schmuckstück erscheint als
echtes 3D-Modell an Hand, Hals oder Ohren: mit Gold- und Perlenglanz, der das
Licht des Raums aufnimmt, mit weichen Schatten auf der Haut und verdeckt von
Finger, Hals oder Ohrläppchen, wo es in Wirklichkeit dahinter verschwindet.
Die Erkennung läuft vollständig im Browser. Kein Kamerabild verlässt das Gerät.

Gebaut für Shopify, läuft aber auf jeder Seite, in die man ein Stück HTML
einfügen kann.

## Was es kann

| Schmuck  | erkennt          | Kamera am Handy | Besonderheiten |
|----------|------------------|-----------------|----------------|
| Ring     | Hand             | hinten          | Finger wählbar (Daumen bis kleiner Finger); der Ring passt sich der Fingerbreite an, die Rückseite verschwindet hinter dem Finger |
| Armband  | Hand (und Unterarm im Bild) | hinten | liegt locker um das Handgelenk, quer zum Unterarm, und hängt der Schwerkraft nach; die Rückseite verschwindet hinter dem Handgelenk |
| Kette    | Gesicht und Oberkörper | vorn      | liegt am Halsansatz auf der Brust, der hintere Teil verschwindet hinter dem Hals; Anhänger pendeln |
| Ohrringe | Gesicht          | vorn            | an beiden Ohrläppchen (das zweite Ohr spiegelbildlich), Hänger schwingen bei Kopfbewegung |

* Echte 3D-Modelle mit physikalisch basierten Materialien: 18k-PVD-Gold, Silber,
  Roségold, Weißgold, Süßwasserperlen mit Lüster und Orient, facettierte Steine
* ruhige, stabile Verfolgung (geglättet, ohne Zittern, kurze Aussetzer werden überbrückt)
* Schärfeangleich: Ist das Kamerabild weich (Fokus, schwaches Licht), wird der Schmuck
  genauso weich ins Bild gesetzt, statt gestochen scharf „aufgeklebt“ zu wirken
* Ringe und Armbänder passen sich der im Bild gemessenen Finger- bzw. Armbreite an
  (der Ring sitzt satt, das Armband schmiegt sich ans Handgelenk)
* Verdeckung durch den Körper: Finger, Handgelenk, Hals, Kopf – und Hände: eine Hand
  vor der Brust verdeckt die Kette, eine Hand am Ohr den Ohrring
* lieber ausblenden als falsch zeigen: Liegt die Hand so, dass der Ring nicht sauber
  sitzen kann (Finger übereinander), blendet er weich aus und ein Hinweis hilft weiter;
  zeigt die Handfläche zur Kamera, bittet ein Hinweis um den Handrücken (Stein sichtbar)
* bleibt auch auf langsamen Handys bedienbar: Die Erkennung nimmt sich nie den ganzen
  Prozessor, Tippen und Knöpfe haben Vorrang
* Varianten (Gold, Silber …) als runde Metallknöpfe direkt im Fenster
* Feinjustierung: Schmuck mit dem Finger oder der Maus verschieben, Größe per
  Zwei-Finger-Geste oder Mausrad, Doppelklick setzt zurück
* Foto aufnehmen, mit „ARLISE“ und Produktname im Bild teilen oder speichern;
  auf der Ergebnisseite legt „In den Warenkorb“ die angeprobte Variante direkt in den
  Warenkorb (Shopify-Ajax, danach führt der Knopf zum Warenkorb)
* statt der Kamera ein eigenes Foto wählen (auch, wenn die Kamera nicht erlaubt ist);
  bei Ganzkörperfotos wird automatisch auf den Schmuck vergrößert
* die auf der Produktseite gewählte Variante ist in der Anprobe vorausgewählt
* Kamera wechseln (vorn/hinten), Hinweise wie „Etwas näher heran“ oder
  „Etwas mehr Abstand, damit Hals und Schultern zu sehen sind“
* Bedienbar mit Tastatur und Bildschirmleser, beachtet „Bewegung reduzieren“
* Handy: Vollbild mit Bedienelementen auf mattiertem Glas; Desktop: zentriertes Fenster

## Ausprobieren

Die Kamera funktioniert nur über `https://` oder `localhost`. Im Projektordner:

```
npm install
npm run build
node test/server.mjs 8106
```

Dann `http://localhost:8106/test/seite.html` öffnen (Testseite mit je einem
Ring, Armband, Kette und Ohrringpaar). Die Testseite holt die Erkennung aus dem
eigenen Projekt (`/mediapipe`, `/modelle`); die Modelle müssen dafür in
`test/cache/modelle/` liegen (siehe `test/README.md`).
`demo/` enthält die Beispiel-Produktseiten für Kundinnen und Kunden.

## Einbau in Shopify

Dauert etwa zehn Minuten und braucht keine App.

**1. Skripte hochladen**

*Onlineshop → Themes → … → Code bearbeiten*. Links unter **Assets** auf
„Neues Asset hinzufügen“ klicken und die beiden Dateien `dist/anprobe.js` und
`dist/anprobe-app.js` hochladen (die Namen müssen so bleiben). Bei einer neuen
Version beide Dateien ersetzen.

`anprobe.js` ist klein (ca. 20 KB) und setzt nur den Knopf; die eigentliche
Anprobe (`anprobe-app.js`, ca. 250 KB komprimiert) lädt erst, wenn die Kundin
mit der Maus über den Knopf fährt oder ihn antippt. So bleibt jede Produktseite
schnell, auch für alle, die nie anprobieren.

**2. Knopf auf die Produktseite setzen**

*Onlineshop → Themes → Anpassen*, oben die Vorlage **Produkte** wählen. Im
Abschnitt mit den Produktinfos einen Block **„Benutzerdefiniertes Liquid“**
hinzufügen, den kompletten Inhalt von `shopify/anprobe.liquid` hineinkopieren
und den Block unter den „In den Warenkorb“-Knopf ziehen. Speichern.

Der Block gibt Titel, Preis, Hauptbild, Produkttyp und Tags an die Anprobe
weiter, dazu das 3D-Modell aus dem Metafeld (Schritt 3) und die Varianten-IDs für
„In den Warenkorb“ auf der Ergebnisseite. Die angeprobte Variante wird über den
Namen zugeordnet („Gold“ passt zu „Gold“ oder „Gold / 45 cm“; bei mehreren Treffern
gewinnt die auf der Seite gewählte). Gibt es keine passende, verfügbare Variante,
erscheint der Knopf nicht. Nach dem Hinzufügen löst die Anprobe das Ereignis
`anprobe:warenkorb` am `document` aus (`detail: { id, variante, titel }`), mit dem
ein Theme seinen Warenkorb-Zähler aktualisieren kann. Der Knopf erscheint
nur bei Produkten, die als Schmuck erkannt werden.

**3. Metafeld für das 3D-Modell anlegen** (einmalig)

*Einstellungen → Benutzerdefinierte Daten → Produkte → Definition hinzufügen*:

* Name `Anprobe-Modell`, Namespace und Schlüssel **`anprobe.modell`**
* Typ **JSON**

Optional ein zweites Metafeld **`anprobe.art`** (Typ „Einzeiliger Text“) mit
`ring`, `armband`, `kette` oder `ohrringe`, falls die Art nicht aus Produkttyp,
Tags oder Titel hervorgeht.

**4. Modell bauen und eintragen**

Für jedes Produkt im Editor (`editor/index.html`) das Schmuckstück nachbauen
(siehe unten), die JSON-Beschreibung kopieren und beim Produkt in das Feld
„Anprobe-Modell“ einfügen. Speichern – fertig.

Ohne Modell zeigt die Anprobe eine passende Vorlage, ausgewählt nach Art und
Titel (z. B. „Perlen-Ohrstecker“ → Vorlage Perlen-Ohrstecker). Das ist eine
Notlösung: Das Stück sieht dann ähnlich, aber nicht genau so aus.

## Modelle bauen (Editor)

Es gibt keine 3D-Dateien vom Schmuck, nur Fotos. Deshalb wird jedes Stück aus
wenigen Angaben **berechnet**: Kettenart, Stärke, Länge, Perlen, Anhänger,
Metall. Der Editor (`editor/index.html`, im Browser öffnen) zeigt das Modell
groß und drehbar:

1. Art und eine Vorlage wählen, die dem Produkt am nächsten kommt
2. Werte anpassen (z. B. Kette „anker“, 1,2 mm, 45 cm; Anhänger „blume“, 12 mm)
   und mit dem Produktfoto vergleichen
3. Varianten anlegen (Gold, Silber …), jede bekommt ihren Namen
4. „JSON kopieren“ und ins Metafeld `anprobe.modell` einfügen

So sieht eine Beschreibung aus (eine Liste von Varianten):

```json
[
  { "name": "Gold", "art": "ohrringe", "metall": "gold",
    "ohrring": { "typ": "huggie", "durchmesserMm": 12, "staerkeMm": 2.1 },
    "anhaenger": { "typ": "perle", "groesseMm": 8 },
    "perlen": { "groesseMm": 7, "form": "tropfen", "farbe": "weiss" } },
  { "name": "Silber", "art": "ohrringe", "metall": "silber",
    "ohrring": { "typ": "huggie", "durchmesserMm": 12, "staerkeMm": 2.1 },
    "anhaenger": { "typ": "perle", "groesseMm": 8 },
    "perlen": { "groesseMm": 7, "form": "tropfen", "farbe": "weiss" } }
]
```

Mögliche Werte (alles Weggelassene bekommt einen sinnvollen Standard):

| Feld | Werte |
|---|---|
| `metall` | `gold` (18k PVD, warm), `silber`, `rosegold`, `weissgold` |
| `kette` | `typ`: anker, erbs, figaro, panzer, schlange, kugel, paperclip, seil, perlenstrang · `staerkeMm` 0,6–6 · `laengeCm` 30–100 |
| `perlen` | `groesseMm` 2–16 · `form`: rund, barock, tropfen, button, reis · `farbe`: weiss, creme, rose, champagner, grau · `anordnung`: strang, stationen, einzeln · `abstandMm`, `anzahl` |
| `anhaenger` | `typ`: keiner, perle, sonne, blume, mond, herz, muenze, tropfen, stein, stern, muschel · `groesseMm` 4–40 |
| `ohrring` | `typ`: stecker, creole, huggie, haenger, perlenstecker · `durchmesserMm`, `staerkeMm`, `laengeMm` |
| `ring` | `typ`: band, solitaer, perle, offen, siegel, kette · `schieneMm` · `profil`: halbrund, rund, flach · `innenDurchmesserMm` |
| `stein` | `art`: zirkonia, diamant, saphir, rubin, smaragd, perle · `groesseMm` · `schliff`: brillant, oval, tropfen, smaragd |
| `armband` | `typ`: kette, perlen, reif, tennis · `laengeCm` 12–26 · `verlaengerungCm` |

Später sind auch echte 3D-Dateien möglich: `{ "name": "Gold", "glb": "https://…/ring.glb", "art": "ring" }`
(GLB in Millimetern, Ausrichtung wie in `docs/ARCHITEKTUR.md`).

## Welche Produkte einen Knopf bekommen

Die Art wird so bestimmt, das Erste, was passt, gilt:

1. Metafeld `anprobe.art`
2. ein Produkt-Tag wie `anprobe:ring`
3. die Art im Modell (`"art": "kette"`)
4. Produkttyp, dann Titel, dann die übrigen Tags: „Ohrring“, „Creole“, „Ohrstecker“ → Ohrringe;
   „Armband“, „Armreif“ → Armband; „Kette“, „Collier“ → Kette; „Ring“ → Ring

Wer seine Produkttypen „Ringe“, „Halsketten“ usw. nennt, muss also nichts tun.
Produkte ohne erkennbare Art bekommen keinen Knopf.

## Knopf anpassen

Am `<div data-anprobe …>` im Liquid-Block können Attribute ergänzt werden:

| Attribut | Wirkung |
|----------|---------|
| `data-text="Jetzt anprobieren"` | eigene Beschriftung |
| `data-farbe="#7a5a2b"` | Farbe des Knopfs |
| `data-voll` | gefüllter statt umrandeter Knopf |
| `data-breit` | Knopf über die ganze Breite |
| `data-finger="mittel"` | Ring: Finger beim Öffnen (daumen, zeige, mittel, ring, klein) |

Im Theme-CSS lässt sich der Knopf über `[data-anprobe]::part(knopf)` gestalten.
Die Überschriften im Fenster übernehmen die Schrift aus der CSS-Variablen
`--anprobe-schrift-titel` (Standard: die Schrift des Shops).

## Datenschutz

Die Kamera wird nur im Browser ausgewertet. Es werden keine Bilder hochgeladen
oder gespeichert, und es gibt keinen eigenen Server. Aufnahmen entstehen nur,
wenn die Kundin auf den Auslöser tippt, und bleiben auf ihrem Gerät.

Erst nach dem Klick auf „Virtuell anprobieren“ (das Intro zeigt dann den
Datenschutzhinweis) lädt der Browser die Erkennungssoftware (MediaPipe, etwa
10 MB) von `cdn.jsdelivr.net` und die Erkennungsmodelle (je 4–8 MB) von
`storage.googleapis.com`; bei Ohrringen zusätzlich im Hintergrund die
Handerkennung (für Hände vor dem Ohr). Dabei sehen diese Anbieter, wie bei jedem
eingebundenen Skript, die IP-Adresse. Das gehört in die Datenschutzerklärung –
oder man hostet beides selbst (z. B. unter Shopify *Inhalte → Dateien* oder auf
einem eigenen Server) und trägt die Adressen **vor** dem Skript-Tag ein:

```html
<script>
  window.AnprobeKonfig = {
    mediapipe: 'https://mein-server.de/anprobe/tasks-vision',   // Inhalt des npm-Pakets @mediapipe/tasks-vision@1.1.0 (vision_bundle.mjs und wasm/)
    modelle: {
      hand: 'https://mein-server.de/anprobe/hand_landmarker.task',
      gesicht: 'https://mein-server.de/anprobe/face_landmarker.task',
      koerper: 'https://mein-server.de/anprobe/pose_landmarker_lite.task'
    }
  };
</script>
```

Es werden keine externen Schriften geladen.

### Alle Einstellungen

| Schlüssel | Standard | Bedeutung |
|---|---|---|
| `mediapipe` | jsDelivr, @mediapipe/tasks-vision@1.1.0 | Ordner mit `vision_bundle.mjs` und `wasm/` |
| `modelle` | storage.googleapis.com (float16) | Adressen der Modelle für Hand, Gesicht, Körper |
| `shopName` | `ARLISE` | erscheint in der Aufnahme |
| `knopfText` | `Virtuell anprobieren` | Beschriftung aller Knöpfe |
| `aufnahmeBreite` | 1440 | Breite der gespeicherten Aufnahme in Pixeln |
| `qualitaet` | `auto` | `auto` passt die Darstellung der Geräteleistung an; fest: `hoch`, `mittel`, `niedrig` |
| `delegate` | `auto` | Erkennung auf der Grafikkarte, bei Problemen auf dem Prozessor; `CPU` erzwingt den Prozessor |
| `warenkorb` | `true` | Ergebnisseite: „In den Warenkorb“ für die angeprobte Variante (`false` blendet ihn aus) |
| `handVerdeckung` | `true` | Ohrringe: Handerkennung nachladen, damit eine Hand vor dem Ohr den Ohrring verdeckt (`false` spart ca. 8 MB) |
| `debug` | `false` | Protokoll in der Konsole und `window.__anprobe` (auch per `?anprobe-debug` in der Adresse) |

Für eigene Seiten ohne Shopify reicht:

```html
<div data-anprobe data-titel="Florea Kette" data-preis="54,90 €" data-art="kette">
  <script type="application/json" data-anprobe-modell>
    { "art": "kette", "metall": "gold", "kette": { "typ": "anker", "laengeCm": 45 }, "anhaenger": { "typ": "blume" } }
  </script>
</div>
<script type="module" src="/anprobe.js"></script>   <!-- anprobe-app.js im selben Ordner -->
```

Per Skript: `Anprobe.oeffne('#mein-produkt')` oder `Anprobe.oeffne({ titel, art, modell })`.

## Grenzen

Ehrlich gesagt, was die Anprobe nicht kann:

* **Maße sind geschätzt.** Die Erkennung liefert Punkte an Gelenken und im
  Gesicht, keine Ohrläppchen, Halsränder oder Fingerdicken. Größe und Lage
  werden daraus über Durchschnittsmaße berechnet (Iris ≈ 11,7 mm, Normhand).
  Ein Ring „passt“ sich immer dem Finger an; über die Ringgröße sagt die
  Anprobe nichts. Bei ungewöhnlicher Haltung lässt sich der Schmuck von Hand
  nachschieben.
* **Verdeckung ist vereinfacht.** Finger, Handgelenk, Hals, Kopf und Ohrläppchen
  verdecken den Schmuck über vereinfachte Körperformen; Hände vor Brust oder Ohr
  über grobe Kapseln aus den erkannten Punkten (an den Rändern weich, aber nicht
  fingergenau). Haare, Kragen, Ärmel und Schals verdecken ihn nicht.
* **Armband:** Die Erkennung kennt nur die Hand, nicht den Unterarm. Dessen
  Richtung wird aus dem Kamerabild geschätzt (Hautfarbe entlang des Arms). Bei
  langen Ärmeln oder hautfarbenem Hintergrund gilt die Verlängerung der Hand;
  ist das Handgelenk dann stark abgeknickt, sitzt das Armband etwas schräg.
* **Die Modelle sind nachgebaut**, nicht gescannt. Sie treffen Stil, Maße und
  Material, aber nicht jedes Detail einer Gravur oder Hammerschlag-Struktur.
* **Leistung:** gedacht für Handys der letzten drei bis vier Jahre und aktuelle
  Browser (Safari ab iOS 15, Chrome, Edge, Firefox). Auf schwächeren Geräten
  schaltet die Darstellung automatisch eine Stufe herunter. Ohne WebGL gibt es
  eine Fehlermeldung statt der Anprobe.
* Die Kamera gibt es nur über HTTPS (bei Shopify immer der Fall). Beim ersten
  Öffnen dauert das Laden je nach Verbindung einige Sekunden; danach kommen die
  Dateien aus dem Browser-Speicher.

## Entwicklung

```
npm install          # three, esbuild, @mediapipe/tasks-vision
npm run build        # dist/anprobe.js + dist/anprobe-app.js (Widget) und dist/editor.js (Editor)
npm run watch        # bei Änderungen neu bauen
npm test             # End-to-End-Prüfung mit Chromium und Fake-Kamera (siehe test/README.md)
```

```
src/main.js            Einstieg: Knöpfe auf der Seite, Fenster öffnen
src/app.js             Ablauf: Kamera, Schleife Erkennung → 3D, Foto, Aufnahme
src/produkt.js         Produktdaten aus dem HTML lesen, Art erkennen, Vorlage wählen
src/konfig.js          Einstellungen
src/tracking/          Erkennung (MediaPipe) → Anker, Maße, Verdecker, Glättung
src/schmuck/           parametrische 3D-Modelle, Materialien, Vorlagen
src/render/            3D-Bühne: Kamerabild, Verdeckung, Licht, Schatten, Physik, Aufnahme
src/ui/                Oberfläche (Shadow DOM), Stil, Symbole, Anleitungen
editor/                Editor für die Modelle
shopify/anprobe.liquid Block für die Shopify-Produktseite
docs/ARCHITEKTUR.md    Koordinaten, Modellkonventionen, Schnittstellen
test/                  Testumgebung (Server, Fake-Kamera, Szenarien, Bericht)
alt/                   Version 1 (2D), nur noch zum Nachschlagen
```

three.js wird in `anprobe-app.js` gebündelt; `anprobe.js` lädt diese Datei bei Bedarf
aus demselben Ordner nach. MediaPipe wird zur Laufzeit von der eingestellten
Adresse nachgeladen.
