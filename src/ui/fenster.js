// Anprobe-Fenster: DOM im Shadow DOM, Zustaende, Bedienelemente, Gesten,
// Fokusfalle. Enthaelt keine Ablauflogik (die liegt in app.js); alle
// Bedienungen werden ueber die Rueckrufe in `aktionen` gemeldet.
//
// Zustaende (data-zustand): intro | laden | live | foto | ergebnis | fehler

import { FENSTER_CSS } from './stil.js';
import { SYMBOLE, hinweisSymbol } from './symbole.js';
import { ANLEITUNG, FINGER_NAMEN, anleitungSvg, fingerWahlSvg } from './anleitung.js';

const SWATCH = {
  gold: 'radial-gradient(circle at 32% 28%, #FFF4D6 0%, #EBCB86 26%, #C9A05A 58%, #94702F 100%)',
  silber: 'radial-gradient(circle at 32% 28%, #FFFFFF 0%, #EDEFF1 30%, #BFC3C7 65%, #8A8F95 100%)',
  rosegold: 'radial-gradient(circle at 32% 28%, #FFEFE7 0%, #EEC2AD 30%, #CF937C 64%, #9A6553 100%)',
  weissgold: 'radial-gradient(circle at 32% 28%, #FFFFFF 0%, #F3EFE6 28%, #D2CBBC 64%, #A0988A 100%)'
};

const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (z) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[z]));

const istTouch = () => typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;

const VORLAGE = (shopName) => `
<div class="anprobe" data-zustand="intro" role="dialog" aria-modal="true" aria-labelledby="a-dialogtitel" hidden>
  <div class="a-schleier" data-aktion="schliessen"></div>
  <div class="a-fenster">
    <h2 id="a-dialogtitel" class="a-unsichtbar">Virtuelle Anprobe</h2>
    <div class="a-buehne" tabindex="-1" role="application" aria-roledescription="Anprobe-Ansicht"
         aria-label="Anprobe-Ansicht. Pfeiltasten verschieben den Schmuck, Plus und Minus ändern die Größe, 0 setzt zurück.">
      <div class="a-fotogrund"></div>
      <video class="a-video" playsinline muted autoplay disablepictureinpicture></video>
      <div class="a-blitz"></div>
    </div>

    <section class="a-seite a-intro" aria-labelledby="a-intro-titel">
      <div class="a-bild"><div class="a-anleitung"></div></div>
      <div class="a-inhalt">
        <div class="a-produktzeile"><img alt="" hidden><div class="a-produkt-text"><span class="a-produkt-name"></span><span class="a-produkt-preis"></span></div></div>
        <span class="a-label">Virtuelle Anprobe</span>
        <h3 class="a-titel" id="a-intro-titel"></h3>
        <ol class="a-schritte"></ol>
        <div class="a-aktionen">
          <button type="button" class="a-knopf" data-aktion="kameraStarten">${SYMBOLE.kamera}<span>Kamera starten</span></button>
          <button type="button" class="a-knopf zweit" data-aktion="fotoWaehlen">${SYMBOLE.foto}<span>Foto wählen</span></button>
        </div>
        <p class="a-datenschutz a-klein">${SYMBOLE.schloss}<span>Die Kamera wird nur auf deinem Gerät ausgewertet. Es werden keine Bilder gespeichert oder übertragen.</span></p>
      </div>
    </section>

    <section class="a-seite a-laden" aria-labelledby="a-laden-titel">
      <div class="a-inhalt">
        <div class="a-ladesymbol">${SYMBOLE.funkeln}</div>
        <span class="a-label">Einen Moment</span>
        <h3 class="a-titel" id="a-laden-titel">Die Anprobe wird vorbereitet</h3>
        <div class="a-fortschritt" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-labelledby="a-laden-titel">
          <div class="a-balken"><span></span></div>
          <div class="a-fortschritt-zeile"><span class="a-ladetext">Starte</span><span class="a-prozent">0 %</span></div>
        </div>
        <button type="button" class="a-textknopf" data-aktion="schliessen">Abbrechen</button>
      </div>
    </section>

    <div class="a-live">
      <div class="a-hinweis glas" role="status"><span class="a-hinweis-symbol"></span><span class="a-hinweis-text"></span></div>
      <div class="a-tipp"></div>
      <button type="button" class="a-rund glas a-zuruecksetzen" data-aktion="zuruecksetzen" aria-label="Position und Größe zurücksetzen">${SYMBOLE.zuruecksetzen}</button>
      <div class="a-fingerwahl glas" hidden><div class="a-fingergrafik"></div><span class="a-fingername"></span></div>
      <div class="a-unten">
        <div class="a-varianten glas" hidden>
          <div class="a-swatches" role="radiogroup" aria-label="Variante wählen"></div>
          <span class="a-variantenname" aria-hidden="true"></span>
        </div>
        <div class="a-leiste">
          <button type="button" class="a-rund glas a-links" data-aktion="fotoWaehlen" aria-label="Foto wählen">${SYMBOLE.foto}</button>
          <button type="button" class="a-ausloeser" data-aktion="ausloesen" aria-label="Foto aufnehmen">${SYMBOLE.speichern}</button>
          <button type="button" class="a-rund glas a-rechts" data-aktion="kameraWechseln" aria-label="Kamera wechseln" hidden>${SYMBOLE.wechseln}</button>
        </div>
      </div>
    </div>

    <section class="a-seite a-ergebnis" aria-labelledby="a-ergebnis-titel">
      <div class="a-inhalt">
        <div class="a-rahmen"><img alt="Deine Anprobe"></div>
        <div class="a-ergebnis-text">
          <span class="a-label">${esc(shopName)} · Anprobe</span>
          <h3 class="a-titel" id="a-ergebnis-titel">Deine Anprobe</h3>
          <p class="a-text a-ergebnis-produkt"></p>
          <button type="button" class="a-knopf a-warenkorb" data-aktion="warenkorb" hidden>${SYMBOLE.tasche}<span>In den Warenkorb</span></button>
          <div class="a-knoepfe-paar">
            <button type="button" class="a-knopf" data-aktion="teilen" hidden>${SYMBOLE.teilen}<span>Teilen</span></button>
            <button type="button" class="a-knopf zweit" data-aktion="speichern">${SYMBOLE.speichern}<span>Speichern</span></button>
          </div>
          <button type="button" class="a-textknopf" data-aktion="zurueck">Zurück zur Anprobe</button>
        </div>
      </div>
    </section>

    <section class="a-seite a-fehler" role="alert" aria-labelledby="a-fehler-titel">
      <div class="a-inhalt">
        ${SYMBOLE.fehler}
        <h3 class="a-titel" id="a-fehler-titel"></h3>
        <p class="a-text a-fehler-text"></p>
        <div class="a-aktionen">
          <button type="button" class="a-knopf" data-aktion="fotoWaehlen">${SYMBOLE.foto}<span>Foto wählen</span></button>
          <button type="button" class="a-knopf zweit" data-aktion="erneut"><span>Erneut versuchen</span></button>
        </div>
      </div>
    </section>

    <header class="a-kopf">
      <div class="a-produkt"><img alt="" hidden><div class="a-produkt-text"><span class="a-produkt-name"></span><span class="a-produkt-preis"></span></div></div>
      <button type="button" class="a-rund a-schliessen" data-aktion="schliessen" aria-label="Anprobe schließen">${SYMBOLE.schliessen}</button>
    </header>
    <div class="a-unsichtbar a-ansage" aria-live="polite"></div>
    <input type="file" accept="image/*" class="a-unsichtbar a-datei" tabindex="-1" aria-hidden="true">
  </div>
</div>`;

export class Fenster {
  /**
   * wurzel: Element im Shadow DOM. aktionen: { kameraStarten, fotoGewaehlt(file), schliessen,
   * ausloesen, kameraWechseln, variante(i), finger(key), teilen, speichern, warenkorb, zurueck, erneut,
   * zurKamera, ziehen({ phase, clientX, clientY }), skalieren(faktor), zuruecksetzen, verschieben(dxCss, dyCss) }
   */
  constructor(wurzel, { shopName = 'ARLISE', aktionen = {} } = {}) {
    this.wurzel = wurzel;
    this.aktionen = aktionen;
    this.zustand = 'intro';
    this.produkt = null;
    this.vorherFokus = null;
    this.tippTimer = 0;

    const stil = document.createElement('style');
    stil.textContent = FENSTER_CSS;
    wurzel.appendChild(stil);
    const halter = document.createElement('div');
    halter.innerHTML = VORLAGE(shopName);
    this.el = halter.firstElementChild;
    wurzel.appendChild(this.el);

    const $ = (s) => this.el.querySelector(s);
    this.$ = $;
    this.buehne = $('.a-buehne');
    this.video = $('.a-video');
    this.fotogrund = $('.a-fotogrund');
    this.datei = $('.a-datei');
    this.canvas = null;

    this.el.addEventListener('click', (e) => this.beiKlick(e));
    this.el.addEventListener('keydown', (e) => this.beiTaste(e));
    // Tasten, waehrend der Fokus (noch) ausserhalb des Dialogs liegt
    this.beiTasteAussen = (e) => {
      if (!this.istOffen || e.composedPath().includes(this.el)) return;
      if (e.key === 'Escape') { e.preventDefault(); this.melde('schliessen'); }
      else if (e.key === 'Tab') { e.preventDefault(); const l = this.fokussierbare(); if (l[0]) l[0].focus({ preventScroll: true }); }
    };
    this.datei.addEventListener('change', () => {
      const f = this.datei.files && this.datei.files[0];
      this.datei.value = '';
      if (f) this.melde('fotoGewaehlt', f);
    });
    this.richteGestenEin();
  }

  melde(name, ...werte) {
    const f = this.aktionen[name];
    if (typeof f === 'function') f(...werte);
  }

  // ---------------------------------------------------------------- Oeffnen / Schliessen

  oeffne(produkt) {
    this.produkt = produkt;
    const art = produkt.art;
    for (const sel of ['.a-produkt', '.a-produktzeile']) {
      const box = this.$(sel);
      box.querySelector('.a-produkt-name').textContent = produkt.titel;
      box.querySelector('.a-produkt-preis').textContent = produkt.preis || '';
      const img = box.querySelector('img');
      if (produkt.bildUrl) {
        img.hidden = false;
        img.onerror = () => { img.hidden = true; };
        img.src = produkt.bildUrl;
      } else {
        img.hidden = true;
        img.removeAttribute('src');
      }
    }
    const a = ANLEITUNG[art] || ANLEITUNG.ring;
    this.$('#a-intro-titel').textContent = a.titel;
    this.$('.a-schritte').innerHTML = a.schritte.map((s) => `<li>${esc(s)}</li>`).join('');
    const anl = this.$('.a-anleitung');
    anl.dataset.art = art;
    anl.innerHTML = anleitungSvg(art);
    this.$('.a-ergebnis-produkt').textContent = [produkt.titel, produkt.preis].filter(Boolean).join(' · ');
    this.$('#a-dialogtitel').textContent = `Virtuelle Anprobe: ${produkt.titel}`;
    this.setzeHinweis(null);
    this.setzeAnpassungAktiv(false);

    // zuletzt fokussiertes Element merken (auch innerhalb fremder Shadow-Roots, z. B. der Knopf)
    const root = this.wurzel.getRootNode();
    let aktiv = document.activeElement;
    while (aktiv && aktiv.shadowRoot && aktiv.shadowRoot.activeElement) aktiv = aktiv.shadowRoot.activeElement;
    this.vorherFokus = aktiv && aktiv !== document.body ? aktiv : null;
    if (root && root.host && root.host.contains && root.host.contains(aktiv)) this.vorherFokus = null;
    this.oeffnungen = (this.oeffnungen || 0) + 1;
    this.el.hidden = false;
    this.zustand = null;   // erzwingt Fokus und Ansage
    this.setzeZustand('intro');
    document.addEventListener('keydown', this.beiTasteAussen, true);
    // naechster Frame: Einblenden
    requestAnimationFrame(() => requestAnimationFrame(() => this.el.classList.add('offen')));
  }

  schliesse() {
    const oeffnung = this.oeffnungen;
    document.removeEventListener('keydown', this.beiTasteAussen, true);
    return new Promise((fertig) => {
      this.el.classList.remove('offen');
      clearTimeout(this.tippTimer);
      const ende = () => {
        if (oeffnung !== this.oeffnungen) { fertig(); return; }   // inzwischen neu geoeffnet
        this.el.hidden = true;
        this.$('.a-anleitung').innerHTML = '';
        const img = this.$('.a-rahmen img');
        img.removeAttribute('src');
        this.fotogrund.style.backgroundImage = '';
        if (this.vorherFokus && this.vorherFokus.isConnected) {
          try { this.vorherFokus.focus({ preventScroll: true }); } catch { /* egal */ }
        }
        this.vorherFokus = null;
        fertig();
      };
      const reduziert = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
      setTimeout(ende, reduziert ? 0 : 280);
    });
  }

  get istOffen() {
    return !this.el.hidden;
  }

  // ---------------------------------------------------------------- Zustaende

  setzeZustand(zustand) {
    const vorher = this.zustand;
    this.zustand = zustand;
    this.el.dataset.zustand = zustand;
    const live = zustand === 'live' || zustand === 'foto';
    this.buehne.tabIndex = live ? 0 : -1;
    const links = this.$('.a-links');
    if (zustand === 'foto') {
      links.setAttribute('aria-label', 'Anderes Foto wählen');
      this.$('.a-ausloeser').setAttribute('aria-label', 'Bild speichern');
    } else if (zustand === 'live') {
      links.setAttribute('aria-label', 'Foto wählen');
      this.$('.a-ausloeser').setAttribute('aria-label', 'Foto aufnehmen');
    }
    if (zustand !== vorher) {
      const ansage = { laden: 'Die Anprobe wird vorbereitet.', live: 'Die Kamera ist aktiv.', foto: 'Dein Foto wird angezeigt.', ergebnis: 'Deine Anprobe ist fertig.' }[zustand];
      if (ansage) this.sage(ansage);
      // Fokus auf das wichtigste Element des neuen Zustands
      const ziel = {
        intro: '[data-aktion="kameraStarten"]', laden: '.a-laden .a-textknopf', live: '.a-ausloeser', foto: '.a-ausloeser',
        ergebnis: '.a-ergebnis .a-knopf:not([hidden])', fehler: '.a-fehler .a-knopf:not([hidden])'
      }[zustand];
      // erst nach dem Sichtbarwerden fokussierbar (visibility)
      requestAnimationFrame(() => {
        const el = ziel && this.$(ziel);
        if (el && this.zustand === zustand) {
          try { el.focus({ preventScroll: true }); } catch { /* egal */ }
        }
      });
    }
  }

  setzeFortschritt(anteil, text) {
    const p = Math.max(0, Math.min(1, anteil || 0));
    const prozent = Math.round(p * 100);
    this.$('.a-balken > span').style.transform = `scaleX(${p})`;
    this.$('.a-prozent').textContent = `${prozent} %`;
    this.$('.a-fortschritt').setAttribute('aria-valuenow', String(prozent));
    if (text) this.$('.a-ladetext').textContent = text;
  }

  /** Videobild hinter dem Ladebildschirm (weichgezeichnet) bzw. darunter im Live-Zustand. */
  setzeVideo(stream, spiegel) {
    this.video.srcObject = stream || null;
    this.video.classList.toggle('gespiegelt', Boolean(spiegel));
  }

  setzeFotoGrund(url) {
    this.fotogrund.style.backgroundImage = url ? `url("${url}")` : '';
  }

  /** Neues Canvas fuer die Buehne (altes wird entfernt). */
  neuesCanvas() {
    if (this.canvas) this.canvas.remove();
    const c = document.createElement('canvas');
    c.className = 'a-canvas';
    c.setAttribute('aria-hidden', 'true');
    this.buehne.insertBefore(c, this.$('.a-blitz'));
    this.canvas = c;
    return c;
  }

  entferneCanvas() {
    if (this.canvas) this.canvas.remove();
    this.canvas = null;
  }

  // ---------------------------------------------------------------- Live-Elemente

  /** Wird jeden Frame aufgerufen; aendert das DOM nur bei neuem Hinweis. */
  setzeHinweis(hinweis) {
    const schluessel = hinweis && hinweis.text ? `${hinweis.code}|${hinweis.text}` : '';
    if (schluessel === this.hinweisSchluessel) return;
    this.hinweisSchluessel = schluessel;
    const box = this.$('.a-hinweis');
    if (!schluessel) {
      box.classList.remove('an');
      return;
    }
    this.$('.a-hinweis-symbol').innerHTML = hinweisSymbol(hinweis.code);
    this.$('.a-hinweis-text').textContent = hinweis.text;
    box.classList.add('an');
  }

  setzeVarianten(varianten, index) {
    const box = this.$('.a-varianten');
    const liste = this.$('.a-swatches');
    if (!varianten || varianten.length < 2) {
      box.hidden = true;
      liste.innerHTML = '';
      return;
    }
    box.hidden = false;
    liste.innerHTML = varianten.map((v, i) => {
      const metall = (v.spec && v.spec.metall) || 'gold';
      const an = i === index;
      return `<button type="button" class="a-swatch" role="radio" aria-checked="${an}" tabindex="${an ? 0 : -1}" data-variante="${i}" aria-label="${esc(v.name)}" title="${esc(v.name)}"><i style="background:${SWATCH[metall] || SWATCH.gold}"></i></button>`;
    }).join('');
    this.$('.a-variantenname').textContent = varianten[index] ? varianten[index].name : '';
  }

  /** Fingerwahl auf die rechte Seite (true) bzw. links, damit sie den Schmuck nicht verdeckt. */
  setzeFingerSeite(rechts) {
    this.$('.a-fingerwahl').classList.toggle('rechts', Boolean(rechts));
  }

  /** Bildschirmrechteck der Fingerwahl (oder null, wenn verborgen). */
  fingerRechteck() {
    const box = this.$('.a-fingerwahl');
    return box.hidden ? null : box.getBoundingClientRect();
  }

  /** Ladeseite als Milchglas ueber dem laufenden Kamerabild (sonst deckend). */
  setzeMilchglas(an) {
    this.$('.a-laden').classList.toggle('milchglas', Boolean(an));
  }

  /** key: Fingername oder null (keine Fingerwahl). */
  setzeFinger(key) {
    const box = this.$('.a-fingerwahl');
    if (!key) {
      box.hidden = true;
      return;
    }
    box.hidden = false;
    const fokusDrin = this.wurzel.getRootNode().activeElement;
    const hatteFokus = fokusDrin && box.contains(fokusDrin);
    this.$('.a-fingergrafik').innerHTML = fingerWahlSvg(key);
    this.$('.a-fingername').textContent = FINGER_NAMEN[key] || '';
    if (hatteFokus) {
      const neu = box.querySelector(`[data-finger="${key}"]`);
      if (neu) neu.focus({ preventScroll: true });
    }
  }

  setzeKameraWechsel(sichtbar) {
    this.$('.a-rechts').hidden = !sichtbar;
  }

  /** Foto-Modus: rechts "Kamera" statt "Kamera wechseln". */
  setzeFotoModus(foto, kameraMoeglich = true) {
    const r = this.$('.a-rechts');
    if (foto) {
      r.dataset.aktion = 'zurKamera';
      r.setAttribute('aria-label', 'Zur Live-Kamera');
      r.innerHTML = SYMBOLE.kamera;
      r.hidden = !kameraMoeglich;
    } else {
      r.dataset.aktion = 'kameraWechseln';
      r.setAttribute('aria-label', 'Kamera wechseln');
      r.innerHTML = SYMBOLE.wechseln;
    }
  }

  setzeAnpassungAktiv(aktiv) {
    this.$('.a-zuruecksetzen').classList.toggle('an', Boolean(aktiv));
  }

  setzeAusloeserAktiv(aktiv) {
    this.$('.a-ausloeser').disabled = !aktiv;
  }

  /** Kurzer Gesten-Tipp ueber der Leiste. */
  zeigeTipp(text, dauerMs = 5200) {
    const t = this.$('.a-tipp');
    t.textContent = text || (istTouch()
      ? 'Ziehen: verschieben · Zwei Finger: Größe'
      : 'Ziehen: verschieben · Mausrad: Größe · Doppelklick: zurück');
    clearTimeout(this.tippTimer);
    requestAnimationFrame(() => t.classList.add('an'));
    this.tippTimer = setTimeout(() => t.classList.remove('an'), dauerMs);
  }

  blitz() {
    const b = this.$('.a-blitz');
    b.classList.remove('an');
    void b.offsetWidth;
    b.classList.add('an');
  }

  /** warenkorb: Kauf-Aktion fuer die angeprobte Variante zeigen (dann Teilen/Speichern zweitrangig). */
  setzeErgebnis(url, { teilenMoeglich, warenkorb = false }) {
    const img = this.$('.a-rahmen img');
    img.src = url;
    const teilen = this.$('[data-aktion="teilen"]');
    teilen.hidden = !teilenMoeglich;
    teilen.classList.toggle('zweit', Boolean(warenkorb));
    const speichern = this.$('[data-aktion="speichern"]');
    speichern.classList.toggle('zweit', Boolean(teilenMoeglich || warenkorb));
    this.$('[data-aktion="warenkorb"]').hidden = !warenkorb;
    this.setzeWarenkorb('bereit');
  }

  /** Zustand der Kauf-Aktion: 'bereit' | 'laeuft' | 'fertig' | 'fehler'. */
  setzeWarenkorb(stand) {
    const k = this.$('[data-aktion="warenkorb"]');
    if (!k) return;
    const texte = {
      bereit: 'In den Warenkorb',
      laeuft: 'Wird hinzugefügt …',
      fertig: 'Im Warenkorb · Ansehen',
      fehler: 'Bitte auf der Produktseite wählen'
    };
    k.querySelector('span').textContent = texte[stand] || texte.bereit;
    k.dataset.stand = stand;
    if (stand === 'laeuft') k.setAttribute('aria-busy', 'true');
    else k.removeAttribute('aria-busy');
  }

  /** art: 'verweigert' | 'keine-kamera' | 'allgemein'; fotoMoeglich blendet "Foto wählen" ein. */
  setzeFehler({ titel, text, foto = true, erneut = true }) {
    this.$('#a-fehler-titel').textContent = titel;
    this.$('.a-fehler-text').textContent = text;
    this.$('.a-fehler [data-aktion="fotoWaehlen"]').hidden = !foto;
    this.$('.a-fehler [data-aktion="erneut"]').hidden = !erneut;
    this.$('.a-fehler [data-aktion="erneut"]').classList.toggle('zweit', foto);
  }

  waehleFoto() {
    this.datei.click();
  }

  sage(text) {
    const a = this.$('.a-ansage');
    a.textContent = '';
    setTimeout(() => { a.textContent = text; }, 30);
  }

  // ---------------------------------------------------------------- Ereignisse

  beiKlick(e) {
    const ziel = e.target.closest('[data-aktion], [data-variante], [data-finger]');
    if (!ziel || !this.el.contains(ziel)) return;
    if (ziel.dataset.variante != null) {
      this.melde('variante', Number(ziel.dataset.variante));
      return;
    }
    if (ziel.dataset.finger) {
      this.melde('finger', ziel.dataset.finger);
      return;
    }
    const aktion = ziel.dataset.aktion;
    if (aktion === 'fotoWaehlen') this.waehleFoto();
    else this.melde(aktion);
  }

  beiTaste(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      this.melde('schliessen');
      return;
    }
    if (e.key === 'Tab') {
      this.fokusFalle(e);
      return;
    }
    const pfad = e.composedPath();
    // Pfeiltasten in Radiogruppen (Varianten, Finger)
    const radio = pfad.find((n) => n instanceof Element && n.getAttribute && n.getAttribute('role') === 'radio');
    if (radio && /^(ArrowLeft|ArrowRight|ArrowUp|ArrowDown)$/.test(e.key)) {
      e.preventDefault();
      const gruppe = [...radio.closest('[role="radiogroup"]').querySelectorAll('[role="radio"]')];
      const i = gruppe.indexOf(radio);
      const schritt = e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 1;
      const naechstes = gruppe[(i + schritt + gruppe.length) % gruppe.length];
      if (naechstes.dataset.variante != null) this.melde('variante', Number(naechstes.dataset.variante));
      else if (naechstes.dataset.finger) this.melde('finger', naechstes.dataset.finger);
      requestAnimationFrame(() => {
        const sel = naechstes.dataset.variante != null ? `[data-variante="${naechstes.dataset.variante}"]` : `[data-finger="${naechstes.dataset.finger}"]`;
        const neu = this.$(sel);
        if (neu) neu.focus({ preventScroll: true });
      });
      return;
    }
    if (radio && (e.key === 'Enter' || e.key === ' ') && radio.dataset.finger) {
      e.preventDefault();
      this.melde('finger', radio.dataset.finger);
      return;
    }
    // Tastatur auf der Buehne: verschieben, Groesse, zuruecksetzen
    if (pfad.includes(this.buehne) && (this.zustand === 'live' || this.zustand === 'foto')) {
      const s = e.shiftKey ? 12 : 4;
      const zug = { ArrowLeft: [-s, 0], ArrowRight: [s, 0], ArrowUp: [0, -s], ArrowDown: [0, s] }[e.key];
      if (zug) { e.preventDefault(); this.melde('verschieben', zug[0], zug[1]); return; }
      if (e.key === '+' || e.key === '=') { e.preventDefault(); this.melde('skalieren', 1.05); return; }
      if (e.key === '-' || e.key === '_') { e.preventDefault(); this.melde('skalieren', 1 / 1.05); return; }
      if (e.key === '0') { e.preventDefault(); this.melde('zuruecksetzen'); }
    }
  }

  fokussierbare() {
    const kandidaten = this.el.querySelectorAll('button, [tabindex], input:not(.a-datei), a[href]');
    return [...kandidaten].filter((el) => {
      if (el.disabled || el.tabIndex < 0 || el.hidden) return false;
      if (!el.getClientRects().length) return false;
      const st = getComputedStyle(el);
      return st.visibility === 'visible' && st.display !== 'none';
    });
  }

  fokusFalle(e) {
    const liste = this.fokussierbare();
    if (!liste.length) { e.preventDefault(); return; }
    const aktiv = this.wurzel.getRootNode().activeElement;
    const i = liste.indexOf(aktiv);
    let ziel = null;
    if (e.shiftKey) ziel = i <= 0 ? liste[liste.length - 1] : null;
    else ziel = i === -1 || i === liste.length - 1 ? liste[0] : null;
    if (ziel) {
      e.preventDefault();
      ziel.focus({ preventScroll: true });
    }
  }

  /** Fokus zurueck in den Dialog holen (z. B. wenn er von aussen kam). */
  fokusHalten(e) {
    if (!this.istOffen) return;
    const host = this.wurzel.getRootNode().host;
    if (host && !e.composedPath().includes(host)) {
      const liste = this.fokussierbare();
      if (liste[0]) liste[0].focus({ preventScroll: true });
    }
  }

  // ---------------------------------------------------------------- Gesten auf der Buehne

  richteGestenEin() {
    const b = this.buehne;
    const zeiger = new Map();
    let pinchAbstand = 0;
    let letzterTipp = { t: 0, x: 0, y: 0 };
    let bewegt = false;
    let start = null;
    const aktiv = () => this.zustand === 'live' || this.zustand === 'foto';
    const abstand = () => {
      const [a, c] = [...zeiger.values()];
      return Math.hypot(a.x - c.x, a.y - c.y);
    };

    b.addEventListener('pointerdown', (e) => {
      if (!aktiv() || e.target.closest('button')) return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      try { b.setPointerCapture(e.pointerId); } catch { /* egal */ }
      zeiger.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (zeiger.size === 1) {
        bewegt = false;
        start = { x: e.clientX, y: e.clientY, t: performance.now() };
        this.melde('ziehen', { phase: 'start', clientX: e.clientX, clientY: e.clientY });
      } else if (zeiger.size === 2) {
        this.melde('ziehen', { phase: 'ende', clientX: e.clientX, clientY: e.clientY });
        pinchAbstand = abstand();
        bewegt = true;
      }
    });
    b.addEventListener('pointermove', (e) => {
      if (!zeiger.has(e.pointerId)) return;
      zeiger.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (zeiger.size === 1) {
        if (start && Math.hypot(e.clientX - start.x, e.clientY - start.y) > 6) bewegt = true;
        if (bewegt) this.melde('ziehen', { phase: 'bewegung', clientX: e.clientX, clientY: e.clientY });
      } else if (zeiger.size === 2 && pinchAbstand > 0) {
        const d = abstand();
        if (d > 0) {
          this.melde('skalieren', d / pinchAbstand);
          pinchAbstand = d;
        }
      }
    });
    const ende = (e) => {
      if (!zeiger.has(e.pointerId)) return;
      zeiger.delete(e.pointerId);
      if (zeiger.size === 0) {
        this.melde('ziehen', { phase: 'ende', clientX: e.clientX, clientY: e.clientY });
        // Doppeltipp: zwei kurze Tipps nah beieinander
        const jetzt = performance.now();
        if (!bewegt && start && jetzt - start.t < 300 && e.type === 'pointerup') {
          if (jetzt - letzterTipp.t < 320 && Math.hypot(e.clientX - letzterTipp.x, e.clientY - letzterTipp.y) < 40) {
            this.melde('zuruecksetzen');
            letzterTipp = { t: 0, x: 0, y: 0 };
          } else {
            letzterTipp = { t: jetzt, x: e.clientX, y: e.clientY };
          }
        }
        start = null;
      } else if (zeiger.size === 1) {
        // vom Pinch zurueck zum Ziehen
        const [p] = [...zeiger.values()];
        this.melde('ziehen', { phase: 'start', clientX: p.x, clientY: p.y });
      }
    };
    b.addEventListener('pointerup', ende);
    b.addEventListener('pointercancel', ende);
    b.addEventListener('wheel', (e) => {
      if (!aktiv()) return;
      e.preventDefault();
      const delta = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
      this.melde('skalieren', Math.exp(-delta * 0.0015));
    }, { passive: false });
    // Safari: eigene Pinch-Gesten der Seite unterdruecken
    b.addEventListener('gesturestart', (e) => e.preventDefault());
  }
}
