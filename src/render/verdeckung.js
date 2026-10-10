/**
 * Verdeckung durch den Koerper.
 *
 * PrimitivSatz: zeichnet Primitive (kapsel, ellipsenzylinder, ellipsoid, netz)
 * mit einem beliebigen Material. Alle Zylinder und alle Kugeln liegen in je
 * einem InstancedMesh (zwei Draw-Calls), Netze in wiederverwendeten Meshes.
 * Pro Frame werden nur vorhandene Puffer beschrieben.
 *
 * Verwendung:
 *  - Verdecker: Material schreibt nur Tiefe (colorWrite false)
 *  - Schattenflaechen: Material aus Kontaktschatten.material() (licht.js)
 *
 * WeicheVerdeckung: optionale weiche Kante. Die Verdecker werden in eine
 * Tiefentextur gezeichnet; Schmuckmaterialien vergleichen ihre Tiefe mit
 * 9 Abtastpunkten im Umkreis weniger Pixel und blenden weich aus. So
 * entstehen statt harter Schnittkanten an Finger, Hals und Ohrlaeppchen
 * ruhige, leicht weiche Uebergaenge (die echte Koerperkante im Kamerabild
 * ist ebenfalls nie pixelscharf).
 */
import * as THREE from 'three';

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _v = new THREE.Vector3();
const _x = new THREE.Vector3();
const _y = new THREE.Vector3();
const _z = new THREE.Vector3();
const _s = new THREE.Vector3();
const _c = new THREE.Vector3();
const _Y = new THREE.Vector3(0, 1, 0);

let zylinderGeo = null;
let kugelGeo = null;
let geoNutzer = 0;

function holeGeometrien() {
  if (!zylinderGeo) {
    // Einheitszylinder (Radius 1, Hoehe 1, entlang Y) und Einheitskugel
    zylinderGeo = new THREE.CylinderGeometry(1, 1, 1, 24, 1, false);
    kugelGeo = new THREE.SphereGeometry(1, 24, 16);
  }
  geoNutzer++;
  return { zylinderGeo, kugelGeo };
}

function gibGeometrienFrei() {
  geoNutzer--;
  if (geoNutzer <= 0 && zylinderGeo) {
    zylinderGeo.dispose();
    kugelGeo.dispose();
    zylinderGeo = kugelGeo = null;
    geoNutzer = 0;
  }
}

/** Material, das nur in den Tiefenpuffer schreibt. */
export function tiefenMaterial({ doppelseitig = false } = {}) {
  const m = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: true, depthTest: true });
  m.side = doppelseitig ? THREE.DoubleSide : THREE.FrontSide;
  m.name = 'verdecker';
  return m;
}

export class PrimitivSatz {
  /**
   * material: fuer Zylinder/Kugeln; netzMaterial: fuer Netze (Standard: dasselbe,
   * bei Verdeckern doppelseitig, weil die Dreiecksrichtung offen ist).
   */
  constructor(material, { kapazitaet = 48, name = 'primitive', schatten = false, netzMaterial = null, renderOrder = 0 } = {}) {
    this.material = material;
    this.netzMaterial = netzMaterial || material;
    this.schatten = schatten;
    this.renderOrder = renderOrder;
    this.objekt = new THREE.Group();
    this.objekt.name = name;
    const { zylinderGeo: zg, kugelGeo: kg } = holeGeometrien();
    this.zylinderGeo = zg;
    this.kugelGeo = kg;
    this.zylinder = null;
    this.kugeln = null;
    this.baueInstanzen(kapazitaet, kapazitaet * 2);
    this.netze = [];
    this.skala = 1;
  }

  baueInstanzen(nZyl, nKug) {
    for (const alt of [this.zylinder, this.kugeln]) {
      if (alt) {
        this.objekt.remove(alt);
        alt.dispose();
      }
    }
    this.zylinder = this.instanz(this.zylinderGeo, nZyl, 'zylinder');
    this.kugeln = this.instanz(this.kugelGeo, nKug, 'kugeln');
  }

  instanz(geo, n, name) {
    const im = new THREE.InstancedMesh(geo, this.material, n);
    im.name = name;
    im.count = 0;
    im.frustumCulled = false;
    im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    im.receiveShadow = this.schatten;
    im.castShadow = false;
    im.renderOrder = this.renderOrder;
    this.objekt.add(im);
    return im;
  }

  netzMesh(i) {
    let n = this.netze[i];
    if (!n) {
      const geo = new THREE.BufferGeometry();
      n = new THREE.Mesh(geo, this.netzMaterial);
      n.name = `netz${i}`;
      n.frustumCulled = false;
      n.receiveShadow = this.schatten;
      n.renderOrder = this.renderOrder;
      n.userData.index = null;
      this.netze.push(n);
      this.objekt.add(n);
    }
    return n;
  }

  /**
   * Primitive des Frames uebernehmen. skala verkleinert/vergroessert Radien
   * (z. B. 0.97, damit Kanten am Koerper nicht vorstehen).
   */
  aktualisiere(primitive, skala = 1) {
    const liste = Array.isArray(primitive) ? primitive : [];
    // Bedarf zaehlen (selten waechst der Pool)
    let nZ = 0;
    let nK = 0;
    for (const p of liste) {
      if (!p) continue;
      if (p.typ === 'kapsel') { nZ++; nK += 2; } else if (p.typ === 'ellipsenzylinder') nZ++;
      else if (p.typ === 'ellipsoid') nK++;
    }
    if (nZ > this.zylinder.instanceMatrix.count || nK > this.kugeln.instanceMatrix.count) {
      this.baueInstanzen(Math.max(nZ, this.zylinder.instanceMatrix.count) * 2, Math.max(nK, this.kugeln.instanceMatrix.count) * 2);
    }

    let iz = 0;
    let ik = 0;
    let inetz = 0;
    for (const p of liste) {
      if (!p) continue;
      switch (p.typ) {
        case 'kapsel': {
          const r = p.r * skala;
          _v.subVectors(p.b, p.a);
          const l = _v.length();
          if (l > 1e-6) {
            _q.setFromUnitVectors(_Y, _v.divideScalar(l));
            _c.addVectors(p.a, p.b).multiplyScalar(0.5);
            _m.compose(_c, _q, _s.set(r, l, r));
            this.zylinder.setMatrixAt(iz++, _m);
          }
          _q.identity();
          _s.set(r, r, r);
          this.kugeln.setMatrixAt(ik++, _m.compose(p.a, _q, _s));
          this.kugeln.setMatrixAt(ik++, _m.compose(p.b, _q, _s));
          break;
        }
        case 'ellipsenzylinder': {
          _y.subVectors(p.b, p.a);
          const l = _y.length();
          if (l < 1e-6) break;
          _y.divideScalar(l);
          _x.copy(p.quer).addScaledVector(_y, -p.quer.dot(_y));
          if (_x.lengthSq() < 1e-10) _x.set(1, 0, 0).addScaledVector(_y, -_y.x);
          _x.normalize();
          _z.crossVectors(_x, _y);
          _m.makeBasis(_x, _y, _z).scale(_s.set(p.rQuer * skala, l, p.rTiefe * skala));
          _c.addVectors(p.a, p.b).multiplyScalar(0.5);
          _m.setPosition(_c);
          this.zylinder.setMatrixAt(iz++, _m);
          break;
        }
        case 'ellipsoid': {
          _s.copy(p.radien).multiplyScalar(skala);
          this.kugeln.setMatrixAt(ik++, _m.compose(p.mitte, p.quaternion, _s));
          break;
        }
        case 'netz': {
          if (!p.positionen || !p.index) break;
          const n = this.netzMesh(inetz++);
          const geo = n.geometry;
          let pos = geo.getAttribute('position');
          if (!pos || pos.array.length !== p.positionen.length) {
            pos = new THREE.BufferAttribute(new Float32Array(p.positionen.length), 3);
            pos.setUsage(THREE.DynamicDrawUsage);
            geo.setAttribute('position', pos);
          }
          pos.array.set(p.positionen);
          pos.needsUpdate = true;
          if (n.userData.index !== p.index) {
            geo.setIndex(new THREE.BufferAttribute(p.index, 1));
            n.userData.index = p.index;
          }
          n.visible = true;
          break;
        }
        default:
          break;
      }
    }
    this.zylinder.count = iz;
    this.kugeln.count = ik;
    this.zylinder.instanceMatrix.needsUpdate = iz > 0;
    this.kugeln.instanceMatrix.needsUpdate = ik > 0;
    this.zylinder.visible = iz > 0;
    this.kugeln.visible = ik > 0;
    for (let i = inetz; i < this.netze.length; i++) this.netze[i].visible = false;
    this.anzahl = iz + ik + inetz;
  }

  leeren() {
    this.aktualisiere(null);
  }

  dispose() {
    this.zylinder.dispose();
    this.kugeln.dispose();
    for (const n of this.netze) n.geometry.dispose();
    this.netze.length = 0;
    this.objekt.clear();
    if (this.zylinderGeo) {
      this.zylinderGeo = this.kugelGeo = null;
      gibGeometrienFrei();
    }
  }
}

/* ------------------------------------------------------------------------ */
/* Weiche Verdeckungskante                                                   */
/* ------------------------------------------------------------------------ */

const VERDECK_GLSL = /* glsl */ `
uniform sampler2D verdeckTiefe;
uniform vec4 verdeckParam;      // x: aktiv, y: Radius (Pixel), z: Toleranz (Tiefe), w: Mindestsicht
uniform vec2 verdeckAufloesung; // Zeichenpuffer in Pixeln
float verdeckTap(vec2 uv, float z) {
  float d = texture2D(verdeckTiefe, uv).r;
  return smoothstep(-verdeckParam.z, verdeckParam.z, d - z);
}
float verdeckSicht() {
  if (verdeckParam.x < 0.5) return 1.0;
  vec2 px = 1.0 / verdeckAufloesung;
  vec2 uv = gl_FragCoord.xy * px;
  float z = gl_FragCoord.z;
  vec2 r = verdeckParam.y * px;
  vec2 rd = r * 0.7071;
  float s = 2.0 * verdeckTap(uv, z);
  s += verdeckTap(uv + vec2(r.x, 0.0), z);
  s += verdeckTap(uv - vec2(r.x, 0.0), z);
  s += verdeckTap(uv + vec2(0.0, r.y), z);
  s += verdeckTap(uv - vec2(0.0, r.y), z);
  s += verdeckTap(uv + rd, z);
  s += verdeckTap(uv - rd, z);
  s += verdeckTap(uv + vec2(rd.x, -rd.y), z);
  s += verdeckTap(uv + vec2(-rd.x, rd.y), z);
  s *= 0.1;
  // Kante etwas straffen, damit die Uebergangszone schmal bleibt
  return smoothstep(0.08, 0.92, s);
}
`;

// Materialien, die bereits erweitert wurden (userData kann geteilt sein)
const GEPATCHT = new WeakSet();

export class WeicheVerdeckung {
  constructor({ radiusPx = 2.5, toleranzPx = 1.5, tiefenBereich = 20000 } = {}) {
    this.radiusPx = radiusPx;
    this.toleranzPx = toleranzPx;
    this.tiefenBereich = tiefenBereich;
    this.uniforms = {
      verdeckTiefe: { value: null },
      verdeckParam: { value: new THREE.Vector4(0, radiusPx, toleranzPx / tiefenBereich, 0) },
      verdeckAufloesung: { value: new THREE.Vector2(1, 1) }
    };
    this.ziel = null;
    this.aktiv = false;
  }

  /** Tiefenziel in Zeichenpuffergroesse anlegen bzw. anpassen. */
  bereite(breite, hoehe) {
    breite = Math.max(1, Math.round(breite));
    hoehe = Math.max(1, Math.round(hoehe));
    if (!this.ziel) {
      const tiefe = new THREE.DepthTexture(breite, hoehe);
      tiefe.type = THREE.UnsignedIntType;
      this.ziel = new THREE.WebGLRenderTarget(breite, hoehe, {
        depthBuffer: true,
        depthTexture: tiefe,
        type: THREE.UnsignedByteType,
        generateMipmaps: false
      });
      this.ziel.texture.name = 'verdeckFarbe';
    } else if (this.ziel.width !== breite || this.ziel.height !== hoehe) {
      this.ziel.setSize(breite, hoehe);
    }
    this.uniforms.verdeckTiefe.value = this.ziel.depthTexture;
    this.uniforms.verdeckAufloesung.value.set(breite, hoehe);
  }

  setzeAktiv(an) {
    this.aktiv = !!an;
    this.uniforms.verdeckParam.value.x = this.aktiv ? 1 : 0;
  }

  /** Radius in Zeichenpuffer-Pixeln (z. B. 2 CSS-px * Pixelverhaeltnis). */
  setzeRadius(px) {
    this.uniforms.verdeckParam.value.y = Math.max(0.5, px);
  }

  /** Material um die weiche Verdeckung erweitern (einmalig, Programm wird geteilt). */
  patche(material) {
    if (!material || GEPATCHT.has(material)) return material;
    const vorher = material.onBeforeCompile;
    const basisSchluessel = material.customProgramCacheKey();
    const uniforms = this.uniforms;
    material.onBeforeCompile = function (shader, renderer) {
      if (vorher) vorher.call(this, shader, renderer);
      Object.assign(shader.uniforms, uniforms);
      let fs = shader.fragmentShader;
      if (!fs.includes('#include <tonemapping_fragment>') || !fs.includes('void main() {')) {
        console.warn('[render] weiche Verdeckung: Shader-Stelle fehlt in', material.type);
        return;
      }
      fs = fs.replace('void main() {', `${VERDECK_GLSL}\nvoid main() {`);
      fs = fs.replace('#include <tonemapping_fragment>', 'gl_FragColor.a *= verdeckSicht();\n\t#include <tonemapping_fragment>');
      shader.fragmentShader = fs;
    };
    material.customProgramCacheKey = () => `${basisSchluessel}|verdeck1`;
    GEPATCHT.add(material);
    material.needsUpdate = true;
    return material;
  }

  dispose() {
    if (this.ziel) {
      this.ziel.depthTexture.dispose();
      this.ziel.dispose();
      this.ziel = null;
    }
    this.uniforms.verdeckTiefe.value = null;
  }
}
