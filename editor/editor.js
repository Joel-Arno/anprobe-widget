// Anprobe-Editor (Konfigurator) fuer das Shop-Team.
// Jedes Produkt wird aus Vorlage/Art parametrisch nachgebaut (src/schmuck), mit dem
// Produktfoto abgeglichen und als JSON ins Shopify-Metafeld anprobe.modell kopiert.
// Gebuendelt von build.mjs nach dist/editor.js; editor/index.html laedt es als Modul.
import { baueSchmuck, metallSwatch } from '../src/schmuck/index.js';
import { Vorschau, CSS_PX_PRO_MM } from './vorschau.js';
import { FotoAbgleich } from './foto.js';
import { SYM } from './symbole.js';
import * as F from './felder.js';

const SPEICHER = 'anprobe-editor:entwurf';
const SPEICHER_MASS = 'anprobe-editor:px-pro-mm';
const SPEICHER_ANSICHT = 'anprobe-editor:ansicht';
const STANDARD_VORLAGE = 'perlentropfen-ohrringe';
const BILD_GROESSE = 2048;

const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (z) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[z]));
const $ = (sel, w = document) => w.querySelector(sel);
const $$ = (sel, w = document) => [...w.querySelectorAll(sel)];
const zahlText = (z, stellen = 1) => (Math.round(z * 10 ** stellen) / 10 ** stellen).toLocaleString('de-DE', { maximumFractionDigits: stellen });
const slug = (t) => String(t || '').toLowerCase()
  .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
  .normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'schmuck';

function speicherLesen(k) { try { return localStorage.getItem(k); } catch { return null; } }
function speicherSchreiben(k, w) { try { localStorage.setItem(k, w); } catch { /* privat/gesperrt */ } }

// ---------------------------------------------------------------- Zustand

const zustand = {
  varianten: [],        // vollstaendige Specs (inkl. name)
  aktiv: 0,
  gemeinsam: true,      // Formaenderungen gelten fuer alle Varianten
  vorlage: null,        // Ausgangsvorlage (id)
  produktname: ''
};
const verlauf = [];     // Rueckgaengig (Schnappschuesse)
let vorschau = null;
let foto = null;
let letzterStand = '';

const aktiveSpec = () => zustand.varianten[zustand.aktiv];
const schnappschuss = () => JSON.stringify({ varianten: zustand.varianten, aktiv: zustand.aktiv, gemeinsam: zustand.gemeinsam, vorlage: zustand.vorlage, produktname: zustand.produktname });

/** Vor jeder abgeschlossenen Aenderung aufrufen (fuer Rueckgaengig). */
function merke() {
  const s = schnappschuss();
  if (verlauf[verlauf.length - 1] !== s) verlauf.push(s);
  if (verlauf.length > 60) verlauf.shift();
}

function rueckgaengig() {
  const s = verlauf.pop();
  if (!s) { toast('Nichts zum Rückgängigmachen.'); return; }
  stelleHer(JSON.parse(s));
  allesNeu({ rahmen: false });
  toast('Rückgängig gemacht.');
}

function stelleHer(d) {
  zustand.varianten = (d.varianten || []).map((v) => F.vollstaendig(v).spec);
  if (!zustand.varianten.length) zustand.varianten = vorlageVarianten(STANDARD_VORLAGE);
  zustand.aktiv = Math.min(Math.max(0, d.aktiv | 0), zustand.varianten.length - 1);
  zustand.gemeinsam = d.gemeinsam !== false;
  zustand.vorlage = d.vorlage && F.VORLAGEN[d.vorlage] ? d.vorlage : null;
  zustand.produktname = typeof d.produktname === 'string' ? d.produktname : '';
}

function vorlageVarianten(id) {
  const v = F.VORLAGEN[id];
  return (v.varianten && v.varianten.length ? v.varianten : [{ name: 'Gold', spec: v.spec }])
    .map((x) => F.vollstaendig({ ...x.spec, name: x.name }).spec);
}

// ---------------------------------------------------------------- Geruest

function geruest() {
  const arten = F.ARTEN.map((a) => `
    <button type="button" class="ed-art" role="radio" data-art="${a.wert}" aria-checked="false">
      ${SYM[a.wert]}<span>${esc(a.name)}</span>
    </button>`).join('');
  const metalle = F.AUSWAHL.metall.map((m) => `
    <button type="button" class="ed-metall" role="radio" data-metall="${m}" aria-checked="false" title="${esc(F.METALL_HINWEIS[m])}">
      <span class="ed-metall-tupfer" style="--tupfer:${metallSwatch(m)}"></span><span>${esc(F.METALL_NAMEN[m])}</span>
    </button>`).join('');
  return `
<div class="ed">
  <header class="ed-kopf">
    <div class="ed-marke"><span class="ed-marke-name">ARLISE</span><span class="ed-marke-strich" aria-hidden="true"></span><span class="ed-marke-titel">Anprobe-Editor</span></div>
    <label class="ed-produkt">
      <span class="ed-vh">Produktname</span>
      <input id="ed-produktname" type="text" placeholder="Produktname (für Dateinamen)" autocomplete="off" spellcheck="false">
    </label>
    <nav class="ed-kopf-aktionen" aria-label="Aktionen">
      <button type="button" class="ed-knopf-leise" data-aktion="vorlagen" title="Vorlage wählen">${SYM.vorlagen}<span>Vorlagen</span></button>
      <button type="button" class="ed-knopf-leise" data-aktion="import" title="JSON importieren">${SYM.laden}<span>Importieren</span></button>
      <button type="button" class="ed-knopf-leise" data-aktion="anleitung" title="Anleitung">${SYM.buch}<span>Anleitung</span></button>
    </nav>
  </header>

  <main class="ed-flaeche">
    <aside class="ed-konfig" aria-label="Einstellungen">
      <section class="ed-block">
        <h2 class="ed-titel">Schmuckart</h2>
        <div class="ed-arten" role="radiogroup" aria-label="Schmuckart">${arten}</div>
        <button type="button" class="ed-vorlage-wahl" data-aktion="vorlagen" aria-label="Vorlage wählen">
          <span class="ed-vorlage-bild" aria-hidden="true"></span>
          <span class="ed-vorlage-text"><small>Ausgangsvorlage</small><b></b></span>
          <span class="ed-vorlage-pfeil">${SYM.pfeil}</span>
        </button>
      </section>

      <section class="ed-block ed-varianten">
        <div class="ed-block-kopf">
          <h2 class="ed-titel">Varianten</h2>
          <button type="button" class="ed-mini" data-aktion="variante-neu">${SYM.plus}<span>Variante</span></button>
        </div>
        <div class="ed-variantenliste" role="tablist" aria-label="Varianten"></div>
        <div class="ed-feld">
          <div class="ed-feld-kopf"><label class="ed-label" for="ed-variantenname">Name</label><span class="ed-feld-info">wie die Variante in Shopify</span></div>
          <input id="ed-variantenname" class="ed-text" type="text" autocomplete="off" maxlength="40">
        </div>
        <div class="ed-feld">
          <div class="ed-feld-kopf"><span class="ed-label">Metall</span><span class="ed-feld-info ed-metall-info"></span></div>
          <div class="ed-metalle" role="radiogroup" aria-label="Metall">${metalle}</div>
        </div>
        <label class="ed-schalter">
          <input type="checkbox" id="ed-gemeinsam" checked>
          <span class="ed-schalter-bahn" aria-hidden="true"></span>
          <span>Form gilt für alle Varianten</span>
        </label>
        <button type="button" class="ed-link ed-variante-weg" data-aktion="variante-weg">Diese Variante entfernen</button>
      </section>

      <div id="ed-felder"></div>
    </aside>

    <section class="ed-mitte" aria-label="Vorschau">
      <div class="ed-buehne-bereich">
        <div class="ed-buehne" id="ed-buehne">
          <div class="ed-foto-ebene" hidden></div>

          <div class="ed-leiste ed-oben-links">
            <div class="ed-segment" role="radiogroup" aria-label="Ansicht">
              <button type="button" role="radio" data-ansicht="produkt" aria-checked="true">Produkt</button>
              <button type="button" role="radio" data-ansicht="vorn" aria-checked="false">Vorn</button>
              <button type="button" role="radio" data-ansicht="seite" aria-checked="false">Seite</button>
              <button type="button" role="radio" data-ansicht="oben" aria-checked="false">Oben</button>
            </div>
          </div>

          <div class="ed-leiste ed-oben-rechts">
            <button type="button" class="ed-ikon" data-schalter="drehteller" aria-pressed="false" title="Drehteller">${SYM.drehen}<span class="ed-vh">Drehteller</span></button>
            <button type="button" class="ed-ikon" data-schalter="lineal" aria-pressed="true" title="mm-Lineal">${SYM.lineal}<span class="ed-vh">mm-Lineal</span></button>
            <button type="button" class="ed-ikon" data-schalter="echteGroesse" aria-pressed="false" title="Echte Größe (1:1)">${SYM.massstab}<span class="ed-vh">Echte Größe</span></button>
            <button type="button" class="ed-ikon" data-schalter="bueste" aria-pressed="true" title="Büste" hidden>${SYM.bueste}<span class="ed-vh">Büste</span></button>
            <button type="button" class="ed-ikon" data-schalter="paar" aria-pressed="true" title="Als Paar zeigen" hidden>${SYM.paar}<span class="ed-vh">Paar</span></button>
            <span class="ed-leiste-strich" aria-hidden="true"></span>
            <div class="ed-menue-halter">
              <button type="button" class="ed-knopf-glas" data-aktion="bild-menue" aria-haspopup="menu" aria-expanded="false" title="Vorschau als Bild speichern">${SYM.kamera}<span>Bild speichern</span></button>
              <div class="ed-menue" role="menu" hidden>
                <button type="button" role="menuitem" data-aktion="bild" data-hintergrund="hell"><b>PNG mit Studio-Hintergrund</b><small>${BILD_GROESSE} × ${BILD_GROESSE} px, Elfenbein</small></button>
                <button type="button" role="menuitem" data-aktion="bild" data-hintergrund="transparent"><b>PNG freigestellt</b><small>${BILD_GROESSE} × ${BILD_GROESSE} px, transparent</small></button>
              </div>
            </div>
          </div>

          <div class="ed-foto-panel">
            <button type="button" class="ed-knopf-glas ed-foto-laden" data-aktion="foto-laden" title="Produktfoto laden und mit dem Modell vergleichen">${SYM.bild}<span>Produktfoto vergleichen</span></button>
            <div class="ed-foto-steuerung" hidden>
              <span class="ed-foto-mini" aria-hidden="true"></span>
              <div class="ed-segment ed-segment-klein" role="radiogroup" aria-label="Foto-Anordnung">
                <button type="button" role="radio" data-fotomodus="darueber" aria-checked="true">Darüber</button>
                <button type="button" role="radio" data-fotomodus="daneben" aria-checked="false">Daneben</button>
              </div>
              <label class="ed-foto-deckkraft"><span class="ed-vh">Deckkraft</span><input type="range" min="0.1" max="1" step="0.05" value="0.5" aria-label="Deckkraft des Fotos"></label>
              <button type="button" class="ed-ikon ed-ikon-klein" data-aktion="foto-ausrichten" aria-pressed="false" title="Foto verschieben und skalieren">${SYM.verschieben}<span class="ed-vh">Foto ausrichten</span></button>
              <button type="button" class="ed-ikon ed-ikon-klein" data-aktion="foto-zurueck" title="Fotolage zurücksetzen">${SYM.zurueck}<span class="ed-vh">Fotolage zurücksetzen</span></button>
              <button type="button" class="ed-ikon ed-ikon-klein" data-aktion="foto-weg" title="Foto entfernen">${SYM.kreuz}<span class="ed-vh">Foto entfernen</span></button>
            </div>
            <input type="file" id="ed-foto-datei" accept="image/*" hidden>
          </div>

          <div class="ed-masse" aria-live="polite"></div>
          <button type="button" class="ed-kalibrieren" data-aktion="kalibrieren" hidden>Maßstab kalibrieren</button>
          <div class="ed-ausrichten-hinweis" hidden>Foto ziehen zum Verschieben · Mausrad zum Skalieren · Pfeiltasten fein</div>
          <div class="ed-arbeitet" hidden><span></span>Berechne Modell …</div>
        </div>
        <div class="ed-foto-daneben" hidden></div>
      </div>
    </section>

    <aside class="ed-ausgabe" aria-label="JSON für Shopify">
      <section class="ed-block">
        <div class="ed-block-kopf">
          <h2 class="ed-titel">JSON für Shopify</h2>
          <span class="ed-status"></span>
        </div>
        <p class="ed-klein">Metafeld <code>anprobe.modell</code> · Typ JSON</p>
        <pre class="ed-json" tabindex="0" aria-label="JSON-Beschreibung"><code></code></pre>
        <div class="ed-hinweise" role="status"></div>
        <div class="ed-knopfreihe">
          <button type="button" class="ed-knopf" data-aktion="kopieren">${SYM.kopieren}<span>JSON kopieren</span></button>
          <button type="button" class="ed-knopf-rand" data-aktion="json-datei" title="Als .json-Datei speichern">${SYM.speichern}<span class="ed-vh">Als Datei speichern</span></button>
          <button type="button" class="ed-knopf-rand" data-aktion="import" title="JSON importieren">${SYM.laden}<span class="ed-vh">JSON importieren</span></button>
        </div>
      </section>
      <section class="ed-block ed-schritte">
        <h2 class="ed-titel">So kommt es in den Shop</h2>
        <ol>
          <li><b>Kopieren</b><span>„JSON kopieren“ klicken.</span></li>
          <li><b>Produkt öffnen</b><span>Shopify-Admin → Produkte → dieses Produkt.</span></li>
          <li><b>Einfügen</b><span>Unten bei <i>Metafelder</i> ins Feld „Anprobe-Modell“ einfügen und speichern.</span></li>
          <li><b>Prüfen</b><span>Produktseite öffnen → „Virtuell anprobieren“.</span></li>
        </ol>
        <button type="button" class="ed-link" data-aktion="anleitung">Ausführliche Anleitung, auch zum einmaligen Einrichten</button>
      </section>
    </aside>
  </main>

  <dialog class="ed-dialog ed-dialog-breit" id="ed-dlg-vorlagen" aria-labelledby="ed-dlg-vorlagen-titel">
    <div class="ed-dialog-kopf"><h2 id="ed-dlg-vorlagen-titel">Vorlage wählen</h2><button type="button" class="ed-ikon" data-schliessen>${SYM.kreuz}<span class="ed-vh">Schließen</span></button></div>
    <p class="ed-klein">Nimm die Vorlage, die dem Stück am nächsten kommt, und passe danach Maße und Details an.</p>
    <div class="ed-vorlagen"></div>
  </dialog>

  <dialog class="ed-dialog" id="ed-dlg-import" aria-labelledby="ed-dlg-import-titel">
    <div class="ed-dialog-kopf"><h2 id="ed-dlg-import-titel">JSON importieren</h2><button type="button" class="ed-ikon" data-schliessen>${SYM.kreuz}<span class="ed-vh">Schließen</span></button></div>
    <p class="ed-klein">Füge den Inhalt des Metafelds <code>anprobe.modell</code> ein oder wähle eine .json-Datei. Das aktuelle Modell wird ersetzt.</p>
    <textarea id="ed-import-text" class="ed-textfeld" rows="10" spellcheck="false" placeholder='[{ "name": "Gold", "art": "kette", "metall": "gold", … }]'></textarea>
    <div class="ed-fehler" role="alert"></div>
    <div class="ed-knopfreihe ed-rechts">
      <label class="ed-knopf-rand ed-datei">${SYM.laden}<span>Datei wählen</span><input type="file" accept=".json,application/json,text/plain" id="ed-import-datei"></label>
      <button type="button" class="ed-knopf" data-aktion="import-ok">Übernehmen</button>
    </div>
  </dialog>

  <dialog class="ed-dialog ed-dialog-text" id="ed-dlg-anleitung" aria-labelledby="ed-dlg-anleitung-titel">
    <div class="ed-dialog-kopf"><h2 id="ed-dlg-anleitung-titel">Anleitung</h2><button type="button" class="ed-ikon" data-schliessen>${SYM.kreuz}<span class="ed-vh">Schließen</span></button></div>
    <div class="ed-anleitung">
      <h3>Einmalig: Metafeld anlegen</h3>
      <ol>
        <li>Shopify-Admin → <b>Einstellungen</b> → <b>Benutzerdefinierte Daten</b> → <b>Produkte</b> → <b>Definition hinzufügen</b>.</li>
        <li>Name <b>Anprobe-Modell</b>, Namespace und Schlüssel <code>anprobe.modell</code>.</li>
        <li>Typ <b>JSON</b> wählen und speichern.</li>
      </ol>
      <h3>Für jedes Produkt</h3>
      <ol>
        <li><b>Vorlage oder Art wählen</b>, die dem Stück am nächsten kommt.</li>
        <li><b>Produktfoto laden</b> („Produktfoto vergleichen“) und halbtransparent über die Vorschau legen. Mit „Ausrichten“ verschieben und skalieren, bis es passt.</li>
        <li><b>Werte anpassen</b>: Kettenart, Stärke, Länge, Perlen, Anhänger … Das mm-Lineal und „Echte Größe“ helfen beim Abgleich der Maße.</li>
        <li><b>Varianten anlegen</b> (z. B. Gold und Silber). Die Namen erscheinen in der Anprobe als Auswahl, am besten genau wie die Varianten in Shopify.</li>
        <li><b>JSON kopieren</b> und beim Produkt unten unter <i>Metafelder</i> ins Feld „Anprobe-Modell“ einfügen. Speichern.</li>
        <li>Auf der Produktseite <b>„Virtuell anprobieren“</b> testen.</li>
      </ol>
      <h3>Gut zu wissen</h3>
      <ul>
        <li>Ohne Metafeld wählt die Anprobe eine ähnliche Vorlage nach Art und Titel – das ist nur eine Notlösung.</li>
        <li>Ein vorhandenes Modell ändern: JSON aus dem Metafeld kopieren, hier <b>Importieren</b>, anpassen, wieder einfügen.</li>
        <li><b>Bild speichern</b> erzeugt ein quadratisches PNG (${BILD_GROESSE} px) der aktuellen Ansicht, z. B. als Produktbild.</li>
        <li><b>Echte Größe</b> zeigt das Stück 1:1 auf dem Bildschirm. Einmal kalibrieren: Bankkarte an den Bildschirm halten und den Rahmen anpassen.</li>
        <li>Der Entwurf wird automatisch in diesem Browser gespeichert. Rückgängig: <kbd>Strg</kbd> + <kbd>Z</kbd>.</li>
      </ul>
    </div>
  </dialog>

  <dialog class="ed-dialog" id="ed-dlg-kalibrieren" aria-labelledby="ed-dlg-kalibrieren-titel">
    <div class="ed-dialog-kopf"><h2 id="ed-dlg-kalibrieren-titel">Maßstab kalibrieren</h2><button type="button" class="ed-ikon" data-schliessen>${SYM.kreuz}<span class="ed-vh">Schließen</span></button></div>
    <p class="ed-klein">Halte eine Bank- oder Kundenkarte (85,6 × 54 mm) an den Bildschirm und verändere die Größe, bis der Rahmen genau so groß ist wie die Karte.</p>
    <div class="ed-karte-buehne"><div class="ed-karte"><span>85,6 × 54 mm</span></div></div>
    <input type="range" id="ed-kalib-regler" min="2.2" max="7" step="0.005" aria-label="Bildschirmmaßstab">
    <div class="ed-knopfreihe ed-rechts">
      <button type="button" class="ed-knopf-rand" data-aktion="kalib-standard">Standard</button>
      <button type="button" class="ed-knopf" data-aktion="kalib-ok">Übernehmen</button>
    </div>
  </dialog>

  <div class="ed-toast" role="status" aria-live="polite"><span class="ed-toast-text"></span><button type="button" class="ed-toast-knopf" hidden></button></div>
</div>`;
}

// ---------------------------------------------------------------- Felder

function feldHtml(feld, s) {
  const id = 'f-' + feld.pfad.replace(/\./g, '-');
  const label = F.text(feld.label, s);
  const wert = feld.pfad === 'perlenAn' ? F.perlenAn(s) : F.lies(s, feld.pfad);
  if (feld.typ === 'zahl') {
    let [min, max] = F.bereichVon(feld, s);
    min = Math.min(min, wert); max = Math.max(max, wert);
    const schritt = feld.schritt || 0.1;
    const stellen = schritt < 1 ? (String(schritt).split('.')[1] || '').length : 0;
    const hinweis = feld.hinweis ? feld.hinweis(s, wert) : '';
    return `
      <div class="ed-feld ed-zahl" data-pfad="${feld.pfad}" data-stellen="${stellen}">
        <div class="ed-feld-kopf">
          <label class="ed-label" for="${id}">${esc(label)}</label>
          <span class="ed-zahl-eingabe"><input id="${id}-z" type="text" inputmode="decimal" value="${esc(zahlText(wert, stellen))}" aria-label="${esc(label)}${feld.einheit ? ' in ' + feld.einheit : ''}">${feld.einheit ? `<span>${feld.einheit}</span>` : ''}</span>
        </div>
        <input id="${id}" type="range" min="${min}" max="${max}" step="${schritt}" value="${wert}" style="--anteil:${((wert - min) / (max - min || 1)) * 100}%">
        ${hinweis || feld.hinweis ? `<div class="ed-hinweis">${esc(hinweis)}</div>` : ''}
      </div>`;
  }
  if (feld.typ === 'schalter') {
    return `
      <div class="ed-feld" data-pfad="${feld.pfad}">
        <label class="ed-schalter"><input type="checkbox" id="${id}" ${wert ? 'checked' : ''}><span class="ed-schalter-bahn" aria-hidden="true"></span><span>${esc(label)}</span></label>
      </div>`;
  }
  if (feld.typ === 'farbe') {
    const standard = !wert;
    const farbe = wert || F.STEIN_TUPFER[s.stein.art] || '#ffffff';
    return `
      <div class="ed-feld" data-pfad="${feld.pfad}">
        <div class="ed-feld-kopf"><span class="ed-label">Farbe</span><span class="ed-feld-info">${standard ? 'typisch für ' + esc(F.wertName('stein.art', s.stein.art)) : esc(String(wert).toUpperCase())}</span></div>
        <div class="ed-chips">
          <button type="button" class="ed-chip" data-farbe-standard aria-pressed="${standard}"><span class="ed-tupfer" style="--tupfer:${F.STEIN_TUPFER[s.stein.art] || '#fff'}"></span>Standard</button>
          <label class="ed-chip ed-farbwahl" aria-pressed="${!standard}"><span class="ed-tupfer" style="--tupfer:${farbe}"></span>Eigene<input type="color" value="${farbe}" aria-label="Eigene Steinfarbe"></label>
        </div>
      </div>`;
  }
  // Auswahl als Chips
  const optionen = F.optionenVon(feld, s);
  const chips = optionen.map((o) => {
    const aktiv = String(o) === String(wert ?? '');
    const tupfer = feld.typ === 'perlfarbe' ? `<span class="ed-tupfer ed-tupfer-perle" style="--tupfer:${F.PERL_TUPFER[o]}"></span>` : '';
    return `<button type="button" class="ed-chip" role="radio" aria-checked="${aktiv}" data-wert="${esc(o)}" data-zahl="${typeof o === 'number' ? 1 : 0}">${tupfer}${esc(F.wertName(feld.pfad, o))}</button>`;
  }).join('');
  return `
    <div class="ed-feld" data-pfad="${feld.pfad}">
      <div class="ed-feld-kopf"><span class="ed-label" id="${id}-l">${esc(label)}</span></div>
      <div class="ed-chips" role="radiogroup" aria-labelledby="${id}-l">${chips}</div>
    </div>`;
}

function zeichneFelder() {
  const s = aktiveSpec();
  const ziel = $('#ed-felder');
  const scroll = $('.ed-konfig').scrollTop;
  const fokus = document.activeElement && document.activeElement.id;
  ziel.innerHTML = F.sichtbareAbschnitte(s).map((a) => `
    <section class="ed-block" data-abschnitt="${a.id}">
      <h2 class="ed-titel">${esc(F.text(a.titel, s))}</h2>
      ${a.felder.map((f) => feldHtml(f, s)).join('')}
    </section>`).join('');
  $('.ed-konfig').scrollTop = scroll;
  if (fokus && document.getElementById(fokus)) document.getElementById(fokus).focus({ preventScroll: true });
}

function zeichneKopf() {
  const s = aktiveSpec();
  for (const b of $$('.ed-art')) b.setAttribute('aria-checked', String(b.dataset.art === s.art));
  const v = zustand.vorlage && F.VORLAGEN[zustand.vorlage];
  $('.ed-vorlage-text b').textContent = v ? v.name : `Grundform ${F.ART_NAMEN[s.art]}`;
  $('.ed-vorlage-bild').innerHTML = v ? `<img src="${vorlagenBild(zustand.vorlage)}" alt="" onerror="this.replaceWith(document.createRange().createContextualFragment(this.dataset.ersatz))" data-ersatz="${esc(SYM[s.art])}">` : SYM[s.art];
  // Varianten
  $('.ed-variantenliste').innerHTML = zustand.varianten.map((v2, i) => `
    <button type="button" class="ed-variante" role="tab" aria-selected="${i === zustand.aktiv}" data-index="${i}">
      <span class="ed-metall-tupfer" style="--tupfer:${metallSwatch(v2.metall)}"></span><span>${esc(v2.name || 'Ohne Namen')}</span>
    </button>`).join('');
  const name = $('#ed-variantenname');
  if (document.activeElement !== name) name.value = s.name || '';
  for (const b of $$('.ed-metall')) b.setAttribute('aria-checked', String(b.dataset.metall === s.metall));
  $('.ed-metall-info').textContent = F.METALL_HINWEIS[s.metall] || '';
  $('#ed-gemeinsam').checked = zustand.gemeinsam;
  $('.ed-variante-weg').hidden = zustand.varianten.length < 2;
  $('[data-aktion="variante-neu"]').disabled = zustand.varianten.length >= 8;
  const prod = $('#ed-produktname');
  if (document.activeElement !== prod) prod.value = zustand.produktname;
  // art-abhaengige Schalter
  $('[data-schalter="bueste"]').hidden = s.art !== 'kette';
  $('[data-schalter="paar"]').hidden = s.art !== 'ohrringe';
}

// ---------------------------------------------------------------- Aenderungen

const NUR_VARIANTE = new Set(['metall', 'name']);

function aendere(pfad, wert) {
  const ziele = zustand.gemeinsam && !NUR_VARIANTE.has(pfad) ? zustand.varianten : [aktiveSpec()];
  for (const s of ziele) F.setzeWert(s, pfad, wert);
  nachAenderung();
}

function nachAenderung({ felder = false, kopf = false, bauen = true } = {}) {
  if (kopf) zeichneKopf();
  if (felder) zeichneFelder();
  zeigeJson();
  if (bauen) planeBau();
  speichereSpaeter();
}

function allesNeu({ rahmen = true } = {}) {
  zeichneKopf();
  zeichneFelder();
  zeigeJson();
  planeBau({ rahmen });
  speichereSpaeter();
}

function ladeVorlage(id) {
  if (!F.VORLAGEN[id]) return;
  merke();
  const alterName = zustand.vorlage && F.VORLAGEN[zustand.vorlage] ? F.VORLAGEN[zustand.vorlage].name : '';
  zustand.varianten = vorlageVarianten(id);
  zustand.aktiv = 0;
  zustand.vorlage = id;
  if (!zustand.produktname || zustand.produktname === alterName) zustand.produktname = F.VORLAGEN[id].name;
  allesNeu();
}

function wechsleArt(art) {
  if (aktiveSpec().art === art) return;
  merke();
  zustand.varianten = zustand.varianten.map((v) => F.vollstaendig({ art, metall: v.metall, name: v.name }).spec);
  if (zustand.vorlage && F.VORLAGEN[zustand.vorlage] && zustand.produktname === F.VORLAGEN[zustand.vorlage].name) zustand.produktname = '';
  zustand.vorlage = null;
  allesNeu();
  toast(`Grundform ${F.ART_NAMEN[art]} – oder eine passende Vorlage wählen.`, { knopf: 'Vorlagen', aktion: oeffneVorlagen });
}

function neueVariante() {
  merke();
  const basis = aktiveSpec();
  const metall = F.naechstesMetall(zustand.varianten);
  const v = JSON.parse(JSON.stringify(basis));
  v.metall = metall;
  v.name = F.METALL_NAMEN[metall];
  zustand.varianten.push(v);
  zustand.aktiv = zustand.varianten.length - 1;
  nachAenderung({ kopf: true, felder: true });
  $('#ed-variantenname').focus();
  $('#ed-variantenname').select();
}

function entferneVariante() {
  if (zustand.varianten.length < 2) return;
  merke();
  const name = aktiveSpec().name;
  zustand.varianten.splice(zustand.aktiv, 1);
  zustand.aktiv = Math.max(0, zustand.aktiv - 1);
  nachAenderung({ kopf: true, felder: true });
  toast(`Variante „${name}“ entfernt.`, { knopf: 'Rückgängig', aktion: rueckgaengig });
}

function waehleVariante(i) {
  if (i === zustand.aktiv || !zustand.varianten[i]) return;
  zustand.aktiv = i;
  nachAenderung({ kopf: true, felder: true });
}

function setzeGemeinsam(an) {
  merke();
  zustand.gemeinsam = an;
  if (an && zustand.varianten.length > 1) {
    // Form der aktiven Variante uebernehmen, Name und Metall bleiben je Variante
    const basis = aktiveSpec();
    zustand.varianten = zustand.varianten.map((v, i) => (i === zustand.aktiv ? v : { ...JSON.parse(JSON.stringify(basis)), name: v.name, metall: v.metall }));
    toast(`Form von „${basis.name}“ gilt jetzt für alle Varianten.`, { knopf: 'Rückgängig', aktion: rueckgaengig });
  }
  nachAenderung({ kopf: true });
}

// ---------------------------------------------------------------- Modell bauen

let bauGeplant = false;
let rahmenGewuenscht = false;
let letzterBau = 0;

function planeBau({ rahmen = false } = {}) {
  rahmenGewuenscht = rahmenGewuenscht || rahmen;
  if (bauGeplant) return;
  bauGeplant = true;
  const warte = Math.max(0, 50 - (performance.now() - letzterBau));
  const anzeige = setTimeout(() => { $('.ed-arbeitet').hidden = false; }, 180);
  setTimeout(() => requestAnimationFrame(() => {
    bauGeplant = false;
    baue();
    clearTimeout(anzeige);
    $('.ed-arbeitet').hidden = true;
  }), warte);
}

function baue() {
  const s = aktiveSpec();
  let modell;
  try {
    modell = baueSchmuck(s);
  } catch (e) {
    console.error('[editor]', e);
    toast('Das Modell konnte mit diesen Werten nicht gebaut werden.');
    return;
  }
  vorschau.zeige(modell, { halteAnsicht: !rahmenGewuenscht });
  if (rahmenGewuenscht) setzeAnsichtKnopf('produkt');
  rahmenGewuenscht = false;
  letzterBau = performance.now();
  zeigeMasse(modell, s);
}

function zeigeMasse(modell, s) {
  const m = modell.masse || {};
  let t = '';
  if (s.art === 'ring') t = `Innen-Ø ${zahlText(s.ring.innenDurchmesserMm)} mm · Größe ${Math.round(s.ring.innenDurchmesserMm * Math.PI)}`;
  else if (s.art === 'kette') t = `Länge ${zahlText(s.kette.laengeCm)} cm`;
  else if (s.art === 'armband') t = s.armband.typ === 'reif' ? `Innenumfang ${zahlText(s.armband.laengeCm)} cm` : `Länge ${zahlText(s.armband.laengeCm)} cm${s.armband.typ === 'kette' && s.armband.verlaengerungCm > 0 ? ` + ${zahlText(s.armband.verlaengerungCm)} cm` : ''}`;
  else if (s.art === 'ohrringe') t = m.laengeMm ? `Länge ab Ohrloch ${zahlText(m.laengeMm)} mm` : '';
  $('.ed-masse').textContent = t;
}

// ---------------------------------------------------------------- JSON

function hebeHervor(json) {
  return esc(json)
    .replace(/(&quot;[^&]*?&quot;)(\s*:)/g, '<span class="j-k">$1</span>$2')
    .replace(/(:\s*)(&quot;[^&]*?&quot;)/g, '$1<span class="j-s">$2</span>')
    .replace(/(:\s*)(-?\d+(?:\.\d+)?)/g, '$1<span class="j-z">$2</span>')
    .replace(/(:\s*)(true|false|null)/g, '$1<span class="j-w">$2</span>');
}

function zeigeJson() {
  const json = F.alsJson(zustand.varianten);
  letzterStand = json;
  $('.ed-json code').innerHTML = hebeHervor(json);
  const hinweise = F.pruefeAusgabe(zustand.varianten);
  const n = zustand.varianten.length;
  const status = $('.ed-status');
  status.className = 'ed-status ' + (hinweise.length ? 'warn' : 'ok');
  status.innerHTML = hinweise.length ? `${SYM.achtung}<span>Bitte prüfen</span>` : `${SYM.haken}<span>Gültig · ${n} ${n === 1 ? 'Variante' : 'Varianten'}</span>`;
  $('.ed-hinweise').innerHTML = hinweise.map((h) => `<p>${esc(h)}</p>`).join('');
}

async function kopiere() {
  const text = letzterStand || F.alsJson(zustand.varianten);
  let ok = false;
  try {
    await navigator.clipboard.writeText(text);
    ok = true;
  } catch {
    const t = document.createElement('textarea');
    t.value = text;
    t.setAttribute('readonly', '');
    t.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
    document.body.appendChild(t);
    t.select();
    try { ok = document.execCommand('copy'); } catch { ok = false; }
    t.remove();
  }
  if (ok) {
    const k = $('[data-aktion="kopieren"]');
    k.classList.add('erledigt');
    k.querySelector('span').textContent = 'Kopiert';
    setTimeout(() => { k.classList.remove('erledigt'); k.querySelector('span').textContent = 'JSON kopieren'; }, 1800);
    toast('JSON kopiert – jetzt im Produkt beim Metafeld „Anprobe-Modell“ einfügen.');
  } else {
    // Auswahl im Codefeld, damit von Hand kopiert werden kann
    const r = document.createRange();
    r.selectNodeContents($('.ed-json code'));
    const sel = getSelection();
    sel.removeAllRanges();
    sel.addRange(r);
    toast('Kopieren nicht erlaubt – Text ist markiert, bitte mit Strg + C kopieren.');
  }
}

function dateiName(endung, mitVariante = false) {
  const s = aktiveSpec();
  const basis = slug(zustand.produktname || (zustand.vorlage && F.VORLAGEN[zustand.vorlage]?.name) || F.ART_NAMEN[s.art]);
  return `${basis}${mitVariante && s.name ? '-' + slug(s.name) : ''}.${endung}`;
}

function ladeHerunter(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

function importiere(text) {
  const fehlerEl = $('#ed-dlg-import .ed-fehler');
  fehlerEl.textContent = '';
  let erg;
  try {
    erg = F.leseJson(text);
  } catch (e) {
    fehlerEl.textContent = e.message;
    return false;
  }
  merke();
  zustand.varianten = erg.varianten;
  zustand.aktiv = 0;
  zustand.vorlage = null;
  // Formen gleich? Dann gemeinsam bearbeiten
  const formen = new Set(erg.varianten.map((v) => JSON.stringify({ ...F.kompakt(v), name: 0, metall: 0 })));
  zustand.gemeinsam = formen.size === 1;
  allesNeu();
  const n = erg.varianten.length;
  toast(erg.hinweise.length ? `Importiert mit ${erg.hinweise.length} Hinweis(en): ${erg.hinweise[0]}` : `${n} ${n === 1 ? 'Variante' : 'Varianten'} importiert.`, { knopf: 'Rückgängig', aktion: rueckgaengig, dauer: erg.hinweise.length ? 9000 : 4000 });
  return true;
}

// ---------------------------------------------------------------- Bild

async function speichereBild(hintergrund) {
  schliesseMenue();
  const knopf = $('[data-aktion="bild-menue"]');
  knopf.disabled = true;
  try {
    const blob = await vorschau.alsBild({ groesse: BILD_GROESSE, hintergrund });
    ladeHerunter(blob, dateiName('png', true));
    toast(`Bild gespeichert (${BILD_GROESSE} × ${BILD_GROESSE} px).`);
  } catch (e) {
    console.error('[editor]', e);
    toast('Das Bild konnte nicht erzeugt werden.');
  } finally {
    knopf.disabled = false;
  }
}

function schliesseMenue() {
  $('.ed-menue').hidden = true;
  $('[data-aktion="bild-menue"]').setAttribute('aria-expanded', 'false');
}

// ---------------------------------------------------------------- Vorlagen

function vorlagenBild(id) {
  return new URL(`bilder/vorlagen/${id}.webp`, document.baseURI).href;
}

function oeffneVorlagen() {
  const ziel = $('.ed-vorlagen');
  if (!ziel.dataset.fertig) {
    ziel.innerHTML = F.vorlagenNachArt().map((g) => `
      <section class="ed-vorlagen-gruppe">
        <h3 class="ed-titel">${esc(g.name)}</h3>
        <div class="ed-vorlagen-raster">
          ${g.vorlagen.map((v) => `
            <button type="button" class="ed-vorlage" data-vorlage="${v.id}">
              <span class="ed-vorlage-foto"><img src="${vorlagenBild(v.id)}" alt="" loading="lazy" onerror="this.parentNode.classList.add('ohne')"><span class="ed-vorlage-ersatz">${SYM[g.art]}</span></span>
              <b>${esc(v.name)}</b>
              <small>${esc(v.beschreibung)}</small>
            </button>`).join('')}
        </div>
      </section>`).join('');
    ziel.dataset.fertig = '1';
  }
  for (const b of $$('.ed-vorlage', ziel)) b.classList.toggle('aktiv', b.dataset.vorlage === zustand.vorlage);
  $('#ed-dlg-vorlagen').showModal();
}

// ---------------------------------------------------------------- Kalibrierung

function leseMass() {
  const w = parseFloat(speicherLesen(SPEICHER_MASS));
  return Number.isFinite(w) && w > 1 && w < 10 ? w : null;
}

function oeffneKalibrierung() {
  const regler = $('#ed-kalib-regler');
  regler.value = String(leseMass() || CSS_PX_PRO_MM);
  zeigeKarte();
  $('#ed-dlg-kalibrieren').showModal();
}

function zeigeKarte() {
  const w = parseFloat($('#ed-kalib-regler').value);
  const k = $('.ed-karte');
  k.style.width = `${85.6 * w}px`;
  k.style.height = `${53.98 * w}px`;
}

// ---------------------------------------------------------------- Toast

let toastZeit = null;
let toastAktion = null;
function toast(text, { knopf = null, aktion = null, dauer = 4200 } = {}) {
  const t = $('.ed-toast');
  $('.ed-toast-text', t).textContent = text;
  const k = $('.ed-toast-knopf', t);
  k.hidden = !knopf;
  k.textContent = knopf || '';
  toastAktion = aktion;
  t.classList.add('sichtbar');
  clearTimeout(toastZeit);
  toastZeit = setTimeout(() => t.classList.remove('sichtbar'), dauer);
}

// ---------------------------------------------------------------- Speichern

let speicherZeit = null;
function speichereSpaeter() {
  clearTimeout(speicherZeit);
  speicherZeit = setTimeout(() => speicherSchreiben(SPEICHER, schnappschuss()), 400);
}

// ---------------------------------------------------------------- Ansicht

function setzeAnsichtKnopf(name) {
  for (const b of $$('[data-ansicht]')) b.setAttribute('aria-checked', String(b.dataset.ansicht === name));
}

function setzeSchalter(name, an) {
  const knopf = $(`[data-schalter="${name}"]`);
  if (knopf) knopf.setAttribute('aria-pressed', String(!!an));
  if (name === 'echteGroesse') {
    $('.ed-kalibrieren').hidden = !an;
    if (an && !leseMass()) toast('Für genaue 1:1-Darstellung einmal den Bildschirm kalibrieren.', { knopf: 'Kalibrieren', aktion: oeffneKalibrierung, dauer: 7000 });
  }
}

function speichereAnsicht() {
  const o = vorschau.optionen;
  speicherSchreiben(SPEICHER_ANSICHT, JSON.stringify({ drehteller: o.drehteller, lineal: o.lineal, bueste: o.bueste, paar: o.paar }));
}

// ---------------------------------------------------------------- Ereignisse

function verdrahte() {
  const wurzel = $('.ed');

  wurzel.addEventListener('click', (e) => {
    const z = e.target.closest('[data-aktion], [data-art], [data-metall], [data-index], [data-ansicht], [data-schalter], [data-fotomodus], [data-vorlage], [data-schliessen]');
    if (!z) {
      if (!e.target.closest('.ed-menue-halter')) schliesseMenue();
      return;
    }
    if (z.dataset.schliessen !== undefined) { z.closest('dialog').close(); return; }
    if (z.dataset.vorlage) { $('#ed-dlg-vorlagen').close(); ladeVorlage(z.dataset.vorlage); return; }
    if (z.dataset.art) { wechsleArt(z.dataset.art); return; }
    if (z.dataset.metall) {
      merke();
      const s = aktiveSpec();
      // Name folgt dem Metall, solange er nur der Metallname war
      if (!s.name || s.name === F.METALL_NAMEN[s.metall]) s.name = F.METALL_NAMEN[z.dataset.metall];
      s.metall = z.dataset.metall;
      nachAenderung({ kopf: true });
      return;
    }
    if (z.dataset.index) { waehleVariante(Number(z.dataset.index)); return; }
    if (z.dataset.ansicht) { setzeAnsichtKnopf(z.dataset.ansicht); vorschau.ansicht(z.dataset.ansicht); return; }
    if (z.dataset.schalter) {
      const name = z.dataset.schalter;
      const an = z.getAttribute('aria-pressed') !== 'true';
      vorschau.setze({ [name]: an });
      setzeSchalter(name, an);
      speichereAnsicht();
      return;
    }
    if (z.dataset.fotomodus) {
      for (const b of $$('[data-fotomodus]')) b.setAttribute('aria-checked', String(b === z));
      foto.setzeModus(z.dataset.fotomodus);
      return;
    }
    switch (z.dataset.aktion) {
      case 'vorlagen': oeffneVorlagen(); break;
      case 'import': $('#ed-import-text').value = ''; $('#ed-dlg-import .ed-fehler').textContent = ''; $('#ed-dlg-import').showModal(); break;
      case 'import-ok': if (importiere($('#ed-import-text').value)) $('#ed-dlg-import').close(); break;
      case 'anleitung': $('#ed-dlg-anleitung').showModal(); break;
      case 'variante-neu': neueVariante(); break;
      case 'variante-weg': entferneVariante(); break;
      case 'kopieren': kopiere(); break;
      case 'json-datei': ladeHerunter(new Blob([letzterStand + '\n'], { type: 'application/json' }), dateiName('json')); break;
      case 'bild-menue': {
        const m = $('.ed-menue');
        m.hidden = !m.hidden;
        z.setAttribute('aria-expanded', String(!m.hidden));
        if (!m.hidden) m.querySelector('button').focus();
        break;
      }
      case 'bild': speichereBild(z.dataset.hintergrund); break;
      case 'foto-laden': $('#ed-foto-datei').click(); break;
      case 'foto-ausrichten': {
        const an = z.getAttribute('aria-pressed') !== 'true';
        z.setAttribute('aria-pressed', String(an));
        foto.setzeAusrichten(an);
        break;
      }
      case 'foto-zurueck': foto.zuruecksetzen(); break;
      case 'foto-weg': foto.entferne(); break;
      case 'kalibrieren': oeffneKalibrierung(); break;
      case 'kalib-standard': $('#ed-kalib-regler').value = String(CSS_PX_PRO_MM); zeigeKarte(); break;
      case 'kalib-ok': {
        const w = parseFloat($('#ed-kalib-regler').value);
        speicherSchreiben(SPEICHER_MASS, String(w));
        vorschau.setzeBildschirmMass(w);
        $('#ed-dlg-kalibrieren').close();
        toast('Maßstab gespeichert – „Echte Größe“ zeigt jetzt 1:1.');
        break;
      }
      default: break;
    }
  });

  // Felder
  const felder = $('#ed-felder');
  felder.addEventListener('click', (e) => {
    const chip = e.target.closest('[data-wert]');
    if (chip) {
      const pfad = chip.closest('[data-pfad]').dataset.pfad;
      const wert = chip.dataset.zahl === '1' ? Number(chip.dataset.wert) : chip.dataset.wert;
      merke();
      aendere(pfad, wert);
      zeichneFelder();
      zeichneKopf();
      return;
    }
    if (e.target.closest('[data-farbe-standard]')) {
      merke();
      aendere('stein.farbe', null);
      zeichneFelder();
    }
  });
  let schiebtSeit = null;
  felder.addEventListener('input', (e) => {
    const feld = e.target.closest('[data-pfad]');
    if (!feld) return;
    const pfad = feld.dataset.pfad;
    if (e.target.type === 'range') {
      if (!schiebtSeit) { merke(); schiebtSeit = Date.now(); }
      const w = parseFloat(e.target.value);
      const stellen = Number(feld.dataset.stellen || 0);
      $('input[type="text"]', feld).value = zahlText(w, stellen);
      e.target.style.setProperty('--anteil', `${((w - e.target.min) / (e.target.max - e.target.min || 1)) * 100}%`);
      aendere(pfad, w);
      const hinweis = $('.ed-hinweis', feld);
      const def = F.ABSCHNITTE.flatMap((a) => a.felder).find((f) => f.pfad === pfad && f.hinweis);
      if (hinweis && def) hinweis.textContent = def.hinweis(aktiveSpec(), w);
    } else if (e.target.type === 'color') {
      aendere('stein.farbe', e.target.value);
    }
  });
  felder.addEventListener('change', (e) => {
    const feld = e.target.closest('[data-pfad]');
    if (!feld) return;
    const pfad = feld.dataset.pfad;
    if (e.target.type === 'range') {
      schiebtSeit = null;
      zeichneFelder(); // Sichtbarkeit kann von Zahlen abhaengen
    } else if (e.target.type === 'text') {
      const roh = parseFloat(String(e.target.value).replace(',', '.'));
      const [min, max] = F.ZAHLEN[pfad] || [-Infinity, Infinity];
      if (Number.isFinite(roh)) {
        merke();
        aendere(pfad, Math.min(max, Math.max(min, roh)));
        if (roh < min || roh > max) toast(`Erlaubt sind ${zahlText(min, 2)} bis ${zahlText(max, 2)}.`);
      }
      zeichneFelder();
    } else if (e.target.type === 'checkbox') {
      merke();
      aendere(pfad, e.target.checked);
      zeichneFelder();
    } else if (e.target.type === 'color') {
      zeichneFelder();
    }
  });
  felder.addEventListener('keydown', (e) => {
    if (e.target.type === 'text' && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
      // Pfeiltasten im Zahlenfeld: um einen Schritt
      const feld = e.target.closest('[data-pfad]');
      const regler = $('input[type="range"]', feld);
      const schritt = parseFloat(regler.step) * (e.shiftKey ? 10 : 1) * (e.key === 'ArrowUp' ? 1 : -1);
      const w = parseFloat(String(e.target.value).replace(',', '.')) + schritt;
      const [min, max] = F.ZAHLEN[feld.dataset.pfad];
      merke();
      aendere(feld.dataset.pfad, Math.min(max, Math.max(min, Math.round(w / parseFloat(regler.step)) * parseFloat(regler.step))));
      zeichneFelder();
      e.preventDefault();
    } else if (e.target.type === 'text' && e.key === 'Enter') {
      e.target.blur();
    }
  });

  // Variantenname, Produktname, gemeinsam
  const name = $('#ed-variantenname');
  name.addEventListener('focus', () => merke());
  name.addEventListener('input', () => {
    aktiveSpec().name = name.value;
    const chip = $(`.ed-variante[data-index="${zustand.aktiv}"] span:last-child`);
    if (chip) chip.textContent = name.value || 'Ohne Namen';
    nachAenderung({ bauen: false });
  });
  name.addEventListener('change', () => { aktiveSpec().name = name.value.trim(); nachAenderung({ kopf: true, bauen: false }); });
  const prod = $('#ed-produktname');
  prod.addEventListener('input', () => { zustand.produktname = prod.value; speichereSpaeter(); });
  $('#ed-gemeinsam').addEventListener('change', (e) => setzeGemeinsam(e.target.checked));

  // Foto
  $('#ed-foto-datei').addEventListener('change', async (e) => {
    const datei = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!datei) return;
    try {
      await foto.lade(datei);
      toast('Foto liegt über der Vorschau. Mit „Ausrichten“ verschieben und skalieren.');
    } catch (err) { toast(err.message); }
  });
  $('.ed-foto-deckkraft input').addEventListener('input', (e) => foto.setzeDeckkraft(parseFloat(e.target.value)));
  // Foto per Ziehen auf die Buehne
  const buehne = $('#ed-buehne');
  buehne.addEventListener('dragover', (e) => { if ([...(e.dataTransfer?.items || [])].some((i) => i.kind === 'file')) { e.preventDefault(); buehne.classList.add('ziehen'); } });
  buehne.addEventListener('dragleave', () => buehne.classList.remove('ziehen'));
  buehne.addEventListener('drop', async (e) => {
    buehne.classList.remove('ziehen');
    const datei = e.dataTransfer?.files?.[0];
    if (!datei) return;
    e.preventDefault();
    try { await foto.lade(datei); } catch (err) { toast(err.message); }
  });

  // Import: Datei
  $('#ed-import-datei').addEventListener('change', async (e) => {
    const datei = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!datei) return;
    $('#ed-import-text').value = await datei.text();
  });
  $('#ed-kalib-regler').addEventListener('input', zeigeKarte);

  // Toast-Knopf
  $('.ed-toast-knopf').addEventListener('click', () => {
    $('.ed-toast').classList.remove('sichtbar');
    if (toastAktion) toastAktion();
  });

  // Dialoge: Klick auf den Hintergrund schliesst
  for (const d of $$('dialog')) {
    d.addEventListener('click', (e) => { if (e.target === d) d.close(); });
  }

  // Tastatur
  document.addEventListener('keydown', (e) => {
    const feldAktiv = /^(INPUT|TEXTAREA)$/.test(document.activeElement?.tagName || '') && document.activeElement.type !== 'range' && document.activeElement.type !== 'checkbox';
    if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === 'z' && !feldAktiv && !$('dialog[open]')) {
      e.preventDefault();
      rueckgaengig();
    }
    if (e.key === 'Escape') schliesseMenue();
  });
}

// ---------------------------------------------------------------- Start

function start() {
  const wurzel = document.querySelector('[data-editor]') || document.body;
  wurzel.insertAdjacentHTML('beforeend', geruest());

  vorschau = new Vorschau($('#ed-buehne'), {
    linealUnten: 46,
    onAenderung: (o) => { setzeSchalter('echteGroesse', o.echteGroesse); }
  });
  try {
    const a = JSON.parse(speicherLesen(SPEICHER_ANSICHT) || 'null');
    if (a) {
      vorschau.setze({ drehteller: !!a.drehteller, lineal: a.lineal !== false, bueste: a.bueste !== false, paar: a.paar !== false });
      for (const k of ['drehteller', 'lineal', 'bueste', 'paar']) setzeSchalter(k, vorschau.optionen[k]);
    }
  } catch { /* egal */ }
  const mass = leseMass();
  if (mass) vorschau.setzeBildschirmMass(mass);

  foto = new FotoAbgleich({
    ebene: $('.ed-foto-ebene'),
    daneben: $('.ed-foto-daneben'),
    bereich: $('.ed-buehne-bereich'),
    onAenderung: (f) => {
      $('.ed-foto-laden').hidden = f.geladen;
      $('.ed-foto-steuerung').hidden = !f.geladen;
      $('.ed-foto-deckkraft').hidden = f.modus !== 'darueber';
      $('[data-aktion="foto-ausrichten"]').hidden = f.modus !== 'darueber';
      $('[data-aktion="foto-zurueck"]').hidden = f.modus !== 'darueber';
      $('[data-aktion="foto-ausrichten"]').setAttribute('aria-pressed', String(f.ausrichten));
      $('.ed-ausrichten-hinweis').hidden = !(f.geladen && f.ausrichten && f.modus === 'darueber');
      const mini = $('.ed-foto-mini');
      mini.style.backgroundImage = f.url ? `url("${f.url}")` : '';
    }
  });

  verdrahte();

  // Anfangszustand: ?vorlage=id, sonst gespeicherter Entwurf, sonst Standardvorlage
  const p = new URLSearchParams(location.search);
  const entwurf = speicherLesen(SPEICHER);
  if (p.get('vorlage') && F.VORLAGEN[p.get('vorlage')]) {
    zustand.varianten = vorlageVarianten(p.get('vorlage'));
    zustand.vorlage = p.get('vorlage');
    zustand.produktname = F.VORLAGEN[zustand.vorlage].name;
  } else if (entwurf && !p.has('neu')) {
    try { stelleHer(JSON.parse(entwurf)); } catch { stelleHer({ varianten: vorlageVarianten(STANDARD_VORLAGE), vorlage: STANDARD_VORLAGE }); }
  } else {
    zustand.varianten = vorlageVarianten(STANDARD_VORLAGE);
    zustand.vorlage = STANDARD_VORLAGE;
    zustand.produktname = F.VORLAGEN[STANDARD_VORLAGE].name;
  }
  allesNeu();
  window.__editor = { zustand, vorschau, foto, F };
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
else start();
