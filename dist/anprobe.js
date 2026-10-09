var px="1.1.0",Ah="https://storage.googleapis.com/mediapipe-models",mx=Object.freeze({mediapipe:`https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${px}`,modelle:Object.freeze({hand:`${Ah}/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,gesicht:`${Ah}/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,koerper:`${Ah}/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task`}),delegate:"auto",qualitaet:"auto",shopName:"ARLISE",debug:!1,knopfText:"Virtuell anprobieren",aufnahmeBreite:1440});function Rh(s){return s!==null&&typeof s=="object"&&!Array.isArray(s)}function So(s,e){let t={...s};if(!Rh(e))return t;for(let[n,i]of Object.entries(e))i!==void 0&&(t[n]=Rh(i)&&Rh(s[n])?So(s[n],i):i);return t}function gx(){try{let s=new URL(window.location.href);return s.searchParams.has("anprobe-debug")?s.searchParams.get("anprobe-debug")!=="0":/(^|[#&])anprobe-debug\b/.test(s.hash.slice(1))}catch{return!1}}function Zf(s){let e=typeof window<"u"?window.AnprobeKonfig:null,t=So(So(mx,e),s);return typeof window<"u"&&gx()&&(t.debug=!0),t.debug=!!t.debug,t}var In=Zf(),Ch={};function jf(s){Ch=So(Ch,s);let e=Zf(Ch);for(let t of Object.keys(In))delete In[t];return Object.assign(In,e),In}function Eo(...s){In.debug&&typeof console<"u"&&console.info("[anprobe]",...s)}var Op=0,gu=1,Bp=2;var Ua=1,Hp=2,Ir=3,Un=0,zt=1,sn=2,pi=0,Pr=1,Fa=2,xu=3,_u=4,Vp=5;var Ds=100,Gp=101,Wp=102,Xp=103,qp=104,$p=200,Kp=201,Yp=202,Zp=203,vu=204,yu=205,jp=206,Jp=207,Qp=208,em=209,tm=210,nm=211,im=212,sm=213,rm=214,nl=0,il=1,sl=2,pr=3,rl=4,al=5,ol=6,ll=7,kl=0,am=1,om=2,Qn=0,Mu=1,bu=2,Su=3,Oa=4,Eu=5,rs=6,wu=7,su="attached",lm="detached",Tu=300,as=301,Us=302,Il=303,Pl=304,Ba=306,li=1e3,Ln=1001,mr=1002,Rt=1003,Ll=1004;var Fs=1005;var ot=1006,Lr=1007;var En=1008;var rn=1009,Au=1010,Ru=1011,Nr=1012,Nl=1013,gn=1014,wn=1015,ei=1016,zl=1017,Dl=1018,zr=1020,Cu=35902,ku=35899,Iu=1021,Pu=1022,xn=1023,ci=1026,os=1027,Ul=1028,Fl=1029,ls=1030,Ol=1031;var Bl=1033,Ha=33776,Va=33777,Ga=33778,Wa=33779,Hl=35840,Vl=35841,Gl=35842,Wl=35843,Xl=36196,ql=37492,$l=37496,Kl=37488,Yl=37489,Xa=37490,Zl=37491,jl=37808,Jl=37809,Ql=37810,ec=37811,tc=37812,nc=37813,ic=37814,sc=37815,rc=37816,ac=37817,oc=37818,lc=37819,cc=37820,hc=37821,uc=36492,dc=36494,fc=36495,pc=36283,mc=36284,qa=36285,gc=36286;var As=2300,Rs=2301,Qo=2302,ru=2303,au=2400,ou=2401,lu=2402,cm=2500;var Lu=0,$a=1,Dr=2,hm=3200;var Ka=0,um=1,Tn="",vt="srgb",fn="srgb-linear",ma="linear",at="srgb";var el=7680;var dm=519,fm=512,pm=513,mm=514,xc=515,gm=516,xm=517,_c=518,_m=519,Nu=35044,vc=35048;var zu="300 es",Yn=2e3,gr=2001;function xx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function _x(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function xr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vm(){let s=xr("canvas");return s.style.display="block",s}var Jf={},_r=null;function ga(...s){let e="THREE."+s.shift();_r?_r("log",e,...s):console.log(e,...s)}function ym(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ke(...s){s=ym(s);let e="THREE."+s.shift();if(_r)_r("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function ze(...s){s=ym(s);let e="THREE."+s.shift();if(_r)_r("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ts(...s){let e=s.join(" ");e in Jf||(Jf[e]=!0,ke(...s))}function Mm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var bm={[nl]:il,[sl]:ol,[rl]:ll,[pr]:al,[il]:nl,[ol]:sl,[ll]:rl,[al]:pr},hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qf=1234567,fa=Math.PI/180,Cs=180/Math.PI;function Zn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function We(s,e,t){return Math.max(e,Math.min(t,s))}function Du(s,e){return(s%e+e)%e}function vx(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function yx(s,e,t){return s!==e?(t-s)/(e-s):0}function pa(s,e,t){return(1-t)*s+t*e}function Mx(s,e,t,n){return pa(s,e,1-Math.exp(-t*n))}function bx(s,e=1){return e-Math.abs(Du(s,e*2)-e)}function Sx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ex(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function wx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Tx(s,e){return s+Math.random()*(e-s)}function Ax(s){return s*(.5-Math.random())}function Rx(s){s!==void 0&&(Qf=s);let e=Qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cx(s){return s*fa}function kx(s){return s*Cs}function Ix(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Px(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Lx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Nx(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Qe={DEG2RAD:fa,RAD2DEG:Cs,generateUUID:Zn,clamp:We,euclideanModulo:Du,mapLinear:vx,inverseLerp:yx,lerp:pa,damp:Mx,pingpong:bx,smoothstep:Sx,smootherstep:Ex,randInt:wx,randFloat:Tx,randFloatSpread:Ax,seededRandom:Rx,degToRad:Cx,radToDeg:kx,isPowerOfTwo:Ix,ceilPowerOfTwo:Px,floorPowerOfTwo:Lx,setQuaternionFromProperEuler:Nx,normalize:ct,denormalize:Kn},Vu=class Vu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vu.prototype.isVector2=!0;var re=Vu,$e=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let _=Math.acos(g),y=Math.sin(_);m=Math.sin(m*_)/y,o=Math.sin(o*_)/y,l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o;let _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-o*f,e[t+2]=c*p+h*f+o*u-l*d,e[t+3]=h*p-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gu=class Gu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ep.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ep.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kh.copy(this).projectOnVector(e),this.sub(kh)}reflect(e){return this.sub(kh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gu.prototype.isVector3=!0;var T=Gu,kh=new T,ep=new $e,Wu=class Wu{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=i[0],g=i[3],m=i[6],_=i[1],y=i[4],v=i[7],b=i[2],S=i[5],A=i[8];return r[0]=a*x+o*_+l*b,r[3]=a*g+o*y+l*S,r[6]=a*m+o*v+l*A,r[1]=c*x+h*_+d*b,r[4]=c*g+h*y+d*S,r[7]=c*m+h*v+d*A,r[2]=u*x+f*_+p*b,r[5]=u*g+f*y+p*S,r[8]=u*m+f*v+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=t*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=u*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ih.makeScale(e,t)),this}rotate(e){return Ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ih.makeRotation(-e)),this}translate(e,t){return Ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ih.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wu.prototype.isMatrix3=!0;var Fe=Wu,Ih=new Fe,tp=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),np=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zx(){let s={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(i.r=fr(i.r),i.g=fr(i.g),i.b=fr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Tn?ma:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[fn]:{primaries:e,whitePoint:n,transfer:ma,toXYZ:tp,fromXYZ:np,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:tp,fromXYZ:np,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),s}var qe=zx();function ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ys,cl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ys===void 0&&(Ys=xr("canvas")),Ys.width=e.width,Ys.height=e.height;let i=Ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ys}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ki(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Dx=0,vr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ph(i[a].image)):r.push(Ph(i[a]))}else r=Ph(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ph(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var Ux=0,Lh=new T,Et=class s extends hi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Ln,i=Ln,r=ot,a=En,o=xn,l=rn,c=s.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Zn(),this.name="",this.source=new vr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Lh).x}get height(){return this.source.getSize(Lh).y}get depth(){return this.source.getSize(Lh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case li:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case mr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case li:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case mr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Tu;Et.DEFAULT_ANISOTROPY=1;var Xu=class Xu{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,v=(f+1)/2,b=(m+1)/2,S=(h+u)/4,A=(d+x)/4,M=(p+g)/4;return y>v&&y>b?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=S/n,r=A/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=S/i,r=M/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=A/r,i=M/r),this.set(n,i,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xu.prototype.isVector4=!0;var Je=Xu,hl=class extends hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new Et(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new vr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends hl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xa=class extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ul=class extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Cl=class Cl{constructor(e,t,n,i,r,a,o,l,c,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,f,p,x,g)}set(e,t,n,i,r,a,o,l,c,h,d,u,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),a=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,p=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u+x*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,p=o*h,x=o*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fx,e,Ox)}lookAt(e,t,n){let i=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Yi.crossVectors(n,bn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Yi.crossVectors(n,bn)),Yi.normalize(),wo.crossVectors(bn,Yi),i[0]=Yi.x,i[4]=wo.x,i[8]=bn.x,i[1]=Yi.y,i[5]=wo.y,i[9]=bn.y,i[2]=Yi.z,i[6]=wo.z,i[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],_=n[3],y=n[7],v=n[11],b=n[15],S=i[0],A=i[4],M=i[8],w=i[12],R=i[1],k=i[5],N=i[9],L=i[13],I=i[2],z=i[6],U=i[10],H=i[14],$=i[3],D=i[7],O=i[11],G=i[15];return r[0]=a*S+o*R+l*I+c*$,r[4]=a*A+o*k+l*z+c*D,r[8]=a*M+o*N+l*U+c*O,r[12]=a*w+o*L+l*H+c*G,r[1]=h*S+d*R+u*I+f*$,r[5]=h*A+d*k+u*z+f*D,r[9]=h*M+d*N+u*U+f*O,r[13]=h*w+d*L+u*H+f*G,r[2]=p*S+x*R+g*I+m*$,r[6]=p*A+x*k+g*z+m*D,r[10]=p*M+x*N+g*U+m*O,r[14]=p*w+x*L+g*H+m*G,r[3]=_*S+y*R+v*I+b*$,r[7]=_*A+y*k+v*z+b*D,r[11]=_*M+y*N+v*U+b*O,r[15]=_*w+y*L+v*H+b*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15],_=l*f-c*u,y=o*f-c*d,v=o*u-l*d,b=a*f-c*h,S=a*u-l*h,A=a*d-o*h;return t*(x*_-g*y+m*v)-n*(p*_-g*b+m*S)+i*(p*y-x*b+m*A)-r*(p*v-x*S+g*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],_=t*o-n*a,y=t*l-i*a,v=t*c-r*a,b=n*l-i*o,S=n*c-r*o,A=i*c-r*l,M=h*x-d*p,w=h*g-u*p,R=h*m-f*p,k=d*g-u*x,N=d*m-f*x,L=u*m-f*g,I=_*L-y*N+v*k+b*R-S*w+A*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return e[0]=(o*L-l*N+c*k)*z,e[1]=(i*N-n*L-r*k)*z,e[2]=(x*A-g*S+m*b)*z,e[3]=(u*S-d*A-f*b)*z,e[4]=(l*R-a*L-c*w)*z,e[5]=(t*L-i*R+r*w)*z,e[6]=(g*v-p*A-m*y)*z,e[7]=(h*A-u*v+f*y)*z,e[8]=(a*N-o*R+c*M)*z,e[9]=(n*R-t*N-r*M)*z,e[10]=(p*S-x*v+m*_)*z,e[11]=(d*v-h*S-f*_)*z,e[12]=(o*w-a*k-l*M)*z,e[13]=(t*k-n*w+i*M)*z,e[14]=(x*y-p*b-g*_)*z,e[15]=(h*b-d*y+u*_)*z,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,x=a*h,g=a*d,m=o*d,_=l*c,y=l*h,v=l*d,b=n.x,S=n.y,A=n.z;return i[0]=(1-(x+m))*b,i[1]=(f+v)*b,i[2]=(p-y)*b,i[3]=0,i[4]=(f-v)*S,i[5]=(1-(u+m))*S,i[6]=(g+_)*S,i[7]=0,i[8]=(p+y)*A,i[9]=(g-_)*A,i[10]=(1-(u+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Zs.set(i[0],i[1],i[2]).length(),o=Zs.set(i[4],i[5],i[6]).length(),l=Zs.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Wn.copy(this);let c=1/a,h=1/o,d=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,t.setFromRotationMatrix(Wn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=Yn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===Yn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===gr)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Yn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===Yn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===gr)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Cl.prototype.isMatrix4=!0;var _e=Cl,Zs=new T,Wn=new _e,Fx=new T(0,0,0),Ox=new T(1,1,1),Yi=new T,wo=new T,bn=new T,ip=new _e,sp=new $e,ui=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ip,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sp.setFromEuler(this),this.setFromQuaternion(sp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var _a=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bx=0,rp=new T,js=new $e,Si=new _e,To=new T,na=new T,Hx=new T,Vx=new $e,ap=new T(1,0,0),op=new T(0,1,0),lp=new T(0,0,1),cp={type:"added"},Gx={type:"removed"},Js={type:"childadded",child:null},Nh={type:"childremoved",child:null},xt=class s extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new T,t=new ui,n=new $e,i=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new Fe}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(ap,e)}rotateY(e){return this.rotateOnAxis(op,e)}rotateZ(e){return this.rotateOnAxis(lp,e)}translateOnAxis(e,t){return rp.copy(e).applyQuaternion(this.quaternion),this.position.add(rp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ap,e)}translateY(e){return this.translateOnAxis(op,e)}translateZ(e){return this.translateOnAxis(lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?To.copy(e):To.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(na,To,this.up):Si.lookAt(To,na,this.up),this.quaternion.setFromRotationMatrix(Si),i&&(Si.extractRotation(i.matrixWorld),js.setFromRotationMatrix(Si),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cp),Js.child=e,this.dispatchEvent(Js),Js.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gx),Nh.child=e,this.dispatchEvent(Nh),Nh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cp),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,Hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,Vx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xt.DEFAULT_UP=new T(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var De=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wx={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new De;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function zh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=Du(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=zh(a,r,e+1/3),this.g=zh(a,r,e),this.b=zh(a,r,e-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let n=Sm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return qe.workingToColorSpace(tn.copy(this),e),Math.round(We(tn.r*255,0,255))*65536+Math.round(We(tn.g*255,0,255))*256+Math.round(We(tn.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(tn.copy(this),t);let n=tn.r,i=tn.g,r=tn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=vt){qe.workingToColorSpace(tn.copy(this),e);let t=tn.r,n=tn.g,i=tn.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(Ao);let n=pa(Zi.h,Ao.h,t),i=pa(Zi.s,Ao.s,t),r=pa(Zi.l,Ao.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Se;Se.NAMES=Sm;var jn=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xn=new T,Ei=new T,Dh=new T,wi=new T,Qs=new T,er=new T,hp=new T,Uh=new T,Fh=new T,Oh=new T,Bh=new Je,Hh=new Je,Vh=new Je,Ci=class s{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xn.subVectors(e,t),i.cross(Xn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xn.subVectors(i,t),Ei.subVectors(n,t),Dh.subVectors(e,t);let a=Xn.dot(Xn),o=Xn.dot(Ei),l=Xn.dot(Dh),c=Ei.dot(Ei),h=Ei.dot(Dh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Bh.setScalar(0),Hh.setScalar(0),Vh.setScalar(0),Bh.fromBufferAttribute(e,t),Hh.fromBufferAttribute(e,n),Vh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Bh,r.x),a.addScaledVector(Hh,r.y),a.addScaledVector(Vh,r.z),a}static isFrontFacing(e,t,n,i){return Xn.subVectors(n,t),Ei.subVectors(e,t),Xn.cross(Ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Xn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Qs.subVectors(i,n),er.subVectors(r,n),Uh.subVectors(e,n);let l=Qs.dot(Uh),c=er.dot(Uh);if(l<=0&&c<=0)return t.copy(n);Fh.subVectors(e,i);let h=Qs.dot(Fh),d=er.dot(Fh);if(h>=0&&d<=h)return t.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Qs,a);Oh.subVectors(e,r);let f=Qs.dot(Oh),p=er.dot(Oh);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(er,o);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return hp.subVectors(r,i),o=(d-h)/(d-h+(f-p)),t.copy(i).addScaledVector(hp,o);let m=1/(g+x+u);return a=x*m,o=u*m,t.copy(n).addScaledVector(Qs,a).addScaledVector(er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wt=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(r,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),Co.subVectors(this.max,ia),tr.subVectors(e.a,ia),nr.subVectors(e.b,ia),ir.subVectors(e.c,ia),ji.subVectors(nr,tr),Ji.subVectors(ir,nr),bs.subVectors(tr,ir);let t=[0,-ji.z,ji.y,0,-Ji.z,Ji.y,0,-bs.z,bs.y,ji.z,0,-ji.x,Ji.z,0,-Ji.x,bs.z,0,-bs.x,-ji.y,ji.x,0,-Ji.y,Ji.x,0,-bs.y,bs.x,0];return!Gh(t,tr,nr,ir,Co)||(t=[1,0,0,0,1,0,0,0,1],!Gh(t,tr,nr,ir,Co))?!1:(ko.crossVectors(ji,Ji),t=[ko.x,ko.y,ko.z],Gh(t,tr,nr,ir,Co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ti=[new T,new T,new T,new T,new T,new T,new T,new T],qn=new T,Ro=new wt,tr=new T,nr=new T,ir=new T,ji=new T,Ji=new T,bs=new T,ia=new T,Co=new T,ko=new T,Ss=new T;function Gh(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ss.fromArray(s,r);let o=i.x*Math.abs(Ss.x)+i.y*Math.abs(Ss.y)+i.z*Math.abs(Ss.z),l=e.dot(Ss),c=t.dot(Ss),h=n.dot(Ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Lt=new T,Io=new re,Xx=0,bt=class extends hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nu,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Io.fromBufferAttribute(this,t),Io.applyMatrix3(e),this.setXY(t,Io.x,Io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var va=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ya=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var He=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},qx=new wt,sa=new T,Wh=new T,Kt=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);let t=sa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(sa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(Wh)),this.expandByPoint(sa.copy(e.center).sub(Wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$x=0,Pn=new _e,Xh=new xt,sr=new T,Sn=new wt,ra=new wt,Bt=new T,tt=class s extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xx(e)?ya:va)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return Xh.lookAt(e),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new He(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ra.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(Sn.min,ra.min),Sn.expandByPoint(Bt),Bt.addVectors(Sn.max,ra.max),Sn.expandByPoint(Bt)):(Sn.expandByPoint(ra.min),Sn.expandByPoint(ra.max))}Sn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Bt.fromBufferAttribute(o,c),l&&(sr.fromBufferAttribute(e,c),Bt.add(sr)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let M=0;M<n.count;M++)o[M]=new T,l[M]=new T;let c=new T,h=new T,d=new T,u=new re,f=new re,p=new re,x=new T,g=new T;function m(M,w,R){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,M),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let k=1/(f.x*p.y-p.x*f.y);isFinite(k)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(k),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(k),o[M].add(x),o[w].add(x),o[R].add(x),l[M].add(g),l[w].add(g),l[R].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let M=0,w=_.length;M<w;++M){let R=_[M],k=R.start,N=R.count;for(let L=k,I=k+N;L<I;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let y=new T,v=new T,b=new T,S=new T;function A(M){b.fromBufferAttribute(i,M),S.copy(b);let w=o[M];y.copy(w),y.sub(b.multiplyScalar(b.dot(w))).normalize(),v.crossVectors(S,w);let k=v.dot(l[M])<0?-1:1;a.setXYZW(M,y.x,y.y,y.z,k)}for(let M=0,w=_.length;M<w;++M){let R=_[M],k=R.start,N=R.count;for(let L=k,I=k+N;L<I;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,d=new T;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new bt(u,h,d)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ks=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nu,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},dn=new T,ts=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ga("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ga("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qh=new T,Kx=new T,Yx=new Fe,$n=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=qh.subVectors(n,t).cross(Kx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(qh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Yx.getNormalMatrix(e),i=this.coplanarPoint(qh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Zx=0,nn=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Pr,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vu,this.blendDst=yu,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=el,this.stencilZFail=el,this.stencilZPass=el,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new $n().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Mr=class extends nn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rr,aa=new T,ar=new T,or=new T,lr=new re,oa=new re,Em=new _e,Po=new T,la=new T,Lo=new T,up=new re,$h=new re,dp=new re,Ma=class extends xt{constructor(e=new Mr){if(super(),this.isSprite=!0,this.type="Sprite",rr===void 0){rr=new tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ks(t,5);rr.setIndex([0,1,2,0,2,3]),rr.setAttribute("position",new ts(n,3,0,!1)),rr.setAttribute("uv",new ts(n,2,3,!1))}this.geometry=rr,this.material=e,this.center=new re(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ar.setFromMatrixScale(this.matrixWorld),Em.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ar.multiplyScalar(-or.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;No(Po.set(-.5,-.5,0),or,a,ar,i,r),No(la.set(.5,-.5,0),or,a,ar,i,r),No(Lo.set(.5,.5,0),or,a,ar,i,r),up.set(0,0),$h.set(1,0),dp.set(1,1);let o=e.ray.intersectTriangle(Po,la,Lo,!1,aa);if(o===null&&(No(la.set(-.5,.5,0),or,a,ar,i,r),$h.set(0,1),o=e.ray.intersectTriangle(Po,Lo,la,!1,aa),o===null))return;let l=e.ray.origin.distanceTo(aa);l<e.near||l>e.far||t.push({distance:l,point:aa.clone(),uv:Ci.getInterpolation(aa,Po,la,Lo,up,$h,dp,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function No(s,e,t,n,i,r){lr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(oa.x=r*lr.x-i*lr.y,oa.y=i*lr.x+r*lr.y):oa.copy(lr),s.copy(e),s.x+=oa.x,s.y+=oa.y,s.applyMatrix4(Em)}var Ai=new T,Kh=new T,zo=new T,Do=new T,Is=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Kh.copy(e).add(t).multiplyScalar(.5),zo.copy(t).sub(e).normalize(),Do.copy(this.origin).sub(Kh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(zo),o=Do.dot(this.direction),l=-Do.dot(zo),c=Do.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Kh).addScaledVector(zo,u),f}intersectSphere(e,t){if(e.radius<0)return null;Ai.subVectors(e.center,this.origin);let n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,p=t.x-a.x,x=t.y-a.y,g=t.z-a.z,m=n.x-a.x,_=n.y-a.y,y=n.z-a.z,v=Math.abs(l),b=Math.abs(c),S=Math.abs(h),A,M,w,R,k,N,L,I,z,U,H,$;if(v>=b&&v>=S?(w=l,N=d,z=p,$=m,l>=0?(A=c,M=h,R=u,k=f,L=x,I=g,U=_,H=y):(A=h,M=c,R=f,k=u,L=g,I=x,U=y,H=_)):b>=S?(w=c,N=u,z=x,$=_,c>=0?(A=h,M=l,R=f,k=d,L=g,I=p,U=y,H=m):(A=l,M=h,R=d,k=f,L=p,I=g,U=m,H=y)):(w=h,N=f,z=g,$=y,h>=0?(A=l,M=c,R=d,k=u,L=p,I=x,U=m,H=_):(A=c,M=l,R=u,k=d,L=x,I=p,U=_,H=m)),w===0)return null;let D=A/w,O=M/w,G=1/w,ie=R-D*N,se=k-O*N,ye=L-D*z,Te=I-O*z,Oe=U-D*$,Y=H-O*$,Q=Oe*Te-Y*ye,pe=ie*Y-se*Oe,Re=ye*se-Te*ie;if(i){if(Q<0||pe<0||Re<0)return null}else if((Q<0||pe<0||Re<0)&&(Q>0||pe>0||Re>0))return null;let xe=Q+pe+Re;if(xe===0)return null;let Ue=G*(Q*N+pe*z+Re*$);return(xe>0?Ue<0:Ue>0)?null:this.at(Ue/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gt=class extends nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fp=new _e,Es=new Is,Uo=new Kt,pp=new T,Fo=new T,Oo=new T,Bo=new T,Yh=new T,Ho=new T,mp=new T,Vo=new T,Xe=class extends xt{constructor(e=new tt,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Yh.fromBufferAttribute(d,e),a?Ho.addScaledVector(Yh,h):Ho.addScaledVector(Yh.sub(t),h))}t.add(Ho)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),Es.copy(e.ray).recast(e.near),!(Uo.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Uo,pp)===null||Es.origin.distanceToSquared(pp)>(e.far-e.near)**2))&&(fp.copy(r).invert(),Es.copy(e.ray).applyMatrix4(fp),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,b=y;v<b;v+=3){let S=o.getX(v),A=o.getX(v+1),M=o.getX(v+2);i=Go(this,m,e,n,c,h,d,S,A,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=o.getX(g),y=o.getX(g+1),v=o.getX(g+2);i=Go(this,a,e,n,c,h,d,_,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,b=y;v<b;v+=3){let S=v,A=v+1,M=v+2;i=Go(this,m,e,n,c,h,d,S,A,M),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=g,y=g+1,v=g+2;i=Go(this,a,e,n,c,h,d,_,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function jx(s,e,t,n,i,r,a,o){let l;if(e.side===zt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Un,o),l===null)return null;Vo.copy(o),Vo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Vo);return c<t.near||c>t.far?null:{distance:c,point:Vo.clone(),object:s}}function Go(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Fo),s.getVertexPosition(l,Oo),s.getVertexPosition(c,Bo);let h=jx(s,e,t,n,Fo,Oo,Bo,mp);if(h){let d=new T;Ci.getBarycoord(mp,Fo,Oo,Bo,d),i&&(h.uv=Ci.getInterpolatedAttribute(i,o,l,c,d,new re)),r&&(h.uv1=Ci.getInterpolatedAttribute(r,o,l,c,d,new re)),a&&(h.normal=Ci.getInterpolatedAttribute(a,o,l,c,d,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new T,materialIndex:0};Ci.getNormal(Fo,Oo,Bo,u.normal),h.face=u,h.barycoord=d}return h}var ca=new Je,gp=new Je,xp=new Je,Jx=new Je,_p=new _e,Wo=new T,Zh=new Kt,vp=new _e,jh=new Is,ba=class extends Xe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=su,this.bindMatrix=new _e,this.bindMatrixInverse=new _e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wo),this.boundingBox.expandByPoint(Wo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wo),this.boundingSphere.expandByPoint(Wo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zh.copy(this.boundingSphere),Zh.applyMatrix4(i),e.ray.intersectsSphere(Zh)!==!1&&(vp.copy(i).invert(),jh.copy(e.ray).applyMatrix4(vp),!(this.boundingBox!==null&&jh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===su?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lm?this.bindMatrixInverse.copy(this.bindMatrix).invert():ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;gp.fromBufferAttribute(i.attributes.skinIndex,e),xp.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(ca.copy(t),t.set(0,0,0,0)):(ca.set(...t,1),t.set(0,0,0)),ca.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=xp.getComponent(r);if(a!==0){let o=gp.getComponent(r);_p.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Jx.copy(ca).applyMatrix4(_p),a)}}return t.isVector4&&(t.w=ca.w),t.applyMatrix4(this.bindMatrixInverse)}},br=class extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ns=class extends Et{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Rt,h=Rt,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yp=new _e,Qx=new _e,Sa=class s{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new _e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new _e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Qx;yp.multiplyMatrices(o,t[r]),yp.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ns(t,e,e,xn,wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(ke("Skeleton: No bone found with UUID:",r),a=new br),this.bones.push(a),this.boneInverses.push(new _e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ii=class extends bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},cr=new _e,Mp=new _e,Xo=[],bp=new wt,e_=new _e,ha=new Xe,ua=new Kt,Wt=class extends Xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,e_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),bp.copy(e.boundingBox).applyMatrix4(cr),this.boundingBox.union(bp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),ua.copy(e.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(n),e.ray.intersectsSphere(ua)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,cr),Mp.multiplyMatrices(n,cr),ha.matrixWorld=Mp,ha.raycast(e,Xo);for(let a=0,o=Xo.length;a<o;a++){let l=Xo[a];l.instanceId=r,l.object=this,t.push(l)}Xo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ns(new Float32Array(i*this.count),i,this.count,Ul,wn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ws=new Kt,t_=new re(.5,.5),qo=new T,Sr=class{constructor(e=new $n,t=new $n,n=new $n,i=new $n,r=new $n,a=new $n){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],_=r[12],y=r[13],v=r[14],b=r[15];if(i[0].setComponents(c-a,f-h,m-p,b-_).normalize(),i[1].setComponents(c+a,f+h,m+p,b+_).normalize(),i[2].setComponents(c+o,f+d,m+x,b+y).normalize(),i[3].setComponents(c-o,f-d,m-x,b-y).normalize(),n)i[4].setComponents(l,u,g,v).normalize(),i[5].setComponents(c-l,f-u,m-g,b-v).normalize();else if(i[4].setComponents(c-l,f-u,m-g,b-v).normalize(),t===Yn)i[5].setComponents(c+l,f+u,m+g,b+v).normalize();else if(t===gr)i[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);let t=t_.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(qo.x=i.normal.x>0?e.max.x:e.min.x,qo.y=i.normal.y>0?e.max.y:e.min.y,qo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Er=class extends nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},dl=new T,fl=new T,Sp=new _e,da=new Is,$o=new Kt,Jh=new T,Ep=new T,Ps=class extends xt{constructor(e=new tt,t=new Er){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)dl.fromBufferAttribute(t,i-1),fl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=dl.distanceTo(fl);e.setAttribute("lineDistance",new He(n,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(i),$o.radius+=r,e.ray.intersectsSphere($o)===!1)return;Sp.copy(i).invert(),da.copy(e.ray).applyMatrix4(Sp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){let m=h.getX(x),_=h.getX(x+1),y=Ko(this,e,da,l,m,_,x);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=Ko(this,e,da,l,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){let m=Ko(this,e,da,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Ko(this,e,da,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ko(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(dl.fromBufferAttribute(o,i),fl.fromBufferAttribute(o,r),t.distanceSqToSegment(dl,fl,Jh,Ep)>n)return;Jh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Jh);if(!(c<e.near||c>e.far))return{distance:c,point:Ep.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var wp=new T,Tp=new T,Ea=class extends Ps{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)wp.fromBufferAttribute(t,i),Tp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wp.distanceTo(Tp);e.setAttribute("lineDistance",new He(n,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},wa=class extends Ps{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},wr=class extends nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ap=new _e,cu=new Is,Yo=new Kt,Zo=new T,Ta=class extends xt{constructor(e=new tt,t=new wr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(i),Yo.radius+=r,e.ray.intersectsSphere(Yo)===!1)return;Ap.copy(i).invert(),cu.copy(e.ray).applyMatrix4(Ap);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,x=f;p<x;p++){let g=c.getX(p);Zo.fromBufferAttribute(d,g),Rp(Zo,g,l,i,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,x=f;p<x;p++)Zo.fromBufferAttribute(d,p),Rp(Zo,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Rp(s,e,t,n,i,r,a){let o=cu.distanceSqToPoint(s);if(o<t){let l=new T;cu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Aa=class extends Et{constructor(e,t,n,i,r=ot,a=ot,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}};var Ra=class extends Et{constructor(e=[],t=as,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pi=class extends Et{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Nn=class extends Et{constructor(e,t,n=gn,i,r,a,o=Rt,l=Rt,c,h=ci,d=1){if(h!==ci&&h!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},pl=class extends Nn{constructor(e,t=gn,n=as,i,r,a=Rt,o=Rt,l,c=ci){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ca=class extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},zn=class s extends tt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(d,2));function p(x,g,m,_,y,v,b,S,A,M,w){let R=v/A,k=b/M,N=v/2,L=b/2,I=S/2,z=A+1,U=M+1,H=0,$=0,D=new T;for(let O=0;O<U;O++){let G=O*k-L;for(let ie=0;ie<z;ie++){let se=ie*R-N;D[x]=se*_,D[g]=G*y,D[m]=I,c.push(D.x,D.y,D.z),D[x]=0,D[g]=0,D[m]=S>0?1:-1,h.push(D.x,D.y,D.z),d.push(ie/A),d.push(1-O/M),H+=1}}for(let O=0;O<M;O++)for(let G=0;G<A;G++){let ie=u+G+z*O,se=u+G+z*(O+1),ye=u+(G+1)+z*(O+1),Te=u+(G+1)+z*O;l.push(ie,se,Te),l.push(se,ye,Te),$+=6}o.addGroup(f,$,w),f+=$,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var pn=class s extends tt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],g=n/2,m=0;_(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new He(d,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(f,2));function _(){let v=new T,b=new T,S=0,A=(t-e)/n;for(let M=0;M<=r;M++){let w=[],R=M/r,k=R*(t-e)+e;for(let N=0;N<=i;N++){let L=N/i,I=L*l+o,z=Math.sin(I),U=Math.cos(I);b.x=k*z,b.y=-R*n+g,b.z=k*U,d.push(b.x,b.y,b.z),v.set(z,A,U).normalize(),u.push(v.x,v.y,v.z),f.push(L,1-R),w.push(p++)}x.push(w)}for(let M=0;M<i;M++)for(let w=0;w<r;w++){let R=x[w][M],k=x[w+1][M],N=x[w+1][M+1],L=x[w][M+1];(e>0||w!==0)&&(h.push(R,k,L),S+=3),(t>0||w!==r-1)&&(h.push(k,N,L),S+=3)}c.addGroup(m,S,0),m+=S}function y(v){let b=p,S=new re,A=new T,M=0,w=v===!0?e:t,R=v===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,g*R,0),u.push(0,R,0),f.push(.5,.5),p++;let k=p;for(let N=0;N<=i;N++){let I=N/i*l+o,z=Math.cos(I),U=Math.sin(I);A.x=w*U,A.y=g*R,A.z=w*z,d.push(A.x,A.y,A.z),u.push(0,R,0),S.x=z*.5+.5,S.y=U*.5*R+.5,f.push(S.x,S.y),p++}for(let N=0;N<i;N++){let L=b+N,I=k+N;v===!0?h.push(I,I+1,L):h.push(I+1,I,L),M+=3}c.addGroup(m,M,v===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ml=class s extends tt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new He(r,3)),this.setAttribute("normal",new He(r.slice(),3)),this.setAttribute("uv",new He(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let y=new T,v=new T,b=new T;for(let S=0;S<t.length;S+=3)f(t[S+0],y),f(t[S+1],v),f(t[S+2],b),l(y,v,b,_)}function l(_,y,v,b){let S=b+1,A=[];for(let M=0;M<=S;M++){A[M]=[];let w=_.clone().lerp(v,M/S),R=y.clone().lerp(v,M/S),k=S-M;for(let N=0;N<=k;N++)N===0&&M===S?A[M][N]=w:A[M][N]=w.clone().lerp(R,N/k)}for(let M=0;M<S;M++)for(let w=0;w<2*(S-M)-1;w++){let R=Math.floor(w/2);w%2===0?(u(A[M][R+1]),u(A[M+1][R]),u(A[M][R])):(u(A[M][R+1]),u(A[M+1][R+1]),u(A[M+1][R]))}}function c(_){let y=new T;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(_),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let _=new T;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let v=g(_)/2/Math.PI+.5,b=m(_)/Math.PI+.5;a.push(v,1-b)}p(),d()}function d(){for(let _=0;_<a.length;_+=6){let y=a[_+0],v=a[_+2],b=a[_+4],S=Math.max(y,v,b),A=Math.min(y,v,b);S>.9&&A<.1&&(y<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),b<.2&&(a[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,y){let v=_*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function p(){let _=new T,y=new T,v=new T,b=new T,S=new re,A=new re,M=new re;for(let w=0,R=0;w<r.length;w+=9,R+=6){_.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),S.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),M.set(a[R+4],a[R+5]),b.copy(_).add(y).add(v).divideScalar(3);let k=g(b);x(S,R+0,_,k),x(A,R+2,y,k),x(M,R+4,v,k)}}function x(_,y,v,b){b<0&&_.x===1&&(a[y]=_.x-1),v.x===0&&v.z===0&&(a[y]=b/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var gl=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new re:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new T,i=[],r=[],a=[],o=new T,l=new _e;for(let f=0;f<=e;f++){let p=f/e;i[f]=this.getTangentAt(p,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(We(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(We(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Uu(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var Cp=new T,kp=new T,Qh=new Uu,eu=new Uu,tu=new Uu,is=class extends gl{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(kp.subVectors(i[0],i[1]).add(i[0]),c=kp);let d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Cp.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Cp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Qh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,g),eu.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,g),tu.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Qh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),eu.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),tu.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Qh.calc(l),eu.calc(l),tu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var Tr=class s extends ml{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Ar=class s extends tt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=We(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,d=new T,u=new re,f=new T,p=new T,x=new T,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=t;_++){let y=n+_*h*i,v=Math.sin(y),b=Math.cos(y);for(let S=0;S<=e.length-1;S++){d.x=e[S].x*v,d.y=e[S].y,d.z=e[S].x*b,a.push(d.x,d.y,d.z),u.x=_/t,u.y=S/(e.length-1),o.push(u.x,u.y);let A=l[3*S+0]*v,M=l[3*S+1],w=l[3*S+0]*b;c.push(A,M,w)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let v=y+_*e.length,b=v,S=v+e.length,A=v+e.length+1,M=v+1;r.push(b,S,M),r.push(A,M,S)}this.setIndex(r),this.setAttribute("position",new He(a,3)),this.setAttribute("uv",new He(o,2)),this.setAttribute("normal",new He(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Ls=class s extends tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*u-a;for(let y=0;y<c;y++){let v=y*d-r;p.push(v,-_,0),x.push(0,0,1),g.push(y/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let y=_+c*m,v=_+c*(m+1),b=_+1+c*(m+1),S=_+1+c*m;f.push(y,v,S),f.push(v,b,S)}this.setIndex(f),this.setAttribute("position",new He(p,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Li=class s extends tt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new T,u=new T,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let _=[],y=m/n,v=a+y*o,b=e*Math.cos(v),S=Math.sqrt(e*e-b*b),A=0;m===0&&a===0?A=.5/t:m===n&&l===Math.PI&&(A=-.5/t);for(let M=0;M<=t;M++){let w=M/t,R=i+w*r;d.x=-S*Math.cos(R),d.y=b,d.z=S*Math.sin(R),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(w+A,1-y),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let y=h[m][_+1],v=h[m][_],b=h[m+1][_],S=h[m+1][_+1];(m!==0||a>0)&&f.push(y,v,S),(m!==n-1||l<Math.PI)&&f.push(v,b,S)}this.setIndex(f),this.setAttribute("position",new He(p,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var mn=class s extends tt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new T,f=new T,p=new T;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let m=0;m<=i;m++){let _=m/i*r;f.x=(e+t*Math.cos(g))*Math.cos(_),f.y=(e+t*Math.cos(g))*Math.sin(_),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){let m=(i+1)*x+g-1,_=(i+1)*(x-1)+g-1,y=(i+1)*(x-1)+g,v=(i+1)*x+g;l.push(m,_,v),l.push(_,y,v)}this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Os(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Ip(i))i.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Ip(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function an(s){let e={};for(let t=0;t<s.length;t++){let n=Os(s[t]);for(let i in n)e[i]=n[i]}return e}function Ip(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function n_(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Fu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}var wm={clone:Os,merge:an},i_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yt=class extends nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i_,this.fragmentShader=s_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=n_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Se().setHex(i.value);break;case"v2":this.uniforms[n].value=new re().fromArray(i.value);break;case"v3":this.uniforms[n].value=new T().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Je().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new _e().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xl=class extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Jn=class extends nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xt=class extends Jn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ka=class extends nn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=kl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_l=class extends nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vl=class extends nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function es(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function tl(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function r_(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Pp(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function a_(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var di=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yl=class extends di{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:au,endingEnd:au}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ou:r=e,o=2*t-n;break;case lu:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ou:a=e,l=2*n-t;break;case lu:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,_=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,y=(-1-f)*g+(1.5+f)*x+.5*p,v=f*g-f*x;for(let b=0;b!==o;++b)r[b]=m*a[h+b]+_*a[c+b]+y*a[l+b]+v*a[d+b];return r}},Ml=class extends di{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},bl=class extends di{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Sl=class extends di{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(i-t),x=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*p;return r}let u=o*2,f=e-1;for(let p=0;p!==o;++p){let x=a[c+p],g=a[l+p],m=f*u+p*2,_=d[m],y=d[m+1],v=e*u+p*2,b=h[v],S=h[v+1],A=l_(n,t,_,b,i);r[p]=Tm(A,x,y,S,g)}return r}};function Tm(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function o_(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function l_(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=Tm(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=o_(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var yn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=es(t,this.TimeBufferType),this.values=es(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:es(e.times,Array),values:es(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),tl(e.settings)&&(n.settings={inTangents:es(e.settings.inTangents,Array),outTangents:es(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Sl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case As:t=this.InterpolantFactoryMethodDiscrete;break;case Rs:t=this.InterpolantFactoryMethodLinear;break;case Qo:t=this.InterpolantFactoryMethodSmooth;break;case ru:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return As;case this.InterpolantFactoryMethodLinear:return Rs;case this.InterpolantFactoryMethodSmooth:return Qo;case this.InterpolantFactoryMethodBezier:return ru}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;tl(this.settings)&&(Lp(this.settings.inTangents,e),Lp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&_x(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,tl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Lp(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Rs;var Ni=class extends yn{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=As;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};Ia.prototype.ValueTypeName="color";var zi=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};zi.prototype.ValueTypeName="number";var El=class extends di{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)$e.slerpFlat(r,0,a,c-o,a,c,l);return r}},Di=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new El(this.times,this.values,this.getValueSize(),e)}};Di.prototype.ValueTypeName="quaternion";Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends yn{constructor(e,t,n){super(e,t,n)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=As;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};ss.prototype.ValueTypeName="vector";var Pa=class{constructor(e="",t=-1,n=[],i=cm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Zn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(h_(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=r_(l);l=Pp(l,1,h),c=Pp(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new zi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let d=h[1],u=i[d];u||(i[d]=u=[]),u.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function c_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zi;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return Ia;case"quaternion":return Di;case"bool":case"boolean":return Ni;case"string":return Ui}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function h_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=c_(s.type);if(s.times===void 0){let n=[],i=[];a_(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),tl(s.settings)&&(t.settings={inTangents:es(s.settings.inTangents,Float32Array),outTangents:es(s.settings.outTangents,Float32Array)}),t}var oi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Np(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Np(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Np(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var wl=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Am=new wl,fi=class{constructor(e){this.manager=e!==void 0?e:Am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ri={},hu=class extends Error{constructor(e,t){super(e),this.response=t}},Rr=class extends fi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=oi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:i});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ri[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,x=0,g=new ReadableStream({start(m){_();function _(){d.read().then(({done:y,value:v})=>{if(y)m.close();else{x+=v.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let S=0,A=h.length;S<A;S++){let M=h[S];M.onProgress&&M.onProgress(b)}m.enqueue(v),_()}},y=>{m.error(y)})}}});return new Response(g)}else throw new hu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{oi.add(`file:${e}`,c);let h=Ri[e];delete Ri[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Ri[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ri[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var hr=new WeakMap,Tl=class extends fi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=oi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=hr.get(a);d===void 0&&(d=[],hr.set(a,d)),d.push({onLoad:t,onError:i})}return a}let o=xr("img");function l(){h(),t&&t(this);let d=hr.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}hr.delete(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),oi.remove(`image:${e}`);let u=hr.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}hr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),oi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var La=class extends fi{constructor(e){super(e)}load(e,t,n,i){let r=new Et,a=new Tl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Cr=class extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var nu=new _e,zp=new T,Dp=new T,kr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sr,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;zp.setFromMatrixPosition(e.matrixWorld),t.position.copy(zp),Dp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){nu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(nu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===gr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},jo=new T,Jo=new $e,ai=new T,Na=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(jo,Jo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jo,Jo,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(jo,Jo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jo,Jo,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qi=new T,Up=new re,Fp=new re,Ht=class extends Na{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,Up,Fp),t.subVectors(Fp,Up)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},uu=class extends kr{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Cs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},za=class extends Cr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new uu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},du=class extends kr{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}},Ns=class extends Cr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new du}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Dn=class extends Na{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fu=class extends kr{constructor(){super(new Dn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zs=class extends Cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new fu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Fi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var iu=new WeakMap,Da=class extends fi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=oi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{iu.has(a)===!0?(i&&i(iu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return oi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),iu.set(l,c),oi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});oi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ur=-90,dr=1,Al=class extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ht(ur,dr,e,t);i.layers=this.layers,this.add(i);let r=new Ht(ur,dr,e,t);r.layers=this.layers,this.add(r);let a=new Ht(ur,dr,e,t);a.layers=this.layers,this.add(a);let o=new Ht(ur,dr,e,t);o.layers=this.layers,this.add(o);let l=new Ht(ur,dr,e,t);l.layers=this.layers,this.add(l);let c=new Ht(ur,dr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Rl=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ou="\\[\\]\\.:\\/",u_=new RegExp("["+Ou+"]","g"),Bu="[^"+Ou+"]",d_="[^"+Ou.replace("\\.","")+"]",f_=/((?:WC+[\/:])*)/.source.replace("WC",Bu),p_=/(WCOD+)?/.source.replace("WCOD",d_),m_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bu),g_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bu),x_=new RegExp("^"+f_+p_+m_+g_+"$"),__=["material","materials","bones","map"],pu=class{constructor(e,t,n){let i=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(u_,"")}static parseTrackName(e){let t=x_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);__.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=pu;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gw=new Float32Array(1);var qu=class qu{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};qu.prototype.isMatrix2=!0;var mu=qu;function Hu(s,e,t,n){let i=v_(n);switch(t){case Iu:return s*e;case Ul:return s*e/i.components*i.byteLength;case Fl:return s*e/i.components*i.byteLength;case ls:return s*e*2/i.components*i.byteLength;case Ol:return s*e*2/i.components*i.byteLength;case Pu:return s*e*3/i.components*i.byteLength;case xn:return s*e*4/i.components*i.byteLength;case Bl:return s*e*4/i.components*i.byteLength;case Ha:case Va:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vl:case Wl:return Math.max(s,16)*Math.max(e,8)/4;case Hl:case Gl:return Math.max(s,8)*Math.max(e,8)/2;case Xl:case ql:case Kl:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $l:case Xa:case Zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ec:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case tc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case nc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ic:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case sc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ac:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case cc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case uc:case dc:case fc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case pc:case mc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qa:case gc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function v_(s){switch(s){case rn:case Au:return{byteLength:1,components:1};case Nr:case Ru:case ei:return{byteLength:2,components:1};case zl:case Dl:return{byteLength:2,components:4};case gn:case Nl:case wn:return{byteLength:4,components:1};case Cu:case ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ym(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function M_(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var b_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,E_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,C_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,I_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,P_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,z_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,V_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,G_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,X_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,q_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,K_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ev=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,av=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ev=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ov=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$v=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,my=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,My=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,by=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ky=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Iy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ly=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Oy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$y=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:b_,alphahash_pars_fragment:S_,alphamap_fragment:E_,alphamap_pars_fragment:w_,alphatest_fragment:T_,alphatest_pars_fragment:A_,aomap_fragment:R_,aomap_pars_fragment:C_,batching_pars_vertex:k_,batching_vertex:I_,begin_vertex:P_,beginnormal_vertex:L_,bsdfs:N_,iridescence_fragment:z_,bumpmap_pars_fragment:D_,clipping_planes_fragment:U_,clipping_planes_pars_fragment:F_,clipping_planes_pars_vertex:O_,clipping_planes_vertex:B_,color_fragment:H_,color_pars_fragment:V_,color_pars_vertex:G_,color_vertex:W_,common:X_,cube_uv_reflection_fragment:q_,defaultnormal_vertex:$_,displacementmap_pars_vertex:K_,displacementmap_vertex:Y_,emissivemap_fragment:Z_,emissivemap_pars_fragment:j_,colorspace_fragment:J_,colorspace_pars_fragment:Q_,envmap_fragment:ev,envmap_common_pars_fragment:tv,envmap_pars_fragment:nv,envmap_pars_vertex:iv,envmap_physical_pars_fragment:pv,envmap_vertex:sv,fog_vertex:rv,fog_pars_vertex:av,fog_fragment:ov,fog_pars_fragment:lv,gradientmap_pars_fragment:cv,lightmap_pars_fragment:hv,lights_lambert_fragment:uv,lights_lambert_pars_fragment:dv,lights_pars_begin:fv,lights_toon_fragment:mv,lights_toon_pars_fragment:gv,lights_phong_fragment:xv,lights_phong_pars_fragment:_v,lights_physical_fragment:vv,lights_physical_pars_fragment:yv,lights_fragment_begin:Mv,lights_fragment_maps:bv,lights_fragment_end:Sv,lightprobes_pars_fragment:Ev,logdepthbuf_fragment:wv,logdepthbuf_pars_fragment:Tv,logdepthbuf_pars_vertex:Av,logdepthbuf_vertex:Rv,map_fragment:Cv,map_pars_fragment:kv,map_particle_fragment:Iv,map_particle_pars_fragment:Pv,metalnessmap_fragment:Lv,metalnessmap_pars_fragment:Nv,morphinstance_vertex:zv,morphcolor_vertex:Dv,morphnormal_vertex:Uv,morphtarget_pars_vertex:Fv,morphtarget_vertex:Ov,normal_fragment_begin:Bv,normal_fragment_maps:Hv,normal_pars_fragment:Vv,normal_pars_vertex:Gv,normal_vertex:Wv,normalmap_pars_fragment:Xv,clearcoat_normal_fragment_begin:qv,clearcoat_normal_fragment_maps:$v,clearcoat_pars_fragment:Kv,iridescence_pars_fragment:Yv,opaque_fragment:Zv,packing:jv,premultiplied_alpha_fragment:Jv,project_vertex:Qv,dithering_fragment:ey,dithering_pars_fragment:ty,roughnessmap_fragment:ny,roughnessmap_pars_fragment:iy,shadowmap_pars_fragment:sy,shadowmap_pars_vertex:ry,shadowmap_vertex:ay,shadowmask_pars_fragment:oy,skinbase_vertex:ly,skinning_pars_vertex:cy,skinning_vertex:hy,skinnormal_vertex:uy,specularmap_fragment:dy,specularmap_pars_fragment:fy,tonemapping_fragment:py,tonemapping_pars_fragment:my,transmission_fragment:gy,transmission_pars_fragment:xy,uv_pars_fragment:_y,uv_pars_vertex:vy,uv_vertex:yy,worldpos_vertex:My,background_vert:by,background_frag:Sy,backgroundCube_vert:Ey,backgroundCube_frag:wy,cube_vert:Ty,cube_frag:Ay,depth_vert:Ry,depth_frag:Cy,distance_vert:ky,distance_frag:Iy,equirect_vert:Py,equirect_frag:Ly,linedashed_vert:Ny,linedashed_frag:zy,meshbasic_vert:Dy,meshbasic_frag:Uy,meshlambert_vert:Fy,meshlambert_frag:Oy,meshmatcap_vert:By,meshmatcap_frag:Hy,meshnormal_vert:Vy,meshnormal_frag:Gy,meshphong_vert:Wy,meshphong_frag:Xy,meshphysical_vert:qy,meshphysical_frag:$y,meshtoon_vert:Ky,meshtoon_frag:Yy,points_vert:Zy,points_frag:jy,shadow_vert:Jy,shadow_frag:Qy,sprite_vert:eM,sprite_frag:tM},fe={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new T},probesMax:{value:new T},probesResolution:{value:new T}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},gi={basic:{uniforms:an([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:an([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:an([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:an([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:an([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:an([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:an([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:an([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:an([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:an([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:an([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:an([fe.common,fe.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:an([fe.lights,fe.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};gi.physical={uniforms:an([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var yc={r:0,b:0,g:0},nM=new _e,Zm=new Fe;Zm.set(-1,0,0,0,1,0,0,0,1);function iM(s,e,t,n,i,r){let a=new Se(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let v=_.backgroundBlurriness>0;y=e.get(y,v)}return y}function p(_){let y=!1,v=f(_);v===null?g(a,o):v&&v.isColor&&(g(v,1),y=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,y){let v=f(y);v&&(v.isCubeTexture||v.mapping===Ba)?(c===void 0&&(c=new Xe(new zn(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:Os(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nM.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zm),c.material.toneMapped=qe.getTransfer(v.colorSpace)!==at,(h!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Xe(new Ls(2,2),new Yt({name:"BackgroundMaterial",uniforms:Os(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qe.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,y){_.getRGB(yc,Fu(s)),t.buffers.color.setClear(yc.r,yc.g,yc.b,y,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:p,addToRenderList:x,dispose:m}}function sM(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(k,N,L,I,z){let U=!1,H=d(k,I,L,N);r!==H&&(r=H,c(r.object)),U=f(k,I,L,z),U&&p(k,I,L,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,v(k,N,L,I),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return s.createVertexArray()}function c(k){return s.bindVertexArray(k)}function h(k){return s.deleteVertexArray(k)}function d(k,N,L,I){let z=I.wireframe===!0,U=n[N.id];U===void 0&&(U={},n[N.id]=U);let H=k.isInstancedMesh===!0?k.id:0,$=U[H];$===void 0&&($={},U[H]=$);let D=$[L.id];D===void 0&&(D={},$[L.id]=D);let O=D[z];return O===void 0&&(O=u(l()),D[z]=O),O}function u(k){let N=[],L=[],I=[];for(let z=0;z<t;z++)N[z]=0,L[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:L,attributeDivisors:I,object:k,attributes:{},index:null}}function f(k,N,L,I){let z=r.attributes,U=N.attributes,H=0,$=L.getAttributes();for(let D in $)if($[D].location>=0){let G=z[D],ie=U[D];if(ie===void 0&&(D==="instanceMatrix"&&k.instanceMatrix&&(ie=k.instanceMatrix),D==="instanceColor"&&k.instanceColor&&(ie=k.instanceColor)),G===void 0||G.attribute!==ie||ie&&G.data!==ie.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function p(k,N,L,I){let z={},U=N.attributes,H=0,$=L.getAttributes();for(let D in $)if($[D].location>=0){let G=U[D];G===void 0&&(D==="instanceMatrix"&&k.instanceMatrix&&(G=k.instanceMatrix),D==="instanceColor"&&k.instanceColor&&(G=k.instanceColor));let ie={};ie.attribute=G,G&&G.data&&(ie.data=G.data),z[D]=ie,H++}r.attributes=z,r.attributesNum=H,r.index=I}function x(){let k=r.newAttributes;for(let N=0,L=k.length;N<L;N++)k[N]=0}function g(k){m(k,0)}function m(k,N){let L=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;L[k]=1,I[k]===0&&(s.enableVertexAttribArray(k),I[k]=1),z[k]!==N&&(s.vertexAttribDivisor(k,N),z[k]=N)}function _(){let k=r.newAttributes,N=r.enabledAttributes;for(let L=0,I=N.length;L<I;L++)N[L]!==k[L]&&(s.disableVertexAttribArray(L),N[L]=0)}function y(k,N,L,I,z,U,H){H===!0?s.vertexAttribIPointer(k,N,L,z,U):s.vertexAttribPointer(k,N,L,I,z,U)}function v(k,N,L,I){x();let z=I.attributes,U=L.getAttributes(),H=N.defaultAttributeValues;for(let $ in U){let D=U[$];if(D.location>=0){let O=z[$];if(O===void 0&&($==="instanceMatrix"&&k.instanceMatrix&&(O=k.instanceMatrix),$==="instanceColor"&&k.instanceColor&&(O=k.instanceColor)),O!==void 0){let G=O.normalized,ie=O.itemSize,se=e.get(O);if(se===void 0)continue;let ye=se.buffer,Te=se.type,Oe=se.bytesPerElement,Y=Te===s.INT||Te===s.UNSIGNED_INT||O.gpuType===Nl;if(O.isInterleavedBufferAttribute){let Q=O.data,pe=Q.stride,Re=O.offset;if(Q.isInstancedInterleavedBuffer){for(let xe=0;xe<D.locationSize;xe++)m(D.location+xe,Q.meshPerAttribute);k.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let xe=0;xe<D.locationSize;xe++)g(D.location+xe);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let xe=0;xe<D.locationSize;xe++)y(D.location+xe,ie/D.locationSize,Te,G,pe*Oe,(Re+ie/D.locationSize*xe)*Oe,Y)}else{if(O.isInstancedBufferAttribute){for(let Q=0;Q<D.locationSize;Q++)m(D.location+Q,O.meshPerAttribute);k.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Q=0;Q<D.locationSize;Q++)g(D.location+Q);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let Q=0;Q<D.locationSize;Q++)y(D.location+Q,ie/D.locationSize,Te,G,ie*Oe,ie/D.locationSize*Q*Oe,Y)}}else if(H!==void 0){let G=H[$];if(G!==void 0)switch(G.length){case 2:s.vertexAttrib2fv(D.location,G);break;case 3:s.vertexAttrib3fv(D.location,G);break;case 4:s.vertexAttrib4fv(D.location,G);break;default:s.vertexAttrib1fv(D.location,G)}}}}_()}function b(){w();for(let k in n){let N=n[k];for(let L in N){let I=N[L];for(let z in I){let U=I[z];for(let H in U)h(U[H].object),delete U[H];delete I[z]}}delete n[k]}}function S(k){if(n[k.id]===void 0)return;let N=n[k.id];for(let L in N){let I=N[L];for(let z in I){let U=I[z];for(let H in U)h(U[H].object),delete U[H];delete I[z]}}delete n[k.id]}function A(k){for(let N in n){let L=n[N];for(let I in L){let z=L[I];if(z[k.id]===void 0)continue;let U=z[k.id];for(let H in U)h(U[H].object),delete U[H];delete z[k.id]}}}function M(k){for(let N in n){let L=n[N],I=k.isInstancedMesh===!0?k.id:0,z=L[I];if(z!==void 0){for(let U in z){let H=z[U];for(let $ in H)h(H[$].object),delete H[$];delete z[U]}delete L[I],Object.keys(L).length===0&&delete n[N]}}}function w(){R(),a=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function rM(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function aM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==xn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let M=A===ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==rn&&A!==wn&&!M&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,maxSamples:b,samples:S}}function oM(s){let e=this,t=null,n=0,i=!1,r=!1,a=new $n,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,y=_*4,v=m.clippingState||null;l.value=v,v=h(p,u,y,f);for(let b=0;b!==y;++b)v[b]=t[b];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,v=f;y!==x;++y,v+=4)a.copy(d[y]).applyMatrix4(_,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Fr=4,lM=6,cM=20,hM=256,Ya=new Dn,Rm=new Se,$u=null,Ku=0,Yu=0,Zu=!1,uM=new T,Bs=new T,Br=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=uM}=r;$u=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($u,Ku,Yu),this._renderer.xr.enabled=Zu,e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$u=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ot,minFilter:ot,generateMipmaps:!1,type:ei,format:xn,colorSpace:fn,depthBuffer:!1},i=Cm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dM(r)),this._blurMaterial=pM(r,e,t),this._ggxMaterial=fM(r,e,t)}return i}_compileMaterial(e){let t=new Xe(new tt,e);this._renderer.compile(t,Ya)}_sceneToCubeUV(e,t,n,i,r){let l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Rm),d.toneMapping=Qn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xe(new zn,new Gt({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,_=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,m=!0):(g.color.copy(Rm),m=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let b=this._cubeSize;Ur(i,v*b,y>2?b:0,b,b),d.setRenderTarget(i),m&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===as||e.mapping===Us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Im()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=km());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ur(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ya)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Fr?n-p+Fr:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Ur(r,g,m,3*x,2*x),i.setRenderTarget(r),i.render(o,Ya),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Ur(e,g,m,3*x,2*x),i.setRenderTarget(e),i.render(o,Ya)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-Fr?i-this._lodMax+Fr:0),u=4*(this._cubeSize-h);Ur(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Ya)}};function dM(s){let e=[],t=[],n=s,i=s-Fr+1+lM;for(let r=0;r<i;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let m=0;m<d;m++){let _=m%3*2/3-1,y=m>2?0:-1,v=[_,y,0,_+2/3,y,0,_+2/3,y+1,0,_,y,0,_+2/3,y+1,0,_,y+1,0];p.set(v,f*u*m);for(let b=0;b<u;b++){let S=h[b*2]*2-1,A=h[b*2+1]*2-1;m===0?Bs.set(1,A,S):m===1?Bs.set(-S,1,-A):m===2?Bs.set(-S,A,1):m===3?Bs.set(-1,A,-S):m===4?Bs.set(-S,-1,A):Bs.set(S,A,-1),Bs.toArray(x,(m*u+b)*f)}}let g=new tt;g.setAttribute("position",new bt(p,f)),g.setAttribute("outputDirection",new bt(x,f)),t.push(new Xe(g,null)),n>Fr&&n--}return{lodMeshes:t,sizeLods:e}}function Cm(s,e,t){let n=new Vt(s,e,t);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function fM(s,e,t){return new Yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ec(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function pM(s,e,t){return new Yt({name:"SphericalGaussianBlur",defines:{SAMPLES:cM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ec(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function km(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Im(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ec(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bc=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ra(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new zn(5,5,5),r=new Yt({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:pi});r.uniforms.tEquirect.value=t;let a=new Xe(i,r),o=t.minFilter;return t.minFilter===En&&(t.minFilter=ot),new Al(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};function mM(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Il||f===Pl)if(e.has(u)){let p=e.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new bc(p.height);return x.fromEquirectangularTexture(s,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===Il||f===Pl,x=f===as||f===Us;if(p||x){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Br(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let _=u.image;return p&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new Br(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===Il?u.mapping=as:f===Pl&&(u.mapping=Us),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function gM(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ts("WebGLRenderer: "+n+" extension not supported."),i}}}function xM(s,e,t,n){let i={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete i[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let _=f.array;x=f.version;for(let y=0,v=_.length;y<v;y+=3){let b=_[y+0],S=_[y+1],A=_[y+2];u.push(b,S,S,A,A,b)}}else{let _=p.array;x=p.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let b=y+0,S=y+1,A=y+2;u.push(b,S,S,A,A,b)}}let g=new(p.count>=65535?ya:va)(u,1);g.version=x;let m=r.get(d);m&&e.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function _M(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function vM(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:ze("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function yM(s,e,t){let n=new WeakMap,i=new Je;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],y=0;f===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let v=o.attributes.position.count*y,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*b*4*d),A=new xa(S,v,b,d);A.type=wn,A.needsUpdate=!0;let M=y*4;for(let R=0;R<d;R++){let k=g[R],N=m[R],L=_[R],I=v*b*4*R;for(let z=0;z<k.count;z++){let U=z*M;f===!0&&(i.fromBufferAttribute(k,z),S[I+U+0]=i.x,S[I+U+1]=i.y,S[I+U+2]=i.z,S[I+U+3]=0),p===!0&&(i.fromBufferAttribute(N,z),S[I+U+4]=i.x,S[I+U+5]=i.y,S[I+U+6]=i.z,S[I+U+7]=0),x===!0&&(i.fromBufferAttribute(L,z),S[I+U+8]=i.x,S[I+U+9]=i.y,S[I+U+10]=i.z,S[I+U+11]=L.itemSize===4?i.w:1)}}u={count:d,texture:A,size:new re(v,b)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function MM(s,e,t,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var bM={[Mu]:"LINEAR_TONE_MAPPING",[bu]:"REINHARD_TONE_MAPPING",[Su]:"CINEON_TONE_MAPPING",[Oa]:"ACES_FILMIC_TONE_MAPPING",[rs]:"AGX_TONE_MAPPING",[wu]:"NEUTRAL_TONE_MAPPING",[Eu]:"CUSTOM_TONE_MAPPING"};function SM(s,e,t,n,i,r){let a=new Vt(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new tt;c.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new He([0,2,0,0,2,0],2));let h=new xl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Xe(c,h),u=new Dn(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,_=[],y=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),l!==null&&l.setSize(v,b);for(let S=0;S<_.length;S++){let A=_[S];A.setSize&&A.setSize(v,b)}},this.setEffects=function(v){_=v,y=_.length>0&&_[0].isRenderPass===!0;let b=a.width,S=a.height;_.length>0&&o===null&&(o=new Vt(b,S,{type:ei,depthBuffer:!1,stencilBuffer:!1}),l=new Vt(b,S,{type:ei,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<_.length;A++){let M=_[A];M.setSize&&M.setSize(b,S)}},this.begin=function(v,b){if(x||v.toneMapping===Qn&&_.length===0)return!1;if(m=b,b!==null){let S=b.width,A=b.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return y===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=Qn,!0},this.hasRenderPass=function(){return y},this.end=function(v,b){v.toneMapping=g,x=!0;let S=a,A=o;for(let M=0;M<_.length;M++){let w=_[M];w.enabled!==!1&&(w.render(v,A,S,b),w.needsSwap!==!1&&(S=A,A=A===o?l:o))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,h.defines={},qe.getTransfer(f)===at&&(h.defines.SRGB_TRANSFER="");let M=bM[p];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(m),v.render(d,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var jm=new Et,Qu=new Nn(1,1),Jm=new xa,Qm=new ul,eg=new Ra,Pm=[],Lm=[],Nm=new Float32Array(16),zm=new Float32Array(9),Dm=new Float32Array(4);function Hr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Pm[i];if(r===void 0&&(r=new Float32Array(i),Pm[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function wc(s,e){let t=Lm[e];t===void 0&&(t=new Int32Array(e),Lm[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function EM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function wM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),Ut(t,e)}}function TM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),Ut(t,e)}}function AM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),Ut(t,e)}}function RM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Dm.set(n),s.uniformMatrix2fv(this.addr,!1,Dm),Ut(t,n)}}function CM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;zm.set(n),s.uniformMatrix3fv(this.addr,!1,zm),Ut(t,n)}}function kM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Nm.set(n),s.uniformMatrix4fv(this.addr,!1,Nm),Ut(t,n)}}function IM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function PM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),Ut(t,e)}}function LM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),Ut(t,e)}}function NM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),Ut(t,e)}}function zM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function DM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),Ut(t,e)}}function UM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),Ut(t,e)}}function FM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),Ut(t,e)}}function OM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Qu.compareFunction=t.isReversedDepthBuffer()?_c:xc,r=Qu):r=jm,t.setTexture2D(e||r,i)}function BM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qm,i)}function HM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||eg,i)}function VM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jm,i)}function GM(s){switch(s){case 5126:return EM;case 35664:return wM;case 35665:return TM;case 35666:return AM;case 35674:return RM;case 35675:return CM;case 35676:return kM;case 5124:case 35670:return IM;case 35667:case 35671:return PM;case 35668:case 35672:return LM;case 35669:case 35673:return NM;case 5125:return zM;case 36294:return DM;case 36295:return UM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return BM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return VM}}function WM(s,e){s.uniform1fv(this.addr,e)}function XM(s,e){let t=Hr(e,this.size,2);s.uniform2fv(this.addr,t)}function qM(s,e){let t=Hr(e,this.size,3);s.uniform3fv(this.addr,t)}function $M(s,e){let t=Hr(e,this.size,4);s.uniform4fv(this.addr,t)}function KM(s,e){let t=Hr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function YM(s,e){let t=Hr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ZM(s,e){let t=Hr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function jM(s,e){s.uniform1iv(this.addr,e)}function JM(s,e){s.uniform2iv(this.addr,e)}function QM(s,e){s.uniform3iv(this.addr,e)}function eb(s,e){s.uniform4iv(this.addr,e)}function tb(s,e){s.uniform1uiv(this.addr,e)}function nb(s,e){s.uniform2uiv(this.addr,e)}function ib(s,e){s.uniform3uiv(this.addr,e)}function sb(s,e){s.uniform4uiv(this.addr,e)}function rb(s,e,t){let n=this.cache,i=e.length,r=wc(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Qu:a=jm;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function ab(s,e,t){let n=this.cache,i=e.length,r=wc(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Qm,r[a])}function ob(s,e,t){let n=this.cache,i=e.length,r=wc(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||eg,r[a])}function lb(s,e,t){let n=this.cache,i=e.length,r=wc(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Jm,r[a])}function cb(s){switch(s){case 5126:return WM;case 35664:return XM;case 35665:return qM;case 35666:return $M;case 35674:return KM;case 35675:return YM;case 35676:return ZM;case 5124:case 35670:return jM;case 35667:case 35671:return JM;case 35668:case 35672:return QM;case 35669:case 35673:return eb;case 5125:return tb;case 36294:return nb;case 36295:return ib;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return rb;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return lb}}var ed=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=GM(t.type)}},td=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cb(t.type)}},nd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},ju=/(\w+)(\])?(\[|\.)?/g;function Um(s,e){s.seq.push(e),s.map[e.id]=e}function hb(s,e,t){let n=s.name,i=n.length;for(ju.lastIndex=0;;){let r=ju.exec(n),a=ju.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Um(t,c===void 0?new ed(o,s,e):new td(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new nd(o),Um(t,d)),t=d}}}var Or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);hb(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Fm(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var ub=37297,db=0;function fb(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Om=new Fe;function pb(s){qe._getMatrix(Om,qe.workingColorSpace,s);let e=`mat3( ${Om.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(s)){case ma:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Bm(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+fb(s.getShaderSource(e),o)}else return r}function mb(s,e){let t=pb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var gb={[Mu]:"Linear",[bu]:"Reinhard",[Su]:"Cineon",[Oa]:"ACESFilmic",[rs]:"AgX",[wu]:"Neutral",[Eu]:"Custom"};function xb(s,e){let t=gb[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Mc=new T;function _b(){qe.getLuminanceCoefficients(Mc);let s=Mc.x.toFixed(4),e=Mc.y.toFixed(4),t=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function yb(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Mb(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ja(s){return s!==""}function Hm(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(s){return s.replace(bb,Eb)}var Sb=new Map;function Eb(s,e){let t=Ve[e];if(t===void 0){let n=Sb.get(e);if(n!==void 0)t=Ve[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return id(t)}var wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gm(s){return s.replace(wb,Tb)}function Tb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Ab={[Ua]:"SHADOWMAP_TYPE_PCF",[Ir]:"SHADOWMAP_TYPE_VSM"};function Rb(s){return Ab[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Cb={[as]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[Ba]:"ENVMAP_TYPE_CUBE_UV"};function kb(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Cb[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ib={[Us]:"ENVMAP_MODE_REFRACTION"};function Pb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ib[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Lb={[kl]:"ENVMAP_BLENDING_MULTIPLY",[am]:"ENVMAP_BLENDING_MIX",[om]:"ENVMAP_BLENDING_ADD"};function Nb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Lb[s.combine]||"ENVMAP_BLENDING_NONE"}function zb(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Db(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Rb(t),c=kb(t),h=Pb(t),d=Nb(t),u=zb(t),f=vb(t),p=yb(r),x=i.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ja).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ja).join(`
`),m.length>0&&(m+=`
`)):(g=[Wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),m=[Wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Qn?xb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,mb("linearToOutputTexel",t.outputColorSpace),_b(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ja).join(`
`)),a=id(a),a=Hm(a,t),a=Vm(a,t),o=id(o),o=Hm(o,t),o=Vm(o,t),a=Gm(a),o=Gm(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=_+g+a,v=_+m+o,b=Fm(i,i.VERTEX_SHADER,y),S=Fm(i,i.FRAGMENT_SHADER,v);i.attachShader(x,b),i.attachShader(x,S),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(k){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(x)||"",L=i.getShaderInfoLog(b)||"",I=i.getShaderInfoLog(S)||"",z=N.trim(),U=L.trim(),H=I.trim(),$=!0,D=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,b,S);else{let O=Bm(i,b,"vertex"),G=Bm(i,S,"fragment");ze("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+z+`
`+O+`
`+G)}else z!==""?ke("WebGLProgram: Program Info Log:",z):(U===""||H==="")&&(D=!1);D&&(k.diagnostics={runnable:$,programLog:z,vertexShader:{log:U,prefix:g},fragmentShader:{log:H,prefix:m}})}i.deleteShader(b),i.deleteShader(S),M=new Or(i,x),w=Mb(i,x)}let M;this.getUniforms=function(){return M===void 0&&A(this),M};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(x,ub)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=db++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=S,this}var Ub=0,sd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rd(e),t.set(e,n)),n}},rd=class{constructor(e){this.id=Ub++,this.code=e,this.usedTimes=0}};function Fb(s){return s===ls||s===Xa||s===qa}function Ob(s,e,t,n,i,r){let a=new _a,o=new sd,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return l.add(M),M===0?"uv":`uv${M}`}function x(M,w,R,k,N,L){let I=k.fog,z=N.geometry,U=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,H=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,$=e.get(M.envMap||U,H),D=$&&$.mapping===Ba?$.image.height:null,O=f[M.type];M.precision!==null&&(u=n.getMaxPrecision(M.precision),u!==M.precision&&ke("WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));let G=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ie=G!==void 0?G.length:0,se=0;z.morphAttributes.position!==void 0&&(se=1),z.morphAttributes.normal!==void 0&&(se=2),z.morphAttributes.color!==void 0&&(se=3);let ye,Te,Oe,Y;if(O){let mt=gi[O];ye=mt.vertexShader,Te=mt.fragmentShader}else{ye=M.vertexShader,Te=M.fragmentShader;let mt=o.getVertexShaderStage(M),st=o.getFragmentShaderStage(M);o.update(M,mt,st),Oe=mt.id,Y=st.id}let Q=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),Re=N.isInstancedMesh===!0,xe=N.isBatchedMesh===!0,Ue=!!M.map,St=!!M.matcap,Ye=!!$,it=!!M.aoMap,pt=!!M.lightMap,je=!!M.bumpMap&&M.wireframe===!1,yt=!!M.normalMap,Ot=!!M.displacementMap,vn=!!M.emissiveMap,Mt=!!M.metalnessMap,It=!!M.roughnessMap,V=M.anisotropy>0,Jt=M.clearcoat>0,lt=M.dispersion>0,P=M.retroreflectivity>0,E=M.iridescence>0,W=M.sheen>0,K=M.transmission>0,j=V&&!!M.anisotropyMap,ae=Jt&&!!M.clearcoatMap,oe=Jt&&!!M.clearcoatNormalMap,J=Jt&&!!M.clearcoatRoughnessMap,te=E&&!!M.iridescenceMap,le=E&&!!M.iridescenceThicknessMap,Ie=W&&!!M.sheenColorMap,de=W&&!!M.sheenRoughnessMap,ce=!!M.specularMap,Pe=!!M.specularColorMap,Ne=!!M.specularIntensityMap,Be=K&&!!M.transmissionMap,B=K&&!!M.thicknessMap,he=!!M.gradientMap,ee=!!M.alphaMap,ue=M.alphaTest>0,ve=!!M.alphaHash,ne=!!M.extensions,Le=Qn;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Le=s.toneMapping);let Ae={shaderID:O,shaderType:M.type,shaderName:M.name,vertexShader:ye,fragmentShader:Te,defines:M.defines,customVertexShaderID:Oe,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:xe,batchingColor:xe&&N._colorsTexture!==null,instancing:Re,instancingColor:Re&&N.instanceColor!==null,instancingMorph:Re&&N.morphTexture!==null,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ue,matcap:St,envMap:Ye,envMapMode:Ye&&$.mapping,envMapCubeUVHeight:D,aoMap:it,lightMap:pt,bumpMap:je,normalMap:yt,displacementMap:Ot,emissiveMap:vn,normalMapObjectSpace:yt&&M.normalMapType===um,normalMapTangentSpace:yt&&M.normalMapType===Ka,packedNormalMap:yt&&M.normalMapType===Ka&&Fb(M.normalMap.format),metalnessMap:Mt,roughnessMap:It,anisotropy:V,anisotropyMap:j,clearcoat:Jt,clearcoatMap:ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:J,dispersion:lt,retroreflection:P,iridescence:E,iridescenceMap:te,iridescenceThicknessMap:le,sheen:W,sheenColorMap:Ie,sheenRoughnessMap:de,specularMap:ce,specularColorMap:Pe,specularIntensityMap:Ne,transmission:K,transmissionMap:Be,thicknessMap:B,gradientMap:he,opaque:M.transparent===!1&&M.blending===Pr&&M.alphaToCoverage===!1,alphaMap:ee,alphaTest:ue,alphaHash:ve,combine:M.combine,mapUv:Ue&&p(M.map.channel),aoMapUv:it&&p(M.aoMap.channel),lightMapUv:pt&&p(M.lightMap.channel),bumpMapUv:je&&p(M.bumpMap.channel),normalMapUv:yt&&p(M.normalMap.channel),displacementMapUv:Ot&&p(M.displacementMap.channel),emissiveMapUv:vn&&p(M.emissiveMap.channel),metalnessMapUv:Mt&&p(M.metalnessMap.channel),roughnessMapUv:It&&p(M.roughnessMap.channel),anisotropyMapUv:j&&p(M.anisotropyMap.channel),clearcoatMapUv:ae&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:de&&p(M.sheenRoughnessMap.channel),specularMapUv:ce&&p(M.specularMap.channel),specularColorMapUv:Pe&&p(M.specularColorMap.channel),specularIntensityMapUv:Ne&&p(M.specularIntensityMap.channel),transmissionMapUv:Be&&p(M.transmissionMap.channel),thicknessMapUv:B&&p(M.thicknessMap.channel),alphaMapUv:ee&&p(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(yt||V),vertexNormals:!!z.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Ue||ee),fog:!!I,useFog:M.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||z.attributes.normal===void 0&&yt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:se,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ue&&M.map.isVideoTexture===!0&&qe.getTransfer(M.map.colorSpace)===at,decodeVideoTextureEmissive:vn&&M.emissiveMap.isVideoTexture===!0&&qe.getTransfer(M.emissiveMap.colorSpace)===at,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===sn,flipSided:M.side===zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ne&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&M.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function g(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)w.push(R),w.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(m(w,M),_(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function m(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numSunLights),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numSunLightShadows),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function y(M){let w=f[M.type],R;if(w){let k=gi[w];R=wm.clone(k.uniforms)}else R=M.uniforms;return R}function v(M,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new Db(s,w,M,i),c.push(R),h.set(w,R)),R}function b(M){if(--M.usedTimes===0){let w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function S(M){o.remove(M)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:y,acquireProgram:v,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:A}}function Bb(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Hb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Xm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qm(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,g,m){let _=s[e];return _===void 0?(_={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},s[e]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=p,_.materialVariant=a(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=g,_.group=m),e++,_}function l(u,f,p,x,g,m,_){_.reversedDepth===!0&&(g=-g);let y=o(u,f,p,x,g,m);p.transmission>0?n.push(y):p.transparent===!0?i.push(y):t.push(y)}function c(u,f,p,x,g,m){let _=o(u,f,p,x,g,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function h(u,f){t.length>1&&t.sort(u||Hb),n.length>1&&n.sort(f||Xm),i.length>1&&i.sort(f||Xm)}function d(){for(let u=e,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Vb(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new qm,s.set(n,[a])):i>=r.length?(a=new qm,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Gb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new T,color:new Se};break;case"SpotLight":t={position:new T,direction:new T,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new T,halfWidth:new T,halfHeight:new T};break}return s[e.id]=t,t}}}function Wb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Xb=0;function qb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function $b(s){let e=new Gb,t=Wb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);let i=new T,r=new _e,a=new _e;function o(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,_=0,y=0,v=0,b=0,S=0,A=0,M=0,w=0,R=0;c.sort(qb);for(let N=0,L=c.length;N<L;N++){let I=c[N],z=I.color,U=I.intensity,H=I.distance,$=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ls?$=I.shadow.map.texture:$=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*U,d+=z.g*U,u+=z.b*U;else if(I.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(I.sh.coefficients[D],U);R++}else if(I.isSunLight){let D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let O=I.shadow,G=t.get(I);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),n.sunShadow[p]=G,n.sunShadowMap[p]=$;let ie=O.getViewportCount();for(let se=0;se<ie;se++)n.sunShadowMatrix[x+se]=O.getMatrix(se),n.sunShadowCascade[x+se]=O._cascadeData[se];x+=ie,p++}n.sun[f]=D,f++}else if(I.isDirectionalLight){let D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let O=I.shadow,G=t.get(I);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,n.directionalShadow[g]=G,n.directionalShadowMap[g]=$,n.directionalShadowMatrix[g]=I.shadow.matrix,b++}n.directional[g]=D,g++}else if(I.isSpotLight){let D=e.get(I);D.position.setFromMatrixPosition(I.matrixWorld),D.color.copy(z).multiplyScalar(U),D.distance=H,D.coneCos=Math.cos(I.angle),D.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),D.decay=I.decay,n.spot[_]=D;let O=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,O.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[_]=O.matrix,I.castShadow){let G=t.get(I);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=$,A++}_++}else if(I.isRectAreaLight){let D=e.get(I);D.color.copy(z).multiplyScalar(U),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),n.rectArea[y]=D,y++}else if(I.isPointLight){let D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),D.distance=I.distance,D.decay=I.decay,I.castShadow){let O=I.shadow,G=t.get(I);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,G.shadowCameraNear=O.camera.near,G.shadowCameraFar=O.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=$,n.pointShadowMatrix[m]=I.shadow.matrix,S++}n.point[m]=D,m++}else if(I.isHemisphereLight){let D=e.get(I);D.skyColor.copy(I.color).multiplyScalar(U),D.groundColor.copy(I.groundColor).multiplyScalar(U),n.hemi[v]=D,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let k=n.hash;(k.sunLength!==f||k.directionalLength!==g||k.pointLength!==m||k.spotLength!==_||k.rectAreaLength!==y||k.hemiLength!==v||k.numSunShadows!==p||k.numDirectionalShadows!==b||k.numPointShadows!==S||k.numSpotShadows!==A||k.numSpotMaps!==M||k.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=_,n.rectArea.length=y,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,k.sunLength=f,k.directionalLength=g,k.pointLength=m,k.spotLength=_,k.rectAreaLength=y,k.hemiLength=v,k.numSunShadows=p,k.numDirectionalShadows=b,k.numPointShadows=S,k.numSpotShadows=A,k.numSpotMaps=M,k.numLightProbes=R,n.version=Xb++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){let v=c[_];if(v.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),u++}else if(v.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function $m(s){let e=new $b(s),t=[],n=[],i=[];function r(u){d.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Kb(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new $m(s),e.set(i,[o])):r>=a.length?(o=new $m(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jb=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],Jb=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],Km=new _e,Za=new T,Ju=new T;function Qb(s,e,t){let n=new Sr,i=new re,r=new re,a=new Je,o=new _l,l=new vl,c={},h=t.maxTextureSize,d={[Un]:zt,[zt]:Un,[sn]:sn},u=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Yb,fragmentShader:Zb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new tt;p.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xe(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ua;let m=this.type;this.render=function(S,A,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Hp&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ua);let w=s.getRenderTarget(),R=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),N=s.state;N.setBlending(pi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let L=m!==this.type;L&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=S.length;I<z;I++){let U=S[I],H=U.shadow;if(H===void 0){ke("WebGLShadowMap:",U,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let $=H.getFrameExtents();i.multiply($),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,H.mapSize.y=r.y));let D=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=D,H.map===null||L===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ir){if(U.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Vt(i.x,i.y,{format:ls,type:ei,minFilter:ot,magFilter:ot,generateMipmaps:!1}),H.map.texture.name=U.name+".shadowMap",H.map.depthTexture=new Nn(i.x,i.y,wn),H.map.depthTexture.name=U.name+".shadowMapDepth",H.map.depthTexture.format=ci,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rt,H.map.depthTexture.magFilter=Rt}else U.isPointLight?(H.map=new bc(i.x),H.map.depthTexture=new pl(i.x,gn)):(H.map=new Vt(i.x,i.y),H.map.depthTexture=new Nn(i.x,i.y,gn)),H.map.depthTexture.name=U.name+".shadowMap",H.map.depthTexture.format=ci,this.type===Ua?(H.map.depthTexture.compareFunction=D?_c:xc,H.map.depthTexture.minFilter=ot,H.map.depthTexture.magFilter=ot):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rt,H.map.depthTexture.magFilter=Rt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==i.x||H.map.height!==i.y)&&H.map.setSize(i.x,i.y);let O=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();U.isPointLight!==!0&&H.updateMatrices(U,M);for(let G=0;G<O;G++){let ie=H.getCamera(G);if(U.isPointLight){let se=H.camera,ye=H.matrix,Te=U.distance||se.far;Te!==se.far&&(se.far=Te,se.updateProjectionMatrix()),Za.setFromMatrixPosition(U.matrixWorld),se.position.copy(Za),Ju.copy(se.position),Ju.add(jb[G]),se.up.copy(Jb[G]),se.lookAt(Ju),se.updateMatrixWorld(),ye.makeTranslation(-Za.x,-Za.y,-Za.z),Km.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Km,se.coordinateSystem,se.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,G),s.clear();else{G===0&&(s.setRenderTarget(H.map),s.clear());let se=H.getViewport(G);a.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),N.viewport(a)}n=H.getFrustum(G),v(A,M,ie,U,this.type)}H.isPointLightShadow!==!0&&this.type===Ir&&_(H,M),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(w,R,k)};function _(S,A){let M=e.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Vt(i.x,i.y,{format:ls,type:ei}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(A,null,M,u,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(A,null,M,f,x,null)}function y(S,A,M,w){let R=null,k=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(k!==void 0)R=k;else if(R=M.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=R.uuid,L=A.uuid,I=c[N];I===void 0&&(I={},c[N]=I);let z=I[L];z===void 0&&(z=R.clone(),I[L]=z,A.addEventListener("dispose",b)),R=z}if(R.visible=A.visible,R.wireframe=A.wireframe,w===Ir?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=s.properties.get(R);N.light=M}return R}function v(S,A,M,w,R){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===Ir)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let L=e.update(S),I=S.material;if(Array.isArray(I)){let z=L.groups;for(let U=0,H=z.length;U<H;U++){let $=z[U],D=I[$.materialIndex];if(D&&D.visible){let O=y(S,D,w,R);S.onBeforeShadow(s,S,A,M,L,O,$),s.renderBufferDirect(M,null,L,O,S,$),S.onAfterShadow(s,S,A,M,L,O,$)}}}else if(I.visible){let z=y(S,I,w,R);S.onBeforeShadow(s,S,A,M,L,z,null),s.renderBufferDirect(M,null,L,z,S,null),S.onAfterShadow(s,S,A,M,L,z,null)}}let N=S.children;for(let L=0,I=N.length;L<I;L++)v(N[L],A,M,w,R)}function b(S){S.target.removeEventListener("dispose",b);for(let M in c){let w=c[M],R=S.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function e1(s,e){function t(){let B=!1,he=new Je,ee=null,ue=new Je(0,0,0,0);return{setMask:function(ve){ee!==ve&&!B&&(s.colorMask(ve,ve,ve,ve),ee=ve)},setLocked:function(ve){B=ve},setClear:function(ve,ne,Le,Ae,mt){mt===!0&&(ve*=Ae,ne*=Ae,Le*=Ae),he.set(ve,ne,Le,Ae),ue.equals(he)===!1&&(s.clearColor(ve,ne,Le,Ae),ue.copy(he))},reset:function(){B=!1,ee=null,ue.set(-1,0,0,0)}}}function n(){let B=!1,he=!1,ee=null,ue=null,ve=null;return{setReversed:function(ne){if(he!==ne){let Le=e.get("EXT_clip_control");ne?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),he=ne;let Ae=ve;ve=null,this.setClear(Ae)}},getReversed:function(){return he},setTest:function(ne){ne?Q(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(ne){ee!==ne&&!B&&(s.depthMask(ne),ee=ne)},setFunc:function(ne){if(he&&(ne=bm[ne]),ue!==ne){switch(ne){case nl:s.depthFunc(s.NEVER);break;case il:s.depthFunc(s.ALWAYS);break;case sl:s.depthFunc(s.LESS);break;case pr:s.depthFunc(s.LEQUAL);break;case rl:s.depthFunc(s.EQUAL);break;case al:s.depthFunc(s.GEQUAL);break;case ol:s.depthFunc(s.GREATER);break;case ll:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=ne}},setLocked:function(ne){B=ne},setClear:function(ne){ve!==ne&&(ve=ne,he&&(ne=1-ne),s.clearDepth(ne))},reset:function(){B=!1,ee=null,ue=null,ve=null,he=!1}}}function i(){let B=!1,he=null,ee=null,ue=null,ve=null,ne=null,Le=null,Ae=null,mt=null;return{setTest:function(st){B||(st?Q(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(st){he!==st&&!B&&(s.stencilMask(st),he=st)},setFunc:function(st,Gn,si){(ee!==st||ue!==Gn||ve!==si)&&(s.stencilFunc(st,Gn,si),ee=st,ue=Gn,ve=si)},setOp:function(st,Gn,si){(ne!==st||Le!==Gn||Ae!==si)&&(s.stencilOp(st,Gn,si),ne=st,Le=Gn,Ae=si)},setLocked:function(st){B=st},setClear:function(st){mt!==st&&(s.clearStencil(st),mt=st)},reset:function(){B=!1,he=null,ee=null,ue=null,ve=null,ne=null,Le=null,Ae=null,mt=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,_=null,y=null,v=null,b=null,S=null,A=null,M=new Se(0,0,0),w=0,R=!1,k=null,N=null,L=null,I=null,z=null,U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,$=0,D=s.getParameter(s.VERSION);D.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(D)[1]),H=$>=1):D.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),H=$>=2);let O=null,G={},ie=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),ye=new Je().fromArray(ie),Te=new Je().fromArray(se);function Oe(B,he,ee,ue){let ve=new Uint8Array(4),ne=s.createTexture();s.bindTexture(B,ne),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<ee;Le++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(he+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return ne}let Y={};Y[s.TEXTURE_2D]=Oe(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(s.DEPTH_TEST),a.setFunc(pr),je(!1),yt(gu),Q(s.CULL_FACE),it(pi);function Q(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function pe(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function Re(B,he){return u[B]!==he?(s.bindFramebuffer(B,he),u[B]=he,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=he),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=he),!0):!1}function xe(B,he){let ee=p,ue=!1;if(B){ee=f.get(he),ee===void 0&&(ee=[],f.set(he,ee));let ve=B.textures;if(ee.length!==ve.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let ne=0,Le=ve.length;ne<Le;ne++)ee[ne]=s.COLOR_ATTACHMENT0+ne;ee.length=ve.length,ue=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,ue=!0);ue&&s.drawBuffers(ee)}function Ue(B){return x!==B?(s.useProgram(B),x=B,!0):!1}let St={[Ds]:s.FUNC_ADD,[Gp]:s.FUNC_SUBTRACT,[Wp]:s.FUNC_REVERSE_SUBTRACT};St[Xp]=s.MIN,St[qp]=s.MAX;let Ye={[$p]:s.ZERO,[Kp]:s.ONE,[Yp]:s.SRC_COLOR,[vu]:s.SRC_ALPHA,[tm]:s.SRC_ALPHA_SATURATE,[Qp]:s.DST_COLOR,[jp]:s.DST_ALPHA,[Zp]:s.ONE_MINUS_SRC_COLOR,[yu]:s.ONE_MINUS_SRC_ALPHA,[em]:s.ONE_MINUS_DST_COLOR,[Jp]:s.ONE_MINUS_DST_ALPHA,[nm]:s.CONSTANT_COLOR,[im]:s.ONE_MINUS_CONSTANT_COLOR,[sm]:s.CONSTANT_ALPHA,[rm]:s.ONE_MINUS_CONSTANT_ALPHA};function it(B,he,ee,ue,ve,ne,Le,Ae,mt,st){if(B===pi){g===!0&&(pe(s.BLEND),g=!1);return}if(g===!1&&(Q(s.BLEND),g=!0),B!==Vp){if(B!==m||st!==R){if((_!==Ds||b!==Ds)&&(s.blendEquation(s.FUNC_ADD),_=Ds,b=Ds),st)switch(B){case Pr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fa:s.blendFunc(s.ONE,s.ONE);break;case xu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _u:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ze("WebGLState: Invalid blending: ",B);break}else switch(B){case Pr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case xu:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _u:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",B);break}y=null,v=null,S=null,A=null,M.set(0,0,0),w=0,m=B,R=st}return}ve=ve||he,ne=ne||ee,Le=Le||ue,(he!==_||ve!==b)&&(s.blendEquationSeparate(St[he],St[ve]),_=he,b=ve),(ee!==y||ue!==v||ne!==S||Le!==A)&&(s.blendFuncSeparate(Ye[ee],Ye[ue],Ye[ne],Ye[Le]),y=ee,v=ue,S=ne,A=Le),(Ae.equals(M)===!1||mt!==w)&&(s.blendColor(Ae.r,Ae.g,Ae.b,mt),M.copy(Ae),w=mt),m=B,R=!1}function pt(B,he){B.side===sn?pe(s.CULL_FACE):Q(s.CULL_FACE);let ee=B.side===zt;he&&(ee=!ee),je(ee),B.blending===Pr&&B.transparent===!1?it(pi):it(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let ue=B.stencilWrite;o.setTest(ue),ue&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),vn(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function je(B){k!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),k=B)}function yt(B){B!==Op?(Q(s.CULL_FACE),B!==N&&(B===gu?s.cullFace(s.BACK):B===Bp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),N=B}function Ot(B){B!==L&&(H&&s.lineWidth(B),L=B)}function vn(B,he,ee){B?(Q(s.POLYGON_OFFSET_FILL),(I!==he||z!==ee)&&(I=he,z=ee,a.getReversed()&&(he=-he),s.polygonOffset(he,ee))):pe(s.POLYGON_OFFSET_FILL)}function Mt(B){B?Q(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function It(B){B===void 0&&(B=s.TEXTURE0+U-1),O!==B&&(s.activeTexture(B),O=B)}function V(B,he,ee){ee===void 0&&(O===null?ee=s.TEXTURE0+U-1:ee=O);let ue=G[ee];ue===void 0&&(ue={type:void 0,texture:void 0},G[ee]=ue),(ue.type!==B||ue.texture!==he)&&(O!==ee&&(s.activeTexture(ee),O=ee),s.bindTexture(B,he||Y[B]),ue.type=B,ue.texture=he)}function Jt(){let B=G[O];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function lt(){try{s.compressedTexImage2D(...arguments)}catch(B){ze("WebGLState:",B)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(B){ze("WebGLState:",B)}}function E(){try{s.texSubImage2D(...arguments)}catch(B){ze("WebGLState:",B)}}function W(){try{s.texSubImage3D(...arguments)}catch(B){ze("WebGLState:",B)}}function K(){try{s.compressedTexSubImage2D(...arguments)}catch(B){ze("WebGLState:",B)}}function j(){try{s.compressedTexSubImage3D(...arguments)}catch(B){ze("WebGLState:",B)}}function ae(){try{s.texStorage2D(...arguments)}catch(B){ze("WebGLState:",B)}}function oe(){try{s.texStorage3D(...arguments)}catch(B){ze("WebGLState:",B)}}function J(){try{s.texImage2D(...arguments)}catch(B){ze("WebGLState:",B)}}function te(){try{s.texImage3D(...arguments)}catch(B){ze("WebGLState:",B)}}function le(B){return d[B]!==void 0?d[B]:s.getParameter(B)}function Ie(B,he){d[B]!==he&&(s.pixelStorei(B,he),d[B]=he)}function de(B){ye.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),ye.copy(B))}function ce(B){Te.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Te.copy(B))}function Pe(B,he){let ee=c.get(he);ee===void 0&&(ee=new WeakMap,c.set(he,ee));let ue=ee.get(B);ue===void 0&&(ue=s.getUniformBlockIndex(he,B.name),ee.set(B,ue))}function Ne(B,he){let ue=c.get(he).get(B);l.get(he)!==ue&&(s.uniformBlockBinding(he,ue,B.__bindingPointIndex),l.set(he,ue))}function Be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},O=null,G={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,_=null,y=null,v=null,b=null,S=null,A=null,M=new Se(0,0,0),w=0,R=!1,k=null,N=null,L=null,I=null,z=null,ye.set(0,0,s.canvas.width,s.canvas.height),Te.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:pe,bindFramebuffer:Re,drawBuffers:xe,useProgram:Ue,setBlending:it,setMaterial:pt,setFlipSided:je,setCullFace:yt,setLineWidth:Ot,setPolygonOffset:vn,setScissorTest:Mt,activeTexture:It,bindTexture:V,unbindTexture:Jt,compressedTexImage2D:lt,compressedTexImage3D:P,texImage2D:J,texImage3D:te,pixelStorei:Ie,getParameter:le,updateUBOMapping:Pe,uniformBlockBinding:Ne,texStorage2D:ae,texStorage3D:oe,texSubImage2D:E,texSubImage3D:W,compressedTexSubImage2D:K,compressedTexSubImage3D:j,scissor:de,viewport:ce,reset:Be}}function t1(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,E){return p?new OffscreenCanvas(P,E):xr("canvas")}function g(P,E,W){let K=1,j=lt(P);if((j.width>W||j.height>W)&&(K=W/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ae=Math.floor(K*j.width),oe=Math.floor(K*j.height);u===void 0&&(u=x(ae,oe));let J=E?x(ae,oe):u;return J.width=ae,J.height=oe,J.getContext("2d").drawImage(P,0,0,ae,oe),ke("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ae+"x"+oe+")."),J}else return"data"in P&&ke("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),P;return P}function m(P){return P.generateMipmaps}function _(P){s.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(P,E,W,K,j,ae=!1){if(P!==null){if(s[P]!==void 0)return s[P];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let oe;K&&(oe=e.get("EXT_texture_norm16"),oe||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=E;if(E===s.RED&&(W===s.FLOAT&&(J=s.R32F),W===s.HALF_FLOAT&&(J=s.R16F),W===s.UNSIGNED_BYTE&&(J=s.R8),W===s.UNSIGNED_SHORT&&oe&&(J=oe.R16_EXT),W===s.SHORT&&oe&&(J=oe.R16_SNORM_EXT)),E===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.R8UI),W===s.UNSIGNED_SHORT&&(J=s.R16UI),W===s.UNSIGNED_INT&&(J=s.R32UI),W===s.BYTE&&(J=s.R8I),W===s.SHORT&&(J=s.R16I),W===s.INT&&(J=s.R32I)),E===s.RG&&(W===s.FLOAT&&(J=s.RG32F),W===s.HALF_FLOAT&&(J=s.RG16F),W===s.UNSIGNED_BYTE&&(J=s.RG8),W===s.UNSIGNED_SHORT&&oe&&(J=oe.RG16_EXT),W===s.SHORT&&oe&&(J=oe.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.RG8UI),W===s.UNSIGNED_SHORT&&(J=s.RG16UI),W===s.UNSIGNED_INT&&(J=s.RG32UI),W===s.BYTE&&(J=s.RG8I),W===s.SHORT&&(J=s.RG16I),W===s.INT&&(J=s.RG32I)),E===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.RGB8UI),W===s.UNSIGNED_SHORT&&(J=s.RGB16UI),W===s.UNSIGNED_INT&&(J=s.RGB32UI),W===s.BYTE&&(J=s.RGB8I),W===s.SHORT&&(J=s.RGB16I),W===s.INT&&(J=s.RGB32I)),E===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),W===s.UNSIGNED_INT&&(J=s.RGBA32UI),W===s.BYTE&&(J=s.RGBA8I),W===s.SHORT&&(J=s.RGBA16I),W===s.INT&&(J=s.RGBA32I)),E===s.RGB&&(W===s.UNSIGNED_SHORT&&oe&&(J=oe.RGB16_EXT),W===s.SHORT&&oe&&(J=oe.RGB16_SNORM_EXT),W===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),E===s.RGBA){let te=ae?ma:qe.getTransfer(j);W===s.FLOAT&&(J=s.RGBA32F),W===s.HALF_FLOAT&&(J=s.RGBA16F),W===s.UNSIGNED_BYTE&&(J=te===at?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT&&oe&&(J=oe.RGBA16_EXT),W===s.SHORT&&oe&&(J=oe.RGBA16_SNORM_EXT),W===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function b(P,E){let W;return P?E===null||E===gn||E===zr?W=s.DEPTH24_STENCIL8:E===wn?W=s.DEPTH32F_STENCIL8:E===Nr&&(W=s.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===gn||E===zr?W=s.DEPTH_COMPONENT24:E===wn?W=s.DEPTH_COMPONENT32F:E===Nr&&(W=s.DEPTH_COMPONENT16),W}function S(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Rt&&P.minFilter!==ot?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function A(P){let E=P.target;E.removeEventListener("dispose",A),w(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&d.delete(E)}function M(P){let E=P.target;E.removeEventListener("dispose",M),k(E)}function w(P){let E=n.get(P);if(E.__webglInit===void 0)return;let W=P.source,K=f.get(W);if(K){let j=K[E.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(P),Object.keys(K).length===0&&f.delete(W)}n.remove(P)}function R(P){let E=n.get(P);s.deleteTexture(E.__webglTexture);let W=P.source,K=f.get(W);delete K[E.__cacheKey],a.memory.textures--}function k(P){let E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let j=0;j<E.__webglFramebuffer[K].length;j++)s.deleteFramebuffer(E.__webglFramebuffer[K][j]);else s.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)s.deleteFramebuffer(E.__webglFramebuffer[K]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let W=P.textures;for(let K=0,j=W.length;K<j;K++){let ae=n.get(W[K]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(W[K])}n.remove(P)}let N=0;function L(){N=0}function I(){return N}function z(P){N=P}function U(){let P=N;return P>=i.maxTextures&&ke("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,P}function H(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function $(P,E){let W=n.get(P);if(P.isVideoTexture&&V(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let K=P.image;if(K===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{pe(W,P,E);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+E)}function D(P,E){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){pe(W,P,E);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+E)}function O(P,E){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){pe(W,P,E);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+E)}function G(P,E){let W=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){Re(W,P,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+E)}let ie={[li]:s.REPEAT,[Ln]:s.CLAMP_TO_EDGE,[mr]:s.MIRRORED_REPEAT},se={[Rt]:s.NEAREST,[Ll]:s.NEAREST_MIPMAP_NEAREST,[Fs]:s.NEAREST_MIPMAP_LINEAR,[ot]:s.LINEAR,[Lr]:s.LINEAR_MIPMAP_NEAREST,[En]:s.LINEAR_MIPMAP_LINEAR},ye={[fm]:s.NEVER,[_m]:s.ALWAYS,[pm]:s.LESS,[xc]:s.LEQUAL,[mm]:s.EQUAL,[_c]:s.GEQUAL,[gm]:s.GREATER,[xm]:s.NOTEQUAL};function Te(P,E){if(E.type===wn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ot||E.magFilter===Lr||E.magFilter===Fs||E.magFilter===En||E.minFilter===ot||E.minFilter===Lr||E.minFilter===Fs||E.minFilter===En)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ie[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ie[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ie[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,se[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,se[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Rt||E.minFilter!==Fs&&E.minFilter!==En||E.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Oe(P,E){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",A));let K=E.source,j=f.get(K);j===void 0&&(j={},f.set(K,j));let ae=H(E);if(ae!==P.__cacheKey){j[ae]===void 0&&(j[ae]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,W=!0),j[ae].usedTimes++;let oe=j[P.__cacheKey];oe!==void 0&&(j[P.__cacheKey].usedTimes--,oe.usedTimes===0&&R(E)),P.__cacheKey=ae,P.__webglTexture=j[ae].texture}return W}function Y(P,E,W){return Math.floor(Math.floor(P/W)/E)}function Q(P,E,W,K){let ae=P.updateRanges;if(ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,W,K,E.data);else{ae.sort((Ie,de)=>Ie.start-de.start);let oe=0;for(let Ie=1;Ie<ae.length;Ie++){let de=ae[oe],ce=ae[Ie],Pe=de.start+de.count,Ne=Y(ce.start,E.width,4),Be=Y(de.start,E.width,4);ce.start<=Pe+1&&Ne===Be&&Y(ce.start+ce.count-1,E.width,4)===Ne?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++oe,ae[oe]=ce)}ae.length=oe+1;let J=t.getParameter(s.UNPACK_ROW_LENGTH),te=t.getParameter(s.UNPACK_SKIP_PIXELS),le=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ie=0,de=ae.length;Ie<de;Ie++){let ce=ae[Ie],Pe=Math.floor(ce.start/4),Ne=Math.ceil(ce.count/4),Be=Pe%E.width,B=Math.floor(Pe/E.width),he=Ne,ee=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(s.UNPACK_SKIP_ROWS,B),t.texSubImage2D(s.TEXTURE_2D,0,Be,B,he,ee,W,K,E.data)}P.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,J),t.pixelStorei(s.UNPACK_SKIP_PIXELS,te),t.pixelStorei(s.UNPACK_SKIP_ROWS,le)}}function pe(P,E,W){let K=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=s.TEXTURE_3D);let j=Oe(P,E),ae=E.source;t.bindTexture(K,P.__webglTexture,s.TEXTURE0+W);let oe=n.get(ae);if(ae.version!==oe.__version||j===!0){if(t.activeTexture(s.TEXTURE0+W),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let ee=qe.getPrimaries(qe.workingColorSpace),ue=E.colorSpace===Tn?null:qe.getPrimaries(E.colorSpace),ve=E.colorSpace===Tn||ee===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let te=g(E.image,!1,i.maxTextureSize);te=Jt(E,te);let le=r.convert(E.format,E.colorSpace),Ie=r.convert(E.type),de=v(E.internalFormat,le,Ie,E.normalized,E.colorSpace,E.isVideoTexture);Te(K,E);let ce,Pe=E.mipmaps,Ne=E.isVideoTexture!==!0,Be=oe.__version===void 0||j===!0,B=ae.dataReady,he=S(E,te);if(E.isDepthTexture)de=b(E.format===os,E.type),Be&&(Ne?t.texStorage2D(s.TEXTURE_2D,1,de,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,de,te.width,te.height,0,le,Ie,null));else if(E.isDataTexture)if(Pe.length>0){Ne&&Be&&t.texStorage2D(s.TEXTURE_2D,he,de,Pe[0].width,Pe[0].height);for(let ee=0,ue=Pe.length;ee<ue;ee++)ce=Pe[ee],Ne?B&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ce.width,ce.height,le,Ie,ce.data):t.texImage2D(s.TEXTURE_2D,ee,de,ce.width,ce.height,0,le,Ie,ce.data);E.generateMipmaps=!1}else Ne?(Be&&t.texStorage2D(s.TEXTURE_2D,he,de,te.width,te.height),B&&Q(E,te,le,Ie)):t.texImage2D(s.TEXTURE_2D,0,de,te.width,te.height,0,le,Ie,te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ne&&Be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,de,Pe[0].width,Pe[0].height,te.depth);for(let ee=0,ue=Pe.length;ee<ue;ee++)if(ce=Pe[ee],E.format!==xn)if(le!==null)if(Ne){if(B)if(E.layerUpdates.size>0){let ve=Hu(ce.width,ce.height,E.format,E.type);for(let ne of E.layerUpdates){let Le=ce.data.subarray(ne*ve/ce.data.BYTES_PER_ELEMENT,(ne+1)*ve/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,ne,ce.width,ce.height,1,le,Le)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,te.depth,le,ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,de,ce.width,ce.height,te.depth,0,ce.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?B&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,te.depth,le,Ie,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,de,ce.width,ce.height,te.depth,0,le,Ie,ce.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ne&&Be&&t.texStorage2D(s.TEXTURE_2D,he,de,Pe[0].width,Pe[0].height);for(let ee=0,ue=Pe.length;ee<ue;ee++)ce=Pe[ee],E.format!==xn?le!==null?Ne?B&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,de,ce.width,ce.height,0,ce.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?B&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ce.width,ce.height,le,Ie,ce.data):t.texImage2D(s.TEXTURE_2D,ee,de,ce.width,ce.height,0,le,Ie,ce.data)}else if(E.isDataArrayTexture)if(Ne){if(Be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,de,te.width,te.height,te.depth),B)if(E.layerUpdates.size>0){let ee=Hu(te.width,te.height,E.format,E.type);for(let ue of E.layerUpdates){let ve=te.data.subarray(ue*ee/te.data.BYTES_PER_ELEMENT,(ue+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ue,te.width,te.height,1,le,Ie,ve)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,Ie,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,de,te.width,te.height,te.depth,0,le,Ie,te.data);else if(E.isData3DTexture)Ne?(Be&&t.texStorage3D(s.TEXTURE_3D,he,de,te.width,te.height,te.depth),B&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,Ie,te.data)):t.texImage3D(s.TEXTURE_3D,0,de,te.width,te.height,te.depth,0,le,Ie,te.data);else if(E.isFramebufferTexture){if(Be)if(Ne)t.texStorage2D(s.TEXTURE_2D,he,de,te.width,te.height);else{let ee=te.width,ue=te.height;for(let ve=0;ve<he;ve++)t.texImage2D(s.TEXTURE_2D,ve,de,ee,ue,0,le,Ie,null),ee>>=1,ue>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){let ee=s.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),d.add(E),ee.onpaint=ue=>{let ve=ue.changedElements;for(let ne of d)ve.includes(ne.image)&&(ne.needsUpdate=!0)},ee.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,te);else{let ve=s.RGBA,ne=s.RGBA,Le=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ve,ne,Le,te)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Ne&&Be){let ee=lt(Pe[0]);t.texStorage2D(s.TEXTURE_2D,he,de,ee.width,ee.height)}for(let ee=0,ue=Pe.length;ee<ue;ee++)ce=Pe[ee],Ne?B&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,le,Ie,ce):t.texImage2D(s.TEXTURE_2D,ee,de,le,Ie,ce);E.generateMipmaps=!1}else if(Ne){if(Be){let ee=lt(te);t.texStorage2D(s.TEXTURE_2D,he,de,ee.width,ee.height)}B&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,Ie,te)}else t.texImage2D(s.TEXTURE_2D,0,de,le,Ie,te);m(E)&&_(K),oe.__version=ae.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Re(P,E,W){if(E.image.length!==6)return;let K=Oe(P,E),j=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+W);let ae=n.get(j);if(j.version!==ae.__version||K===!0){t.activeTexture(s.TEXTURE0+W);let oe=qe.getPrimaries(qe.workingColorSpace),J=E.colorSpace===Tn?null:qe.getPrimaries(E.colorSpace),te=E.colorSpace===Tn||oe===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let le=E.isCompressedTexture||E.image[0].isCompressedTexture,Ie=E.image[0]&&E.image[0].isDataTexture,de=[];for(let ne=0;ne<6;ne++)!le&&!Ie?de[ne]=g(E.image[ne],!0,i.maxCubemapSize):de[ne]=Ie?E.image[ne].image:E.image[ne],de[ne]=Jt(E,de[ne]);let ce=de[0],Pe=r.convert(E.format,E.colorSpace),Ne=r.convert(E.type),Be=v(E.internalFormat,Pe,Ne,E.normalized,E.colorSpace),B=E.isVideoTexture!==!0,he=ae.__version===void 0||K===!0,ee=j.dataReady,ue=S(E,ce);Te(s.TEXTURE_CUBE_MAP,E);let ve;if(le){B&&he&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Be,ce.width,ce.height);for(let ne=0;ne<6;ne++){ve=de[ne].mipmaps;for(let Le=0;Le<ve.length;Le++){let Ae=ve[Le];E.format!==xn?Pe!==null?B?ee&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,0,0,Ae.width,Ae.height,Pe,Ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,Be,Ae.width,Ae.height,0,Ae.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,0,0,Ae.width,Ae.height,Pe,Ne,Ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,Be,Ae.width,Ae.height,0,Pe,Ne,Ae.data)}}}else{if(ve=E.mipmaps,B&&he){ve.length>0&&ue++;let ne=lt(de[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Be,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ie){B?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,de[ne].width,de[ne].height,Pe,Ne,de[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Be,de[ne].width,de[ne].height,0,Pe,Ne,de[ne].data);for(let Le=0;Le<ve.length;Le++){let mt=ve[Le].image[ne].image;B?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,0,0,mt.width,mt.height,Pe,Ne,mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,Be,mt.width,mt.height,0,Pe,Ne,mt.data)}}else{B?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Pe,Ne,de[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Be,Pe,Ne,de[ne]);for(let Le=0;Le<ve.length;Le++){let Ae=ve[Le];B?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,0,0,Pe,Ne,Ae.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,Be,Pe,Ne,Ae.image[ne])}}}m(E)&&_(s.TEXTURE_CUBE_MAP),ae.__version=j.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function xe(P,E,W,K,j,ae){let oe=r.convert(W.format,W.colorSpace),J=r.convert(W.type),te=v(W.internalFormat,oe,J,W.normalized,W.colorSpace),le=n.get(E),Ie=n.get(W);if(Ie.__renderTarget=E,!le.__hasExternalTextures){let de=Math.max(1,E.width>>ae),ce=Math.max(1,E.height>>ae);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,ae,te,de,ce,E.depth,0,oe,J,null):t.texImage2D(j,ae,te,de,ce,0,oe,J,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),It(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,j,Ie.__webglTexture,0,Mt(E)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,j,Ie.__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(P,E,W){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){let K=E.depthTexture,j=K&&K.isDepthTexture?K.type:null,ae=b(E.stencilBuffer,j),oe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;It(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt(E),ae,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt(E),ae,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ae,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,P)}else{let K=E.textures;for(let j=0;j<K.length;j++){let ae=K[j],oe=r.convert(ae.format,ae.colorSpace),J=r.convert(ae.type),te=v(ae.internalFormat,oe,J,ae.normalized,ae.colorSpace);It(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt(E),te,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt(E),te,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,te,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function St(P,E,W){let K=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(E.depthTexture);if(j.__renderTarget=E,(!j.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K){if(j.__webglInit===void 0&&(j.__webglInit=!0,E.depthTexture.addEventListener("dispose",A)),j.__webglTexture===void 0){j.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Te(s.TEXTURE_CUBE_MAP,E.depthTexture);let le=r.convert(E.depthTexture.format),Ie=r.convert(E.depthTexture.type),de;E.depthTexture.format===ci?de=s.DEPTH_COMPONENT24:E.depthTexture.format===os&&(de=s.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,E.width,E.height,0,le,Ie,null)}}else $(E.depthTexture,0);let ae=j.__webglTexture,oe=Mt(E),J=K?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,te=E.depthTexture.format===os?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===ci)It(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,J,ae,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,te,J,ae,0);else if(E.depthTexture.format===os)It(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,J,ae,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,te,J,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(P){let E=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let K=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){let j=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),E.__depthDisposeCallback=j}E.__boundDepthTexture=K}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let K=0;K<6;K++)St(E.__webglFramebuffer[K],P,K);else{let K=P.texture.mipmaps;K&&K.length>0?St(E.__webglFramebuffer[0],P,0):St(E.__webglFramebuffer,P,0)}else if(W){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=s.createRenderbuffer(),Ue(E.__webglDepthbuffer[K],P,!1);else{let j=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ae)}}else{let K=P.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ue(E.__webglDepthbuffer,P,!1);else{let j=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ae)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function it(P,E,W){let K=n.get(P);E!==void 0&&xe(K.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&Ye(P)}function pt(P){let E=P.texture,W=n.get(P),K=n.get(E);P.addEventListener("dispose",M);let j=P.textures,ae=P.isWebGLCubeRenderTarget===!0,oe=j.length>1;if(oe||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=E.version,a.memory.textures++),ae){W.__webglFramebuffer=[];for(let J=0;J<6;J++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[J]=[];for(let te=0;te<E.mipmaps.length;te++)W.__webglFramebuffer[J][te]=s.createFramebuffer()}else W.__webglFramebuffer[J]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let J=0;J<E.mipmaps.length;J++)W.__webglFramebuffer[J]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(oe)for(let J=0,te=j.length;J<te;J++){let le=n.get(j[J]);le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&It(P)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let J=0;J<j.length;J++){let te=j[J];W.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[J]);let le=r.convert(te.format,te.colorSpace),Ie=r.convert(te.type),de=v(te.internalFormat,le,Ie,te.normalized,te.colorSpace,P.isXRRenderTarget===!0),ce=Mt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,de,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,W.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Te(s.TEXTURE_CUBE_MAP,E);for(let J=0;J<6;J++)if(E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)xe(W.__webglFramebuffer[J][te],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else xe(W.__webglFramebuffer[J],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(E)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let J=0,te=j.length;J<te;J++){let le=j[J],Ie=n.get(le),de=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,Ie.__webglTexture),Te(de,le),xe(W.__webglFramebuffer,P,le,s.COLOR_ATTACHMENT0+J,de,0),m(le)&&_(de)}t.unbindTexture()}else{let J=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(J=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,K.__webglTexture),Te(J,E),E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)xe(W.__webglFramebuffer[te],P,E,s.COLOR_ATTACHMENT0,J,te);else xe(W.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,J,0);m(E)&&_(J),t.unbindTexture()}P.depthBuffer&&Ye(P)}function je(P){let E=P.textures;for(let W=0,K=E.length;W<K;W++){let j=E[W];if(m(j)){let ae=y(P),oe=n.get(j).__webglTexture;t.bindTexture(ae,oe),_(ae),t.unbindTexture()}}}let yt=[],Ot=[];function vn(P){if(P.samples>0){if(It(P)===!1){let E=P.textures,W=P.width,K=P.height,j=s.COLOR_BUFFER_BIT,ae=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=n.get(P),J=E.length>1;if(J)for(let le=0;le<E.length;le++)t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let te=P.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<E.length;le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Ie=n.get(E[le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ie,0)}s.blitFramebuffer(0,0,W,K,0,0,W,K,j,s.NEAREST),l===!0&&(yt.length=0,Ot.length=0,yt.push(s.COLOR_ATTACHMENT0+le),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(yt.push(ae),Ot.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let le=0;le<E.length;le++){t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Ie=n.get(E[le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,Ie,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Mt(P){return Math.min(i.maxSamples,P.samples)}function It(P){let E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function V(P){let E=a.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Jt(P,E){let W=P.colorSpace,K=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==fn&&W!==Tn&&(qe.getTransfer(W)===at?(K!==xn||j!==rn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",W)),E}function lt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.getTextureUnits=I,this.setTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=D,this.setTexture3D=O,this.setTextureCube=G,this.rebindTextures=it,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function n1(s,e){function t(n,i=Tn){let r,a=qe.getTransfer(i);if(n===rn)return s.UNSIGNED_BYTE;if(n===zl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Cu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ku)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Au)return s.BYTE;if(n===Ru)return s.SHORT;if(n===Nr)return s.UNSIGNED_SHORT;if(n===Nl)return s.INT;if(n===gn)return s.UNSIGNED_INT;if(n===wn)return s.FLOAT;if(n===ei)return s.HALF_FLOAT;if(n===Iu)return s.ALPHA;if(n===Pu)return s.RGB;if(n===xn)return s.RGBA;if(n===ci)return s.DEPTH_COMPONENT;if(n===os)return s.DEPTH_STENCIL;if(n===Ul)return s.RED;if(n===Fl)return s.RED_INTEGER;if(n===ls)return s.RG;if(n===Ol)return s.RG_INTEGER;if(n===Bl)return s.RGBA_INTEGER;if(n===Ha||n===Va||n===Ga||n===Wa)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hl||n===Vl||n===Gl||n===Wl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xl||n===ql||n===$l||n===Kl||n===Yl||n===Xa||n===Zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xl||n===ql)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$l)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Kl)return r.COMPRESSED_R11_EAC;if(n===Yl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Xa)return r.COMPRESSED_RG11_EAC;if(n===Zl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jl||n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uc||n===dc||n===fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===uc)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pc||n===mc||n===qa||n===gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===pc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var i1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ad=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ca(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Yt({vertexShader:i1,fragmentShader:s1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},od=class extends hi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new ad,m={},_=t.getContextAttributes(),y=null,v=null,b=[],S=[],A=new re,M=null,w=null,R=new Ht;R.viewport=new Je;let k=new Ht;k.viewport=new Je;let N=[R,k],L=new Rl,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=b[Y];return Q===void 0&&(Q=new yr,b[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=b[Y];return Q===void 0&&(Q=new yr,b[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=b[Y];return Q===void 0&&(Q=new yr,b[Y]=Q),Q.getHandSpace()};function U(Y){let Q=S.indexOf(Y.inputSource);if(Q===-1)return;let pe=b[Q];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,c||a),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",$);for(let Y=0;Y<b.length;Y++){let Q=S[Y];Q!==null&&(S[Y]=null,b[Y].disconnect(Q))}I=null,z=null,g.reset();for(let Y in m)delete m[Y];if(e.setRenderTarget(y),f=null,u=null,d=null,i=null,v=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(A.width,A.height,!1),w!==null){let Y=w.camera;Y.fov=w.fov,Y.zoom=w.zoom,Y.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",H),i.addEventListener("inputsourceschange",$),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Re=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=_.stencil?os:ci,Re=_.stencil?zr:gn);let Ue={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ue),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Vt(u.textureWidth,u.textureHeight,{format:xn,type:rn,depthTexture:new Nn(u.textureWidth,u.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let pe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,pe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Vt(f.framebufferWidth,f.framebufferHeight,{format:xn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Oe.setContext(i),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(Y){for(let Q=0;Q<Y.removed.length;Q++){let pe=Y.removed[Q],Re=S.indexOf(pe);Re>=0&&(S[Re]=null,b[Re].disconnect(pe))}for(let Q=0;Q<Y.added.length;Q++){let pe=Y.added[Q],Re=S.indexOf(pe);if(Re===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=S.length){S.push(pe),Re=Ue;break}else if(S[Ue]===null){S[Ue]=pe,Re=Ue;break}if(Re===-1)break}let xe=b[Re];xe&&xe.connect(pe)}}let D=new T,O=new T;function G(Y,Q,pe){D.setFromMatrixPosition(Q.matrixWorld),O.setFromMatrixPosition(pe.matrixWorld);let Re=D.distanceTo(O),xe=Q.projectionMatrix.elements,Ue=pe.projectionMatrix.elements,St=xe[14]/(xe[10]-1),Ye=xe[14]/(xe[10]+1),it=(xe[9]+1)/xe[5],pt=(xe[9]-1)/xe[5],je=(xe[8]-1)/xe[0],yt=(Ue[8]+1)/Ue[0],Ot=St*je,vn=St*yt,Mt=Re/(-je+yt),It=Mt*-je;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(It),Y.translateZ(Mt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),xe[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let V=St+Mt,Jt=Ye+Mt,lt=Ot-It,P=vn+(Re-It),E=it*Ye/Jt*V,W=pt*Ye/Jt*V;Y.projectionMatrix.makePerspective(lt,P,E,W,V,Jt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ie(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Q=Y.near,pe=Y.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(pe=g.depthFar)),L.near=k.near=R.near=Q,L.far=k.far=R.far=pe,(I!==L.near||z!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),I=L.near,z=L.far),L.layers.mask=Y.layers.mask|6,R.layers.mask=L.layers.mask&-5,k.layers.mask=L.layers.mask&-3;let Re=Y.parent,xe=L.cameras;ie(L,Re);for(let Ue=0;Ue<xe.length;Ue++)ie(xe[Ue],Re);xe.length===2?G(L,R,k):L.projectionMatrix.copy(R.projectionMatrix),w===null&&Y.isPerspectiveCamera&&(w={camera:Y,fov:Y.fov,zoom:Y.zoom}),se(Y,L,Re)};function se(Y,Q,pe){pe===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Cs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(Y){return m[Y]};let ye=null;function Te(Y,Q){if(h=Q.getViewerPose(c||a),p=Q,h!==null){let pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Re=!1;pe.length!==L.cameras.length&&(L.cameras.length=0,Re=!0);for(let Ye=0;Ye<pe.length;Ye++){let it=pe[Ye],pt=null;if(f!==null)pt=f.getViewport(it);else{let yt=d.getViewSubImage(u,it);pt=yt.viewport,Ye===0&&(e.setRenderTargetTextures(v,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(v))}let je=N[Ye];je===void 0&&(je=new Ht,je.layers.enable(Ye),je.viewport=new Je,N[Ye]=je),je.matrix.fromArray(it.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(it.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(pt.x,pt.y,pt.width,pt.height),Ye===0&&(L.matrix.copy(je.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Re===!0&&L.cameras.push(je)}let xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Ye=d.getDepthInformation(pe[0]);Ye&&Ye.isValid&&Ye.texture&&g.init(Ye,i.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let Ye=0;Ye<pe.length;Ye++){let it=pe[Ye].camera;if(it){let pt=m[it];pt||(pt=new Ca,m[it]=pt);let je=d.getCameraImage(it);pt.sourceTexture=je}}}}for(let pe=0;pe<b.length;pe++){let Re=S[pe],xe=b[pe];Re!==null&&xe!==void 0&&xe.update(Re,Q,c||a)}ye&&ye(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}let Oe=new Ym;Oe.setAnimationLoop(Te),this.setAnimationLoop=function(Y){ye=Y},this.dispose=function(){}}},r1=new _e,tg=new Fe;tg.set(-1,0,0,0,1,0,0,0,1);function a1(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Fu(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,_,y,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,_,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===zt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===zt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),y=_.envMap,v=_.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(r1.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(tg),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===zt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function o1(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let S=b.program;n.uniformBlockBinding(v,S)}function c(v,b){let S=i[v.id];S===void 0&&(g(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",_));let A=b.program;n.updateUBOMapping(v,A);let M=e.render.frame;r[v.id]!==M&&(u(v),r[v.id]=M)}function h(v){let b=d();v.__bindingPointIndex=b;let S=s.createBuffer(),A=v.__size,M=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,A,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,S),S}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let b=i[v.id],S=v.uniforms,A=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let M=0,w=S.length;M<w;M++){let R=S[M];if(Array.isArray(R))for(let k=0,N=R.length;k<N;k++)f(R[k],M,k,A);else f(R,M,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,b,S,A){if(x(v,b,S,A)===!0){let M=v.__offset,w=v.value;if(Array.isArray(w)){let R=0;for(let k=0;k<w.length;k++){let N=w[k],L=m(N);p(N,v.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,v.__data)}}function p(v,b,S){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,S)}function x(v,b,S,A){let M=v.value,w=b+"_"+S;if(A[w]===void 0)return typeof M=="number"||typeof M=="boolean"?A[w]=M:ArrayBuffer.isView(M)?A[w]=M.slice():A[w]=M.clone(),!0;{let R=A[w];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return A[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(R.equals(M)===!1)return R.copy(M),!0}}return!1}function g(v){let b=v.uniforms,S=0,A=16;for(let w=0,R=b.length;w<R;w++){let k=Array.isArray(b[w])?b[w]:[b[w]];for(let N=0,L=k.length;N<L;N++){let I=k[N],z=Array.isArray(I.value)?I.value:[I.value];for(let U=0,H=z.length;U<H;U++){let $=z[U],D=m($),O=S%A,G=O%D.boundary,ie=O+G;S+=G,ie!==0&&A-ie<D.storage&&(S+=A-ie),I.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=D.storage}}}let M=S%A;return M>0&&(S+=A-M),v.__size=S,v.__cache={},this}function m(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",v),b}function _(v){let b=v.target;b.removeEventListener("dispose",_);let S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function y(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:y}}var l1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mi=null;function c1(){return mi===null&&(mi=new ns(l1,16,16,ls,ei),mi.name="DFG_LUT",mi.minFilter=ot,mi.magFilter=ot,mi.wrapS=Ln,mi.wrapT=Ln,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}var Sc=class{constructor(e={}){let{canvas:t=vm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=rn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=f,g=new Set([Bl,Ol,Fl]),m=new Set([rn,gn,Nr,zr,zl,Dl]),_=new Uint32Array(4),y=new Int32Array(4),v=new T,b=null,S=null,A=[],M=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,k=!1,N=null,L=null,I=null,z=null;this._outputColorSpace=vt;let U=0,H=0,$=null,D=-1,O=null,G=new Je,ie=new Je,se=null,ye=new Se(0),Te=0,Oe=t.width,Y=t.height,Q=1,pe=null,Re=null,xe=new Je(0,0,Oe,Y),Ue=new Je(0,0,Oe,Y),St=!1,Ye=new Sr,it=!1,pt=!1,je=new _e,yt=new T,Ot=new Je,vn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function It(){return $===null?Q:1}let V=n;function Jt(C,F){return t.getContext(C,F)}let lt,P,E,W,K,j,ae,oe,J,te,le,Ie,de,ce,Pe,Ne,Be,B,he,ee,ue,ve,ne;try{let C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Gn,!1),V===null){let F="webgl2";if(V=Jt(F,C),V===null)throw Jt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(C){throw t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Gn,!1),ze("WebGLRenderer: "+C.message),C}function Le(){lt=new gM(V),lt.init(),ue=new n1(V,lt),P=new aM(V,lt,e,ue),E=new e1(V,lt),P.reversedDepthBuffer&&u&&E.buffers.depth.setReversed(!0),L=V.createFramebuffer(),I=V.createFramebuffer(),z=V.createFramebuffer(),W=new vM(V),K=new Bb,j=new t1(V,lt,E,K,P,ue,W),ae=new mM(R),oe=new M_(V),ve=new sM(V,oe),J=new xM(V,oe,W,ve),te=new MM(V,J,oe,ve,W),B=new yM(V,P,j),Pe=new oM(K),le=new Ob(R,ae,lt,P,ve,Pe),Ie=new a1(R,K),de=new Vb,ce=new Kb(lt),Be=new iM(R,ae,E,te,p,l),Ne=new Qb(R,te,P),ne=new o1(V,W,P,E),he=new rM(V,lt,W),ee=new _M(V,lt,W),W.programs=le.programs,R.capabilities=P,R.extensions=lt,R.properties=K,R.renderLists=de,R.shadowMap=Ne,R.state=E,R.info=W}x!==rn&&(w=new SM(x,t.width,t.height,o,i,r));let Ae=new od(R,V);this.xr=Ae,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let C=lt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=lt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(Oe,Y,!1))},this.getSize=function(C){return C.set(Oe,Y)},this.setSize=function(C,F,Z=!0){if(Ae.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=C,Y=F,t.width=Math.floor(C*Q),t.height=Math.floor(F*Q),Z===!0&&(t.style.width=C+"px",t.style.height=F+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,C,F)},this.getDrawingBufferSize=function(C){return C.set(Oe*Q,Y*Q).floor()},this.setDrawingBufferSize=function(C,F,Z){Oe=C,Y=F,Q=Z,t.width=Math.floor(C*Z),t.height=Math.floor(F*Z),this.setViewport(0,0,C,F)},this.setEffects=function(C){if(x===rn){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let F=0;F<C.length;F++)if(C[F].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(xe)},this.setViewport=function(C,F,Z,X){C.isVector4?xe.set(C.x,C.y,C.z,C.w):xe.set(C,F,Z,X),E.viewport(G.copy(xe).multiplyScalar(Q).round())},this.getScissor=function(C){return C.copy(Ue)},this.setScissor=function(C,F,Z,X){C.isVector4?Ue.set(C.x,C.y,C.z,C.w):Ue.set(C,F,Z,X),E.scissor(ie.copy(Ue).multiplyScalar(Q).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(C){E.setScissorTest(St=C)},this.setOpaqueSort=function(C){pe=C},this.setTransparentSort=function(C){Re=C},this.getClearColor=function(C){return C.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(C=!0,F=!0,Z=!0){let X=0;if(C){let q=!1;if($!==null){let ge=$.texture.format;q=g.has(ge)}if(q){let ge=$.texture.type,be=m.has(ge),me=Be.getClearColor(),Ee=Be.getClearAlpha(),Ce=me.r,Ge=me.g,Ze=me.b;be?(_[0]=Ce,_[1]=Ge,_[2]=Ze,_[3]=Ee,V.clearBufferuiv(V.COLOR,0,_)):(y[0]=Ce,y[1]=Ge,y[2]=Ze,y[3]=Ee,V.clearBufferiv(V.COLOR,0,y))}else X|=V.COLOR_BUFFER_BIT}F&&(X|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(X|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&V.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),N=C},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Gn,!1),Be.dispose(),de.dispose(),ce.dispose(),K.dispose(),ae.dispose(),te.dispose(),ve.dispose(),ne.dispose(),le.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Hf),Ae.removeEventListener("sessionend",Vf),Ms.stop()};function mt(C){C.preventDefault(),ga("WebGLRenderer: Context Lost."),k=!0}function st(){ga("WebGLRenderer: Context Restored."),k=!1;let C=W.autoReset,F=Ne.enabled,Z=Ne.autoUpdate,X=Ne.needsUpdate,q=Ne.type;Le(),W.autoReset=C,Ne.enabled=F,Ne.autoUpdate=Z,Ne.needsUpdate=X,Ne.type=q}function Gn(C){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function si(C){let F=C.target;F.removeEventListener("dispose",si),ox(F)}function ox(C){lx(C),K.remove(C)}function lx(C){let F=K.get(C).programs;F!==void 0&&(F.forEach(function(Z){le.releaseProgram(Z)}),C.isShaderMaterial&&le.releaseShaderCache(C))}this.renderBufferDirect=function(C,F,Z,X,q,ge){F===null&&(F=vn);let be=q.isMesh&&q.matrixWorld.determinantAffine()<0,me=ux(C,F,Z,X,q);E.setMaterial(X,be);let Ee=Z.index,Ce=1;if(X.wireframe===!0){if(Ee=J.getWireframeAttribute(Z),Ee===void 0)return;Ce=2}let Ge=Z.drawRange,Ze=Z.attributes.position,we=Ge.start*Ce,rt=(Ge.start+Ge.count)*Ce;ge!==null&&(we=Math.max(we,ge.start*Ce),rt=Math.min(rt,(ge.start+ge.count)*Ce)),Ee!==null?(we=Math.max(we,0),rt=Math.min(rt,Ee.count)):Ze!=null&&(we=Math.max(we,0),rt=Math.min(rt,Ze.count));let Pt=rt-we;if(Pt<0||Pt===1/0)return;ve.setup(q,X,me,Z,Ee);let _t,dt=he;if(Ee!==null&&(_t=oe.get(Ee),dt=ee,dt.setIndex(_t)),q.isMesh)X.wireframe===!0?(E.setLineWidth(X.wireframeLinewidth*It()),dt.setMode(V.LINES)):dt.setMode(V.TRIANGLES);else if(q.isLine){let Qt=X.linewidth;Qt===void 0&&(Qt=1),E.setLineWidth(Qt*It()),q.isLineSegments?dt.setMode(V.LINES):q.isLineLoop?dt.setMode(V.LINE_LOOP):dt.setMode(V.LINE_STRIP)}else q.isPoints?dt.setMode(V.POINTS):q.isSprite&&dt.setMode(V.TRIANGLES);if(q.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))dt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Qt=q._multiDrawStarts,Me=q._multiDrawCounts,un=q._multiDrawCount,nt=Ee?oe.get(Ee).bytesPerElement:1,kn=K.get(X).currentProgram.getUniforms();for(let ri=0;ri<un;ri++)kn.setValue(V,"_gl_DrawID",ri),dt.render(Qt[ri]/nt,Me[ri])}else if(q.isInstancedMesh)dt.renderInstances(we,Pt,q.count);else if(Z.isInstancedBufferGeometry){let Qt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Me=Math.min(Z.instanceCount,Qt);dt.renderInstances(we,Pt,Me)}else dt.render(we,Pt)};function Bf(C,F,Z,X){N!==null&&C.isNodeMaterial&&N.setObject(X,C),it===!0&&Pe.setState(C,Z,!1),C.transparent===!0&&C.side===sn&&C.forceSinglePass===!1?(C.side=zt,C.needsUpdate=!0,bo(C,F,X),C.side=Un,C.needsUpdate=!0,bo(C,F,X),C.side=sn):bo(C,F,X)}this.compile=function(C,F,Z=null){Z===null&&(Z=C),N!==null&&N.renderStart(C,F,Z),S=ce.get(Z),S.init(F),M.push(S),Z.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),C!==Z&&C.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),S.setupLights(),N!==null&&N.updateLights(S.state.lightsArray),pt=this.localClippingEnabled,it=Pe.init(this.clippingPlanes,pt),it===!0&&Pe.setGlobalState(this.clippingPlanes,F),N!==null&&Ne.render(S.state.shadowsArray,Z,F);let X=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let ge=q.material;if(ge)if(Array.isArray(ge))for(let be=0;be<ge.length;be++){let me=ge[be];Bf(me,Z,F,q),X.add(me)}else Bf(ge,Z,F,q),X.add(ge)}),S=M.pop(),N!==null&&N.renderEnd(),X},this.compileAsync=function(C,F,Z=null){let X=this.compile(C,F,Z);return new Promise(q=>{function ge(){if(X.forEach(function(be){let Ee=K.get(be).currentProgram;(Ee===void 0||Ee.isReady())&&X.delete(be)}),X.size===0){q(C);return}setTimeout(ge,10)}lt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let wh=null;function cx(C){wh&&wh(C)}function Hf(){Ms.stop()}function Vf(){Ms.start()}let Ms=new Ym;Ms.setAnimationLoop(cx),typeof self<"u"&&Ms.setContext(self),this.setAnimationLoop=function(C){wh=C,Ae.setAnimationLoop(C),C===null?Ms.stop():Ms.start()},Ae.addEventListener("sessionstart",Hf),Ae.addEventListener("sessionend",Vf),this.render=function(C,F){if(F!==void 0&&F.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;N!==null&&N.renderStart(C,F);let Z=Ae.enabled===!0&&Ae.isPresenting===!0,X=w!==null&&($===null||Z)&&w.begin(R,$);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(F),F=Ae.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,F,$),S=ce.get(C,M.length),S.init(F),S.state.textureUnits=j.getTextureUnits(),M.push(S),je.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ye.setFromProjectionMatrix(je,Yn,F.reversedDepth),pt=this.localClippingEnabled,it=Pe.init(this.clippingPlanes,pt),b=de.get(C,A.length),b.init(),A.push(b),Ae.enabled===!0&&Ae.isPresenting===!0){let be=R.xr.getDepthSensingMesh();be!==null&&Th(be,F,-1/0,R.sortObjects)}Th(C,F,0,R.sortObjects),b.finish(),N!==null&&N.updateLights(S.state.lightsArray),R.sortObjects===!0&&b.sort(pe,Re),Mt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Mt&&Be.addToRenderList(b,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),it===!0&&Pe.beginShadows();let q=S.state.shadowsArray;if(Ne.render(q,C,F),it===!0&&Pe.endShadows(),(X&&w.hasRenderPass())===!1){let be=b.opaque,me=b.transmissive;if(S.setupLights(),F.isArrayCamera){let Ee=F.cameras;if(me.length>0)for(let Ce=0,Ge=Ee.length;Ce<Ge;Ce++){let Ze=Ee[Ce];Wf(be,me,C,Ze)}Mt&&Be.render(C);for(let Ce=0,Ge=Ee.length;Ce<Ge;Ce++){let Ze=Ee[Ce];Gf(b,C,Ze,Ze.viewport)}}else me.length>0&&Wf(be,me,C,F),Mt&&Be.render(C),Gf(b,C,F)}$!==null&&H===0&&(j.updateMultisampleRenderTarget($),j.updateRenderTargetMipmap($)),X&&w.end(R),C.isScene===!0&&C.onAfterRender(R,C,F),ve.resetDefaultState(),D=-1,O=null,M.pop(),M.length>0?(S=M[M.length-1],j.setTextureUnits(S.state.textureUnits),it===!0&&Pe.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,N!==null&&N.renderEnd()};function Th(C,F,Z,X){if(C.visible===!1)return;if(C.layers.test(F.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(F);else if(C.isLightProbeGrid)S.pushLightProbeGrid(C);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(Ye)){X&&Ot.setFromMatrixPosition(C.matrixWorld).applyMatrix4(je);let be=te.update(C),me=C.material;me.visible&&b.push(C,be,me,Z,Ot.z,null,F)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(Ye))){let be=te.update(C),me=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ot.copy(C.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ot.copy(be.boundingSphere.center)),Ot.applyMatrix4(C.matrixWorld).applyMatrix4(je)),Array.isArray(me)){let Ee=be.groups;for(let Ce=0,Ge=Ee.length;Ce<Ge;Ce++){let Ze=Ee[Ce],we=me[Ze.materialIndex];we&&we.visible&&b.push(C,be,we,Z,Ot.z,Ze,F)}}else me.visible&&b.push(C,be,me,Z,Ot.z,null,F)}}let ge=C.children;for(let be=0,me=ge.length;be<me;be++)Th(ge[be],F,Z,X)}function Gf(C,F,Z,X){let{opaque:q,transmissive:ge,transparent:be}=C;S.setupLightsView(Z),it===!0&&Pe.setGlobalState(R.clippingPlanes,Z),X&&E.viewport(G.copy(X)),q.length>0&&Mo(q,F,Z),ge.length>0&&Mo(ge,F,Z),be.length>0&&Mo(be,F,Z),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Wf(C,F,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[X.id]===void 0){let we=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[X.id]=new Vt(1,1,{generateMipmaps:!0,type:we?ei:rn,minFilter:En,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}let ge=S.state.transmissionRenderTarget[X.id],be=X.viewport||G;ge.setSize(be.z*R.transmissionResolutionScale,be.w*R.transmissionResolutionScale);let me=R.getRenderTarget(),Ee=R.getActiveCubeFace(),Ce=R.getActiveMipmapLevel();R.setRenderTarget(ge),R.getClearColor(ye),Te=R.getClearAlpha(),Te<1&&R.setClearColor(16777215,.5),R.clear(),Mt&&Be.render(Z);let Ge=R.toneMapping;R.toneMapping=Qn;let Ze=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),S.setupLightsView(X),it===!0&&Pe.setGlobalState(R.clippingPlanes,X),Mo(C,Z,X),j.updateMultisampleRenderTarget(ge),j.updateRenderTargetMipmap(ge),lt.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let rt=0,Pt=F.length;rt<Pt;rt++){let _t=F[rt],{object:dt,geometry:Qt,material:Me,group:un}=_t;if(Me.side===sn&&dt.layers.test(X.layers)){let nt=Me.side;Me.side=zt,Me.needsUpdate=!0,Xf(dt,Z,X,Qt,Me,un),Me.side=nt,Me.needsUpdate=!0,we=!0}}we===!0&&(j.updateMultisampleRenderTarget(ge),j.updateRenderTargetMipmap(ge))}R.setRenderTarget(me,Ee,Ce),R.setClearColor(ye,Te),Ze!==void 0&&(X.viewport=Ze),R.toneMapping=Ge}function Mo(C,F,Z){let X=F.isScene===!0?F.overrideMaterial:null;for(let q=0,ge=C.length;q<ge;q++){let be=C[q],{object:me,geometry:Ee,group:Ce}=be,Ge=be.material;Ge.allowOverride===!0&&X!==null&&(Ge=X),me.layers.test(Z.layers)&&Xf(me,F,Z,Ee,Ge,Ce)}}function Xf(C,F,Z,X,q,ge){N!==null&&q.isNodeMaterial&&N.setObject(C,q),C.onBeforeRender(R,F,Z,X,q,ge),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(R,F,Z,X,C,ge),q.transparent===!0&&q.side===sn&&q.forceSinglePass===!1?(q.side=zt,q.needsUpdate=!0,R.renderBufferDirect(Z,F,X,q,C,ge),q.side=Un,q.needsUpdate=!0,R.renderBufferDirect(Z,F,X,q,C,ge),q.side=sn):R.renderBufferDirect(Z,F,X,q,C,ge),C.onAfterRender(R,F,Z,X,q,ge)}function bo(C,F,Z){F.isScene!==!0&&(F=vn);let X=K.get(C),q=S.state.lights,ge=S.state.shadowsArray,be=q.state.version,me=le.getParameters(C,q.state,ge,F,Z,S.state.lightProbeGridArray),Ee=le.getProgramCacheKey(me),Ce=X.programs;X.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;let Ge=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;X.envMap=ae.get(C.envMap||X.environment,Ge),X.envMapRotation=X.environment!==null&&C.envMap===null?F.environmentRotation:C.envMapRotation,Ce===void 0&&(C.addEventListener("dispose",si),Ce=new Map,X.programs=Ce);let Ze=Ce.get(Ee);if(Ze!==void 0){if(X.currentProgram===Ze&&X.lightsStateVersion===be)return $f(C,me),Ze}else me.uniforms=le.getUniforms(C),N!==null&&C.isNodeMaterial&&N.build(C,Z,me),C.onBeforeCompile(me,R),Ze=le.acquireProgram(me,Ee),Ce.set(Ee,Ze),X.uniforms=me.uniforms;let we=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(we.clippingPlanes=Pe.uniform),$f(C,me),X.needsLights=fx(C),X.lightsStateVersion=be,X.needsLights&&(we.ambientLightColor.value=q.state.ambient,we.lightProbe.value=q.state.probe,we.sunLights.value=q.state.sun,we.sunLightShadows.value=q.state.sunShadow,we.directionalLights.value=q.state.directional,we.directionalLightShadows.value=q.state.directionalShadow,we.spotLights.value=q.state.spot,we.spotLightShadows.value=q.state.spotShadow,we.rectAreaLights.value=q.state.rectArea,we.ltc_1.value=q.state.rectAreaLTC1,we.ltc_2.value=q.state.rectAreaLTC2,we.pointLights.value=q.state.point,we.pointLightShadows.value=q.state.pointShadow,we.hemisphereLights.value=q.state.hemi,we.sunShadowMatrix.value=q.state.sunShadowMatrix,we.sunShadowCascade.value=q.state.sunShadowCascade,we.directionalShadowMatrix.value=q.state.directionalShadowMatrix,we.spotLightMatrix.value=q.state.spotLightMatrix,we.spotLightMap.value=q.state.spotLightMap,we.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=S.state.lightProbeGridArray.length>0,X.currentProgram=Ze,X.uniformsList=null,Ze}function qf(C){if(C.uniformsList===null){let F=C.currentProgram.getUniforms();C.uniformsList=Or.seqWithValue(F.seq,C.uniforms)}return C.uniformsList}function $f(C,F){let Z=K.get(C);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function hx(C,F){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let Z=0,X=C.length;Z<X;Z++){let q=C[Z];if(q.texture!==null&&q.boundingBox.containsPoint(v))return q}return null}function ux(C,F,Z,X,q){F.isScene!==!0&&(F=vn),j.resetTextureUnits();let ge=F.fog,be=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,me=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:qe.workingColorSpace,Ee=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ce=ae.get(X.envMap||be,Ee),Ge=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ze=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),we=!!Z.morphAttributes.position,rt=!!Z.morphAttributes.normal,Pt=!!Z.morphAttributes.color,_t=Qn;X.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(_t=R.toneMapping);let dt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Qt=dt!==void 0?dt.length:0,Me=K.get(X),un=S.state.lights;if(it===!0&&(pt===!0||C!==O)){let gt=C===O&&X.id===D;Pe.setState(X,C,gt)}let nt=!1;X.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==un.state.version||Me.outputColorSpace!==me||q.isBatchedMesh&&Me.batching===!1||!q.isBatchedMesh&&Me.batching===!0||q.isBatchedMesh&&Me.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Me.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Me.instancing===!1||!q.isInstancedMesh&&Me.instancing===!0||q.isSkinnedMesh&&Me.skinning===!1||!q.isSkinnedMesh&&Me.skinning===!0||q.isInstancedMesh&&Me.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Me.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Me.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Me.instancingMorph===!1&&q.morphTexture!==null||Me.envMap!==Ce||X.fog===!0&&Me.fog!==ge||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Pe.numPlanes||Me.numIntersection!==Pe.numIntersection)||Me.vertexAlphas!==Ge||Me.vertexTangents!==Ze||Me.morphTargets!==we||Me.morphNormals!==rt||Me.morphColors!==Pt||Me.toneMapping!==_t||Me.morphTargetsCount!==Qt||!!Me.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Me.__version=X.version);let kn=Me.currentProgram;nt===!0&&(kn=bo(X,F,q),N&&X.isNodeMaterial&&N.onUpdateProgram(X,kn,Me));let ri=!1,qi=!1,$s=!1,ht=kn.getUniforms(),At=Me.uniforms;if(E.useProgram(kn.program)&&(ri=!0,qi=!0,$s=!0),X.id!==D&&(D=X.id,qi=!0),Me.needsLights){let gt=hx(S.state.lightProbeGridArray,q);Me.lightProbeGrid!==gt&&(Me.lightProbeGrid=gt,qi=!0)}if(ri||O!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ht.setValue(V,"projectionMatrix",C.projectionMatrix),ht.setValue(V,"viewMatrix",C.matrixWorldInverse);let Ki=ht.map.cameraPosition;Ki!==void 0&&Ki.setValue(V,yt.setFromMatrixPosition(C.matrixWorld)),P.logarithmicDepthBuffer&&ht.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ht.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),O!==C&&(O=C,qi=!0,$s=!0)}if(Me.needsLights&&(un.state.sunShadowMap.length>0&&ht.setValue(V,"sunShadowMap",un.state.sunShadowMap,j),un.state.directionalShadowMap.length>0&&ht.setValue(V,"directionalShadowMap",un.state.directionalShadowMap,j),un.state.spotShadowMap.length>0&&ht.setValue(V,"spotShadowMap",un.state.spotShadowMap,j),un.state.pointShadowMap.length>0&&ht.setValue(V,"pointShadowMap",un.state.pointShadowMap,j)),q.isSkinnedMesh){ht.setOptional(V,q,"bindMatrix"),ht.setOptional(V,q,"bindMatrixInverse");let gt=q.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),ht.setValue(V,"boneTexture",gt.boneTexture,j))}q.isBatchedMesh&&(ht.setOptional(V,q,"batchingTexture"),ht.setValue(V,"batchingTexture",q._matricesTexture,j),ht.setOptional(V,q,"batchingIdTexture"),ht.setValue(V,"batchingIdTexture",q._indirectTexture,j),ht.setOptional(V,q,"batchingColorTexture"),q._colorsTexture!==null&&ht.setValue(V,"batchingColorTexture",q._colorsTexture,j));let $i=Z.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&B.update(q,Z,kn),(qi||Me.receiveShadow!==q.receiveShadow)&&(Me.receiveShadow=q.receiveShadow,ht.setValue(V,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(At.envMapIntensity.value=F.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=c1()),qi){if(ht.setValue(V,"toneMappingExposure",R.toneMappingExposure),Me.needsLights&&dx(At,$s),ge&&X.fog===!0&&Ie.refreshFogUniforms(At,ge),Ie.refreshMaterialUniforms(At,X,Q,Y,S.state.transmissionRenderTarget[C.id]),Me.needsLights&&Me.lightProbeGrid){let gt=Me.lightProbeGrid;At.probesSH.value=gt.texture,At.probesMin.value.copy(gt.boundingBox.min),At.probesMax.value.copy(gt.boundingBox.max),At.probesResolution.value.copy(gt.resolution)}Or.upload(V,qf(Me),At,j)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Or.upload(V,qf(Me),At,j),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ht.setValue(V,"center",q.center),ht.setValue(V,"modelViewMatrix",q.modelViewMatrix),ht.setValue(V,"normalMatrix",q.normalMatrix),ht.setValue(V,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let gt=X.uniformsGroups;for(let Ki=0,Ks=gt.length;Ki<Ks;Ki++){let Yf=gt[Ki];ne.update(Yf,kn),ne.bind(Yf,kn)}}return kn}function dx(C,F){C.ambientLightColor.needsUpdate=F,C.lightProbe.needsUpdate=F,C.sunLights.needsUpdate=F,C.sunLightShadows.needsUpdate=F,C.directionalLights.needsUpdate=F,C.directionalLightShadows.needsUpdate=F,C.pointLights.needsUpdate=F,C.pointLightShadows.needsUpdate=F,C.spotLights.needsUpdate=F,C.spotLightShadows.needsUpdate=F,C.rectAreaLights.needsUpdate=F,C.hemisphereLights.needsUpdate=F}function fx(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,F,Z){let X=K.get(C);X.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),K.get(C.texture).__webglTexture=F,K.get(C.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Z,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,F){let Z=K.get(C);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(C,F=0,Z=0){$=C,U=F,H=Z;let X=null,q=!1,ge=!1;if(C){let me=K.get(C);if(me.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(V.FRAMEBUFFER,me.__webglFramebuffer),G.copy(C.viewport),ie.copy(C.scissor),se=C.scissorTest,E.viewport(G),E.scissor(ie),E.setScissorTest(se),D=-1;return}else if(me.__webglFramebuffer===void 0)j.setupRenderTarget(C);else if(me.__hasExternalTextures)j.rebindTextures(C,K.get(C.texture).__webglTexture,K.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Ge=C.depthTexture;if(me.__boundDepthTexture!==Ge){if(Ge!==null&&K.has(Ge)&&(C.width!==Ge.image.width||C.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(C)}}let Ee=C.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);let Ce=K.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ce[F])?X=Ce[F][Z]:X=Ce[F],q=!0):C.samples>0&&j.useMultisampledRTT(C)===!1?X=K.get(C).__webglMultisampledFramebuffer:Array.isArray(Ce)?X=Ce[Z]:X=Ce,G.copy(C.viewport),ie.copy(C.scissor),se=C.scissorTest}else G.copy(xe).multiplyScalar(Q).floor(),ie.copy(Ue).multiplyScalar(Q).floor(),se=St;if(Z!==0&&(X=L),E.bindFramebuffer(V.FRAMEBUFFER,X)&&E.drawBuffers(C,X),E.viewport(G),E.scissor(ie),E.setScissorTest(se),q){let me=K.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+F,me.__webglTexture,Z)}else if(ge){let me=F;for(let Ee=0;Ee<C.textures.length;Ee++){let Ce=K.get(C.textures[Ee]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ee,Ce.__webglTexture,Z,me)}}else if(C!==null&&Z!==0){let me=K.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,me.__webglTexture,Z)}D=-1};function Kf(C){let F=K.get(C);return(F.__readFormat!==C.format||F.__readType!==C.type)&&(F.__readFormat=C.format,F.__readType=C.type,F.__formatReadable=P.textureFormatReadable(C.format),F.__typeReadable=P.textureTypeReadable(C.type)),F}this.readRenderTargetPixels=function(C,F,Z,X,q,ge,be,me=0){if(!(C&&C.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=K.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Ee=Ee[be]),Ee){E.bindFramebuffer(V.FRAMEBUFFER,Ee);try{let Ce=C.textures[me],Ge=Ce.format,Ze=Ce.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+me);let we=Kf(Ce);if(we.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=C.width-X&&Z>=0&&Z<=C.height-q&&V.readPixels(F,Z,X,q,ue.convert(Ge),ue.convert(Ze),ge)}finally{let Ce=$!==null?K.get($).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(C,F,Z,X,q,ge,be,me=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=K.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Ee=Ee[be]),Ee)if(F>=0&&F<=C.width-X&&Z>=0&&Z<=C.height-q){E.bindFramebuffer(V.FRAMEBUFFER,Ee);let Ce=C.textures[me],Ge=Ce.format,Ze=Ce.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+me);let we=Kf(Ce);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,rt),V.bufferData(V.PIXEL_PACK_BUFFER,ge.byteLength,V.STREAM_READ),V.readPixels(F,Z,X,q,ue.convert(Ge),ue.convert(Ze),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Pt=$!==null?K.get($).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,Pt);let _t=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Mm(V,_t,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,rt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,ge),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(rt),V.deleteSync(_t),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,F=null,Z=0){let X=Math.pow(2,-Z),q=Math.floor(C.image.width*X),ge=Math.floor(C.image.height*X),be=F!==null?F.x:0,me=F!==null?F.y:0;j.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,Z,0,0,be,me,q,ge),E.unbindTexture()},this.copyTextureToTexture=function(C,F,Z=null,X=null,q=0,ge=0){let be,me,Ee,Ce,Ge,Ze,we,rt,Pt,_t=C.isCompressedTexture?C.mipmaps[ge]:C.image;if(Z!==null)be=Z.max.x-Z.min.x,me=Z.max.y-Z.min.y,Ee=Z.isBox3?Z.max.z-Z.min.z:1,Ce=Z.min.x,Ge=Z.min.y,Ze=Z.isBox3?Z.min.z:0;else{let At=Math.pow(2,-q);be=Math.floor(_t.width*At),me=Math.floor(_t.height*At),C.isDataArrayTexture?Ee=_t.depth:C.isData3DTexture?Ee=Math.floor(_t.depth*At):Ee=1,Ce=0,Ge=0,Ze=0}X!==null?(we=X.x,rt=X.y,Pt=X.z):(we=0,rt=0,Pt=0);let dt=ue.convert(F.format),Qt=ue.convert(F.type),Me;F.isData3DTexture?(j.setTexture3D(F,0),Me=V.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(j.setTexture2DArray(F,0),Me=V.TEXTURE_2D_ARRAY):(j.setTexture2D(F,0),Me=V.TEXTURE_2D),E.activeTexture(V.TEXTURE0),E.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,F.flipY),E.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),E.pixelStorei(V.UNPACK_ALIGNMENT,F.unpackAlignment);let un=E.getParameter(V.UNPACK_ROW_LENGTH),nt=E.getParameter(V.UNPACK_IMAGE_HEIGHT),kn=E.getParameter(V.UNPACK_SKIP_PIXELS),ri=E.getParameter(V.UNPACK_SKIP_ROWS),qi=E.getParameter(V.UNPACK_SKIP_IMAGES);E.pixelStorei(V.UNPACK_ROW_LENGTH,_t.width),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_t.height),E.pixelStorei(V.UNPACK_SKIP_PIXELS,Ce),E.pixelStorei(V.UNPACK_SKIP_ROWS,Ge),E.pixelStorei(V.UNPACK_SKIP_IMAGES,Ze);let $s=C.isDataArrayTexture||C.isData3DTexture,ht=F.isDataArrayTexture||F.isData3DTexture;if(C.isDepthTexture){let At=K.get(C),$i=K.get(F),gt=K.get(At.__renderTarget),Ki=K.get($i.__renderTarget);E.bindFramebuffer(V.READ_FRAMEBUFFER,gt.__webglFramebuffer),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let Ks=0;Ks<Ee;Ks++)$s&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,K.get(C).__webglTexture,q,Ze+Ks),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,K.get(F).__webglTexture,ge,Pt+Ks)),V.blitFramebuffer(Ce,Ge,be,me,we,rt,be,me,V.DEPTH_BUFFER_BIT,V.NEAREST);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||K.has(C)){let At=K.get(C),$i=K.get(F);E.bindFramebuffer(V.READ_FRAMEBUFFER,I),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,z);for(let gt=0;gt<Ee;gt++)$s?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,At.__webglTexture,q,Ze+gt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,At.__webglTexture,q),ht?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$i.__webglTexture,ge,Pt+gt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,$i.__webglTexture,ge),q!==0?V.blitFramebuffer(Ce,Ge,be,me,we,rt,be,me,V.COLOR_BUFFER_BIT,V.NEAREST):ht?V.copyTexSubImage3D(Me,ge,we,rt,Pt+gt,Ce,Ge,be,me):V.copyTexSubImage2D(Me,ge,we,rt,Ce,Ge,be,me);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ht?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Me,ge,we,rt,Pt,be,me,Ee,dt,Qt,_t.data):F.isCompressedArrayTexture?V.compressedTexSubImage3D(Me,ge,we,rt,Pt,be,me,Ee,dt,_t.data):V.texSubImage3D(Me,ge,we,rt,Pt,be,me,Ee,dt,Qt,_t):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,ge,we,rt,be,me,dt,Qt,_t.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,ge,we,rt,_t.width,_t.height,dt,_t.data):V.texSubImage2D(V.TEXTURE_2D,ge,we,rt,be,me,dt,Qt,_t);E.pixelStorei(V.UNPACK_ROW_LENGTH,un),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,nt),E.pixelStorei(V.UNPACK_SKIP_PIXELS,kn),E.pixelStorei(V.UNPACK_SKIP_ROWS,ri),E.pixelStorei(V.UNPACK_SKIP_IMAGES,qi),ge===0&&F.generateMipmaps&&V.generateMipmap(Me),E.unbindTexture()},this.initRenderTarget=function(C){K.get(C).__webglFramebuffer===void 0&&j.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?j.setTextureCube(C,0):C.isData3DTexture?j.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?j.setTexture2DArray(C,0):j.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){U=0,H=0,$=null,E.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}};function ig(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new tt,c=0;for(let h=0;h<s.length;++h){let d=s[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,d=[];for(let u=0;u<s.length;++u){let f=s[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=ng(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let p=ng(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function ng(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new bt(a,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let x=h.getComponent(u,p);o.setComponent(u+d,p,x)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Tc(s,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,a=0,o=Object.keys(s.attributes),l={},c={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let _=0,y=o.length;_<y;_++){let v=o[_],b=s.attributes[v];l[v]=new b.constructor(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);let S=s.morphAttributes[v];S&&(c[v]||(c[v]=[]),S.forEach((A,M)=>{let w=new A.array.constructor(A.count*A.itemSize);c[v][M]=new A.constructor(w,A.itemSize,A.normalized)}))}let f=e*.5,p=Math.log10(1/e),x=Math.pow(10,p),g=f*x;for(let _=0;_<r;_++){let y=n?n.getX(_):_,v="";for(let b=0,S=o.length;b<S;b++){let A=o[b],M=s.getAttribute(A),w=M.itemSize;for(let R=0;R<w;R++)v+=`${Math.trunc(M[d[R]](y)*x+g)},`}if(v in t)h.push(t[v]);else{for(let b=0,S=o.length;b<S;b++){let A=o[b],M=s.getAttribute(A),w=s.morphAttributes[A],R=M.itemSize,k=l[A],N=c[A];for(let L=0;L<R;L++){let I=d[L],z=u[L];if(k[z](a,M[I](y)),w)for(let U=0,H=w.length;U<H;U++)N[U][z](a,w[U][I](y))}}t[v]=a,h.push(a),a++}}let m=s.clone();for(let _ in s.attributes){let y=l[_];if(m.setAttribute(_,new y.constructor(y.array.slice(0,a*y.itemSize),y.itemSize,y.normalized)),_ in c)for(let v=0;v<c[_].length;v++){let b=c[_][v];m.morphAttributes[_][v]=new b.constructor(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)}}return m.setIndex(h),m}function ld(s,e){if(e===Lu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Dr||e===$a){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Dr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function sg(s){let e=new Map,t=new Map,n=s.clone();return rg(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function rg(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)rg(s.children[n],e.children[n],t)}var Ac=class extends fi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new md(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new Rc(t,Ke.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Rc(t,Ke.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Rd(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Fi.extractUrlBase(e);a=Fi.resolveURL(c,this.path)}else a=Fi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Rr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===hg){try{a[Ke.KHR_BINARY_GLTF]=new Cd(e)}catch(d){i&&i(d);return}r=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Dd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case Ke.KHR_MATERIALS_UNLIT:a[d]=new fd;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[d]=new kd(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[d]=new Id;break;case Ke.KHR_MESH_QUANTIZATION:a[d]=new Pd;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function h1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Ct(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},dd=class{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Se(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],fn);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new zs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ns(h),c.distance=d;break;case"spot":c=new za(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),xi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},fd=class{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Gt}extendParams(e,t,n){let i=[];e.color=new Se(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],fn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(i)}},pd=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},md=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(r,r)}return Promise.all(i)}},gd=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},xd=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},_d=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],fn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,vt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},vd=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},yd=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(r[0],r[1],r[2],fn),Promise.all(i)}},Md=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},bd=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(r[0],r[1],r[2],fn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,vt)),Promise.all(i)}},Sd=class{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Ed=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ct(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=Ct(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},wd=class{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Td=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Ad=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Rc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}},Rd=class{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Fn.TRIANGLES&&c.mode!==Fn.TRIANGLE_STRIP&&c.mode!==Fn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(let p of d){let x=new _e,g=new T,m=new $e,_=new T(1,1,1),y=new Wt(p.geometry,p.material,u);for(let b=0;b<u;b++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,b),l.SCALE&&_.fromBufferAttribute(l.SCALE,b),y.setMatrixAt(b,x.compose(g,m,_));let v=null;for(let b in l)if(b==="_COLOR_0"){let S=l[b];y.instanceColor=new Ii(S.array,S.itemSize,S.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(v===null){let A=y.geometry;v=new tt,v.name=A.name;for(let M in A.attributes)v.setAttribute(M,A.attributes[M]);for(let M in A.morphAttributes)v.morphAttributes[M]=A.morphAttributes[M];A.index!==null&&v.setIndex(A.index),v.morphTargetsRelative=A.morphTargetsRelative;for(let M of A.groups)v.addGroup(M.start,M.count,M.materialIndex);A.boundingBox!==null&&(v.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(v.boundingSphere=A.boundingSphere.clone()),v.drawRange.start=A.drawRange.start,v.drawRange.count=A.drawRange.count,v.userData=Object.assign({},A.userData),y.geometry=v}let S=l[b];v.setAttribute(b,new Ii(S.array,S.itemSize,S.normalized))}xt.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},hg="glTF",Ja=12,ag={JSON:1313821514,BIN:5130562},Cd=class{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ja),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ja,r=new DataView(e,Ja),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===ag.JSON){let c=new Uint8Array(e,Ja+a,o);this.content=n.decode(c)}else if(l===ag.BIN){let c=Ja+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},kd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let d=Nd[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=Nd[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[e.attributes[h]],f=Vr[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(let p in f.attributes){let x=f.attributes[p],g=l[p];g!==void 0&&(x.normalized=g)}d(f)},o,c,fn,u)})})}},Id=class{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Pd=class{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}},Cc=class extends di{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,p=e*c,x=p-c,g=-2*f+3*u,m=f-u,_=1-g,y=m-u+d;for(let v=0;v!==o;v++){let b=a[x+v+o],S=a[x+v+l]*h,A=a[p+v+o],M=a[p+v]*h;r[v]=_*b+y*S+g*A+m*M}return r}},u1=new $e,Ld=class extends Cc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return u1.fromArray(r).normalize().toArray(r),r}},Fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},og={9728:Rt,9729:ot,9984:Ll,9985:Lr,9986:Fs,9987:En},lg={33071:Ln,33648:mr,10497:li},cd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},cs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},d1={CUBICSPLINE:void 0,LINEAR:Rs,STEP:As},hd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function f1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Jn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),s.DefaultMaterial}function Hs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function p1(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let d=e[c];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(i){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],d=c[1],u=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function m1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function g1(s){let e,t=s.extensions&&s.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ud(t.attributes):e=s.indices+":"+ud(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ud(s.targets[n]);return e}function ud(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function zd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function x1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var _1=new _e,Dd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new h1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new La(this.options.manager):this.textureLoader=new Da(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Rr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Hs(r,o,i),xi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Fi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=cd[i.type],o=Vr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new bt(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=cd[i.type],c=Vr[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,x,g;if(f&&f!==d){let m=Math.floor(u/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,y=t.cache.get(_);y||(x=new c(o,m*f,i.count*f/h),y=new ks(x,f/h),t.cache.add(_,y)),g=new ts(y,l,u%f/h,p)}else o===null?x=new c(i.count*l):x=new c(o,u,i.count*l),g=new bt(x,l,p);if(i.sparse!==void 0){let m=cd.SCALAR,_=Vr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,b=new _(a[1],y,i.sparse.count*m),S=new c(a[2],v,i.sparse.count*l);o!==null&&(g=new bt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,M=b.length;A<M;A++){let w=b[A];if(g.setX(w,S[A*l]),l>=2&&g.setY(w,S[A*l+1]),l>=3&&g.setZ(w,S[A*l+2]),l>=4&&g.setW(w,S[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return h.magFilter=og[u.magFilter]||ot,h.minFilter=og[u.minFilter]||En,h.wrapS=lg[u.wrapS]||li,h.wrapT=lg[u.wrapT]||li,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Rt&&h.minFilter!==ot,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let u=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let p=u;t.isImageBitmapLoader===!0&&(p=function(x){let g=new Et(x);g.needsUpdate=!0,u(g)}),t.load(Fi.resolveURL(d,r.path),p,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),xi(d,a),d.userData.mimeType=a.mimeType||x1(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new wr,nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Er,nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Jn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){let d=i[Ke.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],fn),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,vt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=sn);let h=r.alphaMode||hd.OPAQUE;if(h===hd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===hd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Gt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Gt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Gt){let d=r.emissiveFactor;o.emissive=new Se().setRGB(d[0],d[1],d[2],fn)}return r.emissiveTexture!==void 0&&a!==Gt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,vt)),Promise.all(c).then(function(){let d=new a(o);return r.name&&(d.name=r.name),xi(d,r),t.associations.set(d,{materials:e}),r.extensions&&Hs(i,d,r),d})}createUniqueName(e){let t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return cg(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=g1(c),d=i[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=cg(new tt,c,t),c.mode===Fn.TRIANGLE_STRIP?u=u.then(f=>ld(f,$a)):c.mode===Fn.TRIANGLE_FAN&&(u=u.then(f=>ld(f,Dr))),i[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?f1(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,p=h.length;f<p;f++){let x=h[f],g=a[f],m,_=c[f];if(g.mode===Fn.TRIANGLES||g.mode===Fn.TRIANGLE_STRIP||g.mode===Fn.TRIANGLE_FAN||g.mode===void 0){let y=r.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");y&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=y&&v?new ba(x,_):new Xe(x,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===Fn.LINES)m=new Ea(x,_);else if(g.mode===Fn.LINE_STRIP)m=new Ps(x,_);else if(g.mode===Fn.LINE_LOOP)m=new wa(x,_);else if(g.mode===Fn.POINTS)m=new Ta(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&m1(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),xi(m,r),g.extensions&&Hs(i,m,g),t.assignFinalMaterial(m),d.push(m)}for(let f=0,p=d.length;f<p;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Hs(i,d[0],r),d[0];let u=new De;r.extensions&&Hs(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(Qe.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Dn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let d=a[c];if(d){o.push(d);let u=new _e;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Sa(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){let f=i.channels[d],p=i.samplers[f.sampler],x=f.target,g=x.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,_=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",_)),c.push(p),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],p=d[2],x=d[3],g=d[4],m=[];for(let y=0,v=u.length;y<v;y++){let b=u[y],S=f[y],A=p[y],M=x[y],w=g[y];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let R=n._createAnimationTracks(b,S,A,M,w);if(R)for(let k=0;k<R.length;k++)m.push(R[k])}let _=new Pa(r,void 0,m);return xi(_,i),_})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,_1)});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,p=d[0];h.pivot=new T().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new br:c.length>1?h=new De:c.length===1?h=c[0]:h=new xt,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=a),xi(h,r),r.extensions&&Hs(n,h,r),r.matrix!==void 0){let d=new _e;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new De;n.name&&(r.name=i.createUniqueName(n.name)),xi(r,n),n.extensions&&Hs(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){let u=l[h];u.parent!==null?r.add(sg(u)):r.add(u)}let c=h=>{let d=new Map;for(let[u,f]of i.associations)(u instanceof nn||u instanceof Et)&&d.set(u,f);return h.traverse(u=>{let f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}cs[r.path]===cs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(cs[r.path]){case cs.weights:h=zi;break;case cs.rotation:h=Di;break;case cs.translation:case cs.scale:h=ss;break;default:n.itemSize===1?h=zi:h=ss;break}let d=i.interpolation!==void 0?d1[i.interpolation]:Rs,u=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let x=new h(l[f]+"."+cs[r.path],t.array,u,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=zd(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Di?Ld:Cc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function v1(s,e,t){let n=e.attributes,i=new wt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new T(l[0],l[1],l[2]),new T(c[0],c[1],c[2])),o.normalized){let h=zd(Vr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new T,l=new T;for(let c=0,h=r.length;c<h;c++){let d=r[c];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,p=u.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),u.normalized){let x=zd(Vr[u.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Kt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function cg(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=Nd[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return qe.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),xi(s,e),v1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?p1(s,e.targets,t):s})}var kc=new Map;function y1(s,e){let t=kc.get(s);return t||(t={wert:e(),zaehler:0},kc.set(s,t)),t.zaehler++,t.wert}function M1(s){let e=kc.get(s);e&&(e.zaehler--,e.zaehler<=0&&(kc.delete(s),dg(e.wert)))}function dg(s){if(s){if(s.isMaterial)for(let e of["normalMap","iridescenceThicknessMap","roughnessMap","map"])s[e]&&s[e].isTexture&&s[e].dispose();typeof s.dispose=="function"&&s.dispose()}}var Vs=class{constructor(){this.schluessel=[],this.eigene=new Set,this.entsorgt=!1}geteilt(e,t){return this.schluessel.push(e),y1(e,t)}eigen(e){return e&&this.eigene.add(e),e}dispose(){if(!this.entsorgt){this.entsorgt=!0;for(let e of this.schluessel)M1(e);for(let e of this.eigene)dg(e);this.schluessel.length=0,this.eigene.clear()}}};function ti(s,e,t,n){return s.includes(e)?s.replace(e,t):(console.warn(`[schmuck] Shader-Stelle '${e}' fehlt (${n}); Effekt deaktiviert.`),s)}var Ud={gold:{name:"Gold",farbe:[1,.66,.24],agx:[1,.75,.2],kante:[1,.87,.6],tiefe:.75,rauheit:.11,klarlack:0},silber:{name:"Silber",farbe:[.95,.94,.92],kante:[1,1,1],tiefe:0,rauheit:.12,klarlack:.1},rosegold:{name:"Ros\xE9gold",farbe:[1,.64,.5],agx:[1,.68,.5],kante:[1,.86,.8],tiefe:.6,rauheit:.12,klarlack:0},weissgold:{name:"Wei\xDFgold",farbe:[.9,.89,.86],kante:[1,1,.98],tiefe:.1,rauheit:.11,klarlack:.1}};function Ft(s,e="gold",t="poliert"){let n=Ud[e]?e:"gold";return s.geteilt(`metall:${n}:${t}`,()=>b1(Ud[n],t,n))}function b1(s,e="poliert",t="metall"){let n=new Xt({name:`metall-${t}-${e}`,metalness:1,roughness:s.rauheit,clearcoat:s.klarlack||0,clearcoatRoughness:.04,envMapIntensity:1});n.color.setRGB(s.farbe[0],s.farbe[1],s.farbe[2]),n.userData.metallName=t,e==="matt"?(n.roughness=Math.max(.3,s.rauheit*2.6),n.clearcoat=0):e==="motiv"?(n.roughness=Math.max(.22,s.rauheit*2),n.clearcoat=0):e==="schlange"&&(n.normalMap=S1(),n.normalScale.set(.9,.9),n.roughness=s.rauheit+.02);let i=s.kante||[1,1,1],r=Math.max(...s.farbe),a={metallTon:{value:new T(s.farbe[0]/r,s.farbe[1]/r,s.farbe[2]/r)},metallKante:{value:new T(...i)},metallTiefe:{value:s.tiefe??0},metallAgx:{value:new T(1,1,1)}};return s.agx&&a.metallAgx.value.set(s.agx[0]/s.farbe[0],s.agx[1]/s.farbe[1],s.agx[2]/s.farbe[2]),n.userData.metall=a,n.onBeforeCompile=o=>{Object.assign(o.uniforms,a),o.toneMapping===rs&&(o.defines={...o.defines,METALL_AGX:""}),o.fragmentShader=ti(o.fragmentShader,"#include <common>",`#include <common>
uniform vec3 metallAgx;
uniform vec3 metallTon;
uniform vec3 metallKante;
uniform float metallTiefe;`,"metall"),o.fragmentShader=ti(o.fragmentShader,"#include <transmission_fragment>",`#include <transmission_fragment>
{
  float mNdV = saturate( dot( normal, geometryViewDir ) );
  float mL = dot( totalSpecular, vec3( 0.2126, 0.7152, 0.0722 ) );
  // dunkle Spiegelungen ein zweites Mal am Metall reflektiert -> satte, warme Tiefen
  float mTief = metallTiefe * ( 1.0 - smoothstep( 0.02, 0.9, mL ) );
  totalSpecular *= mix( vec3( 1.0 ), metallTon, mTief );
  // streifende Spiegelungen bleiben getoent statt weiss
  totalSpecular *= mix( vec3( 1.0 ), metallKante, pow( 1.0 - mNdV, 3.0 ) );
  #ifdef METALL_AGX
    totalSpecular *= metallAgx;
  #endif
}`,"metall")},n.customProgramCacheKey=()=>"schmuck-metall-1",n}function S1(){let t=new Float32Array(2048);for(let o=0;o<32;o++)for(let l=0;l<64;l++){let c=l/64,h=o/32,d=(c*2+Math.abs(h-.5)*1.2)%1;t[o*64+l]=Math.sqrt(Math.max(0,d))*(1-d*.25)}let n=new Uint8Array(2048*4),i=2.2,r=new T;for(let o=0;o<32;o++)for(let l=0;l<64;l++){let c=(f,p)=>t[(p+32)%32*64+(f+64)%64],h=(c(l+1,o)-c(l-1,o))*i,d=(c(l,o+1)-c(l,o-1))*i*.5;r.set(-h,-d,1).normalize();let u=(o*64+l)*4;n[u]=Math.round((r.x*.5+.5)*255),n[u+1]=Math.round((r.y*.5+.5)*255),n[u+2]=Math.round((r.z*.5+.5)*255),n[u+3]=255}let a=new ns(n,64,32,xn);return a.wrapS=a.wrapT=li,a.magFilter=ot,a.minFilter=En,a.generateMipmaps=!0,a.colorSpace=Tn,a.needsUpdate=!0,a}var Fd={weiss:{name:"Wei\xDF",grund:[.63,.6,.57],rand:[.36,.33,.34],orientA:[1,.84,.89],orientB:[.86,1,.93],orient:.72,irid:.5,film:[300,520],randBreite:.8},creme:{name:"Creme",grund:[.62,.53,.42],rand:[.46,.37,.34],orientA:[1,.78,.76],orientB:[.9,.98,.82],orient:.8,irid:.45,film:[320,540]},rose:{name:"Ros\xE9",grund:[.64,.5,.49],rand:[.46,.33,.4],orientA:[1,.7,.84],orientB:[.86,.94,.98],orient:.9,irid:.5,film:[300,520]},champagner:{name:"Champagner",grund:[.56,.43,.3],rand:[.46,.34,.26],orientA:[1,.8,.68],orientB:[.88,.94,.78],orient:.8,irid:.45,film:[340,560]},grau:{name:"Grau",grund:[.26,.27,.3],rand:[.62,.6,.7],orientA:[.9,.8,1],orientB:[.78,1,.88],orient:.8,irid:.45,film:[280,500]}},Qa=3,ug=[{glanz:0,phase:0,orient:1,film:0},{glanz:.012,phase:.37,orient:.85,film:30},{glanz:-.008,phase:.71,orient:1.15,film:-25}];function hs(s,e="weiss",t=0){let n=Fd[e]?e:"weiss",i=(Math.round(t)%Qa+Qa)%Qa;return s.geteilt(`perle:${n}:${i}`,()=>E1(Fd[n],i,n))}function E1(s,e=0,t="perle"){let n=ug[e%ug.length],i=s.film||[300,520],r=1.53,a=new Xt({name:`perle-${t}-${e}`,metalness:0,roughness:s.rauheit??.3,clearcoat:1,clearcoatRoughness:Math.max(0,(s.glanz??.035)+n.glanz),iridescence:s.irid??.5,iridescenceIOR:s.filmIor??1.6,iridescenceThicknessRange:[i[0]+n.film,i[1]+n.film],ior:r,specularIntensity:1,envMapIntensity:1});a.color.setRGB(s.grund[0],s.grund[1],s.grund[2]);let o=((r-1)/(r+1))**2;a.specularColor.setScalar((s.spiegel??.22)/o);let l={perlRand:{value:new T(...s.rand)},perlOrientA:{value:new T(...s.orientA)},perlOrientB:{value:new T(...s.orientB)},perlOrient:{value:(s.orient??.5)*n.orient},perlPhase:{value:n.phase},perlDurch:{value:s.durch??.2},perlMuster:{value:s.muster??.55},perlRandBreite:{value:s.randBreite??.95}};return a.userData.perle=l,a.onBeforeCompile=c=>{Object.assign(c.uniforms,l),c.toneMapping===rs&&(c.defines={...c.defines,PERLE_AGX:""}),c.vertexShader=ti(c.vertexShader,"#include <common>",`#include <common>
varying vec3 vPerlOrt;`,"perle"),c.vertexShader=ti(c.vertexShader,"#include <begin_vertex>",`#include <begin_vertex>
vPerlOrt = position;
#ifdef USE_INSTANCING
  vPerlOrt += instanceMatrix[3].xyz * 1.7;
#endif`,"perle"),c.fragmentShader=ti(c.fragmentShader,"#include <common>",`#include <common>
uniform vec3 perlRand;
uniform vec3 perlOrientA;
uniform vec3 perlOrientB;
uniform float perlOrient;
uniform float perlPhase;
uniform float perlDurch;
uniform float perlMuster;
uniform float perlRandBreite;
varying vec3 vPerlOrt;`,"perle");let h=Ve.lights_physical_fragment.replace("material.iridescenceThickness = iridescenceThicknessMaximum;",`{
        vec3 q = vPerlOrt * perlMuster * 1.3 + perlPhase * 5.0;
        float t = 0.5 + 0.25 * sin( q.x * 1.7 + sin( q.y * 2.3 + q.z ) * 1.5 ) + 0.25 * sin( q.z * 2.1 - q.y * 1.3 + perlPhase * 9.0 );
        material.iridescenceThickness = mix( iridescenceThicknessMinimum, iridescenceThicknessMaximum, t );
      }`);c.fragmentShader=ti(c.fragmentShader,"#include <lights_physical_fragment>",h,"perle"),c.fragmentShader=ti(c.fragmentShader,"#include <aomap_fragment>",`#include <aomap_fragment>
{
  vec3 pN = normal;
  vec3 pV = geometryViewDir;
  float pNdV = saturate( dot( pN, pV ) );
  vec3 q = vPerlOrt * perlMuster + perlPhase * 7.0;
  float m1 = sin( q.x * 1.3 + sin( q.y * 1.7 + q.z * 0.9 ) * 1.4 );
  float m2 = sin( q.y * 1.1 - q.z * 1.9 + sin( q.x * 1.5 ) * 1.2 );
  float muster = 0.5 + 0.25 * ( m1 + m2 );
  // Orient: Uebertoene wechseln mit Blickwinkel und Ort
  float w = ( 1.0 - pNdV ) * 1.35 + muster * 0.8 + perlPhase;
  vec3 orient = mix( perlOrientA, perlOrientB, 0.5 + 0.5 * cos( 6.2831853 * w ) );
  float orientMenge = perlOrient * ( 0.35 + 0.65 * smoothstep( 0.95, 0.35, pNdV ) );
  vec3 koerper = mix( vec3( 1.0 ), orient, orientMenge );
  // Tiefe: zur Kante hin dunkler und satter
  koerper *= mix( vec3( 1.0 ), perlRand, smoothstep( perlRandBreite, 0.05, pNdV ) );
  #ifdef PERLE_AGX
    koerper *= 1.3;
  #endif
  reflectedLight.directDiffuse *= koerper;
  reflectedLight.indirectDiffuse *= koerper;
  // Weiche Begrenzung des Diffusanteils: vor hellem Grund (weisse Wand) clippt
  // die Perle sonst zu einer flachen Flaeche, und der Lueste geht verloren
  {
    float dL = dot( reflectedLight.indirectDiffuse + reflectedLight.directDiffuse, vec3( 0.2126, 0.7152, 0.0722 ) );
    if ( dL > 0.55 ) {
      float zielL = 0.55 + ( dL - 0.55 ) / ( 1.0 + ( dL - 0.55 ) * 1.3 );
      float k = zielL / dL;
      reflectedLight.indirectDiffuse *= k;
      reflectedLight.directDiffuse *= k;
    }
  }
  // Durchscheinen: Licht aus der Umgebung hinter der Perle tritt weich aus (Mitte leuchtet)
  #ifdef USE_ENVMAP
    vec3 pIrr = getIBLIrradiance( normalize( pN * 0.5 - pV ) ) * RECIPROCAL_PI;
    reflectedLight.indirectDiffuse += pIrr * diffuseColor.rgb * perlDurch * ( 0.35 + 0.65 * pNdV ) * mix( vec3( 1.0 ), orient, 0.5 );
  #endif
  // Spiegelung der Grundschicht leicht im Orient getoent
  reflectedLight.indirectSpecular *= mix( vec3( 1.0 ), orient, orientMenge * 0.6 );
}`,"perle")},a.customProgramCacheKey=()=>"schmuck-perle-2",a}function fg(s,e=new Se){let t=1-s()*.08,n=(s()-.5)*.06,i=(s()-.5)*.04;return e.setRGB(t*(1+n*.5+i),t*(1-i*.3),t*(1-n))}var Od={diamant:{name:"Diamant",farbe:"#ffffff",ior:2.42,dispersion:4,daempfung:null},zirkonia:{name:"Zirkonia",farbe:"#ffffff",ior:2.42,dispersion:5,daempfung:null},saphir:{name:"Saphir",farbe:"#1d3fae",ior:1.77,dispersion:1.2,daempfung:1.2},rubin:{name:"Rubin",farbe:"#b0102c",ior:1.77,dispersion:1.2,daempfung:1.2},smaragd:{name:"Smaragd",farbe:"#0f7a45",ior:1.58,dispersion:.8,daempfung:1.4}};function _i(s,e="zirkonia",t=null){let n=Od[e]?e:"zirkonia",i=(t||Od[n].farbe).toLowerCase();return s.geteilt(`stein:${n}:${i}`,()=>w1(n,i))}function w1(s,e){let t=Od[s],n=e!=="#ffffff",i=new Xt({name:`stein-${s}`,metalness:0,roughness:.04,ior:Math.min(2.333,t.ior),specularIntensity:1,envMapIntensity:1});i.color=new Se(e);let r={steinIor:{value:t.ior},steinFeuer:{value:t.dispersion*.02},steinBrillanz:{value:n?1.4:1.5},steinKontrast:{value:n?.6:.9}};return i.userData.stein=r,i.onBeforeCompile=a=>{Object.assign(a.uniforms,r),a.vertexShader=ti(a.vertexShader,"#include <common>",`#include <common>
varying vec3 vSteinA;
varying vec3 vSteinB;
varying float vSteinW;
varying vec3 vSteinPos;
vec3 steinHash(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.xxy + p.yxx) * p.zyx);
}`,"stein"),a.vertexShader=ti(a.vertexShader,"#include <defaultnormal_vertex>",`#include <defaultnormal_vertex>
{
  // je Facette feste Pseudo-Normalen (aus der Objektnormale, also stabil bei Bewegung)
  vec3 hA = steinHash(objectNormal * 31.7 + 3.1) - 0.5;
  vec3 hB = steinHash(objectNormal * 17.3 + 9.4) - 0.5;
  #ifdef USE_INSTANCING
    hA = mat3(instanceMatrix) * hA;
    hB = mat3(instanceMatrix) * hB;
  #endif
  vSteinA = normalize(normalMatrix * hA);
  vSteinB = normalize(normalMatrix * hB);
  vSteinW = steinHash(objectNormal * 7.9 + 1.7).x;
  vSteinPos = position;
}`,"stein"),a.fragmentShader=ti(a.fragmentShader,"#include <common>",`#include <common>
uniform float steinIor;
uniform float steinFeuer;
uniform float steinBrillanz;
uniform float steinKontrast;
varying vec3 vSteinA;
varying vec3 vSteinB;
varying float vSteinW;
varying vec3 vSteinPos;
vec3 steinHash(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.xxy + p.yxx) * p.zyx);
}`,"stein"),a.fragmentShader=ti(a.fragmentShader,"#include <opaque_fragment>",`
#ifdef ENVMAP_TYPE_CUBE_UV
{
  vec3 sN = normalize(normal);
  vec3 sV = geometryViewDir;
  float sNdV = clamp(dot(sN, sV), 0.0, 1.0);
  float sF0 = pow((steinIor - 1.0) / (steinIor + 1.0), 2.0);
  float sF = sF0 + (1.0 - sF0) * pow(1.0 - sNdV, 5.0);
  vec3 sAussen = textureCubeUV(envMap, envMapRotation * transformDirectionByInverseViewMatrix(reflect(-sV, sN), viewMatrix), 0.0).rgb * envMapIntensity * sF;
  // Pavillon-Muster: Sektor (16) und Ring der Eintrittsstelle waehlen die gespiegelte Facette
  float sWinkel = atan(vSteinPos.y, vSteinPos.x) / 6.2831853 + 0.5;
  float sSektor = floor(sWinkel * 16.0);
  float sRing = floor(length(vSteinPos.xy) / max(length(vSteinPos), 1e-4) * 2.6 + 0.3 * cos(sWinkel * 50.265));
  vec3 sH = steinHash(vec3(sSektor, sRing, vSteinW * 17.0) + 0.37);
  vec3 sP1 = normalize(-sN * 0.55 + normalize(mix(vSteinA, vSteinB, sH.x) + 0.001));
  vec3 sP2 = normalize(sN * 0.25 + normalize(mix(vSteinB, -vSteinA, sH.y) + 0.001));
  vec3 sInnen;
  for (int k = 0; k < 3; k++) {
    float ior = steinIor * (1.0 + (float(k) - 1.0) * steinFeuer);
    vec3 sT = refract(-sV, sN, 1.0 / ior);
    vec3 sD = normalize(reflect(reflect(sT, sP1), sP2));
    float sDunkel = 1.0 - steinKontrast * smoothstep(0.3, 0.92, dot(sD, sV));
    vec3 e = textureCubeUV(envMap, envMapRotation * transformDirectionByInverseViewMatrix(sD, viewMatrix), 0.0).rgb * envMapIntensity * sDunkel;
    e = pow(e, vec3(2.0)) * 1.8; // Kontrast: Lichter blitzen, Grautoene werden dunkel
    if (k == 0) sInnen.r = e.r; else if (k == 1) sInnen.g = e.g; else sInnen.b = e.b;
  }
  // je Facette eigene Helligkeit: einige fast schwarz (Spiegelung dunkler Umgebung/des Betrachters), andere blitzen
  float sFacette = mix(0.3, 1.25, vSteinW) * mix(0.05, 1.5, smoothstep(0.12, 0.85, sH.z));
  sInnen *= (1.0 - sF) * steinBrillanz * diffuseColor.rgb * sFacette;
  outgoingLight = sAussen + sInnen + reflectedLight.directSpecular;
}
#endif
#include <opaque_fragment>`,"stein")},i.customProgramCacheKey=()=>"schmuck-stein-1",i}var ut=Math.PI,Zt=Math.PI*2,An=new T,T1=new T,A1=new T,pg=new _e;function eo(s=1){let e=(Math.floor(s*9973)^2654435769)>>>0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function xg(s){let e=2166136261;for(let t=0;t<s.length;t++)e^=s.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0)%1e5}function R1(s,e=new T){let t=s()*2-1,n=s()*Zt,i=Math.sqrt(1-t*t);return e.set(i*Math.cos(n),i*Math.sin(n),t)}function mg(s,{wellen:e=8,freqMin:t=.5,freqMax:n=1.5}={}){let i=[],r=0;for(let o=0;o<e;o++){let l=t+(n-t)*s(),c=1/l;i.push({d:R1(s),f:l*ut,p:s()*Zt,a:c}),r+=c*c*.5}let a=1/Math.sqrt(r);return(o,l,c)=>{let h=0;for(let d of i)h+=d.a*Math.sin(d.f*(d.d.x*o+d.d.y*l+d.d.z*c)+d.p);return h*a}}var Mn=class{constructor(e,{geschlossen:t=!1,normalen:n=null}={}){this.punkte=e,this.geschlossen=t;let i=e.length;this.anzahlSeg=t?i:i-1,this.s=new Float64Array(this.anzahlSeg+1);for(let r=0;r<this.anzahlSeg;r++)this.s[r+1]=this.s[r]+e[r].distanceTo(e[(r+1)%i]);this.laenge=this.s[this.anzahlSeg],this.tangenten=Hd(e,t),n?this.normalen=n.map((r,a)=>{let o=this.tangenten[a];return r.clone().addScaledVector(o,-r.dot(o)).normalize()}):this.normalen=_g(e,this.tangenten,t)}_ort(e){let t=this.laenge;this.geschlossen?e=(e%t+t)%t:e=Math.min(Math.max(e,0),t);let n=0,i=this.anzahlSeg;for(;i-n>1;){let a=n+i>>1;this.s[a]<=e?n=a:i=a}let r=this.s[n+1]-this.s[n];return{i:n,j:(n+1)%this.punkte.length,t:r>0?(e-this.s[n])/r:0}}punkt(e,t=new T){let n=this._ort(e);return t.lerpVectors(this.punkte[n.i],this.punkte[n.j],n.t)}tangente(e,t=new T){let n=this._ort(e);return t.lerpVectors(this.tangenten[n.i],this.tangenten[n.j],n.t).normalize()}normale(e,t=new T){let n=this._ort(e);t.lerpVectors(this.normalen[n.i],this.normalen[n.j],n.t);let i=this.tangente(e,A1);return t.addScaledVector(i,-t.dot(i)).normalize()}abtasten(e,t,n){let i=Math.max(2,Math.ceil(Math.abs(t-e)/n)+1),r=[],a=[];for(let o=0;o<i;o++){let l=e+(t-e)*(o/(i-1));r.push(this.punkt(l)),a.push(this.normale(l))}return{punkte:r,normalen:a}}};function Hd(s,e){let t=s.length,n=[];for(let i=0;i<t;i++){let r,a;e?(r=s[(i-1+t)%t],a=s[(i+1)%t]):(r=s[Math.max(0,i-1)],a=s[Math.min(t-1,i+1)]);let o=new T().subVectors(a,r);o.lengthSq()<1e-20&&o.set(0,1,0),n.push(o.normalize())}return n}function C1(s){let e=Math.abs(s.x)<.9?new T(1,0,0):new T(0,1,0);return e.addScaledVector(s,-e.dot(s)).normalize()}function _g(s,e,t,n=null){let i=s.length,r=new Array(i),a=n?n.clone():C1(e[0]);r[0]=a.addScaledVector(e[0],-a.dot(e[0])).normalize();let o=(l,c,h,d,u)=>{let f=An.subVectors(h,c),p=f.dot(f);if(p<1e-20)return l.clone();let x=l.clone().addScaledVector(f,-2/p*f.dot(l)),g=d.clone().addScaledVector(f,-2/p*f.dot(d)),m=T1.subVectors(u,g),_=m.dot(m);return _<1e-20?x:x.addScaledVector(m,-2/_*m.dot(x))};for(let l=0;l<i-1;l++)r[l+1]=o(r[l],s[l],s[l+1],e[l],e[l+1]).normalize();if(t&&i>2){let l=o(r[i-1],s[i-1],s[0],e[i-1],e[0]).normalize(),c=e[0],h=Math.atan2(An.crossVectors(l,r[0]).dot(c),l.dot(r[0])),d=new $e;for(let u=1;u<i;u++)d.setFromAxisAngle(e[u],h*(u/i)),r[u].applyQuaternion(d).normalize()}return r}function vg(s,e,t=!1){let n=new Mn(s,{geschlossen:t,normalen:s.map(()=>new T(0,0,1))}),i=[],r=t?e:e-1;for(let a=0;a<e;a++)i.push(n.punkt(n.laenge*(a/r)));return i}function ni(s,{radius:e=.5,ellipse:t=[1,1],segmente:n=8,geschlossen:i=!1,kappen:r="rund",normalen:a=null,uvLaenge:o=0,uvUmfang:l=1,winkel0:c=0}={}){let h=s,d=a,u=Hd(s,i),f,p;d?p=d.map((D,O)=>D.clone().addScaledVector(u[O],-D.dot(u[O])).normalize()):p=_g(s,u,i),f=u,i&&(h=[...s,s[0]],f=[...u,u[0]],p=[...p,p[0]]);let x=h.length,g=new Float64Array(x);for(let D=1;D<x;D++)g[D]=g[D-1]+h[D].distanceTo(h[D-1]);let m=g[x-1]||1,_=new Float64Array(x);for(let D=0;D<x;D++)_[D]=typeof e=="function"?e(i?D%s.length:D,g[D]/m):e;let y=n,v=[],b=[],S=[],A=[],M=new T,w=new T,R=new T,k=[],N=(D,O,G,ie,se,ye,Te=0,Oe=1)=>{M.crossVectors(O,G);let Y=v.length/3,Q=ie*t[0]*Oe,pe=ie*t[1]*Oe;for(let Re=0;Re<=y;Re++){let xe=c+Re/y*Zt,Ue=Math.cos(xe),St=Math.sin(xe);R.copy(D).addScaledVector(G,Ue*Q).addScaledVector(M,St*pe),v.push(R.x,R.y,R.z),w.set(0,0,0).addScaledVector(G,Ue/Math.max(t[0],1e-6)).addScaledVector(M,St/Math.max(t[1],1e-6)).normalize(),Te!==0?w.multiplyScalar(Math.cos(Te)).addScaledVector(O,Math.sin(Te)):se&&w.addScaledVector(O,-se),w.normalize(),b.push(w.x,w.y,w.z),S.push(ye,Re/y*l)}return k.push(Y),Y},L=(D,O)=>{for(let G=0;G<y;G++){let ie=D+G,se=D+G+1,ye=O+G,Te=O+G+1;A.push(ie,se,ye,se,Te,ye)}},I=D=>o>0?D/o:D/m,z=!i,U=Math.max(2,Math.round(y/2)),H=-1;if(z&&r==="rund"){let D=f[0];for(let O=U;O>=1;O--){let G=O/U*(ut/2),ie=An.copy(h[0]).addScaledVector(D,-_[0]*Math.sin(G)*Math.max(t[0],t[1])*.9),se=N(ie,D,p[0],_[0],0,I(0),-G,Math.cos(G));H>=0&&L(H,se),H=se}}else if(z&&r==="flach"){let D=v.length/3;v.push(h[0].x,h[0].y,h[0].z),b.push(-f[0].x,-f[0].y,-f[0].z),S.push(I(0),0);let O=N(h[0],f[0],p[0],_[0],0,I(0),-ut/2,1);for(let G=0;G<y;G++)A.push(D,O+G+1,O+G);H=-1}for(let D=0;D<x;D++){let O=Math.max(0,D-1),G=Math.min(x-1,D+1),ie=g[G]-g[O],se=ie>1e-9?(_[G]-_[O])/ie:0,ye=N(h[D],f[D],p[D],_[D],se,I(g[D]));H>=0&&L(H,ye),H=ye}if(z&&r==="rund"){let D=f[x-1];for(let O=1;O<=U;O++){let G=O/U*(ut/2),ie=An.copy(h[x-1]).addScaledVector(D,_[x-1]*Math.sin(G)*Math.max(t[0],t[1])*.9),se=N(ie,D,p[x-1],_[x-1],0,I(m),G,Math.cos(G));L(H,se),H=se}}else if(z&&r==="flach"){let D=N(h[x-1],f[x-1],p[x-1],_[x-1],0,I(m),ut/2,1),O=v.length/3;v.push(h[x-1].x,h[x-1].y,h[x-1].z),b.push(f[x-1].x,f[x-1].y,f[x-1].z),S.push(I(m),0);for(let G=0;G<y;G++)A.push(O,D+G,D+G+1)}let $=new tt;return $.setAttribute("position",new He(v,3)),$.setAttribute("normal",new He(b,3)),$.setAttribute("uv",new He(S,2)),$.setIndex(A),$}function yg(s,e,{segmente:t=8,aufloesung:n=.25,kappen:i="rund",geschlossen:r=!1}={}){let a=new is(s,r,"centripetal"),o=Math.max(8,Math.ceil(a.getLength()/n)),l=a.getSpacedPoints(o);return r&&l.pop(),ni(l,{radius:e,segmente:t,kappen:i,geschlossen:r})}function Rn(s){let e=s.filter(Boolean).map(n=>{let i=n;if(!i.index){let r=i.attributes.position.count,a=new Array(r);for(let o=0;o<r;o++)a[o]=o;i.setIndex(a)}i.attributes.uv||i.setAttribute("uv",new He(new Float32Array(i.attributes.position.count*2),2));for(let r of Object.keys(i.attributes))["position","normal","uv"].includes(r)||i.deleteAttribute(r);return i.morphAttributes={},i});if(e.length===1)return e[0];let t=ig(e,!1);for(let n of e)n.dispose();return t}function k1(s,e,t,n){let i=s.attributes.position,r=s.attributes.normal;for(let a=0;a<i.count;a++)i.setXYZ(a,i.getX(a)*e,i.getY(a)*t,i.getZ(a)*n),r&&(An.set(r.getX(a)/e,r.getY(a)/t,r.getZ(a)/n).normalize(),r.setXYZ(a,An.x,An.y,An.z));return i.needsUpdate=!0,r&&(r.needsUpdate=!0),s}function Mg(s,e=48){let t=s.map(([i,r])=>new re(Math.max(i,0),r)),n=new Ar(t,e);return n.rotateX(ut/2),n}function Oi(s,{mitte:e=new re,hoehe:t=1,rueckHoehe:n=.4,ringe:i=12,form:r=.5}={}){let a=s.length,o=[],l=[],c=i,h=_=>Math.sin(_/c*(ut/2)),d=_=>Math.pow(Math.max(0,1-_*_),r);o.push(e.x,e.y,t);let u=[];for(let _=1;_<=c;_++){let y=h(_);u.push(o.length/3);for(let v=0;v<a;v++){let b=s[v];o.push(e.x+(b.x-e.x)*y,e.y+(b.y-e.y)*y,t*d(y))}}let f=[];for(let _=c-1;_>=1;_--){let y=h(_);f.push(o.length/3);for(let v=0;v<a;v++){let b=s[v];o.push(e.x+(b.x-e.x)*y,e.y+(b.y-e.y)*y,-n*d(y))}}let p=o.length/3;o.push(e.x,e.y,-n);for(let _=0;_<a;_++)l.push(0,u[0]+_,u[0]+(_+1)%a);let x=(_,y)=>{for(let v=0;v<a;v++){let b=(v+1)%a;l.push(_+v,y+v,y+b,_+v,y+b,_+b)}};for(let _=0;_<c-1;_++)x(u[_],u[_+1]);let g=u[c-1];for(let _ of f)x(g,_),g=_;for(let _=0;_<a;_++)l.push(p,g+(_+1)%a,g+_);let m=new tt;if(m.setAttribute("position",new He(o,3)),m.setIndex(l),m.computeVertexNormals(),m.attributes.normal.getZ(0)<0){let _=m.index.array;for(let y=0;y<_.length;y+=3){let v=_[y+1];_[y+1]=_[y+2],_[y+2]=v}m.index.needsUpdate=!0,m.computeVertexNormals()}return m}function bg({radius:s,vorn:e,hinten:t,ringe:n=30,randDichte:i=1.4}){let r=n,a=u=>1-Math.pow(1-u/r,i),o=[[[0,0,0]]];for(let u=1;u<=r;u++){let f=6*u,p=a(u),x=[];for(let g=0;g<f;g++){let m=g/f*Zt;x.push([Math.cos(m)*p*s,Math.sin(m)*p*s,p])}o.push(x)}let l=[],c=[];for(let u of[1,-1]){let f=[];for(let p of o){f.push(l.length/3);for(let[x,g,m]of p){let _=u>0?e(x,g,m):-t(x,g,m);l.push(x,g,_)}}for(let p=0;p<r;p++){let x=o[p].length,g=o[p+1].length,m=S=>f[p]+S%x,_=S=>f[p+1]+S%g,y=(S,A,M)=>u>0?c.push(S,A,M):c.push(S,M,A);if(x===1){for(let S=0;S<g;S++)y(m(0),_(S),_(S+1));continue}let v=0,b=0;for(;v<x||b<g;){let S=(v+1)/x,A=(b+1)/g;b<g&&(A<=S||v>=x)?(y(m(v),_(b),_(b+1)),b++):(y(m(v),_(b),m(v+1)),v++)}}}let h=new tt;h.setAttribute("position",new He(l,3)),h.setIndex(c);let d=Tc(h,1e-5);return h.dispose(),d.computeVertexNormals(),d}var Ic={anker:{name:"Ankerkette",laenge:1.42,draht:.24,exponent:2.4,flach:.92,abwechselnd:!0},erbs:{name:"Erbskette",laenge:1.16,draht:.27,exponent:2,flach:.74,abwechselnd:!0},panzer:{name:"Panzerkette",laenge:1.55,draht:.31,exponent:2.3,flach:1,verdrillt:!0,abflachung:.62,schnitt:.86},figaro:{name:"Figarokette",laenge:1.45,draht:.29,exponent:2.3,flach:1,verdrillt:!0,abflachung:.6,schnitt:.86,langLaenge:2.9},paperclip:{name:"Paperclip",laenge:2.9,draht:.2,exponent:5,flach:.78,abwechselnd:!0},kugel:{name:"Kugelkette"},schlange:{name:"Schlangenkette"},seil:{name:"Kordelkette"}};function Bd(s,e,{pfadSeg:t=16,radSeg:n=6,laengeFaktor:i=null}={}){let r=Ic[s]||Ic.anker,a=r.draht*e,o=(i||r.laenge)*e,l=o/2-a/2,c=e/2-a/2,h=r.exponent,d=[];for(let p=0;p<256;p++){let x=p/256*Zt,g=Math.cos(x),m=Math.sin(x);d.push(new T(c*Math.sign(g)*Math.pow(Math.abs(g),2/h),l*Math.sign(m)*Math.pow(Math.abs(m),2/h),0))}let u=vg(d,t,!0),f=ni(u,{radius:a/2,ellipse:[r.flach,1],segmente:n,geschlossen:!0,normalen:u.map(()=>new T(0,0,1))});if(f.deleteAttribute("uv"),r.verdrillt){let p=f.attributes.position,x=f.attributes.normal,g=ut/4,m=0;for(let y=0;y<p.count;y++){let v=p.getY(y),b=g*Qe.clamp(v/(l+a/2),-1,1),S=Math.cos(b),A=Math.sin(b),M=p.getX(y),w=p.getZ(y),R=x.getX(y),k=x.getZ(y),N=M*S+w*A,L=(-M*A+w*S)*r.abflachung;p.setXYZ(y,N,v,L),An.set(R*S+k*A,x.getY(y),(-R*A+k*S)/r.abflachung).normalize(),x.setXYZ(y,An.x,An.y,An.z),m=Math.max(m,Math.abs(L))}let _=m*r.schnitt;for(let y=0;y<p.count;y++){let v=p.getZ(y);Math.abs(v)>=_&&(p.setZ(y,Math.sign(v)*_),x.setXYZ(y,0,0,Math.sign(v)))}}return f.computeBoundingSphere(),{geometrie:f,innen:o-2*a,aussen:o,draht:a}}function On(s,{typ:e="anker",staerkeMm:t=1.2,s0:n=0,s1:i=null,material:r,res:a,saat:o=1,qualitaet:l=1}){let c=new De;c.name=`kette-${e}`,i===null&&(i=n+s.laenge);let h=i-n,d=s.geschlossen&&Math.abs(h-s.laenge)<1e-6,u=t,f=eo(o);if(e==="kugel")return I1(s,n,i,u,r,a,c);if(e==="schlange")return P1(s,n,i,u,a,c,r);if(e==="seil")return L1(s,n,i,u,r,a,c,l);let p=Ic[e]||Ic.anker,x=h/((p.laenge-2*p.draht)*u),g=9e4*l,m=18,_=7;for(;x*m*_*2>g&&m>10;)m-=2,_=Math.max(5,_-1);let y=[];if(e==="figaro"){let O=Bd("figaro",u,{pfadSeg:m,radSeg:_}),G=Bd("figaro",u,{pfadSeg:m+6,radSeg:_,laengeFaktor:p.langLaenge});y.push({geo:a.eigen(O.geometrie),innen:O.innen},{geo:a.eigen(G.geometrie),innen:G.innen})}else{let O=Bd(e,u,{pfadSeg:m,radSeg:_});y.push({geo:a.eigen(O.geometrie),innen:O.innen})}let v=e==="figaro"?[0,0,0,1]:[0],b=v.reduce((O,G)=>O+y[G].innen,0),S=Math.max(2,Math.round(h/b*v.length));d&&p.abwechselnd&&S%2&&S++;let A=0;for(let O=0;O<S;O++)A+=y[v[O%v.length]].innen;let M=h/A,w=y.map(()=>[]),R=new T,k=new T,N=new T,L=new T,I=new T,z=new T,U=new T,H=new T,$=n,D=p.verdrillt?0:ut/4;for(let O=0;O<S;O++){let G=v[O%v.length],ie=y[G].innen*M;s.punkt($,R),s.punkt($+ie,k),N.addVectors(R,k).multiplyScalar(.5),L.subVectors(k,R).normalize(),s.normale($+ie/2,I),I.addScaledVector(L,-I.dot(L)).normalize(),z.crossVectors(L,I);let se=D+(p.abwechselnd&&O%2?ut/2:0)+(f()-.5)*(p.verdrillt?.08:.22);H.copy(I).multiplyScalar(Math.cos(se)).addScaledVector(z,Math.sin(se)),U.crossVectors(L,H);let ye=new _e().makeBasis(U,L,H).setPosition(N);w[G].push(ye),$+=ie}return y.forEach((O,G)=>{if(!w[G].length)return;let ie=new Wt(O.geo,r,w[G].length);w[G].forEach((se,ye)=>ie.setMatrixAt(ye,se)),ie.instanceMatrix.needsUpdate=!0,ie.computeBoundingSphere(),ie.castShadow=!0,ie.name="glieder",c.add(ie)}),c.userData.gliederAnzahl=S,c}function I1(s,e,t,n,i,r,a){let o=n*1.32,l=Math.max(2,Math.round((t-e)/o)),c=(t-e)/l,h=r.eigen(Bn(n/2,3)),d=r.eigen(new pn(n*.13,n*.13,c,6,1,!0)),u=new Wt(h,i,l),f=new Wt(d,i,l),p=new T,x=new T,g=new T,m=new $e,_=new T(1,1,1);for(let y=0;y<l;y++){let v=e+c*(y+.5);s.punkt(v,p),u.setMatrixAt(y,pg.compose(p,m.identity(),_)),s.punkt(v+c*.5,x),s.tangente(v+c*.5,g),m.setFromUnitVectors(new T(0,1,0),g),f.setMatrixAt(y,pg.compose(x,m,_))}u.name="glieder",f.name="stege";for(let y of[u,f])y.instanceMatrix.needsUpdate=!0,y.computeBoundingSphere(),y.castShadow=!0,a.add(y);return a}function P1(s,e,t,n,i,r,a){let{punkte:o,normalen:l}=s.abtasten(e,t,Math.max(.25,n*.35)),c=i.eigen(ni(o,{radius:n/2,segmente:12,kappen:"rund",normalen:l,uvLaenge:n*.62,uvUmfang:4})),h=a&&a.userData&&a.userData.metallName,d=new Xe(c,h?Ft(i,h,"schlange"):a);return d.castShadow=!0,d.name="schlange",r.add(d),r}function L1(s,e,t,n,i,r,a,o){let c=n*2.3,h=n*.29,d=n*.23,u=Math.max(.12,c/(o>=1?12:9)),{punkte:f,normalen:p}=s.abtasten(e,t,u),x=Hd(f,!1),g=[];for(let _=0;_<3;_++){let y=[],v=0;for(let S=0;S<f.length;S++){S&&(v+=f[S].distanceTo(f[S-1]));let A=v/c*Zt+_/3*Zt,M=p[S],w=An.crossVectors(x[S],M);y.push(f[S].clone().addScaledVector(M,Math.cos(A)*d).addScaledVector(w,Math.sin(A)*d))}let b=ni(y,{radius:(S,A)=>h*(.9+.1*Math.abs(Math.cos(A*(f.length*u)/(c/3)*ut))),segmente:6,kappen:"rund"});b.deleteAttribute("uv"),g.push(b)}let m=new Xe(r.eigen(Rn(g)),i);return m.castShadow=!0,m.name="kordel",a.add(m),a}function Bn(s,e=3){let t=new Tr(s,e);t.deleteAttribute("uv"),t.deleteAttribute("normal");let n=Tc(t);return t.dispose(),n.computeVertexNormals(),n}function to({durchmesser:s=6,form:e="rund",saat:t=1,detail:n=null}){let i=n??Qe.clamp(Math.round(s*1.15),5,14),r=new Tr(1,i);r.deleteAttribute("uv"),r.deleteAttribute("normal");let a=Tc(r);r.dispose();let o=eo(t*7.31+3),l=mg(o,{wellen:7,freqMin:.35,freqMax:.9}),c=mg(o,{wellen:9,freqMin:1,freqMax:1.8}),h=1+(o()-.5)*.05,d=1+(o()-.5)*.06,u=1+(o()-.5)*.05,f=1.12+o()*.22,p=a.attributes.position,x=s/2;for(let g=0;g<p.count;g++){let m=p.getX(g),_=p.getY(g),y=p.getZ(g),v;switch(e){case"barock":{v=1+.085*l(m,_,y)+.035*c(m,_,y),_*=f;break}case"tropfen":{v=1+.018*l(m,_,y)+.006*c(m,_,y);let b=Math.max(0,_),S=1-.3*Math.pow(b,1.6);m*=S,y*=S,_=_*1.24+.06*(1-_*_);break}case"button":{v=1+.02*l(m,_,y)+.006*c(m,_,y),_=_>0?_*.8:_*.52;break}case"reis":{v=1+.03*l(m,_,y)+.01*c(m,_,y),_*=1.5;break}default:v=1+.02*l(m,_,y)+.006*c(m,_,y),m*=h,_*=d,y*=u}p.setXYZ(g,m*v*x,_*v*x,y*v*x)}return a.computeVertexNormals(),a.computeBoundingBox(),a.computeBoundingSphere(),a}function Bi(s){return{barock:1.25,tropfen:1.3,button:.66,reis:1.5}[s]||1}function Gr(s,{durchmesser:e,form:t="rund",farbe:n="weiss",res:i,saat:r=1,formVarianten:a=3,detail:o=null}){let l=new De;l.name="perlen";let c=eo(r+11),h=[];for(let x=0;x<a;x++)h.push(i.geteilt(`perlgeo:${e.toFixed(2)}:${t}:${x}:${o}`,()=>to({durchmesser:e,form:t,saat:x+1,detail:o})));let d=new Map,u=new Se,f=new T(1,1,1),p=new T;s.forEach(x=>{let g=Math.floor(c()*a),m=Math.floor(c()*Qa),_=g*10+m;d.has(_)||d.set(_,{gv:g,mv:m,eintraege:[]});let y=new $e().setFromAxisAngle(new T(0,1,0),c()*Zt),v=x.quaternion.clone().multiply(y),b=1+(c()-.5)*.06;p.copy(f).multiplyScalar(b),d.get(_).eintraege.push({m:new _e().compose(x.position,v,p.clone()),c:fg(c,u).clone()})});for(let x of d.values()){let g=hs(i,n,x.mv),m=new Wt(h[x.gv],g,x.eintraege.length);x.eintraege.forEach((_,y)=>{m.setMatrixAt(y,_.m),m.setColorAt(y,_.c)}),m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0),m.computeBoundingSphere(),m.castShadow=!0,m.name="perlen",l.add(m)}return l}function no({durchmesser:s,form:e="rund",farbe:t="weiss",res:n,saat:i=1,detail:r=null}){let a=n.geteilt(`perlgeo:${s.toFixed(2)}:${e}:s${i}:${r}`,()=>to({durchmesser:s,form:e,saat:i,detail:r})),o=new Xe(a,hs(n,t,i));return o.castShadow=!0,o.name="perle",o}function us({groesse:s=4,schliff:e="brillant"}={}){if(e==="smaragd")return N1(s);let t=s/2,n=.575*t,i=Qe.degToRad(34.5),r=Qe.degToRad(40.8),a=.03*s,o=(t-n)*Math.tan(i),l=t*Math.tan(r),c=Math.cos(ut/8),h=n*c+.52*(t-n*c),d=(t-h*c)*Math.tan(i),u=.24*t,f=-(t-u*c)*Math.tan(r),p=a/2,x=(L,I,z)=>new T(L*Math.cos(I),L*Math.sin(I),z),g=[],m=[],_=[],y=[],v=[],b=[],S=[];for(let L=0;L<8;L++){let I=L*ut/4,z=I+ut/8;g.push(x(n,I,p+o)),m.push(x(h,z,p+d)),_.push(x(t,I,p)),y.push(x(t,z,p)),v.push(x(t,I,-p)),b.push(x(t,z,-p)),S.push(x(u,z,-p+f))}let A=new T(0,0,p+o),M=new T(0,0,-p-l),w=[],R=(L,I,z)=>w.push([L,I,z]);for(let L=0;L<8;L++){let I=(L+1)%8,z=(L+7)%8;R(A,g[L],g[I]),R(g[L],g[I],m[L]),R(g[L],m[z],_[L]),R(g[L],_[L],m[L]),R(m[L],_[L],y[L]),R(m[L],y[L],_[I]),R(_[L],v[L],y[L]),R(y[L],v[L],b[L]),R(y[L],b[L],_[I]),R(_[I],b[L],v[I]),R(v[L],b[L],S[L]),R(b[L],v[I],S[L]),R(v[L],S[L],M),R(v[L],M,S[z])}let k=t,N=t;if(e==="oval"||e==="tropfen"){N=t*1.38;let I=new Set;w.forEach(z=>z.forEach(U=>I.add(U)));for(let z of I)if(z.y*=1.38,e==="tropfen"){let U=Qe.clamp(z.y/N,-1,1);z.x*=1-.42*Math.pow(Math.max(0,U),1.35),z.y+=.08*t*(1-U*U)}}return{geometrie:Sg(w),rx:k,ry:N,krone:o+p,pavillon:l+p,rundiste:a}}function N1(s){let e=s/2,t=e*1.4,n=.28,i=s*.14,r=s*.42,a=s*.03,o=a/2,l=(p,x,g)=>{let m=n*Math.min(p,x);return[[p-m,x],[-p+m,x],[-p,x-m],[-p,-x+m],[-p+m,-x],[p-m,-x],[p,-x+m],[p,x-m]].map(([_,y])=>new T(_,y,g))},c=[l(e*.7,t*.78,o+i),l(e*.8,t*.86,o+i*.68),l(e*.9,t*.93,o+i*.34),l(e,t,o),l(e,t,-o),l(e*.72,t*.8,-o-r*.36),l(e*.42,t*.58,-o-r*.72),l(e*.06,t*.32,-o-r)],h=[],d=new T(0,0,o+i);for(let p=0;p<8;p++)h.push([d,c[0][p],c[0][(p+1)%8]]);for(let p=0;p<c.length-1;p++)for(let x=0;x<8;x++){let g=(x+1)%8;h.push([c[p][x],c[p+1][x],c[p+1][g]],[c[p][x],c[p+1][g],c[p][g]])}let u=new T(0,0,-o-r),f=c[c.length-1];for(let p=0;p<8;p++)h.push([u,f[(p+1)%8],f[p]]);return{geometrie:Sg(h),rx:e,ry:t,krone:i+o,pavillon:r+o,rundiste:a}}function Sg(s){let e=[],t=new T,n=0;s.forEach(c=>c.forEach(h=>{t.add(h),n++})),t.multiplyScalar(1/n);let i=new T,r=new T,a=new T,o=new T;for(let[c,h,d]of s)i.subVectors(h,c),r.subVectors(d,c),a.crossVectors(i,r),!(a.lengthSq()<1e-14)&&(o.addVectors(c,h).add(d).multiplyScalar(1/3).sub(t),a.dot(o)>=0?e.push(c.x,c.y,c.z,h.x,h.y,h.z,d.x,d.y,d.z):e.push(c.x,c.y,c.z,d.x,d.y,d.z,h.x,h.y,h.z));let l=new tt;return l.setAttribute("position",new He(e,3)),l.computeVertexNormals(),l}function Wr({stein:s,anzahl:e=4,winkel0:t=ut/4,draht:n=null,tiefe:i=1,leicht:r=!1}){let{rx:a,ry:o,krone:l,pavillon:c}=s,h=Math.max(a,o),d=n??Math.max(.42,h*.17),u=-c*i-d*.6,f=[];for(let g=0;g<e;g++){let m=t+g/e*Zt,_=Math.cos(m)*a,y=Math.sin(m)*o,v=Math.hypot(_,y),b=_/v,S=y/v,A=(R,k)=>new T(b*R,S*R,k),M=v+d*.55,w=[A(v*.34,u+d*.2),A(v*.62,-c*.62),A(M,-c*.16),A(M,l*.22),A(v*.9,l*.46+d*.15)];f.push(z1(w,d/2,.82,r?5:8,r?.3:.12))}let p=r?20:48,x=r?5:8;return f.push(gg(a*.74,o*.74,-c*.5,d*.36,p,x)),r||f.push(gg(a*.36,o*.36,u+d*.25,d*.42,p,x)),{geometrie:Rn(f),basisZ:u,draht:d}}function z1(s,e,t,n,i=.12){let r=new is(s,!1,"centripetal"),a=Math.max(8,Math.ceil(r.getLength()/i)),o=r.getSpacedPoints(a-1);return ni(o,{radius:(l,c)=>e*(1-(1-t)*c),segmente:n,kappen:"rund"})}function gg(s,e,t,n,i=48,r=8){let a=[];for(let o=0;o<i;o++){let l=o/i*Zt;a.push(new T(Math.cos(l)*s,Math.sin(l)*e,t))}return ni(a,{radius:n,segmente:r,geschlossen:!0,normalen:a.map(()=>new T(0,0,1))})}function io({stein:s,wand:e=null,boden:t=!0}){let{rx:n,ry:i,krone:r,pavillon:a}=s,o=n,l=e??Math.max(.32,o*.15),c=r*.32,h=-a*.6,d=o*.07,u=[];t?u.push([0,h],[o*.55,h]):u.push([o*.62,h+l*.2],[o*.75,h]),u.push([o*.86,h+l*.05],[o+l*.72,h+l*.32],[o+l,h+l*.9],[o+l,c-l*.45],[o+l*.93,c-l*.15],[o+l*.72,c],[o+l*.3,c+l*.02],[o-d*.3,c-l*.12],[o-d,c-l*.42],[o*.995,0],[o*.97,-a*.3],[o*.7,h+l*.75]),t&&u.push([0,h+l*.75]);let f=Mg(u,64);return Math.abs(i-n)>1e-6&&k1(f,1,i/n,1),{geometrie:f,basisZ:h,aussenRadius:o+l}}function Pc(s){let e=s*.24,t=s*.12,n=[[0,-t*.35],[e*.45,-t*.35],[e*.85,-t*.05],[e*1,t*.45],[e*.95,t*.62],[e*.6,t*.42],[0,t*.3]];return{geometrie:Mg(n,40),hoehe:t}}function Eg(s,{blaetter:e=6}={}){let t=s*.3,n=s*.2,i=[[0,n*.6],[t*.4,n*.55],[t*.7,n*.32],[t*.9,n*.02],[t*.98,n*.08],[t*.82,n*.48],[t*.55,n*.82],[t*.25,n*1],[0,n*1.05]],r=new Ar(i.map(([o,l])=>new re(o,l)),48),a=r.attributes.position;for(let o=0;o<a.count;o++){let l=a.getX(o),c=a.getY(o),h=a.getZ(o),d=Math.atan2(h,l),u=Math.hypot(l,h)/t,f=.5+.5*Math.cos(d*e);a.setY(o,c-(1-f)*n*.35*Math.pow(u,3))}return r.computeVertexNormals(),{geometrie:r,hoehe:n}}function so(s,e,{luecke:t=.06,segmente:n=28,radSeg:i=8}={}){let r=new mn(s,e,i,n,Zt-t);return r.rotateZ(ut+t/2),r}function ro(s=5.5){let e=s*.11,t=s/2-e,n=s*.17,i=e*.75,r=n+i+t+e*.6,a=new mn(t,e,10,40);a.translate(0,r,0);let o=new mn(n,i,8,20),l=Qe.degToRad(35),c=new pn(e*.75,e*.85,e*2.2,10);c.rotateZ(-l),c.translate(Math.sin(l)*(t+e*1.3),r+Math.cos(l)*(t+e*1.3),0);let h=new pn(i*1.2,i*1.2,r-t-n+e,10);return h.translate(0,(n+r-t)/2,0),{geometrie:Rn([a,o,c,h]),laenge:r+t+e}}function wg(s=9){let e=s,t=e*.52,n=e*.085,i=e*.035,r=n+i*.5,a=[];for(let d=0;d<96;d++){let u=d/96*Zt,f=Math.sin(u),x=(1-Math.cos(u))/2,g=t*.5*Math.pow(Math.sin(ut*Math.min(1,x*1.02)),.75)*(1-.35*x),m=f*g-.12*t*x*x;a.push(new T(m,r+x*e*.92,0))}let o=(d,u)=>{let f=u*Zt;return e*(.06+.035*Math.max(0,-Math.sin(f)))},l=ni(vg(a,64,!0),{radius:o,ellipse:[.75,1],segmente:10,geschlossen:!0,normalen:Array.from({length:64},()=>new T(0,0,1))}),c=new mn(n,i,8,20);c.rotateY(ut/2);let h=new zn(e*.05,e*.16,e*.09,1,1,1);return h.translate(t*.38,r+e*.3,0),h.deleteAttribute("uv"),{geometrie:Rn([l,c,h]),laenge:r+e*.95}}function Tg(s=6){let e=s*.55,t=s*.08,n=[];for(let a=0;a<48;a++){let o=a/48*Zt;n.push(new re(Math.cos(o)*e/2,Math.sin(o)*s/2))}let i=Oi(n,{hoehe:t*.6,rueckHoehe:t*.6,ringe:6,form:.15});i.translate(0,-s/2-s*.12,0);let r=new mn(s*.12,t*.55,8,16);return{geometrie:Rn([i,r]),laenge:s*1.12}}function D1(s="halbrund",e=28){let t=[];if(s==="rund"){for(let a=0;a<e;a++){let o=a/e*Zt;t.push([.5+.5*Math.cos(o),.5*Math.sin(o)])}return t}if(s==="flach"){let o=[[.808,.18],[.192,.18],[.192,-.18],[.808,-.18]],l=[[0,ut/2],[ut/2,ut],[ut,1.5*ut],[1.5*ut,Zt]],c=Math.max(3,Math.round(e/4));for(let h=0;h<4;h++)for(let d=0;d<c;d++){let u=l[h][0]+(l[h][1]-l[h][0])*(d/c);t.push([o[h][0]+Math.cos(u)*.32*.6,o[h][1]+Math.sin(u)*.32])}return t}let n=.1,i=Math.round(e*.65);for(let a=0;a<=i;a++){let o=-ut/2+a/i*ut,l=Math.cos(o),c=Math.sin(o);t.push([n+(1-n)*Math.pow(l,.85),.5*Math.sign(c)*Math.pow(Math.abs(c),.9)])}let r=e-i-1;for(let a=1;a<=r;a++){let l=.5-a/(r+1);t.push([n*4*l*l,l*.98])}return t}function vi({radiusX:s=8.5,radiusZ:e=null,breite:t=2,dicke:n=1.4,profil:i="halbrund",segmente:r=128,profilSegmente:a=28,bogen:o=null,yVersatz:l=null,flachOben:c=null}){let h=e??s,d=D1(i,a),u=d.length,f=!!o,p=f?o[0]:0,x=f?o[1]:Zt,g=f?r+1:r,m=(w,R)=>typeof w=="function"?w(R):w,_=[],y=[];for(let w=0;w<g;w++){let R=p+(x-p)*(w/r);y.push(R);let k=Math.sin(R),N=Math.cos(R),L=k/s,I=N/h,z=Math.hypot(L,I),U=L/z,H=I/z,$=k*s,D=N*h,O=m(t,R),G=m(n,R),ie=l?l(R):0;for(let se=0;se<u;se++){let[ye,Te]=d[se],Oe=$+U*ye*G,Y=D+H*ye*G;c!==null&&Y>c&&(Y=c),_.push(Oe,Te*O+ie,Y)}}let v=[],b=f?g-1:g;for(let w=0;w<b;w++){let R=(w+1)%g;for(let k=0;k<u;k++){let N=(k+1)%u,L=w*u+k,I=R*u+k,z=R*u+N,U=w*u+N;v.push(L,U,I,I,U,z)}}if(f)for(let w of[0,g-1]){let R=y[w],k=w===0?-1:1,N=Math.cos(R)*k,L=-Math.sin(R)*k,I=m(t,R),z=m(n,R),U=w*u,H=0,$=0,D=0;for(let se=0;se<u;se++)H+=_[(U+se)*3],$+=_[(U+se)*3+1],D+=_[(U+se)*3+2];H/=u,$/=u,D/=u;let O=4,G=U,ie=Math.min(I,z)*.5;for(let se=1;se<=O;se++){let ye=se/O*(ut/2),Te=Math.cos(ye),Oe=_.length/3;for(let Y=0;Y<u;Y++){let Q=_[(U+Y)*3],pe=_[(U+Y)*3+1],Re=_[(U+Y)*3+2];_.push(H+(Q-H)*Te+N*Math.sin(ye)*ie,$+(pe-$)*Te,D+(Re-D)*Te+L*Math.sin(ye)*ie)}for(let Y=0;Y<u;Y++){let Q=(Y+1)%u,pe=G+Y,Re=Oe+Y,xe=Oe+Q,Ue=G+Q;w===0?v.push(pe,Re,Ue,Re,xe,Ue):v.push(pe,Ue,Re,Re,Ue,xe)}G=Oe}}let S=new tt;if(S.setAttribute("position",new He(_,3)),S.setIndex(v),S.computeVertexNormals(),c!==null){let w=S.attributes.position,R=S.attributes.normal;for(let k=0;k<w.count;k++)w.getZ(k)>=c-1e-6&&R.getZ(k)>.5&&R.setXYZ(k,0,0,1)}let A=0,M=S.attributes.position;for(let w=0;w<M.count;w++)M.getZ(w)>M.getZ(A)&&(A=w);if(S.attributes.normal.getZ(A)<0){let w=S.index.array;for(let R=0;R<w.length;R+=3){let k=w[R+1];w[R+1]=w[R+2],w[R+2]=k}S.index.needsUpdate=!0,S.computeVertexNormals()}return S}function Ag(s,e){return ut*(3*(s+e)-Math.sqrt((3*s+e)*(s+3*e)))}function et(s,e,t=""){let n=new Xe(s,e);return n.castShadow=!0,n.name=t,n}var ds=Math.PI;function Vd(s,e){return s==="rund"?e:s==="flach"?Qe.clamp(.42*e+.3,1,2.2):Qe.clamp(.5*e+.25,1,2.4)}function Rg(s,e){let t=s.ring,n=Ft(e,s.metall),i=new De;i.name="ring";let r=t.innenDurchmesserMm/2,a=t.schieneMm,o=Vd(t.profil,a),l=s._saat||1;switch(t.typ){case"solitaer":d();break;case"perle":u();break;case"offen":f();break;case"siegel":p();break;case"kette":x();break;default:c()}return{gruppe:i,masse:{innenRadiusMm:r},pendel:[]};function c(){i.add(et(e.eigen(vi({radiusX:r,breite:a,dicke:o,profil:t.profil})),n,"schiene"))}function h(g){return m=>{let _=.5+.5*Math.cos(m);return a*(1-(1-g)*_*_)}}function d(){let g=s.stein,m=us({groesse:g.groesseMm,schliff:g.schliff}),_=t.krappen===6?6:4,y=Wr({stein:m,anzahl:_,winkel0:_===4?ds/4:ds/2}),v=o*.9;i.add(et(e.eigen(vi({radiusX:r,breite:h(.78),dicke:A=>o-(o-v)*(.5+.5*Math.cos(A)),profil:t.profil})),n,"schiene"));let b=new De;b.name="kopf";let S=r+v*.75-y.basisZ;b.position.z=S,b.add(et(e.eigen(m.geometrie),_i(e,g.art,g.farbe),"stein")),b.add(et(e.eigen(y.geometrie),n,"krappen")),i.add(b)}function u(){let g=s.perlen,m=g.groesseMm;i.add(et(e.eigen(vi({radiusX:r,breite:h(.8),dicke:o,profil:t.profil})),n,"schiene"));let _=Pc(m),y=r+o*.92,v=et(e.eigen(_.geometrie),n,"schale");v.position.z=y,i.add(v);let b=no({durchmesser:m,form:g.form,farbe:g.farbe,res:e,saat:l,detail:14});b.rotation.x=ds/2,b.position.z=y+_.hoehe*.3+m*Bi(g.form)/2*.98,i.add(b)}function f(){let g=s.perlen,m=g.groesseMm,_=Math.max(1,Math.min(2,Math.round(g.anzahl||2))),y=Qe.degToRad(26),v=m*.36,b=y,S=2*ds-y,A=R=>v*((R-ds)/(ds-y));i.add(et(e.eigen(vi({radiusX:r,breite:a,dicke:o,profil:"rund",bogen:[b,S],yVersatz:A})),n,"schiene"));let M=r+o/2;[{th:b,richtung:-1,y:-v},{th:S,richtung:1,y:v}].forEach((R,k)=>{let N=new T(Math.sin(R.th)*M,R.y,Math.cos(R.th)*M),L=new T(Math.cos(R.th)*M,v/(ds-y),-Math.sin(R.th)*M).normalize().multiplyScalar(R.richtung),I=k===1||_===2,z=I?k===0?m*.82:m:Math.max(2.4,a*1.5),U=I?z*Bi(g.form):z,H=new T(Math.sin(R.th),0,Math.cos(R.th)),$=N.clone().addScaledVector(L,U*.22),D=Math.hypot($.x,$.z);$.addScaledVector(H,Math.max(0,r+.25+z/2-D));let O;I?(O=no({durchmesser:z,form:g.form,farbe:g.farbe,res:e,saat:l+k,detail:13}),O.quaternion.setFromUnitVectors(new T(0,1,0),$.clone().sub(N).normalize())):O=et(e.eigen(Bn(z/2,3)),n,"kugel"),O.position.copy($),i.add(O)})}function p(){let g=Math.max(a*2.6,8.5),m=Math.max(o*1.9,2.8),_=M=>{let w=Math.atan2(Math.sin(M),Math.cos(M)),R=Math.max(0,Math.cos(w*1.45));return R*R},y=M=>a+(g-a)*_(M),v=M=>o+(m-o)*_(M),b=g*.46,S=Math.asin(Math.min(.9,b/(r+m))),A=(r+v(S))*Math.cos(S);i.add(et(e.eigen(vi({radiusX:r,breite:y,dicke:v,profil:"flach",segmente:160,profilSegmente:32,flachOben:A})),n,"schiene"))}function x(){let g=Math.max(1.2,a),m=s.kette?.typ&&s.kette.typ!=="perlenstrang"?s.kette.typ:"anker",_=S=>{let A=[],M=[];for(let w=0;w<256;w++){let R=w/256*2*ds;A.push(new T(Math.sin(R)*S,0,Math.cos(R)*S)),M.push(new T(Math.sin(R),0,Math.cos(R)))}return new Mn(A,{geschlossen:!0,normalen:M})},y=r+g*.4,v=On(_(y),{typ:m,staerkeMm:g,material:n,res:new Vs,saat:l}),b=U1(v);v.traverse(S=>{S.isMesh&&S.geometry.dispose()}),i.add(On(_(y+(r-b)),{typ:m,staerkeMm:g,material:n,res:e,saat:l}))}}function U1(s){s.updateMatrixWorld(!0);let e=new T,t=new _e,n=new _e,i=1/0;return s.traverse(r=>{if(!r.isMesh)return;let a=r.geometry.attributes.position,o=r.isInstancedMesh?r.count:1;for(let l=0;l<o;l++){r.isInstancedMesh?(r.getMatrixAt(l,n),t.multiplyMatrices(r.matrixWorld,n)):t.copy(r.matrixWorld);for(let c=0;c<a.count;c++)e.fromBufferAttribute(a,c).applyMatrix4(t),i=Math.min(i,Math.hypot(e.x,e.z))}}),i}var yi=Math.PI,fs=Math.PI*2,kg=["perle","sonne","blume","mond","herz","muenze","tropfen","stein","stern","muschel"];function Wd(s,{spec:e,groesseMm:t=12,res:n,saat:i=1}){let r=Ft(n,e.metall),a=t,o=[],l=Cg[s]||Cg.perle,c={G:a,spec:e,res:n,metall:r,teile:o,saat:i,aufhaengung:null};l(c);let h=new De;h.name=`motiv-${s}`;for(let x of o){let g=x.isObject3D?x:et(n.eigen(x.geo),x.material||r,s);h.add(g)}let d=new wt().setFromObject(h),u=(d.min.x+d.max.x)/2,f=(d.min.y+d.max.y)/2;for(let x of h.children)x.position.x-=u,x.position.y-=f;d.translate(new T(-u,-f,0));let p=c.aufhaengung?new re(c.aufhaengung.x-u,c.aufhaengung.y-f):new re(0,d.max.y);return{gruppe:h,hoehe:d.max.y-d.min.y,breite:d.max.x-d.min.x,dicke:d.max.z-d.min.z,rueckZ:d.min.z,obenY:d.max.y,untenY:d.min.y,aufhaengung:p}}function ps(s,{spec:e,groesseMm:t=12,kettenRadius:n=.6,res:i,saat:r=1}){let a=Ft(i,e.metall),o=Wd(s,{spec:e,groesseMm:t,res:i,saat:r}),l=new De;l.name=`anhaenger-${s}`;let c=t,h=Qe.clamp(.035*c+.12,.3,.5),d=Math.max(n+h+.4,.95),u=n+h-d,f=et(i.eigen(so(d,h,{luecke:.05,segmente:28})),a,"biegering");f.rotation.y=yi/2,f.position.y=u,l.add(f);let p=h*.95,x=Qe.clamp(.05*c+.45,.65,1.1),g=u-d+h+p-x,m=et(i.eigen(new mn(x,p,8,24)),a,"oese");m.position.y=g,l.add(m);let _=g-x+p*.6,y=s==="perle"?_-o.aufhaengung.y+p*.4:_-o.aufhaengung.y;o.gruppe.position.set(-o.aufhaengung.x,y,0),l.add(o.gruppe);let v=y+o.untenY,b=-(y+(o.obenY+o.untenY)/2);return{gruppe:l,hoeheMm:-v,breiteMm:o.breite,dickeMm:o.dicke,rueckZ:o.rueckZ,schwerpunktMm:Math.max(1,b)}}function F1(s,e){let t=[];for(let n=0;n<e;n++){let i=n/e*fs;t.push(new re(Math.cos(i)*s,Math.sin(i)*s))}return t}function O1({laenge:s,breite:e,vorn:t,hinten:n,nL:i=14,nW:r=8}){let a=[],o=[];for(let c of[1,-1]){let h=a.length/3,d=c>0?t:n;for(let u=0;u<=i;u++){let f=u/i,p=e(f);for(let x=0;x<=r;x++){let g=-1+2*x/r,m=c*d*Math.pow(Math.max(0,1-g*g),.55)*(1-.55*f);a.push(g*p,f*s,m)}}for(let u=0;u<i;u++)for(let f=0;f<r;f++){let p=h+u*(r+1)+f,x=p+r+1;c>0?o.push(p,p+1,x,p+1,x+1,x):o.push(p,x,p+1,p+1,x,x+1)}}let l=new tt;return l.setAttribute("position",new He(a,3)),l.setIndex(o),l.computeVertexNormals(),l}function B1(s){let e=[];for(let[n,i,r]of s)e.push(n.x,n.y,n.z,i.x,i.y,i.z,r.x,r.y,r.z);let t=new tt;return t.setAttribute("position",new He(e,3)),t.computeVertexNormals(),t}var Cg={perle({G:s,spec:e,res:t,metall:n,teile:i,saat:r}){let a=e.perlen||{},o=a.groesseMm||s*.7,l=a.form&&a.form!=="rund"?a.form:"tropfen",c=t.geteilt(`perlgeo:${o.toFixed(2)}:${l}:a${r}`,()=>to({durchmesser:o,form:l,saat:r+5,detail:14}));c.computeBoundingBox();let h=new Xe(c,hs(t,a.farbe||"weiss",r));h.castShadow=!0,h.name="perle";let d=Eg(o),u=d.hoehe;d.geometrie.translate(0,-1.05*u,0),h.position.y=-.42*u-c.boundingBox.max.y,i.push({geo:d.geometrie},h)},sonne({G:s,teile:e}){let t=s/2,n=.3*s,i=.06*s+.25,r=Oi(F1(n,72),{hoehe:i*.6,rueckHoehe:i*.35,ringe:12,form:.12}),a=new mn(n*1.02,i*.22,8,72);a.translate(0,0,i*.05);let o=12,l=[r,a];for(let c=0;c<o;c++){let h=yi/2+c/o*fs,d=c%2===0,u=d?t:t*.84,f=n*.86,p=fs/o*(d?.5:.42)*f,x=u-f,g=O1({laenge:x,breite:m=>p*(1-m)*(1-.12*Math.sin(yi*m))+.04,vorn:i*.42,hinten:i*.22});g.translate(0,f,0),g.rotateZ(h-yi/2),l.push(g)}e.push({geo:Rn(l)})},blume({G:s,spec:e,res:t,teile:n,saat:i}){let r=s/2,a=5,o=r*.98,l=s*.4;for(let f=0;f<a;f++){let p=[];for(let m=0;m<64;m++){let _=m/64*fs,y=.42+.58*Math.pow((1-Math.cos(_))/2,.8);p.push(new re(l/2*Math.sin(_)*y,o*.08+o*.92/2*(1-Math.cos(_))))}let x=Oi(p,{mitte:new re(0,o*.55),hoehe:s*.058,rueckHoehe:s*.028,ringe:10,form:.4}),g=x.attributes.position;for(let m=0;m<g.count;m++){let _=g.getY(m),y=g.getX(m),v=Qe.clamp(_/o,0,1),b=y/(l/2);g.setZ(m,g.getZ(m)+s*.05*b*b*Math.sin(yi*Math.min(1,v*1.1))+s*.06*v*v)}x.computeVertexNormals(),x.rotateZ(f/a*fs),n.push({geo:x,material:Ft(t,e.metall,"motiv")})}let c=e.perlen||{},h=Math.min(c.groesseMm||s*.36,s*.42),d=t.geteilt(`perlgeo:${h.toFixed(2)}:rund:b${i}`,()=>to({durchmesser:h,form:"rund",saat:i+9,detail:10})),u=new Xe(d,hs(t,c.farbe||"weiss",i+1));u.castShadow=!0,u.rotation.x=yi/2,u.position.z=s*.05+h*.3,u.name="perle",n.push(u)},mond(s){let{G:e,teile:t}=s,n=.33*e,i=.3*e,r=Qe.degToRad(42),a=Qe.degToRad(318),o=v=>i/2*(.05+.95*Math.pow(Math.sin(yi*v),.85)),l=[],c=[],h=90,d=0,u=0;for(let v=0;v<=h;v++){let b=v/h,S=r+(a-r)*b;l.push(new T(Math.cos(S)*n,Math.sin(S)*n,0)),c.push(new T(0,0,1));let A=o(b)**2;d+=Math.cos(S)*n*A,u+=A}let f=ni(l,{radius:(v,b)=>o(b),ellipse:[.5,1],segmente:14,kappen:"rund",normalen:c}),p=d/u,x=Qe.degToRad(100),g=(x-r)/(a-r),m=n+o(g)*.92,_=new re(Math.cos(x)*m,Math.sin(x)*m),y=yi/2-Math.atan2(_.y,_.x-p);f.rotateZ(y),s.aufhaengung=_.rotateAround(new re,y),t.push({geo:f})},herz(s){let{G:e,teile:t}=s,n=e/31,i=[];for(let a=0;a<128;a++){let o=a/128*fs,l=16*Math.pow(Math.sin(o),3),c=13*Math.cos(o)-5*Math.cos(2*o)-2*Math.cos(3*o)-Math.cos(4*o);i.push(new re(l*n,c*n))}Gd(i)<0&&i.reverse();let r=Oi(i,{mitte:new re(0,-1.5*n),hoehe:e*.2,rueckHoehe:e*.1,ringe:14,form:.55});s.aufhaengung=new re(0,5*n+e*.02),t.push({geo:r})},muenze({G:s,teile:e,saat:t}){let n=s/2,i=.075*s+.25,r=Math.min(i*.55,n*.12)/n,a=eo(t*3+17),o=[],l=1.25;for(let u=-n-l;u<=n+l;u+=l*.87)for(let f=-n-l;f<=n+l;f+=l){let p=Math.round(u/(l*.87))%2*l*.5;o.push([f+p+(a()-.5)*l*.6,u+(a()-.5)*l*.6,.6+a()*.6])}let c=(u,f,p)=>{let x=1e9,g=1;for(let _ of o){let y=(u-_[0])**2+(f-_[1])**2;y<x&&(x=y,g=_[2])}let m=Qe.smoothstep(1-r*1.3-p,0,.1);return Math.max(0,(1-x/(l*l*.5))*.07*g*m)},h=u=>{let f=(u-(1-r))/r;return f<=0?1:Math.sqrt(Math.max(0,1-f*f))},d=bg({radius:n,ringe:Math.max(24,Math.round(n/.17)),randDichte:1.35,vorn:(u,f,p)=>i/2*h(p)-c(u,f,p),hinten:(u,f,p)=>i/2*h(p)-c(-u*.93+.4,f*.97-.3,p)*.8});e.push({geo:d})},tropfen({G:s,teile:e}){let t=s,n=.62*s,i=[];for(let a=0;a<96;a++){let o=a/96*fs;i.push(new re(n/2*Math.sin(o)*Math.pow((1-Math.cos(o))/2,.75),t/2*Math.cos(o)))}Gd(i)<0&&i.reverse();let r=Oi(i,{mitte:new re(0,-.18*t),hoehe:n*.26,rueckHoehe:n*.16,ringe:14,form:.55});e.push({geo:r})},stein({G:s,spec:e,res:t,teile:n}){let i=e.stein||{},r=i.groesseMm||s*.6,a=us({groesse:r,schliff:i.schliff||"brillant"}),o=io({stein:a});n.push({geo:a.geometrie,material:_i(t,i.art||"zirkonia",i.farbe)},{geo:o.geometrie})},stern({G:s,teile:e}){let t=s/2,n=t*.46,i=s*.15,r=s*.05,a=.12,o=new T(0,0,i),l=new T(0,0,-r),c=[];for(let d=0;d<10;d++){let u=yi/2+d/10*fs,f=d%2?n:t;c.push([Math.cos(u)*f,Math.sin(u)*f])}let h=[];for(let d=0;d<10;d++){let[u,f]=c[d],[p,x]=c[(d+1)%10],g=new T(u,f,a),m=new T(p,x,a),_=new T(u,f,-a),y=new T(p,x,-a);h.push([o,g,m],[l,y,_],[g,_,y],[g,y,m])}e.push({geo:B1(h)})},muschel({G:s,teile:e}){let t=.78*s,n=13,i=Qe.degToRad(46),r=n*yi/i/2,a=[];a.push(new re(-.2*s,.02*s),new re(-.21*s,-.06*s),new re(-.12*s,-.13*s));let o=120;for(let d=0;d<=o;d++){let u=-i+2*i*d/o,f=t*(.985+.015*Math.cos(u*r*2));a.push(new re(Math.sin(u)*f,-Math.cos(u)*f))}a.push(new re(.12*s,-.13*s),new re(.21*s,-.06*s),new re(.2*s,.02*s));let l=[];for(let d=0;d<a.length;d++){let u=a[d],f=a[(d+1)%a.length],p=Math.max(1,Math.ceil(u.distanceTo(f)/(s*.03)));for(let x=0;x<p;x++)l.push(u.clone().lerp(f,x/p))}Gd(l)<0&&l.reverse();let c=Oi(l,{mitte:new re(0,-.45*t),hoehe:s*.17,rueckHoehe:s*.05,ringe:16,form:.6}),h=c.attributes.position;for(let d=0;d<h.count;d++){let u=h.getX(d),f=h.getY(d),p=h.getZ(d);if(p<=0)continue;let x=Math.atan2(u,-f),g=Math.hypot(u,f)/t,m=.5+.5*Math.cos(x*r*2),_=Qe.smoothstep(g,.12,.65);h.setZ(d,p+s*.045*_*(m-.5)*Math.min(1,p/(s*.05)))}c.computeVertexNormals(),e.push({geo:c})}};function Gd(s){let e=0;for(let t=0;t<s.length;t++){let n=s[t],i=s[(t+1)%s.length];e+=n.x*i.y-i.x*n.y}return e/2}var on=Math.PI,H1=1.24;function Lc(s,e=H1){let t=s/Ag(e,1);return{a:t*e,b:t}}function Xd(s,e,t=360){let n=[],i=[];for(let r=0;r<t;r++){let a=on+r/t*2*on;n.push(new T(Math.sin(a)*s,0,Math.cos(a)*e)),i.push(new T(Math.sin(a)/s,0,Math.cos(a)/e).normalize())}return new Mn(n,{geschlossen:!0,normalen:i})}function V1(s,e,t,n){let i=s.punkte.map((o,l)=>{let c=0;for(let h of e){let d=Math.abs(s.s[l]-h);d=Math.min(d,s.laenge-d),d<n&&(c=Math.max(c,.5+.5*Math.cos(on*d/n)))}return o.clone().addScaledVector(s.normalen[l],t*c)}),r=new Mn(i,{geschlossen:!0,normalen:s.normalen}),a=o=>{let l=0;for(;l<s.punkte.length-1&&s.s[l+1]<=o;)l++;return l};return{pfad:r,stellen:e.map(o=>r.s[a(o)])}}function ms(s,e){let t=s.punkt(e),n=s.tangente(e),i=s.normale(e),r=new T().crossVectors(n,i);return{position:t,quaternion:new $e().setFromRotationMatrix(new _e().makeBasis(r,n,i))}}function G1(s,e,t){let n=new De;n.name=t;let i=s.punkt(e),r=s.tangente(e),a=s.normale(e),o=new T().crossVectors(a,r).normalize(),l=new T().crossVectors(o,a);return n.quaternion.setFromRotationMatrix(new _e().makeBasis(l,o,a)),n.position.copy(i),n}function Ig(s,e){let t=s.armband,n;switch(t.typ){case"perlen":n=q1(s,e);break;case"reif":n=$1(s,e);break;case"tennis":n=K1(s,e);break;default:n=X1(s,e)}let i=n.masse.innenRadienMm,r=W1(n.gruppe,i.x,i.z,n.pendel.map(a=>a.knoten));return n.masse.innenRadienMm={x:i.x*r,z:i.z*r},n}function W1(s,e,t,n){s.updateMatrixWorld(!0);let i=new Set;for(let c of n)c.traverse(h=>i.add(h));let r=new T,a=new _e,o=new _e,l=1/0;return s.traverse(c=>{if(!c.isMesh||i.has(c))return;let h=c.geometry.attributes.position,d=c.isInstancedMesh?c.count:1;for(let u=0;u<d;u++){c.isInstancedMesh?(c.getMatrixAt(u,o),a.multiplyMatrices(c.matrixWorld,o)):a.copy(c.matrixWorld);for(let f=0;f<h.count;f++)r.fromBufferAttribute(h,f).applyMatrix4(a),l=Math.min(l,Math.hypot(r.x/e,r.z/t))}}),Number.isFinite(l)?Math.min(l,1.05):1}function X1(s,e){let t=s.armband,n=s.kette,i=Ft(e,s.metall),r=new De;r.name="armband";let a=[],o=s._saat||1,l=n.staerkeMm,{a:c,b:h}=Lc(t.laengeCm*10),d=Xd(c,h),u=s.perlen,f=[];if(u.anordnung==="stationen"&&u.anzahl>0){let U=Math.round(u.anzahl);for(let $=0;$<U;$++)f.push(d.laenge/2+($-(U-1)/2)*u.abstandMm);let H=u.groesseMm/2-l/2;if(H>0){let $=V1(d,f,H,H*5+3);d=$.pfad,f=$.stellen}}let p=d.laenge,g=l>=2.2?wg(Qe.clamp(l*4.5,8,13)):ro(Qe.clamp(l*3.4+1.6,4.5,6.5)),m=Math.max(.3,l*.22),_=Math.max(l*.55+m,1),y=g.laenge+_*2,v=y/2,b=p-y/2,S=et(e.eigen(g.geometrie),i,"verschluss"),A=ms(d,v);S.position.copy(A.position),S.quaternion.copy(A.quaternion).multiply(new $e().setFromAxisAngle(new T(0,0,1),on)),r.add(S);let M=et(e.eigen(so(_,m)),i,"biegering"),w=ms(d,b+_*.3);M.position.copy(w.position),M.position.addScaledVector(d.normale(b+_*.3),Math.max(0,_+m-l/2)),M.quaternion.copy(w.quaternion).multiply(new $e().setFromAxisAngle(new T(0,1,0),on/2)),r.add(M);let R=[],k=v;for(let U of f)R.push([k,U-u.groesseMm*.42]),k=U+u.groesseMm*.42;R.push([k,b]),R.forEach(([U,H],$)=>{H-U>l&&r.add(On(d,{typ:n.typ==="perlenstrang"?"anker":n.typ,staerkeMm:l,s0:U,s1:H,material:i,res:e,saat:o+$}))}),f.length&&r.add(Gr(f.map(U=>ms(d,U)),{durchmesser:u.groesseMm,form:u.form,farbe:u.farbe,res:e,saat:o}));let N=[],L=s.anhaenger;if(L&&L.typ!=="keiner"&&N.push({typ:L.typ,groesse:L.groesseMm}),u.anordnung==="einzeln"&&u.anzahl>0)for(let U=0;U<Math.min(3,Math.round(u.anzahl));U++)N.push({typ:"perle",groesse:u.groesseMm});let I=7.5;N.forEach((U,H)=>{let $=(H-(N.length-1)/2)*I,D=G1(d,p/2+$,`charm-${U.typ}`),O=ps(U.typ,{spec:s,groesseMm:U.groesse,kettenRadius:l/2,res:e,saat:o+H});D.add(O.gruppe),r.add(D),a.push({knoten:D,laengeMm:O.schwerpunktMm,achse:"frei"})});let z=t.verlaengerungCm*10;if(z>3){let U=new De;U.name="verlaengerung",U.position.copy(d.punkt(b+_*.3)),U.position.z-=_*.8,U.rotation.x=on/2;let H=[],$=[];for(let ie=0;ie<=40;ie++)H.push(new T(0,-(ie/40)*z,0)),$.push(new T(0,0,1));let D=new Mn(H,{normalen:$}),O=Math.max(l*1.15,1.4);U.add(On(D,{typ:"anker",staerkeMm:O,material:i,res:e,saat:o+7}));let G=new De;if(G.position.y=-z,u.anzahl>0){let ie=ps("perle",{spec:{...s,perlen:{...u,groesseMm:Math.min(4.5,u.groesseMm),form:"tropfen"}},groesseMm:4,kettenRadius:O*.3,res:e,saat:o+13});G.add(ie.gruppe)}else{let ie=et(e.eigen(Bn(1.4,3)),i,"endkugel");ie.position.y=-1.6,G.add(ie)}U.add(G),r.add(U),a.push({knoten:U,laengeMm:z*.6,achse:"frei"})}return{gruppe:r,masse:{innenRadienMm:{x:c-l/2,z:h-l/2},laengeMm:t.laengeCm*10},pendel:a}}function q1(s,e){let t=s.armband,n=s.perlen,i=Ft(e,s.metall),r=new De;r.name="perlenarmband";let a=s._saat||1,o=n.groesseMm,l=o*Bi(n.form),c=t.zwischenperlenMm,{a:h,b:d}=Lc(t.laengeCm*10),u=Xd(h,d),f=u.laenge,p=ro(4.8),x=p.laenge+2.2,g=f-x,m=l+.25+(c>0?c+.25:0),_=Math.max(4,Math.floor(g/m)),y=(g-_*m)/2,v=[],b=[];for(let N=0;N<_;N++){let L=x/2+y+m*N+(l+.25)/2+(c>0?(c+.25)/2:0);v.push(ms(u,L)),c>0&&(b.push(L-(l+.25)/2-(c+.25)/2),N===_-1&&b.push(L+(l+.25)/2+(c+.25)/2))}if(r.add(Gr(v,{durchmesser:o,form:n.form,farbe:n.farbe,res:e,saat:a})),b.length){let N=e.eigen(Bn(c/2,2)),L=new Wt(N,i,b.length);b.forEach((I,z)=>L.setMatrixAt(z,new _e().setPosition(u.punkt(I)))),L.instanceMatrix.needsUpdate=!0,L.computeBoundingSphere(),L.castShadow=!0,L.name="zwischenperlen",r.add(L)}let S=x/2+y-.2,A=f-x/2-y+.2;r.add(On(u,{typ:"anker",staerkeMm:1,s0:x/2-.3,s1:S,material:i,res:e,saat:a})),r.add(On(u,{typ:"anker",staerkeMm:1,s0:A,s1:f-x/2+.3,material:i,res:e,saat:a+1}));let M=et(e.eigen(p.geometrie),i,"verschluss"),w=ms(u,x/2-.3);M.position.copy(w.position),M.quaternion.copy(w.quaternion).multiply(new $e().setFromAxisAngle(new T(0,0,1),on)),r.add(M);let R=et(e.eigen(so(1.1,.32)),i,"biegering"),k=ms(u,f-x/2+.6);return R.position.copy(k.position),R.quaternion.copy(k.quaternion).multiply(new $e().setFromAxisAngle(new T(0,1,0),on/2)),r.add(R),{gruppe:r,masse:{innenRadienMm:{x:h-o/2,z:d-o/2},laengeMm:t.laengeCm*10},pendel:[]}}function $1(s,e){let t=s.armband,n=Ft(e,s.metall),i=new De;i.name="armreif";let r=t.laengeCm*10,{a,b:o}=Lc(r,1.2),l=t.breiteMm,c=s.ring?.profil||"halbrund",h=Vd(c,l)*.9,d=t.offen?[on+.32,3*on-.32]:null,u=vi({radiusX:a,radiusZ:o,breite:l,dicke:h,profil:c,segmente:160,bogen:d});if(i.add(et(e.eigen(u),n,"reif")),t.offen){let p=s.perlen;for(let x of[on+.32,3*on-.32]){let g=f(p,x);g&&i.add(g)}}function f(p,x){let g=Math.max(l*.75,2.2),m=et(e.eigen(Bn(g,3)),n,"endkugel"),_=Math.sin(x)/a,y=Math.cos(x)/o,v=Math.hypot(_,y);return m.position.set(Math.sin(x)*a+_/v*h*.5,0,Math.cos(x)*o+y/v*h*.5),m}return{gruppe:i,masse:{innenRadienMm:{x:a,z:o},laengeMm:r},pendel:[]}}function K1(s,e){let t=s.armband,n=s.stein,i=Ft(e,s.metall),r=new De;r.name="tennisarmband";let a=Qe.clamp(n.groesseMm,1.8,5),o=us({groesse:a,schliff:"brillant"}),l=Wr({stein:o,anzahl:4,winkel0:on/4,draht:a*.13,tiefe:.9,leicht:!0}),c=new pn(a*.52,a*.4,o.pavillon*.75,4,1,!0);c.rotateY(on/4),c.rotateX(on/2),c.translate(0,0,-o.pavillon*.55),c.computeVertexNormals();let h=new pn(a*.11,a*.11,a*.95,8);h.rotateZ(on/2),h.translate(0,a*.52,-o.pavillon*.75);let d=e.eigen(Rn([l.geometrie,c,h])),u=o.pavillon+a*.15,{a:f,b:p}=Lc(t.laengeCm*10),x=Xd(f+u*.5,p+u*.5),g=x.laenge,m=a*2.2,_=a+.62,y=Math.max(6,Math.floor((g-m)/_)),v=(g-m)/y,b=_i(e,n.art,n.farbe),S=new Wt(e.eigen(o.geometrie),b,y),A=new Wt(d,i,y),M=new _e;for(let N=0;N<y;N++){let L=ms(x,m/2+v*(N+.5));M.compose(L.position,L.quaternion,new T(1,1,1)),S.setMatrixAt(N,M),A.setMatrixAt(N,M)}for(let N of[S,A])N.instanceMatrix.needsUpdate=!0,N.computeBoundingSphere(),N.castShadow=!0,r.add(N);let w=new zn(a*1.05,m*.95,o.pavillon*.9,2,2,2);w.deleteAttribute("uv");let R=et(e.eigen(w),i,"schloss"),k=ms(x,0);return R.position.copy(k.position),R.quaternion.copy(k.quaternion),R.translateZ(-o.pavillon*.3),r.add(R),{gruppe:r,masse:{innenRadienMm:{x:f,z:p},laengeMm:t.laengeCm*10},pendel:[]}}var gs=Math.PI,Nc={halsRadius:55,halsMitteZ:-55,halsTiefeHinten:48,brustNeigung:Qe.degToRad(25),rueckenHoehe:40,seitenHoehe:12,rundung:.0042},ao=[[300,3.4],[400,3.1],[450,2.2],[500,1.6],[600,1.4],[1e3,1.4]];function Y1(s){for(let e=1;e<ao.length;e++){let[t,n]=ao[e],[i,r]=ao[e-1];if(s<=t)return r+(n-r)*(s-i)/(t-i)}return ao[ao.length-1][1]}var Pg=2.6,Lg=7;function Z1(s){return 1/(1+Math.exp(-s))}function j1(s,e){let t=Nc,n=t.halsRadius,i=Math.max(1e-6,n*n-s*s),r=t.halsMitteZ+Math.sqrt(i),a=-s/Math.sqrt(i),o=Math.tan(t.brustNeigung),l=6,c=l*Math.log1p(Math.exp(e/l)),h=-o*e-(Pg-o)*c-t.rundung*s*s,d=-o-(Pg-o)*Z1(e/l),u=-2*t.rundung*s,f=Qe.clamp(.5+.5*(r-h)/Lg,0,1),p=h+(r-h)*f+Lg*f*(1-f)*.5,x=u+(a-u)*f,g=d*(1-f);return{z:p,zx:x,zy:g}}function J1(s,{abstand:e=.6,anhaenger:t=!1,aufloesung:n=.6}={}){let i=Qe.clamp(s,300,1e3),r=Y1(i)-(t?.15:0),a=g=>Ng(g,e,r,140),o=g=>Dg(a(g).punkte),l=-Nc.seitenHoehe+4,c=380;o(l)>i&&(c=l);for(let g=0;g<40&&c-l>.02;g++){let m=(l+c)/2;o(m)<i?l=m:c=m}let h=(l+c)/2,d=Ng(h,e,r,420),u=new Mn(d.punkte,{geschlossen:!0,normalen:d.normalen}),f=Math.max(200,Math.round(u.laenge/n)),p=[],x=[];for(let g=0;g<f;g++){let m=u.laenge*g/f;p.push(u.punkt(m)),x.push(u.normale(m))}return{punkte:p,normalen:x,tiefe:h,laenge:u.laenge}}function Dg(s){let e=0;for(let t=0;t<s.length;t++)e+=s[t].distanceTo(s[(t+1)%s.length]);return e}function Ng(s,e,t,n){let i=Nc,r=i.halsRadius,a=i.halsTiefeHinten,o=t,l=t,c=[],h=[],d=Math.round(n*.35);for(let y=0;y<=d;y++){let v=gs-y/d*(gs/2),b=(gs-v)/(gs/2),S=i.rueckenHoehe+(i.seitenHoehe-i.rueckenHoehe)*(1-Math.cos(b*gs))/2,A=new T(Math.sin(v)/r,0,Math.cos(v)/a).normalize();c.push(new T(Math.sin(v)*r,S,i.halsMitteZ+Math.cos(v)*a).addScaledVector(A,e)),h.push(A)}let u=[],f=[],p=n,x=i.seitenHoehe;for(let y=1;y<=p;y++){let v=y/p*(gs/2),b=r*Math.pow(Math.cos(v),2/o),S=x-(x+s)*Math.pow(Math.sin(v),2/l),A=j1(Math.min(b,r-1e-4),S),M=new T(-A.zx,-A.zy,1).normalize();u.push(new T(b,S,A.z).addScaledVector(M,e)),f.push(M)}let g=[...c,...u],m=[...h,...f],_=y=>new T(-y.x,y.y,y.z);for(let y=g.length-2;y>=1;y--)g.push(_(g[y])),m.push(_(m[y]));return{punkte:g,normalen:m}}function Ug(s,e){let t=s.kette,n=Ft(e,s.metall),i=new De;i.name="kette";let r=[],a=s._saat||1,o=t.laengeCm*10,l=t.typ==="perlenstrang",c=s.perlen,h=t.staerkeMm,d=l?c.groesseMm/2*(c.form==="barock"?1.2:1.1):h/2,u=s.anhaenger,f=u&&u.typ!=="keiner",p=!f&&c.anordnung==="einzeln"&&c.anzahl>0&&!l,x=J1(o,{abstand:d,anhaenger:f||p}),g=[],m=Dg(x.punkte);if(!l&&c.anordnung==="stationen"&&c.anzahl>0){let z=Math.round(c.anzahl);for(let U=0;U<z;U++)g.push(m/2+(U-(z-1)/2)*c.abstandMm);Q1(x,g,c.groesseMm/2-d)}let _=new Mn(x.punkte,{geschlossen:!0,normalen:x.normalen}),y=_.laenge,v=y/2,b=Qe.clamp(h*3.6+1.6,4.5,7),S=ro(b),A=Tg(Qe.clamp(b*.95,4.5,6.5)),M=S.laenge+A.laenge*.9,w=M/2,R=y-M/2,k=new De;k.name="verschluss";let N=et(e.eigen(S.geometrie),n,"federring");N.position.y=0,k.add(N);let L=et(e.eigen(A.geometrie),n,"plaettchen");if(k.add(L),zg(N,_,w,-1),zg(L,_,R,-1),i.add(k),l){let z=c.groesseMm,H=z*Bi(c.form)+.35,$=1.6,D=R-w-2*$,O=Math.max(3,Math.floor(D/H)),G=(D-O*H)/2,ie=[];for(let ye=0;ye<O;ye++){let Te=w+$+G+H*(ye+.5);ie.push(qd(_,Te))}i.add(Gr(ie,{durchmesser:z,form:c.form,farbe:c.farbe,res:e,saat:a}));let se=e.eigen(Bn(.9,2));for(let ye of[w+$*.55+G*.5,R-$*.55-G*.5]){let Te=et(se,n,"kalotte");_.punkt(ye,Te.position),i.add(Te)}}else{let z=[],U=w,H=c.groesseMm*.42;for(let $ of g)z.push([U,$-H]),U=$+H;if(z.push([U,R]),z.forEach(([$,D],O)=>{D-$>h&&i.add(On(_,{typ:t.typ,staerkeMm:h,s0:$,s1:D,material:n,res:e,saat:a+O}))}),g.length){let $=g.map(D=>qd(_,D));i.add(Gr($,{durchmesser:c.groesseMm,form:c.form,farbe:c.farbe,res:e,saat:a+3}))}}let I=0;if(f||p){let z=f?u.typ:"perle",U=ps(z,{spec:s,groesseMm:f?u.groesseMm:c.groesseMm,kettenRadius:d,res:e,saat:a}),H=new De;H.name="anhaenger";let $=_.punkt(v),D=_.normale(v),O=new T(1,0,0),G=new T().crossVectors(D,O).normalize(),ie=new T().crossVectors(O,G);H.quaternion.setFromRotationMatrix(new _e().makeBasis(O,G,ie)),H.position.copy($);let se=-U.rueckZ-d;if(se>0){let ye=Math.atan2(se,Math.max(2,U.hoeheMm*.8));H.quaternion.multiply(new $e().setFromAxisAngle(new T(1,0,0),-ye))}H.add(U.gruppe),i.add(H),r.push({knoten:H,laengeMm:U.schwerpunktMm,achse:"z"}),I=U.hoeheMm}return{gruppe:i,masse:{halsRadiusMm:Nc.halsRadius,laengeMm:y,tiefeMm:x.tiefe+I},pendel:r}}function qd(s,e){let t=s.punkt(e),n=s.tangente(e),i=s.normale(e),r=new T().crossVectors(n,i),a=new $e().setFromRotationMatrix(new _e().makeBasis(r,n,i));return{position:t,quaternion:a}}function zg(s,e,t,n){let i=qd(e,t);s.position.copy(i.position),s.quaternion.copy(i.quaternion),n<0&&s.quaternion.multiply(new $e().setFromAxisAngle(new T(0,0,1),gs))}function Q1(s,e,t){if(t<=0)return;let n=s.punkte,i=s.normalen,r=[0];for(let o=1;o<n.length;o++)r.push(r[o-1]+n[o].distanceTo(n[o-1]));let a=t*6+4;for(let o=0;o<n.length;o++){let l=0;for(let c of e){let h=Math.abs(r[o]-c);h<a&&(l=Math.max(l,.5+.5*Math.cos(gs*h/a)))}l>0&&n[o].addScaledVector(i[o],t*l)}}var Hn=Math.PI,eS=Math.PI*2,ii=1.6,tS=Qe.degToRad(24);function Fg(s,e){let t=s.ohrring,n=Ft(e,s.metall),i=new De;i.name="ohrring";let r=[],a=s._saat||1,o=0;switch(t.typ){case"creole":u(!1);break;case"huggie":u(!0);break;case"haenger":f();break;case"perlenstecker":d();break;default:h()}i.updateMatrixWorld(!0);let l=new wt().setFromObject(i);return o=Math.max(o,-l.min.y),{gruppe:i,masse:{laengeMm:o,hoeheMm:l.max.y-l.min.y},pendel:r};function c(p){let g=new pn(.4,.4,p+9.4,10);g.rotateZ(Hn/2),g.translate((p-9.4)/2,0,0);let m=new Li(.4,10,6);m.translate(-9.4,0,0);let _=-ii-.25,y=[];for(let A=0;A<48;A++){let M=A/48*eS,w=Math.cos(M),R=Math.sin(M);y.push(new re(2.4*Math.sign(w)*Math.pow(Math.abs(w),.6),1.55*Math.sign(R)*Math.pow(Math.abs(R),.6)))}let v=Oi(y,{hoehe:.14,rueckHoehe:.14,ringe:4,form:.2});v.rotateY(-Hn/2),v.translate(_,0,0);let b=new pn(.75,.8,1.5,16,1);b.rotateZ(Hn/2),b.translate(_-.75,0,0);let S=[g,m,v,b];for(let A of[1,-1]){let M=[[_-.05,2.25],[_-.75,2.55],[_-1.45,2.05],[_-1.4,1.2],[_-.95,.9]].map(([k,N])=>new T(k,0,N*A)),R=new is(M,!1,"centripetal").getSpacedPoints(24);S.push(ni(R,{radius:1.25,ellipse:[1,.12],segmente:12,kappen:"flach",normalen:R.map(()=>new T(0,1,0))}))}i.add(et(e.eigen(Rn(S)),n,"stift"))}function h(){let p=s.anhaenger,x;if(p&&p.typ!=="keiner"&&p.typ!=="stein"){let g=Wd(p.typ,{spec:s,groesseMm:p.groesseMm,res:e,saat:a});x=g.gruppe,x.rotation.y=Hn/2,x.position.x=ii-g.rueckZ,o=g.hoehe/2}else{let g=s.stein,m=us({groesse:g.groesseMm,schliff:g.schliff}),_=g.groesseMm>5?Wr({stein:m,anzahl:4,winkel0:Hn/4}):io({stein:m});x=new De,x.add(et(e.eigen(m.geometrie),_i(e,g.art,g.farbe),"stein")),x.add(et(e.eigen(_.geometrie),n,"fassung")),x.rotation.y=Hn/2,x.position.x=ii-_.basisZ,o=m.ry+.4}i.add(x),c(ii+.3)}function d(){let p=s.perlen,x=p.groesseMm,g=p.form==="tropfen"||p.form==="reis"?"rund":p.form,m=Pc(x),_=et(e.eigen(m.geometrie),n,"schale");_.rotation.y=Hn/2,_.position.x=ii+m.hoehe*.35,i.add(_);let y=no({durchmesser:x,form:g,farbe:p.farbe,res:e,saat:a,detail:14});y.rotation.z=-Hn/2,y.position.x=ii+m.hoehe*.65+x*Bi(g)/2*.97,i.add(y),o=x/2,c(ii+m.hoehe*.4)}function u(p){let x=t.durchmesserMm,g=t.staerkeMm,m=t.profil||"rund",_=p?g*.82:m==="rund"?g:g*.8,y=x/2-_,v=y+_/2,b=new De;b.name=p?"huggie":"creole";let S=vi({radiusX:y,breite:g,dicke:_,profil:m,segmente:96}),A=et(e.eigen(S),n,"reif");A.rotation.z=-Hn/2,A.position.y=-v,b.add(A),b.rotation.y=tS,i.add(b),o=2*v+_/2;let M=s.anhaenger;if(M&&M.typ!=="keiner"){let w=new De;w.name="tropfen",w.position.set(0,-2*v,0),w.rotation.y=Hn/2;let R=ps(M.typ,{spec:s,groesseMm:M.groesseMm,kettenRadius:_/2,res:e,saat:a});w.add(R.gruppe),b.add(w),r.push({knoten:w,laengeMm:R.schwerpunktMm,achse:"frei"}),o=2*v+R.hoeheMm}p||r.push({knoten:b,laengeMm:v,achse:"frei"})}function f(){let p=s.anhaenger&&s.anhaenger.typ!=="keiner"?s.anhaenger:{typ:"perle",groesseMm:s.perlen.groesseMm},x=.95,g;if(t.befestigung==="haken"){let S=[[-3.5,-11],[-5.2,-6.5],[-4.4,-1.6],[-2.2,.6],[0,.6],[2.2,.2],[3.4,-1.6],[3.5,-4.2],[3.5,-5.6]].map(([R,k])=>new T(R,k,0)),A=yg(S,.4,{segmente:8}),M=new mn(.75,.38,8,20);M.translate(3.5,-6.5,0);let w=Bn(.9,2);w.translate(3.5,-2.6,0),i.add(et(e.eigen(Rn([A,M,w])),n,"haken")),g=new T(3.5,-6.5-.75+.38,0)}else{let A=Bn(1.8,3);A.translate(ii+1.8*.95,0,0);let M=new mn(.6,.3,8,18);M.rotateY(Hn/2),M.translate(ii+1.8*.95,-1.8-.35,0),i.add(et(e.eigen(Rn([A,M])),n,"kugel")),c(ii+.3),g=new T(ii+1.8*.95,-1.8-.35-.6+.3,0)}let m=new De;m.name="haenger",m.position.copy(g);let _=ps(p.typ,{spec:s,groesseMm:p.groesseMm,kettenRadius:x*.3,res:e,saat:a}),y=Math.max(0,t.laengeMm- -g.y-_.hoeheMm),v=0;if(y>2.5){let S=[],A=[];for(let M=0;M<=20;M++)S.push(new T(0,-(M/20)*y,0)),A.push(new T(1,0,0));m.add(On(new Mn(S,{normalen:A}),{typ:"anker",staerkeMm:x,material:n,res:e,saat:a})),v=-y}let b=new De;b.position.y=v,b.rotation.y=Hn/2,b.add(_.gruppe),m.add(b),i.add(m),r.push({knoten:m,laengeMm:(y+_.hoeheMm)*.6,achse:"frei"}),o=-g.y+y+_.hoeheMm}}function nS(s,e=["gold","silber"]){let t={gold:"Gold",silber:"Silber",rosegold:"Ros\xE9gold",weissgold:"Wei\xDFgold"};return e.map(n=>({name:t[n],spec:{...s,metall:n,name:t[n]}}))}function jt(s,e,t,n){let i=nS(t,n);return{name:s,beschreibung:e,spec:i[0].spec,varianten:i}}var oo={"perlentropfen-ohrringe":jt("Perlentropfen-Ohrringe","Goldene Huggie-Creole (12 mm) mit beweglichem S\xFC\xDFwasserperlen-Tropfen.",{art:"ohrringe",metall:"gold",ohrring:{typ:"huggie",durchmesserMm:12,staerkeMm:2.1},anhaenger:{typ:"perle",groesseMm:8},perlen:{groesseMm:7,form:"tropfen",farbe:"weiss"}}),"basic-creolen":jt("Basic Creolen","Schlichte, runde Creolen, 18 mm, hochglanzpoliert.",{art:"ohrringe",metall:"gold",ohrring:{typ:"creole",durchmesserMm:18,staerkeMm:2.2,profil:"rund"}}),"sonnen-ohrstecker":jt("Sonnen-Ohrstecker","Kleine Sonne mit facettierten Strahlen als Ohrstecker, 9 mm.",{art:"ohrringe",metall:"gold",ohrring:{typ:"stecker"},anhaenger:{typ:"sonne",groesseMm:9}}),"perlen-ohrstecker":jt("Perlen-Ohrstecker","Klassische S\xFC\xDFwasserperle (7 mm, Button) auf goldener Schale.",{art:"ohrringe",metall:"gold",ohrring:{typ:"perlenstecker"},perlen:{groesseMm:7,form:"button",farbe:"weiss"}}),"perlen-haenger":jt("Perlen-H\xE4nger","Goldkugel-Stecker mit feinem Kettchen und tropfenf\xF6rmiger Perle, ca. 30 mm.",{art:"ohrringe",metall:"gold",ohrring:{typ:"haenger",laengeMm:30},anhaenger:{typ:"perle",groesseMm:8},perlen:{groesseMm:7,form:"tropfen",farbe:"creme"}}),"lunara-armband":jt("Lunara Armband","Feine Ankerkette mit Mond-Charm und kleiner S\xFC\xDFwasserperle, 17 cm + 4 cm Verl\xE4ngerung.",{art:"armband",metall:"gold",armband:{typ:"kette",laengeCm:17,verlaengerungCm:4},kette:{typ:"anker",staerkeMm:1.3},anhaenger:{typ:"mond",groesseMm:9},perlen:{anordnung:"einzeln",anzahl:1,groesseMm:4.5,form:"tropfen",farbe:"weiss"}}),"perlen-armband":jt("Perlen-Armband","S\xFC\xDFwasserperlen (6 mm) auf Draht, getrennt durch goldene Zwischenperlen.",{art:"armband",metall:"gold",armband:{typ:"perlen",laengeCm:17,zwischenperlenMm:2.5},perlen:{groesseMm:6,form:"rund",farbe:"weiss"}}),"zartes-perlenarmband":jt("Zartes Perlenarmband","Hauchfeine Ankerkette mit einer einzelnen S\xFC\xDFwasserperle.",{art:"armband",metall:"gold",armband:{typ:"kette",laengeCm:17,verlaengerungCm:3},kette:{typ:"anker",staerkeMm:1},perlen:{anordnung:"stationen",anzahl:1,groesseMm:5,form:"rund",farbe:"weiss"}}),"florea-kette":jt("Florea Kette","Feine Ankerkette (45 cm) mit Bl\xFCtenanh\xE4nger und Perle in der Mitte.",{art:"kette",metall:"gold",kette:{typ:"anker",staerkeMm:1.2,laengeCm:45},anhaenger:{typ:"blume",groesseMm:12},perlen:{groesseMm:4,farbe:"weiss"}}),perlenkette:jt("Perlenkette","Strang aus S\xFC\xDFwasserperlen (6 mm), 42 cm, mit goldenem Federring.",{art:"kette",metall:"gold",kette:{typ:"perlenstrang",laengeCm:42},perlen:{groesseMm:6,form:"rund",farbe:"weiss"}}),"perlen-station-kette":jt("Perlen-Station-Kette","Feine Ankerkette mit f\xFCnf kleinen S\xFC\xDFwasserperlen im Abstand von 3,5 cm.",{art:"kette",metall:"gold",kette:{typ:"anker",staerkeMm:1.1,laengeCm:45},perlen:{anordnung:"stationen",anzahl:5,abstandMm:35,groesseMm:5,form:"rund",farbe:"weiss"}}),"muenz-kette":jt("M\xFCnz-Kette","Geh\xE4mmerte M\xFCnze (13 mm) an einer Figarokette, 45 cm.",{art:"kette",metall:"gold",kette:{typ:"figaro",staerkeMm:1.6,laengeCm:45},anhaenger:{typ:"muenze",groesseMm:13}}),"herz-kette":jt("Herz-Kette","Gew\xF6lbtes Herz (11 mm) an feiner Erbskette, 45 cm.",{art:"kette",metall:"gold",kette:{typ:"erbs",staerkeMm:1.3,laengeCm:45},anhaenger:{typ:"herz",groesseMm:11}},["gold","silber","rosegold"]),"solitaer-ring":jt("Solit\xE4r-Ring","Zarte Schiene mit Zirkonia-Brillant (5 mm) in Sechs-Krappen-Fassung.",{art:"ring",metall:"gold",ring:{typ:"solitaer",schieneMm:1.8,profil:"rund",innenDurchmesserMm:17,krappen:6},stein:{art:"zirkonia",groesseMm:5,schliff:"brillant"}},["gold","silber","weissgold"]),"perlen-ring":jt("Perlen-Ring","S\xFC\xDFwasserperle (7 mm) auf zarter, halbrunder Schiene.",{art:"ring",metall:"gold",ring:{typ:"perle",schieneMm:1.6,profil:"halbrund",innenDurchmesserMm:17},perlen:{groesseMm:7,form:"rund",farbe:"weiss"}}),"band-ring":jt("Band-Ring","Schlichter, hochglanzpolierter Bandring, 3 mm, halbrund.",{art:"ring",metall:"gold",ring:{typ:"band",schieneMm:3,profil:"halbrund",innenDurchmesserMm:17}}),"offener-perlenring":jt("Offener Perlenring","Offene Schiene mit zwei S\xFC\xDFwasserperlen an den Enden (Toi et Moi).",{art:"ring",metall:"gold",ring:{typ:"offen",schieneMm:1.5,profil:"rund",innenDurchmesserMm:17},perlen:{groesseMm:6,anzahl:2,form:"rund",farbe:"weiss"}})};var Og=["ring","armband","kette","ohrringe"],iS={ohrring:"ohrringe",ohrstecker:"ohrringe",creolen:"ohrringe",halskette:"kette",collier:"kette",armreif:"armband",ringe:"ring"},Hg={metall:["gold","silber","rosegold","weissgold"],"kette.typ":["anker","erbs","figaro","panzer","schlange","kugel","paperclip","seil","perlenstrang"],"perlen.form":["rund","barock","tropfen","button","reis"],"perlen.farbe":["weiss","creme","rose","champagner","grau"],"perlen.anordnung":["strang","stationen","einzeln"],"anhaenger.typ":["keiner",...kg],"ohrring.typ":["stecker","creole","huggie","haenger","perlenstecker"],"ohrring.profil":["rund","flach","halbrund"],"ohrring.befestigung":["stecker","haken"],"ring.typ":["band","solitaer","perle","offen","siegel","kette"],"ring.profil":["halbrund","rund","flach"],"stein.art":["zirkonia","diamant","saphir","rubin","smaragd","perle"],"stein.schliff":["brillant","oval","tropfen","smaragd"],"armband.typ":["kette","perlen","reif","tennis"]},Vg={"kette.staerkeMm":[.6,6,1.2],"kette.laengeCm":[30,100,45],"perlen.groesseMm":[2,16,6],"perlen.abstandMm":[5,200,30],"perlen.anzahl":[0,200,0],"anhaenger.groesseMm":[4,40,12],"ohrring.durchmesserMm":[6,70,14],"ohrring.staerkeMm":[.8,8,2],"ohrring.laengeMm":[8,90,30],"ring.schieneMm":[1,12,2],"ring.innenDurchmesserMm":[12,26,17],"ring.krappen":[4,6,4],"stein.groesseMm":[1,14,4],"armband.laengeCm":[12,26,18],"armband.verlaengerungCm":[0,8,3],"armband.zwischenperlenMm":[0,6,2.5],"armband.breiteMm":[1,30,3]},sS=["kette","perlen","anhaenger","ohrring","ring","stein","armband"];var rS=new Set(["ohrring.profil"]);function zc(s){return s&&typeof s=="object"&&!Array.isArray(s)}function Gg(s){let e=[],t=zc(s)?s:{};zc(s)||e.push("Spec fehlt oder ist kein Objekt.");let n={},i=typeof t.art=="string"?t.art.toLowerCase().trim():"";i=iS[i]||i,Og.includes(i)||(e.push(`art '${t.art}' unbekannt (erlaubt: ${Og.join(", ")}); 'kette' verwendet.`),i="kette"),n.art=i,typeof t.name=="string"&&(n.name=t.name),n.metall=Bg("metall",t.metall,e);for(let r of sS){let a=zc(t[r])?t[r]:{};t[r]!==void 0&&!zc(t[r])&&e.push(`${r} muss ein Objekt sein.`);let o={...a};for(let l of Object.keys(Hg)){let[c,h]=l.split(".");if(!(c!==r||!h)){if(rS.has(l)&&(a[h]===void 0||a[h]===null||a[h]==="")){delete o[h];continue}o[h]=Bg(l,a[h],e)}}for(let l of Object.keys(Vg)){let[c,h]=l.split(".");c===r&&(o[h]=aS(l,a[h],e))}n[r]=o}return n.ring.krappen!==4&&n.ring.krappen!==6&&(n.ring.krappen=n.ring.krappen>5?6:4),n.stein.farbe!==void 0&&n.stein.farbe!==null&&!/^#[0-9a-f]{6}$/i.test(String(n.stein.farbe))&&(e.push(`stein.farbe '${n.stein.farbe}' ist keine Farbe wie '#aabbcc'; Standard verwendet.`),n.stein.farbe=null),n.stein.farbe===void 0&&(n.stein.farbe=null),i==="ring"&&n.ring.typ==="solitaer"&&n.stein.art==="perle"&&(n.ring.typ="perle"),n.stein.art==="perle"&&(n.stein.art="zirkonia"),n.ohrring.befestigung===void 0&&(n.ohrring.befestigung="stecker"),n.armband.offen!==void 0?n.armband.offen=!!n.armband.offen:n.armband.offen=!1,{ok:e.length===0,fehler:e,spec:n}}function Bg(s,e,t){let n=Hg[s];if(e==null||e==="")return n[0];let i=String(e).toLowerCase().trim().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/é/g,"e");return n.includes(i)?i:(t.push(`${s} '${e}' unbekannt (erlaubt: ${n.join(", ")}); '${n[0]}' verwendet.`),n[0])}function aS(s,e,t){let[n,i,r]=Vg[s];if(e==null||e==="")return r;let a=typeof e=="number"?e:parseFloat(String(e).replace(",","."));if(!Number.isFinite(a))return t.push(`${s} '${e}' ist keine Zahl; ${r} verwendet.`),r;if(a<n||a>i){let o=Math.min(i,Math.max(n,a));return t.push(`${s} ${a} ausserhalb ${n}\u2026${i}; auf ${o} begrenzt.`),o}return a}var oS={ring:Rg,armband:Ig,kette:Ug,ohrringe:Fg};function Dc(s){let{spec:e,fehler:t}=Gg(s);t.length&&typeof console<"u"&&console.warn("[schmuck] Spec-Hinweise:",t);let{name:n,...i}=e;e._saat=xg(JSON.stringify({...i,metall:void 0}))+1;let r=new Vs,a;try{a=oS[e.art](e,r)}catch(h){return console.error("[schmuck] Bau fehlgeschlagen, Standardmodell verwendet:",h),r.dispose(),Dc({art:e.art,metall:e.metall})}let o=a.gruppe;o.name=`schmuck-${e.art}`,o.userData.spec=e,o.userData.einheit="mm";let l={...a.masse};e.art==="kette"&&(l.halsRadiusMm=l.halsRadiusMm??55);let c=!1;return{art:e.art,gruppe:o,masse:l,pendel:a.pendel||[],dispose(){c||(c=!0,Wg(o),r.dispose())}}}function Wg(s){s.traverse(e=>{e.isInstancedMesh&&e.dispose()})}async function Xg(s,e={}){let{spec:t}=Gg({art:"kette",...e}),i=await new Ac().loadAsync(s),r=new Vs,a=new De;a.name=`glb-${t.art}`;let o=i.scene;a.add(o);let l=new Set,c=[];o.traverse(p=>{if(p.isMesh){p.geometry&&l.add(p.geometry);let x=g=>{let m=(g&&g.name?g.name:"").toLowerCase();return/^(metall|metal|gold|silber|silver)/.test(m)?Ft(r,t.metall):/^(perle|pearl)/.test(m)?hs(r,t.perlen.farbe,0):/^(stein|diamant|stone|gem)/.test(m)?_i(r,t.stein.art,t.stein.farbe):(l.add(g),g)};p.material=Array.isArray(p.material)?p.material.map(x):x(p.material),p.castShadow=!0}if(/^pendel/i.test(p.name)){let x=new wt().setFromObject(p);c.push({knoten:p,laengeMm:Number(p.userData.laengeMm)||Math.max(1,(x.max.y-x.min.y)/2),achse:["frei","x","z"].includes(p.userData.achse)?p.userData.achse:"frei"})}});let h=new wt().setFromObject(o),u={...o.userData&&o.userData.masse?o.userData.masse:{}};t.art==="ring"&&u.innenRadiusMm===void 0&&(u.innenRadiusMm=t.ring.innenDurchmesserMm/2),t.art==="kette"&&u.halsRadiusMm===void 0&&(u.halsRadiusMm=55),t.art==="ohrringe"&&u.laengeMm===void 0&&(u.laengeMm=Math.max(0,-h.min.y)),t.art==="armband"&&u.innenRadienMm===void 0&&(u.innenRadienMm={x:Math.max(20,-h.min.x-1),z:Math.max(15,-h.min.z-1)});let f=!1;return{art:t.art,gruppe:a,masse:u,pendel:c,dispose(){if(!f){f=!0,Wg(a);for(let p of l){if(p.isMaterial)for(let x of Object.keys(p))p[x]&&p[x].isTexture&&p[x].dispose();p.dispose()}r.dispose()}}}}var lS=["ring","armband","kette","ohrringe"],cS=["daumen","zeige","mittel","ring","klein"],hS={gold:"Gold",silber:"Silber",rosegold:"Ros\xE9gold",weissgold:"Wei\xDFgold"};function xs(s){return String(s||"").toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").normalize("NFD").replace(/[̀-ͯ]/g,"")}var uS=[["ohrringe",/(ohrringe?|ohrstecker|stecker|creolen?|hoops?|huggies?|ohrhaenger|ohrclips?|earrings?|studs?)$/],["armband",/(armbaender|armband|armkette|armreif(?:en|e)?|bracelets?|bangles?)$/],["kette",/(ketten?|collier|choker|necklaces?|anhaenger|pendants?|chains?)$/],["ring",/(ringe?|rings?)$/]];function Xr(s){let e=xs(s);if(!e)return null;if(lS.includes(e))return e;let t=e.split(/[^a-z0-9]+/).filter(Boolean);for(let n of t)for(let[i,r]of uS)if(r.test(n))return i;for(let[n,i]of[["ohrringe","ohrring"],["ohrringe","creole"],["armband","armband"],["kette","kette"],["ring","ring"]])if(e.includes(i))return n;return null}function dS(s){return String(s.dataset.tags||"").split(",").map(e=>e.trim()).filter(Boolean)}function fS(s){let e=s.querySelectorAll("script[data-anprobe-modell]"),t=[];for(let n of e){let i=(n.textContent||"").trim();if(i)try{let r=JSON.parse(i);if(typeof r=="string"&&(r=JSON.parse(r)),Array.isArray(r))t.push(...r);else if(r&&Array.isArray(r.varianten)){let{varianten:a,...o}=r;for(let l of a)t.push(l&&l.spec?{...l,spec:{...o,...l.spec}}:{...o,...l})}else r&&typeof r=="object"&&t.push(r)}catch(r){console.warn(`[anprobe] Modell-JSON f\xFCr \u201E${s.dataset.titel||"Produkt"}\u201C fehlerhaft (Metafeld vom Typ JSON?):`,r.message)}}return t.filter(n=>n&&typeof n=="object")}function pS(s,e){let t=s.spec&&typeof s.spec=="object"?{...s.spec}:{...s};delete t.spec;let n=s.glbUrl||s.glb||t.glbUrl||t.glb||null;delete t.glb,delete t.glbUrl;let i=s.vorlage||t.vorlage;if(i&&oo[i]){let{vorlage:a,...o}=t;t={...oo[i].spec,...o}}delete t.vorlage;let r=s.name||t.name||t.metall&&hS[t.metall]||`Variante ${e+1}`;return t.name=t.name||r,n?{name:r,glbUrl:n,spec:t}:{name:r,spec:t}}var mS=["perle","creole","huggie","sonne","mond","herz","muenz","blume","bluete","flor","stern","muschel","solitaer","stecker","haenger","tropfen","station","band","offen","figaro","anker","erbs","zirkonia","stein","strang","zart","basic","lunara","florea","siegel","tennis","reif"],gS={bluete:"blume",flor:"blume",muenze:"muenz",coin:"muenz",pearl:"perle",hoop:"creole",heart:"herz",sun:"sonne",moon:"mond"};function xS(s,e){let t=[],n=i=>{for(let r of Object.values(i||{}))typeof r=="string"?t.push(r):r&&typeof r=="object"&&n(r)};return n(e.spec),xs([s,s.replace(/-/g,""),e.name,e.beschreibung,...t].join(" "))}function _S(s,e){let t=Object.entries(oo).filter(([,l])=>l&&l.spec&&l.spec.art===s);if(!t.length)return null;let n=xs(e),i=n.split(/[^a-z0-9]+/).filter(l=>l.length>=4),r=new Set;for(let l of mS)n.includes(l)&&r.add(l);for(let[l,c]of Object.entries(gS))n.includes(l)&&r.add(c);let a=t[0],o=0;for(let l of t){let c=xS(l[0],l[1]),h=0;for(let d of i)c.includes(d)&&(h+=1);for(let d of r)c.includes(d)&&(h+=2);h>o&&(a=l,o=h)}return{id:a[0],vorlage:a[1]}}function $d(s){let e=xs(s);return/rose/.test(e)?"rosegold":/weiss/.test(e)?"weissgold":/silber|silver|edelstahl|steel/.test(e)?"silber":/gold|vergoldet/.test(e)?"gold":null}function vS(s,e,t){let n=s.varianten&&s.varianten.length?s.varianten:[{name:s.name,spec:s.spec}],i=t.map(o=>({name:o,metall:$d(o)})).filter(o=>o.metall);if(i.length)return i.map(({name:o,metall:l})=>({name:o,spec:{...s.spec,metall:l,name:o}}));let r=n.map(o=>({name:o.name,spec:{...o.spec}})),a=$d(e);if(a){let o=r.findIndex(l=>l.spec.metall===a);o>0&&r.unshift(...r.splice(o,1))}return r}function lo(s){let e=s.dataset,t=(e.titel||"").trim()||"Schmuckst\xFCck",n=dS(s),i=fS(s),r=n.map(u=>/^anprobe\s*:\s*(.+)$/i.exec(u)).filter(Boolean).map(u=>Xr(u[1]))[0]||null,a=i.map(u=>Xr(u.spec&&u.spec.art||u.art)).find(Boolean)||null,o=Xr(e.art)||r||a||Xr(e.typ)||Xr(t);if(!o){for(let u of n)if(o=Xr(u))break}n.some(u=>/^anprobe\s*:\s*aus$/i.test(u.trim()))&&(o=null);let l=s.querySelector("[data-anprobe-bild][data-ersatz]")||s.querySelector("[data-anprobe-bild]"),c=e.bild||l&&l.dataset.url||null,h=[...s.querySelectorAll("[data-anprobe-bild][data-name]")].map(u=>u.dataset.name.trim()).filter(Boolean),d={titel:t,preis:(e.preis||"").trim()||null,bildUrl:c,art:o,varianten:[],finger:cS.includes(xs(e.finger))?xs(e.finger):o==="ring"?"ring":void 0,quelle:"vorlage"};if(!o)return d;if(i.length)d.varianten=i.map(pS).map(u=>({...u,spec:{...u.spec,art:o}})),d.quelle=d.varianten.some(u=>u.glbUrl)?"glb":"modell";else if(e.glb)d.varianten=[{name:e.glbName||t,glbUrl:e.glb,spec:{art:o,metall:$d(e.glbName||t)||"gold"}}],d.quelle="glb";else{let u=_S(o,t);u?(d.varianten=vS(u.vorlage,t,h),d.vorlage=u.id):d.varianten=[{name:"Gold",spec:{art:o,metall:"gold",name:"Gold"}}],console.info(`[anprobe] Kein Modell f\xFCr \u201E${t}\u201C \u2013 Vorlage ${d.vorlage||"(Standard)"} verwendet (Notl\xF6sung).`),Eo("Vorlage statt Modell",d.vorlage)}return d}function qg(s={}){let e=document.createElement("div"),t={titel:s.titel,preis:s.preis,bild:s.bild||s.bildUrl,art:s.art,typ:s.typ,tags:Array.isArray(s.tags)?s.tags.join(","):s.tags,glb:s.glb,finger:s.finger};for(let[i,r]of Object.entries(t))r!=null&&r!==""&&(e.dataset[i]=String(r));let n=s.modell||s.varianten||s.spec;if(n){let i=document.createElement("script");i.type="application/json",i.setAttribute("data-anprobe-modell",""),i.textContent=JSON.stringify(n),e.appendChild(i)}return lo(e)}var qt={vision:new Map,wasm:new Map,erkenner:new Map},Uc={wasm:13e6,hand:78e5,gesicht:38e5,koerper:58e5},co={wasm:"Erkennung wird geladen",hand:"Handerkennung wird geladen",gesicht:"Gesichtserkennung wird geladen",koerper:"K\xF6rpererkennung wird geladen",start:"Erkennung wird gestartet",fertig:"Bereit"},Yg=s=>String(s||"").replace(/\/+$/,""),yS=25e3,$g=new Map,Kd=class{constructor(e){this.melde=typeof e=="function"?e:null,this.dateien=new Map,this.anteilStart=0,this.text=co.wasm}datei(e,t){return this.dateien.has(e)||this.dateien.set(e,{geladen:0,gesamt:t||1e6,fertig:!1}),this.dateien.get(e)}aktualisiere(e,t,n,i){let r=this.datei(e);n&&(r.gesamt=n),r.geladen=t,i&&(this.text=i),this.sende()}fertig(e){let t=this.datei(e);t.fertig=!0,t.geladen=t.gesamt,this.sende()}setzeStart(e,t){this.anteilStart=e,t&&(this.text=t),this.sende()}wert(){let e=0,t=0;for(let i of this.dateien.values())t+=i.gesamt,e+=i.fertig?i.gesamt:Math.min(i.geladen,i.gesamt*.98);let n=t>0?e/t:1;return Math.min(1,n*.9+this.anteilStart*.1)}sende(){if(this.melde)try{this.melde(this.wert(),this.text)}catch{}}};async function Yd(s,{schaetzung:e=0,onBytes:t,stillstandMs:n=yS}={}){let i=typeof AbortController<"u"?new AbortController:null,r=0,a=()=>{i&&(clearTimeout(r),r=setTimeout(()=>i.abort(),n))};a();try{return await MS(s,{schaetzung:e,onBytes:t,signal:i&&i.signal,weiter:a})}catch(o){throw i&&i.signal.aborted?new Error(`Laden ins Stocken geraten: ${s}`):o}finally{clearTimeout(r)}}async function MS(s,{schaetzung:e,onBytes:t,signal:n,weiter:i}){let r=await fetch(s,{credentials:"same-origin",signal:n||void 0});if(i(),!r.ok)throw new Error(`Laden fehlgeschlagen: ${s} (${r.status})`);let a=Number(r.headers.get("content-length"))||0,o=a||e||0;if(a&&e&&a<e*.7&&(o=e),!r.body||!r.body.getReader){let f=new Uint8Array(await r.arrayBuffer());return t&&t(f.length,f.length),f}let l=r.body.getReader(),c=[],h=0;for(;;){let{done:f,value:p}=await l.read();if(f)break;c.push(p),h+=p.length,i(),h>o&&(o=h*1.05),t&&t(h,o)}if(a&&!r.headers.get("content-encoding")&&h<a)throw new Error(`Laden unvollstaendig: ${s} (${h} von ${a} Bytes)`);if(c.length===1)return c[0];let d=new Uint8Array(h),u=0;for(let f of c)d.set(f,u),u+=f.length;return d}function bS(s,e){let t=Yg(s&&s.mediapipe);if(!t)return Promise.reject(new Error("konfig.mediapipe fehlt"));if(!qt.vision.has(t)){let n=(async()=>{let i=$g.get(t)||0,r=i?`?versuch=${i}`:"",a;try{a=await import(`${t}/vision_bundle.mjs${r}`)}catch(l){throw $g.set(t,i+1),l}let o=await a.FilesetResolver.forVisionTasks(`${t}/wasm`);return{mp:a,filesetDirekt:o}})();n.catch(()=>qt.vision.delete(t)),qt.vision.set(t,n)}return qt.vision.get(t).then(async n=>{let i=String(n.filesetDirekt.wasmBinaryPath),r=null;try{r=await SS(i,e)}catch{r=null}e&&e.dateien.has("wasm")&&e.fertig("wasm");let a=r?{...n.filesetDirekt,wasmBinaryPath:r}:n.filesetDirekt;return{mp:n.mp,fileset:a,filesetDirekt:n.filesetDirekt}})}function SS(s,e){if(!qt.wasm.has(s)){if(typeof URL>"u"||!URL.createObjectURL)return Promise.resolve(null);let t=Yd(s,{schaetzung:Uc.wasm,onBytes:(n,i)=>e&&e.aktualisiere("wasm",n,i,co.wasm)}).then(n=>URL.createObjectURL(new Blob([n],{type:"application/wasm"})));t.catch(()=>qt.wasm.delete(s)),qt.wasm.set(s,t)}return qt.wasm.get(s)}var Zd=class{constructor(e,t,n,i){this.art=e,this.task=t,this.delegate=n,this.modus="VIDEO",this.letzteZeit=0,this.fehlerInFolge=0,this.neuBauen=i,this.wirdNeuGebaut=!1,this.letzterFehler=null,this.haende=e==="hand"?1:null}setzeHaende(e){if(this.art!=="hand"||!this.task||this.haende===e)return;let t=this.task.setOptions({numHands:e});t&&t.catch&&t.catch(()=>{}),this.haende=e}setzeModus(e){if(this.modus===e)return;let t=this.task.setOptions({runningMode:e});t&&t.catch&&t.catch(()=>{}),this.modus=e}erkenne(e,t){if(!this.task||this.wirdNeuGebaut)return null;try{let n;if(t==null)this.setzeModus("IMAGE"),n=this.task.detect(e),this.letzteZeit+=1;else{this.setzeModus("VIDEO");let i=Math.max(Number(t)||0,this.letzteZeit+1);this.letzteZeit=i,n=this.task.detectForVideo(e,i)}return this.fehlerInFolge=0,n}catch(n){return this.letzterFehler=n,this.fehlerInFolge++,this.fehlerInFolge>=3&&this.delegate==="GPU"&&this.neuBauen&&this.aufCpuWechseln(),null}}async aufCpuWechseln(){if(!this.wirdNeuGebaut){this.wirdNeuGebaut=!0;try{let e=await this.neuBauen("CPU");try{this.task.close()}catch{}this.task=e,this.delegate="CPU",this.modus="VIDEO",this.haende=this.art==="hand"?1:null,this.letzteZeit=0,this.fehlerInFolge=0}catch(e){this.letzterFehler=e}finally{this.wirdNeuGebaut=!1}}}schliessen(){try{this.task&&this.task.close()}catch{}this.task=null}};function ES(s,e,t){let n={modelAssetBuffer:e,delegate:t};return s==="hand"?{baseOptions:n,runningMode:"VIDEO",numHands:1,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5}:s==="gesicht"?{baseOptions:n,runningMode:"VIDEO",numFaces:1,minFaceDetectionConfidence:.5,minFacePresenceConfidence:.5,minTrackingConfidence:.5,outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!0}:{baseOptions:n,runningMode:"VIDEO",numPoses:1,minPoseDetectionConfidence:.5,minPosePresenceConfidence:.5,minTrackingConfidence:.5,outputSegmentationMasks:!1}}function wS(s,e){return{hand:s.HandLandmarker,gesicht:s.FaceLandmarker,koerper:s.PoseLandmarker}[e]}async function Kg(s,e,t,n){let i=wS(s.mp,e),r=n==="CPU"?["CPU"]:["GPU","CPU"],a=s.fileset===s.filesetDirekt?[s.fileset]:[s.fileset,s.filesetDirekt],o=null;for(let l of a)for(let c of r)try{return{task:await i.createFromOptions(l,ES(e,t,c)),delegate:c}}catch(h){o=h}throw o||new Error(`MediaPipe-Task ${e} konnte nicht erzeugt werden`)}async function jd(s,e,t){let n=new Kd(t),i=e&&e.modelle||{},r=e&&String(e.delegate||"").toUpperCase()==="CPU"?"CPU":null,a=Yg(e&&e.mediapipe),o=[];for(let f of s){if(!i[f])throw new Error(`konfig.modelle.${f} fehlt`);let p=`${a}|${f}|${i[f]}`;qt.erkenner.has(p)||o.push({art:f,schluessel:p,url:i[f]})}o.length&&!qt.wasm.size&&n.datei("wasm",Uc.wasm);for(let f of o)n.datei(f.art,Uc[f.art]);n.sende();let l=bS(e,n),c=new Map(o.map(f=>[f.art,Yd(f.url,{schaetzung:Uc[f.art],onBytes:(p,x)=>n.aktualisiere(f.art,p,x,co[f.art])}).then(p=>(n.fertig(f.art),p))]));for(let f of c.values())f.catch(()=>{});let h=await l,d=0;for(let f of o){if(qt.erkenner.has(f.schluessel))continue;let p=(async()=>{let x=await c.get(f.art);n.setzeStart(d/Math.max(1,o.length),co.start);let{task:g,delegate:m}=await Kg(h,f.art,x,r),_=async y=>(await Kg(h,f.art,await Yd(f.url),y)).task;return new Zd(f.art,g,m,_)})();p.catch(()=>qt.erkenner.delete(f.schluessel)),qt.erkenner.set(f.schluessel,p),await p,d++}let u={mp:h.mp};for(let f of s)u[f]=await qt.erkenner.get(`${a}|${f}|${i[f]}`);return n.setzeStart(1,co.fertig),u}async function Zg(){let s=[...qt.erkenner.values()];qt.erkenner.clear();for(let e of s)try{(await e).schliessen()}catch{}for(let e of qt.wasm.values())try{let t=await e;t&&URL.revokeObjectURL(t)}catch{}qt.wasm.clear()}var TS=2*Math.PI;function qr(s,e){return 1/(1+1/(TS*s)/e)}function Jd(s,e){let t=s-e;return t>1e-4?Math.min(t,.5):1e-4}var Mi=class{constructor({minCutoff:e=1,beta:t=0,dCutoff:n=1}={}){this.minCutoff=e,this.beta=t,this.dCutoff=n,this.zuruecksetzen()}zuruecksetzen(){this.x=null,this.dx=0,this.t=0}setze(e,t){return this.x=e,this.dx=0,this.t=t,e}filtere(e,t,n=1){if(this.x===null||!Number.isFinite(this.x))return this.setze(e,t);let i=Jd(t,this.t),r=(e-this.x)/i;this.dx+=qr(this.dCutoff,i)*(r-this.dx);let a=this.minCutoff+this.beta*Math.abs(this.dx)/(n||1);return this.x+=qr(a,i)*(e-this.x),this.t=t,this.x}},ho=class{constructor(e,{minCutoff:t=1,beta:n=0,dCutoff:i=1,punktDim:r=3}={}){this.dim=e,this.minCutoff=t,this.beta=n,this.dCutoff=i,this.punkte=Math.max(1,e/r),this.x=new Float64Array(e),this.dx=new Float64Array(e),this.t=0,this.leer=!0,this.letzterCutoff=t}zuruecksetzen(){this.leer=!0,this.dx.fill(0)}setze(e,t){for(let n=0;n<this.dim;n++)this.x[n]=e[n];return this.dx.fill(0),this.t=t,this.leer=!1,this.x}filtere(e,t,n=1){if(this.leer)return this.setze(e,t);let i=Jd(t,this.t),r=qr(this.dCutoff,i),a=0;for(let h=0;h<this.dim;h++){let d=(e[h]-this.x[h])/i;this.dx[h]+=r*(d-this.dx[h]),a+=this.dx[h]*this.dx[h]}let o=Math.sqrt(a/this.punkte)/(n||1),l=this.minCutoff+this.beta*o;this.letzterCutoff=l;let c=qr(l,i);for(let h=0;h<this.dim;h++)this.x[h]+=c*(e[h]-this.x[h]);return this.t=t,this.x}},Fc=class{constructor(e){this.f=new ho(3,{...e,punktDim:3}),this.aus=new T,this.puffer=[0,0,0]}zuruecksetzen(){this.f.zuruecksetzen()}get leer(){return this.f.leer}setze(e,t){this.puffer[0]=e.x,this.puffer[1]=e.y,this.puffer[2]=e.z;let n=this.f.setze(this.puffer,t);return this.aus.set(n[0],n[1],n[2])}filtere(e,t,n=1){this.puffer[0]=e.x,this.puffer[1]=e.y,this.puffer[2]=e.z;let i=this.f.filtere(this.puffer,t,n);return this.aus.set(i[0],i[1],i[2])}},uo=class{constructor({minCutoff:e=1,beta:t=.5,dCutoff:n=1}={}){this.minCutoff=e,this.beta=t,this.dCutoff=n,this.q=new $e,this.hilf=new $e,this.omega=0,this.t=0,this.leer=!0}zuruecksetzen(){this.leer=!0,this.omega=0}setze(e,t){return this.q.copy(e).normalize(),this.omega=0,this.t=t,this.leer=!1,this.q}filtere(e,t){if(this.leer)return this.setze(e,t);let n=Jd(t,this.t);this.hilf.copy(e).normalize(),this.hilf.dot(this.q)<0&&this.hilf.set(-this.hilf.x,-this.hilf.y,-this.hilf.z,-this.hilf.w);let i=2*Math.acos(Math.min(1,Math.abs(this.hilf.dot(this.q))));this.omega+=qr(this.dCutoff,n)*(i/n-this.omega);let r=this.minCutoff+this.beta*this.omega;return this.q.slerp(this.hilf,qr(r,n)),this.t=t,this.q}},Oc=class{constructor(e=.25,t=.3){this.dauerEin=e,this.dauerAus=t,this.wert=0}schritt(e,t){if(!(t>0))return this.wert;let n=e>this.wert?this.dauerEin:this.dauerAus,i=t/Math.max(.001,n);return e>this.wert?this.wert=Math.min(e,this.wert+i):this.wert=Math.max(e,this.wert-i),this.wert}setze(e){return this.wert=e,e}};function Qd(s,e,t,n,i){let r=s.length,a=i&&i.length===r*3?i:new Float64Array(r*3);for(let o=0;o<r;o++){let l=s[o];a[o*3]=(n?1-l.x:l.x)*e,a[o*3+1]=(1-l.y)*t,a[o*3+2]=-(l.z||0)*e}return a}function ef(s,e){let t=s.length/3,n=e&&e.length===t?e:Array.from({length:t},()=>new T);for(let i=0;i<t;i++)n[i].set(s[i*3],s[i*3+1],s[i*3+2]);return n}function fo(s,e,t=new T){t.set(0,0,0);for(let n of e)t.add(s[n]);return t.multiplyScalar(1/e.length)}function ln(s,e,t){return s<e?e:s>t?t:s}function Hi(s,e,t){let n=ln((s-e)/(t-e),0,1);return n*n*(3-2*n)}function Bc(s,e){let t=s.clone().normalize(),n=e.clone().addScaledVector(t,-e.dot(t));return n.lengthSq()<1e-12&&n.set(0,0,1).addScaledVector(t,-t.z),n.normalize(),{x:new T().crossVectors(t,n).normalize(),y:t,z:n}}function $r(s,e){let t=s.clone().normalize(),n=e.clone().addScaledVector(t,-e.dot(t));n.lengthSq()<1e-12&&n.set(0,1,0).addScaledVector(t,-t.y),n.normalize();let i=new T().crossVectors(t,n).normalize();return{x:t,y:n,z:i}}var jg=new _e;function bi(s,e=new $e){return jg.makeBasis(s.x,s.y,s.z),e.setFromRotationMatrix(jg)}function Jg(s,e,t=new T){t.set(0,0,0);for(let n=0;n<e.length;n++){let i=s[e[n]],r=s[e[(n+1)%e.length]];t.x+=(i.y-r.y)*(i.z+r.z),t.y+=(i.z-r.z)*(i.x+r.x),t.z+=(i.x-r.x)*(i.y+r.y)}return t.normalize()}function Vn(s,e,t,n,i,r,a=new T){return a.copy(s).addScaledVector(e.x,t*r).addScaledVector(e.y,n*r).addScaledVector(e.z,i*r)}var cn=(s,e,t)=>({typ:"kapsel",a:s.clone(),b:e.clone(),r:t}),tf=(s,e,t,n,i)=>({typ:"ellipsenzylinder",a:s.clone(),b:e.clone(),quer:t.clone().normalize(),rQuer:n,rTiefe:i}),Kr=(s,e,t)=>({typ:"ellipsoid",mitte:s.clone(),quaternion:e.clone(),radien:t.clone()});var Gs={daumen:{gelenke:[1,2,3,4],ring:[2,3],anker:[.5,.5],durchmesserMm:21},zeige:{gelenke:[5,6,7,8],ring:[5,6],anker:[.48,.6],durchmesserMm:18},mittel:{gelenke:[9,10,11,12],ring:[9,10],anker:[.48,.6],durchmesserMm:18.5},ring:{gelenke:[13,14,15,16],ring:[13,14],anker:[.48,.62],durchmesserMm:17},klein:{gelenke:[17,18,19,20],ring:[17,18],anker:[.5,.6],durchmesserMm:15}},Yr=Object.keys(Gs),AS=[[0,5,94],[0,9,90],[0,13,87],[0,17,78],[5,17,62]],RS=62,CS=18,Vi={quer:26.5,tiefe:18.5},kS=150,Qg=55*Math.PI/180,IS=[.9,.8,.72],e0=.92,PS={"hand-zeigen":"Halte deine Hand ins Bild",naeher:"Etwas n\xE4her heran","ganz-ins-bild":"Zeig die ganze Hand im Bild","finger-spreizen":"Spreiz die Finger ein wenig"};function n0(s){return s?{code:s,text:PS[s]}:null}function LS(s){let e=[...s].sort((n,i)=>n-i),t=e.length>4?e.slice(1,-1):e;return t.reduce((n,i)=>n+i,0)/t.length}function rf(s){return LS(AS.map(([e,t,n])=>s[e].distanceTo(s[t])/n))}function sf(s,e,t,n=new T){return Jg(s,[0,5,9,13,17],n),e!==t?n.negate():n}var t0=[6,7,8,10,11,12,14,15,16,18,19,20],NS=[2,3,4],zS=.5;function nf(s,e,t){let n=fo(s,[0,5,9,13,17]),i=s[0].distanceTo(s[9])||1,r=0;for(let a of t)r+=(s[a].x-n.x)*e.x+(s[a].y-n.y)*e.y+(s[a].z-n.z)*e.z;return r/t.length/i}function DS(s,e,t){let n=0,i=0,r=sf(s,!0,t);return n+=nf(s,r,NS)+nf(s,r,t0),i+=2,e&&e.length===21&&(n+=nf(e,sf(e,!0,t),t0),i+=1),ln(-4*n/i,-1,1)}function af(s,e,t,n){let i=0;if(s){let r=s.categoryName==="Right"?s.score??.5:1-(s.score??.5);i+=2*r-1}return i+zS*DS(e,t,n)}function of(s,{W:e,H:t,spiegel:n=!1,rechts:i=!0,armWinkel:r=0,armMessung:a=null}){let o=rf(s),l=sf(s,i,n),h=fo(s,[5,9,13,17]).clone().sub(s[0]).normalize(),d=Bc(h,l),u=s[5].distanceTo(s[17])/o,f=ln(u/RS,.85,1.2),p=.5+.5*f,x=s[5].clone().sub(s[17]);x.addScaledVector(d.z,-x.dot(d.z)).normalize();let g=d.z.clone().multiplyScalar(Math.cos(Qg)).addScaledVector(x,Math.sin(Qg)),m=Hi(l.z,-.35,.35),_={},y={};for(let k of Yr){let N=Gs[k],L=s[N.ring[0]],I=s[N.ring[1]],z=I.clone().sub(L),U;k==="daumen"?U=g:(U=new T().crossVectors(d.x,z),U.lengthSq()<1e-9&&(U=d.z));let H=Bc(z,U);_[k]=.5*N.durchmesserMm*o*p,y[k]={position:L.clone().lerp(I,N.anker[0]+(N.anker[1]-N.anker[0])*m),quaternion:bi(H),pxProMm:o,rahmen:H}}for(let k of Yr)y[k].sichtbar=FS(k,s,y[k].rahmen,_);let v=Bc(r?BS(h,r):h,l),b={quer:Vi.quer*o*p,tiefe:Vi.tiefe*o*p},S=s[0].clone();if(a&&a.breite>0){let k=new T(v.y.y,-v.y.x,0);if(k.lengthSq()>1e-6){k.normalize();let N=Math.hypot(b.quer*v.x.dot(k),b.tiefe*v.z.dot(k)),L=a.breite*Vi.quer*o,I=ln(L/Math.max(N,1e-6),.72,1.2);b.quer*=I,b.tiefe*=I;let z=ln((a.versatz||0)*Vi.quer*o,-.35*N*I,.35*N*I);S.addScaledVector(k,z)}}let A=S.clone().addScaledVector(v.y,-CS*o),M={position:A,quaternion:bi(v),pxProMm:o,rahmen:v},{verdecker:w,schatten:R}=OS(s,_,b,v,A,o,S);return{anker:{ring:y,armband:M},masse:{fingerRadiusPx:_,handgelenkRadienPx:b},verdecker:w,schatten:R,hinweisCode:null,info:{ppm:o,kBreite:f,nRuecken:l,rueckenZurKamera:l.z>0,ruecken:m,hand:d}}}var US={zeige:["mittel"],mittel:["zeige","ring"],ring:["mittel","klein"],klein:["ring"],daumen:[]};function FS(s,e,t,n){let i=Gs[s],r=e[i.ring[0]],a=e[i.ring[1]],o=n[s],l=1-Hi(Math.abs(t.y.z),.62,.8),c=Math.hypot(a.x-r.x,a.y-r.y);l*=Hi(c/(2*o),.5,.85);let h=Hc(e,i.ring);for(let d of US[s]){let u=Hc(e,Gs[d].ring),f=Math.hypot(h.x-u.x,h.y-u.y)/(.5*(o+n[d]));l*=Hi(f,.85,1.3)}return ln(l,0,1)}function OS(s,e,t,n,i,r,a=s[0]){let o=[],l=[];for(let g of Yr){let m=Gs[g].gelenke,_=e[g],y=g==="daumen"?[[2,3],[3,4]]:[[m[0],m[1]],[m[1],m[2]],[m[2],m[3]]];y.forEach(([v,b],S)=>{let A=g==="daumen"?[.9,.78][S]:IS[S],M=_*A,w=s[b];if(S===y.length-1){let R=s[b].clone().sub(s[v]),k=R.length();w=s[v].clone().addScaledVector(R,Math.max(.2,(k-M)/Math.max(k,1e-6)))}o.push(cn(s[v],w,M)),S<2&&l.push(cn(s[v],s[b],_*[1,.9][S]))})}let c=(s[5].distanceTo(s[9])+s[9].distanceTo(s[13])+s[13].distanceTo(s[17]))/3,h=Math.max(.42*c,7*r),d=[];for(let g of[5,9,13,17])d.push(cn(s[0],s[g],h));d.push(cn(s[5],s[17],h*.95));let u=e.daumen;d.push(cn(s[0],s[1],u)),d.push(cn(s[1],s[2],u*.92)),o.push(...d);let f=a.clone().addScaledVector(n.y,4*r),p=i.clone().addScaledVector(n.y,-kS*r);o.push(tf(f,p,n.x,t.quer*e0,t.tiefe*e0));let x=[tf(f,p,n.x,t.quer,t.tiefe),...d];return{verdecker:o,schatten:{ring:l,armband:x}}}function i0(s,e,{W:t,H:n,art:i}){let r=.01*Math.min(t,n),a=i==="armband"?[0,1,5,9,13,17]:[0,2,3,5,6,9,10,13,14,17,18];for(let l of a){let c=s[l];if(c.x<r||c.x>t-r||c.y<r||c.y>n-r)return"ganz-ins-bild"}if(i==="armband"){let l=e.anker.armband.position;if(l.x<0||l.x>t||l.y<0||l.y>n)return"ganz-ins-bild"}if(Math.hypot(s[9].x-s[0].x,s[9].y-s[0].y)<.12*Math.min(t,n))return"naeher";if(i==="ring"){let l=e.masse.fingerRadiusPx,c=[["zeige","mittel"],["mittel","ring"],["ring","klein"]];for(let[h,d]of c){let u=Hc(s,Gs[h].ring),f=Hc(s,Gs[d].ring);if(Math.hypot(u.x-f.x,u.y-f.y)<.9*(l[h]+l[d])*.5)return"finger-spreizen"}}return null}function Hc(s,[e,t]){return{x:(s[e].x+s[t].x)/2,y:(s[e].y+s[t].y)/2}}function BS(s,e){let t=Math.cos(e),n=Math.sin(e);return new T(s.x*t-s.y*n,s.x*n+s.y*t,s.z)}var lf=75*Math.PI/180,s0=5*Math.PI/180,HS=[12,20,28,36,46,56,68,80,95,110],VS=[-.55,0,.55],r0=.035,GS=.5,WS=.12,XS=40,qS=[14,24,34,44,54,64,76],$S=.22,KS=2,Vc=class{constructor(){this.canvas=null,this.ctx=null,this.daten=null,this.b=0,this.h=0,this.k=1,this.fehler=!1}lese(e,t,n){if(this.fehler)return!1;try{let i=224/Math.max(t,n),r=Math.max(8,Math.round(t*i)),a=Math.max(8,Math.round(n*i));return this.canvas||(this.canvas=typeof OffscreenCanvas<"u"?new OffscreenCanvas(r,a):document.createElement("canvas"),this.ctx=null),(this.canvas.width!==r||this.canvas.height!==a)&&(this.canvas.width=r,this.canvas.height=a),this.ctx||(this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0})),this.ctx.drawImage(e,0,0,r,a),this.daten=this.ctx.getImageData(0,0,r,a).data,this.b=r,this.h=a,this.k=i,!0}catch{return this.fehler=!0,!1}}farbe(e,t,n,i,r){let a=Math.round((r?n-e:e)*this.k-.5),o=Math.round((i-t)*this.k-.5);if(a<0||o<0||a>=this.b||o>=this.h)return null;let l=(o*this.b+a)*4,c=this.daten,h=c[l],d=c[l+1],u=c[l+2],f=h+d+u+3;return[(h+1)/f,(d+1)/f,f]}schaetze(e,t,n,i,{W:r,H:a,spiegel:o}){if(!e||!(n>0)||!this.lese(e,r,a))return null;let l=[0,0,0],c=0;for(let R of[.3,.5])for(let k of[5,9,13,17]){let N=this.farbe(t[0].x+R*(t[k].x-t[0].x),t[0].y+R*(t[k].y-t[0].y),r,a,o);N&&(l[0]+=N[0],l[1]+=N[1],l[2]+=Math.log(N[2]),c++)}if(c<4)return null;l[0]/=c,l[1]/=c,l[2]/=c;let h=(t[5].x+t[9].x+t[13].x+t[17].x)/4,d=(t[5].y+t[9].y+t[13].y+t[17].y)/4,u=t[0].x-h,f=t[0].y-d,p=Math.hypot(u,f);if(p<.001)return null;u/=p,f/=p;let x=R=>{let k=(R[0]-l[0])/r0,N=(R[1]-l[1])/r0,L=(Math.log(R[2])-l[2])/GS;return Math.exp(-.5*(k*k+N*N+L*L))},g=[];for(let R=-lf;R<=lf+1e-6;R+=s0){let k=Math.cos(R),N=Math.sin(R),L=u*k-f*N,I=u*N+f*k,z=0,U=0,H=0,$=0,D=0,O=0;HS.forEach((ie,se)=>{let ye=1/(1+se/4);for(let Te of VS){let Oe=Te*i*n,Y=t[0].x+L*ie*n-I*Oe,Q=t[0].y+I*ie*n+L*Oe;$+=ye;let pe=this.farbe(Y,Q,r,a,o);if(!pe)continue;let Re=x(pe);H+=ye,z+=ye*Re,U+=ye,ie>=XS&&(D+=Re,O++)}});let G=H/$>=.35?z/U-WS*(R/lf)**2:null;g.push({w:R,wert:G,fern:O?D/O:0,drin:H/$})}let m=g.filter(R=>R.wert!=null);if(m.length<5)return null;let _=0;g.forEach((R,k)=>{R.wert!=null&&(g[_].wert==null||R.wert>g[_].wert)&&(_=k)});let y=g[_],v=y.w,b=g[_-1],S=g[_+1];if(b&&S&&b.wert!=null&&S.wert!=null){let R=b.wert-2*y.wert+S.wert;R<-1e-6&&(v+=s0*Math.max(-.5,Math.min(.5,.5*(b.wert-S.wert)/R)))}let A=m.reduce((R,k)=>R+k.wert,0)/m.length,M=Math.max(0,Math.min(1,(y.fern-.3)/.25))*Math.max(0,Math.min(1,(y.wert-.25)/.25))*Math.max(0,Math.min(1,(y.wert-A)/.15))*Math.max(0,Math.min(1,(y.drin-.4)/.35));if(M<=.01)return null;let w=this.querschnitte(t[0],v,u,f,n,i,x,r,a,o);return w&&w.winkelKorrektur!=null&&(v+=w.winkelKorrektur*w.guete),{winkel:v,guete:M,arm:w}}querschnitte(e,t,n,i,r,a,o,l,c,h){let d=Math.cos(t),u=Math.sin(t),f=n*d-i*u,p=n*u+i*d,x=-p,g=f,m=.75/this.k,_=KS*a*r,y=(D,O,G,ie)=>{let se=0;for(let ye=m;ye<=_;ye+=m){let Te=this.farbe(D+G*ye,O+ie*ye,l,c,h);if(!Te)return null;if(o(Te)<$S){if(++se>=2)return ye-m*1.5}else se=0}return null},v=[],b=[];for(let D of qS){let O=e.x+f*D*r,G=e.y+p*D*r,ie=this.farbe(O,G,l,c,h);if(!ie||o(ie)<.35)continue;let se=y(O,G,x,g),ye=y(O,G,-x,-g);if(se==null||ye==null)continue;let Te=(se+ye)/2;Te<.45*a*r||Te>1.6*a*r||(b.push(Te),v.push({s:D*r,q:(se-ye)/2}))}if(b.length<3)return null;b.sort((D,O)=>D-O);let S=b[Math.floor(b.length/2)],A=v.length,M=0,w=0,R=0,k=0;for(let D of v)M+=D.s,w+=D.q,R+=D.s*D.s,k+=D.s*D.q;let N=A*R-M*M,L=0,I=w/A;N>1e-6&&(L=(A*k-M*w)/N,I=(w-L*M)/A);let z=(b[b.length-1]-b[0])/S,U=0;for(let D of v)U+=(D.q-I-L*D.s)**2;U=Math.sqrt(U/A)/S;let H=Math.min(1,(A-2)/3)*Math.max(0,Math.min(1,(.9-z)/.5))*Math.max(0,Math.min(1,(.45-U)/.3));if(H<=.05)return null;let $=Math.atan(L);return{halbBreitePx:S,versatzPx:I,winkelKorrektur:Math.abs($)<.5?$:null,guete:H}}};var YS=11.7,ZS=.89,jS=126,JS=[[234,454],[93,323],[132,361],[127,356],[33,263],[133,362],[61,291],[58,288],[172,397],[162,389],[21,251]],QS=[[152,10],[175,151],[199,9],[200,8]],hf={bezug:{L:[127,234,93,132,58],R:[356,454,323,361,288]},aussenMm:4.3,obenMm:-7.4,vornMm:-45.9,rahmen:"matrix"},a0=[22,40],eE=15*Math.PI/180,o0={obenMm:1.5,radien:[1.3,8.5,6.5]},Gc=[66,110,90],Xc={brennweiteAnteil:.75,abstandMm:[350,1500],einzelbildAbstandMm:700,tiefeOhrMm:75,tiefeHalsMm:50};function uf(s,{W:e,H:t,einzel:n=!1},i,r=Xc){if(!(s>0)||!(i>0))return 1;let a=n?r.einzelbildAbstandMm:ln(r.brennweiteAnteil*Math.max(e,t)/s,r.abstandMm[0],r.abstandMm[1]);return a/(a+i)}var tE={"gesicht-zeigen":"Schau direkt in die Kamera","kopf-drehen":"Dreh den Kopf leicht zur Seite",naeher:"Etwas n\xE4her heran"};function df(s){return s?{code:s,text:tE[s]}:null}var Wc=null;function c0(s){if(Wc)return Wc;if(!s||!s.length)return null;let e=[],t=s.length%3===0;for(let n=0;t&&n<s.length;n+=3){let i=s[n],r=s[n+1],a=s[n+2];i.end!==r.start||r.end!==a.start||a.end!==i.start?t=!1:e.push(i.start,r.start,a.start)}if(!t){e.length=0;let n=new Map,i=(a,o)=>{n.has(a)||n.set(a,new Set),n.get(a).add(o)};for(let a of s)i(a.start,a.end),i(a.end,a.start);let r=new Set;for(let[a,o]of n)for(let l of o)if(!(l<=a))for(let c of n.get(l)){if(c<=l||!o.has(c))continue;let h=`${a},${l},${c}`;r.has(h)||(r.add(h),e.push(a,l,c))}}return Wc=new Uint16Array(e),Wc}function ff(s,e,t=null){let n=t?{x:t.x.clone(),y:t.y.clone(),z:t.z.clone()}:null,i=!!n;if(!n){let r=new T;for(let[o,l]of JS)r.add(s[l]).sub(s[o]);e&&r.negate();let a=new T;for(let[o,l]of QS)a.add(s[l]).sub(s[o]);n=$r(r,a)}return n.ausMatrix=i,n.ursprung=s[234].clone().add(s[454]).multiplyScalar(.5),n.quaternion=bi(n),n.gier=Math.atan2(n.z.x,n.z.z),n.nick=Math.asin(ln(n.z.y,-1,1)),n}function h0(s,e){if(!s||s.length<16)return null;let t=e?-1:1,n=new T(s[0],t*s[1],t*s[2]),i=new T(t*s[4],s[5],s[6]);return n.lengthSq()>1e-6&&i.lengthSq()>1e-6?$r(n,i):null}var cf=[0,-25,-60];function u0(s,e){return Vn(s.ursprung,s,cf[0],cf[1],cf[2],e)}function nE(s){let e=0,t=0;for(let[n,i,r,a]of[[469,471,470,472],[474,476,475,477]]){if(!s[i])continue;let o=Math.hypot(s[n].x-s[i].x,s[n].y-s[i].y),l=Math.hypot(s[r].x-s[a].x,s[r].y-s[a].y),c=Math.max(o,l/ZS);e+=c*c*c,t+=c*c}return t>0?e/t:0}function pf(s){let e=s[234].distanceTo(s[454])/jS,t=nE(s),n=t/YS;if(!(n>0))return e;let i=ln(n,e*.85,e*1.15),r=ln(.4+(t-6)*.04,.4,.6);return Math.exp(r*Math.log(i)+(1-r)*Math.log(e))}function l0(s,e,t,n,i,r=hf,a=t){let l=fo(s,n==="L"!==i?r.bezug.L:r.bezug.R),c=n==="L"?-1:1,h=Vn(l,e,c*r.aussenMm,r.obenMm,r.vornMm,t),d=c*e.gier*180/Math.PI,u=1-Hi(d,a0[0],a0[1]),f=c*eE,p=e.x.clone().multiplyScalar(Math.cos(f)).addScaledVector(e.z,Math.sin(f)),x=bi($r(p,e.y));return{position:h,quaternion:x,pxProMm:a,sichtbar:u,bezug:l}}function mf(s,e,t,n,{mitHals:i=!0,ohren:r=null}={}){let a=[];if(n){let u=new Float32Array(1404);for(let f=0;f<468;f++)u[f*3]=s[f].x,u[f*3+1]=s[f].y,u[f*3+2]=s[f].z;a.push({typ:"netz",positionen:u,index:n})}let o=e.ursprung,l=Gc[0],c=0,h=[];for(let u of r||[])h.push(u.position.clone().sub(o).dot(e.x)/t);h.length===2&&(c=(h[0]+h[1])/2,l=ln(Math.abs(h[1]-h[0])/2-6,48,Gc[0]));let d=Vn(o,e,c,10,-40,t);if(a.push(Kr(d,e.quaternion,new T(l,Gc[1],Gc[2]).multiplyScalar(t))),i){let u=Vn(o,e,0,-45,-35,t),f=Vn(o,e,0,-170,-45,t);a.push(cn(u,f,50*t))}for(let u of r||[]){let f=new T(0,o0.obenMm,0).applyQuaternion(u.quaternion).multiplyScalar(u.pxProMm).add(u.position);a.push(Kr(f,u.quaternion,new T(...o0.radien).multiplyScalar(u.pxProMm)))}return a}function d0(s,{W:e,H:t,spiegel:n=!1,index:i=null,ppm:r=null,achsen:a=null,einzel:o=!1}){let l=ff(s,n,a),c=pf(s),h=r||c,d=h*uf(h,{W:e,H:t,einzel:o},Xc.tiefeOhrMm),u=l0(s,l,h,"L",n,hf,d),f=l0(s,l,h,"R",n,hf,d),p=mf(s,l,h,i,{ohren:[u,f]}),x=p.find(g=>g.typ==="kapsel");return{rahmen:l,ppmRoh:c,anker:{ohrL:u,ohrR:f},verdecker:p,schatten:x&&x.typ==="kapsel"?[cn(x.a,x.b,x.r/.96)]:[],info:{gierGrad:l.gier*180/Math.PI,nickGrad:l.nick*180/Math.PI,perspektive:d/h}}}function f0(s,e,{W:t,H:n}){return Math.hypot(s[234].x-s[454].x,s[234].y-s[454].y)<.2*Math.min(t,n)?"naeher":null}var p0={schulterbreiteMm:270,drosselObenMm:24,kinnDrosselMm:42,kinnGewicht:.5,drosselVornMm:55,kinnZug:.5,halsZuKiefer:.47,halsRadiusNormMm:55,halsRadiusGrenzenMm:[44,64],kinnAbstandMinMm:15,drosselVorKopfMm:25},iE=100,sE={sichtbarMin:.5,vorSchulterMm:30,tiefeVorDrosselMm:95,unterarmMm:30,handMinMm:36,daumenMm:11,fingerUeberstandMm:30},rE={schultern:"Etwas mehr Abstand, damit Hals und Schultern zu sehen sind","gesicht-zeigen":"Schau direkt in die Kamera",naeher:"Etwas n\xE4her heran"};function m0(s){return s?{code:s,text:rE[s]}:null}function gf(s,e,t){if(!s)return!1;let n=.005*Math.min(e,t);for(let i of[11,12]){let r=s.P[i];if((s.sichtbarkeit[i]??1)<.5||r.x<n||r.x>e-n||r.y<n||r.y>t-n)return!1}return!0}function xf(s,e){if(!s.welt)return 0;let t=e?s.welt[12]:s.welt[11],n=e?s.welt[11]:s.welt[12],i=t.clone().sub(n),r=Math.hypot(i.x,i.y);return r>.001?ln(i.z/r,-2,2):0}function g0(s,e,t=null){let n=s.P,i=e?n[12]:n[11],r=e?n[11]:n[12],a=i.clone().sub(r);a.z=0;let o=a.length(),l=t??xf(s,e);return{linie:new T(a.x,a.y,l*o),schulterTiefe:l}}function x0(s,e,t=p0){return g0(s,e).linie.length()/t.schulterbreiteMm}function _0(s,e,{W:t,H:n,spiegel:i=!1,ppm:r=null,index:a=null,einzel:o=!1,schulterTiefe:l=null,kal:c=p0}){let h=s.P,{linie:d,schulterTiefe:u}=g0(s,i,l),f=d.length(),p=f/c.schulterbreiteMm,x=e&&e.ppm?e.ppm:p,g=r||x,m=g*uf(g,{W:t,H:n,einzel:o},Xc.tiefeHalsMm),_=new T(0,0,1).cross(d),y=$r(d,_),v=h[11].clone().add(h[12]).multiplyScalar(.5),b=Vn(v,y,0,c.drosselObenMm,c.drosselVornMm,g);if(e&&(b.z=e.rahmen.ursprung.z+c.drosselVorKopfMm*g),e){let N=e.P[152],L=Math.abs(e.rahmen.gier)*180/Math.PI,I=c.kinnZug*(1-Hi(L,10,30));b.addScaledVector(y.x,I*N.clone().sub(b).dot(y.x));let z=N.clone().sub(b).dot(y.y)-c.kinnDrosselMm*g;b.addScaledVector(y.y,c.kinnGewicht*z);let U=N.clone().sub(b).dot(y.y),H=c.kinnAbstandMinMm*g;U<H&&b.addScaledVector(y.y,U-H)}let S=c.halsRadiusNormMm;if(e){let N=e.P[172].distanceTo(e.P[397])/m;S=ln(c.halsZuKiefer*N,c.halsRadiusGrenzenMm[0],c.halsRadiusGrenzenMm[1])}let A=bi(y),M={position:b,quaternion:A,pxProMm:m},{verdecker:w,schatten:R}=aE(b,y,A,m,g,S,e,a),k=oE(s,b,y,m,i,e);return w.push(...k),{anker:M,rahmen:y,ppmRoh:x,halsRadiusMm:S,verdecker:w,schatten:R,info:{schulterMm:f/g,schulterTiefe:u,schulterMitte:v}}}function aE(s,e,t,n,i,r,a,o){let l=r*n,c=Vn(s,e,0,-10,-r,n),h=Vn(s,e,0,120,-r-10,n);if(a){let x=Vn(a.rahmen.ursprung,a.rahmen,0,-50,-40,i);h=h.lerp(x,.5)}let d=[cn(c,h,l*.94)],u=Vn(s,e,0,-200,-95,n),f=new T(190,225,100).multiplyScalar(n);d.push(Kr(u,t,f)),a&&d.push(...mf(a.P,a.rahmen,i,o,{mitHals:!1}));let p=[cn(c,h,l),Kr(u,t,f)];return{verdecker:d,schatten:p}}function oE(s,e,t,n,i,r,a=sE){let o=s.P,l=f=>s.sichtbarkeit[f]??1,c=[];if(!s.welt)return c;let h=(s.welt[11].z+s.welt[12].z)/2,d=e.z+a.tiefeVorDrosselMm*n,u=r?r.P[152].y:e.y+60*n;for(let[f,p,x,g,m]of[[13,15,17,19,21],[14,16,18,20,22]]){if(l(p)<a.sichtbarMin||Math.min(l(x),l(g))<a.sichtbarMin||s.welt[p].z-h<a.vorSchulterMm||o[p].y>u&&o[x].y>u&&o[g].y>u)continue;let _=M=>new T(M.x,M.y,d),y=_(o[p]),v=_(o[x].clone().add(o[g]).multiplyScalar(.5)),b=v.clone().sub(y),S=b.length();S>.001&&v.addScaledVector(b,a.fingerUeberstandMm*n/S);let A=Math.max(.55*o[x].distanceTo(o[g]),a.handMinMm*n);c.push(cn(y,v,A)),l(m)>=a.sichtbarMin&&c.push(cn(y,_(o[m]),a.daumenMm*n)),l(f)>=a.sichtbarMin&&c.push(cn(_(o[f]),y,a.unterarmMm*n))}return c}function v0(s,e,{W:t,H:n}){if(!gf(s,t,n))return"schultern";let i=e.anker.position;return i.x<0||i.x>t||i.y<0||i.y>n||i.y-iE*e.anker.pxProMm<0?"schultern":Math.hypot(s.P[11].x-s.P[12].x,s.P[11].y-s.P[12].y)<.22*Math.min(t,n)?"naeher":null}var qc={ring:["hand"],armband:["hand"],ohrringe:["gesicht"],kette:["gesicht","koerper"]},y0=.3,lE=.25,cE=.1,hE=1,uE=.6,dE=.25,fE=.1,pE=.35,mE=40,gE=1.2,_n={punkte:{minCutoff:1.6,beta:3,dCutoff:1.5},koerperPunkte:{minCutoff:.35,beta:2,dCutoff:1},koerperRelativ:{minCutoff:.12,beta:1.5,dCutoff:1},koerperDrehung:{minCutoff:.12,beta:.4,dCutoff:1},punkteDrehung:{minCutoff:1.6,beta:1,dCutoff:1.5},position:{minCutoff:2.5,beta:4,dCutoff:1.5},rotation:{minCutoff:1.2,beta:.8,dCutoff:1.5},massstab:{minCutoff:.25,beta:2,dCutoff:1},masse:{minCutoff:.2,beta:1,dCutoff:1},sichtbar:{minCutoff:2,beta:0,dCutoff:1},unterarm:{minCutoff:.6,beta:.4,dCutoff:1}},M0=.5,xE=10,_E=2.5,vE=4;function yE(s,e,t){let n=0;for(let r=0;r<s.length;r+=3){let a=e[s[r]],o=e[s[r+1]],l=e[s[r+2]];n+=(o.x-a.x)*(l.y-a.y)-(o.y-a.y)*(l.x-a.x)}let i=new Uint16Array(s.length);for(let r=0;r<s.length;r+=3)i[r]=s[r],i[r+1]=s[r+2],i[r+2]=s[r+1];return t&&(n=-n),n>=0?{ccw:s,cw:i}:{ccw:i,cw:s}}var vf=class{constructor(){this.pos=new Fc(_n.position),this.rot=new uo(_n.rotation),this.ppm=new Mi(_n.massstab),this.sicht=new Mi(_n.sichtbar),this.blende=new Oc(.25,.3),this.letzter=null}zuruecksetzen(){this.pos.zuruecksetzen(),this.rot.zuruecksetzen(),this.ppm.zuruecksetzen(),this.sicht.zuruecksetzen()}filtere(e,t,n){let i=this.pos.filtere(e.position,t,n).clone(),r=this.rot.filtere(e.quaternion,t).clone(),a=e.pxProMm>0||!this.letzter?Math.exp(this.ppm.filtere(Math.log(Math.max(e.pxProMm,1e-6)),t)):this.letzter.pxProMm,o=e.sichtbar==null?1:e.sichtbar,l=Math.min(1,Math.max(0,this.sicht.filtere(o,t)));return this.letzter={position:i,quaternion:r,pxProMm:a,sichtbarRoh:l},this.letzter}};function _f(){return{format:null,punkte:{},puffer:{},vektoren:{},anker:{},masse:{},zuletztGefunden:-1/0,zuletztT:null,leitpunkt:null,sprungKandidat:null,haendigkeit:0,letztes:null,hinweisAktiv:null,hinweisKandidat:null,hinweisSeit:0,frontalSeit:null,kopfDrehenGezeigt:0,kopfDrehung:null,takt:0,roh:{},unterarm:null}}var $c=class{constructor(e,{konfig:t,onFortschritt:n}={}){if(!qc[e])throw new Error(`Unbekannte Schmuckart: ${e}`);this.art=e,this.konfig=t||typeof window<"u"&&window.AnprobeKonfig||{},this.onFortschritt=n,this.erkenner=null,this.index=null,this.netz=null,this.schwerkraft=new T(0,-1,0),this.mitPunkten=this.konfig.debug!==!1,this.z=_f()}async laden(){let e=await jd(qc[this.art],this.konfig,this.onFortschritt);return this.erkenner=e,qc[this.art].includes("gesicht")&&(this.index=c0(e.mp.FaceLandmarker.FACE_LANDMARKS_TESSELATION)),this.art==="ohrringe"&&!this.handZusatzLaden&&this.konfig.handVerdeckung!==!1&&this.konfig.modelle&&this.konfig.modelle.hand&&(this.handZusatzLaden=jd(["hand"],this.konfig).then(t=>{this.handZusatz=t.hand},()=>{})),this}zuruecksetzen(){this.z=_f()}dispose(){this.erkenner=null,this.z=_f()}static entladeAlles(){return Zg()}verarbeite(e,t,{W:n,H:i,spiegel:r=!1,sparen:a=!1}){if(!this.erkenner)throw new Error("Tracker: zuerst laden()");let o=t==null,l=`${n}x${i}${r?"s":""}`;(o||this.z.format!==l)&&this.zuruecksetzen(),this.z.format=l;let c=o?0:t/1e3,h=o?0:this.z.zuletztT==null?1/30:Math.max(0,c-this.z.zuletztT);this.z.zuletztT=c;let d={};this.z.takt++,this.erkenner.hand&&this.erkenner.hand.setzeHaende&&this.erkenner.hand.setzeHaende(1);for(let p of qc[this.art]){let x=this.z.roh[p];if(!o&&a&&p==="koerper"&&this.z.takt%2===1&&x&&c-x.t>=0&&c-x.t<dE){d[p]=x.e;continue}d[p]=this.erkenner[p].erkenne(e,t),o||(this.z.roh[p]={e:d[p],t:c})}if(this.art==="ohrringe"&&this.handZusatz&&this.handZusatz.task){let p=this.z.roh.hand;o||!p||this.z.takt%(a?4:3)===0?(this.handZusatz.setzeHaende(2),d.hand=this.handZusatz.erkenne(e,t),o||(this.z.roh.hand={e:d.hand,t:c})):c-p.t>=0&&c-p.t<pE&&(d.hand=p.e)}let u={W:n,H:i,spiegel:r,einzel:o,t:c,quelle:e},f=null;return this.art==="ring"||this.art==="armband"?f=this.misseHand(d.hand,u):this.art==="ohrringe"?f=this.misseGesicht(d.gesicht,u,d.hand):f=this.misseKette(d.gesicht,d.koerper,u),this.ergebnisBauen(f,u,h)}rohpunkte(e,t,n){let i=Qd(t,n.W,n.H,n.spiegel,this.z.puffer[e]);return this.z.puffer[e]=i,i}filterePunkte(e,t,n,i,r=_n.punkte){let a=t;if(!n.einzel){let l=this.z.punkte[e];(!l||l.dim!==t.length)&&(l=this.z.punkte[e]=new ho(t.length,r)),a=l.filtere(t,n.t,i)}let o=ef(a,this.z.vektoren[e]);return this.z.vektoren[e]=o,o}pruefeSprung(e,t){if(t.einzel)return"ok";let n=this.z,i=t.t-n.zuletztGefunden>y0;if(!n.leitpunkt||i)return n.sprungKandidat=null,"neu";if(Math.hypot(e.x-n.leitpunkt.x,e.y-n.leitpunkt.y)<=lE*t.W)return n.sprungKandidat=null,"ok";let a=n.sprungKandidat;return a&&Math.hypot(e.x-a.x,e.y-a.y)<cE*t.W?(n.sprungKandidat=null,"neu"):(n.sprungKandidat={x:e.x,y:e.y},"verwerfen")}filterNeu(){for(let e of Object.values(this.z.punkte))e.zuruecksetzen();for(let e of Object.values(this.z.anker))e.zuruecksetzen();for(let e of Object.values(this.z.masse))e.zuruecksetzen();this.z.kopfDrehung&&this.z.kopfDrehung.zuruecksetzen()}unterarmWinkel(e,t){this.unterarm||(this.unterarm=new Vc);let n=this.z,i=n.unterarm,r=null;if(!t.einzel&&i&&t.t-i.t>=0&&t.t-i.t<fE)r=i.roh;else{try{let h=rf(e);r=this.unterarm.schaetze(t.quelle,e,h,Vi.quer,t),r&&(r.ppm=h)}catch{r=null}t.einzel||(n.unterarm={t:t.t,roh:r})}if(t.einzel)return{winkel:r?r.winkel*r.guete:0,roh:r};let a=n.masse["arm.winkel"]||(n.masse["arm.winkel"]=new Mi(_n.unterarm)),o=a.letzterWert!=null?a.letzterWert:0,l=r?o+(r.winkel-o)*r.guete:o*.9,c=a.filtere(l,t.t);return a.letzterWert=c,{winkel:c,roh:r}}armMessung(e,t){let n=e&&e.arm;if(t.einzel)return n?{breite:n.halbBreitePx/(Vi.quer*e.ppm),versatz:n.versatzPx/(Vi.quer*e.ppm)}:null;let i=this.z,r=i.masse["arm.breite"]||(i.masse["arm.breite"]=new Mi(_n.unterarm)),a=i.masse["arm.versatz"]||(i.masse["arm.versatz"]=new Mi(_n.unterarm)),o=r.letzterWert!=null?r.letzterWert:1,l=a.letzterWert!=null?a.letzterWert:0,c=o+(1-o)*.05,h=l*.95;if(n){let d=Vi.quer*e.ppm;c=o+(n.halbBreitePx/d-o)*n.guete,h=l+(n.versatzPx/d-l)*n.guete}return r.letzterWert=r.filtere(c,t.t),a.letzterWert=a.filtere(h,t.t),{breite:r.letzterWert,versatz:a.letzterWert}}misseHand(e,t){if(!e||!e.landmarks||!e.landmarks.length)return null;let n=this.rohpunkte("hand",e.landmarks[0],t),i={x:n[0],y:n[1]},r=this.pruefeSprung(i,t);if(r==="verwerfen")return null;r==="neu"&&this.filterNeu();let a=Math.max(1,Math.hypot(n[27]-n[0],n[28]-n[1])),o=this.filterePunkte("hand",n,t,a),l=e.handedness&&e.handedness[0]&&e.handedness[0][0],c=e.worldLandmarks&&e.worldLandmarks[0],h=c&&c.length===21?c.map(_=>new T(t.spiegel?-_.x:_.x,-_.y,-_.z).multiplyScalar(1e3)):null,d=af(l,o,h,t.spiegel);(t.einzel||t.t-this.z.zuletztGefunden>hE)&&(this.z.haendigkeit=0),this.z.haendigkeit=b0(this.z.haendigkeit*.95+d,8);let u=this.z.haendigkeit>=0,f=0,p=null;if(this.art==="armband"){let _=this.unterarmWinkel(o,t);f=_.winkel,p=this.armMessung(_.roh,t)}let x=of(o,{W:t.W,H:t.H,spiegel:t.spiegel,rechts:u,armWinkel:f,armMessung:p}),g=this.art==="ring"?Object.fromEntries(Yr.map(_=>[`ring.${_}`,x.anker.ring[_]])):{armband:x.anker.armband},m=this.art==="ring"?Object.fromEntries(Yr.map(_=>[`fingerRadiusPx.${_}`,x.masse.fingerRadiusPx[_]])):{"handgelenkRadienPx.quer":x.masse.handgelenkRadienPx.quer,"handgelenkRadienPx.tiefe":x.masse.handgelenkRadienPx.tiefe};return{leit:o[0],groesse:a,anker:g,masse:m,verdecker:x.verdecker,schatten:this.art==="ring"?x.schatten.ring:x.schatten.armband,hinweisCode:i0(o,x,{W:t.W,H:t.H,art:this.art}),debug:{punkte2d:this.mitPunkten?o.map(_=>({x:_.x,y:_.y})):[],rechts:u,haendigkeitRoh:l?`${l.categoryName} ${(l.score||0).toFixed(2)}`:null,haendigkeit:+d.toFixed(2),rueckenZurKamera:x.info.rueckenZurKamera,kBreite:x.info.kBreite,armWinkelGrad:Math.round(f*1800/Math.PI)/10,armBreite:p?+p.breite.toFixed(3):null,armVersatz:p?+p.versatz.toFixed(3):null}}}gesichtsPunkte(e,t,{pruefen:n=!0}={}){if(!e||!e.faceLandmarks||!e.faceLandmarks.length)return null;let i=e.faceLandmarks[0];if(i.length<468)return null;let r=this.rohpunkte("gesicht",i,t);if(n){let d=this.pruefeSprung({x:r[3],y:r[4]},t);if(d==="verwerfen")return null;d==="neu"&&this.filterNeu()}let a=Math.max(1,Math.hypot(r[702]-r[454*3],r[703]-r[454*3+1])),o=this.filterePunkte("gesicht",r,t,a),l=pf(o),c=this.filtereMass("gesicht.ppm",l,t,_n.massstab);this.index&&!this.netz&&(this.netz=yE(this.index,o,t.spiegel));let h=this.kopfAchsen(e,t);return{P:o,ppm:c,ppmRoh:l,groesse:a,achsen:h}}kopfAchsen(e,t){let n=e.facialTransformationMatrixes&&e.facialTransformationMatrixes[0],i=h0(n&&n.data,t.spiegel);if(!i||t.einzel)return i;this.z.kopfDrehung||(this.z.kopfDrehung=new uo(_n.punkteDrehung));let r=this.z.kopfDrehung.filtere(bi(i),t.t);return{x:new T(1,0,0).applyQuaternion(r),y:new T(0,1,0).applyQuaternion(r),z:new T(0,0,1).applyQuaternion(r)}}handVerdeckerAmKopf(e,t,n,i){let r=e&&e.landmarks||[],a=[];if(!n.length)return a;let o=-1/0;for(let l of n)o=Math.max(o,l.position.z);return o+=mE*i,r.forEach((l,c)=>{if(!l||l.length!==21)return;let h=ef(Qd(l,t.W,t.H,t.spiegel)),d=1/0;for(let x of n)for(let g of h)d=Math.min(d,Math.hypot(g.x-x.position.x,g.y-x.position.y));if(d>120*i)return;let u=e.handedness&&e.handedness[c]&&e.handedness[c][0],f=af(u,h,null,t.spiegel)>=0,p=of(h,{W:t.W,H:t.H,spiegel:t.spiegel,rechts:f});for(let x of p.verdecker){let g=ME(x,o,gE);g&&a.push(g)}}),a}misseGesicht(e,t,n=null){let i=this.gesichtsPunkte(e,t);if(!i)return null;let r=this.netz?t.spiegel?this.netz.cw:this.netz.ccw:null,a=d0(i.P,{W:t.W,H:t.H,spiegel:t.spiegel,index:r,ppm:i.ppm,achsen:i.achsen,einzel:t.einzel}),o=n?this.handVerdeckerAmKopf(n,t,[a.anker.ohrL,a.anker.ohrR],i.ppm):[],l=f0(i.P,a.rahmen,t);if(!l&&!t.einzel){let c=Math.abs(a.info.gierGrad)<xE;c?this.z.frontalSeit==null&&(this.z.frontalSeit=t.t):this.z.frontalSeit=null,c&&t.t-this.z.frontalSeit>_E&&this.z.kopfDrehenGezeigt<vE&&(l="kopf-drehen")}return{leit:i.P[1],groesse:i.groesse,anker:{ohrL:a.anker.ohrL,ohrR:a.anker.ohrR},masse:{},verdecker:o.length?[...a.verdecker,...o]:a.verdecker,schatten:a.schatten,hinweisCode:l,debug:{punkte2d:this.mitPunkten?i.P.map(c=>({x:c.x,y:c.y})):[],gierGrad:a.info.gierGrad,nickGrad:a.info.nickGrad,ppmRoh:i.ppmRoh,ohrBezug:{L:a.anker.ohrL.bezug,R:a.anker.ohrR.bezug},handVerdecker:o.length}}}misseKette(e,t,n){let i=t&&t.landmarks&&t.landmarks.length,r=e&&e.faceLandmarks&&e.faceLandmarks.length;if(!i&&!r)return null;if(!i)return{nurHinweis:!0,hinweisCode:"schultern"};let a=t.landmarks[0],o=this.rohpunkte("koerper",a,n),l={x:(o[33]+o[36])/2,y:(o[34]+o[37])/2},c=this.pruefeSprung(l,n);if(c==="verwerfen")return null;c==="neu"&&this.filterNeu();let h=Math.max(1,Math.hypot(o[33]-o[36],o[34]-o[37])),d=null,u=r?this.gesichtsPunkte(e,n,{pruefen:!1}):null;u&&Math.hypot(o[0]-u.P[1].x,o[1]-u.P[1].y)<.6*u.groesse+.1*h&&(d={P:u.P,rahmen:ff(u.P,n.spiegel,u.achsen),ppm:u.ppm});let f=d?u0(d.rahmen,d.ppm):null,p=this.filtereKoerper(o,n,h,f),x=t.worldLandmarks&&t.worldLandmarks[0],g=x?x.map(S=>new T(n.spiegel?-S.x:S.x,-S.y,-S.z).multiplyScalar(1e3)):null,m={P:p,welt:g,sichtbarkeit:a.map(S=>S.visibility==null?1:S.visibility)};if(!gf(m,n.W,n.H))return{nurHinweis:!0,hinweisCode:"schultern"};let _=xf(m,n.spiegel);n.einzel||(this.z.masse["koerper.tiefe"]||(this.z.masse["koerper.tiefe"]=new Mi(_n.koerperDrehung)),_=this.z.masse["koerper.tiefe"].filtere(_,n.t)),_=b0(uE*_,.4);let y=this.netz?n.spiegel?this.netz.cw:this.netz.ccw:null,v=d?null:this.filtereMass("koerper.ppm",x0(m,n.spiegel),n,_n.massstab),b=_0(m,d,{W:n.W,H:n.H,spiegel:n.spiegel,ppm:v,index:y,einzel:n.einzel,schulterTiefe:_});return d&&(b.info.schulterMm<170||b.info.schulterMm>450)?{nurHinweis:!0,hinweisCode:"schultern"}:{leit:{x:(p[11].x+p[12].x)/2,y:(p[11].y+p[12].y)/2},groesse:h,anker:{kette:b.anker},masse:{halsRadiusMm:b.halsRadiusMm},verdecker:b.verdecker,schatten:b.schatten,hinweisCode:v0(m,b,n),debug:{punkte2d:this.mitPunkten?p.map(S=>({x:S.x,y:S.y})):[],gesicht2d:d&&this.mitPunkten?d.P.map(S=>({x:S.x,y:S.y})):null,drosselgrube:b.anker.position.clone(),drehpunkt:f,schulterMitte:{x:(p[11].x+p[12].x)/2,y:(p[11].y+p[12].y)/2},kinn:d?{x:d.P[152].x,y:d.P[152].y}:null,schulterMm:b.info.schulterMm,schulterTiefe:b.info.schulterTiefe}}}filtereKoerper(e,t,n,i){if(t.einzel)return this.filterePunkte("koerper",e,t,n);if(!i)return this.filterePunkte("koerper",e,t,n,_n.koerperPunkte);let r=this.z.puffer.koerperRel;(!r||r.length!==e.length)&&(r=this.z.puffer.koerperRel=new Float64Array(e.length));for(let o=0;o<e.length;o+=3)r[o]=e[o]-i.x,r[o+1]=e[o+1]-i.y,r[o+2]=e[o+2];let a=this.filterePunkte("koerperRel",r,t,n,_n.koerperRelativ);for(let o of a)o.x+=i.x,o.y+=i.y;return a}filtereMass(e,t,n,i,r){let a=t??(r?r():null);if(!(a>0)||n.einzel)return a;let o=this.z.masse[e];return o||(o=this.z.masse[e]=new Mi(i)),Math.exp(o.filtere(Math.log(a),n.t))}ergebnisBauen(e,t,n){let i=this.z,r=e&&!e.nurHinweis,a=null;if(r){i.zuletztGefunden=t.t,i.leitpunkt={x:e.leit.x,y:e.leit.y};let d={};for(let[f,p]of Object.entries(e.anker))t.einzel?d[f]={position:p.position.clone(),quaternion:p.quaternion.clone(),pxProMm:p.pxProMm,sichtbarRoh:p.sichtbar==null?1:p.sichtbar}:(i.anker[f]||(i.anker[f]=new vf),d[f]=i.anker[f].filtere(p,t.t,e.groesse));let u={};for(let[f,p]of Object.entries(e.masse))u[f]=this.filtereMass(`m.${f}`,p,t,_n.masse);i.letztes={anker:d,masse:u,verdecker:e.verdecker,schatten:e.schatten,debug:e.debug},a=e.hinweisCode}else e&&e.nurHinweis&&(a=e.hinweisCode);let o=!r&&!t.einzel&&t.t-i.zuletztGefunden<=y0,l=r||o;!l&&!a&&(a=this.art==="ohrringe"||this.art==="kette"?"gesicht-zeigen":"hand-zeigen"),o&&(a=i.hinweisAktiv);let c={gefunden:l,hinweis:null,anker:{},masse:{},verdecker:[],schattenflaechen:[],schwerkraft:this.schwerkraft.clone(),debug:{punkte2d:[]}},h=i.letztes;if(h){let d=!1;for(let[u,f]of Object.entries(h.anker)){let p=1;if(t.einzel)l||(p=0);else{let m=i.anker[u];p=m?m.blende.schritt(l?1:0,n):0}let x=p*(f.sichtbarRoh==null?1:f.sichtbarRoh);if(p<=0)continue;d=!0;let g={position:f.position.clone(),quaternion:f.quaternion.clone(),pxProMm:f.pxProMm,sichtbar:x};u.startsWith("ring.")?(c.anker.ring=c.anker.ring||{},c.anker.ring[u.slice(5)]=g):c.anker[u]=g}if(d){for(let[u,f]of Object.entries(h.masse)){let[p,x]=u.split(".");x?(c.masse[p]=c.masse[p]||{},c.masse[p][x]=f):c.masse[p]=f}c.verdecker=h.verdecker,c.schattenflaechen=h.schatten||[],c.debug={...h.debug}}}return!r&&c.debug&&(c.debug.gehalten=o),c.hinweis=this.hinweisEntprellen(a,t,n),c}hinweisEntprellen(e,t,n){let i=this.z;if(t.einzel)i.hinweisAktiv=e;else{e!==i.hinweisKandidat&&(i.hinweisKandidat=e,i.hinweisSeit=t.t);let a=e?M0:M0*.6;i.hinweisAktiv!==e&&t.t-i.hinweisSeit>=a&&(i.hinweisAktiv=e),i.hinweisAktiv==="kopf-drehen"&&(i.kopfDrehenGezeigt+=n)}let r=i.hinweisAktiv;return r?this.art==="ring"||this.art==="armband"?n0(r):this.art==="ohrringe"?df(r):m0(r)||df(r):null}};function ME(s,e,t=1){return s.typ==="kapsel"?{...s,a:s.a.clone().setZ(e),b:s.b.clone().setZ(e),r:s.r*t}:s.typ==="ellipsenzylinder"?{...s,a:s.a.clone().setZ(e),b:s.b.clone().setZ(e),rQuer:s.rQuer*t,rTiefe:s.rTiefe*t}:null}function b0(s,e){return s>e?e:s<-e?-e:s}var _s=new _e,po=new $e,yf=new T,Zr=new T,Gi=new T,S0=new T,Ws=new T,Kc=new T,bE=new T(0,1,0),jr=null,Zc=null,Yc=0;function SE(){return jr||(jr=new pn(1,1,1,24,1,!1),Zc=new Li(1,24,16)),Yc++,{zylinderGeo:jr,kugelGeo:Zc}}function EE(){Yc--,Yc<=0&&jr&&(jr.dispose(),Zc.dispose(),jr=Zc=null,Yc=0)}function Mf({doppelseitig:s=!1}={}){let e=new Gt({colorWrite:!1,depthWrite:!0,depthTest:!0});return e.side=s?sn:Un,e.name="verdecker",e}var mo=class{constructor(e,{kapazitaet:t=48,name:n="primitive",schatten:i=!1,netzMaterial:r=null,renderOrder:a=0}={}){this.material=e,this.netzMaterial=r||e,this.schatten=i,this.renderOrder=a,this.objekt=new De,this.objekt.name=n;let{zylinderGeo:o,kugelGeo:l}=SE();this.zylinderGeo=o,this.kugelGeo=l,this.zylinder=null,this.kugeln=null,this.baueInstanzen(t,t*2),this.netze=[],this.skala=1}baueInstanzen(e,t){for(let n of[this.zylinder,this.kugeln])n&&(this.objekt.remove(n),n.dispose());this.zylinder=this.instanz(this.zylinderGeo,e,"zylinder"),this.kugeln=this.instanz(this.kugelGeo,t,"kugeln")}instanz(e,t,n){let i=new Wt(e,this.material,t);return i.name=n,i.count=0,i.frustumCulled=!1,i.instanceMatrix.setUsage(vc),i.receiveShadow=this.schatten,i.castShadow=!1,i.renderOrder=this.renderOrder,this.objekt.add(i),i}netzMesh(e){let t=this.netze[e];if(!t){let n=new tt;t=new Xe(n,this.netzMaterial),t.name=`netz${e}`,t.frustumCulled=!1,t.receiveShadow=this.schatten,t.renderOrder=this.renderOrder,t.userData.index=null,this.netze.push(t),this.objekt.add(t)}return t}aktualisiere(e,t=1){let n=Array.isArray(e)?e:[],i=0,r=0;for(let c of n)c&&(c.typ==="kapsel"?(i++,r+=2):c.typ==="ellipsenzylinder"?i++:c.typ==="ellipsoid"&&r++);(i>this.zylinder.instanceMatrix.count||r>this.kugeln.instanceMatrix.count)&&this.baueInstanzen(Math.max(i,this.zylinder.instanceMatrix.count)*2,Math.max(r,this.kugeln.instanceMatrix.count)*2);let a=0,o=0,l=0;for(let c of n)if(c)switch(c.typ){case"kapsel":{let h=c.r*t;yf.subVectors(c.b,c.a);let d=yf.length();d>1e-6&&(po.setFromUnitVectors(bE,yf.divideScalar(d)),Kc.addVectors(c.a,c.b).multiplyScalar(.5),_s.compose(Kc,po,Ws.set(h,d,h)),this.zylinder.setMatrixAt(a++,_s)),po.identity(),Ws.set(h,h,h),this.kugeln.setMatrixAt(o++,_s.compose(c.a,po,Ws)),this.kugeln.setMatrixAt(o++,_s.compose(c.b,po,Ws));break}case"ellipsenzylinder":{Gi.subVectors(c.b,c.a);let h=Gi.length();if(h<1e-6)break;Gi.divideScalar(h),Zr.copy(c.quer).addScaledVector(Gi,-c.quer.dot(Gi)),Zr.lengthSq()<1e-10&&Zr.set(1,0,0).addScaledVector(Gi,-Gi.x),Zr.normalize(),S0.crossVectors(Zr,Gi),_s.makeBasis(Zr,Gi,S0).scale(Ws.set(c.rQuer*t,h,c.rTiefe*t)),Kc.addVectors(c.a,c.b).multiplyScalar(.5),_s.setPosition(Kc),this.zylinder.setMatrixAt(a++,_s);break}case"ellipsoid":{Ws.copy(c.radien).multiplyScalar(t),this.kugeln.setMatrixAt(o++,_s.compose(c.mitte,c.quaternion,Ws));break}case"netz":{if(!c.positionen||!c.index)break;let h=this.netzMesh(l++),d=h.geometry,u=d.getAttribute("position");(!u||u.array.length!==c.positionen.length)&&(u=new bt(new Float32Array(c.positionen.length),3),u.setUsage(vc),d.setAttribute("position",u)),u.array.set(c.positionen),u.needsUpdate=!0,h.userData.index!==c.index&&(d.setIndex(new bt(c.index,1)),h.userData.index=c.index),h.visible=!0;break}default:break}this.zylinder.count=a,this.kugeln.count=o,this.zylinder.instanceMatrix.needsUpdate=a>0,this.kugeln.instanceMatrix.needsUpdate=o>0,this.zylinder.visible=a>0,this.kugeln.visible=o>0;for(let c=l;c<this.netze.length;c++)this.netze[c].visible=!1;this.anzahl=a+o+l}leeren(){this.aktualisiere(null)}dispose(){this.zylinder.dispose(),this.kugeln.dispose();for(let e of this.netze)e.geometry.dispose();this.netze.length=0,this.objekt.clear(),this.zylinderGeo&&(this.zylinderGeo=this.kugelGeo=null,EE())}},wE=`
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
`,E0=new WeakSet,jc=class{constructor({radiusPx:e=2.5,toleranzPx:t=1.5,tiefenBereich:n=2e4}={}){this.radiusPx=e,this.toleranzPx=t,this.tiefenBereich=n,this.uniforms={verdeckTiefe:{value:null},verdeckParam:{value:new Je(0,e,t/n,0)},verdeckAufloesung:{value:new re(1,1)}},this.ziel=null,this.aktiv=!1}bereite(e,t){if(e=Math.max(1,Math.round(e)),t=Math.max(1,Math.round(t)),this.ziel)(this.ziel.width!==e||this.ziel.height!==t)&&this.ziel.setSize(e,t);else{let n=new Nn(e,t);n.type=gn,this.ziel=new Vt(e,t,{depthBuffer:!0,depthTexture:n,type:rn,generateMipmaps:!1}),this.ziel.texture.name="verdeckFarbe"}this.uniforms.verdeckTiefe.value=this.ziel.depthTexture,this.uniforms.verdeckAufloesung.value.set(e,t)}setzeAktiv(e){this.aktiv=!!e,this.uniforms.verdeckParam.value.x=this.aktiv?1:0}setzeRadius(e){this.uniforms.verdeckParam.value.y=Math.max(.5,e)}patche(e){if(!e||E0.has(e))return e;let t=e.onBeforeCompile,n=e.customProgramCacheKey(),i=this.uniforms;return e.onBeforeCompile=function(r,a){t&&t.call(this,r,a),Object.assign(r.uniforms,i);let o=r.fragmentShader;if(!o.includes("#include <tonemapping_fragment>")||!o.includes("void main() {")){console.warn("[render] weiche Verdeckung: Shader-Stelle fehlt in",e.type);return}o=o.replace("void main() {",`${wE}
void main() {`),o=o.replace("#include <tonemapping_fragment>",`gl_FragColor.a *= verdeckSicht();
	#include <tonemapping_fragment>`),r.fragmentShader=o},e.customProgramCacheKey=()=>`${n}|verdeck1`,E0.add(e),e.needsUpdate=!0,e}dispose(){this.ziel&&(this.ziel.depthTexture.dispose(),this.ziel.dispose(),this.ziel=null),this.uniforms.verdeckTiefe.value=null}};var Jc=class extends jn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new zn;e.deleteAttribute("uv");let t=new Jn({side:zt}),n=new Jn,i=new Ns(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Xe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Wt(e,n,6),o=new xt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Xe(e,Jr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Xe(e,Jr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Xe(e,Jr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Xe(e,Jr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Xe(e,Jr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Xe(e,Jr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Jr(s){return new ka({color:0,emissive:16777215,emissiveIntensity:s})}var bf={hoch:{studioGroesse:128,raumGroesse:128,intervall:.5},mittel:{studioGroesse:128,raumGroesse:128,intervall:1},niedrig:{studioGroesse:128,raumGroesse:0,intervall:1/0}},Sf=.26,TE=.85,w0=.36,AE=`
varying vec3 vRichtung;
void main() {
  vRichtung = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,RE=`
uniform sampler2D karte;
uniform float mischung;
uniform float staerke;
uniform vec3 grau;
uniform vec3 boden;
varying vec3 vRichtung;
void main() {
  vec3 d = normalize(vRichtung);
  vec2 uv = vec2(0.5 + 0.47 * d.x, 0.5 + 0.47 * d.y);
  vec3 bild = texture2D(karte, uv).rgb;
  float oben = smoothstep(-0.6, 1.0, d.y);
  vec3 studio = grau * mix(0.35, 1.25, oben);
  // Bildfarben nach oben etwas aufhellen (Raumlicht kommt meist von oben)
  vec3 raum = bild * staerke * mix(0.75, 1.3, oben);
  // Mindesthelligkeit: Metall zeigt nur, was es spiegelt. Ohne Boden kippt Gold
  // vor dunkler Kleidung ins Kupferne und flache Anhaenger werden braun.
  vec3 farbe = max(mix(studio, raum, mischung), boden * mix(0.6, 1.2, oben));
  gl_FragColor = vec4(farbe, 1.0);
}
`,Qc=class{constructor(e,{qualitaet:t="hoch",mischung:n=.62}={}){this.mischungHell=n,this.renderer=e,this.einstellung=bf[t]||bf.hoch,this.pmrem=new Br(e),this.studio=new Jc,this.studioZiel=this.pmrem.fromScene(this.studio,.04,.1,100,{size:this.einstellung.studioGroesse}),this.raumZiel=null,this.uhr=0,this.faellig=!1,this.kameraAn=this.einstellung.raumGroesse>0,this.lichtFaktor=1,this.lichtFarbe=new Se(1,1,1),this.baueRaumSzene(n)}get textur(){return(this.raumZiel||this.studioZiel).texture}baueRaumSzene(e){this.raumSzene=new jn,this.karte=null,this.kugelMaterial=new Yt({vertexShader:AE,fragmentShader:RE,uniforms:{karte:{value:null},mischung:{value:e},staerke:{value:1.15},grau:{value:new Se(.55,.55,.55)},boden:{value:new Se(Sf,Sf,Sf)}},side:zt,depthWrite:!1}),this.kugel=new Xe(new Li(40,32,16),this.kugelMaterial),this.kugel.renderOrder=-1,this.raumSzene.add(this.kugel),this.studio.updateMatrixWorld(!0),this.flaechen=[],this.studio.traverse(t=>{if(!t.isMesh||!t.material||!t.material.isMeshLambertMaterial)return;let n=t.material.emissiveIntensity,i=new Gt({color:new Se(n,n,n),toneMapped:!1}),r=new Xe(t.geometry,i);r.matrixAutoUpdate=!1,r.matrix.copy(t.matrixWorld),r.userData.staerke=n,this.raumSzene.add(r),this.flaechen.push(r)})}setzeQualitaet(e){this.einstellung=bf[e]||this.einstellung,this.setzeKameraAn(this.einstellung.raumGroesse>0),this.faellig=this.kameraAn}setzeKamerabild(e){this.karte&&this.karte.image===e||(this.karte&&this.karte.dispose(),this.karte=e?new Pi(e):null,this.karte&&(this.karte.colorSpace=vt,this.karte.minFilter=ot,this.karte.generateMipmaps=!1),this.kugelMaterial.uniforms.karte.value=this.karte)}setzeLicht(e,t){this.lichtFaktor=e,t&&this.lichtFarbe.copy(t)}setzeKameraAn(e){this.kameraAn=!!e&&this.einstellung.raumGroesse>0,!this.kameraAn&&this.raumZiel&&(this.raumZiel.dispose(),this.raumZiel=null)}aktualisiere(e,t=!0){!this.kameraAn||!this.karte||(this.uhr+=e,this.uhr>=this.einstellung.intervall&&t&&(this.faellig=!0))}erzeuge(){if(!this.kameraAn||!this.karte)return!1;this.faellig=!1,this.uhr=0,this.karte.needsUpdate=!0;let e=this.lichtFaktor,t=this.lichtFarbe,n=Math.max(TE,e);for(let c of this.flaechen){let h=c.userData.staerke*n;c.material.color.setRGB(h*(.5+.5*t.r),h*(.5+.5*t.g),h*(.5+.5*t.b))}let i=.5*e,r=this.kugelMaterial.uniforms;r.grau.value.setRGB(i*t.r,i*t.g,i*t.b);let a=Math.min(1,Math.max(0,(e-.6)/.4));r.mischung.value=w0+(this.mischungHell-w0)*a;let o=this.pmrem.fromScene(this.raumSzene,0,.1,100,{size:this.einstellung.raumGroesse}),l=this.raumZiel;return this.raumZiel=o,l&&l.dispose(),!0}dispose(){this.raumZiel?.dispose(),this.studioZiel?.dispose(),this.raumZiel=this.studioZiel=null,this.karte?.dispose(),this.kugel.geometry.dispose(),this.kugelMaterial.dispose();for(let e of this.flaechen)e.material.dispose();this.flaechen.length=0,this.studio.dispose(),this.pmrem.dispose()}};var Ef=.2126,wf=.7152,Tf=.0722,T0=.16,th=new Float32Array(256);for(let s=0;s<256;s++){let e=s/255;th[s]=e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function C0(s,e){if(typeof document<"u"){let t=document.createElement("canvas");return t.width=s,t.height=e,t}return new OffscreenCanvas(s,e)}var ih=class{constructor({breite:e=32,intervallSek:t=.2,tau:n=.9}={}){this.breite=e,this.hoehe=Math.round(e*.75),this.intervall=t,this.tau=n,this.canvas=C0(this.breite,this.hoehe),this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0,alpha:!1}),this.quelle=null,this.spiegel=!1,this.uhr=1/0,this.gemessen=!1,this.fehler=!1,this.luminanz=T0,this.faktor=1,this.farbe=new Se(1,1,1),this.version=0,this._roh=new Se}setzeQuelle(e,{W:t,H:n,spiegel:i=!1}={}){this.quelle=e,this.spiegel=!!i;let r=t||e?.videoWidth||e?.width||4,a=n||e?.videoHeight||e?.height||3,o=Math.max(8,Math.round(this.breite*a/r));o!==this.hoehe&&(this.hoehe=o,this.canvas.height=o),this.uhr=1/0,this.gemessen=!1,this.fehler=!1}aktualisiere(e){if(!this.quelle||this.fehler)return!1;if(this.uhr+=e,this.uhr<this.intervall)return this.glaette(e),!1;let t=Number.isFinite(this.uhr)?this.uhr:0;return this.uhr=0,this.messe()?(this.glaette(t,!0),this.version++,!0):!1}messe(){let e=this.quelle;if(e.readyState!==void 0&&e.readyState<2)return!1;let{ctx:t,breite:n,hoehe:i}=this;try{t.setTransform(this.spiegel?-1:1,0,0,1,this.spiegel?n:0,0),t.drawImage(e,0,0,n,i),t.setTransform(1,0,0,1,0,0);let r=t.getImageData(0,0,n,i).data,a=0,o=0,l=0,c=0;for(let h=0,d=r.length;h<d;h+=4){let u=th[r[h]],f=th[r[h+1]],p=th[r[h+2]],g=Ef*u+wf*f+Tf*p>.8?.3:1;a+=u*g,o+=f*g,l+=p*g,c+=g}return a/=c,o/=c,l/=c,this._roh.setRGB(a,o,l),this.gemessen=!0,!0}catch{return this.fehler=!0,!1}}glaette(e,t=!1){if(!this.gemessen)return;let n=this._roh,i=Math.max(1e-4,Ef*n.r+wf*n.g+Tf*n.b),r=this.version===0&&t?1:1-Math.exp(-e/this.tau);this.luminanz+=(i-this.luminanz)*r;let a=Math.min(1.35,Math.max(.45,Math.pow(this.luminanz/T0,.45)));this.faktor+=(a-this.faktor)*r;let o=.5+.5*n.r/i,l=.5+.5*n.g/i,c=.5+.5*n.b/i,h=Ef*o+wf*l+Tf*c;this.farbe.r+=(Math.min(1.6,o/h)-this.farbe.r)*r,this.farbe.g+=(Math.min(1.6,l/h)-this.farbe.g)*r,this.farbe.b+=(Math.min(1.6,c/h)-this.farbe.b)*r}dispose(){this.quelle=null,this.canvas.width=this.canvas.height=1}},A0=2.5,CE=`
uniform mat4 kontaktMatrix;
varying vec4 vKontakt;
`,kE=`
vec4 kontaktWelt = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
kontaktWelt = instanceMatrix * kontaktWelt;
#endif
vKontakt = kontaktMatrix * (modelMatrix * kontaktWelt);
`,IE=`
uniform sampler2D kontaktTiefe;
uniform vec4 kontaktParam; // x: 1/Kartengroesse, y: Radius (Texel), z: Tiefenbereich (px), w: Abklingweite (px)
uniform float kontaktAktiv;
varying vec4 vKontakt;
float kontaktSchatten() {
  if (kontaktAktiv < 0.5) return 0.0;
  vec3 k = vKontakt.xyz / vKontakt.w;
  if (k.x < 0.0 || k.y < 0.0 || k.x > 1.0 || k.y > 1.0 || k.z > 1.0) return 0.0;
  float drehung = 6.2831853 * fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
  float summe = 0.0;
  for (int i = 0; i < KONTAKT_TAPS; i++) {
    float r = sqrt((float(i) + 0.5) / float(KONTAKT_TAPS));
    float w = float(i) * 2.4 + drehung;
    vec2 o = vec2(cos(w), sin(w)) * r * kontaktParam.y * kontaktParam.x;
    float d = texture2D(kontaktTiefe, k.xy + o).r;
    float abstand = (k.z - d) * kontaktParam.z;
    // nur hinter dem Schmuck; nah = kraeftig, fern = verschwindet
    summe += step(0.0, abstand) * step(d, 0.99999) * exp(-max(abstand, 0.0) / kontaktParam.w);
  }
  return summe / float(KONTAKT_TAPS);
}
`,PE=new T,LE=new _e().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),sh=class{constructor({maxGroesse:e=1024,richtung:t=new T(-.22,.55,.8),staerke:n=.8,taps:i=12}={}){this.maxGroesse=e,this.richtung=t.clone().normalize(),this.grundStaerke=n,this.taps=i,this.licht=new zs(16777215,n),this.licht.name="kontaktlicht",this.licht.castShadow=!1,this.kamera=new Dn(-1,1,1,-1,1,100),this.groesse=256;let r=new Nn(this.groesse,this.groesse);r.type=gn,this.ziel=new Vt(this.groesse,this.groesse,{depthBuffer:!0,depthTexture:r,generateMipmaps:!1}),this.tiefenMaterial=new Gt({colorWrite:!1,side:sn}),this.uniforms={kontaktTiefe:{value:r},kontaktMatrix:{value:new _e},kontaktParam:{value:new Je(1/this.groesse,A0,100,6)},kontaktAktiv:{value:0}},this.weichMm=1.1,this.abklingMm=2.2,this.aktiv=!1,this.materialien=[]}fuegeHinzu(e){e.add(this.licht),e.add(this.licht.target)}setzeAktiv(e){this.aktiv=!!e,this.uniforms.kontaktAktiv.value=this.aktiv?1:0}material({farbe:e=2365198,deckkraft:t=.42}={}){let n=new Gt({color:e,transparent:!0,opacity:t,depthWrite:!1,toneMapped:!1});n.name="schattenflaeche",n.userData.grundDeckkraft=t;let i=this.uniforms,r=this.taps;return n.onBeforeCompile=a=>{Object.assign(a.uniforms,i),a.vertexShader=a.vertexShader.replace("void main() {",`${CE}
void main() {`).replace("#include <project_vertex>",`#include <project_vertex>
${kE}`),a.fragmentShader=a.fragmentShader.replace("void main() {",`#define KONTAKT_TAPS ${r}
${IE}
void main() {`).replace("#include <tonemapping_fragment>",`gl_FragColor.a *= kontaktSchatten();
	#include <tonemapping_fragment>`)},n.customProgramCacheKey=()=>`kontakt-${r}`,this.materialien.push(n),n}setzeBereich(e,t,n){let i=Math.max(4,t*1.1),r=i*2+10,a=this.kamera;a.position.copy(e).addScaledVector(this.richtung,r),a.up.set(0,1,0),a.lookAt(PE.copy(e)),a.left=-i,a.right=i,a.top=i,a.bottom=-i,a.near=1,a.far=r+i*4,a.updateProjectionMatrix(),a.updateMatrixWorld(),this.uniforms.kontaktMatrix.value.multiplyMatrices(LE,a.projectionMatrix).multiply(a.matrixWorldInverse);let o=Math.max(.75,this.weichMm*n),l=2*i*A0/o;if(l>this.groesse*1.45||l<this.groesse/1.45){let h=64;for(;h<l&&h<this.maxGroesse;)h*=2;h!==this.groesse&&(this.groesse=h,this.ziel.setSize(h,h))}let c=this.uniforms.kontaktParam.value;c.x=1/this.groesse,c.y=Math.min(8,Math.max(1,o*this.groesse/(2*i))),c.z=a.far-a.near,c.w=Math.max(1,this.abklingMm*n),this.licht.position.copy(e).addScaledVector(this.richtung,r),this.licht.target.position.copy(e),this.licht.target.updateMatrixWorld(),this.licht.updateMatrixWorld()}zeichne(e,t,n,i){if(!this.aktiv)return;n();let r=t.overrideMaterial;t.overrideMaterial=this.tiefenMaterial,e.setRenderTarget(this.ziel),e.clear(!0,!0,!1),e.render(t,this.kamera),e.setRenderTarget(null),t.overrideMaterial=r,i()}setzeLicht(e,t){this.licht.intensity=this.grundStaerke*e,t&&this.licht.color.copy(t)}dispose(){this.ziel.depthTexture.dispose(),this.ziel.dispose(),this.tiefenMaterial.dispose();for(let e of this.materialien)e.dispose();this.materialien.length=0,this.licht.dispose(),this.licht.removeFromParent(),this.licht.target.removeFromParent()}},vs=null,nh=0;function NE(){if(nh++,vs)return vs;let s=64,e=C0(s,s),t=e.getContext("2d"),n=t.createImageData(s,s);for(let i=0;i<s;i++)for(let r=0;r<s;r++){let a=(r+.5)/s*2-1,o=(i+.5)/s*2-1,l=Math.hypot(a,o),c=Math.exp(-l*l*60),h=Math.exp(-l*l*9)*.35,d=(m,_)=>Math.exp(-(_*_)*900)*Math.pow(Math.max(0,1-Math.abs(m)),2.2),u=(a+o)*.7071,f=(a-o)*.7071,p=d(a,o)+d(o,a)+.35*(d(u,f)+d(f,u)),x=Math.min(1,c+h+p*.9),g=(i*s+r)*4;n.data[g]=255,n.data[g+1]=255,n.data[g+2]=255,n.data[g+3]=Math.round(x*255)}return t.putImageData(n,0,0),vs=new Pi(e),vs.colorSpace=vt,vs}function zE(){nh--,nh<=0&&vs&&(vs.dispose(),vs=null,nh=0)}var eh=new T,R0=new _e,rh=class{constructor({anzahl:e=5,patch:t=null}={}){this.objekt=new De,this.objekt.name="funkeln",this.funken=[];let n=NE();for(let i=0;i<e;i++){let r=new Mr({map:n,color:new Se(1,.97,.9),transparent:!0,opacity:0,depthWrite:!1,depthTest:!0,blending:Fa,toneMapped:!1});t&&t(r);let a=new Ma(r);a.visible=!1,a.renderOrder=20,a.frustumCulled=!1,this.objekt.add(a),this.funken.push({sprite:a,t:0,dauer:.2,groesse:1,quelle:null,punkt:new T,instanz:-1})}this.quellen=[],this.aktiv=!0}setzeQuellen(e){this.quellen=e||[];for(let t of this.funken)t.sprite.visible=!1,t.quelle=null}aktualisiere(e,t=0){if(!this.aktiv||this.quellen.length===0){for(let i of this.funken)i.sprite.visible=!1;return}let n=(.18+1.8*Math.min(1,t))*Math.min(6,this.quellen.length);Math.random()<n*e&&this.entzuende(this.frei());for(let i of this.funken){if(!i.quelle)continue;i.t+=e;let r=i.quelle,a=r.deckkraft?r.deckkraft():1;if(i.t>=i.dauer||a<.05||!r.mesh.visible){i.quelle=null,i.sprite.visible=!1;continue}let o=i.t/i.dauer,l=Math.pow(Math.sin(Math.PI*o),2);eh.copy(i.punkt),i.instanz>=0&&r.mesh.isInstancedMesh&&(r.mesh.getMatrixAt(i.instanz,R0),eh.applyMatrix4(R0)),eh.applyMatrix4(r.mesh.matrixWorld);let c=r.mesh.matrixWorld.getMaxScaleOnAxis()*r.radius;i.sprite.position.copy(eh),i.sprite.position.z+=c*.6;let h=c*i.groesse*(.75+.25*l);i.sprite.scale.set(h,h,1),i.sprite.material.opacity=l*.85*a,i.sprite.visible=!0}}frei(){for(let e of this.funken)if(!e.quelle)return e;return null}entzuende(e){if(!e)return;let t=this.quellen[Math.floor(Math.random()*this.quellen.length)];if(!t||!t.mesh.visible||t.deckkraft&&t.deckkraft()<.5)return;let n=t.mesh.geometry.getAttribute("position");if(!n)return;let i=0,r=-1/0;for(let a=0;a<3;a++){let o=Math.floor(Math.random()*n.count),l=n.getY(o)+n.getZ(o);l>r&&(r=l,i=o)}e.punkt.fromBufferAttribute(n,i),e.instanz=t.mesh.isInstancedMesh?Math.floor(Math.random()*t.mesh.count):-1,e.quelle=t,e.t=0,e.dauer=.16+Math.random()*.14,e.groesse=1.6+Math.random()*1.4,e.sprite.material.rotation=Math.random()*Math.PI*.5}dispose(){for(let e of this.funken)e.sprite.material.dispose();this.funken.length=0,this.objekt.clear(),this.objekt.removeFromParent(),zE()}};var DE=9810,ah=Math.PI/180,Af={ohrringe:{schwerkraft:1,rueckstell:0,daempfung:3.2,maxWinkel:80*ah,traegheit:1},kette:{schwerkraft:.3,rueckstell:650,daempfung:22,maxWinkel:16*ah,traegheit:.35},armband:{schwerkraft:1,rueckstell:8,daempfung:4,maxWinkel:160*ah,traegheit:.9},ring:{schwerkraft:1,rueckstell:60,daempfung:4,maxWinkel:50*ah,traegheit:.8}},L0=1/120,oh=new T,lh=new T,dh=new T,Xs=new T,go=new T,Wi=new T,k0=new T,UE=new T,I0=new $e,ch=new T,hh=new T,uh=new T;function FE(s,e,t,n){let i=s.elements;e.set(i[0],i[1],i[2]).normalize(),t.set(i[4],i[5],i[6]).normalize(),n.set(i[8],i[9],i[10]).normalize()}function P0(s,e,t,n,i){return i.set(e.x*s.x+t.x*s.y+n.x*s.z,e.y*s.x+t.y*s.y+n.y*s.z,e.z*s.x+t.z*s.y+n.z*s.z)}function OE(s,e,t,n,i){return i.set(e.dot(s),t.dot(s),n.dot(s))}var Rf=class{constructor({tau:e=.07,maxMm:t=4e4}={}){this.tau=e,this.maxMm=t,this.a=new T,this.v=new T,this.p=new T,this.bereit=0}zuruecksetzen(){this.bereit=0,this.a.set(0,0,0),this.v.set(0,0,0)}messe(e,t,n){if(!(n>1e-4)||n>.25||!(t>0))return n>.25&&this.zuruecksetzen(),e&&this.p.copy(e),this.a;if(oh.subVectors(e,this.p).divideScalar(t*n),this.p.copy(e),this.bereit===0)return this.bereit=1,this.v.set(0,0,0),this.a;if(this.bereit===1)return this.bereit=2,this.v.copy(oh),this.a;lh.subVectors(oh,this.v).divideScalar(n),this.v.copy(oh);let i=lh.length();i>this.maxMm&&lh.multiplyScalar(this.maxMm/i);let r=1-Math.exp(-n/this.tau);return this.a.lerp(lh,r),this.a}},Cf=class{constructor({knoten:e,laengeMm:t=20,achse:n="frei"},i=Af.ohrringe){this.knoten=e,this.laenge=Math.max(2,t||20),this.profil=i,this.q0=e.quaternion.clone(),this.ruheLokal=new T(0,-1,0).applyQuaternion(this.q0).normalize(),this.achseLokal=n==="x"?new T(1,0,0).applyQuaternion(this.q0):n==="z"?new T(0,0,1).applyQuaternion(this.q0):null,this.u=new T(0,-1,0),this.w=new T,this.bereit=!1}zuruecksetzen(){this.bereit=!1,this.w.set(0,0,0),this.knoten.quaternion.copy(this.q0)}begrenze(e){let t=this.profil.maxWinkel,n=this.u.dot(e);if(n>=Math.cos(t))return;Wi.copy(this.u).addScaledVector(e,-n),Wi.lengthSq()<1e-10&&Wi.set(1,0,0).addScaledVector(e,-e.x),Wi.normalize(),this.u.copy(e).multiplyScalar(Math.cos(t)).addScaledVector(Wi,Math.sin(t)).normalize();let i=this.w.dot(Wi);i>0&&this.w.addScaledVector(Wi,-i),this.w.addScaledVector(this.u,-this.w.dot(this.u))}schritt(e,t,n){let i=this.knoten.parent;if(!i)return;let r=this.profil;FE(i.matrixWorld,ch,hh,uh),P0(this.ruheLokal,ch,hh,uh,Xs).normalize();let a=this.achseLokal?P0(this.achseLokal,ch,hh,uh,UE).normalize():null,o=DE*r.schwerkraft,l=this.laenge;if(!this.bereit)this.u.copy(t).multiplyScalar(o).addScaledVector(Xs,r.rueckstell*l),this.u.lengthSq()<1e-8&&this.u.copy(Xs),this.u.normalize(),a&&this.u.addScaledVector(a,-this.u.dot(a)).normalize(),this.w.set(0,0,0),this.begrenze(Xs),this.bereit=!0;else{let c=Math.min(8,Math.max(1,Math.ceil(e/L0))),h=e/c,d=Math.exp(-r.daempfung*h);for(let u=0;u<c;u++)go.copy(t).multiplyScalar(o).addScaledVector(n,-r.traegheit),r.rueckstell>0&&go.addScaledVector(dh.subVectors(Xs,this.u),r.rueckstell*l),go.addScaledVector(this.u,-go.dot(this.u)),this.w.addScaledVector(go,h).multiplyScalar(d),Wi.copy(this.u).multiplyScalar(l).addScaledVector(this.w,h),this.u.copy(Wi).normalize(),a&&(this.u.addScaledVector(a,-this.u.dot(a)),this.u.lengthSq()<1e-10&&this.u.copy(Xs),this.u.normalize(),this.w.addScaledVector(a,-this.w.dot(a))),this.w.addScaledVector(this.u,-this.w.dot(this.u)),this.begrenze(Xs)}OE(this.u,ch,hh,uh,k0).normalize(),I0.setFromUnitVectors(this.ruheLokal,k0),this.knoten.quaternion.multiplyQuaternions(I0,this.q0)}},fh=class{constructor(e,t="ohrringe"){let n=Af[t]||Af.ohrringe;this.pendel=(e||[]).filter(i=>i&&i.knoten).map(i=>new Cf(i,n)),this.bewegung=new Rf}get leer(){return this.pendel.length===0}zuruecksetzen(){this.bewegung.zuruecksetzen();for(let e of this.pendel)e.zuruecksetzen()}aktualisiere(e,t,n,i){let r=this.bewegung.messe(t,n,e);if(this.pendel.length===0||!(e>0))return;let a=Math.min(e,.1);for(let o of this.pendel)o.schritt(a,i,r),o.knoten.updateMatrixWorld(!0)}dispose(){for(let e of this.pendel)e.knoten.quaternion.copy(e.q0);this.pendel.length=0}},ph=class{constructor(e=14,t=.8){this.omega=e,this.zeta=t,this.x=new T,this.v=new T,this.bereit=!1}setze(e){this.x.copy(e),this.v.set(0,0,0),this.bereit=!0}schritt(e,t,n=null){if(!this.bereit)return this.setze(e),this.x;let i=Math.min(8,Math.max(1,Math.ceil(t/L0))),r=t/i,a=this.omega*this.omega,o=2*this.zeta*this.omega;for(let l=0;l<i;l++)dh.subVectors(e,this.x).multiplyScalar(a).addScaledVector(this.v,-o),n&&dh.add(n),this.v.addScaledVector(dh,r),this.x.addScaledVector(this.v,r);return this.x}};var xo={hoch:{pixelRatioMax:2,schatten:1024,weich:!0,funkeln:!0,umgebung:"hoch"},mittel:{pixelRatioMax:1.5,schatten:512,weich:!1,funkeln:!1,umgebung:"mittel"},niedrig:{pixelRatioMax:1.25,schatten:0,weich:!1,funkeln:!1,umgebung:"niedrig"}},BE=1e4,HE=.55,VE=9,N0=[.25,.3],z0=1,D0=2e4,GE=-9e3,WE=.35,XE=.25,qE=.12,$E=.22,KE=1.6,U0=55,YE=`
uniform vec4 uvTrafo;
varying vec2 vUv;
void main() {
  vUv = uv * uvTrafo.xy + uvTrafo.zw;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,ZE=`
uniform sampler2D karte;
varying vec2 vUv;
void main() {
  gl_FragColor = vec4(texture2D(karte, vUv).rgb, 1.0);
}
`,kf=new _e,F0=new _e,hn=new T,Xi=new T,O0=new T,qs=new T,If=new $e,Qr=new T,jE=new re,JE=new T(0,-1,0),ea=24,B0=new Float32Array(ea),H0=new Float32Array(ea);for(let s=0;s<ea;s++)B0[s]=Math.cos(s/ea*Math.PI*2),H0[s]=Math.sin(s/ea*Math.PI*2);var ys=(s,e,t)=>Math.min(t,Math.max(e,s)),Pf=s=>s*s*(3-2*s);function QE(s,e,t){return Pf(ys((t-s)/(e-s),0,1))}function ew(s,e){let t=[],n=e;for(;n&&n!==s;){if(!n.parent)return null;t.unshift(n.parent.children.indexOf(n)),n=n.parent}return n===s?t:null}function tw(s,e){let t=s;for(let n of e)t=t&&t.children[n];return t||null}function nw(s,e,t,n,i,r,a){for(let o=0;o<ea;o++){let l=(s*B0[o]-a*i)/t,c=(e*H0[o]-a*r)/n;if(l*l+c*c>1)return!1}return!0}var mh=class{constructor(e,{pixelRatio:t,qualitaet:n="hoch",tonemapping:i="aces"}={}){this.canvas=e,this.qualitaetName=xo[n]?n:"hoch",this.q=xo[this.qualitaetName],this.weichMoeglich=this.q.weich;let r=new Sc({canvas:e,antialias:!0,alpha:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance"}),a=t??(typeof window<"u"?window.devicePixelRatio:1)??1;this.pixelRatioWunsch=a||1,this.pixelRatio=Math.min(this.pixelRatioWunsch,this.q.pixelRatioMax,2),r.setPixelRatio(this.pixelRatio),r.outputColorSpace=vt,r.toneMapping=i==="agx"?rs:Oa,this.belichtungBasis=i==="agx"?1.35:1,r.toneMappingExposure=this.belichtungBasis,r.autoClear=!1,r.setClearColor(0,0),r.shadowMap.enabled=!1,this.renderer=r,this.verloren=!1,this.onKontextVerlust=null,this.beiKontextVerlust=o=>{o.preventDefault(),!this.entsorgt&&(this.verloren=!0,typeof this.onKontextVerlust=="function"&&this.onKontextVerlust())},e.addEventListener("webglcontextlost",this.beiKontextVerlust),this.kamera=new Dn(0,1,1,0,z0,D0),this.kamera.position.set(0,0,BE),this.kamera.updateMatrixWorld(),this.szeneHintergrund=new jn,this.szeneVerdecker=new jn,this.szene=new jn,this.hgMaterial=new Yt({vertexShader:YE,fragmentShader:ZE,uniforms:{karte:{value:null},uvTrafo:{value:new Je(1,1,0,0)}},depthTest:!1,depthWrite:!1,toneMapped:!1}),this.hintergrund=new Xe(new Ls(1,1),this.hgMaterial),this.hintergrund.frustumCulled=!1,this.hintergrund.visible=!1,this.szeneHintergrund.add(this.hintergrund),this.hgTextur=null,this.weich=new jc({tiefenBereich:D0-z0}),this.verdecker=new mo(Mf(),{name:"verdecker",netzMaterial:Mf({doppelseitig:!0})}),this.szeneVerdecker.add(this.verdecker.objekt),this.verdeckerSkala=1,this.umgebung=new Qc(r,{qualitaet:this.q.umgebung}),this.szene.environment=this.umgebung.textur,this.licht=new ih,this.umgebung.setzeKamerabild(this.licht.canvas),this.schatten=new sh({maxGroesse:this.q.schatten||256,taps:this.q.weich?12:8}),this.schatten.fuegeHinzu(this.szene),this.empfaengerMaterial=this.schatten.material(),this.empfaenger=new mo(this.empfaengerMaterial,{name:"schattenflaechen",renderOrder:5}),this.weichMoeglich&&this.weich.patche(this.empfaengerMaterial),this.szene.add(this.empfaenger.objekt),this.versteckeFuerSchatten=()=>{this.empfaenger.objekt.visible=!1,this.funkeln.objekt.visible=!1},this.zeigeNachSchatten=()=>{this.empfaenger.objekt.visible=!0,this.funkeln.objekt.visible=!0},this.lichtVersion=-1,this.belichtungZiel=this.belichtungBasis,this.funkeln=new rh({patch:this.weichMoeglich?o=>this.weich.patche(o):null}),this.funkeln.aktiv=this.q.funkeln,this.szene.add(this.funkeln.objekt),this.eintraege=[],this.finger="ring",this.anpassung={skala:1,versatz:new T},this.schwerkraft=new T(0,-1,0),this.quelle=null,this.ansicht={breite:e.clientWidth||e.width||1,hoehe:e.clientHeight||e.height||1,modus:"cover"},this.sicht={links:0,rechts:1,unten:0,oben:1,cssProPx:1},this.fokus=null,this.letztesDt=1/30,this.entsorgt=!1,this.setzeAnsicht(this.ansicht.breite,this.ansicht.hoehe,"cover")}setzeQuelle(e,{W:t,H:n,spiegel:i=!1,statisch:r=!1}={}){if(this.hgTextur&&(this.hgTextur.dispose(),this.hgTextur=null),!e){this.quelle=null,this.hintergrund.visible=!1;return}let a=typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement,o=typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas,l=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,c;a?c=new Aa(e):o?c=new Pi(e):(c=new Et(e),c.needsUpdate=!0),c.colorSpace=Tn,c.minFilter=ot,c.magFilter=ot,c.generateMipmaps=!1,l&&(c.flipY=!1),this.hgTextur=c,t=t||e.videoWidth||e.naturalWidth||e.width,n=n||e.videoHeight||e.naturalHeight||e.height,this.quelle={element:e,W:t,H:n,spiegel:!!i,art:a?"video":o?"canvas":"bild",statisch:!!r};let h=this.hgMaterial.uniforms;h.karte.value=c,h.uvTrafo.value.set(i?-1:1,l?-1:1,i?1:0,l?1:0),this.hintergrund.scale.set(t,n,1),this.hintergrund.position.set(t/2,n/2,GE),this.hintergrund.visible=!0,this.licht.setzeQuelle(e,{W:t,H:n,spiegel:i});for(let d of this.eintraege)for(let u of d.instanzen)u.pendel.zuruecksetzen();this.aktualisiereKamera()}setzeAnsicht(e,t,n="cover"){let i=Math.max(1,Math.round(e)),r=Math.max(1,Math.round(t));this.ansicht={breite:i,hoehe:r,modus:n==="contain"?"contain":"cover"},this.renderer.setSize(i,r,!0),this.aktualisiereKamera(),this.bereiteWeich()}aktualisiereKamera(){let{breite:e,hoehe:t,modus:n}=this.ansicht,i=this.quelle?this.quelle.W:e,r=this.quelle?this.quelle.H:t,a=this.fokus,o=(n==="contain"?Math.min(e/i,t/r):Math.max(e/i,t/r))*(a?a.zoom:1),l=e/o,c=t/o,h=(f,p,x)=>p>=x?(x-p)/2:Math.min(x-p,Math.max(0,f-p/2)),d=a?h(a.x,l,i):(i-l)/2,u=a?h(a.y,c,r):(r-c)/2;this.sicht={links:d,rechts:d+l,unten:u,oben:u+c,cssProPx:o},this.setzeFrustum(d,d+l,u,u+c)}setzeFrustum(e,t,n,i){let r=this.kamera;r.left=e,r.right=t,r.bottom=n,r.top=i,r.updateProjectionMatrix()}bereiteWeich(){let e=this.q.weich;if(this.weich.setzeAktiv(e),!e)return;let t=this.renderer.getDrawingBufferSize(jE);this.weich.bereite(t.x,t.y),this.weich.setzeRadius(KE*this.renderer.getPixelRatio())}setzeQualitaet(e){let t=null;if(e&&typeof e=="object"&&(t=e.pixelRatio>0?e.pixelRatio:null,e=e.qualitaet||this.qualitaetName),!xo[e])return;let n=this.pixelRatioWunsch;if(t&&(this.pixelRatioWunsch=Math.min(n,t)),e===this.qualitaetName&&this.pixelRatioWunsch===n)return;this.qualitaetName=e,this.q={...xo[e],weich:xo[e].weich&&this.weichMoeglich},this.funkeln.aktiv=this.q.funkeln,this.schatten.maxGroesse=this.q.schatten||256,this.umgebung.setzeQualitaet(this.q.umgebung),this.szene.environment=this.umgebung.textur;let i=Math.min(this.pixelRatioWunsch,this.q.pixelRatioMax,2);i!==this.renderer.getPixelRatio()&&(this.pixelRatio=i,this.renderer.setPixelRatio(i)),this.setzeAnsicht(this.ansicht.breite,this.ansicht.hoehe,this.ansicht.modus)}setzeFokus(e){this.fokus=e&&e.zoom>1.01?{x:e.x,y:e.y,zoom:Math.min(4,e.zoom)}:null,this.aktualisiereKamera()}bildschirmZuBuehne(e,t){let n=this.canvas.getBoundingClientRect(),i=(e-n.left)/Math.max(1,n.width),r=(t-n.top)/Math.max(1,n.height),a=this.sicht;return{x:a.links+i*(a.rechts-a.links),y:a.oben-r*(a.oben-a.unten)}}setzeSchmuck(e,{finger:t,freigeben:n=!0}={}){t&&(this.finger=t);let i=this.eintraege.find(a=>!a.aus);if(i&&e&&i.modell===e)return;if(i&&(i.aus=!0),!e||!e.gruppe){this.aktualisiereFunkenQuellen();return}let r=this.eintraege.find(a=>a.modell===e);r&&this.entferneEintrag(r,!1),this.eintraege.push(this.baueEintrag(e,n)),this.aktualisiereFunkenQuellen()}setzeFinger(e){e&&(this.finger=e)}setzeAnpassung({skala:e,versatzMm:t}={}){Number.isFinite(e)&&e>0&&(this.anpassung.skala=ys(e,.5,2)),t&&this.anpassung.versatz.set(t.x||0,t.y||0,t.z||0)}baueEintrag(e,t){let n=e.art,i=e.gruppe;i.parent&&i.parent.remove(i),i.updateMatrixWorld(!0);let r=new wt().setFromObject(i),a=r.isEmpty()?new Kt(new T,20):r.getBoundingSphere(new Kt),o=n==="ohrringe"?[{key:"ohrR",spiegel:!1},{key:"ohrL",spiegel:!0}]:[{key:n,spiegel:!1}],l=o.map((h,d)=>d===0?i:i.clone(!0)),c=o.map((h,d)=>this.baueInstanz(e,l[d],d===0,h));return{modell:e,art:n,freigeben:t,kugel:a,instanzen:c,ein:0,aus:!1,finger:this.finger,fingerBlende:1}}baueInstanz(e,t,n,{key:i,spiegel:r}){let a=new De;a.name=`schmuck-${i}`,a.matrixAutoUpdate=!1,a.visible=!1,a.add(t);let o=new Map,l=[],c=[],h=e.art==="kette"||e.art==="ring"?{nackenEbene:{value:new Je(0,0,1,-1e9)},nackenBreite:{value:1}}:null,d=p=>{if(!p)return p;let x=o.get(p);return x||(x=p.clone(),x.onBeforeCompile=p.onBeforeCompile,x.customProgramCacheKey=p.customProgramCacheKey,x.userData=p.userData,x.transparent=!0,x.depthWrite=!0,h&&iw(x,h),this.weichMoeglich&&this.weich.patche(x),o.set(p,x)),x};t.traverse(p=>{if(!p.isMesh)return;l.push([p,p.material]);let x=Array.isArray(p.material)?p.material.some(g=>g.userData?.stein):!!p.material?.userData?.stein;p.material=Array.isArray(p.material)?p.material.map(d):d(p.material),p.castShadow=!1,p.receiveShadow=!1,x&&(p.geometry.boundingSphere||p.geometry.computeBoundingSphere(),c.push(p))});let u=e.pendel||[];n||(u=u.map(p=>{let x=ew(e.gruppe,p.knoten),g=x?tw(t,x):null;return g?{...p,knoten:g}:null}).filter(Boolean));let f={key:i,spiegel:r,original:n,wurzel:a,gruppe:t,kopien:[...o.values()],grundDeckkraft:[...o.keys()].map(p=>p.opacity),originale:l,steine:c,pendel:new fh(u,e.art),feder:new ph(12,.55),sicht:0,deckkraft:0,gesetzteDeckkraft:-1,hatLage:!1,skalaGl:0,position:new T,pxProMm:1,letzteQuat:new $e,drehung:0,versatz:new T,ziel:new T,weite:1,nacken:h};return this.szene.add(a),f}entferneEintrag(e,t=!0){for(let i of e.instanzen){i.pendel.dispose();for(let[r,a]of i.originale)r.material=a;for(let r of i.kopien)r.dispose();i.wurzel.remove(i.gruppe),i.wurzel.removeFromParent(),i.original||i.gruppe.traverse(r=>{r.isInstancedMesh&&r.dispose()})}e.instanzen.length=0,e.freigeben&&e.modell&&typeof e.modell.dispose=="function"&&e.modell.dispose();let n=this.eintraege.indexOf(e);n>=0&&this.eintraege.splice(n,1),t&&this.aktualisiereFunkenQuellen()}aktualisiereFunkenQuellen(){let e=[];for(let t of this.eintraege)if(!t.aus)for(let n of t.instanzen)for(let i of n.steine)e.push({mesh:i,radius:i.geometry.boundingSphere?.radius||1,deckkraft:()=>n.deckkraft});this.funkeln.setzeQuellen(e)}aktualisiere(e,t=1/30){if(this.entsorgt)return;let n=ys(Number.isFinite(t)?t:1/30,0,.1);this.letztesDt=n;let i=e||null;i&&i.schwerkraft&&i.schwerkraft.lengthSq()>1e-6?this.schwerkraft.copy(i.schwerkraft).normalize():this.schwerkraft.copy(JE),this.aktualisiereLicht(n),this.verdecker.aktualisiere(i?i.verdecker:null,this.verdeckerSkala);let r=0,a=0,o=0;Qr.set(0,0,0);let l=1,c=0;for(let f=this.eintraege.length-1;f>=0;f--){let p=this.eintraege[f];if(p.aus?p.ein-=n/XE:p.ein=Math.min(1,p.ein+n/WE),p.aus&&p.ein<=0){this.entferneEintrag(p);continue}if(p.art==="ring"&&p.finger!==this.finger){if(p.fingerBlende-=n/qE,p.fingerBlende<=0){p.fingerBlende=0,p.finger=this.finger;for(let g of p.instanzen)g.skalaGl=0,g.pendel.zuruecksetzen()}}else p.fingerBlende=Math.min(1,p.fingerBlende+n/$E);let x=Pf(ys(p.ein,0,1))*Pf(p.fingerBlende);for(let g of p.instanzen){this.platziere(p,g,i,n,x);let m=g.deckkraft;if(m>.01){r=Math.max(r,m),hn.copy(p.kugel.center).applyMatrix4(g.wurzel.matrix);let _=p.kugel.radius*g.wurzel.matrix.getMaxScaleOnAxis();if(a===0)Qr.copy(hn),o=_;else{let y=Qr.distanceTo(hn);if(y+o<=_)Qr.copy(hn),o=_;else if(y+_>o){let v=(y+o+_)/2;Qr.lerp(hn,(v-o)/y),o=v}}a++,l=g.pxProMm,c=Math.max(c,g.drehung)}}}let h=this.q.schatten>0&&r>.01,d=h&&i?this.waehleSchattenflaechen(i.schattenflaechen):null,u=1;h&&i&&(!d||d.length===0)&&(d=i.verdecker,u=1.03),this.empfaenger.aktualisiere(d,u),this.empfaengerMaterial.opacity=this.empfaengerMaterial.userData.grundDeckkraft*r,this.schatten.setzeAktiv(h),h&&a>0&&this.schatten.setzeBereich(Qr,o,l),this.funkeln.aktualisiere(n,c)}holeAnker(e,t,n){let i=e&&e.anker;if(!i)return null;switch(t.art){case"ring":return i.ring&&i.ring[t.finger]||null;case"armband":return i.armband||null;case"kette":return i.kette||null;case"ohrringe":return i[n.key]||null;default:return i[t.art]||null}}waehleSchattenflaechen(e){if(!e)return null;if(Array.isArray(e))return e;for(let t of this.eintraege)if(!t.aus)return e[t.art]||null;return null}platziere(e,t,n,i,r){let a=this.holeAnker(n,e,t),o=a&&a.position&&a.quaternion&&a.pxProMm>0;if(o){let c=a.sichtbar??1;t.sicht<.02&&t.pendel.zuruecksetzen(),t.sicht=c,this.berechneMatrix(e,t,a,n,i,r),t.hatLage=!0}else t.sicht*=Math.exp(-i/.15),t.sicht<.01&&(t.sicht=0);let l=t.hatLage?r*t.sicht:0;if(t.deckkraft=l,t.wurzel.visible=l>.01,Math.abs(l-t.gesetzteDeckkraft)>.002){for(let c=0;c<t.kopien.length;c++)t.kopien[c].opacity=t.grundDeckkraft[c]*l;t.gesetzteDeckkraft=l}o&&t.wurzel.visible&&t.pendel.aktualisiere(i,a.position,a.pxProMm,this.schwerkraft)}berechneMatrix(e,t,n,i,r,a){let o=i&&i.masse||{},l=e.modell.masse||{},c=n.pxProMm,h=c,d=1,u=1;if(t.versatz.copy(this.anpassung.versatz),e.art==="ring"){let g=o.fingerRadiusPx?o.fingerRadiusPx[e.finger]:0,m=l.innenRadiusMm||8.5;g>0&&(h=ys(g/m,c*.6,c*1.6))}else if(e.art==="kette"){let g=l.halsRadiusMm||U0,m=o.halsRadiusMm||g;d=u=ys(m/g,.8,1.25)}t.skalaGl>0?t.skalaGl+=(h-t.skalaGl)*(1-Math.exp(-r/.08)):t.skalaGl=h,h=t.skalaGl*this.anpassung.skala,h*=.97+.03*a,e.art==="armband"&&(this.armbandSitz(e,t,n,o,l,h,r),d=u=t.weite),O0.set((t.spiegel?-1:1)*h*d,h,h*u),kf.compose(n.position,n.quaternion,O0),F0.makeTranslation(t.versatz.x,t.versatz.y,t.versatz.z),kf.multiply(F0);let f=t.wurzel;f.matrix.copy(kf),f.matrixWorldNeedsUpdate=!0,f.updateMatrixWorld(!0),t.nacken&&e.art==="kette"?this.setzeNackenEbene(t,l,h):t.nacken&&this.setzeRingEbene(t,l,h),t.hatLage||t.letzteQuat.copy(n.quaternion);let p=t.letzteQuat.angleTo(n.quaternion);t.letzteQuat.copy(n.quaternion);let x=r>0?ys(p/r/2.5,0,1):0;t.drehung+=(x-t.drehung)*(1-Math.exp(-r/.2)),t.pxProMm=h,t.position.copy(n.position)}setzeNackenEbene(e,t,n){let i=t.halsRadiusMm||U0,r=e.wurzel.matrixWorld.elements;hn.set(r[8],r[9],r[10]).normalize(),Xi.set(0,0,-HE*i).applyMatrix4(e.wurzel.matrixWorld),e.nacken.nackenEbene.value.set(hn.x,hn.y,hn.z,hn.dot(Xi)),e.nacken.nackenBreite.value=Math.max(.5,VE*n)}setzeRingEbene(e,t,n){let i=e.wurzel.matrixWorld,r=i.elements;if(hn.set(r[4],r[5],r[6]).normalize(),Xi.set(0,0,1).addScaledVector(hn,-hn.z),Xi.lengthSq()<1e-4){e.nacken.nackenEbene.value.set(0,0,1,-1e9);return}Xi.normalize(),qs.setFromMatrixPosition(i);let a=((t.innenRadiusMm||8.5)+2)*n;e.nacken.nackenEbene.value.set(Xi.x,Xi.y,Xi.z,Xi.dot(qs)-N0[0]*a),e.nacken.nackenBreite.value=Math.max(.5,N0[1]*a)}armbandSitz(e,t,n,i,r,a,o){let l=i.handgelenkRadienPx,c=r.innenRadienMm||{x:30,z:24};if(t.ziel.set(0,0,0),t.weite=1,If.copy(n.quaternion).invert(),l&&l.quer>0&&l.tiefe>0){let h=l.quer*1.02,d=l.tiefe*1.02;t.weite=Math.max(1,h/(c.x*a),d/(c.z*a));let u=c.x*a*t.weite,f=c.z*a*t.weite;qs.copy(this.schwerkraft).applyQuaternion(If);let p=Math.hypot(qs.x,qs.z);if(p>.001){let x=qs.x/p,g=qs.z/p,m=0,_=Math.max(u,f);for(let v=0;v<12;v++){let b=(m+_)/2;nw(h,d,u,f,x,g,b)?m=b:_=b}let y=m*QE(.05,.6,p)/a;t.ziel.set(x*y,0,g*y)}}hn.copy(t.pendel.bewegung.a).multiplyScalar(-.15).applyQuaternion(If),hn.y=0,t.versatz.add(t.feder.schritt(t.ziel,o,hn))}aktualisiereLicht(e){let t=this.licht,n=t.aktualisiere(e);if(t.gemessen){let r=this.belichtungBasis*ys(Math.pow(t.faktor,.5),.72,1.12);this.belichtungZiel=r,this.umgebung.setzeLicht(t.faktor,t.farbe),this.schatten.setzeLicht(t.faktor,t.farbe)}let i=this.renderer;i.toneMappingExposure+=(this.belichtungZiel-i.toneMappingExposure)*(1-Math.exp(-e/.4)),this.umgebung.aktualisiere(e,n||t.version!==this.lichtVersion),this.lichtVersion=t.version}rendere(){if(this.entsorgt||this.verloren)return;let e=this.renderer;this.quelle&&this.quelle.art==="canvas"&&!this.quelle.statisch&&this.hgTextur&&(this.hgTextur.needsUpdate=!0),this.umgebung.faellig&&this.umgebung.erzeuge()&&(this.szene.environment=this.umgebung.textur),this.schatten.aktiv&&this.schatten.zeichne(e,this.szene,this.versteckeFuerSchatten,this.zeigeNachSchatten);let t=this.weich.aktiv&&this.weich.ziel;t&&(e.setRenderTarget(this.weich.ziel),e.clear(!0,!0,!1),e.render(this.szeneVerdecker,this.kamera),e.setRenderTarget(null)),e.clear(!0,!0,!0),e.render(this.szeneHintergrund,this.kamera),t||e.render(this.szeneVerdecker,this.kamera),e.render(this.szene,this.kamera)}async aufnahme({breite:e,wasserzeichen:t=!1,jpegQualitaet:n=.92}={}){if(this.entsorgt)throw new Error("Buehne entsorgt");let i=this.renderer,r=this.quelle?this.quelle.W:this.ansicht.breite,a=this.quelle?this.quelle.H:this.ansicht.hoehe,o=this.sicht,l=Math.max(o.links,0),c=Math.min(o.rechts,r),h=Math.max(o.unten,0),d=Math.min(o.oben,a),u=Math.max(1,c-l),f=Math.max(1,d-h),p=i.getContext(),x=Math.min(4096,p.getParameter(p.MAX_RENDERBUFFER_SIZE)||4096,(p.getParameter(p.MAX_VIEWPORT_DIMS)||[4096])[0]),g=Math.round(e||Math.max(1080,u)),m=Math.round(g*f/u),_=Math.max(g,m)/x;_>1&&(g=Math.floor(g/_),m=Math.floor(m/_));let y=document.createElement("canvas");y.width=g,y.height=m;let v=y.getContext("2d");v.fillStyle="#000",v.fillRect(0,0,g,m);let b=i.getPixelRatio(),S=i.getSize(new re),A=this.weich.uniforms.verdeckParam.value.y;try{i.setPixelRatio(1),i.setSize(g,m,!1),this.setzeFrustum(l,c,h,d),this.weich.aktiv&&(this.weich.bereite(g,m),this.weich.setzeRadius(A*(g/Math.max(1,(c-l)*o.cssProPx*b)))),this.rendere(),v.drawImage(i.domElement,0,0,g,m)}finally{i.setPixelRatio(b),i.setSize(S.x,S.y,!1),this.aktualisiereKamera(),this.bereiteWeich(),this.rendere()}return t&&this.zeichneWasserzeichen(v,g,m,t),new Promise((M,w)=>{y.toBlob(R=>R?M(R):w(new Error("JPEG fehlgeschlagen")),"image/jpeg",n)})}zeichneWasserzeichen(e,t,n,i){let r=typeof i=="string"?{text:i}:i===!0?{}:i,a=String(r.text||"ARLISE").toUpperCase(),o=Math.min(t,n),l=Math.max(11,Math.round(o*.024)),c=l*.42,h=r.schrift||this.schriftFamilie();e.save(),e.font=`400 ${l}px ${h}`,e.textBaseline="alphabetic";let d=0,u=[...a],f=u.map(S=>e.measureText(S).width);for(let S of f)d+=S;d+=c*(u.length-1);let p=Math.round(o*.045),x=t-p-d,g=n-p,m=l*1.8,_=Math.max(0,Math.floor(x-l*.9-m)),v=this.mittlereHelligkeit(e,_,Math.max(0,Math.floor(g-l)),Math.ceil(t-p-_),Math.ceil(l*1.2))>.62;e.fillStyle=r.farbe||(v?"rgba(30, 27, 24, 0.78)":"rgba(255, 255, 255, 0.9)"),e.shadowColor=v?"rgba(255, 255, 255, 0.35)":"rgba(0, 0, 0, 0.28)",e.shadowBlur=l*.6,u.forEach((S,A)=>{e.fillText(S,x,g),x+=f[A]+c});let b=Math.max(1,l/16);e.fillRect(t-p-d-l*.9-m,g-l*.36-b/2,m,b),e.restore()}mittlereHelligkeit(e,t,n,i,r){try{let a=e.getImageData(t,n,Math.max(1,i),Math.max(1,r)).data,o=0;for(let l=0;l<a.length;l+=4)o+=.2126*a[l]+.7152*a[l+1]+.0722*a[l+2];return o/(255*(a.length/4))}catch{return .5}}schriftFamilie(){let e='"Helvetica Neue", Helvetica, Arial, sans-serif';try{let t=getComputedStyle(this.canvas),n=t.getPropertyValue("--anprobe-schrift-titel").trim();return n&&n!=="inherit"?n:t.fontFamily||e}catch{return e}}dispose({kontextFreigeben:e=!0}={}){if(!this.entsorgt){this.entsorgt=!0;for(let t of[...this.eintraege])this.entferneEintrag(t,!1);this.funkeln.dispose(),this.verdecker.material.dispose(),this.verdecker.netzMaterial.dispose(),this.verdecker.dispose(),this.empfaenger.dispose(),this.weich.dispose(),this.schatten.dispose(),this.umgebung.dispose(),this.licht.dispose(),this.hgTextur?.dispose(),this.hgTextur=null,this.hintergrund.geometry.dispose(),this.hgMaterial.dispose(),this.szene.environment=null,this.szene.clear(),this.szeneVerdecker.clear(),this.szeneHintergrund.clear(),this.quelle=null,this.canvas.removeEventListener("webglcontextlost",this.beiKontextVerlust),this.renderer.dispose(),e&&!this.verloren&&this.renderer.forceContextLoss()}}async vorbereiten(){if(this.entsorgt||this.verloren)return;let e=this.renderer;if(typeof e.compileAsync!="function")return;let t=[];for(let r of this.eintraege)for(let a of r.instanzen||[])a.wurzel&&!a.wurzel.visible&&(a.wurzel.visible=!0,t.push(a.wurzel));let n=e.extensions&&typeof e.extensions.has=="function"&&e.extensions.has("KHR_parallel_shader_compile"),i=null;try{let r=[this.szene,this.szeneVerdecker,this.szeneHintergrund];if(n)i=Promise.all(r.map(a=>e.compileAsync(a,this.kamera)));else for(let a of r)e.compile(a,this.kamera)}finally{for(let r of t)r.visible=!1}i&&await i}};function iw(s,e){let t=s.onBeforeCompile,n=s.customProgramCacheKey();s.onBeforeCompile=function(i,r){t&&t.call(this,i,r),Object.assign(i.uniforms,e);let a=i.vertexShader,o=i.fragmentShader;!a.includes("#include <project_vertex>")||!o.includes("#include <tonemapping_fragment>")||(i.vertexShader=a.replace("void main() {",`varying vec3 vNackenWelt;
void main() {`).replace("#include <project_vertex>",`#include <project_vertex>
{
  vec4 nw = vec4( transformed, 1.0 );
  #ifdef USE_INSTANCING
    nw = instanceMatrix * nw;
  #endif
  vNackenWelt = ( modelMatrix * nw ).xyz;
}`),i.fragmentShader=o.replace("void main() {",`uniform vec4 nackenEbene;
uniform float nackenBreite;
varying vec3 vNackenWelt;
void main() {`).replace("#include <tonemapping_fragment>",`gl_FragColor.a *= smoothstep( -nackenBreite, 0.0, dot( vNackenWelt, nackenEbene.xyz ) - nackenEbene.w );
	#include <tonemapping_fragment>`))},s.customProgramCacheKey=()=>`${n}|nacken1`,s.needsUpdate=!0}var V0=`
/* !important im Shadow DOM schlaegt normale Theme-Regeln wie div:empty { display: none } */
:host { display: block !important; margin: 12px 0; --anprobe-farbe: #1E1B18; }
:host([hidden]) { display: none !important; }
button {
  all: unset; box-sizing: border-box; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  min-height: 48px; padding: 0 22px; max-width: 100%; text-align: center; line-height: 1.3;
  font: inherit; font-size: 12px; font-weight: 500; letter-spacing: .16em; text-transform: uppercase;
  color: var(--anprobe-farbe); background: transparent;
  border: 1px solid var(--anprobe-farbe); border-radius: 2px;
  -webkit-tap-highlight-color: transparent;
  transition: background-color .26s ease, color .26s ease, border-color .26s ease;
}
:host([data-breit]) button, :host([data-voll]) button { width: 100%; }
button:hover { background: var(--anprobe-farbe); color: #FBF8F3; }
:host([data-voll]) button { background: var(--anprobe-farbe); color: #FBF8F3; }
:host([data-voll]) button:hover { background: color-mix(in srgb, var(--anprobe-farbe) 86%, #fff); }
button:focus-visible { outline: 1px solid #B8955A; outline-offset: 3px; }
.sym { flex: none; width: 18px; height: 18px; margin-top: -1px; }
.sym path:last-child { transform-origin: 18.5px 5.5px; }
button:hover .sym path:last-child { animation: funkeln 1.1s ease-in-out; }
@keyframes funkeln { 0%, 100% { transform: scale(1); opacity: 1; } 45% { transform: scale(.4) rotate(45deg); opacity: .4; } }
@media (prefers-reduced-motion: reduce) { button, button .sym path { transition: none; animation: none !important; } }
`,G0=`
.anprobe, .anprobe * , .anprobe *::before, .anprobe *::after { box-sizing: border-box; }
.anprobe {
  --a-elfenbein: #FBF8F3; --a-tinte: #1E1B18; --a-gold: #B8955A; --a-linie: #E8E1D6;
  --a-tinte-2: rgba(30, 27, 24, .68); --a-tinte-3: rgba(30, 27, 24, .64);
  --a-gold-text: #8C6D3A;
  --a-champagner: #F3ECE1; --a-gold-hell: #D9C29A;
  --a-titel: var(--anprobe-schrift-titel, inherit);
  --a-dauer: 260ms; --a-kurve: cubic-bezier(.22, .61, .36, 1);
  --a-glas: rgba(251, 248, 243, .84); --a-glas-rand: rgba(255, 255, 255, .55);
  --a-oben: env(safe-area-inset-top, 0px); --a-unten: env(safe-area-inset-bottom, 0px);
  position: fixed; inset: 0; z-index: 2147483000;
  display: flex; align-items: center; justify-content: center;
  font-family: inherit; font-size: 15px; line-height: 1.5; color: var(--a-tinte);
  -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%; text-align: left; letter-spacing: normal;
  opacity: 0; transition: opacity var(--a-dauer) var(--a-kurve);
}
.anprobe.offen { opacity: 1; }
.anprobe[hidden] { display: none; }
.a-schleier {
  position: absolute; inset: 0; background: rgba(30, 27, 24, .46);
  -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px);
}
.a-fenster {
  position: relative; overflow: hidden; isolation: isolate;
  width: min(1040px, calc(100vw - 64px)); height: min(700px, calc(100vh - 64px));
  background: var(--a-elfenbein); border-radius: 4px;
  box-shadow: 0 40px 100px -20px rgba(30, 27, 24, .45), 0 0 0 1px rgba(30, 27, 24, .04);
  transform: translateY(12px) scale(.985); transition: transform 380ms var(--a-kurve);
}
.anprobe.offen .a-fenster { transform: none; }

/* ---------- Grundbausteine */
.a-label {
  display: block; font-size: 11px; font-weight: 500; letter-spacing: .22em; text-transform: uppercase;
  color: var(--a-gold-text); margin: 0 0 14px;
}
.a-titel {
  font-family: var(--a-titel); font-weight: 400; font-size: 32px; line-height: 1.15;
  letter-spacing: .005em; margin: 0 0 18px; color: var(--a-tinte);
}
.a-text { margin: 0; color: var(--a-tinte-2); font-size: 15px; }
.a-klein { font-size: 12.5px; color: var(--a-tinte-3); line-height: 1.5; }
button { font: inherit; color: inherit; }
.a-knopf {
  appearance: none; border: 1px solid var(--a-tinte); border-radius: 2px; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  min-height: 50px; padding: 0 28px; background: var(--a-tinte); color: var(--a-elfenbein);
  font-size: 12px; font-weight: 500; letter-spacing: .18em; text-transform: uppercase; white-space: nowrap;
  transition: background-color var(--a-dauer) ease, color var(--a-dauer) ease, border-color var(--a-dauer) ease, opacity var(--a-dauer) ease;
  -webkit-tap-highlight-color: transparent;
}
.a-knopf:hover { background: #38332d; border-color: #38332d; }
.a-knopf .sym { width: 18px; height: 18px; }
.a-knopf.zweit { background: transparent; color: var(--a-tinte); border-color: rgba(30, 27, 24, .35); }
.a-knopf.zweit:hover { border-color: var(--a-tinte); background: rgba(30, 27, 24, .03); }
.a-textknopf {
  appearance: none; background: none; border: 0; padding: 6px 2px; cursor: pointer;
  font-size: 12px; letter-spacing: .16em; text-transform: uppercase; color: var(--a-tinte-2);
  text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 5px; text-decoration-color: var(--a-linie);
  transition: color var(--a-dauer) ease, text-decoration-color var(--a-dauer) ease;
}
.a-textknopf:hover { color: var(--a-tinte); text-decoration-color: var(--a-gold); }
.anprobe :focus { outline: none; }
.anprobe :focus-visible { outline: 1px solid var(--a-gold); outline-offset: 3px; }
.a-rund {
  appearance: none; cursor: pointer; flex: none; width: 44px; height: 44px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center; padding: 0;
  background: transparent; border: 1px solid transparent; color: var(--a-tinte);
  transition: background-color var(--a-dauer) ease, opacity var(--a-dauer) ease, transform var(--a-dauer) var(--a-kurve);
  -webkit-tap-highlight-color: transparent;
}
.a-rund:hover { background: rgba(30, 27, 24, .05); }
.a-rund:active { transform: scale(.94); }
.glas {
  background: var(--a-glas); border: 1px solid var(--a-glas-rand);
  -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px);
  box-shadow: 0 10px 34px -8px rgba(30, 27, 24, .22);
}
.a-unsichtbar { position: absolute !important; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }

/* ---------- Ebenen und Zustaende */
.a-buehne { position: absolute; inset: 0; background: #2a2622; overflow: hidden; touch-action: none; user-select: none; -webkit-user-select: none; transition: background-color 420ms var(--a-kurve); }
.anprobe:not([data-zustand="live"]) .a-buehne { background: var(--a-elfenbein); }
.a-video, .a-canvas, .a-fotogrund { position: absolute; inset: 0; width: 100%; height: 100%; }
.a-video { object-fit: cover; }
.a-video.gespiegelt { transform: scaleX(-1); }
.a-fotogrund { background-size: cover; background-position: center; filter: blur(34px) saturate(.8); transform: scale(1.15); opacity: 0; }
.anprobe[data-zustand="foto"] .a-fotogrund { opacity: .45; }
.a-canvas { opacity: 0; transition: opacity 420ms var(--a-kurve); cursor: grab; }
.a-canvas:active { cursor: grabbing; }
.anprobe[data-zustand="live"] .a-canvas, .anprobe[data-zustand="foto"] .a-canvas, .anprobe[data-zustand="ergebnis"] .a-canvas { opacity: 1; }
.a-blitz { position: absolute; inset: 0; background: #fff; opacity: 0; pointer-events: none; }
.a-blitz.an { animation: blitz 420ms ease-out; }
@keyframes blitz { 0% { opacity: .85; } 100% { opacity: 0; } }

.a-seite {
  position: absolute; inset: 0; display: flex; background: var(--a-elfenbein);
  opacity: 0; visibility: hidden; pointer-events: none;
  transition: opacity var(--a-dauer) var(--a-kurve), visibility 0s linear var(--a-dauer);
}
.anprobe[data-zustand="intro"] .a-intro,
.anprobe[data-zustand="laden"] .a-laden,
.anprobe[data-zustand="ergebnis"] .a-ergebnis,
.anprobe[data-zustand="fehler"] .a-fehler { opacity: 1; visibility: visible; pointer-events: auto; transition-delay: 0s; }
.a-seite > .a-inhalt { transform: translateY(8px); transition: transform 420ms var(--a-kurve); }
.anprobe[data-zustand="intro"] .a-intro > .a-inhalt,
.anprobe[data-zustand="laden"] .a-laden > .a-inhalt,
.anprobe[data-zustand="ergebnis"] .a-ergebnis > .a-inhalt,
.anprobe[data-zustand="fehler"] .a-fehler > .a-inhalt { transform: none; }

/* ---------- Kopfzeile (Produkt + Schliessen) */
.a-kopf {
  position: absolute; z-index: 5; top: 0; left: 0; right: 0; pointer-events: none;
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: calc(16px + var(--a-oben)) 16px 0 20px;
}
.a-kopf > * { pointer-events: auto; }
.a-produkt {
  display: flex; align-items: center; gap: 12px; min-width: 0; max-width: min(420px, 100% - 64px);
  padding: 6px 18px 6px 6px; border-radius: 999px; border: 1px solid transparent;
  transition: background-color var(--a-dauer) ease, border-color var(--a-dauer) ease, box-shadow var(--a-dauer) ease, opacity var(--a-dauer) ease;
}
.a-produkt img {
  flex: none; width: 40px; height: 40px; border-radius: 50%; object-fit: cover; background: var(--a-champagner);
  border: 1px solid var(--a-linie);
}
.a-produkt img[hidden] { display: none; }
.a-produkt-text { min-width: 0; display: flex; flex-direction: column; line-height: 1.25; }
.a-produkt-name { font-size: 13px; font-weight: 500; letter-spacing: .02em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.a-produkt-preis { font-size: 12px; color: var(--a-tinte-2); font-variant-numeric: tabular-nums; }
.a-produkt-preis:empty { display: none; }
.a-schliessen .sym { width: 22px; height: 22px; }
.anprobe[data-zustand="live"] .a-kopf .a-produkt, .anprobe[data-zustand="foto"] .a-kopf .a-produkt,
.anprobe[data-zustand="live"] .a-kopf .a-rund, .anprobe[data-zustand="foto"] .a-kopf .a-rund {
  background: var(--a-glas); border-color: var(--a-glas-rand);
  -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px);
  box-shadow: 0 10px 34px -8px rgba(30, 27, 24, .22);
}
.anprobe[data-zustand="intro"] .a-kopf .a-produkt { opacity: 0; pointer-events: none; }

/* ---------- Intro */
.a-intro { flex-direction: row; }
.a-bild {
  position: relative; flex: 1 1 50%; display: flex; align-items: center; justify-content: center;
  background: radial-gradient(120% 90% at 50% 38%, #FFFDF9 0%, var(--a-champagner) 62%, #EDE3D3 100%);
  overflow: hidden;
}
.a-bild::after { content: ''; position: absolute; inset: 18px; border: 1px solid rgba(184, 149, 90, .28); pointer-events: none; }
.a-intro > .a-inhalt {
  flex: 1 1 50%; display: flex; flex-direction: column; justify-content: center;
  padding: 72px 64px 40px 60px; overflow-y: auto;
}
.a-produktzeile { display: flex; align-items: center; gap: 14px; margin: 0 0 30px; padding-bottom: 22px; border-bottom: 1px solid var(--a-linie); }
.a-produktzeile img { width: 52px; height: 52px; object-fit: cover; border-radius: 2px; background: var(--a-champagner); }
.a-produktzeile img[hidden] { display: none; }
.a-produktzeile .a-produkt-name { font-family: var(--a-titel); font-size: 17px; font-weight: 400; letter-spacing: .01em; white-space: normal; }
.a-schritte { list-style: none; margin: 0 0 32px; padding: 0; counter-reset: schritt; display: grid; gap: 12px; }
.a-schritte li { position: relative; padding-left: 38px; color: var(--a-tinte-2); font-size: 14.5px; line-height: 1.55; counter-increment: schritt; }
.a-schritte li::before {
  content: '0' counter(schritt); position: absolute; left: 0; top: 1px;
  font-size: 11px; letter-spacing: .12em; color: var(--a-gold-text); font-variant-numeric: tabular-nums;
}
.a-aktionen { display: flex; flex-direction: column; gap: 12px; align-items: stretch; max-width: 340px; }
.a-datenschutz { display: flex; gap: 10px; align-items: flex-start; margin-top: 26px; }
.a-datenschutz .sym { flex: none; width: 15px; height: 15px; margin-top: 2px; color: var(--a-gold); }

/* ---------- Anleitungsgrafik */
.a-anleitung { position: relative; width: min(78%, 340px); aspect-ratio: 200 / 240; perspective: 900px; }
.anl-svg { width: 100%; height: 100%; overflow: visible; display: block; }
.anl-linie, .anl-linie-fein, .anl-pfeile path, .anl-sucher path { fill: none; stroke: var(--a-tinte); stroke-linecap: round; stroke-linejoin: round; }
.anl-linie { stroke-width: 1.5; }
.anl-linie-fein { stroke-width: 1; opacity: .55; }
.anl-lippen { fill: rgba(196, 140, 128, .22); stroke: var(--a-tinte); stroke-width: 1; stroke-linejoin: round; opacity: .8; }
.anl-gold { fill: none; stroke: var(--a-gold); stroke-width: 3; stroke-linecap: round; }
.anl-gold-fein { fill: none; stroke: var(--a-gold); stroke-width: 1.2; stroke-linecap: round; }
.anl-gold-punkt { fill: var(--a-gold); stroke: none; }
.anl-kettchen { stroke-width: 2.6; stroke-dasharray: .01 4.4; }
.anl-perle { fill: #FFFDF8; stroke: var(--a-gold); stroke-width: 1.1; }
.anl-funkeln { fill: var(--a-gold); stroke: none; transform-box: fill-box; transform-origin: center; animation: anl-funkeln 3.2s ease-in-out infinite; }
.anl-pfeile path, .anl-sucher path { stroke: var(--a-gold); stroke-width: 1.1; opacity: .7; }
.anl-pfeile { animation: anl-atmen 5s ease-in-out infinite; }
.anl-zeichnen { stroke-dasharray: 1; stroke-dashoffset: 0; animation: anl-zeichnen 1.6s var(--a-kurve) both; }
.anl-figur { transform-box: view-box; transform-origin: 50% 60%; }
.anl-drehen { animation: anl-drehen 6s ease-in-out 1s infinite; }
.a-anleitung[data-art="ring"] .anl-svg, .a-anleitung[data-art="armband"] .anl-svg { animation: anl-drehen3d 6s ease-in-out 1s infinite; }
.anl-pendel { animation: anl-pendel 2.6s ease-in-out infinite; }
.anl-straehne-vor { animation: anl-straehne-vor 7s ease-in-out infinite; }
.anl-straehne-hinter { animation: anl-straehne-hinter 7s ease-in-out infinite; }
.anl-ohrring { animation: anl-ohrring 7s ease-in-out infinite; }
.anl-funkeln-ohr { animation: anl-funkeln-ohr 7s ease-in-out infinite; }
.anl-zuege { animation: anl-zuege 7s ease-in-out infinite; }
.a-anleitung[data-art="ohrringe"] .anl-svg { animation: anl-kopf3d 7s ease-in-out infinite; }
.anl-zoom { transform-origin: 50% 45%; animation: anl-zoom 6s var(--a-kurve) infinite; }
.anl-sucher { transform-box: view-box; transform-origin: 50% 50%; animation: anl-sucher 6s var(--a-kurve) infinite; }
.anl-kette-linie { stroke-dasharray: 1; stroke-dashoffset: 0; animation: anl-kette 6s var(--a-kurve) infinite; }
@keyframes anl-zeichnen { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
@keyframes anl-funkeln { 0%, 100% { transform: scale(.35); opacity: 0; } 40% { transform: scale(1) rotate(45deg); opacity: 1; } 70% { transform: scale(.5) rotate(90deg); opacity: 0; } }
@keyframes anl-atmen { 0%, 100% { opacity: .25; } 50% { opacity: 1; } }
@keyframes anl-drehen { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
@keyframes anl-drehen3d { 0%, 100% { transform: rotateY(-24deg); } 50% { transform: rotateY(24deg); } }
@keyframes anl-pendel { 0%, 100% { transform: rotate(7deg); } 50% { transform: rotate(-7deg); } }
@keyframes anl-straehne-vor { 0%, 18% { opacity: 1; transform: none; } 34%, 92% { opacity: 0; transform: translateX(9px); } 100% { opacity: 1; transform: none; } }
@keyframes anl-straehne-hinter { 0%, 22% { opacity: 0; } 38%, 90% { opacity: 1; } 100% { opacity: 0; } }
@keyframes anl-ohrring { 0%, 24% { opacity: 0; } 38%, 90% { opacity: 1; } 100% { opacity: 0; } }
@keyframes anl-funkeln-ohr { 0%, 40% { opacity: 0; transform: scale(.3); } 50% { opacity: 1; transform: scale(1) rotate(45deg); } 60%, 100% { opacity: 0; transform: scale(.3) rotate(90deg); } }
@keyframes anl-zuege { 0%, 42% { transform: none; } 58%, 80% { transform: translateX(-4px); } 92%, 100% { transform: none; } }
@keyframes anl-kopf3d { 0%, 42% { transform: rotateY(0); } 58%, 80% { transform: rotateY(-14deg); } 92%, 100% { transform: rotateY(0); } }
@keyframes anl-zoom { 0%, 10% { transform: scale(1.22); } 45%, 88% { transform: scale(1); } 100% { transform: scale(1.22); } }
@keyframes anl-sucher { 0%, 10% { transform: scale(.9); opacity: .5; } 45%, 88% { transform: scale(1); opacity: 1; } 100% { transform: scale(.9); opacity: .5; } }
@keyframes anl-kette { 0%, 30% { stroke-dashoffset: 1; } 60%, 92% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 1; } }

/* ---------- Laden */
.a-laden { background: var(--a-elfenbein); align-items: center; justify-content: center; text-align: center; }
.a-laden.milchglas { background: rgba(251, 248, 243, .86); -webkit-backdrop-filter: blur(26px); backdrop-filter: blur(26px); }
.a-laden > .a-inhalt { display: flex; flex-direction: column; align-items: center; padding: 32px; max-width: 420px; }
.a-laden .a-titel { font-size: 26px; margin-bottom: 30px; }
.a-ladesymbol { color: var(--a-gold); margin-bottom: 22px; }
.a-ladesymbol .sym { width: 34px; height: 34px; animation: laden-funkeln 2.4s ease-in-out infinite; }
@keyframes laden-funkeln { 0%, 100% { transform: scale(.88); opacity: .5; } 50% { transform: scale(1.04); opacity: 1; } }
.a-fortschritt { width: 240px; }
.a-balken { position: relative; height: 1px; background: rgba(30, 27, 24, .14); overflow: visible; }
.a-balken > span {
  position: absolute; left: 0; top: -0.5px; height: 2px; width: 100%; background: var(--a-gold);
  transform-origin: left center; transform: scaleX(0); transition: transform 320ms var(--a-kurve);
}
.a-fortschritt-zeile { display: flex; justify-content: space-between; margin-top: 12px; font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--a-tinte-3); }
.a-prozent { font-variant-numeric: tabular-nums; color: var(--a-tinte-2); }
.a-laden .a-textknopf { margin-top: 34px; }

/* ---------- Live-Bedienung */
.a-live {
  position: absolute; inset: 0; z-index: 4; pointer-events: none;
  opacity: 0; visibility: hidden; transition: opacity var(--a-dauer) var(--a-kurve), visibility 0s linear var(--a-dauer);
}
.anprobe[data-zustand="live"] .a-live, .anprobe[data-zustand="foto"] .a-live { opacity: 1; visibility: visible; transition-delay: 0s; }
.a-live > * { pointer-events: auto; }
.a-hinweis {
  position: absolute; left: 0; right: 0; margin: 0 auto; width: max-content; top: calc(80px + var(--a-oben)); max-width: calc(100% - 40px);
  display: flex; align-items: center; gap: 10px; padding: 10px 18px 10px 14px; border-radius: 999px;
  font-size: 13.5px; line-height: 1.35; color: var(--a-tinte); pointer-events: none;
  opacity: 0; transform: translateY(-8px) scale(.97);
  transition: opacity 300ms var(--a-kurve), transform 300ms var(--a-kurve);
}
.a-hinweis.an { opacity: 1; transform: none; }
.a-hinweis .sym { flex: none; width: 18px; height: 18px; color: var(--a-gold); overflow: visible; }
.a-hinweis .sym * { transform-box: fill-box; }
.hs-punkt { flex: none; width: 7px; height: 7px; border-radius: 50%; background: var(--a-gold); animation: hs-puls 1.6s ease-in-out infinite; }
.hs-winken { transform-origin: 50% 100%; animation: hs-winken 1.4s ease-in-out infinite; }
.hs-zoom { transform-origin: center; animation: hs-zoom 1.6s ease-in-out infinite; }
.hs-atmen { transform-origin: center; animation: hs-atmen 1.6s ease-in-out infinite; }
.hs-spreizen { transform-origin: 50% 100%; animation: hs-atmen 1.4s ease-in-out infinite; }
.hs-blinzeln { animation: hs-blinzeln 2.4s ease-in-out infinite; }
.hs-drehen { animation: hs-drehen 1.8s ease-in-out infinite; }
.hs-wenden { transform-origin: center; animation: hs-wenden 2.4s ease-in-out infinite; }
@keyframes hs-puls { 0%, 100% { transform: scale(.7); opacity: .5; } 50% { transform: scale(1); opacity: 1; } }
@keyframes hs-winken { 0%, 100% { transform: rotate(-10deg); } 50% { transform: rotate(10deg); } }
@keyframes hs-zoom { 0%, 100% { transform: scale(1); } 50% { transform: scale(.78); } }
@keyframes hs-atmen { 0%, 100% { transform: scale(.88); } 50% { transform: scale(1.06); } }
@keyframes hs-blinzeln { 0%, 44%, 52%, 100% { opacity: 1; } 48% { opacity: 0; } }
@keyframes hs-wenden { 0%, 25% { transform: scaleX(1); } 50%, 75% { transform: scaleX(-1); } 100% { transform: scaleX(1); } }
@keyframes hs-drehen { 0%, 100% { transform: translateX(-1.6px); } 50% { transform: translateX(1.6px); } }

.a-tipp {
  position: absolute; left: 0; right: 0; margin: 0 auto; width: max-content; max-width: calc(100% - 48px);
  top: calc(136px + var(--a-oben)); text-align: center;
  padding: 7px 16px; border-radius: 999px; pointer-events: none;
  font-size: 10.5px; line-height: 1.5; letter-spacing: .12em; text-transform: uppercase; color: #fff;
  background: rgba(30, 27, 24, .34); -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px);
  opacity: 0; transition: opacity 600ms ease;
}
.a-tipp.an { opacity: 1; }
.a-zuruecksetzen { position: absolute; right: 16px; top: calc(76px + var(--a-oben)); opacity: 0; visibility: hidden; transform: scale(.9); transition: opacity var(--a-dauer) ease, transform var(--a-dauer) var(--a-kurve), visibility 0s linear var(--a-dauer); }
.a-zuruecksetzen.an { opacity: 1; visibility: visible; transform: none; transition-delay: 0s; }
.a-zuruecksetzen.glas:hover { background: rgba(251, 248, 243, .9); }

.a-unten {
  position: absolute; left: 0; right: 0; bottom: 0; pointer-events: none;
  display: flex; flex-direction: column; align-items: center; gap: 18px;
  padding: 0 16px calc(26px + var(--a-unten));
}
.a-unten > * { pointer-events: auto; }
.a-varianten { display: flex; align-items: center; gap: 4px; padding: 4px 18px 4px 4px; border-radius: 999px; }
.a-varianten[hidden] { display: none; }
.a-swatches { display: flex; gap: 2px; }
.a-swatch {
  appearance: none; cursor: pointer; position: relative; width: 38px; height: 38px; padding: 0; border-radius: 50%;
  border: 0; background: transparent; display: grid; place-items: center; -webkit-tap-highlight-color: transparent;
}
.a-swatch > i {
  display: block; width: 26px; height: 26px; border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(30, 27, 24, .12), 0 1px 3px rgba(30, 27, 24, .18);
  transition: transform var(--a-dauer) var(--a-kurve);
}
.a-swatch::after {
  content: ''; position: absolute; inset: 2px; border-radius: 50%; border: 1px solid var(--a-tinte);
  opacity: 0; transform: scale(.85); transition: opacity var(--a-dauer) ease, transform var(--a-dauer) var(--a-kurve);
}
.a-swatch[aria-checked="true"]::after { opacity: .85; transform: none; }
.a-swatch:hover > i { transform: scale(1.06); }
.a-variantenname {
  min-width: 5.5em; padding-left: 12px; margin-left: 4px; border-left: 1px solid rgba(30, 27, 24, .14);
  font-size: 10.5px; line-height: 20px; letter-spacing: .2em; text-transform: uppercase; color: var(--a-tinte); white-space: nowrap;
}
.a-leiste { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; width: 100%; max-width: 360px; }
.a-leiste .a-rund { width: 48px; height: 48px; justify-self: center; }
.a-leiste .a-rund[hidden] { visibility: hidden; display: inline-flex; }
.a-leiste .a-rund.glas:hover { background: rgba(251, 248, 243, .9); }
.a-ausloeser {
  appearance: none; cursor: pointer; position: relative; width: 76px; height: 76px; border-radius: 50%; padding: 0;
  border: 0; background: transparent; -webkit-tap-highlight-color: transparent;
}
.a-ausloeser::before {
  content: ''; position: absolute; inset: 0; border-radius: 50%; border: 1.5px solid rgba(255, 255, 255, .95);
  box-shadow: 0 0 0 1px rgba(30, 27, 24, .1), inset 0 0 0 1px rgba(30, 27, 24, .06), 0 4px 24px rgba(30, 27, 24, .25);
}
.a-ausloeser::after {
  content: ''; position: absolute; inset: 7px; border-radius: 50%; background: rgba(251, 248, 243, .96);
  box-shadow: 0 0 0 1px rgba(30, 27, 24, .08), 0 2px 10px rgba(30, 27, 24, .12);
  transition: transform 180ms var(--a-kurve), background-color var(--a-dauer) ease;
}
.a-ausloeser:hover::after { background: #fff; }
.a-ausloeser:active::after { transform: scale(.9); }
.a-ausloeser .sym { position: relative; z-index: 1; color: var(--a-gold); width: 22px; height: 22px; opacity: 0; transition: opacity var(--a-dauer) ease; }
.anprobe[data-zustand="foto"] .a-ausloeser .sym { opacity: 1; }
.a-ausloeser[disabled] { opacity: .5; cursor: default; }

/* Fingerwahl (Ringe) */
.a-fingerwahl {
  position: absolute; left: 16px; bottom: calc(196px + var(--a-unten)); min-width: 66px;
  display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 9px 6px 7px; border-radius: 16px;
  transition: left 360ms var(--a-kurve), right 360ms var(--a-kurve), opacity var(--a-dauer) ease;
}
.a-fingerwahl.rechts { left: calc(100% - 82px); }
.a-fingerwahl[hidden] { display: none; }
.fw-svg { width: 50px; height: 70px; overflow: visible; display: block; }
.fw-umriss { fill: rgba(251, 248, 243, .55); stroke: var(--a-tinte); stroke-width: 1.4; stroke-linejoin: round; stroke-linecap: round; vector-effect: non-scaling-stroke; }
.fw-finger { cursor: pointer; outline: none; }
.fw-flaeche { fill: transparent; stroke: none; transition: fill var(--a-dauer) ease; }
.fw-finger:hover .fw-flaeche { fill: rgba(184, 149, 90, .12); }
.fw-finger.aktiv .fw-flaeche { fill: rgba(184, 149, 90, .2); }
.fw-band { fill: none; stroke: var(--a-gold); stroke-width: 4.5; stroke-linecap: round; opacity: 0; transition: opacity var(--a-dauer) ease; }
.fw-finger.aktiv .fw-band { opacity: 1; }
.fw-finger:focus-visible .fw-flaeche { stroke: var(--a-gold); stroke-width: 1.2; vector-effect: non-scaling-stroke; }
.a-fingername { font-size: 8.5px; letter-spacing: .1em; text-transform: uppercase; color: var(--a-tinte-2); white-space: nowrap; }

/* ---------- Ergebnis */
.a-ergebnis { align-items: stretch; justify-content: center; }
.a-ergebnis > .a-inhalt { display: flex; gap: 56px; align-items: center; justify-content: center; width: 100%; padding: 84px 64px 48px; }
.a-rahmen {
  position: relative; flex: 0 1 auto; height: 100%; max-height: 100%; min-width: 0;
  display: flex; align-items: center; justify-content: center;
}
.a-rahmen img {
  display: block; max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 2px;
  box-shadow: 0 30px 60px -24px rgba(30, 27, 24, .35); background: var(--a-champagner);
}
.a-ergebnis-text { flex: 0 0 300px; display: flex; flex-direction: column; }
.a-ergebnis-text .a-titel { font-size: 30px; margin-bottom: 10px; }
.a-ergebnis-text .a-text { margin-bottom: 30px; }
.a-ergebnis-text .a-knopf { width: 100%; margin-bottom: 10px; }
.a-ergebnis-text .a-textknopf { align-self: flex-start; margin-top: 14px; }
.a-ergebnis .a-knopf[hidden] { display: none; }

/* ---------- Fehler */
.a-fehler { align-items: center; justify-content: center; text-align: center; }
.a-fehler > .a-inhalt { max-width: 440px; padding: 40px 28px; display: flex; flex-direction: column; align-items: center; }
.a-fehler .a-inhalt > .sym { color: var(--a-gold); margin-bottom: 20px; }
.a-fehler .a-titel { font-size: 26px; }
.a-fehler .a-text { margin-bottom: 30px; }
.a-fehler .a-aktionen { justify-content: center; }

/* ---------- Handy: Vollbild */
@media (max-width: 700px), (max-height: 520px) {
  .a-schleier { display: none; }
  .a-fenster { width: 100%; height: 100%; border-radius: 0; box-shadow: none; transform: translateY(16px); }
  .a-kopf { padding: calc(12px + var(--a-oben)) 12px 0 12px; }
  .a-produkt { padding-right: 14px; }
  .a-produkt img { width: 34px; height: 34px; }
  .a-titel { font-size: 27px; margin-bottom: 14px; }
  .a-intro { flex-direction: column; }
  .a-bild { flex: 1 1 auto; min-height: 0; }
  .a-bild::after { inset: 12px 12px 0; border-bottom: 0; }
  .a-anleitung { width: auto; height: min(88%, 300px); }
  .a-intro > .a-inhalt { flex: 0 0 auto; padding: 24px 24px calc(20px + var(--a-unten)); overflow: visible; }
  .a-produktzeile { display: none; }
  .a-label { margin-bottom: 10px; }
  .a-schritte { margin-bottom: 22px; gap: 8px; }
  .a-schritte li { font-size: 14px; padding-left: 32px; }
  .a-schritte li:nth-child(3) { display: none; }
  .a-aktionen { flex-direction: column; align-items: stretch; gap: 10px; }
  .a-aktionen .a-knopf { width: 100%; }
  .a-datenschutz { margin-top: 16px; justify-content: center; text-align: left; }
  .a-ergebnis > .a-inhalt { flex-direction: column; gap: 22px; padding: calc(76px + var(--a-oben)) 20px calc(20px + var(--a-unten)); }
  .a-rahmen { flex: 1 1 auto; min-height: 0; width: 100%; }
  .a-ergebnis-text { flex: 0 0 auto; width: 100%; }
  .a-ergebnis-text .a-titel { font-size: 24px; margin-bottom: 4px; text-align: center; }
  .a-ergebnis-text .a-text { margin-bottom: 18px; text-align: center; font-size: 14px; }
  .a-ergebnis-text .a-textknopf { align-self: center; margin-top: 4px; }
  .a-knoepfe-paar { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .a-knoepfe-paar .a-knopf { margin: 0; padding: 0 12px; }
  .a-knoepfe-paar .a-knopf:only-child, .a-knoepfe-paar .a-knopf[hidden] + .a-knopf { grid-column: 1 / -1; }
}
@media (max-height: 520px) and (orientation: landscape) {
  .a-intro { flex-direction: row; }
  .a-bild { flex: 0 0 36%; }
  .a-bild::after { inset: 12px 0 12px 12px; border-bottom: 1px solid rgba(184, 149, 90, .28); border-right: 0; }
  .a-intro > .a-inhalt { flex: 1 1 auto; overflow-y: auto; padding: 48px 28px 16px; }
  .a-schritte li:nth-child(3) { display: block; }
  .a-aktionen { flex-direction: row; max-width: none; }
  .a-aktionen .a-knopf { width: auto; flex: 1; }
  .a-fingerwahl { bottom: calc(16px + var(--a-unten)); }
  .a-unten { gap: 10px; padding-bottom: calc(14px + var(--a-unten)); }
  .a-tipp { top: calc(72px + var(--a-oben)); }
  .a-hinweis { top: calc(16px + var(--a-oben)); max-width: calc(100% - 520px); }
}

@media (prefers-reduced-motion: reduce) {
  .anprobe *, .anprobe *::before, .anprobe *::after { animation: none !important; transition-duration: 1ms !important; transition-delay: 0s !important; }
  .anl-straehne-vor { opacity: 0; }
}
`;var kt=(s,{groesse:e=24,strich:t=1.25,klasse:n=""}={})=>`<svg class="sym ${n}" viewBox="0 0 24 24" width="${e}" height="${e}" fill="none" stroke="currentColor" stroke-width="${t}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${s}</svg>`,W0=(s,e,t)=>{let n=t*.16;return`M${s} ${e-t}C${s+n} ${e-n} ${s+n} ${e-n} ${s+t} ${e}C${s+n} ${e+n} ${s+n} ${e+n} ${s} ${e+t}C${s-n} ${e+n} ${s-n} ${e+n} ${s-t} ${e}C${s-n} ${e-n} ${s-n} ${e-n} ${s} ${e-t}Z`},$t={funkeln:kt(`<path d="${W0(10,13,7.5)}"/><path d="${W0(18.5,5.5,3)}"/>`,{strich:1.1}),schliessen:kt('<path d="M6 6l12 12M18 6L6 18"/>'),kamera:kt('<path d="M3.5 8.5A1.5 1.5 0 0 1 5 7h2.6l1.4-2h6l1.4 2H19a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5z"/><circle cx="12" cy="12.8" r="3.4"/>'),wechseln:kt('<path d="M4 9.5A8 8 0 0 1 18.6 7M20 14.5A8 8 0 0 1 5.4 17"/><path d="M18.9 3.6l-.3 3.6-3.6-.3M5.1 20.4l.3-3.6 3.6.3"/><circle cx="12" cy="12" r="2.4"/>'),foto:kt('<rect x="3.5" y="4.5" width="17" height="15" rx="1.5"/><circle cx="9" cy="9.5" r="1.6"/><path d="M4 17l5-4.5 3.5 3 3-2.5L20 17"/>'),teilen:kt('<path d="M12 3.5v11M8 7.2l4-3.7 4 3.7"/><path d="M8.5 10.5H6.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-2"/>'),speichern:kt('<path d="M12 4v11M7.8 10.8L12 15l4.2-4.2"/><path d="M5 19.5h14"/>'),zurueck:kt('<path d="M14.5 6l-6 6 6 6"/>'),schloss:kt('<rect x="5.5" y="10.5" width="13" height="9.5" rx="1.5"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>',{groesse:16}),zuruecksetzen:kt('<path d="M4.5 12a7.5 7.5 0 1 0 2.4-5.5"/><path d="M4.5 4.5v3.6h3.6"/>',{groesse:18}),hand:kt('<path d="M8.5 12.5V6.2a1.25 1.25 0 0 1 2.5 0v5M11 11V4.7a1.25 1.25 0 0 1 2.5 0V11M13.5 11V5.7a1.25 1.25 0 0 1 2.5 0V12M16 12V8.2a1.25 1.25 0 0 1 2.5 0v6.3c0 3.6-2.6 6-6 6-2.5 0-3.9-1-5.3-3l-2.6-3.8a1.3 1.3 0 0 1 2-1.6l1.9 2"/>'),perle:kt('<circle cx="12" cy="12" r="6.5"/><path d="M9 9.6a3.6 3.6 0 0 1 2.6-1.6"/>'),fehler:kt('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v5.5M12 16.2v.1"/>',{groesse:28,strich:1.1})},X0={hand:kt('<g class="hs-winken"><path d="M8.5 12.5V6.2a1.25 1.25 0 0 1 2.5 0v5M11 11V4.7a1.25 1.25 0 0 1 2.5 0V11M13.5 11V5.7a1.25 1.25 0 0 1 2.5 0V12M16 12V8.2a1.25 1.25 0 0 1 2.5 0v6.3c0 3.6-2.6 6-6 6-2.5 0-3.9-1-5.3-3l-2.6-3.8a1.3 1.3 0 0 1 2-1.6l1.9 2"/></g>',{groesse:18}),naeher:kt('<g class="hs-zoom"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></g><circle cx="12" cy="12" r="2.2"/>',{groesse:18}),rahmen:kt('<path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"/><g class="hs-atmen"><rect x="8" y="8" width="8" height="8" rx="1"/></g>',{groesse:18}),spreizen:kt('<g class="hs-spreizen"><path d="M12 20v-9M12 11l-4.5-6M12 11l4.5-6M12 11V3.5"/></g>',{groesse:18}),gesicht:kt('<ellipse cx="12" cy="11.5" rx="6" ry="7.5"/><g class="hs-blinzeln"><path d="M9.6 10.5h.1M14.3 10.5h.1"/></g><path d="M10.4 15.2c1 .6 2.2.6 3.2 0"/>',{groesse:18}),kopfDrehen:kt('<ellipse cx="12" cy="12" rx="5.5" ry="7"/><g class="hs-drehen"><path d="M10 10.5h.1M13.4 10.5h.1M11.5 12.5l-.4 1.6h1"/></g><path d="M2.8 9.5c-.8 1.6-.8 3.4 0 5M21.2 9.5c.8 1.6.8 3.4 0 5"/>',{groesse:18}),schultern:kt('<circle cx="12" cy="7" r="3.2"/><path d="M10.6 10v2.2M13.4 10v2.2"/><g class="hs-atmen"><path d="M3.5 20c.6-4 3.6-6.5 8.5-6.5s7.9 2.5 8.5 6.5"/></g>',{groesse:18}),wenden:kt('<g class="hs-wenden"><path d="M8.5 12.5V6.2a1.25 1.25 0 0 1 2.5 0v5M11 11V4.7a1.25 1.25 0 0 1 2.5 0V11M13.5 11V5.7a1.25 1.25 0 0 1 2.5 0V12M16 12V8.2a1.25 1.25 0 0 1 2.5 0v6.3c0 3.6-2.6 6-6 6-2.5 0-3.9-1-5.3-3l-2.6-3.8a1.3 1.3 0 0 1 2-1.6l1.9 2"/></g>',{groesse:18}),punkt:'<span class="hs-punkt" aria-hidden="true"></span>'};function q0(s){return X0[{"hand-zeigen":"hand",naeher:"naeher","ganz-ins-bild":"rahmen","finger-spreizen":"spreizen","gesicht-zeigen":"gesicht","kopf-drehen":"kopfDrehen",schultern:"schultern",handruecken:"wenden"}[s]]||X0.punkt}var Lf={daumen:"Daumen",zeige:"Zeigefinger",mittel:"Mittelfinger",ring:"Ringfinger",klein:"Kleiner Finger"},Nf={ring:{titel:"Zeig deine Hand",schritte:["Halte die Hand mit dem Handr\xFCcken zur Kamera, die Finger leicht gespreizt.","Dreh sie langsam \u2013 der Ring folgt jeder Bewegung.","Tippe auf die kleine Hand, um den Finger zu w\xE4hlen."]},armband:{titel:"Zeig dein Handgelenk",schritte:["Halte Hand und Handgelenk mit dem Handr\xFCcken zur Kamera.","Dreh die Hand langsam hin und her.","Ruhiges, helles Licht l\xE4sst das Gold am sch\xF6nsten wirken."]},ohrringe:{titel:"Zeig deine Ohren",schritte:["Streich die Haare hinters Ohr.","Dreh den Kopf leicht zur Seite \u2013 die Ohrringe schwingen mit.","Gleichm\xE4\xDFiges Licht von vorn ist ideal."]},kette:{titel:"Zeig Hals und Schultern",schritte:["Geh etwas auf Abstand zur Kamera, sodass Hals und Schultern zu sehen sind.","Ein offener Kragen zeigt die Kette am sch\xF6nsten.","Schau entspannt in die Kamera."]}},ta=6,_o={klein:{x:130.5+ta,y:139,winkel:10,laenge:52,breite:15},ring:{x:114+ta,y:127,winkel:4,laenge:70,breite:17},mittel:{x:96+ta,y:124,winkel:-1,laenge:77,breite:18},zeige:{x:77.5+ta,y:128,winkel:-7,laenge:67,breite:17.5},daumen:{x:55.3+ta,y:156.4,winkel:-42,laenge:47,breite:20}},Tt=s=>Math.round(s*10)/10;function gh(s){let e=s.winkel*Math.PI/180,t={x:Math.sin(e),y:-Math.cos(e)},n={x:Math.cos(e),y:Math.sin(e)},i={x:s.x+t.x*s.laenge,y:s.y+t.y*s.laenge},r=s.breite/2,a=s.breite*.88/2,o=(l,c,h)=>({x:Tt(l.x+n.x*c*h),y:Tt(l.y+n.y*c*h)});return{rechtsUnten:o(s,1,r),linksUnten:o(s,-1,r),rechtsOben:o(i,1,a),linksOben:o(i,-1,a),rSpitze:Tt(a),dir:t,quer:n,spitze:i}}function sw(s,e){let t=gh(s);return{x:s.x+t.dir.x*s.laenge*e,y:s.y+t.dir.y*s.laenge*e,quer:t.quer,breite:s.breite}}var Cn=s=>Tt(s+ta);function rw(){let s=["klein","ring","mittel","zeige"],e=`M${Cn(129)} 238C${Cn(128.5)} 228 ${Cn(128)} 220 ${Cn(128.5)} 212C${Cn(131.5)} 192 ${Cn(138)} 166 ${Cn(137.9)} 141`,t=null;for(let i of s){let r=gh(_o[i]);if(t){let a=(t.x+r.rechtsUnten.x)/2,o=Math.max(t.y,r.rechtsUnten.y)+5;e+=`Q${Tt(a)} ${Tt(o)} ${r.rechtsUnten.x} ${r.rechtsUnten.y}`}else e+=`L${r.rechtsUnten.x} ${r.rechtsUnten.y}`;e+=`L${r.rechtsOben.x} ${r.rechtsOben.y}A${r.rSpitze} ${r.rSpitze} 0 0 0 ${r.linksOben.x} ${r.linksOben.y}L${r.linksUnten.x} ${r.linksUnten.y}`,t=r.linksUnten}let n=gh(_o.daumen);return e+=`C${Tt(t.x-1.5)} ${Tt(t.y+8)} ${Tt(n.rechtsUnten.x+2.5)} ${Tt(n.rechtsUnten.y-6)} ${n.rechtsUnten.x} ${n.rechtsUnten.y}`,e+=`L${n.rechtsOben.x} ${n.rechtsOben.y}A${n.rSpitze} ${n.rSpitze} 0 0 0 ${n.linksOben.x} ${n.linksOben.y}`,e+=`L${n.linksUnten.x} ${n.linksUnten.y}C${Cn(51)} 178 ${Cn(66)} 194 ${Cn(71)} 211C${Cn(72)} 220 ${Cn(72)} 230 ${Cn(71.5)} 238`,e}function aw(s){let e=_o[s],t=gh(e),n={x:e.x-t.dir.x*8,y:e.y-t.dir.y*8},i=t.quer,r=e.breite/2+1;return`M${Tt(n.x+i.x*r)} ${Tt(n.y+i.y*r)}L${t.rechtsOben.x} ${t.rechtsOben.y}A${t.rSpitze} ${t.rSpitze} 0 0 0 ${t.linksOben.x} ${t.linksOben.y}L${Tt(n.x-i.x*r)} ${Tt(n.y-i.y*r)}Z`}function $0(s,e=.3,t=1.8){let n=sw(_o[s],e),i=n.breite/2+t,r={x:Tt(n.x-n.quer.x*i),y:Tt(n.y-n.quer.y*i)},a={x:Tt(n.x+n.quer.x*i),y:Tt(n.y+n.quer.y*i)};return{d:`M${r.x} ${r.y}Q${Tt(n.x)} ${Tt(n.y+3.2)} ${a.x} ${a.y}`,mitte:{x:Tt(n.x),y:Tt(n.y+1.6)}}}function xh(s,e,t){let n=t*.18;return`M${s} ${e-t}Q${s+n} ${e-n} ${s+t} ${e}Q${s+n} ${e+n} ${s} ${e+t}Q${s-n} ${e+n} ${s-t} ${e}Q${s-n} ${e-n} ${s} ${e-t}Z`}var K0=rw();function ow(s){let e=$0("ring"),t=s==="ring"?`<path class="anl-gold anl-ring" d="${e.d}"/>
       <path class="anl-funkeln" d="${xh(e.mitte.x+9,e.mitte.y-9,4.5)}"/>`:`<path class="anl-gold anl-kettchen" d="M73 206Q100 218 127 206"/>
       <g class="anl-pendel" style="transform-origin:100px 212px"><path class="anl-gold-fein" d="M100 212v6"/><circle class="anl-perle" cx="100" cy="222" r="3.6"/></g>
       <path class="anl-funkeln" d="${xh(134,196,4.5)}"/>`;return`<svg class="anl-svg" viewBox="0 0 200 240" aria-hidden="true" focusable="false">
    <g class="anl-pfeile"><path d="M30 92a78 78 0 0 0 0 64"/><path d="M26 150l4 6.5 5.5-5"/><path d="M170 156a78 78 0 0 0 0-64"/><path d="M174 98l-4-6.5-5.5 5"/></g>
    <g class="anl-figur anl-drehen">
      <path class="anl-linie anl-zeichnen" pathLength="1" d="${K0}"/>
      ${t}
    </g>
  </svg>`}function lw(){return`<svg class="anl-svg" viewBox="0 0 200 240" aria-hidden="true" focusable="false">
    <g class="anl-figur anl-kopf">
      <path class="anl-linie anl-zeichnen" pathLength="1" d="M100 40C127 40 144 62 144 92C144 118 133 139 116 150C110 154 104 156 100 156C96 156 90 154 84 150C67 139 56 118 56 92C56 62 73 40 100 40Z"/>
      <path class="anl-linie" d="M48 178C40 132 40 80 58 56C70 40 84 33 100 33C118 33 132 41 142 54"/>
      <path class="anl-linie-fein" d="M100 33C96 44 86 52 70 58"/>
      <path class="anl-linie-fein" d="M50 120C48 140 50 160 56 176"/>
      <g class="anl-zuege">
        <path class="anl-linie-fein" d="M77 83Q85 78.5 92 81.5M108 81.5Q115 78.5 123 83"/>
        <path class="anl-linie" d="M79 93Q85.5 97 92 93M108 93Q114.5 97 121 93"/>
        <path class="anl-linie-fein" d="M101 98C99.5 108 97.5 114 99.5 117.5C101.5 118.5 103.5 118 105 116.5"/>
        <path class="anl-lippen" d="M91 131Q95.5 128 100 130Q104.5 128 109 131Q100 138.5 91 131Z"/>
      </g>
      <path class="anl-linie" d="M144.5 90C153 85 157 99 151.5 107.5C149.5 111.5 147.5 113 145.5 112.5"/>
      <g class="anl-ohrring"><g class="anl-pendel" style="transform-origin:147px 114px">
        <circle class="anl-gold-punkt" cx="147" cy="114.5" r="1.7"/><path class="anl-gold-fein" d="M147 116v7.5"/><circle class="anl-perle" cx="147" cy="128" r="4.3"/>
      </g></g>
      <path class="anl-linie anl-straehne-vor" d="M142 54C152 72 154 96 149 120C146 138 150 160 156 180"/>
      <path class="anl-linie anl-straehne-hinter" d="M142 54C158 70 164 98 162 124C161 142 164 162 170 180"/>
      <path class="anl-linie" d="M87 149C88 162 87 172 83 182M113 149C112 162 113 172 117 182"/>
      <path class="anl-linie" d="M83 182C67 190 40 195 27 214M117 182C133 190 160 195 173 214"/>
    </g>
    <path class="anl-funkeln anl-funkeln-ohr" d="${xh(166,118,4.5)}"/>
  </svg>`}function cw(){let s=(e,t,n,i)=>`M${e} ${t+i*16}V${t}H${e+n*16}`;return`<svg class="anl-svg" viewBox="0 0 200 240" aria-hidden="true" focusable="false">
    <g class="anl-sucher">
      <path d="${s(14,14,1,1)}"/><path d="${s(186,14,-1,1)}"/><path d="${s(14,226,1,-1)}"/><path d="${s(186,226,-1,-1)}"/>
    </g>
    <g class="anl-figur anl-zoom">
      <path class="anl-linie" d="M66 14C72 44 88 58 100 58C112 58 128 44 134 14"/>
      <path class="anl-linie-fein" d="M92 47Q100 51 108 47"/>
      <path class="anl-linie" d="M80 50C82 70 80 84 73 98M120 50C118 70 120 84 127 98"/>
      <path class="anl-linie anl-zeichnen" pathLength="1" d="M73 98C56 107 32 111 10 126"/>
      <path class="anl-linie anl-zeichnen" pathLength="1" d="M127 98C144 107 168 111 190 126"/>
      <path class="anl-linie-fein" d="M58 119C70 116 84 120 94 125M142 119C130 116 116 120 106 125M96.5 123.5Q100 127 103.5 123.5"/>
      <path class="anl-linie-fein" d="M38 150C62 186 138 186 162 150"/>
      <path class="anl-gold anl-kette-linie" pathLength="1" d="M75 100C79 134 91 154 100 156C109 154 121 134 125 100"/>
      <g class="anl-pendel" style="transform-origin:100px 156px"><path class="anl-gold-fein" d="M100 156v3.5"/><circle class="anl-perle" cx="100" cy="164.5" r="5"/></g>
    </g>
    <path class="anl-funkeln" d="${xh(122,150,4.5)}"/>
  </svg>`}function Y0(s){return s==="ohrringe"?lw():s==="kette"?cw():ow(s)}function Z0(s="ring"){let e=Object.keys(_o).map(t=>{let n=$0(t,t==="daumen"?.42:.32,1.2),i=t===s;return`<g class="fw-finger${i?" aktiv":""}" data-finger="${t}" role="radio" tabindex="${i?0:-1}" aria-checked="${i}" aria-label="${Lf[t]}">
      <path class="fw-flaeche" d="${aw(t)}"/>
      <path class="fw-band" d="${n.d}"/>
    </g>`}).join("");return`<svg class="fw-svg" viewBox="24 40 136 190" role="radiogroup" aria-label="Finger w\xE4hlen">
    <path class="fw-umriss" d="${K0}"/>
    ${e}
  </svg>`}var j0={gold:"radial-gradient(circle at 32% 28%, #FFF4D6 0%, #EBCB86 26%, #C9A05A 58%, #94702F 100%)",silber:"radial-gradient(circle at 32% 28%, #FFFFFF 0%, #EDEFF1 30%, #BFC3C7 65%, #8A8F95 100%)",rosegold:"radial-gradient(circle at 32% 28%, #FFEFE7 0%, #EEC2AD 30%, #CF937C 64%, #9A6553 100%)",weissgold:"radial-gradient(circle at 32% 28%, #FFFFFF 0%, #F3EFE6 28%, #D2CBBC 64%, #A0988A 100%)"},_h=s=>String(s??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),hw=()=>typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,uw=s=>`
<div class="anprobe" data-zustand="intro" role="dialog" aria-modal="true" aria-labelledby="a-dialogtitel" hidden>
  <div class="a-schleier" data-aktion="schliessen"></div>
  <div class="a-fenster">
    <h2 id="a-dialogtitel" class="a-unsichtbar">Virtuelle Anprobe</h2>
    <div class="a-buehne" tabindex="-1" role="application" aria-roledescription="Anprobe-Ansicht"
         aria-label="Anprobe-Ansicht. Pfeiltasten verschieben den Schmuck, Plus und Minus \xE4ndern die Gr\xF6\xDFe, 0 setzt zur\xFCck.">
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
          <button type="button" class="a-knopf" data-aktion="kameraStarten">${$t.kamera}<span>Kamera starten</span></button>
          <button type="button" class="a-knopf zweit" data-aktion="fotoWaehlen">${$t.foto}<span>Foto w\xE4hlen</span></button>
        </div>
        <p class="a-datenschutz a-klein">${$t.schloss}<span>Die Kamera wird nur auf deinem Ger\xE4t ausgewertet. Es werden keine Bilder gespeichert oder \xFCbertragen.</span></p>
      </div>
    </section>

    <section class="a-seite a-laden" aria-labelledby="a-laden-titel">
      <div class="a-inhalt">
        <div class="a-ladesymbol">${$t.funkeln}</div>
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
      <button type="button" class="a-rund glas a-zuruecksetzen" data-aktion="zuruecksetzen" aria-label="Position und Gr\xF6\xDFe zur\xFCcksetzen">${$t.zuruecksetzen}</button>
      <div class="a-fingerwahl glas" hidden><div class="a-fingergrafik"></div><span class="a-fingername"></span></div>
      <div class="a-unten">
        <div class="a-varianten glas" hidden>
          <div class="a-swatches" role="radiogroup" aria-label="Variante w\xE4hlen"></div>
          <span class="a-variantenname" aria-hidden="true"></span>
        </div>
        <div class="a-leiste">
          <button type="button" class="a-rund glas a-links" data-aktion="fotoWaehlen" aria-label="Foto w\xE4hlen">${$t.foto}</button>
          <button type="button" class="a-ausloeser" data-aktion="ausloesen" aria-label="Foto aufnehmen">${$t.speichern}</button>
          <button type="button" class="a-rund glas a-rechts" data-aktion="kameraWechseln" aria-label="Kamera wechseln" hidden>${$t.wechseln}</button>
        </div>
      </div>
    </div>

    <section class="a-seite a-ergebnis" aria-labelledby="a-ergebnis-titel">
      <div class="a-inhalt">
        <div class="a-rahmen"><img alt="Deine Anprobe"></div>
        <div class="a-ergebnis-text">
          <span class="a-label">${_h(s)} \xB7 Anprobe</span>
          <h3 class="a-titel" id="a-ergebnis-titel">Deine Anprobe</h3>
          <p class="a-text a-ergebnis-produkt"></p>
          <div class="a-knoepfe-paar">
            <button type="button" class="a-knopf" data-aktion="teilen" hidden>${$t.teilen}<span>Teilen</span></button>
            <button type="button" class="a-knopf zweit" data-aktion="speichern">${$t.speichern}<span>Speichern</span></button>
          </div>
          <button type="button" class="a-textknopf" data-aktion="zurueck">Zur\xFCck zur Anprobe</button>
        </div>
      </div>
    </section>

    <section class="a-seite a-fehler" role="alert" aria-labelledby="a-fehler-titel">
      <div class="a-inhalt">
        ${$t.fehler}
        <h3 class="a-titel" id="a-fehler-titel"></h3>
        <p class="a-text a-fehler-text"></p>
        <div class="a-aktionen">
          <button type="button" class="a-knopf" data-aktion="fotoWaehlen">${$t.foto}<span>Foto w\xE4hlen</span></button>
          <button type="button" class="a-knopf zweit" data-aktion="erneut"><span>Erneut versuchen</span></button>
        </div>
      </div>
    </section>

    <header class="a-kopf">
      <div class="a-produkt"><img alt="" hidden><div class="a-produkt-text"><span class="a-produkt-name"></span><span class="a-produkt-preis"></span></div></div>
      <button type="button" class="a-rund a-schliessen" data-aktion="schliessen" aria-label="Anprobe schlie\xDFen">${$t.schliessen}</button>
    </header>
    <div class="a-unsichtbar a-ansage" aria-live="polite"></div>
    <input type="file" accept="image/*" class="a-unsichtbar a-datei" tabindex="-1" aria-hidden="true">
  </div>
</div>`,vh=class{constructor(e,{shopName:t="ARLISE",aktionen:n={}}={}){this.wurzel=e,this.aktionen=n,this.zustand="intro",this.produkt=null,this.vorherFokus=null,this.tippTimer=0;let i=document.createElement("style");i.textContent=G0,e.appendChild(i);let r=document.createElement("div");r.innerHTML=uw(t),this.el=r.firstElementChild,e.appendChild(this.el);let a=o=>this.el.querySelector(o);this.$=a,this.buehne=a(".a-buehne"),this.video=a(".a-video"),this.fotogrund=a(".a-fotogrund"),this.datei=a(".a-datei"),this.canvas=null,this.el.addEventListener("click",o=>this.beiKlick(o)),this.el.addEventListener("keydown",o=>this.beiTaste(o)),this.beiTasteAussen=o=>{if(!(!this.istOffen||o.composedPath().includes(this.el))){if(o.key==="Escape")o.preventDefault(),this.melde("schliessen");else if(o.key==="Tab"){o.preventDefault();let l=this.fokussierbare();l[0]&&l[0].focus({preventScroll:!0})}}},this.datei.addEventListener("change",()=>{let o=this.datei.files&&this.datei.files[0];this.datei.value="",o&&this.melde("fotoGewaehlt",o)}),this.richteGestenEin()}melde(e,...t){let n=this.aktionen[e];typeof n=="function"&&n(...t)}oeffne(e){this.produkt=e;let t=e.art;for(let o of[".a-produkt",".a-produktzeile"]){let l=this.$(o);l.querySelector(".a-produkt-name").textContent=e.titel,l.querySelector(".a-produkt-preis").textContent=e.preis||"";let c=l.querySelector("img");e.bildUrl?(c.hidden=!1,c.onerror=()=>{c.hidden=!0},c.src=e.bildUrl):(c.hidden=!0,c.removeAttribute("src"))}let n=Nf[t]||Nf.ring;this.$("#a-intro-titel").textContent=n.titel,this.$(".a-schritte").innerHTML=n.schritte.map(o=>`<li>${_h(o)}</li>`).join("");let i=this.$(".a-anleitung");i.dataset.art=t,i.innerHTML=Y0(t),this.$(".a-ergebnis-produkt").textContent=[e.titel,e.preis].filter(Boolean).join(" \xB7 "),this.$("#a-dialogtitel").textContent=`Virtuelle Anprobe: ${e.titel}`,this.setzeHinweis(null),this.setzeAnpassungAktiv(!1);let r=this.wurzel.getRootNode(),a=document.activeElement;for(;a&&a.shadowRoot&&a.shadowRoot.activeElement;)a=a.shadowRoot.activeElement;this.vorherFokus=a&&a!==document.body?a:null,r&&r.host&&r.host.contains&&r.host.contains(a)&&(this.vorherFokus=null),this.oeffnungen=(this.oeffnungen||0)+1,this.el.hidden=!1,this.zustand=null,this.setzeZustand("intro"),document.addEventListener("keydown",this.beiTasteAussen,!0),requestAnimationFrame(()=>requestAnimationFrame(()=>this.el.classList.add("offen")))}schliesse(){let e=this.oeffnungen;return document.removeEventListener("keydown",this.beiTasteAussen,!0),new Promise(t=>{this.el.classList.remove("offen"),clearTimeout(this.tippTimer);let n=()=>{if(e!==this.oeffnungen){t();return}if(this.el.hidden=!0,this.$(".a-anleitung").innerHTML="",this.$(".a-rahmen img").removeAttribute("src"),this.fotogrund.style.backgroundImage="",this.vorherFokus&&this.vorherFokus.isConnected)try{this.vorherFokus.focus({preventScroll:!0})}catch{}this.vorherFokus=null,t()},i=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;setTimeout(n,i?0:280)})}get istOffen(){return!this.el.hidden}setzeZustand(e){let t=this.zustand;this.zustand=e,this.el.dataset.zustand=e;let n=e==="live"||e==="foto";this.buehne.tabIndex=n?0:-1;let i=this.$(".a-links");if(e==="foto"?(i.setAttribute("aria-label","Anderes Foto w\xE4hlen"),this.$(".a-ausloeser").setAttribute("aria-label","Bild speichern")):e==="live"&&(i.setAttribute("aria-label","Foto w\xE4hlen"),this.$(".a-ausloeser").setAttribute("aria-label","Foto aufnehmen")),e!==t){let r={laden:"Die Anprobe wird vorbereitet.",live:"Die Kamera ist aktiv.",foto:"Dein Foto wird angezeigt.",ergebnis:"Deine Anprobe ist fertig."}[e];r&&this.sage(r);let a={intro:'[data-aktion="kameraStarten"]',laden:".a-laden .a-textknopf",live:".a-ausloeser",foto:".a-ausloeser",ergebnis:".a-ergebnis .a-knopf:not([hidden])",fehler:".a-fehler .a-knopf:not([hidden])"}[e];requestAnimationFrame(()=>{let o=a&&this.$(a);if(o&&this.zustand===e)try{o.focus({preventScroll:!0})}catch{}})}}setzeFortschritt(e,t){let n=Math.max(0,Math.min(1,e||0)),i=Math.round(n*100);this.$(".a-balken > span").style.transform=`scaleX(${n})`,this.$(".a-prozent").textContent=`${i} %`,this.$(".a-fortschritt").setAttribute("aria-valuenow",String(i)),t&&(this.$(".a-ladetext").textContent=t)}setzeVideo(e,t){this.video.srcObject=e||null,this.video.classList.toggle("gespiegelt",!!t)}setzeFotoGrund(e){this.fotogrund.style.backgroundImage=e?`url("${e}")`:""}neuesCanvas(){this.canvas&&this.canvas.remove();let e=document.createElement("canvas");return e.className="a-canvas",e.setAttribute("aria-hidden","true"),this.buehne.insertBefore(e,this.$(".a-blitz")),this.canvas=e,e}entferneCanvas(){this.canvas&&this.canvas.remove(),this.canvas=null}setzeHinweis(e){let t=e&&e.text?`${e.code}|${e.text}`:"";if(t===this.hinweisSchluessel)return;this.hinweisSchluessel=t;let n=this.$(".a-hinweis");if(!t){n.classList.remove("an");return}this.$(".a-hinweis-symbol").innerHTML=q0(e.code),this.$(".a-hinweis-text").textContent=e.text,n.classList.add("an")}setzeVarianten(e,t){let n=this.$(".a-varianten"),i=this.$(".a-swatches");if(!e||e.length<2){n.hidden=!0,i.innerHTML="";return}n.hidden=!1,i.innerHTML=e.map((r,a)=>{let o=r.spec&&r.spec.metall||"gold",l=a===t;return`<button type="button" class="a-swatch" role="radio" aria-checked="${l}" tabindex="${l?0:-1}" data-variante="${a}" aria-label="${_h(r.name)}" title="${_h(r.name)}"><i style="background:${j0[o]||j0.gold}"></i></button>`}).join(""),this.$(".a-variantenname").textContent=e[t]?e[t].name:""}setzeFingerSeite(e){this.$(".a-fingerwahl").classList.toggle("rechts",!!e)}fingerRechteck(){let e=this.$(".a-fingerwahl");return e.hidden?null:e.getBoundingClientRect()}setzeMilchglas(e){this.$(".a-laden").classList.toggle("milchglas",!!e)}setzeFinger(e){let t=this.$(".a-fingerwahl");if(!e){t.hidden=!0;return}t.hidden=!1;let n=this.wurzel.getRootNode().activeElement,i=n&&t.contains(n);if(this.$(".a-fingergrafik").innerHTML=Z0(e),this.$(".a-fingername").textContent=Lf[e]||"",i){let r=t.querySelector(`[data-finger="${e}"]`);r&&r.focus({preventScroll:!0})}}setzeKameraWechsel(e){this.$(".a-rechts").hidden=!e}setzeFotoModus(e,t=!0){let n=this.$(".a-rechts");e?(n.dataset.aktion="zurKamera",n.setAttribute("aria-label","Zur Live-Kamera"),n.innerHTML=$t.kamera,n.hidden=!t):(n.dataset.aktion="kameraWechseln",n.setAttribute("aria-label","Kamera wechseln"),n.innerHTML=$t.wechseln)}setzeAnpassungAktiv(e){this.$(".a-zuruecksetzen").classList.toggle("an",!!e)}setzeAusloeserAktiv(e){this.$(".a-ausloeser").disabled=!e}zeigeTipp(e,t=5200){let n=this.$(".a-tipp");n.textContent=e||(hw()?"Ziehen: verschieben \xB7 Zwei Finger: Gr\xF6\xDFe":"Ziehen: verschieben \xB7 Mausrad: Gr\xF6\xDFe \xB7 Doppelklick: zur\xFCck"),clearTimeout(this.tippTimer),requestAnimationFrame(()=>n.classList.add("an")),this.tippTimer=setTimeout(()=>n.classList.remove("an"),t)}blitz(){let e=this.$(".a-blitz");e.classList.remove("an"),e.offsetWidth,e.classList.add("an")}setzeErgebnis(e,{teilenMoeglich:t}){let n=this.$(".a-rahmen img");n.src=e,this.$('[data-aktion="teilen"]').hidden=!t,this.$('[data-aktion="speichern"]').classList.toggle("zweit",!!t)}setzeFehler({titel:e,text:t,foto:n=!0,erneut:i=!0}){this.$("#a-fehler-titel").textContent=e,this.$(".a-fehler-text").textContent=t,this.$('.a-fehler [data-aktion="fotoWaehlen"]').hidden=!n,this.$('.a-fehler [data-aktion="erneut"]').hidden=!i,this.$('.a-fehler [data-aktion="erneut"]').classList.toggle("zweit",n)}waehleFoto(){this.datei.click()}sage(e){let t=this.$(".a-ansage");t.textContent="",setTimeout(()=>{t.textContent=e},30)}beiKlick(e){let t=e.target.closest("[data-aktion], [data-variante], [data-finger]");if(!t||!this.el.contains(t))return;if(t.dataset.variante!=null){this.melde("variante",Number(t.dataset.variante));return}if(t.dataset.finger){this.melde("finger",t.dataset.finger);return}let n=t.dataset.aktion;n==="fotoWaehlen"?this.waehleFoto():this.melde(n)}beiTaste(e){if(e.key==="Escape"){e.preventDefault(),e.stopPropagation(),this.melde("schliessen");return}if(e.key==="Tab"){this.fokusFalle(e);return}let t=e.composedPath(),n=t.find(i=>i instanceof Element&&i.getAttribute&&i.getAttribute("role")==="radio");if(n&&/^(ArrowLeft|ArrowRight|ArrowUp|ArrowDown)$/.test(e.key)){e.preventDefault();let i=[...n.closest('[role="radiogroup"]').querySelectorAll('[role="radio"]')],r=i.indexOf(n),a=e.key==="ArrowLeft"||e.key==="ArrowUp"?-1:1,o=i[(r+a+i.length)%i.length];o.dataset.variante!=null?this.melde("variante",Number(o.dataset.variante)):o.dataset.finger&&this.melde("finger",o.dataset.finger),requestAnimationFrame(()=>{let l=o.dataset.variante!=null?`[data-variante="${o.dataset.variante}"]`:`[data-finger="${o.dataset.finger}"]`,c=this.$(l);c&&c.focus({preventScroll:!0})});return}if(n&&(e.key==="Enter"||e.key===" ")&&n.dataset.finger){e.preventDefault(),this.melde("finger",n.dataset.finger);return}if(t.includes(this.buehne)&&(this.zustand==="live"||this.zustand==="foto")){let i=e.shiftKey?12:4,r={ArrowLeft:[-i,0],ArrowRight:[i,0],ArrowUp:[0,-i],ArrowDown:[0,i]}[e.key];if(r){e.preventDefault(),this.melde("verschieben",r[0],r[1]);return}if(e.key==="+"||e.key==="="){e.preventDefault(),this.melde("skalieren",1.05);return}if(e.key==="-"||e.key==="_"){e.preventDefault(),this.melde("skalieren",1/1.05);return}e.key==="0"&&(e.preventDefault(),this.melde("zuruecksetzen"))}}fokussierbare(){return[...this.el.querySelectorAll("button, [tabindex], input:not(.a-datei), a[href]")].filter(t=>{if(t.disabled||t.tabIndex<0||t.hidden||!t.getClientRects().length)return!1;let n=getComputedStyle(t);return n.visibility==="visible"&&n.display!=="none"})}fokusFalle(e){let t=this.fokussierbare();if(!t.length){e.preventDefault();return}let n=this.wurzel.getRootNode().activeElement,i=t.indexOf(n),r=null;e.shiftKey?r=i<=0?t[t.length-1]:null:r=i===-1||i===t.length-1?t[0]:null,r&&(e.preventDefault(),r.focus({preventScroll:!0}))}fokusHalten(e){if(!this.istOffen)return;let t=this.wurzel.getRootNode().host;if(t&&!e.composedPath().includes(t)){let n=this.fokussierbare();n[0]&&n[0].focus({preventScroll:!0})}}richteGestenEin(){let e=this.buehne,t=new Map,n=0,i={t:0,x:0,y:0},r=!1,a=null,o=()=>this.zustand==="live"||this.zustand==="foto",l=()=>{let[h,d]=[...t.values()];return Math.hypot(h.x-d.x,h.y-d.y)};e.addEventListener("pointerdown",h=>{if(!(!o()||h.target.closest("button"))&&!(h.pointerType==="mouse"&&h.button!==0)){try{e.setPointerCapture(h.pointerId)}catch{}t.set(h.pointerId,{x:h.clientX,y:h.clientY}),t.size===1?(r=!1,a={x:h.clientX,y:h.clientY,t:performance.now()},this.melde("ziehen",{phase:"start",clientX:h.clientX,clientY:h.clientY})):t.size===2&&(this.melde("ziehen",{phase:"ende",clientX:h.clientX,clientY:h.clientY}),n=l(),r=!0)}}),e.addEventListener("pointermove",h=>{if(t.has(h.pointerId)){if(t.set(h.pointerId,{x:h.clientX,y:h.clientY}),t.size===1)a&&Math.hypot(h.clientX-a.x,h.clientY-a.y)>6&&(r=!0),r&&this.melde("ziehen",{phase:"bewegung",clientX:h.clientX,clientY:h.clientY});else if(t.size===2&&n>0){let d=l();d>0&&(this.melde("skalieren",d/n),n=d)}}});let c=h=>{if(t.has(h.pointerId)){if(t.delete(h.pointerId),t.size===0){this.melde("ziehen",{phase:"ende",clientX:h.clientX,clientY:h.clientY});let d=performance.now();!r&&a&&d-a.t<300&&h.type==="pointerup"&&(d-i.t<320&&Math.hypot(h.clientX-i.x,h.clientY-i.y)<40?(this.melde("zuruecksetzen"),i={t:0,x:0,y:0}):i={t:d,x:h.clientX,y:h.clientY}),a=null}else if(t.size===1){let[d]=[...t.values()];this.melde("ziehen",{phase:"start",clientX:d.x,clientY:d.y})}}};e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c),e.addEventListener("wheel",h=>{if(!o())return;h.preventDefault();let d=h.deltaMode===1?h.deltaY*16:h.deltaY;this.melde("skalieren",Math.exp(-d*.0015))},{passive:!1}),e.addEventListener("gesturestart",h=>h.preventDefault())}};var dw={ring:"environment",armband:"environment",kette:"user",ohrringe:"user"},fw={ring:10,armband:25,kette:60,ohrringe:12},pw=.7,mw=1.4,yh=[{pixelRatio:2,qualitaet:"hoch"},{pixelRatio:1.5,qualitaet:"mittel"},{pixelRatio:1,qualitaet:"mittel"}],gw=24,sx=.5,J0=.6,xw=1.5,zf=[120,600],_w=8e3,vw=450,yw=.8,Mw=.45,Q0=2500,bw=1e4,Sw={ring:55,armband:80,kette:170,ohrringe:90},Ew=3,ww=15e3,Tw=-.3,ex=1e3,Aw=9e3,Rw=new T,tx={verweigert:{titel:"Kein Zugriff auf die Kamera",text:"Erlaube den Kamerazugriff in den Einstellungen deines Browsers \u2013 oder probiere den Schmuck an einem Foto von dir an."},"keine-kamera":{titel:"Keine Kamera gefunden",text:"Auf diesem Ger\xE4t ist keine Kamera verf\xFCgbar. W\xE4hle stattdessen ein Foto von dir."},belegt:{titel:"Die Kamera ist gerade belegt",text:"Schlie\xDFe andere Apps oder Tabs, die die Kamera nutzen, und versuche es erneut. Oder w\xE4hle ein Foto."},unsicher:{titel:"Kamera nicht verf\xFCgbar",text:"Die Kamera l\xE4sst sich nur auf sicheren Seiten (https) nutzen. Du kannst aber ein Foto w\xE4hlen."},laden:{titel:"Die Anprobe konnte nicht geladen werden",text:"Bitte pr\xFCfe deine Internetverbindung und versuche es noch einmal.",foto:!1},webgl:{titel:"3D-Darstellung nicht m\xF6glich",text:"Dein Browser unterst\xFCtzt die n\xF6tige 3D-Grafik leider nicht. Probiere es mit einem aktuellen Browser.",foto:!1,erneut:!1},foto:{titel:"Das Foto konnte nicht ge\xF6ffnet werden",text:"Bitte w\xE4hle ein anderes Bild (JPEG oder PNG).",erneut:!1},allgemein:{titel:"Etwas ist schiefgelaufen",text:"Bitte versuche es noch einmal."}},Cw=new Set(["verweigert","keine-kamera","belegt","unsicher"]),kw={ring:"Auf dem Foto ist keine Hand zu erkennen",armband:"Auf dem Foto ist keine Hand zu erkennen",ohrringe:"Auf dem Foto ist kein Gesicht zu erkennen",kette:"Auf dem Foto sind Hals und Schultern nicht zu erkennen"},vo=class extends Error{constructor(){super("abgebrochen"),this.name="Abbruch"}},Df=new Map;function Uf(s,e=In){let t=Df.get(s);if(t)return t;let n={anteil:0,text:"",fertig:!1,hoerer:new Set};return n.tracker=new $c(s,{konfig:e,onFortschritt:(i,r)=>{n.anteil=Math.max(n.anteil,i||0),r&&(n.text=r);for(let a of n.hoerer)a(n.anteil,n.text)}}),n.bereit=n.tracker.laden().then(()=>{n.fertig=!0,n.anteil=1;for(let i of n.hoerer)i(1,n.text);return n.tracker},i=>{throw n.fehler=i,Df.delete(s),i}),n.bereit.catch(()=>{}),Df.set(s,n),n}function Ff(s){let e=s&&s.name;return e==="NotAllowedError"||e==="PermissionDeniedError"||e==="SecurityError"?"verweigert":e==="NotFoundError"||e==="DevicesNotFoundError"||e==="OverconstrainedError"?"keine-kamera":e==="NotReadableError"||e==="TrackStartError"||e==="AbortError"?"belegt":e==="NichtSicher"?"unsicher":"allgemein"}function nx(s,e=40){return xs(s).replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,e).replace(/-+$/,"")||"schmuck"}function Iw(s=new Date){let e=t=>String(t).padStart(2,"0");return`${s.getFullYear()}${e(s.getMonth()+1)}${e(s.getDate())}-${e(s.getHours())}${e(s.getMinutes())}`}async function Pw(s){let e=URL.createObjectURL(s);try{let t=new Image;t.decoding="async",t.src=e,await t.decode();let n=t.naturalWidth,i=t.naturalHeight;if(!n||!i)throw new Error("Bild leer");let r=Math.min(1,1920/Math.max(n,i)),a=document.createElement("canvas");a.width=Math.round(n*r),a.height=Math.round(i*r);let o=a.getContext("2d");return o.imageSmoothingQuality="high",o.drawImage(t,0,0,a.width,a.height),{canvas:a,url:e}}catch(t){throw URL.revokeObjectURL(e),t}}function bh(s,e,t){return s<e?e:s>t?t:s}function Lw(s,e){if(s<=sx*e)return 0;let t=bh((s-zf[0])/(zf[1]-zf[0]),0,1),n=J0+(xw-J0)*t*t*(3-2*t);return Math.min(_w,s*n)}function Nw(){try{let s=navigator.scheduling;return!!(s&&typeof s.isInputPending=="function"&&s.isInputPending())}catch{return!1}}function zw(s,e,t){return new Promise((n,i)=>{let r=0,a=0,o=c=>{clearTimeout(r),clearInterval(a),s.removeEventListener("loadedmetadata",l),c()},l=()=>o(n);if(s.readyState>=1){n();return}s.addEventListener("loadedmetadata",l),r=setTimeout(()=>o(()=>{let c=new Error("Die Kamera liefert kein Bild");c.name="NotReadableError",i(c)}),t),a=setInterval(()=>{s.srcObject!==e&&o(()=>i(new vo))},200)})}function Mh(s){return new Promise(e=>setTimeout(e,s))}var Sh=class{constructor(e,{konfig:t}={}){this.konfig=t||In,this.zustand="zu",this.sitzung=0,this.produkt=null,this.vorrat=null,this.tracker=null,this.buehne=null,this.stream=null,this.spiegel=!0,this.richtung="user",this.geraete=0,this.modelle=new Map,this.variante=0,this.finger=null,this.anpassung={skala:1,versatzMm:new T},this.ergebnis=null,this.fotoQuelle=null,this.objektUrls=new Set,this.stufe=0,this.laufId=0,this.kameraNr=0,this.wechselt=!1,this.nimmtAuf=!1,this.statistik=this.neueStatistik(),this.debugObjekt=null,this.fenster=new vh(e,{shopName:this.konfig.shopName,aktionen:{kameraStarten:()=>this.kameraStarten(),fotoGewaehlt:n=>this.fotoGewaehlt(n),schliessen:()=>this.schliesse(),ausloesen:()=>this.ausloesen(),kameraWechseln:()=>this.kameraWechseln(),zurKamera:()=>this.kameraStarten(),variante:n=>this.waehleVariante(n),finger:n=>this.waehleFinger(n),teilen:()=>this.teilen(),speichern:()=>this.speichern(),zurueck:()=>this.zurueckZurAnprobe(),erneut:()=>this.kameraStarten(),ziehen:n=>this.ziehen(n),verschieben:(n,i)=>this.verschiebeUm(n,i),skalieren:n=>this.skaliere(n),zuruecksetzen:()=>this.setzeAnpassungZurueck()}}),this.eingabeBis=0,this.beiEingabe=()=>{this.eingabeBis=performance.now()+vw};for(let n of["pointerdown","keydown","wheel","touchstart"])this.fenster.el.addEventListener(n,this.beiEingabe,{capture:!0,passive:!0});this.beiSichtbarkeit=()=>this.sichtbarkeitGeaendert(),this.beiFokus=n=>this.fenster.fokusHalten(n),this.groesse=new ResizeObserver(()=>this.ansichtAnpassen()),this.richteDebugEin()}async oeffne(e){if(!e||!e.art)throw new Error("Anprobe: Produkt ohne Art");this.zustand!=="zu"&&await this.schliesse(),this.sitzung++,this.wechselt=!1,this.nimmtAuf=!1,this.pausiert=!1,this.entsorgeBuehne(),this.fotoQuelle=null,this.ergebnis=null,this.produkt=e,this.variante=e.startVariante>0&&e.startVariante<e.varianten.length?e.startVariante:0,this.finger=e.art==="ring"?e.finger||"ring":null,this.anpassung={skala:1,versatzMm:new T},this.richtung=dw[e.art]||"user",this.geraetId=null,this.stufe=0,this.statistik=this.neueStatistik(),this.tippGezeigt=!1,this.richteDebugEin(),this.scrollGesperrt||(this.scrollGesperrt=!0,this.scrollVorher=document.documentElement.style.overflow,document.documentElement.style.overflow="hidden"),document.addEventListener("visibilitychange",this.beiSichtbarkeit),document.addEventListener("focusin",this.beiFokus),this.groesse.observe(this.fenster.buehne),this.fenster.setzeFinger(null),this.fingerRechts=!1,this.fenster.setzeFingerSeite(!1),this.fenster.setzeVarianten(e.varianten,this.variante),this.fenster.setzeFotoModus(!1),this.fenster.setzeKameraWechsel(!1),this.fenster.oeffne(e),this.setzeZustand("intro"),this.vorrat=Uf(e.art,this.konfig)}async schliesse(){if(this.zustand!=="zu"&&(this.sitzung++,this.kameraNr++,this.wechselt=!1,this.nimmtAuf=!1,this.pausiert=!1,clearTimeout(this.ergebnisKameraUhr),this.setzeZustand("zu"),this.stoppeSchleife(),this.stoppeKamera(),this.fenster.setzeVideo(null),document.removeEventListener("visibilitychange",this.beiSichtbarkeit),document.removeEventListener("focusin",this.beiFokus),this.groesse.disconnect(),this.vorrat&&this.ladeHoerer&&this.vorrat.hoerer.delete(this.ladeHoerer),await this.fenster.schliesse(),this.zustand==="zu")){this.entsorgeBuehne(),this.tracker&&this.tracker.zuruecksetzen();for(let e of this.objektUrls)URL.revokeObjectURL(e);this.objektUrls.clear(),this.fotoQuelle=null,this.ergebnis=null,this.ergebnisBlob=null,this.scrollGesperrt&&(this.scrollGesperrt=!1,document.documentElement.style.overflow=this.scrollVorher||"")}}setzeZustand(e){this.zustand=e,e!=="zu"&&this.fenster.setzeZustand(e),this.debugObjekt&&(this.debugObjekt.zustand=e)}ladeFortschrittVerfolgen(){let e=this.vorrat;this.ladeHoerer&&e.hoerer.delete(this.ladeHoerer);let t=(n,i)=>{if(this.zustand!=="laden")return;let r=.9*n+.05*(this.kameraBereit?1:0)+.05*(this.buehne?1:0),a=n>=1&&!this.kameraBereit?"Kamera wird gestartet":i||e.text||"Lade";this.fenster.setzeFortschritt(r,a)};return this.ladeHoerer=t,e.hoerer.add(t),t(e.anteil,e.text),t}async kameraStarten(){let e=this.sitzung;if(this.zustand==="zu"||this.zustand==="laden")return;this.stoppeSchleife(),this.fotoQuelle=null,this.buehne&&this.buehne.setzeFokus(null),this.fenster.setzeFotoGrund(null),this.fenster.setzeFotoModus(!1),(!this.vorrat||this.vorrat.fehler)&&(this.vorrat=Uf(this.produkt.art,this.konfig)),this.kameraBereit=!1,this.fenster.setzeMilchglas(!1),this.setzeZustand("laden");let t=this.ladeFortschrittVerfolgen();t(this.vorrat.anteil,this.vorrat.text||"Starte Kamera");let n=this.starteKamera(e).then(()=>{this.kameraBereit=!0,this.fenster.setzeMilchglas(!0),t(this.vorrat.anteil)});n.catch(o=>{e===this.sitzung&&this.zustand==="laden"&&o.name!=="Abbruch"&&this.zeigeFehler(Ff(o),o)});let i=null;try{if(await Mh(16),e!==this.sitzung)return;this.bereiteBuehne(),t(this.vorrat.anteil)}catch(o){i=o}let[r,a]=await Promise.allSettled([n,this.vorrat.bereit]);if(e===this.sitzung){if(this.zustand!=="laden"){this.stoppeKamera();return}if(r.status!=="rejected"){if(i){this.stoppeKamera(),this.zeigeFehler("webgl",i);return}if(a.status==="rejected"){this.stoppeKamera(),this.zeigeFehler("laden",a.reason);return}this.tracker=a.value,this.tracker.zuruecksetzen();try{await this.zeigeVariante(this.variante,e)}catch(o){if(e!==this.sitzung)return;this.stoppeKamera(),this.zeigeFehler("allgemein",o);return}if(!(e!==this.sitzung||this.zustand!=="laden")){try{this.quelleSetzen(!0),await Promise.race([this.buehne.vorbereiten(),Mh(4e3)])}catch(o){this.meldeFehler(o)}e!==this.sitzung||this.zustand!=="laden"||(this.fenster.setzeFortschritt(1,"Bereit"),this.quelleSetzen(!0),this.ansichtAnpassen(),this.fenster.setzeFinger(this.finger),this.fenster.setzeVarianten(this.produkt.varianten,this.variante),await Mh(180),!(e!==this.sitzung||this.zustand!=="laden")&&(this.setzeZustand("live"),this.starteSchleife(),this.tippGezeigt||(this.tippGezeigt=!0,setTimeout(()=>{e===this.sitzung&&this.zustand==="live"&&this.fenster.zeigeTipp()},1400))))}}}}festeQualitaet(){let e=this.konfig.qualitaet;return e==="hoch"||e==="mittel"||e==="niedrig"?e:null}bereiteBuehne(){if(this.buehne)return this.buehne;let e=this.fenster.neuesCanvas(),t=yh[this.stufe];return this.buehne=new mh(e,{pixelRatio:Math.min(window.devicePixelRatio||1,t.pixelRatio),qualitaet:this.festeQualitaet()||t.qualitaet}),this.quelleInfo=null,this.buehne.onKontextVerlust=()=>this.kontextVerloren(),this.ansichtAnpassen(),this.buehne}kontextVerloren(){this.meldeFehler(new Error("WebGL-Kontext verloren")),this.stoppeSchleife(),this.kontextNeuNoetig=!0,document.visibilityState==="visible"&&setTimeout(()=>this.kontextWiederherstellen(),300)}async kontextWiederherstellen(){if(!this.kontextNeuNoetig||this.zustand==="zu"||document.visibilityState!=="visible")return;this.kontextNeuNoetig=!1;let e=this.sitzung,t=this.zustand;this.entsorgeBuehne();try{this.bereiteBuehne(),await this.zeigeVariante(this.variante,e)}catch(n){e===this.sitzung&&this.zeigeFehler("webgl",n);return}e===this.sitzung&&(this.quelleSetzen(!0),this.zustand==="live"||this.zustand==="foto"?this.starteSchleife():t==="ergebnis"&&this.rendereEinmal())}entsorgeBuehne(){if(this.buehne)try{this.buehne.dispose()}catch(e){this.meldeFehler(e)}this.buehne=null,this.fenster.entferneCanvas();for(let e of this.modelle.values())try{e.dispose()}catch{}this.modelle.clear()}kameraBedingungen(){let e=window.innerHeight>window.innerWidth&&Math.min(window.innerWidth,window.innerHeight)<900,t={width:{ideal:e?720:1280},height:{ideal:e?1280:720},frameRate:{ideal:30}};return this.geraetId?t.deviceId={exact:this.geraetId}:t.facingMode={ideal:this.richtung},{audio:!1,video:t}}async starteKamera(e){if(!window.isSecureContext){let l=new Error("Kamera nur ueber https");throw l.name="NichtSicher",l}if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){let l=new Error("getUserMedia fehlt");throw l.name="NotFoundError",l}let t=++this.kameraNr;this.stoppeKamera();let n;try{n=await navigator.mediaDevices.getUserMedia(this.kameraBedingungen())}catch(l){if(this.geraetId&&(l.name==="OverconstrainedError"||l.name==="NotFoundError"))this.geraetId=null,n=await navigator.mediaDevices.getUserMedia(this.kameraBedingungen());else throw l}let i=()=>{if(!(e===this.sitzung&&this.zustand!=="zu"&&t===this.kameraNr)){for(let l of n.getTracks())l.stop();throw this.stream===n&&(this.stream=null,this.richteDebugKamera()),new vo}};i(),this.stream&&this.stream!==n&&this.stoppeKamera(),this.stream=n;let r=n.getVideoTracks()[0],a=r&&r.getSettings&&r.getSettings()||{};this.spiegel=a.facingMode!=="environment",(a.facingMode==="user"||a.facingMode==="environment")&&(this.richtung=a.facingMode),this.kameraFps=a.frameRate||30,r.addEventListener("ended",()=>{this.stream===n&&this.zustand==="live"&&this.zeigeFehler("belegt",new Error("Kamera beendet"))});let o=this.fenster.video;this.fenster.setzeVideo(n,this.spiegel);try{await zw(o,n,bw)}catch(l){for(let c of n.getTracks())c.stop();throw this.stream===n&&(this.stream=null,this.richteDebugKamera()),i(),l}i();try{await o.play()}catch{}if(i(),this.stream!==n)throw new vo;try{let l=await navigator.mediaDevices.enumerateDevices();this.kameras=l.filter(c=>c.kind==="videoinput"),this.geraete=this.kameras.length}catch{this.geraete=1}return this.fenster.setzeKameraWechsel(this.geraete>1),this.aktuellesGeraet=a.deviceId||null,this.richteDebugKamera(),n}stoppeKamera(){if(this.stream)for(let e of this.stream.getTracks())e.stop();this.stream=null,this.richteDebugKamera()}async kameraWechseln(){if(this.wechselt||this.zustand!=="live"||this.geraete<2)return;this.wechselt=!0;let e=this.sitzung,t={richtung:this.richtung,geraetId:this.geraetId};try{if(this.stoppeSchleife(),this.richtung&&this.aktuellesGeraetHatRichtung())this.geraetId=null,this.richtung=this.richtung==="user"?"environment":"user";else{let n=(this.kameras||[]).map(r=>r.deviceId).filter(Boolean),i=n.indexOf(this.aktuellesGeraet);this.geraetId=n.length?n[(i+1)%n.length]:null}if(await this.starteKamera(e),e!==this.sitzung)return;this.tracker.zuruecksetzen(),this.quelleSetzen(!0),this.starteSchleife()}catch(n){if(e!==this.sitzung||n.name==="Abbruch")return;this.richtung=t.richtung,this.geraetId=t.geraetId;try{if(await this.starteKamera(e),e!==this.sitzung||this.zustand!=="live")return;this.tracker.zuruecksetzen(),this.quelleSetzen(!0),this.starteSchleife(),this.fenster.sage("Die andere Kamera ist gerade nicht verf\xFCgbar.")}catch(i){e===this.sitzung&&i.name!=="Abbruch"&&this.zeigeFehler(Ff(i),i)}}finally{e===this.sitzung&&(this.wechselt=!1)}}aktuellesGeraetHatRichtung(){let e=this.stream&&this.stream.getVideoTracks()[0],t=e&&e.getSettings?e.getSettings().facingMode:null;return t==="user"||t==="environment"}sichtbarkeitGeaendert(){if(document.hidden){this.stream&&(this.pausiert=!0,this.zustand==="live"&&this.stoppeSchleife(),this.stoppeKamera());return}if(this.kontextNeuNoetig&&this.kontextWiederherstellen(),!this.pausiert||(this.pausiert=!1,this.zustand!=="live"&&this.zustand!=="laden"))return;let e=this.sitzung;this.starteKamera(e).then(()=>{e!==this.sitzung||this.zustand!=="live"||(this.tracker&&this.tracker.zuruecksetzen(),this.quelleSetzen(!0),this.starteSchleife())},t=>{e===this.sitzung&&t.name!=="Abbruch"&&this.zeigeFehler(Ff(t),t)})}quelleSetzen(e=!1){if(!this.buehne)return!1;let t,n,i,r;if(this.fotoQuelle?(t=this.fotoQuelle.canvas,n=t.width,i=t.height,r=!1):(t=this.fenster.video,n=t.videoWidth,i=t.videoHeight,r=this.spiegel),!n||!i)return!1;let a=this.quelleInfo;return!e&&a&&a.quelle===t&&a.W===n&&a.H===i&&a.spiegel===r||(this.quelleInfo={quelle:t,W:n,H:i,spiegel:r},this.buehne.setzeQuelle(t,{W:n,H:i,spiegel:r,statisch:!!this.fotoQuelle}),this.ansichtAnpassen()),!0}ansichtAnpassen(){if(!this.buehne)return;let e=this.fenster.buehne.getBoundingClientRect();e.width<2||e.height<2||(this.buehne.setzeAnsicht(e.width,e.height,this.fotoQuelle?"contain":"cover"),(this.zustand==="foto"||this.zustand==="ergebnis")&&this.rendereEinmal(),this.weckeFoto())}rendereEinmal(){if(!(!this.buehne||!this.ergebnis))try{this.buehne.aktualisiere(this.ergebnis,0),this.buehne.rendere()}catch(e){this.meldeFehler(e)}}starteSchleife(){this.stoppeSchleife();let e=++this.laufId,t=this.fenster.video,n=!!this.fotoQuelle,i=!n&&typeof t.requestVideoFrameCallback=="function";this.letzterFrame=null,this.letztePraesentiert=null,this.letzteVideoZeit=null,this.fotoSchlaeft=!1,n&&(this.fotoRuheAb=performance.now()+Q0);let r=(o,l)=>{if(e!==this.laufId)return;if(this.raf=0,this.rvfc=null,!n){if(Nw()){this.pauseTimer=setTimeout(a,0);return}let f=this.eingabeBis-performance.now();if(f>0&&this.statistik.schrittMs>sx*1e3/bh(this.kameraFps||30,10,60)){this.pauseTimer=setTimeout(a,f);return}if(!i){let p=t.currentTime;if(p===this.letzteVideoZeit&&!t.paused){a();return}this.letzteVideoZeit=p}}let c=performance.now();if(this.frame(o,l),e!==this.laufId)return;let h=performance.now()-c;if(n){if(performance.now()>this.fotoRuheAb){this.fotoSchlaeft=!0;return}a();return}let d=1e3/bh(this.kameraFps||30,10,60),u=Lw(h,d);u>=4?this.pauseTimer=setTimeout(a,u):a()},a=()=>{this.pauseTimer=0,e===this.laufId&&(i?this.rvfc={video:t,id:t.requestVideoFrameCallback(r)}:this.raf=requestAnimationFrame(r))};a()}stoppeSchleife(){this.laufId++,this.raf&&cancelAnimationFrame(this.raf),this.rvfc&&this.rvfc.video.cancelVideoFrameCallback&&this.rvfc.video.cancelVideoFrameCallback(this.rvfc.id),this.pauseTimer&&clearTimeout(this.pauseTimer),this.raf=0,this.rvfc=null,this.pauseTimer=0}weckeFoto(){this.zustand!=="foto"||!this.buehne||(this.fotoRuheAb=performance.now()+Q0,(this.fotoSchlaeft||!this.raf&&!this.rvfc&&!this.pauseTimer)&&this.starteSchleife())}frame(e,t){if(!this.buehne||!this.tracker)return;if(t&&t.presentedFrames!=null){let c=this.statistik;if(this.letztePraesentiert!=null){let h=t.presentedFrames-this.letztePraesentiert;h>0&&(c.gezeigt+=h,c.verpasst+=h-1)}this.letztePraesentiert=t.presentedFrames}let n=!!this.fotoQuelle;if(!this.quelleSetzen())return;let{W:i,H:r,spiegel:a,quelle:o}=this.quelleInfo,l=this.letzterFrame==null?1/30:Math.min(.1,Math.max(0,(e-this.letzterFrame)/1e3));this.letzterFrame=e;try{let c=performance.now();if(!n){let u=performance.now();this.letzteZeit!=null&&u<=this.letzteZeit&&(u=this.letzteZeit+1),this.letzteZeit=u;let f=1e3/bh(this.kameraFps||30,10,60),p=this.statistik;p.schrittMs>yw*f?this.sparen=!0:p.schrittMs<Mw*f&&(this.sparen=!1),this.ergebnis=this.tracker.verarbeite(o,u,{W:i,H:r,spiegel:a,sparen:!!this.sparen})}let h=performance.now();this.buehne.aktualisiere(this.ergebnis,l),this.buehne.rendere();let d=performance.now();this.fehlerFolge=0,this.messe(e,n?this.statistik.trackingMs:h-c,d-h),n||this.fenster.setzeHinweis(this.hinweisFuer(this.ergebnis)),this.fingerKachelAusweichen(e)}catch(c){this.meldeFehler(c),this.fehlerFolge=(this.fehlerFolge||0)+1,this.fehlerFolge>45&&(this.stoppeSchleife(),this.stoppeKamera(),this.zeigeFehler("allgemein",c))}if(this.debugObjekt){let c=this.debugObjekt;c.ergebnis=this.ergebnis,c.fps=this.statistik.fps,c.renderMs=this.statistik.renderMs,c.trackingMs=this.statistik.trackingMs,c.sparen=!!this.sparen}}fingerKachelAusweichen(e){if(!this.finger||!this.buehne||!this.buehne.sicht||this.kachelPruefung&&e-this.kachelPruefung<300)return;this.kachelPruefung=e;let t=this.aktuellerAnker(),n=this.fenster.fingerRechteck();if(!t||!n||!(t.sichtbar>.05)||!this.fenster.canvas)return;let i=this.fenster.canvas.getBoundingClientRect(),r=this.buehne.sicht,a=i.left+(t.position.x-r.links)*r.cssProPx,o=i.top+(r.oben-t.position.y)*r.cssProPx,l=28+12*t.pxProMm*r.cssProPx;a>n.left-l&&a<n.right+l&&o>n.top-l&&o<n.bottom+l&&(this.fingerRechts=!this.fingerRechts,this.fenster.setzeFingerSeite(this.fingerRechts))}ringMitOberteil(){let e=this.produkt&&this.produkt.varianten[this.variante],t=e&&e.spec&&e.spec.ring&&e.spec.ring.typ;return!!t&&t!=="band"&&t!=="kette"}ringOberteilAbgewandt(e){if(!e||!e.gefunden||this.produkt.art!=="ring"||!this.ringMitOberteil())return!1;let t=e.anker&&e.anker.ring&&e.anker.ring[this.finger];return!t||!t.quaternion?!1:Rw.set(0,0,1).applyQuaternion(t.quaternion).z<Tw}hinweisFuer(e){let t=e&&e.hinweis;if(t&&t.code!=="finger-spreizen")return this.rueckenSeit=null,t;if(!this.ringOberteilAbgewandt(e))return this.rueckenSeit=null,t;let n=performance.now();this.rueckenSeit==null&&(this.rueckenSeit=n);let i=n-this.rueckenSeit;return i>ex&&i<ex+Aw?{code:"handruecken",text:"Dreh die Hand \u2013 Handr\xFCcken zur Kamera"}:t}neueStatistik(){return{fps:0,renderMs:0,trackingMs:0,schrittMs:0,fpsStart:0,fpsFrames:0,fensterStart:0,frames:0,schlecht:0,gezeigt:0,verpasst:0}}messe(e,t,n){let i=this.statistik,r=.1;i.trackingMs=i.trackingMs?i.trackingMs+r*(t-i.trackingMs):t,i.renderMs=i.renderMs?i.renderMs+r*(n-i.renderMs):n;let a=t+n;if(i.schrittMs=i.schrittMs?i.schrittMs+.25*(a-i.schrittMs):a,!i.fpsStart)i.fpsStart=e;else{i.fpsFrames++;let o=e-i.fpsStart;if(o>=1e3){let l=i.fpsFrames*1e3/o;i.fps=i.fps?.5*(i.fps+l):l,i.fpsStart=e,i.fpsFrames=0}}if(i.fensterStart||(i.fensterStart=e),i.frames++,e-i.fensterStart>=2e3){let o=i.frames*1e3/(e-i.fensterStart),l=i.gezeigt>0?i.verpasst/i.gezeigt:0,c=i.trackingMs+i.renderMs,h=o<gw&&(c>28||l>.25&&c>16);i.schlecht=h?i.schlecht+1:0,i.fensterStart=e,i.frames=0,i.gezeigt=0,i.verpasst=0,i.schlecht>=2&&document.visibilityState==="visible"&&!this.festeQualitaet()&&(i.schlecht=0,this.senkeQualitaet())}}senkeQualitaet(){if(this.stufe>=yh.length-1||!this.buehne)return;this.stufe++;let e=yh[this.stufe],t=Math.min(window.devicePixelRatio||1,e.pixelRatio);if(this.debugObjekt&&(this.debugObjekt.qualitaet={stufe:this.stufe,...e}),typeof this.buehne.setzeQualitaet=="function"){this.buehne.setzeQualitaet({pixelRatio:t,qualitaet:e.qualitaet}),this.ansichtAnpassen();return}let n=this.modelle.get(this.variante);try{this.buehne.dispose()}catch(i){this.meldeFehler(i)}this.buehne=null,this.bereiteBuehne(),n&&this.buehne.setzeSchmuck(n,{finger:this.finger||void 0,freigeben:!1}),this.buehne.setzeAnpassung(this.anpassung),this.quelleSetzen(!0),this.fenster.canvas&&(this.fenster.canvas.style.transition="none")}async baueModell(e,t=this.sitzung){if(this.modelle.has(e))return this.modelle.get(e);let n=this.produkt.varianten[e],i;if(n.glbUrl)try{i=await Xg(n.glbUrl,{...n.spec,art:this.produkt.art})}catch(r){this.meldeFehler(r),i=Dc({...n.spec,art:this.produkt.art})}else i=Dc({...n.spec,art:this.produkt.art});if(t!==this.sitzung){try{i.dispose()}catch{}return null}if(this.modelle.has(e)){try{i.dispose()}catch{}return this.modelle.get(e)}return this.modelle.set(e,i),i}async zeigeVariante(e,t=this.sitzung){let n=await this.baueModell(e,t);!n||t!==this.sitzung||!this.buehne||(this.variante=e,this.buehne.setzeSchmuck(n,{finger:this.finger||void 0,freigeben:!1}),this.buehne.setzeAnpassung(this.anpassung),this.debugObjekt&&(this.debugObjekt.variante=e))}async waehleVariante(e){if(!(!this.produkt||!this.produkt.varianten[e]||e===this.variante)){this.fenster.setzeVarianten(this.produkt.varianten,e),this.variante=e;try{await this.zeigeVariante(e),this.fenster.sage(`Variante ${this.produkt.varianten[e].name}`),this.zustand==="foto"&&(this.rendereEinmal(),this.weckeFoto())}catch(t){this.meldeFehler(t)}}}waehleFinger(e){!this.finger||e===this.finger||(this.finger=e,this.anpassung.versatzMm.set(0,0,0),this.fenster.setzeFinger(e),this.buehne&&(this.buehne.setzeFinger(e),this.buehne.setzeAnpassung(this.anpassung)),this.anpassungGeaendert(),this.weckeFoto(),this.debugObjekt&&(this.debugObjekt.finger=e))}aktuellerAnker(){let e=this.ergebnis&&this.ergebnis.anker;if(!e)return null;switch(this.produkt.art){case"ring":return e.ring?e.ring[this.finger]:null;case"armband":return e.armband||null;case"kette":return e.kette||null;default:{let t=e.ohrR,n=e.ohrL;return t&&(!n||(t.sichtbar||0)>=(n.sichtbar||0))?t:n||null}}}bildschirmZuMm(e,t,n,i){let r=this.aktuellerAnker();if(!r||!r.pxProMm||!this.buehne)return null;let a=this.buehne.bildschirmZuBuehne(e,t),o=this.buehne.bildschirmZuBuehne(n,i);if(!a||!o)return null;let l=r.pxProMm*(this.anpassung.skala||1),c=new T((o.x-a.x)/l,(o.y-a.y)/l,0);c.applyQuaternion(r.quaternion.clone().invert());let h=this.produkt.art;return h==="ring"||h==="armband"?c.set(0,c.y,0):c.z=0,c}ziehen({phase:e,clientX:t,clientY:n}){if(e==="start"){this.zug={x:t,y:n,versatz:this.anpassung.versatzMm.clone()};return}if(e==="ende"){this.zug=null;return}if(!this.zug)return;let i=this.bildschirmZuMm(this.zug.x,this.zug.y,t,n);i&&this.setzeVersatz(this.zug.versatz.clone().add(i))}verschiebeUm(e,t){let n=this.fenster.buehne.getBoundingClientRect(),i=n.left+n.width/2,r=n.top+n.height/2,a=this.bildschirmZuMm(i,r,i+e,r+t);a&&this.setzeVersatz(this.anpassung.versatzMm.clone().add(a))}setzeVersatz(e){let t=fw[this.produkt.art]||20;e.length()>t&&e.setLength(t),this.anpassung.versatzMm.copy(e),this.anpassungUebernehmen()}skaliere(e){e>0&&(this.anpassung.skala=Math.min(mw,Math.max(pw,this.anpassung.skala*e)),this.anpassungUebernehmen())}setzeAnpassungZurueck(){this.anpassung.skala=1,this.anpassung.versatzMm.set(0,0,0),this.anpassungUebernehmen()}anpassungUebernehmen(){this.buehne&&this.buehne.setzeAnpassung(this.anpassung),this.anpassungGeaendert(),this.zustand==="foto"&&(this.rendereEinmal(),this.weckeFoto())}anpassungGeaendert(){let e=this.anpassung;this.fenster.setzeAnpassungAktiv(Math.abs(e.skala-1)>.01||e.versatzMm.length()>.3),this.debugObjekt&&(this.debugObjekt.anpassung={skala:e.skala,versatzMm:e.versatzMm.toArray()})}async fotoGewaehlt(e){if(this.zustand==="zu")return;let t=this.sitzung;this.stoppeSchleife(),this.kameraNr++,this.stoppeKamera(),this.fenster.setzeVideo(null),this.fenster.setzeMilchglas(!1),this.setzeZustand("laden"),(!this.vorrat||this.vorrat.fehler)&&(this.vorrat=Uf(this.produkt.art,this.konfig)),this.kameraBereit=!0;let n=this.ladeFortschrittVerfolgen(),i;try{i=await Pw(e)}catch(l){t===this.sitzung&&this.zeigeFehler("foto",l);return}if(t!==this.sitzung){URL.revokeObjectURL(i.url);return}this.objektUrls.add(i.url);try{this.bereiteBuehne(),n(this.vorrat.anteil)}catch(l){this.zeigeFehler("webgl",l);return}let r;try{r=await this.vorrat.bereit}catch(l){t===this.sitzung&&this.zeigeFehler("laden",l);return}if(t!==this.sitzung)return;this.tracker=r,this.fotoQuelle=i;try{if(await this.zeigeVariante(this.variante,t),t!==this.sitzung)return;let{canvas:l}=i;this.ergebnis=r.verarbeite(l,null,{W:l.width,H:l.height,spiegel:!1}),r.zuruecksetzen()}catch(l){t===this.sitzung&&this.zeigeFehler("allgemein",l);return}this.debugObjekt&&(this.debugObjekt.ergebnis=this.ergebnis),this.fenster.setzeFortschritt(1,"Bereit"),this.fenster.setzeFotoGrund(i.url),this.fenster.setzeFotoModus(!0,!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)),this.fenster.setzeFinger(this.finger),this.fenster.setzeVarianten(this.produkt.varianten,this.variante),this.quelleSetzen(!0),this.fotoEinpassen();let a=this.ergebnis,o=a&&a.gefunden?null:{code:a&&a.hinweis&&a.hinweis.code||"kein-fund",text:kw[this.produkt.art]};!o&&this.ringOberteilAbgewandt(a)&&(o={code:"handruecken",text:"Am sch\xF6nsten mit einem Foto vom Handr\xFCcken"}),this.fenster.setzeHinweis(o),await Mh(120),!(t!==this.sitzung||this.zustand!=="laden")&&(this.setzeZustand("foto"),this.starteSchleife())}fotoEinpassen(){let e=this.buehne,t=this.ergebnis;if(!e||!t||!t.gefunden||!this.fotoQuelle){e&&e.setzeFokus(null);return}let n=t.anker||{},i=null,r=0,a=Sw[this.produkt.art]||80;if(this.produkt.art==="ohrringe"){let p=[n.ohrL,n.ohrR].filter(x=>x&&x.position);p.length&&(i=p.reduce((x,g)=>x.add(g.position),new T).multiplyScalar(1/p.length),r=p[0].pxProMm,p.length===2&&(a=Math.max(a,p[0].position.distanceTo(p[1].position)/(2*r)+40)))}else{let p=this.aktuellerAnker();p&&p.position&&(i=p.position.clone(),r=p.pxProMm)}if(!i||!(r>0)){e.setzeFokus(null);return}this.produkt.art==="kette"&&(i.y-=60*r);let{breite:o,hoehe:l}=e.ansicht,{W:c,H:h}=this.quelleInfo,d=Math.min(o/c,l/h),u=2*a*r*d,f=Math.min(Ew,Math.min(o,l)/Math.max(1,u));e.setzeFokus(f>1.15?{x:i.x,y:i.y,zoom:f}:null)}async ausloesen(){if(this.zustand!=="live"&&this.zustand!=="foto"||!this.buehne||this.nimmtAuf)return;let e=this.sitzung;this.nimmtAuf=!0,this.fenster.setzeAusloeserAktiv(!1),this.fenster.blitz();try{let t=this.buehne.sicht,n=this.quelleInfo?this.quelleInfo.W:0,i=n?Math.min(t.rechts,n)-Math.max(t.links,0):0,r=this.konfig.aufnahmeBreite||1440,a=i>0?Math.min(r,Math.max(720,Math.round(2*i))):r,o=await this.buehne.aufnahme({breite:a});if(e!==this.sitzung)return;let l=await this.mitSignatur(o);if(e!==this.sitzung)return;this.vorherZustand=this.zustand,this.stoppeSchleife(),this.ergebnisBlob=l;let c=URL.createObjectURL(l);this.objektUrls.add(c),this.ergebnisDatei=new File([l],this.dateiname(),{type:"image/jpeg"});let h=!1;try{h=!!(navigator.canShare&&navigator.canShare({files:[this.ergebnisDatei]}))}catch{}this.fenster.setzeErgebnis(c,{teilenMoeglich:h}),this.setzeZustand("ergebnis"),clearTimeout(this.ergebnisKameraUhr),this.ergebnisKameraUhr=setTimeout(()=>{e===this.sitzung&&this.zustand==="ergebnis"&&this.stoppeKamera()},ww)}catch(t){this.meldeFehler(t)}finally{this.nimmtAuf=!1,this.fenster.setzeAusloeserAktiv(!0)}}dateiname(){return`${nx(this.konfig.shopName||"anprobe",20)}-anprobe-${nx(this.produkt.titel)}-${Iw()}.jpg`}async mitSignatur(e){let t=String(this.konfig.shopName||"").trim();if(!t)return e;let n=URL.createObjectURL(e);try{let i=new Image;i.src=n,await i.decode();let r=document.createElement("canvas");r.width=i.naturalWidth,r.height=i.naturalHeight;let a=r.getContext("2d");a.drawImage(i,0,0);let o=r.width,l=r.height,c=Math.min(o,l),h=Dw(a,o,l)>.58,d=h?"251,248,243":"30,27,24",u=a.createLinearGradient(0,l*.8,0,l);u.addColorStop(0,`rgba(${d},0)`),u.addColorStop(1,`rgba(${d},${h?.32:.26})`),a.fillStyle=u,a.fillRect(0,l*.8,o,l*.2);let f=getComputedStyle(this.fenster.$(".a-titel")).fontFamily||"serif",p=getComputedStyle(this.fenster.el).fontFamily||"sans-serif",x=h?"30,27,24":"255,255,255";a.fillStyle=`rgba(${x},0.92)`,a.textBaseline="alphabetic";let g=Math.round(c*.034),m=Math.round(c*.016),_=l-c*.05;return ix(a,t.toUpperCase(),o/2,_-m*2.2,f,"400",g,.32,o*.88),a.fillStyle=`rgba(${x},0.76)`,ix(a,`${this.produkt.titel}`.toUpperCase(),o/2,_,p,"500",m,.22,o*.88),await new Promise(y=>r.toBlob(v=>y(v||e),"image/jpeg",.92))}catch(i){return this.meldeFehler(i),e}finally{URL.revokeObjectURL(n)}}async teilen(){if(this.ergebnisDatei)try{await navigator.share({files:[this.ergebnisDatei],title:`${this.produkt.titel} \u2013 ${this.konfig.shopName||""}`.replace(/ – $/,""),text:`Meine Anprobe: ${this.produkt.titel}`})}catch(e){if(e&&e.name==="AbortError")return;this.meldeFehler(e),this.speichern()}}speichern(){if(!this.ergebnisBlob)return;let e=URL.createObjectURL(this.ergebnisBlob),t=document.createElement("a");t.href=e,t.download=this.ergebnisDatei?this.ergebnisDatei.name:this.dateiname(),t.rel="noopener",t.style.display="none",document.body.appendChild(t),t.click(),t.remove(),setTimeout(()=>URL.revokeObjectURL(e),3e4),this.fenster.sage("Bild gespeichert.")}zurueckZurAnprobe(){if(this.zustand==="ergebnis"){if(clearTimeout(this.ergebnisKameraUhr),this.vorherZustand==="foto"){this.setzeZustand("foto"),this.starteSchleife();return}if(!this.stream){this.kameraStarten();return}this.setzeZustand("live"),this.starteSchleife()}}zeigeFehler(e,t){if(t&&Cw.has(e)?(this.debugObjekt&&(this.debugObjekt.kameraFehler=`${t.name||"Fehler"}: ${t.message||""}`),typeof console<"u"&&console.info("[anprobe] Kamera:",e,t.name||t)):t&&this.meldeFehler(t),this.zustand==="zu")return;this.stoppeSchleife(),e!=="foto"&&this.stoppeKamera();let n=tx[e]||tx.allgemein;this.fenster.setzeFehler({titel:n.titel,text:n.text,foto:n.foto!==!1,erneut:n.erneut!==!1}),this.setzeZustand("fehler"),this.debugObjekt&&(this.debugObjekt.fehlerArt=e)}meldeFehler(e){let t=e&&e.message?`${e.name||"Fehler"}: ${e.message}`:String(e);this.debugObjekt&&(this.debugObjekt.fehler.push(t),this.debugObjekt.fehler.length>50&&this.debugObjekt.fehler.shift()),typeof console<"u"&&console.warn("[anprobe]",e)}richteDebugEin(){if(!this.konfig.debug){this.debugObjekt=null;return}let e=window.__anprobe;this.debugObjekt={zustand:this.zustand,ergebnis:null,fps:0,renderMs:0,trackingMs:0,fehler:e&&Array.isArray(e.fehler)?e.fehler:[],produkt:this.produkt,variante:this.variante,finger:this.finger,kameraAktiv:!1,spiegel:this.spiegel,qualitaet:{stufe:this.stufe,...yh[this.stufe]},anpassung:{skala:1,versatzMm:[0,0,0]},app:this},window.__anprobe=this.debugObjekt}richteDebugKamera(){this.debugObjekt&&(this.debugObjekt.kameraAktiv=!!(this.stream&&this.stream.getVideoTracks().some(e=>e.readyState==="live")),this.debugObjekt.spiegel=this.spiegel)}};function Dw(s,e,t){try{let n=Math.max(1,Math.round(e*.6)),i=Math.max(1,Math.round(t*.12)),r=s.getImageData(Math.round(e*.2),t-i,n,i).data,a=0,o=0;for(let l=0;l<r.length;l+=64)a+=.2126*r[l]+.7152*r[l+1]+.0722*r[l+2],o++;return o?a/o/255:.5}catch{return .5}}function ix(s,e,t,n,i,r,a,o,l=1/0){let c=[...e],h=m=>{s.font=`${r} ${m}px ${i}`;let _=c.map(y=>s.measureText(y).width);return{b:_,gesamt:_.reduce((y,v)=>y+v,0)+m*o*(c.length-1)}},d=a,u=h(d);u.gesamt>l&&(d=Math.max(8,Math.floor(d*l/u.gesamt)),u=h(d));let f=u.b,p=d*o,x=u.gesamt,g=t-x/2;s.textAlign="left",c.forEach((m,_)=>{s.fillText(m,g,n),g+=f[_]+p})}var Uw="2.0.0",rx=new WeakSet,Eh=null,Fw=s=>String(s??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function ax(){if(Eh)return Eh;let s=document.createElement("div");s.setAttribute("data-anprobe-fenster",""),document.body.appendChild(s);let e=s.attachShadow({mode:"open"}),t=document.createElement("div");return e.appendChild(t),Eh=new Sh(t,{konfig:In}),Eh}function Of(s){if(rx.has(s))return;rx.add(s);let e;try{e=lo(s)}catch(r){console.warn("[anprobe] Produktdaten nicht lesbar:",r);return}if(!e.art||!e.varianten.length){Eo("Kein Schmuck erkannt, kein Knopf:",e.titel);return}s.dataset.farbe&&s.style.setProperty("--anprobe-farbe",s.dataset.farbe);let t=s.shadowRoot;if(!t)try{t=s.attachShadow({mode:"open"})}catch{let r=document.createElement("span");r.style.display="block";for(let a of["data-voll","data-breit"])s.hasAttribute(a)&&r.setAttribute(a,"");s.appendChild(r),t=r.attachShadow({mode:"open"})}let n=s.dataset.text||In.knopfText||"Virtuell anprobieren";t.innerHTML=`<style>${V0}</style><button type="button" part="knopf" aria-haspopup="dialog">${$t.funkeln}<span part="text">${Fw(n)}</span></button>`,t.querySelector("button").addEventListener("click",()=>{let r=e;try{r=lo(s)}catch{}(!r.art||!r.varianten.length)&&(r=e),r.startVariante=Ow(s,r.varianten),ax().oeffne(r).catch(a=>console.error("[anprobe]",a))})}function Ow(s,e){if(!e||e.length<2)return 0;let t=[];try{let i=document.querySelector('form[action*="/cart/add"]');if(i){let r=i.querySelector('select[name="id"] option:checked');r&&t.push(r.textContent);for(let a of i.querySelectorAll('input[type="radio"]:checked'))t.push(a.value);for(let a of i.querySelectorAll('select:not([name="id"]) option:checked'))t.push(a.value||a.textContent)}}catch{}s.dataset.variante&&t.push(s.dataset.variante);let n=i=>String(i||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim();for(let i of t.map(n).filter(Boolean)){let r=-1,a=0;if(e.forEach((o,l)=>{let c=n(o&&o.name);c&&i.includes(c)&&c.length>a&&(r=l,a=c.length)}),r>=0)return r}return 0}function yo(s=document,e){s&&!(s instanceof Node)&&typeof s=="object"&&(e=s,s=document),(e||window.AnprobeKonfig)&&jf(e);let t=s||document;if(t instanceof Element&&t.matches("[data-anprobe]")&&Of(t),t.querySelectorAll)for(let n of t.querySelectorAll("[data-anprobe]"))Of(n)}async function Bw(s){let e;if(typeof s=="string"&&(s=document.querySelector(s)),s instanceof Element?e=lo(s):s&&typeof s=="object"&&(e=s.varianten&&s.varianten.length&&s.varianten[0].spec?s:qg(s)),!e||!e.art)throw new Error("Anprobe: kein Schmuckst\xFCck erkannt");return ax().oeffne(e)}function Hw(){document.addEventListener("shopify:section:load",s=>yo(s.target)),typeof MutationObserver=="function"&&new MutationObserver(s=>{for(let e of s)for(let t of e.addedNodes)t.nodeType===1&&(t.matches("[data-anprobe]")?Of(t):t.firstElementChild&&t.querySelector("[data-anprobe]")&&yo(t))}).observe(document.documentElement,{childList:!0,subtree:!0})}typeof window<"u"&&!(window.Anprobe&&window.Anprobe.version)&&(window.Anprobe={init:yo,oeffne:Bw,konfig:In,version:Uw},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>yo(),{once:!0}):yo(),Hw());export{yo as init,In as konfig,Bw as oeffne};
//# sourceMappingURL=anprobe.js.map
